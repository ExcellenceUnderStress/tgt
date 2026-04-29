import { BrandStrip } from "@/components/brand-strip";
import { BuildPreviewCard } from "@/components/build-preview-card";
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
          initialScale={0.66}
          title={hero.title}
          summary={hero.summary}
          location={hero.location}
          learnMoreHref={hero.primaryCta.href}
        />
      </section>

      <BrandStrip brands={brands} />

      <TelemetrySection
        kicker="Service Paths"
        title="Choose the right lane before the schedule gets involved."
        summary="Dyno, remote, or project review — pick the path that fits your build before the calendar gets involved."
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
      />

      <section className="home-section" data-reveal-group>
        <SectionBar linkHref="/builds" linkLabel="View All Builds">
          <SectionHeading kicker="Selected Work" title="Featured Builds" data-reveal="slide-up" />
        </SectionBar>

        <div className="build-preview-grid">
          {featuredBuilds.map((build, index) => (
            <BuildPreviewCard key={build.title} build={build} index={index} animated />
          ))}
        </div>
      </section>

      <section className="home-section" data-reveal-group>
        <SectionBar linkHref="/shop" linkLabel="View Shop">
          <SectionHeading kicker="The Shop" title="Merch & Haltech" data-reveal="slide-up">
            <p>Branded goods and Haltech hardware from a shop that runs the same equipment.</p>
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
