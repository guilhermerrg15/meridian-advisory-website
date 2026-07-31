import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBand({
  eyebrow = "Next step",
  title,
  description,
  primaryLabel = "Start a conversation",
  primaryHref = "/contact",
  secondaryLabel = "Explore services",
  secondaryHref = "/services",
}: CtaBandProps) {
  return (
    <Section tone="navy">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Heading
          as="h2"
          eyebrow={eyebrow}
          description={description}
          tone="on-dark"
        >
          {title}
        </Heading>
        <div className="flex flex-wrap gap-3">
          <Button href={primaryHref} variant="amber" size="lg">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="on-dark" size="lg">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </Section>
  );
}
