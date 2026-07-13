"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, type CSSProperties } from "react";
import { BotanicalBranch } from "./BotanicalBranch";
import { Reveal } from "./Reveal";

const CREAM = "#f1ebdf";
// Deep brand forest green (from the new logo) — replaces the old near-black
// invert so the "black" panel now reads as a Sorta Famous brand colour.
const INK = "#1e3b2c";

// The manifesto paragraph, revealed word by word as you scroll.
const TEXT =
  "We're Sorta Famous, helping founders, startups and modern brands earn the right kind of attention. We don't chase clout we shape reputations. Visibility sticks, and it's the smart kind.";
const ITALIC = new Set([1, 2]); // "Sorta Famous"

// Our values, merged into this section so "Who we are" and "Our values" read as
// one continuous story, resolving onto the same deep-green canvas.
const values = [
  { t: "Our Vision", d: "Empowering brands to own their narrative and lead with influence in the digital era." },
  { t: "Our Mission", d: "Delivering impactful strategies that combine creativity, authenticity and measurable results." },
  { t: "Our Approach", d: "Data driven insights meet bold creativity, because smart strategies deserve fearless execution." },
  { t: "Our Promise", d: "Partnership built on transparency, consistency, and results that speak louder than buzz." },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const holder = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Drive the word reveal with a single CSS variable, each word maps its own
  // slice of scroll progress to opacity via calc(), so it can never desync.
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    holder.current?.style.setProperty("--p", v.toFixed(4));
  });

  const words = TEXT.split(" ");
  const start = 0.05;
  const end = 0.62;
  const step = (end - start) / words.length;

  // The background flips (cream → green) as the read progresses, so the invert
  // kicks in mid-read. Text colour flips in lockstep with the bg, so revealed
  // words stay high-contrast while the remaining lines resolve on green.
  const bg = useTransform(scrollYProgress, [0.42, 0.56], [CREAM, INK]);
  const textColor = useTransform(scrollYProgress, [0.42, 0.56], [INK, CREAM]);
  const eyebrow = useTransform(scrollYProgress, [0.42, 0.56], ["#8a8578", "#a9c2b0"]);

  const leafY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const leafOpacity = useTransform(scrollYProgress, [0, 0.12, 0.9, 1], [0, 0.9, 0.9, 0.6]);

  return (
    <section id="about" className="relative z-20">
      {/* Part 1 — the "Who we are" manifesto, revealed word by word.
          The scroll target is this trimmed wrapper (not the whole section) so
          the reveal timing stays tied to the manifesto alone. */}
      <div ref={ref} className="relative h-[170vh]" style={{ backgroundColor: INK }}>
        <motion.div
          style={{ backgroundColor: bg }}
          className="sticky top-0 h-[100svh] overflow-hidden flex items-center justify-center px-6 md:px-12 lg:px-16 xl:px-28"
        >
          {/* botanical branches, top-left & bottom-right */}
          <motion.div
            style={{ y: leafY, opacity: leafOpacity }}
            className="pointer-events-none absolute -left-12 -top-8 sm:-left-4 sm:top-0 w-32 sm:w-44 lg:w-56 -rotate-6"
          >
            <BotanicalBranch />
          </motion.div>
          <motion.div
            style={{ y: leafY, opacity: leafOpacity }}
            className="pointer-events-none absolute -right-12 -bottom-8 sm:-right-4 sm:bottom-0 w-32 sm:w-44 lg:w-56 rotate-[186deg]"
          >
            <BotanicalBranch />
          </motion.div>

          <div
            ref={holder}
            className="relative mx-auto max-w-[1060px] text-center"
            style={{ ["--p"]: "0" } as CSSProperties}
          >
            <motion.div
              style={{ color: eyebrow }}
              className="eyebrow mb-8 flex items-center justify-center gap-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Who we are
            </motion.div>
            <motion.p
              style={{ color: textColor }}
              className="serif text-[clamp(1.5rem,4.4vw,3.4rem)] leading-[1.3] tracking-[-0.01em]"
            >
              {words.map((w, i) => {
                const s = start + i * step;
                const inv = 1 / (Math.min(end, s + step * 3) - s);
                return (
                  <span
                    key={i}
                    className={ITALIC.has(i) ? "serif-italic" : undefined}
                    style={{
                      opacity: `clamp(0.26, calc((var(--p, 0) - ${s.toFixed(4)}) * ${inv.toFixed(3)}), 1)`,
                    }}
                  >
                    {w}{" "}
                  </span>
                );
              })}
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Part 2 — "Our values", presented on the same deep-green canvas the
          manifesto resolves onto, so the two sections feel merged. */}
      <div
        style={{ backgroundColor: INK }}
        className="text-cream px-6 md:px-12 lg:px-16 xl:px-28 pb-20 pt-4 md:pb-28"
      >
        <div className="mx-auto max-w-[1480px]">
          <Reveal>
            <div className="eyebrow mb-3 flex items-center gap-2 text-cream/55">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Our values
            </div>
            <h2 className="serif text-3xl md:text-5xl mb-12 max-w-2xl">
              Values that guide <span className="serif-italic">every campaign</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 90}>
                <div className="border-t border-cream/20 pt-6 h-full">
                  <h3 className="serif text-2xl md:text-3xl">{v.t}</h3>
                  <p className="text-cream/70 mt-4 leading-relaxed text-sm">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
