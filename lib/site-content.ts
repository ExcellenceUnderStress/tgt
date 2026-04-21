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
    secondaryCta: NavItem;
  };
};

export type AboutPageContent = {
  backgroundLabel: string;
  backgroundTitle: string;
  backgroundBody: string;
  stats: ServiceDetailStat[];
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
    secondaryCta: NavItem;
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
    secondaryCta: NavItem;
  };
};

export type ServicesPricingContent = {
  hero: {
    eyebrow: string;
    title: string;
    summary: string;
  };
  factory: {
    eyebrow: string;
    title: string;
    summary: string;
    flag: string;
    cards: ServicePricingCard[];
    addons: {
      title: string;
      items: ServicePricingAddon[];
    };
  };
  standalone: {
    eyebrow: string;
    title: string;
    summary: string;
    flag: string;
    cards: ServicePricingCard[];
    addons: {
      title: string;
      items: ServicePricingAddon[];
    };
  };
  remote: {
    eyebrow: string;
    title: string;
    summary: string;
    flag: string;
    cards: ServicePricingHighlightCard[];
  };
  policy: {
    eyebrow: string;
    title: string;
    summary: string;
    items: ServicePolicyItem[];
  };
};

export const primaryNavigation: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/builds", label: "Builds" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book" },
];

