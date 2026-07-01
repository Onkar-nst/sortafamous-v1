"use client";

import { Mail, Phone, MapPin, ArrowRight, Sparkles, Users } from "lucide-react";
import { Reveal } from "./Reveal";

const fields = [
  { id: "name", label: "Your name", type: "text", placeholder: "Jane Doe" },
  { id: "email", label: "Email address", type: "email", placeholder: "you@brand.com" },
  { id: "service", label: "What you need", type: "text", placeholder: "PR · Social · Founder brand" },
];

const perks = [
  { Icon: Sparkles, t: "Free 30-min consult", d: "Tell us your goals — we'll send back a quick-win snapshot. No commitment." },
  { Icon: Users, t: "Talk to strategists", d: "No account managers — you speak directly with the people running your campaigns." },
];

const info = [
  { Icon: Mail, v: "hellothere@sortafamous.in", href: "mailto:hellothere@sortafamous.in" },
  { Icon: Phone, v: "+91 8814 999 939", href: "tel:+918814999939" },
  { Icon: MapPin, v: "203 Patel Commercial Premises, Andheri West, Mumbai 400053" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative z-[140] bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="flex items-baseline justify-between mb-12">
          <Reveal>
            <div className="eyebrow flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Get in touch
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="text-sm text-ink-soft">Contact — 2026</div>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          {/* LEFT — image card with headline + perks */}
          <Reveal>
            <div className="relative rounded-[2rem] overflow-hidden min-h-[520px] lg:h-full flex flex-col justify-between p-8 md:p-10 bg-ink">
              <img
                src="/images/art/scene1.jpg"
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
              <h2 className="relative serif text-[clamp(2rem,3.6vw,3.4rem)] leading-[1.05] text-cream max-w-md">
                Let&apos;s build a reputation people <span className="serif-italic">remember.</span>
              </h2>
              <div className="relative grid sm:grid-cols-2 gap-3 mt-10">
                {perks.map(({ Icon, t, d }) => (
                  <div
                    key={t}
                    className="rounded-2xl bg-cream/10 backdrop-blur-md border border-cream/15 p-5 text-cream"
                  >
                    <Icon className="h-5 w-5 mb-4" strokeWidth={1.6} />
                    <div className="serif text-lg">{t}</div>
                    <p className="text-cream/70 text-sm mt-1.5 leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* RIGHT — form + contact info */}
          <Reveal delay={100}>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
              <div className="space-y-7">
                {fields.map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-base text-ink-soft mb-2.5">
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      placeholder={f.placeholder}
                      className="w-full bg-transparent border-b border-ink/20 pb-3 text-lg outline-none focus:border-ink transition-colors placeholder:text-ink/30"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="details" className="block text-base text-ink-soft mb-2.5">
                    Project details
                  </label>
                  <textarea
                    id="details"
                    rows={2}
                    placeholder="Tell us a little about what you're building…"
                    className="w-full bg-transparent border-b border-ink/20 pb-3 text-lg outline-none focus:border-ink transition-colors resize-none placeholder:text-ink/30"
                  />
                </div>
              </div>

              <a
                href="mailto:hellothere@sortafamous.in"
                className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink text-cream px-8 py-4 text-sm hover:opacity-90 transition"
              >
                Let&apos;s get Sorta Famous <ArrowRight className="h-4 w-4" />
              </a>

              <div className="mt-10 space-y-4">
                {info.map(({ Icon, v, href }) => (
                  <div key={v} className="flex items-center gap-4">
                    <span className="h-11 w-11 shrink-0 rounded-full bg-card grid place-items-center">
                      <Icon className="h-4 w-4 text-ink-soft" strokeWidth={1.6} />
                    </span>
                    {href ? (
                      <a href={href} className="text-ink-soft hover:text-ink transition">
                        {v}
                      </a>
                    ) : (
                      <span className="text-ink-soft">{v}</span>
                    )}
                  </div>
                ))}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
