# Havy Tours & Travel — Jinja Getaway Trip poster

Campaign poster for **Jinja Getaway Trip — "Epic Escapades"**, 12 December 2026.

Every file in `dist/` is generated from `src/poster.js`, so the next trip is a
data change rather than a redesign.

## Deliverables (`dist/`)

| File | Size | Use |
| --- | --- | --- |
| `jinja-getaway-poster-print.png` | 2631 × 3508 px (A4 @ 300 dpi) | Print / flyers |
| `jinja-getaway-print.jpg` | 2631 × 3508 px | Print-friendly JPG |
| `jinja-getaway-poster.png` | 2160 × 2880 px | High-res digital / big screen |
| `jinja-getaway-share.jpg` | 2160 × 2880 px, ~0.5 MB | WhatsApp, Instagram, Facebook |
| `jinja-getaway.svg` | vector | Infinite scaling, editable in Illustrator/Inkscape |
| `preview.png` | 1080 × 1440 px | Quick look |

## Editing the campaign

Open `src/poster.js` and change the `CONFIG` object at the top:

```js
price: '300,000',        // shown as "UGX 300,000"
date: '12 DEC',
dateNote: 'SATURDAY · 2026',
phone: '0762 652 564',
web: 'havytours.com',
items: [                 // each row = icon + label, optional `sub` line
  { icon: 'zipline', label: 'Zip lining' },
  ...
],
```

Available icons: `zipline`, `tubing`, `waterbike`, `chicken`, `van`, `boat`, `meals`, `pickup`
(all hand-drawn vectors in `src/icons.js`).

Then rebuild:

```bash
npm install          # first time only
npm run build        # regenerates SVG + all PNG/JPG exports
```

## Design notes

- **Logo** — the client's supplied soft copy (`assets/havy-logo-soft-copy.jpg`)
  was keyed off its black background into `assets/havy-logo-gold.png`, so it is
  transparent and re-tintable. It is used exactly as supplied, unredrawn.
- **Palette** — sampled from the client's reference poster:
  cream `#F7F3E7`, forest green `#0D2D15`, brand gold `#C87A18`.
- **Type** — Great Vibes (headline script), Playfair Display (tagline), Montserrat
  (information). All open-licence (SIL OFL).
- **Icons** — custom 64×64 pictograms rather than stock icons, so the six
  activities share one visual weight.
- **Boat cruise** carries the client's update "to the Source of the Nile" as a
  sub-line, per the WhatsApp brief.
- **Meals** and **pick-up point** were confirmed as included by the client and
  appear in the activity list.
- **12 December 2026 is a Saturday** — verified, and shown on the date block.

## Confirmed campaign details

- **UGX 300,000 per person** — confirmed by the client ("300 k" in the brief).
- **Meals** and **pick-up point** included — confirmed.
- **12 December 2026 is a Saturday** — verified.
- Website is **havytours.com**.
- Accommodation is not stated in the brief, so the poster makes no claim about it.
