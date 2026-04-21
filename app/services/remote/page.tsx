import { RouteIntro } from "@/components/route-intro";
import { routeHeroes, serviceDetailPages } from "@/lib/site-content";
import Link from "next/link";

export default function RemotePage() {
  const page = serviceDetailPages.remote;

  return (
    <>
      <RouteIntro hero={routeHeroes.remote} />

      <section className="route-section service-detail-shell">
        <div className="service-detail-lead">
          <div className="section-heading">
            <p className="section-kicker">{page.laneLabel}</p>
            <h2>Serious remote work depends on logs, communication, and process discipline.</h2>
            <p>{page.intro}</p>
          </div>

          <aside className="service-callout">
            <p className="booking-mini-label">Compatibility First</p>
            <p>{page.callout}</p>
          </aside>
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

      <section className="route-section service-detail-columns">
        <div>
          <p className="section-kicker">Good Fit</p>
          <h2>Choose remote when the setup and communication path are both solid.</h2>
          <ul className="service-preview-list">
            {page.fitChecks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="service-detail-rail">
          <p className="booking-mini-label">Primary goal</p>
          <h3>Move through revisions with usable data instead of guesswork.</h3>
          <p>
            The strongest remote projects are the ones where the customer can log consistently,
            explain what changed, and work the process without trying to skip steps.
          </p>
        </div>
      </section>

      <section className="route-section">
        <div className="home-section-bar">
          <div className="section-heading">
            <p className="section-kicker">Requirements</p>
            <h2>Remote tuning needs the right technical baseline.</h2>
            <p>
              This page should filter for customers who can support a revision workflow instead of
              attracting generic one-file expectations.
            </p>
          </div>

          <Link className="section-link" href="/book">
            Start Intake
          </Link>
        </div>

        <div className="service-checklist-grid">
          {page.prepChecklist.map((group) => (
            <article className="service-checklist" key={group.title}>
              <p className="booking-mini-label">{group.title}</p>
              <ul className="service-preview-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="route-section">
        <div className="section-heading">
          <p className="section-kicker">Process</p>
          <h2>Structured intake first, revisions after fit is confirmed.</h2>
        </div>

        <div className="service-timeline">
          {page.process.map((step) => (
            <article className="service-timeline-step" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="route-section route-section-split">
        {page.expectations.map((item) => (
          <div className="route-section-panel" key={item.title}>
            <p className="section-kicker">Expectation</p>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </section>

      <section className="route-section final-cta-panel">
        <div className="final-cta-copy">
          <p className="section-kicker">Next Step</p>
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
