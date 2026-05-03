import type { Metadata } from "next";

import { FinalCta } from "@/components/final-cta";
import { GuideCardGrid } from "@/components/guide-card-grid";
import { RouteIntro } from "@/components/route-intro";
import { SectionHeading } from "@/components/section-heading";
import { sensorCards, sensorsHero } from "@/lib/haltech-guide-content";

export const metadata: Metadata = {
  title: "Haltech Sensors Guide | TurboGixxer",
  description:
    "Pressure, temperature, MAP, knock, and flex fuel sensor guidance for Haltech standalone ECU builds.",
};

export default function SensorsPage() {
  return (
    <>
      <RouteIntro hero={sensorsHero} />

      <section className="route-section">
        <SectionHeading kicker="Inputs" title="Give the ECU the data it needs to protect the engine.">
          <p>
            Pressure, temperature, MAP, knock, and ethanol content are not just
            extra channels. They are how a standalone ECU knows what is happening
            before the engine is hurt.
          </p>
        </SectionHeading>
        <GuideCardGrid items={sensorCards} />
      </section>

      <FinalCta
        kicker="Sensor Planning"
        title="Need a sensor list for a Haltech install?"
        summary="Send the ECU, engine, fuel system, boost target, and dash plan. We will tell you what needs to be wired."
        primaryCta={{ href: "/contact?topic=sensors", label: "Ask About Sensors" }}
        secondaryCta={{ href: "/shop/haltech", label: "Back To Haltech" }}
      />
    </>
  );
}
