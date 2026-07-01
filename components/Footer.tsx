import { ArrowRight } from "lucide-react";

const nav = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "How it works" },
];
const company = [
  { href: "#work", label: "Selected work" },
  { href: "#journal", label: "Journal" },
  { href: "#contact", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className="relative z-[150] bg-cream text-ink overflow-hidden border-t border-border">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12 lg:px-16 xl:px-28 pt-16 md:pt-24">
        {/* top row */}
        <div className="flex items-center justify-between pb-8 border-b border-ink/15">
          <div className="eyebrow flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Available for new projects
          </div>
          <div className="text-sm text-ink-soft">Sorta Famous® — 2026</div>
        </div>

        {/* middle — nav columns + closing CTA */}
        <div className="grid md:grid-cols-2 gap-12 py-14 md:py-16">
          <div className="grid grid-cols-2 gap-8 max-w-md">
            <div>
              <div className="eyebrow mb-5">Navigation</div>
              <ul className="space-y-3 text-ink-soft">
                {nav.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-ink transition">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="eyebrow mb-5">Company</div>
              <ul className="space-y-3 text-ink-soft">
                {company.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-ink transition">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:items-end md:text-right justify-between gap-8">
            <h2 className="serif text-[clamp(2rem,4vw,3.6rem)] leading-[1.05] max-w-md">
              Let&apos;s get you <span className="serif-italic">Sorta Famous.</span>
            </h2>
            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-ink text-cream px-7 py-4 text-sm hover:opacity-90 transition"
            >
              Let&apos;s work together <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-t border-ink/15 text-xs text-ink-soft">
          <div>© 2026 Sorta Famous · All rights reserved</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink transition">Privacy Policy</a>
            <a href="#" className="hover:text-ink transition">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>

      {/* giant faded wordmark with a landscape peeking at the very bottom */}
      <div className="relative mt-6 select-none pointer-events-none">
        <img
          src="/images/art/about1.jpg"
          alt=""
          className="absolute inset-x-0 bottom-0 h-[70%] w-full object-cover opacity-[0.10]"
        />
        <div className="relative serif text-ink/[0.07] leading-[0.78] text-center whitespace-nowrap text-[19vw]">
          Sorta&nbsp;Famous
        </div>
      </div>
    </footer>
  );
}
