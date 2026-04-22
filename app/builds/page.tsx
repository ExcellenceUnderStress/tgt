import { BuildPreviewCard } from "@/components/build-preview-card";
import { FinalCta } from "@/components/final-cta";
import { RouteIntro } from "@/components/route-intro";
import { SectionHeading } from "@/components/section-heading";
import { SplitPanels } from "@/components/split-panels";
import { buildsPageContent, homepageSections, routeHeroes } from "@/lib/site-content";

export default function BuildsPage() {
  const page = buildsPageContent;

  return (
    <>
      <RouteIntro hero={routeHeroes.builds} />

      {/* ── Intro ── */}
      <section className="route-section service-detail-shell">
        <SectionHeading kicker={page.introLabel} title={page.introTitle}>
          <p>{page.introBody}</p>
        </SectionHeading>
      </section>

      {/* ── Build Grid ── */}
      <section className="route-section">
        <div className="build-preview-grid">
          {homepageSections.featuredBuilds.map((build, index) => (
            <BuildPreviewCard key={build.title} build={build} index={index} />
          ))}
        </div>
      </section>

      {/* ── Credibility ── */}
      <SplitPanels kicker="Builds" items={page.credibility} />

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
