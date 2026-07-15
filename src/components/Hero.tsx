import { Header } from "./Header";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1508002366005-75a695ee2d17?auto=format&fit=crop&w=1600&q=80";

export function Hero() {
  return (
    <section className="relative h-[86vh] max-h-[760px] min-h-[560px] w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_IMAGE}
        alt="Une KaNora Lady souriante, formée et vérifiée par Kanora"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Subtle left gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/5 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />

      <Header />

      {/* Content */}
      <div className="relative mx-auto flex h-full w-full max-w-[1280px] flex-col justify-center px-5 pt-16 md:px-8">
        <h1 className="max-w-[320px] font-display text-[34px] font-bold leading-[1.05] tracking-[-0.02em] text-white drop-shadow-sm sm:max-w-[560px] sm:text-[54px] md:max-w-[640px] md:text-[70px]">
          Une maison bien tenue.
          <br />
          Une professionnelle en qui vous croyez.
        </h1>

        {/* Frosted CTA card */}
        <div className="mt-7 w-full max-w-[420px] rounded-[26px] bg-white/20 p-3 backdrop-blur-md ring-1 ring-white/30">
          <a
            href="#"
            className="block rounded-full bg-kanora-orange px-8 py-4 text-center font-grotesk text-[18px] font-semibold text-white shadow-sm transition-all hover:bg-kanora-orange-hover hover:shadow-md active:scale-[0.99]"
          >
            Réserver une KaNora Lady
          </a>
          <a
            href="#"
            className="mt-3 block py-1 text-center font-grotesk text-[16px] font-semibold text-white underline-offset-4 hover:underline"
          >
            Devenir KaNora Lady
          </a>
        </div>
      </div>
    </section>
  );
}
