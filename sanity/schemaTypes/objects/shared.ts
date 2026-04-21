import { defineArrayMember, defineField, defineType } from "sanity";

export const ctaType = defineType({
  name: "cta",
  title: "CTA",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "href", title: "Href", type: "string" }),
  ],
});

export const linkItemType = defineType({
  name: "linkItem",
  title: "Link Item",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "href", title: "Href", type: "string" }),
  ],
});

export const recognitionItemType = defineType({
  name: "recognitionItem",
  title: "Recognition Item",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "value", title: "Value", type: "string" }),
  ],
});

export const servicePathCardType = defineType({
  name: "servicePathCard",
  title: "Service Path Card",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "summary", title: "Summary", type: "text" }),
    defineField({ name: "cta", title: "CTA", type: "cta" }),
    defineField({
      name: "qualifiers",
      title: "Qualifiers",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
});

export const socialLinkType = defineType({
  name: "socialLink",
  title: "Social Link",
  type: "object",
  fields: [
    defineField({ name: "platform", title: "Platform", type: "string" }),
    defineField({ name: "href", title: "Href", type: "url" }),
  ],
});
