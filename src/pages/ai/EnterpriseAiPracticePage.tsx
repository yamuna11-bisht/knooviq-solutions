import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
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
  Bot,
  Play,
  Pause,
  Radio
} from 'lucide-react';

interface EnterpriseAiPracticePageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const EnterpriseAiPracticePage: React.FC<EnterpriseAiPracticePageProps> = ({
  onOpenContact
}) => {
  useEffect(() => {
    document.title = 'Enterprise AI Core & Clean Core Fabric | Digital Intelligence | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // State for Section 2 Interactive Journey
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

  // State for Section 4 Circular Chevron Wheel
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  // Auto-tour rotation for Section 4
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setHoveredWheelIndex((prev) => (prev === null ? 0 : (prev + 1) % 8));
    }, 2800);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // State for Section 7 Solution Category Filter
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');

  // State for Section 9 Autonomous Document Intelligence Analysis Tab
  const [activeDocTab, setActiveDocTab] = useState<'rap' | 'sovereign' | 'supply'>('rap');

  // Section 4: Circular Radial Wheel (KNOOVIQ Enterprise AI Ecosystem)
  const wheelSegments = [
    {
      id: 'clean-core',
      shortTag: 'CLEAN',
      title: 'Clean Core BTP Decoupling',
      desc: 'Side-by-side extension preserving pristine transactional core integrity',
      badge: 'CLEAN CORE EXTENSION',
      metric: 'SAP BTP Extension Suite',
      side: 'right',
      color: '#22C55E',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(34, 197, 94, 0.35)',
      icon: Layers
    },
    {
      id: 'sovereign-llm',
      shortTag: 'SOVEREIGN',
      title: 'Sovereign Private LLM Fabric',
      desc: 'Air-gapped on-premise or sovereign VPC inference with zero model training on prompt data',
      badge: 'AIR-GAPPED SOVEREIGNTY',
      metric: 'Private VPC Inference',
      side: 'right',
      color: '#84CC16',
      textColor: 'text-lime-400',
      bgGlow: 'rgba(132, 204, 22, 0.35)',
      icon: Server
    },
    {
      id: 'token-firewall',
      shortTag: 'FIREWALL',
      title: 'Dual-Pass Safety & PII Proxy',
      desc: 'Deep packet inspection sanitizing confidential tokens and neutralizing prompt attacks',
      badge: 'ZERO-TRUST PROXY',
      metric: 'Sub-5ms In-Flight Scrubbing',
      side: 'right',
      color: '#EAB308',
      textColor: 'text-yellow-400',
      bgGlow: 'rgba(234, 179, 8, 0.35)',
      icon: ShieldCheck
    },
    {
      id: 'event-mesh',
      shortTag: 'MESH',
      title: 'Asynchronous ERP Event Mesh',
      desc: 'Real-time transactional streaming routing ERP business events to autonomous agents',
      badge: 'ADVANCED EVENT BROKER',
      metric: 'Sub-20ms Event Delivery',
      side: 'right',
      color: '#F97316',
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.35)',
      icon: Workflow
    },
    {
      id: 'guardrails',
      shortTag: 'GUARD',
      title: 'Deterministic Business Guard',
      desc: 'Mathematical semantic verification constraining outputs strictly to ERP business rules',
      badge: 'DETERMINISTIC VERIFICATION',
      metric: 'CDS Rule Enforcement',
      side: 'left',
      color: '#F43F5E',
      textColor: 'text-rose-400',
      bgGlow: 'rgba(244, 63, 94, 0.35)',
      icon: Shield
    },
    {
      id: 'zero-retention',
      shortTag: 'DATA',
      title: 'Zero-Retention Data Fabric',
      desc: 'Stateless memory buffers guaranteeing zero persistent storage of prompt payloads',
      badge: 'STATELESS PRIVACY',
      metric: '100% Ephemeral Memory',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: Lock
    },
    {
      id: 'multimodal-core',
      shortTag: 'REASONING',
      title: 'Multimodal Enterprise Reasoning',
      desc: 'Cross-correlating warehouse telemetry, IoT sensor streams, invoices, and ERP tables',
      badge: 'CROSS-MODAL SYNTHESIS',
      metric: 'IoT & Visual Tokenization',
      side: 'left',
      color: '#A855F7',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(168, 85, 247, 0.35)',
      icon: Eye
    },
    {
      id: 'semantic-cache',
      shortTag: 'ROUTER',
      title: 'Semantic Routing & Dynamic Caching',
      desc: 'High-velocity vector cache answering recurring enterprise queries with zero GPU billing',
      badge: 'DYNAMIC ROUTING',
      metric: 'vLLM PagedAttention Cluster',
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

  // Section 2: Journey Steps
  const journeySteps = [
    {
      id: 'clean-core-ext',
      label: 'Clean Core BTP Extension',
      sublabel: 'Decoupled Extension Hub',
      desc: 'Isolating enterprise AI inference and agentic pipelines in SAP BTP to preserve 100% cloud ERP upgradability with zero ABAP core modifications.',
      tech: 'SAP BTP Extension Suite',
      image: '/images/enterprise-ai/enterprise-ai-architecture.jpg',
      icon: Layers
    },
    {
      id: 'sovereign-cluster',
      label: 'Sovereign Inference Cluster',
      sublabel: 'Private Model VPC',
      desc: 'Dedicated high-throughput vLLM and TensorRT-LLM clusters hosted in air-gapped private sovereign tenants with strict zero-data-retention guarantees.',
      tech: 'Private Sovereign LLM Cluster',
      image: '/images/enterprise-ai/enterprise-ai-transformation.jpg',
      icon: Server
    },
    {
      id: 'zero-trust-firewall',
      label: 'Zero-Trust Token Firewall',
      sublabel: 'In-Flight Sanitization',
      desc: 'Dual-pass deep packet inspection stripping PII, financial identifiers, and employee records in sub-5ms before requests reach the inference cluster.',
      tech: 'Dual-Pass Security Proxy',
      image: '/images/enterprise-ai/enterprise-ai-governance.jpg',
      icon: ShieldCheck
    },
    {
      id: 'erp-event-mesh',
      label: 'Sub-20ms ERP Event Mesh',
      sublabel: 'Transactional Streaming',
      desc: 'Asynchronous event-driven broker ingesting order changes, delivery blocks, and sensor telemetry in real time directly from SAP S/4HANA.',
      tech: 'SAP Advanced Event Mesh',
      image: '/images/enterprise-ai/enterprise-ai-use-cases.jpg',
      icon: Workflow
    },
    {
      id: 'deterministic-logic',
      label: 'Deterministic Logic Validation',
      sublabel: 'Verifiable Grounding',
      desc: 'Post-generation verification scoring outputs against SAP CDS views and transactional constraints before committing decisions back to core ledgers.',
      tech: 'Semantic Guardrail Core',
      image: '/images/sap_btp_command_center.jpg',
      icon: CheckCircle2
    },
    {
      id: 'mlops-telemetry',
      label: 'Enterprise MLOps & Telemetry',
      sublabel: 'Continuous Auditability',
      desc: 'Comprehensive token tracing, drift evaluation, and latency telemetry meeting EU AI Act, SOC2, and ISO 27001 regulatory compliance standards.',
      tech: 'SAP AI Core & Launchpad',
      image: '/images/advisory_strategy_roadmap.jpg',
      icon: Lock
    }
  ];

  // Section 3: Enterprise AI Challenges
  const enterpriseAiChallenges = [
    {
      icon: Layers,
      tag: 'CORE LOCK-IN',
      title: 'Custom ABAP Core Contamination',
      desc: 'Embedding hardcoded AI logic into standard ERP database tables impairs version migrations, violates Clean Core guidelines, and breaks cloud compatibility.',
      footer: 'Clean Core Side-by-Side Decoupling'
    },
    {
      icon: Lock,
      tag: 'DATA EXFILTRATION',
      title: 'Intellectual Property & PII Leakage',
      desc: 'Transmitting sensitive customer purchase history, supplier pricing, or payroll records to public multi-tenant APIs breaches corporate data compliance.',
      footer: 'Air-Gapped Sovereign Hosting'
    },
    {
      icon: ShieldCheck,
      tag: 'NON-DETERMINISM',
      title: 'Hallucinated Transactional Decisions',
      desc: 'Probabilistic model drift executing invalid inventory movements, incorrect GL account distributions, or false credit release transactions in core ERP.',
      footer: 'Deterministic CDS Grounding'
    },
    {
      icon: Zap,
      tag: 'COST ESCALATION',
      title: 'Uncontrolled GPU Compute Inflation',
      desc: 'Unthrottled multi-agent reasoning chains and redundant query processing cause runaway inference expenditures and unacceptable user latency.',
      footer: 'Dynamic Semantic Caching'
    },
    {
      icon: Activity,
      tag: 'LATENCY BOTTLENECK',
      title: 'Real-Time Event Processing Lag',
      desc: 'Traditional batch ETL and synchronous REST polling fail to keep pace with dynamic warehouse fluctuations, causing stale operational execution.',
      footer: 'Sub-20ms Event Mesh Streaming'
    },
    {
      icon: Scale,
      tag: 'REGULATORY AUDITS',
      title: 'Opaque Audit & Compliance Gaps',
      desc: 'Inability to present auditable justification, employee telemetry, and governance artifacts triggers severe operational liabilities under the EU AI Act.',
      footer: 'Immutable Trace Logging'
    }
  ];

  // Section 7: 9 Modular Enterprise Solutions
  const enterpriseSolutions = [
    {
      title: 'Autonomous GL & Bank Reconciliation',
      tag: 'FINANCE AI',
      category: 'FINANCE',
      categoryLabel: 'Finance & Compliance',
      description: 'Continuous multi-currency ledger matching reconciling bank statements against open SAP receivables with automated discrepancy triage.',
      image: '/images/bank_statement_intelligence_hero.jpg',
      highlights: ['Zero Human Touch', 'Fiori Inbox Integration', '99.4% Match Precision'],
      icon: Database
    },
    {
      title: 'Multi-Echelon Demand Sensing',
      tag: 'SUPPLY CHAIN',
      category: 'SUPPLY',
      categoryLabel: 'Supply Chain & Logistics',
      description: 'Real-time replenishment optimization ingesting point-of-sale data, weather, and supplier lead-time variances directly into SAP IBP.',
      image: '/images/consumer_demand_sensing_ai.jpg',
      highlights: ['Lead Time Forecasting', 'Stockout Reduction', 'Automated Purchase Requisitions'],
      icon: TrendingUp
    },
    {
      title: 'Predictive Asset Health & MRO',
      tag: 'PLANT OPS',
      category: 'CORE',
      categoryLabel: 'Core ERP & Operations',
      description: 'Edge vibration and thermal telemetry analytics predicting industrial equipment failure and auto-reserving spare parts in SAP PM.',
      image: '/images/asset_management_hero.png',
      highlights: ['Acoustic & Thermal ML', 'Auto-Work Orders', 'Zero Unplanned Downtime'],
      icon: Activity
    },
    {
      title: 'Intelligent Contract & SOW Extractor',
      tag: 'LEGAL AI',
      category: 'FINANCE',
      categoryLabel: 'Finance & Compliance',
      description: 'Cognitive parsing of supplier agreements identifying liability deviations, indexation clauses, and payment milestone covenants in SAP Ariba.',
      image: '/images/enterprise-ai/enterprise-ai-governance.jpg',
      highlights: ['Clause Risk Scoring', 'Milestone Auto-Validation', 'Full Line-Item Provenance'],
      icon: FileText
    },
    {
      title: 'Dynamic Enterprise Pricing Engine',
      tag: 'REVENUE AI',
      category: 'CORE',
      categoryLabel: 'Core ERP & Operations',
      description: 'Real-time pricing optimization engine adjusting sales quotes based on spot raw-material costs, regional tariffs, and margin tolerances in SAP SD.',
      image: '/images/billing_architecture_workflow.jpg',
      highlights: ['Spot Cost Hedging', 'Margin Guardrails', 'Real-Time Pricing Conditions'],
      icon: BarChart3
    },
    {
      title: 'Autonomous Fraud & Sanctions Guard',
      tag: 'SECURITY',
      category: 'FINANCE',
      categoryLabel: 'Finance & Compliance',
      description: 'Sub-second transaction screening detecting supplier banking modifications, circular billing anomalies, and sanctioned entity lists.',
      image: '/images/enterprise-ai/enterprise-ai-hero.jpg',
      highlights: ['PEP & Sanctions Lists', 'Dual-Authorization Flags', 'Audit-Proof Trails'],
      icon: ShieldCheck
    },
    {
      title: 'Smart Warehouse Slotting & Dispatch',
      tag: 'LOGISTICS',
      category: 'SUPPLY',
      categoryLabel: 'Supply Chain & Logistics',
      description: 'Real-time order batching and 3D pallet optimization in SAP EWM dynamically reducing forklift travel distance and truck turnaround times.',
      image: '/images/distribution_dynamic_route_planning.png',
      highlights: ['3D Wave Slotting', 'Dynamic Dock Allocation', 'Automated Pick Paths'],
      icon: Boxes
    },
    {
      title: 'Automated Carbon Accounting & ESG',
      tag: 'SUSTAINABILITY',
      category: 'FINANCE',
      categoryLabel: 'Finance & Compliance',
      description: 'Automated greenhouse gas Scope 1, 2, and 3 footprint calculation linking logistics waybills and procurement line items to SAP Sustainability.',
      image: '/images/enterprise-ai/enterprise-ai-transformation.jpg',
      highlights: ['Scope 1-3 Auditing', 'Supplier ESG Scoring', 'Automated CSRD Reporting'],
      icon: Scale
    },
    {
      title: 'Autonomous Order Allocation & ATP',
      tag: 'FULFILLMENT',
      category: 'SUPPLY',
      categoryLabel: 'Supply Chain & Logistics',
      description: 'Real-time Available-to-Promise (aATP) optimization routing customer allocations based on profit margin, transit time, and contract SLA.',
      image: '/images/distribution_3pl_rate_settlement.png',
      highlights: ['Margin-Weighted Routing', 'Dynamic Re-Allocation', 'Split Shipment Minimization'],
      icon: Workflow
    }
  ];

  // Section 8: Enterprise Value & Architecture Pillars
  const roiBenchmarks = [
    {
      status: 'PROVEN',
      badge: 'CLEAN CORE UPGRADABILITY',
      title: 'Zero Core Modification',
      desc: 'Complete isolation of AI logic on SAP BTP guarantees 100% seamless SAP S/4HANA and cloud ERP release upgrades.',
      icon: Layers,
      color: '#0070C0',
      bgGlow: 'from-sky-50 to-blue-50/40',
      borderColor: 'border-sky-200 hover:border-[#0070C0]'
    },
    {
      status: 'SUB-20MS',
      badge: 'REAL-TIME STREAMING',
      title: 'Advanced Event Broker',
      desc: 'Sub-20ms event streaming eliminates heavy database polling, triggering AI workflows instantly upon ERP transaction commits.',
      icon: Zap,
      color: '#0284C7',
      bgGlow: 'from-cyan-50 to-sky-50/40',
      borderColor: 'border-cyan-200 hover:border-cyan-500'
    },
    {
      status: 'ZERO-TRUST',
      badge: 'DATA INTEGRITY',
      title: 'In-Flight PII Sanitization',
      desc: 'Real-time dual-pass token inspection redacts confidential corporate records and employee data before inference processing.',
      icon: Lock,
      color: '#8B5CF6',
      bgGlow: 'from-purple-50 to-indigo-50/40',
      borderColor: 'border-purple-200 hover:border-purple-500'
    },
    {
      status: 'DETERMINISTIC',
      badge: 'ACCURACY BENCHMARK',
      title: 'Verifiable CDS Grounding',
      desc: 'Every autonomous decision is scored against SAP Core Data Services (CDS) views, ensuring zero hallucinated business postings.',
      icon: ShieldCheck,
      color: '#10B981',
      bgGlow: 'from-emerald-50 to-teal-50/40',
      borderColor: 'border-emerald-200 hover:border-emerald-500'
    },
    {
      status: 'OPTIMIZED',
      badge: 'COMPUTE CONTAINMENT',
      title: 'GPU Inference Cost Control',
      desc: 'Dynamic semantic caching clusters answer repetitive enterprise inquiries with zero model API billing and instant latency.',
      icon: TrendingUp,
      color: '#F59E0B',
      bgGlow: 'from-amber-50 to-orange-50/40',
      borderColor: 'border-amber-200 hover:border-amber-500'
    },
    {
      status: 'AUDITABLE',
      badge: 'REGULATORY CONFORMANCE',
      title: 'Immutable Telemetry Audit',
      desc: 'End-to-end prompt and execution tracing guaranteeing 100% adherence to EU AI Act, SOC2, and corporate compliance mandates.',
      icon: Scale,
      color: '#EC4899',
      bgGlow: 'from-pink-50 to-rose-50/40',
      borderColor: 'border-pink-200 hover:border-pink-500'
    }
  ];

  // Section 9: Autonomous Enterprise Intelligence Audit Sandbox Data
  const auditDocuments = {
    rap: {
      id: 'rap',
      tabLabel: 'Clean Core RAP & Event Mesh',
      title: 'SAP Clean Core Decoupling & Event Mesh Telemetry',
      fileInfo: 'S/4HANA Enterprise Perimeter • Event Broker & Side-by-Side Audit',
      riskLevel: 'CLEAN CORE VERIFIED • 0 MODIFICATIONS',
      riskBadgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-emerald-500/10',
      recommendation: 'Deploy autonomous BTP agentic listener for real-time order hold triage and auto-generate draft RAP business objects in SAP Build.',
      findings: [
        {
          level: 'CRITICAL CONFORMANCE',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Zero Direct Database Mutations',
          desc: 'All ERP interactions routed strictly via released SAP Cloud APIs and RAP business objects without custom table lockups.',
          citation: 'API: Released Cloud APIs'
        },
        {
          level: 'STREAMING SPEED',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Sub-15ms Event Mesh Throughput',
          desc: 'Transactional event broker dispatches purchase order releases and delivery holds to AI agents with zero latency.',
          citation: 'Mesh: SAP Event Broker'
        },
        {
          level: 'UPGRADE COMPLIANCE',
          levelColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          borderColor: 'border-sky-500/40 hover:border-sky-400',
          title: '100% S/4HANA Upgrade Proof',
          desc: 'Full compliance with SAP Clean Core Extensibility Framework ensuring frictionless major release cutovers.',
          citation: 'Framework: SAP Clean Core'
        }
      ]
    },
    sovereign: {
      id: 'sovereign',
      tabLabel: 'Sovereign VPC & Token Firewall',
      title: 'Private Sovereign LLM Cluster & Token Sanitization',
      fileInfo: 'Air-Gapped Sovereign Tenant • Dual-Pass Safety Firewall Telemetry',
      riskLevel: 'ZERO LEAKAGE • 100% ISOLATION',
      riskBadgeColor: 'bg-sky-500/20 text-sky-300 border-sky-400/50 shadow-sky-500/10',
      recommendation: 'Enforce dynamic token-budget ceilings across non-production environments and certify tenant isolation under ISO 27001.',
      findings: [
        {
          level: 'IN-FLIGHT SCRUBBING',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Zero-Trust PII Redaction',
          desc: 'Customer SSNs, bank IBANs, and employee compensation data masked before reaching inference context.',
          citation: 'Proxy: PII Masking Gateway'
        },
        {
          level: 'SOVEREIGN RETENTION',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Stateless Ephemeral Memory',
          desc: 'Prompt context immediately purged post-inference with zero data persistence across sovereign clusters.',
          citation: 'Policy: Zero-Retention SLA'
        },
        {
          level: 'PROMPT SECURITY',
          levelColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
          borderColor: 'border-rose-500/40 hover:border-rose-400',
          title: 'Adversarial Injection Neutralized',
          desc: 'Dual-pass inspection intercepts semantic prompt injection and role impersonation attempts with sub-2ms latency.',
          citation: 'Shield: Adversarial Guard'
        }
      ]
    },
    supply: {
      id: 'supply',
      tabLabel: 'Autonomous Supply Chain Audit',
      title: 'Autonomous Multi-Echelon Replenishment Audit',
      fileInfo: 'Global Distribution Network • Autonomous Agent Execution Log',
      riskLevel: 'AUTONOMOUS EXECUTION • ACTIVE',
      riskBadgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-cyan-500/10',
      recommendation: 'Expand autonomous replenishment triggers to secondary supplier tiers and integrate SAP Sustainability Footprint metrics.',
      findings: [
        {
          level: 'STOCKOUT MITIGATION',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Dynamic Safety Stock Rebalancing',
          desc: 'Agent sensed supplier transit delay and automatically triggered expedited transfer orders across 4 regional DCs.',
          citation: 'Agent: Replenishment Agent'
        },
        {
          level: 'CARRIER ALLOCATION',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Margin-Optimized Route Dispatch',
          desc: 'Autonomous transport allocation preserved 18.4% gross margin while honoring strict customer SLA delivery windows.',
          citation: 'Module: SAP TM Integration'
        },
        {
          level: 'GOVERNANCE AUDIT',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Executive Sign-Off Threshold Met',
          desc: 'Purchase orders below $50,000 auto-approved; orders exceeding threshold routed to VP Supply Chain with full provenance.',
          citation: 'Rule: Governance Threshold'
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">

      {/* =========================================================================
          SECTION 1: HERO SECTION (Ultra-Clean & Sleek)
          ========================================================================= */}
      <section className="relative w-full min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/enterprise-ai/enterprise-ai-hero.jpg"
            alt="Enterprise Autonomous AI Architecture"
            className="w-full h-full object-cover object-center opacity-40"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/80 sm:via-slate-950/60 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-3xl space-y-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ DIGITAL INTELLIGENCE &bull; ENTERPRISE AI</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Enterprise <br />
                <span className="text-cyan-400">Autonomous AI & Clean Core Fabric</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl pt-1">
                Sovereign foundation models, deterministic Clean Core orchestration, and sub-20ms event mesh fabrics engineered on SAP BTP and private enterprise infrastructure.
              </p>
            </motion.div>

            {/* Enterprise Assurance Indicators (No Buttons) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.15 }} 
              className="pt-3 flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>100% Clean Core Upgradability</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero-Trust Sovereign Security</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200">
                <Database className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Air-Gapped Private LLM / SLM</span>
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
                Architecting Sovereign <span className="text-[#0070C0]">Enterprise AI Intelligence</span>
              </h2>
              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Enterprise AI delivers enduring operational advantage only when autonomous inference is decoupled from the core ERP, governed by zero-trust policies, and grounded in real-time transactional events.&rdquo;
                </p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Knooviq engineers production-grade Enterprise AI fabrics that bridge SAP S/4HANA transactional systems, SAP BTP event streaming, and sovereign private foundation models. We empower global enterprises to deploy autonomous decision loops without contaminating the transactional core or leaking proprietary trade secrets.
              </p>
              <div className="space-y-2.5 pt-1">
                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Database className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Clean Core Side-by-Side Decoupling</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Extend standard ERP processes through SAP BTP and event meshes without embedding custom ABAP code or model weights into standard core tables.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Dual-Pass Safety & Token Firewall</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Deep packet inspection sanitizes PII, neutralizes adversarial prompt injection, and verifies regulatory adherence before inference.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Real-Time Event-Driven Autonomous Orchestration</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Sub-20ms event brokers dispatch transactional updates directly to domain-specific agents for continuous self-correcting business logic.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3.5">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900 group">
                <img
                  src={journeySteps[activeJourneyStep].image}
                  alt="Knooviq Enterprise AI Architecture Command Center"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs font-mono font-bold text-cyan-300 shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
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

              <div className="p-4 rounded-2xl bg-white border-2 border-slate-200/90 shadow-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-[#003B73]">{journeySteps[activeJourneyStep].label}</span>
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-sky-50 text-[#0070C0] border border-sky-300">
                    {journeySteps[activeJourneyStep].tech}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{journeySteps[activeJourneyStep].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: BOTTLENECKS
          ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#F8FAFC] border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
              <Compass className="w-3.5 h-3.5 text-rose-600" />
              <span>CORE RISKS & HURDLES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Navigating Enterprise AI Modernization Challenges
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Transitioning from isolated algorithmic experiments to mission-critical autonomous enterprise intelligence demands overcoming six systemic architectural barriers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {enterpriseAiChallenges.map((item, idx) => {
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
          SECTION 4: CIRCULAR CHEVRON RADIAL WHEEL (Compact Cybernetic Cockpit)
          ========================================================================= */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#040711] text-white border-b border-slate-800/80 relative overflow-hidden">
        {/* Futuristic Cyber-Grid Background Pattern */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cyberGridEnt" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(0, 163, 224, 0.4)" strokeWidth="0.8" />
                <circle cx="0" cy="0" r="1.5" fill="rgba(0, 229, 255, 0.6)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cyberGridEnt)" />
          </svg>
        </div>

        {/* Ambient Aurora Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/10 via-indigo-600/10 to-emerald-500/10 blur-[130px] rounded-full pointer-events-none animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Streamlined Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-20px" }} 
            transition={{ duration: 0.45 }} 
            className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2.5"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.12)]">
              <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>KNOOVIQ RADIAL ARCHITECTURE &bull; ENTERPRISE CORE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Ecosystem for Sovereign Enterprise AI Intelligence
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
              A synchronized radial platform uniting Clean Core BTP decoupling, air-gapped sovereign models, dual-pass safety firewalls, and sub-20ms event mesh orchestration.
            </p>

            {/* Compact Control Toolbar */}
            <div className="pt-1 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${
                  isAutoPlaying 
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_14px_rgba(6,182,212,0.45)]' 
                    : 'bg-slate-900/80 text-cyan-300 border-cyan-500/40 hover:bg-cyan-950/40 hover:border-cyan-400'
                }`}
              >
                {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                <span>{isAutoPlaying ? 'PAUSE AUTO-TOUR' : 'AUTO-TOUR ECOSYSTEM'}</span>
              </button>

              {hoveredWheelIndex !== null && (
                <button
                  type="button"
                  onClick={() => { setHoveredWheelIndex(null); setIsAutoPlaying(false); }}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900/80 text-slate-300 border border-slate-700 hover:text-white hover:border-slate-500 text-xs font-mono transition-all"
                >
                  <RefreshCw className="w-2.5 h-2.5" />
                  <span>RESET OVERVIEW</span>
                </button>
              )}

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] font-mono text-slate-400">
                <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
                <span>{hoveredWheelIndex !== null ? `INSPECTING: ${wheelSegments[hoveredWheelIndex].badge}` : 'HOVER OR SELECT ANY NODE'}</span>
              </div>
            </div>
          </motion.div>

          {/* DESKTOP LAYOUT (lg): Compact 3-Column Cockpit (<340px Height) */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-5 items-center">
            
            {/* Left Column: 4 Compact Micro-Pods ([7, 6, 5, 4]) */}
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
                    {/* Cyber Corner Accent */}
                    <div 
                      className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 rounded-tr pointer-events-none transition-opacity" 
                      style={{ borderColor: item.color, opacity: isHovered ? 1 : 0.4 }} 
                    />

                    {/* Top neon indicator beam */}
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

                      {/* Icon container */}
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

            {/* Center Column: Futuristic Radial Chevron Wheel with Holographic Reactor Core */}
            <div className="lg:col-span-4 flex justify-center items-center py-2 relative">
              
              {/* Concentric Halo Rings */}
              <div className="absolute w-[330px] aspect-square rounded-full border border-cyan-500/10 pointer-events-none animate-spin" style={{ animationDuration: '60s' }} />
              <div className="absolute w-[360px] aspect-square rounded-full border border-dashed border-indigo-500/10 pointer-events-none animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />

              <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
                <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-[0_0_30px_rgba(0,163,224,0.15)] overflow-visible">
                  <defs>
                    <radialGradient id="centerReactorCoreEnt" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#0B162C" />
                      <stop offset="70%" stopColor="#060C18" />
                      <stop offset="100%" stopColor="#03060D" />
                    </radialGradient>
                  </defs>

                  {/* Outer Orbital Orbit */}
                  <circle cx="250" cy="250" r="236" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 6" />

                  {/* 8 Interlocking Chevron Segments */}
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

                  {/* Dynamic Synaptic Energy Beam to Active Segment */}
                  {hoveredWheelIndex !== null && (() => {
                    const iconPos = getIconCoords(hoveredWheelIndex);
                    const activeColor = wheelSegments[hoveredWheelIndex].color;
                    return (
                      <g className="pointer-events-none">
                        <line 
                          x1="250" 
                          y1="250" 
                          x2={iconPos.x} 
                          y2={iconPos.y} 
                          stroke={activeColor} 
                          strokeWidth="2.5" 
                          strokeDasharray="4 4" 
                          className="animate-pulse"
                          style={{ filter: `drop-shadow(0 0 8px ${activeColor})` }} 
                        />
                        <circle 
                          cx={iconPos.x} 
                          cy={iconPos.y} 
                          r="5" 
                          fill={activeColor} 
                          className="animate-ping" 
                        />
                      </g>
                    );
                  })()}

                  {/* Center Holographic Reactor Outer Ring */}
                  <circle cx="250" cy="250" r="114" fill="none" stroke="rgba(0, 229, 255, 0.25)" strokeWidth="1" strokeDasharray="3 8" className="animate-spin" style={{ animationDuration: '40s' }} />
                  <circle cx="250" cy="250" r="110" fill="none" stroke="rgba(0, 229, 255, 0.4)" strokeWidth="1.5" strokeDasharray="6 8" />

                  {/* Center Core Body */}
                  <circle 
                    cx="250" 
                    cy="250" 
                    r="106" 
                    fill="url(#centerReactorCoreEnt)" 
                    stroke={hoveredWheelIndex !== null ? wheelSegments[hoveredWheelIndex].color : '#00A3E0'} 
                    strokeWidth="2.5" 
                    className="drop-shadow-2xl transition-all duration-500" 
                    style={{
                      filter: hoveredWheelIndex !== null ? `drop-shadow(0 0 18px ${wheelSegments[hoveredWheelIndex].color})` : 'drop-shadow(0 0 12px rgba(0, 163, 224, 0.4))'
                    }}
                  />

                  {/* Center Core Dynamic Readout */}
                  <foreignObject x="150" y="150" width="200" height="200" className="pointer-events-none">
                    <div className="w-full h-full flex flex-col items-center justify-center text-center select-none px-3">
                      {hoveredWheelIndex === null ? (
                        <div className="space-y-1.5 animate-in fade-in duration-300">
                          <div className="w-9 h-9 mx-auto rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_14px_rgba(6,182,212,0.4)]">
                            <Brain className="w-4 h-4 animate-pulse" />
                          </div>
                          
                          {/* Live Neural Waveform Indicator */}
                          <div className="flex items-center justify-center gap-1 h-2.5 py-0.5">
                            <span className="w-0.5 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDuration: '0.8s' }} />
                            <span className="w-0.5 h-3 bg-cyan-300 rounded-full animate-pulse" style={{ animationDuration: '0.5s' }} />
                            <span className="w-0.5 h-3.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDuration: '0.7s' }} />
                            <span className="w-0.5 h-2.5 bg-cyan-300 rounded-full animate-pulse" style={{ animationDuration: '0.6s' }} />
                            <span className="w-0.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDuration: '0.9s' }} />
                          </div>

                          <span className="text-xs sm:text-sm font-black text-white tracking-widest uppercase leading-tight block">
                            KNOOVIQ AI CORE
                          </span>
                          <span className="text-[9.5px] font-mono font-bold text-cyan-300 block tracking-wider uppercase">
                            Enterprise Mesh
                          </span>
                          <span className="text-[8.5px] font-mono text-slate-400 block pt-0.5">
                            CLEAN CORE &bull; SOVEREIGN
                          </span>
                        </div>
                      ) : (
                        (() => {
                          const activeSeg = wheelSegments[hoveredWheelIndex];
                          const ActiveIcon = activeSeg.icon;
                          return (
                            <div className="space-y-1 animate-in zoom-in-95 duration-200">
                              <div 
                                className="w-9 h-9 mx-auto rounded-xl flex items-center justify-center shadow-lg transition-transform scale-105"
                                style={{ 
                                  backgroundColor: `${activeSeg.color}25`, 
                                  border: `1.5px solid ${activeSeg.color}`,
                                  color: activeSeg.color,
                                  boxShadow: `0 0 16px ${activeSeg.bgGlow}`
                                }}
                              >
                                <ActiveIcon className="w-4 h-4" />
                              </div>
                              <span className="text-[8.5px] font-mono font-bold uppercase tracking-widest block" style={{ color: activeSeg.color }}>
                                {activeSeg.badge} // ACTIVE
                              </span>
                              <span className="text-xs sm:text-[13px] font-black text-white leading-tight block line-clamp-2 px-1">
                                {activeSeg.title}
                              </span>
                              <span 
                                className="text-[8.5px] font-mono font-bold px-2 py-0.5 rounded-full inline-block mt-0.5 tracking-wider uppercase border"
                                style={{ 
                                  color: activeSeg.color, 
                                  borderColor: `${activeSeg.color}50`,
                                  backgroundColor: `${activeSeg.color}20`
                                }}
                              >
                                {activeSeg.badge}
                              </span>
                              <span className="text-[8px] font-mono text-slate-400 block truncate max-w-[160px] mx-auto pt-0.5">
                                {activeSeg.metric}
                              </span>
                            </div>
                          );
                        })()
                      )}
                    </div>
                  </foreignObject>
                </svg>
              </div>
            </div>

            {/* Right Column: 4 Compact Micro-Pods ([0, 1, 2, 3]) */}
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
                    {/* Cyber Corner Accent */}
                    <div 
                      className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 rounded-tl pointer-events-none transition-opacity" 
                      style={{ borderColor: item.color, opacity: isHovered ? 1 : 0.4 }} 
                    />

                    {/* Top neon indicator beam */}
                    {isHovered && (
                      <div 
                        className="absolute top-0 left-0 right-0 h-0.5 animate-pulse" 
                        style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }} 
                      />
                    )}

                    <div className="flex items-center justify-between gap-3">
                      {/* Icon container */}
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
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOBILE & TABLET ADAPTIVE VIEW (< lg): Space-Saving Dynamic Inspector */}
          <div className="lg:hidden flex flex-col items-center gap-4">
            {/* Scaled Center Wheel */}
            <div className="relative w-full max-w-[280px] sm:max-w-[310px] aspect-square flex items-center justify-center mx-auto">
              <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-[0_0_25px_rgba(0,163,224,0.15)] overflow-visible">
                <defs>
                  <radialGradient id="centerReactorCoreMobEnt" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0B162C" />
                    <stop offset="70%" stopColor="#060C18" />
                    <stop offset="100%" stopColor="#03060D" />
                  </radialGradient>
                </defs>

                {/* 8 Interlocking Chevron Segments */}
                {wheelSegments.map((seg, idx) => {
                  const isHovered = hoveredWheelIndex === idx;
                  const d = getChevronPath(idx);
                  const iconPos = getIconCoords(idx);
                  const IconComponent = seg.icon;
                  return (
                    <g 
                      key={seg.id} 
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setHoveredWheelIndex(isHovered ? null : idx);
                      }}
                      className="cursor-pointer"
                    >
                      <path 
                        d={d} 
                        fill={isHovered ? `${seg.color}35` : '#070D1B'} 
                        stroke={isHovered ? seg.color : `${seg.color}80`} 
                        strokeWidth={isHovered ? "3.5" : "2"} 
                        strokeLinejoin="round" 
                        style={{ filter: isHovered ? `drop-shadow(0 0 12px ${seg.color})` : undefined }} 
                      />
                      <foreignObject x={iconPos.x - 14} y={iconPos.y - 14} width={28} height={28} className="pointer-events-none overflow-visible">
                        <div className="w-full h-full flex items-center justify-center" style={{ color: isHovered ? '#FFFFFF' : seg.color }}>
                          <IconComponent className="w-5 h-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" />
                        </div>
                      </foreignObject>
                    </g>
                  );
                })}

                {/* Center Core */}
                <circle 
                  cx="250" 
                  cy="250" 
                  r="106" 
                  fill="url(#centerReactorCoreMobEnt)" 
                  stroke={hoveredWheelIndex !== null ? wheelSegments[hoveredWheelIndex].color : '#00A3E0'} 
                  strokeWidth="2.5" 
                />

                <foreignObject x="150" y="150" width="200" height="200" className="pointer-events-none">
                  <div className="w-full h-full flex flex-col items-center justify-center text-center select-none px-2">
                    {hoveredWheelIndex === null ? (
                      <div className="space-y-1">
                        <Brain className="w-5 h-5 mx-auto text-cyan-300 animate-pulse" />
                        <span className="text-xs font-black text-white uppercase block">KNOOVIQ AI CORE</span>
                        <span className="text-[9px] font-mono text-cyan-300 block">Tap Any Node</span>
                      </div>
                    ) : (
                      (() => {
                        const activeSeg = wheelSegments[hoveredWheelIndex];
                        return (
                          <div className="space-y-0.5">
                            <span className="text-[8px] font-mono font-bold uppercase block" style={{ color: activeSeg.color }}>
                              {activeSeg.badge}
                            </span>
                            <span className="text-xs font-bold text-white leading-tight block line-clamp-2">
                              {activeSeg.title}
                            </span>
                          </div>
                        );
                      })()
                    )}
                  </div>
                </foreignObject>
              </svg>
            </div>

            {/* Quick Node Pills (Scrollable) */}
            <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto w-full pb-1 scrollbar-none">
              {wheelSegments.map((seg, idx) => {
                const isSelected = hoveredWheelIndex === idx;
                return (
                  <button
                    key={seg.id}
                    type="button"
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setHoveredWheelIndex(isSelected ? null : idx);
                    }}
                    className={`shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono transition-all border ${
                      isSelected
                        ? 'bg-slate-800 text-white font-bold'
                        : 'bg-slate-950/70 text-slate-400 border-slate-800'
                    }`}
                    style={{
                      borderColor: isSelected ? seg.color : undefined,
                      boxShadow: isSelected ? `0 0 10px ${seg.bgGlow}` : undefined
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: seg.color }} />
                    <span>{seg.shortTag}</span>
                  </button>
                );
              })}
            </div>

            {/* Single Dynamic Active Node Inspector Card */}
            {(() => {
              const activeIdx = hoveredWheelIndex !== null ? hoveredWheelIndex : 0;
              const activeItem = wheelSegments[activeIdx];
              const ItemIcon = activeItem.icon;
              return (
                <div 
                  className="w-full max-w-lg p-4 rounded-xl bg-slate-900/90 border backdrop-blur-xl relative overflow-hidden transition-all duration-300"
                  style={{ borderColor: activeItem.color, boxShadow: `0 0 20px ${activeItem.bgGlow}` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{ backgroundColor: activeItem.color }} />
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1 text-left flex-1 min-w-0">
                      <span 
                        className="text-[9.5px] font-mono font-bold tracking-wider px-1.5 py-0.5 rounded bg-white/5 border border-white/10"
                        style={{ color: activeItem.color }}
                      >
                        {activeItem.badge}
                      </span>
                      <h4 className="text-sm font-bold text-white">
                        {activeItem.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {activeItem.desc}
                      </p>
                      <div className="pt-1 flex items-center gap-1.5 text-[10.5px] font-mono text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeItem.color }} />
                        <span>{activeItem.metric}</span>
                      </div>
                    </div>
                    <div 
                      className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center border shadow-md"
                      style={{
                        backgroundColor: `${activeItem.color}25`,
                        borderColor: activeItem.color,
                        color: activeItem.color
                      }}
                    >
                      <ItemIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Compact Bottom Real-time Telemetry Bar */}
          <div className="mt-6 pt-4 border-t border-slate-800/80">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
              <div className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800/90 backdrop-blur-md flex items-center gap-2.5 hover:border-emerald-500/40 transition-colors">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                <div className="min-w-0">
                  <div className="text-[11px] font-mono font-bold text-white uppercase tracking-wider truncate">Clean Core Extension</div>
                  <div className="text-[9.5px] text-slate-400 truncate">Side-by-Side Isolation</div>
                </div>
              </div>
              <div className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800/90 backdrop-blur-md flex items-center gap-2.5 hover:border-cyan-500/40 transition-colors">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                <div className="min-w-0">
                  <div className="text-[11px] font-mono font-bold text-white uppercase tracking-wider truncate">Event Mesh Throughput</div>
                  <div className="text-[9.5px] text-slate-400 truncate">Sub-20ms Streaming</div>
                </div>
              </div>
              <div className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800/90 backdrop-blur-md flex items-center gap-2.5 hover:border-rose-500/40 transition-colors">
                <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse shrink-0" />
                <div className="min-w-0">
                  <div className="text-[11px] font-mono font-bold text-white uppercase tracking-wider truncate">Zero-Trust Security</div>
                  <div className="text-[9.5px] text-slate-400 truncate">Dual-Pass PII Firewall</div>
                </div>
              </div>
              <div className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800/90 backdrop-blur-md flex items-center gap-2.5 hover:border-purple-500/40 transition-colors">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shrink-0" />
                <div className="min-w-0">
                  <div className="text-[11px] font-mono font-bold text-white uppercase tracking-wider truncate">Sovereign Privacy</div>
                  <div className="text-[9.5px] text-slate-400 truncate">Air-Gapped Private Tenant</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: ENTERPRISE ARCHITECTURE BLUEPRINT
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Layers className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PLATFORM ARCHITECTURE BLUEPRINT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Clean Core Enterprise AI Blueprint
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
              Stateless side-by-side extension architecture linking SAP S/4HANA, SAP BTP Event Mesh, and private sovereign foundation models with zero core contamination.
            </p>
          </div>

          {/* Architecture Blueprint Visual Card */}
          <div className="rounded-3xl overflow-hidden border-2 border-slate-200 bg-slate-950 shadow-xl relative group">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 relative h-72 sm:h-80 lg:h-96 overflow-hidden">
                <img
                  src="/images/enterprise-ai/enterprise-ai-architecture.jpg"
                  alt="Enterprise AI Clean Core Blueprint & Architecture Mesh"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-950/90 hidden lg:block pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent lg:hidden pointer-events-none" />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-400/40 text-xs font-mono font-bold text-cyan-300 shadow-sm flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-cyan-400" />
                  <span>CLEAN CORE AI BLUEPRINT</span>
                </div>
              </div>
              <div className="lg:col-span-5 p-6 sm:p-8 space-y-4 text-white">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                  Decoupled Autonomous Intelligence Fabric
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-snug">
                  Enterprise AI Core & Clean Core Gateway
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Interlinking SAP S/4HANA, SAP BTP event brokers, and sovereign foundation models via stateless proxy gateways. Zero PII leakage and zero foundational model retraining on sensitive corporate records.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-cyan-200">
                  <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15">✓ Decoupled BTP Extension</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15">✓ Zero Core ABAP Modifications</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15">✓ Sub-20ms Event Mesh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: MODULAR SOLUTIONS (3x3 Grid)
          ========================================================================= */}
      <section id="enterprise-solutions" className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-slate-200 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>ENTERPRISE AI MODULAR SOLUTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Modular Enterprise AI Solutions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Production-ready enterprise modules engineered to automate complex reconciliations, sense supply chain shifts, and optimize operations.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-7 sm:mb-8">
            {[
              { id: 'ALL', label: 'All Solutions' },
              { id: 'CORE', label: 'Core ERP & Operations' },
              { id: 'SUPPLY', label: 'Supply Chain & Logistics' },
              { id: 'FINANCE', label: 'Finance & Compliance' }
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveSolutionCategory(cat.id)}
                className={`industry-category-tab px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSolutionCategory === cat.id
                    ? 'bg-[#0070C0] text-white shadow-md shadow-[#0070C0]/25 scale-105'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-300 hover:border-slate-400 shadow-2xs'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {enterpriseSolutions
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
          SECTION 8: MEASURABLE BUSINESS ROI BENCHMARKS (Scorecard)
          ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-sky-50/30 to-white border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 shadow-2xs">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>ENTERPRISE VALUE ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Enterprise Value & Architectural Pillars
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium max-w-2xl mx-auto">
              Core architectural foundations achieved when autonomous AI is decoupled and anchored to real-time Clean Core ERP events.
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
          SECTION 9: AUTONOMOUS ENTERPRISE INTELLIGENCE AUDIT SANDBOX
          ========================================================================= */}
      <section className="py-5 sm:py-7 bg-gradient-to-b from-[#050C18] via-[#09152B] to-[#040A14] border-b border-slate-800 relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-4 sm:mb-5 space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/90 border border-cyan-400/50 text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300">
              <FileText className="w-3 h-3 text-cyan-400" />
              <span>COGNITIVE ENTERPRISE AI AUDIT & GOVERNANCE</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Autonomous Intelligence Audit Sandbox
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-normal">
              Inspecting Clean Core RAP extensibility, sovereign model token isolation, and autonomous execution logs with exact compliance proof.
            </p>
          </div>

          {/* Interactive Document Analysis Command Pod */}
          <div className="rounded-xl border border-cyan-500/30 bg-slate-900/90 shadow-xl p-3 sm:p-4 backdrop-blur-xl relative overflow-hidden">
            
            {/* Top Header Row: Document Metadata & Live Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-2.5 mb-3 gap-2">
              <div className="space-y-1 text-left">
                {/* Document Tabs Switcher */}
                <div className="flex flex-wrap gap-1.5">
                  {(['rap', 'sovereign', 'supply'] as const).map((docKey) => {
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
                        <FileText className="w-3 h-3" />
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

            {/* Main Showcase Grid: Visual Image + Structured Extracted Findings */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
              
              {/* Left Column: Visual AI Document Scan */}
              <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-cyan-400/40 shadow-lg group min-h-[260px] sm:min-h-[300px] lg:min-h-full">
                <img
                  src="/images/enterprise-ai/enterprise-ai-governance.jpg"
                  alt="Autonomous Enterprise AI Governance & Audit Engine"
                  className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-cyan-400/50 text-[10px] font-mono font-bold text-cyan-300 flex items-center gap-1.5 z-10 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Clean Core &bull; Verified Decoupling</span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/15 text-white text-left z-10 space-y-0.5">
                  <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                    Zero Core Modification Audit
                  </span>
                  <div className="text-xs font-bold text-emerald-300">
                    Deterministic Provenance Backed with Sub-20ms Event Streaming
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
                        <p className="text-xs text-slate-200 font-normal leading-relaxed">
                          {finding.desc}
                        </p>
                      </div>
                      <div className="shrink-0 self-start sm:self-center">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-950/90 border border-cyan-400/50 text-[10px] font-mono font-bold text-cyan-300">
                          <FileText className="w-3 h-3 text-cyan-400" />
                          <span>{finding.citation}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Executive Recommendation Box */}
                <div className="p-2.5 sm:p-3 rounded-lg bg-gradient-to-r from-blue-950/95 via-indigo-950/90 to-cyan-950/95 border border-cyan-400/50 shadow-sm space-y-0.5 text-left">
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
          SECTION 11: FINAL CTA
          ========================================================================= */}
      <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-r from-[#003B73] via-[#005B9E] to-[#0070C0] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-cyan-200 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>DEPLOY SOVEREIGN ENTERPRISE AI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Deploy Autonomous Enterprise Intelligence?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Ground autonomous decision-making in real-time transactional context with zero core contamination and complete sovereign privacy.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact?.('Enterprise AI Practice Consultation')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group"
            >
              <span>Consult Our Enterprise AI Architects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0070C0]" />
            </button>

            <Link
              to="/digital-intelligence"
              className="px-8 py-4 rounded-xl bg-transparent hover:bg-white/10 text-white text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-white/40 hover:border-white transition-all flex items-center gap-2"
            >
              <span>Explore Digital Intelligence</span>
            </Link>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-sky-200">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Zero Core Modification SLA</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-300" />
              <span>Sub-20ms Event Streaming</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-sky-300" />
              <span>Enterprise Clean Core Certified</span>
            </span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default EnterpriseAiPracticePage;
