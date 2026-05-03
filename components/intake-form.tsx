"use client";

import Script from "next/script";
import {
  useActionState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import { submitIntakeForm } from "@/app/contact/actions";
import {
  ECU_PLATFORMS,
  FUEL_OPTIONS,
  GOALS,
  POWER_TARGETS,
  SESSION_TYPES,
  TIMELINES,
} from "@/lib/intake-options";
import type {
  IntakeActionState,
  IntakeFieldName,
  IntakeFieldErrors,
} from "@/lib/intake-schema";
import { useSessionStorageForm } from "@/lib/use-session-storage-form";
import cardSurfaceStyles from "./card-surface.module.css";
import styles from "./intake-form.module.css";

type Step = 1 | 2 | 3;

type TurnstileRenderOptions = {
  sitekey: string;
  action?: string;
  appearance?: "always" | "execute" | "interaction-only";
  execution?: "render" | "execute";
  callback?: (token: string) => void;
  "error-callback"?: () => void;
  "expired-callback"?: () => void;
  "timeout-callback"?: () => void;
};

declare global {
  interface Window {
    turnstile?: {
      execute: (widgetId?: string | HTMLElement) => void;
      getResponse?: (widgetId?: string) => string;
      isExpired?: (widgetId?: string) => boolean;
      remove?: (widgetId: string) => void;
      render: (container: string | HTMLElement, options: TurnstileRenderOptions) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

export type ProductInquiry = {
  category?: string;
  product: string;
  sku?: string;
};

type IntakeFormData = {
  productInterest: string;
  year: string;
  make: string;
  model: string;
  ecu: string;
  fuel: string;
  mods: string;
  primaryGoal: string;
  powerTarget: string;
  timeline: string;
  sessionType: string;
  name: string;
  email: string;
  phone: string;
};

const INITIAL: IntakeFormData = {
  productInterest: "",
  year: "",
  make: "",
  model: "",
  ecu: "",
  fuel: "",
  mods: "",
  primaryGoal: "",
  powerTarget: "",
  timeline: "",
  sessionType: "",
  name: "",
  email: "",
  phone: "",
};

const INITIAL_ACTION_STATE: IntakeActionState = {
  status: "idle",
};

const INTAKE_SESSION_STORAGE_KEY = "tgt:intake-form:v1";
const TURNSTILE_RESPONSE_FIELD = "cf-turnstile-response";
const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY ??
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ??
  "";

const STEP_META: Array<{ num: Step; label: string }> = [
  { num: 1, label: "The Build" },
  { num: 2, label: "The Goal" },
  { num: 3, label: "You" },
];

const selectClassName = `intake-input ${styles.select}`;

function formatProductInterest(productInquiry?: ProductInquiry) {
  if (!productInquiry) return "";

  const productLine = [productInquiry.sku, productInquiry.product]
    .filter(Boolean)
    .join(" - ");

  return [productLine, productInquiry.category].filter(Boolean).join("\n");
}

function fieldError(errors: IntakeFieldErrors | undefined, field: IntakeFieldName | "turnstile") {
  return errors?.[field]?.[0];
}

function errorId(field: IntakeFieldName | "turnstile") {
  return `intake-${field}-error`;
}

function WrenchIcon() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="intake-success-icon"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const STEP_ICONS = [WrenchIcon, TargetIcon, UserIcon];

export function IntakeForm({
  productInquiry,
}: {
  productInquiry?: ProductInquiry;
}) {
  const initialData = useMemo(
    () => ({
      ...INITIAL,
      ecu: productInquiry ? "Haltech" : INITIAL.ecu,
      productInterest: formatProductInterest(productInquiry),
    }),
    [productInquiry],
  );

  const formRef = useRef<HTMLFormElement>(null);
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);
  const submitAfterTurnstileRef = useRef(false);
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const {
    data,
    setData,
    hydrated: formHydrated,
    saved: formSaved,
    clearSavedData,
  } = useSessionStorageForm<IntakeFormData>({
    key: INTAKE_SESSION_STORAGE_KEY,
    initialValue: initialData,
    enabled: !submitted,
  });
  const [actionState, formAction, isPending] = useActionState(
    submitIntakeForm,
    INITIAL_ACTION_STATE,
  );

  const resetTurnstile = useCallback(() => {
    setTurnstileToken("");

    if (turnstileWidgetIdRef.current) {
      window.turnstile?.reset(turnstileWidgetIdRef.current);
    }
  }, []);

  const renderTurnstile = useCallback(() => {
    if (
      !TURNSTILE_SITE_KEY ||
      !turnstileContainerRef.current ||
      !window.turnstile ||
      turnstileWidgetIdRef.current
    ) {
      return;
    }

    turnstileWidgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      action: "intake",
      appearance: "interaction-only",
      execution: "execute",
      callback: (token) => setTurnstileToken(token),
      "error-callback": () => setTurnstileToken(""),
      "expired-callback": () => setTurnstileToken(""),
      "timeout-callback": () => setTurnstileToken(""),
    });
  }, []);

  useEffect(() => {
    renderTurnstile();
  }, [renderTurnstile]);

  useEffect(() => {
    return () => {
      if (turnstileWidgetIdRef.current) {
        window.turnstile?.remove?.(turnstileWidgetIdRef.current);
        turnstileWidgetIdRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!turnstileToken || !submitAfterTurnstileRef.current) return;

    submitAfterTurnstileRef.current = false;
    formRef.current?.requestSubmit();
  }, [turnstileToken]);

  useEffect(() => {
    if (!actionState.submissionId) return;

    if (actionState.status === "success") {
      setSubmitted(true);
      setToastVisible(true);
      clearSavedData();
      resetTurnstile();

      const timeoutId = window.setTimeout(() => setToastVisible(false), 4000);
      return () => window.clearTimeout(timeoutId);
    }

    if (actionState.status === "error") {
      resetTurnstile();

      const errors = actionState.fieldErrors ?? {};
      const stepOneFields: Array<IntakeFieldName> = [
        "year",
        "make",
        "model",
        "ecu",
        "fuel",
        "mods",
        "productInterest",
      ];
      const stepTwoFields: Array<IntakeFieldName> = [
        "primaryGoal",
        "powerTarget",
        "timeline",
        "sessionType",
      ];

      if (stepOneFields.some((field) => errors[field])) {
        setStep(1);
      } else if (stepTwoFields.some((field) => errors[field])) {
        setStep(2);
      } else {
        setStep(3);
      }
    }
  }, [actionState, clearSavedData, resetTurnstile]);

  const update = useCallback(
    (field: keyof IntakeFormData) =>
      (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setData((prev) => ({ ...prev, [field]: e.target.value }));
      },
    [],
  );

  const pick = useCallback(
    (field: keyof IntakeFormData, value: string) => () => {
      setData((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const stepValid = useMemo(() => {
    if (step === 1) {
      return !!(data.year && data.make && data.model && data.ecu && data.fuel);
    }
    if (step === 2) {
      return !!(data.primaryGoal && data.powerTarget && data.timeline && data.sessionType);
    }
    return !!(data.name && data.email);
  }, [step, data]);

  const goForward = useCallback(() => {
    if (!stepValid) return;
    if (step < 3) setStep((s) => (s + 1) as Step);
  }, [step, stepValid]);

  const goBack = useCallback(() => {
    if (step > 1) setStep((s) => (s - 1) as Step);
  }, [step]);

  const jumpTo = useCallback(
    (target: Step) => {
      if (target < step) setStep(target);
    },
    [step],
  );

  const handleFormSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      if (step !== 3 || !stepValid || isPending) {
        event.preventDefault();
        return;
      }

      const widgetId = turnstileWidgetIdRef.current;
      const tokenExpired = widgetId ? window.turnstile?.isExpired?.(widgetId) : false;

      if (TURNSTILE_SITE_KEY && widgetId && window.turnstile && (!turnstileToken || tokenExpired)) {
        event.preventDefault();
        submitAfterTurnstileRef.current = true;
        window.turnstile.execute(widgetId);
      }
    },
    [isPending, step, stepValid, turnstileToken],
  );

  const renderError = (field: IntakeFieldName | "turnstile") => {
    const error = fieldError(actionState.fieldErrors, field);

    if (!error) return null;

    return (
      <p className="intake-field-error" id={errorId(field)} role="alert">
        {error}
      </p>
    );
  };

  const describedBy = (field: IntakeFieldName | "turnstile") =>
    fieldError(actionState.fieldErrors, field) ? errorId(field) : undefined;

  const progressWidth = step === 1 ? "33.333%" : step === 2 ? "66.666%" : "100%";

  return (
    <div className="intake-container">
      {TURNSTILE_SITE_KEY ? (
        <Script
          onLoad={renderTurnstile}
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
        />
      ) : null}

      {submitted ? (
        <>
          <div className="intake-header">
            <h1>Tell us about the build.</h1>
          </div>
          <div className={`intake-card ${cardSurfaceStyles.premiumCard}`}>
            <div className="intake-success">
              <CheckIcon />
              <h2>Submission received.</h2>
              <p>
                We&apos;ll review the build details and follow up within 24–48 hours with the right
                next step for your project.
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="intake-header">
            <h1>Tell us about the build.</h1>
            <div className="intake-step-counter">
              <span>Step</span>
              <strong>
                {String(step).padStart(2, "0")}/03
              </strong>
            </div>
          </div>

          {data.productInterest ? (
            <div className="intake-product-context" aria-label="Product inquiry">
              <span>Product Inquiry</span>
              <strong>{productInquiry?.product ?? data.productInterest.split("\n")[0]}</strong>
              <p>
                {[productInquiry?.sku, productInquiry?.category].filter(Boolean).join(" / ")}
              </p>
            </div>
          ) : null}

          <div className="intake-progress">
            <div
              aria-label="Form progress"
              aria-valuemax={3}
              aria-valuemin={1}
              aria-valuenow={step}
              className="intake-progress-bar"
              role="progressbar"
            >
              <div className="intake-progress-fill" style={{ width: progressWidth }} />
            </div>
            <div className="intake-markers">
              {STEP_META.map((s, i) => {
                const Icon = STEP_ICONS[i];
                const isComplete = s.num < step;
                const isActive = s.num === step;
                const cls = isActive ? " is-active" : isComplete ? " is-complete" : "";
                return (
                  <button
                    aria-current={isActive ? "step" : undefined}
                    className={`intake-marker${cls}`}
                    disabled={!isComplete}
                    key={s.num}
                    onClick={() => jumpTo(s.num)}
                    type="button"
                  >
                    <span className="intake-marker-num">
                      {String(s.num).padStart(2, "0")}
                    </span>
                    <Icon />
                    <span>{s.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <form
            action={formAction}
            className={`intake-card ${cardSurfaceStyles.premiumCard}`}
            noValidate
            onSubmit={handleFormSubmit}
            ref={formRef}
          >
            <input name="primaryGoal" readOnly type="hidden" value={data.primaryGoal} />
            <input name="sessionType" readOnly type="hidden" value={data.sessionType} />
            <input
              name={TURNSTILE_RESPONSE_FIELD}
              readOnly
              type="hidden"
              value={turnstileToken}
            />
            <div aria-hidden="true" style={{ left: "-10000px", position: "absolute" }}>
              <label htmlFor="intake-company">Company</label>
              <input
                autoComplete="off"
                id="intake-company"
                name="company"
                tabIndex={-1}
                type="text"
              />
            </div>
            <div
              aria-hidden="true"
              ref={turnstileContainerRef}
              style={{ minHeight: 0, minWidth: 0, position: "absolute" }}
            />

            <div className="intake-card-strip">
              <span>
                Section {step} / {STEP_META[step - 1].label}
              </span>
              <span>Req. *</span>
            </div>

            <div className="intake-card-body">
              <div
                className="intake-step-track"
                style={{ transform: `translateX(-${(step - 1) * 100}%)` }}
              >
                <div aria-hidden={step !== 1} className="intake-step" inert={step !== 1}>
                  <div className="intake-row">
                    <label className="intake-field" htmlFor="intake-year">
                      <span className="intake-field-label">Year *</span>
                      <input
                        aria-describedby={describedBy("year")}
                        aria-invalid={Boolean(fieldError(actionState.fieldErrors, "year"))}
                        aria-required="true"
                        className="intake-input"
                        id="intake-year"
                        inputMode="numeric"
                        name="year"
                        onChange={update("year")}
                        placeholder="e.g. 2018"
                        type="text"
                        value={data.year}
                      />
                      {renderError("year")}
                    </label>
                    <label className="intake-field" htmlFor="intake-make">
                      <span className="intake-field-label">Make *</span>
                      <input
                        aria-describedby={describedBy("make")}
                        aria-invalid={Boolean(fieldError(actionState.fieldErrors, "make"))}
                        aria-required="true"
                        autoComplete="organization"
                        className="intake-input"
                        id="intake-make"
                        name="make"
                        onChange={update("make")}
                        placeholder="e.g. Honda"
                        type="text"
                        value={data.make}
                      />
                      {renderError("make")}
                    </label>
                    <label className="intake-field" htmlFor="intake-model">
                      <span className="intake-field-label">Model *</span>
                      <input
                        aria-describedby={describedBy("model")}
                        aria-invalid={Boolean(fieldError(actionState.fieldErrors, "model"))}
                        aria-required="true"
                        className="intake-input"
                        id="intake-model"
                        name="model"
                        onChange={update("model")}
                        placeholder="e.g. Civic Si"
                        type="text"
                        value={data.model}
                      />
                      {renderError("model")}
                    </label>
                  </div>

                  <div className="intake-row intake-row-2">
                    <label className="intake-field" htmlFor="intake-ecu">
                      <span className="intake-field-label">ECU Platform *</span>
                      <select
                        aria-describedby={describedBy("ecu")}
                        aria-invalid={Boolean(fieldError(actionState.fieldErrors, "ecu"))}
                        aria-required="true"
                        className={selectClassName}
                        id="intake-ecu"
                        name="ecu"
                        onChange={update("ecu")}
                        value={data.ecu}
                      >
                        <option value="">Select platform</option>
                        {ECU_PLATFORMS.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                      {renderError("ecu")}
                    </label>
                    <label className="intake-field" htmlFor="intake-fuel">
                      <span className="intake-field-label">Fuel *</span>
                      <select
                        aria-describedby={describedBy("fuel")}
                        aria-invalid={Boolean(fieldError(actionState.fieldErrors, "fuel"))}
                        aria-required="true"
                        className={selectClassName}
                        id="intake-fuel"
                        name="fuel"
                        onChange={update("fuel")}
                        value={data.fuel}
                      >
                        <option value="">Select fuel</option>
                        {FUEL_OPTIONS.map((f) => (
                          <option key={f} value={f}>
                            {f}
                          </option>
                        ))}
                      </select>
                      {renderError("fuel")}
                    </label>
                  </div>

                  {data.productInterest ? (
                    <label className="intake-field" htmlFor="intake-productInterest">
                      <span className="intake-field-label">Product Interest</span>
                      <textarea
                        aria-describedby={describedBy("productInterest")}
                        aria-invalid={Boolean(
                          fieldError(actionState.fieldErrors, "productInterest"),
                        )}
                        className="intake-input intake-textarea intake-textarea--compact"
                        id="intake-productInterest"
                        name="productInterest"
                        onChange={update("productInterest")}
                        value={data.productInterest}
                      />
                      {renderError("productInterest")}
                    </label>
                  ) : null}

                  <label className="intake-field" htmlFor="intake-mods">
                    <span className="intake-field-label">Current Mods</span>
                    <textarea
                      aria-describedby={describedBy("mods")}
                      aria-invalid={Boolean(fieldError(actionState.fieldErrors, "mods"))}
                      className="intake-input intake-textarea"
                      id="intake-mods"
                      name="mods"
                      onChange={update("mods")}
                      placeholder="Turbo kit, exhaust, injectors, intercooler…"
                      value={data.mods}
                    />
                    {renderError("mods")}
                  </label>
                </div>

                <div aria-hidden={step !== 2} className="intake-step" inert={step !== 2}>
                  <div className="intake-field">
                    <span className="intake-field-label" id="intake-primaryGoal-label">
                      Primary Goal *
                    </span>
                    <div
                      aria-describedby={describedBy("primaryGoal")}
                      aria-labelledby="intake-primaryGoal-label"
                      className="intake-radio-grid"
                      role="radiogroup"
                    >
                      {GOALS.map((g) => (
                        <button
                          aria-checked={data.primaryGoal === g}
                          className={`intake-radio-btn${data.primaryGoal === g ? " is-selected" : ""}`}
                          key={g}
                          onClick={pick("primaryGoal", g)}
                          role="radio"
                          type="button"
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                    {renderError("primaryGoal")}
                  </div>

                  <div className="intake-row intake-row-2">
                    <label className="intake-field" htmlFor="intake-powerTarget">
                      <span className="intake-field-label">Power Target *</span>
                      <select
                        aria-describedby={describedBy("powerTarget")}
                        aria-invalid={Boolean(fieldError(actionState.fieldErrors, "powerTarget"))}
                        aria-required="true"
                        className={selectClassName}
                        id="intake-powerTarget"
                        name="powerTarget"
                        onChange={update("powerTarget")}
                        value={data.powerTarget}
                      >
                        <option value="">Select target</option>
                        {POWER_TARGETS.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                      {renderError("powerTarget")}
                    </label>
                    <label className="intake-field" htmlFor="intake-timeline">
                      <span className="intake-field-label">Timeline *</span>
                      <select
                        aria-describedby={describedBy("timeline")}
                        aria-invalid={Boolean(fieldError(actionState.fieldErrors, "timeline"))}
                        aria-required="true"
                        className={selectClassName}
                        id="intake-timeline"
                        name="timeline"
                        onChange={update("timeline")}
                        value={data.timeline}
                      >
                        <option value="">Select timeline</option>
                        {TIMELINES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      {renderError("timeline")}
                    </label>
                  </div>

                  <div className="intake-field">
                    <span className="intake-field-label" id="intake-sessionType-label">
                      Session Type *
                    </span>
                    <div
                      aria-describedby={describedBy("sessionType")}
                      aria-labelledby="intake-sessionType-label"
                      className="intake-radio-grid intake-radio-grid-3"
                      role="radiogroup"
                    >
                      {SESSION_TYPES.map((s) => (
                        <button
                          aria-checked={data.sessionType === s}
                          className={`intake-radio-btn${data.sessionType === s ? " is-selected" : ""}`}
                          key={s}
                          onClick={pick("sessionType", s)}
                          role="radio"
                          type="button"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                    {renderError("sessionType")}
                  </div>
                </div>

                <div aria-hidden={step !== 3} className="intake-step" inert={step !== 3}>
                  <label className="intake-field" htmlFor="intake-name">
                    <span className="intake-field-label">Name *</span>
                    <input
                      aria-describedby={describedBy("name")}
                      aria-invalid={Boolean(fieldError(actionState.fieldErrors, "name"))}
                      aria-required="true"
                      autoComplete="name"
                      className="intake-input"
                      id="intake-name"
                      name="name"
                      onChange={update("name")}
                      placeholder="Full name"
                      type="text"
                      value={data.name}
                    />
                    {renderError("name")}
                  </label>

                  <div className="intake-row intake-row-2">
                    <label className="intake-field" htmlFor="intake-email">
                      <span className="intake-field-label">Email *</span>
                      <input
                        aria-describedby={describedBy("email")}
                        aria-invalid={Boolean(fieldError(actionState.fieldErrors, "email"))}
                        aria-required="true"
                        autoComplete="email"
                        className="intake-input"
                        id="intake-email"
                        name="email"
                        onChange={update("email")}
                        placeholder="you@email.com"
                        type="email"
                        value={data.email}
                      />
                      {renderError("email")}
                    </label>
                    <label className="intake-field" htmlFor="intake-phone">
                      <span className="intake-field-label">Phone</span>
                      <input
                        aria-describedby={describedBy("phone")}
                        aria-invalid={Boolean(fieldError(actionState.fieldErrors, "phone"))}
                        autoComplete="tel"
                        className="intake-input"
                        id="intake-phone"
                        name="phone"
                        onChange={update("phone")}
                        placeholder="Optional"
                        type="tel"
                        value={data.phone}
                      />
                      {renderError("phone")}
                    </label>
                  </div>

                  <div className="intake-review">
                    <span className="intake-review-title">Review</span>
                    <div className="intake-review-row">
                      <span className="intake-review-label">Build</span>
                      <span className="intake-review-value">
                        {[data.year, data.make, data.model].filter(Boolean).join(" ") || "—"}
                      </span>
                    </div>
                    <div className="intake-review-row">
                      <span className="intake-review-label">ECU</span>
                      <span className="intake-review-value">{data.ecu || "—"}</span>
                    </div>
                    <div className="intake-review-row">
                      <span className="intake-review-label">Fuel</span>
                      <span className="intake-review-value">{data.fuel || "—"}</span>
                    </div>
                    <div className="intake-review-row">
                      <span className="intake-review-label">Power</span>
                      <span className="intake-review-value">{data.powerTarget || "—"}</span>
                    </div>
                    <div className="intake-review-row">
                      <span className="intake-review-label">Goal</span>
                      <span className="intake-review-value">{data.primaryGoal || "—"}</span>
                    </div>
                    <div className="intake-review-row">
                      <span className="intake-review-label">Session</span>
                      <span className="intake-review-value">{data.sessionType || "—"}</span>
                    </div>
                    {data.productInterest ? (
                      <div className="intake-review-row">
                        <span className="intake-review-label">Product</span>
                        <span className="intake-review-value">{data.productInterest}</span>
                      </div>
                    ) : null}
                  </div>
                  {actionState.formError ? (
                    <p
                      aria-live="assertive"
                      className="intake-field-error"
                      id={errorId("turnstile")}
                      role="alert"
                    >
                      {actionState.formError}
                    </p>
                  ) : (
                    renderError("turnstile")
                  )}
                </div>
              </div>
            </div>

            <div className="intake-card-footer">
              <p aria-live="polite" className="intake-save-indicator">
                {formHydrated && formSaved ? "Form progress saved" : ""}
              </p>
              <button
                className="intake-back"
                disabled={step === 1 || isPending}
                onClick={goBack}
                type="button"
              >
                ← Back
              </button>
              <button
                className={`intake-continue${stepValid ? " is-valid" : ""}`}
                disabled={isPending}
                onClick={step === 3 ? undefined : goForward}
                type={step === 3 ? "submit" : "button"}
              >
                {isPending ? (
                  <span className="intake-spinner" />
                ) : step === 3 ? (
                  "Submit →"
                ) : (
                  "Continue →"
                )}
              </button>
            </div>
          </form>
        </>
      )}

      <p className="intake-meta">
        Auburn, WA · Nationwide Remote &nbsp;|&nbsp; Response 24–48 Hrs &nbsp;|&nbsp; 17+ Years EFI
      </p>

      <div
        aria-live="polite"
        className={`intake-toast${toastVisible ? " is-visible" : ""}`}
        role="status"
      >
        ✓ Intake submitted successfully
      </div>
    </div>
  );
}
