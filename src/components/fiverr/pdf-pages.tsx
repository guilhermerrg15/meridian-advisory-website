import { Canvas } from "@/components/fiverr/canvases";
import { captures, portfolioBadge } from "@/components/fiverr/constants";
import {
  BrowserFrame,
  PanelFrame,
  PhoneFrame,
} from "@/components/fiverr/frames";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

function PageShell({
  id,
  children,
  className,
  pageNumber,
  breakAfter = true,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  pageNumber: number;
  breakAfter?: boolean;
}) {
  return (
    <Canvas
      id={id}
      className={cn(
        "bg-canvas",
        breakAfter && "pdf-page-break",
        "pdf-page",
        className,
      )}
    >
      {children}
      <span className="absolute bottom-6 right-[64px] text-[11px] font-medium text-navy/40">
        {pageNumber} / 3
      </span>
    </Canvas>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-cobalt">
      {children}
    </p>
  );
}

function MetaBlock({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy/45">
        {label}
      </p>
      <p className="mt-1.5 text-[14px] leading-relaxed text-navy/75">
        {children}
      </p>
    </div>
  );
}

export function PdfPageOverview() {
  return (
    <PageShell id="pdf-page-1" pageNumber={1}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(37,99,235,0.12),transparent_45%),radial-gradient(circle_at_92%_6%,rgba(245,158,11,0.14),transparent_40%)]" />

      <div className="relative flex h-full flex-col px-[64px] py-12">
        <div className="flex items-center justify-between">
          <Eyebrow>Portfolio case study</Eyebrow>
          <span className="rounded-full bg-navy px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
            {portfolioBadge}
          </span>
        </div>

        <h1 className="mt-4 font-display text-[2.9rem] uppercase leading-[1.06] tracking-tight text-navy">
          Business Website Case Study
        </h1>

        <div className="mt-8 grid flex-1 grid-cols-[1fr_640px] gap-10">
          <div className="flex flex-col">
            <p className="text-[15px] leading-relaxed text-navy/75">
              A complete responsive website concept created for a fictional
              professional consulting company. The project demonstrates
              information architecture, reusable component development,
              accessibility, responsive design, form validation, SEO structure,
              and deployment readiness.
            </p>

            <div className="mt-7 space-y-5">
              <MetaBlock label="Project type">
                Self-initiated portfolio concept. The brand, people, and client
                scenarios are fictional demonstration content.
              </MetaBlock>
              <MetaBlock label="Main objective">
                Show how a small consulting firm can present its services with a
                clear structure, credible visual identity, and an inquiry flow
                that is usable on any device.
              </MetaBlock>
            </div>

            <div className="mt-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy/45">
                Key deliverables
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
                {[
                  "Six responsive pages",
                  "Reusable component library",
                  "Validated contact form",
                  "Accessible navigation",
                  "Technical SEO setup",
                  "Automated test suite",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[14px] text-navy/75"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            <BrowserFrame
              src={captures.desktopHome}
              alt="Home page in a desktop browser"
              width={600}
              screenHeight={360}
            />
            <div className="absolute" style={{ left: 430, top: 250 }}>
              <PhoneFrame
                src={captures.mobileHome}
                alt="Home page on a phone"
                width={166}
                height={330}
              />
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

export function PdfPageSolution() {
  const highlights = [
    [
      "Clear information architecture",
      "Six pages with predictable navigation and a single content hierarchy.",
    ],
    [
      "Responsive layouts",
      "Mobile-first CSS reviewed from 375 px through 1440 px.",
    ],
    [
      "Accessible contact form",
      "Labelled fields, inline errors announced to screen readers, keyboard-friendly.",
    ],
    [
      "Reusable UI components",
      "Buttons, cards, sections, headings, and form controls share one API.",
    ],
    [
      "Basic technical SEO",
      "Metadata, canonical URLs, Open Graph, sitemap, robots, and JSON-LD.",
    ],
    [
      "Performance-conscious implementation",
      "Server components by default, self-hosted fonts, restrained animation.",
    ],
  ];

  return (
    <PageShell id="pdf-page-2" pageNumber={2}>
      <div className="flex h-full flex-col px-[64px] py-12">
        <Eyebrow>The website</Eyebrow>
        <h2 className="mt-3 font-display text-[2.3rem] leading-tight text-navy">
          Pages, navigation, and the inquiry flow
        </h2>

        <div className="mt-7 flex items-start gap-5">
          <div>
            <BrowserFrame
              src={captures.desktopHome}
              alt="Home page"
              width={420}
              screenHeight={215}
              compact
            />
            <p className="mt-2 text-[12px] font-semibold text-navy/60">
              Home page
            </p>
          </div>
          <div>
            <BrowserFrame
              src={captures.desktopServices}
              alt="Services page"
              width={330}
              screenHeight={215}
              path="/services"
              compact
            />
            <p className="mt-2 text-[12px] font-semibold text-navy/60">
              Services page
            </p>
          </div>
          <div>
            <PanelFrame
              src={captures.contactForm}
              alt="Contact form with validation"
              width={212}
              height={247}
            />
            <p className="mt-2 text-[12px] font-semibold text-navy/60">
              Contact form
            </p>
          </div>
          <div>
            <PhoneFrame
              src={captures.mobileNavigation}
              alt="Mobile navigation menu"
              width={124}
              height={247}
            />
            <p className="mt-2 text-[12px] font-semibold text-navy/60">
              Mobile menu
            </p>
          </div>
        </div>

        <div className="mt-8 grid flex-1 grid-cols-3 gap-x-7 gap-y-5">
          {highlights.map(([title, detail]) => (
            <div key={title}>
              <div className="h-1 w-9 rounded-full bg-amber" />
              <p className="mt-3 font-display text-[17px] leading-snug text-navy">
                {title}
              </p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-navy/60">
                {detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

export function PdfPageTechnology() {
  const stack = [
    ["Next.js 16", "App Router, route handlers, metadata API"],
    ["React 19 + TypeScript", "Strict mode, typed content modules"],
    ["Tailwind CSS v4", "Design tokens defined as CSS variables"],
    ["React Hook Form + Zod", "Shared client and server validation"],
    ["Framer Motion", "Fade-ins that respect reduced motion"],
    ["Vitest + Testing Library", "Component and validation tests"],
    ["Playwright", "End-to-end and responsive checks"],
    ["ESLint + Prettier", "Consistent formatting and linting"],
  ];

  const process = [
    "Planning and information architecture",
    "Component architecture and design tokens",
    "Responsive implementation",
    "Form validation on client and server",
    "Automated testing",
    "Production build verification",
    "Deployment readiness",
  ];

  return (
    <PageShell id="pdf-page-3" pageNumber={3} breakAfter={false}>
      <div className="flex h-full flex-col px-[64px] py-10">
        <Eyebrow>Technology and process</Eyebrow>
        <h2 className="mt-3 font-display text-[2.3rem] leading-tight text-navy">
          How the project was built
        </h2>

        <div className="mt-7 grid flex-1 grid-cols-[1fr_1fr] gap-9">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy/45">
              Design system preview
            </p>

            <div className="mt-3 grid grid-cols-4 gap-2.5">
              {[
                ["Canvas", "#F8F9FB", "bg-canvas text-navy border-navy/15"],
                ["Navy", "#0F2744", "bg-navy text-white border-navy"],
                ["Cobalt", "#2563EB", "bg-cobalt text-white border-cobalt"],
                ["Amber", "#F59E0B", "bg-amber text-navy border-amber"],
              ].map(([name, hex, classes]) => (
                <div
                  key={name}
                  className={cn("rounded-lg border px-3 py-3", classes)}
                >
                  <p className="text-[12px] font-semibold">{name}</p>
                  <p className="mt-0.5 text-[10px] opacity-80">{hex}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-navy/10 bg-white p-4">
              <p className="font-display text-[26px] leading-none text-navy">
                Fraunces display
              </p>
              <p className="mt-2 text-[14px] text-navy/70">
                Source Sans 3 body copy · 16 px base · 1.6 line height
              </p>
            </div>

            <div className="mt-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy/45">
                Components
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Button",
                  "Card",
                  "Section",
                  "Container",
                  "Heading",
                  "Form controls",
                  "Header nav",
                  "FAQ accordion",
                  "Case filters",
                  "CTA band",
                ].map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-navy/12 bg-white px-3 py-1.5 text-[12px] font-medium text-navy/75"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy/45">
                Responsive breakpoints
              </p>
              <div className="mt-3 flex gap-2">
                {["375", "390", "768", "1024", "1440"].map((width) => (
                  <span
                    key={width}
                    className="rounded-lg bg-surface-muted px-3 py-2 text-[12px] font-semibold text-navy/75"
                  >
                    {width} px
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy/45">
              Technology stack
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {stack.map(([name, detail]) => (
                <div
                  key={name}
                  className="rounded-lg border border-navy/10 bg-white px-3 py-2"
                >
                  <p className="text-[12px] font-semibold text-navy">{name}</p>
                  <p className="mt-0.5 text-[10px] leading-snug text-navy/55">
                    {detail}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-navy/45">
              Working process
            </p>
            <ol className="mt-2.5 space-y-1.5">
              {process.map((step, index) => (
                <li
                  key={step}
                  className="flex items-center gap-2.5 rounded-md bg-surface-muted px-2.5 py-1.5"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy text-[10px] font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="text-[12px] text-navy/75">{step}</span>
                </li>
              ))}
            </ol>

            <p className="mt-4 pr-16 text-[10px] leading-relaxed text-navy/45">
              No client results, revenue figures, or audit scores are claimed.
              All scenarios shown are fictional demonstration content created
              for this portfolio concept.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
