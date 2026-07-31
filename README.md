# Meridian Advisory — Boutique Consulting Website

## Project overview

Meridian Advisory is a **self-initiated portfolio concept**: a production-quality, multi-page business website for a fictional boutique consulting company. It demonstrates how a professional services firm can present strategy, operations, analytics, and digital transformation offerings with a premium, approachable visual identity.

The site is built to look like client-ready delivery—not a tutorial template—with typed content modules, reusable UI, accessibility foundations, SEO metadata, tests, and exportable portfolio assets.

## Portfolio concept disclosure

**This is not a real company or client project.**

- **Meridian Advisory** is a fictional brand created for portfolio demonstration.
- All people, team bios, clients, case studies, industries, statistics, and outcomes are **fictional demo content**.
- Contact details on the site (including `hello@meridian-advisory.example`) are labels only—they are not monitored inboxes and do not contain personal contact information.
- Do not interpret illustrative outcomes as guaranteed or verified business results.

## Technology stack

- Next.js (App Router)
- TypeScript (strict mode)
- React
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- ESLint + Prettier
- Vitest + React Testing Library
- Playwright (smoke tests, screenshots, PDF export)

## Architecture

- **App Router pages** under `src/app` own routes, metadata, and composition.
- **Reusable UI** lives in `src/components/ui`, layout chrome in `src/components/layout`, marketing sections in `src/components/sections`, and forms in `src/components/forms`.
- **Business content** is centralized in typed modules under `src/data` (site config, services, case studies, FAQs, team, timeline).
- **Validation** is shared between the contact form and `POST /api/contact` via `src/lib/validations/contact.ts`.
- **SEO helpers** build canonical/Open Graph/Twitter metadata and JSON-LD.

See [PROJECT_ARCHITECTURE.md](./PROJECT_ARCHITECTURE.md) for a deeper walkthrough.

## Folder structure

```text
src/
  app/
    (site)/            # Marketing pages with header/footer
    api/contact/       # Simulated contact handler
    portfolio-showcase/
    portfolio-case-study/
  components/
    forms/
    illustrations/
    layout/
    sections/
    ui/
  data/                # Typed business content
  lib/                 # SEO, motion, utils, validation
  types/
portfolio-assets/
  business-website/    # Generated PNG + PDF portfolio assets
tests/e2e/             # Playwright smoke + asset scripts
scripts/               # Icon generation helpers
```

## Installation

```bash
npm install
npx playwright install chromium
```

## Development commands

```bash
npm run dev          # http://localhost:3000
npm run lint
npm run format
npm run test
npm run test:e2e
npm run build
npm run start
```

## Tests

- **Unit/component:** navigation, FAQ accordion, case-study filtering, contact schema validation, home rendering (`npm run test`)
- **E2E smoke:** all main routes + 404 + contact validation (`npm run test:e2e`)

## Production build

```bash
npm run build
npm run start
```

## Deployment on Vercel

See [DEPLOYMENT.md](./DEPLOYMENT.md). Short version:

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Use default Next.js settings.
4. Deploy.

No environment variables are required for the demo contact flow.

## Form behavior

The contact form validates on the client (React Hook Form + Zod) and again in `src/app/api/contact/route.ts`. Successful submissions return a **simulated success response** with a reference id. Nothing is emailed and no external API keys are required.

### Connecting a real email provider later

1. Create an account with Resend, SendGrid, Postmark, or similar.
2. Add secrets such as `EMAIL_API_KEY` and `CONTACT_TO_EMAIL` in your host environment.
3. In `src/app/api/contact/route.ts`, after `contactFormSchema.safeParse`, send `parsed.data` through the provider SDK or HTTP API.
4. Keep Zod validation as the gate before any external call.
5. Update the privacy policy to describe real retention and processing.

## How to replace the fictional brand

1. Update `src/data/site.ts` (`name`, `tagline`, `description`, `url`, contact labels).
2. Replace copy in `src/data/services.ts`, `src/data/case-studies.ts`, and `src/data/content.ts`.
3. Update the logo text/mark in `src/components/layout/Logo.tsx`.
4. Refresh metadata defaults and JSON-LD helpers if the organization model changes.
5. Remove or rewrite portfolio disclosure notices only if the site becomes a real engagement (and only with truthful content).

## How to customize colors and content

Design tokens live in `src/app/globals.css`:

- `--canvas`, `--surface`, `--surface-muted`
- `--navy`, `--cobalt`, `--cobalt-dark`
- `--amber`, `--amber-dark`

Typography uses Fraunces (display) and Source Sans 3 (body) via `src/app/layout.tsx`.

## How to generate portfolio screenshots

```bash
npm run portfolio:screenshots
```

This opens the hidden route `/portfolio-showcase` and saves:

- `portfolio-assets/business-website/01-business-website-cover.png`
- `portfolio-assets/business-website/02-desktop-pages.png`
- `portfolio-assets/business-website/03-mobile-responsive.png`
- `portfolio-assets/business-website/04-features-and-technology.png`
- `portfolio-assets/business-website/05-design-system.png`

## How to export the case-study PDF

```bash
npm run portfolio:pdf
```

Output:

- `portfolio-assets/business-website/business-website-case-study.pdf`

Generate both asset types:

```bash
npm run portfolio:assets
```

## Available routes

| Route | Purpose |
| --- | --- |
| `/` | Home |
| `/about` | Company story and demo team |
| `/services` | Four detailed service practices |
| `/case-studies` | Fictional scenarios + filters |
| `/contact` | Validated demo contact form |
| `/privacy` | Privacy policy |
| `/portfolio-showcase` | Hidden 5-slide presentation |
| `/portfolio-case-study` | Exportable case study page |
| Custom 404 | `not-found` page |

## Related docs

- [PROJECT_ARCHITECTURE.md](./PROJECT_ARCHITECTURE.md)
- [PORTFOLIO_CASE_STUDY.md](./PORTFOLIO_CASE_STUDY.md)
- [DEPLOYMENT.md](./DEPLOYMENT.md)
