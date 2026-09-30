import React, { useState } from 'react';
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
  FileCode,
  FileSearch,
  FileText,
  AlertTriangle,
  Fingerprint,
  RefreshCw,
  Search,
  ChevronRight,
  Shield,
  FileSignature,
  Scale,
  Check,
  Eye,
  Sliders,
  Award
} from 'lucide-react';

interface TechnologyPageProps {
  onOpenContact: (defaultService?: string) => void;
}

interface RagStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  telemetry: string;
  sapTech: string;
  icon: React.ReactNode;
}

const RAG_STAGES: RagStage[] = [
  {
    step: 'I',
    title: 'Enterprise Ingestion',
    subtitle: 'Multimodal Parsing of Internal Documents',
    description: 'High-throughput parsing of unstructured enterprise documents including vendor contracts (PDF), technical specs, emails, and legacy codebases with OCR fidelity.',
    telemetry: 'High-Throughput Multimodal Processing',
    sapTech: 'SAP BTP Document Information Extraction',
    icon: <FileText className="w-5 h-5 text-sky-400" />
  },
  {
    step: 'II',
    title: 'Semantic Chunking',
    subtitle: 'Context-Aware Proposition Splitting',
    description: 'Documents are broken down using semantic boundary recognition rather than arbitrary token counts, preserving legal clause continuity and financial table linkages.',
    telemetry: 'Zero Semantic Splitting Loss',
    sapTech: 'BTP AI Core Tokenizer & LangChain Integration',
    icon: <Layers className="w-5 h-5 text-indigo-400" />
  },
  {
    step: 'III',
    title: 'Vector Embeddings',
    subtitle: 'High-Dimensional Semantic Indexing',
    description: 'Text propositions are converted into dense vector embeddings and stored directly within SAP HANA Cloud Vector Engine alongside transactional relational tables.',
    telemetry: 'Real-Time Cosine Similarity Search',
    sapTech: 'SAP HANA Cloud Vector Engine (Native HNSW)',
    icon: <Database className="w-5 h-5 text-cyan-400" />
  },
  {
    step: 'IV',
    title: 'Hybrid Reranking',
    subtitle: 'Guardrail Filtering & Security Scoring',
    description: 'Semantic matches are cross-checked with keyword BM25 scoring and filtered against employee authorization roles (SAP Authorization Objects) and PII filters.',
    telemetry: 'Deterministic Role-Based Access Isolation',
    sapTech: 'SAP Generative AI Hub Prompt Guard & Shield',
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />
  },
  {
    step: 'V',
    title: 'Grounded Generation',
    subtitle: 'Deterministic, Citation-Backed Synthesis',
    description: 'Enterprise foundational models synthesize the final answer using retrieved context only—forcing exact citation of document page numbers and G/L transaction IDs.',
    telemetry: 'Zero Hallucination Tolerance Guarantee',
    sapTech: 'Claude / GPT / Mistral via BTP Proxy',
    icon: <Sparkles className="w-5 h-5 text-purple-400" />
  }
];

