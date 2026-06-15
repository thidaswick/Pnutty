const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "public", "images");
fs.mkdirSync(dir, { recursive: true });

const pngBase64 =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";
const buffer = Buffer.from(pngBase64, "base64");

const files = [
  "pnutty-logo.png",
  "classic-crunchy.png",
  "choco-crunchy.png",
  "choco-creamy.png",
  "classic-creamy.png",
  "yellow-pattern-background.png",
  "purple-pattern-background.png",
  "green-pattern-background.png",
  "blue-pattern-background.png",
  "pink-pattern-background.png",
  "cream-background.png",
  "chocolate-brown-background.png",
];

files.forEach((file) => {
  fs.writeFileSync(path.join(dir, file), buffer);
});

console.log(`Created ${files.length} placeholder PNG files in public/images/`);
