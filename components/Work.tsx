"use client";

import { Reveal } from "./Reveal";
import { Parallax } from "./motion";

const cases = [
  { n: "01", t: "Borden Skincare", d: "Launch & earned-media campaign", img: "/images/art/case1.jpg" },
  { n: "02", t: "Leafe Studio", d: "Positioning & founder PR", img: "/images/art/case2.jpg" },
  { n: "03", t: "Hues Gallery", d: "Editorial & cultural strategy", img: "/images/art/case3.jpg" },
  { n: "04", t: "Penta Group", d: "Thought leadership & social", img: "/images/art/case4.jpg" },
];

export function Work() {
  return (
    <section className="relative z-[100] bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 rounded-t-[2.5rem]">
      <div className="mx-auto max-w-[1480px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-baseline md:justify-between mb-14">
          <Reveal>
            <div>
              <div className="eyebrow mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> In practice
              </div>
              <div className="text-sm text-ink-soft">Selected work — 2026</div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="serif text-4xl md:text-7xl md:text-right">
              Selected <span className="serif-italic">work</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <Reveal key={c.t} delay={(i % 2) * 100}>
              <a href="#" className="group block">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
                  <Parallax amount={30} className="absolute inset-0">
                    <img
                      src={c.img}
                      alt={c.t}
                      loading="lazy"
                      className="h-[118%] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </Parallax>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-80" />
                  <span className="absolute top-6 right-7 serif text-3xl text-cream/90">{c.n}</span>
                  <div className="absolute bottom-0 left-0 p-7 text-cream">
                    <h3 className="serif text-3xl md:text-4xl">{c.t}</h3>
                    <p className="text-cream/80 mt-1">{c.d}</p>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
