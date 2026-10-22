const fs = require('fs');
const path = require('path');
const { Resvg } = require('@resvg/resvg-js');
const { buildSVG, FONT_FILES } = require('./poster.js');

const outDir = path.join(__dirname, '..', 'dist');
fs.mkdirSync(outDir, { recursive: true });

const svg = buildSVG();
fs.writeFileSync(path.join(outDir, 'jinja-getaway.svg'), svg);

function render(zoom, name) {
  const r = new Resvg(svg, {
    fitTo: { mode: 'zoom', value: zoom },
    font: { fontFiles: FONT_FILES, loadSystemFonts: false, defaultFontFamily: 'Montserrat 500' },
    background: '#F7F3E7',
  });
  const png = r.render().asPng();
  fs.writeFileSync(path.join(outDir, name), png);
  const { width, height } = r.render();
  console.log(`${name}  ${width}x${height}  ${(png.length / 1e6).toFixed(2)} MB`);
}

render(1, 'preview.png');                            // quick look
render(2, 'jinja-getaway-poster.png');               // 2160x2880 social/share
render(3508 / 1440, 'jinja-getaway-poster-print.png'); // 2624x3508 = 300 dpi A4
