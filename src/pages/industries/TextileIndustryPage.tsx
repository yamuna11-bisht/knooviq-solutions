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
  Shirt,
  Scissors,
  Palette,
  Tag,
  RefreshCw,
  ShoppingBag,
  Store,
  Factory,
  Boxes,
  Truck,
  RotateCcw,
  Compass,
  FileCheck,
  Scale,
  Search,
  Eye,
  Settings,
  Database,
  LineChart,
  HardHat,
  Share2
} from 'lucide-react';

interface TextileIndustryPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const TextileIndustryPage: React.FC<TextileIndustryPageProps> = ({ 
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

  // Section 2: Journey Steps
  const journeySteps = [
    {
      title: 'Fiber Sourcing & Bale Assay',
      subtitle: 'Raw Bale Testing & Inventory',
      desc: 'Automated micronaire and staple length testing linked directly to bale pool allocation and commodity price hedging.',
      icon: Boxes,
      metric: '100% Bale Assay Traceability',
      tech: 'SAP Mill Products Bale Matrix',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Spinning & Ring Spindles',
      subtitle: 'Yarn Count & Cone Winding',
      desc: 'Real-time spindle telemetry capturing vibration, sliver counts, and automatic cone winder staging.',
      icon: Factory,
      metric: '99.4% Yarn Count Consistency',
      tech: 'SAP MII Shop-Floor Connectivity',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Warp Beam & Loom Shed',
      subtitle: 'High-Speed Air-Jet Weaving',
      desc: 'Dynamic warp beam scheduling balancing rapier and air-jet loom utilization with electronic pick telemetry.',
      icon: Workflow,
      metric: '94.2% Weaving Loom Shed OEE',
      tech: 'SAP S/4HANA Production Scheduling',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Dye House & Color Kitchen',
      subtitle: 'Spectrophotometer Formulation',
      desc: 'Automated chemical kitchen dosing, dye bath temperature regulation, and continuous shade pass/fail gating.',
      icon: Palette,
      metric: 'Zero Dye-Lot Shade Mismatches',
      tech: 'Laboratory Recipe & Colorimetric Integration',
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Four-Point Roll Inspection',
      subtitle: 'Camera Defect Mapping & Cutting',
      desc: 'Defect map grading, continuous roll barcode serialization, and mathematical cutting plans to minimize end remnants.',
      icon: Scissors,
      metric: '32% Remnant Fabric Scrap Cut',
      tech: 'Serialized Roll Defect Grading Engine',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Export Packing & Vessel Dispatch',
      subtitle: 'Customs, OEKO-TEX & Freight',
      desc: 'Moisture-barrier roll packing, automated packing lists, phytosanitary verification, and bill of lading reconciliation.',
      icon: Truck,
      metric: '100% Export Audit Compliance',
      tech: 'SAP Transportation & Global Trade Services',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Section 3: Textile Industry Challenges (6 Cards)
  const industryChallenges = [
    {
      icon: Palette,
      tag: 'COLOR PRECISION',
      title: 'Dye-Lot Shade Variations',
      desc: 'Inconsistent dye bath temperatures and manual chemical dosing produce unacceptable roll-to-roll shade variations, resulting in rejected customer shipments.',
      footer: 'Eliminate Dye-Lot Rejection Costs'
    },
    {
      icon: Factory,
      tag: 'MILL EFFICIENCY',
      title: 'Loom Machine Downtime',
      desc: 'Unplanned warp breaks and delayed beam changes reduce overall equipment effectiveness (OEE) across massive industrial weaving sheds.',
      footer: 'Synchronized Loom Beam Scheduling'
    },
    {
      icon: Scissors,
      tag: 'SCRAP REDUCTION',
      title: 'Fabric Roll End Losses',
      desc: 'Improper cutting and poorly scheduled roll lengths leave unusable selvage and short-roll remnants that inflate production scrap rates.',
      footer: 'Algorithmic Roll Nesting & Yardage Recovery'
    },
    {
      icon: Globe2,
      tag: 'EXPORT COMPLIANCE',
      title: 'Phytosanitary & Chemical Audits',
      desc: 'Strict international regulations like OEKO-TEX and REACH require transparent chemical genealogy that manual mill paperwork cannot satisfy.',
      footer: 'Automated Global Chemical Pedigree'
    },
    {
      icon: Boxes,
      tag: 'COMMODITY VOLATILITY',
      title: 'Cotton Bale Price & Yield Fluctuations',
      desc: 'Fluctuating cotton commodity contracts and inconsistent bale micronaire assays complicate yarn costing and fabric margin management.',
      footer: 'Bale Assay Matrix Hedging'
    },
    {
      icon: Activity,
      tag: 'ENERGY & EFFLUENT',
      title: 'Steam & Effluent Plant Costs',
      desc: 'Stenter frame energy waste and strict environmental effluent regulations squeeze profit margins across high-volume finishing plants.',
      footer: 'Real-Time Utility & Effluent Monitoring'
    }
  ];

  // Section 4: 8 Radial Capability Pillars
  const capabilityPillars = [
    {
      id: 0,
      title: 'Serialized Fabric Roll & Dye Tracking',
      desc: 'Individual roll barcode serialization capturing length, width, defect map, and exact dye-lot bath credentials.',
      icon: Palette,
      badge: 'COLOR PRECISION',
      color: '#0070C0'
    },
    {
      id: 1,
      title: 'Loom Capacity & Beam Scheduling',
      desc: 'Real-time air-jet and rapier loom scheduling balancing warp beam availability, weaver assignments, and fabric orders.',
      icon: Factory,
      badge: 'WEAVING OEE',
      color: '#00A3E0'
    },
    {
      id: 2,
      title: 'Automated Chemical Kitchen Dosing',
      desc: 'Laboratory spectrophotometer sync and automated recipe dispensing valves preventing color variation rejects.',
      icon: Sliders,
      badge: 'RECIPE INTEGRITY',
      color: '#38BDF8'
    },
    {
      id: 3,
      title: 'Fabric Scrap & Cutting Optimization',
      desc: 'Mathematical nesting and roll length allocation minimizing edge scrap and end remnants across cutting lines.',
      icon: Scissors,
      badge: 'YIELD RECOVERY',
      color: '#005B9E'
    },
    {
      id: 4,
      title: 'OEKO-TEX & REACH Compliance Hub',
      desc: 'Automated chemical genealogy logs verifying non-toxic substances for European and North American retail brands.',
      icon: ShieldCheck,
      badge: 'AUDIT COMPLIANCE',
      color: '#003B73'
    },
    {
      id: 5,
      title: 'Cotton Bale Assay & Commodity Pooling',
      desc: 'Micronaire moisture sampling, staple length testing, and bale inventory pooling directly connected to yarn spinning orders.',
      icon: Boxes,
      badge: 'RAW MATERIAL ASSAY',
      color: '#0284C7'
    },
    {
      id: 6,
      title: 'Spindle & Loom Predictive Maintenance',
      desc: 'High-frequency vibration telemetry on spinning frames and weaving looms preventing unscheduled mill stoppages.',
      icon: Cpu,
      badge: 'MILL UPTIME',
      color: '#0369A1'
    },
    {
      id: 7,
      title: 'Global Export Packing & Freight Tracking',
      desc: 'Container load optimization, automated commercial invoices, phytosanitary logs, and vessel tracking for overseas buyers.',
      icon: Truck,
      badge: 'EXPORT DISPATCH',
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
      title: 'SAP S/4HANA Mill Products Clean Core',
      tag: 'CORE MILL ERP',
      desc: 'Unified enterprise backbone managing bale assays, yarn inventory, loom production orders, and customer export shipments with zero custom-code debt.',
      features: ['Bale Lot Inventory Management', 'Loom Shed Work Center Tracking', 'Real-Time Mill Margin Accounting'],
      icon: Database
    },
    {
      title: 'SAP Manufacturing Execution & MII',
      tag: 'SHOP-FLOOR MES',
      desc: 'Bi-directional machine connectivity interfacing ring spindles, air-jet looms, and dye kitchen dosing valves directly with the central ERP.',
      features: ['Machine Telemetry & Pick Counters', 'Downtime Classification Engine', 'Continuous Stenter Temperature Logs'],
      icon: Cpu
    },
    {
      title: 'SAP Integrated Business Planning (IBP)',
      tag: 'SUPPLY CHAIN & DEMAND',
      desc: 'Multi-echelon mill planning balancing yarn spinning capacity, greige fabric buffer inventory, and seasonal dyeing shed throughput.',
      features: ['Yarn & Greige Safety Buffers', 'Capacity Leveling Across Mills', 'Raw Cotton Sourcing Forecasts'],
      icon: LineChart
    },
    {
      title: 'SAP Business Technology Platform (BTP)',
      tag: 'AGILE EXTENSIONS',
      desc: 'Cloud-native extension layer hosting AI roll defect detection algorithms, spectrophotometer integrations, and buyer export portals.',
      features: ['Automated Vision Inspection AI', 'Supplier Cotton Assay Portals', 'Real-Time Event Meshing'],
      icon: Layers
    },
    {
      title: 'SAP Fiori Modern Mill Workspace',
      tag: 'ROLE-BASED UX',
      desc: 'Intuitive touch-screen interfaces for loom fixers, dye house chemists, quality inspectors, and export logistics dispatchers.',
      features: ['Loom Shed Mobile Inspection', 'Dye Formulation Approval Tablet', 'Barcode Scanning at Doffing'],
      icon: Settings
    },
    {
      title: 'AI Roll Nesting & Energy Optimization',
      tag: 'PREDICTIVE AI',
      desc: 'Machine learning models predicting steam consumption on stenters, optimizing cutting nesting, and forecasting warp yarn breakage.',
      features: ['Optimal Roll Remnant Utilization', 'Stenter Energy Recovery Sync', 'Predictive Spindle Vibration Alerts'],
      icon: Sparkles
    }
  ];

  // Section 7: 9 Modular Enterprise Industry Solutions (Symmetrical 3x3 Grid)
  const industrySolutions = [
    {
      title: 'Roll & Dye-Lot Tracking',
      tag: 'MILL CORE',
      category: 'COMMERCE',
      categoryLabel: 'Mill Operations',
      description: 'Serialized fabric roll tracking capturing yardage, width, defect map, and exact dye-lot bath credentials.',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
      highlights: ['Dye-Lot Recipe Sync', 'Four-Point Defect Mapping', 'Continuous Yardage Log'],
      icon: Palette
    },
    {
      title: 'Loom Capacity & Beam Scheduling',
      tag: 'WEAVING OEE',
      category: 'COMMERCE',
      categoryLabel: 'Mill Operations',
      description: 'Real-time loom machine scheduling balancing warp beam availability, weaver assignments, and fabric orders.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      highlights: ['Loom Machine OEE Tracking', 'Beam Change Timing', 'Warp Break Telemetry'],
      icon: Factory
    },
    {
      title: 'Chemical Kitchen Formulation Control',
      tag: 'DYEING CONTROL',
      category: 'COMMERCE',
      categoryLabel: 'Mill Operations',
      description: 'Automated dispensing valves and laboratory spectrophotometer sync preventing shade variation rejects.',
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
      highlights: ['Automatic Dye Dispensing', 'Colorimetric Pass/Fail Gate', 'Batch Chemical Ledger'],
      icon: Sliders
    },
    {
      title: 'Fabric Scrap & Cut-Plan Optimization',
      tag: 'YIELD SAVINGS',
      category: 'SUPPLY_CHAIN',
      categoryLabel: 'Plant & SCM',
      description: 'Automated roll length matching and cutting plans that minimize selvage trim and unusable end remnants.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
      highlights: ['Remnant Roll Matching', 'Nesting Scrap Reduction', 'Yardage Recovery Engine'],
      icon: Scissors
    },
    {
      title: 'Mill Machinery Preventive Maintenance',
      tag: 'ASSET RELIABILITY',
      category: 'SUPPLY_CHAIN',
      categoryLabel: 'Plant & SCM',
      description: 'Vibration monitoring on spinning spindles, lubrication schedules, and loom maintenance intervals.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      highlights: ['Spindle Vibration Telemetry', 'Automated PM Work Orders', 'Spare-Parts Inventory Sync'],
      icon: PackageCheck
    },
    {
      title: 'Raw Fiber & Yarn Procurement',
      tag: 'COMMODITY INTAKE',
      category: 'SUPPLY_CHAIN',
      categoryLabel: 'Plant & SCM',
      description: 'Cotton bale purchasing contracts, price hedging, synthetic filament procurement, and moisture assays.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
      highlights: ['Bale Assay Direct Input', 'Commodity Price Contracts', 'Supplier Quality Scoring'],
      icon: Truck
    },
    {
      title: 'Export Documentation & Compliance Hub',
      tag: 'GLOBAL TRADE',
      category: 'CUSTOMER',
      categoryLabel: 'Commercial & Export',
      description: 'Automated generation of certified packing lists, country of origin documents, and bill of lading reconciliation.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      highlights: ['Electronic Phytosanitary Logs', 'Automated Commercial Invoices', 'Letter of Credit Matching'],
      icon: Globe2
    },
    {
      title: 'Finished Roll Staging & Warehouse',
      tag: 'FINISHED GOODS',
      category: 'CUSTOMER',
      categoryLabel: 'Commercial & Export',
      description: 'High-density roll racking, automated barcode scanning, and container load optimization for export.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
      highlights: ['Roll Racking Automation', 'Container Cube Utilization', 'Shipment Dispatch Staging'],
      icon: Boxes
    },
    {
      title: 'Mill Energy & Sustainability Telemetry',
      tag: 'APPLIED AI',
      category: 'CUSTOMER',
      categoryLabel: 'Commercial & Export',
      description: 'IoT telemetry measuring steam, power, and water consumption per fabric yard for sustainability reporting.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      highlights: ['Water & Steam Consumption', 'Carbon Footprint per Yard', 'Effluent Plant Monitoring'],
      icon: Sparkles
    }
  ];

  // Section 8: Measurable Business Outcomes & ROI (6 Cards)
  const businessOutcomes = [
    {
      metric: '0.0%',
      label: 'Dye-Lot Shade Discrepancies',
      desc: 'Automated chemical kitchen dosing and continuous spectrophotometer validation eliminate shade variation customer claims.',
      icon: Palette
    },
    {
      metric: '+18%',
      label: 'Weaving Shed Loom OEE',
      desc: 'Algorithmic warp beam planning and synchronized warp break response keep air-jet and rapier looms operating at peak efficiency.',
      icon: TrendingUp
    },
    {
      metric: '-32%',
      label: 'Fabric End & Selvage Scrap',
      desc: 'Mathematical nesting algorithms maximize roll yardage utilization and recover valuable remnants across cutting lines.',
      icon: Scissors
    },
    {
      metric: '100%',
      label: 'OEKO-TEX & REACH Compliance',
      desc: 'Complete digital chemical genealogy logs satisfy the strictest European and American brand safety audits automatically.',
      icon: ShieldCheck
    },
    {
      metric: '4.8x',
      label: 'Faster Export Customs Clearance',
      desc: 'Touchless generation of packing lists, certificates of origin, and bill of lading reconciliation expedites container shipping.',
      icon: Globe2
    },
    {
      metric: '-22%',
      label: 'Finishing Steam & Water Costs',
      desc: 'Predictive energy optimization on stenter frames and wastewater recycling monitoring reduce utility costs per yard produced.',
      icon: Activity
    }
  ];

  // Section 9: Transformation in Action (4 Interactive Stages)
  const transformationStages = [
    {
      phase: 'INITIAL CHALLENGE',
      badge: 'MANUAL DYE LOGS',
      title: 'Shade Variations',
      subtitle: 'Manual Mill Logs',
      description: 'Textile composite mill relying on manual dye kitchen logs and disconnected loom clipboards, causing roll-to-roll shade mismatch and frequent export container rejections.',
      accent: 'rose',
      borderBase: 'border-rose-500/30 hover:border-rose-400',
      activeBorder: 'border-rose-400 ring-2 ring-rose-500/30 bg-rose-950/20 shadow-[0_0_25px_rgba(244,63,94,0.2)]',
      glowColor: 'bg-rose-500',
      textColor: 'text-rose-400',
      icon: Activity,
      tag: 'Fragmented Mill Data',
      before: 'Manual dye kitchen records & high shipment rejections',
      after: 'Synchronized digital dye-lot formulation across all baths',
      metrics: ['Dye-Lot Mismatches', 'High Fabric Scrap Rates', 'Unplanned Loom Downtime']
    },
    {
      phase: 'STRATEGIC FRAMEWORK',
      badge: 'CLEAN CORE',
      title: 'Mill Operations Mesh',
      subtitle: 'Decoupled Shop-Floor',
      description: 'Connecting spinning frame telemetry, air-jet loom monitors, and dye dispensing valves directly into a clean-core ERP event fabric for real-time shop-floor visibility.',
      accent: 'sky',
      borderBase: 'border-sky-500/30 hover:border-sky-400',
      activeBorder: 'border-sky-400 ring-2 ring-sky-500/30 bg-sky-950/20 shadow-[0_0_25px_rgba(56,189,248,0.2)]',
      glowColor: 'bg-sky-500',
      textColor: 'text-sky-400',
      icon: Workflow,
      tag: 'Industrial Mill Bus',
      before: 'Disconnected weaving and dye house paperwork',
      after: 'Real-time telemetry from raw bale to export carton',
      metrics: ['Decoupled Core', 'Automated Shop-Floor Mesh', 'Chemical Recipe Engine']
    },
    {
      phase: 'DEPLOYED STACK',
      badge: 'LIVE ECOSYSTEM',
      title: 'Engineered Stack',
      subtitle: 'S/4HANA Mill Products + MII',
      description: 'Deploying SAP S/4HANA Mill Products with SAP Manufacturing Integration and Intelligence (MII), automating roll grading, cut optimization, and export documents.',
      accent: 'cyan',
      borderBase: 'border-cyan-500/30 hover:border-cyan-400',
      activeBorder: 'border-cyan-400 ring-2 ring-cyan-500/30 bg-cyan-950/20 shadow-[0_0_25px_rgba(34,211,238,0.2)]',
      glowColor: 'bg-cyan-500',
      textColor: 'text-cyan-400',
      icon: Cpu,
      tag: 'Orchestrated S/4HANA',
      before: 'Manual packing lists and slow customs document preparation',
      after: 'Touchless automated export packing and letter of credit sync',
      metrics: ['S/4HANA Mill Products', 'SAP MII Shop-Floor Engine', 'Automated Roll Grading']
    },
    {
      phase: 'STRATEGIC VALUE',
      badge: 'REALIZED IMPACT',
      title: 'Mill Velocity',
      subtitle: 'Sustained Excellence',
      description: 'Zeroing out dye-lot shade variations, maximizing loom machine running hours, slashing fabric scrap rates, and earning preferred supplier status among global brands.',
      accent: 'emerald',
      borderBase: 'border-emerald-500/30 hover:border-emerald-400',
      activeBorder: 'border-emerald-400 ring-2 ring-emerald-500/30 bg-emerald-950/20 shadow-[0_0_25px_rgba(52,211,153,0.2)]',
      glowColor: 'bg-emerald-500',
      textColor: 'text-emerald-400',
      icon: ShieldCheck,
      tag: 'Zero-Defect Production',
      before: 'High rejection penalties and idle loom overhead',
      after: 'Predictable high-yield production and verified quality',
      metrics: ['Zero Dye-Lot Mismatch', 'Maximized Loom OEE', 'Protected Mill Margins']
    }
  ];


  const filteredSolutions = activeSolutionCategory === 'ALL'
    ? industrySolutions
    : industrySolutions.filter(item => item.category === activeSolutionCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Pure Enterprise Textile Hero)
          ========================================================================= */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        
        {/* Full-Bleed Enterprise Background Image with Seamless Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=2000&q=80" 
            alt="Textile Industrial Precision Manufacturing Facility" 
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
                <Factory className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>
              
              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Textile <span className="text-cyan-400">Manufacturing</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Synchronizing Fiber Sourcing, Loom Weaving & Fabric Roll Export into One Unified Enterprise.
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
                Modernize composite textile mills with <strong className="text-white font-semibold">SAP S/4HANA Mill Products Clean Core</strong>, <strong className="text-cyan-300 font-semibold">real-time loom capacity optimization</strong>, and <strong className="text-white font-semibold">serialized fabric roll tracking</strong>.
              </p>
              
              {/* Clean Feature Highlights */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>SAP Mill Products Architecture</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Dye-Lot Consistency Engine</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Maximized Loom OEE</span>
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
                  <Factory className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">COLOR PRECISION</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Precision Dye Lots</div>
                <div className="text-xs text-slate-300 mt-0.5">Spectral Consistency</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">WEAVING OEE</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Maximized Loom Uptime</div>
                <div className="text-xs text-slate-300 mt-0.5">Automated Weft Monitoring</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">YIELD RECOVERY</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Optimized Roll Yield</div>
                <div className="text-xs text-slate-300 mt-0.5">Minimal Roll Scrap</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">AUDIT PEDIGREE</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">REACH & OEKO Certified</div>
                <div className="text-xs text-slate-300 mt-0.5">Global Export Compliance</div>
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
                Transforming Composite Mills from Disconnected Sheds to a <span className="text-[#0070C0]">Precision Digital Mesh</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] pl-4 py-2 bg-gradient-to-r from-sky-50/80 to-transparent rounded-r-lg">
                <p className="text-sm sm:text-base font-semibold text-slate-800 italic">
                  "Textile margins are won and lost in the dye kitchen and the loom shed. Without digitized roll serialization and real-time beam scheduling, shade variances and idle machine minutes erode profitability."
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-normal">
                <p>
                  Modern composite textile mills operate across vast industrial footprints—from high-volume spinning and air-jet weaving sheds to continuous chemical finishing ranges and global export carton staging. Traditional mills struggle with fragmented clipboards, unmonitored loom stoppages, and manual dye kitchen batches that trigger expensive export rejections.
                </p>
                <p>
                  KNOOVIQ architects clean-core SAP S/4HANA Mill Products ecosystems integrated with IoT shop-floor telemetry. By linking raw cotton bale assay grading directly with loom scheduling, automated color kitchen dosing, and camera-based four-point defect mapping, we empower textile leaders to achieve zero-defect export yields.
                </p>
              </div>

              {/* 3 Strategic Pillars Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center mb-2 font-black text-sm">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-900">Shade Precision</div>
                  <div className="text-[11px] text-slate-500 mt-1">Direct spectrophotometer dye kitchen sync</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center mb-2 font-black text-sm">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-900">Loom Scheduling</div>
                  <div className="text-[11px] text-slate-500 mt-1">Dynamic warp beam and weaver utilization</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center mb-2 font-black text-sm">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-900">Export Velocity</div>
                  <div className="text-[11px] text-slate-500 mt-1">Touchless customs packing lists & chemical logs</div>
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
                  Verified Mill Benchmark
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: TEXTILE INDUSTRY CHALLENGES (6 Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-600 uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5" />
              <span>MILL BOTTLENECKS & OPERATIONAL REALITIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Critical Obstacles Constraining Modern <span className="text-[#0070C0]">Textile Mills</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Composite mills face complex synchronization barriers across yarn spinning, loom weaving, chemical finishing, and global brand delivery audits.
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
              Unified <span className="text-[#38BDF8]">Textile Mill Platform</span> Architecture
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal">
              Eight interlocking digital pillars connecting cotton fiber assay intake, loom weaving, automated dye kitchen formulation, and global export container dispatch.
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
                  <Factory className="w-6 h-6 text-[#38BDF8] mb-1" />
                  <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-widest leading-tight">
                    KNOOVIQ MILL
                  </span>
                  <span className="text-xs font-black text-white leading-tight">
                    Textile Platform
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
              Enterprise SAP Stack for Industrial <span className="text-[#0070C0]">Textile Operations</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Engineered on a Clean Core foundation, combining SAP S/4HANA Mill Products, SAP MII, and BTP extensions for agile, real-time shop-floor orchestration.
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
              Pre-Packaged Capabilities for <span className="text-[#0070C0]">Textile Enterprises</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Purpose-built accelerators designed for rapid implementation and rapid ROI across spinning, weaving, and chemical finishing sheds.
            </p>

            {/* 4 Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {[
                { id: 'ALL', label: 'All Solutions (9)' },
                { id: 'COMMERCE', label: 'Mill Operations' },
                { id: 'SUPPLY_CHAIN', label: 'Plant & SCM' },
                { id: 'CUSTOMER', label: 'Commercial & Export' }
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
              Realized ROI across Global <span className="text-[#0070C0]">Textile Operations</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Validated operational and financial benchmarks achieved across enterprise spinning mills, industrial weaving sheds, and fabric export plants.
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
                    <span>Verified Mill Audit</span>
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
              Executing the Modern Mill <span className="text-[#38BDF8]">Roadmap</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal">
              A proven four-stage engineering sequence elevating composite mills from legacy clipboard tracking to an autonomous, data-driven manufacturing powerhouse.
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
            <span>COMMENCE YOUR MILL MODERNIZATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to Build a Zero-Defect, High-Velocity <br className="hidden sm:inline" />
            <span className="text-cyan-200">Textile Manufacturing Enterprise?</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-100 max-w-2xl mx-auto font-normal leading-relaxed">
            Partner with KNOOVIQ's senior industrial manufacturing practitioners to architect an end-to-end SAP S/4HANA Mill Products solution customized for your composite mills.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => onOpenContact && onOpenContact('Textile Industry Transformation')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-[#003B73] hover:bg-slate-100 text-sm font-bold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
            >
              <span>Talk to Our Textile Experts</span>
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
              <span>SAP Mill Products Certified</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-300" />
              <span>Real-Time Loom Shed Telemetry</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-300" />
              <span>100% Audit-Grade Traceability</span>
            </span>
          </div>

        </div>
      </section>

    </div>
  );
};
