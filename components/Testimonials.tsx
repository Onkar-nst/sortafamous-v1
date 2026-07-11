"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

/**
 * Testimonials, a native rebuild of the bundle's "Insights from Industry
 * Partners" section. The big serif title stays pinned in the centre (CSS
 * `sticky`) while the testimonial cards stream up past it on either side, and
 * the asterisk rotates with scroll, reproduced with framer-motion instead of
 * the original GSAP ScrollTrigger pin.
 *
 * NOTE: the quotes below are placeholders, Sorta Famous has no cleared client
 * quotes yet. Swap in real names, companies and words when available.
 */

type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Aditi Verma",
    role: "Founder",
    company: "Lumen Studio",
    quote:
      "Sorta Famous turned our quiet launch into a story the press actually wanted to tell. The coverage landed exactly where our customers were looking.",
    avatar: "/images/testimonial/sec8-avatar-1.webp",
  },
  {
    name: "Rohan Kapoor",
    role: "CEO",
    company: "Northbound",
    quote:
      "From positioning to placement, the whole process felt effortless. Our founder narrative finally reads the way we always meant it to.",
    avatar: "/images/testimonial/sec8-avatar-2.webp",
  },
  {
    name: "Meera Iyer",
    role: "Brand Lead",
    company: "Marigold",
    quote:
      "They have a rare instinct for what makes a brand worth talking about, visibility that felt earned, not manufactured.",
    avatar: "/images/testimonial/sec8-avatar-3.webp",
  },
  {
    name: "Dev Sharma",
    role: "Head of Growth",
    company: "Overstory",
    quote:
      "Strategic, sharp, and genuinely honest. The right kind of attention showed up, and it stuck.",
    avatar: "/images/testimonial/sec8-avatar-4.webp",
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-ink text-ink" />
      ))}
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between rounded-2xl border border-border bg-card px-7 py-5">
        <span className="serif text-xl md:text-2xl">{t.name}</span>
        <span className="text-xl text-muted-foreground">+</span>
      </div>
      <div className="relative rounded-2xl border border-border bg-card p-7 md:p-8">
        <div className="mb-7 flex items-start justify-between gap-4">
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border-4 border-muted">
            <img
              src={t.avatar}
              alt={t.name}
              width={64}
              height={64}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-right text-sm leading-tight text-ink-soft">
            <span className="block">{t.role}</span>
            <span className="block">{t.company}</span>
          </div>
        </div>
        <p className="text-lg leading-relaxed text-ink-soft">“{t.quote}”</p>
        <div className="mt-8">
          <Stars />
        </div>
      </div>
    </div>
  );
}

/**
 * Eight-point asterisk (from the bundle) that rotates as the page scrolls.
 * The rotation is driven by the parent section's scroll progress, the marker
 * lives inside a `sticky` container, so tracking its own position would freeze
 * once pinned.
 */
function ScrollAsterisk({ rotate }: { rotate: MotionValue<number> }) {
  return (
    <motion.div style={{ rotate }} className="mx-auto mb-6 w-[76px] md:w-[100px]">
      <svg viewBox="0 0 122 116.994" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M65.3572 0H56.6428V48.4096L20.9475 14.1788L14.7855 20.088L50.4809 54.3187H0V62.6756H50.4809L14.7855 96.9063L20.9475 102.815L56.6428 68.5844V116.994H65.3572V68.5844L101.053 102.815L107.214 96.9063L71.5188 62.6756H122V54.3187H71.5188L107.214 20.0879L101.053 14.1788L65.3572 48.4096V0Z"
          className="fill-ink"
        />
      </svg>
    </motion.div>
  );
}

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [-160, 200]);

  return (
    <section ref={sectionRef} className="relative z-[110] bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border">
      <div className="mx-auto max-w-[1480px]">
        <Reveal>
          <div className="mb-14 flex items-end justify-between gap-6">
            <div className="eyebrow flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" /> Testimonials
            </div>
            <span className="shrink-0 text-sm text-ink-soft underline underline-offset-4">
              Trusted by modern brands
            </span>
          </div>
        </Reveal>

        <div className="relative">
          {/* Pinned centre title (large screens): stays put while cards stream past. */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <div className="sticky top-1/2 flex -translate-y-1/2 flex-col items-center">
              <ScrollAsterisk rotate={rotate} />
              <h2 className="serif max-w-[16ch] text-center text-5xl leading-[1.02] xl:text-7xl">
                Insights from <span className="serif-italic">industry partners</span>
              </h2>
            </div>
          </div>

          {/* Mobile / tablet title. */}
          <div className="mb-12 flex flex-col items-center lg:hidden">
            <ScrollAsterisk rotate={rotate} />
            <h2 className="serif max-w-[14ch] text-center text-4xl leading-[1.05] md:text-5xl">
              Insights from <span className="serif-italic">industry partners</span>
            </h2>
          </div>

          {/* Cards flank the pinned title on large screens, stack on small. */}
          <div className="relative z-[1] grid gap-8 md:gap-x-24 md:gap-y-16 lg:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.name}
                delay={(i % 2) * 90}
                className={
                  i === 1
                    ? "lg:mt-40"
                    : i === 2
                    ? "lg:mt-64"
                    : i === 3
                    ? "lg:mt-8"
                    : ""
                }
              >
                <div className="mx-auto w-full max-w-[420px] lg:mx-0">
                  <Card t={t} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-xl text-center md:mt-24">
          <Reveal>
            <p className="serif text-xl text-ink-soft md:text-2xl">
              Real words from the founders and brands we&apos;ve helped get noticed, and the
              results that followed.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
