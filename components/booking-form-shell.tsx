"use client";

import { useState } from "react";

type ServicePathId = "dyno" | "remote" | "project-review";
type BookingStep = 1 | 2 | 3;

type ServicePath = {
  id: ServicePathId;
  title: string;
  summary: string;
  details: string[];
  nextActionLabel: string;
  nextActionTitle: string;
  nextActionBody: string;
};

type IntakeField =
  | {
      name: string;
      label: string;
      type: "text" | "email" | "tel" | "textarea" | "select";
      required?: boolean;
      options?: string[];
      placeholder?: string;
    };

type IntakeGroup = {
  title: string;
  fields: IntakeField[];
};

const servicePaths: ServicePath[] = [
  {
    id: "dyno",
    title: "Dyno Tuning",
    summary: "In-person session at the shop. Bring a car that's mechanically ready to run.",
    details: [
      "Location: Auburn, WA",
      "Process: Live session after intake review",
      "Deposit: $200 to secure the slot",
    ],
    nextActionLabel: "Dyno Request",
    nextActionTitle: "Request your dyno appointment.",
    nextActionBody: "Pick a date. Kenny confirms fit and availability before the slot is locked.",
  },
  {
    id: "remote",
    title: "Remote E-Tune",
    summary: "For out-of-area builds. You log, we revise, we repeat until it's clean.",
    details: [
      "Location: Nationwide",
      "Process: Datalog review + revision rounds",
      "Deposit: Reviewed before scheduling",
    ],
    nextActionLabel: "Remote Review",
    nextActionTitle: "We'll review your intake and send a quote within 24-48 hours.",
    nextActionBody: "Deposit is collected once scope is confirmed.",
  },
  {
    id: "project-review",
    title: "Project Review",
    summary: "Not sure if it's dyno or remote? Send the details, we'll tell you.",
    details: ["Location: Remote or local", "Process: Conversation first", "Deposit: None"],
    nextActionLabel: "Project Review",
    nextActionTitle: "We'll review your build and get back to you with the next step.",
    nextActionBody: "No commitment, no deposit.",
  },
];

const platformOptions = [
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

const intakeGroups: IntakeGroup[] = [
  {
    title: "Contact Info",
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "tel", required: true },
      {
        name: "contactMethod",
        label: "Preferred contact method",
        type: "select",
        required: true,
        options: ["Email", "Phone", "Text"],
      },
    ],
  },
  {
    title: "Vehicle",
    fields: [
      { name: "vehicleYear", label: "Year", type: "text", required: true },
      { name: "vehicleMake", label: "Make", type: "text", required: true },
      { name: "vehicleModel", label: "Model", type: "text", required: true },
      { name: "engine", label: "Engine", type: "text", required: true },
    ],
  },
  {
    title: "ECU / Platform",
    fields: [
      {
        name: "platform",
        label: "ECU platform",
        type: "select",
        required: true,
        options: platformOptions,
      },
      { name: "platformModel", label: "ECU model", type: "text", required: true },
    ],
  },
  {
    title: "Mods & Fuel",
    fields: [
      { name: "modList", label: "Mod list", type: "textarea", required: true },
      {
        name: "fuelType",
        label: "Fuel type",
        type: "select",
        required: true,
        options: ["91", "93", "E85", "Race gas", "Methanol", "Other"],
      },
      {
        name: "forcedInduction",
        label: "Forced induction",
        type: "select",
        required: true,
        options: ["None", "Turbo", "Supercharger", "Nitrous"],
      },
    ],
  },
  {
    title: "Goals & Timing",
    fields: [
      { name: "goals", label: "Goals", type: "textarea", required: true },
      {
        name: "timeframe",
        label: "Preferred timeframe",
        type: "text",
        required: true,
        placeholder: "e.g., next 2 weeks, flexible, specific date",
      },
      { name: "referralSource", label: "Referral source", type: "text" },
    ],
  },
];

const steps: Array<{ step: BookingStep; label: string }> = [
  { step: 1, label: "Choose Path" },
  { step: 2, label: "Intake Form" },
  { step: 3, label: "Next Action" },
];

