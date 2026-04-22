import type { HomepageBrand } from "@/lib/site-content";

type BrandStripProps = {
  brands: HomepageBrand[];
};

export function BrandStrip({ brands }: BrandStripProps) {
  return (
    <section className="recognition-strip recognition-strip-brands" aria-label="Supported systems">
      {brands.map((brand) => (
        <div className="brand-rail-item" key={brand.name} role="listitem">
          <img
            alt={brand.name}
            className="brand-rail-logo"
            loading="lazy"
            src={brand.logo}
          />
        </div>
      ))}
    </section>
  );
}
