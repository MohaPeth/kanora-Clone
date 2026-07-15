"use client";

import { useState } from "react";
import { ChevronDown, Facebook, Instagram, Smartphone, Youtube } from "lucide-react";
import { KanoraMark } from "./Logo";

const col1 = {
  title: "À propos de Kanora",
  links: ["Qui sommes nous", "Notre mission", "Notre impact", "Conditions d'utilisation", "Politique de confidentialité"],
};
const col2 = {
  title: "Aide",
  links: ["Sécurité", "Articles et guides", "Centre d'aide", "Nous contacter"],
};
const col3 = {
  title: "Découvrir",
  links: [
    "Kanora pour les familles",
    "Devenir KaNora Lady",
    "Tarifs",
    "Kanora pour les entreprises",
    "Devenir partenaire",
    "Guides de tarifs",
  ],
};

const popular = [
  {
    title: "Ménage",
    links: ["Ménage à domicile", "Nettoyage en profondeur", "Repassage", "Ménage récurrent", "Tarifs ménage"],
  },
  {
    title: "Cuisine",
    links: ["Repas faits maison", "Cuisine à domicile", "Cuisine ponctuelle", "Tarifs cuisine"],
  },
  {
    title: "Garde d'enfants",
    links: ["Garde d'enfants à domicile", "Assistante maternelle", "Baby sitting", "Tarifs garde d'enfants"],
  },
  {
    title: "Ressources",
    links: [
      "Guides et ressources",
      "Devenir KaNora Lady",
      "Notre communauté",
      "Notre impact",
      "Simulateur de tarifs",
    ],
  },
];

const quartiers = [
  "Plateau", "Almadies", "Ouakam", "Ngor", "Yoff", "Mermoz", "Sacré Cœur", "Point E",
  "Liberté", "Grand Yoff", "Parcelles Assainies", "Sicap", "Fann", "Hann", "Dieuppeul",
  "Castors", "Gueule Tapée", "Médina", "HLM", "Cambérène", "Ouest Foire", "Golf Sud",
  "Patte d'Oie", "Grand Dakar", "Colobane",
];

const villes = [
  "Rufisque", "Guédiawaye", "Pikine", "Thiès", "Saint Louis", "Mbour", "Diamniadio",
  "Ziguinchor", "Kaolack", "Saly", "Touba", "Louga",
];

function LinkList({ title, links }: { title: string; links: string[] }) {
  return (
    <div suppressHydrationWarning>
      <h4 className="font-grotesk text-[15px] font-bold text-kanora-orange">{title}</h4>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-[14px] text-white/75 transition-colors hover:text-white">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-white/10 py-5" suppressHydrationWarning>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="font-grotesk text-[18px] font-bold text-white">{title}</span>
        <ChevronDown
          className={`h-5 w-5 text-kanora-orange transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${open ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        suppressHydrationWarning
      >
        <div className="overflow-hidden" suppressHydrationWarning>
          {children}
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-kanora-ink text-white" suppressHydrationWarning>
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 md:px-8" suppressHydrationWarning>
        {/* Top columns */}
        <div className="grid gap-10 md:grid-cols-[1fr_1fr_1.4fr_auto]">
          <LinkList {...col1} />
          <LinkList {...col2} />
          <LinkList {...col3} />

          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-2.5 transition hover:bg-white/15"
            >
              <Smartphone className="h-6 w-6 shrink-0 text-white" />
              <span className="leading-tight">
                <span className="block text-[10px] text-white/60">Télécharger sur</span>
                <span className="block text-[14px] font-semibold text-white">App Store</span>
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-2.5 transition hover:bg-white/15"
            >
              <Smartphone className="h-6 w-6 shrink-0 text-white" />
              <span className="leading-tight">
                <span className="block text-[10px] text-white/60">Disponible sur</span>
                <span className="block text-[14px] font-semibold text-white">Google Play</span>
              </span>
            </a>
            <div className="mt-2 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-11 w-11 place-items-center rounded-full bg-kanora-orange text-white transition hover:bg-kanora-orange-hover"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
              <a
                href="#"
                className="grid h-11 w-11 place-items-center rounded-full bg-kanora-orange font-bold text-white transition hover:bg-kanora-orange-hover"
                aria-label="X"
              >
                X
              </a>
            </div>
          </div>
        </div>

        {/* Popular topics */}
        <div className="mt-10" suppressHydrationWarning>
          <Accordion title="Sujets populaires" defaultOpen>
            <div className="grid gap-8 pt-2 sm:grid-cols-2 lg:grid-cols-4">
              {popular.map((c) => (
                <LinkList key={c.title} {...c} />
              ))}
            </div>
          </Accordion>

          <Accordion title="Trouvez une KaNora Lady près de chez vous">
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              {quartiers.map((q) => (
                <a
                  key={q}
                  href="#"
                  className="text-[14px] text-white/75 transition-colors hover:text-white"
                >
                  {q}
                </a>
              ))}
            </div>
          </Accordion>

          <Accordion title="Bientôt disponible au Sénégal">
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              {villes.map((v) => (
                <a
                  key={v}
                  href="#"
                  className="text-[14px] text-white/75 transition-colors hover:text-white"
                >
                  {v}
                </a>
              ))}
            </div>
          </Accordion>
        </div>

        {/* Legal */}
        <div
          className="mt-10 space-y-4 border-t border-white/10 pt-8 text-[12px] leading-relaxed text-white/55"
          suppressHydrationWarning
        >
          <p>
            Les vérifications des antécédents ne sont pas toujours exhaustives et ne peuvent
            garantir une sécurité absolue. Pour en savoir plus, consultez notre page sécurité.
          </p>
          <p>
            Kanora forme et encadre les KaNora Ladies présentes sur sa plateforme, mais
            n&apos;emploie pas directement chaque professionnelle et n&apos;est pas responsable
            de la conduite de chaque utilisateur du service.
          </p>
          <p>
            Kanora est une marque de services à la personne. © 2026 Kanora Services. Tous droits
            réservés.
          </p>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row"
          suppressHydrationWarning
        >
          <div className="flex items-center gap-2" suppressHydrationWarning>
            <KanoraMark className="h-7 w-7" />
            <span className="font-display text-[18px] font-bold text-white">Kanora</span>
          </div>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] text-white/70">
            {["Conditions d'utilisation", "Politique de confidentialité", "Mentions légales", "Cookies"].map(
              (l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white">
                    {l}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}
