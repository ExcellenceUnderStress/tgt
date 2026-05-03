import Image from "next/image";
import Link from "next/link";

import {
  haltechCategories,
  type HaltechCategory,
  type HaltechProduct,
} from "@/lib/haltech-products";

function formatPrice(price: number | null) {
  if (price == null) return "Inquire";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: price % 1 === 0 ? 0 : 2,
  }).format(price);
}

function inquireHref(p: HaltechProduct) {
  const params = new URLSearchParams({
    sku: p.sku,
    product: p.name,
  });
  return `/contact?${params.toString()}`;
}

export function HaltechCategoryNav() {
  return (
    <nav className="haltech-cat-nav" aria-label="Haltech categories">
      <ul>
        {haltechCategories.map((c) => (
          <li key={c.slug}>
            <a href={`#${c.slug}`}>
              <span>{c.name}</span>
              <span className="haltech-cat-nav-count">
                {c.subcategories.reduce((n, s) => n + s.products.length, 0)}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ProductCard({ product }: { product: HaltechProduct }) {
  const img = product.images[0];
  return (
    <article className="haltech-card">
      <div className="haltech-card-media">
        {img ? (
          <Image
            src={img}
            alt={product.name}
            width={400}
            height={400}
            sizes="(max-width: 600px) 50vw, (max-width: 1024px) 33vw, 22vw"
            loading="lazy"
          />
        ) : (
          <div className="haltech-card-media-fallback" aria-hidden>
            <span>{product.sku}</span>
          </div>
        )}
      </div>
      <div className="haltech-card-body">
        <p className="haltech-card-sku">{product.sku}</p>
        <h4 className="haltech-card-name">{product.name}</h4>
        <div className="haltech-card-foot">
          <span className="haltech-card-price">{formatPrice(product.price)}</span>
          <Link className="haltech-card-cta" href={inquireHref(product)}>
            Inquire
          </Link>
        </div>
      </div>
    </article>
  );
}

function CategorySection({ category }: { category: HaltechCategory }) {
  const total = category.subcategories.reduce(
    (n, s) => n + s.products.length,
    0,
  );
  return (
    <section
      id={category.slug}
      className="haltech-category"
      aria-labelledby={`${category.slug}-title`}
    >
      <header className="haltech-category-header">
        <p className="section-kicker">Haltech</p>
        <h2 id={`${category.slug}-title`}>{category.name}</h2>
        <p className="haltech-category-count">
          {total} product{total === 1 ? "" : "s"} across{" "}
          {category.subcategories.length} subcategor
          {category.subcategories.length === 1 ? "y" : "ies"}.
        </p>
      </header>

      {category.subcategories.map((sub) => (
        <div key={sub.slug} className="haltech-subcategory">
          <h3 className="haltech-subcategory-title">{sub.name}</h3>
          <div className="haltech-grid">
            {sub.products.map((p) => (
              <ProductCard key={p.sku} product={p} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export function HaltechCatalog() {
  return (
    <div className="haltech-catalog">
      {haltechCategories.map((c) => (
        <CategorySection key={c.slug} category={c} />
      ))}
    </div>
  );
}
