import { Header } from "./Header";
import { hero } from "@/data/site";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={hero.image}
        alt={hero.imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Left gradient for text legibility over the photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/5 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />

      <Header />

      {/* Content */}
      <div className="relative mx-auto flex h-full w-full max-w-[1280px] flex-col justify-center px-5 pt-16 md:px-8">
        <h1 className="max-w-[300px] whitespace-pre-line font-display text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-white drop-shadow-sm sm:max-w-[520px] sm:text-[40px] md:max-w-[640px] md:text-[48px]">
          {hero.title}
        </h1>

        {/* Frosted CTA card */}
        <div className="mt-14 w-full max-w-[420px] rounded-[26px] bg-white/20 p-3 backdrop-blur-md ring-1 ring-white/30 md:mt-16">
          <a
            href={hero.primaryCta.href}
            className="block rounded-full bg-kanora-orange px-8 py-4 text-center font-grotesk text-[18px] font-semibold text-white shadow-sm transition-all hover:bg-kanora-orange-hover hover:shadow-md active:scale-[0.99]"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="mt-3 block py-1 text-center font-grotesk text-[16px] font-semibold text-white underline-offset-4 hover:underline"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
