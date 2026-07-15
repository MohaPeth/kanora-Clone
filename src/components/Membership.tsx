"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Search, Star } from "lucide-react";

const CHOOSE_IMG =
  "https://images.unsplash.com/photo-1651688729724-bafbf0935462?auto=format&fit=crop&w=900&q=80";

/* -------------------- Phone mockups -------------------- */

function CaregiverRow({
  name,
  loc,
  rate,
  note,
  tags,
}: {
  name: string;
  loc: string;
  rate: string;
  note?: string;
  tags?: string[];
}) {
  return (
    <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-black/5">
      <div className="flex items-start gap-3">
        <div className="h-11 w-11 shrink-0 rounded-full bg-gradient-to-br from-kanora-orange/60 to-kanora-orange" />
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <p className="font-grotesk text-[13px] font-bold text-kanora-ink">{name}</p>
            <p className="text-right text-[9px] leading-tight text-neutral-400">
              à partir de
              <span className="block text-[15px] font-bold text-kanora-ink">{rate}</span>
              FCFA / h
            </p>
          </div>
          <p className="text-[11px] text-neutral-500">{loc}</p>
          <div className="mt-0.5 flex gap-0.5 text-kanora-star">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3 w-3" fill="currentColor" strokeWidth={0} />
            ))}
          </div>
        </div>
      </div>
      {note && (
        <p className="mt-2 rounded-md bg-kanora-orange/10 px-2 py-1 text-[10px] font-medium text-kanora-orange-hover">
          {note}
        </p>
      )}
      <div className="mt-2 flex items-center justify-between">
        <div className="flex gap-1">
          {tags?.map((t) => (
            <span
              key={t}
              className="rounded-full bg-neutral-100 px-2 py-0.5 text-[9px] font-medium text-neutral-500"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Heart className="h-4 w-4 text-kanora-orange" />
          <span className="rounded-full bg-kanora-ink px-3 py-1 text-[10px] font-semibold text-white">
            Contacter
          </span>
        </div>
      </div>
    </div>
  );
}

function PhoneMock() {
  return (
    <div className="relative mx-auto w-[210px]">
      <div className="rounded-[2.2rem] border-[7px] border-neutral-900 bg-neutral-900 shadow-2xl">
        <div className="overflow-hidden rounded-[1.7rem] bg-[#f2ede7]">
          {/* status bar */}
          <div className="flex items-center justify-between px-4 pt-2 text-[9px] font-semibold text-kanora-ink">
            <span>9:41</span>
            <span className="flex gap-1">
              <span className="inline-block h-2 w-3 rounded-[1px] bg-kanora-ink/70" />
              <span className="inline-block h-2 w-3 rounded-[1px] bg-kanora-ink/40" />
            </span>
          </div>
          {/* search field */}
          <div className="px-3 pb-3 pt-2">
            <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-black/5">
              <Search className="h-3.5 w-3.5 text-kanora-orange" />
              <div>
                <p className="text-[11px] font-bold leading-none text-kanora-ink">Ménage</p>
                <p className="text-[9px] leading-tight text-neutral-400">Dakar, Plateau</p>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="rounded-full bg-kanora-orange/10 px-2 py-1 text-[9px] font-semibold text-kanora-orange-hover">
                Recommandées
              </span>
              <span className="text-[9px] font-medium text-kanora-orange-hover">Enregistrer</span>
            </div>
            <div className="mt-2 space-y-2">
              <CaregiverRow
                name="Aïcha D."
                loc="Dakar, Almadies"
                rate="1 500"
                note="Recrutée par 5 familles du quartier"
                tags={["Vérifiée", "Formée"]}
              />
              <CaregiverRow name="Fatou S." loc="Dakar, Mermoz · 3 ans d'expérience" rate="1 300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------- Carousel cards -------------------- */

const slides = [
  {
    kind: "image" as const,
    title: "Choisissez votre besoin",
    desc: "Ménage, cuisine ou garde d'enfants, ponctuel ou récurrent.",
  },
  {
    kind: "phone" as const,
    bg: "bg-kanora-cream",
    title: "Recevez votre KaNora Lady",
    desc: "Formée, vérifiée et adaptée à votre foyer, en quelques clics.",
  },
  {
    kind: "phone" as const,
    bg: "bg-kanora-orange/10",
    title: "Suivez et payez en ligne",
    desc: "Simple, sécurisé, sans mauvaise surprise ni frais cachés.",
  },
];

/* -------------------- Stat pills -------------------- */

type Pill = { badge?: string; badgeColor?: string; title: string; sub?: string };

const rowA: Pill[] = [
  { badge: "+300", badgeColor: "bg-kanora-orange text-white", title: "KaNora Ladies", sub: "formées et vérifiées, mai 2026" },
  { badge: "88%", badgeColor: "bg-kanora-orange/15 text-kanora-orange-hover", title: "Nouvelles compétences", sub: "développées grâce à Kanora" },
  { title: "Ménage", sub: "un intérieur impeccable" },
  { title: "Paiement sécurisé", sub: "en ligne, sans frais cachés" },
  { title: "Dakar, Sénégal", sub: "notre ville de naissance" },
  { title: "Formation continue", sub: "pour chaque KaNora Lady" },
  { title: "Encadrement", sub: "assuré par l'équipe Kanora" },
];

const rowB: Pill[] = [
  { badge: "81%", badgeColor: "bg-kanora-star/25 text-kanora-ink", title: "Qualité de vie", sub: "améliorée selon nos KaNora Ladies" },
  { badge: "4.8★", badgeColor: "bg-kanora-orange/15 text-kanora-orange-hover", title: "Note moyenne", sub: "auprès des familles servies" },
  { title: "Cuisine", sub: "des repas faits maison" },
  { title: "Garde d'enfants", sub: "une présence rassurante" },
  { title: "Vérification", sub: "des antécédents, systématique" },
  { title: "Réservation", sub: "simple, en quelques clics" },
  { title: "Entreprise sociale", sub: "au service des familles et des KaNora Ladies" },
];

function PillCard({ p }: { p: Pill }) {
  return (
    <div className="mx-2 flex shrink-0 items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-[0_2px_16px_rgba(36,23,18,0.08)] ring-1 ring-black/[0.03]">
      {p.badge ? (
        <span
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-[13px] font-bold ${p.badgeColor}`}
        >
          {p.badge}
        </span>
      ) : (
        <span className="h-11 w-11 shrink-0 rounded-full bg-gradient-to-br from-kanora-orange/60 to-kanora-orange" />
      )}
      <span className="whitespace-nowrap font-grotesk text-[14px] leading-tight text-kanora-ink">
        <span className="font-bold">{p.title}</span>
        {p.sub && <span className="block text-neutral-500">{p.sub}</span>}
      </span>
    </div>
  );
}

function Marquee({ items, dir }: { items: Pill[]; dir: "left" | "right" }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-paused overflow-hidden py-2">
      <div
        className={`flex w-max ${dir === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{ ["--marquee-duration" as string]: "48s" }}
      >
        {doubled.map((p, i) => (
          <PillCard key={`${p.title}-${i}`} p={p} />
        ))}
      </div>
    </div>
  );
}

/* -------------------- Section -------------------- */

export function Membership() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[i] as HTMLElement | undefined;
    if (child) {
      track.scrollTo({ left: child.offsetLeft - 16, behavior: "smooth" });
      setActive(i);
    }
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const i = Math.round(track.scrollLeft / (track.scrollWidth / slides.length));
    setActive(Math.min(i, slides.length - 1));
  };

  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      <div className="kanora-container">
        <h2 className="reveal text-center font-display text-[34px] font-bold text-kanora-ink sm:text-[44px] md:text-[52px]">
          Une aide à domicile fiable, en 3 étapes
        </h2>

        {/* Carousel */}
        <div className="relative mt-12">
          <button
            aria-label="Précédent"
            onClick={() => scrollTo(Math.max(0, active - 1))}
            className="absolute -left-2 top-1/2 z-10 hidden -translate-y-1/2 place-items-center rounded-full bg-white p-3 shadow-lg ring-1 ring-black/5 transition hover:scale-105 md:grid"
          >
            <ChevronLeft className="h-5 w-5 text-kanora-orange" />
          </button>
          <button
            aria-label="Suivant"
            onClick={() => scrollTo(Math.min(slides.length - 1, active + 1))}
            className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 place-items-center rounded-full bg-white p-3 shadow-lg ring-1 ring-black/5 transition hover:scale-105 md:grid"
          >
            <ChevronRight className="h-5 w-5 text-kanora-orange" />
          </button>

          <div
            ref={trackRef}
            onScroll={onScroll}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
          >
            {slides.map((s) => (
              <div
                key={s.title}
                className="w-[85%] shrink-0 snap-center sm:w-[46%] lg:w-[31.5%]"
              >
                <div className="flex h-[360px] items-end overflow-hidden rounded-[26px]">
                  {s.kind === "image" ? (
                    <div className="relative h-full w-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={CHOOSE_IMG} alt="Famille choisissant un service Kanora" className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-5 text-white">
                        <p className="font-display text-[26px] font-bold leading-none">Étape 1</p>
                        <p className="mt-1 text-[13px] font-medium">Choisissez votre besoin</p>
                        <p className="mt-2 text-[12px] text-white/85">
                          Ménage, cuisine ou garde d'enfants, ponctuel ou récurrent
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className={`grid h-full w-full place-items-center ${s.bg} pt-8`}>
                      <PhoneMock />
                    </div>
                  )}
                </div>
                <h3 className="mt-5 font-display text-[24px] font-bold text-kanora-ink">{s.title}</h3>
                <p className="mt-1 max-w-[340px] text-[16px] leading-relaxed text-neutral-600">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* dots */}
          <div className="mt-6 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Aller à l'étape ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={`h-2 rounded-full transition-all ${
                  active === i ? "w-7 bg-kanora-orange" : "w-2 bg-kanora-orange/25"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Book */}
        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="rounded-full bg-kanora-ink px-12 py-4 font-grotesk text-[17px] font-semibold text-white transition-all hover:bg-kanora-ink/85 active:scale-[0.98]"
          >
            Réserver
          </a>
        </div>
      </div>

      {/* Marquee pills */}
      <div className="mt-14 space-y-2">
        <Marquee items={rowA} dir="left" />
        <Marquee items={rowB} dir="right" />
      </div>
    </section>
  );
}
