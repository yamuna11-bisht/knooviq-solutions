import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Landmark, 
  ShieldCheck, 
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
  Layers, 
  Lock, 
  Scale, 
  CreditCard, 
  Coins, 
  Users, 
  Building2, 
  Cpu, 
  Database, 
  Sliders, 
  AlertTriangle 
} from 'lucide-react';

interface BankingIndustryPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const BankingIndustryPage: React.FC<BankingIndustryPageProps> = ({ 
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

  // Section 4: 8-Segment Circular Chevron Wheel (KNOOVIQ Core Banking Ecosystem)
  const wheelSegments = [
    {
      id: 'core-ledger',
      title: 'Universal Financial Sub-Ledger',
      desc: 'Real-time multi-currency transaction processing on SAP Universal Journal unifying loans, deposits, and collateral.',
      side: 'right',
      color: '#22C55E', // Green
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(34, 197, 94, 0.3)',
      icon: Landmark
    },
    {
      id: 'treasury-liquidity',
      title: 'Treasury & Intraday Liquidity',
      desc: 'Sub-second cash positioning across global clearing networks, Nostro/Vostro accounts, and central bank facilities.',
      side: 'right',
      color: '#84CC16', // Lime Green
      textColor: 'text-lime-400',
      bgGlow: 'rgba(132, 204, 22, 0.3)',
      icon: Coins
    },
    {
      id: 'basel-risk',
      title: 'Basel IV Capital & Credit Risk',
      desc: 'Automated calculation of credit risk-weighted assets (RWA), liquidity coverage ratios (LCR), and stress test simulations.',
      side: 'right',
      color: '#EAB308', // Yellow
      textColor: 'text-yellow-400',
      bgGlow: 'rgba(234, 179, 8, 0.3)',
      icon: Scale
    },
    {
      id: 'iso-payments',
      title: 'ISO 20022 Real-Time Payments',
      desc: 'High-throughput clearing interlock supporting FedNow, SEPA Instant, RTP, and SWIFT MX rich financial messaging.',
      side: 'right',
      color: '#F97316', // Orange
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: CreditCard
    },
    {
      id: 'aml-kyc',
      title: 'AI Financial Crime & AML Defense',
      desc: 'Continuous behavioral anomaly scoring, sanctions screening, and automated suspicious activity reporting (SAR).',
      side: 'left',
      color: '#F43F5E', // Rose
      textColor: 'text-rose-400',
      bgGlow: 'rgba(244, 63, 94, 0.3)',
      icon: ShieldCheck
    },
    {
      id: 'commercial-lending',
      title: 'Syndicated & Commercial Lending',
      desc: 'End-to-end loan syndication orchestration, covenant compliance monitoring, and automated interest rate resets.',
      side: 'left',
      color: '#EC4899', // Pink
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.3)',
      icon: Building2
    },
    {
      id: 'wealth-custody',
      title: 'Wealth Management & Custody Assets',
      desc: 'Institutional custodian multi-asset accounting, automated dividend pass-through, and client portfolio valuation.',
      side: 'left',
      color: '#A855F7', // Purple
      textColor: 'text-purple-400',
      bgGlow: 'rgba(168, 85, 247, 0.3)',
      icon: Layers
    },
    {
      id: 'statutory-reporting',
      title: 'Statutory Multi-GAAP Close',
      desc: 'Simultaneous continuous ledger close across IFRS 9, US GAAP, and local central bank regulatory frameworks.',
      side: 'left',
      color: '#06B6D4', // Cyan
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(6, 182, 212, 0.3)',
      icon: FileText
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
      id: 'customer-onboarding',
      label: 'Digital KYC & Origination',
      sublabel: 'Automated Due Diligence',
      desc: 'Verify customer identities, beneficial ownership, and risk scoring in seconds through automated digital identity APIs and sanction screening.',
      tech: 'SAP Customer Experience & AI Risk',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
      icon: Users
    },
    {
      id: 'core-transaction',
      label: 'Transaction Processing',
      sublabel: 'High-Volume Settlement',
      desc: 'Execute real-time deposits, withdrawals, and merchant settlements on in-memory Universal Ledger with zero transaction reconciliation lag.',
      tech: 'SAP S/4HANA Universal Journal',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
      icon: CreditCard
    },
    {
      id: 'liquidity-treasury',
      label: 'Intraday Liquidity',
      sublabel: 'Global Cash Optimization',
      desc: 'Aggregate global Nostro accounts and central bank reserves continuously to eliminate intraday liquidity shortfall penalties.',
      tech: 'SAP Cash Management & Treasury',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
      icon: Coins
    },
    {
      id: 'credit-decisioning',
      label: 'Credit Decisioning',
      sublabel: 'Automated Loan Underwriting',
      desc: 'Evaluate commercial and retail loan portfolios with predictive behavioral scoring models and automated covenant compliance tracking.',
      tech: 'SAP Banking Loans Management',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      icon: Scale
    },
    {
      id: 'compliance-surveillance',
      label: 'Risk & Compliance',
      sublabel: 'Basel IV & AML Governance',
      desc: 'Streamline continuous compliance monitoring across regulatory bodies with automated Capital Adequacy and Suspicious Activity reports.',
      tech: 'SAP Financial Risk Management',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
      icon: ShieldCheck
    },
    {
      id: 'multi-gaap-close',
      label: 'Continuous Close',
      sublabel: 'Multi-GAAP Financial Close',
      desc: 'Perform statutory financial consolidation across IFRS 9, US GAAP, and local banking regulators without month-end batch stalls.',
      tech: 'SAP S/4HANA Group Reporting',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      icon: FileText
    }
  ];

  // Section 3: Banking Challenges Data
  const bankingChallenges = [
    {
      tag: 'LEGACY CORE BOTTLENECKS',
      icon: Landmark,
      title: 'Batch Processing & Settlement Delays',
      desc: 'Overnight batch architectures trap capital in transit, creating intraday liquidity blind spots and blocking instant customer payment execution.',
      footer: 'Overnight Batch Processing Delays'
    },
    {
      tag: 'REGULATORY FRICTION',
      icon: Scale,
      title: 'Escalating Basel IV & AML Burdens',
      desc: 'Fragmented credit data and disparate reporting systems force costly manual reconciliations to meet stringent central bank capital ratio audits.',
      footer: 'Fragmented Regulatory Audit Trails'
    },
    {
      tag: 'LIQUIDITY FRAGMENTATION',
      icon: Coins,
      title: 'Disconnected Global Cash Pools',
      desc: 'Treasurers lack real-time visibility across correspondent banking accounts and local clearing houses, resulting in idle liquidity and excessive funding costs.',
      footer: 'Unoptimized Intraday Cash Reserves'
    },
    {
      tag: 'CYBER & FRAUD EXPOSURE',
      icon: ShieldCheck,
      title: 'Sophisticated Synthetic Identity Fraud',
      desc: 'Static rule-based fraud detection fails against modern real-time automated fraud vectors, triggering high false positive rates and customer attrition.',
      footer: 'High False-Positive Screening Stalls'
    },
    {
      tag: 'LENDING CYCLE LAG',
      icon: Building2,
      title: 'Sluggish Commercial Loan Underwriting',
      desc: 'Manual document verification and spreadsheet-based covenant tracking slow deal closures from days to weeks, losing prime enterprise borrowers.',
      footer: 'Manual Commercial Loan Underwriting'
    },
    {
      tag: 'FINANCIAL REPORTING LAG',
      icon: FileText,
      title: 'Strained Multi-GAAP Statutory Close',
      desc: 'Maintaining disparate ledgers for IFRS 9 and US GAAP causes month-end accounting bottlenecks and restatement vulnerability.',
      footer: 'Multi-Ledger Accounting Reconciliation Stalls'
    }
  ];

  // Section 7: Symmetrical 3x3 Modular Solutions (9 Cards)
  const industrySolutions = [
    {
      category: 'CORE_LEDGER',
      categoryLabel: 'Core Banking',
      tag: 'FINANCIAL SUB-LEDGER',
      title: 'SAP S/4HANA Universal Banking Ledger',
      description: 'Single source of financial truth unifying retail deposits, commercial loans, and interbank transactions with continuous sub-second GL postings.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      icon: Landmark,
      highlights: ['In-Memory Universal Journal', 'Multi-Currency Subledger', 'Real-Time GL Balance']
    },
    {
      category: 'CORE_LEDGER',
      categoryLabel: 'Core Banking',
      tag: 'TREASURY OPTIMIZATION',
      title: 'Intraday Cash & Liquidity Suite',
      description: 'Centralized liquidity management monitoring multi-bank balances, automatic sweep arrangements, and central bank reserve allocations in real time.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
      icon: Coins,
      highlights: ['Real-Time Cash Positioning', 'Automated Target Balancing', 'Nostro/Vostro Reconciliation']
    },
    {
      category: 'CORE_LEDGER',
      categoryLabel: 'Core Banking',
      tag: 'STATUTORY CLOSE',
      title: 'Automated Multi-GAAP Consolidation',
      description: 'Simultaneous accounting for IFRS 9 expected credit losses and US GAAP provisions with automated elimination and currency translation.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      icon: FileText,
      highlights: ['Parallel Valuation Ledgers', 'Continuous Intercompany Close', 'Group Reporting Engine']
    },
    {
      category: 'LENDING_CREDIT',
      categoryLabel: 'Lending & Credit',
      tag: 'COMMERCIAL CREDIT',
      title: 'Syndicated Loan Management Hub',
      description: 'End-to-end agency administration for complex syndicated credit lines, automated interest resets, and live collateral monitoring.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      icon: Building2,
      highlights: ['Multi-Participant Tranches', 'Automated Margin Calculations', 'Covenant Early Warning']
    },
    {
      category: 'LENDING_CREDIT',
      categoryLabel: 'Lending & Credit',
      tag: 'RETAIL ORIGINATION',
      title: 'Digital Mortgages & Retail Underwriting',
      description: 'Instant credit decisioning engine evaluating credit bureau scores, verified income streams, and property collateral appraisals in minutes.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      icon: Scale,
      highlights: ['Automated Bureau Ingestion', 'Algorithmic Credit Scoring', 'Digital Contract Signing']
    },
    {
      category: 'LENDING_CREDIT',
      categoryLabel: 'Lending & Credit',
      tag: 'IFRS 9 COMPLIANCE',
      title: 'Credit Loss & Impairment Calculation Engine',
      description: 'Dynamic staging calculation for Stage 1, 2, and 3 loans calculating forward-looking macroeconomic loss provisions automatically.',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      icon: BarChart3,
      highlights: ['3-Stage Impairment Model', 'Macroeconomic Scenario Weighting', 'Automated GL Provision Postings']
    },
    {
      category: 'RISK_PAYMENTS',
      categoryLabel: 'Risk & Payments',
      tag: 'PAYMENTS CLEARING',
      title: 'ISO 20022 Real-Time Payment Gateway',
      description: 'High-speed payment processing engine validating rich XML messages, sanction screening, and clearing through RTP, FedNow, and SWIFT.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
      icon: CreditCard,
      highlights: ['ISO 20022 XML Parsing', 'Instant Settlement Rails', 'Zero-Downtime High Availability']
    },
    {
      category: 'RISK_PAYMENTS',
      categoryLabel: 'Risk & Payments',
      tag: 'CRIME DETECTION',
      title: 'AI Anti-Money Laundering & Sanctions Engine',
      description: 'Autonomous financial transaction monitoring identifying structuring, layered transfers, and high-risk sanctions violations in real time.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      icon: ShieldCheck,
      highlights: ['Real-Time Sanction Watchlists', 'Behavioral Anomaly AI', 'Automated SAR Generation']
    },
    {
      category: 'RISK_PAYMENTS',
      categoryLabel: 'Risk & Payments',
      tag: 'CAPITAL ADEQUACY',
      title: 'Basel IV Capital & Stress Simulation Suite',
      description: 'Enterprise regulatory modeling computing standardized and internal ratings-based risk-weighted assets across market and operational risks.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      icon: Activity,
      highlights: ['Output Floor Calculations', 'Capital Buffer Tracking', 'Dynamic Stress Test Scenarios']
    }
  ];

  // Section 9: Transformation Pipeline Data
  const transformationStages = [
    {
      badge: 'PHASE 01',
      title: 'Legacy Core Assessment',
      subtitle: 'Technical Debt & Risk Audit',
      description: 'Evaluate bespoke mainframe dependencies, fragmented customer records, and manual batch reconciliation bottlenecks across legacy core banking systems.',
      tag: 'Core Banking Audit',
      icon: Compass,
      textColor: 'text-sky-400',
      glowColor: 'bg-sky-500',
      borderBase: 'border-sky-500/20',
      activeBorder: 'border-sky-400 bg-sky-950/40',
      before: 'Overnight batch cycles & siloed account ledgers',
      after: 'Unified in-memory Universal Financial Subledger architecture',
      metrics: ['Zero Mainframe Lock-In', 'Clean Core Decoupling', 'Real-Time Data Model']
    },
    {
      badge: 'PHASE 02',
      title: 'Universal Ledger Deployment',
      subtitle: 'Clean Core Financial Foundation',
      description: 'Deploy SAP S/4HANA Finance with multi-GAAP parallel accounting, ISO 20022 payment engines, and continuous intraday cash position visibility.',
      tag: 'In-Memory Ledger Integration',
      icon: Landmark,
      textColor: 'text-emerald-400',
      glowColor: 'bg-emerald-500',
      borderBase: 'border-emerald-500/20',
      activeBorder: 'border-emerald-400 bg-emerald-950/40',
      before: 'Fragmented multi-entity close taking 14+ business days',
      after: 'Continuous accounting with sub-second balance availability',
      metrics: ['Continuous Ledger Close', 'Multi-GAAP Parallel Valuation', 'ISO 20022 Native Processing']
    },
    {
      badge: 'PHASE 03',
      title: 'Autonomous Risk & Treasury',
      subtitle: 'Predictive Liquidity & AML Defense',
      description: 'Implement automated credit underwriting, real-time AML behavioral transaction scoring, and AI-driven intraday treasury cash balancing.',
      tag: 'Predictive Intelligence',
      icon: ShieldCheck,
      textColor: 'text-purple-400',
      glowColor: 'bg-purple-500',
      borderBase: 'border-purple-500/20',
      activeBorder: 'border-purple-400 bg-purple-950/40',
      before: 'Manual spreadsheet loan reviews & high false-positive AML',
      after: 'Instant algorithmic credit scoring & 70% lower AML review noise',
      metrics: ['Automated Underwriting', 'Real-Time Sanction Screening', 'Optimized Intraday Buffers']
    },
    {
      badge: 'PHASE 04',
      title: 'Open Banking & API Ecosystem',
      subtitle: 'Embedded Financial Services',
      description: 'Expose secure open banking APIs for BaaS, instant corporate disbursement rails, and institutional wealth asset tokenization.',
      tag: 'Composable Digital Platform',
      icon: Zap,
      textColor: 'text-cyan-400',
      glowColor: 'bg-cyan-500',
      borderBase: 'border-cyan-500/20',
      activeBorder: 'border-cyan-400 bg-cyan-950/40',
      before: 'Rigid closed banking perimeter with zero third-party velocity',
      after: 'Scalable open API banking ecosystem powering modern FinTechs',
      metrics: ['Microservices API Layer', 'Institutional Multi-Asset Portal', 'Sub-Second Global Settlement']
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
            src="https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=2000&q=80" 
            alt="Banking Financial District" 
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
              <Landmark className="w-3.5 h-3.5 text-cyan-400" />
              <span>KNOOVIQ INDUSTRY PRACTICE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-md">
              Next-Generation Banking & Financial Institutions
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
              Modernize core banking ledgers, accelerate intraday liquidity, automate Basel IV capital compliance, and deliver frictionless ISO 20022 real-time payments on clean-core SAP architecture.
            </p>

            {/* Feature Highlight Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Universal Financial Subledger</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Real-Time ISO 20022 Clearing</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Automated Basel IV Compliance</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                type="button"
                onClick={() => onOpenContact?.('Banking & Financial Institutions Practice')}
                className="px-6 py-3 rounded-xl bg-[#0070C0] hover:bg-[#005a9e] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#0070C0]/30 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Consult With Banking Architects</span>
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
                  <Landmark className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-slate-200 text-[11px]">Core Architecture</div>
                  <div className="text-[10px] text-slate-400">SAP S/4HANA Universal Ledger</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Coins className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-slate-200 text-[11px]">Intraday Cash</div>
                  <div className="text-[10px] text-slate-400">Continuous Treasury Positioning</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-slate-200 text-[11px]">Capital Governance</div>
                  <div className="text-[10px] text-slate-400">Basel IV & IFRS 9 Frameworks</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-slate-200 text-[11px]">Payments Clearing</div>
                  <div className="text-[10px] text-slate-400">Instant ISO 20022 Rails</div>
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
                Modernizing Capital Orchestration & Regulatory Resilience
              </h2>

              {/* Executive Thesis Quote Card */}
              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-slate-800 italic leading-relaxed">
                  "Leading financial institutions are moving away from monolithic core legacy mainframes to composable, clean-core financial architectures where intraday liquidity and regulatory reporting execute in sub-seconds."
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                As real-time payment schemes like FedNow and SEPA Instant become table stakes, banks can no longer afford overnight batch accounting windows. Modern financial leaders require real-time continuous sub-ledger visibility, predictive liquidity positioning, and automated compliance frameworks that turn regulatory reporting into a strategic operational advantage.
              </p>

              {/* 3 Strategic Pillars */}
              <div className="space-y-2 pt-1">
                
                <div className="p-3 rounded-xl border border-slate-300 bg-white hover:border-[#0070C0] transition-colors flex items-start gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-200">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">Unified Financial Accounting</h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      Harmonize retail deposits, syndicated loans, and treasury postings on an in-memory continuous ledger without batch reconciliation latency.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-slate-300 bg-white hover:border-[#0070C0] transition-colors flex items-start gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-200">
                    <Coins className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">Intraday Cash & Balance Precision</h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      Monitor multi-currency Nostro accounts and central bank reserve ratios in real time, eliminating expensive overnight liquidity buffers.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-slate-300 bg-white hover:border-[#0070C0] transition-colors flex items-start gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-200">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">Continuous Regulatory Assurance</h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      Embed automated Basel IV RWA computations and AI-powered AML transaction screening directly into core operational workflows.
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
              Systemic Pressures Confronting Modern Banking Institutions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              From inflexible batch-window accounting to rigid regulatory mandates, modern financial enterprises must resolve structural operational bottlenecks.
            </p>
          </div>

          {/* 6 Challenge Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {bankingChallenges.map((challenge, cIdx) => {
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
              <span>CORE BANKING PLATFORM ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Composable Financial Platform Architecture
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              A synchronized enterprise banking matrix uniting core ledgers, intraday liquidity, automated loan origination, and real-time payment rails.
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
                        BANKING MATRIX
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
              Technology Foundation for Next-Gen Banking
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Engineered on clean-core SAP technology suites layered with real-time ISO 20022 message parsers, algorithmic underwriting, and enterprise risk engines.
            </p>
          </div>

          {/* 6 Technology Suite Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Tech 1 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">CORE FINANCIAL LEDGER</span>
                <Landmark className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP S/4HANA Banking Ledger
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Universal in-memory financial sub-ledger capturing continuous multi-entity accounting entries across loans, deposits, and interbank clearings.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• In-Memory Universal Journal</div>
                <div className="flex items-center gap-1.5">• Multi-GAAP Parallel Ledgers</div>
              </div>
            </div>

            {/* Tech 2 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">TREASURY & LIQUIDITY</span>
                <Coins className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Treasury & Cash Management
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Centralized global liquidity orchestration giving treasurers sub-second intraday cash positioning across all correspondent bank accounts.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Automated Nostro Reconciliation</div>
                <div className="flex items-center gap-1.5">• Intraday Target Balancing</div>
              </div>
            </div>

            {/* Tech 3 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">PAYMENTS CLEARING</span>
                <CreditCard className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Financial Services Network
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Direct integration with global clearing systems, SWIFT networks, and domestic real-time settlement rails formatted in native ISO 20022 XML.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• ISO 20022 Native Translation</div>
                <div className="flex items-center gap-1.5">• Instant RTP / FedNow Gateway</div>
              </div>
            </div>

            {/* Tech 4 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">CAPITAL REGULATION</span>
                <Scale className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Financial Risk & Basel Engine
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automated credit risk modeling, output floor calculation, and liquidity coverage ratio (LCR) simulations compliant with Basel IV guidelines.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Standardized & IRB Risk Weighting</div>
                <div className="flex items-center gap-1.5">• Central Bank Audit Reporting</div>
              </div>
            </div>

            {/* Tech 5 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">FINANCIAL CRIME</span>
                <ShieldCheck className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                AI Sanction & AML Surveillance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Continuous behavioral analytics and machine learning anomaly detection flagging suspicious transactional behavior and sanctions violations.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Sub-Second Sanction Intercepts</div>
                <div className="flex items-center gap-1.5">• Automated SAR Case Generation</div>
              </div>
            </div>

            {/* Tech 6 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">API BANKING</span>
                <Zap className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP BTP Open Banking Hub
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Secure microservices mesh exposing standardized BaaS APIs, consent management, and developer sandboxes for ecosystem partner integration.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• PSD2 / Open Banking Compliant</div>
                <div className="flex items-center gap-1.5">• High-Concurrency Token Security</div>
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
              <Landmark className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>ENTERPRISE FUNCTIONAL CATALOG</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Solutions for Every Banking Domain
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Explore specialized enterprise functional modules engineered to modernize banking operations across core sub-ledgers, commercial lending, and automated risk governance.
            </p>
          </div>

          {/* Solution Domain Category Tabs - 4 Symmetrical Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-7 sm:mb-8">
            {[
              { id: 'ALL', label: 'All Solutions' },
              { id: 'CORE_LEDGER', label: 'Core Banking & Treasury' },
              { id: 'LENDING_CREDIT', label: 'Lending & Credit' },
              { id: 'RISK_PAYMENTS', label: 'Risk & Payments' }
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
              Turning Core Modernization into Strategic Capital Advantage
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              When core banking ledgers, treasury liquidity, and risk governance operate in real-time unison, institutions capture operational speed with audit-proof compliance.
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
                Continuous Sub-Second Financial Close
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Eliminate traditional 14-day month-end financial close bottlenecks with continuous in-memory sub-ledger entries and instant multi-GAAP consolidation.
              </p>
            </div>

            {/* Outcome 2 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Coins className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Intraday Liquidity Optimization
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Live cash position visibility across global clearing accounts minimizes idle overnight balances and avoids costly intraday liquidity penalty fees.
              </p>
            </div>

            {/* Outcome 3 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Audit-Ready Basel IV Governance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automated risk-weighted asset modeling and stress simulation provide instant lineage from regulatory reports down to individual loan transactions.
              </p>
            </div>

            {/* Outcome 4 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Frictionless Real-Time Payments
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Sub-second ISO 20022 clearing pipelines process millions of daily transactions with zero queue congestion across RTP, FedNow, and SWIFT networks.
              </p>
            </div>

            {/* Outcome 5 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Accelerated Commercial Loan Closings
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automated covenant verification and algorithmic financial statement parsing compress corporate loan approval cycles from weeks to hours.
              </p>
            </div>

            {/* Outcome 6 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Proactive Fraud Interception
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Continuous AI behavioral analysis flags synthetic identities and illicit funds movement in real time while reducing false-positive review backlogs.
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
              Core Banking Modernization in Action
            </h2>
            <div className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono tracking-wider uppercase">
              Clean-Core Financial Sub-Ledger Progression
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              How tier-1 and regional financial institutions transition from legacy batch mainframes to an integrated, real-time banking platform.
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
            <Landmark className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR BANKING FOUNDATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build a High-Velocity Financial Institution?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Modernize your core ledger, automate Basel IV capital compliance, and deliver frictionless ISO 20022 payments with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact?.('Banking & Core Financial Architecture Consultation')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to Our Banking Architects</span>
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
              <span>Basel IV Compliant Architecture</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-300" />
              <span>Sub-Second Universal Ledger</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-sky-300" />
              <span>ISO 20022 Native Clearing</span>
            </span>
          </div>

        </div>

      </section>

    </div>
  );
};
