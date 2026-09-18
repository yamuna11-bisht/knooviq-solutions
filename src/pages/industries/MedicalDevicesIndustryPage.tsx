import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Stethoscope, 
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
  Cpu,
  QrCode,
  Wrench,
  Layers,
  HeartPulse,
  Scale
} from 'lucide-react';
import { IndustryFaqSection } from '../../components/common/IndustryFaqSection';

interface MedicalDevicesIndustryPageProps {
  onOpenContact?: (defaultService?: string) => void;
}

export const MedicalDevicesIndustryPage: React.FC<MedicalDevicesIndustryPageProps> = ({ onOpenContact }) => {
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<'ALL' | 'COMPLIANCE' | 'MANUFACTURING' | 'SERVICE'>('ALL');
  const [activeArchTab, setActiveArchTab] = useState<'clean-core' | 'udi' | 'dmr' | 'field-service'>('clean-core');
  const [activeJourneyStep, setActiveJourneyStep] = useState<number>(0);

  // Section 2: Medical Devices Journey Navigator Data
  const journeySteps = [
    {
      label: 'Engineering & DHF',
      title: 'Design History File (DHF) & PLM Sync',
      description: 'Bi-directional CAD/PLM integration synchronizes design changes, risk management files (ISO 14971), and Device Master Records (DMR) directly with SAP production BOMs.',
      tag: 'DESIGN CONTROLS',
      icon: Layers,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
    },
    {
      label: 'Shop Floor & DHR',
      title: 'Device History Record (DHR) Execution',
      description: 'Cleanroom assembly execution enforces torque telemetry, calibration verification, non-conformance containment, and digital component serialization.',
      tag: 'ASSEMBLY EXECUTION',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80'
    },
    {
      label: 'Global UDI Labeling',
      title: 'FDA UDI & EU MDR Global Labeling',
      description: 'Automated Device Identifier (DI) and Production Identifier (PI) assignment publishes validated attributes directly to FDA GUDID and European EUDAMED databases.',
      tag: 'REGULATORY LABELING',
      icon: QrCode,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80'
    },
    {
      label: 'Field Service & Post-Market',
      title: 'Connected Field Service & Post-Market Surveillance',
      description: 'IoT telemetry from deployed scanners, surgical robots, and diagnostic analyzers triggers automated preventive maintenance, corrective recalls, and eMDR reporting.',
      tag: 'AFTERMARKET GOVERNANCE',
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  // Section 3: Industry Challenges
  const deviceChallenges = [
    {
      icon: QrCode,
      tag: 'REGULATORY MULTIPLICITY',
      title: 'Dual FDA UDI & EU MDR Mandates',
      desc: 'Divergent global labeling requirements and strict EUDAMED submissions cause massive packaging overhead and severe cross-border customs holds.',
      footer: 'Global Regulatory Friction'
    },
    {
      icon: FileCheck2,
      tag: 'TRACEABILITY GAP',
      title: 'Fragmented Device History Records (DHR)',
      desc: 'Paper-based traveler routing across multi-tier cleanrooms delays batch release and makes targeted sub-component lot recalls nearly impossible.',
      footer: 'Slow Disposition & Audit Exposure'
    },
    {
      icon: Layers,
      tag: 'ENGINEERING SILOS',
      title: 'PLM-to-Shop Floor Disconnect',
      desc: 'Disconnected CAD/PLM systems lead to obsolete engineering changes being built on shop floors, generating costly scrap and non-conformance reports.',
      footer: 'Engineering Change Leakage'
    },
    {
      icon: Wrench,
      tag: 'POST-MARKET BLIND SPOTS',
      title: 'Reactive Field Service & Recalls',
      desc: 'Unmonitored installed base machines lead to unpredicted hospital downtime, missed preventative maintenance calibrations, and delayed adverse event reporting.',
      footer: 'Post-Market Compliance Risk'
    }
  ];

  // Section 5: Modular Solutions (50% Image / 50% Content, No "Inquire module" buttons)
  const modularSolutions = [
    {
      title: 'Global UDI & Regulatory Labeling Hub',
      tag: 'FDA GUDID / EUDAMED',
      category: 'COMPLIANCE',
      categoryLabel: 'Regulatory Compliance',
      description: 'End-to-end management of Device Identifiers (DI) and dynamic Production Identifiers (PI) with direct FDA and EUDAMED API submission.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      highlights: ['FDA GUDID Direct Connector', 'EUDAMED Attribute Validation', 'GS1-128 & 2D DataMatrix'],
      icon: QrCode
    },
    {
      title: 'Digital Device History Record (eDHR)',
      tag: 'CLEANROOM MES',
      category: 'MANUFACTURING',
      categoryLabel: 'Manufacturing Execution',
      description: 'Paperless shop-floor execution tracking every serial component, technician certification, torque measurement, and in-line visual inspection.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      highlights: ['Sub-Assembly Component Genealogy', 'Tool Calibration Interlocks', 'Electronic Batch Release'],
      icon: Cpu
    },
    {
      title: 'Device Master Record (DMR) & PLM Sync',
      tag: 'ENGINEERING LIFECYCLE',
      category: 'MANUFACTURING',
      categoryLabel: 'Manufacturing Execution',
      description: 'Bi-directional PLM-to-SAP synchronization translating engineering CAD models directly into compliant manufacturing BOMs and routings.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      highlights: ['Bi-Directional PLM Integration', 'Engineering Change Order (ECO) Control', 'ISO 13485 DHF Alignment'],
      icon: Layers
    },
    {
      title: 'Connected Field Service & EAM',
      tag: 'INSTALLED BASE ASSETS',
      category: 'SERVICE',
      categoryLabel: 'Field Service & Aftermarket',
      description: 'Dispatch medical field engineers with mobile apps for preventative maintenance, automated parts consignment, and FDA 21 CFR 820 compliance.',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
      highlights: ['Mobile Field Service Fiori Tools', 'Hospital Consignment Replenishment', 'Preventative Calibration SLA'],
      icon: Wrench
    },
    {
      title: 'Post-Market Surveillance & eMDR Engine',
      tag: 'QUALITY & RECALLS',
      category: 'COMPLIANCE',
      categoryLabel: 'Regulatory Compliance',
      description: 'Automated adverse event categorization, electronic Medical Device Reporting (eMDR), and rapid targeted lot recall execution.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      highlights: ['FDA eMDR XML Generation', 'Sub-Component Recall Blast Radius', 'Customer Notification Audit'],
      icon: ShieldCheck
    },
    {
      title: 'Consignment & Hospital Trunk Stock',
      tag: 'FIELD LOGISTICS',
      category: 'SERVICE',
      categoryLabel: 'Field Service & Aftermarket',
      description: 'Real-time replenishment and mobile consumption tracking for field sales representatives and hospital consignment lockers.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      highlights: ['Sales Rep Trunk Stock Audits', 'Bill-Only Hospital Order Flow', 'Consignment Stock Aging Logic'],
      icon: Boxes
    }
  ];

  // Section 6: Before & After Transformation Matrix (Qualitative)
  const transformationImpacts = [
    {
      area: 'Global UDI Compliance',
      before: 'Siloed plant labeling tools risking mislabeled device shipments and customs rejections.',
      after: 'Centralized SAP enterprise UDI labeling ensuring 100% FDA GUDID and EU MDR submission accuracy.',
      tag: 'MARKET ACCESS'
    },
    {
      area: 'Device History Records (DHR)',
      before: 'Voluminous paper traveler binders requiring manual scanning and slowing finished release.',
      after: 'Paperless eDHR with automated component genealogy and instant exception-based release signoff.',
      tag: 'RELEASE VELOCITY'
    },
    {
      area: 'Engineering Change Management',
      before: 'Lagging CAD-to-shop-floor handoffs causing outdated revisions to enter cleanroom builds.',
      after: 'Bi-directional PLM-to-SAP synchronization locking out obsolete revisions at the cleanroom terminal.',
      tag: 'SCRAP REDUCTION'
    },
    {
      area: 'Installed Base Field Servicing',
      before: 'Untracked hospital field service visits with manual paper work orders and lost spare parts billings.',
      after: 'Mobile field service application with automated calibration logging and real-time trunk stock depletion.',
      tag: 'SERVICE EXCELLENCE'
    }
  ];

  // Section 7: Qualitative Case Studies
  const caseStudies = [
    {
      title: 'Orthopedic Implant & Surgical Tool Manufacturer',
      tag: 'GLOBAL UDI & TRACEABILITY',
      badge: 'CLASS III MEDICAL IMPLANTS',
      challenge: 'Faced complex dual FDA UDI and EU MDR labeling mandates across 50,000 surgical implant SKUs with distinct regional packaging.',
      solution: 'Deployed centralized SAP enterprise UDI master data repository with automated GUDID and EUDAMED syndication.',
      outcome: 'Achieved flawless multi-region compliance, eliminated mislabeled packaging recalls, and standardized global surgical laser-etched barcodes.'
    },
    {
      title: 'Diagnostic Imaging & Patient Monitor OEM',
      tag: 'PLM-MES INTEGRATION',
      badge: 'CAPITAL MEDICAL EQUIPMENT',
      challenge: 'Frequent engineering revisions in CAD led to assembly line errors and slow new product introductions (NPI).',
      solution: 'Engineered bi-directional PLM-to-SAP Clean Core integration with paperless eDHR execution on SAP DMC.',
      outcome: 'Reduced engineering change lead times, eliminated revision scrap, and established seamless component traceability across assemblies.'
    },
    {
      title: 'Surgical Robotics & Endoscopy Solutions',
      tag: 'FIELD SERVICE & RECALL READINESS',
      badge: 'ROBOTIC SURGERY',
      challenge: 'Lacked real-time visibility into distributed hospital robotic units, leading to delayed preventive maintenance and spare parts stockouts.',
      solution: 'Implemented SAP Service Cloud and EAM integrated with IoT telemetry on robotic console operating runtimes.',
      outcome: 'Achieved predictable preventive maintenance cycles, accelerated hospital consignment inventory turnover, and lowered unplanned system downtime.'
    }
  ];

  // Section 8: FAQs
  const faqs = [
    {
      q: 'How does Knooviq support FDA UDI and EU MDR compliance simultaneously?',
      a: 'Our SAP Clean Core templates incorporate a unified regulatory master data model. It maintains core Device Identifiers (DI) alongside dynamic Production Identifiers (PI), generating compliant GS1-128 and 2D DataMatrix labels and validating data against FDA GUDID and EU EUDAMED requirements before shipment.'
    },
    {
      q: 'What is an electronic Device History Record (eDHR) and how is it managed?',
      a: 'An eDHR is a complete digital record of the manufacturing history of a medical device. Powered by SAP Digital Manufacturing Cloud (DMC), it digitally tracks technician certifications, component serial numbers, tool calibrations, and test results, enforcing complete signoffs before the device can be moved to finished stock.'
    },
    {
      q: 'Can the solution manage hospital consignment and trunk stock for field sales reps?',
      a: 'Yes. Knooviq provides mobile Fiori tools enabling field reps to perform barcode audit counts of surgical trunk stock, issue point-of-use consumption from hospital consignment lockers, and auto-trigger billing and replenishment orders in SAP.'
    },
    {
      q: 'What is the implementation timeline for a medical device manufacturing transformation?',
      a: 'Using our pre-configured ISO 13485 and FDA 21 CFR Part 820 compliant SAP accelerators, initial core manufacturing and UDI deployments go live in 16 to 24 weeks.'
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
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=80" 
            alt="Medical Devices Precision Engineering" 
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
                <Stethoscope className="w-3 h-3 text-cyan-300" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>
              
              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Medical <span className="text-[#38BDF8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">Devices</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Orchestrating FDA UDI Traceability, EU MDR Compliance & Lifecycle Asset Servicing.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3 max-w-2xl"
            >
              <p className="text-sm sm:text-base lg:text-[17px] text-slate-100 font-normal leading-relaxed drop-shadow-sm">
                Empower medical device manufacturers with integrated <strong className="text-white font-semibold">SAP S/4HANA Clean Core</strong>, <strong className="text-cyan-300 font-semibold">Device Master Record (DMR) governance</strong>, FDA Unique Device Identification (UDI), and predictive <strong className="text-white font-semibold">field service maintenance</strong>.
              </p>
              
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>FDA UDI & EU MDR Ready</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>DHF & DMR Governance</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Connected Field Service EAM</span>
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
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Identification</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">Global FDA UDI Repository</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Lifecycle</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">DHF / DMR PLM Sync</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Servicing</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">Connected Field Service</span>
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
                Connecting Engineering Innovation with Strict Device Quality Regulations
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Medical technology OEMs must navigate increasingly rigid international standards without slowing design velocity. Knooviq connects CAD engineering to cleanroom assembly lines and hospital field service on a single unified digital thread.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'Automated FDA GUDID and EU EUDAMED attribute publishing',
                  'Paperless eDHR with serialized sub-assembly genealogy',
                  'Cleanroom tool torque telemetry and calibration interlocks',
                  'Hospital consignment tracking and trunk stock automation'
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
              <span>MEDTECH OPERATIONAL BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Critical Challenges in Medical Device Manufacturing
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Global regulatory fragmentation and paper-based device history records threaten margins and recall readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deviceChallenges.map((challenge, idx) => {
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
              SAP S/4HANA Clean Core for Medical Devices
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Standard core ERP foundation maintaining complete ISO 13485 and 21 CFR Part 820 qualification with modular cloud extensions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4 space-y-2">
              {[
                { id: 'clean-core', title: 'Standard Clean Core Foundation', sub: 'ISO 13485 & FDA 820 ready' },
                { id: 'udi', title: 'Global UDI Syndication Engine', sub: 'FDA GUDID & EUDAMED integration' },
                { id: 'dmr', title: 'Digital eDHR & MES Suite', sub: 'Sub-assembly lot tracking' },
                { id: 'field-service', title: 'Connected Field Service & EAM', sub: 'Hospital trunk stock & calibration' }
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
                    Standard SAP S/4HANA Discrete Manufacturing, Serial Number Management, and Quality Management maintained with zero modifications, ensuring ongoing vendor support and rapid upgrades.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Serial Number Genealogy</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Complete parent-child traceability down to component printed circuit boards and sensors.</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Validated Change Management</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Automated engineering change order (ECO) controls enforcing electronic authorization.</div>
                    </div>
                  </div>
                </div>
              )}

              {activeArchTab === 'udi' && (
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-300">Global UDI Syndication Engine</h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    BTP-powered master data syndication mapping device catalog attributes directly to FDA GUDID and EU EUDAMED specifications with pre-submission validation gates.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Direct GUDID / EUDAMED XML</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Automated machine-to-machine transmission and acknowledgment receipt storage.</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">GS1-128 / 2D Barcode Generator</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Direct integration with industrial packaging and laser marking line equipment.</div>
                    </div>
                  </div>
                </div>
              )}

              {activeArchTab === 'dmr' && (
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-300">Digital eDHR & Cleanroom MES Suite</h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    Execute paperless Device History Records on SAP Digital Manufacturing Cloud (DMC), preventing assembly progression if tools are uncalibrated or components unverified.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Smart Tool Interlocking</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Torque driver telemetry logged directly to device serial record before advancing routing.</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Technician Qualification Gates</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Automated badge verification ensuring only certified operators execute critical steps.</div>
                    </div>
                  </div>
                </div>
              )}

              {activeArchTab === 'field-service' && (
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-300">Connected Field Service & EAM</h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    Empower biomedical field service engineers with offline-capable mobile tools for hospital service orders, calibration documentation, and consignment trunk stock depletion.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Hospital Consignment Flow</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Automatic replenishment and bill-only processing upon surgical usage scan.</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Targeted Recall Blast Radius</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Instant identification of exact hospital customer accounts containing recalled lots.</div>
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
                Modular Medical Device Solutions
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Pre-configured SAP MedTech modules supporting compliant product design, cleanroom manufacturing, and aftermarket hospital servicing.
              </p>
            </div>

            <div className="flex items-center gap-2">
              {(['ALL', 'COMPLIANCE', 'MANUFACTURING', 'SERVICE'] as const).map(cat => (
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
              <span>MEASURABLE MEDTECH VALUE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Operational Transformation Matrix
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Comparing traditional manual medical device records with Knooviq SAP Clean Core orchestration.
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
                    <span className="text-xs font-mono uppercase text-red-600 font-bold block">Traditional Device Operations</span>
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
              Medical Device Manufacturer Case Studies
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              How pioneering MedTech OEMs achieve global regulatory approval and cleanroom execution excellence.
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
            <Stethoscope className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR MEDTECH ENTERPRISE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Streamline FDA UDI & Cleanroom Assembly with SAP S/4HANA?
          </h2>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal">
            Schedule an architectural session with Knooviq’s medical device engineering and regulatory compliance specialists to review your digital thread roadmap.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenContact ? onOpenContact('Medical Devices') : null}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-[#003B73] hover:bg-slate-100 font-bold text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Talk to Our MedTech Experts</span>
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
              <span>FDA 21 CFR Part 820 & ISO 13485 Validated</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-cyan-300 shrink-0" />
              <span>Rapid 16-24 Week Implementation</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Globe2 className="w-4 h-4 text-sky-300 shrink-0" />
              <span>Global 24/7 SLA MedTech Support</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
export default MedicalDevicesIndustryPage;
