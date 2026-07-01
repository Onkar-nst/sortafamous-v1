"use client";

import { WordReveal } from "./motion";

export function Manifesto() {
  return (
    <section className="relative z-40 bg-cream py-20 md:py-44 px-6 border-t border-border">
      <div className="mx-auto max-w-[1180px]">
        <WordReveal
          text="Sorta Famous is a communications studio that treats reputation as a craft, and measures it like a science."
          italicFrom={15}
          className="serif text-[clamp(2rem,5.4vw,4.6rem)] leading-[1.12] tracking-[-0.02em] justify-center text-center"
        />
      </div>
    </section>
  );
}
