/**
 * Havy Tours & Travel — "Jinja Getaway Trip" poster generator.
 *
 * Everything is data-driven: edit CONFIG and re-render to produce the poster for
 * the next trip. Output is pure vector SVG (scales to any print size) with an
 * optional PNG raster via @resvg/resvg-js.
 */
const fs = require('fs');
const path = require('path');
const { iconSVG } = require('./icons.js');

const W = 1080;
const H = 1440;

// ---------------------------------------------------------------------------
// Brand + campaign configuration
// ---------------------------------------------------------------------------
const CONFIG = {
  brand: 'Havy Tours & Travel',
  logo: path.join(__dirname, '..', 'assets', 'havy-logo-gold.png'),
  hero: path.join(__dirname, '..', 'assets', 'hero-zipline.jpg'),

  eyebrow: 'Epic Escapades',
  script: ['Jinja', 'getaway trip'],

  items: [
    { icon: 'zipline',   label: 'Zip lining' },
    { icon: 'tubing',    label: 'Water tubing' },
    { icon: 'waterbike', label: 'Water biking' },
    { icon: 'chicken',   label: 'Chicken at Namawojolo' },
    { icon: 'van',       label: 'Transport to and fro' },
    { icon: 'boat',      label: 'Boat cruise', sub: 'to the Source of the Nile' },
    { icon: 'meals',     label: 'Meals' },
    { icon: 'pickup',    label: 'Pick-up point' },
  ],

  price: '300,000',
  priceNote: 'per person',

  date: '12 DEC',
  dateNote: 'SATURDAY · 2026',

  phone: '0762 652 564',
  web: 'havytours.com',
};

const C = {
  cream: '#F7F3E7',
  green: '#0D2D15',
  gold: '#C87A18',
  goldLight: '#E4A94A',
  goldDeep: '#9C5E0F',
  ink: '#17301F',
  muted: '#5C6B5E',
  paleGreen: '#9FBBA4',
};

// ---------------------------------------------------------------------------
// Fonts — each static instance carries its own family name (see fonts-rename.py)
// ---------------------------------------------------------------------------
const FONT_FILES = [
  'GreatVibes-Regular',
  'Playfair-500', 'Playfair-600', 'Playfair-700', 'Playfair-800', 'Playfair-900',
  'Montserrat-400', 'Montserrat-500', 'Montserrat-600', 'Montserrat-700', 'Montserrat-800',
].map((n) => path.join(__dirname, '..', 'fonts', n + '.ttf'));

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const text = (x, y, str, o = {}) => {
  const {
    font = 'Montserrat 500', size = 24, fill = C.ink, anchor = 'start',
    ls = 0, opacity = 1, italic = false,
  } = o;
  const lsAttr = ls ? ` letter-spacing="${ls}"` : '';
  const it = italic ? ' font-style="italic"' : '';
  return `<text x="${x}" y="${y}" font-family="${font}" font-size="${size}" fill="${fill}"`
    + `${it} text-anchor="${anchor}"${lsAttr} opacity="${opacity}">${esc(str)}</text>`;
};

const dataURI = (p, mime) => `data:${mime};base64,${fs.readFileSync(p).toString('base64')}`;
const imgMime = (p) => (/\.png$/i.test(p) ? 'image/png' : 'image/jpeg');

// ---------------------------------------------------------------------------
// Layout constants
// ---------------------------------------------------------------------------
const PAD = 54;
const CARD_X = PAD - 6;
const CARD_W = 640;
const ROW_H = 52;
const SUB_EXTRA = 20;
const CARD_TOP = 548;
const FOOTER_TOP = 1272;
const PHOTO_TOP = 396;

