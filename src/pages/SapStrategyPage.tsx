import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Clock,
  Target,
  Sparkles,
  Layers,
  Cloud,
  Cpu,
  ShieldCheck,
  Award,
  GitBranch,
  BarChart3,
  TrendingUp,
  Sliders,
  ExternalLink,
  Workflow,
  Check
} from 'lucide-react';
import { AdvisoryServiceNav, AdvisorySuiteFooterCrosslinks } from '../components/advisory/AdvisoryServiceNav';

interface SapStrategyPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const SapStrategyPage: React.FC<SapStrategyPageProps> = ({ onOpenContact }) => {
  useEffect(() => {
    document.title = 'SAP Strategy & Enterprise Transformation Advisory | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // CXO Alignment Matrix State
  const [selectedObjective, setSelectedObjective] = useState<number>(0);
  const cxoObjectives = [
    {
      priority: 'EBITDA Expansion & Working Capital Optimization',
      cxo: 'Chief Financial Officer (CFO)',
      sapDriver: 'Universal Journal (ACDOCA) & Advanced Financial Closing',
      targetArch: 'S/4HANA Finance + Automated Accruals Engine on BTP',
      kpi: '22% reduction in Days Sales Outstanding (DSO) & 3-day financial close'
    },
    {
      priority: 'Omnichannel Supply Chain Velocity & Resilience',
      cxo: 'Chief Operating Officer (COO)',
      sapDriver: 'SAP Extended Warehouse Management (EWM) & Integrated Business Planning',
      targetArch: 'Event-driven real-time inventory allocation via SAP Event Mesh',
      kpi: '99.4% on-time, in-full (OTIF) fulfillment rate across distribution facilities'
    },
    {
      priority: 'ESG Compliance & Carbon Footprint Accounting',
      cxo: 'Chief Sustainability Officer (CSO)',
      sapDriver: 'SAP Sustainability Control Tower & Green Ledger',
      targetArch: 'Automated Scope 1, 2, and 3 carbon accounting embedded in transactional ledger',
      kpi: 'Audit-ready carbon reporting with zero manual data collation'
    },
    {
      priority: 'Composable IT Agility & Rapid M&A Onboarding',
      cxo: 'Chief Information Officer (CIO)',
      sapDriver: 'SAP Clean Core Strategy & Decoupled BTP Microservices',
      targetArch: 'Two-tier ERP with standardized public APIs for 30-day entity onboarding',
      kpi: '60% faster subsidiary onboarding with zero regression downtime'
    }
  ];

  // Transformation Roadmap
  const roadmapStages = [
    {
      stage: 'Discovery & Business Case',
      duration: 'Initial Phase',
      deliverables: ['Application Rationalization Audit', 'Total Cost of Ownership (TCO) Model', 'Board Decision Charter'],
      gate: 'Steering Committee Sign-off on Business Case & Budget'
    },
    {
      stage: 'Architecture & Solution Blueprint',
      duration: 'Planning Phase',
      deliverables: ['Target S/4HANA Architecture Design', 'Clean Core Extension Models', 'Data Migration & Business Partner Blueprint'],
      gate: 'Architecture Review Board (ARB) Foundation Validation'
    },
    {
      stage: 'Modernization & Global Cutover',
      duration: 'Execution Phase',
      deliverables: ['Cloud Deployment Program', 'End-to-End Integration Validation', 'Global Production Cutover'],
      gate: 'Formal Cutover Authorization & Hypercare Go-Live'
    },
    {
      stage: 'Continuous Innovation & Evolution',
      duration: 'Continuous Phase',
      deliverables: ['Cloud Release Updates', 'Intelligent Workflow Activation', 'Datasphere Enterprise Virtualization'],
      gate: 'Quarterly Executive Value Realization Review'
    }
  ];

  // Cloud Deployment Models
  const cloudModels = [
    {
      model: 'RISE with SAP (Private Cloud Edition)',
      suitability: 'Complex multinational enterprises requiring dedicated infrastructure, bespoke extensions on BTP, and hyperscaler hosting.',
      licensing: 'Single comprehensive contract covering software licenses, infrastructure, and technical management operations.',
      upgradeVelocity: 'Annual / Bi-Annual Managed Stacks'
    },
    {
      model: 'GROW with SAP (Public Cloud SaaS)',
      suitability: 'Fast-growing mid-market enterprises or standardized subsidiaries adopting 100% standard SaaS operational processes.',
      licensing: 'Pure multitenant SaaS subscription with zero infrastructure management overhead.',
      upgradeVelocity: 'Automatic Continuous Bi-Annual Upgrades'
    },
    {
      model: 'Hybrid Composable Enterprise ERP',
      suitability: 'Enterprises maintaining mission-critical manufacturing plants on-premise alongside cloud central finance and digital channels.',
      licensing: 'Federated licensing model orchestrating cloud core with distributed edge processing nodes.',
      upgradeVelocity: 'Decoupled Independent Upgrade Cadences'
    }
  ];

  // Enterprise Architecture Layers
  const architectureLayers = [
    { name: 'Experience & Digital Channels Layer', spec: 'SAP Fiori workspaces, B2B portals, executive dashboards, and mobile field touchpoints.' },
    { name: 'Decoupled Business Services Layer', spec: 'Standard cloud microservices, business process extensions, and enterprise intelligence.' },
    { name: 'Clean Core ERP Engine Layer', spec: 'Standard SAP S/4HANA core business processes with zero core modification.' },
    { name: 'Enterprise Data Fabric Layer', spec: 'SAP Datasphere unified data layer, cross-cloud virtualization, and analytical reporting.' },
    { name: 'Multi-Cloud Infrastructure Layer', spec: 'Hyperscaler dedicated cloud environments (AWS, Azure, GCP) with enterprise high-availability.' }
  ];

  // Clean Core Extensibility Framework
  const cleanCoreTiers = [
    { tier: 'Core Standard Foundation', rule: 'Standard business processes and certified best practices across core enterprise functions.' },
    { tier: 'In-App Extensibility', rule: 'Key-user screen personalization, tailored business logic, and standard user extensions.' },
    { tier: 'Side-by-Side Cloud Innovation', rule: 'Differentiating business applications built on cloud platforms communicating via standard APIs.' },
    { tier: 'Event-Driven Architecture', rule: 'Decoupled event publication and subscription framework for enterprise connectivity.' }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-500 selection:text-white">

      {/* =========================================================================
          SECTION 1: HERO — SAP STRATEGY (FULL-BLEED WIDESCREEN HERO)
          ========================================================================= */}
      <section className="relative w-full min-h-[600px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 overflow-hidden bg-slate-950 text-white">

        {/* Full-Bleed Background Visual */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/strategy/sap-strategy-hero.jpg"
            alt="Knooviq Executive SAP Strategy Advisory Boardroom"
            className="w-full h-full object-cover object-right lg:object-[82%_center] brightness-105 contrast-105 saturate-[1.05]"
          />
          {/* Dedicated text-readability scrim on left; 100% bright & clear on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 via-50% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-slate-400 font-medium">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li><Link to="/advisory-managed-services" className="hover:text-blue-400 transition-colors">Advisory &amp; Managed Services</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-blue-400 font-semibold" aria-current="page">SAP Strategy</li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
              <Compass className="w-3.5 h-3.5 text-blue-400" />
              <span>EXECUTIVE ADVISORY &bull; SAP STRATEGY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              SAP <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Strategy
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-slate-200 leading-snug">
              Shape a Smarter SAP Journey With a Clear Strategic Direction
            </p>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Help organizations align business priorities, SAP investments, enterprise architecture and transformation objectives through a clear, actionable, board-ready strategic roadmap.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => onOpenContact && onOpenContact('SAP Strategy Advisory')}
                className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Engage Strategy Advisors</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#alignment-matrix"
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-base transition-all flex items-center gap-2 shadow-sm backdrop-blur-sm"
              >
                <span>Explore Strategy Pillars</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Sticky Service Navigation */}
      <AdvisoryServiceNav currentServiceId="sap-strategy" />

      {/* =========================================================================
          SECTION 1: BUSINESS & SAP ALIGNMENT
          ========================================================================= */}
      <section id="alignment-matrix" className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Strategic Business Alignment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Aligning Corporate Business Goals With Technology Investments
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              SAP strategy connects business objectives, operational priorities, and technology investments. Every SAP initiative must deliver clear business value, improve operational efficiency, and drive strategic differentiation.
            </p>
          </div>

          {/* IMAGE 2: Business & SAP Alignment Strategy Visual */}
          <div className="mb-12 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white">
            <img
              src="/images/strategy/sap-business-align.jpg"
              alt="Enterprise Executive Strategy Diagram: Aligning Strategy to Value"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* CXO Strategic Priorities Switcher Ribbon */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-1 font-bold">
                Select Stakeholder Alignment:
              </span>
              {cxoObjectives.map((obj, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedObjective(idx)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer ${selectedObjective === idx
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                      : 'bg-white border-slate-200 hover:border-blue-400 text-slate-700 shadow-xs'
                    }`}
                >
                  <div className={`text-xs font-mono font-bold mb-1 ${selectedObjective === idx ? 'text-white/80' : 'text-blue-600'}`}>
                    {obj.cxo}
                  </div>
                  <div className="text-sm font-bold leading-snug">{obj.priority}</div>
                </button>
              ))}
            </div>

            {/* Active Objective Detail Card */}
            <div className="lg:col-span-7 p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                  STRATEGIC ENABLER MATRIX
                </span>
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Value Mapped
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 block mb-1">Executive Sponsor:</span>
                <h3 className="text-xl font-bold text-slate-900">
                  {cxoObjectives[selectedObjective].cxo}
                </h3>
              </div>

              <div className="space-y-3 font-sans">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[11px] font-mono text-slate-500 block uppercase font-bold">SAP Strategic Driver:</span>
                  <span className="text-sm font-semibold text-slate-900">{cxoObjectives[selectedObjective].sapDriver}</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[11px] font-mono text-slate-500 block uppercase font-bold">Target Architecture:</span>
                  <span className="text-sm font-semibold text-blue-600">{cxoObjectives[selectedObjective].targetArch}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Measurable Business Outcome:</span>
                <span className="font-bold text-slate-900">{cxoObjectives[selectedObjective].kpi}</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CURRENT SAP LANDSCAPE DIRECTION
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Current Landscape Baseline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Understanding Your Existing SAP Environment Before Setting Future Direction
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Before defining where to go, organizations must establish a baseline of their current SAP landscape. We analyze system architecture, release levels, customizations, data structures, and operational dependencies to chart the most effective forward direction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Monolithic Legacy State */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-mono text-rose-700 font-bold uppercase">EXISTING ENVIRONMENT &bull; LEGACY ERP</span>
                <span className="text-xs font-mono text-slate-500">High Complexity</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Monolithic &amp; Heavily Modified Environment
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">&times;</span>
                  <span>Extensive customizations that impede regular upgrades and innovation adoption</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">&times;</span>
                  <span>Point-to-point custom interfaces creating brittle, hard-to-maintain integration networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">&times;</span>
                  <span>Fragmented master data across multiple disparate systems and legacy instances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">&times;</span>
                  <span>High infrastructure maintenance costs and looming mainstream maintenance deadlines</span>
                </li>
              </ul>
            </div>

            {/* Target Clean Core State */}
            <div className="p-7 rounded-3xl bg-blue-50/70 border-2 border-blue-500 space-y-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-blue-200">
                <span className="text-xs font-mono text-blue-700 font-bold uppercase">FUTURE DIRECTION &bull; CLEAN CORE S/4HANA</span>
                <span className="text-xs font-mono text-emerald-700 font-bold">Standard Cloud Agility</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Modular, Standardized &amp; Continuously Modernized
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-700 font-sans">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Standard ERP business core with extensions built cleanly on SAP BTP</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Event-driven integration mesh utilizing published, certified public APIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Harmonized business semantics powered by SAP Datasphere single source of truth</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Predictable total cost of ownership with automated bi-annual cloud innovation upgrades</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SAP TRANSFORMATION ROADMAP
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Transformation Roadmap &amp; Tollgates
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Defining Transformation Phases, Priorities &amp; Milestones
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              A structured roadmap defines the journey from your current environment to your future target state. We establish clear phases, priorities, resource allocation, and governance tollgates to de-risk execution.
            </p>
          </div>

          {/* IMAGE 3: Strategic Transformation Roadmap Diagram */}
          <div className="mb-12 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white">
            <img
              src="/images/strategy/sap-roadmap.jpg"
              alt="Strategic Enterprise SAP Transformation Roadmap"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {roadmapStages.map((st, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between space-y-4 shadow-sm hover:border-blue-400 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-blue-600">{st.stage}</span>
                    <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {st.duration}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-3">
                    {st.stage}
                  </h3>
                  <div className="space-y-1.5 text-xs text-slate-600">
                    <span className="text-slate-400 font-mono text-[10px] block uppercase font-bold">Key Deliverables:</span>
                    {st.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                  <span className="text-slate-400 block mb-0.5 uppercase font-bold">Tollgate Gate:</span>
                  <span className="text-emerald-700 font-bold">{st.gate}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CLOUD & ERP STRATEGY
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Cloud &amp; ERP Modernization
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              SAP Cloud Adoption, ERP Modernization &amp; Hybrid Environments
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Choosing the right deployment model is fundamental. We formulate tailored cloud adoption strategies comparing RISE with SAP Private Cloud, GROW with SAP Public Cloud, and hybrid composable architectures.
            </p>
          </div>

          {/* IMAGE 4: Hybrid Cloud Strategy for Enterprise SAP ERP */}
          <div className="mb-12 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white">
            <img
              src="/images/strategy/sap-cloud-erp.jpg"
              alt="Hybrid Cloud Strategy for Enterprise SAP ERP: RISE with SAP and Cloud SaaS Integration"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cloudModels.map((cm, idx) => (
              <div key={idx} className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 block mb-1">Deployment Model</span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{cm.model}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans mb-4">{cm.suitability}</p>
                </div>
                <div className="pt-3 border-t border-slate-200 space-y-2 text-xs font-mono">
                  <div>
                    <span className="text-slate-400 block font-bold">Licensing Model:</span>
                    <span className="text-slate-700">{cm.licensing}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-bold">Upgrade Cadence:</span>
                    <span className="text-emerald-700 font-bold">{cm.upgradeVelocity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: ENTERPRISE ARCHITECTURE DIRECTION
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Enterprise Architecture Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Target-State Applications, Data, Integration &amp; Technology Alignment
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Enterprise architecture defines how applications, data models, integration fabrics, and cloud platforms interact cohesively to support evolving business models.
            </p>
          </div>

          <div className="space-y-3">
            {architectureLayers.map((lay, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                    <Layers className="w-4 h-4" />
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{lay.name}</h3>
                </div>
                <span className="text-xs font-sans text-slate-600 md:w-1/2">{lay.spec}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CLEAN CORE & INNOVATION STRATEGY
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Clean Core &amp; Innovation Strategy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Simplification, Standardization, Extensibility &amp; Innovation Readiness
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              A Clean Core strategy decouples core ERP operations from customized business logic, enabling zero-downtime upgrades, cloud agility, and seamless integration with emerging AI capabilities.
            </p>
          </div>

          {/* IMAGE 5: Enterprise Clean Core Architecture Diagram */}
          <div className="mb-12 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white">
            <img
              src="/images/strategy/sap-clean-core.jpg"
              alt="Enterprise Clean Core Architecture for SAP S/4HANA"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cleanCoreTiers.map((c, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
                <span className="text-xs font-mono font-bold text-blue-600 block">{c.tier}</span>
                <h3 className="text-base font-bold text-slate-900">{c.tier}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">{c.rule}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: STRATEGY GOVERNANCE & EXECUTION
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Strategy Governance &amp; Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Governance, KPIs, Investment Priorities &amp; Stakeholder Alignment
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Effective governance ensures that strategy remains actionable and aligned with changing enterprise priorities. We establish decision frameworks, value realization KPIs, and structured review cadences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Executive Steering Committee', cadence: 'Monthly Cadence', role: 'Board-level oversight, capital allocation sign-offs, and critical strategic risk resolutions.' },
              { title: 'Architecture Review Board (ARB)', cadence: 'Bi-Weekly Cadence', role: 'Enforces Clean Core standards, validates API interfaces, and ensures standard process adoption.' },
              { title: 'Value Realization PMO', cadence: 'Continuous Telemetry', role: 'Tracks working capital improvements, system adoption velocity, and TCO optimization metrics.' }
            ].map((gov, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                <span className="text-xs font-mono font-bold text-blue-600">{gov.cadence}</span>
                <h3 className="text-base font-bold text-slate-900">{gov.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">{gov.role}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Crosslink Suite Navigation */}
      <AdvisorySuiteFooterCrosslinks activeServiceId="sap-strategy" />

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-200 text-center text-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block">
            STRATEGIC CLARITY &bull; BOARDROOM ALIGNMENT &bull; CLEAN CORE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Define Your Organization's SAP Strategy
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-sans">
            Engage with senior SAP Enterprise Architects to formulate a pragmatic, boardroom-ready strategy and multi-year transformation roadmap.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenContact && onOpenContact('SAP Strategy Advisory')}
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/25 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Strategic Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/services/sap-assessment"
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-base transition-all shadow-sm"
            >
              Explore SAP Landscape Assessment
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SapStrategyPage;
