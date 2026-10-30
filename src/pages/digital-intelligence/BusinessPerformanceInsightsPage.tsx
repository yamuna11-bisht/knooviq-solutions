import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BrainCircuit,
  Sparkles,
  Workflow,
  Cpu,
  Server,
  Receipt,
  Boxes,
  Briefcase,
  Truck,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  ChevronRight,
  Zap,
  GitBranch,
  CheckSquare,
  LineChart,
  Maximize2,
  X
} from 'lucide-react';

interface BusinessPerformanceInsightsPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const BusinessPerformanceInsightsPage: React.FC<BusinessPerformanceInsightsPageProps> = ({
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

  // Strategic Performance Domains
  const performanceDomains = [
    {
      title: 'Executive Profitability & Margin Management',
      category: 'Corporate Finance',
      icon: Receipt,
      desc: 'Deconstructs gross, operating, and net margin variances across business units, identifying hidden profit erosion across product portfolios.',
      erp: 'SAP S/4HANA Finance'
    },
    {
      title: 'Commercial Sales & Revenue Quality',
      category: 'Revenue Operations',
      icon: Briefcase,
      desc: 'Evaluates customer acquisition expenses, recurring contract renewals, discount discipline, and pipeline conversion velocity across global territories.',
      erp: 'SAP S/4HANA Sales & Distribution'
    },
    {
      title: 'Manufacturing Cost & Plant Productivity',
      category: 'Plant Operations',
      icon: Cpu,
      desc: 'Monitors overall equipment effectiveness, scrap generation rates, conversion costs per unit, and energy efficiency across factory networks.',
      erp: 'SAP Digital Supply Chain'
    },
    {
      title: 'Supply Chain Cost-to-Serve Optimization',
      category: 'Logistics Operations',
      icon: Truck,
      desc: 'Tracks end-to-end logistics fulfillment expenses, warehouse handling overhead, and expedited freight costs down to individual customer orders.',
      erp: 'SAP Extended Warehouse Management'
    },
    {
      title: 'Working Capital & Cash Conversion Cycle',
      category: 'Treasury Operations',
      icon: Boxes,
      desc: 'Analyzes days sales outstanding, inventory holding durations, and days payable outstanding to unlock trapped operational liquidity.',
      erp: 'SAP Cash Management'
    },
    {
      title: 'Human Capital Productivity & Value Creation',
      category: 'Talent Management',
      icon: Workflow,
      desc: 'Evaluates revenue per employee, workforce capacity utilization, skill deployment velocity, and retention trends across high-performing teams.',
      erp: 'SAP SuccessFactors'
    }
  ];

  // Core Transformation Pillars
  const transformationPillars = [
    {
      icon: BrainCircuit,
      title: 'Autonomous Variance Diagnostics',
      desc: 'Dissects unexplained revenue shortfalls and margin dilution into precise causal components across raw material inflation, currency shifts, and freight friction.'
    },
    {
      icon: Workflow,
      title: 'Dynamic Value-Driver Trees',
      desc: 'Interconnects operational frontline metrics—such as machine uptime and delivery times—with high-level financial return on capital and operating margins.'
    },
    {
      icon: LineChart,
      title: 'Real-Time Margin Decomposition',
      desc: 'Tracks customer, product, and regional profitability down to individual contract lines, exposing profit drains before fiscal period close.'
    },
    {
      icon: Server,
      title: 'Clean-Core Strategic Alignment',
      desc: 'Pushes corrective planning revisions, margin thresholds, and budget reallocations directly into SAP S/4HANA Finance via clean-core interfaces.'
    }
  ];

  // Simple Workflow Lifecycle
  const workflowSteps = [
    {
      step: 'HARMONIZE',
      title: 'Unified Enterprise Telemetry Capture',
      desc: 'Transactional journal entries, plant production runs, sales bookings, and supply chain expenses harmonize into a single semantic performance mesh.',
      icon: Zap
    },
    {
      step: 'DIAGNOSE',
      title: 'Algorithmic Variance Attribution',
      desc: 'Decomposition models isolate underlying drivers behind performance deviations, stripping away seasonal noise to highlight operational fundamentals.',
      icon: GitBranch
    },
    {
      step: 'CALIBRATE',
      title: 'Strategic Policy Rebalancing',
      desc: 'Validated managerial corrective actions deploy across ERP master planning records, updating pricing floors, cost targets, and resource allocations.',
      icon: CheckSquare
    }
  ];

  // Comparative Matrix (Zero numbers, stats, or percentages)
  const comparisonRows = [
    {
      feature: 'Reporting Latency',
      legacy: 'Lagging retrospective reports finalized weeks after monthly accounting close',
      knooviq: 'Continuous real-time operational P&L telemetry refreshed with every transaction'
    },
    {
      feature: 'Root-Cause Diagnostic',
      legacy: 'Static charts leaving variance investigations to days of manual spreadsheet queries',
      knooviq: 'Autonomous causal attribution instantly explaining the drivers behind every deviation'
    },
    {
      feature: 'Driver Interconnectivity',
      legacy: 'Disconnected departmental KPIs lacking causal linkage to financial statements',
      knooviq: 'Dynamic value-driver trees mathematically linking operational metrics to enterprise margins'
    },
    {
      feature: 'Data Granularity',
      legacy: 'High-level aggregated summaries incapable of drilling down to individual root causes',
      knooviq: 'Seamless drill-through from board-level indicators to raw transactional ledger postings'
    },
    {
      feature: 'Decision Actionability',
      legacy: 'Passive reading materials without guidance or automated corrective options',
      knooviq: 'Prescriptive remediation workflows with validated scenario trade-offs'
    },
    {
      feature: 'SAP ERP Alignment',
      legacy: 'Manual periodic extracts prone to data discrepancies and stale calculations',
      knooviq: 'Native Clean-Core integration utilizing standard OData services and the SAP Universal Journal'
    }
  ];

  // Executive FAQs (Scrubbed of All Numbers, Stats, and Percentages)
  const faqs = [
    {
      question: 'How does algorithmic performance observability differ from conventional executive scorecards?',
      answer: 'Conventional corporate scorecards are passive and retrospective—they display static indicators of past performance weeks after the accounting period closes. When an indicator turns red, managers must conduct time-consuming manual investigations to determine what went wrong. KNOOVIQ Business Performance Insights operates as an active observability engine. It continuously tracks operational P&L flows in real time, automatically isolates the exact root causes behind margin variances, and connects operational frontline levers directly to financial returns.'
    },
    {
      question: 'What are value-driver trees and how do they help leadership make better decisions?',
      answer: 'Value-driver trees are mathematical graph networks that visualize how operational metrics—such as equipment changeover times, transport load factors, and vendor discount capture—compound into overarching corporate metrics like return on invested capital. Instead of managing financial metrics in isolation from operations, leadership can trace how an improvement in a specific shop-floor parameter directly impacts enterprise profitability.'
    },
    {
      question: 'Can executive teams drill down from high-level portfolio summaries into individual transactional line items?',
      answer: 'Yes. Our platform maintains continuous lineage down to the underlying sub-ledger entries. An executive observing an unexpected regional margin drop can drill through the value-driver tree to inspect the specific customer contract, freight lane surcharge, or manufacturing batch variance that caused the deviation, eliminating ambiguity during executive reviews.'
    },
    {
      question: 'How does the platform prevent information overload for senior executive leadership?',
      answer: 'The platform uses automated anomaly detection and materiality filters to highlight only the statistically significant variances that truly impact corporate strategy. Rather than presenting overwhelming tables of data, the system curates contextual executive briefs that explain the key operational drivers, potential trajectory risks, and recommended mitigation actions.'
    },
    {
      question: 'How do performance insights and corrective actions integrate with SAP S/4HANA?',
      answer: 'The platform connects directly to the SAP Universal Journal and operational sub-ledgers using standard OData APIs, BAPIs, and enterprise business events. When leadership approves corrective budget reallocations or margin threshold updates, changes post directly to SAP S/4HANA through native clean-core protocols, ensuring full audit compliance without modifying core database structures.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0070C0] selection:text-white antialiased overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION (AI Agents Style Full Bleed Panoramic Background) */}
      {/* IMAGE: /images/digital-intelligence/business_performance_insights_value_driver_trees.png */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">
        {/* Full-Bleed 16:9 Panoramic Image - AI Agents Style */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/digital-intelligence/business_performance_insights_value_driver_trees.png"
            alt="Enterprise Business Performance Insights & Value Driver Trees"
            className="w-full h-full object-cover object-right select-none"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
          {/* Lighter directional scrim for readable text and natural clear visual */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent pointer-events-none" />
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
                  <LineChart className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Value Driver Trees &amp; Observability</span>
                </div>
              </div>

              {/* Animated Headline with High-Contrast Typography */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
              >
                Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-200">
                  Business Performance Insights &amp; Value Drivers
                </span>
              </h1>

              {/* Subtitle with High Legibility */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal pt-1 drop-shadow-md">
                Transform static corporate scorecards into active operational value-driver trees. Unify real-time margin observability, autonomous variance root-cause diagnostics, and strategic capital allocation across your enterprise with SAP Clean Core.
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
                <span>Dynamic Value-Driver Trees</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-sm">
                <Workflow className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Variance Root-Cause Attribution</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 shadow-sm">
                <Server className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Universal Journal Sync</span>
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
              Algorithmic Performance Observability for Executive Clarity
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Traditional executive reports deliver disconnected historical snapshots. Our performance architecture maps operational drivers directly to financial outcomes in real time.
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
                Connect Frontline Operational Work to Boardroom Performance
              </h2>
              
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                In most enterprises, executive strategy and shop-floor execution are separated by latency and disconnected reporting silos. KNOOVIQ Business Performance Insights bridges this divide, establishing a living digital ledger that reflects how day-to-day decisions compound into bottom-line shareholder value.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Automated Multi-Horizon Reconciliation</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Continuously reconciles operational run-rates against long-term strategic plans and financial guidance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Sub-Ledger Granularity</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Drills seamlessly from global executive summary indices into line-item general ledger postings and inventory batches.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Actionable Remediation Triggers</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Suggests targeted managerial interventions when operational units deviate from target performance corridors.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Dashboard Screen (2nd Image: Connect Frontline Operational Work to Boardroom Performance) */}
            <div className="lg:col-span-6 flex justify-center items-center w-full">
              <div className="relative w-full rounded-3xl border border-slate-200 shadow-xl overflow-hidden group h-[380px] sm:h-[440px] bg-slate-900">
                <img
                  src="/images/digital-intelligence/connect_frontline_operational_boardroom_performance.jpg"
                  alt="Connect Frontline Operational Work to Boardroom Performance"
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
              A Continuous Performance Optimization Cycle
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Experience how enterprise telemetry is synthesized, diagnosed for variance root causes, and translated into targeted operational adjustments.
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
      {/* SECTION 5: STRATEGIC PERFORMANCE DOMAINS (Clean 6-Card Grid)              */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              STRATEGIC PERFORMANCE DOMAINS
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineered for Comprehensive Enterprise Visibility
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Pre-configured performance frameworks and value-driver trees tailored to primary operational pillars across the organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {performanceDomains.map((domain, idx) => (
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
              Contrast dynamic algorithmic performance insights against legacy static scorecards, and inspect our full-stack enterprise observability architecture.
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
                      <th className="py-4 px-6 text-slate-500">Static Periodic Scorecards</th>
                      <th className="py-4 px-6 text-[#0070C0] bg-sky-50/50">KNOOVIQ Algorithmic Performance Insights</th>
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
                  alt="KNOOVIQ Full-Stack Performance Insights Architecture"
                  className="w-full h-[400px] sm:h-[480px] object-cover rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Universal Telemetry Ingestion</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Connects directly to SAP Universal Journal (ACDOCA) and operational sub-ledgers with zero data latency.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Value-Driver Diagnostic Core</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Graph neural networks mapping operational cause-and-effect paths to corporate financial outcomes.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Clean-Core Governance Sync</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-security executive workspace enabling interactive variance exploration and automated budget recalibration via BAPIs.
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
              Executive FAQs: Business Performance Insights
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Essential answers addressing variance decomposition, value-driver tree modeling, operational drill-down, and SAP Clean Core integration.
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
            MAXIMIZE STRATEGIC VALUE
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready to Transform Enterprise Scorecards into Active Value Engines?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Partner with KNOOVIQ to map your corporate value-driver trees, deploy autonomous variance diagnostics, and achieve real-time performance observability with SAP S/4HANA.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact ? onOpenContact('Business Performance Insights Workshop') : null}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#0070C0] shadow-xl hover:bg-sky-50 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Schedule Business Performance Insights Workshop</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <Link
              to="/digital-intelligence/decision-support"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-4 text-sm font-semibold text-white hover:bg-white/20 backdrop-blur-md transition-all cursor-pointer"
            >
              <span>Explore Decision Support</span>
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
                  Enterprise Business Performance Insights &amp; Value Drivers
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
                src="/images/digital-intelligence/business_performance_insights_value_driver_trees.png"
                alt="Enterprise Business Performance Architecture Full View"
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

export default BusinessPerformanceInsightsPage;
