"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";

import { PricingAddonPanel } from "@/components/pricing-addon-panel";
import { PricingCard } from "@/components/pricing-card";
import { PricingHighlightCard } from "@/components/pricing-highlight-card";
import { PricingSectionHeader } from "@/components/pricing-section-header";
import type { ServicePricingTabKey, ServicesPricingContent } from "@/lib/site-content";

type ServicesCategoryTabsProps = {
  factory: ServicesPricingContent["factory"];
  standalone: ServicesPricingContent["standalone"];
  remote: ServicesPricingContent["remote"];
  /** Optional controlled active tab. If provided, `onTabChange` should also be set. */
  activeTab?: ServicePricingTabKey;
  onTabChange?: (tab: ServicePricingTabKey) => void;
  /** DOM id for the section wrapper, used as a scroll target. */
  id?: string;
};

const TAB_ORDER: ServicePricingTabKey[] = ["factory", "standalone", "remote"];

const TAB_LABELS: Record<ServicePricingTabKey, string> = {
  factory: "Factory ECU",
  standalone: "Standalone ECU",
  remote: "Remote & Track",
};

const tabId = (key: ServicePricingTabKey) => `pricing-tab-${key}`;
const panelId = (key: ServicePricingTabKey) => `pricing-panel-${key}`;

export function ServicesCategoryTabs({
  factory,
  standalone,
  remote,
  activeTab: activeTabProp,
  onTabChange,
  id,
}: ServicesCategoryTabsProps) {
  const [internalTab, setInternalTab] = useState<ServicePricingTabKey>("factory");
  const activeTab = activeTabProp ?? internalTab;
  const tabRefs = useRef<Record<ServicePricingTabKey, HTMLButtonElement | null>>({
    factory: null,
    standalone: null,
    remote: null,
  });
  const lastFocused = useRef<ServicePricingTabKey | null>(null);

  const setTab = (next: ServicePricingTabKey) => {
    if (activeTabProp === undefined) setInternalTab(next);
    onTabChange?.(next);
  };

  useEffect(() => {
    if (lastFocused.current && lastFocused.current === activeTab) {
      tabRefs.current[activeTab]?.focus();
      lastFocused.current = null;
    }
  }, [activeTab]);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, current: ServicePricingTabKey) => {
    const idx = TAB_ORDER.indexOf(current);
    let nextIdx: number | null = null;
    if (event.key === "ArrowRight") nextIdx = (idx + 1) % TAB_ORDER.length;
    else if (event.key === "ArrowLeft") nextIdx = (idx - 1 + TAB_ORDER.length) % TAB_ORDER.length;
    else if (event.key === "Home") nextIdx = 0;
    else if (event.key === "End") nextIdx = TAB_ORDER.length - 1;
    if (nextIdx === null) return;
    event.preventDefault();
    const next = TAB_ORDER[nextIdx];
    lastFocused.current = next;
    setTab(next);
  };

  const tabButton = (key: ServicePricingTabKey) => (
    <button
      key={key}
      ref={(el) => {
        tabRefs.current[key] = el;
      }}
      id={tabId(key)}
      type="button"
      role="tab"
      aria-selected={activeTab === key}
      aria-controls={panelId(key)}
      tabIndex={activeTab === key ? 0 : -1}
      className="services-tab-button"
      onClick={() => setTab(key)}
      onKeyDown={(event) => handleKeyDown(event, key)}
    >
      {TAB_LABELS[key]}
    </button>
  );

  return (
    <section className="route-section pricing-section" id={id}>
      <div className="services-tab-list" role="tablist" aria-label="Service categories">
        {TAB_ORDER.map(tabButton)}
      </div>

      <div
        role="tabpanel"
        id={panelId("factory")}
        aria-labelledby={tabId("factory")}
        hidden={activeTab !== "factory"}
      >
        <PricingSectionHeader kicker={factory.eyebrow} title={factory.title} summary={factory.summary} flag={factory.flag} />
        <div className="pricing-card-grid">
          {factory.cards.map((card) => (
            <PricingCard key={card.title} card={card} />
          ))}
        </div>
        <PricingAddonPanel title={factory.addons.title} items={factory.addons.items} />
      </div>

      <div
        role="tabpanel"
        id={panelId("standalone")}
        aria-labelledby={tabId("standalone")}
        hidden={activeTab !== "standalone"}
      >
        <PricingSectionHeader kicker={standalone.eyebrow} title={standalone.title} summary={standalone.summary} flag={standalone.flag} />
        <div className="pricing-card-grid pricing-card-grid-standalone">
          {standalone.cards.map((card) => (
            <PricingCard key={card.title} card={card} />
          ))}
        </div>
        <PricingAddonPanel title={standalone.addons.title} items={standalone.addons.items} />
      </div>

      <div
        role="tabpanel"
        id={panelId("remote")}
        aria-labelledby={tabId("remote")}
        hidden={activeTab !== "remote"}
      >
        <PricingSectionHeader kicker={remote.eyebrow} title={remote.title} summary={remote.summary} flag={remote.flag} />
        <div className="pricing-support-grid">
          {remote.cards.map((card) => (
            <PricingHighlightCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
