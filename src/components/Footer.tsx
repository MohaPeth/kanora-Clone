"use client";

import { useState } from "react";
import { ChevronDown, Facebook, Instagram, Youtube } from "lucide-react";
import { footer } from "@/data/site";

function LinkList({ title, links }: { title: string; links: readonly string[] }) {
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
  const [col1, col2, col3] = footer.columns;

  return (
    <footer className="bg-kanora-ink text-white" suppressHydrationWarning>
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 md:px-8" suppressHydrationWarning>
        {/* Top columns */}
        <div className="grid gap-10 md:grid-cols-[1fr_1fr_1.4fr_auto]">
          <LinkList title={col1.title} links={col1.links} />
          <LinkList title={col2.title} links={col2.links} />
          <LinkList title={col3.title} links={col3.links} />

          <div className="flex flex-col gap-3">
            {footer.appStores.map((store) => (
              <a
                key={store.name}
                href={store.href}
                className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-2.5 transition hover:bg-white/15"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-lg bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={store.logo}
                    alt=""
                    className="h-7 w-7 object-contain"
                  />
                </span>
                <span className="leading-tight">
                  <span className="block text-[10px] text-white/60">{store.caption}</span>
                  <span className="block text-[14px] font-semibold text-white">{store.name}</span>
                </span>
              </a>
            ))}
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
              {footer.popular.map((c) => (
                <LinkList key={c.title} title={c.title} links={c.links} />
              ))}
            </div>
          </Accordion>

          <Accordion title="Trouvez une KaNora Lady près de chez vous">
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              {footer.quartiers.map((q) => (
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
              {footer.villes.map((v) => (
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
          {footer.legal.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row"
          suppressHydrationWarning
        >
          <div className="flex items-center" suppressHydrationWarning>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.webp"
              alt="Kanora"
              className="h-12 w-auto object-contain brightness-0 invert"
            />
          </div>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] text-white/70">
            {footer.legalLinks.map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-white">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
