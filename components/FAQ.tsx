"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { EASE } from "./motion";

const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "We work with founders, startups and modern brands who want earned attention that lasts — from full-scale PR campaigns and media relations to founder brand building and always-on social strategy.",
  },
  {
    q: "How does a typical engagement begin?",
    a: "It starts with a discovery call to understand your goals, audience and current positioning. From there we map a strategy, agree on scope and milestones, and move into execution — usually within the first two weeks.",
  },
  {
    q: "What is your pricing model?",
    a: "Most partnerships run as a monthly retainer scoped to your goals, with project-based options for launches and one-off campaigns. We share a clear proposal after our first call — no surprises.",
  },
  {
    q: "Who will I be working with?",
    a: "A dedicated lead strategist supported by our PR, content and social specialists. You get a single point of contact and a team that actually knows your brand — not a rotating cast of account managers.",
  },
  {
    q: "How do you measure success?",
    a: "We agree on the metrics that matter to you up front — earned media, share of voice, qualified inbound, follower and engagement growth — and report against them transparently every month.",
  },
  {
    q: "How long until we see results?",
    a: "Momentum builds from the first month, but meaningful reputation and visibility compound over a quarter or two. We're built for lasting credibility, not a one-week spike.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(-1);

  return (
    <section
      id="faq"
      className="relative z-[135] bg-cream px-6 md:px-12 lg:px-16 xl:px-28 py-16 md:py-28 border-t border-border"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="flex items-center justify-between mb-10 md:mb-14">
          <Reveal>
            <div className="eyebrow flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Questions
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="serif-italic text-sm text-ink-soft">FAQ — 2026</div>
          </Reveal>
        </div>

        <div className="flex items-baseline justify-between mb-6">
          <Reveal>
            <h2 className="serif text-4xl md:text-7xl">
              Frequently asked <span className="serif-italic">questions</span>
            </h2>
          </Reveal>
          <div className="serif-italic text-sm text-ink-soft hidden md:block">/ 6 / ©</div>
        </div>

        <div className="mt-6">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 50}>
                <div className="border-t border-ink/15">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full py-7 md:py-8 flex items-center gap-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <h3 className={`serif text-2xl md:text-4xl flex-1 transition-colors duration-300 ${isOpen ? "" : "group-hover:text-ink-soft"}`}>
                      {f.q}
                    </h3>
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
                        <p className="text-ink-soft text-lg md:text-xl leading-relaxed max-w-3xl pb-8 md:pb-10 pr-16">
                          {f.a}
                        </p>
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
