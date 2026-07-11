"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { Magnetic } from "./motion";
import { EASE } from "./motion";

/* Each service carries its own hue so the whole section shifts mood as you
   move through the "menu" — dot, number, row glow and preview frame all tint. */
const services = [
  {
    t: "Strategic PR",
    course: "The main",
    img: "/images/art/svc1.jpg",
    accent: "oklch(0.56 0.075 135)", // sage — on brand
    tint: "oklch(0.56 0.075 135 / 0.10)",
    items: ["Press strategy", "Newsroom", "Crisis comms", "Spokesperson prep"],
    body:
      "Strategy and storytelling that puts your brand in the rooms — and the publications — that move the needle.",
    stat: { n: "40+", l: "tier-1 placements / year" },
  },
  {
    t: "Social Performance",
    course: "Something hot",
    img: "/images/art/svc3.jpg",
    accent: "oklch(0.63 0.15 35)", // terracotta
    tint: "oklch(0.63 0.15 35 / 0.10)",
    items: ["Paid social", "Creator partnerships", "Always-on", "Reporting"],
    body:
      "Performance social that converts attention into pipeline, optimised channel by channel and post by post.",
    stat: { n: "6.2×", l: "avg. return on ad spend" },
  },
  {
    t: "Content & Editorial",
    course: "Slow-cooked",
    img: "/images/art/svc4.jpg",
    accent: "oklch(0.68 0.12 75)", // ochre
    tint: "oklch(0.68 0.12 75 / 0.10)",
    items: ["Thought leadership", "Op-eds", "Newsletters", "Long-form"],
    body:
      "Editorial substance and a publishing rhythm that compounds — owned media that earns its share of voice.",
    stat: { n: "3.4M", l: "words that actually landed" },
  },
  {
    t: "Founder Brand",
    course: "The signature",
    img: "/images/art/svc2.jpg",
    accent: "oklch(0.5 0.11 300)", // plum
    tint: "oklch(0.5 0.11 300 / 0.10)",
    items: ["Positioning", "LinkedIn", "Keynotes", "Podcast tour"],
    body:
      "We sharpen the person behind the brand — clear point of view, sharper presence, real authority.",
    stat: { n: "1", l: "unmistakable point of view" },
  },
];

