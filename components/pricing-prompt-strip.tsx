import Link from "next/link";

type PricingPromptStripProps = {
  question: string;
  linkLabel: string;
  linkHref: string;
};

export function PricingPromptStrip({ question, linkLabel, linkHref }: PricingPromptStripProps) {
  return (
    <div className="pricing-prompt-strip">
      <p>{question}</p>
      <Link className="pricing-prompt-link" href={linkHref}>
        {linkLabel} <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
