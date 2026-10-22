// Custom pictogram set for the Havy Tours "Jinja Getaway" poster.
// All icons drawn on a 64x64 grid with one shared visual weight.
// Shapes that need to "see through" use a single even-odd path (outer shape +
// inner cut-outs), so the card colour behind shows through instead of being
// painted over — this keeps them correct on any background.

const f = (d, fill) => `<path d="${d}" fill="${fill}"/>`;
const eo = (d, fill) => `<path d="${d}" fill="${fill}" fill-rule="evenodd"/>`;
const st = (d, fill, w = 5) =>
  `<path d="${d}" fill="none" stroke="${fill}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;

// continuous water ribbon (two crests) ------------------- y = top of ribbon
const WATER = (y) => {
  const t = y, b = y + 4.6;
  return `M0 ${t} C5 ${t - 4}, 11 ${t - 4}, 16 ${t} C21 ${t + 4}, 27 ${t + 4}, 32 ${t} ` +
         `C37 ${t - 4}, 43 ${t - 4}, 48 ${t} C53 ${t + 4}, 59 ${t + 4}, 64 ${t} ` +
         `L64 ${b} C59 ${b + 4}, 53 ${b + 4}, 48 ${b} C43 ${b - 4}, 37 ${b - 4}, 32 ${b} ` +
         `C27 ${b + 4}, 21 ${b + 4}, 16 ${b} C11 ${b - 4}, 5 ${b - 4}, 0 ${b} Z`;
};

const ICONS = {
  // Rider hanging from a zipline (front view: reads clearly at small sizes) ---
  zipline: (fill) => `
    <!-- cable -->
    ${st('M0 8.4 L64 3.4', fill, 2.4)}
    <!-- trolley -->
    ${eo('M27 1.6 h10 a2 2 0 0 1 2 2 v6 h-14 v-6 a2 2 0 0 1 2 -2 z M32 2.4 a2.1 2.1 0 1 1 0 4.2 a2.1 2.1 0 0 1 0 -4.2 z', fill)}
    <!-- spreader bar -->
    ${f('M20.6 9.6 h22.8 a1.5 1.5 0 0 1 1.5 1.5 v3 H19.1 v-3 a1.5 1.5 0 0 1 1.5 -1.5 z', fill)}
    <!-- arms up and out, clear of the head -->
    ${st('M23.4 13.4 L27.6 22.4', fill, 3.4)}
    ${st('M40.6 13.4 L36.4 22.4', fill, 3.4)}
    <!-- head -->
    ${f('M32 15.2 a4.8 4.8 0 1 1 0 9.6 a4.8 4.8 0 0 1 0 -9.6 z', fill)}
    <!-- torso -->
    ${f('M28.8 24.8 h6.4 a3.2 3.2 0 0 1 3.2 3.2 v5.2 a3.2 3.2 0 0 1 -3.2 3.2 h-6.4 a3.2 3.2 0 0 1 -3.2 -3.2 v-5.2 a3.2 3.2 0 0 1 3.2 -3.2 z', fill)}
    <!-- harness -->
    ${f('M26.2 28.8 h11.6 v2.6 H26.2 z', fill)}
    <!-- legs dangling, slightly apart -->
    ${st('M30 36.4 L27.6 44.6', fill, 4.4)}
    ${st('M34 36.4 L36.4 44.6', fill, 4.4)}
    <!-- shoes -->
    ${f('M23.6 43.2 l5.6 1.6 a2 2 0 0 1 -1 3.9 l-5.9 -1.7 z', fill)}
    ${f('M40.4 43.2 l-5.6 1.6 a2 2 0 0 0 1 3.9 l5.9 -1.7 z', fill)}
  `,

  // Floating in a river tube --------------------------------------------------
  tubing: (fill) => `
    <!-- rider, drawn behind the ring so the tube cradles them -->
    ${f('M32 4.2 a5.4 5.4 0 1 1 0 10.8 a5.4 5.4 0 0 1 0 -10.8 z', fill)}
    ${f('M26 16.2 h12 a4.6 4.6 0 0 1 4.6 4.6 V 32 H21.4 v-11.2 a4.6 4.6 0 0 1 4.6 -4.6 z', fill)}
    ${st('M24.6 19.6 L15.4 29.4', fill, 5)}
    ${st('M39.4 19.6 L48.6 29.4', fill, 5)}
    <!-- inner tube -->
    ${eo('M32 27.4 a21 12.4 0 1 1 0 24.8 a21 12.4 0 0 1 0 -24.8 z M32 35.2 a10.6 5.6 0 1 0 0 11.2 a10.6 5.6 0 0 0 0 -11.2 z', fill)}
    ${f(WATER(55), fill)}
  `,

  // Water biking --------------------------------------------------------------
  waterbike: (fill) => `
    <!-- wheels -->
    ${eo('M14.8 26.6 a9.4 9.4 0 1 1 0 18.8 a9.4 9.4 0 0 1 0 -18.8 z M14.8 31 a5 5 0 1 0 0 10 a5 5 0 0 0 0 -10 z', fill)}
    ${eo('M49.2 26.6 a9.4 9.4 0 1 1 0 18.8 a9.4 9.4 0 0 1 0 -18.8 z M49.2 31 a5 5 0 1 0 0 10 a5 5 0 0 0 0 -10 z', fill)}
    <!-- frame -->
    ${st('M14.8 35.6 L25.4 17.6 L44 17.8 Z', fill, 4.6)}
    ${st('M25.4 17.6 L32.4 35.6', fill, 4.6)}
    ${st('M32.4 35.6 L49.2 35.6', fill, 4.6)}
    ${st('M49.2 35.6 L44 17.8', fill, 4.6)}
    <!-- saddle + handlebars -->
    ${f('M19.4 14.6 h9.6 a1.9 1.9 0 0 1 0 3.8 h-9.6 z', fill)}
    ${f('M41 10.8 h10.4 v3.8 H41 z', fill)}
    ${st('M46 14.6 L44 18.4', fill, 4.2)}
    ${f(WATER(51.4), fill)}
  `,

  // Village hen (Namawojolo roadside chicken) --------------------------------
  chicken: (fill) => `
    <!-- tail feathers -->
    ${f('M17.6 34.4 C13 28.8 8.6 24.6 3.2 22.6 c3.2 5 4.6 10.4 4.2 15.8 -1.4 1 -2.6 2.4 -3.4 4.2 4.6 -0.8 9.4 0.2 13.6 3 z', fill)}
    <!-- body -->
    ${f('M28.6 20.4 c9.6 -1.2 17.6 5 18.6 13.6 1 8.8 -5.4 16 -14.6 16.4 -8.6 0.4 -15.4 -5.2 -16.2 -13.4 -0.8 -8.2 4.2 -15.4 12.2 -16.6 z', fill)}
    <!-- neck -->
    ${f('M37 25.4 c2.6 -2.4 6 -2 7.4 0.8 l2.6 5.2 c-3.4 1.4 -7 0.6 -9.2 -2.2 z', fill)}
    <!-- head -->
    ${f('M45.6 12.6 a6.8 6.8 0 1 1 0 13.6 a6.8 6.8 0 0 1 0 -13.6 z', fill)}
    <!-- comb -->
    ${f('M41.4 11.4 c-0.6 -3 2 -5.4 4.6 -4 0.8 -2.6 4.4 -2.8 5.6 -0.4 2 -1.4 4.6 0.6 3.8 2.8 l-1.2 3 -10.6 -1.4 z', fill)}
    <!-- beak -->
    ${f('M51.6 15.4 l7.2 2.6 -7 3.4 z', fill)}
    <!-- wattle -->
    ${f('M50.6 21.6 c2.4 0 3.8 1.6 3.4 3.6 -0.4 2.2 -3 3 -4.6 1.6 z', fill)}
    <!-- eye (paper shows through) -->
    ${eo('M47 17.4 a2 2 0 1 1 0 4 a2 2 0 0 1 0 -4 z', '#F7F3EA')}
    <!-- wing -->
    ${eo('M30.6 31.4 c5.4 -0.8 10.4 1.8 12.6 6.4 -4.8 1.2 -9.6 3.6 -13.4 7 z', fill)}
    <!-- legs -->
    ${st('M27 49.4 L25.4 58.4', fill, 3.6)}
    ${st('M33.4 48.6 L32.6 58.4', fill, 3.6)}
    ${f('M20.2 57.6 h6.2 v3.4 h-6.2 z M28.4 57.6 h6.2 v3.4 h-6.2 z', fill)}
  `,

  // Sprinter-style tour van ---------------------------------------------------
  van: (fill) => `
    ${eo(
      // body
      'M3.2 41 V 24.6 c0 -3 2.4 -5.4 5.4 -5.4 h13.2 l6.6 -5.4 h24.8 c3 0 5.4 2.4 5.4 5.4 v21.8 c0 3 -2.4 5.4 -5.4 5.4 H8.6 c-3 0 -5.4 -2.4 -5.4 -5.4 z' +
      // windscreen
      ' M9.2 23.6 h13.6 v9.2 H9.2 z' +
      // side glazing
      ' M26.6 18.6 h11.6 v14.2 H26.6 z M41.8 18.6 h13.6 v14.2 H41.8 z',
      fill
    )}
    <!-- wheels -->
    ${eo('M17 41 a6.6 6.6 0 1 1 0 13.2 a6.6 6.6 0 0 1 0 -13.2 z M17 44.2 a3.4 3.4 0 1 0 0 6.8 a3.4 3.4 0 0 0 0 -6.8 z', fill)}
    ${eo('M48.4 41 a6.6 6.6 0 1 1 0 13.2 a6.6 6.6 0 0 1 0 -13.2 z M48.4 44.2 a3.4 3.4 0 1 0 0 6.8 a3.4 3.4 0 0 0 0 -6.8 z', fill)}
    <!-- headlight, bumper, mirror -->
    ${f('M3.2 33.4 h4.4 v3.4 H3.2 z', fill)}
    ${f('M3.2 37.6 h7.2 v2.8 H3.2 z', fill)}
    ${f('M9.2 20.2 h4.6 v2.4 H9.2 z', fill)}
    <!-- sliding-door seam -->
    ${f('M26.4 33.2 h1.8 v7.2 h-1.8 z', fill)}
  `,

  // Nile cruise boat ----------------------------------------------------------
  boat: (fill) => `
    <!-- sun deck -->
    ${f('M18.6 10.4 h13.4 a2 2 0 0 1 2 2 v2.8 h-15.4 z', fill)}
    <!-- cabin with glazing cut out -->
    ${eo('M14.4 17.4 h25.4 a2 2 0 0 1 2 2 v5.2 H14.4 z M18.4 20.2 h6 v4.4 h-6 z M27.2 20.2 h6 v4.4 h-6 z', fill)}
    <!-- upper promenade deck -->
    ${f('M10.6 26.6 h35.4 a2 2 0 0 1 2 2 v3.4 H10.6 z', fill)}
    <!-- hull -->
    ${f('M4.6 34.4 h55 c1 0 1.8 .9 1.6 1.9 l-1.9 8.6 c-.5 2.4 -2.6 4.2 -5.1 4.2 H11.9 c-2.5 0 -4.6 -1.8 -5.1 -4.2 l-1.9 -8.6 c-.2 -1 .6 -1.9 1.7 -1.9 z', fill)}
    ${eo('M15.4 38.6 a2.2 2.2 0 1 1 0 4.4 a2.2 2.2 0 0 1 0 -4.4 z M25.4 38.6 a2.2 2.2 0 1 1 0 4.4 a2.2 2.2 0 0 1 0 -4.4 z M35.4 38.6 a2.2 2.2 0 1 1 0 4.4 a2.2 2.2 0 0 1 0 -4.4 z M45.4 38.6 a2.2 2.2 0 1 1 0 4.4 a2.2 2.2 0 0 1 0 -4.4 z', fill)}
    ${f(WATER(52.6), fill)}
  `,
};

function iconSVG(name, { x, y, size, fill = '#C87A18', opacity = 1 }) {
  const body = ICONS[name];
  if (!body) throw new Error('unknown icon: ' + name);
  return `<svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="0 0 64 64" opacity="${opacity}">${body(fill)}</svg>`;
}

module.exports = { ICONS, iconSVG };
