export const ECU_PLATFORMS = [
  "HP Tuners",
  "Hondata",
  "Haltech",
  "Holley EFI",
  "MoTeC",
  "Link ECU",
  "ECU Master",
  "MegaSquirt",
  "MaxxECU",
  "AEM",
  "KTuner",
  "Other",
] as const;

export const FUEL_OPTIONS = ["91", "93", "E85", "Race Gas", "Methanol", "Flex", "Other"] as const;

export const GOALS = ["Drivability", "Max Power", "Track", "Drag", "Flex Fuel", "Fix / Diag"] as const;

export const POWER_TARGETS = [
  "Under 300 WHP",
  "300–500 WHP",
  "500–700 WHP",
  "700–1000 WHP",
  "1000+ WHP",
  "Not Sure",
] as const;

export const TIMELINES = ["This Week", "Next 2 Weeks", "This Month", "Flexible", "Just Exploring"] as const;

export const SESSION_TYPES = ["Dyno in Auburn", "Remote", "Not Sure"] as const;
