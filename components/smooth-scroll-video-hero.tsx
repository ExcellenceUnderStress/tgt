"use client";

import * as React from "react";

interface ISmoothScrollVideoHeroProps {
  video: string;
  videoWebm?: string;
  poster?: string;
  eyebrow?: string;
  title: string;
  summary: string;
  location: string;
  learnMoreHref: string;
}

const SmoothScrollVideoHero: React.FC<ISmoothScrollVideoHeroProps> = ({
  video,
  videoWebm,
  poster,
  eyebrow,
  title,
  summary,
  location,
  learnMoreHref,
}) => {
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
            poster={poster ?? undefined}
          >
            {videoWebm ? <source src={videoWebm} type="video/webm" /> : null}
            <source src={video} type="video/mp4" />
          </video>
          <div className="hero-video-tint" aria-hidden="true" />
          <div className="hero-video-vignette" aria-hidden="true" />
        </div>
      </div>

      <div className="hero-overlay-copy">
        <div className="hero-copy-stack">
          {eyebrow ? (
            <p className="hero-eyebrow">
              <span className="hero-eyebrow-mark" aria-hidden="true" />
              {eyebrow}
            </p>
          ) : null}
          <h1 className="hero-display-title">{title}</h1>
          <div className="hero-detail">
            <p className="hero-summary">{summary}</p>
            <p className="hero-location">{location}</p>
            <a className="button button-primary hero-cta" href={learnMoreHref}>
              Start Booking
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmoothScrollVideoHero;
