import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Activity, 
  Layers, 
  ShieldCheck, 
  Radio, 
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
  Globe2,
  RefreshCw,
  Server,
  AlertTriangle,
  FileText
} from 'lucide-react';

interface IndustryPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const PowerUtilitiesIndustryPage: React.FC<IndustryPageProps> = ({ onOpenContact }) => {
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(null);
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');
  const [activeTransformStage, setActiveTransformStage] = useState<number>(0);
  const [activeArchTab, setActiveArchTab] = useState<string>('core');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Section 4: 8-Segment Interlocking Chevron Circular Wheel (KNOOVIQ Utility Platform Ecosystem)
  const wheelSegments = [
    {
      id: 'ami-mdus',
      title: 'AMI & Smart Meter MDUS',
      desc: 'High-frequency interval meter reading ingestion & validation',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(2, 132, 199, 0.3)',
      icon: Activity
    },
    {
      id: 'gis-eam',
      title: 'GIS Linear Asset Management',
      desc: 'Substation, feeder, and transformer spatial health mapping',
      side: 'right',
      color: '#0EA5E9',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(14, 165, 233, 0.3)',
      icon: Compass
    },
    {
      id: 'outage-fsm',
      title: 'Outage Management & Mobile Dispatch',
      desc: 'Real-time trouble ticketing & GPS line crew dispatching',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.3)',
      icon: Workflow
    },
    {
      id: 'derms-grid',
      title: 'DERMS & Renewables Integration',
      desc: 'Distributed solar, battery storage, and EV load balancing',
      side: 'right',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.3)',
      icon: Zap
    },
    {
      id: 'is-u-billing',
      title: 'SAP IS-U Customer Billing',
      desc: 'Time-of-use tariffs, net metering & omni-channel customer portal',
      side: 'left',
      color: '#F97316',
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: RefreshCw
    },
    {
      id: 'nerc-cip',
      title: 'NERC-CIP & Cybersecurity Shield',
      desc: 'Critical infrastructure protection & OT cyber-physical defense',
      side: 'left',
      color: '#EF4444',
      textColor: 'text-rose-400',
      bgGlow: 'rgba(239, 68, 68, 0.3)',
      icon: ShieldCheck
    },
    {
      id: 'transformer-apm',
      title: 'Transformer APM & DGA Analytics',
      desc: 'Dissolved gas analysis & predictive substation maintenance',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.3)',
      icon: Factory
    },
    {
      id: 'scada-substation',
      title: 'Substation SCADA Telemetry & AI',
      desc: 'Direct IEC 61850 protocol streaming into SAP Clean Core',
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
      id: 'generation',
      label: 'Generation & Plant APM',
      sublabel: 'Power Plants',
      desc: 'Predictive thermal stress monitoring, turbine vibration telemetry, and automated maintenance scheduling across hydro, thermal, and nuclear generation facilities.',
      tech: 'SAP APM & Asset Central',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
      icon: Factory
    },
    {
      id: 'substation',
      label: 'Transmission & Substation Telemetry',
      sublabel: 'High-Voltage Grid',
      desc: 'Continuous transformer dissolved gas analysis (DGA), circuit breaker trip timing, and SF6 gas pressure tracking integrated into SAP S/4HANA EAM.',
      tech: 'IEC 61850 & S/4HANA EAM',
      image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=1200&q=80',
      icon: Zap
    },
    {
      id: 'distribution',
      label: 'Distribution & GIS Mapping',
      sublabel: 'Linear Assets',
      desc: 'Bi-directional synchronization between Esri ArcGIS and SAP S/4HANA linear assets, ensuring maintenance work orders reference exact GPS pole and feeder segments.',
      tech: 'Esri GIS & SAP Geo-Enablement',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
      icon: Compass
    },
    {
      id: 'metering',
      label: 'Smart Metering & MDUS Ingestion',
      sublabel: 'AMI Infrastructure',
      desc: 'Sub-second validation of interval power consumption, automated outage ping detection, and seamless bridge to SAP Billing without database deadlocks.',
      tech: 'SAP AMI / MDUS Clean Core',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      icon: Activity
    },
    {
      id: 'outage',
      label: 'Outage Management & Field Dispatch',
      sublabel: 'Emergency Response',
      desc: 'Automated restoration crew dispatching based on real-time vehicle GPS, storm hazard assessment, and automated customer SMS outage status updates.',
      tech: 'SAP Field Service Management',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      icon: Workflow
    },
    {
      id: 'billing',
      label: 'Omni-Channel Customer Care & Billing',
      sublabel: 'Commercial Ledgers',
      desc: 'Dynamic time-of-use tariff calculations, solar net metering reconciliations, and automated bill generation delivering transparent customer experiences.',
      tech: 'SAP IS-U & C4C Utilities',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      icon: RefreshCw
    }
  ];

  // Section 3: Operational Challenges
  const challenges = [
    {
      icon: AlertTriangle,
      title: 'AMI Meter Data Ingestion Bottlenecks',
      tag: 'AMI SCALABILITY',
      desc: 'High-frequency interval meter readings overwhelm legacy utility databases, causing billing cycle delays and missing unmetered energy leakages.',
      footer: 'Resolved via SAP MDUS In-Memory Pipeline'
    },
    {
      icon: Compass,
      title: 'GIS & Asset Registry Discrepancies',
      tag: 'SPATIAL SYNCHRONIZATION',
      desc: 'Field engineers updating physical pole transformers in GIS without ERP synchronization results in misplaced crews and invalid asset depreciation.',
      footer: 'Synchronized via SAP Geographical Framework'
    },
    {
      icon: Clock,
      title: 'Prolonged Storm Outage Restoration',
      tag: 'GRID RELIABILITY',
      desc: 'Manual dispatch communication between control room SCADA and mobile utility trucks delays emergency power restoration and spikes SAIDI indices.',
      footer: 'Automated via SAP FSM & OMS Routing'
    },
    {
      icon: Zap,
      title: 'DERMS Bi-Directional Grid Volatility',
      tag: 'RENEWABLES INTEGRATION',
      desc: 'Surging rooftop solar and commercial battery feeds cause local substation voltage fluctuations without real-time curtailment coordination.',
      footer: 'Balanced via SAP Clean Core Grid Telemetry'
    },
    {
      icon: ShieldCheck,
      title: 'Strict NERC-CIP Regulatory Audits',
      tag: 'CYBERSECURITY & AUDITING',
      desc: 'Siloed industrial control systems and unlogged substation physical access expose utility operators to catastrophic cyber threats and heavy federal fines.',
      footer: 'Protected via Unified NERC-CIP Compliance Suite'
    },
    {
      icon: RefreshCw,
      title: 'Complex Time-of-Use & Solar Tariffs',
      tag: 'UTILITY BILLING ACCURACY',
      desc: 'Legacy billing engines struggle to calculate dynamic hourly electricity prices and net-metering solar buyback rates, causing customer dispute surges.',
      footer: 'Streamlined via SAP IS-U Dynamic Tariffs'
    }
  ];

  // Section 6: Modular Solutions Matrix
  const modularSolutions = [
    {
      category: 'AMI',
      categoryLabel: 'Smart Metering & AMI',
      icon: Activity,
      tag: 'UTIL-01',
      title: 'SAP AMI / MDUS Advanced Meter Infrastructure',
      description: 'End-to-end integration between head-end meter networks and SAP S/4HANA for high-frequency consumption validation, estimation, and editing (VEE).',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      highlights: ['Automated VEE Validation Logic', 'Instant Outage & Tamper Detection', 'Sub-Second Billing Event Sync']
    },
    {
      category: 'EAM',
      categoryLabel: 'Transmission & Substation EAM',
      icon: Factory,
      tag: 'UTIL-02',
      title: 'Predictive Substation & Transformer APM',
      description: 'Online dissolved gas analysis (DGA), thermal imaging, and vibration telemetry anticipating catastrophic transformer faults before grid disruption.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
      highlights: ['Dissolved Gas Analysis (DGA)', 'Remaining Useful Life (RUL) Modeling', 'Condition-Based Work Orders']
    },
    {
      category: 'GIS',
      categoryLabel: 'Spatial & Linear Assets',
      icon: Compass,
      tag: 'UTIL-03',
      title: 'GIS Spatial Network & Linear Asset Integration',
      description: 'Bi-directional synchronization between Esri ArcGIS and SAP S/4HANA linear assets, unifying poles, conductors, and underground conduits into one registry.',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
      highlights: ['Esri ArcGIS Bi-Directional Sync', 'Linear Referencing & Feeder Segments', 'Spatial Work Order Heatmaps']
    },
    {
      category: 'FSM',
      categoryLabel: 'Outage & Field Service',
      icon: Workflow,
      tag: 'UTIL-04',
      title: 'Storm Restoration & Mobile Workforce Cockpit',
      description: 'Intelligent dispatch algorithm routing high-voltage line crews based on skills, truck inventory, and live traffic during major weather events.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      highlights: ['Automated Storm Dispatching', 'Truck Spares Inventory Sync', 'Mobile Offline Work Execution']
    },
    {
      category: 'BILLING',
      categoryLabel: 'IS-U Utility Billing',
      icon: RefreshCw,
      tag: 'UTIL-05',
      title: 'Dynamic Time-of-Use & Net Metering Billing',
      description: 'Flexible tariff configuration engine handling multi-register smart meters, distributed generation buybacks, and omni-channel customer invoicing.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      highlights: ['Time-of-Use Dynamic Tariffs', 'BTM Solar Net Metering', 'Omni-Channel Customer Statements']
    },
    {
      category: 'SECURITY',
      categoryLabel: 'Grid Security & Compliance',
      icon: ShieldCheck,
      tag: 'UTIL-06',
      title: 'NERC-CIP & Critical Infrastructure Governance',
      description: 'Centralized access governance, electronic security perimeter monitoring, and automated evidence harvesting for federal NERC-CIP reliability audits.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      highlights: ['Automated NERC-CIP Audit Logs', 'Substation Perimeter Security', 'Patch Management Tracking']
    }
  ];

  const categories = [
    { key: 'ALL', label: 'All Modules' },
    { key: 'AMI', label: 'Smart Metering AMI' },
    { key: 'EAM', label: 'Substation APM' },
    { key: 'GIS', label: 'GIS Linear Assets' },
    { key: 'FSM', label: 'Outage & Crew FSM' },
    { key: 'BILLING', label: 'IS-U Billing' }
  ];

  // Section 8: Interactive Multi-Stage Transformation Journey (Delta Inspector)
  const transformationStages = [
    {
      id: 'foundation',
      badge: 'PHASE 01',
      title: 'AMI Telemetry & Substation Ingestion',
      subtitle: 'Smart Meter & Sensor Foundation',
      description: 'Deploy SAP MDUS to ingest interval consumption data from millions of smart meters alongside substation SCADA telemetry without database latency.',
      tag: 'AMI & EDGE STREAMING',
      before: 'Manual meter reads & delayed monthly billing cycles',
      after: 'Continuous interval data ingestion & automated tamper detection',
      capabilities: ['Sub-Second VEE Processing', 'Head-End AMI Connectors', 'IEC 61850 Substation SCADA'],
      textColor: 'text-sky-400',
      glowColor: 'bg-sky-400',
      borderBase: 'border-sky-500/30',
      activeBorder: 'border-sky-400 bg-sky-950/40 shadow-[0_0_20px_rgba(56,189,248,0.25)]',
      icon: Activity
    },
    {
      id: 'modernization',
      badge: 'PHASE 02',
      title: 'SAP S/4HANA Clean Core Migration',
      subtitle: 'Enterprise EAM & GIS Spatial Registry',
      description: 'Consolidate generation, transmission, and distribution assets into standard S/4HANA Clean Core integrated with Esri ArcGIS linear networks.',
      tag: 'CLEAN CORE & GIS MAPPING',
      before: 'Siloed asset spreadsheets & disconnected GIS maps',
      after: 'Unified linear asset registry with live spatial work orders',
      capabilities: ['Esri Bi-Directional Synchronization', 'Linear Asset Referencing', 'Universal Financial Posting'],
      textColor: 'text-cyan-400',
      glowColor: 'bg-cyan-400',
      borderBase: 'border-cyan-500/30',
      activeBorder: 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_20px_rgba(34,211,238,0.25)]',
      icon: Compass
    },
    {
      id: 'intelligence',
      badge: 'PHASE 03',
      title: 'Predictive APM & Storm Dispatch',
      subtitle: 'Asset Health & Workforce Mobilization',
      description: 'Activate dissolved gas analysis (DGA) algorithms predicting substation transformer failure, paired with automated line-crew storm dispatching.',
      tag: 'PREDICTIVE APM & FSM',
      before: 'Reactive transformer replacements & manual truck calling',
      after: 'Condition-based maintenance & automated storm restoration',
      capabilities: ['Transformer DGA Modeling', 'GPS Line-Crew Dispatching', 'Truck Spares Inventory Sync'],
      textColor: 'text-emerald-400',
      glowColor: 'bg-emerald-400',
      borderBase: 'border-emerald-500/30',
      activeBorder: 'border-emerald-400 bg-emerald-950/40 shadow-[0_0_20px_rgba(52,211,153,0.25)]',
      icon: Workflow
    },
    {
      id: 'autonomous',
      badge: 'PHASE 04',
      title: 'Autonomous Smart Grid & DERMS Balancing',
      subtitle: 'Decarbonized Grid & Dynamic Tariffs',
      description: 'Orchestrate distributed energy resource (DER) curtailment, automated EV charging load shifts, and real-time dynamic time-of-use customer billing.',
      tag: 'AUTONOMOUS GRID ORCHESTRATION',
      before: 'Grid instability from renewables & rigid static tariffs',
      after: 'Automated DERMS load balancing & dynamic time-of-use rates',
      capabilities: ['DERMS Solar & BESS Balancing', 'Dynamic Time-of-Use Rates', 'Continuous NERC-CIP Compliance'],
      textColor: 'text-purple-400',
      glowColor: 'bg-purple-400',
      borderBase: 'border-purple-500/30',
      activeBorder: 'border-purple-400 bg-purple-950/40 shadow-[0_0_20px_rgba(192,132,252,0.25)]',
      icon: Zap
    }
  ];

  // Section 9: Case Studies (Zero percentages or numbers, qualitative enterprise outcomes)
  const caseStudies = [
    {
      badge: 'METROPOLITAN ELECTRIC UTILITY',
      title: 'Regional Power Utility Ingests Millions of Smart Meters with Zero Billing Latency',
      client: 'Metropolitan Electricity & Gas Provider',
      summary: 'Replaced legacy custom meter data systems with SAP MDUS, validating high-frequency consumption intervals and resolving billing bottlenecks.',
      deliverables: ['Automated Interval Validation', 'Same-Day Cycle Billing', 'Immediate Tamper Alerts'],
      desc: 'Implemented SAP AMI / MDUS integrated with S/4HANA Utilities, allowing the operator to bill millions of residential and commercial meters on time with zero manual intervention.'
    },
    {
      badge: 'TRANSMISSION SYSTEM OPERATOR',
      title: 'High-Voltage Grid Operator Eliminates Transformer Outages with Predictive APM',
      client: 'National Transmission Network Enterprise',
      summary: 'Connected online dissolved gas sensors to SAP APM, predicting substation transformer breakdown before catastrophic grid failures.',
      deliverables: ['Continuous DGA Telemetry', 'Automated Health Scoring', 'Condition-Based Work Orders'],
      desc: 'Deployed SAP Asset Performance Management with machine learning models that assess transformer oil degradation, replacing scheduled calendar maintenance with condition-driven repairs.'
    },
    {
      badge: 'STORM-PRONE ELECTRIC COOPERATIVE',
      title: 'Distribution Utility Accelerates Severe Storm Power Restoration by Hours',
      client: 'Rural & Suburban Power Distribution Network',
      summary: 'Automated emergency trouble-ticket routing and live truck GPS dispatching during severe seasonal storm events.',
      deliverables: ['Automated Crew Routing', 'GIS Outage Heatmaps', 'Live Customer SMS Notifications'],
      desc: 'Integrated SAP Field Service Management with outage management SCADA, enabling dispatchers to mobilize mutual aid crews with full visibility into spare transformer stock and road conditions.'
    }
  ];

  // Section 10: FAQs
  const faqs = [
    {
      q: 'How does SAP MDUS manage high-frequency smart meter interval data without system slowdowns?',
      a: 'SAP MDUS leverages in-memory stream processing to validate, estimate, and edit (VEE) interval meter readings in real time, storing summarized billing-relevant data into S/4HANA while retaining raw intervals for analytics.'
    },
    {
      q: 'How does Knooviq synchronize Esri ArcGIS with SAP S/4HANA for linear utility assets?',
      a: 'We implement the SAP Geographical Enablement Framework (GEF) to create a bi-directional link between Esri feature layers and SAP Functional Locations, ensuring any asset created in GIS immediately generates a corresponding ERP record.'
    },
    {
      q: 'Can SAP Field Service Management operate offline for line crews in remote outage zones?',
      a: 'Yes. The SAP Service and Asset Manager mobile app provides full offline capabilities, caching work orders, substation schematics, and truck inventory so crews can perform repairs in areas with zero cellular reception.'
    },
    {
      q: 'How does Knooviq help utilities meet strict NERC-CIP reliability compliance standards?',
      a: 'We configure SAP Access Control and security audit logging to continuously verify electronic security perimeter (ESP) access, track software patches on critical cyber assets, and automate audit report generation.'
    },
    {
      q: 'How does SAP IS-U handle complex solar net-metering and behind-the-meter batteries?',
      a: 'SAP IS-U models bi-directional interval meters with dedicated billing formulas that offset imported energy against exported solar power, applying time-of-use tariffs and issuing accurate credits to prosumer utility accounts.'
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
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=80" 
            alt="Power & Utilities High-Voltage Grid Enterprise Atmosphere" 
            className="w-full h-full object-cover object-center"
          />
          {/* Multi-layered cinematic gradient scrim: left dark for perfect readability, smooth fade to showcase vibrant grid on right */}
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
              {/* Practice Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>
              
              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Intelligent ERP for <br />
                <span className="text-cyan-400">Power & Utilities</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Unifying Grid Telemetry, Linear Asset Management & Dynamic Customer Billing into One Resilient Core.
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
                Empower power and utility enterprises with integrated{' '}
                <strong className="text-white font-semibold">SAP S/4HANA Clean Core</strong>, automated{' '}
                <strong className="text-cyan-300 font-semibold">AMI Smart Meter Ingestion</strong>, predictive linear asset maintenance, and{' '}
                <strong className="text-white font-semibold">real-time outage dispatch orchestration</strong> across generation, transmission, and distribution.
              </p>
              
              {/* Clean Feature Highlights */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Clean Core Architecture</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Smart Meter AMI Ingestion</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Sub-Second Outage Dispatch</span>
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
                  <Radio className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">SMART GRID</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">AMI Telemetry</div>
                <div className="text-xs text-slate-300 mt-0.5">High-Volume Ingestion</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Activity className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">RELIABILITY</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Substation APM</div>
                <div className="text-xs text-slate-300 mt-0.5">Predictive Health</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Workflow className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">CUSTOMER CARE</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">SAP IS-U Billing</div>
                <div className="text-xs text-slate-300 mt-0.5">Dynamic Tariff Engines</div>
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>EXECUTIVE INDUSTRY PERSPECTIVE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Modernizing the Digital Utility on <span className="text-[#0070C0]">SAP Clean Core</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-cyan-50/80 via-cyan-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Utilities succeed when grid telemetry, field crew mobilization, spatial asset registries, and customer tariffs operate as one unified digital nervous system.&rdquo;
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Knooviq equips electric, gas, and water utilities with a high-performance SAP S/4HANA backbone. Unifying smart meter intervals with geospatial asset networks minimizes outage durations, automates dynamic time-of-use billing, and simplifies federal NERC-CIP reliability compliance.
              </p>

              {/* 3 Executive Strategic Pillars */}
              <div className="space-y-2.5 pt-1">
                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-cyan-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">In-Memory Smart Meter Ingestion</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Continuous interval data validation and automated event processing without database deadlocks.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-cyan-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">GIS Geospatial Linear Asset Registry</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Single-pane-of-glass coordination linking Esri GIS layers directly with S/4HANA work orders and maintenance budgets.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-cyan-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Flexible Time-of-Use & Net Billing</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Transparent multi-register tariff configuration handling prosumer solar exports and electric vehicle charging rates.
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
                  <div className="text-[11px] font-mono uppercase text-cyan-300 font-bold">{journeySteps[activeJourneyStep].tech}</div>
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
                        <div className={`text-[9.5px] truncate font-mono ${isSelected ? 'text-cyan-100' : 'text-slate-400'}`}>{step.sublabel}</div>
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
              <span>UTILITY DOMAIN BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Operational Challenges Across the Power & Utilities Lifecycle
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When smart meter data, transmission GIS networks, and field outage teams remain trapped in siloed software, utility reliability drops and regulatory scrutiny rises.
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
          (KNOOVIQ UTILITY PLATFORM ECOSYSTEM)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#070B14] text-white border-b border-slate-800 relative overflow-hidden">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/10 via-sky-500/10 to-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-inner">
              <Workflow className="w-3.5 h-3.5 text-cyan-300" />
              <span>CIRCULAR UTILITY ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Capabilities Designed for Modern Utilities
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              A synchronized, circular enterprise platform uniting smart meter interval telemetry, linear transmission GIS, predictive substation APM, and customer billing into one continuous loop.
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
                
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/15 via-sky-500/10 to-emerald-500/15 blur-2xl rounded-full pointer-events-none" />

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
                        KNOOVIQ Utility
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-300 mt-1 tracking-wide">
                        Platform
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Cpu className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>CLEAN CORE ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Enterprise Power & Utilities Technology Blueprint
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Decoupling AMI interval streams and linear GIS geometries on SAP BTP while maintaining standard S/4HANA core upgradability.
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
              1. AMI Network & Substation Edge
            </button>
            <button
              onClick={() => setActiveArchTab('core')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'core'
                  ? 'bg-[#0070C0] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              2. SAP S/4HANA Utilities Clean Core
            </button>
            <button
              onClick={() => setActiveArchTab('cloud')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'cloud'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              3. Cloud BTP & Grid Intelligence
            </button>
          </div>

          <div className="rounded-2xl border-2 border-slate-300 bg-slate-950 text-white p-6 sm:p-8 shadow-xl">
            {activeArchTab === 'edge' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Radio className="w-6 h-6 text-cyan-400" />
                    <div>
                      <h3 className="text-lg font-bold text-white">Smart Meter Head-Ends & Substation Automation</h3>
                      <p className="text-xs text-slate-400 font-mono">IEC 61850 • DNP3 • Cellular AMI Mesh • Zigbee Han</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono">High-Frequency Pipeline</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-cyan-300 mb-1">AMI Head-End Connectors</h4>
                    <p className="text-xs text-slate-300">Continuous interval consumption ingestion, voltage sag alarms, and remote connect/disconnect.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-cyan-300 mb-1">Substation Gateway (IEC 61850)</h4>
                    <p className="text-xs text-slate-300">Transformer dissolved gas logs, busbar voltage readings, and circuit breaker trip events.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-cyan-300 mb-1">Feeder Recloser Telemetry</h4>
                    <p className="text-xs text-slate-300">Downed wire fault detection, loop automation sensors, and sectionalizer status updates.</p>
                  </div>
                </div>
              </div>
            )}

            {activeArchTab === 'core' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-6 h-6 text-sky-400" />
                    <div>
                      <h3 className="text-lg font-bold text-white">SAP S/4HANA Utilities (IS-U) Digital Clean Core</h3>
                      <p className="text-xs text-slate-400 font-mono">SAP IS-U • SAP MDUS • SAP EAM • Universal Financials</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-mono">Clean Core Standard</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-sky-300 mb-1">Meter Data Management (MDUS)</h4>
                    <p className="text-xs text-slate-300">High-speed interval consumption validation, estimation, and editing (VEE) directly into billing.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-sky-300 mb-1">Dynamic IS-U Tariff Engine</h4>
                    <p className="text-xs text-slate-300">Time-of-use rates, net metering reconciliation, unbilled revenue accruals, and paperless e-billing.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-sky-300 mb-1">Linear EAM & Work Orders</h4>
                    <p className="text-xs text-slate-300">Preventive maintenance work orders tied to exact pole GPS coordinates and feeder segment IDs.</p>
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
                      <h3 className="text-lg font-bold text-white">SAP BTP & Predictive Smart Grid AI</h3>
                      <p className="text-xs text-slate-400 font-mono">SAP APM • Esri Geo-Framework • DERMS Cloud</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono">Cognitive Layer</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-emerald-300 mb-1">Predictive Transformer APM</h4>
                    <p className="text-xs text-slate-300">DGA oil degradation models calculating Remaining Useful Life (RUL) across substation assets.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-emerald-300 mb-1">Esri Geospatial Cloud Sync</h4>
                    <p className="text-xs text-slate-300">Bi-directional spatial sync updating GIS asset layers with live S/4HANA work order statuses.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-emerald-300 mb-1">DERMS & Solar Load Balancing</h4>
                    <p className="text-xs text-slate-300">Predictive voltage regulation and virtual power plant aggregation balancing rooftop solar surges.</p>
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Boxes className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>MODULAR UTILITY PACKAGES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Pre-Configured Enterprise Utility Modules
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Rapidly deployable solution packages engineered for electric generation, transmission, distribution, and commercial retail billing.
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
                      <span className="text-[10px] font-mono font-bold text-[#0070C0] uppercase tracking-wider bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
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
              Standardizing Complex Utility Operations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              How Knooviq replaces fragile custom scripts with native SAP for Utilities enterprise standards.
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
                  <span>Nightly batch scripts parsing AMI meter intervals that lock billing tables.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Static spreadsheets tracking transformer dissolved gas analysis (DGA).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Disconnected GIS shapefiles creating duplicate equipment numbers in ERP.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Manual email dispatching of line crews during severe weather emergency events.</span>
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
                  <span>High-speed SAP MDUS processing with automated interval VEE verification.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>Automated SAP APM condition health scoring for high-voltage transformers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>Native SAP Geographical Enablement Framework (GEF) with Esri ArcGIS sync.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>Intelligent storm crew dispatching with mobile offline field execution.</span>
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
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              <RefreshCw className="w-3.5 h-3.5 text-cyan-300" />
              <span>TRANSFORMATION ROADMAP & DELTA INSPECTOR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Four Phases to Autonomous Smart Grid Operations
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Inspect how legacy manual utility operations transform into resilient, self-healing grid workflows across every phase of deployment.
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
                      <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
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
          SECTION 9: CASE STUDIES (Zero numbers or percentages, qualitative enterprise deliverables)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Award className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PROVEN CLIENT TRANSFORMATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Enterprise Client Success Stories
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Real operational outcomes delivered for metropolitan distribution utilities, high-voltage transmission operators, and electric cooperatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold text-[#0070C0] bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100 uppercase tracking-wider">
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
              Power & Utilities Architecture Advisory
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Technical considerations for utility executives upgrading legacy CIS and EAM platforms to SAP S/4HANA.
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
            <span>CONNECT YOUR UTILITY ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build a Smarter Power & Utilities Enterprise?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Connect your substations, transmission lines, smart meters, and customer care with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact('Utilities Architecture Advisory')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to Our Utilities Experts</span>
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

export default PowerUtilitiesIndustryPage;
