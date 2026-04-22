import { BrandStrip } from "@/components/brand-strip";
import { BuildPreviewCard } from "@/components/build-preview-card";
import { CtaRow } from "@/components/cta-row";
import { FinalCta } from "@/components/final-cta";
import { HomePageMotion } from "@/components/home-page-motion";
import { SectionBar } from "@/components/section-bar";
import { SectionHeading } from "@/components/section-heading";
import { ShopLaneCard } from "@/components/shop-lane-card";
import { TelemetryCard } from "@/components/telemetry-card";
import { TelemetrySection } from "@/components/telemetry-section";
import { homepageSections } from "@/lib/site-content";

export default function HomePage() {
  const { hero, brands, servicePaths, legacyPreview, featuredBuilds, shopLanes, finalCta } =
    homepageSections;

  return (
    <>
      <HomePageMotion />

      {/* ── Hero ── */}
      <section className="hero machine-memory-hero" data-motion-root="hero">
        <div className="hero-inner">
          <div className="hero-copy-block">
            <h1>{hero.title}</h1>
            <div className="hero-copy">
              <p>{hero.summary}</p>
              <p className="hero-location">{hero.location}</p>
              <CtaRow primary={hero.primaryCta} secondary={hero.secondaryCta} />
            </div>
          </div>

          <div aria-hidden="true" className="hero-media-shell">
            <div className="hero-media-mask" />
            <div className="hero-media">
              <video
                className="hero-video"
                data-scroll-video
                autoPlay
                loop
                muted
                playsInline
                poster={hero.media}
                preload="auto"
              >
                <source src={hero.video} type="video/mp4" />
              </video>
              <div className="hero-visual-scrim" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Strip ── */}
      <BrandStrip brands={brands} />

      {/* ── Service Paths ── */}
      <TelemetrySection
        kicker="Service Paths"
        title="Choose the right lane before the schedule gets involved."
        summary="The site should route serious projects into dyno, remote, or project review without burying the decision under filler copy."
        linkHref="/services"
        linkLabel="View Services"
      >
        {servicePaths.map((path, index) => (
          <TelemetryCard key={path.title} path={path} index={index} />
        ))}
      </TelemetrySection>

      {/* ── Legacy Preview ── */}
      <TelemetrySection
        kicker={legacyPreview.eyebrow}
        title={legacyPreview.title}
        summary={legacyPreview.summary}
        linkHref={legacyPreview.cta.href}
        linkLabel={legacyPreview.cta.label}
      >
        {legacyPreview.bullets.map((bullet, index) => (
          <article
            className="telemetry-card"
            data-reveal="slide-up"
            key={bullet}
            style={{ ["--telemetry-index" as string]: index } as React.CSSProperties}
          >
            <span>{String(index + 1).padStart(2, "0")} / Legacy</span>
            <p>{bullet}</p>
          </article>
        ))}
      </TelemetrySection>

      {/* ── Featured Builds ── */}
      <section className="home-section" data-reveal-group>
        <SectionBar linkHref="/builds" linkLabel="View All Builds">
          <SectionHeading kicker="Featured Builds" title="Featured Builds" data-reveal="slide-up" />
        </SectionBar>

        <div className="build-preview-grid">
          {featuredBuilds.map((build, index) => (
            <BuildPreviewCard key={build.title} build={build} index={index} animated />
          ))}
        </div>
      </section>

      {/* ── Shop Preview ── */}
      <section className="home-section" data-reveal-group>
        <SectionBar linkHref="/shop" linkLabel="View Shop">
          <SectionHeading kicker="Shop Preview" title="Shop" data-reveal="slide-up">
            <p>Merch and a curated selection of parts we actually use.</p>
          </SectionHeading>
        </SectionBar>

        <div className="shop-lane-grid">
          {shopLanes.map((lane) => (
            <ShopLaneCard key={lane.title} lane={lane} animated />
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <FinalCta
        kicker="Start The Conversation"
        title={finalCta.title}
        summary={finalCta.summary}
        primaryCta={finalCta.primaryCta}
        secondaryCta={{ href: "/contact", label: "Contact TurboGixxer" }}
        details={finalCta.details}
        sectionClass="home-section"
      />
    </>
  );
}
