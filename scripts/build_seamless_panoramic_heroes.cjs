const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const userUploadDir = 'C:/Users/Admin/.gemini/antigravity/brain/891b8fa0-ce80-404d-8752-ccffbfb7e0cd/.user_uploaded/';

const heroTasks = [
  {
    name: 'sap-s4hana',
    input: 'media_1793881041038_bef9fcde.jpg',
    targets: [
      'public/images/sap_s4hana_transformation_hero.png',
      'public/images/sap_s4hana_transformation_hero.jpg',
      'public/images/solutions/sap_s4hana_enterprise_transformation.jpg'
    ],
    // Deep dark night navy background
    bgColor: '#020510',
    glowColor: '#00255a',
    cleanEduvogue: true,
    // Horizontal position preference: right side
    rightMargin: 40,
    maxHeight: 740, // out of 800
    fadeWidth: 180
  },
  {
    name: 'erp-transformation',
    input: 'media_1793881081220_f0bbc66e.jpg',
    targets: [
      'public/images/erp_transformation_hero.png',
      'public/images/erp_transformation_hero.jpg',
      'public/images/solutions/nextgen_erp_transformation.jpg'
    ],
    bgColor: '#040712',
    glowColor: '#081735',
    rightMargin: 30,
    maxHeight: 740,
    fadeWidth: 180
  },
  {
    name: 'sap-digital-core',
    input: 'media_1793881243534_006af914.jpg',
    targets: [
      'public/images/sap_app_s4hana_3d_clean.jpg',
      'public/images/solutions/autonomous_digital_core.jpg'
    ],
    bgColor: '#050716',
    glowColor: '#0a1a3a',
    rightMargin: 30,
    maxHeight: 740,
    fadeWidth: 180
  },
  {
    name: 'sap-finance',
    input: 'media_1793881270083_445feef2.jpg',
    targets: [
      'public/images/sap_app_finance_3d_clean.jpg',
      'public/images/solutions/autonomous_financial_management.jpg'
    ],
    bgColor: '#040816',
    glowColor: '#081b38',
    rightMargin: 30,
    maxHeight: 740,
    fadeWidth: 180
  },
  {
    name: 'sap-human-capital',
    input: 'media_1793881331440_9309c073.jpg',
    targets: [
      'public/images/sap_app_humancapital_3d_clean.jpg',
      'public/images/solutions/intelligent_people_management.jpg'
    ],
    bgColor: '#030814',
    glowColor: '#0a1a36',
    rightMargin: 30,
    maxHeight: 740,
    fadeWidth: 180
  },
  {
    name: 'sap-cx-commerce',
    input: 'media_1793881403056_1baaa02f.jpg',
    targets: [
      'public/images/sap_app_cx_3d_clean.jpg',
      'public/images/sap_app_cx_3d.jpg',
      'public/images/solutions/composable_omnichannel_commerce.jpg'
    ],
    bgColor: '#030408',
    glowColor: '#081426',
    cleanNonameGlobal: true,
    rightMargin: 30,
    maxHeight: 740,
    fadeWidth: 180
  },
  {
    name: 'sap-btp',
    input: 'media_1793881433571_b503e46a.jpg',
    targets: [
      'public/images/sap_btp_hero_team_handshake.png',
      'public/images/sap_btp_hero_team_handshake.jpg',
      'public/images/solutions/sap_btp_enterprise_agility.jpg'
    ],
    bgColor: '#030714',
    glowColor: '#061730',
    rightMargin: 30,
    maxHeight: 740,
    fadeWidth: 180
  },
  {
    name: 'sap-integration-suite',
    input: 'media_1793884022536_2ee52927.jpg',
    targets: [
      'public/images/sap_integration_suite_ipaas_event_mesh.png',
      'public/images/sap_integration_suite_ipaas_event_mesh.jpg',
      'public/images/solutions/sap_integration_suite_event_mesh.jpg'
    ],
    bgColor: '#030612',
    glowColor: '#06142a',
    rightMargin: 30,
    maxHeight: 740,
    fadeWidth: 180
  },
  {
    name: 'sap-datasphere',
    input: 'media_1793884061777_5d7dba91.jpg',
    targets: [
      'public/images/sap_datasphere_boardroom_analytics.png',
      'public/images/sap_datasphere_boardroom_analytics.jpg',
      'public/images/solutions/sap_datasphere_unify_data.jpg'
    ],
    bgColor: '#02050e',
    glowColor: '#051428',
    rightMargin: 30,
    maxHeight: 740,
    fadeWidth: 180
  },
  {
    name: 'sap-assessment',
    input: 'media_1793884093336_2b4fa48d.jpg',
    targets: [
      'public/images/assessment/sap-assessment-hero.jpg',
      'public/images/assessment/sap-assessment-hero.png',
      'public/images/solutions/sap_assessment_hero.jpg'
    ],
    bgColor: '#020616',
    glowColor: '#002555',
    rightMargin: 30,
    maxHeight: 740,
    fadeWidth: 180
  },
  {
    name: 'cloud-strategy',
    input: 'media_1793884116109_52416b29.jpg',
    targets: [
      'public/images/cloud/strategy_hero.jpg',
      'public/images/cloud/strategy_hero.png',
      'public/images/solutions/cloud_strategy_plan_smarter.jpg'
    ],
    bgColor: '#030714',
    glowColor: '#061935',
    rightMargin: 30,
    maxHeight: 740,
    fadeWidth: 180
  },
  {
    name: 'cloud-adoption',
    input: 'media_1793884281789_8438d237.jpg',
    targets: [
      'public/images/cloud/cloud_adoption_hero.jpg',
      'public/images/cloud/cloud_adoption_hero.png',
      'public/images/solutions/cloud_adoption_confidence.jpg'
    ],
    bgColor: '#020614',
    glowColor: '#041630',
    rightMargin: 30,
    maxHeight: 740,
    fadeWidth: 180
  },
  {
    name: 'cloud-op-model',
    input: 'media_1793884353572_289a3c68.jpg',
    targets: [
      'public/images/cloud/cloud_op_model_hero.jpg',
      'public/images/cloud/cloud_op_model_hero.png',
      'public/images/solutions/cloud_operating_model_enterprise.jpg'
    ],
    bgColor: '#030814',
    glowColor: '#051832',
    rightMargin: 30,
    maxHeight: 740,
    fadeWidth: 180
  },
  {
    name: 'public-cloud',
    input: 'media_1793884373558_e2313848.jpg',
    targets: [
      'public/images/cloud/public_cloud_hero.jpg',
      'public/images/cloud/public_cloud_hero.png',
      'public/images/solutions/public_cloud_business_orchestration.jpg'
    ],
    bgColor: '#030712',
    glowColor: '#05162a',
    rightMargin: 30,
    maxHeight: 740,
    fadeWidth: 180
  },
  {
    name: 'sap-supply-chain',
    input: 'media_1793881243534_006af914.jpg',
    targets: [
      'public/images/sap_app_supplychain_3d_clean.jpg'
    ],
    bgColor: '#040716',
    glowColor: '#0a1a3a',
    rightMargin: 30,
    maxHeight: 740,
    fadeWidth: 180
  }
];

