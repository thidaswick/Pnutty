const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "..", "assets", "img");
const dstDir = path.join(__dirname, "..", "public", "images");

const renameMap = {
  "Pnutty-logo.jpg": "pnutty-logo.jpg",
  "Pnutty-variations.jpg": "pnutty-variations.jpg",
  "classic_cruncy-removebg-preview.png": "classic-crunchy.png",
  "classic_creamy-removebg-preview.png": "classic-creamy.png",
  "choco_curncy-removebg-preview.png": "choco-crunchy.png",
  "choco_creamy-removebg-preview.png": "choco-creamy.png",
  "yellow_pattern_background.png": "yellow-pattern-background.png",
  "purple_pattern_background.png": "purple-pattern-background.png",
  "green_pattern_background.png": "green-pattern-background.png",
  "blue_pattern_background.png": "blue-pattern-background.png",
  "pink_pattern_background.png": "pink-pattern-background.png",
  "cream_plain_background_FDF4E3.png": "cream-background.png",
  "chocolate_brown_plain_background_5E2F11.png": "chocolate-brown-background.png",
  "p1.jpg": "p1.jpg",
  "v1.jpg": "v1.jpg",
  "v2.jpg": "v2.jpg",
  "v3.jpg": "v3.jpg",
  "v4.jpg": "v4.jpg",
};

fs.mkdirSync(dstDir, { recursive: true });

let copied = 0;
for (const [source, target] of Object.entries(renameMap)) {
  const from = path.join(srcDir, source);
  const to = path.join(dstDir, target);
  if (!fs.existsSync(from)) {
    console.warn(`Missing: ${source}`);
    continue;
  }
  fs.copyFileSync(from, to);
  copied++;
}

console.log(`Copied ${copied} brand assets to public/images/`);
