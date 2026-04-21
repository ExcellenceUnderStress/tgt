import Link from "next/link";

import type { RouteHero } from "@/lib/site-content";

type RouteIntroProps = {
  hero: RouteHero;
};

export function RouteIntro({ hero }: RouteIntroProps) {
  return (
    <section className="route-intro">
      <div className="route-grid">
        <div>
          <p className="section-kicker">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
        </div>

        <div className="route-copy">
          <p>{hero.summary}</p>
          <div className="cta-row">
            <Link className="button-primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </Link>
            {hero.secondaryCta ? (
              <Link className="button-secondary" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
