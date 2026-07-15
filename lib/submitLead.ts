/**
 * The one place leads leave the site.
 *
 * Nothing is sent anywhere yet. To go live, replace the body of `submitLead`
 * with a real destination, keep the signature, and every caller keeps working.
 *
 * Option A, a form service (no backend needed):
 *
 *   const res = await fetch("https://formspree.io/f/YOUR_ID", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json", Accept: "application/json" },
 *     body: JSON.stringify(lead),
 *   });
 *   return res.ok ? { ok: true } : { ok: false, error: "Something went wrong." };
 *
 * Option B, a Next.js route handler at app/api/lead/route.ts that emails
 * hellothere@sortafamous.in via Resend, then POST to "/api/lead" from here.
 */

/** Mirrors the four services on the homepage, plus an escape hatch. */
export const SERVICES = [
  "Strategic PR",
  "Social Performance",
  "Content & Editorial",
  "Founder Brand",
  "Not sure yet",
] as const;

export type Service = (typeof SERVICES)[number];

export type Lead = {
  name: string;
  email: string;
  phone: string;
  service: Service;
  /** Which surface captured the lead, so destinations can segment later. */
  source: string;
  submittedAt: string;
};

export type LeadResult = { ok: true } | { ok: false; error: string };

export async function submitLead(lead: Lead): Promise<LeadResult> {
  // Placeholder: logs instead of sending. Swap this out to go live.
  console.info("[lead captured]", lead);

  // Mimics network latency so the pending UI is exercised in development.
  await new Promise((resolve) => setTimeout(resolve, 600));

  return { ok: true };
}
