import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { CareersHero, Openings } from "@/components/Careers";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open roles at Sorta Famous, a Mumbai PR and communications agency. Executive Assistant to Founder, Business Development, and Accounts.",
  openGraph: {
    title: "Careers · Sorta Famous",
    description:
      "Help brands be seen, heard, and remembered for the right reasons. See open roles and apply.",
  },
};

export default function CareersPage() {
  return (
    <div className="bg-cream text-ink overflow-x-clip">
      <Nav />
      <main>
        <CareersHero />
        <Openings />
      </main>
      <Footer />
    </div>
  );
}
