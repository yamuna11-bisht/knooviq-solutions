import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  HeartPulse, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  ChevronRight, 
  Clock, 
  Globe2, 
  Layers, 
  Settings, 
  Sparkles, 
  Boxes, 
  Stethoscope, 
  Syringe, 
  ClipboardList, 
  FileCheck2, 
  AlertCircle,
  Database
} from 'lucide-react';
import { IndustryFaqSection } from '../../components/common/IndustryFaqSection';

interface HospitalsHealthcareIndustryPageProps {
  onOpenContact?: (defaultService?: string) => void;
}

export const HospitalsHealthcareIndustryPage: React.FC<HospitalsHealthcareIndustryPageProps> = ({ onOpenContact }) => {
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<'ALL' | 'CLINICAL' | 'LOGISTICS' | 'GOVERNANCE'>('ALL');
  const [activeArchTab, setActiveArchTab] = useState<'clean-core' | 'btp' | 'ehr-sync' | 'compliance'>('clean-core');
  const [activeJourneyStep, setActiveJourneyStep] = useState<number>(0);

  // Section 2: Clinical Journey Navigator Data
  const journeySteps = [
    {
      label: 'Clinical Requisition',
      title: 'Point-of-Care Digital Requisition',
      description: 'Nurses and surgical staff issue automated consumption triggers directly through EHR-connected touchscreens, automating stock depletion from ward carts.',
      tag: 'WARD LEVEL',
      icon: Stethoscope,
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      label: 'Sterile Supply Logistics',
      title: 'Central Sterile Supply Department (CSSD) Tracking',
      description: 'End-to-end 2D barcode identification on surgical instrument trays ensures validated autoclave sterilization cycles, lot matching, and perioperative kit readiness.',
      tag: 'PERIOPERATIVE',
      icon: Syringe,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80'
    },
    {
      label: 'Dock-to-Bedside Replenishment',
      title: 'Automated Hospital Kanban & Dock Dispatch',
      description: 'Automated warehouse putaway, automated guided vehicle (AGV) internal delivery routing, and RFID two-bin Kanban replenish surgical suites without clinical downtime.',
      tag: 'AUTOMATED INTRALOGISTICS',
      icon: Truck,
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80'
    },
    {
      label: 'Biomedical Asset Governance',
      title: 'Connected Biomedical Equipment Maintenance (EAM)',
      description: 'Telemetry monitoring on vital pumps, MRI scanners, and ventilators logs operational runtime, auto-triggers preventative calibration, and prevents unscheduled downtime.',
      tag: 'BIOMEDICAL EAM',
      icon: HeartPulse,
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  // Section 3: Hospital & Healthcare Operational Bottlenecks
  const healthcareChallenges = [
    {
      icon: Boxes,
      tag: 'STOCK EXCURSIONS',
      title: 'Phantom Ward Inventory & Expiry',
      desc: 'Critical medical consumables, implants, and emergency pharmaceuticals expire unnoticed in decentralized floor closets, driving massive write-offs and dangerous procedural shortages.',
      footer: 'Uncontrolled Floor-Stock Bloat'
    },
    {
      icon: Activity,
      tag: 'SYSTEM SILOS',
      title: 'EHR & Financial ERP Disconnect',
      desc: 'Clinical systems (Epic, Cerner) operate isolated from backend ERP ledgers, requiring manual bill-only reconciliations, high delayed billings, and lost consumable reimbursement revenue.',
      footer: 'Disconnected Clinical Billing'
    },
    {
      icon: ShieldCheck,
      tag: 'STERILITY PROTOCOL',
      title: 'CSSD Sterilization Traceability Gaps',
      desc: 'Surgical instrument kits tracked through paper logs fail Joint Commission sterility audits, risking delayed operating room start times and infection prevention non-compliance.',
      footer: 'Manual Perioperative Paperwork'
    },
    {
      icon: HeartPulse,
      tag: 'EQUIPMENT DOWNTIME',
      title: 'Biomedical Fleet Blind Spots',
      desc: 'Infusion pumps and mobile imaging scanners go missing across hospital towers, while preventative calibration schedules are missed, putting patient safety and accreditation at risk.',
      footer: 'Unplanned Equipment Outages'
    }
  ];

  // Section 5: Modular Solutions (50% Image / 50% Content, No "Inquire module" buttons)
  const modularSolutions = [
    {
      title: 'Point-of-Care Ward Inventory',
      tag: 'CLINICAL CONSUMPTION',
      category: 'CLINICAL',
      categoryLabel: 'Clinical Workflows',
      description: 'RFID-enabled smart cabinets and two-bin automated Kanban systems for point-of-use clinical consumable tracking.',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      highlights: ['RFID Smart Cabinet Integration', 'Two-Bin Automated Kanban', 'Point-of-Care Depletion'],
      icon: Boxes
    },
    {
      title: 'EHR-to-SAP HL7 / FHIR Bridge',
      tag: 'SYSTEM SYNC',
      category: 'GOVERNANCE',
      categoryLabel: 'Enterprise Governance',
      description: 'Bi-directional interoperability connecting Epic and Cerner EHR records directly with SAP S/4HANA material ledger and billing.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      highlights: ['HL7 / FHIR Native Connectors', 'Real-Time Charge Capture', 'Patient Billing Automation'],
      icon: Activity
    },
    {
      title: 'CSSD Perioperative Instrument Hub',
      tag: 'STERILE SUPPLY',
      category: 'CLINICAL',
      categoryLabel: 'Clinical Workflows',
      description: 'Direct serialization and autoclave cycle logging for multi-piece surgical trays with perioperative schedule synchronization.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      highlights: ['Autoclave Cycle Telemetry', 'Tray Level Serialization', 'OR Schedule Alignment'],
      icon: Syringe
    },
    {
      title: 'Hospital Warehouse & Intralogistics',
      tag: 'CENTRAL DISTRIBUTION',
      category: 'LOGISTICS',
      categoryLabel: 'Supply & Logistics',
      description: 'High-density central hospital warehouse management with automated picking, chilled medication storage, and AGV integration.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      highlights: ['Chilled Drug Management', 'Internal AGV Routing', 'Dock-to-Bedside Flow'],
      icon: Truck
    },
    {
      title: 'Biomedical Asset EAM & Calibration',
      tag: 'FLEET MANAGEMENT',
      category: 'GOVERNANCE',
      categoryLabel: 'Enterprise Governance',
      description: 'Real-time telemetry and preventative maintenance schedules for MRI scanners, surgical robotics, ventilators, and pumps.',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
      highlights: ['Joint Commission Compliance', 'Calibration Scheduling', 'Telemetry Runtime Logs'],
      icon: HeartPulse
    },
    {
      title: 'Pharmacy & Cold-Chain Logistics',
      tag: 'PHARMA MONITORING',
      category: 'LOGISTICS',
      categoryLabel: 'Supply & Logistics',
      description: 'Continuous IoT temperature sensors and electronic lot verification protecting vaccines, biologics, and blood products.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      highlights: ['IoT Temperature Logging', 'Expiry Quarantine Logic', 'Chain of Custody Proof'],
      icon: ShieldCheck
    }
  ];

  // Section 6: Before & After Transformation Matrix (Qualitative)
  const transformationImpacts = [
    {
      area: 'Point-of-Care Replenishment',
      before: 'Nurses manual inventory counting and hoarding supplies in ward closets due to feared stockouts.',
      after: 'Automated RFID replenishment carts with sub-second replenishment signals straight to central stores.',
      tag: 'CLINICAL VELOCITY'
    },
    {
      area: 'Surgical Tray Sterilization',
      before: 'Paper binder sterilization logs with unverified tray assemblies delaying surgical starts.',
      after: 'Serialized CSSD barcode workflows with autoclave telemetry and automated OR tray verification.',
      tag: 'PATIENT SAFETY'
    },
    {
      area: 'Consumables Revenue Capture',
      before: 'High uncaptured clinical supplies and delayed billings between EHR charts and accounting.',
      after: 'Real-time HL7/FHIR charge capture synchronized directly into SAP billing ledgers at point-of-use.',
      tag: 'REVENUE INTEGRITY'
    },
    {
      area: 'Biomedical Equipment Maintenance',
      before: 'Reactive maintenance with unlocated infusion pumps and surprise inspection failures.',
      after: 'Connected SAP EAM asset telemetry with automated preventative calibrations and real-time RTLS location.',
      tag: 'EQUIPMENT AVAILABILITY'
    }
  ];

  // Section 7: Qualitative Case Studies
  const caseStudies = [
    {
      title: 'Multi-Hospital Academic Medical Center',
      tag: 'HEALTH SYSTEM NETWORK',
      badge: 'TERTIARY HEALTHCARE',
      challenge: 'Fragmented supply chains across 8 hospitals led to inventory stockpiling, high supply write-offs, and frequent delayed surgical starts.',
      solution: 'Deployed SAP S/4HANA Clean Core integrated with Epic EHR, automating centralized warehouse picking and RFID point-of-care replenishment.',
      outcome: 'Eliminated emergency perioperative stockouts, streamlined surgical tray assembly, and established unified clinical inventory visibility across all regional campuses.'
    },
    {
      title: 'Integrated Health & Trauma Network',
      tag: 'CLINICAL SUPPLY CHAIN',
      badge: 'EMERGENCY MEDICINE',
      challenge: 'Paper-based CSSD sterilization logs failed Joint Commission compliance reviews and caused surgical tray turnover bottlenecks.',
      solution: 'Implemented SAP DMC and BTP-connected serialization on surgical trays with automated autoclave sensor logging and schedule integration.',
      outcome: 'Achieved 100% paperless regulatory audit compliance, eliminated lost instrument sets, and shortened operating room turnover cycles.'
    },
    {
      title: 'Regional Healthcare & Ambulatory Clinic Group',
      tag: 'EHR-ERP INTEGRATION',
      badge: 'AMBULATORY CARE',
      challenge: 'Manual billing reconciliations between ambulatory clinic charts and enterprise accounting resulted in delayed claims and write-offs.',
      solution: 'Configured automated HL7/FHIR event ingestion into SAP Clean Core finance and materials management for real-time charge capture.',
      outcome: 'Accelerated revenue cycle management, removed manual data re-entry, and secured instant visibility into high-cost specialty medication utilization.'
    }
  ];

  // Section 8: FAQs
  const faqs = [
    {
      q: 'How does Knooviq integrate SAP S/4HANA with our existing EHR (Epic / Cerner)?',
      a: 'We utilize SAP Business Technology Platform (BTP) with native HL7 v2 and FHIR API adapters to create a real-time, bi-directional bridge. Clinical consumption events in the EHR instantly trigger inventory issues and charge captures in SAP without custom code in your core ERP.'
    },
    {
      q: 'Does this solution satisfy Joint Commission and FDA UDI hospital compliance requirements?',
      a: 'Yes. Our perioperative and biomedical asset solutions maintain complete digital audit trails, electronic signatures conforming to 21 CFR Part 11, and automated tracking of FDA Unique Device Identifiers (UDI) from dock receipt to patient bedside.'
    },
    {
      q: 'How do clinical staff interact with the system without leaving their patient care workflows?',
      a: 'Nurses and technicians do not need to log into SAP. They interact through barcode scanners, RFID smart closets, or direct EHR touchscreens. All backend inventory adjustments, reorders, and lot tracking occur autonomously in SAP in the background.'
    },
    {
      q: 'What is the implementation timeline for an enterprise hospital supply chain transformation?',
      a: 'Leveraging our pre-built healthcare accelerators and validated EHR-to-SAP connectors, initial core clinical inventory and CSSD deployments go live in 16 to 24 weeks with zero disruption to active operating suites.'
    }
  ];

  const filteredSolutions = activeSolutionCategory === 'ALL'
    ? modularSolutions
    : modularSolutions.filter(s => s.category === activeSolutionCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        
        {/* Full-Bleed Background Image with Seamless Cinematic Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=80" 
            alt="Modern Hospital and Healthcare Facility" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 sm:via-slate-950/70 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          <div className="max-w-3xl lg:max-w-4xl space-y-4">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-3"
            >
              {/* Practice Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-cyan-300 shadow-xl">
                <HeartPulse className="w-3.5 h-3.5 text-cyan-300" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>
              
              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Hospitals & <span className="text-[#38BDF8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">Healthcare</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Automating Clinical Supply Logistics, EHR-SAP Integration & Real-Time Ward Replenishment.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3.5 max-w-3xl"
            >
              <p className="text-sm sm:text-base lg:text-[17px] text-slate-100 font-normal leading-relaxed drop-shadow-sm">
                Transform hospital operations and health systems with integrated <strong className="text-white font-semibold">SAP S/4HANA Clean Core</strong>, bedside-to-dock clinical logistics, automated <strong className="text-cyan-300 font-semibold">surgical tray sterilization tracking</strong>, and real-time <strong className="text-white font-semibold">biomedical asset governance</strong>.
              </p>
              
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Clinical Supply Chain</span>
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>EHR / HL7 / FHIR Sync</span>
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Surgical Tray Tracking</span>
                </span>
              </div>
            </motion.div>

            {/* Enterprise Architectural Trust Ribbon */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 sm:mt-8 pt-5 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
            >
              <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/50 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold mb-1 tracking-wider">Architecture</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">SAP S/4HANA Clean Core</span>
              </div>
              <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/50 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold mb-1 tracking-wider">Interoperability</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">HL7 / FHIR Native Bridge</span>
              </div>
              <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/50 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold mb-1 tracking-wider">Logistics</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">Automated Two-Bin Kanban</span>
              </div>
              <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/50 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold mb-1 tracking-wider">Asset Care</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">Biomedical EAM Telematics</span>
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
                Aligning Bedside Clinical Care with Frictionless Hospital Operations
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Hospital executives face the dual imperative of improving patient safety while eliminating operational waste. Knooviq eliminates the barrier between clinical charting and backend supply chain execution, automating ward replenishment and sterile kit preparation.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'Automated HL7 / FHIR event-driven charge capture',
                  'Point-of-use RFID smart cabinet tracking',
                  'CSSD perioperative tray serialization & autoclave logs',
                  'Preventative calibration logs for critical biomedical fleets'
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-800 bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-5">
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold mb-1">
                    {journeySteps[activeJourneyStep].tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                    {journeySteps[activeJourneyStep].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
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
                      <div className="text-xs font-bold text-slate-900 truncate">{step.label}</div>
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-mono font-bold uppercase tracking-wider text-red-700">
              <AlertCircle className="w-3.5 h-3.5 text-red-600" />
              <span>HEALTHCARE OPERATIONAL BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Critical Challenges in Modern Health Systems
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Disconnected clinical systems and manual supply tracking undermine clinical efficiency and operational margins.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {healthcareChallenges.map((challenge, idx) => {
              const IconComp = challenge.icon;
              return (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-[#0070C0] transition-colors flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono uppercase text-slate-500 font-bold block">
                      {challenge.tag}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
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
              SAP S/4HANA Clean Core for Healthcare
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Future-proof your hospital IT architecture with an uncompromised standard ERP core and modular extensions on SAP BTP.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4 space-y-2">
              {[
                { id: 'clean-core', title: 'Clean Core ERP Foundation', sub: 'Zero core modifications' },
                { id: 'btp', title: 'BTP Clinical Integrations', sub: 'Side-by-side HL7 & FHIR microservices' },
                { id: 'ehr-sync', title: 'EHR Real-Time Data Fabric', sub: 'Sub-second consumption ledger' },
                { id: 'compliance', title: 'Joint Commission & Audit Engine', sub: 'Automated 21 CFR Part 11 records' }
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
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-300">Clean Core ERP Foundation</h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    Standard SAP S/4HANA Finance, Materials Management (MM), and Extended Warehouse Management (EWM) maintained with zero modifications. Upgrades occur seamlessly without disrupting surgical or clinical operations.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Standardized Clinical Procurement</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Automated group purchasing organization (GPO) pricing and contract validation.</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Centralized Medical Catalog</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Enterprise master data index aligning UNSPSC, HCPCS, and manufacturer item IDs.</div>
                    </div>
                  </div>
                </div>
              )}

              {activeArchTab === 'btp' && (
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-300">SAP BTP Clinical Extension Suite</h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    Deploy custom hospital extensions, RFID scanner interfaces, and AGV fleet dispatch rules as cloud-native microservices on SAP Business Technology Platform.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">HL7 v2 & FHIR Event Broker</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Low-latency clinical event processing for admission, transfer, and consumption.</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Smart Cabinet Mobile App</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Fiori-based bedside mobile tools for rapid item checkout and returns.</div>
                    </div>
                  </div>
                </div>
              )}

              {activeArchTab === 'ehr-sync' && (
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-300">EHR Real-Time Data Fabric</h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    Eliminate lag between clinical care charting in Epic/Cerner and enterprise financial ledgers. Every catheter, implant, and vial used is instantly reconciled against patient billing codes.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Automated Implants Bill-Only Flow</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Vendor consignment consumption automatically triggers PO creation and payment.</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Point-of-Care Lot Quarantine</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Instant bedside alerts preventing the administration of recalled lots.</div>
                    </div>
                  </div>
                </div>
              )}

              {activeArchTab === 'compliance' && (
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-300">Joint Commission & Regulatory Engine</h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    Automated sterilization proof, digital temperature logs for pharmacies, and comprehensive 21 CFR Part 11 electronic records ensure perpetual accreditation readiness.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Perpetual CSSD Autoclave Auditing</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Immutable temperature, pressure, and time records tied to each surgical tray lot.</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">FDA UDI Bedside Traceability</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Full chain-of-custody tracking from dock receiving to direct patient implant records.</div>
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
                Modular Healthcare Solutions
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Tailored pre-configured modules engineered for hospital systems, ambulatory clinics, and central medical warehouses.
              </p>
            </div>

            <div className="flex items-center gap-2">
              {(['ALL', 'CLINICAL', 'LOGISTICS', 'GOVERNANCE'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveSolutionCategory(cat)}
                  className={`industry-category-tab px-4 py-2 rounded-lg transition-all ${
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
              <span>MEASURABLE HEALTHCARE VALUE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Operational Transformation Matrix
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Comparing traditional disconnected hospital supply logistics with Knooviq SAP Clean Core orchestration.
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
                    <span className="text-xs font-mono uppercase text-red-600 font-bold block">Traditional Hospital Operations</span>
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
              Hospital & Health System Case Studies
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              How leading healthcare networks modernize hospital logistics and clinical supply chain performance.
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
            <HeartPulse className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR HEALTHCARE ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build a Frictionless, Patient-Centric Hospital Supply Backbone?
          </h2>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal">
            Schedule an executive architecture consultation with Knooviq's healthcare and clinical supply chain specialists to review your EHR-SAP integration blueprint.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenContact ? onOpenContact('Hospitals & Healthcare') : null}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-[#003B73] hover:bg-slate-100 font-bold text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Talk to Our Healthcare Experts</span>
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
              <span>HIPAA, HL7 & 21 CFR Part 11 Validated</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-cyan-300 shrink-0" />
              <span>Rapid 16-24 Week Implementation</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Globe2 className="w-4 h-4 text-sky-300 shrink-0" />
              <span>Global 24/7 SLA Clinical AMS Support</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
export default HospitalsHealthcareIndustryPage;
