"use client";

import { Reveal } from "./Reveal";
import { HeroOrbit } from "./HeroOrbit";

export function ServicesHero() {
  return (
    <section className="relative z-10 bg-cream pt-32 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-16 xl:px-28">
      <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <div className="eyebrow mb-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Services
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="serif text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.98] tracking-[-0.03em] max-w-[15ch]">
              Stories that make <span className="serif-italic">brands matter</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink-soft leading-relaxed">
              Across brand, social, content and PR, we help you build influence and visibility that
              lasts. Connected practices, one cohesive system — designed to earn you the right kind
              of attention.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#plans"
                className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-3.5 text-sm hover:opacity-90 transition"
              >
                See the plans <span aria-hidden>→</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-sm px-3 py-3.5 hover:translate-x-1 transition"
              >
                Book a consult <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="hidden lg:block">
          <HeroOrbit chips={["PR", "Social", "SEO", "Brand"]} />
        </Reveal>
      </div>
    </section>
  );
}
