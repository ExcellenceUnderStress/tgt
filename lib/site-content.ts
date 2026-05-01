export type NavItem = {
  href: string;
  label: string;
};

export type RouteHero = {
  eyebrow: string;
  title: string;
  summary: string;
  primaryCta: NavItem;
  secondaryCta?: NavItem;
};

export type HomepageServicePath = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  cta: NavItem;
};

export type HomepageBuild = {
  title: string;
  meta: string;
  image: string;
};

export type HomepageShopLane = {
  title: string;
  description: string;
  cta: NavItem;
  image: string;
  darkImage?: string;
  imageMode?: "default" | "brandmark";
};

export type HomepageBrand = {
  name: string;
  logo: string;
};

export type HomepageSignal = {
  label: string;
  value: string;
  detail: string;
};

export type ServiceOverviewLane = {
  title: string;
  fit: string;
  timing: string;
  pricing: string;
  bullets: string[];
  cta: NavItem;
};

export type ServiceDetailStat = {
  label: string;
  value: string;
};

export type ServiceDetailSection = {
  title: string;
  body: string;
};

export type ServiceDetailChecklist = {
  title: string;
  items: string[];
};

export type ServicePricingRow = {
  label: string;
  value: string;
  detail?: string;
};

export type ServicePricingCard = {
  title: string;
  subtitle: string;
  badge?: string;
  rows: ServicePricingRow[];
  footer?: string;
};

export type ServicePricingAddon = {
  label: string;
  value: string;
};

export type ServicePricingHighlightCard = {
  title: string;
  subtitle: string;
  price: string;
  body: string;
};

export type ServicePolicyItem = {
  title: string;
  body: string;
};

export type ServicePricingTabKey = "factory" | "standalone" | "remote";

export type ServicePricingCheatSheetItem = {
  build: string;
  path: string;
  price: string;
  timeline: string;
  targetTab: ServicePricingTabKey;
};

export type ServiceDetailPage = {
  laneLabel: string;
  intro: string;
  callout: string;
  stats: ServiceDetailStat[];
  fitChecks: string[];
  prepChecklist: ServiceDetailChecklist[];
  process: ServiceDetailSection[];
  expectations: ServiceDetailSection[];
  finalCta: {
    title: string;
    summary: string;
    primaryCta: NavItem;
    secondaryCta?: NavItem;
  };
};

export type AboutPageContent = {
  introLabel: string;
  introTitle: string;
  introBody: string;
  approachLabel: string;
  approachTitle: string;
  approachItems: string[];
  fitLabel: string;
  fitTitle: string;
  goodFit: string[];
  howWeWork: string[];
  finalCta: {
    title: string;
    summary: string;
    primaryCta: NavItem;
    secondaryCta?: NavItem;
  };
};

export type ContactLane = {
  title: string;
  summary: string;
  details: string[];
  cta: NavItem;
};

export type ContactPageContent = {
  stats: ServiceDetailStat[];
  lanes: ContactLane[];
  expectations: ServiceDetailSection[];
  finalCta: {
    title: string;
    summary: string;
    primaryCta: NavItem;
    secondaryCta?: NavItem;
  };
};

export type BuildsPageContent = {
  introLabel: string;
  introTitle: string;
  introBody: string;
  credibility: ServiceDetailSection[];
  finalCta: {
    title: string;
    summary: string;
    primaryCta: NavItem;
    secondaryCta?: NavItem;
  };
};

export type ShopPageContent = {
  introLabel: string;
  introTitle: string;
  introBody: string;
  guidance: ServiceDetailSection[];
  finalCta: {
    title: string;
    summary: string;
    primaryCta: NavItem;
    secondaryCta?: NavItem;
  };
};

export type ShopCollectionPageContent = {
  introLabel: string;
  introTitle: string;
  introBody: string;
  bullets: string[];
  noteLabel: string;
  noteTitle: string;
  noteBody: string;
  finalCta: {
    title: string;
    summary: string;
    primaryCta: NavItem;
    secondaryCta?: NavItem;
  };
};

