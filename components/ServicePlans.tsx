"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkle } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { EASE } from "./motion";

type Plan = {
  n: string;
  t: string;
  tagline: string;
  best: string;
  features: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    n: "01",
    t: "Sorta Famous",
    tagline: "Strategic foundation for emerging visibility.",
    best: "For brands finding their voice",
    features: [
      "Monthly press release distribution",
      "Targeted media outreach (2 to 3 publications)",
      "Influencer mentions",
      "Comprehensive monthly coverage report",
      "One campaign concept per quarter",
    ],
  },
  {
    n: "02",
    t: "Famous",
    tagline: "Expanded strategic communications.",
    best: "For brands ready to scale",
    features: [
      "Monthly press releases with enhanced influencer outreach (4 to 5 placements)",
      "Weekly ongoing media relations",
      "Content development (1 blog + 4 social media assets monthly)",
      "Quarterly strategy reviews",
      "Introductory business development support",
    ],
  },
  {
    n: "03",
    t: "Ultra Famous",
    tagline: "Integrated PR and growth strategy.",
    best: "For brands chasing category lead",
    features: [
      "Complete press & influencer program with premium placements",
      "Robust content (2 blogs + 8 social assets + video, monthly)",
      "Annual media event or launch support",
      "Monthly KPI dashboards + BD pipeline management",
      "Pitch deck optimization",
    ],
    featured: true,
  },
  {
    n: "04",
    t: "Mega Famous",
    tagline: "Strategic partnership for market leadership.",
    best: "For brands going global",
    features: [
      "Everything in Ultra + executive visibility programs",
      "Executive thought leadership development",
      "Multi market outreach (India, GCC, international)",
      "Tier 1 influencer campaigns + dedicated senior team",
      "Monthly BD workshops & quarterly campaign execution",
    ],
  },
];

function TierMeter({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-1" aria-hidden>
      {[1, 2, 3, 4].map((s) => (
        <span
          key={s}
          className="h-1.5 w-6 rounded-full"
          style={{ background: s <= level ? "var(--brand)" : "oklch(0.18 0.008 80 / 0.14)" }}
        />
      ))}
    </div>
  );
}

export function ServicePlans() {
  return (
    <section
      id="plans"
      className="relative z-30 bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border scroll-mt-24"
    >
      <div className="mx-auto max-w-[1480px]">
        <SectionHeader
          eyebrow="Ways to work together"
          title={<>Plans that scale <span className="serif-italic">with your ambition</span></>}
          marker="/ 04 tiers / ©"
          className="mb-12 md:mb-16"
        />

        <div>
          {plans.map((p, i) => {
            const featured = !!p.featured;
            return (
              <Reveal key={p.t} delay={i * 90}>
                <div
                  className={`group relative border-t border-ink/12 transition-colors duration-500 ${
                    i === plans.length - 1 ? "border-b" : ""
                  } ${featured ? "bg-brand/[0.05]" : "hover:bg-brand/[0.028]"}`}
                >
                  {/* accent rail, always on featured, grows in on hover for the rest */}
                  <span
                    aria-hidden
                    className={`absolute left-0 top-0 bottom-0 w-[3px] origin-center rounded-full bg-brand transition-transform duration-500 ${
                      featured ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                    }`}
                  />

                  <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 px-5 md:px-8 py-9 md:py-12">
                    {/* Left, identity + CTA */}
                    <div>
                      <div className="flex items-center gap-4">
                        <span className={`serif text-4xl leading-none ${featured ? "text-brand" : "text-ink/25"}`}>
                          {p.n}
                        </span>
                        <TierMeter level={i + 1} />
                        {featured && (
                          <span className="inline-flex items-center gap-1.5 rounded-pill bg-brand px-3 py-1 text-xs text-cream">
                            <Sparkle className="h-3 w-3" strokeWidth={2} /> Most popular
                          </span>
                        )}
                      </div>

                      <h3 className="serif text-4xl md:text-5xl mt-5 leading-tight">{p.t}</h3>
                      <p className="serif-italic text-lg text-brand mt-2">{p.best}</p>
                      <p className="text-ink-soft mt-3 leading-relaxed max-w-sm">{p.tagline}</p>

                      <a
                        href="/contact"
                        className={`group/btn mt-7 inline-flex items-center gap-2 rounded-pill px-6 py-3 text-sm font-medium transition ${
                          featured ? "bg-brand text-cream hover:opacity-90" : "bg-ink text-cream hover:opacity-90"
                        }`}
                      >
                        {featured ? "Start here" : "Get started"}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth={2} />
                      </a>
                    </div>

                    {/* Right, what's included */}
                    <div className="lg:pl-14 lg:border-l lg:border-ink/10">
                      <p className="eyebrow text-ink-soft mb-5">What&apos;s included</p>
                      <ul className="grid gap-x-10 gap-y-3.5 sm:grid-cols-2">
                        {p.features.map((f, j) => (
                          <motion.li
                            key={f}
                            className="flex items-start gap-3 text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                            transition={{ duration: 0.5, ease: EASE, delay: 0.15 + j * 0.06 }}
                          >
                            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand/12">
                              <Check className="h-3 w-3 text-brand" strokeWidth={2.5} />
                            </span>
                            <span className="text-ink-soft leading-snug">{f}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={80}>
          <p className="mt-10 text-sm text-ink-soft">
            Not sure which fits?{" "}
            <a href="/contact" className="underline underline-offset-4 hover:text-ink transition">
              Tell us your goals
            </a>{" "}
            and we&apos;ll shape a plan around them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
