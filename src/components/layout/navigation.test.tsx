import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Header } from "@/components/layout/Header";
import { HomePage } from "@/components/sections/HomePage";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("framer-motion", async () => {
  const actual = await vi.importActual<typeof import("framer-motion")>(
    "framer-motion",
  );
  return {
    ...actual,
    useReducedMotion: () => true,
  };
});

describe("navigation", () => {
  it("renders primary navigation links", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation", { name: "Primary" });
    expect(nav).toBeInTheDocument();
    expect(nav.querySelector('a[href="/about"]')).toHaveTextContent("About");
    expect(nav.querySelector('a[href="/services"]')).toHaveTextContent(
      "Services",
    );
    expect(nav.querySelector('a[href="/case-studies"]')).toHaveTextContent(
      "Case Studies",
    );
    expect(nav.querySelector('a[href="/contact"]')).toHaveTextContent(
      "Contact",
    );
  });
});

describe("critical page rendering", () => {
  it("renders the home value proposition and CTAs", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", {
        name: /clarity for complex business decisions/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /start a conversation/i }).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getByRole("link", { name: /view case studies/i }),
    ).toBeInTheDocument();
  });
});
