import { contactFormSchema } from "@/lib/validations/contact";
import { describe, expect, it } from "vitest";

describe("contact schema edge cases", () => {
  it("requires privacy consent as true", () => {
    const result = contactFormSchema.safeParse({
      name: "Alex Rivera",
      email: "alex@example.com",
      company: "Northline",
      serviceInterest: "process",
      budget: "25k-75k",
      description: "Need help redesigning our intake and scheduling handoffs.",
      privacyConsent: true,
    });
    expect(result.success).toBe(true);
  });
});
