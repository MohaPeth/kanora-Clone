import {
  BadgePercent,
  Check,
  CreditCard,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";

const features = [
  { icon: ShieldCheck, label: "Vérification des antécédents" },
  { icon: GraduationCap, label: "Formation continue des KaNora Ladies" },
  { icon: Star, label: "Avis et notes des familles" },
  { icon: CreditCard, label: "Paiement sécurisé en ligne" },
  { icon: HeartHandshake, label: "Encadrement continu par l'équipe Kanora" },
  { icon: BadgePercent, label: "Sans frais cachés" },
];

export function Comparison() {
  return (
    <section className="bg-kanora-cream py-16 md:py-24">
      <div className="kanora-container">
        <h2 className="reveal text-center font-display text-[34px] font-bold text-kanora-ink sm:text-[44px] md:text-[52px]">
          L&apos;aide à domicile n&apos;est pas un endroit pour couper les coins ronds
        </h2>

        <div className="reveal mx-auto mt-12 max-w-[820px] overflow-hidden rounded-[28px] bg-white shadow-[0_10px_40px_rgba(36,23,18,0.08)]">
          <div className="grid grid-cols-[1fr_96px_96px] sm:grid-cols-[1fr_150px_150px]">
            {/* Header */}
            <div className="p-5" />
            <div className="flex items-center justify-center rounded-t-[22px] bg-kanora-orange px-2 py-6 text-center">
              <span className="font-display text-[15px] font-bold leading-tight text-white sm:text-[18px]">
                Kanora
              </span>
            </div>
            <div className="flex items-center justify-center px-2 py-6 text-center">
              <span className="font-grotesk text-[12px] font-semibold leading-tight text-neutral-500 sm:text-[14px]">
                Bouche à oreille et réseaux sociaux
              </span>
            </div>

            {/* Rows */}
            {features.map((f, i) => {
              const Icon = f.icon;
              const last = i === features.length - 1;
              return (
                <div key={f.label} className="contents">
                  <div className="flex items-center gap-3 border-t border-neutral-100 px-5 py-4">
                    <Icon className="h-6 w-6 shrink-0 text-kanora-orange" strokeWidth={1.7} />
                    <span className="font-grotesk text-[14px] font-medium text-kanora-ink sm:text-[16px]">
                      {f.label}
                    </span>
                  </div>
                  <div
                    className={`flex items-center justify-center bg-kanora-orange/10 ${
                      last ? "rounded-b-[22px] pb-6" : ""
                    }`}
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-kanora-orange">
                      <Check className="h-4 w-4 text-white" strokeWidth={3} />
                    </span>
                  </div>
                  <div className="flex items-center justify-center border-t border-neutral-100">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-neutral-300">
                      <X className="h-4 w-4 text-white" strokeWidth={3} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="rounded-full bg-kanora-ink px-12 py-4 font-grotesk text-[17px] font-semibold text-white transition-all hover:bg-kanora-ink/85 active:scale-[0.98]"
          >
            Réserver
          </a>
        </div>
      </div>
    </section>
  );
}
