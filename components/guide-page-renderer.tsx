import Image from "next/image";

import { ChecklistGrid } from "@/components/checklist-grid";
import { DetailRail } from "@/components/detail-rail";
import { FinalCta } from "@/components/final-cta";
import { GuideCardGrid } from "@/components/guide-card-grid";
import { RouteIntro } from "@/components/route-intro";
import { SectionHeading } from "@/components/section-heading";
import { Timeline } from "@/components/timeline";
import type { GuidePage } from "@/lib/haltech-guide-content";

type GuidePageRendererProps = {
  page: GuidePage;
  backHref: string;
  backLabel: string;
};

export function GuidePageRenderer({ page, backHref, backLabel }: GuidePageRendererProps) {
  return (
    <>
      <RouteIntro
        hero={{
          eyebrow: page.eyebrow,
          title: page.title,
          summary: page.summary,
          primaryCta: { href: "/contact", label: "Ask About This" },
          secondaryCta: { href: backHref, label: backLabel },
        }}
      />

      <section className="route-section service-detail-shell">
        <div className="service-detail-columns">
          <SectionHeading kicker={page.sku ?? page.eyebrow} title={page.title}>
            <p>{page.summary}</p>
          </SectionHeading>

          {page.image ? (
            <div className="guide-product-visual">
              <Image
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 38vw"
                src={page.image}
              />
            </div>
          ) : (
            <DetailRail
              label="Service path"
              title={page.eyebrow}
              body="Send the build details first so the scope can be quoted correctly."
            />
          )}
        </div>
      </section>

      {page.price ? (
        <section className="route-section">
          <div className="guide-price-strip">
            <span>Reference price</span>
            <strong>{page.price}</strong>
          </div>
        </section>
      ) : null}

      <section className="route-section">
        <SectionHeading kicker="Details" title="What to know before ordering." />
        <Timeline steps={page.sections} />
      </section>

      {page.bullets ? (
        <section className="route-section">
          <ChecklistGrid groups={page.bullets} />
        </section>
      ) : null}

      {page.related.length > 0 ? (
        <section className="route-section">
          <SectionHeading kicker="Related" title="Cross-check the rest of the build." />
          <GuideCardGrid items={page.related} />
        </section>
      ) : null}

      <FinalCta
        kicker="Next Step"
        title="Need the right answer for your actual build?"
        summary="Send the engine, ECU plan, fuel, power goal, and current wiring state. We will tell you what fits before you buy parts."
        primaryCta={{ href: "/contact", label: "Start A Build Consult" }}
        secondaryCta={{ href: backHref, label: backLabel }}
      />
    </>
  );
}
