import type { Metadata } from "next";
import { Preloader } from "@/components/Preloader";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { OurClients } from "@/components/OurClients";
import { Clients } from "@/components/Clients";
import { Bento } from "@/components/Bento";
import { Services } from "@/components/Services";
import { Craft } from "@/components/Craft";
import { Process } from "@/components/Process";
import { Values } from "@/components/Values";
import { Proof } from "@/components/Proof";
import { Work } from "@/components/Work";
import { Team } from "@/components/Team";
import { Pricing } from "@/components/Pricing";
import { Journal } from "@/components/Journal";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sorta Famous — PR & Strategic Communications Agency in India",
  description: "Fame is earned. We manage the rest. Insight-led PR and social media performance — visibility that lasts longer than the news cycle.",
  openGraph: {
    title: "Sorta Famous — PR & Strategic Communications Agency",
    description: "Visibility that lasts longer than the news cycle — no clout chasing, just status with substance.",
  },
};

export default function Home() {
  return (
    <div className="bg-cream text-ink overflow-x-clip">
      <Preloader />
      <Nav />
      <main>
        <Hero />
        {/* Wrapper makes following sections scroll OVER the sticky hero like a blanket */}
        <div className="relative z-10 bg-cream">
          <OurClients />
          <About />
          <Values />
          <Bento />
          <Clients />
          <Services />
          <Craft />
          <Process />
          <Proof />
          <Work />
          <Team />
          <Pricing />
          <Journal />
          <CTA />
          <FAQ />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
