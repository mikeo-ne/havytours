import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

/**
 * Prototype enquiry handler.
 *
 * Submissions are validated and appended to `data/enquiries.json` at the
 * project root. Swap this for a real integration (email, CRM, database) when
 * the site goes live — the request/response contract stays the same.
 */

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "enquiries.json");

type Payload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  tour?: unknown;
  dates?: unknown;
  travellers?: unknown;
  budget?: unknown;
  message?: unknown;
};

const str = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let payload: Payload;

  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const enquiry = {
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

  try {
    await mkdir(DATA_DIR, { recursive: true });

    let existing: unknown[] = [];
    try {
      const raw = await readFile(DATA_FILE, "utf8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) existing = parsed;
    } catch {
      existing = [];
    }

    existing.push(record);
    await writeFile(DATA_FILE, JSON.stringify(existing, null, 2), "utf8");
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
