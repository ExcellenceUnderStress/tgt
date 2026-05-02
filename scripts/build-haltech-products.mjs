// Generates lib/haltech-products.ts from the Haltech pricelist CSV and image folder.
// Run with: node scripts/build-haltech-products.mjs
//
// The pricelist CSV and product images are stored under public/images/shop in the
// main TurboGixxer repo. They are large binary assets so they may not be present
// in every checkout/worktree — the script falls back to the main repo path.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const REL = path.join(
  "public",
  "images",
  "shop",
  "Haltech Product Images for Webstore",
);

const CANDIDATE_ROOTS = [
  ROOT,
  path.resolve(ROOT, "..", "..", ".."), // worktree → main repo
];

let SHOP_DIR = null;
for (const candidate of CANDIDATE_ROOTS) {
  const probe = path.join(candidate, REL);
  if (fs.existsSync(probe)) {
    SHOP_DIR = probe;
    break;
  }
}
if (!SHOP_DIR) {
  console.error(
    "Could not find shop image folder. Looked in:\n" +
      CANDIDATE_ROOTS.map((c) => "  " + path.join(c, REL)).join("\n"),
  );
  process.exit(1);
}

const CSV_PATH = path.join(
  SHOP_DIR,
  "Untitled spreadsheet - Organized by Category.csv",
);
const OUT_PATH = path.join(ROOT, "lib", "haltech-products.ts");

const PUBLIC_PREFIX =
  "/images/shop/Haltech Product Images for Webstore";

// ----- Image index: SKU -> [public paths sorted by suffix] -----
function walkImages(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) walkImages(abs, results);
    else if (/\.(jpe?g|png|webp)$/i.test(entry.name)) results.push(abs);
  }
  return results;
}

const imageIndex = new Map(); // sku -> [{rel, base}]
for (const abs of walkImages(SHOP_DIR)) {
  const rel = path.relative(SHOP_DIR, abs).split(path.sep).join("/");
  const file = path.basename(rel);
  const m = file.match(/^(HT-\d{6})/i);
  if (!m) continue;
  const sku = m[1].toUpperCase();
  const list = imageIndex.get(sku) ?? [];
  list.push({ rel, base: file });
  imageIndex.set(sku, list);
}
for (const list of imageIndex.values()) {
  list.sort((a, b) => a.base.localeCompare(b.base, "en"));
}

// ----- CSV parse (RFC4180-ish) -----
function parseCsv(text) {
  const rows = [];
  let row = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        cur += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(cur);
      cur = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(cur);
      rows.push(row);
      row = [];
      cur = "";
    } else {
      cur += c;
    }
  }
  if (cur.length || row.length) {
    row.push(cur);
    rows.push(row);
  }
  return rows;
}

const csvText = fs.readFileSync(CSV_PATH, "utf8");
const rows = parseCsv(csvText);

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function cleanName(raw, sku) {
  if (!raw) return sku;
  let n = raw.trim();
  const skuRe = new RegExp(`^${sku}(?:_\\d+)?\\s*[-:]?\\s*`, "i");
  n = n.replace(skuRe, "");
  n = n.replace(/\s+Length:\s.*$/i, "");
  n = n.replace(/\s+Size:\s.*$/i, "");
  // Replace mojibake apostrophes & smart quotes with plain
  n = n
    .replace(/â€™|â€˜/g, "'")
    .replace(/â€œ|â€/g, '"')
    .replace(/Â/g, "")
    .replace(/Ã‚°/g, "°")
    .replace(/-ÿ/g, "");
  n = n.replace(/\s{2,}/g, " ").trim();
  return n || sku;
}

function parsePrice(raw) {
  if (!raw) return null;
  const m = raw.replace(/[^0-9.]/g, "");
  if (!m) return null;
  const v = Number(m);
  return Number.isFinite(v) ? v : null;
}

const productsBySku = new Map();
for (const r of rows) {
  const id = (r[0] ?? "").trim();
  if (!/^HT-\d{6}$/i.test(id)) continue;
  const sku = id.toUpperCase();
  const category = (r[1] ?? "").trim();
  const subcategory = (r[2] ?? "").trim();
  const description = (r[3] ?? "").trim();
  const price = parsePrice(r[4]);
  const upc = (r[5] ?? "").trim();
  if (!category) continue;

  const name = cleanName(description, sku);
  const imgs = imageIndex.get(sku) ?? [];
  const images = imgs.map((i) => `${PUBLIC_PREFIX}/${i.rel}`);

  if (!productsBySku.has(sku)) {
    productsBySku.set(sku, {
      sku,
      name,
      category,
      subcategory,
      price,
      upc: upc || null,
      images,
    });
  }
}

const categoryOrder = [];
const categoriesMap = new Map();

for (const r of rows) {
  const id = (r[0] ?? "").trim();
  if (!/^HT-\d{6}$/i.test(id)) continue;
  const sku = id.toUpperCase();
  const product = productsBySku.get(sku);
  if (!product) continue;
  const { category, subcategory } = product;
  if (!categoriesMap.has(category)) {
    categoriesMap.set(category, { subcategories: new Map() });
    categoryOrder.push(category);
  }
  const cat = categoriesMap.get(category);
  if (!cat.subcategories.has(subcategory)) {
    cat.subcategories.set(subcategory, []);
  }
  const list = cat.subcategories.get(subcategory);
  if (!list.find((p) => p.sku === sku)) list.push(product);
}

const categories = categoryOrder.map((name) => {
  const cat = categoriesMap.get(name);
  const subs = [];
  for (const [subName, products] of cat.subcategories.entries()) {
    subs.push({ name: subName, slug: slugify(subName), products });
  }
  let heroImage = null;
  for (const sub of subs) {
    for (const p of sub.products) {
      if (p.images.length) {
        heroImage = p.images[0];
        break;
      }
    }
    if (heroImage) break;
  }
  return { name, slug: slugify(name), subcategories: subs, heroImage };
});

const allProducts = [...productsBySku.values()];
const totalImages = allProducts.reduce((sum, p) => sum + p.images.length, 0);
const productsWithImages = allProducts.filter((p) => p.images.length).length;

const banner = `// AUTO-GENERATED by scripts/build-haltech-products.mjs.
// Source: public/images/shop/Haltech Product Images for Webstore/
// Re-run \`node scripts/build-haltech-products.mjs\` to refresh from the CSV/image folder.
`;

const ts = `${banner}
export type HaltechProduct = {
  sku: string;
  name: string;
  category: string;
  subcategory: string;
  price: number | null;
  upc: string | null;
  images: string[];
};

export type HaltechSubcategory = {
  name: string;
  slug: string;
  products: HaltechProduct[];
};

export type HaltechCategory = {
  name: string;
  slug: string;
  subcategories: HaltechSubcategory[];
  heroImage: string | null;
};

export const haltechCategories: HaltechCategory[] = ${JSON.stringify(categories, null, 2)};

export const haltechProducts: HaltechProduct[] = ${JSON.stringify(allProducts, null, 2)};

export function findHaltechCategory(slug: string): HaltechCategory | undefined {
  return haltechCategories.find((c) => c.slug === slug);
}

export function findHaltechProduct(sku: string): HaltechProduct | undefined {
  return haltechProducts.find((p) => p.sku.toUpperCase() === sku.toUpperCase());
}
`;

fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
fs.writeFileSync(OUT_PATH, ts, "utf8");

console.log(
  `Wrote ${path.relative(ROOT, OUT_PATH)} — ${allProducts.length} products / ${categories.length} categories / ${totalImages} images (${productsWithImages} products have at least one image, ${allProducts.length - productsWithImages} are image-less).`,
);
