import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Layers,
  FileSpreadsheet,
  Workflow,
  ShieldCheck,
  ArrowRight,
  Database,
  Cpu,
  ChevronRight,
  ChevronLeft,
  Server,
  Zap,
  Lock,
  Sparkles,
  Sliders,
  Table,
  CheckCircle2,
  FolderLock,
  GitMerge,
  Terminal,
  Activity,
  AlertCircle
} from 'lucide-react';

interface AutomationSuitePageProps {
  onOpenContact?: (service?: string) => void;
}

export const AutomationSuitePage: React.FC<AutomationSuitePageProps> = ({ onOpenContact }) => {
  const [activePillar, setActivePillar] = useState<number>(1);

  const pillars = [
    {
      id: 1,
      name: 'Automation Studio',
      title: 'Desktop-to-SAP Automation',
      route: '/products/automation-studio',
      badge: 'Excel Native Runner',
      accentColor: 'cyan',
      themeBorder: 'border-cyan-500 dark:border-cyan-400',
      themeBg: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30',
      icon: FileSpreadsheet,
      summary: 'Empowers business teams to record transactions, build queries, and post mass records to SAP directly from Microsoft Excel without programming.'
    },
    {
      id: 2,
      name: 'Automation Evolve',
      title: 'Enterprise Workflow & MDG',
      route: '/products/automation-evolve',
      badge: 'Master Data Governance',
      accentColor: 'purple',
      themeBorder: 'border-purple-500 dark:border-purple-400',
      themeBg: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30',
      icon: Workflow,
      summary: 'Digitizes multi-department approval processes through responsive web forms, strict business logic rules, and autonomous SAP posting.'
    },
    {
      id: 3,
      name: 'Automation Manager',
      title: 'Central Governance & Security',
      route: '/products/automation-manager',
      badge: 'Administrative Console',
      accentColor: 'blue',
      themeBorder: 'border-blue-500 dark:border-blue-400',
      themeBg: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30',
      icon: Sliders,
      summary: 'Delivers single-pane-of-glass administrative governance, license orchestration, script version control, and SOX compliance audit trails.'
    }
  ];

  const enterpriseValuePoints = [
    {
      title: 'Zero Custom ABAP Burden',
      desc: 'Build and deploy automation scripts in hours instead of waiting months for custom ABAP development, keeping your SAP core completely clean.'
    },
    {
      title: 'Flawless Data Accuracy',
      desc: 'Pre-flight data simulation eliminates formatting errors and invalid entries before records are committed to the SAP database.'
    },
    {
      title: 'Audit-Ready Governance',
      desc: 'Centralized script promotion, role-based access, and immutable execution logs satisfy the most rigorous enterprise SOX and ISO audits.'
    },
    {
      title: 'Enterprise S/4HANA Ready',
      desc: 'Seamless migration pathway ensuring that your automation scripts and workflows operate identically across ECC and SAP S/4HANA Cloud.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#050B17] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-[#00A3E0]/10 dark:bg-[#00A3E0]/15 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Strategic Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/50 border-2 border-sky-200 dark:border-sky-800 text-xs font-semibold text-[#0077B6] dark:text-cyan-300 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />
              <span className="font-bold font-sans">Knooviq Automation Suite</span>
              <span className="text-slate-300 dark:text-slate-600">|</span>
              <span className="text-[#0077B6] dark:text-cyan-400 font-sans">Enterprise SAP Automation Ecosystem</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15] font-display"
            >
              Unify Desktop Automation, Workflows &amp; Governance Under{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#0A1931] to-[#00A3E0] dark:from-white dark:via-cyan-200 dark:to-[#00A3E0]">
                Knooviq Automation Suite
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto font-sans"
            >
              The premier enterprise automation architecture for SAP landscapes. Combine the desktop agility of <strong>Automation Studio</strong>, the orchestrated governance of <strong>Automation Evolve</strong>, and the centralized administrative oversight of <strong>Automation Manager</strong> into a cohesive, clean-core platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
            >
              <button
                onClick={() => onOpenContact?.('Knooviq Automation Suite Consultation')}
                className="px-8 py-3.5 rounded-xl bg-[#00A3E0] hover:bg-[#008bc0] text-white font-semibold text-sm shadow-md shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request Suite Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#suite-simulator"
                className="px-6 py-3.5 rounded-xl bg-white dark:bg-[#0B1528] hover:bg-slate-50 dark:hover:bg-[#0E1A33] border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-all flex items-center gap-2 shadow-xs hover:-translate-y-0.5"
              >
                <span>Explore Tri-Pillar Architecture</span>
                <ArrowRight className="h-4 w-4 text-[#00A3E0]" />
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. THE 3 CORE PILLARS SHOWCASE CARDS
          ========================================================================= */}
      <section className="py-16 bg-white dark:bg-[#070E1C] border-y-2 border-slate-300 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0] dark:text-cyan-400">
              The Three Core Pillars
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Complete End-to-End SAP Automation Architecture
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Tailored capabilities designed to address every layer of enterprise data maintenance, process workflow, and IT governance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-2xl p-7 bg-slate-50 dark:bg-[#0B1528] border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#00A3E0]/10 text-[#00A3E0] flex items-center justify-center">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                        {pillar.badge}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0077B6] dark:text-cyan-400">
                        {pillar.name}
                      </span>
                      <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-1">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      {pillar.summary}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t-2 border-slate-200 dark:border-slate-800">
                    <Link
                      to={pillar.route}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#00A3E0] hover:text-[#0077B6] dark:hover:text-cyan-300 transition-colors group"
                    >
                      <span>Explore {pillar.name} Details</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. INTERACTIVE SIMULATOR (Tri-Pillar Orchestrator - Zero Images)
          ========================================================================= */}
      <section id="suite-simulator" className="py-20 sm:py-28 bg-[#F8FAFC] dark:bg-[#050B17] border-y-2 border-slate-300 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[500px] bg-[#00A3E0]/10 dark:bg-[#00A3E0]/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0] dark:text-cyan-400">
              Interactive Suite Orchestrator
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Live Tri-Pillar Architecture Simulator
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Switch between the three pillars to see how templates, workflows, and governance rules interlock in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: 3 Pillar Selection Cards */}
            <div className="lg:col-span-5 space-y-3.5">
              {pillars.map((pillar) => {
                const isActive = activePillar === pillar.id;
                return (
                  <div
                    key={pillar.id}
                    onClick={() => setActivePillar(pillar.id)}
                    className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 border-2 ${
                      isActive
                        ? `bg-white dark:bg-[#070E1C] ${pillar.themeBorder} shadow-lg scale-[1.02] border-l-4`
                        : 'bg-white/70 dark:bg-[#0B1528]/70 border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all font-mono font-bold text-sm ${
                        isActive ? 'bg-[#00A3E0] text-white shadow-md' : 'bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-400'
                      }`}>
                        0{pillar.id}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                            isActive ? 'text-[#00A3E0] dark:text-cyan-400' : 'text-slate-500 dark:text-slate-400'
                          }`}>
                            {pillar.name}
                          </span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                            isActive ? pillar.themeBg : 'bg-slate-100 dark:bg-white/5 text-slate-500 border-slate-200 dark:border-white/5'
                          }`}>
                            {pillar.badge}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                          {pillar.title}
                        </h3>

                        <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-1 leading-relaxed">
                          {pillar.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Code-Driven Console Simulator (Zero Images) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-cyan-500/30 via-purple-500/20 to-blue-600/20 dark:from-cyan-500/40 dark:via-purple-500/20 dark:to-transparent shadow-2xl">
                <div className="relative rounded-[14px] bg-[#070E1C] border-2 border-slate-300 dark:border-slate-700 overflow-hidden shadow-2xl p-5 sm:p-7 min-h-[500px] flex flex-col justify-between">
                  
                  {/* Subtle Background Glows */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

                  {/* Terminal Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-2 border-slate-800 relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-[11px] font-mono font-bold text-slate-400">
                        knooviq-kernel://automation-suite-orchestrator
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {pillars.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => setActivePillar(p.id)}
                          className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold transition-all cursor-pointer ${
                            activePillar === p.id
                              ? 'bg-[#00A3E0] text-white shadow-md shadow-cyan-500/30'
                              : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          PILLAR 0{p.id}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Main Simulator Canvas */}
                  <div className="py-6 flex-1 flex items-center justify-center relative z-10">
                    <AnimatePresence mode="wait">
                      {activePillar === 1 && (
                        <motion.div
                          key="suite-pillar-1"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                              Pillar 1: Automation Studio (Desktop Engine)
                            </span>
                            <Link to="/products/automation-studio" className="text-[10px] font-mono text-cyan-300 hover:underline flex items-center gap-1">
                              <span>Open Studio Page</span>
                              <ChevronRight className="h-3 w-3" />
                            </Link>
                          </div>

                          <div className="relative p-4 rounded-xl bg-white/5 border border-cyan-500/30 overflow-hidden space-y-3">
                            <motion.div
                              animate={{ y: [-5, 95, -5] }}
                              transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
                              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#38bdf8] pointer-events-none z-20"
                            />

                            <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-slate-800">
                              <span className="text-slate-300">Mode:</span>
                              <span className="text-emerald-400 font-bold">Microsoft Excel Dynamic Add-In</span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                              <div className="p-2.5 rounded bg-black/40 border border-slate-800">
                                <span className="text-slate-400 text-[9px] block">TRANSACTION RECORDING</span>
                                <span className="text-white">GUI &amp; BAPI Visual Capture</span>
                              </div>
                              <div className="p-2.5 rounded bg-black/40 border border-slate-800">
                                <span className="text-slate-400 text-[9px] block">SAFE QUERY BUILDER</span>
                                <span className="text-white">Multi-Table Zero-Impact Extract</span>
                              </div>
                            </div>

                            <div className="p-2 rounded bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 text-center">
                              No ABAP Required • Direct Connection to SAP S/4HANA &amp; ECC
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activePillar === 2 && (
                        <motion.div
                          key="suite-pillar-2"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                              Pillar 2: Automation Evolve (Workflow Engine)
                            </span>
                            <Link to="/products/automation-evolve" className="text-[10px] font-mono text-purple-300 hover:underline flex items-center gap-1">
                              <span>Open Evolve Page</span>
                              <ChevronRight className="h-3 w-3" />
                            </Link>
                          </div>

                          <div className="relative p-4 rounded-xl bg-white/5 border border-purple-500/30 overflow-hidden space-y-3">
                            <motion.div
                              animate={{ y: [-5, 95, -5] }}
                              transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
                              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_12px_#c084fc] pointer-events-none z-20"
                            />

                            <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-slate-800">
                              <span className="text-slate-300">Mode:</span>
                              <span className="text-purple-300 font-bold">Multi-Stage Web Approval Mesh</span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                              <div className="p-2.5 rounded bg-black/40 border border-slate-800">
                                <span className="text-slate-400 text-[9px] block">DYNAMIC WEB FORMS</span>
                                <span className="text-white">Responsive Client Interface</span>
                              </div>
                              <div className="p-2.5 rounded bg-black/40 border border-slate-800">
                                <span className="text-slate-400 text-[9px] block">MASTER DATA GOVERNANCE</span>
                                <span className="text-white">Material &amp; Vendor Lifecycle</span>
                              </div>
                            </div>

                            <div className="p-2 rounded bg-purple-500/10 border border-purple-500/30 text-[10px] font-mono text-purple-300 text-center">
                              Automated Routing • Multi-Tier Digital Signatures • Zero Drift Posting
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activePillar === 3 && (
                        <motion.div
                          key="suite-pillar-3"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                              Pillar 3: Automation Manager (Governance Console)
                            </span>
                            <Link to="/products/automation-manager" className="text-[10px] font-mono text-blue-300 hover:underline flex items-center gap-1">
                              <span>Open Manager Page</span>
                              <ChevronRight className="h-3 w-3" />
                            </Link>
                          </div>

                          <div className="relative p-4 rounded-xl bg-white/5 border border-blue-500/30 overflow-hidden space-y-3">
                            <motion.div
                              animate={{ y: [-5, 95, -5] }}
                              transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
                              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_12px_#60a5fa] pointer-events-none z-20"
                            />

                            <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-slate-800">
                              <span className="text-slate-300">Mode:</span>
                              <span className="text-blue-300 font-bold">Central Administrative Security Hub</span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                              <div className="p-2.5 rounded bg-black/40 border border-slate-800">
                                <span className="text-slate-400 text-[9px] block">CENTRAL SCRIPT VAULT</span>
                                <span className="text-white">Version Control &amp; Promotion</span>
                              </div>
                              <div className="p-2.5 rounded bg-black/40 border border-slate-800">
                                <span className="text-slate-400 text-[9px] block">BATCH SCHEDULER</span>
                                <span className="text-white">Off-Peak Autonomous Runs</span>
                              </div>
                            </div>

                            <div className="p-2 rounded bg-blue-500/10 border border-blue-500/30 text-[10px] font-mono text-blue-300 text-center">
                              SOX-Ready Audit Trails • Granular SAP Authorization Enforced
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer Controls */}
                  <div className="pt-4 border-t-2 border-slate-800 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[11px] font-mono text-slate-400">
                        Suite State: Fully Orchestrated
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActivePillar(prev => prev > 1 ? prev - 1 : 3)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
                        aria-label="Previous pillar"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => setActivePillar(prev => prev < 3 ? prev + 1 : 1)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
                        aria-label="Next pillar"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          4. ENTERPRISE VALUE MATRIX
          ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#070E1C] border-y-2 border-slate-300 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0] dark:text-cyan-400">
              Strategic Advantages
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Why Global Enterprises Standardize on Knooviq Automation Suite
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
              Achieve exponential business acceleration while upholding rigorous enterprise architecture standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseValuePoints.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all shadow-xs hover:shadow-md space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-[#00A3E0] flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. CTA SECTION
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-sky-50 dark:from-[#050B17] dark:to-[#070E1C] border-t-2 border-slate-300 dark:border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-white/5 border-2 border-slate-300 dark:border-slate-700 text-xs font-mono font-bold text-[#00A3E0]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>KNOOVIQ AUTOMATION SUITE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Ready to Automate Your SAP Landscape?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
            Discover how Knooviq Automation Suite can reduce operational friction, eliminate data errors, and modernize your business operations today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact?.('Knooviq Automation Suite Consultation')}
              className="px-8 py-4 rounded-xl bg-[#00A3E0] hover:bg-[#008bc0] text-white font-semibold text-sm shadow-md shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Architecture Briefing</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
export default AutomationSuitePage;
