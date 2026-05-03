# TurboGixxer V2 Prompt Pack

These prompts are meant to live alongside the planning docs so AI tools can be guided by the same source-of-truth documents.

## How To Use

Before using any prompt:

1. Attach or reference these docs:
   - `docs/brand-brief.md`
   - `docs/site-map.md`
   - `docs/homepage-wireframe.md`
   - `docs/booking-flow.md`
2. Tell the AI to treat those files as the project brief.
3. Paste the prompt that matches the current task.
4. Keep the AI focused on one phase at a time.

## Prompt Files

- `repo-bootstrap.md`
- `homepage-build.md`
- `tokens-style-dictionary.md`
- `gsap-direction.md`

## General Prompting Rules

- Tell the AI what phase it is working on.
- Tell the AI what files are the source of truth.
- Tell the AI what not to overbuild.
- Tell the AI whether to plan only or actually implement.
- Ask for file-by-file output only when needed.

## Recommended System Reminder

Use this short instruction before task prompts:

`Use the Markdown files in /docs as the project source of truth. Do not invent product scope beyond those documents. Prefer clean, production-minded decisions over speculative features.`
