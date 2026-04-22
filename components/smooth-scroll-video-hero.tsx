"use client";

import * as React from "react";

import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

interface ISmoothScrollVideoHeroProps {
  scrollHeight?: number;
  desktopVideo: string;
  mobileVideo?: string;
  desktopVideoWebm?: string;
  mobileVideoWebm?: string;
  poster?: string;
  initialClipPercentage?: number;
  finalClipPercentage?: number;
  initialScale?: number;
}

interface ISmoothScrollVideoHeroBackgroundProps {
  scrollHeight: number;
  desktopVideo: string;
  mobileVideo?: string;
  desktopVideoWebm?: string;
  mobileVideoWebm?: string;
  poster?: string;
  initialClipPercentage: number;
  finalClipPercentage: number;
  initialScale: number;
}

const PLAYBACK_START_OFFSET = 72;

const SmoothScrollVideoHeroBackground: React.FC<ISmoothScrollVideoHeroBackgroundProps> = ({
  scrollHeight,
  desktopVideo,
  mobileVideo,
  desktopVideoWebm,
  mobileVideoWebm,
  poster,
  initialClipPercentage,
  finalClipPercentage,
  initialScale,
}) => {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const mobileVideoRef = React.useRef<HTMLVideoElement | null>(null);
  const desktopVideoRef = React.useRef<HTMLVideoElement | null>(null);

  const clipStart = useTransform(scrollY, [0, scrollHeight], [initialClipPercentage, 0]);
  const clipEnd = useTransform(scrollY, [0, scrollHeight], [finalClipPercentage, 100]);
  const scale = useTransform(scrollY, [0, scrollHeight + 500], [initialScale, 1]);
  const grainOffset = useTransform(scrollY, [0, scrollHeight], [0, -140]);
  const glowOpacity = useTransform(scrollY, [0, scrollHeight * 0.7], [0.55, 0.12]);
  const scrimOpacity = useTransform(scrollY, [0, 120, scrollHeight], [0.94, 0.84, 0.46]);
  const overlayOpacity = useTransform(scrollY, [0, 120, scrollHeight], [0.88, 0.74, 0.38]);
  const standbyOpacity = useTransform(
    scrollY,
    [0, PLAYBACK_START_OFFSET - 16, PLAYBACK_START_OFFSET + 32],
    [1, 1, 0],
  );

  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

  React.useEffect(() => {
    const controlledVideos = [mobileVideoRef.current, desktopVideoRef.current].filter(
      (video): video is HTMLVideoElement => Boolean(video),
    );

    if (!controlledVideos.length) return;

    const syncPlayback = (position: number) => {
      const shouldPlay = reduceMotion || position >= PLAYBACK_START_OFFSET;

      controlledVideos.forEach((video) => {
        if (shouldPlay) {
          void video.play().catch(() => {});
          return;
        }

        video.pause();
        try {
          video.currentTime = 0;
        } catch {}
      });
    };

    syncPlayback(scrollY.get());
    const unsubscribe = scrollY.on("change", syncPlayback);

    return unsubscribe;
  }, [reduceMotion, scrollY]);

  return (
    <div className="hero-media-shell">
      <motion.div
        className="hero-media-mask"
        style={{
          clipPath: reduceMotion ? "none" : clipPath,
          willChange: "clip-path, opacity, transform",
        }}
      />

      <motion.div
        className="hero-media"
        style={{
          clipPath: reduceMotion ? "none" : clipPath,
          willChange: "clip-path, transform",
        }}
      >
        <motion.video
          className="absolute inset-0 h-full w-full object-cover md:hidden hero-video"
          data-scroll-video
          style={{ scale: reduceMotion ? 1 : scale, willChange: "transform" }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={poster}
        >
          {mobileVideoWebm ? <source src={mobileVideoWebm} type="video/webm" /> : null}
          <source src={mobileVideo ?? desktopVideo} type="video/mp4" />
        </motion.video>

        <motion.video
          className="absolute inset-0 hidden h-full w-full object-cover md:block hero-video"
          data-scroll-video
          style={{ scale: reduceMotion ? 1 : scale, willChange: "transform" }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={poster}
        >
          {desktopVideoWebm ? <source src={desktopVideoWebm} type="video/webm" /> : null}
          <source src={desktopVideo} type="video/mp4" />
        </motion.video>

        <motion.div className="hero-visual-scrim" style={{ opacity: reduceMotion ? 0.45 : glowOpacity }} />
        <motion.div
          className="hero-cinematic-grain"
          style={{ y: reduceMotion ? 0 : grainOffset }}
          aria-hidden="true"
        />
        <div className="hero-vignette" aria-hidden="true" />
      </motion.div>
    </div>
    <motion.div
      className="smooth-scroll-video-hero-background"
      style={{
        clipPath: reduceMotion ? "none" : clipPath,
        willChange: "clip-path",
      }}
    >
      <motion.video
        ref={mobileVideoRef}
        className="smooth-scroll-video-hero-video smooth-scroll-video-hero-video-mobile"
        style={{ scale: reduceMotion ? 1 : scale, willChange: "transform" }}
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
      >
        {mobileVideoWebm ? <source src={mobileVideoWebm} type="video/webm" /> : null}
        <source src={mobileVideo ?? desktopVideo} type="video/mp4" />
      </motion.video>

      <motion.video
        ref={desktopVideoRef}
        className="smooth-scroll-video-hero-video smooth-scroll-video-hero-video-desktop"
        style={{ scale: reduceMotion ? 1 : scale, willChange: "transform" }}
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
      >
        {desktopVideoWebm ? <source src={desktopVideoWebm} type="video/webm" /> : null}
        <source src={desktopVideo} type="video/mp4" />
      </motion.video>

      {poster ? (
        <motion.div
          aria-hidden="true"
          className="smooth-scroll-video-hero-standby"
          style={{
            opacity: reduceMotion ? 0 : standbyOpacity,
            backgroundImage: `url("${poster}")`,
          }}
        />
      ) : null}

      <motion.div
        aria-hidden="true"
        className="smooth-scroll-video-hero-overlay"
        style={{ opacity: overlayOpacity }}
      />
      <motion.div
        aria-hidden="true"
        className="smooth-scroll-video-hero-scrim"
        style={{ opacity: scrimOpacity }}
      />
    </motion.div>
  );
};

const SmoothScrollVideoHero: React.FC<ISmoothScrollVideoHeroProps> = ({
  scrollHeight = 1500,
  desktopVideo,
  mobileVideo,
  desktopVideoWebm,
  mobileVideoWebm,
  poster,
  initialClipPercentage = 25,
  finalClipPercentage = 75,
  initialScale = 1.15,
}) => {
  return (
    <div className="smooth-scroll-video-hero" style={{ height: `calc(${scrollHeight}px + 100vh)` }}>
      <SmoothScrollVideoHeroBackground
        scrollHeight={scrollHeight}
        desktopVideo={desktopVideo}
        mobileVideo={mobileVideo}
        desktopVideoWebm={desktopVideoWebm}
        mobileVideoWebm={mobileVideoWebm}
        poster={poster}
        initialClipPercentage={initialClipPercentage}
        finalClipPercentage={finalClipPercentage}
        initialScale={initialScale}
      />

      <div className="hero-scroll-cue" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero-scroll-cue-line" />
      </div>
    </div>
  );
};

export default SmoothScrollVideoHero;
