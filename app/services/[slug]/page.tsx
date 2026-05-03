import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GuidePageRenderer } from "@/components/guide-page-renderer";
import { getServiceGuidePage, serviceGuidePages } from "@/lib/haltech-guide-content";

type ServiceGuideRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return serviceGuidePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: ServiceGuideRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServiceGuidePage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function ServiceGuideDetailPage({ params }: ServiceGuideRouteProps) {
  const { slug } = await params;
  const page = getServiceGuidePage(slug);

  if (!page) {
    notFound();
  }

  return (
    <GuidePageRenderer
      page={page}
      backHref="/services"
      backLabel="All Services"
    />
  );
}
