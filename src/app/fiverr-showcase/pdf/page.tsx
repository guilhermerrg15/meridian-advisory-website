import {
  PdfPageOverview,
  PdfPageSolution,
  PdfPageTechnology,
} from "@/components/fiverr/pdf-pages";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Fiverr Case Study PDF",
  description:
    "Print surface for the three-page Fiverr case study PDF export of the portfolio concept.",
  path: "/fiverr-showcase/pdf",
  noIndex: true,
});

/**
 * The exported PDF uses a 1280 x 769 page box so each canvas maps to exactly
 * one page. Any vertical gap or padding here would produce extra blank pages.
 */
const printCss = `
@page { size: 1280px 769px; margin: 0; }
html, body { margin: 0; padding: 0; background: #ffffff; }
#main-content { background: #ffffff; min-height: 0; }
.pdf-page-break { break-after: page; page-break-after: always; }
`;

export default function FiverrPdfPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: printCss }} />
      <div className="flex w-[1280px] flex-col">
        <PdfPageOverview />
        <PdfPageSolution />
        <PdfPageTechnology />
      </div>
    </>
  );
}