export type ServicesPricingContent = {
  hero: {
    eyebrow: string;
    title: string;
    summary: string;
  };
  prompt: {
    question: string;
    linkLabel: string;
    linkHref: string;
  };
  cheatSheet: {
    eyebrow: string;
    title: string;
    items: ServicePricingCheatSheetItem[];
  };
  factory: {
    eyebrow: string;
    title: string;
    summary: string;
    flag: string;
    cards: ServicePricingCard[];
  };
  standalone: {
    eyebrow: string;
    title: string;
    summary: string;
    flag: string;
    cards: ServicePricingCard[];
  };
  remote: {
    eyebrow: string;
    title: string;
    summary: string;
    flag: string;
    cards: ServicePricingHighlightCard[];
  };
  addons: {
    eyebrow: string;
    items: ServicePricingAddon[];
  };
  policy: {
    eyebrow: string;
    title: string;
    summary: string;
    items: ServicePolicyItem[];
  };
  finalCta: {
    label: string;
    href: string;
  };
};

export const primaryNavigation: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/builds", label: "Builds" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export const homepageSections = {
  hero: {
    eyebrow: "TurboGixxer Tuning",
    title: "Tuned to drive. Not just to dyno.",
    summary:
      "Dyno and remote EFI tuning. Street, track, high-power.",
    primaryCta: { href: "/contact", label: "Start Booking" },
    location: "Auburn, Washington",
    logo: "/images/logo/1x/desktop-logo-white.png",
    video: "/Heromp4.mp4",
  },
  brandStatement: {
    title:
      "TurboGixxer is an independent EFI calibration shop. Seventeen years of tuning street cars, track builds, and high-power combinations - with drivability and engine safety leading every decision.",
    body: "",
    detail: "",
  },
  telemetrySignals: [
    {
      label: "Legacy",
      value: "17+ Years",
      detail: "Independent calibration work built on customer cars, competition pressure, and repeat clients.",
    },
    {
      label: "Coverage",
      value: "Dyno + Remote",
      detail: "Local live tuning and disciplined remote revision work for supported combinations.",
    },
    {
      label: "Priority",
      value: "Qualified Intake",
      detail: "Serious projects route to direct contact before scheduling.",
    },
  ] satisfies HomepageSignal[],
  legacyPreview: {
    eyebrow: "Legacy",
    title:
      "Seventeen-plus years of EFI calibration, and a methodical approach centered on drivability, data, and controlled power delivery.",
    summary: "",
    bullets: [
      "Started tuning in Florida before stepping into high-pressure Honda drag programs in Tacoma.",
      "Built around direct customer work instead of volume-shop churn or generic tune files.",
      "Best fit for owners who care about process, communication, and real-world behavior.",
    ],
    cta: { href: "/about", label: "Read More" },
  },
  servicePaths: [
    {
      eyebrow: "IN-PERSON",
      title: "Dyno Tuning",
      description:
        "Tuned in-house on our dyno.",
      bullets: [
        "Auburn, WA",
        "Half day — 9am or 1pm start",
        "$200 deposit to book",
      ],
      cta: { href: "/contact", label: "Book Dyno Session →" },
    },
    {
      eyebrow: "REMOTE",
      title: "E-Tune",
      description:
        "Tuned from your datalogs. Revisions until it's clean.",
      bullets: [
        "Nationwide",
        "Requires datalogging capability",
      ],
      cta: { href: "/contact", label: "Start E-Tune →" },
    },
    {
      eyebrow: "",
      title: "Project Review",
      description:
        "Not sure what fits? Send us the build details and we'll point you to the next step.",
      bullets: [
        "Response in 24–48 hours",
        "Good for complex builds",
      ],
      cta: { href: "/contact", label: "Submit for Review →" },
    },
  ] satisfies HomepageServicePath[],
  featuredBuilds: [
    {
      title: "2018 Civic Si - Turbo E85",
      meta: "KTuner · 380 WHP",
      image: "/images/builds/Artboard 1.png",
    },
    {
      title: "2014 Mustang GT - Bolt-ons",
      meta: "HP Tuners · 445 WHP",
      image: "/images/builds/Artboard 2.png",
    },
    {
      title: "K-Swap EG Hatch - All Motor",
      meta: "Hondata · 240 WHP",
      image: "/images/builds/Artboard 3.png",
    },
  ] satisfies HomepageBuild[],
  shopLanes: [
    {
      title: "Merch",
      description:
        "Apparel, stickers, and branded goods.",
      cta: { href: "/shop/merch", label: "Shop Merch" },
      image: "/images/logo/1x/desktop-logo-color.png",
      darkImage: "/images/logo/1x/desktop-logo-white.png",
      imageMode: "brandmark",
    },
    {
      title: "Haltech",
      description:
        "Curated ECUs and accessories we trust.",
      cta: { href: "/shop/haltech", label: "View Haltech" },
      image: "/images/brands/logos/haltech.svg",
      imageMode: "brandmark",
    },
  ] satisfies HomepageShopLane[],
  brands: [
    {
      name: "EcuMaster",
      logo: "/images/brands/logos/ecumaster.svg",
    },
    {
      name: "Haltech",
      logo: "/images/brands/logos/haltech.svg",
    },
    {
      name: "Holley EFI",
      logo: "/images/brands/logos/holley-efi.svg",
    },
    {
      name: "Hondata",
      logo: "/images/brands/logos/hondata.svg",
    },
    {
      name: "HP Tuners",
      logo: "/images/brands/logos/hp-tuners.svg",
    },
    {
      name: "MegaSquirt",
      logo: "/images/brands/logos/megasquirt.svg",
    },
    {
      name: "MoTeC",
      logo: "/images/brands/logos/motec.svg",
    },
  ] satisfies HomepageBrand[],
  finalCta: {
    title: "TELL US WHAT YOU'RE BUILDING.",
    summary:
      "The build, the platform, and what you want out of it. We'll take it from there.",
    primaryCta: { href: "/contact", label: "Start Your Project" },
    details: [
      { label: "Location", value: "Auburn, Washington" },
      { label: "Response time", value: "Usually 24-48 hours" },
    ],
  },
};

