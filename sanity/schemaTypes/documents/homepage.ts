import { defineField, defineType } from "sanity";

export const homepageType = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({ name: "heroHeadline", title: "Hero Headline", type: "string" }),
    defineField({ name: "heroSubheadline", title: "Hero Subheadline", type: "text" }),
    defineField({ name: "heroPrimaryCTA", title: "Hero Primary CTA", type: "cta" }),
    defineField({ name: "heroSecondaryCTA", title: "Hero Secondary CTA", type: "cta" }),
    defineField({ name: "recognitionItems", title: "Recognition Items", type: "array", of: [{ type: "recognitionItem" }] }),
    defineField({ name: "featuredServices", title: "Featured Services", type: "array", of: [{ type: "reference", to: [{ type: "service" }] }] }),
    defineField({ name: "featuredBuilds", title: "Featured Builds", type: "array", of: [{ type: "reference", to: [{ type: "build" }] }] }),
    defineField({ name: "featuredCollections", title: "Featured Collections", type: "array", of: [{ type: "reference", to: [{ type: "shopCollection" }] }] }),
    defineField({ name: "aboutPreview", title: "About Preview", type: "text" }),
    defineField({ name: "finalCTA", title: "Final CTA", type: "cta" }),
  ],
});
