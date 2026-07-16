"use client";

import { useMemo, useState } from "react";
import { Lock } from "lucide-react";
import { pricing, services } from "@/data/site";

function formatFcfa(n: number) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function PricingSimulator() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [hours, setHours] = useState(3);
  const [freqIndex, setFreqIndex] = useState(0);

  const service = services.items[serviceIndex];
  const freq = pricing.frequencies[freqIndex];
  const total = useMemo(
    () => service.rate * hours * freq.mult,
    [service.rate, hours, freq.mult]
  );

  return (
    <section id="tarifs" className="sec bg-white py-16 md:py-24">
      <div className="kanora-container">
        <div className="reveal mx-auto max-w-[640px] text-center">
          <span className="mb-3 block font-grotesk text-[13px] font-bold uppercase tracking-[0.12em] text-kanora-orange">
            {pricing.eyebrow}
          </span>
          <h2 className="font-display text-[34px] font-bold text-kanora-ink sm:text-[44px] md:text-[52px]">
            {pricing.title}
          </h2>
        </div>

        <div className="reveal mx-auto mt-12 grid max-w-[880px] overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(36,23,18,0.14)] md:grid-cols-[1.05fr_0.95fr]">
          {/* Controls */}
          <div className="bg-white p-8 md:p-9">
            <div className="mb-6">
              <label className="mb-2 block font-grotesk text-[13px] font-semibold text-kanora-ink">
                Service
              </label>
              <select
                value={serviceIndex}
                onChange={(e) => setServiceIndex(Number(e.target.value))}
                className="w-full rounded-xl border border-black/10 px-4 py-3 font-grotesk text-[15px] text-kanora-ink"
              >
                {services.items.map((s, i) => (
                  <option key={s.id} value={i}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="mb-2 block font-grotesk text-[13px] font-semibold text-kanora-ink">
                Durée
              </label>
              <select
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full rounded-xl border border-black/10 px-4 py-3 font-grotesk text-[15px] text-kanora-ink"
              >
                {pricing.hoursOptions.map((h) => (
                  <option key={h} value={h}>
                    {h} heures{h === 8 ? " (journée)" : ""}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block font-grotesk text-[13px] font-semibold text-kanora-ink">
                Fréquence
              </label>
              <div className="flex flex-wrap gap-2">
                {pricing.frequencies.map((f, i) => (
                  <button
                    key={f.label}
                    onClick={() => setFreqIndex(i)}
                    className={`min-w-[100px] flex-1 rounded-xl border px-3 py-3 font-grotesk text-[13px] font-semibold transition-colors ${
                      freqIndex === i
                        ? "border-kanora-orange bg-kanora-orange/10 text-kanora-orange"
                        : "border-black/10 text-neutral-500"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="flex flex-col justify-center bg-kanora-ink p-8 text-white md:p-9">
            <span className="font-grotesk text-[12px] uppercase tracking-[0.14em] text-white/70">
              Estimation
            </span>
            <div className="mt-2 font-display text-[46px] font-bold leading-none">
              {formatFcfa(total)}{" "}
              <span className="font-grotesk text-[17px] font-semibold text-white/70">
                FCFA / {freq.per}
              </span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-[13.5px] leading-relaxed text-white/85">
              <Lock className="h-4 w-4 shrink-0" />
              {pricing.guarantee}
            </div>
            <a
              href={pricing.ctaHref}
              className="mt-6 inline-block self-start rounded-full bg-kanora-orange px-8 py-3.5 text-center font-grotesk text-[15px] font-semibold text-white transition-all hover:bg-kanora-orange-hover active:scale-[0.98]"
            >
              {pricing.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
