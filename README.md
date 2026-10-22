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
| Epic Escapades brand page — 12 activities, dual-currency price list | `/epic-escapades` | Working |
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
| `/epic-escapades` | The Jinja adventure brand: 12 activities with prices, resident/non-resident ride pricing, hours, location, contacts |
| `/about` | Story, mission/vision/values, stats, company timeline, services, ventures, team |
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

### Enquiry delivery

The form at `/api/enquiries` never drops a submission silently. It delivers in
this order:

1. **Email via [Resend](https://resend.com)** when `RESEND_API_KEY` is set —
   the right choice for Vercel. Optional overrides: `ENQUIRY_TO_EMAIL`
   (defaults to `travel@havytours.com`) and `ENQUIRY_FROM_EMAIL`.

   Setup: create a Resend account **with the travel@havytours.com address** (on
   the free tier, Resend's onboarding sender can only deliver to the account
   email), generate an API key, and add it in Vercel → Project → Settings →
   Environment Variables. To send from a custom address or to other inboxes,
   verify `havytours.com` in Resend → Domains instead.
2. **Webhook** when `ENQUIRY_WEBHOOK_URL` is set (Zapier, Make, a CRM — any
   JSON POST endpoint).
3. **WhatsApp handoff** when neither is configured in production: the API
   returns a one-tap WhatsApp link with the entire enquiry pre-filled, and the
   form offers it to the visitor. Nothing is lost, even before email is wired.
4. **Local development** appends to `data/enquiries.json` (gitignored).
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
- **Epic Escapades** — the Jinja adventure brand: all 12 activity names and prices
  from `epicescapadesug.com`, plus location, hours, phone numbers and email from
  the Havy Tours homepage block

**Rewritten:** all copy has been tightened. The original About page, for example,
runs to roughly 1,200 words of nested clauses; it's now a scannable story plus
structured sections. Nothing factual was changed.

**✅ Confirmed via the official Epic Escapades store:** the *30-minute* water-bike
rates (EAC UGX 80,000 / child 60,000; foreigners $40 / $30) match
`epicescapadesug.com/product/water-biking`. The **60-minute band** (UGX 150,000 /
130,000; $50 / $40) comes from the price board displayed on havytours.com and is
still worth a quick check with the Jinja team — it's noted on-page.

---

## ⚠️ Placeholder content — replace before launch

1. **Photography is now partly real.** Every tour's primary photo, the home-page
   hero, the Epic Escapades brand image and the honeymoon card are hotlinked from
   the company's own uploads on `havytours.com` — the same assets the live site
   shows today. Tour *galleries*, the About team photo, the custom-trip notebook
   illustration and the category imagery remain AI-generated placeholders until
   the company supplies its real library. If any hotlink ever breaks, the local
   AI images are still in `public/images/` as an immediate fallback (revert
   `image:` fields in `lib/tours.ts` to the `IMG.*` entries).
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
  brands.ts            Epic Escapades: activities, pricing, contacts
  site.ts              Company contact details
  content.ts           Copy blocks; placeholder items are flagged
public/images/         Placeholder photography
```

Epic Escapades pricing lives in `lib/brands.ts`; change `epicActivities` or
`epicRidePricing` there and the `/epic-escapades` page, the home-page card and the
cross-sell panel on adventure tours all update together.

To add or edit a trip, change `lib/tours.ts` — every listing, filter, detail page,
sitemap entry and form dropdown updates from it automatically.

---

## Suggested next steps

- **Set `RESEND_API_KEY` on Vercel** so enquiries email `travel@havytours.com`
  automatically — see *Enquiry delivery* above. Until it's set, the form hands
  each enquiry to WhatsApp intact, so nothing is lost.
- **Fill in the partner names.** The 16 partners are hotlinked in order from the
  old site, but only the four schools (Kabojja International School, Trinity
  College Nabbingo, Harvest International School, Lubiri Secondary School) were
  identifiable from their filenames. The rest show as "Partner N" in
  `lib/partners.ts` — drop in the real organisation names, and swap the hotlinks
  for locally-hosted artwork when it's available.
- Check the remaining 60-minute ride price band with the Jinja team
- Replace the remaining AI placeholder images (galleries, About team photo) with
  the company's real library
- Collect three real testimonials and real team profiles
- Add real availability / permit calendar for gorilla and chimpanzee trekking
- Add an Instagram feed if the company wants it
- Run Lighthouse and confirm Core Web Vitals on real Ugandan mobile networks
