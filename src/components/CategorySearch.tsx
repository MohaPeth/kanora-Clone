const categories = [
  {
    label: "Ménage",
    desc: "Un intérieur impeccable, sans y penser.",
    img: "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Cuisine",
    desc: "Des repas faits maison, préparés chez vous.",
    img: "https://images.unsplash.com/photo-1556911073-a517e752729c?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Garde d'enfants",
    desc: "Une présence rassurante pour vos enfants.",
    img: "https://images.unsplash.com/photo-1694286066986-6b2b7f709605?auto=format&fit=crop&w=800&q=80",
  },
];

export function CategorySearch() {
  return (
    <section className="bg-kanora-cream py-16 md:py-24">
      <div className="kanora-container">
        <h2 className="reveal text-center font-display text-[34px] font-bold text-kanora-ink sm:text-[44px] md:text-[52px]">
          Nos services
        </h2>

        {/* Dark search pill */}
        <div className="reveal mx-auto mt-8 flex max-w-[960px] flex-col items-stretch gap-3 rounded-[28px] bg-kanora-ink p-3 sm:flex-row sm:items-center sm:rounded-full sm:pl-8 sm:pr-3">
          <p className="flex-1 py-2 text-center font-grotesk text-[18px] font-medium text-white/90 sm:text-left sm:text-[19px]">
            Trois services, un même soin du détail.
          </p>
          <a
            href="#"
            className="rounded-full bg-kanora-orange px-9 py-4 text-center font-grotesk text-[16px] font-semibold text-white transition-all hover:bg-kanora-orange-hover active:scale-[0.98]"
          >
            Réserver
          </a>
        </div>

        {/* Category cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {categories.map((cat, i) => (
            <a
              key={cat.label}
              href="#"
              style={{ transitionDelay: `${i * 60}ms` }}
              className="reveal group overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(36,23,18,0.08)] ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(36,23,18,0.14)]"
            >
              <div className="h-[200px] w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.img}
                  alt={cat.label}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="block font-grotesk text-[17px] font-semibold text-kanora-ink">
                  {cat.label}
                </span>
                <span className="mt-1 block text-[14px] text-neutral-500">{cat.desc}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
