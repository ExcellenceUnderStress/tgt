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

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const mediaScale = useTransform(scrollYProgress, [0, 0.75], [initialScale, 1]);
  const mediaRadius = useTransform(scrollYProgress, [0, 0.75], [32, 0]);

  const headlineY = useTransform(scrollYProgress, [0, 0.3], [0, -64]);
  const copyY = useTransform(scrollYProgress, [0.05, 0.36], [0, -80]);
  const buttonY = useTransform(scrollYProgress, [0.1, 0.42], [0, -96]);

  const headlineOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
  const copyOpacity = useTransform(scrollYProgress, [0.08, 0.3], [1, 0]);
  const buttonOpacity = useTransform(scrollYProgress, [0.14, 0.38], [1, 0]);

  React.useEffect(() => {
    const controlledVideos = [mobileVideoRef.current, desktopVideoRef.current].filter(
      (video): video is HTMLVideoElement => Boolean(video),
    );

    controlledVideos.forEach((video) => {
      void video.play().catch(() => {});
    });
  }, []);

  return (
    <div ref={heroRef} className="smooth-scroll-video-hero" style={{ height: `calc(${scrollHeight}px + 100vh)` }}>
      <div className="hero-inner sticky top-0 z-20 flex min-h-screen items-start justify-center pt-20 md:pt-24">
        <div className="hero-copy-block pointer-events-auto">
          <motion.h1 style={{ y: reduceMotion ? 0 : headlineY, opacity: reduceMotion ? 1 : headlineOpacity }}>{title}</motion.h1>
          <div className="hero-copy">
            <motion.p style={{ y: reduceMotion ? 0 : copyY, opacity: reduceMotion ? 1 : copyOpacity }}>{summary}</motion.p>
            <motion.p className="hero-location" style={{ y: reduceMotion ? 0 : copyY, opacity: reduceMotion ? 1 : copyOpacity }}>
              {location}
            </motion.p>
            <motion.a
              className="button button-primary"
              href={learnMoreHref}
              style={{ y: reduceMotion ? 0 : buttonY, opacity: reduceMotion ? 1 : buttonOpacity }}
            >
              Learn More
            </motion.a>
          </div>
        </div>
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
            autoPlay
            preload="auto"
            poster={poster}
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
            poster={poster}
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
