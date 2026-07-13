import type { Metadata } from "next";
import { Preloader } from "@/components/Preloader";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
// import { OurClients } from "@/components/OurClients"; // hidden for now
// import { Clients } from "@/components/Clients"; // hidden for now, minimal homepage
// import { Bento } from "@/components/Bento"; // hidden for now
import { Services } from "@/components/Services";
// import { Craft } from "@/components/Craft"; // hidden for now
import { Process } from "@/components/Process";
// Values now lives inside <About /> — the "Who we are" & "Our values" sections are merged.
import { Work } from "@/components/Work";
import { Team } from "@/components/Team";
// import { Testimonials } from "@/components/Testimonials"; // hidden for now, minimal homepage
// import { BrandQuote } from "@/components/BrandQuote"; // removed per brief (avatar scatter section)
// import { Pricing } from "@/components/Pricing"; // hidden for now
// import { Journal } from "@/components/Journal"; // hidden for now, minimal homepage
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sorta Famous · 360° Marketing & PR Agency in India",
  description: "Fame is earned. We manage the rest. Insight led 360° marketing, PR, brand, social and content, visibility that lasts longer than the news cycle.",
  openGraph: {
    title: "Sorta Famous · 360° Marketing & PR Agency",
    description: "Visibility that lasts longer than the news cycle, no clout chasing, just status with substance.",
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
          {/* <OurClients /> hidden for now */}
          {/* About now includes the merged "Our values" content */}
          <About />
          {/* <Clients /> hidden for now, minimal homepage */}
          {/* <Bento /> hidden for now */}
          <Services />
          {/* <Craft /> hidden for now */}
          <Process />
          <Work />
          <Team />
          {/* <Testimonials /> hidden for now, minimal homepage */}
          {/* <BrandQuote /> removed per brief */}
          {/* <Pricing /> hidden for now */}
          {/* <Journal /> hidden for now, minimal homepage */}
          <CTA />
          <FAQ />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