export const homepageSections = {
  hero: {
    eyebrow: "TurboGixxer Tuning",
    title: "Tuned to drive. Not just to dyno.",
    summary:
      "Dyno and remote EFI tuning for street cars, track builds, and high-power combinations.",
    primaryCta: { href: "/book", label: "Start Booking" },
    secondaryCta: { href: "/services", label: "View Services" },
    location: "Auburn, Washington",
    logo: "/images/logo/1x/desktop-logo-white.png",
    media: "/images/builds/Artboard 1.png",
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
  servicePaths: [
    {
      eyebrow: "In-Person",
      title: "Dyno Tuning",
      description:
        "Tuned at the Auburn shop under real load. You're there for the pulls.",
      bullets: [
        "Auburn, WA",
        "Half or full day",
        "$200 deposit to book",
      ],
      cta: { href: "/book", label: "Book Dyno Session" },
    },
    {
      eyebrow: "Remote",
      title: "Remote E-Tune",
      description:
        "Tuned from your datalogs. Revisions until it's clean.",
      bullets: [
        "Nationwide",
        "Requires datalogging",
        "Typically 5-17 rounds",
      ],
      cta: { href: "/book", label: "Start E-Tune" },
    },
    {
      eyebrow: "Free",
      title: "Project Review",
      description:
        "Not sure what fits? Send the build details, we'll tell you the next step.",
      bullets: [
        "No commitment",
        "Response in 24-48 hours",
        "Good for complex builds",
      ],
      cta: { href: "/book", label: "Submit for Review" },
    },
  ] satisfies HomepageServicePath[],
  featuredBuilds: [
    {
      title: "2018 Civic Si - Turbo E85",
      meta: "KTuner Â· 380 WHP",
      image: "/images/builds/Artboard 1.png",
    },
    {
      title: "2014 Mustang GT - Bolt-ons",
      meta: "HP Tuners Â· 445 WHP",
      image: "/images/builds/Artboard 2.png",
    },
    {
      title: "K-Swap EG Hatch - All Motor",
      meta: "Hondata Â· 240 WHP",
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
    },
    {
      title: "Haltech",
      description:
        "Curated ECUs and accessories we trust.",
      cta: { href: "/shop/haltech", label: "View Haltech" },
      image: "/images/brands/haltech-light.svg",
    },
  ] satisfies HomepageShopLane[],
  brands: [
    {
      name: "EcuMaster",
      logo: "/images/brands/Company logo/EcuMaster/Company=EcuMaster, Dark Mode=True.svg",
    },
    {
      name: "Haltech",
      logo: "/images/brands/Company logo/Haltech/Company=Haltech, Dark Mode=True.svg",
    },
    {
      name: "Holley EFI",
      logo: "/images/brands/Company logo/HolleyEfi/Company=HolleyEfi, Dark Mode=True.svg",
    },
    {
      name: "Hondata",
      logo: "/images/brands/Company logo/Hondata/Company=Hondata, Dark Mode=True.svg",
    },
    {
      name: "HP Tuners",
      logo: "/images/brands/Company logo/HpTuners/Company=HpTuners, Dark Mode=True.svg",
    },
    {
      name: "MegaSquirt",
      logo: "/images/brands/Company logo/MegaSquirt/Company=MegaSquirt, Dark Mode=True.svg",
    },
    {
      name: "MoTeC",
      logo: "/images/brands/Company logo/Motec/Company=Motec, Dark Mode=True.svg",
    },
  ] satisfies HomepageBrand[],
  finalCta: {
    title: "TELL US WHAT YOU'RE BUILDING.",
    summary:
      "The build, the platform, and what you want out of it. We'll take it from there.",
    primaryCta: { href: "/book", label: "Start Your Project" },
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
      cta: { href: "/services/dyno", label: "View Dyno" },
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
      cta: { href: "/services/remote", label: "View Remote" },
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
    primaryCta: { href: "/book", label: "Start Booking" },
    secondaryCta: { href: "/contact", label: "Contact" },
  },
};

export const servicesPricingContent: ServicesPricingContent = {
  hero: {
    eyebrow: "Services & Pricing",
    title: "Services & Pricing",
    summary:
      "Tuning for street cars, track builds, and race programs. Factory ECU pricing includes licensing credits.",
  },
  factory: {
    eyebrow: "Category A: Factory ECU Tuning",
    title: "Factory ECU Tuning",
    summary: "HP Tuners and Hondata platforms. Best for street cars and bolt-on builds.",
    flag: "Street / Bolt-Ons",
    cards: [
      {
        title: "GM",
        subtitle: "1999 - 2020+",
        rows: [
          { label: "1999 - 2016", value: "$750" },
          { label: "2017 - 2020+", value: "$850" },
        ],
        footer: "Licensing credits included",
      },
      {
        title: "Ford",
        subtitle: "1987 - 2024",
        rows: [
          { label: "1987 - 2017", value: "$750" },
          { label: "2018 - 2024", value: "$850" },
        ],
        footer: "Licensing credits included",
      },
      {
        title: "Dodge / Mopar",
        subtitle: "2003 - 2024",
        rows: [
          { label: "2003 - 2014", value: "$750" },
          { label: "2015 - 2024", value: "$850 - $1,050" },
        ],
        footer: "Licensing credits included. 2018+ requires PCM Unlock ($350) + Bypass ($80).",
      },
      {
        title: "Honda (Hondata)",
        subtitle: "S300 / KPro / FlashPro",
        rows: [
          { label: "S300", value: "$550" },
          { label: "KPro / FlashPro", value: "$650" },
        ],
        footer: "Licensing credits included",
      },
    ],
    addons: {
      title: "Available Add-ons",
      items: [
        { label: "Flex Fuel", value: "+$100" },
        { label: "TCM Unlock (GM)", value: "+$350" },
      ],
    },
  },
  standalone: {
    eyebrow: "Category B: Standalone ECU Tuning",
    title: "Standalone ECU Tuning",
    summary: "Full ECU control for race builds and high-power street cars.",
    flag: "Race / Serious Street",
    cards: [
      {
        title: "Standard Platforms",
        subtitle: "Haltech, Holley, MaxxECU, Megasquirt, Link, ECU Master",
        rows: [
          {
            label: "Base Tune",
            value: "$750",
            detail: "Includes initial setup and full map calibration",
          },
          {
            label: "Race Package",
            value: "+$500",
            detail: "SFWD/Drag/Road Race strategies + 1 local track visit",
          },
        ],
      },
      {
        title: "MoTeC",
        subtitle: "M1 Series / Advanced packages",
        badge: "Premium",
        rows: [
          {
            label: "Base Tune",
            value: "$1,000 - $1,500",
            detail: "Varies by package complexity",
          },
          {
            label: "Race Package",
            value: "+$800",
            detail: "Launch, anti-lag, traction control + 1 local track visit",
          },
        ],
      },
    ],
    addons: {
      title: "Standalone Add-ons",
      items: [
        { label: "Traction Control Setup", value: "+$250" },
        { label: "Flex Fuel", value: "+$100" },
        { label: "Dash Setup (Standard)", value: "+$200" },
        { label: "Dash Setup (MoTeC)", value: "+$1,000" },
      ],
    },
  },
  remote: {
    eyebrow: "Category C: Remote & Support",
    title: "Remote Tuning & Track Support",
    summary: "For out-of-state customers and on-site race support",
    flag: "Remote / Support",
    cards: [
      {
        title: "Remote Tuning",
        price: "$500",
        subtitle: "Most factory ECU and standalone platforms",
        body: "E-tune via datalogs. Multiple revisions included until dialed in.",
      },
      {
        title: "Remote Tuning (MoTeC)",
        price: "$1,000",
        subtitle: "M1 Series",
        body: "Remote calibration for MoTeC systems with datalog support.",
      },
      {
        title: "Track Support",
        price: "$250/hr",
        subtitle: "4-hour minimum (local)",
        body: "Travel rate: $1,650/day + travel & lodging costs.",
      },
    ],
  },
  policy: {
    eyebrow: "Booking Policy",
    title: "Booking & Policy",
    summary: "What to know before scheduling your appointment.",
    items: [
      {
        title: "Deposit Required",
        body: "A $200 non-refundable deposit is required to secure all appointments. This applies to dyno sessions, e-tunes, and track support.",
      },
      {
        title: "What's Included",
        body: "All Factory ECU pricing includes licensing credits. Standalone and remote tunes include multiple revisions until the tune is dialed in for your setup.",
      },
      {
        title: "Not Sure What You Need?",
        body: "Reach out first. We'll help you pick the right service for the build.",
      },
    ],
  },
};

export const routeHeroes: Record<string, RouteHero> = {
  about: {
    eyebrow: "About",
    title: "Seventeen years tuning cars that have to perform.",
    summary:
      "Kenny Sampson has been calibrating EFI systems since Florida, through Speed Factory Racing, and now independently out of Auburn, WA.",
    primaryCta: { href: "/contact", label: "Contact" },
    secondaryCta: { href: "/book", label: "Book" },
  },
  services: {
    eyebrow: "Service Paths",
    title: "Clear service lanes for dyno sessions, remote tuning, and project review.",
    summary:
      "This page should help customers self-select the right path without burying them in filler copy or unqualified scheduling.",
    primaryCta: { href: "/book", label: "Start Booking" },
    secondaryCta: { href: "/services/remote", label: "Remote Details" },
  },
  dyno: {
    eyebrow: "Dyno Tuning",
    title: "In-person calibration for local customers and travel-in builds.",
    summary:
      "The dyno page will explain prep requirements, fit, and the review-first booking expectations before a session is confirmed.",
    primaryCta: { href: "/book", label: "Book Dyno" },
    secondaryCta: { href: "/contact", label: "Contact" },
  },
  remote: {
    eyebrow: "Remote Tuning",
    title: "Revision-based e-tuning centered on datalogs, communication, and control.",
    summary:
      "This route should position remote tuning as a serious iterative process rather than a one-file download transaction.",
    primaryCta: { href: "/book", label: "Start Remote Intake" },
    secondaryCta: { href: "/contact", label: "Contact" },
  },
  builds: {
    eyebrow: "Featured Builds",
    title: "Proof through selected projects, platforms, and outcomes.",
    summary:
      "The builds page will stay curated, image-led, and brand-aligned instead of turning into an endless catalog.",
    primaryCta: { href: "/contact", label: "Discuss Your Build" },
    secondaryCta: { href: "/book", label: "Book" },
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
    secondaryCta: { href: "/book", label: "Start Booking" },
  },
  contact: {
    eyebrow: "Contact",
    title: "Get In Touch.",
    summary: "Questions, project review, or ready to book - start here.",
    primaryCta: { href: "/contact", label: "Submit Inquiry" },
    secondaryCta: { href: "/book", label: "Go To Booking" },
  },
  booking: {
    eyebrow: "Book",
    title: "Tell us about the build.",
    summary:
      "Three paths, one short form. Pick the one that fits, send the details, we'll take it from there.",
    primaryCta: { href: "/book", label: "Begin Intake" },
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
      primaryCta: { href: "/book", label: "Book Dyno" },
      secondaryCta: { href: "/contact", label: "Contact" },
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
      primaryCta: { href: "/book", label: "Start Remote Intake" },
      secondaryCta: { href: "/contact", label: "Contact" },
    },
  },
};

