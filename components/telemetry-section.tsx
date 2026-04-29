import Link from "next/link";
import type { ReactNode } from "react";

type TelemetrySectionProps = {
  kicker: string;
  title?: string;
  summary: string;
  linkHref: string;
  linkLabel: string;
  children?: ReactNode;
};

export function TelemetrySection({
  kicker,
  title,
  summary,
  linkHref,
  linkLabel,
  children,
}: TelemetrySectionProps) {
  return (
    <section className="home-section telemetry-section" data-reveal-group>
      <div className="telemetry-shell">
        <div className="telemetry-intro" data-reveal="slide-up">
          <p className="section-kicker">{kicker}</p>
          {title ? <h2>{title}</h2> : null}
          <p>{summary}</p>
          <Link className="section-link" href={linkHref}>
            {linkLabel}
          </Link>
        </div>

        {children ? <div className="telemetry-grid">{children}</div> : null}
      </div>
    </section>
  );
}
