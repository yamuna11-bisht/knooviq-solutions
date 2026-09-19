import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Workflow, 
  BarChart3, 
  Users, 
  TrendingUp, 
  ChevronRight, 
  Globe2, 
  Zap, 
  Sliders,
  PackageCheck,
  Building2,
  Clock,
  Briefcase,
  Boxes,
  Truck,
  Forklift,
  MapPin,
  Compass,
  FileCheck,
  RefreshCw,
  Share2,
  Database,
  LineChart,
  Settings
} from 'lucide-react';

interface DistributionIndustryPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const DistributionIndustryPage: React.FC<DistributionIndustryPageProps> = ({ 
  onOpenContact 
}) => {
  // State for Section 2 Interactive Journey
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

  // State for Section 4 Circular Chevron Wheel
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(null);

  // State for Section 7 Solution Category Filter
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');

  // State for Section 9 Transformation Stage
  const [activeTransformStage, setActiveTransformStage] = useState<number>(0);

  // Section 2: Journey Steps (6 Steps)
  const journeySteps = [
    {
      title: 'Inbound Cross-Dock & ASN',
      subtitle: 'Dock Inflow Scheduling',
      desc: 'Advanced shipping notice verification, pallet barcode scanning, direct trailer cross-dock sorting, and automated dock door allocation.',
      icon: PackageCheck,
      metric: 'Sub-45 Min Dock Turnaround',
      tech: 'SAP EWM Cross-Dock Engine',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Dynamic High-Bay Slotting',
      subtitle: 'Velocity-Driven Putaway',
      desc: 'Automated velocity-based slot allocation ensuring high-demand fast movers are positioned near picking aisles to minimize transit travel.',
      icon: Boxes,
      metric: '38% Reduction in Picker Travel',
      tech: 'Slotting Optimization Algorithms',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Voice & RF Directed Wave Picking',
      subtitle: 'Cluster Batch Fulfillment',
      desc: 'Cluster wave release and voice-guided pick routing minimizing picker transit steps with automated weight tolerance scale checks.',
      icon: Workflow,
      metric: '99.8% Pick Accuracy Rate',
      tech: 'SAP EWM Voice Picking Mesh',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Dynamic Multi-Drop Route Sequencing',
      subtitle: 'Fleet Cube Optimization',
      desc: 'Multi-stop delivery sequencing, vehicle cube optimization, live GPS route dispatch, and axle weight distribution calculations.',
      icon: Truck,
      metric: '22% Lower Fleet Fuel Consumption',
      tech: 'SAP Transportation Management (TM)',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Electronic Proof of Delivery (EPOD)',
      subtitle: 'Mobile Glass Signature',
      desc: 'Digital glass signature capture, barcode scan confirmation, exception photo logging, and instant ledger billing clearing.',
      icon: CheckCircle2,
      metric: 'Touchless Billing Generation',
      tech: 'SAP Mobile Delivery Cockpit',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Multi-Client 3PL Rate Settlement',
      subtitle: 'Automated Freight Auditing',
      desc: 'Automated accessorial fee reconciliation, space storage billing, carrier voucher release, and instant distributor ledger posting.',
      icon: TrendingUp,
      metric: 'Zero Freight Accessorial Disputes',
      tech: 'Automated Tariff Billing Engine',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Section 3: Distribution Industry Bottlenecks (6 Cards)
  const industryChallenges = [
    {
      icon: Truck,
      tag: 'FLEET UTILIZATION',
      title: 'Suboptimal Truck Cube Utilization',
      desc: 'Inflexible load planning and manual route grouping lead to under-filled vehicles, driving up freight costs and emissions per delivered pallet.',
      footer: 'Dynamic 3D Pallet Load Sequencing'
    },
    {
      icon: Boxes,
      tag: 'WAREHOUSE EFFICIENCY',
      title: 'Picking Travel Bottlenecks',
      desc: 'Static slotting without velocity analytics forces warehouse pickers to walk excessive distances, creating order fulfillment backlog during peak waves.',
      footer: 'Algorithmic Velocity Slotting'
    },
    {
      icon: FileCheck,
      tag: 'BILLING DISPUTES',
      title: 'Freight Accessorial Disputes',
      desc: 'Unrecorded tailgate fees, waiting time demurrage, and manual delivery receipts spark protracted invoice disputes between shippers and carriers.',
      footer: 'Automated Self-Billing & Digital EPOD'
    },
    {
      icon: RefreshCw,
      tag: 'CONSIGNMENT RISK',
      title: 'Dealer Consignment Shrinkage',
      desc: 'Lack of real-time inventory visibility at dealer partner yards causes unaccounted shrinkage and delayed stock replenishment reconciliation.',
      footer: 'Real-Time Yard Inventory Telemetry'
    },
    {
      icon: Building2,
      tag: '3PL COMPLEXITY',
      title: 'Multi-Tenant Billing Overhead',
      desc: 'Managing distinct service level agreements, custom handling charges, and square-footage rates across dozens of wholesale clients burns administrative hours.',
      footer: 'Automated 3PL Tariff Calculation'
    },
    {
      icon: Share2,
      tag: 'DROP-SHIP CHALLENGE',
      title: 'Supplier Drop-Ship Blind Spots',
      desc: 'Inability to track supplier direct-to-customer shipments causes blind spots in customer service and delayed billing milestones.',
      footer: 'Unified Supplier Drop-Ship Portal'
    }
  ];

  // Section 4: 8 Radial Capability Pillars
  const capabilityPillars = [
    {
      id: 0,
      title: 'Multi-Client 3PL Logistics Hub',
      desc: 'Multi-tenant warehouse management with client-specific rate tariffs, space billing, and segregated stock pools.',
      icon: Building2,
      badge: 'DC EXECUTION',
      color: '#0070C0'
    },
    {
      id: 1,
      title: 'Dynamic Fleet Route Optimization',
      desc: 'Algorithmic multi-drop route sequencing maximizing truck cube space, balancing axle loads, and minimizing fuel burn.',
      icon: Truck,
      badge: 'FLEET LOGIC',
      color: '#00A3E0'
    },
    {
      id: 2,
      title: 'Automated Cross-Docking Engine',
      desc: 'Direct inbound-to-outbound pallet transfer workflows eliminating intermediate staging storage buffers.',
      icon: PackageCheck,
      badge: 'RAPID TRANSIT',
      color: '#38BDF8'
    },
    {
      id: 3,
      title: 'Touchless Proof-of-Delivery Clearing',
      desc: 'Electronic glass signature sync releasing instant self-billing vouchers and customer credit memos.',
      icon: CheckCircle2,
      badge: 'DIGITAL EPOD',
      color: '#005B9E'
    },
    {
      id: 4,
      title: 'Automated Freight Cost Settlement',
      desc: 'Automated freight accruals, accessorial charge verification, and carrier dispute mitigation on clean ERP.',
      icon: FileCheck,
      badge: 'FREIGHT CLEARING',
      color: '#003B73'
    },
    {
      id: 5,
      title: 'Velocity Slotting & Voice Picking',
      desc: 'High-bay warehouse slotting based on SKU turns, paired with multi-order RF and voice-guided wave execution.',
      icon: Boxes,
      badge: 'SLOTTING AI',
      color: '#0284C7'
    },
    {
      id: 6,
      title: 'Consignment Stock & Yard Governance',
      desc: 'Managing dealer partner consignment inventory, automated replenishment triggers, and consumption billing.',
      icon: RefreshCw,
      badge: 'YARD STOCK',
      color: '#0369A1'
    },
    {
      id: 7,
      title: 'Distributor Margin & Cost-to-Serve',
      desc: 'Multidimensional analysis measuring true net margin after freight, handling, and custom discount allocations.',
      icon: BarChart3,
      badge: 'COST-TO-SERVE',
      color: '#075985'
    }
  ];

  // Helper function to calculate SVG chevron segment paths for Section 4
  const getChevronPath = (index: number, total: number = 8) => {
    const cx = 250;
    const cy = 250;
    const rIn = 110;
    const rOut = 215;
    const angleStep = 360 / total;
    const startAngle = index * angleStep;
    const endAngle = (index + 1) * angleStep;
    const rad = (deg: number) => (deg - 90) * (Math.PI / 180);

    const sIn = { x: cx + rIn * Math.cos(rad(startAngle)), y: cy + rIn * Math.sin(rad(startAngle)) };
    const sOut = { x: cx + rOut * Math.cos(rad(startAngle)), y: cy + rOut * Math.sin(rad(startAngle)) };
    const eIn = { x: cx + rIn * Math.cos(rad(endAngle)), y: cy + rIn * Math.sin(rad(endAngle)) };
    const eOut = { x: cx + rOut * Math.cos(rad(endAngle)), y: cy + rOut * Math.sin(rad(endAngle)) };
    const arrowTipAngle = endAngle + 4;
    const tip = {
      x: cx + ((rIn + rOut) / 2) * Math.cos(rad(arrowTipAngle)),
      y: cy + ((rIn + rOut) / 2) * Math.sin(rad(arrowTipAngle))
    };

    return `M ${sIn.x} ${sIn.y} L ${sOut.x} ${sOut.y} A ${rOut} ${rOut} 0 0 1 ${eOut.x} ${eOut.y} L ${tip.x} ${tip.y} L ${eIn.x} ${eIn.y} A ${rIn} ${rIn} 0 0 0 ${sIn.x} ${sIn.y} Z`;
  };

  const getIconCoords = (index: number, total: number = 8) => {
    const cx = 250;
    const cy = 250;
    const rMid = 162;
    const angle = (index + 0.5) * (360 / total) - 90;
    const rad = angle * (Math.PI / 180);
    return { x: cx + rMid * Math.cos(rad), y: cy + rMid * Math.sin(rad) };
  };



  // Section 6: SAP & Technology Solutions (6 Cards)
  const sapTechSolutions = [
    {
      title: 'SAP S/4HANA Wholesale Distribution Clean Core',
      tag: 'CORE DISTRIBUTION ERP',
      desc: 'Unified distribution backbone managing complex customer contracts, volume rebate structures, real-time ATP checks, and multi-facility inventory ledgers.',
      features: ['Advanced Available-to-Promise (aATP)', 'Automated Customer Pricing Matrices', 'Multi-Echelon Safety Stock Management'],
      icon: Database
    },
    {
      title: 'SAP Extended Warehouse Management (EWM)',
      tag: 'ADVANCED WMS',
      desc: 'High-performance warehouse engine orchestrating automated storage and retrieval systems (ASRS), voice-directed wave picking, and yard staging.',
      features: ['Automated Velocity Slotting Engine', 'Labor Productivity Tracking', 'Cartonization & Pallet Nesting AI'],
      icon: Boxes
    },
    {
      title: 'SAP Transportation Management (TM)',
      tag: 'FLEET & FREIGHT',
      desc: 'End-to-end transportation planning suite managing multi-drop route optimization, freight carrier rate tendering, and accessorial billing verification.',
      features: ['3D Vehicle Cube Load Sequencing', 'Carrier Tender Automation', 'Accessorial Cost Dispute Mitigation'],
      icon: Truck
    },
    {
      title: 'SAP Business Technology Platform (BTP)',
      tag: 'AGILE LOGISTICS MESH',
      desc: 'Cloud platform hosting driver mobile applications, IoT GPS trailer trackers, supplier drop-ship EDI integrations, and customer self-service portals.',
      features: ['Driver EPOD Mobile Cockpit', 'Electronic Data Interchange (EDI) Hub', 'Real-Time Order Tracking APIs'],
      icon: Layers
    },
    {
      title: 'SAP Fiori Logistics & Dispatch Cockpit',
      tag: 'ROLE-BASED UX',
      desc: 'Intuitive touch-screen dashboards for warehouse supervisors, dispatch managers, forklift operators, and customer service representatives.',
      features: ['Live Dock Door Marshalling View', 'Forklift Driver Task Assignment', 'Delivery Exception Alert Dashboard'],
      icon: Settings
    },
    {
      title: 'AI Route Sequencing & Cost-to-Serve',
      tag: 'PREDICTIVE AI',
      desc: 'Machine learning algorithms forecasting delivery delays, optimizing fuel-efficient driving corridors, and measuring true customer cost-to-serve.',
      features: ['Dynamic Traffic Corridor Rerouting', 'Accurate Customer Cost-to-Serve Models', 'Predictive Truck Maintenance Telemetry'],
      icon: Sparkles
    }
  ];

  // Section 7: 9 Modular Enterprise Industry Solutions (Symmetrical 3x3 Grid)
  const industrySolutions = [
    {
      title: 'Multi-Client 3PL & Wholesale Warehouse Hub',
      tag: 'DC EXECUTION',
      category: 'COMMERCE',
      categoryLabel: 'Warehouse Logistics',
      description: 'Multi-tenant warehouse management with client-specific rate tariffs, space billing, and segregated stock pools.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      highlights: ['Client Billing Tariffs', 'Segregated Tenant Ledgers', 'Automated Handling Fees'],
      icon: Building2
    },
    {
      title: 'Dynamic Route Planning & Load Optimization',
      tag: 'FLEET LOGIC',
      category: 'COMMERCE',
      categoryLabel: 'Warehouse Logistics',
      description: 'AI load sequencing balancing cube volume, vehicle weight limits, delivery time-windows, and driver shifts.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
      highlights: ['Cube Maximization', 'Multi-Stop Delivery Sequencing', 'Live Fleet GPS Telemetry'],
      icon: Truck
    },
    {
      title: 'Automated Cross-Dock Orchestration',
      tag: 'RAPID TRANSIT',
      category: 'COMMERCE',
      categoryLabel: 'Warehouse Logistics',
      description: 'Direct inbound-to-outbound pallet transfer workflows eliminating intermediate storage steps.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
      highlights: ['Dock Door Scheduling', 'Zero-Putaway Flow', 'Transit Milestone Tracking'],
      icon: PackageCheck
    },
    {
      title: 'Freight Cost Settlement & Audit',
      tag: 'FREIGHT CLEARING',
      category: 'SUPPLY_CHAIN',
      categoryLabel: 'Fleet & Freight',
      description: 'Automated freight accruals, accessorial charge verification, and carrier dispute mitigation on ERP.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      highlights: ['Automated Rate Matrices', 'Accessorial Charge Audit', 'Self-Billing Invoicing'],
      icon: FileCheck
    },
    {
      title: 'Fleet Telemetry & Dispatch Management',
      tag: 'FLEET CONTROL',
      category: 'SUPPLY_CHAIN',
      categoryLabel: 'Fleet & Freight',
      description: 'Driver mobile app with navigation guidance, digital checklists, electronic proof of delivery, and delay reporting.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
      highlights: ['Glass Signature Capture', 'Driver Pre-Trip Check', 'Real-Time ETA Updates'],
      icon: MapPin
    },
    {
      title: 'Consignment Stock & Vendor Hub',
      tag: 'STOCK GOVERNANCE',
      category: 'SUPPLY_CHAIN',
      categoryLabel: 'Fleet & Freight',
      description: 'Managing dealer partner consignment inventory, automated replenishment triggers, and consumption billing.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
      highlights: ['Dealer Consignment Audit', 'Consumption Invoicing', 'Automatic Stock Transfers'],
      icon: Boxes
    },
    {
      title: 'Drop-Shipment Order Routing Hub',
      tag: 'CHANNEL ROUTING',
      category: 'CUSTOMER',
      categoryLabel: 'Channel Commerce',
      description: 'Intelligent order splitting routing delivery items directly from suppliers to customer doors without hub stopovers.',
      image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80',
      highlights: ['Supplier Drop-Ship EDI', 'Blind Shipping Slips', 'Split Delivery Tracking'],
      icon: Share2
    },
    {
      title: 'Returns & RMA Reverse Triage',
      tag: 'RETURN TRIAGE',
      category: 'CUSTOMER',
      categoryLabel: 'Channel Commerce',
      description: 'Accelerated reverse logistics inspection, automated restock categorization, and vendor warranty return routing.',
      image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=800&q=80',
      highlights: ['RMA Barcode Intake', 'Restock Quality Grading', 'Automated Credit Memos'],
      icon: RefreshCw
    },
    {
      title: 'Distributor Margin & Cost-to-Serve Analytics',
      tag: 'APPLIED AI',
      category: 'CUSTOMER',
      categoryLabel: 'Channel Commerce',
      description: 'Detailed multidimensional analysis measuring true net margin after freight, handling, and discount allocations.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      highlights: ['Cost-to-Serve Profiling', 'Account Margin Ranking', 'Route Profitability Matrix'],
      icon: Sparkles
    }
  ];

  // Section 8: Measurable Business Outcomes & ROI (6 Cards)
  const businessOutcomes = [
    {
      metric: '+28%',
      label: 'Vehicle Cube Utilization',
      desc: '3D algorithmic pallet nesting and multi-drop load sequencing maximize truck cargo space and eliminate wasted trailer miles.',
      icon: Truck
    },
    {
      metric: '0.0',
      label: 'Freight Billing Disputes',
      desc: 'Touchless electronic proof of delivery (EPOD) and automated rate matrices eliminate invoice discrepancies between shippers and carriers.',
      icon: FileCheck
    },
    {
      metric: '-38%',
      label: 'Warehouse Picker Transit Travel',
      desc: 'Dynamic velocity-based high-bay slotting places fast-moving SKUs along optimized picking circuits, accelerating wave completion.',
      icon: Boxes
    },
    {
      metric: '99.8%',
      label: 'Same-Day Order Fulfillment',
      desc: 'Automated cross-dock orchestration and real-time aATP inventory allocation ensure reliable next-day delivery commitments.',
      icon: CheckCircle2
    },
    {
      metric: '-22%',
      label: 'Fleet Fuel & Carbon Emissions',
      desc: 'Dynamic GPS route sequencing and live traffic corridor rerouting minimize fleet driving hours and fuel burn.',
      icon: MapPin
    },
    {
      metric: '3.2x',
      label: 'Faster Cash Collection Velocity',
      desc: 'Instant digital signature synchronization triggers automated billing voucher creation without waiting for physical paper delivery receipts.',
      icon: TrendingUp
    }
  ];

  // Section 9: Transformation in Action (4 Interactive Stages)
  const transformationStages = [
    {
      phase: 'INITIAL CHALLENGE',
      badge: 'DISPATCH WHITEBOARDS',
      title: 'Manual Dispatch',
      subtitle: 'Static Scheduling',
      description: 'Wholesale distributor relying on dispatcher whiteboards and manual paperwork, leading to under-utilized truck cubes, missed delivery appointment windows, and billing disputes.',
      accent: 'rose',
      borderBase: 'border-rose-500/30 hover:border-rose-400',
      activeBorder: 'border-rose-400 ring-2 ring-rose-500/30 bg-rose-950/20 shadow-[0_0_25px_rgba(244,63,94,0.2)]',
      glowColor: 'bg-rose-500',
      textColor: 'text-rose-400',
      icon: Activity,
      tag: 'Fragmented Fleet Logs',
      before: 'Manual whiteboard scheduling & empty truck space',
      after: 'Automated dynamic route sequencing and cube packing',
      metrics: ['Under-Filled Vehicles', 'Paper Receipt Discrepancies', 'Carrier Invoice Disputes']
    },
    {
      phase: 'STRATEGIC FRAMEWORK',
      badge: 'CLEAN CORE',
      title: 'Logistics Event Mesh',
      subtitle: 'Decoupled Fleet Fabric',
      description: 'Connecting warehouse RF terminals, vehicle GPS trackers, and customer order ledgers into a clean-core logistics mesh, broadcasting order status updates and proof of delivery in real time.',
      accent: 'sky',
      borderBase: 'border-sky-500/30 hover:border-sky-400',
      activeBorder: 'border-sky-400 ring-2 ring-sky-500/30 bg-sky-950/20 shadow-[0_0_25px_rgba(56,189,248,0.2)]',
      glowColor: 'bg-sky-500',
      textColor: 'text-sky-400',
      icon: Workflow,
      tag: 'Logistics Architecture Bus',
      before: 'Overnight batch updates with delayed delivery confirmation',
      after: 'Sub-second real-time GPS tracking and instant EPOD sync',
      metrics: ['Decoupled Core', 'Live Telemetry Bus', 'Automated Route Engine']
    },
    {
      phase: 'DEPLOYED STACK',
      badge: 'LIVE ECOSYSTEM',
      title: 'Engineered Stack',
      subtitle: 'S/4HANA Distribution + TM + EWM',
      description: 'Deploying SAP S/4HANA for Wholesale Distribution integrated with Transportation Management (TM) and Extended Warehouse Management (EWM), automating wave releases and freight cost settlement.',
      accent: 'cyan',
      borderBase: 'border-cyan-500/30 hover:border-cyan-400',
      activeBorder: 'border-cyan-400 ring-2 ring-cyan-500/30 bg-cyan-950/20 shadow-[0_0_25px_rgba(34,211,238,0.2)]',
      glowColor: 'bg-cyan-500',
      textColor: 'text-cyan-400',
      icon: Cpu,
      tag: 'Orchestrated S/4HANA',
      before: 'Manual driver manifests and contentious freight invoicing',
      after: 'Touchless electronic proof of delivery and self-billing clearing',
      metrics: ['S/4HANA Distribution Core', 'SAP TM Route Engine', 'EWM High-Bay Automation']
    },
    {
      phase: 'STRATEGIC VALUE',
      badge: 'REALIZED IMPACT',
      title: 'Fulfillment Velocity',
      subtitle: 'Touchless Distribution',
      description: 'Maximizing truck load utilization, slashing customer delivery dispute cycles to zero, guaranteeing next-day dispatch, and boosting wholesale distribution operating margins.',
      accent: 'emerald',
      borderBase: 'border-emerald-500/30 hover:border-emerald-400',
      activeBorder: 'border-emerald-400 ring-2 ring-emerald-500/30 bg-emerald-950/20 shadow-[0_0_25px_rgba(52,211,153,0.2)]',
      glowColor: 'bg-emerald-500',
      textColor: 'text-emerald-400',
      icon: ShieldCheck,
      tag: 'Touchless Fulfillment',
      before: 'High fuel wastage and slow cash collection cycles',
      after: 'Predictable high-velocity distribution and verified margins',
      metrics: ['Maximized Fleet Utilization', 'Zero Invoice Disputes', 'Protected Distribution Margins']
    }
  ];



  const filteredSolutions = activeSolutionCategory === 'ALL'
    ? industrySolutions
    : industrySolutions.filter(item => item.category === activeSolutionCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Pure Enterprise Distribution Hero)
          ========================================================================= */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        
        {/* Full-Bleed Enterprise Background Image with Seamless Cinematic Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80" 
            alt="Automated High Bay Distribution and Logistics Center" 
            className="w-full h-full object-cover object-center"
          />
          {/* Multi-layered cinematic gradient scrim: left dark for perfect readability, smooth fade to showcase facility on right */}
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
                <Truck className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>
              
              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Wholesale <span className="text-cyan-400">Distribution</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Maximizing Warehouse Slotting, Dynamic Fleet Routing & Touchless Billing Settlement.
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
                Transform wholesale distribution and 3PL networks with <strong className="text-white font-semibold">SAP S/4HANA Clean Core</strong>, <strong className="text-cyan-300 font-semibold">automated multi-drop route optimization</strong>, and <strong className="text-white font-semibold">touchless electronic proof-of-delivery</strong>.
              </p>
              
              {/* Clean Feature Highlights */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>SAP EWM & TM Architecture</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>3D Truck Cube Maximizer</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Instant EPOD Billing</span>
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
                  <Truck className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">FLEET CUBE</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Maximized Cube Density</div>
                <div className="text-xs text-slate-300 mt-0.5">Automated Pallet Packing</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Forklift className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">PICKER TRANSIT</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Optimized Pick Transit</div>
                <div className="text-xs text-slate-300 mt-0.5">Dynamic Warehouse Slotting</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <FileCheck className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">DISPUTE-FREE</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Zero-Dispute Settlement</div>
                <div className="text-xs text-slate-300 mt-0.5">Instant Digital EPOD</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">CASH VELOCITY</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Rapid Billing Velocity</div>
                <div className="text-xs text-slate-300 mt-0.5">Touchless Invoicing Cycle</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE INDUSTRY PERSPECTIVE
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Narrative Column (col-span-6) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-[#0070C0] uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                <span>EXECUTIVE PERSPECTIVE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Transforming Wholesale Warehouses into <span className="text-[#0070C0]">High-Velocity Fulfillment Hubs</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] pl-4 py-2 bg-gradient-to-r from-sky-50/80 to-transparent rounded-r-lg">
                <p className="text-sm sm:text-base font-semibold text-slate-800 italic">
                  "Wholesale distribution is a game of millimeters and minutes. Empty space in truck trailers and excessive picker walking steps in the warehouse quietly erode operating margins."
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-normal">
                <p>
                  Wholesale distributors face tightening customer delivery windows, escalating carrier freight rates, and mounting client expectations for real-time visibility. Traditional facilities rely on fragmented WMS tools, dispatcher whiteboards, and paper delivery receipts that spark protracted invoice disputes.
                </p>
                <p>
                  KNOOVIQ architects clean-core SAP S/4HANA Wholesale Distribution ecosystems integrated with SAP Extended Warehouse Management (EWM) and Transportation Management (TM). By binding inbound advance shipping notices to velocity-based slotting, 3D trailer cube packing, and instant digital proof of delivery, we unlock touchless fulfillment and superior operating margins.
                </p>
              </div>

              {/* 3 Strategic Pillars Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center mb-2 font-black text-sm">
                    <Boxes className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-900">Velocity Slotting</div>
                  <div className="text-[11px] text-slate-500 mt-1">Algorithmic high-bay placement based on SKU turns</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center mb-2 font-black text-sm">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-900">Fleet Route AI</div>
                  <div className="text-[11px] text-slate-500 mt-1">Multi-drop load sequencing & 3D cube optimization</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center mb-2 font-black text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-900">Digital EPOD</div>
                  <div className="text-[11px] text-slate-500 mt-1">Instant glass signature billing without disputes</div>
                </div>
              </div>

            </div>

            {/* Right Interactive Photo Showcase + Navigator (col-span-6) */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Photo Display Card with Live State */}
              <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl group">
                <img 
                  src={journeySteps[activeJourneyStep].image} 
                  alt={journeySteps[activeJourneyStep].title} 
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />
                
                {/* Stage Badge Overlay */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-bold">
                  STAGE 0{activeJourneyStep + 1} OF 06
                </div>

                {/* Tech Badge Overlay */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-sky-500/90 backdrop-blur-md border border-sky-400 text-white text-xs font-bold shadow-lg">
                  {journeySteps[activeJourneyStep].tech}
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10">
                  <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider">{journeySteps[activeJourneyStep].subtitle}</div>
                  <div className="text-base sm:text-lg font-bold text-white leading-tight">{journeySteps[activeJourneyStep].title}</div>
                  <div className="text-xs text-slate-300 mt-1 line-clamp-1">{journeySteps[activeJourneyStep].desc}</div>
                </div>
              </div>

              {/* Stage Navigation Grid (6 Buttons) */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {journeySteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = activeJourneyStep === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveJourneyStep(idx)}
                      className={`p-2.5 rounded-xl text-left border transition-all flex flex-col items-center text-center gap-1.5 ${
                        isActive 
                          ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md shadow-sky-600/30 ring-2 ring-sky-300' 
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#0070C0]'}`} />
                      <span className="text-[10px] font-bold leading-tight line-clamp-1">{step.title.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Stage Detail Card */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-sky-50 to-slate-50 border border-sky-200 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono font-bold text-[#0070C0] uppercase tracking-wider">
                    TARGET OPERATIONAL METRIC
                  </div>
                  <div className="text-sm font-black text-slate-900">
                    {journeySteps[activeJourneyStep].metric}
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-white border border-sky-300 text-xs font-semibold text-[#0070C0] shadow-sm">
                  Verified DC Benchmark
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: DISTRIBUTION INDUSTRY CHALLENGES (6 Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-600 uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5" />
              <span>LOGISTICS BOTTLENECKS & EXPENSE LEAKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Critical Obstacles Constraining <span className="text-[#0070C0]">Wholesale Distributors</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              High-velocity distribution networks battle fuel inefficiencies, manual dispatch bottlenecks, picker transit fatigue, and billing reconciliations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryChallenges.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 group-hover:bg-sky-50 group-hover:text-[#0070C0] transition-colors">
                        {item.tag}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-600 group-hover:bg-[#0070C0] group-hover:text-white transition-all flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-[#0070C0] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0070C0]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0070C0]" />
                      {item.footer}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CIRCULAR CHEVRON RADIAL DIAGRAM (Synchronized Hover)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#070B14] text-white border-b border-slate-800 relative overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0070C0]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-cyan-300">
              <Cpu className="w-3.5 h-3.5 text-cyan-300" />
              <span>PLATFORM ECOSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Unified <span className="text-[#38BDF8]">Wholesale Distribution Platform</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal">
              Eight synchronized architectural capabilities connecting supplier ASNs, high-bay slotting, dynamic multi-drop routing, and touchless digital EPOD billing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 4 Cards (Indices 7, 6, 5, 4) */}
            <div className="lg:col-span-4 space-y-3 order-2 lg:order-1">
              {[7, 6, 5, 4].map((idx) => {
                const item = capabilityPillars[idx];
                const Icon = item.icon;
                const isHovered = hoveredWheelIndex === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredWheelIndex(idx)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? 'bg-gradient-to-r from-sky-950/80 to-slate-900 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.25)] translate-x-1'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg transition-colors ${
                        isHovered ? 'bg-[#0070C0] text-white' : 'bg-slate-800 text-slate-300'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider">{item.badge}</span>
                          <span className="text-[10px] font-mono text-slate-500">0{idx + 1}</span>
                        </div>
                        <h4 className={`text-sm font-bold transition-colors ${isHovered ? 'text-white' : 'text-slate-200'}`}>
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Circular Chevron Wheel (500x500 SVG) */}
            <div className="lg:col-span-4 flex justify-center order-1 lg:order-2 py-4">
              <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px]">
                <svg viewBox="0 0 500 500" className="w-full h-full transform -rotate-90">
                  {capabilityPillars.map((pillar, idx) => {
                    const isHovered = hoveredWheelIndex === idx;
                    const path = getChevronPath(idx);
                    return (
                      <path
                        key={idx}
                        d={path}
                        onClick={() => setHoveredWheelIndex(idx)}
                        onMouseEnter={() => setHoveredWheelIndex(idx)}
                        onMouseLeave={() => setHoveredWheelIndex(null)}
                        fill={isHovered ? '#0070C0' : '#1E293B'}
                        stroke={isHovered ? '#38BDF8' : '#334155'}
                        strokeWidth={isHovered ? '2.5' : '1.5'}
                        className="cursor-pointer transition-all duration-300 hover:brightness-125"
                      />
                    );
                  })}
                  
                  {/* Icon Markers on Chevrons */}
                  {capabilityPillars.map((pillar, idx) => {
                    const coords = getIconCoords(idx);
                    const isHovered = hoveredWheelIndex === idx;
                    return (
                      <g 
                        key={`icon-${idx}`} 
                        className="pointer-events-none"
                        transform={`rotate(90 ${coords.x} ${coords.y})`}
                      >
                        <circle
                          cx={coords.x}
                          cy={coords.y}
                          r="15"
                          fill={isHovered ? '#FFFFFF' : '#0F172A'}
                          stroke={isHovered ? '#38BDF8' : '#475569'}
                          strokeWidth="1.5"
                        />
                        <text
                          x={coords.x}
                          y={coords.y + 4}
                          textAnchor="middle"
                          fill={isHovered ? '#0070C0' : '#94A3B8'}
                          fontSize="11"
                          fontWeight="bold"
                          fontFamily="monospace"
                        >
                          {idx + 1}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Center Hub */}
                <div className="absolute inset-0 m-auto w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-2 border-cyan-400/40 shadow-[0_0_30px_rgba(0,112,192,0.4)] flex flex-col items-center justify-center p-3 text-center pointer-events-none">
                  <Truck className="w-6 h-6 text-[#38BDF8] mb-1" />
                  <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-widest leading-tight">
                    KNOOVIQ DIST
                  </span>
                  <span className="text-xs font-black text-white leading-tight">
                    Logistics Hub
                  </span>
                </div>
              </div>
            </div>

            {/* Right 4 Cards (Indices 0, 1, 2, 3) */}
            <div className="lg:col-span-4 space-y-3 order-3">
              {[0, 1, 2, 3].map((idx) => {
                const item = capabilityPillars[idx];
                const Icon = item.icon;
                const isHovered = hoveredWheelIndex === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredWheelIndex(idx)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? 'bg-gradient-to-r from-slate-900 to-sky-950/80 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.25)] -translate-x-1'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg transition-colors ${
                        isHovered ? 'bg-[#0070C0] text-white' : 'bg-slate-800 text-slate-300'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider">{item.badge}</span>
                          <span className="text-[10px] font-mono text-slate-500">0{idx + 1}</span>
                        </div>
                        <h4 className={`text-sm font-bold transition-colors ${isHovered ? 'text-white' : 'text-slate-200'}`}>
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-normal">
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
          SECTION 6: SAP & TECHNOLOGY SOLUTIONS (6 Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-[#0070C0] uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>ENTERPRISE TECHNOLOGY FOUNDATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Enterprise SAP Architecture for <span className="text-[#0070C0]">Wholesale Distribution</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Engineered on a Clean Core foundation, combining SAP S/4HANA Wholesale Distribution, Extended Warehouse Management (EWM), and Transportation Management (TM).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sapTechSolutions.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-sky-50 text-[10px] font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                        {sol.tag}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#0070C0] group-hover:bg-[#0070C0] group-hover:text-white transition-colors flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-[#0070C0] transition-colors">
                      {sol.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {sol.desc}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      {sol.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0070C0]">
                    <span>Architected for Clean Core</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: INDUSTRY SOLUTIONS (4 Filter Tabs, 9 Modular Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-semibold text-cyan-800 uppercase tracking-wider">
              <Boxes className="w-3.5 h-3.5 text-cyan-700" />
              <span>MODULAR INDUSTRY SOLUTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Pre-Packaged Capabilities for <span className="text-[#0070C0]">Distribution Networks</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Specialized functional accelerators designed for rapid implementation across 3PL facilities, private truck fleets, and distributor trade channels.
            </p>

            {/* 4 Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {[
                { id: 'ALL', label: 'All Solutions (9)' },
                { id: 'COMMERCE', label: 'Warehouse Logistics' },
                { id: 'SUPPLY_CHAIN', label: 'Fleet & Freight' },
                { id: 'CUSTOMER', label: 'Channel Commerce' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSolutionCategory(tab.id)}
                  className={`industry-category-tab px-4 py-2 rounded-xl transition-all ${
                    activeSolutionCategory === tab.id
                      ? 'bg-[#0070C0] text-white shadow-md shadow-sky-600/30'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Symmetrical 3x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="h-[400px] bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Image Header - 50% Height */}
                  <div className="relative h-1/2 w-full overflow-hidden shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono font-bold">
                      {item.tag}
                    </div>
                    <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-white text-xs font-semibold">
                      <span>{item.categoryLabel}</span>
                      <Icon className="w-4 h-4 text-cyan-300" />
                    </div>
                  </div>

                  {/* Body Content - 50% Height */}
                  <div className="h-1/2 p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0070C0] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      {item.highlights.map((high, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0070C0] shrink-0" />
                          <span className="truncate">{high}</span>
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
          SECTION 8: BUSINESS OUTCOMES & ROI (6 Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>QUANTIFIABLE BUSINESS VALUE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Measurable ROI Across Enterprise <span className="text-[#0070C0]">Distributors</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Verified operational efficiencies and financial gains documented across high-bay wholesale distribution and 3PL networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessOutcomes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl sm:text-4xl font-black text-[#0070C0] tracking-tight">
                        {item.metric}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] group-hover:bg-[#0070C0] group-hover:text-white transition-colors flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {item.label}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Verified Logistics Audit</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: TRANSFORMATION IN ACTION (Interactive 4-Phase Console)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#070B14] text-white border-b border-slate-800 relative overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-cyan-300">
              <Workflow className="w-3.5 h-3.5" />
              <span>TRANSFORMATION BENCHMARK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Executing the Distribution Transformation <span className="text-[#38BDF8]">Roadmap</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal">
              A structured four-phase modernization journey elevating wholesale distributors from manual whiteboard dispatch to an autonomous, touchless logistics powerhouse.
            </p>
          </div>

          {/* 4 Interactive Stage Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {transformationStages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeTransformStage === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveTransformStage(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? stage.activeBorder
                      : `bg-slate-900/60 ${stage.borderBase}`
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                        {stage.phase}
                      </span>
                      <Icon className={`w-4 h-4 ${stage.textColor}`} />
                    </div>

                    <div className="space-y-1">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {stage.badge}
                      </span>
                      <h3 className="text-base font-bold text-white pt-1">{stage.title}</h3>
                      <div className="text-xs text-slate-400 font-medium">{stage.subtitle}</div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal line-clamp-3">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className={stage.textColor}>{stage.tag}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'translate-x-1 text-white' : 'text-slate-600'} transition-transform`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Live Transformation Delta Console */}
          <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-md">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              
              <div className="space-y-2 max-w-xl">
                <div className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                  ACTIVE PHASE: {transformationStages[activeTransformStage].phase} — {transformationStages[activeTransformStage].title}
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">
                  {transformationStages[activeTransformStage].description}
                </div>
              </div>

              {/* Before vs After Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
                <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/30">
                  <div className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-wider mb-1">PRIOR STATE</div>
                  <div className="text-xs text-slate-200 font-medium leading-relaxed">{transformationStages[activeTransformStage].before}</div>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
                  <div className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">TRANSFORMED STATE</div>
                  <div className="text-xs text-slate-200 font-medium leading-relaxed">{transformationStages[activeTransformStage].after}</div>
                </div>
              </div>

            </div>

            {/* Checklist Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-4 mt-4 border-t border-slate-800">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-2">VERIFIED MILESTONES:</span>
              {transformationStages[activeTransformStage].metrics.map((m, mIdx) => (
                <span key={mIdx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-xs font-medium text-slate-200 border border-slate-700">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{m}</span>
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>



      {/* =========================================================================
          SECTION 11: FINAL CTA (Full-Width Blue Executive Section)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#003B73] via-[#005B9E] to-[#0070C0] text-white relative overflow-hidden">
        
        {/* Subtle Decorative Backdrop Elements */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-cyan-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMMENCE YOUR LOGISTICS MODERNIZATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to Maximize Fleet Density and Achieve <br className="hidden sm:inline" />
            <span className="text-cyan-200">Touchless Distribution Velocity?</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-100 max-w-2xl mx-auto font-normal leading-relaxed">
            Partner with KNOOVIQ's senior warehouse and transportation architects to design an agile SAP S/4HANA distribution network customized for your operations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => onOpenContact && onOpenContact('Wholesale Distribution Transformation')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-[#003B73] hover:bg-slate-100 text-sm font-bold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
            >
              <span>Talk to Our Distribution Experts</span>
              <ArrowRight className="w-4 h-4 text-[#003B73]" />
            </button>
            <Link
              to="/services/sap-s4hana"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <span>Explore SAP Solutions</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-slate-200 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>SAP EWM & TM Certified</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-300" />
              <span>Dynamic 3D Pallet Nesting</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-300" />
              <span>Zero-Dispute EPOD Settlement</span>
            </span>
          </div>

        </div>
      </section>

    </div>
  );
};
