import type { GuideCardItem } from "@/components/guide-card-grid";
import type { RouteHero, ServiceDetailSection, ServiceDetailStat } from "./site-content";

export type GuidePage = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  image?: string;
  price?: string;
  sku?: string;
  sections: ServiceDetailSection[];
  bullets?: {
    title: string;
    items: string[];
  }[];
  related: GuideCardItem[];
};

export type EcuGuideItem = {
  id: string;
  title: string;
  price: string;
  summary: string;
  bestFor: string;
  outputSummary: string;
  image: string;
  bullets: string[];
  notFor?: string;
};

const contact = "/contact";
const shopHaltech = "/shop/haltech";

export const haltechGuideLinks: GuideCardItem[] = [
  {
    title: "Haltech ECU Buyer Guide",
    body: "Elite, Nexus S, Nexus R, Rebel LS, and Rebel JZ explained by real-world build fit.",
    href: "/shop/haltech/ecus",
    eyebrow: "ECU Range",
    image: "/images/shop/Haltech Product Images for Webstore/ECU - Universal Wiring Kits/Nexus S3/HT-213000_00.JPG",
  },
  {
    title: "Outputs, Ignition, and Injectors",
    body: "IGN-1A, R35 coil conversions, V8 ignition kits, CDI, and injector sizing guidance.",
    href: "/shop/haltech/outputs-ignition",
    eyebrow: "Spark + Fuel",
    image: "/images/shop/Haltech Product Images for Webstore/Outputs and Ignition Systems/Ignition Coils and Brackets/HT-020114_00.JPG",
  },
  {
    title: "Sensors",
    body: "Pressure, temperature, MAP, knock, and flex fuel sensors for standalone ECU builds.",
    href: "/shop/haltech/sensors",
    eyebrow: "Inputs",
    image: "/images/shop/Haltech Product Images for Webstore/Inputs and CAN Expansion Products/Pressure Sensors/HT-010904_00.JPG",
  },
  {
    title: "Platform Guides",
    body: "JZ, RB, K-series, B-series, S2000, EJ, 4G63, 13B, LS, and Coyote Haltech paths.",
    href: "/shop/platforms",
    eyebrow: "Engine Fitment",
    image: "/images/shop/Haltech Product Images for Webstore/Rebel Kits/Rebel ECU and terminated harness kits/HT-220205_00.JPG",
  },
];

export const ecuGuideHero: RouteHero = {
  eyebrow: "Haltech ECU Guide",
  title: "Choose the ECU by what the build actually needs.",
  summary:
    "Elite, Nexus S, Nexus R, and Rebel kits all have a place. The right answer comes from channel count, harness path, DBW, logging, power distribution, and how serious the car is.",
  primaryCta: { href: contact, label: "Ask For Fitment Help" },
  secondaryCta: { href: shopHaltech, label: "Back To Haltech" },
};

export const ecuGuideStats: ServiceDetailStat[] = [
  { label: "Entry", value: "Elite 750 for simple non-DBW builds" },
  { label: "Sweet spot", value: "Elite 1500 / Nexus S2 for most 4-cyl builds" },
  { label: "Race tier", value: "Nexus R5 when power and data are part of the system" },
];

