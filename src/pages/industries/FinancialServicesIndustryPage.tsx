import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Layers, 
  TrendingUp, 
  BarChart3, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Clock, 
  Workflow, 
  Compass, 
  Zap, 
  Boxes, 
  Globe2, 
  RefreshCw, 
  FileText, 
  Scale, 
  Coins, 
  ShieldCheck, 
  Briefcase, 
  Users, 
  Landmark, 
  CreditCard, 
  Cpu, 
  Database, 
  Sliders, 
  AlertTriangle 
} from 'lucide-react';

interface FinancialServicesIndustryPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const FinancialServicesIndustryPage: React.FC<FinancialServicesIndustryPageProps> = ({ 
  onOpenContact 
}) => {
  // State for Section 2 Interactive Journey
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

  // State for Section 4 Circular Chevron Wheel
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(null);

  // State for Section 7 Solution Category Filter
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');

  // State for Section 9 Transformation Stage
  const [activeTransformStage, setActiveTransformStage] = useState<number>(0);

  // Section 4: 8-Segment Circular Chevron Wheel (KNOOVIQ Financial Services Ecosystem)
  const wheelSegments = [
    {
      id: 'multi-gaap-gl',
      title: 'Multi-GAAP Universal Sub-Ledger',
      desc: 'Parallel financial accounting complying simultaneously with IFRS, US GAAP, and local statutory tax jurisdictions.',
      side: 'right',
      color: '#22C55E', // Green
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(34, 197, 94, 0.3)',
      icon: Scale
    },
    {
      id: 'group-consolidation',
      title: 'Real-Time Group Reporting & Close',
      desc: 'Continuous multi-entity financial consolidation with automated intercompany matching and multi-currency translations.',
      side: 'right',
      color: '#84CC16', // Lime Green
      textColor: 'text-lime-400',
      bgGlow: 'rgba(132, 204, 22, 0.3)',
      icon: Layers
    },
    {
      id: 'asset-management',
      title: 'Institutional Asset & Portfolio Accounting',
      desc: 'Multi-asset valuation, mark-to-market accounting, yield curve analytics, and automated custodian reconciliations.',
      side: 'right',
      color: '#EAB308', // Yellow
      textColor: 'text-yellow-400',
      bgGlow: 'rgba(234, 179, 8, 0.3)',
      icon: Briefcase
    },
    {
      id: 'pe-vc-funds',
      title: 'Private Equity & Fund Administration',
      desc: 'Waterfall capital distribution calculations, carried interest tracking, LP capital calls, and partnership tax allocations.',
      side: 'right',
      color: '#F97316', // Orange
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: Coins
    },
    {
      id: 'statutory-tax',
      title: 'Global Tax Governance & Transfer Pricing',
      desc: 'Automated BEPS Pillar Two tax computations, cross-border transfer pricing allocations, and audit compliance trails.',
      side: 'left',
      color: '#F43F5E', // Rose
      textColor: 'text-rose-400',
      bgGlow: 'rgba(244, 63, 94, 0.3)',
      icon: FileText
    },
    {
      id: 'treasury-risk',
      title: 'Corporate Treasury & Liquidity Pooling',
      desc: 'Automated in-house banking, multi-entity cash concentration, FX hedging, and counterparty exposure management.',
      side: 'left',
      color: '#EC4899', // Pink
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.3)',
      icon: Landmark
    },
    {
      id: 'esg-sustainability',
      title: 'ESG Reporting & Sustainable Finance',
      desc: 'CSRD and SFDR regulatory metrics calculation, green bond accounting, and carbon portfolio emissions auditing.',
      side: 'left',
      color: '#A855F7', // Purple
      textColor: 'text-purple-400',
      bgGlow: 'rgba(168, 85, 247, 0.3)',
      icon: Globe2
    },
    {
      id: 'audit-analytics',
      title: 'Continuous Audit & Executive Intelligence',
      desc: 'Continuous machine learning internal audit anomaly detection, drill-down financial analytics, and board dashboards.',
      side: 'left',
      color: '#06B6D4', // Cyan
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(6, 182, 212, 0.3)',
      icon: BarChart3
    }
  ];

  // Helper calculation for interlocking circular chevron path
  const getChevronPath = (index: number) => {
    const cx = 250;
    const cy = 250;
    const rOut = 218;
    const rIn = 118;
    const rMid = 168;
    const gap = 1.6;
    const tip = 7.5;
    
    const theta1 = -90 + index * 45 + gap;
    const theta2 = -90 + (index + 1) * 45 - gap;
    
    const rad = (deg: number) => (deg * Math.PI) / 180;
    
    const p1 = { x: cx + rOut * Math.cos(rad(theta1)), y: cy + rOut * Math.sin(rad(theta1)) };
    const p2 = { x: cx + rOut * Math.cos(rad(theta2)), y: cy + rOut * Math.sin(rad(theta2)) };
    const p3 = { x: cx + rMid * Math.cos(rad(theta2 + tip)), y: cy + rMid * Math.sin(rad(theta2 + tip)) };
    const p4 = { x: cx + rIn * Math.cos(rad(theta2)), y: cy + rIn * Math.sin(rad(theta2)) };
    const p5 = { x: cx + rIn * Math.cos(rad(theta1)), y: cy + rIn * Math.sin(rad(theta1)) };
    const p6 = { x: cx + rMid * Math.cos(rad(theta1 + tip)), y: cy + rMid * Math.sin(rad(theta1 + tip)) };
    
    return `M ${p1.x.toFixed(2)} ${p1.y.toFixed(2)} A ${rOut} ${rOut} 0 0 1 ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} L ${p3.x.toFixed(2)} ${p3.y.toFixed(2)} L ${p4.x.toFixed(2)} ${p4.y.toFixed(2)} A ${rIn} ${rIn} 0 0 0 ${p5.x.toFixed(2)} ${p5.y.toFixed(2)} L ${p6.x.toFixed(2)} ${p6.y.toFixed(2)} Z`;
  };

  const getIconCoords = (index: number) => {
    const cx = 250;
    const cy = 250;
    const r = 168;
    const midAngle = -90 + index * 45 + 22.5;
    const rad = (midAngle * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad)
    };
  };

  // Section 2: Journey Steps (Clean, no numbers, no statistics, no percentages)
  const journeySteps = [
    {
      id: 'entity-onboarding',
      label: 'Multi-Entity Ledger Setup',
      sublabel: 'Global Chart of Accounts',
      desc: 'Standardize enterprise operational charts of accounts across global holding companies and offshore subsidiaries on Universal Journal.',
      tech: 'SAP S/4HANA Finance',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      icon: Building2
    },
    {
      id: 'portfolio-accounting',
      label: 'Asset Valuation',
      sublabel: 'Mark-to-Market Pricing',
      desc: 'Capture real-time market data feeds, calculate mark-to-market positions, and post automated unrealized gain/loss accounting entries.',
      tech: 'SAP Treasury & Asset Accounting',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
      icon: Briefcase
    },
    {
      id: 'intercompany-matching',
      label: 'Intercompany Matching',
      sublabel: 'Continuous Balance Reconciliation',
      desc: 'Reconcile bilateral intercompany loan agreements, management fee charges, and shared service allocations with automated dispute flags.',
      tech: 'SAP Intercompany Matching & Reconciliation (ICMR)',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
      icon: RefreshCw
    },
    {
      id: 'group-consolidation',
      label: 'Group Reporting',
      sublabel: 'Sub-Second Consolidation',
      desc: 'Execute real-time statutory consolidation, minority interest eliminations, and foreign currency revaluations on live ledger data.',
      tech: 'SAP S/4HANA Group Reporting',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      icon: Layers
    },
    {
      id: 'tax-governance',
      label: 'Global Tax Governance',
      sublabel: 'BEPS Pillar Two & Transfer Pricing',
      desc: 'Compute effective tax rates across low-tax jurisdictions, automate top-up tax provisions, and generate country-by-country reports.',
      tech: 'SAP Tax Compliance & Analytics',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
      icon: FileText
    },
    {
      id: 'executive-audit',
      label: 'Continuous Audit & ESG',
      sublabel: 'Audit Lineage & Sustainable Reporting',
      desc: 'Provide regulatory examiners and internal auditors instant, drill-down traceability from consolidated reports to origin ledger vouchers.',
      tech: 'SAP Audit Management & Sustainability Control Tower',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      icon: ShieldCheck
    }
  ];

  // Section 3: Financial Services Challenges Data
  const financialChallenges = [
    {
      tag: 'MULTI-GAAP FRICTION',
      icon: Scale,
      title: 'Disparate Statutory Reporting Ledgers',
      desc: 'Operating disconnected ledgers for IFRS, US GAAP, and local statutory tax authorities causes redundant manual work and reconciliation errors.',
      footer: 'Multi-Ledger Statutory Discrepancies'
    },
    {
      tag: 'CONSOLIDATION DELAYS',
      icon: Layers,
      title: 'Prolonged Month-End Group Close Cycles',
      desc: 'Relying on spreadsheet-based intercompany reconciliations prolongs group consolidation cycles past 15 business days, delaying board visibility.',
      footer: 'Extended Month-End Close Delays'
    },
    {
      tag: 'PORTFOLIO VALUATION LAG',
      icon: Briefcase,
      title: 'Disconnected Investment & GL Systems',
      desc: 'Investment portfolio managers and general ledger teams work in silos, creating latency in recording dividend distributions and market valuations.',
      footer: 'Investment Ledger Disconnect'
    },
    {
      tag: 'BEPS PILLAR TWO TAX RISK',
      icon: FileText,
      title: 'Complex Global Minimum Tax Calculations',
      desc: 'New OECD BEPS Pillar Two regulations require computing effective tax rates across hundreds of global subsidiaries, risking audit penalties.',
      footer: 'Global Minimum Tax Audit Exposure'
    },
    {
      tag: 'FUND WATERFALL COMPLEXITY',
      icon: Coins,
      title: 'Manual Private Equity Waterfall Calculations',
      desc: 'Calculating carried interest, hurdle rates, and LP capital distributions in spreadsheets leads to allocation disputes and investor audit friction.',
      footer: 'Manual Capital Waterfall Calculations'
    },
    {
      tag: 'ESG & SFDR SCRUTINY',
      icon: Globe2,
      title: 'Unstandardized Sustainable Finance Audits',
      desc: 'Fund managers face strict regulatory penalties under EU SFDR and SEC climate mandates without automated ESG portfolio carbon tracking.',
      footer: 'Fragmented Sustainable Finance Auditing'
    }
  ];

  // Section 7: Symmetrical 3x3 Modular Solutions (9 Cards)
  const industrySolutions = [
    {
      category: 'LEDGER_CONSOLIDATION',
      categoryLabel: 'Ledger & Close',
      tag: 'UNIVERSAL SUB-LEDGER',
      title: 'SAP S/4HANA Finance Universal Journal',
      description: 'Single financial core uniting general ledger, profitability analysis, and asset accounting with instant line-item visibility.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      icon: Scale,
      highlights: ['In-Memory Universal Journal', 'Multi-GAAP Parallel Ledgers', 'Real-Time Intercompany Matching']
    },
    {
      category: 'LEDGER_CONSOLIDATION',
      categoryLabel: 'Ledger & Close',
      tag: 'GROUP REPORTING',
      title: 'SAP S/4HANA Group Reporting Suite',
      description: 'Live corporate financial consolidation running directly on operational accounting data without batch data replication delays.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      icon: Layers,
      highlights: ['Continuous Accounting Close', 'Automated Bilateral Elimination', 'Multi-Currency Translations']
    },
    {
      category: 'LEDGER_CONSOLIDATION',
      categoryLabel: 'Ledger & Close',
      tag: 'TAX COMPLIANCE',
      title: 'BEPS Pillar Two & Global Tax Engine',
      description: 'Automated global minimum tax provisioning, qualified domestic minimum top-up tax calculations, and country-by-country tax reporting.',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      icon: FileText,
      highlights: ['OECD Pillar Two Rules Engine', 'Effective Tax Rate (ETR) Modeling', 'Safe Harbor Qualification Tests']
    },
    {
      category: 'ASSET_WEALTH',
      categoryLabel: 'Asset & Wealth',
      tag: 'PORTFOLIO ACCOUNTING',
      title: 'Institutional Asset & Portfolio Sub-Ledger',
      description: 'Comprehensive investment accounting platform managing multi-asset securities, mark-to-market positions, and custodian reconciliations.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      icon: Briefcase,
      highlights: ['Multi-Asset Class Support', 'Automated Custodian Ingestion', 'Mark-to-Market GL Postings']
    },
    {
      category: 'ASSET_WEALTH',
      categoryLabel: 'Asset & Wealth',
      tag: 'FUND ADMINISTRATION',
      title: 'Private Equity & VC Waterfall Engine',
      description: 'Automated investor ledger tracking LP commitments, capital call notices, multi-tiered hurdle rates, and carried interest distributions.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
      icon: Coins,
      highlights: ['Complex Waterfall Allocations', 'Automated Capital Call Notices', 'LP Investor Self-Service Portal']
    },
    {
      category: 'ASSET_WEALTH',
      categoryLabel: 'Asset & Wealth',
      tag: 'WEALTH MANAGEMENT',
      title: 'Family Office & Wealth Consolidation Hub',
      description: 'Consolidated multi-custodian net worth reporting, trust accounting, and automated private asset valuation for family offices.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      icon: Building2,
      highlights: ['Consolidated Net Worth View', 'Trust & Estate Accounting', 'Direct Asset Mark-to-Model']
    },
    {
      category: 'TREASURY_ESG',
      categoryLabel: 'Treasury & ESG',
      tag: 'IN-HOUSE BANKING',
      title: 'SAP In-House Banking & Liquidity Pools',
      description: 'Centralized virtual account management, automated cash concentration sweeps, and multilateral intercompany netting.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
      icon: Landmark,
      highlights: ['Virtual Account Pooling', 'Multilateral Netting Rails', 'Zero External Wire Fees']
    },
    {
      category: 'TREASURY_ESG',
      categoryLabel: 'Treasury & ESG',
      tag: 'SUSTAINABLE FINANCE',
      title: 'ESG & SFDR Sustainable Finance Suite',
      description: 'Integrated sustainability accounting tracking portfolio green asset ratios, Article 8/9 fund disclosures, and carbon intensity.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
      icon: Globe2,
      highlights: ['SFDR Article 8 & 9 Compliance', 'Green Asset Ratio (GAR) Audits', 'Financed Emissions Accounting']
    },
    {
      category: 'TREASURY_ESG',
      categoryLabel: 'Treasury & ESG',
      tag: 'CONTINUOUS AUDIT',
      title: 'Automated Audit Management & Lineage Hub',
      description: 'Machine learning internal audit system scanning all journal entries for anomalies, unauthorized postings, and segregation of duties.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      icon: ShieldCheck,
      highlights: ['Continuous Journal Anomaly Scan', 'Instant Drill-Down Lineage', 'Automated SOX Audit Workflows']
    }
  ];

  // Section 9: Transformation Pipeline Data
  const transformationStages = [
    {
      badge: 'PHASE 01',
      title: 'Multi-Entity Ledger Assessment',
      subtitle: 'Architecture & Chart of Accounts Review',
      description: 'Audit disparate subsidiary accounting systems, custom spreadsheet macros, and intercompany reconciliation bottlenecks across global entities.',
      tag: 'Architecture Review',
      icon: Compass,
      textColor: 'text-sky-400',
      glowColor: 'bg-sky-500',
      borderBase: 'border-sky-500/20',
      activeBorder: 'border-sky-400 bg-sky-950/40',
      before: 'Siloed subsidiary software & manual offline spreadsheets',
      after: 'Unified enterprise financial data model on clean-core SAP',
      metrics: ['Global Chart of Accounts', 'Zero Excel Consolidation', 'Centralized Entity Master']
    },
    {
      badge: 'PHASE 02',
      title: 'Universal Journal & Group Reporting',
      subtitle: 'Continuous Accounting Deployment',
      description: 'Deploy SAP S/4HANA Finance with multi-GAAP parallel accounting, automated ICMR intercompany matching, and live Group Reporting.',
      tag: 'Core Financial Modernization',
      icon: Scale,
      textColor: 'text-emerald-400',
      glowColor: 'bg-emerald-500',
      borderBase: 'border-emerald-500/20',
      activeBorder: 'border-emerald-400 bg-emerald-950/40',
      before: 'Month-end group close taking 18+ business days',
      after: 'Continuous accounting with close completed in 3 business days',
      metrics: ['Continuous Ledger Close', 'Multi-GAAP Parallel Valuation', 'Instant Bilateral Elimination']
    },
    {
      badge: 'PHASE 03',
      title: 'Asset Accounting & Fund Automation',
      subtitle: 'Automated Valuation & Waterfalls',
      description: 'Integrate multi-asset investment accounting, automated custodian data feeds, and private equity waterfall distribution engines.',
      tag: 'Portfolio Automation',
      icon: Briefcase,
      textColor: 'text-purple-400',
      glowColor: 'bg-purple-500',
      borderBase: 'border-purple-500/20',
      activeBorder: 'border-purple-400 bg-purple-950/40',
      before: 'Manual mark-to-market calculations & fund allocation disputes',
      after: 'Real-time portfolio valuation & audit-proof capital calls',
      metrics: ['Automated Mark-to-Market', 'LP Self-Service Access', 'Automated Hurdle Allocations']
    },
    {
      badge: 'PHASE 04',
      title: 'Tax Governance & Sustainable Finance',
      subtitle: 'OECD Pillar Two & ESG Transparency',
      description: 'Automate BEPS Pillar Two global minimum tax computations, in-house banking liquidity pools, and SFDR sustainable finance disclosures.',
      tag: 'Regulatory Leadership',
      icon: Zap,
      textColor: 'text-cyan-400',
      glowColor: 'bg-cyan-500',
      borderBase: 'border-cyan-500/20',
      activeBorder: 'border-cyan-400 bg-cyan-950/40',
      before: 'Ad-hoc tax spreadsheets & unverified ESG investment metrics',
      after: 'Automated OECD Pillar Two compliance & audit-ready ESG',
      metrics: ['OECD Safe Harbor Analytics', 'In-House Virtual Bank Pooling', 'CSRD / SFDR Audited Data']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Cinematic Full-Bleed Dark Blue Hero Banner)
          ========================================================================= */}
      <section className="relative min-h-[620px] lg:min-h-[680px] bg-slate-900 text-white flex flex-col justify-between overflow-hidden">
        
        {/* Background Photo with Dark Gradient Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80" 
            alt="Financial Services District" 
            className="w-full h-full object-cover object-center brightness-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        {/* Hero Top Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 relative z-10 w-full">
          
          {/* Breadcrumb Navigation */}
          <div className="mb-4 sm:mb-6">
            <Link 
              to="/industries" 
              className="inline-flex items-center text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-wider"
            >
              <ArrowRight className="w-3 h-3 mr-1 rotate-180" />
              <span>Back to Industries</span>
            </Link>
          </div>

          <div className="max-w-3xl space-y-4 sm:space-y-6">
            
            {/* Practice Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>KNOOVIQ INDUSTRY PRACTICE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-md">
              Enterprise Financial Services & Asset Architecture
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
              Unify multi-entity financial consolidation, streamline asset management accounting, automate private fund capital waterfalls, and navigate BEPS Pillar Two tax compliance on clean-core SAP architecture.
            </p>

            {/* Feature Highlight Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Multi-GAAP Universal Journal</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Continuous Group Reporting</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Automated Fund Waterfalls</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                type="button"
                onClick={() => onOpenContact?.('Financial Services & Multi-GAAP Architecture Consultation')}
                className="px-6 py-3 rounded-xl bg-[#0070C0] hover:bg-[#005a9e] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#0070C0]/30 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Consult With Financial Architects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="#industry-solutions"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/30 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <span>Explore Solutions</span>
              </Link>
            </div>

          </div>

        </div>

        {/* Enterprise Architectural Trust Ribbon (Inside Hero, 4-Column Layout) */}
        <div className="relative z-10 w-full border-t border-white/15 bg-slate-950/70 backdrop-blur-md py-4 sm:py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-white text-xs font-mono">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-slate-200 text-[11px]">Multi-GAAP Core</div>
                  <div className="text-[10px] text-slate-400">SAP S/4HANA Universal Journal</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-slate-200 text-[11px]">Group Close</div>
                  <div className="text-[10px] text-slate-400">SAP Group Reporting Engine</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-slate-200 text-[11px]">Asset Management</div>
                  <div className="text-[10px] text-slate-400">Mark-to-Market Valuation</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-slate-200 text-[11px]">Tax Governance</div>
                  <div className="text-[10px] text-slate-400">OECD BEPS Pillar Two Suite</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE INDUSTRY PERSPECTIVE (2-Column Layout)
          ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-white border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column (6 Cols): Executive Narrative, Thesis, Strategic Pillars */}
            <div className="lg:col-span-6 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Scale className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>EXECUTIVE PERSPECTIVE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Continuous Accounting Across Multi-Entity Complexity
              </h2>

              {/* Executive Thesis Quote Card */}
              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-slate-800 italic leading-relaxed">
                  "CFOs and controllers in financial services cannot wait weeks after quarter-end to understand consolidated entity exposure. Modern leadership requires continuous accounting that reconciles intercompany positions and statutory ledgers in real time."
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether managing cross-border private equity investment funds, institutional asset portfolios, or multi-tiered corporate conglomerates, financial institutions are under intense pressure from global tax bodies and capital market regulators. Achieving continuous financial close requires unifying statutory ledgers, automated bilateral intercompany reconciliations, and instant portfolio mark-to-market valuations.
              </p>

              {/* 3 Strategic Pillars */}
              <div className="space-y-2 pt-1">
                
                <div className="p-3 rounded-xl border border-slate-300 bg-white hover:border-[#0070C0] transition-colors flex items-start gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-200">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">Unified Multi-GAAP Ledger</h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      Maintain parallel accounting ledgers for IFRS, US GAAP, and local statutory filings on a single in-memory Universal Journal.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-slate-300 bg-white hover:border-[#0070C0] transition-colors flex items-start gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-200">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">Continuous Sub-Second Consolidation</h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      Reconcile intercompany balances continuously and eliminate multi-tiered subsidiaries directly on live operational data.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-slate-300 bg-white hover:border-[#0070C0] transition-colors flex items-start gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-200">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">Automated Tax & ESG Governance</h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      Compute global minimum tax under OECD BEPS Pillar Two and provide audit-proof disclosures for sustainable finance regulations.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column (6 Cols): Dynamic Photo Showcase & 6 Stage Navigation */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Dynamic Photo Showcase */}
              <div className="relative h-60 sm:h-72 rounded-2xl overflow-hidden border-2 border-slate-300 shadow-md">
                <img 
                  src={journeySteps[activeJourneyStep].image} 
                  alt={journeySteps[activeJourneyStep].label} 
                  className="w-full h-full object-cover object-center transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Overlay Text on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                    STAGE {activeJourneyStep + 1} OF 6 • {journeySteps[activeJourneyStep].tech}
                  </div>
                  <div className="text-base sm:text-lg font-black text-white leading-tight mt-0.5">
                    {journeySteps[activeJourneyStep].label}
                  </div>
                  <div className="text-xs text-slate-200 mt-1 line-clamp-2 font-medium">
                    {journeySteps[activeJourneyStep].desc}
                  </div>
                </div>
              </div>

              {/* 6 Stage Navigation Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {journeySteps.map((step, idx) => {
                  const isActive = activeJourneyStep === idx;
                  const IconComponent = step.icon;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveJourneyStep(idx)}
                      className={`p-2.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                        isActive 
                          ? 'border-[#0070C0] bg-sky-50/90 shadow-sm' 
                          : 'border-slate-300 bg-white hover:border-slate-400 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#0070C0]' : 'text-slate-500'}`}>
                          0{idx + 1}
                        </span>
                        <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-[#0070C0]' : 'text-slate-400'}`} />
                      </div>
                      <div className={`text-xs font-bold truncate ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                        {step.label}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Stage Detail Card */}
              <div className="p-4 rounded-xl border border-slate-300 bg-slate-50/70">
                <div className="flex items-center justify-between text-xs font-mono text-slate-600 mb-1">
                  <span className="font-bold text-[#0070C0] uppercase">Selected Milestone Detail</span>
                  <span>{journeySteps[activeJourneyStep].sublabel}</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {journeySteps[activeJourneyStep].desc}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CORE BOTTLENECKS / CHALLENGES (3x2 Grid)
          ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#F8FAFC] border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-300 text-xs font-mono font-bold uppercase tracking-wider text-rose-700">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              <span>CORE BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Accounting & Regulatory Barriers Facing Financial Enterprises
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              From multi-week consolidation delays to opaque private fund waterfalls, financial service leaders must overcome systemic reporting friction.
            </p>
          </div>

          {/* 6 Challenge Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {financialChallenges.map((challenge, cIdx) => {
              const IconComp = challenge.icon;
              return (
                <div
                  key={cIdx}
                  className="p-5 rounded-2xl bg-white border border-slate-300 hover:border-[#0070C0] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-sky-50 text-[#0070C0] border border-slate-200">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
                        {challenge.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                      {challenge.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {challenge.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-[#0070C0] font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070C0]" />
                    <span>{challenge.footer}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: PLATFORM ECOSYSTEM WHEEL (3-Column Radial Layout)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#070B14] border-b border-slate-800 relative overflow-hidden text-white">
        
        {/* Subtle Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-600/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
              <span>FINANCIAL SERVICES PLATFORM ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Synchronized Enterprise Financial Matrix
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              An integrated, clean-core financial platform uniting multi-GAAP general ledgers, real-time group consolidation, asset accounting, and global tax compliance.
            </p>
          </div>

          {/* 3-Column Radial Wheel & Flanking Capabilities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* Left Column (4 Capabilities: Top-Left to Bottom-Left) */}
            <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-5">
              {[7, 6, 5, 4].map((segIdx) => {
                const item = wheelSegments[segIdx];
                const isHovered = hoveredWheelIndex === segIdx;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredWheelIndex(segIdx)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? 'bg-slate-900/95 border-white/40 shadow-xl -translate-x-1'
                        : 'bg-slate-900/40 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                    style={{
                      boxShadow: isHovered ? `0 0 24px ${item.bgGlow}` : undefined,
                      borderColor: isHovered ? item.color : undefined
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1 text-left">
                        <h4 className="text-sm sm:text-base font-bold tracking-tight" style={{ color: item.color }}>
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                      <div 
                        className="w-2 h-7 rounded-full shrink-0 mt-0.5 transition-all duration-300"
                        style={{ 
                          backgroundColor: item.color,
                          boxShadow: isHovered ? `0 0 12px ${item.color}` : 'none'
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Column: 8-Segment Interlocking Chevron Circular Wheel */}
            <div className="order-1 lg:order-2 lg:col-span-4 flex justify-center items-center py-4 sm:py-6">
              <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] aspect-square flex items-center justify-center">
                
                {/* Glow ring under wheel */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/15 via-emerald-500/10 to-purple-500/15 blur-2xl rounded-full pointer-events-none" />

                <svg
                  viewBox="0 0 500 500"
                  className="w-full h-full drop-shadow-2xl overflow-visible"
                >
                  {/* 8 Interlocking Chevron Segments */}
                  {wheelSegments.map((seg, idx) => {
                    const isHovered = hoveredWheelIndex === idx;
                    const d = getChevronPath(idx);
                    const iconPos = getIconCoords(idx);
                    const IconComponent = seg.icon;

                    return (
                      <g
                        key={seg.id}
                        onMouseEnter={() => setHoveredWheelIndex(idx)}
                        onMouseLeave={() => setHoveredWheelIndex(null)}
                        className="cursor-pointer transition-all duration-300"
                      >
                        {/* Chevron Wedge */}
                        <path
                          d={d}
                          fill={isHovered ? `${seg.color}25` : '#0A0F1D'}
                          stroke={seg.color}
                          strokeWidth={isHovered ? "3.5" : "2.2"}
                          strokeLinejoin="round"
                          className="transition-all duration-300"
                          style={{
                            filter: isHovered ? `drop-shadow(0 0 10px ${seg.color})` : undefined
                          }}
                        />

                        {/* Segment Icon */}
                        <foreignObject
                          x={iconPos.x - 14}
                          y={iconPos.y - 14}
                          width="28"
                          height="28"
                          className="pointer-events-none"
                        >
                          <div 
                            className="w-full h-full flex items-center justify-center transition-transform duration-300"
                            style={{ 
                              color: seg.color,
                              transform: isHovered ? 'scale(1.2)' : 'scale(1)'
                            }}
                          >
                            <IconComponent className="w-5 h-5 drop-shadow-md" />
                          </div>
                        </foreignObject>
                      </g>
                    );
                  })}

                  {/* Center Hub Outer Circle */}
                  <circle
                    cx="250"
                    cy="250"
                    r="106"
                    fill="#070B14"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    className="drop-shadow-2xl"
                  />
                  <circle
                    cx="250"
                    cy="250"
                    r="102"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                    strokeOpacity="0.25"
                  />

                  {/* Center Hub Label */}
                  <foreignObject
                    x="150"
                    y="195"
                    width="200"
                    height="110"
                    className="pointer-events-none"
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center text-center px-3">
                      <div className="text-[10px] font-mono tracking-widest text-cyan-400 font-bold uppercase">
                        KNOOVIQ CORE
                      </div>
                      <div className="text-sm sm:text-base font-black text-white leading-tight mt-0.5">
                        FINANCE MATRIX
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 tracking-wider uppercase mt-1">
                        {hoveredWheelIndex !== null 
                          ? `MODULE 0${hoveredWheelIndex + 1}` 
                          : '8 CAPABILITIES'}
                      </div>
                    </div>
                  </foreignObject>
                </svg>

              </div>
            </div>

            {/* Right Column (4 Capabilities: Top-Right to Bottom-Right) */}
            <div className="order-3 lg:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-5">
              {[0, 1, 2, 3].map((segIdx) => {
                const item = wheelSegments[segIdx];
                const isHovered = hoveredWheelIndex === segIdx;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredWheelIndex(segIdx)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? 'bg-slate-900/95 border-white/40 shadow-xl translate-x-1'
                        : 'bg-slate-900/40 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                    style={{
                      boxShadow: isHovered ? `0 0 24px ${item.bgGlow}` : undefined,
                      borderColor: isHovered ? item.color : undefined
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div 
                        className="w-2 h-7 rounded-full shrink-0 mt-0.5 transition-all duration-300"
                        style={{ 
                          backgroundColor: item.color,
                          boxShadow: isHovered ? `0 0 12px ${item.color}` : 'none'
                        }}
                      />
                      <div className="space-y-1 text-right">
                        <h4 className="text-sm sm:text-base font-bold tracking-tight" style={{ color: item.color }}>
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: TECHNOLOGY FOUNDATION (3x2 Grid)
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Layers className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PLATFORM ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Technology Foundation for Enterprise Financial Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Enterprise SAP financial technology suites layered with real-time intercompany reconciliation engines, OECD tax calculation algorithms, and multi-asset sub-ledgers.
            </p>
          </div>

          {/* 6 Technology Suite Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Tech 1 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">CORE FINANCIAL LEDGER</span>
                <Scale className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP S/4HANA Finance Core
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Centralized general ledger capturing line-item transactions across multi-national entities on an in-memory continuous accounting foundation.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• In-Memory Universal Journal (ACDOCA)</div>
                <div className="flex items-center gap-1.5">• Multi-GAAP Parallel Valuation Ledgers</div>
              </div>
            </div>

            {/* Tech 2 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">STATUTORY CONSOLIDATION</span>
                <Layers className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP S/4HANA Group Reporting
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Real-time consolidation engine running directly on live operational data with instant automated matrix eliminations and currency revaluations.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Continuous Intercompany Matching (ICMR)</div>
                <div className="flex items-center gap-1.5">• Automated Equity Pickup & Eliminations</div>
              </div>
            </div>

            {/* Tech 3 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">GLOBAL TAX & BEPS</span>
                <FileText className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Tax Compliance & Analytics
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automated OECD BEPS Pillar Two tax rate computation, cross-border transfer pricing validation, and electronic tax reporting integration.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• BEPS Pillar Two Safe Harbor Logic</div>
                <div className="flex items-center gap-1.5">• Real-Time Transfer Pricing Reconciliations</div>
              </div>
            </div>

            {/* Tech 4 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">ASSET ACCOUNTING</span>
                <Briefcase className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Treasury & Asset Sub-Ledger
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Multi-asset investment portfolio administration tracking equities, bonds, derivatives, mark-to-market positions, and custodian feeds.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Automated SWIFT MT535 Custodian Match</div>
                <div className="flex items-center gap-1.5">• Daily Mark-to-Market GL Adjustments</div>
              </div>
            </div>

            {/* Tech 5 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">LIQUIDITY & IN-HOUSE BANKING</span>
                <Landmark className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP In-House Banking Suite
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Corporate treasury engine managing virtual bank accounts, cross-border multi-currency cash pools, and multilateral netting structures.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Internal Payments-on-Behalf-Of (POBO)</div>
                <div className="flex items-center gap-1.5">• Real-Time Cash Concentration Sweeps</div>
              </div>
            </div>

            {/* Tech 6 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">SUSTAINABILITY & ESG</span>
                <Globe2 className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Sustainability Control Tower
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Audited enterprise platform calculating greenhouse gas emissions, SFDR sustainability ratios, and CSRD compliant financial disclosures.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Audit-Ready Scope 1, 2, 3 Data</div>
                <div className="flex items-center gap-1.5">• EU SFDR Article 8 & 9 Portfolios</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: MODULAR SOLUTIONS CATALOG (Symmetrical 3x3 Grid, h-[400px])
          ========================================================================= */}
      <section id="industry-solutions" className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-slate-200 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0] shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>ENTERPRISE FUNCTIONAL CATALOG</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Solutions for Every Financial Services Domain
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Explore specialized enterprise functional modules engineered to modernize accounting operations across multi-GAAP ledgers, asset management, and global tax governance.
            </p>
          </div>

          {/* Solution Domain Category Tabs - 4 Symmetrical Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-7 sm:mb-8">
            {[
              { id: 'ALL', label: 'All Solutions' },
              { id: 'LEDGER_CONSOLIDATION', label: 'Ledger & Close' },
              { id: 'ASSET_WEALTH', label: 'Asset & Wealth' },
              { id: 'TREASURY_ESG', label: 'Treasury & ESG' }
            ].map((cat) => {
              const isActive = activeSolutionCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveSolutionCategory(cat.id)}
                  className={`industry-category-tab px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#0070C0] text-white shadow-md shadow-[#0070C0]/25 scale-105'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-300 hover:border-slate-400 shadow-2xs'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Structured Compact 3-Column Enterprise Grid (Symmetrical 3x3 Grid, h-[400px]) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
            {industrySolutions
              .filter((sol) => activeSolutionCategory === 'ALL' || sol.category === activeSolutionCategory)
              .map((sol) => {
                const IconComponent = sol.icon;
                return (
                  <div
                    key={sol.title}
                    className="h-[400px] rounded-xl bg-white border-2 border-slate-300 shadow-xs hover:border-[#0070C0] hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group"
                  >
                    {/* 1. Top Image Banner - 50% Pure Photo */}
                    <div className="relative h-1/2 w-full overflow-hidden bg-slate-100 shrink-0">
                      <img 
                        src={sol.image} 
                        alt={sol.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                      
                      {/* Floating Tag Pill */}
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-slate-950/80 border border-white/20 text-[9px] font-mono font-bold text-sky-300 uppercase tracking-wider backdrop-blur-md shadow-xs">
                        {sol.tag}
                      </div>
                    </div>

                    {/* 2. Card Content Body - 50% Height */}
                    <div className="h-1/2 p-3.5 sm:p-4 flex flex-col justify-between space-y-2.5 overflow-hidden">
                      
                      <div className="space-y-1.5">
                        {/* Category & Icon Indicator */}
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-[#0070C0] uppercase tracking-wider">
                            {sol.categoryLabel}
                          </span>
                          <div className="p-1.5 rounded-lg bg-sky-50 text-[#0070C0] border border-slate-200 group-hover:bg-[#0070C0] group-hover:text-white transition-all">
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        {/* Title - Bold & Compact */}
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0070C0] transition-colors leading-snug">
                          {sol.title}
                        </h3>

                        {/* Description - Snug & Concise */}
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                          {sol.description}
                        </p>
                      </div>

                      {/* Key Capabilities Structured Inline Chips */}
                      <div className="space-y-2.5 pt-1">
                        <div className="flex flex-wrap gap-1.5">
                          {sol.highlights.map((hl, hIdx) => (
                            <span
                              key={hIdx}
                              className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-medium text-slate-700 border border-slate-200/80"
                            >
                              {hl}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: BUSINESS OUTCOMES (3x2 Grid)
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>MEASURABLE BUSINESS IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Transforming Multi-Entity Complexity into Capital Precision
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              When multi-GAAP ledgers, group consolidation, and portfolio accounting operate in continuous real-time sync, enterprises capture speed with audit-proof confidence.
            </p>
          </div>

          {/* 6 Outcomes (Large typography, generous whitespace, NO dashboards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Outcome 1 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Continuous Group Financial Close
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Compress traditional 18-day corporate month-end consolidation cycles down to 3 business days through continuous intercompany balancing and automated eliminations.
              </p>
            </div>

            {/* Outcome 2 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Unified Multi-GAAP Compliance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Eliminate manual spreadsheet adjustments by posting parallel accounting documents simultaneously for IFRS, US GAAP, and local tax requirements.
              </p>
            </div>

            {/* Outcome 3 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                OECD BEPS Pillar Two Assurance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automated effective tax rate calculations across hundreds of global subsidiaries eliminate top-up tax miscalculations and regulatory penalties.
              </p>
            </div>

            {/* Outcome 4 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Daily Mark-to-Market Portfolio Valuation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Direct integration with market pricing feeds and custodian statements gives executives real-time visibility into unrealized capital gains and portfolio risk.
              </p>
            </div>

            {/* Outcome 5 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Coins className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Automated Fund Waterfall Allocations
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Algorithmic carried interest and hurdle rate calculations prevent distribution disputes with limited partners and withstand rigorous LP audit reviews.
              </p>
            </div>

            {/* Outcome 6 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Audit-Ready Sub-Ledger Traceability
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Direct drill-down transparency from consolidated board financial statements down to origin accounting vouchers guarantees seamless internal and external audits.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: SUCCESS STORY / TRANSFORMATION (Conduit Pipeline & Delta Inspector)
          ========================================================================= */}
      <section className="py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-[#060D1A] via-[#0A1628] to-[#060C17] border-b border-slate-800 relative overflow-hidden text-white">
        
        {/* Subtle Ambient Background Grids & Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,112,192,0.18),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header - Compact & High-Impact */}
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Workflow className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>TRANSFORMATION ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Financial Services Transformation in Action
            </h2>
            <div className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono tracking-wider uppercase">
              Consolidated Multi-Entity Ledger Architecture
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              How global financial institutions, private equity firms, and holding companies transition from disparate spreadsheets to a unified continuous accounting core.
            </p>
          </div>

          {/* Flowing Laser Conduit Connecting the Stages */}
          <div className="hidden lg:block relative mb-4">
            <div className="h-0.5 bg-slate-800 rounded-full w-full relative overflow-hidden">
              <motion.div 
                animate={{ x: ['-25%', '125%'] }} 
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                className="absolute top-0 bottom-0 w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee]" 
              />
            </div>
          </div>

          {/* 4 Connected Interactive Transformation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 items-stretch mb-3.5 sm:mb-4">
            {transformationStages.map((stage, sIdx) => {
              const IconComp = stage.icon;
              const isSelected = activeTransformStage === sIdx;
              return (
                <div
                  key={stage.title}
                  onClick={() => setActiveTransformStage(sIdx)}
                  className={`cursor-pointer rounded-xl backdrop-blur-md p-4 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden border-2 ${
                    isSelected
                      ? stage.activeBorder
                      : `bg-white/[0.03] ${stage.borderBase}`
                  }`}
                >
                  {/* Subtle Top Glowing Strip on Active */}
                  {isSelected && (
                    <div className={`absolute top-0 left-0 right-0 h-0.5 ${stage.glowColor} shadow-[0_0_10px_currentColor]`} />
                  )}

                  <div className="space-y-2.5">
                    {/* Header: Phase badge & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${stage.glowColor} ${isSelected ? 'animate-ping' : ''}`} />
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${stage.textColor}`}>
                          {stage.badge}
                        </span>
                      </div>
                      <div className={`p-1.5 rounded-lg bg-white/5 border border-white/10 ${stage.textColor} group-hover:scale-110 transition-transform`}>
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Stage Title & Subtitle */}
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        {stage.title}
                      </h3>
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">
                        {stage.subtitle}
                      </div>
                    </div>

                    {/* Concise Narrative */}
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {stage.description}
                    </p>
                  </div>

                  {/* Bottom Deliverable Pillar */}
                  <div className="pt-2.5 mt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[9.5px] font-mono font-medium text-slate-400">
                      {stage.tag}
                    </span>
                    <span className={`text-[9.5px] font-mono font-bold uppercase tracking-wider ${stage.textColor} group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5`}>
                      <span>{isSelected ? 'ACTIVE' : 'INSPECT'}</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Live Transformation Console / Delta Inspector (Compact) */}
          {(() => {
            const currentStage = transformationStages[activeTransformStage];
            return (
              <div className="rounded-xl bg-slate-900/90 border-2 border-slate-700/80 p-3.5 sm:p-4 shadow-xl backdrop-blur-md relative overflow-hidden">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
                  
                  {/* Left: Active Stage Name & Transformation Contrast */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 flex-1">
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`w-2.5 h-2.5 rounded-full ${currentStage.glowColor} animate-pulse`} />
                      <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        {currentStage.title} Delta:
                      </span>
                    </div>

                    {/* Before vs After Ribbon */}
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-2 py-0.5 rounded-md bg-rose-950/60 border border-rose-500/40 text-rose-300 text-[10.5px] font-mono">
                        PRIOR: {currentStage.before}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="px-2 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-[10.5px] font-mono font-medium">
                        TRANSFORMED: {currentStage.after}
                      </span>
                    </div>
                  </div>

                  {/* Right: Stage Key Capabilities Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/10 w-full lg:w-auto">
                    {currentStage.metrics.map((item, mIdx) => (
                      <span
                        key={mIdx}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/15 text-[10px] font-mono text-slate-300 font-semibold"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* =========================================================================
          SECTION 11: FINAL CTA (Full-Width Blue Executive Section)
          ========================================================================= */}
      <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-r from-[#003B73] via-[#005B9E] to-[#0070C0] text-white">
        
        {/* Abstract 3D Digital Network Mesh Visual */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
              backgroundSize: '100% 100%'
            }}
          />
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: 'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
              backgroundSize: '36px 36px'
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-cyan-200 backdrop-blur-sm shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR FINANCIAL CORE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Unify Your Multi-Entity Financial Enterprise?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Automate statutory group consolidation, streamline asset management accounting, and calculate OECD BEPS Pillar Two tax compliance with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact?.('Financial Services Architecture Consultation')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to Our Financial Architects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0070C0]" />
            </button>

            <Link
              to="/solutions/sap-s4hana"
              className="px-8 py-4 rounded-xl bg-transparent hover:bg-white/10 text-white text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-white/40 hover:border-white transition-all flex items-center gap-2"
            >
              <span>Explore SAP Solutions</span>
            </Link>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-sky-200">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Multi-GAAP & BEPS Pillar 2 Ready</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-300" />
              <span>Sub-Second Group Close</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-sky-300" />
              <span>Global Subsidiary Consolidation</span>
            </span>
          </div>

        </div>

      </section>

    </div>
  );
};
