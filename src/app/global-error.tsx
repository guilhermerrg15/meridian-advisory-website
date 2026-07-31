"use client";

import { Button } from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F8F9FB",
          color: "#0F2744",
          fontFamily:
            '"Source Sans 3", "Segoe UI", sans-serif',
          padding: "1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "28rem",
            textAlign: "center",
            border: "1px solid rgba(15,39,68,0.1)",
            borderRadius: "1rem",
            background: "#fff",
            padding: "2rem",
          }}
        >
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "1.75rem" }}>
            Unexpected error
          </h1>
          <p style={{ marginTop: "0.75rem", color: "rgba(15,39,68,0.7)" }}>
            Something went wrong while rendering this page.
          </p>
          {error.digest ? (
            <p style={{ marginTop: "0.5rem", fontSize: "0.75rem", opacity: 0.55 }}>
              Digest: {error.digest}
            </p>
          ) : null}
          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              gap: "0.75rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button type="button" onClick={reset}>
              Try again
            </Button>
            <Button href="/" variant="secondary">
              Go home
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
