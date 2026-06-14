const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const pngToIco = require('png-to-ico');

async function generate() {
  const srcSvg = path.join(__dirname, '..', 'public', 'images', 'file.svg');
  const outSvg = path.join(__dirname, '..', 'public', 'icon.svg');

  if (!fs.existsSync(srcSvg)) {
    console.error('Source SVG not found:', srcSvg);
    process.exit(1);
  }

  // copy svg to public/icon.svg
  fs.copyFileSync(srcSvg, outSvg);
  console.log('Copied SVG to', outSvg);

  const outDir = path.join(__dirname, '..', 'public');

  // generate PNG sizes
  const sizes = [32, 48, 180, 192, 256, 512];
  for (const s of sizes) {
    const out = path.join(outDir, `icon-${s}.png`);
    await sharp(srcSvg).resize(s, s).png().toFile(out);
    console.log('Wrote', out);
  }

  // create apple touch icon (180)
  const apple = path.join(outDir, 'apple-touch-icon.png');
  fs.copyFileSync(path.join(outDir, 'icon-180.png'), apple);
  console.log('Wrote', apple);

  // create favicon.ico by embedding a single PNG (256x256) into ICO structure
  const icoOut = path.join(outDir, 'favicon.ico');
  try {
    const png256 = fs.readFileSync(path.join(outDir, 'icon-256.png'));
    const pngLen = png256.length;
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // type 1 = icon
    header.writeUInt16LE(1, 4); // count

    const entry = Buffer.alloc(16);
    entry.writeUInt8(0, 0); // width 0 => 256
    entry.writeUInt8(0, 1); // height 0 => 256
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bitcount
    entry.writeUInt32LE(pngLen, 8); // bytes in resource
    entry.writeUInt32LE(header.length + entry.length, 12); // offset

    const icoBuffer = Buffer.concat([header, entry, png256]);
    fs.writeFileSync(icoOut, icoBuffer);
    console.log('Wrote', icoOut);
  } catch (err) {
    console.error('Failed to create favicon.ico:', err);
  }

  console.log('Icon generation complete.');
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
