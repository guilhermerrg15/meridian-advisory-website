import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  narrow?: boolean;
  tone?: "default" | "muted" | "navy";
  containerClassName?: string;
};

export function Section({
  children,
  className,
  narrow = false,
  tone = "default",
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        tone === "muted" && "bg-surface-muted",
        tone === "navy" && "bg-navy text-white",
        className,
      )}
      {...props}
    >
      <Container narrow={narrow} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
