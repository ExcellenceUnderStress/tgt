"use client";

import * as React from "react";

const HERO_SCROLL_HEIGHT = 2400;
const HERO_MEDIA_BORDER_RADIUS = 32;
const HERO_COPY_ENTRY_Y = -72;
const HERO_COPY_EXIT_Y = 72;
const HERO_ZOOM_DURATION = 0.45;
const HERO_COPY_REVEAL_DURATION = 0.22;
const HERO_COPY_HOLD_DURATION = 0.16;
const HERO_COPY_DISMISS_DURATION = 0.2;

interface ISmoothScrollVideoHeroProps {
  scrollHeight?: number;
  video: string;
  videoWebm?: string;
  poster?: string;
  initialScale?: number;
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
  initialScale = 0.66,
  title,
  summary,
  location,
  learnMoreHref,
}) => {
  const heroRef = React.useRef<HTMLDivElement | null>(null);
  const mediaRef = React.useRef<HTMLDivElement | null>(null);
  const copyRef = React.useRef<HTMLDivElement | null>(null);
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
        gsap.set(copyRef.current, { autoAlpha: 0, y: HERO_COPY_ENTRY_Y });

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
            { scale: initialScale, borderRadius: HERO_MEDIA_BORDER_RADIUS },
            { scale: 1, borderRadius: 0, ease: "power2.out", duration: HERO_ZOOM_DURATION },
          )
          .fromTo(
            copyRef.current,
            { autoAlpha: 0, y: HERO_COPY_ENTRY_Y },
            { autoAlpha: 1, y: 0, ease: "power2.out", duration: HERO_COPY_REVEAL_DURATION },
            ">-0.05",
          )
          .to({}, { duration: HERO_COPY_HOLD_DURATION })
          .to(copyRef.current, { autoAlpha: 0, y: HERO_COPY_EXIT_Y, ease: "power2.in", duration: HERO_COPY_DISMISS_DURATION });
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
            className="absolute inset-0 h-full w-full object-cover hero-video"
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
        </div>
      </div>

      <div className="hero-inner hero-overlay-copy z-30 flex min-h-screen items-end justify-center pb-16 pt-20 md:pb-24 md:pt-24">
        <div ref={copyRef} className="hero-copy-block pointer-events-auto">
          <h1>{title}</h1>
          <div className="hero-copy">
            <p>{summary}</p>
            <p className="hero-location">{location}</p>
            <a className="button button-primary" href={learnMoreHref}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmoothScrollVideoHero;
