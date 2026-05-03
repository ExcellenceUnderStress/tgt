import { ChecklistGrid } from "@/components/checklist-grid";
import { DetailRail } from "@/components/detail-rail";
import { FinalCta } from "@/components/final-cta";
import { GuideCardGrid } from "@/components/guide-card-grid";
import { HaltechProductShowcase } from "@/components/haltech-product-showcase";
import { RouteIntro } from "@/components/route-intro";
import { SectionHeading } from "@/components/section-heading";
import { haltechGuideLinks } from "@/lib/haltech-guide-content";
import { haltechPageContent, routeHeroes } from "@/lib/site-content";

export default function HaltechPage() {
  const page = haltechPageContent;

  return (
    <>
      <RouteIntro hero={routeHeroes.haltech} />

      <section className="route-section service-detail-shell">
        <div className="service-detail-columns">
          <SectionHeading kicker={page.introLabel} title={page.introTitle}>
            <p>{page.introBody}</p>
          </SectionHeading>
          <DetailRail
            as="aside"
            label={page.noteLabel}
            title={page.noteTitle}
            body={page.noteBody}
          />
        </div>
      </section>

      <HaltechProductShowcase />

      <section className="route-section">
        <SectionHeading kicker="Buying Guides" title="Pick the hardware path before picking parts.">
          <p>
            These guides cover ECU tiering, ignition and injector choices, sensors,
            and platform-specific fitment notes that matter before ordering.
          </p>
        </SectionHeading>
        <GuideCardGrid items={haltechGuideLinks} />
      </section>

      <section className="route-section">
        <ChecklistGrid groups={[{ title: "What this route is for", items: page.bullets }]} />
      </section>

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
