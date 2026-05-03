import type { ServicePricingAddon } from "@/lib/site-content";
import cardStyles from "./card-surface.module.css";

type PricingAddonPanelProps = {
  title: string;
  items: ServicePricingAddon[];
};

export function PricingAddonPanel({ title, items }: PricingAddonPanelProps) {
  return (
    <div className={`pricing-addon-panel ${cardStyles.premiumCard}`}>
      <p className="booking-mini-label">{title}</p>
      <div className="pricing-addon-list">
        {items.map((item) => (
          <div className="pricing-addon-row" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
