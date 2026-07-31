"use client";

import { Button } from "@/components/ui/Button";
import {
  Checkbox,
  Field,
  Input,
  Select,
  Textarea,
} from "@/components/ui/FormControls";
import { budgetOptions, serviceInterestOptions } from "@/data/site";
import {
  contactFormSchema,
  type ContactFormSchema,
} from "@/lib/validations/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

type SubmitState =
  | { status: "idle" }
  | { status: "success"; message: string; referenceId: string }
  | { status: "error"; message: string };

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      serviceInterest: "",
      budget: "",
      description: "",
      privacyConsent: false,
    },
  });

  const onSubmit = async (values: ContactFormSchema) => {
    setSubmitState({ status: "idle" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as {
        message?: string;
        referenceId?: string;
        error?: string;
      };

      if (!response.ok) {
        setSubmitState({
          status: "error",
          message: data.error ?? "Unable to submit the form. Please try again.",
        });
        return;
      }

      reset();
      setSubmitState({
        status: "success",
        message:
          data.message ??
          "Thanks—your message was received in this demo environment.",
        referenceId: data.referenceId ?? "demo",
      });
    } catch {
      setSubmitState({
        status: "error",
        message: "Network error. Please try again in a moment.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
      data-testid="contact-form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name?.message}>
          <Input
            id="name"
            autoComplete="name"
            error={Boolean(errors.name)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
        </Field>
        <Field
          id="email"
          label="Business email"
          error={errors.email?.message}
        >
          <Input
            id="email"
            type="email"
            autoComplete="email"
            error={Boolean(errors.email)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
        </Field>
      </div>

      <Field id="company" label="Company" error={errors.company?.message}>
        <Input
          id="company"
          autoComplete="organization"
          error={Boolean(errors.company)}
          aria-invalid={Boolean(errors.company)}
          aria-describedby={errors.company ? "company-error" : undefined}
          {...register("company")}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="serviceInterest"
          label="Service interest"
          error={errors.serviceInterest?.message}
        >
          <Select
            id="serviceInterest"
            error={Boolean(errors.serviceInterest)}
            aria-invalid={Boolean(errors.serviceInterest)}
            aria-describedby={
              errors.serviceInterest ? "serviceInterest-error" : undefined
            }
            {...register("serviceInterest")}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceInterestOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </Field>
        <Field
          id="budget"
          label="Estimated budget"
          error={errors.budget?.message}
        >
          <Select
            id="budget"
            error={Boolean(errors.budget)}
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? "budget-error" : undefined}
            {...register("budget")}
          >
            <option value="" disabled>
              Select a range
            </option>
            {budgetOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field
        id="description"
        label="Project description"
        error={errors.description?.message}
        hint="Share the decision, process, or digital challenge you want to address."
      >
        <Textarea
          id="description"
          error={Boolean(errors.description)}
          aria-invalid={Boolean(errors.description)}
          aria-describedby={
            errors.description ? "description-error" : "description-hint"
          }
          {...register("description")}
        />
      </Field>

      <Controller
        name="privacyConsent"
        control={control}
        render={({ field }) => (
          <Checkbox
            id="privacyConsent"
            checked={field.value}
            onChange={(event) => field.onChange(event.target.checked)}
            onBlur={field.onBlur}
            name={field.name}
            ref={field.ref}
            error={errors.privacyConsent?.message}
            label={
              <>
                I agree to the{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-cobalt underline-offset-2 hover:underline"
                >
                  privacy policy
                </Link>{" "}
                and understand this is a demo form that does not send email to a
                live inbox.
              </>
            }
          />
        )}
      />

      {submitState.status === "success" ? (
        <div
          role="status"
          className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
          data-testid="contact-success"
        >
          <p>{submitState.message}</p>
          <p className="mt-1 text-emerald-800/80">
            Reference: {submitState.referenceId}
          </p>
        </div>
      ) : null}

      {submitState.status === "error" ? (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {submitState.message}
        </div>
      ) : null}

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
