# Alert Energy Website -- Handover Document

**Date:** March 23, 2026
**Prepared by:** Bhavna Sharma (via Claude Cowork session)
**For:** Claude Code continuation of website build
**Repo:** git@github.com:bhavnasharma01/Alert-Energy.git

---

## 1. Business Context

Alert Energy is an energy consulting firm founded in 2014. The firm serves utilities, engineering firms, and building owners across North America, specializing in building energy services.

### Core Service Areas

- **Energy Accounting:** M&V (Measurement & Verification), regulated benchmarking, metering, utility bill analysis
- **Energy Economics:** Program design, evaluation (EM&V), procurement design, energy systems planning
- **Auditing, Testing & Commissioning:** Full building energy audits and commissioning services
- **Regulations, Permitting & Certifications:** Navigating energy regulations across jurisdictions
- **Health & Safety Compliance:** Ensuring projects meet health and safety standards
- **Trusted Network:** Vetted professionals covering the complete building and project lifecycle from discovery/origination to planning, design, project management, commissioning, and testing

### Notable Clients

- Westfield Properties (multi-property portfolio energy compliance)
- Macy's (enterprise-scale energy accounting and benchmarking)
- Mandarin Oriental Hotels (premium hospitality energy management)

### Current Campaign Focus

The immediate marketing push targets **building owners who need help with regulated energy benchmarking** in five cities with upcoming compliance deadlines:

| City | Deadline | Regulation |
|------|----------|------------|
| Washington, D.C. | May 1, 2026 | BEPS (Building Energy Performance Standards) |
| Chicago, IL | June 1, 2026 | Energy Benchmarking Ordinance (Chapter 18-4) |
| Denver, CO | June 1, 2026 | Energize Denver |
| Vancouver, BC | June 1, 2026 | Building Benchmark BC |
| Toronto, ON | July 1, 2026 | EWRB / EGPS |

The strategy is a "compliance wedge" -- lead with benchmarking as a specific, urgent service, then expand clients into Alert Energy's full lifecycle offering.

### Key Positioning

- "Benchmarking is a requirement. Accuracy is an investment."
- "Optimizing Energy Since 2014"
- Not a low-cost data entry filing mill -- M&V experts who apply IPMVP standards
- Institutional-grade precision (proven with Tier 1 clients) now available to all building owners
- City-specific expertise, not a one-size-fits-all template

---

## 2. What Has Been Built

A complete Phase 1 Astro + Tailwind CSS static site with 4 pages, fully compiling and verified.

### Tech Stack

- **Framework:** Astro (v6.x) -- static site generator
- **Styling:** Tailwind CSS (v3.4.x) with custom theme
- **Fonts:** Google Fonts -- Playfair Display (headings/serif) + Inter (body/sans-serif)
- **Deployment target:** GitHub Pages, Netlify, or Vercel (static output to `dist/`)
- **Build command:** `npm install && npm run build`
- **Publish directory:** `dist/`

### File Structure

```
alert-energy-site/
  astro.config.mjs          # Astro config with Tailwind integration, site URL set to alertenergy.net
  tailwind.config.mjs        # Custom color palette, font families
  package.json               # Dependencies and scripts (dev, build, preview)
  package-lock.json
  .gitignore                 # Excludes node_modules/, dist/, .astro/, .DS_Store
  src/
    layouts/
      BaseLayout.astro       # Shared layout: nav, footer, meta tags, mobile menu, Google Fonts
    pages/
      index.astro            # Home page
      benchmarking.astro     # Benchmarking services deep dive
      about.astro            # Company story, capabilities, clients
      contact.astro          # Lead capture form + Calendly placeholder
```

### Design System (Placeholder -- Easy to Swap)

**Color Palette:**
- Navy primary: #1B2A4A (navy-800 in Tailwind config)
- Full navy scale: 50 through 900 defined in tailwind.config.mjs
- Amber accent: #D97706 (amber-600) for CTAs and highlights
- Backgrounds alternate between white and slate-50
- Dark sections use navy-800

