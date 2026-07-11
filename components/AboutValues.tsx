"use client";

import { Telescope, Target, Compass, HeartHandshake, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

type Value = {
  k: string;
  t: string;
  d: string;
  Icon: LucideIcon;
  accent: string;
  tint: string;
  span: string; // grid span classes
};

const values: Value[] = [
  {
    k: "01",
    t: "Our Vision",
    d: "Empowering brands to own their narrative and lead with influence in the digital era.",
    Icon: Telescope,
    accent: "oklch(0.56 0.075 135)", // sage
    tint: "oklch(0.56 0.075 135 / 0.12)",
    span: "lg:col-span-3 lg:row-span-2",
  },
  {
    k: "02",
    t: "Our Mission",
    d: "Delivering impactful strategies that combine creativity, authenticity and measurable results.",
    Icon: Target,
    accent: "oklch(0.68 0.12 75)", // ochre
    tint: "oklch(0.68 0.12 75 / 0.12)",
    span: "lg:col-span-3",
  },
  {
    k: "03",
    t: "Our Approach",
    d: "Data-driven insights meet bold creativity — because smart strategies deserve fearless execution.",
    Icon: Compass,
    accent: "oklch(0.63 0.15 35)", // terracotta
    tint: "oklch(0.63 0.15 35 / 0.12)",
    span: "lg:col-span-3",
  },
  {
    k: "04",
    t: "Our Promise",
    d: "Partnership built on transparency, consistency, and results that speak louder than buzz.",
    Icon: HeartHandshake,
    accent: "oklch(0.5 0.11 300)", // plum
    tint: "oklch(0.5 0.11 300 / 0.12)",
    span: "lg:col-span-6",
  },
];

export function AboutValues() {
  const [vision, ...rest] = values;

  return (
    <section className="relative z-40 bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border">
      <div className="mx-auto max-w-[1480px]">
        <SectionHeader
          eyebrow="What we stand for"
          title={<>Values that guide <span className="serif-italic">every campaign</span></>}
          marker="/ 04 / ©"
          className="mb-14"
        />

        <div className="grid gap-5 lg:grid-cols-6 lg:auto-rows-[minmax(0,1fr)]">
          {/* Vision — large dark feature card */}
          <Reveal className={vision.span}>
            <div className="group relative flex h-full min-h-[22rem] flex-col justify-between overflow-hidden rounded-[2rem] bg-ink text-cream p-9 md:p-11">
              {/* textures + glow */}
              <div aria-hidden className="dot-texture absolute inset-0 opacity-[0.5] text-cream" />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full blur-[80px] transition-opacity duration-700 opacity-70 group-hover:opacity-100"
                style={{ background: vision.accent }}
              />
              <div className="relative flex items-start justify-between">
                <span
                  className="grid h-14 w-14 place-items-center rounded-2xl text-cream shadow-lg"
                  style={{ background: vision.accent }}
                >
                  <vision.Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <span className="serif text-6xl leading-none text-cream/15">{vision.k}</span>
              </div>
              <div className="relative mt-10">
                <div className="eyebrow text-cream/50 mb-3">{vision.t}</div>
                <p className="serif text-[clamp(1.9rem,3vw,3rem)] leading-[1.12] tracking-[-0.01em] max-w-[18ch]">
                  {vision.d}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Mission, Approach, Promise */}
          {rest.map((v, i) => (
            <Reveal key={v.k} className={v.span} delay={(i + 1) * 80}>
              <div className="group relative flex h-full min-h-[13rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl">
                {/* accent glow bloom */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(500px circle at 15% 0%, ${v.tint}, transparent 70%)`,
                  }}
                />
                {/* left accent rail grows on hover */}
                <span
                  aria-hidden
                  className="absolute left-0 top-8 bottom-8 w-[3px] origin-top scale-y-0 rounded-full transition-transform duration-500 group-hover:scale-y-100"
                  style={{ background: v.accent }}
                />

                <div className="relative flex items-center justify-between">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-500 group-hover:-rotate-6"
                    style={{ background: v.tint, color: v.accent }}
                  >
                    <v.Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className="serif text-4xl leading-none" style={{ color: "oklch(0.18 0.008 80 / 0.12)" }}>
                    {v.k}
                  </span>
                </div>

                <div className="relative mt-6">
                  <h3 className="serif text-2xl md:text-3xl">{v.t}</h3>
                  <p className="text-ink-soft mt-2.5 leading-relaxed md:text-lg max-w-2xl">{v.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