export const servicesOverview = {
  intro:
    "Use this page to figure out whether the build belongs on the dyno, in a remote revision process, or in a project review first.",
  lanes: [
    {
      title: "Dyno Tuning",
      fit: "Best for local or travel-in customers with builds that look mechanically ready for an in-person session.",
      timing: "Live session after intake review and schedule confirmation.",
      pricing: "Pricing depends on combination complexity, time required, and readiness of the vehicle.",
      bullets: [
        "Good fit for complex setups, troubleshooting, and real-time refinement",
        "Requires mechanical readiness before dyno time is committed",
        "Routes into a booking request after review",
      ],
      cta: { href: "/pricing/dyno", label: "View Dyno" },
    },
    {
      title: "Remote Tuning",
      fit: "Best for supported out-of-area customers who can communicate clearly and send usable datalogs.",
      timing: "Revision-based process with multiple rounds of feedback and calibration updates.",
      pricing: "Pricing is guided by platform, setup, and expected revision complexity.",
      bullets: [
        "Best for customers who can log properly and follow process",
        "Usually requires 5 to 17 revisions depending on setup",
        "Starts with intake review before tuning moves forward",
      ],
      cta: { href: "/pricing/remote", label: "View Remote" },
    },
  ] satisfies ServiceOverviewLane[],
  fitChecks: [
    {
      title: "Choose Dyno",
      body: "You want in-person calibration, immediate feedback, and the build appears ready for a scheduled session.",
    },
    {
      title: "Choose Remote",
      body: "You are outside the area, have supported hardware, and can send logs for a measured revision process.",
    },
    {
      title: "Choose Project Review",
      body: "The path is unclear, the combination is unusual, or you need guidance before committing to either service.",
    },
  ],
  pricingNotes: [
    "V2 should show pricing guidance, not a fake-simple one-price table.",
    "Final cost depends on platform, readiness, and amount of refinement required.",
    "If the setup is unclear, project review should happen before quoting with confidence.",
  ],
  process: [
    "Choose the correct path first instead of jumping straight to a generic scheduler.",
    "Submit structured intake with vehicle, platform, mods, fuel, goals, and preferred timeframe.",
    "The shop reviews fit and responds with the right next step: booking request, remote intake follow-up, or project review guidance.",
  ],
  closing: {
    title: "Start with fit, then move into booking.",
    summary:
      "The goal is to route serious customers into the correct next step without wasting calendar time or forcing the wrong path.",
    primaryCta: { href: "/contact", label: "Start Booking" },
  },
};

