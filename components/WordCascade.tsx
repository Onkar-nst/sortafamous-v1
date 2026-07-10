"use client";

import { motion } from "framer-motion";

/**
 * WordCascade — right-side visual for the About hero. Two vertical columns of
 * brand words drift in opposite directions behind a soft panel, faded at top
 * and bottom. Editorial kinetic type — distinct from the Services orbit.
 * Purely decorative — hidden from assistive tech.
 */

const COL_A = ["Visibility", "Reputation", "Story", "Press", "Reach", "Trust"];
const COL_B = ["Earned", "Status", "Substance", "Signal", "Voice", "Credibility"];

function Column({
  words,
  dir,
  duration,
}: {
  words: string[];
  dir: 1 | -1;
  duration: number;
}) {
  const doubled = [...words, ...words];
  return (
    <div className="flex-1">
      <motion.div
        className="flex flex-col gap-7"
        animate={{ y: dir === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className={`serif whitespace-nowrap leading-none ${
              i % 2 === 0
                ? "text-3xl md:text-4xl text-ink/75"
                : "serif-italic text-2xl md:text-3xl text-ink/40"
            }`}
          >
            {w}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function WordCascade() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-[2rem] border border-border bg-[#efe9dd] select-none lg:mr-0 lg:ml-auto"
    >
      {/* top / bottom fade masks */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-[#efe9dd] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-[#efe9dd] to-transparent" />

      {/* subtle centre emphasis band */}
      <div className="pointer-events-none absolute inset-x-6 top-1/2 z-10 h-px -translate-y-1/2 bg-ink/10" />

      <div className="flex h-full gap-8 px-9 py-8">
        <Column words={COL_A} dir={1} duration={22} />
        <Column words={COL_B} dir={-1} duration={27} />
      </div>
    </div>
  );
}
