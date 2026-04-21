import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "businessName", title: "Business Name", type: "string" }),
    defineField({ name: "primaryEmail", title: "Primary Email", type: "string" }),
    defineField({ name: "primaryPhone", title: "Primary Phone", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "socialLinks", title: "Social Links", type: "array", of: [{ type: "socialLink" }] }),
    defineField({ name: "primaryCTA", title: "Primary CTA", type: "cta" }),
    defineField({ name: "bookingCTA", title: "Booking CTA", type: "cta" }),
  ],
});
