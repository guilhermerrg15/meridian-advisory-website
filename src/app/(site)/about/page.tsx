import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import {
  companyStory,
  principles,
  teamMembers,
  timeline,
  values,
} from "@/data/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn the fictional Meridian Advisory story, mission, values, working principles, and demonstration team structure.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section>
        <Heading
          as="h1"
          eyebrow="About"
          description="A boutique consulting brand concept built to show how a professional services firm can present its story with clarity and restraint."
        >
          {companyStory.headline}
        </Heading>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-navy/75 sm:text-lg">
          {companyStory.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-amber/30 bg-amber/10 px-5 py-4 text-sm text-navy/75">
          Demonstration notice: team members, timeline events, and company
          history on this page are fictional portfolio content.
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Heading eyebrow="Mission">What we aim to improve</Heading>
            <p className="mt-5 text-lg leading-relaxed text-navy/75">
              {companyStory.mission}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <Card key={value.id} className="bg-white">
                <h3 className="font-display text-lg text-navy">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/65">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <Heading
          eyebrow="Working principles"
          description="Rules of engagement that keep work decision-oriented and transferable."
        >
          How we stay useful
        </Heading>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <div
              key={principle.id}
              className="rounded-2xl border border-navy/8 bg-surface p-6"
            >
              <h3 className="font-display text-xl text-navy">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <Heading
          eyebrow="Team structure"
          description="Fictional demonstration roles that show how a boutique firm might organize senior coverage across practices."
        >
          Practice leadership (demo)
        </Heading>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {teamMembers.map((member) => (
            <Card key={member.id}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cobalt">
                Demo profile
              </p>
              <h3 className="mt-3 font-display text-2xl text-navy">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-navy/70">
                {member.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-navy/70">
                {member.bio}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {member.focus.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-navy/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Heading
          eyebrow="Timeline"
          description="A fictional growth narrative created for this portfolio website."
        >
          Demonstration milestones
        </Heading>
        <ol className="mt-10 space-y-4">
          {timeline.map((event) => (
            <li
              key={event.year}
              className="grid gap-3 rounded-2xl border border-navy/8 bg-white p-5 shadow-soft sm:grid-cols-[6rem_1fr]"
            >
              <p className="font-display text-xl text-cobalt">{event.year}</p>
              <div>
                <h3 className="font-display text-lg text-navy">{event.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/65">
                  {event.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand
        title="See how an engagement could start"
        description="Share the challenge on your desk through the demo contact form."
      />
    </>
  );
}
