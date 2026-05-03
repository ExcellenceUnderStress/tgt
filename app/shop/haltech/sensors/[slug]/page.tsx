import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GuidePageRenderer } from "@/components/guide-page-renderer";
import { JsonLd } from "@/components/json-ld";
import {
  getSensorPage,
  guideProductSchema,
  sensorPages,
} from "@/lib/haltech-guide-content";

type SensorRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return sensorPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: SensorRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSensorPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function SensorDetailPage({ params }: SensorRouteProps) {
  const { slug } = await params;
  const page = getSensorPage(slug);

  if (!page) {
    notFound();
  }

  const url = `/shop/haltech/sensors/${page.slug}`;

  return (
    <>
      <JsonLd data={guideProductSchema(page, url)} />
      <GuidePageRenderer
        page={page}
        backHref="/shop/haltech/sensors"
        backLabel="All Sensor Guides"
      />
    </>
  );
}
