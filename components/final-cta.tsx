import type { NavItem } from "@/lib/site-content";

import { CtaRow } from "./cta-row";

type FinalCtaProps = {
  kicker?: string;
  title: string;
  summary: string;
  primaryCta: NavItem;
  secondaryCta?: NavItem;
  details?: { label: string; value: string }[];
  /** Section wrapper class — defaults to "route-section". */
  sectionClass?: string;
};

export function FinalCta({
  kicker,
  title,
  summary,
  primaryCta,
  secondaryCta,
  details,
  sectionClass = "route-section",
}: FinalCtaProps) {
  return (
    <section className={`${sectionClass} final-cta-panel`}>
      <div className="final-cta-copy">
        {kicker && <p className="section-kicker">{kicker}</p>}
        <h2>{title}</h2>
        <p>{summary}</p>
        <CtaRow primary={primaryCta} secondary={secondaryCta} />
      </div>

      {details && details.length > 0 && (
        <div className="final-cta-details">
          {details.map((detail) => (
            <article className="final-cta-detail" key={detail.label}>
              <span>{detail.label}</span>
              <strong>{detail.value}</strong>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
