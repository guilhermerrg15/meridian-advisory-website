import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  // Simulated success response for the portfolio demo.
  // To connect a real provider later, forward `parsed.data` to Resend,
  // SendGrid, Postmark, or a CRM webhook using environment variables.
  const referenceId = `MA-${Date.now().toString(36).toUpperCase()}`;

  return NextResponse.json({
    ok: true,
    referenceId,
    message:
      "Thanks—your message was validated successfully in this demo environment. No live email was sent.",
    received: {
      name: parsed.data.name,
      company: parsed.data.company,
      serviceInterest: parsed.data.serviceInterest,
    },
  });
}
