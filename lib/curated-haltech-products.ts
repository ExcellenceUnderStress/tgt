import { haltechProducts, type HaltechProduct } from "./haltech-products";

type CuratedProductSeed = {
  sku: string;
  displayName: string;
  summary: string;
};

type CuratedHaltechGroupSeed = {
  id: string;
  title: string;
  summary: string;
  products: CuratedProductSeed[];
};

export type CuratedHaltechProduct = Omit<HaltechProduct, "price"> & {
  displayName: string;
  summary: string;
  image: string;
  price: number;
};

export type CuratedHaltechGroup = {
  id: string;
  title: string;
  summary: string;
  image: string;
  products: CuratedHaltechProduct[];
};

const MIN_CURATED_PRICE_USD = 300;

export const curatedProductGroups: CuratedHaltechGroupSeed[] = [
  {
    id: "ecu-vcu",
    title: "Rebel Kits",
    summary:
      "Starter packages built around Nexus Rebel ECUs with matched wiring and platform-ready hardware.",
    products: [
      {
        sku: "HT-220205",
        displayName: "Nexus Rebel JZ + Harness Kit",
        summary: "Designed for JZ platform installs with integrated engine control and terminated harness support.",
      },
      {
        sku: "HT-220201",
        displayName: "Rebel LS Kit - Suits Gen III",
        summary: "LS application package with cable-throttle, EV1 injector, and manual transmission compatibility.",
      },
      {
        sku: "HT-220204",
        displayName: "Rebel LS Kit - Suits Gen IV",
        summary: "LS application package with 6-pin DBW support for modern throttle control wiring.",
      },
    ],
  },
  {
    id: "ecu-universal-wiring-kits",
    title: "ECU + Universal Wiring Kits",
    summary:
      "ECU builds where a 2.5m universal harness package keeps install paths straightforward.",
    products: [
      {
        sku: "HT-150900",
        displayName: "Elite 1500 ECU",
        summary: "Entry standalone ECU with universal wiring starter package for flexible setup workflows.",
      },
      {
        sku: "HT-151300",
        displayName: "Elite 2500 ECU",
        summary: "Mid-tier standalone ECU with a clean platform foundation for broader tuning flexibility.",
      },
      {
        sku: "HT-151304",
        displayName: "Elite 2500 + Premium Universal Harness Kit",
        summary: "Complete Elite 2500 package with premium universal wire-in harness for a quicker first build.",
      },
      {
        sku: "HT-151310",
        displayName: "Elite 2500 T ECU + Universal Harness",
        summary: "Higher-output T variant with the same wire-in harness approach for larger engine combos.",
      },
    ],
  },
  {
    id: "ecu-plugnplay-kits",
    title: "ECU + Plug'n'Play Kits",
    summary:
      "Platform-specific p/n adapter harness kits that reduce custom termination and fit-time.",
    products: [
      {
        sku: "HT-150921",
        displayName: "Elite 1500 Plug'n'Play Harness Kit",
        summary:
          "Vehicle-specific adapter kit for Mazda MX5 NB with reduced wire changes.",
      },
      {
        sku: "HT-151320",
        displayName: "Elite 2500 Subaru WRX Adapter Kit",
        summary: "Subaru WRX adapter route with factory-term style integration for faster installs.",
      },
      {
        sku: "HT-151325",
        displayName: "Elite 2500 Subaru GDB WRX Adapter Kit",
        summary: "Early WRX platform-focused plug'n'play kit for cleaner wire count and fewer splices.",
      },
      {
        sku: "HT-213200",
        displayName: "Nexus S3 + PnP Compatibility Kit",
        summary: "Nexus S3 hardware path with proven compatibility setup for high-quality base installs.",
      },
      {
        sku: "HT-213307",
        displayName: "Nexus S3 PnP Adapter Kit",
        summary: "Platform-specific RX7 FD S6 path for focused drivetrain compatibility.",
      },
    ],
  },
  {
    id: "wiring-harnesses",
    title: "Wiring Harnesses",
    summary:
      "Engine and ignition wiring sets that keep harness quality and signal integrity consistent.",
    products: [
      {
        sku: "HT-130306",
        displayName: "8-Channel Ignition Coil Harness",
        summary: "High-output harness package for GM/Chrysler ignition coil routing.",
      },
      {
        sku: "HT-130312",
        displayName: "8-Channel Coil & Harness Kit",
        summary: "Ignition coil package with terminated harness for faster ignition system completion.",
      },
      {
        sku: "HT-130318",
        displayName: "Toyota 2JZ Term Main Engine Harness",
        summary: "Harness-focused 2JZ solution where terminations and routing are already considered.",
      },
      {
        sku: "HT-140875",
        displayName: "Mazda 13B Ignition Harness Set",
        summary: "Terminated 13B fly-lead style harness for compact rotary applications.",
      },
      {
        sku: "HT-141362",
        displayName: "Nexus Elite LS1 Terminated Harness",
        summary: "DBW-ready LS1 harness set for GM Gen III builds and repeatable engine installs.",
      },
    ],
  },
  {
    id: "digital-displays",
    title: "Digital Displays",
    summary: "Dash and gauge hardware for clear in-car data and warning feedback.",
    products: [
      {
        sku: "HT-061010",
        displayName: "Haltech gaugeART CAN OLED Gauge",
        summary: "Compact gauge unit with CAN integration for essential runtime feedback.",
      },
      {
        sku: "HT-067010",
        displayName: "Haltech IC-7 7in Color Dash",
        summary: "Large color dash kit for map/alert display and live tuning visibility.",
      },
      {
        sku: "HT-067014",
        displayName: "Haltech Stand Alone IC-7 Classic Dash",
        summary: "Classic digital dash install style with CAN support for older and newer harness stacks.",
      },
      {
        sku: "HT-068000",
        displayName: "Haltech uC-10 Display Dash",
        summary: "Modern dashboard-oriented display hardware with strong display density and layout flexibility.",
      },
    ],
  },
  {
    id: "inputs-and-can-expansion-products",
    title: "Inputs and CAN Expansion Products",
    summary:
      "Input expanders, keypads, and I/O expansion hardware for larger data and control ecosystems.",
    products: [
      {
        sku: "HT-011501",
        displayName: "Haltech 2x4 CAN Keypad",
        summary: "Simple driver input interface for compact interface and warning control.",
      },
      {
        sku: "HT-059900",
        displayName: "IO 12 Expander Box A",
        summary: "CAN-based 12-channel expansion support for additional sensor and switch input paths.",
      },
      {
        sku: "HT-198000",
        displayName: "PD16 Power Distribution Module",
        summary: "System power management for cleaner module-level load and ignition reliability.",
      },
      {
        sku: "HT-198201",
        displayName: "PD16 PDM + Flying-Lead Harness",
        summary: "PD16 hardware with flying leads for direct power module integration.",
      },
      {
        sku: "HT-196000",
        displayName: "Nexus IO16 Expansion Box",
        summary: "16-channel I/O expansion for additional control and sensing inputs.",
      },
    ],
  },
] satisfies CuratedHaltechGroupSeed[];

