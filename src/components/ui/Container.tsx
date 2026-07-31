import { cn } from "@/lib/utils";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  as?: ElementType;
  narrow?: boolean;
};

export function Container({
  children,
  className,
  as: Component = "div",
  narrow = false,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        narrow ? "max-w-3xl" : "max-w-6xl",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
