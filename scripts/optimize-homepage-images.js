const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "public");

async function optimize(relIn, opts) {
  const input = path.join(root, relIn);
  if (!fs.existsSync(input)) {
    console.log("SKIP missing", relIn);
    return;
  }

  const before = fs.statSync(input).size;
  const { maxW, maxH, format, quality = 78, outRel } = opts;
  const out = path.join(root, outRel || relIn);
  const meta = await sharp(input).metadata();

  let pipeline = sharp(input).rotate();
  const needResize =
    (maxW && meta.width > maxW) || (maxH && meta.height > maxH);
  if (needResize) {
    pipeline = pipeline.resize({
      width: maxW,
      height: maxH,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  let buffer;
  if (format === "jpeg") {
    buffer = await pipeline.jpeg({ quality, mozjpeg: true }).toBuffer();
  } else if (format === "png") {
    buffer = await pipeline.png({ compressionLevel: 9, quality: 80 }).toBuffer();
  } else if (format === "webp") {
    buffer = await pipeline.webp({ quality }).toBuffer();
  }

  const tmpOut = out + ".new";
  fs.writeFileSync(tmpOut, buffer);
  try {
    fs.copyFileSync(tmpOut, out);
    fs.unlinkSync(tmpOut);
  } catch (err) {
    // Windows file lock (e.g. Next.js serving the image): keep .new and swap via shell later
    console.warn(
      `Locked write for ${outRel || relIn}; left as ${path.basename(tmpOut)} (${err.code})`
    );
  }

  if (
    outRel &&
    outRel !== relIn &&
    fs.existsSync(input) &&
    path.resolve(input) !== path.resolve(out)
  ) {
    try {
      fs.unlinkSync(input);
    } catch (err) {
      console.warn("Could not remove original", relIn, err.code);
    }
  }

  const after = fs.statSync(out).size;
  console.log(
    `${relIn} -> ${outRel || relIn}: ${(before / 1024).toFixed(0)}KB -> ${(
      after / 1024
    ).toFixed(0)}KB (${meta.width}x${meta.height})`
  );
}

(async () => {
  await optimize("logo.png", { maxW: 400, maxH: 400, format: "png" });

  await optimize("section1.png", {
    maxW: 1400,
    format: "jpeg",
    quality: 78,
    outRel: "section1.jpg",
  });
  await optimize("about-primary.png", {
    maxW: 1200,
    format: "jpeg",
    quality: 78,
    outRel: "about-primary.jpg",
  });
  await optimize("eye.png", {
    maxW: 1000,
    format: "jpeg",
    quality: 78,
    outRel: "eye.jpg",
  });
  await optimize("prosthetic.png", {
    maxW: 1000,
    format: "jpeg",
    quality: 78,
    outRel: "prosthetic.jpg",
  });
  await optimize("thumbnail1.png", {
    maxW: 1200,
    format: "jpeg",
    quality: 78,
    outRel: "thumbnail1.jpg",
  });
  await optimize("cons/1.png", {
    maxW: 1200,
    format: "jpeg",
    quality: 78,
    outRel: "cons/1.jpg",
  });
  await optimize("cons/2.png", {
    maxW: 1200,
    format: "jpeg",
    quality: 78,
    outRel: "cons/2.jpg",
  });

  await optimize("about1.jpg", { maxW: 1200, format: "jpeg", quality: 78 });
  await optimize("about2.jpg", { maxW: 1200, format: "jpeg", quality: 78 });
  await optimize("facilities/dental.jpg", {
    maxW: 1000,
    format: "jpeg",
    quality: 75,
  });
  await optimize("cons/4.jpg", { maxW: 1000, format: "jpeg", quality: 75 });
  await optimize("cons/5.jpg", { maxW: 1000, format: "jpeg", quality: 75 });

  // Normalize cons/8.JPG casing for web
  const cons8Upper = path.join(root, "cons", "8.JPG");
  const cons8Lower = path.join(root, "cons", "8.jpg");
  if (fs.existsSync(cons8Upper)) {
    await optimize("cons/8.JPG", {
      maxW: 1000,
      format: "jpeg",
      quality: 75,
      outRel: "cons/8.jpg",
    });
  } else if (fs.existsSync(cons8Lower)) {
    await optimize("cons/8.jpg", { maxW: 1000, format: "jpeg", quality: 75 });
  }

  const extras = [
    "facilities/ambulance.jpg",
    "facilities/outdoor.jpg",
    "facilities/visiting.jpg",
    "facilities/pathology.jpg",
    "cons/3.jpg",
    "cons/6.jpg",
    "cons/7.jpg",
  ];
  for (const f of extras) {
    const p = path.join(root, f);
    if (!fs.existsSync(p)) continue;
    if (fs.statSync(p).size > 180 * 1024) {
      await optimize(f, { maxW: 1000, format: "jpeg", quality: 75 });
    }
  }

  console.log("DONE");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
