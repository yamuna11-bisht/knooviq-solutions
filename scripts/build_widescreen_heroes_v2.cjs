const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const userUploadDir = 'C:/Users/Admin/.gemini/antigravity/brain/891b8fa0-ce80-404d-8752-ccffbfb7e0cd/.user_uploaded/';

const tasks = [
  {
    name: 'sap-s4hana',
    input: 'media_1793881041038_bef9fcde.jpg',
    targets: [
      'public/images/sap_s4hana_transformation_hero.png',
      'public/images/sap_s4hana_transformation_hero.jpg',
      'public/images/solutions/sap_s4hana_enterprise_transformation.jpg'
    ],
    bg: '#010414',
    glowColor: '#00204d',
    cleanEduvogue: true
  },
  {
    name: 'erp-transformation',
    input: 'media_1793881081220_f0bbc66e.jpg',
    targets: [
      'public/images/erp_transformation_hero.png',
      'public/images/erp_transformation_hero.jpg',
      'public/images/solutions/nextgen_erp_transformation.jpg'
    ],
    bg: '#070b14',
    glowColor: '#0a172e'
  },
  {
    name: 'sap-digital-core',
    input: 'media_1793881243534_006af914.jpg',
    targets: [
      'public/images/sap_app_s4hana_3d_clean.jpg',
      'public/images/solutions/autonomous_digital_core.jpg'
    ],
    bg: '#030a16',
    glowColor: '#071c38'
  },
  {
    name: 'sap-finance',
    input: 'media_1793881270083_445feef2.jpg',
    targets: [
      'public/images/sap_app_finance_3d_clean.jpg',
      'public/images/solutions/autonomous_financial_management.jpg'
    ],
    bg: '#050c18',
    glowColor: '#071833'
  },
  {
    name: 'sap-human-capital',
    input: 'media_1793881331440_9309c073.jpg',
    targets: [
      'public/images/sap_app_humancapital_3d_clean.jpg',
      'public/images/solutions/intelligent_people_management.jpg'
    ],
    bg: '#040b17',
    glowColor: '#0c1a2e'
  },
  {
    name: 'sap-cx-commerce',
    input: 'media_1793881403056_1baaa02f.jpg',
    targets: [
      'public/images/sap_app_cx_3d_clean.jpg',
      'public/images/sap_app_cx_3d.jpg',
      'public/images/solutions/composable_omnichannel_commerce.jpg'
    ],
    bg: '#03050a',
    glowColor: '#0b1626',
    cleanNonameGlobal: true
  },
  {
    name: 'sap-btp',
    input: 'media_1793881433571_b503e46a.jpg',
    targets: [
      'public/images/sap_btp_hero_team_handshake.png',
      'public/images/sap_btp_hero_team_handshake.jpg',
      'public/images/solutions/sap_btp_enterprise_agility.jpg'
    ],
    bg: '#050a14',
    glowColor: '#08172c'
  },
  {
    name: 'sap-integration-suite',
    input: 'media_1793884022536_2ee52927.jpg',
    targets: [
      'public/images/sap_integration_suite_ipaas_event_mesh.png',
      'public/images/sap_integration_suite_ipaas_event_mesh.jpg',
      'public/images/solutions/sap_integration_suite_event_mesh.jpg'
    ],
    bg: '#050814',
    glowColor: '#0a1429'
  },
  {
    name: 'sap-datasphere',
    input: 'media_1793884061777_5d7dba91.jpg',
    targets: [
      'public/images/sap_datasphere_boardroom_analytics.png',
      'public/images/sap_datasphere_boardroom_analytics.jpg',
      'public/images/solutions/sap_datasphere_unify_data.jpg'
    ],
    bg: '#02050c',
    glowColor: '#051329'
  },
  {
    name: 'sap-assessment',
    input: 'media_1793884093336_2b4fa48d.jpg',
    targets: [
      'public/images/assessment/sap-assessment-hero.jpg',
      'public/images/assessment/sap-assessment-hero.png',
      'public/images/solutions/sap_assessment_hero.jpg'
    ],
    bg: '#02071a',
    glowColor: '#002660'
  },
  {
    name: 'cloud-strategy',
    input: 'media_1793884116109_52416b29.jpg',
    targets: [
      'public/images/cloud/strategy_hero.jpg',
      'public/images/cloud/strategy_hero.png',
      'public/images/solutions/cloud_strategy_plan_smarter.jpg'
    ],
    bg: '#030814',
    glowColor: '#041d3d'
  },
  {
    name: 'cloud-adoption',
    input: 'media_1793884281789_8438d237.jpg',
    targets: [
      'public/images/cloud/cloud_adoption_hero.jpg',
      'public/images/cloud/cloud_adoption_hero.png',
      'public/images/solutions/cloud_adoption_confidence.jpg'
    ],
    bg: '#020817',
    glowColor: '#031a3b'
  },
  {
    name: 'cloud-op-model',
    input: 'media_1793884353572_289a3c68.jpg',
    targets: [
      'public/images/cloud/cloud_op_model_hero.jpg',
      'public/images/cloud/cloud_op_model_hero.png',
      'public/images/solutions/cloud_operating_model_enterprise.jpg'
    ],
    bg: '#040b18',
    glowColor: '#071c36'
  },
  {
    name: 'public-cloud',
    input: 'media_1793884373558_e2313848.jpg',
    targets: [
      'public/images/cloud/public_cloud_hero.jpg',
      'public/images/cloud/public_cloud_hero.png',
      'public/images/solutions/public_cloud_business_orchestration.jpg'
    ],
    bg: '#050a14',
    glowColor: '#09182b'
  }
];

