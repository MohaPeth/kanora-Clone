"use client";

import { useEffect, useRef, useState } from "react";
import { MoveHorizontal, Star } from "lucide-react";
import { community } from "@/data/site";

type Testimonial = (typeof community.testimonials)[number];

function Stars({ rating, size = "md" }: { rating: number; size?: "sm" | "md" }) {
  const cls = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  return (
    <div className="flex gap-0.5 text-kanora-star">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cls}
          fill={i < rating ? "currentColor" : "none"}
          strokeWidth={i < rating ? 0 : 1.5}
          stroke="currentColor"
          opacity={i < rating ? 1 : 0.35}
        />
      ))}
    </div>
  );
}

function FeaturedTestimonial({ t }: { t: Testimonial }) {
  return (
    <div className="reveal mx-auto mt-12 grid max-w-[980px] items-center gap-8 rounded-[28px] bg-kanora-cream p-6 md:grid-cols-[300px_1fr] md:p-10">
      <div className="overflow-hidden rounded-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={t.image}
          alt={`${t.name}, cliente Kanora à ${t.location}`}
          className="h-[300px] w-full object-cover"
          style={{ objectPosition: "imagePosition" in t ? t.imagePosition : "center" }}
        />
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <Stars rating={t.rating} />
          <span className="text-[13px] font-medium text-neutral-500">{t.rating}/5</span>
          <span className="text-[13px] text-neutral-400">·</span>
          <span className="font-grotesk text-[13px] font-semibold text-kanora-orange">{t.service}</span>
        </div>
        <blockquote className="mt-4 font-display text-[22px] font-semibold leading-snug text-kanora-ink sm:text-[26px]">
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <p className="mt-4 font-grotesk text-[16px] font-semibold text-kanora-orange">
          {t.name}
          <span className="font-medium text-neutral-500">, {t.location}</span>
        </p>
      </div>
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="flex w-[calc(100%-1.5rem)] shrink-0 snap-start flex-col rounded-2xl bg-kanora-cream p-5 ring-1 ring-black/[0.03] sm:w-[calc(50%-0.5rem)] lg:w-[calc((100%-2rem)/3)]">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={t.image} alt={t.name} className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="min-w-0">
          <p className="truncate font-grotesk text-[14px] font-semibold text-kanora-ink">{t.name}</p>
          <p className="truncate text-[12px] text-neutral-500">{t.location}</p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Stars rating={t.rating} size="sm" />
        <span className="text-[11px] font-medium text-neutral-500">{t.rating}/5</span>
        <span className="text-[11px] text-neutral-400">·</span>
        <span className="font-grotesk text-[12px] font-semibold text-kanora-orange">{t.service}</span>
      </div>
      <p className="mt-3 flex-1 text-[14px] leading-relaxed text-neutral-600">
        &ldquo;{t.quote}&rdquo;
      </p>
    </article>
  );
}

export function Community() {
  const { badges, testimonials } = community;
  const [featured, ...rest] = testimonials;

  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [atEnd, setAtEnd] = useState(false);

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 16 : track.clientWidth;
    setActive(Math.round(track.scrollLeft / step));
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4);
  };

  useEffect(() => {
    onScroll();
  }, []);

  const scrollToCard = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement | undefined;
    if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="kanora-container">
        <h2 className="reveal text-center font-display text-[34px] font-bold text-kanora-ink sm:text-[44px] md:text-[52px]">
          {community.title}
        </h2>

        {/* Trust badges */}
        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2 rounded-xl bg-kanora-ink px-4 py-2 text-white">
            <span className="font-display text-[18px] font-bold">{badges.enterprise.title}</span>
            <span className="whitespace-pre-line text-[11px] font-semibold leading-tight">
              {badges.enterprise.subtitle}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Stars rating={5} />
            <span className="mt-1 text-[12px] font-semibold text-neutral-500">{badges.rating.label}</span>
          </div>
          <div className="rounded-xl bg-kanora-orange/10 px-4 py-2.5 text-center">
            <span className="block font-display text-[18px] font-bold text-kanora-orange">
              {badges.ladies.count}
            </span>
            <span className="text-[11px] font-semibold text-kanora-orange-hover">
              {badges.ladies.label}
            </span>
          </div>
        </div>

        <FeaturedTestimonial t={featured} />

        {/* Carousel avec repère de scroll */}
        <div className="relative mt-8">
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
          >
            {rest.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>

          {/* Dégradé qui laisse deviner la suite */}
          <div
            className={`pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent transition-opacity duration-300 ${
              atEnd ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        {/* Dots + indice « faites glisser » */}
        <div className="mt-5 flex items-center justify-center gap-4">
          <div className="flex gap-2">
            {rest.map((t, i) => (
              <button
                key={t.name}
                aria-label={`Voir le témoignage ${i + 1}`}
                onClick={() => scrollToCard(i)}
                className={`h-2 rounded-full transition-all ${
                  active === i ? "w-7 bg-kanora-orange" : "w-2 bg-kanora-orange/25"
                }`}
              />
            ))}
          </div>
          <span
            className={`flex items-center gap-1.5 font-grotesk text-[13px] font-medium text-neutral-500 transition-opacity duration-300 ${
              atEnd ? "opacity-0" : "opacity-100"
            }`}
          >
            <MoveHorizontal className="h-4 w-4 animate-swipe-hint text-kanora-orange" />
            Faites glisser
          </span>
        </div>
      </div>
    </section>
  );
}
