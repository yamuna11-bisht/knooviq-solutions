import React, { useState } from 'react';
import {
  Award,
  Building2,
  Globe,
  Zap,
  ShieldCheck,
  Layers,
  Workflow,
  CheckCircle2,
  Target,
  Cloud,
  Server,
  Sparkles,
  Database,
  BarChart3,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Clock,
  Settings,
  RefreshCw,
  Cpu,
  Search,
  TrendingUp,
  Lightbulb
} from 'lucide-react';

interface SapS4HanaViewProps {
  onOpenContact: (subject?: string) => void;
}

export const SapS4HanaView: React.FC<SapS4HanaViewProps> = ({ onOpenContact }) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeCapabilityTab, setActiveCapabilityTab] = useState<number>(0);

  // 4 Core Capability Pillars of SAP S/4HANA
  const capabilityTabs = [
    {
      id: 'finance',
      badge: 'FINANCIAL EXCELLENCE',
      title: 'Universal Journal & Central Finance',
      subtitle: 'Unify General Ledger, Controlling, Profitability, and Asset Accounting into a single in-memory truth ledger.',
      icon: <Database className="w-5 h-5 text-[#00A3E0]" />,
      highlights: [
        'Single line-item table (ACDOCA) eliminating time-consuming multi-ledger reconciliation runs',
        'Continuous touchless closing with real-time automated accruals and intercompany eliminations',
        'Central Finance (cFin) non-disruptive replication from multi-vendor legacy ERP landscapes',
        'Instant multi-GAAP statutory, tax, and environmental carbon ledger reporting capabilities'
      ]
    },
    {
      id: 'supply-chain',
      badge: 'DIGITAL SUPPLY CHAIN',
      title: 'Integrated Supply Chain & Logistics',
      subtitle: 'Synchronize end-to-end operations from demand sensing to automated warehouse sortation.',
      icon: <Cpu className="w-5 h-5 text-sky-400" />,
      highlights: [
        'Live Available-to-Promise (aATP) with real-time inventory validation across global networks',
        'Embedded Extended Warehouse Management (EWM) with robotic sortation and automated wave picking',
        'Integrated Transportation Management (TM) providing dynamic route optimization and live freight tracking',
        'Integrated Business Planning (IBP) powered by algorithmic demand forecasting and scenario simulations'
      ]
    },
    {
      id: 'clean-core',
      badge: 'CLEAN CORE ARCHITECTURE',
      title: 'BTP Side-by-Side Extensibility',
      subtitle: 'Preserve an untouched digital core while rapidly delivering bespoke extensions on SAP BTP.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      highlights: [
        'Strict decoupling of custom ABAP logic into cloud-native microservices on SAP BTP',
        'Event-driven asynchronous messaging via SAP Event Mesh preventing point-to-point interface fragility',
        'Zero-modification core architecture ensuring seamless, automated bi-annual SAP release upgrades',
        'Standardized public RESTful APIs and pre-built integration flows across enterprise IT ecosystems'
      ]
    },
    {
      id: 'ai-analytics',
      badge: 'COGNITIVE ENTERPRISE',
      title: 'Embedded AI & In-Memory Analytics',
      subtitle: 'Empower business leaders and knowledge workers with sub-second insights and generative copilots.',
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      highlights: [
        'Contextual SAP Joule copilot assisting natural-language inquiries across procurement, finance, and sales',
        'Sub-second transactional queries directly on live operational data with zero batch ETL pipeline latency',
        'Automated accounts payable parsing with AI line-item extraction and multi-way matching telemetry',
        'Predictive cash flow horizon forecasting and automated customer credit risk anomaly detection'
      ]
    }
  ];

  // 3 Strategic Migration Pathways
  const migrationPathways = [
    {
      id: 'greenfield',
      name: 'Greenfield Implementation',
      tag: 'CLEAN SLATE REDESIGN',
      summary: 'Complete re-imagination of business processes using standard pre-configured SAP Best Practices, establishing an upgrade-safe digital core with zero inherited technical debt.',
      bestFor: 'Enterprises seeking to eliminate decades of custom code sprawl and standardize global business processes.',
      deliverables: [
        'Fit-to-Standard Process Workshops',
        'Clean Core BTP Extension Blueprint',
        'Automated Master Data Cleansing & Staging',
        'Accelerated Role-Based Enablement'
      ],
      icon: <Sparkles className="w-5 h-5 text-sky-400" />
    },
    {
      id: 'brownfield',
      name: 'Brownfield System Conversion',
      tag: 'CONTINUITY & SPEED',
      summary: 'Direct in-place conversion of your existing SAP ECC 6.0 environment into modern SAP S/4HANA, retaining historical transaction ledgers and proven business configurations.',
      bestFor: 'Enterprises prioritizing minimal disruption, rapid technical cutover, and protection of proven historical customizations.',
      deliverables: [
        'Automated Custom Code Remediation',
        'Database Conversion to SAP HANA In-Memory',
        'Near-Zero Downtime Dual-Run Cutover',
        'Modern Fiori User Experience Activation'
      ],
      icon: <Server className="w-5 h-5 text-cyan-400" />
    },
    {
      id: 'selective',
      name: 'Selective Data Transition',
      tag: 'HYBRID PRECISION',
      summary: 'A precision transition methodology that migrates only active company codes, harmonizes disparate charts of accounts, and carves out obsolete historical records.',
      bestFor: 'Multi-entity conglomerates undergoing mergers, acquisitions, corporate carve-outs, or multi-phase regional deployments.',
      deliverables: [
        'Selective Entity Carve-Out Modeling',
        'Chart of Accounts Harmonization',
        'Phased Multi-Country Staging',
        'Cross-System Reconciliation Telemetry'
      ],
      icon: <Workflow className="w-5 h-5 text-indigo-400" />
    }
  ];

  // S/4HANA FAQ Data
  const faqs = [
    {
      q: 'What is the primary architectural difference between SAP ECC and SAP S/4HANA?',
      a: 'SAP ECC relies on classical relational databases with extensive aggregate and index tables, resulting in batch reporting latency and separate ledgers for FI and CO. SAP S/4HANA runs exclusively on the columnar in-memory SAP HANA database and consolidates all financial and management accounting transactions into a single Universal Journal table (ACDOCA). This provides sub-second real-time reporting, touchless closing, and a modern role-based SAP Fiori user experience.'
    },
    {
      q: 'How does Knooviq guarantee near-zero downtime during an S/4HANA cutover?',
      a: 'Through our downtime-optimized SUM DMO conversion techniques and high-fidelity rehearsal cycles, we execute production database transitions over standard weekend cutover windows (< 12 hours). Selective data transition and parallel-run synchronization ensure that critical production lines, logistics fulfillment, and customer-facing operations remain fully protected with zero transactional data loss.'
    },
    {
      q: 'What does Clean Core mean and why is it essential for S/4HANA?',
      a: 'Clean Core is an architectural discipline that mandates keeping the central ERP kernel completely unmodified and aligned with standard SAP Best Practices. All custom business logic, bespoke workflows, and partner integrations are decoupled onto the SAP Business Technology Platform (BTP) using public APIs and event meshes. This eliminates future technical debt and enables automated bi-annual SAP cloud release upgrades without custom code regression.'
    },
    {
      q: 'How does Knooviq determine whether Greenfield, Brownfield, or Selective Data Transition is optimal?',
      a: 'We conduct a structured Clean Core Readiness Audit using automated code diagnostic tools, landscape scanners, and process mining. If your ECC instance has accumulated unsustainable ABAP technical debt and broken chart of accounts, Greenfield provides the cleanest outcome. If your operational logic is mature and continuous audit history is mandatory, Brownfield or Selective Data Transition preserves your investment with minimal disruption.'
    },
    {
      q: 'Can third-party systems like Salesforce, Workday, and banking gateways integrate seamlessly with S/4HANA?',
      a: 'Yes. Utilizing SAP BTP Integration Suite and pre-built standard enterprise connectors, we establish bi-directional, event-driven integrations with non-SAP enterprise software, banking networks (SWIFT ISO 20022), statutory tax portals (GST, Peppol, e-Invoicing), and supply chain trading partner networks with guaranteed delivery and end-to-end encryption.'
    }
  ];

  return (
    <div className="space-y-20">

      {/* =========================================================================
          1. THE ENTERPRISE ADVANTAGE (4 Pillars)
          ========================================================================= */}
      <section className="space-y-6">
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#00A3E0] bg-[#00A3E0]/10 border border-[#00A3E0]/20 mb-2">
                <Award className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>SAP S/4HANA Enterprise Architecture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                The S/4HANA Enterprise Advantage: Speed, Intelligence & Clean Core
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Transforming fragmented legacy workloads into an agile, in-memory digital core with automated intelligence and continuous clean-core upgradability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-500/10 text-[#00A3E0] flex items-center justify-center mb-5">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-[#0A1931] dark:text-white mb-2">
              In-Memory HANA Performance
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Columnar in-memory processing eliminating batch processing bottlenecks and providing live transactional telemetry across global operations.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-[#0A1931] dark:text-white mb-2">
              Clean Core Architecture
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Zero-modification core standards decoupling customizations onto SAP BTP via public APIs, making future upgrades completely seamless.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-500 flex items-center justify-center mb-5">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-[#0A1931] dark:text-white mb-2">
              Embedded Business AI & Joule
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Conversational generative AI copilots and machine learning models embedded directly within daily financial and supply chain transactions.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-500 flex items-center justify-center mb-5">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-[#0A1931] dark:text-white mb-2">
              One Piece Flow Delivery
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Pre-built industry templates and modular sprint execution compressing migration timelines by up to 40% with near-zero cutover downtime.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. THE SIGNATURE SAVIC SPLIT: "WHAT WE DELIVER" vs "KEY OUTCOMES"
          ========================================================================= */}
      <section className="space-y-8">
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-2">
                <Layers className="w-3.5 h-3.5 text-sky-500" />
                <span>CORE SERVICE ARCHITECTURE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                What We Deliver vs. Key Business Outcomes
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              From initial landscape discovery and clean-core decoupling to continuous post-go-live value optimization.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: What We Deliver */}
          <div className="bg-white dark:bg-[#0B1528] rounded-3xl border border-slate-200/80 dark:border-white/10 p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#00A3E0]/10 text-[#00A3E0] border border-[#00A3E0]/20">
                  CAPABILITY PORTFOLIO
                </span>
                <Workflow className="w-5 h-5 text-[#00A3E0]" />
              </div>

              <h3 className="text-2xl font-black text-[#0A1931] dark:text-white mb-2">
                What We Deliver
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Complete lifecycle capabilities covering every technical, functional, and governance phase of your S/4HANA journey:
              </p>

              <div className="space-y-4">
                {[
                  { title: 'End-to-End S/4HANA Migration & Implementation', desc: 'Expert execution across Greenfield, Brownfield SUM DMO, and Selective Data Transition pathways.' },
                  { title: 'Clean Core Blueprinting & BTP Decoupling', desc: 'Isolating custom business logic onto SAP Business Technology Platform with cloud-native REST APIs.' },
                  { title: 'Universal Journal (ACDOCA) & Central Finance', desc: 'Harmonizing GL, controlling, fixed assets, and intercompany ledgers into a single in-memory truth table.' },
                  { title: 'Real-Time Digital Supply Chain Execution', desc: 'Full integration of SAP IBP demand sensing, advanced warehouse robotics (EWM), and transport optimization.' },
                  { title: 'Automated Master Data Governance & Migration', desc: 'High-fidelity automated data cleansing, validation rules, and near-zero downtime cutover dry runs.' },
                  { title: 'Modern SAP Fiori User Experience Rollout', desc: 'Role-based intuitive web and mobile workflows boosting user productivity and reducing training overhead.' },
                  { title: 'Statutory Localization & Tax Compliance', desc: 'Turnkey integration with national tax engines, GSTN, electronic invoicing (IRN/QR), and e-way bill portals.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/50 dark:border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Outcomes */}
          <div className="bg-white dark:bg-[#0B1528] rounded-3xl border border-slate-200/80 dark:border-white/10 p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  MEASURABLE IMPACT
                </span>
                <Target className="w-5 h-5 text-emerald-500" />
              </div>

              <h3 className="text-2xl font-black text-[#0A1931] dark:text-white mb-2">
                Key Business Outcomes
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Measurable operational gains, capital efficiency, and sustainable architectural advantages:
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Sub-Second Live Analytical Queries', desc: 'Instant visibility across corporate margins, live inventory, and balance sheets without overnight batch delays.' },
                  { title: 'Up to 40% Lower Operational TCO', desc: 'Streamlined cloud infrastructure and simplified data models eliminating redundant hardware and maintenance.' },
                  { title: '50% Faster Month-End Financial Closing', desc: 'Continuous touchless accounting, automated reconciliations, and instant multi-GAAP consolidated reporting.' },
                  { title: '100% Clean Core Upgrade Agility', desc: 'Zero kernel modifications, allowing organizations to adopt bi-annual SAP cloud updates without regression risk.' },
                  { title: 'Near-Zero Operational Cutover Downtime', desc: 'Proven dry-run cutover frameworks protecting mission-critical manufacturing plants and distribution centers.' },
                  { title: 'Proactive Predictive Demand Sensing', desc: 'Synchronized inventory balancing across multi-echelon networks reducing working capital inventory buffers.' },
                  { title: 'Full Regulatory & Statutory Audit Readiness', desc: 'Automated segregation of duties, immutable electronic audit logs, and frictionless global tax clearing.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/50 dark:border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. S/4HANA FUNCTIONAL ARCHITECTURE ENABLERS (Interactive Tabs)
          ========================================================================= */}
      <section className="bg-gradient-to-br from-[#061224] via-[#091D3A] to-[#040D1A] rounded-3xl border border-cyan-500/20 p-8 sm:p-12 shadow-2xl text-white space-y-8">
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-2">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>FUNCTIONAL ARCHITECTURE ENABLERS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Core S/4HANA Enterprise Modules & Capabilities
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              Explore how modernized functional modules interact dynamically on the unified in-memory SAP HANA core.
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 border-b border-white/10" role="tablist">
          {capabilityTabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveCapabilityTab(idx)}
              role="tab"
              aria-selected={activeCapabilityTab === idx}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                activeCapabilityTab === idx
                  ? 'bg-[#00A3E0] text-white shadow-md shadow-[#00A3E0]/25'
                  : 'bg-white/[0.04] text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {tab.icon}
              <span>{tab.badge}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="space-y-6 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                {capabilityTabs[activeCapabilityTab].badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {capabilityTabs[activeCapabilityTab].title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md sm:text-right">
              {capabilityTabs[activeCapabilityTab].subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilityTabs[activeCapabilityTab].highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-200 leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. STRATEGIC MIGRATION PATHWAYS (Greenfield, Brownfield, Selective)
          ========================================================================= */}
      <section className="space-y-8">
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-2">
                <Workflow className="w-3.5 h-3.5 text-emerald-500" />
                <span>MIGRATION PATHWAYS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                Strategic SAP S/4HANA Migration Pathways
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Tailoring your transition between complete clean-slate innovation, legacy investment protection, or selective entity carve-outs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {migrationPathways.map((pathway, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                    {pathway.tag}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-center justify-center">
                    {pathway.icon}
                  </div>
                </div>

                <h3 className="text-lg font-black text-[#0A1931] dark:text-white mb-2 leading-snug">
                  {pathway.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {pathway.summary}
                </p>

                <div className="p-3.5 rounded-xl bg-sky-50/70 dark:bg-sky-500/5 border border-sky-200/60 dark:border-sky-500/10 mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 block mb-1">
                    Ideal Fitment:
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {pathway.bestFor}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2.5">
                  Key Deliverables
                </span>
                <div className="space-y-2">
                  {pathway.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] shrink-0" />
                      <span className="truncate font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          5. SAVIC ONE PIECE FLOW METHODOLOGY (5-Phase Delivery Framework)
          ========================================================================= */}
      <section className="bg-white dark:bg-[#0B1528] rounded-3xl border border-slate-200/80 dark:border-white/10 p-8 sm:p-12 shadow-sm space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#00A3E0] bg-[#00A3E0]/10 border border-[#00A3E0]/20 mb-2">
            <Workflow className="w-3.5 h-3.5 text-[#00A3E0]" />
            <span>SAVIC PROPRIETARY DELIVERY METHODOLOGY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
            SAVIC One Piece Flow for S/4HANA Transformation
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-1">
            A phase-gated execution model ensuring predictable timelines, zero scope creep, and seamless cutover continuity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            {
              phase: 'Phase 01',
              title: 'Discover & Ambition',
              tagline: 'Readiness & TCO Modeling',
              bullets: ['SAP Readiness Check scan', 'Custom code volume audit', '5-Year cloud TCO roadmap', 'Process Mining initial baseline'],
              accent: 'border-slate-300 dark:border-white/20'
            },
            {
              phase: 'Phase 02',
              title: 'Prepare & Blueprint',
              tagline: 'Clean Core Architecture',
              bullets: ['Fit-to-Standard scoping', 'Clean Core BTP decoupling plan', 'Data extraction & cleansing rules', 'Target system sizing on cloud'],
              accent: 'border-sky-400'
            },
            {
              phase: 'Phase 03',
              title: 'Explore & Realize',
              tagline: 'Agile Configuration Sprints',
              bullets: ['Standard Best Practice activation', 'BTP microservices development', 'Integration Suite connectors', 'End-to-end integration testing'],
              accent: 'border-[#00A3E0]'
            },
            {
              phase: 'Phase 04',
              title: 'Cutover & Verification',
              tagline: 'High-Fidelity Rehearsals',
              bullets: ['Multi-wave cutover dry runs', 'Financial parallel-run ledgers', 'Near-zero downtime cutover', 'Executive sign-off gate'],
              accent: 'border-emerald-500'
            },
            {
              phase: 'Phase 05',
              title: 'Deploy & Continuous Value',
              tagline: 'Hypercare & Innovation',
              bullets: ['24/7 dedicated hypercare SLA', 'MAXCare Managed Services handover', 'Process velocity monitoring', 'Bi-annual cloud release roadmap'],
              accent: 'border-purple-500'
            }
          ].map((step, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border-t-4 ${step.accent} border-x border-b border-slate-200/60 dark:border-white/5 space-y-3 flex flex-col justify-between`}
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  {step.phase}
                </span>
                <h3 className="text-sm font-extrabold text-[#0A1931] dark:text-white leading-snug">
                  {step.title}
                </h3>
                <span className="text-[11px] font-semibold text-[#00A3E0] block mt-0.5">
                  {step.tagline}
                </span>
                <ul className="space-y-1.5 pt-3">
                  {step.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-[#00A3E0] shrink-0 mt-1.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          6. MEASURABLE ENTERPRISE OUTCOMES (4 Metric Cards)
          ========================================================================= */}
      <section className="space-y-6">
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-2">
                <BarChart3 className="w-3.5 h-3.5 text-emerald-500" />
                <span>ENTERPRISE VALUE COMMITMENTS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                Measurable Enterprise Transformation Value
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Concrete performance metrics and service commitments backed by rigorous delivery SLAs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-3xl sm:text-4xl font-black text-[#00A3E0] tracking-tight block mb-2">
                &lt; 1 sec
              </span>
              <h3 className="text-base font-extrabold text-[#0A1931] dark:text-white mb-1.5">
                Live In-Memory Analytics
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Sub-second operational query responses directly from live transactional tables without batch ETL pipelines.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-3xl sm:text-4xl font-black text-emerald-500 tracking-tight block mb-2">
                40%
              </span>
              <h3 className="text-base font-extrabold text-[#0A1931] dark:text-white mb-1.5">
                Faster Go-Live Delivery
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Deployment timelines accelerated by pre-built industry accelerators and One Piece Flow sprint methodology.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-3xl sm:text-4xl font-black text-amber-500 tracking-tight block mb-2">
                100%
              </span>
              <h3 className="text-base font-extrabold text-[#0A1931] dark:text-white mb-1.5">
                Clean Core Compliance
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Decoupled extensions on SAP BTP ensuring zero custom code baggage and seamless future release upgrades.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-3xl sm:text-4xl font-black text-purple-500 tracking-tight block mb-2">
                99.9%
              </span>
              <h3 className="text-base font-extrabold text-[#0A1931] dark:text-white mb-1.5">
                Enterprise Uptime SLA
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Hyperscaler cloud infrastructure with automated disaster recovery, multi-region replication, and sub-15 minute RPO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. REAL-WORLD CUSTOMER SUCCESS CASE STUDIES (3 Cards)
          ========================================================================= */}
      <section className="space-y-6">
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-2">
                <Award className="w-3.5 h-3.5 text-sky-500" />
                <span>CUSTOMER TRANSFORMATION STORIES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                Enterprise S/4HANA Success Studies
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Demonstrated outcomes delivered across complex multi-country enterprise manufacturing and retail operations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00A3E0] block">
                PRECISION INDUSTRIAL MANUFACTURING
              </span>
              <h3 className="text-lg font-black text-[#0A1931] dark:text-white">
                Multi-Country ECC Brownfield Conversion
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Migrated 14 legal entities across Europe and Asia with 18 years of historical custom code. Executed in-place SUM DMO conversion with an 8-hour weekend cutover window.
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-white/5 space-y-1 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>42% Infrastructure TCO Reduction</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Zero Production Line Interruption</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-500 block">
                CONSUMER GOODS & RETAIL CONGLOMERATE
              </span>
              <h3 className="text-lg font-black text-[#0A1931] dark:text-white">
                Greenfield Clean Core Implementation
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Replaced legacy fragmented AS/400 and custom ERPs with a single S/4HANA Cloud instance connecting 180+ distribution centers with live aATP and automated replenishment.
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-white/5 space-y-1 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>5-Day Faster Month-End Close</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>35% Working Capital Optimization</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-500 block">
                LIFE SCIENCES & PHARMACEUTICALS
              </span>
              <h3 className="text-lg font-black text-[#0A1931] dark:text-white">
                Selective Data Transition & Compliance
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Carved out regulated pharmaceutical business units into a validated S/4HANA instance adhering to GAMP 5, electronic batch records, and automated FDA 21 CFR Part 11 audit trails.
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-white/5 space-y-1 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% Regulatory Audit Clean Sheet</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Sub-Second Batch Genealogy Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. FREQUENTLY ASKED QUESTIONS (Savic FAQ Accordion)
          ========================================================================= */}
      <section className="bg-white dark:bg-[#0B1528] rounded-3xl border border-slate-200/80 dark:border-white/10 p-8 sm:p-12 shadow-sm space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#00A3E0] bg-[#00A3E0]/10 border border-[#00A3E0]/20 mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>S/4HANA TRANSFORMATION FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-1">
            Authoritative technical and strategic guidance regarding SAP S/4HANA migrations, Clean Core, and cloud delivery models.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/70 dark:border-white/10 overflow-hidden transition-all bg-slate-50/50 dark:bg-white/[0.02]"
              >
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/50 dark:hover:bg-white/[0.04] transition-colors rounded-2xl"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0A1931] dark:text-white">
                    {faq.q}
                  </span>
                  <span className="p-1 rounded-lg bg-slate-200/60 dark:bg-white/10 text-slate-700 dark:text-slate-300 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div id={`faq-answer-${idx}`} className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/50 dark:border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
