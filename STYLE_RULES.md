# TurboGixxer Tuning — Style Rules

This document is the single source of truth for visual design decisions on this site. Every component, page, and prompt must conform to these rules. If a design need arises that this document does not cover, update this document first, then implement.

---

## Design Direction

Editorial motorsports. Sharp, confident, technical. The visual language is closer to a print racing program or a fabrication shop's portfolio than a SaaS marketing site.

References that are correct: Singer Vehicle Design, Speedhunters editorial, Magnus Walker / Urban Outlaw site, print-era Sport Compact Car magazine layouts.

References that are wrong: Stripe, Linear, Notion, Vercel, any modern SaaS dashboard, Squarespace defaults.

---

## Hard Constraints — Never Violated

1. **Corners are sharp.** `border-radius: 0` on all cards, buttons, tags, inputs, images, containers, and modals. No exceptions. The only acceptable rounding is on genuinely circular elements (avatars, dot indicators).

2. **No soft shadows on cards or containers.** `box-shadow: none` on all card and container components. Separation comes from borders and background contrast, not depth effects. Drop shadows on text are also prohibited.

3. **Buttons are rectangular.** No pill shapes. No `border-radius`. Height set by padding tokens. Primary buttons use the existing accent color (`--tg-color-brand-500`) as a solid rectangle, not a pill.

4. **No gradient backgrounds on cards or sections.** Solid colors only. Gradients are acceptable only on hero image overlays for legibility.

5. **No glow effects, blur effects, or `backdrop-filter` on cards.** Acceptable only on hero overlays.

6. **No emoji. No icon decorations inside cards** unless the icon is the primary content (e.g., a logo strip).

7. **No SaaS-style left-border accent stripes on cards.** The `border-left: 4px solid var(--tg-color-brand-500)` pattern is removed site-wide.

8. **No inner pill containers for tag lines.** Price tags, location tags, and metadata render as inline text with spacing or as bordered rectangles, never pills (`border-radius: 999px` is prohibited on any tag or metadata element).

---

## Token Reference

### Token file location
`styles/generated/tokens.css` — auto-generated, do not edit directly.

### Colors

**Brand palette** (`--tg-color-brand-*`):
- `--tg-color-brand-500: #1b7ea6` — primary accent (cyan/steel blue)
- `--tg-color-brand-400` through `--tg-color-brand-600` — hover/active states

**Neutral grays** — use the theme-aware aliases below in almost all cases:
- `--site-ink` — primary foreground (maps to `--tg-color-gray-950` light / `--tg-color-gray-25` dark)
- `--site-heading` — heading text
- `--site-body-copy` — body text
- `--site-muted-copy` — secondary text
- `--site-subtle-copy` — tertiary / placeholder text

**Surface tokens** (defined in `app/globals.css`):
- `--site-surface-soft` — 3% ink over transparent (lightest fill)
- `--site-surface-panel` — 4% ink (standard card background)
- `--site-surface-strong` — 6% ink (elevated panel)
- `--site-surface-gradient` — linear gradient; permitted only on hero overlays
- `--site-surface-gradient-angled` — angled variant; permitted only on hero overlays

**Border tokens**:
- `--site-border-soft` — 10% ink (default card/container border)
- `--site-border-medium` — 14% ink (emphasized border)

**Semantic**:
- `--tg-color-error-*`, `--tg-color-warning-*`, `--tg-color-success-*` — status scales (25–950)

**Gray families** (raw, use sparingly — prefer theme aliases above):
`gray`, `gray-neutral`, `gray-modern`, `gray-cool`, `gray-blue`, `gray-iron`, `gray-true`, `gray-warm`, `gray-alpha`

