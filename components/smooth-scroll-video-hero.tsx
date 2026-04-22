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

  const clipStart = useTransform(scrollY, [0, scrollHeight], [initialClipPercentage, 0]);
  const clipEnd = useTransform(scrollY, [0, scrollHeight], [finalClipPercentage, 100]);
  const scale = useTransform(scrollY, [0, scrollHeight + 500], [initialScale, 1]);

  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

  return (
    <motion.div
      className="sticky top-0 h-screen w-full overflow-hidden bg-black"
      style={{
        clipPath: reduceMotion ? "none" : clipPath,
        willChange: "clip-path",
      }}
    >
      <motion.video
        className="absolute inset-0 h-full w-full object-cover md:hidden"
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
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
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
    <div className="relative w-full" style={{ height: `calc(${scrollHeight}px + 100vh)` }}>
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
    </div>
  );
};

export default SmoothScrollVideoHero;
