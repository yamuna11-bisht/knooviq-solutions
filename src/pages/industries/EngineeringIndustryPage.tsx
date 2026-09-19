import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
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
  Factory,
  Award,
  Truck,
  Globe2,
  RefreshCw,
  FileText,
  Radio,
  Server,
  AlertTriangle,
  FolderKanban,
  FileCheck,
  Split,
  Binary
} from 'lucide-react';

interface IndustryPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const EngineeringIndustryPage: React.FC<IndustryPageProps> = ({ onOpenContact }) => {
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

  // Section 4: Circular Chevron Radial Wheel Segments (KNOOVIQ Engineering Platform Ecosystem)
  const wheelSegments = [
    {
      id: 'cad-bim-sync',
      title: 'CAD & BIM Multi-Discipline Gateway',
      desc: 'Bi-directional geometry and metadata synchronization from Revit, Tekla, and SolidWorks directly into SAP PLM / ECTR.',
      side: 'right',
      color: '#0284C7', // Sky Blue
      textColor: 'text-sky-400',
      bgGlow: 'rgba(2, 132, 199, 0.3)',
      icon: Compass
    },
    {
      id: 'wbs-governance',
      title: 'Multi-Tier WBS Project Architecture',
      desc: 'Hierarchical Work Breakdown Structure aligning engineering deliverables, cost baselines, and milestone gates.',
      side: 'right',
      color: '#0EA5E9', // Cyan
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(14, 165, 233, 0.3)',
      icon: FolderKanban
    },
    {
      id: 'ebom-mbom-sync',
      title: 'EBOM-to-MBOM Reconciliation',
      desc: 'Automated digital engineering BOM transformation into manufacturing BOMs with no manual transposition errors.',
      side: 'right',
      color: '#10B981', // Emerald
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.3)',
      icon: Split
    },
    {
      id: 'eco-ecr-engine',
      title: 'Engineering Change Governance (ECO/ECR)',
      desc: 'Rigorous digital change order approval workflows tracking supplier revision impacts and scrap liabilities.',
      side: 'right',
      color: '#F59E0B', // Amber
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.3)',
      icon: Workflow
    },
    {
      id: 'long-lead-procure',
      title: 'Long-Lead Material Procurement',
      desc: 'Automated early reservation and procurement triggers for high-spec alloy and custom fabricated components.',
      side: 'left',
      color: '#F97316', // Orange
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: Boxes
    },
    {
      id: 'digital-twin-handover',
      title: 'As-Built Asset Digital Twin Handover',
      desc: 'Seamless commissioning package generation transferring engineering tags and maintenance sheets to operations.',
      side: 'left',
      color: '#8B5CF6', // Purple
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.3)',
      icon: Cpu
    },
    {
      id: 'resource-capacity',
      title: 'Engineering Resource & Capacity Leveling',
      desc: 'Multi-office drafting pool allocation, billable hour forecasting, and skill matrix matching in real time.',
      side: 'left',
      color: '#EC4899', // Pink
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.3)',
      icon: Gauge
    },
    {
      id: 'evm-milestone-ledger',
      title: 'Earned Value & Milestone Progress Ledger',
      desc: 'Progressive stage-gate revenue recognition and cost variance tracking strictly mapped to SAP S/4HANA PS.',
      side: 'left',
      color: '#3B82F6', // Blue
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
      id: 'concept',
      label: 'CAD/BIM Modeling',
      sublabel: 'Parametric Geometry',
      tech: 'Revit & Tekla Gateway',
      desc: 'Parametric BIM and mechanical assemblies synchronized through SAP Engineering Control Center (ECTR) into master PLM records.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      icon: Compass
    },
    {
      id: 'wbs',
      label: 'WBS Structuring',
      sublabel: 'Hierarchical Breakdown',
      tech: 'SAP PS Project Systems',
      desc: 'Decomposing complex contracts into structured engineering deliverables, baseline budgets, and progressive stage-gate milestones.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      icon: FolderKanban
    },
    {
      id: 'bom',
      label: 'EBOM-to-MBOM',
      sublabel: 'Engineering Handshake',
      tech: 'SAP Product Structure Sync',
      desc: 'Transforming functional engineering design BOMs into shop-floor manufacturing BOMs with automated supplier revision governance.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
      icon: Split
    },
    {
      id: 'eco',
      label: 'Change Orders',
      sublabel: 'Digital ECO/ECR',
      tech: 'BTP Change Workflow',
      desc: 'Simulating engineering revision impacts across cost, procurement lead times, and shop floor inventory before releasing modifications.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      icon: Workflow
    },
    {
      id: 'procure',
      label: 'Long-Lead Release',
      sublabel: 'Critical Path Sourcing',
      tech: 'SAP S/4HANA SCM',
      desc: 'Triggering advance purchase requisitions for high-specification alloys, forging items, and custom fabricated subsystems.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      icon: Boxes
    },
    {
      id: 'asbuilt',
      label: 'As-Built Commissioning',
      sublabel: 'Digital Twin Delivery',
      tech: 'SAP Asset Central Hub',
      desc: 'Consolidating operational manuals, certified inspection certificates, and asset tag hierarchies for smooth customer handover.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      icon: ShieldCheck
    }
  ];

  // Section 3: Engineering Industry Challenges & Bottlenecks Data (6 Cards)
  const industryChallenges = [
    {
      icon: Split,
      tag: 'BOM DISCREPANCIES',
      title: 'EBOM vs MBOM Desynchronization',
      desc: 'Design changes made in CAD systems fail to reflect on shop-floor manufacturing BOMs, causing costly fabrication scrap and rework delays.',
      footer: 'Fragmented CAD & ERP Handshakes'
    },
    {
      icon: Workflow,
      tag: 'CHANGE CONTROL',
      title: 'Uncontrolled Revision Creep',
      desc: 'Engineering Change Requests handled over informal channels lack financial impact visibility, causing procurement to order superseded revisions.',
      footer: 'Unbudgeted Engineering Redesigns'
    },
    {
      icon: FolderKanban,
      tag: 'WBS BUDGET OVERRUNS',
      title: 'Blindspot in Milestone EVM',
      desc: 'Lack of real-time Earned Value Management conceals cost variances until late project phases, compressing overall contract profitability.',
      footer: 'Unmonitored Milestone Variance'
    },
    {
      icon: Boxes,
      tag: 'PROCUREMENT LATENCY',
      title: 'Late Long-Lead Sourcing',
      desc: 'Custom engineered alloys and forged valves ordered after detailed design completion lead to critical path project delivery stalls.',
      footer: 'Critical Path Schedule Slippages'
    },
    {
      icon: Gauge,
      tag: 'RESOURCE BOTTLENECKS',
      title: 'Drafting & Engineering Bottlenecks',
      desc: 'Siloed regional design offices lack unified capacity leveling, resulting in overallocated senior designers and underutilized junior staff.',
      footer: 'Suboptimal Engineering Utilization'
    },
    {
      icon: FileCheck,
      tag: 'COMMISSIONING DRAG',
      title: 'Disorganized As-Built Dossiers',
      desc: 'Scattered quality inspection records and unverified drawing redlines delay project completion sign-offs and final contract settlement.',
      footer: 'Delayed Contract Cash Settlements'
    }
  ];

  // Section 6: Modular Solutions Data
  const categories = [
    { key: 'ALL', label: 'All Engineering Suites' },
    { key: 'PLM', label: 'PLM & CAD Integration' },
    { key: 'PS', label: 'Project Systems & EVM' },
    { key: 'GOV', label: 'Change & Governance' }
  ];

  const modularSolutions = [
    {
      category: 'PLM',
      categoryLabel: 'PLM & CAD INTEGRATION',
      tag: 'SAP ECTR SUITE',
      title: 'SAP Engineering Control Center (ECTR)',
      description: 'Integrates SolidWorks, AutoCAD, Revit, and Tekla into SAP PLM, ensuring version-controlled CAD structures and direct metadata authoring.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      icon: Compass,
      highlights: ['Direct CAD session metadata sync', 'Automated neutral document generation', 'Bi-directional part attribute mapping']
    },
    {
      category: 'PS',
      categoryLabel: 'PROJECT SYSTEMS & EVM',
      tag: 'SAP PS CORE',
      title: 'WBS Cost & Milestone Governance Suite',
      description: 'Deploys multi-tier Work Breakdown Structures with automated Earned Value Management, milestone billing, and baseline budget freezes.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      icon: FolderKanban,
      highlights: ['Real-time cost & schedule tracking', 'Stage-gate milestone billing triggers', 'Progressive revenue recognition']
    },
    {
      category: 'GOV',
      categoryLabel: 'CHANGE & GOVERNANCE',
      tag: 'BTP WORKFLOW',
      title: 'Closed-Loop Engineering Change (ECO/ECR)',
      description: 'Audited digital approval workflows that simulate procurement scrap, supplier tooling impact, and schedule delays before approving revisions.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      icon: Workflow,
      highlights: ['Multi-stakeholder impact matrix', 'Automated scrap & rework ledger entries', 'Instant procurement revision lockouts']
    },
    {
      category: 'PLM',
      categoryLabel: 'PLM & CAD INTEGRATION',
      tag: 'BOM RECONCILIATION',
      title: 'Automated EBOM-to-MBOM Synchronizer',
      description: 'Translates functional engineering structures into operational routing and assembly BOMs without manual re-entry or transcription discrepancies.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      icon: Split,
      highlights: ['Visual redline diff comparison', 'Make-or-buy attribute preservation', 'Automated phantom assembly resolution']
    },
    {
      category: 'PS',
      categoryLabel: 'PROJECT SYSTEMS & EVM',
      tag: 'LONG-LEAD SUPPLY',
      title: 'Early Stage Project Procurement Engine',
      description: 'Empowers project engineers to release advance material reservations for forging, castings, and critical valves before final design approval.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      icon: Boxes,
      highlights: ['Pre-engineering purchase orders', 'Critical path supply chain alerts', 'Vendor document requirement tracking']
    },
    {
      category: 'GOV',
      categoryLabel: 'CHANGE & GOVERNANCE',
      tag: 'DIGITAL TWIN',
      title: 'As-Built Commissioning & Handover Hub',
      description: 'Compiles technical dossiers, inspection certs, asset tag hierarchies, and warranty documentation into a compliant digital twin for client operations.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      icon: ShieldCheck,
      highlights: ['Automated tag-to-equipment mapping', 'Digital vendor sign-off punch lists', 'Accelerated contract closeout cycles']
    }
  ];

  const filteredSolutions = activeSolutionCategory === 'ALL' 
    ? modularSolutions 
    : modularSolutions.filter(s => s.category === activeSolutionCategory);

  // Section 8: Transformation Roadmap Stages
  const transformationStages = [
    {
      id: 'stage-1',
      badge: 'FOUNDATION',
      title: 'CAD & PLM Unification',
      subtitle: 'Eliminate Design Silos',
      description: 'Connecting multi-CAD authoring tools into SAP ECTR, establishing single-source master parts and eliminating scattered local drawing folders.',
      tag: 'SAP ECTR & Master Data',
      textColor: 'text-sky-400',
      glowColor: 'bg-sky-500',
      borderBase: 'border-sky-500/30',
      activeBorder: 'border-sky-400 ring-2 ring-sky-500/30 bg-sky-950/30',
      icon: Compass,
      before: 'Decentralized local drawing drives with untracked manual revisions',
      after: 'Unified SAP ECTR CAD vault with automated version locking and release gates',
      metrics: ['Elimination of drawing version conflicts', 'Instant metadata synchronization', 'Protected design intellectual property']
    },
    {
      id: 'stage-2',
      badge: 'INTEGRATION',
      title: 'WBS & Cost Baselines',
      subtitle: 'Hierarchical Milestone Control',
      description: 'Structuring project contracts into SAP PS WBS hierarchies with locked baseline budgets, earned value tracking, and milestone billing.',
      tag: 'SAP PS & EVM Architecture',
      textColor: 'text-cyan-400',
      glowColor: 'bg-cyan-500',
      borderBase: 'border-cyan-500/30',
      activeBorder: 'border-cyan-400 ring-2 ring-cyan-500/30 bg-cyan-950/30',
      icon: FolderKanban,
      before: 'Spreadsheet cost tracking with hidden cost variances until final billing',
      after: 'Live Earned Value Management with automated cost overrun alerts',
      metrics: ['Elimination of unbudgeted drafting hours', 'Real-time project margin visibility', 'Automated milestone invoices']
    },
    {
      id: 'stage-3',
      badge: 'ORCHESTRATION',
      title: 'Closed-Loop Change Control',
      subtitle: 'ECO/ECR Commercial Governance',
      description: 'Digitizing the entire engineering change lifecycle with automated impact simulations across procurement, scrap, and client billing.',
      tag: 'BTP Change Workflow Engine',
      textColor: 'text-amber-400',
      glowColor: 'bg-amber-500',
      borderBase: 'border-amber-500/30',
      activeBorder: 'border-amber-400 ring-2 ring-amber-500/30 bg-amber-950/30',
      icon: Workflow,
      before: 'Informal communication for design revisions leading to scrap fabrication',
      after: 'Formal digital change workflows with automated billable change order generation',
      metrics: ['Comprehensive billable change capture', 'Zero unauthorized revision machining', 'Accelerated engineering change velocity']
    },
    {
      id: 'stage-4',
      badge: 'AUTONOMY',
      title: 'As-Built Digital Twin Delivery',
      subtitle: 'Rapid Client Handover',
      description: 'Delivering structured digital twin data packages directly to client maintenance teams, unlocking accelerated retention money releases.',
      tag: 'Asset Central & Commissioning',
      textColor: 'text-emerald-400',
      glowColor: 'bg-emerald-500',
      borderBase: 'border-emerald-500/30',
      activeBorder: 'border-emerald-400 ring-2 ring-emerald-500/30 bg-emerald-950/30',
      icon: ShieldCheck,
      before: 'Manual binder compilation delaying contract final payments for extended durations',
      after: 'Instant digital as-built export mapped to customer enterprise asset hierarchy',
      metrics: ['Accelerated project closeout milestones', 'Timely retention cash collections', 'Audit-ready compliance dossiers']
    }
  ];

  // Section 10: FAQs
  const faqs = [
    {
      q: 'How does Knooviq connect multi-CAD environments (SolidWorks, Revit, Tekla) into SAP S/4HANA?',
      a: 'We implement SAP Engineering Control Center (ECTR) coupled with native bi-directional connector plug-ins. Engineers work directly in their familiar CAD/BIM tools while document metadata, revision identifiers, and BOM hierarchies are automatically synchronized into SAP S/4HANA PLM in real time.'
    },
    {
      q: 'Can we configure early long-lead procurement before engineering drawings are fully finalized?',
      a: 'Yes. Our SAP PS and SCM configuration allows project engineers to issue advance material requirements (pre-engineering purchase requisitions) directly mapped to preliminary WBS elements. When detailed drawings are later approved, the EBOM synchronizer automatically claims and assigns the reserved materials without duplicating purchase orders.'
    },
    {
      q: 'How is Earned Value Management (EVM) calculated in SAP S/4HANA Project Systems?',
      a: 'Earned value is calculated dynamically by comparing the Planned Value (PV), Earned Value (EV achieved through certified milestone progress), and Actual Cost (AC based on recorded hours, subcontracts, and material issues). The system provides proactive variance triggers and predictive cost-to-complete indicators.'
    },
    {
      q: 'Does your solution support revenue recognition for milestone-based engineering contracts?',
      a: 'Absolutely. We deploy SAP S/4HANA Revenue Accounting and Reporting (RAR) integrated with Project Systems (PS). Revenue is recognized progressively based on certified performance obligations, percentage of completion, or formal milestone acceptance criteria, fully compliant with statutory accounting mandates.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Pure Enterprise Engineering Hero)
          ========================================================================= */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        
        {/* Full-bleed High Resolution Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=80" 
            alt="Engineering & Industrial Design Enterprise Workspace"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Seamless Cinematic Left Scrim */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/85 sm:via-slate-950/65 to-transparent pointer-events-none" />

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
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>

              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Intelligent ERP for <br />
                <span className="text-cyan-400">Engineering & Design</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                CAD/BIM-to-ERP Synchronization, Work Breakdown Structure Governance & EBOM/MBOM Control.
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
                Empowering engineering consultancies, heavy machinery developers, and EPC design teams with{' '}
                <strong className="text-white font-semibold">SAP S/4HANA Project Systems (PS)</strong>, automated{' '}
                <strong className="text-cyan-300 font-semibold">Engineering Control Center (ECTR)</strong>, and real-time Earned Value Management.
              </p>

              {/* Clean Feature Highlights */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>CAD & BIM Bi-Directional Sync</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Hierarchical WBS Governance</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Earned Value Project Accounting</span>
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
                  <Compass className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">PLM & CAD SYNC</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">SAP ECTR Core</div>
                <div className="text-xs text-slate-300 mt-0.5">Bi-Directional Gateway</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <FolderKanban className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">WBS CONTROL</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Hierarchical Baselines</div>
                <div className="text-xs text-slate-300 mt-0.5">Stage-Gate Milestones</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Split className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">EBOM TO MBOM</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Auto Reconciliation</div>
                <div className="text-xs text-slate-300 mt-0.5">Zero Revision Scraps</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Workflow className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">CHANGE CONTROL</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Digital ECO/ECR</div>
                <div className="text-xs text-slate-300 mt-0.5">Impact Simulations</div>
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>EXECUTIVE INDUSTRY PERSPECTIVE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Aligning Engineering Design with <span className="text-[#0070C0]">Contract Financials</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Engineering profitability is safeguarded at the interface between CAD revisions and the ERP procurement ledger. Connecting design data directly to WBS milestone commitments prevents margin erosion.&rdquo;
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Traditional engineering organizations suffer from disconnected drafting silos, untracked engineering change orders, and delayed progress billing. Knooviq transforms engineering operations into an orchestrated digital thread where every CAD model revision automatically updates bill of materials, procurement lead times, and financial stage gates.
              </p>

              {/* Information Checklist Grid (Zero Numbers/Percents) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'Automated EBOM-to-MBOM reconciliation with zero manual re-entry',
                  'Closed-loop engineering change orders with instant procurement lockouts',
                  'Live Earned Value Management synchronizing delivery with financial ledgers',
                  'As-built digital twin compilation for rapid customer contract sign-off'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-800 bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#0070C0] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Interactive Visualizer: Journey Step Console */}
            <div className="lg:col-span-6 space-y-4">
              
              <div className="rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-lg relative overflow-hidden">
                <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden mb-4">
                  <img 
                    src={journeySteps[activeJourneyStep].image} 
                    alt={journeySteps[activeJourneyStep].label} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-400 text-slate-950 font-mono text-[10px] font-bold uppercase tracking-wider">
                        {journeySteps[activeJourneyStep].tech}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                        {journeySteps[activeJourneyStep].label}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-bold text-sky-200 bg-white/10 px-2.5 py-1 rounded backdrop-blur-md">
                      STAGE WORKFLOW
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[44px]">
                  {journeySteps[activeJourneyStep].desc}
                </p>
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
                        <div className={`text-[9.5px] truncate font-mono ${isSelected ? 'text-sky-100' : 'text-slate-400'}`}>{step.sublabel}</div>
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
              <span>ENGINEERING DOMAIN BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Operational Challenges Across the Engineering Lifecycle
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Complex engineering organizations face margin degradation when CAD revisions, bills of materials, and project stage gates operate on disconnected tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industryChallenges.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl p-5 sm:p-6 bg-white border border-slate-200 shadow-xs hover:shadow-lg hover:border-slate-400 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 font-mono text-[10px] font-bold uppercase tracking-wider border border-rose-100">
                        {item.tag}
                      </span>
                      <div className="p-2 rounded-xl bg-slate-50 text-slate-700">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>STATUS IMPACT</span>
                    <span className="text-rose-600 font-semibold">{item.footer}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CIRCULAR RADIAL CHEVRON WHEEL & ARCHITECTURAL ECOSYSTEM
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#050B17] text-white relative overflow-hidden border-b border-slate-800">
        
        {/* Glow ambient background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-500/10 via-cyan-500/5 to-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-700/60 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>RADIAL PLATFORM ECOSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              KNOOVIQ Engineering & PLM Architecture Core
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Hover over any segment in the interlocking wheel to explore how design authoring, WBS accounting, and digital twin delivery operate in continuous real-time synchronization.
            </p>
          </motion.div>

          {/* 3-Column Radial Wheel & Flanking Capabilities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* Left Column (4 Capabilities) */}
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
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/15 via-cyan-500/10 to-emerald-500/15 blur-2xl rounded-full pointer-events-none" />

                <svg
                  viewBox="0 0 500 500"
                  className="w-full h-full drop-shadow-2xl overflow-visible"
                >
                  {/* 8 Interlocking Chevron Segments */}
                  {wheelSegments.map((seg, idx) => {
                    const isHovered = hoveredWheelIndex === idx;
                    const pathD = getChevronPath(idx);
                    const coords = getIconCoords(idx);
                    const IconComponent = seg.icon;

                    return (
                      <g 
                        key={seg.id}
                        className="cursor-pointer transition-all duration-300"
                        onMouseEnter={() => setHoveredWheelIndex(idx)}
                        onMouseLeave={() => setHoveredWheelIndex(null)}
                      >
                        <path
                          d={pathD}
                          fill={isHovered ? seg.color : `${seg.color}35`}
                          stroke={seg.color}
                          strokeWidth={isHovered ? 3.5 : 1.5}
                          className="transition-all duration-300"
                          style={{
                            filter: isHovered ? `drop-shadow(0 0 14px ${seg.color})` : 'none'
                          }}
                        />
                        <foreignObject
                          x={coords.x - 14}
                          y={coords.y - 14}
                          width="28"
                          height="28"
                          className="pointer-events-none"
                        >
                          <div className="w-full h-full flex items-center justify-center">
                            <IconComponent 
                              className={`w-5 h-5 transition-colors duration-200 ${
                                isHovered ? 'text-white' : 'text-slate-200'
                              }`} 
                            />
                          </div>
                        </foreignObject>
                      </g>
                    );
                  })}

                  {/* Hub Center Circle */}
                  <circle
                    cx="250"
                    cy="250"
                    r="96"
                    fill="#050B17"
                    stroke="#1E293B"
                    strokeWidth="3"
                  />
                  <circle
                    cx="250"
                    cy="250"
                    r="90"
                    fill="#0A1428"
                    stroke="#0284C7"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />

                  {/* Center Text */}
                  <text
                    x="250"
                    y="238"
                    textAnchor="middle"
                    fill="#38BDF8"
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="bold"
                    letterSpacing="2"
                  >
                    KNOOVIQ
                  </text>
                  <text
                    x="250"
                    y="258"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="14"
                    fontWeight="900"
                  >
                    ENGINEERING
                  </text>
                  <text
                    x="250"
                    y="274"
                    textAnchor="middle"
                    fill="#94A3B8"
                    fontSize="9"
                    fontFamily="monospace"
                  >
                    CLEAN CORE PLM
                  </text>
                </svg>

              </div>
            </div>

            {/* Right Column (4 Capabilities) */}
            <div className="order-3 lg:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-5">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Cpu className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>CLEAN CORE ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Enterprise Engineering Technology Blueprint
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Decoupling 3D CAD geometry authoring and supplier portals through SAP BTP while preserving an uncorrupted, standard S/4HANA Project Systems core.
            </p>
          </div>

          {/* Interactive Layer Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveArchTab('cad')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'cad'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              CAD & BIM Authoring Layer
            </button>
            <button
              onClick={() => setActiveArchTab('core')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'core'
                  ? 'bg-[#0070C0] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              SAP S/4HANA PS & PLM Clean Core
            </button>
            <button
              onClick={() => setActiveArchTab('cloud')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'cloud'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Cloud BTP Collaboration & AI
            </button>
          </div>

          {/* Active Blueprint View */}
          <div className="rounded-2xl border-2 border-slate-300 bg-slate-950 text-white p-6 sm:p-8 shadow-xl">
            {activeArchTab === 'cad' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Compass className="w-6 h-6 text-sky-400" />
                    <div>
                      <h3 className="text-lg font-bold text-white">CAD/BIM Authoring & SAP ECTR Connectors</h3>
                      <p className="text-xs text-slate-400 font-mono">Revit • Tekla • AutoCAD • SolidWorks • Catia • Teamcenter</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-mono">Bi-Directional Sync</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-sky-300 uppercase font-mono mb-1">Direct Metadata Authoring</h4>
                    <p className="text-xs text-slate-300">Engineers assign part descriptions, weights, and revision levels right inside their CAD window.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-sky-300 uppercase font-mono mb-1">Automated Viewables</h4>
                    <p className="text-xs text-slate-300">Cloud servers render neutral visual formats immediately upon drawing check-in.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-sky-300 uppercase font-mono mb-1">Version Locking</h4>
                    <p className="text-xs text-slate-300">Simultaneous check-out lockouts prevent overlapping design conflicts across branch offices.</p>
                  </div>
                </div>
              </div>
            )}

            {activeArchTab === 'core' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Server className="w-6 h-6 text-[#0070C0]" />
                    <div>
                      <h3 className="text-lg font-bold text-white">SAP S/4HANA Project Systems (PS) & Financial Ledger</h3>
                      <p className="text-xs text-slate-400 font-mono">Clean Core Standard • Revenue Accounting • EVM • Universal Journal</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono">Zero Modifications</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-cyan-300 uppercase font-mono mb-1">Multi-Tier WBS Hierarchy</h4>
                    <p className="text-xs text-slate-300">Deliverable-driven project hierarchy tracking commitments, actual labor hours, and milestone claims.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-cyan-300 uppercase font-mono mb-1">Universal Journal ACDOCA</h4>
                    <p className="text-xs text-slate-300">Single real-time financial ledger synchronizing project cost accounting directly with corporate GL.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-cyan-300 uppercase font-mono mb-1">Milestone Revenue Accounting</h4>
                    <p className="text-xs text-slate-300">Automated performance obligation clearing and progressive percentage-of-completion revenue runs.</p>
                  </div>
                </div>
              </div>
            )}

            {activeArchTab === 'cloud' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-amber-400" />
                    <div>
                      <h3 className="text-lg font-bold text-white">SAP BTP Extension Suite & Supplier Collaboration</h3>
                      <p className="text-xs text-slate-400 font-mono">BTP Event Mesh • Document Management • Supplier Revision Portal</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono">Event-Driven Mesh</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-amber-300 uppercase font-mono mb-1">External Supplier Portal</h4>
                    <p className="text-xs text-slate-300">Fabrication sub-contractors securely download certified release drawings and upload inspection sheets.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-amber-300 uppercase font-mono mb-1">Automated ECR Routing</h4>
                    <p className="text-xs text-slate-300">Event mesh routes change requests through commercial, safety, and drafting stakeholders in parallel.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-amber-300 uppercase font-mono mb-1">Engineering AI Insights</h4>
                    <p className="text-xs text-slate-300">Predictive algorithms analyze historical project BOMs to flag potential delivery bottlenecks.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: MODULAR INDUSTRY SOLUTION SUITES
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Boxes className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>MODULAR SOLUTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Knooviq Engineering Solution Suites
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Targeted capability packages designed to modernize engineering project delivery without monolithic system downtime.
            </p>
          </div>

          {/* Category Filter Chips */}
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

          {/* Grid of Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div 
                  key={sol.title}
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
                      <span className="text-[10px] font-mono font-bold text-[#0070C0] uppercase tracking-wider bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>ENTERPRISE STANDARDIZATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Legacy CAD Workflows vs Knooviq Clean Core
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              See how modernizing project engineering architectures eliminates hidden scrap, improves billable utilization, and safeguards contract margins.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white font-mono text-[11px] uppercase tracking-wider">
                  <th className="p-4 sm:p-5">Engineering Dimension</th>
                  <th className="p-4 sm:p-5 text-rose-300">Legacy / Siloed Approach</th>
                  <th className="p-4 sm:p-5 text-cyan-300">Knooviq S/4HANA Clean Core</th>
                  <th className="p-4 sm:p-5 text-emerald-300">Measurable Value Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">CAD & ERP Handshake</td>
                  <td className="p-4 sm:p-5 text-slate-600">Manual re-entry of drawing part lists into ERP spreadsheets.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">Native SAP ECTR bi-directional PLM data stream.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">Complete BOM synchronization and elimination of transcription errors.</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Engineering Change Orders</td>
                  <td className="p-4 sm:p-5 text-slate-600">Email threads and verbal requests with no financial tracking.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">BTP digital ECO/ECR workflow with automated scrap ledger.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">Elimination of unauthorized scrap and complete billable recovery.</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Project Cost Control</td>
                  <td className="p-4 sm:p-5 text-slate-600">Static monthly accounting spreadsheets with retrospective variance.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">Real-time Earned Value Management in SAP PS.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">Systemic prevention of budget overruns through live cost variance triggers.</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Long-Lead Procurement</td>
                  <td className="p-4 sm:p-5 text-slate-600">Purchase orders delayed until detailed drawing sign-off.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">Pre-engineering purchase reservations tied to WBS codes.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">Significant cycle time compression on critical equipment procurement paths.</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Client As-Built Handover</td>
                  <td className="p-4 sm:p-5 text-slate-600">Manual compilation of paper binders and redline drawings.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">Digital twin export with verified asset tag hierarchies.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">Accelerated final retention cash collection and rapid defect liability clearance.</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: TRANSFORMATION ROADMAP & DELTA INSPECTOR
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#050B17] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
              <RefreshCw className="w-3.5 h-3.5 text-sky-300" />
              <span>TRANSFORMATION ROADMAP & DELTA INSPECTOR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Phased Roadmap to Autonomous Engineering Operations
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Inspect how legacy drawing silos transform into an intelligent real-time engineering fabric across every stage of the SAP deployment.
            </p>
          </div>

          {/* 4 Interactive Transformation Cards */}
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

          {/* Interactive Live Transformation Console / Delta Inspector */}
          {(() => {
            const currentStage = transformationStages[activeTransformStage];
            return (
              <div className="rounded-2xl bg-slate-900/90 border-2 border-slate-700/80 p-5 sm:p-6 shadow-2xl backdrop-blur-md relative overflow-hidden">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${currentStage.textColor}`}>
                      {currentStage.badge} ARCHITECTURAL DELTA
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5">
                      {currentStage.title} &mdash; {currentStage.subtitle}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-mono">
                    Target: {currentStage.tag}
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
          SECTION 9: STRATEGIC ENTERPRISE VALUE DRIVERS & OPERATIONAL SAFEGUARDS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>ENTERPRISE VALUE DRIVERS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Strategic Safeguards for Modern Engineering Enterprises
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Architectural advantages realized by engineering consultancies and heavy equipment manufacturers running on SAP Clean Core.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#0070C0] transition-colors">
              <div className="space-y-2.5">
                <div className="p-2.5 rounded-xl bg-sky-50 text-[#0070C0] inline-block">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-slate-950">Budget Overrun Prevention</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real-time Earned Value Management synchronizes physical drawing milestones directly with cost baselines, triggering proactive alerts before budget drift occurs.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 mt-4 text-[11px] font-mono text-[#0070C0] font-bold uppercase">
                FINANCIAL INTEGRITY
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#0070C0] transition-colors">
              <div className="space-y-2.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 inline-block">
                  <Workflow className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-slate-950">Streamlined Change Cycles</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Closed-loop digital change orders evaluate fabrication scrap, supplier tooling impact, and procurement lead times prior to release approval.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 mt-4 text-[11px] font-mono text-emerald-600 font-bold uppercase">
                GOVERNANCE AGILITY
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#0070C0] transition-colors">
              <div className="space-y-2.5">
                <div className="p-2.5 rounded-xl bg-sky-50 text-[#0070C0] inline-block">
                  <Split className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-slate-950">Universal BOM Alignment</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Automated bi-directional synchronization harmonizes design CAD structures with shop-floor manufacturing routings, eliminating manual transcription errors.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 mt-4 text-[11px] font-mono text-[#0070C0] font-bold uppercase">
                DIGITAL THREAD
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#0070C0] transition-colors">
              <div className="space-y-2.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 inline-block">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-slate-950">Rapid Contract Closeouts</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Structured digital twin data packages transfer verified asset hierarchies and inspection records directly to client maintenance teams for rapid final settlement.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 mt-4 text-[11px] font-mono text-emerald-600 font-bold uppercase">
                CASHFLOW RECOVERY
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10: FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
              <HelpCircle className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Engineering Architecture Advisory
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Key technical and commercial questions for engineering teams transitioning to SAP S/4HANA Project Systems.
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
          SECTION 11: FINAL EXECUTIVE CTA
          ========================================================================= */}
      <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-r from-[#003B73] via-[#005B9E] to-[#0070C0] text-white">
        
        {/* Abstract 3D Mesh Visual Background */}
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
            <Compass className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR ENGINEERING ENTERPRISE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build a High-Precision Engineering Practice?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Synchronize your CAD designs, Work Breakdown Structures, and contract financials with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact('Engineering & PLM Architecture Advisory')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to Our Engineering Experts</span>
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
              <span>Continuous Global SLA Support</span>
            </span>
          </div>

        </div>

      </section>

    </div>
  );
};

export default EngineeringIndustryPage;
