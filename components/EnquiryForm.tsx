"use client";

import { useMemo, useState } from "react";
import Icon from "./Icon";
import { tours } from "@/lib/tours";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "sending" | "sent" | "error";

const budgetOptions = [
  "Under US$1,000",
  "US$1,000 – US$2,500",
  "US$2,500 – US$5,000",
  "US$5,000+",
  "Not sure yet",
];

export default function EnquiryForm({
  defaultTour = "",
  tourLocked = false,
  heading = "Start planning",
  subheading = "Tell us the shape of the trip. We reply with a real itinerary and a fixed price within 48 hours.",
  submitLabel = "Send enquiry",
}: {
  defaultTour?: string;
  tourLocked?: boolean;
  heading?: string;
  subheading?: string;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState("");
  const [reference, setReference] = useState("");

  const tourNames = useMemo(() => tours.map((t) => t.name), []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      next.email = "That email address doesn't look right.";
    if (message.length < 10)
      next.message = "A sentence or two helps us quote properly.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    setServerError("");

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: String(data.get("phone") ?? "").trim(),
          tour: String(data.get("tour") ?? "").trim(),
          dates: String(data.get("dates") ?? "").trim(),
          travellers: String(data.get("travellers") ?? "").trim(),
          budget: String(data.get("budget") ?? "").trim(),
          message,
        }),
      });

      const json = (await res.json()) as { ok?: boolean; error?: string; reference?: string };

      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Something went wrong. Please try again.");
      }

      setReference(json.reference ?? "");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-muted/60 transition-colors focus:border-clay focus:outline-none";

  if (status === "sent") {
    return (
      <div className="rounded-[18px] border border-forest/20 bg-forest/[0.06] p-8 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-forest text-cream">
          <Icon name="check" size={26} />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
          Enquiry received
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
          Thank you. A trip designer will reply within 48 hours with an itinerary and
          a fixed price. If it&apos;s urgent, WhatsApp us and quote reference{" "}
          <span className="font-semibold text-ink">{reference}</span>.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 inline-flex items-center gap-2 text-[0.88rem] font-semibold text-clay link-underline"
        >
          Send another enquiry
          <Icon name="arrow-right" size={15} />
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[18px] border border-line bg-white p-6 shadow-card sm:p-8"
    >
      <h3 className="font-display text-[1.6rem] font-semibold text-ink">{heading}</h3>
      <p className="mt-2 text-[0.93rem] leading-relaxed text-ink-soft">{subheading}</p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="mb-2 block text-[0.8rem] font-medium text-ink">
            Full name <span className="text-clay">*</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Jane Okello"
            className={field}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-[0.78rem] text-clay-deep">
              {errors.name}
            </p>
          )}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="mb-2 block text-[0.8rem] font-medium text-ink">
            Email <span className="text-clay">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={field}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-[0.78rem] text-clay-deep">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-[0.8rem] font-medium text-ink">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            autoComplete="tel"
            placeholder="+44 7700 900000"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="tour" className="mb-2 block text-[0.8rem] font-medium text-ink">
            Trip of interest
          </label>
          <select
            id="tour"
            name="tour"
            defaultValue={defaultTour}
            disabled={tourLocked}
            className={`${field} ${tourLocked ? "bg-cream-deep" : ""}`}
          >
            <option value="">Not sure yet — help me choose</option>
            {tourNames.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
            <option value="Custom itinerary">Something completely custom</option>
          </select>
        </div>

        <div>
          <label htmlFor="dates" className="mb-2 block text-[0.8rem] font-medium text-ink">
            Approximate dates
          </label>
          <input id="dates" name="dates" placeholder="e.g. 12–20 July 2026" className={field} />
        </div>

        <div>
          <label htmlFor="travellers" className="mb-2 block text-[0.8rem] font-medium text-ink">
            Travellers
          </label>
          <input
            id="travellers"
            name="travellers"
            type="number"
            min="1"
            max="40"
            placeholder="2"
            className={field}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="budget" className="mb-2 block text-[0.8rem] font-medium text-ink">
            Budget per person
          </label>
          <select id="budget" name="budget" defaultValue="" className={field}>
            <option value="">Prefer not to say</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-[0.8rem] font-medium text-ink">
            What do you want to do? <span className="text-clay">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Gorillas are the priority, we have 8 days and we'd like to end somewhere quiet…"
            className={`${field} resize-y`}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-[0.78rem] text-clay-deep">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {serverError && (
        <p className="mt-5 rounded-xl border border-clay/25 bg-clay/[0.07] px-4 py-3 text-[0.87rem] text-clay-deep">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-all duration-300 hover:bg-clay-deep hover:shadow-[0_14px_30px_-14px_rgba(194,100,58,0.95)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : submitLabel}
        <Icon name="arrow-right" size={16} />
      </button>

      <p className="mt-4 text-[0.78rem] leading-relaxed text-muted">
        We use your details only to answer this enquiry. No newsletter, no third
        parties.
      </p>
    </form>
  );
}
