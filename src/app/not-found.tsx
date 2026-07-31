import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="flex min-h-[60vh] items-center">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cobalt">
              404
            </p>
            <Heading as="h1" align="center" className="mt-3">
              This page is off the map
            </Heading>
            <p className="mt-4 text-navy/70">
              The page you requested does not exist in this Meridian Advisory demo
              website. Head home or browse services to continue.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/">Back to home</Button>
              <Button href="/services" variant="secondary">
                View services
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
