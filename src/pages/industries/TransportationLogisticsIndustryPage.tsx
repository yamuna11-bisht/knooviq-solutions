import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Truck, 
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
  Clock, 
  Workflow, 
  Compass, 
  Cpu, 
  Zap, 
  Boxes, 
  HelpCircle,
  Award,
  Globe2,
  RefreshCw,
  FileText,
  Radio,
  Server,
  AlertTriangle,
  FolderKanban,
  FileCheck,
  Split,
  Binary,
  Plane,
  Navigation,
  Anchor
} from 'lucide-react';

interface IndustryPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const TransportationLogisticsIndustryPage: React.FC<IndustryPageProps> = ({ onOpenContact }) => {
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

  // Section 4: Circular Chevron Radial Wheel Segments (KNOOVIQ Transportation & Aerospace Ecosystem)
  const wheelSegments = [
    {
      id: 'multimodal-routing',
      title: 'Multi-Modal Dynamic Freight Optimization',
      desc: 'Algorithmically combining road, ocean, rail, and air legs into optimal cost-effective carrier freight orders.',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(2, 132, 199, 0.3)',
      icon: Navigation
    },
    {
      id: 'carrier-settlement',
      title: 'Automated Carrier Freight Audit & Settlement',
      desc: 'Three-way matching reconciling contract rate agreements, bill of ladings, and carrier invoices with zero overpayment.',
      side: 'right',
      color: '#0EA5E9',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(14, 165, 233, 0.3)',
      icon: FileCheck
    },
    {
      id: 'rotable-mro',
      title: 'Aerospace Rotable Asset Management',
      desc: 'Tracking high-value rotable avionics, turbine blades, and landing gears through closed-loop overhaul cycles.',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.3)',
      icon: RefreshCw
    },
    {
      id: 'life-limited-parts',
      title: 'Life-Limited Parts (LLP) Airworthiness Ledger',
      desc: 'Strict cumulative flight hour and cycle tracking ensuring continuous compliance with FAA and EASA mandates.',
      side: 'right',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.3)',
      icon: ShieldCheck
    },
    {
      id: 'flightline-turnaround',
      title: 'Flight-Line Aircraft Turnaround Execution',
      desc: 'Synchronizing line maintenance crews, ground equipment, and critical spare parts to minimize aircraft on ground (AOG).',
      side: 'left',
      color: '#F97316',
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: Plane
    },
    {
      id: 'coldchain-telemetry',
      title: 'In-Transit Cold-Chain & Geofence Telemetry',
      desc: 'Real-time temperature, shock, and tilt sensor monitoring with automated rerouting triggers for sensitive cargo.',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.3)',
      icon: Activity
    },
    {
      id: 'carrier-collaboration',
      title: 'Digital Carrier Collaboration & Tendering',
      desc: 'Automated broadcast and waterfall tendering portals connecting 3PL carriers with automated booking confirmations.',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.3)',
      icon: Globe2
    },
    {
      id: 'customs-green-logistics',
      title: 'Customs Clearance & Carbon Emissions Ledger',
      desc: 'Automated global trade documentation generation coupled with carbon emissions tracking per transport lane.',
      side: 'left',
      color: '#3B82F6',
      textColor: 'text-blue-400',
      bgGlow: 'rgba(59, 130, 246, 0.3)',
      icon: FileText
    }
  ];

  // Helper calculation for interlocking circular chevron path
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

  // Section 2: Journey Steps
  const journeySteps = [
    {
      id: 'planning',
      label: 'Freight Planning',
      sublabel: 'Multi-Modal Cockpit',
      tech: 'SAP Transportation Management',
      desc: 'Consolidating delivery requirements into multi-modal transport units, optimizing vehicle capacity and transit routes.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      icon: Navigation
    },
    {
      id: 'tendering',
      label: 'Carrier Tendering',
      sublabel: 'Dynamic Tendering',
      tech: 'SAP Business Network Logistics',
      desc: 'Broadcasting shipments to approved freight forwarders, evaluating bids, and securing automated booking confirmations.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
      icon: Globe2
    },
    {
      id: 'tracking',
      label: 'In-Transit Telemetry',
      sublabel: 'Milestone Events',
      tech: 'SAP Global Track & Trace',
      desc: 'Capturing live GPS, AIS marine signals, and temperature telemetry with automated exception alerts for delays.',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
      icon: Activity
    },
    {
      id: 'mro',
      label: 'Flight-Line MRO',
      sublabel: 'AOG Turnaround',
      tech: 'SAP S/4HANA Aerospace MRO',
      desc: 'Orchestrating line maintenance technicians, issuing certified rotable components, and clearing deferred defect items.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
      icon: Plane
    },
    {
      id: 'overhaul',
      label: 'Rotable Overhaul',
      sublabel: 'Component Genealogy',
      tech: 'SAP Plant Maintenance & QM',
      desc: 'Tracking life-limited parts through teardown, non-destructive testing (NDT), repair, and digital airworthiness release.',
      image: 'https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=1200&q=80',
      icon: RefreshCw
    },
    {
      id: 'settlement',
      label: 'Freight Audit',
      sublabel: 'Automated Settlement',
      tech: 'SAP TM Freight Settlement',
      desc: 'Reconciling carrier freight invoices against agreed rate cards and GPS delivery timestamps, preventing billing disputes.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      icon: FileCheck
    }
  ];

  // Section 3: Industry Challenges & Bottlenecks Data (6 Cards)
  const industryChallenges = [
    {
      id: 'freight-leakage',
      tag: 'FINANCIAL ACCURACY',
      title: 'Carrier Freight Billing Leakage',
      desc: 'Unverified fuel surcharges, detention penalties, and demurrage fees slip past manual invoice checks, inflating transport costs.',
      status: 'FINANCIAL DRAIN',
      statusColor: 'text-rose-400 bg-rose-950/60 border-rose-800'
    },
    {
      id: 'aog-delays',
      tag: 'AIRCRAFT READINESS',
      title: 'Aircraft on Ground (AOG) Downtime',
      desc: 'Missing rotable components or delayed airworthiness certifications ground commercial and defense aircraft unexpectedly.',
      status: 'CRITICAL SHUTDOWN',
      statusColor: 'text-rose-400 bg-rose-950/60 border-rose-800'
    },
    {
      id: 'multimodal-blindspots',
      tag: 'VISIBILITY DEFICIT',
      title: 'Multi-Modal In-Transit Blindspots',
      desc: 'Cargo transfers between ocean vessels, rail yards, and long-haul trucks lack unified milestone tracking, delaying plant receipts.',
      status: 'SUPPLY FRICTION',
      statusColor: 'text-amber-400 bg-amber-950/60 border-amber-800'
    },
    {
      id: 'llp-compliance-risk',
      tag: 'AIRWORTHINESS AUDIT',
      title: 'Life-Limited Parts (LLP) Tracking Failures',
      desc: 'Discrepancies in flight hour and cycle records risk non-compliance with FAA and EASA mandates, risking fleet grounding.',
      status: 'AUDIT GROUNDING',
      statusColor: 'text-rose-400 bg-rose-950/60 border-rose-800'
    },
    {
      id: 'empty-miles',
      tag: 'CAPACITY UNDERUTILIZATION',
      title: 'Deadhead Miles & Inefficient Load Fill',
      desc: 'Sub-optimal freight planning leads to partially loaded trailers and empty return legs, wasting fuel and operational hours.',
      status: 'CAPACITY LOSS',
      statusColor: 'text-amber-400 bg-amber-950/60 border-amber-800'
    },
    {
      id: 'customs-holds',
      tag: 'TRADE COMPLIANCE',
      title: 'Border Clearance & Customs Bottlenecks',
      desc: 'Missing export control documentation, incorrect harmonized tariff codes, or delayed electronic manifests delay global freight.',
      status: 'BORDER DETENTION',
      statusColor: 'text-amber-400 bg-amber-950/60 border-amber-800'
    }
  ];

  // Section 5: Architecture Tabs Data
  const architectureTabs = [
    {
      id: 'core',
      name: 'Digital Transportation Core',
      tag: 'SAP S/4HANA TRANSPORTATION MANAGEMENT',
      headline: 'Integrated Freight Execution & Commercial Ledger',
      desc: 'The authoritative logistics core managing freight orders, multi-modal routing, carrier agreements, and financial settlements.',
      capabilities: [
        'Centralized freight order planning optimizing multi-modal road, ocean, rail, and air legs',
        'Automated three-way freight audit matching invoices against contracted rate sheets',
        'Native integration with SAP S/4HANA Finance for immediate accruals and payment releases',
        'Global trade services integration ensuring electronic customs and export control compliance'
      ],
      diagramDetails: [
        { label: 'Freight Planning', value: 'Multi-Modal Optimization' },
        { label: 'Carrier Settlement', value: 'Automated 3-Way Match' },
        { label: 'Ledger Posting', value: 'Real-Time Accruals' },
        { label: 'Trade Services', value: 'Automated Customs Manifest' }
      ]
    },
    {
      id: 'edge',
      name: 'Aerospace MRO & Hangar Edge',
      tag: 'SAP S/4HANA AEROSPACE & DEFENSE MRO',
      headline: 'Flight-Line Work Execution & Rotable Component Hub',
      desc: 'Connecting aircraft maintenance hangars, component overhaul shops, and field technicians in real time.',
      capabilities: [
        'Life-limited parts tracking recording cumulative flight hours, landings, and operating cycles',
        'Rotable pool management coordinating loaner exchanges, teardown inspections, and overhauls',
        'Mobile maintenance terminals for hangar technicians with digital task cards and sign-offs',
        'Immediate airworthiness certificate generation compliant with FAA and EASA requirements'
      ],
      diagramDetails: [
        { label: 'Life-Limited Parts', value: 'Cumulative Flight Cycles' },
        { label: 'Rotable Pool', value: 'Closed-Loop Overhaul' },
        { label: 'Mobile Work Orders', value: 'Paperless Hangar' },
        { label: 'Airworthiness', value: 'FAA / EASA Verification' }
      ]
    },
    {
      id: 'cloud',
      name: 'Logistics Network Intelligence',
      tag: 'SAP BUSINESS NETWORK FOR LOGISTICS',
      headline: 'Global Track & Trace & Predictive ETA Cockpit',
      desc: 'Leveraging cloud collaboration to connect carriers, marine AIS signals, and GPS telemetry into a unified command center.',
      capabilities: [
        'Real-time shipment visibility ingesting GPS, flight radar, and marine vessel AIS telemetry',
        'Automated carrier collaboration portal for tendering, dock scheduling, and electronic invoicing',
        'Predictive delay alerts forecasting shipment disruptions based on weather and port congestion',
        'Clean Core extensibility integrating specialized telematic sensors without modifying ERP code'
      ],
      diagramDetails: [
        { label: 'Live Telemetry', value: 'Multi-Modal GPS & AIS' },
        { label: 'Carrier Network', value: 'Cloud Tendering' },
        { label: 'Predictive ETA', value: 'Disruption Alerts' },
        { label: 'Clean Extension', value: 'SAP BTP Architecture' }
      ]
    }
  ];

  // Section 6: Modular Solutions Data
  const modularSolutions = [
    {
      category: 'CORE',
      title: 'Multi-Modal Freight Execution & Rate Engine',
      badge: 'SAP TM CORE',
      desc: 'Plan, tender, and execute multi-modal freight operations with dynamic rate calculation and automated carrier assignment.',
      features: [
        'Multi-modal shipment consolidation and routing',
        'Carrier rate card contract management',
        'Dynamic waterfall and broadcast tendering',
        'Automated freight cost distribution and accruals'
      ]
    },
    {
      category: 'MRO',
      title: 'Aerospace Rotable Pool & Overhaul Execution',
      badge: 'AEROSPACE MRO',
      desc: 'Manage high-value aviation rotable components through complete teardown, non-destructive inspection, and airworthiness release.',
      features: [
        'Life-limited part cycle tracking and forecasting',
        'Rotable exchange pool and loaner administration',
        'Component repair work order bill-of-materials',
        'Electronic maintenance release sign-offs'
      ]
    },
    {
      category: 'SETTLEMENT',
      title: 'Automated Carrier Freight Audit & Dispute Resolution',
      badge: 'FREIGHT SETTLEMENT',
      desc: 'Eliminate freight overcharges through automated three-way matching of rate agreements, GPS delivery events, and carrier invoices.',
      features: [
        'Automated fuel surcharge and accessorial verification',
        'Carrier electronic invoice intake and reconciliation',
        'Dispute management portal for freight forwarders',
        'Instant financial ledger accrual and payment release'
      ]
    },
    {
      category: 'VISIBILITY',
      title: 'Global Track & Trace Command Center',
      badge: 'LOGISTICS NETWORK',
      desc: 'Real-time multi-modal shipment monitoring tracking temperature, location, and milestone progress across global supply routes.',
      features: [
        'Real-time GPS, maritime AIS, and flight radar sync',
        'Cold-chain temperature excursion alerts',
        'Predictive port congestion and delay modeling',
        'Customer self-service delivery tracking portal'
      ]
    }
  ];

  // Filtered Modular Solutions
  const filteredSolutions = activeSolutionCategory === 'ALL' 
    ? modularSolutions 
    : modularSolutions.filter(s => s.category === activeSolutionCategory);

  // Section 7: Standardization & Clean Core Matrix
  const matrixRows = [
    {
      dimension: 'Freight Planning',
      legacy: 'Decentralized spreadsheets and manual phone calls to book disparate carrier trucks and shipping containers.',
      cleanCore: 'Centralized SAP TM cockpit optimizing multi-modal vehicle consolidation, routes, and tendering.',
      valueImpact: 'Minimized Transport Spend'
    },
    {
      dimension: 'Freight Audit',
      legacy: 'Manual sample checking of paper carrier invoices allowing unverified surcharges and overpayments.',
      cleanCore: 'Automated three-way matching reconciling contract rate sheets against verified GPS delivery milestones.',
      valueImpact: 'Zero Freight Overpayments'
    },
    {
      dimension: 'Aircraft Maintenance',
      legacy: 'Paper logbooks and scattered maintenance sheets causing delayed AOG turnarounds and compliance gaps.',
      cleanCore: 'Digitized line maintenance execution with instant rotable spare reservations and electronic sign-offs.',
      valueImpact: 'Maximum Fleet Readiness'
    },
    {
      dimension: 'Life-Limited Parts',
      legacy: 'Manual flight hour calculation spreadsheets vulnerable to audit discrepancies and regulatory grounding.',
      cleanCore: 'Automated airworthiness ledgers tracking cumulative cycles directly connected to flight operations.',
      valueImpact: 'Flawless Airworthiness'
    },
    {
      dimension: 'Shipment Tracking',
      legacy: 'Periodic phone check-ins with carriers leaving dispatch teams unaware of in-transit port delays.',
      cleanCore: 'Unified global logistics network ingesting GPS, marine AIS, and flight telemetry in real time.',
      valueImpact: 'Continuous Pipeline Visibility'
    }
  ];

  // Section 8: Transformation Roadmap Stages Data
  const transformationStages = [
    {
      badge: 'FOUNDATION',
      title: 'Transportation Core & Freight Settlement',
      subtitle: 'Freight Master Data & Automated Audit',
      tag: 'CORE UNIFICATION',
      textColor: 'text-sky-400',
      description: 'Deploy SAP TM core, establish master carrier agreements, and automate freight audit reconciliation.',
      before: 'Unmonitored freight expenditures and manual auditing of complex third-party carrier invoices.',
      after: 'Unified SAP Transportation Management managing rate agreements and automated invoice verification.',
      metrics: ['Single-source-of-truth carrier rate cards', 'Automated three-way invoice matching', 'Standardized transport order creation']
    },
    {
      badge: 'INTEGRATION',
      title: 'Multi-Modal Optimization & Cloud Tendering',
      subtitle: 'Dynamic Routing & Carrier Collaboration',
      tag: 'LOGISTICS AGILITY',
      textColor: 'text-cyan-400',
      description: 'Activate algorithmic vehicle consolidation, multi-modal routing, and electronic carrier tendering portals.',
      before: 'Disjointed booking of individual road and ocean legs with high deadhead mileage.',
      after: 'Automated multi-modal optimization combining transport legs and securing best carrier rates.',
      metrics: ['Optimal trailer load fill rates', 'Automated carrier tendering workflows', 'Minimized freight accessorial costs']
    },
    {
      badge: 'ORCHESTRATION',
      title: 'Aerospace MRO & Life-Limited Parts Ledger',
      subtitle: 'Hangar Execution & Rotable Governance',
      tag: 'AEROSPACE READINESS',
      textColor: 'text-emerald-400',
      description: 'Deploy specialized aerospace maintenance solutions tracking rotable component overhauls and life-limited parts.',
      before: 'Manual paper logbooks and disconnected component pools causing expensive AOG groundings.',
      after: 'Integrated hangar execution tracking cumulative cycles and managing closed-loop rotable pools.',
      metrics: ['Real-time AOG part availability', 'Automated flight cycle accumulation', 'Digital airworthiness certifications']
    },
    {
      badge: 'AUTONOMY',
      title: 'Predictive Global Track & Trace Command Center',
      subtitle: 'Telemetry Streaming & Disruption Modeling',
      tag: 'ENTERPRISE SCALE',
      textColor: 'text-purple-400',
      description: 'Implement real-time multi-modal telemetry streaming, predictive delay alerts, and carbon emissions accounting.',
      before: 'Blind transit periods between logistics handoffs and reactive customer communication.',
      after: 'Complete global visibility command center predicting port bottlenecks and rerouting shipments proactively.',
      metrics: ['Real-time multi-modal shipment telemetry', 'Predictive delay mitigation alerts', 'Comprehensive green freight carbon accounting']
    }
  ];

  // Section 10: FAQs
  const faqs = [
    {
      q: 'How does SAP Transportation Management (TM) handle complex carrier freight rate agreements?',
      a: 'SAP TM features an advanced Charge Calculation engine that models multi-dimensional rate matrices, including distance brackets, dimensional weight, tiered volume discounts, dynamic fuel surcharges, and localized accessorial fees. When a freight order is planned, the system evaluates carrier contracts to select the most cost-effective provider and creates precise financial accruals automatically.'
    },
    {
      q: 'How does the platform support Aerospace & Defense MRO compliance with FAA and EASA regulations?',
      a: 'SAP S/4HANA Aerospace & Defense MRO provides full lifecycle traceability for life-limited parts (LLPs) and rotable components. The system records cumulative flight hours, engine operating cycles, and maintenance touchpoints in a tamper-resistant digital ledger, automatically generating required release-to-service certificates and ensuring complete regulatory audit compliance.'
    },
    {
      q: 'Can third-party freight forwarders and carriers interact with the system without direct ERP access?',
      a: 'Yes. Through SAP Business Network for Logistics, external carriers receive freight tendering requests, confirm bookings, submit electronic proof of delivery (ePOD), and transmit digital freight invoices through secure cloud portals or standard EDI/API connections, keeping your internal SAP core secure and clean.'
    },
    {
      q: 'What is the advantage of KNOOVIQ’s Clean Core architecture for logistics and aerospace enterprises?',
      a: 'By developing custom carrier telematics integrations, specialized AOG routing algorithms, and bespoke flight-line apps on SAP Business Technology Platform (BTP), KNOOVIQ keeps the core SAP ERP completely standard. This ensures mission-critical logistics operations run without interruption while maintaining continuous upgradeability.'
    }
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=2000&q=80" 
            alt="Transportation, Logistics & Aerospace / Defense MRO" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            
            {/* Practice Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider mb-6"
            >
              <Plane className="w-4 h-4 text-sky-400" />
              <span>TRANSPORTATION, LOGISTICS & AEROSPACE / DEFENSE MRO</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4"
            >
              Global Logistics & Aerospace with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
                Precision Clean Core
              </span>
            </motion.h1>

            {/* Subheadline / Value Proposition */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-6 font-normal"
            >
              Unify multi-modal freight optimization, automated carrier freight audits, aerospace rotable pool overhauls, and life-limited parts airworthiness on SAP S/4HANA.
            </motion.p>

            {/* Feature Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Multi-Modal Dynamic Freight Optimization</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Aerospace Rotable Pool & Overhaul Core</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Continuous FAA & EASA Airworthiness Tracking</span>
              </span>
            </motion.div>

            {/* Architectural Trust Ribbon */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
            >
              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">FREIGHT OPTIM</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">Multi-Modal Cockpit</div>
                <div className="text-[10px] text-slate-300">Carrier Dynamic Tender</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">FREIGHT AUDIT</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">Automated 3-Way Match</div>
                <div className="text-[10px] text-slate-300">Zero Overcharges</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <Plane className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">AEROSPACE MRO</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">Rotable Component Pool</div>
                <div className="text-[10px] text-slate-300">Rapid AOG Resolution</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">AIRWORTHINESS</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">Life-Limited Parts</div>
                <div className="text-[10px] text-slate-300">FAA / EASA Audit Ready</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE INDUSTRY PERSPECTIVE & JOURNEY VISUALIZER
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
                <Activity className="w-3.5 h-3.5 text-sky-400" />
                <span>EXECUTIVE INDUSTRY PERSPECTIVE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Aligning Global Multi-Modal Logistics with <span className="text-sky-400">Asset Airworthiness</span>
              </h2>

              <div className="border-l-4 border-sky-500 pl-4 py-2 bg-white/5 rounded-r-xl">
                <p className="text-sm font-semibold text-slate-200 leading-relaxed italic">
                  &ldquo;In transportation and defense aviation, operational success demands real-time synchronization—where multi-modal carrier routes are optimized continuously and serialized components maintain indisputable airworthiness traceability.&rdquo;
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Logistics networks and aerospace operators face escalating operational complexity from volatile fuel surcharges, uncoordinated multi-modal handoffs, and strict civil and defense aviation safety standards. A single grounded aircraft or disputed freight invoice creates massive financial friction. Knooviq establishes an automated digital logistics thread uniting freight planning, carrier settlement, rotable inventory, and airworthiness ledgers into a unified SAP Clean Core.
              </p>

              {/* Information Checklist Grid (Zero Numbers/Percents) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Multi-modal dynamic route optimization reducing freight spend and carbon footprint',
                  'Automated three-way invoice matching preventing unverified accessorial charges',
                  'Closed-loop rotable component management minimizing Aircraft on Ground downtime',
                  'Tamper-resistant digital airworthiness ledgers tracking cumulative flight cycles'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Journey Visualizer */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-slate-900/90 border border-white/10 p-5 sm:p-6 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                      STAGE WORKFLOW
                    </span>
                  </div>
                  <span className="text-xs font-mono text-sky-400 font-semibold">
                    {journeySteps[activeJourneyStep].label}
                  </span>
                </div>

                {/* Workflow Stage Buttons */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 mb-5">
                  {journeySteps.map((step, idx) => {
                    const isSelected = activeJourneyStep === idx;
                    const StepIcon = step.icon;
                    return (
                      <button
                        key={step.id}
                        onClick={() => setActiveJourneyStep(idx)}
                        className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                          isSelected
                            ? 'bg-sky-500/20 border-sky-400 text-sky-300 shadow-md'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <StepIcon className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-mono font-semibold truncate w-full">
                          {step.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Step Showcase Card */}
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-950">
                  <div className="h-44 sm:h-52 w-full relative">
                    <img 
                      src={journeySteps[activeJourneyStep].image} 
                      alt={journeySteps[activeJourneyStep].label} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-wider block">
                          {journeySteps[activeJourneyStep].sublabel}
                        </span>
                        <h4 className="text-base font-bold text-white">
                          {journeySteps[activeJourneyStep].label}
                        </h4>
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md text-slate-200 border border-white/15">
                        {journeySteps[activeJourneyStep].tech}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {journeySteps[activeJourneyStep].desc}
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: KEY CHALLENGES & DOMAIN BOTTLENECKS (6 Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-400/30 text-xs font-mono font-bold uppercase tracking-wider text-rose-300">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
              <span>INDUSTRY BOTTLENECKS & RISKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Operational Vulnerabilities in Transportation & Aerospace MRO
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Structural bottlenecks that inflate freight expenditures, ground commercial fleets, and compromise airworthiness compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industryChallenges.map((challenge) => (
              <div 
                key={challenge.id}
                className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-sky-400/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      {challenge.tag}
                    </span>
                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border ${challenge.statusColor}`}>
                      {challenge.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                    {challenge.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {challenge.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Standard SAP Resolution</span>
                  <span className="text-sky-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>Mitigate</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CIRCULAR CHEVRON RADIAL WHEEL (8 Segments)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-white/10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
              <Compass className="w-3.5 h-3.5 text-sky-400" />
              <span>PLATFORM ECOSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              KNOOVIQ Transportation & Aerospace Ecosystem
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Eight interlocking capability modules synchronizing freight logistics and aerospace maintenance operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Flanking Capability Cards (4) */}
            <div className="lg:col-span-3 space-y-3 order-2 lg:order-1">
              {wheelSegments.filter(s => s.side === 'left').map((segment, idx) => {
                const isHovered = hoveredWheelIndex === (idx + 4);
                const SegmentIcon = segment.icon;
                return (
                  <div
                    key={segment.id}
                    onMouseEnter={() => setHoveredWheelIndex(idx + 4)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isHovered 
                        ? 'bg-white/10 border-sky-400 shadow-lg scale-[1.02]' 
                        : 'bg-white/5 border-white/10 hover:bg-white/[0.08]'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <SegmentIcon className={`w-4 h-4 ${segment.textColor}`} />
                      <h4 className="text-xs font-bold text-white truncate">{segment.title}</h4>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-snug">{segment.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Center Circular Radial SVG Wheel (6 cols) */}
            <div className="lg:col-span-6 flex items-center justify-center order-1 lg:order-2">
              <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px]">
                <svg 
                  viewBox="0 0 500 500" 
                  className="w-full h-full drop-shadow-2xl transition-all"
                >
                  <circle cx="250" cy="250" r="230" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <circle cx="250" cy="250" r="105" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />

                  {wheelSegments.map((segment, index) => {
                    const isHovered = hoveredWheelIndex === index;
                    const path = getChevronPath(index);
                    const coords = getIconCoords(index);
                    const SegmentIcon = segment.icon;

                    return (
                      <g 
                        key={segment.id}
                        onMouseEnter={() => setHoveredWheelIndex(index)}
                        onMouseLeave={() => setHoveredWheelIndex(null)}
                        className="cursor-pointer transition-all duration-300"
                      >
                        <path
                          d={path}
                          fill={isHovered ? segment.color : 'rgba(15, 23, 42, 0.85)'}
                          stroke={segment.color}
                          strokeWidth={isHovered ? '2.5' : '1.5'}
                          className="transition-all duration-300"
                        />
                        <foreignObject 
                          x={coords.x - 12} 
                          y={coords.y - 12} 
                          width="24" 
                          height="24"
                          className="pointer-events-none"
                        >
                          <div className="w-full h-full flex items-center justify-center">
                            <SegmentIcon 
                              className={`w-4 h-4 transition-colors ${
                                isHovered ? 'text-white' : segment.textColor
                              }`} 
                            />
                          </div>
                        </foreignObject>
                      </g>
                    );
                  })}

                  {/* Core Center Hub */}
                  <circle cx="250" cy="250" r="80" fill="#0284C7" className="drop-shadow-lg" />
                  <circle cx="250" cy="250" r="74" fill="#0B1528" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="2" />
                </svg>

                {/* Hub Center Label Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center p-4">
                  <Plane className="w-5 h-5 text-cyan-400 mb-1" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 font-bold">KNOOVIQ</span>
                  <span className="text-xs font-black text-white leading-tight">TM & MRO</span>
                  <span className="text-[9px] font-mono text-slate-400">CLEAN CORE</span>
                </div>
              </div>
            </div>

            {/* Right Flanking Capability Cards (4) */}
            <div className="lg:col-span-3 space-y-3 order-3">
              {wheelSegments.filter(s => s.side === 'right').map((segment, idx) => {
                const isHovered = hoveredWheelIndex === idx;
                const SegmentIcon = segment.icon;
                return (
                  <div
                    key={segment.id}
                    onMouseEnter={() => setHoveredWheelIndex(idx)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isHovered 
                        ? 'bg-white/10 border-sky-400 shadow-lg scale-[1.02]' 
                        : 'bg-white/5 border-white/10 hover:bg-white/[0.08]'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <SegmentIcon className={`w-4 h-4 ${segment.textColor}`} />
                      <h4 className="text-xs font-bold text-white truncate">{segment.title}</h4>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-snug">{segment.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CLEAN CORE ARCHITECTURE LAYERS (3 Tabs)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
              <Server className="w-3.5 h-3.5 text-sky-400" />
              <span>CLEAN CORE ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Three-Tier Logistics & MRO Architecture
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Decoupling fleet execution and telematics from the central financial ledger and airworthiness registers.
            </p>
          </div>

          {/* Architecture Layer Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {architectureTabs.map((tab) => {
              const isActive = activeArchTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveArchTab(tab.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider transition-all border ${
                    isActive
                      ? 'bg-sky-500/20 border-sky-400 text-sky-300 shadow-md'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Active Layer Details */}
          {(() => {
            const currentTab = architectureTabs.find(t => t.id === activeArchTab) || architectureTabs[0];
            return (
              <div className="rounded-2xl bg-slate-950/90 border border-white/10 p-6 sm:p-8 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  <div className="lg:col-span-7 space-y-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                      {currentTab.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {currentTab.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {currentTab.desc}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      {currentTab.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-slate-900 border border-white/10">
                      {currentTab.diagramDetails.map((item, dIdx) => (
                        <div key={dIdx} className="p-3 rounded-lg bg-white/5 border border-white/10">
                          <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                            {item.label}
                          </span>
                          <span className="text-xs font-bold text-sky-300">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: MODULAR TAILORED SOLUTIONS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
              <Boxes className="w-3.5 h-3.5 text-sky-400" />
              <span>MODULAR SOLUTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Specialized Solutions for Transportation & MRO
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              High-impact functional modules delivering immediate cost containment, visibility, and fleet readiness.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {['ALL', 'CORE', 'MRO', 'SETTLEMENT', 'VISIBILITY'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveSolutionCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                  activeSolutionCategory === cat
                    ? 'bg-sky-500/20 border-sky-400 text-sky-300 shadow-md'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Solution Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSolutions.map((sol, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-sky-400/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-300 border border-sky-500/30 font-bold">
                      {sol.badge}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      {sol.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {sol.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {sol.desc}
                  </p>

                  <div className="space-y-2 pt-2">
                    {sol.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">Architecture Scope: Clean Core</span>
                  <button
                    onClick={() => onOpenContact(`Transportation & MRO: ${sol.title}`)}
                    className="text-xs font-bold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Request Blueprint</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: LEGACY VS CLEAN CORE STANDARDIZATION MATRIX
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
              <Split className="w-3.5 h-3.5 text-sky-400" />
              <span>STANDARDIZATION MATRIX</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Legacy Practice vs. Modern Clean Core
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Replacing manual logistics coordination and paper logbooks with automated enterprise execution.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-2xl overflow-hidden border border-white/10 text-left text-xs">
              <thead className="bg-slate-950 text-slate-300 font-mono text-[11px] uppercase">
                <tr>
                  <th className="p-4 border-b border-white/10">Process Dimension</th>
                  <th className="p-4 border-b border-white/10 text-rose-300">Legacy Approach</th>
                  <th className="p-4 border-b border-white/10 text-sky-300">Modern Clean Core (KNOOVIQ)</th>
                  <th className="p-4 border-b border-white/10 text-emerald-300">Measurable Value Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-slate-950/60">
                {matrixRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-white whitespace-nowrap">{row.dimension}</td>
                    <td className="p-4 text-slate-400 leading-relaxed">{row.legacy}</td>
                    <td className="p-4 text-slate-200 leading-relaxed font-medium">{row.cleanCore}</td>
                    <td className="p-4 text-emerald-400 font-mono font-semibold whitespace-nowrap">{row.valueImpact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: TRANSFORMATION ROADMAP
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
              <TrendingUp className="w-3.5 h-3.5 text-sky-400" />
              <span>TRANSFORMATION ROADMAP</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Phased Transportation & Aerospace MRO Roadmap
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Four progressive architectural stages transitioning logistics and defense aviation to autonomous Clean Core orchestration.
            </p>
          </div>

          {/* Stages Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {transformationStages.map((stage, sIdx) => {
              const isSelected = activeTransformStage === sIdx;
              return (
                <div
                  key={sIdx}
                  onClick={() => setActiveTransformStage(sIdx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-sky-500/20 border-sky-400 shadow-xl scale-[1.02]'
                      : 'bg-white/5 border-white/10 hover:bg-white/[0.08]'
                  }`}
                >
                  <div className="space-y-2">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${stage.textColor}`}>
                      {stage.badge}
                    </span>
                    <h4 className="text-sm font-bold text-white">{stage.title}</h4>
                    <p className="text-[11px] text-slate-300 leading-snug">{stage.subtitle}</p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-slate-400">{stage.tag}</span>
                    <span className={`font-bold ${isSelected ? 'text-sky-300' : 'text-slate-400'}`}>
                      {isSelected ? 'ACTIVE' : 'EXPLORE'}
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
              <div className="rounded-2xl bg-slate-900 border border-white/10 p-6 shadow-2xl backdrop-blur-md">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider ${currentStage.textColor}`}>
                      {currentStage.badge} ARCHITECTURAL DELTA
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5">
                      {currentStage.title} &mdash; {currentStage.subtitle}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-mono">
                    Scope: {currentStage.tag}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/30">
                    <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider mb-1">Legacy State</div>
                    <p className="text-xs text-slate-200">{currentStage.before}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                    <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">Modernized Clean Core</div>
                    <p className="text-xs text-slate-200">{currentStage.after}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 mt-4 border-t border-white/10">
                  <span className="text-xs font-mono text-slate-400 uppercase">Key Results:</span>
                  {currentStage.metrics.map((m, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-sky-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{m}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: STRATEGIC ENTERPRISE VALUE DRIVERS (Zero Numbers/Percents)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>ENTERPRISE SAFEGUARDS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Strategic Value Drivers for Transportation & Aerospace
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Architectural advantages realized by transportation networks and defense aviation fleets running on SAP Clean Core.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between hover:border-sky-400 transition-colors">
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 inline-block">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-white">Zero Freight Overcharges</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Automated three-way invoice matching reconciles contracted freight rates with GPS delivery proof, eliminating billing leakage completely.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 mt-4 text-[10px] font-mono text-sky-400 font-bold uppercase">
                SETTLEMENT INTEGRITY
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between hover:border-sky-400 transition-colors">
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 inline-block">
                  <Plane className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-white">Rapid AOG Turnaround</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Closed-loop rotable component pool administration coordinates replacement loaners instantly, minimizing expensive aircraft on ground downtime.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 mt-4 text-[10px] font-mono text-emerald-400 font-bold uppercase">
                FLEET READINESS
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between hover:border-sky-400 transition-colors">
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 inline-block">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-white">Flawless Airworthiness</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Continuous cumulative flight hour and cycle tracking for life-limited parts guarantees perpetual compliance with civil and defense mandates.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 mt-4 text-[10px] font-mono text-purple-400 font-bold uppercase">
                REGULATORY SAFETY
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between hover:border-sky-400 transition-colors">
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 inline-block">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-white">Continuous Cargo Visibility</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Multi-modal GPS, flight radar, and marine vessel AIS telemetry provide continuous pipeline transparency and cold-chain integrity assurance.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 mt-4 text-[10px] font-mono text-amber-400 font-bold uppercase">
                SUPPLY ASSURANCE
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10: INDUSTRY FAQS (Accordion)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
              <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
              <span>COMMONLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Transportation Management & Aerospace MRO Inquiries
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Key architectural questions on modernizing logistics networks and aviation MRO on SAP Clean Core.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div 
                  key={fIdx}
                  className="rounded-2xl border border-white/10 bg-slate-900/80 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(fIdx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                  >
                    <span className="text-sm font-bold text-white">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-sky-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-white/5">
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
          SECTION 11: FINAL EXECUTIVE CTA
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-r from-sky-950 via-slate-950 to-blue-950 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KNOOVIQ PRACTICE ENGAGEMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Accelerate Your Transportation & MRO Modernization
          </h2>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Schedule an architectural consultation with our SAP Transportation Management and Aerospace MRO practice specialists to optimize your carrier freight settlement, rotable component pools, and fleet readiness.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact('Transportation & Aerospace MRO Architecture Consultation')}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-sky-500/25 flex items-center gap-2"
            >
              <span>Consult Practice Architect</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/industries"
              className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider border border-white/20 transition-all flex items-center gap-2"
            >
              <span>Explore All Industries</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
