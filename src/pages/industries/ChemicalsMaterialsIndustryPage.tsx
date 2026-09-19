import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Flame, 
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
  Award,
  Layers,
  FileText,
  Globe2,
  Clock
} from 'lucide-react';
import { IndustryFaqSection } from '../../components/common/IndustryFaqSection';

interface ChemicalsMaterialsIndustryPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const ChemicalsMaterialsIndustryPage: React.FC<ChemicalsMaterialsIndustryPageProps> = ({ 
  onOpenContact 
}) => {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const challenges = [
    {
      icon: AlertTriangle,
      title: 'Global GHS & Hazmat Labeling Complexity',
      tag: 'REGULATORY COMPLIANCE',
      desc: 'Shipping hazardous chemical blends into 40+ countries requires localized GHS hazard pictograms, signal words, and Safety Data Sheets (SDS).',
      footer: 'Automated via SAP EHS Regulatory Engines'
    },
    {
      icon: Flame,
      title: 'Plant Safety & Incident Containment',
      tag: 'PROCESS SAFETY (PSM)',
      desc: 'Volatile chemical synthesis, exothermic reactions, and toxic vapors demand automated interlocks and real-time incident root-cause investigations.',
      footer: 'Enforced via OSHA PSM & SAP Incident Management'
    },
    {
      icon: ShieldCheck,
      title: 'REACH & TSCA Substance Volume Tracking',
      tag: 'SUBSTANCE REGISTRATION',
      desc: 'Exceeding statutory tonnage thresholds for registered chemical substances results in severe port detentions and multi-million euro fines.',
      footer: 'Monitored with Automated Substance Volume Tracking'
    },
    {
      icon: Boxes,
      title: 'Dangerous Goods Logistics & Shipping Papers',
      tag: 'HAZMAT TRANSPORT',
      desc: 'Incompatible chemical cargo co-loading and incorrect ADR/IMDG/DOT shipping declarations lead to impounded freight and safety violations.',
      footer: 'Validated via SAP Transportation Dangerous Goods'
    },
    {
      icon: Gauge,
      title: 'Bulk Tank Farm Level Balancing',
      tag: 'INVENTORY INTEGRITY',
      desc: 'Atmospheric evaporation, thermal volume expansion, and continuous pipeline transfers create constant book-to-physical inventory discrepancies.',
      footer: 'Reconciled with Hydrocarbon Management (HPM)'
    },
    {
      icon: Workflow,
      title: 'Circular Economy & Scope 3 Carbon Disclosures',
      tag: 'SUSTAINABILITY AUDITS',
      desc: 'Enterprise customers demand product carbon footprints (PCF) for polymers and specialty resins from raw naphtha through finished pellets.',
      footer: 'Calculated via SAP Sustainability Footprint'
    }
  ];

  const architectureLayers = [
    {
      title: '1. Plant Safety Automation & Field Instrumentation Layer',
      subtitle: 'Gas Detectors, Flare Telemetry, Safety Instrumented Systems (SIS)',
      desc: 'Direct integration with Triconex safety PLCs, pressure relief telemetry, and environmental fence-line sensors via industrial OPC UA protocols.',
      tags: ['Triconex SIS', 'OPC UA', 'Fence-Line Gas Analyzers', 'SCADA / DCS Connectors']
    },
    {
      title: '2. Environmental Health & Safety (SAP EHS)',
      subtitle: 'Incident Management, Risk Assessment & Substance Registry',
      desc: 'Manages automated chemical risk assessments, OSHA 300 logs, permit-to-work authorizations, and automated regulatory substance volume monitoring.',
      tags: ['SAP EHS Management', 'REACH / TSCA Registry', 'Permit to Work', 'Incident Cockpit']
    },
    {
      title: '3. SAP S/4HANA Chemicals Digital Core',
      subtitle: 'Process Orders, Batch Management & Dangerous Goods Processing',
      desc: 'Reconciles continuous reactor mass balances, tracks hazardous raw materials, and dynamically generates multi-lingual Safety Data Sheets (SDS).',
      tags: ['PP-PI Process Orders', 'Automated SDS Engine', 'Dangerous Goods (DG)', 'Batch Derivation']
    },
    {
      title: '4. Sustainable Supply Chain & Hazardous Transportation',
      subtitle: 'ADR/IMDG/DOT Compliance, Tanker Fleet & Carbon Tracking',
      desc: 'Automates dangerous goods transport declarations, enforces co-loading restrictions on road tankers, and calculates Product Carbon Footprints (PCF).',
      tags: ['SAP TM Dangerous Goods', 'Tanker Compartment Check', 'Sustainability Footprint', 'Port Manifests']
    }
  ];

  const modularSolutions = [
    {
      category: 'EHS',
      categoryLabel: 'Safety & EHS',
      icon: Flame,
      tag: 'CHEM-01',
      title: 'Automated Safety Data Sheet (SDS) Engine',
      description: 'Generates multi-jurisdiction, 16-section Safety Data Sheets and GHS shipping labels dynamically from formulation recipes in 35+ languages.',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80',
      highlights: ['Automated 16-Section SDS', '35+ Languages Supported', 'GHS Hazard Pictograms']
    },
    {
      category: 'REACH',
      categoryLabel: 'Substance Compliance',
      icon: ShieldCheck,
      tag: 'CHEM-02',
      title: 'REACH, TSCA & Substance Volume Tracking',
      description: 'Automated tracking of chemical substance volumes across procurement, production, and distribution against statutory import quotas.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      highlights: ['Statutory Quota Alerts', 'REACH SVHC Screening', 'Pre-Shipment Compliance Block']
    },
    {
      category: 'HAZMAT',
      categoryLabel: 'Hazmat Logistics',
      icon: Boxes,
      tag: 'CHEM-03',
      title: 'Dangerous Goods Transport & Segregation Suite',
      description: 'Enforces ADR, IMDG, and DOT dangerous goods rules, verifying vehicle placards, mixed loading segregations, and driver certifications.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      highlights: ['Dangerous Goods Shipping Papers', 'Tanker Co-Loading Validation', 'Automated Port Placards']
    },
    {
      category: 'TANK',
      categoryLabel: 'Hydrocarbon & Bulk',
      icon: Gauge,
      tag: 'CHEM-04',
      title: 'Hydrocarbon Tank Farm & Silo Management',
      description: 'Continuous volume corrections based on temperature and density API tables, eliminating inventory variance across tank farms.',
      image: 'https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?auto=format&fit=crop&w=800&q=80',
      highlights: ['API Density Corrections', 'Continuous Pipeline Balancing', 'Tank Strapping Tables']
    },
    {
      category: 'SAFETY',
      categoryLabel: 'Process Safety',
      icon: AlertTriangle,
      tag: 'CHEM-05',
      title: 'Permit to Work & Process Safety Management (PSM)',
      description: 'Digital lock-out/tag-out (LOTO), hot work permit issuance, and automated incident root-cause investigations compliant with OSHA PSM.',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80',
      highlights: ['Digital LOTO Workflows', 'OSHA 300 Recordkeeping', 'Risk Matrix Assessment']
    },
    {
      category: 'CARBON',
      categoryLabel: 'Product Carbon Footprint',
      icon: Sparkles,
      tag: 'CHEM-06',
      title: 'Product Carbon Footprint (PCF) & Circularity',
      description: 'Calculates cradle-to-gate Scope 1, 2, and 3 emissions per ton of polymer or chemical blend for corporate ESG reporting.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      highlights: ['Cradle-to-Gate Emission Log', 'Recycled Feedstock Accounting', 'CBAM Export Ready']
    }
  ];

  const categories = [
    { key: 'ALL', label: 'All Modules' },
    { key: 'EHS', label: 'SDS & GHS Labeling' },
    { key: 'REACH', label: 'Substance Compliance' },
    { key: 'HAZMAT', label: 'Hazmat Logistics' },
    { key: 'TANK', label: 'Tank Farm & Bulk' },
    { key: 'SAFETY', label: 'Process Safety' }
  ];

  const valueMetrics = [
    {
      value: '100%',
      label: 'GHS & SDS Compliance',
      desc: 'Instant multilingual Safety Data Sheet generation eliminates port delays and customs holds.'
    },
    {
      value: 'Zero',
      label: 'REACH Quota Breaches',
      desc: 'Automated substance volume tracking blocks non-compliant purchase orders before statutory thresholds are exceeded.'
    },
    {
      value: '-85%',
      label: 'Dangerous Goods Paperwork Time',
      desc: 'Automatic extraction of ADR/IMDG shipping manifests during delivery note creation.'
    },
    {
      value: '<0.1%',
      label: 'Bulk Tank Inventory Variance',
      desc: 'Automated API density and thermal calculations maintain true physical mass balance.'
    }
  ];

  const caseStudies = [
    {
      badge: 'GLOBAL PETROCHEMICAL CONGLOMERATE',
      title: 'Petrochemical Conglomerate Automates SDS Generation Across 42 Countries',
      client: 'Multi-National Polymer & Olefins Producer',
      impact: 'Automated generation of 85,000 annual Safety Data Sheets in 28 languages',
      stats: [
        { label: 'SDS Lead Time', val: '-90%' },
        { label: 'Port Customs Holds', val: '0' },
        { label: 'Compliance Rate', val: '100%' }
      ],
      desc: 'Replaced manual regulatory consulting contracts with SAP S/4HANA for EHS, automatically generating GHS labels and multilingual SDS whenever formulations are updated.'
    },
    {
      badge: 'SPECIALTY POLYMERS & RESINS',
      title: 'Advanced Materials Leader Eliminates REACH Quota Overruns',
      client: 'Specialty Chemical & Synthetic Resin Producer',
      impact: 'Enforced real-time substance volume monitoring across 12 European and Asian manufacturing sites',
      stats: [
        { label: 'Quota Violations', val: '0' },
        { label: 'Audit Preparation', val: '<4 Hrs' },
        { label: 'SVHC Tracking', val: '100%' }
      ],
      desc: 'Deployed automated substance volume tracking linked directly to S/4HANA purchase and process orders, automatically warning procurement when statutory import thresholds approach.'
    },
    {
      badge: 'HAZARDOUS SOLVENTS DISTRIBUTOR',
      title: 'Chemical Logistics Leader Eliminates Dangerous Goods Co-Loading Violations',
      client: 'Bulk Chemical Transport & Distribution Leader',
      impact: 'Screened 45,000 annual road tanker and railcar shipments with 0 mixed-loading safety citations',
      stats: [
        { label: 'Loading Violations', val: '0' },
        { label: 'Manifest Generation', val: 'Automated' },
        { label: 'Driver Dispatch', val: '3x Faster' }
      ],
      desc: 'Integrated SAP Transportation Management Dangerous Goods checks directly into warehouse loading bays, preventing tanker valve opens if incompatible chemicals are queued.'
    }
  ];

  const faqs = [
    {
      q: 'How does SAP S/4HANA generate multilingual Safety Data Sheets (SDS)?',
      a: 'The system cross-references active chemical ingredients against the SAP EHS Regulatory Content database. Hazard statements (H-phrases), precautionary statements (P-phrases), and transport classifications are compiled automatically in the recipient country\'s official language.'
    },
    {
      q: 'How does Substance Volume Tracking prevent regulatory fines under REACH or TSCA?',
      a: 'The system monitors real-time import, production, and export volumes for all registered CAS numbers. As volumes approach annual tier limits (e.g. 1-10 tonnes, 10-100 tonnes), automated alerts notify regulatory teams, and S/4HANA places hard order holds if limits are exceeded.'
    },
    {
      q: 'Can the solution prevent accidental co-loading of incompatible dangerous goods?',
      a: 'Yes. The dangerous goods segregation matrix checks chemical compatibility classes (e.g., oxidizers vs. flammable liquids). If an operator attempts to assign incompatible drums or tanker compartments to the same transport, the shipment is blocked.'
    },
    {
      q: 'How does Knooviq support digital Permit-to-Work and Lock-Out/Tag-Out (LOTO)?',
      a: 'Our solution provides mobile workflows for maintenance crews to request hot work or confined space entry permits. Supervisors verify isolation tags digitally on tablets, ensuring safety protocols comply strictly with OSHA PSM regulations.'
    },
    {
      q: 'What is the implementation duration for SAP Chemicals & Materials compliance?',
      a: 'Core hazardous material documentation and GHS labeling typically go live in 14 to 18 weeks, followed by advanced substance volume tracking and dangerous goods logistics.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        
        {/* Full-Bleed Background Image with Seamless Cinematic Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=2000&q=80" 
            alt="Chemicals & Advanced Materials Plant" 
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
                <Flame className="w-3 h-3 text-cyan-300" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>
              
              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Chemicals & <span className="text-[#38BDF8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">Materials</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Delivering Automated Regulatory Compliance, Global GHS Hazard Labeling & EHS Safety.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3 max-w-2xl"
            >
              <p className="text-sm sm:text-base lg:text-[17px] text-slate-100 font-normal leading-relaxed drop-shadow-sm">
                Scale complex chemical operations with <strong className="text-white font-semibold">SAP S/4HANA Clean Core</strong>, <strong className="text-cyan-300 font-semibold">automated 16-section SDS generation</strong>, REACH/TSCA volume tracking, and <strong className="text-white font-semibold">dangerous goods dispatch governance</strong>.
              </p>
              
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Automated SDS & GHS</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>REACH & TSCA Tracking</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Dangerous Goods Control</span>
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
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">EHS & Safety</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">Multilingual SDS & GHS</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Substance Volume</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">Global Regulatory Limits</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Logistics</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">Dangerous Goods Segregation</span>
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
                Operating Secure Chemical Plants in an Unforgiving Global Regulatory Landscape
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Chemical and materials manufacturers navigate stringent regulatory compliance: an outdated Safety Data Sheet or incorrect tanker placard can hold up an entire shipment. Knooviq automates substance tracking and EHS compliance directly within SAP S/4HANA core.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'Automated multi-jurisdiction SDS and GHS labeling',
                  'Tank farm inventory & pipeline continuous balance control',
                  'Strict REACH, TSCA & RoHS chemical substance verification',
                  'Dangerous goods transportation compliance & placards'
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
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80" 
                alt="Chemical Laboratory & EHS Management" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-6" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold mb-1">HAZMAT REGULATORY ENGINE</div>
                <div className="text-lg sm:text-xl font-bold text-white leading-snug">Automated Multi-Jurisdiction GHS & Substance Tracking</div>
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
              <span>REGULATORY & SAFETY HURDLES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Navigating High-Stakes Chemical Risks
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Customs detentions, process safety incidents, and substance volume overruns jeopardize license-to-operate.
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
              <span>CHEMICAL EHS ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Connected Chemical Core: From Sensor to Hazardous Logistics
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Closed-loop architecture synchronizing plant safety instrumented systems (SIS) with global compliance engines.
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
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Integrated Standards & Frameworks</div>
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
              Pre-Configured Chemical & Materials Modules
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Production-tested modules addressing hazardous substance tracking, dangerous goods transport, and process safety.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => {
              const isActive = activeSolutionCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveSolutionCategory(cat.key)}
                  className={`industry-category-tab px-4 py-2 rounded-lg transition-all ${
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
                    className="rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0070C0] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group h-full"
                  >
                    {/* 1. Top Image Portion */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 shrink-0">
                      <img 
                        src={sol.image} 
                        alt={sol.title}
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80';
                        }}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                      
                      <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-cyan-300 uppercase">
                        {sol.tag}
                      </div>
                    </div>

                    {/* 2. Bottom Content Body */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-[#0070C0] uppercase tracking-wider">
                            {sol.categoryLabel}
                          </span>
                          <div className="p-1.5 rounded-lg bg-sky-50 text-[#0070C0] border border-slate-200 group-hover:bg-[#0070C0] group-hover:text-white transition-all">
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-slate-950 line-clamp-2 leading-snug group-hover:text-[#0070C0] transition-colors" title={sol.title}>
                          {sol.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                          {sol.description}
                        </p>
                      </div>

                      <div className="space-y-2 pt-3 border-t border-slate-100 mt-4">
                        {sol.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
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
              Chemical Innovators Transforming with Knooviq
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Real results delivered for global petrochemical, specialty polymer, and solvent distribution leaders.
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
        badge="CHEMICAL COMPLIANCE & SDS FAQ"
        title="Frequently Asked Questions"
        subtitle="Key technical explanations on automated GHS Safety Data Sheets, substance volume tracking, and dangerous goods transport rules."
        faqs={faqs}
        onOpenContact={onOpenContact}
        contactTopic="Chemical Industry Compliance & ERP Architecture"
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
            <Flame className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR CHEMICALS & MATERIALS ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build a Smarter Chemicals & Materials Operation?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Connect your chemical formulations, automated SDS compliance, dangerous goods transport, and tank farm telemetry with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact?.('Chemicals & Materials Consultation')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to Our Chemical Experts</span>
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
