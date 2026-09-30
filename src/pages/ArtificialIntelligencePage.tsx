import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Cpu,
  Sparkles,
  Bot,
  Brain,
  Layers,
  Workflow,
  Network,
  Zap,
  ShieldCheck,
  Database,
  BarChart3,
  TrendingUp,
  Activity,
  Compass,
  RefreshCw,
  FileText,
  Share2,
  Scan,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Globe2,
  Sliders,
  Users,
  MessageSquare,
  Terminal,
  Eye,
  Lock,
  Boxes,
  PackageCheck
} from 'lucide-react';

interface ArtificialIntelligencePageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const ArtificialIntelligencePage: React.FC<ArtificialIntelligencePageProps> = ({
  onOpenContact
}) => {
  const [searchParams] = useSearchParams();
  const itemParam = searchParams.get('item');

  // State for Section 2 Interactive Journey
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

  // State for Section 4 Circular Chevron Wheel
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(null);

  // State for Section 7 Solution Category Filter
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');

  // State for Section 9 Transformation Stage
  const [activeTransformStage, setActiveTransformStage] = useState<number>(0);

  useEffect(() => {
    if (itemParam) {
      const lower = itemParam.toLowerCase();
      if (lower.includes('generative')) setActiveJourneyStep(0);
      else if (lower.includes('agent')) setActiveJourneyStep(1);
      else if (lower.includes('assistant')) setActiveJourneyStep(2);
      else if (lower.includes('learning')) setActiveJourneyStep(3);
      else if (lower.includes('predictive')) setActiveJourneyStep(4);
      else if (lower.includes('enterprise')) setActiveJourneyStep(5);
    }
  }, [itemParam]);

  // Section 4: 8-Segment Circular Chevron Wheel (KNOOVIQ AI Platform Ecosystem)
  const wheelSegments = [
    {
      id: 'generative-ai',
      title: 'Generative AI & LLMs',
      desc: 'Contextual domain synthesis, automated code generation & enterprise knowledge summarization',
      side: 'right',
      color: '#22C55E', // Green
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(34, 197, 94, 0.3)',
      icon: Sparkles
    },
    {
      id: 'ai-agents',
      title: 'Autonomous AI Agents',
      desc: 'Goal-directed multi-agent orchestration, tool calling & autonomous execution loops',
      side: 'right',
      color: '#84CC16', // Lime Green
      textColor: 'text-lime-400',
      bgGlow: 'rgba(132, 204, 22, 0.3)',
      icon: Bot
    },
    {
      id: 'ai-assistants',
      title: 'Intelligent AI Assistants',
      desc: 'Enterprise conversational copilots, SAP Joule extensions & role-tailored workflow guides',
      side: 'right',
      color: '#EAB308', // Yellow
      textColor: 'text-yellow-400',
      bgGlow: 'rgba(234, 179, 8, 0.3)',
      icon: MessageSquare
    },
    {
      id: 'machine-learning',
      title: 'Enterprise Machine Learning',
      desc: 'Deep neural networks, automated feature stores & scalable continuous MLOps pipelines',
      side: 'right',
      color: '#F97316', // Orange
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: Cpu
    },
    {
      id: 'predictive-ai',
      title: 'Predictive & Prescriptive AI',
      desc: 'Time-series forecasting, algorithmic risk detection & dynamic demand sensing engines',
      side: 'left',
      color: '#F43F5E', // Coral / Rose
      textColor: 'text-rose-400',
      bgGlow: 'rgba(244, 63, 94, 0.3)',
      icon: TrendingUp
    },
    {
      id: 'enterprise-ai',
      title: 'Enterprise AI Core',
      desc: 'Mission-critical ERP, CRM & supply chain embedding with zero data leak architecture',
      side: 'left',
      color: '#EC4899', // Pink / Magenta
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.3)',
      icon: Layers
    },
    {
      id: 'knowledge-mesh',
      title: 'Cognitive Knowledge Mesh',
      desc: 'High-density vector embeddings, hybrid semantic retrieval & private enterprise RAG fabrics',
      side: 'left',
      color: '#A855F7', // Purple / Violet
      textColor: 'text-purple-400',
      bgGlow: 'rgba(168, 85, 247, 0.3)',
      icon: Network
    },
    {
      id: 'governance',
      title: 'Responsible AI & Guardrails',
      desc: 'Deterministic safety boundaries, hallucination elimination & continuous auditability',
      side: 'left',
      color: '#6366F1', // Indigo / Blue-violet
      textColor: 'text-indigo-400',
      bgGlow: 'rgba(99, 102, 241, 0.3)',
      icon: ShieldCheck
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

  // Section 2: Journey Steps (The 6 Shortlisted Artificial Intelligence Practices)
  const journeySteps = [
    {
      id: 'generative-ai',
      label: 'Generative AI',
      sublabel: 'Domain Foundation Models',
      desc: 'Private domain-tuned LLMs, dynamic context synthesis, automated document understanding, and enterprise Retrieval-Augmented Generation (RAG).',
      tech: 'Enterprise LLM & RAG',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      icon: Sparkles
    },
    {
      id: 'ai-agents',
      label: 'AI Agents',
      sublabel: 'Autonomous Swarms',
      desc: 'Goal-driven multi-agent swarms with recursive reasoning, automated tool calling, and cross-application API orchestration.',
      tech: 'Multi-Agent Orchestrator',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
      icon: Bot
    },
    {
      id: 'ai-assistants',
      label: 'AI Assistants',
      sublabel: 'Conversational Copilots',
      desc: 'Role-based operational copilots embedded in daily enterprise workflows, automating inquiries and guided business transactions.',
      tech: 'Joule & Custom Copilots',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
      icon: MessageSquare
    },
    {
      id: 'machine-learning',
      label: 'Machine Learning',
      sublabel: 'Deep Neural Networks',
      desc: 'Production-ready MLOps pipelines, continuous model evaluation, automated feature engineering, and high-throughput real-time inference.',
      tech: 'Automated MLOps Engines',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
      icon: Cpu
    },
    {
      id: 'predictive-ai',
      label: 'Predictive AI',
      sublabel: 'Forecasting & Sensing',
      desc: 'Algorithmic time-series forecasting, proactive anomaly detection, customer churn modeling, and supply volatility early warning.',
      tech: 'Prescriptive Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      icon: TrendingUp
    },
    {
      id: 'enterprise-ai',
      label: 'Enterprise AI',
      sublabel: 'Core ERP Integration',
      desc: 'Seamless architectural embedding into SAP S/4HANA Clean Core, enterprise CRM, and cloud databases with strict security guardrails.',
      tech: 'Clean Core AI Fabric',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      icon: Layers
    }
  ];

  // Section 3: AI Challenges & Bottlenecks Data
  const aiChallenges = [
    {
      icon: ShieldCheck,
      tag: 'DATA PRIVACY',
      title: 'Data Privacy & Hallucinations',
      desc: 'Public foundational models risk exposing proprietary company data, IP leakage, and generating ungrounded hallucinations in mission-critical operations.',
      footer: 'Grounded Private Architecture'
    },
    {
      icon: Database,
      tag: 'DATA SILOS',
      title: 'Siloed Enterprise Context',
      desc: 'Enterprise knowledge trapped across heterogeneous ERP tables, unstructured PDF contracts, and scattered ticketing systems prevents accurate LLM contextualization.',
      footer: 'Unified Semantic Vector Fabric'
    },
    {
      icon: Network,
      tag: 'ORCHESTRATION',
      title: 'Agent Coordination Complexity',
      desc: 'Multi-agent implementations often devolve into brittle cyclic loops, unpredictable tool execution, and latency bottlenecks without deterministic state machines.',
      footer: 'Deterministic Multi-Agent Swarms'
    },
    {
      icon: Zap,
      tag: 'INFERENCE COST',
      title: 'Inference Economics & Latency',
      desc: 'Unchecked token usage, inefficient model routing, and massive cloud GPU costs hinder scaling proof-of-concept AI solutions into production workloads.',
      footer: 'Optimized Model Routing & vLLM'
    },
    {
      icon: Compass,
      tag: 'DOMAIN FIT',
      title: 'Lack of Industry Grounding',
      desc: 'Generic out-of-the-box models fail to comprehend nuanced SAP transaction codes, industry-specific compliance rules, and enterprise terminology.',
      footer: 'Domain-Fine-Tuned Weights'
    },
    {
      icon: Lock,
      tag: 'GOVERNANCE',
      title: 'Auditability & Model Drift',
      desc: 'Black-box algorithms without role-based access control, decision tracing, and explainability create compliance risks under modern AI regulations.',
      footer: 'Full Auditability & RBAC Guardrails'
    }
  ];

  // Section 7: 9 Modular Enterprise AI Solutions (Symmetrical 3x3 Grid)
  const industrySolutions = [
    {
      title: 'Enterprise Knowledge RAG Engine',
      tag: 'GENERATIVE AI',
      category: 'GEN_AGENTS',
      categoryLabel: 'Generative & Agents',
      description: 'Private semantic retrieval synthesizing thousands of internal documents, SOPs, and system manuals into authoritative instant answers.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      highlights: ['Hybrid Vector Search', 'Zero Hallucination Guard', 'Document Citation Links'],
      icon: Sparkles
    },
    {
      title: 'Autonomous Multi-Agent Swarms',
      tag: 'AGENTIC SWARMS',
      category: 'GEN_AGENTS',
      categoryLabel: 'Generative & Agents',
      description: 'Coordinated autonomous agents that break down complex high-level directives, query enterprise APIs, and execute end-to-end workflows.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
      highlights: ['Goal Decomposition', 'Tool-Calling Protocols', 'Recursive Self-Correction'],
      icon: Bot
    },
    {
      title: 'Enterprise Conversational Copilots',
      tag: 'ASSISTANTS',
      category: 'GEN_AGENTS',
      categoryLabel: 'Generative & Agents',
      description: 'Domain-specific assistants integrated into Teams, Slack, and SAP Fiori, guiding staff through purchase orders, claims, and approvals.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      highlights: ['SAP Joule Integration', 'Role-Based Prompts', 'Multi-Language Support'],
      icon: MessageSquare
    },
    {
      title: 'Deep Learning & Neural Networks',
      tag: 'MACHINE LEARNING',
      category: 'ML_PREDICTIVE',
      categoryLabel: 'Machine Learning & Predictive',
      description: 'Bespoke deep learning architectures engineered for complex structured tabular data, sensor feeds, and high-frequency transactions.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
      highlights: ['Automated Feature Stores', 'Scalable GPU Training', 'Drift Detection Monitoring'],
      icon: Cpu
    },
    {
      title: 'Predictive Demand & Inventory Sensing',
      tag: 'PREDICTIVE AI',
      category: 'ML_PREDICTIVE',
      categoryLabel: 'Machine Learning & Predictive',
      description: 'Machine learning forecasting models ingesting seasonal trends, weather signals, and historic sales to optimize stocking levels.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      highlights: ['Time-Series Algorithms', 'Safety Stock Optimization', 'Dynamic Re-order Triggers'],
      icon: TrendingUp
    },
    {
      title: 'Intelligent Document Processing (IDP)',
      tag: 'COGNITIVE OCR',
      category: 'ML_PREDICTIVE',
      categoryLabel: 'Machine Learning & Predictive',
      description: 'Computer vision and multimodal LLMs extracting structured data from unstructured invoices, receipts, bills of lading, and forms.',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      highlights: ['Three-Way Invoice Match', 'Complex Table Parsing', 'Touchless Auto-Posting'],
      icon: FileText
    },
    {
      title: 'Predictive Asset Maintenance',
      tag: 'IOT & AI',
      category: 'ENTERPRISE_SYSTEMS',
      categoryLabel: 'Enterprise Systems & Core',
      description: 'Real-time telemetry analysis forecasting machinery component degradation before costly unexpected downtime occurs.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      highlights: ['Vibration Anomaly Alerts', 'Automated Work Orders', 'Remaining Useful Life (RUL)'],
      icon: Activity
    },
    {
      title: 'Responsible AI & Model Governance',
      tag: 'GOVERNANCE',
      category: 'ENTERPRISE_SYSTEMS',
      categoryLabel: 'Enterprise Systems & Core',
      description: 'Comprehensive enterprise framework delivering zero data retention, automated PII redaction, and full prompt-response audit trails.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      highlights: ['PII Masking Firewalls', 'Deterministic Guardrails', 'Regulatory Compliance'],
      icon: ShieldCheck
    },
    {
      title: 'SAP Clean Core AI Integration',
      tag: 'ERP INTEGRATION',
      category: 'ENTERPRISE_SYSTEMS',
      categoryLabel: 'Enterprise Systems & Core',
      description: 'Side-by-side artificial intelligence extensions built on SAP BTP, connecting autonomous models while preserving clean S/4HANA core.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      highlights: ['SAP BTP AI Core', 'Event-Driven Mesh', 'Decoupled Microservices'],
      icon: Layers
    }
  ];

  // Section 9: Transformation in Action (Connected 4-Phase Architecture Pipeline)
  const transformationStages = [
    {
      phase: 'INITIAL CHALLENGE',
      badge: 'SILOED STATE',
      title: 'Fragmented Data & Manual Workflows',
      subtitle: 'Legacy Enterprise State',
      description: 'Enterprise data dispersed across legacy systems, siloed document folders, and manual spreadsheets, leading to slow operational decisions and blind spots.',
      accent: 'rose',
      borderBase: 'border-rose-500/30 hover:border-rose-400',
      activeBorder: 'border-rose-400 ring-2 ring-rose-500/30 bg-rose-950/20 shadow-[0_0_25px_rgba(244,63,94,0.2)]',
      glowColor: 'bg-rose-500',
      textColor: 'text-rose-400',
      icon: Activity,
      tag: 'Unstructured Data Silos',
      before: 'Fragmented manual analysis & delayed insight cycles',
      after: 'Synchronized semantic vector mesh across the enterprise',
      metrics: ['Manual Document Parsing', 'Slow Inquiry Resolution', 'Zero Cross-System Automation']
    },
    {
      phase: 'STRATEGIC FRAMEWORK',
      badge: 'VECTOR FABRIC',
      title: 'Enterprise Knowledge Grounding',
      subtitle: 'Architecture Foundation',
      description: 'Constructing high-dimensional vector embeddings, private RAG pipelines, and deterministic guardrail firewalls to ground models in verified enterprise truth.',
      accent: 'sky',
      borderBase: 'border-sky-500/30 hover:border-sky-400',
      activeBorder: 'border-sky-400 ring-2 ring-sky-500/30 bg-sky-950/20 shadow-[0_0_25px_rgba(56,189,248,0.2)]',
      glowColor: 'bg-sky-500',
      textColor: 'text-sky-400',
      icon: Workflow,
      tag: 'Private Hybrid RAG Fabric',
      before: 'Generic public LLM prompts with hallucination risks',
      after: 'Sub-second grounded retrieval with verified source citations',
      metrics: ['Zero Data Retention', 'Deterministic Guardrails', 'Enterprise RAG Indexing']
    },
    {
      phase: 'DEPLOYED STACK',
      badge: 'AGENTIC SWARMS',
      title: 'Autonomous Multi-Agent Swarms',
      subtitle: 'Operational Execution',
      description: 'Deploying coordinated agent swarms equipped with SAP BTP tool integrations, automated reasoning loops, and conversational copilots for touchless execution.',
      accent: 'cyan',
      borderBase: 'border-cyan-500/30 hover:border-cyan-400',
      activeBorder: 'border-cyan-400 ring-2 ring-cyan-500/30 bg-cyan-950/20 shadow-[0_0_25px_rgba(34,211,238,0.2)]',
      glowColor: 'bg-cyan-500',
      textColor: 'text-cyan-400',
      icon: Cpu,
      tag: 'Agentic Tool Orchestration',
      before: 'Manual multi-screen ERP transactional entries',
      after: 'Autonomous agent swarms executing multi-step business logic',
      metrics: ['SAP BTP AI Core', 'Autonomous Tool Calling', 'Role-Based Copilots']
    },
    {
      phase: 'STRATEGIC VALUE',
      badge: 'REALIZED IMPACT',
      title: 'Continuous Autonomous Intelligence',
      subtitle: 'Enterprise Velocity',
      description: 'Attaining end-to-end cognitive operational autonomy—proactive forecasting, sub-second inquiry handling, touchless document posting, and protected margins.',
      accent: 'emerald',
      borderBase: 'border-emerald-500/30 hover:border-emerald-400',
      activeBorder: 'border-emerald-400 ring-2 ring-emerald-500/30 bg-emerald-950/20 shadow-[0_0_25px_rgba(52,211,153,0.2)]',
      glowColor: 'bg-emerald-500',
      textColor: 'text-emerald-400',
      icon: ShieldCheck,
      tag: 'Cognitive Velocity',
      before: 'Reactive operations and high administrative overhead',
      after: 'Predictable automated throughput and elevated executive agility',
      metrics: ['Touchless Workflows', 'Sub-Second Decisions', 'Governed AI Ecosystem']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">

      {/* =========================================================================
          SECTION 1: HERO SECTION (Ultra-Clean & Sleek)
          ========================================================================= */}
      <section className="relative w-full min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-16 overflow-hidden bg-slate-900">
        {/* Full-Bleed Enterprise AI Background Image with Seamless Cinematic Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2000&q=80"
            alt="Enterprise Artificial Intelligence Neural Architecture"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Seamless Cinematic Left Scrim */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/80 sm:via-slate-950/60 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-3xl space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
                <Brain className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ DIGITAL INTELLIGENCE PRACTICE &bull; CORE AI</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Artificial Intelligence for <br />
                <span className="text-cyan-400">Autonomous Enterprise Operations</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl pt-1">
                Empowering modern enterprises with private generative models, autonomous multi-agent swarms, and predictive neural networks grounded in SAP Clean Core.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="pt-2 flex flex-wrap items-center gap-3"
            >
              <button
                type="button"
                onClick={() => onOpenContact?.('Artificial Intelligence Consultation')}
                className="px-6 py-3 rounded-xl bg-[#0070C0] hover:bg-[#005B9E] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#0070C0]/25 transition-all flex items-center gap-2 group"
              >
                <span>Consult Our AI Architects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#ai-solutions"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/20 transition-all"
              >
                View AI Solutions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE PERSPECTIVE ("Engineering Autonomous Enterprise Intelligence")
          ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">

        {/* Subtle Ambient Tone */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0070C0]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-4">

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>EXECUTIVE INTELLIGENCE PERSPECTIVE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Engineering Autonomous <span className="text-[#0070C0]">Enterprise Intelligence</span>
              </h2>

              {/* Executive Thesis Quote */}
              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Enterprise artificial intelligence transcends generic chat prompts. True commercial value is unlocked when autonomous agent swarms, private knowledge fabrics, and predictive models execute within governed transactional cores.&rdquo;
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Knooviq engineers bespoke enterprise intelligence architectures on top of SAP S/4HANA Clean Core, cloud vector fabrics, and distributed multi-agent systems. By grounding models in authoritative business context, enterprise leaders achieve accelerated decision throughput, touchless workflows, and sustained compliance.
              </p>

              {/* 3 Executive Strategic Pillars */}
              <div className="space-y-2.5 pt-1">
                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Autonomous Multi-Agent Swarms</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Self-coordinating agents that decompose ambiguous corporate goals into structured API calls across ERP, CRM, and cloud services without human bottlenecks.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Domain-Grounded Generative Synthesis</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Private enterprise RAG pipelines synthesizing complex policy documents, vendor contracts, and engineering specifications into verifiable actionable guidance.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Continuous Predictive Operational Neural Nets</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Deep learning algorithms continuously sensing real-time operational telemetry, forecasting demand deviations, and triggering automated preventative adjustments.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side: Clean Photography Showcase & Stage Navigator (No Overlays on Image, No Numbers/Percentages) */}
            <div className="lg:col-span-6 space-y-3.5">

              {/* Pure High-Resolution Photography Showcase with Defined Dark Border */}
              <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden border-2 border-slate-300 shadow-md bg-slate-100">
                <img
                  src={journeySteps[activeJourneyStep].image}
                  alt={journeySteps[activeJourneyStep].label}
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />
              </div>

              {/* Stage Navigation Grid (Clean Labels + Icons, No Numbers) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {journeySteps.map((step, idx) => {
                  const isSelected = activeJourneyStep === idx;
                  const StepIcon = step.icon;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveJourneyStep(idx)}
                      className={`p-2.5 rounded-xl border text-left transition-all flex items-center gap-2.5 ${
                        isSelected
                          ? 'bg-[#0070C0] text-white border-2 border-[#0070C0] shadow-sm scale-[1.01]'
                          : 'bg-white text-slate-700 border border-slate-300 hover:bg-sky-50 hover:border-[#0070C0]'
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg shrink-0 ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-sky-50 text-[#0070C0] border border-slate-300'
                      }`}>
                        <StepIcon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold truncate">{step.label}</div>
                        <div className={`text-[10px] truncate ${isSelected ? 'text-sky-100' : 'text-slate-500'}`}>
                          {step.sublabel}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Stage Detail Card (Placed Below the Image & Controls with Defined Border) */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-300 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#003B73]">
                    {journeySteps[activeJourneyStep].label}
                  </span>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-sky-50 text-[#0070C0] border border-sky-300">
                    {journeySteps[activeJourneyStep].tech}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {journeySteps[activeJourneyStep].desc}
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <span className="text-[11px] font-medium text-slate-500">Dedicated Practice Deep-Dive</span>
                  <Link
                    to={`/digital-intelligence/${journeySteps[activeJourneyStep].id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0070C0] hover:bg-[#005B9E] text-white text-xs font-bold transition-all shadow-xs group"
                  >
                    <span>View Dedicated {journeySteps[activeJourneyStep].label} Page</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: AI CHALLENGES ("Navigating the Complexity of Enterprise AI")
          ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#F8FAFC] border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
              <Compass className="w-3.5 h-3.5 text-rose-600" />
              <span>CORE ARCHITECTURAL HURDLES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Navigating the Complexity of Enterprise AI
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Moving from isolated AI experimentation to mission-critical operational production requires overcoming six systemic architectural bottlenecks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {aiChallenges.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="h-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-slate-300 shadow-xs hover:border-[#0070C0] hover:shadow-lg transition-all group"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-sky-50 text-[#0070C0] border border-slate-200 group-hover:bg-[#0070C0] group-hover:text-white group-hover:scale-105 transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-[#0070C0] font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070C0] group-hover:scale-125 transition-transform" />
                    <span>{item.footer}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: KNOOVIQ AI PLATFORM ECOSYSTEM (Circular Chevron Radial Diagram)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#070B14] text-white border-b border-slate-800 relative overflow-hidden">

        {/* Dark Ambient Radial Hues */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-indigo-500/10 via-emerald-500/10 to-pink-500/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-inner">
              <Workflow className="w-3.5 h-3.5 text-cyan-300" />
              <span>CONNECTED ARTIFICIAL INTELLIGENCE ECOSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Capabilities Engineered for Enterprise Autonomy
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              A synchronized, circular intelligence platform uniting foundation LLMs, autonomous agent swarms, predictive machine learning, and clean enterprise ERP ledgers.
            </p>
          </motion.div>

          {/* 3-Column Radial Wheel & Flanking Capabilities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

            {/* Left Column (4 Capabilities: Top-Left to Bottom-Left) */}
            <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-5">
              {[7, 6, 5, 4].map((segIdx) => {
                const item = wheelSegments[segIdx];
                const isHovered = hoveredWheelIndex === segIdx;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredWheelIndex(segIdx)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? 'bg-slate-900/95 border-white/40 shadow-xl -translate-x-1'
                        : 'bg-slate-900/40 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                    style={{
                      boxShadow: isHovered ? `0 0 24px ${item.bgGlow}` : undefined,
                      borderColor: isHovered ? item.color : undefined
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1 text-left">
                        <h4 className="text-sm sm:text-base font-bold tracking-tight" style={{ color: item.color }}>
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                      <div
                        className="w-2 h-7 rounded-full shrink-0 mt-0.5 transition-all duration-300"
                        style={{
                          backgroundColor: item.color,
                          boxShadow: isHovered ? `0 0 12px ${item.color}` : 'none'
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Column: 8-Segment Interlocking Chevron Circular Wheel */}
            <div className="order-1 lg:order-2 lg:col-span-4 flex justify-center items-center py-4 sm:py-6">
              <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] aspect-square flex items-center justify-center">

                {/* Glow ring under wheel */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/15 via-emerald-500/10 to-pink-500/15 blur-2xl rounded-full pointer-events-none" />

                <svg
                  viewBox="0 0 500 500"
                  className="w-full h-full drop-shadow-2xl overflow-visible"
                >
                  {/* 8 Interlocking Chevron Segments */}
                  {wheelSegments.map((seg, idx) => {
                    const isHovered = hoveredWheelIndex === idx;
                    const d = getChevronPath(idx);
                    const iconPos = getIconCoords(idx);
                    const IconComponent = seg.icon;

                    return (
                      <g
                        key={seg.id}
                        onMouseEnter={() => setHoveredWheelIndex(idx)}
                        onMouseLeave={() => setHoveredWheelIndex(null)}
                        className="cursor-pointer transition-all duration-300"
                      >
                        {/* Chevron Wedge */}
                        <path
                          d={d}
                          fill={isHovered ? `${seg.color}25` : '#0A0F1D'}
                          stroke={seg.color}
                          strokeWidth={isHovered ? "3.5" : "2.2"}
                          strokeLinejoin="round"
                          className="transition-all duration-300"
                          style={{
                            filter: isHovered ? `drop-shadow(0 0 10px ${seg.color})` : undefined
                          }}
                        />

                        {/* Segment Icon */}
                        <foreignObject
                          x={iconPos.x - 14}
                          y={iconPos.y - 14}
                          width={28}
                          height={28}
                          className="pointer-events-none overflow-visible"
                        >
                          <div
                            className={`w-full h-full flex items-center justify-center transition-transform duration-300 ${
                              isHovered ? 'scale-125' : ''
                            }`}
                            style={{ color: seg.color }}
                          >
                            <IconComponent className="w-5 h-5 drop-shadow-md" />
                          </div>
                        </foreignObject>
                      </g>
                    );
                  })}

                  {/* Center Hub Outer Circle */}
                  <circle
                    cx="250"
                    cy="250"
                    r="106"
                    fill="#070B14"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    className="drop-shadow-2xl"
                  />
                  <circle
                    cx="250"
                    cy="250"
                    r="102"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                    strokeOpacity="0.25"
                  />

                  {/* Center Hub Label */}
                  <foreignObject
                    x="150"
                    y="200"
                    width="200"
                    height="100"
                    className="pointer-events-none"
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center text-center select-none px-3">
                      <span className="text-sm sm:text-base font-black text-white tracking-wider uppercase leading-tight">
                        KNOOVIQ AI
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-cyan-300 mt-1 tracking-wide">
                        Platform
                      </span>
                    </div>
                  </foreignObject>
                </svg>

              </div>
            </div>

            {/* Right Column (4 Capabilities: Top-Right to Bottom-Right) */}
            <div className="order-3 lg:order-3 lg:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-5">
              {[0, 1, 2, 3].map((segIdx) => {
                const item = wheelSegments[segIdx];
                const isHovered = hoveredWheelIndex === segIdx;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredWheelIndex(segIdx)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? 'bg-slate-900/95 border-white/40 shadow-xl translate-x-1'
                        : 'bg-slate-900/40 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                    style={{
                      boxShadow: isHovered ? `0 0 24px ${item.bgGlow}` : undefined,
                      borderColor: isHovered ? item.color : undefined
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className="w-2 h-7 rounded-full shrink-0 mt-0.5 transition-all duration-300"
                        style={{
                          backgroundColor: item.color,
                          boxShadow: isHovered ? `0 0 12px ${item.color}` : 'none'
                        }}
                      />
                      <div className="space-y-1 text-left flex-1">
                        <h4 className="text-sm sm:text-base font-bold tracking-tight" style={{ color: item.color }}>
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: TECHNOLOGY FOUNDATION ("Technology Foundation for Autonomous AI")
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Layers className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PLATFORM ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Technology Foundation for Enterprise AI
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We engineer clean-core AI technology stacks layered with private foundation LLMs, high-density vector databases, autonomous multi-agent swarms, and deterministic enterprise guardrails.
            </p>
          </div>

          {/* Layered Technology Ecosystem Visual (6 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Tech 1: Private LLMs & Domain Models */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">FOUNDATION MODELS</span>
                <Sparkles className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                Private LLMs & LoRA Fine-Tuning
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Hosting secure, containerized open-weights and proprietary models with parameter-efficient fine-tuning (LoRA) tuned to internal enterprise taxonomy.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">&bull; Llama 3, Claude & Gemini API Adapters</div>
                <div className="flex items-center gap-1.5">&bull; Private Virtual Cloud GPU Deployment</div>
              </div>
            </div>

            {/* Tech 2: Agentic Orchestration */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">AGENT FRAMEWORKS</span>
                <Bot className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                Multi-Agent Swarm Orchestrator
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Deterministic state graphs coordinating specialized sub-agents with tool-use verification, dynamic back-off, and state persistence.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">&bull; LangGraph & CrewAI Coordination</div>
                <div className="flex items-center gap-1.5">&bull; Recursive Error Self-Healing</div>
              </div>
            </div>

            {/* Tech 3: SAP BTP & Joule Copilot */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">SAP INTEGRATION</span>
                <Layers className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Joule & Clean Core AI
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Extending SAP Joule with custom skills and side-by-side microservices on SAP BTP AI Core without modifying the core S/4HANA ERP codebase.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">&bull; SAP BTP AI Core & Launchpad</div>
                <div className="flex items-center gap-1.5">&bull; Clean Core Side-by-Side Extensions</div>
              </div>
            </div>

            {/* Tech 4: High-Performance Vector Databases */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">SEMANTIC STORAGE</span>
                <Database className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                Vector Databases & Knowledge Fabrics
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Scalable vector indexing powering sub-second hybrid dense-sparse retrieval across millions of corporate documents and master data records.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">&bull; SAP HANA Cloud Vector Engine</div>
                <div className="flex items-center gap-1.5">&bull; Pinecone & Milvus High-Density Stores</div>
              </div>
            </div>

            {/* Tech 5: Scalable MLOps & GPU Inference */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">HIGH VELOCITY INFERENCE</span>
                <Zap className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                High-Throughput vLLM Serving
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                PagedAttention tensor-parallel serving clusters minimizing per-token latency and slashing continuous cloud GPU compute expenditures.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">&bull; Quantized INT8 / FP8 Tensor Serving</div>
                <div className="flex items-center gap-1.5">&bull; Dynamic Batching & Load Distribution</div>
              </div>
            </div>

            {/* Tech 6: Guardrails & Responsible AI */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">SECURITY & RBAC</span>
                <ShieldCheck className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                Deterministic Security Guardrails
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Real-time input/output firewalls ensuring zero PII leakage, regulatory compliance, full execution trace logging, and prompt injection mitigation.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">&bull; Automated PII Masking & Redaction</div>
                <div className="flex items-center gap-1.5">&bull; Immutable Prompt & Trace Auditability</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: INDUSTRY SOLUTIONS ("Solutions for Every Stage of Enterprise AI")
          ========================================================================= */}
      <section id="ai-solutions" className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-slate-200 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0] shadow-2xs">
              <Brain className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>ENTERPRISE ARTIFICIAL INTELLIGENCE CATALOG</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Solutions for Every Dimension of Enterprise AI
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Explore specialized enterprise functional modules engineered to modernize execution across Generative AI, Autonomous Agents, and Machine Learning.
            </p>
          </div>

          {/* Solution Domain Category Tabs - 4 Symmetrical Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-7 sm:mb-8">
            {[
              { id: 'ALL', label: 'All Solutions' },
              { id: 'GEN_AGENTS', label: 'Generative & Agents' },
              { id: 'ML_PREDICTIVE', label: 'Machine Learning & Predictive' },
              { id: 'ENTERPRISE_SYSTEMS', label: 'Enterprise Systems & Core' }
            ].map((cat) => {
              const isActive = activeSolutionCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveSolutionCategory(cat.id)}
                  className={`industry-category-tab px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-[#0070C0] text-white shadow-md shadow-[#0070C0]/25 scale-105'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-300 hover:border-slate-400 shadow-2xs'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Structured Compact 3-Column Enterprise Grid (Symmetrical 3x3 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
            {industrySolutions
              .filter((sol) => activeSolutionCategory === 'ALL' || sol.category === activeSolutionCategory)
              .map((sol) => {
                const IconComponent = sol.icon;
                return (
                  <div
                    key={sol.title}
                    className="h-[400px] rounded-xl bg-white border-2 border-slate-300 shadow-xs hover:border-[#0070C0] hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group"
                  >
                    {/* 1. Top Image Banner - 50% Pure Photo */}
                    <div className="relative h-1/2 w-full overflow-hidden bg-slate-100 shrink-0">
                      <img
                        src={sol.image}
                        alt={sol.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors pointer-events-none" />

                      {/* Floating Tag Pill */}
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-slate-950/80 border border-white/20 text-[9px] font-mono font-bold text-sky-300 uppercase tracking-wider backdrop-blur-md shadow-xs">
                        {sol.tag}
                      </div>
                    </div>

                    {/* 2. Card Content Body - 50% Height */}
                    <div className="h-1/2 p-3.5 sm:p-4 flex flex-col justify-between space-y-2.5 overflow-hidden">

                      <div className="space-y-1.5">
                        {/* Category & Icon Indicator */}
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-[#0070C0] uppercase tracking-wider">
                            {sol.categoryLabel}
                          </span>
                          <div className="p-1.5 rounded-lg bg-sky-50 text-[#0070C0] border border-slate-200 group-hover:bg-[#0070C0] group-hover:text-white transition-all">
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        {/* Title - Bold & Compact */}
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0070C0] transition-colors leading-snug">
                          {sol.title}
                        </h3>

                        {/* Description - Snug & Concise */}
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                          {sol.description}
                        </p>
                      </div>

                      {/* Key Capabilities Structured Inline Chips */}
                      <div className="space-y-2.5 pt-1">
                        <div className="flex flex-wrap gap-1.5">
                          {sol.highlights.map((hl, hIdx) => (
                            <span
                              key={hIdx}
                              className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-medium text-slate-700 border border-slate-200/80"
                            >
                              {hl}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: BUSINESS OUTCOMES ("Turning Algorithmic Potential into Advantage")
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>MEASURABLE BUSINESS IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Turning Algorithmic Potential into Business Advantage
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              When generative synthesis, multi-agent swarms, and predictive neural networks operate directly within enterprise workflows, organizations unlock exponential commercial speed.
            </p>
          </div>

          {/* 6 Outcomes (Large typography, flowing blue paths, generous whitespace, NO dashboards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Outcome 1 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Autonomous Operational Velocity
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automate multi-step approval, reconciliation, and customer service workflows with autonomous agent swarms, freeing teams for strategic growth.
              </p>
            </div>

            {/* Outcome 2 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Sub-Second Knowledge Retrieval
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Eliminate hours lost searching complex internal documentation. Enterprise RAG surfaces pinpoint answers with verified citations instantaneously.
              </p>
            </div>

            {/* Outcome 3 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Deterministic Output Reliability
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Eradicate hallucinations through strict semantic grounding and automated guardrails, ensuring AI outputs adhere to corporate policies.
              </p>
            </div>

            {/* Outcome 4 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Proactive Predictive Forewarning
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Anticipate equipment failures, supplier delivery bottlenecks, and customer churn weeks before they impact the financial bottom line.
              </p>
            </div>

            {/* Outcome 5 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Optimized Compute Economics
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Intelligent semantic caching, fine-tuned smaller models, and vLLM batching slash production token expenditure and infrastructure overhead.
              </p>
            </div>

            {/* Outcome 6 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Scalable Enterprise Adoption
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Modular side-by-side architecture allows rapid rollouts across business units without disrupting existing transactional ERP stability.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: SUCCESS STORY / USE CASE ("Transformation in Action")
          ========================================================================= */}
      <section className="py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-[#060D1A] via-[#0A1628] to-[#060C17] border-b border-slate-800 relative overflow-hidden text-white">

        {/* Subtle Ambient Background Grids & Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,112,192,0.18),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header - Compact & High-Impact */}
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Workflow className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>AI TRANSFORMATION ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Transformation in Action
            </h2>
            <div className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono tracking-wider uppercase">
              Autonomous Multi-Agent Enterprise Evolution
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              How modern enterprises evolve from manual operational latency to an integrated, autonomous intelligence ecosystem.
            </p>
          </div>

          {/* Flowing Laser Conduit Connecting the Stages */}
          <div className="hidden lg:block relative mb-4">
            <div className="h-0.5 bg-slate-800 rounded-full w-full relative overflow-hidden">
              <motion.div
                animate={{ x: ['-25%', '125%'] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                className="absolute top-0 bottom-0 w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee]"
              />
            </div>
          </div>

          {/* 4 Connected Interactive Transformation Cards (Compact, Crisp, Zero Numbers) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 items-stretch mb-3.5 sm:mb-4">
            {transformationStages.map((stage, sIdx) => {
              const IconComp = stage.icon;
              const isSelected = activeTransformStage === sIdx;
              return (
                <div
                  key={stage.title}
                  onClick={() => setActiveTransformStage(sIdx)}
                  className={`cursor-pointer rounded-xl backdrop-blur-md p-4 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden border-2 ${
                    isSelected
                      ? stage.activeBorder
                      : `bg-white/[0.03] ${stage.borderBase}`
                  }`}
                >
                  {/* Subtle Top Glowing Strip on Active */}
                  {isSelected && (
                    <div className={`absolute top-0 left-0 right-0 h-0.5 ${stage.glowColor} shadow-[0_0_10px_currentColor]`} />
                  )}

                  <div className="space-y-2.5">
                    {/* Header: Phase badge & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${stage.glowColor} ${isSelected ? 'animate-ping' : ''}`} />
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${stage.textColor}`}>
                          {stage.badge}
                        </span>
                      </div>
                      <div className={`p-1.5 rounded-lg bg-white/5 border border-white/10 ${stage.textColor} group-hover:scale-110 transition-transform`}>
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Stage Title & Subtitle */}
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        {stage.title}
                      </h3>
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">
                        {stage.subtitle}
                      </div>
                    </div>

                    {/* Concise Narrative */}
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {stage.description}
                    </p>
                  </div>

                  {/* Bottom Deliverable Pillar */}
                  <div className="pt-2.5 mt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[9.5px] font-mono font-medium text-slate-400">
                      {stage.tag}
                    </span>
                    <span className={`text-[9.5px] font-mono font-bold uppercase tracking-wider ${stage.textColor} group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5`}>
                      <span>{isSelected ? 'ACTIVE' : 'INSPECT'}</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Live Transformation Console / Delta Inspector (Compact) */}
          {(() => {
            const currentStage = transformationStages[activeTransformStage];
            return (
              <div className="rounded-xl bg-slate-900/90 border-2 border-slate-700/80 p-3.5 sm:p-4 shadow-xl backdrop-blur-md relative overflow-hidden">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">

                  {/* Left: Active Stage Name & Transformation Contrast */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 flex-1">
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`w-2.5 h-2.5 rounded-full ${currentStage.glowColor} animate-pulse`} />
                      <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        {currentStage.title} Delta:
                      </span>
                    </div>

                    {/* Before vs After Ribbon */}
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-2 py-0.5 rounded-md bg-rose-950/60 border border-rose-500/40 text-rose-300 text-[10.5px] font-mono">
                        PRIOR: {currentStage.before}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="px-2 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-[10.5px] font-mono font-medium">
                        TRANSFORMED: {currentStage.after}
                      </span>
                    </div>
                  </div>

                  {/* Right: Stage Key Capabilities Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/10 w-full lg:w-auto">
                    {currentStage.metrics.map((item, mIdx) => (
                      <span
                        key={mIdx}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/15 text-[10px] font-mono text-slate-300 font-semibold"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* =========================================================================
          SECTION 11: FINAL CTA (Full-Width Blue Executive Section)
          ========================================================================= */}
      <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-r from-[#003B73] via-[#005B9E] to-[#0070C0] text-white">

        {/* Abstract 3D Digital / Neural Network Mesh Visual */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
              backgroundSize: '100% 100%'
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: 'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
              backgroundSize: '36px 36px'
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-cyan-200 backdrop-blur-sm shadow-sm">
            <Brain className="w-3.5 h-3.5 text-cyan-300" />
            <span>ACCELERATE YOUR ENTERPRISE AI JOURNEY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Deploy Enterprise Artificial Intelligence?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Harness private generative models, autonomous multi-agent swarms, and predictive neural networks grounded in your business core.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact?.('Artificial Intelligence Consultation')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group"
            >
              <span>Consult Our AI Architects</span>
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
              <span>Enterprise Guardrails & Privacy</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-300" />
              <span>Sub-Second Inference Pipelines</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-sky-300" />
              <span>Clean Core Decoupled Extensions</span>
            </span>
          </div>

        </div>

      </section>

    </div>
  );
};

export default ArtificialIntelligencePage;
