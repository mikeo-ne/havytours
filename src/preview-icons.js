const { iconSVG, ICONS } = require('./icons.js');
const { Resvg } = require('@resvg/resvg-js');
const fs = require('fs');
const names = Object.keys(ICONS);
let s = '<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="480"><rect width="1080" height="480" fill="#F7F3EA"/>';
names.forEach((n, i) => {
  const cx = 90 + (i % 3) * 340, cy = 130 + Math.floor(i / 3) * 230;
  s += iconSVG(n, { x: cx - 70, y: cy - 70, size: 140, fill: '#C87A18' });
  s += `<text x="${cx}" y="${cy + 112}" font-family="Montserrat" font-size="20" fill="#0E3121" text-anchor="middle">${n}</text>`;
});
s += '</svg>';
const r = new Resvg(s, { font: { fontFiles: ['fonts/Montserrat-600.ttf'], loadSystemFonts: false, defaultFontFamily: 'Montserrat' } });
fs.writeFileSync('/tmp/icons.png', r.render().asPng());
console.log('ok');
