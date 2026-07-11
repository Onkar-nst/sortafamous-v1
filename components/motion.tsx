"use client";

import {
  motion,
  useInView,
  animate,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  type MotionValue,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent,
} from "react";

export const EASE = [0.16, 1, 0.3, 1] as const;

/* -------------------------------------------------------------------------- */
/*  Counter, animates 0 → `to` once when scrolled into view                  */
/* -------------------------------------------------------------------------- */
export function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 1.8,
  className = "",
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {Math.round(val).toLocaleString()}
      {suffix}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Magnetic, element drifts toward the cursor, springs back on leave        */
/* -------------------------------------------------------------------------- */
export function Magnetic({
  children,
  strength = 0.35,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 18 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  WordReveal, big statement whose words fade from muted → ink as you       */
/*  scroll through it (Fathom's signature manifesto animation).               */
/* -------------------------------------------------------------------------- */
function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const blur = useTransform(progress, range, [6, 0]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);
  return (
    <span className="relative inline-block mr-[0.25em]">
      <motion.span style={{ opacity, filter }}>{children}</motion.span>
    </span>
  );
}

export function WordReveal({
  text,
  className = "",
  italicFrom,
}: {
  text: string;
  className?: string;
  /** index from which words render italic (serif-italic), optional */
  italicFrom?: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.28"],
  });
  const words = text.split(" ");
  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((w, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const italic = italicFrom !== undefined && i >= italicFrom;
        return (
          <span key={i} className={italic ? "serif-italic" : undefined}>
            <Word progress={scrollYProgress} range={[start, end]}>
              {w}
            </Word>
          </span>
        );
      })}
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/*  Marquee, seamless infinite horizontal scroll of its children             */
/* -------------------------------------------------------------------------- */
export function Marquee({
  children,
  className = "",
  duration = 32,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
}) {
  return (
    <div className={`group relative flex overflow-hidden ${className}`}>
      <motion.div
        className="flex shrink-0 items-center gap-8 pr-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {children}
      </motion.div>
      <motion.div
        aria-hidden
        className="flex shrink-0 items-center gap-8 pr-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Parallax, translate child on scroll for depth                            */
/* -------------------------------------------------------------------------- */
export function Parallax({
  children,
  amount = 60,
  className = "",
}: {
  children: ReactNode;
  amount?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
