import fs from "node:fs";
import path from "node:path";

import Image from "next/image";

import styles from "@/styles/brands.module.css";

type BrandLogo = {
  name: string;
  src: string;
};

const BRAND_DIRECTORY = "brands";
const IMAGE_EXTENSIONS = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);

function resolveBrandDirectory() {
  const publicDirectory = path.join(process.cwd(), "public");
  const directoryName = fs
    .readdirSync(publicDirectory, { withFileTypes: true })
    .find((entry) => entry.isDirectory() && entry.name.toLowerCase() === BRAND_DIRECTORY)?.name;

  if (!directoryName) {
    return null;
  }

  return {
    name: directoryName,
    path: path.join(publicDirectory, directoryName),
  };
}

function formatBrandName(fileName: string) {
  const slug = path
    .basename(fileName, path.extname(fileName))
    .replace(/-color$/iu, "")
    .replace(/logo$/iu, "");

  return slug
    .split(/[-_\s]+/u)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getBrandLogos(): BrandLogo[] {
  const brandDirectory = resolveBrandDirectory();

  if (!brandDirectory) {
    return [];
  }

  return fs
    .readdirSync(brandDirectory.path, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()),
    )
    .map((entry) => ({
      name: formatBrandName(entry.name),
      src: `/${brandDirectory.name}/${encodeURIComponent(entry.name)}`,
    }))
    .sort((firstBrand, secondBrand) => firstBrand.name.localeCompare(secondBrand.name));
}

const brandLogos = getBrandLogos();

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
