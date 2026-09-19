import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  UtensilsCrossed, 
  Truck, 
  Boxes, 
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
  Thermometer,
  ShieldAlert,
  Clock,
  Apple,
  Cloud,
  Scan,
  Compass,
  FileText,
  RefreshCw,
  Search,
  ShoppingCart
} from 'lucide-react';

interface FoodBeverageIndustryPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const FoodBeverageIndustryPage: React.FC<FoodBeverageIndustryPageProps> = ({ 
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

  // Section 4: 8-Segment Circular Chevron Wheel (KNOOVIQ F&B Platform Ecosystem)
  const wheelSegments = [
    {
      id: 'traceability',
      title: 'Farm-to-Fork Traceability',
      desc: 'Sub-second bidirectional lot tracking from grower harvest to shelf pack',
      side: 'right',
      color: '#22C55E', // Green
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(34, 197, 94, 0.3)',
      icon: ShieldCheck
    },
    {
      id: 'cold-chain',
      title: 'Continuous Cold Chain Telemetry',
      desc: 'Live IoT sensor logging across refrigerated storage bays and transit fleets',
      side: 'right',
      color: '#84CC16', // Lime
      textColor: 'text-lime-400',
      bgGlow: 'rgba(132, 204, 22, 0.3)',
      icon: Thermometer
    },
    {
      id: 'recipe',
      title: 'Recipe & Allergen Governance',
      desc: 'Standardized batch formulations with automated allergen isolation',
      side: 'right',
      color: '#EAB308', // Yellow
      textColor: 'text-yellow-400',
      bgGlow: 'rgba(234, 179, 8, 0.3)',
      icon: Sliders
    },
    {
      id: 'fefo',
      title: 'FEFO Inventory Rotation',
      desc: 'Automated warehouse wave releases prioritizing earliest expiring lots first',
      side: 'right',
      color: '#F97316', // Orange
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: Clock
    },
    {
      id: 'dsd',
      title: 'Direct Store Delivery (DSD)',
      desc: 'Mobile van route sales, direct-to-chiller merchandising, and spot billing',
      side: 'left',
      color: '#F43F5E', // Rose
      textColor: 'text-rose-400',
      bgGlow: 'rgba(244, 63, 94, 0.3)',
      icon: Truck
    },
    {
      id: 'quality',
      title: 'Lab Assay & CoA Clearance',
      desc: 'Electronic Certificate of Analysis release integrated with ERP inspection gates',
      side: 'left',
      color: '#A855F7', // Purple
      textColor: 'text-purple-400',
      bgGlow: 'rgba(168, 85, 247, 0.3)',
      icon: ShieldAlert
    },
    {
      id: 'sourcing',
      title: 'Agricultural Inbound Sourcing',
      desc: 'Contract grower harvest portals, weighbridge sync, and quality deductions',
      side: 'left',
      color: '#06B6D4', // Cyan
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(6, 182, 212, 0.3)',
      icon: Apple
    },
    {
      id: 'ai-freshness',
      title: 'Perishable Yield & Freshness AI',
      desc: 'Predictive shelf-life analytics and dynamic markdown optimization',
      side: 'left',
      color: '#3B82F6', // Blue
      textColor: 'text-blue-400',
      bgGlow: 'rgba(59, 130, 246, 0.3)',
      icon: Sparkles
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
      id: 'farm',
      label: 'Farm Inflow',
      sublabel: 'Raw Sourcing',
      tech: 'SAP Agri S/4HANA',
      desc: 'Origin grading, moisture sampling, and grower lot tracking directly at harvest receiving weighbridges.',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
      icon: Apple
    },
    {
      id: 'recipe',
      label: 'Recipe Mixing',
      sublabel: 'Process Batching',
      tech: 'SAP Recipe Dev',
      desc: 'Strict ingredient formulation control with automated allergen quarantine and mixing tank execution.',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
      icon: Sliders
    },
    {
      id: 'quality',
      label: 'Quality Lab',
      sublabel: 'Assay Clearance',
      tech: 'SAP QM & CoA',
      desc: 'Microbiological sampling, allergen testing, and automated electronic Certificate of Analysis release.',
      image: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=1200&q=80',
      icon: ShieldCheck
    },
    {
      id: 'storage',
      label: 'Cold Storage',
      sublabel: 'Chilled Staging',
      tech: 'SAP EWM Cold Room',
      desc: 'Continuous IoT thermal telemetry in multi-temperature cold bays to maintain absolute product freshness.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80',
      icon: Thermometer
    },
    {
      id: 'dispatch',
      label: 'Cold Dispatch',
      sublabel: 'Reefer Logistics',
      tech: 'SAP TM Fleet',
      desc: 'Multi-stop refrigerated line-haul logistics with real-time temperature telemetry and transit alarms.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      icon: Truck
    },
    {
      id: 'shelf',
      label: 'Retail Cold Case',
      sublabel: 'FEFO Merchandising',
      tech: 'SAP Replenish',
      desc: 'First-expiry-first-out store replenishment, eliminating aged shelf write-downs and spoilage.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
      icon: Boxes
    }
  ];

  // Section 3: F&B Industry Challenges & Bottlenecks Data (6 Cards)
  const industryChallenges = [
    {
      icon: Thermometer,
      tag: 'COLD CHAIN INTEGRITY',
      title: 'Temperature Excursions',
      desc: 'Undetected thermal breaks during multi-leg transit degrade perishable shelf life and trigger catastrophic container rejections at central distribution hubs.',
      footer: 'Unmonitored Transit Spoilage'
    },
    {
      icon: Clock,
      tag: 'EXPIRY CONTROL',
      title: 'Batch Shelf-Life Shrinkage',
      desc: 'Manual lot tracking and static inventory rotation lead to expired product write-downs before goods reach retail store displays.',
      footer: 'Premature Product Expiration'
    },
    {
      icon: ShieldAlert,
      tag: 'REGULATORY AUDIT',
      title: 'Recall Traceability Delays',
      desc: 'Fragmented batch records hinder instant forward and backward traceability, turning routine compliance inquiries into protracted recall crises.',
      footer: 'Slow Batch Genealogy Inquiries'
    },
    {
      icon: Sliders,
      tag: 'RECIPE DRIFT',
      title: 'Formulation Inconsistencies',
      desc: 'Disjointed plant systems and manual ingredient weighing cause flavor variations and regulatory compliance deviations across bottling lines.',
      footer: 'Unstandardized Mixing Runs'
    },
    {
      icon: ShieldCheck,
      tag: 'FOOD SAFETY',
      title: 'Allergen Cross-Contamination',
      desc: 'Lack of automated equipment washdown verification and ingredient segregation risks allergen cross-contact and severe regulatory sanctions.',
      footer: 'Line Cross-Contamination Risk'
    },
    {
      icon: Activity,
      tag: 'SUPPLIER YIELD',
      title: 'Inbound Perishable Waste',
      desc: 'Variable raw harvest quality and delayed weighbridge grading create intake bottlenecks, inventory write-offs, and grower payment disputes.',
      footer: 'Intake Rejection & Grower Friction'
    }
  ];

  // Section 7: 9 Modular Enterprise Industry Solutions (Symmetrical 3x3 Grid)
  const industrySolutions = [
    {
      title: 'Recipe & Formulation Management',
      tag: 'PROCESS CORE',
      category: 'COMMERCE',
      categoryLabel: 'Process & Quality',
      description: 'Standardized recipe formulation, dynamic ingredient substitution, and allergen segregation on ERP.',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
      highlights: ['Recipe Tolerance Control', 'Allergen Isolation Rules', 'Dynamic Cost Modeling'],
      icon: Sliders
    },
    {
      title: 'Batch & Expiry Governance (FEFO)',
      tag: 'LOT CONTROL',
      category: 'COMMERCE',
      categoryLabel: 'Process & Quality',
      description: 'Automated first-expiry-first-out allocation algorithms preventing aged inventory obsolescence.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
      highlights: ['FEFO Picking Logic', 'Automated Shelf-Life Alarms', 'Batch Quarantine Triggers'],
      icon: Clock
    },
    {
      title: 'Food Safety & Audit Traceability',
      tag: 'REGULATORY CORE',
      category: 'COMMERCE',
      categoryLabel: 'Process & Quality',
      description: 'Instant forward and backward lot traceability complying with global FSMA and HACCP standards.',
      image: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=800&q=80',
      highlights: ['Bidirectional Genealogy', 'Sub-Second Recall Queries', 'Electronic CoA Logs'],
      icon: ShieldCheck
    },
    {
      title: 'Cold Chain Telemetry Hub',
      tag: 'THERMAL TRACKING',
      category: 'SUPPLY_CHAIN',
      categoryLabel: 'Cold Chain & Logistics',
      description: 'Integrated IoT sensor monitoring logging temperature and humidity variations across warehouses and trucks.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      highlights: ['Live Thermal Telemetry', 'Automatic Excursion Alerts', 'Proof-of-Temp Delivery'],
      icon: Thermometer
    },
    {
      title: 'Refrigerated Warehouse Management',
      tag: 'COLD STORAGE',
      category: 'SUPPLY_CHAIN',
      categoryLabel: 'Cold Chain & Logistics',
      description: 'High-density cold warehouse automation managing pallet flow, dock door staging, and blast chilling cycles.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
      highlights: ['Blast Chiller Timing', 'Cross-Dock Refrigeration', 'Automated Pallet Shuttles'],
      icon: PackageCheck
    },
    {
      title: 'Agricultural Inbound Sourcing',
      tag: 'RAW SOURCING',
      category: 'SUPPLY_CHAIN',
      categoryLabel: 'Cold Chain & Logistics',
      description: 'Grower portal managing seasonal harvest contracts, field weighbridge intake, and crop quality payouts.',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
      highlights: ['Weighbridge Direct Sync', 'Quality Deduction Matrices', 'Contract Grower Settlement'],
      icon: Truck
    },
    {
      title: 'Foodservice Key Account Hub',
      tag: 'COMMERCIAL HUB',
      category: 'CUSTOMER',
      categoryLabel: 'Commercial & Analytics',
      description: 'B2B order portal for restaurant chains and institutional caterers with contract pricing and standing orders.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      highlights: ['Recurring Order Automation', 'Tiered Foodservice Tariffs', 'Fill-Rate SLA Monitoring'],
      icon: Users
    },
    {
      title: 'Retail Pack Replenishment',
      tag: 'SHELF VELOCITY',
      category: 'CUSTOMER',
      categoryLabel: 'Commercial & Analytics',
      description: 'Synchronized order booking across supermarkets with automated EDI advance ship notices.',
      image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80',
      highlights: ['Electronic ASN Generation', 'Pallet Barcode Harmonization', 'Direct Store Delivery (DSD)'],
      icon: Zap
    },
    {
      title: 'Shelf-Life Profitability Analytics',
      tag: 'APPLIED AI',
      category: 'CUSTOMER',
      categoryLabel: 'Commercial & Analytics',
      description: 'Predictive analytics balancing remaining shelf-life days against dynamic discount curves to maximize yield.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      highlights: ['Yield Loss Prediction', 'Dynamic Markdown Triggers', 'SKU Freshness Analytics'],
      icon: Sparkles
    }
  ];

  // Section 9: Transformation in Action (Connected 4-Phase Architecture Pipeline)
  const transformationStages = [
    {
      phase: 'INITIAL CHALLENGE',
      badge: 'PAPER BATCH LOGS',
      title: 'Traceability Gaps',
      subtitle: 'Manual Compliance',
      description: 'Food processor relying on manual paper clipboards for batch temperature logs and ingredient lot mixing, making regulatory recall queries take days and leading to costly stock scrap.',
      accent: 'rose',
      borderBase: 'border-rose-500/30 hover:border-rose-400',
      activeBorder: 'border-rose-400 ring-2 ring-rose-500/30 bg-rose-950/20 shadow-[0_0_25px_rgba(244,63,94,0.2)]',
      glowColor: 'bg-rose-500',
      textColor: 'text-rose-400',
      icon: Activity,
      tag: 'Siloed Quality Logs',
      before: 'Manual clipboard inspection & delayed recall queries',
      after: 'Synchronized digital batch genealogy across all lines',
      metrics: ['Paper Batch Tracking', 'Cold Chain Blindspots', 'High Expiry Write-Offs']
    },
    {
      phase: 'STRATEGIC FRAMEWORK',
      badge: 'CLEAN CORE',
      title: 'Cold Chain Fabric',
      subtitle: 'Decoupled Telemetry',
      description: 'Integrating IoT temperature sensors and electronic recipe weighing scales directly into a clean-core ERP event mesh, recording telemetry without human intervention.',
      accent: 'sky',
      borderBase: 'border-sky-500/30 hover:border-sky-400',
      activeBorder: 'border-sky-400 ring-2 ring-sky-500/30 bg-sky-950/20 shadow-[0_0_25px_rgba(56,189,248,0.2)]',
      glowColor: 'bg-sky-500',
      textColor: 'text-sky-400',
      icon: Workflow,
      tag: 'IoT Telemetry Mesh',
      before: 'Unnoticed reefer truck thermal excursions in transit',
      after: 'Immediate thermal alerts and automated quarantine routing',
      metrics: ['Decoupled Core', 'Automated IoT Logging', 'Master Recipe Mesh']
    },
    {
      phase: 'DEPLOYED STACK',
      badge: 'LIVE ECOSYSTEM',
      title: 'Engineered Stack',
      subtitle: 'S/4HANA Process + EWM',
      description: 'Deploying SAP S/4HANA Process Manufacturing with integrated SAP Quality Management and EWM, running automated FEFO wave releases and instant batch genealogies.',
      accent: 'cyan',
      borderBase: 'border-cyan-500/30 hover:border-cyan-400',
      activeBorder: 'border-cyan-400 ring-2 ring-cyan-500/30 bg-cyan-950/20 shadow-[0_0_25px_rgba(34,211,238,0.2)]',
      glowColor: 'bg-cyan-500',
      textColor: 'text-cyan-400',
      icon: Cpu,
      tag: 'Orchestrated S/4HANA',
      before: 'Delayed batch release and manual lab record entry',
      after: 'Touchless electronic certificate release to warehouse',
      metrics: ['S/4HANA Process Core', 'EWM Cold Storage Engine', 'Sub-Second Lot Recall']
    },
    {
      phase: 'STRATEGIC VALUE',
      badge: 'REALIZED IMPACT',
      title: 'Freshness Velocity',
      subtitle: 'Certified Quality',
      description: 'Attaining end-to-end cold chain certainty, zeroing out expired shelf write-downs, passing food safety audits effortlessly, and safeguarding consumer trust.',
      accent: 'emerald',
      borderBase: 'border-emerald-500/30 hover:border-emerald-400',
      activeBorder: 'border-emerald-400 ring-2 ring-emerald-500/30 bg-emerald-950/20 shadow-[0_0_25px_rgba(52,211,153,0.2)]',
      glowColor: 'bg-emerald-500',
      textColor: 'text-emerald-400',
      icon: ShieldCheck,
      tag: 'Certified Freshness',
      before: 'Unpredictable spoilage penalties and audit panic',
      after: 'Predictable shelf-life velocity and verified brand safety',
      metrics: ['Near-Zero Expiry Spoilage', 'Instant Regulatory Readout', 'Protected Gross Margins']
    }
  ];


  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Pure Enterprise Food & Beverage Hero)
          ========================================================================= */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        
        {/* Full-bleed High Resolution Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=2000&q=90" 
            alt="Food & Beverage Enterprise Logistics & Automation"
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
                <UtensilsCrossed className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>

              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Intelligent ERP for <br />
                <span className="text-cyan-400">Food & Beverage</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Farm-to-Fork Traceability, Cold Chain Telemetry & Recipe Governance.
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
                Empowering food processors, beverage manufacturers, and cold-chain distributors with{' '}
                <strong className="text-white font-semibold">SAP S/4HANA Process Manufacturing</strong>, automated{' '}
                <strong className="text-cyan-300 font-semibold">FEFO expiry control</strong>, and real-time IoT temperature monitoring.
              </p>

              {/* Clean Feature Highlights */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Sub-Second Lot Recall</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Continuous Cold Telemetry</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>FSMA / HACCP Compliance</span>
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
                  <ShieldCheck className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">TRACEABILITY</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Complete Batch Genealogy</div>
                <div className="text-xs text-slate-300 mt-0.5">Instant Recall Ready</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Thermometer className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">COLD CHAIN</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Live IoT Sensing</div>
                <div className="text-xs text-slate-300 mt-0.5">Zero Thermal Breaks</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Sliders className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">FORMULATION</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Recipe Tolerances</div>
                <div className="text-xs text-slate-300 mt-0.5">Allergen Segregation</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">EXPIRY ROTATION</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Automated FEFO</div>
                <div className="text-xs text-slate-300 mt-0.5">Zero Spoilage Waste</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE INDUSTRY PERSPECTIVE ("Building a Connected F&B Enterprise")
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
                Building a Connected <span className="text-[#0070C0]">Food & Beverage Enterprise</span>
              </h2>

              {/* Executive Thesis Quote */}
              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Modern food and beverage leaders win on freshness certainty: uniting grower intake, sterile recipe execution, unbroken cold chain logistics, and automated FEFO retail replenishment into one resilient operational core.&rdquo;
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Knooviq engineers a synchronized enterprise architecture on SAP S/4HANA Clean Core. By bridging real-time IoT thermal telemetry and digital batch records directly to enterprise ledgers, food and beverage executives safeguard consumer trust, eliminate spoilage, and achieve frictionless audit readiness.
              </p>

              {/* 3 Executive Strategic Pillars */}
              <div className="space-y-2.5 pt-1">
                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Sub-Second Batch Traceability & Safety</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Instant bidirectional lot genealogy connecting raw agricultural lots, mixing tanks, and packaged retail cartons for seamless FSMA compliance.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <Thermometer className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Unbroken Cold Chain Telemetry</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Continuous IoT sensor logging across refrigerated storage bays, blast freezers, and reefer transport fleets with instant thermal alerts.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Intelligent FEFO Shelf Velocity</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Automated wave replenishment prioritizing earliest-expiring inventory first, protecting gross margins and eliminating warehouse write-offs.
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
                      className={`p-2.5 rounded-xl border text-left transition-all flex items-center gap-2.5 ${
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

              {/* Selected Stage Detail Card */}
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
          SECTION 3: INDUSTRY CHALLENGES ("Navigating the Complexity of Modern F&B")
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
              Navigating the Complexity of Food & Beverage
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Perishable lifecycles, volatile ingredient yields, and stringent safety audits constrain operational efficiency. Knooviq solves the six critical friction points modern food enterprises face.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {industryChallenges.map((item, idx) => {
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
          SECTION 4: KNOOVIQ F&B PLATFORM ECOSYSTEM (Circular Chevron Radial Diagram)
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
              <span>CONNECTED F&B ECOSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Capabilities Designed for Food & Beverage
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              A synchronized, circular enterprise platform uniting agricultural sourcing, recipe scaling, sterile processing, refrigerated warehousing, cold logistics, and cognitive shelf-life AI into one continuous loop.
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
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/15 via-emerald-500/10 to-pink-500/15 blur-2xl rounded-full pointer-events-none" />

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
                        KNOOVIQ F&B
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
                      <div 
                        className="w-2 h-7 rounded-full shrink-0 mt-0.5 transition-all duration-300"
                        style={{ 
                          backgroundColor: item.color,
                          boxShadow: isHovered ? `0 0 12px ${item.color}` : 'none'
                        }}
                      />
                      <div className="space-y-1 text-left flex-1">
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
          SECTION 6: SAP & TECHNOLOGY SOLUTIONS ("Technology Foundation for F&B")
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Layers className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PLATFORM ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Technology Foundation for Intelligent Food & Beverage
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We engineer clean-core SAP technology suites layered with real-time IoT sensors, cold warehouse automation, and autonomous business AI.
            </p>
          </div>

          {/* Layered Technology Ecosystem Visual (6 Enterprise Stack Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Tech 1: SAP S/4HANA */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">CORE ERP SUITE</span>
                <Cpu className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP S/4HANA Process Manufacturing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Integrated recipe formulation, process order execution, batch management, active ingredient potency scaling, and automated production order clearing.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Batch Record Synchronization</div>
                <div className="flex items-center gap-1.5">• Potency & Density Scaling Engine</div>
              </div>
            </div>

            {/* Tech 2: SAP QM */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">QUALITY & SAFETY</span>
                <ShieldCheck className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Quality Management (QM)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automated electronic Certificates of Analysis, microbial lab test gates, allergen segregation rules, and instant forward/backward recall inquiry tools.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Electronic CoA Clearance Gates</div>
                <div className="flex items-center gap-1.5">• Sub-Second Recall Tracing</div>
              </div>
            </div>

            {/* Tech 3: SAP BTP */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">INTEGRATION & IOT</span>
                <Cloud className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Business Technology Platform
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Live IoT telemetry mesh connecting temperature sensors in cold rooms and reefer trucks directly to clean-core business event workflows.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Wireless IoT Telemetry Ingestion</div>
                <div className="flex items-center gap-1.5">• Event Mesh for Cold Excursion Alarms</div>
              </div>
            </div>

            {/* Tech 4: SAP EWM */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">COLD WAREHOUSING</span>
                <Thermometer className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Extended Warehouse Management
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dynamic FEFO wave release algorithms, multi-temperature cold zone slotting, automated pallet shuttles, and blast freezer cycle timing.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Automated FEFO Picking Algorithms</div>
                <div className="flex items-center gap-1.5">• Multi-Zone Thermal Slotting</div>
              </div>
            </div>

            {/* Tech 5: SAP Fiori */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">MOBILE SHOPFLOOR UX</span>
                <Scan className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Fiori & Mobile Apps
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Intuitive mobile barcoding and weighing scale apps designed for mixing room operators, intake inspectors, and cold room pickers.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Touch Weighing Scale Integrations</div>
                <div className="flex items-center gap-1.5">• Rugged Cold-Room Barcode Scanning</div>
              </div>
            </div>

            {/* Tech 6: AI & Freshness Analytics */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">COGNITIVE ENGINES</span>
                <Sparkles className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                Freshness & Yield AI
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Machine learning models predicting agricultural intake yields, remaining shelf-life decay curves, and dynamic price markdowns to prevent waste.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Perishable Spoilage Risk Forecasting</div>
                <div className="flex items-center gap-1.5">• Dynamic Freshness Markdown Optimization</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: INDUSTRY SOLUTIONS ("Solutions for Every Stage of F&B")
          ========================================================================= */}
      <section id="industry-solutions" className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-slate-200 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0] shadow-2xs">
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>ENTERPRISE FUNCTIONAL CATALOG</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Solutions for Every Stage of Food & Beverage
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Explore specialized enterprise functional modules engineered to modernize food execution across agricultural sourcing, processing plants, cold logistics, and supermarket shelf replenishment.
            </p>
          </div>

          {/* Solution Domain Category Tabs - 4 Symmetrical Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-7 sm:mb-8">
            {[
              { id: 'ALL', label: 'All Solutions' },
              { id: 'COMMERCE', label: 'Process & Quality' },
              { id: 'SUPPLY_CHAIN', label: 'Cold Chain & SCM' },
              { id: 'CUSTOMER', label: 'Commercial & Analytics' }
            ].map((cat) => {
              const isActive = activeSolutionCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveSolutionCategory(cat.id)}
                  className={`industry-category-tab px-4 py-2 rounded-full transition-all duration-300 ${
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
                    {/* Top Image Banner - 50% Height */}
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

                    {/* Card Content Body - 50% Height */}
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

                        {/* Title */}
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0070C0] transition-colors leading-snug">
                          {sol.title}
                        </h3>

                        {/* Description */}
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
          SECTION 8: BUSINESS OUTCOMES ("Operational Advantages of Connected F&B")
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>MEASURABLE BUSINESS IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Operational Advantages of Connected F&B
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              When harvest quality, recipe mixing, cold distribution, and shelf replenishment operate in unison, food enterprises minimize waste and ensure sustained margins.
            </p>
          </div>

          {/* 6 Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Outcome 1 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Minimized Expiry Waste
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automated FEFO warehouse release algorithms ensure earliest expiring lots ship first, eliminating costly inventory obsolescence and write-downs.
              </p>
            </div>

            {/* Outcome 2 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Instant Recall Preparedness
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Execute bidirectional lot queries across suppliers, mixing vats, cold rooms, and retail shelves within seconds, passing regulatory audits effortlessly.
              </p>
            </div>

            {/* Outcome 3 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Thermometer className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Guaranteed Cold Chain Integrity
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Real-time IoT sensors prevent thermal excursions in warehouses and reefers, guaranteeing documented regulatory compliance and freshness.
              </p>
            </div>

            {/* Outcome 4 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Consistent Batch Quality
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automate recipe scale integrations and ingredient dosing tolerances, maintaining uniform product flavor, texture, and nutritional consistency.
              </p>
            </div>

            {/* Outcome 5 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Streamlined Grower Settlement
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Integrate intake weighbridge logs and lab assay deductions automatically into vendor accounting, accelerating grower payouts and strengthening sourcing trust.
              </p>
            </div>

            {/* Outcome 6 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Certified Export Readiness
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Generate international phytosanitary and food safety compliance certificates effortlessly from digital batch history logs for rapid customs clearance.
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
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Workflow className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>TRANSFORMATION ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Transformation in Action
            </h2>
            <div className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono tracking-wider uppercase">
              Cold Chain & Batch Traceability Architecture
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              How a leading enterprise food processor modernized from legacy clipboard inspections to an automated clean-core IoT event fabric.
            </p>
          </div>

          {/* Flowing Laser Conduit */}
          <div className="hidden lg:block relative mb-4">
            <div className="h-0.5 bg-slate-800 rounded-full w-full relative overflow-hidden">
              <motion.div 
                animate={{ x: ['-25%', '125%'] }} 
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                className="absolute top-0 bottom-0 w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee]" 
              />
            </div>
          </div>

          {/* 4 Connected Interactive Transformation Cards */}
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

          {/* Interactive Live Transformation Console / Delta Inspector */}
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
        
        {/* Abstract 3D Digital Mesh Visual */}
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
            <UtensilsCrossed className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR F&B ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build a Resilient Food & Beverage Business?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Connect your agricultural supply, sterile mixing, cold-chain operations, and retail replenishment with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact?.('Food & Beverage Consultation')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group"
            >
              <span>Talk to Our F&B Experts</span>
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
