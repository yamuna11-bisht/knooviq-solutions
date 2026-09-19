import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Settings, 
  Activity, 
  Workflow, 
  Gauge, 
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
  FileText, 
  Zap, 
  Share2, 
  Sliders, 
  Globe2, 
  Compass, 
  Factory, 
  Flame, 
  Wrench, 
  Truck, 
  Check, 
  Award,
  RefreshCw
} from 'lucide-react';
import { IndustryFaqSection } from '../../components/common/IndustryFaqSection';

interface IndustrialManufacturingIndustryPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const IndustrialManufacturingIndustryPage: React.FC<IndustrialManufacturingIndustryPageProps> = ({ 
  onOpenContact 
}) => {
  // State for Section 2 Interactive Sector Tabs
  const [activeSectorTab, setActiveSectorTab] = useState<number>(0);

  // State for Section 4 Ecosystem Architecture
  const [activeLayer, setActiveLayer] = useState<number>(0);

  // State for Section 6 Solution Category Filter
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');

  // State for Section 9 FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Sector Data for Section 2
  const sectors = [
    {
      id: 'automotive',
      name: 'Automotive & Mobility',
      tag: 'OEM & TIER-1',
      icon: Truck,
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80',
      headline: 'Synchronized JIT/JIS Sequencing & Connected EV Assembly',
      desc: 'Orchestrate high-speed automotive supply lines with sub-second EDI sequencing, automated chassis tracking, and end-to-end battery cell serialization.',
      kpis: [
        { label: 'JIT Sequence Accuracy', val: '99.98%' },
        { label: 'OEM Line-Stop Incidents', val: '0' },
        { label: 'EDI Transaction Latency', val: '<350ms' }
      ],
      capabilities: [
        'Automated EDI 850/862 release schedule consumption',
        'Direct line-side JIS sequencing & broadcast control',
        'Complete high-voltage battery cell genealogical tracking',
        'Automated warranty adjudication & recall containment'
      ]
    },
    {
      id: 'discrete',
      name: 'Discrete Manufacturing',
      tag: 'SHOP-FLOOR MES',
      icon: Settings,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
      headline: 'Shop-Floor MES Integration & Live Machine Telematics',
      desc: 'Bridge the OT/IT divide by streaming live PLC and CNC machine telemetry directly into SAP S/4HANA for real-time OEE analytics and zero-defect execution.',
      kpis: [
        { label: 'Overall Equipment Effectiveness', val: '94.6%' },
        { label: 'Scrap Rate Reduction', val: '-32%' },
        { label: 'Live Machine Connectivity', val: '100%' }
      ],
      capabilities: [
        'Digital work instructions & automated torque gun telemetry',
        'Real-time scrap logging & automated rework routing',
        'Bi-directional PLM-to-ERP multi-level BOM synchronization',
        'Mobile operator cockpits with visual 3D assembly models'
      ]
    },
    {
      id: 'process',
      name: 'Process Manufacturing',
      tag: 'RECIPES & YIELD',
      icon: RefreshCw,
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80',
      headline: 'Dynamic Recipe Formulation & Continuous Yield Governance',
      desc: 'Master complex continuous flow processes, batch potency adjustments, temperature excursions, and strict electronic batch record (EBR) validation.',
      kpis: [
        { label: 'Formulation Yield Consistency', val: '99.7%' },
        { label: 'Batch Release Lead Time', val: '-48%' },
        { label: 'Audit Readiness', val: 'Continuous' }
      ],
      capabilities: [
        'Active ingredient potency compensation algorithms',
        'ISA-88 batch recipe control & automated phase execution',
        'Clean-In-Place (CIP) cycle verification & audit logs',
        'Automated Certificate of Analysis (CoA) generation'
      ]
    },
    {
      id: 'industrial-products',
      name: 'Industrial Products',
      tag: 'EQUIPMENT TELEMATICS',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
      headline: 'Capital Equipment Lifecycle & Predictive Asset Telematics',
      desc: 'Deliver engineered-to-order (ETO) machinery with embedded IoT sensors, enabling predictive maintenance, field service dispatch, and remote digital twin analytics.',
      kpis: [
        { label: 'ECO Cycle Time', val: '4.5 Hrs' },
        { label: 'Aftermarket Spare Parts Fill', val: '98.5%' },
        { label: 'First-Time Fix Rate', val: '92.4%' }
      ],
      capabilities: [
        'Engineered-To-Order (ETO) project milestone billing (SAP PS)',
        'Digital twin sensor health streaming & anomaly alerts',
        'Automated spare parts catalog & dynamic 3D exploded views',
        'Contractual SLA tracking & field service dispatch'
      ]
    },
    {
      id: 'chemicals',
      name: 'Chemicals & Materials',
      tag: 'GHS & COMPLIANCE',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80',
      headline: 'Hazardous Materials Governance & Advanced Polymers',
      desc: 'Safeguard plant integrity and regulatory compliance with automated Safety Data Sheets (SDS), REACH substance tracking, and hazardous logistics management.',
      kpis: [
        { label: 'Hazmat SDS Compliance', val: '100%' },
        { label: 'Substance Registry Accuracy', val: '100%' },
        { label: 'Safety Incident Rate', val: 'Zero' }
      ],
      capabilities: [
        'Automated multi-jurisdiction SDS and GHS labeling',
        'Tank farm inventory & pipeline continuous balance control',
        'Strict REACH, TSCA & RoHS chemical substance verification',
        'Dangerous goods transportation compliance & placards'
      ]
    }
  ];

  // Section 3: 6 Systemic Industry Bottlenecks
  const industryChallenges = [
    {
      icon: Cpu,
      title: 'Shop-Floor & ERP Data Silos',
      tag: 'OT/IT DISCONNECT',
      desc: 'Legacy PLCs, SCADA units, and MES tools operate as disconnected black boxes, leaving plant leadership blind to real-time machine bottlenecks and live throughput.',
      footer: 'Bridged via SAP DMC & Open Edge APIs'
    },
    {
      icon: AlertTriangle,
      title: 'Costly Unplanned Line Stoppages',
      tag: 'EQUIPMENT DOWNTIME',
      desc: 'Critical robotics and stamping lines suffer unexpected mechanical failures without real-time vibration and temperature telemetry, costing up to $22,000 per minute.',
      footer: 'Prevented with IoT Predictive Maintenance'
    },
    {
      icon: Workflow,
      title: 'Complex Multi-Level BOM Drift',
      tag: 'ENGINEERING CHANGES',
      desc: 'CAD/PLM design revisions take weeks to propagate to the shop floor, resulting in costly scrap, outdated work instructions, and incorrect parts assembly.',
      footer: 'Synchronized with Bi-Directional PLM Core'
    },
    {
      icon: ShieldCheck,
      title: 'Batch Quality Drift & Scrap Spikes',
      tag: 'QUALITY ASSURANCE',
      desc: 'Manual destructive QA sampling fails to catch drift during high-velocity production runs, causing massive scrap batches and potential customer recalls.',
      footer: 'Eliminated with Inline Machine Vision QA'
    },
    {
      icon: TrendingUp,
      title: 'Raw Material & Supply Volatility',
      tag: 'SUPPLY UNCERTAINTY',
      desc: 'Fluctuating alloy prices, semiconductor lead times, and chemical shortages disrupt standard master schedules, causing excessive buffer stock accumulation.',
      footer: 'Stabilized with SAP IBP Dynamic Buffers'
    },
    {
      icon: Flame,
      title: 'Stringent HSE & Hazmat Regulations',
      tag: 'REGULATORY AUDITS',
      desc: 'Fulfilling complex OSHA, REACH, and GHS compliance requirements across multi-plant hazardous chemical operations requires error-prone manual documentation.',
      footer: 'Automated via SAP EHS & Hazmat Engines'
    }
  ];

  // Section 4: Architecture Layers
  const architectureLayers = [
    {
      title: '1. Intelligent Edge & OT Automation Layer',
      subtitle: 'PLCs, CNCs, Robotics, Sensors & IoT Gateways',
      desc: 'Industrial protocol connectors (OPC UA, MQTT, Modbus) ingest high-frequency telemetry from plant machines directly into edge compute containers.',
      tags: ['OPC UA', 'MQTT Broker', 'Edge Gateway', 'Robotics Telemetry', 'Torque Sensors']
    },
    {
      title: '2. SAP Digital Manufacturing Cloud (DMC) & MES Core',
      subtitle: 'Shop-Floor Execution, Dispatching & Live OEE',
      desc: 'Standardized execution layer dispatching digital work instructions, managing line-side buffers, tracking scrap, and executing visual defect capture.',
      tags: ['SAP DMC', 'Dispatching Cockpit', 'Digital Work Instructions', 'OEE Live Engine']
    },
    {
      title: '3. SAP S/4HANA Enterprise Digital Core',
      subtitle: 'MRP Live, Production Planning & Detailed Scheduling',
      desc: 'The single source of truth reconciling plant demand with finite machine capacity, multi-level BOMs, vendor purchase orders, and financial cost accounting.',
      tags: ['MRP Live', 'PP/DS Finite Scheduling', 'CO-PC Product Costing', 'Quality Management (QM)']
    },
    {
      title: '4. Connected Supply Chain & Asset Intelligence Hub',
      subtitle: 'IBP Demand Sensing, EWM Warehousing & Predictive EAM',
      desc: 'Synchronizing finished goods distribution, automated warehouse robotics, JIT sequencing to customer plants, and predictive machinery maintenance.',
      tags: ['SAP IBP', 'SAP EWM Robotics', 'Asset Performance Management', 'Transportation (TM)']
    }
  ];

  // Section 6: Modular Solutions (9 items covering all 5 sectors)
  const modularSolutions = [
    {
      category: 'AUTOMOTIVE',
      categoryLabel: 'Automotive & Mobility',
      icon: Truck,
      tag: 'AUTO-01',
      title: 'Tier-1 Automotive JIT / JIS Sequencing',
      description: 'End-to-end electronic data interchange (EDI 850/862) processing with automated line-side broadcast sequencing for zero-stop OEM delivery.',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
      highlights: ['JIT / JIS Broadcast Sync', 'EDI 850/862 Automation', 'Line-Side Sequencing']
    },
    {
      category: 'AUTOMOTIVE',
      categoryLabel: 'Automotive & Mobility',
      icon: Zap,
      tag: 'AUTO-02',
      title: 'Connected EV Battery & Powertrain Assembly',
      description: 'Automated battery module cell tracking, high-voltage testing telemetry, and torque verification linked to unique vehicle identification numbers (VIN).',
      image: 'https://images.unsplash.com/photo-1558441719-aa3445544f50?auto=format&fit=crop&w=800&q=80',
      highlights: ['Cell-Level Serialization', 'Torque Gun Telemetry', 'High-Voltage Safety Logs']
    },
    {
      category: 'DISCRETE',
      categoryLabel: 'Discrete Manufacturing',
      icon: Settings,
      tag: 'DISC-01',
      title: 'Discrete Shop-Floor Execution & MES Live',
      description: 'Real-time routing, digital work instructions, automated tool calibration alerts, and instant scrap root-cause analysis on operator touchscreens.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      highlights: ['Operator Touch Cockpits', 'Live OEE Telemetry', 'Automated Scrap Logging']
    },
    {
      category: 'DISCRETE',
      categoryLabel: 'Discrete Manufacturing',
      icon: Workflow,
      tag: 'DISC-02',
      title: 'Complex Multi-Level BOM & PLM Sync',
      description: 'Bi-directional synchronization between Siemens Teamcenter / PTC Windchill and SAP S/4HANA to eliminate engineering change order bottlenecks.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      highlights: ['CAD/PLM Bi-Directional Sync', 'Automated ECO Workflows', 'Variant Configuration']
    },
    {
      category: 'PROCESS',
      categoryLabel: 'Process Manufacturing',
      icon: RefreshCw,
      tag: 'PROC-01',
      title: 'Process Batch Formulation & Potency Control',
      description: 'Automated recipe management with dynamic potency compensation algorithms for continuous yield stability across fluid and chemical batches.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      highlights: ['Active Potency Balancing', 'ISA-88 Batch Execution', 'Electronic Batch Records']
    },
    {
      category: 'PROCESS',
      categoryLabel: 'Process Manufacturing',
      icon: ShieldCheck,
      tag: 'PROC-02',
      title: 'Process Plant Clean-In-Place & Quality Audit',
      description: 'Automated monitoring of CIP wash cycles, temperature curves, and chemical titration logs to prevent cross-contamination in shared vessels.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      highlights: ['Automated CIP Tracking', 'Vessel Cross-Contamination Check', '21 CFR / ISA-88 Ready']
    },
    {
      category: 'PRODUCTS',
      categoryLabel: 'Industrial Products',
      icon: Factory,
      tag: 'PROD-01',
      title: 'Heavy Equipment Telematics & Predictive EAM',
      description: 'Embedding vibration, heat, and hydraulic pressure sensors into capital machinery to enable predictive maintenance and avoid field breakdowns.',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
      highlights: ['IoT Sensor Telemetry', 'Predictive Failure Alerts', 'Remote Digital Twins']
    },
    {
      category: 'PRODUCTS',
      categoryLabel: 'Industrial Products',
      icon: Wrench,
      tag: 'PROD-02',
      title: 'Machinery Aftermarket & Spares Lifecycle',
      description: 'Streamlining spare parts replenishment with interactive 3D exploded assembly diagrams, fast field-engineer dispatch, and warranty adjudication.',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
      highlights: ['3D Exploded Spare Views', 'Field Service Integration', 'Warranty Adjudication']
    },
    {
      category: 'CHEMICALS',
      categoryLabel: 'Chemicals & Materials',
      icon: Flame,
      tag: 'CHEM-01',
      title: 'Chemicals & Hazmat Compliance Suite',
      description: 'Automating multi-national Safety Data Sheets (SDS), GHS hazardous container labeling, REACH substance registration, and dangerous goods transport.',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80',
      highlights: ['Automated SDS Generation', 'GHS Hazard Labeling', 'REACH & Hazmat Manifests']
    }
  ];

  // Category Filter Options
  const categories = [
    { key: 'ALL', label: 'All Solutions' },
    { key: 'AUTOMOTIVE', label: 'Automotive & Mobility' },
    { key: 'DISCRETE', label: 'Discrete Manufacturing' },
    { key: 'PROCESS', label: 'Process Manufacturing' },
    { key: 'PRODUCTS', label: 'Industrial Products' },
    { key: 'CHEMICALS', label: 'Chemicals & Materials' }
  ];

  // Section 7: Key Differentiators / Business Value Metrics
  const valueMetrics = [
    {
      value: '-28%',
      label: 'Production Lead Time',
      desc: 'Sub-second MRP Live recalculations harmonize supply and shop-floor scheduling, cutting work-in-progress inventory.'
    },
    {
      value: '99.8%',
      label: 'JIT Sequence Accuracy',
      desc: 'Synchronized Tier-1 broadcast sequencing protects automotive manufacturers from catastrophic OEM line-stop fines.'
    },
    {
      value: '-35%',
      label: 'Unplanned Equipment Downtime',
      desc: 'Predictive sensor telemetry and machine learning models identify mechanical wear prior to catastrophic machine failure.'
    },
    {
      value: '100%',
      label: 'Traceability & Hazmat Audit Compliance',
      desc: 'Instant forward and backward geneological trace across all sub-components, raw materials, and hazardous formulations.'
    }
  ];

  // Section 8: Real-World Case Studies
  const caseStudies = [
    {
      badge: 'AUTOMOTIVE TIER-1 OEM',
      title: 'Global Tier-1 Drivetrain Leader Eliminates OEM Line Stoppages',
      client: 'Multi-Plant Tier-1 Automotive Manufacturer',
      impact: '120,000 components sequenced daily across 6 assembly facilities with 0 defect callbacks',
      stats: [
        { label: 'JIT Accuracy', val: '99.99%' },
        { label: 'Line-Stops', val: '0' },
        { label: 'EDI Speed', val: '180ms' }
      ],
      desc: 'Integrated automated EDI 862 schedule consumption with line-side sequence carts and automated guided vehicles (AGVs), synchronizing directly with customer assembly lines.'
    },
    {
      badge: 'HEAVY INDUSTRIAL MACHINERY',
      title: 'Engineered-To-Order Machinery Leader Cuts ECO Times by 78%',
      client: 'Global Industrial Equipment Manufacturer',
      impact: 'Reduced Engineering Change Order propagation from 18 business days to under 4 hours',
      stats: [
        { label: 'ECO Cycle', val: '-78%' },
        { label: 'First-Pass Yield', val: '98.2%' },
        { label: 'Parts Availability', val: '99.1%' }
      ],
      desc: 'Implemented bi-directional PLM-S/4HANA engineering change synchronization, providing plant operators with animated 3D work instructions and auto-updated BOM revisions.'
    },
    {
      badge: 'SPECIALTY CHEMICALS',
      title: 'Specialty Chemical Conglomerate Achieves 99.9% Yield Consistency',
      client: 'Multi-National Process & Advanced Materials Producer',
      impact: 'Unified 14 batch processing chemical plants under automated formula potency balancing',
      stats: [
        { label: 'Yield Variance', val: '<0.1%' },
        { label: 'Batch Release', val: '2.5x Faster' },
        { label: 'Audit Time', val: '-65%' }
      ],
      desc: 'Deployed automated ISA-88 recipe execution and automated electronic batch records, eliminating manual paper logs and ensuring 100% continuous audit readiness.'
    }
  ];

  // Section 9: Enterprise FAQs
  const faqs = [
    {
      q: 'How does SAP Digital Manufacturing Cloud (DMC) integrate with legacy shop-floor SCADA and PLC systems?',
      a: 'SAP DMC connects to shop-floor automation via open industrial protocols including OPC UA, MQTT, and native PLC connectors. By deploying localized Edge gateways, machine signals are normalized and routed to cloud MES microservices in sub-seconds without requiring costly PLC rewrites.'
    },
    {
      q: 'Can the platform manage both Discrete Assembly and Process Batch operations in the same company code?',
      a: 'Yes. SAP S/4HANA natively supports hybrid manufacturing environments. Discrete assembly lines utilize production orders, routings, and component BOMs, while chemical and formulation facilities execute process orders, master recipes, and electronic batch records (EBR) seamlessly within the same unified ledger.'
    },
    {
      q: 'How does the JIT/JIS automotive solution handle sudden OEM broadcast sequence changes?',
      a: 'The system features an automated EDI buffer engine that ingests ANSI X12 862 and EDIFACT DELJIT messages in real time. If an OEM alters chassis sequencing, the broadcast engine dynamically recalculates pick lists and re-routes line-side sequence carts before parts reach the loading dock.'
    },
    {
      q: 'How are Engineering Change Orders (ECO) communicated to active assembly stations?',
      a: 'Through bi-directional PLM integration, approved engineering revisions instantly flag in-flight production orders. Operators receive automated interactive notifications on their touchscreen work instructions, ensuring no legacy revisions are assembled.'
    },
    {
      q: 'What capabilities are provided for global hazardous materials and GHS safety labeling?',
      a: 'Our solution incorporates automated regulatory engines that cross-reference formulation recipes against international substance databases (REACH, TSCA, GHS). Multilingual Safety Data Sheets (SDS) and compliant container hazard labels are dynamically generated upon production completion.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        
        {/* Full-Bleed Enterprise Industrial Background Image with Cinematic Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80" 
            alt="Intelligent Industrial Robotics & Smart Factory Floor" 
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
                <Cpu className="w-3 h-3 text-cyan-300" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>
              
              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Intelligent Industrial &{' '}
                <span className="text-[#38BDF8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                  Manufacturing
                </span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Powering Zero-Defect Sequencing, Connected Shop-Floor MES & Multi-Plant Clean Core Execution.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3 max-w-2xl"
            >
              <p className="text-sm sm:text-base lg:text-[17px] text-slate-100 font-normal leading-relaxed drop-shadow-sm">
                Powering zero-defect automotive sequencing, discrete shop-floor execution, process formulation control, and hazardous materials compliance on <strong className="text-white font-semibold">SAP S/4HANA digital core</strong> and <strong className="text-cyan-300 font-semibold">SAP Digital Manufacturing Cloud (DMC)</strong>.
              </p>
              
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Smart Shop-Floor MES</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Connected DMC Telemetry</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Zero-Defect Quality Control</span>
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
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Execution</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">SAP DMC & IoT Edge</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Sequencing</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">Automated JIT / JIS Sync</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Compliance</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">ISO 9001 & Hazmat HSE</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE INDUSTRY PERSPECTIVE
          ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Factory className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>FIVE CRITICAL DOMAINS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Engineering the Autonomous, Zero-Defect Manufacturing Core
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
              From high-velocity Tier-1 automotive sequencing to regulated chemical plants, discover how Knooviq harmonizes shop-floor execution with enterprise planning.
            </p>
          </div>

          {/* Sector Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {sectors.map((sec, idx) => {
              const Icon = sec.icon;
              const isActive = activeSectorTab === idx;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveSectorTab(idx)}
                  className={`industry-category-tab flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                    isActive
                      ? 'bg-[#0070C0] text-white shadow-md shadow-[#0070C0]/25'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{sec.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Sector Detail Card */}
          {sectors[activeSectorTab] && (
            <motion.div 
              key={sectors[activeSectorTab].id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-white border-2 border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Left Image (5 cols) */}
              <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full overflow-hidden bg-slate-900">
                <img 
                  src={sectors[activeSectorTab].image} 
                  alt={sectors[activeSectorTab].name}
                  className="w-full h-full object-cover object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-slate-900/90 text-cyan-300 font-mono font-bold text-xs border border-white/20">
                  {sectors[activeSectorTab].tag}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold leading-tight">{sectors[activeSectorTab].name}</h3>
                </div>
              </div>

              {/* Right Content (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-5">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    {sectors[activeSectorTab].headline}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {sectors[activeSectorTab].desc}
                  </p>

                  <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-5">
                    {sectors[activeSectorTab].kpis.map((kpi, kIdx) => (
                      <div key={kIdx} className="text-center">
                        <div className="text-base sm:text-lg font-mono font-black text-[#0070C0]">{kpi.val}</div>
                        <div className="text-[10px] sm:text-xs text-slate-500 font-medium">{kpi.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Core Capabilities</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {sectors[activeSectorTab].capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0070C0] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onOpenContact?.(`Consultation for ${sectors[activeSectorTab].name}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0070C0] hover:text-[#005a9e] transition-colors"
                  >
                    <span>Request Technical Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono text-slate-400">SAP S/4HANA Certified</span>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: STRATEGIC INDUSTRY CHALLENGES
          ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#F8FAFC] border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
              <Compass className="w-3.5 h-3.5 text-rose-600" />
              <span>SYSTEMIC BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Overcoming High-Stakes Industrial Bottlenecks
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
              Unplanned downtime, disconnected PLCs, and volatile supply lead times destroy operating margins. Knooviq addresses the 6 core operational hurdles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {industryChallenges.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  className="h-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-slate-300 shadow-xs hover:border-[#0070C0] hover:shadow-lg transition-all group"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-sky-50 text-[#0070C0] border border-slate-200 group-hover:bg-[#0070C0] group-hover:text-white transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-[#0070C0] font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070C0]" />
                    <span>{item.footer}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: PLATFORM ECOSYSTEM & ARCHITECTURE FRAMEWORK
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#070B14] text-white border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase">
              <Workflow className="w-3.5 h-3.5 text-cyan-300" />
              <span>INTEGRATED SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              The Connected Factory: From Sensor to S/4HANA Core
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto">
              A bi-directional, four-tier architecture synchronizing physical shop-floor robotics with cloud enterprise intelligence.
            </p>
          </div>

          {/* 4 Architecture Layers Interactive Stepper */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Layer Selection Column */}
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
                    <h3 className="text-sm font-bold">{layer.title}</h3>
                    <ChevronRight className={`w-4 h-4 transition-transform ${activeLayer === idx ? 'rotate-90 text-cyan-300' : 'text-slate-500'}`} />
                  </div>
                  <div className="text-xs text-slate-400 mt-1">{layer.subtitle}</div>
                </button>
              ))}
            </div>

            {/* Active Layer Inspector (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-700 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-mono font-bold uppercase mb-2">
                <Zap className="w-4 h-4 text-cyan-300" />
                <span>Layer Blueprint {activeLayer + 1} of 4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {architectureLayers[activeLayer].title}
              </h3>
              <p className="text-sm text-cyan-200/90 font-medium mb-4">
                {architectureLayers[activeLayer].subtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {architectureLayers[activeLayer].desc}
              </p>

              <div className="space-y-2 pt-4 border-t border-slate-800">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Integrated Protocols & Standards</div>
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

      {/* =========================================================================
          SECTION 6: MODULAR INDUSTRY SOLUTIONS
          (50% Image + 50% Content Equal Height, Zero Inquire Buttons)
          ========================================================================= */}
      <section id="modular-solutions" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Boxes className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>MODULAR SOLUTIONS MATRIX</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Pre-Configured Enterprise Manufacturing Modules
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
              Production-tested capabilities designed for rapid deployment across Automotive, Discrete, Process, Industrial Products, and Chemicals.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => {
              const isActive = activeSolutionCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveSolutionCategory(cat.key)}
                  className={`industry-category-tab px-4 py-2 rounded-full transition-all ${
                    isActive
                      ? 'bg-[#0070C0] text-white shadow-md shadow-[#0070C0]/25 scale-105'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-300 hover:border-slate-400'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* 3x3 Symmetrical Enterprise Grid with Exact 50% Image + 50% Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
            {modularSolutions
              .filter((sol) => activeSolutionCategory === 'ALL' || sol.category === activeSolutionCategory)
              .map((sol) => {
                const IconComponent = sol.icon;
                return (
                  <div
                    key={sol.title}
                    className="h-[400px] rounded-xl bg-white border-2 border-slate-300 shadow-xs hover:border-[#0070C0] hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group"
                  >
                    {/* 1. Top Image Portion - Exactly 50% Height */}
                    <div className="relative h-1/2 w-full overflow-hidden bg-slate-100 shrink-0">
                      <img 
                        src={sol.image} 
                        alt={sol.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                      
                      {/* Floating Tag Pill */}
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-slate-950/80 border border-white/20 text-[9px] font-mono font-bold text-sky-300 uppercase tracking-wider backdrop-blur-md shadow-xs">
                        {sol.tag}
                      </div>
                    </div>

                    {/* 2. Bottom Content Body - Exactly 50% Height */}
                    <div className="h-1/2 p-3.5 sm:p-4 flex flex-col justify-between space-y-2.5 overflow-hidden">
                      
                      <div className="space-y-1.5">
                        {/* Category & Icon Row */}
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-[#0070C0] uppercase tracking-wider">
                            {sol.categoryLabel}
                          </span>
                          <div className="p-1.5 rounded-lg bg-sky-50 text-[#0070C0] border border-slate-200 group-hover:bg-[#0070C0] group-hover:text-white transition-all">
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0070C0] transition-colors leading-snug">
                          {sol.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                          {sol.description}
                        </p>
                      </div>

                      {/* Highlight Capabilities Chips */}
                      <div className="space-y-2.5 pt-1">
                        <div className="flex flex-wrap gap-1.5">
                          {sol.highlights.map((hl, hIdx) => (
                            <span
                              key={hIdx}
                              className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-medium text-slate-700 border border-slate-200/80"
                            >
                              {hl}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: KEY DIFFERENTIATORS & BUSINESS VALUE IMPACT
          ========================================================================= */}
      <section className="py-14 sm:py-16 bg-[#070E1C] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase">
              <BarChart3 className="w-3.5 h-3.5 text-cyan-300" />
              <span>QUANTIFIABLE IMPACT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Delivering Measurable Industrial ROI
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto">
              Real-world operational enhancements measured across plant uptime, sequence precision, and compliance audits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valueMetrics.map((met, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all">
                <div className="text-3xl sm:text-4xl font-mono font-black text-cyan-300 mb-2">
                  {met.value}
                </div>
                <h3 className="text-sm font-bold text-white mb-2">
                  {met.label}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {met.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: REAL-WORLD CASE STUDIES & SUCCESS METRICS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Award className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PROVEN CLIENT SUCCESS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Industrial Transformations in Action
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
              See how market leaders modernized shop-floor execution and achieved zero-defect operations with Knooviq.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-300 shadow-md hover:border-[#0070C0] transition-all flex flex-col justify-between">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-sky-50 text-[10px] font-mono font-bold text-[#0070C0] border border-sky-200 mb-3">
                    {cs.badge}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {cs.title}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium mb-3">
                    {cs.client}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {cs.desc}
                  </p>

                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 mb-4">
                    {cs.stats.map((st, sIdx) => (
                      <div key={sIdx} className="text-center">
                        <div className="text-sm font-mono font-black text-[#0070C0]">{st.val}</div>
                        <div className="text-[9px] text-slate-500">{st.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs font-semibold text-slate-700">
                  <span className="text-[#0070C0]">Outcome:</span> {cs.impact}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: INDUSTRIAL MANUFACTURING FAQ ACCORDION
      {/* =========================================================================
          SECTION 9: FREQUENTLY ASKED QUESTIONS (Executive Interactive Accordion)
          ========================================================================= */}
      <IndustryFaqSection
        badge="INDUSTRIAL ENTERPRISE ARCHITECTURE FAQ"
        title="Frequently Asked Questions"
        subtitle="Practical answers regarding OT/IT convergence, shop-floor MES connectors, Brownfield/Greenfield deployments, and multi-plant rollouts."
        faqs={faqs}
        onOpenContact={onOpenContact}
        contactTopic="Industrial Manufacturing Architecture Consultation"
      />

      {/* =========================================================================
          SECTION 11: FINAL CALL TO ACTION
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-slate-900 via-[#0A1931] to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>ACCELERATE YOUR INDUSTRY 4.0 JOURNEY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Ready to Build a Resilient, Autonomous Factory?
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Collaborate with our seasoned SAP manufacturing architects to design, prototype, and implement a high-velocity shop-floor execution ecosystem.
          </p>

          <div className="pt-3 flex flex-wrap justify-center gap-3.5">
            <button
              onClick={() => onOpenContact?.('Industrial & Manufacturing Transformation Inquiry')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0070C0] to-[#005a9e] text-white font-bold text-xs sm:text-sm hover:shadow-xl hover:shadow-[#0070C0]/40 transition-all flex items-center gap-2 group"
            >
              <span>Schedule Architecture Session</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/industries"
              className="px-6 py-3 rounded-xl bg-white/10 text-white font-bold text-xs sm:text-sm hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all"
            >
              View All Industry Practices
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
