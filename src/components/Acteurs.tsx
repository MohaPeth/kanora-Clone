import { acteurs } from "@/data/site";

export function Acteurs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="kanora-container">
        <div className="reveal mx-auto max-w-[720px] text-center">
          <h2 className="font-display text-[34px] font-bold text-kanora-ink sm:text-[44px] md:text-[52px]">
            {acteurs.title}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-neutral-600">{acteurs.subtitle}</p>
        </div>

        <div className="reveal mt-12 overflow-hidden rounded-[28px] bg-kanora-cream p-3 shadow-[0_10px_40px_rgba(36,23,18,0.08)] sm:p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={acteurs.image}
            alt={acteurs.imageAlt}
            className="w-full rounded-[20px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
