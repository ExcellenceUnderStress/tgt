import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { HomePageMotion } from "@/components/home-page-motion";
import { aboutPageContent, homepageSections } from "@/lib/site-content";

export default function HomePage() {
  return (
    <>
      <HomePageMotion />

      <section className="hero machine-memory-hero" data-motion-root="hero">
        <div aria-hidden="true" className="hero-media">
          <video
            autoPlay
            className="hero-video"
            loop
            muted
            playsInline
            poster={homepageSections.hero.media}
          >
            <source src={homepageSections.hero.video} type="video/mp4" />
          </video>
          <div className="hero-visual-scrim" />
          <div className="hero-visual-orbit" />
        </div>

        <div className="memory-overlay" aria-hidden="true">
          <div className="memory-grid" />
          <div className="memory-scanline memory-scanline-a" />
          <div className="memory-scanline memory-scanline-b" />
        </div>

        <div className="hero-inner">
          <div>
            <h1>{homepageSections.hero.title}</h1>
          </div>

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

      <section className="home-section home-statement">
        <div className="statement-wrap">
          <p>{homepageSections.brandStatement.title}</p>
          <p className="statement-detail">{homepageSections.brandStatement.body}</p>
        </div>
      </section>

      <section className="home-section telemetry-section" data-reveal-group>
        <div className="telemetry-shell">
          <div className="telemetry-intro" data-reveal="slide-up">
            <p className="section-kicker">System Readout</p>
            <h2>Recognition translated into fit, process, and control.</h2>
            <p>
              The work is not positioned as a generic tuning menu. It is qualified intake,
              platform discipline, and a process built to protect the car and the calendar.
            </p>
          </div>

          <div className="telemetry-grid">
            {homepageSections.telemetrySignals.map((signal, index) => (
              <article
                className="telemetry-card"
                data-reveal="slide-up"
                key={signal.label}
                style={{ ["--telemetry-index" as string]: index } as CSSProperties}
              >
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
                <p>{signal.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section service-path-section" data-reveal-group>
        <div className="section-heading" data-reveal="slide-up">
          <p className="section-kicker">Service Paths</p>
          <h2>Choose the right lane before you book time.</h2>
        </div>

        <div className="service-path-preview-grid">
          {homepageSections.servicePaths.map((path, index) => (
            <article
              className="service-preview"
              data-reveal="slide-up"
              key={path.title}
            >
              <div className="service-preview-backdrop" aria-hidden="true" />
              <div>
                <p className="service-preview-index">
                  {String(index + 1).padStart(2, "0")} / {path.eyebrow}
                </p>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
              </div>

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
      </section>

      <section className="home-section legacy-section" data-reveal-group>
        <div className="legacy-layout">
          <div className="legacy-copy" data-reveal="slide-up">
            <p className="section-kicker">{aboutPageContent.backgroundLabel}</p>
            <h2>{aboutPageContent.backgroundTitle}</h2>
            <p>{aboutPageContent.backgroundBody}</p>
            <Link className="section-link" href="/about">
              Read More
            </Link>
          </div>

          <div className="legacy-rail" data-reveal="slide-up">
            {aboutPageContent.stats.map((stat) => (
              <article className="legacy-stat" key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
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

      <section className="home-section final-cta-panel" data-reveal-group>
        <div className="final-cta-copy" data-reveal="slide-up">
          <h2>{homepageSections.finalCta.title}</h2>
          <p>{homepageSections.finalCta.summary}</p>
          <div className="cta-row">
            <Link className="button-primary" href={homepageSections.finalCta.primaryCta.href}>
              {homepageSections.finalCta.primaryCta.label}
            </Link>
          </div>
        </div>

        <div className="final-cta-details">
          {homepageSections.finalCta.details.map((detail) => (
            <article className="final-cta-detail" data-reveal="slide-up" key={detail.label}>
              <span>{detail.label}</span>
              <strong>{detail.value}</strong>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
