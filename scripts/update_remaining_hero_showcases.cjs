const fs = require('fs');
const path = require('path');

// 1. SapSupplyChainSolutionView.tsx
function updateSapSupplyChain() {
  const filePath = path.resolve('src/components/transformation/SapSupplyChainSolutionView.tsx');
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Check state
  if (!content.includes('isFullscreenImageOpen')) {
    content = content.replace(
      'const [expandedFaq, setExpandedFaq] = useState<number | null>(null);',
      `const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState<boolean>(false);

  React.useEffect(() => {
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

  // Hero regex
  const heroRegex = /<section className="relative w-full min-h-\[540px\][\s\S]*?<\/section>/;
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
            
            {/* Left Column: Headline & Narrative */}
            <div className="lg:col-span-7 space-y-5">
              
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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.14] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                Autonomous Digital Supply Chain, Smart Warehousing &amp; Real-Time Logistics
              </h1>

              {/* Narrative */}
              <p className="text-sm sm:text-base lg:text-lg font-medium text-slate-200 leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                Synchronize demand sensing, automated warehouse robotics, dynamic transportation routing, and digital manufacturing into a resilient, touchless logistics network powered by SAP S/4HANA &amp; SAP IBP.
              </p>

              {/* Architectural Feature Checkpoints */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-slate-200 shadow-md">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>SAP IBP Demand Sensing</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-slate-200 shadow-md">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  <span>EWM Robotics Orchestration</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-slate-200 shadow-md">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Multi-Modal TM Dispatch</span>
                </span>
              </div>

            </div>

            {/* Right Column: Complete Uncropped Image Showcase */}
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
                    src="/images/sap_app_supplychain_3d_clean.jpg"
                    alt="SAP Autonomous Digital Supply Chain Control Tower"
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
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
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
                src="/images/sap_app_supplychain_3d_clean.jpg" 
                alt="SAP Autonomous Digital Supply Chain Control Tower" 
                className="max-w-full max-h-[88vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="px-4 py-2 rounded-full bg-black/85 border border-white/20 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md shadow-xl">
                  Autonomous Digital Supply Chain &bull; Full Screen View (Press ESC or click to close)
                </span>
              </div>
            </div>
          </div>
        )}
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] SapSupplyChainSolutionView.tsx hero showcase!');
}

// 2. SapBtpPage.tsx
function updateSapBtpPage() {
  const filePath = path.resolve('src/pages/technology/SapBtpPage.tsx');
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Check state
  if (!content.includes('isFullscreenImageOpen')) {
    content = content.replace(
      'const [activeFeatureTab, setActiveFeatureTab] = useState',
      `const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState(false);

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
  }, [isFullscreenImageOpen]);

  const [activeFeatureTab, setActiveFeatureTab] = useState`
    );
  }

  // Hero section
  const heroRegex = /<section className="relative w-full min-h-\[540px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#040B17] text-white border-b border-white/10">
        
        {/* Ambient Atmospheric Backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-[#00A3E0]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Headline & Narrative */}
            <div className="lg:col-span-7 space-y-6">
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
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-cyan-300 shadow-md">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Clean Core Extension</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-emerald-300 shadow-md">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Zero Modification Debt</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-sky-300 shadow-md">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Event-Driven Fabric</span>
                </div>
              </div>
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
                    src="/images/sap_btp_hero_team_handshake.png"
                    alt="Enterprise Agility via SAP Business Technology Platform"
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
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={() => setIsFullscreenImageOpen(false)}
          >
            <button
              onClick={() => setIsFullscreenImageOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 z-50 cursor-pointer"
              aria-label="Close full screen"
            >
              <X className="w-6 h-6" />
            </button>
            <div 
              className="relative max-w-7xl w-full max-h-[92vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src="/images/sap_btp_hero_team_handshake.png" 
                alt="Enterprise Agility via SAP Business Technology Platform" 
                className="max-w-full max-h-[88vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="px-4 py-2 rounded-full bg-black/85 border border-white/20 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md shadow-xl">
                  Enterprise Agility via SAP BTP &bull; Full Screen View (Press ESC or click to close)
                </span>
              </div>
            </div>
          </div>
        )}
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] SapBtpPage.tsx hero showcase!');
}

// 3. SapIntegrationSuitePage.tsx
function updateSapIntegrationSuitePage() {
  const filePath = path.resolve('src/pages/technology/SapIntegrationSuitePage.tsx');
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Check state
  if (!content.includes('isFullscreenImageOpen')) {
    content = content.replace(
      'const [activeStreamTab, setActiveStreamTab] = useState',
      `const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState(false);

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
  }, [isFullscreenImageOpen]);

  const [activeStreamTab, setActiveStreamTab] = useState`
    );
  }

  // Ensure Maximize2 and X are imported
  if (!content.includes('Maximize2')) {
    content = content.replace('import {', 'import {\n  Maximize2,\n  X,');
  }

  const heroRegex = /<section className="relative w-full min-h-\[560px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#040B17] text-white border-b border-white/10">
        
        {/* Ambient Atmospheric Backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-[#00A3E0]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Headline & Narrative */}
            <div className="lg:col-span-7 space-y-6">
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
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-cyan-300 shadow-md">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>3,500+ Pre-Built Integrations</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-emerald-300 shadow-md">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Sub-Millisecond Event Mesh</span>
                </div>
              </div>
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
                    src="/images/sap_integration_suite_ipaas_event_mesh.png"
                    alt="SAP Integration Suite Global Interconnected Enterprise iPaaS & Event Mesh"
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
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={() => setIsFullscreenImageOpen(false)}
          >
            <button
              onClick={() => setIsFullscreenImageOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 z-50 cursor-pointer"
              aria-label="Close full screen"
            >
              <X className="w-6 h-6" />
            </button>
            <div 
              className="relative max-w-7xl w-full max-h-[92vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src="/images/sap_integration_suite_ipaas_event_mesh.png" 
                alt="SAP Integration Suite Global Interconnected Enterprise iPaaS & Event Mesh" 
                className="max-w-full max-h-[88vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="px-4 py-2 rounded-full bg-black/85 border border-white/20 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md shadow-xl">
                  SAP Integration Suite &bull; Full Screen View (Press ESC or click to close)
                </span>
              </div>
            </div>
          </div>
        )}
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] SapIntegrationSuitePage.tsx hero showcase!');
}

// 4. SapDataspherePage.tsx
function updateSapDataspherePage() {
  const filePath = path.resolve('src/pages/technology/SapDataspherePage.tsx');
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Check state
  if (!content.includes('isFullscreenImageOpen')) {
    content = content.replace(
      'const [activeSourceId, setActiveSourceId] = useState',
      `const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState(false);

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
  }, [isFullscreenImageOpen]);

  const [activeSourceId, setActiveSourceId] = useState`
    );
  }

  // Ensure Maximize2 and X are imported
  if (!content.includes('Maximize2')) {
    content = content.replace('import {', 'import {\n  Maximize2,\n  X,');
  }

  const heroRegex = /<section className="relative w-full min-h-\[560px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#040B17] text-white border-b border-white/10">
        
        {/* Ambient Atmospheric Backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-[#00A3E0]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Headline & Narrative */}
            <div className="lg:col-span-7 space-y-6">
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
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-cyan-300 shadow-md">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Zero-Copy Virtualization</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-emerald-300 shadow-md">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Native Business Semantics</span>
                </div>
              </div>
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
                    src="/images/sap_datasphere_boardroom_analytics.png"
                    alt="SAP Datasphere - Unify Enterprise Data Without Moving A Single Physical Byte"
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
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={() => setIsFullscreenImageOpen(false)}
          >
            <button
              onClick={() => setIsFullscreenImageOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 z-50 cursor-pointer"
              aria-label="Close full screen"
            >
              <X className="w-6 h-6" />
            </button>
            <div 
              className="relative max-w-7xl w-full max-h-[92vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src="/images/sap_datasphere_boardroom_analytics.png" 
                alt="SAP Datasphere - Unify Enterprise Data Without Moving A Single Physical Byte" 
                className="max-w-full max-h-[88vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="px-4 py-2 rounded-full bg-black/85 border border-white/20 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md shadow-xl">
                  SAP Datasphere &bull; Full Screen View (Press ESC or click to close)
                </span>
              </div>
            </div>
          </div>
        )}
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] SapDataspherePage.tsx hero showcase!');
}

// 5. SapAssessmentPage.tsx
function updateSapAssessmentPage() {
  const filePath = path.resolve('src/pages/advisory/SapAssessmentPage.tsx');
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Check state
  if (!content.includes('isFullscreenImageOpen')) {
    content = content.replace(
      'const [activeRiskQuadrant, setActiveRiskQuadrant] = useState',
      `const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState(false);

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
  }, [isFullscreenImageOpen]);

  const [activeRiskQuadrant, setActiveRiskQuadrant] = useState`
    );
  }

  // Ensure Maximize2 and X are imported
  if (!content.includes('Maximize2')) {
    content = content.replace('import {', 'import {\n  Maximize2,\n  X,');
  }

  const heroRegex = /<section className="relative w-full min-h-\[560px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#040B17] text-white border-b border-white/10">
        
        {/* Ambient Atmospheric Backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-[#00A3E0]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Headline & Narrative */}
            <div className="lg:col-span-7 space-y-6">
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
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-cyan-300 shadow-md">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Readiness &amp; Code Scans</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-emerald-300 shadow-md">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Clean Core Roadmap</span>
                </div>
              </div>
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
                    src="/images/assessment/sap-assessment-hero.png"
                    alt="Enterprise SAP Landscape Assessment Diagnostic Dashboard"
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
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={() => setIsFullscreenImageOpen(false)}
          >
            <button
              onClick={() => setIsFullscreenImageOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 z-50 cursor-pointer"
              aria-label="Close full screen"
            >
              <X className="w-6 h-6" />
            </button>
            <div 
              className="relative max-w-7xl w-full max-h-[92vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src="/images/assessment/sap-assessment-hero.png" 
                alt="Enterprise SAP Landscape Assessment Diagnostic Dashboard" 
                className="max-w-full max-h-[88vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="px-4 py-2 rounded-full bg-black/85 border border-white/20 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md shadow-xl">
                  SAP Assessment &bull; Full Screen View (Press ESC or click to close)
                </span>
              </div>
            </div>
          </div>
        )}
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] SapAssessmentPage.tsx hero showcase!');
}

// 6. CloudStrategyPage.tsx
function updateCloudStrategyPage() {
  const filePath = path.resolve('src/pages/cloud/CloudStrategyPage.tsx');
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Check state
  if (!content.includes('isFullscreenImageOpen')) {
    content = content.replace(
      'const [activeWorkloadTab, setActiveWorkloadTab] = useState',
      `const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState(false);

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
  }, [isFullscreenImageOpen]);

  const [activeWorkloadTab, setActiveWorkloadTab] = useState`
    );
  }

  // Ensure Maximize2 and X are imported
  if (!content.includes('Maximize2')) {
    content = content.replace('import {', 'import {\n  Maximize2,\n  X,');
  }

  const heroRegex = /<section className="relative w-full min-h-\[560px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#040B17] text-white border-b border-white/10">
        
        {/* Ambient Atmospheric Backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-[#00A3E0]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Headline & Narrative */}
            <div className="lg:col-span-7 space-y-6">
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
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-cyan-300 shadow-md">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Target Operating Model</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-emerald-300 shadow-md">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>3-Year TCO FinOps Matrix</span>
                </div>
              </div>
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
                    src="/images/cloud/strategy_hero.png"
                    alt="Plan Smarter. Build Stronger. Scale Faster."
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
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={() => setIsFullscreenImageOpen(false)}
          >
            <button
              onClick={() => setIsFullscreenImageOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 z-50 cursor-pointer"
              aria-label="Close full screen"
            >
              <X className="w-6 h-6" />
            </button>
            <div 
              className="relative max-w-7xl w-full max-h-[92vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src="/images/cloud/strategy_hero.png" 
                alt="Plan Smarter. Build Stronger. Scale Faster." 
                className="max-w-full max-h-[88vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="px-4 py-2 rounded-full bg-black/85 border border-white/20 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md shadow-xl">
                  Cloud Strategy &bull; Full Screen View (Press ESC or click to close)
                </span>
              </div>
            </div>
          </div>
        )}
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] CloudStrategyPage.tsx hero showcase!');
}

// 7. CloudAdoptionPage.tsx
function updateCloudAdoptionPage() {
  const filePath = path.resolve('src/pages/cloud/CloudAdoptionPage.tsx');
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Check state
  if (!content.includes('isFullscreenImageOpen')) {
    content = content.replace(
      'const [activeWorkloadIndex, setActiveWorkloadIndex] = useState',
      `const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState(false);

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
  }, [isFullscreenImageOpen]);

  const [activeWorkloadIndex, setActiveWorkloadIndex] = useState`
    );
  }

  // Ensure Maximize2 and X are imported
  if (!content.includes('Maximize2')) {
    content = content.replace('import {', 'import {\n  Maximize2,\n  X,');
  }

  const heroRegex = /<section className="relative w-full min-h-\[560px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#040B17] text-white border-b border-white/10">
        
        {/* Ambient Atmospheric Backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-[#00A3E0]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Headline & Narrative */}
            <div className="lg:col-span-7 space-y-6">
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
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-cyan-300 shadow-md">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Deterministic 7-Rs Framework</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-emerald-300 shadow-md">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Near-Zero Cutover Downtime</span>
                </div>
              </div>
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
                    src="/images/cloud/cloud_adoption_hero.png"
                    alt="Move to the Cloud with Confidence"
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
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={() => setIsFullscreenImageOpen(false)}
          >
            <button
              onClick={() => setIsFullscreenImageOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 z-50 cursor-pointer"
              aria-label="Close full screen"
            >
              <X className="w-6 h-6" />
            </button>
            <div 
              className="relative max-w-7xl w-full max-h-[92vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src="/images/cloud/cloud_adoption_hero.png" 
                alt="Move to the Cloud with Confidence" 
                className="max-w-full max-h-[88vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="px-4 py-2 rounded-full bg-black/85 border border-white/20 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md shadow-xl">
                  Cloud Adoption &bull; Full Screen View (Press ESC or click to close)
                </span>
              </div>
            </div>
          </div>
        )}
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] CloudAdoptionPage.tsx hero showcase!');
}

// 8. CloudOperatingModelPage.tsx
function updateCloudOperatingModelPage() {
  const filePath = path.resolve('src/pages/cloud/CloudOperatingModelPage.tsx');
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Ensure Maximize2 is imported
  if (!content.includes('Maximize2')) {
    content = content.replace('import {', 'import {\n  Maximize2,');
  }

  const heroRegex = /<section className="relative w-full min-h-\[560px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#040B17] text-white border-b border-white/10">
        
        {/* Ambient Atmospheric Backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-[#00A3E0]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Headline & Narrative */}
            <div className="lg:col-span-7 space-y-6">
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

            {/* Right Column: Complete Uncropped Image Showcase */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div 
                className="relative w-full max-w-md lg:max-w-none group cursor-pointer"
                onClick={() => setLightboxImage({ src: '/images/cloud/cloud_op_model_hero.png', caption: 'Design a Cloud Operating Model Built for Enterprise Scale' })}
                title="Click to view full screen"
              >
                {/* Subtle glow halo */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#00A3E0]/25 to-blue-600/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black/60 backdrop-blur-md shadow-2xl p-2 sm:p-3 transition-transform duration-300 group-hover:scale-[1.02]">
                  <img
                    src="/images/cloud/cloud_op_model_hero.png"
                    alt="Design a Cloud Operating Model Built for Enterprise Scale"
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
  console.log('[Updated] CloudOperatingModelPage.tsx hero showcase!');
}

// 9. PublicCloudPage.tsx
function updatePublicCloudPage() {
  const filePath = path.resolve('src/pages/cloud/PublicCloudPage.tsx');
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Check state
  if (!content.includes('isFullscreenImageOpen')) {
    content = content.replace(
      'const [activeHyperscaler, setActiveHyperscaler] = useState',
      `const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState(false);

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
  }, [isFullscreenImageOpen]);

  const [activeHyperscaler, setActiveHyperscaler] = useState`
    );
  }

  // Ensure Maximize2 and X are imported
  if (!content.includes('Maximize2')) {
    content = content.replace('import {', 'import {\n  Maximize2,\n  X,');
  }

  const heroRegex = /<section className="relative w-full min-h-\[560px\][\s\S]*?<\/section>/;
  const newHero = `<section className="relative w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#040B17] text-white border-b border-white/10">
        
        {/* Ambient Atmospheric Backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-[#00A3E0]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Headline & Narrative */}
            <div className="lg:col-span-7 space-y-6">
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
                    src="/images/cloud/public_cloud_hero.png"
                    alt="Build and Run Your Business on Public Cloud"
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
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={() => setIsFullscreenImageOpen(false)}
          >
            <button
              onClick={() => setIsFullscreenImageOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 z-50 cursor-pointer"
              aria-label="Close full screen"
            >
              <X className="w-6 h-6" />
            </button>
            <div 
              className="relative max-w-7xl w-full max-h-[92vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src="/images/cloud/public_cloud_hero.png" 
                alt="Build and Run Your Business on Public Cloud" 
                className="max-w-full max-h-[88vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="px-4 py-2 rounded-full bg-black/85 border border-white/20 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md shadow-xl">
                  Public Cloud &bull; Full Screen View (Press ESC or click to close)
                </span>
              </div>
            </div>
          </div>
        )}
      </section>`;

  content = content.replace(heroRegex, newHero);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[Updated] PublicCloudPage.tsx hero showcase!');
}

function run() {
  updateSapSupplyChain();
  updateSapBtpPage();
  updateSapIntegrationSuitePage();
  updateSapDataspherePage();
  updateSapAssessmentPage();
  updateCloudStrategyPage();
  updateCloudAdoptionPage();
  updateCloudOperatingModelPage();
  updatePublicCloudPage();
  console.log('All remaining hero showcases updated successfully!');
}

run();