export const ecuGuideItems: EcuGuideItem[] = [
  {
    id: "elite-750",
    title: "Elite 750 ECU",
    price: "$1,195",
    summary:
      "Entry-level Elite ECU with core standalone features, internal 4 BAR MAP, CAN expansion, flex fuel, closed-loop O2, and single-cam VVT support.",
    bestFor: "Basic EFI conversions, naturally aspirated street cars, simple 4/6-cylinder builds, and budget-conscious non-DBW projects.",
    outputSummary: "Up to 6 injector and 6 ignition outputs.",
    image: "/images/shop/Haltech Product Images for Webstore/ECU - Universal Wiring Kits/Elite 750/HT-150600_00.JPG",
    bullets: [
      "Single waterproof connector.",
      "Runs on NSP like the rest of the modern Haltech range.",
      "No DBW, knock control, traction control, anti-lag, trans brake, PDM, or Wi-Fi.",
    ],
    notFor: "Not for DBW, complex traction control, knock-controlled turbo builds, or race-feature-heavy cars.",
  },
  {
    id: "elite-1500",
    title: "Elite 1500 ECU",
    price: "$1,599",
    summary:
      "The step into DBW, knock control, multi-cam VVT, anti-lag, traction control, and the full race feature set.",
    bestFor: "Most modified four-cylinder DBW builds, two-rotor builds, K-series, F-series, 4G63, and many street/strip standalone installs.",
    outputSummary: "Up to 4 injector and 4 ignition outputs.",
    image: "/images/shop/Haltech Product Images for Webstore/ECU - Universal Wiring Kits/Elite 1500/HT-150900_00.JPG",
    bullets: [
      "Single-channel knock control.",
      "Independent control of up to four camshafts.",
      "Launch, traction, anti-lag, flat shift, trans brake, staged injection, and closed-loop boost control.",
    ],
    notFor: "Not the right tier when a V8, six-cylinder, or staged-injection build needs more injector/ignition outputs.",
  },
  {
    id: "elite-2500",
    title: "Elite 2500 ECU",
    price: "$1,959",
    summary:
      "Same family as the 1500, but with the output count and dual knock support needed for V8s, inline-sixes, and bigger rotary builds.",
    bestFor: "V8s, RB, JZ, 3/4-rotor builds, multi-cam engines, and serious street/race projects that need more I/O.",
    outputSummary: "Up to 8 injector and 8 ignition outputs.",
    image: "/images/shop/Haltech Product Images for Webstore/ECU - Universal Wiring Kits/Elite 2500/HT-151300_00.JPG",
    bullets: [
      "Dual knock inputs and more onboard logging storage than the 1500.",
      "Full race feature set standard.",
      "The safe default when channel count is the real question.",
    ],
  },
  {
    id: "nexus-s-series",
    title: "Nexus S2 / S3",
    price: "Modern Elite successor",
    summary:
      "The Nexus S-Series is the modern path when you want the Elite form factor with Wi-Fi, USB-C, faster comms, and torque management.",
    bestFor: "New builds choosing between an Elite 1500/2500 and a current-platform ECU.",
    outputSummary: "S2 broadly maps to the 1500 tier; S3 broadly maps to the 2500 tier.",
    image: "/images/shop/Haltech Product Images for Webstore/ECU - Universal Wiring Kits/Nexus S3/HT-213000_00.JPG",
    bullets: [
      "On-board Wi-Fi and USB-C 2.0.",
      "Torque management and modern comms are the real upgrade points.",
      "Different connectors than Elite 2-connector ECUs, so harness compatibility must be checked.",
    ],
    notFor: "Not a drop-in harness replacement for Elite 1500/2500 installs without repinning or the right adapter.",
  },
  {
    id: "nexus-r3",
    title: "Nexus R3 VCU",
    price: "Integrated VCU tier",
    summary:
      "Smaller-footprint Nexus VCU with ECU, PDM, logger, wideband, and Wi-Fi in one box.",
    bestFor: "Racers and builders who want integrated VCU benefits without stepping all the way to an R5.",
    outputSummary: "Supports 2, 4, 6, and 8-cylinder applications, with output limits versus R5.",
    image: "/images/shop/Haltech Product Images for Webstore/ECU - Universal Wiring Kits/Nexus R3/HT-193200_00.JPG",
    bullets: [
      "Engine management, power distribution, logging, single wideband, and Wi-Fi in one device.",
      "Good middle ground for serious 4/6/8-cylinder builds.",
      "Step to R5 when a V8 needs more than one injector per cylinder.",
    ],
  },
  {
    id: "nexus-r5",
    title: "Nexus R5 VCU",
    price: "$4,299",
    summary:
      "Haltech's flagship VCU: ECU, power distribution, dual wideband, data logging, and advanced torque management in one device.",
    bestFor: "Race cars, 1000+ hp builds, V8s with multiple injectors per cylinder, and high-end projects that need power control and data.",
    outputSummary: "Up to 18 injector and 12 ignition outputs.",
    image: "/images/shop/Haltech Product Images for Webstore/ECU - Universal Wiring Kits/Nexus R5/HT-195000_00.JPG",
    bullets: [
      "Integrated high-current power outputs replace a separate fuse/relay stack.",
      "On-board dual wideband support and up to 512 MB logging.",
      "Advanced Torque Management standard.",
    ],
    notFor: "Not necessary for a simple street car. Buy it because the system needs it, not because it is the top of the range.",
  },
];

