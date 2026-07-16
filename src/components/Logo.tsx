import Link from "next/link";
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
    <Link href="/" className={cn("flex items-center select-none", className)}>
      <img
        src="/logo.webp"
        alt="Kanora"
        className={cn(
          "h-16 w-auto shrink-0 object-contain md:h-[72px]",
          variant === "light" ? "drop-shadow-sm" : ""
        )}
      />
    </Link>
  );
}
