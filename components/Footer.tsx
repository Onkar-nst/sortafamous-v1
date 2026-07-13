import { ArrowRight } from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How it works" },
];
const company = [
  { href: "/#work", label: "Selected work" },
  { href: "/#journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className="relative z-[150] bg-ink-gradient text-cream overflow-hidden">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12 lg:px-16 xl:px-28 pt-16 md:pt-24">
        {/* top row */}
        <div className="flex items-center justify-between pb-8 border-b border-cream/15">
          <div className="eyebrow flex items-center gap-2 text-cream/60">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Available for new projects
          </div>
          <div className="text-sm text-cream/60">Sorta Famous® · 2026</div>
        </div>

        {/* middle, nav columns + closing CTA */}
        <div className="grid md:grid-cols-2 gap-12 py-14 md:py-16">
          <div className="grid grid-cols-2 gap-8 max-w-md">
            <div>
              <div className="eyebrow mb-5 text-cream/60">Navigation</div>
              <ul className="space-y-3 text-cream/60">
                {nav.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-cream transition">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="eyebrow mb-5 text-cream/60">Company</div>
              <ul className="space-y-3 text-cream/60">
                {company.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-cream transition">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:items-end md:text-right justify-between gap-8">
            <h2 className="serif text-[clamp(2rem,4vw,3.6rem)] leading-[1.05] max-w-md">
              Let&apos;s get you <span className="serif-italic text-accent">Sorta Famous.</span>
            </h2>
            <a
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-cream text-ink px-7 py-4 text-sm hover:opacity-90 transition"
            >
              Let&apos;s work together <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-t border-cream/15 text-xs text-cream/60">
          <div>© 2026 Sorta Famous · All rights reserved</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream transition">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>

      {/* giant wordmark embossed into the dark background */}
      <div className="relative mt-6 select-none pointer-events-none">
        <div className="relative serif text-cream/[0.05] leading-[0.78] text-center whitespace-nowrap text-[19vw]">
          Sorta&nbsp;Famous
        </div>
      </div>
    </footer>
  );
}
