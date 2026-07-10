"use client";

import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const values = [
  { t: "Our Vision", d: "Empowering brands to own their narrative and lead with influence in the digital era." },
  { t: "Our Mission", d: "Delivering impactful strategies that combine creativity, authenticity and measurable results." },
  { t: "Our Approach", d: "Data-driven insights meet bold creativity — because smart strategies deserve fearless execution." },
  { t: "Our Promise", d: "Partnership built on transparency, consistency, and results that speak louder than buzz." },
];

export function AboutValues() {
  return (
    <section className="relative z-40 bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border">
      <div className="mx-auto max-w-[1480px]">
        <SectionHeader
          eyebrow="What we stand for"
          title={<>Values that guide <span className="serif-italic">every campaign</span></>}
          className="mb-14"
        />
        <div>
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 70}>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_1.6fr] md:gap-10 items-baseline border-t border-ink/15 py-8 md:py-10">
                <h3 className="serif text-3xl md:text-4xl">{v.t}</h3>
                <p className="text-ink-soft md:text-xl leading-relaxed max-w-2xl">{v.d}</p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-ink/15" />
        </div>
      </div>
    </section>
  );
}
