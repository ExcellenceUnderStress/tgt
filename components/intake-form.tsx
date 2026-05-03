"use client";

import { useCallback, useMemo, useState } from "react";

/* ─── Types ─── */
type Step = 1 | 2 | 3;

export type ProductInquiry = {
  category?: string;
  product: string;
  sku?: string;
};

type FormData = {
  productInterest: string;
  year: string;
  make: string;
  model: string;
  ecuPlatform: string;
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

/* ─── Constants ─── */
const INITIAL: FormData = {
  productInterest: "",
  year: "",
  make: "",
  model: "",
  ecuPlatform: "",
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

const ECU_PLATFORMS = [
  "HP Tuners",
  "Hondata",
  "Haltech",
  "Holley EFI",
  "MoTeC",
  "Link ECU",
  "ECU Master",
  "MegaSquirt",
  "MaxxECU",
  "AEM",
  "KTuner",
  "Other",
];

const FUEL_OPTIONS = ["91", "93", "E85", "Race Gas", "Methanol", "Flex", "Other"];

const GOALS = ["Drivability", "Max Power", "Track", "Drag", "Flex Fuel", "Fix / Diag"];

const POWER_TARGETS = [
  "Under 300 WHP",
  "300–500 WHP",
  "500–700 WHP",
  "700–1000 WHP",
  "1000+ WHP",
  "Not Sure",
];

const TIMELINES = ["This Week", "Next 2 Weeks", "This Month", "Flexible", "Just Exploring"];

const SESSION_TYPES = ["Dyno in Auburn", "Remote", "Not Sure"];

const STEP_META: Array<{ num: Step; label: string }> = [
  { num: 1, label: "The Build" },
  { num: 2, label: "The Goal" },
  { num: 3, label: "You" },
];

function formatProductInterest(productInquiry?: ProductInquiry) {
  if (!productInquiry) return "";

  const productLine = [productInquiry.sku, productInquiry.product]
    .filter(Boolean)
    .join(" - ");

  return [productLine, productInquiry.category].filter(Boolean).join("\n");
}

/* ─── Icons ─── */
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

/* ─── Component ─── */
export function IntakeForm() {
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState<FormData>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const update = useCallback(
    (field: keyof FormData) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setData((prev) => ({ ...prev, [field]: e.target.value }));
      },
    [],
  );

  const pick = useCallback(
    (field: keyof FormData, value: string) => () => {
      setData((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const stepValid = useMemo(() => {
    if (step === 1) {
      return !!(data.year && data.make && data.model && data.ecuPlatform && data.fuel);
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

  const handleSubmit = useCallback(() => {
    if (!stepValid || submitting) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 4000);
    }, 1500);
  }, [stepValid, submitting]);

  const progressWidth = step === 1 ? "33.333%" : step === 2 ? "66.666%" : "100%";

  return (
    <div className="intake-container">
      {submitted ? (
        <>
          <div className="intake-header">
            <h1>Tell us about the build.</h1>
          </div>
          <div className="intake-card">
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
          {/* ── Header ── */}
          <div className="intake-header">
            <h1>Tell us about the build.</h1>
            <div className="intake-step-counter">
              <span>Step</span>
              <strong>
                {String(step).padStart(2, "0")}/03
              </strong>
            </div>
          </div>

          {/* ── Progress ── */}
          <div className="intake-progress">
            <div className="intake-progress-bar">
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

          {/* ── Form Card ── */}
          <div className="intake-card">
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
                {/* ── Step 1: The Build ── */}
                <div className="intake-step">
                  <div className="intake-row">
                    <label className="intake-field">
                      <span className="intake-field-label">Year *</span>
                      <input
                        className="intake-input"
                        onChange={update("year")}
                        placeholder="e.g. 2018"
                        type="text"
                        value={data.year}
                      />
                    </label>
                    <label className="intake-field">
                      <span className="intake-field-label">Make *</span>
                      <input
                        className="intake-input"
                        onChange={update("make")}
                        placeholder="e.g. Honda"
                        type="text"
                        value={data.make}
                      />
                    </label>
                    <label className="intake-field">
                      <span className="intake-field-label">Model *</span>
                      <input
                        className="intake-input"
                        onChange={update("model")}
                        placeholder="e.g. Civic Si"
                        type="text"
                        value={data.model}
                      />
                    </label>
                  </div>

                  <div className="intake-row intake-row-2">
                    <label className="intake-field">
                      <span className="intake-field-label">ECU Platform *</span>
                      <select
                        className="intake-input"
                        onChange={update("ecuPlatform")}
                        value={data.ecuPlatform}
                      >
                        <option value="">Select platform</option>
                        {ECU_PLATFORMS.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="intake-field">
                      <span className="intake-field-label">Fuel *</span>
                      <select className="intake-input" onChange={update("fuel")} value={data.fuel}>
                        <option value="">Select fuel</option>
                        {FUEL_OPTIONS.map((f) => (
                          <option key={f} value={f}>
                            {f}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="intake-field">
                    <span className="intake-field-label">Current Mods</span>
                    <textarea
                      className="intake-input intake-textarea"
                      onChange={update("mods")}
                      placeholder="Turbo kit, exhaust, injectors, intercooler…"
                      value={data.mods}
                    />
                  </label>
                </div>

                {/* ── Step 2: The Goal ── */}
                <div className="intake-step">
                  <div className="intake-field">
                    <span className="intake-field-label">Primary Goal *</span>
                    <div className="intake-radio-grid">
                      {GOALS.map((g) => (
                        <button
                          className={`intake-radio-btn${data.primaryGoal === g ? " is-selected" : ""}`}
                          key={g}
                          onClick={pick("primaryGoal", g)}
                          type="button"
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="intake-row intake-row-2">
                    <label className="intake-field">
                      <span className="intake-field-label">Power Target *</span>
                      <select
                        className="intake-input"
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
                    </label>
                    <label className="intake-field">
                      <span className="intake-field-label">Timeline *</span>
                      <select
                        className="intake-input"
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
                    </label>
                  </div>

                  <div className="intake-field">
                    <span className="intake-field-label">Session Type *</span>
                    <div className="intake-radio-grid intake-radio-grid-3">
                      {SESSION_TYPES.map((s) => (
                        <button
                          className={`intake-radio-btn${data.sessionType === s ? " is-selected" : ""}`}
                          key={s}
                          onClick={pick("sessionType", s)}
                          type="button"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── Step 3: You ── */}
                <div className="intake-step">
                  <label className="intake-field">
                    <span className="intake-field-label">Name *</span>
                    <input
                      className="intake-input"
                      onChange={update("name")}
                      placeholder="Full name"
                      type="text"
                      value={data.name}
                    />
                  </label>

                  <div className="intake-row intake-row-2">
                    <label className="intake-field">
                      <span className="intake-field-label">Email *</span>
                      <input
                        className="intake-input"
                        onChange={update("email")}
                        placeholder="you@email.com"
                        type="email"
                        value={data.email}
                      />
                    </label>
                    <label className="intake-field">
                      <span className="intake-field-label">Phone</span>
                      <input
                        className="intake-input"
                        onChange={update("phone")}
                        placeholder="Optional"
                        type="tel"
                        value={data.phone}
                      />
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
                      <span className="intake-review-value">{data.ecuPlatform || "—"}</span>
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
                  </div>
                </div>
              </div>
            </div>

            <div className="intake-card-footer">
              <button
                className="intake-back"
                disabled={step === 1}
                onClick={goBack}
                type="button"
              >
                ← Back
              </button>
              <button
                className={`intake-continue${stepValid ? " is-valid" : ""}`}
                disabled={submitting}
                onClick={step === 3 ? handleSubmit : goForward}
                type="button"
              >
                {submitting ? (
                  <span className="intake-spinner" />
                ) : step === 3 ? (
                  "Submit →"
                ) : (
                  "Continue →"
                )}
              </button>
            </div>
          </div>
        </>
      )}

      {/* ── Footer Meta ── */}
      <p className="intake-meta">
        Auburn, WA · Nationwide Remote &nbsp;|&nbsp; Response 24–48 Hrs &nbsp;|&nbsp; 17+ Years EFI
      </p>

      {/* ── Toast ── */}
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
