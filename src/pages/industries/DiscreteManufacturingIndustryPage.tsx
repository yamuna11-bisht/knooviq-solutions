import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Settings, 
  Cpu, 
  Workflow, 
  Gauge, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  Boxes, 
  ChevronRight, 
  ChevronDown, 
  Zap, 
  Compass, 
  Factory, 
  Wrench, 
  Award,
  Layers,
  Globe2,
  Clock
} from 'lucide-react';
import { IndustryFaqSection } from '../../components/common/IndustryFaqSection';

interface DiscreteManufacturingIndustryPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const DiscreteManufacturingIndustryPage: React.FC<DiscreteManufacturingIndustryPageProps> = ({ 
  onOpenContact 
}) => {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const challenges = [
    {
      icon: Cpu,
      title: 'Shop-Floor Machine Data Isolation',
      tag: 'OT/IT DIVIDE',
      desc: 'Heterogeneous CNCs, PLCs, and stamping presses operate in silos, preventing real-time production visibility and causing delayed job tracking.',
      footer: 'Bridged via SAP DMC & Edge Gateway Connectors'
    },
    {
      icon: Workflow,
      title: 'Engineering Change Order (ECO) Delays',
      tag: 'CAD/PLM DRIFT',
      desc: 'Design changes in CAD/PLM take days to reach the shop floor, resulting in scrapped assemblies, rework, and outdated work instructions.',
      footer: 'Synchronized via Bi-Directional PLM-ERP Sync'
    },
    {
      icon: Gauge,
      title: 'OEE Blind Spots & Unplanned Downtime',
      tag: 'EQUIPMENT RELIABILITY',
      desc: 'Plant managers lack real-time micro-stoppage tracking, obscuring the true root causes of poor availability, speed loss, and quality defects.',
      footer: 'Monitored via Live Automated OEE Dashboards'
    },
    {
      icon: ShieldCheck,
      title: 'First-Pass Yield Degradation',
      tag: 'SCRAP & REWORK',
      desc: 'Manual post-production QA inspections fail to detect machine tool wear, leading to defective component runs and high scrap costs.',
      footer: 'Prevented with Inline Vision & Sensor QA'
    },
    {
      icon: Boxes,
      title: 'Complex Multi-Level BOM Management',
      tag: 'VARIANT COMPLEXITY',
      desc: 'Managing thousands of customizable discrete finished goods configurations creates inventory confusion and scheduling bottlenecks.',
      footer: 'Streamlined with S/4HANA Variant Configuration'
    },
    {
      icon: Wrench,
      title: 'Tool Wear & Calibration Compliance',
      tag: 'TOOLING LIFECYCLE',
      desc: 'Uncalibrated CNC tooling leads to precision tolerance drift, non-conformance penalties, and unexpected tool breakage mid-shift.',
      footer: 'Governed by Automated Tool Lifecycle Tracking'
    }
  ];

  const architectureLayers = [
    {
      title: '1. Machine Automation & Sensor Telemetry Layer',
      subtitle: 'CNCs, Stamping Presses, Robotics & Tool Controllers',
      desc: 'High-frequency telemetry ingestion via OPC UA, MTConnect, and Modbus from machine tools directly into shop-floor edge nodes.',
      tags: ['OPC UA', 'MTConnect', 'Siemens Sinumerik', 'Fanuc FOCAS', 'Vibration Sensors']
    },
    {
      title: '2. Shop-Floor Execution & MES (SAP Digital Manufacturing)',
      subtitle: 'Dispatching Cockpit, Digital Work Instructions & Live OEE',
      desc: 'Empowers operators with interactive 3D assembly guidance, barcode part verification, live scrap logging, and automated rework routing.',
      tags: ['SAP DMC for Execution', 'Operator Touch Cockpit', '3D Visual Assembly', 'OEE Calculation Engine']
    },
    {
      title: '3. SAP S/4HANA Manufacturing & MRP Live',
      subtitle: 'Finite Production Planning & Detailed Scheduling (PP/DS)',
      desc: 'Simulates capacity constraints across work centers, optimizes machine changeovers, and automatically issues purchase requisitions.',
      tags: ['MRP Live', 'PP/DS Finite Scheduling', 'Production Order Management', 'Standard Costing']
    },
    {
      title: '4. Enterprise Quality & Connected Asset Performance',
      subtitle: 'Closed-Loop QM, Predictive Maintenance & Digital Twin',
      desc: 'Integrates real-time inspection lot results, automated non-conformance containment, and AI-driven machine failure predictions.',
      tags: ['SAP Quality Management (QM)', 'Asset Performance Management', 'Predictive Maintenance', 'PLM Integration']
    }
  ];

  const modularSolutions = [
    {
      category: 'MES',
      categoryLabel: 'Shop-Floor MES',
      icon: Settings,
      tag: 'DISC-01',
      title: 'Discrete Shop-Floor Execution & MES Live',
      description: 'Operator touchscreen terminals with digital work instructions, automated tool calibration validation, and instant scrap root-cause capture.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      highlights: ['Operator Touch Cockpits', 'Live OEE Telemetry', 'Automated Scrap Logging']
    },
    {
      category: 'PLM',
      categoryLabel: 'Engineering & PLM',
      icon: Workflow,
      tag: 'DISC-02',
      title: 'Complex Multi-Level BOM & PLM Sync',
      description: 'Bi-directional synchronization between Siemens Teamcenter / PTC Windchill and SAP S/4HANA, eliminating engineering change order lag.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      highlights: ['CAD/PLM Bi-Directional Sync', 'Automated ECO Workflows', 'Variant Configuration']
    },
    {
      category: 'PLANNING',
      categoryLabel: 'Planning & Scheduling',
      icon: Gauge,
      tag: 'DISC-03',
      title: 'Finite Capacity Scheduling & MRP Live',
      description: 'In-memory detailed scheduling that models machine tooling constraints, setup matrix dependencies, and operator skill matrix availability.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      highlights: ['Machine Setup Matrix', 'Finite Work Center Scheduling', 'Sub-Second MRP Live']
    },
    {
      category: 'QUALITY',
      categoryLabel: 'Quality Control',
      icon: ShieldCheck,
      tag: 'DISC-04',
      title: 'Inline Machine Vision & Defect Containment',
      description: 'AI vision camera integration verifying dimensional tolerances and surface finishes, triggering immediate automated rework routing.',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
      highlights: ['AI Vision Defect Inspection', 'Automated Rework Routing', 'Statistical Process Control']
    },
    {
      category: 'TOOLING',
      categoryLabel: 'Tooling & Assets',
      icon: Wrench,
      tag: 'DISC-05',
      title: 'Tool Life Management & Predictive Maintenance',
      description: 'Monitors tool cycles, spindle vibration, and bearing heat signatures to replace cutting inserts and dies before mechanical failure.',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
      highlights: ['Tool Cycle Life Tracking', 'Spindle Vibration Analytics', 'Preventive Calibration']
    },
    {
      category: 'OEE',
      categoryLabel: 'Operational Analytics',
      icon: BarChart3,
      tag: 'DISC-06',
      title: 'Real-Time OEE & Plant Command Cockpit',
      description: 'Consolidated plant dashboard tracking Availability, Performance, and Quality metrics with automatic micro-stoppage categorization.',
      image: 'https://images.unsplash.com/photo-1558441719-aa3445544f50?auto=format&fit=crop&w=800&q=80',
      highlights: ['Real-Time OEE Calculation', 'Micro-Stoppage Pareto Analysis', 'Plant Shift Benchmarking']
    }
  ];

  const categories = [
    { key: 'ALL', label: 'All Modules' },
    { key: 'MES', label: 'Shop-Floor MES' },
    { key: 'PLM', label: 'Engineering & PLM' },
    { key: 'PLANNING', label: 'Planning & Scheduling' },
    { key: 'QUALITY', label: 'Quality Control' },
    { key: 'TOOLING', label: 'Tooling & Assets' }
  ];

  const valueMetrics = [
    {
      value: '+14.5%',
      label: 'OEE Efficiency Uplift',
      desc: 'Real-time bottleneck diagnosis and rapid operator assistance eliminate hidden machine micro-stoppages.'
    },
    {
      value: '-75%',
      label: 'Engineering Change Cycle Time',
      desc: 'Automated PLM-to-ERP synchronization updates BOM revisions and digital work instructions in hours.'
    },
    {
      value: '-32%',
      label: 'Scrap & Rework Reduction',
      desc: 'Inline dimensional verification and automated tool calibration catch process drift before bad parts are made.'
    },
    {
      value: '100%',
      label: 'Component Genealogy',
      desc: 'Comprehensive serialized tracking from raw metal billet to final packaged industrial assembly.'
    }
  ];

  const caseStudies = [
    {
      badge: 'PRECISION MACHINING OEM',
      title: 'Global High-Precision Component Leader Elevates OEE to 94.2%',
      client: 'Multi-Plant CNC Precision Manufacturer',
      impact: 'Connected 120 CNC machines across 3 facilities with automated real-time scrap tracking',
      stats: [
        { label: 'OEE Gain', val: '+16.2%' },
        { label: 'Scrap Drop', val: '-34%' },
        { label: 'Machine Uptime', val: '97.8%' }
      ],
      desc: 'Integrated MTConnect machine telemetry into SAP DMC, giving supervisors live color-coded shift cockpits and alerting maintenance prior to spindle failures.'
    },
    {
      badge: 'INDUSTRIAL PUMP & VALVE OEM',
      title: 'Heavy Fluid Equipment Manufacturer Cuts ECO Cycle from 14 Days to 3 Hours',
      client: 'Engineered-To-Order Industrial Pump Producer',
      impact: 'Bi-directional PLM-S/4HANA integration unified 4,500 active multi-level BOMs',
      stats: [
        { label: 'ECO Speed', val: '-85%' },
        { label: 'First-Pass Yield', val: '98.6%' },
        { label: 'On-Time Assembly', val: '99.2%' }
      ],
      desc: 'Implemented animated 3D work instructions tied directly to CAD model revisions, ensuring assembly workers never build against outdated drawings.'
    },
    {
      badge: 'AEROSPACE FASTENERS',
      title: 'Aerospace Discrete Hardware Supplier Automates AS9100 Quality Traceability',
      client: 'Aerospace & Defense Precision Fastener Manufacturer',
      impact: '100% heat-lot serialization and automated inspection certificates for defense audits',
      stats: [
        { label: 'Audit Time', val: '-70%' },
        { label: 'Calibration Errors', val: '0' },
        { label: 'Customer Rejection', val: '<0.02%' }
      ],
      desc: 'Integrated digital tool calibration and smart micrometers directly into SAP Quality Management, logging dimensional measurements on every batch.'
    }
  ];

  const faqs = [
    {
      q: 'How does SAP Digital Manufacturing connect to older CNC and legacy machine tools?',
      a: 'We deploy localized Industrial Edge gateways that connect to older machines via standard I/O sensors (current clamps, stack lights) or fieldbus converters (RS-485, Modbus, OPC UA), capturing machine run status and cycle times without replacing controls.'
    },
    {
      q: 'Can the system handle both Engineer-to-Order (ETO) and Make-to-Stock (MTS) production?',
      a: 'Yes. SAP S/4HANA seamlessly supports hybrid manufacturing. MTS lines leverage repetitive manufacturing and automated kanban, while ETO machinery utilizes Project Systems (SAP PS) and Variant Configuration (LO-VC).'
    },
    {
      q: 'How does bi-directional PLM integration prevent assembly errors during engineering changes?',
      a: 'When an ECO is released in Teamcenter or Windchill, SAP S/4HANA updates the manufacturing BOM and marks existing orders with revision flags. Operators cannot proceed without reviewing the new revision.'
    },
    {
      q: 'Does the MES solution support paperless shop-floor operation?',
      a: 'Yes. Operators access all assembly drawings, 3D interactive models, torque steps, and safety checklists via industrial touchscreens or rugged tablets, eliminating paper route sheets entirely.'
    },
    {
      q: 'What is the implementation timeline for a discrete plant MES rollout?',
      a: 'A pilot line deployment is typically operational within 12 to 16 weeks, followed by templated multi-plant rollouts every 6 to 8 weeks.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full h-[540px] sm:h-[560px] lg:h-[580px] flex items-center pt-24 sm:pt-28 lg:pt-28 pb-8 overflow-hidden bg-slate-900">
        
        {/* Full-Bleed Background Image with Seamless Cinematic Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=80" 
            alt="Discrete Manufacturing CNC Center" 
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
                <Settings className="w-3 h-3 text-cyan-300" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>
              
              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Discrete <span className="text-[#38BDF8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">Manufacturing</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Connecting CNC Machines, Multi-Level Engineering BOMs & Real-Time Shop-Floor OEE.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3 max-w-2xl"
            >
              <p className="text-sm sm:text-base lg:text-[17px] text-slate-100 font-normal leading-relaxed drop-shadow-sm">
                Supercharge discrete manufacturing plants with integrated <strong className="text-white font-semibold">SAP S/4HANA Clean Core</strong>, <strong className="text-cyan-300 font-semibold">Digital Manufacturing Cloud (DMC)</strong>, bi-directional PLM-BOM synchronization, and <strong className="text-white font-semibold">automated OEE telemetry</strong> across all work centers.
              </p>
              
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Multi-Level BOM Sync</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Shop-Floor MES & OEE</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Digital Work Instructions</span>
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
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Shop Floor</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">SAP DMC & CNC MES Sync</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Engineering</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">Bi-Directional PLM / CAD</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Efficiency</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">Automated OEE Analytics</span>
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
                Bridging the Gap Between Engineering Blueprints and Shop-Floor Reality
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In discrete manufacturing, profit margins are lost in the micro-stops, unrecorded scrap, and engineering change delays between design and assembly. Knooviq transforms shop floors into synchronized digital ecosystems with live machine telematics and paperless execution.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'Digital work instructions & automated tool telemetry',
                  'Real-time scrap logging & automated rework routing',
                  'Bi-directional PLM-to-ERP multi-level BOM sync',
                  'Mobile operator cockpits with visual 3D assembly models'
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
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80" 
                alt="Discrete Factory Execution" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-6" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold mb-1">REAL-TIME OEE INTELLIGENCE</div>
                <div className="text-lg sm:text-xl font-bold text-white leading-snug">Paperless Shop-Floor Execution on Touch Terminals</div>
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
              <span>SHOP-FLOOR BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Overcoming Critical Discrete Bottlenecks
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Scrap spikes, engineering change lag, and isolated CNC machines throttle shop-floor productivity.
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
              <span>DISCRETE MES ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Integrated Discrete Core: From Machine to S/4HANA
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Connecting machine tools and operator terminals directly to enterprise MRP Live and detailed scheduling.
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
                <span>Architecture Tier {activeLayer + 1} of 4</span>
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
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Integrated Standards & Connectors</div>
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
              Pre-Configured Discrete SAP Modules
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Standardized, pre-built components that accelerate shop-floor execution and eliminate multi-level BOM complexity.
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
              Discrete Transformations in Action
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Real stories of manufacturers elevating machine productivity with Knooviq and SAP.
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
        badge="DISCRETE SHOP-FLOOR & MES FAQ"
        title="Frequently Asked Questions"
        subtitle="Key architectural considerations for CNC machine telemetry, PLM revision synchronization, and dynamic OEE optimization."
        faqs={faqs}
        onOpenContact={onOpenContact}
        contactTopic="Discrete Manufacturing MES & PLM Architecture"
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
            <Factory className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR DISCRETE MANUFACTURING ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build a Smarter Discrete Manufacturing Operation?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Connect your CNC machining, multi-level BOMs, PLM engineering, and shop-floor MES with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact?.('Discrete Manufacturing Consultation')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to Our Discrete Manufacturing Experts</span>
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
