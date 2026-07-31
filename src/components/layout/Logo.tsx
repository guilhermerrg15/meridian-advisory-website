import { cn } from "@/lib/utils";
import Link from "next/link";

type LogoProps = {
  className?: string;
  markOnly?: boolean;
};

export function Logo({ className, markOnly = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2",
        className,
      )}
      aria-label="Meridian Advisory home"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-white shadow-sm transition-transform duration-300 group-hover:scale-[1.03]">
        <svg
          viewBox="0 0 32 32"
          className="h-5 w-5"
          aria-hidden="true"
          fill="none"
        >
          <path
            d="M6 22 L16 6 L26 22"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 22 H21.5"
            stroke="#3B82F6"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="16" cy="14" r="1.6" fill="#F59E0B" />
        </svg>
      </span>
      {!markOnly ? (
        <span className="font-display text-lg tracking-tight text-navy sm:text-xl">
          Meridian{" "}
          <span className="font-sans text-base font-medium text-cobalt sm:text-lg">
            Advisory
          </span>
        </span>
      ) : null}
    </Link>
  );
}
