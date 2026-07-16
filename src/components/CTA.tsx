import { cta } from "@/data/site";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-kanora-cream py-20 md:py-28">
      {/* Motif de fond (texture discrète) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Motif.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-[0.32]"
      />

      <div className="kanora-container relative z-10 flex flex-col items-center text-center">
        <h2 className="reveal whitespace-pre-line font-display text-[38px] font-bold leading-[1.02] text-kanora-ink sm:text-[54px] md:text-[64px]">
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
            className="rounded-full border border-kanora-ink/20 px-14 py-4 font-grotesk text-[17px] font-semibold text-kanora-ink transition-all hover:-translate-y-0.5 hover:bg-kanora-ink/5 active:scale-[0.98]"
          >
            {cta.secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
