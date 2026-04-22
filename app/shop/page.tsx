import { FinalCta } from "@/components/final-cta";
import { RouteIntro } from "@/components/route-intro";
import { SectionHeading } from "@/components/section-heading";
import { ShopLaneCard } from "@/components/shop-lane-card";
import { SplitPanels } from "@/components/split-panels";
import { homepageSections, routeHeroes, shopPageContent } from "@/lib/site-content";

export default function ShopPage() {
  const page = shopPageContent;

  return (
    <>
      <RouteIntro hero={routeHeroes.shop} />

      {/* ── Intro ── */}
      <section className="route-section service-detail-shell">
        <SectionHeading kicker={page.introLabel} title={page.introTitle}>
          <p>{page.introBody}</p>
        </SectionHeading>
      </section>

      {/* ── Shop Lanes ── */}
      <section className="route-section">
        <div className="shop-lane-grid">
          {homepageSections.shopLanes.map((lane) => (
            <ShopLaneCard key={lane.title} lane={lane} />
          ))}
        </div>
      </section>

      {/* ── Guidance ── */}
      <SplitPanels kicker="Shop Guidance" items={page.guidance} />

      {/* ── Final CTA ── */}
      <FinalCta
        kicker="Next Step"
        title={page.finalCta.title}
        summary={page.finalCta.summary}
        primaryCta={page.finalCta.primaryCta}
        secondaryCta={page.finalCta.secondaryCta}
      />
    </>
  );
}
