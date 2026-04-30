"use client";

import * as React from "react";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

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


const PLAYBACK_START_PROGRESS = 0.45;
const TEXT_REVEAL_START = 0.12;
const TEXT_REVEAL_END = 0.3;

const SmoothScrollVideoHero: React.FC<ISmoothScrollVideoHeroProps> = ({
  scrollHeight = 1400,
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
  const reduceMotion = useReducedMotion();
  const heroRef = React.useRef<HTMLDivElement | null>(null);
  const mobileVideoRef = React.useRef<HTMLVideoElement | null>(null);
  const desktopVideoRef = React.useRef<HTMLVideoElement | null>(null);
  const playbackStartedRef = React.useRef(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const mediaScale = useTransform(scrollYProgress, [0, 0.75], [initialScale, 1]);
  const mediaRadius = useTransform(scrollYProgress, [0, 0.75], [32, 0]);
  const textY = useTransform(scrollYProgress, [TEXT_REVEAL_START, 0.42], [0, -88]);
  const textOpacity = useTransform(scrollYProgress, [TEXT_REVEAL_START, TEXT_REVEAL_END], [0, 1]);

  React.useEffect(() => {
    const controlledVideos = [mobileVideoRef.current, desktopVideoRef.current].filter(
      (video): video is HTMLVideoElement => Boolean(video),
    );

    if (!controlledVideos.length) return;

    const maybeStartPlayback = (progress: number) => {
      if (playbackStartedRef.current) return;
      if (!reduceMotion && progress < PLAYBACK_START_PROGRESS) return;

      playbackStartedRef.current = true;
      controlledVideos.forEach((video) => {
        void video.play().catch(() => {});
      });
    };

    maybeStartPlayback(scrollYProgress.get());
    const unsubscribe = scrollYProgress.on("change", maybeStartPlayback);

    return unsubscribe;
  }, [reduceMotion, scrollYProgress]);

  return (
    <div ref={heroRef} className="smooth-scroll-video-hero" style={{ height: `calc(${scrollHeight}px + 100vh)` }}>
      <div className="hero-inner sticky top-0 z-20 flex min-h-screen items-start justify-center pt-8 md:pt-12">
        <motion.div className="hero-copy-block pointer-events-auto" style={{ y: reduceMotion ? 0 : textY, opacity: reduceMotion ? 1 : textOpacity }}>
          <h1>{title}</h1>
          <div className="hero-copy">
            <p>{summary}</p>
            <p className="hero-location">{location}</p>
            <a className="button button-primary" href={learnMoreHref}>Learn More</a>
          </div>
        </motion.div>
      </div>

      <div className="hero-media-shell">
        <motion.div
          className="hero-media"
          style={{
            scale: reduceMotion ? 1 : mediaScale,
            borderRadius: reduceMotion ? 0 : mediaRadius,
            willChange: "transform, border-radius",
          }}
        >
          <video
            ref={mobileVideoRef}
            className="absolute inset-0 h-full w-full object-cover md:hidden hero-video"
            muted
            loop
            playsInline
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
            preload="auto"
            poster={poster ?? undefined}
          >
            {desktopVideoWebm ? <source src={desktopVideoWebm} type="video/webm" /> : null}
            <source src={desktopVideo} type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </div>
  );
};

export default SmoothScrollVideoHero;
