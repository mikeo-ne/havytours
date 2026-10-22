# Havy Tours & Travel — website redesign prototype

A working prototype of a redesigned **havytours.com**, built to present to the company.

Live preview: run `npm run dev` and open the preview URL.

---

## What this is

A complete visual and structural rethink of the current WordPress site. The old site
is a dense, text-heavy template with five stacked hero sliders, a duplicated blog
feed and long walls of body copy. This prototype replaces that with a calm,
editorial travel site: one hero, clear hierarchy, scannable copy, and a booking
journey that actually goes somewhere.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 ·
self-hosted Fraunces + Inter fonts (no external font requests).

**It is functional, not a mockup:**

| Feature | Where | Status |
| --- | --- | --- |
| 18 tour pages, generated from one data file | `/tours`, `/tours/[slug]` | Working |
| Live filtering by category, length, budget + sorting | `/tours` | Working |
| Enquiry form with validation, submission and reference number | `/contact`, home, every tour page | Working (POSTs to `/api/enquiries`) |
| Sticky enquiry panel pre-filled with the trip you're viewing | `/tours/[slug]` | Working |
| WhatsApp deep links (Admin / Helpline / Reservations) | Everywhere | Working |
| SEO metadata, Open Graph, JSON-LD, sitemap, robots | All pages | Working |
| Responsive down to 320px, reduced-motion support | All pages | Working |

---

## Pages

| Route | What's on it |
| --- | --- |
| `/` | Full-bleed hero, signature journeys, the six experience types, why Havy, stats, three-step process, testimonials, custom-trip form, FAQ |
| `/tours` | Filters + sort, all 18 trips, category explainer |
| `/tours/[slug]` | Hero, intro, highlights, gallery, day-by-day itinerary, inclusions/exclusions, sticky booking card, related trips |
| `/about` | Story, mission/vision/values, stats, company timeline, services, team |
| `/contact` | Office details, hours, WhatsApp channels, enquiry form (pre-fills if you arrive from a tour) |
| `*` | Custom 404 with trip suggestions |

---

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Enquiries submitted through the form are appended to `data/enquiries.json` (gitignored).
To go live, swap `app/api/enquiries/route.ts` for a real integration — email, CRM or
database. The request/response contract stays identical.

---

## Where the content came from

**Real, taken from the live site:**

- All 18 tour names, durations, prices and highlights
- Company details: address, phone numbers, WhatsApp lines, `travel@havytours.com`
- Founding year (2016), mission, vision, values, objectives, service list
- The YUTO / Aga Khan Foundation / Rubirizi / Film & Cultural Week track record
- The FAQ answers (visas, vaccinations, safety, gorilla trekking difficulty, packing)

**Rewritten:** all copy has been tightened. The original About page, for example,
runs to roughly 1,200 words of nested clauses; it's now a scannable story plus
structured sections. Nothing factual was changed.

---

## ⚠️ Placeholder content — replace before launch

Everything below is invented for the prototype:

1. **All photography.** Every image in `public/images/` is AI-generated and is not a
   real Havy Tours asset. Swap in the company's own library. The current site already
   hosts a large set of real park photos at `havytours.com/wp-content/uploads/`.
   Note: a handful of tours share an image (Kampala city, Kampala at night and
   International all reuse `kampala-city.jpg`) simply because only ten images were
   generated. This resolves once real photography is dropped in.
2. **Testimonials** on the home page — three sample quotes, marked on-page.
3. **Team names and roles** on `/about` — four cards reading `PLACEHOLDER`.
4. **Office map** on `/contact` — a labelled empty frame; embed Google Maps.
5. **Social links** in the footer point at generic platform homepages.

The `/about` page carries a visible "Prototype note" block listing these, so nobody
reviewing the prototype mistakes them for real content.

---

## Design system

Defined once in `app/globals.css` via Tailwind v4's `@theme`:

| Token | Value | Use |
| --- | --- | --- |
| `cream` `#FBF7F0` | Warm off-white page background |
| `cream-deep` `#F4ECDE` | Alternating section background |
| `ink` `#191713` | Body text, dark bands |
| `forest` `#22402F` | Dark sections, accents |
| `clay` `#C2643A` | Primary action colour, CTAs |
| `gold` `#D8A441` | Accent on dark backgrounds |

Type: **Fraunces** (display serif) over **Inter** (body). Generous whitespace,
`text-wrap: balance` on headings, and a slow scroll-reveal throughout
(`components/Reveal.tsx`), all disabled under `prefers-reduced-motion`.

---

## Project structure

```
app/
  layout.tsx           Fonts, header, footer, WhatsApp widget, SEO defaults
  page.tsx             Home
  tours/page.tsx       Listing + filters
  tours/[slug]/        Tour detail (18 static routes)
  about/  contact/     About, contact
  not-found.tsx        Custom 404
  api/enquiries/       Enquiry endpoint
  sitemap.ts robots.ts
components/            Header, footer, cards, forms, accordion, reveal, icons
lib/
  tours.ts             All 18 tours — names, prices, itineraries, inclusions
  site.ts              Company contact details
  content.ts           Copy blocks; placeholder items are flagged
public/images/         Placeholder photography
```

To add or edit a trip, change `lib/tours.ts` — every listing, filter, detail page,
sitemap entry and form dropdown updates from it automatically.

---

## Suggested next steps

- Replace placeholder photography with the company's real image library
- Collect three real testimonials and real team profiles
- Connect the enquiry endpoint to `travel@havytours.com` (or a CRM)
- Add real availability / permit calendar for gorilla and chimpanzee trekking
- Add an Instagram feed if the company wants it
- Run Lighthouse and confirm Core Web Vitals on real Ugandan mobile networks
