import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  padded?: boolean;
};

export function Card({
  children,
  className,
  padded = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-navy/8 bg-surface shadow-soft",
        padded && "p-6 sm:p-8",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
