import { BrandGrid } from "@/components/BrandGrid";
import { FeaturedBuildsCarousel } from "@/components/featured-builds-carousel";
import { FinalCta } from "@/components/final-cta";
import { HeroOverlayState } from "@/components/hero-overlay-state";
import { HomePageMotion } from "@/components/home-page-motion";
import { SectionBar } from "@/components/section-bar";
import { SectionHeading } from "@/components/section-heading";
import { ShopLaneCard } from "@/components/shop-lane-card";
import SmoothScrollVideoHero from "@/components/smooth-scroll-video-hero";
import { TelemetryCard } from "@/components/telemetry-card";
import { TelemetrySection } from "@/components/telemetry-section";
import { homepageSections } from "@/lib/site-content";

export default function HomePage() {
  const { hero, servicePaths, featuredBuilds, shopLanes, finalCta } =
    homepageSections;

  return (
    <>
      <HomePageMotion />
      <HeroOverlayState />

      <section
        className="hero machine-memory-hero"
        data-motion-root="hero"
        data-hero-anchor
      >
        <SmoothScrollVideoHero
          video={hero.video}
          eyebrow={hero.eyebrow}
          title={hero.title}
          summary={hero.summary}
          location={hero.location}
          learnMoreHref={hero.primaryCta.href}
        />
      </section>

      <BrandGrid />

      <TelemetrySection
        kicker="SERVICE PATHS"
        summary="Dyno, remote, or project review — find the one that fits your build."
        linkHref="/pricing"
        linkLabel="View Pricing →"
      >
        {servicePaths.map((path, index) => (
          <TelemetryCard key={path.title} path={path} index={index} />
        ))}
      </TelemetrySection>

      <section className="home-section" data-reveal-group>
        <SectionBar linkHref="/builds" linkLabel="View All Builds">
          <SectionHeading kicker="Selected Work" title="Featured Builds" data-reveal="slide-up" />
        </SectionBar>

        <FeaturedBuildsCarousel builds={featuredBuilds} />
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
        primaryCta={{ href: "/contact", label: "Contact" }}
        details={finalCta.details}
        sectionClass="home-section"
      />
    </>
  );
}
