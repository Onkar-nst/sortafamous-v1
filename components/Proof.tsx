"use client";

import { Reveal } from "./Reveal";
import { Counter } from "./motion";

const stats = [
  { to: 240, suffix: "%", d: "Average earned-media lift across launches" },
  { to: 60, suffix: "+", d: "Founders and brands shaped since the studio opened" },
  { to: 98, suffix: "%", d: "Client retention, year over year" },
];

export function Proof() {
  return (
    <section className="relative z-[70] bg-ink text-cream py-32 px-6 rounded-t-[2.5rem]">
      <div className="mx-auto max-w-[1480px]">
        <div className="flex items-baseline justify-between mb-20">
          <Reveal>
            <div className="eyebrow text-cream/60">Proof in numbers</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="serif text-3xl md:text-5xl">Est. 2019 ©</h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((s, i) => (
            <Reveal key={s.d} delay={i * 100}>
              <div className="border-t border-cream/20 pt-6">
                <Counter
                  to={s.to}
                  suffix={s.suffix}
                  className="serif text-[clamp(4rem,10vw,9rem)] leading-none block"
                />
                <p className="text-cream/70 mt-6 max-w-xs">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
