# Alert Energy Website

Corporate website for Alert Energy, an energy consulting firm specializing in regulated building energy benchmarking across North America.

**Live site:** https://alertenergy.net

## Quick Start

```bash
npm install --legacy-peer-deps
npm run dev        # Local dev server at http://localhost:4321
npm run build      # Production build to dist/
npm run preview    # Preview production build locally
```

## Tech Stack

- **Framework:** Astro v6 (static site generator)
- **Styling:** Tailwind CSS v3.4 with custom theme
- **Fonts:** Google Fonts (Playfair Display + Inter)
- **Hosting:** Netlify (static output from `dist/`)

## Project Structure

```
alert-energy-site/
  astro.config.mjs          # Astro config, site URL, Tailwind integration
  tailwind.config.mjs        # Custom color palette (navy/amber), font families
  package.json               # Dependencies and scripts
  src/
    layouts/
      BaseLayout.astro       # Shared layout: nav, footer, meta tags, mobile menu
    pages/
      index.astro            # Home page (hero, compliance clock, trust pillars, process)
      benchmarking.astro     # Benchmarking services (city-specific expertise, technical edge)
      about.astro            # Company story, capabilities, notable clients
      contact.astro          # Lead capture form + Calendly placeholder
  docs/
    Architecture.md          # Technical architecture documentation
    Security.md              # Security considerations
    Product.md               # Product strategy and roadmap
    Design.md                # Design system and guidelines
  CHANGELOG.md               # Version history
  HANDOVER.md                # Original handover document from Claude Cowork session
```

## Deployment

The site is deployed to Netlify and served at `alertenergy.net`. Pushing to the `main` branch triggers an automatic build and deploy.

- **Build command:** `npm install --legacy-peer-deps && npm run build`
- **Publish directory:** `dist/`

## Domain

`alertenergy.net` -- DNS managed separately. Point A/CNAME records to Netlify as per their custom domain setup.

## Documentation

See the `docs/` folder for detailed documentation:
- [Architecture](docs/Architecture.md) -- Technical architecture and stack decisions
- [Security](docs/Security.md) -- Security considerations for the static site
- [Product](docs/Product.md) -- Product strategy, phased roadmap, and content plan
- [Design](docs/Design.md) -- Design system, color palette, typography, and guidelines
