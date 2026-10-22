import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { site, whatsappLink } from "@/lib/site";

/**
 * Enquiry handler.
 *
 * Delivery order:
 *  1. Email via Resend when `RESEND_API_KEY` is set (recommended for production).
 *     `ENQUIRY_TO_EMAIL` picks the inbox (defaults to travel@havytours.com) and
 *     `ENQUIRY_FROM_EMAIL` the sender (defaults to Resend's onboarding address).
 *  2. A generic webhook when `ENQUIRY_WEBHOOK_URL` is set (Zapier, Make, a CRM
 *     endpoint — anything that accepts a JSON POST).
 *  3. On Vercel with neither configured, we refuse to silently drop the enquiry:
 *     the API returns `configured: false` plus a one-tap WhatsApp link carrying
 *     the full enquiry text so the client can hand the message over intact.
 *  4. In local development, submissions are appended to `data/enquiries.json`.
 */

type Enquiry = {
  name: string;
  email: string;
  phone: string;
  tour: string;
  dates: string;
  travellers: string;
  budget: string;
  message: string;
};

type Payload = Partial<Record<keyof Enquiry, unknown>>;

const str = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function emailBodies(enquiry: Enquiry, reference: string) {
  const rows: Array<[string, string]> = [
    ["Name", enquiry.name],
    ["Email", enquiry.email],
    ["Phone / WhatsApp", enquiry.phone || "—"],
    ["Trip of interest", enquiry.tour || "Not chosen yet"],
    ["Approximate dates", enquiry.dates || "—"],
    ["Travellers", enquiry.travellers || "—"],
    ["Budget per person", enquiry.budget || "—"],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 14px 8px 0;color:#8a8175;font-size:14px;vertical-align:top;white-space:nowrap">${label}</td><td style="padding:8px 0;font-size:14px;color:#191713">${esc(value)}</td></tr>`,
    )
    .join("");

  const html = `<!doctype html>
<html><body style="font-family:Georgia,serif;background:#fbf7f0;padding:24px">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e9dcc7;border-radius:12px;padding:28px">
    <p style="margin:0 0 4px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#c2643a">New website enquiry · ${reference}</p>
    <h1 style="margin:0 0 18px;font-size:22px;color:#191713">${esc(enquiry.tour || "A new trip enquiry")}</h1>
    <table style="border-collapse:collapse">${htmlRows}</table>
    <p style="margin:18px 0 6px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#8a8175">Message</p>
    <p style="margin:0;font-size:15px;line-height:1.65;color:#191713;white-space:pre-line">${esc(enquiry.message)}</p>
  </div>
  <p style="max-width:560px;margin:12px auto 0;font-size:12px;color:#8a8175">Replying to this email replies directly to ${esc(enquiry.name)}.</p>
</body></html>`;

  const text = [
    `New website enquiry — ${reference}`,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    enquiry.message,
  ].join("\n");

  return { html, text };
}

async function sendViaResend(enquiry: Enquiry, reference: string) {
  const { html, text } = emailBodies(enquiry, reference);
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.ENQUIRY_FROM_EMAIL ?? "Havy Tours Website <onboarding@resend.dev>",
      to: [process.env.ENQUIRY_TO_EMAIL ?? site.email],
      reply_to: `${enquiry.name} <${enquiry.email}>`,
      subject: `New enquiry — ${enquiry.tour || "Custom trip"} — ${enquiry.name}`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`resend ${res.status}: ${detail.slice(0, 300)}`);
  }
}

async function sendViaWebhook(record: Enquiry & { reference: string; receivedAt: string }) {
  const res = await fetch(process.env.ENQUIRY_WEBHOOK_URL as string, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record),
  });
  if (!res.ok) throw new Error(`webhook ${res.status}`);
}

async function persistLocally(record: Enquiry & { reference: string; receivedAt: string }) {
  const dataDir = path.join(process.cwd(), "data");
  const dataFile = path.join(dataDir, "enquiries.json");
  await mkdir(dataDir, { recursive: true });

  let existing: unknown[] = [];
  try {
    const parsed = JSON.parse(await readFile(dataFile, "utf8"));
    if (Array.isArray(parsed)) existing = parsed;
  } catch {
    existing = [];
  }

  existing.push(record);
  await writeFile(dataFile, JSON.stringify(existing, null, 2), "utf8");
}

