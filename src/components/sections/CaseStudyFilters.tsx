"use client";

import { Card } from "@/components/ui/Card";
import {
  caseStudies,
  caseStudyCategories,
  filterCaseStudies,
} from "@/data/case-studies";
import type { CaseStudyCategory } from "@/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useMemo, useState } from "react";

export function CaseStudyFilters() {
  const [category, setCategory] = useState<CaseStudyCategory>("all");
  const filtered = useMemo(() => filterCaseStudies(category), [category]);

  return (
    <div data-testid="case-study-filters">
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter case studies by category"
      >
        {caseStudyCategories.map((item) => {
          const selected = category === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2",
                selected
                  ? "border-cobalt bg-cobalt text-white"
                  : "border-navy/15 bg-white text-navy/75 hover:border-cobalt/40 hover:text-cobalt",
              )}
              onClick={() => setCategory(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-navy/55" aria-live="polite">
        Showing {filtered.length} of {caseStudies.length} fictional demonstration
        scenarios
        {category !== "all" ? ` in ${category}` : ""}.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {filtered.map((study) => (
          <Card key={study.id} className="flex h-full flex-col">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cobalt">
              {study.industry} · {study.category}
            </p>
            <h3 className="mt-3 font-display text-xl text-navy">
              {study.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/70">
              {study.summary}
            </p>
            <p className="mt-4 text-xs text-navy/50">{study.fictionalDisclaimer}</p>
            <Link
              href={`/case-studies#${study.slug}`}
              className="mt-5 inline-flex text-sm font-semibold text-cobalt hover:text-cobalt-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt rounded"
            >
              View details
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
