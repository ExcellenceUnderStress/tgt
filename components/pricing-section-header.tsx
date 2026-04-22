import { SectionHeading } from "./section-heading";

type PricingSectionHeaderProps = {
  kicker: string;
  title: string;
  summary: string;
  flag: string;
};

export function PricingSectionHeader({
  kicker,
  title,
  summary,
  flag,
}: PricingSectionHeaderProps) {
  return (
    <div className="pricing-section-header">
      <SectionHeading kicker={kicker} title={title}>
        <p>{summary}</p>
      </SectionHeading>
      <div className="pricing-flag">{flag}</div>
    </div>
  );
}
