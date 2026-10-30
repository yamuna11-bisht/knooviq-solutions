import React, { useState } from 'react';
import { useAutoRotate } from '../../hooks/useAutoRotate';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
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
  FolderKanban, 
  Split, 
  Factory,
  Scan,
  Cloud
} from 'lucide-react';

interface HighTechIndustryPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const HighTechIndustryPage: React.FC<HighTechIndustryPageProps> = ({ 
  onOpenContact 
}) => {

  // State for Section 4 Circular Chevron Wheel
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(null);

  // State for Section 6 Solution Category Filter
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');

  // State for Section 8 Transformation Stage
  const [activeTransformStage, setActiveTransformStage] = useState<number>(0);

  // Section 4: 8-Segment Circular Chevron Wheel (KNOOVIQ High-Tech Silicon Platform)
  const wheelSegments = [
    {
      id: 'fabless-foundry',
      title: 'Fabless-Foundry Digital Mesh',
      desc: 'Seamless EDI and API bridge syncing GDSII tapeouts, mask revisions, wafer fab orders, and foundry WIP status.',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(2, 132, 199, 0.3)',
      icon: Cpu
    },
    {
      id: 'wafer-genealogy',
      title: 'Wafer Lot & Die Genealogy',
      desc: 'Micro-barcode and laser-engraved 2D DataMatrix tracking every individual die from ingot crystal to final BGA package.',
      side: 'right',
      color: '#0EA5E9',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(14, 165, 233, 0.3)',
      icon: Split
    },
    {
      id: 'wafer-probe',
      title: 'Wafer Probe & Sort Telemetry',
      desc: 'High-speed automated ingestion of electronic wafer maps, binning test results, and defect density heatmaps.',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.3)',
      icon: Activity
    },
    {
      id: 'cleanroom-iot',
      title: 'Cleanroom Ambient & Particle Locks',
      desc: 'Sub-second sensor streaming monitoring Class 1 cleanroom particle counts, humidity, and laminar flow velocity.',
      side: 'right',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.3)',
      icon: Radio
    },
    {
      id: 'osat-integration',
      title: 'OSAT Subcontracting Governance',
      desc: 'Real-time consignment inventory and stage-gate authorization across third-party assembly and test partners.',
      side: 'left',
      color: '#F97316',
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: Factory
    },
    {
      id: 'advanced-packaging',
      title: 'Multi-Die & Chiplet Packaging',
      desc: 'Managing 2.5D/3D heterogeneous chiplet integration with complex multi-level semiconductor bill-of-materials.',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.3)',
      icon: Layers
    },
    {
      id: 'mask-governance',
      title: 'Reticle & Mask Asset Governance',
      desc: 'Complete maintenance tracking, shot counts, and degradation monitoring for high-value photolithography reticles.',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.3)',
      icon: Workflow
    },
    {
      id: 'parametric-yield',
      title: 'Parametric Yield & Machine Learning',
      desc: 'Real-time algorithmic prediction identifying process drift, ion implantation anomalies, and etching deviations.',
      side: 'left',
      color: '#3B82F6',
      textColor: 'text-blue-400',
      bgGlow: 'rgba(59, 130, 246, 0.3)',
      icon: BarChart3
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
    const thetaMid = (theta1 + theta2) / 2 + tip / 2;
    const rad = (deg: number) => (deg * Math.PI) / 180;
    return {
      x: cx + rMid * Math.cos(rad(thetaMid)),
      y: cy + rMid * Math.sin(rad(thetaMid))
    };
  };

  // Section 2: Journey Steps (Clean, no numbers, no statistics, no percentages)
  const journeySteps = [
    {
      id: 'tapeout',
      label: 'Tapeout & Silicon BOM',
      sublabel: 'Design to Foundry',
      desc: 'Synchronizing fabless chip architectures with foundry process design kits (PDKs) and automated tapeout ECO locks.',
      tech: 'SAP PLM & Enterprise BOM',
      image: '/images/hightech_journey_tapeout_silicon_bom.jpg',
      icon: Cpu
    },
    {
      id: 'cleanroom',
      label: 'Cleanroom Wafer Fab',
      sublabel: 'Front-End Production',
      desc: 'Orchestrating wafer cassette lots across steppers, diffusion furnaces, and ion implanters with real-time particle monitoring.',
      tech: 'SAP Digital Manufacturing',
      image: '/images/hightech_journey_cleanroom_wafer_fab.jpg',
      icon: Factory
    },
    {
      id: 'probe',
      label: 'Wafer Probe & Sort',
      sublabel: 'Parametric Testing',
      desc: 'Automated ingestion of multi-gigabyte probe telemetry files linking parametric test values to spatial die defect maps.',
      tech: 'S/4HANA Quality Core',
      image: '/images/hightech_journey_wafer_probe_sort.jpg',
      icon: Activity
    },
    {
      id: 'osat',
      label: 'OSAT Subcontracting',
      sublabel: 'Back-End Packaging',
      desc: 'Managing outsourced assembly and test across global OSAT partners with live consignment stock and yield reconciliation.',
      tech: 'SAP BTP Subcontracting Mesh',
      image: '/images/hightech_journey_osat_subcontracting.jpg',
      icon: Layers
    },
    {
      id: 'burn-in',
      label: 'Burn-In & Serialization',
      sublabel: 'DHR Verification',
      desc: 'Final stress screening at temperature extremes with laser-etched 2D DataMatrix marking and digital Device History Records.',
      tech: 'SAP Serial & Batch Lineage',
      image: '/images/hightech_journey_burnin_serialization.jpg',
      icon: ShieldCheck
    },
    {
      id: 'analytics',
      label: 'Parametric Yield Analytics',
      sublabel: 'Machine Learning',
      desc: 'Predictive algorithmic anomaly detection identifying subtle etching and chemical-mechanical planarization drifts.',
      tech: 'SAP Analytics Cloud',
      image: '/images/hightech_journey_parametric_yield.jpg',
      icon: BarChart3
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

  // Section 3: High-Tech Challenges & Bottlenecks
  const highTechChallenges = [
    {
      icon: Split,
      tag: 'DESIGN & TAPE-OUT',
      title: 'Design-to-Tapeout Disconnect',
      desc: 'Disjointed EDA/CAD files, manual engineering change orders (ECOs), and unaligned foundry PDK versions cause costly tapeout delays and respin cycles.',
      footer: 'Silicon Revision Drift'
    },
    {
      icon: Radio,
      tag: 'CLEANROOM RISKS',
      title: 'Cleanroom Ambient Excursions',
      desc: 'Undetected microscopic airborne particulate spikes, humidity fluctuations, or laminar velocity shifts risk catastrophic lot scrapping in Class 1 cleanrooms.',
      footer: 'High-Value Wafer Scrapping'
    },
    {
      icon: Activity,
      tag: 'TEST TELEMETRY',
      title: 'Disjointed Wafer Probe Files',
      desc: 'Multi-gigabyte parametric test files trapped in proprietary tester formats prevent real-time electronic binning and rapid spatial defect containment.',
      footer: 'Parametric Data Blindspots'
    },
    {
      icon: Factory,
      tag: 'SUBCONTRACTING',
      title: 'OSAT Subcontractor Opacity',
      desc: 'Managing multi-tier outsourced assembly and test partners via fragmented spreadsheets creates blindspots in WIP velocity, consignment loss, and billing.',
      footer: 'Back-End Consignment Gaps'
    },
    {
      icon: Layers,
      tag: 'ADVANCED PACKAGING',
      title: 'Multi-Die & Chiplet Complexity',
      desc: '2.5D and 3D heterogeneous packaging architectures with micro-bumps and interposers break conventional monolithic single-die ERP bill-of-materials.',
      footer: 'Heterogeneous BOM Bottlenecks'
    },
    {
      icon: ShieldCheck,
      tag: 'COMPLIANCE',
      title: 'Rigorous Traceability Mandates',
      desc: 'Automotive (AEC-Q100) and aerospace silicon standards require complete unbroken die genealogy from single crystal ingots to the vehicle control unit.',
      footer: 'Lineage & Audit Overhead'
    }
  ];

  // Section 6: 9 Modular Enterprise Industry Solutions (Symmetrical 3x3 Grid)
  const industrySolutions = [
    {
      title: 'Wafer Lot & Die Genealogy',
      tag: 'WAFER LINEAGE',
      category: 'DESIGN_FAB',
      categoryLabel: 'Design & Fab Core',
      description: 'End-to-end genealogical lineage tracking individual wafers, carrier FOUPs, and diced chip assemblies across production stages.',
      image: '/images/hightech_solution_wafer_lot_genealogy.jpg',
      highlights: ['Slot-Level Tracking', 'Automated Lot Split/Merge', 'Digital DHR Records'],
      icon: Split
    },
    {
      title: 'Fabless-to-Foundry Mesh',
      tag: 'FOUNDRY SYNC',
      category: 'DESIGN_FAB',
      categoryLabel: 'Design & Fab Core',
      description: 'Seamless RosettaNet and REST API thread connecting fabless chip design houses with world-class wafer foundries for live WIP sync.',
      image: '/images/hightech_solution_fabless_foundry_mesh.png',
      highlights: ['GDSII Release Locks', 'Foundry WIP Telemetry', 'Tapeout ECO Controls'],
      icon: Cpu
    },
    {
      title: 'Cleanroom DMC Edge Interlocks',
      tag: 'CLEANROOM EDGE',
      category: 'DESIGN_FAB',
      categoryLabel: 'Design & Fab Core',
      description: 'Sub-second machine and air-handling integration locking photolithography steppers automatically upon environmental particle breaches.',
      image: '/images/hightech_solution_cleanroom_dmc_interlocks.png',
      highlights: ['SECS/GEM Protocols', 'Sub-Second Machine Lockouts', 'Laminar Flow Velocity'],
      icon: Radio
    },
    {
      title: 'Electronic Wafer Map Ingestion',
      tag: 'TEST & SORT',
      category: 'TEST_PACKAGING',
      categoryLabel: 'Test & Packaging',
      description: 'High-speed automated ingestion of electronic wafer sort files, translating test parameters into spatial defect density heatmaps.',
      image: '/images/hightech_solution_wafer_map_ingestion.png',
      highlights: ['Multi-Bin Classification', 'Defect Heatmap Generation', 'Instant Die Pegging'],
      icon: Activity
    },
    {
      title: 'OSAT Subcontracting Governance',
      tag: 'OSAT PARTNER MESH',
      category: 'TEST_PACKAGING',
      categoryLabel: 'Test & Packaging',
      description: 'Stage-gate validation, wafer consignment tracking, and packaging assembly yield reconciliation across third-party OSAT facilities.',
      image: '/images/hightech_solution_osat_subcontracting.jpg',
      highlights: ['Consignment Reconciliation', 'Assembly Yield Accounting', 'Subcontracting Stage-Gates'],
      icon: Factory
    },
    {
      title: 'Multi-Die & Chiplet Packaging',
      tag: 'HETEROGENEOUS BOM',
      category: 'TEST_PACKAGING',
      categoryLabel: 'Test & Packaging',
      description: 'Configurable multi-level semiconductor bill-of-materials managing silicon substrates, micro-bumps, interposers, and resin encapsulation.',
      image: '/images/hightech_solution_multidie_chiplet_packaging.jpg',
      highlights: ['2.5D/3D Multi-Die Modules', 'Interposer Lot Tracking', 'Micro-Bump Verification'],
      icon: Layers
    },
    {
      title: 'Automotive AEC-Q100 Compliance',
      tag: 'MISSION CRITICAL',
      category: 'GOVERNANCE',
      categoryLabel: 'Yield & Compliance',
      description: 'Automated adherence to zero-defect automotive qualification, environmental burn-in logs, and Production Part Approval Process (PPAP).',
      image: '/images/hightech_solution_automotive_aec_q100.jpg',
      highlights: ['AEC-Q100 Qualification', 'Zero-Defect Screening', 'Electronic PPAP Workflows'],
      icon: ShieldCheck
    },
    {
      title: 'Parametric Yield Analytics',
      tag: 'YIELD SCIENCE',
      category: 'GOVERNANCE',
      categoryLabel: 'Yield & Compliance',
      description: 'Machine learning algorithms running on SAP Analytics Cloud identifying subtle etching, deposition, and test bin distribution shifts.',
      image: '/images/hightech_solution_parametric_yield_analytics.jpg',
      highlights: ['Process Drift Alerts', 'Scrap Root-Cause Isolation', 'Predictive Yield Modeling'],
      icon: BarChart3
    },
    {
      title: 'Photolithography Reticle Assets',
      tag: 'TOOLING ASSETS',
      category: 'GOVERNANCE',
      categoryLabel: 'Yield & Compliance',
      description: 'Shot count tracking, reticle degradation curves, cleanroom pod maintenance, and automated stepper inspection schedules.',
      image: '/images/hightech_solution_photolithography_reticle_assets.jpg',
      highlights: ['Shot Count Accumulation', 'Inspection Triggers', 'Reticle Cleaning Cadence'],
      icon: Workflow
    }
  ];

  // Section 8: Transformation in Action (Connected 4-Phase Architecture Pipeline)
  const transformationStages = [
    {
      phase: 'INITIAL CHALLENGE',
      badge: 'SILOED FOUNDRIES',
      title: 'Disconnected Silicon',
      subtitle: 'Legacy Fab Fragmentation',
      description: 'Fabless chip designers, wafer foundries, cleanrooms, and OSAT packaging partners running disconnected portals, causing tapeout revisions and parametric test data blindspots.',
      accent: 'rose',
      borderBase: 'border-rose-500/30 hover:border-rose-400',
      activeBorder: 'border-rose-400 ring-2 ring-rose-500/30 bg-rose-950/20 shadow-[0_0_25px_rgba(244,63,94,0.2)]',
      glowColor: 'bg-rose-500',
      textColor: 'text-rose-400',
      icon: Activity,
      tag: 'Tapeout Delays & Test Silos',
      before: 'Manual GDSII tapeout approvals & delayed wafer probe status',
      after: 'Synchronized event-driven foundry digital thread',
      metrics: ['Wafer Map Discrepancies', 'Manual OSAT PO Clearing', 'Cleanroom Excursions']
    },
    {
      phase: 'STRATEGIC FRAMEWORK',
      badge: 'CLEAN CORE',
      title: 'BTP Silicon Fabric',
      subtitle: 'Architecture Foundation',
      description: 'Deploying decoupled event-driven microservices on SAP BTP to ingest multi-gigabyte wafer sort test maps and integrate SECS/GEM cleanroom equipment telemetry.',
      accent: 'sky',
      borderBase: 'border-sky-500/30 hover:border-sky-400',
      activeBorder: 'border-sky-400 ring-2 ring-sky-500/30 bg-sky-950/20 shadow-[0_0_25px_rgba(56,189,248,0.2)]',
      glowColor: 'bg-sky-500',
      textColor: 'text-sky-400',
      icon: Workflow,
      tag: 'Real-Time Telemetry Mesh',
      before: 'Overnight batch files & unparsed probe raw data',
      after: 'Sub-second electronic binning & automated lot genealogy',
      metrics: ['Decoupled Core', 'SECS/GEM Integration', 'Wafer Map Ingestion']
    },
    {
      phase: 'DEPLOYED STACK',
      badge: 'LIVE ECOSYSTEM',
      title: 'S/4HANA Silicon Core',
      subtitle: 'Discrete Manufacturing + DMC',
      description: 'Unifying S/4HANA Discrete Manufacturing with SAP Digital Manufacturing Cloud (DMC), driving automated carrier pod dispatch and lot split/merge accounting.',
      accent: 'cyan',
      borderBase: 'border-cyan-500/30 hover:border-cyan-400',
      activeBorder: 'border-cyan-400 ring-2 ring-cyan-500/30 bg-cyan-950/20 shadow-[0_0_25px_rgba(34,211,238,0.2)]',
      glowColor: 'bg-cyan-500',
      textColor: 'text-cyan-400',
      icon: Cpu,
      tag: 'Orchestrated S/4HANA',
      before: 'Disjointed cleanroom logs and isolated OSAT consignments',
      after: 'Centralized lot traceability and touchless cleanroom workflows',
      metrics: ['S/4HANA Discrete Core', 'Cleanroom DMC Engine', 'Universal Journal ACDOCA']
    },
    {
      phase: 'STRATEGIC VALUE',
      badge: 'REALIZED IMPACT',
      title: 'Autonomous Velocity',
      subtitle: 'Zero-Defect Execution',
      description: 'Attaining end-to-end silicon traceability from crystal ingot to finished BGA package, minimizing scrap, safeguarding margins, and meeting AEC-Q100 standards.',
      accent: 'emerald',
      borderBase: 'border-emerald-500/30 hover:border-emerald-400',
      activeBorder: 'border-emerald-400 ring-2 ring-emerald-500/30 bg-emerald-950/20 shadow-[0_0_25px_rgba(52,211,153,0.2)]',
      glowColor: 'bg-emerald-500',
      textColor: 'text-emerald-400',
      icon: ShieldCheck,
      tag: 'Zero-Defect Operations',
      before: 'Uncontained wafer yield excursions and slow audit responses',
      after: 'Predictable silicon yield and immutable Device History Records',
      metrics: ['Die-Level Traceability', 'AEC-Q100 Compliance', 'Protected Gross Margins']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Pure Enterprise High-Tech Hero)
          ========================================================================= */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        
        {/* Full-Bleed Enterprise High-Tech Background Image with Seamless Cinematic Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/high_tech_semiconductors_erp_hero.jpg" 
            alt="Intelligent ERP for High-Tech & Semiconductors" 
            className="w-full h-full object-cover object-center lg:object-right"
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
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>
              
              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Intelligent ERP for <br />
                <span className="text-cyan-400">High-Tech & Semiconductors</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Precision Wafer Traceability, Foundry Sync & Zero-Defect Silicon Manufacturing.
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
                Empowering fabless innovators, wafer foundries, cleanrooms, and OSAT packaging networks with{' '}
                <strong className="text-white font-semibold">SAP S/4HANA Clean Core</strong>, automated{' '}
                <strong className="text-cyan-300 font-semibold">SECS/GEM Machine Telemetry</strong>, wafer sort defect mapping, and unbroken die genealogy.
              </p>
              
              {/* Clean Feature Highlights */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Clean Core Architecture</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Wafer-Level Die Genealogy</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>SECS/GEM Telemetry</span>
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
                <div className="text-sm sm:text-base font-bold text-white leading-snug">SAP S/4HANA Discrete</div>
                <div className="text-xs text-slate-300 mt-0.5">Clean Core Ready</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Factory className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">SHOP FLOOR</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Cleanroom DMC Edge</div>
                <div className="text-xs text-slate-300 mt-0.5">Class 1 Interlocks</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Split className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">LINEAGE</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Die-Level Genealogy</div>
                <div className="text-xs text-slate-300 mt-0.5">Zero-Defect Tracking</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Boxes className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">SUPPLY CHAIN</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">OSAT Partner Mesh</div>
                <div className="text-xs text-slate-300 mt-0.5">Global WIP Sync</div>
              </div>
            </motion.div>

          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE INDUSTRY PERSPECTIVE ("Building a Connected Semiconductor Enterprise")
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
                Building a Connected <span className="text-[#0070C0]">Semiconductor Enterprise</span>
              </h2>

              {/* Executive Thesis Quote */}
              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Semiconductor leadership demands flawless execution across microscopic tolerances: bridging fabless chip tapeouts, cleanroom photolithography, and global OSAT packaging into one unified operational core.&rdquo;
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Knooviq engineers an integrated enterprise ecosystem on SAP S/4HANA Clean Core. By harmonizing data across foundries, cleanrooms, and testing facilities, semiconductor leaders achieve complete die visibility, automated yield tracking, and high-velocity operations.
              </p>

              {/* 3 Executive Strategic Pillars */}
              <div className="space-y-2.5 pt-1">
                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Fabless-to-Foundry Digital Backbone</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Single-pane-of-glass coordination syncing GDSII tapeouts, mask revisions, and foundry WIP status without latency.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <Split className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Die-Level Lot & Wafer Map Lineage</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Trace every individual die from crystal ingot growth through photolithography, probe sort, and BGA packaging.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Closed-Loop Yield & Quality Governance</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Continuous parametric drift detection, Class 1 cleanroom interlocks, and automated automotive AEC-Q100 compliance.
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
          SECTION 3: INDUSTRY CHALLENGES ("Navigating the Complexity of Advanced Silicon Manufacturing")
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
              Navigating the Complexity of Advanced Silicon Manufacturing
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Disjointed fabless portals, uncalibrated cleanrooms, and siloed test data constrain yield. Knooviq addresses the six systemic challenges high-tech leaders face.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {highTechChallenges.map((item, idx) => {
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
          SECTION 4: KNOOVIQ HIGH-TECH SILICON PLATFORM (Circular Chevron Radial Diagram)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#070B14] text-white border-b border-slate-800 relative overflow-hidden">
        
        {/* Dark Ambient Radial Hues */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-sky-500/10 via-emerald-500/10 to-purple-500/10 blur-[140px] rounded-full pointer-events-none" />
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
              <span>CONNECTED SILICON ECOSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Capabilities Designed for High-Tech & Semiconductors
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              A synchronized, circular enterprise platform uniting chip design, wafer foundry execution, cleanrooms, packaging networks, and parametric yield AI into one continuous loop.
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
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/15 via-cyan-500/10 to-purple-500/15 blur-2xl rounded-full pointer-events-none" />

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
                    y="200"
                    width="200"
                    height="100"
                    className="pointer-events-none"
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center text-center select-none px-3">
                      <span className="text-sm sm:text-base font-black text-white tracking-wider uppercase leading-tight">
                        KNOOVIQ Silicon
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
          SECTION 5: SAP & TECHNOLOGY FOUNDATION ("Technology Foundation for High-Tech Silicon")
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Layers className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PLATFORM ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Technology Foundation for High-Tech Silicon
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We engineer clean-core SAP technology suites layered with modern cloud extensions, SECS/GEM edge interfaces, and machine learning yield analytics.
            </p>
          </div>

          {/* Layered Technology Ecosystem Visual */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Tech 1: SAP S/4HANA */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">CORE ERP SUITE</span>
                <Cpu className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP S/4HANA Discrete
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Single-source financial ledgers, lot splitting/merging accounting, and discrete manufacturing orders managing multi-level semiconductor bill-of-materials.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Universal Journal (ACDOCA) wafer valuation</div>
                <div className="flex items-center gap-1.5">• Ingot-to-wafer lot split & merge lineage</div>
              </div>
            </div>

            {/* Tech 2: SAP DMC */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">DOMAIN SOLUTION</span>
                <Factory className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Digital Manufacturing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect photolithography steppers, automated guided vehicles (AGVs), and wafer cassette carrier pods (FOUPs) with SECS/GEM standards.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• SECS/GEM standard machine interlocks</div>
                <div className="flex items-center gap-1.5">• Carrier pod FOUP barcode scanning</div>
              </div>
            </div>

            {/* Tech 3: SAP BTP */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">INTEGRATION & EXTENSIONS</span>
                <Cloud className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Business Technology Platform
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Decoupled extension microservices ingesting multi-gigabyte wafer sort files and providing RosettaNet B2B connections to world foundries.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Ingest high-density wafer maps off-core</div>
                <div className="flex items-center gap-1.5">• RosettaNet / EDI foundry B2B protocols</div>
              </div>
            </div>

            {/* Tech 4: SAP Analytics Cloud */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">BUSINESS INTELLIGENCE</span>
                <BarChart3 className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Analytics Cloud
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Real-time visibility into parametric probe binning, spatial wafer defect density, OSAT yield rates, and fab scrap sensitivity analysis.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Spatial Wafer Defect Heatmaps</div>
                <div className="flex items-center gap-1.5">• Parametric Yield & Bin Drift Diagnostics</div>
              </div>
            </div>

            {/* Tech 5: SAP Fiori */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">ROLE-BASED UX</span>
                <Scan className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Fiori Cleanroom Apps
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Touch-optimized cleanroom tablet interfaces for equipment calibration sign-off, cassette lot dispatch, and digital DHR review.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Cleanroom Cassette Barcode Auditing</div>
                <div className="flex items-center gap-1.5">• Electronic Sign-Off & Equipment Release</div>
              </div>
            </div>

            {/* Tech 6: AI & Automation */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">COGNITIVE ENGINES</span>
                <Sparkles className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                AI Yield Predictive Engines
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Algorithmic yield anomaly detection flagging ion implantation drift and etching variations before lots progress to back-end dicing.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Machine Learning Yield Anomaly Alerts</div>
                <div className="flex items-center gap-1.5">• Automated Quarantine of Deviating Wafers</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: INDUSTRY SOLUTIONS ("Solutions for Every Stage of Silicon Manufacturing")
          ========================================================================= */}
      <section id="industry-solutions" className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-slate-200 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0] shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>ENTERPRISE FUNCTIONAL CATALOG</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Solutions for Every Stage of Silicon Manufacturing
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Explore specialized enterprise functional modules engineered to modernize semiconductor execution across chip tapeouts, wafer fab, and packaging networks.
            </p>
          </div>

          {/* Solution Domain Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-7 sm:mb-8">
            {[
              { id: 'ALL', label: 'All Solutions' },
              { id: 'DESIGN_FAB', label: 'Design & Fab Core' },
              { id: 'TEST_PACKAGING', label: 'Test & Packaging' },
              { id: 'GOVERNANCE', label: 'Yield & Compliance' }
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
          SECTION 7: BUSINESS OUTCOMES ("Turning Silicon Complexity into Business Advantage")
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>MEASURABLE BUSINESS IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Turning Silicon Complexity into Business Advantage
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              When design specifications, cleanrooms, wafer test telemetry, and packaging ledgers operate in unison, semiconductor organizations achieve sustainable commercial performance.
            </p>
          </div>

          {/* 6 Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Outcome 1 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Split className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Die-Level Traceability
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Know the exact ingot, wafer cassette, probe bin, and OSAT lot origin of every deployed silicon device. Eradicate untraceable quality escapes.
              </p>
            </div>

            {/* Outcome 2 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Cleanroom Risk Containment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automate tool interlocks and cleanroom atmosphere monitoring. Prevent particle breach excursions before full wafer cassettes suffer catastrophic damage.
              </p>
            </div>

            {/* Outcome 3 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Faster Time-to-Market
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Harmonize design tapeouts with foundry PDK versions. Eliminate engineering change confusion and speed up initial silicon samples to customers.
              </p>
            </div>

            {/* Outcome 4 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                OSAT Partner Synchronization
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Gain real-time consignment stock visibility and WIP stage-gate tracking across outsourced assembly and test facilities worldwide.
              </p>
            </div>

            {/* Outcome 5 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Parametric Yield Optimization
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Transform multi-gigabyte wafer sort telemetry into actionable machine learning alerts. Isolate etching drifts before scrap rates increase.
              </p>
            </div>

            {/* Outcome 6 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Mission-Critical Compliance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Compile immutable digital Device History Records automatically for aerospace, defense, medical, and automotive AEC-Q100 certifications.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: TRANSFORMATION IN ACTION (Connected 4-Phase Architecture Pipeline)
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
              Intelligent High-Tech & Semiconductor Architecture
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              How semiconductor enterprises advance from fragmented foundry communication to an integrated clean-core event ecosystem.
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
          SECTION 9: FINAL CTA (Full-Width Blue Executive Section)
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
            <Cpu className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR SILICON ENTERPRISE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build a Smarter Semiconductor Business?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Connect your silicon design, wafer foundries, cleanrooms, and OSAT partners with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact?.('High-Tech & Semiconductor Practice')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group"
            >
              <span>Talk to Semiconductor Experts</span>
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
