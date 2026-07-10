"use client";

import { motion } from "framer-motion";

/**
 * HeroOrbit — a decorative right-side visual for the Services / About heroes.
 * It echoes the home hero's circular motif (the soft cream disc) but is its own
 * thing: the brand's eight-point asterisk turns slowly at the centre of an
 * orbit, dotted rings rotate in opposite directions for depth, and four labels
 * float around the edge. Purely decorative — hidden from assistive tech.
 *
 * Each page passes its own `chips` (Services → practices, About → values) so
 * the visual is shared but never identical between pages.
 */

const EASE_IO = "easeInOut" as const;

// Fixed corner slots for the four floating labels (top-left → clockwise).
const CHIP_SLOTS = [
  "left-[2%] top-[20%]",
  "right-[2%] top-[12%]",
  "right-[4%] bottom-[18%]",
  "left-[4%] bottom-[12%]",
] as const;

function Asterisk() {
  return (
    <svg viewBox="0 0 122 116.994" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65.3572 0H56.6428V48.4096L20.9475 14.1788L14.7855 20.088L50.4809 54.3187H0V62.6756H50.4809L14.7855 96.9063L20.9475 102.815L56.6428 68.5844V116.994H65.3572V68.5844L101.053 102.815L107.214 96.9063L71.5188 62.6756H122V54.3187H71.5188L107.214 20.0879L101.053 14.1788L65.3572 48.4096V0Z"
        className="fill-ink"
      />
    </svg>
  );
}

export function HeroOrbit({ chips }: { chips: string[] }) {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[520px] select-none"
    >
      {/* soft cream disc — the shared home-hero motif */}
      <div className="absolute inset-[10%] rounded-full bg-[#e4ddce]" />
      <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-cream/40 to-transparent" />

      {/* outer dotted ring, rotating clockwise */}
      <motion.div
        className="absolute inset-0 rounded-full border border-dashed border-ink/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand" />
        <span className="absolute left-1/2 bottom-0 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-ink/40" />
      </motion.div>

      {/* inner dotted ring, rotating anticlockwise */}
      <motion.div
        className="absolute inset-[24%] rounded-full border border-ink/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute right-0 top-1/2 h-2 w-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
      </motion.div>

      {/* centre asterisk, turning slowly */}
      <div className="absolute left-1/2 top-1/2 w-[28%] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        >
          <Asterisk />
        </motion.div>
      </div>

      {/* floating labels — gentle independent bob */}
      {chips.slice(0, 4).map((label, i) => (
        <motion.div
          key={label}
          className={`absolute ${CHIP_SLOTS[i]} rounded-full border border-border bg-cream px-4 py-2 text-sm text-ink shadow-[0_12px_30px_-14px_rgba(0,0,0,0.35)]`}
          animate={{ y: [0, i % 2 === 0 ? -10 : 10, 0] }}
          transition={{ duration: 4.5 + i * 0.6, repeat: Infinity, ease: EASE_IO }}
        >
          {label}
        </motion.div>
      ))}
    </div>
  );
}
