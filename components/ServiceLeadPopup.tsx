"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICES, submitLead, type Service } from "@/lib/submitLead";

const SEEN_KEY = "sf:lead-popup-seen";

/**
 * Shrinking the root's bottom edge by 55% leaves a detection band across the
 * top 45% of the viewport. The sentinel only lands in it once Services has
 * scrolled away and Process is filling the screen, which is the moment the
 * section genuinely reads as "over".
 */
const TRIGGER_BAND = "0px 0px -55% 0px";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Values = { name: string; email: string; phone: string; service: string };

const EMPTY: Values = { name: "", email: "", phone: "", service: "" };

function validate(v: Values) {
  const errors: Partial<Record<keyof Values, string>> = {};
  if (!v.name.trim()) errors.name = "Please tell us your name.";
  if (!EMAIL_RE.test(v.email)) errors.email = "Enter a valid email address.";
  if (v.phone.replace(/\D/g, "").length < 7) errors.phone = "Enter a valid phone number.";
  if (!v.service) errors.service = "Pick the service you're after.";
  return errors;
}

const inputClass =
  "w-full bg-transparent border-b border-ink/20 pb-2.5 text-lg outline-none focus:border-ink transition-colors placeholder:text-ink/30";

/**
 * Lead capture that surfaces once, at the seam between Services and Process on
 * the homepage. Renders a sentinel at that seam; mount it between the two.
 */
export function ServiceLeadPopup() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [formError, setFormError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  // Scroll state, tracked in refs so it never re-renders the page behind the popup.
  const scrolledRef = useRef(false);
  const downRef = useRef(true);
  const lastYRef = useRef(0);

  useEffect(() => {
    lastYRef.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      downRef.current = y > lastYRef.current;
      lastYRef.current = y;
      scrolledRef.current = true;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(SEEN_KEY)) return;

    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        // Ignore the observer's first callback on a restored scroll position,
        // and never interrupt someone scrolling back up the page.
        if (!scrolledRef.current || !downRef.current) return;

        // Marked on show, not on submit, so dismissing it keeps it dismissed.
        sessionStorage.setItem(SEEN_KEY, "1");
        setOpen(true);
        observer.disconnect();
      },
      { rootMargin: TRIGGER_BAND },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  function update(field: keyof Values, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    // Clear the error as soon as they start fixing it, not on the next submit.
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (status === "sending") return;

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    setFormError("");

    const result = await submitLead({
      ...values,
      service: values.service as Service,
      source: "homepage-services-popup",
      submittedAt: new Date().toISOString(),
    });

    if (!result.ok) {
      setStatus("idle");
      setFormError(result.error);
      return;
    }

    setStatus("done");
    setTimeout(() => setOpen(false), 2400);
  }

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="h-px w-full" />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md rounded-[2rem] border-ink/10 bg-cream p-8 text-ink shadow-[0_40px_90px_-30px_rgba(0,0,0,0.45)] md:p-10">
          {status === "done" ? (
            <div className="py-6 text-center">
              <span className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-brand text-cream">
                <Check className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <DialogTitle className="serif text-3xl leading-tight">
                Thanks, {values.name.split(" ")[0]}.
              </DialogTitle>
              <DialogDescription className="mt-3 text-base text-ink-soft">
                We&apos;ve got your details. Someone from the team will be in touch shortly.
              </DialogDescription>
            </div>
          ) : (
            <>
              <div className="mb-7">
                <span className="mb-4 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="eyebrow">Let&apos;s talk</span>
                </span>
                <DialogTitle className="serif text-[2rem] leading-[1.1] tracking-[-0.01em]">
                  Seen something you <span className="serif-italic">like?</span>
                </DialogTitle>
                <DialogDescription className="mt-3 text-base leading-relaxed text-ink-soft">
                  Tell us where you want to be seen, and we&apos;ll come back with a plan.
                </DialogDescription>
              </div>

              <form onSubmit={onSubmit} noValidate className="flex flex-col">
                <div className="space-y-5">
                  <Field id="lead-name" label="Your name" error={errors.name}>
                    <input
                      id="lead-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Doe"
                      value={values.name}
                      onChange={(e) => update("name", e.target.value)}
                      className={inputClass}
                    />
                  </Field>

                  <Field id="lead-email" label="Email address" error={errors.email}>
                    <input
                      id="lead-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@brand.com"
                      value={values.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputClass}
                    />
                  </Field>

                  <Field id="lead-phone" label="Phone" error={errors.phone}>
                    <input
                      id="lead-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      value={values.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={inputClass}
                    />
                  </Field>

                  <Field id="lead-service" label="What you're after" error={errors.service}>
                    <Select
                      value={values.service}
                      onValueChange={(value) => update("service", value)}
                    >
                      <SelectTrigger
                        id="lead-service"
                        className="h-auto rounded-none border-0 border-b border-ink/20 px-0 pb-2.5 text-lg shadow-none data-[placeholder]:text-ink/30 focus:border-ink focus:ring-0"
                      >
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-ink/10 bg-cream">
                        {SERVICES.map((service) => (
                          <SelectItem
                            key={service}
                            value={service}
                            className="cursor-pointer rounded-xl py-2.5 text-base focus:bg-muted"
                          >
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                </div>

                {formError && (
                  <p role="alert" className="mt-5 text-sm text-red-700">
                    {formError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-sm text-cream transition hover:opacity-90 disabled:opacity-60"
                >
                  {status === "sending" ? (
                    "Sending…"
                  ) : (
                    <>
                      Let&apos;s get Sorta Famous <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-ink-soft">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-2 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
