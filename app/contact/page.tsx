import { RouteIntro } from "@/components/route-intro";
import { contactPageContent, routeHeroes } from "@/lib/site-content";
import Link from "next/link";

export default function ContactPage() {
  const page = contactPageContent;

  return (
    <>
      <RouteIntro hero={routeHeroes.contact} />

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
        <div className="home-section-bar">
          <div className="section-heading">
            <p className="section-kicker">Contact Paths</p>
            <h2>Where are you in the build?</h2>
          </div>

          <Link className="section-link" href="/book">
            Go To Booking
          </Link>
        </div>

        <div className="service-timeline">
          {page.lanes.map((lane) => (
            <article className="service-timeline-step" key={lane.title}>
              <p className="booking-mini-label">{lane.title}</p>
              <h3>{lane.summary}</h3>
              <p>{lane.details[0]}</p>
              <ul className="service-preview-list">
                {lane.details.slice(1).map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <div className="cta-row">
                <Link className="button-secondary" href={lane.cta.href}>
                  {lane.cta.label}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="route-section route-section-split">
        {page.expectations.map((item) => (
          <div className="route-section-panel" key={item.title}>
            <p className="section-kicker">Contact</p>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </section>

      <section className="route-section final-cta-panel">
        <div className="final-cta-copy">
          <p className="section-kicker">Need Help Deciding?</p>
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
