import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
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
  Microchip,
  Factory
} from 'lucide-react';

interface IndustryPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const HighTechElectronicsIndustryPage: React.FC<IndustryPageProps> = ({ onOpenContact }) => {
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

  // Section 4: Circular Chevron Radial Wheel Segments (KNOOVIQ High-Tech Ecosystem)
  const wheelSegments = [
    {
      id: 'smt-traceability',
      title: 'SMT Reel & Component Lot Traceability',
      desc: 'Micro-barcode scanning tracing every surface-mount passive, IC, and PCB lot from feeder to finished serial number.',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(2, 132, 199, 0.3)',
      icon: Cpu
    },
    {
      id: 'ebom-mbom',
      title: 'Multi-Level EBOM-to-MBOM Synchronizer',
      desc: 'Automated engineering bill-of-materials translation into production assembly structures with alternate component logic.',
      side: 'right',
      color: '#0EA5E9',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(14, 165, 233, 0.3)',
      icon: Split
    },
    {
      id: 'aoi-ict-telemetry',
      title: 'Automated Test Telemetry & Defect Tracking',
      desc: 'Real-time telemetry ingestion from AOI, solder paste inspection, and in-circuit testers triggering immediate quarantine.',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.3)',
      icon: Activity
    },
    {
      id: 'component-allocation',
      title: 'Critical Component Allocation & MRP Live',
      desc: 'Dynamic allocation of high-demand semiconductors across customer build schedules using real-time inventory pegging.',
      side: 'right',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.3)',
      icon: Boxes
    },
    {
      id: 'rohs-reach',
      title: 'RoHS, REACH & Conflict Minerals Compliance',
      desc: 'Automated supplier compliance certificate validation ensuring zero hazardous substances cross production gates.',
      side: 'left',
      color: '#F97316',
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: ShieldCheck
    },
    {
      id: 'rma-reverse',
      title: 'RMA, Warranty & Reverse Logistics',
      desc: 'Rapid return merchandise intake, automated warranty validation, board rework routing, and component failure analysis.',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.3)',
      icon: RefreshCw
    },
    {
      id: 'eco-change',
      title: 'Closed-Loop Engineering Change Orders',
      desc: 'Digital ECO governance coordinating revision cutovers across suppliers, warehouse bins, and active SMT lines.',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.3)',
      icon: Workflow
    },
    {
      id: 'yield-analytics',
      title: 'First-Pass Yield & Parametric Analytics',
      desc: 'Continuous tracking of assembly defect rates, component supplier scrap variances, and box-build final test yields.',
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
      id: 'design',
      label: 'EBOM Handshake',
      sublabel: 'ECAD Integration',
      tech: 'SAP Engineering Control Center',
      desc: 'Importing Altium, Cadence, and Mentor schematics into SAP PLM, creating synchronized engineering and manufacturing BOMs.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      icon: Split
    },
    {
      id: 'sourcing',
      label: 'Part Allocation',
      sublabel: 'Silicon Shortage Logic',
      tech: 'SAP Integrated Business Planning',
      desc: 'Pegging allocated microcontrollers and passives to priority OEM customer orders with qualified alternate substitutions.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      icon: Boxes
    },
    {
      id: 'smt',
      label: 'SMT Execution',
      sublabel: 'Reel-Level Scanning',
      tech: 'SAP Digital Manufacturing (DMC)',
      desc: 'Enforcing barcode validation on pick-and-place feeder slots to prevent incorrect component loading on surface-mount lines.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
      icon: Cpu
    },
    {
      id: 'test',
      label: 'AOI & ICT Testing',
      sublabel: 'Defect Capture',
      tech: 'SAP Quality Management (QM)',
      desc: 'Streaming automated optical inspection and flying-probe test outcomes into digital device history records (DHR).',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
      icon: Activity
    },
    {
      id: 'boxbuild',
      label: 'Box-Build Assembly',
      sublabel: 'Serial Linking',
      tech: 'SAP S/4HANA Discrete Assembly',
      desc: 'Aggregating motherboards, sub-assemblies, firmware revisions, and MAC addresses into parent device serial records.',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80',
      icon: Factory
    },
    {
      id: 'rma',
      label: 'RMA & Reverse Flow',
      sublabel: 'Failure Analysis',
      tech: 'SAP Service Cloud & EWM',
      desc: 'Rapid reverse logistics intake, automated warranty validation, board-level diagnosis, and environmental e-waste compliance.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
      icon: RefreshCw
    }
  ];

  // Section 3: High-Tech Industry Challenges & Bottlenecks Data (6 Cards)
  const industryChallenges = [
    {
      id: 'component-shortages',
      tag: 'SUPPLY VOLATILITY',
      title: 'Semiconductor Lead-Time Disruption',
      desc: 'Sudden lead-time extensions for microcontrollers and passives cause unscheduled line stoppages and stranded work-in-progress.',
      status: 'LINE STOPPAGE RISK',
      statusColor: 'text-rose-400 bg-rose-950/60 border-rose-800'
    },
    {
      id: 'eco-confusion',
      tag: 'REVISION GOVERNANCE',
      title: 'Uncoordinated Engineering Changes',
      desc: 'Rapid design revisions introduce scrap and rework when line operators assemble obsolete board revisions without automated lockouts.',
      status: 'SCRAP VULNERABILITY',
      statusColor: 'text-amber-400 bg-amber-950/60 border-amber-800'
    },
    {
      id: 'counterfeit-risks',
      tag: 'AUTHENTICITY CONTROL',
      title: 'Counterfeit & Grey Market Penetration',
      desc: 'Open-market spot purchasing during component shortages risks introduction of substandard silicon without complete traceability.',
      status: 'QUALITY CRISIS',
      statusColor: 'text-rose-400 bg-rose-950/60 border-rose-800'
    },
    {
      id: 'feeder-mismatches',
      tag: 'SHOP-FLOOR ERRORS',
      title: 'Pick-and-Place Feeder Misloading',
      desc: 'Manual reel loading on high-speed SMT lines leads to incorrect passive placements, ruining entire PCB production batches.',
      status: 'ASSEMBLY DEFECTS',
      statusColor: 'text-rose-400 bg-rose-950/60 border-rose-800'
    },
    {
      id: 'rohs-audits',
      tag: 'HAZARDOUS SUBSTANCES',
      title: 'RoHS, REACH & Environmental Penalties',
      desc: 'Missing supplier material declaration certificates can trigger customs seizure of finished electronics at international borders.',
      status: 'CUSTOMS INTERCEPTION',
      statusColor: 'text-amber-400 bg-amber-950/60 border-amber-800'
    },
    {
      id: 'rma-friction',
      tag: 'WARRANTY DRIFT',
      title: 'Sluggish RMA Diagnostics & Rework',
      desc: 'Disconnected reverse logistics systems delay warranty turnaround, inflate buffer inventories, and fail to feed failure data back to design.',
      status: 'WARRANTY LEAKAGE',
      statusColor: 'text-amber-400 bg-amber-950/60 border-amber-800'
    }
  ];

  // Section 5: Architecture Tabs Data
  const architectureTabs = [
    {
      id: 'core',
      name: 'Digital Manufacturing Core',
      tag: 'SAP S/4HANA DISCRETE MANUFACTURING',
      headline: 'Integrated Bill-of-Materials & Serialized Production Core',
      desc: 'The authoritative enterprise ledger governing multi-level BOMs, MRP Live allocations, work center routing, and product costing.',
      capabilities: [
        'Single-instance synchronization between engineering design BOMs and manufacturing BOMs',
        'High-speed MRP Live calculating component shortages and trigger point reservations',
        'End-to-end serialization mapping every PCB assembly to its final device chassis',
        'Native integration with SAP Quality Management for incoming and final inspection lots'
      ],
      diagramDetails: [
        { label: 'BOM Governance', value: 'EBOM / MBOM Sync' },
        { label: 'MRP Live Engine', value: 'Shortage Pegging' },
        { label: 'Serial Hierarchy', value: 'Device History Record' },
        { label: 'Production Costing', value: 'Real-Time Variance' }
      ]
    },
    {
      id: 'edge',
      name: 'Shop-Floor Execution & MES',
      tag: 'SAP DIGITAL MANUFACTURING CLOUD',
      headline: 'SMT Feeder Verification & Test Equipment Telemetry',
      desc: 'Connecting shop-floor robotics, screen printers, pick-and-place lines, and test bays directly into the execution thread.',
      capabilities: [
        'Barcode verification locking pick-and-place feeders until correct reel scans are validated',
        'Automated optical inspection (AOI) data streaming with immediate defect containment',
        'Operator terminal step-by-step assembly guidance with integrated ECO visual work instructions',
        'Environmental monitoring capturing cleanroom temperature, humidity, and ESD telemetry'
      ],
      diagramDetails: [
        { label: 'Feeder Validation', value: 'Zero SMT Misloads' },
        { label: 'Test Telemetry', value: 'AOI & ICT Integration' },
        { label: 'Cleanroom Telemetry', value: 'ESD & Ambient Locks' },
        { label: 'Digital Work Guide', value: 'Paperless Assembly' }
      ]
    },
    {
      id: 'cloud',
      name: 'Yield & Supply Chain Intelligence',
      tag: 'SAP BTP & ANALYTICS CLOUD',
      headline: 'Parametric Yield Analytics & Component Allocation Cockpit',
      desc: 'Harnessing SAP Business Technology Platform to anticipate component bottlenecks, optimize yields, and manage reverse RMA flows.',
      capabilities: [
        'Real-time first-pass yield scorecards highlighting component vendor defect variances',
        'Intelligent component substitution engine recommending qualified alternative part numbers',
        'Automated warranty entitlement validation and reverse logistics RMA routing',
        'Clean Core architecture keeping core ERP free of custom shop-floor scripting'
      ],
      diagramDetails: [
        { label: 'Yield Analytics', value: 'Parametric Quality' },
        { label: 'Alternate Parts', value: 'Qualified Substitution' },
        { label: 'RMA Automation', value: 'Reverse Supply Chain' },
        { label: 'Clean Core BTP', value: 'Standard Extension' }
      ]
    }
  ];

  // Section 6: Modular Solutions Data
  const modularSolutions = [
    {
      category: 'CORE',
      title: 'Precision EBOM-to-MBOM & ECO Governance',
      badge: 'PLM & S/4HANA CORE',
      desc: 'Connect ECAD design tools directly to SAP S/4HANA, enforcing strict engineering change orders with instant inventory lockouts.',
      features: [
        'Bi-directional schematic and netlist synchronization',
        'Automated alternate part number hierarchy creation',
        'Digital ECO approval workflows with scrap liability calculation',
        'Phased revision cutover management across supply chains'
      ]
    },
    {
      category: 'EXECUTION',
      title: 'SMT Feeder Interlock & Reel-Level MES',
      badge: 'DIGITAL MANUFACTURING',
      desc: 'Prevent costly surface-mount assembly errors through physical feeder interlocks, component moisture tracking, and reel-level lot genealogy.',
      features: [
        'Barcode scanning interlocking pick-and-place feeders',
        'Moisture-sensitive device (MSD) floor-life countdowns',
        'Component reel splice verification protocols',
        'Direct machine telemetry from solder paste printers'
      ]
    },
    {
      category: 'COMPLIANCE',
      title: 'RoHS, REACH & Device History Records',
      badge: 'PRODUCT COMPLIANCE',
      desc: 'Maintain complete regulatory compliance across global electronics markets with automated substance disclosures and serialized device records.',
      features: [
        'Full material declaration certificate collection',
        'Automated customs shipping documentation with RoHS proof',
        'Complete serialized Device History Record (DHR) compilation',
        'Conflict minerals sourcing audit trails'
      ]
    },
    {
      category: 'ANALYTICS',
      title: 'First-Pass Yield & Defect Root-Cause Intelligence',
      badge: 'SAP ANALYTICS CLOUD',
      desc: 'Analyze AOI, ICT, and functional test data to identify defective supplier lots and optimize board assembly parameters.',
      features: [
        'Parametric test correlation with supplier wafer lots',
        'Automated defect heatmaps identifying solder bridge patterns',
        'RMA failure analysis closed-loop design feedback',
        'Real-time line throughput and scrap analytics'
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
      dimension: 'BOM Management',
      legacy: 'Manual spreadsheet EBOM translation causing incorrect component ordering and obsolete stock.',
      cleanCore: 'Direct ECAD-to-SAP PLM integration with automated MBOM synchronization and alternate logic.',
      valueImpact: 'Zero Translation Scrap'
    },
    {
      dimension: 'SMT Feeder Setup',
      legacy: 'Operator visual inspection of component reels prone to human error and wrong-component placements.',
      cleanCore: 'Automated barcode scanner interlock locking SMT machine launch until all slots are verified.',
      valueImpact: 'Flawless SMT Placement'
    },
    {
      dimension: 'Component Traceability',
      legacy: 'Batch-level records that require broad, costly customer product recalls during silicon defects.',
      cleanCore: 'Granular component reel and serial-level genealogy identifying exact affected device units.',
      valueImpact: 'Surgical Recall Precision'
    },
    {
      dimension: 'Engineering Changes',
      legacy: 'Verbal or email revision releases resulting in mismatched board revisions and customer returns.',
      cleanCore: 'Closed-loop digital ECO cutovers with automated stock quarantines and visual work guidance.',
      valueImpact: 'Total Revision Control'
    },
    {
      dimension: 'Environmental Audits',
      legacy: 'Scattered paper certificates risking customs seizures and severe regulatory non-compliance fines.',
      cleanCore: 'Integrated SAP Product Compliance verifying RoHS and REACH status at order shipment.',
      valueImpact: 'Guaranteed Border Clearance'
    }
  ];

  // Section 8: Transformation Roadmap Stages Data
  const transformationStages = [
    {
      badge: 'FOUNDATION',
      title: 'Digital Manufacturing Core & BOM Synchronization',
      subtitle: 'PLM Integration & S/4HANA Ledger',
      tag: 'CORE UNIFICATION',
      textColor: 'text-sky-400',
      description: 'Synchronize ECAD designs with the S/4HANA core, establishing unified master data and serialized production orders.',
      before: 'Disconnected CAD drawings and manual bill-of-materials entry into legacy ERP systems.',
      after: 'Automated engineering bill-of-materials reconciliation with live inventory and component availability.',
      metrics: ['Single-source-of-truth component master data', 'Automated EBOM-to-MBOM handshake', 'Complete production order serialization']
    },
    {
      badge: 'INTEGRATION',
      title: 'Shop-Floor MES & SMT Feeder Interlocks',
      subtitle: 'Machine Connectivity & Reel Validation',
      tag: 'EXECUTION EXCELLENCE',
      textColor: 'text-cyan-400',
      description: 'Connect surface-mount lines and test bays to enforce pick-and-place validation and capture test results automatically.',
      before: 'Manual reel loading on SMT machines and manual recording of AOI test inspection passes.',
      after: 'Barcode interlocks on feeders and automated streaming of inspection telemetry to device history records.',
      metrics: ['Zero pick-and-place component misloads', 'Automated AOI and ICT defect logging', 'Active moisture-sensitive device timers']
    },
    {
      badge: 'ORCHESTRATION',
      title: 'Closed-Loop ECO & Regulatory Compliance',
      subtitle: 'Engineering Changes & Substance Audit',
      tag: 'COMPLIANCE ASSURANCE',
      textColor: 'text-emerald-400',
      description: 'Automate engineering change order cutovers and enforce automated RoHS and REACH customs document generation.',
      before: 'Obsolete board revisions manufactured due to delayed change order distribution across plants.',
      after: 'Automated revision cutovers locking obsolete inventory bins and updating assembly instructions instantly.',
      metrics: ['Immediate ECO containment across lines', 'Full RoHS and REACH border compliance', 'Complete conflict minerals traceability']
    },
    {
      badge: 'AUTONOMY',
      title: 'Parametric Yield Optimization & Closed-Loop RMA',
      subtitle: 'Predictive Quality & Failure Analytics',
      tag: 'ENTERPRISE MASTERY',
      textColor: 'text-purple-400',
      description: 'Deploy advanced yield analytics correlating supplier silicon wafer lots with field reliability and RMA returns.',
      before: 'Delayed awareness of recurring component defects and slow warranty turnaround times.',
      after: 'Predictive parametric analytics linking field RMA diagnostics directly back to SMT lines and supplier ratings.',
      metrics: ['Real-time parametric yield optimization', 'Rapid RMA diagnostic turnaround', 'Automated supplier defect recovery claims']
    }
  ];

  // Section 10: FAQs
  const faqs = [
    {
      q: 'How does SAP handle alternative component substitutions during semiconductor shortages?',
      a: 'SAP S/4HANA natively supports Discontinuous Parts and Alternative Component Groups within the manufacturing BOM. When a primary microcontroller or passive experiences a stockout, the system automatically checks qualified alternate parts, verifies pin-compatibility and environmental compliance, and reallocates inventory without requiring an engineering change order.'
    },
    {
      q: 'How does the system prevent operator loading errors on high-speed SMT pick-and-place lines?',
      a: 'Through integration with SAP Digital Manufacturing (DMC), operators scan the barcode on each component reel and the corresponding feeder slot. The system validates the component part number against the active setup sheet. If an incorrect reel is scanned, the pick-and-place machine remains interlocked and cannot start, preventing wrong-component placements.'
    },
    {
      q: 'Can SAP compile a complete Device History Record (DHR) for mission-critical electronics?',
      a: 'Yes. Every finished electronic product receives a serialized parent record that links all sub-assemblies, individual IC lot codes, SMT line numbers, AOI inspection images, ICT parametric values, and firmware build versions into an immutable digital Device History Record, ready for customer or regulatory audits.'
    },
    {
      q: 'How does KNOOVIQ maintain Clean Core principles for high-tech manufacturing plants?',
      a: 'All shop-floor machine adapters, custom tester parsers, and specialized supplier portals are implemented on SAP Business Technology Platform (BTP) using standard Open Manufacturing APIs. The core S/4HANA ERP remains entirely standard and clean, ensuring seamless upgrades without disrupting factory floor operations.'
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
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80" 
            alt="High-Tech & Electronics Contract Manufacturing" 
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
              <Cpu className="w-4 h-4 text-sky-400" />
              <span>HIGH-TECH & ELECTRONICS CONTRACT MANUFACTURING</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4"
            >
              Zero-Defect Electronics with{' '}
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
              Synchronize multi-level EBOMs, pick-and-place feeder validation, automated test telemetry, and component-level lot genealogy on SAP S/4HANA Discrete Manufacturing.
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
                <span>Reel-Level SMT Traceability</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Closed-Loop ECO Cutover Control</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Full RoHS & REACH Border Compliance</span>
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
                  <Split className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">BOM RECON</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">EBOM to MBOM</div>
                <div className="text-[10px] text-slate-300">Alternate Part Logic</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">FEEDER LOCK</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">SMT Barcode Interlock</div>
                <div className="text-[10px] text-slate-300">Zero Misloads</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">TEST TELEMETRY</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">AOI & ICT Streaming</div>
                <div className="text-[10px] text-slate-300">Instant Defect Lock</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">GENEALOGY</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">Complete DHR Record</div>
                <div className="text-[10px] text-slate-300">Audit Ready Silicon</div>
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
                Synchronizing High-Speed Assembly with <span className="text-sky-400">Silicon Supply Chains</span>
              </h2>

              <div className="border-l-4 border-sky-500 pl-4 py-2 bg-white/5 rounded-r-xl">
                <p className="text-sm font-semibold text-slate-200 leading-relaxed italic">
                  &ldquo;In high-tech contract manufacturing, operating excellence is achieved at the interface of component feeder verification, real-time AOI testing, and automated engineering change control.&rdquo;
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Electronics manufacturers face extreme margin pressure from semiconductor volatility, component feeder misloads, and stringent regulatory traceability mandates. When a critical IC experiences a supplier revision or shortage, the factory must pivot instantly without generating obsolete inventory. Knooviq establishes a closed-loop digital manufacturing thread connecting ECAD schematics, SMT pick-and-place lines, and the S/4HANA ERP core.
              </p>

              {/* Information Checklist Grid (Zero Numbers/Percents) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Automated ECAD-to-MBOM reconciliation with alternate component mapping',
                  'Physical feeder interlocks preventing incorrect reel placement on SMT lines',
                  'Live automated optical inspection streaming directly into device history records',
                  'Automated RoHS, REACH, and conflict minerals compliance certificate verification'
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
              Operational Vulnerabilities in High-Tech Manufacturing
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Critical bottlenecks that cause component scrap, production downtime, and regulatory shipment holds.
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
              KNOOVIQ High-Tech Electronics Ecosystem
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Eight interlocking capability modules orchestrating electronics assembly from design to reverse RMA logistics.
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
                  <Cpu className="w-5 h-5 text-cyan-400 mb-1" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 font-bold">KNOOVIQ</span>
                  <span className="text-xs font-black text-white leading-tight">HIGH-TECH EMS</span>
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
              Three-Tier Electronics Manufacturing Architecture
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Decoupling shop-floor machine control from master BOMs and enterprise analytics.
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
              Specialized Solutions for High-Tech Electronics
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Configurable modules supporting high-velocity contract manufacturing, SMT execution, and regulatory compliance.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {['ALL', 'CORE', 'EXECUTION', 'COMPLIANCE', 'ANALYTICS'].map((cat) => (
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
                    onClick={() => onOpenContact(`High-Tech Electronics: ${sol.title}`)}
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
              Eliminating manual BOM discrepancies and shop-floor errors with real-time digital thread automation.
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
              Phased High-Tech Electronics Transformation
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Four progressive architectural stages transitioning electronics factories to zero-defect Clean Core execution.
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
              Strategic Safeguards for High-Tech Electronics
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Architectural advantages realized by electronics contract manufacturers running on SAP Clean Core.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between hover:border-sky-400 transition-colors">
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 inline-block">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-white">Flawless SMT Feeder Setup</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Automated barcode interlocks enforce correct reel placement before pick-and-place lines start, preventing wrong-component placements permanently.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 mt-4 text-[10px] font-mono text-sky-400 font-bold uppercase">
                ASSEMBLY ACCURACY
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between hover:border-sky-400 transition-colors">
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 inline-block">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-white">Surgical Lot Recall Precision</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Component reel traceability tracks every passive and IC lot to its exact serialized chassis, isolating defective lots without broad recalls.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 mt-4 text-[10px] font-mono text-emerald-400 font-bold uppercase">
                TRACEABILITY CONTROL
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between hover:border-sky-400 transition-colors">
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 inline-block">
                  <Workflow className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-white">Zero Revision Scrap</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Automated ECO cutovers synchronize drawings across engineering, suppliers, and shop-floor terminals, preventing obsolete board assembly.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 mt-4 text-[10px] font-mono text-purple-400 font-bold uppercase">
                REVISION GOVERNANCE
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between hover:border-sky-400 transition-colors">
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 inline-block">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-white">Guaranteed Border Clearance</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Integrated substance declaration verifies RoHS, REACH, and conflict minerals compliance at dispatch, ensuring seamless global shipments.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 mt-4 text-[10px] font-mono text-amber-400 font-bold uppercase">
                ENVIRONMENTAL AUDIT
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
              High-Tech & Electronics ERP Inquiries
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Critical architecture considerations for electronics contract manufacturers modernizing on SAP.
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
            Accelerate Your High-Tech Manufacturing Transformation
          </h2>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Schedule an architectural consultation with our SAP Discrete Manufacturing and MES specialists to evaluate your SMT line traceability, component allocation, and yield analytics.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact('High-Tech Electronics Architecture Consultation')}
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
