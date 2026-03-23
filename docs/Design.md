# Design

## Design Philosophy

Corporate-professional. Clean, serious, trustworthy. The design should convey that Alert Energy is an established, credible consulting firm -- not a startup or a low-cost filing service.

## Color Palette

Defined in `tailwind.config.mjs`:

### Navy (Primary)
| Token | Hex | Usage |
|-------|-----|-------|
| navy-50 | #f0f3f9 | Lightest backgrounds |
| navy-100 | #d9e0ef | Borders, dividers |
| navy-200 | #b3c1df | Hero subtext |
| navy-300 | #8da2cf | Footer text, secondary copy |
| navy-400 | #6783bf | Muted text, labels |
| navy-500 | #4164af | Body text (secondary) |
| navy-600 | #34508c | Nav links, body text |
| navy-700 | #273c69 | Footer borders |
| navy-800 | #1B2A4A | Primary text, dark sections, nav |
| navy-900 | #0f1a2e | Deepest navy |

### Amber (Accent / CTA)
| Token | Hex | Usage |
|-------|-----|-------|
| amber-400 | #FBBF24 | Logo accent, hero highlights |
| amber-500 | #F59E0B | Mid-tone accent |
| amber-600 | #D97706 | CTA buttons, badges, process numbers |
| amber-700 | #B45309 | CTA hover states |

### Supporting Colors
- **White** -- Primary page backgrounds
- **slate-50** -- Alternating section backgrounds
- **slate-100/200** -- Card borders, subtle dividers
- **green-50/600/700/800** -- Form success state
- **red-50/700** -- Passed deadline badges

## Typography

Defined in `tailwind.config.mjs` and loaded via Google Fonts in BaseLayout.

| Role | Family | Weights | Tailwind Class |
|------|--------|---------|----------------|
| Headings | Playfair Display | 600, 700 | `font-heading` |
| Body | Inter | 400, 500, 600, 700 | `font-body` |

- Headings use Playfair Display (serif) for gravitas and authority
- Body text uses Inter (sans-serif) for readability
- Base body class applied globally: `font-body text-navy-800`

## Layout Patterns

### Page Structure
Every page follows: Hero (navy-800 bg) -> Content Sections -> Bottom CTA (navy-800 bg)

### Section Alternation
Sections alternate between `bg-white` and `bg-slate-50` to create visual rhythm. Dark sections use `bg-navy-800`.

### Container
All content constrained to `max-w-6xl mx-auto px-6`.

### Cards
White background, `rounded-xl`, `border border-slate-200`, `shadow-sm` (optional). Padding `p-6` or `p-8`.

### Icons
Inline SVGs from Heroicons (outline style). Displayed in navy-800 circles with amber-400 icons, or in amber-50 backgrounds with amber-600 icons.

## Components

### Navigation (BaseLayout)
- Fixed top, white with backdrop blur
- Desktop: horizontal links + amber CTA button
- Mobile: hamburger menu with slide-down panel
- Logo: navy square with amber "A" (placeholder -- needs real logo)

### Footer (BaseLayout)
- Navy-800 background
- 4-column grid: brand (2 cols), services links, contact links
- Copyright with dynamic year

### CTA Buttons
- Primary: `bg-amber-600 text-white rounded-lg hover:bg-amber-700`
- Secondary/outline: `border-2 border-navy-400 text-navy-200 hover:border-white hover:text-white`

### Compliance Clock Badges
- Upcoming: `bg-amber-50 text-amber-700 rounded-full`
- Passed: `bg-red-50 text-red-700 rounded-full`

## Responsive Breakpoints

Standard Tailwind breakpoints with mobile-first approach:
- Default: mobile
- `sm` (640px): two-column grids
- `md` (768px): desktop nav, multi-column layouts
- `lg` (1024px): wider grids (5-col deadline clock, 5:2 form layout)

## Logo

Currently a placeholder: navy-800 square with rounded-lg corners containing an amber "A" in Playfair Display. **A real logo is needed before public launch.**

## Images

No images are currently used. Client logos are text-only. All icons are inline SVGs. Photographs or illustrations may be added in Phase 2.
