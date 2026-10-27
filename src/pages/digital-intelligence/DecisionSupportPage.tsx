import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BrainCircuit,
  Sparkles,
  Sliders,
  Cpu,
  Server,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  ChevronRight,
  Workflow,
  Receipt,
  Boxes,
  Briefcase,
  Building2,
  Zap,
  GitBranch,
  CheckSquare,
  Maximize2,
  X
} from 'lucide-react';

interface DecisionSupportPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const DecisionSupportPage: React.FC<DecisionSupportPageProps> = ({
  onOpenContact
}) => {
  // Lightbox modal state for hero visual
  const [isHeroModalOpen, setIsHeroModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsHeroModalOpen(false);
    };
    if (isHeroModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isHeroModalOpen]);

  // State for Architecture Comparison Tabs
  const [activeTab, setActiveTab] = useState<'comparison' | 'architecture'>('comparison');

  // State for Executive FAQs Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Core Enterprise Decision Domains
  const decisionDomains = [
    {
      title: 'Working Capital & Treasury Allocation',
      category: 'Corporate Finance',
      icon: Receipt,
      desc: 'Guides dynamic supplier discount capture, cash pooling transfers, and currency hedging allocations based on interest rate volatility and cash flow horizons.',
      erp: 'SAP S/4HANA Finance'
    },
    {
      title: 'Multi-Echelon Inventory Placement',
      category: 'Supply Chain Operations',
      icon: Boxes,
      desc: 'Evaluates lead-time volatility and regional demand variance to prescribe optimal stock buffers across central distribution centers and regional hubs.',
      erp: 'SAP Integrated Business Planning'
    },
    {
      title: 'Dynamic Contract & Price Optimization',
      category: 'Commercial Strategy',
      icon: Briefcase,
      desc: 'Simulates customer elasticity, competitor price shifts, and raw material index adjustments to recommend customized margin-preserving contract terms.',
      erp: 'SAP S/4HANA Sales & Distribution'
    },
    {
      title: 'Manufacturing Capacity Scheduling',
      category: 'Plant Operations',
      icon: Cpu,
      desc: 'Balances changeover downtime, energy tariffs, maintenance windows, and customer order priorities to determine optimal factory production schedules.',
      erp: 'SAP Digital Supply Chain'
    },
    {
      title: 'Workforce Capacity & Talent Deployment',
      category: 'Human Capital',
      icon: Building2,
      desc: 'Models skill attrition, project ramp-ups, and contractor cost curves to guide strategic hiring schedules, cross-training paths, and team assignments.',
      erp: 'SAP SuccessFactors'
    },
    {
      title: 'Supplier Risk & Sourcing Allocation',
      category: 'Strategic Procurement',
      icon: Workflow,
      desc: 'Synthesizes geopolitical risk indicators, financial stability scores, and past delivery performance to guide multi-sourcing allocation strategies.',
      erp: 'SAP Ariba & Sourcing'
    }
  ];

  // Core Transformation Pillars
  const transformationPillars = [
    {
      icon: BrainCircuit,
      title: 'Prescriptive Action Guidance',
      desc: 'Recommends optimal operational decisions across pricing, inventory buffers, and capital allocations by balancing competing business objectives simultaneously.'
    },
    {
      icon: Sliders,
      title: 'Counterfactual Scenario Simulation',
      desc: 'Evaluates hypothetical market shocks, material cost surges, and supplier disruptions without affecting production environments, projecting risk exposure across operations.'
    },
    {
      icon: ShieldCheck,
      title: 'Explainable Decision Lineage',
      desc: 'Deconstructs algorithmic recommendations into transparent causal factors, enabling executive boards and audit committees to trace the underlying rationale of every recommendation.'
    },
    {
      icon: Server,
      title: 'Clean-Core Policy Synchronization',
      desc: 'Translates endorsed executive decisions into operational parameters, replenishment thresholds, and credit limits directly within SAP S/4HANA via clean-core interfaces.'
    }
  ];

  // Simple Workflow Lifecycle
  const workflowSteps = [
    {
      step: 'SYNTHESIZE',
      title: 'Multidimensional Context Ingestion',
      desc: 'Continuously harmonizes transactional ERP state, market signals, capacity constraints, and historical performance into unified causal knowledge graphs.',
      icon: Zap
    },
    {
      step: 'OPTIMIZE',
      title: 'Prescriptive Modeling & Simulation',
      desc: 'High-performance optimization engines evaluate competing trade-off curves, stress-testing decision alternatives under varying macroeconomic conditions.',
      icon: GitBranch
    },
    {
      step: 'ACTUATE',
      title: 'Executive Endorsement & ERP Commitment',
      desc: 'Authorized decision payloads update enterprise policies, threshold limits, and planning horizons in SAP S/4HANA Clean Core with immutable lineage.',
      icon: CheckSquare
    }
  ];

  // Comparative Matrix (Zero numbers, stats, or percentages)
  const comparisonRows = [
    {
      feature: 'Analytical Orientation',
      legacy: 'Retrospective review of what occurred in previous fiscal quarters with static reports',
      knooviq: 'Forward-looking prescriptive simulation of what actions to execute next in real time'
    },
    {
      feature: 'Trade-Off Resolution',
      legacy: 'Leaves trade-off balancing to human intuition, manual guesswork, and isolated spreadsheets',
      knooviq: 'Mathematical multi-objective optimization across conflicting corporate targets'
    },
    {
      feature: 'Scenario Stress-Testing',
      legacy: 'Static disconnected spreadsheets prone to formula breakages, errors, and stale inputs',
      knooviq: 'Dynamic counterfactual simulation across interconnected enterprise operational models'
    },
    {
      feature: 'Explainability & Trust',
      legacy: 'Opaque charts lacking causal context or underlying business justification',
      knooviq: 'Transparent causal contribution graphs explaining why specific actions are recommended'
    },
    {
      feature: 'Execution Latency',
      legacy: 'Manual policy recalculation and tedious data re-entry into ERP production systems',
      knooviq: 'Single-click governance approval with automatic clean-core ERP parameter deployment'
    },
    {
      feature: 'SAP ERP Alignment',
      legacy: 'Disconnected CSV data exports with zero real-time transactional synchronization',
      knooviq: 'Native bidirectional integration with SAP S/4HANA utilizing standard OData services'
    }
  ];

  // Executive FAQs (Scrubbed of All Numbers, Stats, and Percentages)
  const faqs = [
    {
      question: 'How does prescriptive decision support differ from standard business intelligence dashboards?',
      answer: 'Conventional BI dashboards are retrospective—they provide charts summarizing historical sales, inventory levels, or cost overruns. While helpful for identifying trends, they offer no guidance on what specific actions to take. KNOOVIQ Decision Support goes beyond descriptive metrics by modeling the mathematical relationships between business levers and corporate outcomes. It prescribes concrete actions, quantifies the anticipated impacts of each option, and simulates alternative scenarios so leaders can act with conviction.'
    },
    {
      question: 'How does the platform handle conflicting business priorities such as cost reduction versus customer service levels?',
      answer: 'We employ multi-objective Pareto optimization that models competing goals simultaneously. Rather than forcing arbitrary compromises, the system constructs efficient trade-off frontiers, illustrating the precise implications of prioritizing customer fulfillment speed over transportation expenses. Executives can interactively adjust weighting preferences to identify balanced decisions that maximize enterprise value under current market conditions.'
    },
    {
      question: 'How does KNOOVIQ ensure decision recommendations remain explainable and auditable?',
      answer: 'We reject unexplainable black-box AI. Every prescriptive recommendation is backed by transparent causal attribution trees and sensitivity charts. Decision makers can review the exact operational drivers, data inputs, and constraint assumptions that influenced the model. Furthermore, every scenario explored and final authorization is logged in an immutable audit ledger for governance compliance.'
    },
    {
      question: 'Can business leaders simulate what-if scenarios without risking live transactional data?',
      answer: 'Yes. Our platform operates a sandboxed digital operational twin decoupled from your production database. Leaders can freely model hypothetical disruptions—such as unexpected port closures, supplier insolvency, or demand surges—and examine the downstream repercussions across inventory and profitability without impacting live enterprise operations.'
    },
    {
      question: 'How do authorized decisions translate into active execution within SAP S/4HANA?',
      answer: 'Once leadership approves a decision within the governance cockpit, the platform generates compliant parameter updates and posts them directly to SAP S/4HANA via standard OData APIs, BAPIs, and enterprise events. Safety thresholds verify that all updates fall within pre-authorized operational boundaries, maintaining full SAP Clean Core compliance without custom database table modifications.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0070C0] selection:text-white antialiased overflow-x-hidden">

      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION (AI Agents Style Full Bleed Panoramic Background) */}
      {/* IMAGE: /images/digital-intelligence/decision_support_prescriptive_intelligence.jpg */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">
        {/* Full-Bleed 16:9 Panoramic Image - AI Agents Style */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/digital-intelligence/decision_support_prescriptive_intelligence.jpg"
            alt="Enterprise Decision Support & Prescriptive Intelligence"
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center brightness-[1.10] contrast-[1.05]"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
          {/* Lighter radiant blue overlay for lighter shade and readable text */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-sky-500/10 mix-blend-screen pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-xl space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.55 }}
              className="space-y-4"
            >
              {/* Practice Pill Badge (Breadcrumb and Full Screen removed) */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-cyan-500/30 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
                  <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Decision Intelligence &amp; Prescriptive AI</span>
                </div>
              </div>

              {/* Animated Headline with High-Contrast Typography */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-200">
                  Decision Support &amp; Prescriptive Intelligence
                </span>
              </h1>

              {/* Subtitle with High Legibility */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal pt-1 drop-shadow-md">
                Transform passive historical reporting into forward-looking prescriptive guidance. Empower executive leadership and operational planners with counterfactual scenario simulations, automated trade-off evaluations, and context-aware recommendations that synchronize strategic objectives with day-to-day SAP ERP execution.
              </p>
            </motion.div>

            {/* Enterprise Assurance Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-sm">
                <BrainCircuit className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Prescriptive Recommendation Engine</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-sm">
                <Sliders className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Counterfactual Simulation</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 shadow-sm">
                <Server className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Closed-Loop SAP Policy Sync</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: CORE CAPABILITIES (Simple & Attractive 4-Card Bento Grid)      */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              CORE CAPABILITIES
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Prescriptive Intelligence Designed for Strategic Clarity
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Move beyond descriptive dashboards that merely summarize past events. Our decision support platform models future trade-offs, tests hypothesis branches, and guides enterprise action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transformationPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="rounded-xl bg-sky-50 border border-sky-100 p-3 text-[#0070C0] w-fit mb-5">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: VISUAL SPOTLIGHT (2-Column Narrative & Screen Preview)         */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Descriptive Strategic Value */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
                TRANSFORMATION SPOTLIGHT
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Bridge the Gap Between Strategic Intent and Operational Reality
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Traditional business intelligence tools tell you what happened yesterday, leaving leaders to guess what to do tomorrow. KNOOVIQ Decision Support integrates causal graphs, mathematical optimization, and enterprise telemetry to deliver situational awareness and actionable alternatives.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Multi-Constraint Optimization</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Resolves competing priorities between customer fulfillment speed, working capital conservation, and logistics expenses.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Live Market &amp; Operational Telemetry</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Synthesizes real-time supply signals, macroeconomic indicators, and internal backlog queues to update guidance dynamically.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Audited Decision Sign-Offs</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Provides structured collaborative review workspaces where executive stakeholders evaluate scenario trade-offs and authorize changes.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase (5th Image: Bridge the Gap Between Strategic Intent and Operational Reality) */}
            <div className="lg:col-span-6 flex justify-center items-center w-full">
              <div className="relative w-full rounded-3xl border border-slate-200 shadow-xl overflow-hidden group h-[380px] sm:h-[440px] bg-slate-900">
                <img
                  src="/images/digital-intelligence/strategic_intent_operational_reality.jpg"
                  alt="Bridge the Gap Between Strategic Intent and Operational Reality"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: HOW IT WORKS (Simple & Attractive Journey)                     */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              OPERATIONAL WORKFLOW
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              A Continuous Prescriptive Decision Cycle
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              From multi-source data ingestion to closed-loop ERP operationalization, experience how decisions transition from raw telemetry to validated enterprise actions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflowSteps.map((ws, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="rounded-xl bg-sky-50 border border-sky-100 p-3 text-[#0070C0]">
                      <ws.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#0070C0] bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                      {ws.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {ws.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {ws.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: ENTERPRISE DECISION DOMAINS (Clean 6-Card Grid)                 */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              STRATEGIC DECISION DOMAINS
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineered for High-Impact Corporate Decisions
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Pre-configured decision matrices and scenario models tailored to mission-critical corporate functions across the enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {decisionDomains.map((domain, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0070C0] bg-sky-50 px-2.5 py-0.5 rounded border border-sky-100">
                      {domain.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5 mb-2">
                    <domain.icon className="h-5 w-5 text-[#0070C0] shrink-0" />
                    <span>{domain.title}</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {domain.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span>Target Destination:</span>
                  <span className="text-[#0070C0] font-bold">{domain.erp}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: ARCHITECTURAL RIGOR & COMPARISON (Clean 2-Tab View)            */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              ARCHITECTURAL RIGOR
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Topological Architecture &amp; Comparative Analysis
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Examine how our prescriptive decision intelligence platform surpasses descriptive BI reporting, and inspect our full-stack enterprise decision architecture.
            </p>

            {/* Simple Tab Switcher */}
            <div className="flex justify-center gap-2 mt-8">
              <button
                onClick={() => setActiveTab('comparison')}
                className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all ${activeTab === 'comparison'
                    ? 'bg-[#0070C0] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
              >
                Transformation Comparison Matrix
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all ${activeTab === 'architecture'
                    ? 'bg-[#0070C0] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
              >
                Full-Stack Architecture Visual
              </button>
            </div>
          </div>

          {/* TAB 1: Comparison Matrix */}
          {activeTab === 'comparison' && (
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                      <th className="py-4 px-6">Architectural Dimension</th>
                      <th className="py-4 px-6 text-slate-500">Descriptive BI &amp; Static Dashboards</th>
                      <th className="py-4 px-6 text-[#0070C0] bg-sky-50/50">KNOOVIQ Prescriptive Decision Support</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                    {comparisonRows.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-6 font-bold text-slate-900">{row.feature}</td>
                        <td className="py-4 px-6 text-slate-500">{row.legacy}</td>
                        <td className="py-4 px-6 font-semibold text-slate-800 bg-sky-50/30 flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#0070C0] flex-shrink-0 mt-0.5" />
                          <span>{row.knooviq}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: Full-Stack Architecture Visual */}
          {activeTab === 'architecture' && (
            <div className="space-y-8">
              <div className="rounded-2xl border border-slate-200 bg-slate-950 p-3 shadow-xl overflow-hidden">
                <img
                  src="/images/business-intelligence/augmented_analytics.jpg"
                  alt="KNOOVIQ Full-Stack Decision Support Architecture"
                  className="w-full h-[400px] sm:h-[480px] object-cover rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Causal Graph &amp; Feature Fabric</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ingests enterprise master data, operational telemetry, and external market indicators into standardized semantic graphs with complete data fidelity.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Optimization &amp; Scenario Core</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Evaluates multi-objective trade-off equations, linear programming models, and counterfactual simulations to generate ranked, risk-adjusted actions.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Governance &amp; Clean-Core Sync</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Secure executive review environment facilitating scenario exploration and pushing authorized policy updates to SAP S/4HANA via standard BAPIs.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: EXECUTIVE FAQS ACCORDION (Clean & Collapsible)                 */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Executive FAQs: Prescriptive Decision Support
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Clear answers to foundational questions regarding prescriptive modeling, counterfactual simulation, explainability, and ERP governance.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#0070C0] transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${activeFaq === idx ? 'rotate-180 text-[#0070C0]' : ''
                      }`}
                  />
                </button>

                {activeFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: SAPPHIRE EXECUTIVE STRATEGY CTA RIBBON                          */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-r from-[#00529B] via-[#0070C0] to-[#00A3E0] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-200 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
            STRATEGIC DECISION EXCELLENCE
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready to Elevate Strategic Decisions from Intuition to Prescriptive Precision?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Partner with KNOOVIQ to benchmark your decision workflows, simulate complex trade-off scenarios, and deploy closed-loop prescriptive intelligence integrated with SAP S/4HANA.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact ? onOpenContact('Decision Support Strategy Workshop') : null}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#0070C0] shadow-xl hover:bg-sky-50 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Schedule Decision Support Strategy Workshop</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <Link
              to="/digital-intelligence/forecasting-planning"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-4 text-sm font-semibold text-white hover:bg-white/20 backdrop-blur-md transition-all cursor-pointer"
            >
              <span>Explore Forecasting &amp; Planning</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Full Screen Lightbox Modal */}
      {isHeroModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
          onClick={() => setIsHeroModalOpen(false)}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] bg-slate-950 border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-900/80">
              <div className="flex items-center gap-2.5">
                <BrainCircuit className="w-4 h-4 text-cyan-400" />
                <span className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider">
                  Enterprise Decision Support &amp; Prescriptive Intelligence
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsHeroModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Close modal (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative flex-1 overflow-auto bg-slate-950 flex items-center justify-center p-2 sm:p-4">
              <img
                src="/images/digital-intelligence/decision_support_prescriptive_intelligence.jpg"
                alt="Enterprise Decision Support Architecture Full View"
                className="w-full h-auto max-h-[78vh] object-contain rounded-lg"
              />
            </div>
            <div className="px-5 py-2.5 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Full Panoramic Architecture Diagram</span>
              <span className="text-cyan-400">Press ESC or click outside to close</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default DecisionSupportPage;