export const ecuLadder = [
  "Elite 750 - first-time EFI conversions and simple non-DBW builds.",
  "Elite 1500 / Nexus S2 - most four-cylinder DBW, two-rotor, and modified street/strip builds.",
  "Elite 2500 / Nexus S3 - V8s, six-cylinders, 3/4-rotor, and dual-knock builds.",
  "Elite 2500 T - drag-focused 2500 tier with advanced torque management.",
  "Nexus R3 - integrated VCU benefits for serious 4/6/8-cylinder builds.",
  "Nexus R5 - flagship VCU for race-team-level power distribution, logging, and control.",
];

export const highTicketHaltechItems: GuideCardItem[] = [
  {
    title: "iC-7 and uC-10 Digital Dashes",
    body: "CAN-connected driver displays for warnings, live data, and clean in-car feedback.",
    href: `${shopHaltech}#digital-displays`,
    eyebrow: "Displays",
    image: "/images/shop/Haltech Product Images for Webstore/Digital Displays/uC-10 Digital Dash/HT-068000_00.JPG",
  },
  {
    title: "WB1 / WB2 CAN Wideband Kits",
    body: "Single and dual-channel wideband paths for ECUs without onboard wideband control.",
    href: "/shop/haltech/sensors",
    eyebrow: "Wideband",
    image: "/images/shop/Haltech Product Images for Webstore/Inputs and CAN Expansion Products/O2 Wideband Controllers & Accessories/HT-159986_00.JPG",
  },
  {
    title: "Nexus IO16 and PD16",
    body: "CAN expansion and power distribution hardware for builds that run out of simple I/O.",
    href: `${shopHaltech}#inputs-and-can-expansion-products`,
    eyebrow: "Expansion",
    image: "/images/shop/Haltech Product Images for Webstore/Inputs and CAN Expansion Products/Other Input Modules/HT-011600_00.JPG",
  },
];

export const outputsIgnitionHero: RouteHero = {
  eyebrow: "Outputs + Ignition",
  title: "Spark and injector control are where clean tunes are won or lost.",
  summary:
    "IGN-1A coils, R35 coil conversions, V8 ignition harnesses, CDI, and injector sizing guidance for builds that need real spark and fuel control.",
  primaryCta: { href: "/contact?topic=ignition-injectors", label: "Ask For A Recommendation" },
  secondaryCta: { href: shopHaltech, label: "Back To Haltech" },
};

