"use client";

import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

type Plan = {
  n: string;
  t: string;
  tagline: string;
  features: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    n: "01",
    t: "Sorta Famous",
    tagline: "Strategic foundation for emerging visibility.",
    features: [
      "Monthly press release distribution",
      "Targeted media outreach (2–3 publications)",
      "Influencer mentions",
      "Comprehensive monthly coverage report",
      "One campaign concept per quarter",
    ],
  },
  {
    n: "02",
    t: "Famous",
    tagline: "Expanded strategic communications.",
    features: [
      "Monthly press releases with enhanced influencer outreach (4–5 placements)",
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
    features: [
      "Complete press and influencer program with premium media placements (national/regional outlets)",
      "Robust content creation (2 blogs + 8 social assets monthly + video content)",
      "Annual media event or launch support",
      "Monthly KPI dashboards, and business development pipeline management including lead generation",
      "Pitch deck optimization",
    ],
    featured: true,
  },
  {
    n: "04",
    t: "Mega Famous",
    tagline: "Strategic partnership for market leadership.",
    features: [
      "Comprehensive Accelerate services + personalized executive visibility programs",
      "C-suite thought leadership development",
      "Multi-market media outreach (India, GCC/Middle East, international markets)",
      "Tier-1 influencer campaigns, dedicated senior team (PR lead + 2 specialists)",
      "Monthly business development workshops",
      "Quarterly major campaign execution",
    ],
  },
];

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
          className="mb-14"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((p, i) => (
            <Reveal key={p.t} delay={(i % 4) * 80}>
              <div
                className={`flex h-full flex-col rounded-[2rem] p-8 ${
                  p.featured
                    ? "bg-ink text-cream"
                    : "border border-border bg-card text-ink"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`serif-italic text-sm ${p.featured ? "text-cream/50" : "text-ink-soft"}`}
                  >
                    {p.n}
                  </span>
                  {p.featured && (
                    <span className="rounded-full bg-cream/15 px-3 py-1 text-xs text-cream">
                      Most popular
                    </span>
                  )}
                </div>
                <h3 className="serif text-3xl mt-6">{p.t}</h3>
                <p
                  className={`mt-3 leading-relaxed text-sm md:min-h-[2.85rem] ${
                    p.featured ? "text-cream/70" : "text-ink-soft"
                  }`}
                >
                  {p.tagline}
                </p>

                <ul
                  className={`mt-7 flex-1 space-y-3.5 border-t pt-7 ${
                    p.featured ? "border-cream/20" : "border-ink/15"
                  }`}
                >
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          p.featured ? "text-accent" : "text-brand"
                        }`}
                        strokeWidth={2}
                      />
                      <span className={p.featured ? "text-cream/85" : "text-ink-soft"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`group/btn mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition hover:opacity-90 ${
                    p.featured ? "bg-cream text-ink" : "bg-ink text-cream"
                  }`}
                >
                  Get started
                  <span aria-hidden className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="mt-10 text-sm text-ink-soft">
            Not sure which fits? <a href="/contact" className="underline underline-offset-4 hover:text-ink transition">Tell us your goals</a> and we&apos;ll shape a plan around them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
