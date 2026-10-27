import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
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
  LineChart,
  Maximize2,
  X
} from 'lucide-react';

interface ForecastingAndPlanningPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const ForecastingAndPlanningPage: React.FC<ForecastingAndPlanningPageProps> = ({
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

  // Core Enterprise Planning Domains
  const planningDomains = [
    {
      title: 'Commercial Sales & Revenue Forecasting',
      category: 'Commercial Operations',
      icon: Receipt,
      desc: 'Anticipates deal closure probabilities, regional revenue targets, and seasonal promotional lifts to provide leadership with dependable commercial visibility.',
      erp: 'SAP S/4HANA Sales & Distribution'
    },
    {
      title: 'Multi-Tier Material Requirements Planning',
      category: 'Direct Procurement',
      icon: Boxes,
      desc: 'Translates unconstrained demand signals into dependent component schedules, identifying long-lead material shortages before manufacturing lines experience downtime.',
      erp: 'SAP S/4HANA Sourcing & Procurement'
    },
    {
      title: 'Plant Production & Capacity Scheduling',
      category: 'Manufacturing Operations',
      icon: Cpu,
      desc: 'Synchronizes equipment tooling availability, labor shift rotas, and scheduled maintenance downtime with demand signals to maximize overall plant effectiveness.',
      erp: 'SAP Digital Supply Chain'
    },
    {
      title: 'Distribution Network Replenishment',
      category: 'Logistics & Fulfillment',
      icon: Truck,
      desc: 'Coordinates transfer shipment schedules and freight container utilization across central mother hubs and regional depots to minimize costly emergency expediting.',
      erp: 'SAP Extended Warehouse Management'
    },
    {
      title: 'Working Capital & Cash Projections',
      category: 'Corporate Treasury',
      icon: Briefcase,
      desc: 'Projects operational cash outflows and accounts receivable collection timing based on forward sales expectations and contractual vendor payment schedules.',
      erp: 'SAP Cash Management'
    },
    {
      title: 'Service Parts & Aftermarket Demand',
      category: 'Field & Service Operations',
      icon: Workflow,
      desc: 'Predicts intermittent and slow-moving spare part requirements utilizing asset degradation curves, eliminating inventory stockouts and emergency air freight.',
      erp: 'SAP Service Management'
    }
  ];

  // Core Transformation Pillars
  const transformationPillars = [
    {
      icon: LineChart,
      title: 'Multimodal Demand Sensing',
      desc: 'Ingests point-of-sale data, channel inventory telemetry, weather patterns, and macroeconomic indices to identify demand turning points before orders are placed.'
    },
    {
      icon: Sliders,
      title: 'Probabilistic Quantile Models',
      desc: 'Generates full probabilistic distribution curves rather than static single-point estimates, quantifying upside opportunity and downside risk for optimal buffer sizing.'
    },
    {
      icon: Workflow,
      title: 'Cross-Functional Consensus',
      desc: 'Reconciles commercial forecasts, corporate financial targets, and operational supply chain capacities into a unified, authoritative operating baseline.'
    },
    {
      icon: Server,
      title: 'Clean-Core ERP Synchronization',
      desc: 'Posts validated consensus plans directly into SAP Integrated Business Planning and SAP S/4HANA MRP engines, triggering production runs without manual re-keying.'
    }
  ];

  // Simple Workflow Lifecycle
  const workflowSteps = [
    {
      step: 'SENSE',
      title: 'High-Frequency Signal Capture',
      desc: 'Point-of-sale streams, channel inventory levels, lead-time changes, and market indicators stream into high-speed ingestion brokers with automated anomaly filtering.',
      icon: Zap
    },
    {
      step: 'RECONCILE',
      title: 'Algorithmic Consensus Modeling',
      desc: 'Machine learning engines blend statistical baselines with commercial inputs, evaluating corporate financial constraints and manufacturing capacity thresholds.',
      icon: GitBranch
    },
    {
      step: 'DEPLOY',
      title: 'Autonomous ERP Schedule Commitment',
      desc: 'Validated consensus plans publish directly into SAP S/4HANA and SAP IBP, dynamically adjusting purchase orders, safety stock levels, and plant schedules.',
      icon: CheckSquare
    }
  ];

  // Comparative Matrix (Zero numbers, stats, or percentages)
  const comparisonRows = [
    {
      feature: 'Planning Frequency',
      legacy: 'Static monthly or quarterly planning cycles that become obsolete almost immediately',
      knooviq: 'Continuous event-driven rolling horizons refreshed with real-time operational telemetry'
    },
    {
      feature: 'Forecast Methodology',
      legacy: 'Simple historical moving averages blind to sudden structural market disruptions',
      knooviq: 'Multimodal demand sensing incorporating external indicators and market dynamics'
    },
    {
      feature: 'Uncertainty Handling',
      legacy: 'Single deterministic point estimates hiding critical risk and volatility exposure',
      knooviq: 'Probabilistic quantile distributions projecting comprehensive confidence boundaries'
    },
    {
      feature: 'Cross-Silo Consensus',
      legacy: 'Disconnected departmental spreadsheets resulting in conflicting operational plans',
      knooviq: 'Unified collaborative planning workspace with automated multi-stakeholder reconciliation'
    },
    {
      feature: 'Execution Latency',
      legacy: 'Tedious manual data export, transformation, and re-entry into ERP production systems',
      knooviq: 'Automated zero-touch publication directly into SAP S/4HANA and SAP IBP engines'
    },
    {
      feature: 'SAP ERP Alignment',
      legacy: 'Fragmented custom batch interfaces prone to synchronization failures and table locks',
      knooviq: 'Native Clean-Core integration utilizing standard OData services and business events'
    }
  ];

  // Executive FAQs (Scrubbed of All Numbers, Stats, and Percentages)
  const faqs = [
    {
      question: 'How does probabilistic demand sensing outperform conventional statistical forecasting?',
      answer: 'Traditional statistical techniques merely extrapolate past sales trends into the future, assuming tomorrow will mimic yesterday. When supply chains face port delays, competitor actions, or sudden macroeconomic shifts, these models fail. KNOOVIQ demand sensing ingests high-frequency leading indicators—such as distributor inventory levels, channel consumption, weather forecasts, and web engagement—to identify market inflection points as they occur, projecting realistic probability distributions rather than fragile point estimates.'
    },
    {
      question: 'How does the platform reconcile conflicting forecasts between Sales, Finance, and Supply Chain?',
      answer: 'We provide an integrated business planning environment that harmonizes unconstrained commercial demand with operational supply capacity and financial budget constraints. The system translates commercial unit projections into financial margin implications, highlights supply shortfalls, and simulates consensus trade-off alternatives, enabling executive teams to achieve aligned sign-off during regular sales and operations planning cadences.'
    },
    {
      question: 'What are the operational advantages of probabilistic quantile forecasting over single-point estimates?',
      answer: 'Single-point forecasts create a false illusion of certainty and encourage under-buffering or panic over-ordering. By generating full probability distributions, our platform quantifies downside demand risk and upside opportunity across multiple confidence quantiles. This allows inventory planners to set dynamic safety stock buffers tailored to the specific cost of stockouts versus the cost of holding inventory for each product category.'
    },
    {
      question: 'Can planners simulate unexpected supply disruptions and raw material cost spikes?',
      answer: 'Yes. Planners can run sandboxed what-if simulations to model potential supplier shutdowns, shipping lane embargoes, or raw material cost increases. The system instantly recalculates projected service levels, inventory depletion dates, and margin impacts across the network, recommending optimal pre-emptive reallocation strategies without affecting live ERP records.'
    },
    {
      question: 'How do validated forecast plans update SAP S/4HANA and SAP Integrated Business Planning?',
      answer: 'Approved consensus plans publish directly into SAP S/4HANA and SAP IBP via standard OData APIs, BAPIs, and enterprise business events. The integration updates planned independent requirements, safety stock parameters, and master production schedules seamlessly, keeping your SAP digital core completely clean, compliant, and upgrade-ready.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0070C0] selection:text-white antialiased overflow-x-hidden">

      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION (AI Agents Style Full Bleed Panoramic Background) */}
      {/* IMAGE: /images/digital-intelligence/forecasting_planning_probabilistic_sensing.jpg */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">
        {/* Full-Bleed 16:9 Panoramic Image - AI Agents Style */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/digital-intelligence/forecasting_planning_probabilistic_sensing.jpg"
            alt="Enterprise Forecasting & Planning Probabilistic Sensing"
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center select-none contrast-[1.02]"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
        </div>

        {/* Lighter Directional Scrim for Maximum Visual Clarity & Text Contrast */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent pointer-events-none" />

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
                  <LineChart className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Probabilistic Sensing &amp; IBP</span>
                </div>
              </div>

              {/* Animated Headline with High-Contrast Typography */}
              <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-sm">
                Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-200">
                  Forecasting &amp; Planning Intelligence
                </span>
              </h1>

              {/* Subtitle with High Legibility */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal pt-1">
                Replace static spreadsheet forecasts with continuous, probabilistic demand sensing. Synchronize commercial projections, supply chain capacities, and financial budgets across your enterprise, driving autonomous inventory alignment and agile executive sales and operations planning with SAP Clean Core.
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
                <LineChart className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Probabilistic Demand Sensing</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-sm">
                <Sliders className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Integrated Business Planning</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 shadow-sm">
                <Server className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Automated SAP MRP Sync</span>
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
              Algorithmic Forecasting Built for Market Volatility
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Static historical averages cannot predict modern disruptions. Our architecture detects early demand shifts, calculates risk quantiles, and aligns corporate plans autonomously.
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
                Eliminate the Bullwhip Effect Across the Enterprise Value Chain
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Departmental planning silos cause magnified demand volatility, resulting in concurrent inventory stockouts and costly warehouse surplus. KNOOVIQ Forecasting &amp; Planning establishes a continuous digital thread connecting customer demand signals directly to factory schedules and raw material procurement.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Unified Sales &amp; Operations Planning</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Aligns commercial leadership, plant managers, and finance executives around a shared real-time planning baseline.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Automated Signal Disaggregation</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Dynamically breaks down macro aggregate forecasts into regional distribution center and SKU-level execution schedules.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Continuous Clean-Core Feedback</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Continuously reconciles executed production batches and customer fulfillments against forecast expectations to refine planning accuracy.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Dashboard Screen */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl border border-slate-200 shadow-xl overflow-hidden group h-[380px] sm:h-[440px] w-full bg-slate-900">
                <img
                  src="/images/consumer_goods_integrated_business_planning.png"
                  alt="Integrated Business Planning Console"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Glassmorphic Badge 1 */}
                <div className="absolute top-6 left-6 rounded-xl bg-slate-900/90 border border-slate-700 p-3.5 backdrop-blur-md shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-semibold text-slate-200">Demand Sensing Engine</span>
                  </div>
                  <p className="text-sm font-bold text-white mt-1">Real-Time Signal Mesh</p>
                </div>

                {/* Floating Glassmorphic Badge 2 */}
                <div className="absolute bottom-6 right-6 rounded-xl bg-[#0070C0]/90 border border-sky-400/40 p-3.5 backdrop-blur-md shadow-lg text-white">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                    <span className="text-xs font-semibold">Clean-Core Alignment</span>
                  </div>
                  <p className="text-sm font-bold mt-1">Automated IBP Sync</p>
                </div>
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
              A Seamless Probabilistic Planning Cycle
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Experience how external demand signals flow through algorithmic consensus to trigger synchronized enterprise execution.
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
      {/* SECTION 5: ENTERPRISE PLANNING DOMAINS (Clean 6-Card Grid)                 */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              STRATEGIC PLANNING DOMAINS
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineered for Complex Enterprise Horizons
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Pre-configured forecasting algorithms and consensus workflows tailored to core operational functions across the enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {planningDomains.map((domain, idx) => (
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
              Contrast autonomous demand sensing against legacy spreadsheet planning, and inspect our full-stack enterprise forecasting architecture.
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
                      <th className="py-4 px-6 text-slate-500">Traditional Periodic Spreadsheets</th>
                      <th className="py-4 px-6 text-[#0070C0] bg-sky-50/50">KNOOVIQ Autonomous Forecasting &amp; Planning</th>
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
                  src="/images/predictive-analytics/mlops_mesh.jpg"
                  alt="KNOOVIQ Full-Stack Forecasting Architecture"
                  className="w-full h-[400px] sm:h-[480px] object-cover rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Signal Ingestion &amp; Feature Store</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ingests channel telemetry, point-of-sale feeds, supplier lead times, and economic indices into standardized time-series matrices with zero loss.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Probabilistic Modeling Core</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Executes ensemble algorithms, neural demand transformers, and multi-objective optimization to generate consensus execution schedules.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Enterprise Clean-Core Sync</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-reliability connectors that publish validated replenishment parameters and production runs directly into SAP S/4HANA via native BAPIs.
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
              Executive FAQs: Forecasting &amp; Planning
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Essential answers addressing demand volatility, consensus alignment, probabilistic modeling, and SAP Clean Core integration.
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
            OPTIMIZE ENTERPRISE RESILIENCE
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready to Eliminate Planning Blind Spots and Synchronize Your Enterprise?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Partner with KNOOVIQ to benchmark your forecasting accuracy, deploy probabilistic demand sensing, and achieve closed-loop integrated business planning with SAP S/4HANA.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact ? onOpenContact('Forecasting & Planning Workshop') : null}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#0070C0] shadow-xl hover:bg-sky-50 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Schedule Forecasting &amp; Planning Workshop</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <Link
              to="/digital-intelligence/scenario-analysis"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-4 text-sm font-semibold text-white hover:bg-white/20 backdrop-blur-md transition-all cursor-pointer"
            >
              <span>Explore Scenario Analysis</span>
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
                <LineChart className="w-4 h-4 text-cyan-400" />
                <span className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider">
                  Enterprise Forecasting &amp; Planning Intelligence
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
                src="/images/digital-intelligence/forecasting_planning_probabilistic_sensing.jpg"
                alt="Enterprise Forecasting & Planning Architecture Full View"
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

export default ForecastingAndPlanningPage;
