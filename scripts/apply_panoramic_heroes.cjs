const fs = require('fs');
const path = require('path');

// 1. SapS4HanaPage.tsx
function updateSapS4HanaPage() {
  const filePath = path.resolve('src/pages/transformation/SapS4HanaPage.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  const startMarker = '<section className="relative w-full min-h-[580px]';
  const startIdx = content.indexOf(startMarker);
  const endComment = '{/* =========================================================================\r\n          3. FULL WIDTH MAIN CONTENT SECTIONS';
  let endIdx = content.indexOf(endComment);
  if (endIdx === -1) {
    endIdx = content.indexOf('{/* =========================================================================\n          3. FULL WIDTH MAIN CONTENT SECTIONS');
  }

  const sectionEndIdx = content.lastIndexOf('</section>', endIdx) + '</section>'.length;
  const oldSection = content.substring(startIdx, sectionEndIdx);

  const newSection = `<section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-black text-white">
        
        {/* Full-Bleed 16:9 Panoramic Image - Zero Cropping on Subject */}
        <div className="absolute inset-0 z-0">
          <img
            src={currentData.heroImage || '/images/sap_s4hana_transformation_hero.png'}
            alt={currentData.heroTitle}
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center brightness-105 contrast-[1.02]"
          />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-xl space-y-6 relative">
            {/* Seamless Soft Contrast Aura — ensures text is 100% legible against the background image with Zero Box */}
            <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-r from-black/85 via-black/50 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>{currentData.categoryTag}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
                {renderHeroHeadline()}
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl pt-1 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                {currentData.heroSubtitle}
              </p>
            </motion.div>

            {/* Enterprise Trust Indicators */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="pt-1 flex flex-wrap items-center gap-3">
              {domainTrustIndicators[activeDomain].map((indicator, idx) => (
                <div key={idx} className={\`flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold \${indicator.textClass} shadow-lg\`}>
                  {indicator.icon}
                  <span>{indicator.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>`;

  content = content.replace(oldSection, newSection);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] SapS4HanaPage.tsx to widescreen panoramic format!');
}

