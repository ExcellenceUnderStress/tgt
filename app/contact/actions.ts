"use server";

import { randomUUID } from "node:crypto";

import { headers } from "next/headers";
import { z } from "zod";

import {
  intakeFormSchema,
  type IntakeActionState,
  type IntakeFieldErrors,
  type IntakeFormValues,
} from "@/lib/intake-schema";

const TURNSTILE_SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const TURNSTILE_RESPONSE_FIELD = "cf-turnstile-response";
const HONEYPOT_FIELD = "company";

type HeaderReader = {
  get(name: string): string | null;
};

type TurnstileSiteverifyResponse = {
  success: boolean;
  hostname?: string;
  action?: string;
  "error-codes"?: string[];
};

const responseState = (
  state: Omit<IntakeActionState, "submissionId">,
): IntakeActionState => ({
  ...state,
  submissionId: randomUUID(),
});

const valueFrom = (formData: FormData, key: string) => {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
};

const rawValuesFrom = (formData: FormData) => ({
  productInterest: valueFrom(formData, "productInterest"),
  year: valueFrom(formData, "year"),
  make: valueFrom(formData, "make"),
  model: valueFrom(formData, "model"),
  ecu: valueFrom(formData, "ecu"),
  fuel: valueFrom(formData, "fuel"),
  mods: valueFrom(formData, "mods"),
  primaryGoal: valueFrom(formData, "primaryGoal"),
  powerTarget: valueFrom(formData, "powerTarget"),
  timeline: valueFrom(formData, "timeline"),
  sessionType: valueFrom(formData, "sessionType"),
  name: valueFrom(formData, "name"),
  email: valueFrom(formData, "email"),
  phone: valueFrom(formData, "phone"),
});

const isAllowedOrigin = (headerList: HeaderReader) => {
  const origin = headerList.get("origin");
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");

  if (!origin || !host) return true;

  const configuredOrigins = (process.env.CONTACT_ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  if (configuredOrigins.includes(origin)) return true;

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
};

const remoteIpFrom = (headerList: HeaderReader) => {
  const forwardedFor = headerList.get("x-forwarded-for");

  return (
    headerList.get("cf-connecting-ip") ??
    headerList.get("x-real-ip") ??
    forwardedFor?.split(",")[0]?.trim() ??
    undefined
  );
};

async function verifyTurnstile(token: string, remoteIp?: string) {
  const secret =
    process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY ?? process.env.TURNSTILE_SECRET_KEY;

  if (!secret) return process.env.NODE_ENV !== "production";
  if (!token || token.length > 2048) return false;

  const body = new FormData();
  body.set("secret", secret);
  body.set("response", token);
  body.set("idempotency_key", randomUUID());

  if (remoteIp) {
    body.set("remoteip", remoteIp);
  }

  const response = await fetch(TURNSTILE_SITEVERIFY_URL, {
    method: "POST",
    body,
    cache: "no-store",
  });

  if (!response.ok) return false;

  const result = (await response.json()) as TurnstileSiteverifyResponse;
  if (!result.success) return false;

  const expectedHostname = process.env.CLOUDFLARE_TURNSTILE_HOSTNAME;
  if (expectedHostname && result.hostname !== expectedHostname) return false;

  if (result.action && result.action !== "intake") return false;

  return true;
}

async function deliverIntake(values: IntakeFormValues) {
  const webhookUrl = process.env.INTAKE_WEBHOOK_URL ?? process.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("Missing intake webhook URL.");
    }

    return;
  }

  const requestHeaders: Record<string, string> = {
    "content-type": "application/json",
  };
  const webhookSecret = process.env.INTAKE_WEBHOOK_SECRET ?? process.env.CONTACT_WEBHOOK_SECRET;

  if (webhookSecret) {
    requestHeaders.authorization = `Bearer ${webhookSecret}`;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify({
      source: "contact-intake",
      submittedAt: new Date().toISOString(),
      ...values,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Intake delivery failed.");
  }
}

export async function submitIntakeForm(
  _previousState: IntakeActionState,
  formData: FormData,
): Promise<IntakeActionState> {
  const headerList = await headers();

  if (!isAllowedOrigin(headerList)) {
    return responseState({
      status: "error",
      formError: "Submission could not be verified.",
    });
  }

  if (valueFrom(formData, HONEYPOT_FIELD).trim()) {
    return responseState({ status: "success" });
  }

  const validated = intakeFormSchema.safeParse(rawValuesFrom(formData));

  if (!validated.success) {
    return responseState({
      status: "error",
      fieldErrors: z.flattenError(validated.error).fieldErrors as IntakeFieldErrors,
    });
  }

  const turnstileVerified = await verifyTurnstile(
    valueFrom(formData, TURNSTILE_RESPONSE_FIELD),
    remoteIpFrom(headerList),
  );

  if (!turnstileVerified) {
    return responseState({
      status: "error",
      fieldErrors: {
        turnstile: ["Security verification failed."],
      },
      formError: "Security verification failed.",
    });
  }

  try {
    await deliverIntake(validated.data);
  } catch {
    return responseState({
      status: "error",
      formError: "Submission could not be sent.",
    });
  }

  return responseState({ status: "success" });
}
