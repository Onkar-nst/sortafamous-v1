"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { HeroOrbit } from "./HeroOrbit";
import { SectionHeader } from "./SectionHeader";
import { EASE } from "./motion";
import { CAREERS_EMAIL, applyHref, jobs, type Job, type JobSection } from "@/lib/careers";

export function CareersHero() {
  return (
    <section className="relative z-10 bg-cream pt-32 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-16 xl:px-28">
      <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <div className="eyebrow mb-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Careers
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="serif text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.98] tracking-[-0.03em] max-w-[15ch]">
              Help brands get <span className="serif-italic">remembered</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink-soft leading-relaxed">
              Sorta Famous helps brands be seen, heard, and remembered for the right reasons. We
              value clear communication, thoughtful questioning, and consistent execution, and
              we’re looking for people who care about influence over noise.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#openings"
                className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-3.5 text-sm hover:opacity-90 transition"
              >
                See open roles <span aria-hidden>→</span>
              </a>
              <a
                href={`mailto:${CAREERS_EMAIL}`}
                className="inline-flex items-center gap-2 text-sm px-3 py-3.5 hover:translate-x-1 transition"
              >
                {CAREERS_EMAIL} <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="hidden lg:block">
          <HeroOrbit chips={["PR", "Growth", "Ops", "Finance"]} />
        </Reveal>
      </div>
    </section>
  );
}

function ApplyButton({ job, className = "" }: { job: Job; className?: string }) {
  return (
    <a
      href={applyHref(job)}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-brand text-cream px-6 py-3.5 text-sm transition hover:opacity-90 ${className}`}
    >
      Apply now
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-0.5"
      >
        →
      </span>
    </a>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-ink-soft leading-relaxed">
          <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Section({ section }: { section: JobSection }) {
  return (
    <div className="border-t border-border pt-8">
      <h4 className="serif text-3xl md:text-4xl">{section.title}</h4>

      {section.paras?.map((p) => (
        <p key={p} className="mt-4 max-w-3xl text-ink-soft leading-relaxed md:text-lg">
          {p}
        </p>
      ))}

      {section.items && <Bullets items={section.items} />}

      {section.after?.map((p) => (
        <p key={p} className="mt-4 max-w-3xl text-ink-soft leading-relaxed md:text-lg">
          {p}
        </p>
      ))}

      {section.groups && (
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {section.groups.map((g, i) => (
            <div key={g.title} className="rounded-3xl border border-border bg-card p-6 md:p-7">
              <div className="flex items-start justify-between gap-4">
                <h5 className="serif text-2xl leading-tight">{g.title}</h5>
                <span className="serif text-3xl leading-none text-brand/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <Bullets items={g.items} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Openings() {
  const [open, setOpen] = useState<string | null>(null);

  // Opens a role straight from a shared link such as /careers#accountant.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (jobs.some((j) => j.slug === hash)) setOpen(hash);
  }, []);

  return (
    <section
      id="openings"
      className="relative z-20 bg-cream px-6 md:px-12 lg:px-16 xl:px-28 py-16 md:py-28 border-t border-border scroll-mt-24"
    >
      <div className="mx-auto max-w-[1480px]">
        <SectionHeader
          eyebrow="Open roles"
          title={<>Join the <span className="serif-italic">team</span></>}
          marker={`/ ${String(jobs.length).padStart(2, "0")} / ©`}
          className="mb-10 md:mb-14"
        />

        <div>
          {jobs.map((job, i) => {
            const isOpen = open === job.slug;
            return (
              <Reveal key={job.slug} delay={i * 50}>
                <article id={job.slug} className="border-t border-ink/15 scroll-mt-24">
                  <button
                    onClick={() => setOpen(isOpen ? null : job.slug)}
                    className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-5 py-7 text-left md:gap-8 md:py-9"
                    aria-expanded={isOpen}
                  >
                    <span className="serif text-3xl leading-none text-brand/30 md:text-5xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="eyebrow mb-2 text-brand">{job.team}</div>
                      <h3
                        className={`serif text-2xl md:text-4xl transition-colors duration-300 ${
                          isOpen ? "" : "group-hover:text-ink-soft"
                        }`}
                      >
                        {job.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {job.meta.slice(0, 3).map((m) => (
                          <span
                            key={m.label}
                            className="rounded-full border border-border px-3 py-1 text-xs text-ink-soft"
                          >
                            {m.value}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/25 transition-colors duration-300 group-hover:bg-brand group-hover:text-cream">
                      <span className="absolute h-px w-4 bg-current" />
                      <motion.span
                        className="absolute h-4 w-px bg-current"
                        animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                        transition={{ duration: 0.3, ease: EASE }}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: EASE }}
                        // clip rather than hidden, so the role card can stay sticky
                        className="overflow-clip"
                      >
                        <div className="grid gap-10 pb-12 md:pb-16 lg:grid-cols-[320px_1fr] lg:gap-16">
                          {/* Sticky role card with the apply action */}
                          <aside className="lg:sticky lg:top-28 lg:self-start">
                            <div className="relative overflow-hidden rounded-[2rem] bg-ink-gradient p-7 text-cream">
                              <div
                                aria-hidden
                                className="pointer-events-none absolute -top-16 -right-12 h-56 w-56 rounded-full bg-accent/35 opacity-40 blur-3xl"
                              />
                              <dl className="relative space-y-4">
                                {job.meta.map((m) => (
                                  <div key={m.label}>
                                    <dt className="eyebrow text-cream/50">{m.label}</dt>
                                    <dd className="serif mt-1 text-xl">{m.value}</dd>
                                  </div>
                                ))}
                              </dl>
                              <a
                                href={applyHref(job)}
                                className="group relative mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm text-ink transition-transform duration-300 hover:-translate-y-0.5"
                              >
                                Apply now
                                <span
                                  aria-hidden
                                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                                >
                                  →
                                </span>
                              </a>
                              <p className="relative mt-4 text-center text-xs text-cream/60 break-all">
                                or email {CAREERS_EMAIL}
                              </p>
                            </div>
                          </aside>

                          <div className="flex flex-col gap-10">
                            <p className="serif-italic text-xl text-brand md:text-2xl">
                              {job.summary}
                            </p>
                            {job.sections.map((s) => (
                              <Section key={s.title} section={s} />
                            ))}
                            <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-muted/40 px-7 py-6">
                              <p className="text-ink-soft max-w-xl">
                                Sound like you? Send us your CV and a few lines on why this
                                role.
                              </p>
                              <ApplyButton job={job} />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              </Reveal>
            );
          })}
          <div className="border-t border-ink/15" />
        </div>

        {/* Open application, the site's ink-panel motif */}
        <Reveal>
          <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-ink-gradient p-8 text-cream md:mt-24 md:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-16 h-80 w-80 rounded-full bg-accent/35 opacity-40 blur-3xl"
            />
            <div className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end">
              <div>
                <div className="eyebrow mb-4 flex items-center gap-2 text-cream/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Open application
                </div>
                <h2 className="serif text-4xl md:text-6xl leading-[1.05]">
                  Don’t see your <span className="serif-italic">role?</span>
                </h2>
                <p className="mt-6 max-w-xl text-cream/70 leading-relaxed">
                  We’re always glad to hear from sharp, curious people. Send your CV and tell us
                  what you’d bring to Sorta Famous.
                </p>
              </div>
              <div className="flex lg:justify-end">
                <a
                  href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent("Open application")}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm text-ink transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Write to us
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
