import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Briefcase, 
  Layers, 
  RefreshCw, 
  Server, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Bot,
  Cloud,
  Rocket,
  Database,
  Boxes,
  Users,
  ShoppingBag,
  Store,
  DollarSign,
  Factory,
  BarChart3,
  ShieldCheck,
  ChevronDown,
  HelpCircle,
  Clock,
  Compass,
  Zap,
  Globe2,
  Check
} from 'lucide-react';
import { DETAILED_SOLUTIONS_DATA } from '../data/knooviqData';

export const SolutionsPage: React.FC<{ onOpenContact: (topic?: string) => void }> = ({ onOpenContact }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const solutions = Object.values(DETAILED_SOLUTIONS_DATA);

  const toggleFaq = (idx: number) => {
    setActiveFaq(prev => prev === idx ? null : idx);
  };

  const getSolutionIcon = (slug: string) => {
    switch (slug) {
      case 'sap-business-ai': return <Bot className="h-6 w-6 text-[#00A3E0]" />;
      case 'rise-with-sap': return <Cloud className="h-6 w-6 text-blue-500" />;
      case 'grow-with-sap': return <Rocket className="h-6 w-6 text-emerald-500" />;
      case 'sap-btp': return <Layers className="h-6 w-6 text-purple-500" />;
      case 'sap-datasphere': return <Database className="h-6 w-6 text-indigo-500" />;
      case 'sap-s4hana': return <Cpu className="h-6 w-6 text-[#00A3E0]" />;
      case 'sap-supply-chain': return <Boxes className="h-6 w-6 text-cyan-500" />;
      case 'sap-ariba': return <ShoppingBag className="h-6 w-6 text-rose-500" />;
      case 'sap-successfactors': return <Users className="h-6 w-6 text-emerald-500" />;
      case 'sap-cx': return <Store className="h-6 w-6 text-amber-500" />;
      case 'sap-consulting': return <Briefcase className="h-6 w-6 text-sky-500" />;
      case 'sap-implementation': return <Layers className="h-6 w-6 text-indigo-500" />;
      case 'sap-migration': return <RefreshCw className="h-6 w-6 text-amber-500" />;
      case 'sap-support': return <Server className="h-6 w-6 text-emerald-500" />;
      default: return <Cpu className="h-6 w-6 text-[#00A3E0]" />;
    }
  };

  const CORE_PILLARS = [
    {
      id: 'digital-core',
      num: '01',
      title: 'Digital Core Transformation',
      subtitle: 'SAP S/4HANA Cloud, Clean Core & RISE with SAP',
      description: 'Replace fragmented legacy ERP architectures with an agile, future-ready digital core. Our proven methodologies (Greenfield, Brownfield, and Selective Data Transition) modernize your enterprise nerve center while maintaining zero modifications to the core.',
      icon: <Cpu className="w-7 h-7 text-[#00A3E0]" />,
      accentColor: 'from-blue-600/20 to-sky-500/10 border-sky-400/30 text-sky-500',
      tag: 'CORE FOUNDATION',
      outcomes: [
        { metric: '40–60%', label: 'Reduction in manual process effort' },
        { metric: '3–9 Mo', label: 'Average implementation timeline' },
        { metric: '100%', label: 'Clean core extensibility via BTP' }
      ],
      highlights: [
        'S/4HANA Cloud (Public & Private Editions)',
        'RISE with SAP business transformation as a service',
        'GROW with SAP for fast-scaling mid-market enterprises',
        'Clean Core compliance & ABAP Cloud extensibility',
        'Selective Data Transition (SDT) with near-zero downtime'
      ],
      path: '/solutions/sap-s4hana'
    },
    {
      id: 'supply-chain',
      num: '02',
      title: 'Intelligent Supply Chain',
      subtitle: 'SAP IBP, Extended Warehouse (EWM) & Transportation (TM)',
      description: 'End-to-end supply chain synchronization from long-term demand planning to last-mile fulfillment. Build resilient, self-orchestrating supply networks that predict disruption and automate real-time inventory rebalancing.',
      icon: <Boxes className="w-7 h-7 text-indigo-500" />,
      accentColor: 'from-indigo-600/20 to-purple-500/10 border-indigo-400/30 text-indigo-500',
      tag: 'LOGISTICS & RESILIENCE',
      outcomes: [
        { metric: '25%', label: 'Reduction in inventory carrying costs' },
        { metric: '98%', label: 'On-Time In-Full (OTIF) delivery rate' },
        { metric: '100%', label: 'End-to-end multi-echelon visibility' }
      ],
      highlights: [
        'SAP Integrated Business Planning (IBP) demand-supply matching',
        'SAP Extended Warehouse Management (EWM) automated robotics',
        'SAP Transportation Management (TM) intermodal optimization',
        'Global Track & Trace (GTT) with live sensor telemetry',
        'Intelligent Supplier Collaboration via SAP Business Network'
      ],
      path: '/solutions/sap-supply-chain'
    },
    {
      id: 'financial-modernization',
      num: '03',
      title: 'Financial Modernization',
      subtitle: 'Real-Time Accounting, Touchless Cash & Group Reporting',
      description: 'Transform finance from a historical record-keeping function into a strategic foresight engine. Unify transactional financial accounting and management control in the Universal Journal (ACDOCA) with automated reconciliation.',
      icon: <DollarSign className="w-7 h-7 text-emerald-500" />,
      accentColor: 'from-emerald-600/20 to-teal-500/10 border-emerald-400/30 text-emerald-500',
      tag: 'CFO EXCELLENCE',
      outcomes: [
        { metric: '50%', label: 'Faster financial period-end closing' },
        { metric: '90%', label: 'Automated bank & cash reconciliation' },
        { metric: '0-Day', label: 'Continuous audit & statutory readiness' }
      ],
      highlights: [
        'Universal Journal (ACDOCA) single source of financial truth',
        'Intelligent Cash Application with machine learning matching',
        'SAP Group Reporting for multi-entity consolidation',
        'Treasury & Risk Management (TRM) with FX exposure control',
        'Automated India GST, E-Invoicing & E-Way Bill integration'
      ],
      path: '/solutions/sap-finance'
    },
    {
      id: 'smart-manufacturing',
      num: '04',
      title: 'Smart Manufacturing & Industry 4.0',
      subtitle: 'Connected Shop Floor, Predictive Maintenance & Digital Twin',
      description: 'Bridge the divide between Information Technology (IT) and Operational Technology (OT). Streamline production scheduling, enforce automated quality controls, and predict asset failures before downtime occurs.',
      icon: <Factory className="w-7 h-7 text-amber-500" />,
      accentColor: 'from-amber-600/20 to-orange-500/10 border-amber-400/30 text-amber-500',
      tag: 'INDUSTRY 4.0',
      outcomes: [
        { metric: '15–20%', label: 'Overall Equipment Effectiveness (OEE) lift' },
        { metric: '35%', label: 'Decrease in unplanned machine downtime' },
        { metric: '100%', label: 'Batch genealogy & compliance audit trail' }
      ],
      highlights: [
        'SAP Digital Manufacturing (DM) cloud MES execution',
        'Production Planning & Detailed Scheduling (PP/DS)',
        'Enterprise Asset Management (EAM) with IoT vibration analysis',
        'Quality Management (QM) with automated vision inspection',
        'Shop floor PLC/SCADA integration via SAP BTP'
      ],
      path: '/solutions/asset-management'
    },
    {
      id: 'retail-optimization',
      num: '05',
      title: 'Retail & Omnichannel Optimization',
      subtitle: 'Unified Commerce, Assortment Planning & Customer Journey',
      description: 'Deliver seamless customer experiences across physical stores, digital marketplaces, and mobile apps. Real-time POS integration, AI-driven merchandise replenishment, and personalized customer loyalty.',
      icon: <Store className="w-7 h-7 text-rose-500" />,
      accentColor: 'from-rose-600/20 to-pink-500/10 border-rose-400/30 text-rose-500',
      tag: 'OMNICHANNEL COMMERCE',
      outcomes: [
        { metric: '30%', label: 'Reduction in retail stockout occurrences' },
        { metric: '4x', label: 'Faster omnichannel order fulfillment' },
        { metric: '25%', label: 'Increase in repeat customer lifetime value' }
      ],
      highlights: [
        'SAP S/4HANA Retail & Fashion merchandise management',
        'Omnichannel inventory visibility across stores & DCs',
        'Real-time POS data harmonization & dynamic promotions',
        'SAP Customer Experience (CX) & Commerce Cloud integration',
        'AI-driven localized demand forecasting & markdown optimization'
      ],
      path: '/solutions/sap-cx'
    },
    {
      id: 'data-analytics',
      num: '06',
      title: 'Data & Analytics Modernization',
      subtitle: 'SAP Datasphere, Analytics Cloud (SAC) & Business AI',
      description: 'Turn distributed transactional data into strategic intelligence. Deploy a business data fabric connecting SAP and non-SAP datasets without data replication, coupled with augmented executive dashboards and Joule copilot.',
      icon: <BarChart3 className="w-7 h-7 text-[#00A3E0]" />,
      accentColor: 'from-sky-600/20 to-cyan-500/10 border-cyan-400/30 text-[#00A3E0]',
      tag: 'GEN AI & DATA FABRIC',
      outcomes: [
        { metric: '90%', label: 'Reduction in manual spreadsheet reporting' },
        { metric: '<1s', label: 'Live query response across billions of rows' },
        { metric: '100%', label: 'Grounded enterprise AI without data leak' }
      ],
      highlights: [
        'SAP Datasphere business data fabric & zero-copy federation',
        'SAP Analytics Cloud (SAC) live stories & collaborative xP&A',
        'SAP Business AI & Joule generative copilot across SAP suite',
        'Autonomous AI Agents for finance & supply chain dispute resolution',
        'Bi-directional query pushdown to Snowflake, BigQuery & Databricks'
      ],
      path: '/technology/data-analytics-ai'
    }
  ];

  const FAQS = [
    {
      q: 'What enterprise SAP solutions does KNOOVIQ deliver?',
      a: 'KNOOVIQ delivers six core enterprise SAP solution practices: Digital Core Transformation (SAP S/4HANA Cloud), Intelligent Supply Chain (SAP IBP, EWM, TM), Financial Modernization (S/4HANA Finance, Cash App), Smart Manufacturing (SAP DM, PP, QM), Retail Optimization (S/4HANA Retail, Omnichannel), and Data & Analytics Modernization (SAP Datasphere, SAC, Business AI).'
    },
    {
      q: 'How is KNOOVIQ’s solutions delivery methodology structured?',
      a: 'Our engagements are outcome-driven — scoped around verifiable business KPIs (such as 50% faster financial close, 25% inventory reduction, and zero-day compliance). We use the accelerated One Piece Flow framework and SAP Clean Core standards, decoupling custom extensions onto SAP BTP to preserve continuous upgradeability.'
    },
    {
      q: 'Can KNOOVIQ manage our complete ECC to S/4HANA migration?',
      a: 'Yes. KNOOVIQ executes end-to-end S/4HANA migrations across all three recognized paths: Greenfield (new implementation with process re-engineering), Brownfield (system conversion with custom code remediation), and Selective Data Transition (SDT - migrating historical transactional data while harmonizing organizational structures).'
    },
    {
      q: 'What is the difference between RISE with SAP and GROW with SAP?',
      a: 'RISE with SAP is a holistic business-transformation-as-a-service offering designed for enterprises migrating to SAP S/4HANA Cloud Private Edition, bundling cloud infrastructure, technical managed services, and SAP software under a single contract. GROW with SAP is designed for mid-market and fast-scaling organizations adopting SAP S/4HANA Cloud Public Edition with pre-configured industry best practices and rapid multi-week go-lives.'
    },
    {
      q: 'Does KNOOVIQ provide 24/7 post-go-live Application Support (AMS)?',
      a: 'Yes. Our enterprise AMS practice provides 24/7/365 SLA-governed support, SAP Basis administration, proactive monitoring, automated patch management, and continuous optimization under strict ITIL standards.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* =========================================================================
          HERO SECTION: Business-Outcome-Driven SAP Enterprise Solutions
          ========================================================================= */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-900 via-[#0A1931] to-slate-900 text-white">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#00A3E0] filter blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-96 h-96 rounded-full bg-indigo-600 filter blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/10 px-4 py-1.5 shadow-sm mb-6 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-200">
              SAP Platinum Partner Solutions Portfolio
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-6 max-w-5xl mx-auto">
            Business-Outcome-Driven <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              SAP Enterprise Solutions
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
            End-to-end SAP solutions architected around your strategic business outcomes — measurable ROI, clean core governance, operational resilience, and sustained competitive advantage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact('Solutions Advisory Consultation')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#00A3E0] hover:bg-[#008BBF] text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#00A3E0]/30 flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              <span>Talk to a Solutions Expert</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => onOpenContact('Discovery Architecture Workshop')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm tracking-wide transition-all backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <Compass className="h-4 w-4 text-cyan-300" />
              <span>Book Discovery Workshop</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STICKY PILL NAVIGATOR (Quick Anchor Links)
          ========================================================================= */}
      <section className="sticky top-[68px] z-30 bg-white/95 dark:bg-[#070E1C]/95 backdrop-blur-md border-y border-slate-200 dark:border-white/10 shadow-sm py-3 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 text-xs font-semibold">
            {CORE_PILLARS.map((pillar) => (
              <a
                key={pillar.id}
                href={`#${pillar.id}`}
                className="px-3.5 py-1.5 rounded-xl whitespace-nowrap text-slate-700 dark:text-slate-300 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors flex items-center gap-1.5 border border-transparent hover:border-slate-300 dark:hover:border-white/20"
              >
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500">{pillar.num}</span>
                <span>{pillar.title}</span>
              </a>
            ))}
            <a
              href="#full-directory"
              className="px-3.5 py-1.5 rounded-xl whitespace-nowrap bg-sky-50 dark:bg-sky-500/10 text-[#00A3E0] dark:text-cyan-300 font-bold border border-sky-200 dark:border-sky-500/20 ml-auto flex items-center gap-1"
            >
              <span>Full Directory</span>
              <ChevronDown className="h-3 w-3" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6 CORE ENTERPRISE PILLARS (Detailed Cards)
          ========================================================================= */}
      <div className="py-16 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {CORE_PILLARS.map((pillar, idx) => (
          <section
            key={pillar.id}
            id={pillar.id}
            className="scroll-mt-36 rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-[#070E1C] p-6 sm:p-8 lg:p-12 shadow-md transition-all hover:border-[#00A3E0]/40"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Narrative & Highlights (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/15 text-[#00A3E0] dark:text-cyan-300">
                    PILLAR {pillar.num} &bull; {pillar.tag}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    {pillar.title}
                  </h2>
                  <p className="text-sm sm:text-base font-semibold text-[#00A3E0] dark:text-cyan-300 mt-1">
                    {pillar.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {pillar.description}
                </p>

                {/* Key Capabilities List */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-slate-100">
                    Core Architectural Capabilities:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pillar.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-[#00A3E0] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to={pillar.path}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#00A3E0] hover:bg-[#008BBF] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md"
                  >
                    <span>Explore Practice</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <button
                    onClick={() => onOpenContact(`Consultation: ${pillar.title}`)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/15 text-slate-800 dark:text-white border border-slate-300 dark:border-white/20 font-bold text-xs tracking-wider uppercase transition-all"
                  >
                    <span>Request Scoping</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Outcomes & Impact Metrics (5 cols) */}
              <div className="lg:col-span-5 bg-white dark:bg-[#0B1528] rounded-2xl border border-slate-200 dark:border-white/10 p-6 sm:p-7 shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-white/10">
                  <div className="p-3 rounded-xl bg-sky-50 dark:bg-cyan-500/10 border border-sky-200 dark:border-cyan-500/20">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                      Targeted Business ROI
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Standard KPI lift benchmarked across 200+ engagements
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {pillar.outcomes.map((out, oIdx) => (
                    <div key={oIdx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#050B17] border border-slate-100 dark:border-white/5 flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300 max-w-[65%]">
                        {out.label}
                      </span>
                      <span className="font-display text-xl font-black text-[#00A3E0] dark:text-cyan-300">
                        {out.metric}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-cyan-950/20 border border-blue-200 dark:border-cyan-500/30 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  <p className="font-semibold text-blue-900 dark:text-cyan-200 mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-[#00A3E0]" />
                    <span>KNOOVIQ One Piece Flow Assurance</span>
                  </p>
                  Senior architect oversight on every sprint. Governance-backed delivery ensuring audit-readiness and zero core code contamination.
                </div>
              </div>

            </div>
          </section>
        ))}
      </div>

      {/* =========================================================================
          FULL SPECIALIZED SOLUTIONS DIRECTORY (Grid of All Modules)
          ========================================================================= */}
      <section id="full-directory" className="py-16 bg-slate-50 dark:bg-[#070E1C] border-t border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-300">
              Enterprise Solution Index
            </span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
              Complete Portfolio of Enterprise SAP Solution Modules
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
              Explore dedicated deep-dive documentation, technical specifications, and integration frameworks across our complete SAP practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, idx) => (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B1528] p-6 flex flex-col justify-between shadow-sm hover:border-[#00A3E0] dark:hover:border-cyan-400/40 transition-all hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 dark:bg-[#050B17] border border-slate-200 dark:border-white/10">
                      {getSolutionIcon(sol.slug)}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-sky-50 dark:bg-cyan-500/10 text-[#00A3E0] dark:text-cyan-300 border border-sky-200 dark:border-cyan-500/30">
                      Enterprise Practice
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {sol.title}
                  </h3>

                  <p className="text-xs text-[#00A3E0] dark:text-cyan-300 font-semibold mb-3">
                    {sol.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {sol.heroDescription}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {sol.deliverables.slice(0, 3).map((item: string, dIdx: number) => (
                      <div key={dIdx} className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-300">
                        <Check className="h-3.5 w-3.5 text-[#00A3E0] flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-3">
                  <Link
                    to={`/solutions/${sol.slug}`}
                    className="text-xs font-bold text-[#00A3E0] hover:underline flex items-center gap-1"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>

                  <button
                    onClick={() => onOpenContact(`Solution: ${sol.title}`)}
                    className="rounded-lg bg-slate-100 dark:bg-white/10 hover:bg-[#00A3E0] dark:hover:bg-cyan-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:text-white transition-all"
                  >
                    Request Briefing
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ENTERPRISE FAQ SECTION (Matching Savic's Standard Questions)
          ========================================================================= */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
            <HelpCircle className="h-3.5 w-3.5 text-[#00A3E0]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Key Inquiries on KNOOVIQ's Enterprise SAP Solutions
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
            Clear technical answers regarding delivery timelines, clean core governance, and SLA commitments.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B1528] overflow-hidden transition-all shadow-sm"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-5 text-left text-sm font-bold text-slate-900 dark:text-white hover:text-[#00A3E0] transition-colors"
              >
                <span className="pr-4">{faq.q}</span>
                <ChevronDown className={`h-4 w-4 text-[#00A3E0] transition-transform duration-200 flex-shrink-0 ${activeFaq === idx ? 'rotate-180' : ''}`} />
              </button>

              {activeFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          EXECUTIVE CONSULTATION CTA
          ========================================================================= */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-[#0A1931] to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-300">
            START YOUR SAP TRANSFORMATION TODAY
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight max-w-3xl mx-auto">
            Ready to Architect an Intelligent, Clean-Core Enterprise Landscape?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Connect directly with a Senior SAP Solution Architect to audit your current system readiness, define your cloud transformation roadmap, and calculate projected ROI.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact('Executive SAP Roadmap Consultation')}
              className="px-8 py-3.5 rounded-2xl bg-[#00A3E0] hover:bg-[#008BBF] text-white font-bold text-sm tracking-wide transition-all shadow-lg flex items-center gap-2"
            >
              <span>Schedule Architecture Session</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/technology/data-analytics-ai"
              className="px-7 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm tracking-wide transition-all"
            >
              <span>Explore Data & AI Practice</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
