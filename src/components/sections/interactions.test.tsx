import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CaseStudyFilters } from "@/components/sections/CaseStudyFilters";
import { contactFormSchema } from "@/lib/validations/contact";
import { filterCaseStudies } from "@/data/case-studies";

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

describe("contact form validation", () => {
  it("rejects incomplete submissions", () => {
    const result = contactFormSchema.safeParse({
      name: "A",
      email: "not-an-email",
      company: "",
      serviceInterest: "",
      budget: "",
      description: "Too short",
      privacyConsent: false,
    });

    expect(result.success).toBe(false);
  });

  it("accepts a valid payload", () => {
    const result = contactFormSchema.safeParse({
      name: "Jordan Lee",
      email: "jordan@example.com",
      company: "Harbor Care Group",
      serviceInterest: "strategy",
      budget: "75k-150k",
      description:
        "We need help prioritizing initiatives across three clinics this quarter.",
      privacyConsent: true,
    });

    expect(result.success).toBe(true);
  });
});

describe("FAQ interaction", () => {
  it("toggles accordion panels", async () => {
    const user = userEvent.setup();
    render(
      <FaqAccordion
        items={[
          {
            id: "one",
            question: "Question one?",
            answer: "Answer one.",
          },
          {
            id: "two",
            question: "Question two?",
            answer: "Answer two.",
          },
        ]}
      />,
    );

    const first = screen.getByRole("button", { name: /question one/i });
    const second = screen.getByRole("button", { name: /question two/i });

    expect(first).toHaveAttribute("aria-expanded", "true");
    await user.click(second);
    expect(second).toHaveAttribute("aria-expanded", "true");
    expect(first).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByText("Answer two.")).toBeVisible();
  });
});

describe("case-study filtering", () => {
  it("filters by category in data helpers", () => {
    const analytics = filterCaseStudies("analytics");
    expect(analytics.length).toBeGreaterThan(0);
    expect(analytics.every((item) => item.category === "analytics")).toBe(true);
  });

  it("updates the visible list through pressed filter buttons", async () => {
    const user = userEvent.setup();
    render(<CaseStudyFilters />);

    await user.click(screen.getByRole("button", { name: "Analytics" }));
    expect(screen.getByRole("button", { name: "Analytics" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByText(/showing 1 of 4/i)).toBeInTheDocument();
  });
});
