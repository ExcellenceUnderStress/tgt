"use client";

import * as React from "react";

const HERO_SCROLL_HEIGHT = 2400;
const HERO_MEDIA_BORDER_RADIUS = 40;
const HERO_ZOOM_DURATION = 0.6;
const HERO_LINE_REVEAL = 0.18;
const HERO_LINE_STAGGER = 0.06;
const HERO_HOLD = 0.18;
const HERO_DISMISS = 0.22;
const HERO_FADE_OUT = 0.35;

interface ISmoothScrollVideoHeroProps {
  scrollHeight?: number;
  video: string;
  videoWebm?: string;
  poster?: string;
  initialScale?: number;
  eyebrow?: string;
  title: string;
  summary: string;
  location: string;
  learnMoreHref: string;
}

const SmoothScrollVideoHero: React.FC<ISmoothScrollVideoHeroProps> = ({
  scrollHeight = HERO_SCROLL_HEIGHT,
  video,
  videoWebm,
  poster,
  initialScale = 0.82,
  eyebrow,
  title,
  summary,
  location,
  learnMoreHref,
}) => {
  const heroRef = React.useRef<HTMLDivElement | null>(null);
  const mediaRef = React.useRef<HTMLDivElement | null>(null);
  const eyebrowRef = React.useRef<HTMLParagraphElement | null>(null);
  const titleRef = React.useRef<HTMLHeadingElement | null>(null);
  const detailRef = React.useRef<HTMLDivElement | null>(null);
  const fadeRef = React.useRef<HTMLDivElement | null>(null);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  React.useEffect(() => {
    let cleanup = () => {};

    void (async () => {
      const shouldReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (shouldReduce) return;

      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const lines = [eyebrowRef.current, titleRef.current, detailRef.current].filter(
          Boolean,
        ) as HTMLElement[];

        gsap.set(lines, { autoAlpha: 0, y: 36 });
        gsap.set(fadeRef.current, { autoAlpha: 0 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: `+=${scrollHeight}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        timeline
          .fromTo(
            mediaRef.current,
            {
              top: "46%",
              left: "5vw",
              right: "5vw",
              bottom: "6vh",
              borderRadius: HERO_MEDIA_BORDER_RADIUS,
            },
            {
              top: "0%",
              left: "0vw",
              right: "0vw",
              bottom: "0vh",
              borderRadius: 0,
              ease: "power3.inOut",
              duration: HERO_ZOOM_DURATION,
            },
          )
          .to(
            lines,
            {
              autoAlpha: 1,
              y: 0,
              ease: "power3.out",
              duration: HERO_LINE_REVEAL,
              stagger: HERO_LINE_STAGGER,
            },
            ">-0.05",
          )
          .to({}, { duration: HERO_HOLD })
          .to(lines, {
            autoAlpha: 0,
            y: -48,
            ease: "power2.in",
            duration: HERO_DISMISS,
            stagger: HERO_LINE_STAGGER * 0.6,
          })
          .to(
            fadeRef.current,
            { autoAlpha: 1, ease: "power2.in", duration: HERO_FADE_OUT },
            "<+0.05",
          );
      }, heroRef);

      cleanup = () => ctx.revert();
    })();

    if (videoRef.current) {
      void videoRef.current.play().catch(() => {});
    }

    return () => cleanup();
  }, [initialScale, scrollHeight]);

  return (
    <div ref={heroRef} className="smooth-scroll-video-hero hero-pin-stage">
      <div className="hero-media-shell">
        <div ref={mediaRef} className="hero-media hero-media-pinnable">
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
          <div ref={fadeRef} className="hero-fade-out" aria-hidden="true" />
        </div>
      </div>

      <div className="hero-overlay-copy">
        <div className="hero-copy-stack">
          {eyebrow ? (
            <p ref={eyebrowRef} className="hero-eyebrow">
              <span className="hero-eyebrow-mark" aria-hidden="true" />
              {eyebrow}
            </p>
          ) : null}
          <h1 ref={titleRef} className="hero-display-title">
            {title}
          </h1>
          <div ref={detailRef} className="hero-detail">
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
