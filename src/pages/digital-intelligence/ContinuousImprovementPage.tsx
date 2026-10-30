import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Workflow,
  Database,
  Cpu,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Lock,
  Boxes,
  FileCheck,
  Server,
  Zap,
  BarChart3,
  FileText,
  AlertTriangle,
  RefreshCw,
  Search,
  ChevronRight,
  Shield,
  Scale,
  Eye,
  Sliders,
  Clock,
  Globe2,
  Users,
  Activity,
  Compass,
  TrendingUp,
  Brain,
  Play,
  Pause,
  Radio,
  Share2,
  GitBranch,
  Gauge,
  Factory,
  CheckCircle,
  TrendingDown,
  Target,
  Award,
  Sparkles
} from 'lucide-react';

interface ContinuousImprovementPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const ContinuousImprovementPage: React.FC<ContinuousImprovementPageProps> = ({
  onOpenContact
}) => {
  // Update document title for SEO
  useEffect(() => {
    document.title = 'Continuous Process Improvement & Operational Excellence | Digital Intelligence | KNOOVIQ';
  }, []);

  // State for Section 2 Interactive Journey
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

  // State for Section 4 Circular Radial Chevron Wheel
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Section 4: Continuous Automatic Rotation (Aligned with AI Agents)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setHoveredWheelIndex((prev) => (prev === null ? 0 : (prev + 1) % 8));
    }, 3200);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // State for Section 6 Modular Solutions Filter
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');

  // State for Section 8 Diagnostic Chamber
  const [activeProcessTab, setActiveProcessTab] = useState<'o2c' | 'p2p' | 'r2r'>('o2c');

  // Section 4: Circular Radial Wheel (Continuous Improvement Flywheel - Strictly Zero Numbers/Stats)
  const wheelSegments = [
    {
      id: 'assess',
      shortTag: 'ASSESS',
      title: 'Empirical Process Friction Baseline',
      desc: 'Continually discover hidden operational deviations, execution latency hotspots, and compliance bypasses across transactional systems without manual polling.',
      badge: 'CONTINUOUS DISCOVERY',
      metric: 'Unbiased Reality Capture',
      side: 'right',
      color: '#00A3E0',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(0, 163, 224, 0.35)',
      icon: Search
    },
    {
      id: 'measure',
      shortTag: 'MEASURE',
      title: 'Real-Time Operational Telemetry',
      desc: 'Track process throughput velocity, straight-through execution ratios, and rework frequency dynamically against target operational benchmarks.',
      badge: 'PRECISION TELEMETRY',
      metric: 'Live Velocity Mapping',
      side: 'right',
      color: '#0070C0',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(0, 112, 192, 0.35)',
      icon: Gauge
    },
    {
      id: 'analyze',
      shortTag: 'ANALYZE',
      title: 'Algorithmic Root-Cause Attribution',
      desc: 'Dissect the root causes of procedural friction, identifying whether bottlenecks stem from master data defects, organizational handoffs, or policy conflicts.',
      badge: 'ROOT-CAUSE DIAGNOSTICS',
      metric: 'Systemic Waste Attribution',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.35)',
      icon: Brain
    },
    {
      id: 'target',
      shortTag: 'TARGET',
      title: 'Value-Prioritized Kaizen Scoping',
      desc: 'Rigorously rank and prioritize process re-engineering opportunities by operational impact, working capital recovery, and strategic compliance necessity.',
      badge: 'STRATEGIC PRIORITIZATION',
      metric: 'Maximized Return on Effort',
      side: 'right',
      color: '#6366F1',
      textColor: 'text-indigo-400',
      bgGlow: 'rgba(99, 102, 241, 0.35)',
      icon: Target
    },
    {
      id: 'execute',
      shortTag: 'EXECUTE',
      title: 'Agile Workflow Re-Engineering',
      desc: 'Deploy straight-through routing rules, automated business exception handlers, and ERP parameter recalibrations through structured agile execution sprints.',
      badge: 'SPRINT EXECUTION',
      metric: 'Frictionless Action Delivery',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.35)',
      icon: Zap
    },
    {
      id: 'standardize',
      shortTag: 'STANDARDIZE',
      title: 'Golden Standard Institutionalization',
      desc: 'Lock optimized execution pathways into enterprise Standard Operating Procedures (SOPs), SAP master configurations, and clean core governance frameworks.',
      badge: 'SOP CODIFICATION',
      metric: 'Permanent Standard Lock',
      side: 'left',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.35)',
      icon: FileCheck
    },
    {
      id: 'govern',
      shortTag: 'GOVERN',
      title: 'Continuous Performance Sentinel',
      desc: 'Active autonomous monitoring detects procedural drift, emerging variance, and legacy workaround relapses the moment they manifest.',
      badge: 'DRIFT PREVENTER',
      metric: 'Zero-Deviation Conformance',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: ShieldCheck
    },
    {
      id: 'scale',
      shortTag: 'SCALE',
      title: 'Multi-Entity Value Compounding',
      desc: 'Systematically replicate proven optimization blueprints across global operating units, sister manufacturing plants, and regional shared services hubs.',
      badge: 'ENTERPRISE MULTIPLIER',
      metric: 'Compounding Global Value',
      side: 'left',
      color: '#3B82F6',
      textColor: 'text-blue-400',
      bgGlow: 'rgba(59, 130, 246, 0.35)',
      icon: RefreshCw
    }
  ];

  // Helper calculation for interlocking circular chevron path
  const getChevronPath = (index: number) => {
    const totalSegments = 8;
    const startAngle = (index * 360) / totalSegments - 90;
    const endAngle = ((index + 1) * 360) / totalSegments - 90;
    const innerRadius = 145;
    const outerRadius = 235;
    const chevronDepth = 14;

    const toRad = (deg: number) => (deg * Math.PI) / 180;

    const p1 = {
      x: 250 + innerRadius * Math.cos(toRad(startAngle)),
      y: 250 + innerRadius * Math.sin(toRad(startAngle))
    };
    const p2 = {
      x: 250 + (innerRadius + chevronDepth) * Math.cos(toRad(startAngle + 360 / totalSegments / 2)),
      y: 250 + (innerRadius + chevronDepth) * Math.sin(toRad(startAngle + 360 / totalSegments / 2))
    };
    const p3 = {
      x: 250 + innerRadius * Math.cos(toRad(endAngle)),
      y: 250 + innerRadius * Math.sin(toRad(endAngle))
    };
    const p4 = {
      x: 250 + outerRadius * Math.cos(toRad(endAngle)),
      y: 250 + outerRadius * Math.sin(toRad(endAngle))
    };
    const p5 = {
      x: 250 + (outerRadius + chevronDepth) * Math.cos(toRad(startAngle + 360 / totalSegments / 2)),
      y: 250 + (outerRadius + chevronDepth) * Math.sin(toRad(startAngle + 360 / totalSegments / 2))
    };
    const p6 = {
      x: 250 + outerRadius * Math.cos(toRad(startAngle)),
      y: 250 + outerRadius * Math.sin(toRad(startAngle))
    };

    return `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} L ${p3.x} ${p3.y} L ${p4.x} ${p4.y} L ${p5.x} ${p5.y} L ${p6.x} ${p6.y} Z`;
  };

  // Section 2: Executive Journey Steps (Qualitative)
  const journeySteps = [
    {
      id: 'step-1',
      label: '01 Friction Diagnostics',
      sublabel: 'Empirical Baseline Identification',
      desc: 'Pinpoint precise master data locks, approval loops, and manual handoffs slowing operational velocity across core transactional systems.',
      tech: 'Process Graph Mining • Root-Cause Attribution • Latency Breakdown',
      icon: Search
    },
    {
      id: 'step-2',
      label: '02 Kaizen Prioritization',
      sublabel: 'Value Impact & Effort Scoping',
      desc: 'Score improvement workstreams based on strategic yield, working capital liberation, and cycle time acceleration potential.',
      tech: 'Value Realization Matrix • Friction Impact Scoring • Effort Mapping',
      icon: Target
    },
    {
      id: 'step-3',
      label: '03 Cross-Functional Sprints',
      sublabel: 'Collaborative Re-Engineering',
      desc: 'Unite operational leaders, process owners, and SAP architects in rapid sprints to eliminate structural waste and automate manual handoffs.',
      tech: 'Agile DMAIC Sprints • Clean Core Re-Engineering • Exception Elimination',
      icon: Users
    },
    {
      id: 'step-4',
      label: '04 Standard Institutionalization',
      sublabel: 'SOP Codification & System Locking',
      desc: 'Embed newly engineered standard pathways directly into enterprise ERP configurations, eliminating tribal knowledge dependencies.',
      tech: 'Systemic SOP Governance • S/4HANA Workflow Locking • Quality Control',
      icon: FileCheck
    },
    {
      id: 'step-5',
      label: '05 Closed-Loop Telemetry',
      sublabel: 'Continuous Drift Prevention',
      desc: 'Live telemetry continuously monitors execution conformity, alerting leaders to rogue workarounds before friction escalates.',
      tech: 'Execution Sentinels • Real-Time Variance Alerts • Audit Trails',
      icon: Activity
    },
    {
      id: 'step-6',
      label: '06 Compounding Scale',
      sublabel: 'Global Multi-Entity Rollout',
      desc: 'Package verified operational improvements into enterprise blueprints for rapid deployment across international business units.',
      tech: 'Global Process Templating • Best-Practice Replication • Continuous Kaizen',
      icon: RefreshCw
    }
  ];

  // Section 3: Strategic Continuous Improvement Challenges (6 Cards, Strictly Zero Numbers/Stats)
  const improvementChallenges = [
    {
      id: 'fatigue',
      title: 'Initiative Fatigue & Abandoned Kaizens',
      tag: 'CULTURE & VELOCITY',
      icon: AlertTriangle,
      color: 'from-amber-500/10 to-transparent border-amber-300',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      desc: 'Organizations initiate numerous operational improvement campaigns that lose executive momentum once manual consultants depart, leaving processes unchanged.',
      impact: 'Stagnant Transformation Momentum',
      solution: 'Automated, data-driven Kaizen opportunity pipelines anchored to live ERP event telemetry.'
    },
    {
      id: 'silos',
      title: 'Disconnected Departmental Silos',
      tag: 'ORGANIZATIONAL FRICTION',
      icon: Boxes,
      color: 'from-blue-500/10 to-transparent border-blue-300',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
      desc: 'Local departmental optimizations frequently sub-optimize end-to-end enterprise value streams, shifting processing burdens onto adjacent teams.',
      impact: 'Localized Fixes Causing Systemic Blockages',
      solution: 'Cross-functional value stream visibility linking procurement, finance, operations, and logistics.'
    },
    {
      id: 'phantom',
      title: 'Phantom Value & Unverified Gains',
      tag: 'VALUE ATTRITION',
      icon: TrendingDown,
      color: 'from-rose-500/10 to-transparent border-rose-300',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
      desc: 'Continuous improvement projects frequently claim speculative cost savings that never materialize on corporate balance sheets or working capital ledgers.',
      impact: 'Unsubstantiated Executive ROI',
      solution: 'Continuous closed-loop financial reconciliation tying operational velocity directly to enterprise ledger gains.'
    },
    {
      id: 'relapse',
      title: 'Reversion to Legacy Workarounds',
      tag: 'PROCESS REGRESSION',
      icon: RefreshCw,
      color: 'from-purple-500/10 to-transparent border-purple-300',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
      desc: 'Without continuous enforcement mechanisms, frontline staff gradually regress to familiar spreadsheet workarounds and off-system approvals.',
      impact: 'Erosion of Standard Operating Procedures',
      solution: 'Real-time conformance sentinels that flag unauthorized process variants the instant they occur.'
    },
    {
      id: 'handoffs',
      title: 'Blind Spots in Cross-System Handoffs',
      tag: 'ECOSYSTEM LATENCY',
      icon: Layers,
      color: 'from-cyan-500/10 to-transparent border-cyan-300',
      badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-300',
      desc: 'Value streams crossing from CRM to SAP ERP and 3PL portals suffer severe visibility blackouts where work items linger unaddressed.',
      impact: 'Extended Cycle Time Latency',
      solution: 'End-to-end multi-platform event tracking orchestrating cross-system transactional flows.'
    },
    {
      id: 'telemetry',
      title: 'Lack of Longitudinal Telemetry',
      tag: 'GOVERNANCE BLINDSPOT',
      icon: Activity,
      color: 'from-indigo-500/10 to-transparent border-indigo-300',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
      desc: 'Leadership relies on quarterly retrospective reports rather than continuous live pulse monitoring, discovering performance decays long after impact.',
      impact: 'Late-Stage Crisis Management',
      solution: 'Autonomous continuous improvement command consoles providing uninterrupted operational visibility.'
    }
  ];

  // Section 6: Modular Solutions Matrix (Clean Cards - NO Image Headers)
  const modularSolutions = [
    {
      category: 'KAIZEN',
      categoryLabel: 'Opportunity Discovery',
      icon: Sparkles,
      tag: 'KAIZEN-PIPELINE',
      title: 'Autonomous Kaizen Opportunity Pipeline',
      description: 'Continuously mines transactional data to automatically identify, quantify, and surface high-impact Kaizen initiatives directly to process champions.',
      highlights: ['Automated Waste Detection', 'Value Potential Scoring', 'Champion Assignment Engine']
    },
    {
      category: 'DMAIC',
      categoryLabel: 'Governance Engine',
      icon: Compass,
      tag: 'DMAIC-SENTINEL',
      title: 'Closed-Loop DMAIC Governance Engine',
      description: 'Structured framework that guides cross-functional teams through Define, Measure, Analyze, Improve, and Control stages with objective data verification.',
      highlights: ['Stage-Gate Conformance Checks', 'Live Evidence Validation', 'Milestone Tracking']
    },
    {
      category: 'SOP',
      categoryLabel: 'Standard Operating Procedures',
      icon: FileCheck,
      tag: 'SOP-GUARDIAN',
      title: 'Standard Operating Procedure (SOP) Guardian',
      description: 'Translates empirical best practices into codified SOPs and embeds execution guards directly into SAP S/4HANA transactional screens.',
      highlights: ['Dynamic SOP Generation', 'In-App User Guidance', 'Clean Core Conformance']
    },
    {
      category: 'BENCHMARK',
      categoryLabel: 'Enterprise Benchmarking',
      icon: Gauge,
      tag: 'BENCHMARK-HUB',
      title: 'Cross-Plant Process Benchmarking Hub',
      description: 'Compares execution velocity, rework rates, and straight-through processing rates across disparate plants and business units to spread best practices.',
      highlights: ['Cross-Entity Variant Comparison', 'Best-Practice Blueprinting', 'Peer Cohort Ranking']
    },
    {
      category: 'VALUE',
      categoryLabel: 'Value Realization',
      icon: Target,
      tag: 'VALUE-TRACKER',
      title: 'Enterprise Value Tracking & Benefit Realization',
      description: 'Connects operational cycle time reductions and friction elimination directly to balance sheet liquidity and working capital optimization.',
      highlights: ['Balance Sheet Impact Linkage', 'Cash Flow Acceleration', 'Realized Savings Audit']
    },
    {
      category: 'CULTURE',
      categoryLabel: 'Excellence Culture',
      icon: Award,
      tag: 'CULTURE-ENGINE',
      title: 'Change Velocity & Excellence Adoption Suite',
      description: 'Fosters an institutional culture of continuous improvement through gamified team challenges, recognized badges, and transparent sprint velocity.',
      highlights: ['Team Excellence Badges', 'Transparent Sprint Velocity', 'Sustained Adoption Momentum']
    }
  ];

  const categories = [
    { key: 'ALL', label: 'All Disciplines' },
    { key: 'KAIZEN', label: 'Opportunity Pipeline' },
    { key: 'DMAIC', label: 'DMAIC Governance' },
    { key: 'SOP', label: 'SOP Guardian' },
    { key: 'BENCHMARK', label: 'Benchmarking' },
    { key: 'VALUE', label: 'Value Tracking' },
    { key: 'CULTURE', label: 'Excellence Culture' }
  ];

  // Section 8: Diagnostic Chamber Audit Data (Qualitative Insights, Zero Numbers/Stats)
  const diagnosticProcesses = {
    o2c: {
      id: 'o2c',
      tabLabel: 'Order-to-Cash (O2C)',
      title: 'Continuous Flow Optimization & Friction Elimination',
      processInfo: 'Global Enterprise Sales Orders • Continuous DMAIC Lifecycle',
      conformanceLevel: 'CONTINUOUS KAIZEN ACTIVE • DRIFT PROTECTED',
      riskBadgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-emerald-500/10',
      recommendation: 'Institutionalize automated price agreement verification at order intake and implement straight-through credit release for compliant tiers.',
      findings: [
        {
          level: 'KAIZEN INSTITUTIONALIZED',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Automated Pricing Condition Validation',
          desc: 'Pricing discrepancies are resolved automatically via live master agreement matching, eliminating customer service order holds.',
          source: 'Rule: Master Pricing Verification Engine • S/4HANA Core'
        },
        {
          level: 'SOP GOVERNED',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Direct-to-Warehouse Automated Release',
          desc: 'Standard orders bypass manual credit approvals when customer account status is verified, enabling instantaneous fulfillment queuing.',
          source: 'System: Dynamic Credit Risk Release Sentinel'
        },
        {
          level: 'DRIFT PREVENTED',
          levelColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          borderColor: 'border-sky-500/40 hover:border-sky-400',
          title: 'Touchless Delivery Creation Protocol',
          desc: 'Automated scheduling algorithms trigger immediate shipping documentation generation upon plant inventory availability confirmation.',
          source: 'Execution: Automated Delivery Orchestrator'
        }
      ]
    },
    p2p: {
      id: 'p2p',
      tabLabel: 'Procure-to-Pay (P2P)',
      title: 'Touchless Purchasing & Working Capital Excellence',
      processInfo: 'Enterprise Requisition to Invoice • Systematic Kaizen Cadence',
      conformanceLevel: 'BENCHMARK STANDARD ACHIEVED • SUSTAINED FLOW',
      riskBadgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-cyan-500/10',
      recommendation: 'Eliminate retroactive purchase orders through automated catalog routing and enforce three-way line matching automation.',
      findings: [
        {
          level: 'ELIMINATED DEFECT',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Pre-Approved Contract Catalog Routing',
          desc: 'Maverick off-contract requisitions are automatically redirected into negotiated master vendor catalogs before PO transmission.',
          source: 'Governance: Pre-PO Contract Routing Sentinel'
        },
        {
          level: 'AUTOMATED HARMONY',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Touchless Three-Way Line Reconciliation',
          desc: 'Invoices matching purchase order parameters and goods receipt telemetry post straight through to AP ledgers without manual touch.',
          source: 'Integration: Accounts Payable Automated Clearing'
        },
        {
          level: 'DISCOUNT CAPTURED',
          levelColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          borderColor: 'border-sky-500/40 hover:border-sky-400',
          title: 'Early Settlement Discount Optimization',
          desc: 'High-value supplier invoices are prioritized for payment release within vendor early-settlement discount schedules.',
          source: 'Telemetry: Dynamic Cash Working Capital Manager'
        }
      ]
    },
    r2r: {
      id: 'r2r',
      tabLabel: 'Record-to-Report (R2R)',
      title: 'Continuous Accounting & Period-End Close Excellence',
      processInfo: 'Multi-Ledger Financial Close • Closed-Loop Accounting Governance',
      conformanceLevel: 'CONTINUOUS CLOSE READY • ZERO VARIANCES',
      riskBadgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-emerald-500/10',
      recommendation: 'Transition from episodic month-end reconciliations to daily automated balance balancing across subsidiary general ledgers.',
      findings: [
        {
          level: 'DAILY RECONCILIATION',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Real-Time Intercompany Reconciliation',
          desc: 'Intercompany transactional balances harmonize continuously on a daily basis, eradicating period-end consolidation panics.',
          source: 'Engine: Continuous Intercompany Matching Platform'
        },
        {
          level: 'AUTOMATED ACCRUAL',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Systematic Journal Entry Accruals',
          desc: 'Recurring period-end journal accruals compute and post autonomously with complete verifiable audit documentation attached.',
          source: 'Module: General Ledger Automated Accruals'
        },
        {
          level: 'AUDIT ASSURANCE',
          levelColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          borderColor: 'border-sky-500/40 hover:border-sky-400',
          title: 'Fixed Asset Capitalization Assurance',
          desc: 'Completed capital project work-in-progress settles into primary asset classes immediately upon commissioning sign-off.',
          source: 'Standard: Asset Accounting Automated Settlement'
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">

      {/* =========================================================================
          SECTION 1: HERO SECTION (Panoramic Full-Bleed Showcase)
          ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/continuous_improvement_kaizen_pdca_hero.jpg"
            alt="Enterprise Continuous Improvement & Sustainable Operational Excellence"
            className="w-full h-full object-cover object-top select-none contrast-[1.02]"
          />
        </div>

        {/* Lighter Directional Scrim for Maximum Visual Clarity & Text Contrast */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-3xl space-y-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-md">
                <Workflow className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ DIGITAL INTELLIGENCE &bull; CONTINUOUS IMPROVEMENT</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                Enterprise Continuous Improvement &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-400">
                  Sustainable Operational Excellence
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal max-w-2xl pt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Establish an institutionalized operating rhythm that transforms real-time process intelligence into systematic Kaizen initiatives, closed-loop DMAIC execution, and compounding business value.
              </p>
            </motion.div>

            {/* Enterprise Assurance Indicators (Qualitative Focus - No Buttons) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="pt-3 flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Closed-Loop DMAIC Governance</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Institutional Kaizen Acceleration</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200">
                <RefreshCw className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Compounding Value Realization</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE PERSPECTIVE (Image 2)
          ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>EXECUTIVE IMPROVEMENT RADAR</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Evolving from Episodic Audits to <span className="text-[#0070C0]">Continuous Institutional Kaizen</span>
              </h2>
              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                  Traditional process improvement fails because it operates as a disconnected project. KNOOVIQ institutionalizes improvement into the daily fabric of enterprise execution.
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                By fusing live process intelligence telemetry with structured DMAIC operating mechanisms, global enterprises eliminate recurring friction, enforce standard operating procedures, and safeguard compounding business value.
              </p>

              {/* Interactive Journey Steps Selector */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  The Continuous Improvement Lifecycle
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {journeySteps.map((step, idx) => {
                    const StepIcon = step.icon;
                    const isActive = activeJourneyStep === idx;
                    return (
                      <button
                        key={step.id}
                        type="button"
                        onClick={() => setActiveJourneyStep(idx)}
                        className={`p-2.5 rounded-lg border text-left transition-all flex flex-col gap-1 ${isActive
                          ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                          : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                          }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <StepIcon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#0070C0]'}`} />
                          <span className="text-xs font-bold font-mono truncate">{step.label}</span>
                        </div>
                        <span className={`text-[10px] truncate ${isActive ? 'text-sky-100' : 'text-slate-500'}`}>
                          {step.sublabel}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Step Detail Card */}
                <div className="p-3.5 rounded-xl bg-slate-900 text-white space-y-1.5 border border-slate-800 shadow-md">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-cyan-400 font-bold uppercase tracking-wider">
                      {journeySteps[activeJourneyStep].label} &bull; {journeySteps[activeJourneyStep].sublabel}
                    </span>
                    <span className="text-slate-400">Institutional Stage</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-normal">
                    {journeySteps[activeJourneyStep].desc}
                  </p>
                  <div className="pt-1 text-[11px] font-mono text-cyan-300/90 border-t border-slate-800 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>{journeySteps[activeJourneyStep].tech}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Improvement Console (Image 2) */}
            <div className="lg:col-span-6">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-300 bg-slate-950 group cursor-pointer"
                onClick={() => setActiveJourneyStep((activeJourneyStep + 1) % journeySteps.length)}
                title="Click image to advance to next architecture step"
              >
                <img
                  src="/images/continuous_improvement_iso_compliance.png"
                  alt="Evolving from Episodic Audits to Continuous Institutional Kaizen"
                  className="w-full h-96 sm:h-[440px] lg:h-[490px] object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-white space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                      Kaizen Program Cockpit
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/30">
                      LIVE GOVERNANCE SENTINEL
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-normal">
                    Enterprise improvement initiatives monitored longitudinally across end-to-end global supply chain, procurement, and financial workstreams.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: STRATEGIC ENTERPRISE CHALLENGES (Zero Numbers/Stats)
          ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-white border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-300 text-xs font-mono font-bold uppercase tracking-wider text-rose-700">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              <span>THE CONTINUOUS IMPROVEMENT GAP</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Why Traditional Operational Excellence <span className="text-[#0070C0]">Fails to Stick</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Without automated process intelligence and continuous system-level governance, well-intentioned Kaizen programs collapse under administrative inertia and subjective guesswork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {improvementChallenges.map((challenge) => {
              const IconComp = challenge.icon;
              return (
                <div
                  key={challenge.id}
                  className={`p-5 rounded-xl border bg-gradient-to-br ${challenge.color} hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider border ${challenge.badgeColor}`}>
                        {challenge.tag}
                      </span>
                      <IconComp className="w-5 h-5 text-slate-700" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {challenge.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {challenge.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/80 space-y-2">
                    <div className="text-[11px] font-mono text-rose-600 font-bold flex items-center gap-1.5">
                      <TrendingDown className="w-3.5 h-3.5 shrink-0" />
                      <span>Consequence: {challenge.impact}</span>
                    </div>
                    <div className="text-[11px] font-mono text-[#0070C0] font-bold flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                      <span>Remedy: {challenge.solution}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CIRCULAR RADIAL CHEVRON WHEEL (Continuous Improvement Flywheel - Zero Numbers/Stats)
          ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-950/30 via-slate-950 to-slate-950 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              <RefreshCw className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>THE CONTINUOUS IMPROVEMENT FLYWHEEL</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              An Institutional Operating Rhythm for <span className="text-cyan-400">Perpetual Value</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              An 8-stage closed-loop operational discipline that links real-time process diagnostics directly to sustained value compounding and clean core governance.
            </p>

            {/* Live Synchronized Status Badge */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>ACTIVE KAIZEN STAGE: {wheelSegments[hoveredWheelIndex ?? 0].badge}</span>
              </div>
            </div>
          </div>

          {/* Interactive Wheel Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* SVG Interactive Wheel (Col 7) */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] lg:w-[480px] lg:h-[480px]">
                <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-[0_0_30px_rgba(0,112,192,0.25)]">
                  <defs>
                    <filter id="ci-glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="8" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Connecting Track Circles */}
                  <circle cx="250" cy="250" r="145" fill="none" stroke="#1E293B" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="250" cy="250" r="235" fill="none" stroke="#1E293B" strokeWidth="2" strokeDasharray="4 4" />

                  {/* 8 Circular Chevron Segments */}
                  {wheelSegments.map((segment, index) => {
                    const isHovered = hoveredWheelIndex === index;
                    const pathData = getChevronPath(index);
                    const angle = (index * 360) / 8 + 360 / 16 - 90;
                    const textRad = (angle * Math.PI) / 180;
                    const textX = 250 + 190 * Math.cos(textRad);
                    const textY = 250 + 190 * Math.sin(textRad);

                    return (
                      <g
                        key={segment.id}
                        className="cursor-pointer transition-all duration-300"
                        onMouseEnter={() => setHoveredWheelIndex(index)}
                        onClick={() => setHoveredWheelIndex(index)}
                      >
                        <path
                          d={pathData}
                          fill={isHovered ? segment.color : '#0F172A'}
                          stroke={isHovered ? '#FFFFFF' : '#334155'}
                          strokeWidth={isHovered ? 2.5 : 1.2}
                          className="transition-colors duration-300"
                          style={{
                            filter: isHovered ? 'url(#ci-glow)' : 'none'
                          }}
                        />
                        <text
                          x={textX}
                          y={textY}
                          fill={isHovered ? '#FFFFFF' : '#94A3B8'}
                          fontSize="10"
                          fontWeight="bold"
                          fontFamily="monospace"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          transform={`rotate(${angle + 90}, ${textX}, ${textY})`}
                          className="pointer-events-none transition-colors duration-300"
                        >
                          {segment.shortTag}
                        </text>
                      </g>
                    );
                  })}

                  {/* Center Interactive Hub */}
                  <circle cx="250" cy="250" r="115" fill="#020617" stroke="#334155" strokeWidth="2" />
                  <circle cx="250" cy="250" r="105" fill="#0B132B" stroke="#0070C0" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>

                {/* Center Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[190px] h-[190px] sm:w-[210px] sm:h-[210px] rounded-full flex flex-col items-center justify-center text-center p-3 space-y-1">
                    <div className="w-9 h-9 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center">
                      {hoveredWheelIndex !== null ? (
                        React.createElement(wheelSegments[hoveredWheelIndex].icon, {
                          className: `w-4 h-4 ${wheelSegments[hoveredWheelIndex].textColor}`
                        })
                      ) : (
                        <RefreshCw className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
                      )}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                      {hoveredWheelIndex !== null ? wheelSegments[hoveredWheelIndex].badge : 'KAIZEN ENGINE'}
                    </span>
                    <h4 className="text-xs sm:text-sm font-black text-white leading-tight">
                      {hoveredWheelIndex !== null ? wheelSegments[hoveredWheelIndex].title : 'Operational Excellence'}
                    </h4>
                    <span className="text-[9.5px] font-mono text-slate-400">
                      {hoveredWheelIndex !== null ? wheelSegments[hoveredWheelIndex].metric : 'Continuous Loop'}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Selected Segment Details Pane (Col 5) */}
            <div className="lg:col-span-5 space-y-4">
              {hoveredWheelIndex !== null ? (
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4 relative overflow-hidden">
                  <div
                    className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-3xl opacity-30 pointer-events-none"
                    style={{ backgroundColor: wheelSegments[hoveredWheelIndex].color }}
                  />

                  <div className="flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider border`}
                      style={{
                        backgroundColor: `${wheelSegments[hoveredWheelIndex].color}20`,
                        color: wheelSegments[hoveredWheelIndex].color,
                        borderColor: `${wheelSegments[hoveredWheelIndex].color}50`
                      }}
                    >
                      {wheelSegments[hoveredWheelIndex].badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Stage 0{hoveredWheelIndex + 1} of 08</span>
                  </div>

                  <h3 className="text-xl font-black text-white tracking-tight">
                    {wheelSegments[hoveredWheelIndex].title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {wheelSegments[hoveredWheelIndex].desc}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      Strategic Continuous Focus
                    </div>
                    <div className="text-xs font-mono font-bold text-cyan-300 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{wheelSegments[hoveredWheelIndex].metric}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Institutional Framework: DMAIC / Kaizen</span>
                    <span className="text-cyan-400">Enterprise Standard</span>
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-400/30 mx-auto flex items-center justify-center">
                    <RefreshCw className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Select Any Segment</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Interact with the circular radial flywheel above to inspect each phase of KNOOVIQ&rsquo;s closed-loop enterprise continuous improvement framework.
                  </p>
                  <div className="pt-2 text-xs font-mono text-cyan-300">
                    &larr; Hover over any chevron segment
                  </div>
                </div>
              )}

              {/* Bottom Quick Bar */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Operating Standard</div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Closed-Loop DMAIC</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Process Velocity</div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Sustainable Flow Acceleration</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: ENTERPRISE ARCHITECTURE FRAMEWORK (Image 3)
          ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Layers className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>CONTINUOUS EXCELLENCE BLUEPRINT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Enterprise Continuous Improvement <span className="text-[#0070C0]">Architecture</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              A four-tier operational architecture that ingests transactional telemetry, formulates algorithmic Kaizen recommendations, and orchestrates verified continuous improvement across ERP ecosystems.
            </p>
          </div>

          {/* Architecture Showcase Visual (Image 3) */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 relative group">
            <img
              src="/images/continuous_improvement_mesh.jpg"
              alt="Continuous Process Improvement Architectural Blueprint"
              className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover object-center transform group-hover:scale-[1.01] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  Closed-Loop Kaizen Execution Mesh
                </span>
                <p className="text-xs text-slate-300 max-w-2xl font-normal">
                  Fusing enterprise process mining telemetry with intelligent task orchestrators and automated SOP guardians to continuously eradicate waste.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="px-3 py-1 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold border border-cyan-500/30">
                  CLEAN CORE COMPLIANT
                </span>
              </div>
            </div>
          </div>

          {/* 4 Architectural Layers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-4">

            <div className="p-5 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all space-y-3">
              <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0070C0]">
                <Database className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Layer 01</div>
              <h3 className="text-sm font-bold text-slate-900">Live Telemetry Ingestion</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Continuous log streaming from SAP S/4HANA, Salesforce, Coupa, and legacy MES captures atomic execution timestamps and handoff latency.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all space-y-3">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                <Brain className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Layer 02</div>
              <h3 className="text-sm font-bold text-slate-900">Algorithmic Kaizen Scoping</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Algorithmic diagnostic models classify friction into structural waste, master data anomalies, or approval loops, auto-formulating Kaizen opportunities.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all space-y-3">
              <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Layer 03</div>
              <h3 className="text-sm font-bold text-slate-900">Sprint Execution Hub</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Agile cross-functional task boards orchestrate solution implementation, automated straight-through rule deployments, and ERP parameter recalibration.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all space-y-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Layer 04</div>
              <h3 className="text-sm font-bold text-slate-900">Value Sentinel &amp; SOP Lock</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Continuous audit guards verify that improvements stick, institutionalizing updated procedures into ERP clean core extensions and preventing regression.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: MODULAR SOLUTIONS MATRIX (Clean Cards - NO Image Headers)
          ========================================================================= */}
      <section id="continuous-improvement-solutions" className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Boxes className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>CONTINUOUS EXCELLENCE MODULES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Enterprise Continuous Improvement <span className="text-[#0070C0]">Solution Suite</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Modular, interoperable frameworks designed to institutionalize Kaizen methodologies, empower frontline process owners, and automate operational governance.
            </p>

            {/* Filter Pills */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveSolutionCategory(cat.key)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${activeSolutionCategory === cat.key
                    ? 'bg-[#0070C0] text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Solutions Cards Grid (Clean Cards - NO Image Headers) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modularSolutions
              .filter(
                (sol) => activeSolutionCategory === 'ALL' || sol.category === activeSolutionCategory
              )
              .map((sol, sIdx) => {
                const SolIcon = sol.icon;
                return (
                  <div
                    key={sIdx}
                    className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0070C0] hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0070C0] group-hover:bg-[#0070C0] group-hover:text-white transition-colors duration-300">
                          <SolIcon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                          {sol.tag}
                        </span>
                      </div>

                      <div className="text-[10px] font-mono font-bold text-[#0070C0] uppercase tracking-wider">
                        {sol.categoryLabel}
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0070C0] transition-colors leading-snug">
                        {sol.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {sol.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 space-y-2">
                      <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Core Capabilities</div>
                      <div className="flex flex-wrap gap-1.5">
                        {sol.highlights.map((h, hIdx) => (
                          <span
                            key={hIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-50 text-slate-700 border border-slate-200"
                          >
                            {h}
                          </span>
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
          SECTION 7: STRATEGIC BUSINESS VALUE (Zero Numbers/Stats)
          ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>COMPOUNDING ENTERPRISE VALUE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Sustained Business Impact of <span className="text-[#0070C0]">Institutional Kaizen</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Transforming operational improvement from a temporary consulting exercise into a permanent, self-sustaining capability that drives enduring enterprise agility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="p-6 rounded-2xl border border-slate-200 bg-gradient-to-b from-sky-50/50 to-white space-y-3 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#0070C0]/10 border border-[#0070C0]/30 flex items-center justify-center text-[#0070C0]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Compounding Velocity</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Continuous cycle time compression across order-to-cash, procurement, and month-end accounting cycles, liberating operational bandwidth.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#0070C0] font-bold">
                Accelerated Enterprise Flow
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-gradient-to-b from-emerald-50/50 to-white space-y-3 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Permanent Waste Eradication</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Systematic removal of manual staging states, re-keying bottlenecks, and maverick purchasing leaks, safeguarding margins.
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-600 font-bold">
                Maximized Working Capital
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-gradient-to-b from-purple-50/50 to-white space-y-3 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Audit-Proof Conformance</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Standard operating procedures locked into core ERP systems prevent unauthorized process drift and simplify regulatory compliance.
              </p>
              <div className="pt-2 text-[11px] font-mono text-purple-600 font-bold">
                Zero-Deviation Governance
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-gradient-to-b from-indigo-50/50 to-white space-y-3 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-600">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Agile Operational Resilience</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                An empowered organizational workforce capable of adapting transactional workflows dynamically to shifting supply chain and market realities.
              </p>
              <div className="pt-2 text-[11px] font-mono text-indigo-600 font-bold">
                Institutional Kaizen Mindset
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: PROCESS DIAGNOSTIC CHAMBER (Image 4 - Zero Numbers/Stats)
          ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>LIVE CONTINUOUS AUDIT CHAMBER</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Interactive Continuous Improvement <span className="text-cyan-400">Telemetry</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Observe real-time Kaizen interventions, automated straight-through execution rules, and continuous compliance verification across mission-critical enterprise workflows.
            </p>
          </div>

          {/* Diagnostic Chamber Container */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl p-5 sm:p-6 lg:p-8 space-y-6">

            {/* Process Navigation Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div className="flex flex-wrap gap-2">
                {(['o2c', 'p2p', 'r2r'] as const).map((tabKey) => (
                  <button
                    key={tabKey}
                    type="button"
                    onClick={() => setActiveProcessTab(tabKey)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${activeProcessTab === tabKey
                      ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700'
                      }`}
                  >
                    <Workflow className="w-3.5 h-3.5" />
                    <span>{diagnosticProcesses[tabKey].tabLabel}</span>
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${diagnosticProcesses[activeProcessTab].riskBadgeColor}`}>
                  {diagnosticProcesses[activeProcessTab].conformanceLevel}
                </span>
              </div>
            </div>

            {/* Diagnostic Chamber Body (Grid 12) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

              {/* Left Column: Visual Diagnostic Chamber (Image 4) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950 group">
                  <img
                    src="/images/continuous_improvement_chamber.jpg"
                    alt="Process Diagnostic Telemetry Chamber"
                    className="w-full h-[240px] sm:h-[280px] object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white space-y-0.5">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">
                      Live Telemetry Stream
                    </span>
                    <p className="text-[11px] text-slate-300">
                      {diagnosticProcesses[activeProcessTab].processInfo}
                    </p>
                  </div>
                </div>

                {/* Recommendation Box */}
                <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-800/50 space-y-1">
                  <div className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Continuous Kaizen Directive</span>
                  </div>
                  <p className="text-xs text-cyan-100 leading-relaxed">
                    {diagnosticProcesses[activeProcessTab].recommendation}
                  </p>
                </div>
              </div>

              {/* Right Column: Live Telemetry & Applied Interventions Table */}
              <div className="lg:col-span-7 space-y-2">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Applied Kaizen Interventions</span>
                  <span className="text-cyan-400">Institutional Standard Verified</span>
                </div>

                <div className="space-y-2">
                  {diagnosticProcesses[activeProcessTab].findings.map((finding, fIdx) => (
                    <div
                      key={fIdx}
                      className={`p-3 rounded-lg border bg-slate-950/60 backdrop-blur-md transition-all text-left space-y-1.5 ${finding.borderColor}`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className={`px-2 py-0.5 rounded text-[9.5px] font-mono font-bold uppercase tracking-wider border ${finding.levelColor}`}>
                          {finding.level}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 truncate">
                          {finding.source}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {finding.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {finding.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: STRATEGIC CALL TO ACTION (CTA)
          ========================================================================= */}
      <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-r from-[#003B73] via-[#005B9E] to-[#0070C0] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-400/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-cyan-200">
            <RefreshCw className="w-3.5 h-3.5 text-cyan-300" />
            <span>INSTITUTIONALIZE CONTINUOUS EXCELLENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build a Self-Sustaining Culture of Continuous Process Kaizen?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Partner with KNOOVIQ&rsquo;s Process Intelligence practice to connect live ERP execution telemetry with closed-loop DMAIC governance, safeguarding compounding operational yield.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenContact ? onOpenContact('Continuous Improvement Consultation') : undefined}
              className="px-8 py-4 rounded-xl bg-white text-[#003B73] font-black text-sm tracking-wide shadow-xl hover:bg-sky-50 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>REQUEST CONTINUOUS IMPROVEMENT CONSULTATION</span>
              <ArrowRight className="w-4 h-4 text-[#003B73]" />
            </button>

            <Link
              to="/digital-intelligence/process-discovery"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all flex items-center gap-2 group"
            >
              <span>Explore Process Discovery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContinuousImprovementPage;
