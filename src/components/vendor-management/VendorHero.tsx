import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Building2, 
  Clock, 
  FileCheck2, 
  Layers, 
  Award, 
  Zap, 
  Sparkles,
  BarChart3,
  ExternalLink,
  Activity
} from 'lucide-react';

interface VendorHeroProps {
  onOpenContact?: (topic?: string) => void;
  onExploreFeatures?: () => void;
}

export const VendorHero: React.FC<VendorHeroProps> = ({ onOpenContact, onExploreFeatures }) => {
  const [activeView, setActiveView] = useState<'visual' | 'stream'>('visual');

  const scrollToSection = (id: string) => {
    if (onExploreFeatures) {
      onExploreFeatures();
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#0A1931]/5 via-[#0052CC]/5 to-transparent dark:from-[#050B17] dark:via-[#0A1931]/60 dark:to-[#050B17]">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#0052CC]/15 via-[#00A3E0]/20 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -top-10 right-10 w-96 h-96 bg-[#00A3E0]/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      
      {/* Enterprise Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0052CC 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <motion.div 
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Enterprise Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/60 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#00A3E0] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0052CC] dark:text-[#00A3E0]">
                Raapyd Enterprise Solutions • Vendor 360°
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5.5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              Smarter Vendor Management.{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0052CC] via-[#00A3E0] to-[#0A2540] dark:from-[#00A3E0] dark:to-blue-400">
                Stronger Business Relationships.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              Streamline vendor onboarding, compliance, collaboration and performance with one intelligent vendor management platform built for modern SAP &amp; ERP enterprises.
            </p>

            {/* Key Value Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                <span>Zero-Friction Self-Service</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                <span>Automated 3-Way Compliance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                <span>Native SAP S/4HANA Sync</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onOpenContact?.('Vendor Management Demo')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#0052CC] to-[#00A3E0] hover:from-[#0041a3] hover:to-[#008ec3] text-white font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToSection('vendor-features')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-[#0052CC] dark:text-[#00A3E0]" />
                <span>Explore Features</span>
              </button>
            </div>

            {/* Trusted enterprise indicator */}
            <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center lg:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Certified Integration Ready for SAP S/4HANA, ECC, and Cloud ERPs</span>
            </div>
          </motion.div>

          {/* Right Column: Live Enterprise Visual & Cockpit Frame */}
          <motion.div 
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Outer Frame with glow */}
            <div className="relative mx-auto rounded-2xl bg-white/90 dark:bg-[#0A1931]/95 backdrop-blur-xl border border-slate-200/90 dark:border-white/10 shadow-2xl shadow-blue-900/10 dark:shadow-cyan-900/20 overflow-hidden">
              
              {/* Window Header */}
              <div className="px-5 py-3.5 bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 text-xs font-mono text-slate-500 dark:text-slate-400 font-medium truncate max-w-[180px] sm:max-w-none">
                    portal.knooviq.com/vendor-hub/vmi-cockpit
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Live Sync
                  </span>
                </div>
              </div>

              {/* Subheader / Mode Switcher */}
              <div className="px-5 pt-3 pb-2.5 flex items-center justify-between border-b border-slate-100 dark:border-white/5 bg-slate-50/70 dark:bg-[#081224]/80">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#0052CC] dark:text-[#00A3E0]" />
                    Vendor Operations &amp; VMI Intelligence
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Enterprise Procurement View • Q3 FY2026</p>
                </div>
                <div className="flex bg-slate-200/80 dark:bg-slate-800 p-0.5 rounded-lg text-xs font-medium">
                  <button 
                    onClick={() => setActiveView('visual')}
                    className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${activeView === 'visual' ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400'}`}
                  >
                    VMI Visual
                  </button>
                  <button 
                    onClick={() => setActiveView('stream')}
                    className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${activeView === 'stream' ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400'}`}
                  >
                    Stream
                  </button>
                </div>
              </div>

              {/* Main Visual Canvas: User-Requested Enterprise Image with Overlaid Content */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  {activeView === 'visual' ? (
                    <motion.div
                      key="visual"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative overflow-hidden group"
                    >
                      {/* Photorealistic Corporate Boardroom Image with VMI Metrics Wall */}
                      <div className="relative w-full h-[320px] sm:h-[380px] bg-slate-950 overflow-hidden">
                        <img 
                          src="/images/vendor_management_hero.png" 
                          alt="Enterprise Vendor Management Intelligence & VMI Operations Cockpit"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Gradient Shadow Mask for seamless overlay readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-slate-950/40 pointer-events-none" />
                      </div>

                      {/* Top Floating Glassmorphism Badge: Auto-Validated */}
                      <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/15 px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-md flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                          <FileCheck2 className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-slate-900 dark:text-white leading-tight">Auto-Validated</p>
                          <p className="text-[9px] text-slate-500 dark:text-slate-400">PAN, GSTIN &amp; MSME</p>
                        </div>
                      </div>

                      {/* Top Right Floating Badge: SAP S/4HANA Certified */}
                      <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/15 px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-md flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-[#00A3E0] flex items-center justify-center">
                          <Sparkles className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-right">
                          <p className="text-[11px] font-bold text-slate-900 dark:text-white leading-tight">SAP S/4HANA</p>
                          <p className="text-[9px] text-emerald-600 dark:text-emerald-400 font-semibold">Live BTP Sync</p>
                        </div>
                      </div>

                      {/* Overlaid Telemetry HUD Metrics Deck */}
                      <div className="absolute inset-x-3 bottom-3 p-3.5 rounded-xl bg-slate-900/85 dark:bg-[#071324]/90 backdrop-blur-md border border-white/15 shadow-xl text-white">
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 text-center">
                          
                          {/* Total Vendors */}
                          <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
                            <span className="text-[10px] text-slate-400 uppercase font-semibold block">Total</span>
                            <span className="text-lg sm:text-xl font-black text-white">248</span>
                            <span className="text-[9px] text-emerald-400 font-semibold block">+14 Qtr</span>
                          </div>

                          {/* Active */}
                          <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
                            <span className="text-[10px] text-slate-400 uppercase font-semibold block">Active</span>
                            <span className="text-lg sm:text-xl font-black text-emerald-400">196</span>
                            <span className="text-[9px] text-slate-300 block">79.0%</span>
                          </div>

                          {/* Pending */}
                          <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
                            <span className="text-[10px] text-slate-400 uppercase font-semibold block">Pending</span>
                            <span className="text-lg sm:text-xl font-black text-amber-400">24</span>
                            <span className="text-[9px] text-amber-300 block">1.8d SLA</span>
                          </div>

                          {/* Compliance */}
                          <div className="p-1.5 rounded-lg bg-blue-500/15 border border-blue-400/20 col-span-1 sm:col-span-1">
                            <span className="text-[10px] text-blue-200 uppercase font-semibold block">Compliance</span>
                            <span className="text-lg sm:text-xl font-black text-[#00A3E0]">96%</span>
                            <span className="text-[9px] text-blue-200 block">Zero Default</span>
                          </div>

                          {/* Performance */}
                          <div className="p-1.5 rounded-lg bg-indigo-500/15 border border-indigo-400/20 col-span-2 sm:col-span-1">
                            <span className="text-[10px] text-indigo-200 uppercase font-semibold block">Performance</span>
                            <span className="text-lg sm:text-xl font-black text-indigo-300">94%</span>
                            <span className="text-[9px] text-emerald-400 font-semibold block">Tier A+</span>
                          </div>

                        </div>
                      </div>

                    </motion.div>
                  ) : (
                    <motion.div
                      key="stream"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-5 space-y-4"
                    >
                      {/* Live Recent Vendor Activity Stream */}
                      <div className="border border-slate-200/80 dark:border-white/10 rounded-xl overflow-hidden bg-white dark:bg-slate-900/60">
                        <div className="px-3.5 py-2 bg-slate-50 dark:bg-slate-800/60 text-[11px] font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                          <span>Live Vendor Stream Activities</span>
                          <span className="text-slate-400 font-normal">Real-time SAP Gateway</span>
                        </div>
                        <div className="divide-y divide-slate-100 dark:divide-white/5 text-xs">
                          <div className="px-3.5 py-2.5 flex items-center justify-between hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-[11px] shrink-0">
                                ABC
                              </div>
                              <div className="truncate">
                                <p className="font-semibold text-slate-800 dark:text-slate-200 truncate">ABC Technologies</p>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400">GSTIN Verified • Vendor ID: VEN-10248</p>
                              </div>
                            </div>
                            <span className="inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                              Approved
                            </span>
                          </div>

                          <div className="px-3.5 py-2.5 flex items-center justify-between hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-[11px] shrink-0">
                                GLS
                              </div>
                              <div className="truncate">
                                <p className="font-semibold text-slate-800 dark:text-slate-200 truncate">Global Logistics Inc.</p>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400">ISO 9001 Doc Pending Legal Review</p>
                              </div>
                            </div>
                            <span className="inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
                              In Review
                            </span>
                          </div>

                          <div className="px-3.5 py-2.5 flex items-center justify-between hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold text-[11px] shrink-0">
                                APX
                              </div>
                              <div className="truncate">
                                <p className="font-semibold text-slate-800 dark:text-slate-200 truncate">Apex Steel &amp; Fab</p>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400">PO #88410 Acknowledged • Delivery on Track</p>
                              </div>
                            </div>
                            <span className="inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                              Dispatched
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Quick Metrics Bar */}
                      <div className="grid grid-cols-2 gap-3 pt-1">
                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-white/5">
                          <span className="text-[11px] text-slate-500 dark:text-slate-400">Compliance Rate</span>
                          <div className="text-xl font-black text-[#0052CC] dark:text-[#00A3E0]">96%</div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-1.5 overflow-hidden">
                            <div className="bg-[#00A3E0] h-full rounded-full w-[96%]" />
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-white/5">
                          <span className="text-[11px] text-slate-500 dark:text-slate-400">Performance Score</span>
                          <div className="text-xl font-black text-indigo-600 dark:text-indigo-400">94%</div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-1.5 overflow-hidden">
                            <div className="bg-indigo-500 h-full rounded-full w-[94%]" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Telemetry Bar */}
              <div className="px-5 py-2.5 bg-slate-100/90 dark:bg-slate-900/90 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  Auto-syncing with SAP BTP API Gateway
                </span>
                <span className="font-mono text-slate-600 dark:text-slate-300 font-semibold">Latency: 38ms</span>
              </div>
            </div>

            {/* Floating Live Activity Pill (Bottom Left outside) */}
            <motion.div 
              className="absolute -bottom-4 -left-4 sm:-left-6 bg-white/95 dark:bg-slate-800/95 border border-slate-200 dark:border-white/10 px-3.5 py-2 rounded-xl shadow-xl backdrop-blur-md items-center gap-3 hidden sm:flex"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">ABC Technologies</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">PO #88392 Sync • Verified</p>
              </div>
            </motion.div>



          </motion.div>
        </div>
      </div>
    </section>
  );
};
