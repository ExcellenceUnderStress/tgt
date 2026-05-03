import type { NavItem, RouteHero, ServiceDetailSection, ServiceDetailStat } from "./site-content";

export type PlatformRecommendation = {
  title: string;
  body: string;
  href: string;
};

export type PlatformIndexCard = {
  title: string;
  body: string;
  href: string;
  eyebrow: string;
  meta?: string;
};

export type PlatformFamilyGroup = {
  id: string;
  title: string;
  summary: string;
  platforms: PlatformIndexCard[];
};

export type PlatformPage = {
  slug: string;
  title: string;
  engineName: string;
  metaTitle: string;
  metaDescription: string;
  hero: RouteHero;
  overview: string[];
  interestingTitle: string;
  interesting: string[];
  tuningPath: ServiceDetailSection[];
  recommendations: PlatformRecommendation[];
  notFor: string[];
  whyUs: string;
  stats: ServiceDetailStat[];
  crossLinks: NavItem[];
  productLinks: NavItem[];
};

const shopHaltech = "/shop/haltech";
const ecuGuide = "/shop/haltech/ecus";
const services = "/services";
const contact = "/contact";

export const platformPages: PlatformPage[] = [
  {
    slug: "toyota-2jz",
    title: "Toyota 2JZ and 1JZ Haltech Tuning",
    engineName: "Toyota JZ inline-six",
    metaTitle: "Best Haltech ECU for Toyota 2JZ and 1JZ Builds | TurboGixxer",
    metaDescription:
      "Realistic Haltech ECU paths for Toyota 2JZ and 1JZ builds, including Supra PnP, Rebel JZ, terminated harnesses, and ETCS-i limitations.",
    hero: {
      eyebrow: "Toyota 2JZ / 1JZ",
      title: "The JZ path is simple when the wiring and throttle choices are honest.",
      summary:
        "Supra plug-and-play, Rebel JZ swaps, terminated harnesses, and the ETCS-i limitation that matters before you buy.",
      primaryCta: { href: "/contact?platform=toyota-2jz", label: "Ask About A JZ" },
      secondaryCta: { href: `${shopHaltech}#ecu-vcu`, label: "View Rebel JZ" },
    },
    overview: [
      "The 2JZ is Toyota's gift to anyone who likes boost. Cast-iron block, closed-deck design, sequential twin turbos from the factory on the GTE, and a stock-bottom-end power reputation that is earned when the supporting work is right.",
      "The 1JZ is the 2.5L high-revving sibling. Same family, same basic tuning logic, and increasingly common in Soarers, Chasers, and imported swap projects.",
      "For tuning, the JZ is one of the easier platforms to get right. Sensor fitments are understood, ignition upgrades are straightforward, and the aftermarket is mature enough that your build does not have to invent its own answer.",
    ],
    interestingTitle: "What Makes The JZ Interesting",
    interesting: [
      "The block is genuinely overbuilt, but big numbers still need head gasket, head bolt, fuel, and timing belt attention.",
      "The factory sequential twin turbo system is complicated. Most serious builds simplify the ECU work by moving to a single turbo.",
      "The packaging works in a Supra, an S-chassis, a Hilux, and plenty of stranger swaps.",
    ],
    tuningPath: [
      {
        title: "Plug-and-play Supra",
        body: "For an MKIV Supra keeping the factory harness, the Elite 2500 plug-and-play style path drops into the OEM ECU location. It is the fastest install when the car is still a Supra and the harness is worth keeping.",
      },
      {
        title: "Terminated harness swap",
        body: "For a JZ in another chassis, an Elite 2500 with a 2JZ terminated harness and pre-wired ignition support gives the build a clean foundation without leaning on an old factory loom.",
      },
      {
        title: "Rebel JZ",
        body: "The Rebel JZ is the fastest path from engine-in-bay to first start on a swap. It combines the ECU, terminated harness, and Setup Wizard flow for the six common 1JZ and 2JZ variants. Manual transmissions only.",
      },
    ],
    recommendations: [
      {
        title: "MKIV Supra, factory harness",
        body: "Elite 2500 plug-and-play. Keep the install clean and spend the time on calibration.",
        href: `${shopHaltech}#ecu-plugnplay-kits`,
      },
      {
        title: "JZ swap",
        body: "Rebel JZ. Done. It is the cleanest current answer for most non-Supra swaps.",
        href: `${shopHaltech}#ecu-vcu`,
      },
      {
        title: "Serious built motor",
        body: "Elite 2500 plus 2JZ terminated harness with IGN-1A ignition pre-wired, or Nexus R5 if logging and power distribution matter.",
        href: `${ecuGuide}#nexus-r5`,
      },
    ],
    notFor: [
      "Factory ETCS-i electronic throttle on automatic VVT-i Supras. Convert to cable throttle or plan a different strategy.",
      "Anyone trying to keep the factory sequential turbo control exactly as Toyota delivered it on a high-power standalone build.",
      "A cheap shortcut around fuel system, ignition, or mechanical prep.",
    ],
    whyUs:
      "Kenny has tuned JZs since the Speed Factory Racing days, including MKIV Supras, S-chassis swaps, and big-power oddball combinations. We can tune the car on the dyno or work remotely when the hardware and datalog path are right.",
    stats: [
      { label: "Common path", value: "Rebel JZ or Elite 2500" },
      { label: "Best fit", value: "Single-turbo swaps and Supra PnP builds" },
      { label: "Watch item", value: "ETCS-i and old harness condition" },
    ],
    crossLinks: [
      { href: "/shop/platforms/nissan-rb", label: "Compare Nissan RB" },
      { href: "/shop/platforms/gm-ls-v8", label: "Compare LS swaps" },
      { href: "/shop/platforms/mazda-13b", label: "Compare 13B" },
    ],
    productLinks: [
      { href: `${shopHaltech}#ecu-vcu`, label: "Rebel JZ products" },
      { href: `${shopHaltech}#wiring-harnesses`, label: "JZ harnesses" },
      { href: "/shop/haltech/outputs-ignition/r35-gtr-coil-conversion-kits", label: "R35 coil conversion" },
    ],
  },
  {
    slug: "nissan-rb",
    title: "Nissan RB Haltech Tuning",
    engineName: "Nissan RB inline-six",
    metaTitle: "Best Haltech ECU for Nissan RB20, RB25, and RB26 | TurboGixxer",
    metaDescription:
      "RB20DET, RB25DET, and RB26DETT Haltech ECU paths, including GT-R PnP kits, RB swap harnesses, R35 coil conversion, and Nexus R5 recommendations.",
    hero: {
      eyebrow: "Nissan RB",
      title: "The RB wants clean ignition, good data, and enough ECU channel count.",
      summary:
        "GT-R plug-and-play, RB-swapped chassis, RB25 Neo VVT, RB26 ITBs, and the coil upgrade most builds eventually need.",
      primaryCta: { href: "/contact?platform=nissan-rb", label: "Ask About An RB" },
      secondaryCta: { href: "/shop/haltech/outputs-ignition/r35-gtr-coil-conversion-kits", label: "R35 Coil Kits" },
    },
    overview: [
      "The RB platform is the Skyline engine that defined a generation: RB20DET, RB25DET, and RB26DETT across R32, R33, R34, Stagea, and plenty of swaps.",
      "The RB26 in particular made 1000+ horsepower goals feel normal. The RB25 is not far behind, and the RB20 still has a loyal following because it feels sharp and balanced.",
    ],
    interestingTitle: "What Makes The RB Interesting",
    interesting: [
      "The RB26 was effectively a homologation engine and responds hard to forced induction.",
      "The platform stays interesting at every level, from a clean RB20 street car to a built RB26 GT-R.",
      "Factory coils are a known bottleneck. Spark blowout is common as boost and cylinder pressure climb.",
    ],
    tuningPath: [
      {
        title: "GT-R plug-and-play",
        body: "For BNR32, BCNR33, and BNR34 GT-Rs with usable factory wiring, an Elite 2500 plug-and-play route keeps the install in the OEM ECU location and retains the basic factory wiring layout.",
      },
      {
        title: "RB swap harness",
        body: "For RB swaps into S-chassis, trucks, or anything else, the Elite 2500 plus RB terminated harness is the known-good path. Nexus S3 is the modern alternative if the build is starting fresh.",
      },
      {
        title: "R35 coil conversion",
        body: "Past mid-range power, factory RB coils stop being the answer. R35 coil conversion or IGN-1A ignition is the standard way to keep spark from becoming the limit.",
      },
    ],
    recommendations: [
      {
        title: "BNR32, BCNR33, BNR34 GT-R",
        body: "Elite 2500 plug-and-play when the factory harness is staying in the car.",
        href: `${shopHaltech}#ecu-plugnplay-kits`,
      },
      {
        title: "RB-swapped chassis",
        body: "Elite 2500 plus RB terminated harness, or Nexus S3 for a modern starting point.",
        href: `${shopHaltech}#wiring-harnesses`,
      },
      {
        title: "1000+ hp race build",
        body: "Nexus R5. The integrated power distribution and 512 MB logging start earning their cost here.",
        href: `${ecuGuide}#nexus-r5`,
      },
    ],
    notFor: [
      "Keeping weak factory coils on a high-boost build and expecting the tune to fix spark blowout.",
      "Buying a Skyline PnP kit for a swap with unknown or hacked-up chassis wiring.",
      "Trying to solve oiling, crankcase pressure, or fuel delivery problems in software.",
    ],
    whyUs:
      "RBs come through the shop regularly. Kenny understands how the platform behaves under boost, how to handle RB26 ITBs, and when a coil or wiring upgrade needs to happen before dyno time.",
    stats: [
      { label: "Common path", value: "Elite 2500 PnP or terminated harness" },
      { label: "Ignition", value: "R35 coils or IGN-1A" },
      { label: "Race tier", value: "Nexus R5 for serious data and power control" },
    ],
    crossLinks: [
      { href: "/shop/platforms/toyota-2jz", label: "Compare Toyota JZ" },
      { href: "/shop/platforms/subaru-ej", label: "Compare Subaru EJ" },
      { href: "/shop/platforms/mitsubishi-4g63", label: "Compare 4G63" },
    ],
    productLinks: [
      { href: `${shopHaltech}#ecu-plugnplay-kits`, label: "RB ECU kits" },
      { href: `${shopHaltech}#wiring-harnesses`, label: "RB harnesses" },
      { href: "/shop/haltech/outputs-ignition/r35-gtr-coil-conversion-kits", label: "RB R35 coil conversion" },
    ],
  },
  {
    slug: "honda-k-series",
    title: "Honda K-Series Haltech Tuning",
    engineName: "Honda K20 and K24",
    metaTitle: "Best Haltech ECU for Honda K20 and K24 K-Series | TurboGixxer",
    metaDescription:
      "Haltech ECU recommendations for Honda K20 and K24 builds, including EP3, DC5/RSX, K-swaps, i-VTEC tuning, and RWD swap wiring paths.",
    hero: {
      eyebrow: "Honda K-Series",
      title: "A good K tune lives in the i-VTEC transition.",
      summary:
        "K20, K24, EP3, DC5/RSX, RWD K-swaps, and the ECU choices that make cam control and lift control feel right.",
      primaryCta: { href: "/contact?platform=honda-k-series", label: "Ask About A K-Series" },
      secondaryCta: { href: `${shopHaltech}#ecu-plugnplay-kits`, label: "Honda PnP Kits" },
    },
    overview: [
      "The K-series is Honda's modern four-cylinder and the current king of swaps. K20 and K24 engines show up in Civics, RSXs, S2000s, Miatas, RX-7s, and rear-drive projects that Honda never planned.",
      "Stock-block K20s can hold real power, built K-series engines can run far beyond that, and the platform still pulls hard naturally aspirated when the combination is right.",
    ],
    interestingTitle: "What Makes The K-Series Interesting",
    interesting: [
      "i-VTEC combines electronic lift control with variable cam timing. The engagement point and cam angle work are what separate a clean K tune from an average one.",
      "Donor engines and swap parts are everywhere, which makes the platform practical instead of only impressive.",
      "RWD K-swaps add wiring and accessory complexity that needs to be planned before the ECU is chosen.",
    ],
    tuningPath: [
      {
        title: "EP3 and DC5/RSX plug-and-play",
        body: "Elite 1500 plug-and-play fits common EP3 Civic and DC5/RSX paths when the donor harness and manual-trans setup match the kit requirements.",
      },
      {
        title: "RWD K-swap",
        body: "Elite 1500 with universal wiring, or Nexus S2 for the modern platform, is the normal answer when the car is a Miata, S-chassis, RX-7, or other custom chassis.",
      },
      {
        title: "Staged injection",
        body: "Elite 1500 covers most turbo K builds. Step to Elite 2500 or Nexus S3 when staged injection, extra sensors, or channel count becomes the actual constraint.",
      },
    ],
    recommendations: [
      {
        title: "EP3 or DC5/RSX",
        body: "Elite 1500 plug-and-play when the harness, year, and manual-trans fitment line up.",
        href: `${shopHaltech}#ecu-plugnplay-kits`,
      },
      {
        title: "RWD K-swap",
        body: "Elite 1500 universal wiring or Nexus S2. Keep the chassis wiring plan honest.",
        href: `${ecuGuide}#nexus-s-series`,
      },
      {
        title: "Turbo K with extra injectors",
        body: "Elite 2500 or Nexus S3 only when the extra channels are needed.",
        href: `${ecuGuide}#elite-2500`,
      },
    ],
    notFor: [
      "Owners expecting every factory multiplexed cluster, AC, battery light, and warning signal to work with no extra wiring.",
      "RWD swaps where the chassis wiring plan is still undefined.",
      "Oversized injectors chosen because bigger sounded safer.",
    ],
    whyUs:
      "K-series work is regular shop work here, from mild naturally aspirated setups to boosted-and-built cars. The goal is not just peak power; it is a clean VTEC transition and a car that drives correctly.",
    stats: [
      { label: "Common path", value: "Elite 1500 or Nexus S2" },
      { label: "Key feature", value: "i-VTEC cam and lift control" },
      { label: "Swap watch", value: "Cluster and chassis integration" },
    ],
    crossLinks: [
      { href: "/shop/platforms/honda-b-series", label: "Compare Honda B-Series" },
      { href: "/shop/platforms/honda-f-series", label: "Compare S2000 F-Series" },
      { href: "/shop/platforms/gm-ls-v8", label: "Compare LS swaps" },
    ],
    productLinks: [
      { href: `${shopHaltech}#ecu-plugnplay-kits`, label: "Honda PnP kits" },
      { href: `${ecuGuide}#nexus-s-series`, label: "Nexus S-Series guide" },
      { href: "/shop/haltech/outputs-ignition/injector-dynamics", label: "Injector sizing" },
    ],
  },
  {
    slug: "honda-b-series",
    title: "Honda B-Series Haltech Tuning",
    engineName: "Honda B16 and B18",
    metaTitle: "Best Haltech ECU for Honda B16 and B18 B-Series | TurboGixxer",
    metaDescription:
      "Honda B-series Haltech ECU guidance for B16 and B18 builds, including OBD-I PnP, Elite 750 vs Elite 1500, VTEC tuning, and turbo recommendations.",
    hero: {
      eyebrow: "Honda B-Series",
      title: "The B-series is simple, sharp, and still worth tuning properly.",
      summary:
        "B16, B18, OBD-I plug-and-play, VTEC transition work, and when an Elite 750 is enough versus when you need the 1500.",
      primaryCta: { href: "/contact?platform=honda-b-series", label: "Ask About A B-Series" },
      secondaryCta: { href: `${ecuGuide}#elite-750`, label: "Elite 750 Guide" },
    },
    overview: [
      "The B-series built Honda's modified-car reputation in the West. B16 and B18 engines live in Civics, Integras, and decades of swap projects.",
      "It does not make K-series torque. That is not the point. It makes response, induction noise, and a kind of high-RPM feel that still matters.",
    ],
    interestingTitle: "What Makes The B-Series Interesting",
    interesting: [
      "Original-flavor VTEC is the whole character of the engine. The tune has to make the low-cam and high-cam transition clean.",
      "The platform is documented well enough that it is one of the least mysterious standalone ECU installs.",
      "It rewards correct injector sizing and clean ignition more than over-buying ECU features.",
    ],
    tuningPath: [
      {
        title: "OBD-I plug-and-play",
        body: "Elite 1500 plug-and-play is the standard upgrade for common manual OBD-I B-series cars when the owner wants modern standalone control.",
      },
      {
        title: "Basic naturally aspirated build",
        body: "Elite 750 is enough for many naturally aspirated B-series builds that do not need DBW, knock control, or complex race functions.",
      },
      {
        title: "Turbo or built motor",
        body: "Elite 1500 is the better answer for knock detection, anti-lag, launch, and the broader race feature set.",
      },
    ],
    recommendations: [
      {
        title: "Daily with bolt-ons",
        body: "Elite 750 if the setup is naturally aspirated and you do not need the 1500 feature set.",
        href: `${ecuGuide}#elite-750`,
      },
      {
        title: "Turbo B-series",
        body: "Elite 1500. The extra protection and race functions are worth it.",
        href: `${ecuGuide}#elite-1500`,
      },
      {
        title: "OBD-I manual car",
        body: "Elite 1500 plug-and-play if the fitment matches.",
        href: `${shopHaltech}#ecu-plugnplay-kits`,
      },
    ],
    notFor: [
      "Drive-by-wire conversions or complex traction strategies on the Elite 750.",
      "Owners trying to keep every OEM-era convenience feature without checking the adapter limitations.",
      "Turbo builds with weak fuel or ignition systems.",
    ],
    whyUs:
      "If you are putting a Haltech on a B-series, we can sort it on the dyno and send you home with a car that transitions into VTEC cleanly instead of feeling like two different engines.",
    stats: [
      { label: "Common path", value: "Elite 750 or Elite 1500" },
      { label: "Key feature", value: "VTEC fuel and ignition transition" },
      { label: "Upgrade trigger", value: "Boost, knock, or race functions" },
    ],
    crossLinks: [
      { href: "/shop/platforms/honda-k-series", label: "Compare Honda K-Series" },
      { href: "/shop/platforms/honda-f-series", label: "Compare Honda F-Series" },
      { href: "/shop/platforms/mitsubishi-4g63", label: "Compare 4G63" },
    ],
    productLinks: [
      { href: `${ecuGuide}#elite-750`, label: "Elite 750 guide" },
      { href: `${ecuGuide}#elite-1500`, label: "Elite 1500 guide" },
      { href: `${shopHaltech}#ecu-plugnplay-kits`, label: "Honda PnP kits" },
    ],
  },
  {
    slug: "honda-f-series",
    title: "Honda F-Series S2000 Haltech Tuning",
    engineName: "Honda F20C and F22C",
    metaTitle: "Best Haltech ECU for Honda S2000 F20C and F22C | TurboGixxer",
    metaDescription:
      "Haltech guidance for AP1 and early AP2 S2000 F20C/F22C builds, including Elite 1500 PnP, VTEC, boost, and factory feature limitations.",
    hero: {
      eyebrow: "Honda F-Series / S2000",
      title: "The S2000 responds to standalone control before it ever sees boost.",
      summary:
        "F20C, F22C, AP1, early AP2, VTEC crossover, high-RPM knock control, and the factory features the PnP kit does not keep.",
      primaryCta: { href: "/contact?platform=honda-f-series", label: "Ask About An S2000" },
      secondaryCta: { href: `${shopHaltech}#ecu-plugnplay-kits`, label: "S2000 PnP Kits" },
    },
    overview: [
      "The F20C and F22C made the S2000 famous: high compression, 9000 RPM AP1 redline, and a powerband that expects you to keep the car on cam.",
      "It is one of the few production naturally aspirated engines that can benefit from standalone ECU control even before forced induction.",
    ],
    interestingTitle: "What Makes The S2000 Interesting",
    interesting: [
      "The factory calibration is conservative in places where careful cam and ignition work can improve the car.",
      "Boosted S2000s live or die on knock control, fuel delivery, and high-RPM safety strategy.",
      "The platform does not need a huge ECU unless the build itself is unusual.",
    ],
    tuningPath: [
      {
        title: "AP1 and early AP2 plug-and-play",
        body: "The Elite 1500 plug-and-play kit is the standard route for AP1 and 2005 AP2 non-DBW manual cars.",
      },
      {
        title: "Factory-feature limitations",
        body: "The kit does not support every factory feature, including immobilizer, air pump, K-Line communication, fuel tank pressure sensor, and some start/current signals.",
      },
      {
        title: "Boosted S2000",
        body: "Elite 1500 still covers the normal boosted S2000 use case with knock control, flex fuel, and race functions.",
      },
    ],
    recommendations: [
      {
        title: "Stage 2 or Stage 3 NA S2000",
        body: "Elite 1500 plug-and-play. You get cam, ignition, flex fuel, and individual cylinder trim.",
        href: `${shopHaltech}#ecu-plugnplay-kits`,
      },
      {
        title: "Turbo or supercharged S2000",
        body: "Same Elite 1500. The race feature set covers the real needs.",
        href: `${ecuGuide}#elite-1500`,
      },
      {
        title: "Unusual built motor",
        body: "Call first. Most S2000s do not outgrow the 1500 unless the build is genuinely odd.",
        href: contact,
      },
    ],
    notFor: [
      "2006+ DBW S2000 owners unless the build has a specific adapter strategy.",
      "Owners who must keep factory immobilizer, air pump, and every OEM signal active.",
      "A car with unresolved high-RPM mechanical or oiling issues.",
    ],
    whyUs:
      "S2000s end up at the shop often enough that we know the high-RPM risk points. The tune has to be careful, especially once boost is involved.",
    stats: [
      { label: "Common path", value: "Elite 1500 PnP" },
      { label: "Key feature", value: "High-RPM knock and cam control" },
      { label: "Watch item", value: "DBW and factory feature retention" },
    ],
    crossLinks: [
      { href: "/shop/platforms/honda-k-series", label: "Compare K swaps" },
      { href: "/shop/platforms/honda-b-series", label: "Compare B-Series" },
      { href: "/shop/platforms/mazda-13b", label: "Compare RX-7" },
    ],
    productLinks: [
      { href: `${shopHaltech}#ecu-plugnplay-kits`, label: "S2000 PnP kits" },
      { href: `${ecuGuide}#elite-1500`, label: "Elite 1500 guide" },
      { href: "/shop/haltech/sensors/knock-sensors", label: "Knock sensor guidance" },
    ],
  },
  {
    slug: "subaru-ej",
    title: "Subaru EJ Haltech Tuning",
    engineName: "Subaru EJ flat-four",
    metaTitle: "Best Haltech ECU for Subaru EJ WRX, STI, and Forester | TurboGixxer",
    metaDescription:
      "Subaru EJ Haltech ECU guidance for WRX, STI, Forester, GDB, Denso ECU fitments, Nexus S3 PnP, and knock-sensitive tuning strategy.",
    hero: {
      eyebrow: "Subaru EJ",
      title: "The EJ rewards conservative boost control and fast knock strategy.",
      summary:
        "WRX, STI, Forester, EJ20, EJ25, region-specific Haltech fitments, and why the setup has to be checked before ordering.",
      primaryCta: { href: "/contact?platform=subaru-ej", label: "Ask About An EJ" },
      secondaryCta: { href: `${shopHaltech}#ecu-plugnplay-kits`, label: "Subaru PnP Kits" },
    },
    overview: [
      "The EJ20, EJ22, and EJ25 are Subaru's turbo flat-fours, found in WRX, STI, Forester, Legacy GT, and plenty of regional variants.",
      "The reputation is complicated for a reason. These engines can be strong, but detonation, ringland damage, oiling issues, and poor prep punish them quickly.",
    ],
    interestingTitle: "What Makes The EJ Interesting",
    interesting: [
      "The boxer layout creates cooling and cylinder-to-cylinder behavior that benefits from per-cylinder fuel trims.",
      "The EJ25 in particular is sensitive to detonation, so knock strategy and conservative timing matter.",
      "Haltech Subaru kits are often region and ECU-variant specific. ADM, JDM, and US-market wiring differences are real.",
    ],
    tuningPath: [
      {
        title: "Early WRX plug-and-play",
        body: "MY97-98 and MY99-00 WRX applications have Elite 1500 plug-and-play options in supported ADM/JDM configurations.",
      },
      {
        title: "GDB WRX/STI",
        body: "MY01-05 GDB WRX and supported STI variants typically use Elite 2500 plug-and-play.",
      },
      {
        title: "Later Denso and Nexus paths",
        body: "MY06+ 2.5L cars need ECU-variant confirmation, and later ADM/JDM platforms may route to Nexus S3 plug-and-play.",
      },
    ],
    recommendations: [
      {
        title: "MY01-05 GDB",
        body: "Elite 2500 plug-and-play when the region and harness match.",
        href: `${shopHaltech}#ecu-plugnplay-kits`,
      },
      {
        title: "MY06+ 2.5L Denso ECU",
        body: "Elite 2500 plug-and-play only after confirming the ECU variant.",
        href: contact,
      },
      {
        title: "Built EJ or US-market mismatch",
        body: "Elite 2500 universal wiring, or Nexus S3 if the project wants the modern platform.",
        href: `${ecuGuide}#nexus-s-series`,
      },
    ],
    notFor: [
      "People looking for a cheap power bump without fuel system and mechanical prep.",
      "Ordering a Subaru PnP kit without confirming region, ECU brand, and year.",
      "Trying to tune around ringland risk, weak fuel delivery, or known oiling issues.",
    ],
    whyUs:
      "Subarus are common here. We know the failure modes, and we would rather draw the conservative line early than sell an ECU to a build that is not mechanically ready.",
    stats: [
      { label: "Common path", value: "Elite 2500 or Nexus S3 PnP" },
      { label: "Key risk", value: "Detonation and ringlands" },
      { label: "Fitment", value: "Region and ECU variant matter" },
    ],
    crossLinks: [
      { href: "/shop/platforms/mitsubishi-4g63", label: "Compare Evo 4G63" },
      { href: "/shop/platforms/nissan-rb", label: "Compare Nissan RB" },
      { href: "/shop/platforms/honda-k-series", label: "Compare K-Series" },
    ],
    productLinks: [
      { href: `${shopHaltech}#ecu-plugnplay-kits`, label: "Subaru PnP kits" },
      { href: "/shop/haltech/sensors/knock-sensors", label: "Knock sensor guidance" },
      { href: "/shop/haltech/sensors/pressure-sensors", label: "Pressure sensors" },
    ],
  },
  {
    slug: "mitsubishi-4g63",
    title: "Mitsubishi 4G63 Haltech Tuning",
    engineName: "Mitsubishi 4G63T",
    metaTitle: "Best Haltech ECU for Mitsubishi 4G63 Evo and DSM | TurboGixxer",
    metaDescription:
      "Haltech ECU guidance for Mitsubishi 4G63 Evo and DSM builds, including Elite 1500 PnP, speed density conversion, and built drag/time-attack recommendations.",
    hero: {
      eyebrow: "Mitsubishi 4G63",
      title: "The 4G63 still responds to boost like a legend.",
      summary:
        "Evo, DSM, Galant VR-4, speed density conversion, trigger control, and the Haltech paths that make sense.",
      primaryCta: { href: "/contact?platform=mitsubishi-4g63", label: "Ask About A 4G63" },
      secondaryCta: { href: `${shopHaltech}#ecu-plugnplay-kits`, label: "Mitsubishi PnP Kits" },
    },
    overview: [
      "The 4G63T powers Evos, DSMs, Galant VR-4s, and one of the deepest turbo four-cylinder communities in the world.",
      "Stock-block builds can make real power with sensible boost and tuning, while built blocks can go far beyond that when the hardware is there.",
    ],
    interestingTitle: "What Makes The 4G63 Interesting",
    interesting: [
      "The engine was overbuilt for its original output, leaving meaningful headroom before the block has to come apart.",
      "Standalone speed density control cleans up the intake tract and improves response compared with many factory MAF setups.",
      "The trigger and ignition behavior respond well to modern standalone control.",
    ],
    tuningPath: [
      {
        title: "Evo plug-and-play",
        body: "Elite 1500 plug-and-play is common on supported Evo VIII/IX and related variants, with fitment checked by year and trim.",
      },
      {
        title: "DSM and early Evo",
        body: "DSM cars and earlier Evo/VR-4 applications often route through adapter or universal wiring with an Elite 1500.",
      },
      {
        title: "Built competition car",
        body: "Elite 2500 or Nexus S3 becomes relevant when the build needs more I/O, more logging, or modern comms.",
      },
    ],
    recommendations: [
      {
        title: "Evo VIII or IX",
        body: "Elite 1500 plug-and-play after confirming year and trim.",
        href: `${shopHaltech}#ecu-plugnplay-kits`,
      },
      {
        title: "DSM or Evo IV-VII",
        body: "Elite 1500 with the appropriate adapter or universal wiring.",
        href: `${ecuGuide}#elite-1500`,
      },
      {
        title: "Drag or time-attack 4G63",
        body: "Elite 2500 or Nexus S3. Choose by I/O and logging needs.",
        href: `${ecuGuide}#nexus-s-series`,
      },
    ],
    notFor: [
      "Owners wanting factory reflash behavior instead of a full standalone conversion.",
      "Cars with unresolved boost leaks, weak fuel pumps, or inconsistent ignition.",
      "Assuming every Evo or DSM year uses the same adapter.",
    ],
    whyUs:
      "Evos see the dyno regularly. Kenny knows where the 4G63 wants fuel, timing, and boost control, and where the setup needs mechanical work before tuning starts.",
    stats: [
      { label: "Common path", value: "Elite 1500 PnP or adapter" },
      { label: "Key upgrade", value: "Speed density control" },
      { label: "Race tier", value: "Elite 2500 or Nexus S3" },
    ],
    crossLinks: [
      { href: "/shop/platforms/subaru-ej", label: "Compare Subaru EJ" },
      { href: "/shop/platforms/nissan-rb", label: "Compare Nissan RB" },
      { href: "/shop/platforms/honda-k-series", label: "Compare Honda K" },
    ],
    productLinks: [
      { href: `${shopHaltech}#ecu-plugnplay-kits`, label: "Mitsubishi PnP kits" },
      { href: "/shop/haltech/sensors/map-sensors", label: "MAP sensor guide" },
      { href: "/shop/haltech/outputs-ignition/injector-dynamics", label: "Injector sizing" },
    ],
  },
  {
    slug: "mazda-13b",
    title: "Mazda 13B Rotary Haltech Tuning",
    engineName: "Mazda 13B rotary",
    metaTitle: "Best Haltech ECU for Mazda 13B Rotary RX-7 Builds | TurboGixxer",
    metaDescription:
      "Mazda 13B rotary Haltech ECU guidance for FC and FD RX-7 builds, including Elite 1500 terminated harness, staged injection, IGN-1A ignition, and rotary tuning notes.",
    hero: {
      eyebrow: "Mazda 13B",
      title: "A rotary tune is not a piston-engine tune with different numbers.",
      summary:
        "FC, FD, staged injection, dual-spark ignition, IGN-1A upgrades, and why rotaries need a different kind of attention.",
      primaryCta: { href: "/contact?platform=mazda-13b", label: "Ask About A 13B" },
      secondaryCta: { href: `${shopHaltech}#wiring-harnesses`, label: "13B Harnesses" },
    },
    overview: [
      "The 13B is Mazda's twin-rotor Wankel engine, known from FC and FD RX-7s and a tuning culture unlike anything piston-based.",
      "Rotaries are compact, high-revving, and unforgiving. They like fuel, they need ignition, and they punish casual tuning.",
    ],
    interestingTitle: "What Makes The 13B Interesting",
    interesting: [
      "Fueling usually involves primary and secondary injection stages with very different injector sizes.",
      "The ignition system fires primary and secondary spark in a pattern piston tuners cannot treat casually.",
      "The Elite ECU family supports rotary trigger, injection staging, and dual-spark logic natively.",
    ],
    tuningPath: [
      {
        title: "13B terminated harness",
        body: "Elite 1500 with a 13B terminated harness and pre-wired IGN-1A ignition is the cleanest path for many FC and FD builds.",
      },
      {
        title: "Universal rotary install",
        body: "Elite 1500 or 2500 with universal wiring works when the chassis or engine combination does not match a standard harness.",
      },
      {
        title: "Ignition first",
        body: "On a rotary making real power, IGN-1A coils are not a cosmetic upgrade. The ignition load is high and the stock system is often the bottleneck.",
      },
    ],
    recommendations: [
      {
        title: "Street FC or FD",
        body: "Elite 1500 plus 13B terminated harness with IGN-1A ignition.",
        href: `${shopHaltech}#wiring-harnesses`,
      },
      {
        title: "Built turbo rotary",
        body: "Same Elite 1500. The race feature set covers launch, anti-lag, and staged injection.",
        href: `${ecuGuide}#elite-1500`,
      },
      {
        title: "Peripheral-port or competition car",
        body: "Call first. The right answer depends on the engine, fuel, ignition, and use case.",
        href: contact,
      },
    ],
    notFor: [
      "Set-it-and-forget-it owners. Rotaries require fuel quality, AFR, and maintenance attention.",
      "Trying to run serious boost on tired factory ignition.",
      "Treating a 13B like a small piston engine in calibration or safety strategy.",
    ],
    whyUs:
      "Rotary tuning is a different discipline. Kenny treats it that way: staged fuel, ignition energy, and engine protection before dyno hero numbers.",
    stats: [
      { label: "Common path", value: "Elite 1500 + 13B harness" },
      { label: "Key feature", value: "Staged injection and dual spark" },
      { label: "Ignition", value: "IGN-1A strongly recommended" },
    ],
    crossLinks: [
      { href: "/shop/platforms/toyota-2jz", label: "Compare Toyota JZ" },
      { href: "/shop/platforms/mitsubishi-4g63", label: "Compare 4G63" },
      { href: "/shop/platforms/honda-f-series", label: "Compare S2000" },
    ],
    productLinks: [
      { href: `${shopHaltech}#wiring-harnesses`, label: "13B harnesses" },
      { href: "/shop/haltech/outputs-ignition/ign-1a-coil", label: "IGN-1A coils" },
      { href: "/shop/haltech/sensors/map-sensors", label: "MAP sensor guide" },
    ],
  },
  {
    slug: "gm-ls-v8",
    title: "GM LS V8 Haltech Tuning",
    engineName: "GM LS V8",
    metaTitle: "Best Haltech ECU for GM LS V8 Swaps | Rebel LS and Nexus R5",
    metaDescription:
      "GM LS V8 Haltech ECU guidance for Gen III cable throttle, Gen IV DBW, Rebel LS kits, LSx terminated harnesses, and Nexus R5 race builds.",
    hero: {
      eyebrow: "GM LS V8",
      title: "For most LS swaps, Rebel LS is the clean answer.",
      summary:
        "Gen III cable throttle, Gen IV drive-by-wire, VATS-free standalone control, and when a Nexus R5 is worth the step.",
      primaryCta: { href: "/contact?platform=gm-ls-v8", label: "Ask About An LS" },
      secondaryCta: { href: `${shopHaltech}#ecu-vcu`, label: "View Rebel LS" },
    },
    overview: [
      "The LS is the most-swapped V8 of the modern era. Gen III, Gen IV, truck engines, aluminum blocks, iron blocks, hot rods, Miatas, RX-7s, S-chassis, and everything in between.",
      "The platform is everywhere because it works: compact size, deep aftermarket support, and serious forced-induction headroom.",
    ],
    interestingTitle: "What Makes The LS Interesting",
    interesting: [
      "It is a traditional pushrod V8 that breathes better, revs better, and packages better than older small-blocks.",
      "The swap market solved mounts, oil pans, headers, accessories, and fuel systems for a huge number of chassis.",
      "Standalone control avoids OEM VATS/security and thinned factory harness problems.",
    ],
    tuningPath: [
      {
        title: "Rebel LS Gen III",
        body: "Cable-throttle Gen III engines use the Rebel LS Gen III kit with terminated harness and Setup Wizard support.",
      },
      {
        title: "Rebel LS Gen IV",
        body: "Drive-by-wire Gen IV engines use the Rebel LS Gen IV kit for 6-pin DBW and EV6 injector support.",
      },
      {
        title: "Nexus R5 race build",
        body: "Built LS race cars with multiple pumps, fans, power loads, and heavy logging needs should look at Nexus R5 with an LSx terminated harness.",
      },
    ],
    recommendations: [
      {
        title: "Cable-throttle Gen III swap",
        body: "Rebel LS Gen III. Done.",
        href: `${shopHaltech}#ecu-vcu`,
      },
      {
        title: "DBW Gen IV swap",
        body: "Rebel LS Gen IV. Same answer, with the right throttle and injector support.",
        href: `${shopHaltech}#ecu-vcu`,
      },
      {
        title: "Built LS race car",
        body: "Nexus R5 with LSx terminated harness when power distribution and logging are part of the build.",
        href: `${ecuGuide}#nexus-r5`,
      },
    ],
    notFor: [
      "Keeping the OEM ECU as the main controller and expecting Haltech to behave like a piggyback.",
      "Automatic transmission plans that have not been discussed before ECU selection.",
      "Swaps where fuel, cooling, and grounds are not finished.",
    ],
    whyUs:
      "LS swaps are steady shop work. We install them, tune them, and know where the common swap wiring and fuel system problems show up on the dyno.",
    stats: [
      { label: "Common path", value: "Rebel LS Gen III or Gen IV" },
      { label: "High-end path", value: "Nexus R5 + LSx harness" },
      { label: "Watch item", value: "DBW, injector, and trans plan" },
    ],
    crossLinks: [
      { href: "/shop/platforms/ford-coyote", label: "Compare Ford Coyote" },
      { href: "/shop/platforms/toyota-2jz", label: "Compare 2JZ swaps" },
      { href: "/shop/platforms/honda-k-series", label: "Compare K swaps" },
    ],
    productLinks: [
      { href: `${shopHaltech}#ecu-vcu`, label: "Rebel LS kits" },
      { href: `${ecuGuide}#nexus-r5`, label: "Nexus R5 guide" },
      { href: "/shop/haltech/outputs-ignition/v8-ign-1a-coil-harness-kit", label: "V8 ignition kits" },
    ],
  },
  {
    slug: "ford-coyote",
    title: "Ford Coyote 5.0 Haltech Tuning",
    engineName: "Ford Coyote 5.0 V8",
    metaTitle: "Best Haltech ECU for Ford Coyote 5.0 Builds | TurboGixxer",
    metaDescription:
      "Ford Coyote Haltech ECU guidance for 5.0 Mustang and swap builds, including Elite 2500, Nexus S3, DBW, Ti-VCT cam control, and race-car Nexus R5 paths.",
    hero: {
      eyebrow: "Ford Coyote 5.0",
      title: "The Coyote makes power through cam control, not brute simplicity.",
      summary:
        "Twin independent variable cam timing, DBW, high channel count needs, and why Coyote swaps are more complex than LS swaps.",
      primaryCta: { href: "/contact?platform=ford-coyote", label: "Ask About A Coyote" },
      secondaryCta: { href: `${ecuGuide}#elite-2500`, label: "Elite 2500 Guide" },
    },
    overview: [
      "The Coyote is Ford's modern 5.0L Modular V8, found in Mustang GTs from 2011 onward and F-150s of similar vintage.",
      "It shares the LS's broad swap appeal, but it is more complex to wire and tune because of DBW and twin independent variable cam timing on four cams.",
    ],
    interestingTitle: "What Makes The Coyote Interesting",
    interesting: [
      "Ti-VCT is the reason the engine can make a broad torque curve, but it needs proper ECU control.",
      "Channel count matters. Four camshafts, DBW, sensors, and race functions can use I/O quickly.",
      "A standalone tune can unlock real torque and consistency on boosted or built combinations.",
    ],
    tuningPath: [
      {
        title: "Universal wire-in",
        body: "For Coyote swaps or built Mustangs without a specific PnP path, Elite 2500 or Nexus S3 with universal wiring is the typical route.",
      },
      {
        title: "Modern ECU choice",
        body: "Nexus S3 makes sense when the build is starting fresh and the owner wants Wi-Fi, USB-C, and the newer platform.",
      },
      {
        title: "Race build",
        body: "Nexus R5 is the right conversation when the car needs integrated power distribution, serious data logging, and multiple controlled loads.",
      },
    ],
    recommendations: [
      {
        title: "Coyote swap",
        body: "Elite 2500 with universal harness, or Nexus S3 as the modern alternative.",
        href: `${ecuGuide}#nexus-s-series`,
      },
      {
        title: "Built Mustang",
        body: "Confirm year and trim first, then choose based on I/O and DBW/cam strategy.",
        href: contact,
      },
      {
        title: "Race Coyote",
        body: "Nexus R5 with universal harness when the car has real power and data demands.",
        href: `${ecuGuide}#nexus-r5`,
      },
    ],
    notFor: [
      "Owners expecting Coyote wiring to be as simple as an LS swap.",
      "Builds where the Ti-VCT strategy is not part of the plan.",
      "Over-promised fitment without checking the year, chassis, and harness.",
    ],
    whyUs:
      "Coyotes are less common here than LS, JZ, or Honda work, and we will say that directly. Kenny has calibrated them, but we would rather verify the path than pretend every year and swap is easy.",
    stats: [
      { label: "Common path", value: "Elite 2500 or Nexus S3" },
      { label: "Key feature", value: "Four-cam Ti-VCT control" },
      { label: "Race tier", value: "Nexus R5" },
    ],
    crossLinks: [
      { href: "/shop/platforms/gm-ls-v8", label: "Compare GM LS" },
      { href: "/shop/platforms/toyota-2jz", label: "Compare JZ swaps" },
      { href: "/shop/platforms/honda-k-series", label: "Compare K swaps" },
    ],
    productLinks: [
      { href: `${ecuGuide}#elite-2500`, label: "Elite 2500 guide" },
      { href: `${ecuGuide}#nexus-s-series`, label: "Nexus S-Series guide" },
      { href: `${ecuGuide}#nexus-r5`, label: "Nexus R5 guide" },
    ],
  },
];

