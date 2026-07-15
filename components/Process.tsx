"use client";

import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const steps = [
  { n: "01", phase: "Weeks 1 to 2", t: "Discovery & Strategy", d: "An in depth brand audit covering goals, audience and competition, then a PR and social strategy that sets the tone." },
  { n: "02", phase: "Weeks 2 to 4", t: "Content Creation", d: "From scroll stopping social creatives to impactful PR stories, built to connect and convert." },
  { n: "03", phase: "Ongoing", t: "Scheduling & Publishing", d: "We plan and schedule for maximum visibility, keeping your brand active, relevant and consistent." },
  { n: "04", phase: "Monthly", t: "Tracking & Optimization", d: "We monitor every campaign and tune the strategy so the next round always outperforms the last." },
];

/**
 * One stop on the timeline. `at` is the step's position along the rail (0 → 1);
 * it wakes as the travelling playhead reaches it, so the four steps arrive in
 * sequence as you scroll rather than all at once.
 */
function Step({
  step,
  at,
  progress,
}: {
  step: (typeof steps)[number];
  at: number;
  progress: MotionValue<number>;
}) {
  // Window straddles `at` so the node ignites as the playhead makes contact,
  // rather than waking a beat after it has already gone past.
  const on = useTransform(progress, [at - 0.06, at + 0.04], [0, 1]);

  const ringScale = useTransform(on, [0, 1], [0.8, 2.4]);
  const ringOpacity = useTransform(on, [0, 0.55, 1], [0, 0.45, 0]);
  const bodyOpacity = useTransform(on, [0, 1], [0.28, 1]);
  const bodyY = useTransform(on, [0, 1], [12, 0]);

  return (
    <div className="relative pl-10 lg:pl-0 lg:pr-10 lg:pt-10">
      {/* the node itself, centred on the rail (7px = half of its 14px box) */}
      <div className="absolute left-0 top-0 h-3.5 w-3.5">
        <motion.span
          aria-hidden
          style={{ scale: ringScale, opacity: ringOpacity }}
          className="absolute inset-0 rounded-full border border-accent"
        />
        <span className="absolute inset-0 grid place-items-center rounded-full border border-ink/20 bg-cream">
          <motion.span
            style={{ scale: on, opacity: on }}
            className="h-2 w-2 rounded-full bg-brand"
          />
        </span>
      </div>

      <motion.div style={{ opacity: bodyOpacity, y: bodyY }}>
        <div className="flex items-baseline gap-3">
          {/* ghosted numeral with a brand-coloured copy cross-fading over it */}
          <span className="relative serif text-3xl leading-none">
            <span className="text-ink/15">{step.n}</span>
            <motion.span style={{ opacity: on }} className="absolute inset-0 text-brand">
              {step.n}
            </motion.span>
          </span>
          <span className="eyebrow">{step.phase}</span>
        </div>
        <h3 className="serif text-xl md:text-2xl mt-3">{step.t}</h3>
        <p className="text-ink-soft text-sm mt-2 leading-relaxed">{step.d}</p>
      </motion.div>
    </div>
  );
}

export function Process() {
  const rail = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rail,
    offset: ["start 0.85", "end 0.65"],
  });
  // overdamped, so the line eases without ever overshooting past its end
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 });

  const playheadX = useTransform(progress, [0, 1], ["0%", "100%"]);
  const playheadOpacity = useTransform(progress, [0, 0.03, 0.97, 1], [0, 1, 1, 0]);

  return (
    <section id="process" className="relative z-[80] bg-cream py-16 md:py-24 px-6 md:px-12 lg:px-16 xl:px-28 rounded-t-[2.5rem]">
      <div className="mx-auto max-w-[1480px]">
        <SectionHeader
          eyebrow="The method"
          title={<>A structured, <span className="serif-italic">data driven</span> process</>}
          className="mb-14"
        />

        <div ref={rail} className="relative">
          {/* Rail — horizontal on desktop, vertical once the steps stack. */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-[7px] hidden h-px bg-ink/[0.12] lg:block" />
          <motion.div
            aria-hidden
            style={{ scaleX: progress }}
            className="pointer-events-none absolute inset-x-0 top-[7px] hidden h-px origin-left bg-brand lg:block"
          />
          <motion.span
            aria-hidden
            style={{ left: playheadX, opacity: playheadOpacity }}
            className="pointer-events-none absolute top-[7px] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_14px_4px_var(--accent)] lg:block"
          />

          <div aria-hidden className="pointer-events-none absolute bottom-0 left-[7px] top-0 w-px bg-ink/[0.12] lg:hidden" />
          <motion.div
            aria-hidden
            style={{ scaleY: progress }}
            className="pointer-events-none absolute bottom-0 left-[7px] top-0 w-px origin-top bg-brand lg:hidden"
          />

          {/* No x-gap: column edges land on exact quarters, so the playhead
              passes dead through each node. Breathing room comes from pr-10. */}
          <div className="grid gap-y-12 lg:grid-cols-4 lg:gap-x-0">
            {steps.map((s, i) => (
              <Step key={s.n} step={s} at={i / steps.length} progress={progress} />
            ))}
          </div>
        </div>

        <Reveal delay={80}>
          <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-ink-gradient text-cream px-8 py-10 md:px-14 md:py-12">
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
