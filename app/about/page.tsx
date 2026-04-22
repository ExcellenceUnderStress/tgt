import { ChecklistGrid } from "@/components/checklist-grid";
import { FinalCta } from "@/components/final-cta";
import { RouteIntro } from "@/components/route-intro";
import { SectionBar } from "@/components/section-bar";
import { SectionHeading } from "@/components/section-heading";
import { aboutPageContent, routeHeroes } from "@/lib/site-content";

export default function AboutPage() {
  const page = aboutPageContent;

  return (
    <>
      <RouteIntro hero={routeHeroes.about} />

      <section className="route-section service-detail-shell">
        <div className="service-detail-lead">
          <SectionHeading kicker={page.introLabel} title={page.introTitle}>
            <p>{page.introBody}</p>
          </SectionHeading>
        </div>
      </section>

      <section className="route-section">
        <SectionHeading kicker={page.approachLabel} title={page.approachTitle} />
        <ChecklistGrid groups={[{ items: page.approachItems }]} />
      </section>

      <section className="route-section">
        <SectionBar linkHref="/contact" linkLabel="Contact TurboGixxer">
          <SectionHeading kicker={page.fitLabel} title={page.fitTitle} />
        </SectionBar>
        <ChecklistGrid
          groups={[
            { title: "Good fit", items: page.goodFit },
            { title: "How we work", items: page.howWeWork },
          ]}
        />
      </section>

      <FinalCta
        title={page.finalCta.title}
        summary={page.finalCta.summary}
        primaryCta={page.finalCta.primaryCta}
        secondaryCta={page.finalCta.secondaryCta}
      />
    </>
  );
}