export const platformsHero: RouteHero = {
  eyebrow: "Platform Guides",
  title: "Haltech paths by engine, not by hype.",
  summary:
    "Realistic ECU, harness, ignition, and tuning guidance for the engine families TurboGixxer sees most often.",
  primaryCta: { href: contact, label: "Ask About Your Build" },
  secondaryCta: { href: shopHaltech, label: "Shop Haltech" },
};

function platformToIndexCard(page: PlatformPage): PlatformIndexCard {
  return {
    title: page.hero.eyebrow,
    body: page.hero.summary,
    href: `/shop/platforms/${page.slug}`,
    eyebrow: page.engineName,
    meta: page.recommendations[0]?.title,
  };
}

const platformIndex = new Map(platformPages.map((page) => [page.slug, page]));

function requirePlatformPage(slug: string) {
  const page = platformIndex.get(slug);

  if (!page) {
    throw new Error(`Platform page ${slug} was not found.`);
  }

  return page;
}

export const platformIndexCards = platformPages.map(platformToIndexCard);

export const platformFamilyGroups: PlatformFamilyGroup[] = [
  {
    id: "inline-six",
    title: "Inline-Six",
    summary: "The high-boost six-cylinder paths customers compare most often.",
    platforms: ["toyota-2jz", "nissan-rb"].map((slug) =>
      platformToIndexCard(requirePlatformPage(slug)),
    ),
  },
  {
    id: "honda",
    title: "Honda",
    summary: "VTEC, swap wiring, cam control, and the harness details that change the ECU choice.",
    platforms: ["honda-k-series", "honda-b-series", "honda-f-series"].map((slug) =>
      platformToIndexCard(requirePlatformPage(slug)),
    ),
  },
  {
    id: "awd-import",
    title: "AWD Import",
    summary: "Turbo four-cylinder platforms where trigger, ignition, and regional fitment matter.",
    platforms: ["subaru-ej", "mitsubishi-4g63"].map((slug) =>
      platformToIndexCard(requirePlatformPage(slug)),
    ),
  },
  {
    id: "rotary",
    title: "Rotary",
    summary: "13B guidance for staged injection, dual spark, heat, and clean standalone wiring.",
    platforms: ["mazda-13b"].map((slug) =>
      platformToIndexCard(requirePlatformPage(slug)),
    ),
  },
  {
    id: "domestic-v8",
    title: "Domestic V8",
    summary: "LS and Coyote routes where DBW, cam control, transmission plans, and I/O decide the path.",
    platforms: ["gm-ls-v8", "ford-coyote"].map((slug) =>
      platformToIndexCard(requirePlatformPage(slug)),
    ),
  },
];

export function getPlatformPage(slug: string) {
  return platformIndex.get(slug);
}

export function platformSchema(page: PlatformPage) {
  return {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: page.title,
    vehicleEngine: {
      "@type": "EngineSpecification",
      name: page.engineName,
    },
    mainEntityOfPage: `/shop/platforms/${page.slug}`,
    offers: page.recommendations.map((recommendation) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: recommendation.title,
        description: recommendation.body,
        url: recommendation.href,
      },
    })),
  };
}

