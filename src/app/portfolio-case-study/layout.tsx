import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function PortfolioCaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      {children}
    </main>
  );
}