export const outputIgnitionPages: GuidePage[] = [
  {
    slug: "ign-1a-coil",
    title: "High Output IGN-1A Inductive Coil",
    eyebrow: "HT-020114",
    summary:
      "The standard smart coil for serious EFI builds. The ECU sends a low-current logic signal and the coil handles the high-current switching.",
    metaTitle: "Haltech IGN-1A Coil Guidance | TurboGixxer",
    metaDescription:
      "When to use IGN-1A smart coils on Haltech builds, including turbo engines, V8 conversions, and rotary ignition requirements.",
    image: "/images/shop/Haltech Product Images for Webstore/Outputs and Ignition Systems/Ignition Coils and Brackets/HT-020114_00.JPG",
    price: "$88",
    sku: "HT-020114",
    sections: [
      {
        title: "Who it is for",
        body: "Built turbo engines where stock coils start misfiring under boost, V8 coil-near-plug conversions, and rotary builds where coil load is real.",
      },
      {
        title: "Why it matters",
        body: "A weak ignition system turns a good tune into a misfire chase. The IGN-1A gives the ECU a clean logic-level control path and keeps spark energy consistent at RPM and boost.",
      },
    ],
    bullets: [
      {
        title: "Sizing",
        items: ["4-cylinder: 4x coils", "6-cylinder: 6x coils", "8-cylinder: 8x coils", "13B rotary: 4x coils"],
      },
      {
        title: "Pair with",
        items: ["Universal or engine-specific IGN-1A harness", "Clean power relay strategy", "Correct dwell setup in NSP"],
      },
    ],
    related: [],
  },
  {
    slug: "inline-6-ign-1a-harness",
    title: "Universal Inline 6 IGN-1A Ignition Harness",
    eyebrow: "HT-130337",
    summary:
      "Pre-made six-channel ignition harness for inline-six engines using IGN-1A coils.",
    metaTitle: "Inline 6 IGN-1A Harness for JZ and RB Builds | TurboGixxer",
    metaDescription:
      "Haltech inline-six IGN-1A ignition harness guidance for 2JZ, 1JZ, RB, and other six-cylinder standalone ECU builds.",
    image: "/images/shop/Haltech Product Images for Webstore/Outputs and Ignition Systems/Ignition Coils and Brackets/HT-130337_00.JPG",
    price: "Call for price",
    sku: "HT-130337",
    sections: [
      {
        title: "Who it is for",
        body: "2JZ builds going IGN-1A, RB swaps, and inline-six projects where building a clean smart-coil harness from scratch is not the best use of time.",
      },
      {
        title: "What it does not include",
        body: "The harness does not include the coils. Plan on six IGN-1A coils plus the correct main engine harness strategy.",
      },
    ],
    bullets: [
      {
        title: "Common pairings",
        items: ["2JZ terminated harness", "RB terminated harness", "Elite 2500 or Nexus S3 inline-six builds"],
      },
    ],
    related: [],
  },
  {
    slug: "v8-ign-1a-coil-harness-kit",
    title: "V8 GM/Chrysler IGN-1A Coil + Harness Kit",
    eyebrow: "HT-130312",
    summary:
      "Eight-channel IGN-1A coil and harness package for V8 builds that need a complete ignition solution.",
    metaTitle: "V8 IGN-1A Coil and Harness Kit | TurboGixxer",
    metaDescription:
      "When to use the Haltech HT-130312 V8 IGN-1A coil and harness kit on LS, Hemi, small-block, and big-block standalone ECU builds.",
    image: "/images/shop/Haltech Product Images for Webstore/Wiring Harnesses/Elite ECU Terminated Engine Harnesses/HT-130312_00.JPG",
    price: "$1,139",
    sku: "HT-130312",
    sections: [
      {
        title: "Who it is for",
        body: "LS swaps, Hemi builds, and traditional small-block or big-block EFI conversions that already have the ECU and main harness sorted.",
      },
      {
        title: "Why use a kit",
        body: "Eight smart coils, a terminated harness, and power relay strategy remove a lot of wiring risk from a V8 ignition setup.",
      },
    ],
    bullets: [
      {
        title: "Includes",
        items: ["8x IGN-1A-style coils", "Terminated eight-channel coil harness", "High-current relay support"],
      },
    ],
    related: [],
  },
  {
    slug: "r35-gtr-coil-conversion-kits",
    title: "R35 GT-R Coil Conversion Kits For JZ And RB",
    eyebrow: "JZ / RB Ignition",
    summary:
      "R35 coil conversions are the common OEM-style high-output ignition upgrade for built JZ and RB engines.",
    metaTitle: "R35 Coil Conversion Kits for Toyota JZ and Nissan RB | TurboGixxer",
    metaDescription:
      "Haltech R35 coil conversion guidance for Toyota JZ and Nissan RB builds, including bracket kits, full harness kits, and IGN-1A alternatives.",
    image: "/images/shop/Haltech Product Images for Webstore/Outputs and Ignition Systems/Ignition Coils and Brackets/HT-120201_00.JPG",
    price: "$880-$1,125",
    sections: [
      {
        title: "Who it is for",
        body: "JZ or RB builds making enough cylinder pressure that the factory coils are no longer trustworthy.",
      },
      {
        title: "Alternative",
        body: "IGN-1A coils with the appropriate harness deliver similar capability and are common in race-oriented builds. R35 conversions package cleanly and look closer to an OEM solution.",
      },
    ],
    bullets: [
      {
        title: "Available kits",
        items: [
          "HT-120200 - JZ bracket, coils, and connectors",
          "HT-120201 - JZ full conversion with harness",
          "HT-120202 - RB bracket, coils, and connectors",
          "HT-120203 - RB full conversion with harness",
        ],
      },
    ],
    related: [],
  },
  {
    slug: "high-output-inductive-coil",
    title: "High Output Inductive Coil",
    eyebrow: "HT-020112",
    summary:
      "Smaller high-output inductive coil for builds that need better-than-factory ignition without the full IGN-1A smart-coil package.",
    metaTitle: "High Output Inductive Coil Guidance | TurboGixxer",
    metaDescription:
      "When to use a standard high-output inductive coil instead of IGN-1A on Haltech standalone ECU builds.",
    image: "/images/shop/Haltech Product Images for Webstore/Outputs and Ignition Systems/Ignition Coils and Brackets/HT-020112_00.JPG",
    price: "$72",
    sku: "HT-020112",
    sections: [
      {
        title: "Who it is for",
        body: "Mid-range performance builds, wasted-spark conversions, and engines where a stock ignition upgrade is needed but the IGN-1A is more than the build requires.",
      },
    ],
    related: [],
  },
  {
    slug: "ls1-coil-with-built-in-ignitor",
    title: "LS1 Coil With Built-In Ignitor",
    eyebrow: "HT-020102",
    summary:
      "Factory-pattern LS coil for LS1/LS2/LS6-style builds keeping the stock ignition layout.",
    metaTitle: "LS1 Coil With Built-In Ignitor | TurboGixxer",
    metaDescription:
      "Haltech LS1 coil guidance for LS swaps and stock-style LS ignition replacement on standalone ECU builds.",
    image: "/images/shop/Haltech Product Images for Webstore/Outputs and Ignition Systems/Ignition Coils and Brackets/HT-020102_00.JPG",
    price: "$88",
    sku: "HT-020102",
    sections: [
      {
        title: "Who it is for",
        body: "LS swaps keeping the stock coil arrangement, stock-replacement LS-powered street cars, or builds where factory-style coil packaging matters.",
      },
      {
        title: "Pair with",
        body: "Use the correct plugs and pins if the harness needs to be built or repaired.",
      },
    ],
    related: [],
  },
  {
    slug: "power-select-cdi",
    title: "Power Select CDI Ignition Systems",
    eyebrow: "CDI",
    summary:
      "Capacitor discharge ignition for rotary, very high-RPM, and specific race applications where inductive coils are no longer the right answer.",
    metaTitle: "Haltech Power Select CDI Guidance | TurboGixxer",
    metaDescription:
      "When a Haltech Power Select CDI ignition system makes sense, and when modern inductive coils are the better choice.",
    image: "/images/shop/Haltech Product Images for Webstore/Outputs and Ignition Systems/Haltech Power Select CDI Ignition Systems/HT-020132_00.JPG",
    price: "Call for price",
    sections: [
      {
        title: "Who it is for",
        body: "Rotary builds making serious power, drag racing applications running very high RPM, and some distributor-based race engines moving away from old ignition hardware.",
      },
      {
        title: "Who it is not for",
        body: "Most modified street and track cars. Do not buy CDI because it sounds high-tech. Buy it because the specific build needs it.",
      },
    ],
    related: [],
  },
  {
    slug: "injector-dynamics",
    title: "Injector Dynamics Fuel Injectors",
    eyebrow: "Fuel System",
    summary:
      "High-quality injectors with trustworthy characterization data are what let a tuner make idle, transient, and full-load fueling behave.",
    metaTitle: "Injector Dynamics Injector Sizing Guide | TurboGixxer",
    metaDescription:
      "Injector sizing guidance for Haltech ECU builds, including NA, turbo, E85, and high-power Injector Dynamics recommendations.",
    image: "/images/shop/Haltech Product Images for Webstore/Outputs and Ignition Systems/Injectors and Adapters/HT-080106_01.JPG",
    price: "By fitment",
    sections: [
      {
        title: "Why injector data matters",
        body: "A high-flow injector is only useful if its flow rate and dead-time data are consistent. Injector Dynamics parts are popular because tuners can trust the data.",
      },
      {
        title: "Sizing rule",
        body: "Pick the smallest injector that supplies the target power with real headroom for fuel type and pressure. Oversized injectors make idle and low-pulse-width control harder.",
      },
    ],
    bullets: [
      {
        title: "Rough sizing",
        items: [
          "200-400 whp naturally aspirated: ID725 or ID850",
          "400-700 whp turbo pump gas: ID1050X or ID1300X",
          "High-power E85: ID1700X or ID2000",
          "Serious E85 or methanol builds: ID2600 or ID2600-XDS",
        ],
      },
      {
        title: "Also check",
        items: ["Fuel pump and regulator", "Return-style versus returnless system", "Flex fuel sensor", "Fuel pressure logging"],
      },
    ],
    related: [],
  },
];

