import { HeroIllustration } from "@/components/illustrations/HeroIllustration";
import { ServiceIcon } from "@/components/illustrations/ServiceIcon";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaBand } from "@/components/sections/CtaBand";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import {
  benefits,
  industries,
  processSteps,
  stats,
} from "@/data/content";
import { caseStudies } from "@/data/case-studies";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { FadeIn } from "@/lib/motion";
import Link from "next/link";

export function HomePage() {
  return (
    <>
      <Section className="relative overflow-hidden pb-12 pt-12 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.12),transparent_40%)]" />
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cobalt">
              {siteConfig.name}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
              Clarity for complex business decisions
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy/70 sm:text-lg">
              We help mid-market leadership teams set sharper priorities,
              streamline operations, and build analytics and digital plans that
              hold up under real operating pressure.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                Start a conversation
              </Button>
              <Button href="/case-studies" variant="secondary" size="lg">
                View case studies
              </Button>
            </div>
            <p className="mt-6 max-w-lg text-xs leading-relaxed text-navy/50">
              Self-initiated portfolio concept. All client scenarios and outcomes
              on this site are fictional demonstration content.
            </p>
          </FadeIn>
          <HeroIllustration />
        </div>
      </Section>

      <Section tone="muted" className="py-12 sm:py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeIn key={stat.id} delay={index * 0.05}>
              <div className="rounded-2xl border border-navy/8 bg-white p-5 shadow-soft">
                <p className="font-display text-3xl text-navy">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-navy">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-navy/55">
                  {stat.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <Heading
          eyebrow="Services"
          description="Four practice areas designed to reduce initiative overload and improve how decisions get made."
        >
          Practical help where strategy meets operations
        </Heading>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.05}>
              <Card className="h-full">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cobalt/10 text-cobalt">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3 className="mt-5 font-display text-2xl text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services#${service.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-cobalt hover:text-cobalt-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt rounded"
                >
                  Explore {service.title.toLowerCase()}
                </Link>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <Heading
          eyebrow="How we work"
          description="A repeatable rhythm that moves from discovery to ownership without drowning teams in process theater."
        >
          From ambiguity to an operating plan
        </Heading>
        <ol className="mt-10 grid gap-4 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <li key={step.step} className="h-full list-none">
              <FadeIn delay={index * 0.04} className="h-full">
                <div className="h-full rounded-2xl border border-navy/8 bg-white p-5 shadow-soft">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Heading
            eyebrow="Case studies"
            description="Featured fictional demonstration scenarios showing how Meridian Advisory approaches mid-market challenges."
          >
            Featured demonstration work
          </Heading>
          <Button href="/case-studies" variant="secondary">
            All case studies
          </Button>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((study, index) => (
            <FadeIn key={study.id} delay={index * 0.05}>
              <Card className="flex h-full flex-col">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cobalt">
                  {study.industry}
                </p>
                <h3 className="mt-3 font-display text-xl text-navy">
                  {study.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/70">
                  {study.summary}
                </p>
                <p className="mt-4 text-xs text-navy/50">
                  {study.fictionalDisclaimer}
                </p>
                <Link
                  href={`/case-studies#${study.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-cobalt hover:text-cobalt-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt rounded"
                >
                  View details
                </Link>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <Heading
          eyebrow="Industries"
          description="We tailor facilitation and deliverables to the operating realities of each sector—without forcing a one-size playbook."
        >
          Sectors we serve in demo scenarios
        </Heading>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="rounded-2xl border border-navy/8 bg-white p-5 shadow-soft"
            >
              <h3 className="font-display text-lg text-navy">{industry.name}</h3>
              <p className="mt-2 text-sm text-navy/65">{industry.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Heading
          eyebrow="Why Meridian"
          description="Differentiators designed for organizations that need senior judgment without enterprise consulting overhead."
        >
          What sets the engagement apart
        </Heading>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="rounded-2xl border border-navy/8 bg-surface p-6"
            >
              <div className="mb-4 h-1.5 w-12 rounded-full bg-amber" />
              <h3 className="font-display text-xl text-navy">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Heading
            eyebrow="FAQ"
            description="Straight answers about fit, engagement length, and the portfolio nature of this site."
          >
            Questions leaders usually ask
          </Heading>
          <FaqAccordion />
        </div>
      </Section>

      <CtaBand
        title="Ready to bring focus to your next quarter?"
        description="Tell us about the decision, process, or digital challenge on your desk. This demo form returns a simulated success response—no live inbox required."
      />
    </>
  );
}
