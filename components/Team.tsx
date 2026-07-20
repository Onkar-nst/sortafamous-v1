"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { EASE, Parallax } from "./motion";

/**
 * Team roster, built from the client-supplied portraits in the SF Website
 * assets pack. Names and photographs are the client's own.
 *
 * Roles: Nandini's and Palak's are confirmed against sortafamous.in/about-us.
 * The remaining ten are drawn from the agency's role list but the
 * person-to-role pairing is UNCONFIRMED and needs a client review pass.
 * Bios are deliberately role-descriptive, they make no personal claims about
 * an individual beyond the function stated here.
 *
 * Clicking a card opens a profile modal with the portrait and fuller detail.
 */
type Member = {
  img: string;
  n: string;
  r: string;
  bio: string;
  focus: string[];
};

const team: Member[] = [
  {
    img: "/images/art/team-nandini.jpg",
    n: "Nandini Mahant",
    r: "Founder & Creative Director",
    bio: "Nandini founded Sorta Famous on a simple conviction: fame is earned, not bought. She leads creative direction and brand strategy, shaping narratives that turn visibility into lasting credibility for founders and modern brands.",
    focus: ["Brand strategy", "Creative direction", "Founder narratives"],
  },
  {
    img: "/images/art/team-tejas.jpg",
    n: "Tejas",
    r: "Sr. Account Manager",
    bio: "Senior account management at Sorta Famous means translating strategy into day to day momentum, keeping clients close, timelines honest, and campaigns moving from idea to earned coverage.",
    focus: ["Client partnerships", "Campaign delivery", "PR strategy"],
  },
  {
    img: "/images/art/team-darshan.jpg",
    n: "Darshan",
    r: "Sales & Marketing Coordinator",
    bio: "Sales and marketing coordination connects the right brands with the right kind of attention, running outreach so the Sorta Famous story reaches the founders who need it most.",
    focus: ["Growth", "Outreach", "Marketing"],
  },
  {
    img: "/images/art/team-komal.jpg",
    n: "Komal",
    r: "Operations Assistant",
    bio: "Operations keeps the engine running. From process to logistics, this is the work that keeps everything behind the visibility organised, on schedule, and quietly excellent.",
    focus: ["Operations", "Process", "Coordination"],
  },
  {
    img: "/images/art/team-khwahish.jpg",
    n: "Khwahish",
    r: "Media Assistant",
    bio: "Media support is where brands meet the press, backing media relations and placements and building the relationships that put clients in front of the audiences that matter.",
    focus: ["Media relations", "Placements", "Press"],
  },
  {
    img: "/images/art/team-palak.jpg",
    n: "Palak Nagar",
    r: "Graphic Designer",
    bio: "Design gives the strategy a face. Palak shapes the visual language of every campaign, clean, considered, and unmistakably on brand.",
    focus: ["Visual design", "Brand identity", "Content"],
  },
  {
    img: "/images/art/team-annanya.jpg",
    n: "Annanya",
    r: "Content Strategist",
    bio: "Content strategy turns positioning into words that travel, planning the content that carries each brand's point of view, editorial, sharp, and built to be shared.",
    focus: ["Content strategy", "Editorial", "Storytelling"],
  },
  {
    img: "/images/art/team-sanya.jpg",
    n: "Sanya",
    r: "Social Media Manager",
    bio: "Social management runs the feeds that keep brands top of mind, shaping the day to day voice and growing communities that actually stick around.",
    focus: ["Social media", "Community", "Engagement"],
  },
  {
    img: "/images/art/team-nipun.jpg",
    n: "Nipun",
    r: "PR Associate",
    bio: "PR support chases the story until it lands, backing media outreach and pitching and opening the doors that put clients in the right headlines.",
    focus: ["Media outreach", "Pitching", "PR"],
  },
  {
    img: "/images/art/team-tanvi.jpg",
    n: "Tanvi",
    r: "Copywriter",
    bio: "Copy is where a brand finds its voice. From taglines to long form, this is the work of finding the words that make a brand sound exactly like itself.",
    focus: ["Copywriting", "Messaging", "Brand voice"],
  },
  {
    img: "/images/art/team-ashwini.jpg",
    n: "Ashwini",
    r: "Performance Marketing Executive",
    bio: "Performance marketing turns spend into outcomes, running paid search and paid social with continuous testing so every rupee is accountable to a number.",
    focus: ["Paid media", "Optimisation", "Reporting"],
  },
  {
    img: "/images/art/team-maushmi.jpg",
    n: "Maushmi",
    r: "Brand Executive",
    bio: "Brand execution holds the details together, keeping identity, messaging and tone consistent across every touchpoint a client shows up in.",
    focus: ["Brand management", "Consistency", "Client support"],
  },
];

