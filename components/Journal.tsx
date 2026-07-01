"use client";

import { Reveal } from "./Reveal";

const posts = [
  { tag: "Strategy", date: "May 18, 2026", t: "Why discipline beats novelty in brand building", d: "Trends fade. Brands that compound attention commit to a system and refuse to chase every new format.", img: "/images/art/story-strategy.jpg" },
  { tag: "Measurement", date: "Apr 2, 2026", t: "The metrics that actually predict growth", d: "Vanity numbers feel good and tell you nothing. Here are the signals we watch.", img: "/images/art/story-metrics.jpg" },
  { tag: "Craft", date: "Feb 21, 2026", t: "Creative and media belong in the same room", d: "When the people making the work and the people buying the placement never talk, you get beautiful ads nobody sees.", img: "/images/art/story-craft.jpg" },
];

export function Journal() {
  return (
    <section className="relative z-[120] bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border">
      <div className="mx-auto max-w-[1480px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-baseline md:justify-between mb-14">
          <Reveal>
            <div>
              <div className="eyebrow mb-3">Learn</div>
              <div className="text-sm text-ink-soft">Journal — 2026</div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="serif text-4xl md:text-7xl md:text-right">
              Smarter <span className="serif-italic">stories</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <a href="#" className="group block">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted mb-5">
                <img src={posts[0].img} alt={posts[0].t} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="text-xs text-ink-soft">{posts[0].tag} · {posts[0].date}</div>
              <h3 className="serif text-3xl md:text-4xl mt-2">{posts[0].t}</h3>
              <p className="text-ink-soft mt-3">{posts[0].d}</p>
            </a>
          </Reveal>
          <div className="grid gap-6">
            {posts.slice(1).map((p, i) => (
              <Reveal key={p.t} delay={i * 100}>
                <a href="#" className="group grid grid-cols-[140px_1fr] sm:grid-cols-[200px_1fr] gap-5 items-start">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
                    <img src={p.img} alt={p.t} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
                  </div>
                  <div>
                    <div className="text-xs text-ink-soft">{p.tag} · {p.date}</div>
                    <h3 className="serif text-2xl md:text-3xl mt-2">{p.t}</h3>
                    <p className="text-ink-soft text-sm mt-3 leading-relaxed">{p.d}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
