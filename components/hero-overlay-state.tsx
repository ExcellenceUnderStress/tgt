"use client";

import * as React from "react";

export function HeroOverlayState() {
  React.useEffect(() => {
    const anchor = document.querySelector<HTMLElement>("[data-hero-anchor]");
    if (!anchor) return;

    const root = document.documentElement;
    root.dataset.heroActive = "true";

    const header = document.querySelector<HTMLElement>(".site-header");
    const syncHeaderHeight = () => {
      if (!header) return;
      root.style.setProperty("--site-header-height", `${header.offsetHeight}px`);
    };
    syncHeaderHeight();

    const resizeObserver = header ? new ResizeObserver(syncHeaderHeight) : null;
    resizeObserver?.observe(header!);

    const observer = new IntersectionObserver(
      ([entry]) => {
        root.dataset.heroActive = entry.isIntersecting ? "true" : "false";
      },
      { rootMargin: "-72px 0px 0px 0px", threshold: 0 },
    );

    observer.observe(anchor);

    return () => {
      observer.disconnect();
      resizeObserver?.disconnect();
      delete root.dataset.heroActive;
      root.style.removeProperty("--site-header-height");
    };
  }, []);

  return null;
}
