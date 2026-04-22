import type { ReactNode } from "react";

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  children?: ReactNode;
  /** Optional GSAP motion attribute. */
  "data-reveal"?: string;
};

export function SectionHeading({
  kicker,
  title,
  children,
  "data-reveal": dataReveal,
}: SectionHeadingProps) {
  return (
    <div
      className="section-heading"
      {...(dataReveal ? { "data-reveal": dataReveal } : {})}
    >
      {kicker && <p className="section-kicker">{kicker}</p>}
      <h2>{title}</h2>
      {children}
    </div>
  );
}
