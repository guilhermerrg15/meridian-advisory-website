import type { Metadata } from "next";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for the Meridian Advisory portfolio demonstration website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section narrow>
      <Heading
        as="h1"
        eyebrow="Legal"
        description="How this portfolio demonstration website handles information."
      >
        Privacy Policy
      </Heading>
      <div className="mt-10 space-y-8 text-sm leading-relaxed text-navy/75 sm:text-base">
        <p>
          <strong className="text-navy">Effective date:</strong> July 30, 2026
        </p>
        <section className="space-y-3">
          <h2 className="font-display text-2xl text-navy">Portfolio disclosure</h2>
          <p>{siteConfig.portfolioDisclosure}</p>
        </section>
        <section className="space-y-3">
          <h2 className="font-display text-2xl text-navy">
            What this site collects
          </h2>
          <p>
            The contact form accepts name, business email, company, service
            interest, estimated budget, project description, and privacy consent.
            In this demo build, submissions are validated on the server and a
            simulated success response is returned. Form data is not stored in a
            production database and is not forwarded to a live email provider.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="font-display text-2xl text-navy">Cookies and analytics</h2>
          <p>
            This demonstration site does not require third-party marketing
            cookies. Hosting platforms may collect standard technical logs such
            as IP address, user agent, and request metadata needed to serve the
            application securely.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="font-display text-2xl text-navy">Your choices</h2>
          <p>
            Because this is a portfolio demo, do not submit sensitive personal
            information, credentials, or confidential client data through the
            contact form.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="font-display text-2xl text-navy">Contact about privacy</h2>
          <p>
            For questions about this demonstration policy, use the site contact
            form. The address shown on the contact page (
            {siteConfig.contact.emailLabel}) is a fictional label and is not a
            monitored inbox.
          </p>
        </section>
      </div>
    </Section>
  );
}
