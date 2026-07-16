"use client";

import { Hero } from "@/components/Hero";
import { CategorySearch } from "@/components/CategorySearch";
import { Membership } from "@/components/Membership";
import { FreeSearch } from "@/components/FreeSearch";
import { Comparison } from "@/components/Comparison";
import { PricingSimulator } from "@/components/PricingSimulator";
import { Community } from "@/components/Community";
import { Acteurs } from "@/components/Acteurs";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";

export default function Home() {
  useReveal();

  return (
    <main className="bg-white">
      <Hero />
      <CategorySearch />
      <Membership />
      <FreeSearch />
      <Comparison />
      <PricingSimulator />
      <Community />
      <Acteurs />
      <CTA />
      <Footer />
    </main>
  );
}