export const servicesPricingContent: ServicesPricingContent = {
  hero: {
    eyebrow: "Services & Pricing",
    title: "Pricing by platform.",
    summary:
      "Tuning for street cars, track builds, and race programs. Priced by ECU platform — licensing credits included on factory ECUs.",
  },
  prompt: {
    question: "Not sure what you need?",
    linkLabel: "Tell us what you're building",
    linkHref: "#pricing-cheat-sheet",
  },
  cheatSheet: {
    eyebrow: "Quick Reference",
    title: "Common builds and what they cost.",
    items: [
      {
        build: "Bolt-on Honda on Hondata",
        path: "Factory ECU Reflash",
        price: "from $650",
        timeline: "Half day",
        targetTab: "factory",
      },
      {
        build: "K-swap or turbo build on Haltech",
        path: "Standalone ECU Tuning",
        price: "from $750 + Race Package +$500",
        timeline: "3–6 hours dyno",
        targetTab: "standalone",
      },
      {
        build: "Out-of-state E85 conversion",
        path: "Remote Tuning",
        price: "$500 + Flex Fuel +$100",
        timeline: "10–20 revisions",
        targetTab: "remote",
      },
      {
        build: "MoTeC M1 race car",
        path: "Standalone (MoTeC tier)",
        price: "$1,000–$1,500 + Race Package +$800",
        timeline: "Varies",
        targetTab: "standalone",
      },
    ],
  },
  factory: {
    eyebrow: "Factory ECU",
    title: "Factory ECU Tuning",
    summary:
      "Reflash calibration for OEM ECUs on HP Tuners and Hondata platforms. Best for street cars and bolt-on builds. Licensing credits included.",
    flag: "Street / Bolt-Ons",
    cards: [
      {
        title: "GM",
        subtitle: "1999 – 2020+",
        rows: [
          { label: "1999 – 2016", value: "$750" },
          { label: "2017 – 2020+", value: "$850" },
        ],
        footer: "Licensing credits included. +$350 if TCM requires unlocking (2017+).",
      },
      {
        title: "Ford",
        subtitle: "1987 – 2024",
        rows: [
          { label: "1987 – 2017", value: "$750" },
          { label: "2018 – 2024", value: "$850" },
        ],
        footer: "Licensing credits included.",
      },
      {
        title: "Dodge / Mopar",
        subtitle: "2003 – 2024",
        rows: [
          { label: "2003 – 2014", value: "$750" },
          { label: "2015 – 2024", value: "$850 – $1,050" },
        ],
        footer:
          "Licensing credits included. 2018+ requires PCM Unlock (+$350) and Bypass (+$80).",
      },
      {
        title: "Honda (Hondata)",
        subtitle: "S300 / KPro / FlashPro",
        rows: [
          { label: "S300", value: "$550" },
          { label: "KPro / FlashPro", value: "$650" },
        ],
        footer: "Licensing credits included.",
      },
    ],
  },
  standalone: {
    eyebrow: "Standalone ECU",
    title: "Standalone ECU Tuning",
    summary:
      "Full ECU control for race builds and high-power street cars. Multiple revisions included until the tune is dialed in.",
    flag: "Race / Serious Street",
    cards: [
      {
        title: "Standard Platforms",
        subtitle: "Haltech, Holley, MaxxECU, Megasquirt, Link, ECU Master",
        rows: [
          {
            label: "Base Tune",
            value: "$750",
            detail: "Initial setup and full map calibration.",
          },
          {
            label: "Race Package",
            value: "+$500",
            detail: "2WD / 4WD / drag / road race strategies + 1 local track visit.",
          },
        ],
      },
      {
        title: "MoTeC",
        subtitle: "M1 Series",
        badge: "Premium",
        rows: [
          {
            label: "Base Tune",
            value: "$1,000 – $1,500",
            detail: "Varies by package complexity.",
          },
          {
            label: "Race Package",
            value: "+$800",
            detail: "Launch, anti-lag, traction control + 1 local track visit.",
          },
        ],
      },
    ],
  },
  remote: {
    eyebrow: "Remote & Track",
    title: "Remote Tuning & Track Support",
    summary: "For out-of-state customers and on-site race support.",
    flag: "Remote / Support",
    cards: [
      {
        title: "Remote Tuning",
        price: "$500",
        subtitle: "Most factory ECU and standalone platforms",
        body: "E-tune via datalogs. Multiple revisions until the tune is dialed in.",
      },
      {
        title: "Remote Tuning (MoTeC)",
        price: "$1,000",
        subtitle: "M1 Series",
        body: "Remote calibration for MoTeC systems with datalog support.",
      },
      {
        title: "Track Support",
        price: "$250 / hr",
        subtitle: "4-hour minimum (local)",
        body: "Travel rate $1,650 / day plus travel and lodging.",
      },
    ],
  },
  addons: {
    eyebrow: "Available Add-ons",
    items: [
      { label: "Flex Fuel setup", value: "+$100" },
      { label: "TCM Unlock (GM 2017+)", value: "+$350" },
      { label: "Traction Control Setup (Standalone)", value: "+$250" },
      { label: "Flex Fuel (Standalone)", value: "+$100" },
      { label: "Dash Setup (Standard)", value: "+$200" },
      { label: "Dash Setup (MoTeC)", value: "+$1,000" },
    ],
  },
  policy: {
    eyebrow: "Booking & Policy",
    title: "What to know before scheduling your appointment.",
    summary:
      "A few notes on deposits, what's included, and how to start if you're not sure which path fits your build.",
    items: [
      {
        title: "Deposit Required",
        body: "$200 non-refundable deposit secures all appointments. Applies to dyno sessions, e-tunes, and track support.",
      },
      {
        title: "What's Included",
        body: "All Factory ECU pricing includes licensing credits. Standalone and remote tunes include multiple revisions until the tune is dialed in for your setup.",
      },
      {
        title: "Not Sure What You Need",
        body: "Reach out first. We'll help you pick the right service for the build.",
      },
    ],
  },
  finalCta: {
    label: "Start project intake",
    href: "/book",
  },
};

