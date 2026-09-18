import React, { useState } from 'react';
import {
  Award,
  Cpu,
  Globe,
  Zap,
  ShieldCheck,
  Workflow,
  CheckCircle2,
  TrendingUp,
  Layers,
  Database,
  Search,
  Sparkles,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Building2,
  Clock,
  Settings,
  PhoneCall,
  FileText,
  Target,
  BarChart3,
  Network,
  Bot,
  Sliders,
  Compass,
  Boxes,
  Lock,
  RefreshCw,
  Users2
} from 'lucide-react';

interface DigitalTransformationViewProps {
  onOpenContact: (subject: string) => void;
}

export const DigitalTransformationView: React.FC<DigitalTransformationViewProps> = ({ onOpenContact }) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeMaturityStage, setActiveMaturityStage] = useState<number>(2); // Default to Stage 3 (index 2: Connected & Intelligent)
  const [activeLayer, setActiveLayer] = useState<number>(1); // Default to Layer 2 (AI & Cognitive Agent Layer)

  // 4 Strategic Maturity Stages
  const maturityStages = [
    {
      stage: 'Stage 01',
      title: 'Siloed & Legacy',
      badge: 'Traditional ERP & ECC 6.0',
      tagline: 'Fragmented departmental applications, heavy on-premise customizations, and manual batch reconciliations.',
      characteristics: [
        'Isolated transactional silos with manual Excel handoffs',
        'Custom ABAP modifications restricting version upgrades',
        'Batch reporting with 24–48 hour insight latency',
        'Paper-intensive vendor and customer touchpoints'
      ],
      recommendedAction: 'Clean Core Readiness Assessment & Signavio Process Mining',
      expectedRoi: 'Foundation for 35–45% operational TCO reduction',
      accent: 'border-slate-300 dark:border-white/20 text-slate-700 dark:text-slate-300'
    },
    {
      stage: 'Stage 02',
      title: 'Standardized & Cloud-Ready',
      badge: 'Modernized Digital Core',
      tagline: 'Standardized business processes adopting SAP Best Practices and decoupled core architectures.',
      characteristics: [
        'Fit-to-Standard workflows across Finance & Supply Chain',
        'Extensibility shifted to SAP BTP via side-by-side microservices',
        'Automated multi-tenant cloud release updates',
        'Centralized master data governance (SAP MDG)'
      ],
      recommendedAction: 'Event Mesh Activation & B2B Partner Portal Rollout',
      expectedRoi: '30% faster sprint delivery & zero upgrade downtime',
      accent: 'border-sky-400 bg-sky-500/5 text-sky-600 dark:text-sky-400'
    },
    {
      stage: 'Stage 03',
      title: 'Connected & Intelligent',
      badge: 'Current Target State',
      tagline: 'Real-time event integration, edge partner portals, and embedded AI copilots assisting daily operations.',
      characteristics: [
        'Contextual SAP Joule agents assisting standard transactions',
        'Real-time B2B portals for Vendors, Customers & Dealers',
        'Automated 3-way invoice matching & OCR document extraction',
        'Live operational dashboards in SAP Analytics Cloud'
      ],
      recommendedAction: 'Autonomous Agent Orchestration & Process Intelligence Scaling',
      expectedRoi: '50% reduction in manual effort & 3.5x faster cycle turnaround',
      accent: 'border-[#00A3E0] bg-[#00A3E0]/10 text-[#00A3E0]'
    },
    {
      stage: 'Stage 04',
      title: 'Autonomous & Predictive',
      badge: 'Enterprise AI Leader',
      tagline: 'Self-healing supply chains, autonomous financial closures, and closed-loop process intelligence.',
      characteristics: [
        'Multi-agent cognitive orchestration across core and edge',
        'Predictive demand sensing with automated inventory balancing',
        'Autonomous financial accruals and continuous reconciliation',
        'Self-optimizing workflows driven by Signavio AI diagnostics'
      ],
      recommendedAction: 'Continuous Innovation Labs & Predictive Ecosystem Expansion',
      expectedRoi: '70%+ touchless operational rate & continuous market leadership',
      accent: 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
    }
  ];

  // 5-Layer Digital Transformation Blueprint Stack
  const architectureLayers = [
    {
      layer: 'Layer 01',
      name: 'Intelligent Experience & Edge Portals',
      focus: 'Frictionless engagement across all enterprise touchpoints',
      icon: <Globe className="w-5 h-5 text-sky-400" />,
      components: [
        { name: 'B2B Vendor Collaboration Portal', detail: 'Real-time PO acknowledgments, advance shipping notices, and digital e-invoicing.' },
        { name: 'Dealer Management System (DMS)', detail: 'Live inventory visibility, instant credit limit checks, and automated order booking.' },
        { name: 'Omnichannel Customer Commerce', detail: 'Personalized product catalog, self-service quotes, and direct payment gateways.' },
        { name: 'Mobile Field Service & Plant Maintenance', detail: 'Offline-first tablet app for technician dispatch, IoT alerts, and work-order signoff.' }
      ]
    },
    {
      layer: 'Layer 02',
      name: 'Autonomous AI & Cognitive Agent Layer',
      focus: 'Context-aware intelligence embedded in every transaction',
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
      components: [
        { name: 'SAP Joule Copilot Integration', detail: 'Natural language business assistant across Finance, HR, and Supply Chain.' },
        { name: 'Autonomous Accounts Payable Agents', detail: 'Cognitive document parsing, PO line-item matching, and fraud telemetry.' },
        { name: 'Predictive Demand & S&OP Agents', detail: 'Continuous forecasting taking into account historical trendlines and supplier lead times.' },
        { name: 'Intelligent Exception Handler', detail: 'Automated notification and remediation for supply disruptions and invoice variances.' }
      ]
    },
    {
      layer: 'Layer 03',
      name: 'SAP BTP Integration & Extension Fabric',
      focus: 'Decoupled innovation mesh keeping the core pristine',
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      components: [
        { name: 'SAP Integration Suite', detail: 'Enterprise-grade pre-built connectors for third-party CRMs, banks, and tax portals.' },
        { name: 'SAP Event Mesh', detail: 'Asynchronous event-driven publish/subscribe messaging ensuring microservice scalability.' },
        { name: 'SAP Build (Low-Code/No-Code)', detail: 'Rapid visual workflow automation and business application creation for line-of-business teams.' },
        { name: 'API Management & Developer Portal', detail: 'Secure, metered API exposure for ecosystem partners, suppliers, and external logistics.' }
      ]
    },
    {
      layer: 'Layer 04',
      name: 'Clean Core Digital ERP Foundation',
      focus: 'Rock-solid transaction engine built for continuous agility',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      components: [
        { name: 'SAP S/4HANA Cloud (Public & Private)', detail: 'In-memory unified ledger uniting universal journal, real-time inventory, and asset accounting.' },
        { name: 'Zero-Core-Modification Standard', detail: 'Enforced clean core principles enabling automated bi-annual release updates without disruption.' },
        { name: 'Fit-to-Standard Best Practices', detail: 'Pre-configured industry workflows reducing custom code baggage by over 80%.' },
        { name: 'Statutory Localization & Compliance', detail: 'Built-in real-time e-Invoicing, GST filing, TDS, and cross-border customs regulations.' }
      ]
    },
    {
      layer: 'Layer 05',
      name: 'Enterprise Data Lakehouse & Decision Intelligence',
      focus: 'Federated single source of truth for predictive governance',
      icon: <Database className="w-5 h-5 text-amber-400" />,
      components: [
        { name: 'SAP Datasphere & Semantic Data Mesh', detail: 'Harmonized data architecture combining SAP transactional structures with external cloud lakes.' },
        { name: 'SAP Analytics Cloud (SAC)', detail: 'Executive control towers, scenario planning simulations, and board-ready financial cockpits.' },
        { name: 'SAP Signavio Process Intelligence', detail: 'Automated process mining identifying operational bottlenecks, rework loops, and friction.' },
        { name: 'Real-Time Operational Telemetry', detail: 'Sub-second event monitoring across logistics transit, shop-floor OEE, and cash burn rates.' }
      ]
    }
  ];

  return (
    <div className="space-y-20">

      {/* =========================================================================
          1. THE ENTERPRISE ADVANTAGE (4 Strategic Pillars of Digital Transformation)
          ========================================================================= */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <span className="h-0.5 w-6 bg-amber-400 rounded-full" />
            <span className="h-0.5 w-3 bg-[#00A3E0] rounded-full" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#00A3E0] bg-[#00A3E0]/10 border border-[#00A3E0]/20 mb-2">
                <Award className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>ENTERPRISE DIGITAL ADVISORY & ARCHITECTURE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                The Enterprise Advantage: Agility, AI & Clean Architecture
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Bridging legacy constraints with cloud-native acceleration — empowering modern enterprises to out-innovate, automate, and scale.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-5">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-[#0A1931] dark:text-white mb-2">
              Autonomous AI Agents
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Embedding SAP Joule and Knooviq cognitive agents into day-to-day operations to automate 3-way matching, demand sensing, and exception handling.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-500/10 text-[#00A3E0] flex items-center justify-center mb-5">
              <Network className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-[#0A1931] dark:text-white mb-2">
              Connected Edge Portals
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Decoupled, modern B2B vendor portals, dealer distribution hubs, and customer commerce experiences integrated natively via SAP BTP Event Mesh.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-500 flex items-center justify-center mb-5">
              <Sliders className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-[#0A1931] dark:text-white mb-2">
              Process Mining & Signavio
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Automated operational diagnostics pinpointing bottlenecks, cycle time variations, and compliance anomalies across P2P and O2C value streams.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-[#0A1931] dark:text-white mb-2">
              Clean Core BTP Fabric
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Zero core code modifications. Every custom business logic and extension thrives independently on SAP BTP, guaranteeing frictionless continuous upgrades.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. THE SIGNATURE SAVIC SPLIT: "WHAT WE DELIVER" vs "KEY OUTCOMES"
          ========================================================================= */}
      <section className="space-y-8">
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <span className="h-0.5 w-6 bg-amber-400 rounded-full" />
            <span className="h-0.5 w-3 bg-[#00A3E0] rounded-full" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-2">
                <Workflow className="w-3.5 h-3.5 text-sky-500" />
                <span>DIGITAL CAPABILITY ARCHITECTURE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                What We Deliver vs. Key Business Outcomes
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              From enterprise roadmapping and SAP BTP engineering to autonomous AI agents — aligning technology investments with verifiable business ROI.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: What We Deliver */}
          <div className="bg-white dark:bg-[#0B1528] rounded-3xl border border-slate-200/80 dark:border-white/10 p-8 sm:p-10 shadow-sm flex flex-col">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#00A3E0]/10 text-[#00A3E0] border border-[#00A3E0]/20">
                  DIGITAL CAPABILITY PORTFOLIO
                </span>
                <Workflow className="w-5 h-5 text-[#00A3E0]" />
              </div>

              <h3 className="text-2xl font-black text-[#0A1931] dark:text-white mb-2">
                What We Deliver
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                End-to-end digital engineering and consulting capabilities powering the intelligent, agile enterprise:
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Enterprise Digital Strategy & Roadmapping', desc: 'Holistic business architecture blueprints aligning executive goals with phased high-value cloud deliverables.' },
                  { title: 'SAP BTP Cloud Integration & Microservices', desc: 'Connecting SAP with Salesforce, Shopify, banks, customs, and legacy stacks via SAP Integration Suite.' },
                  { title: 'Autonomous Multi-Agent AI Workflows', desc: 'Deploying SAP Joule agents and custom cognitive bots to handle repetitive invoice, HR, and supply chain decisions.' },
                  { title: 'Modern B2B Vendor & Dealer Portals', desc: 'Secure, role-based self-service web & mobile portals that give partners instant transparency without ERP access.' },
                  { title: 'Omnichannel Customer Experience (SAP CX)', desc: 'Unified customer records, configure-price-quote (CPQ) accelerators, and intelligent commerce fulfillment.' },
                  { title: 'Process Mining & Signavio Intelligence', desc: 'Continuous automated process discovery, bottleneck diagnostics, and operational optimization.' },
                  { title: 'Data Lakehouse & Predictive Cockpits', desc: 'Harmonized data strategy using SAP Datasphere and SAP Analytics Cloud for predictive board-level insights.' }
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

          {/* Right Column: Key Business Outcomes */}
          <div className="bg-white dark:bg-[#0B1528] rounded-3xl border border-slate-200/80 dark:border-white/10 p-8 sm:p-10 shadow-sm flex flex-col">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  MEASURABLE ENTERPRISE ROI
                </span>
                <TrendingUp className="w-5 h-5 text-emerald-500" />
              </div>

              <h3 className="text-2xl font-black text-[#0A1931] dark:text-white mb-2">
                Key Business Outcomes
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Direct operational, financial, and strategic impacts delivered across enterprise digital engagements:
              </p>

              <div className="space-y-4">
                {[
                  { metric: '50% Faster Decisions', title: 'Real-Time Operational Cockpits', desc: 'Executive leadership gains live visibility across revenue, inventory turns, and supply bottlenecks instead of waiting for month-end reports.' },
                  { metric: '75% Less Manual Effort', title: 'Document & Invoice AI Automation', desc: 'Touchless extraction, auto-coding, and 3-way reconciliation of vendor invoices and transport receipts with zero human keystrokes.' },
                  { metric: '3.5x Faster Innovation', title: 'Rapid Extension on SAP BTP', desc: 'New business portals, customer applications, and API integrations deployed in weeks rather than months using Clean Core microservices.' },
                  { metric: '100% Clean Core Upgrades', title: 'Zero Core Code Disruption', desc: 'Automated semi-annual SAP cloud updates execute effortlessly without regression bugs or expensive legacy code re-testing.' },
                  { metric: '60% Order Turnaround Gain', title: 'Connected Dealer & B2B Portals', desc: 'Real-time dealer self-service ordering, credit validation, and automated dispatch notices compress order-to-delivery cycles.' },
                  { metric: '30% Inventory Optimization', title: 'Predictive Demand Sensing', desc: 'Dynamic safety stock calibration, multi-echelon stock balancing, and stock-out prevention using machine learning signals.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/50 dark:border-white/5">
                    <div className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-black text-xs shrink-0 whitespace-nowrap">
                      {item.metric}
                    </div>
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
          3. NEW & INNOVATIVE: 5-LAYER DIGITAL TRANSFORMATION BLUEPRINT (Interactive Stack)
          ========================================================================= */}
      <section className="bg-gradient-to-br from-[#061224] via-[#091D3A] to-[#040D1A] rounded-3xl border border-cyan-500/20 p-8 sm:p-12 lg:p-14 shadow-2xl text-white space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-2">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>ENTERPRISE ARCHITECTURE BLUEPRINT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            5-Layer Digital Transformation Blueprint
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
            An end-to-end architectural stack orchestrating experience, cognitive agents, integration fabric, clean core, and unified data.
          </p>
        </div>

        {/* Interactive Layer Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {architectureLayers.map((layer, idx) => {
            const isActive = activeLayer === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveLayer(idx)}
                className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/10'
                    : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06]'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  {layer.icon}
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                    {layer.layer}
                  </span>
                </div>
                <h4 className="text-xs font-bold leading-tight line-clamp-1">{layer.name}</h4>
              </button>
            );
          })}
        </div>

        {/* Active Layer Details View */}
        <div className="p-7 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/15 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                {architectureLayers[activeLayer].layer} FOCUS
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                {architectureLayers[activeLayer].name}
              </h3>
            </div>
            <span className="text-xs text-slate-300 max-w-sm sm:text-right">
              {architectureLayers[activeLayer].focus}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {architectureLayers[activeLayer].components.map((comp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <h5 className="text-xs font-bold text-white leading-snug">{comp.name}</h5>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {comp.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex justify-center">
          <button
            onClick={() => onOpenContact('Digital Transformation - Architecture Blueprint')}
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#040D1A] font-extrabold px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
          >
            <span>Request Custom Architecture Blueprint</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* =========================================================================
          4. FOUR SPECIALIZED DIGITAL ACCELERATION STREAMS
          ========================================================================= */}
      <section className="space-y-8">
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <span className="h-0.5 w-6 bg-amber-400 rounded-full" />
            <span className="h-0.5 w-3 bg-[#00A3E0] rounded-full" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-2">
                <Boxes className="w-3.5 h-3.5 text-purple-500" />
                <span>DOMAIN-SPECIFIC VALUE STREAMS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                Specialized Digital Acceleration Streams
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Targeted digital solutions addressing critical business challenges across your front, middle, and back office.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Stream 1: Customer Experience (CX) */}
          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-500/10 text-[#00A3E0] flex items-center justify-center mb-5">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-sky-50 dark:bg-sky-500/10 text-[#00A3E0]">
                FRONT OFFICE COMMERCE & CX
              </span>
              <h3 className="text-xl font-black text-[#0A1931] dark:text-white mt-3 mb-2">
                Customer Experience & Omnichannel Commerce
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Unifying digital commerce, dealer self-service ordering, CPQ (Configure, Price, Quote), and real-time inventory allocation. Eliminating order entry errors and accelerating revenue cycles.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/5">
                {['Omnichannel B2B/B2C Web Portals', 'Automated Credit Approval Workflows', 'Dynamic Price & Rebate Engine'].map((point, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stream 2: Autonomous Supply Chain */}
          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-5">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                LOGISTICS & SHOP FLOOR
              </span>
              <h3 className="text-xl font-black text-[#0A1931] dark:text-white mt-3 mb-2">
                Connected Supply Chain & Smart Manufacturing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Integrating IoT telemetry, warehouse barcode automations, predictive maintenance, and supplier collaboration to transform supply chains from reactive buffers to proactive value engines.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/5">
                {['Live GPS & Cold-Chain Telemetry', 'Automated ASN & Barcode GRN Posting', 'Predictive OEE & Maintenance Signals'].map((point, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stream 3: Autonomous Finance & Compliance */}
          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-500 flex items-center justify-center mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400">
                FINANCIAL CLOSE & REGULATORY
              </span>
              <h3 className="text-xl font-black text-[#0A1931] dark:text-white mt-3 mb-2">
                Next-Gen Financial Intelligence & Touchless AP
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Automating accounts payable with AI document parsing, instant statutory e-invoicing/GST generation, continuous intercompany reconciliations, and predictive cash flow forecasting.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/5">
                {['Sub-Minute Automated Bank Matching', 'Instant Statutory E-Way Bill & E-Invoice', 'Predictive Daily Liquidity Projections'].map((point, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stream 4: Digital Workforce & HR */}
          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-500 flex items-center justify-center mb-5">
                <Users2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400">
                HUMAN EXPERIENCE MANAGEMENT
              </span>
              <h3 className="text-xl font-black text-[#0A1931] dark:text-white mt-3 mb-2">
                Empowered Workforce & Digital HR
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Integrating SAP SuccessFactors with mobile self-service, automated attendance geofencing, expense intelligence, and AI-driven internal talent marketplaces.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/5">
                {['Mobile Employee & Manager Self-Service', 'Instant Receipt OCR Expense Approvals', 'AI-Driven Skill & Learning Roadmaps'].map((point, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-500" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. NEW & INTERACTIVE: 4-STAGE DIGITAL MATURITY SPECTRUM
          ========================================================================= */}
      <section className="bg-white dark:bg-[#0B1528] rounded-3xl border border-slate-200/80 dark:border-white/10 p-8 sm:p-12 shadow-sm space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#00A3E0] bg-[#00A3E0]/10 border border-[#00A3E0]/20 mb-2">
            <Compass className="w-3.5 h-3.5 text-[#00A3E0]" />
            <span>INTERACTIVE MATURITY BENCHMARK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
            Digital Transformation Maturity Spectrum
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-1">
            Where does your organization stand today? Click across the maturity stages to explore capabilities, gap analysis, and tailored ROI roadmaps.
          </p>
        </div>

        {/* Stage Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {maturityStages.map((stage, idx) => {
            const isActive = activeMaturityStage === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveMaturityStage(idx)}
                className={`p-4 rounded-2xl text-left transition-all border cursor-pointer ${
                  isActive
                    ? 'border-[#00A3E0] bg-[#00A3E0]/10 shadow-md ring-2 ring-[#00A3E0]/30'
                    : 'border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400">
                    {stage.stage}
                  </span>
                  {isActive && <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />}
                </div>
                <h4 className="text-sm font-extrabold text-[#0A1931] dark:text-white leading-tight">
                  {stage.title}
                </h4>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
                  {stage.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div className="p-7 sm:p-9 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-white/10">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0]">
                CURRENT SELECTION • {maturityStages[activeMaturityStage].stage}
              </span>
              <h3 className="text-2xl font-black text-[#0A1931] dark:text-white mt-1">
                {maturityStages[activeMaturityStage].title} ({maturityStages[activeMaturityStage].badge})
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {maturityStages[activeMaturityStage].tagline}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-[#070E1C] border border-slate-200 dark:border-white/10 shrink-0">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">EXPECTED BUSINESS ROI</span>
              <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">
                {maturityStages[activeMaturityStage].expectedRoi}
              </span>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              KEY STAGE CHARACTERISTICS
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {maturityStages[activeMaturityStage].characteristics.map((char, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-[#070E1C] border border-slate-200/60 dark:border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 dark:text-slate-200">{char}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-slate-500 dark:text-slate-400">Recommended Next Step:</span>
              <span className="font-bold text-[#00A3E0]">{maturityStages[activeMaturityStage].recommendedAction}</span>
            </div>
            <button
              onClick={() => onOpenContact(`Digital Maturity Assessment - ${maturityStages[activeMaturityStage].title}`)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#00A3E0] hover:bg-[#008bc2] text-white font-bold px-6 py-2.5 text-xs transition-all shadow-md shadow-[#00A3E0]/20 cursor-pointer"
            >
              <span>Get Detailed Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. SAVIC ONE PIECE FLOW FRAMEWORK FOR DIGITAL TRANSFORMATION (5-Phase Delivery)
          ========================================================================= */}
      <section className="bg-white dark:bg-[#0B1528] rounded-3xl border border-slate-200/80 dark:border-white/10 p-8 sm:p-12 shadow-sm space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-2">
            <Workflow className="w-3.5 h-3.5" />
            <span>SAVIC PROPRIETARY DELIVERY METHODOLOGY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
            SAVIC One Piece Flow for Digital Transformation
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-1">
            An agile, iterative delivery framework engineered to compress deployment timelines, de-risk cloud architecture, and realize measurable ROI rapidly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { step: '01', title: 'Digital Diagnostic', desc: 'Process mining via SAP Signavio, high-ROI use case mapping, and clean core architectural evaluation.' },
            { step: '02', title: 'Experience Blueprint', desc: 'User journey mapping, UI/UX rapid prototyping, API contracts, and SAP BTP event mesh design.' },
            { step: '03', title: 'Agile Sprints & AI', desc: 'Iterative microservices rollout, Joule agent prompt tuning, OCR pipeline testing, and ERP connector build.' },
            { step: '04', title: 'Dual-Run Cutover', desc: 'End-to-end integration rehearsal, automated data migration verification, and near-zero downtime deployment.' },
            { step: '05', title: 'MAXCare Innovation', desc: '24/7 SLA-driven hypercare, monthly AI model continuous tuning, and ongoing digital capability expansion.' }
          ].map((phase, idx) => (
            <div key={idx} className="relative p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-2xl font-black text-[#00A3E0]/40 dark:text-cyan-400/30 block mb-2 font-mono">
                  {phase.step}
                </span>
                <h3 className="text-sm font-extrabold text-[#0A1931] dark:text-white mb-1.5 leading-snug">
                  {phase.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {phase.desc}
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-200/50 dark:border-white/5 flex items-center justify-between text-[10px] font-mono font-semibold text-slate-400">
                <span>PHASE {phase.step}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          7. GLOBAL DELIVERY MODEL & 24/7 MAXCARE MANAGED SERVICES
          ========================================================================= */}
      <section className="space-y-8">
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <span className="h-0.5 w-6 bg-amber-400 rounded-full" />
            <span className="h-0.5 w-3 bg-[#00A3E0] rounded-full" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-2">
                <Globe className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>GLOBAL DELIVERY & SUPPORT INFRASTRUCTURE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                Global Delivery Model & 24/7 MAXCare
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              A hybrid execution model combining executive onsite architects with high-velocity offshore innovation centers and continuous AMS.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-500/10 text-[#00A3E0] flex items-center justify-center mb-5">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                CLIENT-FACING LEADERSHIP
              </span>
              <h3 className="text-xl font-black text-[#0A1931] dark:text-white mt-3 mb-2">
                Onsite Digital Architects
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Strategic advisors and principal enterprise architects co-located with your leadership teams to facilitate workshops, drive change governance, and ensure business alignment.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-2">
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-sky-50 dark:bg-sky-500/10 text-[#00A3E0]">Business Advisory</span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-sky-50 dark:bg-sky-500/10 text-[#00A3E0]">Executive Alignment</span>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-5">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                HIGH-VELOCITY COES
              </span>
              <h3 className="text-xl font-black text-[#0A1931] dark:text-white mt-3 mb-2">
                Offshore Innovation Labs
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Dedicated development centers in India executing rapid SAP BTP integration, custom portal development, AI model fine-tuning, automated testing, and continuous deployment.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-2">
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">BTP Microservices</span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">AI Innovation Labs</span>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-500 flex items-center justify-center mb-5">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                CONTINUOUS EVOLUTION
              </span>
              <h3 className="text-xl font-black text-[#0A1931] dark:text-white mt-3 mb-2">
                24/7 MAXCare Managed Services
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Follow-the-sun application management, proactive cloud infrastructure monitoring, monthly feature activation, and binding enterprise SLAs ensuring zero downtime.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-2">
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300">SLA-Driven AMS</span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300">Continuous AI Tuning</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. REAL ENTERPRISE DIGITAL CASE STUDIES (Savic Benchmark)
          ========================================================================= */}
      <section className="space-y-8">
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <span className="h-0.5 w-6 bg-amber-400 rounded-full" />
            <span className="h-0.5 w-3 bg-[#00A3E0] rounded-full" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>PROVEN DIGITAL VALUE DELIVERY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
                Real Digital Results from Leading Enterprises
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Verifiable business transformation outcomes achieved through clean-core architectures and intelligent automation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-sky-50 dark:bg-sky-500/10 text-[#00A3E0]">
                RETAIL & APPAREL CONGLOMERATE
              </span>
              <h3 className="text-xl font-black text-[#0A1931] dark:text-white mt-3 mb-1">
                Fashion Forward Brands
              </h3>
              <p className="text-xs font-semibold text-[#00A3E0] mb-3">
                B2B Dealer Portal & BTP Integration
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Deployed a custom dealer management portal on SAP BTP connected to S/4HANA, enabling 1,200+ franchise stores to view live inventory, place bulk indent orders, and access automated credit scoring.
              </p>
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/60 dark:border-emerald-500/20 mb-4">
                <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 block">KEY MILESTONE</span>
                <span className="text-base font-black text-emerald-700 dark:text-emerald-300">68% Faster Order Turnaround</span>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-white/10">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Zero core ERP modifications</span>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400">
                DISCRETE INDUSTRIAL MANUFACTURING
              </span>
              <h3 className="text-xl font-black text-[#0A1931] dark:text-white mt-3 mb-1">
                Apex Engineering Systems
              </h3>
              <p className="text-xs font-semibold text-purple-500 mb-3">
                Shop-Floor IoT & AI Maintenance
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Connected 80+ CNC lines to SAP Digital Manufacturing Cloud via edge IoT gateways, integrating real-time telemetry into maintenance work orders and automated spare-parts requisitioning.
              </p>
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/60 dark:border-emerald-500/20 mb-4">
                <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 block">KEY MILESTONE</span>
                <span className="text-base font-black text-emerald-700 dark:text-emerald-300">42% Downtime Reduction</span>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-white/10">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Sub-second sensor alert dispatch</span>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200/80 dark:border-white/10 p-7 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400">
                LIFE SCIENCES & PHARMACEUTICALS
              </span>
              <h3 className="text-xl font-black text-[#0A1931] dark:text-white mt-3 mb-1">
                Biocare Lifesciences
              </h3>
              <p className="text-xs font-semibold text-amber-500 mb-3">
                Touchless AP & Statutory e-Invoicing
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Implemented cognitive OCR invoice parsing and automated 3-way reconciliation alongside instant GST and e-way bill generation, eliminating compliance penalties and manual audit friction.
              </p>
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/60 dark:border-emerald-500/20 mb-4">
                <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 block">KEY MILESTONE</span>
                <span className="text-base font-black text-emerald-700 dark:text-emerald-300">82% Touchless AP Processing</span>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-white/10">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">100% Statutory Compliance</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. START YOUR DIGITAL TRANSFORMATION TODAY (Savic's 4 Action Boxes + Centered Button)
          ========================================================================= */}
      <section className="bg-gradient-to-br from-[#061224] via-[#091D3A] to-[#040D1A] rounded-3xl border border-cyan-500/20 p-8 sm:p-12 lg:p-14 shadow-2xl text-white space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-2">
            <Target className="w-3.5 h-3.5 text-cyan-400" />
            <span>START YOUR DIGITAL JOURNEY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Start Your Digital Transformation Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
            Choose the right entry point for your enterprise modernization journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
              <PhoneCall className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Talk to a Digital Expert</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Engage with an enterprise digital architect to assess your systems and align on high-impact cloud priorities.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Maturity Diagnostic</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Evaluate your process friction, interface bottlenecks, and readiness for SAP BTP and autonomous AI.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Co-Innovation Workshop</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              1-day executive working session to map user journeys, design integration flows, and formulate your business case.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Blueprint Portfolio</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Download our comprehensive Digital Transformation architecture blueprints, portal specifications, and case files.
            </p>
          </div>
        </div>

        <div className="pt-2 flex justify-center">
          <button
            onClick={() => onOpenContact('Digital Transformation - Start Journey')}
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#040D1A] font-extrabold px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
          >
            <span>Start Your Transformation Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* =========================================================================
          10. FREQUENTLY ASKED QUESTIONS (Savic FAQ Accordion)
          ========================================================================= */}
      <section className="bg-white dark:bg-[#0B1528] rounded-3xl border border-slate-200/80 dark:border-white/10 p-8 sm:p-12 shadow-sm space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#00A3E0] bg-[#00A3E0]/10 border border-[#00A3E0]/20 mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>DIGITAL TRANSFORMATION FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-1">
            Answers to key strategic and technical questions regarding enterprise digital transformation, AI adoption, and BTP integrations.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'How does Digital Transformation differ from an ERP implementation?',
              a: 'An ERP implementation focuses on standardizing core transactions (general ledger, inventory posting, procurement). Digital Transformation expands beyond the core — introducing autonomous AI agents, real-time B2B portals for vendors and dealers, IoT factory connections, and SAP BTP event streaming to orchestrate agile workflows across every customer and supplier touchpoint.'
            },
            {
              q: 'How does SAP Business Technology Platform (BTP) prevent breaking future ERP upgrades?',
              a: 'Under Clean Core principles, no custom code is placed directly inside the SAP S/4HANA core. Instead, bespoke logic, third-party API integrations, and specialized user interfaces are built on SAP BTP using standard REST/OData APIs and Event Mesh. When SAP issues bi-annual release updates, your digital core updates seamlessly without breaking external customizations.'
            },
            {
              q: 'Can we implement digital portals and AI agents while still running legacy SAP ECC?',
              a: 'Yes. Our hybrid architecture connects modern B2B portals and AI automation pipelines to existing SAP ECC 6.0 environments via secure SAP BTP Cloud Connectors. This allows organizations to modernize front-office and vendor experiences immediately while building a future-proof bridge toward full S/4HANA migration.'
            },
            {
              q: 'What role does SAP Signavio play in digital transformation projects?',
              a: 'SAP Signavio performs continuous process mining by analyzing your actual transactional logs. It reveals real-world operational bottlenecks, non-standard deviations, rework loops, and manual handoffs across Order-to-Cash and Procure-to-Pay. This enables us to target digital automation precisely where it delivers the highest financial ROI.'
            },
            {
              q: 'How does Knooviq ensure data security and compliance with external portals and AI?',
              a: 'All digital touchpoints employ zero-trust enterprise security: OAuth 2.0 / SAML single sign-on, end-to-end TLS 1.3 encryption, role-based row-level data segregation, and dedicated DMZ reverse-proxy architectures. Sensitive financial and master data never leaves your enterprise perimeter without cryptographic validation.'
            }
          ].map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/70 dark:border-white/10 overflow-hidden transition-all bg-slate-50/50 dark:bg-white/[0.02]"
              >
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 transition-colors hover:bg-slate-100/50 dark:hover:bg-white/[0.04] cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0A1931] dark:text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#00A3E0]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/40 dark:border-white/5">
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
export default DigitalTransformationView;
