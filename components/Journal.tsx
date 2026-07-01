"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const posts = [
  { tag: "Strategy", date: "May 18, 2026", t: "Why discipline beats novelty in brand building", d: "Trends fade. Brands that compound attention commit to a system and refuse to chase every new format.", img: "/images/art/story-strategy.jpg" },
  { tag: "Measurement", date: "Apr 2, 2026", t: "The metrics that actually predict growth", d: "Vanity numbers feel good and tell you nothing. Here are the signals we watch.", img: "/images/art/story-metrics.jpg" },
  { tag: "Craft", date: "Feb 21, 2026", t: "Creative and media belong in the same room", d: "When the people making the work and the people buying the placement never talk, you get beautiful ads nobody sees.", img: "/images/art/story-craft.jpg" },
];

export function Journal() {
  return (
    <section className="relative z-[120] bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border">
      <div className="mx-auto max-w-[1480px]">
        <SectionHeader
          eyebrow="Learn"
          title={<>Smarter <span className="serif-italic">stories</span></>}
          className="mb-10 md:mb-14"
        />

        <div className="-mr-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pr-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mr-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pr-0 sm:pb-0 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.t} delay={i * 90} className="min-w-[80%] snap-start sm:min-w-0">
              <motion.a
                href="#"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-card transition-colors duration-300 hover:border-ink/20 hover:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.4)]"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.t}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-cream/85 px-3 py-1 text-xs backdrop-blur-sm">
                    {p.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-xs text-ink-soft">{p.date}</div>
                  <h3 className="serif text-2xl md:text-[1.7rem] leading-[1.15] mt-2">{p.t}</h3>
                  <p className="text-ink-soft text-sm mt-3 leading-relaxed">{p.d}</p>
                  <span className="mt-auto flex items-center gap-2 border-t border-ink/10 pt-5 mt-6 text-sm">
                    Read article
                    <span aria-hidden className="text-brand transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
