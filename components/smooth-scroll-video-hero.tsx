"use client";

import * as React from "react";

interface ISmoothScrollVideoHeroProps {
  scrollHeight?: number;
  desktopVideo: string;
  mobileVideo?: string;
  desktopVideoWebm?: string;
  mobileVideoWebm?: string;
  poster?: string;
  initialScale?: number;
  title: string;
  summary: string;
  location: string;
  learnMoreHref: string;
}

const SmoothScrollVideoHero: React.FC<ISmoothScrollVideoHeroProps> = ({
  scrollHeight = 1800,
  desktopVideo,
  mobileVideo,
  desktopVideoWebm,
  mobileVideoWebm,
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
  const mobileVideoRef = React.useRef<HTMLVideoElement | null>(null);
  const desktopVideoRef = React.useRef<HTMLVideoElement | null>(null);

  React.useEffect(() => {
    let cleanup = () => {};

    void (async () => {
      const shouldReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (shouldReduce) return;

      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.set(copyRef.current, { autoAlpha: 0, y: 36 });

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
            { scale: initialScale, borderRadius: 32 },
            { scale: 1, borderRadius: 0, ease: "power2.out", duration: 0.7 },
          )
          .to(copyRef.current, { autoAlpha: 1, y: 0, ease: "power2.out", duration: 0.3 }, ">-0.02");
      }, heroRef);

      cleanup = () => ctx.revert();
    })();

    const controlledVideos = [mobileVideoRef.current, desktopVideoRef.current].filter(
      (video): video is HTMLVideoElement => Boolean(video),
    );

    controlledVideos.forEach((video) => {
      void video.play().catch(() => {});
    });

    return () => cleanup();
  }, [initialScale, scrollHeight]);

  return (
    <div ref={heroRef} className="smooth-scroll-video-hero hero-pin-stage">
      <div className="hero-media-shell">
        <div ref={mediaRef} className="hero-media hero-media-pinnable">
          <video
            ref={mobileVideoRef}
            className="absolute inset-0 h-full w-full object-cover md:hidden hero-video"
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            poster={poster ?? undefined}
          >
            {mobileVideoWebm ? <source src={mobileVideoWebm} type="video/webm" /> : null}
            <source src={mobileVideo ?? desktopVideo} type="video/mp4" />
          </video>

          <video
            ref={desktopVideoRef}
            className="absolute inset-0 hidden h-full w-full object-cover md:block hero-video"
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            poster={poster ?? undefined}
          >
            {desktopVideoWebm ? <source src={desktopVideoWebm} type="video/webm" /> : null}
            <source src={desktopVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="hero-inner z-30 flex min-h-screen items-end justify-center pb-16 pt-20 md:pb-24 md:pt-24">
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
