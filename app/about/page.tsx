import Link from "next/link";

import { RouteIntro } from "@/components/route-intro";
import { aboutPageContent, routeHeroes } from "@/lib/site-content";

export default function AboutPage() {
  const page = aboutPageContent;

  return (
    <>
      <RouteIntro hero={routeHeroes.about} />

      <section className="route-section service-detail-shell">
        <div className="section-heading">
          <p className="section-kicker">{page.backgroundLabel}</p>
          <h2>{page.backgroundTitle}</h2>
          <p>{page.backgroundBody}</p>
        </div>
      </section>

      <section className="route-section">
        <div className="service-stat-grid">
          {page.stats.map((stat) => (
            <article className="service-stat" key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="route-section">
        <div className="section-heading">
          <p className="section-kicker">{page.approachLabel}</p>
          <h2>{page.approachTitle}</h2>
        </div>

        <div className="service-checklist-grid">
          <article className="service-checklist">
            <ul className="service-preview-list">
              {page.approachItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="route-section">
        <div className="home-section-bar">
          <div className="section-heading">
            <p className="section-kicker">{page.fitLabel}</p>
            <h2>{page.fitTitle}</h2>
          </div>

          <Link className="section-link" href="/contact">
            Contact TurboGixxer
          </Link>
        </div>

        <div className="service-checklist-grid">
          <article className="service-checklist">
            <p className="booking-mini-label">Good fit</p>
            <ul className="service-preview-list">
              {page.goodFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="service-checklist">
            <p className="booking-mini-label">How we work</p>
            <ul className="service-preview-list">
              {page.howWeWork.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="route-section final-cta-panel">
        <div className="final-cta-copy">
          <h2>{page.finalCta.title}</h2>
          <p>{page.finalCta.summary}</p>
          <div className="cta-row">
            <Link className="button-primary" href={page.finalCta.primaryCta.href}>
              {page.finalCta.primaryCta.label}
            </Link>
            <Link className="button-secondary" href={page.finalCta.secondaryCta.href}>
              {page.finalCta.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
