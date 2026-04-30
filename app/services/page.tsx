import { CtaRow } from "@/components/cta-row";
import { PricingSectionHeader } from "@/components/pricing-section-header";
import { SectionHeading } from "@/components/section-heading";
import { ServicesCategoryTabs } from "@/components/services-category-tabs";
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
          <CtaRow primary={{ href: "/contact", label: "Contact" }} />
        </div>
      </section>

      <ServicesCategoryTabs factory={factory} standalone={standalone} remote={remote} />

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

            <CtaRow primary={{ href: "/contact", label: "Contact" }} />
          </div>
        </div>
      </section>
    </>
  );
}
