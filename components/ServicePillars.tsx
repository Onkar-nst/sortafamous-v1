"use client";

import { Megaphone, Gem, Share2, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

type Offering = { name: string; desc: string };

type Pillar = {
  n: string;
  Icon: LucideIcon;
  t: string;
  d: string;
  img: string;
  items: Offering[];
};

const pillars: Pillar[] = [
  {
    n: "01",
    Icon: Megaphone,
    t: "PR Services",
    d: "Public relations that builds reputation, earns media attention, and strengthens your public image across digital and traditional platforms.",
    img: "/images/art/svc1.jpg",
    items: [
      { name: "Strategic PR solutions", desc: "Long-term strategy that protects brand value, not just short-term buzz." },
      { name: "Media relations & press coverage", desc: "Attention from trusted news outlets, trade press and online publications." },
      { name: "Press release writing & distribution", desc: "Concise, compelling releases for launches, milestones and partnerships." },
      { name: "Online PR & digital reputation", desc: "Monitoring and managing the articles and stories written about you." },
      { name: "Thought leadership & positioning", desc: "Expert articles, interviews and op-eds that build trust over time." },
    ],
  },
  {
    n: "02",
    Icon: Gem,
    t: "Brand Management",
    d: "Building, keeping and growing strong brands — rooted in clarity, consistency and long-term business value.",
    img: "/images/art/svc2.jpg",
    items: [
      { name: "Brand planning & positioning", desc: "Research-led, content-driven strategy that makes your business stand out." },
      { name: "Identity & consistency", desc: "Visual features, messaging rules and standards, uniform across every touchpoint." },
      { name: "Digital brand management", desc: "A consistent brand across websites, social, content and online ads." },
      { name: "Reputation & brand trust", desc: "Tracking how people talk and feel about you to protect your image." },
      { name: "Communication & storytelling", desc: "Real brand stories that connect with people on an emotional level." },
    ],
  },
  {
    n: "03",
    Icon: Share2,
    t: "Social Media Marketing",
    d: "A clear plan, stories that make sense, and constant optimisation — social that connects with customers and grows your business.",
    img: "/images/art/svc3.jpg",
    items: [
      { name: "Strategic social planning", desc: "Goals, audience and competitor research to find the right platforms." },
      { name: "Content & brand storytelling", desc: "Brand-appropriate content and real stories that engage your audience." },
      { name: "Account management", desc: "Publishing, quick replies to comments and messages, and daily monitoring." },
      { name: "Paid social advertising", desc: "Targeted campaigns optimised for reach, discovery and ROI." },
      { name: "Analytics & optimisation", desc: "Reach, engagement and conversion tracking that guides the strategy." },
    ],
  },
];

export function ServicePillars() {
  return (
    <section className="relative z-20 bg-cream py-16 md:py-28 px-6 md:px-12 lg:px-16 xl:px-28 border-t border-border">
      <div className="mx-auto max-w-[1480px]">
        <SectionHeader
          eyebrow="What we offer"
          title={<>Three practices, <span className="serif-italic">one system</span></>}
          className="mb-14"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 90}>
              <div className="group flex h-full flex-col rounded-[2rem] border border-border bg-card overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.t}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center gap-3">
                    <span className="h-11 w-11 shrink-0 rounded-full bg-ink text-cream grid place-items-center">
                      <p.Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <span className="serif-italic text-sm text-ink-soft">{p.n}</span>
                  </div>
                  <h3 className="serif text-3xl mt-6">{p.t}</h3>
                  <p className="text-ink-soft mt-3 leading-relaxed text-sm lg:min-h-[4.5rem]">{p.d}</p>
                  <ul className="mt-6 space-y-4 border-t border-ink/15 pt-6">
                    {p.items.map((it) => (
                      <li key={it.name} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <div>
                          <div className="text-sm font-medium text-ink">{it.name}</div>
                          <div className="text-sm text-ink-soft leading-snug mt-0.5">{it.desc}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
