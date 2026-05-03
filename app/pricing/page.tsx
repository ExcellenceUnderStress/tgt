"use client";

import Link from "next/link";
import { useState } from "react";

import { PricingCheatSheet } from "@/components/pricing-cheat-sheet";
import { SectionHeading } from "@/components/section-heading";
import { ServicesCategoryTabs } from "@/components/services-category-tabs";
import { servicesPricingContent } from "@/lib/site-content";
import type { ServicePricingTabKey } from "@/lib/site-content";

const HARDWARE_STATS = [
  { label: "Products", value: "500+" },
  { label: "Categories", value: "20+" },
  { label: "Pricelist", value: "Jan 2026" },
] as const;

const TABS_ID = "pricing-tabs";
const CHEAT_SHEET_ID = "pricing-cheat-sheet";

export default function ServicesPage() {
  const { hero, cheatSheet, factory, standalone, remote, policy, finalCta } = servicesPricingContent;
  const [activeTab, setActiveTab] = useState<ServicePricingTabKey>("factory");

  return (
    <>
      {/* ── Pricing Hero ── */}
      <section className="route-intro pricing-hero">
        <div className="pricing-hero-shell">
          <p className="section-kicker">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="pricing-hero-summary">{hero.summary}</p>
        </div>
      </section>

      {/* ── Build-type cheat sheet ── */}
      <PricingCheatSheet
        id={CHEAT_SHEET_ID}
        eyebrow={cheatSheet.eyebrow}
        title={cheatSheet.title}
        items={cheatSheet.items}
        tabsTargetId={TABS_ID}
        onSelect={setActiveTab}
      />

      {/* ── Tabs (per-tab add-ons restored inside) ── */}
      <ServicesCategoryTabs
        id={TABS_ID}
        factory={factory}
        standalone={standalone}
        remote={remote}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* ── Parts & Hardware ── */}
      <section className="route-section pricing-section pricing-hardware-callout">
        <div className="pricing-hardware-shell">
          <div className="pricing-hardware-copy">
            <SectionHeading
              kicker="Parts & Hardware"
              title="Haltech ECUs and accessories, sourced and sold direct."
            >
              <p>
                Parts sales are the third lane alongside dyno and remote. Browse
                the full Haltech catalog — ECUs, wiring accessories, sensors,
                and expansion hardware — or start an inquiry if the right
                package is not yet clear.
              </p>
              <div className="cta-row">
                <Link className="button-primary" href="/shop/haltech">
                  Browse Haltech
                </Link>
                <Link className="button-secondary" href="/contact">
                  Inquire
                </Link>
              </div>
            </SectionHeading>
          </div>

          <div className="pricing-hardware-stats">
            {HARDWARE_STATS.map((s) => (
              <div key={s.label} className="pricing-hardware-stat">
                <span className="pricing-hardware-stat-value">{s.value}</span>
                <span className="pricing-hardware-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking & Policy ── */}
      <section className="route-section pricing-section">
        <div className="pricing-policy-grid">
          <SectionHeading kicker={policy.eyebrow} title={policy.title}>
            <p>{policy.summary}</p>
          </SectionHeading>

          <div className="pricing-policy-panel">
            {policy.items.map((item) => (
              <article className="pricing-policy-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="route-section pricing-section pricing-final-cta">
        <Link className="button-primary" href={finalCta.href}>
          {finalCta.label} <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}
