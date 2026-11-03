import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Layers, Brain, Globe2, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenContact?: (service?: string) => void;
  onExploreServices?: () => void;
}

const dynamicPhrases = [
  { text: 'Intelligent Technology', gradient: 'from-[#00F0FF] via-[#00A3E0] to-[#818CF8]' },
  { text: 'Clean Core SAP Systems', gradient: 'from-[#38BDF8] via-[#00A3E0] to-[#6366F1]' },
  { text: 'Autonomous AI Ecosystems', gradient: 'from-[#22D3EE] via-[#0284C7] to-[#A855F7]' },
  { text: 'Next-Gen Cloud Architecture', gradient: 'from-[#67E8F9] via-[#0284C7] to-[#3B82F6]' },
];

const highlights = [
  {
    icon: Zap,
    title: 'Near-Zero Cutover',
    desc: 'Risk-Resilient Deployment',
    color: 'text-amber-400',
    border: 'hover:border-amber-400/40',
  },
  {
    icon: Layers,
    title: 'Clean Core Architecture',
    desc: 'SAP S/4HANA & BTP Governance',
    color: 'text-cyan-400',
    border: 'hover:border-cyan-400/40',
  },
  {
    icon: Brain,
    title: 'Autonomous AI Workflows',
    desc: 'Intelligent Enterprise Automation',
    color: 'text-indigo-400',
    border: 'hover:border-indigo-400/40',
  },
  {
    icon: Globe2,
    title: 'Global Delivery Mesh',
    desc: 'High-Availability Cloud Scaling',
    color: 'text-emerald-400',
    border: 'hover:border-emerald-400/40',
  },
];

export const Hero: React.FC<HeroProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phraseIndex, setPhraseIndex] = useState(0);

  // Rotating dynamic heading timer (changes smoothly every 3.2s)
  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % dynamicPhrases.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Video autoplay
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.warn('Autoplay waiting for user gesture or loading:', err);
      }
    };

    playVideo();
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#020617] flex items-center justify-center select-none pt-[72px] sm:pt-[80px] lg:pt-[84px] min-h-[600px] sm:min-h-[660px] lg:h-screen lg:min-h-[680px] lg:max-h-[1080px]"
    >
      {/* 100% Screen Cover Background Video (Seamless 60fps Loop) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-top"
        style={{
          transform: 'translateZ(0)',
          WebkitTransform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        <source src="/videos/hero-video.mp4?v=20261102" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Multi-layered Translucent Dark Blue Shade with Ambient Cyan Glow (Lightened for video clarity) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020b22]/50 via-[#041538]/20 to-[#020a1c]/35 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_45%,rgba(0,163,224,0.15),transparent_65%)] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-[#020617]/15 z-10 pointer-events-none" />

      {/* Subtle Optical Scanline Grid for depth without obscuring video clarity */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15 z-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Hero Foreground Content: Dynamic Heading, Subtitle & Interactive Telemetry Highlights */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-14 lg:py-16 flex flex-col justify-center items-start text-left">
        
        {/* Live Status Pill with Pulsing Indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/70 border border-cyan-400/35 text-cyan-300 text-xs font-semibold tracking-wide backdrop-blur-md mb-4 sm:mb-6 shadow-[0_0_20px_rgba(0,163,224,0.25)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          <span className="font-mono uppercase tracking-wider text-[10px] sm:text-[11px] text-cyan-200">
            Active Enterprise Platform
          </span>
          <span className="text-white/30">•</span>
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span className="font-mono text-[10px] sm:text-[11px] text-slate-300 hidden sm:inline">
            Real-Time Intelligence
          </span>
        </div>

        {/* Dynamic Changing Headline: Transforms Smoothly Between Core Domains */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight text-white leading-[1.22] sm:leading-[1.18] pb-1 sm:pb-2 max-w-5xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] overflow-visible">
          Transforming Enterprises Through{' '}
          <span className="inline-block relative min-h-[1.25em] overflow-visible pb-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseIndex}
                initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -18, filter: 'blur(6px)' }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className={`inline-block pb-2.5 sm:pb-3.5 -mb-2.5 sm:-mb-3.5 pr-2 overflow-visible bg-gradient-to-r ${dynamicPhrases[phraseIndex].gradient} bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,163,224,0.65)]`}
              >
                {dynamicPhrases[phraseIndex].text}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        {/* Supporting Subheading */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl font-normal leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
          Empowering global businesses through SAP solutions, enterprise transformation, intelligent automation and next-generation digital technologies to accelerate innovation and sustainable growth.
        </p>

        {/* Floating Enterprise Telemetry Highlights Strip (Fills Space with High-Credibility Architecture Metrics) */}
        <div className="mt-8 sm:mt-12 w-full grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 pointer-events-auto">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group flex items-center gap-3 p-2.5 sm:p-3.5 rounded-2xl bg-slate-950/45 hover:bg-slate-900/65 backdrop-blur-md border border-white/10 ${item.border} transition-all duration-300 shadow-xl hover:shadow-cyan-950/40 hover:-translate-y-0.5 cursor-default`}
              >
                <div className={`p-2 rounded-xl bg-white/5 border border-white/10 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate font-display">
                    {item.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 truncate font-mono">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Subtle bottom edge gradient so video flows cleanly into page */}
      <div className="absolute inset-x-0 bottom-0 h-10 sm:h-16 pointer-events-none bg-gradient-to-t from-[#020617] to-transparent z-10" />
    </section>
  );
};

export default Hero;
