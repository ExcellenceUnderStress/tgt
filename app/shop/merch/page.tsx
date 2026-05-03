import Image from "next/image";

import { AddToCartButton } from "@/components/add-to-cart-button";
import { ChecklistGrid } from "@/components/checklist-grid";
import { DetailRail } from "@/components/detail-rail";
import { FinalCta } from "@/components/final-cta";
import { RouteIntro } from "@/components/route-intro";
import { SectionHeading } from "@/components/section-heading";
import {
  getCollectionProducts,
  isShopifyConfigured,
} from "@/lib/shopify";
import { merchPageContent, routeHeroes } from "@/lib/site-content";

export default async function MerchPage() {
  const page = merchPageContent;

  const products = isShopifyConfigured()
    ? await getCollectionProducts("merch").catch(() => [])
    : [];

  return (
    <>
      <RouteIntro hero={routeHeroes.merch} />

      {/* ── Intro + Note ── */}
      <section className="route-section service-detail-shell">
        <div className="service-detail-columns">
          <SectionHeading kicker={page.introLabel} title={page.introTitle}>
            <p>{page.introBody}</p>
          </SectionHeading>
          <DetailRail
            as="aside"
            label={page.noteLabel}
            title={page.noteTitle}
            body={page.noteBody}
          />
        </div>
      </section>

      {/* ── Products or placeholder ── */}
      {products.length > 0 ? (
        <section className="route-section">
          <div className="merch-grid">
            {products.map((product) => {
              const variant = product.variants.edges[0]?.node;
              return (
                <article key={product.id} className="merch-card">
                  <div className="merch-card-media">
                    {product.featuredImage ? (
                      <Image
                        src={product.featuredImage.url}
                        alt={
                          product.featuredImage.altText ?? product.title
                        }
                        width={400}
                        height={400}
                        sizes="(max-width: 600px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    ) : (
                      <div className="merch-card-media-fallback" aria-hidden />
                    )}
                  </div>
                  <div className="merch-card-body">
                    <h3 className="merch-card-title">{product.title}</h3>
                    {variant && (
                      <p className="merch-card-price">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: variant.price.currencyCode,
                        }).format(parseFloat(variant.price.amount))}
                      </p>
                    )}
                    {variant && (
                      <AddToCartButton
                        variantId={variant.id}
                        availableForSale={variant.availableForSale}
                      />
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ) : (
        <section className="route-section">
          <ChecklistGrid
            groups={[{ title: "What this route is for", items: page.bullets }]}
          />
        </section>
      )}

      {/* ── Final CTA ── */}
      <FinalCta
        kicker="Need Help?"
        title={page.finalCta.title}
        summary={page.finalCta.summary}
        primaryCta={page.finalCta.primaryCta}
        secondaryCta={page.finalCta.secondaryCta}
      />
    </>
  );
}
