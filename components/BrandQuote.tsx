"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

/**
 * BrandQuote — a native rebuild of the bundle's scatter-hero section. Five
 * circular avatars sit in an arc and drift apart as you scroll (reproduced with
 * framer-motion instead of GSAP), and a rotating brand statement swipes through
 * five lines, paginated by dots, above a "Get in touch" pill.
 */

// baseX/baseY: the initial "side by side" row (all on one line, adjacent).
// dx/dy: the offset applied as you scroll the section to centre — the row
// fans out to (near) full width in an arc.
// End shape (baseX+dx, baseY+dy): outer two drop low to flank the statement,
// the inner two rise up, the centre stays put — a wide asymmetric scatter.
// m* are the mobile equivalents, scaled down so all five avatars stay on a
// narrow viewport — the desktop pixel offsets would fly off-screen.
const AVATARS = [
  { src: "/images/scatter/avatar-15.webp", baseX: -300, dx: -355, dy: 175, mBaseX: -70, mdx: -80, mdy: 55, z: 1 },
  { src: "/images/scatter/avatar-16.webp", baseX: -150, dx: -200, dy: -60, mBaseX: -35, mdx: -45, mdy: -25, z: 2 },
  { src: "/images/scatter/avatar-17.webp", baseX: 0, dx: 0, dy: 0, mBaseX: 0, mdx: 0, mdy: 0, z: 5 },
  { src: "/images/scatter/avatar-18.webp", baseX: 150, dx: 200, dy: -60, mBaseX: 35, mdx: 45, mdy: -25, z: 4 },
  { src: "/images/scatter/avatar-19.webp", baseX: 300, dx: 355, dy: 175, mBaseX: 70, mdx: 80, mdy: 55, z: 3 },
];

// Real Sorta Famous brand statements, rotated as the big reveal line.
const QUOTES = [
  "Fame is earned. We manage the rest.",
  "We don’t chase clout — we shape reputations that last.",
  "Visibility that sticks, and it’s the smart kind.",
  "We help founders, startups, and modern brands get the right kind of attention.",
  "Insight-led marketing that turns strategy into status with substance.",
];

const EASE = [0.16, 1, 0.3, 1] as const;

// Horizontal swipe between statements — direction follows navigation order.
const slideVariants = {
  enter: (dir: number) => ({ x: dir >= 0 ? 90 : -90, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir >= 0 ? -90 : 90, opacity: 0 }),
};

function ScatterAvatar({
  src,
  baseX,
  dx,
  dy,
  mBaseX,
  mdx,
  mdy,
  z,
  progress,
  isMobile,
}: {
  src: string;
  baseX: number;
  dx: number;
  dy: number;
  mBaseX: number;
  mdx: number;
  mdy: number;
  z: number;
  progress: MotionValue<number>;
  isMobile: boolean;
}) {
  const startX = isMobile ? mBaseX : baseX;
  const endX = isMobile ? mBaseX + mdx : baseX + dx;
  const endY = isMobile ? mdy : dy;
  const x = useTransform(progress, [0, 1], [startX, endX]);
  const y = useTransform(progress, [0, 1], [0, endY]);
  return (
    <motion.div
      style={{ x, y, zIndex: z }}
      className="absolute left-1/2 top-1/2 -ml-[75px] -mt-[75px] h-[150px] w-[150px] max-[575px]:-ml-[35px] max-[575px]:-mt-[35px] max-[575px]:h-[70px] max-[575px]:w-[70px]"
    >
      <div className="h-full w-full overflow-hidden rounded-full border-[8px] border-cream shadow-[0_18px_40px_-18px_rgba(0,0,0,0.35)] max-[575px]:border-4">
        <img
          src={src}
          alt=""
          width={150}
          height={150}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    </motion.div>
  );
}

/**
 * One character of the rotating statement. Its opacity is driven by the
 * section's scroll progress (faded → solid, staggered left-to-right) so the
 * line "fills in" as you read down the page, and sits half-revealed when idle.
 */
function RevealChar({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = (index / total) * 0.7;
  const opacity = useTransform(progress, [start, start + 0.35], [0.25, 1]);
  return (
    <motion.span style={{ opacity, display: "inline-block" }}>{char}</motion.span>
  );
}

/** Splits a statement into breakable words of non-breaking reveal-chars. */
function RevealTitle({ text, progress }: { text: string; progress: MotionValue<number> }) {
  const words = text.split(" ");
  const total = text.replace(/\s/g, "").length;
  let ci = 0;
  return (
    <>
      {words.map((word, wi) => (
        <Fragment key={wi}>
          <span className="inline-block whitespace-nowrap">
            {[...word].map((ch) => {
              const index = ci++;
              return (
                <RevealChar key={index} char={ch} index={index} total={total} progress={progress} />
              );
            })}
          </span>
          {wi < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}

export function BrandQuote() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "center 0.4"],
  });

  // Separate tracker for the statement: reveals its characters as the block
  // scrolls up through the middle of the viewport.
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: textProgress } = useScroll({
    target: textRef,
    offset: ["start 0.9", "start 0.2"],
  });

  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  // Match the max-[575px] breakpoint used for avatar sizing, so the scatter
  // uses the smaller offsets on phones.
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 575px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const select = (i: number) => {
    setDirection(i >= active ? 1 : -1);
    setActive(i);
  };

  // Auto-swipe to the next statement every 3s.
  useEffect(() => {
    const id = window.setInterval(() => {
      setDirection(1);
      setActive((a) => (a + 1) % QUOTES.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      ref={ref}
      className="relative z-[105] overflow-hidden bg-cream py-24 md:py-36 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border"
    >
      <div className="mx-auto max-w-[1480px]">
        {/* Scatter avatars — a side-by-side row that fans out to full width on scroll */}
        <div className="relative mx-auto h-[220px] w-full max-w-[1480px] max-[575px]:h-[150px]">
          {AVATARS.map((a) => (
            <ScatterAvatar key={a.src} {...a} progress={scrollYProgress} isMobile={isMobile} />
          ))}
        </div>

        {/* Rotating brand statement — swipes between lines, scroll-revealed */}
        <div
          ref={textRef}
          className="relative mx-auto mt-4 flex min-h-[160px] max-w-4xl items-center justify-center overflow-hidden md:min-h-[200px]"
        >
          <AnimatePresence initial={false} mode="popLayout" custom={direction}>
            <motion.h3
              key={active}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: EASE }}
              aria-label={QUOTES[active]}
              aria-live="polite"
              className="serif text-center text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight"
            >
              <span aria-hidden="true">
                <RevealTitle text={QUOTES[active]} progress={textProgress} />
              </span>
            </motion.h3>
          </AnimatePresence>
        </div>

        {/* Pagination dots — indicate more statements, no arrows */}
        <div className="mt-8 flex justify-center gap-2.5">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => select(i)}
              aria-label={`Show statement ${i + 1}`}
              aria-current={i === active}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === active ? "w-7 bg-ink" : "w-2.5 bg-ink/25 hover:bg-ink/45"
              }`}
            />
          ))}
        </div>

        {/* Get in touch */}
        <div className="mt-10 flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-ink px-8 py-4 text-sm font-medium text-cream transition hover:opacity-90"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
