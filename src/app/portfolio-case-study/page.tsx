import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio Case Study",
  description:
    "Exportable case study for the Meridian Advisory business website portfolio concept.",
  path: "/portfolio-case-study",
  noIndex: true,
});

export default function PortfolioCaseStudyPage() {
  return (
    <article
      id="portfolio-case-study"
      className="mx-auto max-w-4xl bg-white px-10 py-12 text-navy print:max-w-none print:px-0 print:py-0"
    >
      <header className="border-b border-navy/10 pb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cobalt">
          Portfolio case study
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight">
          Meridian Advisory — Boutique consulting website
        </h1>
        <p className="mt-4 text-base leading-relaxed text-navy/70">
          A self-initiated portfolio concept: a production-quality multi-page
          business website for a fictional boutique consulting company.
        </p>
        <p className="mt-4 rounded-xl border border-amber/30 bg-amber/10 px-4 py-3 text-sm text-navy/75">
          This is a self-initiated portfolio concept. Meridian Advisory is a
          fictional brand. All people, clients, case studies, and outcomes are
          demonstration content.
        </p>
      </header>

      <Section title="Project overview">
        Meridian Advisory is a fictional mid-market consulting brand focused on
        strategy, process optimization, analytics, and digital transformation.
        The website presents a premium, approachable identity with clear
        information architecture, reusable components, and accessible
        interactions suitable for professional services marketing.
      </Section>

      <Section title="Goals">
        <ul className="list-disc space-y-2 pl-5">
          <li>Deliver a sellable consulting-site experience, not a tutorial template.</li>
          <li>Encode realistic copy and typed content modules for maintainability.</li>
          <li>Meet accessibility, SEO, testing, and deployment expectations.</li>
          <li>Provide exportable portfolio screenshots and a case-study PDF.</li>
        </ul>
      </Section>

      <Section title="Challenges">
        <ul className="list-disc space-y-2 pl-5">
          <li>Balancing visual polish with restrained corporate aesthetics.</li>
          <li>Keeping cards and motion purposeful rather than decorative noise.</li>
          <li>
            Communicating fictional demo content clearly without weakening the
            professional impression.
          </li>
          <li>
            Wiring form validation end-to-end without external email credentials.
          </li>
        </ul>
      </Section>

      <Section title="Solution">
        A Next.js App Router site with a navy/cobalt/amber design system,
        Fraunces + Source Sans 3 typography, section-based page composition,
        Framer Motion fade-ins with reduced-motion support, and a Zod-validated
        contact API that returns a simulated success response.
      </Section>

      <Section title="Pages developed">
        Home, About, Services, Case Studies, Contact, Privacy Policy, custom
        404, plus hidden `/portfolio-showcase` and `/portfolio-case-study`
        routes for asset generation.
      </Section>

      <Section title="Design system">
        Tokens for canvas, surface, navy, cobalt, and amber; reusable Button,
        Card, Section, Container, Heading, form controls, navigation, FAQ, and
        case-study filters. Original SVG logo mark and hero decision-cockpit
        illustration.
      </Section>

      <Section title="Technology stack">
        Next.js (App Router), React, TypeScript (strict), Tailwind CSS, Framer
        Motion, React Hook Form, Zod, ESLint, Prettier, Vitest, React Testing
        Library, and Playwright.
      </Section>

      <Section title="Accessibility">
        Semantic HTML, skip-to-content link, visible focus states, accessible
        form labels and errors, keyboard-friendly FAQ and filters, and
        prefers-reduced-motion support.
      </Section>

      <Section title="Responsive implementation">
        Mobile-first layouts reviewed at 375, 390, 768, 1024, and 1440 pixels
        for overflow, hierarchy, spacing, and tap targets.
      </Section>

      <Section title="Testing">
        Unit/component coverage for navigation, FAQ, case-study filtering,
        contact validation, and critical rendering. Playwright smoke tests for
        main routes plus scripts for PNG slides and PDF export.
      </Section>

      <Section title="Final result">
        A cohesive multi-page consulting website ready to deploy on Vercel,
        with documentation for customization, form provider wiring, and
        portfolio asset generation.
      </Section>

      <footer className="mt-10 border-t border-navy/10 pt-6 text-sm text-navy/60">
        Self-initiated portfolio concept · fictional brand and demo content ·
        not a real client engagement.
      </footer>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <h2 className="font-display text-2xl text-navy">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-navy/75 sm:text-base">
        {children}
      </div>
    </section>
  );
}
