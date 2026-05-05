import type { Metadata } from "next";
import Link from "next/link";

import { FinalCta } from "@/components/final-cta";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Dyno Tuning | TurboGixxer Tuning",
  description:
    "Half-day dyno tuning sessions in Auburn, WA. Street, track, and high-power builds across Haltech, Hondata, HP Tuners, Link, MoTeC, and more.",
};

const PLATFORMS = [
  "Haltech",
  "Hondata",
  "HP Tuners",
  "Link",
  "MoTeC",
  "Ecumaster",
  "MaxxECU",
  "Holley",
  "TunerPro",
  "MegaSquirt",
];

const FAQ = [
  {
    q: "How much does a full tune cost?",
    a: "Pricing depends on platform and scope. Naturally aspirated builds start at $200, forced induction higher. Full pricing on the Pricing page.",
  },
  {
    q: "What if my car isn't ready?",
    a: "We'll tell you before the session. The pre-tune review exists to catch issues before they cost you a day on the dyno. If something needs fixing, we'll work with you on rescheduling.",
  },
  {
    q: "Can I watch the tune?",
    a: "Yes. Most customers stick around. The shop has space and you'll learn more about your car than reading a final report.",
  },
  {
    q: "Do you tune E85 / flex fuel?",
    a: "Yes. E85 and flex setups are common here — bring fuel composition data if you have it.",
  },
  {
    q: "What if I need a revision later?",
    a: "Most builds don't, but follow-up tweaks are quoted case by case. Significant changes (new turbo, cams, fuel system) warrant a fresh session.",
  },
];

export default function DynoTuningPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="route-intro">
        <div className="route-grid">
          <div>
            <p className="section-kicker">Dyno Tuning</p>
            <h1>Tuned in-house. Verified before you leave.</h1>
          </div>
          <div className="route-copy">
            <p>
              Half-day dyno sessions in Auburn, WA. Street, track, and
              high-power builds across every major ECU platform we calibrate.
            </p>
            <div className="cta-row">
              <Link className="button-primary" href="/contact?topic=dyno-tuning">
                Book A Session
              </Link>
              <Link className="button-secondary" href="/pricing">
                View Full Pricing
              </Link>
            </div>
            <p className="route-price-note">Starting at $200 · $200 deposit to book</p>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="route-section">
        <SectionHeading kicker="What You Get" title="A finished file, not a starting point.">
          <p>
            Most shops sell you dyno time. We sell you a finished calibration.
            Every session ends with a file you can drive on, log, and trust.
          </p>
        </SectionHeading>
        <div className="service-checklist-grid">
          <div className="service-timeline-step">
            <h3>Pre-tune review</h3>
            <p>
              We go through your build, harness, sensors, and base map before
              strapping the car down. Catching a wiring issue at 9am is cheaper
              than catching it at 2pm.
            </p>
          </div>
          <div className="service-timeline-step">
            <h3>Full calibration</h3>
            <p>
              Fueling, ignition, boost control, cam timing, idle, transient
              response, and any platform-specific tables your ECU supports.
              Tuned across the operating range, not just WOT pulls.
            </p>
          </div>
          <div className="service-timeline-step">
            <h3>Verified pulls</h3>
            <p>
              Power numbers are the byproduct, not the point. We verify the
              file holds across multiple pulls, temps, and conditions before
              signing off.
            </p>
          </div>
          <div className="service-timeline-step">
            <h3>Final file delivery</h3>
            <p>
              You leave with the calibration loaded and a backup file. Notes on
              what was changed and why.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="route-section">
        <SectionHeading
          kicker="How It Works"
          title="What a dyno day actually looks like."
        />
        <ol className="dyno-step-list">
          <li className="dyno-step">
            <span className="dyno-step-num">01</span>
            <div className="dyno-step-body">
              <h3>Send the build details</h3>
              <p>
                Platform, ECU, fuel setup, mods, current tune status, and power
                goal. We confirm fitment before booking.
              </p>
            </div>
          </li>
          <li className="dyno-step">
            <span className="dyno-step-num">02</span>
            <div className="dyno-step-body">
              <h3>Book the session</h3>
              <p>
                Half-day sessions, 9am or 1pm start. $200 deposit holds the
                slot. Balance due day-of.
              </p>
            </div>
          </li>
          <li className="dyno-step">
            <span className="dyno-step-num">03</span>
            <div className="dyno-step-body">
              <h3>Drop off and pre-tune</h3>
              <p>
                Pre-tune inspection, datalog review, and base-map check. We
                don't pull a strap-down trigger until the car's ready.
              </p>
            </div>
          </li>
          <li className="dyno-step">
            <span className="dyno-step-num">04</span>
            <div className="dyno-step-body">
              <h3>Tune</h3>
              <p>
                Fueling, ignition, boost, and platform-specific tables.
                Verified pulls. As many revisions as the session needs.
              </p>
            </div>
          </li>
          <li className="dyno-step">
            <span className="dyno-step-num">05</span>
            <div className="dyno-step-body">
              <h3>Drive home</h3>
              <p>
                Final file loaded, backup saved, and notes on what was changed.
                Follow-up questions answered after the session.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* ── PLATFORMS ── */}
      <section className="route-section">
        <SectionHeading kicker="Platforms" title="ECUs we tune on the dyno." />
        <div className="dyno-platforms">
          <div className="dyno-platform-strip">
            {PLATFORMS.map((name) => (
              <span key={name} className="dyno-platform-name">
                {name}
              </span>
            ))}
          </div>
          <p className="dyno-platform-note">
            Don't see yours? Ask. We tune more platforms than the list suggests.
          </p>
        </div>
      </section>

      {/* ── BEFORE YOU BOOK ── */}
      <section className="route-section">
        <SectionHeading kicker="Before You Book" title="Send these six things." />
        <ol className="dyno-before-list">
          <li>Platform (year, make, model, engine)</li>
          <li>ECU and harness (brand, model, install state)</li>
          <li>Fuel setup (pump gas, E85, race fuel, flex)</li>
          <li>Current mods (intake, exhaust, turbo, cams, etc.)</li>
          <li>Current tune status (stock, base map, previously tuned)</li>
          <li>Power goal or use case (street, track, drag, road race)</li>
        </ol>
        <p className="dyno-before-note">
          More detail is better. If you're not sure, send what you have and
          we'll ask the rest.
        </p>
      </section>

      {/* ── FAQ ── */}
      <section className="route-section">
        <SectionHeading kicker="FAQ" title="Common questions." />
        <div className="dyno-faq">
          {FAQ.map(({ q, a }) => (
            <div className="dyno-faq-item" key={q}>
              <h3>{q}</h3>
              <p>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <FinalCta
        kicker="Ready"
        title="Send the build. We'll book the session."
        summary="Response in 24–48 hours · Auburn, Washington"
        primaryCta={{ href: "/contact?topic=dyno-tuning", label: "Start A Build Consult" }}
      />
    </>
  );
}