export const routeHeroes: Record<string, RouteHero> = {
  about: {
    eyebrow: "About",
    title: "Seventeen years tuning cars that have to perform.",
    summary:
      "Kenny Sampson has been calibrating EFI systems since Florida, through Speed Factory Racing, and now independently out of Auburn, WA.",
    primaryCta: { href: "/contact", label: "Contact" },
  },
  services: {
    eyebrow: "Service Paths",
    title: "Clear service lanes for dyno sessions, remote tuning, and project review.",
    summary:
      "This page should help customers self-select the right path without burying them in filler copy or unqualified scheduling.",
    primaryCta: { href: "/contact", label: "Start Booking" },
    secondaryCta: { href: "/pricing/remote", label: "Remote Details" },
  },
  dyno: {
    eyebrow: "Dyno Tuning",
    title: "In-person calibration for local customers and travel-in builds.",
    summary:
      "The dyno page will explain prep requirements, fit, and the review-first booking expectations before a session is confirmed.",
    primaryCta: { href: "/contact", label: "Book Dyno" },
  },
  remote: {
    eyebrow: "Remote Tuning",
    title: "Revision-based e-tuning centered on datalogs, communication, and control.",
    summary:
      "This route should position remote tuning as a serious iterative process rather than a one-file download transaction.",
    primaryCta: { href: "/contact", label: "Start Remote Intake" },
  },
  builds: {
    eyebrow: "Featured Builds",
    title: "Proof through selected projects, platforms, and outcomes.",
    summary:
      "The builds page will stay curated, image-led, and brand-aligned instead of turning into an endless catalog.",
    primaryCta: { href: "/contact", label: "Discuss Your Build" },
  },
  shop: {
    eyebrow: "Curated Shop",
    title: "A restrained storefront for merch and Haltech offerings.",
    summary:
      "The shop landing page should route visitors clearly into merch or Haltech without bloating the experience.",
    primaryCta: { href: "/shop/merch", label: "Shop Merch" },
    secondaryCta: { href: "/shop/haltech", label: "Shop Haltech" },
  },
  merch: {
    eyebrow: "Merch",
    title: "Brand goods presented cleanly, without overwhelming the site.",
    summary:
      "This route can stay straightforward while still carrying the same visual discipline as the rest of the project.",
    primaryCta: { href: "/contact", label: "Contact" },
  },
  haltech: {
    eyebrow: "Haltech",
    title: "A guided lane for curated Haltech product visibility and inquiries.",
    summary:
      "The Haltech page should support both customers who know what they need and those who need direction first.",
    primaryCta: { href: "/contact", label: "Inquire" },
  },
  contact: {
    eyebrow: "Contact",
    title: "Get In Touch.",
    summary: "Questions, project review, or ready to book - start here.",
    primaryCta: { href: "/contact", label: "Submit Inquiry" },
  },
  booking: {
    eyebrow: "Book",
    title: "Tell us about the build.",
    summary:
      "Three paths, one short form. Pick the one that fits, send the details, we'll take it from there.",
    primaryCta: { href: "/contact", label: "Begin Intake" },
  },
};

