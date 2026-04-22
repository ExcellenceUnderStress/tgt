"use client";

import { useEffect } from "react";

export function HomePageMotion() {
  useEffect(() => {
    let cleanup = () => {};
    let detachVideoMetadataListener = () => {};

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
        const hero = document.querySelector<HTMLElement>("[data-motion-root='hero']");
        const scrollVideo = document.querySelector<HTMLVideoElement>("[data-scroll-video]");
        const heroHeading = document.querySelector<HTMLElement>(".hero-copy-block h1");
        const heroCopy = document.querySelector<HTMLElement>(".hero-copy-block .hero-copy");

        if (hero && scrollVideo) {
          const keepVideoPlaying = () => {
            void scrollVideo.play().catch(() => {});
          };

          const heroTimeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "+=180%",
              scrub: 1.1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          heroTimeline
            .to(".hero-media", {
              scale: 1.04,
              duration: 1,
            }, 0)
            .to(".hero-media-mask", {
              scale: 1.18,
              clipPath: "inset(-8% -8% -8% -8% round 0rem)",
              filter: "blur(20px)",
              opacity: 0,
              duration: 1,
            }, 0)
            .to(".hero-visual-scrim", {
              opacity: 0.2,
              duration: 1,
            }, 0)
            .to(".hero-cinematic-grain", {
              opacity: 0.34,
              duration: 1,
            }, 0);

          heroTimeline.scrollTrigger?.refresh();

          if (scrollVideo.readyState >= 2) {
            keepVideoPlaying();
          } else {
            scrollVideo.addEventListener("loadeddata", keepVideoPlaying, { once: true });
            detachVideoMetadataListener = () => {
              scrollVideo.removeEventListener("loadeddata", keepVideoPlaying);
            };
          }
        }

        if (hero && heroHeading && heroCopy) {
          gsap.timeline({
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "+=140%",
              scrub: 0.8,
            },
          })
            .to(heroHeading, { yPercent: -24, autoAlpha: 0.18, ease: "none" }, 0)
            .to(heroCopy, { yPercent: -10, autoAlpha: 0, ease: "none" }, 0);
        }

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
        detachVideoMetadataListener();
        ctx.revert();
      };
    })();

    return () => cleanup();
  }, []);

  return null;
}
