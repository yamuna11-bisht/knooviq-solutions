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
  TrendingDown
} from 'lucide-react';

interface ProcessOptimizationPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const ProcessOptimizationPage: React.FC<ProcessOptimizationPageProps> = ({
  onOpenContact
}) => {
  // Update document title for SEO
  useEffect(() => {
    document.title = 'Autonomous Process Optimization & Friction Elimination | Digital Intelligence | KNOOVIQ';
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

  // Section 4: Circular Radial Wheel (Continuous Process Optimization Ecosystem - Zero Numbers/Stats)
  const wheelSegments = [
    {
      id: 'simulation',
      shortTag: 'SIMULATE',
      title: 'Digital Process Simulation Engine',
      desc: 'Simulate alternative execution pathways and master data policy adjustments on live digital twins without risking operational core stability',
      badge: 'WHAT-IF SIMULATION',
      metric: 'Deterministic Risk Evaluation',
      side: 'right',
      color: '#00A3E0',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(0, 163, 224, 0.35)',
      icon: Activity
    },
    {
      id: 'elimination',
      shortTag: 'ELIMINATE',
      title: 'Micro-Dwell & Bottleneck Elimination',
      desc: 'Systematically remove manual staging wait states, approval deadlocks, and repetitive rework cycles across transactional flows',
      badge: 'CYCLE TIME COMPRESSION',
      metric: 'Touchless Stream Acceleration',
      side: 'right',
      color: '#0070C0',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(0, 112, 192, 0.35)',
      icon: Zap
    },
    {
      id: 'routing',
      shortTag: 'ROUTING',
      title: 'Dynamic Intelligent Case Routing',
      desc: 'Context-aware algorithmic routing that bypasses redundant review stages for certified low-risk orders and compliant requisitions',
      badge: 'INTELLIGENT FAST-PATH',
      metric: 'Automated Exception Bypass',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.35)',
      icon: GitBranch
    },
    {
      id: 'rules',
      shortTag: 'RULES',
      title: 'Master Data & Policy Harmonization',
      desc: 'Harmonize payment terms, credit limits, and lead-time parameters across regional operating codes to prevent structural latency',
      badge: 'STRUCTURAL TUNING',
      metric: 'Unified Policy Calibration',
      side: 'right',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.35)',
      icon: Sliders
    },
    {
      id: 'automation',
      shortTag: 'AUTOMATE',
      title: 'Targeted Hyper-Automation Injection',
      desc: 'Deploy high-yield robotic and intelligent agent automation precisely at empirical friction points rather than arbitrary steps',
      badge: 'PRECISION AUTOMATION',
      metric: 'Evidence-Based Deployment',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: Cpu
    },
    {
      id: 'orchestration',
      shortTag: 'ORCHESTRATE',
      title: 'Cross-System Workflow Orchestration',
      desc: 'Seamlessly bridge handoff gaps between SAP ERP, CRM, warehouse management, and third-party logistics systems',
      badge: 'SEAMLESS INTEGRATION',
      metric: 'Zero-Handoff Black Holes',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.35)',
      icon: Workflow
    },
    {
      id: 'governance',
      shortTag: 'GOVERN',
      title: 'Clean Core & Conformance Preservation',
      desc: 'Keep standard business logic clean while executing agile process extensions via SAP BTP, preserving upgrade compatibility',
      badge: 'CLEAN CORE ALIGNMENT',
      metric: 'Deterministic Upgrade Guard',
      side: 'left',
      color: '#06B6D4',
      textColor: 'text-cyan-300',
      bgGlow: 'rgba(6, 182, 212, 0.35)',
      icon: ShieldCheck
    },
    {
      id: 'velocity',
      shortTag: 'VELOCITY',
      title: 'Continuous Velocity Benchmarking',
      desc: 'Real-time telemetry tracking cycle time compression and margin protection against target enterprise benchmarks',
      badge: 'VELOCITY BENCHMARKING',
      metric: 'Continuous Value Realization',
      side: 'left',
      color: '#3B82F6',
      textColor: 'text-blue-400',
      bgGlow: 'rgba(59, 130, 246, 0.35)',
      icon: Gauge
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
      label: '02 What-If Simulation',
      sublabel: 'Virtual Process Re-Engineering',
      desc: 'Simulate proposed procedural changes, routing bypasses, and threshold shifts on the digital process twin prior to ERP deployment.',
      tech: 'Monte Carlo Simulation • Token Replay Testing • Risk-Free Modeling',
      icon: Activity
    },
    {
      id: 'step-3',
      label: '03 Policy Harmonization',
      sublabel: 'Master Data Calibration',
      desc: 'Reconfigure ERP credit control horizons, safety stock rules, and payment terms to eliminate structural queue dwell states.',
      tech: 'Master Data Governance • S/4HANA Parameter Tuning • Clean Core Extensions',
      icon: Sliders
    },
    {
      id: 'step-4',
      label: '04 Autonomous Fast-Paths',
      sublabel: 'Dynamic Smart Routing',
      desc: 'Automate straight-through execution for pre-verified transactions, routing only verified exceptions to specialized human teams.',
      tech: 'Intelligent Work Orchestration • Low-Risk Exception Bypass • Automated Rules',
      icon: GitBranch
    },
    {
      id: 'step-5',
      label: '05 Closed-Loop Automation',
      sublabel: 'BTP & RPA Action Injection',
      desc: 'Deploy targeted automation bots and direct API webhooks to perform repetitive block clearances and intercompany ledger adjustments.',
      tech: 'SAP BTP Action Flows • RPA Agent Injection • Bi-Directional OData APIs',
      icon: Zap
    },
    {
      id: 'step-6',
      label: '06 Realized Value Audit',
      sublabel: 'Continuous Velocity Governance',
      desc: 'Continuously measure realized throughput gains, working capital release, and compliance adherence against strategic baselines.',
      tech: 'Continuous Conformance Radar • Value Realization Ledger • Boardroom Telemetry',
      icon: Gauge
    }
  ];

  // Section 3: Strategic Enterprise Challenges (Qualitative Frictions)
  const challenges = [
    {
      icon: AlertTriangle,
      tag: 'STRUCTURAL FRICTION',
      title: 'Outdated Master Data & Policy Locks',
      desc: 'Legacy credit limits, rigid approval hierarchies, and outdated supplier parameters create artificial bottlenecks in standard business transactions.',
      footer: 'Institutional Process Inelasticity'
    },
    {
      icon: RefreshCw,
      tag: 'REWORK OVERHEAD',
      title: 'Pervasive Manual Rework Loops',
      desc: 'Incomplete sales order data, pricing overrides, and retroactive invoice corrections generate redundant cycles across operational departments.',
      footer: 'Resource Capacity Depletion'
    },
    {
      icon: Clock,
      tag: 'QUEUE DWELL',
      title: 'Prolonged Stage-Gate Dwell Latency',
      desc: 'Orders and purchase requisitions spend the vast majority of their total lifecycle idle waiting for manual supervisory approvals.',
      footer: 'Fulfillment Velocity Attrition'
    },
    {
      icon: Cpu,
      tag: 'AUTOMATION MISALIGNMENT',
      title: 'Automating Inherently Flawed Workflows',
      desc: 'Organizations deploy robotic workflow automation over fundamentally broken, redundant processes, scaling inefficiency rather than eliminating it.',
      footer: 'Sub-Optimal Technology Yield'
    },
    {
      icon: Layers,
      tag: 'SYSTEM SILOS',
      title: 'Cross-Functional Transaction Friction',
      desc: 'Data friction between procurement, finance, and warehouse operations creates departmental blind spots and delayed customer fulfillment.',
      footer: 'Fragmented Value Chains'
    },
    {
      icon: Shield,
      tag: 'CONTROL CREEP',
      title: 'Over-Engineered Control Hurdles',
      desc: 'Redundant sign-offs implemented in response to historical audit findings slow down everyday transactions without adding true risk mitigation.',
      footer: 'Bureaucratic Velocity Drag'
    }
  ];

  // Section 5: Architecture Framework Layers (Qualitative Layers)
  const architectureLayers = [
    {
      title: 'Empirical Friction Diagnostic Layer',
      subtitle: 'Directed Process Graph Analysis & Root-Cause Attribution',
      desc: 'Extracts real-time transactional event data to calculate exact dwell states, variant branches, and master data correlations across SAP S/4HANA.',
      tags: ['Petri-Net Topology Analysis', 'Master Data Correlation', 'Variant Clustering', 'Lead-Time Attribution']
    },
    {
      title: 'What-If Digital Simulation Layer',
      subtitle: 'Dynamic Virtual Sandbox & Future-State Modeling',
      desc: 'Models proposed structural workflow redesigns and automated approval thresholds on the living digital twin to guarantee zero core disruption.',
      tags: ['Virtual Process Re-Engineering', 'Risk-Free Sandbox Testing', 'Token Replay Simulation', 'Capacity Optimization']
    },
    {
      title: 'Dynamic Rule Harmonization & Routing Layer',
      subtitle: 'Straight-Through Processing & Fast-Path Intelligence',
      desc: 'Re-engineers business logic to route compliant cases straight through to fulfillment, isolating only true policy deviations for manual review.',
      tags: ['Straight-Through Routing', 'Policy Harmonization', 'Exception Triage Engines', 'Smart Rule Calibration']
    },
    {
      title: 'Autonomous Closed-Loop Execution Layer',
      subtitle: 'SAP BTP Integrations, RPA Triggers & Continuous Governance',
      desc: 'Injects automated resolutions directly into core ERP tables, clearing blocks, updating master records, and ensuring persistent clean core integrity.',
      tags: ['SAP BTP Action Flows', 'Precision RPA Deployment', 'ERP Webhook Triggers', 'Continuous Conformance Guard']
    }
  ];

  // Section 6: Modular Solutions Matrix (Clean Semantic Codes)
  const modularSolutions = [
    {
      category: 'O2C',
      categoryLabel: 'Order-to-Cash',
      icon: Workflow,
      tag: 'OPTIMIZE-O2C',
      title: 'Touchless Order-to-Cash Acceleration Suite',
      description: 'Streamlines customer order intake, dynamically unblocks compliant deliveries, and automates billing schedules to compress cash conversion cycles.',
      highlights: ['Touchless Order Maximization', 'Automated Credit Hold Removal', 'Lead-Time Bottleneck Elimination']
    },
    {
      category: 'P2P',
      categoryLabel: 'Procure-to-Pay',
      icon: Database,
      tag: 'OPTIMIZE-P2P',
      title: 'Procure-to-Pay Working Capital & Terms Optimizer',
      description: 'Harmonizes supplier payment schedules, eliminates maverick buying paths, and enforces straight-through three-way matching.',
      highlights: ['Early Discount Capture', 'Retroactive PO Elimination', 'Automated Tolerance Matching']
    },
    {
      category: 'R2R',
      categoryLabel: 'Record-to-Report',
      icon: BarChart3,
      tag: 'OPTIMIZE-R2R',
      title: 'Continuous Financial Close Acceleration Hub',
      description: 'Streamlines period-end journal postings, automates intercompany subledger balancing, and shortens corporate financial reporting windows.',
      highlights: ['Intercompany Auto-Balancing', 'Manual Journal Reduction', 'Continuous Subledger Close']
    },
    {
      category: 'SUPPLY_CHAIN',
      categoryLabel: 'Supply Chain & Logistics',
      icon: Factory,
      tag: 'OPTIMIZE-LOGISTICS',
      title: 'Warehouse Throughput & Dispatch Optimization',
      description: 'Optimizes warehouse pick-pack-ship sequences, eliminates yard detention bottlenecks, and ensures reliable on-time delivery.',
      highlights: ['Dock-to-Stock Compression', 'Yard Dwell Elimination', 'Dynamic Carrier Dispatch']
    },
    {
      category: 'SERVICE',
      categoryLabel: 'IT & Shared Services',
      icon: Activity,
      tag: 'OPTIMIZE-ITSM',
      title: 'Shared Services Ticket Resolution Streamliner',
      description: 'Eliminates departmental bounce loops, establishes intelligent automated assignment queues, and deploys autonomous resolution agents.',
      highlights: ['Ticket Bounce Elimination', 'First-Touch Resolution Routing', 'Autonomous Agent Dispatch']
    },
    {
      category: 'ASSET',
      categoryLabel: 'Plant & Asset Reliability',
      icon: Cpu,
      tag: 'OPTIMIZE-ASSET',
      title: 'Plant Maintenance Work Order Acceleration',
      description: 'Streamlines work order approval handoffs, automates spare-parts reservation requests, and reduces planned equipment downtime.',
      highlights: ['Parts Wait State Elimination', 'Automated Work Order Release', 'Uptime Maximization']
    }
  ];

  const categories = [
    { key: 'ALL', label: 'All Modules' },
    { key: 'O2C', label: 'Order-to-Cash' },
    { key: 'P2P', label: 'Procure-to-Pay' },
    { key: 'R2R', label: 'Record-to-Report' },
    { key: 'SUPPLY_CHAIN', label: 'Supply Chain' },
    { key: 'SERVICE', label: 'Shared Services' },
    { key: 'ASSET', label: 'Plant & Asset' }
  ];

  // Section 8: Diagnostic Chamber Audit Data (Qualitative Insights, Zero Numbers/Stats)
  const diagnosticProcesses = {
    o2c: {
      id: 'o2c',
      tabLabel: 'Order-to-Cash (O2C)',
      title: 'Order Fulfillment Optimization & Flow Acceleration',
      processInfo: 'Global Enterprise Sales Orders • Straight-Through Execution Model',
      conformanceLevel: 'OPTIMIZATION RECIPES READY • REVISION APPLIED',
      riskBadgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-emerald-500/10',
      recommendation: 'Deploy dynamic credit threshold rules on insured customer tiers and trigger automated delivery creation upon payment verification.',
      findings: [
        {
          level: 'OPTIMIZED BYPASS',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Automated Credit Fast-Path for Insured Accounts',
          desc: 'Orders from verified accounts bypass manual credit committee reviews, routing directly to warehouse staging queues without human touch.',
          source: 'Rule: Dynamic Credit Control Horizon • S/4HANA Extension'
        },
        {
          level: 'FRICTION CLEARED',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Automated Delivery Block Removal',
          desc: 'Systematic webhook clears delivery blocks upon inventory allocation confirmation, eliminating multi-day staging delays.',
          source: 'Action: SAP BTP Event-Driven Block Release'
        },
        {
          level: 'TOUCHLESS FLOW',
          levelColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          borderColor: 'border-sky-500/40 hover:border-sky-400',
          title: 'Straight-Through Invoicing Execution',
          desc: 'Billing documents generate automatically following goods issue posting, synchronizing General Ledger entries simultaneously.',
          source: 'Transaction: Electronic Billing Automation • Verified Flow'
        }
      ]
    },
    p2p: {
      id: 'p2p',
      tabLabel: 'Procure-to-Pay (P2P)',
      title: 'Procurement Policy Harmonization & Spend Velocity',
      processInfo: 'Global Purchase Requisitions & Catalogs • Policy Calibration Grid',
      conformanceLevel: 'SPEND HARMONIZATION • STRAIGHT-THROUGH PO',
      riskBadgeColor: 'bg-sky-500/20 text-sky-300 border-sky-400/50 shadow-sky-500/10',
      recommendation: 'Mandate pre-negotiated electronic supplier catalog orders with automatic PO creation to permanently prevent retroactive invoices.',
      findings: [
        {
          level: 'POLICY RE-ENGINEERED',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Catalog Auto-Approval for Pre-Negotiated Spend',
          desc: 'Standard requisitions against master service agreements execute without managerial touch, ensuring contract pricing enforcement.',
          source: 'Policy: Automated Sourcing Rules • S/4HANA Sourcing'
        },
        {
          level: 'DISCOUNT CAPTURED',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Dynamic Payment Scheduling for Cash Discounts',
          desc: 'Invoices clear through automated tolerance checks, aligning payment dates exactly to capture supplier prompt-settlement terms.',
          source: 'Table: BSIK, BSAK • Cash Optimization Algorithm'
        },
        {
          level: 'CLEAN DISPATCH',
          levelColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          borderColor: 'border-sky-500/40 hover:border-sky-400',
          title: 'Evaluated Receipt Settlement (ERS)',
          desc: 'Goods receipt triggers payment directly based on purchase order terms without requiring vendor invoice generation.',
          source: 'Transaction: Automated ERS Protocol • Verified Conformance'
        }
      ]
    },
    r2r: {
      id: 'r2r',
      tabLabel: 'Record-to-Report (R2R)',
      title: 'Financial Close Compression & Ledger Streamlining',
      processInfo: 'Subledger Reconciliations & Corporate Close • Continuous Financial Governance',
      conformanceLevel: 'CONTINUOUS CLOSE • COMPRESSED PERIOD-END',
      riskBadgeColor: 'bg-purple-500/20 text-purple-300 border-purple-400/50 shadow-purple-500/10',
      recommendation: 'Shift from period-end batch balancing to continuous daily intercompany reconciliations with automated journal matching.',
      findings: [
        {
          level: 'DAILY RECONCILIATION',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Continuous Intercompany Ledger Synchronization',
          desc: 'Multinational entity balances reconcile on a daily transaction basis, removing final close window congestion.',
          source: 'Tables: BKPF, BSEG • Real-Time Balancing Engine'
        },
        {
          level: 'STANDARDIZED POSTING',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Automated Workpaper Linked Accruals',
          desc: 'Recurring period-end accruals calculate and post automatically with permanent digital documentation attached.',
          source: 'Module: General Ledger Automated Accruals'
        },
        {
          level: 'AUDIT ASSURANCE',
          levelColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          borderColor: 'border-sky-500/40 hover:border-sky-400',
          title: 'Fixed Asset Automated Capitalization',
          desc: 'Completed project work-in-progress capitalizes systematically into primary asset classes with automatic depreciation start dates.',
          source: 'Transaction: Project Asset Settlement • Verified Standard'
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
            src="/images/process_optimization_ai_innovation_hero.jpg"
            alt="Autonomous Enterprise Process Optimization & Flow Acceleration"
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
                <span>KNOOVIQ DIGITAL INTELLIGENCE &bull; PROCESS INTELLIGENCE</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                Autonomous Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-400">
                  Process Optimization &amp; Flow Acceleration
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal max-w-2xl pt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Eliminate operational friction, compress cycle times, and automate straight-through execution across mission-critical SAP S/4HANA value streams.
              </p>
            </motion.div>

            {/* Enterprise Assurance Indicators (Qualitative Focus) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="pt-3 flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>What-If Digital Process Simulation</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Autonomous Straight-Through Routing</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200">
                <Zap className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Closed-Loop Friction Elimination</span>
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
                <span>EXECUTIVE OPTIMIZATION PERSPECTIVE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Transitioning from Process Visibility to <span className="text-[#0070C0]">Frictionless Execution</span>
              </h2>
              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Process intelligence is only as valuable as the friction it resolves. Real enterprise transformation requires re-engineering business rules, eliminating micro-dwells, and automating straight-through execution.&rdquo;
                </p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Knooviq combines process mining insights with algorithmic what-if simulation to re-engineer core operations. We harmonize master data parameters, eliminate manual review bottlenecks, and deploy closed-loop actions directly into SAP S/4HANA via SAP BTP.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Risk-Free What-If Simulation</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Simulate policy adjustments, threshold changes, and automation injection on living digital process twins before rolling out changes to production ERP.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <GitBranch className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Intelligent Fast-Path Routing</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Re-engineer workflow trees to route compliant orders and purchase requests straight through, reserving human judgment strictly for high-risk exceptions.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Closed-Loop Friction Remediation</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Automated execution recipes remove delivery blocks, adjust payment scheduling, and reallocate stock via SAP BTP without core code modification.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Console (Image 2) */}
            <div className="lg:col-span-6 space-y-3.5">
              <div
                className="relative h-96 sm:h-[440px] lg:h-[490px] w-full rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900 group cursor-pointer"
                onClick={() => setActiveJourneyStep((activeJourneyStep + 1) % journeySteps.length)}
                title="Click image to advance to next architecture step"
              >
                <img
                  src="/images/process_optimization_rocket_cockpit.png"
                  alt="Transitioning from Process Visibility to Frictionless Execution Command Center"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs font-mono font-bold text-cyan-300 shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <span>ACTIVE RE-ENGINEERING: {journeySteps[activeJourneyStep].label.toUpperCase()}</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                  <div className="text-xs sm:text-sm font-mono font-bold text-cyan-300">{journeySteps[activeJourneyStep].tech}</div>
                  <p className="text-xs sm:text-sm text-slate-100 font-medium line-clamp-2 leading-relaxed">{journeySteps[activeJourneyStep].desc}</p>
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
                      className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2.5 ${isSelected
                        ? 'bg-[#0070C0] text-white border-2 border-[#0070C0] shadow-md scale-[1.01]'
                        : 'bg-white text-slate-800 border-2 border-slate-200 hover:bg-sky-50 hover:border-[#0070C0]'
                        }`}
                    >
                      <div className={`p-1.5 rounded-lg shrink-0 ${isSelected ? 'bg-white/20 text-white' : 'bg-sky-50 text-[#0070C0] border border-sky-200'}`}>
                        <StepIcon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-black truncate">{step.label}</div>
                        <div className={`text-[10px] font-semibold truncate ${isSelected ? 'text-sky-100' : 'text-slate-500'}`}>{step.sublabel}</div>
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
          SECTION 3: STRATEGIC ENTERPRISE CHALLENGES
          ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#F8FAFC] border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
              <Compass className="w-3.5 h-3.5 text-rose-600" />
              <span>OPERATIONAL DRAG & INEFFICIENCY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Root Causes of Transactional Latency & Margin Leakage
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Behind rigid ERP workflows lie obsolete business rules, manual rework loops, and bureaucratic stage-gates that slow corporate velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {challenges.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="h-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-sky-50 text-[#0070C0] border border-slate-200 group-hover:bg-[#0070C0] group-hover:text-white transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono uppercase text-slate-500 font-bold block">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-950 leading-snug group-hover:text-[#0070C0] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {item.footer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CIRCULAR RADIAL CHEVRON WHEEL (Process Optimization Ecosystem)
          ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-slate-950 relative overflow-hidden border-b border-slate-800 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-950/40 via-slate-950 to-slate-950 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>OPTIMIZATION ENGINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Closed-Loop Process Re-Engineering Ecosystem
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              An interlocking operational framework engineered to simulate, streamline, and automate enterprise execution continuously.
            </p>

            {/* Live Synchronized Status Badge */}
            <div className="pt-1 flex flex-wrap items-center justify-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>ACTIVE OPTIMIZATION STAGE: {wheelSegments[hoveredWheelIndex ?? 0].badge}</span>
              </div>
            </div>
          </div>

          {/* Interactive Wheel Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-center">

            {/* Left Column: 4 Micro-Pods ([7, 6, 5, 4]) */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-2">
              {[7, 6, 5, 4].map((segIdx) => {
                const item = wheelSegments[segIdx];
                const isHovered = hoveredWheelIndex === segIdx;
                const ItemIcon = item.icon;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => { if (!isAutoPlaying) setHoveredWheelIndex(segIdx); }}
                    onMouseLeave={() => { if (!isAutoPlaying) setHoveredWheelIndex(null); }}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setHoveredWheelIndex(isHovered ? null : segIdx);
                    }}
                    className={`px-3.5 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer relative overflow-hidden group backdrop-blur-md ${isHovered
                      ? 'bg-slate-900/95 -translate-x-1 shadow-lg scale-[1.01]'
                      : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                      }`}
                    style={{
                      borderColor: isHovered ? item.color : undefined,
                      boxShadow: isHovered ? `0 0 20px ${item.bgGlow}` : undefined
                    }}
                  >
                    <div
                      className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 rounded-tr pointer-events-none transition-opacity"
                      style={{ borderColor: item.color, opacity: isHovered ? 1 : 0.4 }}
                    />

                    {isHovered && (
                      <div
                        className="absolute top-0 left-0 right-0 h-0.5 animate-pulse"
                        style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }}
                      />
                    )}

                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0 flex-1 space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <span
                            className="text-[9.5px] font-mono font-bold tracking-wider px-1.5 py-0.5 rounded bg-white/5 border border-white/10"
                            style={{ color: item.color }}
                          >
                            {item.badge}
                          </span>
                        </div>
                        <h4
                          className="text-xs sm:text-[13px] font-bold tracking-tight text-white truncate transition-colors"
                          style={{ color: isHovered ? item.color : undefined }}
                        >
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${isHovered ? 'animate-ping' : ''}`}
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="truncate">{item.metric}</span>
                        </div>
                      </div>

                      <div
                        className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center border transition-all duration-200 ${isHovered ? 'scale-110 shadow-md' : 'bg-white/5 border-white/10 text-slate-300'
                          }`}
                        style={{
                          backgroundColor: isHovered ? `${item.color}25` : undefined,
                          borderColor: isHovered ? item.color : undefined,
                          color: isHovered ? item.color : undefined,
                          boxShadow: isHovered ? `0 0 12px ${item.bgGlow}` : undefined
                        }}
                      >
                        <ItemIcon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Circular Radial SVG Wheel (400x400 / 500x500 viewport) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="relative w-[340px] h-[340px] xl:w-[380px] xl:h-[380px] flex items-center justify-center">

                {/* SVG Dial */}
                <svg viewBox="0 0 500 500" className="w-full h-full transform transition-transform duration-700">
                  <defs>
                    <radialGradient id="processCenterReactorCoreOptimization" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#0B132B" stopOpacity="0.9" />
                      <stop offset="85%" stopColor="#040817" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#02040A" stopOpacity="1" />
                    </radialGradient>
                  </defs>

                  {/* Outer Orbit Guides */}
                  <circle cx="250" cy="250" r="245" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="250" cy="250" r="140" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

                  {/* 8 Interlocking Chevrons */}
                  {wheelSegments.map((seg, idx) => {
                    const isHovered = hoveredWheelIndex === idx;
                    const pathData = getChevronPath(idx);

                    // Compute centroid for icon
                    const midAngle = ((idx + 0.5) * 360) / 8 - 90;
                    const iconRadius = 190;
                    const iconPos = {
                      x: 250 + iconRadius * Math.cos((midAngle * Math.PI) / 180),
                      y: 250 + iconRadius * Math.sin((midAngle * Math.PI) / 180)
                    };
                    const IconComponent = seg.icon;

                    return (
                      <g
                        key={seg.id}
                        className="cursor-pointer group"
                        onMouseEnter={() => { if (!isAutoPlaying) setHoveredWheelIndex(idx); }}
                        onMouseLeave={() => { if (!isAutoPlaying) setHoveredWheelIndex(null); }}
                        onClick={() => {
                          setIsAutoPlaying(false);
                          setHoveredWheelIndex(isHovered ? null : idx);
                        }}
                      >
                        <path
                          d={pathData}
                          fill={isHovered ? `${seg.color}35` : '#070D1B'}
                          stroke={isHovered ? seg.color : `${seg.color}80`}
                          strokeWidth={isHovered ? "3.5" : "2"}
                          strokeLinejoin="round"
                          className="transition-all duration-300"
                          style={{
                            filter: isHovered ? `drop-shadow(0 0 14px ${seg.color})` : undefined
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
                            className={`w-full h-full flex items-center justify-center transition-transform duration-300 ${isHovered ? 'scale-125' : ''}`}
                            style={{ color: isHovered ? '#FFFFFF' : seg.color }}
                          >
                            <IconComponent className="w-5 h-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" />
                          </div>
                        </foreignObject>
                      </g>
                    );
                  })}

                  {/* Core Reactor Center Node */}
                  <circle cx="250" cy="250" r="110" fill="url(#processCenterReactorCoreOptimization)" stroke="rgba(0, 163, 224, 0.4)" strokeWidth="2.5" />
                  <circle cx="250" cy="250" r="95" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="4 4" />

                  <foreignObject x="155" y="155" width="190" height="190" className="pointer-events-none">
                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-3">
                      {hoveredWheelIndex !== null ? (
                        <div className="space-y-1 animate-in fade-in duration-200">
                          <span
                            className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10"
                            style={{ color: wheelSegments[hoveredWheelIndex].color }}
                          >
                            {wheelSegments[hoveredWheelIndex].shortTag}
                          </span>
                          <div className="text-xs font-black text-white leading-tight">
                            {wheelSegments[hoveredWheelIndex].title}
                          </div>
                          <p className="text-[10px] text-slate-300 line-clamp-2 leading-tight">
                            {wheelSegments[hoveredWheelIndex].desc}
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <Workflow className="w-7 h-7 text-cyan-400 mx-auto animate-pulse" />
                          <div className="text-xs font-black text-white tracking-wide">
                            KNOOVIQ OPTIMIZE CORE
                          </div>
                          <div className="text-[9.5px] font-mono text-cyan-300">
                            Flow Acceleration Engine
                          </div>
                        </div>
                      )}
                    </div>
                  </foreignObject>
                </svg>
              </div>
            </div>

            {/* Right Column: 4 Micro-Pods ([0, 1, 2, 3]) */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-2">
              {[0, 1, 2, 3].map((segIdx) => {
                const item = wheelSegments[segIdx];
                const isHovered = hoveredWheelIndex === segIdx;
                const ItemIcon = item.icon;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => { if (!isAutoPlaying) setHoveredWheelIndex(segIdx); }}
                    onMouseLeave={() => { if (!isAutoPlaying) setHoveredWheelIndex(null); }}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setHoveredWheelIndex(isHovered ? null : segIdx);
                    }}
                    className={`px-3.5 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer relative overflow-hidden group backdrop-blur-md ${isHovered
                      ? 'bg-slate-900/95 translate-x-1 shadow-lg scale-[1.01]'
                      : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                      }`}
                    style={{
                      borderColor: isHovered ? item.color : undefined,
                      boxShadow: isHovered ? `0 0 20px ${item.bgGlow}` : undefined
                    }}
                  >
                    <div
                      className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 rounded-tl pointer-events-none transition-opacity"
                      style={{ borderColor: item.color, opacity: isHovered ? 1 : 0.4 }}
                    />

                    {isHovered && (
                      <div
                        className="absolute top-0 left-0 right-0 h-0.5 animate-pulse"
                        style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }}
                      />
                    )}

                    <div className="flex items-center justify-between gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center border transition-all duration-200 ${isHovered ? 'scale-110 shadow-md' : 'bg-white/5 border-white/10 text-slate-300'
                          }`}
                        style={{
                          backgroundColor: isHovered ? `${item.color}25` : undefined,
                          borderColor: isHovered ? item.color : undefined,
                          color: isHovered ? item.color : undefined,
                          boxShadow: isHovered ? `0 0 12px ${item.bgGlow}` : undefined
                        }}
                      >
                        <ItemIcon className="w-4 h-4" />
                      </div>

                      <div className="min-w-0 flex-1 space-y-0.5 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <span
                            className="text-[9.5px] font-mono font-bold tracking-wider px-1.5 py-0.5 rounded bg-white/5 border border-white/10"
                            style={{ color: item.color }}
                          >
                            {item.badge}
                          </span>
                        </div>
                        <h4
                          className="text-xs sm:text-[13px] font-bold tracking-tight text-white truncate transition-colors"
                          style={{ color: isHovered ? item.color : undefined }}
                        >
                          {item.title}
                        </h4>
                        <div className="flex items-center justify-end gap-1.5 text-[10px] font-mono text-slate-400">
                          <span className="truncate">{item.metric}</span>
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${isHovered ? 'animate-ping' : ''}`}
                            style={{ backgroundColor: item.color }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* MOBILE/TABLET FALLBACK (<lg) */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {wheelSegments.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/10" style={{ color: item.color }}>
                      {item.shortTag}
                    </span>
                    <ItemIcon className="w-4 h-4" style={{ color: item.color }} />
                  </div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: ENTERPRISE ARCHITECTURE FRAMEWORK (Image 3)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Layers className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>ENTERPRISE ARCHITECTURE FRAMEWORK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Enterprise Process Optimization Architecture
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Engineered for continuous workflow acceleration, what-if digital twin simulation, and closed-loop action execution via SAP BTP.
            </p>
          </div>

          {/* Architectural Optimization Mesh Graphic Showcase (Image 3) */}
          <div className="mb-10 rounded-2xl overflow-hidden border-2 border-slate-200 bg-slate-950 relative shadow-xl group">
            <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
              <img
                src="/images/process_optimization_mesh.jpg"
                alt="Knooviq Enterprise Process Optimization Architecture Mesh"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/40 text-xs font-mono font-bold text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>ENTERPRISE DIGITAL PROCESS RE-ENGINEERING MESH</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block">
                    Dynamic Straight-Through Routing
                  </span>
                  <span className="font-bold text-white text-sm">
                    Algorithmic Bypass & Micro-Dwell Compression
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Deterministic Clean Core Compatibility</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {architectureLayers.map((layer) => (
              <div
                key={layer.title}
                className="p-5 rounded-2xl bg-[#F8FAFC] border-2 border-slate-200 hover:border-[#0070C0] hover:shadow-lg transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#0070C0] text-white text-[9.5px] font-mono font-bold uppercase tracking-wider">
                    ARCHITECTURAL LAYER
                  </div>
                  <h3 className="text-sm font-bold text-slate-950 leading-snug">
                    {layer.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-[#0070C0]">
                    {layer.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {layer.desc}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-200 space-y-1.5">
                  <div className="text-[9.5px] font-mono font-bold uppercase text-slate-400">Integrated Standards</div>
                  <div className="flex flex-wrap gap-1">
                    {layer.tags.slice(0, 3).map((t, tIdx) => (
                      <span key={tIdx} className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[9.5px] font-mono font-medium text-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: MODULAR USE CASES (Pre-Configured Solutions Matrix)
          ========================================================================= */}
      <section id="process-optimization-solutions" className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-slate-200 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Boxes className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PRE-CONFIGURED OPTIMIZATION ACCELERATORS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Pre-Built Process Optimization Modules
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Domain-specific workflow re-engineering recipes pre-calibrated to eliminate friction across standard enterprise value streams.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => {
              const isActive = activeSolutionCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveSolutionCategory(cat.key)}
                  className={`industry-category-tab px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${isActive
                    ? 'bg-[#0070C0] text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                    }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Modular Cards Grid (Ultra-Clean, Matching Generative AI & Process Mining) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {modularSolutions
              .filter((sol) => activeSolutionCategory === 'ALL' || sol.category === activeSolutionCategory)
              .map((sol) => {
                const IconComponent = sol.icon;
                return (
                  <div
                    key={sol.title}
                    className="p-6 sm:p-7 rounded-2xl bg-white border-2 border-slate-200/90 hover:border-[#0070C0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden space-y-4"
                  >
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold text-[#0070C0] uppercase tracking-wider">
                          {sol.tag}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0070C0]/10 to-sky-100 text-[#0070C0] flex items-center justify-center border border-sky-200/60 group-hover:bg-[#0070C0] group-hover:text-white transition-all shadow-xs">
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
                          {sol.categoryLabel}
                        </div>
                        <h3 className="text-lg sm:text-xl font-black text-slate-950 group-hover:text-[#0070C0] transition-colors leading-snug">
                          {sol.title}
                        </h3>
                      </div>

                      <p className="text-sm text-slate-700 leading-relaxed font-medium">
                        {sol.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 space-y-2">
                      <div className="flex flex-wrap gap-1.5">
                        {sol.highlights.map((hl, hIdx) => (
                          <span
                            key={hIdx}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/90 text-xs font-semibold text-slate-800 border border-slate-200"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0070C0] shrink-0" />
                            <span>{hl}</span>
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
          SECTION 7: STRATEGIC BUSINESS VALUE & OPERATIONAL ADVANTAGES (Zero Stats/Numbers)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#F8FAFC] to-white border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>STRATEGIC BUSINESS VALUE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Operational Advantages of Systematic Process Optimization
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Empower your enterprise with autonomous straight-through execution, friction elimination, and persistent clean core agility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm hover:border-[#0070C0] transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-black text-slate-950">Touchless Process Velocity</div>
                  <div className="text-xs font-semibold text-emerald-600">Cycle Time Compression</div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Eliminates unnecessary manual approval checkpoints for compliant transactions, accelerating order delivery and cash collection.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                VELOCITY GAINS
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm hover:border-[#0070C0] transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center border border-sky-200">
                  <Scale className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-black text-slate-950">Working Capital Liberation</div>
                  <div className="text-xs font-semibold text-[#0070C0]">Liquidity Preservation</div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Harmonizes invoice matching and procurement payment terms to optimize cash outflows and capture early-settlement supplier incentives.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                CAPITAL EFFICIENCY
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm hover:border-[#0070C0] transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-200">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-black text-slate-950">Clean Core Architectural Governance</div>
                  <div className="text-xs font-semibold text-cyan-600">Zero Custom Code Bloat</div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Executes modern process automations via cloud sidecars and SAP BTP action flows without modifying standard S/4HANA core logic.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                CLEAN ARCHITECTURE
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm hover:border-[#0070C0] transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-200">
                  <Users className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-black text-slate-950">Empowered Human Capacity</div>
                  <div className="text-xs font-semibold text-purple-600">High-Value Strategic Focus</div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Frees operational specialists from repetitive status inquiries and manual block clearances to focus on strategic customer partnerships.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                STRATEGIC FOCUS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: PROCESS DIAGNOSTIC CHAMBER (Image 4 - Zero Numbers/Stats)
          ========================================================================= */}
      <section className="py-7 sm:py-9 bg-gradient-to-b from-[#050C18] via-[#09152B] to-[#040A14] border-b border-slate-800 relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="max-w-3xl mx-auto text-center mb-5 sm:mb-6 space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/90 border border-cyan-400/50 text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>LIVE PROCESS OPTIMIZATION CHAMBER</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Interactive Flow Optimization & Fast-Path Simulator
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-normal">
              Simulating algorithmic bypasses, automated block removals, and straight-through routing across enterprise value streams.
            </p>
          </div>

          {/* Diagnostic Console Box */}
          <div className="rounded-xl border border-cyan-500/30 bg-slate-900/90 shadow-xl p-3 sm:p-4 backdrop-blur-xl relative overflow-hidden">

            {/* Header: Tabs & Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-2.5 mb-3 gap-2">
              <div className="space-y-1 text-left">
                <div className="flex flex-wrap gap-1.5">
                  {(['o2c', 'p2p', 'r2r'] as const).map((procKey) => {
                    const proc = diagnosticProcesses[procKey];
                    const isSelected = activeProcessTab === procKey;
                    return (
                      <button
                        key={proc.id}
                        type="button"
                        onClick={() => setActiveProcessTab(procKey)}
                        className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${isSelected
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm shadow-cyan-500/30'
                          : 'bg-white/10 text-slate-300 hover:text-white hover:bg-white/15 border border-white/10'
                          }`}
                      >
                        <Workflow className="w-3 h-3" />
                        <span>{proc.tabLabel}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-0.5 flex flex-wrap items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {diagnosticProcesses[activeProcessTab].title}
                  </h3>
                  <span className="text-[11px] sm:text-xs text-slate-400">
                    &bull; {diagnosticProcesses[activeProcessTab].processInfo}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <div className={`px-2.5 py-1 rounded-md border text-[11px] font-mono font-bold flex items-center gap-1.5 shadow-sm ${diagnosticProcesses[activeProcessTab].riskBadgeColor}`}>
                  <CheckCircle2 className="w-3 h-3 shrink-0" />
                  <span>{diagnosticProcesses[activeProcessTab].conformanceLevel}</span>
                </div>
              </div>
            </div>

            {/* Showcase Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">

              {/* Left Column: Visual Process Optimization Scan (Image 4) */}
              <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-cyan-400/40 shadow-lg group min-h-[260px] sm:min-h-[300px] lg:min-h-full">
                <img
                  src="/images/process_optimization_interactive_simulator.png"
                  alt="Interactive Flow Optimization & Fast-Path Simulator Cockpit"
                  className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-cyan-400/50 text-[10px] font-mono font-bold text-cyan-300 flex items-center gap-1.5 z-10 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Automated Fast-Path &bull; Straight-Through Execution</span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/15 text-white text-left z-10 space-y-0.5">
                  <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                    Prescriptive Optimization Recipe
                  </span>
                  <p className="text-xs text-slate-200 line-clamp-2">
                    {diagnosticProcesses[activeProcessTab].recommendation}
                  </p>
                </div>
              </div>

              {/* Right Column: Live Telemetry & Fast-Path Citations Table */}
              <div className="lg:col-span-7 space-y-2">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Applied Optimization Interventions</span>
                  <span className="text-cyan-400">Straight-Through Verification</span>
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
                      <p className="text-xs text-slate-300 leading-relaxed">
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
            <Zap className="w-3.5 h-3.5 text-cyan-300" />
            <span>ACCELERATE OPERATIONAL EXCELLENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Eliminate Execution Friction and Accelerate Flow?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Partner with KNOOVIQ&rsquo;s Process Intelligence practice to re-engineer core workflows, automate straight-through processing, and maximize ERP yield.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenContact ? onOpenContact('Process Optimization Consultation') : undefined}
              className="px-8 py-4 rounded-xl bg-white text-[#003B73] font-black text-sm tracking-wide shadow-xl hover:bg-sky-50 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>REQUEST PROCESS OPTIMIZATION CONSULTATION</span>
              <ArrowRight className="w-4 h-4 text-[#003B73]" />
            </button>

            <Link
              to="/digital-intelligence/continuous-improvement"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all flex items-center gap-2 group"
            >
              <span>Explore Continuous Improvement</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
export default ProcessOptimizationPage;
