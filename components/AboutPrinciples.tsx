"use client";

import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const principles = [
  {
    n: "01",
    t: "Strategy Over Shortcuts",
    d: "No clout chasing, no mass blasts. We rely on research-driven storytelling that earns genuine editorial interest.",
  },
  {
    n: "02",
    t: "Visibility With Substance",
    d: "Every initiative is designed to help your brand stand out in a smart, authentic, and culturally relevant way.",
  },
  {
    n: "03",
    t: "Integrated Growth",
    d: "We blend PR, marketing, and SEO into one cohesive system so your visibility drives real business outcomes.",
  },
  {
    n: "04",
    t: "Reputation That Lasts",
    d: "We help build trust and authority that stays with your audience long after the campaign ends.",
  },
];

export function AboutPrinciples() {
  return (
    <section className="relative z-30 bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border">
      <div className="mx-auto max-w-[1480px]">
        <SectionHeader
          eyebrow="How we work"
          title={<>Principles that <span className="serif-italic">shape the work</span></>}
          className="mb-14"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={(i % 4) * 90}>
              <div className="border-t border-ink/20 pt-6 h-full">
                <div className="serif text-4xl text-ink/25 leading-none">{p.n}</div>
                <h3 className="serif text-2xl md:text-3xl mt-4">{p.t}</h3>
                <p className="text-ink-soft mt-4 leading-relaxed text-sm">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
