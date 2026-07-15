"use client";

import { motion } from "framer-motion";
import { Compass, Sparkles, Layers, ShieldCheck, ArrowRight, type LucideIcon } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { EASE } from "./motion";

type Principle = {
  n: string;
  t: string;
  d: string;
  Icon: LucideIcon;
};

const principles: Principle[] = [
  {
    n: "01",
    t: "Strategy Over Shortcuts",
    d: "No clout chasing, no mass blasts. We rely on research driven storytelling that earns genuine editorial interest.",
    Icon: Compass,
  },
  {
    n: "02",
    t: "Visibility With Substance",
    d: "Every initiative is designed to help your brand stand out in a smart, authentic, and culturally relevant way.",
    Icon: Sparkles,
  },
  {
    n: "03",
    t: "Integrated Growth",
    d: "We blend PR, marketing, and SEO into one cohesive system so your visibility drives real business outcomes.",
    Icon: Layers,
  },
  {
    n: "04",
    t: "Reputation That Lasts",
    d: "We help build trust and authority that stays with your audience long after the campaign ends.",
    Icon: ShieldCheck,
  },
];

export function AboutPrinciples() {
  return (
    <section className="relative z-50 bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border">
      <div className="mx-auto max-w-[1480px]">
        <SectionHeader
          eyebrow="How we work"
          title={<>Principles that <span className="serif-italic">shape the work</span></>}
          marker="/ 04 / ©"
          className="mb-14"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -12% 0px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card p-8 transition-shadow duration-500 hover:shadow-[0_24px_50px_-28px_oklch(0.18_0.008_80_/_0.45)]"
            >
              {/* accent line that draws across the top */}
              <motion.span
                aria-hidden
                className="absolute left-0 top-0 h-[3px] w-full origin-left bg-accent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.25 + i * 0.12 }}
              />

              {/* soft accent wash on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(420px circle at 50% -10%, var(--accent), transparent 70%)", opacity: 0 }}
              />

              <div className="relative flex items-start justify-between">
                {/* icon, settles in, flips to solid + rotates on hover */}
                <motion.span
                  className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/12 text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-cream"
                  initial={{ scale: 0.6, opacity: 0, rotate: -12 }}
                  whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.3 + i * 0.12 }}
                >
                  <p.Icon className="h-5 w-5 transition-transform duration-500 group-hover:-rotate-6" strokeWidth={1.6} />
                </motion.span>

                {/* number + live pulse dot */}
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <span className="serif text-4xl leading-none text-ink/15 transition-colors duration-500 group-hover:text-ink/25">
                    {p.n}
                  </span>
                </div>
              </div>

              <h3 className="serif text-2xl mt-7 leading-tight">{p.t}</h3>
              <p className="text-ink-soft mt-3 leading-relaxed text-sm">{p.d}</p>

              {/* learn-more arrow reveals on hover */}
              <div className="mt-6 flex items-center gap-1.5 text-sm text-accent opacity-0 -translate-x-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                <span className="serif-italic">Our take</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
