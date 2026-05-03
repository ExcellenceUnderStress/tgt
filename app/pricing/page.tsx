"use client";

import Link from "next/link";
import { useState } from "react";

import cardStyles from "@/components/card-surface.module.css";
import { PricingCheatSheet } from "@/components/pricing-cheat-sheet";
import {
  PricingPlatformQuickFilter,
  type PricingPlatformRequest,
} from "@/components/pricing-platform-accordions";
import { SectionHeading } from "@/components/section-heading";
import { ServicesCategoryTabs } from "@/components/services-category-tabs";
import { servicesPricingContent } from "@/lib/site-content";
import type { ServicePricingTabKey } from "@/lib/site-content";

const TABS_ID = "pricing-tabs";
const CHEAT_SHEET_ID = "pricing-cheat-sheet";

export default function ServicesPage() {
  const { hero, cheatSheet, factory, standalone, remote, policy, finalCta } = servicesPricingContent;
  const [activeTab, setActiveTab] = useState<ServicePricingTabKey>("factory");
  const [platformRequest, setPlatformRequest] = useState<PricingPlatformRequest | null>(null);

  const handlePlatformSelect = (id: string) => {
    setActiveTab("factory");
    setPlatformRequest((current) => ({
      id,
      sequence: (current?.sequence ?? 0) + 1,
    }));
  };

  return (
    <>
      <section className="route-intro pricing-hero">
        <div className="pricing-hero-shell">
          <p className="section-kicker">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="pricing-hero-summary">{hero.summary}</p>
        </div>
      </section>

      <PricingPlatformQuickFilter cards={factory.cards} onSelect={handlePlatformSelect} />

      <PricingCheatSheet
        id={CHEAT_SHEET_ID}
        eyebrow={cheatSheet.eyebrow}
        title={cheatSheet.title}
        items={cheatSheet.items}
        tabsTargetId={TABS_ID}
        onSelect={setActiveTab}
      />

      <ServicesCategoryTabs
        id={TABS_ID}
        factory={factory}
        standalone={standalone}
        remote={remote}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        platformRequest={platformRequest}
      />

      <section className="route-section pricing-section">
        <div className="pricing-policy-grid">
          <SectionHeading kicker={policy.eyebrow} title={policy.title}>
            <p>{policy.summary}</p>
          </SectionHeading>

          <div className={`pricing-policy-panel ${cardStyles.premiumCard}`}>
            {policy.items.map((item) => (
              <article className="pricing-policy-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="route-section pricing-section pricing-final-cta">
        <Link className="button-primary" href={finalCta.href}>
          {finalCta.label} <span aria-hidden="true">-&gt;</span>
        </Link>
      </section>
    </>
  );
}