export const serviceDetailPages: Record<"dyno" | "remote", ServiceDetailPage> = {
  dyno: {
    laneLabel: "In-Person Calibration",
    intro:
      "Dyno tuning is for customers who want live calibration, immediate feedback, and a session built around a mechanically ready car. The point is not just peak power. The point is a combination that behaves correctly under load.",
    callout:
      "This lane stays review-first. The shop looks at the combination, the current state of the car, and the real goal before schedule time is committed.",
    stats: [
      { label: "Best fit", value: "Local or travel-in customers with ready cars" },
      { label: "Session style", value: "Live refinement on the dyno with direct troubleshooting" },
      { label: "Before booking", value: "Mechanical readiness and project fit are reviewed first" },
    ],
    fitChecks: [
      "You want immediate changes, observed live instead of through revision rounds.",
      "The setup is complex enough that in-person troubleshooting will save time.",
      "The vehicle is close to mechanically complete and not still in a fabrication phase.",
    ],
    prepChecklist: [
      {
        title: "Vehicle readiness",
        items: [
          "No unresolved leaks, obvious drivability failures, or known hard-part issues.",
          "Fuel system, ignition system, and sensors are installed and behaving consistently.",
          "The car can be started, driven, and warmed without preventable problems.",
        ],
      },
      {
        title: "Owner prep",
        items: [
          "Bring a clear modification list, ECU platform details, and fuel information.",
          "Be direct about concerns, recent changes, and any existing tune history.",
          "If you are traveling in, plan around the possibility that readiness issues may delay tuning.",
        ],
      },
    ],
    process: [
      {
        title: "1. Submit intake",
        body: "Start with the booking form so the shop can review the platform, mods, fuel, goals, and timing before a dyno slot is discussed.",
      },
      {
        title: "2. Confirm fit and readiness",
        body: "If the combination looks like a dyno candidate, the next step is confirming mechanical readiness and setting expectations for the session.",
      },
      {
        title: "3. Schedule with purpose",
        body: "Once the project looks ready, the session can be planned around the actual work required instead of a generic calendar block.",
      },
    ],
    expectations: [
      {
        title: "What this page should communicate",
        body: "Dyno work is serious shop time. The site should position it as controlled, technical, and qualification-first rather than an impulse booking lane.",
      },
      {
        title: "What customers should expect",
        body: "Pricing and timing depend on setup quality, platform complexity, and how much refinement or troubleshooting the combination actually needs.",
      },
    ],
    finalCta: {
      title: "Send the build first. Then lock the right dyno plan.",
      summary:
        "The goal is to protect calendar time and route serious projects into a productive session instead of a rushed appointment.",
      primaryCta: { href: "/contact", label: "Book Dyno" },
    },
  },
  remote: {
    laneLabel: "Revision-Based E-Tuning",
    intro:
      "Remote tuning is for supported out-of-area customers who can communicate clearly, send usable logs, and work through revisions without expecting a one-file shortcut. The process is measured on purpose.",
    callout:
      "This lane is about compatibility, communication, and control. The shop reviews the setup first, then confirms whether the project belongs in a remote workflow.",
    stats: [
      { label: "Best fit", value: "Out-of-area customers with supported logging capability" },
      { label: "Process style", value: "Revision rounds built around datalogs and feedback" },
      { label: "Typical range", value: "Often 5 to 17 revisions depending on setup" },
    ],
    fitChecks: [
      "You are outside the area or do not need a live in-person dyno session.",
      "You can gather clean logs, describe issues accurately, and follow a revision process.",
      "The ECU and software combination are supported well enough for remote work to make sense.",
    ],
    prepChecklist: [
      {
        title: "Technical requirements",
        items: [
          "You need a supported ECU or software path and the ability to read and flash files correctly.",
          "You need to capture usable datalogs instead of vague symptom descriptions alone.",
          "The vehicle needs a mechanically sound baseline before revision work starts.",
        ],
      },
      {
        title: "Communication requirements",
        items: [
          "Be precise about the current setup, fuel, injectors, and recent changes.",
          "Send feedback tied to real logs and repeatable conditions when possible.",
          "Understand that remote tuning works best when changes are deliberate, not rushed.",
        ],
      },
    ],
    process: [
      {
        title: "1. Start remote intake",
        body: "Submit the project through the booking flow with platform, mods, fuel, goals, and current tune status so the shop can judge fit.",
      },
      {
        title: "2. Confirm compatibility",
        body: "If the setup is a good candidate, the shop responds on process, expectations, and whether any missing information needs to be resolved first.",
      },
      {
        title: "3. Work through revisions",
        body: "Calibration updates move in rounds with log review, customer feedback, and adjustments aimed at safe drivability and usable performance.",
      },
    ],
    expectations: [
      {
        title: "What this lane is not",
        body: "It is not instant delivery, unlimited guesswork, or a replacement for missing hardware or poor mechanical prep.",
      },
      {
        title: "What makes it work",
        body: "Remote tuning succeeds when the customer can log properly, report clearly, and treat each revision as part of a controlled process.",
      },
    ],
    finalCta: {
      title: "Start with compatibility, then move into revisions.",
      summary:
        "If the setup and communication path look right, remote tuning can move forward with clear expectations instead of wasted back-and-forth.",
      primaryCta: { href: "/contact", label: "Start Remote Intake" },
    },
  },
};

