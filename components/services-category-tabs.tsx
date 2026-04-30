"use client";

import { useState } from "react";

import { PricingAddonPanel } from "@/components/pricing-addon-panel";
import { PricingCard } from "@/components/pricing-card";
import { PricingHighlightCard } from "@/components/pricing-highlight-card";
import { PricingSectionHeader } from "@/components/pricing-section-header";
import type { ServicesPricingContent } from "@/lib/site-content";

type ServicesCategoryTabsProps = {
  factory: ServicesPricingContent["factory"];
  standalone: ServicesPricingContent["standalone"];
  remote: ServicesPricingContent["remote"];
};

type TabKey = "factory" | "standalone" | "remote";

export function ServicesCategoryTabs({ factory, standalone, remote }: ServicesCategoryTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("factory");

  return (
    <section className="route-section pricing-section">
      <div className="services-tab-list" role="tablist" aria-label="Service categories">
        <button className="services-tab-button" role="tab" aria-selected={activeTab === "factory"} onClick={() => setActiveTab("factory")}>Factory ECU</button>
        <button className="services-tab-button" role="tab" aria-selected={activeTab === "standalone"} onClick={() => setActiveTab("standalone")}>Standalone ECU</button>
        <button className="services-tab-button" role="tab" aria-selected={activeTab === "remote"} onClick={() => setActiveTab("remote")}>Remote & Support</button>
      </div>

      {activeTab === "factory" ? (
        <>
          <PricingSectionHeader kicker={factory.eyebrow} title={factory.title} summary={factory.summary} flag={factory.flag} />
          <div className="pricing-card-grid">
            {factory.cards.map((card) => (
              <PricingCard key={card.title} card={card} />
            ))}
          </div>
          <PricingAddonPanel title={factory.addons.title} items={factory.addons.items} />
        </>
      ) : null}

      {activeTab === "standalone" ? (
        <>
          <PricingSectionHeader kicker={standalone.eyebrow} title={standalone.title} summary={standalone.summary} flag={standalone.flag} />
          <div className="pricing-card-grid pricing-card-grid-standalone">
            {standalone.cards.map((card) => (
              <PricingCard key={card.title} card={card} />
            ))}
          </div>
          <PricingAddonPanel title={standalone.addons.title} items={standalone.addons.items} />
        </>
      ) : null}

      {activeTab === "remote" ? (
        <>
          <PricingSectionHeader kicker={remote.eyebrow} title={remote.title} summary={remote.summary} flag={remote.flag} />
          <div className="pricing-support-grid">
            {remote.cards.map((card) => (
              <PricingHighlightCard key={card.title} card={card} />
            ))}
          </div>
        </>
      ) : null}
    </section>
  );
}
