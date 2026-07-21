"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { cases } from "@/lib/cases";

export function Work() {
  const visible = cases.filter((c) => !c.hidden);

  return (
    <section id="work" className="relative z-[100] bg-cream py-16 md:py-24 px-6 md:px-12 lg:px-16 xl:px-28 rounded-t-[2.5rem]">
      <div className="mx-auto max-w-[1480px]">
        <SectionHeader
          eyebrow="In practice"
          title={<>Selected <span className="serif-italic">work</span></>}
          className="mb-10"
        />
        {/* The cover artwork already carries its own headline, so the card keeps
            the image clean and puts client + context underneath it. */}
        <div className="grid md:grid-cols-2 gap-x-5 gap-y-10">
          {visible.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 2) * 100}>
              <Link
                href={`/work/${c.slug}`}
                className="group block"
                aria-label={`${c.client}, ${c.t}`}
              >
                {/* The banner is a finished 16:9 artwork with type running to its
                    edges, so it sits flush, no parallax overscale, nothing cropped. */}
                <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-muted">
                  <img
                    src={c.cover}
                    alt={`${c.client} — ${c.t}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* circular arrow button, fills on hover */}
                  <span className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-cream/60 bg-ink/25 text-xl text-cream backdrop-blur-sm transition-colors duration-300 group-hover:border-cream group-hover:bg-cream group-hover:text-ink">
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </span>
                </div>

                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="serif text-2xl md:text-3xl">
                      <span className="relative inline-block">
                        {c.client}
                        <span
                          aria-hidden
                          className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-500 group-hover:scale-x-100"
                        />
                      </span>
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-soft">{c.d}</p>
                  </div>
                  <span className="serif-italic shrink-0 pt-1 text-sm text-ink-soft">
                    {c.outlet}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
