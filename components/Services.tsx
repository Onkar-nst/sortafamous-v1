"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { EASE } from "./motion";

const services = [
  { t: "Strategic PR", img: "/images/art/svc1.jpg", items: ["Press strategy", "Newsroom", "Crisis comms", "Spokesperson prep"], body: "Strategy and storytelling that puts your brand in the rooms — and the publications — that move the needle." },
  { t: "Social Performance", img: "/images/art/svc3.jpg", items: ["Paid social", "Creator partnerships", "Always-on", "Reporting"], body: "Performance social that converts attention into pipeline, optimised channel by channel and post by post." },
  { t: "Content & Editorial", img: "/images/art/svc4.jpg", items: ["Thought leadership", "Op-eds", "Newsletters", "Long-form"], body: "Editorial substance and a publishing rhythm that compounds — owned media that earns its share of voice." },
  { t: "Founder Brand", img: "/images/art/svc2.jpg", items: ["Positioning", "LinkedIn", "Keynotes", "Podcast tour"], body: "We sharpen the person behind the brand — clear point of view, sharper presence, real authority." },
];

export function Services() {
  const [open, setOpen] = useState(-1);

  return (
    <section id="services" className="relative z-[60] bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border">
      <div className="mx-auto max-w-[1480px]">
        <div className="flex items-end justify-between mb-6">
          <Reveal>
            <div className="eyebrow mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> What we offer
            </div>
            <h2 className="serif text-4xl md:text-6xl">Services</h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="serif-italic text-sm text-ink-soft">/ 4 / ©</div>
          </Reveal>
        </div>
        <Reveal>
          <p className="max-w-2xl text-ink-soft text-lg mb-6">
            We craft full-funnel marketing, brand and PR strategies that make your brand impossible to
            ignore. From startups to influencers, we build visibility, trust and influence that lasts.
          </p>
        </Reveal>

        <div className="mt-6">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={s.t} delay={i * 60}>
                <div className="border-t border-ink/15">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full py-7 md:py-8 flex items-center gap-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="serif-italic text-sm text-ink-soft w-8 shrink-0">0{i + 1}</span>
                    <h3 className={`serif text-3xl md:text-5xl flex-1 transition-colors duration-300 ${isOpen ? "" : "group-hover:text-ink-soft"}`}>
                      {s.t}
                    </h3>
                    <div className="hidden lg:flex flex-nowrap gap-2 justify-end">
                      {s.items.map((it) => (
                        <span key={it} className="pill whitespace-nowrap">{it}</span>
                      ))}
                    </div>
                    <span className="relative h-11 w-11 shrink-0 rounded-full border border-ink/25 grid place-items-center group-hover:bg-ink group-hover:text-cream transition-colors duration-300">
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
                        <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 pb-10 pl-0 md:pl-[3.25rem]">
                          <div className="flex flex-col justify-between gap-6">
                            <p className="text-ink-soft text-lg md:text-xl leading-relaxed max-w-xl">{s.body}</p>
                            <div className="flex flex-wrap gap-2 lg:hidden">
                              {s.items.map((it) => (
                                <span key={it} className="pill">{it}</span>
                              ))}
                            </div>
                          </div>
                          <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-muted">
                            <img src={s.img} alt={s.t} loading="lazy" className="h-full w-full object-cover" />
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
      </div>
    </section>
  );
}
