"use client";

import { FadeIn } from "@/lib/motion";
import { useReducedMotion } from "framer-motion";

export function HeroIllustration() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <FadeIn className="relative" delay={0.1}>
      <div
        className="relative overflow-hidden rounded-[1.75rem] border border-navy/10 bg-gradient-to-br from-white via-[#F7F9FC] to-[#E8EEF8] p-4 shadow-lift sm:p-6"
        aria-hidden="true"
      >
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cobalt/10 blur-2xl" />
        <div className="absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-amber/20 blur-2xl" />

        <div className="relative grid gap-4">
          <div className="flex items-center justify-between rounded-xl bg-navy px-4 py-3 text-white">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-white/60">
                Decision cockpit
              </p>
              <p className="font-display text-lg">Priority health</p>
            </div>
            <span className="rounded-full bg-amber px-3 py-1 text-xs font-semibold text-navy">
              Live demo
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-xl border border-navy/8 bg-white p-4 shadow-soft">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-navy">Initiative mix</p>
                <p className="text-xs text-navy/50">This quarter</p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Protect delivery", width: "82%", tone: "bg-cobalt" },
                  { label: "Growth bets", width: "58%", tone: "bg-navy" },
                  { label: "Tech enablement", width: "44%", tone: "bg-amber" },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="mb-1 flex justify-between text-xs text-navy/65">
                      <span>{row.label}</span>
                      <span>{row.width}</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-navy/8">
                      <div
                        className={`h-full rounded-full ${row.tone} ${
                          prefersReducedMotion ? "" : "animate-grow"
                        }`}
                        style={{ width: row.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-xl border border-navy/8 bg-white p-4 shadow-soft">
                <p className="text-xs uppercase tracking-[0.12em] text-navy/45">
                  Priority signal
                </p>
                <p className="mt-2 font-display text-3xl text-navy">Focus</p>
                <p className="mt-1 text-xs text-navy/55">
                  Demo metric · not a client result
                </p>
              </div>
              <div className="rounded-xl border border-navy/8 bg-white p-4 shadow-soft">
                <p className="text-xs uppercase tracking-[0.12em] text-navy/45">
                  Decision lag
                </p>
                <p className="mt-2 font-display text-3xl text-cobalt">↓</p>
                <p className="mt-1 text-xs text-navy/55">
                  Conceptual weekly-review cue
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-dashed border-cobalt/30 bg-cobalt/5 p-4">
            <div className="flex flex-wrap items-center gap-3">
              {["Discover", "Diagnose", "Design", "Deliver"].map(
                (step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="inline-flex h-8 items-center rounded-full bg-white px-3 text-xs font-semibold text-navy shadow-sm">
                      {index + 1}. {step}
                    </span>
                    {index < 3 ? (
                      <span className="hidden h-px w-6 bg-cobalt/30 sm:block" />
                    ) : null}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
