## Summary

- Rewords the `/services` pricing copy and reorganizes the page into a clearer top-down flow: hero -> "not sure?" prompt -> build-type cheat sheet -> tabs -> consolidated add-ons -> policy -> final intake CTA.
- Adds an accessible, controllable tabs component so a new build-type cheat sheet can pre-select the matching tab and scroll the user to it.
- No color or token changes - reuses existing `--site-*` semantic tokens and the existing brand accent.

## What changed

**Content** (`lib/site-content.ts`)
- New hero: `PRICING` eyebrow / "Transparent pricing by platform." / new subhead.
- En-dashed year ranges, tightened card footers, GM TCM-unlock note moved inline.
- New `prompt`, `cheatSheet`, `addons` (consolidated, single full list), `finalCta` blocks on `ServicesPricingContent`.
- Per-tab add-on lists removed in favor of one full-width strip.
- Policy items reworded to match the new structure.

**Components**
- `components/services-category-tabs.tsx` - controlled-tab support (`activeTab` / `onTabChange`), `role="tabpanel"` + `aria-controls` + `aria-labelledby`, arrow/Home/End keyboard nav, focus management, `id` for scroll target. Per-tab `PricingAddonPanel` removed.
- `components/pricing-cheat-sheet.tsx` (new) - clickable build-type cards that set the active tab and smooth-scroll to the tabs section.
- `components/pricing-prompt-strip.tsx` (new) - small inline "not sure?" prompt with link.
- Existing `PricingCard`, `PricingHighlightCard`, `PricingAddonPanel`, `PricingSectionHeader`, `SectionHeading`, `CtaRow` - reused unchanged.

**Page**
- `app/services/page.tsx` recomposed top-down per the new structure. Now a client component because the cheat sheet and tabs share `activeTab` state.

**Styles** (`app/globals.css`)
- New rules for the prompt strip, cheat-sheet grid/card, and final-CTA wrapper.
- Mobile rule that lets the tab bar scroll horizontally without wrapping.

## Test plan

- [ ] `/services` renders top-down: hero -> prompt strip -> cheat sheet -> tabs -> add-ons -> policy -> final CTA.
- [ ] Clicking a cheat-sheet card switches to the correct tab and scrolls to the tabs section.
- [ ] Tabs are keyboard-navigable: arrow keys move selection, Home/End jump to first/last, focus follows selection.
- [ ] Tab panels announce with screen readers (`role="tabpanel"`, `aria-labelledby`, `aria-controls`).
- [ ] Light and dark mode both render without color regressions.
- [ ] Mobile (<=640px): cheat-sheet collapses to a single column; tab bar scrolls horizontally instead of wrapping.
- [ ] "Start project intake" links to `/book`.
