import { CtaRow } from "@/components/cta-row";
import { PricingAddonPanel } from "@/components/pricing-addon-panel";
import { PricingCard } from "@/components/pricing-card";
import { PricingHighlightCard } from "@/components/pricing-highlight-card";
import { PricingSectionHeader } from "@/components/pricing-section-header";
import { SectionHeading } from "@/components/section-heading";
import { servicesPricingContent } from "@/lib/site-content";

export default function ServicesPage() {
  const { hero, factory, standalone, remote, policy } = servicesPricingContent;

  return (
    <>
      {/* ── Pricing Hero ── */}
      <section className="route-intro pricing-hero">
        <div className="pricing-hero-shell">
          <p className="section-kicker">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="pricing-hero-summary">{hero.summary}</p>
          <CtaRow
            primary={{ href: "/contact", label: "Start Booking" }}
            secondary={{ href: "/contact", label: "Get in Touch" }}
          />
        </div>
      </section>

      {/* ── Factory ECU Tuning ── */}
      <section className="route-section pricing-section">
        <PricingSectionHeader
          kicker={factory.eyebrow}
          title={factory.title}
          summary={factory.summary}
          flag={factory.flag}
        />

        <div className="pricing-card-grid">
          {factory.cards.map((card) => (
            <PricingCard key={card.title} card={card} />
          ))}
        </div>

        <PricingAddonPanel title={factory.addons.title} items={factory.addons.items} />
      </section>

      {/* ── Standalone ECU Tuning ── */}
      <section className="route-section pricing-section">
        <PricingSectionHeader
          kicker={standalone.eyebrow}
          title={standalone.title}
          summary={standalone.summary}
          flag={standalone.flag}
        />

        <div className="pricing-card-grid pricing-card-grid-standalone">
          {standalone.cards.map((card) => (
            <PricingCard key={card.title} card={card} />
          ))}
        </div>

        <PricingAddonPanel title={standalone.addons.title} items={standalone.addons.items} />
      </section>

      {/* ── Remote & Support ── */}
      <section className="route-section pricing-section">
        <PricingSectionHeader
          kicker={remote.eyebrow}
          title={remote.title}
          summary={remote.summary}
          flag={remote.flag}
        />

        <div className="pricing-support-grid">
          {remote.cards.map((card) => (
            <PricingHighlightCard key={card.title} card={card} />
          ))}
        </div>
      </section>

      {/* ── Policy ── */}
      <section className="route-section pricing-section">
        <div className="pricing-policy-grid">
          <SectionHeading kicker={policy.eyebrow} title={policy.title}>
            <p>{policy.summary}</p>
          </SectionHeading>

          <div className="pricing-policy-panel">
            {policy.items.map((item) => (
              <article className="pricing-policy-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}

            <CtaRow
              primary={{ href: "/contact", label: "Start Booking" }}
              secondary={{ href: "/contact", label: "Contact TurboGixxer" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
