import { services } from "@/data/site";

export function CategorySearch() {
  return (
    <section id="services" className="bg-kanora-cream py-16 md:py-24">
      <div className="kanora-container">
        <h2 className="reveal text-center font-display text-[34px] font-bold text-kanora-ink sm:text-[44px] md:text-[52px]">
          {services.title}
        </h2>

        {/* Dark search pill */}
        <div className="reveal mx-auto mt-8 flex max-w-[960px] flex-col items-stretch gap-3 rounded-[28px] bg-kanora-ink p-3 sm:flex-row sm:items-center sm:rounded-full sm:pl-8 sm:pr-3">
          <p className="flex-1 py-2 text-center font-grotesk text-[18px] font-medium text-white/90 sm:text-left sm:text-[19px]">
            {services.subtitle}
          </p>
          <a
            href={services.ctaHref}
            className="rounded-full bg-kanora-orange px-9 py-4 text-center font-grotesk text-[16px] font-semibold text-white transition-all hover:bg-kanora-orange-hover active:scale-[0.98]"
          >
            {services.ctaLabel}
          </a>
        </div>

        {/* Category cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {services.items.map((cat, i) => (
            <a
              key={cat.id}
              href="#"
              style={{ transitionDelay: `${i * 60}ms` }}
              className="reveal group overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(36,23,18,0.08)] ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(36,23,18,0.14)]"
            >
              <div className="h-[200px] w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="block font-grotesk text-[17px] font-semibold text-kanora-ink">
                  {cat.label}
                </span>
                <span className="mt-1 block text-[14px] text-neutral-500">{cat.description}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
