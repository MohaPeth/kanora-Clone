import { cta } from "@/data/site";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-kanora-ink py-20 md:py-28">
      {/* Motif de fond */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Motif.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-kanora-ink/40" />

      {/* Ambient animated blobs (glow) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -left-20 top-6 h-64 w-64 rounded-full bg-kanora-orange/25 blur-3xl" />
        <div
          className="animate-blob absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-kanora-star/20 blur-3xl"
          style={{ animationDelay: "-5s" }}
        />
        <div
          className="animate-blob absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-kanora-orange/20 blur-3xl"
          style={{ animationDelay: "-9s" }}
        />
      </div>

      <div className="kanora-container relative flex flex-col items-center text-center">
        <h2 className="reveal whitespace-pre-line font-display text-[38px] font-bold leading-[1.02] text-white drop-shadow-sm sm:text-[54px] md:text-[64px]">
          {cta.title}
        </h2>
        <div
          className="reveal mt-9 flex flex-wrap justify-center gap-4"
          style={{ animationDelay: "120ms" }}
        >
          <a
            href={cta.primary.href}
            className="rounded-full bg-kanora-orange px-14 py-4 font-grotesk text-[17px] font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-kanora-orange-hover hover:shadow-lg active:scale-[0.98]"
          >
            {cta.primary.label}
          </a>
          <a
            href={cta.secondary.href}
            className="rounded-full border border-white/30 px-14 py-4 font-grotesk text-[17px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 active:scale-[0.98]"
          >
            {cta.secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
