import { defineField, defineType } from "sanity";

const basicPageFields = [
  defineField({ name: "pageTitle", title: "Page Title", type: "string" }),
  defineField({ name: "intro", title: "Intro", type: "text" }),
  defineField({ name: "cta", title: "CTA", type: "cta" }),
];

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    ...basicPageFields,
    defineField({ name: "storyBlocks", title: "Story Blocks", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "philosophyItems", title: "Philosophy Items", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "recognitionItems", title: "Recognition Items", type: "array", of: [{ type: "recognitionItem" }] }),
  ],
});

export const servicesPageType = defineType({
  name: "servicesPage",
  title: "Services Page",
  type: "document",
  fields: [
    ...basicPageFields,
    defineField({ name: "comparisonIntro", title: "Comparison Intro", type: "text" }),
    defineField({ name: "featuredServices", title: "Featured Services", type: "array", of: [{ type: "reference", to: [{ type: "service" }] }] }),
    defineField({ name: "pricingIntro", title: "Pricing Intro", type: "text" }),
    defineField({ name: "processIntro", title: "Process Intro", type: "text" }),
  ],
});

export const buildsPageType = defineType({
  name: "buildsPage",
  title: "Builds Page",
  type: "document",
  fields: [
    ...basicPageFields,
    defineField({ name: "featuredBuildIds", title: "Featured Builds", type: "array", of: [{ type: "reference", to: [{ type: "build" }] }] }),
  ],
});

export const shopPageType = defineType({
  name: "shopPage",
  title: "Shop Page",
  type: "document",
  fields: [
    ...basicPageFields,
    defineField({ name: "merchIntro", title: "Merch Intro", type: "text" }),
    defineField({ name: "haltechIntro", title: "Haltech Intro", type: "text" }),
    defineField({ name: "featuredCollections", title: "Featured Collections", type: "array", of: [{ type: "reference", to: [{ type: "shopCollection" }] }] }),
  ],
});

export const contactPageType = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    ...basicPageFields,
    defineField({ name: "contactInstructions", title: "Contact Instructions", type: "text" }),
    defineField({ name: "contactDetails", title: "Contact Details", type: "array", of: [{ type: "string" }] }),
  ],
});

export const bookingPageType = defineType({
  name: "bookingPage",
  title: "Booking Page",
  type: "document",
  fields: [
    ...basicPageFields,
    defineField({ name: "servicePathOptions", title: "Service Path Options", type: "array", of: [{ type: "servicePathCard" }] }),
    defineField({ name: "disclaimerText", title: "Disclaimer Text", type: "text" }),
    defineField({ name: "expectationsText", title: "Expectations Text", type: "text" }),
  ],
});
