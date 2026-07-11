"use client";

import {
  motion,
  useInView,
  animate,
  type Variants,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent,
} from "react";
import { SectionHeader } from "./SectionHeader";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: EASE },
  },
};

/** A bento cell: dark card with border, mouse-follow accent sheen, hover lift. */
function Block({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }
  return (
    <motion.div
      variants={item}
      onMouseMove={onMove}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`block-sheen relative overflow-hidden rounded-3xl border border-cream/12 bg-cream/[0.03] p-4 sm:p-6 md:p-8 backdrop-blur-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}

/** Count-up number that animates once when scrolled into view. */
function Counter({
  to,
  suffix = "",
  className = "",
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className={className}>
      {Math.round(val)}
      {suffix}
    </span>
  );
}

const pillars = [
  {
    n: "01",
    t: "Media Relations & Outreach",
    d: "Stories placed where they count, with the journalists you actually want covering you.",
  },
  {
    n: "02",
    t: "Personal Brand Management",
    d: "We polish the person, not just the logo, turning founders into the voice their category listens to.",
  },
  {
    n: "03",
    t: "Content & Thought Leadership",
    d: "Ideas that spark conversation and earn lasting recognition across the channels that matter.",
  },
];

export function Bento() {
  return (
    <section className="relative z-40 bg-ink-gradient text-cream rounded-t-[2.5rem] py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 overflow-hidden">
      {/* texture + accent glow */}
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-[0.35]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />

      <div className="relative mx-auto max-w-[1480px]">
        <SectionHeader
          dark
          eyebrow="What we do"
          title={<>We turn visibility <span className="serif-italic">into credibility</span></>}
          className="mb-14"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px 12% 0px" }}
          className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(150px,auto)] md:auto-rows-[minmax(210px,auto)] gap-3 md:gap-4"
        >
          {/* Big statement block, spans 2×2 on lg */}
          <Block className="col-span-3 md:col-span-2 lg:row-span-2 flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <span className="pill bg-cream/10 text-cream/80">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Insight led
              </span>
              {/* animated concentric signal rings */}
              <div className="relative h-24 w-24 hidden sm:block">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="absolute inset-0 rounded-full border border-cream/20"
                    animate={{ scale: [0.4, 1], opacity: [0.7, 0] }}
                    transition={{
                      duration: 2.6,
                      ease: "easeOut",
                      repeat: Infinity,
                      delay: i * 0.8,
                    }}
                  />
                ))}
                <span className="absolute inset-0 m-auto h-2.5 w-2.5 rounded-full bg-accent" />
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="serif text-[clamp(1.6rem,2.6vw,2.6rem)] leading-[1.1] max-w-xl">
                We don&apos;t chase clout. We shape reputations, visibility that sticks, and
                it&apos;s the <span className="serif-italic">smart kind.</span>
              </p>
              <div className="mt-8 h-px w-full bg-cream/10" />
              <div className="mt-6 grid sm:grid-cols-3 gap-6">
                {pillars.map((p) => (
                  <div key={p.n}>
                    <div className="serif-italic text-sm text-cream/40">{p.n}</div>
                    <div className="mt-1 text-sm text-cream/85 leading-snug">{p.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </Block>

          {/* Stat, earned media lift with animated bars */}
          <Block className="col-span-3 md:col-span-1 flex flex-col justify-between">
            <div className="eyebrow text-cream/50">Avg. earned media lift</div>
            <div>
              <div className="flex items-end gap-1.5 h-16 mb-4">
                {[40, 55, 48, 70, 62, 88, 100].map((h, i) => (
                  <motion.span
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-accent/30 to-accent"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.1 + i * 0.06 }}
                  />
                ))}
              </div>
              <div className="serif text-6xl leading-none">
                <Counter to={240} suffix="%" />
              </div>
            </div>
          </Block>

          {/* Live availability block */}
          <Block className="col-span-3 md:col-span-1 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-sm text-cream/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available · Mumbai
            </div>
            <div>
              <div className="serif text-5xl leading-none">
                <Counter to={60} suffix="+" />
              </div>
              <p className="text-cream/60 text-sm mt-2">
                founders &amp; brands shaped since the studio opened.
              </p>
            </div>
          </Block>

        </motion.div>

        {/* Three pillars, swipe carousel on mobile, 3-col grid on desktop */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px 12% 0px" }}
          className="mt-3 md:mt-4 flex md:grid md:grid-cols-3 gap-3 md:gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mr-6 pr-6 md:mr-0 md:pr-0 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {pillars.map((p) => (
            <Block
              key={p.t}
              className="snap-start shrink-0 w-[76vw] sm:w-[46vw] md:w-auto min-h-[150px] md:min-h-[210px] flex flex-col justify-between group"
            >
              <div className="flex items-start justify-between">
                <span className="serif-italic text-2xl text-cream/40">{p.n}</span>
                <span className="text-cream/30 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>
              <div className="mt-10">
                <h3 className="serif text-2xl md:text-[1.7rem] leading-tight">{p.t}</h3>
                <p className="text-cream/60 text-sm mt-3 leading-relaxed">{p.d}</p>
              </div>
            </Block>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
