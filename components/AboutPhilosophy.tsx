"use client";

import { Reveal } from "./Reveal";
import { WordReveal } from "./motion";

export function AboutPhilosophy() {
  return (
    <section className="relative z-50 px-6 md:px-12 lg:px-16 xl:px-28 py-16 md:py-28">
      <div className="mx-auto max-w-[1480px]">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink text-cream px-8 py-16 md:px-16 md:py-28">
          {/* atmospheric glow */}
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-accent/25 blur-[90px]" />
          <div aria-hidden className="pointer-events-none absolute -left-16 -bottom-24 h-72 w-72 rounded-full border border-cream/10" />

          <div className="relative mx-auto max-w-4xl">
            <Reveal>
              <div className="eyebrow mb-8 flex items-center gap-2 text-cream/50">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Our philosophy
              </div>
            </Reveal>
            <WordReveal
              text="Visibility isn't about being everywhere — it's about being remembered for the right reasons."
              className="serif text-[clamp(1.75rem,4.4vw,3.6rem)] leading-[1.2] tracking-[-0.01em]"
              italicFrom={6}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
