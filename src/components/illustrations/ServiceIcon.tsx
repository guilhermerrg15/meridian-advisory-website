export function ServiceIcon({
  name,
  className = "h-6 w-6",
}: {
  name: "strategy" | "process" | "analytics" | "digital";
  className?: string;
}) {
  const common = {
    viewBox: "0 0 24 24",
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "strategy":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
        </svg>
      );
    case "process":
      return (
        <svg {...common}>
          <path d="M4 7h10" />
          <path d="M14 7l3 3-3 3" />
          <path d="M20 17H10" />
          <path d="M10 17l-3-3 3-3" />
        </svg>
      );
    case "analytics":
      return (
        <svg {...common}>
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="M8 15v-4" />
          <path d="M12 15V8" />
          <path d="M16 15v-6" />
        </svg>
      );
    case "digital":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="12" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
          <path d="M8 10h3M13 10h3" />
        </svg>
      );
  }
}
