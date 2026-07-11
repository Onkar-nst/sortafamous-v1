"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, type CSSProperties } from "react";
import { BotanicalBranch } from "./BotanicalBranch";

const CREAM = "#f1ebdf";
const INK = "#1b1811";

// The manifesto paragraph, revealed word by word as you scroll.
const TEXT =
  "We're Sorta Famous, helping founders, startups and modern brands earn the right kind of attention. We don't chase clout we shape reputations. Visibility sticks, and it's the smart kind.";
const ITALIC = new Set([1, 2]); // "Sorta Famous"

export function About() {
  const ref = useRef<HTMLElement>(null);
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
  const end = 0.56;
  const step = (end - start) / words.length;

  // The background flips (cream → ink) as line 2 finishes revealing (~0.38), so
  // the invert kicks in mid-read. Text colour flips in lockstep with the bg, so
  // revealed words stay high-contrast while the remaining lines resolve on black.
  const bg = useTransform(scrollYProgress, [0.38, 0.5], [CREAM, INK]);
  const textColor = useTransform(scrollYProgress, [0.38, 0.5], [INK, CREAM]);
  const eyebrow = useTransform(scrollYProgress, [0.38, 0.5], ["#8a8578", "#a29c88"]);

  const leafY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const leafOpacity = useTransform(scrollYProgress, [0, 0.12, 0.9, 1], [0, 0.9, 0.9, 0.6]);

  return (
    <section ref={ref} id="about" className="relative z-20 h-[340vh]">
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
    </section>
  );
}
