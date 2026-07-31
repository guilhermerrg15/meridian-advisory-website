import { captures, portfolioBadge } from "@/components/fiverr/constants";
import { PhoneFrame } from "@/components/fiverr/frames";
import { cn } from "@/lib/utils";

import type { ReactNode } from "react";

/** Full-viewport stage used by the hidden routes the clip recorder visits. */
export function VideoStage({ children }: { children: ReactNode }) {
  return <div className="h-screen w-screen overflow-hidden">{children}</div>;
}

function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white",
        className,
      )}
    >
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8"
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
  );
}

const navyBackdrop =
  "bg-navy bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.35),transparent_45%),radial-gradient(circle_at_85%_88%,rgba(245,158,11,0.22),transparent_42%)]";

/** Opening frame of the promo clip; also used as the video thumbnail. */
export function VideoTitleFrame() {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center px-24 text-center text-white",
        navyBackdrop,
      )}
    >
      <BrandMark />
      <h1 className="mt-8 font-display text-[3.6rem] uppercase leading-[1.05] tracking-tight">
        Professional
        <br />
        Business Website
      </h1>
      <p className="mt-6 text-[24px] font-semibold text-amber">
        Multi-page • Responsive • Accessible
      </p>
      <p className="mt-8 rounded-full border border-white/20 px-5 py-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-white/70">
        {portfolioBadge}
      </p>
    </div>
  );
}

export function VideoMobileFrame() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-16 bg-[linear-gradient(135deg,#f8f9fb,#e9eef6)] px-24">
      <div className="max-w-[420px]">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-cobalt">
          Responsive design
        </p>
        <h2 className="mt-3 font-display text-[2.8rem] leading-tight text-navy">
          Looks right on every screen
        </h2>
        <p className="mt-4 text-[18px] leading-relaxed text-navy/65">
          Mobile-first layouts with an accessible menu that keeps focus where it
          belongs.
        </p>
      </div>
      <div className="flex items-end gap-8">
        <PhoneFrame
          src={captures.mobileHome}
          alt="Home page on a phone"
          width={220}
          height={440}
        />
        <PhoneFrame
          src={captures.mobileNavigation}
          alt="Mobile navigation menu open"
          width={220}
          height={440}
        />
      </div>
    </div>
  );
}

export function VideoOutroFrame() {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center px-24 text-center text-white",
        navyBackdrop,
      )}
    >
      <BrandMark />
      <h2 className="mt-8 font-display text-[3.4rem] leading-[1.08] tracking-tight">
        Professional Business Websites
      </h2>
      <p className="mt-5 text-[26px] font-semibold text-amber">
        Responsive • Accessible • Reliable
      </p>
      <div className="mt-10 flex gap-3">
        {[
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Tested",
          "Deploy-ready",
        ].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/20 px-4 py-2 text-[13px] font-medium text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
