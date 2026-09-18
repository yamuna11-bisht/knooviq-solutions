import React, { useState } from 'react';
import {
  Wallet,
  TrendingUp,
  BarChart3,
  ShieldCheck,
  Zap,
  Layers,
  Database,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Building2,
  Clock,
  Settings,
  Workflow,
  Cpu,
  FileCheck2,
  Award,
  Globe2,
  FileText,
  Bot,
  Maximize2,
  X,
  Target,
  Search,
  Check
} from 'lucide-react';

interface SapFinanceSolutionViewProps {
  onOpenContact: (topic?: string) => void;
}

export const SapFinanceSolutionView: React.FC<SapFinanceSolutionViewProps> = ({ onOpenContact }) => {
  const [activeStreamTab, setActiveStreamTab] = useState<number>(0);
  const [activeAiTab, setActiveAiTab] = useState<number>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState<boolean>(false);

  // 1. Core CFO Strategic Value Pillars (6 SAVIC Financial Domains)
  const financialPillars = [
    {
      id: 'universal-journal',
      num: '01',
      badge: 'UNIFIED SINGLE LEDGER',
      title: 'Universal Journal (ACDOCA)',
      tagline: 'Zero-Reconciliation Accounting Backbone',
      desc: 'Combines General Ledger, Profitability Analysis (CO-PA), Asset Accounting, and Material Ledger into a single, comprehensive line-item record. Eliminates separate subledger reconciliation runs.',
      outcome: '100% Reconciliation Elimination',
      icon: <Database className="w-5 h-5 text-[#00A3E0]" />
    },
    {
      id: 'fpa-planning',
      num: '02',
      badge: 'PREDICTIVE SIMULATION',
      title: 'FP&A with SAP Analytics Cloud',
      tagline: 'Driver-Based Rolling Forecasts',
      desc: 'Replaces error-prone spreadsheet budgets with live, driver-based planning directly linked to transactional actuals. Model balance sheet and cash flow scenarios with embedded machine learning.',
      outcome: '65% Faster Budgeting Cycles',
      icon: <TrendingUp className="w-5 h-5 text-emerald-500" />
    },
    {
      id: 'ai-automation',
      num: '03',
      badge: 'AUTONOMOUS OPERATIONS',
      title: 'AI Invoicing & Dispute Resolution',
      tagline: 'Joule & Generative Dispute Agents',
      desc: 'Deploys SAP Joule and generative AI agents to automatically analyze invoice discrepancies, ingest multi-format POs, resolve customer deductions, and execute touchless payment matching.',
      outcome: '85% Touchless AP Processing',
      icon: <Bot className="w-5 h-5 text-purple-500" />
    },
    {
      id: 'drc-compliance',
      num: '04',
      badge: 'GLOBAL STATUTORY MESH',
      title: 'SAP DRC & Statutory Governance',
      tagline: 'Real-Time Compliance Across 25+ Regimes',
      desc: 'Automates global e-invoicing (GST, ZATCA, Peppol, Facturae) and digital tax filings. Converts retrospective audit panic into continuous, automated compliance embedded at transaction entry.',
      outcome: '99.8% Regulatory Filing Accuracy',
      icon: <ShieldCheck className="w-5 h-5 text-sky-400" />
    },
    {
      id: 'papm-profitability',
      num: '05',
      badge: 'GRANULAR MARGIN ANALYTICS',
      title: 'SAP PaPM Performance Management',
      tagline: 'Multi-Tier Cost & Profitability Allocation',
      desc: 'Calculates high-speed profitability simulations down to customer, channel, and SKU levels in real time on SAP HANA. Handles massive multi-step allocations without batch overnight delays.',
      outcome: 'Sub-Second Margin Visibility',
      icon: <BarChart3 className="w-5 h-5 text-amber-500" />
    },
    {
      id: 'treasury-banking',
      num: '06',
      badge: 'LIQUIDITY ORCHESTRATION',
      title: 'Treasury & Banking Mesh on BTP',
      tagline: 'Real-Time Cash & Working Capital',
      desc: 'Direct host-to-host SWIFT and Open Banking integration. Automates bank statement ingestion (MT940/CAMT.053), real-time global cash position forecasting, and foreign currency FX hedging.',
      outcome: '100% Cash Visibility across Accounts',
      icon: <Wallet className="w-5 h-5 text-cyan-400" />
    }
  ];

  // 2. Interactive Financial Operations Console (5 Functional Streams)
  const functionalStreams = [
    {
      id: 'r2r',
      tab: 'Record-to-Report (R2R)',
      badge: 'CONTINUOUS FINANCIAL CLOSE',
      title: 'Accelerated Record-to-Report & Universal Journal',
      summary: 'Transforms the traumatic month-end financial close into a quiet, continuous non-event with transactions validated and reconciled in real-time as they occur.',
      capabilities: [
        { label: 'Universal Journal (ACDOCA)', detail: 'Single table recording financial accounting and management controlling dimensions simultaneously with 999+ custom extension fields.' },
        { label: 'Parallel Multi-GAAP Ledgers', detail: 'Simultaneous reporting under local statutory GAAP (e.g. IndAS, US GAAP) and IFRS with automated delta postings.' },
        { label: 'Real-Time Asset Capitalization', detail: 'Instantaneous depreciation runs and construction-in-progress (CIP) capitalization with zero offline manual journal entries.' },
        { label: 'Intercompany Matching & Reconciliation (ICMR)', detail: 'Continuous auto-matching of intercompany balances at document level without waiting for period-end cutoffs.' }
      ],
      deliverables: ['Continuous Accounting Blueprint', 'Universal Journal Chart of Accounts Schema', 'Automated Group Consolidation Rules'],
      metrics: { closeTime: '4 Days (-60%)', manualEntries: '-85%', auditTrace: '100% Sub-Line Item' }
    },
    {
      id: 'o2c',
      tab: 'Order-to-Cash (O2C)',
      badge: 'RECEIVABLES & DISPUTE INTELLIGENCE',
      title: 'Order-to-Cash, Cash Application & Dispute AI',
      summary: 'Dramatically reduces Days Sales Outstanding (DSO) by orchestrating intelligent credit management, automated customer remittance matching, and AI dispute triage.',
      capabilities: [
        { label: 'SAP Cash Application (Machine Learning)', detail: 'Automatically matches incoming electronic bank payments against open invoices even with incomplete remittance data.' },
        { label: 'AI Dispute Resolution Agent', detail: 'Automatically identifies root causes for payment shortfalls (freight variances, discount deductions, tax errors) and triggers credit memos.' },
        { label: 'Predictive Credit Risk Scoring', detail: 'Real-time credit limit evaluation assessing internal payment histories and external credit bureau rating integrations.' },
        { label: 'Automated Dunning Strategies', detail: 'Customer-segmented communication cadences that reduce payment friction and accelerate working capital velocity.' }
      ],
      deliverables: ['Smart Dispute Matrix', 'Automated Cash Allocation Rules', 'Credit Risk Governance Engine'],
      metrics: { dsoReduction: '18 Days Saved', autoMatchRate: '92% Touchless', disputeCycle: '-75% Resolution Time' }
    },
    {
      id: 'p2p',
      tab: 'Procure-to-Pay (P2P)',
      badge: 'ACCOUNTS PAYABLE & INVOICING',
      title: 'Procure-to-Pay & Touchless Invoice Management',
      summary: 'Eliminates invoice processing bottlenecks with OCR-enabled intake, automated 3-way PO matching, and dynamic early-payment discount optimization.',
      capabilities: [
        { label: 'SAP Invoice Management by OpenText', detail: 'Intelligent multi-channel invoice capture (PDF, EDI, portal, paper scan) with automated tax code and line item extraction.' },
        { label: 'Automated 3-Way Matching', detail: 'Instant matching of PO, Goods Receipt (MIGO), and Vendor Invoice (MIRO) with automated exception routing to procurement.' },
        { label: 'Duplicate Payment Interceptor', detail: 'Real-time algorithm flagging potential duplicate vendor submissions based on fuzzy invoice number and date heuristics.' },
        { label: 'Working Capital Early Pay Discounting', detail: 'Calculates optimal payment dates to maximize cash discounts (2/10 net 30) without compromising liquidity.' }
      ],
      deliverables: ['Touchless AP Framework', 'OpenText OCR Ingestion Pipeline', 'Early Payment Optimization Matrix'],
      metrics: { costPerInvoice: '-65% Reduction', touchlessRate: '88% First-Pass', discountCapture: '98% Realized' }
    },
    {
      id: 'treasury',
      tab: 'Treasury & Banking',
      badge: 'GLOBAL LIQUIDITY & BANKING MESH',
      title: 'Treasury Management & In-House Banking Mesh',
      summary: 'Connects corporate treasury directly to international banking systems via SAP BTP, providing live liquidity visibility and proactive currency hedging.',
      capabilities: [
        { label: 'Automated Bank Statement Ingestion', detail: 'Native processing of MT940, CAMT.053, and BAI2 formats with automated GL posting and customer account clearing.' },
        { label: 'SWIFT Host-to-Host Integration', detail: 'Encrypted payment file dispatch (ISO 20022 XML) with dual authorization workflows and tamper-proof audit trails.' },
        { label: 'Real-Time Cash Position Forecasting', detail: 'Rolling 30/60/90-day liquidity projections consolidating open AP, AR, and pipeline purchase commitments.' },
        { label: 'Foreign Exchange (FX) Risk Exposure', detail: 'Continuous tracking of multi-currency invoice commitments with automated hedge accounting under IFRS 9.' }
      ],
      deliverables: ['SWIFT BTP Connector Blueprint', 'Cash Forecast Topology', 'In-House Bank Routing Rules'],
      metrics: { bankReconciliation: '100% Real-Time', fxExposure: 'Zero Unhedged Surprises', idleCash: '-40% Cash Drag' }
    },
    {
      id: 'fpa',
      tab: 'FP&A & Simulation',
      badge: 'STRATEGIC ENTERPRISE PLANNING',
      title: 'Enterprise FP&A & Predictive Scenario Modeling',
      summary: 'Empowers finance executives to model macroeconomic turbulence, simulate price adjustments, and unify strategic plans across business units using SAP Analytics Cloud.',
      capabilities: [
        { label: 'Driver-Based Revenue Planning', detail: 'Connects sales volume, raw material indices, and labor inflation directly into dynamic P&L projections.' },
        { label: 'Real-Time Management Consolidation', detail: 'Multi-tier entity consolidation with automatic currency translations, minority interest eliminations, and equity pickups.' },
        { label: 'Predictive Monte Carlo Simulations', detail: 'Machine learning algorithms modeling probability distributions for supply chain shocks and demand fluctuations.' },
        { label: 'Self-Service CFO Dashboards', detail: 'Live executive dashboards with drill-down from corporate EBITDA down to specific plant and ledger journal entries.' }
      ],
      deliverables: ['SAC Financial Planning Model', 'Automated Consolidation Matrix', 'Executive CFO Cockpit Suite'],
      metrics: { forecastCycle: '1 Day vs 3 Weeks', varianceAccuracy: '94% Predictive', reportingEffort: '-70% Man-Hours' }
    }
  ];

  // 3. AI in Finance Spotlight (Joule & Specialized Agents)
  const aiFinanceAgents = [
    {
      id: 'accruals',
      title: 'Accounting Accruals Agent',
      badge: 'AUTONOMOUS JOURNAL VOUCHERS',
      tagline: 'Automated PO Accrual Postings & Review',
      description: 'Reviews unbilled purchase orders, historical delivery patterns, and vendor contracts to autonomously calculate and post monthly accrual journal vouchers, freeing accountants from manual accrual spreadsheets.',
      impact: 'Eliminates 90% of manual month-end accrual calculation workload.',
      spec: 'Powered by SAP S/4HANA Cloud Embedded AI'
    },
    {
      id: 'disputes',
      title: 'AI Dispute Resolution Agent',
      badge: 'ROOT-CAUSE DEDUCTION TRIAGE',
      tagline: 'Autonomous Commercial Dispute Analysis',
      description: 'Ingests inbound customer deduction notices, matches dispute claims against delivery proof and sales contracts, and automatically drafts resolution proposals or credit memos for approval.',
      impact: 'Reduces dispute resolution cycle time from 14 days down to 48 hours.',
      spec: 'Trained on 500K+ enterprise commercial dispute patterns'
    },
    {
      id: 'cash-app',
      title: 'Intelligent Cash Application Agent',
      badge: 'REMITTANCE REASONING',
      tagline: 'Unstructured Bank Remittance Matching',
      description: 'Reads unstructured bank payment advices, remittances sent via email, and bank statement notes. Intelligently clears complex multi-invoice customer payments with high match confidence.',
      impact: 'Achieves over 92% touchless auto-clearing for complex retail accounts.',
      spec: 'Sub-second reconciliation on SAP BTP AI Foundation'
    }
  ];

  // 4. Real Enterprise Client Case Studies (SAVIC Portfolio Proof)
  const clientStories = [
    {
      client: 'Vascon Engineers Ltd',
      industry: 'Engineering, Procurement & Construction (EPC)',
      badge: 'EPC & REAL ESTATE',
      challenge: 'Fragmented project accounting across 20+ construction job sites resulting in delayed WIP capitalization and opaque vendor retention ledgers.',
      solution: 'Implemented SAP S/4HANA Finance with integrated Project Systems (PS) and automated sub-ledger reconciliation across all construction sites.',
      outcome: 'Secured instant project profitability transparency, cut monthly close from 16 days to 4 days, and eliminated WIP valuation discrepancies.',
      kpi: '75% Faster Financial Close'
    },
    {
      client: 'IP Rings Ltd',
      industry: 'Automotive Precision Engineering',
      badge: 'AUTO COMPONENTS',
      challenge: 'Heavy reliance on manual offline spreadsheets for product costing and inventory valuation, creating reporting lag and audit friction.',
      solution: 'Deployed S/4HANA Finance with Material Ledger, actual costing in parallel currencies, and automated statutory GST compliance on SAP BTP.',
      outcome: 'Delivered accurate standard vs. actual cost variance analysis on every manufactured batch and achieved 100% auditable accounting provenance.',
      kpi: 'Zero Spreadsheet Dependency'
    },
    {
      client: 'Global Consumer Conglomerate',
      industry: 'FMCG & High-Volume Retail Distribution',
      badge: 'FMCG RETAIL',
      challenge: 'Massive daily POS payment transactions causing severe clearing bottlenecks and high invoice dispute rates from supermarket retail partners.',
      solution: 'Configured SAP Automated Clearing, Revenue Accounting and Reporting (RAR) conforming to IFRS 15, and AI Dispute Resolution agents.',
      outcome: 'Enabled touchless automated reconciliation of 150,000+ daily payment streams with instant revenue recognition and automated dunning.',
      kpi: '92% Touchless Payment Clearing'
    }
  ];

  // 5. Frequently Asked Questions
  const financeFaqs = [
    {
      q: 'How does SAP S/4HANA Universal Journal (ACDOCA) eliminate financial reconciliation?',
      a: 'In legacy SAP ECC and other ERP systems, Financial Accounting (FI) and Controlling (CO) existed in separate tables (BSEG, BKPF, COEP), requiring lengthy period-end reconciliation runs. In S/4HANA, the Universal Journal (ACDOCA) combines all financial and managerial dimensions into a single line-item table. Every transaction simultaneously writes GL accounts, cost centers, profit centers, and market segments in real time, making reconciliation structurally redundant.'
    },
    {
      q: 'How does SAVIC FAST accelerate GROW with SAP Finance implementation in 8–12 weeks?',
      a: 'SAVIC FAST provides pre-configured, battle-tested financial templates covering ~70 SAP-validated best-practice finance and supply chain processes. By adopting a Fit-to-Standard Clean Core methodology, your organization skips months of custom blueprinting and moves directly to validation, data migration, and activation.'
    },
    {
      q: 'Can SAP S/4HANA Finance manage both local statutory GAAP and IFRS simultaneously?',
      a: 'Yes. SAP S/4HANA uses Parallel Ledgers. A leading ledger records primary statutory accounting (e.g. IndAS or local GAAP), while non-leading ledgers record IFRS or US GAAP synchronously. Foreign currency revaluations and asset depreciation can post distinct valuation rules per ledger automatically.'
    },
    {
      q: 'What is SAP Document and Reporting Compliance (DRC) and how does it support global tax mandates?',
      a: 'SAP DRC is a centralized compliance engine natively embedded within S/4HANA. It automates electronic invoice generation, digital signatures, and direct tax authority submission across 25+ jurisdictions (including India GST, Saudi Arabia ZATCA Phase 2, EU Peppol, and Latin American electronic invoices) without requiring custom point-to-point integration middleware.'
    },
    {
      q: 'How does SAVIC MAXCare AMS support the CFO organization post-go-live?',
      a: 'SAVIC MAXCare provides dedicated 24/7 technical and functional AMS support with guaranteed SLAs for period-end and year-end financial closes. Our senior SAP FI/CO specialists actively monitor background jobs, maintain tax schemas, optimize banking APIs, and ensure zero downtime during critical reporting windows.'
    }
  ];

  const activeStream = functionalStreams[activeStreamTab];
  const activeAi = aiFinanceAgents[activeAiTab];

  return (
    <div className="w-full pb-20">

      {/* =========================================================================
          1. FULL-SCREEN CINEMATIC HERO SECTION (Full-Bleed 3D Visual & Enterprise Content Overlay)
          ========================================================================= */}
      <section className="relative w-full h-[540px] sm:h-[560px] lg:h-[580px] flex items-center overflow-hidden bg-[#030914] text-white border-b border-slate-200/20 dark:border-white/10 shadow-2xl py-6 sm:py-8 lg:py-8">
        
        {/* Full-Bleed Enterprise 3D Background Image (Covers entire screen) */}
        <div 
          className="absolute inset-0 z-0 group/hero cursor-pointer"
          onClick={() => setIsFullscreenImageOpen(true)}
          title="Click to view full screen 3D visual"
        >
          <img 
            src="/images/sap_app_finance_3d.jpg" 
            alt="SAP Autonomous Finance Control Center" 
            className="w-full h-full object-cover object-center lg:object-[66%_center] transition-transform duration-1000 ease-out group-hover/hero:scale-102"
          />
          
          {/* Multi-layered cinematic gradient scrim: ensures maximum readability of text on the left while revealing the 3D visual on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/90 via-[#051124]/75 sm:via-[#051124]/50 lg:via-[#051124]/30 to-[#030914]/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/80 via-transparent to-[#030914]/50 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030914]/60 via-transparent to-transparent pointer-events-none" />

          {/* Subtle high-tech radial cyber mesh overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

          {/* Top Hairline Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {/* Click to expand pill in bottom right */}
          <div className="absolute bottom-4 right-5 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/20 text-xs font-mono text-cyan-300 hover:bg-black/70 hover:text-white transition-all shadow-xl">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Click to View Full Screen Visual</span>
          </div>
        </div>

        {/* Hero Content Overlay */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-2.5 sm:space-y-3">
            
            {/* Category Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-cyan-400/30 text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-xl">
                <Wallet className="w-3.5 h-3.5 text-cyan-400" />
                <span>SAP S/4HANA FINANCE & CENTRAL FINANCE</span>
              </div>
              <span className="text-slate-400 text-xs font-mono hidden sm:inline">/</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider bg-black/30 px-2.5 py-0.5 rounded-full border border-white/10 backdrop-blur-sm shadow-md">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>SAVIC FINANCIAL METHODOLOGY</span>
              </span>
            </div>

            {/* Large Hero Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black tracking-tight text-white leading-[1.14] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
              Autonomous Financial Management & In-Memory Universal Ledger
            </h1>

            {/* Subtitle / Strategic Narrative */}
            <p className="text-xs sm:text-sm lg:text-[14px] font-medium text-slate-200 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] max-w-2xl">
              Transform corporate finance into an agile growth engine. Consolidate financial accounting and controlling on the Universal Journal (ACDOCA), automate invoice dispute resolution with AI agents, and achieve touchless continuous close across 25+ statutory tax jurisdictions.
            </p>

            {/* Architectural Feature Checkpoints */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 shadow-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Universal Journal (ACDOCA)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 shadow-lg">
                <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>SAP DRC (25+ Regimes)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 shadow-lg">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Real-Time SWIFT Mesh</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 shadow-lg">
                <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                <span>SAC Integrated FP&A</span>
              </span>
            </div>

            {/* Strategic Content Blocks (Pure Information - Zero Clutter) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5">
              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Database className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10.5px] font-mono font-bold uppercase text-white">
                    Touchless Record-to-Report
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug font-normal">
                  Zero manual intercompany journal vouchers with real-time ICMR auto-matching.
                </p>
              </div>

              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Wallet className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[10.5px] font-mono font-bold uppercase text-white">
                    Predictive Liquidity & Cash Mesh
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug font-normal">
                  Direct host-to-host banking integration (MT940/CAMT.053) for sub-second cash positioning.
                </p>
              </div>
            </div>



            {/* KPI Highlights Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono">
              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <p className="text-[9px] text-cyan-300 uppercase font-bold tracking-wider">Close Speedup</p>
                <p className="text-base sm:text-lg font-black text-white mt-0.5 leading-none">70% Faster</p>
                <p className="text-[8.5px] text-slate-400 mt-0.5">Continuous Soft Close</p>
              </div>
              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <p className="text-[9px] text-cyan-300 uppercase font-bold tracking-wider">DRC Compliance</p>
                <p className="text-base sm:text-lg font-black text-white mt-0.5 leading-none">99.8%</p>
                <p className="text-[8.5px] text-slate-400 mt-0.5">25+ Regimes</p>
              </div>
              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <p className="text-[9px] text-cyan-300 uppercase font-bold tracking-wider">Cash Visibility</p>
                <p className="text-base sm:text-lg font-black text-white mt-0.5 leading-none">100%</p>
                <p className="text-[8.5px] text-slate-400 mt-0.5">Real-Time Banking</p>
              </div>
              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <p className="text-[9px] text-cyan-300 uppercase font-bold tracking-wider">Spreadsheets</p>
                <p className="text-base sm:text-lg font-black text-emerald-400 mt-0.5 leading-none">Zero</p>
                <p className="text-[8.5px] text-slate-400 mt-0.5">SAC Integrated</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full-Screen Lightbox Modal */}
      {isFullscreenImageOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsFullscreenImageOpen(false)}
        >
          <button
            onClick={() => setIsFullscreenImageOpen(false)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer shadow-xl"
            aria-label="Close full screen"
          >
            <X className="w-6 h-6" />
          </button>
          <div 
            className="relative max-w-7xl w-full max-h-[92vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src="/images/sap_app_finance_3d.jpg" 
              alt="SAP Autonomous Finance Control Center" 
              className="max-w-full max-h-[90vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="px-4 py-2 rounded-full bg-black/80 border border-white/20 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md shadow-xl">
                SAP S/4HANA Finance // Autonomous Finance Control Center (3D)
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Structured Sections Container (max-w-7xl) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">

        {/* =========================================================================
            2. CORE CFO STRATEGIC PILLARS (SAVIC 6 Financial Domains)
            ========================================================================= */}
        <section className="space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-[#00A3E0]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0]">
              PILLARS OF EXCELLENCE • STRATEGIC VALUE DRIVERS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
            Six Pillars of Modern Autonomous Financial Management
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl">
            SAVIC architectures replace fragmented divisional ledgers and spreadsheet-heavy accounting with a single, intelligent financial backbone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {financialPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#071326] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-mono font-black text-slate-400">
                    {pillar.num}
                  </span>
                </div>

                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00A3E0] block mb-1">
                  {pillar.badge}
                </span>

                <h3 className="text-xl font-black text-[#0A1931] dark:text-white mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                  {pillar.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {pillar.outcome}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          3. INTERACTIVE FINANCIAL OPERATIONS CONSOLE (5 Functional Streams)
          ========================================================================= */}
      <section className="bg-white dark:bg-[#071326] rounded-3xl border border-slate-200 dark:border-white/10 p-6 sm:p-10 lg:p-12 shadow-lg space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-cyan-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0]">
                FUNCTIONAL BLUEPRINT • END-TO-END ORCHESTRATION
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              Interactive Financial Operations Console
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Click across the core financial streams to inspect architectural capabilities, deliverables, and automated benchmarks.
          </p>
        </div>

        {/* Stream Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 border-b border-slate-200 dark:border-white/10">
          {functionalStreams.map((stream, idx) => (
            <button
              key={stream.id}
              onClick={() => setActiveStreamTab(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeStreamTab === idx
                  ? 'bg-[#00A3E0] text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10'
              }`}
            >
              {stream.tab}
            </button>
          ))}
        </div>

        {/* Active Stream Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stream Details & Capabilities */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#00A3E0] px-2.5 py-1 rounded-md bg-[#00A3E0]/10 border border-[#00A3E0]/20">
                {activeStream.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0A1931] dark:text-white mt-3 mb-2">
                {activeStream.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeStream.summary}
              </p>
            </div>

            {/* Core Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {activeStream.capabilities.map((cap, cIdx) => (
                <div key={cIdx} className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00A3E0]" />
                    <h4 className="text-xs font-bold text-[#0A1931] dark:text-white">
                      {cap.label}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {cap.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Implementation Deliverables */}
            <div className="pt-2">
              <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-bold mb-2">
                Implementation Deliverables:
              </p>
              <div className="flex flex-wrap gap-2">
                {activeStream.deliverables.map((deliv, dIdx) => (
                  <span
                    key={dIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 font-mono"
                  >
                    <Check className="w-3 h-3 text-[#00A3E0]" />
                    {deliv}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Performance Telemetry Card */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-gradient-to-br from-[#0B172E] via-[#0D1F3C] to-[#071326] text-white border border-[#00A3E0]/30 shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-300 font-bold">
                BENCHMARK TARGETS
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div className="space-y-4 font-mono">
              {Object.entries(activeStream.metrics).map(([key, val], mIdx) => (
                <div key={mIdx} className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                  <p className="text-xl font-black text-cyan-300">
                    {val}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-slate-200 leading-relaxed">
                Integrated natively into the SAP Clean Core model, preserving seamless bi-annual cloud upgrades without regression testing.
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          4. AI IN FINANCE SPOTLIGHT (Joule & Specialized Agents)
          ========================================================================= */}
      <section className="space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-purple-500" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
              2026 SAP BUSINESS AI • AUTONOMOUS AGENTS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
            AI in Finance: Specialized Autonomous Agents
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            Move beyond simple robotic process automation. Deploy generative AI agents that reason through commercial disputes, post accruals, and clear bank balances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiFinanceAgents.map((agent, aIdx) => {
            const isSelected = activeAiTab === aIdx;
            return (
              <div
                key={agent.id}
                onClick={() => setActiveAiTab(aIdx)}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-purple-500/5 dark:bg-purple-950/20 border-purple-500 ring-1 ring-purple-500/40 shadow-lg'
                    : 'bg-white dark:bg-[#071326] border-slate-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-500/30 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400">
                      {agent.badge}
                    </span>
                    <Bot className="w-4 h-4 text-purple-500" />
                  </div>

                  <h3 className="text-lg font-black text-[#0A1931] dark:text-white mb-1">
                    {agent.title}
                  </h3>
                  <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-3">
                    {agent.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {agent.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-white/10">
                  <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40">
                    <span className="text-[10px] font-mono uppercase font-bold text-emerald-600 dark:text-emerald-400 block mb-0.5">
                      OPERATIONAL IMPACT
                    </span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {agent.impact}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 block">
                    {agent.spec}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          5. SAVIC DELIVERY & ACCELERATION METHODOLOGY
          ========================================================================= */}
      <section className="bg-gradient-to-br from-slate-900 via-[#0A1931] to-[#050C1A] rounded-3xl border border-cyan-500/20 p-8 sm:p-12 lg:p-14 shadow-2xl text-white space-y-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-3">
            <Workflow className="w-3.5 h-3.5 text-cyan-400" />
            <span>SAVIC PROPRIETARY DELIVERY FRAMEWORK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            SAVIC One Piece Flow for SAP Finance
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mt-2 leading-relaxed">
            De-risk your finance transformation with SAVIC FAST for GROW with SAP. Over 70 pre-configured standard finance best practices enable go-lives in weeks rather than quarters.
          </p>
        </div>

        {/* 5 Phase Methodology Progression */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { step: '01', title: 'Landscape & Chart of Accounts', desc: 'Readiness check, chart of accounts rationalization, and parallel ledger blueprinting.' },
            { step: '02', title: 'Fit-to-Standard Sprints', desc: 'Activating 70+ pre-configured best practice finance flows with zero custom modifications.' },
            { step: '03', title: 'BTP Banking & Tax Mesh', desc: 'Configuring SWIFT bank statement ingestion, payment encryption, and DRC e-invoicing.' },
            { step: '04', title: 'Dual-Run Cutover', desc: 'Mock closing rehearsal, automated balance reconciliation, and near-zero downtime live cutover.' },
            { step: '05', title: 'SAVIC MAXCare AMS', desc: '24/7 post-go-live hypercare, period-end close guarantee, and continuous optimization.' }
          ].map((phase, pIdx) => (
            <div key={pIdx} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-2xl font-black text-cyan-400/40 block mb-2 font-mono">
                  {phase.step}
                </span>
                <h3 className="text-sm font-black text-white mb-1.5 leading-snug">
                  {phase.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {phase.desc}
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>PHASE {phase.step}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>

        {/* MAXCare SLA Guarantee Callout */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-cyan-300" />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-white">
                SAVIC MAXCare Period-End Close Guarantee
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Dedicated senior FI/CO consultants standby during monthly, quarterly, and annual book closures with strict response SLAs.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 px-3.5 py-1.5 rounded-lg border border-cyan-500/20 whitespace-nowrap">
            99.9% Close SLA Backed
          </span>
        </div>
      </section>

      {/* =========================================================================
          6. REAL-WORLD CLIENT CASE STUDIES (SAVIC Proof)
          ========================================================================= */}
      <section className="space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-emerald-500" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              VERIFIED CLIENT RESULTS • INDUSTRY PROOF
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
            Measurable Outcomes from Leading CFO Organizations
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            Real enterprise transformations executed by SAVIC across capital-intensive engineering, manufacturing, and high-volume retail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clientStories.map((story, sIdx) => (
            <div
              key={sIdx}
              className="p-7 rounded-3xl bg-white dark:bg-[#071326] border border-slate-200 dark:border-white/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-sky-50 dark:bg-sky-500/10 text-[#00A3E0]">
                    {story.badge}
                  </span>
                  <Award className="w-4 h-4 text-[#00A3E0]" />
                </div>

                <h3 className="text-xl font-black text-[#0A1931] dark:text-white mb-0.5">
                  {story.client}
                </h3>
                <p className="text-xs font-semibold text-slate-400 mb-4 font-mono">
                  {story.industry}
                </p>

                <div className="space-y-3 mb-5">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/60 dark:border-white/5">
                    <span className="text-[10px] font-mono uppercase font-bold text-rose-500 block mb-1">
                      CHALLENGE
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {story.challenge}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/60 dark:border-white/5">
                    <span className="text-[10px] font-mono uppercase font-bold text-[#00A3E0] block mb-1">
                      SAVIC SOLUTION
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {story.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-emerald-600 dark:text-emerald-400">
                    KEY OUTCOME
                  </span>
                  <span className="text-sm font-black text-emerald-700 dark:text-emerald-300">
                    {story.kpi}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          7. GLOBAL REGULATORY COMPLIANCE MATRIX (SAP DRC)
          ========================================================================= */}
      <section className="bg-white dark:bg-[#071326] rounded-3xl border border-slate-200 dark:border-white/10 p-6 sm:p-10 shadow-lg space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-sky-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A3E0]">
                STATUTORY GOVERNANCE • SAP DRC ENGINE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              Pre-Configured Global Tax & Invoicing Compliance
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Out-of-the-box integration connecting enterprise transactions directly to government e-invoice portals and statutory tax reporting clearinghouses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {[
            { country: 'India (GST & e-Way)', protocol: 'NIC e-Invoice IRP', desc: 'Real-time IRN generation, QR code embedding on invoices, and direct GSTR-1/GSTR-3B filings.' },
            { country: 'Saudi Arabia (ZATCA)', protocol: 'ZATCA FATOORA Phase 2', desc: 'Cryptographic stamp signing, UUID generation, and B2B clearance via clearance API.' },
            { country: 'European Union (Peppol)', protocol: 'Peppol BIS Billing 3.0', desc: 'Standardized cross-border B2G and B2B electronic document exchange through certified access points.' },
            { country: 'United States & Americas', protocol: 'Avalara / Vertex & Multi-State', desc: 'Automated sales tax rate lookups, nexus threshold calculations, and 1099-MISC electronic reporting.' }
          ].map((tax, tIdx) => (
            <div key={tIdx} className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <Globe2 className="w-4 h-4 text-[#00A3E0]" />
                <h3 className="text-sm font-extrabold text-[#0A1931] dark:text-white">
                  {tax.country}
                </h3>
              </div>
              <span className="text-[10px] font-mono text-[#00A3E0] font-bold block mb-2">
                {tax.protocol}
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {tax.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          8. COMPREHENSIVE FINANCE FAQS & DISCOVERY WORKSHOP CTA
          ========================================================================= */}
      <section className="bg-gradient-to-br from-[#061224] via-[#091D3A] to-[#050C1A] rounded-3xl border border-cyan-500/20 p-8 sm:p-12 lg:p-14 shadow-2xl text-white space-y-10">
        
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>EXECUTIVE CFO ADVISORY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Frequently Asked Questions on SAP Finance
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-2 leading-relaxed">
            Essential architectural clarity for CFOs and Finance Directors transitioning to SAP S/4HANA Finance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {financeFaqs.map((faq, idx) => {
            const isExpanded = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Discovery Workshop Callout & Single CTA */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Ready to Modernize Your Financial Architecture?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Engage with SAVIC’s certified SAP Finance Solution Architects for a 1-day executive discovery session assessing your chart of accounts, clean core migration path, and AI potential.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('SAP Finance - Architecture Discovery Workshop')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-cyan-400 hover:from-cyan-300 hover:to-[#00A3E0] text-[#040D1A] font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-cyan-500/25 shrink-0 cursor-pointer"
          >
            <span>Schedule Architecture Discovery Workshop</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </section>

      </div>

    </div>
  );
};
