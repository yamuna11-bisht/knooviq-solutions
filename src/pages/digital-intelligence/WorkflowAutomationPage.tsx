import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Database,
  Network,
  Layers,
  ShieldCheck,
  Zap,
  BarChart3,
  FileCheck,
  AlertTriangle,
  RefreshCw,
  Search,
  ChevronRight,
  Shield,
  Scale,
  Activity,
  Lock,
  Play,
  Pause,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronDown,
  ExternalLink,
  XCircle,
  Server,
  Workflow,
  Cpu,
  GitBranch,
  Terminal,
  Code2,
  Sliders,
  FileSpreadsheet,
  Eye,
  TrendingUp,
  PieChart,
  LineChart,
  Binary,
  Target,
  Gauge,
  BrainCircuit,
  Wrench,
  Boxes,
  HelpCircle,
  Microscope,
  Compass,
  Check,
  Bot,
  UserCheck,
  FileText,
  Clock,
  Shuffle,
  GitCommit,
  Maximize2,
  X
} from 'lucide-react';

interface WorkflowAutomationPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const WorkflowAutomationPage: React.FC<WorkflowAutomationPageProps> = ({
  onOpenContact
}) => {
  // Lightbox modal state for hero visual
  const [isHeroModalOpen, setIsHeroModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsHeroModalOpen(false);
    };
    if (isHeroModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isHeroModalOpen]);

  // State for Section 2: Executive Perspective Interactive Evolution
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

  // State for Section 4: Circular Chevron Ecosystem Wheel (Continuous Auto-Rotation)
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(0);

  // Auto-tour rotation for Section 4 (Always Automatic)
  useEffect(() => {
    const interval = setInterval(() => {
      setHoveredWheelIndex((prev) => (prev === null ? 0 : (prev + 1) % 8));
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // State for Section 5: Architecture Comparison Sandbox Tab
  const [activeSandboxTab, setActiveSandboxTab] = useState<'comparison' | 'layers' | 'protocols'>('comparison');

  // State for Section 5 Tab 3: Specific Protocol Sandbox Sub-Tab
  const [activeProtocolTab, setActiveProtocolTab] = useState<'distributed-saga' | 'hitl-routing' | 'self-healing'>('distributed-saga');

  // State for Section 7: FAQ Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // =========================================================================
  // DATA STRUCTURES
  // =========================================================================

  // Section 4: Circular Chevron Segments (8 Interlocking Workflow Automation Layers)
  const wheelSegments = [
    {
      id: 'cross-system-choreography',
      shortTag: 'ORCHESTRATION',
      title: 'Cross-System Process Choreography',
      desc: 'Distributed state engines managing multi-step transactions and long-running business sagas across SAP S/4HANA, Salesforce, and cloud microservices.',
      badge: 'MULTI-SYSTEM SAGAS',
      metric: 'Zero Manual Hand-offs',
      side: 'right',
      color: '#0070C0',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(0, 112, 192, 0.35)',
      icon: Workflow
    },
    {
      id: 'intelligent-document-processing',
      shortTag: 'COGNITIVE IDP',
      title: 'Intelligent Document Processing (IDP)',
      desc: 'Multimodal AI extracting, structuring, and validating data from unstructured invoices, contracts, and shipping bills directly into ERP records.',
      badge: 'AI DATA EXTRACTION',
      metric: '99.4% Field Accuracy',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(2, 132, 199, 0.35)',
      icon: FileText
    },
    {
      id: 'resilient-rpa-bots',
      shortTag: 'BOT RUNTIME',
      title: 'Resilient Robotic Process Automation (RPA)',
      desc: 'API-first robotic task executors bridging legacy desktop applications and greenfield cloud portals with automated exception retries.',
      badge: 'RESILIENT BOT FLEET',
      metric: '99.9% Execution Reliability',
      side: 'right',
      color: '#06B6D4',
      textColor: 'text-cyan-300',
      bgGlow: 'rgba(6, 182, 212, 0.35)',
      icon: Bot
    },
    {
      id: 'declarative-business-rules',
      shortTag: 'RULES ENGINE',
      title: 'Dynamic Business Rules (DMN / BRMS)',
      desc: 'Centralized, version-controlled decision tables and discount authorization policies that business analysts modify without engineering code deploys.',
      badge: 'DECLARATIVE POLICIES',
      metric: 'Zero-Code Policy Changes',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.35)',
      icon: Sliders
    },
    {
      id: 'human-in-the-loop',
      shortTag: 'HITL TRIAGE',
      title: 'Contextual Human-in-the-Loop (HITL)',
      desc: 'Seamless escalation routing delivering pre-filled exception cards with high-confidence AI suggestions to specialized managers for instant one-click approval.',
      badge: 'EXCEPTION RESOLUTION',
      metric: '4.8x Faster Sign-Offs',
      side: 'left',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.35)',
      icon: UserCheck
    },
    {
      id: 'event-driven-triggers',
      shortTag: 'EVENT BROKER',
      title: 'Event-Driven Workflow Dispatch',
      desc: 'Sub-second event routers listening to IoT alerts, webhook callbacks, and ERP commit logs to trigger downstream automations instantly.',
      badge: 'SUB-SECOND DISPATCH',
      metric: '< 15ms Trigger Latency',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: Zap
    },
    {
      id: 'process-mining-telemetry',
      shortTag: 'TELEMETRY',
      title: 'Process Mining & Continuous Optimization',
      desc: 'Continuous telemetry logging tracking step durations, rework loops, and bottleneck friction points to recommend automated workflow refactoring.',
      badge: 'CONTINUOUS REFINEMENT',
      metric: 'Live Friction Discovery',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.35)',
      icon: Gauge
    },
    {
      id: 'enterprise-security-audit',
      shortTag: 'AUDIT TRAIL',
      title: 'Enterprise Audit Trail & SOX Governance',
      desc: 'Immutable cryptographic execution logs recording every bot transaction, human sign-off, and parameter change for total regulatory compliance.',
      badge: 'SOX & GRC GOVERNED',
      metric: '100% Traceability Proof',
      side: 'left',
      color: '#6366F1',
      textColor: 'text-indigo-400',
      bgGlow: 'rgba(99, 102, 241, 0.35)',
      icon: ShieldCheck
    }
  ];

  // Calculation for circular chevron SVG path
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

  // Section 2: Journey Steps (6 Progressive Workflow Automation Evolution Phases)
  const journeySteps = [
    {
      id: 'event-process-ingestion',
      label: '1. Event Ingestion',
      sublabel: 'Multi-Channel Triggers',
      desc: 'Capturing inbound transactions, customer emails, IoT alerts, and ERP database changes via unified event gateways without polling delays.',
      tech: 'Kafka, Webhooks, SAP Event Mesh',
      icon: Zap,
      highlights: [
        'Instant Event-Driven Triggering',
        'Multi-Channel Ingestion Gateways',
        'Zero-Latency Workload Induction'
      ]
    },
    {
      id: 'dynamic-rules-decisioning',
      label: '2. Dynamic Rules Engine',
      sublabel: 'Declarative DMN Policies',
      desc: 'Evaluating business rules, credit limits, discount matrices, and regulatory eligibility criteria in milliseconds using versioned decision tables.',
      tech: 'Camunda DMN, SAP Build Rules',
      icon: Sliders,
      highlights: [
        'Declarative Business Decision Models',
        'Automated Tiered Approval Routing',
        'Auditable Logic Versioning'
      ]
    },
    {
      id: 'cross-app-integration',
      label: '3. Cross-App Orchestration',
      sublabel: 'Distributed Saga Engine',
      desc: 'Executing atomic transactions across SAP S/4HANA, Salesforce, and Workday with automated rollback compensations in case of intermediate failure.',
      tech: 'Temporal, Camunda, SAP BTP Integration',
      icon: Workflow,
      highlights: [
        'Two-Phase Commit & Saga Execution',
        'Automated Failure Compensation',
        'Clean Core Decoupled ERP Calls'
      ]
    },
    {
      id: 'human-in-the-loop-triage',
      label: '4. Human-in-the-Loop',
      sublabel: 'Contextual Exception Triage',
      desc: 'Empowering operations managers with structured approval interfaces displaying AI-extracted data, risk scores, and one-click authorization.',
      tech: 'Slack/Teams Bots, Custom Web Portals',
      icon: UserCheck,
      highlights: [
        'AI Contextual Pre-Fill Cards',
        'Mobile & Chat-Native One-Click Sign-Off',
        'SLA Escalation Timer Interlocks'
      ]
    },
    {
      id: 'process-telemetry-monitoring',
      label: '5. Real-Time Telemetry',
      sublabel: 'Operational Control Tower',
      desc: 'Tracking live cycle times, active case queues, bot health, and SLA burn rates across global operations with sub-second drill-through.',
      tech: 'Prometheus, Grafana, OpenTelemetry',
      icon: Gauge,
      highlights: [
        'Live Active Case Telemetry',
        'SLA Breach Warning Heatmaps',
        'Root-Cause Bottleneck Isolation'
      ]
    },
    {
      id: 'autonomous-optimization',
      label: '6. Autonomous Refinement',
      sublabel: 'Self-Healing Workflows',
      desc: 'Applying machine learning to continuously optimize route allocations, auto-adjust retry backoffs, and recommend automated process simplifications.',
      tech: 'Predictive MLOps & Process Mining',
      icon: BrainCircuit,
      highlights: [
        'Automated Transient Retry Tuning',
        'Dynamic Worker Capacity Balancing',
        'Self-Healing Process Execution'
      ]
    }
  ];

  // Section 3: Enterprise Automation Challenges (6 Comprehensive Cards)
  const workflowChallenges = [
    {
      icon: Boxes,
      tag: 'AUTOMATION SILO SPRAWL',
      title: 'Fragile Task Bots & Script Sprawl',
      desc: 'Uncoordinated RPA desktop scripts and point automation tools break frequently when UI screens update, creating expensive maintenance headaches.',
      footer: 'API-First Workflow Orchestration'
    },
    {
      icon: Shuffle,
      tag: 'SWIVEL-CHAIR OVERHEAD',
      title: 'Workers Re-Typing Across Disparate ERPs',
      desc: 'Employees waste thousands of hours manually copying invoice numbers, purchase orders, and customer details between CRM, email, and SAP ledgers.',
      footer: 'Zero-Touch Straight-Through Processing'
    },
    {
      icon: Clock,
      tag: 'OPAQUE APPROVAL QUEUES',
      title: 'Tasks Stranded in Invisible Backlogs',
      desc: 'Critical customer credit approvals and supplier onboarding workflows stall indefinitely in executive inboxes with zero visibility or SLA accountability.',
      footer: 'Automated Escalation Timers & HITL Triage'
    },
    {
      icon: AlertTriangle,
      tag: 'BRITTLE EXCEPTION CRISES',
      title: 'Unforeseen Formats Halting Operations',
      desc: 'Minor layout variations in vendor PDF invoices cause rigid legacy scripts to fail, forcing business operations into manual emergency paper processing.',
      footer: 'Multimodal Cognitive IDP Extraction'
    },
    {
      icon: ShieldCheck,
      tag: 'COMPLIANCE GOVERNANCE DRIFT',
      title: 'Ungoverned Macros Leaking Sensitive PII',
      desc: 'Frustrated employees build uncontrolled Excel macros and shadow automations that bypass SOX controls, creating severe security vulnerabilities.',
      footer: 'Centralized Role-Based Audit Ledgers'
    },
    {
      icon: RefreshCw,
      tag: 'CLEAN CORE EROSION',
      title: 'Custom ERP Code Stifling Upgrades',
      desc: 'Hardcoded custom business logic inside core SAP systems creates technical debt that blocks cloud migrations and quarterly SaaS update releases.',
      footer: 'Decoupled Clean Core Extension Mesh'
    }
  ];

  // Section 5: Side-by-side Architectural Comparison Matrix
  const architecturalComparison = [
    {
      dimension: 'Process Architecture',
      legacyApproach: 'Rigid point-to-point scripts and brittle desktop screen scrapers that break whenever system UIs receive an update.',
      modernApproach: 'Decoupled, event-driven distributed state orchestration executing resilient transactions via enterprise APIs.',
      statusBadge: 'EVENT-DRIVEN'
    },
    {
      dimension: 'Data Entry & Extraction',
      legacyApproach: 'Manual human transcription or primitive template-based OCR requiring custom layout rules for every single vendor.',
      modernApproach: 'Multimodal foundation AI extracting unstructured invoice and contract fields with 99.4% straight-through accuracy.',
      statusBadge: 'COGNITIVE IDP'
    },
    {
      dimension: 'Exception Handling',
      legacyApproach: 'Failed jobs crash silently into log files, requiring manual IT ticket escalation and days of back-and-forth investigation.',
      modernApproach: 'Contextual Human-in-the-Loop workflows routing exceptions with pre-filled suggestions directly to managers.',
      statusBadge: 'HITL TRIAGE'
    },
    {
      dimension: 'Observability & SLAs',
      legacyApproach: 'Opaque black-box execution with zero visibility into where an order is blocked until a client submits a complaint.',
      modernApproach: 'Real-time telemetry control tower displaying active case progression, cycle time analytics, and SLA breach warnings.',
      statusBadge: 'REAL-TIME HUD'
    },
    {
      dimension: 'ERP Clean Core Health',
      legacyApproach: 'Custom ABAP code and tightly coupled database modifications that delay ERP cloud upgrades by months.',
      modernApproach: 'Side-by-side extensions built on SAP BTP keeping the ERP core pristine and 100% cloud upgrade-ready.',
      statusBadge: 'CLEAN CORE'
    }
  ];

  // Section 5: Protocol Sandbox Tab Specifications
  const protocolDetails = {
    'distributed-saga': {
      badge: 'CROSS-SYSTEM SAGA ORCHESTRATOR',
      title: 'Enterprise Distributed Transaction Coordinator',
      desc: 'Coordinate complex multi-system transactions across SAP S/4HANA, Salesforce, and warehouse systems with guaranteed two-phase commit and rollback compensations.',
      specs: [
        { label: 'Orchestration Engine', val: 'Temporal / Camunda State Machine' },
        { label: 'Compensation Mode', val: 'Automated Backward Compensation' },
        { label: 'Execution Throughput', val: '> 25,000 Workflows/Minute' },
        { label: 'State Persistence', val: 'Clustered Multi-Region Ledger' }
      ],
      steps: [
        { name: 'Workflow Induction', detail: 'Captures incoming sales order and reserves credit in Salesforce CRM.' },
        { name: 'ERP Stock Allocation', detail: 'Executes atomic inventory reservation in SAP S/4HANA via clean core OData API.' },
        { name: 'Compensating Safeguard', detail: 'Automatically cancels reservation if downstream 3PL warehouse confirmation fails.' }
      ]
    },
    'hitl-routing': {
      badge: 'CONTEXTUAL HITL PROTOCOL',
      title: 'Contextual Exception Triage & Approvals',
      desc: 'Intercept abnormal variance transactions, enrich with historical audit context, and deliver interactive approval cards via Slack, Teams, or mobile web.',
      specs: [
        { label: 'Confidence Threshold', val: 'Configurable (Default 95% Cutoff)' },
        { label: 'Delivery Channels', val: 'Microsoft Teams, Slack, Web Portal' },
        { label: 'Average Turnaround', val: '< 12 Minutes Mean Sign-Off' },
        { label: 'Audit Lineage', val: 'Cryptographic User Signature Log' }
      ],
      steps: [
        { name: 'Anomaly Interception', detail: 'Machine learning flags high-value purchase order exceeding regional budget tolerance.' },
        { name: 'Context Enrichment', detail: 'Pre-compiles historical spend trends, vendor contract terms, and AI recommendations.' },
        { name: 'One-Click Decision', detail: 'Approver taps authorize; workflow instantly commits transaction into SAP finance ledger.' }
      ]
    },
    'self-healing': {
      badge: 'RESILIENT RUNTIME MESH',
      title: 'Self-Healing Workflow & Circuit Breaker',
      desc: 'Prevent cascading system outages during external API downtime through intelligent exponential backoffs, circuit breakers, and dead-letter queues.',
      specs: [
        { label: 'Circuit Breaker', val: 'Automated Fast-Fail on 5xx Errors' },
        { label: 'Retry Strategy', val: 'Exponential Jitter Backoff' },
        { label: 'Dead-Letter Handling', val: 'Automated Quarantine & Alerting' },
        { label: 'Recovery Mode', val: 'Hot Re-Play Zero State Loss' }
      ],
      steps: [
        { name: 'Transient Failure Detection', detail: 'Detects 3PL carrier gateway timeout during shipping label dispatch.' },
        { name: 'Adaptive Jitter Retry', detail: 'Suspends execution and schedules progressive retries avoiding target server thrashing.' },
        { name: 'Seamless Re-Engagement', detail: 'Resumes workflow execution automatically once downstream API health confirms green.' }
      ]
    }
  };

  // Section 6: Phased Transformation Stages
  const transformationPhases = [
    {
      phase: 'STAGE 01',
      title: 'Process Discovery & Opportunity Prioritization',
      focus: 'Analyzing end-to-end operational workflows, calculating friction cost baselines, identifying high-ROI manual bottlenecks, and framing target architecture.',
      deliverable: 'Hyperautomation Value Matrix & Process Blueprint',
      icon: Search
    },
    {
      phase: 'STAGE 02',
      title: 'Core Orchestration Engine & ERP Connector Deployment',
      focus: 'Deploying the central workflow state engine, configuring clean core SAP connectors, integrating enterprise identity, and setting up CI/CD pipelines.',
      deliverable: 'Production Workflow State Machine & BTP Integrations',
      icon: Workflow
    },
    {
      phase: 'STAGE 03',
      title: 'Cognitive Extraction & Human-in-the-Loop Integration',
      focus: 'Implementing multimodal AI document extractors, configuring declarative business rules (DMN), and deploying chat-native approval portals.',
      deliverable: 'AI Document Pipelines & Operational Approval Portals',
      icon: Bot
    },
    {
      phase: 'STAGE 04',
      title: 'Autonomous Optimization & Enterprise Scale-Out',
      focus: 'Scaling workflows across global business units, activating self-healing circuit breakers, and measuring realized cycle time and cost compressions.',
      deliverable: 'Enterprise Control Tower & Continuous Optimization Loops',
      icon: Activity
    }
  ];

  // Section 7: Enterprise FAQs
  const workflowFaqs = [
    {
      question: 'How does KNOOVIQ workflow automation preserve our SAP Clean Core architecture?',
      answer: 'We architect workflow automations side-by-side using SAP Business Technology Platform (SAP BTP) and enterprise orchestration engines like Camunda and Temporal. Rather than modifying core SAP S/4HANA tables with brittle custom ABAP code, our workflows interact via standard OData APIs, enterprise business events, and RFC interfaces. This keeps your core ERP completely clean, pristine, and ready for frictionless quarterly cloud upgrades.'
    },
    {
      question: 'How do your workflows prevent broken transactions when an external API or microservice crashes?',
      answer: 'Our architectures implement the Distributed Saga Pattern. Complex multi-step business transactions (such as order-to-cash or procure-to-pay) are tracked as stateful sagas. If an external service—such as a credit card gateway or 3PL carrier—fails mid-process, the orchestrator automatically executes deterministic compensating transactions (e.g., releasing inventory reservations or reversing billing authorizations) to ensure perfect transactional integrity.'
    },
    {
      question: 'Can KNOOVIQ workflow automation interface with legacy desktop or terminal applications?',
      answer: 'Yes. While our primary design philosophy is API-first, we recognize that many enterprises maintain specialized legacy terminal, mainframe, or on-prem desktop applications without REST APIs. In these scenarios, we deploy resilient headless RPA agents that handle data entry with robust optical verification and automated retry mechanics until full API migration is completed.'
    },
    {
      question: 'How does Intelligent Document Processing (IDP) handle unstandardized vendor invoices and contracts?',
      answer: 'Unlike legacy OCR systems that rely on rigid spatial templates that break when a vendor alters their logo or column position, KNOOVIQ utilizes multimodal deep learning and Large Language Models (LLMs). The model understands semantic context, extracting line items, tax IDs, and totals regardless of layout. Extracted data is verified against your ERP vendor master before straight-through posting.'
    },
    {
      question: 'What typical cycle time and cost reductions do enterprises experience after implementation?',
      answer: 'Across enterprise finance, procurement, and supply chain engagements, organizations typically achieve a 65% to 85% compression in end-to-end cycle times. For example, accounts payable invoice processing drops from an average of 8 days to under 4 hours, and straight-through processing rates consistently surpass 80%, allowing operational teams to focus on strategic exceptions rather than manual data entry.'
    },
    {
      question: 'How are sensitive corporate payloads, banking data, and executive approvals secured?',
      answer: 'All workflow payloads are encrypted in-flight using TLS 1.3 and at-rest using AES-256 with customer-managed keys (CMK). We enforce granular Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC), ensuring that approvers only view data pertinent to their role. Furthermore, every workflow step and human authorization generates an immutable, SOX-compliant audit log.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#0070C0] selection:text-white antialiased overflow-x-hidden">
      {/* =========================================================================
          SECTION 1: HERO SECTION (AI Agents Style Full Bleed Panoramic Background)
          IMAGE: /images/workflow-automation/enterprise_intelligent_workflow_automation_hero.png
          ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">
        {/* Full-Bleed 16:9 Panoramic Image - AI Agents Style */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/workflow-automation/enterprise_intelligent_workflow_automation_hero.png"
            alt="Enterprise Intelligent Workflow Automation & Process Orchestration"
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center brightness-[1.08] contrast-[1.05]"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
          {/* Lighter radiant blue overlay for lighter, clearer look */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-sky-500/10 mix-blend-screen pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-xl space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.55 }}
              className="space-y-4"
            >
              {/* Practice Pill Badge (Digital Intelligence Practice and Full Screen removed) */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-cyan-500/30 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
                  <Workflow className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Workflow Automation &amp; Orchestration</span>
                </div>
              </div>

              {/* Animated Headline with High-Contrast Typography */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-200">
                  Workflow Automation &amp; Process Orchestration
                </span>
              </h1>

              {/* Subtitle with High Legibility */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal pt-1 drop-shadow-md">
                End-to-end hyperautomation, human-in-the-loop task routing, cross-system ERP process choreography, and autonomous decision agents unifying fragmented enterprise workflows.
              </p>
            </motion.div>

            {/* Enterprise Assurance Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-sm">
                <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Straight-Through Processing</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-sm">
                <Workflow className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ERP Choreography</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 shadow-sm">
                <UserCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Governed HITL Triage</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE PERSPECTIVE (Clean Light Corporate Theme - Large Legible Text)
          IMAGE 2 OF 3: /images/workflow-automation/workflow_cockpit.png
          ========================================================================= */}
      <section id="workflow-evolution" className="py-24 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-300 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Workflow className="w-4 h-4 text-[#0070C0]" />
                <span>EXECUTIVE AUTOMATION PERSPECTIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Architecting Autonomous, Scalable <span className="text-[#0070C0]">Workflow Hyperautomation</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-5 py-3.5 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-2xl">
                <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Point automation tools create fragile task silos; true enterprise velocity requires intelligent workflow orchestration that choreographs transactions across ERPs, legacy systems, and human approvals with auditable compliance and zero manual handoff friction.&rdquo;
                </p>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                Knooviq engineers end-to-end hyperautomation ecosystems that bridge core operational systems with cognitive AI agents. We deploy modern workflow engines, API-first RPA bots, multimodal document processors, and clean core SAP BTP extensions to liberate enterprise talent from routine swivel-chair administration.
              </p>

              {/* 3 Executive Pillars (Clear, Large, Highly Legible Text) */}
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Unified Process Orchestration</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Decoupled workflow state engines managing long-running distributed sagas across multi-cloud enterprise ERPs.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Context-Aware Cognitive Routing</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      AI-assisted task triage and anomaly detection routing complex edge cases to the right human specialists with pre-filled context.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950">Closed-Loop Audit &amp; Compliance</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      Continuous telemetry, cryptographic transaction tracking, and automated SOX regulatory conformance evidence collection.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Interactive Evolution Visual (IMAGE 2 OF 3: 100% Clear, Complete Infographic without any Side Cut) */}
            <div className="lg:col-span-6 space-y-5">
              
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900 group h-[440px] sm:h-[540px] lg:h-[620px] w-full">
                {/* IMAGE 2 */}
                <img
                  src="/images/workflow-automation/architecting_workflow_hyperautomation.png"
                  alt="Architecting Autonomous, Scalable Workflow Hyperautomation"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs sm:text-sm font-mono font-bold text-cyan-300 flex items-center gap-2 shadow-md z-10">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>AUTOMATION FOCUS: {journeySteps[activeJourneyStep].label.toUpperCase()}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1.5 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80 z-10">
                  <div className="text-xs sm:text-sm font-mono font-bold text-cyan-300">{journeySteps[activeJourneyStep].tech}</div>
                  <p className="text-xs sm:text-sm text-slate-100 font-normal leading-relaxed line-clamp-2">{journeySteps[activeJourneyStep].desc}</p>
                </div>
              </div>

              {/* 6 Interactive Step Buttons (Large, Clear, High-Contrast Text) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {journeySteps.map((step, idx) => {
                  const isSelected = activeJourneyStep === idx;
                  const StepIcon = step.icon;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveJourneyStep(idx)}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                        isSelected
                          ? 'bg-[#0070C0] text-white border-2 border-[#0070C0] shadow-md scale-[1.01]'
                          : 'bg-white text-slate-800 border border-slate-200 hover:bg-sky-50 hover:border-[#0070C0]'
                      }`}
                    >
                      <div className={`p-2 rounded-xl shrink-0 ${isSelected ? 'bg-white/20 text-white' : 'bg-sky-50 text-[#0070C0] border border-sky-200'}`}>
                        <StepIcon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold truncate">{step.label}</div>
                        <div className={`text-xs truncate ${isSelected ? 'text-sky-100 font-medium' : 'text-slate-500'}`}>{step.sublabel}</div>
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
          SECTION 3: ENTERPRISE DATA CHALLENGES (Clean Slate-50 - Highly Visible Text)
          ========================================================================= */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              ENTERPRISE FRICTION POINTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Critical Impediments in Fragmented Manual Workflows
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Why brittle task scripts, manual copy-pasting, and disconnected approval queues restrict enterprise velocity and erode margins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {workflowChallenges.map((item, idx) => {
              const ChallengeIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-7 flex flex-col justify-between hover:border-[#0070C0] hover:shadow-xl transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 group-hover:text-[#0070C0] group-hover:bg-sky-50 transition-colors">
                        {item.tag}
                      </span>
                      <div className="p-2.5 rounded-xl bg-sky-50 text-[#0070C0] group-hover:scale-110 transition-transform">
                        <ChallengeIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-400 font-mono text-xs">KNOOVIQ REMEDY:</span>
                    <span className="font-bold text-[#0070C0] font-mono text-xs sm:text-sm">{item.footer}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CIRCULAR CHEVRON ECOSYSTEM (Contrasting Deep Navy Sandbox)
          ========================================================================= */}
      <section className="py-24 bg-[#0B1528] text-white border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-cyan-400 uppercase">
              INTERCONNECTED AUTOMATION ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              The KNOOVIQ Hyperautomation Fabric
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore the eight mutually reinforcing layers of our enterprise workflow orchestration platform. Hover over any segment to inspect its runtime mechanics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Segments (4 Segments) */}
            <div className="lg:col-span-3 space-y-4 order-2 lg:order-1">
              {wheelSegments.slice(4, 8).map((seg, i) => {
                const actualIndex = i + 4;
                const isHovered = hoveredWheelIndex === actualIndex;
                const SegIcon = seg.icon;
                return (
                  <div
                    key={seg.id}
                    onMouseEnter={() => setHoveredWheelIndex(actualIndex)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isHovered
                        ? 'border-sky-400 bg-sky-500/20 shadow-lg shadow-sky-500/20 translate-x-1'
                        : 'border-slate-800 bg-slate-900/85 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <SegIcon className={`w-4 h-4 ${seg.textColor}`} />
                      <span className={`text-sm font-bold ${seg.textColor}`}>{seg.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                      {seg.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Center Circular SVG Wheel */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2">
              <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px]">
                <svg viewBox="0 0 500 500" className="w-full h-full filter drop-shadow-2xl">
                  {wheelSegments.map((segment, index) => {
                    const isHovered = hoveredWheelIndex === index;
                    const pathD = getChevronPath(index);
                    const iconPos = getIconCoords(index);
                    const SegIcon = segment.icon;

                    return (
                      <g
                        key={segment.id}
                        className="cursor-pointer transition-all duration-300"
                        onMouseEnter={() => setHoveredWheelIndex(index)}
                        onMouseLeave={() => setHoveredWheelIndex(null)}
                      >
                        <path
                          d={pathD}
                          fill={segment.color}
                          fillOpacity={isHovered ? 0.95 : 0.3}
                          stroke={segment.color}
                          strokeWidth={isHovered ? 3 : 1.5}
                          className="transition-all duration-300"
                        />
                        <circle
                          cx={iconPos.x}
                          cy={iconPos.y}
                          r={18}
                          fill="#0b1324"
                          stroke={segment.color}
                          strokeWidth={2}
                          className="transition-all duration-300"
                        />
                        <foreignObject
                          x={iconPos.x - 9}
                          y={iconPos.y - 9}
                          width={18}
                          height={18}
                          className="pointer-events-none"
                        >
                          <SegIcon className={`w-4.5 h-4.5 ${segment.textColor}`} />
                        </foreignObject>
                      </g>
                    );
                  })}
                  <circle cx="250" cy="250" r="88" fill="#080e1d" stroke="#00A3E0" strokeWidth="2.5" />
                  <circle cx="250" cy="250" r="76" fill="#0a152d" stroke="#0284c7" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center p-6">
                  {hoveredWheelIndex !== null ? (
                    <motion.div
                      key={hoveredWheelIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-1.5"
                    >
                      <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                        {wheelSegments[hoveredWheelIndex].badge}
                      </span>
                      <div className="text-sm sm:text-base font-black text-white max-w-[150px] mx-auto leading-tight">
                        {wheelSegments[hoveredWheelIndex].title}
                      </div>
                      <div className="text-xs text-slate-300 font-mono">
                        {wheelSegments[hoveredWheelIndex].metric}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="space-y-1.5">
                      <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                        AUTOMATION CORE
                      </span>
                      <div className="text-sm sm:text-base font-black text-white leading-tight">
                        Workflow Mesh
                      </div>
                      <div className="text-xs text-slate-300">
                        Interactive Topology
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Right Segments (4 Segments) */}
            <div className="lg:col-span-3 space-y-4 order-3">
              {wheelSegments.slice(0, 4).map((seg, i) => {
                const isHovered = hoveredWheelIndex === i;
                const SegIcon = seg.icon;
                return (
                  <div
                    key={seg.id}
                    onMouseEnter={() => setHoveredWheelIndex(i)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isHovered
                        ? 'border-sky-400 bg-sky-500/20 shadow-lg shadow-sky-500/20 -translate-x-1'
                        : 'border-slate-800 bg-slate-900/85 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <SegIcon className={`w-4 h-4 ${seg.textColor}`} />
                      <span className={`text-sm font-bold ${seg.textColor}`}>{seg.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                      {seg.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: TOPOLOGICAL ARCHITECTURE BLUEPRINT & COMPARATIVE MATRIX (Clean White Theme)
          IMAGE 3 OF 3: /images/workflow-automation/orchestration_mesh.jpg
          ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              TOPOLOGICAL ARCHITECTURE BLUEPRINT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Modern Workflow Orchestration vs. Legacy Silos
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Examine the concrete architectural difference between fragile point scripts and KNOOVIQ distributed enterprise workflow hyperautomation.
            </p>
          </div>

          {/* Interactive Mode Toggle */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveSandboxTab('comparison')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                activeSandboxTab === 'comparison'
                  ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
              }`}
            >
              Transformation Matrix (Silos vs. Orchestration)
            </button>
            <button
              onClick={() => setActiveSandboxTab('layers')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                activeSandboxTab === 'layers'
                  ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
              }`}
            >
              Full-Stack Blueprint Visual
            </button>
            <button
              onClick={() => setActiveSandboxTab('protocols')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                activeSandboxTab === 'protocols'
                  ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-md'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950 hover:bg-slate-200'
              }`}
            >
              Interactive Automation Protocols
            </button>
          </div>

          {/* TAB 1: Comparative Matrix (High Contrast, Large Visible Text) */}
          {activeSandboxTab === 'comparison' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-slate-200 overflow-hidden shadow-sm"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 text-xs sm:text-sm font-mono uppercase text-slate-700 tracking-wider">
                      <th className="py-4 px-6 font-bold w-1/4">Automation Dimension</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-rose-800 bg-rose-50/70">Legacy Task Silos &amp; Scripts</th>
                      <th className="py-4 px-6 font-bold w-1/3 text-[#0070C0] bg-sky-50/70">KNOOVIQ Workflow Orchestration</th>
                      <th className="py-4 px-5 font-bold text-center">Standard</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm sm:text-base">
                    {architecturalComparison.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-5 px-6 font-bold text-slate-900 flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-[#0070C0] shrink-0" />
                          <span>{row.dimension}</span>
                        </td>
                        <td className="py-5 px-6 text-slate-700 bg-rose-50/20 leading-relaxed font-normal">
                          <div className="flex items-start gap-2.5">
                            <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                            <span>{row.legacyApproach}</span>
                          </div>
                        </td>
                        <td className="py-5 px-6 text-slate-900 bg-sky-50/20 font-semibold leading-relaxed">
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#0070C0] shrink-0 mt-1" />
                            <span>{row.modernApproach}</span>
                          </div>
                        </td>
                        <td className="py-5 px-5 text-center">
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-sky-100 text-[#0070C0] border border-sky-300">
                            {row.statusBadge}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* TAB 2: Full-Stack Architecture Visual */}
          {activeSandboxTab === 'layers' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900 group h-[400px] sm:h-[480px] lg:h-[520px] w-full">
                {/* IMAGE 3 */}
                <img
                  src="/images/workflow-automation/orchestration_mesh.jpg"
                  alt="Enterprise Workflow Hyperautomation Architecture Blueprint and Process Mesh"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 px-4 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs sm:text-sm font-mono font-bold text-cyan-300 flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-cyan-400" />
                  <span>ARCHITECTURE: DISTRIBUTED WORKFLOW HYPERAUTOMATION MESH</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80">
                  <div className="text-sm sm:text-base font-mono font-bold text-cyan-300">
                    Unified Event Induction, Distributed State Machine &amp; Clean Core ERP Connectors
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
                    Decoupled orchestration engine coordinating API transactions across SAP S/4HANA, Salesforce, and cognitive AI extractors with automated two-phase compensations and sub-second SLA monitoring.
                  </p>
                </div>
              </div>

              {/* Architectural Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-sky-100 text-[#0070C0] shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Event Ingestion Gateway</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Sub-second event capture listening to ERP commits, customer portal webhooks, and IoT triggers.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-sky-100 text-[#0070C0] shrink-0">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Distributed State Engine</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Resilient saga coordinator executing atomic multi-system updates with automatic rollback compensation.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-sky-100 text-[#0070C0] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Clean Core ERP Connectors</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Standard OData and RFC integrations keeping the operational SAP S/4HANA core 100% upgrade-ready.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: Interactive Platform Protocols */}
          {activeSandboxTab === 'protocols' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Protocol Sub-Selection Buttons */}
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => setActiveProtocolTab('distributed-saga')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                    activeProtocolTab === 'distributed-saga'
                      ? 'bg-[#0070C0] text-white border-[#0070C0]'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Distributed Saga Orchestrator
                </button>
                <button
                  onClick={() => setActiveProtocolTab('hitl-routing')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                    activeProtocolTab === 'hitl-routing'
                      ? 'bg-[#0070C0] text-white border-[#0070C0]'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Contextual HITL Exception Routing
                </button>
                <button
                  onClick={() => setActiveProtocolTab('self-healing')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                    activeProtocolTab === 'self-healing'
                      ? 'bg-[#0070C0] text-white border-[#0070C0]'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Self-Healing Runtime &amp; Circuit Breaker
                </button>
              </div>

              {/* Protocol Active Specification Details */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#0070C0] uppercase px-3 py-1 rounded-lg bg-sky-50 border border-sky-200">
                      {protocolDetails[activeProtocolTab].badge}
                    </span>
                    <h3 className="text-2xl font-black text-slate-950 mt-3 mb-2">
                      {protocolDetails[activeProtocolTab].title}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed font-normal">
                      {protocolDetails[activeProtocolTab].desc}
                    </p>
                  </div>

                  {/* 4 Protocol Engineering Specs */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    {protocolDetails[activeProtocolTab].specs.map((spec, i) => (
                      <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                        <div className="text-xs font-mono text-slate-500">{spec.label}</div>
                        <div className="text-sm font-bold text-slate-900 mt-1">{spec.val}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Live Protocol Execution Pipeline
                  </div>
                  {protocolDetails[activeProtocolTab].steps.map((st, i) => (
                    <div key={i} className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-sky-50 text-[#0070C0] border border-sky-200 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <div className="text-base font-bold text-slate-900">{st.name}</div>
                        <div className="text-sm text-slate-600 mt-1 leading-relaxed font-normal">{st.detail}</div>
                      </div>
                    </div>
                  ))}

                  <div className="pt-2">
                    <button
                      onClick={() => onOpenContact ? onOpenContact(`Sandbox Protocol Inquiry: ${protocolDetails[activeProtocolTab].title}`) : undefined}
                      className="w-full py-3 rounded-xl border border-sky-300 hover:border-[#0070C0] bg-sky-50 text-[#0070C0] hover:bg-sky-100 text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Simulate {protocolDetails[activeProtocolTab].badge}</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PHASED IMPLEMENTATION ROADMAP (Clean Slate-50)
          ========================================================================= */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              TIME-TO-VALUE BLUEPRINT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              4-Stage Phased Implementation Roadmap
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A structured, risk-mitigated journey from fragmented manual tasks to enterprise-wide intelligent hyperautomation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transformationPhases.map((phase, idx) => {
              const PhaseIcon = phase.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-7 flex flex-col justify-between hover:border-[#0070C0] hover:shadow-xl transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-sky-50 text-[#0070C0] border border-sky-200">
                        {phase.phase}
                      </span>
                      <div className="p-2.5 rounded-xl bg-sky-50 text-[#0070C0] group-hover:scale-110 transition-transform">
                        <PhaseIcon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                      {phase.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {phase.focus}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100">
                    <span className="text-xs font-mono text-slate-400 uppercase block mb-1">
                      KEY DELIVERABLE:
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      {phase.deliverable}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: EXECUTIVE FAQS (Clean White Theme - Large Readable Typography)
          ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3.5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0070C0] uppercase">
              EXECUTIVE CLARIFICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950">
              Frequently Asked Automation Questions
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Addressing key strategic, operational, and architectural considerations for enterprise technology leaders.
            </p>
          </div>

          <div className="space-y-4">
            {workflowFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-base sm:text-lg text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0070C0] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-slate-100 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: EXECUTIVE STRATEGY CTA RIBBON (Executive Sapphire Gradient)
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-r from-[#003865] via-[#005A9C] to-[#0070C0] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-300/40 bg-white/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-cyan-100 uppercase font-mono">
              STRATEGIC ENGAGEMENT ADVISORY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to Eliminate Swivel-Chair Overhead and Automate Workflows?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Collaborate with senior automation architects to audit manual process bottlenecks, deploy cross-system distributed sagas, and unlock 70%+ cycle time compressions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={() => onOpenContact ? onOpenContact('Workflow Automation Advisory Workshop') : undefined}
              className="px-9 py-4 rounded-xl font-bold text-sm sm:text-base text-slate-900 bg-white hover:bg-sky-50 shadow-xl transition-all flex items-center gap-2 group w-full sm:w-auto justify-center cursor-pointer"
            >
              <span>Schedule Automation Workshop</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0070C0]" />
            </button>
            <Link
              to="/digital-intelligence/process-mining"
              className="px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all w-full sm:w-auto justify-center flex items-center gap-2"
            >
              <span>Explore Process Mining</span>
              <ExternalLink className="w-4 h-4 text-sky-200" />
            </Link>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-7 text-xs sm:text-sm text-sky-100 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Clean Core Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-200" />
              <span>Straight-Through Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-amber-300" />
              <span>Governed HITL Safeguards</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Lightbox Modal */}
      {isHeroModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
          onClick={() => setIsHeroModalOpen(false)}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] bg-slate-950 border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-900/80">
              <div className="flex items-center gap-2.5">
                <Workflow className="w-4 h-4 text-cyan-400" />
                <span className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider">
                  Enterprise Intelligent Workflow Automation &amp; Process Orchestration
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsHeroModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                title="Close modal (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative flex-1 overflow-auto bg-slate-950 flex items-center justify-center p-2 sm:p-4">
              <img
                src="/images/workflow-automation/enterprise_intelligent_workflow_automation_hero.png"
                alt="Enterprise Workflow Automation Architecture Full View"
                className="w-full h-auto max-h-[78vh] object-contain rounded-lg"
              />
            </div>
            <div className="px-5 py-2.5 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Full Panoramic Architecture Diagram</span>
              <span className="text-cyan-400">Press ESC or click outside to close</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default WorkflowAutomationPage;
