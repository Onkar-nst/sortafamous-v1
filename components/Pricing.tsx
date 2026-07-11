"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const tiers = [
  {
    n: "01",
    t: "Foundation",
    features: ["Press strategy & media list", "Launch announcement & outreach", "Messaging & spokesperson prep"],
    perProject: "$2,400",
    monthly: "$1,800",
    cta: "Start a project",
  },
  {
    n: "02",
    t: "Growth",
    features: ["Ongoing media relations", "Always on social performance", "Monthly performance reporting"],
    perProject: "$4,800",
    monthly: "$3,500",
    cta: "Start a project",
  },
  {
    n: "03",
    t: "Scale",
    features: ["Full funnel PR & paid social", "Founder brand & thought leadership", "Dedicated strategist"],
    perProject: "$12,000",
    monthly: "$8,000",
    cta: "Book a call",
  },
];

export function Pricing() {
  const [monthly, setMonthly] = useState(false);

  return (
    <section id="pricing" className="relative z-[115] bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border">
      <div className="mx-auto max-w-[1480px]">
        <SectionHeader
          eyebrow="Simple pricing"
          title="Pricing"
          className="mb-10 md:mb-14"
        />

        {/* Billing toggle */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between border-t border-ink/15 py-6 mb-2">
          <div className="eyebrow">Engagement & billing</div>
          <div className="flex w-full sm:inline-flex sm:w-auto items-center rounded-full border border-ink/15 bg-muted p-1 text-sm">
            <button
              onClick={() => setMonthly(false)}
              aria-pressed={!monthly}
              className={`flex-1 sm:flex-none rounded-full px-5 py-2 text-center transition-colors duration-300 ${!monthly ? "bg-ink text-cream" : "text-ink-soft hover:text-ink"}`}
            >
              Per project
            </button>
            <button
              onClick={() => setMonthly(true)}
              aria-pressed={monthly}
              className={`flex-1 sm:flex-none rounded-full px-5 py-2 text-center transition-colors duration-300 ${monthly ? "bg-ink text-cream" : "text-ink-soft hover:text-ink"}`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Tiers */}
        <div>
          {tiers.map((tier, i) => (
            <Reveal key={tier.t} delay={i * 80}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.1fr_auto] md:gap-10 items-start border-t border-ink/15 py-10 md:py-12">
                <div className="flex items-baseline gap-4">
                  <span className="serif-italic text-sm text-ink-soft">{tier.n}</span>
                  <h3 className="serif text-3xl md:text-5xl">{tier.t}</h3>
                </div>

                <ul className="space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="text-ink-soft md:text-lg">{f}</li>
                  ))}
                </ul>

                <div className="md:text-right">
                  <div className="serif text-4xl md:text-5xl leading-none">
                    {monthly ? tier.monthly : tier.perProject}
                  </div>
                  <div className="text-sm text-ink-soft mt-2">{monthly ? "/ month" : "/ project"}</div>
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-2 mt-5 text-sm border-b border-ink/30 pb-0.5 hover:border-ink transition-colors"
                  >
                    {tier.cta}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-ink/15" />
        </div>
      </div>
    </section>
  );
}
