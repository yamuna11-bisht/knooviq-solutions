import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, CheckCircle2, Zap, Sparkles, Award, Globe, Activity } from 'lucide-react';
import { EnterpriseScene } from './3d/EnterpriseScene';
import { COMPANY_INFO } from '../data/knooviqData';

interface HeroProps {
  onOpenContact: (service?: string) => void;
  onExploreServices: () => void;
}

const TICKER_ITEMS = [
  '⚡ SAP S/4HANA 2023/2025 Clean Core Migration',
  '🛡️ 24/7 SLA-Governed L1–L4 Managed AMS',
  '🌐 SAP BTP Cloud & CPI Enterprise Integration',
  '🚀 Near-Zero Downtime Cutover Framework',
  '💎 Certified SAP Functional & Technical Architects',
  '🔒 Strict Enterprise Security & Non-Disclosure Governance',
  '📍 Mumbai Headquarters • Global Delivery Footprint',
];

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreServices }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex flex-col justify-center bg-[#F8FAFC] dark:bg-[#030712] transition-colors duration-500">
      
      {/* Dynamic Animated Aurora Background Blobs */}
      <div className="aurora-sphere-1 top-10 left-1/4 bg-[#00A3E0]/15 dark:bg-[#00F0FF]/15" />
      <div className="aurora-sphere-2 top-1/3 right-10 bg-[#6366F1]/15 dark:bg-[#8B5CF6]/20" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#0077B6]/10 dark:bg-[#2563EB]/15 blur-[150px] pointer-events-none" />

      {/* Cybernetic Dot Grid Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#00A3E01a_1.2px,transparent_1.2px)] [background-size:28px_28px] pointer-events-none opacity-70 dark:opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Animated Enterprise Trust Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/40 bg-white/80 dark:bg-[#0B1528]/85 px-4 py-1.5 backdrop-blur-xl shadow-lg dark:shadow-[0_0_25px_rgba(0,240,255,0.2)] w-fit mb-6 shimmer-sweep"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A3E0] dark:bg-[#00F0FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A3E0] dark:bg-[#00F0FF]" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-cyan-300 font-display">
                Official SAP Consulting & Digital Partner
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#00A3E0]/15 dark:bg-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 font-semibold">
                S/4HANA
              </span>
            </motion.div>

            {/* Main Kinetic Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-[#070E1E] dark:text-white leading-[1.08] mb-6"
            >
              Transforming Businesses Through{' '}
              <span className="text-gradient-cyan block mt-1">
                Intelligent Technology
              </span>
            </motion.h1>

            {/* Subtitle / Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl mb-8"
            >
              <strong className="text-slate-900 dark:text-white font-bold font-display">KNOOVIQ Industries</strong> empowers global enterprises with high-velocity{' '}
              <span className="text-[#0077B6] dark:text-cyan-300 font-semibold">SAP S/4HANA migrations</span>, 
              proactive 24/7 Application Management (AMS), seamless cloud integrations, and corporate workforce enablement.
            </motion.p>

            {/* Action CTA Buttons with Rich Animations */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <button
                onClick={() => onOpenContact()}
                className="btn-primary-gradient shimmer-sweep group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 font-display"
              >
                <span>Consult Our SAP Experts</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 dark:border-cyan-500/25 bg-white/90 dark:bg-[#0B1528]/80 px-7 py-4 text-sm font-bold text-slate-800 dark:text-slate-200 backdrop-blur-xl hover:border-[#00A3E0] dark:hover:border-cyan-400 hover:text-[#00A3E0] dark:hover:text-white transition-all shadow-md hover:shadow-xl font-display"
              >
                <span>Explore Solutions</span>
              </button>
            </motion.div>

            {/* Quick Enterprise Value Props */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-white/10"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#00A3E0]/15 dark:bg-cyan-400/20 text-[#00A3E0] dark:text-cyan-300">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 font-display">Clean Core Architecture</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#00A3E0]/15 dark:bg-cyan-400/20 text-[#00A3E0] dark:text-cyan-300">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 font-display">SLA-Driven 24/7 Support</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#00A3E0]/15 dark:bg-cyan-400/20 text-[#00A3E0] dark:text-cyan-300">
                  <Zap className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 font-display">Near-Zero Cutover Downtime</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: 3D Enterprise Ecosystem Scene with Floating Accents */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Floating Top Floating Chip */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-2 z-20 hidden sm:flex items-center gap-2.5 rounded-2xl bg-white/90 dark:bg-[#070E1E]/95 border border-cyan-400/40 p-3 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-md">
                <Award className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-cyan-400 font-mono">Guaranteed</p>
                <p className="text-xs font-extrabold text-slate-900 dark:text-white font-display">99.9% AMS SLA</p>
              </div>
            </motion.div>

            {/* Floating Bottom Left Chip */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 z-20 hidden sm:flex items-center gap-2.5 rounded-2xl bg-white/90 dark:bg-[#070E1E]/95 border border-indigo-400/40 p-3 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md">
                <Activity className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-indigo-400 font-mono">Monitoring</p>
                <p className="text-xs font-extrabold text-slate-900 dark:text-white font-display">L1–L4 Real-Time</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full relative"
            >
              {/* High-Tech Frame around 3D canvas */}
              <div className="relative rounded-3xl border border-cyan-400/30 bg-[#0B1528]/85 p-2.5 shadow-[0_0_60px_rgba(0,163,224,0.25)] backdrop-blur-2xl">
                
                {/* Status Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-sky-500/15 text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-bold text-white tracking-wide font-display">SAP S/4HANA Digital Ecosystem</span>
                  </div>
                  <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-wider">Active Stream</span>
                </div>

                {/* 3D Canvas container */}
                <EnterpriseScene />

                {/* Bottom interactive hint */}
                <div className="px-4 py-2 text-center text-[11px] text-slate-400 border-t border-sky-500/10 font-medium">
                  Interactive 3D Ecosystem • Move cursor to inspect nodes
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Global Key Metrics Ribbon with Floating Levitation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {COMPANY_INFO.metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel glass-panel-hover group relative rounded-3xl p-6 overflow-hidden"
            >
              <div className="font-display text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-sky-600 to-[#00A3E0] dark:from-white dark:via-cyan-200 dark:to-cyan-400 mb-1">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 leading-snug font-display">
                {metric.label}
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Infinite Animated Marquee Ticker */}
      <div className="mt-12 py-3 border-y border-slate-200 dark:border-white/10 bg-white/60 dark:bg-[#070E1E]/80 backdrop-blur-xl overflow-hidden relative">
        <div className="marquee-content gap-8">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 whitespace-nowrap text-xs sm:text-sm font-bold text-slate-700 dark:text-cyan-300 font-display">
              <span>{item}</span>
              <span className="text-cyan-400/40">•</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
