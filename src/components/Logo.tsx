import { cn } from "@/lib/utils";

export function KanoraMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="#d94e1a" />
      <path
        d="M13 10v20M13 20l9.5-10M13 20l9.5 10"
        stroke="#fff"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Logo({
  variant = "dark",
  className,
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <a href="#" className={cn("flex items-center gap-2 select-none", className)}>
      <KanoraMark className="h-9 w-9 shrink-0" />
      <span
        className={cn(
          "font-display text-[27px] font-bold leading-none tracking-tight",
          variant === "light" ? "text-white" : "text-kanora-ink"
        )}
      >
        Kanora
      </span>
    </a>
  );
}
