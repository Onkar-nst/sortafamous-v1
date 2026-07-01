"use client";

import { motion, type Variants } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";

// Fathom-style easing — a long, confident ease-out (expo-ish).
const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Single scroll reveal: fades up while a blur resolves to sharp.
 * API-compatible with the previous CSS version (children, delay, as, className).
 */
export function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "h2" | "h3" | "p" | "span" | "li";
  className?: string;
  y?: number;
}) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay: delay / 1000 }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Stagger container — children marked with <RevealItem> animate in sequence
 * as the group scrolls into view (the Fathom "blocks cascade in" feel).
 */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export function RevealStagger({
  children,
  className = "",
  amount = 0.2,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
} & ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

export function RevealItem({
  children,
  className = "",
  ...rest
}: {
  children: ReactNode;
  className?: string;
} & ComponentProps<typeof motion.div>) {
  return (
    <motion.div className={className} variants={itemVariants} {...rest}>
      {children}
    </motion.div>
  );
}
