"use client";

import { Reveal } from "./Reveal";
import { Parallax } from "./motion";
import { SectionHeader } from "./SectionHeader";

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
        <SectionHeader
          eyebrow="In practice"
          title={<>Selected <span className="serif-italic">work</span></>}
          className="mb-14"
        />
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <Reveal key={c.t} delay={(i % 2) * 100}>
              <a href="#" className="group block">
                <div className="relative aspect-[16/10] md:aspect-[5/2] rounded-3xl overflow-hidden bg-muted">
                  <Parallax amount={30} className="absolute inset-0">
                    <img
                      src={c.img}
                      alt={c.t}
                      loading="lazy"
                      className="h-[118%] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </Parallax>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/10" />
                  {/* circular arrow button — fills on hover */}
                  <span className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-cream/50 bg-ink/20 text-xl text-cream backdrop-blur-sm transition-colors duration-300 group-hover:border-cream group-hover:bg-cream group-hover:text-ink">
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </span>
                  <div className="absolute bottom-0 left-0 p-8 text-cream">
                    <h3 className="serif text-4xl md:text-5xl">{c.t}</h3>
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