function renderField(field: IntakeField) {
  if (field.type === "textarea") {
    return (
      <label className="booking-field" htmlFor={field.name} key={field.name}>
        <span className="booking-field-label">
          {field.label}
          {field.required ? " *" : ""}
        </span>
        <textarea
          className="booking-input booking-textarea"
          id={field.name}
          name={field.name}
          required={field.required}
        />
      </label>
    );
  }

  if (field.type === "select") {
    return (
      <label className="booking-field" htmlFor={field.name} key={field.name}>
        <span className="booking-field-label">
          {field.label}
          {field.required ? " *" : ""}
        </span>
        <select
          className="booking-input"
          defaultValue=""
          id={field.name}
          name={field.name}
          required={field.required}
        >
          <option disabled value="">
            Select one
          </option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }

  return (
    <label className="booking-field" htmlFor={field.name} key={field.name}>
      <span className="booking-field-label">
        {field.label}
        {field.required ? " *" : ""}
      </span>
      <input
        className="booking-input"
        id={field.name}
        name={field.name}
        placeholder={field.placeholder}
        required={field.required}
        type={field.type}
      />
    </label>
  );
}

export function BookingFormShell() {
  const [selectedPathId, setSelectedPathId] = useState<ServicePathId>("dyno");
  const [currentStep, setCurrentStep] = useState<BookingStep>(1);
  const [submittedPathId, setSubmittedPathId] = useState<ServicePathId | null>(null);

  const selectedPath = servicePaths.find((path) => path.id === selectedPathId) ?? servicePaths[0];

  const showStep = (step: BookingStep) => currentStep === step;

  return (
    <section className="booking-shell">
      <div className="booking-progress">
        {steps.map((item) => {
          const state =
            item.step < currentStep ? "is-complete" : item.step === currentStep ? "is-active" : "";

          return (
            <div className={`booking-progress-step ${state}`.trim()} key={item.label}>
              <span>{item.step}</span>
              <strong>{item.label}</strong>
            </div>
          );
        })}
      </div>

      <section className="booking-stage">
        <div className="booking-stage-header">
          <p className="booking-label">Step 1</p>
          <h3>Choose Your Path</h3>
        </div>

        <div className="service-path-grid">
          {servicePaths.map((path) => (
            <button
              className={`service-path-card booking-path-button${selectedPathId === path.id ? " is-selected" : ""}`}
              key={path.id}
              onClick={() => {
                setSelectedPathId(path.id);
                setSubmittedPathId(null);
              }}
              type="button"
            >
              <h3>{path.title}</h3>
              <p>{path.summary}</p>
              <ul className="booking-bullet-list">
                {path.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </button>
          ))}
        </div>

        {showStep(1) ? (
          <div className="booking-step-actions">
            <button className="button-primary" onClick={() => setCurrentStep(2)} type="button">
              Continue To Intake
            </button>
          </div>
        ) : null}
      </section>

      <section className={`booking-stage${currentStep < 2 ? " is-muted" : ""}`}>
        <div className="booking-stage-header">
          <p className="booking-label">Step 2</p>
          <h3>Intake Form</h3>
        </div>

        <form
          className="booking-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmittedPathId(selectedPathId);
            setCurrentStep(3);
          }}
        >
          <div className="booking-intake-grid">
            {intakeGroups.map((group) => (
              <article className="booking-intake-card" key={group.title}>
                <p className="booking-mini-label">{group.title}</p>
                <div className="booking-field-stack">{group.fields.map((field) => renderField(field))}</div>
              </article>
            ))}
          </div>

          {showStep(2) ? (
            <div className="booking-step-actions">
              <button className="button-secondary" onClick={() => setCurrentStep(1)} type="button">
                Back
              </button>
              <button className="button-primary" type="submit">
                Continue To Next Action
              </button>
            </div>
          ) : null}
        </form>
      </section>

      <section className={`booking-stage booking-stage-final${currentStep < 3 ? " is-muted" : ""}`}>
        <div className="booking-stage-header">
          <p className="booking-label">Step 3</p>
          <h3>Schedule or Submit</h3>
        </div>

        <div className="booking-next-grid booking-next-grid-single">
          {selectedPath.id === "dyno" ? (
            <article className="booking-next-card booking-next-card-dyno">
              <p className="booking-mini-label">{selectedPath.nextActionLabel}</p>
              <h3>{selectedPath.nextActionTitle}</h3>
              <p>{selectedPath.nextActionBody}</p>
              <div className="booking-field-grid">
                <label className="booking-field" htmlFor="requestedDate">
                  <span className="booking-field-label">Requested appointment date</span>
                  <input className="booking-input" id="requestedDate" name="requestedDate" type="date" />
                </label>
              </div>
              <p className="booking-action-note">
                $200 non-refundable deposit due once Kenny confirms the booking.
              </p>
            </article>
          ) : (
            <article className="booking-next-card">
              <p className="booking-mini-label">{selectedPath.nextActionLabel}</p>
              <h3>{selectedPath.nextActionTitle}</h3>
              <p>{selectedPath.nextActionBody}</p>
            </article>
          )}
        </div>

        {submittedPathId ? (
          <div className="booking-success-state" role="status">
            <p className="booking-label">Submission State</p>
            <h3>{servicePaths.find((path) => path.id === submittedPathId)?.nextActionTitle}</h3>
          </div>
        ) : null}

        {showStep(3) ? (
          <div className="booking-step-actions">
            <button className="button-secondary" onClick={() => setCurrentStep(2)} type="button">
              Back To Intake
            </button>
            <button className="button-primary" onClick={() => setCurrentStep(1)} type="button">
              Start Over
            </button>
          </div>
        ) : null}
      </section>
    </section>
  );
}