export const aboutPageContent: AboutPageContent = {
  introLabel: "INDEPENDENT CALIBRATION SHOP",
  introTitle: "BUILT AROUND REPEATABLE RESULTS.",
  introBody:
    "TurboGixxer is for owners who want a tuner who explains the why, not just sends back a file. Calibrations should be safe, understandable, and matched to how you actually drive the car.",
  approachLabel: "Approach",
  approachTitle: "Conservative timing. Drivability first. No black boxes.",
  approachItems: [
    "Safe, reliable power beats empty peak numbers.",
    "Drivability and throttle response are part of the result, not extras.",
    "Tunes start conservative and refine through datalogs and observation.",
    "You should understand what's happening in your car.",
  ],
  fitLabel: "Who this fits",
  fitTitle: "Built for owners who care about the process.",
  goodFit: [
    "Owners who want a careful, data-driven approach.",
    "Builds where drivability matters as much as power.",
    "High-power or unusual combinations that need real diagnosis.",
  ],
  howWeWork: [
    "Start with a conversation about the build.",
    "Book once the project has real direction.",
    "Clear, direct communication throughout.",
  ],
  finalCta: {
    title: "Have a build to talk about?",
    summary: "Tell us what you're running. We'll tell you the right next step.",
    primaryCta: { href: "/contact", label: "Contact TurboGixxer" },
  },
};

export const contactPageContent: ContactPageContent = {
  stats: [
    { label: "Best For", value: "Questions · Project review · Fit checks" },
    { label: "Response Time", value: "Usually 24-48 hours" },
    { label: "Location", value: "Auburn, WA" },
  ],
  lanes: [
    {
      title: "General Contact",
      summary: "Still Figuring It Out",
      details: [
        "Direct questions, platform fit, or early-stage inquiries. Good for when you need direction before picking a service.",
        "Best for early questions",
        "Product or platform guidance",
        "Before you've picked a path",
      ],
      cta: { href: "mailto:contact@turbogixxer.com", label: "Send Email" },
    },
    {
      title: "Project Review",
      summary: "Need A Technical Read",
      details: [
        "For unusual combinations or builds where the path isn't clear yet. We'll look at the details and tell you what fits.",
        "Complex or unusual builds",
        "Unclear between dyno and remote",
        "Free, no commitment",
      ],
      cta: { href: "/contact", label: "Start Review" },
    },
    {
      title: "Ready For Intake",
      summary: "Ready To Book",
      details: [
        "Platform, mods, and goals are locked in. Skip the back-and-forth and go straight to the intake form.",
        "Known platform and mods",
        "Clear goals",
        "Ready for structured intake",
      ],
      cta: { href: "/contact", label: "Go To Booking" },
    },
  ],
  expectations: [
    {
      title: "What to send",
      body: "Vehicle, ECU or platform, fuel, mods, and what you want out of the tune. The more specific, the faster we can point you in the right direction.",
    },
    {
      title: "What to expect",
      body: "A direct, technical response. No upsells, no generic answers - just the right next step for your build.",
    },
  ],
  finalCta: {
    title: "Not sure which to pick?",
    summary: "Start with contact. We'll route you from there.",
    primaryCta: { href: "mailto:contact@turbogixxer.com", label: "Contact TurboGixxer" },
    secondaryCta: { href: "/contact", label: "Start Booking" },
  },
};

