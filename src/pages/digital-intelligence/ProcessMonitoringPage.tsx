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
  Maximize2,
  X
} from 'lucide-react';

interface ProcessMonitoringPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const ProcessMonitoringPage: React.FC<ProcessMonitoringPageProps> = ({
  onOpenContact
}) => {
  // Update document title for SEO
  useEffect(() => {
    document.title = 'Continuous Process Monitoring & Execution Radar | Digital Intelligence | KNOOVIQ';
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

  // Section 4: Circular Radial Wheel (Continuous Process Monitoring Ecosystem - Zero Numbers/Stats)
  const wheelSegments = [
    {
      id: 'stream',
      shortTag: 'STREAM',
      title: 'Real-Time Event Stream Listening',
      desc: 'Non-invasive change-data capture listening continuously to transactional state changes across SAP S/4HANA and cloud systems',
      badge: 'LIVE CDC INGESTION',
      metric: 'Zero Latency Event Pipeline',
      side: 'right',
      color: '#00A3E0',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(0, 163, 224, 0.35)',
      icon: Database
    },
    {
      id: 'radar',
      shortTag: 'RADAR',
      title: 'Live Petri-Net State Tracking',
      desc: 'Real-time positioning of active cases against standard reference models to monitor process velocity and queue health',
      badge: 'STATE REPLAY ENGINE',
      metric: 'Continuous Execution Replay',
      side: 'right',
      color: '#0070C0',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(0, 112, 192, 0.35)',
      icon: Workflow
    },
    {
      id: 'drift',
      shortTag: 'DRIFT',
      title: 'Dynamic Conformance & Drift Radar',
      desc: 'Algorithmic surveillance contrasting active transaction steps against compliant business rules to flag deviations immediately',
      badge: 'POLICY DRIFT IDENTIFICATION',
      metric: 'Real-Time Compliance Guard',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.35)',
      icon: Activity
    },
    {
      id: 'alert',
      shortTag: 'ALERT',
      title: 'Predictive SLA Breach Interception',
      desc: 'Machine learning lead-time models identifying dwell latency to alert operations before commitments are breached',
      badge: 'PREEMPTIVE INTERCEPTION',
      metric: 'Early Warning Notification',
      side: 'right',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.35)',
      icon: AlertTriangle
    },
    {
      id: 'triage',
      shortTag: 'TRIAGE',
      title: 'Autonomous Incident Categorization',
      desc: 'Instant classification of process exceptions and intelligent routing to responsible business owners or automated agents',
      badge: 'EXCEPTION ROUTING',
      metric: 'Algorithmic Escalation',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: Sliders
    },
    {
      id: 'action',
      shortTag: 'ACTION',
      title: 'Closed-Loop ERP Remediation',
      desc: 'Automated removal of delivery blocks, credit hold adjustments, and master data updates pushed directly via SAP BTP',
      badge: 'DIRECT ERP EXECUTION',
      metric: 'Zero-Touch Resolution Flow',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.35)',
      icon: Zap
    },
    {
      id: 'verify',
      shortTag: 'VERIFY',
      title: 'Post-Remediation Conformance Audit',
      desc: 'Automatic verification that corrective actions successfully returned the case to standard compliant execution',
      badge: 'VERIFIED RECOVERY',
      metric: 'Empirical Verification Loop',
      side: 'left',
      color: '#06B6D4',
      textColor: 'text-cyan-300',
      bgGlow: 'rgba(6, 182, 212, 0.35)',
      icon: ShieldCheck
    },
    {
      id: 'govern',
      shortTag: 'GOVERN',
      title: 'Continuous Board-Level Telemetry',
      desc: 'Executive cockpit telemetry visualizing cross-functional process health, regulatory adherence, and operational velocity',
      badge: 'EXECUTIVE VISIBILITY',
      metric: 'Unified Process Governance',
      side: 'left',
      color: '#3B82F6',
      textColor: 'text-blue-400',
      bgGlow: 'rgba(59, 130, 246, 0.35)',
      icon: BarChart3
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
      label: '01 Event Streaming',
      sublabel: 'Continuous CDC Capture',
      desc: 'Extract timestamped event signals from SAP S/4HANA change tables without transactional system degradation.',
      tech: 'SAP RFC • Change Data Capture • Kafka Ingestion Fabric',
      icon: Database
    },
    {
      id: 'step-2',
      label: '02 Live Graph Replay',
      sublabel: 'Petri-Net State Tracking',
      desc: 'Track individual case journeys through the living process topology in real time, validating active execution stages.',
      tech: 'In-Memory State Machine • Directed Graph Database • Dynamic Token Replay',
      icon: Workflow
    },
    {
      id: 'step-3',
      label: '03 Anomaly & Drift Radar',
      sublabel: 'Real-Time Conformance Audit',
      desc: 'Detect procedural deviations, skipped mandatory approvals, and queue dwells the instant they occur in production.',
      tech: 'Algorithmic Conformance Checking • Reference BPMN Guard • Anomaly Classifiers',
      icon: Activity
    },
    {
      id: 'step-4',
      label: '04 Intelligent Exception Triage',
      sublabel: 'Automated Priority Routing',
      desc: 'Classify incoming process alerts by business impact, risk profile, and customer tier to drive targeted intervention.',
      tech: 'Heuristic Impact Scoring • Intelligent Work Queues • SLA Escalation Routing',
      icon: AlertTriangle
    },
    {
      id: 'step-5',
      label: '05 Closed-Loop Remediation',
      sublabel: 'Automated Action Triggers',
      desc: 'Trigger immediate operational fixes in core ERP, such as automated credit unblocking, master data adjustments, and re-allocations.',
      tech: 'SAP BTP Action Flows • Robotic Task Automation • Bi-Directional OData APIs',
      icon: Zap
    },
    {
      id: 'step-6',
      label: '06 Continuous Telemetry',
      sublabel: 'Executive Health Cockpits',
      desc: 'Empower executive leadership with continuous real-time process radar across all global operating units.',
      tech: 'Unified Process Radar • Real-Time KPI Dashboards • Conformance Health Index',
      icon: BarChart3
    }
  ];

  // Section 3: Strategic Enterprise Challenges (Qualitative Frictions)
  const challenges = [
    {
      icon: Clock,
      tag: 'LATENCY DRIFT',
      title: 'Silent SLA Attrition in Approval Queues',
      desc: 'Critical customer orders and vendor invoices sit unmonitored in internal departmental approval queues, quietly eroding delivery SLAs.',
      footer: 'Fulfillment Velocity Deficits'
    },
    {
      icon: AlertTriangle,
      tag: 'POLICY DRIFT',
      title: 'Undetected Workarounds & Procedural Drift',
      desc: 'Operational personnel circumvent standard controls to meet tactical deadlines, introducing untracked risk and compliance vulnerabilities.',
      footer: 'Governance & Compliance Erosion'
    },
    {
      icon: GitBranch,
      tag: 'FRICTION PROPAGATION',
      title: 'Cascading Bottleneck Propagation',
      desc: 'Unresolved upstream delays in credit approvals or warehouse staging cascade exponentially into missed shipping windows.',
      footer: 'Compounding Supply Chain Friction'
    },
    {
      icon: Search,
      tag: 'REACTIVE AUDITING',
      title: 'Post-Facto Discovery of Process Breakdowns',
      desc: 'Organizations discover broken workflows weeks after the fact during monthly close or customer escalation rather than in real time.',
      footer: 'Reactive Operational Overhead'
    },
    {
      icon: Layers,
      tag: 'CROSS-SYSTEM SILO',
      title: 'Fragmented Multi-System Execution Gaps',
      desc: 'Processes moving between SAP ERP, Salesforce CRM, and logistics platforms lack unified visibility, creating execution black holes.',
      footer: 'Siloed Process Visibility'
    },
    {
      icon: Shield,
      tag: 'AUDIT RISK',
      title: 'Segregation of Duties & Access Violations',
      desc: 'Emergency permissions and manual overrides bypass standard audit scrutiny, exposing the organization to statutory audit findings.',
      footer: 'Statutory Compliance Exposures'
    }
  ];

  // Section 5: Architecture Framework Layers (Qualitative Layers)
  const architectureLayers = [
    {
      title: 'Continuous Ingestion & CDC Streaming Layer',
      subtitle: 'Native Connectors, Event Streams & Audited Log Capture',
      desc: 'Extracts real-time transactional event signals from SAP S/4HANA (CDHDR, CDPOS, BKPF), CRM, and MES systems without impacting database performance.',
      tags: ['SAP S/4HANA CDC', 'OData & RFC Streaming', 'Kafka Event Bus', 'Delta Ingestion Fabric']
    },
    {
      title: 'Real-Time State Machine & Petri-Net Engine Layer',
      subtitle: 'Dynamic Case Stitching, Token Replay & Graph Tracking',
      desc: 'Reconstructs active transactional cases into continuous directed graphs, enabling real-time token replay and live lifecycle tracking.',
      tags: ['Dynamic Token Replay', 'In-Memory Graph Engine', 'Case Key Reconciliation', 'Living Process Model']
    },
    {
      title: 'Real-Time Conformance & Anomaly Detection Layer',
      subtitle: 'SLA Radar, Procedural Deviation Scanners & Heuristics',
      desc: 'Continuously monitors executing transactions against reference BPMN rules to flag non-compliant branches and dwell bottlenecks immediately.',
      tags: ['Real-Time Conformance Scoring', 'SLA Drift Radar', 'Queue Dwell Math', 'Variant Anomaly Detection']
    },
    {
      title: 'Closed-Loop Autonomous Action & Remediation Layer',
      subtitle: 'SAP BTP Action Triggers, RPA Dispatch & Continuous Governance',
      desc: 'Executes automated operational corrections across ERP systems, dispatching approval alerts, clearing standard blocks, and alerting managers.',
      tags: ['SAP BTP Action Flows', 'Intelligent Robotic Automation', 'ERP Webhook Triggers', 'Continuous Process Governance']
    }
  ];

  // Section 6: Modular Solutions Matrix (Clean Semantic Codes)
  const modularSolutions = [
    {
      category: 'O2C',
      categoryLabel: 'Order-to-Cash',
      icon: Workflow,
      tag: 'MONITOR-O2C',
      title: 'Order Fulfillment & Delivery Block Real-Time Radar',
      description: 'Continuously monitors incoming sales orders for delivery blocks, credit holds, and pricing discrepancies, automatically triggering release workflows.',
      highlights: ['Real-Time Delivery Block Alerts', 'Preemptive Credit Hold Release', 'Lead-Time Dwell Interception']
    },
    {
      category: 'P2P',
      categoryLabel: 'Procure-to-Pay',
      icon: Database,
      tag: 'MONITOR-P2P',
      title: 'Procurement SLA & Retroactive Purchase Order Radar',
      description: 'Intercepts non-compliant purchase orders created post-invoice, tracks approval turnaround times, and secures early-payment cash terms.',
      highlights: ['Retroactive Requisition Detection', 'Payment Term Leakage Prevention', 'Three-Way Match Surveillance']
    },
    {
      category: 'R2R',
      categoryLabel: 'Record-to-Report',
      icon: BarChart3,
      tag: 'MONITOR-R2R',
      title: 'Continuous Subledger Reconciliation & Close Monitor',
      description: 'Provides real-time visibility into intercompany imbalances, unposted journal entries, and reconciliation bottlenecks ahead of period-end.',
      highlights: ['Daily Balance Reconciliations', 'Manual Journal Surveillance', 'Intercompany Mismatch Alerts']
    },
    {
      category: 'SUPPLY_CHAIN',
      categoryLabel: 'Supply Chain & Logistics',
      icon: Factory,
      tag: 'MONITOR-LOGISTICS',
      title: 'Warehouse Turnaround & Freight Dispatch Telemetry',
      description: 'Tracks pick-pack-ship cycle times, yard dwell delays, and carrier handoffs in real time to guarantee customer shipping commitments.',
      highlights: ['Dock Congestion Detection', 'Pick-to-Stage Dwell Alerts', 'Carrier Dispatch Conformance']
    },
    {
      category: 'SERVICE',
      categoryLabel: 'IT & Shared Services',
      icon: Activity,
      tag: 'MONITOR-ITSM',
      title: 'ITSM Incident Ping-Pong & SLA Escalation Radar',
      description: 'Identifies ticket reassignment loops, unassigned support queues, and critical service requests at risk of breaching customer SLAs.',
      highlights: ['Bounce-Loop Detection', 'Preemptive Escalation Warnings', 'Agent Dispatch Routing']
    },
    {
      category: 'ASSET',
      categoryLabel: 'Plant & Asset Reliability',
      icon: Cpu,
      tag: 'MONITOR-ASSET',
      title: 'Plant Maintenance Work Order & Spare-Parts Wait Monitor',
      description: 'Monitors open maintenance notifications, spare-parts reservation wait states, and safety sign-offs to uphold industrial asset uptime.',
      highlights: ['Spare-Parts Wait State Radar', 'Permit Latency Elimination', 'Emergency Repair Tracking']
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
      title: 'Global Order Fulfillment Surveillance & SLA Radar',
      processInfo: 'Real-Time Enterprise Order Streams • Continuous Conformance Grid',
      conformanceLevel: 'ACTIVE DWELL DETECTED • PREEMPTIVE ACTION REQUIRED',
      riskBadgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/50 shadow-amber-500/10',
      recommendation: 'Deploy automated credit block release on verified accounts and dispatch SAP BTP auto-reallocation to clear staging delays.',
      findings: [
        {
          level: 'ACTIVE BLOCK',
          levelColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
          borderColor: 'border-rose-500/40 hover:border-rose-400',
          title: 'Manual Credit Block Escalation Loop',
          desc: 'High-value orders undergo repeated manual credit holds despite active customer credit insurance, triggering fulfillment delays.',
          source: 'Tables: VBAK, VBUK, KNKK • Repetitive Credit Review'
        },
        {
          level: 'SLA RISK',
          levelColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          borderColor: 'border-amber-500/40 hover:border-amber-400',
          title: 'Warehouse Staging Dwell Anomaly',
          desc: 'Orders remain staged on outbound shipping docks without automated carrier pickup confirmation, risking promised delivery dates.',
          source: 'Tables: LIKP, LIPS, VTTK • Loading Bay Congestion'
        },
        {
          level: 'OPTIMAL FLOW',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Touchless EDI Order Processing',
          desc: 'Direct electronic data interchange orders execute from receipt to warehouse picking slip generation without human touch.',
          source: 'Transaction: Electronic Order Dispatch • Verified Conformance'
        }
      ]
    },
    p2p: {
      id: 'p2p',
      tabLabel: 'Procure-to-Pay (P2P)',
      title: 'Procurement Governance & Real-Time Spend Radar',
      processInfo: 'Global Purchase Requisitions & Direct Invoices • Live Conformance Surveillance',
      conformanceLevel: 'MAVERICK SPEND DRIFT • POLICY VIOLATION',
      riskBadgeColor: 'bg-rose-500/20 text-rose-300 border-rose-400/50 shadow-rose-500/10',
      recommendation: 'Enforce automated catalog pre-approvals and trigger instant alerts to department controllers when retroactive POs are detected.',
      findings: [
        {
          level: 'RETROACTIVE PO',
          levelColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
          borderColor: 'border-rose-500/40 hover:border-rose-400',
          title: 'Invoices Received Before Purchase Orders',
          desc: 'Suppliers submit invoices prior to purchase order creation, bypassing standard contractual rate agreements and approval controls.',
          source: 'Tables: EKKO, EKPO, RBKP • Sequence Inversion Violation'
        },
        {
          level: 'TERMS LEAKAGE',
          levelColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          borderColor: 'border-amber-500/40 hover:border-amber-400',
          title: 'Cash Discount Window Attrition',
          desc: 'Internal approval routing latency causes payments to be made outside favorable prompt-payment discount windows.',
          source: 'Tables: BSAK, BSIK • Extended Invoice Verification'
        },
        {
          level: 'CONFORMANT MATCH',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Touchless Three-Way PO Matching',
          desc: 'Electronic invoices match purchase orders and goods receipt notes automatically within tolerance thresholds.',
          source: 'Transaction: Automated Evaluated Receipt Settlement'
        }
      ]
    },
    r2r: {
      id: 'r2r',
      tabLabel: 'Record-to-Report (R2R)',
      title: 'Continuous Financial Close & Ledger Conformance Telemetry',
      processInfo: 'Subledger Reconciliations & Journal Postings • Real-Time Health Telemetry',
      conformanceLevel: 'CLOSE PERIOD CONGESTION • RECONCILIATION RADAR',
      riskBadgeColor: 'bg-sky-500/20 text-sky-300 border-sky-400/50 shadow-sky-500/10',
      recommendation: 'Deploy continuous intercompany balancing and automated journal validation to compress period-end financial reporting cycles.',
      findings: [
        {
          level: 'RECONCILIATION DELAY',
          levelColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
          borderColor: 'border-rose-500/40 hover:border-rose-400',
          title: 'Intercompany Posting Imbalances',
          desc: 'Asymmetric currency entries and timing mismatches between multinational subsidiaries require manual reconciliation.',
          source: 'Tables: BKPF, BSEG, TCURR • Asymmetric Postings'
        },
        {
          level: 'AUDIT RISK',
          levelColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          borderColor: 'border-amber-500/40 hover:border-amber-400',
          title: 'Manual Adjusting Journal Postings',
          desc: 'High concentration of manual journal entries submitted during final close hours without automated digital workpaper linkage.',
          source: 'Table: BKPF • Manual Journal Entry Class'
        },
        {
          level: 'BEST PRACTICE',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Continuous Fixed-Asset Subledger Sync',
          desc: 'Depreciation subledgers execute systematically with immediate posting to primary General Ledger accounts across all legal entities.',
          source: 'Transaction: Asset Depreciation Run • Automated Flow'
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

        {/* Full-Bleed 16:9 Panoramic Image - Zero Cropping on Process Monitoring & Execution Radar */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/process_monitoring_ai_cost_optimization.jpg"
            alt="Cost-Optimized Enterprise Process Monitoring & Execution Telemetry Mesh"
            className="w-full h-full object-cover object-[82%_center] sm:object-[82%_center] lg:object-[85%_center] select-none contrast-[1.02]"
            style={{ imageRendering: '-webkit-optimize-contrast', objectPosition: '85% center' }}
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
                  <span>KNOOVIQ DIGITAL INTELLIGENCE &bull; CONTINUOUS MONITORING</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                Continuous Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-400">
                  Process Monitoring &amp; Execution Radar
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Surveil live enterprise transaction streams, intercept SLA drifts before breaches occur, and trigger autonomous closed-loop exception resolution across SAP S/4HANA and multi-cloud environments.
              </p>
            </motion.div>

            {/* Enterprise Trust Indicators */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="pt-1 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Continuous Event Surveillance</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Real-Time SLA Drift Radar</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 shadow-lg">
                <Zap className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Closed-Loop Remediation</span>
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
                <span>CONTINUOUS SURVEILLANCE PERSPECTIVE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Transitioning from Periodic Audits to <span className="text-[#0070C0]">Continuous Operational Radar</span>
              </h2>
              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Enterprise processes cannot be governed through retrospective reviews; resilient organizations require continuous execution radar to isolate friction the instant it emerges.&rdquo;
                </p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Knooviq shifts process intelligence from static diagnostics to active, 24/7 operational surveillance. By intercepting live change-data capture streams from SAP S/4HANA, we evaluate process health dynamically, preventing SLA breaches before they manifest.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Database className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Zero-Latency Event Telemetry</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Continuous listening directly on SAP change data logs (CDHDR, CDPOS, BKPF) ensures instant event capture without operational overhead.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Predictive SLA Drift Interception</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Lead-time algorithms detect queue dwell anomalies in early process stages, alerting process owners before downstream deadlines are compromised.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Autonomous Closed-Loop Resolution</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Pre-authorized remediation recipes automatically clear standard delivery blocks, adjust payment schedules, and dispatch RPA intervention bots.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Console (Image 2) */}
            <div className="lg:col-span-6 space-y-3.5">
              <div 
                className="relative h-96 sm:h-[440px] lg:h-[490px] w-full rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-950 group cursor-pointer"
                onClick={() => setActiveJourneyStep((activeJourneyStep + 1) % journeySteps.length)}
                title="Click image to advance to next architecture step"
              >
                <img
                  src="/images/process_monitoring_console.jpg"
                  alt="Knooviq Enterprise Process Monitoring Command Center"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs font-mono font-bold text-cyan-300 shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <span>ACTIVE SURVEILLANCE: {journeySteps[activeJourneyStep].label.toUpperCase()}</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white space-y-1 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 shadow-lg">
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
              <span>OPERATIONAL FRICTION & DRIFT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Execution Hazards That Compromise Enterprise Commitments
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Without real-time surveillance, workflow deviations multiply unchecked, compounding into customer delivery failures, audit penalties, and margin leaks.
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
          SECTION 4: CIRCULAR RADIAL CHEVRON WHEEL (Continuous Surveillance Radar)
          ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-slate-950 relative overflow-hidden border-b border-slate-800 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-950/40 via-slate-950 to-slate-950 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>CONTINUOUS SURVEILLANCE RADAR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Closed-Loop Process Surveillance Ecosystem
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              An interlocking real-time operational engine designed to detect, diagnose, and resolve execution friction continuously.
            </p>

            {/* Live Synchronized Status Badge */}
            <div className="pt-1 flex flex-wrap items-center justify-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>ACTIVE RADAR STAGE: {wheelSegments[hoveredWheelIndex ?? 0].badge}</span>
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
                    <radialGradient id="processCenterReactorCoreMonitoring" cx="50%" cy="50%" r="50%">
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
                  <circle cx="250" cy="250" r="110" fill="url(#processCenterReactorCoreMonitoring)" stroke="rgba(0, 163, 224, 0.4)" strokeWidth="2.5" />
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
                            KNOOVIQ MONITOR RADAR
                          </div>
                          <div className="text-[9.5px] font-mono text-cyan-300">
                            Continuous Execution Core
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
              Continuous Process Monitoring Architecture
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Engineered for real-time telemetry streaming and automated closed-loop remediation across SAP S/4HANA and multi-cloud backbones.
            </p>
          </div>

          {/* Architectural Telemetry Mesh Graphic Showcase (Image 3 - Compact & Well-Balanced) */}
          <div className="mb-10 max-w-3xl mx-auto rounded-2xl overflow-hidden border-2 border-slate-200 bg-slate-950 relative shadow-xl group">
            <div className="relative w-full h-56 sm:h-72 md:h-80 overflow-hidden">
              <img
                src="/images/process_monitoring_continuous_architecture.jpg"
                alt="Continuous Process Monitoring Architecture Smart Factory Telemetry"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-[1.02]"
              />

              <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/40 text-[11px] font-mono font-bold text-cyan-300 shadow-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>ENTERPRISE CONTINUOUS PROCESS TELEMETRY MESH</span>
              </div>
            </div>

            <div className="p-3 px-4 sm:px-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block">
                  Real-Time Directed Graph Replay
                </span>
                <span className="font-bold text-white text-xs sm:text-sm">
                  Autonomous Multi-Layer Event Stream Surveillance
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Deterministic Closed-Loop Execution</span>
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
      <section id="process-monitoring-solutions" className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-slate-200 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Boxes className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PRE-CONFIGURED SURVEILLANCE MODULES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Pre-Built Continuous Monitoring Accelerators
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Domain-specific process surveillance engines pre-mapped to SAP S/4HANA operational modules and real-time SLA thresholds.
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
              Operational Advantages of Continuous Process Radar
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Replace retrospective error correction with continuous proactive operational governance and automated workflow defense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm hover:border-[#0070C0] transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-black text-slate-950">Preemptive SLA Protection</div>
                  <div className="text-xs font-semibold text-emerald-600">Real-Time Risk Interception</div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Catches internal workflow delays while remediation is still possible, avoiding customer SLA breaches and contract penalty deductions.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                SLA ASSURANCE
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm hover:border-[#0070C0] transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center border border-sky-200">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-black text-slate-950">Frictionless Process Velocity</div>
                  <div className="text-xs font-semibold text-[#0070C0]">Continuous Cycle Acceleration</div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Eliminates micro-dwell states in cross-functional handoffs, maximizing touchless execution across enterprise sales, procurement, and billing.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                VELOCITY MAXIMIZATION
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm hover:border-[#0070C0] transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-200">
                  <Scale className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-black text-slate-950">Deterministic Compliance Custody</div>
                  <div className="text-xs font-semibold text-cyan-600">Continuous Audit Readiness</div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Maintains continuous verification of Segregation of Duties (SoD), statutory mandates, and internal approval matrices across all global entities.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                AUDIT GOVERNANCE
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm hover:border-[#0070C0] transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-200">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-black text-slate-950">Autonomous Operational Agility</div>
                  <div className="text-xs font-semibold text-purple-600">Closed-Loop Integration</div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Closes the loop between continuous observation and action by triggering automated ERP parameter adjustments and task bots.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                AUTONOMOUS RESPONSE
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
              <span>LIVE PROCESS MONITORING CHAMBER</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Real-Time Execution & SLA Telemetry Cockpit
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-normal">
              Simulating live enterprise event log surveillance across core value streams to intercept deviations and trigger remediation.
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
                  <AlertTriangle className="w-3 h-3 shrink-0" />
                  <span>{diagnosticProcesses[activeProcessTab].conformanceLevel}</span>
                </div>
              </div>
            </div>

            {/* Showcase Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">

              {/* Left Column: Visual Process Monitoring Scan (Image 4) */}
              <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-cyan-400/40 shadow-lg group min-h-[260px] sm:min-h-[300px] lg:min-h-full">
                <img
                  src="/images/process_monitoring_incident_response.jpg"
                  alt="Process Monitoring Diagnostic Telemetry Cockpit"
                  className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-cyan-400/50 text-[10px] font-mono font-bold text-cyan-300 flex items-center gap-1.5 z-10 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Live Stream Surveillance &bull; Active Drift Intercept</span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/15 text-white text-left z-10 space-y-0.5">
                  <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                    Prescriptive Action Trigger
                  </span>
                  <p className="text-xs text-slate-200 line-clamp-2">
                    {diagnosticProcesses[activeProcessTab].recommendation}
                  </p>
                </div>
              </div>

              {/* Right Column: Live Telemetry & Friction Citations Table */}
              <div className="lg:col-span-7 space-y-2">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Detected Operational Deviations</span>
                  <span className="text-cyan-400">Continuous Stream Audit</span>
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
            Transition from Reactive Audits to Continuous Execution Radar
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Partner with KNOOVIQ&rsquo;s Process Intelligence practice to deploy non-invasive real-time process monitoring across SAP S/4HANA and mission-critical cloud applications.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenContact ? onOpenContact('Enterprise Process Monitoring Briefing') : undefined}
              className="px-8 py-4 rounded-xl bg-white text-[#003B73] font-black text-sm tracking-wide shadow-xl hover:bg-sky-50 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>REQUEST PROCESS MONITORING RADAR</span>
              <ArrowRight className="w-4 h-4 text-[#003B73]" />
            </button>

            <Link
              to="/digital-intelligence/process-optimization"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all flex items-center gap-2 group"
            >
              <span>Explore Process Optimization</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
export default ProcessMonitoringPage;
