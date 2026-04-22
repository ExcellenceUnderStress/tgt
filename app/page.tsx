import { BrandStrip } from "@/components/brand-strip";
import { BuildPreviewCard } from "@/components/build-preview-card";
import { CtaRow } from "@/components/cta-row";
import { FinalCta } from "@/components/final-cta";
import { HomePageMotion } from "@/components/home-page-motion";
import { SectionBar } from "@/components/section-bar";
import { SectionHeading } from "@/components/section-heading";
import { ShopLaneCard } from "@/components/shop-lane-card";
import SmoothScrollVideoHero from "@/components/smooth-scroll-video-hero";
import { TelemetryCard } from "@/components/telemetry-card";
import { TelemetrySection } from "@/components/telemetry-section";
import { homepageSections } from "@/lib/site-content";

export default function HomePage() {
  const { hero, brands, servicePaths, legacyPreview, featuredBuilds, shopLanes, finalCta } =
    homepageSections;

  return (
    <>
      <HomePageMotion />

      <section className="hero machine-memory-hero" data-motion-root="hero">
        <SmoothScrollVideoHero
          scrollHeight={1500}
          desktopVideo={hero.video}
          mobileVideo={hero.video}
          poster={hero.media}
          initialClipPercentage={25}
          finalClipPercentage={75}
          initialScale={1.15}
        />

        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="hero-inner sticky top-0 flex min-h-screen items-end justify-center">
            <div className="hero-copy-block pointer-events-auto">
              <h1>{hero.title}</h1>
              <div className="hero-copy">
                <p>{hero.summary}</p>
                <p className="hero-location">{hero.location}</p>
                <CtaRow primary={hero.primaryCta} secondary={hero.secondaryCta} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrandStrip brands={brands} />

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
