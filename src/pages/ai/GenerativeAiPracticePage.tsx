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

interface GenerativeAiPracticePageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const GenerativeAiPracticePage: React.FC<GenerativeAiPracticePageProps> = ({
  onOpenContact
}) => {
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
  const [activeDocTab, setActiveDocTab] = useState<'contract' | 'code' | 'esg'>('contract');

  // Section 4: Circular Radial Wheel (KNOOVIQ Generative AI Ecosystem)
  const wheelSegments = [
    {
      id: 'rag',
      shortTag: 'RAG',
      title: 'Enterprise RAG Architecture',
      desc: 'Ground models on private internal documents with real-time vector retrieval',
      badge: 'HYBRID VECTOR RAG',
      metric: 'HANA Cloud Vector Engine',
      side: 'right',
      color: '#22C55E',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(34, 197, 94, 0.35)',
      icon: Database
    },
    {
      id: 'fine-tuning',
      shortTag: 'TUNE',
      title: 'Domain LoRA Fine-Tuning',
      desc: 'Parameter-efficient adaptation to internal ERP codes, contracts & taxonomy',
      badge: 'LORA ADAPTATION',
      metric: 'Private Fine-Tuned Weights',
      side: 'right',
      color: '#84CC16',
      textColor: 'text-lime-400',
      bgGlow: 'rgba(132, 204, 22, 0.35)',
      icon: Cpu
    },
    {
      id: 'synthesis',
      shortTag: 'SYNTH',
      title: 'Document & Contract Synthesis',
      desc: 'Automated clause extraction, risk highlighting & policy summarization',
      badge: 'MULTIMODAL PARSING',
      metric: 'Verifiable Line-Item Citations',
      side: 'right',
      color: '#EAB308',
      textColor: 'text-yellow-400',
      bgGlow: 'rgba(234, 179, 8, 0.35)',
      icon: FileText
    },
    {
      id: 'code-gen',
      shortTag: 'CODE',
      title: 'Automated Code & SQL Gen',
      desc: 'Translate natural language into optimized ABAP, SQL & cloud microservices',
      badge: 'CLEAN CORE ABAP',
      metric: 'CAP & OData Services',
      side: 'right',
      color: '#F97316',
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.35)',
      icon: Workflow
    },
    {
      id: 'guardrails',
      shortTag: 'GUARD',
      title: 'Hallucination Firewalls',
      desc: 'Deterministic semantic verification enforcing verified claims',
      badge: 'ACTIVE GUARDRAILS',
      metric: 'NeMo Semantic Firewall',
      side: 'left',
      color: '#F43F5E',
      textColor: 'text-rose-400',
      bgGlow: 'rgba(244, 63, 94, 0.35)',
      icon: ShieldCheck
    },
    {
      id: 'privacy',
      shortTag: 'DATA',
      title: 'Private Data Retention Fabric',
      desc: 'Air-gapped prompts with real-time PII scrubbing and sovereign residency',
      badge: 'STATELESS SOVEREIGNTY',
      metric: 'Air-Gapped Private Tenant',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: Lock
    },
    {
      id: 'multimodal',
      shortTag: 'VISION',
      title: 'Multimodal Vision & Audio',
      desc: 'Parse technical schematics, equipment photos & audio customer logs',
      badge: 'SCHEMATIC RECOGNITION',
      metric: 'CAD & Voice Tokenization',
      side: 'left',
      color: '#A855F7',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(168, 85, 247, 0.35)',
      icon: Eye
    },
    {
      id: 'orchestration',
      shortTag: 'GATEWAY',
      title: 'LLM Gateway & Caching',
      desc: 'Dynamic semantic caching and multi-model failover slashing inference cost',
      badge: 'INSTANT CACHE HITS',
      metric: 'PagedAttention vLLM Cluster',
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
      id: 'rag',
      label: 'Hybrid Vector RAG',
      sublabel: 'Enterprise Grounding',
      desc: 'Connecting dense vector embeddings in SAP HANA Cloud Vector Engine with sparse keyword indices to deliver real-time in-memory semantic document lookups.',
      tech: 'HANA Cloud Vector Engine',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      icon: Database
    },
    {
      id: 'fine-tune',
      label: 'Domain Adaptation',
      sublabel: 'Fine-Tuned Weights',
      desc: 'Parameter-efficient LoRA adapters trained on internal ERP schemas, financial reporting standards, and specific supply chain vernacular.',
      tech: 'Private LLM Cluster',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
      icon: Cpu
    },
    {
      id: 'guardrails',
      label: 'Guardrail Enforcement',
      sublabel: 'Zero Hallucination',
      desc: 'Real-time semantic policy firewalls filtering prompt injections, masking sensitive PII, and enforcing verifiable source document citations.',
      tech: 'NeMo Guardrails & Shield',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      icon: ShieldCheck
    },
    {
      id: 'document-synthesis',
      label: 'Contract Synthesis',
      sublabel: 'Multimodal Parsing',
      desc: 'High-throughput parsing of complex vendor agreements, invoices, and compliance checklists with line-item citation and auto-reconciliation.',
      tech: 'Document Information Extraction',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
      icon: FileText
    },
    {
      id: 'code-generation',
      label: 'Code & SQL Automation',
      sublabel: 'Developer Copilot',
      desc: 'Natural language to Clean Core ABAP, SAP CAP services, and optimized SQL queries, accelerating core modernization sprints.',
      tech: 'Enterprise Coding Engine',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      icon: Workflow
    },
    {
      id: 'governance',
      label: 'Model Governance',
      sublabel: 'Telemetry & Audits',
      desc: 'Full audit trails recording prompt telemetry, token consumption, and response accuracy across every department in compliance with global standards.',
      tech: 'SAP AI Launchpad Governance',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      icon: Lock
    }
  ];

  // Section 3: Generative AI Challenges
  const genAiChallenges = [
    {
      icon: ShieldCheck,
      tag: 'HALLUCINATIONS',
      title: 'Ungrounded Hallucinations',
      desc: 'Standard public models confidently generate fictitious statistics and invalid policy rules when queried on proprietary internal business questions.',
      footer: 'Grounded Private RAG Systems'
    },
    {
      icon: Lock,
      tag: 'DATA PRIVACY',
      title: 'Intellectual Property Exposure',
      desc: 'Transmitting sensitive trade secrets, financial projections, or customer PII to third-party public LLM APIs violates corporate data governance.',
      footer: 'Air-Gapped Sovereign Hosting'
    },
    {
      icon: Zap,
      tag: 'GPU INFERENCE',
      title: 'Skyrocketing Token Costs',
      desc: 'Unoptimized model sizes and redundant query generation drive unsustainable cloud compute expenditures and unacceptable user latency.',
      footer: 'Semantic Caching & vLLM Serving'
    },
    {
      icon: Database,
      tag: 'UNSTRUCTURED SILOS',
      title: 'Fragmented Internal Context',
      desc: 'Critical knowledge locked inside disparate SharePoint folders, emails, legacy ERP notes, and scanned PDFs cannot be indexed by basic models.',
      footer: 'Multimodal Vector Indexing'
    },
    {
      icon: Compass,
      tag: 'DOMAIN VOCABULARY',
      title: 'Lack of Industry Lexicon',
      desc: 'Generic models do not understand specialized ERP movement types, G/L accounts, clinical trial phases, or custom manufacturing bill of materials.',
      footer: 'LoRA Domain Adaptation'
    },
    {
      icon: Scale,
      tag: 'REGULATORY AUDITS',
      title: 'Lack of Explainability & RBAC',
      desc: 'Inability to track which employee saw what AI-generated data or verify why a particular synthesis was output creates severe compliance liabilities.',
      footer: 'Immutable Trace Logging'
    }
  ];

  // Section 7: 9 Modular Enterprise Solutions
  const industrySolutions = [
    {
      title: 'Enterprise Knowledge RAG Hub',
      tag: 'SEMANTIC SEARCH',
      category: 'RETRIEVAL',
      categoryLabel: 'Retrieval & Context',
      description: 'Unified search index across internal manuals, SharePoint, and ERP documentation returning verified answers with line-item citations.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      highlights: ['HANA Vector Engine', 'Citation Footnotes', 'Role-Based Filtering'],
      icon: Database
    },
    {
      title: 'Contract & Legal Risk Analyzer',
      tag: 'LEGAL AI',
      category: 'RETRIEVAL',
      categoryLabel: 'Retrieval & Context',
      description: 'Multimodal parsing of comprehensive supplier agreements identifying liability clauses, indemnity deviations, and renewal dates.',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      highlights: ['Redline Highlighting', 'Clause Comparison', 'Auto-Risk Scoring'],
      icon: FileText
    },
    {
      title: 'Multimodal Asset Inspector',
      tag: 'COMPUTER VISION',
      category: 'RETRIEVAL',
      categoryLabel: 'Retrieval & Context',
      description: 'Visual analysis of machinery photos and engineering schematics paired with maintenance manuals for instant troubleshooting.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      highlights: ['Blueprint OCR', 'Fault Recognition', 'Work Order Generation'],
      icon: Eye
    },
    {
      title: 'Private LoRA Fine-Tuning Cluster',
      tag: 'MODEL ADAPTATION',
      category: 'MODELS',
      categoryLabel: 'Models & Synthesis',
      description: 'Secure parameter-efficient tuning of open-weights models on internal business logic without exposing proprietary data.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
      highlights: ['Domain Weights', 'Air-Gapped Training', 'Continuous Evaluation'],
      icon: Cpu
    },
    {
      title: 'Clean Core Code Generator',
      tag: 'DEVELOPER AI',
      category: 'MODELS',
      categoryLabel: 'Models & Synthesis',
      description: 'Transform user stories into production-ready ABAP Cloud, CAP CDS definitions, and Fiori UI5 components in minutes.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      highlights: ['ABAP Cloud Ready', 'Automated Unit Tests', 'Clean Core Compliance'],
      icon: Workflow
    },
    {
      title: 'Executive Financial Summarizer',
      tag: 'FINANCIAL AI',
      category: 'MODELS',
      categoryLabel: 'Models & Synthesis',
      description: 'Automated synthesis of multi-entity balance sheets, variance commentaries, and board briefing decks with audited calculations.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      highlights: ['Variance Narratives', 'Board-Ready Slides', 'Audited Ledger Links'],
      icon: BarChart3
    },
    {
      title: 'Deterministic Prompt Guardrails',
      tag: 'GOVERNANCE',
      category: 'GOVERNANCE',
      categoryLabel: 'Security & Control',
      description: 'Active firewall intercepting jailbreaks, toxic inputs, prompt injections, and ungrounded outputs before they reach users.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      highlights: ['Prompt Injection Shield', 'Semantic Consistency', 'Zero Hallucinations'],
      icon: ShieldCheck
    },
    {
      title: 'Automated PII Redaction Gateway',
      tag: 'DATA PRIVACY',
      category: 'GOVERNANCE',
      categoryLabel: 'Security & Control',
      description: 'In-line pseudonymization and masking of employee SSNs, customer credit cards, and addresses before LLM processing.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      highlights: ['Real-Time Masking', 'GDPR Compliance', 'De-anonymization Keys'],
      icon: Lock
    },
    {
      title: 'Semantic Caching & Token Router',
      tag: 'COST EFFICIENCY',
      category: 'GOVERNANCE',
      categoryLabel: 'Security & Control',
      description: 'High-speed vector cache answering recurring enterprise questions with zero GPU latency and minimal cloud API cost.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      highlights: ['Instant Cache Hits', 'Drastic Token Savings', 'Dynamic Model Routing'],
      icon: Zap
    }
  ];

  // Section 8: Enterprise Value & Architecture Pillars
  const roiBenchmarks = [
    {
      status: 'VERIFIED',
      badge: 'GROUNDED ACCURACY',
      title: 'Citation Provenance',
      desc: 'Every generative answer is anchored with deterministic footnotes linking to original source document sections and ERP table keys.',
      icon: ShieldCheck,
      color: '#0070C0',
      bgGlow: 'from-sky-50 to-blue-50/40',
      borderColor: 'border-sky-200 hover:border-[#0070C0]'
    },
    {
      status: 'REAL-TIME',
      badge: 'IN-MEMORY RETRIEVAL',
      title: 'Vector Search Velocity',
      desc: 'Real-time cosine similarity vector scans executed natively in-memory inside SAP HANA Cloud Vector Engine.',
      icon: Zap,
      color: '#0284C7',
      bgGlow: 'from-cyan-50 to-sky-50/40',
      borderColor: 'border-cyan-200 hover:border-cyan-500'
    },
    {
      status: 'OPTIMIZED',
      badge: 'COMPUTE CONTAINMENT',
      title: 'Token & GPU Cost Optimization',
      desc: 'High-speed semantic vector caching responds to recurring enterprise questions with zero LLM API billing and instant latency.',
      icon: TrendingUp,
      color: '#10B981',
      bgGlow: 'from-emerald-50 to-teal-50/40',
      borderColor: 'border-emerald-200 hover:border-emerald-500'
    },
    {
      status: 'AIR-GAPPED',
      badge: 'SOVEREIGN ISOLATION',
      title: 'Private Data Retention',
      desc: 'Complete data isolation guarantee. Customer prompts, internal contracts, and financial models are never used for public LLM training.',
      icon: Lock,
      color: '#8B5CF6',
      bgGlow: 'from-purple-50 to-indigo-50/40',
      borderColor: 'border-purple-200 hover:border-purple-500'
    },
    {
      status: 'ACCELERATED',
      badge: 'CLEAN CORE MODERNIZATION',
      title: 'RAP Development Velocity',
      desc: 'Automated synthesis of ABAP Cloud RAP business objects, CAP service definitions, and test classes accelerates modernization velocity.',
      icon: Workflow,
      color: '#F59E0B',
      bgGlow: 'from-amber-50 to-orange-50/40',
      borderColor: 'border-amber-200 hover:border-amber-500'
    },
    {
      status: 'GUARDED',
      badge: 'ACTIVE GUARDRAILS',
      title: 'Hallucination Firewall',
      desc: 'Deterministic semantic firewalls intercept unverified claims, toxic prompts, and prompt injection attacks before reaching users.',
      icon: Shield,
      color: '#EC4899',
      bgGlow: 'from-pink-50 to-rose-50/40',
      borderColor: 'border-pink-200 hover:border-pink-500'
    }
  ];

  // Section 9: Autonomous Document Intelligence Audit Sandbox Data
  const auditDocuments = {
    contract: {
      id: 'contract',
      tabLabel: 'Supplier MSA (Procurement)',
      title: 'Global Master Supplier Agreement (MSA)',
      fileInfo: 'Procurement Master Service Agreement • Confidential Strategic Contract',
      riskLevel: 'ELEVATED RISK • ACTION MANDATORY',
      riskBadgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/50 shadow-amber-500/10',
      recommendation: 'Auto-generate legal counter-amendment in SAP Ariba to establish standard indemnification liability caps, and freeze unapproved purchase orders pending legal sign-off.',
      findings: [
        {
          level: 'CRITICAL RISK',
          levelColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
          borderColor: 'border-rose-500/40 hover:border-rose-400',
          title: 'IP Infringement Liability Exposure',
          desc: 'Uncapped indemnification exposure detected — supplier deviates from standard corporate liability caps.',
          citation: 'Clause: IP Indemnification'
        },
        {
          level: 'STANDARD CLAUSE',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Delivery Delay Penalties & Liquidation',
          desc: 'Cumulative delay penalties capped at shipment valuation threshold with expedited liquidation terms.',
          citation: 'Annexure: Liquidated Damages'
        },
        {
          level: 'TREASURY REVIEW',
          levelColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          borderColor: 'border-amber-500/40 hover:border-amber-400',
          title: 'FX Hedging & Currency Fluctuation Floor',
          desc: 'Payer absorbs currency fluctuations exceeding standard corridor — triggers automated treasury hedging protocol.',
          citation: 'Clause: Treasury & Multi-Currency'
        }
      ]
    },
    code: {
      id: 'code',
      tabLabel: 'SAP Clean Core RAP Audit',
      title: 'ERP Custom ABAP & User Exit Modernization',
      fileInfo: 'SAP ECC Custom Codebase • S/4HANA Migration & Clean Core Audit',
      riskLevel: 'OBSOLETE CALLS DETECTED • RAP READY',
      riskBadgeColor: 'bg-sky-500/20 text-sky-300 border-sky-400/50 shadow-sky-500/10',
      recommendation: 'Refactor custom direct SQL routines into released SAP Cloud APIs via automated ABAP Cloud code generation assistant.',
      findings: [
        {
          level: 'CRITICAL OBSOLETE',
          levelColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
          borderColor: 'border-rose-500/40 hover:border-rose-400',
          title: 'Direct Table Access to Legacy Tables',
          desc: 'Direct database queries bypassing S/4HANA CDS views detected across custom billing exits.',
          citation: 'Routine: ZFI_POST_EXIT'
        },
        {
          level: 'CLEAN CORE VERIFIED',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'RAP Business Object Generation',
          desc: 'Automated conversion to draft-enabled RAP Business Objects with behavior definitions and automated unit tests.',
          citation: 'Package: ZRAP_PURCHASE_REQ'
        },
        {
          level: 'GOVERNANCE AUDIT',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Authorization Object Verification',
          desc: 'All RFC endpoints verified against role authorization profiles with zero data leaks.',
          citation: 'Auth Object: S_DEVELOP'
        }
      ]
    },
    esg: {
      id: 'esg',
      tabLabel: 'ESG & LkSG Due Diligence',
      title: 'Supply Chain Human Rights & Emissions Audit',
      fileInfo: 'German Supply Chain Act (LkSG) Audit Packet • Scope Logistics Reporting',
      riskLevel: 'AUDIT VERIFIED • ESG COMPLIANT',
      riskBadgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-emerald-500/10',
      recommendation: 'Export certified ESG compliance packet to SAP Sustainability Footprint Management for automated regulatory filing.',
      findings: [
        {
          level: 'SUPPLIER DUE DILIGENCE',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Smelter Sourcing Conformance',
          desc: 'Traceability documentation validated across all contracted smelters and raw material suppliers.',
          citation: 'Audit Report: ISO Compliance'
        },
        {
          level: 'CARBON INTENSITY',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Logistics Fleet Footprint',
          desc: 'Calculated freight carbon footprint complies with environmental sustainability threshold standards.',
          citation: 'Annex: Logistics Telemetry'
        },
        {
          level: 'LABOR STANDARDS',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Human Rights Policy & Wage Conformance',
          desc: 'Zero non-conformances detected in third-party factory labor audit records across all contracted facilities.',
          citation: 'Certificate: Social Accountability'
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
            src="/images/sap_business_ai_hero.jpg"
            alt="Enterprise Generative AI Neural Architecture"
            className="w-full h-full object-cover object-center opacity-40"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/80 sm:via-slate-950/60 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-3xl space-y-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ DIGITAL INTELLIGENCE &bull; GENERATIVE AI</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Enterprise <br />
                <span className="text-cyan-400">Generative AI & LLMs</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl pt-1">
                Private RAG fabrics, domain-grounded foundation models, and deterministic guardrails engineered on SAP HANA Cloud Vector Engine.
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
                <span>Zero Hallucination Tolerance</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Citation Provenance</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200">
                <Database className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Air-Gapped Sovereign Hosting</span>
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
                Architecting Trusted <span className="text-[#0070C0]">Enterprise Generative AI</span>
              </h2>
              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Generative AI delivers transformational business value only when responses are deterministically grounded in verified corporate systems with strict citation traceability.&rdquo;
                </p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Knooviq constructs production-grade Retrieval-Augmented Generation (RAG) fabrics integrated directly into SAP BTP and cloud lakehouses. We eliminate hallucination risk and secure your intellectual property while giving teams instant access to verified corporate knowledge.
              </p>
              <div className="space-y-2.5 pt-1">
                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Database className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">High-Density Vector Storage</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Embed enterprise knowledge alongside transactional data in SAP HANA Cloud without third-party data synchronization overhead.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Deterministic Output Guardrails</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Active real-time validation layers that score responses against retrieved source passages, blocking ungrounded answers.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Optimized Compute & Token Caching</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Semantic caching clusters delivering instant in-memory responses on repeated inquiries and drastically slashing LLM inference billing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3.5">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900 group">
                <img
                  src="/images/generative_ai_hero.jpg"
                  alt="Knooviq Enterprise Generative AI Command Center"
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
              Navigating Generative AI Deployment Challenges
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Moving from simple pilot demonstrations to enterprise-scale production requires solving six fundamental architectural vulnerabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {genAiChallenges.map((item, idx) => {
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
              <pattern id="cyberGrid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(0, 163, 224, 0.4)" strokeWidth="0.8" />
                <circle cx="0" cy="0" r="1.5" fill="rgba(0, 229, 255, 0.6)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cyberGrid)" />
          </svg>
        </div>

        {/* Ambient Aurora Glows (Tuned down for compact height) */}
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
              <span>KNOOVIQ RADIAL ARCHITECTURE &bull; NEURAL MESH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Ecosystem for Enterprise Knowledge Synthesis
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
              A synchronized radial platform uniting private vector embeddings, parameter fine-tuning, deterministic guardrails, and multimodal document understanding.
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
                    <radialGradient id="centerReactorCore" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#0B162C" />
                      <stop offset="70%" stopColor="#060C18" />
                      <stop offset="100%" stopColor="#03060D" />
                    </radialGradient>
                    <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Outer Orbital Orbit with Coordinates */}
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
                    fill="url(#centerReactorCore)" 
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
                            KNOOVIQ GENAI
                          </span>
                          <span className="text-[9.5px] font-mono font-bold text-cyan-300 block tracking-wider uppercase">
                            Synthesis Mesh
                          </span>
                          <span className="text-[8.5px] font-mono text-slate-400 block pt-0.5">
                            ACTIVE MESH &bull; CLEAN CORE
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
                  <radialGradient id="centerReactorCoreMob" cx="50%" cy="50%" r="50%">
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
                  fill="url(#centerReactorCoreMob)" 
                  stroke={hoveredWheelIndex !== null ? wheelSegments[hoveredWheelIndex].color : '#00A3E0'} 
                  strokeWidth="2.5" 
                />

                <foreignObject x="150" y="150" width="200" height="200" className="pointer-events-none">
                  <div className="w-full h-full flex flex-col items-center justify-center text-center select-none px-2">
                    {hoveredWheelIndex === null ? (
                      <div className="space-y-1">
                        <Brain className="w-5 h-5 mx-auto text-cyan-300 animate-pulse" />
                        <span className="text-xs font-black text-white uppercase block">KNOOVIQ AI</span>
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
                  <div className="text-[11px] font-mono font-bold text-white uppercase tracking-wider truncate">Neural Mesh Fabric</div>
                  <div className="text-[9.5px] text-slate-400 truncate">Synchronized Fabric</div>
                </div>
              </div>
              <div className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800/90 backdrop-blur-md flex items-center gap-2.5 hover:border-cyan-500/40 transition-colors">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                <div className="min-w-0">
                  <div className="text-[11px] font-mono font-bold text-white uppercase tracking-wider truncate">Real-Time Latency</div>
                  <div className="text-[9.5px] text-slate-400 truncate">In-Memory Vector Search</div>
                </div>
              </div>
              <div className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800/90 backdrop-blur-md flex items-center gap-2.5 hover:border-rose-500/40 transition-colors">
                <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse shrink-0" />
                <div className="min-w-0">
                  <div className="text-[11px] font-mono font-bold text-white uppercase tracking-wider truncate">Active Guardrails</div>
                  <div className="text-[9.5px] text-slate-400 truncate">Verified Generation</div>
                </div>
              </div>
              <div className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800/90 backdrop-blur-md flex items-center gap-2.5 hover:border-purple-500/40 transition-colors">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shrink-0" />
                <div className="min-w-0">
                  <div className="text-[11px] font-mono font-bold text-white uppercase tracking-wider truncate">Sovereign Privacy</div>
                  <div className="text-[9.5px] text-slate-400 truncate">Private Tenant Isolation</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: ENTERPRISE NEURAL KNOWLEDGE MESH BLUEPRINT
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Layers className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PLATFORM ARCHITECTURE BLUEPRINT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Enterprise Neural Knowledge Mesh
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
              Stateless proxy gateways connecting SAP HANA Cloud Vector Engine, private fine-tuned LLMs, and enterprise applications with zero data leakage.
            </p>
          </div>

          {/* Architecture Neural Mesh Visual Card (Image 3 of 4) */}
          <div className="rounded-3xl overflow-hidden border-2 border-slate-200 bg-slate-950 shadow-xl relative group">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 relative h-72 sm:h-80 lg:h-96 overflow-hidden">
                <img
                  src="/images/generative_ai_knowledge_mesh.jpg"
                  alt="Enterprise Knowledge Mesh & Neural Core"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-950/90 hidden lg:block pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent lg:hidden pointer-events-none" />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-400/40 text-xs font-mono font-bold text-cyan-300 shadow-sm flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-cyan-400" />
                  <span>NEURAL VECTOR MESH BLUEPRINT</span>
                </div>
              </div>
              <div className="lg:col-span-5 p-6 sm:p-8 space-y-4 text-white">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                  Unified Knowledge Fabric
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-snug">
                  Multi-Model Knowledge Mesh & Clean Core Gateway
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Interlinking enterprise documents, SAP HANA Cloud Vector Engine, and foundational LLMs via stateless proxy gateways. Zero PII leakage and zero foundational model retraining on sensitive corporate data.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-cyan-200">
                  <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15">✓ Stateless Inference</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15">✓ Dynamic Prompt Guard</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15">✓ Real-Time Vector Lookups</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: MODULAR SOLUTIONS (3x3 Grid)
          ========================================================================= */}
      <section id="generative-solutions" className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-slate-200 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>ENTERPRISE GENERATIVE SOLUTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Modular Generative AI Solutions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Production-ready enterprise modules engineered to synthesize knowledge, automate contract verification, and accelerate development.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-7 sm:mb-8">
            {[
              { id: 'ALL', label: 'All Solutions' },
              { id: 'RETRIEVAL', label: 'Retrieval & Context' },
              { id: 'MODELS', label: 'Models & Synthesis' },
              { id: 'GOVERNANCE', label: 'Security & Control' }
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
            {industrySolutions
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
          SECTION 8: MEASURABLE BUSINESS ROI BENCHMARKS (Non-Repetitive Scorecard)
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
              Core architectural foundations achieved when foundation models are grounded in private enterprise context.
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
          SECTION 9: AUTONOMOUS DOCUMENT & CONTRACT INTELLIGENCE ANALYSIS
          ========================================================================= */}
      <section className="py-5 sm:py-7 bg-gradient-to-b from-[#050C18] via-[#09152B] to-[#040A14] border-b border-slate-800 relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-4 sm:mb-5 space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/90 border border-cyan-400/50 text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300">
              <FileText className="w-3 h-3 text-cyan-400" />
              <span>COGNITIVE DOCUMENT & CONTRACT ANALYSIS</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Autonomous Contract & Policy Analysis
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-normal">
              Transforming complex agreements, ERP specs, and compliance covenants into verified executive risk decisions with exact citation proof.
            </p>
          </div>

          {/* Interactive Document Analysis Command Pod */}
          <div className="rounded-xl border border-cyan-500/30 bg-slate-900/90 shadow-xl p-3 sm:p-4 backdrop-blur-xl relative overflow-hidden">
            
            {/* Top Header Row: Document Metadata & Live Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-2.5 mb-3 gap-2">
              <div className="space-y-1 text-left">
                {/* Document Tabs Switcher */}
                <div className="flex flex-wrap gap-1.5">
                  {(['contract', 'code', 'esg'] as const).map((docKey) => {
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
              
              {/* Left Column: Visual AI Document Scan (Image 4 of 4) */}
              <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-cyan-400/40 shadow-lg group min-h-[260px] sm:min-h-[300px] lg:min-h-full">
                <img
                  src="/images/generative_ai_contract_analysis.jpg"
                  alt="Autonomous Contract Analysis & Cognitive Engine"
                  className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-cyan-400/50 text-[10px] font-mono font-bold text-cyan-300 flex items-center gap-1.5 z-10 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Neural OCR &bull; Citation Verified</span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/15 text-white text-left z-10 space-y-0.5">
                  <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                    Zero Hallucination Audit
                  </span>
                  <div className="text-xs font-bold text-emerald-300">
                    Deterministic Provenance Backed with Sub-Clause Citations
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
            <span>DEPLOY PRIVATE GENERATIVE AI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Harness Grounded Generative Intelligence?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Ground your models in verified corporate context with zero hallucination risk and complete IP privacy.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact?.('Generative AI Practice Consultation')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group"
            >
              <span>Consult Our Generative AI Architects</span>
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
              <span>Zero Data Retention SLA</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-300" />
              <span>Real-Time Vector Lookups</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-sky-300" />
              <span>Enterprise Clean Core Ready</span>
            </span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GenerativeAiPracticePage;
