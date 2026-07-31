import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio Showcase",
  description:
    "Hidden presentation slides for the Meridian Advisory portfolio concept.",
  path: "/portfolio-showcase",
  noIndex: true,
});

const SLIDE_WIDTH = 1280;
const SLIDE_HEIGHT = 960;

const slideClass =
  "portfolio-slide relative flex flex-col overflow-hidden rounded-none border border-navy/10 bg-canvas text-navy shadow-none";

const slideSize = { width: SLIDE_WIDTH, height: SLIDE_HEIGHT };

export default function PortfolioShowcasePage() {
  return (
    <div className="overflow-x-auto bg-[#0b1220] px-4 py-10 sm:px-6">
      <p className="mx-auto mb-10 max-w-5xl text-center text-sm text-white/70">
        Hidden portfolio route · not linked in primary navigation · slide canvas
        {` ${SLIDE_WIDTH}×${SLIDE_HEIGHT}`} (4:3, matches marketplace thumbnail
        crop) · scroll horizontally on smaller screens
      </p>
      <div className="mx-auto flex w-max flex-col gap-10">

      {/* Slide 1 — Cover */}
      <section
        id="slide-1"
        data-slide="1"
        className={slideClass}
        style={slideSize}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.16),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(245,158,11,0.18),transparent_35%),linear-gradient(135deg,#f8f9fb,#eef3f9)]" />
        <div className="relative flex h-full flex-col px-16 py-14">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                <span className="font-display text-lg">M</span>
              </span>
              <div>
                <p className="font-display text-2xl">Meridian Advisory</p>
                <p className="text-sm text-navy/55">Portfolio concept website</p>
              </div>
            </div>
            <p className="rounded-full bg-amber/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy">
              Self-initiated project
            </p>
          </div>

          <div className="mt-14 grid flex-1 grid-cols-[1.05fr_0.95fr] items-center gap-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cobalt">
                Business website case study
              </p>
              <h1 className="mt-5 font-display text-[3.4rem] leading-[1.08] tracking-tight">
                Premium consulting site for mid-market decision clarity
              </h1>
              <p className="mt-6 max-w-xl text-xl leading-relaxed text-navy/70">
                Multi-page Next.js experience with accessible forms, typed
                content, and a restrained visual system in navy, cobalt, and
                amber.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                {["Next.js", "TypeScript", "Tailwind CSS", "Accessibility"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-medium text-navy/75"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="relative h-[480px]">
              <div className="absolute left-0 top-4 h-[400px] w-[500px] rounded-2xl border border-navy/10 bg-white p-5 shadow-lift">
                <div className="h-9 rounded-lg bg-navy/90" />
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="h-52 rounded-xl bg-gradient-to-br from-cobalt/15 to-amber/20" />
                  <div className="space-y-4">
                    <div className="h-20 rounded-xl bg-surface-muted" />
                    <div className="h-20 rounded-xl bg-surface-muted" />
                    <div className="h-12 rounded-xl bg-cobalt/20" />
                  </div>
                </div>
                <p className="mt-5 text-xs font-medium text-navy/50">
                  Desktop mockup
                </p>
              </div>
              <div className="absolute bottom-4 right-2 h-[340px] w-[176px] rounded-[1.75rem] border-4 border-navy bg-white p-2 shadow-lift">
                <div className="h-full rounded-[1.3rem] bg-gradient-to-b from-surface-muted to-white p-3">
                  <div className="h-3 w-12 rounded bg-navy/20" />
                  <div className="mt-4 h-20 rounded-lg bg-cobalt/15" />
                  <div className="mt-3 space-y-2.5">
                    <div className="h-10 rounded-md bg-navy/8" />
                    <div className="h-10 rounded-md bg-navy/8" />
                    <div className="h-10 rounded-md bg-amber/20" />
                  </div>
                </div>
                <p className="absolute -bottom-7 left-0 text-xs font-medium text-navy/50">
                  Mobile
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-5 gap-4 border-t border-navy/10 pt-8">
            {[
              ["Home", "Hero, stats, services, FAQ"],
              ["About", "Story, values, team"],
              ["Services", "Four practice areas"],
              ["Case Studies", "Filterable scenarios"],
              ["Contact", "Validated inquiry form"],
            ].map(([title, detail]) => (
              <div key={title}>
                <p className="font-display text-lg text-navy">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-navy/55">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 2 — Desktop pages */}
      <section
        id="slide-2"
        data-slide="2"
        className={slideClass}
        style={slideSize}
      >
        <div className="flex h-full flex-col bg-[linear-gradient(180deg,#f8f9fb_0%,#eef2f7_100%)] px-14 py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cobalt">
            Desktop experience
          </p>
          <h2 className="mt-3 font-display text-4xl">Main pages at a glance</h2>
          <p className="mt-3 max-w-3xl text-navy/65">
            Home, About, Services, Case Studies, and Contact share one visual
            system with generous spacing and a sticky navigation pattern.
          </p>
          <div className="mt-10 grid flex-1 grid-cols-5 gap-4">
            {[
              "Home · hero + services",
              "About · story + team",
              "Services · deep detail",
              "Cases · filters",
              "Contact · validated form",
            ].map((label, index) => (
              <div
                key={label}
                className="flex flex-col rounded-2xl border border-navy/10 bg-white p-3 shadow-soft"
              >
                <div className="mb-3 h-3 rounded bg-navy/80" />
                <div className="flex flex-1 flex-col gap-2 rounded-xl bg-surface-muted p-3">
                  <div
                    className={`h-24 shrink-0 rounded-lg ${
                      index === 0
                        ? "bg-gradient-to-br from-cobalt/20 to-amber/20"
                        : "bg-white"
                    }`}
                  />
                  <div className="h-8 shrink-0 rounded bg-white" />
                  <div className="h-8 shrink-0 rounded bg-white" />
                  <div className="h-10 shrink-0 rounded bg-cobalt/10" />
                  <div className="grid flex-1 grid-cols-2 gap-2">
                    <div className="rounded bg-white" />
                    <div className="rounded bg-white" />
                    <div className="rounded bg-white" />
                    <div className="rounded bg-amber/20" />
                  </div>
                  <div className="h-12 shrink-0 rounded bg-navy/10" />
                </div>
                <p className="mt-3 text-xs font-medium text-navy/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 3 — Mobile */}
      <section
        id="slide-3"
        data-slide="3"
        className={slideClass}
        style={slideSize}
      >
        <div className="flex h-full flex-col bg-navy px-14 py-12 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber">
            Mobile responsive
          </p>
          <h2 className="mt-3 font-display text-4xl">
            Built mobile-first, reviewed across key widths
          </h2>
          <p className="mt-3 max-w-3xl text-white/70">
            Layouts were checked at 375, 390, 768, 1024, and 1440 pixels for
            overflow, hierarchy, and tap targets.
          </p>
          <div className="mt-14 flex flex-1 items-end justify-center gap-10 pb-6">
            {["375", "390", "768"].map((width, index) => (
              <div key={width} className="text-center">
                <div
                  className="mx-auto rounded-[2rem] border-4 border-white/20 bg-canvas p-3 text-navy shadow-lift"
                  style={{
                    width: index === 2 ? 340 : 210,
                    height: index === 2 ? 520 : 600,
                  }}
                >
                  <div className="flex h-full flex-col gap-3 rounded-[1.4rem] bg-gradient-to-b from-white to-surface-muted p-4">
                    <div className="flex shrink-0 items-center justify-between">
                      <div className="h-4 w-16 rounded bg-navy/15" />
                      <div className="h-4 w-8 rounded bg-navy/15" />
                    </div>
                    <div className="h-28 shrink-0 rounded-xl bg-cobalt/15" />
                    <div className="h-10 shrink-0 rounded-lg bg-navy/8" />
                    <div className="h-10 shrink-0 rounded-lg bg-navy/8" />
                    <div className="h-10 shrink-0 rounded-lg bg-amber/20" />
                    <div className="flex-1 rounded-lg bg-navy/5" />
                    <div className="h-12 shrink-0 rounded-lg bg-navy/10" />
                  </div>
                </div>
                <p className="mt-4 text-sm text-white/70">{width}px frame</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 4 — Features */}
      <section
        id="slide-4"
        data-slide="4"
        className={slideClass}
        style={slideSize}
      >
        <div className="flex h-full flex-col bg-[linear-gradient(135deg,#f8f9fb,#e8eef8)] px-14 py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cobalt">
            Implementation
          </p>
          <h2 className="mt-3 font-display text-4xl">
            Features and technical stack
          </h2>
          <div className="mt-10 grid flex-1 grid-cols-3 gap-5">
            {[
              {
                title: "App Router + TypeScript",
                body: "Strict typing, typed content modules, route handlers, metadata, sitemap, and robots.",
                tags: ["Next.js 16", "Strict mode", "Route handlers"],
              },
              {
                title: "Accessible interactions",
                body: "Skip link, keyboard navigation, FAQ accordion semantics, focus rings, reduced motion.",
                tags: ["WCAG mindset", "Focus management", "ARIA"],
              },
              {
                title: "Validated contact flow",
                body: "React Hook Form + Zod on the client and server with a simulated success response.",
                tags: ["React Hook Form", "Zod", "Server validation"],
              },
              {
                title: "Motion with restraint",
                body: "Framer Motion fade-ins that respect prefers-reduced-motion.",
                tags: ["Framer Motion", "Reduced motion"],
              },
              {
                title: "Quality gates",
                body: "ESLint, Prettier, Vitest, Testing Library, and Playwright smoke coverage.",
                tags: ["ESLint", "Vitest", "Playwright"],
              },
              {
                title: "SEO foundations",
                body: "Open Graph, Twitter cards, canonical URLs, and JSON-LD organization/service data.",
                tags: ["Open Graph", "JSON-LD", "Canonicals"],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-soft"
              >
                <div className="mb-4 h-1.5 w-12 rounded-full bg-amber" />
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/65">
                  {item.body}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface-muted px-3 py-1.5 text-xs font-medium text-navy/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 5 — Design system */}
      <section
        id="slide-5"
        data-slide="5"
        className={slideClass}
        style={slideSize}
      >
        <div className="flex h-full flex-col px-14 py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cobalt">
            Design system
          </p>
          <h2 className="mt-3 font-display text-4xl">
            Reusable components and tokens
          </h2>
          <div className="mt-10 grid flex-1 grid-cols-[0.9fr_1.1fr] gap-8">
            <div className="rounded-2xl border border-navy/10 bg-surface-muted p-6">
              <h3 className="font-display text-2xl">Color tokens</h3>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  ["Canvas", "#F8F9FB", "bg-canvas border"],
                  ["Navy", "#0F2744", "bg-navy text-white"],
                  ["Cobalt", "#2563EB", "bg-cobalt text-white"],
                  ["Amber", "#F59E0B", "bg-amber text-navy"],
                ].map(([name, hex, classes]) => (
                  <div
                    key={name}
                    className={`rounded-xl p-4 ${classes} border-navy/10`}
                  >
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="mt-1 text-xs opacity-80">{hex}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="font-display text-xl">Typography</h3>
                <p className="mt-3 font-display text-4xl">Fraunces display</p>
                <p className="mt-2 text-lg">Source Sans 3 body copy</p>
              </div>
              <div className="mt-8">
                <h3 className="font-display text-xl">Spacing & radius</h3>
                <div className="mt-4 flex items-end gap-3">
                  {[
                    ["sm", "h-8 w-8 rounded-lg"],
                    ["md", "h-12 w-12 rounded-xl"],
                    ["lg", "h-16 w-16 rounded-2xl"],
                  ].map(([label, classes]) => (
                    <div key={label} className="text-center">
                      <div className={`bg-cobalt/15 ${classes}`} />
                      <p className="mt-2 text-xs text-navy/55">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Button",
                "Card",
                "Section",
                "Container",
                "Heading",
                "Form controls",
                "Navigation",
                "FAQ accordion",
              ].map((name) => (
                <div
                  key={name}
                  className="flex items-center justify-center rounded-2xl border border-navy/10 bg-white p-6 shadow-soft"
                >
                  <div className="text-center">
                    <div className="mx-auto mb-3 h-10 w-24 rounded-lg bg-cobalt/15" />
                    <p className="text-sm font-semibold text-navy">{name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
