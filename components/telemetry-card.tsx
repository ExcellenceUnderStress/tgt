import Link from "next/link";
import type { CSSProperties } from "react";

import type { HomepageServicePath } from "@/lib/site-content";

type TelemetryCardProps = {
  path: HomepageServicePath;
  index: number;
};

export function TelemetryCard({ path, index }: TelemetryCardProps) {
  return (
    <article
      className="telemetry-card"
      data-reveal="slide-up"
      style={{ ["--telemetry-index" as string]: index } as CSSProperties}
    >
      {path.eyebrow ? <span>{path.eyebrow}</span> : null}
      <strong>{path.title}</strong>
      <p>{path.description}</p>
      <ul className="telemetry-card-list">
        {path.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <Link className="section-link" href={path.cta.href}>
        {path.cta.label}
      </Link>
    </article>
  );
}
