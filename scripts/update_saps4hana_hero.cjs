const fs = require('fs');
const filePath = 'src/pages/transformation/SapS4HanaPage.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const startMarker = '<section className="relative w-full min-h-[580px]';
const startIdx = content.indexOf(startMarker);
const endComment = '{/* =========================================================================\r\n          3. FULL WIDTH MAIN CONTENT SECTIONS';
let endIdx = content.indexOf(endComment);
if (endIdx === -1) {
  endIdx = content.indexOf('{/* =========================================================================\n          3. FULL WIDTH MAIN CONTENT SECTIONS');
}

if (startIdx === -1 || endIdx === -1) {
  console.error('Indices not found! startIdx:', startIdx, 'endIdx:', endIdx);
  process.exit(1);
}

const sectionEndIdx = content.lastIndexOf('</section>', endIdx) + '</section>'.length;
const oldSection = content.substring(startIdx, sectionEndIdx);

const newSection = `<section className="relative w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#040B17] text-white border-b border-white/10">
        
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
            
            {/* Left Column: Headline, Description & Trust Indicators (col-span-12 lg:col-span-7) */}
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

            {/* Right Column: Complete Uncropped Image Showcase (col-span-12 lg:col-span-5) */}
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

        {/* =========================================================================
            INTERACTIVE FULL-SCREEN LIGHTBOX MODAL (100% Complete Image, Zero Cropping)
            ========================================================================= */}
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

content = content.replace(oldSection, newSection);
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully replaced SapS4HanaPage.tsx hero section!');

