const sharp = require('sharp');
const fs = require('fs');

async function buildAtmosphericPanoramic(inputPath, outputPaths) {
  const canvasW = 1376;
  const canvasH = 768;

  // 1. Create the blurred ambient background spanning the entire canvas
  const ambientBg = await sharp(inputPath)
    .resize(canvasW, canvasH, { fit: 'cover', position: 'center' })
    .blur(36)
    .modulate({ brightness: 0.65, saturation: 0.9 })
    .toBuffer();

  // 2. Prepare the crisp foreground subject for the right 55%
  const subjH = 720;
  const rawMeta = await sharp(inputPath).metadata();
  const subjW = Math.round((rawMeta.width / rawMeta.height) * subjH);

  const subjectResized = await sharp(inputPath)
    .resize(subjW, subjH, { fit: 'inside' })
    .sharpen({ sigma: 1.0, m1: 1.0, m2: 1.5 })
    .toBuffer();
  
  const subjMeta = await sharp(subjectResized).metadata();

  // Create feather alpha mask for the left edge of the subject
  const fadeW = 180;
  const fadePercent = ((fadeW / subjMeta.width) * 100).toFixed(1);
  const maskSvg = Buffer.from(
    `<svg width="${subjMeta.width}" height="${subjMeta.height}">
      <defs>
        <linearGradient id="fade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="white" stop-opacity="0"/>
          <stop offset="${fadePercent}%" stop-color="white" stop-opacity="1"/>
          <stop offset="100%" stop-color="white" stop-opacity="1"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#fade)"/>
    </svg>`
  );

  const maskPng = await sharp(maskSvg).png().toBuffer();

  const subjectFaded = await sharp(subjectResized)
    .ensureAlpha()
    .composite([{ input: maskPng, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Position subject on the right side with 20px right margin
  const subjLeft = Math.max(0, canvasW - subjMeta.width - 20);
  const subjTop = Math.round((canvasH - subjMeta.height) / 2);

  // Soft contrast vignette on the left 45% for effortless text readability
  const vignetteSvg = Buffer.from(
    `<svg width="${canvasW}" height="${canvasH}">
      <defs>
        <linearGradient id="vignette" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#020510" stop-opacity="0.80"/>
          <stop offset="35%" stop-color="#020510" stop-opacity="0.65"/>
          <stop offset="65%" stop-color="#020510" stop-opacity="0.20"/>
          <stop offset="100%" stop-color="#020510" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#vignette)"/>
    </svg>`
  );

  const vignettePng = await sharp(vignetteSvg).png().toBuffer();

  const result = await sharp(ambientBg)
    .composite([
      { input: subjectFaded, left: subjLeft, top: subjTop },
      { input: vignettePng, left: 0, top: 0 }
    ])
    .jpeg({ quality: 92 })
    .toBuffer();

  for (const p of outputPaths) {
    fs.writeFileSync(p, result);
    console.log('Successfully wrote:', p);
  }
}

const tasks = [
  {
    name: 'erp-transformation',
    input: 'C:/Users/Admin/.gemini/antigravity/brain/891b8fa0-ce80-404d-8752-ccffbfb7e0cd/.user_uploaded/media_1793881081220_f0bbc66e.jpg',
    targets: [
      'public/images/erp_transformation_hero.jpg',
      'public/images/erp_transformation_hero.png',
      'public/images/solutions/nextgen_erp_transformation.jpg'
    ]
  },
  {
    name: 'sap-finance',
    input: 'C:/Users/Admin/.gemini/antigravity/brain/891b8fa0-ce80-404d-8752-ccffbfb7e0cd/.user_uploaded/media_1793881270083_445feef2.jpg',
    targets: [
      'public/images/sap_app_finance_3d_clean.jpg',
      'public/images/solutions/autonomous_financial_management.jpg'
    ]
  },
  {
    name: 'sap-human-capital',
    input: 'C:/Users/Admin/.gemini/antigravity/brain/891b8fa0-ce80-404d-8752-ccffbfb7e0cd/.user_uploaded/media_1793881331440_9309c073.jpg',
    targets: [
      'public/images/sap_app_humancapital_3d_clean.jpg',
      'public/images/solutions/intelligent_people_management.jpg'
    ]
  },
  {
    name: 'sap-btp',
    input: 'C:/Users/Admin/.gemini/antigravity/brain/891b8fa0-ce80-404d-8752-ccffbfb7e0cd/.user_uploaded/media_1793881433571_b503e46a.jpg',
    targets: [
      'public/images/sap_btp_hero_team_handshake.jpg',
      'public/images/sap_btp_hero_team_handshake.png',
      'public/images/solutions/sap_btp_enterprise_agility.jpg'
    ]
  },
  {
    name: 'cloud-op-model',
    input: 'C:/Users/Admin/.gemini/antigravity/brain/891b8fa0-ce80-404d-8752-ccffbfb7e0cd/.user_uploaded/media_1793884353572_289a3c68.jpg',
    targets: [
      'public/images/cloud/cloud_op_model_hero.jpg',
      'public/images/cloud/cloud_op_model_hero.png',
      'public/images/solutions/cloud_operating_model_enterprise.jpg'
    ]
  },
  {
    name: 'sap-supply-chain',
    input: 'public/images/sap_app_supplychain_3d.jpg',
    targets: [
      'public/images/sap_app_supplychain_3d_clean.jpg'
    ]
  }
];

async function run() {
  for (const t of tasks) {
    if (fs.existsSync(t.input)) {
      console.log('Processing:', t.name);
      await buildAtmosphericPanoramic(t.input, t.targets);
    } else {
      console.warn('File not found for:', t.name, t.input);
    }
  }
  console.log('All atmospheric panoramic heroes successfully built!');
}

run().catch(console.error);

