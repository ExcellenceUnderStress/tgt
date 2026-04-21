# TurboGixxer V2 Sanity Schema Outline

## Sanity Role

Sanity exists to let the customer reword, reorder, and manage structured content without touching code. It should feel closer to a modern WordPress replacement, but it should not control design tokens, motion logic, or layout behavior at a low level.

## What Sanity Should Own

- page copy
- page section ordering
- featured item ordering
- service descriptions
- build entries
- shop collections
- product cards
- contact information
- booking page copy and disclaimers

## What Sanity Should Not Own

- GSAP timelines
- component animation logic
- design tokens
- layout system internals
- visual styling rules

## Recommended Document Types

- `siteSettings`
- `homepage`
- `aboutPage`
- `servicesPage`
- `service`
- `buildsPage`
- `build`
- `shopPage`
- `shopCollection`
- `product`
- `contactPage`
- `bookingPage`

## 1. siteSettings

Purpose:
Global content and shared settings.

Recommended fields:

- businessName
- logo
- primaryEmail
- primaryPhone
- address or location string
- socialLinks
- primaryCTA
- bookingCTA
- footerNavigation

## 2. homepage

Purpose:
Manage homepage copy and featured content.

Recommended fields:

- heroHeadline
- heroSubheadline
- heroPrimaryCTA
- heroSecondaryCTA
- recognitionItems
- featuredServices
- featuredBuilds
- featuredCollections
- aboutPreview
- finalCTA

Recommended editor control:

- reorder featured builds
- reorder featured collections
- toggle optional homepage sections

## 3. aboutPage

Purpose:
Manage legacy and story content.

Recommended fields:

- pageTitle
- intro
- storyBlocks
- philosophyItems
- recognitionItems
- aboutCTA

## 4. servicesPage

Purpose:
Manage services overview page content.

Recommended fields:

- pageTitle
- intro
- comparisonIntro
- featuredServices
- pricingIntro
- processIntro
- servicesCTA

## 5. service

Purpose:
Manage individual services like dyno and remote.

Recommended fields:

- title
- slug
- shortDescription
- longDescription
- fitCriteria
- prepRequirements
- supportedPlatforms
- pricingNote
- CTA
- featured

Expected initial entries:

- Dyno
- Remote

## 6. buildsPage

Purpose:
Manage builds page framing copy.

Recommended fields:

- pageTitle
- intro
- featuredBuildIds
- CTA

## 7. build

Purpose:
Represent a featured build.

Recommended fields:

- title
- slug
- heroImage
- gallery
- platform
- summary
- highlights
- featured
- sortOrder

Optional later:

- detailed story
- specs list

## 8. shopPage

Purpose:
Manage shop landing page content.

Recommended fields:

- pageTitle
- intro
- merchIntro
- haltechIntro
- featuredCollections
- CTA

## 9. shopCollection

Purpose:
Represent a curated collection such as merch or Haltech groups.

Recommended fields:

- title
- slug
- category
- description
- heroImage
- featuredProducts
- inquiryMode
- sortOrder

Suggested categories:

- Merch
- Haltech

## 10. product

Purpose:
Represent a product card or curated item.

Recommended fields:

- title
- slug
- collection
- description
- priceDisplay
- featuredImage
- externalUrl
- inquiryOnly
- featured
- sortOrder

## 11. contactPage

Purpose:
Manage direct-contact page content.

Recommended fields:

- pageTitle
- intro
- contactInstructions
- contactDetails
- CTA

## 12. bookingPage

Purpose:
Manage booking page copy and expectations.

Recommended fields:

- pageTitle
- intro
- servicePathOptions
- disclaimerText
- expectationsText
- successMessages

## Recommended Reusable Objects

Create small reusable object types:

- `cta`
- `linkItem`
- `recognitionItem`
- `servicePathCard`
- `socialLink`
- `seoFields`

## Page Composition Guidance

Keep page composition controlled.

Recommended:
- allow editors to reorder selected sections
- keep section types limited
- use predefined block types instead of fully freeform assembly

This keeps the site editable without making the design unstable.

## Editorial Freedom vs Design Safety

Editors should be able to:

- change text
- swap featured items
- reorder safe sections
- add or remove approved entries

Editors should not be able to:

- break layout with arbitrary custom markup
- invent entirely new layout types from the CMS
- control animation structure

## V2 Recommendation

Launch with a controlled Sanity model.

That means:

- structured documents
- limited section choices
- curated ordering controls
- no over-flexible page builder

This gives the customer WordPress-like editing power without degrading the brand experience.
