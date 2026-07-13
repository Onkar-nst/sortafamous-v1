"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { EASE } from "./motion";
import { SectionHeader } from "./SectionHeader";

const steps = [
  { n: "01", phase: "Weeks 1 to 2", t: "Discovery & Strategy", d: "An in depth brand audit covering goals, audience and competition, then a PR and social strategy that sets the tone." },
  { n: "02", phase: "Weeks 2 to 4", t: "Content Creation", d: "From scroll stopping social creatives to impactful PR stories, built to connect and convert." },
  { n: "03", phase: "Ongoing", t: "Scheduling & Publishing", d: "We plan and schedule for maximum visibility, keeping your brand active, relevant and consistent." },
  { n: "04", phase: "Monthly", t: "Tracking & Optimization", d: "We monitor every campaign and tune the strategy so the next round always outperforms the last." },
];

export function Process() {
  return (
    <section id="process" className="relative z-[80] bg-cream py-16 md:py-24 px-6 md:px-12 lg:px-16 xl:px-28 rounded-t-[2.5rem]">
      <div className="mx-auto max-w-[1480px]">
        <SectionHeader
          eyebrow="The method"
          title={<>A structured, <span className="serif-italic">data driven</span> process</>}
          className="mb-12"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={(i % 4) * 80}>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                  </span>
                  <motion.span
                    className="h-px flex-1 bg-ink/20 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.15 + (i % 4) * 0.1 }}
                  />
                  <span className="text-xs text-ink-soft shrink-0">{s.phase}</span>
                </div>
                <div className="serif text-4xl md:text-5xl text-ink/25 leading-none">{s.n}</div>
                <h3 className="serif text-xl md:text-2xl mt-3">{s.t}</h3>
                <p className="text-ink-soft text-sm mt-2 leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="relative mt-14 overflow-hidden rounded-[2rem] bg-ink-gradient text-cream px-8 py-10 md:px-14 md:py-12">
            {/* decorative background, glowing circle, outlined ring, floating box */}
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-accent/25 blur-[90px]" />
            <div aria-hidden className="pointer-events-none absolute -right-16 -bottom-24 h-72 w-72 rounded-full border border-cream/10" />
            <div aria-hidden className="pointer-events-none absolute right-40 -bottom-10 hidden h-32 w-32 rotate-12 rounded-3xl border border-cream/10 bg-cream/[0.04] md:block" />

            <div className="relative flex flex-wrap items-center justify-between gap-8">
              <div>
                <div className="eyebrow text-cream/50 mb-4">Ready when you are</div>
                <p className="serif text-2xl md:text-4xl leading-[1.1] lg:whitespace-nowrap">Have a project in mind? <span className="serif-italic">Let&apos;s map your path.</span></p>
              </div>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-cream text-ink px-7 py-4 text-sm hover:opacity-90 transition">
                Let&apos;s work together <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
