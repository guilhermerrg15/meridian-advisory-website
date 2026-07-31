import {
  DesktopPresentationCanvas,
  GalleryCanvas,
  MobilePresentationCanvas,
  Canvas,
} from "@/components/fiverr/canvases";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "@/components/fiverr/constants";
import {
  PdfPageOverview,
  PdfPageSolution,
  PdfPageTechnology,
} from "@/components/fiverr/pdf-pages";
import {
  VideoMobileFrame,
  VideoOutroFrame,
  VideoTitleFrame,
} from "@/components/fiverr/video-frames";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = buildMetadata({
  title: "Fiverr Showcase",
  description:
    "Hidden promotional canvases used to export Fiverr gallery assets for the Meridian Advisory portfolio concept.",
  path: "/fiverr-showcase",
  noIndex: true,
});

function CanvasBlock({
  label,
  note,
  children,
}: {
  label: string;
  note: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-baseline gap-3">
        <p className="font-semibold text-white">{label}</p>
        <p className="text-sm text-white/50">{note}</p>
      </div>
      {children}
    </div>
  );
}

export default function FiverrShowcasePage() {
  return (
    <div className="overflow-x-auto px-6 py-10">
      <div className="mx-auto flex w-max flex-col gap-12">
        <header className="max-w-3xl">
          <h1 className="font-display text-3xl text-white">
            Fiverr promotional showcase
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            Hidden route, excluded from navigation, sitemap, and robots. Every
            canvas below is exactly {CANVAS_WIDTH} × {CANVAS_HEIGHT} pixels and
            composes real browser captures of the live site. Run{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5">
              npm run fiverr:assets
            </code>{" "}
            to refresh the captures and export every deliverable.
          </p>
        </header>

        <CanvasBlock
          label="1 · Main gallery image"
          note="business-website-gallery.png"
        >
          <GalleryCanvas />
        </CanvasBlock>

        <CanvasBlock
          label="2 · Desktop presentation"
          note="supporting gallery slide"
        >
          <DesktopPresentationCanvas />
        </CanvasBlock>

        <CanvasBlock
          label="3 · Mobile responsive presentation"
          note="supporting gallery slide"
        >
          <MobilePresentationCanvas />
        </CanvasBlock>

        <CanvasBlock label="4 · PDF page 1" note="project overview">
          <PdfPageOverview />
        </CanvasBlock>

        <CanvasBlock label="5 · PDF page 2" note="website solution">
          <PdfPageSolution />
        </CanvasBlock>

        <CanvasBlock label="6 · PDF page 3" note="technology and process">
          <PdfPageTechnology />
        </CanvasBlock>

        <CanvasBlock label="7 · Video title frame" note="clip opening screen">
          <Canvas id="canvas-video-title">
            <VideoTitleFrame />
          </Canvas>
        </CanvasBlock>

        <CanvasBlock
          label="8 · Video responsive frame"
          note="clip transition screen"
        >
          <Canvas id="canvas-video-mobile">
            <VideoMobileFrame />
          </Canvas>
        </CanvasBlock>

        <CanvasBlock label="9 · Video closing frame" note="clip final screen">
          <Canvas id="canvas-video-outro">
            <VideoOutroFrame />
          </Canvas>
        </CanvasBlock>
      </div>
    </div>
  );
}
