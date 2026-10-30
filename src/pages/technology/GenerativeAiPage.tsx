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
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#0070C0] selection:text-white">

      {/* =========================================================================
          HERO: Ultra-Clean Full-Screen Enterprise GenAI Command Center (Dark Theme)
          ========================================================================= */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 min-h-[580px] lg:h-[660px] lg:min-h-[660px] flex items-center overflow-hidden bg-black text-white">
        {/* Full-Screen Panoramic Widescreen Hero Image (100% Clear with Zero Dark Blue Shade) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/generative_ai_hero.jpg"
            alt="Knooviq Enterprise Generative AI Command Center"
            className="w-full h-full object-cover object-right lg:object-[65%_center] select-none brightness-105 contrast-105"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-xl lg:max-w-2xl space-y-4 relative">
            {/* Seamless Soft Contrast Aura — ensures text is 100% legible with Zero Box and Zero dark blue shade */}
            <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-r from-black/85 via-black/50 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>KNOOVIQ SOVEREIGN GENERATIVE AI ARCHITECTURE</span>
              </div>
              <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-sm">
                Grounded Enterprise <br />
                <span className="text-[#00A3E0]">GenAI With Sovereign Privacy</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal max-w-2xl pt-1 drop-shadow-md">
                Harness the world's most capable foundation models anchored directly to your internal enterprise documents, SAP ERP databases, and proprietary business knowledge with guaranteed zero data leakage.
              </p>
            </motion.div>

            {/* Enterprise Trust Indicators */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="pt-2 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-cyan-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Real-Time Token Inference</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Public Model Training</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-sky-200">
                <Database className="w-4 h-4 text-sky-400 shrink-0" />
                <span>SAP HANA Vector Grounding</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOUNDATION MODEL HUB: Clean Interactive Enterprise Architecture Switcher (Light Theme)
          ========================================================================= */}
      <section id="foundation-models" className="py-16 bg-slate-50 border-b border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-white border-2 border-slate-200 shadow-xl shadow-slate-200/50">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 mb-6 gap-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#00A3E0] font-bold block">
                  ENTERPRISE FOUNDATION MODEL HUB
                </span>

                <span className="text-base font-bold text-slate-900">Select Enterprise Model Architecture:</span>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 inline-flex items-center gap-1.5 self-start sm:self-auto shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
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
              ].map((m) => {
                const isSelected = selectedModel === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModel(m.id as any)}
                    className={`p-3.5 rounded-xl text-left transition-all border ${
                      isSelected
                        ? 'bg-sky-50/80 border-2 border-[#0070C0] text-slate-900 shadow-md ring-2 ring-[#0070C0]/20'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <span className={`text-[10px] font-mono font-bold block ${isSelected ? 'text-[#0070C0]' : 'text-slate-500'}`}>{m.badge}</span>
                    <span className={`text-xs sm:text-sm font-bold block mt-1 ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>{m.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Model Telemetry Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedModel}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
              >
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block mb-1">
                    Context Window & Capacity
                  </span>
                  <div className="text-sm font-bold text-[#0070C0]">{modelSpecs[selectedModel].contextWindow}</div>
                  <span className="text-[11px] text-slate-600 mt-1 block leading-relaxed">{modelSpecs[selectedModel].bestFor}</span>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block mb-1">
                    Inference Telemetry
                  </span>
                  <div className="text-sm font-bold text-emerald-700">{modelSpecs[selectedModel].latency}</div>
                  <span className="text-[11px] text-slate-600 mt-1 block">Hosted via SAP BTP AI Core Gateway</span>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block mb-1">
                    Privacy & Compliance Boundary
                  </span>
                  <div className="text-sm font-bold text-indigo-700">Strict Zero Model Training</div>
                  <span className="text-[11px] text-slate-600 mt-1 block">{modelSpecs[selectedModel].security}</span>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: 5-STAGE ENTERPRISE RAG PIPELINE (Clickable Architecture Flow - Light Theme)
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase text-[#0070C0] mb-3 shadow-sm">
              <Network className="w-3.5 h-3.5" />
              <span>DETERMINISTIC RETRIEVAL PIPELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Interactive 5-Stage Enterprise RAG Pipeline
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed max-w-2xl mx-auto">
              Explore how Knooviq ingests, indexes, guardrails, and synthesizes answers from petabytes of internal enterprise data with sub-second latency.
            </p>
          </div>

          {/* Stepper Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {RAG_STAGES.map((stage, idx) => {
              const isActive = activeRagStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveRagStep(idx)}
                  className={`p-4 rounded-xl text-left transition-all border ${
                    isActive
                      ? 'bg-sky-50/90 border-2 border-[#0070C0] text-slate-900 shadow-md ring-2 ring-[#0070C0]/20'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-xs font-black ${isActive ? 'text-[#0070C0]' : 'text-slate-500'}`}>STAGE {stage.step}</span>
                    <span className={isActive ? 'text-[#0070C0]' : 'text-slate-400'}>{stage.icon}</span>
                  </div>
                  <div className={`text-xs sm:text-sm font-bold truncate ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>{stage.title}</div>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRagStep}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="p-8 rounded-2xl bg-slate-50 border-2 border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-[#0070C0]">
                    {RAG_STAGES[activeRagStep].icon}
                  </span>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#0070C0] uppercase">
                      STAGE {RAG_STAGES[activeRagStep].step} OF 05
                    </span>
                    <h3 className="text-2xl font-black text-slate-900">
                      {RAG_STAGES[activeRagStep].title}: {RAG_STAGES[activeRagStep].subtitle}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {RAG_STAGES[activeRagStep].description}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-semibold text-emerald-800 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{RAG_STAGES[activeRagStep].telemetry}</span>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-semibold text-[#0070C0] flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-[#0070C0]" />
                    <span>{RAG_STAGES[activeRagStep].sapTech}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2 text-xs">
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block tracking-wider">
                    ENTERPRISE SAFEGUARD GUARANTEE
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="font-medium">Encrypted vector payloads</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="font-medium">Role-filtered user permissions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="font-medium">Zero hallucination guarantees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="font-medium">Deterministic citation provenance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accompanying Architecture Visual on the Right */}
              <div className="lg:col-span-5 relative rounded-xl overflow-hidden border-2 border-slate-200 shadow-lg">
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
          SECTION 3: ENTERPRISE USE-CASE BENTO GRID (Clean Business Suite - Light Theme)
          ========================================================================= */}
      <section className="py-20 bg-slate-50 border-b border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold uppercase text-blue-700 mb-3 shadow-sm">
              <Boxes className="w-3.5 h-3.5" />
              <span>PROVEN PRODUCTION ACCELERATORS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Enterprise Generative AI Production Suite
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed max-w-2xl mx-auto">
              Turnkey AI solutions engineered to modernize complex code, analyze multi-million-dollar supply contracts, and accelerate procurement.
            </p>
          </div>

          {/* Asymmetrical Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Bento Card 1: Clean Core ERP Modernization (7 Cols) */}
            <div className="lg:col-span-7 p-8 rounded-2xl bg-white border-2 border-slate-200 shadow-md hover:shadow-xl hover:border-[#0070C0] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-50 text-[#0070C0] border border-sky-200">
                    <FileCode className="w-3.5 h-3.5" />
                    <span>CLEAN CORE ACCELERATOR</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    ACCELERATED CLEAN CORE MIGRATION
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">
                  Legacy ABAP &rarr; Clean Core RAP Transformation
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
                  Automatically parse custom legacy ECC 6.0 routines, direct SQL queries, and obsolete dynpros. Generates certified ABAP Cloud RAP (RESTful Application Programming) business objects with automated unit tests and CDS view contracts.
                </p>

                {/* Visual Clean Core Automation Preview */}
                <div className="mb-6 rounded-xl overflow-hidden relative border border-slate-200 h-44 sm:h-52 group/card shadow-sm">
                  <img
                    src="/images/sap_genai_erp_modernization_clean_core.png"
                    alt="ERP Modernization & Clean Core Assessment"
                    className="w-full h-full object-cover filter brightness-105 contrast-105 group-hover/card:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-cyan-300">
                    RPA CLEAN CORE AUTOMATION
                  </div>
                </div>
              </div>

              {/* Clean Business Scorecard (No Raw Code) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">Core Integrity</span>
                  <div className="font-bold text-emerald-700 mt-0.5">Zero Modifications</div>
                  <span className="text-[11px] text-slate-500">Verified Released APIs</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">Testing Velocity</span>
                  <div className="font-bold text-[#0070C0] mt-0.5">Automated Unit Tests</div>
                  <span className="text-[11px] text-slate-500">RAP Business Objects</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">S/4 Readiness</span>
                  <div className="font-bold text-indigo-700 mt-0.5">Cloud ERP Native</div>
                  <span className="text-[11px] text-slate-500">Future-Proof Upgrades</span>
                </div>
              </div>
            </div>

            {/* Bento Card 2: Contract Risk Extraction (5 Cols) */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-white border-2 border-slate-200 shadow-md hover:shadow-xl hover:border-purple-500 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-50 text-purple-700 border border-purple-200">
                    <FileSearch className="w-3.5 h-3.5" />
                    <span>LEGAL & PROCUREMENT</span>
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-semibold">SUB-MINUTE AUDIT</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">
                  Cognitive Supplier Contract Risk Extraction
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  Instantly flag indemnification loopholes, unfavorable payment terms, and environmental ESG compliance liabilities hidden in complex supplier MSAs.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-100 text-xs text-purple-800 font-semibold flex items-center justify-between">
                <span>Integrated with SAP Ariba & S/4HANA</span>
                <ArrowRight className="w-4 h-4 text-purple-600" />
              </div>
            </div>

            {/* Bento Card 3: Automated RFP Synthesis (5 Cols) */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-white border-2 border-slate-200 shadow-md hover:shadow-xl hover:border-amber-500 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-50 text-amber-700 border border-amber-200">
                    <Zap className="w-3.5 h-3.5" />
                    <span>PROPOSAL SPEED</span>
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-semibold">RAPID CYCLE TURNAROUND</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">
                  Autonomous RFP & Tender Bid Response Synthesis
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  Index your entire corporate repository of past project proposals, certifications, and delivery case studies to automatically author complete, customized technical RFP submissions.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-100 text-xs text-amber-800 font-semibold flex items-center justify-between">
                <span>Verified Historical Accuracy Only</span>
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
              </div>
            </div>

            {/* Bento Card 4: Enterprise Multilingual Knowledge Mining (7 Cols) */}
            <div className="lg:col-span-7 p-8 rounded-2xl bg-white border-2 border-slate-200 shadow-md hover:shadow-xl hover:border-emerald-500 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <Database className="w-3.5 h-3.5" />
                    <span>ENTERPRISE SEARCH</span>
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-semibold">GLOBAL MULTILINGUAL</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">
                  Sovereign Cross-Repository Enterprise Knowledge Mesh
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  Break down institutional silos by connecting SharePoint, Jira, ServiceNow, Confluence, and SAP Document Management into a unified natural language neural search layer with strict permissions inheritance.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2.5 text-center text-xs font-medium">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-semibold">SharePoint + Jira</div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-semibold">SAP DMS + S/4</div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-semibold">ServiceNow + Confluence</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: EXECUTIVE DOCUMENT & CONTRACT INTELLIGENCE SHOWCASE (Light Theme)
          ========================================================================= */}
      <section className="py-14 bg-white border-b border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase text-[#0070C0] mb-2 shadow-sm">
              <Eye className="w-3.5 h-3.5" />
              <span>COGNITIVE DOCUMENT INTELLIGENCE SHOWCASE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Instant Intelligence Extracted from Complex Business Records
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              See how Knooviq GenAI transforms complex contracts, legacy ERP specs, and regulatory policies into executive risk decisions with exact citation proof.
            </p>
          </div>

          {/* Interactive Document Showcase Card */}
          <div className="rounded-2xl bg-slate-50 border-2 border-slate-200 p-6 sm:p-8 shadow-xl">
            
            {/* Header with Switcher Tabs */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-5 mb-8 gap-4">
              <div>
                <span className="text-xs font-mono uppercase text-[#0070C0] font-bold block mb-1">
                  EXECUTIVE AUDIT SANDBOX
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">{currentDoc.title}</h3>
                <span className="text-xs text-slate-500 mt-0.5 block">{currentDoc.fileInfo}</span>
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
                        ? 'bg-[#0070C0] text-white shadow-md shadow-[#0070C0]/30'
                        : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-100'
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
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md group min-h-[260px] sm:min-h-[300px] lg:min-h-full">
                <img
                  src="/images/generative_ai_contract_analysis.jpg"
                  alt="Enterprise Document Intelligence"
                  className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold text-cyan-300 z-10">
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
                <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-sm sm:text-base font-bold text-slate-900">Overall Assessment Status:</span>
                  <span className={`text-xs sm:text-sm font-mono font-bold px-3.5 py-1 rounded-full border shadow-sm ${currentDoc.riskBadgeColor}`}>
                    {currentDoc.riskLevel}
                  </span>
                </div>

                {/* Extracted Findings Cards */}
                <div className="space-y-3.5">
                  {currentDoc.findings.map((f, i) => (
                    <div
                      key={i}
                      className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#0070C0] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm"
                    >
                      <div className="space-y-1.5 flex-1 min-w-0">
                        <div className="flex items-center gap-2.5">
                          <span className="text-base sm:text-lg font-black text-slate-900">{f.label}</span>
                          <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-md border ${f.statusColor}`}>
                            {f.status}
                          </span>
                        </div>
                        <div className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">{f.value}</div>
                      </div>

                      <div className="shrink-0 self-start sm:self-center">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 border border-sky-200 text-xs sm:text-sm font-mono font-bold text-[#0070C0] shadow-sm">
                          <FileText className="w-4 h-4 text-[#0070C0]" />
                          <span>{f.citation}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Executive Recommendation Box */}
                <div className="p-5 rounded-2xl bg-sky-50 border-2 border-sky-300 shadow-md space-y-2">
                  <span className="text-xs sm:text-sm font-mono uppercase text-[#0070C0] font-bold tracking-wider block">
                    EXECUTIVE ACTION RECOMMENDATION
                  </span>
                  <p className="text-base sm:text-lg text-slate-900 font-bold leading-relaxed">
                    {currentDoc.recommendation}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: ENTERPRISE SOVEREIGN SECURITY & COMPLIANCE (Light Theme)
          ========================================================================= */}
      <section className="py-20 bg-slate-50 border-b border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold uppercase text-emerald-800 mb-3 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>AIR-GAPPED & REGULATORY ASSURANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Enterprise Governance Without Compromise
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed max-w-2xl mx-auto">
              Every inference call is encrypted, restricted by SAP authorization roles, and strictly never stored or used for foundational model retraining.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200/80 hover:border-[#0070C0] hover:shadow-lg transition-all space-y-3 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0070C0] border border-sky-100 flex items-center justify-center font-bold">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Private Sovereign Tenant Isolation</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Dedicated compute containers and private vector embeddings ensure customer intellectual property is never accessible outside your organization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200/80 hover:border-emerald-600 hover:shadow-lg transition-all space-y-3 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center font-bold">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Zero Model Training</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Contractually binding agreements with Anthropic, OpenAI, and Mistral guarantee zero training or persistent caching on your proprietary data.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200/80 hover:border-purple-600 hover:shadow-lg transition-all space-y-3 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center font-bold">
                <Fingerprint className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">SAP Auth Inheritance</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Queries dynamically inherit the logged-in user's exact SAP authorization profile, automatically masking unauthorized financial or HR data.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200/80 hover:border-amber-600 hover:shadow-lg transition-all space-y-3 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center font-bold">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Sovereign Cloud Residency</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
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