/* Single on-brand accent for every card — keeps the roster uniform. */
const ACCENTS = [
  { a: "var(--brand)", t: "color-mix(in oklch, var(--brand) 16%, transparent)" },
];

/** Brand eight-point asterisk, used as the feature's masthead mark. */
function Asterisk({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 122 116.994" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65.3572 0H56.6428V48.4096L20.9475 14.1788L14.7855 20.088L50.4809 54.3187H0V62.6756H50.4809L14.7855 96.9063L20.9475 102.815L56.6428 68.5844V116.994H65.3572V68.5844L101.053 102.815L107.214 96.9063L71.5188 62.6756H122V54.3187H71.5188L107.214 20.0879L101.053 14.1788L65.3572 48.4096V0Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  TeamCard, 3D cursor-tilt portrait with depth layers               */
/* ------------------------------------------------------------------ */
function TeamCard({
  m,
  i,
  onOpen,
}: {
  m: Member;
  i: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const accent = ACCENTS[i % ACCENTS.length];

  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });

  function move(e: React.MouseEvent<HTMLButtonElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 16);
    rx.set(-(py - 0.5) * 16);
  }
  function leave() {
    rx.set(0);
    ry.set(0);
  }

  const no = String(i + 1).padStart(2, "0");

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onOpen}
      onMouseMove={move}
      onMouseLeave={leave}
      aria-label={`View ${m.n}'s profile`}
      className="group block w-full text-left [transform-style:preserve-3d]"
      initial={{ opacity: 0, y: 44, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.85, ease: EASE, delay: (i % 5) * 0.08 }}
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000, transformStyle: "preserve-3d" }}
        className="relative mb-4 aspect-[4/5] overflow-hidden rounded-3xl bg-muted"
      >
        {/* accent halo behind image on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-4 rounded-[2rem] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: accent.t }}
        />

        <img
          src={m.img}
          alt={m.n}
          loading="lazy"
          className="h-full w-full scale-100 object-cover object-[center_20%] transition-all duration-[900ms] ease-out group-hover:scale-[1.06]"
        />

        {/* accent gradient wash blooms in on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `linear-gradient(to top, ${accent.a}, transparent 55%)`, mixBlendMode: "multiply" }}
        />
        {/* readability veil */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* animated accent ring */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl ring-2 ring-inset opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ ["--tw-ring-color" as string]: accent.a }}
        />

        {/* index number, pops forward in 3D */}
        <span
          className="serif absolute left-4 top-3 text-5xl leading-none text-cream/85 drop-shadow-lg"
          style={{ transform: "translateZ(45px)" }}
        >
          {no}
        </span>

        {/* spinning asterisk badge */}
        <motion.span
          aria-hidden
          className="absolute right-4 top-4 text-cream/0 transition-colors duration-500 group-hover:text-cream/90"
          style={{ transform: "translateZ(40px)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity }}
        >
          <Asterisk className="h-5 w-5" />
        </motion.span>

        {/* open button, scales + rotates in, floats forward */}
        <span
          className="absolute bottom-4 right-4 flex h-11 w-11 scale-75 items-center justify-center rounded-full text-cream opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
          style={{ background: accent.a, transform: "translateZ(55px)" }}
        >
          <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.8} />
        </span>
      </motion.div>

      {/* name + role with growing accent underline */}
      <h3 className="serif text-2xl">
        <span className="relative inline-block">
          {m.n}
          <span
            aria-hidden
            className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full transition-transform duration-500 group-hover:scale-x-100"
            style={{ background: accent.a }}
          />
        </span>
      </h3>
      <p className="mt-1.5 flex items-center gap-2 text-sm text-ink-soft">
        <span className="h-1.5 w-1.5 rounded-full transition-colors duration-500" style={{ background: accent.a }} />
        {m.r}
      </p>
    </motion.button>
  );
}

