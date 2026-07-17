"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, type CSSProperties } from "react";

const CREAM = "#f1ebdf";
// Deep brand forest green (from the new logo) — replaces the old near-black
// invert so the "black" panel now reads as a Sorta Famous brand colour.
const INK = "#1e3b2c";

// The manifesto paragraph, revealed word by word as you scroll.
const TEXT =
  "We're Sorta Famous, helping founders, startups and modern brands earn the right kind of attention. We don't chase clout we shape reputations. Visibility sticks, and it's the smart kind.";
const ITALIC = new Set([1, 2]); // "Sorta Famous"

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

  // The section deliberately carries no z-index: one would open a stacking
  // context and trap the leaf layer below <Services />. At z-auto it still
  // paints in DOM order (first, under everything after it), exactly as z-20 did.
  return (
    <section id="about" className="relative">
      {/* The "Who we are" manifesto, revealed word by word. The scroll target is
          this trimmed wrapper (not the whole section) so the reveal timing stays
          tied to the manifesto alone. */}
      <div ref={ref} className="relative h-[170vh]" style={{ backgroundColor: INK }}>
        <motion.div
          style={{ backgroundColor: bg }}
          className="sticky top-0 h-[100svh] overflow-hidden flex items-center justify-center px-6 md:px-12 lg:px-16 xl:px-28"
        >
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
    </section>
  );
}