**Extended palette** (available but not primary UI colors):
`teal`, `cyan`, `blue-light`, `blue`, `blue-dark`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`, `orange-dark`, `orange`, `yellow`, `moss`, `green-light`, `green`

### Spacing scale

All values from `--tg-space-0` (0) through `--tg-space-480` (1920px):

| Token | Value |
|---|---|
| `--tg-space-0-5` | 2px |
| `--tg-space-1` | 4px |
| `--tg-space-1-5` | 6px |
| `--tg-space-2` | 8px |
| `--tg-space-3` | 12px |
| `--tg-space-4` | 16px |
| `--tg-space-5` | 20px |
| `--tg-space-6` | 24px |
| `--tg-space-8` | 32px |
| `--tg-space-10` | 40px |
| `--tg-space-12` | 48px |
| `--tg-space-16` | 64px |
| `--tg-space-20` | 80px |
| `--tg-space-24` | 96px |
| `--tg-space-32` | 128px |

### Typography
No font-family, font-size, font-weight, or line-height tokens are defined in `tokens.css`. Typography is set via direct CSS in `app/globals.css`. Do not introduce new typeface tokens without a separate token-system update.

### Border-radius
No border-radius tokens are defined. Per Hard Constraint #1, all values should be `0`. Do not introduce `border-radius` tokens.

### Shadows
No shadow tokens are defined in `tokens.css`. Shadow-related semantic variables exist only for the site header (`--site-header-shadow`) and hero sections. Do not introduce card or component shadow tokens.

### Breakpoints
No breakpoint tokens are defined in `tokens.css`. Breakpoints are used as raw values in media queries. The spacing scale doubles as container-width reference (`--tg-space-192` = 768px, `--tg-space-256` = 1024px, `--tg-space-320` = 1280px, `--tg-space-360` = 1440px).

---

## Component Rules

### Cards
```
border: 1px solid var(--site-border-soft)
border-radius: 0
box-shadow: none
background: var(--site-surface-panel)
padding: var(--tg-space-6)
```
- Hover state: border color shift to `--site-border-medium` only — no `transform: scale`, no shadow
- No `backdrop-filter`
- No gradient background
- No left-border accent stripe

### Buttons
```
border-radius: 0
min-height: 3rem
padding: 0 var(--tg-space-5)
```
- **Primary**: `background: var(--tg-color-brand-500)`, `color: var(--tg-color-base-black)`, no `box-shadow`
- **Secondary**: `border: 1px solid var(--site-border-medium)`, transparent fill
- **Tertiary / link**: text + arrow, no container
- All buttons share the same `min-height: 3rem` token

### Tags / Metadata
```
border-radius: 0
```
- Preferred: inline text, monospace or condensed treatment
- Alternative: `border: 1px solid var(--site-border-soft)`, rectangular container
- Never pill-shaped (`border-radius: 999px` is prohibited)

### Inputs / Form Fields
```
border: 1px solid var(--site-border-medium)
border-radius: 0
background: var(--site-surface-soft)
```

### Section Eyebrows
- Uppercase, tracked, `color: var(--tg-color-brand-500)`
- Existing component — do not modify

### Headlines
- Existing condensed display font
- All caps allowed at H1 and H2 only
- No `text-shadow`, no gradient text fills

---

## Layout Rules

### Card Grids
- Default: 3 columns at ≥ `--tg-space-256` (1024px), 2 columns at 768–1023px, 1 column below 768px
- `gap: var(--tg-space-6)`
- Cards in a grid are equal height
- Cards never collapse to a single column on desktop unless explicitly specified

### Hero Sections
- Either: full-bleed image/video background with overlay text, OR split-screen image + text — never a centered text island in dead space
- Headline anchors to a defined corner; centered only when full-bleed and intentional
- Gradient overlays permitted on hero backgrounds for legibility

### Section Spacing
- Vertical rhythm uses `--tg-space-16` (64px) between major sections, `--tg-space-8` (32px) within sections
- Sections are separated by spacing, not by dividers, unless a `<hr>` rule is intentional

---

## Pre-Commit Checklist

Before any visual change is committed, verify in DevTools:

- [ ] Inspect any card → `border-radius: 0px`
- [ ] Inspect any card → `box-shadow: none`
- [ ] Inspect any card → no `backdrop-filter`
- [ ] Inspect any card → no `border-left: 4px` accent stripe
- [ ] Inspect any button → `border-radius: 0px`
- [ ] Inspect any tag or metadata pill → no `border-radius` > 0
- [ ] At 1440px viewport: card grids are 3-up, not stacked
- [ ] At 375px viewport: no horizontal scroll
- [ ] No new tokens introduced without updating this file (palette is closed)

---

## Audit Notes (recorded at file creation — 2026-05-05)

The following violations exist on the current site and are tracked for removal in subsequent passes. **Do not re-introduce these patterns.**

### Violations to fix (do not re-introduce)
1. `.premiumCard` in `components/card-surface.module.css` — `border-radius: max(20px, 1.25rem)`, 6-layer `box-shadow`, `backdrop-filter: blur(14px)`, gradient `background`, `border-left: 4px` accent
2. `.telemetry-card` in `app/globals.css` — `border-radius: 12px`
3. `.service-path-card` in `app/globals.css` — `border-radius: 1.25rem`
4. `.button-primary` / `.button-secondary` / `.site-nav-link` — `border-radius: 999px` (pill)
5. `.telemetry-card-price` — `border-radius: 999px` (price pill inside service cards)

### Tokens in `tokens.css` that contradict these rules
None of the raw palette or spacing tokens in `tokens.css` directly encode forbidden values. All violations are in component CSS. The `tokens.css` file does not need modification — it is a palette, not a component stylesheet.

The following **semantic variables in `app/globals.css`** encode gradients and are permitted only on hero overlays; they must not be applied to cards:
- `--site-surface-gradient`
- `--site-surface-gradient-angled`

---

## How to Use This File

When writing a prompt for any new page, component, or visual change, include this line:

> "Conform to /STYLE_RULES.md. Do not violate any Hard Constraints. If a need arises that this file does not cover, ask before implementing."

When reviewing a code change, run through the Pre-Commit Checklist before approving.
