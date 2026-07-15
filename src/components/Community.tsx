import { Star } from "lucide-react";

const AMINATA =
  "https://images.unsplash.com/photo-1530785602389-07594beb8b73?auto=format&fit=crop&w=700&q=80";

const gallery = [
  {
    img: "https://images.unsplash.com/photo-1606416132922-22ab37c1231e?auto=format&fit=crop&w=400&q=80",
    name: "Khady, cliente Kanora",
  },
  {
    img: "https://images.unsplash.com/photo-1554727242-741c14fa561c?auto=format&fit=crop&w=400&q=80",
    name: "Fatou, KaNora Lady",
  },
  {
    img: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?auto=format&fit=crop&w=400&q=80",
    name: "Coumba, KaNora Lady",
  },
  {
    img: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?auto=format&fit=crop&w=400&q=80",
    name: "Ndèye, cliente Kanora",
  },
  {
    img: "https://images.unsplash.com/photo-1534470717-233b39a41c54?auto=format&fit=crop&w=400&q=80",
    name: "Awa, KaNora Lady",
  },
];

export function Community() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="kanora-container">
        <h2 className="reveal text-center font-display text-[34px] font-bold text-kanora-ink sm:text-[44px] md:text-[52px]">
          Notre communauté parle d&apos;elle même
        </h2>

        {/* Trust badges */}
        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2 rounded-xl bg-kanora-ink px-4 py-2 text-white">
            <span className="font-display text-[18px] font-bold">Kanora</span>
            <span className="text-[11px] font-semibold leading-tight">
              ENTREPRISE SOCIALE
              <span className="block">SÉNÉGALAISE</span>
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex gap-0.5 text-kanora-star">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5" fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="mt-1 text-[12px] font-semibold text-neutral-500">
              4.8 de note moyenne
            </span>
          </div>
          <div className="rounded-xl bg-kanora-orange/10 px-4 py-2.5 text-center">
            <span className="block font-display text-[18px] font-bold text-kanora-orange">
              +300
            </span>
            <span className="text-[11px] font-semibold text-kanora-orange-hover">
              KaNora Ladies formées
            </span>
          </div>
        </div>

        {/* Testimonial */}
        <div className="reveal mx-auto mt-12 grid max-w-[980px] items-center gap-8 rounded-[28px] bg-kanora-cream p-6 md:grid-cols-[300px_1fr] md:p-10">
          <div className="overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={AMINATA} alt="Aminata, cliente Kanora à Dakar" className="h-[300px] w-full object-cover" />
          </div>
          <div>
            <div className="flex gap-1 text-kanora-star">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5" fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <blockquote className="mt-4 font-display text-[22px] font-semibold leading-snug text-kanora-ink sm:text-[26px]">
              &ldquo;Ma KaNora Lady est ponctuelle, formée et de confiance. Je n&apos;ai plus à
              m&apos;inquiéter du ménage ni de la garde de mes enfants.&rdquo;
            </blockquote>
            <p className="mt-4 font-grotesk text-[16px] font-semibold text-kanora-orange">
              Aminata, mère de deux enfants, Sacré Cœur
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div className="no-scrollbar mt-8 flex gap-4 overflow-x-auto pb-2">
          {gallery.map((g) => (
            <div
              key={g.name}
              className="group relative aspect-[3/4] w-[150px] shrink-0 overflow-hidden rounded-2xl sm:w-[180px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={g.img}
                alt={g.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              <span className="absolute bottom-3 left-3 right-3 font-grotesk text-[13px] font-semibold text-white">
                {g.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
