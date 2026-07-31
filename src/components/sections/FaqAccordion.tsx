"use client";

import { faqs } from "@/data/content";
import { cn } from "@/lib/utils";
import { useId, useState } from "react";

export function FaqAccordion({ items = faqs }: { items?: typeof faqs }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const baseId = useId();

  return (
    <div className="space-y-3" data-testid="faq-accordion">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-button`;

        return (
          <div
            key={item.id}
            className="rounded-2xl border border-navy/10 bg-white shadow-soft"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-inset rounded-2xl"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span className="font-medium text-navy">{item.question}</span>
                <span
                  className={cn(
                    "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy transition-transform",
                    isOpen && "rotate-45 bg-cobalt/10 text-cobalt",
                  )}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5"
            >
              <p className="text-sm leading-relaxed text-navy/70 sm:text-base">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
