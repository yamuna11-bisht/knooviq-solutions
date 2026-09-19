import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Layers, 
  Activity, 
  ShieldCheck, 
  Gauge, 
  TrendingUp, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  ChevronDown, 
  Sparkles, 
  Building2, 
  Clock, 
  Workflow, 
  Compass, 
  Cpu, 
  Boxes, 
  HelpCircle,
  Factory,
  Award,
  Radio,
  Globe2,
  RefreshCw,
  Droplet,
  FileText,
  AlertTriangle
} from 'lucide-react';

interface IndustryPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const RenewableEnergyIndustryPage: React.FC<IndustryPageProps> = ({ onOpenContact }) => {
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(null);
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');
  const [activeTransformStage, setActiveTransformStage] = useState<number>(0);
  const [activeArchTab, setActiveArchTab] = useState<string>('core');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Section 4: 8-Segment Interlocking Chevron Circular Wheel (KNOOVIQ Renewable Platform Ecosystem)
  const wheelSegments = [
    {
      id: 'solar-apm',
      title: 'Solar Farm Inverter APM',
      desc: 'String-level string inverter & solar irradiance performance tracking',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(2, 132, 199, 0.3)',
      icon: Activity
    },
    {
      id: 'wind-twin',
      title: 'Wind Turbine Digital Twin',
      desc: 'Gearbox vibration & blade pitch aerodynamic health models',
      side: 'right',
      color: '#0EA5E9',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(14, 165, 233, 0.3)',
      icon: RefreshCw
    },
    {
      id: 'bess-storage',
      title: 'BESS Battery Degradation',
      desc: 'Cell state-of-health tracking & thermal runaway risk mitigation',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.3)',
      icon: Zap
    },
    {
      id: 'h2-electrolyzers',
      title: 'Green Hydrogen Electrolyzers',
      desc: 'Stack efficiency, water deionization & green H2 mass balancing',
      side: 'right',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.3)',
      icon: Droplet
    },
    {
      id: 'ppa-settlements',
      title: 'Automated PPA Settlements',
      desc: 'Virtual & physical PPA contracts with nodal settlement reconciliation',
      side: 'left',
      color: '#F97316',
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: FileText
    },
    {
      id: 'rec-ledger',
      title: 'REC & Carbon Credit Accounting',
      desc: 'Traceable renewable energy certificates tied to generation timestamps',
      side: 'left',
      color: '#EF4444',
      textColor: 'text-rose-400',
      bgGlow: 'rgba(239, 68, 68, 0.3)',
      icon: ShieldCheck
    },
    {
      id: 'land-leases',
      title: 'Landowner Lease & Royalties',
      desc: 'Automated turbine pad royalty disbursements & landowner contracts',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.3)',
      icon: Compass
    },
    {
      id: 'weather-edge',
      title: 'Meteorological Telemetry & AI',
      desc: 'Satellite solar irradiance & anemometer wind speed forecasting',
      side: 'left',
      color: '#6366F1',
      textColor: 'text-indigo-400',
      bgGlow: 'rgba(99, 102, 241, 0.3)',
      icon: Radio
    }
  ];

  const getChevronPath = (index: number) => {
    const cx = 250;
    const cy = 250;
    const rOut = 218;
    const rIn = 118;
    const rMid = 168;
    const gap = 1.6;
    const tip = 7.5;
    
    const theta1 = -90 + index * 45 + gap;
    const theta2 = -90 + (index + 1) * 45 - gap;
    
    const rad = (deg: number) => (deg * Math.PI) / 180;
    
    const p1 = { x: cx + rOut * Math.cos(rad(theta1)), y: cy + rOut * Math.sin(rad(theta1)) };
    const p2 = { x: cx + rOut * Math.cos(rad(theta2)), y: cy + rOut * Math.sin(rad(theta2)) };
    const p3 = { x: cx + rMid * Math.cos(rad(theta2 + tip)), y: cy + rMid * Math.sin(rad(theta2 + tip)) };
    const p4 = { x: cx + rIn * Math.cos(rad(theta2)), y: cy + rIn * Math.sin(rad(theta2)) };
    const p5 = { x: cx + rIn * Math.cos(rad(theta1)), y: cy + rIn * Math.sin(rad(theta1)) };
    const p6 = { x: cx + rMid * Math.cos(rad(theta1 + tip)), y: cy + rMid * Math.sin(rad(theta1 + tip)) };
    
    return `M ${p1.x.toFixed(2)} ${p1.y.toFixed(2)} A ${rOut} ${rOut} 0 0 1 ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} L ${p3.x.toFixed(2)} ${p3.y.toFixed(2)} L ${p4.x.toFixed(2)} ${p4.y.toFixed(2)} A ${rIn} ${rIn} 0 0 0 ${p5.x.toFixed(2)} ${p5.y.toFixed(2)} L ${p6.x.toFixed(2)} ${p6.y.toFixed(2)} Z`;
  };

  const getIconCoords = (index: number) => {
    const cx = 250;
    const cy = 250;
    const rMid = 168;
    const gap = 1.6;
    const tip = 7.5;
    const theta1 = -90 + index * 45 + gap;
    const theta2 = -90 + (index + 1) * 45 - gap;
    const midAngle = (theta1 + theta2) / 2 + tip / 2;
    const rad = (deg: number) => (deg * Math.PI) / 180;
    return {
      x: cx + rMid * Math.cos(rad(midAngle)),
      y: cy + rMid * Math.sin(rad(midAngle))
    };
  };

  // Section 2: Executive Value Chain Steps (Zero stats, clean enterprise narrative)
  const journeySteps = [
    {
      id: 'solar',
      label: 'Solar Plant SCADA & String Telemetry',
      sublabel: 'Photovoltaic Assets',
      desc: 'Real-time string combiner monitoring, soiling ratio calculations, and automated tracker pitch adjustments maximizing solar yield.',
      tech: 'IoT Edge & SCADA Integration',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
      icon: Activity
    },
    {
      id: 'wind',
      label: 'Wind Turbine Aerodynamic Twins',
      sublabel: 'Onshore & Offshore Wind',
      desc: 'Predictive main bearing temperature analysis, blade pitch vibration monitoring, and automated offshore technician vessel dispatch.',
      tech: 'SAP APM & Digital Twin',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
      icon: RefreshCw
    },
    {
      id: 'bess',
      label: 'BESS Battery Degradation Governance',
      sublabel: 'Energy Storage',
      desc: 'Cell-level state-of-health tracking, depth-of-discharge cycle logging, and warranty compliance monitoring for grid-scale battery systems.',
      tech: 'SAP Clean Core Storage Ledger',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      icon: Zap
    },
    {
      id: 'h2',
      label: 'Green Hydrogen Electrolyzers',
      sublabel: 'Power-to-Gas',
      desc: 'Dynamic PEM and alkaline stack operation matching intermittent renewable power with green hydrogen production schedules.',
      tech: 'SAP Production & Mass Balancing',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      icon: Droplet
    },
    {
      id: 'ppa',
      label: 'Automated PPA Settlement Ledgers',
      sublabel: 'Energy Commercialization',
      desc: 'Nodal price reconciliation, day-ahead dispatch balancing, and multi-buyer virtual PPA settlement calculation with zero billing discrepancies.',
      tech: 'SAP S/4HANA Financial Settlement',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      icon: FileText
    },
    {
      id: 'rec',
      label: 'REC & Carbon Credit Accounting',
      sublabel: 'Sustainability Ledger',
      desc: 'Tamper-proof generation timestamp certification and seamless issuance into international renewable energy attribute tracking systems.',
      tech: 'SAP Sustainability Control Tower',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
      icon: ShieldCheck
    }
  ];

  // Section 3: Operational Challenges
  const challenges = [
    {
      icon: AlertTriangle,
      title: 'Inverter Degradation & Clipping Losses',
      tag: 'SOLAR APM BOTTLENECK',
      desc: 'Hidden string disconnects and inverter overheating go undetected for weeks across massive multi-gigawatt utility solar arrays.',
      footer: 'Resolved via Automated String-Level APM'
    },
    {
      icon: RefreshCw,
      title: 'Catastrophic Wind Gearbox Failures',
      tag: 'WIND RELIABILITY',
      desc: 'Unpredicted main bearing and pitch system failures demand emergency crane mobilizations and costly offshore repair downtime.',
      footer: 'Predicted via High-Frequency Vibration AI'
    },
    {
      icon: Zap,
      title: 'BESS Degradation & Warranty Disputes',
      tag: 'BATTERY STORAGE',
      desc: 'Unrecorded depth-of-discharge cycles and irregular thermal spikes void manufacturer battery warranties and accelerate capacity loss.',
      footer: 'Tracked via Continuous Cell-Level Telemetry'
    },
    {
      icon: FileText,
      title: 'Complex Multi-Offtaker PPA Calculations',
      tag: 'COMMERCIAL SETTLEMENTS',
      desc: 'Manual spreadsheets calculating complex merchant floor prices and solar curve cannibalization cause month-long settlement delays with buyers.',
      footer: 'Automated via S/4HANA PPA Billing Engine'
    },
    {
      icon: Compass,
      title: 'Landowner Royalty Disputes',
      tag: 'LAND LEASE GOVERNANCE',
      desc: 'Discrepancies in turbine pad generation meters lead to contentious legal audits and delayed royalty disbursements to private landowners.',
      footer: 'Unified via SAP Flexible Real Estate (RE-FX)'
    },
    {
      icon: ShieldCheck,
      title: 'Audit Vulnerabilities in Green H2 Guarantees',
      tag: 'CLEAN FUEL CERTIFICATION',
      desc: 'Failing to prove that green hydrogen electrolyzers were powered strictly by renewable electrons during production runs risks compliance disqualification.',
      footer: 'Certified via Timestamped REC Provenance'
    }
  ];

  // Section 6: Modular Solutions Matrix
  const modularSolutions = [
    {
      category: 'SOLAR',
      categoryLabel: 'Utility Solar APM',
      icon: Activity,
      tag: 'REN-01',
      title: 'Solar String & Central Inverter Predictive APM',
      description: 'Continuous string combiner box telemetry, automated soiling loss estimation, and automated tracker recalibration for maximum solar output.',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
      highlights: ['Automated String Fault Isolation', 'Solar Irradiance Degradation Curves', 'Tracker Calibration Work Orders']
    },
    {
      category: 'WIND',
      categoryLabel: 'Wind Turbine Fleet Management',
      icon: RefreshCw,
      tag: 'REN-02',
      title: 'Wind Turbine Drivetrain Digital Twin & APM',
      description: 'High-frequency vibration monitoring, main bearing oil particle detection, and offshore technician crew vessel dispatching.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
      highlights: ['Gearbox Vibration Telemetry', 'Blade Pitch Fatigue Analytics', 'Offshore Vessel Scheduling']
    },
    {
      category: 'STORAGE',
      categoryLabel: 'BESS Battery Storage',
      icon: Zap,
      tag: 'REN-03',
      title: 'BESS State-of-Health & Warranty Protection',
      description: 'Module-level thermal runaway monitoring, cycle depth tracking, and automated capacity degradation documentation for EPC warranties.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      highlights: ['Cell-Level State-of-Health', 'Thermal Runaway Early Warning', 'Warranty Dispute Audit Trail']
    },
    {
      category: 'HYDROGEN',
      categoryLabel: 'Power-to-Gas & H2',
      icon: Droplet,
      tag: 'REN-04',
      title: 'Green Hydrogen Electrolyzer Mass Balancing',
      description: 'Dynamic power-to-gas synchronization, water deionization tracking, and automated certification of green hydrogen production batches.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      highlights: ['Intermittent Electrolyzer Dispatch', 'Stack Degradation Profiling', 'EU Green Hydrogen Compliance']
    },
    {
      category: 'COMMERCIAL',
      categoryLabel: 'PPA & Energy Trading',
      icon: FileText,
      tag: 'REN-05',
      title: 'Automated PPA & Nodal Market Settlements',
      description: 'Automated settlement billing for physical, synthetic, and sleeved power purchase agreements with real-time ISO/RTO nodal price feeds.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      highlights: ['Virtual & Physical PPA Billing', 'Nodal LMP Price Sync', 'Negative Pricing Auto-Curtailment']
    },
    {
      category: 'ESG',
      categoryLabel: 'Carbon Ledgers & RECs',
      icon: ShieldCheck,
      tag: 'REN-06',
      title: 'REC Provenance & Sustainability Control Tower',
      description: 'Granular hourly renewable energy certificate generation, automated Scope 2 reporting, and retirement governance on international registries.',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      highlights: ['24/7 Carbon-Free Energy Matching', 'Automated Registry Submission', 'Auditor-Ready Carbon Ledgers']
    }
  ];

  const categories = [
    { key: 'ALL', label: 'All Modules' },
    { key: 'SOLAR', label: 'Solar APM' },
    { key: 'WIND', label: 'Wind Twins' },
    { key: 'STORAGE', label: 'BESS Storage' },
    { key: 'HYDROGEN', label: 'Green H2' },
    { key: 'COMMERCIAL', label: 'PPA Settlements' }
  ];

  // Section 8: Interactive Multi-Stage Transformation Journey (Delta Inspector)
  const transformationStages = [
    {
      id: 'foundation',
      badge: 'PHASE 01',
      title: 'Sensor Ingestion & SCADA Clean Core',
      subtitle: 'Plant & Weather Telemetry Integration',
      description: 'Deploy SAP BTP industrial IoT connectors to stream wind anemometer, solar pyranometer, and inverter telemetry directly into S/4HANA.',
      tag: 'SCADA & SENSOR TELEMETRY',
      before: 'Siloed OEM SCADA dashboards & manual log downloads',
      after: 'Unified sub-second streaming into clean core data models',
      capabilities: ['Native OPC UA & Modbus Connectors', 'Solar Irradiance Sync', 'Wind Mast Anemometer Telemetry'],
      textColor: 'text-sky-400',
      glowColor: 'bg-sky-400',
      borderBase: 'border-sky-500/30',
      activeBorder: 'border-sky-400 bg-sky-950/40 shadow-[0_0_20px_rgba(56,189,248,0.25)]',
      icon: Activity
    },
    {
      id: 'modernization',
      badge: 'PHASE 02',
      title: 'SAP S/4HANA Enterprise Asset Core',
      subtitle: 'Centralized Asset Registry & RE-FX Leases',
      description: 'Migrate solar arrays, wind turbine pads, and substation assets into standard S/4HANA EAM integrated with automated landowner lease ledgers.',
      tag: 'ASSET HIERARCHY & LEASES',
      before: 'Disconnected spreadsheets for turbine maintenance & land leases',
      after: 'Unified asset hierarchy with automated landowner royalties',
      capabilities: ['SAP RE-FX Landowner Royalties', 'Standardized Asset Hierarchies', 'Universal Financial Ledger'],
      textColor: 'text-cyan-400',
      glowColor: 'bg-cyan-400',
      borderBase: 'border-cyan-500/30',
      activeBorder: 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_20px_rgba(34,211,238,0.25)]',
      icon: Compass
    },
    {
      id: 'intelligence',
      badge: 'PHASE 03',
      title: 'Predictive APM & BESS Governance',
      subtitle: 'Failure Forecasting & Warranty Protection',
      description: 'Activate machine learning vibration models for wind turbine gearboxes and cell-level degradation curves for battery energy storage systems.',
      tag: 'PREDICTIVE APM & BESS HEALTH',
      before: 'Unscheduled catastrophic crane mobilizations & voided battery warranties',
      after: 'Weeks of advance failure warning & automated warranty claim logs',
      capabilities: ['Gearbox Vibration ML Models', 'BESS State-of-Health Tracking', 'Automated Crane Mobilization Orders'],
      textColor: 'text-emerald-400',
      glowColor: 'bg-emerald-400',
      borderBase: 'border-emerald-500/30',
      activeBorder: 'border-emerald-400 bg-emerald-950/40 shadow-[0_0_20px_rgba(52,211,153,0.25)]',
      icon: Zap
    },
    {
      id: 'autonomous',
      badge: 'PHASE 04',
      title: 'Autonomous Clean Energy Orchestration',
      subtitle: 'Automated PPA Billing & Green H2 Optimization',
      description: 'Deploy automated algorithmic PPA settlements with wholesale markets, negative pricing curtailment, and certified green hydrogen production runs.',
      tag: 'AUTONOMOUS TRADING & H2',
      before: 'Manual multi-month PPA reconciliations & uncertified green fuels',
      after: 'Instant automated settlements & verifiable green hydrogen batches',
      capabilities: ['Algorithmic PPA Invoicing', 'Automated Negative Price Curtailment', 'Timestamped Carbon Attribute Tracking'],
      textColor: 'text-purple-400',
      glowColor: 'bg-purple-400',
      borderBase: 'border-purple-500/30',
      activeBorder: 'border-purple-400 bg-purple-950/40 shadow-[0_0_20px_rgba(192,132,252,0.25)]',
      icon: RefreshCw
    }
  ];

  // Section 9: Case Studies (Zero percentages or numbers, qualitative enterprise outcomes)
  const caseStudies = [
    {
      badge: 'MULTI-GIGAWATT SOLAR IPP',
      title: 'Independent Power Producer Eliminates Inverter Downtime Across Utility Solar Portfolio',
      client: 'Global Utility-Scale Solar Asset Owner',
      summary: 'Replaced fragmented inverter OEM monitoring software with SAP APM, predicting string failures and scheduling cleaning crews automatically.',
      deliverables: ['Automated String Fault Isolation', 'Condition-Based Tracker Calibration', 'Direct S/4HANA Work Execution'],
      desc: 'Deployed SAP Asset Performance Management with automated pyranometer telemetry, enabling operators to identify underperforming solar strings and deploy field technicians with zero delay.'
    },
    {
      badge: 'OFFSHORE WIND DEVELOPER',
      title: 'North Sea Wind Operator Slashes Emergency Crane Mobilizations with Predictive Drivetrain APM',
      client: 'Offshore Wind Generation Consortium',
      summary: 'Connected high-frequency vibration sensors to SAP Digital Twin models, predicting main bearing wear months before catastrophic lockup.',
      deliverables: ['Predictive Vibration Alerts', 'Vessel Dispatch Optimization', 'Automated Offshore Spare Staging'],
      desc: 'Integrated turbine SCADA with SAP S/4HANA Asset Management, synchronizing jack-up vessel schedules with calm sea weather windows to replace aging gearboxes during routine maintenance.'
    },
    {
      badge: 'GRID-SCALE BATTERY OPERATOR',
      title: 'Clean Tech Operator Safeguards Manufacturer Warranties Across Grid-Scale Storage Fleet',
      client: 'Commercial BESS & Renewable Storage Operator',
      summary: 'Built a continuous cell-level state-of-health audit ledger that prevents battery overcharging and automates warranty compliance records.',
      deliverables: ['Continuous State-of-Health Tracking', 'Thermal Runaway Early Detection', 'Automated Warranty Claim Records'],
      desc: 'Implemented SAP BTP IoT pipelines streaming cell temperature and cycle depth into S/4HANA, providing undeniable operating evidence that preserves full multi-million manufacturer battery warranties.'
    }
  ];

  // Section 10: FAQs
  const faqs = [
    {
      q: 'How does Knooviq integrate multi-vendor wind and solar SCADA into SAP S/4HANA?',
      a: 'We deploy standard SAP Integration Suite and industrial OPC-UA / Modbus connectors on SAP BTP to ingest data from heterogeneous OEM systems (Vestas, Siemens Gamesa, SMA, Sungrow) into a single unified asset data model.'
    },
    {
      q: 'How does SAP S/4HANA automate complex Power Purchase Agreement (PPA) settlements?',
      a: 'Our solution ingests metered generation data and ISO/RTO nodal electricity price feeds, automatically calculating contracted floor prices, revenue shares, and netting calculations to generate audited invoices without manual spreadsheets.'
    },
    {
      q: 'How does SAP APM forecast remaining useful life (RUL) for wind turbine components?',
      a: 'By combining high-frequency vibration sensor telemetry, oil particle count logs, and ambient meteorological data with physics-informed machine learning models, SAP APM forecasts degradation months before critical failure.'
    },
    {
      q: 'Can Knooviq automate landowner lease and turbine pad royalty payments?',
      a: 'Yes. Utilizing SAP Flexible Real Estate Management (RE-FX), we tie generation meters directly to landowner contract clauses, calculating and disbursing royalties accurately while maintaining audit trails.'
    },
    {
      q: 'How does the platform certify that green hydrogen was produced with renewable electricity?',
      a: 'We link electrolyzer mass-balance logs with time-stamped Renewable Energy Certificates (RECs) inside the SAP Sustainability Control Tower, generating an unalterable proof of origin required by global regulatory bodies.'
    }
  ];

  const filteredSolutions = activeSolutionCategory === 'ALL'
    ? modularSolutions
    : modularSolutions.filter(s => s.category === activeSolutionCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-[#0070C0] selection:text-white">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-24 pb-16">
        
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2000&q=85" 
            alt="Renewable Energy Wind & Solar" 
            className="w-full h-full object-cover object-center opacity-30 scale-105 transform animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/30 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
          <div className="max-w-4xl space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-sky-300 shadow-sm"
            >
              <Zap className="w-3.5 h-3.5 text-sky-400" />
              <span>SAP S/4HANA FOR RENEWABLE ENERGY & CLEAN TECH</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]"
            >
              Intelligent Wind, Solar, <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-white">Battery Storage & Green Hydrogen</span> Operations
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed font-normal"
            >
              Transform clean energy assets with integrated <strong className="text-white font-semibold">SAP S/4HANA Clean Core</strong>, predictive wind turbine digital twins, solar string APM, BESS battery degradation tracking, and automated PPA / REC settlement ledgers.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center gap-2 pt-1"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-slate-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Wind & Solar Predictive APM</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-slate-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>BESS Battery Degradation Models</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-slate-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Automated PPA / REC Settlements</span>
              </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-3"
            >
              <button
                type="button"
                onClick={() => onOpenContact('Renewable Energy Architecture Advisory')}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#0070C0] to-sky-500 hover:from-[#005a9e] hover:to-sky-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-sky-900/40 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Request Technical Advisory</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/solutions/sap-s4hana"
                className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/20 transition-all flex items-center gap-2"
              >
                <span>Explore S/4HANA Solutions</span>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
            >
              <div className="p-3.5 rounded-xl bg-white/[0.06] backdrop-blur-md border border-white/10 hover:border-sky-400/40 hover:bg-white/[0.09] transition-all">
                <span className="block text-[10.5px] font-mono uppercase text-sky-300 font-bold mb-1">Architecture</span>
                <span className="block text-xs sm:text-sm font-semibold text-white">SAP S/4HANA Clean Core</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.06] backdrop-blur-md border border-white/10 hover:border-sky-400/40 hover:bg-white/[0.09] transition-all">
                <span className="block text-[10.5px] font-mono uppercase text-sky-300 font-bold mb-1">Wind & Solar APM</span>
                <span className="block text-xs sm:text-sm font-semibold text-white">Predictive SCADA Twins</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.06] backdrop-blur-md border border-white/10 hover:border-sky-400/40 hover:bg-white/[0.09] transition-all">
                <span className="block text-[10.5px] font-mono uppercase text-sky-300 font-bold mb-1">Energy Storage</span>
                <span className="block text-xs sm:text-sm font-semibold text-white">BESS Degradation Models</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.06] backdrop-blur-md border border-white/10 hover:border-sky-400/40 hover:bg-white/[0.09] transition-all">
                <span className="block text-[10.5px] font-mono uppercase text-sky-300 font-bold mb-1">Carbon Markets</span>
                <span className="block text-xs sm:text-sm font-semibold text-white">Automated REC Accounting</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE INDUSTRY PERSPECTIVE & VALUE CHAIN SHOWCASE
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>EXECUTIVE INDUSTRY PERSPECTIVE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Maximizing Yield Across the <span className="text-[#0070C0]">Clean Energy Lifecycle</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Renewable profitability is won through precision asset uptime and automated commercial settlements that capture every generated megawatt-hour.&rdquo;
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Knooviq integrates heterogeneous wind, solar, and battery storage fleets into SAP S/4HANA Clean Core. Eliminating fragmented OEM dashboards accelerates predictive maintenance response, automates complex PPA settlements, and guarantees auditable carbon credit certification.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Fleet-Wide Predictive Asset Management</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Physics-informed machine learning anticipating solar inverter overheating and wind turbine drivetrain wear.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Automated PPA & Nodal Settlements</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Real-time energy contract reconciliation matching metered generation against wholesale market locational marginal prices.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Granular Carbon & REC Accounting</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Verifiable generation timestamping proving green energy provenance for corporate buyers and hydrogen standards.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="lg:col-span-6 space-y-3.5">
              <div className="relative h-64 sm:h-76 w-full rounded-2xl overflow-hidden border-2 border-slate-300 shadow-md bg-slate-100">
                <img 
                  src={journeySteps[activeJourneyStep].image} 
                  alt={journeySteps[activeJourneyStep].label} 
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="text-[11px] font-mono uppercase text-sky-300 font-bold">{journeySteps[activeJourneyStep].tech}</div>
                  <div className="text-sm sm:text-base font-bold">{journeySteps[activeJourneyStep].label}</div>
                  <p className="text-xs text-slate-300 line-clamp-2 mt-0.5">{journeySteps[activeJourneyStep].desc}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {journeySteps.map((step, idx) => {
                  const isSelected = activeJourneyStep === idx;
                  const StepIcon = step.icon;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveJourneyStep(idx)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2 ${
                        isSelected 
                          ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-sm' 
                          : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-50'
                      }`}
                    >
                      <StepIcon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-[#0070C0]'}`} />
                      <div className="truncate">
                        <div className="text-[11px] font-bold truncate leading-tight">{step.label}</div>
                        <div className={`text-[9.5px] truncate font-mono ${isSelected ? 'text-sky-100' : 'text-slate-400'}`}>{step.sublabel}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: OPERATIONAL CHALLENGES
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              <span>CLEAN ENERGY BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Operational Challenges Across the Renewable Lifecycle
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When wind farm telemetry, solar inverter health, and complex energy contracts remain isolated in disparate software, yield falls and contract disputes multiply.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {challenges.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl p-5 sm:p-6 bg-white border border-slate-200 shadow-xs hover:shadow-lg hover:border-slate-400 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#0070C0] flex items-center justify-center border border-slate-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-md">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#0070C0]">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.footer}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: NEW CREATIVE SECTION 1 - CIRCULAR CHEVRON RADIAL DIAGRAM
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#070B14] text-white border-b border-slate-800 relative overflow-hidden">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-sky-500/10 via-cyan-500/10 to-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-mono font-bold uppercase tracking-wider text-sky-300 shadow-inner">
              <Workflow className="w-3.5 h-3.5 text-sky-300" />
              <span>CIRCULAR RENEWABLE ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Capabilities Designed for Modern Clean Tech
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              A synchronized, circular enterprise platform uniting solar inverters, wind aerodynamic twins, BESS degradation tracking, and automated PPA settlements into one continuous loop.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* Left Column */}
            <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-5">
              {[7, 6, 5, 4].map((segIdx) => {
                const item = wheelSegments[segIdx];
                const isHovered = hoveredWheelIndex === segIdx;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredWheelIndex(segIdx)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? 'bg-slate-900/95 border-white/40 shadow-xl -translate-x-1'
                        : 'bg-slate-900/40 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                    style={{
                      boxShadow: isHovered ? `0 0 24px ${item.bgGlow}` : undefined,
                      borderColor: isHovered ? item.color : undefined
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1 text-left">
                        <h4 className="text-sm sm:text-base font-bold tracking-tight" style={{ color: item.color }}>
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                      <div 
                        className="w-2 h-7 rounded-full shrink-0 mt-0.5 transition-all duration-300"
                        style={{ 
                          backgroundColor: item.color,
                          boxShadow: isHovered ? `0 0 12px ${item.color}` : 'none'
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Column: 8-Segment Interlocking Chevron Circular Wheel */}
            <div className="order-1 lg:order-2 lg:col-span-4 flex justify-center items-center py-4 sm:py-6">
              <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] aspect-square flex items-center justify-center">
                
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/15 via-cyan-500/10 to-emerald-500/15 blur-2xl rounded-full pointer-events-none" />

                <svg
                  viewBox="0 0 500 500"
                  className="w-full h-full drop-shadow-2xl overflow-visible"
                >
                  {wheelSegments.map((seg, idx) => {
                    const isHovered = hoveredWheelIndex === idx;
                    const d = getChevronPath(idx);
                    const iconPos = getIconCoords(idx);
                    const IconComponent = seg.icon;

                    return (
                      <g
                        key={seg.id}
                        onMouseEnter={() => setHoveredWheelIndex(idx)}
                        onMouseLeave={() => setHoveredWheelIndex(null)}
                        className="cursor-pointer transition-all duration-300"
                      >
                        <path
                          d={d}
                          fill={isHovered ? `${seg.color}25` : '#0A0F1D'}
                          stroke={seg.color}
                          strokeWidth={isHovered ? "3.5" : "2.2"}
                          strokeLinejoin="round"
                          className="transition-all duration-300"
                          style={{
                            filter: isHovered ? `drop-shadow(0 0 10px ${seg.color})` : undefined
                          }}
                        />

                        <foreignObject
                          x={iconPos.x - 14}
                          y={iconPos.y - 14}
                          width={28}
                          height={28}
                          className="pointer-events-none overflow-visible"
                        >
                          <div 
                            className={`w-full h-full flex items-center justify-center transition-transform duration-300 ${
                              isHovered ? 'scale-125' : ''
                            }`}
                            style={{ color: seg.color }}
                          >
                            <IconComponent className="w-5 h-5 drop-shadow-md" />
                          </div>
                        </foreignObject>
                      </g>
                    );
                  })}

                  <circle
                    cx="250"
                    cy="250"
                    r="106"
                    fill="#070B14"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    className="drop-shadow-2xl"
                  />
                  <circle
                    cx="250"
                    cy="250"
                    r="102"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                    strokeOpacity="0.25"
                  />

                  <foreignObject
                    x="150"
                    y="200"
                    width="200"
                    height="100"
                    className="pointer-events-none"
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center text-center select-none px-3">
                      <span className="text-sm sm:text-base font-black text-white tracking-wider uppercase leading-tight">
                        KNOOVIQ Clean
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-300 mt-1 tracking-wide">
                        Energy Core
                      </span>
                    </div>
                  </foreignObject>
                </svg>

              </div>
            </div>

            {/* Right Column */}
            <div className="order-3 lg:order-3 lg:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-5">
              {[0, 1, 2, 3].map((segIdx) => {
                const item = wheelSegments[segIdx];
                const isHovered = hoveredWheelIndex === segIdx;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredWheelIndex(segIdx)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? 'bg-slate-900/95 border-white/40 shadow-xl translate-x-1'
                        : 'bg-slate-900/40 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                    style={{
                      boxShadow: isHovered ? `0 0 24px ${item.bgGlow}` : undefined,
                      borderColor: isHovered ? item.color : undefined
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-2 h-7 rounded-full shrink-0 mt-0.5 transition-all duration-300"
                        style={{ 
                          backgroundColor: item.color,
                          boxShadow: isHovered ? `0 0 12px ${item.color}` : 'none'
                        }}
                      />
                      <div className="space-y-1 text-right flex-1">
                        <h4 className="text-sm sm:text-base font-bold tracking-tight" style={{ color: item.color }}>
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: ENTERPRISE TECHNICAL ARCHITECTURE BLUEPRINT (Interactive Tabs)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Cpu className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>CLEAN CORE ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Enterprise Renewable Technology Blueprint
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Decoupling high-frequency SCADA telemetry and nodal PPA calculations on SAP BTP while maintaining standard S/4HANA core upgradability.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveArchTab('edge')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'edge'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              1. Field SCADA & Weather Edge
            </button>
            <button
              onClick={() => setActiveArchTab('core')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'core'
                  ? 'bg-[#0070C0] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              2. SAP S/4HANA Clean Core
            </button>
            <button
              onClick={() => setActiveArchTab('cloud')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'cloud'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              3. Cloud BTP & Yield Intelligence
            </button>
          </div>

          <div className="rounded-2xl border-2 border-slate-300 bg-slate-950 text-white p-6 sm:p-8 shadow-xl">
            {activeArchTab === 'edge' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Radio className="w-6 h-6 text-sky-400" />
                    <div>
                      <h3 className="text-lg font-bold text-white">Plant SCADA, Inverter Telemetry & Weather Stations</h3>
                      <p className="text-xs text-slate-400 font-mono">OPC-UA • Modbus RTU • Solar Pyranometer • Anemometer Masts</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-mono">Real-Time Ingestion</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-sky-300 mb-1">Solar Inverter String Telemetry</h4>
                    <p className="text-xs text-slate-300">Continuous DC input voltage, MPPT efficiency, and transformer temperature logs.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-sky-300 mb-1">Wind Turbine Drivetrain Telemetry</h4>
                    <p className="text-xs text-slate-300">High-frequency vibration sensors, gearbox oil temperature, and yaw system alignment.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-sky-300 mb-1">BESS Battery Rack Telemetry</h4>
                    <p className="text-xs text-slate-300">Module cell temperature, voltage balance, state-of-charge (SoC), and depth-of-discharge.</p>
                  </div>
                </div>
              </div>
            )}

            {activeArchTab === 'core' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-6 h-6 text-cyan-400" />
                    <div>
                      <h3 className="text-lg font-bold text-white">SAP S/4HANA Clean Core Renewable Backbone</h3>
                      <p className="text-xs text-slate-400 font-mono">SAP EAM • SAP RE-FX • Universal Journal • Revenue Recognition</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono">Clean Core Standard</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-cyan-300 mb-1">Enterprise Asset Management (EAM)</h4>
                    <p className="text-xs text-slate-300">Standard equipment hierarchies for wind turbines, string arrays, and subsea inter-array cables.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-cyan-300 mb-1">Automated Landowner Royalties</h4>
                    <p className="text-xs text-slate-300">SAP RE-FX calculating variable turbine pad land lease royalties based on metered generation.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-cyan-300 mb-1">PPA Settlement Engine</h4>
                    <p className="text-xs text-slate-300">Automated multi-buyer invoicing, nodal market reconciliations, and contract floor accounting.</p>
                  </div>
                </div>
              </div>
            )}

            {activeArchTab === 'cloud' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-emerald-400" />
                    <div>
                      <h3 className="text-lg font-bold text-white">SAP BTP & Predictive Yield Intelligence</h3>
                      <p className="text-xs text-slate-400 font-mono">SAP APM • Sustainability Control Tower • Machine Learning</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono">Cognitive Layer</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-emerald-300 mb-1">Drivetrain Digital Twins</h4>
                    <p className="text-xs text-slate-300">Physics-informed machine learning anticipating main bearing and blade pitch fatigue.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-emerald-300 mb-1">BESS Degradation Tracking</h4>
                    <p className="text-xs text-slate-300">Continuous state-of-health modeling protecting EPC battery capacity warranties.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-emerald-300 mb-1">Sustainability Control Tower</h4>
                    <p className="text-xs text-slate-300">Timestamped REC issuance, 24/7 carbon matching, and green hydrogen batch verification.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: MODULAR SOLUTIONS MATRIX
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Boxes className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>MODULAR CLEAN TECH PACKAGES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Pre-Configured Enterprise Renewable Modules
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Rapidly deployable solution packages engineered for utility solar, onshore and offshore wind, battery storage, and power purchase settlements.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveSolutionCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeSolutionCategory === cat.key
                    ? 'bg-[#0070C0] text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div 
                  key={sol.tag}
                  className="rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0070C0] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group h-full"
                >
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 shrink-0">
                    <img 
                      src={sol.image} 
                      alt={sol.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                      {sol.tag}
                    </div>
                    <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/90 backdrop-blur-md text-[#0070C0] shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-[#0070C0] uppercase tracking-wider bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                        {sol.categoryLabel}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-[#0070C0] transition-colors leading-snug line-clamp-2">
                        {sol.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {sol.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-slate-100 mt-4">
                      {sol.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0070C0] shrink-0" />
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

      {/* =========================================================================
          SECTION 7: STANDARDIZATION & CLEAN CORE ARCHITECTURE MATRIX
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
              <Layers className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>CLEAN CORE VS LEGACY CUSTOM CODE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Standardizing Complex Renewable Operations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              How Knooviq eliminates brittle Z-customizations with SAP standard clean energy industry packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-4">
              <div className="flex items-center gap-2 text-rose-700 font-mono text-xs font-bold uppercase">
                <AlertTriangle className="w-4 h-4" />
                <span>Legacy Custom Z-Developments</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Manual spreadsheets calculating complex off-taker PPA invoices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Siloed turbine OEM portals with no live link to ERP work orders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Unrecorded battery cycling voiding multi-million dollar warranties.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Manual email reconciliation of renewable energy certificate (REC) registries.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-4">
              <div className="flex items-center gap-2 text-emerald-700 font-mono text-xs font-bold uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>Knooviq S/4HANA Clean Core</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>Automated S/4HANA PPA settlement engine tied to ISO nodal prices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>Unified SAP APM predictive models across all wind and solar OEMs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>Continuous cell-level battery degradation tracking & warranty logs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>Automated REC issuance and retirement via SAP Sustainability Tower.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: NEW CREATIVE SECTION 2 - MULTI-STAGE TRANSFORMATION JOURNEY
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#0A0F1D] text-white border-b border-slate-800 relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
              <RefreshCw className="w-3.5 h-3.5 text-sky-300" />
              <span>TRANSFORMATION ROADMAP & DELTA INSPECTOR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Four Phases to Autonomous Renewable Operations
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Inspect how legacy manual workflows transform into intelligent real-time operations across every phase of the SAP deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {transformationStages.map((stage, sIdx) => {
              const isSelected = activeTransformStage === sIdx;
              const IconComp = stage.icon;
              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveTransformStage(sIdx)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? stage.activeBorder
                      : `bg-white/[0.03] ${stage.borderBase} hover:border-slate-600 hover:bg-white/[0.05]`
                  }`}
                >
                  {isSelected && (
                    <div className={`absolute top-0 left-0 right-0 h-0.5 ${stage.glowColor} shadow-[0_0_10px_currentColor]`} />
                  )}

                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${stage.glowColor} ${isSelected ? 'animate-ping' : ''}`} />
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${stage.textColor}`}>
                          {stage.badge}
                        </span>
                      </div>
                      <div className={`p-1.5 rounded-lg bg-white/5 border border-white/10 ${stage.textColor}`}>
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                        {stage.title}
                      </h3>
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wide mt-0.5">
                        {stage.subtitle}
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-2.5 mt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[9.5px] font-mono text-slate-400">
                      {stage.tag}
                    </span>
                    <span className={`text-[9.5px] font-mono font-bold uppercase tracking-wider ${stage.textColor} inline-flex items-center gap-0.5`}>
                      <span>{isSelected ? 'ACTIVE' : 'INSPECT'}</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Live Transformation Console */}
          {(() => {
            const currentStage = transformationStages[activeTransformStage];
            return (
              <div className="rounded-2xl bg-slate-900/90 border-2 border-slate-700/80 p-4 sm:p-5 shadow-2xl backdrop-blur-md relative overflow-hidden">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 flex-1">
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`w-2.5 h-2.5 rounded-full ${currentStage.glowColor} animate-pulse`} />
                      <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        {currentStage.title} Delta:
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-2.5 py-1 rounded-md bg-rose-950/60 border border-rose-500/40 text-rose-300 text-[11px] font-mono">
                        PRIOR: {currentStage.before}
                      </span>
                      <ArrowRight className="w-4 h-4 text-sky-400 shrink-0" />
                      <span className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono font-medium">
                        TRANSFORMED: {currentStage.after}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/10 w-full lg:w-auto">
                    {currentStage.capabilities.map((item, mIdx) => (
                      <span
                        key={mIdx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/15 text-[10.5px] font-mono text-slate-300 font-semibold"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: CASE STUDIES (Zero numbers or percentages)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Award className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PROVEN CLIENT TRANSFORMATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Enterprise Client Success Stories
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Real operational outcomes delivered for utility-scale solar arrays, offshore wind farms, and grid-scale battery systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold text-[#0070C0] bg-sky-50 px-2 py-0.5 rounded border border-sky-100 uppercase tracking-wider">
                    {cs.badge}
                  </span>
                  <h3 className="text-base font-bold text-slate-950 leading-snug">
                    {cs.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-500">
                    {cs.client}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cs.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 space-y-1.5">
                  {cs.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs font-mono text-emerald-700">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10: FAQS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
              <HelpCircle className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Renewable Energy Architecture Advisory
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Technical considerations for clean energy executives scaling generation assets on SAP S/4HANA.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50/50 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left text-xs sm:text-sm font-bold text-slate-900 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#0070C0]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 11: FINAL EXECUTIVE CTA (Exact Retail & E-Commerce Blueprint)
          ========================================================================= */}
      <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-r from-[#003B73] via-[#005B9E] to-[#0070C0] text-white">
        
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
            <Zap className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR RENEWABLE ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build a Smarter Renewable Energy Enterprise?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Connect your wind farms, solar plants, battery storage, and energy contracts with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact('Renewable Energy Architecture Advisory')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to Our Renewable Energy Experts</span>
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

export default RenewableEnergyIndustryPage;
