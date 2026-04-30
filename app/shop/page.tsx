import { RouteIntro } from "@/components/route-intro";
import { SectionHeading } from "@/components/section-heading";
import { routeHeroes } from "@/lib/site-content";

export default function ShopPage() {
  return (
    <>
      <RouteIntro hero={routeHeroes.shop} />

      <section className="route-section service-detail-shell">
        <SectionHeading kicker="Shop" title="In-house products, coming online soon.">
          <p>We're planning a focused catalog of parts and gear we actually run and stand behind. For now, contact us if you're looking for something specific.</p>
        </SectionHeading>
      </section>
    </>
  );
}
