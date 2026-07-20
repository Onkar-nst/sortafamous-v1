"use client";

import {
  Gauge,
  Megaphone,
  Sparkles,
  TrendingUp,
  PenTool,
  Code2,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";
import { EASE } from "./motion";

type Project = {
  n: string;
  Icon: LucideIcon;
  t: string;
  d: string;
};

const projects: Project[] = [
  {
    n: "01",
    Icon: Gauge,
    t: "Brand Audit & Performance Analysis",
    d: "An in-depth analysis of your brand’s digital presence, social media, website, SEO and advertising performance, with actionable recommendations for improvement.",
  },
  {
    n: "02",
    Icon: Megaphone,
    t: "Public Relations (PR)",
    d: "Strengthen your brand reputation through strategic media outreach, press releases and targeted PR campaigns.",
  },
  {
    n: "03",
    Icon: Sparkles,
    t: "Influencer Marketing",
    d: "Collaborate with carefully selected creators to increase brand awareness, credibility and audience engagement.",
  },
  {
    n: "04",
    Icon: TrendingUp,
    t: "Performance Marketing",
    d: "Launch and optimise high-performing ad campaigns across Google, Meta, LinkedIn and other digital platforms to achieve measurable results.",
  },
  {
    n: "05",
    Icon: PenTool,
    t: "Content Strategy & Creative",
    d: "Develop content strategies and creative assets that align with your brand, engage your audience and support your business objectives.",
  },
  {
    n: "06",
    Icon: Code2,
    t: "Website Design & Development",
    d: "Build or revamp responsive, user-friendly and conversion-focused websites that deliver a seamless customer experience.",
  },
];

export function ProjectServices() {
  return (
    <section
      id="project-services"
      className="relative z-20 bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border overflow-hidden scroll-mt-24"
    >
      <div className="mx-auto max-w-[1480px]">
        {/* Dark intro panel — mirrors the site's ink-panel motif, sets this
            section apart from the retained-service pillars above. */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink-gradient text-cream p-8 md:p-14">
            {/* soft glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-16 h-80 w-80 rounded-full bg-accent/35 opacity-40 blur-3xl"
            />
            <div className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end">
              <div>
                <div className="eyebrow mb-4 flex items-center gap-2 text-cream/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Project-based services
                </div>
                <h2 className="serif text-4xl md:text-6xl leading-[1.05]">
                  Project based <span className="serif-italic">marketing solutions</span>
                </h2>
                <p className="serif-italic text-xl md:text-2xl mt-4 text-cream/80">
                  Expert-led marketing, delivered on demand.
                </p>
                <p className="mt-6 max-w-xl text-cream/70 leading-relaxed">
                  Need support for a specific requirement without committing to a
                  long-term retainer? We offer one-time, project-based services
                  that are cost effective, goal-oriented and tailored to your
                  business needs.
                </p>
              </div>

              {/* on-demand badge */}
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <span className="inline-flex items-center gap-2 rounded-pill border border-cream/20 bg-cream/5 px-4 py-2 text-sm text-cream/80">
                  <Clock className="h-4 w-4" strokeWidth={1.6} /> One-time engagement
                </span>
                <span className="inline-flex items-center gap-2 rounded-pill border border-cream/20 bg-cream/5 px-4 py-2 text-sm text-cream/80">
                  No retainer required
                </span>
                <span className="inline-flex items-center gap-2 rounded-pill border border-cream/20 bg-cream/5 px-4 py-2 text-sm text-cream/80">
                  Goal-oriented
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Card grid */}
        <RevealStagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-10">
          {projects.map((p) => (
            <RevealItem key={p.n}>
              <article
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-cream p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)]"
              >
                {/* accent wash on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-brand/[0.05] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                {/* accent top bar */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-brand transition-transform duration-500 ease-out group-hover:scale-x-100"
                />

                <div className="relative flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand transition-all duration-500 group-hover:scale-110 group-hover:bg-brand group-hover:text-cream group-hover:shadow-lg">
                    <p.Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className="serif text-4xl leading-none text-ink/10 transition-colors duration-500 group-hover:text-brand/25">
                    {p.n}
                  </span>
                </div>

                <h3 className="serif text-2xl mt-6">{p.t}</h3>
                <p className="text-ink-soft mt-3 leading-relaxed text-[0.95rem]">
                  {p.d}
                </p>

                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-brand transition-all duration-500 group-hover:gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Available as a project
                  </span>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>

        {/* footer line + CTA */}
        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-muted/40 px-7 py-6">
            <p className="text-ink-soft max-w-xl">
              Have a one-off brief in mind? Pick a service, tell us the goal, and
              we’ll scope it, no long-term commitment.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-pill bg-ink text-cream px-6 py-3 text-sm transition-transform duration-300 hover:-translate-y-0.5"
              style={{ transitionTimingFunction: `cubic-bezier(${EASE.join(",")})` }}
            >
              Start a project <span aria-hidden>↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
