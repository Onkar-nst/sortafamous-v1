"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { EASE } from "./motion";

const steps = [
  { n: "01", phase: "Weeks 1–2", t: "Discovery & Strategy", d: "An in-depth brand audit covering goals, audience and competition — then a PR and social strategy that sets the tone for growth." },
  { n: "02", phase: "Weeks 2–4", t: "Content Creation", d: "From scroll-stopping social creatives to impactful PR stories. Every post, every headline — built to connect and convert." },
  { n: "03", phase: "Ongoing", t: "Scheduling & Publishing", d: "Timing matters. We plan and schedule for maximum visibility, keeping your brand active, relevant and consistent." },
  { n: "04", phase: "Monthly", t: "Tracking & Optimization", d: "We monitor every campaign, analyse performance, and tune the strategy so the next round always outperforms the last." },
  { n: "05", phase: "Daily", t: "Community Engagement", d: "We don't just post — we build relationships. Replies, DMs, conversations that make your brand feel human and trusted." },
  { n: "06", phase: "Monthly", t: "Reporting & Collaboration", d: "Clear monthly reports, actionable insights, and regular collaboration calls. Transparency is the whole point." },
];

export function Process() {
  return (
    <section id="process" className="relative z-50 bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 rounded-t-[2.5rem]">
      <div className="mx-auto max-w-[1480px]">
        <div className="flex items-baseline justify-between mb-4">
          <Reveal>
            <div className="eyebrow flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> The method
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="serif-italic text-sm text-ink-soft">/ 6 / ©</div>
          </Reveal>
        </div>
        <Reveal delay={40}>
          <h2 className="serif text-4xl md:text-6xl mb-16">
            A structured, <span className="serif-italic">data-driven</span> process
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 90}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                  </span>
                  <motion.span
                    className="h-px flex-1 bg-ink/20 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.15 + (i % 3) * 0.1 }}
                  />
                  <span className="text-xs text-ink-soft shrink-0">{s.phase}</span>
                </div>
                <div className="serif text-5xl md:text-6xl text-ink/25 leading-none">{s.n}</div>
                <h3 className="serif text-2xl md:text-3xl mt-4">{s.t}</h3>
                <p className="text-ink-soft text-sm mt-3 leading-relaxed max-w-xs">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-ink/15 pt-8">
            <p className="serif text-2xl md:text-3xl">Have a project in mind? <span className="serif-italic">Let&apos;s map your path.</span></p>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-3.5 text-sm hover:opacity-90 transition">
              Let&apos;s work together <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
