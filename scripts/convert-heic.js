const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadsDir = path.join(__dirname, '..', 'public', 'lovable-uploads');

async function convertFile(file) {
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, path.extname(file));
  if (ext !== '.heic') return;
  const input = path.join(uploadsDir, file);
  const output = path.join(uploadsDir, base + '.webp');
  try {
    await sharp(input).toFormat('webp').toFile(output);
    console.log(`Converted: ${file} -> ${base}.webp`);
  } catch (err) {
    console.error(`Failed: ${file}:`, err.message || err);
  }
}

async function main() {
  try {
    const files = fs.readdirSync(uploadsDir);
    const heics = files.filter(f => ['.heic', '.HEIC'].includes(path.extname(f)));
    if (!heics.length) {
      console.log('No HEIC files found in', uploadsDir);
      return;
    }
    for (const f of heics) {
      await convertFile(f);
    }
    console.log('Done.');
  } catch (err) {
    console.error('Error reading uploads directory:', err.message || err);
  }
}

main();
