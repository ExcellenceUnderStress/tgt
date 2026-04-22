import { ChecklistGrid } from "@/components/checklist-grid";
import { DetailRail } from "@/components/detail-rail";
import { FinalCta } from "@/components/final-cta";
import { RouteIntro } from "@/components/route-intro";
import { SectionHeading } from "@/components/section-heading";
import { merchPageContent, routeHeroes } from "@/lib/site-content";

export default function MerchPage() {
  const page = merchPageContent;

  return (
    <>
      <RouteIntro hero={routeHeroes.merch} />

      {/* ── Intro + Note ── */}
      <section className="route-section service-detail-shell">
        <div className="service-detail-columns">
          <SectionHeading kicker={page.introLabel} title={page.introTitle}>
            <p>{page.introBody}</p>
          </SectionHeading>
          <DetailRail as="aside" label={page.noteLabel} title={page.noteTitle} body={page.noteBody} />
        </div>
      </section>

      {/* ── Bullets ── */}
      <section className="route-section">
        <ChecklistGrid groups={[{ title: "What this route is for", items: page.bullets }]} />
      </section>

      {/* ── Final CTA ── */}
      <FinalCta
        kicker="Need Help?"
        title={page.finalCta.title}
        summary={page.finalCta.summary}
        primaryCta={page.finalCta.primaryCta}
        secondaryCta={page.finalCta.secondaryCta}
      />
    </>
  );
}
