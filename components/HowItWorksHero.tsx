"use client";

import { Reveal } from "./Reveal";
import { ProcessDial } from "./ProcessDial";

const phases = [
  { n: "01", t: "Discover", d: "An in-depth brand audit, clear goals, and a PR + social strategy built around your audience." },
  { n: "02", t: "Create & publish", d: "Scroll-stopping content and impactful PR stories, scheduled for maximum reach and consistency." },
  { n: "03", t: "Grow & report", d: "We optimise, engage your community, and send clear, actionable reports every month." },
];

export function HowItWorksHero() {
  return (
    <section className="relative z-10 bg-cream pt-32 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-16 xl:px-28">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <div className="eyebrow mb-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> How it works
              </div>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="serif text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.98] tracking-[-0.03em] max-w-[15ch]">
                From first call to <span className="serif-italic">lasting fame</span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink-soft leading-relaxed">
                No black boxes. Every engagement follows the same transparent path — a data-driven
                strategy, creative that connects, and monthly reporting you can actually read. Here&apos;s
                exactly how we take your brand from quiet to quoted.
              </p>
            </Reveal>
          </div>

          <Reveal delay={160} className="hidden lg:block">
            <ProcessDial />
          </Reveal>
        </div>

        <div className="mt-14 md:mt-20 grid gap-8 md:grid-cols-3 md:gap-10">
          {phases.map((p, i) => (
            <Reveal key={p.n} delay={i * 90}>
              <div className="border-t border-ink/20 pt-6 h-full">
                <div className="serif text-4xl text-ink/25 leading-none">{p.n}</div>
                <h2 className="serif text-2xl md:text-3xl mt-4">{p.t}</h2>
                <p className="text-ink-soft mt-4 leading-relaxed text-sm">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
