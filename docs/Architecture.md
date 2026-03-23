# Architecture

## Overview

The Alert Energy website is a static site built with Astro and Tailwind CSS. It compiles to pure HTML/CSS with minimal client-side JavaScript, hosted on Netlify.

## Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Astro v6 | Static site generation, component syntax, build pipeline |
| Styling | Tailwind CSS v3.4 | Utility-first CSS with custom theme |
| Fonts | Google Fonts | Playfair Display (headings), Inter (body) |
| Hosting | Netlify | Static hosting, automatic deploys from GitHub |
| Forms | Formspree (planned) | Contact form submission handling |
| Scheduling | Calendly (planned) | Embedded booking widget |

## File Architecture

### Layouts

`src/layouts/BaseLayout.astro` is the single shared layout. It provides:
- HTML document structure with meta tags
- Fixed navigation bar with desktop and mobile variants
- Footer with service links, contact info, and copyright
- Google Fonts loading
- Mobile menu toggle (only client-side JS in the layout)

All pages use BaseLayout via `<BaseLayout title="..." description="...">`.

### Pages

Each `.astro` file in `src/pages/` becomes a route:
- `index.astro` -> `/` (Home)
- `benchmarking.astro` -> `/benchmarking`
- `about.astro` -> `/about`
- `contact.astro` -> `/contact`

Pages are section-based, using full-width sections with alternating backgrounds (white, slate-50, navy-800).

### Configuration

- `astro.config.mjs` -- Astro config with Tailwind integration and site URL (`https://alertenergy.net`)
- `tailwind.config.mjs` -- Custom color palette (navy scale, amber scale) and font families (heading, body)

## Client-Side JavaScript

Minimal by design. Only two scripts exist:
1. **Mobile menu toggle** (in BaseLayout.astro) -- toggles visibility of the mobile nav menu
2. **Form submission handler** (in contact.astro) -- stub for Formspree integration, currently a no-op

## Build Output

`npm run build` produces static HTML/CSS in `dist/`. No server-side rendering, no API routes, no database. The output is deployable to any static hosting provider.

## Deployment Pipeline

1. Code is pushed to `main` branch on GitHub
2. Netlify detects the push and triggers a build
3. Build command: `npm install --legacy-peer-deps && npm run build`
4. Netlify serves the `dist/` directory at `alertenergy.net`

## Future Architecture Considerations

- **City landing pages** (Phase 2): Individual `/dc`, `/chicago`, etc. pages. Can be done as additional `.astro` files or as a dynamic route with Astro content collections.
- **Blog** (Phase 2): Astro content collections with Markdown files in `src/content/blog/`.
- **CMS for partner editing**: Decap CMS (formerly Netlify CMS) or similar git-based CMS to allow non-technical editing.
- **Compliance Risk Scorecard** (Phase 3): Would require a client-side interactive component, potentially using an Astro island with a framework like React or Svelte.
