import type { Metadata } from "next";
import { ServiceIcon } from "@/components/illustrations/ServiceIcon";
import { CtaBand } from "@/components/sections/CtaBand";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { services } from "@/data/services";
import { JsonLd, serviceJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Explore Meridian Advisory services: business strategy, process optimization, data and analytics, and digital transformation.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd()} />
      <Section>
        <Heading
          as="h1"
          eyebrow="Services"
          description="Detailed offerings designed for mid-market leaders who need clearer priorities, cleaner workflows, trusted metrics, and staged digital change. We do not promise guaranteed financial results."
        >
          Four practices. One decision-focused approach.
        </Heading>
      </Section>

      {services.map((service, index) => (
        <Section
          key={service.id}
          id={service.slug}
          tone={index % 2 === 0 ? "muted" : "default"}
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cobalt/10 text-cobalt">
                <ServiceIcon name={service.icon} className="h-7 w-7" />
              </div>
              <h2 className="mt-5 font-display text-3xl text-navy sm:text-4xl">
                {service.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy/70">
                {service.shortDescription}
              </p>
              <Button href="/contact" className="mt-8">
                Discuss {service.title.toLowerCase()}
              </Button>
            </div>
            <div className="space-y-6">
              <article className="rounded-2xl border border-navy/8 bg-white p-6 shadow-soft">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-cobalt">
                  Business problem
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/75 sm:text-base">
                  {service.problem}
                </p>
              </article>
              <article className="rounded-2xl border border-navy/8 bg-white p-6 shadow-soft">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-cobalt">
                  Proposed approach
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/75 sm:text-base">
                  {service.approach}
                </p>
              </article>
              <div className="grid gap-6 md:grid-cols-2">
                <article className="rounded-2xl border border-navy/8 bg-white p-6 shadow-soft">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-cobalt">
                    Typical deliverables
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-navy/75">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
                <article className="rounded-2xl border border-navy/8 bg-white p-6 shadow-soft">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-cobalt">
                    Expected type of benefit
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-navy/75">
                    {service.benefits.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-navy/50">
                    Benefits describe the type of improvement an engagement aims
                    to enable. Results vary and are not guaranteed.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <CtaBand
        title="Not sure which practice fits?"
        description="Describe the decision or bottleneck. We will map it to the right starting point."
        secondaryLabel="Read case studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
