import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

const variants = {
  primary:
    "bg-cobalt text-white hover:bg-cobalt-dark shadow-sm focus-visible:ring-cobalt",
  secondary:
    "bg-white text-navy border border-navy/15 hover:border-cobalt/40 hover:text-cobalt focus-visible:ring-cobalt",
  ghost:
    "bg-transparent text-navy hover:bg-navy/5 focus-visible:ring-cobalt",
  amber:
    "bg-amber text-navy hover:bg-amber-dark focus-visible:ring-amber",
  "on-dark":
    "bg-transparent text-white border border-white/25 hover:border-white/50 hover:bg-white/10 focus-visible:ring-white",
} as const;

const sizes = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
} as const;

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    variant = "primary",
    size = "md",
    onClick,
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
