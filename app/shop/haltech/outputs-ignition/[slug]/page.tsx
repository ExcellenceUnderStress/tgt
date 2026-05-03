import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GuidePageRenderer } from "@/components/guide-page-renderer";
import { JsonLd } from "@/components/json-ld";
import {
  getOutputIgnitionPage,
  guideProductSchema,
  outputIgnitionPages,
} from "@/lib/haltech-guide-content";

type OutputIgnitionRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return outputIgnitionPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: OutputIgnitionRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getOutputIgnitionPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function OutputIgnitionDetailPage({ params }: OutputIgnitionRouteProps) {
  const { slug } = await params;
  const page = getOutputIgnitionPage(slug);

  if (!page) {
    notFound();
  }

  const url = `/shop/haltech/outputs-ignition/${page.slug}`;

  return (
    <>
      <JsonLd data={guideProductSchema(page, url)} />
      <GuidePageRenderer
        page={page}
        backHref="/shop/haltech/outputs-ignition"
        backLabel="All Ignition Guides"
      />
    </>
  );
}
