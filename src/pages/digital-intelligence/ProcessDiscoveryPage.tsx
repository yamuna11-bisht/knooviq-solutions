import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Workflow,
  Database,
  Cpu,
  Layers,
  Sparkles,
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
  Maximize2,
  X
} from 'lucide-react';

interface ProcessDiscoveryPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const ProcessDiscoveryPage: React.FC<ProcessDiscoveryPageProps> = ({
  onOpenContact
}) => {
  // Update document title for SEO
  useEffect(() => {
    document.title = 'Process Discovery & Process Mining Intelligence | Digital Intelligence | KNOOVIQ';
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

  // Section 4: Circular Radial Wheel (KNOOVIQ Process Discovery Ecosystem - Zero Numbers/Stats)
  const wheelSegments = [
    {
      id: 'ingestion',
      shortTag: 'INGEST',
      title: 'Multi-Source Event Log Ingestion',
      desc: 'Extract Case IDs, activity timestamps, and resource metadata from SAP ERP, CRM, and cloud databases',
      badge: 'TRANSACTION LOG CAPTURE',
      metric: 'Zero-Delta Overhead Extraction',
      side: 'right',
      color: '#22C55E',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(34, 197, 94, 0.35)',
      icon: Database
    },
    {
      id: 'digital-twin',
      shortTag: 'TWIN',
      title: 'Real-Time Digital Process Twin',
      desc: 'Automated synthesis of live process graphs and Petri nets representing actual end-to-end execution',
      badge: 'PROCESS GRAPH SYNTHESIS',
      metric: 'Continuous Event Graph Rebuild',
      side: 'right',
      color: '#00A3E0',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(0, 163, 224, 0.35)',
      icon: Layers
    },
    {
      id: 'variant-mining',
      shortTag: 'VARIANT',
      title: 'Variant Explosion & Shadow Mapping',
      desc: 'Disambiguate divergent execution pathways to uncover maverick buying, off-system steps, and rework loops',
      badge: 'PATH DISAMBIGUATION',
      metric: 'Full Variant Space Discovery',
      side: 'right',
      color: '#EAB308',
      textColor: 'text-yellow-400',
      bgGlow: 'rgba(234, 179, 8, 0.35)',
      icon: GitBranch
    },
    {
      id: 'bottlenecks',
      shortTag: 'LATENCY',
      title: 'Throughput & Bottleneck Heatmapping',
      desc: 'Pinpoint exact stages where cycle time stalls, measuring queue latency between cross-department handoffs',
      badge: 'LATENCY HEATMAP',
      metric: 'Handoff Discrepancy Isolation',
      side: 'right',
      color: '#F97316',
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.35)',
      icon: Clock
    },
    {
      id: 'conformance',
      shortTag: 'CONFORM',
      title: 'Deterministic Conformance Checking',
      desc: 'Real-time delta analysis comparing observed transaction flows against corporate policy and SOX governance',
      badge: 'POLICY AUDIT ENGINE',
      metric: 'Automated Conformance Scoring',
      side: 'left',
      color: '#F43F5E',
      textColor: 'text-rose-400',
      bgGlow: 'rgba(244, 63, 94, 0.35)',
      icon: ShieldCheck
    },
    {
      id: 'root-cause',
      shortTag: 'AI-CAUSE',
      title: 'Algorithmic Root-Cause Diagnostics',
      desc: 'Machine learning classifiers correlate delays with material types, order classes, and specific vendor entities',
      badge: 'FEATURE ATTRIBUTION',
      metric: 'Statistical Correlation Engine',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: Brain
    },
    {
      id: 'task-mining',
      shortTag: 'TASK',
      title: 'Desktop User Task Mining',
      desc: 'Capture user interaction telemetry across spreadsheets, web portals, and email to map dark manual tasks',
      badge: 'TASK TELEMETRY',
      metric: 'Keystroke & Window OCR Capture',
      side: 'left',
      color: '#A855F7',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(168, 85, 247, 0.35)',
      icon: Eye
    },
    {
      id: 'action-engine',
      shortTag: 'ACTION',
      title: 'Closed-Loop Action & Automation',
      desc: 'Trigger autonomous corrective actions, RPA workflows, or SAP BTP adjustments the moment deviations occur',
      badge: 'CLOSED-LOOP REMEDIATION',
      metric: 'Real-Time ERP Signal Webhooks',
      side: 'left',
      color: '#6366F1',
      textColor: 'text-indigo-400',
      bgGlow: 'rgba(99, 102, 241, 0.35)',
      icon: Zap
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

  // Section 2: Journey Steps (Qualitative Enterprise Focus)
  const journeySteps = [
    {
      id: 'step-1',
      label: 'Event Log Ingestion',
      sublabel: 'Change Document Capture',
      tech: 'SAP CDHDR / CDPOS • Transaction History',
      desc: 'Pulls raw transactional event logs from SAP S/4HANA, ECC, and external systems with zero performance drag on the operational database.',
      icon: Database
    },
    {
      id: 'step-2',
      label: 'Digital Twin Model',
      sublabel: 'Process Graph Synthesis',
      tech: 'Algorithmic Graph Theory & Process Meshes',
      desc: 'Reconstructs the true sequence of enterprise operations, establishing an interactive, clickable digital twin of all transaction pathways.',
      icon: Layers
    },
    {
      id: 'step-3',
      label: 'Variant Explosion',
      sublabel: 'Path Disambiguation',
      tech: 'Clustering Algorithms & Divergence Mining',
      desc: 'Separates authorized standard paths from diverse edge cases, revealing where manual interventions and off-system approvals occur.',
      icon: GitBranch
    },
    {
      id: 'step-4',
      label: 'Bottleneck Mining',
      sublabel: 'Throughput Dwell Analysis',
      tech: 'Queue Latency & Handoff Stage Analytics',
      desc: 'Identifies prolonged dwell stages between steps to isolate why purchase orders linger in approval queues or invoices miss discount windows.',
      icon: Clock
    },
    {
      id: 'step-5',
      label: 'Conformance Checking',
      sublabel: 'Policy Deviation Rules',
      tech: 'BPMN Reference Models & SOX Conformance',
      desc: 'Compares real-world execution against authorized standard operating procedures, flagging non-compliant steps, maverick spend, or audit violations.',
      icon: ShieldCheck
    },
    {
      id: 'step-6',
      label: 'Autonomous Action',
      sublabel: 'Closed-Loop Execution',
      tech: 'SAP BTP Webhooks & Action Flow Trigger',
      desc: 'Triggers automated remediation—such as unblocking orders, removing credit holds, or dispatching alert tasks—the moment bottlenecks occur.',
      icon: Zap
    }
  ];

  // Section 3: Strategic Challenges (Qualitative Phrasing, Zero Numbers/Stats)
  const challenges = [
    {
      icon: GitBranch,
      tag: 'PROCESS VISIBILITY',
      title: 'Variant Explosion & Shadow Workarounds',
      desc: 'Standard operating procedures anticipate clean sequential steps, but real transaction logs reveal extensive unauthorized variant paths rife with unapproved spreadsheet workarounds.',
      footer: 'Uncontrolled Execution Drifts'
    },
    {
      icon: RefreshCw,
      tag: 'FINANCIAL IMPACT',
      title: 'Invoice Rework & Three-Way Match Friction',
      desc: 'Discrepancies between purchase orders, goods receipts, and vendor invoices trigger extensive email chains, delaying month-end close and forfeiting prompt-payment terms.',
      footer: 'Working Capital Erosion'
    },
    {
      icon: Clock,
      tag: 'CYCLE TIME',
      title: 'Lead-Time Inflation in Order-to-Cash',
      desc: 'Customer orders spend significant portions of their total lifecycle sitting idle in internal approval queues, credit check locks, or delivery block stages.',
      footer: 'Customer SLA Deficits'
    },
    {
      icon: AlertTriangle,
      tag: 'PROCUREMENT RISK',
      title: 'Maverick Spend & Retroactive Orders',
      desc: 'Requisitions bypass pre-approval agreements, forcing procurement teams into reactive payment approvals without contract volume pricing benefits.',
      footer: 'Governance & Contract Leakage'
    },
    {
      icon: Cpu,
      tag: 'AUTOMATION FOCUS',
      title: 'Automating Sub-Optimal Manual Tasks',
      desc: 'Organizations invest heavily in workflow bots that automate fundamentally inefficient or redundant tasks instead of eliminating root-cause procedural waste.',
      footer: 'Sub-Optimal Technology Yield'
    },
    {
      icon: Shield,
      tag: 'REGULATORY AUDIT',
      title: 'Segregation of Duties & Compliance Gaps',
      desc: 'Manual master-data edits, bypassed quality inspections, and emergency overrides expose the business to statutory audit findings and control gaps.',
      footer: 'Audit Exposure & Governance Risk'
    }
  ];

  // Section 5: Architecture Framework Layers (Qualitative Layers)
  const architectureLayers = [
    {
      layerNumber: '01',
      title: 'Enterprise Event Data Ingestion Layer',
      subtitle: 'Native Connectors, Change-Data Capture & Audited Log Streams',
      desc: 'Extracts timestamped event logs (Case ID, Activity, Timestamp, User, Status) across SAP S/4HANA (CDHDR, CDPOS, BKPF), Salesforce, ServiceNow, and legacy databases without transactional overhead.',
      tags: ['SAP S/4HANA CDC', 'OData & RFC Pipelines', 'Kafka Event Streaming', 'Delta Ingestion Fabric'],
      icon: Database,
      color: '#10B981',
      accentBg: 'bg-emerald-50',
      accentBorder: 'border-emerald-200',
      accentText: 'text-emerald-600',
      statusBadge: 'NON-INVASIVE INGESTION',
      flowOutput: 'Atomic Timestamped Event Stream'
    },
    {
      layerNumber: '02',
      title: 'Graph Transformation & Digital Process Twin Layer',
      subtitle: 'Petri Net Construction, Case Stitching & Timeline Normalization',
      desc: 'Stitches disparate transactional events across procurement, sales, and logistics into a continuous directed graph, establishing the living digital twin of enterprise operations.',
      tags: ['Case Key Stitching', 'Timestamp Disambiguation', 'Graph Database Normalization', 'Digital Process Twin'],
      icon: Cpu,
      color: '#00A3E0',
      accentBg: 'bg-cyan-50',
      accentBorder: 'border-cyan-200',
      accentText: 'text-cyan-600',
      statusBadge: 'DETERMINISTIC GRAPH',
      flowOutput: 'Directed Graph & Petri Net Topology'
    },
    {
      layerNumber: '03',
      title: 'Algorithmic Mining & Conformance Intelligence Layer',
      subtitle: 'Variant Clustering, Bottleneck Detection & Root-Cause Attribution',
      desc: 'Applies heuristic mining, conformance checking algorithms, and machine learning models to detect deviations from reference BPMN models and attribute latency to specific master data attributes.',
      tags: ['BPMN Conformance Scoring', 'Feature Attribution', 'Throughput Latency Math', 'Variant Clustering'],
      icon: Brain,
      color: '#6366F1',
      accentBg: 'bg-indigo-50',
      accentBorder: 'border-indigo-200',
      accentText: 'text-indigo-600',
      statusBadge: 'CONFORMANCE MINING',
      flowOutput: 'Process Deviation & Root-Cause Matrix'
    },
    {
      layerNumber: '04',
      title: 'Closed-Loop Autonomous Action & Orchestration Layer',
      subtitle: 'SAP BTP Integrations, RPA Triggers & Continuous Governance',
      desc: 'Translates process diagnostic insights into immediate operational execution, pushing automated order changes, triggering approval alerts, and feeding data directly into executive cockpits.',
      tags: ['SAP BTP Action Flows', 'Intelligent Robotic Automation', 'ERP Webhook Triggers', 'Continuous Process Auditing'],
      icon: Zap,
      color: '#0070C0',
      accentBg: 'bg-sky-50',
      accentBorder: 'border-sky-200',
      accentText: 'text-[#0070C0]',
      statusBadge: 'SAP BTP ORCHESTRATION',
      flowOutput: 'Automated S/4HANA Action Flows'
    }
  ];

  // Section 6: Modular Solutions Matrix (Clean Semantic Codes)
  const modularSolutions = [
    {
      category: 'O2C',
      categoryLabel: 'Order-to-Cash',
      icon: Workflow,
      tag: 'CORE-O2C',
      title: 'Order-to-Cash Friction Breaker & Touchless Order Suite',
      description: 'Isolates delivery blocks, credit holds, and pricing changes across the order lifecycle to maximize touchless order processing and accelerate cash collections.',
      highlights: ['Touchless Order Maximization', 'Automated Credit Hold Removal', 'Lead-Time Bottleneck Elimination']
    },
    {
      category: 'P2P',
      categoryLabel: 'Procure-to-Pay',
      icon: Database,
      tag: 'CORE-P2P',
      title: 'Procure-to-Pay Maverick Spend & Payment Terms Optimizer',
      description: 'Eliminates maverick buying, detects invoices issued before purchase orders, and ensures maximum capture of supplier early-payment cash discounts.',
      highlights: ['Retroactive PO Detection', 'Working Capital Optimization', 'Three-Way Matching Streamlining']
    },
    {
      category: 'R2R',
      categoryLabel: 'Record-to-Report',
      icon: BarChart3,
      tag: 'CORE-R2R',
      title: 'Record-to-Report Close Cycle Acceleration Hub',
      description: 'Uncovers manual journal entry rework, intercompany reconciliation delays, and period-end close friction to shorten month-end financial reporting cycles.',
      highlights: ['Close Cycle Variance Analysis', 'Manual Journal Attribution', 'Intercompany Bottleneck Tracing']
    },
    {
      category: 'SUPPLY_CHAIN',
      categoryLabel: 'Supply Chain & Logistics',
      icon: Factory,
      tag: 'CORE-LOGISTICS',
      title: 'Warehouse Operations & Logistics Turnaround Mining',
      description: 'Tracks picking, packing, staging, and freight dispatch latency to pinpoint yard congestion and reduce detention charges across distribution networks.',
      highlights: ['Dock-to-Stock Latency Reduction', 'Yard Congestion Elimination', 'On-Time Fulfillment Compliance']
    },
    {
      category: 'SERVICE',
      categoryLabel: 'IT & Shared Services',
      icon: Activity,
      tag: 'CORE-ITSM',
      title: 'ITSM & Shared Services Ticket Resolution Streamliner',
      description: 'Maps ticket ping-pong between support tiers, identifies repetitive escalation paths, and establishes clear targets for autonomous AI agent resolution.',
      highlights: ['Ticket Bounce Reduction', 'First-Contact Resolution Scoring', 'Agent Automation Identification']
    },
    {
      category: 'PLANT',
      categoryLabel: 'Asset Maintenance',
      icon: Cpu,
      tag: 'CORE-MAINT',
      title: 'Plant Maintenance Work Order Execution Governance',
      description: 'Mines plant maintenance notifications, spare-parts wait states, and permit-to-work approvals to maximize planned equipment uptime.',
      highlights: ['Spare-Parts Wait State Mining', 'Permit Latency Elimination', 'Maintenance Turnaround Optimization']
    }
  ];

  const categories = [
    { key: 'ALL', label: 'All Modules' },
    { key: 'O2C', label: 'Order-to-Cash' },
    { key: 'P2P', label: 'Procure-to-Pay' },
    { key: 'R2R', label: 'Record-to-Report' },
    { key: 'SUPPLY_CHAIN', label: 'Supply Chain' },
    { key: 'SERVICE', label: 'Shared Services' },
    { key: 'PLANT', label: 'Plant Maintenance' }
  ];

  // Section 8: Diagnostic Chamber Audit Data (Qualitative Insights, Zero Numbers/Stats)
  const diagnosticProcesses = {
    o2c: {
      id: 'o2c',
      tabLabel: 'Order-to-Cash (O2C)',
      title: 'Global Order Fulfillment & Revenue Recognition Audit',
      processInfo: 'Global Enterprise Sales Orders • Multi-Variant Path Matrix',
      conformanceLevel: 'HIGH LATENCY DETECTED • POLICY DEVIATION',
      riskBadgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/50 shadow-amber-500/10',
      recommendation: 'Deploy automated credit hold release on approved accounts and trigger SAP BTP auto-allocation to eliminate warehouse staging delays.',
      findings: [
        {
          level: 'CRITICAL BOTTLENECK',
          levelColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
          borderColor: 'border-rose-500/40 hover:border-rose-400',
          title: 'Manual Credit Block Release Loop',
          desc: 'High-value orders undergo repeated manual credit holds despite active customer credit insurance, inducing severe fulfillment delays.',
          source: 'Tables: VBAK, VBUK, KNKK • Repetitive Hold Loop'
        },
        {
          level: 'REWORK INEFFICIENCY',
          levelColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          borderColor: 'border-amber-500/40 hover:border-amber-400',
          title: 'Post-Confirmation Price Amendments',
          desc: 'Frequent sales order price modifications executed after order acknowledgment force systematic invoice cancellation and credit-memo cycles.',
          source: 'Tables: VBAP, CDPOS, VBRK • Pricing Rework Pattern'
        },
        {
          level: 'THROUGHPUT WIN',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Touchless Electronic Order Processing',
          desc: 'Standard electronic orders with automated delivery creation execute end-to-end touchlessly, serving as the enterprise benchmark flow.',
          source: 'Approved Standard Flow: Electronic Ingestion -> Delivery -> Billing'
        }
      ]
    },
    p2p: {
      id: 'p2p',
      tabLabel: 'Procure-to-Pay (P2P)',
      title: 'Procurement Compliance & Working Capital Velocity Audit',
      processInfo: 'Enterprise Procurement Transactions • Multi-Tier Invoicing Paths',
      conformanceLevel: 'CRITICAL POLICY VARIANCE • MAVERICK RISK',
      riskBadgeColor: 'bg-rose-500/20 text-rose-300 border-rose-400/50 shadow-rose-500/10',
      recommendation: 'Enforce pre-requisition catalog governance and auto-route invoice matching exceptions directly to supplier self-service portals.',
      findings: [
        {
          level: 'MAVERICK SPEND',
          levelColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
          borderColor: 'border-rose-500/40 hover:border-rose-400',
          title: 'Purchase Orders Created After Invoice Arrival',
          desc: 'Requisitions executed retroactively after supplier invoice receipt bypass pre-approval controls and forfeit negotiated contract volume pricing.',
          source: 'Tables: EKKO, RBKP, CDHDR • Retroactive Order Pattern'
        },
        {
          level: 'DISCOUNT LEAKAGE',
          levelColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          borderColor: 'border-amber-500/40 hover:border-amber-400',
          title: 'Forfeited Early-Payment Cash Discounts',
          desc: 'Prolonged internal invoice approval cycles consistently breach early-settlement prompt-payment discount windows with key suppliers.',
          source: 'Tables: BKPF, BSEG • Payment Terms Table'
        },
        {
          level: 'AUTOMATION TARGET',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Automated Three-Way Match Verification',
          desc: 'Standard purchase orders adhering to pre-set tolerance boundaries qualify for touchless automated posting via SAP BTP Document Processing.',
          source: 'Tables: EKPO, MSEG, RSEG • Automated Matching Candidate'
        }
      ]
    },
    r2r: {
      id: 'r2r',
      tabLabel: 'Record-to-Report (R2R)',
      title: 'Period-End Financial Close & Reconciliation Telemetry',
      processInfo: 'Period-End General Ledger Entries • Global Operating Entities',
      conformanceLevel: 'PERIOD-END SPIKE • RECONCILIATION BOTTLENECK',
      riskBadgeColor: 'bg-sky-500/20 text-sky-300 border-sky-400/50 shadow-sky-500/10',
      recommendation: 'Automate recurring intercompany balancing and introduce continuous daily subledger reconciliation to streamline financial close timelines.',
      findings: [
        {
          level: 'CLOSE DELAY',
          levelColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
          borderColor: 'border-rose-500/40 hover:border-rose-400',
          title: 'Intercompany Asymmetric Posting Discrepancies',
          desc: 'Currency conversion mismatches and unbalanced entries between multinational entities require extensive manual spreadsheet reconciliation during close windows.',
          source: 'Tables: BKPF, BSEG, TCURR • Asymmetric Postings'
        },
        {
          level: 'AUDIT RISK',
          levelColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          borderColor: 'border-amber-500/40 hover:border-amber-400',
          title: 'Manual Adjusting Journal Postings During Close',
          desc: 'High concentration of manual journal entries posted during final close hours without attached supporting digital workpapers.',
          source: 'Table: BKPF • Manual Journal Category'
        },
        {
          level: 'BEST PRACTICE',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Automated Fixed-Asset Depreciation Engine',
          desc: 'Fixed-asset subledger run executes systematically with automated General Ledger posting across all regional enterprise codes.',
          source: 'Transaction: Asset Depreciation Run • Standard Flow'
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">

      {/* =========================================================================
          SECTION 1: HERO SECTION (Full-Screen Panoramic Background - Aligned with AI Agents)
          ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">

        {/* Full-Bleed 16:9 Panoramic Image - Zero Cropping on Process Discovery & Mining Operations */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/process_discovery_mining_hero.jpg"
            alt="Enterprise Process Discovery & Mining Operations"
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center select-none contrast-[1.02]"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
        </div>

        {/* Lighter Directional Scrim for Maximum Visual Clarity & Text Contrast */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-xl space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="space-y-4">
              {/* Practice Pill Badge */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-md">
                  <Workflow className="w-3.5 h-3.5 text-cyan-400" />
                  <span>KNOOVIQ DIGITAL INTELLIGENCE &bull; PROCESS INTELLIGENCE</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-400">
                  Process Discovery &amp; Mining
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Ingest multi-system ERP transaction logs to reconstruct living digital process twins, isolate hidden bottlenecks, and measure conformance in real time.
              </p>
            </motion.div>

            {/* Enterprise Trust Indicators */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="pt-1 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Deterministic Event Traceability</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Native SAP S/4HANA Connector Mesh</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 shadow-lg">
                <Database className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Real-Time Conformance Scoring</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE PERSPECTIVE
          ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>EXECUTIVE ARCHITECTURE PERSPECTIVE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Illuminating Dark Processes & <span className="text-[#0070C0]">Operational Inefficiencies</span>
              </h2>
              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Enterprises don&rsquo;t fail from flawed strategies; they hemorrhage margin through hidden process deviations, manual rework loops, and untracked handoff friction.&rdquo;
                </p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Knooviq transforms transactional ERP change logs (`CDHDR`, `VBAK`, `EKKO`, `BKPF`) into living digital process twins. We replace guesswork with empirical fact, isolating exact points where cycle time stalls and compliance drifts.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Database className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Zero-Impact Transaction Ingestion</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Continuous Change Data Capture (CDC) from SAP S/4HANA without imposing any performance overhead on the transactional core.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Deterministic Conformance Scoring</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Automated conformance checking algorithms contrast live event sequences against standard reference models to flag non-compliant deviations.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Algorithmic Root-Cause Attribution</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Machine learning classifiers correlate throughput delays with specific plant locations, material groups, or vendor entities to drive targeted remediation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Console */}
            <div className="lg:col-span-6 space-y-3.5">
              <div 
                className="relative aspect-[16/10.5] sm:aspect-[1.5] w-full rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900 group cursor-pointer"
                onClick={() => setActiveJourneyStep((activeJourneyStep + 1) % journeySteps.length)}
                title="Click image to advance to next architecture step"
              >
                <img
                  src="/images/process_discovery_dark_factory.jpg"
                  alt="Illuminating Dark Processes & Operational Inefficiencies"
                  className="w-full h-full object-cover object-left sm:object-center select-none transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs font-mono font-bold text-cyan-300 shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <span>ACTIVE ARCHITECTURE: {journeySteps[activeJourneyStep].label.toUpperCase()}</span>
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
                      className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2.5 ${
                        isSelected
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
              <span>OPERATIONAL FRICTION & RISK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Hidden Frictions That Hemorrhage Corporate Margin
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Behind clean process flowcharts lie unapproved variants, maverick purchases, and manual rework loops that inflate cost.
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
          SECTION 4: CIRCULAR RADIAL WHEEL / DEEP INTERACTIVE ECOSYSTEM
          ========================================================================= */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#040711] text-white border-b border-slate-800/80 relative overflow-hidden">
        {/* Futuristic Cyber-Grid Background Pattern */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="processCyberGridClean" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(0, 163, 224, 0.4)" strokeWidth="0.8" />
                <circle cx="0" cy="0" r="1.5" fill="rgba(0, 229, 255, 0.6)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#processCyberGridClean)" />
          </svg>
        </div>

        {/* Ambient Aurora Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/10 via-indigo-600/10 to-emerald-500/10 blur-[130px] rounded-full pointer-events-none animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-20px" }} 
            transition={{ duration: 0.45 }} 
            className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2.5"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.12)]">
              <Workflow className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>KNOOVIQ RADIAL ARCHITECTURE &bull; PROCESS MINING MESH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Ecosystem for Continuous Process Discovery
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
              A synchronized radial platform uniting raw transaction log ingestion, digital twin synthesis, conformance checking, and automated closed-loop remediation.
            </p>

            {/* Live Synchronized Status Badge */}
            <div className="pt-1 flex flex-wrap items-center justify-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>ACTIVE MINING NODE: {wheelSegments[hoveredWheelIndex ?? 0].badge}</span>
              </div>
            </div>
          </motion.div>

          {/* DESKTOP LAYOUT (lg): Compact 3-Column Cockpit */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-5 items-center">
            
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
                    className={`px-3.5 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer relative overflow-hidden group backdrop-blur-md ${
                      isHovered
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
                      <div className="min-w-0 flex-1 space-y-0.5 text-left">
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
                        className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center border transition-all duration-200 ${
                          isHovered ? 'scale-110 shadow-md' : 'bg-white/5 border-white/10 text-slate-300'
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

            {/* Center Column: Radial Chevron Wheel with Core Reactor */}
            <div className="lg:col-span-4 flex justify-center items-center py-2 relative">
              <div className="absolute w-[330px] aspect-square rounded-full border border-cyan-500/10 pointer-events-none animate-spin" style={{ animationDuration: '60s' }} />
              <div className="absolute w-[360px] aspect-square rounded-full border border-dashed border-indigo-500/10 pointer-events-none animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />

              <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
                <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-[0_0_30px_rgba(0,163,224,0.15)] overflow-visible">
                  <defs>
                    <radialGradient id="processCenterReactorCoreClean" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#0B162C" />
                      <stop offset="70%" stopColor="#060C18" />
                      <stop offset="100%" stopColor="#03060D" />
                    </radialGradient>
                  </defs>

                  <circle cx="250" cy="250" r="236" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 6" />

                  {wheelSegments.map((seg, idx) => {
                    const isHovered = hoveredWheelIndex === idx;
                    const d = getChevronPath(idx);
                    const iconPos = getIconCoords(idx);
                    const IconComponent = seg.icon;
                    return (
                      <g 
                        key={seg.id} 
                        onMouseEnter={() => { if (!isAutoPlaying) setHoveredWheelIndex(idx); }} 
                        onMouseLeave={() => { if (!isAutoPlaying) setHoveredWheelIndex(null); }} 
                        onClick={() => {
                          setIsAutoPlaying(false);
                          setHoveredWheelIndex(isHovered ? null : idx);
                        }}
                        className="cursor-pointer transition-all duration-300"
                      >
                        <path 
                          d={d} 
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
                  <circle cx="250" cy="250" r="110" fill="url(#processCenterReactorCoreClean)" stroke="rgba(0, 163, 224, 0.4)" strokeWidth="2.5" />
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
                            KNOOVIQ MINING CORE
                          </div>
                          <div className="text-[9.5px] font-mono text-cyan-300">
                            Deterministic Graph Engine
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
                    className={`px-3.5 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer relative overflow-hidden group backdrop-blur-md ${
                      isHovered
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
                        className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center border transition-all duration-200 ${
                          isHovered ? 'scale-110 shadow-md' : 'bg-white/5 border-white/10 text-slate-300'
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
                <div 
                  key={item.id}
                  onClick={() => setHoveredWheelIndex(idx)}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-left space-y-2 hover:border-cyan-400 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/10" style={{ color: item.color }}>
                      {item.badge}
                    </span>
                    <ItemIcon className="w-4 h-4" style={{ color: item.color }} />
                  </div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  <div className="text-[10px] font-mono text-cyan-300 pt-1 border-t border-white/5">
                    {item.metric}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: ENTERPRISE ARCHITECTURE FRAMEWORK (Image 3)
          ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              <span>ENTERPRISE ARCHITECTURE FRAMEWORK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Enterprise Process Intelligence <span className="text-[#0070C0]">Architecture</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              A non-invasive, four-tier event fabric engineered for seamless interoperability with SAP S/4HANA, Salesforce, and multi-cloud data lakes without production overhead.
            </p>
          </div>

          {/* Architectural Digital Twin Graphic Showcase (Image 3) */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 relative group">
            <img
              src="/images/process_discovery_architecture_command.png"
              alt="Enterprise Process Intelligence Architecture Command Center"
              className="w-full h-[280px] sm:h-[380px] lg:h-[460px] object-cover object-center transform group-hover:scale-[1.01] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
            
            {/* Top-Right Telemetry Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-emerald-500/40 text-[11px] font-mono font-bold text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE PETRI-NET TOPOLOGY STREAM</span>
            </div>

            {/* Bottom Glass HUD Bar */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                  Living Enterprise Digital Process Twin &bull; Dynamic Petri-Net Construction
                </span>
                <p className="text-xs text-slate-300 max-w-2xl font-normal">
                  Continuous event graph reconstruction across SAP S/4HANA transactional tables (CDHDR, CDPOS, BKPF, VBAK) with zero transactional latency.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/30">
                  DETERMINISTIC &amp; CLEAN CORE
                </span>
              </div>
            </div>
          </div>

          {/* Architecture Pipeline Flow Banner */}
          <div className="hidden lg:grid grid-cols-4 gap-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-800 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-xs">
                01
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono uppercase text-slate-400">Phase 1</div>
                <div className="text-xs font-bold truncate text-emerald-300">CDC Log Ingestion</div>
              </div>
            </div>
            <div className="flex items-center gap-3 border-l border-slate-800 pl-4">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-xs">
                02
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono uppercase text-slate-400">Phase 2</div>
                <div className="text-xs font-bold truncate text-cyan-300">Digital Twin Synthesis</div>
              </div>
            </div>
            <div className="flex items-center gap-3 border-l border-slate-800 pl-4">
              <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-mono font-bold text-xs">
                03
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono uppercase text-slate-400">Phase 3</div>
                <div className="text-xs font-bold truncate text-indigo-300">Conformance Mining</div>
              </div>
            </div>
            <div className="flex items-center gap-3 border-l border-slate-800 pl-4">
              <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center font-mono font-bold text-xs">
                04
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono uppercase text-slate-400">Phase 4</div>
                <div className="text-xs font-bold truncate text-sky-300">Closed-Loop Action</div>
              </div>
            </div>
          </div>

          {/* 4 Architectural Layers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
            {architectureLayers.map((layer) => {
              const LayerIcon = layer.icon;
              return (
                <div
                  key={layer.layerNumber}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0070C0] hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-3 group"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className={`w-9 h-9 rounded-lg ${layer.accentBg} border ${layer.accentBorder} flex items-center justify-center ${layer.accentText} group-hover:bg-[#0070C0] group-hover:text-white group-hover:border-[#0070C0] transition-colors duration-300 shadow-xs`}>
                        <LayerIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                        LAYER {layer.layerNumber}
                      </span>
                    </div>

                    <div className="space-y-0.5">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider" style={{ color: layer.color }}>
                        {layer.statusBadge}
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0070C0] transition-colors leading-snug">
                        {layer.title}
                      </h3>
                      <div className="text-[11px] font-medium text-slate-500">
                        {layer.subtitle}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
                      {layer.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2.5 border-t border-slate-100">
                    <div className="px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-100/80 flex items-center gap-1.5 text-[10.5px] font-mono font-bold text-slate-800">
                      <ArrowRight className="w-3 h-3 text-[#0070C0] shrink-0" />
                      <span className="truncate">{layer.flowOutput}</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {layer.tags.slice(0, 3).map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-1.5 py-0.5 rounded text-[9.5px] font-mono font-medium bg-slate-50 text-slate-600 border border-slate-200"
                        >
                          {t}
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
          SECTION 6: MODULAR USE CASES (Pre-Configured Solutions Matrix)
          ========================================================================= */}
      <section id="process-solutions" className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-slate-200 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Boxes className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PRE-CONFIGURED INTELLIGENCE MODULES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Pre-Built Process Mining Accelerators
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Domain-specific process discovery models pre-mapped to SAP S/4HANA transactional tables and standard industry value streams.
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
                  className={`industry-category-tab px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-[#0070C0] text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Modular Cards Grid */}
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
      <section className="py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-sky-50/30 to-white border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>STRATEGIC OPERATIONAL OUTCOMES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Enterprise Value Delivered at Scale
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Architectural and governance outcomes realized across global manufacturing, logistics, and corporate shared services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm hover:border-[#0070C0] transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center border border-sky-200">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-black text-slate-950">Accelerated Cycle Velocity</div>
                  <div className="text-xs font-semibold text-[#0070C0]">Continuous Lead-Time Compression</div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Eliminates procedural wait states, queues, and cross-functional friction across Order-to-Cash and Procure-to-Pay fulfillment pipelines.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                VELOCITY GAIN
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm hover:border-[#0070C0] transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-black text-slate-950">Deterministic Governance</div>
                  <div className="text-xs font-semibold text-emerald-600">Policy Conformance & SOX Assurance</div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Replaces unapproved spreadsheet bypasses and shadow workflows with fully audited, compliant standard execution paths.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                COMPLIANCE INTEGRITY
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm hover:border-[#0070C0] transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-200">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-black text-slate-950">Working Capital Protection</div>
                  <div className="text-xs font-semibold text-cyan-600">Frictionless Invoicing & Cash Capture</div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Ensures timely capture of supplier payment terms discounts, prevents overpayments, and halts revenue leakage across invoicing.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                CAPITAL PROTECTION
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm hover:border-[#0070C0] transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-200">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-black text-slate-950">Targeted Automation Focus</div>
                  <div className="text-xs font-semibold text-indigo-600">Evidence-Based Transformation</div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Pinpoints high-yield workflow candidates for robotic and AI automation based on empirical execution evidence rather than assumptions.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                AUTOMATION YIELD
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: PROCESS DIAGNOSTIC CHAMBER (Interactive Live Benchmarking - Zero Numbers/Stats)
          ========================================================================= */}
      <section className="py-7 sm:py-9 bg-gradient-to-b from-[#050C18] via-[#09152B] to-[#040A14] border-b border-slate-800 relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-5 sm:mb-6 space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/90 border border-cyan-400/50 text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>LIVE PROCESS DIAGNOSTIC CHAMBER</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Interactive Value-Stream Diagnostic Telemetry
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-normal">
              Simulating live enterprise event log ingestion across core transaction value streams to identify deviations and root causes.
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
                        className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                          isSelected
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
                  <AlertTriangle className="w-3 h-3 shrink-0" />
                  <span>{diagnosticProcesses[activeProcessTab].conformanceLevel}</span>
                </div>
              </div>
            </div>

            {/* Showcase Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
              
              {/* Left Column: Visual Process Discovery Scan (Image 4) */}
              <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-cyan-400/40 shadow-lg group min-h-[260px] sm:min-h-[300px] lg:min-h-full">
                <img
                  src="/images/process_discovery_diagnostic.jpg"
                  alt="Process Mining Diagnostic Telemetry Graph"
                  className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-cyan-400/50 text-[10px] font-mono font-bold text-cyan-300 flex items-center gap-1.5 z-10 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Graph Mining &bull; Change-Log Provenance</span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/15 text-white text-left z-10 space-y-0.5">
                  <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                    PRESCRIPTIVE RECOMMENDATION
                  </span>
                  <div className="text-xs font-bold text-emerald-300">
                    {diagnosticProcesses[activeProcessTab].recommendation}
                  </div>
                </div>
              </div>

              {/* Right Column: Algorithmic Findings Cards */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-2.5">
                {diagnosticProcesses[activeProcessTab].findings.map((f, fIdx) => (
                  <div
                    key={fIdx}
                    className={`p-3.5 rounded-xl border bg-slate-950/70 backdrop-blur-md transition-all text-left space-y-1.5 ${f.borderColor}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${f.levelColor}`}>
                        {f.level}
                      </span>
                      <span className="text-[10px] font-mono text-cyan-300/80">
                        {f.source}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {f.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                ))}
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
            Ready to Uncover Dark Processes and Maximize ERP Yield?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Partner with KNOOVIQ&rsquo;s Process Intelligence practice to perform a comprehensive event log diagnostic of your high-impact business value streams.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenContact ? onOpenContact('Process Discovery & Mining Consultation') : undefined}
              className="px-8 py-4 rounded-xl bg-white text-[#003B73] font-black text-sm tracking-wide shadow-xl hover:bg-sky-50 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>REQUEST PROCESS MINING DIAGNOSTIC</span>
              <ArrowRight className="w-4 h-4 text-[#003B73]" />
            </button>

            <Link
              to="/digital-intelligence/process-mining"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all flex items-center gap-2 group"
            >
              <span>Explore Process Mining</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
