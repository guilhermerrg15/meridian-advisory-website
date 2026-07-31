import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "on-dark";
};

const headingStyles = {
  h1: "font-display text-4xl tracking-tight sm:text-5xl lg:text-[3.25rem] leading-[1.1]",
  h2: "font-display text-3xl tracking-tight sm:text-4xl leading-[1.15]",
  h3: "font-display text-xl tracking-tight sm:text-2xl",
  h4: "font-sans text-lg font-semibold",
} as const;

export function Heading({
  as = "h2",
  children,
  eyebrow,
  description,
  align = "left",
  tone = "default",
  className,
  ...props
}: HeadingProps) {
  const Tag = as;
  const onDark = tone === "on-dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-[0.14em]",
            onDark ? "text-amber" : "text-cobalt",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          headingStyles[as],
          onDark ? "text-white" : "text-navy",
        )}
        {...props}
      >
        {children}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            onDark ? "text-white/70" : "text-navy/70",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
