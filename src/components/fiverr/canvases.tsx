import {
  CANVAS_HEIGHT,
  SAFE_INSET,
  canvasSize,
  captures,
  portfolioBadge,
} from "@/components/fiverr/constants";
import { BrowserFrame, PhoneFrame } from "@/components/fiverr/frames";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type CanvasProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

/** Fixed 1280 x 769 presentation surface captured by Playwright. */
export function Canvas({ id, children, className }: CanvasProps) {
  return (
    <section
      id={id}
      data-canvas={id}
      className={cn("relative shrink-0 overflow-hidden", className)}
      style={canvasSize}
    >
      {children}
    </section>
  );
}

function FeatureChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-navy/12 bg-white/90 px-4 py-2 text-[15px] font-semibold text-navy shadow-soft">
      <span className="h-2 w-2 rounded-full bg-amber" />
      {label}
    </span>
  );
}

/** Main Fiverr gallery image. */
export function GalleryCanvas() {
  return (
    <Canvas
      id="canvas-gallery"
      className="bg-[radial-gradient(circle_at_12%_18%,rgba(37,99,235,0.16),transparent_45%),radial-gradient(circle_at_88%_4%,rgba(245,158,11,0.18),transparent_42%),linear-gradient(135deg,#f8f9fb_0%,#eaf0f8_100%)]"
    >
      <div
        className="absolute flex flex-col justify-center"
        style={{
          left: SAFE_INSET + 24,
          top: 0,
          width: 460,
          height: CANVAS_HEIGHT,
        }}
      >
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-navy px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
          {portfolioBadge}
        </span>

        <h1 className="mt-7 font-display text-[3.4rem] uppercase leading-[1.02] tracking-tight text-navy">
          Professional
          <br />
          Business
          <br />
          Website
        </h1>

        <p className="mt-6 text-[22px] font-semibold text-cobalt">
          Multi-page • Responsive • Accessible
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <FeatureChip label="Contact Forms" />
          <FeatureChip label="Basic SEO" />
          <FeatureChip label="Fast Performance" />
        </div>

        <p className="mt-8 text-sm font-medium text-navy/55">
          Next.js · TypeScript · Tailwind CSS · Tested and production-built
        </p>
      </div>

      <div className="absolute" style={{ left: 662, top: 104 }}>
        <BrowserFrame
          src={captures.desktopHome}
          alt="Home page of the consulting website in a desktop browser"
          width={556}
          screenHeight={330}
        />
      </div>

      <div className="absolute" style={{ left: 862, top: 462 }}>
        <BrowserFrame
          src={captures.desktopServices}
          alt="Services page preview"
          width={316}
          screenHeight={186}
          path="/services"
          compact
        />
      </div>

      <div className="absolute" style={{ left: 640, top: 352 }}>
        <PhoneFrame
          src={captures.mobileHome}
          alt="Home page on a mobile phone"
          width={152}
          height={310}
        />
      </div>
    </Canvas>
  );
}

export function DesktopPresentationCanvas() {
  return (
    <Canvas
      id="canvas-desktop"
      className="bg-[linear-gradient(180deg,#f8f9fb_0%,#e9eef6_100%)]"
    >
      <div className="flex h-full flex-col px-[128px] py-14">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-cobalt">
          Desktop experience
        </p>
        <h2 className="mt-3 font-display text-[2.6rem] leading-tight text-navy">
          One visual system across every page
        </h2>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-navy/65">
          Sticky navigation, a clear content hierarchy, and reusable sections
          keep the home, services, case study, and contact pages consistent.
        </p>

        {/* Both frames stay wider than the 1.44 capture ratio so the pages are
            only cropped vertically, never mid-sentence. */}
        <div className="mt-9 flex flex-1 items-start gap-6">
          <BrowserFrame
            src={captures.desktopHome}
            alt="Home page in a desktop browser"
            width={500}
            screenHeight={340}
          />
          <BrowserFrame
            src={captures.desktopServices}
            alt="Services page in a desktop browser"
            width={500}
            screenHeight={340}
            path="/services"
          />
        </div>

        <div className="grid grid-cols-4 gap-6 border-t border-navy/10 pt-6">
          {[
            ["Clear navigation", "Sticky header with active states"],
            ["Reusable components", "Buttons, cards, sections, forms"],
            ["Readable typography", "Display and body pairing"],
            ["Consistent spacing", "Shared layout container"],
          ].map(([title, detail]) => (
            <div key={title}>
              <p className="font-display text-[17px] text-navy">{title}</p>
              <p className="mt-1 text-[13px] leading-relaxed text-navy/55">
                {detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Canvas>
  );
}

export function MobilePresentationCanvas() {
  return (
    <Canvas id="canvas-mobile" className="bg-navy">
      <div className="flex h-full flex-col px-[128px] py-14 text-white">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber">
          Responsive design
        </p>
        <h2 className="mt-3 font-display text-[2.6rem] leading-tight">
          Built mobile-first, checked at every breakpoint
        </h2>

        <div className="mt-10 flex flex-1 items-center gap-12">
          <div className="flex items-end gap-8">
            <PhoneFrame
              src={captures.mobileHome}
              alt="Home page on a phone"
              width={234}
              height={484}
              tone="dark"
            />
            <PhoneFrame
              src={captures.mobileNavigation}
              alt="Mobile navigation menu open"
              width={234}
              height={484}
              tone="dark"
            />
          </div>

          <div className="flex-1">
            <p className="text-[17px] leading-relaxed text-white/75">
              Layouts were reviewed at the widths below for overflow, hierarchy,
              and tap-target size. The mobile menu traps focus and closes with
              the Escape key.
            </p>
            <div className="mt-7 space-y-3">
              {[
                ["375 px", "Small phones"],
                ["390 px", "Modern phones"],
                ["768 px", "Tablets"],
                ["1024 px", "Small laptops"],
                ["1440 px", "Desktop"],
              ].map(([width, label]) => (
                <div
                  key={width}
                  className="flex items-center justify-between rounded-xl border border-white/12 bg-white/5 px-5 py-3"
                >
                  <span className="font-display text-xl">{width}</span>
                  <span className="text-sm text-white/60">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Canvas>
  );
}
