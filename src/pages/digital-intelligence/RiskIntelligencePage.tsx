import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Sparkles,
  Server,
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
  Cpu,
  Maximize2,
  X
} from 'lucide-react';

interface RiskIntelligencePageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const RiskIntelligencePage: React.FC<RiskIntelligencePageProps> = ({
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

  // Strategic Risk Domains
  const riskDomains = [
    {
      title: 'Vendor Solvency & Operational Health',
      category: 'Supply Management',
      icon: Briefcase,
      desc: 'Monitors vendor financial liquidity, adverse legal filings, and capacity bottlenecks, triggering automated order re-allocations to qualified backup suppliers.',
      erp: 'SAP Ariba & Sourcing'
    },
    {
      title: 'Customer Credit Default Governance',
      category: 'Accounts Receivable',
      icon: Receipt,
      desc: 'Evaluates buyer payment trends, regional liquidity shifts, and external credit feeds to adjust exposure terms and automate milestone prepayment gates.',
      erp: 'SAP S/4HANA Finance'
    },
    {
      title: 'Global Sanctions & Trade Compliance',
      category: 'Legal Governance',
      icon: ShieldCheck,
      desc: 'Screens business partners, beneficial owners, and bills of lading against international denied-parties lists and embargo regulations in real time.',
      erp: 'SAP Global Trade Services'
    },
    {
      title: 'Supply Chain Continuity & Bottleneck Radar',
      category: 'Logistics Operations',
      icon: Truck,
      desc: 'Tracks port congestion alerts, carrier labor disputes, and extreme weather patterns to re-route vulnerable shipments and secure alternate warehousing.',
      erp: 'SAP Transportation Management'
    },
    {
      title: 'Commodity Price & Hedging Volatility',
      category: 'Corporate Treasury',
      icon: Boxes,
      desc: 'Forecasts raw material pricing swings, interest rate shifts, and currency swings, recommending hedge portfolio rebalancing to safeguard operating margins.',
      erp: 'SAP Treasury & Risk Management'
    },
    {
      title: 'Manufacturing Component Quality Risk',
      category: 'Plant Operations',
      icon: Cpu,
      desc: 'Analyzes component inspection failure trends and scrap rate spikes to isolate defective supplier lots before they contaminate downstream assembly lines.',
      erp: 'SAP Digital Supply Chain'
    }
  ];

  // Core Transformation Pillars
  const transformationPillars = [
    {
      icon: ShieldCheck,
      title: 'Operational Threat Radar',
      desc: 'Ingests real-time counterparty credit signals, adverse news feeds, regulatory updates, and supply chain telemetry to detect risk anomalies early.'
    },
    {
      icon: Workflow,
      title: 'Multi-Tier Vulnerability Mapping',
      desc: 'Maps indirect dependencies and concentrated sub-tier suppliers across global value chains, exposing hidden single points of failure across component origins.'
    },
    {
      icon: Receipt,
      title: 'Counterparty Credit Governance',
      desc: 'Continuously recalculates customer credit limits, payment delinquency probabilities, and outstanding exposures, triggering automated risk mitigations.'
    },
    {
      icon: Server,
      title: 'Clean-Core Policy Enforcement',
      desc: 'Pushes automated credit blocks, restricted vendor holds, and elevated approval requirements directly to SAP S/4HANA via clean-core events without manual latency.'
    }
  ];

  // Simple Workflow Lifecycle
  const workflowSteps = [
    {
      step: 'DETECT',
      title: 'Continuous Threat Signal Ingestion',
      desc: 'Global watchlists, market credit default swaps, adverse news feeds, weather disruptions, and ERP transactions stream into low-latency risk telemetry pipelines.',
      icon: Zap
    },
    {
      step: 'EVALUATE',
      title: 'Multi-Vector Exposure Assessment',
      desc: 'Graph algorithms cross-reference threat vectors against enterprise balance sheets, open purchase orders, customer receivables, and contract liabilities.',
      icon: GitBranch
    },
    {
      step: 'INTERCEPT',
      title: 'Automated Policy Execution & Holds',
      desc: 'Pre-authorized mitigation actions—such as dynamic credit holds, payment escrow requirements, or backup supplier reallocations—post directly to SAP Clean Core.',
      icon: CheckSquare
    }
  ];

  // Comparative Matrix (Zero numbers, stats, or percentages)
  const comparisonRows = [
    {
      feature: 'Assessment Cadence',
      legacy: 'Annual or quarterly backward-looking questionnaire surveys and static credit checks',
      knooviq: 'Continuous real-time telemetry streaming from internal ERP systems and global market feeds'
    },
    {
      feature: 'Vendor Visibility Depth',
      legacy: 'Limited strictly to immediate direct suppliers; completely blind to sub-tier exposure',
      knooviq: 'Multi-tier value graph uncovering hidden sub-tier concentration risks and common dependencies'
    },
    {
      feature: 'Threat Detection Velocity',
      legacy: 'Discovers insolvency weeks after court filings, defaults, and shipment interruptions occur',
      knooviq: 'Detects early financial distress signals weeks before official declarations take place'
    },
    {
      feature: 'Mitigation Actionability',
      legacy: 'Theoretical risk heatmaps reviewed in delayed executive committee sessions',
      knooviq: 'Automated execution triggers deploying credit limits, vendor holds, and order reroutes in ERP'
    },
    {
      feature: 'Regulatory Audit Lineage',
      legacy: 'Fragmented email threads and paper binders vulnerable to human oversight and loss',
      knooviq: 'Immutable cryptographically verifiable audit ledger tracking all compliance evaluations'
    },
    {
      feature: 'SAP ERP Alignment',
      legacy: 'Disconnected spreadsheets requiring manual data entry into master records during crises',
      knooviq: 'Native Clean-Core integration utilizing standard OData APIs and enterprise business events'
    }
  ];

  // Executive FAQs (Scrubbed of All Numbers, Stats, and Percentages)
  const faqs = [
    {
      question: 'How does continuous risk intelligence differ from conventional annual supplier audits?',
      answer: 'Conventional supplier risk assessments rely on self-reported questionnaires and static annual financial reviews. By the time a vendor returns a questionnaire, their liquidity position may have already deteriorated significantly. KNOOVIQ Risk Intelligence monitors dynamic leading indicators continuously—such as supplier payment behavior across the market, court docket filings, tax liens, executive turnover, and regional logistics delays—providing real-time alerts before a default disrupts your production lines.'
    },
    {
      question: 'How does the platform uncover hidden risks in sub-tier suppliers that we do not contract with directly?',
      answer: 'While your enterprise contracts directly with primary suppliers, those vendors frequently source specialized raw materials and microcomponents from the exact same sub-tier processors. Our graph intelligence engine ingests global bills of lading, customs filings, and industry dependency datasets to map the multi-echelon supply network, exposing when multiple primary vendors share a single vulnerable sub-tier supplier.'
    },
    {
      question: 'What safeguards prevent automated risk holds from unnecessarily disrupting critical ongoing operations?',
      answer: 'We implement multi-tiered governance guardrails with calibrated risk thresholds. Minor risk score fluctuations generate informational alerts for category managers, while severe breach conditions trigger pre-authorized actions such as requiring secondary approval on purchase orders or placing new delivery blocks. Critical operations cannot be halted without designated human review cockpits confirming the mitigation action.'
    },
    {
      question: 'How does the platform assist our enterprise with international trade sanctions compliance?',
      answer: 'Our threat engine performs real-time automated screening against global sanctions lists, politically exposed persons registries, and export control classifications. Every incoming vendor registration, purchase order, and outbound shipping manifest is verified against up-to-date international trade databases, preventing unlawful transactions and safeguarding corporate reputation.'
    },
    {
      question: 'How do risk mitigations integrate with SAP S/4HANA while maintaining a Clean Core architecture?',
      answer: 'Approved risk mitigation actions interact with SAP S/4HANA strictly through standard OData services, SAP BAPIs, and enterprise business events. Whether placing a customer credit block, adjusting credit thresholds, or updating vendor delivery tolerances, our integration operates via standard SAP Clean Core mechanisms without custom database table modifications or bespoke ABAP overrides.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0070C0] selection:text-white antialiased overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION (AI Agents Style Full Bleed Panoramic Background) */}
      {/* IMAGE: /images/digital-intelligence/risk_intelligence_threat_sensing.jpg */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">
        {/* Full-Bleed 16:9 Panoramic Image - AI Agents Style */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/digital-intelligence/risk_intelligence_threat_sensing.jpg"
            alt="Enterprise Risk Intelligence Systemic Threat Sensing & Governance"
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
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Threat Sensing &amp; Risk Intelligence</span>
                </div>
              </div>

              {/* Animated Headline with High-Contrast Typography */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
              >
                Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-200">
                  Risk Intelligence &amp; Systemic Threat Sensing
                </span>
              </h1>

              {/* Subtitle with High Legibility */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal pt-1 drop-shadow-md">
                Transition from retrospective compliance audits to autonomous, continuous risk intelligence. Monitor multi-tier vendor vulnerabilities, counterparty credit defaults, regulatory shifts, and supply chain bottlenecks in real time with predictive early-warning radar integrated into SAP Clean Core.
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
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Autonomous Threat Radar</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-sm">
                <Workflow className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Multi-Tier Counterparty Mapping</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 shadow-sm">
                <Server className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Automated SAP ERP Holds</span>
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
              Continuous Risk Radar Engineered for Enterprise Protection
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Periodic checklists miss emergent operational vulnerabilities. Our intelligence fabric monitors thousands of internal and external threat signals continuously.
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
                Eliminate Blind Spots Across Global Enterprise Operations
              </h2>
              
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Most enterprises only discover critical counterparty insolvency or regulatory non-compliance after contracts fail or shipments are held at customs. KNOOVIQ Risk Intelligence transforms risk management into a proactive shield, delivering real-time situational clarity and actionable risk mitigation playbooks.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Unified Threat Telemetry Grid</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Aggregates external market alerts, sanctions lists, financial ratings, and internal transactional metrics into a unified risk dashboard.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Automated Compensating Mitigations</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Traces how localized supplier failures ripple through work-in-progress inventory, finished goods, and revenue timing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Immutable Audit Lineage</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Records every evaluated risk signal, algorithmic risk determination, and executive mitigation decision with complete cryptographic traceability.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Dashboard Screen (5th Image: Eliminate Blind Spots Across Global Enterprise Operations) */}
            <div className="lg:col-span-6 flex justify-center items-center w-full">
              <div className="relative w-full rounded-3xl border border-slate-200 shadow-xl overflow-hidden group h-[380px] sm:h-[440px] bg-slate-900">
                <img
                  src="/images/digital-intelligence/eliminate_blind_spots_enterprise_operations.jpg"
                  alt="Eliminate Blind Spots Across Global Enterprise Operations"
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
              A Continuous Autonomous Risk Lifecycle
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Experience how external risk signals are detected, evaluated against enterprise tolerance thresholds, and mitigated automatically.
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
      {/* SECTION 5: STRATEGIC RISK DOMAINS (Clean 6-Card Grid)                     */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              STRATEGIC RISK DOMAINS
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Protection Across Core Corporate Vectors
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Pre-configured risk sensing models and automated response workflows tailored to critical corporate functions across the enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {riskDomains.map((domain, idx) => (
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
              Contrast autonomous continuous risk intelligence against periodic manual audits, and inspect our full-stack enterprise risk architecture.
            </p>

            {/* Simple Tab Switcher */}
            <div className="flex justify-center gap-2 mt-8">
              <button
                onClick={() => setActiveTab('comparison')}
                className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all ${
                  activeTab === 'comparison'
                    ? 'bg-[#0070C0] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                Transformation Comparison Matrix
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all ${
                  activeTab === 'architecture'
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
                      <th className="py-4 px-6 text-slate-500">Periodic Manual Audits &amp; Checklists</th>
                      <th className="py-4 px-6 text-[#0070C0] bg-sky-50/50">KNOOVIQ Autonomous Risk Intelligence</th>
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
                  alt="KNOOVIQ Full-Stack Risk Intelligence Architecture"
                  className="w-full h-[400px] sm:h-[480px] object-cover rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Threat Radar &amp; Signal Bus</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-throughput ingestion connecting credit feeds, regulatory watchlists, news feeds, and environmental sensors with zero lag.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Systemic Graph Analytics Core</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Graph neural networks mapping enterprise balance sheets, dependency matrices, and multi-tier supplier relationships.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Clean-Core Mitigation Engine</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Secure connectors executing automated credit adjustments, vendor holds, and executive escalations in SAP S/4HANA via native BAPIs.
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
              Executive FAQs: Enterprise Risk Intelligence
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Essential answers addressing continuous threat sensing, multi-tier supply visibility, compliance auditability, and SAP Clean Core controls.
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
                    className={`h-5 w-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      activeFaq === idx ? 'rotate-180 text-[#0070C0]' : ''
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
            FORTIFY ENTERPRISE GOVERNANCE
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready to Build an Autonomous Early-Warning Shield for Your Business?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Partner with KNOOVIQ to benchmark your enterprise risk exposure, map multi-tier supply vulnerabilities, and deploy continuous risk intelligence integrated with SAP S/4HANA.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact ? onOpenContact('Risk Intelligence Workshop') : null}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#0070C0] shadow-xl hover:bg-sky-50 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Schedule Risk Intelligence Workshop</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <Link
              to="/digital-intelligence/business-performance-insights"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-4 text-sm font-semibold text-white hover:bg-white/20 backdrop-blur-md transition-all cursor-pointer"
            >
              <span>Explore Business Performance Insights</span>
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
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider">
                  Enterprise Risk Intelligence &amp; Systemic Threat Sensing
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
                src="/images/digital-intelligence/risk_intelligence_threat_sensing.jpg"
                alt="Enterprise Risk Intelligence Architecture Full View"
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

export default RiskIntelligencePage;
