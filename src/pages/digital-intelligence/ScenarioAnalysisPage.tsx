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
  Zap,
  GitBranch,
  CheckSquare,
  Truck,
  Maximize2,
  X
} from 'lucide-react';

interface ScenarioAnalysisPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const ScenarioAnalysisPage: React.FC<ScenarioAnalysisPageProps> = ({
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

  // Strategic Scenario Domains
  const scenarioDomains = [
    {
      title: 'Geopolitical Supply Route Severance',
      category: 'Global Logistics',
      icon: Truck,
      desc: 'Simulates maritime corridor bottlenecks, canal closures, and regional border delays to identify secondary carrier alternatives and port re-routings.',
      erp: 'SAP Transportation Management'
    },
    {
      title: 'Commodity Price & Energy Shock',
      category: 'Corporate Finance',
      icon: Receipt,
      desc: 'Evaluates the impact of raw material cost volatility, energy tariff spikes, and currency swings on product gross margins, testing price escalation clauses.',
      erp: 'SAP S/4HANA Finance'
    },
    {
      title: 'Single-Source Vendor Insolvency',
      category: 'Strategic Procurement',
      icon: Briefcase,
      desc: 'Models the sudden loss of critical component suppliers, projecting assembly line idle times and identifying qualification horizons for secondary vendors.',
      erp: 'SAP Sourcing & Procurement'
    },
    {
      title: 'Sudden Demand Spike or Drop',
      category: 'Commercial Planning',
      icon: Boxes,
      desc: 'Simulates unexpected adoption surges or abrupt market pullbacks, stress-testing finished goods buffer depletion and warehouse capacity constraints.',
      erp: 'SAP Integrated Business Planning'
    },
    {
      title: 'Critical Production Line Halt',
      category: 'Plant Operations',
      icon: Cpu,
      desc: 'Tests catastrophic equipment failures across automated manufacturing lines, modeling alternate assembly routing paths and buffer capacity absorption.',
      erp: 'SAP Digital Supply Chain'
    },
    {
      title: 'Cross-Border Tariff Restructuring',
      category: 'Trade Compliance',
      icon: Workflow,
      desc: 'Assesses regulatory import tariff revisions and free-trade agreement alterations, evaluating alternate manufacturing origins and transfer pricing models.',
      erp: 'SAP Global Trade Services'
    }
  ];

  // Core Transformation Pillars
  const transformationPillars = [
    {
      icon: BrainCircuit,
      title: 'Digital Operational Twin',
      desc: 'Mirrors real-time enterprise topology, enabling executive teams to test disruptive hypotheses without touching live production databases or corrupting ledgers.'
    },
    {
      icon: Sliders,
      title: 'Multi-Shock Stress Testing',
      desc: 'Subjects operations to compounded macro shocks—such as simultaneous currency devaluation, port delays, and energy surges—to uncover hidden vulnerabilities.'
    },
    {
      icon: ShieldCheck,
      title: 'Causal Sensitivity Attribution',
      desc: 'Maps interconnected cause-and-effect pathways, pinpointing the single critical operational nodes that propagate volatility throughout the enterprise network.'
    },
    {
      icon: Server,
      title: 'Resilient Policy Tuning',
      desc: 'Converts winning contingency strategies into pre-authorized operational runbooks and SAP Clean-Core threshold adjustments, ready for deployment.'
    }
  ];

  // Simple Workflow Lifecycle
  const workflowSteps = [
    {
      step: 'HYPOTHESIZE',
      title: 'Disruption Scenario Definition',
      desc: 'Planners configure hypothetical macro shifts, parameter fluctuations, supply constraints, or regulatory tariffs across intuitive visual control surfaces.',
      icon: Zap
    },
    {
      step: 'SIMULATE',
      title: 'Digital Twin Cascade Propagation',
      desc: 'High-performance simulation engines propagate shocks across interconnected multi-echelon networks, calculating financial exposure and inventory depletion points.',
      icon: GitBranch
    },
    {
      step: 'CODIFY',
      title: 'Resilient Playbook Operationalization',
      desc: 'Winning mitigation plans are stored as audited contingency playbooks, linked directly to SAP Clean-Core event listeners for rapid activation.',
      icon: CheckSquare
    }
  ];

  // Comparative Matrix (Zero numbers, stats, or percentages)
  const comparisonRows = [
    {
      feature: 'Simulation Fidelity',
      legacy: 'Linear decoupled formulas blind to dynamic feedback loops, queues, and delays',
      knooviq: 'Non-linear digital twin replicating true operational physics and queue dynamics'
    },
    {
      feature: 'Cascading Impact Tracking',
      legacy: 'Isolated within single business units; ignores network ripple effects',
      knooviq: 'Holistic cross-enterprise shock propagation across finance, supply, and plants'
    },
    {
      feature: 'Scenario Diversity',
      legacy: 'Tedious manual formula adjustments limiting exploration to basic scenarios',
      knooviq: 'Rapid automated hypothesis iteration across hundreds of complex shock scenarios'
    },
    {
      feature: 'Production Safety',
      legacy: 'Vulnerable to spreadsheet corruption, accidental formula edits, and data leaks',
      knooviq: 'Air-gapped sandboxed digital twin decoupled from live production ERP environments'
    },
    {
      feature: 'Actionability',
      legacy: 'Theoretical slide presentations requiring manual redesign when conditions change',
      knooviq: 'Actionable pre-audited contingency playbooks ready for rapid operational deployment'
    },
    {
      feature: 'SAP ERP Alignment',
      legacy: 'Disconnected manual re-entry into transactional systems during crisis conditions',
      knooviq: 'Native SAP Clean-Core integration enabling validated policy updates via BAPIs'
    }
  ];

  // Executive FAQs (Scrubbed of All Numbers, Stats, and Percentages)
  const faqs = [
    {
      question: 'How does digital twin scenario analysis differ from static spreadsheet sensitivity models?',
      answer: 'Spreadsheets rely on static linear formulas that fail to account for operational latency, queue buildups, and resource contention. When a real crisis occurs, delays in one factory cascade into unexpected bottlenecks elsewhere. KNOOVIQ Scenario Analysis utilizes a dynamic digital twin of your enterprise operating network. It models time-dependent operational flows, non-linear dependencies, and capacity limits, revealing how localized disruptions propagate into enterprise-wide financial and service impacts.'
    },
    {
      question: 'How does the platform ensure live SAP S/4HANA production systems remain completely unaffected?',
      answer: 'All simulations run within an air-gapped virtual sandbox completely isolated from your transactional core. The platform ingests an encrypted baseline snapshot of operational master data and network topologies, allowing planners to test catastrophic failures, supply shutdowns, and radical price restructuring without risk of corrupted production ledgers or accidental supplier orders.'
    },
    {
      question: 'Can executive teams simulate multiple concurrent disruptions happening simultaneously?',
      answer: 'Yes. Real-world crises rarely occur in isolation. Our multi-variable stress engine allows leadership to simulate compounded disruptions—such as a simultaneous freight corridor shutdown, currency devaluation, and key component shortage. The system tracks how compounding friction strains working capital and delivery commitments, highlighting hidden single points of failure.'
    },
    {
      question: 'How are simulation results translated into actionable contingency responses?',
      answer: 'When planners identify a mitigation strategy that preserves service levels and protects operating margins, the system codifies the plan into a structured contingency playbook. This playbook specifies alternate sourcing allocations, buffer thresholds, and transport modes, complete with explainable rationale for executive sign-off.'
    },
    {
      question: 'How do approved contingency playbooks integrate with our SAP Clean Core architecture?',
      answer: 'When leadership authorizes the activation of a contingency playbook, the platform pushes pre-validated parameter changes to SAP S/4HANA through standard OData services and BAPIs. By utilizing native clean-core interfaces rather than custom database table overrides, your systems transition swiftly into contingency operations while maintaining regulatory compliance and system integrity.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0070C0] selection:text-white antialiased overflow-x-hidden">

      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION (AI Agents Style Full Bleed Panoramic Background) */}
      {/* IMAGE: /images/digital-intelligence/scenario_analysis_digital_twin_simulation.png */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">
        {/* Full-Bleed 16:9 Panoramic Image - AI Agents Style */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/digital-intelligence/scenario_analysis_digital_twin_simulation.png"
            alt="Enterprise Scenario Analysis Digital Twin Simulation & Stress Testing"
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center brightness-[1.08] contrast-[1.04]"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
          {/* Subtle dark blue overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/30 to-sky-950/20 pointer-events-none" />
          <div className="absolute inset-0 bg-sky-500/[0.07] mix-blend-screen pointer-events-none" />
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
                  <span>Digital Twin &amp; Stress Testing</span>
                </div>
              </div>

              {/* Animated Headline with High-Contrast Typography */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
              >
                Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-200">
                  Scenario Analysis &amp; Digital Twin Simulation
                </span>
              </h1>

              {/* Subtitle with High Legibility */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal pt-1 drop-shadow-md">
                Evaluate the operational and financial impact of volatile market shifts before they occur. Simulate counterfactual disruptions, test multi-dimensional stress hypotheses, and assess organizational resilience across supply chains, pricing models, and capital allocations with SAP Clean Core.
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
                <span>Digital Twin Operational Sandbox</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-sm">
                <Sliders className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Multi-Dimensional Stress Testing</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 shadow-sm">
                <Server className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Safe Parameter Sync (Clean Core)</span>
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
              Digital Simulation Engineered for Enterprise Resilience
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Static models fail to capture complex cascading impacts across interdependent units. Our simulation fabric models real-world ripple effects dynamically.
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
                Discover Fragilities Before Real-World Crises Strike
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Most enterprises discover operational vulnerabilities only after a critical disruption has already crippled fulfillment or destroyed margins. KNOOVIQ Scenario Analysis provides a safe operational flight simulator, enabling leadership to stress-test contingency plans against hypothetical futures.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Non-Destructive Sandboxed Modeling</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Test extreme operational failures without disrupting ongoing manufacturing runs or customer deliveries.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Cross-Departmental Propagation</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Traces how localized supplier failures ripple through work-in-progress inventory, finished goods, and revenue timing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Contingency Strategy Playbooks</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Formulates pre-audited alternative operational playbooks that can be activated instantly when early-warning signals trigger.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Dashboard Screen (3rd Image: Discover Fragilities Before Real-World Crises Strike) */}
            <div className="lg:col-span-6 flex justify-center items-center w-full">
              <div className="relative w-full rounded-3xl border border-slate-200 shadow-xl overflow-hidden group h-[380px] sm:h-[440px] bg-slate-900">
                <img
                  src="/images/digital-intelligence/discover_fragilities_crises_strike.jpg"
                  alt="Discover Fragilities Before Real-World Crises Strike"
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
              A Continuous Scenario Evaluation Cycle
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Experience how leadership teams formulate shock hypotheses, execute digital twin simulations, and codify enterprise response playbooks.
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
      {/* SECTION 5: STRATEGIC SCENARIO DOMAINS (Clean 6-Card Grid)                 */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              STRATEGIC SCENARIO DOMAINS
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineered for High-Consequence Environments
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Pre-configured simulation models designed for complex strategic dilemmas across global supply chains, financial markets, and production facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarioDomains.map((domain, idx) => (
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
              Contrast digital twin scenario simulation against legacy static spreadsheet modeling, and inspect our full-stack enterprise simulation architecture.
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
                      <th className="py-4 px-6 text-slate-500">Static Disconnected Spreadsheets</th>
                      <th className="py-4 px-6 text-[#0070C0] bg-sky-50/50">KNOOVIQ Digital Twin Scenario Analysis</th>
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
                  src="/images/sap_btp_architecture_3d.jpg"
                  alt="KNOOVIQ Full-Stack Scenario Analysis Architecture"
                  className="w-full h-[400px] sm:h-[480px] object-cover rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Digital Twin Simulation Core</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-fidelity discrete event and agent-based simulation modeling the physical and transactional dynamics of the enterprise.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Shock Propagation Engine</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Evaluates non-linear systemic ripple effects, bottleneck shifts, and multi-objective Pareto trade-off frontiers with zero distortion.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Contingency Playbook Sync</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Audited governance cockpit storing validated response protocols with clean-core connectors to SAP S/4HANA via native BAPIs.
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
              Executive FAQs: Scenario Analysis &amp; Stress Testing
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Essential answers addressing digital twin modeling, cascading propagation, ERP safety, and contingency execution.
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
            PROACTIVE RESILIENCE PLANNING
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready to Stress-Test Your Enterprise Against Future Uncertainty?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Partner with KNOOVIQ to construct your digital operational twin, simulate volatile market scenarios, and deploy pre-audited contingency playbooks integrated with SAP S/4HANA.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact ? onOpenContact('Scenario Analysis Workshop') : null}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#0070C0] shadow-xl hover:bg-sky-50 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Schedule Scenario Analysis Workshop</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <Link
              to="/digital-intelligence/risk-intelligence"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-4 text-sm font-semibold text-white hover:bg-white/20 backdrop-blur-md transition-all cursor-pointer"
            >
              <span>Explore Risk Intelligence</span>
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
                  Enterprise Scenario Analysis &amp; Digital Twin Simulation
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
                src="/images/digital-intelligence/scenario_analysis_digital_twin_simulation.png"
                alt="Enterprise Scenario Analysis Architecture Full View"
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

export default ScenarioAnalysisPage;