export const sensorsHero: RouteHero = {
  eyebrow: "Sensors",
  title: "A standalone ECU is only as useful as the data feeding it.",
  summary:
    "Fuel pressure, oil pressure, MAP, temperature, knock, and ethanol content are not extras on serious builds. They are how the ECU protects the engine.",
  primaryCta: { href: "/contact?topic=sensors", label: "Ask About Sensors" },
  secondaryCta: { href: shopHaltech, label: "Back To Haltech" },
};

export const sensorPages: GuidePage[] = [
  {
    slug: "pressure-sensors",
    title: "Pressure Sensors",
    eyebrow: "Fuel / Oil / Dome",
    summary:
      "Three-wire pressure sensors for fuel pressure, oil pressure, and wastegate dome pressure logging and protection.",
    metaTitle: "Haltech Pressure Sensor Guidance | TurboGixxer",
    metaDescription:
      "How to use Haltech pressure sensors for fuel pressure, oil pressure, and wastegate dome pressure monitoring on standalone ECU builds.",
    image: "/images/shop/Haltech Product Images for Webstore/Inputs and CAN Expansion Products/Pressure Sensors/HT-010904_00.JPG",
    price: "Call for price",
    sku: "HT-010904",
    sections: [
      {
        title: "Common uses",
        body: "Fuel pressure, oil pressure, and wastegate dome pressure are the three common uses. The point is not a prettier gauge; it is ECU-side logging and engine protection.",
      },
      {
        title: "Who it is for",
        body: "Any standalone ECU build that wants real fuel and oil pressure data instead of guessing when something goes wrong.",
      },
    ],
    bullets: [
      {
        title: "Pair with",
        items: ["Correct NPT adapters", "Engine protection limits in NSP", "Dash warning strategy"],
      },
    ],
    related: [],
  },
  {
    slug: "temperature-sensors",
    title: "Temperature Sensors",
    eyebrow: "Coolant + Air",
    summary:
      "Coolant and intake air temperature sensors that give the ECU stable, known calibration data.",
    metaTitle: "Haltech Temperature Sensor Guidance | TurboGixxer",
    metaDescription:
      "Coolant and intake air temperature sensor guidance for Haltech ECU installs, including NPT adapters and NSP calibration notes.",
    image: "/images/shop/Haltech Product Images for Webstore/Inputs and CAN Expansion Products/Fluid Temp Sensors/HT-010304_00.JPG",
    price: "Call for price",
    sections: [
      {
        title: "Coolant temperature",
        body: "The common 1/8 NPT coolant temp sensor is pre-characterized in NSP. Choose the Haltech calibration and avoid hand-entered sensor tables unless the build requires it.",
      },
      {
        title: "Air temperature",
        body: "Intake air temperature should be measured where it reflects the actual air entering the engine, not where heat soak gives the ECU useless data.",
      },
    ],
    bullets: [
      {
        title: "Common parts",
        items: ["HT-010304 coolant temp sensor", "M14 x 1.5 air temp sensor", "HT-120000 brass adapter when needed"],
      },
    ],
    related: [],
  },
  {
    slug: "map-sensors",
    title: "MAP Sensors",
    eyebrow: "Boost Measurement",
    summary:
      "MAP sensors measure manifold pressure. Choose the range based on the maximum boost the engine will actually see.",
    metaTitle: "Haltech MAP Sensor Sizing Guide | TurboGixxer",
    metaDescription:
      "MAP sensor sizing guidance for Haltech turbo builds, including 3 BAR, 4 BAR, 5 BAR, 7 BAR, and internal ECU MAP limits.",
    image: "/images/shop/Haltech Product Images for Webstore/Inputs and CAN Expansion Products/Map Sensors/HT-010130_00.JPG",
    price: "Call for price",
    sections: [
      {
        title: "Sizing",
        body: "3 BAR covers many mid-power turbo builds, 4 BAR covers high-boost street and race builds, and 5/7 BAR sensors are for serious drag or time-attack boost levels.",
      },
      {
        title: "Internal ECU MAP",
        body: "Elite 750/1500/2500 include an internal 4 BAR MAP sensor. If the build runs beyond that range, wire an external MAP to an analog voltage input.",
      },
    ],
    related: [],
  },
  {
    slug: "knock-sensors",
    title: "Knock Sensors",
    eyebrow: "Engine Protection",
    summary:
      "Knock sensors let a Haltech ECU listen for detonation and react before engine damage becomes expensive.",
    metaTitle: "Haltech Knock Sensor Guidance | TurboGixxer",
    metaDescription:
      "Knock sensor guidance for Haltech Elite, Nexus, and race builds, including single vs dual knock and shielded wiring notes.",
    image: "/images/shop/Haltech Product Images for Webstore/Inputs and CAN Expansion Products/Knock Sensors/HT-011100_00.JPG",
    price: "Call for price",
    sections: [
      {
        title: "Who it is for",
        body: "Any boosted build with a Haltech ECU that supports knock control. The ECU cannot protect the engine from knock it cannot hear.",
      },
      {
        title: "Wiring note",
        body: "Knock sensors need shielded cable, correct grounding, and proper mounting torque. Bad wiring is a common reason knock control gets blamed for not working.",
      },
    ],
    related: [],
  },
  {
    slug: "flex-fuel-sensors",
    title: "Flex Fuel Sensors",
    eyebrow: "Ethanol Content",
    summary:
      "A GM-style flex fuel sensor lets the ECU blend fuel and ignition strategy between gasoline and E85 automatically.",
    metaTitle: "Flex Fuel Sensor Guidance for Haltech Builds | TurboGixxer",
    metaDescription:
      "Flex fuel sensor guidance for E85 Haltech builds, including sensor placement, required fuel system support, and tune requirements.",
    image: "/images/shop/Haltech Product Images for Webstore/Inputs and CAN Expansion Products/Flex Fuel Sensors/HT-011000_00.JPG",
    price: "Call for price",
    sections: [
      {
        title: "What it does",
        body: "The sensor measures ethanol content and sends the ECU a signal it can use to interpolate fuel, ignition, boost, and protection strategies.",
      },
      {
        title: "What else you need",
        body: "E85-compatible lines, pump, regulator, injectors, and a real flex tune. The sensor alone does not make the fuel system E85-ready.",
      },
    ],
    related: [],
  },
];

