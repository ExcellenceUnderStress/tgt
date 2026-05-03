import Image from "next/image";
import type { Metadata } from "next";

import { ChecklistGrid } from "@/components/checklist-grid";
import cardStyles from "@/components/card-surface.module.css";
import { FinalCta } from "@/components/final-cta";
import { GuideCardGrid } from "@/components/guide-card-grid";
import { RouteIntro } from "@/components/route-intro";
import { SectionHeading } from "@/components/section-heading";
import { StatGrid } from "@/components/stat-grid";
import {
  ecuGuideHero,
  ecuGuideItems,
  ecuGuideStats,
  ecuLadder,
  highTicketHaltechItems,
} from "@/lib/haltech-guide-content";

export const metadata: Metadata = {
  title: "Haltech ECU Buyer Guide | TurboGixxer",
  description:
    "A practical Haltech ECU guide covering Elite 750, Elite 1500, Elite 2500, Nexus S2/S3, Nexus R3, Nexus R5, Rebel LS, and Rebel JZ selection.",
};

export default function HaltechEcuGuidePage() {
  return (
    <>
      <RouteIntro hero={ecuGuideHero} />

      <section className="route-section">
        <StatGrid stats={ecuGuideStats} />
      </section>

      <section className="route-section">
        <SectionHeading kicker="Quick Ladder" title="The natural product ladder." />
        <ChecklistGrid groups={[{ items: ecuLadder }]} />
      </section>

      <section className="route-section">
        <SectionHeading kicker="ECU Range" title="Top to bottom, with the real buying logic." />
        <div className="ecu-guide-list">
          {ecuGuideItems.map((item) => (
            <article className={`ecu-guide-card ${cardStyles.premiumCard}`} id={item.id} key={item.id}>
              <div className="ecu-guide-media">
                <Image
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 32vw"
                  src={item.image}
                />
              </div>

              <div className="ecu-guide-copy">
                <div className="haltech-product-meta">
                  <span>{item.price}</span>
                  <span>{item.outputSummary}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <p>
                  <strong>Best for:</strong> {item.bestFor}
                </p>
                <ul className="service-preview-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {item.notFor ? <p className="guide-not-for">{item.notFor}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="route-section">
        <SectionHeading kicker="Also Worth Discussing" title="High-ticket supporting hardware." />
        <GuideCardGrid items={highTicketHaltechItems} />
      </section>

      <FinalCta
        kicker="Fitment Help"
        title="Choosing between Elite, Nexus S, Nexus R, or Rebel?"
        summary="Send the platform, harness state, DBW setup, injectors, fuel, and power goal. We will point you to the right tier."
        primaryCta={{ href: "/contact?topic=haltech-ecu-guide", label: "Ask For ECU Guidance" }}
        secondaryCta={{ href: "/shop/haltech", label: "Back To Haltech" }}
      />
    </>
  );
}