export const aboutPageContent: AboutPageContent = {
  backgroundLabel: "Background",
  backgroundTitle: "Florida, Speed Factory, and now.",
  backgroundBody:
    "Hands-on tuning started in Florida - learning how different combinations actually behave. From 2016 to 2020, Kenny was the primary tuner at Speed Factory Racing in Tacoma, running competitive Honda drag programs including the former world's fastest FWD quarter-mile car. TurboGixxer is the independent shop that experience built.",
  stats: [
    { label: "Experience", value: "17+ years in EFI calibration" },
    { label: "Speed Factory Racing", value: "Primary tuner, 2016-2020" },
    { label: "Track results", value: "World-record Honda drag builds" },
  ],
  approachLabel: "Approach",
  approachTitle: "Conservative timing. Drivability first. No black boxes.",
  approachItems: [
    "Safe, reliable power beats empty peak numbers.",
    "Drivability and throttle response are part of the result, not extras.",
    "Tunes start conservative and refine through datalogs and observation.",
    "You should understand what's happening in your car. No mystery files.",
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
    secondaryCta: { href: "/book", label: "Start Booking" },
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
      cta: { href: "/book", label: "Start Review" },
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
      cta: { href: "/book", label: "Go To Booking" },
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
    secondaryCta: { href: "/book", label: "Start Booking" },
  },
};


