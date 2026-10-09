import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  RefreshCw,
  Layers,
  Database,
  ShieldCheck,
  Zap,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Activity,
  Check,
  Workflow,
  Cpu,
  BarChart3,
  Server,
  Lock,
  Boxes
} from 'lucide-react';

interface BrownfieldPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const BrownfieldPage: React.FC<BrownfieldPageProps> = ({ onOpenContact }) => {
  useEffect(() => {
    document.title = 'SAP S/4HANA Brownfield Migration | In-Place Modernization | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // State for 5-Phase Brownfield Process
  const [activePhase, setActivePhase] = useState<number>(0);

  const brownfieldPhases = [
    {
      num: '01',
      phase: 'Assessment',
      title: 'Landscape Discovery & Sizing Analysis',
      timeline: 'Weeks 1 – 3',
      desc: 'Executing SAP Readiness Check 2.0, analyzing the Simplification Item Catalog, running HANA sizing reports (/SDF/HANA_BW_SIZING), and reviewing custom Z-code scope.',
      deliverables: ['Readiness Check 2.0 Scorecard', 'HANA Memory Sizing Baseline', 'Custom Code Complexity Audit']
    },
    {
      num: '02',
      phase: 'Preparation',
      title: 'CVI Sync & Custom Code Pre-Remediation',
      timeline: 'Weeks 4 – 7',
      desc: 'Executing Customer Vendor Integration (CVI) to map existing customers and vendors to SAP Business Partners, running ATC quick-fixes, and certifying ISV add-ons.',
      deliverables: ['100% CVI Business Partner Sync', 'Automated ATC Code Fixes Applied', 'Target Stack XML from Maintenance Planner']
    },
    {
      num: '03',
      phase: 'Dry Run',
      title: 'Dual Mock Conversions in Sandbox',
      timeline: 'Weeks 8 – 13',
      desc: 'Executing two complete mock runs on a full copy of production data. Calibrating memory distribution, measuring table transfer speeds, and timing cutover to the minute.',
      deliverables: ['Validated Cutover Runbook', 'Table Export/Import Benchmarks', 'Finance Balance Reconciliation Baseline']
    },
    {
      num: '04',
      phase: 'Cutover',
      title: 'Downtime-Optimized Production Weekend',
      timeline: 'Weekend Window (< 12h)',
      desc: 'Production cutover executed via Software Update Manager (SUM 2.0 DMO). Shadow system conversion ensures general ledger and tables migrate with under 12 hours outage.',
      deliverables: ['Live Production SAP S/4HANA System', 'Universal Journal (ACDOCA) Activated', 'Zero Data Loss Sign-Off']
    },
    {
      num: '05',
      phase: 'Hypercare',
      title: 'Reconciliation Sign-Off & 24/7 Hypercare',
      timeline: 'Weeks 14 – 18',
      desc: 'Dedicated on-site and remote Basis and functional experts verifying subledger reconciliations, monitoring HANA performance, and supporting the first month-end close.',
      deliverables: ['100% Financial Reconciliation Sign-Off', 'First Month-End Financial Closing', 'Fiori Launchpad Enablement']
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* =========================================================================
          SECTION 1: HERO — BROWNFIELD MIGRATION
          ========================================================================= */}
      <section className="relative w-full min-h-[600px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-14 overflow-hidden bg-slate-950 text-white">
        
        {/* Full-Bleed Background Visual */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/brownfield_data_migration_2026.jpg"
            alt="SAP S/4HANA Brownfield Data Migration Architecture"
            className="w-full h-full object-cover object-right lg:object-[82%_center] brightness-110 contrast-105 saturate-[1.05]"
          />
          {/* Dedicated text-readability scrim on left; 100% bright & clear on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 via-45% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
              <RefreshCw className="w-3.5 h-3.5 text-blue-400" />
              <span>IN-PLACE MIGRATION • 100% INVESTMENT PRESERVATION</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              SAP S/4HANA <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Brownfield Migration
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
              Modernize your existing SAP ECC 6.0 in-place while preserving your investments. Retain <strong>100% of historical transactions, customizations, and configurations</strong> with zero operational disruption and <strong>&lt; 12 hours cutover downtime</strong>.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { label: 'Data Retention', val: '100% Preserved', icon: ShieldCheck, color: 'text-emerald-400' },
                { label: 'Project Speed', val: '3 – 5 Months', icon: Clock, color: 'text-cyan-400' },
                { label: 'Change Burden', val: 'Low Friction', icon: Zap, color: 'text-blue-400' },
                { label: 'DB Upgrade', val: '1-Step SUM DMO', icon: Database, color: 'text-indigo-400' }
              ].map((stat, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm space-y-0.5">
                  <stat.icon className={`w-4 h-4 ${stat.color} mb-1`} />
                  <div className="text-sm font-black text-white">{stat.val}</div>
                  <div className="text-[11px] text-slate-400 uppercase font-mono">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenContact ? onOpenContact('Brownfield S/4HANA Migration Assessment') : null}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-black text-sm tracking-wide transition-all shadow-xl shadow-blue-500/25 flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Request Brownfield Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#overview"
                className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white font-bold text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Brownfield Architecture</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OVERVIEW — WHAT IS BROWNFIELD & WHY BUSINESSES USE IT
          ========================================================================= */}
      <section id="overview" className="py-20 lg:py-28 relative bg-white dark:bg-[#070F1E] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wide uppercase">
                <Layers className="w-3.5 h-3.5" />
                <span>IN-PLACE MIGRATION OVERVIEW</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
                What is Brownfield Migration & Why Businesses Choose It
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                Brownfield migration upgrades your existing SAP ECC 6.0 instance in-place directly to SAP S/4HANA. It allows established enterprises to safeguard their multi-million dollar investments in custom configurations, business workflows, and historical ledger records while gaining all the speed and analytics benefits of SAP HANA in-memory architecture.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: 'Retain All Historical Audit Trails',
                    desc: '100% of accounting records, sales orders, purchase documents, and change logs are converted in-place, eliminating the need for legacy archive lookups.'
                  },
                  {
                    title: 'Protect Custom Business Intellectual Property',
                    desc: 'Preserve highly customized pricing procedures, manufacturing workflows, and specialized logic that give your enterprise competitive advantage.'
                  },
                  {
                    title: 'Lowest Organizational Disruption',
                    desc: 'Business users continue working with familiar processes and master data numbering, avoiding the severe retraining curve of greenfield re-implementations.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-900 group">
                <div className="relative">
                  <img
                    src="/images/selective_data_transition.jpg"
                    alt="Brownfield and Selective Modernization Architecture"
                    className="w-full h-80 sm:h-96 lg:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-bold mb-2 inline-block border border-blue-400/30">
                      INVESTMENT SAFEGUARD BLUEPRINT
                    </span>
                    <h3 className="text-xl font-bold text-white">Full Configuration Continuity</h3>
                    <p className="text-xs text-slate-300 mt-1 max-w-lg">
                      Upgrading your data model to Universal Journal (ACDOCA) while maintaining 100% ledger balance continuity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: KEY CHALLENGES (4–6 CRITICAL CHALLENGES + CARDS + VISUAL)
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>BROWNFIELD HURDLES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              Key Technical Challenges in Brownfield Migration
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Because Brownfield brings forward existing configurations and code, rigorous automated remediation is mandatory to prevent cutover delays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Cpu,
                color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
                title: '1. Custom Code (Z-Objects) Remediation',
                desc: 'Carrying forward legacy ABAP code requires remediating syntax errors caused by eliminated database tables and non-Unicode statements.'
              },
              {
                icon: Database,
                color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
                title: '2. Multi-Terabyte Database Volume',
                desc: 'Large historical databases require extensive memory sizing and table archiving prior to conversion to avoid prohibitive HANA RAM costs.'
              },
              {
                icon: Workflow,
                color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
                title: '3. Customer Vendor Integration (CVI) Pre-Sync',
                desc: 'Every customer and supplier must be cleanly mapped to SAP Business Partner (BP) before technical conversion can proceed.'
              },
              {
                icon: Clock,
                color: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
                title: '4. Cutover Business Downtime Management',
                desc: 'Without Near-Zero Downtime (NZDT) technology, converting massive tables can stretch into Monday morning trading hours.'
              },
              {
                icon: Server,
                color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
                title: '5. Mandatory Material Ledger Setup',
                desc: 'Activating actual costing and setting up currency valuation structures for existing materials requires precise pre-configuration.'
              },
              {
                icon: ShieldCheck,
                color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
                title: '6. Year-End Asset Accounting Reconciliation',
                desc: 'All unposted depreciation, open asset postings, and clearing items must be resolved in ECC before ACDOCA ledger migration.'
              }
            ].map((challenge, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#070F1E] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${challenge.color}`}>
                  <challenge.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{challenge.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: MIGRATION CAPABILITIES (SERVICES PROVIDED + CARDS)
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-white dark:bg-[#070F1E] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>BROWNFIELD CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              Knooviq Brownfield Modernization Suite
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Industrialized tooling ensuring zero data loss, automated code remediation, and rapid project completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Server,
                title: '1-Step SUM DMO Migration',
                desc: 'Concurrent OS/DB migration and S/4HANA application upgrade streaming tables directly into HANA memory.'
              },
              {
                icon: Cpu,
                title: 'Automated Code Modernization',
                desc: 'Automated quick-fixes resolving 70%+ of ABAP syntax warnings with Clean Core decoupling to SAP BTP.'
              },
              {
                icon: Database,
                title: 'ACDOCA Universal Journal',
                desc: 'In-place consolidation of traditional BSEG/COEP tables into single high-performance line-item architecture.'
              },
              {
                icon: Clock,
                title: 'Near-Zero Downtime (NZDT)',
                desc: 'Shadow system processing converting data tables in the background to ensure < 12h cutover outage.'
              }
            ].map((cap, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                  <cap.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{cap.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: MIGRATION PROCESS (5-PHASE ROADMAP)
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5" />
              <span>IN-PLACE TIMELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              The 5-Phase Brownfield Migration Journey
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Predictable, milestone-driven execution calibrated through dual mock conversions to ensure risk-free cutover.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {brownfieldPhases.map((phase, idx) => {
              const isSelected = activePhase === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePhase(idx)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25 ring-2 ring-blue-400/40 font-bold'
                      : 'bg-white dark:bg-[#070F1E] text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-blue-300'
                  }`}
                >
                  <div className={`text-xs font-mono font-bold mb-1 ${isSelected ? 'text-blue-200' : 'text-blue-500'}`}>
                    PHASE {phase.num}
                  </div>
                  <div className="text-xs sm:text-sm font-black leading-snug">{phase.phase}</div>
                </button>
              );
            })}
          </div>

          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white dark:bg-[#070F1E] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-bold font-mono">
                  PHASE {brownfieldPhases[activePhase].num} • {brownfieldPhases[activePhase].phase.toUpperCase()}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0A1931] dark:text-white">
                  {brownfieldPhases[activePhase].title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {brownfieldPhases[activePhase].desc}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Phase Deliverables</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {brownfieldPhases[activePhase].deliverables.map((item, d) => (
                      <div key={d} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Benchmark Duration</div>
                <div className="text-3xl font-black text-blue-500">{brownfieldPhases[activePhase].timeline}</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Calibrated across mock runs on production-copy databases to ensure 100% cutover predictability.
                </p>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs font-mono text-emerald-500 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% Fixed-Price Scope Guarantee</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: SAP & TECHNOLOGY (TOOLS & 3D ENTERPRISE VISUAL)
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-white dark:bg-[#070F1E] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Server className="w-3.5 h-3.5" />
              <span>TECHNICAL TOOLING SUITE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              Brownfield Technologies & SAP Tools
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Enterprise migration accelerators and standard SAP upgrade utilities ensuring zero data loss and automated cutover.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#060D1A] group">
                <div className="px-5 py-3.5 bg-[#0A1628] border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold">
                    <Database className="w-4 h-4 text-cyan-400" />
                    <span>FINANCIAL & CORE ARCHITECTURE</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[11px]">Universal Journal Active</span>
                </div>

                <div className="p-3 bg-[#060D1A]">
                  <img
                    src="/images/sap_app_finance_3d.jpg"
                    alt="SAP S/4HANA Finance and Core In-Place Modernization"
                    className="w-full h-80 object-cover rounded-2xl border border-slate-800 bg-slate-950"
                  />
                </div>

                <div className="px-5 py-3 bg-[#081220] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Zero Historical Data Loss</span>
                  <span className="text-cyan-400 font-mono font-bold">100% Ledger Match</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {[
                {
                  tech: 'Software Update Manager (SUM 2.0 DMO)',
                  desc: 'Industry standard for 1-step upgrade and heterogeneous database migration directly to SAP HANA DB.'
                },
                {
                  tech: 'SAP ABAP Test Cockpit (ATC)',
                  desc: 'Automates syntax checks and applies quick-fixes to adapt custom Z-code for S/4HANA compatibility.'
                },
                {
                  tech: 'Customer Vendor Integration (CVI_COCKPIT)',
                  desc: 'Synchronizes legacy customer and vendor records into unified Business Partners with key mapping.'
                },
                {
                  tech: 'Financial Migration Cockpit',
                  desc: 'Executes automated data model conversion from BSEG, BSIS, and COEP into Universal Journal (ACDOCA).'
                },
                {
                  tech: 'SAP HANA Cockpit',
                  desc: 'Real-time database administration, memory distribution monitoring, and column-store performance tuning.'
                }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    {item.tech}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 pl-4 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: BUSINESS OUTCOMES + STRONG CTA
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-slate-50 dark:bg-[#050B17] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>PROVEN VALUE PROPOSITION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              Brownfield Business Outcomes
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Deliver S/4HANA speed and intelligence while protecting your established business workflows and data continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stat: '100%',
                label: 'Historical Data Retention',
                desc: 'Complete general ledger, purchasing, and sales history preserved intact for legal compliance.'
              },
              {
                stat: '3 – 5 Months',
                label: 'Fastest Route to S/4HANA',
                desc: '60% faster go-live compared to multi-year greenfield reimplementation cycles.'
              },
              {
                stat: 'Low Friction',
                label: 'Minimal Change Management',
                desc: 'Users retain familiar business processes and configurations, avoiding major productivity drops.'
              },
              {
                stat: 'Zero Penalty',
                label: 'ECC 2027 Exemption',
                desc: 'Avoid costly annual extended maintenance surcharges from SAP by modernizing your core on time.'
              }
            ].map((outcome, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-[#070F1E] border border-slate-200 dark:border-slate-800 shadow-md space-y-2 text-center md:text-left">
                <div className="text-3xl font-black text-blue-500">{outcome.stat}</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">{outcome.label}</div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1">{outcome.desc}</p>
              </div>
            ))}
          </div>

          {/* Strong Final CTA Card */}
          <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-gradient-to-r from-blue-950/60 via-[#0A1628] to-[#050B17] p-8 sm:p-12 text-white relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-bold border border-blue-400/30">
                  IN-PLACE UPGRADE ADVISORY
                </span>
                <h3 className="text-3xl sm:text-4xl font-black">
                  Start Your SAP Migration Journey
                </h3>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                  Connect with Knooviq’s certified SAP architects for a complimentary Brownfield Readiness Check, custom code remediation assessment, and calibrated cutover runbook.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  onClick={() => onOpenContact ? onOpenContact('Brownfield S/4HANA Migration Consultation') : null}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-black text-sm tracking-wide transition-all shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Start Your Migration Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/solutions/sap-migration"
                  className="px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white font-bold text-xs text-center border border-slate-700 transition-colors"
                >
                  <span>View All Migration Solutions ➔</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
