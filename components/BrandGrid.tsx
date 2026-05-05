import Image from "next/image";

import { brandLogos } from "@/lib/brand-logos.generated";
import styles from "@/styles/brands.module.css";

export function BrandGrid() {
  if (brandLogos.length === 0) {
    return null;
  }

  return (
    <section aria-label="Supported ECU platforms" className={styles.section}>
      <h3 className={styles.heading}>Engine Management Systems we calibrate.</h3>
      <div className={styles.grid} role="list">
        {brandLogos.map((brand) => (
          <div className={styles.item} key={brand.src} role="listitem">
            <div className={styles.logoFrame}>
              <Image
                alt={brand.name}
                className={styles.logo}
                fill
                sizes="(max-width: 640px) 44vw, (max-width: 1024px) 24vw, 12vw"
                src={brand.src}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
