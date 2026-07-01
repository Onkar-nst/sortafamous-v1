"use client";

import { Leaf, Flower2, Hexagon, Gem, Compass, Aperture } from "lucide-react";
import { RevealStagger, RevealItem } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const clients = [
  { name: "Borden", Icon: Hexagon },
  { name: "Leafe", Icon: Leaf },
  { name: "Blossom", Icon: Flower2 },
  { name: "Hues", Icon: Aperture },
  { name: "Trace", Icon: Compass },
  { name: "Penta", Icon: Gem },
];

export function OurClients() {
  return (
    <section className="relative z-10 bg-cream rounded-t-[2.5rem] shadow-[0_-30px_60px_-30px_rgba(0,0,0,0.25)] pt-16 md:pt-24 pb-8 md:pb-10 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border">
      <div className="mx-auto max-w-[1480px]">
        <SectionHeader
          eyebrow="Trusted by"
          title="Our clients"
          marker="/ 2019–27 / ©"
          className="mb-10"
        />
        <RevealStagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {clients.map(({ name, Icon }) => (
            <RevealItem key={name}>
              <div className="group h-24 md:h-28 rounded-2xl border border-ink/12 bg-card/60 flex items-center justify-center gap-2.5 hover:-translate-y-1 hover:border-ink/25 hover:bg-card transition duration-300">
                <Icon
                  className="h-5 w-5 text-ink/70 group-hover:text-accent transition-colors"
                  strokeWidth={1.6}
                />
                <span className="text-lg md:text-xl font-medium tracking-tight">{name}</span>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
