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
    glowColor: '#00204d'
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
    name: 'sap-cx-commerce',
    input: 'media_1793881403056_1baaa02f.jpg',
    targets: [
      'public/images/sap_app_cx_3d_clean.jpg',
      'public/images/sap_app_cx_3d.jpg',
      'public/images/solutions/composable_omnichannel_commerce.jpg'
    ],
    bg: '#03050a',
    glowColor: '#0b1626'
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

  const canvasW = 1376;
  const canvasH = 768;
  const meta = await sharp(inputPath).metadata();

  // Target image height: fit nicely within 740px height with 14px padding top & bottom
  // so NO part of the image is cut off vertically!
  const padY = 14;
  const targetH = canvasH - (padY * 2); // 740px
  const targetW = Math.round(targetH * (meta.width / meta.height));

  // High-fidelity Lanczos3 scaling + subtle unsharp mask for crystal clear clarity
  const resizedBuf = await sharp(inputPath)
    .resize(targetW, targetH, {
      kernel: 'lanczos3',
      fit: 'fill'
    })
    .sharpen({ sigma: 1.0, m1: 1.0, m2: 2.0 })
    .ensureAlpha()
    .toBuffer();

  // Alpha mask for the left edge: soft 160px linear fade so it dissolves seamlessly into the background
  const fadeW = Math.min(160, Math.floor(targetW * 0.28));
  const maskSvg = `
    <svg width="${targetW}" height="${targetH}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="white" stop-opacity="0" />
          <stop offset="${((fadeW / targetW) * 100).toFixed(2)}%" stop-color="white" stop-opacity="1" />
          <stop offset="100%" stop-color="white" stop-opacity="1" />
        </linearGradient>
      </defs>
      <rect width="${targetW}" height="${targetH}" fill="url(#fade)" />
    </svg>
  `;

  const maskedImgBuf = await sharp(resizedBuf)
    .composite([{ input: Buffer.from(maskSvg), blend: 'dest-in' }])
    .toBuffer();

  // Background SVG with ambient subtle glow centered on the right half
  const bgSvg = `
    <svg width="${canvasW}" height="${canvasH}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ambGlow" cx="72%" cy="50%" r="65%">
          <stop offset="0%" stop-color="${t.glowColor}" stop-opacity="0.8" />
          <stop offset="50%" stop-color="${t.bg}" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#02040a" stop-opacity="1" />
        </radialGradient>
      </defs>
      <rect width="${canvasW}" height="${canvasH}" fill="#02040a" />
      <rect width="${canvasW}" height="${canvasH}" fill="url(#ambGlow)" />
    </svg>
  `;

  // Place on right side: flush to right or small 10px margin
  const posX = Math.max(0, canvasW - targetW);
  const posY = padY;

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
    console.log(`[${t.name}] Generated -> ${targetRel}`);
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
  console.log('All widescreen hero compositions completed!');
}

run();
