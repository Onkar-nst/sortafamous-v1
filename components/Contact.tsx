"use client";

import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative z-[120] px-6 md:px-12 lg:px-16 xl:px-28 py-16 md:py-28 border-t border-border">
      <div className="mx-auto max-w-[1480px]">
        <div className="flex items-baseline justify-between mb-14">
          <Reveal>
            <div>
              <div className="eyebrow mb-3">Get in touch</div>
              <div className="text-sm text-ink-soft">Contact — 2026</div>
            </div>
          </Reveal>
        </div>
        <div className="relative rounded-[2rem] overflow-hidden">
          <img src="/images/art/scene1.jpg" alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/40" />
          <div className="relative text-cream p-10 md:p-16 grid lg:grid-cols-2 gap-10 min-h-[560px]">
            <div className="flex flex-col justify-between">
              <Reveal>
                <h2 className="serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] tracking-[-0.02em]">
                  We craft stories that make brands <span className="serif-italic">matter</span>.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-cream/70 mt-8 max-w-md">
                  From PR to social strategy, we help you build influence and visibility that lasts.
                </p>
              </Reveal>
            </div>
            <div className="flex flex-col justify-end gap-6">
              <a href="mailto:hellothere@sortafamous.in" className="inline-flex w-fit items-center gap-2 rounded-full bg-cream text-ink px-6 py-3.5 text-sm hover:opacity-90 transition">
                Get in touch →
              </a>
              <div className="border-t border-cream/20 pt-6 space-y-2 text-cream/80 text-sm">
                <div>hellothere@sortafamous.in</div>
                <div>+91 8814 999 939</div>
                <div className="max-w-xs leading-relaxed">203, Patel Commercial Premises, off New Link Road, Andheri-west, Mumbai 400053</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
