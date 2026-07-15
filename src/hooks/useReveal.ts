"use client";

import { useEffect } from "react";

/**
 * Adds the `in-view` class to any `.reveal` element when it scrolls into view,
 * triggering the fade-up animation defined in globals.css.
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
