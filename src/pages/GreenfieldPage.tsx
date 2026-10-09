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
  Globe,
  Maximize2,
  X
} from 'lucide-react';

interface GreenfieldPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const GreenfieldPage: React.FC<GreenfieldPageProps> = ({ onOpenContact }) => {
  useEffect(() => {
    document.title = 'SAP S/4HANA Greenfield Implementation | Clean Slate Cloud ERP | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [isImageFullScreen, setIsImageFullScreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsImageFullScreen(false);
      }
    };
    if (isImageFullScreen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isImageFullScreen]);

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
      {/* =========================================================================
          SECTION 1: HERO — GREENFIELD IMPLEMENTATION (FULL-BLEED WIDESCREEN HERO)
          ========================================================================= */}
      <section className="relative w-full min-h-[600px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 overflow-hidden bg-slate-950 text-white">
        
        {/* Full-Bleed Background Visual */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/greenfield_clean_slate.jpg"
            alt="Building a completely new S/4HANA environment from scratch"
            className="w-full h-full object-cover object-right lg:object-[80%_center] brightness-105 contrast-105 saturate-[1.05]"
          />
          {/* Dedicated text-readability scrim on left; 100% bright & clear on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 via-50% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
              <Rocket className="w-3.5 h-3.5 text-emerald-400" />
              <span>CLEAN SLATE CLOUD ERP &bull; 100% BEST PRACTICES</span>
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
                className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white font-bold text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer backdrop-blur-sm"
              >
                <span>Explore Clean Slate Blueprint</span>
              </a>
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
                <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>GREENFIELD ENTERPRISE TRANSFORMATION</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsImageFullScreen(true)}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-slate-950 text-emerald-300 transition-colors text-[11px] font-mono font-bold cursor-pointer"
                    title="View Greenfield Enterprise diagram in full screen"
                  >
                    <Maximize2 className="w-3 h-3" />
                    <span>Expand</span>
                  </button>
                </div>

                <div 
                  className="relative p-2.5 bg-slate-950 cursor-pointer"
                  onClick={() => setIsImageFullScreen(true)}
                  title="Click to view full screen"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#06101E] flex items-center justify-center">
                    <img
                      src="/images/sap_greenfield_enterprise_choice.png"
                      alt="What is Greenfield & Why High-Growth Enterprises Choose It - Strategic Enterprise Architecture"
                      className="w-full h-80 sm:h-96 lg:h-[400px] object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Clean Caption Placed Below the Image */}
                  <div className="mt-2.5 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400">Clean Core Cloud Architecture</span>
                      <span className="text-[10px] font-mono text-slate-400">Public &amp; Private Editions</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-snug">
                      High-growth enterprises leverage Greenfield to align business leadership, logistics networks, and global cloud intelligence without technical legacy baggage.
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

      {/* =========================================================================
          FULL-SCREEN GREENFIELD ENTERPRISE ARCHITECTURE MODAL
          ========================================================================= */}
      {isImageFullScreen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6 transition-all duration-300 animate-in fade-in"
          onClick={() => setIsImageFullScreen(false)}
        >
          {/* Top Modal Controls Header */}
          <div 
            className="w-full max-w-7xl flex items-center justify-between pb-3 border-b border-white/15 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shadow-md">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white text-base sm:text-lg font-black tracking-tight flex items-center gap-2">
                  <span>What is Greenfield &amp; Why High-Growth Enterprises Choose It</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    FULL RESOLUTION
                  </span>
                </h3>
                <p className="text-xs text-slate-400 font-mono hidden sm:block">
                  Clean-Slate S/4HANA Modernization &bull; Cloud ERP Blueprint &bull; Global Digital Network
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsImageFullScreen(false)}
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white hover:text-emerald-300 transition-all border border-white/20 shadow-lg flex items-center gap-1.5 cursor-pointer"
              aria-label="Close full screen view"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="hidden sm:inline text-xs font-mono font-bold pr-1">ESC</span>
            </button>
          </div>

          {/* Full Screen Image Presentation Container */}
          <div 
            className="relative flex-1 w-full max-w-7xl flex items-center justify-center p-2 sm:p-4 my-auto overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#050E1D] rounded-2xl p-3 sm:p-6 shadow-2xl border border-emerald-500/30 max-h-[82vh] flex items-center justify-center">
              <img
                src="/images/sap_greenfield_enterprise_choice.png"
                alt="What is Greenfield & Why High-Growth Enterprises Choose It"
                className="max-w-full max-h-[76vh] w-auto h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Bottom Info Bar with Telemetry */}
          <div 
            className="w-full max-w-7xl pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-slate-300 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4">
              <span className="text-emerald-300">&bull; Greenfield: Start fresh with standard SAP Best Practices, cloud-native resilience, and zero legacy baggage.</span>
            </div>
            <div className="text-slate-400 text-center sm:text-right shrink-0">
              Press <kbd className="px-2 py-0.5 rounded bg-white/10 text-white border border-white/20 font-bold">ESC</kbd> or click outside to exit full screen
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
