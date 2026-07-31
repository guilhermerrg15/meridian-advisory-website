import type { Metadata } from "next";
import { CaseStudyFilters } from "@/components/sections/CaseStudyFilters";
import { CtaBand } from "@/components/sections/CtaBand";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { caseStudies } from "@/data/case-studies";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Fictional Meridian Advisory case studies demonstrating strategy, operations, and analytics engagements.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <Section>
        <Heading
          as="h1"
          eyebrow="Case studies"
          description="These scenarios are fictional demonstration content created for this portfolio website. They do not represent real clients or verified results."
        >
          How clarity shows up in practice
        </Heading>
        <div className="mt-10">
          <CaseStudyFilters />
        </div>
      </Section>

      <Section tone="muted">
        <Heading
          eyebrow="Detailed scenarios"
          description="Each example includes context, challenge, approach, deliverables, methods, and an illustrative outcome."
        >
          Full demonstration write-ups
        </Heading>
        <div className="mt-10 space-y-8">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              id={study.slug}
              className="scroll-mt-28 rounded-2xl border border-navy/8 bg-white p-6 shadow-soft sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cobalt">
                {study.industry} · {study.category} · fictional demo
              </p>
              <h2 className="mt-3 font-display text-2xl text-navy sm:text-3xl">
                {study.title}
              </h2>
              <p className="mt-3 text-sm text-navy/55">
                {study.fictionalDisclaimer}
              </p>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="space-y-5">
                  <DetailBlock title="Context" body={study.context} />
                  <DetailBlock title="Challenge" body={study.challenge} />
                  <DetailBlock title="Approach" body={study.approach} />
                </div>
                <div className="space-y-5">
                  <ListBlock title="Deliverables" items={study.deliverables} />
                  <ListBlock
                    title="Technologies or methods"
                    items={study.methods}
                  />
                  <DetailBlock
                    title="Illustrative outcome"
                    body={study.outcome}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Want a similar working session for your team?"
        description="Use the demo contact form to describe the situation. No live email provider is connected in this portfolio build."
      />
    </>
  );
}

function DetailBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-navy/45">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-navy/75 sm:text-base">
        {body}
      </p>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-navy/45">
        {title}
      </h3>
      <ul className="mt-2 space-y-2 text-sm text-navy/75 sm:text-base">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