export function Services() {
  const [open, setOpen] = useState(-1);
  const [hover, setHover] = useState(-1);
  const listRef = useRef<HTMLDivElement>(null);

  // Cursor-following preview (desktop). Track pointer within the list, spring to it.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 220, damping: 26, mass: 0.6 });
  const py = useSpring(my, { stiffness: 220, damping: 26, mass: 0.6 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = listRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  }

  const active = hover >= 0 ? services[hover] : null;

  return (
    <section
      id="services"
      className="relative z-[60] bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border overflow-hidden"
    >
      {/* faint dotted texture in the top-right, tinted by the hovered service */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-0 h-96 w-96 rounded-full opacity-[0.5] blur-3xl transition-colors duration-700"
        style={{ background: active ? active.tint : "transparent" }}
      />

      <div className="relative mx-auto max-w-[1480px]">
        <div className="flex items-end justify-between mb-6">
          <Reveal>
            <div className="eyebrow mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> On the menu
            </div>
            <h2 className="serif text-4xl md:text-6xl">
              Services, <span className="serif-italic">plated.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="serif-italic text-sm text-ink-soft">/ 4 courses / ©</div>
          </Reveal>
        </div>
        <Reveal>
          <p className="max-w-2xl text-ink-soft text-lg mb-8">
            A tasting menu of what we do best. Full-funnel marketing, brand and PR —
            picked, prepped and served so your brand is impossible to ignore.
            <span className="hidden lg:inline"> Hover to see each course.</span>
          </p>
        </Reveal>

        {/* Interactive list + cursor-following preview */}
        <div
          ref={listRef}
          onMouseMove={onMove}
          className="relative mt-2"
        >
          {/* floating preview — desktop only */}
          <AnimatePresence>
            {active && (
              <motion.div
                key={active.t}
                className="pointer-events-none absolute z-20 hidden lg:block"
                style={{ left: px, top: py }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <div
                  className="relative -translate-x-1/2 -translate-y-1/2"
                  style={{ transform: "translate(-50%, -50%) rotate(-5deg)" }}
                >
                  <div
                    className="h-64 w-[22rem] overflow-hidden rounded-2xl border-4 shadow-2xl"
                    style={{ borderColor: active.accent }}
                  >
                    <img
                      src={active.img}
                      alt={active.t}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-cream">
                      <span className="serif-italic text-lg">{active.course}</span>
                      <span className="eyebrow text-cream/80">View →</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {services.map((s, i) => {
            const isOpen = open === i;
            const isHot = hover === i;
            return (
              <Reveal key={s.t} delay={i * 60}>
                <div
                  className="relative border-t border-ink/15 transition-colors duration-500"
                  style={{ background: isHot ? s.tint : "transparent" }}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover((h) => (h === i ? -1 : h))}
                >
                  {/* accent rail that grows on hover / open */}
                  <motion.span
                    aria-hidden
                    className="absolute left-0 top-0 bottom-0 w-[3px] origin-top"
                    style={{ background: s.accent }}
                    initial={false}
                    animate={{ scaleY: isHot || isOpen ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                  />

                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full py-7 md:py-8 pl-4 md:pl-6 pr-1 flex items-center gap-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className="serif-italic text-sm w-8 shrink-0 transition-colors duration-300"
                      style={{ color: isHot || isOpen ? s.accent : undefined }}
                    >
                      0{i + 1}
                    </span>
                    <span className="hidden sm:block eyebrow shrink-0 w-28 opacity-70">
                      {s.course}
                    </span>
                    <h3
                      className="serif text-3xl md:text-5xl flex-1 transition-colors duration-300"
                      style={{ color: isHot && !isOpen ? s.accent : undefined }}
                    >
                      {s.t}
                    </h3>
                    <div className="hidden lg:flex flex-nowrap gap-2 justify-end">
                      {s.items.map((it) => (
                        <span key={it} className="pill whitespace-nowrap">
                          {it}
                        </span>
                      ))}
                    </div>
                    <span
                      className="relative h-11 w-11 shrink-0 rounded-full border grid place-items-center transition-colors duration-300"
                      style={{
                        borderColor: isHot || isOpen ? s.accent : "oklch(0.18 0.008 80 / 0.25)",
                        background: isHot || isOpen ? s.accent : "transparent",
                        color: isHot || isOpen ? "var(--cream)" : "inherit",
                      }}
                    >
                      <span className="absolute h-px w-4 bg-current" />
                      <motion.span
                        className="absolute h-4 w-px bg-current"
                        animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                        transition={{ duration: 0.3, ease: EASE }}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 pb-10 pl-4 md:pl-[4rem] pr-4">
                          <div className="flex flex-col justify-between gap-6">
                            <p className="text-ink-soft text-lg md:text-xl leading-relaxed max-w-xl">
                              {s.body}
                            </p>

                            <div>
                              <div className="flex flex-wrap gap-2 mb-6">
                                {s.items.map((it, j) => (
                                  <motion.span
                                    key={it}
                                    className="pill"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15 + j * 0.06, ease: EASE }}
                                  >
                                    {it}
                                  </motion.span>
                                ))}
                              </div>

                              <div className="flex items-end justify-between gap-6 flex-wrap">
                                <div className="flex items-baseline gap-3">
                                  <span
                                    className="serif text-5xl md:text-6xl leading-none"
                                    style={{ color: s.accent }}
                                  >
                                    {s.stat.n}
                                  </span>
                                  <span className="text-ink-soft text-sm max-w-[10rem] leading-tight">
                                    {s.stat.l}
                                  </span>
                                </div>

                                <Magnetic>
                                  <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 rounded-pill border border-ink/20 px-5 py-2.5 text-sm transition-colors duration-300 hover:text-cream"
                                    style={{ ["--hoverbg" as string]: s.accent }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.background = s.accent;
                                      e.currentTarget.style.borderColor = s.accent;
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.background = "transparent";
                                      e.currentTarget.style.borderColor =
                                        "oklch(0.18 0.008 80 / 0.2)";
                                    }}
                                  >
                                    Order this course <span aria-hidden>↗</span>
                                  </a>
                                </Magnetic>
                              </div>
                            </div>
                          </div>

                          <div
                            className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted border-2"
                            style={{ borderColor: s.tint }}
                          >
                            <img
                              src={s.img}
                              alt={s.t}
                              loading="lazy"
                              className="h-full w-full object-cover"
                            />
                            <span
                              className="absolute top-3 left-3 rounded-pill px-3 py-1 text-xs text-cream backdrop-blur-sm"
                              style={{ background: s.accent }}
                            >
                              {s.course}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
          <div className="border-t border-ink/15" />
        </div>

        {/* taster strip — the full pantry of capabilities, always drifting */}
        <Reveal delay={120}>
          <div className="relative mt-12 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex shrink-0 items-center gap-3 pr-3 animate-marquee">
              {services
                .flatMap((s) => s.items.map((it) => ({ it, accent: s.accent })))
                .concat(
                  services.flatMap((s) =>
                    s.items.map((it) => ({ it, accent: s.accent })),
                  ),
                )
                .map(({ it, accent }, k) => (
                  <span
                    key={k}
                    className="inline-flex items-center gap-2 whitespace-nowrap rounded-pill border border-ink/15 px-4 py-2 text-sm text-ink-soft"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: accent }}
                    />
                    {it}
                  </span>
                ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
