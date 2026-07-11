"use client";

import { Reveal } from "./Reveal";

const whatWeDo = [
  { n: "01", t: "Media Relations & Outreach", img: "/images/svc-strategy.jpg", body: "Stories placed where they count, with the journalists you actually want covering you." },
  { n: "02", t: "Personal Brand Management", img: "/images/svc-media.jpg", body: "We polish the person, not just the logo, turning founders into the voice their category listens to." },
  { n: "03", t: "Content & Thought Leadership", img: "/images/svc-seo.jpg", body: "Ideas that spark conversation and earn lasting recognition across the channels that matter." },
];

export function WhatWeDo() {
  return (
    <section className="relative z-20 bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border">
      <div className="mx-auto max-w-[1480px]">
        <div className="flex items-baseline justify-between mb-14">
          <Reveal>
            <div>
              <div className="eyebrow mb-3">What we do</div>
              <div className="text-sm text-ink-soft">Turning visibility into credibility</div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="serif text-4xl md:text-7xl text-right">
              We turn visibility<br />
              into <span className="serif-italic">credibility</span>
            </h2>
          </Reveal>
          <div className="serif-italic text-sm text-ink-soft hidden md:block">/ 3 / ©</div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {whatWeDo.map((s, i) => (
            <Reveal key={s.t} delay={i * 100}>
              <article className="bg-card rounded-3xl p-6 md:p-8 h-full hover:-translate-y-1 transition duration-500">
                <div className="aspect-[5/4] rounded-2xl overflow-hidden mb-6 bg-muted">
                  <img src={s.img} alt={s.t} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition duration-700" />
                </div>
                <div className="flex items-baseline justify-between mb-3">
                  <span className="serif-italic text-2xl text-ink-soft">{s.n}</span>
                </div>
                <h3 className="serif text-3xl">{s.t}</h3>
                <p className="text-ink-soft mt-4 leading-relaxed">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
