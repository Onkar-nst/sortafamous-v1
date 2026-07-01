"use client";

import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const team = [
  { img: "/images/art/team3.jpg", n: "Elise Moreau", r: "Founder & Strategy Director" },
  { img: "/images/art/team1.jpg", n: "Marcus Hale", r: "Head of PR" },
  { img: "/images/art/team2.jpg", n: "Sofia Reyes", r: "Creative Lead" },
  { img: "/images/art/team4.jpg", n: "Cherry Wong", r: "Social Performance Lead" },
];

export function Team() {
  return (
    <section className="relative z-[110] bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border">
      <div className="mx-auto max-w-[1480px]">
        <SectionHeader
          eyebrow="The people"
          title={<>Meet the <span className="serif-italic">team</span></>}
          className="mb-14"
        />
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
