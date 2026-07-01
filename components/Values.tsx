"use client";

import { Reveal } from "./Reveal";

const values = [
  { t: "Our Vision", d: "Empowering brands to own their narrative and lead with influence in the digital era." },
  { t: "Our Mission", d: "Delivering impactful strategies that combine creativity, authenticity and measurable results." },
  { t: "Our Approach", d: "Data-driven insights meet bold creativity — because smart strategies deserve fearless execution." },
  { t: "Our Promise", d: "Partnership built on transparency, consistency, and results that speak louder than buzz." },
];

export function Values() {
  return (
    <section className="relative z-[60] bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border">
      <div className="mx-auto max-w-[1480px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-baseline md:justify-between mb-14">
          <Reveal>
            <div>
              <div className="eyebrow mb-3">Our values</div>
              <div className="text-sm text-ink-soft">What guides us</div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="serif text-4xl md:text-7xl md:text-right">
              Values that guide<br />
              every <span className="serif-italic">campaign</span>
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <p className="max-w-2xl text-ink-soft text-lg mb-12">
            Our values shape every story we tell and every strategy we execute — so your brand doesn't just get attention, it earns lasting credibility.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 90}>
              <div className="border-t border-ink/20 pt-6 h-full">
                <h3 className="serif text-3xl">{v.t}</h3>
                <p className="text-ink-soft mt-4 leading-relaxed text-sm">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
