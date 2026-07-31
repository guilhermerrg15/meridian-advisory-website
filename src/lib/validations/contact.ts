import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Name must be 80 characters or fewer."),
  email: z
    .string()
    .trim()
    .email("Enter a valid business email address."),
  company: z
    .string()
    .trim()
    .min(2, "Please enter your company name.")
    .max(100, "Company name must be 100 characters or fewer."),
  serviceInterest: z
    .string()
    .min(1, "Select the service you are most interested in."),
  budget: z.string().min(1, "Select an estimated budget range."),
  description: z
    .string()
    .trim()
    .min(20, "Please share at least 20 characters about your project.")
    .max(2000, "Project description must be 2000 characters or fewer."),
  privacyConsent: z
    .boolean()
    .refine((value) => value === true, {
      message: "You must agree to the privacy policy to continue.",
    }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
