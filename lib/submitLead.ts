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

/** Mirrors the five services on the homepage, plus an escape hatch. */
export const SERVICES = [
  "Public Relations (PR)",
  "Social Media Marketing",
  "Brand Management",
  "Performance Marketing",
  "Personal Branding",
  "Not sure yet",
] as const;

export type Service = (typeof SERVICES)[number];

export type Lead = {
  name: string;
  email: string;
  phone?: string;
  service: string;
  details?: string;
  /** Which surface captured the lead, so destinations can segment later. */
  source: string;
  submittedAt: string;
};

export type LeadResult = { ok: true } | { ok: false; error: string };

export async function submitLead(lead: Lead): Promise<LeadResult> {
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      return { ok: false, error: data.error || "Failed to submit request." };
    }

    return { ok: true };
  } catch (error: any) {
    console.error("Error submitting lead:", error);
    return { ok: false, error: "Network error. Please try again." };
  }
}
