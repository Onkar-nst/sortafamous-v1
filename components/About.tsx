"use client";

import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative z-10 bg-cream rounded-t-[2.5rem] shadow-[0_-30px_60px_-30px_rgba(0,0,0,0.25)] py-16 md:py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-[1480px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-baseline md:justify-between mb-14">
          <Reveal>
            <div>
              <div className="eyebrow mb-3">Who we are</div>
              <div className="text-sm text-ink-soft">The Strategists · 2026</div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="serif text-4xl md:text-7xl md:text-right">
              Behind the<br />
              <span className="serif-italic">spotlight</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <p className="serif text-[clamp(1.6rem,3.2vw,3rem)] leading-[1.15] tracking-[-0.01em] max-w-5xl">
            We're <span className="serif-italic">Sorta Famous</span>, helping founders, startups and modern brands earn the right kind of attention. We don't chase clout — we shape reputations. Visibility sticks, and it's the smart kind.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
