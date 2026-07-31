# Project architecture

## Purpose

This codebase implements a multi-page consulting marketing site with a clear separation between:

1. **Route composition** (App Router pages)
2. **Presentation components** (UI, layout, sections)
3. **Domain content** (typed data modules)
4. **Cross-cutting utilities** (SEO, validation, motion)

The goal is maintainability for a professional services brochure site: copy and structure can change without rewriting page shells.

## Layering

### `src/app`

- Owns URLs, metadata, loading/error/not-found states, sitemap, robots, and the contact API route.
- Pages stay relatively thin: import section compositions and attach metadata/JSON-LD.
- Hidden portfolio routes (`/portfolio-showcase`, `/portfolio-case-study`) are noindexed and omitted from primary navigation.

### `src/components`

- `ui/`: primitives (Button, Card, Container, Heading, Section, form controls)
- `layout/`: Header, Footer, Logo, SkipToContent
- `sections/`: page-level marketing blocks and interactive widgets (FAQ, filters, CTA band, home composition)
- `forms/`: ContactForm
- `illustrations/`: original SVG/CSS visual compositions (hero cockpit, service icons)

### `src/data`

Single source of truth for:

- Site identity and navigation (`site.ts`)
- Services (`services.ts`)
- Case studies (`case-studies.ts`)
- Stats, process, industries, FAQ, team, timeline (`content.ts`)

### `src/lib`

- `seo.ts`: canonical + Open Graph + Twitter metadata builder
- `json-ld.tsx`: Organization / WebSite / Service structured data
- `validations/contact.ts`: shared Zod schema
- `motion.tsx`: reduced-motion-aware fade-in wrapper
- `utils.ts`: className helper (`clsx` + `tailwind-merge`)

### `src/types`

Shared TypeScript contracts for content models and form values.

## Key design decisions

1. **Content as data** — Repeated marketing copy is not hard-coded across many JSX trees.
2. **Shared validation** — Client and server use the same Zod schema to prevent drift.
3. **Simulated contact success** — Keeps the portfolio deployable without secrets while documenting a clear upgrade path.
4. **Restrained motion** — Framer Motion is used for presence, not decoration spam; `prefers-reduced-motion` short-circuits animations.
5. **Accessibility first** — Skip link, semantic landmarks, focus rings, labeled fields, FAQ button/region pairing, and filter controls using `aria-pressed` toggle buttons.
6. **Portfolio tooling as first-class routes** — Screenshot slides and PDF case study are part of the product surface for Fiverr/portfolio packaging.
7. **Marketing chrome via route group** — `(site)` wraps public pages with Header/Footer; portfolio export routes stay chrome-free.

## Request flow for contact

```text
ContactForm (RHF + Zod)
  → POST /api/contact
    → contactFormSchema.safeParse
      → 400 with field issues OR 200 simulated success payload
```

## Testing strategy

- Vitest/jsdom for component behavior and schema contracts
- Playwright for route smoke coverage and deterministic portfolio asset export

## Extension points

- Swap brand tokens in `globals.css`
- Replace data modules for a real firm
- Wire email/CRM in the contact route handler
- Add CMS later by mapping CMS entries into the existing typed shapes
