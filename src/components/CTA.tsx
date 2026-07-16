import { cta } from "@/data/site";

export function CTA() {
  return (
    <section className="bg-kanora-cream-2 py-20 md:py-28">
      <div className="kanora-container flex flex-col items-center text-center">
        <h2 className="reveal whitespace-pre-line font-display text-[38px] font-bold leading-[1.02] text-kanora-ink sm:text-[54px] md:text-[64px]">
          {cta.title}
        </h2>
        <div className="reveal mt-9 flex flex-wrap justify-center gap-4">
          <a
            href={cta.primary.href}
            className="rounded-full bg-kanora-orange px-14 py-4 font-grotesk text-[17px] font-semibold text-white transition-all hover:bg-kanora-orange-hover active:scale-[0.98]"
          >
            {cta.primary.label}
          </a>
          <a
            href={cta.secondary.href}
            className="rounded-full border border-kanora-ink/20 px-14 py-4 font-grotesk text-[17px] font-semibold text-kanora-ink transition-all hover:bg-kanora-ink/5 active:scale-[0.98]"
          >
            {cta.secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
