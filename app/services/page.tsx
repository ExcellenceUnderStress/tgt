"use client";

import Link from "next/link";
import { useState } from "react";

import { PricingAddonPanel } from "@/components/pricing-addon-panel";
import { PricingCheatSheet } from "@/components/pricing-cheat-sheet";
import { PricingPromptStrip } from "@/components/pricing-prompt-strip";
import { SectionHeading } from "@/components/section-heading";
import { ServicesCategoryTabs } from "@/components/services-category-tabs";
import { servicesPricingContent } from "@/lib/site-content";
import type { ServicePricingTabKey } from "@/lib/site-content";

const TABS_ID = "pricing-tabs";
const CHEAT_SHEET_ID = "pricing-cheat-sheet";

export default function ServicesPage() {
  const { hero, prompt, cheatSheet, factory, standalone, remote, addons, policy, finalCta } =
    servicesPricingContent;
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

      {/* ── "Not sure?" prompt ── */}
      <section className="route-section pricing-section pricing-prompt-section">
        <PricingPromptStrip
          question={prompt.question}
          linkLabel={prompt.linkLabel}
          linkHref={prompt.linkHref}
        />
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

      {/* ── Tabs ── */}
      <ServicesCategoryTabs
        id={TABS_ID}
        factory={factory}
        standalone={standalone}
        remote={remote}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* ── Add-ons strip ── */}
      <section className="route-section pricing-section pricing-addons-section">
        <PricingAddonPanel title={addons.eyebrow} items={addons.items} />
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
