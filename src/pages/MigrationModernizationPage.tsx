import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  RefreshCw,
  Cpu,
  Database,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Server,
  Activity,
  Clock,
  Rocket,
  Check,
  Workflow,
  BarChart3,
  HelpCircle,
  ChevronDown,
  Globe,
  Sliders
} from 'lucide-react';

interface MigrationModernizationPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const MigrationModernizationPage: React.FC<MigrationModernizationPageProps> = ({ onOpenContact }) => {
  useEffect(() => {
    document.title = 'ECC to SAP S/4HANA Transformation | Enterprise Migration Suite | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // State for Section 5 Process Journey
  const [activeStep, setActiveStep] = useState<number>(0);

  // State for Section 7 FAQ / Outcomes toggle
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const processSteps = [
    {
      num: '01',
      phase: 'Discover & Advisory',
      title: 'Landscape Assessment & Business Case',
      timeline: 'Weeks 1 – 3',
      desc: 'Comprehensive execution of SAP Readiness Check 2.0, process mining via SAP Signavio, and enterprise architecture mapping with LeanIX to quantify business ROI, sizing, and the ideal migration vector.',
      deliverables: ['SAP Readiness Check 2.0 Telemetry', 'TCO & Sizing Calculation Report', 'Pathway Selection Matrix (Greenfield vs Brownfield)']
    },
    {
      num: '02',
      phase: 'Prepare & Pre-Checks',
      title: 'Simplification & Master Data Cleansing',
      timeline: 'Weeks 4 – 8',
      desc: 'Identification of 600+ Simplification Items, pre-conversion customer-vendor unification into Business Partners (CVI), and inactive custom code decommissioning via ABAP Test Cockpit.',
      deliverables: ['100% CVI Business Partner Sync', 'Archiving & High-Volume Data Pruning', 'Third-Party ISV Add-on Certification']
    },
    {
      num: '03',
      phase: 'Explore & Prototype',
      title: 'Dual Mock Rehearsals in Sandbox',
      timeline: 'Weeks 9 – 14',
      desc: 'Execution of two end-to-end sandbox migrations on production-copy data to validate database upgrade speeds, test automated custom code quick-fixes, and benchmark cutover minutes down to the second.',
      deliverables: ['Minute-by-Minute Cutover Runbook', 'User Acceptance Testing (UAT) Sign-Off', 'HANA Database Performance Baselines']
    },
    {
      num: '04',
      phase: 'Realize & Cutover',
      title: 'Downtime-Optimized Production Cutover',
      timeline: 'Weekend Window (< 12h)',
      desc: 'Execution of Software Update Manager (SUM DMO) with shadow system processing. Legacy tables stream directly into SAP HANA memory pipes, compressing total production business downtime to under 12 hours.',
      deliverables: ['Live SAP S/4HANA Production Core', 'Universal Journal (ACDOCA) Activation', 'Zero Unplanned Outage Guarantee']
    },
    {
      num: '05',
      phase: 'Deploy & Hypercare',
      title: '24/7 Validation, Month-End Close & Adoption',
      timeline: 'Weeks 15 – 20',
      desc: 'Dedicated on-site and remote Platinum support squad monitoring financial reconciliation, supporting end-users through the first month-end closing, and onboarding staff to SAP Fiori Launchpad.',
      deliverables: ['100% General Ledger Balance Sign-off', 'First Month-End Financial Close', 'SAP Fiori Role-Based Training']
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* =========================================================================
          SECTION 1: HERO — ECC → S/4HANA TRANSFORMATION
          ========================================================================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-900 via-[#0B1528] to-[#050B17] text-white">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[420px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
                <Workflow className="w-3.5 h-3.5 text-cyan-400" />
                <span>SAP PLATINUM PARTNER • ENTERPRISE CORE TRANSFORMATION</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                SAP ECC to <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  S/4HANA Transformation
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
                Transform your legacy SAP ECC 6.0 system into a modern, intelligent S/4HANA digital core. Eliminate legacy technical debt, unlock real-time columnar analytics, and future-proof your business before the 2027 deadline.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  { label: 'ECC 2027 Ready', val: '100% Compliant', icon: ShieldCheck, color: 'text-emerald-400' },
                  { label: 'Cutover Downtime', val: '< 12 Hours', icon: Clock, color: 'text-cyan-400' },
                  { label: 'Data Compression', val: '4x – 5x on HANA', icon: Database, color: 'text-blue-400' },
                  { label: 'Code Cleanse', val: 'Clean Core ABAP', icon: Cpu, color: 'text-amber-400' }
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
                  onClick={() => onOpenContact ? onOpenContact('ECC to S/4HANA Transformation Assessment') : null}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-black text-sm tracking-wide transition-all shadow-xl shadow-cyan-500/25 flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <span>Start Your Migration Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#overview"
                  className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white font-bold text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Transformation Blueprint</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#060D1A] group">
                <div className="px-5 py-3.5 bg-[#0A1628] border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>LEGACY ECC ➔ SAP S/4HANA</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">Clean Core Architecture</span>
                </div>

                <div className="relative p-3 bg-[#060D1A]">
                  <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 flex items-center justify-center">
                    <img
                      src="/images/migration_hero_clean.jpg"
                      alt="Legacy SAP ECC transforming into modern S/4HANA architecture"
                      className="w-full h-[340px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white space-y-1">
                      <div className="text-xs font-bold text-cyan-300 flex items-center justify-between">
                        <span>Digital Core Modernization</span>
                        <span className="text-emerald-400 font-mono">AnyDB ➔ HANA 2.0</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Transitioning from legacy transactional silos to a unified, real-time in-memory cloud ERP platform.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-3 bg-[#081220] border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">SAP ECC 6.0 EHP0–8</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-cyan-400 font-mono font-bold">SAP S/4HANA Cloud / 2023</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OVERVIEW — DETAILED OVERVIEW OF THE SPECIFIC MIGRATION APPROACH
          ========================================================================= */}
      <section id="overview" className="py-20 lg:py-28 relative bg-white dark:bg-[#070F1E] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-wide uppercase">
                <Layers className="w-3.5 h-3.5" />
                <span>ARCHITECTURAL OVERVIEW</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
                What is ECC to S/4HANA Transformation & Why Enterprises Need It
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                SAP ECC 6.0 was built on a 25-year-old relational database paradigm designed around batch processing and disk storage bottlenecks. In contrast, <strong>SAP S/4HANA</strong> is built natively on the SAP HANA in-memory column-store database, introducing simplified data structures like the <strong>Universal Journal (ACDOCA)</strong> and modern web-native <strong>SAP Fiori UX</strong>.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: 'Eliminate Disparate General Ledgers',
                    desc: 'Traditional tables (BSEG, BSIS, BSAS, COEP) are unified into ACDOCA, providing a single source of truth without end-of-period reconciliation delays.'
                  },
                  {
                    title: 'Real-Time Operational Intelligence',
                    desc: 'Query across billions of financial and inventory records in sub-seconds without redundant aggregate and index tables.'
                  },
                  {
                    title: 'Clean Core Cloud Architecture',
                    desc: 'Decouple custom extensions using SAP BTP side-by-side APIs, making future S/4HANA upgrades frictionless and automatic.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
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
                    src="/images/migration_pathways_clean.jpg"
                    alt="ECC to S/4HANA Modernization Blueprint Overview"
                    className="w-full h-80 sm:h-96 lg:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold mb-2 inline-block border border-cyan-400/30">
                      ENTERPRISE TRANSFORMATION BLUEPRINT
                    </span>
                    <h3 className="text-xl font-bold text-white">Full-Stack Digital Modernization</h3>
                    <p className="text-xs text-slate-300 mt-1 max-w-lg">
                      Guiding global organizations across business process re-engineering, custom code remediation, and seamless cloud migration.
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
              <span>ROADBLOCKS & RISK MITIGATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              Critical Challenges in ECC to S/4HANA Migration
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Migrating an active ERP engine is high-stakes. Knooviq addresses the 5 most dangerous failure points upfront with automated tooling and senior advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: AlertTriangle,
                color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
                title: '1. SAP ECC 2027 Maintenance Cliff',
                desc: 'Mainstream support ends December 31, 2027. Delaying projects leads to talent scarcity, emergency contractor rates, and up to a 2% annual extended support surcharge.'
              },
              {
                icon: Cpu,
                color: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
                title: '2. Custom Code (Z-Object) Technical Debt',
                desc: 'Decades of unoptimized ABAP code, obsolete SELECT * database queries, and direct updates to deprecated tables trigger catastrophic syntax crashes in S/4HANA.'
              },
              {
                icon: Database,
                color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
                title: '3. Customer Vendor Integration (CVI) Roadblocks',
                desc: 'In S/4HANA, separate Customer and Vendor records are replaced by unified Business Partners (BP). Unreconciled duplicate master keys halt conversion during pre-checks.'
              },
              {
                icon: Clock,
                color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
                title: '4. Excessive Cutover Business Downtime',
                desc: 'Unoptimized multi-terabyte database conversions can take 72+ hours, forcing facility shutdowns, lost sales orders, and missed customer shipping deadlines.'
              },
              {
                icon: Server,
                color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
                title: '5. Incompatible Third-Party ISV Add-ons',
                desc: 'Custom banking plugins, tax engines (e.g. Vertex, Avalara), and shipping integrations must be validated for S/4HANA kernel compatibility before production switchover.'
              },
              {
                icon: ShieldCheck,
                color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
                title: '6. User Adoption & Process Resistance',
                desc: 'Shifting from legacy SAP GUI transactions to modern SAP Fiori Launchpad requires structured change management and automated role mapping to prevent productivity dips.'
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
          SECTION 4: MIGRATION CAPABILITIES (STRUCTURED LAYOUT + DISTINCT CONTENT)
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-white dark:bg-[#070F1E] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>END-TO-END SUITE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              Knooviq Full-Lifecycle Migration Capabilities
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              From initial advisory to post-go-live hypercare, we provide complete technical, functional, and cloud infrastructure capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Workflow,
                title: 'Strategic Pathway Selection',
                desc: 'Objective evaluation of Greenfield vs Brownfield vs Selective Data Transition based on custom code debt, business restructuring needs, and budget.'
              },
              {
                icon: Database,
                title: 'In-Flight DB & DMO Migration',
                desc: 'Single-step database migration directly from Oracle, MS SQL, or DB2 to SAP HANA in-memory architecture via SUM DMO.'
              },
              {
                icon: Cpu,
                title: 'Automated Code Remediation',
                desc: 'Scanning entire codebases with ABAP Test Cockpit (ATC) and applying automated quick-fixes to remediate syntax issues in bulk.'
              },
              {
                icon: ShieldCheck,
                title: 'Near-Zero Downtime (NZDT)',
                desc: 'Shadow system processing and delta replay technology to compress production cutover downtime to under 12 hours.'
              }
            ].map((cap, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold">
                  <cap.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{cap.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          {/* Supporting Visual Banner */}
          <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#060D1A] p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider">
                  ENTERPRISE CAPABILITY HIGHLIGHT
                </span>
                <h3 className="text-2xl font-black text-white">Full-Scope SAP Readiness Check 2.0 Audit</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Before executing any technical steps, we deploy SAP Readiness Check 2.0 to scan your ECC system. We analyze financial data consistency, sizing requirements, Simplification Items, and Business Partner readiness—generating an executive transformation roadmap in under 14 days.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['CVI Pre-Checks', 'HANA DB Sizing', 'Custom Code ATC', 'Add-on Compatibility'].map((tag, t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-slate-800 text-cyan-300 text-xs font-mono border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5">
                <img
                  src="/images/sap_s4hana_transformation_hero.jpg"
                  alt="Knooviq SAP S/4HANA Transformation Capability"
                  className="rounded-2xl border border-slate-700/60 object-cover w-full h-56"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: MIGRATION PROCESS (STEP-BY-STEP JOURNEY WITH VISUAL TIMELINE)
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5" />
              <span>STEP-BY-STEP METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              The 5-Phase ECC to S/4HANA Transformation Journey
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Our proven factory delivery framework guarantees predictable milestones, rigorous quality gates, and zero cutover surprises.
            </p>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {processSteps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25 ring-2 ring-blue-400/40'
                      : 'bg-white dark:bg-[#070F1E] text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700'
                  }`}
                >
                  <div className={`text-xs font-mono font-bold mb-1 ${isSelected ? 'text-blue-200' : 'text-blue-500'}`}>
                    PHASE {step.num}
                  </div>
                  <div className="text-xs sm:text-sm font-black leading-snug">{step.phase}</div>
                </button>
              );
            })}
          </div>

          {/* Active Step Panel */}
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white dark:bg-[#070F1E] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold font-mono">
                  PHASE {processSteps[activeStep].num} • {processSteps[activeStep].phase.toUpperCase()}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0A1931] dark:text-white">
                  {processSteps[activeStep].title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {processSteps[activeStep].desc}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Key Phase Deliverables</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {processSteps[activeStep].deliverables.map((item, d) => (
                      <div key={d} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phase Duration Benchmark</div>
                <div className="text-3xl font-black text-cyan-500">{processSteps[activeStep].timeline}</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Rigorous quality gates ensure zero risk of unplanned production disruption during go-live weekend.
                </p>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs font-mono text-emerald-500 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Validated by SAP Certified Architects</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: SAP & TECHNOLOGY (TOOLS, INTEGRATIONS & MODERN TECHNICAL DIAGRAM)
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-white dark:bg-[#070F1E] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Server className="w-3.5 h-3.5" />
              <span>ENTERPRISE TOOLING STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              SAP Technologies & Tooling Architecture
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              We leverage official SAP tools, proprietary accelerators, and next-gen cloud automation to engineer zero-risk migrations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#060D1A] group">
                <div className="px-5 py-3.5 bg-[#0A1628] border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <span>SAP TECHNOLOGY ARCHITECTURE</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[11px]">Certified Stack</span>
                </div>

                <div className="p-3 bg-[#060D1A]">
                  <img
                    src="/images/migration_pathways_diagram.jpg"
                    alt="SAP Technologies and Tooling Architecture Diagram"
                    className="w-full h-80 object-contain rounded-2xl border border-slate-800 bg-slate-950"
                  />
                </div>

                <div className="px-5 py-3 bg-[#081220] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>SAP BTP • Signavio • LeanIX</span>
                  <span className="text-cyan-400 font-mono font-bold">Clean Core Certified</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {[
                {
                  tech: 'SAP Readiness Check 2.0',
                  desc: 'Cloud-based assessment tool analyzing system sizing, add-on compatibility, simplification items, and custom code impacts.'
                },
                {
                  tech: 'Software Update Manager (SUM 2.0 DMO)',
                  desc: 'Single-step upgrade and database migration engine streaming tables directly to SAP HANA memory pipes.'
                },
                {
                  tech: 'SAP ABAP Test Cockpit (ATC)',
                  desc: 'Comprehensive code static analysis engine checking custom programs against S/4HANA Simplification Database.'
                },
                {
                  tech: 'Customer Vendor Integration (CVI_COCKPIT)',
                  desc: 'Automated synchronization of legacy customer and vendor tables into unified SAP Business Partner model.'
                },
                {
                  tech: 'SAP Business Technology Platform (BTP)',
                  desc: 'Side-by-side extension platform keeping the S/4HANA core clean for continuous cloud upgrades.'
                }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
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
              <span>PROVEN VALUE REALIZATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              Tangible Business Outcomes
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Transitioning to SAP S/4HANA is not merely an IT upgrade—it drives fundamental improvements across financial performance, supply chain agility, and operating costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stat: '60% Faster',
                label: 'Financial Period Close',
                desc: 'Universal Journal (ACDOCA) eliminates batch reconciliations, enabling soft closes anytime.'
              },
              {
                stat: '40% TCO',
                label: 'Infrastructure Reduction',
                desc: 'HANA in-memory columnar compression reduces multi-terabyte databases to compact footprints.'
              },
              {
                stat: '< 12 Hours',
                label: 'Production Cutover',
                desc: 'Near-zero business interruption during go-live weekend with zero lost shipping days.'
              },
              {
                stat: '100% Clean Core',
                label: 'Future-Proof Upgrades',
                desc: 'Decoupled custom code enables seamless, automatic adoption of annual S/4HANA releases.'
              }
            ].map((outcome, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-[#070F1E] border border-slate-200 dark:border-slate-800 shadow-md space-y-2 text-center md:text-left">
                <div className="text-3xl font-black text-cyan-500">{outcome.stat}</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">{outcome.label}</div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1">{outcome.desc}</p>
              </div>
            ))}
          </div>

          {/* Strong Final CTA Card */}
          <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-gradient-to-r from-blue-900 via-[#0A1628] to-[#050B17] p-8 sm:p-12 text-white relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold border border-cyan-400/30">
                  READY FOR TRANSFORMATION?
                </span>
                <h3 className="text-3xl sm:text-4xl font-black">
                  Start Your SAP Migration Journey
                </h3>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                  Connect with Knooviq’s certified SAP Platinum architects for a complimentary SAP Readiness Check 2.0 assessment, custom code audit, and personalized migration roadmap.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  onClick={() => onOpenContact ? onOpenContact('Complimentary ECC to S/4HANA Assessment') : null}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-black text-sm tracking-wide transition-all shadow-xl shadow-cyan-500/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Start Your Migration Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/solutions/system-conversion"
                  className="px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white font-bold text-xs text-center border border-slate-700 transition-colors"
                >
                  <span>Explore In-Place System Conversion ➔</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
