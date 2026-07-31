import { cn } from "@/lib/utils";
import { demoDomain } from "@/components/fiverr/constants";

/**
 * Device chrome drawn entirely with HTML and CSS so no third-party mockup
 * artwork or licensed template is involved.
 */

type ScreenImageProps = {
  src: string;
  alt: string;
  /** Vertical crop anchor for the captured page. */
  position?: "top" | "center";
};

function ScreenImage({ src, alt, position = "top" }: ScreenImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- raw Playwright captures are composed at fixed sizes; the Next image pipeline would recompress them.
    <img
      src={src}
      alt={alt}
      className={cn(
        "absolute inset-0 h-full w-full object-cover",
        position === "top" ? "object-top" : "object-center",
      )}
    />
  );
}

type BrowserFrameProps = ScreenImageProps & {
  width: number;
  /** Height of the viewport area, excluding the title bar. */
  screenHeight: number;
  path?: string;
  className?: string;
  compact?: boolean;
};

export function BrowserFrame({
  src,
  alt,
  width,
  screenHeight,
  path = "",
  position,
  className,
  compact = false,
}: BrowserFrameProps) {
  const dot = compact ? "h-1.5 w-1.5" : "h-2 w-2";

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-navy/12 bg-white shadow-lift",
        className,
      )}
      style={{ width }}
    >
      <div
        className={cn(
          "flex items-center gap-1.5 border-b border-navy/10 bg-[#edf1f6]",
          compact ? "px-2.5 py-1.5" : "px-3 py-2.5",
        )}
      >
        <span className={cn("rounded-full bg-[#f87171]", dot)} />
        <span className={cn("rounded-full bg-[#fbbf24]", dot)} />
        <span className={cn("rounded-full bg-[#4ade80]", dot)} />
        <span
          className={cn(
            "ml-2 flex-1 truncate rounded-md bg-white/90 px-2.5 py-0.5 font-medium text-navy/45",
            compact ? "text-[9px]" : "text-[11px]",
          )}
        >
          {demoDomain}
          {path}
        </span>
      </div>
      <div
        className="relative overflow-hidden bg-white"
        style={{ height: screenHeight }}
      >
        <ScreenImage src={src} alt={alt} position={position} />
      </div>
    </div>
  );
}

type PhoneFrameProps = ScreenImageProps & {
  width: number;
  height: number;
  className?: string;
  tone?: "light" | "dark";
};

export function PhoneFrame({
  src,
  alt,
  width,
  height,
  position,
  className,
  tone = "light",
}: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "rounded-[1.9rem] border-[6px] bg-navy p-0 shadow-lift",
        tone === "light" ? "border-navy" : "border-white/25",
        className,
      )}
      style={{ width, height }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] bg-white">
        <span className="absolute left-1/2 top-2 z-10 h-1.5 w-10 -translate-x-1/2 rounded-full bg-navy/20" />
        <ScreenImage src={src} alt={alt} position={position} />
      </div>
    </div>
  );
}

type PanelFrameProps = ScreenImageProps & {
  width: number;
  height: number;
  className?: string;
};

/** Bezel-less crop used when the capture itself is the subject. */
export function PanelFrame({
  src,
  alt,
  width,
  height,
  position,
  className,
}: PanelFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-navy/12 bg-white shadow-soft",
        className,
      )}
      style={{ width, height }}
    >
      <ScreenImage src={src} alt={alt} position={position} />
    </div>
  );
}
