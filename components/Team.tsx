"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

/**
 * Team roster — the real Sorta Famous team (sortafamous.in/about-us). The site
 * publishes only names and roles, so the bios below are written to match each
 * role and the agency's stated positioning. Clicking a card opens a profile
 * modal with the portrait and fuller detail.
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
    img: "/images/art/team3.jpg",
    n: "Nandini Mahant",
    r: "Founder & Creative Director",
    bio: "Nandini founded Sorta Famous on a simple conviction: fame is earned, not bought. She leads creative direction and brand strategy, shaping narratives that turn visibility into lasting credibility for founders and modern brands.",
    focus: ["Brand strategy", "Creative direction", "Founder narratives"],
  },
  {
    img: "/images/art/team1.jpg",
    n: "Prajakta Mehul Sheth",
    r: "Sr. Account Manager",
    bio: "Prajakta is the steady hand behind every engagement, translating strategy into day-to-day momentum. She keeps clients close, timelines honest, and campaigns moving from idea to earned coverage.",
    focus: ["Client partnerships", "Campaign delivery", "PR strategy"],
  },
  {
    img: "/images/art/team2.jpg",
    n: "Samriddha Adhikary",
    r: "Sales & Marketing Coordinator",
    bio: "Samriddha connects the right brands with the right kind of attention. He coordinates outreach and marketing, making sure the Sorta Famous story reaches the founders who need it most.",
    focus: ["Growth", "Outreach", "Marketing"],
  },
  {
    img: "/images/art/team4.jpg",
    n: "Riya Kapoor",
    r: "Operations Assistant",
    bio: "Riya keeps the engine running. From process to logistics, she makes sure the work behind the visibility stays organised, on schedule, and quietly excellent.",
    focus: ["Operations", "Process", "Coordination"],
  },
  {
    img: "/images/art/team3.jpg",
    n: "Srinidhi K",
    r: "Media Assistant",
    bio: "Srinidhi lives where brands meet the press. She supports media relations and placements, building the relationships that put clients in front of the audiences that matter.",
    focus: ["Media relations", "Placements", "Press"],
  },
  {
    img: "/images/art/team4.jpg",
    n: "Palak Nagar",
    r: "Graphic Designer",
    bio: "Palak gives the strategy a face. She designs the visual language of every campaign — clean, considered, and unmistakably on-brand.",
    focus: ["Visual design", "Brand identity", "Content"],
  },
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
      aria-label={`${member.n} — ${member.r}`}
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
          {/* Editorial cover — portrait as a magazine feature */}
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
              <span className="serif-italic text-sm">— Sorta Famous</span>
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
    <section className="relative z-[110] bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border">
      <div className="mx-auto max-w-[1480px]">
        <SectionHeader
          eyebrow="The people"
          title={<>Meet the <span className="serif-italic">team</span></>}
          className="mb-14"
        />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <Reveal key={m.n} delay={i * 80}>
              <button
                type="button"
                onClick={() => setSelected(m)}
                aria-label={`View ${m.n}'s profile`}
                className="group block w-full text-left"
              >
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-muted mb-5">
                  <img
                    src={m.img}
                    alt={m.n}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
                  />
                  <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-cream/90 text-ink opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-xl leading-none">+</span>
                  </span>
                </div>
                <h3 className="serif text-2xl">{m.n}</h3>
                <p className="text-sm text-ink-soft mt-1">{m.r}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProfileModal member={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
