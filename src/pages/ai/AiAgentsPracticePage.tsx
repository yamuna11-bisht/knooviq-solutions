import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Bot,
  Sparkles,
  Database,
  Cpu,
  Layers,
  Workflow,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Lock,
  Network,
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
  GitBranch,
  SlidersHorizontal,
  CheckSquare,
  Maximize2,
  X
} from 'lucide-react';

interface AiAgentsPracticePageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const AiAgentsPracticePage: React.FC<AiAgentsPracticePageProps> = ({
  onOpenContact
}) => {
  // State for Section 2 Interactive Journey Auto-Play
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);
  const [isJourneyUserPaused, setIsJourneyUserPaused] = useState(false);
  const journeyIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const journeyResumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [fullScreenAgentStep, setFullScreenAgentStep] = useState<{
    label: string;
    sublabel: string;
    tech: string;
    desc: string;
    image: string;
  } | null>(null);
  const [fullScreenAuditDoc, setFullScreenAuditDoc] = useState<{
    title: string;
    tabLabel: string;
    fileInfo: string;
    image: string;
    recommendation: string;
  } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFullScreenAgentStep(null);
        setFullScreenAuditDoc(null);
      }
    };
    if (fullScreenAgentStep || fullScreenAuditDoc) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [fullScreenAgentStep, fullScreenAuditDoc]);

  // State for Section 4 Interactive Wheel
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(null);
  const [activeWheelIndex, setActiveWheelIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // State for Section 7 Solution Filters
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');

  // State for Section 9 Interactive Document Sandbox
  const [activeDocTab, setActiveDocTab] = useState<'finance' | 'supplyChain' | 'governance'>('finance');

  // Section 4: 8-Segment Cybernetic Cockpit Wheel Capabilities
  const wheelSegments = [
    {
      id: 'swarms',
      shortTag: 'SWARM',
      title: 'Autonomous Swarm Orchestration',
      desc: 'Hierarchical task delegation across specialized autonomous agents',
      badge: 'HIERARCHICAL PLANNER',
      metric: 'Autonomous Task Allocation',
      side: 'right',
      color: '#22C55E',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(34, 197, 94, 0.35)',
      icon: Network
    },
    {
      id: 'tools',
      shortTag: 'TOOLS',
      title: 'Deterministic Tool Execution',
      desc: 'Type-safe schema-validated tool calling directly into SAP BAPIs',
      badge: 'TOOL GROUNDING',
      metric: 'Strict Schema Validation',
      side: 'right',
      color: '#84CC16',
      textColor: 'text-lime-400',
      bgGlow: 'rgba(132, 204, 22, 0.35)',
      icon: Cpu
    },
    {
      id: 'state',
      shortTag: 'STATE',
      title: 'State & Memory Persistence',
      desc: 'Long-term semantic checkpointing with instant rollback capabilities',
      badge: 'STATE PERSISTENCE',
      metric: 'Transactional Memory Vault',
      side: 'right',
      color: '#EAB308',
      textColor: 'text-yellow-400',
      bgGlow: 'rgba(234, 179, 8, 0.35)',
      icon: Database
    },
    {
      id: 'code-exec',
      shortTag: 'ACT',
      title: 'Autonomous Action & Code Execution',
      desc: 'Sandboxed runtime executing Clean Core routines and data pipelines',
      badge: 'SANDBOX EXECUTION',
      metric: 'Air-Gapped Container Runtime',
      side: 'right',
      color: '#F97316',
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.35)',
      icon: Workflow
    },
    {
      id: 'guardrails',
      shortTag: 'GUARD',
      title: 'Safety & Policy Firewalls',
      desc: 'Deterministic semantic verification enforcing verified execution claims',
      badge: 'ACTIVE GUARDRAILS',
      metric: 'Deterministic Policy Firewall',
      side: 'left',
      color: '#F43F5E',
      textColor: 'text-rose-400',
      bgGlow: 'rgba(244, 63, 94, 0.35)',
      icon: ShieldCheck
    },
    {
      id: 'erp-action',
      shortTag: 'BAPI',
      title: 'SAP Clean Core Integration',
      desc: 'Seamless bidirectional action with S/4HANA CDS views and released APIs',
      badge: 'S/4HANA READINESS',
      metric: 'Verified Cloud ERP Connectors',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: Lock
    },
    {
      id: 'hitl',
      shortTag: 'HITL',
      title: 'Human-in-the-Loop Gateway',
      desc: 'Threshold-based approval routing for high-impact enterprise transactions',
      badge: 'GOVERNANCE GATEWAY',
      metric: 'Executive Sign-Off Protocol',
      side: 'left',
      color: '#A855F7',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(168, 85, 247, 0.35)',
      icon: Eye
    },
    {
      id: 'reflection',
      shortTag: 'REFLECT',
      title: 'Self-Correction & Reflection',
      desc: 'Multi-step critique loops revising intermediate execution steps autonomously',
      badge: 'SELF-CORRECTION',
      metric: 'Iterative Critique Loop',
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
    const totalSegments = 8;
    const degPerSeg = 360 / totalSegments;
    const startAngle = index * degPerSeg - 90;
    const endAngle = startAngle + degPerSeg;
    const rad = (d: number) => (d * Math.PI) / 180;
    const chevronIndent = 7.5;

    const p1 = { x: cx + rOut * Math.cos(rad(startAngle)), y: cy + rOut * Math.sin(rad(startAngle)) };
    const p2 = { x: cx + (rOut + 4) * Math.cos(rad(startAngle + degPerSeg * 0.5)), y: cy + (rOut + 4) * Math.sin(rad(startAngle + degPerSeg * 0.5)) };
    const p3 = { x: cx + rOut * Math.cos(rad(endAngle)), y: cy + rOut * Math.sin(rad(endAngle)) };
    const pTip = { x: cx + (rMid + 12) * Math.cos(rad(endAngle + chevronIndent)), y: cy + (rMid + 12) * Math.sin(rad(endAngle + chevronIndent)) };
    const p4 = { x: cx + rIn * Math.cos(rad(endAngle)), y: cy + rIn * Math.sin(rad(endAngle)) };
    const pIndent = { x: cx + (rMid + 12) * Math.cos(rad(startAngle + chevronIndent)), y: cy + (rMid + 12) * Math.sin(rad(startAngle + chevronIndent)) };
    const p5 = { x: cx + rIn * Math.cos(rad(startAngle)), y: cy + rIn * Math.sin(rad(startAngle)) };

    return `M ${p1.x} ${p1.y}
            A ${rOut} ${rOut} 0 0 1 ${p3.x} ${p3.y}
            L ${pTip.x} ${pTip.y}
            L ${p4.x} ${p4.y}
            A ${rIn} ${rIn} 0 0 0 ${p5.x} ${p5.y}
            L ${pIndent.x} ${pIndent.y}
            Z`;
  };

  const getChevronCenter = (index: number) => {
    const cx = 250;
    const cy = 250;
    const rMid = 168;
    const totalSegments = 8;
    const degPerSeg = 360 / totalSegments;
    const midAngle = index * degPerSeg - 90 + degPerSeg * 0.5;
    const rad = (d: number) => (d * Math.PI) / 180;
    return {
      x: cx + rMid * Math.cos(rad(midAngle)),
      y: cy + rMid * Math.sin(rad(midAngle))
    };
  };

  // Section 2: Journey Steps
  const journeySteps = [
    {
      id: 'planning',
      label: 'Goal Decomposition',
      sublabel: 'Hierarchical Tasking',
      desc: 'Translating complex high-level business directives into structured sub-tasks with deterministic dependencies and execution milestones.',
      tech: 'Autonomous Meta-Planner',
      icon: GitBranch,
      image: '/images/ai_agents_goal_decomposition_strategy.png'
    },
    {
      id: 'swarm',
      label: 'Multi-Agent Swarms',
      sublabel: 'Role-Based Coordination',
      desc: 'Specialized autonomous agents collaborating concurrently—from procurement verification to credit release—with verified message passing.',
      tech: 'Actor Model Swarm Fabric',
      icon: Network,
      image: '/images/ai_agents_actor_model_swarm_fabric.jpg'
    },
    {
      id: 'tool-execution',
      label: 'Deterministic Tool Calling',
      sublabel: 'Type-Safe BAPI Calls',
      desc: 'Translating model intent into strictly typed JSON RPC parameters, validating against live SAP metadata dictionaries before execution.',
      tech: 'SAP BAPI Gateway',
      icon: Cpu,
      image: '/images/ai_agents_typed_json_rpc_sap_metadata.png'
    },
    {
      id: 'hitl-gate',
      label: 'Human-in-the-Loop Gates',
      sublabel: 'Exception Approvals',
      desc: 'Automatic escalation to corporate stakeholders whenever variance corridors, sovereign budget thresholds, or compliance limits are exceeded.',
      tech: 'Governance Escalation Engine',
      icon: ShieldCheck,
      image: '/images/ai_agents_stakeholder_escalation_variance.png'
    },
    {
      id: 'action-execution',
      label: 'Closed-Loop Action',
      sublabel: 'Direct ERP Posting',
      desc: 'Committing reconciled financial invoices, reallocating warehouse delivery stock, and issuing formal purchase orders directly into core ERP systems.',
      tech: 'SAP S/4HANA Transaction Engine',
      icon: Workflow,
      image: '/images/ai_agents_reconciled_invoices_erp_action.png'
    },
    {
      id: 'telemetry',
      label: 'Immutable Audit Logging',
      sublabel: 'Trace & Replay',
      desc: 'Complete immutable recording of every intermediate thought step, tool argument, execution result, and user sign-off for corporate compliance.',
      tech: 'Sovereign Telemetry Vault',
      icon: Lock,
      image: '/images/ai_agents_immutable_audit_logging.png'
    }
  ];

  // Auto-play effect for Section 2 Architecture Journey (6 parts)
  useEffect(() => {
    if (fullScreenAgentStep || isJourneyUserPaused) return;

    journeyIntervalRef.current = setInterval(() => {
      setActiveJourneyStep((prev) => (prev + 1) % journeySteps.length);
    }, 3500);

    return () => {
      if (journeyIntervalRef.current) {
        clearInterval(journeyIntervalRef.current);
      }
    };
  }, [fullScreenAgentStep, isJourneyUserPaused, journeySteps.length]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (journeyIntervalRef.current) clearInterval(journeyIntervalRef.current);
      if (journeyResumeTimeoutRef.current) clearTimeout(journeyResumeTimeoutRef.current);
    };
  }, []);

  // When user clicks on any of the 6 parts or the image:
  // Immediately shows that step, holds for 1 second, then resumes automatic rotation
  const handleSelectJourneyStep = (index: number) => {
    // 1. Immediately switch to the clicked part/image
    setActiveJourneyStep(index);

    // 2. Pause regular interval
    setIsJourneyUserPaused(true);
    if (journeyIntervalRef.current) clearInterval(journeyIntervalRef.current);
    if (journeyResumeTimeoutRef.current) clearTimeout(journeyResumeTimeoutRef.current);

    // 3. Exactly after 1 second (1000ms), advance to next and resume automatic rotation
    journeyResumeTimeoutRef.current = setTimeout(() => {
      setActiveJourneyStep((prev) => (prev + 1) % journeySteps.length);
      setIsJourneyUserPaused(false);
    }, 1000);
  };

  // Section 3: AI Agents Challenges
  const agentChallenges = [
    {
      icon: RefreshCw,
      tag: 'EXECUTION LOOPS',
      title: 'Unbounded Execution Loops',
      desc: 'Unsupervised agents trapped in recursive query patterns drain cloud compute without converging on resolution.',
      footer: 'Graph Cycle Detection & Timeouts'
    },
    {
      icon: ShieldCheck,
      tag: 'FINANCIAL RISK',
      title: 'Unsupervised Financial Exposure',
      desc: 'Uncontrolled tool calling generating erroneous purchase orders or invoice clearances without multi-tier approval thresholds.',
      footer: 'Multi-Tier Approval Gateways'
    },
    {
      icon: AlertTriangle,
      tag: 'SIDE EFFECTS',
      title: 'Non-Deterministic Side Effects',
      desc: 'Direct database mutations with invalid payload structures risking enterprise ERP ledger corruption.',
      footer: 'Atomic Transactions & Rollbacks'
    },
    {
      icon: Database,
      tag: 'CONTEXT SILOS',
      title: 'Enterprise Context Blindness',
      desc: 'Generic open models lacking live awareness of customized SAP tables, master data states, and supplier terms.',
      footer: 'S/4HANA CDS Schema Grounding'
    },
    {
      icon: Lock,
      tag: 'INJECTION THREATS',
      title: 'Prompt Injection & Hijacking',
      desc: 'Malicious payload injection in vendor emails or invoices altering autonomous tool calling instructions.',
      footer: 'Zero-Trust Semantic Firewalls'
    },
    {
      icon: Eye,
      tag: 'AUDIT DEFICIT',
      title: 'Lack of Step-by-Step Tracing',
      desc: 'Inability to explain why an autonomous agent executed a critical business decision during regulatory audits.',
      footer: 'Full Replay & Decision Lineage'
    }
  ];

  // Section 7: 9 Modular Enterprise Solutions (Exact Generative AI Card Format, NO images)
  const agentSolutions = [
    {
      title: 'Autonomous AP Invoice Resolution Swarm',
      tag: 'FINANCE',
      category: 'FINANCE',
      description: 'Multi-agent swarm resolving three-way matching discrepancies, line-item quantity variances, and vendor payment holds.',
      highlights: ['Three-Way Reconciliation', 'Discrepancy Auto-Clearance', 'SAP FI Direct Posting'],
      icon: FileCheck
    },
    {
      title: 'Dynamic Supply Chain Rebalancing Agent',
      tag: 'SUPPLY CHAIN',
      category: 'SUPPLY CHAIN',
      description: 'Autonomous inventory sensing across regional distribution centers reallocating stock to prevent stockouts.',
      highlights: ['Cross-Dock Reallocation', 'Lead-Time Prediction', 'Stock Transport Orders'],
      icon: Boxes
    },
    {
      title: 'IT Incident Auto-Remediation Swarm',
      tag: 'IT OPS',
      category: 'GOVERNANCE',
      description: 'Continuous monitoring agents diagnosing system bottlenecks, cycling crashed microservices, and clearing memory locks.',
      highlights: ['Automated Triage', 'Log Anomaly Root Cause', 'Safe Rollback Guardrails'],
      icon: Server
    },
    {
      title: 'Predictive Maintenance Dispatcher Agent',
      tag: 'ASSET OPS',
      category: 'SUPPLY CHAIN',
      description: 'Sensor telemetry analysis triggering automatic maintenance work orders and spare parts reservation in SAP PM.',
      highlights: ['Vibration Telemetry', 'BOM Auto-Reservation', 'Technician Dispatch'],
      icon: Cpu
    },
    {
      title: 'Continuous SOX & Compliance Auditor',
      tag: 'AUDIT',
      category: 'GOVERNANCE',
      description: 'Autonomous oversight verifying Segregation of Duties (SoD), master data changes, and anomalous high-value transactions.',
      highlights: ['SoD Violation Traps', 'Real-Time Policy Auditing', 'Immutable Audit Reports'],
      icon: ShieldCheck
    },
    {
      title: 'Clean Core ABAP Migration Assistant',
      tag: 'DEVELOPER AI',
      category: 'GOVERNANCE',
      description: 'Autonomous code refactoring transforming legacy custom modifications into certified Clean Core RAP business objects.',
      highlights: ['Obsolete Routine Scan', 'Automated CDS Generation', 'ABAP Cloud Unit Tests'],
      icon: Workflow
    },
    {
      title: 'Autonomous Vendor Dispute Conciliation Swarm',
      tag: 'PROCUREMENT',
      category: 'FINANCE',
      description: 'Negotiation and reconciliation agents extracting contract clauses, verifying shipment logs, and drafting formal settlement proposals.',
      highlights: ['Clause Citation Extraction', 'Dispute Resolution Log', 'Ariba Counter-Proposals'],
      icon: Scale
    },
    {
      title: 'Customer Service Omnichannel Resolution Swarm',
      tag: 'SERVICE OPS',
      category: 'FINANCE',
      description: 'Autonomous multi-turn inquiry resolution routing complex order changes directly into ERP fulfillment pipelines.',
      highlights: ['Order Status Tracking', 'Return Authorization', 'CRM Sync Automation'],
      icon: Users
    },
    {
      title: 'Real-Time Demand Sensing & Allocation Agent',
      tag: 'PLANNING',
      category: 'SUPPLY CHAIN',
      description: 'Cross-channel sales signal ingestion adjusting replenishment orders and production scheduling in SAP IBP.',
      highlights: ['Channel Demand Spikes', 'Dynamic Safety Stock', 'IBP Plan Reconciliation'],
      icon: TrendingUp
    }
  ];

  // Section 8: Enterprise Value & Architecture Pillars (ZERO numbers/percentages)
  const roiBenchmarks = [
    {
      status: 'AUTONOMOUS',
      badge: 'CLOSED-LOOP EXECUTION',
      title: 'End-to-End Workflow Completion',
      desc: 'Multi-agent swarms execute complete business processes across departments with minimal manual intervention.',
      icon: Workflow,
      borderColor: 'border-sky-200 hover:border-[#0070C0]'
    },
    {
      status: 'REAL-TIME',
      badge: 'EVENT-DRIVEN TRIGGERS',
      title: 'Instant Operational Response',
      desc: 'Sub-second event detection across SAP ERP tables automatically initiating autonomous corrective action.',
      icon: Zap,
      borderColor: 'border-sky-200 hover:border-[#0070C0]'
    },
    {
      status: 'GOVERNED',
      badge: 'MULTI-TIER APPROVAL GATES',
      title: 'Human-in-the-Loop Safeguards',
      desc: 'Deterministic threshold routing ensures financial and legal transactions require explicit corporate sign-off.',
      icon: ShieldCheck,
      borderColor: 'border-sky-200 hover:border-[#0070C0]'
    },
    {
      status: 'AIR-GAPPED',
      badge: 'SOVEREIGN ISOLATION',
      title: 'Private Container Isolation',
      desc: 'Complete tenant segregation guarantee. Agent memory, tools, and transaction logs never leave corporate boundaries.',
      icon: Lock,
      borderColor: 'border-sky-200 hover:border-[#0070C0]'
    },
    {
      status: 'ACCELERATED',
      badge: 'BAPI INTEROP',
      title: 'Clean Core ERP Integration',
      desc: 'Direct execution via released SAP S/4HANA CDS views and BAPIs without fragile screen-scraping dependencies.',
      icon: Database,
      borderColor: 'border-sky-200 hover:border-[#0070C0]'
    },
    {
      status: 'VERIFIED',
      badge: 'AUDIT REPLAYABILITY',
      title: 'Immutable Decision Traceability',
      desc: 'Every model thought step, executed tool argument, and human approval signature stored in an unalterable audit vault.',
      icon: CheckSquare,
      borderColor: 'border-sky-200 hover:border-[#0070C0]'
    }
  ];

  // Section 9: Autonomous Multi-Agent Command Sandbox Data
  const auditDocuments = {
    finance: {
      id: 'finance-reconciliation',
      title: 'Autonomous AP Discrepancy & BAPI Clearance Swarm',
      tabLabel: 'AP Invoice Swarm',
      fileInfo: 'Target System: SAP S/4HANA Finance &bull; PO Ref: #PO-882194',
      riskLevel: 'VARIANCE CORRIDOR CLEAR',
      riskBadgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      image: '/images/ai_agents_reconciled_invoices_erp_action.png',
      recommendation: 'Autonomous clearance authorized. Quantity variance within tolerance. Posting executed via BAPI_INCOMINGINVOICE_CREATE.',
      findings: [
        {
          level: 'VERIFIED',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: '3-Way Matching Reconciled',
          desc: 'Goods receipt #GR-44910 matches vendor invoice line items exactly. Price variance verified against contract master.',
          citation: 'BAPI: BAPI_GOODSMVT_GETDETAIL'
        },
        {
          level: 'AUTO-RESOLVED',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Tax Jurisdiction Discrepancy Resolved',
          desc: 'Reverse charge calculation recalculated against destination state tax table and automatically harmonized.',
          citation: 'CDS View: I_TaxCalculationRule'
        },
        {
          level: 'COMMITTED',
          levelColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
          borderColor: 'border-purple-500/40 hover:border-purple-400',
          title: 'ERP Ledger Posting Confirmed',
          desc: 'Transactional accounting document created and payment block release scheduled for discount window.',
          citation: 'Doc ID: #BKPF-2026-904128'
        }
      ]
    },
    supplyChain: {
      id: 'supply-chain-dispatch',
      title: 'Autonomous Cross-Dock Logistics Reallocation Swarm',
      tabLabel: 'Logistics Swarm',
      fileInfo: 'Target System: SAP EWM / TM &bull; Shipment: #SHP-91028',
      riskLevel: 'DYNAMIC ROUTE OPTIMIZED',
      riskBadgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      image: '/images/autonomous_cross_dock_logistics_swarm.png',
      recommendation: 'Cross-dock stock transfer order executed. Stock shortfall mitigated without delayed customer commitments.',
      findings: [
        {
          level: 'DETECTED',
          levelColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          borderColor: 'border-amber-500/40 hover:border-amber-400',
          title: 'Regional Warehouse Stock Shortage Detected',
          desc: 'High-velocity SKU demand sensed at Western DC. Safety buffer anticipated to deplete within delivery cycles.',
          citation: 'Telemetry: IBP_STOCK_SENSING'
        },
        {
          level: 'ALLOCATED',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Multi-Echelon Stock Transfer Issued',
          desc: 'Autonomous dispatcher created stock transport order from Central Hub with optimized consolidated freight.',
          citation: 'Order: STO-2026-88129'
        },
        {
          level: 'DISPATCHED',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Wave Picking Released in EWM',
          desc: 'Automated warehouse guided picking wave scheduled and dynamic dock door reservation confirmed.',
          citation: 'EWM: /SCWM/WAVE_RELEASE'
        }
      ]
    },
    governance: {
      id: 'governance-audit',
      title: 'Autonomous Clean Core & SOX Governance Sentinel',
      tabLabel: 'Governance Sentinel',
      fileInfo: 'Target System: SAP BTP / Sovereign Governance Cloud &bull; Policy: #SOX-404',
      riskLevel: 'ACTIVE ENFORCEMENT',
      riskBadgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
      image: '/images/ai_agents_governance_sentinel.png',
      recommendation: 'All autonomous actions validated against enterprise role definitions. Zero segregation of duties violations.',
      findings: [
        {
          level: 'VERIFIED',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Segregation of Duties Verified',
          desc: 'Agent authorization token validated against corporate IAM. Requisitioner and approver roles segregated.',
          citation: 'Gateway: OAuth2 Sovereign Claim'
        },
        {
          level: 'CLEAN CORE',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Legacy ABAP Cloud Modernization',
          desc: 'Custom modification converted into draft-enabled RAP Business Objects utilizing released APIs.',
          citation: 'Package: ZRAP_GOVERNANCE_CORE'
        },
        {
          level: 'AUDIT LOGGED',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Immutable Compliance Hash Recorded',
          desc: 'Complete agent decision lineage cryptographically signed and stored in sovereign governance vault.',
          citation: 'Ledger: GRC Compliance Archive'
        }
      ]
    }
  };

  // Auto-rotation timer for Wheel
  useEffect(() => {
    if (!isAutoRotating) return;
    const interval = setInterval(() => {
      setActiveWheelIndex((prev) => (prev + 1) % wheelSegments.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isAutoRotating, wheelSegments.length]);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">

      {/* =========================================================================
          SECTION 1: HERO SECTION (Full-Screen Panoramic Background - Clear & Uncut)
          ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">
        
        {/* Full-Bleed 16:9 Panoramic Image - Zero Cropping on Robot, Holograms or Laptop */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ai_agents_hero_widescreen.jpg"
            alt="Autonomous Enterprise AI Agents"
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center brightness-105 contrast-105"
          />
          {/* Subtle directional gradient on the left ONLY - keeps the robot, laptop and all holograms on the right 100% bright, crisp and clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 via-42% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-xl space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-cyan-500/30 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
                  <Bot className="w-3.5 h-3.5 text-cyan-400" />
                  <span>KNOOVIQ DIGITAL INTELLIGENCE &bull; AUTONOMOUS AI AGENTS</span>
                </div>
                <button
                  type="button"
                  onClick={() => setFullScreenAgentStep(journeySteps[0])}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 hover:bg-cyan-500 hover:text-slate-950 text-white border border-white/20 backdrop-blur-md text-xs font-mono font-bold transition-all shadow-md group cursor-pointer"
                  title="View AI Agents architecture in full screen"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-cyan-300 group-hover:text-slate-950 transition-colors" />
                  <span>Full Screen View</span>
                </button>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                Autonomous <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-200">
                  Enterprise AI Agents
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Multi-agent swarms, deterministic tool calling, and governed closed-loop workflow execution connected directly into SAP ERP with zero hallucination risk.
              </p>
            </motion.div>

            {/* Enterprise Trust Indicators */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="pt-1 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Deterministic Tool Calling</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Governed Human-in-the-Loop</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 shadow-lg">
                <Database className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Closed-Loop S/4HANA Action</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE PERSPECTIVE (Image 2 of 4 - Same Font & Layout as Generative AI)
          ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Strategic Context & 3 High-Impact Pillars */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>EXECUTIVE ARCHITECTURE PERSPECTIVE</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Architecting Governed <span className="text-[#0070C0]">Autonomous Action</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Modern enterprise AI is no longer about generating text. It is about autonomous agents orchestrating cross-system tasks, validating intermediate outcomes, and committing verified transactions safely into core ERP ledgers.&rdquo;
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Knooviq equips global organizations with deterministic multi-agent swarms engineered to decompose complex enterprise goals, trigger schema-validated tool executions, and operate within strict sovereign governance guardrails.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Deterministic Tool Calling Grounding</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Type-safe JSON schema validation executing directly into SAP BAPIs and REST microservices with zero parameter hallucination.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Governed Human-in-the-Loop Gates</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Threshold-based approval routing escalating high-impact financial committals, stock transfers, and ledger mutations.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Transactional State & Atomic Rollback</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Complete transactional checkpointing preserving ERP ledger consistency with instant rollback upon exception detection.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Deep-Dive Visual Card (Image 2 of 4) + Step Switcher */}
            <div className="lg:col-span-6 space-y-3.5">
              <div 
                className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900 group cursor-pointer"
                onClick={() => handleSelectJourneyStep((activeJourneyStep + 1) % journeySteps.length)}
                title="Click image to advance to next architecture step (or click Full Screen)"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={journeySteps[activeJourneyStep].id}
                    src={journeySteps[activeJourneyStep].image}
                    alt={journeySteps[activeJourneyStep].label}
                    initial={{ opacity: 0.5, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.5 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />
                
                {/* Active Architecture Badge with live pulsing dot */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs font-mono font-bold text-cyan-300 shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <span>ACTIVE ARCHITECTURE: {journeySteps[activeJourneyStep].label.toUpperCase()}</span>
                </div>

                {/* Full Screen Button indicator */}
                <div className="absolute top-3 right-3 z-10">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFullScreenAgentStep(journeySteps[activeJourneyStep]);
                    }}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/70 hover:bg-[#0070C0] text-white border border-white/20 backdrop-blur-md text-[11px] font-mono font-bold transition-all shadow-md cursor-pointer"
                    title="View architecture in full screen"
                  >
                    <Maximize2 className="w-3 h-3 text-cyan-300" />
                    <span>Full Screen</span>
                  </button>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                  <div className="text-xs sm:text-sm font-mono font-bold text-cyan-300">{journeySteps[activeJourneyStep].tech}</div>
                  <p className="text-xs sm:text-sm text-slate-100 font-medium line-clamp-2 leading-relaxed">{journeySteps[activeJourneyStep].desc}</p>
                </div>
              </div>

              {/* 6 Step Switcher Buttons (Exact Same Font & Size as Generative AI) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {journeySteps.map((step, idx) => {
                  const isSelected = activeJourneyStep === idx;
                  const StepIcon = step.icon;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => handleSelectJourneyStep(idx)}
                      className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                        isSelected
                          ? 'bg-[#0070C0] text-white border-2 border-[#0070C0] shadow-md scale-[1.01]'
                          : 'bg-white text-slate-800 border-2 border-slate-200 hover:bg-sky-50 hover:border-[#0070C0]'
                      }`}
                    >
                      <StepIcon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-[#0070C0]'}`} />
                      <div className="min-w-0">
                        <div className="text-xs font-bold truncate">{step.label}</div>
                        <div className={`text-[10px] font-mono truncate ${isSelected ? 'text-sky-100' : 'text-slate-500'}`}>
                          {step.sublabel}
                        </div>
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
          SECTION 3: GOVERNANCE RISKS & BOTTLENECKS (Exact Same Font as Generative AI)
          ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#F8FAFC] border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
              <Compass className="w-3.5 h-3.5 text-rose-600" />
              <span>CORE RISKS & BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Navigating Autonomous Multi-Agent Pitfalls
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Moving from toy agent demos to enterprise production requires resolving six fundamental execution vulnerabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {agentChallenges.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border-2 border-slate-200/90 shadow-sm hover:border-[#0070C0] hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] border border-sky-200 flex items-center justify-center group-hover:bg-[#0070C0] group-hover:text-white group-hover:scale-105 transition-all shadow-xs">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200 uppercase">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-[#0070C0] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center">
                    <div className="w-full px-3 py-2 rounded-xl bg-gradient-to-r from-sky-50 to-blue-50/80 border border-sky-200 text-xs font-mono font-bold text-[#0070C0] flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0070C0] shrink-0" />
                      <span className="truncate">{item.footer}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CYBERNETIC COCKPIT RADIAL WHEEL
          ========================================================================= */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#040711] text-white border-b border-slate-800/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,192,0.12)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>COGNITIVE ORCHESTRATION COCKPIT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Cybernetic Autonomous Multi-Agent Engine
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
              Continuous coordination loop balancing hierarchical planning, deterministic tool calling, and sovereign enterprise guardrails.
            </p>
          </div>

          {/* Central Radial Interlocking Chevron Visual Cockpit */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left 4 Micro-Pods */}
            <div className="hidden lg:flex lg:col-span-3 flex-col gap-3">
              {wheelSegments.slice(4, 8).map((seg, idx) => {
                const globalIndex = idx + 4;
                const isSelected = activeWheelIndex === globalIndex;
                const SegIcon = seg.icon;
                return (
                  <div
                    key={seg.id}
                    onClick={() => { setActiveWheelIndex(globalIndex); setIsAutoRotating(false); }}
                    className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900/90 border-cyan-400/60 shadow-lg shadow-cyan-500/20 translate-x-1'
                        : 'bg-slate-950/50 border-slate-800/80 hover:bg-slate-900/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-mono font-bold tracking-wider ${seg.textColor}`}>
                        {seg.badge}
                      </span>
                      <SegIcon className={`w-3.5 h-3.5 ${seg.textColor}`} />
                    </div>
                    <div className="text-xs font-bold text-white truncate">{seg.title}</div>
                    <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{seg.desc}</div>
                  </div>
                );
              })}
            </div>

            {/* Center Interlocking Chevron SVG Wheel */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
              <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] max-w-full">
                
                {/* SVG Radial Wheel */}
                <svg viewBox="0 0 500 500" className="w-full h-full transform transition-transform duration-700">
                  <circle cx="250" cy="250" r="235" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 6" />
                  <circle cx="250" cy="250" r="105" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

                  {wheelSegments.map((seg, idx) => {
                    const isSelected = activeWheelIndex === idx;
                    const pathD = getChevronPath(idx);
                    const centerPos = getChevronCenter(idx);

                    return (
                      <g
                        key={seg.id}
                        className="cursor-pointer transition-all duration-300"
                        onMouseEnter={() => setHoveredWheelIndex(idx)}
                        onMouseLeave={() => setHoveredWheelIndex(null)}
                        onClick={() => { setActiveWheelIndex(idx); setIsAutoRotating(false); }}
                      >
                        <path
                          d={pathD}
                          fill={isSelected ? seg.color : 'rgba(15, 23, 42, 0.75)'}
                          stroke={isSelected ? '#FFFFFF' : 'rgba(255,255,255,0.18)'}
                          strokeWidth={isSelected ? '2.5' : '1'}
                          className="transition-all duration-300 hover:brightness-125"
                          style={{
                            filter: isSelected ? `drop-shadow(0 0 12px ${seg.color})` : 'none'
                          }}
                        />
                        <text
                          x={centerPos.x}
                          y={centerPos.y + 4}
                          textAnchor="middle"
                          fill={isSelected ? '#FFFFFF' : '#94A3B8'}
                          fontSize="10"
                          fontFamily="monospace"
                          fontWeight="bold"
                          className="pointer-events-none select-none tracking-widest"
                        >
                          {seg.shortTag}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Center Hub Core Information */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-slate-950/95 border-2 border-cyan-400/50 flex flex-col items-center justify-center p-3 text-center shadow-2xl backdrop-blur-xl">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400">
                      AUTONOMOUS
                    </span>
                    <span className="text-base sm:text-lg font-black text-white leading-tight mt-0.5">
                      {wheelSegments[activeWheelIndex].shortTag}
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 mt-1 uppercase tracking-tight line-clamp-1">
                      {wheelSegments[activeWheelIndex].badge}
                    </span>
                  </div>
                </div>

              </div>

              {/* Pause / Play Rotation Control */}
              <div className="mt-3 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsAutoRotating(!isAutoRotating)}
                  className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 transition-colors"
                >
                  {isAutoRotating ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  <span>{isAutoRotating ? 'PAUSE ROTATION' : 'RESUME CYCLE'}</span>
                </button>
              </div>
            </div>

            {/* Right 4 Micro-Pods */}
            <div className="hidden lg:flex lg:col-span-3 flex-col gap-3">
              {wheelSegments.slice(0, 4).map((seg, idx) => {
                const isSelected = activeWheelIndex === idx;
                const SegIcon = seg.icon;
                return (
                  <div
                    key={seg.id}
                    onClick={() => { setActiveWheelIndex(idx); setIsAutoRotating(false); }}
                    className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900/90 border-cyan-400/60 shadow-lg shadow-cyan-500/20 -translate-x-1'
                        : 'bg-slate-950/50 border-slate-800/80 hover:bg-slate-900/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-mono font-bold tracking-wider ${seg.textColor}`}>
                        {seg.badge}
                      </span>
                      <SegIcon className={`w-3.5 h-3.5 ${seg.textColor}`} />
                    </div>
                    <div className="text-xs font-bold text-white truncate">{seg.title}</div>
                    <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{seg.desc}</div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Mobile Segments Horizontal Pills */}
          <div className="lg:hidden mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {wheelSegments.map((seg, idx) => {
              const isSelected = activeWheelIndex === idx;
              return (
                <button
                  key={seg.id}
                  type="button"
                  onClick={() => { setActiveWheelIndex(idx); setIsAutoRotating(false); }}
                  className={`p-2 rounded-lg border text-left text-xs transition-colors ${
                    isSelected
                      ? 'bg-slate-800 border-cyan-400 text-white'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="font-mono text-[10px] font-bold text-cyan-400">{seg.shortTag}</div>
                  <div className="font-bold truncate text-white">{seg.title}</div>
                </button>
              );
            })}
          </div>

          {/* Telemetry Footer Bar */}
          <div className="mt-8 pt-4 border-t border-slate-800/80">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              <div className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800/90 backdrop-blur-md flex items-center gap-2.5 hover:border-emerald-500/40 transition-colors">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <div className="min-w-0 text-left">
                  <div className="text-[11px] font-mono font-bold text-white uppercase tracking-wider truncate">Execution Safety</div>
                  <div className="text-[9.5px] text-slate-400 truncate">Deterministic Guardrails</div>
                </div>
              </div>
              <div className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800/90 backdrop-blur-md flex items-center gap-2.5 hover:border-cyan-500/40 transition-colors">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                <div className="min-w-0 text-left">
                  <div className="text-[11px] font-mono font-bold text-white uppercase tracking-wider truncate">BAPI Grounding</div>
                  <div className="text-[9.5px] text-slate-400 truncate">S/4HANA CDS Schemas</div>
                </div>
              </div>
              <div className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800/90 backdrop-blur-md flex items-center gap-2.5 hover:border-blue-500/40 transition-colors">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shrink-0" />
                <div className="min-w-0 text-left">
                  <div className="text-[11px] font-mono font-bold text-white uppercase tracking-wider truncate">State Persistence</div>
                  <div className="text-[9.5px] text-slate-400 truncate">Atomic Rollback Vault</div>
                </div>
              </div>
              <div className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800/90 backdrop-blur-md flex items-center gap-2.5 hover:border-purple-500/40 transition-colors">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shrink-0" />
                <div className="min-w-0 text-left">
                  <div className="text-[11px] font-mono font-bold text-white uppercase tracking-wider truncate">Sovereign Isolation</div>
                  <div className="text-[9.5px] text-slate-400 truncate">Private Tenant Enclave</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: STRATEGIC PARADIGM TRANSFORMATION (3 Columns)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Layers className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PARADIGM EVOLUTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              The Autonomous Enterprise Evolution
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              How enterprise automation shifts from brittle static scripts to self-healing, governed multi-agent swarms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: Legacy Scripts */}
            <div className="p-6 rounded-2xl border-2 border-slate-200 bg-slate-50/60 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 bg-slate-200/80 px-2.5 py-1 rounded-md">
                  LEGACY ERA
                </span>
                <h3 className="text-lg font-black text-slate-900">
                  Brittle RPA Scripts
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Fixed sequential steps breaking whenever UI elements change or unexpected data structures arrive.
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-200 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="text-rose-500 font-bold">&times;</span>
                    <span>Fragile screen scraping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-500 font-bold">&times;</span>
                    <span>Zero semantic adaptation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-500 font-bold">&times;</span>
                    <span>High maintenance overhead</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Conversational Copilots */}
            <div className="p-6 rounded-2xl border-2 border-sky-200 bg-sky-50/40 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0] bg-sky-100 px-2.5 py-1 rounded-md">
                  HYBRID ERA
                </span>
                <h3 className="text-lg font-black text-slate-900">
                  Passive Copilots
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Conversational chatbots generating text advice that still requires human operators to execute every system step.
                </p>
                <div className="space-y-2 pt-2 border-t border-sky-200 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-500 font-bold">~</span>
                    <span>Natural language assistance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-500 font-bold">~</span>
                    <span>Manual copy-paste action</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-500 font-bold">~</span>
                    <span>Disconnected from ERP state</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Autonomous Multi-Agent Swarms */}
            <div className="p-6 rounded-2xl border-2 border-[#0070C0] bg-gradient-to-b from-sky-50/90 to-blue-50/50 shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#0070C0] px-2.5 py-1 rounded-md">
                  AUTONOMOUS ERA
                </span>
                <h3 className="text-lg font-black text-[#0070C0]">
                  Governed Multi-Agent Swarms
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  Goal-oriented autonomous agents decomposing complex work, calling schema-validated BAPIs, and resolving exceptions.
                </p>
                <div className="space-y-2 pt-2 border-t border-sky-300 text-xs text-slate-800 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Deterministic tool calling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Closed-loop ERP posting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Human-in-the-loop gates</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CLEAN CORE ARCHITECTURE BLUEPRINT (Image 3 of 4 - Same Layout as Generative AI)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Layers className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PLATFORM ARCHITECTURE BLUEPRINT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Clean Core Autonomous Agent Fabric
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
              A sovereign runtime decoupling cognitive reasoning from transactional committals, ensuring zero unexpected database mutations and complete traceability.
            </p>
          </div>

          {/* Architecture Neural Mesh Visual Card (Image 3 of 4) */}
          <div className="rounded-3xl overflow-hidden border-2 border-slate-200 bg-slate-950 shadow-xl relative group">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 relative h-72 sm:h-80 lg:h-96 overflow-hidden">
                <img
                  src="/images/ai_agents_architecture_mesh.jpg"
                  alt="Multi-Agent Autonomous Neural Architecture Mesh"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-950/90 hidden lg:block pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent lg:hidden pointer-events-none" />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-400/40 text-xs font-mono font-bold text-cyan-300 shadow-sm flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-cyan-400" />
                  <span>AUTONOMOUS AGENT FABRIC BLUEPRINT</span>
                </div>
              </div>
              <div className="lg:col-span-5 p-6 sm:p-8 space-y-4 text-white">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                  Clean Core Action Mesh
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-snug">
                  Hierarchical Multi-Agent Swarm Orchestration
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Coordinating autonomous planning, type-checked tool calling, and human-in-the-loop approval gates. Directly committed into SAP S/4HANA BAPIs with atomic transactional rollback guarantees.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-cyan-200">
                  <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15">&check; Type-Safe BAPIs</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15">&check; Threshold Approvals</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15">&check; Atomic Rollbacks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: MODULAR SOLUTIONS (3x3 Grid - EXACT Generative AI Card Format, NO Images)
          ========================================================================= */}
      <section id="agent-solutions" className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-slate-200 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>ENTERPRISE AUTONOMOUS BLUEPRINTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Modular Enterprise AI Agent Blueprints
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Production-ready agent swarms engineered to decompose tasks, execute schema-validated tool calls, and post closed-loop ERP actions.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-7 sm:mb-8">
            {[
              { id: 'ALL', label: 'All Solutions' },
              { id: 'FINANCE', label: 'Finance & ERP' },
              { id: 'SUPPLY CHAIN', label: 'Supply Chain & Ops' },
              { id: 'GOVERNANCE', label: 'IT & Governance' }
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveSolutionCategory(cat.id)}
                className={`industry-category-tab px-4 py-2 rounded-full transition-all duration-300 text-xs sm:text-sm font-semibold ${
                  activeSolutionCategory === cat.id
                    ? 'bg-[#0070C0] text-white shadow-md shadow-[#0070C0]/25 scale-105'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-300 hover:border-slate-400 shadow-2xs'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 3x3 Card Grid (No Images, Exact Same Structure and Font as Generative AI) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {agentSolutions
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

                      <h3 className="text-lg font-bold text-slate-950 group-hover:text-[#0070C0] transition-colors leading-snug">
                        {sol.title}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {sol.description}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-slate-100">
                        {sol.highlights.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0070C0] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div className="bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-600 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Clean Core Verified</span>
                      </div>
                      <span className="text-xs font-bold text-[#0070C0] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        Explore <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: VALUE ARCHITECTURE SCORECARD (ZERO numbers/percentages)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <TrendingUp className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>MEASURABLE BUSINESS IMPACT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Enterprise Value Architecture Scorecard
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Core architectural foundations achieved when autonomous agents are grounded in private enterprise context.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {roiBenchmarks.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`p-6 sm:p-7 rounded-2xl bg-white border-2 ${item.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden space-y-4`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-lg bg-sky-50 text-[#0070C0] text-xs font-mono font-black tracking-wider uppercase border border-sky-200">
                        {item.status}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] border border-sky-200 flex items-center justify-center group-hover:bg-[#0070C0] group-hover:text-white transition-all shadow-xs">
                        <ItemIcon className="w-5 h-5" />
                      </div>
                    </div>

                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 text-[11px] font-mono font-bold text-slate-700 uppercase tracking-wider">
                      {item.badge}
                    </span>

                    <h3 className="text-lg font-black text-slate-900 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-mono font-bold text-[#0070C0]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Enterprise Verified Architecture</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: AUTONOMOUS MULTI-AGENT COMMAND SANDBOX (Image 4 of 4 - Zero Gap Above/Below)
          ========================================================================= */}
      <section className="py-5 sm:py-7 bg-gradient-to-b from-[#050C18] via-[#09152B] to-[#040A14] border-b border-slate-800 relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-4 sm:mb-5 space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/90 border border-cyan-400/50 text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300">
              <Bot className="w-3 h-3 text-cyan-400" />
              <span>COGNITIVE MULTI-AGENT EXECUTION SANDBOX</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Autonomous Multi-Agent Action & Policy Enforcement
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-normal">
              Watch autonomous multi-agent swarms decompose exceptions, validate intermediate tool calls, and execute closed-loop ERP actions.
            </p>
          </div>

          {/* Interactive Document Analysis Command Pod */}
          <div className="rounded-xl border border-cyan-500/30 bg-slate-900/90 shadow-xl p-3 sm:p-4 backdrop-blur-xl relative overflow-hidden">
            
            {/* Top Header Row: Document Metadata & Live Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-2.5 mb-3 gap-2">
              <div className="space-y-1 text-left">
                {/* Document Tabs Switcher */}
                <div className="flex flex-wrap gap-1.5">
                  {(['finance', 'supplyChain', 'governance'] as const).map((docKey) => {
                    const doc = auditDocuments[docKey];
                    const isSelected = activeDocTab === docKey;
                    return (
                      <button
                        key={doc.id}
                        type="button"
                        onClick={() => setActiveDocTab(docKey)}
                        className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm shadow-cyan-500/30'
                            : 'bg-white/10 text-slate-300 hover:text-white hover:bg-white/15 border border-white/10'
                        }`}
                      >
                        <Bot className="w-3 h-3" />
                        <span>{doc.tabLabel}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-0.5 flex flex-wrap items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {auditDocuments[activeDocTab].title}
                  </h3>
                  <span className="text-[11px] sm:text-xs text-slate-400">
                    &bull; {auditDocuments[activeDocTab].fileInfo}
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2 shrink-0">
                <div className={`px-2.5 py-1 rounded-md border text-[11px] font-mono font-bold flex items-center gap-1.5 shadow-sm ${auditDocuments[activeDocTab].riskBadgeColor}`}>
                  <AlertTriangle className="w-3 h-3 shrink-0" />
                  <span>{auditDocuments[activeDocTab].riskLevel}</span>
                </div>
              </div>
            </div>

            {/* Main Showcase Grid: Visual Image (Image 4 of 4) + Structured Extracted Findings */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
              
              {/* Left Column: Visual AI Document Scan (Image 4 of 4 - Zero Dead Space Above or Below) */}
              <div 
                className="lg:col-span-5 relative rounded-xl overflow-hidden border border-cyan-400/40 shadow-lg group min-h-[260px] sm:min-h-[300px] lg:min-h-full cursor-pointer"
                onClick={() => setFullScreenAuditDoc(auditDocuments[activeDocTab])}
                title="Click to view image in full screen"
              >
                <img
                  src={auditDocuments[activeDocTab].image || "/images/ai_agents_sandbox_execution.jpg"}
                  alt={auditDocuments[activeDocTab].title}
                  className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105 brightness-105 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-cyan-400/50 text-[10px] font-mono font-bold text-cyan-300 flex items-center gap-1.5 z-10 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{auditDocuments[activeDocTab].tabLabel} Execution Console</span>
                </div>

                {/* Full Screen Button indicator */}
                <div className="absolute top-2.5 right-2.5 z-10">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/70 hover:bg-[#0070C0] text-white border border-white/20 backdrop-blur-md text-[10px] font-mono font-bold transition-all shadow-md">
                    <Maximize2 className="w-3 h-3 text-cyan-300" />
                    <span>Full Screen</span>
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/15 text-white text-left z-10 space-y-0.5">
                  <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                    Zero Hallucination Action
                  </span>
                  <div className="text-xs font-bold text-emerald-300">
                    Deterministic Reasoning Traces with SAP System Action
                  </div>
                </div>
              </div>

              {/* Right Column: High-Visibility Extracted Intelligence Cards */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-2">
                
                {/* 3 Compact High-Contrast Findings Boxes */}
                <div className="space-y-1.5">
                  {auditDocuments[activeDocTab].findings.map((finding, fIdx) => (
                    <div
                      key={fIdx}
                      className={`p-2.5 sm:p-3 rounded-lg bg-black/70 border ${finding.borderColor} transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-sm`}
                    >
                      <div className="space-y-0.5 text-left flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className={`px-1.5 py-0.5 rounded border text-[10px] font-mono font-bold uppercase ${finding.levelColor}`}>
                            {finding.level}
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-white">
                            {finding.title}
                          </h4>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-2">
                          {finding.desc}
                        </p>
                      </div>

                      <div className="text-left sm:text-right shrink-0">
                        <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-cyan-300 border border-white/10">
                          {finding.citation}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recommendation Box */}
                <div className="p-2.5 sm:p-3 rounded-lg bg-gradient-to-r from-cyan-950/80 to-blue-950/80 border border-cyan-500/30 text-left space-y-1 shadow-inner">
                  <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>EXECUTIVE ACTION RECOMMENDATION</span>
                  </div>
                  <p className="text-xs text-white font-medium leading-relaxed">
                    {auditDocuments[activeDocTab].recommendation}
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: SOVEREIGN GOVERNANCE & OPERATIONAL GUARDRAILS
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>ENTERPRISE GOVERNANCE & SAFEGUARDS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Sovereign Operational Guardrails
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Four non-negotiable operational checkpoints ensuring autonomous agents remain strictly aligned with enterprise policies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200/90 shadow-sm hover:border-[#0070C0] transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center border border-sky-200">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">Zero-Trust Tool IAM</h3>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                Agents execute under ephemeral, least-privilege tokens signed against corporate OAuth2 directory scopes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200/90 shadow-sm hover:border-[#0070C0] transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center border border-sky-200">
                <CheckSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">Schema Type Safety</h3>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                Payload parameters strictly conform to SAP CDS views and release contracts before outbound dispatch.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200/90 shadow-sm hover:border-[#0070C0] transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center border border-sky-200">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">HITL Sign-Off Gates</h3>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                Automated escalation to finance and operational executives whenever expenditure thresholds are crossed.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200/90 shadow-sm hover:border-[#0070C0] transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center border border-sky-200">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">Cryptographic Audit</h3>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                Step-by-step reasoning chains and tool invocations recorded in tamper-evident sovereign audit logs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: FINAL CTA (Identical to Generative AI Page)
          ========================================================================= */}
      <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-r from-[#003B73] via-[#005B9E] to-[#0070C0] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-cyan-200 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>DEPLOY GOVERNED AI AGENTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Deploy Autonomous Multi-Agent Swarms?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Empower your enterprise with deterministic tool calling, closed-loop ERP actions, and uncompromised sovereign governance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact?.('AI Agents Practice Consultation')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group"
            >
              <span>Consult Our AI Agent Architects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0070C0]" />
            </button>

            <Link
              to="/digital-intelligence"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all flex items-center gap-2"
            >
              <span>Explore Digital Intelligence</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE FULL-SCREEN LIGHTBOX MODAL: AGENT ARCHITECTURE STEP
          ========================================================================= */}
      {fullScreenAgentStep && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
          onClick={() => setFullScreenAgentStep(null)}
        >
          {/* Top Bar with Header & Close Button */}
          <div 
            className="w-full max-w-7xl flex items-center justify-between border-b border-white/10 pb-4 text-white z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <div>
                <h3 className="text-sm sm:text-base font-bold font-sans tracking-wide">
                  {fullScreenAgentStep.label} &bull; {fullScreenAgentStep.sublabel}
                </h3>
                <p className="text-xs text-cyan-300 font-mono">
                  {fullScreenAgentStep.tech}
                </p>
              </div>
            </div>

            <button
              onClick={() => setFullScreenAgentStep(null)}
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white hover:text-cyan-300 transition-all border border-white/20 shadow-lg flex items-center gap-1.5"
              aria-label="Close full screen view"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="hidden sm:inline text-xs font-mono font-bold pr-1">ESC</span>
            </button>
          </div>

          {/* Full Screen Image Presentation Container */}
          <div 
            className="relative flex-1 w-full max-w-7xl flex items-center justify-center p-2 sm:p-4 my-auto overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={fullScreenAgentStep.image}
              alt={fullScreenAgentStep.label}
              className="max-w-full max-h-[82vh] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-cyan-500/40 ring-2 ring-cyan-400/30 filter brightness-105 contrast-105"
            />
          </div>

          {/* Bottom Info Bar with Telemetry */}
          <div 
            className="w-full max-w-7xl pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-slate-300 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4">
              <span className="text-cyan-300">&bull; {fullScreenAgentStep.desc}</span>
            </div>
            <div className="text-slate-400 text-center sm:text-right shrink-0">
              Press <kbd className="px-2 py-0.5 rounded bg-white/10 text-white border border-white/20 font-bold">ESC</kbd> or click outside to exit full screen
            </div>
          </div>
        </div>
      )}

      {/* Full-Screen Interactive Lightbox Modal for Section 9 Audit Document */}
      {fullScreenAuditDoc && (
        <div 
          className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6 lg:p-8 animate-fadeIn"
          onClick={() => setFullScreenAuditDoc(null)}
        >
          {/* Top Bar with Header & Close Button */}
          <div 
            className="w-full max-w-7xl flex items-center justify-between border-b border-white/10 pb-4 text-white z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <div>
                <h3 className="text-sm sm:text-base font-bold font-sans tracking-wide">
                  {fullScreenAuditDoc.title}
                </h3>
                <p className="text-xs text-cyan-300 font-mono">
                  {fullScreenAuditDoc.tabLabel} &bull; {fullScreenAuditDoc.fileInfo}
                </p>
              </div>
            </div>

            <button
              onClick={() => setFullScreenAuditDoc(null)}
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white hover:text-cyan-300 transition-all border border-white/20 shadow-lg flex items-center gap-1.5"
              aria-label="Close full screen view"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="hidden sm:inline text-xs font-mono font-bold pr-1">ESC</span>
            </button>
          </div>

          {/* Full Screen Image Presentation Container */}
          <div 
            className="relative flex-1 w-full max-w-7xl flex items-center justify-center p-2 sm:p-4 my-auto overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={fullScreenAuditDoc.image}
              alt={fullScreenAuditDoc.title}
              className="max-w-full max-h-[82vh] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-cyan-500/40 ring-2 ring-cyan-400/30 filter brightness-105 contrast-105"
            />
          </div>

          {/* Bottom Info Bar with Telemetry */}
          <div 
            className="w-full max-w-7xl pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-slate-300 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4">
              <span className="text-cyan-300">&bull; {fullScreenAuditDoc.recommendation}</span>
            </div>
            <div className="text-slate-400 text-center sm:text-right shrink-0">
              Press <kbd className="px-2 py-0.5 rounded bg-white/10 text-white border border-white/20 font-bold">ESC</kbd> or click outside to exit full screen
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AiAgentsPracticePage;
