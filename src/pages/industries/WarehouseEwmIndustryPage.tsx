import React, { useState } from 'react';
import { useAutoRotate } from '../../hooks/useAutoRotate';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Warehouse, 
  Layers, 
  Activity, 
  ShieldCheck, 
  TrendingUp, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Clock, 
  Workflow, 
  Compass, 
  Zap, 
  Boxes, 
  Globe2, 
  RefreshCw, 
  FileText, 
  Radio, 
  Server, 
  Truck, 
  ScanLine, 
  Cpu, 
  Sliders, 
  AlertTriangle, 
  Database,
  Users
} from 'lucide-react';

interface WarehouseEwmIndustryPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const WarehouseEwmIndustryPage: React.FC<WarehouseEwmIndustryPageProps> = ({ 
  onOpenContact 
}) => {

  // State for Section 4 Circular Chevron Wheel
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(null);

  // State for Section 7 Solution Category Filter
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');

  // State for Section 9 Transformation Stage
  const [activeTransformStage, setActiveTransformStage] = useState<number>(0);

  // Section 4: 8-Segment Circular Chevron Wheel (KNOOVIQ Warehouse Platform Ecosystem)
  const wheelSegments = [
    {
      id: 'yard-dock',
      title: 'Inbound Yard Gate & Dock Door Scheduling',
      desc: 'Seamless trailer appointment booking, driver kiosk check-ins, and dynamic dock door assignment minimizing dwell times.',
      side: 'right',
      color: '#22C55E', // Green
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(34, 197, 94, 0.3)',
      icon: Truck
    },
    {
      id: 'directed-putaway',
      title: 'Directed Putaway & Velocity Slotting',
      desc: 'AI-driven bin allocation prioritizing fast-moving SKUs near staging areas, eliminating deadhead travel for forklifts.',
      side: 'right',
      color: '#84CC16', // Lime Green
      textColor: 'text-lime-400',
      bgGlow: 'rgba(132, 204, 22, 0.3)',
      icon: Boxes
    },
    {
      id: 'wave-management',
      title: 'Dynamic Wave Release & Workload Balancing',
      desc: 'Algorithmic grouping of customer delivery orders by carrier cutoff windows, priority tiers, and zone capacity constraints.',
      side: 'right',
      color: '#EAB308', // Yellow
      textColor: 'text-yellow-400',
      bgGlow: 'rgba(234, 179, 8, 0.3)',
      icon: Layers
    },
    {
      id: 'rf-picking',
      title: 'RF & Voice-Directed Pick Execution',
      desc: 'Hands-free pick-by-voice and rugged RF terminal guidance with interleaved barcode verification ensuring zero picking errors.',
      side: 'right',
      color: '#F97316', // Orange
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: ScanLine
    },
    {
      id: 'robotics-mfs',
      title: 'AS/RS Robotics & MFS Integration',
      desc: 'Sub-second direct PLC telegram communication with automated cranes, shuttle carousels, and autonomous mobile robot (AMR) fleets.',
      side: 'left',
      color: '#F43F5E', // Rose
      textColor: 'text-rose-400',
      bgGlow: 'rgba(244, 63, 94, 0.3)',
      icon: Cpu
    },
    {
      id: 'kitting-vas',
      title: 'Value-Added Services & Dynamic Kitting',
      desc: 'In-line execution of custom retail labeling, display pallet assembly, bundle packing, and customer-specific packaging.',
      side: 'left',
      color: '#EC4899', // Pink
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.3)',
      icon: Workflow
    },
    {
      id: 'cross-docking',
      title: 'Opportunistic Cross-Docking & Staging',
      desc: 'Direct transfer of inbound supplier pallets to outbound customer staging lanes without intermediate putaway or storage.',
      side: 'left',
      color: '#A855F7', // Purple
      textColor: 'text-purple-400',
      bgGlow: 'rgba(168, 85, 247, 0.3)',
      icon: RefreshCw
    },
    {
      id: 'shipping-cartonization',
      title: 'Cartonization & Outbound Dispatch',
      desc: 'Automated 3D volumetric packaging calculation, carrier shipping label generation, and automated pallet wrapping release.',
      side: 'left',
      color: '#06B6D4', // Cyan
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(6, 182, 212, 0.3)',
      icon: Warehouse
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
    const r = 168;
    const midAngle = -90 + index * 45 + 22.5;
    const rad = (midAngle * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad)
    };
  };

  // Section 2: Journey Steps (Clean, no numbers, no statistics, no percentages)
  const journeySteps = [
    {
      id: 'inbound-receiving',
      label: 'Inbound Receiving',
      sublabel: 'ASN & Gate Check-In',
      desc: 'Capture advanced shipping notices (ASN), match inbound bills of lading (BOL), and direct trailers to optimal dock doors based on handling capacity.',
      tech: 'SAP EWM Inbound',
      image: '/images/warehouse_inbound_receiving.png',
      icon: Truck
    },
    {
      id: 'directed-putaway',
      label: 'Directed Putaway',
      sublabel: 'Dynamic AI Slotting',
      desc: 'Continuously re-evaluate storage bin assignments based on seasonal velocity profiles, physical dimensions, and forklift deadhead travel reduction.',
      tech: 'SAP Warehouse Insights',
      image: '/images/warehouse_directed_putaway.png',
      icon: Boxes
    },
    {
      id: 'wave-planning',
      label: 'Wave Planning',
      sublabel: 'Workload Balancing',
      desc: 'Group open customer sales orders into balanced picking waves factoring in carrier pickup cutoff times, available staffing, and conveyor capacity.',
      tech: 'SAP EWM Wave Engine',
      image: '/images/warehouse_wave_planning.png',
      icon: Layers
    },
    {
      id: 'pick-execution',
      label: 'Pick Execution',
      sublabel: 'Voice & Wearable RF',
      desc: 'Guide operators hands-free with voice-directed workflows and ergonomic wearable scanners, ensuring interleaved barcode checksum validation.',
      tech: 'SAP Fiori Mobile RF',
      image: '/images/warehouse_pick_execution.jpg',
      icon: ScanLine
    },
    {
      id: 'robotics-mfs',
      label: 'Robotics MFS',
      sublabel: 'PLC Telegram Interlock',
      desc: 'Orchestrate automated storage cranes (AS/RS), autonomous mobile robots (AMRs), and conveyor networks with sub-second direct PLC telegrams.',
      tech: 'SAP EWM-MFS Native',
      image: '/images/warehouse_robotics_mfs.png',
      icon: Cpu
    },
    {
      id: 'cartonization-dispatch',
      label: 'Outbound Dispatch',
      sublabel: '3D Cartonization',
      desc: 'Optimize package fill rates through automated 3D volumetric box selection algorithms, print carrier labels inline, and stage finished pallets.',
      tech: 'SAP EWM Outbound',
      image: '/images/warehouse_outbound_dispatch.png',
      icon: Warehouse
    }
  ];

  // Section 2: Auto-rotation for Showcase Image (1s interval, 5s pause on click)
  const {
    currentIndex: activeJourneyStep,
    handleSelect: handleJourneyStepClick
  } = useAutoRotate({
    itemCount: journeySteps.length,
    intervalMs: 1000,
    pauseOnInteractionMs: 5000
  });

  // Section 4: Auto-rotation for Circular Chevron Wheel (1s interval, 5s pause on click)
  const {
    currentIndex: activeWheelIndex,
    handleSelect: handleWheelClick,
    handleMouseEnter: handleWheelSectionEnter,
    handleMouseLeave: handleWheelSectionLeave
  } = useAutoRotate({
    itemCount: wheelSegments.length,
    intervalMs: 1000,
    pauseOnInteractionMs: 5000
  });

  // Section 3: Warehouse Challenges & Bottlenecks Data
  const warehouseChallenges = [
    {
      tag: 'YARD CONGESTION',
      icon: Truck,
      title: 'Inbound Trailer Gridlock',
      desc: 'Unscheduled carrier arrivals and manual paper check-ins cause truck yard bottlenecks, resulting in thousands of dollars in carrier detention fines.',
      footer: 'Trailer Gate Gridlock'
    },
    {
      tag: 'SLOTTING INEFFICIENCY',
      icon: Boxes,
      title: 'Forklift Deadhead Travel Waste',
      desc: 'Static, outdated bin slotting forces warehouse operators to travel thousands of unnecessary miles across aisles each week for top-selling SKUs.',
      footer: 'Excessive Travel Distance'
    },
    {
      tag: 'AUTOMATION SILOS',
      icon: Cpu,
      title: 'Proprietary WCS Software Latency',
      desc: 'Running separate proprietary middleware for AS/RS cranes, AMR robots, and conveyors creates data silos, telegram lag, and agonizing downtime.',
      footer: 'Robotics Synchronization Lag'
    },
    {
      tag: 'INVENTORY DRIFT',
      icon: Database,
      title: 'Discrepancies Between Physical & ERP',
      desc: 'Delayed confirmation of warehouse movements creates phantom inventory, leading to customer stock-outs, canceled orders, and cycle-counting delays.',
      footer: 'Phantom Stock Reconciliation Lag'
    },
    {
      tag: 'LABOR FATIGUE',
      icon: Users,
      title: 'Unbalanced Wave Workloads',
      desc: 'Inflexible order dispatching creates massive congestion jams in specific picking zones while other aisles remain idle, driving up picker fatigue.',
      footer: 'Picker Bottleneck Congestion'
    },
    {
      tag: 'TRACEABILITY RISK',
      icon: ShieldCheck,
      title: 'Cold-Chain & Lot Segregation Risks',
      desc: 'Manual lot tracking in regulated warehouses risks catastrophic contamination recalls, expiration write-offs, and compliance audit penalties.',
      footer: 'Serialized Batch Non-Compliance'
    }
  ];

  // Section 7: 9 Modular Enterprise Industry Solutions (Symmetrical 3x3 Grid)
  const industrySolutions = [
    {
      category: 'INBOUND_YARD',
      categoryLabel: 'Inbound & Yard',
      tag: 'INBOUND VELOCITY',
      icon: Truck,
      title: 'Inbound Receiving & Cross-Docking',
      description: 'Accelerate dock-to-stock cycle times by pre-allocating inbound supplier pallets directly to outbound customer staging lanes.',
      image: '/images/warehouse_inbound_cross_docking.png',
      highlights: ['Automated ASN Allocation', 'Opportunistic Cross-Dock', 'Pallet Barcode Scan', 'Dock-to-Stock Speed']
    },
    {
      category: 'WAVE_PICKING',
      categoryLabel: 'Wave & Picking',
      tag: 'SLOTTING INTELLIGENCE',
      icon: Boxes,
      title: 'Dynamic Velocity Slotting',
      description: 'Continuously reorganize storage bin assignments based on dynamic SKU turn velocity, product dimensions, and operator ergonomics.',
      image: '/images/warehouse_dynamic_velocity_slotting.png',
      highlights: ['ABC Velocity Profiling', 'Deadhead Travel Reduction', 'Volumetric Bin Sizing', 'Automated Replenishment']
    },
    {
      category: 'ROBOTICS_MFS',
      categoryLabel: 'Robotics & MFS',
      tag: 'HIGH-BAY AUTOMATION',
      icon: Cpu,
      title: 'High-Bay AS/RS Crane & Shuttle Control',
      description: 'Control multi-shuttle carousels, vertical lift modules, and stacker cranes directly from SAP EWM with sub-second PLC telegrams.',
      image: '/images/warehouse_highbay_asrs_crane.jpg',
      highlights: ['Direct PLC Telegrams', 'Zero Middleware Lag', 'Crane Trajectory Tuning', 'Real-Time Fault Bypass']
    },
    {
      category: 'WAVE_PICKING',
      categoryLabel: 'Wave & Picking',
      tag: 'WAVE MANAGEMENT',
      icon: Layers,
      title: 'Multi-Modal Wave Planning',
      description: 'Batch customer sales orders into high-efficiency picking waves synchronized with carrier dispatch cutoff schedules and zone capacity.',
      image: '/images/warehouse_multimodal_wave_planning.png',
      highlights: ['Algorithmic Wave Sizing', 'Cluster Multi-Order Carts', 'Zone Workload Balance', 'Priority Override Logic']
    },
    {
      category: 'ROBOTICS_MFS',
      categoryLabel: 'Robotics & MFS',
      tag: 'AMR FLEET CONTROL',
      icon: Workflow,
      title: 'AMR Mobile Robot Fleet Coordination',
      description: 'Synchronize collaborative robots following human pickers through aisles or transport heavy pallets autonomously between functional zones.',
      image: '/images/warehouse_amr_robot_fleet.png',
      highlights: ['Collaborative Picker Assist', 'Dynamic Task Dispatch', 'Automated Traffic Control', 'Battery-Aware Routing']
    },
    {
      category: 'INBOUND_YARD',
      categoryLabel: 'Inbound & Yard',
      tag: 'YARD GOVERNANCE',
      icon: Clock,
      title: 'Yard Logistics & Dock Booking',
      description: 'Eliminate trailer gate congestion through collaborative carrier appointment booking, automated driver kiosks, and digital shunter moves.',
      image: '/images/warehouse_yard_logistics_dock.png',
      highlights: ['Carrier Self-Booking', 'Driver Mobile Kiosks', 'Shunter Dispatch Console', 'Zero Detention Fees']
    },
    {
      category: 'WAVE_PICKING',
      categoryLabel: 'Wave & Picking',
      tag: 'HANDS-FREE RF',
      icon: ScanLine,
      title: 'Voice-Directed Picking & RF Verification',
      description: 'Empower warehouse personnel with hands-free voice guidance and ergonomic wearable scanners, ensuring 99.98% pick accuracy.',
      image: '/images/warehouse_rfid_voice_picking.png',
      highlights: ['Voice-Directed Paths', 'Checksum Bin Validation', 'Serial Number Capture', 'Multi-Language Voice']
    },
    {
      category: 'ROBOTICS_MFS',
      categoryLabel: 'Robotics & MFS',
      tag: 'PACKING AUTOMATION',
      icon: Warehouse,
      title: '3D Volumetric Cartonization & Auto-Wrap',
      description: 'Calculate precise 3D box requirements prior to picking, minimizing void filler usage, parcel shipping rates, and packaging waste.',
      image: '/images/warehouse_3d_cartonization_wrap.jpg',
      highlights: ['3D Volumetric Sizing', 'Inline Weight Checks', 'Auto Label Applicators', 'Freight Dimension Tuning']
    },
    {
      category: 'INBOUND_YARD',
      categoryLabel: 'Inbound & Yard',
      tag: 'REGULATORY AUDIT',
      icon: ShieldCheck,
      title: 'Cold-Chain & HAZMAT Segregation',
      description: 'Enforce strict chemical compatibility segregation rules, continuous IoT temperature logging, and end-to-end serialized batch traceability.',
      image: '/images/warehouse_coldchain_hazmat.png',
      highlights: ['HAZMAT Segregation', 'IoT Temperature Logs', 'Serialized Lot Tracking', 'Automated GxP Audit']
    }
  ];

  // Section 9: Transformation in Action (Connected 4-Phase Architecture Pipeline)
  const transformationStages = [
    {
      badge: 'PHASE 01',
      textColor: 'text-cyan-400',
      glowColor: 'bg-cyan-400',
      activeBorder: 'border-cyan-400/80 bg-cyan-950/30',
      borderBase: 'border-slate-800',
      icon: Truck,
      title: 'Yard & Inbound Gate',
      subtitle: 'Digital Kiosks & Cross-Dock',
      tag: 'Zero Trailer Detention',
      description: 'Self-service carrier booking portals, automated gate kiosks, and direct cross-docking of pallets without interim storage.',
      before: 'Manual paper BOL verification, unannounced truck arrivals & yard gridlock',
      after: 'Automated carrier appointment booking with self-service driver kiosks',
      metrics: ['Digital Gate Kiosks', 'Touchless Check-In', 'Cross-Dock Velocity']
    },
    {
      badge: 'PHASE 02',
      textColor: 'text-sky-400',
      glowColor: 'bg-sky-400',
      activeBorder: 'border-sky-400/80 bg-sky-950/30',
      borderBase: 'border-slate-800',
      icon: Boxes,
      title: 'Dynamic AI Slotting',
      subtitle: 'ABC Velocity Profiling',
      tag: 'Zero Deadhead Travel',
      description: 'Machine learning slotting algorithms continuously reassign high-velocity SKUs to front-row picking bins near staging lanes.',
      before: 'Static bin slotting forcing forklifts to travel miles into distant aisles',
      after: 'Dynamic AI velocity slotting placing fast movers closest to pack stations',
      metrics: ['ABC Velocity Zoning', 'Automated Interleaving', 'Travel Path Optimization']
    },
    {
      badge: 'PHASE 03',
      textColor: 'text-emerald-400',
      glowColor: 'bg-emerald-400',
      activeBorder: 'border-emerald-400/80 bg-emerald-950/30',
      borderBase: 'border-slate-800',
      icon: Cpu,
      title: 'Robotics MFS Execution',
      subtitle: 'Sub-Second PLC Telegrams',
      tag: 'Direct Automation Interlock',
      description: 'Direct SAP EWM-MFS telegrams coordinate AS/RS cranes and AMR robots with voice-directed operator guidance without middleware.',
      before: 'Disconnected third-party WCS software causing crane delays & paper mispicks',
      after: 'Sub-second direct PLC telegrams coordinating AS/RS cranes and AMRs',
      metrics: ['Sub-Second Telegrams', 'Zero Middleware Lag', 'Voice-Directed Checksums']
    },
    {
      badge: 'PHASE 04',
      textColor: 'text-amber-400',
      glowColor: 'bg-amber-400',
      activeBorder: 'border-amber-400/80 bg-amber-950/30',
      borderBase: 'border-slate-800',
      icon: Warehouse,
      title: 'Packing & RFID Dispatch',
      subtitle: '3D Cartonization & Verification',
      tag: 'Zero Misload Tolerance',
      description: 'Volumetric 3D packaging algorithms select optimal cartons, print carrier labels inline, and verify trailer loading via RFID gates.',
      before: 'Overfilled boxes leading to parcel surcharges and misloaded delivery trucks',
      after: '3D volumetric box selection with automated RFID trailer door verification',
      metrics: ['3D Volumetric Cartonization', 'Inline Weight Tolerances', 'RFID Portal Verification']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Pure Enterprise Warehouse & Warehousing Hero)
          ========================================================================= */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        
        {/* Full-Bleed Enterprise Warehouse Background Image with Seamless Cinematic Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/warehouse_intelligent_erp_hero.png" 
            alt="Intelligent ERP for Warehouse & Warehousing" 
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
                <Warehouse className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>
              
              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Intelligent ERP for <br />
                <span className="text-cyan-400">Warehouse & Warehousing</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Autonomous Fulfillment, Dynamic Wave Slotting & Real-Time Yard Cross-Docking.
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
                Empowering distribution centers, third-party logistics providers (3PL), and automated fulfillment hubs with{' '}
                <strong className="text-white font-semibold">SAP S/4HANA EWM Clean Core</strong>, sub-second{' '}
                <strong className="text-cyan-300 font-semibold">MFS Robotics Telegrams</strong>, AI velocity slotting, and touchless yard cross-docking.
              </p>
              
              {/* Clean Feature Highlights */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Clean Core Architecture</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Sub-Second MFS Telegrams</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>99.98% Pick Precision</span>
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
                <div className="text-sm sm:text-base font-bold text-white leading-snug">SAP S/4HANA EWM</div>
                <div className="text-xs text-slate-300 mt-0.5">Clean Core Ready</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">AUTOMATION</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">MFS Robotics PLC</div>
                <div className="text-xs text-slate-300 mt-0.5">Sub-Second Telegrams</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Boxes className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">SLOTTING AI</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Dynamic ABC Velocity</div>
                <div className="text-xs text-slate-300 mt-0.5">Zero Travel Waste</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Truck className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">YARD SYNC</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Touchless Cross-Dock</div>
                <div className="text-xs text-slate-300 mt-0.5">Zero Detention Fees</div>
              </div>
            </motion.div>

          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE INDUSTRY PERSPECTIVE ("Building a Connected Fulfillment Core")
          ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        
        {/* Subtle Ambient Tone */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0070C0]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>EXECUTIVE INDUSTRY PERSPECTIVE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Building a Connected <span className="text-[#0070C0]">Fulfillment Core</span>
              </h2>

              {/* Executive Thesis Quote */}
              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;High-velocity fulfillment fails when automated cranes and robotic shuttles run isolated from enterprise demand signals. KNOOVIQ connects material flow systems, dynamic wave slotting, and mobile RF execution into one unified S/4HANA EWM core.&rdquo;
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Knooviq engineers an integrated distribution ecosystem on SAP S/4HANA Clean Core. By bridging data across yard arrivals, high-bay automated storage, and mobile picking crews, fulfillment leaders gain continuous visibility, automated order flow, and 99.98% inventory accuracy.
              </p>

              {/* 3 Executive Strategic Pillars */}
              <div className="space-y-2.5 pt-1">
                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Sub-Second Material Flow & Robotics</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Direct PLC telegram communication connecting SAP EWM to AS/RS cranes, conveyors, and AMRs without middleware latency.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <Boxes className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Dynamic ABC Velocity Slotting</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Continuously reorganize warehouse storage bins based on seasonal product turns, eliminating deadhead travel for forklifts.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Integrated Yard & Gate Synchronization</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Carrier appointment booking, automated driver kiosks, and dynamic dock door scheduling completely eliminating detention penalties.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side: Clean Photography Showcase & Stage Navigator */}
            <div className="lg:col-span-6 space-y-3.5">
              
              {/* Pure High-Resolution Photography Showcase with Defined Dark Border */}
              <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden border-2 border-slate-300 shadow-md bg-slate-100">
                <img 
                  src={journeySteps[activeJourneyStep].image} 
                  alt={journeySteps[activeJourneyStep].label} 
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />
              </div>

              {/* Stage Navigation Grid (Clean Labels + Icons, No Numbers) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {journeySteps.map((step, idx) => {
                  const isSelected = activeJourneyStep === idx;
                  const StepIcon = step.icon;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => handleJourneyStepClick(idx)}
                      className={`p-2.5 rounded-xl border text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                        isSelected
                          ? 'bg-[#0070C0] text-white border-2 border-[#0070C0] shadow-sm scale-[1.01]'
                          : 'bg-white text-slate-700 border border-slate-300 hover:bg-sky-50 hover:border-[#0070C0]'
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg shrink-0 ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-sky-50 text-[#0070C0] border border-slate-300'
                      }`}>
                        <StepIcon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold truncate">{step.label}</div>
                        <div className={`text-[10px] truncate ${isSelected ? 'text-sky-100' : 'text-slate-500'}`}>
                          {step.sublabel}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Stage Detail Card (Placed Below the Image & Controls with Defined Border) */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-300 shadow-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#003B73]">
                    {journeySteps[activeJourneyStep].label}
                  </span>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-sky-50 text-[#0070C0] border border-sky-300">
                    {journeySteps[activeJourneyStep].tech}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {journeySteps[activeJourneyStep].desc}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: INDUSTRY CHALLENGES ("Navigating the Complexity of Modern Warehousing")
          ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#F8FAFC] border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
              <Compass className="w-3.5 h-3.5 text-rose-600" />
              <span>CORE BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Navigating the Complexity of Modern Warehousing
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Disjointed warehouse management systems and siloed automation constrain fulfillment speed. Knooviq addresses the six systemic challenges logistics leaders face.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {warehouseChallenges.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="h-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-slate-300 shadow-xs hover:border-[#0070C0] hover:shadow-lg transition-all group"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-sky-50 text-[#0070C0] border border-slate-200 group-hover:bg-[#0070C0] group-hover:text-white group-hover:scale-105 transition-all">
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
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070C0] group-hover:scale-125 transition-transform" />
                    <span>{item.footer}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: KNOOVIQ WAREHOUSE PLATFORM ECOSYSTEM (Circular Chevron Radial Diagram)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#070B14] text-white border-b border-slate-800 relative overflow-hidden">
        
        {/* Dark Ambient Radial Hues */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-indigo-500/10 via-emerald-500/10 to-pink-500/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-inner">
              <Workflow className="w-3.5 h-3.5 text-cyan-300" />
              <span>CONNECTED WAREHOUSE ECOSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Capabilities Designed for Modern Warehousing
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              A synchronized, circular enterprise platform uniting dock appointments, velocity slotting, MFS robotics, voice picking, and clean ERP ledgers into one continuous loop.
            </p>
          </motion.div>

          {/* 3-Column Radial Wheel & Flanking Capabilities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* Left Column (4 Capabilities: Top-Left to Bottom-Left) */}
            <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-5">
              {[7, 6, 5, 4].map((segIdx) => {
                const item = wheelSegments[segIdx];
                const isHighlighted = hoveredWheelIndex !== null ? hoveredWheelIndex === segIdx : activeWheelIndex === segIdx;
                return (
                  <div
                    key={item.id}
                    onClick={() => handleWheelClick(segIdx)}
                    onMouseEnter={() => {
                      setHoveredWheelIndex(segIdx);
                      handleWheelSectionEnter();
                    }}
                    onMouseLeave={() => {
                      setHoveredWheelIndex(null);
                      handleWheelSectionLeave();
                    }}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isHighlighted
                        ? 'bg-slate-900/95 border-white/40 shadow-xl -translate-x-1'
                        : 'bg-slate-900/40 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                    style={{
                      boxShadow: isHighlighted ? `0 0 24px ${item.bgGlow}` : undefined,
                      borderColor: isHighlighted ? item.color : undefined
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
                          boxShadow: isHighlighted ? `0 0 12px ${item.color}` : 'none'
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
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/15 via-emerald-500/10 to-pink-500/15 blur-2xl rounded-full pointer-events-none" />

                <svg
                  viewBox="0 0 500 500"
                  className="w-full h-full drop-shadow-2xl overflow-visible"
                >
                  {/* 8 Interlocking Chevron Segments */}
                  {wheelSegments.map((seg, idx) => {
                    const isHighlighted = hoveredWheelIndex !== null ? hoveredWheelIndex === idx : activeWheelIndex === idx;
                    const d = getChevronPath(idx);
                    const iconPos = getIconCoords(idx);
                    const IconComponent = seg.icon;

                    return (
                      <g
                        key={seg.id}
                        onClick={() => handleWheelClick(idx)}
                        onMouseEnter={() => {
                          setHoveredWheelIndex(idx);
                          handleWheelSectionEnter();
                        }}
                        onMouseLeave={() => {
                          setHoveredWheelIndex(null);
                          handleWheelSectionLeave();
                        }}
                        className="cursor-pointer transition-all duration-300"
                      >
                        {/* Chevron Wedge */}
                        <path
                          d={d}
                          fill={isHighlighted ? `${seg.color}25` : '#0A0F1D'}
                          stroke={seg.color}
                          strokeWidth={isHighlighted ? "3.5" : "2.2"}
                          strokeLinejoin="round"
                          className="transition-all duration-300"
                          style={{
                            filter: isHighlighted ? `drop-shadow(0 0 10px ${seg.color})` : undefined
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
                              isHighlighted ? 'scale-125' : ''
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
                    y="195"
                    width="200"
                    height="110"
                    className="pointer-events-none"
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center text-center px-3">
                      <div className="text-[10px] font-mono tracking-widest text-cyan-400 font-bold uppercase">
                        KNOOVIQ CORE
                      </div>
                      <div className="text-sm sm:text-base font-black text-white leading-tight mt-0.5">
                        EWM LOGISTICS
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 tracking-wider uppercase mt-1">
                        {(hoveredWheelIndex !== null ? hoveredWheelIndex : activeWheelIndex) !== null 
                          ? `MODULE 0${(hoveredWheelIndex !== null ? hoveredWheelIndex : activeWheelIndex) + 1}` 
                          : '8 CAPABILITIES'}
                      </div>
                    </div>
                  </foreignObject>
                </svg>

              </div>
            </div>

            {/* Right Column (4 Capabilities: Top-Right to Bottom-Right) */}
            <div className="order-3 lg:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-5">
              {[0, 1, 2, 3].map((segIdx) => {
                const item = wheelSegments[segIdx];
                const isHighlighted = hoveredWheelIndex !== null ? hoveredWheelIndex === segIdx : activeWheelIndex === segIdx;
                return (
                  <div
                    key={item.id}
                    onClick={() => handleWheelClick(segIdx)}
                    onMouseEnter={() => {
                      setHoveredWheelIndex(segIdx);
                      handleWheelSectionEnter();
                    }}
                    onMouseLeave={() => {
                      setHoveredWheelIndex(null);
                      handleWheelSectionLeave();
                    }}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isHighlighted
                        ? 'bg-slate-900/95 border-white/40 shadow-xl translate-x-1'
                        : 'bg-slate-900/40 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                    style={{
                      boxShadow: isHighlighted ? `0 0 24px ${item.bgGlow}` : undefined,
                      borderColor: isHighlighted ? item.color : undefined
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div 
                        className="w-2 h-7 rounded-full shrink-0 mt-0.5 transition-all duration-300"
                        style={{ 
                          backgroundColor: item.color,
                          boxShadow: isHighlighted ? `0 0 12px ${item.color}` : 'none'
                        }}
                      />
                      <div className="space-y-1 text-right">
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
          SECTION 6: SAP & TECHNOLOGY SOLUTIONS ("Technology Foundation for Intelligent Warehousing")
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Layers className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PLATFORM ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Technology Foundation for Intelligent Warehousing
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We engineer clean-core SAP technology suites layered with modern PLC robotics connections, role-based mobile RF apps, and autonomous business AI.
            </p>
          </div>

          {/* Layered Technology Ecosystem Visual */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Tech 1: SAP S/4HANA EWM */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">CORE WAREHOUSE SUITE</span>
                <Warehouse className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP S/4HANA EWM
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Integrated enterprise warehouse execution supporting both embedded and decentralized deployment models on in-memory Universal Journal.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• High-Volume Stock Ingestion</div>
                <div className="flex items-center gap-1.5">• Embedded & Decentralized Topology</div>
              </div>
            </div>

            {/* Tech 2: SAP EWM-MFS */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">ROBOTICS AUTOMATION</span>
                <Cpu className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Material Flow System (MFS)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Direct bidirectional telegram communication connecting SAP EWM to high-bay stacker cranes, conveyor PLCs, and AMR fleets without middleware.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Sub-Second PLC Telegrams</div>
                <div className="flex items-center gap-1.5">• Automated Crane Dynamic Rerouting</div>
              </div>
            </div>

            {/* Tech 3: SAP Warehouse Insights */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">SLOTTING OPTIMIZATION</span>
                <Boxes className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Warehouse Insights
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Continuous machine learning slotting analyzing SKU demand velocity to automatically recommend optimal bin reassignments and cut travel miles.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Dynamic ABC Velocity Profiling</div>
                <div className="flex items-center gap-1.5">• 30%+ Travel Distance Reduction</div>
              </div>
            </div>

            {/* Tech 4: SAP TM Synchronization */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">SUPPLY CHAIN SYNC</span>
                <Truck className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                Native TM Interlock
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Direct cross-system synchronization uniting inbound freight orders, carrier capacity bookings, dock doors, and trailer gate releases.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Dock Appointment Scheduling</div>
                <div className="flex items-center gap-1.5">• Touchless Carrier BOL Verification</div>
              </div>
            </div>

            {/* Tech 5: SAP Fiori Mobile RF */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">ROLE-BASED UX</span>
                <ScanLine className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Fiori Mobile RF
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ergonomic mobile scanning screens and voice-directed workflows optimized for ruggedized wearable scanners, smart glasses, and forklifts.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Voice-Directed Pick Checksums</div>
                <div className="flex items-center gap-1.5">• Touch-Optimized Trailer Receiving</div>
              </div>
            </div>

            {/* Tech 6: Digital Yard & IoT */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">YARD INTELLIGENCE</span>
                <Sparkles className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                Digital Yard & IoT
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automated driver check-in kiosks, RFID trailer door clearance, reefer temperature telemetry, and digital shunter move dispatching.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• RFID Portal Trailer Verification</div>
                <div className="flex items-center gap-1.5">• Shunter Mobile Dispatching</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: INDUSTRY SOLUTIONS ("Solutions for Every Stage of Warehousing")
          ========================================================================= */}
      <section id="industry-solutions" className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-slate-200 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0] shadow-2xs">
              <Warehouse className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>ENTERPRISE FUNCTIONAL CATALOG</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Solutions for Every Stage of Warehousing
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Explore specialized enterprise functional modules engineered to modernize warehouse execution across yard logistics, dynamic wave slotting, and automated robotics.
            </p>
          </div>

          {/* Solution Domain Category Tabs - 4 Symmetrical Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-7 sm:mb-8">
            {[
              { id: 'ALL', label: 'All Solutions' },
              { id: 'INBOUND_YARD', label: 'Inbound & Yard' },
              { id: 'WAVE_PICKING', label: 'Wave & Picking' },
              { id: 'ROBOTICS_MFS', label: 'Robotics & MFS' }
            ].map((cat) => {
              const isActive = activeSolutionCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveSolutionCategory(cat.id)}
                  className={`industry-category-tab px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#0070C0] text-white shadow-md shadow-[#0070C0]/25 scale-105'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-300 hover:border-slate-400 shadow-2xs'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Structured Compact 3-Column Enterprise Grid (Symmetrical 3x3 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
            {industrySolutions
              .filter((sol) => activeSolutionCategory === 'ALL' || sol.category === activeSolutionCategory)
              .map((sol) => {
                const IconComponent = sol.icon;
                return (
                  <div
                    key={sol.title}
                    className="h-[400px] rounded-xl bg-white border-2 border-slate-300 shadow-xs hover:border-[#0070C0] hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group"
                  >
                    {/* 1. Top Image Banner - 50% Pure Photo */}
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

                    {/* 2. Card Content Body - 50% Height */}
                    <div className="h-1/2 p-3.5 sm:p-4 flex flex-col justify-between space-y-2.5 overflow-hidden">
                      
                      <div className="space-y-1.5">
                        {/* Category & Icon Indicator */}
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-[#0070C0] uppercase tracking-wider">
                            {sol.categoryLabel}
                          </span>
                          <div className="p-1.5 rounded-lg bg-sky-50 text-[#0070C0] border border-slate-200 group-hover:bg-[#0070C0] group-hover:text-white transition-all">
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        {/* Title - Bold & Compact */}
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0070C0] transition-colors leading-snug">
                          {sol.title}
                        </h3>

                        {/* Description - Snug & Concise */}
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                          {sol.description}
                        </p>
                      </div>

                      {/* Key Capabilities Structured Inline Chips */}
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
          SECTION 8: BUSINESS OUTCOMES ("Turning Warehouse Complexity into Fulfillment Advantage")
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>MEASURABLE BUSINESS IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Turning Warehouse Complexity into Fulfillment Advantage
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              When trailer arrivals, dynamic slotting, MFS robotics, and enterprise ledgers operate in unison, logistics organizations achieve sustainable throughput speed.
            </p>
          </div>

          {/* 6 Outcomes (Large typography, flowing blue paths, generous whitespace, NO dashboards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Outcome 1 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Boxes className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Rapid Dock-to-Stock Velocity
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Compress inbound receipt-to-putaway and outbound pick-to-ship fulfillment cycles from multiple shifts down to under 90 minutes with zero stock drift.
              </p>
            </div>

            {/* Outcome 2 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                99.98% Pick Precision
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Interleaved barcode verification, voice check digits, and real-time inventory adjustments eliminate mispicks, phantom stock, and return logistics.
              </p>
            </div>

            {/* Outcome 3 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                30%+ Travel Distance Reduction
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dynamic AI slotting and automated task interleaving eliminate unnecessary deadhead forklift journeys across distribution center aisles.
              </p>
            </div>

            {/* Outcome 4 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Sub-Second PLC Robotics Response
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Direct PLC telegram communication via native SAP EWM-MFS eliminates third-party middleware bottlenecks and crane synchronization delays.
              </p>
            </div>

            {/* Outcome 5 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Zero Trailer Detention Fees
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Digital yard gate appointments and automated dock door scheduling ensure carrier drivers clear inbound inspection in under 30 minutes.
              </p>
            </div>

            {/* Outcome 6 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Audit-Proof Serialized Lot Traceability
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Instant genealogy tracking from supplier pallet receipts down to customer delivery scans guarantees 100% compliance audit readiness.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: SUCCESS STORY / USE CASE ("Transformation in Action")
          ========================================================================= */}
      <section className="py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-[#060D1A] via-[#0A1628] to-[#060C17] border-b border-slate-800 relative overflow-hidden text-white">
        
        {/* Subtle Ambient Background Grids & Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,112,192,0.18),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header - Compact & High-Impact */}
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Workflow className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>TRANSFORMATION ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Transformation in Action
            </h2>
            <div className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono tracking-wider uppercase">
              Intelligent Extended Warehouse Architecture
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              How high-volume distribution centers advance from legacy paper processes to an integrated clean-core automated logistics ecosystem.
            </p>
          </div>

          {/* Flowing Laser Conduit Connecting the Stages */}
          <div className="hidden lg:block relative mb-4">
            <div className="h-0.5 bg-slate-800 rounded-full w-full relative overflow-hidden">
              <motion.div 
                animate={{ x: ['-25%', '125%'] }} 
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                className="absolute top-0 bottom-0 w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee]" 
              />
            </div>
          </div>

          {/* 4 Connected Interactive Transformation Cards (Compact, Crisp, Zero Numbers) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 items-stretch mb-3.5 sm:mb-4">
            {transformationStages.map((stage, sIdx) => {
              const IconComp = stage.icon;
              const isSelected = activeTransformStage === sIdx;
              return (
                <div
                  key={stage.title}
                  onClick={() => setActiveTransformStage(sIdx)}
                  className={`cursor-pointer rounded-xl backdrop-blur-md p-4 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden border-2 ${
                    isSelected
                      ? stage.activeBorder
                      : `bg-white/[0.03] ${stage.borderBase}`
                  }`}
                >
                  {/* Subtle Top Glowing Strip on Active */}
                  {isSelected && (
                    <div className={`absolute top-0 left-0 right-0 h-0.5 ${stage.glowColor} shadow-[0_0_10px_currentColor]`} />
                  )}

                  <div className="space-y-2.5">
                    {/* Header: Phase badge & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${stage.glowColor} ${isSelected ? 'animate-ping' : ''}`} />
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${stage.textColor}`}>
                          {stage.badge}
                        </span>
                      </div>
                      <div className={`p-1.5 rounded-lg bg-white/5 border border-white/10 ${stage.textColor} group-hover:scale-110 transition-transform`}>
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Stage Title & Subtitle */}
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        {stage.title}
                      </h3>
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">
                        {stage.subtitle}
                      </div>
                    </div>

                    {/* Concise Narrative */}
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {stage.description}
                    </p>
                  </div>

                  {/* Bottom Deliverable Pillar */}
                  <div className="pt-2.5 mt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[9.5px] font-mono font-medium text-slate-400">
                      {stage.tag}
                    </span>
                    <span className={`text-[9.5px] font-mono font-bold uppercase tracking-wider ${stage.textColor} group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5`}>
                      <span>{isSelected ? 'ACTIVE' : 'INSPECT'}</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Live Transformation Console / Delta Inspector (Compact) */}
          {(() => {
            const currentStage = transformationStages[activeTransformStage];
            return (
              <div className="rounded-xl bg-slate-900/90 border-2 border-slate-700/80 p-3.5 sm:p-4 shadow-xl backdrop-blur-md relative overflow-hidden">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
                  
                  {/* Left: Active Stage Name & Transformation Contrast */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 flex-1">
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`w-2.5 h-2.5 rounded-full ${currentStage.glowColor} animate-pulse`} />
                      <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        {currentStage.title} Delta:
                      </span>
                    </div>

                    {/* Before vs After Ribbon */}
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-2 py-0.5 rounded-md bg-rose-950/60 border border-rose-500/40 text-rose-300 text-[10.5px] font-mono">
                        PRIOR: {currentStage.before}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="px-2 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-[10.5px] font-mono font-medium">
                        TRANSFORMED: {currentStage.after}
                      </span>
                    </div>
                  </div>

                  {/* Right: Stage Key Capabilities Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/10 w-full lg:w-auto">
                    {currentStage.metrics.map((item, mIdx) => (
                      <span
                        key={mIdx}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/15 text-[10px] font-mono text-slate-300 font-semibold"
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
          SECTION 11: FINAL CTA (Full-Width Blue Executive Section)
          ========================================================================= */}
      <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-r from-[#003B73] via-[#005B9E] to-[#0070C0] text-white">
        
        {/* Abstract 3D Digital Logistics / Network Mesh Visual */}
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
            <Warehouse className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR DISTRIBUTION NETWORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build a Smarter Warehouse Business?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Connect your dock scheduling, velocity slotting, MFS robotics, and enterprise inventory ledgers with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact?.('Warehouse & EWM Consultation')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to Our Warehouse Experts</span>
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
              <span>Sub-Second MFS Response</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-sky-300" />
              <span>Global 24/7 SLA Support</span>
            </span>
          </div>

        </div>

      </section>

    </div>
  );
};