async function createPanoramicHero(t) {
  const inputPath = path.join(userUploadDir, t.input);
  if (!fs.existsSync(inputPath)) {
    console.warn(`Input file not found: ${inputPath}`);
    return;
  }

  // Target cinematic canvas: 1920 x 800 (widescreen 2.4:1 ratio matching enterprise hero sections)
  const canvasW = 1920;
  const canvasH = 800;

  let img = sharp(inputPath);
  let meta = await img.metadata();

  // Watermark removal
  if (t.cleanEduvogue) {
    // Logo is at top-right x: 530-730, y: 0-90 in 736x592
    // Clone genuine starry night sky patch from x: 180, y: 0 (width: 240, height: 95)
    const patchW = 240;
    const patchH = 95;
    const skyPatch = await sharp(inputPath)
      .extract({ left: 180, top: 0, width: patchW, height: patchH })
      .toBuffer();

    const cleanedBuf = await img
      .composite([{ input: skyPatch, left: meta.width - patchW, top: 0 }])
      .toBuffer();
    img = sharp(cleanedBuf);
  }

  if (t.cleanNonameGlobal) {
    // Cut bottom 46px to remove website footer bar
    const cutH = meta.height - 46;
    // Cover small leaf logo at top-left 70x70 with dark suit tone
    const leafPatch = `<svg width="80" height="80"><rect width="80" height="80" fill="#030408" /></svg>`;
    const trimmedBuf = await img
      .extract({ left: 0, top: 0, width: meta.width, height: cutH })
      .composite([{ input: Buffer.from(leafPatch), top: 0, left: 0 }])
      .toBuffer();
    img = sharp(trimmedBuf);
    meta = await img.metadata();
  }

  // Scale subject to fit within max width 1050px (strictly right 55% of the 1920px canvas)
  // and max height t.maxHeight (e.g. 740px), leaving safe padding at top & bottom so 0 pixels are ever cut off!
  const maxW = 1050;
  const maxH = t.maxHeight || 740;
  const scale = Math.min(maxW / meta.width, maxH / meta.height);
  const targetW = Math.round(meta.width * scale);
  const targetH = Math.round(meta.height * scale);

  const resizedBuf = await img
    .resize(targetW, targetH, {
      kernel: 'lanczos3',
      fit: 'fill'
    })
    .sharpen({ sigma: 1.0, m1: 1.0, m2: 2.0 })
    .ensureAlpha()
    .toBuffer();

  // Feather-fade the left edge smoothly into the background canvas
  // The fade begins at 0% and reaches 100% opacity over fadeW pixels
  const fadeW = Math.min(t.fadeWidth || 180, Math.floor(targetW * 0.25));
  const maskSvg = `
    <svg width="${targetW}" height="${targetH}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="leftFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="white" stop-opacity="0" />
          <stop offset="${((fadeW / targetW) * 100).toFixed(2)}%" stop-color="white" stop-opacity="1" />
          <stop offset="100%" stop-color="white" stop-opacity="1" />
        </linearGradient>
      </defs>
      <rect width="${targetW}" height="${targetH}" fill="url(#leftFade)" />
    </svg>
  `;

  const maskedSubject = await sharp(resizedBuf)
    .composite([{ input: Buffer.from(maskSvg), blend: 'dest-in' }])
    .toBuffer();

  // Position: vertically centered, horizontally aligned to the right with t.rightMargin padding
  const posX = canvasW - targetW - (t.rightMargin || 30);
  const posY = Math.round((canvasH - targetH) / 2);

  // Background atmosphere SVG:
  // - Base solid dark tone: #02040a
  // - Radial glow centered right on the subject at cx="70%" cy="50%"
  // - Linear gradient from left to right ensuring left side (x: 0 to ~850px) is clean and dark for text legibility
  const bgSvg = `
    <svg width="${canvasW}" height="${canvasH}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="subjectGlow" cx="72%" cy="50%" r="55%">
          <stop offset="0%" stop-color="${t.glowColor}" stop-opacity="0.9" />
          <stop offset="45%" stop-color="${t.bgColor}" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#02040a" stop-opacity="1" />
        </radialGradient>
        <linearGradient id="textBackdrop" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#02040a" stop-opacity="1" />
          <stop offset="42%" stop-color="#02040a" stop-opacity="0.95" />
          <stop offset="65%" stop-color="#02040a" stop-opacity="0.5" />
          <stop offset="100%" stop-color="#02040a" stop-opacity="0" />
        </linearGradient>
      </defs>
      <rect width="${canvasW}" height="${canvasH}" fill="#02040a" />
      <rect width="${canvasW}" height="${canvasH}" fill="url(#subjectGlow)" />
      <rect width="${canvasW}" height="${canvasH}" fill="url(#textBackdrop)" />
    </svg>
  `;

  const finalJpg = await sharp(Buffer.from(bgSvg))
    .composite([{ input: maskedSubject, left: posX, top: posY }])
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toBuffer();

  const finalPng = await sharp(Buffer.from(bgSvg))
    .composite([{ input: maskedSubject, left: posX, top: posY }])
    .png({ quality: 95 })
    .toBuffer();

  for (const relTarget of t.targets) {
    const fullTarget = path.resolve(relTarget);
    const dir = path.dirname(fullTarget);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const isPng = relTarget.endsWith('.png');
    fs.writeFileSync(fullTarget, isPng ? finalPng : finalJpg);
    console.log(`[${t.name}] Created panoramic widescreen -> ${relTarget} (${targetW}x${targetH} placed at ${posX},${posY})`);
  }
}

async function run() {
  for (const t of heroTasks) {
    try {
      await createPanoramicHero(t);
    } catch (err) {
      console.error(`Failed ${t.name}:`, err);
    }
  }
  console.log('All panoramic widescreen images built successfully!');
}

run();

