import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Database,
  Layers,
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
  BarChart3,
  Server,
  FileCode,
  Terminal,
  Boxes,
  Sparkles,
  Lock
} from 'lucide-react';

interface CustomCodeMigrationPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const CustomCodeMigrationPage: React.FC<CustomCodeMigrationPageProps> = ({ onOpenContact }) => {
  useEffect(() => {
    document.title = 'SAP Custom Code Migration | Clean Core ABAP Modernization | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // State for 5-Phase Code Modernization Process
  const [activePhase, setActivePhase] = useState<number>(0);

  const codePhases = [
    {
      num: '01',
      phase: 'Analyze & Profile',
      title: 'Usage Logging & Dead Code Identification',
      timeline: 'Weeks 1 – 3',
      desc: 'Deploying ABAP Usage Procedure Logging (UPL) and Suspended Call Monitor (SCMON) in production ECC. Identifying custom objects that have not executed in the past 12–24 months.',
      deliverables: ['Custom Code Usage & Profiling Report', 'Dead Code Retirement Candidate List', 'S/4HANA Simplification Delta Matrix']
    },
    {
      num: '02',
      phase: 'Decommission',
      title: 'Dead Code Purging & Scope Reduction',
      timeline: 'Weeks 4 – 6',
      desc: 'Formally archiving and decommissioning obsolete Z-reports, inactive user exits, and test programs—routinely slashing active custom code remediation scope by 50% to 60%.',
      deliverables: ['Decommissioning Audit Trail', 'Archived Code Repository Backup', 'Reduced Remediation Workload Baseline']
    },
    {
      num: '03',
      phase: 'Automate',
      title: 'ATC Automated Quick-Fix Remediation',
      timeline: 'Weeks 7 – 11',
      desc: 'Executing SAP ABAP Test Cockpit (ATC) in ABAP Development Tools (ADT Eclipse). Applying mass automated quick-fixes for syntax adjustments, order-by clauses, and database access.',
      deliverables: ['70%+ Automated Code Fixes Applied', 'Remediated Database Statements Report', 'ATC Clean Syntax Scorecard']
    },
    {
      num: '04',
      phase: 'Clean Core',
      title: 'Clean Core Decoupling to SAP BTP',
      timeline: 'Weeks 12 – 16',
      desc: 'Refactoring strategic core extensions to Clean Core ABAP Cloud standards. Moving complex bespoke functionality side-by-side onto SAP Business Technology Platform (BTP) using RAP & CAP.',
      deliverables: ['Decoupled Side-by-Side BTP Extensions', 'Whitelisted Release API Contracts', 'Clean Core Architecture Certification']
    },
    {
      num: '05',
      phase: 'Validate & Run',
      title: 'Automated Testing & Production Deployment',
      timeline: 'Weeks 17 – 20',
      desc: 'Executing automated ABAP Unit tests, running regression suites across business transactions, and deploying modern code packages to production S/4HANA with zero cutover errors.',
      deliverables: ['Automated ABAP Unit Test Sign-off', 'Zero Regression Production Deployment', 'Post-Go-Live Code Performance Monitoring']
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* =========================================================================
          SECTION 1: HERO — CUSTOM CODE MIGRATION
          ========================================================================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-900 via-[#0B1528] to-[#050B17] text-white">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-amber-500/20 via-orange-600/15 to-blue-500/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
                <Cpu className="w-3.5 h-3.5 text-amber-400" />
                <span>CLEAN CORE ABAP MODERNIZATION • AUTOMATED REMEDIATION</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                SAP S/4HANA <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
                  Custom Code Migration
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
                Analyze, remediate, simplify, and migrate legacy custom ABAP code to SAP S/4HANA. Purge dead code, apply <strong>70%+ automated quick-fixes via ATC</strong>, and transition to a future-proof <strong>Clean Core</strong> architecture.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  { label: 'Automated Fixes', val: '70%+ Mass Fix', icon: Zap, color: 'text-amber-400' },
                  { label: 'Dead Code Purge', val: 'Up to 60%', icon: ShieldCheck, color: 'text-emerald-400' },
                  { label: 'Cloud Standard', val: 'Clean Core ABAP', icon: Cpu, color: 'text-cyan-400' },
                  { label: 'Upgrade Impact', val: 'Zero Breakage', icon: CheckCircle2, color: 'text-blue-400' }
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
                  onClick={() => onOpenContact ? onOpenContact('Custom Code Remediation & Clean Core Audit') : null}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black text-sm tracking-wide transition-all shadow-xl shadow-amber-500/25 flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <span>Request Custom Code Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#overview"
                  className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white font-bold text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Clean Core Blueprint</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#060D1A] group">
                <div className="px-5 py-3.5 bg-[#0A1628] border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-amber-400 font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                    <span>ABAP TEST COCKPIT (ATC)</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[11px]">Clean Core Active</span>
                </div>

                <div className="relative p-3 bg-[#060D1A]">
                  <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 flex items-center justify-center">
                    <img
                      src="/images/migration_cleancore_clean.jpg"
                      alt="Legacy custom code being analyzed, remediated, simplified and migrated to S/4HANA"
                      className="w-full h-[340px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white space-y-1">
                      <div className="text-xs font-bold text-amber-300 flex items-center justify-between">
                        <span>Automated Code Quick-Fixes</span>
                        <span className="text-emerald-400 font-mono">70%+ Automated</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Replacing obsolete database SELECT statements and table modifications with S/4HANA compliant CDS views and Clean Core APIs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-3 bg-[#081220] border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Legacy Z-Programs & User Exits</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-amber-400 font-mono font-bold">Clean Core ABAP Cloud</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OVERVIEW — WHAT IS CUSTOM CODE MIGRATION & WHY BUSINESSES USE IT
          ========================================================================= */}
      <section id="overview" className="py-20 lg:py-28 relative bg-white dark:bg-[#070F1E] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400 text-xs font-bold tracking-wide uppercase">
                <Layers className="w-3.5 h-3.5" />
                <span>CODE MODERNIZATION OVERVIEW</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
                What is Custom Code Migration & Why It Unlocks S/4HANA Speed
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                Over decades, enterprise SAP ECC instances accumulate thousands of custom Z-programs, user exits, and proprietary database modifications. In SAP S/4HANA, the underlying data model is completely simplified—traditional tables like <strong>BSEG, BSIS, and COEP</strong> are replaced by the Universal Journal (ACDOCA), and aggregate tables like <strong>GLT0</strong> are eliminated. Unadjusted legacy ABAP triggers instant runtime dumps.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: 'Purge Inactive & Dead Custom Code',
                    desc: 'Usage Procedure Logging (UPL) reveals that 50% to 60% of custom objects have not been executed in years. Decommissioning them cuts project scope in half.'
                  },
                  {
                    title: 'Automated ATC Quick-Fixes',
                    desc: 'SAP ABAP Test Cockpit applies automated syntax adaptations across thousands of objects in seconds, resolving database access and field length changes.'
                  },
                  {
                    title: 'Adopt Clean Core Extensibility',
                    desc: 'Decouple core business extensions to SAP BTP using modern ABAP Cloud RESTful Application Programming (RAP), ensuring effortless future S/4HANA upgrades.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
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
                    src="/images/clean_core_remediation.jpg"
                    alt="SAP Clean Core ABAP Modernization and Code Remediation"
                    className="w-full h-80 sm:h-96 lg:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold mb-2 inline-block border border-amber-400/30">
                      CLEAN CORE ARCHITECTURE
                    </span>
                    <h3 className="text-xl font-bold text-white">Decoupled ABAP Cloud</h3>
                    <p className="text-xs text-slate-300 mt-1 max-w-lg">
                      Transforming legacy procedural code into modern, event-driven microservices on SAP BTP.
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>CODE DEBT PITFALLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              Critical Custom Code Modernization Challenges
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Unremediated custom code is the #1 cause of post-migration crashes and production transaction failures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: AlertTriangle,
                color: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
                title: '1. Eliminated Database Tables (e.g. GLT0, KNC1)',
                desc: 'Legacy programs selecting directly from eliminated aggregate tables fail instantly in S/4HANA without redirect CDS views or query refactoring.'
              },
              {
                icon: Database,
                color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
                title: '2. Obsolete SELECT * Queries on BSEG/BKPF',
                desc: 'Unindexed full table scans on multi-gigabyte financial tables severely degrade in-memory HANA performance without field-specific projection.'
              },
              {
                icon: Clock,
                color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
                title: '3. Enormous Dead Code Volume',
                desc: 'Manually testing thousands of obsolete custom objects inflates project consulting costs and stretches timelines by months.'
              },
              {
                icon: Cpu,
                color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
                title: '4. Non-Whitelisted Core Modifications',
                desc: 'Direct modifications to standard SAP standard include programs block automated annual S/4HANA release upgrades.'
              },
              {
                icon: Workflow,
                color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
                title: '5. Deprecated Native SQL Statements',
                desc: 'Database-specific hints (e.g. Oracle EXEC SQL) and non-standard native queries cause syntax errors during compile time on SAP HANA.'
              },
              {
                icon: ShieldCheck,
                color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
                title: '6. Material Number Length Field Extensions',
                desc: 'S/4HANA expands material numbers (MATNR) from 18 to 40 characters. Concatenation logic and custom screens overflow without syntax adjustments.'
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>REMEDIATION CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              Knooviq Custom Code Modernization Suite
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Automated code refactoring, dead code decommissioning, and Clean Core decoupling to SAP BTP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: 'Automated ATC Quick-Fixes',
                desc: 'Mass automated resolution of 70%+ of ABAP syntax warnings using Eclipse ADT quick-fix engines.'
              },
              {
                icon: ShieldCheck,
                title: 'Dead Code Decommissioning',
                desc: 'Profiling active usage with SCMON and UPL to safely archive and retire up to 60% of unused legacy Z-code.'
              },
              {
                icon: Cpu,
                title: 'Clean Core ABAP Cloud',
                desc: 'Refactoring remaining business logic to strict ABAP Cloud standards using whitelisted SAP APIs.'
              },
              {
                icon: Server,
                title: 'BTP Side-by-Side Decoupling',
                desc: 'Migrating bespoke workflows and portal applications to SAP BTP with RAP and CAP frameworks.'
              }
            ].map((cap, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
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
          SECTION 5: MIGRATION PROCESS (5-STAGE ROADMAP)
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5" />
              <span>REMEDIATION TIMELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              The 5-Stage Code Modernization Journey
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              A systematic engineering framework eliminating dead code, automating syntax fixes, and certifying Clean Core compliance.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {codePhases.map((phase, idx) => {
              const isSelected = activePhase === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePhase(idx)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-lg shadow-amber-500/25 ring-2 ring-amber-400/40 font-bold'
                      : 'bg-white dark:bg-[#070F1E] text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-amber-300'
                  }`}
                >
                  <div className={`text-xs font-mono font-bold mb-1 ${isSelected ? 'text-slate-900' : 'text-amber-500'}`}>
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold font-mono">
                  PHASE {codePhases[activePhase].num} • {codePhases[activePhase].phase.toUpperCase()}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0A1931] dark:text-white">
                  {codePhases[activePhase].title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {codePhases[activePhase].desc}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Phase Deliverables</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {codePhases[activePhase].deliverables.map((item, d) => (
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
                <div className="text-3xl font-black text-amber-500">{codePhases[activePhase].timeline}</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Automated tooling dramatically accelerates delivery while eliminating manual regression errors.
                </p>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs font-mono text-emerald-500 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% Clean Core Certification</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: SAP & TECHNOLOGY (TOOLS & 3D BTP ARCHITECTURE VISUAL)
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-white dark:bg-[#070F1E] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Server className="w-3.5 h-3.5" />
              <span>MODERN DEVELOPMENT STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              ABAP Modernization Technologies & Tools
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Official SAP development environments, automated static analysis tools, and next-gen cloud frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#060D1A] group">
                <div className="px-5 py-3.5 bg-[#0A1628] border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-amber-400 font-bold">
                    <Cpu className="w-4 h-4 text-amber-400" />
                    <span>SAP BTP EXTENSIBILITY ARCHITECTURE</span>
                  </div>
                  <span className="text-cyan-400 font-mono text-[11px]">RAP & CAP Standard</span>
                </div>

                <div className="p-3 bg-[#060D1A]">
                  <img
                    src="/images/sap_btp_architecture_3d.jpg"
                    alt="SAP BTP Architecture for Clean Core Custom Extensions"
                    className="w-full h-80 object-cover rounded-2xl border border-slate-800 bg-slate-950"
                  />
                </div>

                <div className="px-5 py-3 bg-[#081220] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Side-by-Side Extensions</span>
                  <span className="text-emerald-400 font-mono font-bold">Clean Core Certified</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {[
                {
                  tech: 'SAP ABAP Test Cockpit (ATC)',
                  desc: 'Central static code analysis engine validating syntax against the SAP S/4HANA Simplification Database.'
                },
                {
                  tech: 'Custom Code Migration App (Fiori)',
                  desc: 'Cloud-ready Fiori application scoping custom code usage and filtering objects by package and component.'
                },
                {
                  tech: 'ABAP Development Tools (ADT in Eclipse)',
                  desc: 'Integrated development environment executing automated mass quick-fixes and refactoring legacy ABAP.'
                },
                {
                  tech: 'ABAP RESTful Application Programming (RAP)',
                  desc: 'Modern programming model for building enterprise Fiori apps and OData services on Clean Core.'
                },
                {
                  tech: 'SAP BTP ABAP Environment (Steampunk)',
                  desc: 'Cloud runtime for side-by-side extensions decoupled from the S/4HANA core via whitelisted APIs.'
                }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
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
              <span>MEASURABLE OUTCOMES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              Custom Code Modernization Outcomes
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Transforming your custom code elevates system performance and guarantees effortless future cloud upgrades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stat: '60% Less',
                label: 'Code Footprint',
                desc: 'Decommissioning unused legacy Z-code eliminates over half of your historical maintenance burden.'
              },
              {
                stat: '70%+',
                label: 'Automated Quick-Fixes',
                desc: 'Mass automated remediation resolves syntax warnings in bulk, slashing consulting hours.'
              },
              {
                stat: '100% Clean',
                label: 'Clean Core Compliance',
                desc: 'Decoupled extensions enable painless, automatic annual S/4HANA release upgrades.'
              },
              {
                stat: '10x Faster',
                label: 'In-Memory Queries',
                desc: 'Optimized ABAP statements fully harness the column-store parallel computing power of SAP HANA.'
              }
            ].map((outcome, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-[#070F1E] border border-slate-200 dark:border-slate-800 shadow-md space-y-2 text-center md:text-left">
                <div className="text-3xl font-black text-amber-500">{outcome.stat}</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">{outcome.label}</div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1">{outcome.desc}</p>
              </div>
            ))}
          </div>

          {/* Strong Final CTA Card */}
          <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-gradient-to-r from-amber-950/60 via-[#0A1628] to-[#050B17] p-8 sm:p-12 text-white relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold border border-amber-400/30">
                  CLEAN CORE CODE MODERNIZATION
                </span>
                <h3 className="text-3xl sm:text-4xl font-black">
                  Start Your SAP Migration Journey
                </h3>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                  Connect with Knooviq’s certified SAP architects for a comprehensive ABAP Test Cockpit code scan, dead code usage analysis, and Clean Core refactoring roadmap.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  onClick={() => onOpenContact ? onOpenContact('Custom Code Migration & Clean Core Consultation') : null}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black text-sm tracking-wide transition-all shadow-xl shadow-amber-500/30 flex items-center justify-center gap-2 cursor-pointer"
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
