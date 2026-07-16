"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { nav } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 py-5 md:px-8">
        <div className="flex items-center gap-4 md:gap-6">
          <button
            aria-label="Ouvrir le menu"
            onClick={() => setOpen(true)}
            className="grid h-7 w-8 place-items-center text-white drop-shadow-sm transition-transform hover:scale-105"
          >
            <Menu className="h-7 w-7" strokeWidth={2.4} />
          </button>
          <Logo variant="light" />
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <a
            href={nav.loginHref}
            className="hidden font-grotesk text-[17px] font-medium text-white drop-shadow-sm transition-colors hover:text-kanora-orange sm:block"
          >
            {nav.loginLabel}
          </a>
          <a
            href={nav.ctaHref}
            className="rounded-full bg-kanora-orange px-6 py-3 font-grotesk text-[16px] font-semibold text-white shadow-sm transition-all hover:bg-kanora-orange-hover hover:shadow-md active:scale-[0.98]"
          >
            {nav.ctaLabel}
          </a>
        </div>
      </div>

      {/* Slide-over menu */}
      <div
        className={`fixed inset-0 z-[60] transition ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-kanora-ink/40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <nav
          className={`absolute left-0 top-0 h-full w-[86%] max-w-[380px] bg-kanora-cream-2 p-6 shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <Logo />
            <button
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
              className="grid h-9 w-9 place-items-center rounded-full text-kanora-ink hover:bg-kanora-cream"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <ul className="space-y-1">
            {nav.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 font-display text-[22px] font-semibold text-kanora-ink transition-colors hover:bg-kanora-orange/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-3 border-t border-kanora-ink/10 pt-6">
            <a
              href={nav.loginHref}
              className="block rounded-full border border-kanora-ink/20 px-6 py-3 text-center font-grotesk font-semibold text-kanora-ink"
            >
              {nav.loginLabel}
            </a>
            <a
              href={nav.ctaHref}
              className="block rounded-full bg-kanora-orange px-6 py-3 text-center font-grotesk font-semibold text-white"
            >
              {nav.ctaLabel}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
