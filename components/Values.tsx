"use client";

import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const values = [
  { t: "Our Vision", d: "Empowering brands to own their narrative and lead with influence in the digital era." },
  { t: "Our Mission", d: "Delivering impactful strategies that combine creativity, authenticity and measurable results." },
  { t: "Our Approach", d: "Data driven insights meet bold creativity, because smart strategies deserve fearless execution." },
  { t: "Our Promise", d: "Partnership built on transparency, consistency, and results that speak louder than buzz." },
];

export function Values() {
  return (
    <section className="relative z-30 bg-cream rounded-t-[2.5rem] shadow-[0_-30px_60px_-30px_rgba(0,0,0,0.25)] py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28">
      <div className="mx-auto max-w-[1480px]">
        <SectionHeader
          eyebrow="Our values"
          title={<>Values that guide <span className="serif-italic">every campaign</span></>}
          className="mb-14"
        />
        <Reveal>
          <p className="max-w-2xl text-ink-soft text-lg mb-12">
            Our values shape every story we tell and every strategy we execute, so your brand doesn't just get attention, it earns lasting credibility.
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
