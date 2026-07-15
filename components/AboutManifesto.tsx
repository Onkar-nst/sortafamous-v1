"use client";

import { Reveal } from "./Reveal";
import { WordReveal } from "./motion";

export function AboutManifesto() {
  return (
    <section className="relative z-30 bg-cream py-20 md:py-32 px-6 md:px-12 lg:px-16 xl:px-28">
      <div className="mx-auto max-w-[1480px]">
        <Reveal>
          <div className="eyebrow mb-10 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> What drives us
          </div>
        </Reveal>
        <WordReveal
          text="We don't chase clout, we shape reputations that last. Visibility that sticks, and it's the smart kind."
          className="serif text-[clamp(1.75rem,4.4vw,3.6rem)] leading-[1.25] tracking-[-0.01em] w-full"
          italicFrom={10}
        />
      </div>
    </section>
  );
}
