export default function Loading() {
  return (
    <div
      className="flex min-h-[40vh] items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3 rounded-full border border-navy/10 bg-white px-5 py-3 shadow-soft">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cobalt" />
        <span className="text-sm font-medium text-navy/70">Loading…</span>
      </div>
    </div>
  );
}
