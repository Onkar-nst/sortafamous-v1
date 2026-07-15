"use client";

import { Reveal } from "./Reveal";

const faces = [
  "/images/scatter/avatar-15.webp",
  "/images/scatter/avatar-16.webp",
  "/images/scatter/avatar-17.webp",
  "/images/scatter/avatar-18.webp",
  "/images/scatter/avatar-19.webp",
];

/**
 * A warm, first-person note from the team, the human moment on the About page.
 * Real faces, a conversational voice and a signature, designed to make a
 * prospective client feel there are actual people on the other side.
 */
export function AboutNote() {
  return (
    <section className="relative z-30 bg-cream px-6 md:px-12 lg:px-16 xl:px-28 py-16 md:py-28">
      <div className="mx-auto max-w-[1480px]">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card px-7 py-12 md:px-16 md:py-20">
          {/* soft accent wash */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full blur-[90px]"
            style={{ background: "oklch(0.56 0.075 135 / 0.18)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -bottom-24 h-72 w-72 rounded-full blur-[90px]"
            style={{ background: "oklch(0.68 0.12 75 / 0.14)" }}
          />

          <div className="relative mx-auto max-w-3xl">
            <Reveal>
              <div className="eyebrow mb-8 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> A note from us
              </div>
            </Reveal>

            <Reveal delay={80}>
              <p className="serif text-[clamp(1.5rem,3.4vw,2.6rem)] leading-[1.3] tracking-[-0.01em]">
                We started Sorta Famous because we were tired of visibility that
                felt hollow, <span className="serif-italic">loud today, forgotten tomorrow.</span> You
                worked too hard on what you built to let it go unnoticed, or to be
                remembered for the wrong reasons.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-7 text-ink-soft text-lg leading-relaxed">
                So here&apos;s our promise: we&apos;ll treat your reputation like it&apos;s our
                own. No jargon, no vanity metrics, no disappearing after the launch.
                Just a small, obsessive team that actually picks up the phone, and
                cares whether the story lands. If that sounds like the kind of partner
                you&apos;ve been looking for, we should talk.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {faces.map((src, i) => (
                      <span
                        key={src}
                        className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-card bg-muted"
                        style={{ zIndex: faces.length - i }}
                      >
                        <img
                          src={src}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </span>
                    ))}
                  </div>
                  <div>
                    <div className="serif-italic text-2xl leading-none">
                      Nandini &amp; the team
                    </div>
                    <div className="eyebrow mt-1.5">Sorta Famous, Mumbai</div>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-pill bg-ink px-6 py-3.5 text-sm text-cream transition hover:opacity-90"
                >
                  Say hello
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
