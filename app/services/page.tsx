import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { BrandGrid } from "@/components/BrandGrid";
import { RouteIntro } from "@/components/route-intro";
import { SectionHeading } from "@/components/section-heading";
import cardStyles from "@/components/card-surface.module.css";

export const metadata: Metadata = {
  title: "Tuning Services | TurboGixxer",
  description:
    "Dyno tuning, remote tuning, and ECU installation for street, track, and high-power builds. Multi-platform — Haltech, Hondata, HP Tuners, Link, MoTeC, and more. Auburn, Washington.",
};

const hero = {
  eyebrow: "SERVICES",
  title: "Tuning is the product. Everything else supports it.",
  summary:
    "Dyno tuning, remote tuning, and ECU installation for street, track, and high-power builds. Multi-platform — Haltech, Hondata, HP Tuners, Link, MoTeC, and more. Auburn, Washington.",
  primaryCta: { href: "/contact?topic=services", label: "Start A Build Consult" },
  secondaryCta: { href: "/pricing", label: "View Pricing" },
};

const servicePaths = [
  {
    eyebrow: "IN-PERSON",
    title: "Dyno Tuning",
    body: "Tuned in-house on our dyno. The fastest path to a finished, verified calibration.",
    included: [
      "Pre-tune inspection and datalog review",
      "Full dyno session — fueling, ignition, boost, cam timing as applicable",
      "Verified pulls across the operating range",
      "Final file loaded and saved",
    ],
    footer: "Half-day sessions, 9am or 1pm start. $200 deposit to book.",
    tagLine: "Auburn, WA · Starting at $200",
    link: { href: "/services/dyno-tuning", label: "Dyno Tuning Details →" },
  },
  {
    eyebrow: "REMOTE",
    title: "Remote Tuning",
    body: "Tuned from your datalogs. Revisions until it's clean. For customers anywhere who can datalog and load files.",
    included: [
      "Base map review and starting calibration",
      "Iterative revisions based on your logs",
      "Communication through the process — text, email, or call",
      "Final file when the data looks right",
    ],
    footer: "Requires datalogging capability and a working sensor setup.",
    tagLine: "Nationwide · Starting at $500",
    link: { href: "/services/remote-tuning", label: "Remote Tuning Details →" },
  },
  {
    eyebrow: "INSTALL",
    title: "ECU Installation",
    body: "Clean Haltech installs done right the first time. Mounting, grounds, shielded wiring, CAN setup, and base-map loading before the first tuning pull.",
    included: [
      "ECU mounting and harness routing",
      "Grounds, shielding, and sensor wiring verified",
      "CAN bus and dash integration",
      "Base map loaded and pre-tune verification",
    ],
    footer: "Pairs naturally with a dyno session — most customers book both.",
    tagLine: "Auburn, WA · Starting at $750 for most builds",
    link: { href: "/services/ecu-installation", label: "ECU Install Details →" },
  },
];

export default function ServicesLandingPage() {
  return (
    <>
      <RouteIntro hero={hero} />

      <section className="route-section" data-reveal-group>
        <SectionHeading
          kicker="SERVICE PATHS"
          title="Three ways in. Pick the one that matches your build."
          data-reveal="slide-up"
        />
        <div className="telemetry-grid">
          {servicePaths.map((path, index) => (
            <article
              className={`telemetry-card ${cardStyles.premiumCard}`}
              data-reveal="slide-up"
              key={path.title}
              style={{ ["--telemetry-index" as string]: index } as CSSProperties}
            >
              <span>{path.eyebrow}</span>
              <strong>{path.title}</strong>
              <p>{path.body}</p>
              <ul className="telemetry-card-list">
                {path.included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <small>{path.footer}</small>
              <p className="telemetry-card-price">{path.tagLine}</p>
              <Link className="section-link" href={path.link.href}>
                {path.link.label}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="route-section" data-reveal-group>
        <p className="section-kicker">PLATFORMS WE CALIBRATE</p>
        <BrandGrid />
        <p>{"Don't see your platform? Ask. The list is shorter than what we actually tune."}</p>
      </section>

      <section className="route-section final-cta-panel">
        <div className="final-cta-copy">
          <p className="section-kicker">HOW TO START</p>
          <h2>Not sure which service fits?</h2>
          <p>
            Send the platform, ECU, harness state, fuel setup, current tune status, and power
            goal. We&rsquo;ll tell you which path makes sense — or if it&rsquo;s a project review
            before anything else.
          </p>
          <div className="cta-row">
            <Link className="button-primary" href="/contact?topic=services">
              Start A Build Consult
            </Link>
          </div>
          <small>Response in 24–48 hours · Auburn, Washington</small>
        </div>
      </section>
    </>
  );
}
