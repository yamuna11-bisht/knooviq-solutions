import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  Droplet, 
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
  Zap, 
  Boxes, 
  HelpCircle,
  Factory,
  Award,
  Truck,
  Globe2,
  RefreshCw,
  FileText,
  Radio,
  Server,
  AlertTriangle
} from 'lucide-react';

interface IndustryPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const OilGasIndustryPage: React.FC<IndustryPageProps> = ({ onOpenContact }) => {
  // State for Executive Perspective Journey
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

  // State for Circular Chevron Wheel
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(null);

  // State for Modular Solutions Filter
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');

  // State for Transformation Stage Console
  const [activeTransformStage, setActiveTransformStage] = useState<number>(0);

  // State for Architecture Tab
  const [activeArchTab, setActiveArchTab] = useState<string>('core');

  // State for FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Section 4: Circular Chevron Radial Wheel Segments (KNOOVIQ Hydrocarbon Platform Ecosystem)
  const wheelSegments = [
    {
      id: 'upstream-pra',
      title: 'Production Revenue Accounting',
      desc: 'Automated wellhead allocation & volumetric ledger',
      side: 'right',
      color: '#0284C7', // Sky Blue
      textColor: 'text-sky-400',
      bgGlow: 'rgba(2, 132, 199, 0.3)',
      icon: Compass
    },
    {
      id: 'tsw-logistics',
      title: 'Midstream Scheduling & TSW',
      desc: 'Pipeline batch nominations & jetty berthing',
      side: 'right',
      color: '#0EA5E9', // Cyan
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(14, 165, 233, 0.3)',
      icon: Layers
    },
    {
      id: 'custody-transfer',
      title: 'Custody Transfer Measurement',
      desc: 'Continuous radar gauge & flow meter verification',
      side: 'right',
      color: '#10B981', // Emerald
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.3)',
      icon: Gauge
    },
    {
      id: 'turnaround-apm',
      title: 'Refinery Asset Integrity & APM',
      desc: 'Predictive thickness monitoring & digital work packs',
      side: 'right',
      color: '#F59E0B', // Amber
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.3)',
      icon: Factory
    },
    {
      id: 'secondary-dist',
      title: 'Secondary Fuel Distribution',
      desc: 'Multi-compartment tank truck dispatch & forecourt sync',
      side: 'left',
      color: '#F97316', // Orange
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: Truck
    },
    {
      id: 'hse-permits',
      title: 'Process Safety & Digital Permits',
      desc: 'Lock-out/tag-out (LOTO) & SIMOPS risk shielding',
      side: 'left',
      color: '#EF4444', // Red
      textColor: 'text-rose-400',
      bgGlow: 'rgba(239, 68, 68, 0.3)',
      icon: ShieldCheck
    },
    {
      id: 'methane-esg',
      title: 'Fugitive Emissions & Flaring ESG',
      desc: 'Optical gas imaging & carbon accounting ledger',
      side: 'left',
      color: '#8B5CF6', // Purple
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.3)',
      icon: Zap
    },
    {
      id: 'edge-scada',
      title: 'Edge SCADA Telemetry & AI',
      desc: 'Direct OPC-UA streaming into SAP Clean Core',
      side: 'left',
      color: '#6366F1', // Indigo
      textColor: 'text-indigo-400',
      bgGlow: 'rgba(99, 102, 241, 0.3)',
      icon: Radio
    }
  ];

  // Helper calculations for interlocking circular chevron path
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

  // Section 2: Executive Hydrocarbon Value Chain Steps (No numbers, no percentages, clean enterprise narrative)
  const journeySteps = [
    {
      id: 'wellhead',
      label: 'Upstream Wellhead Telemetry',
      sublabel: 'Field Production',
      desc: 'Direct wellhead choke sensor streaming and automated custody transfer meter reconciliation across onshore pads and offshore subsea templates.',
      tech: 'IoT Edge & SCADA Integration',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      icon: Droplet
    },
    {
      id: 'pra',
      label: 'Production Revenue Accounting',
      sublabel: 'Hydrocarbon Ledger',
      desc: 'Algorithmic allocation of crude, wet gas, and natural gas liquids back to multi-partner Division of Interest contracts without manual spreadsheets.',
      tech: 'SAP PRA Clean Core',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80',
      icon: Compass
    },
    {
      id: 'midstream',
      label: 'Pipeline & Marine Logistics',
      sublabel: 'Bulk Movement',
      desc: 'Automated nomination cycles, batch scheduling, and jetty marine terminal berthing with live custody transfer ticketing and demurrage governance.',
      tech: 'SAP TSW / TM',
      image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=1200&q=80',
      icon: Layers
    },
    {
      id: 'refining',
      label: 'Refining & Turnaround APM',
      sublabel: 'Downstream Operations',
      desc: 'Corrosion thickness telemetry, heat exchanger fouling models, and digitized multi-contractor turnaround work packs eliminating schedule overruns.',
      tech: 'SAP APM & S/4HANA EAM',
      image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&w=1200&q=80',
      icon: Factory
    },
    {
      id: 'distribution',
      label: 'Secondary Distribution & Forecourt',
      sublabel: 'Commercial Delivery',
      desc: 'Dynamic multi-compartment fuel tanker dispatch, electronic bill of lading processing, and real-time underground tank wet-stock monitoring.',
      tech: 'SAP SDM & RFNO',
      image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80',
      icon: Truck
    },
    {
      id: 'esg',
      label: 'Safety & Methane ESG Governance',
      sublabel: 'Compliance Shield',
      desc: 'Continuous flare stack metering, optical leak detection repair tracking, and automated Scope 1 & 2 carbon ledgers for regulatory reporting.',
      tech: 'SAP Sustainability Control Tower',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
      icon: ShieldCheck
    }
  ];

  // Section 3: Operational Challenges
  const challenges = [
    {
      icon: AlertTriangle,
      title: 'Discrepant Volumetric Allocation',
      tag: 'UPSTREAM VOLUMES',
      desc: 'Manual allocations across multiple joint-venture partners create contentious audit disputes, delayed royalty disbursements, and compliance exposure.',
      footer: 'Resolved via Automated SAP PRA Balancing'
    },
    {
      icon: Layers,
      title: 'Pipeline Batch Nominations & Demurrage',
      tag: 'MIDSTREAM LOGISTICS',
      desc: 'Unsynchronized nominations between pipeline carriers, tank farms, and marine terminals cause jetty congestion and excessive tanker demurrage fees.',
      footer: 'Synchronized via SAP TSW Workbench'
    },
    {
      icon: Clock,
      title: 'Unplanned Refinery Turnaround Overruns',
      tag: 'DOWNSTREAM ASSET INTEGRITY',
      desc: 'Paper-based work packs and uncoordinated contractor shifts turn scheduled inspection shutdowns into costly multi-week facility outages.',
      footer: 'Governed via Digitized APM Turnaround Packs'
    },
    {
      icon: ShieldCheck,
      title: 'Offshore Process Safety & Permitting Delays',
      tag: 'SAFETY & LOTO GOVERNANCE',
      desc: 'Physical paper work permits risk SIMOPS clashes on offshore drilling rigs and process platforms, leading to emergency shutdowns and safety incidents.',
      footer: 'Protected via Digital Permit-to-Work & SIMOPS'
    },
    {
      icon: Zap,
      title: 'Fugitive Emissions & Methane Scrutiny',
      tag: 'ESG & DECARBONIZATION',
      desc: 'Scattered flare stack logs and periodic sniffing fail stringent greenhouse gas regulations, leaving operators vulnerable to heavy environmental penalties.',
      footer: 'Tracked via IoT Methane Sensors & ESG Ledger'
    },
    {
      icon: Truck,
      title: 'Secondary Fuel Cross-Contamination',
      tag: 'DISTRIBUTION INTEGRITY',
      desc: 'Manual truck compartment loading and unmonitored drop sequences at retail forecourts result in expensive fuel contamination and delivery delays.',
      footer: 'Automated via SAP SDM Compartment Logic'
    }
  ];

  // Section 6: Modular Solutions Matrix
  const modularSolutions = [
    {
      category: 'UPSTREAM',
      categoryLabel: 'Upstream E&P',
      icon: Compass,
      tag: 'OIL-01',
      title: 'Automated Wellhead Allocation & Production Accounting',
      description: 'End-to-end SAP Production and Revenue Accounting (PRA) automating complex division of interest (DOI) calculations, severance tax, and royalty disbursements.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      highlights: ['SAP PRA Volumetric Balancing', 'Automated DOI Royalty Calculations', 'Severance Tax Compliance']
    },
    {
      category: 'MIDSTREAM',
      categoryLabel: 'Midstream & Pipeline',
      icon: Layers,
      tag: 'OIL-02',
      title: 'Pipeline Nomination & Terminal Scheduling (TSW)',
      description: 'Synchronizes pipeline batch cycles, marine jetty berthing, and railway tank car nominations with real-time custody transfer documentation.',
      image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=800&q=80',
      highlights: ['Trader & Scheduler Workbench (TSW)', 'Custody Transfer Measurement', 'Marine Tanker Demurrage Control']
    },
    {
      category: 'DOWNSTREAM',
      categoryLabel: 'Downstream & Refining',
      icon: Factory,
      tag: 'OIL-03',
      title: 'Refinery Asset Integrity & Shutdown Governance',
      description: 'Digital turnaround work packs, API 510/570 pressure vessel thickness tracking, and predictive heat exchanger fouling analytics.',
      image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&w=800&q=80',
      highlights: ['Turnaround Milestones & WBS', 'API 570 Corrosion Telemetry', 'Dynamic Heat Exchanger RUL']
    },
    {
      category: 'DISTRIBUTION',
      categoryLabel: 'Secondary Distribution',
      icon: Droplet,
      tag: 'OIL-04',
      title: 'Secondary Distribution & Retail Forecourt Sync',
      description: 'Automates multi-drop fuel tanker dispatch, electronic bill of lading (e-BOL) processing, and retail gas station underground tank telemetry.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
      highlights: ['SAP SDM Trip Optimization', 'Forecourt Wet Stock Monitoring', 'Automated e-BOL Generation']
    },
    {
      category: 'HSE',
      categoryLabel: 'Process Safety & HSE',
      icon: ShieldCheck,
      tag: 'OIL-05',
      title: 'Permit-to-Work & Offshore Safety Governance',
      description: 'Digital lock-out/tag-out (LOTO), hot work gas testing verification, and risk-ranked SIMOPS (simultaneous operations) conflict prevention.',
      image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80',
      highlights: ['Digital Hot Work Permits', 'SIMOPS Visual Clash Detection', 'Regulatory Process Safety Audit']
    },
    {
      category: 'ESG',
      categoryLabel: 'Emissions & Carbon',
      icon: Zap,
      tag: 'OIL-06',
      title: 'Flaring & Fugitive Methane ESG Ledger',
      description: 'Direct IoT sensor integration logging flare stack gas volumes, optical gas imaging (OGI) leak repairs, and Scope 1 & 2 carbon accounting.',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      highlights: ['Continuous Flare Metering', 'Fugitive LDAR Repair Tracking', 'Scope 1-3 Carbon Accounting']
    }
  ];

  const categories = [
    { key: 'ALL', label: 'All Modules' },
    { key: 'UPSTREAM', label: 'Upstream E&P' },
    { key: 'MIDSTREAM', label: 'Midstream Logistics' },
    { key: 'DOWNSTREAM', label: 'Refining & Turnarounds' },
    { key: 'DISTRIBUTION', label: 'Fuel Distribution' },
    { key: 'HSE', label: 'Safety & Permits' }
  ];

  // Section 8: Interactive Multi-Stage Transformation Journey (Delta Inspector)
  const transformationStages = [
    {
      id: 'foundation',
      badge: 'PHASE 01',
      title: 'Sensor Ingestion & Edge Clean Core',
      subtitle: 'SCADA & Field Telemetry Integration',
      description: 'Bridge remote wellhead RTUs, tank radar gauges, and refinery DCS telemetry directly into SAP BTP without fragile point-to-point middleware.',
      tag: 'EDGE & IOT STREAMING',
      before: 'Disconnected SCADA spreadsheets & delayed meter logs',
      after: 'Sub-second real-time telemetry streaming into clean core',
      capabilities: ['OPC UA Native Drivers', 'Wellhead Choke Telemetry', 'Automated Volume Balancing'],
      textColor: 'text-sky-400',
      glowColor: 'bg-sky-400',
      borderBase: 'border-sky-500/30',
      activeBorder: 'border-sky-400 bg-sky-950/40 shadow-[0_0_20px_rgba(56,189,248,0.25)]',
      icon: Radio
    },
    {
      id: 'modernization',
      badge: 'PHASE 02',
      title: 'SAP S/4HANA Upstream & Midstream Core',
      subtitle: 'Production Accounting & TSW Deployment',
      description: 'Implement SAP PRA for automated joint-venture revenue distribution and activate the Trader’s and Scheduler’s Workbench for pipeline logistics.',
      tag: 'PRODUCTION & NOMINATIONS',
      before: 'Lengthy month-end reconciliation disputes with partners',
      after: 'Immediate volumetric allocation and automated custody ticketing',
      capabilities: ['Automated Division of Interest', 'Pipeline Batch Schedulers', 'Custody Transfer Verification'],
      textColor: 'text-cyan-400',
      glowColor: 'bg-cyan-400',
      borderBase: 'border-cyan-500/30',
      activeBorder: 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_20px_rgba(34,211,238,0.25)]',
      icon: Compass
    },
    {
      id: 'intelligence',
      badge: 'PHASE 03',
      title: 'Asset Performance & Process Safety',
      subtitle: 'Predictive Turnarounds & Electronic Permits',
      description: 'Integrate SAP APM with vibration sensors and ultrasonic thickness logs to forecast equipment failure and deploy digital permit-to-work systems.',
      tag: 'PREDICTIVE APM & SAFETY',
      before: 'Reactive maintenance and physical paper hot-work permits',
      after: 'Predictive corrosion alerts and automated SIMOPS conflict shielding',
      capabilities: ['Dynamic Equipment Health Index', 'Digital Lock-Out/Tag-Out', 'API 570 Corrosion Telemetry'],
      textColor: 'text-emerald-400',
      glowColor: 'bg-emerald-400',
      borderBase: 'border-emerald-500/30',
      activeBorder: 'border-emerald-400 bg-emerald-950/40 shadow-[0_0_20px_rgba(52,211,153,0.25)]',
      icon: ShieldCheck
    },
    {
      id: 'autonomous',
      badge: 'PHASE 04',
      title: 'Autonomous Energy Operations',
      subtitle: 'AI Optimization & Real-Time ESG Accounting',
      description: 'Orchestrate autonomous secondary fuel routing, AI-guided refinery process setpoints, and automated Scope 1 & 2 emissions reporting.',
      tag: 'AUTONOMOUS OPERATIONS',
      before: 'Manual dispatch scheduling and estimated emissions reports',
      after: 'Dynamic algorithmic truck dispatch and continuous carbon ledgers',
      capabilities: ['Algorithmic Fuel Route Dispatch', 'Continuous Flare Metering', 'Audit-Ready ESG Ledger'],
      textColor: 'text-purple-400',
      glowColor: 'bg-purple-400',
      borderBase: 'border-purple-500/30',
      activeBorder: 'border-purple-400 bg-purple-950/40 shadow-[0_0_20px_rgba(192,132,252,0.25)]',
      icon: Zap
    }
  ];

  // Section 9: Case Studies (Zero percentages or numbers, qualitative enterprise impact)
  const caseStudies = [
    {
      badge: 'OFFSHORE DRILLING SUPERMAJOR',
      title: 'Global Energy Producer Automates Wellhead Allocation Across Multi-Concession Platforms',
      client: 'Offshore Exploration & Production Enterprise',
      summary: 'Eliminated manual wellhead reconciliation delays across offshore platforms with continuous SAP PRA volume balancing.',
      deliverables: ['Real-Time Wellhead Balancing', 'Automated Joint-Venture Settlements', 'Continuous Audit Verification'],
      desc: 'Implemented SAP S/4HANA Oil & Gas PRA with automated IoT choke telemetry, instantly distributing production among concession partners with zero reconciliation drift.'
    },
    {
      badge: 'NATIONAL REFINING LEADER',
      title: 'Major Petroleum Refining Complex Modernizes Turnaround Governance & Asset Health',
      client: 'Petroleum Refining & Downstream Complex',
      summary: 'Replaced paper work packs with digitized turnaround schedules and predictive corrosion telemetry across complex process units.',
      deliverables: ['Digitized Turnaround Work Packs', 'Ultrasonic Thickness Monitoring', 'Automated Safety Permits'],
      desc: 'Deployed SAP Asset Performance Management (APM) and digital permits to coordinate maintenance shifts across refinery process trains with zero permit conflicts.'
    },
    {
      badge: 'MIDSTREAM PIPELINE NETWORK',
      title: 'Transcontinental Pipeline Operator Unifies Custody Transfers and Batch Nominations',
      client: 'Crude & Refined Products Pipeline Network',
      summary: 'Streamlined multi-modal pipeline, rail car, and marine tanker movements with seamless automated custody transfer documentation.',
      deliverables: ['Automated TSW Nominations', 'Marine Jetty Demurrage Control', 'Batch Cycle Scheduling'],
      desc: 'Connected SCADA pipeline telemetry to SAP TSW (Trader’s and Scheduler’s Workbench), automating nominations and custody tickets with full auditability.'
    }
  ];

  // Section 10: FAQs
  const faqs = [
    {
      q: 'How does Knooviq integrate existing SCADA and DCS systems with SAP S/4HANA Oil & Gas?',
      a: 'We leverage SAP Integration Suite and industrial OPC-UA / MQTT connectors on SAP BTP to ingest high-frequency sensor streams (pressure, temperature, flow meters) directly into S/4HANA without altering your core SCADA safety infrastructure.'
    },
    {
      q: 'Can Knooviq handle complex Division of Interest (DOI) joint venture partnerships?',
      a: 'Yes. Our SAP PRA implementation models intricate ownership structures, sliding scale royalties, working interests, and state severance tax laws, ensuring automated and audit-ready monthly disbursements.'
    },
    {
      q: 'How does the Trader’s and Scheduler’s Workbench (TSW) prevent marine tanker demurrage?',
      a: 'TSW continuously syncs marine tanker voyage events with storage tank availability and pipeline pumping schedules, flagging berthing bottlenecks before vessels arrive at the terminal.'
    },
    {
      q: 'How do digital work permits and SIMOPS governance improve turnaround safety?',
      a: 'Our digital permit module dynamically plots all active hot work, cold work, and confined-space permits onto a 3D plant model, instantly identifying dangerous simultaneous operation conflicts before work orders are issued.'
    },
    {
      q: 'How does Knooviq support Scope 1 & Scope 2 fugitive methane emissions reporting?',
      a: 'We integrate optical gas imaging (OGI) leak detection logs and flare meter telemetry directly into the SAP Sustainability Control Tower, providing an audit-ready carbon ledger compliant with global regulatory bodies.'
    }
  ];

  const filteredSolutions = activeSolutionCategory === 'ALL'
    ? modularSolutions
    : modularSolutions.filter(s => s.category === activeSolutionCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-[#0070C0] selection:text-white">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Pure Enterprise Hero - Zero Shading on Image)
          ========================================================================= */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        
        {/* Full-Bleed Enterprise Background Image with Seamless Cinematic Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000&q=80" 
            alt="Oil & Gas Upstream and Refining Enterprise Atmosphere" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Seamless Cinematic Left Scrim */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/80 sm:via-slate-950/60 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          
          <div className="max-w-3xl space-y-4">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-2.5"
            >
              {/* Practice Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
                <Flame className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>
              
              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Intelligent ERP for <br />
                <span className="text-cyan-400">Oil & Gas Energy</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Orchestrating Upstream Telemetry, Midstream Logistics & Refinery Reliability on One Unified Core.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3 max-w-2xl"
            >
              {/* Clear Open Typography */}
              <p className="text-sm sm:text-base lg:text-[17px] text-slate-100 font-normal leading-relaxed drop-shadow-sm">
                Transform energy operations with integrated <strong className="text-white font-semibold">SAP S/4HANA Clean Core</strong>, automated <strong className="text-cyan-300 font-semibold">Production Revenue Accounting (PRA)</strong>, predictive turnaround scheduling, and real-time custody transfer tracking.
              </p>
              
              {/* Clean Feature Highlights */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Clean Core Architecture</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Automated PRA Allocation</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Sub-Second Logistics Tracking</span>
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
                <div className="flex items-center gap-2 mb-1">
                  <Cpu className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">ARCHITECTURE</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">SAP S/4HANA Core</div>
                <div className="text-xs text-slate-300 mt-0.5">Clean Core Ready</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Compass className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">UPSTREAM PRA</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Automated Allocation</div>
                <div className="text-xs text-slate-300 mt-0.5">Volumetric Ledgers</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Layers className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">MIDSTREAM TSW</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Marine & Pipelines</div>
                <div className="text-xs text-slate-300 mt-0.5">Zero Demurrage Flow</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Factory className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">DOWNSTREAM APM</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Turnaround Health</div>
                <div className="text-xs text-slate-300 mt-0.5">Predictive Integrity</div>
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
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>EXECUTIVE INDUSTRY PERSPECTIVE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Synchronizing the End-to-End <span className="text-[#0070C0]">Hydrocarbon Value Chain</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Energy profitability is preserved at the custody handoffs: between wellheads, pipeline batches, refinery distillation units, and terminal racks.&rdquo;
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Knooviq bridges operational SCADA field telemetry directly with enterprise financial ledgers on SAP S/4HANA. Eliminating manual reconciliation spreadsheets safeguards joint-venture audit compliance, accelerates turnaround schedules, and mitigates ESG regulatory risks.
              </p>

              {/* 3 Executive Strategic Pillars */}
              <div className="space-y-2.5 pt-1">
                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <Droplet className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Continuous Volumetric Reconciliation</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Instant division of interest allocations distributing hydrocarbons from flow meters back to ownership partners.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Dynamic Terminal & Pipeline Logistics</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Unified scheduling aligning pipeline nominations, marine tanker berthing, and tank farm inventory.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Process Safety & Emissions Shield</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Integrated digital permits-to-work, visual SIMOPS clash detection, and real-time flare stack carbon accounting.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side: Visual Photography Showcase & Stage Navigator */}
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

              {/* Stage Navigation Grid */}
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
          SECTION 3: OPERATIONAL CHALLENGES & PHYSICAL CONSTRAINTS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              <span>HYDROCARBON DOMAIN BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Operational Challenges Across the Energy Lifecycle
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Energy enterprises lose margin and incur heavy compliance risks when physical flow meters, pipeline schedules, and maintenance work packs remain disconnected from ERP ledgers.
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
          (KNOOVIQ HYDROCARBON PLATFORM ECOSYSTEM)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#070B14] text-white border-b border-slate-800 relative overflow-hidden">
        
        {/* Dark Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-sky-500/10 via-cyan-500/10 to-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-mono font-bold uppercase tracking-wider text-sky-300 shadow-inner">
              <Workflow className="w-3.5 h-3.5 text-sky-300" />
              <span>CIRCULAR HYDROCARBON ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Capabilities Designed for Modern Energy
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              A synchronized, circular enterprise platform uniting upstream wellhead telemetry, midstream scheduling, refinery asset performance, and real-time ESG ledgers into one continuous loop.
            </p>
          </motion.div>

          {/* 3-Column Radial Wheel & Flanking Capabilities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* Left Column (4 Capabilities: Top-Left to Bottom-Left) */}
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
                
                {/* Glow ring under wheel */}
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/15 via-cyan-500/10 to-emerald-500/15 blur-2xl rounded-full pointer-events-none" />

                <svg
                  viewBox="0 0 500 500"
                  className="w-full h-full drop-shadow-2xl overflow-visible"
                >
                  {/* 8 Interlocking Chevron Segments */}
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
                        {/* Chevron Wedge */}
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

                        {/* Segment Icon */}
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

                  {/* Center Hub Outer Circle */}
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

                  {/* Center Hub Label */}
                  <foreignObject
                    x="150"
                    y="200"
                    width="200"
                    height="100"
                    className="pointer-events-none"
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center text-center select-none px-3">
                      <span className="text-sm sm:text-base font-black text-white tracking-wider uppercase leading-tight">
                        KNOOVIQ Energy
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-300 mt-1 tracking-wide">
                        Platform
                      </span>
                    </div>
                  </foreignObject>
                </svg>

              </div>
            </div>

            {/* Right Column (4 Capabilities: Top-Right to Bottom-Right) */}
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
              Enterprise Hydrocarbon Technology Blueprint
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Decoupling field telemetry and complex joint-venture logic through SAP BTP while preserving standard S/4HANA core upgradability.
            </p>
          </div>

          {/* Interactive Layer Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveArchTab('edge')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'edge'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              1. Field IoT & SCADA Edge
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
              3. Cloud BTP & Enterprise AI
            </button>
          </div>

          {/* Active Blueprint View */}
          <div className="rounded-2xl border-2 border-slate-300 bg-slate-950 text-white p-6 sm:p-8 shadow-xl">
            {activeArchTab === 'edge' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Radio className="w-6 h-6 text-sky-400" />
                    <div>
                      <h3 className="text-lg font-bold text-white">Edge Telemetry, Flow Meters & SCADA Gateways</h3>
                      <p className="text-xs text-slate-400 font-mono">OPC-UA • MQTT • Modbus TCP • Radar Tank Gauges</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-mono">Sub-Second Streaming</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-sky-300 mb-1">Wellhead Choke Telemetry</h4>
                    <p className="text-xs text-slate-300">Continuous tubing pressure, casing pressure, and multi-phase flow meter readings.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-sky-300 mb-1">Pipeline Custody Transfer</h4>
                    <p className="text-xs text-slate-300">Custody measurement verification, temperature compensation, and BS&W water-cut analysis.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-sky-300 mb-1">Refinery DCS Telemetry</h4>
                    <p className="text-xs text-slate-300">Compressor vibration, distillation column temperature profiles, and flare gas flow meters.</p>
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
                      <h3 className="text-lg font-bold text-white">SAP S/4HANA Oil & Gas Digital Clean Core</h3>
                      <p className="text-xs text-slate-400 font-mono">SAP PRA • SAP TSW • SAP EAM • Universal Journal</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono">Clean Core Standard</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-cyan-300 mb-1">Production Revenue Accounting</h4>
                    <p className="text-xs text-slate-300">Division of interest (DOI) allocation, state severance tax filings, and joint-venture audit ledgers.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-cyan-300 mb-1">Trader's & Scheduler's TSW</h4>
                    <p className="text-xs text-slate-300">Integrated nominations, batch sequence tracking, tank farm tickets, and marine charter demurrage control.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-cyan-300 mb-1">Downstream SDM & RFNO</h4>
                    <p className="text-xs text-slate-300">Multi-compartment tank truck loading, electronic bill of lading, and forecourt wet stock reconciliation.</p>
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
                      <h3 className="text-lg font-bold text-white">SAP BTP & Predictive Enterprise AI</h3>
                      <p className="text-xs text-slate-400 font-mono">SAP APM • Sustainability Control Tower • Predictive ML</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono">Cognitive Layer</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-emerald-300 mb-1">Asset Performance (APM)</h4>
                    <p className="text-xs text-slate-300">Ultrasonic corrosion thickness trends, RUL forecasting, and digitized turnaround work packs.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-emerald-300 mb-1">Sustainability Control Tower</h4>
                    <p className="text-xs text-slate-300">Scope 1 & 2 carbon accounting, automated flaring reports, and optical gas imaging repair logs.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-emerald-300 mb-1">AI Process Optimization</h4>
                    <p className="text-xs text-slate-300">Refinery distillation setpoint optimization and predictive fuel replenishment demand sensing.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: MODULAR SOLUTIONS MATRIX (Responsive Flex Cards, No Clipping)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Boxes className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>MODULAR SOLUTION PACKAGES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Pre-Configured Enterprise Energy Modules
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Rapidly deployable solution packages engineered for upstream exploration, midstream pipelines, and complex refining operations.
            </p>
          </div>

          {/* Category Filter Chips */}
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

          {/* Symmetrical Grid of Solution Cards */}
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
              Standardizing Complex Energy Business Logic
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              How Knooviq eliminates brittle Z-customizations with SAP standard Oil & Gas industry packages.
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
                  <span>Heavy Z-tables for production allocations that break during S/4HANA upgrades.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Fragmented spreadsheets calculating joint-venture division of interests.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Manual custody reconciliation between pipeline SCADA and billing ledgers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Physical paper hot-work permits vulnerable to simultaneous operation hazards.</span>
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
                  <span>Standard SAP PRA with automated volumetric balancing and DOI compliance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>Direct Trader’s and Scheduler’s Workbench (TSW) pipeline and jetty berthing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>Real-time radar gauge integration directly into universal financial documents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>Digital permit-to-work and 3D visual SIMOPS clash detection on SAP BTP.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: NEW CREATIVE SECTION 2 - MULTI-STAGE TRANSFORMATION JOURNEY
          (Interactive Live Console / Delta Inspector)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#0A0F1D] text-white border-b border-slate-800 relative overflow-hidden">
        
        {/* Subtle Ambient Tone */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
              <RefreshCw className="w-3.5 h-3.5 text-sky-300" />
              <span>TRANSFORMATION ROADMAP & DELTA INSPECTOR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Four Phases to Autonomous Energy Operations
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Inspect how legacy manual workflows transform into intelligent real-time operations across every phase of the SAP deployment.
            </p>
          </div>

          {/* 4 Interactive Transformation Cards */}
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

          {/* Interactive Live Transformation Console / Delta Inspector */}
          {(() => {
            const currentStage = transformationStages[activeTransformStage];
            return (
              <div className="rounded-2xl bg-slate-900/90 border-2 border-slate-700/80 p-4 sm:p-5 shadow-2xl backdrop-blur-md relative overflow-hidden">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                  
                  {/* Left: Active Stage Name & Transformation Contrast */}
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

                  {/* Right: Key Deliverables Chips */}
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
          SECTION 9: CASE STUDIES (Zero numbers or percentages, qualitative enterprise deliverables)
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
              Real outcomes delivered for offshore exploration operators, pipeline carriers, and complex global refineries.
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
              Oil & Gas Architecture Advisory
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Common technical considerations for energy operators embarking on SAP S/4HANA transformation.
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
        
        {/* Abstract 3D Digital Energy Mesh Visual */}
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
            <span>CONNECT YOUR OIL & GAS ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build a Smarter Oil & Gas Enterprise?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Connect your upstream wells, midstream pipelines, refinery units, and commercial ledgers with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact('Oil & Gas Architecture Advisory')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to Our Oil & Gas Experts</span>
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

export default OilGasIndustryPage;
