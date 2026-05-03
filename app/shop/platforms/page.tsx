import type { Metadata } from "next";

import { FinalCta } from "@/components/final-cta";
import { GuideCardGrid } from "@/components/guide-card-grid";
import { RouteIntro } from "@/components/route-intro";
import { SectionHeading } from "@/components/section-heading";
import { platformFamilyGroups, platformsHero } from "@/lib/platform-pages";

export const metadata: Metadata = {
  title: "Haltech Platform Guides | TurboGixxer",
  description:
    "Engine-specific Haltech ECU, harness, ignition, and tuning paths for JZ, RB, Honda K/B/F, Subaru EJ, 4G63, 13B, LS, and Coyote builds.",
};

export default function PlatformsPage() {
  return (
    <>
      <RouteIntro hero={platformsHero} />

      <section className="route-section">
        <SectionHeading kicker="Engine Families" title="Start with the engine, then choose the ECU path.">
          <p>
            These pages are written for the way customers actually search: best ECU for
            a 2JZ, RB26 standalone tuning, K-series Haltech, and the edge cases that
            matter before money gets spent.
          </p>
        </SectionHeading>
        <div className="platform-family-stack">
          {platformFamilyGroups.map((group) => (
            <section
              aria-labelledby={`${group.id}-platforms-title`}
              className="platform-family-section"
              key={group.id}
            >
              <div className="platform-family-heading">
                <p className="section-kicker">Platform Family</p>
                <h3 id={`${group.id}-platforms-title`}>{group.title}</h3>
                <p>{group.summary}</p>
              </div>
              <GuideCardGrid items={group.platforms} />
            </section>
          ))}
        </div>
      </section>

      <FinalCta
        kicker="Fitment First"
        title="Not sure which path fits your exact build?"
        summary="Send the engine, chassis, harness state, transmission, fuel, and power goal before ordering."
        primaryCta={{ href: "/contact", label: "Ask For Fitment Help" }}
        secondaryCta={{ href: "/shop/haltech", label: "Shop Haltech" }}
      />
    </>
  );
}
