# Prompt: GSAP Direction

Use this when planning or implementing major motion work.

## Prompt

You are defining the GSAP motion system for TurboGixxer V2.

Use these files as the source of truth:

- `docs/brand-brief.md`
- `docs/homepage-wireframe.md`
- `docs/site-map.md`

Project intent:

- This site should feel highly crafted and visually ambitious
- Motion should be a differentiator
- The brand already has recognition, so the animation must feel mature and intentional
- The result should be cinematic and technical, not chaotic

Creative direction:

- Theme: `Legacy Under Load`
- Motion language: force, control, engineering, pressure, refinement

What I want from you:

1. Propose the motion system for the homepage and major pages.
2. Identify which sections deserve high-complexity GSAP work.
3. Identify which sections should stay restrained.
4. Recommend how to structure animation code cleanly in a React or Next.js app.
5. Respect performance, cleanup, and reduced-motion needs.

Important constraints:

- Do not animate every block.
- Do not make booking, contact, or shop interactions harder to use.
- Use GSAP where it creates identity and memorability.
- Keep the motion system modular and maintainable.

When you answer:

- Start with the motion principles.
- Then map motion intensity by section.
- Then propose a file structure for animation logic.
- Then give an implementation approach for React and Next.js.
