import type { Metadata } from "next";

import { FinalCta } from "@/components/final-cta";
import { GuideCardGrid } from "@/components/guide-card-grid";
import { RouteIntro } from "@/components/route-intro";
import { SectionHeading } from "@/components/section-heading";
import {
  serviceGuideCards,
  serviceLandingHero,
} from "@/lib/haltech-guide-content";

export const metadata: Metadata = {
  title: "Haltech Services | TurboGixxer",
  description:
    "Haltech ECU installation, dyno tuning, remote tuning, and shop-support service paths for serious standalone ECU builds.",
};

export default function ServicesLandingPage() {
  return (
    <>
      <RouteIntro hero={serviceLandingHero} />

      <section className="route-section">
        <SectionHeading kicker="Install + Tune" title="Products only make sense when the work after the box is planned.">
          <p>
            Buying a Haltech is the easy part. Installing it cleanly, checking the
            wiring, loading the right base map, tuning it on the dyno, and keeping
            the file supported are where a shop earns its keep.
          </p>
        </SectionHeading>
        <GuideCardGrid items={serviceGuideCards} />
      </section>

      <FinalCta
        kicker="Consult First"
        title="Tell us whether you need install, tuning, or both."
        summary="Send the platform, ECU, harness state, fuel, current tune status, and power goal. We will route it correctly."
        primaryCta={{ href: "/contact?topic=services", label: "Start A Build Consult" }}
        secondaryCta={{ href: "/pricing", label: "View Pricing" }}
      />
    </>
  );
}