const productIndex = new Map(haltechProducts.map((product) => [product.sku, product]));

function resolveProduct(seed: CuratedProductSeed): CuratedHaltechProduct {
  const product = productIndex.get(seed.sku);

  if (!product) {
    throw new Error(`Curated Haltech product ${seed.sku} was not found in the generated catalog.`);
  }

  if (!product.images[0]) {
    throw new Error(`Curated Haltech product ${seed.sku} does not have an associated image.`);
  }

  if (typeof product.price !== "number" || product.price < MIN_CURATED_PRICE_USD) {
    throw new Error(`Curated Haltech product ${seed.sku} is below the $${MIN_CURATED_PRICE_USD} floor.`);
  }

  return {
    ...product,
    displayName: seed.displayName,
    image: product.images[0],
    price: product.price,
    summary: seed.summary,
  };
}

export const curatedHaltechGroups: CuratedHaltechGroup[] = curatedProductGroups.map((group) => {
  const products = group.products.map(resolveProduct);
  return {
    ...group,
    image: products[0]!.image,
    products,
  };
});

export const curatedHaltechProducts = curatedHaltechGroups.flatMap((group) => group.products);

export const curatedHaltechStats = [
  {
    label: "Shown",
    value: `${curatedHaltechProducts.length} image-backed products`,
  },
  {
    label: "Floor",
    value: `$${MIN_CURATED_PRICE_USD.toLocaleString()}+ selected items`,
  },
  {
    label: "Focus",
    value: "Rebel kits, wiring, displays, and CAN expansion",
  },
];
