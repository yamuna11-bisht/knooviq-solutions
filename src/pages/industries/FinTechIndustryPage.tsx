import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  CreditCard, 
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
  Boxes, 
  Globe2, 
  RefreshCw, 
  FileText, 
  ShieldCheck, 
  Layers, 
  Lock, 
  Coins, 
  Smartphone, 
  QrCode, 
  Users, 
  Building2, 
  Cpu, 
  Database, 
  Sliders, 
  AlertTriangle 
} from 'lucide-react';

interface FinTechIndustryPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const FinTechIndustryPage: React.FC<FinTechIndustryPageProps> = ({ 
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

  // Section 4: 8-Segment Circular Chevron Wheel (KNOOVIQ FinTech Platform Ecosystem)
  const wheelSegments = [
    {
      id: 'realtime-rails',
      title: 'Real-Time Payment Rails & Clearing',
      desc: 'Sub-second payment settlement pipelines routing transactions across FedNow, RTP, SEPA Instant, Pix, and UPI rails.',
      side: 'right',
      color: '#22C55E', // Green
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(34, 197, 94, 0.3)',
      icon: Zap
    },
    {
      id: 'baas-ledgers',
      title: 'Embedded Finance & BaaS Sub-Ledgers',
      desc: 'High-concurrency virtual account ledger architecture synchronizing partner card programs and consumer credit balances.',
      side: 'right',
      color: '#84CC16', // Lime Green
      textColor: 'text-lime-400',
      bgGlow: 'rgba(132, 204, 22, 0.3)',
      icon: Layers
    },
    {
      id: 'digital-wallets',
      title: 'Multi-Currency Stored-Value Wallets',
      desc: 'Frictionless cross-border wallet balances with instant FX auto-conversion, peer-to-peer transfers, and regulatory float auditing.',
      side: 'right',
      color: '#EAB308', // Yellow
      textColor: 'text-yellow-400',
      bgGlow: 'rgba(234, 179, 8, 0.3)',
      icon: Smartphone
    },
    {
      id: 'merchant-settlement',
      title: 'Merchant Interchange & Fee Settlement',
      desc: 'Automated interchange fee splitting, chargeback reserve management, and daily merchant disbursement reconciliation.',
      side: 'right',
      color: '#F97316', // Orange
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: CreditCard
    },
    {
      id: 'fraud-prevention',
      title: 'Sub-Second AI Fraud Interception',
      desc: 'Machine learning fraud detection scoring high-velocity transactions in under 20 milliseconds to stop account takeovers.',
      side: 'left',
      color: '#F43F5E', // Rose
      textColor: 'text-rose-400',
      bgGlow: 'rgba(244, 63, 94, 0.3)',
      icon: Lock
    },
    {
      id: 'iso20022-mesh',
      title: 'ISO 20022 Event Streaming Mesh',
      desc: 'Cloud-native Kafka and SAP Event Mesh pipelines translating disparate payload formats into standardized financial messaging.',
      side: 'left',
      color: '#EC4899', // Pink
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.3)',
      icon: Workflow
    },
    {
      id: 'kyc-compliance',
      title: 'Automated AML & Travel Rule Compliance',
      desc: 'Cryptographic compliance verification for counterparty identity exchange and regulatory anti-money laundering monitoring.',
      side: 'left',
      color: '#A855F7', // Purple
      textColor: 'text-purple-400',
      bgGlow: 'rgba(168, 85, 247, 0.3)',
      icon: ShieldCheck
    },
    {
      id: 'ledger-sync',
      title: 'Enterprise ERP General Ledger Sync',
      desc: 'Clean-core integration posting aggregated transactional batches into SAP S/4HANA Universal Journal without API rate stalls.',
      side: 'left',
      color: '#06B6D4', // Cyan
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(6, 182, 212, 0.3)',
      icon: Database
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
      id: 'api-authorization',
      label: 'Sub-Second Auth',
      sublabel: 'Tokenized Card & Pay Ingestion',
      desc: 'Authorize high-velocity payment requests with sub-20ms latency, cryptographic token validation, and instant balance checks.',
      tech: 'SAP BTP & Distributed Cloud Gateway',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80',
      icon: Zap
    },
    {
      id: 'fraud-scoring',
      label: 'Real-Time Fraud AI',
      sublabel: 'Behavioral Anomaly Interception',
      desc: 'Evaluate device fingerprints, IP proxy risk, and transactional velocities to block synthetic identities and bot-driven fraud.',
      tech: 'Machine Learning Risk Engine',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
      icon: Lock
    },
    {
      id: 'iso20022-clearing',
      label: 'ISO 20022 Clearing',
      sublabel: 'Multi-Rail Routing',
      desc: 'Route structured XML payment messages dynamically through the most cost-effective and immediate global clearing corridor.',
      tech: 'SAP Integration Suite & Event Mesh',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
      icon: Workflow
    },
    {
      id: 'virtual-ledger',
      label: 'Virtual Accounts & Wallets',
      sublabel: 'Multi-Tenant Stored Value',
      desc: 'Update multi-currency virtual wallet balances and calculate interchange revenue splits with zero ledger divergence.',
      tech: 'SAP Financial Services Subledger',
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
      icon: Smartphone
    },
    {
      id: 'merchant-disbursement',
      label: 'Merchant Settlement',
      sublabel: 'Automated Payout Rails',
      desc: 'Reconcile scheme fees, calculate net merchant payouts, manage rolling chargeback reserves, and trigger local clearing wires.',
      tech: 'SAP Collections & Disbursements',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
      icon: CreditCard
    },
    {
      id: 'erp-gl-postings',
      label: 'Continuous ERP Close',
      sublabel: 'Clean-Core GL Synchronization',
      desc: 'Batch millions of micro-transactions into compressed, audit-ready summary postings on the SAP S/4HANA Universal Journal.',
      tech: 'SAP S/4HANA Clean-Core Finance',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      icon: Database
    }
  ];

  // Section 3: FinTech Challenges Data
  const fintechChallenges = [
    {
      tag: 'TRANSACTION LATENCY',
      icon: Zap,
      title: 'High-Throughput Authorization Bottlenecks',
      desc: 'Legacy core banking systems collapse under the strain of Black Friday transaction surges, triggering rejected payments and customer churn.',
      footer: 'Peak Concurrency Queue Stalls'
    },
    {
      tag: 'LEDGER DIVERGENCE',
      icon: Database,
      title: 'Virtual Account & General Ledger Drift',
      desc: 'High-frequency transaction databases frequently fall out of sync with backend statutory ERP general ledgers, creating millions in phantom breaks.',
      footer: 'Micro-Transaction GL Drift'
    },
    {
      tag: 'FRAUDULENT VELOCITY',
      icon: Lock,
      title: 'Synthetic Identity & Automated Bot Raids',
      desc: 'Traditional batch fraud reviews fail against millisecond-speed credential stuffing and synthetic account creation across open API endpoints.',
      footer: 'Millisecond Account Takeover Risks'
    },
    {
      tag: 'PAYMENTS DISPARITY',
      icon: Workflow,
      title: 'Fragmented Global Clearing Specifications',
      desc: 'Navigating conflicting XML schemas across FedNow, SEPA Instant, Pix, and SWIFT MX delays geographical expansion and drives engineering debt.',
      footer: 'Schema Discrepancy Parsing Errors'
    },
    {
      tag: 'SETTLEMENT LEAKAGE',
      icon: CreditCard,
      title: 'Complex Interchange & Scheme Fee Leakage',
      desc: 'Manual spreadsheet reconciliation of card network interchange fees, chargeback fines, and gateway interchange leads to revenue loss.',
      footer: 'Unreconciled Scheme Fee Deductions'
    },
    {
      tag: 'REGULATORY AUDITING',
      icon: ShieldCheck,
      title: 'Stricter FinTech Regulatory Audits',
      desc: 'Central banks and licensing authorities enforce stringent audit requirements on customer float safeguarding and Travel Rule compliance.',
      footer: 'Safeguarding Float Audit Exposure'
    }
  ];

  // Section 7: Symmetrical 3x3 Modular Solutions (9 Cards)
  const industrySolutions = [
    {
      category: 'PAYMENTS_RAILS',
      categoryLabel: 'Payment Rails',
      tag: 'INSTANT RAILS',
      title: 'Multi-Rail Real-Time Clearing Gateway',
      description: 'Ultra-low latency payment orchestration routing transactions dynamically across FedNow, RTP, SEPA Instant, and local clearing networks.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      icon: Zap,
      highlights: ['Sub-20ms Transaction Routing', 'ISO 20022 Native XML', 'Zero-Downtime Multi-Region Active']
    },
    {
      category: 'PAYMENTS_RAILS',
      categoryLabel: 'Payment Rails',
      tag: 'CARD ISSUING',
      title: 'Virtual Card Issuing & Scheme Reconciliation',
      description: 'Programmatic Mastercard/Visa card provisioning with automated interchange fee calculation and chargeback dispute workflows.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
      icon: CreditCard,
      highlights: ['Tokenized Virtual Cards', 'Real-Time Interchange Splits', 'Automated Dispute Filing']
    },
    {
      category: 'PAYMENTS_RAILS',
      categoryLabel: 'Payment Rails',
      tag: 'MERCHANT SETTLEMENT',
      title: 'Merchant Payout & Reserve Settlement Engine',
      description: 'High-volume merchant reconciliation calculating gross card sales, net interchange deductions, and rolling risk reserve withholdings.',
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
      icon: Coins,
      highlights: ['Automated Net Payout Rails', 'Dynamic Risk Reserve Holds', 'Same-Day Wire Clearing']
    },
    {
      category: 'LEDGER_BAAS',
      categoryLabel: 'Ledgers & BaaS',
      tag: 'VIRTUAL SUB-LEDGER',
      title: 'SAP Financial Products Subledger for FinTech',
      description: 'High-scale multi-currency sub-ledger tracking millions of virtual customer accounts and stored-value digital wallets.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      icon: Layers,
      highlights: ['High-Concurrency Account Pools', 'Continuous Balance Validation', 'Safeguarding Float Auditing']
    },
    {
      category: 'LEDGER_BAAS',
      categoryLabel: 'Ledgers & BaaS',
      tag: 'EMBEDDED FINANCE',
      title: 'Banking-as-a-Service (BaaS) Orchestration Hub',
      description: 'Turnkey API platform enabling platforms and retailers to embed branded checking accounts, debit cards, and credit lines.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      icon: Building2,
      highlights: ['White-Label Account APIs', 'Instant KYC Verification', 'Partner Deposit Sweeps']
    },
    {
      category: 'LEDGER_BAAS',
      categoryLabel: 'Ledgers & BaaS',
      tag: 'ERP INTEGRATION',
      title: 'SAP S/4HANA Clean-Core GL Synchronizer',
      description: 'Intelligent compression engine summarizing high-frequency payment batches into audit-proof journal entries on Universal Journal.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      icon: Database,
      highlights: ['High-Volume Data Compression', 'Zero Reconciliation Breaks', 'Statutory Financial Audit Lineage']
    },
    {
      category: 'RISK_COMPLIANCE',
      categoryLabel: 'Risk & Security',
      tag: 'AI FRAUD DEFENSE',
      title: 'Sub-Second Machine Learning Fraud Interceptor',
      description: 'Continuous transactional risk scoring evaluating behavioral anomalies, synthetic identities, and device velocity indicators.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      icon: Lock,
      highlights: ['Sub-20ms Scoring SLA', 'Behavioral Biometric Pattern AI', 'Automated Step-Up Authentication']
    },
    {
      category: 'RISK_COMPLIANCE',
      categoryLabel: 'Risk & Security',
      tag: 'TRAVEL RULE & AML',
      title: 'Digital AML & Travel Rule Messaging Mesh',
      description: 'Automated compliance framework verifying originator and beneficiary identities across domestic and international payments.',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      icon: ShieldCheck,
      highlights: ['Automated Sanctions Screening', 'Encrypted Identity Exchange', 'Regulatory SAR Case Tracking']
    },
    {
      category: 'RISK_COMPLIANCE',
      categoryLabel: 'Risk & Security',
      tag: 'EVENT MESH',
      title: 'Cloud-Native ISO 20022 Financial Event Mesh',
      description: 'High-throughput Kafka and SAP Event Mesh pipelines ensuring guaranteed event delivery and state synchronization.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      icon: Workflow,
      highlights: ['100,000+ TPS Throughput', 'Schema Registry Validation', 'End-to-End Tracing Telemetry']
    }
  ];

  // Section 9: Transformation Pipeline Data
  const transformationStages = [
    {
      badge: 'PHASE 01',
      title: 'Architecture & Latency Audit',
      subtitle: 'Concurrency & Scalability Review',
      description: 'Analyze legacy monolithic databases, third-party payment gateway latency bottlenecks, and micro-transaction reconciliation drift.',
      tag: 'FinTech Architecture Audit',
      icon: Compass,
      textColor: 'text-sky-400',
      glowColor: 'bg-sky-500',
      borderBase: 'border-sky-500/20',
      activeBorder: 'border-sky-400 bg-sky-950/40',
      before: 'Fragmented custom databases & batch reconciliation drift',
      after: 'Composable microservices architecture with clean-core ERP backing',
      metrics: ['Zero Database Stalls', 'Sub-20ms Response Times', 'Audit-Ready Data Pipelines']
    },
    {
      badge: 'PHASE 02',
      title: 'Virtual Sub-Ledger & Clearing Mesh',
      subtitle: 'Real-Time Payment Rails Integration',
      description: 'Deploy high-concurrency virtual account sub-ledgers, connect ISO 20022 instant payment rails, and establish automated reconciliation.',
      tag: 'Payment Infrastructure',
      icon: Zap,
      textColor: 'text-emerald-400',
      glowColor: 'bg-emerald-500',
      borderBase: 'border-emerald-500/20',
      activeBorder: 'border-emerald-400 bg-emerald-950/40',
      before: 'Settlement reconciliations taking 48+ hours with manual breaks',
      after: 'Continuous sub-second transaction clearing with zero ledger drift',
      metrics: ['Continuous Subledger Validation', 'ISO 20022 Native Integration', 'Automated Scheme Reconciliations']
    },
    {
      badge: 'PHASE 03',
      title: 'Autonomous Fraud & AML Defense',
      subtitle: 'Machine Learning Interception',
      description: 'Implement real-time behavioral AI fraud detection scoring payments in under 20 milliseconds and automated Travel Rule identity exchange.',
      tag: 'Risk & Fraud Shield',
      icon: Lock,
      textColor: 'text-purple-400',
      glowColor: 'bg-purple-500',
      borderBase: 'border-purple-500/20',
      activeBorder: 'border-purple-400 bg-purple-950/40',
      before: 'High false-positive declines & manual fraud investigations',
      after: 'Autonomous sub-20ms fraud blocks & 80% lower review backlogs',
      metrics: ['Millisecond Fraud Defense', 'Automated Sanctions Screening', 'Travel Rule Compliance']
    },
    {
      badge: 'PHASE 04',
      title: 'Global BaaS & Embedded Finance',
      subtitle: 'Ecosystem Scale & Clean-Core ERP Sync',
      description: 'Scale developer API sandboxes for partner embedded finance and sync summarized financial vouchers directly into SAP S/4HANA.',
      tag: 'Ecosystem Scale',
      icon: Globe2,
      textColor: 'text-cyan-400',
      glowColor: 'bg-cyan-500',
      borderBase: 'border-cyan-500/20',
      activeBorder: 'border-cyan-400 bg-cyan-950/40',
      before: 'Siloed FinTech apps disconnected from enterprise audit ledgers',
      after: 'Unified global BaaS ecosystem with audit-proof ERP ledger close',
      metrics: ['Partner BaaS Portals', 'Automated Float Governance', 'Continuous Universal Journal Sync']
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
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=2000&q=80" 
            alt="FinTech Digital Payments" 
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
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>KNOOVIQ INDUSTRY PRACTICE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-md">
              High-Velocity FinTech & Embedded Payments Architecture
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
              Scale sub-second payment settlement pipelines, orchestrate multi-tenant virtual account ledgers, automate interchange fee reconciliations, and protect high-throughput rails with AI fraud defense on clean-core SAP architecture.
            </p>

            {/* Feature Highlight Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Sub-20ms Payment Settlement</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Multi-Currency Virtual Sub-Ledgers</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Automated Scheme Fee Matching</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                type="button"
                onClick={() => onOpenContact?.('FinTech & Real-Time Payments Architecture Consultation')}
                className="px-6 py-3 rounded-xl bg-[#0070C0] hover:bg-[#005a9e] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#0070C0]/30 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Consult With FinTech Architects</span>
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
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-slate-200 text-[11px]">Instant Settlement</div>
                  <div className="text-[10px] text-slate-400">FedNow, RTP & SEPA Instant</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-slate-200 text-[11px]">Virtual Ledgers</div>
                  <div className="text-[10px] text-slate-400">Multi-Tenant Account Pools</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-slate-200 text-[11px]">Fraud Defense</div>
                  <div className="text-[10px] text-slate-400">Sub-20ms Behavioral AI</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-slate-200 text-[11px]">ERP Reconciliation</div>
                  <div className="text-[10px] text-slate-400">SAP S/4HANA Clean-Core Sync</div>
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
                <Zap className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>EXECUTIVE PERSPECTIVE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Architecting Frictionless Scale with Enterprise Audit Rigor
              </h2>

              {/* Executive Thesis Quote Card */}
              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-slate-800 italic leading-relaxed">
                  "FinTech platforms process thousands of payment authorizations per second, but scale without ledger integrity leads to fatal audit failures. The modern FinTech architecture pairs sub-millisecond cloud APIs with clean-core ERP ledger synchronization."
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                As real-time payment schemes and embedded finance programs evolve, high-growth FinTechs can no longer operate on brittle custom database setups that drift from statutory general ledgers. Modern payment technology leaders require cloud-native event streaming meshes that process micro-transactions instantaneously while compressing records into audit-proof SAP accounting journals.
              </p>

              {/* 3 Strategic Pillars */}
              <div className="space-y-2 pt-1">
                
                <div className="p-3 rounded-xl border border-slate-300 bg-white hover:border-[#0070C0] transition-colors flex items-start gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-200">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">Sub-Second Payment Settlement</h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      Orchestrate high-throughput payment rails across FedNow, RTP, and instant schemes with sub-20ms latency.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-slate-300 bg-white hover:border-[#0070C0] transition-colors flex items-start gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-200">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">Virtual Account & Float Integrity</h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      Maintain multi-currency stored-value digital wallets with continuous balance audits and regulatory safeguarding compliance.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-slate-300 bg-white hover:border-[#0070C0] transition-colors flex items-start gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-200">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">Automated ERP Ledger Sync</h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      Batch millions of transactions into compressed, audit-ready summaries on the SAP Universal Journal without system stalls.
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
              Operational Hurdles Restricting FinTech Scalability
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              From authorization queue delays to complex scheme fee leakage, FinTech platforms must resolve core technical vulnerabilities.
            </p>
          </div>

          {/* 6 Challenge Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {fintechChallenges.map((challenge, cIdx) => {
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
              <span>FINTECH PLATFORM ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Composable Financial Technology Architecture
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              A synchronized enterprise payments matrix uniting real-time clearing rails, multi-tenant virtual ledgers, millisecond AI fraud defense, and clean-core ERP ledgers.
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
                        FINTECH MESH
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
              Technology Foundation for Scalable FinTech
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Cloud-native microservices and event streaming meshes seamlessly integrated into enterprise SAP financial ledgers for uninterrupted performance.
            </p>
          </div>

          {/* 6 Technology Suite Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Tech 1 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">PAYMENT ORCHESTRATION</span>
                <Zap className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                Real-Time Multi-Rail Switch
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Distributed routing gateway ensuring sub-20ms transaction clearance across FedNow, RTP, SEPA Instant, and local card networks.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Multi-Rail Failover Routing</div>
                <div className="flex items-center gap-1.5">• Sub-20ms P99 Latency SLA</div>
              </div>
            </div>

            {/* Tech 2 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">VIRTUAL SUB-LEDGER</span>
                <Layers className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Financial Products Subledger
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                High-volume transactional sub-ledger managing millions of multi-currency customer wallets, stored-value balances, and regulatory float pools.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Continuous Balance Validation</div>
                <div className="flex items-center gap-1.5">• Multi-Tenant Virtual Accounts</div>
              </div>
            </div>

            {/* Tech 3 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">CLEAN-CORE ERP POSTINGS</span>
                <Database className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP S/4HANA Ledger Sync
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Asynchronous compression pipeline summarizing millions of daily payments into audit-proof vouchers on the Universal Journal.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• High-Volume Batch Compression</div>
                <div className="flex items-center gap-1.5">• Real-Time Settlement Reconciliation</div>
              </div>
            </div>

            {/* Tech 4 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">AI FRAUD DEFENSE</span>
                <Lock className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                Sub-Second Behavioral ML Engine
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Machine learning model scoring live transaction patterns, IP velocity, and device signals in milliseconds to intercept account takeover.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• In-Flight Payment Scoring</div>
                <div className="flex items-center gap-1.5">• 80% Reduction in False Declines</div>
              </div>
            </div>

            {/* Tech 5 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">EVENT STREAMING</span>
                <Workflow className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Event Mesh & Kafka Fabric
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Event-driven distributed messaging architecture publishing ISO 20022 events to billing, fraud, and risk systems with guaranteed order.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• 100,000+ TPS Throughput</div>
                <div className="flex items-center gap-1.5">• Guaranteed Once-Delivery State</div>
              </div>
            </div>

            {/* Tech 6 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">EMBEDDED APIS</span>
                <Globe2 className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP BTP BaaS API Mesh
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Secure API gateway facilitating rapid partner onboarding, granular permission scoping, developer sandboxes, and rate-limiting governance.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Zero-Trust OAuth 2.0 Auth</div>
                <div className="flex items-center gap-1.5">• Developer Sandbox Environments</div>
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
              <Zap className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>ENTERPRISE FUNCTIONAL CATALOG</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Solutions for Every FinTech Domain
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Explore specialized enterprise functional modules engineered to modernize FinTech operations across real-time payment rails, virtual sub-ledgers, and fraud defense.
            </p>
          </div>

          {/* Solution Domain Category Tabs - 4 Symmetrical Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-7 sm:mb-8">
            {[
              { id: 'ALL', label: 'All Solutions' },
              { id: 'PAYMENTS_RAILS', label: 'Payment Rails' },
              { id: 'LEDGER_BAAS', label: 'Ledgers & BaaS' },
              { id: 'RISK_COMPLIANCE', label: 'Risk & Security' }
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
              Scaling FinTech Velocity without Regulatory Compromise
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              When high-speed payment switches, virtual account sub-ledgers, and enterprise ERP sync execute in real time, FinTechs capture hyper-scale growth safely.
            </p>
          </div>

          {/* 6 Outcomes (Large typography, generous whitespace, NO dashboards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Outcome 1 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Sub-20ms Authorization SLA
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Process peak-cycle payment volumes with guaranteed sub-20ms authorization response times across global card and account-to-account rails.
              </p>
            </div>

            {/* Outcome 2 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Zero ERP Reconciliation Breaks
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automated continuous batching synchronizes high-frequency transactional data directly into the SAP Universal Journal with zero missing penny breaks.
              </p>
            </div>

            {/* Outcome 3 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Millisecond Fraud Interception
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Autonomous machine learning behavioral analysis intercepts account takeovers and synthetic identity fraud before funds leave the platform.
              </p>
            </div>

            {/* Outcome 4 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Zero Scheme Fee Revenue Leakage
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Algorithmic scheme fee reconciliation automatically validates card network invoices down to individual basis points, preventing interchange overbilling.
              </p>
            </div>

            {/* Outcome 5 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Continuous Regulatory Float Auditing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automated safeguarding reconciliation matches customer wallet balances against custodian bank reserves in real time for audit compliance.
              </p>
            </div>

            {/* Outcome 6 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Accelerated Global Corridor Expansion
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Composable ISO 20022 messaging pipelines allow FinTechs to expand into new international payment corridors in weeks without rewriting code.
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
              FinTech Architecture in Action
            </h2>
            <div className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono tracking-wider uppercase">
              Real-Time Settlement & Clean-Core ERP Progression
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              How high-growth FinTech unicorns and digital neo-banks transition from brittle database scripts to an enterprise-grade payments engine.
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
            <Zap className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR FINTECH RAILS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Scale Your High-Velocity FinTech Platform?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Orchestrate instant payment rails, automate interchange fee matching, and synchronize virtual accounts into clean-core SAP ledgers with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact?.('FinTech & Payment Architecture Consultation')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to Our FinTech Architects</span>
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
              <span>ISO 20022 Compliant Architecture</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-300" />
              <span>Sub-20ms P99 Latency SLA</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-sky-300" />
              <span>Multi-Currency Global Rails</span>
            </span>
          </div>

        </div>

      </section>

    </div>
  );
};
