import Image from "next/image";
import Link from "next/link";

import { FinalCta } from "@/components/final-cta";
import { RouteIntro } from "@/components/route-intro";
import { SectionHeading } from "@/components/section-heading";
import { haltechCategories, haltechProducts } from "@/lib/haltech-products";
import { routeHeroes, shopPageContent } from "@/lib/site-content";

export default function ShopPage() {
  const page = shopPageContent;
  const productCount = haltechProducts.length;

  return (
    <>
      <RouteIntro hero={routeHeroes.shop} />

      <section className="route-section service-detail-shell">
        <SectionHeading kicker={page.introLabel} title={page.introTitle}>
          <p>{page.introBody}</p>
        </SectionHeading>
      </section>

      <section className="route-section">
        <div className="section-heading" style={{ maxWidth: "48rem" }}>
          <p className="section-kicker">Haltech Catalog</p>
          <h2>Browse {productCount} Haltech products by category.</h2>
          <p>
            Hardware sourced from the January 2026 USD pricelist. Tap a category to
            jump straight to it on the Haltech page.
          </p>
        </div>

        <div className="haltech-category-tiles">
          {haltechCategories.map((c) => {
            const total = c.subcategories.reduce(
              (n, s) => n + s.products.length,
              0,
            );
            return (
              <Link
                key={c.slug}
                href={`/shop/haltech#${c.slug}`}
                className="haltech-category-tile"
              >
                <div className="haltech-category-tile-media">
                  {c.heroImage ? (
                    <Image
                      src={c.heroImage}
                      alt=""
                      width={400}
                      height={300}
                      sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : null}
                </div>
                <div className="haltech-category-tile-body">
                  <p className="section-kicker">Haltech</p>
                  <h3>{c.name}</h3>
                  <p>
                    {total} product{total === 1 ? "" : "s"} ·{" "}
                    {c.subcategories.length} subcategor
                    {c.subcategories.length === 1 ? "y" : "ies"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <FinalCta
        kicker="Need a hand?"
        title={page.finalCta.title}
        summary={page.finalCta.summary}
        primaryCta={page.finalCta.primaryCta}
        secondaryCta={page.finalCta.secondaryCta}
      />
    </>
  );
}
