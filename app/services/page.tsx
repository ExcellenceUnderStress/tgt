import Link from "next/link";

import { servicesPricingContent } from "@/lib/site-content";

export default function ServicesPage() {
  const page = servicesPricingContent;

  return (
    <>
      <section className="route-intro pricing-hero">
        <div className="pricing-hero-shell">
          <p className="section-kicker">{page.hero.eyebrow}</p>
          <h1>{page.hero.title}</h1>
          <p className="pricing-hero-summary">{page.hero.summary}</p>
          <div className="cta-row">
            <Link className="button-primary" href="/book">
              Start Booking
            </Link>
            <Link className="button-secondary" href="/contact">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="route-section pricing-section">
        <div className="pricing-section-header">
          <div className="section-heading">
            <p className="section-kicker">{page.factory.eyebrow}</p>
            <h2>{page.factory.title}</h2>
            <p>{page.factory.summary}</p>
          </div>
          <div className="pricing-flag">{page.factory.flag}</div>
        </div>

        <div className="pricing-card-grid">
          {page.factory.cards.map((card) => (
            <article className="pricing-card" key={card.title}>
              <div className="pricing-card-header">
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.subtitle}</p>
                </div>
                {card.badge ? <span className="pricing-badge">{card.badge}</span> : null}
              </div>

              <div className="pricing-row-list">
                {card.rows.map((row) => (
                  <div className="pricing-row" key={`${card.title}-${row.label}`}>
                    <div>
                      <strong>{row.label}</strong>
                      {row.detail ? <p>{row.detail}</p> : null}
                    </div>
                    <span>{row.value}</span>
                  </div>
                ))}
              </div>

              {card.footer ? <p className="pricing-card-footer">{card.footer}</p> : null}
            </article>
          ))}
        </div>

        <div className="pricing-addon-panel">
          <p className="booking-mini-label">{page.factory.addons.title}</p>
          <div className="pricing-addon-list">
            {page.factory.addons.items.map((item) => (
              <div className="pricing-addon-row" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="route-section pricing-section">
        <div className="pricing-section-header">
          <div className="section-heading">
            <p className="section-kicker">{page.standalone.eyebrow}</p>
            <h2>{page.standalone.title}</h2>
            <p>{page.standalone.summary}</p>
          </div>
          <div className="pricing-flag">{page.standalone.flag}</div>
        </div>

        <div className="pricing-card-grid pricing-card-grid-standalone">
          {page.standalone.cards.map((card) => (
            <article className="pricing-card" key={card.title}>
              <div className="pricing-card-header">
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.subtitle}</p>
                </div>
                {card.badge ? <span className="pricing-badge">{card.badge}</span> : null}
              </div>

              <div className="pricing-row-list">
                {card.rows.map((row) => (
                  <div className="pricing-row" key={`${card.title}-${row.label}`}>
                    <div>
                      <strong>{row.label}</strong>
                      {row.detail ? <p>{row.detail}</p> : null}
                    </div>
                    <span>{row.value}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="pricing-addon-panel">
          <p className="booking-mini-label">{page.standalone.addons.title}</p>
          <div className="pricing-addon-list">
            {page.standalone.addons.items.map((item) => (
              <div className="pricing-addon-row" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="route-section pricing-section">
        <div className="pricing-section-header">
          <div className="section-heading">
            <p className="section-kicker">{page.remote.eyebrow}</p>
            <h2>{page.remote.title}</h2>
            <p>{page.remote.summary}</p>
          </div>
          <div className="pricing-flag">{page.remote.flag}</div>
        </div>

        <div className="pricing-support-grid">
          {page.remote.cards.map((card) => (
            <article className="pricing-support-card" key={card.title}>
              <h3>{card.title}</h3>
              <strong>{card.price}</strong>
              <p className="pricing-support-subtitle">{card.subtitle}</p>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="route-section pricing-section">
        <div className="pricing-policy-grid">
          <div className="section-heading">
            <p className="section-kicker">{page.policy.eyebrow}</p>
            <h2>{page.policy.title}</h2>
            <p>{page.policy.summary}</p>
          </div>

          <div className="pricing-policy-panel">
            {page.policy.items.map((item) => (
              <article className="pricing-policy-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}

            <div className="cta-row">
              <Link className="button-primary" href="/book">
                Start Booking
              </Link>
              <Link className="button-secondary" href="/contact">
                Contact TurboGixxer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
