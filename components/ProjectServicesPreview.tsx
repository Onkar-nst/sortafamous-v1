"use client";

import { Clock } from "lucide-react";
import { Reveal } from "./Reveal";
import { EASE } from "./motion";

const tags = [
  { t: "Brand Audit & Performance Analysis", accent: "oklch(0.68 0.12 75)" },
  { t: "Public Relations (PR)", accent: "oklch(0.56 0.075 135)" },
  { t: "Influencer Marketing", accent: "oklch(0.63 0.15 35)" },
  { t: "Performance Marketing", accent: "oklch(0.5 0.11 300)" },
  { t: "Content Strategy & Creative", accent: "oklch(0.55 0.11 250)" },
  { t: "Website Design & Development", accent: "oklch(0.58 0.09 190)" },
];

/** Homepage teaser for the project-based offering — links to the full
    section on the Services page. */
export function ProjectServicesPreview() {
  return (
    <section
      id="project-based"
      className="relative z-[60] bg-cream py-14 md:py-20 px-6 md:px-12 lg:px-16 xl:px-28"
    >
      <div className="mx-auto max-w-[1480px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink-gradient text-cream p-8 md:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full opacity-40 blur-3xl"
              style={{ background: "oklch(0.56 0.075 135 / 0.35)" }}
            />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <div className="eyebrow mb-4 inline-flex items-center gap-2 text-cream/50">
                  <Clock className="h-3.5 w-3.5" strokeWidth={1.8} /> Project-based · no retainer
                </div>
                <h2 className="serif text-3xl md:text-5xl leading-[1.08]">
                  Need one thing done{" "}
                  <span className="serif-italic">brilliantly?</span>
                </h2>
                <p className="mt-5 max-w-md text-cream/70 leading-relaxed">
                  Expert-led marketing delivered on demand. One-time,
                  project-based services that are cost effective, goal-oriented
                  and tailored to your business, without a long-term commitment.
                </p>
                <a
                  href="/services#project-services"
                  className="mt-7 inline-flex items-center gap-2 rounded-pill bg-cream text-ink px-6 py-3 text-sm transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ transitionTimingFunction: `cubic-bezier(${EASE.join(",")})` }}
                >
                  Explore project services <span aria-hidden>↗</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-2.5 lg:justify-end">
                {tags.map((tag) => (
                  <span
                    key={tag.t}
                    className="inline-flex items-center gap-2 rounded-pill border border-cream/15 bg-cream/5 px-4 py-2.5 text-sm text-cream/85"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: tag.accent }}
                    />
                    {tag.t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
