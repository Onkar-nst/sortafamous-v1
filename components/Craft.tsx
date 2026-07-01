"use client";

import { Reveal } from "./Reveal";
import { Counter, Parallax } from "./motion";

const stats = [
  { to: 24, suffix: "+", t: "Awards & mentions", d: "Recognised for work that performs as sharply as it reads." },
  { to: 300, suffix: "+", t: "Placements landed", d: "Earned stories shipped with strategy, creative and media in step." },
  { to: 60, suffix: "+", t: "Brands who stay", d: "Founders and teams who keep us on as long-term partners." },
];

export function Craft() {
  return (
    <section className="relative z-[35] bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border">
      <div className="mx-auto max-w-[1480px]">
        <div className="flex items-baseline justify-between mb-14">
          <Reveal>
            <div className="eyebrow flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Our edge
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="text-sm text-ink-soft">Why Sorta Famous — 2026</div>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-stretch">
          {/* Image card with parallax + overlay caption */}
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden bg-muted aspect-[4/5] lg:aspect-auto lg:h-full min-h-[420px]">
              <Parallax amount={40} className="absolute inset-0">
                <img
                  src="/images/art/work4.jpg"
                  alt="Built on measured craft"
                  loading="lazy"
                  className="h-[120%] w-full object-cover"
                />
              </Parallax>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-cream">
                <h3 className="serif text-3xl">Built on measured craft</h3>
                <p className="text-cream/80 mt-2 max-w-sm">Strategy, creative and media — under one roof.</p>
              </div>
            </div>
          </Reveal>

          {/* Headline + count-up stat rows */}
          <div className="flex flex-col justify-between">
            <Reveal>
              <h2 className="serif text-[clamp(1.9rem,3.4vw,3.2rem)] leading-[1.1] tracking-[-0.01em]">
                Independent by design, obsessive about <span className="serif-italic">outcomes.</span> Sharp thinking, backed by the numbers to prove what moved and why.
              </h2>
            </Reveal>
            <div className="mt-10">
              {stats.map((s, i) => (
                <Reveal key={s.t} delay={i * 90}>
                  <div className="grid grid-cols-[auto_1fr] gap-4 sm:gap-6 items-baseline border-t border-ink/15 py-6">
                    <Counter to={s.to} suffix={s.suffix} className="serif text-4xl sm:text-5xl md:text-6xl leading-none" />
                    <div className="min-w-0">
                      <div className="serif text-xl">{s.t}</div>
                      <p className="text-ink-soft text-sm mt-1 leading-relaxed max-w-xs">{s.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