export const serviceLandingHero: RouteHero = {
  eyebrow: "Services",
  title: "The box matters. The install and tune matter more.",
  summary:
    "Haltech installation, dyno tuning, remote tuning, and build-support copy for customers who want the work handled by the same shop that calibrates the car.",
  primaryCta: { href: "/contact?topic=services", label: "Start A Build Consult" },
  secondaryCta: { href: "/pricing", label: "View Pricing" },
};

export const serviceGuidePages: GuidePage[] = [
  {
    slug: "ecu-installation",
    title: "ECU Installation Service",
    eyebrow: "Install",
    summary:
      "Installing a Haltech correctly means mounting, grounds, shielded wiring, CAN setup, base-map loading, and verification before the first real tuning pull.",
    metaTitle: "Haltech ECU Installation Service | TurboGixxer",
    metaDescription:
      "Haltech ECU installation service copy covering plug-and-play installs, terminated harnesses, universal wire-ins, grounding, CAN, and base-map setup.",
    sections: [
      {
        title: "What we handle",
        body: "ECU mounting, harness routing, grounds, shielded trigger and knock wiring, CAN devices, wideband modules, dash communication, and base-map setup before startup.",
      },
      {
        title: "Why us, not your buddy",
        body: "Bad Haltech wiring does not always kill an engine, but it wastes time. We have seen enough mystery-ground and shielded-cable problems to know that clean install work is cheaper than fixing a guess.",
      },
    ],
    bullets: [
      {
        title: "Pricing placeholders",
        items: [
          "Plug-and-play install: from [$X]",
          "Terminated harness install: from [$X]",
          "Full universal wire-in: from [$X], quoted per project",
        ],
      },
    ],
    related: [],
  },
  {
    slug: "dyno-tuning",
    title: "Dyno Tuning Service",
    eyebrow: "Dyno",
    summary:
      "A Haltech without a tune is just an expensive way to make stock power. Dyno tuning is where the build becomes the build.",
    metaTitle: "Haltech Dyno Tuning Service | TurboGixxer",
    metaDescription:
      "Dyno tuning service copy for Haltech builds, including fuel, ignition, boost, idle, transient, race functions, health checks, and tune-file delivery.",
    sections: [
      {
        title: "What a standard tune covers",
        body: "Fuel, ignition, boost, idle, transient enrichment, warm-up, closed-loop O2, and race functions such as anti-lag, launch, traction control, flat shift, or trans brake when the build needs them.",
      },
      {
        title: "What you leave with",
        body: "A tune file you keep, datalogs we keep, and dyno results tied to the actual work the car needed.",
      },
    ],
    bullets: [
      {
        title: "Pricing placeholders",
        items: [
          "Naturally aspirated tune: from [$X]",
          "Turbo / supercharged tune: from [$X]",
          "Flex fuel tune: from [$X]",
          "Race tune: from [$X]",
        ],
      },
    ],
    related: [],
  },
  {
    slug: "remote-tuning",
    title: "Remote Tuning Service",
    eyebrow: "Remote",
    summary:
      "Remote tuning is for customers who can send useful datalogs, load revisions, and communicate clearly through the process.",
    metaTitle: "Haltech Remote Tuning Service | TurboGixxer",
    metaDescription:
      "Remote tuning service copy for Haltech builds, including NSP tune-file revisions, datalog requirements, Wi-Fi Nexus support, and project scope.",
    sections: [
      {
        title: "Who it is for",
        body: "Out-of-area customers, PNW customers who cannot easily get to Auburn, race teams between events, and cars with a base tune that needs refinement.",
      },
      {
        title: "What we need",
        body: "Engine spec, supporting mods, current NSP file, datalogs covering idle/cruise/transient/full-load operation, and photos or video of any repeatable issue.",
      },
    ],
    bullets: [
      {
        title: "Pricing placeholders",
        items: ["Single revision: [$X]", "Multi-pass tuning package: [$X]", "Race-season retainer: [$X/month]"],
      },
    ],
    related: [],
  },
  {
    slug: "why-buy-from-us",
    title: "Why Buy From A Tuning Shop",
    eyebrow: "Support",
    summary:
      "You can buy a Haltech from a dozen websites. The difference is what happens after the box opens.",
    metaTitle: "Why Buy Haltech From TurboGixxer | Fitment, Install, Tune Support",
    metaDescription:
      "Why buying Haltech from a tuning shop matters: fitment confirmation, base maps, install support, warranty handling, and future tune-file support.",
    sections: [
      {
        title: "Fitment before ordering",
        body: "Plug-and-play kits are platform-specific in ways generic catalog pages often gloss over. Subaru region restrictions, K-series multiplex limitations, and JZ ETCS-i limits are real.",
      },
      {
        title: "Install and tune in one place",
        body: "Installation problems show up on the dyno. Tuning problems often turn out to be installation problems. When the same shop handles both, the loop is short.",
      },
      {
        title: "Your file stays supported",
        body: "Every tune becomes part of our reference library, so future fuel changes, hardware changes, and revisions are easier to handle.",
      },
    ],
    bullets: [
      {
        title: "Why it matters",
        items: [
          "We confirm fitment before you order.",
          "We usually have a known-good starting point for common combos.",
          "We handle warranty support for hardware we sold and installed.",
        ],
      },
    ],
    related: [],
  },
];

