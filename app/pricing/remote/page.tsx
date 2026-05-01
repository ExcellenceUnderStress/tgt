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

export default function RemotePage() {
  const page = serviceDetailPages.remote;

  return (
    <>
      <RouteIntro hero={routeHeroes.remote} />

      {/* ── Intro + Callout ── */}
      <section className="route-section service-detail-shell">
        <div className="service-detail-lead">
          <SectionHeading
            kicker={page.laneLabel}
            title="Serious remote work depends on logs, communication, and process discipline."
          >
            <p>{page.intro}</p>
          </SectionHeading>
          <Callout label="Compatibility First">{page.callout}</Callout>
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
          <h2>Choose remote when the setup and communication path are both solid.</h2>
          <ul className="service-preview-list">
            {page.fitChecks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <DetailRail
          label="Primary goal"
          title="Move through revisions with usable data instead of guesswork."
          body="The strongest remote projects are the ones where the customer can log consistently, explain what changed, and work the process without trying to skip steps."
        />
      </section>

      {/* ── Requirements Checklist ── */}
      <section className="route-section">
        <SectionBar linkHref="/contact" linkLabel="Start Intake">
          <SectionHeading kicker="Requirements" title="Remote tuning needs the right technical baseline.">
            <p>
              This page should filter for customers who can support a revision workflow instead of
              attracting generic one-file expectations.
            </p>
          </SectionHeading>
        </SectionBar>
        <ChecklistGrid groups={page.prepChecklist} />
      </section>

      {/* ── Process ── */}
      <section className="route-section">
        <SectionHeading kicker="Process" title="Structured intake first, revisions after fit is confirmed." />
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
