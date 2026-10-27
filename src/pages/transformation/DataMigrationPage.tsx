import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
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
  FileCheck2,
  FileText,
  Boxes,
  Lock,
  Sparkles
} from 'lucide-react';

interface DataMigrationPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const DataMigrationPage: React.FC<DataMigrationPageProps> = ({ onOpenContact }) => {
  useEffect(() => {
    document.title = 'SAP S/4HANA Data Migration | Migration Cockpit & Cleansing | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // State for 5-Phase Data Migration Process
  const [activePhase, setActivePhase] = useState<number>(0);

  const dataPhases = [
    {
      num: '01',
      phase: 'Extract & Profile',
      title: 'Legacy Data Discovery & Quality Profiling',
      timeline: 'Weeks 1 – 3',
      desc: 'Deep inspection of legacy ECC or non-SAP databases. Identifying duplicate records, incomplete postal fields, obsolete material codes, and field mapping gaps.',
      deliverables: ['Data Quality Profiling Report', 'Field Mapping & Gap Matrix', 'Extraction Rules Definition']
    },
    {
      num: '02',
      phase: 'Cleanse & Harmonize',
      title: 'Automated Cleansing & Key Harmonization',
      timeline: 'Weeks 4 – 7',
      desc: 'Scrubbing legacy master data, deduplicating customer and supplier records, and pre-mapping legacy IDs to unified SAP Business Partners (CVI).',
      deliverables: ['Standardized Customer/Vendor Catalog', 'Deduplication Sign-off Report', 'CVI Business Partner Mapping Table']
    },
    {
      num: '03',
      phase: 'Transform & Stage',
      title: 'Staging Table Transformation & Rule Modeling',
      timeline: 'Weeks 8 – 11',
      desc: 'Populating SAP Migration Cockpit staging tables using pre-built XML and database connectors. Executing automated syntax and business rule simulation checks.',
      deliverables: ['Populated Migration Staging Tables', 'Migration Object Modeler (LTMOM) Rules', 'Pre-Load Validation Error Logs']
    },
    {
      num: '04',
      phase: 'Mock Iterations',
      title: 'Dual Mock Data Loads & Reconciliation',
      timeline: 'Weeks 12 – 16',
      desc: 'Executing two full dress rehearsal data migrations on target Quality environments. Validating load speeds, calibrating batch commits, and reconciling balances.',
      deliverables: ['Mock Load Runtime Benchmarks', 'Financial Balance Reconciliation Sign-off', 'Cutover Data Migration Playbook']
    },
    {
      num: '05',
      phase: 'Cutover & Audit',
      title: 'Production Cutover Load & Sign-Off',
      timeline: 'Cutover Weekend',
      desc: 'Final production data extraction, delta cutover loads, opening balance migration, and 100% record-by-record reconciliation sign-off.',
      deliverables: ['Production S/4HANA Data Sign-Off', 'Zero-Variance Financial Audit Certificate', 'Post-Load Delta Catch-up Support']
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* =========================================================================
          SECTION 1: HERO — DATA MIGRATION (SAP FIORI STYLE)
          ========================================================================= */}
      <section className="relative w-full min-h-[620px] sm:min-h-[660px] lg:min-h-[720px] flex items-center pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 overflow-hidden bg-black">
        
        {/* Full-Bleed Background Visual — 100% Clear with Zero Dark Blue Shade */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/migration_data_clean.jpg"
            alt="Secure enterprise data flowing seamlessly from legacy systems into a modern SAP environment"
            className="w-full h-full object-cover object-top lg:object-[80%_top] brightness-105 contrast-105 select-none"
          />
        </div>
        {/* Top Hairline Accent */}
        <div className="absolute top-0 left-0 right-0 z-10 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-3xl space-y-4 relative">
            {/* Seamless Soft Contrast Aura — ensures text is 100% legible with zero dark blue filter */}
            <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-r from-black/85 via-black/50 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00A3E0] text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>SECURE DATA TRANSFER • 100% INTEGRITY GUARANTEE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                SAP S/4HANA <br />
                <span className="text-[#00A3E0]">
                  Data Migration
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl pt-1">
                Secure enterprise data flowing seamlessly from legacy systems into a modern SAP environment. Transform, cleanse, and reconcile master and transactional data with 100% data validation and zero variance.
              </p>
            </motion.div>

            {/* Enterprise Trust Indicators (Ultra-Clean, Matching SAP Fiori Reference) */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="pt-2 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Data Validated</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>99.8% First-Pass Rate</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-blue-200">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Zero Reconciliation Variance</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OVERVIEW — WHAT IS DATA MIGRATION & WHY BUSINESSES USE IT
          ========================================================================= */}
      <section id="overview" className="py-20 lg:py-28 relative bg-white dark:bg-[#070F1E] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-white/10 border border-blue-200 dark:border-white/20 text-[#00A3E0] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <Layers className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>DATA TRANSFORMATION OVERVIEW</span>
              </div>


              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1E3F] dark:text-white">
                What is SAP Data Migration & Why It Governs Project Success
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                Data migration is the critical bridge in any SAP implementation. Bad legacy data ruins even the most sophisticated S/4HANA deployment. Knooviq provides end-to-end extraction, cleansing, transformation, loading, and reconciliation services for all master data objects and open transactional documents.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: 'Automated Pre-Cleansing & Deduplication',
                    desc: 'Eliminate duplicate suppliers, outdated customer master records, and obsolete material numbers before loading into S/4HANA.'
                  },
                  {
                    title: 'Customer Vendor Integration (CVI) Mapping',
                    desc: 'Automatically harmonize and convert legacy KNA1 customer and LFA1 vendor records into unified SAP Business Partners (BP).'
                  },
                  {
                    title: 'Zero-Variance Financial Reconciliation',
                    desc: 'Reconcile general ledger balances, open customer receivables, open vendor payables, and fixed asset ledgers down to the exact cent.'
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
                    src="/images/data_migration_cockpit.jpg"
                    alt="SAP S/4HANA Data Migration Cockpit Console"
                    className="w-full h-80 sm:h-96 lg:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold mb-2 inline-block border border-cyan-400/30">
                      SAP MIGRATION COCKPIT SUITE
                    </span>
                    <h3 className="text-xl font-bold text-white">Staging Tables & Direct Transfer</h3>
                    <p className="text-xs text-slate-300 mt-1 max-w-lg">
                      Automating the extraction, transformation, validation, and loading of complex master and transactional objects.
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
              <span>DATA PITFALLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              Critical Data Migration Roadblocks
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Data migration is responsible for over 40% of ERP go-live delays. Knooviq addresses these critical vulnerabilities upfront.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: AlertTriangle,
                color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
                title: '1. Duplicate & Corrupted Legacy Master Data',
                desc: 'Decades of free-form entry in legacy systems leave thousands of duplicate vendor tax IDs, unformatted phone numbers, and invalid postal codes.'
              },
              {
                icon: Workflow,
                color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
                title: '2. Complex Business Partner (CVI) Unification',
                desc: 'In S/4HANA, Customers and Vendors become Business Partners. Mapping intersecting number ranges and resolving tax ID conflicts halts data loads.'
              },
              {
                icon: Clock,
                color: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
                title: '3. Cutover Data Extraction Bottlenecks',
                desc: 'Extracting millions of open sales orders and inventory balance lines during cutover weekend can blow past the agreed production downtime window.'
              },
              {
                icon: Database,
                color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
                title: '4. Open Transactional Dependency Chains',
                desc: 'Open purchase orders with partial goods receipts and pending invoice verification require complex status clearing before migration.'
              },
              {
                icon: ShieldCheck,
                color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
                title: '5. Financial Ledger Variance at Cutover',
                desc: 'Minor variances between legacy General Ledger balances and newly created Universal Journal (ACDOCA) lines block accounting sign-off.'
              },
              {
                icon: Server,
                color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
                title: '6. Cross-System Key Harmonization',
                desc: 'Consolidating multiple ERPs requires re-mapping incompatible material numbers, unit of measure codes, and payment terms into a unified standard.'
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>DATA MIGRATION SUITE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              Knooviq Data Migration Capabilities
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Industrialized ETL pipelines, pre-built SAP S/4HANA migration templates, and automated reconciliation cockpits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Database,
                title: 'SAP Migration Cockpit (LTMC)',
                desc: 'Full configuration of staging tables, CSV ingestion pipelines, and Migration Object Modeler (LTMOM) custom rules.'
              },
              {
                icon: ShieldCheck,
                title: 'Automated Data Cleansing',
                desc: 'Rule-based address standardization, tax ID validation, deduplication, and inactive record purging.'
              },
              {
                icon: Workflow,
                title: 'CVI Transformation Engine',
                desc: 'Specialized scripts and tools resolving legacy customer and vendor duplicate keys into unified Business Partners.'
              },
              {
                icon: BarChart3,
                title: 'Automated Reconciliation',
                desc: 'Record-by-record and ledger-by-ledger automated validation ensuring zero open balance variances.'
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

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: MIGRATION PROCESS (5-STAGE TIMELINE)
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5" />
              <span>DATA MIGRATION LIFECYCLE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              The 5-Stage Data Migration Journey
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              A structured lifecycle testing data extraction, transformation rules, and mock loads to guarantee zero errors at go-live.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {dataPhases.map((phase, idx) => {
              const isSelected = activePhase === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePhase(idx)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-600 text-white border-cyan-600 shadow-lg shadow-cyan-500/25 ring-2 ring-cyan-400/40 font-bold'
                      : 'bg-white dark:bg-[#070F1E] text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-cyan-300'
                  }`}
                >
                  <div className={`text-xs font-mono font-bold mb-1 ${isSelected ? 'text-cyan-200' : 'text-cyan-500'}`}>
                    STAGE {phase.num}
                  </div>
                  <div className="text-xs sm:text-sm font-black leading-snug">{phase.phase}</div>
                </button>
              );
            })}
          </div>

          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white dark:bg-[#070F1E] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold font-mono">
                  STAGE {dataPhases[activePhase].num} • {dataPhases[activePhase].phase.toUpperCase()}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0A1931] dark:text-white">
                  {dataPhases[activePhase].title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {dataPhases[activePhase].desc}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Stage Deliverables</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {dataPhases[activePhase].deliverables.map((item, d) => (
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
                <div className="text-3xl font-black text-cyan-500">{dataPhases[activePhase].timeline}</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Multiple dress rehearsals guarantee predictable load speed and zero cutover variances.
                </p>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs font-mono text-emerald-500 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% Data Integrity Guaranteed</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: SAP & TECHNOLOGY (TOOLS & DATA ECOSYSTEM DIAGRAM)
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-white dark:bg-[#070F1E] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Server className="w-3.5 h-3.5" />
              <span>DATA ARCHITECTURE STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              Data Migration Technologies & Tooling
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Official SAP Migration Cockpit utilities, automated validation frameworks, and enterprise data staging.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#060D1A] group">
                <div className="px-5 py-3.5 bg-[#0A1628] border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold">
                    <Database className="w-4 h-4 text-cyan-400" />
                    <span>DATA FLOW ARCHITECTURE</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[11px]">ETL Active</span>
                </div>

                <div className="p-3 bg-[#060D1A]">
                  <img
                    src="/images/sap_data_migration_pipeline.jpg"
                    alt="SAP Data Migration Pipeline and Cleansing Staging Architecture"
                    className="w-full h-80 object-cover rounded-2xl border border-slate-800 bg-slate-950"
                  />
                </div>

                <div className="px-5 py-3 bg-[#081220] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>LTMC • LTMOM • Datasphere</span>
                  <span className="text-cyan-400 font-mono font-bold">100% Reconciliation</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {[
                {
                  tech: 'SAP S/4HANA Migration Cockpit (LTMC)',
                  desc: 'Pre-configured migration objects for master and transactional data with automated staging table mapping.'
                },
                {
                  tech: 'Migration Object Modeler (LTMOM)',
                  desc: 'Customizing standard migration objects, adding target custom fields, and writing ABAP transformation rules.'
                },
                {
                  tech: 'SAP Datasphere & Data Intelligence',
                  desc: 'Connecting disparate legacy non-SAP databases for automated extraction and centralized data fabric orchestration.'
                },
                {
                  tech: 'Customer Vendor Integration (CVI_COCKPIT)',
                  desc: 'Dedicated synchronization tool harmonizing customer and supplier records to SAP Business Partners.'
                },
                {
                  tech: 'Financial Migration Cockpit',
                  desc: 'Verifies general ledger opening balances, customer open items, and asset subledgers against legacy extracts.'
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
              <span>MEASURABLE OUTCOMES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white">
              Data Migration Business Outcomes
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Flawless data quality provides immediate trust in your new SAP S/4HANA core from day one of go-live.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stat: '100%',
                label: 'Financial Reconciliation',
                desc: 'Zero penny variance across General Ledger, Accounts Payable, and Accounts Receivable ledgers.'
              },
              {
                stat: '99.8%',
                label: 'First-Pass Load Rate',
                desc: 'Rigorous staging table simulations eliminate cutover weekend data load rejections.'
              },
              {
                stat: '0 Duplicates',
                label: 'Business Partner Integrity',
                desc: 'Clean, unified customer and vendor data foundation across all business units.'
              },
              {
                stat: 'Audit Ready',
                label: 'Compliance Trail',
                desc: 'Complete lineage tracking from legacy source tables to target S/4HANA records for statutory audits.'
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
          <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-gradient-to-r from-cyan-950/60 via-[#0A1628] to-[#050B17] p-8 sm:p-12 text-white relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold border border-cyan-400/30">
                  DATA MIGRATION READINESS AUDIT
                </span>
                <h3 className="text-3xl sm:text-4xl font-black">
                  Start Your SAP Migration Journey
                </h3>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                  Connect with Knooviq’s certified SAP data migration architects for a comprehensive legacy data quality audit, CVI mapping assessment, and Migration Cockpit scoping.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  onClick={() => onOpenContact ? onOpenContact('SAP S/4HANA Data Migration Consultation') : null}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-black text-sm tracking-wide transition-all shadow-xl shadow-cyan-500/30 flex items-center justify-center gap-2 cursor-pointer"
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
