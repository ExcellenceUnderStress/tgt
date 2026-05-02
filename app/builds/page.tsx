import { BuildPreviewCard } from "@/components/build-preview-card";
import { FinalCta } from "@/components/final-cta";
import { RouteIntro } from "@/components/route-intro";
import { buildsPageContent, homepageSections, routeHeroes } from "@/lib/site-content";

export default function BuildsPage() {
  const page = buildsPageContent;

  return (
    <>
      <RouteIntro hero={routeHeroes.builds} />

      {/* ── Build Grid ── */}
      <section className="route-section">
        <div className="build-preview-grid">
          {homepageSections.featuredBuilds.map((build, index) => (
            <BuildPreviewCard key={build.title} build={build} index={index} />
          ))}
        </div>
      </section>

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
