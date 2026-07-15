"use client";

import { Reveal } from "./Reveal";
import { WordCascade } from "./WordCascade";

export function AboutHero() {
  return (
    <section className="relative z-10 bg-cream pt-32 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-16 xl:px-28">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <div className="eyebrow mb-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> About us
              </div>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="serif text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.98] tracking-[-0.03em] max-w-[16ch]">
                Creating meaningful visibility for <span className="serif-italic">modern brands</span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink-soft leading-relaxed">
                At Sorta Famous, we believe fame is earned, not accidental. We&apos;re a modern PR,
                marketing and SEO studio that helps brands shape perception, build authority, and
                create visibility that lasts.
              </p>
            </Reveal>
          </div>

          <Reveal delay={160} className="hidden lg:block">
            <WordCascade />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
