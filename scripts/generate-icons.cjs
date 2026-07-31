const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return ~c >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const typeBuf = Buffer.from(type);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function rgbaPng(size, paint) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  const stride = size * 4 + 1;
  const raw = Buffer.alloc(stride * size);
  for (let y = 0; y < size; y++) {
    raw[y * stride] = 0;
    for (let x = 0; x < size; x++) {
      const [r, g, b, a] = paint(x, y, size);
      const i = y * stride + 1 + x * 4;
      raw[i] = r;
      raw[i + 1] = g;
      raw[i + 2] = b;
      raw[i + 3] = a;
    }
  }
  const idat = zlib.deflateSync(raw);
  return Buffer.concat([
    signature,
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function roundedRect(x, y, size, radius) {
  const nx = Math.max(x, size - 1 - x);
  const ny = Math.max(y, size - 1 - y);
  if (nx >= radius && ny >= radius) return true;
  const dx = radius - nx;
  const dy = radius - ny;
  return dx * dx + dy * dy <= radius * radius;
}

function distToSegment(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len2 = dx * dx + dy * dy || 1;
  let t = ((px - x1) * dx + (py - y1) * dy) / len2;
  t = Math.max(0, Math.min(1, t));
  const cx = x1 + t * dx;
  const cy = y1 + t * dy;
  return Math.hypot(px - cx, py - cy);
}

function brandIcon(size) {
  const radius = Math.floor(size * 0.22);
  const stroke = Math.max(2, Math.round(size * 0.07));
  return rgbaPng(size, (x, y, s) => {
    if (!roundedRect(x, y, s, radius)) return [0, 0, 0, 0];
    // navy background
    let r = 15;
    let g = 39;
    let b = 68;
    const peak = distToSegment(x, y, s * 0.2, s * 0.72, s * 0.5, s * 0.22);
    const peak2 = distToSegment(x, y, s * 0.5, s * 0.22, s * 0.8, s * 0.72);
    if (peak <= stroke || peak2 <= stroke) {
      r = 255;
      g = 255;
      b = 255;
    }
    const base = distToSegment(x, y, s * 0.32, s * 0.72, s * 0.68, s * 0.72);
    if (base <= stroke) {
      r = 59;
      g = 130;
      b = 246;
    }
    const dx = x - s * 0.5;
    const dy = y - s * 0.44;
    if (Math.hypot(dx, dy) <= s * 0.05) {
      r = 245;
      g = 158;
      b = 11;
    }
    return [r, g, b, 255];
  });
}

function ogImage() {
  const width = 1200;
  const height = 630;
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 2;
  const stride = width * 3 + 1;
  const raw = Buffer.alloc(stride * height);
  for (let y = 0; y < height; y++) {
    raw[y * stride] = 0;
    for (let x = 0; x < width; x++) {
      const i = y * stride + 1 + x * 3;
      const t = x / width;
      raw[i] = Math.round(248 - t * 18);
      raw[i + 1] = Math.round(249 - t * 12);
      raw[i + 2] = Math.round(251 - y / height * 20);
      if (x > 80 && x < 160 && y > 220 && y < 300) {
        raw[i] = 15;
        raw[i + 1] = 39;
        raw[i + 2] = 68;
      }
      if (x > 180 && x < 520 && y > 250 && y < 270) {
        raw[i] = 37;
        raw[i + 1] = 99;
        raw[i + 2] = 235;
      }
    }
  }
  const idat = zlib.deflateSync(raw);
  return Buffer.concat([
    signature,
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

const dir = path.join("public", "icons");
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, "icon-32.png"), brandIcon(32));
fs.writeFileSync(path.join(dir, "icon-192.png"), brandIcon(192));
fs.writeFileSync(path.join(dir, "apple-touch-icon.png"), brandIcon(180));
fs.writeFileSync(path.join(dir, "og-default.png"), ogImage());
fs.copyFileSync("src/app/favicon.ico", path.join(dir, "favicon.ico"));
fs.writeFileSync(
  path.join(dir, "icon.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#0F2744"/><path d="M6 22 L16 6 L26 22" stroke="white" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M10.5 22 H21.5" stroke="#3B82F6" stroke-width="2.2" stroke-linecap="round"/><circle cx="16" cy="14" r="1.6" fill="#F59E0B"/></svg>`,
);
process.stdout.write("icons ok\n");