function ProfileModal({ member, onClose }: { member: Member; onClose: () => void }) {
  const no = String(team.indexOf(member) + 1).padStart(2, "0");
  const dropCap = member.bio.charAt(0);
  const bioRest = member.bio.slice(1);

  // Close on Escape and lock body scroll while the modal is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${member.n}, ${member.r}`}
    >
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" />

      <motion.div
        className="relative z-[1] w-full max-w-4xl overflow-hidden rounded-[2rem] border border-border bg-cream shadow-2xl"
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close profile"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-ink/80 text-cream backdrop-blur transition hover:bg-ink"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-[0.92fr_1.08fr]">
          {/* Editorial cover, portrait as a magazine feature */}
          <div className="relative overflow-hidden bg-ink">
            <div className="aspect-[4/3] w-full md:aspect-auto md:h-full">
              <motion.img
                src={member.img}
                alt={member.n}
                className="h-full w-full object-cover"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            {/* warm duotone + vignette */}
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-brand/15 mix-blend-multiply" />
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/10" />
            {/* masthead running down the spine */}
            <span className="absolute left-4 top-6 hidden text-[0.7rem] uppercase tracking-[0.3em] text-cream/70 [writing-mode:vertical-rl] md:block">
              The People
            </span>
            <Asterisk className="absolute right-4 top-4 h-6 w-6 text-cream/85" />
            <span className="serif absolute bottom-3 left-5 text-6xl leading-none text-cream/25">{no}</span>
          </div>

          {/* Feature copy */}
          <div className="flex flex-col p-8 md:p-10">
            <div className="flex items-center justify-between">
              <span className="eyebrow text-ink-soft">Sorta Famous · The People</span>
              <span className="serif-italic text-sm text-ink-soft">No. {no}</span>
            </div>
            <div className="mt-4 h-px w-full bg-ink/15" />

            <span className="eyebrow mt-6 flex items-center gap-2 text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {member.r}
            </span>
            <h3 className="serif mt-3 text-4xl leading-[1.04] md:text-5xl">{member.n}</h3>

            <p className="mt-6 text-base leading-relaxed text-ink-soft">
              <span className="serif float-left mr-3 mt-1 text-[3.4rem] leading-[0.66] text-ink">
                {dropCap}
              </span>
              {bioRest}
            </p>

            <div className="mt-7">
              <p className="eyebrow mb-3 text-ink-soft">Beats</p>
              <div className="flex flex-wrap gap-2">
                {member.focus.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-ink/20 px-3 py-1 text-xs uppercase tracking-wide text-ink"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto flex items-center justify-between pt-8 text-ink-soft">
              <span className="serif-italic text-sm">Sorta Famous</span>
              <span className="eyebrow">Mumbai</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Team() {
  const [selected, setSelected] = useState<Member | null>(null);

  return (
    <section className="relative z-[110] overflow-hidden bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border">
      {/* drifting ambient accent blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-brand/[0.12] blur-[100px]"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-accent/[0.10] blur-[110px]"
        animate={{ y: [0, -50, 0], x: [0, -24, 0] }}
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-[1640px]">
        {/* animated masthead */}
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <Reveal>
              <div className="eyebrow mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> The people
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="serif flex items-center gap-4 text-4xl md:text-6xl">
                Meet the <span className="serif-italic">team</span>
                <motion.span
                  aria-hidden
                  className="text-accent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, ease: "linear", repeat: Infinity }}
                >
                  <Asterisk className="h-7 w-7 md:h-9 md:w-9" />
                </motion.span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="serif-italic text-sm text-ink-soft shrink-0">
              / {String(team.length).padStart(2, "0")} humans / ©
            </div>
          </Reveal>
        </div>

        {/* 12 members, a 4-column grid fills three clean rows */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {team.map((m, i) => (
            <Parallax key={m.n} amount={[34, 62, 46, 58, 40][i % 5]}>
              <TeamCard m={m} i={i} onOpen={() => setSelected(m)} />
            </Parallax>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProfileModal member={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
