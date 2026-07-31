"use client";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Section>
      <div className="mx-auto max-w-lg rounded-2xl border border-navy/10 bg-white p-8 text-center shadow-soft">
        <h1 className="font-display text-3xl text-navy">Page error</h1>
        <p className="mt-3 text-navy/70">
          We could not load this section. Please try again.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button type="button" onClick={reset}>
            Retry
          </Button>
          <Button href="/" variant="secondary">
            Home
          </Button>
        </div>
      </div>
    </Section>
  );
}