async function processHeroTask(t) {
  const inputPath = path.join(userUploadDir, t.input);
  if (!fs.existsSync(inputPath)) {
    console.warn(`Input not found: ${inputPath}`);
    return;
  }

  // High-resolution panoramic canvas (1920x800 - 2.4:1 aspect ratio)
  const canvasW = 1920;
  const canvasH = 800;

  let imgInstance = sharp(inputPath);
  let meta = await imgInstance.metadata();

  // Watermark removal if required
  if (t.cleanEduvogue) {
    // In media_1793881041038_bef9fcde.jpg, 'Eduvogue' logo is top-right ~220x80px
    const patchW = 240;
    const patchH = 90;
    const patchSvg = `<svg width="${patchW}" height="${patchH}"><rect width="${patchW}" height="${patchH}" fill="${t.bg}" /></svg>`;
    const cleanedBuf = await imgInstance
      .composite([{ input: Buffer.from(patchSvg), top: 0, left: meta.width - patchW }])
      .toBuffer();
    imgInstance = sharp(cleanedBuf);
  }

  if (t.cleanNonameGlobal) {
    // Remove bottom ~46px where 'www.nonameglobal.com' banner is located
    const cutH = meta.height - 48;
    // Also cover small leaf icon at top-left 70x70
    const leafPatch = `<svg width="80" height="80"><rect width="80" height="80" fill="${t.bg}" /></svg>`;
    const trimmedBuf = await imgInstance
      .extract({ left: 0, top: 0, width: meta.width, height: cutH })
      .composite([{ input: Buffer.from(leafPatch), top: 0, left: 0 }])
      .toBuffer();
    imgInstance = sharp(trimmedBuf);
    meta = await imgInstance.metadata();
  }

  // Calculate scaling so the subject graphic:
  // 1. Fits within max width 960px (strictly right half)
  // 2. Fits within max height 630px (leaving 85px safe margin top and 85px safe margin bottom)
  // 3. ZERO part of the subject is ever cut vertically or horizontally!
  const maxW = 960;
  const maxH = 630;
  const scale = Math.min(maxW / meta.width, maxH / meta.height);
  const targetW = Math.round(meta.width * scale);
  const targetH = Math.round(meta.height * scale);

  // Resize using high-fidelity Lanczos3 + unsharp mask for razor-sharp clarity
  const resizedBuf = await imgInstance
    .resize(targetW, targetH, {
      kernel: 'lanczos3',
      fit: 'fill'
    })
    .sharpen({ sigma: 1.0, m1: 1.0, m2: 2.0 })
    .ensureAlpha()
    .toBuffer();

  // Soft alpha fade mask on the left edge (140px width) to dissolve smoothly into background
  const fadeW = Math.min(140, Math.floor(targetW * 0.22));
  const maskSvg = `
    <svg width="${targetW}" height="${targetH}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="edgeFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="white" stop-opacity="0" />
          <stop offset="${((fadeW / targetW) * 100).toFixed(2)}%" stop-color="white" stop-opacity="1" />
          <stop offset="100%" stop-color="white" stop-opacity="1" />
        </linearGradient>
      </defs>
      <rect width="${targetW}" height="${targetH}" fill="url(#edgeFade)" />
    </svg>
  `;

  const maskedImgBuf = await sharp(resizedBuf)
    .composite([{ input: Buffer.from(maskSvg), blend: 'dest-in' }])
    .toBuffer();

  // Background SVG with ambient atmosphere centered on the right graphic zone
  const bgSvg = `
    <svg width="${canvasW}" height="${canvasH}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="heroGlow" cx="72%" cy="50%" r="60%">
          <stop offset="0%" stop-color="${t.glowColor}" stop-opacity="0.85" />
          <stop offset="55%" stop-color="${t.bg}" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#02040a" stop-opacity="1" />
        </radialGradient>
      </defs>
      <rect width="${canvasW}" height="${canvasH}" fill="#02040a" />
      <rect width="${canvasW}" height="${canvasH}" fill="url(#heroGlow)" />
    </svg>
  `;

  // Position: centered vertically in canvas, right-aligned with 40px right padding
  // Leaves left 0 to ~920px (48% of screen) 100% free for text!
  const posY = Math.round((canvasH - targetH) / 2);
  const posX = canvasW - targetW - 40;

  const finalJpg = await sharp(Buffer.from(bgSvg))
    .composite([{ input: maskedImgBuf, left: posX, top: posY }])
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toBuffer();

  const finalPng = await sharp(Buffer.from(bgSvg))
    .composite([{ input: maskedImgBuf, left: posX, top: posY }])
    .png({ quality: 95 })
    .toBuffer();

  for (const targetRel of t.targets) {
    const targetPath = path.resolve(targetRel);
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const isPng = targetRel.endsWith('.png');
    fs.writeFileSync(targetPath, isPng ? finalPng : finalJpg);
    console.log(`[${t.name}] Generated -> ${targetRel} (${targetW}x${targetH} @ pos ${posX},${posY})`);
  }
}

async function run() {
  for (const t of tasks) {
    try {
      await processHeroTask(t);
    } catch (err) {
      console.error(`Error on ${t.name}:`, err);
    }
  }
  console.log('All 14 widescreen hero compositions completed successfully!');
}

run();