function buildSVG(cfg = CONFIG) {
  const logoURI = dataURI(cfg.logo, imgMime(cfg.logo));
  const heroURI = dataURI(cfg.hero, imgMime(cfg.hero));

  // --- activity card -------------------------------------------------------
  const rowsHeight = cfg.items.reduce((a, it) => a + ROW_H + (it.sub ? SUB_EXTRA : 0), 0);
  const cardH = rowsHeight + 112;
  const cardBottom = CARD_TOP + cardH;

  // --- price bar -----------------------------------------------------------
  const priceY = cardBottom + 22;
  const priceH = 90;

  // --- hero photo: cover the band, rider kept to the right -----------------
  const bandH = FOOTER_TOP - PHOTO_TOP;
  const imgW = 1376, imgH = 768;
  const scale = Math.max(W / imgW, bandH / imgH) * 1.12;
  const drawW = imgW * scale;
  const drawH = imgH * scale;
  const drawX = W * 0.80 - drawW * 0.72;
  const drawY = PHOTO_TOP + bandH * 0.40 - drawH * 0.34;

  // --- activity rows -------------------------------------------------------
  let rows = '';
  let rowY = CARD_TOP + 84;
  cfg.items.forEach((it) => {
    const iconSize = 40;
    rows += iconSVG(it.icon, {
      x: CARD_X + 34, y: rowY + (it.sub ? 0 : 6), size: iconSize, fill: C.gold,
    });
    rows += text(CARD_X + 96, rowY + 36, it.label, {
      font: 'Montserrat 600', size: 24, fill: C.ink,
    });
    if (it.sub) {
      rows += text(CARD_X + 96, rowY + 57, it.sub, {
        font: 'Montserrat 500', size: 15.5, fill: C.muted, italic: true,
      });
    }
    // gold tick: reads as "this is covered"
    const tx = CARD_X + CARD_W - 44;
    const ty = rowY + (it.sub ? 19 : 26);
    rows += `<path d="M${tx} ${ty} l6.5 6.5 L${tx + 21} ${ty - 12}" fill="none" stroke="${C.gold}"`
      + ` stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>`;
    rowY += ROW_H + (it.sub ? SUB_EXTRA : 0);
  });

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
  width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <!-- photo dissolves into the paper: masks, not overlays, so no grey haze -->
    <linearGradient id="gTop" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0"    stop-color="#fff" stop-opacity="0"/>
      <stop offset="0.30" stop-color="#fff" stop-opacity="0.55"/>
      <stop offset="0.62" stop-color="#fff" stop-opacity="1"/>
    </linearGradient>
    <linearGradient id="gLeft" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0"    stop-color="#fff" stop-opacity="0"/>
      <stop offset="0.34" stop-color="#fff" stop-opacity="0.45"/>
      <stop offset="0.60" stop-color="#fff" stop-opacity="1"/>
    </linearGradient>
    <linearGradient id="gBottom" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0"    stop-color="#fff" stop-opacity="1"/>
      <stop offset="0.72" stop-color="#fff" stop-opacity="0.85"/>
      <stop offset="1"    stop-color="#fff" stop-opacity="0"/>
    </linearGradient>

    <mask id="mTop" maskUnits="userSpaceOnUse" x="0" y="${PHOTO_TOP}" width="${W}" height="${bandH}">
      <rect x="0" y="${PHOTO_TOP}" width="${W}" height="${bandH}" fill="url(#gTop)"/>
    </mask>
    <mask id="mLeft" maskUnits="userSpaceOnUse" x="0" y="0" width="${W}" height="${H}">
      <rect x="0" y="0" width="${W}" height="${H}" fill="url(#gLeft)"/>
    </mask>
    <mask id="mBottom" maskUnits="userSpaceOnUse" x="0" y="${PHOTO_TOP}" width="${W}" height="${bandH}">
      <rect x="0" y="${PHOTO_TOP}" width="${W}" height="${bandH}" fill="url(#gBottom)"/>
    </mask>

    <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0"   stop-color="${C.goldLight}"/>
      <stop offset="0.5" stop-color="${C.gold}"/>
      <stop offset="1"   stop-color="${C.goldDeep}"/>
    </linearGradient>

    <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="12" stdDeviation="20" flood-color="#0D2D15" flood-opacity="0.18"/>
    </filter>
    <filter id="barShadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="10" stdDeviation="16" flood-color="#0D2D15" flood-opacity="0.30"/>
    </filter>

    <clipPath id="photoClip">
      <rect x="0" y="${PHOTO_TOP}" width="${W}" height="${bandH}"/>
    </clipPath>
    <clipPath id="cardClip">
      <rect x="${CARD_X}" y="${CARD_TOP}" width="${CARD_W}" height="${cardH}" rx="24"/>
    </clipPath>
    <clipPath id="priceClip">
      <rect x="${CARD_X}" y="${priceY}" width="${CARD_W}" height="${priceH}" rx="18"/>
    </clipPath>
  </defs>

  <!-- ===================== background ===================== -->
  <rect width="${W}" height="${H}" fill="${C.cream}"/>

  <!-- ===================== hero photograph ===================== -->
  <g clip-path="url(#photoClip)">
    <g mask="url(#mLeft)">
      <g mask="url(#mTop)">
        <image x="${drawX}" y="${drawY}" width="${drawW}" height="${drawH}"
               preserveAspectRatio="xMidYMid slice" xlink:href="${heroURI}"/>
      </g>
    </g>
  </g>

  <!-- ===================== masthead ===================== -->
  <rect x="0" y="0" width="${W * 0.63}" height="9" fill="${C.gold}"/>
  <rect x="${W * 0.63}" y="0" width="${W * 0.37}" height="9" fill="${C.green}"/>

  <!-- client logo (the soft copy they supplied) -->
  <image x="${PAD - 6}" y="32" width="246" height="133"
         preserveAspectRatio="xMinYMid meet" xlink:href="${logoURI}"/>

  <!-- right-hand masthead lockup -->
  ${text(W - PAD, 84, 'UGANDA', { font: 'Montserrat 700', size: 17, ls: 6.5, fill: C.green, anchor: 'end' })}
  ${text(W - PAD, 110, 'JINJA · THE NILE', { font: 'Montserrat 500', size: 12.5, ls: 3, fill: C.muted, anchor: 'end' })}

  <!-- ===================== headline ===================== -->
  ${text(PAD - 12, 330, cfg.script[0], { font: 'Great Vibes', size: 176, fill: C.green })}
  ${text(PAD - 2, 434, cfg.script[1], { font: 'Great Vibes', size: 102, fill: C.green })}

  <!-- eyebrow / tagline -->
  <g>
    <rect x="${PAD}" y="474" width="60" height="3" fill="${C.gold}"/>
    ${text(PAD + 80, 489, cfg.eyebrow.toUpperCase(), {
      font: 'Playfair 700', size: 31, ls: 7.5, fill: C.goldDeep,
    })}
  </g>

  <!-- ===================== activity card ===================== -->
  <g filter="url(#cardShadow)">
    <rect x="${CARD_X}" y="${CARD_TOP}" width="${CARD_W}" height="${cardH}" rx="24" fill="${C.cream}"/>
  </g>
  <rect x="${CARD_X}" y="${CARD_TOP}" width="${CARD_W}" height="${cardH}" rx="24"
        fill="none" stroke="${C.gold}" stroke-opacity="0.45" stroke-width="1.5"/>
  <rect x="${CARD_X}" y="${CARD_TOP}" width="${CARD_W}" height="5" fill="url(#goldGrad)"/>
  <rect x="${CARD_X}" y="${CARD_TOP + 24}" width="5" height="${cardH - 48}" fill="${C.gold}" opacity="0.85"/>

  <g>
    ${text(CARD_X + 34, CARD_TOP + 46, "WHAT'S INCLUDED", {
      font: 'Montserrat 700', size: 14, ls: 3.2, fill: C.goldDeep,
    })}
    <line x1="${CARD_X + 34}" y1="${CARD_TOP + 62}" x2="${CARD_X + CARD_W - 34}" y2="${CARD_TOP + 62}"
          stroke="${C.gold}" stroke-opacity="0.35" stroke-width="1.5"/>
  </g>

  ${rows}

  <!-- ===================== price + date ===================== -->
  <rect x="0" y="${priceY - 18}" width="${W}" height="${FOOTER_TOP - priceY + 18}" fill="${C.cream}" opacity="0"/>
  <g filter="url(#barShadow)">
    <rect x="${CARD_X}" y="${priceY}" width="${CARD_W}" height="${priceH}" rx="18" fill="${C.green}"/>
  </g>
  <g clip-path="url(#priceClip)">
    <rect x="${CARD_X}" y="${priceY}" width="6" height="${priceH}" fill="${C.gold}"/>
  </g>

  <g>
    ${text(CARD_X + 26, priceY + 31, 'TRIP PACKAGE FROM', {
      font: 'Montserrat 600', size: 12, ls: 2.4, fill: C.goldLight,
    })}
    ${text(CARD_X + 26, priceY + 72, `UGX ${cfg.price}`, {
      font: 'Montserrat 800', size: 36, fill: C.cream,
    })}
    ${text(CARD_X + 26, priceY + 87, cfg.priceNote, {
      font: 'Montserrat 500', size: 12.5, fill: C.paleGreen,
    })}
  </g>

  <line x1="${CARD_X + CARD_W - 178}" y1="${priceY + 20}" x2="${CARD_X + CARD_W - 178}"
        y2="${priceY + priceH - 20}" stroke="${C.gold}" stroke-opacity="0.45" stroke-width="1.5"/>

  <g>
    ${text(CARD_X + CARD_W - 26, priceY + 48, cfg.date, {
      font: 'Playfair 800', size: 34, fill: C.goldLight, anchor: 'end',
    })}
    ${text(CARD_X + CARD_W - 26, priceY + 74, cfg.dateNote, {
      font: 'Montserrat 600', size: 12.5, ls: 1.8, fill: C.paleGreen, anchor: 'end',
    })}
  </g>

  <!-- ===================== footer ===================== -->
  <rect x="0" y="${FOOTER_TOP}" width="${W}" height="${H - FOOTER_TOP}" fill="${C.green}"/>
  <rect x="0" y="${FOOTER_TOP}" width="${W}" height="5" fill="${C.gold}"/>

  <g>
    <circle cx="${PAD + 25}" cy="${FOOTER_TOP + 88}" r="26" fill="${C.gold}"/>
    <path transform="translate(${PAD + 25} ${FOOTER_TOP + 88})"
          d="M-9 -10.5c-2.1 0-3.8 1.7-3.8 3.8 0 10.4 8.5 18.9 18.9 18.9 2.1 0 3.8-1.7 3.8-3.8v-3.5c0-1.1-.7-2-1.8-2.3l-3.9-.8c-.9-.2-1.8.2-2.3.9l-1.3 1.8c-3.1-1.7-5.7-4.3-7.4-7.4l1.8-1.3c.7-.5 1-1.4.9-2.3l-.8-3.9c-.3-1.1-1.2-1.8-2.3-1.8z"
          fill="${C.green}"/>
    ${text(PAD + 66, FOOTER_TOP + 80, cfg.phone, {
      font: 'Montserrat 700', size: 30, fill: C.cream,
    })}
    ${text(PAD + 66, FOOTER_TOP + 106, 'Call or WhatsApp', {
      font: 'Montserrat 500', size: 13, ls: 1.2, fill: C.paleGreen,
    })}
  </g>

  <line x1="${W - PAD - 236}" y1="${FOOTER_TOP + 52}" x2="${W - PAD - 236}"
        y2="${FOOTER_TOP + 120}" stroke="${C.gold}" stroke-opacity="0.3" stroke-width="1.5"/>

  <g>
    ${text(W - PAD, FOOTER_TOP + 80, cfg.web, {
      font: 'Montserrat 700', size: 28, fill: C.cream, anchor: 'end',
    })}
    ${text(W - PAD, FOOTER_TOP + 106, 'Book your seat today', {
      font: 'Montserrat 500', size: 13, ls: 1.2, fill: C.paleGreen, anchor: 'end',
    })}
  </g>
</svg>`;

  return svg;
}

module.exports = { buildSVG, CONFIG, W, H, FONT_FILES };

if (require.main === module) {
  const out = process.argv[2] || path.join(__dirname, '..', 'dist', 'jinja-getaway.svg');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, buildSVG());
  console.log('wrote', out);
}
