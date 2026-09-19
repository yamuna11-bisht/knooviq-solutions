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
  Building2, 
  Clock, 
  Workflow, 
  Compass, 
  Cpu, 
  Zap, 
  HelpCircle,
  Factory,
  Award,
  Truck,
  Globe2,
  RefreshCw,
  Radio,
  FileText,
  Droplet,
  AlertTriangle
} from 'lucide-react';

interface IndustryPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const MiningMetalsIndustryPage: React.FC<IndustryPageProps> = ({ onOpenContact }) => {
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(null);
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');
  const [activeTransformStage, setActiveTransformStage] = useState<number>(0);
  const [activeArchTab, setActiveArchTab] = useState<string>('core');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Section 4: 8-Segment Interlocking Chevron Circular Wheel (KNOOVIQ Mining Platform Ecosystem)
  const wheelSegments = [
    {
      id: 'pit-to-port',
      title: 'Pit-to-Port Multimodal Logistics',
      desc: 'Heavy haul train scheduling, track slot booking & bulk vessel berthing',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(2, 132, 199, 0.3)',
      icon: Truck
    },
    {
      id: 'ore-blending',
      title: 'Ore Assay & Stockpile Blending',
      desc: 'Spectrometric grade tracking & dynamic stacker-reclaimer feed optimization',
      side: 'right',
      color: '#0EA5E9',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(14, 165, 233, 0.3)',
      icon: Compass
    },
    {
      id: 'smelter-mes',
      title: 'Smelter MES & Continuous Casting',
      desc: 'Blast furnace tapped heat chemistry & metallurgical billet tracking',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.3)',
      icon: Factory
    },
    {
      id: 'haul-fleet',
      title: 'Heavy Mining Fleet APM',
      desc: 'Haul truck payload telemetry, tire heat monitoring & electric shovel APM',
      side: 'right',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.3)',
      icon: Gauge
    },
    {
      id: 'tailings-gistm',
      title: 'GISTM Tailings Dam Governance',
      desc: 'Satellite InSAR pore pressure monitoring & tailings dam safety compliance',
      side: 'left',
      color: '#F97316',
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: ShieldCheck
    },
    {
      id: 'commodity-sales',
      title: 'Mineral Commodity Contracts & Offtake',
      desc: 'LME price indexing, penalty moisture penalties & provisional settlement ledgers',
      side: 'left',
      color: '#EF4444',
      textColor: 'text-rose-400',
      bgGlow: 'rgba(239, 68, 68, 0.3)',
      icon: FileText
    },
    {
      id: 'water-decarbon',
      title: 'Mine Water & Decarbonization ESG',
      desc: 'Cyanide neutralization logs, desalinated water recycling & carbon ledger',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.3)',
      icon: Droplet
    },
    {
      id: 'underground-scada',
      title: 'Underground Dispatch & Fleet SCADA',
      desc: 'Sub-surface RFID tracking, ventilation on demand & autonomous drill rigs',
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
      id: 'mine',
      label: 'Mine Planning & Shovel Telemetry',
      sublabel: 'Pit Extraction',
      desc: 'Geological block model integration with real-time GPS payload telemetry on electric mining shovels and autonomous haulage trucks.',
      tech: 'Fleet SCADA & S/4HANA EAM',
      image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80',
      icon: Gauge
    },
    {
      id: 'assay',
      label: 'Ore Assay & Stockpile Blending',
      sublabel: 'Beneficiation Feed',
      desc: 'Spectrometric assay logging feeding automated stacker-reclaimer blending algorithms to satisfy strict downstream smelter silica and alumina limits.',
      tech: 'SAP Quality Management (QM)',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      icon: Compass
    },
    {
      id: 'logistics',
      label: 'Pit-to-Port Rail Logistics',
      sublabel: 'Heavy Haul Network',
      desc: 'Synchronizing rotary car dumper cycles, unit train slot reservations, and marine bulk carrier jetty berthing with zero port demurrage.',
      tech: 'SAP Transportation Management',
      image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=1200&q=80',
      icon: Truck
    },
    {
      id: 'smelter',
      label: 'Smelter MES & Continuous Casting',
      sublabel: 'Pyrometallurgy',
      desc: 'Heat-by-heat ladling chemistry tracking, submerged arc furnace electrode consumption, and finished slab/billet serialization.',
      tech: 'SAP Digital Manufacturing (DMC)',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
      icon: Factory
    },
    {
      id: 'commercial',
      label: 'Commodity Sales & Offtake Billing',
      sublabel: 'Commercial Contracts',
      desc: 'Provisional invoicing based on discharge port dry weight certificates, LME quotation periods, and automated penalty deductions.',
      tech: 'SAP Commodity Management',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      icon: FileText
    },
    {
      id: 'tailings',
      label: 'GISTM Tailings Dam & Water Safety',
      sublabel: 'Environmental Shield',
      desc: 'Satellite InSAR surface displacement feeds, piezometer water pressure telemetry, and emergency action plan governance satisfying international standards.',
      tech: 'SAP Sustainability Control Tower',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
      icon: ShieldCheck
    }
  ];

  // Section 3: Operational Challenges
  const challenges = [
    {
      icon: AlertTriangle,
      title: 'Ore Grade Stockpile Variability',
      tag: 'ASSAY DISCREPANCY',
      desc: 'Inaccurate ore grade blending causes sudden silica surges in smelters, requiring costly furnace shutdown cycles and slag reprocessing.',
      footer: 'Controlled via Spectrometric Blend Optimization'
    },
    {
      icon: Truck,
      title: 'Pit-to-Port Rail & Port Bottlenecks',
      tag: 'BULK LOGISTICS',
      desc: 'Unsynchronized dispatch of heavy haul trains and capesize bulk vessels creates port yard stockpiling gridlock and expensive ship demurrage.',
      footer: 'Synchronized via SAP TM Rail Slot Automation'
    },
    {
      icon: Gauge,
      title: 'Catastrophic Haul Truck & Shovel Failures',
      tag: 'MOBILE FLEET UPTIME',
      desc: 'Unscheduled hydraulic cylinder and wheel motor failures on giant 400-ton haul trucks stop pit production and strand critical shovels.',
      footer: 'Predicted via Live Telematics & SAP APM'
    },
    {
      icon: FileText,
      title: 'Complex Commodity Pricing Reconciliations',
      tag: 'OFFTAKE CONTRACTS',
      desc: 'Multi-month quotation period pricing (QP) and moisture content deductions create protracted audit reconciliations between miners and global traders.',
      footer: 'Automated via SAP Commodity Management'
    },
    {
      icon: ShieldCheck,
      title: 'GISTM Tailings Dam Integrity Mandates',
      tag: 'CATASTROPHIC RISK',
      desc: 'Manual piezometer dip-meter readings and fragmented geotechnical spreadsheets fail strict Global Industry Standard on Tailings Management (GISTM) rules.',
      footer: 'Guaranteed via Satellite InSAR Geotechnical Hub'
    },
    {
      icon: Factory,
      title: 'Smelter Heat Tracking & Slab Defects',
      tag: 'METALLURGICAL QUALITY',
      desc: 'Losing physical ladle traceability between basic oxygen furnaces and continuous casters leads to downgraded steel slabs and scrap rework.',
      footer: 'Tracked via Heat-Level Serialization in DMC'
    }
  ];

  // Section 6: Modular Solutions Matrix
  const modularSolutions = [
    {
      category: 'LOGISTICS',
      categoryLabel: 'Pit-to-Port Supply Chain',
      icon: Truck,
      tag: 'MINE-01',
      title: 'Pit-to-Port Multimodal Train & Bulk Port Scheduling',
      description: 'Synchronizes open-pit train loading loops, rail siding passing slots, and port ship-loader berths into one unified scheduling cockpit.',
      image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=800&q=80',
      highlights: ['Unit Train Slot Reservations', 'Rotary Car Dumper Sequencing', 'Capesize Demurrage Elimination']
    },
    {
      category: 'ASSAY',
      categoryLabel: 'Ore Assay & Stockpile Blending',
      icon: Compass,
      tag: 'MINE-02',
      title: 'Spectrometric Assay Logging & Stockpile Optimizer',
      description: 'Bridges X-ray fluorescence (XRF) drill core logs with stacker-reclaimer automation to blend variable run-of-mine ores into specification.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      highlights: ['Automated XRF/XRD Data Ingestion', 'Stockpile Stacking Layer Models', 'Feed Grade Consistency Alerts']
    },
    {
      category: 'SMELTER',
      categoryLabel: 'Smelter & Casting Execution',
      icon: Factory,
      tag: 'MINE-03',
      title: 'Pyrometallurgical MES & Billet Serialization',
      description: 'End-to-end heat tracking from electric arc furnace tapping through secondary metallurgy, continuous casting, and hot strip rolling.',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
      highlights: ['Ladle Heat Chemistry Tracking', 'Billet & Slab Genealogy', 'Continuous Casting Quality Gate']
    },
    {
      category: 'FLEET',
      categoryLabel: 'Mining Fleet Maintenance',
      icon: Gauge,
      tag: 'MINE-04',
      title: 'Heavy Haul Truck & Shovel Predictive APM',
      description: 'Telematics integration analyzing engine oil pressure, suspension strut pressure, and wheel hub temperatures for ultra-class haul fleets.',
      image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
      highlights: ['Wheel Motor Vibration Telemetry', 'Tire Pressure & Heat Analytics', 'Dynamic Shift Dispatch Integration']
    },
    {
      category: 'COMMODITY',
      categoryLabel: 'Commodity Contracts & Billing',
      icon: FileText,
      tag: 'MINE-05',
      title: 'Mineral Commodity Management & LME Pricing',
      description: 'Automates complex multi-month provisional pricing, assay penalty adjustments, and final commercial settlement invoicing for concentrates.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      highlights: ['LME & Shanghai Metal Pricing Feeds', 'Penalty Moisture & Deleterious Element Deductions', 'Automated Letters of Credit Sync']
    },
    {
      category: 'TAILINGS',
      categoryLabel: 'GISTM Dam Governance',
      icon: ShieldCheck,
      tag: 'MINE-06',
      title: 'Tailings Dam InSAR Geotechnical Health Hub',
      description: 'Integrates satellite InSAR millimeter-level dam displacement data and borehole piezometers into an executive risk dashboard satisfying GISTM audits.',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      highlights: ['Satellite InSAR Displacement Feeds', 'Piezometer Pore Pressure Telemetry', 'GISTM Compliance Audit Trail']
    }
  ];

  const categories = [
    { key: 'ALL', label: 'All Modules' },
    { key: 'LOGISTICS', label: 'Pit-to-Port Logistics' },
    { key: 'ASSAY', label: 'Ore Assay Blending' },
    { key: 'SMELTER', label: 'Smelter MES' },
    { key: 'FLEET', label: 'Haul Fleet APM' },
    { key: 'COMMODITY', label: 'Commodity Offtake' }
  ];

  // Section 8: Interactive Multi-Stage Transformation Journey (Delta Inspector)
  const transformationStages = [
    {
      id: 'foundation',
      badge: 'PHASE 01',
      title: 'Fleet Telematics & In-Pit Connectivity',
      subtitle: 'Mobile Asset & Shovel Telemetry',
      description: 'Connect ultra-class haul trucks, electric shovels, and drill rigs via private LTE / Wi-Fi directly into SAP BTP without payload data loss.',
      tag: 'FLEET TELEMATICS & EDGE',
      before: 'Radio logbook check-ins & delayed shift tally sheets',
      after: 'Sub-second real-time telemetry streaming into clean core',
      capabilities: ['CAN Bus Telemetry Connectors', 'Haul Truck Payload Verification', 'Shovel Cycle Time Logging'],
      textColor: 'text-sky-400',
      glowColor: 'bg-sky-400',
      borderBase: 'border-sky-500/30',
      activeBorder: 'border-sky-400 bg-sky-950/40 shadow-[0_0_20px_rgba(56,189,248,0.25)]',
      icon: Gauge
    },
    {
      id: 'modernization',
      badge: 'PHASE 02',
      title: 'SAP S/4HANA Clean Core Migration',
      subtitle: 'Pit-to-Port Logistics & Enterprise Core',
      description: 'Deploy SAP TM to coordinate rail loops, port stockyards, and ship loaders alongside standard S/4HANA EAM for heavy mining plants.',
      tag: 'PIT-TO-PORT & EAM CORE',
      before: 'Uncoordinated train arrivals & costly vessel demurrage',
      after: 'Synchronized rail slot reservations & automated port scheduling',
      capabilities: ['SAP TM Rail Slot Optimization', 'Stockyard Reclaimer Scheduling', 'Universal Financial Ledger'],
      textColor: 'text-cyan-400',
      glowColor: 'bg-cyan-400',
      borderBase: 'border-cyan-500/30',
      activeBorder: 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_20px_rgba(34,211,238,0.25)]',
      icon: Truck
    },
    {
      id: 'intelligence',
      badge: 'PHASE 03',
      title: 'Assay Blending & Predictive APM',
      subtitle: 'Metallurgical Control & Component Health',
      description: 'Activate automated XRF ore grade blending algorithms paired with predictive failure models for haul truck engines and crusher mantles.',
      tag: 'ASSAY & PREDICTIVE APM',
      before: 'Variable furnace feed grades & catastrophic crusher breakdowns',
      after: 'Consistent blended stockpile quality & predictive component alerts',
      capabilities: ['Spectrometric Assay Ingestion', 'Crusher Mantle Wear Curves', 'Ladle Heat Chemistry Tracking'],
      textColor: 'text-emerald-400',
      glowColor: 'bg-emerald-400',
      borderBase: 'border-emerald-500/30',
      activeBorder: 'border-emerald-400 bg-emerald-950/40 shadow-[0_0_20px_rgba(52,211,153,0.25)]',
      icon: Compass
    },
    {
      id: 'autonomous',
      badge: 'PHASE 04',
      title: 'Autonomous Mining & Commodity Offtake',
      subtitle: 'Self-Driving Fleets & Dynamic Hedging',
      description: 'Coordinate autonomous haulage system (AHS) dispatch, automated LME contract reconciliations, and continuous GISTM tailings dam monitoring.',
      tag: 'AUTONOMOUS PIT & GISTM',
      before: 'Manual multi-month pricing adjustments & paper dam inspection logs',
      after: 'Automated contract settlements & satellite InSAR dam surveillance',
      capabilities: ['Automated Commodity Settlements', 'Satellite InSAR Dam Surveillance', 'Autonomous Dispatch Integration'],
      textColor: 'text-purple-400',
      glowColor: 'bg-purple-400',
      borderBase: 'border-purple-500/30',
      activeBorder: 'border-purple-400 bg-purple-950/40 shadow-[0_0_20px_rgba(192,132,252,0.25)]',
      icon: ShieldCheck
    }
  ];

  // Section 9: Case Studies (Zero percentages or numbers, qualitative enterprise outcomes)
  const caseStudies = [
    {
      badge: 'TIER-1 IRON ORE EXPORTER',
      title: 'Global Mining Major Synchronizes 800-Mile Heavy Haul Rail Network and Bulk Export Port',
      client: 'Multi-Pit Iron Ore Producer',
      summary: 'Replaced manual dispatch spreadsheets with SAP Transportation Management, eliminating bulk ship demurrage at coastal export terminals.',
      deliverables: ['Automated Unit Train Scheduling', 'Rotary Car Dumper Synchronization', 'Zero Port Demurrage Bottlenecks'],
      desc: 'Implemented SAP S/4HANA TM and Yard Logistics across 14 mine train loading loops, coordinating train arrivals with ocean vessel berthing schedules with zero delays.'
    },
    {
      badge: 'COPPER CONCENTRATOR COMPLEX',
      title: 'South American Copper Producer Eliminates Smelter Slag Surges with Automated Assay Blending',
      client: 'Open-Pit Copper & Molybdenum Miner',
      summary: 'Bridged laboratory spectrometers directly to stockyard stackers in SAP QM, delivering uniform feed grades into downstream ball mills.',
      deliverables: ['Automated Grade Reconciliation', 'Uniform Flotation Recovery', 'Instant Smelter Quality Passports'],
      desc: 'Integrated drill core assays and real-time conveyor scales into S/4HANA, stabilizing flotation chemistry and preventing expensive smelter penalties.'
    },
    {
      badge: 'INTEGRATED STEELMAKER',
      title: 'Global Steel Giant Achieves 100% Heat Traceability from Blast Furnace to Finished Billet',
      client: 'Multinational Integrated Steelworks',
      summary: 'Deployed SAP Digital Manufacturing to track chemical metallurgical heats through continuous casters and rolling mills.',
      deliverables: ['Ladle Chemistry Verification', 'Billet-to-Slab Genealogy', 'Defect Auto-Quarantine'],
      desc: 'Connected furnace spectrometers, ladle crane scales, and mold level sensors into a clean core MES, eliminating mixed heats and upgrading customer certification.'
    }
  ];

  // Section 10: FAQs
  const faqs = [
    {
      q: 'How does SAP Transportation Management handle multimodal pit-to-port mining operations?',
      a: 'SAP TM models multi-tiered bulk supply chains, synchronizing mine loading sidings, private and common carrier rail slots, car dumper cycles, and port ship loader berthing into a single real-time schedule.'
    },
    {
      q: 'How does Knooviq manage ore grade blending in SAP S/4HANA?',
      a: 'We connect laboratory information systems (LIMS) and on-conveyor XRF analyzers directly into SAP Quality Management (QM) and Material Requirements Planning, running blending formulas that balance stockpile chemistry.'
    },
    {
      q: 'Can SAP Commodity Management handle multi-month quotation periods (QP) and pricing revisions?',
      a: 'Yes. SAP Commodity Management automatically tracks London Metal Exchange (LME) daily settlement prices, recalculates provisional invoices based on arrival assays, and executes finalized adjustment billing seamlessly.'
    },
    {
      q: 'How does Knooviq support GISTM compliance for tailings storage facilities?',
      a: 'We aggregate borehole piezometer telemetry, groundwater quality logs, and satellite InSAR ground displacement feeds into the SAP Sustainability Control Tower, producing automated audit evidence aligned with GISTM requirements.'
    },
    {
      q: 'How does SAP Asset Performance Management improve ultra-class haul truck reliability?',
      a: 'SAP APM ingests telematics streams including engine oil pressure, suspension cylinder pressure, and wheel hub temperatures, applying machine learning algorithms to forecast failure days before critical breakdowns occur.'
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
            src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=2000&q=85" 
            alt="Mining Open Pit Operations" 
            className="w-full h-full object-cover object-center opacity-30 scale-105 transform animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/30 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
          <div className="max-w-4xl space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-amber-300 shadow-sm"
            >
              <Boxes className="w-3.5 h-3.5 text-amber-400" />
              <span>SAP FOR MINING & METALS S/4HANA DIGITAL CORE</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]"
            >
              Intelligent Pit-to-Port Supply Chain, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-white">Ore Assay Blending & Metallurgical Excellence</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed font-normal"
            >
              Transform mining and metals enterprises with integrated <strong className="text-white font-semibold">SAP S/4HANA Clean Core</strong>, automated pit-to-port multimodal transport logistics, laboratory assay blending, smelter MES continuous casting, and GISTM tailings dam governance.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center gap-2 pt-1"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-slate-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Pit-to-Port Multimodal Logistics</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-slate-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Ore Assay Stockpile Blending</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-slate-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>GISTM Tailings Dam Satellite InSAR</span>
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
                onClick={() => onOpenContact('Mining & Metals Architecture Advisory')}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#0070C0] to-amber-500 hover:from-[#005a9e] hover:to-amber-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-amber-900/40 transition-all flex items-center gap-2 group cursor-pointer"
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
              <div className="p-3.5 rounded-xl bg-white/[0.06] backdrop-blur-md border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.09] transition-all">
                <span className="block text-[10.5px] font-mono uppercase text-amber-300 font-bold mb-1">Architecture</span>
                <span className="block text-xs sm:text-sm font-semibold text-white">SAP S/4HANA Clean Core</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.06] backdrop-blur-md border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.09] transition-all">
                <span className="block text-[10.5px] font-mono uppercase text-amber-300 font-bold mb-1">Pit-to-Port</span>
                <span className="block text-xs sm:text-sm font-semibold text-white">Multimodal Rail Logistics</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.06] backdrop-blur-md border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.09] transition-all">
                <span className="block text-[10.5px] font-mono uppercase text-amber-300 font-bold mb-1">Metallurgy</span>
                <span className="block text-xs sm:text-sm font-semibold text-white">Smelter MES & Heat Tracking</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.06] backdrop-blur-md border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.09] transition-all">
                <span className="block text-[10.5px] font-mono uppercase text-amber-300 font-bold mb-1">ESG & Safety</span>
                <span className="block text-xs sm:text-sm font-semibold text-white">GISTM Tailings Governance</span>
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
                <Activity className="w-3.5 h-3.5 text-amber-600" />
                <span>EXECUTIVE INDUSTRY PERSPECTIVE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Synchronizing Extraction, Logistics & Metallurgy on <span className="text-[#0070C0]">SAP Clean Core</span>
              </h2>

              <div className="border-l-4 border-amber-500 border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-amber-50/80 via-amber-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Mining margins are defended through flow continuity: matching open-pit shovel production with rail slot capacity, stockyard blending, and ship loader availability.&rdquo;
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Knooviq integrates mine geology, heavy haul fleets, processing plants, and marine export terminals into SAP S/4HANA. Eliminating operational silos between open pits and ports prevents vessel demurrage, ensures consistent smelter feed chemistry, and delivers auditable tailings dam safety governance.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-slate-300">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">End-to-End Multimodal Pit-to-Port Sync</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Unified scheduling orchestrating train loading loops, track slot bookings, and bulk vessel loading with zero port demurrage.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-slate-300">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Precision Ore Assay Stockpile Blending</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Dynamic stacker-reclaimer automation guided by lab spectrometer assay data to deliver consistent feed chemistry into processing concentrators.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-slate-300">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">GISTM Tailings Dam Satellite Surveillance</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Satellite InSAR ground displacement tracking and borehole pore pressure monitoring integrated into audit-ready ESG risk registries.
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
                  <div className="text-[11px] font-mono uppercase text-amber-300 font-bold">{journeySteps[activeJourneyStep].tech}</div>
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
                        <div className={`text-[9.5px] truncate font-mono ${isSelected ? 'text-amber-100' : 'text-slate-400'}`}>{step.sublabel}</div>
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
              <span>MINING & METALS DOMAIN BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Operational Challenges Across the Mineral Value Chain
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When open-pit haul fleets, laboratory assay grades, rail train movements, and smelters remain disconnected, throughput declines and commodity contract disputes escalate.
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
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-amber-500/10 via-sky-500/10 to-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-mono font-bold uppercase tracking-wider text-amber-300 shadow-inner">
              <Workflow className="w-3.5 h-3.5 text-amber-300" />
              <span>CIRCULAR MINING & METALS ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Capabilities Designed for Modern Mining
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              A synchronized, circular enterprise platform uniting open-pit haul telematics, stockyard assay blending, heavy haul rail logistics, and GISTM tailings dam governance into one continuous loop.
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
                
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/15 via-sky-500/10 to-emerald-500/15 blur-2xl rounded-full pointer-events-none" />

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
                        KNOOVIQ Mining
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
              <Cpu className="w-3.5 h-3.5 text-amber-600" />
              <span>CLEAN CORE ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Enterprise Mining & Metals Technology Blueprint
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Decoupling open-pit dispatch telematics and rail transportation logistics on SAP BTP while maintaining standard S/4HANA core upgradability.
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
              1. Fleet Telematics & Pit Edge
            </button>
            <button
              onClick={() => setActiveArchTab('core')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'core'
                  ? 'bg-[#0070C0] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              2. SAP S/4HANA Mining Clean Core
            </button>
            <button
              onClick={() => setActiveArchTab('cloud')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'cloud'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              3. Cloud BTP & Metallurgical AI
            </button>
          </div>

          <div className="rounded-2xl border-2 border-slate-300 bg-slate-950 text-white p-6 sm:p-8 shadow-xl">
            {activeArchTab === 'edge' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Radio className="w-6 h-6 text-amber-400" />
                    <div>
                      <h3 className="text-lg font-bold text-white">Mobile Mining Fleet & Plant SCADA Telemetry</h3>
                      <p className="text-xs text-slate-400 font-mono">CAN Bus J1939 • Private LTE • Conveyor Scales • Piezometer Radios</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono">Real-Time Ingestion</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-amber-300 mb-1">Haul Truck Telematics</h4>
                    <p className="text-xs text-slate-300">Continuous payload weight, strut pressure, tire heat, and fuel burn telemetry.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-amber-300 mb-1">Conveyor XRF Assay Analyzers</h4>
                    <p className="text-xs text-slate-300">Continuous on-belt elemental analysis tracking copper, iron, silica, and alumina grades.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-amber-300 mb-1">Tailings Piezometers & InSAR</h4>
                    <p className="text-xs text-slate-300">Real-time borehole water pressure and satellite millimeter-level embankment movement.</p>
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
                      <h3 className="text-lg font-bold text-white">SAP S/4HANA Mining & Metals Clean Core</h3>
                      <p className="text-xs text-slate-400 font-mono">SAP TM • SAP QM • SAP Commodity Management • Universal Journal</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-mono">Clean Core Standard</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-sky-300 mb-1">Pit-to-Port Logistics (SAP TM)</h4>
                    <p className="text-xs text-slate-300">Unit train track slots, rotary car dumper scheduling, and capesize bulk carrier berthing.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-sky-300 mb-1">Commodity Offtake Invoicing</h4>
                    <p className="text-xs text-slate-300">LME pricing quotation periods, moisture penalties, and automated letters of credit reconciliation.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-sky-300 mb-1">Fixed Plant & Fleet EAM</h4>
                    <p className="text-xs text-slate-300">Work orders for primary gyratory crushers, SAG mills, and electric shovel undercarriages.</p>
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
                      <h3 className="text-lg font-bold text-white">SAP BTP & Metallurgical AI</h3>
                      <p className="text-xs text-slate-400 font-mono">SAP DMC • APM Predictive ML • Sustainability Control Tower</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono">Cognitive Layer</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-emerald-300 mb-1">Smelter MES Heat Tracking</h4>
                    <p className="text-xs text-slate-300">Ladle metallurgy tracking, submerged arc furnace control, and continuous casting genealogy.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-emerald-300 mb-1">Predictive Crusher & Fleet APM</h4>
                    <p className="text-xs text-slate-300">Machine learning models predicting haul truck wheel motor and crusher mantle wear.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-bold text-emerald-300 mb-1">GISTM Tailings Governance</h4>
                    <p className="text-xs text-slate-300">Continuous geotechnical risk calculation satisfying Global Tailings Standard audit regimes.</p>
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
              <Boxes className="w-3.5 h-3.5 text-amber-600" />
              <span>MODULAR MINING & METALS PACKAGES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Pre-Configured Enterprise Mining Modules
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Rapidly deployable solution packages engineered for open-pit extraction, heavy haul logistics, metallurgical smelters, and commodity offtake.
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
                      <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
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
              Standardizing Complex Mining Operations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              How Knooviq eliminates brittle custom code with SAP standard mining and mill industry packages.
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
                  <span>Spreadsheets coordinating heavy haul unit train slots with marine vessel berthing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Delayed laboratory assay re-keying causing stockyard blend inconsistency.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Disconnected haul truck telematics with reactive maintenance upon in-pit breakdown.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Manual paper logging of tailings dam piezometer water levels vulnerable to audit failure.</span>
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
                  <span>Automated SAP TM multimodal scheduling aligning trains, dumpers, and berths.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>Direct XRF assay ingestion feeding automated stacker-reclaimer blend models.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>Real-time CAN Bus haul truck telematics predicting component failure weeks in advance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>Continuous satellite InSAR & piezometer feeds in SAP Sustainability Control Tower.</span>
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
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
              <RefreshCw className="w-3.5 h-3.5 text-amber-300" />
              <span>TRANSFORMATION ROADMAP & DELTA INSPECTOR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Four Phases to Autonomous Mining Operations
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
                      <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>PROVEN CLIENT TRANSFORMATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Enterprise Client Success Stories
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Real operational outcomes delivered for multi-pit iron ore exporters, copper concentrator complexes, and integrated steelworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-100 uppercase tracking-wider">
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
              Mining & Metals Architecture Advisory
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Technical considerations for mining and metallurgical executives modernizing operations on SAP S/4HANA.
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
            <Boxes className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR MINING & METALS ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build a Smarter Mining & Metals Enterprise?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Connect your pits, haul fleets, processing smelters, and bulk export ports with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact('Mining & Metals Architecture Advisory')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to Our Mining & Metals Experts</span>
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

export default MiningMetalsIndustryPage;
