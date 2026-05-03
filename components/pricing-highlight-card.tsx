import type { ServicePricingHighlightCard } from "@/lib/site-content";
import cardStyles from "./card-surface.module.css";

type PricingHighlightCardProps = {
  card: ServicePricingHighlightCard;
};

export function PricingHighlightCard({ card }: PricingHighlightCardProps) {
  return (
    <article className={`pricing-support-card ${cardStyles.premiumCard}`}>
      <h3>{card.title}</h3>
      <strong>{card.price}</strong>
      <p className="pricing-support-subtitle">{card.subtitle}</p>
      <p>{card.body}</p>
    </article>
  );
}
