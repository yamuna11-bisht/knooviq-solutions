import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Pill, 
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
  Microscope
} from 'lucide-react';
import { IndustryFaqSection } from '../../components/common/IndustryFaqSection';

interface PharmaceuticalsIndustryPageProps {
  onOpenContact?: (defaultService?: string) => void;
}

export const PharmaceuticalsIndustryPage: React.FC<PharmaceuticalsIndustryPageProps> = ({ onOpenContact }) => {
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<'ALL' | 'MANUFACTURING' | 'SERIALIZATION' | 'QUALITY'>('ALL');
  const [activeArchTab, setActiveArchTab] = useState<'clean-core' | 'ebr' | 'dscsa' | 'gmp'>('clean-core');
  const [activeJourneyStep, setActiveJourneyStep] = useState<number>(0);

  // Section 2: Pharma Journey Navigator Data
  const journeySteps = [
    {
      label: 'Formula & Dispensing',
      title: 'Active Pharmaceutical Ingredient (API) Dispensing',
      description: 'Barcode-guided cleanroom dispensary verifies raw API drum lots, potency variance calculations, and dual-signoff tare weights directly in SAP.',
      tag: 'DISPENSARY CONTROL',
      icon: FlaskConical,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80'
    },
    {
      label: 'Batch Execution (EBR)',
      title: 'Electronic Batch Records & In-Process Controls',
      description: 'Paperless ISA-88 workflow orchestration enforces critical process parameters (CPPs), electronic signatures, and automated deviation flagging.',
      tag: 'MANUFACTURING EXECUTION',
      icon: ClipboardCheck,
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80'
    },
    {
      label: 'Serialization & Pack',
      title: 'Unit-to-Pallet Aggregation & DSCSA Serialization',
      description: 'High-speed line vision systems print GS1 DataMatrix codes, validating parent-child packaging hierarchies across carton, case, and pallet layers.',
      tag: 'PACKAGING SERIALIZATION',
      icon: QrCode,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80'
    },
    {
      label: 'Cold Chain Logistics',
      title: 'Cold-Chain Environmental Telemetry',
      description: 'Continuous real-time IoT temperature and humidity monitoring tracks in-transit biologics and vaccines with automated excursion quarantine logic.',
      tag: 'DISTRIBUTION INTEGRITY',
      icon: ThermometerSnowflake,
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  // Section 3: Industry Challenges
  const pharmaChallenges = [
    {
      icon: ClipboardCheck,
      tag: 'AUDIT RISK',
      title: 'Paper Batch Record Bottlenecks',
      desc: 'Manual paper batch records require hundreds of manual reviews and physical signatures, prolonging batch disposition cycles and causing FDA warning letters.',
      footer: 'Extended Release Cycle Times'
    },
    {
      icon: QrCode,
      tag: 'REGULATORY MANDATE',
      title: 'DSCSA & Global Serialization Gaps',
      desc: 'Incomplete unit-level 2D barcode aggregation creates compliance failure risks with FDA DSCSA and EU FMD counterfeit-prevention mandates.',
      footer: 'Supply Chain Interoperability Failure'
    },
    {
      icon: ThermometerSnowflake,
      tag: 'SPOILAGE RISK',
      title: 'Cold Chain Excursion Blind Spots',
      desc: 'Delayed temperature excursion notifications during biological transport destroy sensitive protein therapies, causing costly product write-offs.',
      footer: 'Unmonitored Thermal Integrity'
    },
    {
      icon: Microscope,
      tag: 'QUALITY DISCONNECT',
      title: 'Siloed LIMS & Quality Management',
      desc: 'Quality control lab results remain isolated in standalone laboratory systems, causing release delays and uncoordinated out-of-specification (OOS) investigations.',
      footer: 'Fragmented Lab Disposition'
    }
  ];

  // Section 5: Modular Solutions (50% Image / 50% Content, No "Inquire module" buttons)
  const modularSolutions = [
    {
      title: 'Paperless Electronic Batch Records (EBR)',
      tag: 'MANUFACTURING EXECUTION',
      category: 'MANUFACTURING',
      categoryLabel: 'Batch Manufacturing',
      description: '21 CFR Part 11 compliant digital recipe execution with automated in-process limits, step-by-step instructions, and e-signatures.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      highlights: ['21 CFR Part 11 Signatures', 'In-Process Limits Enforcement', 'Exception-Based Review'],
      icon: ClipboardCheck
    },
    {
      title: 'Global Track & Trace Serialization (ATTP)',
      tag: 'DSCSA / EU FMD',
      category: 'SERIALIZATION',
      categoryLabel: 'Serialization & Packaging',
      description: 'Enterprise serialization repository managing GS1 serial number pools, multi-level aggregation, and regulatory reporting.',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80',
      highlights: ['Unit-to-Pallet Aggregation', 'GS1 EPCIS 1.2 Data Exchange', 'FDA DSCSA Direct Reporting'],
      icon: QrCode
    },
    {
      title: 'Weighing & Dispensing Suite',
      tag: 'CLEANROOM WEIGHING',
      category: 'MANUFACTURING',
      categoryLabel: 'Batch Manufacturing',
      description: 'Precision scale integration with barcoded raw material verification, active potency recalculation, and tare weight verification.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      highlights: ['Active Potency Recalculation', 'Barcode Material Verification', 'Precision Scale Telemetry'],
      icon: FlaskConical
    },
    {
      title: 'Automated CAPA & Quality Deviations',
      tag: 'QUALITY GOVERNANCE',
      category: 'QUALITY',
      categoryLabel: 'Quality & Regulatory',
      description: 'Integrated Corrective and Preventive Action (CAPA) tracking with root cause analysis, change controls, and out-of-specification audits.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      highlights: ['Out-of-Specification (OOS) Flow', 'Root Cause Investigation', 'Automated Change Control'],
      icon: ShieldCheck
    },
    {
      title: 'Cold-Chain Environmental Monitoring',
      tag: 'BIOLOGICS LOGISTICS',
      category: 'SERIALIZATION',
      categoryLabel: 'Serialization & Packaging',
      description: 'IoT temperature loggers embedded into reefer containers and packaging with real-time excursion alert quarantine rules in SAP.',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
      highlights: ['Real-Time Excursion Alerts', 'Automated Lot Quarantine', 'Audit-Ready Thermal Log'],
      icon: ThermometerSnowflake
    },
    {
      title: 'Stability Study & QC LIMS Integration',
      tag: 'LABORATORY SYNC',
      category: 'QUALITY',
      categoryLabel: 'Quality & Regulatory',
      description: 'Seamless bi-directional integration between external LIMS instruments, stability testing chambers, and SAP batch release status.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      highlights: ['LIMS Bi-Directional Bridge', 'Stability Study Protocols', 'Automated Certificate of Analysis'],
      icon: Microscope
    }
  ];

  // Section 6: Before & After Transformation Matrix (Qualitative)
  const transformationImpacts = [
    {
      area: 'Batch Release Disposition',
      before: 'Lengthy post-production paper binder reviews with manual signature hunting and delayed product release.',
      after: 'Exception-based digital batch disposition in SAP, auto-clearing conforming batches and highlighting deviations.',
      tag: 'RELEASE VELOCITY'
    },
    {
      area: 'Serialization Regulatory Audits',
      before: 'Fragmented line-level serialization databases requiring complex manual reconciliation for DSCSA audits.',
      after: 'Unified SAP ATTP repository with end-to-end unit-to-pallet aggregation and instant EPCIS data generation.',
      tag: 'COMPLIANCE ASSURANCE'
    },
    {
      area: 'Quality Deviation & CAPA',
      before: 'Spreadsheet deviation tracking with disconnected CAPA workflows risking regulatory warning letters.',
      after: 'Native SAP Quality Management with standardized 8D root-cause workflows and integrated change controls.',
      tag: 'ZERO WARNING LETTERS'
    },
    {
      area: 'Cold Chain Thermal Governance',
      before: 'Post-delivery logger download revealing unnoticed thermal spikes hours after distribution delivery.',
      after: 'Live IoT telemetry triggering instant transit alerts and automated quarantine status directly in SAP EWM.',
      tag: 'THERMAL INTEGRITY'
    }
  ];

  // Section 7: Qualitative Case Studies
  const caseStudies = [
    {
      title: 'Global Generic & Specialty Pharma Enterprise',
      tag: 'ENTERPRISE SERIALIZATION',
      badge: 'COMMERCIAL PHARMA',
      challenge: 'Faced imminent DSCSA compliance deadlines across 12 manufacturing facilities with disparate packaging line software.',
      solution: 'Implemented SAP Advanced Track and Trace for Pharmaceuticals (ATTP) integrated with SAP S/4HANA Clean Core.',
      outcome: 'Achieved 100% DSCSA and EU FMD interoperability, establishing automated verification router service (VRS) capabilities for trading partners.'
    },
    {
      title: 'Biopharmaceutical Sterile Injectables Facility',
      tag: 'PAPERLESS BATCH PRODUCTION',
      badge: 'BIOLOGICS & STERILE',
      challenge: 'Manual paper batch records caused two-week release disposition cycles and high documentation error rates.',
      solution: 'Deployed digital Electronic Batch Records (EBR) on SAP DMC with automated cleanroom weighing scale telemetry and e-signatures.',
      outcome: 'Shortened batch release cycles dramatically, removed manual transcription errors, and achieved flawless FDA cGMP audit inspection.'
    },
    {
      title: 'Contract Development & Manufacturing Org (CDMO)',
      tag: 'MULTI-CLIENT QUALITY SYSTEM',
      badge: 'GLOBAL CDMO',
      challenge: 'Managing distinct customer batch recipes and complex quality deviation workflows across shared production suites.',
      solution: 'Engineered multi-client recipe governance and automated LIMS result synchronization on SAP S/4HANA Clean Core.',
      outcome: 'Standardized quality deviation resolution, streamlined client audit reporting, and accelerated tech transfer timelines.'
    }
  ];

  // Section 8: FAQs
  const faqs = [
    {
      q: 'Does Knooviq’s pharmaceutical solution meet FDA 21 CFR Part 11 and EU Annex 11 requirements?',
      a: 'Yes. Our SAP S/4HANA Clean Core templates incorporate validated dual electronic signatures, tamper-evident audit trails, strict password security, and validated qualification protocols (IQ/OQ/PQ) ready for FDA and EMA inspections.'
    },
    {
      q: 'How does SAP Advanced Track and Trace for Pharmaceuticals (ATTP) handle serialization?',
      a: 'SAP ATTP functions as the central enterprise repository. It generates serial numbers, distributes them to packaging lines, manages parent-child aggregation hierarchies (unit to case to pallet), and automates EPCIS data sharing with wholesale distributors and regulatory agencies.'
    },
    {
      q: 'Can the system integrate with existing cleanroom floor scales and packaging equipment?',
      a: 'Yes. We utilize standardized OPC-UA and REST API protocols via SAP Digital Manufacturing Cloud (DMC) and BTP to interface directly with scales, barcode printers, and line serialization systems from major equipment vendors.'
    },
    {
      q: 'What is the deployment timeline for an EBR or serialization rollout?',
      a: 'Using Knooviq’s pre-validated Life Sciences accelerators and GAMP 5 documentation packages, core EBR or serialization modules are typically deployed within 18 to 26 weeks, including validation execution.'
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
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=2000&q=80" 
            alt="Pharmaceutical Manufacturing Facility" 
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
                <Pill className="w-3 h-3 text-cyan-300" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>
              
              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Pharmaceuticals & <span className="text-[#38BDF8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">Life Sciences</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Automating 21 CFR Part 11 Electronic Batch Records, DSCSA Serialization & Cold-Chain Telemetry.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3 max-w-2xl"
            >
              <p className="text-sm sm:text-base lg:text-[17px] text-slate-100 font-normal leading-relaxed drop-shadow-sm">
                Empower life sciences and pharma manufacturers with integrated <strong className="text-white font-semibold">SAP S/4HANA Clean Core</strong>, digital <strong className="text-cyan-300 font-semibold">electronic batch records (EBR)</strong>, end-to-end DSCSA track-and-trace serialization, and continuous <strong className="text-white font-semibold">cold-chain environmental telemetry</strong>.
              </p>
              
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>21 CFR Part 11 Validated</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>DSCSA Track-and-Trace</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Paperless Batch Records</span>
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
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Serialization</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">SAP ATTP Enterprise Hub</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Batch Control</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">Paperless EBR & E-Sign</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Cold Chain</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">IoT Excursion Telemetry</span>
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
                Maintaining Unyielding Regulatory Compliance While Accelerating Batch Velocity
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Modern pharmaceutical manufacturers cannot trade velocity for compliance. Knooviq integrates cleanroom MES execution, automated weighing dispense, and global serialization directly into an uncompromised SAP Clean Core.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'FDA 21 CFR Part 11 compliant digital signatures',
                  'GS1 EPCIS 1.2 unit-to-pallet aggregation data',
                  'Active potency compensation during dispensary weighing',
                  'Automated batch record review-by-exception'
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
              <span>PHARMACEUTICAL BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Operational Hurdles in Life Sciences Manufacturing
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Regulatory complexity and siloed batch records slow disposition and inflate cost of compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pharmaChallenges.map((challenge, idx) => {
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
              Validated SAP Architecture for Pharmaceuticals
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              A validated GAMP 5 compliant Clean Core system paired with cloud-native BTP extensions for serialization and EBR.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4 space-y-2">
              {[
                { id: 'clean-core', title: 'Validated Clean Core ERP', sub: 'GAMP 5 qualification ready' },
                { id: 'ebr', title: 'Electronic Batch Records (EBR)', sub: 'Digital recipe execution' },
                { id: 'dscsa', title: 'SAP ATTP Serialization Hub', sub: 'GS1 EPCIS 1.2 aggregation' },
                { id: 'gmp', title: 'cGMP Quality & CAPA Engine', sub: 'Integrated lab disposition' }
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
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-300">Validated Clean Core ERP</h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    Standard SAP S/4HANA Process Manufacturing, Batch Management, and Materials Management maintained under strict GAMP 5 qualification. Periodic SAP cloud upgrades proceed smoothly without re-validating the core ERP.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Standardized Batch Traceability</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Complete genealogy from vendor raw material lot to intermediate bulk to finished goods.</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Audit Trail Logging</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Automated change-history capturing user ID, timestamp, and field level modifications.</div>
                    </div>
                  </div>
                </div>
              )}

              {activeArchTab === 'ebr' && (
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-300">Electronic Batch Records (EBR) Engine</h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    Deploy paperless batch recipes on SAP Digital Manufacturing Cloud (DMC) executing ISA-88 standards with enforced sequential step confirmations and dual signoffs.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Review-by-Exception</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Quality QA teams focus strictly on triggered variance events rather than manual page reviews.</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Dynamic Cleanroom Dispensing</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Scale integration recalculating precise API quantities based on assayed active potency.</div>
                    </div>
                  </div>
                </div>
              )}

              {activeArchTab === 'dscsa' && (
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-300">SAP ATTP Serialization Hub</h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    Centrally orchestrates unique serial number allocation, line level printing, and multi-tier parent-child aggregation across cartons, shippers, and pallets.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">GS1 EPCIS Data Exchange</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Automated packaging event feeds to downstream wholesale distributors and 3PL partners.</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">VRS Router Interoperability</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Sub-second response to FDA Verification Router Service queries for returned products.</div>
                    </div>
                  </div>
                </div>
              )}

              {activeArchTab === 'gmp' && (
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-300">cGMP Quality & CAPA Engine</h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    Unify quality control laboratory results with shop-floor manufacturing. Out-of-specification flags instantly halt downstream processing until formal CAPA disposition.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Automated Lot Quarantine</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Immediate inventory lock preventing shipping or picking of unapproved batch lots.</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Digital Certificate of Analysis</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Automated CoA generation pulling validated test results directly from SAP QM and LIMS.</div>
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
                Modular Pharmaceutical Solutions
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Pre-configured SAP Life Sciences modules delivering end-to-end batch execution, serialization, and regulatory compliance.
              </p>
            </div>

            <div className="flex items-center gap-2">
              {(['ALL', 'MANUFACTURING', 'SERIALIZATION', 'QUALITY'] as const).map(cat => (
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
              <span>MEASURABLE PHARMA OUTCOMES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Operational Transformation Matrix
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Comparing traditional paper-heavy batch operations with Knooviq validated SAP Clean Core execution.
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
                    <span className="text-xs font-mono uppercase text-red-600 font-bold block">Traditional Pharma Operations</span>
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
              Pharmaceutical Enterprise Case Studies
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              How global life sciences organizations modernize manufacturing execution and commercial packaging.
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
            <Pill className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR PHARMA ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Accelerate Batch Velocity with Validated SAP S/4HANA Clean Core?
          </h2>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal">
            Consult with Knooviq’s life sciences regulatory and manufacturing specialists to blueprint your paperless EBR and enterprise serialization roadmap.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenContact ? onOpenContact('Pharmaceuticals') : null}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-[#003B73] hover:bg-slate-100 font-bold text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Talk to Our Pharma Experts</span>
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
              <span>21 CFR Part 11 & GAMP 5 Validated</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-cyan-300 shrink-0" />
              <span>Rapid 18-26 Week Pre-Configured Rollout</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Globe2 className="w-4 h-4 text-sky-300 shrink-0" />
              <span>Global 24/7 SLA Life Sciences Support</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
export default PharmaceuticalsIndustryPage;
