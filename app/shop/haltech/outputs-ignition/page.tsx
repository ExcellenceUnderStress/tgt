import type { Metadata } from "next";

import { FinalCta } from "@/components/final-cta";
import { GuideCardGrid } from "@/components/guide-card-grid";
import { RouteIntro } from "@/components/route-intro";
import { SectionHeading } from "@/components/section-heading";
import {
  outputIgnitionCards,
  outputsIgnitionHero,
} from "@/lib/haltech-guide-content";

export const metadata: Metadata = {
  title: "Haltech Outputs, Ignition, and Injector Guide | TurboGixxer",
  description:
    "IGN-1A coils, R35 coil conversion kits, V8 ignition harnesses, CDI systems, and injector sizing guidance for Haltech standalone ECU builds.",
};

export default function OutputsIgnitionPage() {
  return (
    <>
      <RouteIntro hero={outputsIgnitionHero} />

      <section className="route-section">
        <SectionHeading kicker="Spark + Fuel" title="Do not let the ignition or injector choice become the limit.">
          <p>
            The right tune depends on the hardware doing what the ECU commands.
            Weak coils, bad harnesses, and poor injector data turn into wasted dyno
            time quickly.
          </p>
        </SectionHeading>
        <GuideCardGrid items={outputIgnitionCards} />
      </section>

      <FinalCta
        kicker="Build Matching"
        title="Need spark and injector sizing matched to your power goal?"
        summary="Send the engine, fuel, boost target, injector count, and current ignition setup before ordering."
        primaryCta={{ href: "/contact?topic=ignition-injectors", label: "Ask For A Recommendation" }}
        secondaryCta={{ href: "/shop/haltech", label: "Back To Haltech" }}
      />
    </>
  );
}
