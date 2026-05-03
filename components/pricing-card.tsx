import type { ServicePricingCard } from "@/lib/site-content";
import cardStyles from "./card-surface.module.css";

type PricingCardProps = {
  card: ServicePricingCard;
};

export function PricingCard({ card }: PricingCardProps) {
  return (
    <article className={`pricing-card ${cardStyles.premiumCard}`}>
      <div className="pricing-card-header">
        <div>
          <h3>{card.title}</h3>
          <p>{card.subtitle}</p>
        </div>
        {card.badge ? <span className="pricing-badge">{card.badge}</span> : null}
      </div>

      <div className="pricing-row-list">
        {card.rows.map((row) => (
          <div className="pricing-row" key={`${card.title}-${row.label}`}>
            <div>
              <strong>{row.label}</strong>
              {row.detail ? <p>{row.detail}</p> : null}
            </div>
            <span>{row.value}</span>
          </div>
        ))}
      </div>

      {card.footer ? <p className="pricing-card-footer">{card.footer}</p> : null}
    </article>
  );
}
