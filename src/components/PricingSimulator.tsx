"use client";

import { useMemo, useState } from "react";
import { Lock } from "lucide-react";

const services = [
  { label: "Ménage", rate: 3000 },
  { label: "Cuisine", rate: 3500 },
  { label: "Garde d'enfants", rate: 4000 },
];

const hoursOptions = [2, 3, 4, 6, 8];

const frequencies = [
  { label: "Ponctuel", mult: 1, per: "intervention" },
  { label: "1x / semaine", mult: 4, per: "mois" },
  { label: "2x / semaine", mult: 8, per: "mois" },
];

function formatFcfa(n: number) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function PricingSimulator() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [hours, setHours] = useState(3);
  const [freqIndex, setFreqIndex] = useState(0);

  const service = services[serviceIndex];
  const freq = frequencies[freqIndex];
  const total = useMemo(
    () => service.rate * hours * freq.mult,
    [service.rate, hours, freq.mult]
  );

  return (
    <section className="sec bg-white py-16 md:py-24">
      <div className="kanora-container">
        <div className="reveal mx-auto max-w-[640px] text-center">
          <span className="mb-3 block font-grotesk text-[13px] font-bold uppercase tracking-[0.12em] text-kanora-orange">
            Simulateur de tarifs
          </span>
          <h2 className="font-display text-[34px] font-bold text-kanora-ink sm:text-[44px] md:text-[52px]">
            Estimez le coût de votre service
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
                {services.map((s, i) => (
                  <option key={s.label} value={i}>
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
                {hoursOptions.map((h) => (
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
                {frequencies.map((f, i) => (
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
              Aucun frais caché. Vous savez exactement ce que vous payez.
            </div>
            <a
              href="#"
              className="mt-6 inline-block self-start rounded-full bg-kanora-orange px-8 py-3.5 text-center font-grotesk text-[15px] font-semibold text-white transition-all hover:bg-kanora-orange-hover active:scale-[0.98]"
            >
              Réserver maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
