"use client";

import { Reveal } from "./Reveal";
import { Marquee } from "./motion";

const outlets = [
  "Forbes", "TechCrunch", "Vogue", "WIRED", "YourStory",
  "Economic Times", "Mint", "Inc42", "The Hindu", "Business Standard",
];

export function Clients() {
  return (
    <section className="relative z-20 bg-cream py-16 border-t border-border overflow-hidden">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12 lg:px-16 xl:px-28 mb-8 flex items-center justify-between">
        <Reveal>
          <div className="eyebrow flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> As seen in
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="serif-italic text-sm text-ink-soft">/ press /</div>
        </Reveal>
      </div>
      <div className="relative">
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-cream to-transparent" />
        <Marquee duration={30}>
          {outlets.map((o) => (
            <span key={o} className="serif text-3xl md:text-4xl text-ink/45 hover:text-ink transition-colors px-2">
              {o}
              <span className="text-accent/60 ml-8">✦</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
