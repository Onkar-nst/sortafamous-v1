"use client";

import { Reveal } from "./Reveal";

const team = [
  { img: "/images/art/team3.jpg", n: "Elise Moreau", r: "Founder & Strategy Director" },
  { img: "/images/art/team1.jpg", n: "Marcus Hale", r: "Head of PR" },
  { img: "/images/art/team2.jpg", n: "Sofia Reyes", r: "Creative Lead" },
  { img: "/images/art/team4.jpg", n: "Cherry Wong", r: "Social Performance Lead" },
];

export function Team() {
  return (
    <section className="relative z-[90] bg-cream py-16 md:py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-[1480px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-baseline md:justify-between mb-14">
          <Reveal>
            <div>
              <div className="eyebrow mb-3">The people</div>
              <div className="text-sm text-ink-soft">Studio team — 2026</div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="serif text-4xl md:text-7xl md:text-right">
              Meet the <span className="serif-italic">team</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <Reveal key={m.n} delay={i * 80}>
              <div className="group">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-muted mb-5">
                  <img src={m.img} alt={m.n} loading="lazy" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition duration-700" />
                </div>
                <h3 className="serif text-2xl">{m.n}</h3>
                <p className="text-sm text-ink-soft mt-1">{m.r}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
