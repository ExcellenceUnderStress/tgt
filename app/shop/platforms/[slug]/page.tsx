import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ChecklistGrid } from "@/components/checklist-grid";
import { FinalCta } from "@/components/final-cta";
import { GuideCardGrid } from "@/components/guide-card-grid";
import { JsonLd } from "@/components/json-ld";
import { RouteIntro } from "@/components/route-intro";
import { SectionHeading } from "@/components/section-heading";
import { StatGrid } from "@/components/stat-grid";
import { Timeline } from "@/components/timeline";
import {
  getPlatformPage,
  platformPages,
  platformSchema,
} from "@/lib/platform-pages";

type PlatformRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return platformPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PlatformRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPlatformPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function PlatformPage({ params }: PlatformRouteProps) {
  const { slug } = await params;
  const page = getPlatformPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <JsonLd data={platformSchema(page)} />
      <RouteIntro hero={page.hero} />

      <section className="route-section service-detail-shell">
        <div className="service-detail-lead">
          <SectionHeading kicker={page.engineName} title={page.title}>
            {page.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </SectionHeading>
        </div>
      </section>

      <section className="route-section">
        <StatGrid stats={page.stats} />
      </section>

      <section className="route-section service-detail-columns">
        <div>
          <p className="section-kicker">Tuning Reality</p>
          <h2>{page.interestingTitle}</h2>
          <ul className="service-preview-list">
            {page.interesting.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="platform-link-rail">
          <p className="booking-mini-label">Related Products</p>
          {page.productLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <section className="route-section">
        <SectionHeading kicker="Haltech Path" title="The realistic ECU and harness route." />
        <Timeline steps={page.tuningPath} />
      </section>

      <section className="route-section">
        <SectionHeading kicker="Recommendation" title="What we would recommend." />
        <GuideCardGrid
          items={page.recommendations.map((item) => ({
            title: item.title,
            body: item.body,
            href: item.href,
            eyebrow: "Recommended path",
          }))}
        />
      </section>

      <section className="route-section">
        <ChecklistGrid groups={[{ title: "Who it is not for", items: page.notFor }]} />
      </section>

      <section className="route-section service-detail-columns">
        <SectionHeading kicker="Why TurboGixxer" title="Buy the parts with the tune in mind.">
          <p>{page.whyUs}</p>
        </SectionHeading>

        <div className="platform-link-rail">
          <p className="booking-mini-label">Cross-links</p>
          {page.crossLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <FinalCta
        kicker="Next Step"
        title="Tell us the engine, chassis, wiring, fuel, and power goal."
        summary="That is enough to point you toward the right Haltech path before you buy the wrong kit."
        primaryCta={{ href: `/contact?platform=${page.slug}`, label: "Start A Build Consult" }}
        secondaryCta={{ href: "/shop/platforms", label: "All Platform Guides" }}
      />
    </>
  );
}
