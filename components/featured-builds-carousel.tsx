"use client";

import { motion, useMotionValue, animate, type PanInfo } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import { BuildPreviewCard } from "@/components/build-preview-card";
import type { HomepageBuild } from "@/lib/site-content";

type FeaturedBuildsCarouselProps = {
  builds: HomepageBuild[];
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function closestSnapPoint(points: number[], target: number) {
  return points.reduce((closest, point) =>
    Math.abs(point - target) < Math.abs(closest - target) ? point : closest,
  );
}

export function FeaturedBuildsCarousel({ builds }: FeaturedBuildsCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [snapPoints, setSnapPoints] = useState([0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const measureCarousel = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) {
      return;
    }

    const maxOffset = Math.max(track.scrollWidth - viewport.clientWidth, 0);
    const points = Array.from(track.children).map((child) =>
      -Math.min((child as HTMLElement).offsetLeft, maxOffset),
    );
    const uniquePoints = points.filter(
      (point, index) => index === 0 || Math.abs(point - points[index - 1]) > 1,
    );
    const nextSnapPoints = uniquePoints.length > 0 ? uniquePoints : [0];
    const nextX = clamp(x.get(), -maxOffset, 0);
    const nextSnapTarget = closestSnapPoint(nextSnapPoints, nextX);

    setConstraints({ left: -maxOffset, right: 0 });
    setSnapPoints(nextSnapPoints);
    setActiveIndex(Math.max(nextSnapPoints.indexOf(nextSnapTarget), 0));
    x.set(nextX);
  }, [x]);

  useEffect(() => {
    measureCarousel();

    const resizeObserver = new ResizeObserver(measureCarousel);
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (viewport) {
      resizeObserver.observe(viewport);
    }

    if (track) {
      resizeObserver.observe(track);
    }

    return () => resizeObserver.disconnect();
  }, [measureCarousel]);

  const snapTo = useCallback(
    (target: number) => {
      const boundedTarget = clamp(target, constraints.left, constraints.right);
      const snapTarget = closestSnapPoint(snapPoints, boundedTarget);
      const nextIndex = snapPoints.indexOf(snapTarget);

      setActiveIndex(nextIndex >= 0 ? nextIndex : 0);

      void animate(x, snapTarget, {
        type: "spring",
        stiffness: 420,
        damping: 42,
        mass: 0.9,
      });
    },
    [constraints.left, constraints.right, snapPoints, x],
  );

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    snapTo(x.get() + info.velocity.x * 0.18);
  };

  const goToOffset = (direction: -1 | 1) => {
    snapTo(snapPoints[clamp(activeIndex + direction, 0, snapPoints.length - 1)] ?? 0);
  };

  if (builds.length === 0) {
    return null;
  }

  return (
    <div className="featured-builds-carousel" data-reveal="slide-up">
      <div className="featured-builds-carousel-viewport" ref={viewportRef}>
        <motion.div
          className="featured-builds-carousel-track"
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.08}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          ref={trackRef}
          style={{ x }}
        >
          {builds.map((build, index) => (
            <div className="featured-builds-carousel-slide" key={build.title}>
              <BuildPreviewCard build={build} index={index} />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="featured-builds-carousel-controls" aria-label="Featured build carousel controls">
        <button
          aria-label="Previous featured build"
          className="featured-builds-carousel-control"
          disabled={activeIndex === 0}
          onClick={() => goToOffset(-1)}
          type="button"
        >
          Previous
        </button>
        <div className="featured-builds-carousel-progress" aria-hidden="true">
          {snapPoints.map((point, index) => (
            <span data-active={index === activeIndex} key={`${point}-${index}`} />
          ))}
        </div>
        <button
          aria-label="Next featured build"
          className="featured-builds-carousel-control"
          disabled={activeIndex === snapPoints.length - 1}
          onClick={() => goToOffset(1)}
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  );
}
