import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Meridian Advisory through the demo form. Submissions are validated and return a simulated success response.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Heading
            as="h1"
            eyebrow="Contact"
            description="Tell us about the decision, process, analytics, or digital challenge you want to work on. This portfolio form validates input and returns a simulated success response—no external email API is required."
          >
            Start a conversation
          </Heading>
          <Card className="mt-8 bg-surface-muted">
            <h2 className="font-display text-xl text-navy">Demo details</h2>
            <ul className="mt-4 space-y-3 text-sm text-navy/70">
              <li>
                <span className="font-medium text-navy">Email label: </span>
                {siteConfig.contact.emailLabel}
              </li>
              <li>
                <span className="font-medium text-navy">Coverage: </span>
                {siteConfig.contact.locationLabel}
              </li>
              <li>
                <span className="font-medium text-navy">Hours: </span>
                {siteConfig.contact.hoursLabel}
              </li>
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-navy/55">
              These are fictional contact labels for the portfolio concept. No
              personal email, phone, WhatsApp, LinkedIn, or GitHub details are
              published on this demo site.
            </p>
          </Card>
        </div>
        <Card>
          <ContactForm />
        </Card>
      </div>
    </Section>
  );
}
