"use client";

import { SectionHeading } from "@/components/section-heading";
import type { ServicePricingCheatSheetItem, ServicePricingTabKey } from "@/lib/site-content";
import cardStyles from "./card-surface.module.css";

type PricingCheatSheetProps = {
  eyebrow: string;
  title: string;
  items: ServicePricingCheatSheetItem[];
  /** DOM id for the wrapper so the prompt-strip link can scroll here. */
  id?: string;
  /** DOM id of the tabs section to scroll to after pre-selecting a tab. */
  tabsTargetId: string;
  onSelect: (tab: ServicePricingTabKey) => void;
};

export function PricingCheatSheet({ eyebrow, title, items, id, tabsTargetId, onSelect }: PricingCheatSheetProps) {
  const handleClick = (tab: ServicePricingTabKey) => {
    onSelect(tab);
    if (typeof document !== "undefined") {
      const target = document.getElementById(tabsTargetId);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="route-section pricing-section pricing-cheat-sheet" id={id}>
      <SectionHeading kicker={eyebrow} title={title} />
      <div className="pricing-cheat-sheet-grid">
        {items.map((item) => (
          <button
            key={item.build}
            type="button"
            className={`pricing-cheat-card ${cardStyles.premiumCard}`}
            aria-controls={`pricing-panel-${item.targetTab}`}
            onClick={() => handleClick(item.targetTab)}
          >
            <span className="pricing-cheat-build">{item.build}</span>
            <span className="pricing-cheat-path">{item.path}</span>
            <span className="pricing-cheat-price">{item.price}</span>
            <span className="pricing-cheat-timeline">{item.timeline}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
