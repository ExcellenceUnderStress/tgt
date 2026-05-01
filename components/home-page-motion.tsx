"use client";

import { useEffect } from "react";

export function HomePageMotion() {
  useEffect(() => {
    let cleanup = () => {};

    void (async () => {
      const shouldReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (shouldReduce) {
        document.documentElement.classList.add("reduced-motion");
        return;
      }

      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {

        gsap.from(".hero-inner > *", {
          y: 32,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.fromTo(
            element,
            { y: 36, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 82%",
                once: true,
              },
            },
          );
        });


        gsap.utils.toArray<HTMLVideoElement>("[data-scroll-video]").forEach((video) => {
          ScrollTrigger.create({
            trigger: video.closest("section") ?? video,
            start: "top 75%",
            end: "bottom 25%",
            onEnter: () => void video.play().catch(() => {}),
            onEnterBack: () => void video.play().catch(() => {}),
            onLeave: () => video.pause(),
            onLeaveBack: () => video.pause(),
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax-card]").forEach((card) => {
          const media = card.querySelector<HTMLElement>(".build-preview-image");
          if (!media) return;

          gsap.to(media, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7,
            },
          });
        });
      });

      cleanup = () => {
        ctx.revert();
      };
    })();

    return () => cleanup();
  }, []);

  return null;
}
