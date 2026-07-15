const BG =
  "https://images.unsplash.com/photo-1740657254989-42fe9c3b8cce?auto=format&fit=crop&w=1600&q=80";

export function FreeSearch() {
  return (
    <section className="relative min-h-[520px] w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={BG} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-kanora-ink/80 via-kanora-ink/40 to-kanora-ink/10" />

      <div className="kanora-container relative flex min-h-[520px] items-center justify-end py-16">
        <div className="reveal w-full max-w-[500px] rounded-[26px] bg-kanora-ink/45 p-8 backdrop-blur-md ring-1 ring-white/15 md:p-10">
          <h2 className="font-display text-[34px] font-bold leading-[1.05] text-white sm:text-[44px]">
            Le bouche à oreille a ses limites
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-white/85">
            Plus de temps perdu, plus d&apos;incertitude, aucune vérification. Arrêtez de tout gérer
            seul, et trouvez une aide à domicile de confiance.
          </p>
          <a
            href="#"
            className="mt-7 inline-block w-full rounded-full bg-kanora-orange px-8 py-4 text-center font-grotesk text-[17px] font-semibold text-white transition-all hover:bg-kanora-orange-hover active:scale-[0.99] sm:w-auto"
          >
            Voir les tarifs
          </a>
        </div>
      </div>
    </section>
  );
}
