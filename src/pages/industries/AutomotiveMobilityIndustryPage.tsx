import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Settings, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  BarChart3, 
  TrendingUp, 
  Layers, 
  AlertTriangle, 
  Boxes, 
  Clock, 
  ChevronRight, 
  ChevronDown, 
  Workflow, 
  Gauge, 
  Compass, 
  Award,
  Factory,
  Globe2
} from 'lucide-react';
import { IndustryFaqSection } from '../../components/common/IndustryFaqSection';

interface AutomotiveMobilityIndustryPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const AutomotiveMobilityIndustryPage: React.FC<AutomotiveMobilityIndustryPageProps> = ({ 
  onOpenContact 
}) => {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const challenges = [
    {
      icon: AlertTriangle,
      title: 'OEM Line-Stop Penalty Risks',
      tag: 'LINE-SIDE DELIVERY',
      desc: 'Tier-1 suppliers face penalties exceeding $20,000 per minute for delivery delays, demanding fault-tolerant broadcast synchronization.',
      footer: 'Protected via Real-Time JIT/JIS Engine'
    },
    {
      icon: Zap,
      title: 'EV Battery Cell Traceability',
      tag: 'BATTERY PASSPORT',
      desc: 'New EU battery passport mandates require tracking every individual lithium cell, chemical batch, and cathode carbon footprint.',
      footer: 'Guaranteed with Cell-Level Serialization'
    },
    {
      icon: Workflow,
      title: 'Sudden Broadcast EDI Fluctuations',
      tag: 'EDI SYNCHRONIZATION',
      desc: 'OEMs adjust assembly sequence schedules hours before arrival, causing sequencing cart misallocations and dock bottlenecks.',
      footer: 'Absorbed by Automated EDI 862 Buffering'
    },
    {
      icon: ShieldCheck,
      title: 'Torque & Fastener Safety Drift',
      tag: 'SAFETY AUDITING',
      desc: 'Manual recording of critical chassis torque values introduces recall vulnerabilities and fails strict automotive safety audits.',
      footer: 'Integrated with Live Torque Tool Telemetry'
    },
    {
      icon: TrendingUp,
      title: 'Semiconductor & Alloy Shortages',
      tag: 'SUPPLY VOLATILITY',
      desc: 'Tier-2 component stockouts ripple into vehicle assembly delays without multi-tier inventory visibility and supplier collaboration.',
      footer: 'Optimized via SAP IBP Automotive Sensing'
    },
    {
      icon: Cpu,
      title: 'Software-Defined Vehicle Complexity',
      tag: 'ECU FIRMWARE SYNC',
      desc: 'Coordinating hardware BOM revisions with over-the-air ECU firmware versions across global plant networks creates configuration chaos.',
      footer: 'Unified via S/4HANA Variant Configuration'
    }
  ];

  const architectureLayers = [
    {
      title: '1. Line-Side Automation & Tool Telemetry Layer',
      subtitle: 'AGVs, Smart Torque Guns, Barcode Scanners & Pick-to-Light',
      desc: 'Sub-second sensor collection verifying fastener torque angles, VIN chassis scans, and automated guided vehicle dispatching to line-side stations.',
      tags: ['OPC UA', 'Desoutter / Atlas Copco Telemetry', 'AGV Fleet Control', 'RFID Gates']
    },
    {
      title: '2. Automotive Sequencing & MES Execution (SAP DMC)',
      subtitle: 'Just-In-Time (JIT) & Just-In-Sequence (JIS) Control Cockpit',
      desc: 'Translates OEM broadcast messages into sequenced pick lists, dynamic vehicle racks, and digital touchscreen operator instructions.',
      tags: ['SAP DMC for Automotive', 'JIS Sequence Engine', 'Digital Work Instructions', 'Scrap Logging']
    },
    {
      title: '3. SAP S/4HANA Automotive Digital Core',
      subtitle: 'Automotive EDI Processing, MRP Live & VIN Variant Config',
      desc: 'In-memory engine ingesting EDI 850, 862, and DELJIT protocols, reconciling vehicle multi-level BOMs with production capacity.',
      tags: ['EDI 862 / DELJIT', 'MRP Live', 'Variant Configuration', 'CO-PC Product Costing']
    },
    {
      title: '4. Connected Mobility Supply Chain & Logistics',
      subtitle: 'Supplier Collaboration, Yard Management & E-Mobility Tracking',
      desc: 'Coordinating multi-tier supplier releases, battery recycling compliance, and finished vehicle transporter scheduling.',
      tags: ['SAP EWM', 'SAP Transportation Management', 'Battery Passport Cloud', 'Ariba Network']
    }
  ];

  const modularSolutions = [
    {
      category: 'SEQUENCING',
      categoryLabel: 'Sequence Logistics',
      icon: Truck,
      tag: 'AUTO-01',
      title: 'Tier-1 JIT / JIS Broadcast Sequencing',
      description: 'End-to-end EDI 862 processing with automated line-side broadcast sequencing for zero-stop delivery to automotive OEM assembly plants.',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
      highlights: ['JIT / JIS Broadcast Sync', 'EDI 850/862 Automation', 'Line-Side Sequencing']
    },
    {
      category: 'EV',
      categoryLabel: 'EV & Battery',
      icon: Zap,
      tag: 'AUTO-02',
      title: 'Connected EV Battery Pack Assembly & Passports',
      description: 'High-voltage safety testing, cell-level traceability, thermal paste dispensing inspection, and automated EU Battery Passport logging.',
      image: 'https://images.unsplash.com/photo-1558441719-aa3445544f50?auto=format&fit=crop&w=800&q=80',
      highlights: ['Cell-Level Serialization', 'Battery Passport Compliance', 'Thermal Testing Logs']
    },
    {
      category: 'EXECUTION',
      categoryLabel: 'Shop-Floor Execution',
      icon: Settings,
      tag: 'AUTO-03',
      title: 'Smart Chassis & Powertrain MES Cockpit',
      description: 'Touchscreen operator terminals with interactive 3D assembly models, automated tool calibration, and inline machine vision QA checks.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      highlights: ['Digital Work Instructions', 'Torque Gun Telemetry', 'Inline Vision Inspection']
    },
    {
      category: 'SUPPLY',
      categoryLabel: 'Supply Network',
      icon: Workflow,
      tag: 'AUTO-04',
      title: 'Automotive Multi-Tier Supplier EDI Hub',
      description: 'Consolidating Tier-2 supplier release schedules, kanban triggers, and electronic advanced shipping notices (ASN 856).',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      highlights: ['ASN 856 Ingestion', 'Dynamic Supplier Kanban', 'Shortage Early-Warning']
    },
    {
      category: 'QUALITY',
      categoryLabel: 'Quality Assurance',
      icon: ShieldCheck,
      tag: 'AUTO-05',
      title: 'Zero-Defect Quality & IATF 16949 Audit Suite',
      description: 'Automated Failure Mode and Effects Analysis (FMEA), Production Part Approval Process (PPAP), and statistical process control (SPC).',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      highlights: ['IATF 16949 Audit Ready', 'Automated PPAP Submissions', 'Live SPC Trend Alerts']
    },
    {
      category: 'AFTERMARKET',
      categoryLabel: 'Aftermarket Spares',
      icon: Boxes,
      tag: 'AUTO-06',
      title: 'Automotive Spares & Warranty Lifecycle',
      description: 'VIN-level component genealogy for expedited recall containment, automated dealer warranty claims, and spare parts allocation.',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
      highlights: ['VIN Genealogy Recall Lock', 'Warranty Adjudication', 'Dealer Spares Sync']
    }
  ];

  const categories = [
    { key: 'ALL', label: 'All Modules' },
    { key: 'SEQUENCING', label: 'JIT/JIS Sequencing' },
    { key: 'EV', label: 'EV & Battery' },
    { key: 'EXECUTION', label: 'Shop-Floor Execution' },
    { key: 'SUPPLY', label: 'Supply Network' },
    { key: 'QUALITY', label: 'Quality & IATF' }
  ];

  const valueMetrics = [
    {
      value: '99.98%',
      label: 'JIT Sequence Accuracy',
      desc: 'Sub-second EDI broadcast synchronizing line-side delivery carts with customer assembly schedules.'
    },
    {
      value: '0',
      label: 'OEM Line-Stop Penalties',
      desc: 'Robust automated buffering and alternative routing prevent assembly stoppages and heavy fines.'
    },
    {
      value: '<350ms',
      label: 'EDI Ingestion Latency',
      desc: 'In-memory EDI processing converts ANSI X12 and EDIFACT messages into work orders instantaneously.'
    },
    {
      value: '100%',
      label: 'Battery & VIN Traceability',
      desc: 'Full genealogical tracking from chemical raw material lot to finished vehicle chassis.'
    }
  ];

  const caseStudies = [
    {
      badge: 'TIER-1 DRIVETRAIN LEADER',
      title: 'Tier-1 Axle & Transmission Supplier Eliminates OEM Delivery Penalties',
      client: 'Global Automotive Powertrain Manufacturer',
      impact: 'Sequenced 140,000 components daily to 5 OEM assembly plants with 0 line stoppages',
      stats: [
        { label: 'Sequence Accuracy', val: '99.99%' },
        { label: 'Line-Stops', val: '0' },
        { label: 'EDI Speed', val: '180ms' }
      ],
      desc: 'Replaced legacy custom software with SAP Digital Manufacturing and automated JIS rack staging, synchronizing AGV deliveries with live assembly line broadcasts.'
    },
    {
      badge: 'EV BATTERY GIGAFACTORY',
      title: 'European EV Battery Producer Automates EU Battery Passport Compliance',
      client: 'High-Volume Lithium Battery Manufacturer',
      impact: '100% cell traceability with automated carbon footprint and chemical disclosure passports',
      stats: [
        { label: 'Cell Serialization', val: '100%' },
        { label: 'Scrap Reduction', val: '-28%' },
        { label: 'Passport Generation', val: 'Instant' }
      ],
      desc: 'Deployed real-time torque and machine telemetry integration into S/4HANA, tracking electrode coating, cell assembly, and pack testing genealogies.'
    },
    {
      badge: 'AUTOMOTIVE STAMPING & BODY',
      title: 'Precision Metal Stamping Leader Cuts Die Changeover Times by 42%',
      client: 'Automotive Body-in-White Component Producer',
      impact: 'Decreased Single-Minute Exchange of Die (SMED) setup times from 45 min to under 18 min',
      stats: [
        { label: 'OEE Uplift', val: '+12.4%' },
        { label: 'Changeover Time', val: '-42%' },
        { label: 'First-Pass Yield', val: '99.2%' }
      ],
      desc: 'Implemented digital work instructions and IoT press tonnage monitoring to predict die wear and automate tool changeover schedules.'
    }
  ];

  const faqs = [
    {
      q: 'How does Knooviq handle OEM broadcast sequencing changes (DELJIT / 862)?',
      a: 'Our EDI buffer engine continuously ingests DELJIT and ANSI X12 862 messages. When an OEM alters chassis order, the system instantly recalculates sequence cart loading order and re-routes line-side AGVs prior to staging.'
    },
    {
      q: 'Does the solution support IATF 16949 audit compliance out-of-the-box?',
      a: 'Yes. The system includes pre-built audit trails for PPAP documentation, automated statistical process control (SPC) charts, tool calibration logs, and non-conformance containment workflows compliant with IATF 16949.'
    },
    {
      q: 'Can we integrate smart torque tools and automated vision cameras with the shop-floor MES?',
      a: 'Yes. Through localized Edge gateways utilizing OPC UA and Open Protocol standards, torque angle/value data and vision pass/fail images are bound directly to the vehicle VIN serial record in real time.'
    },
    {
      q: 'How does the platform support upcoming EU Battery Passport regulations?',
      a: 'We capture component genealogy from cell manufacturing, battery management system (BMS) flashing, and high-voltage testing into a secure digital twin record that exports standard EU Battery Passport declarations.'
    },
    {
      q: 'How long does a typical SAP Automotive & Mobility implementation take?',
      a: 'With our pre-configured Tier-1 automotive accelerators, typical plant sequencing and MES deployments go live in 16 to 24 weeks, minimizing disruption to ongoing production lines.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full h-[540px] sm:h-[560px] lg:h-[580px] flex items-center pt-24 sm:pt-28 lg:pt-28 pb-8 overflow-hidden bg-slate-900">
        
        {/* Full-Bleed Background Image with Seamless Cinematic Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=80" 
            alt="Automotive Robotic Assembly Line" 
            className="w-full h-full object-cover object-center"
          />
          {/* Multi-layered cinematic gradient scrim: left dark for perfect readability, smooth fade to showcase vibrant facility on right */}
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
                <Truck className="w-3 h-3 text-cyan-300" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>
              
              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Automotive & <span className="text-[#38BDF8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">Mobility</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Synchronizing Tier-1 OEM Broadcasts, EV Battery Traceability & Zero-Defect Assembly.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3 max-w-2xl"
            >
              <p className="text-sm sm:text-base lg:text-[17px] text-slate-100 font-normal leading-relaxed drop-shadow-sm">
                Empower automotive manufacturers and suppliers with integrated <strong className="text-white font-semibold">SAP S/4HANA Clean Core</strong>, <strong className="text-cyan-300 font-semibold">JIT/JIS sequence fulfillment</strong>, automated EDI 850/862 ingestion, and <strong className="text-white font-semibold">battery passport compliance</strong> across global production lines.
              </p>
              
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>JIT / JIS Sequencing</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>EV Battery Traceability</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Zero-Defect Assembly</span>
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
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Fulfillment</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">JIT / JIS Broadcast Sync</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Traceability</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">EU Battery Passport Ready</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Telemetry</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">Smart Tooling & DMC MES</span>
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
                <Factory className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>EXECUTIVE PERSPECTIVE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Synchronizing High-Speed Automotive Supply Chains with Zero Room for Error
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In modern automotive manufacturing, Tier-1 suppliers cannot afford a single sequence mismatch. Knooviq integrates real-time EDI broadcast messages directly with shop-floor execution systems, dispatching sequence carts and AGVs with sub-second accuracy.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'Automated ANSI X12 862 & EDIFACT DELJIT ingestion',
                  'Direct line-side JIS sequencing & broadcast control',
                  'Complete high-voltage battery cell genealogical tracking',
                  'Automated warranty adjudication & recall containment'
                ].map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-800 bg-white p-3 rounded-lg border border-slate-200 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#0070C0] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-300 shadow-md bg-slate-900 min-h-[320px]">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80" 
                alt="Automotive Digital Cockpit & MES" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-6" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold mb-1">OPERATIONAL CONTROL</div>
                <div className="text-lg sm:text-xl font-bold text-white leading-snug">Sub-Second Automotive Sequence Synchronization</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: STRATEGIC CHALLENGES */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
              <Compass className="w-3.5 h-3.5 text-rose-600" />
              <span>CORE BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Navigating High-Stakes Automotive Hurdles
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Penalties for OEM line stoppages, EV battery passport mandates, and supply chain stockouts demand integrated enterprise control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {challenges.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="h-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-sky-50 text-[#0070C0] border border-slate-200 group-hover:bg-[#0070C0] group-hover:text-white transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono uppercase text-slate-500 font-bold block">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-950 leading-snug group-hover:text-[#0070C0] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {item.footer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: PLATFORM ARCHITECTURE */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#070B14] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase">
              <Workflow className="w-3.5 h-3.5 text-cyan-300" />
              <span>AUTOMOTIVE ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Connected Automotive Stack: From Line-Side to Core
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Synchronizing physical robotics, sequence carts, and torque sensors directly with SAP S/4HANA digital core.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 space-y-3">
              {architectureLayers.map((layer, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveLayer(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all border ${
                    activeLayer === idx
                      ? 'bg-sky-500/20 border-sky-400 text-white shadow-lg'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-bold text-white">{layer.title}</h3>
                    <ChevronRight className={`w-4 h-4 transition-transform ${activeLayer === idx ? 'rotate-90 text-cyan-300' : 'text-slate-400'}`} />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 mt-1">{layer.subtitle}</div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-700 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-mono font-bold uppercase mb-2">
                <Zap className="w-4 h-4 text-cyan-300" />
                <span>Tier Blueprint {activeLayer + 1} of 4</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-cyan-300 mb-2">
                {architectureLayers[activeLayer].title}
              </h3>
              <p className="text-sm sm:text-base text-cyan-200/90 font-medium mb-3">
                {architectureLayers[activeLayer].subtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                {architectureLayers[activeLayer].desc}
              </p>

              <div className="space-y-2 pt-4 border-t border-slate-800">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Integrated Protocols & Systems</div>
                <div className="flex flex-wrap gap-2">
                  {architectureLayers[activeLayer].tags.map((t, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md bg-white/10 text-xs font-mono font-semibold text-cyan-300 border border-white/15">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MODULAR SOLUTIONS (50% Image + 50% Content, No Inquire Button) */}
      <section id="modular-solutions" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Boxes className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>MODULAR SOLUTIONS MATRIX</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Pre-Configured Automotive SAP Modules
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Battle-tested capabilities engineered specifically for Tier-1 component suppliers, EV battery assemblers, and OEM partners.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => {
              const isActive = activeSolutionCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveSolutionCategory(cat.key)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold uppercase transition-all ${
                    isActive
                      ? 'bg-[#0070C0] text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {modularSolutions
              .filter((sol) => activeSolutionCategory === 'ALL' || sol.category === activeSolutionCategory)
              .map((sol) => {
                const IconComponent = sol.icon;
                return (
                  <div
                    key={sol.title}
                    className="h-[400px] rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col group"
                  >
                    {/* 1. Top Image Portion - Exactly 50% Height */}
                    <div className="relative h-1/2 w-full overflow-hidden bg-slate-100 shrink-0">
                      <img 
                        src={sol.image} 
                        alt={sol.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                      
                      <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-cyan-300 uppercase">
                        {sol.tag}
                      </div>
                    </div>

                    {/* 2. Bottom Content Body - Exactly 50% Height */}
                    <div className="h-1/2 p-5 flex flex-col justify-between overflow-hidden">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-[#0070C0] uppercase tracking-wider">
                            {sol.categoryLabel}
                          </span>
                          <div className="p-1.5 rounded-lg bg-sky-50 text-[#0070C0] border border-slate-200 group-hover:bg-[#0070C0] group-hover:text-white transition-all">
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <h3 className="text-base font-bold text-slate-950 truncate group-hover:text-[#0070C0] transition-colors">
                          {sol.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed line-clamp-2">
                          {sol.description}
                        </p>
                      </div>

                      <div className="space-y-1.5 pt-2 border-t border-slate-100">
                        {sol.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span className="truncate">{hl}</span>
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

      {/* SECTION 8: CASE STUDIES */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Award className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PROVEN CLIENT SUCCESS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Automotive Leaders Transforming with Knooviq
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              See how market leaders eliminated delivery penalties and built connected EV factories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0070C0] transition-all flex flex-col justify-between">
                <div>
                  <div className="inline-block px-2.5 py-1 rounded-md bg-sky-50 text-xs font-mono font-bold text-[#0070C0] border border-sky-200 mb-3">
                    {cs.badge}
                  </div>
                  <h3 className="text-base font-bold text-slate-950 mb-2 leading-snug">
                    {cs.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-500 font-medium mb-3">
                    {cs.client}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-5">
                    {cs.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="text-xs font-mono uppercase font-bold text-emerald-700 block mb-1">Delivered Outcome</span>
                  <p className="text-sm font-semibold text-slate-950 leading-relaxed">{cs.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQS */}
      <IndustryFaqSection
        badge="AUTOMOTIVE ARCHITECTURE FAQ"
        title="Frequently Asked Questions"
        subtitle="Key technical insights on EDI 850/862 sub-second pipelines, shop-floor MES connectors, and battery genealogy compliance."
        faqs={faqs}
        onOpenContact={onOpenContact}
        contactTopic="Automotive Architecture & EDI Integration"
      />

      {/* SECTION 11: FINAL CTA (Consumer & Commerce Style) */}
      <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-r from-[#003B73] via-[#005B9E] to-[#0070C0] text-white">
        
        {/* Abstract 3D Digital / Network Mesh Visual */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
              backgroundSize: '100% 100%'
            }}
          />
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: 'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
              backgroundSize: '36px 36px'
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-cyan-200 backdrop-blur-sm shadow-sm">
            <Truck className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR AUTOMOTIVE ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build a Smarter Automotive Supply Chain?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Connect your plant sequencing, EDI communications, shop-floor MES, and EV battery compliance with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact?.('Automotive & Mobility Consultation')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to Our Automotive Experts</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0070C0]" />
            </button>

            <Link
              to="/solutions/sap-s4hana"
              className="px-8 py-4 rounded-xl bg-transparent hover:bg-white/10 text-white text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-white/40 hover:border-white transition-all flex items-center gap-2"
            >
              <span>Explore SAP Solutions</span>
            </Link>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-sky-200">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>SAP Certified Clean Core</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-300" />
              <span>Rapid Time-to-Value Delivery</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-sky-300" />
              <span>Global 24/7 SLA AMS Support</span>
            </span>
          </div>

        </div>

      </section>

    </div>
  );
};
