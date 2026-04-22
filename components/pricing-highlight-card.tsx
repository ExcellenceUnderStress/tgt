import type { ServicePricingHighlightCard } from "@/lib/site-content";

type PricingHighlightCardProps = {
  card: ServicePricingHighlightCard;
};

export function PricingHighlightCard({ card }: PricingHighlightCardProps) {
  return (
    <article className="pricing-support-card">
      <h3>{card.title}</h3>
      <strong>{card.price}</strong>
      <p className="pricing-support-subtitle">{card.subtitle}</p>
      <p>{card.body}</p>
    </article>
  );
}
