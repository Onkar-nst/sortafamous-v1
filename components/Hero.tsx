"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Magnetic } from "./motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE, delay: 0.1 + i * 0.11 },
  }),
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Gentle parallax: image drifts up, whole hero fades as sections blanket over it.
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="sticky top-0 h-[100svh] overflow-hidden bg-cream"
    >
      <motion.div
        style={{ opacity }}
        className="relative lg:absolute lg:inset-0 px-6 md:px-12 lg:px-16 xl:px-28 pt-24 pb-8 lg:pt-24 lg:pb-16"
      >
        <div className="mx-auto max-w-[1480px] min-h-[80svh] lg:min-h-0 lg:h-full relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 lg:h-full lg:items-end">
            <div className="relative z-10 order-1 lg:order-none lg:pb-[7vh]">
              <motion.span
                custom={0}
                variants={rise}
                initial="hidden"
                animate="show"
                className="pill mb-5 lg:mb-8 inline-flex"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                PR &amp; Strategic Communications · India
              </motion.span>
              <motion.h1
                custom={1}
                variants={rise}
                initial="hidden"
                animate="show"
                className="serif text-[clamp(2.5rem,6vw,5.75rem)] leading-[0.95] tracking-[-0.03em]"
              >
                Fame is earned.
                <br />
                We <span className="serif-italic">manage</span> the rest.
              </motion.h1>
              <motion.p
                custom={2}
                variants={rise}
                initial="hidden"
                animate="show"
                className="mt-6 max-w-md text-ink-soft leading-relaxed"
              >
                Insight-led social media performance. Visibility that lasts longer than the
                news cycle — no clout chasing, just status with substance.
              </motion.p>
              <motion.div
                custom={3}
                variants={rise}
                initial="hidden"
                animate="show"
                className="mt-6 lg:mt-8 flex flex-wrap items-center gap-4"
              >
                <Magnetic strength={0.4}>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-3.5 text-sm hover:opacity-90 transition"
                  >
                    Let&apos;s get Sorta Famous
                  </a>
                </Magnetic>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-sm px-3 py-3.5 hover:translate-x-1 transition"
                >
                  See what we do <span aria-hidden>→</span>
                </a>
              </motion.div>

              <motion.div
                custom={4}
                variants={rise}
                initial="hidden"
                animate="show"
                className="mt-6 lg:mt-8 flex items-center gap-4"
              >
                <span className="serif text-5xl leading-none">3.4×</span>
                <span className="text-sm text-ink-soft leading-tight max-w-[9rem] lg:max-w-none lg:whitespace-nowrap">
                  average client growth in the first year
                </span>
              </motion.div>
            </div>

            <motion.div
              style={{ y: imgY }}
              className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[44vh] order-2 lg:pointer-events-auto lg:relative lg:inset-auto lg:z-auto lg:h-full lg:order-last"
            >
              {/* solid circle backdrop behind the bust — desktop only, image sits on top */}
              <div
                aria-hidden
                className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[54%] aspect-square w-[92%] rounded-full bg-[#e4ddce]"
              />
              <motion.img
                src="/rightside%20img.png"
                alt="Sorta Famous — editorial portrait"
                className="absolute inset-0 lg:bottom-[13vh] w-full object-contain object-bottom"
                fetchPriority="high"
                initial={{ opacity: 0, scale: 1.06, filter: "blur(16px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: EASE, delay: 0.15 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-ink-soft hidden lg:flex flex-col items-center gap-2"
      >
        <span className="eyebrow">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          aria-hidden
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
