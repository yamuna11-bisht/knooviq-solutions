import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Database,
  Bot,
  Cpu,
  Layers,
  Workflow,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Activity,
  Cloud,
  Compass,
  Lock,
  Network,
  Boxes,
  FileCheck,
  Server,
  Zap,
  BarChart3,
  Building2,
  LineChart,
  BrainCircuit,
  SearchCheck,
  ChevronRight
} from 'lucide-react';

interface TechnologyPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const DataAnalyticsAiPage: React.FC<TechnologyPageProps> = ({ onOpenContact }) => {
  const servicesCatalog = [
    {
      id: 'srv-1',
      category: 'Data Fabric & Federation',
      title: 'SAP Datasphere',
      tagline: 'Unified Business Data Fabric & Zero-Copy Virtualization',
      description: 'Unify distributed transactional and analytical data across SAP S/4HANA, BW/4HANA, Databricks, Snowflake, and Google BigQuery without moving physical bytes. Preserves enterprise business semantics and data lineage across hybrid estates.',
      costModel: 'Capacity Units (CUs) & Storage Tiers',
      useCase: 'Cross-system corporate reporting, federated enterprise data mesh, and live procurement analytics across heterogeneous ERP systems.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      cleanCoreRating: 'Zero-Copy Virtualization Standard'
    },
    {
      id: 'srv-2',
      category: 'Executive Decision Intelligence',
      title: 'SAP Analytics Cloud (SAC)',
      tagline: 'Augmented BI, Enterprise Planning & Predictive Simulation',
      description: 'Empower C-suite leaders and financial controllers with unified business intelligence, collaborative extended planning and analysis (xP&A), and natural language augmented analytics directly connected to SAP Datasphere and S/4HANA.',
      costModel: 'User Subscription (BI, Planning & Predictive Tiers)',
      useCase: 'Executive board cockpits, multi-entity financial consolidation, driver-based revenue forecasting, and ESG regulatory compliance reporting.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      cleanCoreRating: 'Native Live CDS Connection'
    },
    {
      id: 'srv-3',
      category: 'Embedded Business AI',
      title: 'SAP Business AI & Joule Copilot',
      tagline: 'Context-Aware Operational Copilot & Decision Engines',
      description: 'Infuse purpose-built artificial intelligence directly into core SAP transactional workflows. Automate routine reconciliations, extract unstructured document data, and surface contextual recommendations via Joule across finance and supply chain.',
      costModel: 'AI Units (AIUs) & User Entitlement',
      useCase: 'Intelligent cash application matching, touchless AP invoice processing, predictive stock replenishment, and contract compliance auditing.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      cleanCoreRating: 'Native S/4HANA Embedded AI'
    },
    {
      id: 'srv-4',
      category: 'Enterprise LLM Orchestration',
      title: 'Generative AI Hub & Vector Search',
      tagline: 'Grounded Foundation Models with Sovereign Enterprise Perimeter',
      description: 'Orchestrate premier foundational LLMs (GPT-4o, Claude 3.5 Sonnet, Mistral Large) inside the SAP BTP security perimeter, grounded on real-time enterprise SAP business data without ever training external public models on corporate intellectual property.',
      costModel: 'Token Consumption & Inference Units',
      useCase: 'Multi-lingual supplier RFP evaluation, automated financial variance narration, complex contract clause extraction, and conversational customer support.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
      cleanCoreRating: 'Sovereign Enterprise AI Boundary'
    },
    {
      id: 'srv-5',
      category: 'Master Data Governance',
      title: 'SAP Master Data Governance (MDG)',
      tagline: 'Single Trusted Golden Record Across Enterprise Domains',
      description: 'Centralize the creation, validation, and continuous maintenance of master data domains including Business Partners, Materials, Chart of Accounts, and Supplier hierarchies with rigorous audit-compliant workflow approvals.',
      costModel: 'Managed Entity Volume & User Licenses',
      useCase: 'Global vendor deduplication, harmonized material taxonomies across multi-country manufacturing plants, and automated international address verification.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      cleanCoreRating: 'Decoupled Master Hub Architecture'
    },
    {
      id: 'srv-6',
      category: 'High-Speed Data Warehousing',
      title: 'SAP BW/4HANA & Modernization',
      tagline: 'High-Performance In-Memory Consolidation for Historical Analysis',
      description: 'Modernize legacy SAP BW architectures into high-velocity in-memory analytical warehouses running natively on SAP HANA. Strip out redundant layers, simplify data tiering, and integrate seamlessly into SAP Datasphere federation.',
      costModel: 'HANA Memory Tiers & Storage Nodes',
      useCase: 'Multi-decade historical sales auditing, multi-currency corporate consolidation, and statutory tax and regulatory data retention repositories.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
      cleanCoreRating: 'Optimized CDS Core Alignment'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">

      {/* =========================================================================
          SECTION 1: HERO SECTION (Cinematic Blue & White Enterprise Architecture)
          ========================================================================= */}
      <section className="relative w-full min-h-[600px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-14 overflow-hidden bg-blue-950">

        {/* Background Image with Deep Blue Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80"
            alt="SAP Data, Analytics & AI Cloud Architecture"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/75 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-blue-950/50 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-5">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/80 border border-blue-400/30 text-xs font-mono font-bold uppercase tracking-wider text-blue-200 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                <span>KNOOVIQ TECHNOLOGY PRACTICE &bull; DATA, ANALYTICS & AI</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                Contextual Intelligence via <br />
                <span className="text-blue-300">Data, Analytics & Enterprise AI</span>
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-blue-100 leading-snug">
                Harmonize Data Fabrics. Democratize Analytics. Deploy Sovereign Business AI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 max-w-2xl"
            >
              <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed">
                Eliminate disjointed reporting and fragile data pipelines. With <strong className="text-white font-semibold">SAP Datasphere</strong>, <strong className="text-white font-semibold">SAP Analytics Cloud</strong>, and <strong className="text-white font-semibold">SAP Business AI</strong>, Knooviq harmonizes distributed enterprise data into a live business semantic fabric—delivering real-time predictive steering and autonomous AI agents without costly data replication.
              </p>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-blue-300" />
                  <span>Unified Data Fabric</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-blue-300" />
                  <span>Zero-Copy Virtualization</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-blue-300" />
                  <span>Autonomous Business AI</span>
                </span>
              </div>
            </motion.div>

            {/* Enterprise Architectural Trust Ribbon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 pt-5 border-t border-blue-800/80 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
            >
              <div className="p-3.5 rounded-xl bg-blue-900/50 border border-blue-800">
                <div className="flex items-center gap-2 mb-1">
                  <Database className="w-4 h-4 text-blue-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-blue-300 uppercase">DATA FABRIC</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white">SAP Datasphere</div>
                <div className="text-xs text-blue-200 mt-0.5">Zero-Copy Virtualization</div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-900/50 border border-blue-800">
                <div className="flex items-center gap-2 mb-1">
                  <BarChart3 className="w-4 h-4 text-blue-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-blue-300 uppercase">AUGMENTED BI</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white">SAP Analytics Cloud</div>
                <div className="text-xs text-blue-200 mt-0.5">Collaborative xP&A</div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-900/50 border border-blue-800">
                <div className="flex items-center gap-2 mb-1">
                  <Bot className="w-4 h-4 text-blue-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-blue-300 uppercase">EMBEDDED AI</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white">SAP Business AI</div>
                <div className="text-xs text-blue-200 mt-0.5">Joule Copilot Integration</div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-900/50 border border-blue-800">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-blue-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-blue-300 uppercase">GOVERNANCE</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white">SAP MDG Golden Record</div>
                <div className="text-xs text-blue-200 mt-0.5">Enterprise Master Data</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ENTERPRISE DECISION GUIDE (Where Does Your Data & AI Belong?)
          (Pure Information in Blue & White - Clean, Structured, High-Value)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                <Compass className="w-3.5 h-3.5 text-blue-600" />
                <span>ENTERPRISE DATA & AI ARCHITECTURAL FRAMEWORK</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Architectural Decision Guide: Modernizing Your Enterprise Data Fabric & AI Boundary
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Legacy ERP environments suffered from brittle overnight batch extraction scripts and rogue BI silos. Modern SAP architecture organizes data federation, augmented analytics, and artificial intelligence into 4 distinct enterprise tiers to guarantee sub-second insights without ERP performance degradation.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-md h-64">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80"
                  alt="Enterprise Data & Analytics Strategic Planning"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 4 Clean Informative Cards (Blue & White) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Tier 1 */}
            <div className="p-6 rounded-2xl bg-white border border-blue-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-mono font-bold text-blue-700 uppercase">
                  TIER 1 &bull; SEMANTIC FABRIC
                </span>
                <h3 className="text-lg font-bold text-blue-950">SAP Datasphere</h3>
                <div className="text-xs font-semibold text-blue-600">Unified Business Data Fabric</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Preserves S/4HANA business semantics (hierarchies, currency translations, master attributes) while federating queries to Snowflake, Databricks, and BigQuery without data duplication.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-1 text-[11px] text-slate-600 font-medium">
                <div><strong className="text-blue-900">ETL Overhead:</strong> 0% (Zero-Copy Virtualization)</div>
                <div><strong className="text-blue-900">Data Lineage:</strong> End-to-End Governance</div>
              </div>
            </div>

            {/* Tier 2 */}
            <div className="p-6 rounded-2xl bg-white border border-blue-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-mono font-bold text-blue-700 uppercase">
                  TIER 2 &bull; DECISION INTELLIGENCE
                </span>
                <h3 className="text-lg font-bold text-blue-950">SAP Analytics Cloud</h3>
                <div className="text-xs font-semibold text-blue-600">Simulative xP&A & Executive BI</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct in-memory connection to S/4HANA and Datasphere models. Combines visual dashboards, collaborative financial budgets, and automated machine learning driver discoveries.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-1 text-[11px] text-slate-600 font-medium">
                <div><strong className="text-blue-900">Query Mode:</strong> Real-Time Live SAP Tunnel</div>
                <div><strong className="text-blue-900">Planning Engine:</strong> Collaborative Multi-Entity</div>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="p-6 rounded-2xl bg-white border border-blue-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-mono font-bold text-blue-700 uppercase">
                  TIER 3 &bull; EMBEDDED AI
                </span>
                <h3 className="text-lg font-bold text-blue-950">SAP Business AI</h3>
                <div className="text-xs font-semibold text-blue-600">Context-Aware Operational Copilots</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pre-trained AI models running inside standard ERP transactions. Automates cash matching, extracts data from vendor documents, and optimizes inventory safety stocks.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-1 text-[11px] text-slate-600 font-medium">
                <div><strong className="text-blue-900">Integration:</strong> Embedded in S/4HANA & Fiori</div>
                <div><strong className="text-blue-900">User Experience:</strong> Joule Natural Language</div>
              </div>
            </div>

            {/* Tier 4 */}
            <div className="p-6 rounded-2xl bg-white border border-blue-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-mono font-bold text-blue-700 uppercase">
                  TIER 4 &bull; SOVEREIGN GENAI
                </span>
                <h3 className="text-lg font-bold text-blue-950">Generative AI Hub</h3>
                <div className="text-xs font-semibold text-blue-600">Grounded LLM Security Perimeter</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Orchestrates external LLMs via SAP BTP. Enforces enterprise data anonymization, prevents hallucination via vector RAG, and guarantees zero training on customer data.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-1 text-[11px] text-slate-600 font-medium">
                <div><strong className="text-blue-900">Model Choice:</strong> GPT-4o, Claude 3.5, Mistral</div>
                <div><strong className="text-blue-900">Security:</strong> ISO 27001 & SOC 2 Compliant</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PRODUCTION SERVICES CATALOG (Crisp Blue & White with Imagery)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-blue-50/40 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
              <Boxes className="w-3.5 h-3.5 text-blue-600" />
              <span>PRODUCTION SERVICE CATALOG</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Enterprise Data, Analytics & AI Solution Portfolio
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Curated data fabric, advanced analytics, and artificial intelligence solutions deployed by Knooviq certified enterprise architects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesCatalog.map(srv => (
              <div
                key={srv.id}
                className="rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 w-full relative overflow-hidden">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md border border-blue-200 text-[10px] font-mono text-blue-800 font-bold uppercase">
                      {srv.cleanCoreRating}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="text-[11px] font-mono font-bold uppercase text-blue-600">{srv.category}</span>
                    <h3 className="text-lg font-bold text-slate-900">
                      {srv.title}
                    </h3>
                    <div className="text-xs font-semibold text-blue-700">{srv.tagline}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {srv.description}
                    </p>
                    <div className="pt-2 text-[11px] text-slate-700">
                      <strong className="text-slate-900">Enterprise Use Case:</strong> {srv.useCase}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">{srv.costModel}</span>
                  <button
                    onClick={() => onOpenContact(`Data & AI Advisory: ${srv.title}`)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>Consult Architects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: THE 4 ARCHITECTURAL PILLARS OF DATA & AI GOVERNANCE
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                <FileCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>ENTERPRISE GOVERNANCE PILLARS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                The 4 Architectural Contracts of Unified Data & Contextual AI
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Enterprise AI is only as trustworthy as the data foundation underneath it. Our architecture enforces strict business semantic preservation, zero-copy federation, and sovereign privacy controls.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-md h-60">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                  alt="Enterprise Modern Corporate Data Center"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">PILLAR 1: SEMANTIC CONTEXT</div>
              <h3 className="text-base font-bold text-blue-950">Preserved ERP Semantics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Core Data Services (CDS) views preserve financial ledger hierarchies, dynamic currency conversions, and authorization filters directly into analytical models without manual flattened extraction.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">PILLAR 2: ZERO-COPY FEDERATION</div>
              <h3 className="text-base font-bold text-blue-950">Virtualized Query Execution</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Live federation connects SAP Datasphere directly to Snowflake, Google Cloud BigQuery, and Databricks. Queries push down processing to source data lakes with zero multi-terabyte duplication.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">PILLAR 3: SOVEREIGN AI PRIVACY</div>
              <h3 className="text-base font-bold text-blue-950">Isolated Security Boundary</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Generative AI Hub protects proprietary company data. Customer records and financial transactions sent to LLMs are masked, encrypted, and never used to train public foundational AI models.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">PILLAR 4: CLOSED-LOOP ACTIONS</div>
              <h3 className="text-base font-bold text-blue-950">Actionable Agentic Workflows</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Predictive insights do not stop at dashboards. When anomaly detection flags supply chain delays or payment discrepancies, autonomous AI agents execute ERP resolution workflows in real-time.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: 3 PROVEN ENTERPRISE ARCHITECTURE BLUEPRINTS (With Images)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-blue-50/40 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
              <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
              <span>REFERENCE ARCHITECTURE DESIGNS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Production Data & AI Architecture Blueprint Patterns
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Battle-tested architectural topologies deployed across Fortune 500 enterprises for supply chain visibility, financial steering, and agentic operational workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Blueprint 1 */}
            <div className="rounded-2xl bg-white border border-blue-100 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <div>
                <div className="h-48 w-full relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                    alt="Hybrid Data Fabric Architecture"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-blue-900 text-[10px] font-mono text-white font-bold">
                    PATTERN 01
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900">
                    Zero-Replication Hybrid Data Fabric (Datasphere + Snowflake)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unifies SAP S/4HANA financial ledgers with Snowflake consumer telemetry via Datasphere virtual data federation, enabling real-time margin analysis without nightly ETL jobs.
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-700 pt-2 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Direct bi-directional pushdown execution</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Inherited ERP row-level security tokens</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-4 border-t border-slate-100">
                <span className="text-xs font-mono font-bold text-blue-700">Sub-Second Federated Query Latency</span>
              </div>
            </div>

            {/* Blueprint 2 */}
            <div className="rounded-2xl bg-white border border-blue-100 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <div>
                <div className="h-48 w-full relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                    alt="Unified Extended Planning Architecture"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-blue-900 text-[10px] font-mono text-white font-bold">
                    PATTERN 02
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900">
                    Unified Extended Planning & Analysis (xP&A with S/4HANA + SAC)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Integrates strategic corporate financial targets directly with bottom-up operational supply chain plans, enabling simulative what-if capacity and currency volatility modeling.
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-700 pt-2 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Live write-back to Universal Journal (ACDOCA)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Automated variance narration using Joule</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-4 border-t border-slate-100">
                <span className="text-xs font-mono font-bold text-blue-700">Closed-Loop Corporate Steering</span>
              </div>
            </div>

            {/* Blueprint 3 */}
            <div className="rounded-2xl bg-white border border-blue-100 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <div>
                <div className="h-48 w-full relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
                    alt="Enterprise Grounded RAG Copilot Architecture"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-blue-900 text-[10px] font-mono text-white font-bold">
                    PATTERN 03
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900">
                    Context-Aware Autonomous Multi-Agent ERP Copilot
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Combines SAP HANA Cloud Vector Engine with Generative AI Hub. Embeds enterprise contracts, purchase orders, and technical maintenance manuals for autonomous resolution agents.
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-700 pt-2 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Strict tenant data isolation & anonymization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Zero hallucination via grounded ERP facts</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-4 border-t border-slate-100">
                <span className="text-xs font-mono font-bold text-blue-700">Strict Data Privacy Compliance</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: DATA GOVERNANCE STANDARDS & AUDIT FRAMEWORK
          (Pure Informative Presentation in Blue & White - Not Clickable)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>ENTERPRISE GOVERNANCE AUDIT</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Enterprise Data Governance & AI Readiness Standards
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Modern enterprise analytics and AI initiatives demand disciplined architecture governed by 5 rigorous architectural milestones. Adhering to these standards ensures reliable financial reporting, rapid audit verification, and uncompromised intellectual property protection.
              </p>

              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-md mt-6 h-60">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
                  alt="Enterprise Executive Data Governance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Pure Informative Standards Cards (Blue & White, Non-Clickable) */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-4 shadow-sm">
              <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                <span className="text-xs font-mono font-bold text-blue-900 uppercase">DATA & AI ARCHITECTURAL GATES</span>
                <span className="text-xs font-mono text-blue-700 font-bold bg-white px-2.5 py-1 rounded border border-blue-200">
                  5 Core Standards
                </span>
              </div>

              <div className="space-y-3">

                {/* Gate 1 */}
                <div className="p-4 rounded-xl bg-white border border-blue-200 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-xs font-bold text-blue-950">1. Master Data Golden Record & MDG Consolidation</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-6">
                    Centralized governance establishing verified golden records for business partners, materials, and financial charts of accounts across all subsidiaries.
                  </p>
                </div>

                {/* Gate 2 */}
                <div className="p-4 rounded-xl bg-white border border-blue-200 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-xs font-bold text-blue-950">2. Real-Time Semantic Modeling via Core Data Services (CDS)</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-6">
                    Eliminating legacy custom extraction tables by executing analytical queries directly against standardized, upgrade-safe CDS views in SAP HANA.
                  </p>
                </div>

                {/* Gate 3 */}
                <div className="p-4 rounded-xl bg-white border border-blue-200 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-xs font-bold text-blue-950">3. Zero-Trust Access & Row-Level Authorization Federation</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-6">
                    Datasphere and SAC dashboards dynamically inherit granular S/4HANA authorization objects, ensuring regional sales teams only see their permitted data.
                  </p>
                </div>

                {/* Gate 4 */}
                <div className="p-4 rounded-xl bg-white border border-blue-200 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-xs font-bold text-blue-950">4. Sovereign AI Boundary & Grounded Prompt Verification</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-6">
                    Generative AI queries pass through secure proxy gatekeepers that strip PII, enforce corporate guardrails, and ground answers on verified ERP records.
                  </p>
                </div>

                {/* Gate 5 */}
                <div className="p-4 rounded-xl bg-white border border-blue-200 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-xs font-bold text-blue-950">5. Automated Data Lineage & Regulatory Compliance Tracking</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-6">
                    End-to-end cataloging documenting data transformations from operational ERP document posting through to executive financial disclosure reports.
                  </p>
                </div>

              </div>

              <div className="pt-3 border-t border-blue-200 flex justify-between items-center text-xs text-slate-600">
                <span>Certified Data & AI Practice</span>
                <span className="font-mono font-bold text-blue-700">100% Audit Ready</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: EXECUTIVE PRACTICE ADVISORY CTA (Royal Blue & White)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-blue-950 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900 border border-blue-700 text-xs font-mono font-bold uppercase tracking-wider text-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-300" />
            <span>KNOOVIQ TECHNOLOGY PRACTICE ADVISORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Accelerate Your Enterprise Intelligence with Data, Analytics & AI
          </h2>

          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Eliminate data fragmentation and unlock autonomous business intelligence. Our certified enterprise data architects and AI engineers guide your organization through Datasphere federation, SAC modeling, and secure GenAI orchestration.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact('SAP Data, Analytics & AI Architecture Advisory')}
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition-all flex items-center gap-2 group"
            >
              <span>Schedule Architecture Advisory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/technology/sap-btp"
              className="px-6 py-3.5 rounded-xl bg-white text-blue-950 font-semibold text-sm hover:bg-blue-50 transition-all border border-blue-200"
            >
              Explore SAP BTP Extensibility &rarr;
            </Link>
          </div>

          <div className="pt-8 border-t border-blue-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-300">Zero-Copy Virtualization</div>
              <div className="text-[11px] text-blue-200 mt-0.5">SAP Datasphere Fabric</div>
            </div>
            <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-300">Contextual Copilots</div>
              <div className="text-[11px] text-blue-200 mt-0.5">Embedded SAP Business AI</div>
            </div>
            <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-300">Collaborative xP&A</div>
              <div className="text-[11px] text-blue-200 mt-0.5">SAP Analytics Cloud</div>
            </div>
            <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-300">Enterprise Golden Record</div>
              <div className="text-[11px] text-blue-200 mt-0.5">Master Data Governance</div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          EXPLORE THE 6 SPECIALIZED DATA, ANALYTICS & AI CAPABILITIES
          ========================================================================= */}
      <section className="py-16 bg-slate-50 dark:bg-[#070E1C] border-t border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A3E0]/10 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DATA, ANALYTICS & AI SUITE &bull; GEN AI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Explore Our Six Dedicated AI & Data Practices
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2">
              Specialized technical architectures, compliance perimeters, and business outcomes across the SAP AI portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'SAP Business AI',
                desc: 'Contextual AI embedded in every transactional workflow — Joule copilot, touchless cash matching, and document extraction.',
                path: '/technology/sap-business-ai',
                badge: 'EMBEDDED AI'
              },
              {
                title: 'Generative AI',
                desc: 'Grounded foundation models within sovereign enterprise boundaries — HANA Vector Engine, RAG, and executive narration.',
                path: '/technology/generative-ai',
                badge: 'FOUNDATION'
              },
              {
                title: 'AI Agents',
                desc: 'Autonomous multi-step business task execution — dispute arbitration, container re-routing, and tail-spend sourcing.',
                path: '/technology/ai-agents',
                badge: 'AUTONOMOUS'
              },
              {
                title: 'SAP Analytics Cloud',
                desc: 'Unified business intelligence, collaborative extended planning & analysis (xP&A), and live CDS boardroom cockpits.',
                path: '/technology/sap-analytics-cloud',
                badge: 'DECISION BI'
              },
              {
                title: 'SAP Datasphere',
                desc: 'Unified business data fabric with zero-copy virtualization across S/4HANA, Snowflake, BigQuery, and Databricks.',
                path: '/technology/sap-datasphere',
                badge: 'DATA FABRIC'
              },
              {
                title: 'Intelligent Automation',
                desc: 'Drag-and-drop workflow orchestration and cognitive RPA bots across SAP and multi-system enterprise environments.',
                path: '/technology/intelligent-automation',
                badge: 'BUILD PROCESS'
              }
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B1528] hover:border-[#00A3E0] dark:hover:border-cyan-400 shadow-sm transition-all hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-50 dark:bg-cyan-500/10 text-[#00A3E0] dark:text-cyan-300 border border-sky-200 dark:border-cyan-500/30">
                      {item.badge}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#00A3E0] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#00A3E0] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 text-xs font-bold text-[#00A3E0] flex items-center gap-1">
                  <span>Explore Practice Specification</span>
                  <span>&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
