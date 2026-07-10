"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * ProcessDial — right-side visual for the How-it-works hero. Three step-nodes
 * sit on a ring (connected as a triangle) and light up in sequence while the
 * centre label tracks the active stage. A clear "process" motif — distinct from
 * the Services orbit and About word-cascade. Purely decorative.
 */

const STEPS = [
  { n: "01", t: "Discover" },
  { n: "02", t: "Create & publish" },
  { n: "03", t: "Grow & report" },
];

// Node centres on a circle (0–100 viewBox), first at top then clockwise.
const R = 42;
const NODES = STEPS.map((_, i) => {
  const a = ((-90 + i * 120) * Math.PI) / 180;
  return { left: 50 + R * Math.cos(a), top: 50 + R * Math.sin(a) };
});

export function ProcessDial() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setActive((a) => (a + 1) % STEPS.length),
      2200,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[520px] select-none"
    >
      {/* soft disc + outer ring */}
      <div className="absolute inset-[12%] rounded-full bg-[#e4ddce]" />
      <div className="absolute inset-0 rounded-full border border-ink/15" />

      {/* faint triangle connecting the nodes */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <polygon
          points={NODES.map((n) => `${n.left},${n.top}`).join(" ")}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
          className="text-ink/15"
        />
      </svg>

      {/* step nodes */}
      {STEPS.map((s, i) => {
        const on = i === active;
        return (
          <div
            key={s.n}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${NODES[i].left}%`, top: `${NODES[i].top}%` }}
          >
            {on && (
              <motion.span
                className="absolute inset-0 rounded-full bg-ink/15"
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 1.9, opacity: 0 }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
              />
            )}
            <motion.div
              animate={{ scale: on ? 1.12 : 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex h-14 w-14 items-center justify-center rounded-full border serif text-sm transition-colors duration-500 md:h-16 md:w-16 ${
                on
                  ? "border-transparent bg-ink text-cream"
                  : "border-border bg-cream text-ink-soft"
              }`}
            >
              {s.n}
            </motion.div>
          </div>
        );
      })}

      {/* centre label */}
      <div className="absolute left-1/2 top-1/2 w-[46%] -translate-x-1/2 -translate-y-1/2 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            <div className="eyebrow text-ink-soft">Step {STEPS[active].n}</div>
            <div className="serif text-xl md:text-2xl mt-1 leading-tight">
              {STEPS[active].t}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
