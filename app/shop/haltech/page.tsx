import { ChecklistGrid } from "@/components/checklist-grid";
import { DetailRail } from "@/components/detail-rail";
import { FinalCta } from "@/components/final-cta";
import { HaltechCatalog, HaltechCategoryNav } from "@/components/haltech-catalog";
import { RouteIntro } from "@/components/route-intro";
import { SectionHeading } from "@/components/section-heading";
import { haltechCategories, haltechProducts } from "@/lib/haltech-products";
import { haltechPageContent, routeHeroes } from "@/lib/site-content";

export default function HaltechPage() {
  const page = haltechPageContent;
  const productCount = haltechProducts.length;
  const categoryCount = haltechCategories.length;

  return (
    <>
      <RouteIntro hero={routeHeroes.haltech} />

      {/* ── Intro + Note ── */}
      <section className="route-section service-detail-shell">
        <div className="service-detail-columns">
          <SectionHeading kicker={page.introLabel} title={page.introTitle}>
            <p>{page.introBody}</p>
            <p>
              Browse the full Haltech catalog below — {productCount} products across{" "}
              {categoryCount} categories, sourced from the January 2026 USD pricelist.
              Pricing shown is reference only; start an inquiry on any item to confirm
              fit, package, and shipping.
            </p>
          </SectionHeading>
          <DetailRail
            as="aside"
            label={page.noteLabel}
            title={page.noteTitle}
            body={page.noteBody}
          />
        </div>
      </section>

      {/* ── Lane checklist ── */}
      <section className="route-section">
        <ChecklistGrid groups={[{ title: "What this lane is for", items: page.bullets }]} />
      </section>

      {/* ── Category quicknav ── */}
      <section className="route-section">
        <HaltechCategoryNav />
      </section>

      {/* ── Catalog ── */}
      <section className="route-section">
        <HaltechCatalog />
      </section>

      {/* ── Final CTA ── */}
      <FinalCta
        kicker="Inquiry First"
        title={page.finalCta.title}
        summary={page.finalCta.summary}
        primaryCta={page.finalCta.primaryCta}
        secondaryCta={page.finalCta.secondaryCta}
      />
    </>
  );
}
