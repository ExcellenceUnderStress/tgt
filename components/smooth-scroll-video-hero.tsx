"use client";

import * as React from "react";

const HERO_VIDEO_SRC = "/Heromp4.mp4";

const SmoothScrollVideoHero = () => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      void videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="smooth-scroll-video-hero">
      <div className="hero-media-shell">
        <div className="hero-media">
          <video
            ref={videoRef}
            className="hero-video"
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
          <div className="hero-video-tint" aria-hidden="true" />
        </div>
      </div>

      <div className="hero-overlay-copy">
        <p className="hero-eyebrow">TURBOGIXXER TUNING</p>

        <h1 className="hero-display-title">
          TUNED TO DRIVE.
          <br />
          NOT JUST TO DYNO.
        </h1>

        <div className="hero-action-block">
          <p className="hero-summary">
            Dyno and remote EFI tuning. Street, track, high-power. Auburn, Washington.
          </p>
          <div className="hero-cta-row" aria-label="Hero calls to action">
            <a className="button button-primary hero-cta" href="/contact">
              Start Booking
            </a>
            <a className="button button-secondary hero-cta" href="/services">
              View Services
            </a>
          </div>
        </div>

        <div className="hero-scroll-indicator" aria-hidden="true">
          <span>SCROLL</span>
          <span className="hero-scroll-arrow">↓</span>
        </div>
      </div>
    </div>
  );
};

export default SmoothScrollVideoHero;