**Typography:**
- Headings: Playfair Display (serif) -- font-heading class
- Body: Inter (sans-serif) -- font-body class
- Base size: 12pt (24 in Tailwind's size units)

**Design Approach:** Corporate-professional. Clean, serious, trustworthy. Navy + white + amber. Plenty of white space, card-based layouts with subtle borders, rounded corners (rounded-xl).

**Logo:** Placeholder only -- a navy square with amber "A" letter. Needs real logo.

---

## 3. Page-by-Page Details

### Home (index.astro)

Sections in order:
1. **Hero** -- Navy background with subtle grid pattern. Headline, subheadline, two CTA buttons ("Book Your Compliance Review" primary, "See How We Work" secondary outline)
2. **Compliance Clock** -- 5-column grid showing each city's deadline date with countdown badges ("~39 days left", etc.). NOTE: The day counts are hardcoded and will need updating or making dynamic.
3. **Trust Pillars** -- 3 cards: M&V Rigor, City-Specific Expertise, Full Building Lifecycle. Each has an icon, heading, and paragraph.
4. **Client Trust Band** -- Westfield, Macy's, Mandarin Oriental with brief descriptions. Text only (no logo images yet).
5. **How We Work** -- 4-step process: Discovery Call, Data Collection, Analysis & Filing, Report & Advise. Numbered circles with descriptions.
6. **Bottom CTA** -- Navy background. "Your deadline is approaching." with amber button.

### Benchmarking (benchmarking.astro)

Sections in order:
1. **Page Hero** -- "Regulated Benchmarking. Done Right."
2. **What Is Regulated Benchmarking** -- Two-column: explainer text + "Common Challenges We Solve" card with 5 warning-icon items
3. **City-Specific Expertise** (id="cities") -- 5 blocks, one per city. Each has a city code badge (DC, CHI, DEN, VAN, TOR), deadline, regulation name, and a detailed paragraph about that jurisdiction's unique requirements:
   - DC: BEPS compliance, performance standards beyond reporting
   - Chicago: Accredited professional verification requirement (Ch. 18-4)
   - Denver: Energize Denver performance targets, escalating penalties
   - Vancouver: Building Benchmark BC, NECB, cross-border expertise
   - Toronto: EWRB + EGPS layered provincial/municipal requirements
4. **Technical Edge** -- 3 cards: M&V Core (IPMVP standards), Risk & Compliance Integration, 12 Years of Accountability
5. **Core to Canopy Table** -- Two-column table mapping campaign services to full lifecycle services
6. **Bottom CTA** -- "Not sure if your previous filings are accurate?"

### About (about.astro)

Sections in order:
1. **Hero** -- "Optimizing Energy Since 2014."
2. **Our Story** -- Two-column: narrative text (left) + stats grid + team quote card (right). Stats: 12+ Years, 5 City Markets, 3 Countries, Tier 1 Portfolio
3. **Capabilities Grid** (id="services") -- 6 cards covering all service areas: Energy Accounting, Energy Economics, Auditing/Testing/Commissioning, Regulations & Permitting, Health & Safety, Trusted Network
4. **Notable Clients** -- 3 cards with Westfield, Macy's, Mandarin Oriental + descriptions
5. **Bottom CTA** -- "Ready to work with us?"

### Contact (contact.astro)

Sections in order:
1. **Hero** -- "Book Your Compliance Review"
2. **Form + Sidebar** -- 3:2 grid layout
   - **Left (form):** Fields for Full Name*, Email*, Phone, Company, Building Location* (dropdown with 5 cities + Other), Building Size (dropdown with ranges), Compliance Status (dropdown: first-time, filed before, unsure, overdue), free-text "Tell Us More", Submit button
   - **Right (sidebar):** "Prefer to Reach Out Directly?" card with email, "What to Expect" 3-step card, deadline reminder card (amber background)
   - **Success state:** Hidden div (id="form-success") that shows on submission with thank-you message + Calendly link
3. **Calendly Section** (id="calendly") -- Placeholder with instructions for embedding Calendly widget

---

## 4. What Still Needs to Be Done

### Immediate (Before Launch)

1. **Push to GitHub** -- The sandboxed environment could not push. Run these commands from a local terminal:
   ```bash
   cd /path/to/alert-energy-site
   git init && git branch -m main
   git remote add origin git@github.com:bhavnasharma01/Alert-Energy.git
   git add .gitignore astro.config.mjs package.json package-lock.json tailwind.config.mjs src/
   git commit -m "Initial Alert Energy website"
   git push -u origin main
   ```

2. **Formspree Setup** -- The contact form action is set to `https://formspree.io/f/YOUR_FORM_ID`. Create a Formspree account (free tier), create a form, and replace `YOUR_FORM_ID` in `src/pages/contact.astro`. Alternative: Netlify Forms if deploying on Netlify.

3. **Calendly Integration** -- In `src/pages/contact.astro`, the Calendly section has a placeholder. Replace with actual Calendly embed snippet. The success message after form submission also links to `#calendly`.

4. **Deploy** -- Connect GitHub repo to Netlify, Vercel, or enable GitHub Pages. Build command: `npm install && npm run build`. Publish dir: `dist/`.

5. **Domain** -- Point alertenergy.net DNS to the deployment platform.

6. **Make Compliance Clock Dynamic** -- The deadline countdown badges on the home page are hardcoded ("~39 days left" etc.). Either update them manually before launch or make them calculate dynamically with a small client-side script.

### Phase 2 (4-6 weeks post-launch)

7. **City-Specific Landing Pages** -- Create individual pages at `/dc`, `/chicago`, `/denver`, `/vancouver`, `/toronto` for SEO and targeted outreach campaigns. These should expand on the city blocks currently on the benchmarking page.

8. **Blog/Insights Section** -- Add an Astro content collection for blog posts. Start with 2-3 posts on benchmarking deadlines, common compliance mistakes, and regulation changes.

9. **Case Studies Page** -- Dedicated page with more detailed client stories (pending client approval for details).

10. **Real Brand Assets** -- Replace placeholder logo, confirm color palette, add any existing brand guidelines. The current navy/amber palette is a placeholder.

### Phase 3 (As Business Grows)

11. **Compliance Risk Scorecard** -- An interactive tool (short questionnaire: city, building size, last filing date, etc.) that generates a personalized compliance summary and captures lead data. More valuable than a simple "check your deadline" dropdown.

12. **Full Services Page** -- Expanded page for the broader service offering (energy economics, commissioning, etc.) targeting utilities and engineering firms.

13. **Client Portal** -- If moving toward the hybrid approach discussed in the working notes, add a simple client status page where building owners can check their filing progress.

14. **Resource Library** -- Downloadable guides, regulatory summaries, templates.

---

## 5. Key Technical Notes

- **Astro v6** is being used. All pages are `.astro` files using Astro's component syntax (frontmatter between `---` fences, HTML-like template below).
- **Tailwind custom theme** is in `tailwind.config.mjs`. Custom colors (navy scale, amber) and custom font families (heading, body) are defined there. All pages use these custom utility classes.
- **No JavaScript framework** beyond what Astro provides. The only client-side JS is the mobile menu toggle (in BaseLayout) and a form submission handler stub (in contact page).
- **Static output** -- `astro build` produces pure HTML/CSS in `dist/`. No server-side rendering needed.
- **Google Fonts** are loaded via `<link>` tags in BaseLayout.astro head.
- The site is responsive with mobile-first Tailwind breakpoints (sm, md, lg).
- No images are used yet (no logo files, no photos). Client logos are text-only. Icons are inline SVGs.

---

## 6. Related Context

There are additional working documents in the parent `Benchmarking Alert/` folder:

- `Alert Energy - Working Notes & Idea Tracker.md` -- Extensive notes from a previous discovery session covering the benchmarking business concept, 3 solution paths (plugin-only, full web app, hybrid), recommended sequencing, target jurisdictions, planned plugin commands, workflow analysis, risks, and open questions for a discovery call scheduled for Thursday March 26, 2026.
- `Alert Energy - Product Discovery Brief.docx` -- Product discovery brief (binary format).
- `Alert Energy - Solution Approaches Comparison.html` -- Visual comparison of the 3 solution paths.
- `Alert Energy - Workflow & AI Opportunity Map.html` -- Visualization of the 20-step benchmarking workflow and where AI can help.

These documents provide deeper context on the business strategy but are not directly needed for the website build.

---

## 7. Design Decisions Log

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Astro + Tailwind | Lightweight, static output, free hosting, easy to extend with interactive components later |
| Design style | Corporate-professional | Targeting building owners and property managers who need to trust a compliance partner |
| Color palette | Navy + amber (placeholder) | Navy reads as established/trustworthy, amber provides warmth and urgency for CTAs |
| Typography | Playfair Display + Inter | Serif headings add gravitas, clean sans-serif body for readability |
| Homepage strategy | "Compliance wedge" | Lead with benchmarking urgency, then reveal full capabilities |
| Lead capture | Form + Calendly (both) | Email notification to team AND self-service booking for prospects |
| Phased rollout | 3 phases | Start lean with 4 pages, add city landing pages and blog next, then expand to full services |
| Content tone | Authoritative but accessible | Balance technical credibility (M&V, IPMVP) with approachable language for building owners |

---

## 8. Content Guidelines

- No em dashes -- use double hyphens or rewrite sentences to avoid them
- Use "we" voice for Alert Energy (not "they" or "the firm")
- Reference client names (Westfield, Macy's, Mandarin Oriental) near CTAs for trust
- City-specific content should demonstrate local knowledge, not just generic compliance info
- Technical terms (M&V, IPMVP, BEPS, EWRB, EGPS) should be used but briefly explained for non-expert readers
- Always connect benchmarking back to the broader value prop: "this is the first step in understanding your building's energy health"
