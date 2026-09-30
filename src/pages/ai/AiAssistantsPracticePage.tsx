import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
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
  Headphones,
  Bot
} from 'lucide-react';

interface AiAssistantsPracticePageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const AiAssistantsPracticePage: React.FC<AiAssistantsPracticePageProps> = ({
  onOpenContact
}) => {
  // State for Section 2 Interactive Journey
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

  // State for Section 4 Interactive Wheel
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(null);
  const [activeWheelIndex, setActiveWheelIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // State for Section 7 Solution Filters
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');

  // State for Section 9 Interactive Document Sandbox
  const [activeDocTab, setActiveDocTab] = useState<'executive' | 'procurement' | 'operations'>('executive');

  // Section 4: 8-Segment Cybernetic Cockpit Wheel Capabilities
  const wheelSegments = [
    {
      id: 'copilot',
      shortTag: 'COPILOT',
      title: 'Conversational Enterprise Copilots',
      desc: 'Context-aware natural language interfaces guiding users through complex corporate tasks',
      badge: 'ENTERPRISE COPILOT',
      metric: 'Adaptive Context Awareness',
      side: 'right',
      color: '#0070C0',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(0, 112, 192, 0.35)',
      icon: MessageSquare
    },
    {
      id: 'context',
      shortTag: 'CONTEXT',
      title: 'Dynamic Context Hydration',
      desc: 'Real-time injection of SAP master data, user roles, and transactional records into prompt context',
      badge: 'CONTEXT INGESTION',
      metric: 'Live ERP Data Hydration',
      side: 'right',
      color: '#0EA5E9',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(14, 165, 233, 0.35)',
      icon: Database
    },
    {
      id: 'joule',
      shortTag: 'JOULE',
      title: 'Native SAP Joule Orchestration',
      desc: 'Deep bi-directional interoperability with SAP Joule and business application microservices',
      badge: 'SAP JOULE BRIDGE',
      metric: 'BTP Native Connectors',
      side: 'right',
      color: '#06B6D4',
      textColor: 'text-teal-400',
      bgGlow: 'rgba(6, 182, 212, 0.35)',
      icon: Cpu
    },
    {
      id: 'multimodal',
      shortTag: 'VISION',
      title: 'Multimodal Document & Visual OCR',
      desc: 'Simultaneous comprehension of scanned invoices, schematics, and tabular reports',
      badge: 'MULTIMODAL PARSER',
      metric: 'High-Density Document Extraction',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.35)',
      icon: FileCheck
    },
    {
      id: 'voice',
      shortTag: 'VOICE',
      title: 'Voice-Activated Field Assistance',
      desc: 'Hands-free voice transcription and action dispatch for shop-floor and field technicians',
      badge: 'VOICE SYNTHESIS',
      metric: 'Low-Latency Audio Streaming',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.35)',
      icon: Headphones
    },
    {
      id: 'guardrails',
      shortTag: 'GUARD',
      title: 'Semantic Privacy & Prompt Firewalls',
      desc: 'Real-time verification preventing PII leakage and blocking unauthorized data exfiltration',
      badge: 'PROMPT FIREWALL',
      metric: 'Zero PII Data Leakage',
      side: 'left',
      color: '#F43F5E',
      textColor: 'text-rose-400',
      bgGlow: 'rgba(244, 63, 94, 0.35)',
      icon: ShieldCheck
    },
    {
      id: 'memory',
      shortTag: 'MEMORY',
      title: 'Session & Semantic Memory Vault',
      desc: 'Cross-interaction memory retaining user preferences and ongoing case history securely',
      badge: 'STATEFUL MEMORY',
      metric: 'Multi-Turn Session Lineage',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.35)',
      icon: Workflow
    },
    {
      id: 'action',
      shortTag: 'ACTION',
      title: 'Proactive Workflow Recommendations',
      desc: 'Intelligent suggestion engine surfacing next-best actions and automating routine ERP approvals',
      badge: 'PROACTIVE GUIDANCE',
      metric: 'Closed-Loop Action Suggestions',
      side: 'left',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.35)',
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
      id: 'intent',
      label: 'Intent Parsing',
      sublabel: 'Semantic Routing',
      desc: 'Decomposing natural user prompts into structured business intents, entity parameters, and target system scopes.',
      tech: 'Neural Intent Classifier',
      icon: GitBranch
    },
    {
      id: 'hydration',
      label: 'Context Hydration',
      sublabel: 'Live ERP Query',
      desc: 'Retrieving live SAP CDS views, user authorization claims, and transaction histories to construct a rich context envelope.',
      tech: 'SAP BTP Context Engine',
      icon: Database
    },
    {
      id: 'reasoning',
      label: 'Multi-Model Reasoning',
      sublabel: 'Domain Copilots',
      desc: 'Executing specialized domain models for finance, supply chain, and HR with prompt templates grounded in enterprise policies.',
      tech: 'Federated Model Router',
      icon: Cpu
    },
    {
      id: 'citation',
      label: 'Citation Verification',
      sublabel: 'Source Grounding',
      desc: 'Evaluating generated responses against source business records and attaching precise drill-down citations.',
      tech: 'Deterministic Citation Engine',
      icon: ShieldCheck
    },
    {
      id: 'guidance',
      label: 'Proactive Guidance',
      sublabel: 'Workflow Copilot',
      desc: 'Synthesizing contextual insights and recommending pre-configured one-click action cards for business users.',
      tech: 'Proactive Action Dispatcher',
      icon: Workflow
    },
    {
      id: 'audit',
      label: 'Audit & Telemetry',
      sublabel: 'Immutable Tracing',
      desc: 'Logging all user queries, retrieved records, model reasoning steps, and executed actions into an unalterable compliance ledger.',
      tech: 'Sovereign Compliance Vault',
      icon: Lock
    }
  ];

  // Section 3: AI Assistants Challenges
  const copilotChallenges = [
    {
      icon: AlertTriangle,
      tag: 'HALLUCINATION',
      title: 'Hallucinated Business Records',
      desc: 'Generic models generating plausible yet entirely fictitious customer order numbers or inventory balances.',
      footer: 'Deterministic Vector Grounding'
    },
    {
      icon: RefreshCw,
      tag: 'CONTEXT DECAY',
      title: 'Context Window Degradation',
      desc: 'Long multi-turn corporate sessions losing historical thread and providing inconsistent operational advice.',
      footer: 'Semantic Memory Chunking & Reranking'
    },
    {
      icon: Lock,
      tag: 'SECURITY CREEP',
      title: 'Privilege & Permission Creep',
      desc: 'Assistants inadvertently exposing confidential payroll, pricing, or strategic data to unauthorized user tiers.',
      footer: 'Dynamic Role-Based Access Control'
    },
    {
      icon: Database,
      tag: 'SYSTEM SILOS',
      title: 'Siloed Enterprise Disconnect',
      desc: 'Conversational tools detached from live ERP transactions, forcing users to manually copy-paste recommendations.',
      footer: 'Native SAP BTP & Joule Connectors'
    },
    {
      icon: Eye,
      tag: 'MULTIMODAL GAP',
      title: 'Multimodal Input Ambiguity',
      desc: 'Failure to extract structured line-items from complex supplier invoices, packing slips, and technical CAD drawings.',
      footer: 'Dual-Stream Document & Visual OCR'
    },
    {
      icon: Users,
      tag: 'ADOPTION BARRIER',
      title: 'Friction in Workflow Adoption',
      desc: 'Assistants sequestered in standalone web apps rather than embedded directly into SAP Fiori, Teams, and Outlook.',
      footer: 'Omnichannel In-App Embedding'
    }
  ];

  // Section 7: 9 Modular Enterprise Solutions (Exact Generative AI Card Format, NO images)
  const assistantSolutions = [
    {
      title: 'Executive Decision Support Copilot',
      tag: 'EXECUTIVE',
      category: 'EXECUTIVE',
      description: 'Conversational assistant delivering instant cash-flow projections, revenue variance breakdowns, and Board-ready presentations.',
      highlights: ['Real-Time P&L Synthesis', 'Variance Drill-Down Citations', 'Executive Brief Generation'],
      icon: BarChart3
    },
    {
      title: 'SAP Joule Enterprise Companion',
      tag: 'OPERATIONS',
      category: 'OPERATIONS',
      description: 'Native conversational assistant embedded across SAP S/4HANA guiding business users through day-to-day transactions.',
      highlights: ['Transaction Code Guidance', 'In-App Business Navigation', 'Clean Core BTP Grounding'],
      icon: Cpu
    },
    {
      title: 'Customer Service Omnichannel Assistant',
      tag: 'WORKFORCE',
      category: 'WORKFORCE',
      description: 'Context-rich copilot assisting support representatives with live order tracking, warranty validation, and CRM updates.',
      highlights: ['Live Order Status Tracking', 'Warranty Verification', 'Automated CRM Case Sync'],
      icon: Users
    },
    {
      title: 'Procurement & Vendor Negotiation Copilot',
      tag: 'OPERATIONS',
      category: 'OPERATIONS',
      description: 'Intelligent assistant comparing supplier quotes, extracting contractual terms, and drafting vendor counter-proposals.',
      highlights: ['Contract Clause Extraction', 'Historical Pricing Lookup', 'Vendor Proposal Drafting'],
      icon: Scale
    },
    {
      title: 'HR & Employee Experience Companion',
      tag: 'WORKFORCE',
      category: 'WORKFORCE',
      description: 'Conversational assistant resolving policy inquiries, benefits explanations, and onboarding guidance in natural language.',
      highlights: ['Policy Document Search', 'Leave Balance Validation', 'Onboarding Step Guidance'],
      icon: MessageSquare
    },
    {
      title: 'Field Service Technician Copilot',
      tag: 'WORKFORCE',
      category: 'WORKFORCE',
      description: 'Voice-activated multimodal assistant diagnosing machinery faults, pulling equipment manuals, and logging work orders.',
      highlights: ['Voice-to-Work Order', 'Interactive Equipment Manuals', 'BOM Parts Identification'],
      icon: Headphones
    },
    {
      title: 'Clean Core Developer AI Assistant',
      tag: 'OPERATIONS',
      category: 'OPERATIONS',
      description: 'Specialized coding copilot accelerating ABAP Cloud modernization, draft-enabled RAP creation, and CDS view building.',
      highlights: ['ABAP Cloud Syntax Guide', 'Automated RAP Boilerplate', 'Unit Test Generation'],
      icon: Workflow
    },
    {
      title: 'Regulatory & Compliance Policy Assistant',
      tag: 'EXECUTIVE',
      category: 'EXECUTIVE',
      description: 'Continuous oversight copilot screening agreements against SOX, ESG, and cross-border trade governance mandates.',
      highlights: ['Cross-Border Compliance Check', 'Audit Trail Citations', 'Sanctions & Tariff Lookups'],
      icon: ShieldCheck
    },
    {
      title: 'Sales Enablement & Deal Copilot',
      tag: 'WORKFORCE',
      category: 'WORKFORCE',
      description: 'Conversational assistant synthesizing account histories, preparing competitive battlecards, and drafting custom RFPs.',
      highlights: ['Account History Summary', 'RFP Response Drafting', 'Dynamic Pricing Guardrails'],
      icon: TrendingUp
    }
  ];

  // Section 8: Enterprise Value & Architecture Pillars (ZERO numbers/percentages)
  const roiBenchmarks = [
    {
      status: 'CONTEXT-AWARE',
      badge: 'ENTERPRISE GROUNDING',
      title: 'Live S/4HANA Master Data Hydration',
      desc: 'Copilots dynamically retrieve live transactional records, CDS views, and role permissions for every response.',
      icon: Database,
      borderColor: 'border-sky-200 hover:border-[#0070C0]'
    },
    {
      status: 'REAL-TIME',
      badge: 'LATENCY OPTIMIZED',
      title: 'Sub-Second Semantic Retrieval',
      desc: 'High-density vector indexing delivers near-instant contextual recall across millions of enterprise documents.',
      icon: Zap,
      borderColor: 'border-sky-200 hover:border-[#0070C0]'
    },
    {
      status: 'SOVEREIGN',
      badge: 'AIR-GAPPED CLOUD',
      title: 'Private Tenant Data Isolation',
      desc: 'All corporate prompts, conversations, and retrieved context remain strictly within dedicated sovereign cloud boundaries.',
      icon: Lock,
      borderColor: 'border-sky-200 hover:border-[#0070C0]'
    },
    {
      status: 'MULTIMODAL',
      badge: 'DOCUMENT & VOICE',
      title: 'Cross-Modal Ingestion Engine',
      desc: 'Seamless ingestion and analysis of scanned PDF invoices, engineering schematics, and hands-free voice audio.',
      icon: FileCheck,
      borderColor: 'border-sky-200 hover:border-[#0070C0]'
    },
    {
      status: 'GOVERNED',
      badge: 'AUDIT COMPLIANT',
      title: 'Cryptographic Citation Logging',
      desc: 'Every assistant recommendation links deterministically to underlying ERP records with complete audit lineage.',
      icon: ShieldCheck,
      borderColor: 'border-sky-200 hover:border-[#0070C0]'
    },
    {
      status: 'VERIFIED',
      badge: 'CLEAN CORE READY',
      title: 'Native SAP BTP & Joule Interop',
      desc: 'Pre-built integration connectors for SAP Joule, Fiori Launchpad, Microsoft Teams, and cloud microservices.',
      icon: CheckSquare,
      borderColor: 'border-sky-200 hover:border-[#0070C0]'
    }
  ];

  // Section 9: Interactive Copilot Sandbox Data
  const auditDocuments = {
    executive: {
      id: 'executive-brief',
      title: 'Executive Financial Copilot & Revenue Variance Analysis',
      tabLabel: 'Financial Copilot',
      fileInfo: 'Context: SAP S/4HANA Finance &bull; Scope: Global Q3 Operations',
      riskLevel: 'SOURCE CITATIONS VERIFIED',
      riskBadgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      recommendation: 'Copilot synthesized Q3 variance drivers with full drill-down citations into general ledger postings.',
      findings: [
        {
          level: 'RETRIEVED',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Regional Revenue Discrepancy Identified',
          desc: 'EMEA operational revenue variance reconciled against currency fluctuations and delayed logistics delivery schedules.',
          citation: 'CDS: I_GLAccountLineItem'
        },
        {
          level: 'VERIFIED',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Cash Flow Projection Grounded',
          desc: 'Rolling 90-day cash position projected using real-time open accounts receivable and verified payment terms.',
          citation: 'Model: CashFlowForecasting_v4'
        },
        {
          level: 'ACTIONABLE',
          levelColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
          borderColor: 'border-purple-500/40 hover:border-purple-400',
          title: 'Board-Ready Synthesis Prepared',
          desc: 'Generated three-slide executive summary with interactive data points ready for CFO sign-off.',
          citation: 'Format: Executive Presentation'
        }
      ]
    },
    procurement: {
      id: 'procurement-assistant',
      title: 'Procurement Negotiation & Vendor Contract Copilot',
      tabLabel: 'Procurement Copilot',
      fileInfo: 'Context: SAP Ariba / S/4HANA &bull; Contract Ref: #CNT-2026-991',
      riskLevel: 'FAVORABLE TERMS IDENTIFIED',
      riskBadgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      recommendation: 'Vendor price escalation matched against benchmark index. Counter-proposal clauses drafted autonomously.',
      findings: [
        {
          level: 'EXTRACTED',
          levelColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          borderColor: 'border-amber-500/40 hover:border-amber-400',
          title: 'Price Index Clause Variance Flagged',
          desc: 'Supplier requested raw material increase exceeds contractual producer price index escalation cap.',
          citation: 'Clause: 14.2 Price Escalation'
        },
        {
          level: 'BENCHMARKED',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Cross-Vendor Historical Pricing Queried',
          desc: 'Retrieved median benchmark pricing across 3 alternative qualified suppliers from enterprise procurement history.',
          citation: 'Source: SAP Purchasing Info Records'
        },
        {
          level: 'DRAFTED',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Formal Counter-Proposal Generated',
          desc: 'Structured response letter generated citing agreement limits and proposing volume-tiered compromise.',
          citation: 'Ariba: Sourcing Draft #D-8812'
        }
      ]
    },
    operations: {
      id: 'operations-assistant',
      title: 'Shop-Floor Plant Maintenance Voice & Visual Copilot',
      tabLabel: 'Maintenance Copilot',
      fileInfo: 'Context: SAP PM / Asset Intelligence &bull; Asset: Turbine #TB-404',
      riskLevel: 'DIAGNOSTIC PROTOCOL CONFIRMED',
      riskBadgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
      recommendation: 'Multimodal sensor telemetry mapped to technical repair manual. Spare part requisition dispatched.',
      findings: [
        {
          level: 'INGESTED',
          levelColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          borderColor: 'border-emerald-500/40 hover:border-emerald-400',
          title: 'Vibration Telemetry & Error Code Decoded',
          desc: 'Technician voice prompt and telemetry spectrogram mapped to bearing assembly breakdown signature.',
          citation: 'Telemetry: SCADA_SENSOR_VIB_8'
        },
        {
          level: 'REFERENCED',
          levelColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          borderColor: 'border-cyan-500/40 hover:border-cyan-400',
          title: 'Technical Schematics & Safety Checklist Pulled',
          desc: 'Step-by-step lock-out tag-out protocol and torque specifications presented on technician mobile display.',
          citation: 'Manual: OEM_TB404_SEC_5'
        },
        {
          level: 'DISPATCHED',
          levelColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
          borderColor: 'border-purple-500/40 hover:border-purple-400',
          title: 'Spare Part MRO Reservation Created',
          desc: 'Required replacement bearing kit reserved in central plant warehouse via SAP PM maintenance order.',
          citation: 'SAP PM Order: #MO-2026-7731'
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
          SECTION 1: HERO SECTION (Image 1 of 4 - Ultra-Clean & Sleek, NO Buttons)
          ========================================================================= */}
      <section className="relative w-full min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ai_assistants_hero.jpg"
            alt="Enterprise AI Assistants & Intelligent Copilots"
            className="w-full h-full object-cover object-center opacity-40"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/80 sm:via-slate-950/60 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-3xl space-y-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
                <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ DIGITAL INTELLIGENCE &bull; AI ASSISTANTS & COPILOTS</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Enterprise <br />
                <span className="text-cyan-400">AI Assistants & Copilots</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl pt-1">
                Context-aware conversational copilots, multimodal enterprise assistants, and seamless SAP Joule orchestration grounded on private corporate knowledge.
              </p>
            </motion.div>

            {/* Enterprise Trust Indicators (Strictly No Buttons) */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="pt-2 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Context-Aware Grounding</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Multimodal Enterprise Copilots</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200">
                <Database className="w-4 h-4 text-sky-400 shrink-0" />
                <span>SAP Joule & BTP Native</span>
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
                Architecting Context-Aware <span className="text-[#0070C0]">Enterprise Copilots</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Enterprise AI assistants succeed only when deeply integrated into daily operational workflows, providing contextualized business intelligence with zero data leakage.&rdquo;
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Knooviq engineers purpose-built enterprise assistants that bridge natural language queries with live enterprise records across SAP ERP, CRM, and corporate knowledge bases.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Database className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Real-Time Enterprise Grounding</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Deep context indexing connecting directly into SAP CDS views and unstructured document lakes.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <CheckSquare className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Multimodal Task Execution</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Ingesting invoices, technical drawings, and natural speech to generate structured ERP action items.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border-2 border-slate-200/90 bg-white shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-sky-200">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-950">Sovereign Privacy Perimeter</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Strict tenant isolation guaranteeing that enterprise prompts and proprietary context never train public foundation models.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Deep-Dive Visual Card (Image 2 of 4) + Step Switcher */}
            <div className="lg:col-span-6 space-y-3.5">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-900 group">
                <img
                  src="/images/ai_assistants_hero.jpg"
                  alt="Knooviq Enterprise AI Assistants & Copilots Command Center"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/50 text-xs font-mono font-bold text-cyan-300 shadow-sm flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                  <span>ACTIVE ARCHITECTURE: {journeySteps[activeJourneyStep].label.toUpperCase()}</span>
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
                      onClick={() => setActiveJourneyStep(idx)}
                      className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2.5 ${
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
              <span>CORE RISKS & HURDLES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Navigating Enterprise Copilot Deployment Challenges
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Overcoming the fundamental barriers that prevent conversational assistants from delivering real business utility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {copilotChallenges.map((item, idx) => {
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
              <span>COGNITIVE COPILOT COCKPIT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Enterprise AI Assistant Orchestration Engine
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
              Continuous coordination loop balancing natural conversation, live ERP context hydration, and sovereign data privacy.
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
                      ASSISTANT
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
                  <div className="text-[11px] font-mono font-bold text-white uppercase tracking-wider truncate">Context Grounding</div>
                  <div className="text-[9.5px] text-slate-400 truncate">S/4HANA CDS Schemas</div>
                </div>
              </div>
              <div className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800/90 backdrop-blur-md flex items-center gap-2.5 hover:border-cyan-500/40 transition-colors">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                <div className="min-w-0 text-left">
                  <div className="text-[11px] font-mono font-bold text-white uppercase tracking-wider truncate">Joule Interop</div>
                  <div className="text-[9.5px] text-slate-400 truncate">SAP BTP Connectors</div>
                </div>
              </div>
              <div className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800/90 backdrop-blur-md flex items-center gap-2.5 hover:border-blue-500/40 transition-colors">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shrink-0" />
                <div className="min-w-0 text-left">
                  <div className="text-[11px] font-mono font-bold text-white uppercase tracking-wider truncate">Citation Lineage</div>
                  <div className="text-[9.5px] text-slate-400 truncate">Zero Hallucination Proof</div>
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
              Sovereign Enterprise Copilot Fabric
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
              High-density vector grounding, semantic context proxying, and SAP Joule orchestration within a zero-trust enterprise security perimeter.
            </p>
          </div>

          {/* Architecture Neural Mesh Visual Card (Image 3 of 4) */}
          <div className="rounded-3xl overflow-hidden border-2 border-slate-200 bg-slate-950 shadow-xl relative group">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 relative h-72 sm:h-80 lg:h-96 overflow-hidden">
                <img
                  src="/images/ai_assistants_architecture_mesh.jpg"
                  alt="Enterprise AI Assistants & Copilots Architecture Blueprint"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-950/90 hidden lg:block pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent lg:hidden pointer-events-none" />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-400/40 text-xs font-mono font-bold text-cyan-300 shadow-sm flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-cyan-400" />
                  <span>ENTERPRISE COPILOT BLUEPRINT</span>
                </div>
              </div>
              <div className="lg:col-span-5 p-6 sm:p-8 space-y-4 text-white">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                  Unified Copilot Fabric
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-snug">
                  Multimodal Enterprise Assistant Core & Joule Gateway
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Unifying SAP CDS views, unstructured document repositories, and fine-tuned domain LLMs via private proxy architecture. Zero PII exposure and complete data sovereign control.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-cyan-200">
                  <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15">&check; SAP Joule Native</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15">&check; Dynamic Context Hydration</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15">&check; Sub-Second Semantic Search</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: MODULAR SOLUTIONS (3x3 Grid - EXACT Generative AI Card Format, NO Images)
          ========================================================================= */}
      <section id="assistant-solutions" className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-slate-200 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>ENTERPRISE COPILOT BLUEPRINTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Modular Enterprise AI Assistant Solutions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Production-ready enterprise assistants engineered to synthesize corporate records, guide transactional workflows, and boost workforce productivity.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-7 sm:mb-8">
            {[
              { id: 'ALL', label: 'All Solutions' },
              { id: 'EXECUTIVE', label: 'Executive & Strategy' },
              { id: 'OPERATIONS', label: 'Operations & ERP' },
              { id: 'WORKFORCE', label: 'Workforce & Service' }
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
            {assistantSolutions
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
              Core architectural foundations achieved when conversational copilots are grounded in private enterprise context.
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
          SECTION 9: INTERACTIVE COPILOT COMMAND SANDBOX (Image 4 of 4 - Zero Gap Above/Below)
          ========================================================================= */}
      <section className="py-5 sm:py-7 bg-gradient-to-b from-[#050C18] via-[#09152B] to-[#040A14] border-b border-slate-800 relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-4 sm:mb-5 space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/90 border border-cyan-400/50 text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300">
              <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
              <span>COGNITIVE COPILOT EXECUTION SANDBOX</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Interactive Enterprise Assistant & Decision Grounding
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-normal">
              Observe context-aware copilots ingest user inquiries, retrieve live S/4HANA records, and verify source citations with zero hallucination.
            </p>
          </div>

          {/* Interactive Document Analysis Command Pod */}
          <div className="rounded-xl border border-cyan-500/30 bg-slate-900/90 shadow-xl p-3 sm:p-4 backdrop-blur-xl relative overflow-hidden">
            
            {/* Top Header Row: Document Metadata & Live Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-2.5 mb-3 gap-2">
              <div className="space-y-1 text-left">
                {/* Document Tabs Switcher */}
                <div className="flex flex-wrap gap-1.5">
                  {(['executive', 'procurement', 'operations'] as const).map((docKey) => {
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
              <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-cyan-400/40 shadow-lg group min-h-[260px] sm:min-h-[300px] lg:min-h-full">
                <img
                  src="/images/ai_assistants_sandbox_execution.jpg"
                  alt="Enterprise AI Assistant & Live Interaction Console"
                  className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-cyan-400/50 text-[10px] font-mono font-bold text-cyan-300 flex items-center gap-1.5 z-10 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Verified Citation Assistant Core</span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/15 text-white text-left z-10 space-y-0.5">
                  <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                    Zero Hallucination Grounding
                  </span>
                  <div className="text-xs font-bold text-emerald-300">
                    Live ERP Context Retrieval with Tamper-Proof Audit Proof
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
          SECTION 11: FINAL CTA (Identical to Generative AI Page)
          ========================================================================= */}
      <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-r from-[#003B73] via-[#005B9E] to-[#0070C0] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-cyan-200 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>DEPLOY ENTERPRISE AI ASSISTANTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Empower Your Enterprise with Intelligent Copilots?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Equip your workforce with context-aware conversational assistants, live S/4HANA grounding, and sovereign privacy guarantees.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact?.('AI Assistants Practice Consultation')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group"
            >
              <span>Consult Our AI Copilot Architects</span>
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

    </div>
  );
};

export default AiAssistantsPracticePage;
