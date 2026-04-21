# Prompt: Tokens and Style Dictionary

Use this when setting up the token system.

## Prompt

You are setting up the token pipeline for TurboGixxer V2.

Project intent:

- Figma is the source of truth for design decisions
- Style Dictionary is the only token build pipeline
- The website should consume generated CSS variables and related outputs
- The token architecture must stay clean and production-minded

What I want from you:

1. Propose a token folder structure.
2. Propose token naming conventions for primitives, semantics, and themes.
3. Set up Style Dictionary outputs for CSS variables and optional app-friendly exports.
4. Keep the system simple enough to maintain.

Important constraints:

- Do not create multiple competing token pipelines.
- Do not bury page-specific styles inside the token model.
- Prefer semantic tokens between raw values and component usage.
- Keep outputs useful for Next.js and a curated design system.

Recommended outputs:

- CSS variables
- light theme
- dark theme if needed
- optional JS or TS export

When you answer:

- Start with the token taxonomy.
- Then show the folder structure.
- Then show the Style Dictionary config approach.
- Then implement the minimal starter setup.