// 2. SapFinanceSolutionView.tsx
function updateSapFinance() {
  const filePath = path.resolve('src/components/transformation/SapFinanceSolutionView.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  const heroRegex = /<section className="relative w-full min-h-\[580px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-black text-white">
        
        {/* Full-Bleed 16:9 Panoramic Image - Zero Cropping on Subject */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/sap_app_finance_3d_clean.jpg" 
            alt="Autonomous Financial Management & In-Memory Universal Ledger" 
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center brightness-105 contrast-[1.02]"
          />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-6 sm:py-10">
          <div className="max-w-2xl lg:max-w-xl space-y-6 relative">
            <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-r from-black/85 via-black/50 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />
            
            {/* Category Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-300 shadow-md">
                <Wallet className="w-3.5 h-3.5 text-cyan-400" />
                <span>SAP S/4HANA FINANCE &amp; CENTRAL FINANCE</span>
              </div>
              <span className="text-slate-400 text-xs font-mono hidden sm:inline">/</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-200 uppercase tracking-wider bg-black/50 px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-md shadow-md">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>SAVIC FINANCIAL METHODOLOGY</span>
              </span>
            </div>

            {/* Large Hero Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.12] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              Autonomous Financial Management &amp; In-Memory Universal Ledger
            </h1>

            {/* Subtitle / Strategic Narrative */}
            <p className="text-sm sm:text-base lg:text-lg font-medium text-slate-200 leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              Transform corporate finance into an agile growth engine. Consolidate financial accounting and controlling on the Universal Journal (ACDOCA), automate invoice dispute resolution with AI agents, and achieve touchless continuous close across 25+ statutory tax jurisdictions.
            </p>

            {/* Architectural Feature Checkpoints */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Universal Journal (ACDOCA)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-lg">
                <Globe2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>SAP DRC (25+ Regimes)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-amber-200 shadow-lg">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Real-Time SWIFT Mesh</span>
              </div>
            </div>
          </div>
        </div>
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] SapFinanceSolutionView.tsx to widescreen panoramic format!');
}

// 3. SapHumanCapitalSolutionView.tsx
function updateSapHumanCapital() {
  const filePath = path.resolve('src/components/transformation/SapHumanCapitalSolutionView.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  const heroRegex = /<section className="relative w-full min-h-\[580px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-black text-white">
        
        {/* Full-Bleed 16:9 Panoramic Image - Zero Cropping on Subject */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/sap_app_humancapital_3d_clean.jpg" 
            alt="Intelligent People Management, Dynamic Skills Ontology & Global Payroll" 
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center brightness-105 contrast-[1.02]"
          />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-6 sm:py-10">
          <div className="max-w-2xl lg:max-w-xl space-y-6 relative">
            <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-r from-black/85 via-black/50 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />
            
            {/* Category Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-300 shadow-md">
                <Users className="w-3.5 h-3.5 text-purple-400" />
                <span>SAP SUCCESSFACTORS SUITE &amp; TOTAL WORKFORCE</span>
              </div>
              <span className="text-slate-400 text-xs font-mono hidden sm:inline">/</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-200 uppercase tracking-wider bg-black/50 px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-md shadow-md">
                <Brain className="w-3.5 h-3.5 text-cyan-400" />
                <span>DYNAMIC SKILLS ONTOLOGY</span>
              </span>
            </div>

            {/* Large Hero Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.12] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              Intelligent People Management, Dynamic Skills Ontology &amp; Global Payroll
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg font-medium text-slate-200 leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              Elevate employee experiences from hire to retire. Unify core HR, dynamic skills ontologies, internal gig marketplaces, and automated multi-country payroll on SAP SuccessFactors and SAP Fieldglass.
            </p>

            {/* Architectural Feature Checkpoints */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-lg">
                <Brain className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Talent Intelligence Hub</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-lg">
                <Workflow className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Opportunity Marketplace</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-amber-200 shadow-lg">
                <Globe2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>50-Country Global Payroll</span>
              </div>
            </div>
          </div>
        </div>
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] SapHumanCapitalSolutionView.tsx to widescreen panoramic format!');
}

// 4. SapCustomerExperienceSolutionView.tsx
function updateSapCustomerExperience() {
  const filePath = path.resolve('src/components/transformation/SapCustomerExperienceSolutionView.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  const heroRegex = /<section className="relative w-full min-h-\[580px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-black text-white">
        
        {/* Full-Bleed 16:9 Panoramic Image - Zero Cropping on Subject */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/sap_app_cx_3d_clean.jpg" 
            alt="Composable Omnichannel Commerce, Real-Time CDP & Unified Customer Experience" 
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center brightness-105 contrast-[1.02]"
          />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-6 sm:py-10">
          <div className="max-w-2xl lg:max-w-xl space-y-6 relative">
            <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-r from-black/85 via-black/50 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />
            
            {/* Category Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-300 shadow-md">
                <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                <span>SAP COMMERCE CLOUD &amp; COMPOSABLE CX</span>
              </div>
              <span className="text-slate-400 text-xs font-mono hidden sm:inline">/</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-200 uppercase tracking-wider bg-black/50 px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-md shadow-md">
                <Radio className="w-3.5 h-3.5 text-cyan-400" />
                <span>REAL-TIME IDENTITY RESOLUTION</span>
              </span>
            </div>

            {/* Large Hero Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.12] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              Composable Omnichannel Commerce, Real-Time CDP &amp; Unified Customer Experience
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg font-medium text-slate-200 leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              Deliver hyper-personalized customer journeys at global scale. Unify headless B2B and B2C commerce, real-time identity resolution on SAP CDP, predictive Emarsys engagement, and sub-second checkout conversion.
            </p>

            {/* Architectural Feature Checkpoints */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Sub-Second Headless PWA</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Real-Time SAP CDP Graph</span>
              </div>
            </div>
          </div>
        </div>
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] SapCustomerExperienceSolutionView.tsx to widescreen panoramic format!');
}

// 5. SapBusinessApplicationsPage.tsx (Active app === 's4hana')
function updateSapBusinessApplicationsPage() {
  const filePath = path.resolve('src/pages/transformation/SapBusinessApplicationsPage.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  const startMarker = '<section className="relative w-full min-h-[580px]';
  const startIdx = content.indexOf(startMarker);
  const endSectionMarker = '</section>';
  const endIdx = content.indexOf(endSectionMarker, startIdx) + endSectionMarker.length;

  if (startIdx !== -1 && endIdx !== -1) {
    const oldSection = content.substring(startIdx, endIdx);
    const newSection = `<section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-black text-white">
        
        {/* Full-Bleed 16:9 Panoramic Image - Zero Cropping on Subject */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroVisual.image} 
            alt={currentData.heroHeadline} 
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center brightness-105 contrast-[1.02]"
          />
          <div className={\`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r \${APP_HERO_THEMES[activeApp].topLine}\`} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-6 sm:py-10">
          <div className="max-w-2xl lg:max-w-xl space-y-6 relative">
            <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-r from-black/85 via-black/50 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />
            
            {/* Category Dash & Tag */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-300 shadow-md">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>{currentData.categoryTag}</span>
              </div>
              <span className="text-slate-400 text-xs font-mono">/</span>
              <span className="text-[11px] font-mono font-bold text-slate-200 uppercase tracking-wider bg-black/50 px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-md shadow-md">
                {currentData.heroBadge}
              </span>
            </div>

            {/* Large Hero Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.14] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              {currentData.heroHeadline}
            </h1>

            {/* Subtitle / Strategic Narrative */}
            <p className="text-sm sm:text-base lg:text-lg font-medium text-slate-200 leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              {currentData.heroSubheadline}
            </p>

            {/* Architectural Feature Checkpoints */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Clean Core Certified</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-amber-200 shadow-lg">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Sub-Second Telemetry</span>
              </div>
            </div>
          </div>
        </div>
      </section>`;

    content = content.replace(oldSection, newSection);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('[Updated] SapBusinessApplicationsPage.tsx to widescreen panoramic format!');
  }
}

// 6. SapSupplyChainSolutionView.tsx
function updateSapSupplyChain() {
  const filePath = path.resolve('src/components/transformation/SapSupplyChainSolutionView.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  const heroRegex = /<section className="relative w-full min-h-\[580px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-black text-white">
        
        {/* Full-Bleed 16:9 Panoramic Image - Zero Cropping on Subject */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/sap_app_supplychain_3d_clean.jpg" 
            alt="SAP Autonomous Digital Supply Chain Control Tower" 
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center brightness-105 contrast-[1.02]"
          />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-6 sm:py-10">
          <div className="max-w-2xl lg:max-w-xl space-y-6 relative">
            <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-r from-black/85 via-black/50 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-300 shadow-md">
                <Truck className="w-3.5 h-3.5 text-cyan-400" />
                <span>SAP DIGITAL SUPPLY CHAIN (SCM) &amp; IBP</span>
              </div>
              <span className="text-slate-400 text-xs font-mono hidden sm:inline">/</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-200 uppercase tracking-wider bg-black/50 px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-md shadow-md">
                <Factory className="w-3.5 h-3.5 text-emerald-400" />
                <span>INDUSTRY 4.0 SYNCHRONIZATION</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.12] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              Autonomous Digital Supply Chain, Smart Warehousing &amp; Real-Time Logistics
            </h1>

            {/* Narrative */}
            <p className="text-sm sm:text-base lg:text-lg font-medium text-slate-200 leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              Synchronize demand sensing, automated warehouse robotics, dynamic transportation routing, and digital manufacturing into a resilient, touchless logistics network powered by SAP S/4HANA &amp; SAP IBP.
            </p>

            {/* Architectural Feature Checkpoints */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>SAP IBP Demand Sensing</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-lg">
                <Cpu className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>EWM Robotics Orchestration</span>
              </div>
            </div>
          </div>
        </div>
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] SapSupplyChainSolutionView.tsx to widescreen panoramic format!');
}

// 7. SapBtpPage.tsx
function updateSapBtp() {
  const filePath = path.resolve('src/pages/technology/SapBtpPage.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  const heroRegex = /<section className="relative w-full min-h-\[580px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-black text-white">
        
        {/* Full-Bleed 16:9 Panoramic Image - Zero Cropping on Subject */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/sap_btp_hero_team_handshake.png"
            alt="Enterprise Agility via SAP Business Technology Platform"
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center brightness-105 contrast-[1.02]"
          />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-xl space-y-6 relative">
            <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-r from-black/85 via-black/50 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <Layers className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>KNOOVIQ TECHNOLOGY PRACTICE &bull; SAP BTP</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                Enterprise Agility via <br />
                <span className="text-[#00A3E0] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">SAP Business Technology Platform</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl pt-1 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                Build Modern Side-by-Side Extensions. Safeguard Your Clean Core. Decouple business logic with cloud-native microservices, unified event streaming, and enterprise AI boundaries.
              </p>
            </motion.div>

            {/* Badges */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="pt-1 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Clean Core Extension</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Modification Debt</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 shadow-lg">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Event-Driven Fabric</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] SapBtpPage.tsx to widescreen panoramic format!');
}

// 8. SapIntegrationSuitePage.tsx
function updateSapIntegrationSuite() {
  const filePath = path.resolve('src/pages/technology/SapIntegrationSuitePage.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  const heroRegex = /<section className="relative w-full min-h-\[580px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-black text-white">
        
        {/* Full-Bleed 16:9 Panoramic Image - Zero Cropping on Subject */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/sap_integration_suite_ipaas_event_mesh.png"
            alt="SAP Integration Suite Global Interconnected Enterprise iPaaS & Event Mesh"
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center brightness-105 contrast-[1.02]"
          />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-xl space-y-6 relative">
            <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-r from-black/85 via-black/50 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <Network className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>ENTERPRISE iPAAS &bull; SAP INTEGRATION SUITE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                Connect Everything to Anything with <br />
                <span className="text-[#00A3E0] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                  Enterprise-Grade iPaaS &amp; Event Mesh
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl pt-1 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                Orchestrate multi-cloud ecosystems, automate B2B supply chains, and modernize legacy SAP PI/PO systems. SAP Integration Suite delivers guaranteed persistent delivery, real-time API management, and pre-packaged enterprise accelerators.
              </p>
            </motion.div>

            {/* Badges */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="pt-1 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>3,500+ Pre-Built Integrations</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sub-Millisecond Event Mesh</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] SapIntegrationSuitePage.tsx to widescreen panoramic format!');
}

// 9. SapDataspherePage.tsx
function updateSapDatasphere() {
  const filePath = path.resolve('src/pages/technology/SapDataspherePage.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  const heroRegex = /<section className="relative w-full min-h-\[580px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-black text-white">
        
        {/* Full-Bleed 16:9 Panoramic Image - Zero Cropping on Subject */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/sap_datasphere_boardroom_analytics.png"
            alt="SAP Datasphere - Unify Enterprise Data Without Moving A Single Physical Byte"
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center brightness-105 contrast-[1.02]"
          />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-xl space-y-6 relative">
            <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-r from-black/85 via-black/50 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <Database className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>KNOOVIQ TECHNOLOGY PRACTICE &bull; SAP DATASPHERE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                Unify Enterprise Data Without <br />
                <span className="text-[#00A3E0]">Moving A Single Physical Byte</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed pt-1">
                SAP Datasphere is the next generation of SAP Data Warehouse Cloud. A unified data fabric that harmonizes mission-critical SAP business semantics with non-SAP hyperscaler data lakes in real time.
              </p>
            </motion.div>

            {/* Badges */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="pt-1 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Zero-Copy Virtualization</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Native Business Semantics</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] SapDataspherePage.tsx to widescreen panoramic format!');
}

// 10. SapAssessmentPage.tsx
function updateSapAssessment() {
  const filePath = path.resolve('src/pages/advisory/SapAssessmentPage.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  const heroRegex = /<section className="relative w-full min-h-\[580px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-black text-white">
        
        {/* Full-Bleed 16:9 Panoramic Image - Zero Cropping on Subject */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/assessment/sap-assessment-hero.png"
            alt="Enterprise SAP Landscape Assessment Diagnostic Dashboard"
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center brightness-105 contrast-[1.02]"
          />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-xl space-y-6 relative">
            <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-r from-black/85 via-black/50 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00A3E0] text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <Search className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>LANDSCAPE DIAGNOSTIC AUDIT &bull; TECHNICAL HEALTH SCAN</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              SAP <br />
              <span className="text-[#00A3E0]">Assessment</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
              A rigorous, data-driven diagnostic evaluation of your current SAP landscape to eliminate migration blindspots, evaluate custom code complexity, and determine your optimal path to SAP S/4HANA.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Readiness &amp; Code Scans</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Clean Core Roadmap</span>
              </div>
            </div>
          </div>
        </div>
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] SapAssessmentPage.tsx to widescreen panoramic format!');
}

// 11. CloudStrategyPage.tsx
function updateCloudStrategy() {
  const filePath = path.resolve('src/pages/cloud/CloudStrategyPage.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  const heroRegex = /<section className="relative w-full min-h-\[580px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-black text-white">
        
        {/* Full-Bleed 16:9 Panoramic Image - Zero Cropping on Subject */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cloud/strategy_hero.png"
            alt="Plan Smarter. Build Stronger. Scale Faster."
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center brightness-105 contrast-[1.02]"
          />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-xl space-y-6 relative">
            <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-r from-black/85 via-black/50 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
              <Compass className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>CLOUD STRATEGY &amp; ADVISORY</span>
            </div>

            <div className="space-y-3">
              <span className="block text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-[#00A3E0]">
                Cloud Strategy
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                Plan Smarter. Build Stronger. Scale Faster.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl pt-1">
              Establish an enterprise cloud strategy aligned to business velocity, resilient architecture, CapEx-to-OpEx economics, and regulatory compliance across public, private, and hybrid estates.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Target Operating Model</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>3-Year TCO FinOps Matrix</span>
              </div>
            </div>
          </div>
        </div>
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] CloudStrategyPage.tsx to widescreen panoramic format!');
}

// 12. CloudAdoptionPage.tsx
function updateCloudAdoption() {
  const filePath = path.resolve('src/pages/cloud/CloudAdoptionPage.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  const heroRegex = /<section className="relative w-full min-h-\[580px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-black text-white">
        
        {/* Full-Bleed 16:9 Panoramic Image - Zero Cropping on Subject */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cloud/cloud_adoption_hero.png"
            alt="Move to the Cloud with Confidence"
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center brightness-105 contrast-[1.02]"
          />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-xl space-y-6 relative">
            <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-r from-black/85 via-black/50 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>ENTERPRISE CLOUD EXECUTION &amp; MIGRATION</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                Move to the Cloud with Confidence
              </h1>
              <p className="text-base sm:text-lg font-medium text-cyan-300 tracking-normal">
                Execution-Led Migration, Modernization, and Hybrid Operations
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl pt-1">
              Build a practical cloud adoption strategy that aligns business requirements, application dependencies, infrastructure readiness, security, and operational needs. Knooviq helps enterprises plan and execute cloud adoption through a structured, secure, and business-aligned approach.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Deterministic 7-Rs Framework</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Near-Zero Cutover Downtime</span>
              </div>
            </div>
          </div>
        </div>
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] CloudAdoptionPage.tsx to widescreen panoramic format!');
}

// 13. CloudOperatingModelPage.tsx
function updateCloudOperatingModel() {
  const filePath = path.resolve('src/pages/cloud/CloudOperatingModelPage.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  const heroRegex = /<section className="relative w-full min-h-\[580px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-black text-white">
        
        {/* Full-Bleed 16:9 Panoramic Image - Zero Cropping on Subject */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cloud/cloud_op_model_hero.png"
            alt="Design a Cloud Operating Model Built for Enterprise Scale"
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center brightness-105 contrast-[1.02]"
          />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-xl space-y-6 relative">
            <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-r from-black/85 via-black/50 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>CLOUD &amp; OPERATIONS</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                Design a Cloud Operating Model Built for Enterprise Scale
              </h1>
              <p className="text-base sm:text-lg font-medium text-cyan-300 tracking-normal">
                Align People, Governance, Platform Capabilities, and Commercial Outcomes
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl pt-1">
              Establish the people, processes, governance, and technology practices required to manage cloud services effectively. Knooviq helps organizations define cloud responsibilities, structure cross-functional teams, establish decision-making frameworks, and align cloud delivery with enterprise priorities.
            </p>

            {/* Operating Model Pillars Anchor */}
            <div className="pt-4 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">Structure</span>
                <span className="text-sm font-bold text-white">CCoE &amp; Platform Teams</span>
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">Governance</span>
                <span className="text-sm font-bold text-white">Decision Rights &amp; Policy</span>
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">Delivery</span>
                <span className="text-sm font-bold text-white">Self-Service Platforms</span>
              </div>
            </div>
          </div>
        </div>
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] CloudOperatingModelPage.tsx to widescreen panoramic format!');
}

// 14. PublicCloudPage.tsx
function updatePublicCloud() {
  const filePath = path.resolve('src/pages/cloud/PublicCloudPage.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  const heroRegex = /<section className="relative w-full min-h-\[580px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-black text-white">
        
        {/* Full-Bleed 16:9 Panoramic Image - Zero Cropping on Subject */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cloud/public_cloud_hero.png"
            alt="Build and Run Your Business on Public Cloud"
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center brightness-105 contrast-[1.02]"
          />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-xl space-y-6 relative">
            <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-r from-black/85 via-black/50 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A3E0]/20 border border-[#00A3E0]/40 text-[#00A3E0] text-xs font-mono font-semibold uppercase tracking-wider backdrop-blur-md">
              <Cloud className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>CLOUD INFRASTRUCTURE &amp; PLATFORMS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-white drop-shadow-md">
              Build and Run Your Business on{' '}
              <span className="text-[#00A3E0]">Public Cloud</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl pt-1">
              Public cloud provides access to computing, storage, networking, databases, and managed services without requiring organizations to own and maintain all the underlying infrastructure. Knooviq supports the design of cloud environments around application requirements, security policies, infrastructure needs, and long-term technology plans.
            </p>

            {/* Key Architecture Badges */}
            <div className="pt-4 border-t border-white/15 grid grid-cols-3 gap-4 text-xs max-w-xl">
              <div>
                <span className="font-mono text-[#00A3E0] font-bold block text-sm sm:text-base">Multi-AZ</span>
                <span className="text-slate-300 mt-0.5 block">High Availability</span>
              </div>
              <div>
                <span className="font-mono text-[#00A3E0] font-bold block text-sm sm:text-base">Zero-Trust</span>
                <span className="text-slate-300 mt-0.5 block">Security Baseline</span>
              </div>
              <div>
                <span className="font-mono text-[#00A3E0] font-bold block text-sm sm:text-base">FinOps</span>
                <span className="text-slate-300 mt-0.5 block">Automated Cost Control</span>
              </div>
            </div>
          </div>
        </div>
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] PublicCloudPage.tsx to widescreen panoramic format!');
}

function run() {
  updateSapS4HanaPage();
  updateSapFinance();
  updateSapHumanCapital();
  updateSapCustomerExperience();
  updateSapBusinessApplicationsPage();
  updateSapSupplyChain();
  updateSapBtp();
  updateSapIntegrationSuite();
  updateSapDatasphere();
  updateSapAssessment();
  updateCloudStrategy();
  updateCloudAdoption();
  updateCloudOperatingModel();
  updatePublicCloud();
  console.log('All 14 hero sections successfully updated to full-bleed panoramic widescreen format!');
}

run();

