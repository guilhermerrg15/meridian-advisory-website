import { cn } from "@/lib/utils";
import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
};

export function Field({
  id,
  label,
  error,
  hint,
  children,
  className,
}: FieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label htmlFor={id} className="block text-sm font-medium text-navy">
        {label}
      </label>
      {children}
      {hint && !error ? (
        <p id={`${id}-hint`} className="text-sm text-navy/55">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const controlClass =
  "w-full rounded-xl border border-navy/15 bg-white px-3.5 py-2.5 text-navy shadow-sm transition-colors placeholder:text-navy/40 focus-visible:border-cobalt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt/30 disabled:opacity-60";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, error, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      className={cn(
        controlClass,
        error && "border-red-400 focus-visible:ring-red-300",
        className,
      )}
      {...props}
    />
  );
});

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ className, error, ...props }, ref) {
    return (
      <textarea
        ref={ref}
        className={cn(
          controlClass,
          "min-h-32 resize-y",
          error && "border-red-400 focus-visible:ring-red-300",
          className,
        )}
        {...props}
      />
    );
  },
);

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: boolean;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select({ className, error, children, ...props }, ref) {
    return (
      <select
        ref={ref}
        className={cn(
          controlClass,
          error && "border-red-400 focus-visible:ring-red-300",
          className,
        )}
        {...props}
      >
        {children}
      </select>
    );
  },
);

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode;
  error?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ id, label, error, className, ...props }, ref) {
    return (
      <div className="space-y-2">
        <label
          htmlFor={id}
          className="flex items-start gap-3 text-sm text-navy/80"
        >
          <input
            id={id}
            ref={ref}
            type="checkbox"
            className={cn(
              "mt-1 h-4 w-4 rounded border-navy/30 text-cobalt focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2",
              className,
            )}
            {...props}
            aria-invalid={Boolean(error) || props["aria-invalid"]}
            aria-describedby={
              error ? `${id}-error` : props["aria-describedby"]
            }
          />
          <span>{label}</span>
        </label>
        {error ? (
          <p id={`${id}-error`} role="alert" className="text-sm text-red-700">
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);
