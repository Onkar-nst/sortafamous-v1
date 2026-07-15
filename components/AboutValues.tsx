"use client";

import { Eye, Target, Lightbulb, HeartHandshake, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

// Deep brand forest green — the same canvas the homepage manifesto resolves
// onto, so the values read identically on both pages.
const INK = "#1e3b2c";

type Value = { t: string; d: string; Icon: LucideIcon };

const values: Value[] = [
  { t: "Our Vision", d: "Empowering brands to own their narrative and lead with influence in the digital era.", Icon: Eye },
  { t: "Our Mission", d: "Delivering impactful strategies that combine creativity, authenticity and measurable results.", Icon: Target },
  { t: "Our Approach", d: "Data driven insights meet bold creativity, because smart strategies deserve fearless execution.", Icon: Lightbulb },
  { t: "Our Promise", d: "Partnership built on transparency, consistency, and results that speak louder than buzz.", Icon: HeartHandshake },
];

export function AboutValues() {
  return (
    <section
      style={{ backgroundColor: INK }}
      className="relative z-20 overflow-hidden text-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28"
    >
      <div className="relative mx-auto max-w-[1480px]">
        <SectionHeader
          eyebrow="Our values"
          title={<>Values that guide <span className="serif-italic">every campaign</span></>}
          dark
          className="mb-14"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 90}>
              <div className="group h-full border-t border-cream/20 pt-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-cream/10 text-cream/80 transition-colors duration-500 group-hover:bg-cream group-hover:text-[#1e3b2c]">
                    <v.Icon className="h-5 w-5 transition-transform duration-500 group-hover:-rotate-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="serif text-2xl md:text-3xl">{v.t}</h3>
                </div>
                <p className="text-cream/70 mt-4 leading-relaxed text-sm">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
