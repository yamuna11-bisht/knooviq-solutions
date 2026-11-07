const fs = require('fs');
const path = require('path');

function updateSapS4HanaPage() {
  const filePath = path.resolve('src/pages/transformation/SapS4HanaPage.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Ensure state and imports
  if (!content.includes('isFullscreenImageOpen')) {
    content = content.replace(
      'const [expandedFaq, setExpandedFaq] = useState<number | null>(null);',
      `const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFullscreenImageOpen(false);
    };
    if (isFullscreenImageOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreenImageOpen]);`
    );
  }

  // 2. Replace Hero section
  const heroSectionRegex = /\{?\/\*\s*SECTION 1: FULL-SCREEN BACKGROUND ENTERPRISE HERO[\s\S]*?<\/section>/;
  const newHero = `{/* =========================================================================
          SECTION 1: FULL-SCREEN BACKGROUND ENTERPRISE HERO (SAP FIORI STYLE)
          ========================================================================= */}
      <section className="relative w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#040B17] text-white border-b border-white/10">
        
        {/* Ambient Atmospheric Backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-[#00A3E0]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
          {/* Top Hairline Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Headline, Description & Trust Indicators */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
                  <span>{currentData.categoryTag}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
                  {renderHeroHeadline()}
                </h1>
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl pt-1 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                  {currentData.heroSubtitle}
                </p>
              </motion.div>

              {/* Enterprise Trust Indicators */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="pt-1 flex flex-wrap items-center gap-3">
                {domainTrustIndicators[activeDomain].map((indicator, idx) => (
                  <div key={idx} className={\`flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono font-bold \${indicator.textClass} shadow-md\`}>
                    {indicator.icon}
                    <span>{indicator.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Complete Uncropped Image Showcase */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div 
                className="relative w-full max-w-md lg:max-w-none group cursor-pointer"
                onClick={() => setIsFullscreenImageOpen(true)}
                title="Click to view full screen"
              >
                {/* Subtle glow halo */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#00A3E0]/25 to-blue-600/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black/60 backdrop-blur-md shadow-2xl p-2 sm:p-3 transition-transform duration-300 group-hover:scale-[1.02]">
                  <img
                    src={currentData.heroImage || '/images/sap_s4hana_transformation_hero.png'}
                    alt={currentData.heroTitle}
                    className="w-full h-auto max-h-[380px] sm:max-h-[440px] lg:max-h-[480px] object-contain rounded-xl select-none mx-auto drop-shadow-xl"
                  />
                  
                  {/* Full Screen Badge in corner */}
                  <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-cyan-300 shadow-xl opacity-85 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Full Screen</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Full-Screen Lightbox Modal */}
        {isFullscreenImageOpen && (
          <div 
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={() => setIsFullscreenImageOpen(false)}
          >
            <button
              onClick={() => setIsFullscreenImageOpen(false)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer shadow-xl"
              aria-label="Close full screen"
            >
              <X className="w-6 h-6" />
            </button>
            <div 
              className="relative max-w-7xl w-full max-h-[92vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={currentData.heroImage || '/images/sap_s4hana_transformation_hero.png'} 
                alt={currentData.heroTitle} 
                className="max-w-full max-h-[88vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="px-4 py-2 rounded-full bg-black/85 border border-white/20 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md shadow-xl">
                  {currentData.heroTitle} &bull; Full Screen View (Press ESC or click to close)
                </span>
              </div>
            </div>
          </div>
        )}
      </section>`;

  content = content.replace(heroSectionRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] SapS4HanaPage.tsx hero showcase!');
}

function updateSapCustomerExperienceSolutionView() {
  const filePath = path.resolve('src/components/transformation/SapCustomerExperienceSolutionView.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace Hero section
  const heroRegex = /<section className="relative w-full min-h-\[560px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center overflow-hidden bg-[#040B17] text-white border-b border-white/10 py-10 sm:py-12 lg:py-14">
        
        {/* Ambient Atmospheric Backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-6 sm:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Headline & CX Narrative (col-span-12 lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold uppercase tracking-widest text-amber-300 shadow-md">
                  <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                  <span>SAP COMMERCE CLOUD &amp; COMPOSABLE CX</span>
                </div>
                <span className="text-slate-400 text-xs font-mono hidden sm:inline">/</span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-200 uppercase tracking-wider bg-black/50 px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-md shadow-md">
                  <Target className="w-3.5 h-3.5 text-cyan-400" />
                  <span>REAL-TIME IDENTITY RESOLUTION</span>
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.14] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                Composable Omnichannel Commerce, Real-Time CDP &amp; Unified Customer Experience
              </h1>

              {/* Narrative */}
              <p className="text-sm sm:text-base lg:text-lg font-medium text-slate-200 leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                Deliver hyper-personalized customer journeys at global scale. Unify headless B2B and B2C commerce, real-time identity resolution on SAP CDP, predictive Emarsys engagement, and sub-second checkout speeds.
              </p>

              {/* Architectural Checkpoints */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-slate-200 shadow-md">
                  <Store className="w-3.5 h-3.5 text-amber-400" />
                  <span>Composable Commerce Cloud</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-slate-200 shadow-md">
                  <Target className="w-3.5 h-3.5 text-cyan-400" />
                  <span>SAP Customer Data Platform</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-slate-200 shadow-md">
                  <Zap className="w-3.5 h-3.5 text-purple-400" />
                  <span>Emarsys Omnichannel AI</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-slate-200 shadow-md">
                  <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                  <span>SAP CPQ Complex Bundles</span>
                </span>
              </div>

              {/* Strategic Content Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5">
                <div className="px-3 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 shadow-md">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[10.5px] font-mono font-bold uppercase text-white">
                      Composable Headless Mesh
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug font-normal">
                    Decoupled MACH architecture separating frontend UX from core transactional order processing.
                  </p>
                </div>

                <div className="px-3 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 shadow-md">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Target className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-[10.5px] font-mono font-bold uppercase text-white">
                      Real-Time Customer Data Platform
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug font-normal">
                    Deterministic identity stitching reconciling clicks, apps, and in-store POS receipts.
                  </p>
                </div>
              </div>

              {/* KPI Highlights Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono">
                <div className="px-3 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 shadow-md">
                  <p className="text-[9px] text-amber-300 uppercase font-bold tracking-wider">Conversion Lift</p>
                  <p className="text-base sm:text-lg font-black text-white mt-0.5 leading-none">+28%</p>
                  <p className="text-[8.5px] text-slate-400 mt-0.5">Cart Checkout</p>
                </div>
                <div className="px-3 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 shadow-md">
                  <p className="text-[9px] text-amber-300 uppercase font-bold tracking-wider">P95 Latency</p>
                  <p className="text-base sm:text-lg font-black text-white mt-0.5 leading-none">&lt; 120ms</p>
                  <p className="text-[8.5px] text-slate-400 mt-0.5">Sub-Second</p>
                </div>
                <div className="px-3 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 shadow-md">
                  <p className="text-[9px] text-amber-300 uppercase font-bold tracking-wider">Customer LTV</p>
                  <p className="text-base sm:text-lg font-black text-white mt-0.5 leading-none">+34%</p>
                  <p className="text-[8.5px] text-slate-400 mt-0.5">Retention</p>
                </div>
                <div className="px-3 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 shadow-md">
                  <p className="text-[9px] text-amber-300 uppercase font-bold tracking-wider">B2B Reorder</p>
                  <p className="text-base sm:text-lg font-black text-emerald-400 mt-0.5 leading-none">3.2x</p>
                  <p className="text-[8.5px] text-slate-400 mt-0.5">Multiplier</p>
                </div>
              </div>

            </div>

            {/* Right Column: Complete Uncropped Image Showcase (col-span-12 lg:col-span-5) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div 
                className="relative w-full max-w-md lg:max-w-none group cursor-pointer"
                onClick={() => setIsFullscreenImageOpen(true)}
                title="Click to view full screen"
              >
                {/* Subtle glow halo */}
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/25 to-cyan-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black/60 backdrop-blur-md shadow-2xl p-2 sm:p-3 transition-transform duration-300 group-hover:scale-[1.02]">
                  <img
                    src="/images/sap_app_cx_3d_clean.jpg"
                    alt="Composable Omnichannel Commerce, Real-Time CDP & Unified Customer Experience"
                    className="w-full h-auto max-h-[380px] sm:max-h-[440px] lg:max-h-[480px] object-contain rounded-xl select-none mx-auto drop-shadow-xl"
                  />
                  
                  {/* Full Screen Badge in corner */}
                  <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-amber-300 shadow-xl opacity-85 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Full Screen</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] SapCustomerExperienceSolutionView.tsx hero showcase!');
}

function updateSapFinanceSolutionView() {
  const filePath = path.resolve('src/components/transformation/SapFinanceSolutionView.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace Hero section
  const heroRegex = /<section className="relative w-full min-h-\[560px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center overflow-hidden bg-[#040B17] text-white border-b border-white/10 py-10 sm:py-12 lg:py-14">
        
        {/* Ambient Atmospheric Backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-6 sm:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Headline & Narrative (col-span-12 lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-6">
              
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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.14] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                Autonomous Financial Management &amp; In-Memory Universal Ledger
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg font-medium text-slate-200 leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                Transform corporate finance into an agile growth engine. Consolidate financial accounting and controlling on the Universal Journal (ACDOCA), automate invoice dispute resolution with AI agents, and achieve touchless continuous close across 25+ statutory tax jurisdictions.
              </p>

              {/* Architectural Feature Checkpoints */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-slate-200 shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Universal Journal (ACDOCA)</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-slate-200 shadow-md">
                  <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>SAP DRC (25+ Regimes)</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-slate-200 shadow-md">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Real-Time SWIFT Mesh</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-slate-200 shadow-md">
                  <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                  <span>SAC Integrated FP&amp;A</span>
                </span>
              </div>

              {/* Strategic Content Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5">
                <div className="px-3 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 shadow-md">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Database className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-[10.5px] font-mono font-bold uppercase text-white">
                      Touchless Record-to-Report
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug font-normal">
                    Zero manual intercompany journal vouchers with real-time ICMR auto-matching.
                  </p>
                </div>

                <div className="px-3 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 shadow-md">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[10.5px] font-mono font-bold uppercase text-white">
                      Continuous Close Engine
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug font-normal">
                    Real-time balance sheet substantiation and automated soft close reconciliation.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Complete Uncropped Image Showcase (col-span-12 lg:col-span-5) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div 
                className="relative w-full max-w-md lg:max-w-none group cursor-pointer"
                onClick={() => setIsFullscreenImageOpen(true)}
                title="Click to view full screen"
              >
                {/* Subtle glow halo */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/25 to-blue-600/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black/60 backdrop-blur-md shadow-2xl p-2 sm:p-3 transition-transform duration-300 group-hover:scale-[1.02]">
                  <img
                    src="/images/sap_app_finance_3d_clean.jpg"
                    alt="Autonomous Financial Management & In-Memory Universal Ledger"
                    className="w-full h-auto max-h-[380px] sm:max-h-[440px] lg:max-h-[480px] object-contain rounded-xl select-none mx-auto drop-shadow-xl"
                  />
                  
                  {/* Full Screen Badge in corner */}
                  <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-cyan-300 shadow-xl opacity-85 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Full Screen</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] SapFinanceSolutionView.tsx hero showcase!');
}

function updateSapHumanCapitalSolutionView() {
  const filePath = path.resolve('src/components/transformation/SapHumanCapitalSolutionView.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace Hero section
  const heroRegex = /<section className="relative w-full min-h-\[560px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center overflow-hidden bg-[#040B17] text-white border-b border-white/10 py-10 sm:py-12 lg:py-14">
        
        {/* Ambient Atmospheric Backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-6 sm:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Headline & Narrative (col-span-12 lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Category Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold uppercase tracking-widest text-purple-300 shadow-md">
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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.14] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                Intelligent People Management, Dynamic Skills Ontology &amp; Global Payroll
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg font-medium text-slate-200 leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                Elevate employee experiences from hire to retire. Unify core HR, dynamic skills ontologies, internal gig marketplaces, and automated multi-country payroll on SAP SuccessFactors and SAP Fieldglass.
              </p>

              {/* Architectural Feature Checkpoints */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-slate-200 shadow-md">
                  <Brain className="w-3.5 h-3.5 text-purple-400" />
                  <span>Talent Intelligence Hub</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-slate-200 shadow-md">
                  <Workflow className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Opportunity Marketplace</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-slate-200 shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Employee Central Core</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-slate-200 shadow-md">
                  <Globe2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>50-Country Global Payroll</span>
                </span>
              </div>

              {/* Strategic Content Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5">
                <div className="px-3 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 shadow-md">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    <span className="text-[10.5px] font-mono font-bold uppercase text-white">
                      Dynamic AI Skills Graph
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug font-normal">
                    Continuous machine learning matching employee proficiencies with strategic project pipelines.
                  </p>
                </div>

                <div className="px-3 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 shadow-md">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-[10.5px] font-mono font-bold uppercase text-white">
                      Total Workforce Orchestration
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug font-normal">
                    Unified governance combining full-time payroll with SAP Fieldglass contingent talent.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Complete Uncropped Image Showcase (col-span-12 lg:col-span-5) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div 
                className="relative w-full max-w-md lg:max-w-none group cursor-pointer"
                onClick={() => setIsFullscreenImageOpen(true)}
                title="Click to view full screen"
              >
                {/* Subtle glow halo */}
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/25 to-cyan-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black/60 backdrop-blur-md shadow-2xl p-2 sm:p-3 transition-transform duration-300 group-hover:scale-[1.02]">
                  <img
                    src="/images/sap_app_humancapital_3d_clean.jpg"
                    alt="Intelligent People Management, Dynamic Skills Ontology & Global Payroll"
                    className="w-full h-auto max-h-[380px] sm:max-h-[440px] lg:max-h-[480px] object-contain rounded-xl select-none mx-auto drop-shadow-xl"
                  />
                  
                  {/* Full Screen Badge in corner */}
                  <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-purple-300 shadow-xl opacity-85 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Full Screen</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] SapHumanCapitalSolutionView.tsx hero showcase!');
}

function updateSapBusinessApplicationsPage() {
  const filePath = path.resolve('src/pages/transformation/SapBusinessApplicationsPage.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace S/4HANA (Autonomous Digital Core) hero section
  const heroRegex = /<section className="relative w-full min-h-\[560px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center overflow-hidden bg-[#040B17] text-white border-b border-white/10 py-10 sm:py-12 lg:py-14">
        
        {/* Ambient Atmospheric Backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
          <div className={\`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r \${APP_HERO_THEMES[activeApp].topLine}\`} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-6 sm:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Headline & Narrative (col-span-12 lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-6">
              
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
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-slate-200 shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Clean Core Certified</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-slate-200 shadow-md">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Sub-Second Telemetry</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-slate-200 shadow-md">
                  <Database className="w-3.5 h-3.5 text-[#00A3E0]" />
                  <span>Single Source of Truth</span>
                </span>
              </div>

            </div>

            {/* Right Column: Complete Uncropped Image Showcase (col-span-12 lg:col-span-5) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div 
                className="relative w-full max-w-md lg:max-w-none group cursor-pointer"
                onClick={() => setIsFullscreenImageOpen(true)}
                title="Click to view full screen"
              >
                {/* Subtle glow halo */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/25 to-blue-600/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black/60 backdrop-blur-md shadow-2xl p-2 sm:p-3 transition-transform duration-300 group-hover:scale-[1.02]">
                  <img
                    src={heroVisual.image}
                    alt={currentData.heroHeadline}
                    className="w-full h-auto max-h-[380px] sm:max-h-[440px] lg:max-h-[480px] object-contain rounded-xl select-none mx-auto drop-shadow-xl"
                  />
                  
                  {/* Full Screen Badge in corner */}
                  <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-cyan-300 shadow-xl opacity-85 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Full Screen</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] SapBusinessApplicationsPage.tsx hero showcase!');
}

function run() {
  updateSapS4HanaPage();
  updateSapCustomerExperienceSolutionView();
  updateSapFinanceSolutionView();
  updateSapHumanCapitalSolutionView();
  updateSapBusinessApplicationsPage();
  console.log('Hero showcases updated across all components!');
}

run();

