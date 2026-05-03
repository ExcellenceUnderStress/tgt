import Image from "next/image";
import Link from "next/link";

import {
  curatedHaltechGroups,
  curatedHaltechStats,
} from "@/lib/curated-haltech-products";

const priceFormatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  maximumFractionDigits: 0,
  style: "currency",
});

function productInquiryHref(product: {
  displayName: string;
  sku: string;
  subcategory: string;
}) {
  const params = new URLSearchParams({
    category: product.subcategory,
    product: product.displayName,
    sku: product.sku,
  });

  return `/contact?${params.toString()}`;
}

export function HaltechProductShowcase() {
  return (
    <section className="route-section haltech-showcase" aria-labelledby="haltech-products-title">
      <div className="haltech-showcase-header">
        <div className="section-heading">
          <p className="section-kicker">Current Haltech Shop</p>
          <h2 id="haltech-products-title">Curated hardware that belongs in a build plan.</h2>
          <p>
            Budget sensors, loose cables, and small accessories are intentionally left out.
            Anything under $300 is filtered out at the catalog source, while this page
            keeps the focus on Rebel kits, wiring kits, displays, and CAN expansion
            hardware with verified product images.
          </p>
        </div>

        <div className="haltech-stat-grid" aria-label="Haltech product filters">
          {curatedHaltechStats.map((stat) => (
            <div className="haltech-stat" key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="haltech-category-tiles">
        {curatedHaltechGroups.map((group) => (
          <a className="haltech-category-tile" href={`#${group.id}`} key={group.id}>
            <div className="haltech-category-tile-media">
              <Image
                alt={group.title}
                fill
                sizes="(max-width: 900px) 50vw, 33vw"
                src={group.image}
              />
            </div>

            <div className="haltech-category-tile-body">
              <h3>{group.title}</h3>
              <p>{group.summary}</p>
              <span>{group.products.length} product{group.products.length === 1 ? "" : "s"}</span>
            </div>
          </a>
        ))}
      </div>

      <nav className="haltech-category-nav" aria-label="Haltech product groups">
        {curatedHaltechGroups.map((group) => (
          <a href={`#${group.id}`} key={group.id}>
            {group.title}
          </a>
        ))}
      </nav>

      <div className="haltech-product-groups">
        {curatedHaltechGroups.map((group) => (
          <section className="haltech-product-group" id={group.id} key={group.id}>
            <div className="haltech-product-group-heading">
              <h3>{group.title}</h3>
              <p>{group.summary}</p>
            </div>

            <div className="haltech-product-grid">
              {group.products.map((product) => (
                <article className="haltech-product-card" key={product.sku}>
                  <div className="haltech-product-media">
                    <Image
                      alt={product.displayName}
                      fill
                      sizes="(max-width: 720px) 100vw, (max-width: 1180px) 50vw, 33vw"
                      src={product.image}
                    />
                  </div>

                  <div className="haltech-product-copy">
                    <div className="haltech-product-meta">
                      <span>{product.sku}</span>
                      <span>{product.subcategory}</span>
                    </div>
                    <h4>{product.displayName}</h4>
                    <p>{product.summary}</p>
                    <div className="haltech-product-footer">
                      <span>{priceFormatter.format(product.price)}</span>
                      <Link
                        aria-label={`Inquire about ${product.displayName}`}
                        className="section-link"
                        href={productInquiryHref(product)}
                      >
                        Ask About This
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
