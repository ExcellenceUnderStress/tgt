import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { HomePageMotion } from "@/components/home-page-motion";
import { homepageSections } from "@/lib/site-content";

export default function HomePage() {
  return (
    <>
      <HomePageMotion />

      <section className="hero machine-memory-hero" data-motion-root="hero">
        <div className="hero-inner">
          <div className="hero-copy-block">
            <h1>{homepageSections.hero.title}</h1>
            <div className="hero-copy">
              <p>{homepageSections.hero.summary}</p>
              <p className="hero-location">{homepageSections.hero.location}</p>
              <div className="cta-row">
                <Link className="button-primary" href={homepageSections.hero.primaryCta.href}>
                  {homepageSections.hero.primaryCta.label}
                </Link>
                <Link className="button-secondary" href={homepageSections.hero.secondaryCta.href}>
                  {homepageSections.hero.secondaryCta.label}
                </Link>
              </div>
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
                poster={homepageSections.hero.media}
                preload="auto"
              >
                <source src={homepageSections.hero.video} type="video/mp4" />
              </video>
              <div className="hero-visual-scrim" />
            </div>
          </div>
        </div>

      </section>

      <section className="recognition-strip recognition-strip-brands" aria-label="Supported systems">
        {homepageSections.brands.map((brand) => (
          <div className="brand-rail-item" key={brand.name} role="listitem">
            <img
              alt={brand.name}
              className="brand-rail-logo"
              loading="lazy"
              src={brand.logo}
            />
          </div>
        ))}
      </section>

      <section className="home-section telemetry-section" data-reveal-group>
        <div className="telemetry-shell">
          <div className="telemetry-intro" data-reveal="slide-up">
            <p className="section-kicker">Services</p>
          </div>

          <div className="telemetry-grid">
            {homepageSections.servicePaths.map((path, index) => (
              <article
                className="telemetry-card"
                data-reveal="slide-up"
                key={path.title}
                style={{ ["--telemetry-index" as string]: index } as CSSProperties}
              >
                <span>{String(index + 1).padStart(2, "0")} / {path.eyebrow}</span>
                <strong>{path.title}</strong>
                <p>{path.description}</p>
                <ul className="service-preview-list">
                  {path.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <Link className="section-link" href={path.cta.href}>
                  {path.cta.label}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section" data-reveal-group>
        <div className="home-section-bar">
          <div className="section-heading" data-reveal="slide-up">
            <p className="section-kicker">Featured Builds</p>
            <h2>Featured Builds</h2>
          </div>

          <Link className="section-link" href="/builds">
            View All Builds
          </Link>
        </div>

        <div className="build-preview-grid">
          {homepageSections.featuredBuilds.map((build, index) => (
            <article
              className="build-preview"
              data-parallax-card
              data-reveal="slide-up"
              key={build.title}
            >
              <div className="build-preview-media">
                <Image
                  alt={build.title}
                  className="build-preview-image"
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  src={build.image}
                />
                <span>Build {String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="build-preview-copy">
                <h3>{build.title}</h3>
                <p>{build.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section" data-reveal-group>
        <div className="home-section-bar">
          <div className="section-heading" data-reveal="slide-up">
            <p className="section-kicker">Shop Preview</p>
            <h2>Shop</h2>
            <p>Merch and a curated selection of parts we actually use.</p>
          </div>

          <Link className="section-link" href="/shop">
            View Shop
          </Link>
        </div>

        <div className="shop-lane-grid">
          {homepageSections.shopLanes.map((lane) => (
            <article className="shop-lane" data-reveal="slide-up" key={lane.title}>
              <div className="shop-lane-media">
                <Image
                  alt={lane.title}
                  className="shop-lane-image"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  src={lane.image}
                />
              </div>
              <div className="shop-lane-copy">
                <h3>{lane.title}</h3>
                <p>{lane.description}</p>
                <Link className="section-link" href={lane.cta.href}>
                  {lane.cta.label}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

    </>
  );
}
