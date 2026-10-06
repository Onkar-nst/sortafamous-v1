import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";

export type LegalBlock =
  | { type: "p"; content: ReactNode }
  | { type: "list"; items: ReactNode[] }
  | { type: "note"; content: ReactNode }
  | { type: "sub"; title: string; blocks: LegalBlock[] }
  | { type: "contact"; rows: { label: string; value: ReactNode }[] };

export type LegalSection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition">
      {children}
    </a>
  );
}

function Blocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i} className="text-ink-soft leading-relaxed">
                {b.content}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="space-y-2.5">
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-ink-soft leading-relaxed">
                    <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "note":
            return (
              <p key={i} className="rounded-2xl bg-ink-gradient text-cream px-6 py-5 serif text-xl md:text-2xl leading-snug">
                {b.content}
              </p>
            );
          case "sub":
            return (
              <div key={i} className="space-y-4 pt-2">
                <h3 className="serif text-xl md:text-2xl text-ink">{b.title}</h3>
                <Blocks blocks={b.blocks} />
              </div>
            );
          case "contact":
            return (
              <dl key={i} className="rounded-2xl border border-ink/10 bg-card divide-y divide-ink/10">
                {b.rows.map((r) => (
                  <div key={r.label} className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 px-6 py-4">
                    <dt className="eyebrow pt-0.5">{r.label}</dt>
                    <dd className="text-ink leading-relaxed">{r.value}</dd>
                  </div>
                ))}
              </dl>
            );
        }
      })}
    </>
  );
}

export function LegalPage({
  eyebrow,
  title,
  italic,
  lastUpdated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  italic: string;
  lastUpdated: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <div className="bg-cream text-ink overflow-x-clip">
      <Nav />
      <main>
        {/* hero */}
        <section className="relative z-10 bg-cream pt-32 md:pt-44 pb-14 md:pb-20 px-6 md:px-12 lg:px-16 xl:px-28">
          <div className="mx-auto max-w-[1480px]">
            <Reveal>
              <div className="eyebrow mb-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {eyebrow}
              </div>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="serif text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.98] tracking-[-0.03em] max-w-[16ch]">
                {title} <span className="serif-italic">{italic}</span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-t border-ink/20 pt-6">
                <div className="max-w-2xl text-lg text-ink-soft leading-relaxed">{intro}</div>
                <div className="pill shrink-0 self-start md:self-auto">Last updated · {lastUpdated}</div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* body */}
        <section className="px-6 md:px-12 lg:px-16 xl:px-28 pb-24 md:pb-32">
          <div className="mx-auto max-w-[1480px] grid gap-12 lg:grid-cols-[17rem_1fr] xl:gap-20">
            <aside className="hidden lg:block">
              <nav aria-label="On this page" className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
                <div className="eyebrow mb-5">On this page</div>
                <ol className="space-y-2.5 text-sm">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="group flex gap-3 text-muted-foreground hover:text-ink transition">
                        <span className="tabular-nums text-ink/30 group-hover:text-accent transition">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            <div className="max-w-3xl">
              {sections.map((s, i) => (
                <article key={s.id} id={s.id} className="scroll-mt-28 border-t border-ink/15 py-10 md:py-12 first:border-t-0 first:pt-0">
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="serif text-2xl text-ink/25 leading-none tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="serif text-3xl md:text-4xl leading-tight">{s.title}</h2>
                  </div>
                  <div className="space-y-5 text-[0.975rem] md:text-base">
                    <Blocks blocks={s.blocks} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