export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const enquiry: Enquiry = {
    name: str(payload.name, 120),
    email: str(payload.email, 160),
    phone: str(payload.phone, 60),
    tour: str(payload.tour, 160),
    dates: str(payload.dates, 120),
    travellers: str(payload.travellers, 10),
    budget: str(payload.budget, 60),
    message: str(payload.message, 4000),
  };

  const errors: string[] = [];
  if (enquiry.name.length < 2) errors.push("Please provide your name.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(enquiry.email))
    errors.push("Please provide a valid email address.");
  if (enquiry.message.length < 10) errors.push("Please add a short message.");

  if (errors.length > 0) {
    return NextResponse.json({ ok: false, error: errors[0] }, { status: 422 });
  }

  const record = {
    reference: `HT-${randomUUID().slice(0, 8).toUpperCase()}`,
    receivedAt: new Date().toISOString(),
    ...enquiry,
  };

  // One-tap escape hatch: the full enquiry, pre-composed for WhatsApp.
  const waText = [
    "Hello Havy Tours, I'd like to plan a trip.",
    "",
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    enquiry.phone && `Phone: ${enquiry.phone}`,
    enquiry.tour && `Trip: ${enquiry.tour}`,
    enquiry.dates && `Dates: ${enquiry.dates}`,
    enquiry.travellers && `Travellers: ${enquiry.travellers}`,
    enquiry.budget && `Budget: ${enquiry.budget}`,
    "",
    enquiry.message,
  ]
    .filter(Boolean)
    .join("\n");

  if (process.env.RESEND_API_KEY) {
    try {
      await sendViaResend(enquiry, record.reference);
      console.log("[enquiries] emailed", record.reference, "to", process.env.ENQUIRY_TO_EMAIL ?? site.email);
      return NextResponse.json({ ok: true, reference: record.reference });
    } catch (error) {
      console.error("[enquiries] resend failed", error);
      return NextResponse.json(
        {
          ok: false,
          configured: true,
          whatsappUrl: whatsappLink(site.whatsapp[2].number, waText),
          error:
            "We couldn't deliver your enquiry just now. Tap below to send it on WhatsApp instead, or email travel@havytours.com.",
        },
        { status: 502 },
      );
    }
  }

  if (process.env.ENQUIRY_WEBHOOK_URL) {
    try {
      await sendViaWebhook(record);
      console.log("[enquiries] webhook delivered", record.reference);
      return NextResponse.json({ ok: true, reference: record.reference });
    } catch (error) {
      console.error("[enquiries] webhook failed", error);
      return NextResponse.json(
        {
          ok: false,
          configured: true,
          whatsappUrl: whatsappLink(site.whatsapp[2].number, waText),
          error: "We couldn't deliver your enquiry just now. Tap below to send it on WhatsApp instead.",
        },
        { status: 502 },
      );
    }
  }

  // Nothing configured. In development, keep the file-based inbox; in production
  // (Vercel), never silently drop — hand the enquiry to WhatsApp instead.
  if (process.env.VERCEL) {
    return NextResponse.json(
      {
        ok: false,
        configured: false,
        whatsappUrl: whatsappLink(site.whatsapp[2].number, waText),
        error:
          "Online enquiries are being connected. Send this enquiry on WhatsApp (one tap, everything pre-filled) or email travel@havytours.com.",
      },
      { status: 503 },
    );
  }

  try {
    await persistLocally(record);
  } catch (error) {
    console.error("[enquiries] failed to persist enquiry", error);
    return NextResponse.json(
      { ok: false, error: "We could not save your enquiry. Please email travel@havytours.com." },
      { status: 500 },
    );
  }

  console.log("[enquiries] new enquiry", record.reference, enquiry.email);
  return NextResponse.json({ ok: true, reference: record.reference });
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: "Method not allowed." },
    { status: 405, headers: { Allow: "POST" } },
  );
}
