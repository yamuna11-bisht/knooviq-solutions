import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Rocket,
  Database,
  Layers,
  Sparkles,
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
  Cloud,
  FileCheck2,
  Globe
} from 'lucide-react';

interface GreenfieldPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const GreenfieldPage: React.FC<GreenfieldPageProps> = ({ onOpenContact }) => {
  useEffect(() => {
    document.title = 'SAP S/4HANA Greenfield Implementation | Clean Slate Cloud ERP | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // State for SAP Activate 5-Phase Process
  const [activePhase, setActivePhase] = useState<number>(0);

  const activatePhases = [
    {
      num: '01',
      phase: 'Discover',
      title: 'Digital Roadmap & Strategic Scoping',
      timeline: 'Weeks 1 – 3',
      desc: 'Formulate the enterprise cloud strategy, define project scope, align executive KPIs, and establish the digital business case leveraging SAP Signavio value accelerators.',
      deliverables: ['Cloud Architecture Roadmap', 'Business Case & TCO Model', 'Standard Scope Definition']
    },
    {
      num: '02',
      phase: 'Prepare',
      title: 'Environment Provisioning & Governance',
      timeline: 'Weeks 4 – 6',
      desc: 'Provisioning the initial SAP S/4HANA Cloud tenant, setting up SAP Cloud ALM, onboarding project teams, and defining Clean Core governance standards.',
      deliverables: ['Provisioned Cloud Starter System', 'Clean Core Governance Charter', 'SAP Cloud ALM Setup']
    },
    {
      num: '03',
      phase: 'Explore',
      title: 'Fit-to-Standard Process Workshops',
      timeline: 'Weeks 7 – 12',
      desc: 'Conducting structured Fit-to-Standard interactive workshops using pre-configured SAP Best Practices. Reviewing out-of-the-box workflows and documenting delta extensions on SAP BTP.',
      deliverables: ['Fit-to-Standard Workshop Sign-Off', 'Delta Requirements Backlog', 'BTP Side-by-Side Extension Specs']
    },
    {
      num: '04',
      phase: 'Realize',
      title: 'Sprint Configuration & Data Loads',
      timeline: 'Weeks 13 – 20',
      desc: 'Iterative agile configuration sprints, data migration loads via SAP S/4HANA Migration Cockpit, non-SAP integration validation, and user acceptance testing (UAT).',
      deliverables: ['Configured & Tested Cloud Core', 'Legacy Master & Open Data Migration', 'End-to-End User Acceptance Sign-Off']
    },
    {
      num: '05',
      phase: 'Deploy & Run',
      title: 'Cutover, Go-Live & Continuous Innovation',
      timeline: 'Weeks 21 – 24',
      desc: 'Executing the formal cutover checklist, transitioning users to the production cloud tenant, and providing dedicated on-site and remote hypercare with continuous release adoption.',
      deliverables: ['Production Cloud Go-Live', 'Operational Handover & AMS', 'First Month-End Close Support']
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* =========================================================================
          SECTION 1: HERO — GREENFIELD IMPLEMENTATION
          ========================================================================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-900 via-[#0B1528] to-[#050B17] text-white">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-emerald-500/20 via-teal-600/15 to-blue-500/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
                <Rocket className="w-3.5 h-3.5 text-emerald-400" />
                <span>CLEAN SLATE CLOUD ERP • 100% BEST PRACTICES</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                SAP S/4HANA <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Greenfield Implementation
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
                Build a modern S/4HANA environment from scratch. Start completely clean with <strong>100% SAP Best Practices</strong>, purge decades of obsolete legacy customizations, and adopt a cloud-native <strong>Clean Core</strong> architecture.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  { label: 'Technical Debt', val: 'Zero Debt', icon: ShieldCheck, color: 'text-emerald-400' },
                  { label: 'Best Practices', val: '100% Standard', icon: Sparkles, color: 'text-teal-400' },
                  { label: 'Cloud Architecture', val: 'Clean Core', icon: Cloud, color: 'text-cyan-400' },
                  { label: 'Future Upgrades', val: 'Frictionless', icon: Zap, color: 'text-blue-400' }
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
                  onClick={() => onOpenContact ? onOpenContact('Greenfield S/4HANA Implementation Advisory') : null}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 font-black text-sm tracking-wide transition-all shadow-xl shadow-emerald-500/25 flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <span>Design Your Greenfield Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#overview"
                  className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white font-bold text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Clean Slate Blueprint</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#060D1A] group">
                <div className="px-5 py-3.5 bg-[#0A1628] border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>GREENFIELD DIGITAL CORE</span>
                  </div>
                  <span className="text-teal-300 font-mono text-[11px]">Clean Core Standard</span>
                </div>

                <div className="relative p-3 bg-[#060D1A]">
                  <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 flex items-center justify-center">
                    <img
                      src="/images/greenfield_clean_slate.jpg"
                      alt="Building a completely new S/4HANA environment from scratch"
                      className="w-full h-[340px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white space-y-1">
                      <div className="text-xs font-bold text-emerald-300 flex items-center justify-between">
                        <span>100% Clean Core Standards</span>
                        <span className="text-cyan-400 font-mono">SAP Best Practices</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Re-engineering enterprise workflows around modern cloud standards without carrying forward legacy modifications.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-3 bg-[#081220] border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Zero Legacy Technical Debt</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-emerald-400 font-mono font-bold">Cloud-Native S/4HANA</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OVERVIEW — WHAT IS GREENFIELD & WHY BUSINESSES USE IT
          ========================================================================= */}
      <section id="overview" className="py-20 lg:py-28 relative bg-white dark:bg-[#070F1E] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-wide uppercase">
                <Layers className="w-3.5 h-3.5" />
                <span>CLEAN SLATE STRATEGY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
                What is Greenfield & Why High-Growth Enterprises Choose It
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                Greenfield is the clean-slate implementation of SAP S/4HANA. Rather than migrating legacy configurations and historic database tables, organizations start fresh. Business processes are configured using <strong>SAP Best Practices</strong>, and only active master data and opening balances are extracted and loaded into the new cloud core.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: 'Purge Decades of Technical Debt',
                    desc: 'Leave behind redundant Z-programs, obsolete custom user exits, and legacy spaghetti code built over 15 to 20 years in SAP ECC.'
                  },
                  {
                    title: 'Adopt Out-of-the-Box Industry Standards',
                    desc: 'Standardize operations on tested SAP Best Practices, reducing customization maintenance costs by up to 50%.'
                  },
                  {
                    title: 'Harmonize Multi-ERP Landscapes',
                    desc: 'Consolidate multiple fragmented ERP systems, legal entities, and acquired subsidiaries into a single unified global operating model.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
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
                    src="/images/sap_cloud_erp_architecture.png"
                    alt="Cloud-native SAP S/4HANA Greenfield Architecture"
                    className="w-full h-80 sm:h-96 lg:h-[440px] object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold mb-2 inline-block border border-emerald-400/30">
                      MODERN CLOUD ERP BLUEPRINT
                    </span>
                    <h3 className="text-xl font-bold text-white">Clean Core Cloud Architecture</h3>
                    <p className="text-xs text-slate-300 mt-1 max-w-lg">
                      Public and Private Cloud editions delivering automated quarterly updates and seamless side-by-side extension on SAP BTP.
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
              <span>TRANSFORMATION HURDLES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              Key Challenges in Greenfield Implementation
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Starting fresh offers tremendous power, but demands disciplined change management, strict scoping, and precise data onboarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: AlertTriangle,
                color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
                title: '1. Organizational Inertia & Process Re-engineering',
                desc: 'Business stakeholders often push to replicate legacy ECC customizations. Adhering to standard SAP Best Practices requires strong executive sponsorship.'
              },
              {
                icon: Database,
                color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
                title: '2. Complex Master & Open Data Migration',
                desc: 'Historical records must be scrubbed, deduplicated, and transformed into S/4HANA format before initial balance loads can be signed off.'
              },
              {
                icon: Clock,
                color: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
                title: '3. Extended Implementation Timelines',
                desc: 'Greenfield projects typically require 9 to 18 months of intensive scoping, sprint configuration, and cross-functional user acceptance testing.'
              },
              {
                icon: Workflow,
                color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
                title: '4. Non-SAP Satellite System Integration',
                desc: 'Third-party CRM, warehouse management, and specialized MES platforms must be re-architected to integrate with modern SAP APIs.'
              },
              {
                icon: ShieldCheck,
                color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
                title: '5. End-User Retraining & Adoption Dip',
                desc: 'Completely redesigned business workflows and modern SAP Fiori Launchpad interfaces require comprehensive change enablement to maintain productivity.'
              },
              {
                icon: Server,
                color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
                title: '6. Scope Creep & Customization Discipline',
                desc: 'Without rigorous Clean Core governance, project teams risk rebuilding unneeded Z-code, recreating the very technical debt Greenfield aims to solve.'
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>CLEAN SLATE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              Greenfield Delivery Capabilities
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Knooviq combines certified SAP industry practice frameworks with automated cloud deployment engines to engineer rapid, clean-slate success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sparkles,
                title: 'SAP Best Practices Library',
                desc: 'Immediate access to 500+ pre-configured industry scenarios for manufacturing, consumer goods, trading, and services.'
              },
              {
                icon: Cloud,
                title: 'Clean Core BTP Extensibility',
                desc: 'Building necessary business customizations side-by-side on SAP BTP using RAP and CAP frameworks without touching the core.'
              },
              {
                icon: Database,
                title: 'Automated Migration Cockpit',
                desc: 'Deploying staging tables and pre-built XML migration templates to extract, transform, and load clean legacy master data.'
              },
              {
                icon: Globe,
                title: 'RISE & GROW Cloud Delivery',
                desc: 'Architecting for S/4HANA Cloud Public Edition or Private Edition with verified security, hyperscaler IaaS, and SLA guarantees.'
              }
            ].map((cap, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
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
          SECTION 5: MIGRATION PROCESS (SAP ACTIVATE TIMELINE)
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5" />
              <span>SAP ACTIVATE METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              The 5-Phase Greenfield Delivery Roadmap
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Standardized agile execution aligned with the official SAP Activate methodology for cloud ERP implementations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {activatePhases.map((phase, idx) => {
              const isSelected = activePhase === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePhase(idx)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-500/25 ring-2 ring-emerald-400/40 font-bold'
                      : 'bg-white dark:bg-[#070F1E] text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-emerald-300'
                  }`}
                >
                  <div className={`text-xs font-mono font-bold mb-1 ${isSelected ? 'text-emerald-200' : 'text-emerald-500'}`}>
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold font-mono">
                  PHASE {activatePhases[activePhase].num} • {activatePhases[activePhase].phase.toUpperCase()}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0A1931] dark:text-white">
                  {activatePhases[activePhase].title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activatePhases[activePhase].desc}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Phase Deliverables</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activatePhases[activePhase].deliverables.map((item, d) => (
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
                <div className="text-3xl font-black text-emerald-500">{activatePhases[activePhase].timeline}</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Structured sprints adhering strictly to Clean Core governance and out-of-the-box Best Practices.
                </p>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs font-mono text-emerald-500 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>SAP Activate Certified Team</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: SAP & TECHNOLOGY (TOOLS & ARCHITECTURAL VISUAL)
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-white dark:bg-[#070F1E] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Server className="w-3.5 h-3.5" />
              <span>CLOUD TECH STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              Greenfield Cloud Technologies & Tools
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Harnessing modern cloud platforms to keep your digital core standardized, automated, and continuously updated.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#060D1A] group">
                <div className="px-5 py-3.5 bg-[#0A1628] border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <Cloud className="w-4 h-4 text-emerald-400" />
                    <span>RISE & GROW ARCHITECTURE</span>
                  </div>
                  <span className="text-cyan-400 font-mono text-[11px]">SAP BTP Integrated</span>
                </div>

                <div className="p-3 bg-[#060D1A]">
                  <img
                    src="/images/rise_sap_architecture.png"
                    alt="SAP Greenfield Cloud ERP Architecture"
                    className="w-full h-80 object-contain rounded-2xl border border-slate-800 bg-slate-950"
                  />
                </div>

                <div className="px-5 py-3 bg-[#081220] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Standard Cloud Editions</span>
                  <span className="text-emerald-400 font-mono font-bold">Clean Core Certified</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {[
                {
                  tech: 'SAP S/4HANA Migration Cockpit (LTMC)',
                  desc: 'Standardized staging tables and migration object modeler for automated data loading and key mapping.'
                },
                {
                  tech: 'SAP Cloud ALM (Application Lifecycle Management)',
                  desc: 'Cloud-native project management, test automation, and deployment governance for SAP Activate.'
                },
                {
                  tech: 'SAP Signavio Process Insights',
                  desc: 'Process mining and business simulation tools analyzing current operations against SAP Best Practice benchmarks.'
                },
                {
                  tech: 'SAP Business Technology Platform (BTP)',
                  desc: 'Side-by-side extension architecture using SAP Build and ABAP Cloud to maintain a clean digital core.'
                },
                {
                  tech: 'SAP Central Business Configuration (CBC)',
                  desc: 'Single pane of glass to configure business processes and enterprise structure across cloud tenants.'
                }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
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
              <span>MEASURABLE BUSINESS IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              Greenfield Business Outcomes
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Transforming your enterprise with a clean slate unlocks dramatic operating efficiencies and future agility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stat: '100% Clean',
                label: 'Zero Legacy Code',
                desc: 'Completely eliminate obsolete Z-programs and proprietary technical debt.'
              },
              {
                stat: '50% Lower',
                label: 'Customization TCO',
                desc: 'Standardized Best Practices slash annual application maintenance and testing expenses.'
              },
              {
                stat: 'Automatic',
                label: 'Quarterly Innovations',
                desc: 'Adoption of SAP cloud AI features, Joule assistants, and analytics without major upgrade projects.'
              },
              {
                stat: 'Global Standard',
                label: 'Single Operating Model',
                desc: 'Unified chart of accounts and harmonized master data across all international subsidiaries.'
              }
            ].map((outcome, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-[#070F1E] border border-slate-200 dark:border-slate-800 shadow-md space-y-2 text-center md:text-left">
                <div className="text-3xl font-black text-emerald-500">{outcome.stat}</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">{outcome.label}</div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1">{outcome.desc}</p>
              </div>
            ))}
          </div>

          {/* Strong Final CTA Card */}
          <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-gradient-to-r from-emerald-950/60 via-[#0A1628] to-[#050B17] p-8 sm:p-12 text-white relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold border border-emerald-400/30">
                  CLEAN SLATE TRANSFORMATION
                </span>
                <h3 className="text-3xl sm:text-4xl font-black">
                  Start Your SAP Migration Journey
                </h3>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                  Partner with Knooviq’s certified SAP architects to architect a clean-slate Greenfield roadmap, evaluate Best Practices for your industry, and calculate your cloud TCO.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  onClick={() => onOpenContact ? onOpenContact('Greenfield S/4HANA Transformation Consultation') : null}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 font-black text-sm tracking-wide transition-all shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-2 cursor-pointer"
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