export const outputIgnitionCards: GuideCardItem[] = outputIgnitionPages.map((page) => ({
  title: page.title,
  body: page.summary,
  href: `/shop/haltech/outputs-ignition/${page.slug}`,
  eyebrow: page.eyebrow,
  image: page.image,
  meta: page.price,
}));

export const sensorCards: GuideCardItem[] = sensorPages.map((page) => ({
  title: page.title,
  body: page.summary,
  href: `/shop/haltech/sensors/${page.slug}`,
  eyebrow: page.eyebrow,
  image: page.image,
  meta: page.price,
}));

export const serviceGuideCards: GuideCardItem[] = serviceGuidePages.map((page) => ({
  title: page.title,
  body: page.summary,
  href: `/services/${page.slug}`,
  eyebrow: page.eyebrow,
  meta: page.bullets?.[0]?.items[0],
}));

const outputIndex = new Map(outputIgnitionPages.map((page) => [page.slug, page]));
const sensorIndex = new Map(sensorPages.map((page) => [page.slug, page]));
const serviceIndex = new Map(serviceGuidePages.map((page) => [page.slug, page]));

export function getOutputIgnitionPage(slug: string) {
  return outputIndex.get(slug);
}

export function getSensorPage(slug: string) {
  return sensorIndex.get(slug);
}

export function getServiceGuidePage(slug: string) {
  return serviceIndex.get(slug);
}

export function guideProductSchema(page: GuidePage, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: page.title,
    sku: page.sku,
    image: page.image,
    description: page.summary,
    url,
    brand: {
      "@type": "Brand",
      name: page.title.includes("Injector Dynamics") ? "Injector Dynamics" : "Haltech",
    },
    offers: page.price && page.price.startsWith("$")
      ? {
          "@type": "Offer",
          priceCurrency: "USD",
          price: page.price.replace(/[$,]/g, ""),
          availability: "https://schema.org/InStock",
        }
      : undefined,
  };
}