export const buildsPageContent: BuildsPageContent = {
  introLabel: "Curated Proof",
  introTitle: "Selected builds that show the kind of work this shop is known for.",
  introBody:
    "The builds page is intentionally selective. It should feel like proof of method and platform familiarity, not a noisy archive. The point is to show the level of work TurboGixxer supports across street, drag, and higher-power combinations.",
  credibility: [
    {
      title: "Why this stays curated",
      body: "The site should highlight builds that reinforce trust, technical range, and repeatable results instead of turning into an endless gallery with no filtering.",
    },
    {
      title: "What these builds communicate",
      body: "Platform knowledge, calibration discipline, and a record of work that extends beyond one engine family or one style of customer project.",
    },
  ],
  finalCta: {
    title: "Have a build that needs the right path?",
    summary: "Use the site to confirm fit, then start the conversation with the real project details.",
    primaryCta: { href: "/contact", label: "Discuss Your Build" },
  },
};

export const shopPageContent: ShopPageContent = {
  introLabel: "Curated Storefront",
  introTitle: "Two clear lanes: merch for the brand, Haltech for supported hardware.",
  introBody:
    "The shop should stay narrow and intentional. This is not a generic catalog. It is a controlled storefront for branded goods and a guided hardware lane built around products and platforms the shop actually trusts.",
  guidance: [
    {
      title: "Merch",
      body: "Straightforward branded goods presented cleanly, without turning the site into a cluttered lifestyle shop.",
    },
    {
      title: "Haltech",
      body: "A guided inquiry lane for ECUs and accessories, built for customers who either know the parts they need or want direction before buying.",
    },
  ],
  finalCta: {
    title: "Need help choosing the right lane?",
    summary: "Reach out before ordering if the platform, package, or next step is not clear yet.",
    primaryCta: { href: "/shop/haltech", label: "Shop Haltech" },
    secondaryCta: { href: "/contact", label: "Contact TurboGixxer" },
  },
};

export const merchPageContent: ShopCollectionPageContent = {
  introLabel: "Merch",
  introTitle: "Brand goods presented simply and kept secondary to the tuning work.",
  introBody:
    "Merch exists to support the brand, not to overpower the site. This lane should stay clean, selective, and easy to understand.",
  bullets: [
    "Curated apparel and branded goods only.",
    "Clean presentation without oversized inventory sprawl.",
    "Direct path out to purchase when products are live.",
  ],
  noteLabel: "Scope",
  noteTitle: "Merch should feel intentional, not like a separate business.",
  noteBody:
    "Keep the assortment tight and the experience simple. The primary job of this route is visibility and brand reinforcement, not deep ecommerce complexity.",
  finalCta: {
    title: "Looking for a specific item or drop?",
    summary: "Contact the shop if you need details on current merch availability or upcoming releases.",
    primaryCta: { href: "/contact", label: "Contact" },
    secondaryCta: { href: "/shop", label: "Back To Shop" },
  },
};

export const haltechPageContent: ShopCollectionPageContent = {
  introLabel: "Haltech",
  introTitle: "A guided hardware lane for customers who need the right package, not guesswork.",
  introBody:
    "This route should help both customers who already know the Haltech parts they want and customers who need direction before committing to hardware.",
  bullets: [
    "Curated ECU and accessory visibility only.",
    "Inquiry-first flow for fit, package selection, and next steps.",
    "Built to support serious projects without bloating the storefront.",
  ],
  noteLabel: "How this works",
  noteTitle: "Use contact when the package or platform fit is still unclear.",
  noteBody:
    "The best Haltech conversations start with the car, the power goal, and the features you actually need. This keeps recommendations grounded instead of upsold.",
  finalCta: {
    title: "Need Haltech guidance before buying?",
    summary: "Send the vehicle, goals, and current setup details so the shop can point you toward the correct hardware path.",
    primaryCta: { href: "/contact", label: "Inquire" },
    secondaryCta: { href: "/shop", label: "Back To Shop" },
  },
};
