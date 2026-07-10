import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { ServicesHero } from "@/components/ServicesHero";
import { ServicePillars } from "@/components/ServicePillars";
import { ServicePlans } from "@/components/ServicePlans";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "360° marketing across PR, Brand Management and Social Media Marketing — from press placements to founder brand and paid social. Plans that scale from emerging visibility to market leadership.",
  openGraph: {
    title: "Services · Sorta Famous",
    description:
      "Three connected practices, one cohesive system — PR, brand management and social. We craft stories that make brands matter.",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-cream text-ink overflow-x-clip">
      <Nav />
      <main>
        <ServicesHero />
        <ServicePillars />
        <ServicePlans />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
