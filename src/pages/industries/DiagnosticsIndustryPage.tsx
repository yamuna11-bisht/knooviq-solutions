import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Microscope, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Clock, 
  Globe2, 
  Boxes, 
  FileCheck2, 
  AlertCircle,
  Database,
  Sparkles,
  FlaskConical,
  QrCode,
  ThermometerSnowflake,
  ClipboardCheck,
  Dna
} from 'lucide-react';
import { IndustryFaqSection } from '../../components/common/IndustryFaqSection';

interface DiagnosticsIndustryPageProps {
  onOpenContact?: (defaultService?: string) => void;
}

export const DiagnosticsIndustryPage: React.FC<DiagnosticsIndustryPageProps> = ({ onOpenContact }) => {
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<'ALL' | 'LAB' | 'REAGENTS' | 'LOGISTICS'>('ALL');
  const [activeArchTab, setActiveArchTab] = useState<'clean-core' | 'lims-sync' | 'reagents' | 'compliance'>('clean-core');
  const [activeJourneyStep, setActiveJourneyStep] = useState<number>(0);

  // Section 2: Diagnostics Journey Navigator Data
  const journeySteps = [
    {
      label: 'Specimen Intake',
      title: 'Specimen Barcode Accessioning & Triage',
      description: 'Automated 2D tube barcode scanners match incoming patient vials against electronic test orders in LIMS and billing records in SAP in sub-second cycles.',
      tag: 'PRE-ANALYTICAL INTAKE',
      icon: QrCode,
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80'
    },
    {
      label: 'Reagent Management',
      title: 'Automated Reagent Lot Expiry & Calibration',
      description: 'Continuous RFID tracking of consumable reagent packs on high-throughput analyzers prevents testing if calibration curves have expired or lot QC has failed.',
      tag: 'ANALYTICAL CONSUMABLES',
      icon: FlaskConical,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80'
    },
    {
      label: 'Analyzer Telemetry',
      title: 'High-Throughput Diagnostic Instrument Telemetry',
      description: 'Direct IoT telemetry monitoring test throughput, fluidic pressure, laser optical alignment, and preventative consumable depletion on automated lines.',
      tag: 'ANALYTICAL AUTOMATION',
      icon: Microscope,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
    },
    {
      label: 'Specimen Cold Logistics',
      title: 'Specimen Courier & Bio-Specimen Cold Chain',
      description: 'End-to-end GPS and thermal logger telemetry tracking diagnostic specimen pickup routes from regional clinics to centralized core reference laboratories.',
      tag: 'POST-ANALYTICAL LOGISTICS',
      icon: ThermometerSnowflake,
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  // Section 3: Industry Challenges
  const diagnosticsChallenges = [
    {
      icon: FlaskConical,
      tag: 'EXPIRATION WASTE',
      title: 'Reagent Waste & Lot Expiry Losses',
      desc: 'High-cost diagnostic reagents expire unnoticed in walk-in cold rooms, generating millions in unnecessary chemical waste and unexpected testing stoppages.',
      footer: 'High Consumable Write-offs'
    },
    {
      icon: Microscope,
      tag: 'SYSTEM DISCONNECT',
      title: 'LIMS & ERP Billing Mismatch',
      desc: 'Laboratory Information Management Systems operate disconnected from billing ledgers, resulting in lost billable test revenues and delayed reimbursement claims.',
      footer: 'Unbilled Test Volume Leaks'
    },
    {
      icon: ThermometerSnowflake,
      tag: 'THERMAL EXCURSION',
      title: 'Specimen Integrity Excursions',
      desc: 'Unmonitored specimen couriers subject temperature-sensitive blood, biopsy, and molecular samples to thermal degradation, invalidating test accuracy.',
      footer: 'Sample Rejection & Recollection'
    },
    {
      icon: ShieldCheck,
      tag: 'ACCREDITATION RISK',
      title: 'CLIA & CAP Documentation Audits',
      desc: 'Manual maintenance binders and fragmented quality logs risk non-compliance citations during unannounced CLIA, CAP, and ISO 15189 laboratory inspections.',
      footer: 'Perpetual Inspection Exposure'
    }
  ];

  // Section 5: Modular Solutions (50% Image / 50% Content, No "Inquire module" buttons)
  const modularSolutions = [
    {
      title: 'Reagent Inventory & Lot Expiry Engine',
      tag: 'REAGENT CONTROLS',
      category: 'REAGENTS',
      categoryLabel: 'Reagents & Consumables',
      description: 'FEFO (First-Expired, First-Out) automated stock dispatch with real-time barcode validation preventing expired lots from entering analyzers.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      highlights: ['FEFO Stock Picking Rules', 'Analyzer RFID Integration', 'Automated Quarantined Lots'],
      icon: FlaskConical
    },
    {
      title: 'LIMS-to-SAP Billing & Ledger Bridge',
      tag: 'SYSTEM SYNC',
      category: 'LAB',
      categoryLabel: 'Lab Operations',
      description: 'Real-time event synchronization capturing accessioned test panels in LIMS and generating automated patient and commercial client invoices in SAP.',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
      highlights: ['Automated Test Charge Capture', 'CPT Code Ledger Mapping', 'Multi-Payer Commercial Billing'],
      icon: Microscope
    },
    {
      title: 'Specimen Courier Route & Cold Chain Hub',
      tag: 'COLD CHAIN',
      category: 'LOGISTICS',
      categoryLabel: 'Courier Logistics',
      description: 'Integrated GPS courier tracking with connected Bluetooth temperature loggers monitoring specimen transit boxes from outpatient clinics.',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      highlights: ['Live Specimen Route Telemetry', 'Thermal Excursion Alerts', 'Automated Accessioning Scan'],
      icon: Truck
    },
    {
      title: 'Analyzer Maintenance & Calibration EAM',
      tag: 'INSTRUMENT UPTIME',
      category: 'LAB',
      categoryLabel: 'Lab Operations',
      description: 'Preventative calibration schedules, optical fluidic telemetry, and automated spare parts replenishment for high-throughput analyzers.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      highlights: ['Runtime Telemetry Triggers', 'CLIA Instrument Logbooks', 'Consumable Auto-Reordering'],
      icon: Activity
    },
    {
      title: 'CLIA & ISO 15189 Quality Management',
      tag: 'ACCREDITATION',
      category: 'REAGENTS',
      categoryLabel: 'Reagents & Consumables',
      description: 'Automated QC calibration curve tracking, technician proficiency testing logs, and standardized CAPA audit documentation.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      highlights: ['Quality Control (QC) Tracking', 'Proficiency Testing Records', 'Audit-Ready Digital Dossier'],
      icon: ShieldCheck
    },
    {
      title: 'Laboratory Specimen Biorepository',
      tag: 'BIOBANKING',
      category: 'LOGISTICS',
      categoryLabel: 'Courier Logistics',
      description: 'Ultra-low temperature (-80°C / liquid nitrogen) specimen storage location management with complete chain of custody for research trials.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      highlights: ['Cryogenic Rack Grid Mapping', 'Chain of Custody Timestamping', 'Clinical Trial Kit Fulfillment'],
      icon: Dna
    }
  ];

  // Section 6: Before & After Transformation Matrix (Qualitative)
  const transformationImpacts = [
    {
      area: 'Reagent Stock Management',
      before: 'Expired reagents discovered inside analyzer carousels, invalidating whole test runs.',
      after: 'FEFO automated picking rules and RFID interlocking preventing expired reagent loading.',
      tag: 'ZERO EXPIRED RUNS'
    },
    {
      area: 'LIMS-to-ERP Invoicing',
      before: 'Batch end-of-month manual spreadsheet billing reconciliations leaving unbilled tests.',
      after: 'Real-time event integration translating accessioned tests directly into SAP revenue ledgers.',
      tag: 'REVENUE VELOCITY'
    },
    {
      area: 'Specimen Courier Tracking',
      before: 'Delayed phone calls to couriers with unverified sample transit temperatures.',
      after: 'Live GPS route tracking with Bluetooth temperature sensor alerts before sample degradation.',
      tag: 'SAMPLE INTEGRITY'
    },
    {
      area: 'Laboratory Instrument Uptime',
      before: 'Unscheduled analyzer breakdowns during peak midnight hospital STAT testing shifts.',
      after: 'Predictive SAP EAM telemetry auto-scheduling fluidic and optical preventative services.',
      tag: 'CONTINUOUS UPTIME'
    }
  ];

  // Section 7: Qualitative Case Studies
  const caseStudies = [
    {
      title: 'National Clinical Reference Laboratory Network',
      tag: 'REAGENT INVENTORY & LIMS',
      badge: 'REFERENCE LABORATORY',
      challenge: 'High reagent spoilage write-offs across 4 central testing hubs and 150 regional accessioning depots.',
      solution: 'Deployed SAP S/4HANA Clean Core with automated FEFO reagent dispatch and real-time LIMS billing bridge.',
      outcome: 'Virtually eliminated expired reagent scrap, accelerated monthly commercial laboratory billing cycles, and unified inventory across depots.'
    },
    {
      title: 'Molecular Genetics & Specialized Oncology Lab',
      tag: 'BIOREPOSITORY & BIOBANK',
      badge: 'GENOMIC DIAGNOSTICS',
      challenge: 'Manual cryogenic sample tracking for oncology clinical trials risked missing freezer temperature logs and chain-of-custody errors.',
      solution: 'Integrated ultra-low temperature IoT freezer monitoring with SAP Extended Warehouse Management (EWM).',
      outcome: 'Secured 100% audit-ready chain of custody, eliminated manual freezer logs, and accelerated specialized genomic kit turnaround.'
    },
    {
      title: 'Regional Hospital Pathology & STAT Laboratory Group',
      tag: 'INSTRUMENT EAM & COURIER',
      badge: 'HOSPITAL PATHOLOGY',
      challenge: 'Unplanned automated line analyzer shutdowns caused delayed emergency room STAT test results.',
      solution: 'Configured SAP Predictive Asset Insights and connected analyzer telemetry on SAP BTP.',
      outcome: 'Achieved predictable preventive maintenance cycles, reduced unplanned analyzer breakdowns, and upheld emergency turnaround time SLAs.'
    }
  ];

  // Section 8: FAQs
  const faqs = [
    {
      q: 'How does Knooviq connect SAP S/4HANA with specialized Laboratory Information Systems (LIMS)?',
      a: 'We leverage SAP Business Technology Platform (BTP) with HL7 and REST API adapters to create an event-driven data fabric. When a sample is accessioned or results validated in LIMS, test charge codes and reagent consumptions are immediately posted to SAP ledgers without custom ERP code.'
    },
    {
      q: 'How does the system prevent the use of expired or uncalibrated diagnostic reagents?',
      a: 'Through automated First-Expired, First-Out (FEFO) logic and analyzer RFID interlocks. In SAP, reagent lots approaching expiry are auto-quarantined. If an operator attempts to load a flagged or uncalibrated lot, the analyzer interlock rejects the carousel load.'
    },
    {
      q: 'Can the solution handle multi-payer laboratory billing (insurance, patient self-pay, client hospital accounts)?',
      a: 'Yes. Our diagnostic templates feature flexible commercial pricing engines supporting client bill accounts, complex commercial laboratory fee schedules, and automated split-billing workflows.'
    },
    {
      q: 'What is the implementation timeline for a reference laboratory or diagnostic network?',
      a: 'Leveraging our pre-packaged diagnostic accelerators and LIMS connectors, core reagent inventory, instrument maintenance, and billing bridges go live within 16 to 22 weeks.'
    }
  ];

  const filteredSolutions = activeSolutionCategory === 'ALL'
    ? modularSolutions
    : modularSolutions.filter(s => s.category === activeSolutionCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full h-[540px] sm:h-[560px] lg:h-[580px] flex items-center pt-24 sm:pt-28 lg:pt-28 pb-8 overflow-hidden bg-slate-900">
        
        {/* Full-Bleed Background Image with Seamless Cinematic Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=2000&q=80" 
            alt="Clinical Diagnostics and Laboratory Facility" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 sm:via-slate-950/60 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          <div className="max-w-3xl space-y-4">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-2.5"
            >
              {/* Practice Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-300 shadow-xl">
                <Microscope className="w-3 h-3 text-cyan-300" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>
              
              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Diagnostics & <span className="text-[#38BDF8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">Laboratories</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Automating Laboratory Accessioning, Reagent Cold-Chain Inventory & LIMS Synchronization.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3 max-w-2xl"
            >
              <p className="text-sm sm:text-base lg:text-[17px] text-slate-100 font-normal leading-relaxed drop-shadow-sm">
                Empower clinical diagnostics and reference laboratories with integrated <strong className="text-white font-semibold">SAP S/4HANA Clean Core</strong>, automated specimen accessioning, <strong className="text-cyan-300 font-semibold">reagent lot-level expiration control</strong>, and bi-directional <strong className="text-white font-semibold">LIMS analyzer connectivity</strong>.
              </p>
              
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>LIMS & Analyzer Telemetry</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Reagent Lot Expiry Control</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>CLIA & ISO 15189 Ready</span>
                </span>
              </div>
            </motion.div>

            {/* Enterprise Architectural Trust Ribbon */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 sm:mt-8 pt-4 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
            >
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Architecture</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">SAP S/4HANA Clean Core</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">LIMS Sync</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">Real-Time Event Broker</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Reagents</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">FEFO Expiry Quarantine</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Logistics</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">Cold Specimen Telemetry</span>
              </div>
            </motion.div>

          </div>

        </div>

      </section>

      {/* SECTION 2: EXECUTIVE PERSPECTIVE */}
      <section className="py-12 sm:py-14 lg:py-16 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>EXECUTIVE PERSPECTIVE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Accelerating High-Volume Diagnostic Throughput with Precise Cost Governance
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Diagnostic providers run high-volume, low-margin operations where reagent waste or instrument downtime instantly threatens profitability. Knooviq harmonizes laboratory LIMS accessioning with SAP automated reagent replenishment and client billing.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'Real-time LIMS-to-SAP charge capture synchronization',
                  'Automated First-Expired, First-Out (FEFO) reagent picking',
                  'Predictive maintenance telemetry on continuous automated lines',
                  'Connected cold-chain logger telemetry for specimen couriers'
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-800 bg-white p-3 rounded-lg border border-slate-200 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#0070C0] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-300 shadow-md bg-slate-900">
                <img 
                  src={journeySteps[activeJourneyStep].image} 
                  alt={journeySteps[activeJourneyStep].title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-5">
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold mb-1">
                    {journeySteps[activeJourneyStep].tag}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {journeySteps[activeJourneyStep].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {journeySteps[activeJourneyStep].description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {journeySteps.map((step, idx) => {
                  const IconComp = step.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveJourneyStep(idx)}
                      className={`p-2.5 rounded-xl text-left border transition-all ${
                        activeJourneyStep === idx
                          ? 'border-[#0070C0] bg-sky-50/80 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <IconComp className={`w-4 h-4 mb-1 ${activeJourneyStep === idx ? 'text-[#0070C0]' : 'text-slate-500'}`} />
                      <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">{step.label}</div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: INDUSTRY CHALLENGES */}
      <section className="py-12 sm:py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-mono font-bold uppercase tracking-wider text-red-700">
              <AlertCircle className="w-3.5 h-3.5 text-red-600" />
              <span>DIAGNOSTIC OPERATIONAL BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Operational Challenges in Modern Laboratories
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Reagent shelf-life constraints and disconnected billing systems compress laboratory margins.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {diagnosticsChallenges.map((challenge, idx) => {
              const IconComp = challenge.icon;
              return (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-[#0070C0] transition-colors flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono uppercase text-slate-500 font-bold block">
                      {challenge.tag}
                    </span>
                    <h3 className="text-base font-bold text-slate-950 leading-snug">
                      {challenge.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {challenge.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {challenge.footer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: SAP CLEAN CORE ARCHITECTURE */}
      <section className="py-12 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Database className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>TECHNICAL BLUEPRINT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              SAP S/4HANA Clean Core for Diagnostics
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              A standard core ERP supporting high-volume clinical testing volumes, automated reagent procurement, and cloud-native LIMS connectors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4 space-y-2">
              {[
                { id: 'clean-core', title: 'Standard Clean Core Foundation', sub: 'CLIA & ISO 15189 compliance ready' },
                { id: 'lims-sync', title: 'LIMS & Analyzer Data Fabric', sub: 'Sub-second charge event broker' },
                { id: 'reagents', title: 'Automated FEFO Reagent Management', sub: 'Analyzer RFID lot verification' },
                { id: 'compliance', title: 'Connected Courier & Cold Chain', sub: 'Bio-specimen temperature logs' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveArchTab(tab.id as any)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    activeArchTab === tab.id
                      ? 'border-[#0070C0] bg-sky-50/70 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="text-sm sm:text-base font-bold text-slate-900">{tab.title}</div>
                  <div className="text-xs sm:text-sm text-slate-600 mt-1">{tab.sub}</div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 bg-slate-900 rounded-2xl p-6 text-white border border-slate-800">
              {activeArchTab === 'clean-core' && (
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-300">Standard Clean Core Foundation</h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    Standard SAP S/4HANA Finance, Materials Management, and Extended Warehouse Management maintained without core modifications, ensuring effortless version upgrades.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Standard Diagnostic Billing</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Automated client billing rules, commercial lab discounts, and multi-payer ledgers.</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Automated Consumables MRP</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">MRP Live recalculating pipette tips, diluents, and wash buffers in real time.</div>
                    </div>
                  </div>
                </div>
              )}

              {activeArchTab === 'lims-sync' && (
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-300">LIMS & Analyzer Data Fabric</h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    High-throughput message broker deployed on SAP BTP translating clinical HL7 and FHIR specimen accessioning events directly into SAP inventory issues and charge items.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Sub-Second Test Billing</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Instant posting of accessioned clinical test codes to billing queues without manual re-entry.</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Instrument Run Telemetry</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Automated consumption logging based on exact test counts performed by each analyzer.</div>
                    </div>
                  </div>
                </div>
              )}

              {activeArchTab === 'reagents' && (
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-300">Automated FEFO Reagent Management</h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    Intelligent lot expiration tracking ensuring warehouse and cleanroom staff always pick and stage the earliest expiring conforming lots, cutting chemical disposal costs.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Analyzer Interlocking</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Reagent RFID scans cross-checked against SAP active QC calibration status before use.</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Automated Vendor Re-ordering</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">EDI 850 purchase order dispatch triggered as reagent packs reach critical thresholds.</div>
                    </div>
                  </div>
                </div>
              )}

              {activeArchTab === 'compliance' && (
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-300">Connected Courier & Cold Chain</h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    Continuous IoT environmental loggers integrated with SAP Extended Warehouse Management (EWM) monitoring specimen transit temperature from outpatient pickup to lab intake.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Excursion Quarantine Rules</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Instant quarantine status placed on specimens that exceeded acceptable temperature thresholds.</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">CLIA / CAP Audit Trails</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Immutable temperature logs stored directly alongside specimen accession records.</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MODULAR SOLUTIONS (50% Image / 50% Content, No Inquire Button) */}
      <section className="py-12 sm:py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Boxes className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>ENTERPRISE CAPABILITIES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                Modular Diagnostics Solutions
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Pre-configured SAP modules engineered for clinical testing networks, reference laboratories, and pathology hubs.
              </p>
            </div>

            <div className="flex items-center gap-2">
              {(['ALL', 'LAB', 'REAGENTS', 'LOGISTICS'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveSolutionCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold uppercase transition-all ${
                    activeSolutionCategory === cat
                      ? 'bg-[#0070C0] text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions.map((sol, idx) => {
              const IconComp = sol.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex flex-col h-[400px]"
                >
                  {/* Exactly 50% Image Height */}
                  <div className="relative h-1/2 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={sol.image} 
                      alt={sol.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-cyan-300 uppercase">
                      {sol.tag}
                    </div>
                  </div>

                  {/* Exactly 50% Content Height */}
                  <div className="h-1/2 p-5 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <IconComp className="w-4 h-4 text-[#0070C0] shrink-0" />
                        <h3 className="text-base font-bold text-slate-950 truncate">{sol.title}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 line-clamp-2 leading-relaxed">
                        {sol.description}
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      {sol.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 6: BEFORE & AFTER TRANSFORMATION MATRIX */}
      <section className="py-12 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>MEASURABLE LABORATORY VALUE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Operational Transformation Matrix
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Comparing traditional manual laboratory operations with Knooviq SAP Clean Core orchestration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {transformationImpacts.map((impact, idx) => (
              <div key={idx} className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-950">{impact.area}</h3>
                  <span className="text-xs font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-sky-100 text-[#0070C0]">
                    {impact.tag}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-white border border-red-100 space-y-1.5">
                    <span className="text-xs font-mono uppercase text-red-600 font-bold block">Traditional Lab Operations</span>
                    <p className="text-slate-700 leading-relaxed">{impact.before}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-emerald-100 space-y-1.5">
                    <span className="text-xs font-mono uppercase text-emerald-700 font-bold block">Knooviq Clean Core Delivery</span>
                    <p className="text-slate-900 font-medium leading-relaxed">{impact.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CASE STUDIES */}
      <section className="py-12 sm:py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <FileCheck2 className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PROVEN CLIENT TRANSFORMATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Diagnostics & Laboratory Case Studies
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              How leading clinical testing networks optimize reagent utilization and laboratory revenue cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#0070C0] transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                      {cs.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-semibold">{cs.tag}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 leading-snug">{cs.title}</h3>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                      <span className="text-xs font-mono uppercase font-bold text-slate-600 block">The Challenge</span>
                      <p className="text-slate-700 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-sky-50/60 border border-sky-100 space-y-1">
                      <span className="text-xs font-mono uppercase font-bold text-[#0070C0] block">The Solution</span>
                      <p className="text-slate-800 font-medium leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-xs font-mono uppercase font-bold text-emerald-700 block mb-1">Delivered Outcome</span>
                  <p className="text-sm font-semibold text-slate-950 leading-relaxed">{cs.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQS (Compact, Sleek, Numberless) */}
      <IndustryFaqSection 
        faqs={faqs}
        onOpenContact={onOpenContact}
      />

      {/* SECTION 9: FINAL CALL TO ACTION (Consumer & Commerce Style) */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#003B73] via-[#005B9E] to-[#0070C0] overflow-hidden text-white">
        
        {/* Ambient 3D Geometric Mesh Lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
            <Microscope className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR DIAGNOSTICS NETWORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Streamline Laboratory Reagents & LIMS Billing with SAP S/4HANA?
          </h2>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal">
            Schedule an architectural consultation with Knooviq’s laboratory operations and diagnostic supply chain specialists to review your enterprise blueprint.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenContact ? onOpenContact('Diagnostics') : null}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-[#003B73] hover:bg-slate-100 font-bold text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Talk to Our Diagnostics Experts</span>
              <ArrowRight className="w-4 h-4 text-[#003B73]" />
            </button>
            <Link
              to="/solutions/sap-s4hana"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <span>Explore SAP Solutions</span>
              <ChevronRight className="w-4 h-4 text-white/70" />
            </Link>
          </div>

          <div className="pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto text-xs text-slate-200">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>CLIA & ISO 15189 Validated</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-cyan-300 shrink-0" />
              <span>Rapid 16-22 Week Implementation</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Globe2 className="w-4 h-4 text-sky-300 shrink-0" />
              <span>Global 24/7 SLA Laboratory Support</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
export default DiagnosticsIndustryPage;
