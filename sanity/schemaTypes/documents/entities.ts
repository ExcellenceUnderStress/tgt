import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "shortDescription", title: "Short Description", type: "text" }),
    defineField({ name: "longDescription", title: "Long Description", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "fitCriteria", title: "Fit Criteria", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "prepRequirements", title: "Prep Requirements", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "supportedPlatforms", title: "Supported Platforms", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "pricingNote", title: "Pricing Note", type: "text" }),
    defineField({ name: "cta", title: "CTA", type: "cta" }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
  ],
});

export const buildType = defineType({
  name: "build",
  title: "Build",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image" }),
    defineField({ name: "gallery", title: "Gallery", type: "array", of: [{ type: "image" }] }),
    defineField({ name: "platform", title: "Platform", type: "string" }),
    defineField({ name: "summary", title: "Summary", type: "text" }),
    defineField({ name: "highlights", title: "Highlights", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
    defineField({ name: "sortOrder", title: "Sort Order", type: "number" }),
  ],
});

export const shopCollectionType = defineType({
  name: "shopCollection",
  title: "Shop Collection",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image" }),
    defineField({ name: "featuredProducts", title: "Featured Products", type: "array", of: [{ type: "reference", to: [{ type: "product" }] }] }),
    defineField({ name: "inquiryMode", title: "Inquiry Mode", type: "boolean", initialValue: false }),
    defineField({ name: "sortOrder", title: "Sort Order", type: "number" }),
  ],
});

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "collection", title: "Collection", type: "reference", to: [{ type: "shopCollection" }] }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "priceDisplay", title: "Price Display", type: "string" }),
    defineField({ name: "featuredImage", title: "Featured Image", type: "image" }),
    defineField({ name: "externalUrl", title: "External URL", type: "url" }),
    defineField({ name: "inquiryOnly", title: "Inquiry Only", type: "boolean", initialValue: false }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
    defineField({ name: "sortOrder", title: "Sort Order", type: "number" }),
  ],
});
