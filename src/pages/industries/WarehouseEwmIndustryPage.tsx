import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Boxes, 
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
  Truck,
  Warehouse,
  ScanLine
} from 'lucide-react';

interface IndustryPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const WarehouseEwmIndustryPage: React.FC<IndustryPageProps> = ({ onOpenContact }) => {
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

  // Section 4: Circular Chevron Radial Wheel Segments (KNOOVIQ SAP EWM Ecosystem)
  const wheelSegments = [
    {
      id: 'dynamic-slotting',
      title: 'Dynamic Slotting & Velocity Zoning',
      desc: 'Algorithmically positioning fast-moving SKUs closer to packing lanes based on historical order pick frequency.',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(2, 132, 199, 0.3)',
      icon: Layers
    },
    {
      id: 'wave-cartonization',
      title: 'Intelligent Wave & Cartonization Logic',
      desc: 'Grouping customer orders into synchronized pick waves and calculating optimal packaging box dimensions automatically.',
      side: 'right',
      color: '#0EA5E9',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(14, 165, 233, 0.3)',
      icon: Boxes
    },
    {
      id: 'asrs-sorter-sync',
      title: 'ASRS & Conveyor Material Flow System',
      desc: 'Seamless bi-directional integration between SAP EWM Material Flow System (MFS) and automated high-bay crane cranes.',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.3)',
      icon: Cpu
    },
    {
      id: 'cross-docking',
      title: 'Opportunistic & Planned Cross-Docking',
      desc: 'Bypassing warehouse storage racks by routing inbound receipt pallets directly to outbound dispatch staging lanes.',
      side: 'right',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.3)',
      icon: Split
    },
    {
      id: 'rf-voice-picking',
      title: 'RF Mobile & Voice-Directed Execution',
      desc: 'Equipping warehouse staff with ruggedized RF barcode scanners, RFID readers, and multi-language voice picking prompts.',
      side: 'left',
      color: '#F97316',
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: ScanLine
    },
    {
      id: 'yard-dock-mgmt',
      title: 'Yard Management & Dock Appointment',
      desc: 'Real-time trailer tracking, gate check-in automation, and appointment booking preventing carrier dock congestion.',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.3)',
      icon: Truck
    },
    {
      id: 'labor-management',
      title: 'Engineered Labor Standards & Telemetry',
      desc: 'Measuring operator travel distance, pick performance variances, and workload balancing across shift rosters.',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.3)',
      icon: Gauge
    },
    {
      id: 'value-added-services',
      title: 'Kitting, VAS & Specialized Packaging',
      desc: 'Managing assembly work orders for retail promotional bundles, customized labeling, and hazardous goods segregation.',
      side: 'left',
      color: '#3B82F6',
      textColor: 'text-blue-400',
      bgGlow: 'rgba(59, 130, 246, 0.3)',
      icon: ShieldCheck
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
      id: 'inbound',
      label: 'ASN & Inbound Gate',
      sublabel: 'Trailer Check-In',
      tech: 'SAP EWM Yard Management',
      desc: 'Capturing inbound Advanced Shipping Notifications (ASN), automated dock door assignment, and trailer gate log-in.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      icon: Truck
    },
    {
      id: 'putaway',
      label: 'Directed Putaway',
      sublabel: 'Dynamic Slotting',
      tech: 'SAP EWM Slotting Engine',
      desc: 'Calculating storage bin assignments based on product velocity, physical dimensions, weight classes, and temperature zones.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80',
      icon: Layers
    },
    {
      id: 'wave',
      label: 'Wave Management',
      sublabel: 'Order Batching',
      tech: 'SAP EWM Wave Templates',
      desc: 'Aggregating thousands of customer order lines into synchronized pick waves matched to carrier departure schedules.',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
      icon: Boxes
    },
    {
      id: 'picking',
      label: 'RF & Voice Picking',
      sublabel: 'Optimized Pathing',
      tech: 'SAP EWM Mobile GUI & Voice',
      desc: 'Guiding operators through shortest-travel warehouse paths with barcode scan confirmation to prevent picking discrepancies.',
      image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80',
      icon: ScanLine
    },
    {
      id: 'packing',
      label: 'Packing & Cartonization',
      sublabel: 'Weight Verification',
      tech: 'SAP EWM Packing Station',
      desc: 'Automatic box recommendation based on item volume, integrated scale check for weight tolerances, and shipping label printing.',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80',
      icon: FileCheck
    },
    {
      id: 'dispatch',
      label: 'Staging & Dispatch',
      sublabel: 'Trailer Load Sealing',
      tech: 'SAP EWM & TM Integration',
      desc: 'Staging packed shipping units into assigned dock lanes, loading trailers according to delivery stops, and generating electronic waybills.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
      icon: ArrowRight
    }
  ];

  // Section 3: Warehouse EWM Industry Challenges & Bottlenecks Data (6 Cards)
  const industryChallenges = [
    {
      id: 'dock-congestion',
      tag: 'YARD BOTTLENECK',
      title: 'Dock Congestion & Carrier Detention',
      desc: 'Unscheduled carrier arrivals create yard gridlock, leading to expensive detention fees and delayed inbound inventory putaway.',
      status: 'HIGH DETENTION COST',
      statusColor: 'text-rose-400 bg-rose-950/60 border-rose-800'
    },
    {
      id: 'travel-waste',
      tag: 'LABOR INEFFICIENCY',
      title: 'Excessive Picker Travel Distances',
      desc: 'Sub-optimal SKU slotting forces pickers to crisscross vast warehouse aisles repeatedly, capping daily fulfillment throughput.',
      status: 'PRODUCTIVITY LEAKAGE',
      statusColor: 'text-amber-400 bg-amber-950/60 border-amber-800'
    },
    {
      id: 'picking-errors',
      tag: 'FULFILLMENT ACCURACY',
      title: 'Mispicks & Customer Returns',
      desc: 'Paper-based picking or slow scan verification causes wrong product shipments, expensive return freight, and customer dissatisfaction.',
      status: 'RETURN EXPENSE',
      statusColor: 'text-rose-400 bg-rose-950/60 border-rose-800'
    },
    {
      id: 'air-shipments',
      tag: 'PACKAGING OVERHEAD',
      title: 'Inefficient Cartonization & Freight Waste',
      desc: 'Guesswork packing packs small items into oversized boxes, causing shipping damage, excessive void fill, and inflated dimensional weight charges.',
      status: 'FREIGHT SURCHARGE',
      statusColor: 'text-amber-400 bg-amber-950/60 border-amber-800'
    },
    {
      id: 'asrs-bottlenecks',
      tag: 'AUTOMATION FRICTION',
      title: 'ASRS & Conveyor System Desynchronization',
      desc: 'Disconnection between enterprise ERP orders and automated crane controllers causes buffer deadlocks and idle automation lines.',
      status: 'EQUIPMENT BOTTLENECK',
      statusColor: 'text-rose-400 bg-rose-950/60 border-rose-800'
    },
    {
      id: 'inventory-blindspots',
      tag: 'STOCK ACCURACY',
      title: 'Ghost Inventory & Bin Discrepancies',
      desc: 'Delayed confirmation of pallet movements creates phantom stock discrepancies, forcing emergency cycle counts and order cancellations.',
      status: 'STOCKOUT FRICTION',
      statusColor: 'text-amber-400 bg-amber-950/60 border-amber-800'
    }
  ];

  // Section 5: Architecture Tabs Data
  const architectureTabs = [
    {
      id: 'core',
      name: 'EWM Enterprise Digital Core',
      tag: 'SAP S/4HANA EXTENDED WAREHOUSE MANAGEMENT',
      headline: 'Centralized Inventory Ledger & Execution Engine',
      desc: 'The mission-critical warehouse core executing advanced wave management, slotting algorithms, and unified inventory governance.',
      capabilities: [
        'High-speed wave management batching orders by carrier cutoff windows and zone layouts',
        'Dynamic slotting algorithms calculating bin arrangements based on pick velocity',
        'Direct integration with SAP S/4HANA Sales and Procurement for real-time stock allocation',
        'Native support for both Embedded S/4HANA EWM and Decentralized High-Volume EWM'
      ],
      diagramDetails: [
        { label: 'Wave Management', value: 'Dynamic Order Batching' },
        { label: 'Slotting Engine', value: 'Velocity Optimization' },
        { label: 'Deployment Mode', value: 'Embedded or Decentral' },
        { label: 'Inventory Ledger', value: 'Universal Sync' }
      ]
    },
    {
      id: 'edge',
      name: 'Mobile Floor & Automation Edge',
      tag: 'SAP EWM MATERIAL FLOW SYSTEM (MFS)',
      headline: 'ASRS Crane Control & Ruggedized RF Scanners',
      desc: 'Interfacing directly with automated storage cranes, automated guided vehicles (AGVs), and floor operators in real time.',
      capabilities: [
        'Direct PLC communication protocol connecting high-bay cranes without middleware',
        'Ruggedized RF mobile scanner and voice-directed picking screens with zero lag',
        'Automated pick-pack-pass conveyor routing for multi-zone distribution centers',
        'RFID dock door portals automatically scanning pallets as they pass onto trailers'
      ],
      diagramDetails: [
        { label: 'MFS Protocol', value: 'Direct PLC Interface' },
        { label: 'Floor Execution', value: 'RF Mobile & Voice' },
        { label: 'Conveyor Control', value: 'Zone Routing' },
        { label: 'Dock Portals', value: 'RFID Auto-Scan' }
      ]
    },
    {
      id: 'cloud',
      name: 'Yard & Warehouse Analytics',
      tag: 'SAP BTP & WAREHOUSE INSIGHTS',
      headline: '3D Digital Twin & Live Throughput Telemetry',
      desc: 'Harnessing SAP Business Technology Platform to deliver interactive 3D warehouse visualization, heatmaps, and dock scheduling.',
      capabilities: [
        'Interactive 3D warehouse digital twin showing live bin capacity and bottleneck alerts',
        'Carrier dock appointment self-service portal eliminating yard congestion',
        'Real-time picker heatmaps identifying congestion hotspots across warehouse aisles',
        'Clean Core extensibility allowing custom cartonization rules without core modifications'
      ],
      diagramDetails: [
        { label: 'Digital Twin', value: '3D Bin Telemetry' },
        { label: 'Dock Scheduling', value: 'Carrier Self-Service' },
        { label: 'Congestion Heatmap', value: 'Aisle Optimization' },
        { label: 'Clean Core BTP', value: 'Zero Core Mods' }
      ]
    }
  ];

  // Section 6: Modular Solutions Data
  const modularSolutions = [
    {
      category: 'CORE',
      title: 'Advanced Wave Management & Cartonization',
      badge: 'SAP EWM CORE',
      desc: 'Batch customer orders into synchronized pick waves and calculate optimal shipping carton dimensions automatically.',
      features: [
        'Carrier departure schedule wave alignment',
        '3D cartonization box recommendations',
        'Pick-pack-pass zone routing logic',
        'Automated weight verification integration'
      ]
    },
    {
      category: 'AUTOMATION',
      title: 'ASRS, Conveyor & AGV Material Flow System',
      badge: 'EWM MFS DIRECT',
      desc: 'Connect automated high-bay cranes, shuttle systems, and robotic automated guided vehicles directly to SAP EWM without middleware.',
      features: [
        'Sub-second PLC telegram processing',
        'Automated pallet diverting and re-routing',
        'Shuttle system high-density storage control',
        'Autonomous mobile robot (AMR) dispatch'
      ]
    },
    {
      category: 'YARD',
      title: 'Yard Management & Dock Door Scheduling',
      badge: 'YARD LOGISTICS',
      desc: 'Eliminate trailer wait times with self-service dock appointment booking, automated license plate recognition, and live yard tracking.',
      features: [
        'Carrier appointment self-scheduling portal',
        'Automated gate check-in and dock assignment',
        'Real-time trailer location yard maps',
        'Carrier detention penalty prevention alerts'
      ]
    },
    {
      category: 'ANALYTICS',
      title: 'Warehouse Insights & 3D Visualizer',
      badge: 'SAP ANALYTICS CLOUD',
      desc: 'Monitor distribution center throughput, aisle picker density, and order fulfillment velocity with interactive 3D cockpits.',
      features: [
        'Live 3D bin capacity and fill-rate heatmaps',
        'Operator travel distance optimization telemetry',
        'Fulfillment cycle time bottleneck isolation',
        'Cross-docking opportunity recommendations'
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
      dimension: 'Order Picking',
      legacy: 'Paper pick lists resulting in incorrect SKU selections and disconnected inventory updates.',
      cleanCore: 'RF mobile scanner and voice picking with barcode verification and real-time inventory deduction.',
      valueImpact: 'Flawless Pick Accuracy'
    },
    {
      dimension: 'SKU Bin Placement',
      legacy: 'Static bin assignments forcing pickers to travel unnecessary distances for fast-selling items.',
      cleanCore: 'Dynamic slotting algorithms recalculating optimal bin positions based on seasonal demand velocity.',
      valueImpact: 'Minimized Travel Distance'
    },
    {
      dimension: 'High-Bay Automation',
      legacy: 'Complex third-party middleware black boxes causing synchronization failures and delayed fault tracking.',
      cleanCore: 'Direct SAP EWM Material Flow System (MFS) communicating with PLCs without third-party brokers.',
      valueImpact: 'Zero Middleware Latency'
    },
    {
      dimension: 'Trailer Yard Flow',
      legacy: 'Manual clipboards at guard gates leading to yard gridlock, missed appointments, and carrier penalties.',
      cleanCore: 'Automated dock appointment scheduling with digital yard maps and proactive gate check-ins.',
      valueImpact: 'Zero Carrier Detention'
    },
    {
      dimension: 'Cross-Docking',
      legacy: 'Inbound goods put away onto high-bay racks only to be picked again hours later for dispatch.',
      cleanCore: 'Opportunistic cross-docking routing inbound pallets directly to outbound staging lanes.',
      valueImpact: 'Rapid Inventory Velocity'
    }
  ];

  // Section 8: Transformation Roadmap Stages Data
  const transformationStages = [
    {
      badge: 'FOUNDATION',
      title: 'EWM Core Deployment & RF Mobile Execution',
      subtitle: 'Digital Core & Floor Scanning',
      tag: 'CORE UNIFICATION',
      textColor: 'text-sky-400',
      description: 'Deploy SAP EWM digital core, establish precise bin master data, and equip operators with RF mobile scanners.',
      before: 'Paper-based picking and delayed end-of-shift inventory entries in legacy warehouse software.',
      after: 'Real-time bin-level inventory tracking with immediate scan confirmation and automated task queues.',
      metrics: ['Single-source-of-truth bin master data', 'Immediate RF scan inventory confirmation', 'Standardized putaway and pick strategies']
    },
    {
      badge: 'INTEGRATION',
      title: 'Wave Management, Slotting & Cartonization',
      subtitle: 'Intelligent Batching & Packaging',
      tag: 'FULFILLMENT VELOCITY',
      textColor: 'text-cyan-400',
      description: 'Activate algorithmic wave grouping, dynamic SKU slotting, and 3D cartonization packaging recommendations.',
      before: 'Pickers selecting orders individually with manual box selection and arbitrary bin assignments.',
      after: 'Synchronized pick waves aligned with carrier cutoffs and optimal box sizing recommendations.',
      metrics: ['Optimized picker travel pathing', 'Minimized void fill and freight charges', 'Synchronized carrier dispatch waves']
    },
    {
      badge: 'ORCHESTRATION',
      title: 'ASRS Material Flow System & Yard Integration',
      subtitle: 'Automation Control & Trailer Scheduling',
      tag: 'AUTOMATION SCALE',
      textColor: 'text-emerald-400',
      description: 'Connect high-bay automated cranes, conveyors, and trailer yard operations directly to SAP EWM.',
      before: 'Disconnected third-party WCS middleware and uncoordinated carrier arrivals jamming the yard.',
      after: 'Direct PLC control of automated storage cranes and online appointment scheduling for carriers.',
      metrics: ['Zero middleware automation latency', 'Eliminated carrier detention charges', 'Automated dock door allocation']
    },
    {
      badge: 'AUTONOMY',
      title: 'Predictive 3D Warehouse & Autonomous Robotics',
      subtitle: 'Digital Twin & AMR Fleet Orchestration',
      tag: 'ENTERPRISE MASTERY',
      textColor: 'text-purple-400',
      description: 'Implement interactive 3D digital twin visualization, predictive bottleneck heatmaps, and autonomous mobile robot fleets.',
      before: 'Reactive warehouse management unable to foresee aisle congestion or conveyor jam points.',
      after: 'Proactive digital twin monitoring with automated task interleaving and autonomous robot replenishment.',
      metrics: ['Live 3D warehouse capacity visualization', 'Autonomous robotic replenishment', 'Maximum distribution center throughput']
    }
  ];

  // Section 10: FAQs
  const faqs = [
    {
      q: 'What is the architectural difference between Embedded EWM and Decentralized EWM on SAP S/4HANA?',
      a: 'Embedded EWM runs inside the SAP S/4HANA core instance, sharing master data and transactional documents directly with zero replication overhead—ideal for unified single-instance operations. Decentralized EWM runs on a dedicated system instance, providing total fault isolation and 24/7 uninterrupted warehouse execution even during corporate ERP maintenance windows, perfect for massive, high-throughput automated logistics hubs.'
    },
    {
      q: 'How does SAP EWM Material Flow System (MFS) replace third-party Warehouse Control Systems (WCS)?',
      a: 'SAP EWM MFS connects directly to programmable logic controllers (PLCs) on automated cranes, conveyor diverters, and sorters via standard TCP/IP socket connections. This eliminates the expense and latency of separate third-party WCS layers, giving warehouse managers single-pane-of-glass visibility from customer sales order to physical crane telemetry.'
    },
    {
      q: 'Can SAP EWM handle voice-directed picking and multilingual warehouse staff?',
      a: 'Yes. SAP EWM natively supports voice-directed picking protocols and industrial speech recognition engines. Warehouse operators receive spoken audio pick commands through ruggedized headsets in their preferred language and confirm bin check-digits verbally, enabling completely hands-free, eyes-free fulfillment.'
    },
    {
      q: 'How does KNOOVIQ uphold Clean Core principles in complex automated warehouses?',
      a: 'Custom packing algorithms, specialized carrier label integrations, and proprietary robotics fleet dispatching are deployed on SAP Business Technology Platform (BTP) using standard EWM APIs. The core S/4HANA EWM implementation remains pristine, allowing routine quarterly SAP feature upgrades without risking distribution center downtime.'
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
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80" 
            alt="Warehouse & Warehousing Execution SAP EWM" 
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
              <Boxes className="w-4 h-4 text-sky-400" />
              <span>WAREHOUSE & WAREHOUSING EXECUTION (SAP EWM)</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4"
            >
              High-Velocity Logistics with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
                Precision SAP EWM
              </span>
            </motion.h1>

            {/* Subheadline / Value Proposition */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-6 font-normal"
            >
              Accelerate distribution center velocity with automated wave picking, dynamic slotting algorithms, direct ASRS material flow integration, and digital yard management.
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
                <span>Dynamic Wave & Cartonization Logic</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Direct ASRS Material Flow Control</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Zero Carrier Detention Yard Management</span>
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
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">SLOTTING CORE</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">Velocity Zoning</div>
                <div className="text-[10px] text-slate-300">Minimized Travel Paths</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <ScanLine className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">FLOOR EXECUTION</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">RF & Voice Directed</div>
                <div className="text-[10px] text-slate-300">Zero Mispick Errors</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">MFS PROTOCOL</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">Direct PLC Interface</div>
                <div className="text-[10px] text-slate-300">Zero Middleware Lag</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <Truck className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">YARD & DOCKS</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">Automated Appointments</div>
                <div className="text-[10px] text-slate-300">Smooth Gate Flow</div>
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
                Synchronizing High-Density Storage with <span className="text-sky-400">Order Dispatch Velocity</span>
              </h2>

              <div className="border-l-4 border-sky-500 pl-4 py-2 bg-white/5 rounded-r-xl">
                <p className="text-sm font-semibold text-slate-200 leading-relaxed italic">
                  &ldquo;Modern warehouse execution is defined by synchronized flow—where dynamic slotting, automated high-bay crane telemetry, and intelligent wave cartonization eliminate every second of dead travel time.&rdquo;
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Distribution centers face unprecedented fulfillment pressures from shrinking order lead times, surging SKU catalogs, and rising labor costs. Disconnected warehouse systems generate travel waste, dock bottlenecks, and phantom inventory. Knooviq establishes an automated digital execution thread connecting inbound trailer appointments, high-density ASRS cranes, and packing lines into a unified SAP Extended Warehouse Management core.
              </p>

              {/* Information Checklist Grid (Zero Numbers/Percents) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Algorithmically positioned SKU slotting matching historical demand frequency',
                  'Synchronized pick waves aligned with carrier cutoffs to eliminate missed dispatches',
                  'Direct PLC communication connecting automated cranes without third-party middleware',
                  'Carrier self-service appointment scheduling preventing trailer yard congestion'
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
              Operational Vulnerabilities in Warehouse Execution
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Critical bottlenecks that inflate fulfillment expenses, delay carrier departures, and create stock discrepancies.
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
              KNOOVIQ SAP EWM Platform Ecosystem
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Eight interlocking capability modules synchronizing the complete warehousing lifecycle from yard gate to trailer dispatch.
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
                  <Warehouse className="w-5 h-5 text-cyan-400 mb-1" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 font-bold">KNOOVIQ</span>
                  <span className="text-xs font-black text-white leading-tight">SAP EWM</span>
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
              Three-Tier Warehouse Execution Architecture
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Decoupling high-bay crane PLC commands from order waves and cloud yard analytics.
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
              Specialized Solutions for Warehouse Execution
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              High-impact functional modules delivering measurable operational gains across complex distribution facilities.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {['ALL', 'CORE', 'AUTOMATION', 'YARD', 'ANALYTICS'].map((cat) => (
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
                    onClick={() => onOpenContact(`Warehouse EWM: ${sol.title}`)}
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
              Transforming manual paper-driven warehouses into autonomous, high-throughput fulfillment centers.
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
              Phased Warehouse Modernization Roadmap
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Four progressive architectural stages transitioning distribution facilities to autonomous logistics execution.
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
              Strategic Value Drivers for Modern Warehousing
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Architectural advantages realized by distribution operations running on SAP Clean Core.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between hover:border-sky-400 transition-colors">
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 inline-block">
                  <ScanLine className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-white">Flawless Pick Accuracy</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Barcode validation and voice-directed picking prompts guarantee zero wrong-item shipments, eliminating return handling expenses.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 mt-4 text-[10px] font-mono text-sky-400 font-bold uppercase">
                DISPATCH INTEGRITY
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between hover:border-sky-400 transition-colors">
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 inline-block">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-white">Zero Carrier Detention</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Online dock appointment booking and automated gate check-in eliminate trailer yard congestion and costly detention fee penalties.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 mt-4 text-[10px] font-mono text-emerald-400 font-bold uppercase">
                YARD VELOCITY
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between hover:border-sky-400 transition-colors">
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 inline-block">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-white">Seamless ASRS Automation</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Direct PLC protocol integration connects automated cranes without third-party middleware, guaranteeing uninterrupted high-bay throughput.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 mt-4 text-[10px] font-mono text-purple-400 font-bold uppercase">
                EQUIPMENT RELIABILITY
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between hover:border-sky-400 transition-colors">
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 inline-block">
                  <Boxes className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-white">Dynamic Cartonization Savings</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Algorithmic packaging recommendations match orders to optimal carton sizes, eliminating air shipments and minimizing dimensional freight charges.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 mt-4 text-[10px] font-mono text-amber-400 font-bold uppercase">
                FREIGHT EFFICIENCY
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
              Warehouse Execution & SAP EWM Inquiries
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Key architecture questions on modernizing distribution operations on SAP Clean Core.
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
            Accelerate Your Warehouse Execution Modernization
          </h2>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Schedule an architectural blueprint consultation with our SAP EWM logistics practice specialists to assess your wave picking throughput, slotting algorithms, and automation material flow systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact('Warehouse EWM Architecture Consultation')}
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
