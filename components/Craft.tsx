"use client";

import { Reveal } from "./Reveal";
import { Counter, Parallax } from "./motion";
import { SectionHeader } from "./SectionHeader";

const stats = [
  { to: 24, suffix: "+", t: "Awards & mentions", d: "Recognised for work that performs as sharply as it reads." },
  { to: 300, suffix: "+", t: "Placements landed", d: "Earned stories shipped with strategy, creative and media in step." },
  { to: 60, suffix: "+", t: "Brands who stay", d: "Founders and teams who keep us on as long term partners." },
];

export function Craft() {
  return (
    <section className="relative z-[70] bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border">
      <div className="mx-auto max-w-[1480px]">
        <SectionHeader
          eyebrow="Our edge"
          title="Why Sorta Famous"
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-stretch">
          {/* Image card with parallax + overlay caption */}
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden bg-muted aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[420px]">
              <Parallax amount={40} className="absolute inset-0">
                <img
                  src="/images/art/craft.jpg"
                  alt="Built on measured craft"
                  loading="lazy"
                  className="h-[120%] w-full object-cover"
                />
              </Parallax>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-cream">
                <h3 className="serif text-2xl md:text-3xl">Built on measured craft</h3>
                <p className="text-cream/80 mt-2 max-w-sm">Strategy, creative and media, under one roof.</p>
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
