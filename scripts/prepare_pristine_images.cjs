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
    cleanEduvogue: true
  },
  {
    name: 'erp-transformation',
    input: 'media_1793881081220_f0bbc66e.jpg',
    targets: [
      'public/images/erp_transformation_hero.png',
      'public/images/erp_transformation_hero.jpg',
      'public/images/solutions/nextgen_erp_transformation.jpg'
    ]
  },
  {
    name: 'sap-digital-core',
    input: 'media_1793881243534_006af914.jpg',
    targets: [
      'public/images/sap_app_s4hana_3d_clean.jpg',
      'public/images/solutions/autonomous_digital_core.jpg'
    ]
  },
  {
    name: 'sap-finance',
    input: 'media_1793881270083_445feef2.jpg',
    targets: [
      'public/images/sap_app_finance_3d_clean.jpg',
      'public/images/solutions/autonomous_financial_management.jpg'
    ]
  },
  {
    name: 'sap-human-capital',
    input: 'media_1793881331440_9309c073.jpg',
    targets: [
      'public/images/sap_app_humancapital_3d_clean.jpg',
      'public/images/solutions/intelligent_people_management.jpg'
    ]
  },
  {
    name: 'sap-cx-commerce',
    input: 'media_1793881403056_1baaa02f.jpg',
    targets: [
      'public/images/sap_app_cx_3d_clean.jpg',
      'public/images/sap_app_cx_3d.jpg',
      'public/images/solutions/composable_omnichannel_commerce.jpg'
    ],
    cleanNonameGlobal: true
  },
  {
    name: 'sap-btp',
    input: 'media_1793881433571_b503e46a.jpg',
    targets: [
      'public/images/sap_btp_hero_team_handshake.png',
      'public/images/sap_btp_hero_team_handshake.jpg',
      'public/images/solutions/sap_btp_enterprise_agility.jpg'
    ]
  },
  {
    name: 'sap-integration-suite',
    input: 'media_1793884022536_2ee52927.jpg',
    targets: [
      'public/images/sap_integration_suite_ipaas_event_mesh.png',
      'public/images/sap_integration_suite_ipaas_event_mesh.jpg',
      'public/images/solutions/sap_integration_suite_event_mesh.jpg'
    ]
  },
  {
    name: 'sap-datasphere',
    input: 'media_1793884061777_5d7dba91.jpg',
    targets: [
      'public/images/sap_datasphere_boardroom_analytics.png',
      'public/images/sap_datasphere_boardroom_analytics.jpg',
      'public/images/solutions/sap_datasphere_unify_data.jpg'
    ]
  },
  {
    name: 'sap-assessment',
    input: 'media_1793884093336_2b4fa48d.jpg',
    targets: [
      'public/images/assessment/sap-assessment-hero.jpg',
      'public/images/assessment/sap-assessment-hero.png',
      'public/images/solutions/sap_assessment_hero.jpg'
    ]
  },
  {
    name: 'cloud-strategy',
    input: 'media_1793884116109_52416b29.jpg',
    targets: [
      'public/images/cloud/strategy_hero.jpg',
      'public/images/cloud/strategy_hero.png',
      'public/images/solutions/cloud_strategy_plan_smarter.jpg'
    ]
  },
  {
    name: 'cloud-adoption',
    input: 'media_1793884281789_8438d237.jpg',
    targets: [
      'public/images/cloud/cloud_adoption_hero.jpg',
      'public/images/cloud/cloud_adoption_hero.png',
      'public/images/solutions/cloud_adoption_confidence.jpg'
    ]
  },
  {
    name: 'cloud-op-model',
    input: 'media_1793884353572_289a3c68.jpg',
    targets: [
      'public/images/cloud/cloud_op_model_hero.jpg',
      'public/images/cloud/cloud_op_model_hero.png',
      'public/images/solutions/cloud_operating_model_enterprise.jpg'
    ]
  },
  {
    name: 'public-cloud',
    input: 'media_1793884373558_e2313848.jpg',
    targets: [
      'public/images/cloud/public_cloud_hero.jpg',
      'public/images/cloud/public_cloud_hero.png',
      'public/images/solutions/public_cloud_business_orchestration.jpg'
    ]
  }
];

async function processImage(t) {
  const inputPath = path.join(userUploadDir, t.input);
  if (!fs.existsSync(inputPath)) {
    console.warn(`Input not found: ${inputPath}`);
    return;
  }

  let img = sharp(inputPath);
  let meta = await img.metadata();

  // Watermark removal
  if (t.cleanEduvogue) {
    // Clone clean starry sky from left of the logo to replace Eduvogue logo seamlessly
    const patchW = 236;
    const patchH = 90;
    const skyPatch = await sharp(inputPath)
      .extract({ left: 200, top: 0, width: patchW, height: patchH })
      .toBuffer();

    const cleanedBuf = await img
      .composite([{ input: skyPatch, left: 500, top: 0 }])
      .toBuffer();
    img = sharp(cleanedBuf);
  }

  if (t.cleanNonameGlobal) {
    // Crop bottom ~45px to eliminate white website banner while preserving 100% hands & cart
    const cutH = meta.height - 45;
    // Cover small leaf logo at top-left 70x70 with matching suit dark tone
    const leafPatch = `<svg width="80" height="80"><rect width="80" height="80" fill="#101010" /></svg>`;
    const trimmedBuf = await img
      .extract({ left: 0, top: 0, width: meta.width, height: cutH })
      .composite([{ input: Buffer.from(leafPatch), top: 0, left: 0 }])
      .toBuffer();
    img = sharp(trimmedBuf);
    meta = await img.metadata();
  }

  // Upscale slightly with Lanczos3 and unsharp mask for 4K / Retina sharpness
  const targetW = meta.width * 2;
  const targetH = meta.height * 2;

  const sharpBuf = await img
    .resize(targetW, targetH, {
      kernel: 'lanczos3',
      fit: 'fill'
    })
    .sharpen({ sigma: 1.0, m1: 1.0, m2: 2.0 })
    .toBuffer();

  const finalJpg = await sharp(sharpBuf)
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toBuffer();

  const finalPng = await sharp(sharpBuf)
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
    console.log(`[${t.name}] Generated pristine image -> ${targetRel} (${targetW}x${targetH})`);
  }
}

async function run() {
  for (const t of tasks) {
    try {
      await processImage(t);
    } catch (err) {
      console.error(`Error processing ${t.name}:`, err);
    }
  }
  console.log('All pristine high-resolution images generated successfully!');
}

run();
