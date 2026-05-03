import type { CSSProperties } from "react";

import type { HomepageServicePath } from "@/lib/site-content";
import cardStyles from "./card-surface.module.css";

type TelemetryCardProps = {
  path: HomepageServicePath;
  index: number;
};

export function TelemetryCard({ path, index }: TelemetryCardProps) {
  return (
    <article
      className={`telemetry-card ${cardStyles.premiumCard}`}
      data-reveal="slide-up"
      style={{ ["--telemetry-index" as string]: index } as CSSProperties}
    >
      {path.eyebrow ? <span>{path.eyebrow}</span> : null}
      <strong>{path.title}</strong>
      <p>{path.description}</p>
      <p className="telemetry-card-price">Starting at {path.startingAtPrice}</p>
      <ul className="telemetry-card-list">
        {path.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <form className="telemetry-card-action" action={path.cta.href} method="get">
        <button
          className="button-primary telemetry-card-button"
          type="submit"
          aria-label={`${path.cta.label} for ${path.title}`}
        >
          {path.cta.label}
        </button>
      </form>
    </article>
  );
}