export const GenerativeAiPage: React.FC<TechnologyPageProps> = ({ onOpenContact }) => {
  const [selectedModel, setSelectedModel] = useState<'claude' | 'gpt4o' | 'mistral' | 'llama3'>('claude');
  const [activeRagStep, setActiveRagStep] = useState<number>(0);
  const [activeDocTab, setActiveDocTab] = useState<'contract' | 'code' | 'esg'>('contract');

  const modelSpecs = {
    claude: {
      name: 'Claude 3.5 Sonnet',
      vendor: 'Anthropic via SAP AI Core',
      contextWindow: 'Comprehensive Context Window',
      bestFor: 'Complex multi-tiered contract audits, deep financial tabular reasoning, and high-accuracy ABAP code generation',
      latency: 'Real-Time Response Latency',
      security: 'Zero Training on Tenant Data & SOC2 Type II Certified'
    },
    gpt4o: {
      name: 'OpenAI GPT-4o Omni',
      vendor: 'Azure OpenAI via SAP BTP',
      contextWindow: 'Wide Context Window',
      bestFor: 'Multimodal document comprehension, cross-lingual executive summaries, and rapid business logic drafting',
      latency: 'Sub-Second Response Latency',
      security: 'EU Sovereign Hosting & Strict Zero Data Retention'
    },
    mistral: {
      name: 'Mistral Large 2',
      vendor: 'Mistral AI via SAP BTP',
      contextWindow: 'Wide Context Window',
      bestFor: 'European regulatory compliance, open-weights verifiable auditing, and deterministic JSON schemas',
      latency: 'High-Speed Response',
      security: 'EU-Only Sovereign Cloud Residency & GDPR Compliant'
    },
    llama3: {
      name: 'Meta Llama 3.1 70B',
      vendor: 'Open Foundation via SAP BTP',
      contextWindow: 'Wide Context Window',
      bestFor: 'Cost-optimized bulk document classification, internal ticket routing, and on-premise private deployments',
      latency: 'High-Speed Response',
      security: 'Dedicated Private Container Execution'
    }
  };

  const documentIntelligenceData = {
    contract: {
      title: 'Global Master Supplier Agreement (MSA)',
      fileInfo: 'Procurement Master Service Agreement • Confidential Strategic Contract',
      summary: 'Automated cognitive legal analysis identifying exposure clauses, warranty caps, and payment escalations.',
      riskLevel: 'Elevated Risk (Review Mandatory)',
      riskBadgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      findings: [
        {
          label: 'IP Infringement Indemnity',
          value: 'Uncapped Liability Risk',
          status: 'Critical Alert',
          statusColor: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
          citation: 'Section Intellectual Property'
        },
        {
          label: 'Data Security Breach Cap',
          value: 'Capped at Annual Contract Value Threshold',
          status: 'Negotiated OK',
          statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
          citation: 'Clause Data Security'
        },
        {
          label: 'Delivery Delay Penalties',
          value: 'Daily delay penalties capped at shipment valuation threshold',
          status: 'Standard',
          statusColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
          citation: 'Annexure Liquidated Damages'
        },
        {
          label: 'FX Hedging Swings',
          value: 'Payer absorbs currency fluctuations exceeding standard corridor',
          status: 'Treasury Review',
          statusColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
          citation: 'Clause Currency & Treasury'
        }
      ],
      recommendation: 'Recommend legal counter-proposal to cap IP indemnification at standard threshold and trigger auto-escalation in SAP Ariba.'
    },
    code: {
      title: 'ERP Modernization & Clean Core Assessment',
      fileInfo: 'Custom ECC SD/MM Billing Logic • Target: S/4HANA Cloud',
      summary: 'Autonomous architectural audit transforming legacy monolithic routines into certified Clean Core RAP business objects.',
      riskLevel: 'Clean Core Compliant (Ready for RAP)',
      riskBadgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      findings: [
        {
          label: 'Direct Table Updates',
          value: 'Zero Direct Modifications (Certified Release Compliance)',
          status: 'Pass',
          statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
          citation: 'RAP Object ZI_BillingItem'
        },
        {
          label: 'Core Modification Risk',
          value: 'Decoupled from standard SAP tables via Public CDS Views',
          status: 'Modernized',
          statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
          citation: 'View Entity I_BillingDocument'
        },
        {
          label: 'Automated Test Coverage',
          value: 'Automated comprehensive unit test suite generated',
          status: 'Validated',
          statusColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
          citation: 'ABAP Unit Test Class'
        },
        {
          label: 'Migration Velocity',
          value: 'Automated transpilation replacing weeks of manual rework',
          status: 'Accelerated',
          statusColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
          citation: 'SAP BTP AI Core Engine'
        }
      ],
      recommendation: 'Target CDS View and RAP projection ready for direct deployment to SAP BTP ABAP Environment.'
    },
    esg: {
      title: 'Global Supply Chain Due Diligence (LkSG)',
      fileInfo: 'Mineral Sourcing & Human Rights Audit • German LkSG Mandate',
      summary: 'Cognitive verification of supplier ethical credentials, child labor prevention, and environmental compliance.',
      riskLevel: 'Audit Action Required (Compliance)',
      riskBadgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      findings: [
        {
          label: 'Cobalt Smelting Verification',
          value: 'Sub-tier supplier missing ISO certification certificate',
          status: 'Gap Identified',
          statusColor: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
          citation: 'Audit Report Section Smelting'
        },
        {
          label: 'Fair Wages Verification',
          value: 'Audited contracted manufacturers meet living wage thresholds',
          status: 'Compliant',
          statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
          citation: 'Exhibit Wages & Standards'
        },
        {
          label: 'Whistleblower Mechanism',
          value: 'Anonymous reporting hotline active and verified',
          status: 'Active',
          statusColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
          citation: 'Charter Governance Section'
        },
        {
          label: 'Mandatory Governance Action',
          value: 'Issue formal supplier corrective action request immediately',
          status: 'Action Scheduled',
          statusColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
          citation: 'LkSG Compliance Form Governance'
        }
      ],
      recommendation: 'Auto-generate corrective action dispatch in SAP Ariba Supplier Risk and freeze pending PO creation.'
    }
  };

  const currentDoc = documentIntelligenceData[activeDocTab];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-black">

      {/* =========================================================================
          HERO: Side-by-Side Layout (Text on Left, High-Visibility AI Visual on Right)
          ========================================================================= */}
      <section className="relative pt-28 sm:pt-32 pb-16 lg:pb-24 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0A1A3B] via-[#050C1B] to-[#02060F]">
        
        {/* Ambient Glow Effects */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-600/25 via-cyan-500/20 to-purple-600/20 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Enterprise Text Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ SOVEREIGN GENERATIVE AI ARCHITECTURE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                Grounded Enterprise GenAI <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
                  With Sovereign Data Privacy
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Harness the world's most capable foundation models anchored directly to your internal enterprise documents, SAP ERP databases, and proprietary business knowledge with guaranteed zero data leakage.
              </p>

              {/* Enterprise Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Real-Time Token Inference</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero Public Model Training</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                  <Database className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>SAP HANA Vector Grounding</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Verified Citation Provenance</span>
                </div>
              </div>

              {/* Enterprise Trust Indicators (No Buttons) */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
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
              </div>

            </div>

            {/* Right Column: High-Visibility Bright Enterprise AI Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-2xl shadow-cyan-500/20 group">
                <img
                  src="/images/generative_ai_hero.jpg"
                  alt="Knooviq Enterprise Generative AI Command Center"
                  className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-cyan-500/40 text-xs font-semibold text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Live Grounded AI Gateway</span>
                </div>

                {/* Bottom Stats Card Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">
                      Enterprise Privacy Boundary
                    </span>
                    <span className="font-bold text-white text-sm">
                      Zero External Model Training
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block">
                      Vector Indexing
                    </span>
                    <span className="font-mono font-bold text-emerald-400 text-sm">
                      Sub-15ms Latency
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          FOUNDATION MODEL HUB: Clean Interactive Enterprise Architecture Switcher
          ========================================================================= */}
      <section id="foundation-models" className="py-16 bg-[#040A17] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#09152B]/95 border-2 border-cyan-500/30 backdrop-blur-xl shadow-2xl">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 mb-6 gap-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                  ENTERPRISE FOUNDATION MODEL HUB
                </span>
                <span className="text-base font-bold text-white">Select Enterprise Model Architecture:</span>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 inline-flex items-center gap-1.5 self-start sm:self-auto">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>CERTIFIED SOVEREIGN TENANT</span>
              </span>
            </div>

            {/* Model Pill Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                { id: 'claude', name: 'Claude Sonnet Enterprise', badge: 'DEEP REASONING' },
                { id: 'gpt4o', name: 'OpenAI GPT Multimodal', badge: 'MULTIMODAL' },
                { id: 'mistral', name: 'Mistral Large Sovereign', badge: 'EU SOVEREIGN' },
                { id: 'llama3', name: 'Llama Open Weights Cluster', badge: 'OPEN WEIGHTS' }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedModel(m.id as any)}
                  className={`p-3.5 rounded-xl text-left transition-all border ${
                    selectedModel === m.id
                      ? 'bg-gradient-to-br from-[#00A3E0]/30 to-blue-700/30 border-[#00A3E0] shadow-md shadow-[#00A3E0]/20'
                      : 'bg-black/30 border-white/10 hover:border-white/20 text-slate-400'
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold text-cyan-400 block">{m.badge}</span>
                  <span className="text-xs sm:text-sm font-bold text-white block mt-1">{m.name}</span>
                </button>
              ))}
            </div>

            {/* Selected Model Telemetry Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedModel}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-xl bg-black/50 border border-white/10 text-xs"
              >
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block mb-1">
                    Context Window & Capacity
                  </span>
                  <div className="text-sm font-bold text-cyan-300">{modelSpecs[selectedModel].contextWindow}</div>
                  <span className="text-[11px] text-slate-300 mt-1 block leading-relaxed">{modelSpecs[selectedModel].bestFor}</span>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block mb-1">
                    Inference Telemetry
                  </span>
                  <div className="text-sm font-bold text-emerald-400">{modelSpecs[selectedModel].latency}</div>
                  <span className="text-[11px] text-slate-300 mt-1 block">Hosted via SAP BTP AI Core Gateway</span>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block mb-1">
                    Privacy & Compliance Boundary
                  </span>
                  <div className="text-sm font-bold text-indigo-300">Strict Zero Model Training</div>
                  <span className="text-[11px] text-slate-300 mt-1 block">{modelSpecs[selectedModel].security}</span>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: 5-STAGE ENTERPRISE RAG PIPELINE (Clickable Architecture Flow)
          ========================================================================= */}
      <section className="py-20 bg-slate-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono font-bold uppercase text-cyan-300 mb-3">
              <Network className="w-3.5 h-3.5" />
              <span>DETERMINISTIC RETRIEVAL PIPELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Interactive 5-Stage Enterprise RAG Pipeline
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Explore how Knooviq ingests, indexes, guardrails, and synthesizes answers from petabytes of internal enterprise data with sub-second latency.
            </p>
          </div>

          {/* Stepper Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {RAG_STAGES.map((stage, idx) => (
              <button
                key={idx}
                onClick={() => setActiveRagStep(idx)}
                className={`p-4 rounded-xl text-left transition-all border ${
                  activeRagStep === idx
                    ? 'bg-gradient-to-b from-[#00A3E0]/20 to-blue-900/30 border-[#00A3E0] shadow-lg shadow-[#00A3E0]/20'
                    : 'bg-white/5 border-white/5 hover:border-white/15 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-black text-cyan-400">STAGE {stage.step}</span>
                  {stage.icon}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white truncate">{stage.title}</div>
              </button>
            ))}
          </div>

          {/* Active Step Deep-Dive Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRagStep}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[#091730] to-[#061021] border-2 border-[#00A3E0]/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-[#00A3E0]/20 flex items-center justify-center text-[#00A3E0]">
                    {RAG_STAGES[activeRagStep].icon}
                  </span>
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                      STAGE {RAG_STAGES[activeRagStep].step} OF 05
                    </span>
                    <h3 className="text-2xl font-black text-white">
                      {RAG_STAGES[activeRagStep].title}: {RAG_STAGES[activeRagStep].subtitle}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {RAG_STAGES[activeRagStep].description}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="px-3.5 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-emerald-400 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{RAG_STAGES[activeRagStep].telemetry}</span>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-cyan-300 flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>{RAG_STAGES[activeRagStep].sapTech}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2 text-xs">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                    ENTERPRISE SAFEGUARD GUARANTEE
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Encrypted vector payloads</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Role-filtered user permissions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Zero hallucination guarantees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Deterministic citation provenance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accompanying Architecture Visual on the Right */}
              <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-cyan-500/30 shadow-xl">
                <img
                  src="/images/generative_ai_knowledge_mesh.jpg"
                  alt="Enterprise RAG Neural Mesh"
                  className="w-full h-64 sm:h-72 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-300">
                  <span className="font-bold text-white block">Continuous Enterprise Neural Mesh</span>
                  <span className="text-[11px] text-cyan-300">Connected to SAP HANA Cloud & Enterprise Data Lake</span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ENTERPRISE USE-CASE BENTO GRID (Clean Business Suite)
          ========================================================================= */}
      <section className="py-20 bg-[#030915] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-xs font-mono font-bold uppercase text-blue-300 mb-3">
              <Boxes className="w-3.5 h-3.5" />
              <span>PROVEN PRODUCTION ACCELERATORS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Enterprise Generative AI Production Suite
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Turnkey AI solutions engineered to modernize complex code, analyze multi-million-dollar supply contracts, and accelerate procurement.
            </p>
          </div>

          {/* Asymmetrical Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Bento Card 1: Clean Core ERP Modernization (7 Cols) */}
            <div className="lg:col-span-7 p-8 rounded-2xl bg-gradient-to-br from-[#0A1B3B] to-[#061021] border border-cyan-500/30 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00A3E0]/20 text-[#00A3E0] border border-[#00A3E0]/40">
                    <FileCode className="w-3.5 h-3.5" />
                    <span>CLEAN CORE ACCELERATOR</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/30">
                    ACCELERATED CLEAN CORE MIGRATION
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">
                  Legacy ABAP &rarr; Clean Core RAP Transformation
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                  Automatically parse custom legacy ECC 6.0 routines, direct SQL queries, and obsolete dynpros. Generates certified ABAP Cloud RAP (RESTful Application Programming) business objects with automated unit tests and CDS view contracts.
                </p>
              </div>

              {/* Clean Business Scorecard (No Raw Code) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-black/50 border border-white/10 text-xs">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">Core Integrity</span>
                  <div className="font-bold text-emerald-400 mt-0.5">Zero Modifications</div>
                  <span className="text-[11px] text-slate-400">Verified Released APIs</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">Testing Velocity</span>
                  <div className="font-bold text-cyan-300 mt-0.5">Automated Unit Tests</div>
                  <span className="text-[11px] text-slate-400">RAP Business Objects</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">S/4 Readiness</span>
                  <div className="font-bold text-indigo-300 mt-0.5">Cloud ERP Native</div>
                  <span className="text-[11px] text-slate-400">Future-Proof Upgrades</span>
                </div>
              </div>
            </div>

            {/* Bento Card 2: Contract Risk Extraction (5 Cols) */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-gradient-to-br from-[#0F1E38] to-[#081224] border border-white/10 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    <FileSearch className="w-3.5 h-3.5" />
                    <span>LEGAL & PROCUREMENT</span>
                  </span>
                  <span className="text-xs font-mono text-slate-400">SUB-MINUTE AUDIT</span>
                </div>
                <h3 className="text-xl font-black text-white mb-3">
                  Cognitive Supplier Contract Risk Extraction
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                  Instantly flag indemnification loopholes, unfavorable payment terms, and environmental ESG compliance liabilities hidden in complex supplier MSAs.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 text-xs text-purple-300 font-semibold flex items-center justify-between">
                <span>Integrated with SAP Ariba & S/4HANA</span>
                <ArrowRight className="w-4 h-4 text-purple-400" />
              </div>
            </div>

            {/* Bento Card 3: Automated RFP Synthesis (5 Cols) */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-gradient-to-br from-[#0D1C34] to-[#071120] border border-white/10 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    <Zap className="w-3.5 h-3.5" />
                    <span>PROPOSAL SPEED</span>
                  </span>
                  <span className="text-xs font-mono text-slate-400">RAPID CYCLE TURNAROUND</span>
                </div>
                <h3 className="text-xl font-black text-white mb-3">
                  Autonomous RFP & Tender Bid Response Synthesis
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                  Index your entire corporate repository of past project proposals, certifications, and delivery case studies to automatically author complete, customized technical RFP submissions.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 text-xs text-amber-300 font-semibold flex items-center justify-between">
                <span>Verified Historical Accuracy Only</span>
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
              </div>
            </div>

            {/* Bento Card 4: Enterprise Multilingual Knowledge Mining (7 Cols) */}
            <div className="lg:col-span-7 p-8 rounded-2xl bg-gradient-to-br from-[#0A1B3B] to-[#061021] border border-cyan-500/30 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <Database className="w-3.5 h-3.5" />
                    <span>ENTERPRISE SEARCH</span>
                  </span>
                  <span className="text-xs font-mono text-slate-400">GLOBAL MULTILINGUAL</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">
                  Sovereign Cross-Repository Enterprise Knowledge Mesh
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                  Break down institutional silos by connecting SharePoint, Jira, ServiceNow, Confluence, and SAP Document Management into a unified natural language neural search layer with strict permissions inheritance.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2.5 text-center text-xs font-medium">
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/10 text-cyan-300">SharePoint + Jira</div>
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/10 text-cyan-300">SAP DMS + S/4</div>
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/10 text-cyan-300">ServiceNow + Confluence</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: EXECUTIVE DOCUMENT & CONTRACT INTELLIGENCE SHOWCASE
          (Replaced Developer Code Sandbox with Business-Facing Visual Showcase)
          ========================================================================= */}
      <section className="py-10 sm:py-14 bg-slate-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono font-bold uppercase text-cyan-300 mb-2">
              <Eye className="w-3.5 h-3.5" />
              <span>COGNITIVE DOCUMENT INTELLIGENCE SHOWCASE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Instant Intelligence Extracted from Complex Business Records
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5">
              See how Knooviq GenAI transforms complex contracts, legacy ERP specs, and regulatory policies into executive risk decisions with exact citation proof.
            </p>
          </div>

          {/* Interactive Document Showcase Card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#09152B] to-[#040C1A] border-2 border-cyan-500/40 p-6 sm:p-8 shadow-2xl">
            
            {/* Header with Switcher Tabs */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-5 mb-8 gap-4">
              <div>
                <span className="text-xs font-mono uppercase text-cyan-400 font-bold block mb-1">
                  EXECUTIVE AUDIT SANDBOX
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">{currentDoc.title}</h3>
                <span className="text-xs text-slate-400 mt-0.5 block">{currentDoc.fileInfo}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'contract', label: 'Supplier Contract (MSA)' },
                  { id: 'code', label: 'ERP Clean Core Audit' },
                  { id: 'esg', label: 'ESG / LkSG Due Diligence' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDocTab(tab.id as any)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      activeDocTab === tab.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30'
                        : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Showcase Body: Side-by-Side Visual + Extracted Intelligence */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Visual Document Intelligence Image Card */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-xl group min-h-[260px] sm:min-h-[300px] lg:min-h-full">
                <img
                  src="/images/generative_ai_contract_analysis.jpg"
                  alt="Enterprise Document Intelligence"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-cyan-400/40 text-[11px] font-mono font-bold text-cyan-300 z-10">
                  Neural OCR & Citation Verified
                </div>

                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <div className="p-3 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-xs">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">
                      Audit Status
                    </span>
                    <span className="font-bold text-emerald-400">
                      Provenance Backed & Verified Integrity
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Structured Executive Business Findings */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* Risk Level Badge & Summary */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-black/60 border border-white/20">
                  <span className="text-sm sm:text-base font-bold text-white">Overall Assessment Status:</span>
                  <span className={`text-xs sm:text-sm font-mono font-bold px-3.5 py-1 rounded-full border shadow-sm ${currentDoc.riskBadgeColor}`}>
                    {currentDoc.riskLevel}
                  </span>
                </div>

                {/* Extracted Findings Cards */}
                <div className="space-y-3.5">
                  {currentDoc.findings.map((f, i) => (
                    <div
                      key={i}
                      className="p-4 sm:p-5 rounded-2xl bg-black/70 border-2 border-white/15 hover:border-cyan-400/60 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md"
                    >
                      <div className="space-y-1.5 flex-1 min-w-0">
                        <div className="flex items-center gap-2.5">
                          <span className="text-base sm:text-lg font-black text-white">{f.label}</span>
                          <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-md border ${f.statusColor}`}>
                            {f.status}
                          </span>
                        </div>
                        <div className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">{f.value}</div>
                      </div>

                      <div className="shrink-0 self-start sm:self-center">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/90 border border-cyan-400/50 text-xs sm:text-sm font-mono font-bold text-cyan-300 shadow-sm">
                          <FileText className="w-4 h-4 text-cyan-400" />
                          <span>{f.citation}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Executive Recommendation Box */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/95 via-indigo-950/90 to-cyan-950/95 border-2 border-cyan-400/50 shadow-xl space-y-2">
                  <span className="text-xs sm:text-sm font-mono uppercase text-cyan-300 font-bold tracking-wider block">
                    EXECUTIVE ACTION RECOMMENDATION
                  </span>
                  <p className="text-base sm:text-lg text-white font-bold leading-relaxed">
                    {currentDoc.recommendation}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: ENTERPRISE SOVEREIGN SECURITY & COMPLIANCE
          ========================================================================= */}
      <section className="py-20 bg-[#040A17] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-xs font-mono font-bold uppercase text-emerald-300 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>AIR-GAPPED & REGULATORY ASSURANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Enterprise Governance Without Compromise
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Every inference call is encrypted, restricted by SAP authorization roles, and strictly never stored or used for foundational model retraining.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Private Sovereign Tenant Isolation</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dedicated compute containers and private vector embeddings ensure customer intellectual property is never accessible outside your organization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Zero Model Training</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Contractually binding agreements with Anthropic, OpenAI, and Mistral guarantee zero training or persistent caching on your proprietary data.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <Fingerprint className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">SAP Auth Inheritance</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Queries dynamically inherit the logged-in user's exact SAP authorization profile, automatically masking unauthorized financial or HR data.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Sovereign Cloud Residency</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Execute inferences in designated regional data centers (Frankfurt, Zurich, Virginia, Singapore) satisfying strict GDPR, HIPAA, and DPDPA mandates.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: ENTERPRISE CALL TO ACTION
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-br from-[#061224] via-[#0A1A3B] to-[#030914] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono font-bold uppercase text-cyan-300">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SOVEREIGN PROOF-OF-CONCEPT</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Deploy Private Generative AI <br />
            <span className="text-[#00A3E0]">On Your Enterprise Data</span>
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Validate the value of enterprise RAG, automated Clean Core transformation, and cognitive contract intelligence in a secured, private sandbox before enterprise rollout.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact('Generative AI Proof-of-Concept')}
              className="px-8 py-4 rounded-xl font-bold text-sm bg-[#00A3E0] text-white hover:bg-[#008cc0] shadow-xl shadow-[#00A3E0]/30 transition-all flex items-center gap-2 group"
            >
              <span>Initiate Sovereign GenAI PoC</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/technology/ai-agents"
              className="px-6 py-4 rounded-xl font-semibold text-sm text-slate-300 hover:text-white border border-white/20 hover:border-white/40 transition-all"
            >
              <span>Explore Autonomous AI Agents &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
