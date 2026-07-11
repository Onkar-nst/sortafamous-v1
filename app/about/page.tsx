import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { AboutHero } from "@/components/AboutHero";
import { AboutManifesto } from "@/components/AboutManifesto";
import { AboutPrinciples } from "@/components/AboutPrinciples";
import { AboutValues } from "@/components/AboutValues";
import { AboutNote } from "@/components/AboutNote";
import { AboutPhilosophy } from "@/components/AboutPhilosophy";
import { Team } from "@/components/Team";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About us",
  description:
    "At Sorta Famous, fame is earned, not accidental. A modern PR, marketing and SEO studio helping brands shape perception, build authority, and create visibility that lasts.",
  openGraph: {
    title: "About us · Sorta Famous",
    description:
      "Creating meaningful visibility for modern brands, strategy over shortcuts, visibility with substance, reputation that lasts.",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-cream text-ink overflow-x-clip">
      <Nav />
      <main>
        <AboutHero />
        <AboutManifesto />
        <AboutPrinciples />
        <AboutValues />
        <AboutNote />
        <AboutPhilosophy />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
