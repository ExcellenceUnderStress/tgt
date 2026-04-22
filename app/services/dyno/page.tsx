import { Callout } from "@/components/callout";
import { ChecklistGrid } from "@/components/checklist-grid";
import { DetailRail } from "@/components/detail-rail";
import { FinalCta } from "@/components/final-cta";
import { RouteIntro } from "@/components/route-intro";
import { SectionBar } from "@/components/section-bar";
import { SectionHeading } from "@/components/section-heading";
import { SplitPanels } from "@/components/split-panels";
import { StatGrid } from "@/components/stat-grid";
import { Timeline } from "@/components/timeline";
import { routeHeroes, serviceDetailPages } from "@/lib/site-content";

export default function DynoPage() {
  const page = serviceDetailPages.dyno;

  return (
    <>
      <RouteIntro hero={routeHeroes.dyno} />

      {/* ── Intro + Callout ── */}
      <section className="route-section service-detail-shell">
        <div className="service-detail-lead">
          <SectionHeading kicker={page.laneLabel} title="Built for combinations that need live control under load.">
            <p>{page.intro}</p>
          </SectionHeading>
          <Callout label="Review First">{page.callout}</Callout>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="route-section">
        <StatGrid stats={page.stats} />
      </section>

      {/* ── Fit + Goal ── */}
      <section className="route-section service-detail-columns">
        <div>
          <p className="section-kicker">Good Fit</p>
          <h2>Choose dyno when the car is ready for focused shop time.</h2>
          <ul className="service-preview-list">
            {page.fitChecks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <DetailRail
          label="Primary goal"
          title="Refine drivability, response, and usable power in one controlled session."
          body="The value of dyno tuning is not only what the graph says. It is the ability to inspect the combination live and resolve the issues that would otherwise waste revision time."
        />
      </section>

      {/* ── Prep Checklist ── */}
      <section className="route-section">
        <SectionBar linkHref="/contact" linkLabel="Start Intake">
          <SectionHeading kicker="Prep Requirements" title="Arrive with the right baseline.">
            <p>
              The site should make it clear that dyno time is reserved for combinations that are
              close enough to benefit from live refinement.
            </p>
          </SectionHeading>
        </SectionBar>
        <ChecklistGrid groups={page.prepChecklist} />
      </section>

      {/* ── Process ── */}
      <section className="route-section">
        <SectionHeading kicker="Process" title="Qualification first. Schedule second." />
        <Timeline steps={page.process} />
      </section>

      {/* ── Expectations ── */}
      <SplitPanels kicker="Expectation" items={page.expectations} />

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
