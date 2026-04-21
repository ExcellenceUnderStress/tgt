# TurboGixxer V2

Minimal starter scaffold for the TurboGixxer V2 frontend:

- Next.js App Router with TypeScript
- route skeletons from the approved sitemap
- brand-driven base layout and homepage shell
- Style Dictionary build sourced from `_Primitives/Style.tokens.json`
- controlled Sanity schema placeholders

## Images

Site images should live in `public/images/` with route-oriented subfolders:

- `public/images/home/`
- `public/images/builds/`
- `public/images/shop/`
- `public/images/about/`

Reference them from the app with root-relative paths such as `/images/home/hero-poster.jpg`.

## Tokens

The active token source is `_Primitives/Style.tokens.json`.

The current build uses Style Dictionary to generate `styles/generated/tokens.css` from that file. Older exported token folders and loose light/dark token files are no longer part of the active pipeline.

## Commands

```bash
npm install
npm run dev
```

Run `npm run tokens` manually only when `_Primitives/Style.tokens.json` changes and you need to refresh `styles/generated/tokens.css`.

## Scope

This scaffold intentionally avoids:

- full ecommerce implementation
- booking backend logic
- arbitrary CMS page builders
- full GSAP timelines before the homepage structure is settled
