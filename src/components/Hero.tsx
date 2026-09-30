import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Globe, 
  X, 
  Play, 
  Pause, 
  RotateCw
} from 'lucide-react';
import { Hero3DCanvas, GlobeDisplayMode, GLOBAL_HUBS, GlobalHub } from './3d/Hero3DCanvas';

interface HeroProps {
  onOpenContact: (service?: string) => void;
  onExploreServices: () => void;
}

const TICKER_ITEMS = [
  '⚡ SAP S/4HANA Clean Core Migration',
  '🛡️ SLA-Governed Managed AMS Services',
  '🌐 SAP BTP Cloud & CPI Enterprise Integration',
  '🚀 Near-Zero Downtime Cutover Framework',
  '💎 Certified SAP Functional & Technical Architects',
  '🔒 Strict Enterprise Security & Non-Disclosure Governance',
  '📍 Global Delivery Footprint',
];

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreServices }) => {
  const [globeMode, setGlobeMode] = useState<GlobeDisplayMode>('global');
  const [selectedHub, setSelectedHub] = useState<GlobalHub | null>(null);
  const [isRotating, setIsRotating] = useState(true);

  const handleResetView = () => {
    setSelectedHub(null);
    setIsRotating(true);
    setGlobeMode('global');
  };

  return (
    <section 
      id="hero" 
      className="dark relative min-h-[750px] lg:min-h-[860px] xl:h-screen max-h-[1050px] overflow-hidden flex flex-col justify-between bg-gradient-to-b from-[#020617] via-[#050C1F] to-[#030712] text-white select-none transition-colors duration-500"
    >
      
      {/* 1. FULL-BLEED 3D GLOBE CANVAS (Centered, Unobstructed Full Screen Background) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Hero3DCanvas
          globeMode={globeMode}
          onGlobeModeChange={setGlobeMode}
          selectedHub={selectedHub}
          onSelectHub={setSelectedHub}
          isRotating={isRotating}
        />
      </div>

      {/* Cybernetic Dot Grid Mesh & Aurora Radiance Overlays (Futuristic Atmospheric Depth) */}
      <div className="absolute inset-0 bg-[radial-gradient(#00A3E018_1.2px,transparent_1.2px)] [background-size:32px_32px] pointer-events-none opacity-40 z-[1]" />
      <div className="aurora-sphere-1 top-10 left-1/4 bg-[#00F0FF]/15 pointer-events-none z-[1] blur-3xl" />
      <div className="aurora-sphere-2 top-1/3 right-1/4 bg-[#8B5CF6]/20 pointer-events-none z-[1] blur-3xl" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#030712]/20 to-[#030712]/70 pointer-events-none z-[1]" />

      {/* 2. TOP 3D HUD CONTROL DECK & MINIMAL BRANDING */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        
        {/* Left Status Indicator */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="pointer-events-auto flex items-center gap-2 rounded-full border border-cyan-500/30 bg-[#070E1C]/85 px-3.5 py-1.5 backdrop-blur-xl shadow-[0_0_20px_rgba(0,163,224,0.2)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-bold text-slate-200 font-display">
            Global Enterprise Delivery Network
          </span>
          <span className="text-[9px] font-mono font-extrabold uppercase tracking-wider text-cyan-300 bg-cyan-400/20 px-2 py-0.5 rounded-full border border-cyan-400/30">
            3D Globe
          </span>
        </motion.div>

        {/* Center Minimal Branding Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-[#070E1C]/60 px-4 py-1 backdrop-blur-md"
        >
          <span className="text-xs font-extrabold tracking-widest text-cyan-200 font-display uppercase">
            KNOOVIQ Industries
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-xs font-semibold text-slate-300 font-display">
            Enterprise Architecture
          </span>
        </motion.div>

        {/* Right 3D Controls HUD */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 rounded-2xl border border-cyan-500/30 bg-[#070E1C]/90 p-1.5 backdrop-blur-2xl shadow-xl shadow-cyan-950/50"
        >

          {/* Orbit Play / Pause Toggle */}
          <button
            onClick={() => setIsRotating(!isRotating)}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              isRotating
                ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30'
                : 'bg-white/10 text-slate-400'
            }`}
            title={isRotating ? 'Pause 3D Rotation' : 'Resume 3D Rotation'}
          >
            {isRotating ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            <span className="hidden md:inline">{isRotating ? 'Orbit Active' : 'Paused'}</span>
          </button>

          {/* Reset View Button */}
          <button
            onClick={handleResetView}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            title="Reset Perspective"
          >
            <RotateCw className="h-3.5 w-3.5" />
          </button>
        </motion.div>

      </div>

      {/* 3. LEFT-ALIGNED HERO CONTENT (Shifted Upwards) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-start pt-3 sm:pt-5 lg:pt-6 pb-4 items-start text-left pointer-events-none">
        
        <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl text-left">
          {/* Futuristic Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-950/80 px-4 py-1.5 backdrop-blur-xl shadow-[0_0_25px_rgba(0,163,224,0.3)] mb-4 pointer-events-auto"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-cyan-400 opacity-75" />
            </span>
            <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase font-display bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-200 bg-clip-text text-transparent">
              Enterprise SAP S/4HANA &amp; AI Cloud Architect
            </span>
            <span className="text-[9px] font-mono font-black text-emerald-400 bg-emerald-400/15 border border-emerald-400/30 px-2 py-0.5 rounded-full">
              LIVE 3D
            </span>
          </motion.div>

          {/* Majestic Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-[1.12] text-left"
          >
            Architecting the Intelligent{' '}
            <span className="bg-gradient-to-r from-[#00F0FF] via-[#00A3E0] to-[#818CF8] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,163,224,0.45)]">
              Enterprise Core
            </span>
          </motion.h1>

          {/* Subtitle / Value Proposition */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-3 sm:mt-4 text-xs sm:text-base lg:text-lg text-slate-300 max-w-xl text-left leading-relaxed font-normal"
          >
            Clean Core migrations, AI-powered SAP BTP cloud integrations, and mission-critical 24/7 AMS engineered with near-zero cutover downtime.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-5 sm:mt-6 flex flex-wrap items-center justify-start gap-3 sm:gap-3.5 pointer-events-auto"
          >
            <button
              onClick={() => onOpenContact('SAP S/4HANA Clean Core Transformation')}
              className="btn-primary-gradient shimmer-sweep rounded-2xl px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_30px_rgba(0,163,224,0.4)] hover:shadow-[0_0_45px_rgba(0,210,255,0.6)] transition-all flex items-center gap-2.5 active:scale-95 font-display"
            >
              <span>Consult Enterprise Architect</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={onExploreServices}
              className="rounded-2xl border border-cyan-400/40 bg-[#070E1E]/80 hover:bg-cyan-950/40 hover:border-cyan-400 px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-cyan-200 hover:text-white backdrop-blur-xl transition-all shadow-lg flex items-center gap-2 active:scale-95 font-display"
            >
              <span>Explore Services & Practices</span>
              <ArrowRight className="h-3.5 w-3.5 text-cyan-400" />
            </button>
          </motion.div>

          {/* Quick Capability Chips */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-5 hidden sm:flex flex-wrap items-center justify-start gap-2 sm:gap-2.5 pointer-events-auto"
          >
            {[
              { label: 'Clean Core Architecture', icon: '💎' },
              { label: 'Near-Zero Cutover Downtime', icon: '⚡' },
              { label: 'SAP Joule & GenAI Ready', icon: '🤖' },
              { label: '24/7 SLA-Governed AMS', icon: '🛡️' },
            ].map((chip, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 rounded-xl border border-cyan-500/20 bg-[#070E1E]/70 px-3 py-1.5 backdrop-blur-md text-[11px] font-semibold text-slate-300 shadow-sm hover:border-cyan-400/50 hover:text-cyan-200 transition-colors cursor-default"
              >
                <span>{chip.icon}</span>
                <span>{chip.label}</span>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Floating Subtle Interaction Hint */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="pointer-events-auto rounded-full border border-cyan-400/30 bg-[#070E1E]/85 px-4 py-1.5 backdrop-blur-xl shadow-2xl flex items-center gap-2 mt-5 self-start text-left"
        >
          <Globe className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
          <span className="text-xs font-semibold text-slate-200 font-display">
            Move cursor to tilt 3D perspective • Click any regional delivery hub on the globe to explore
          </span>
        </motion.div>

        {/* 4. INTERACTIVE GLOBAL HUB INSPECTOR (Number-Free & Clean) */}
        <AnimatePresence>
          {selectedHub && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-auto fixed bottom-16 right-4 sm:right-8 z-50 max-w-sm sm:max-w-md w-[calc(100%-2rem)] rounded-3xl border border-sky-400/50 bg-[#070E1E]/95 p-6 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,163,224,0.4)] text-white"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full animate-ping" style={{ backgroundColor: selectedHub.color }} />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-300">
                    Global Delivery Footprint
                  </span>
                </div>
                <button
                  onClick={() => setSelectedHub(null)}
                  className="rounded-full p-1 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close Inspector"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
                {selectedHub.name}
              </h3>
              <p className="text-xs text-sky-300 mb-3 font-semibold">{selectedHub.region}</p>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-400/20 text-emerald-200 border border-emerald-400/30 font-semibold">
                  Active Operations
                </span>
                <span className="text-xs font-semibold text-slate-200">
                  {selectedHub.metric}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    onOpenContact(selectedHub.name);
                    setSelectedHub(null);
                  }}
                  className="flex-1 btn-primary-gradient rounded-xl py-2.5 px-4 text-xs font-bold text-white tracking-wider flex items-center justify-center gap-2 font-display"
                >
                  <span>Connect With Regional Team</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setSelectedHub(null)}
                  className="rounded-xl border border-white/20 bg-white/10 py-2.5 px-3 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* 5. INFINITE ANIMATED MARQUEE TICKER (Ultra-Sleek Cybernetic Anchor) */}
      <div className="py-3.5 border-t border-cyan-500/20 bg-[#020617]/90 backdrop-blur-xl overflow-hidden relative z-10 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
        <div className="marquee-content gap-8">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 whitespace-nowrap text-xs sm:text-sm font-bold text-cyan-300 font-display">
              <span>{item}</span>
              <span className="text-cyan-400/40">•</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
