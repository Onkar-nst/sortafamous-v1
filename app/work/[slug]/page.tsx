import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { cases, getCase } from "@/lib/cases";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCase(slug);
  if (!study) return { title: "Case not found" };
  return {
    title: `${study.client} · ${study.t}`,
    description: study.summary,
    openGraph: {
      title: `${study.client} · Sorta Famous`,
      description: study.summary,
      images: [study.cover],
    },
  };
}

/**
 * Case page, deliberately just the coverage artwork. The inside asset already
 * carries its own headline, caption and branding, so the page adds no copy of
 * its own, only the chrome needed to get back out.
 */
export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCase(slug);
  if (!study) notFound();

  return (
    <div className="bg-cream text-ink overflow-x-clip">
      <Nav />
      <main className="px-6 md:px-12 lg:px-16 xl:px-28">
        <div className="mx-auto max-w-6xl pt-32 pb-20 md:pt-40 md:pb-28">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-ink-soft transition hover:text-ink"
          >
            <span aria-hidden>←</span> Back to selected work
          </Link>

          <div className="mt-8 overflow-hidden rounded-[2rem] bg-muted">
            <img
              src={study.inside}
              alt={study.insideCaption}
              className="w-full"
            />
          </div>

          {study.extra?.map((piece) => (
            <div
              key={piece.src}
              className="mt-8 overflow-hidden rounded-[2rem] bg-muted"
            >
              <img src={piece.src} alt={piece.caption} className="w-full" />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
