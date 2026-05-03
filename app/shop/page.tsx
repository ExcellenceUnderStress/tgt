import { FinalCta } from "@/components/final-cta";
import { RouteIntro } from "@/components/route-intro";
import { SectionHeading } from "@/components/section-heading";
import { ShopLaneCard } from "@/components/shop-lane-card";
import { homepageSections, routeHeroes, shopPageContent } from "@/lib/site-content";

export default function ShopPage() {
  const page = shopPageContent;
  const shopLanes = homepageSections.shopLanes;

  return (
    <>
      <RouteIntro hero={routeHeroes.shop} />

      <section className="route-section service-detail-shell">
        <div className="service-detail-columns">
          <SectionHeading kicker={page.introLabel} title={page.introTitle}>
            <p>{page.introBody}</p>
          </SectionHeading>

          <div className="shop-guidance-list">
            {page.guidance.map((item) => (
              <article className="shop-guidance-item" key={item.title}>
                <span>{item.title}</span>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="route-section shop-routing-section" aria-label="Shop categories">
        <div className="shop-lane-grid shop-lane-grid--route">
          {shopLanes.map((lane) => (
            <ShopLaneCard key={lane.title} lane={lane} />
          ))}
        </div>
      </section>

      <FinalCta
        kicker="Shop Guidance"
        title={page.finalCta.title}
        summary={page.finalCta.summary}
        primaryCta={page.finalCta.primaryCta}
        secondaryCta={page.finalCta.secondaryCta}
      />
    </>
  );
}
