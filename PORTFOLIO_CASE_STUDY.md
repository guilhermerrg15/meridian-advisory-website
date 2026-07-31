# Portfolio case study — Meridian Advisory website

## Statement

This project is a **self-initiated portfolio concept**. Meridian Advisory is a fictional boutique consulting brand. All people, clients, case studies, statistics, and outcomes are demonstration content and must not be presented as real engagements or verified results.

## Project overview

A complete multi-page business website designed to look like work that could be sold to a consulting, professional services, accounting, or technology advisory firm. The experience emphasizes clarity, trust, and operational seriousness rather than generic “tech startup” aesthetics.

## Goals

- Ship a polished, production-quality marketing site with App Router best practices.
- Create an original visual identity (navy / cobalt / amber on light neutrals).
- Encode realistic professional copy without Lorem Ipsum.
- Meet accessibility, SEO, testing, and documentation expectations expected in client delivery.
- Provide Fiverr-ready screenshot slides and an exportable PDF case study.

## Challenges

- Avoiding template-looking layouts while remaining restrained and corporate.
- Making fictional demo disclosures clear without undermining visual credibility.
- Building form UX that feels real without requiring paid email APIs.
- Keeping animation, cards, and section density under control.

## Solution

- Typed content modules for services, case studies, FAQ, team, and process.
- Reusable UI primitives and section compositions.
- Shared Zod validation for contact submissions with a simulated API success path.
- Hidden portfolio routes that generate PNG slides (1280×769) and a PDF write-up.

## Pages developed

1. Home
2. About
3. Services
4. Case Studies
5. Contact
6. Privacy Policy
7. Custom 404
8. `/portfolio-showcase` (hidden)
9. `/portfolio-case-study` (hidden)

## Design system

- Canvas / surface neutrals
- Deep navy text
- Cobalt accent
- Amber highlights
- Fraunces (display) + Source Sans 3 (body)
- Soft shadows, rounded cards used with moderation
- Original text/SVG logo mark and hero decision-cockpit illustration

## Technology stack

Next.js, React, TypeScript, Tailwind CSS, Framer Motion, React Hook Form, Zod, ESLint, Prettier, Vitest, Testing Library, Playwright.

## Accessibility

Skip-to-content, keyboard navigation, visible focus, labeled forms with error messaging, semantic FAQ controls, reduced-motion support.

## Responsive implementation

Mobile-first layouts reviewed at 375, 390, 768, 1024, and 1440 pixels.

## Testing

Component tests for navigation, FAQ, filters, validation, and home rendering; Playwright smoke tests for main routes; asset scripts for screenshots and PDF export.

## Final result

A deployable consulting-site portfolio piece with documentation for customization, Vercel deployment, form provider integration, and portfolio asset generation.

## Asset generation commands

```bash
npm run portfolio:screenshots
npm run portfolio:pdf
npm run portfolio:assets
```
