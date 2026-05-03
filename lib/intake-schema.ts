import { z } from "zod";

import {
  ECU_PLATFORMS,
  FUEL_OPTIONS,
  GOALS,
  POWER_TARGETS,
  SESSION_TYPES,
  TIMELINES,
} from "@/lib/intake-options";

const requiredText = (label: string, maxLength = 120) =>
  z
    .string()
    .trim()
    .min(1, `${label} is required.`)
    .max(maxLength, `${label} must be ${maxLength} characters or fewer.`);

const optionalText = (maxLength: number) =>
  z.string().trim().max(maxLength, `Must be ${maxLength} characters or fewer.`);

const selectedOption = <T extends readonly [string, ...string[]]>(label: string, options: T) => {
  const optionSet = new Set<string>(options);

  return requiredText(label).refine(
    (value) => optionSet.has(value),
    `Select a valid ${label.toLowerCase()}.`,
  );
};

export const intakeFormSchema = z.object({
  productInterest: optionalText(1500),
  year: requiredText("Year", 8).regex(/^(19|20)\d{2}$/, "Year must be a 4-digit year."),
  make: requiredText("Make"),
  model: requiredText("Model"),
  ecu: selectedOption("ECU", ECU_PLATFORMS),
  fuel: selectedOption("Fuel", FUEL_OPTIONS),
  mods: optionalText(3000),
  primaryGoal: selectedOption("Primary Goal", GOALS),
  powerTarget: selectedOption("Power Target", POWER_TARGETS),
  timeline: selectedOption("Timeline", TIMELINES),
  sessionType: selectedOption("Session Type", SESSION_TYPES),
  name: requiredText("Name"),
  email: requiredText("Email", 254).email("Enter a valid email address."),
  phone: optionalText(40),
});

export type IntakeFormValues = z.infer<typeof intakeFormSchema>;
export type IntakeFieldName = keyof IntakeFormValues;
export type IntakeFieldErrors = Partial<Record<IntakeFieldName | "turnstile", string[]>>;

export type IntakeActionState = {
  status: "idle" | "error" | "success";
  fieldErrors?: IntakeFieldErrors;
  formError?: string;
  submissionId?: string;
};
