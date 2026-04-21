# Prompt: Sanity Setup

Use this when setting up Sanity for V2.

## Prompt

You are setting up Sanity for TurboGixxer V2.

Use these files as the source of truth:

- `docs/brand-brief.md`
- `docs/site-map.md`
- `docs/booking-flow.md`
- `docs/sanity-schema-outline.md`

Sanity role:

- Let the customer edit and reorganize content safely
- Feel like a modern WordPress replacement
- Not control animations, layout internals, or design tokens

What I want from you:

1. Create the Sanity schema structure based on the schema outline.
2. Keep the content model controlled, not overly flexible.
3. Support homepage editing, services, builds, shop collections, products, contact content, and booking content.
4. Recommend a simple editor experience.
5. Avoid a freeform page builder unless there is a strong reason.

Important constraints:

- Editors can reorder approved sections, featured items, and entries.
- Editors should not be able to break layout with arbitrary content structures.
- Keep schema naming clear and scalable.
- Keep V2 focused on the actual sitemap.

When you answer:

- List the document types and object types first.
- Then create the schema files.
- Then explain how editors will use them in practice.
