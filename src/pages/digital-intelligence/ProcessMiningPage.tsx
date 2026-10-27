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

interface ProcessMiningPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const ProcessMiningPage: React.FC<ProcessMiningPageProps> = ({
  onOpenContact
}) => {
  // Update document title for SEO
  useEffect(() => {
    document.title = 'Process Mining & Execution Intelligence | Digital Intelligence | KNOOVIQ';
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

  // Section 4: Circular Radial Wheel (KNOOVIQ Process Mining Ecosystem - Zero Numbers/Stats)
  const wheelSegments = [
    {
      id: 'universal-ingestion',
      shortTag: 'INGEST',
      title: 'Universal Transaction Log Ingestion',
      desc: 'Capture real-time event logs, change documents, and audit trails across enterprise applications without system lag',
      badge: 'TRANSACTION LOG CAPTURE',
      metric: 'Zero-Impact Continuous Streaming',
      side: 'right',
      color: '#22C55E',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(34, 197, 94, 0.35)',
      icon: Database
    },
    {
      id: 'ocpm-mesh',
      shortTag: 'OCPM',
      title: 'Object-Centric Process Mining Mesh',
      desc: 'Interlink multi-dimensional business objects into a continuous directed graph to capture cross-entity relationships',
      badge: 'OBJECT-CENTRIC GRAPH',
      metric: 'Multi-Object Event Correlation',
      side: 'right',
      color: '#00A3E0',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(0, 163, 224, 0.35)',
      icon: Layers
    },
    {
      id: 'conformance-audit',
      shortTag: 'CONFORM',
      title: 'Automated Conformance Checking',
      desc: 'Continuously benchmark actual transaction flows against standardized reference models and governance protocols',
      badge: 'CONFORMANCE ENGINE',
      metric: 'Policy Deviation Scoring',
      side: 'right',
      color: '#EAB308',
      textColor: 'text-yellow-400',
      bgGlow: 'rgba(234, 179, 8, 0.35)',
      icon: ShieldCheck
    },
    {
      id: 'throughput-mining',
      shortTag: 'THROUGHPUT',
      title: 'Throughput & Dwell Time Analysis',
      desc: 'Expose hidden delays and stage-gate queue times between departments to streamline end-to-end cycle velocity',
      badge: 'LATENCY HEATMAP',
      metric: 'Stage-Gate Dwell Identification',
      side: 'right',
      color: '#F97316',
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.35)',
      icon: Clock
    },
    {
      id: 'root-cause-ai',
      shortTag: 'ROOT-CAUSE',
      title: 'AI Anomaly & Feature Attribution',
      desc: 'Machine learning algorithms correlate operational friction with specific customer tiers, suppliers, and transaction parameters',
      badge: 'FEATURE ATTRIBUTION',
      metric: 'Algorithmic Cause Discovery',
      side: 'left',
      color: '#F43F5E',
      textColor: 'text-rose-400',
      bgGlow: 'rgba(244, 63, 94, 0.35)',
      icon: Brain
    },
    {
      id: 'simulation',
      shortTag: 'SIMULATE',
      title: 'Predictive Process Simulation',
      desc: 'Simulate workflow changes and staffing reallocations in a virtual sandbox before implementing operational changes',
      badge: 'DIGITAL SANDBOX',
      metric: 'Scenario Impact Modeling',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: Workflow
    },
    {
      id: 'task-mining',
      shortTag: 'TASK',
      title: 'Hybrid Task & Desktop Mining',
      desc: 'Capture user interaction telemetry across productivity tools and custom portals to bridge system and user workflows',
      badge: 'TASK TELEMETRY',
      metric: 'Manual Interaction Discovery',
      side: 'left',
      color: '#A855F7',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(168, 85, 247, 0.35)',
      icon: Eye
    },
    {
      id: 'action-engine',
      shortTag: 'ACTION',
      title: 'Closed-Loop Action Orchestration',
      desc: 'Automatically trigger corrective actions, ERP updates, and workflow tasks the moment process deviations are detected',
      badge: 'CLOSED-LOOP REMEDIATION',
      metric: 'Automated Transaction Signals',
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
      label: 'Event Stream Ingestion',
      sublabel: 'Change Document Capture',
      tech: 'Enterprise ERP Connectors & Real-Time Streams',
      desc: 'Continuously extracts transaction logs and status changes from SAP S/4HANA and peripheral applications without operational impact.',
      icon: Database
    },
    {
      id: 'step-2',
      label: 'Object Graph Mining',
      sublabel: 'Multi-Object Correlation',
      tech: 'Object-Centric Process Mining Architecture',
      desc: 'Interlinks disparate transactional entities—orders, shipments, invoices, and payments—into a holistic operational process graph.',
      icon: Layers
    },
    {
      id: 'step-3',
      label: 'Conformance Audit',
      sublabel: 'Reference Model Verification',
      tech: 'BPMN Conformance Rules & Control Frameworks',
      desc: 'Continuously benchmarks observed execution sequences against approved operational standards to identify non-compliant process flows.',
      icon: ShieldCheck
    },
    {
      id: 'step-4',
      label: 'Root-Cause Analysis',
      sublabel: 'Algorithmic Anomaly Detection',
      tech: 'Machine Learning Classification & Feature Analysis',
      desc: 'Correlates lead-time inflation and rework loops with underlying factors such as vendor profiles, order types, and regional centers.',
      icon: Brain
    },
    {
      id: 'step-5',
      label: 'Process Simulation',
      sublabel: 'Operational Digital Sandbox',
      tech: 'Predictive Modeling & Scenario Testing',
      desc: 'Tests operational modifications, automation deployments, and resource adjustments in a risk-free virtual environment prior to production.',
      icon: Workflow
    },
    {
      id: 'step-6',
      label: 'Autonomous Action',
      sublabel: 'Closed-Loop Execution',
      tech: 'SAP BTP Integrations & Automated Triggers',
      desc: 'Initiates immediate corrective actions directly in core enterprise systems—unblocking orders, routing approvals, and updating master records.',
      icon: Zap
    }
  ];

  // Section 3: Strategic Challenges (Qualitative Phrasing, Zero Numbers/Stats)
  const challenges = [
    {
      icon: GitBranch,
      tag: 'PROCESS VISIBILITY',
      title: 'Cross-Object Process Complexity',
      desc: 'Traditional single-case analysis fails in complex enterprise environments where sales orders fragment across multiple deliveries and consolidated invoices.',
      footer: 'Multi-Object Disconnect'
    },
    {
      icon: RefreshCw,
      tag: 'OPERATIONAL FRICTION',
      title: 'Rework Loops & Manual Interventions',
      desc: 'Discrepancies in billing, missing master data, and post-confirmation changes trigger recurring cycles of manual review and reconciliation.',
      footer: 'Fulfillment Inefficiency'
    },
    {
      icon: Clock,
      tag: 'CYCLE VELOCITY',
      title: 'Prolonged Stage-Gate Dwell Times',
      desc: 'Transactions spend extended durations idling between organizational handoffs, inflating lead times and delaying revenue recognition.',
      footer: 'Operational Latency'
    },
    {
      icon: AlertTriangle,
      tag: 'SPEND GOVERNANCE',
      title: 'Maverick Spend & Contract Non-Compliance',
      desc: 'Purchases initiated outside approved catalog channels bypass negotiated supplier pricing and introduce compliance risks across procurement.',
      footer: 'Contractual Leakage'
    },
    {
      icon: Cpu,
      tag: 'AUTOMATION ALIGNMENT',
      title: 'Disconnected Automation Investments',
      desc: 'Deploying automated workflows without baseline process intelligence risks accelerating broken and inefficient business processes.',
      footer: 'Technology Misalignment'
    },
    {
      icon: Shield,
      tag: 'GOVERNANCE AUDIT',
      title: 'Control Gaps & Regulatory Exposure',
      desc: 'Unapproved execution shortcuts and missing segregation-of-duties verifications expose organizations to severe compliance findings.',
      footer: 'Audit Vulnerability'
    }
  ];

  // Section 5: Architecture Framework Layers (Qualitative Layers)
  const architectureLayers = [
    {
      title: 'Multi-System Event Extraction Layer',
      subtitle: 'Native Connectors, Change-Data Capture & Audited Log Streams',
      desc: 'Extracts timestamped event logs across SAP S/4HANA, Salesforce, ServiceNow, and custom enterprise databases without performance degradation on production systems.',
      tags: ['SAP S/4HANA CDC', 'OData & RFC Pipelines', 'Kafka Event Streaming', 'Delta Ingestion Fabric']
    },
    {
      title: 'Object-Centric Graph Transformation Layer',
      subtitle: 'Multi-Object Relationship Synthesis & Timeline Harmonization',
      desc: 'Stitches disparate transactional entities across procurement, manufacturing, and distribution into a continuous directed graph, establishing the living digital process twin.',
      tags: ['Multi-Object Correlation', 'Timeline Normalization', 'Graph Database Modeling', 'Digital Process Twin']
    },
    {
      title: 'Algorithmic Mining & Conformance Engine Layer',
      subtitle: 'Variant Clustering, Bottleneck Detection & Machine Learning Diagnostics',
      desc: 'Applies heuristic mining, conformance algorithms, and predictive models to isolate deviations from standard reference flows and attribute root causes.',
      tags: ['BPMN Conformance Scoring', 'Feature Attribution', 'Dwell Time Analytics', 'Variant Clustering']
    },
    {
      title: 'Closed-Loop Action & Execution Layer',
      subtitle: 'SAP BTP Integrations, RPA Triggers & Operational Orchestration',
      desc: 'Converts process insights into real-time operational execution, pushing automated updates, routing exception tasks, and informing executive decision-makers.',
      tags: ['SAP BTP Action Flows', 'Intelligent Robotic Automation', 'ERP Webhook Triggers', 'Continuous Process Auditing']
    }
  ];

  // Section 6: Modular Solutions Matrix (Clean Semantic Codes)
  const modularSolutions = [
    {
      category: 'O2C',
      categoryLabel: 'Order-to-Cash',
      icon: Workflow,
      tag: 'MINE-O2C',
      title: 'Order-to-Cash Execution & Revenue Assurance Suite',
      description: 'Streamlines customer order fulfillment, minimizes manual delivery blocks, and eliminates billing rework to accelerate cash realization.',
      highlights: ['Touchless Fulfillment Maximization', 'Automated Block Resolution', 'Lead-Time Bottleneck Elimination']
    },
    {
      category: 'P2P',
      categoryLabel: 'Procure-to-Pay',
      icon: Database,
      tag: 'MINE-P2P',
      title: 'Procure-to-Pay Working Capital & Spend Governance Suite',
      description: 'Eliminates maverick buying, detects retroactive purchase orders, and optimizes supplier payment schedules to capture early-settlement advantages.',
      highlights: ['Retroactive Requisition Detection', 'Payment Terms Optimization', 'Three-Way Match Automation']
    },
    {
      category: 'R2R',
      categoryLabel: 'Record-to-Report',
      icon: BarChart3,
      tag: 'MINE-R2R',
      title: 'Financial Close Acceleration & Subledger Conformance Suite',
      description: 'Isolates manual journal entry rework, streamlines intercompany reconciliation, and compresses period-end financial reporting windows.',
      highlights: ['Close Cycle Variance Analysis', 'Manual Journal Attribution', 'Intercompany Bottleneck Tracing']
    },
    {
      category: 'SUPPLY_CHAIN',
      categoryLabel: 'Supply Chain & Logistics',
      icon: Factory,
      tag: 'MINE-LOGISTICS',
      title: 'Supply Chain Lead-Time & Warehouse Operations Miner',
      description: 'Monitors inbound receiving, order picking, staging, and dispatch to eliminate distribution yard delays and uphold delivery commitments.',
      highlights: ['Dock-to-Stock Latency Reduction', 'Yard Congestion Elimination', 'On-Time Fulfillment Compliance']
    },
    {
      category: 'SERVICE',
      categoryLabel: 'IT & Shared Services',
      icon: Activity,
      tag: 'MINE-ITSM',
      title: 'ITSM & Shared Services Workflow Optimizer',
      description: 'Identifies ticket escalation loops, redundant reassignment paths, and high-frequency inquiries suited for autonomous AI agent resolution.',
      highlights: ['Escalation Loop Reduction', 'First-Contact Resolution Scoring', 'Agent Automation Identification']
    },
    {
      category: 'ASSET',
      categoryLabel: 'Plant & Asset Reliability',
      icon: Cpu,
      tag: 'MINE-ASSET',
      title: 'Plant Asset Reliability & Work Order Execution Miner',
      description: 'Analyzes maintenance request processing, spare-parts procurement delays, and work order completion to maximize industrial asset uptime.',
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
    { key: 'ASSET', label: 'Asset Reliability' }
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
      <section className="relative w-full min-h-[580px] sm:min-h-[620px] lg:h-[660px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">

        {/* Full-Bleed Panoramic Image - 100% Uncut Process Mining Operations */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/process_mining_execution_hero.jpg"
            alt="Enterprise Process Mining & Automated Execution"
            className="w-full h-full object-cover object-right select-none"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
        </div>

        {/* Lighter Directional Scrim - Reduced Blue Shade for Maximum Image Clarity */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-xl space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="space-y-4">
              {/* Practice Pill Badge */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-md">
                  <Workflow className="w-3.5 h-3.5 text-cyan-400" />
                  <span>KNOOVIQ DIGITAL INTELLIGENCE &bull; PROCESS MINING &amp; EXECUTION</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-400">
                  Process Mining &amp; Execution
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Transform enterprise transaction trails into actionable operational intelligence. Bridge SAP S/4HANA systems, uncover systemic friction points, and automate closed-loop process execution.
              </p>
            </motion.div>

            {/* Enterprise Trust Indicators */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="pt-1 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Object-Centric Event Graph Mining</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Deterministic Policy Conformance Engine</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 shadow-lg">
                <Database className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Closed-Loop Autonomous Action Fabric</span>
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
                Transitioning from Process Visibility to <span className="text-[#0070C0]">Autonomous Optimization</span>
              </h2>
              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Process mining is no longer a diagnostic snapshot; it is an active operational nervous system that detects workflow anomalies and triggers real-time execution remediation.&rdquo;
                </p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Knooviq elevates process mining from passive analysis to continuous operational action. By interlinking multi-object transactional data across ERP cores, supply chain systems, and digital customer channels, we empower teams to eliminate operational debt systematically.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Database className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Object-Centric Process Mining</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Transcends traditional single-identifier limitations by modeling one-to-many and many-to-many relationships across business objects.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Automated Conformance Checking</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Compares real-world execution against authorized standard operating procedures to flag non-compliant steps and audit deviations.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Closed-Loop Action Execution</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Connects mining telemetry directly with SAP BTP, RPA agents, and API webhooks to trigger immediate resolution workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Console */}
            <div className="lg:col-span-6 space-y-3.5">
              <div 
                className="relative h-96 sm:h-[440px] lg:h-[490px] w-full rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900 group cursor-pointer"
                onClick={() => setActiveJourneyStep((activeJourneyStep + 1) % journeySteps.length)}
                title="Click image to advance to next architecture step"
              >
                <img
                  src="/images/process_mining_visibility_optimization.png"
                  alt="Transitioning from Process Visibility to Autonomous Optimization"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs font-mono font-bold text-cyan-300 shadow-sm flex items-center gap-2">
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
              Operational Vulnerabilities Across Enterprise Flows
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Siloed departmental systems and unmonitored execution pathways compound operational waste and diminish profitability.
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
          SECTION 4: CIRCULAR RADIAL CHEVRON WHEEL / ECOSYSTEM RADAR
          ========================================================================= */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#040711] text-white border-b border-slate-800/80 relative overflow-hidden">
        {/* Futuristic Cyber-Grid Background Pattern */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="processMiningGrid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(0, 163, 224, 0.4)" strokeWidth="0.8" />
                <circle cx="0" cy="0" r="1.5" fill="rgba(0, 229, 255, 0.6)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#processMiningGrid)" />
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
              Ecosystem for Continuous Process Mining
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
              A synchronized radial platform uniting multi-object event log ingestion, digital twin synthesis, conformance checking, and automated closed-loop remediation.
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
                    <radialGradient id="processMiningReactorCore" cx="50%" cy="50%" r="50%">
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
                  <circle cx="250" cy="250" r="110" fill="url(#processMiningReactorCore)" stroke="rgba(0, 163, 224, 0.4)" strokeWidth="2.5" />
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
                            KNOOVIQ MINING ENGINE
                          </div>
                          <div className="text-[9.5px] font-mono text-cyan-300">
                            Object-Centric Execution Mesh
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
          SECTION 5: ENTERPRISE ARCHITECTURE LAYERS
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Layers className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>ENTERPRISE ARCHITECTURE FRAMEWORK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Enterprise Process Mining Architecture
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Engineered for seamless interoperability with SAP S/4HANA, Salesforce, and multi-cloud data lakes without production overhead.
            </p>
          </div>

          {/* Architectural Conformance Matrix Showcase (Image 3 - Compact & Crystal Clear) */}
          <div className="max-w-4xl lg:max-w-4xl mx-auto mb-10 rounded-2xl overflow-hidden border-2 border-slate-200 bg-slate-950 shadow-xl group">
            {/* Top Command Bar */}
            <div className="px-4 py-2.5 border-b border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-2.5 text-xs">
              <div className="flex items-center gap-2 font-mono font-bold text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>ENTERPRISE PROCESS MINING ARCHITECTURE</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Continuous Petri-Net Synchronization &bull; Closed-Loop Telemetry</span>
              </div>
            </div>

            {/* Visual Image - Scaled down neatly in width & height, 100% uncut and clear */}
            <div className="relative w-full bg-slate-950 flex items-center justify-center p-2 sm:p-2.5">
              <img
                src="/images/process_mining_architecture_deepseek.jpg"
                alt="Enterprise Process Mining Architecture Operations Command Center"
                className="w-full h-auto max-h-[360px] sm:max-h-[400px] object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.01] filter brightness-105 contrast-105"
              />
            </div>

            {/* Bottom HUD Bar */}
            <div className="px-4 py-3 border-t border-slate-800 bg-slate-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-white">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block">
                  Algorithmic Deviation Auditing &bull; DeepSeek V3 AI Reasoning Core
                </span>
                <span className="font-semibold text-slate-200 text-xs">
                  Automated Event Stream Extraction, Conformance Checking & Autonomous Process Optimization
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 text-[11px] font-mono font-bold border border-cyan-500/30">
                  High-Throughput Ingestion
                </span>
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
      <section id="process-mining-solutions" className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-slate-200 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Boxes className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PRE-CONFIGURED MINING MODULES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Pre-Built Process Mining Accelerators
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Domain-specific process mining models pre-mapped to SAP S/4HANA transactional tables and standard enterprise value streams.
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
              <span>LIVE PROCESS MINING DIAGNOSTIC CHAMBER</span>
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
              
              {/* Left Column: Visual Process Mining Scan (Image 4) */}
              <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-cyan-400/40 shadow-lg group min-h-[260px] sm:min-h-[300px] lg:min-h-full">
                <img
                  src="/images/process_mining_root_cause.jpg"
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
            Ready to Accelerate Operational Velocity with Enterprise Process Mining?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Partner with KNOOVIQ&rsquo;s Process Intelligence practice to perform a comprehensive event log diagnostic of your high-impact business value streams.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenContact ? onOpenContact('Process Mining & Execution Consultation') : undefined}
              className="px-8 py-4 rounded-xl bg-white text-[#003B73] font-black text-sm tracking-wide shadow-xl hover:bg-sky-50 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>REQUEST PROCESS MINING DIAGNOSTIC</span>
              <ArrowRight className="w-4 h-4 text-[#003B73]" />
            </button>

            <Link
              to="/digital-intelligence/process-monitoring"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all flex items-center gap-2 group"
            >
              <span>Explore Process Monitoring</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
