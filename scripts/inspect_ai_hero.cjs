const sharp = require('sharp');

async function analyzeAiHero() {
  const meta = await sharp('public/images/ai_agents_hero_widescreen.jpg').metadata();
  console.log('Size:', meta.width, 'x', meta.height);
  
  for (let pct = 10; pct <= 90; pct += 20) {
    const x = Math.floor(meta.width * (pct / 100));
    const slice = await sharp('public/images/ai_agents_hero_widescreen.jpg')
      .extract({ left: x - 20, top: 100, width: 40, height: meta.height - 200 })
      .stats();
    const avg = slice.channels.map(c => Math.round(c.mean));
    console.log(`Slice at ${pct}% (x=${x}): R=${avg[0]} G=${avg[1]} B=${avg[2]}`);
  }
}
analyzeAiHero();

