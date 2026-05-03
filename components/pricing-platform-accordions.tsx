"use client";

import { useEffect, useRef, useState } from "react";

import type { ServicePricingCard } from "@/lib/site-content";
import cardStyles from "./card-surface.module.css";

export type PricingPlatformRequest = {
  id: string;
  sequence: number;
};

type PricingPlatformQuickFilterProps = {
  cards: ServicePricingCard[];
  onSelect: (id: string) => void;
};

type PricingPlatformAccordionsProps = {
  cards: ServicePricingCard[];
  request?: PricingPlatformRequest | null;
};

function AccordionArrowIcon() {
  return (
    <svg
      className="pricing-platform-toggle-icon"
      aria-hidden="true"
      viewBox="0 0 20 20"
      focusable="false"
    >
      <path d="M5.75 7.5 10 11.75 14.25 7.5" />
    </svg>
  );
}

export function getPricingPlatformId(title: string) {
  return `pricing-platform-${title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;
}

export function getPricingPlatformLabel(title: string) {
  return title.replace(/\s*\(.+\)\s*$/, "");
}

export function PricingPlatformQuickFilter({ cards, onSelect }: PricingPlatformQuickFilterProps) {
  return (
    <section className="route-section pricing-platform-filter" aria-label="Quick Filter">
      <div className="pricing-platform-filter-row">
        <span className="booking-mini-label">Quick Filter</span>
        <div className="pricing-platform-filter-buttons">
          {cards.map((card) => {
            const id = getPricingPlatformId(card.title);

            return (
              <button
                key={card.title}
                type="button"
                className="pricing-platform-filter-button"
                aria-controls={id}
                onClick={() => onSelect(id)}
              >
                {getPricingPlatformLabel(card.title)}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PricingPlatformAccordions({ cards, request }: PricingPlatformAccordionsProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set());
  const handledRequest = useRef(0);

  useEffect(() => {
    if (!request || handledRequest.current === request.sequence) return;

    handledRequest.current = request.sequence;
    setOpenIds((current) => {
      const next = new Set(current);
      next.add(request.id);
      return next;
    });

    const animationFrame = window.requestAnimationFrame(() => {
      document.getElementById(request.id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [request]);

  const togglePlatform = (id: string) => {
    setOpenIds((current) => {
      const next = new Set(current);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  return (
    <div className="pricing-platform-accordion-list">
      {cards.map((card) => {
        const id = getPricingPlatformId(card.title);
        const panelId = `${id}-panel`;
        const triggerId = `${id}-trigger`;
        const isOpen = openIds.has(id);

        return (
          <section
            className={`pricing-platform-accordion ${cardStyles.premiumCard}`}
            id={id}
            key={card.title}
            data-open={isOpen ? "true" : "false"}
          >
            <h3 className="pricing-platform-heading">
              <button
                id={triggerId}
                type="button"
                className="pricing-platform-trigger"
                aria-controls={panelId}
                aria-expanded={isOpen}
                onClick={() => togglePlatform(id)}
              >
                <span className="pricing-platform-title-group">
                  <span className="pricing-platform-title">{card.title}</span>
                  <span className="pricing-platform-subtitle">{card.subtitle}</span>
                </span>
                {card.badge ? <span className="pricing-badge">{card.badge}</span> : null}
                <span className="pricing-platform-toggle" aria-hidden="true">
                  <AccordionArrowIcon />
                </span>
              </button>
            </h3>

            <div
              className="pricing-platform-panel"
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
            >
              <div className="pricing-row-list">
                {card.rows.map((row) => (
                  <div className="pricing-row" key={`${card.title}-${row.label}`}>
                    <div>
                      <strong>{row.label}</strong>
                      {row.detail ? <p>{row.detail}</p> : null}
                    </div>
                    <span>{row.value}</span>
                  </div>
                ))}
              </div>

              {card.footer ? <p className="pricing-card-footer">{card.footer}</p> : null}
            </div>
          </section>
        );
      })}
    </div>
  );
}
