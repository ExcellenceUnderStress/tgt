import { aboutPageType, bookingPageType, buildsPageType, contactPageType, servicesPageType, shopPageType } from "./documents/pages";
import { buildType, productType, serviceType, shopCollectionType } from "./documents/entities";
import { homepageType } from "./documents/homepage";
import { siteSettingsType } from "./documents/site-settings";
import { ctaType, linkItemType, recognitionItemType, servicePathCardType, socialLinkType } from "./objects/shared";

export const schemaTypes = [
  siteSettingsType,
  homepageType,
  aboutPageType,
  servicesPageType,
  serviceType,
  buildsPageType,
  buildType,
  shopPageType,
  shopCollectionType,
  productType,
  contactPageType,
  bookingPageType,
  ctaType,
  linkItemType,
  recognitionItemType,
  servicePathCardType,
  socialLinkType,
];
