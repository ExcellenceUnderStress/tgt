"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import type { NavItem } from "@/lib/site-content";

export type PageHeroMedia = {
  /** Source URL for an image or video. Omit to render a styled placeholder block. */
  src?: string;
  /** Image alt text, or accessible label for the slot when empty. */
  alt?: string;
  type?: "image" | "video";
  poster?: string;
  /** Tiny uppercase label rendered over the slot (e.g. "DYNO 02 / RAW"). */
  label?: string;
};

export type PageHeroProps = {
  eyebrow: string;
  title: string;
  summary?: string;
  primaryCta?: NavItem;
  secondaryCta?: NavItem;
  /** Three media tiles laid out as one large + two small. All optional. */
  media?: {
    primary?: PageHeroMedia;
    secondary?: PageHeroMedia;
    tertiary?: PageHeroMedia;
  };
};

export function PageHero({ eyebrow, title, summary, primaryCta, secondaryCta, media }: PageHeroProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add("page-hero--mounted", "page-hero--reduced");
      return;
    }
    const id = window.requestAnimationFrame(() => el.classList.add("page-hero--mounted"));
    return () => window.cancelAnimationFrame(id);
  }, []);

  const renderMedia = (slot: PageHeroMedia | undefined, slotName: string) => {
    if (!slot) {
      return (
        <div className="page-hero-media-placeholder" aria-hidden="true">
          <span className="page-hero-media-label">{slotName}</span>
        </div>
      );
    }

    if (slot.src && slot.type === "video") {
      return (
        <>
          <video
            className="page-hero-media-fill"
            src={slot.src}
            poster={slot.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={slot.alt}
          />
          {slot.label ? <span className="page-hero-media-label">{slot.label}</span> : null}
        </>
      );
    }

    if (slot.src) {
      return (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="page-hero-media-fill" src={slot.src} alt={slot.alt ?? ""} />
          {slot.label ? <span className="page-hero-media-label">{slot.label}</span> : null}
        </>
      );
    }

    return (
      <div className="page-hero-media-placeholder" aria-hidden="true">
        <span className="page-hero-media-label">{slot.label ?? slotName}</span>
      </div>
    );
  };

  return (
    <section ref={ref} className="page-hero">
      <span className="page-hero-rule" aria-hidden="true" />
      <div className="page-hero-grid">
        <div className="page-hero-copy">
          <p className="page-hero-eyebrow section-kicker">{eyebrow}</p>
          <h1 className="page-hero-title">{title}</h1>
          {summary ? <p className="page-hero-summary">{summary}</p> : null}
          {primaryCta || secondaryCta ? (
            <div className="cta-row page-hero-ctas">
              {primaryCta ? (
                <Link className="button-primary" href={primaryCta.href}>
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link className="button-secondary" href={secondaryCta.href}>
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="page-hero-media">
          <div className="page-hero-media-tile page-hero-media-tile--primary" data-stagger="0">
            {renderMedia(media?.primary, "MEDIA / 01")}
          </div>
          <div className="page-hero-media-tile page-hero-media-tile--secondary" data-stagger="1">
            {renderMedia(media?.secondary, "MEDIA / 02")}
          </div>
          <div className="page-hero-media-tile page-hero-media-tile--tertiary" data-stagger="2">
            {renderMedia(media?.tertiary, "MEDIA / 03")}
          </div>
        </div>
      </div>
    </section>
  );
}
