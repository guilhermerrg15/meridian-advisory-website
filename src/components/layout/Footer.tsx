import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-navy/8 bg-surface-muted">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-navy/65">
              {siteConfig.tagline}. Boutique consulting for mid-market leaders
              who need clearer priorities, cleaner processes, and practical
              digital plans.
            </p>
            <p className="max-w-md rounded-xl border border-amber/30 bg-amber/10 px-3 py-2 text-xs leading-relaxed text-navy/70">
              Portfolio concept: Meridian Advisory is fictional. People,
              clients, and outcomes shown here are demonstration content.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-navy/50">
              Explore
            </h2>
            <ul className="mt-4 space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy/75 transition-colors hover:text-cobalt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-navy/50">
              Demo contact
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-navy/75">
              <li>{siteConfig.contact.emailLabel}</li>
              <li>{siteConfig.contact.locationLabel}</li>
              <li>{siteConfig.contact.hoursLabel}</li>
            </ul>
            <ul className="mt-6 space-y-2">
              {siteConfig.footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy/75 transition-colors hover:text-cobalt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-navy/8 pt-6 text-xs text-navy/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {siteConfig.legalName}. Self-initiated portfolio concept.
          </p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
