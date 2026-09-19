import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  Layers, 
  Activity, 
  ShieldCheck, 
  Gauge, 
  TrendingUp, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  ChevronDown, 
  Sparkles, 
  Clock, 
  Workflow, 
  Compass, 
  Cpu, 
  Zap, 
  Boxes, 
  HelpCircle,
  Award,
  Globe2,
  RefreshCw,
  FileText,
  Radio,
  Server,
  AlertTriangle,
  FolderKanban,
  FileCheck,
  Split,
  Binary,
  Cloud,
  Database
} from 'lucide-react';

interface IndustryPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const SoftwareSaasIndustryPage: React.FC<IndustryPageProps> = ({ onOpenContact }) => {
  // State for Executive Perspective Journey
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

  // State for Circular Chevron Wheel
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(null);

  // State for Modular Solutions Filter
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');

  // State for Transformation Stage Console
  const [activeTransformStage, setActiveTransformStage] = useState<number>(0);

  // State for Architecture Tab
  const [activeArchTab, setActiveArchTab] = useState<string>('core');

  // State for FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Section 4: Circular Chevron Radial Wheel Segments (KNOOVIQ SaaS Revenue Architecture)
  const wheelSegments = [
    {
      id: 'usage-rating',
      title: 'Consumption Metering & Dynamic Rating',
      desc: 'High-throughput event ingestion collecting API calls, data throughput, and active user metrics for real-time rating.',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(2, 132, 199, 0.3)',
      icon: Zap
    },
    {
      id: 'contract-lifecycle',
      title: 'Contract Lifecycle & Coterminous Terms',
      desc: 'Seamless management of subscription renewals, mid-contract tier upgrades, seat expansions, and coterminous alignment.',
      side: 'right',
      color: '#0EA5E9',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(14, 165, 233, 0.3)',
      icon: FileCheck
    },
    {
      id: 'rev-rec',
      title: 'Automated Revenue Accounting & Allocation',
      desc: 'Standard-compliant contract asset and liability scheduling separating deferred ARR from recognized performance obligations.',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.3)',
      icon: ShieldCheck
    },
    {
      id: 'dunning-churn',
      title: 'Automated Dunning & Involuntary Churn Defense',
      desc: 'Smart card retry logic, automated account updater integration, and customer dunning workflows preventing payment failure.',
      side: 'right',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.3)',
      icon: RefreshCw
    },
    {
      id: 'multi-currency-tax',
      title: 'Global Tax Jurisdiction Settlement',
      desc: 'Automated calculation of digital services taxes, US sales tax nexus, European VAT, and statutory e-invoicing formats.',
      side: 'left',
      color: '#F97316',
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: Globe2
    },
    {
      id: 'partner-revshare',
      title: 'Marketplace & Partner Revenue Sharing',
      desc: 'Multi-party settlement calculating ecosystem developer royalties, agency referral commissions, and platform fees.',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.3)',
      icon: Split
    },
    {
      id: 'saas-metrics',
      title: 'ARR, NRR & Cohort Margin Analytics',
      desc: 'Real-time telemetry measuring Net Retention Rate, customer lifetime value, and cohort churn directly from core finance ledgers.',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.3)',
      icon: BarChart3
    },
    {
      id: 'invoice-presentment',
      title: 'Omnichannel Digital Billing Presentment',
      desc: 'Self-service customer billing consoles offering downloadable tax invoices, payment method switching, and usage logs.',
      side: 'left',
      color: '#3B82F6',
      textColor: 'text-blue-400',
      bgGlow: 'rgba(59, 130, 246, 0.3)',
      icon: CreditCard
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
    const rMid = 168;
    const gap = 1.6;
    const tip = 7.5;
    const theta1 = -90 + index * 45 + gap;
    const theta2 = -90 + (index + 1) * 45 - gap;
    const midAngle = (theta1 + theta2) / 2 + tip / 2;
    const rad = (deg: number) => (deg * Math.PI) / 180;
    return {
      x: cx + rMid * Math.cos(rad(midAngle)),
      y: cy + rMid * Math.sin(rad(midAngle))
    };
  };

  // Section 2: Journey Steps
  const journeySteps = [
    {
      id: 'catalog',
      label: 'Pricing Models',
      sublabel: 'Plan Definition',
      tech: 'SAP Subscription Billing',
      desc: 'Configuring multi-attribute commercial models including seat licenses, committed spend tiers, and variable usage burst rating.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      icon: CreditCard
    },
    {
      id: 'ingestion',
      label: 'Usage Ingestion',
      sublabel: 'Event Streaming',
      tech: 'SAP BTP Event Mesh',
      desc: 'Real-time telemetry ingestion capturing cloud API pings, compute hours, and storage volume with idempotency safeguards.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      icon: Zap
    },
    {
      id: 'rating',
      label: 'Dynamic Rating',
      sublabel: 'Overage Calculation',
      tech: 'SAP Convergent Charging',
      desc: 'Processing usage events against contracted volume discounts, minimum commitments, and peak concurrency thresholds.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
      icon: Gauge
    },
    {
      id: 'invoicing',
      label: 'Digital Billing',
      sublabel: 'Consolidated Statements',
      tech: 'SAP Convergent Invoicing',
      desc: 'Consolidating one-time setup fees, recurring base subscriptions, and metered consumption into unified tax-compliant invoices.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      icon: FileText
    },
    {
      id: 'revenue',
      label: 'Revenue Accounting',
      sublabel: 'Deferred Schedule',
      tech: 'SAP Revenue Accounting (RAR)',
      desc: 'Automating multi-element arrangement allocations, performance obligation recognition, and deferred revenue balances.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      icon: ShieldCheck
    },
    {
      id: 'retention',
      label: 'Renewal & Dunning',
      sublabel: 'Churn Safeguards',
      tech: 'SAP S/4HANA Contract Accounts',
      desc: 'Proactive payment card expiration alerts, automated re-attempts, and seamless evergreen subscription renewals.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
      icon: RefreshCw
    }
  ];

  // Section 3: Industry Challenges & Bottlenecks Data (6 Cards)
  const industryChallenges = [
    {
      id: 'usage-leakage',
      tag: 'BILLING ACCURACY',
      title: 'Unrated API & Consumption Leakage',
      desc: 'High-volume product usage events drop between product telemetry and the billing engine, causing unbilled cloud consumption.',
      status: 'REVENUE LEAKAGE',
      statusColor: 'text-rose-400 bg-rose-950/60 border-rose-800'
    },
    {
      id: 'rev-rec-audits',
      tag: 'STATUTORY ACCOUNTING',
      title: 'Complex Multi-Element Revenue Allocation',
      desc: 'Bundled offerings with software licenses, implementation services, and support trigger compliance friction during financial audits.',
      status: 'AUDIT RISK',
      statusColor: 'text-amber-400 bg-amber-950/60 border-amber-800'
    },
    {
      id: 'involuntary-churn',
      tag: 'CUSTOMER RETENTION',
      title: 'Involuntary Payment Churn',
      desc: 'Expired corporate credit cards and rigid payment gateways fail silently, canceling enterprise customer subscriptions unexpectedly.',
      status: 'CHURN VULNERABILITY',
      statusColor: 'text-rose-400 bg-rose-950/60 border-rose-800'
    },
    {
      id: 'contract-amendments',
      tag: 'COMMERCIAL AGILITY',
      title: 'Mid-Term Subscription Amendments',
      desc: 'Sales teams struggle to execute mid-contract seat upgrades, add-ons, or downgrades without breaking billing cadence and invoicing cycles.',
      status: 'OPERATIONAL FRICTION',
      statusColor: 'text-amber-400 bg-amber-950/60 border-amber-800'
    },
    {
      id: 'multi-jurisdiction-tax',
      tag: 'GLOBAL COMPLIANCE',
      title: 'Cross-Border Digital Tax Complexity',
      desc: 'Expanding SaaS operations globally requires navigating diverse VAT regulations, US state sales tax thresholds, and mandatory electronic invoices.',
      status: 'COMPLIANCE EXPOSURE',
      statusColor: 'text-rose-400 bg-rose-950/60 border-rose-800'
    },
    {
      id: 'metrics-fragmentation',
      tag: 'EXECUTIVE INTELLIGENCE',
      title: 'Disconnected SaaS Operational Metrics',
      desc: 'Discrepancies between CRM opportunity bookings, billing records, and financial ledgers distort essential metrics like Net Retention Rate.',
      status: 'GOVERNANCE BLINDSPOT',
      statusColor: 'text-amber-400 bg-amber-950/60 border-amber-800'
    }
  ];

  // Section 5: Architecture Tabs Data
  const architectureTabs = [
    {
      id: 'core',
      name: 'Digital Core Financials',
      tag: 'SAP S/4HANA REVENUE & FINANCE',
      headline: 'Centralized Subscription Ledger & Contract Accounting',
      desc: 'The immutable digital core orchestrating contract liabilities, automated invoicing proposals, and statutory multi-currency ledgers.',
      capabilities: [
        'Universal journal reconciling recurring subscription fees with deferred revenue ledgers',
        'Native compliance with international revenue recognition standards',
        'Automated contract modification handling with cumulative catch-up entries',
        'Scalable Contract Accounts Receivable and Payable (FI-CA) for enterprise volume'
      ],
      diagramDetails: [
        { label: 'Universal Ledger', value: 'Real-Time Posting' },
        { label: 'Revenue Accounting', value: 'Automated Schedules' },
        { label: 'Invoice Generation', value: 'Consolidated Billing' },
        { label: 'Contract Accounts', value: 'High-Volume FI-CA' }
      ]
    },
    {
      id: 'edge',
      name: 'Metering & Rating Engine',
      tag: 'SAP SUBSCRIPTION BILLING & CHARGING',
      headline: 'Real-Time Event Ingestion & Dynamic Tariff Calculation',
      desc: 'High-speed ingestion microservices processing usage data streams, evaluating tier thresholds, and calculating overages instantaneously.',
      capabilities: [
        'Mass event streaming ingestion handling cloud platform telemetry without dropouts',
        'Flexible tariff designer supporting tiered volume, peak concurrency, and minimum commits',
        'Instant wallet balance and prepaid credit balance deductions',
        'Automated dunning engine with smart retry logic and card updater connectivity'
      ],
      diagramDetails: [
        { label: 'Event Ingestion', value: 'Continuous Streaming' },
        { label: 'Dynamic Rating', value: 'Multi-Tier Tariffs' },
        { label: 'Credit Balance', value: 'Real-Time Deduction' },
        { label: 'Smart Dunning', value: 'Automated Recovery' }
      ]
    },
    {
      id: 'cloud',
      name: 'SaaS Metric Intelligence',
      tag: 'SAP BTP & ANALYTICS CLOUD',
      headline: 'Unified ARR, NRR & Customer Health Analytics',
      desc: 'Delivering unified board-ready insights combining subscription contracts, product usage intensity, and financial profitability.',
      capabilities: [
        'Executive cockpits visualizing Annual Recurring Revenue and Net Retention Rate',
        'Predictive churn detection modeling declining API usage and customer ticket velocity',
        'Customer lifetime value and acquisition cost reconciliation across product cohorts',
        'Clean Core integration extending SaaS billing logic without modifying core code'
      ],
      diagramDetails: [
        { label: 'ARR / NRR Cockpit', value: 'Executive Insights' },
        { label: 'Churn Anticipation', value: 'Usage Telemetry' },
        { label: 'Cohort Margins', value: 'True Profitability' },
        { label: 'Clean Extension', value: 'SAP BTP Runtime' }
      ]
    }
  ];

  // Section 6: Modular Solutions Data
  const modularSolutions = [
    {
      category: 'CORE',
      title: 'Enterprise Subscription & Recurring Invoicing',
      badge: 'SUBSCRIPTION BILLING',
      desc: 'Manage complex recurring billing plans, annual advance invoices, coterminous add-ons, and payment gateway collections seamlessly.',
      features: [
        'Seat-based and tier-based recurring contract lifecycles',
        'Coterminous renewals and mid-term contract amendments',
        'Automated payment gateway reconciliation and settlement',
        'Consolidated enterprise invoicing across multiple product lines'
      ]
    },
    {
      category: 'METERING',
      title: 'High-Volume Consumption Rating & Mediation',
      badge: 'CONVERGENT CHARGING',
      desc: 'Capture cloud application telemetry, API calls, and computational consumption, transforming raw usage records into rated line items.',
      features: [
        'Idempotent ingestion preventing duplicate event processing',
        'Dynamic overage and step-down volume discounting',
        'Prepaid credit drawdowns and minimum commitment tracking',
        'Real-time customer usage notification triggers'
      ]
    },
    {
      category: 'REVENUE',
      title: 'Automated Revenue Recognition & Compliance',
      badge: 'REVENUE ACCOUNTING (RAR)',
      desc: 'Comply effortlessly with statutory revenue recognition standards through automated contract allocation and performance obligation tracking.',
      features: [
        'Automated allocation of standalone selling prices (SSP)',
        'Contract asset and liability balance sheet scheduling',
        'Automated catch-up postings for mid-contract modifications',
        'Complete audit-ready revenue disclosure reporting'
      ]
    },
    {
      category: 'ANALYTICS',
      title: 'SaaS Unit Economics & Churn Cockpit',
      badge: 'SAP ANALYTICS CLOUD',
      desc: 'Deliver authoritative unit economics connecting subscription contracts with billing realization and underlying cloud hosting costs.',
      features: [
        'Real-time Net Retention Rate (NRR) and expansion telemetry',
        'Customer health scorecards incorporating live usage velocity',
        'Gross margin visibility per customer tier and hosting cluster',
        'Predictive revenue forecasting aligned with sales pipeline'
      ]
    }
  ];

  // Filtered Modular Solutions
  const filteredSolutions = activeSolutionCategory === 'ALL' 
    ? modularSolutions 
    : modularSolutions.filter(s => s.category === activeSolutionCategory);

  // Section 7: Standardization & Clean Core Matrix
  const matrixRows = [
    {
      dimension: 'Billing Model Agility',
      legacy: 'Custom hard-coded billing scripts that break whenever pricing models or feature tiers change.',
      cleanCore: 'Composable subscription billing engine allowing rapid introduction of hybrid usage and seat plans.',
      valueImpact: 'Rapid Time-to-Market'
    },
    {
      dimension: 'Usage Event Capture',
      legacy: 'Periodic batch ingestion with frequent event drops, delayed overage billing, and customer friction.',
      cleanCore: 'Real-time event streaming with automated mediation, idempotency safeguards, and instant rating.',
      valueImpact: 'Zero Consumption Leakage'
    },
    {
      dimension: 'Revenue Accounting',
      legacy: 'Vulnerable spreadsheets attempting manual deferred revenue calculations across messy contract terms.',
      cleanCore: 'Automated revenue accounting engine scheduling contract liabilities according to accounting rules.',
      valueImpact: 'Total Statutory Integrity'
    },
    {
      dimension: 'Mid-Term Amendments',
      legacy: 'Manual contract cancellation and re-creation causing invoicing errors and disrupted customer access.',
      cleanCore: 'Native contract lifecycle workflows supporting coterminous additions and pro-rata credit adjustments.',
      valueImpact: 'Frictionless Customer Growth'
    },
    {
      dimension: 'Failed Payment Recovery',
      legacy: 'Manual billing follow-ups resulting in avoidable customer account churn and bad debt write-offs.',
      cleanCore: 'Intelligent card retry schedules, automated account updater integration, and customer dunning.',
      valueImpact: 'Maximum Retained Revenue'
    }
  ];

  // Section 8: Transformation Roadmap Stages Data
  const transformationStages = [
    {
      badge: 'FOUNDATION',
      title: 'Unified Subscription Core & Digital Billing',
      subtitle: 'Digital Ledger & Recurring Invoicing',
      tag: 'CORE UNIFICATION',
      textColor: 'text-sky-400',
      description: 'Establish the core subscription catalog, standardized recurring invoicing schedules, and automated gateway collections.',
      before: 'Fragmented billing gateways and disconnected financial ledgers requiring manual reconciliation.',
      after: 'Unified SAP S/4HANA digital core integrating subscription contracts directly with payment gateways.',
      metrics: ['Single-source-of-truth customer contract ledger', 'Automated recurring invoice generation', 'Direct payment gateway reconciliation']
    },
    {
      badge: 'INTEGRATION',
      title: 'Real-Time Usage Rating & Mediation',
      subtitle: 'Dynamic Telemetry & Consumption Engine',
      tag: 'USAGE ORCHESTRATION',
      textColor: 'text-cyan-400',
      description: 'Connect software product telemetry to high-throughput rating engines to monetize usage, overages, and dynamic tiers.',
      before: 'Unmonitored API usage and manual post-cycle spreadsheet calculations for overage billing.',
      after: 'Real-time event streaming mediation rating product events and updating customer balances instantly.',
      metrics: ['Zero dropped consumption events', 'Instant overage calculation', 'Automated customer threshold alerts']
    },
    {
      badge: 'ORCHESTRATION',
      title: 'Automated Revenue Recognition & Compliance',
      subtitle: 'Standard-Compliant Revenue Ledger',
      tag: 'COMPLIANCE ASSURANCE',
      textColor: 'text-emerald-400',
      description: 'Automate multi-element revenue allocation, contract asset scheduling, and statutory disclosure generation.',
      before: 'Audit vulnerability caused by complex spreadsheet revenue schedules for multi-year contracts.',
      after: 'SAP Revenue Accounting and Reporting managing performance obligations and deferred balances automatically.',
      metrics: ['Audit-ready deferred revenue schedules', 'Automated contract amendment catch-ups', 'Eliminated revenue accounting restatements']
    },
    {
      badge: 'AUTONOMY',
      title: 'Predictive Retention & SaaS Unit Economics',
      subtitle: 'Predictive Analytics & Lifetime Value',
      tag: 'SCALE & VALUATION',
      textColor: 'text-purple-400',
      description: 'Implement predictive churn interventions and deep unit economic modeling across customer tiers and product lines.',
      before: 'Delayed executive awareness of customer churn risks and uncertain gross margins per enterprise account.',
      after: 'Real-time ARR and NRR telemetry coupled with proactive automated dunning and customer renewal workflows.',
      metrics: ['Predictive customer health telemetry', 'Maximum retained subscription ARR', 'Granular customer cohort profitability']
    }
  ];

  // Section 10: FAQs
  const faqs = [
    {
      q: 'How does the platform manage hybrid contracts combining seat licenses and usage overages?',
      a: 'SAP Subscription Billing and Convergent Charging seamlessly unite flat-rate recurring fees (such as monthly seat licenses) with variable consumption metrics (such as API calls or compute volume) within a single customer subscription contract. Invoices are automatically compiled, presenting clear itemized usage and base charges on a single consolidated statement.'
    },
    {
      q: 'How does automated revenue recognition comply with statutory accounting standards?',
      a: 'SAP Revenue Accounting and Reporting (RAR) automatically breaks down complex contracts into separate performance obligations, calculates standalone selling prices (SSP), and schedules revenue recognition as services are delivered over time. When mid-contract amendments occur, the system automatically posts cumulative catch-up entries without manual calculation.'
    },
    {
      q: 'Can the solution handle multi-country sales tax, VAT, and mandatory digital invoicing?',
      a: 'Yes. The platform integrates natively with localized tax calculation engines and statutory reporting frameworks. It automatically determines correct US state sales tax rates, European VAT reverse-charge rules, and generates compliant electronic invoice formats across global jurisdictions.'
    },
    {
      q: 'How does KNOOVIQ ensure high-throughput event ingestion without performance bottlenecks?',
      a: 'By separating the usage ingestion layer from the financial core, SAP Business Technology Platform Event Mesh and high-speed mediation microservices buffer and process massive volumes of operational telemetry. Only validated, rated financial transactions are posted to the SAP S/4HANA core, preserving system responsiveness and data integrity.'
    }
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80" 
            alt="Software, SaaS & Subscription Billing" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            
            {/* Practice Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider mb-6"
            >
              <CreditCard className="w-4 h-4 text-sky-400" />
              <span>SOFTWARE, SAAS & SUBSCRIPTION BILLING</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4"
            >
              Monetizing Cloud Scale with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
                Precision Subscription Core
              </span>
            </motion.h1>

            {/* Subheadline / Value Proposition */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-6 font-normal"
            >
              Orchestrate high-throughput consumption metering, dynamic billing plans, automated revenue recognition, and proactive churn recovery on SAP S/4HANA Clean Core.
            </motion.p>

            {/* Feature Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Real-Time Usage Metering & Rating</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Standard-Compliant Revenue Accounting</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Automated Dunning & Involuntary Churn Defense</span>
              </span>
            </motion.div>

            {/* Architectural Trust Ribbon */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
            >
              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">USAGE METERING</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">Dynamic Tariffs</div>
                <div className="text-[10px] text-slate-300">Zero Ingestion Loss</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">REV-REC CORE</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">Automated Schedules</div>
                <div className="text-[10px] text-slate-300">Full Audit Compliance</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">DUNNING ENGINE</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">Smart Card Retries</div>
                <div className="text-[10px] text-slate-300">Retain ARR Revenue</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">GLOBAL TAX</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">Automated VAT & Nexus</div>
                <div className="text-[10px] text-slate-300">Statutory Format Ready</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE INDUSTRY PERSPECTIVE & JOURNEY VISUALIZER
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
                <Activity className="w-3.5 h-3.5 text-sky-400" />
                <span>EXECUTIVE INDUSTRY PERSPECTIVE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Aligning Subscription Models with <span className="text-sky-400">Enterprise Revenue Integrity</span>
              </h2>

              <div className="border-l-4 border-sky-500 pl-4 py-2 bg-white/5 rounded-r-xl">
                <p className="text-sm font-semibold text-slate-200 leading-relaxed italic">
                  &ldquo;Modern software valuation depends on frictionless subscription operations—where telemetry rating, automated revenue allocation, and contract amendments happen synchronously without manual interventions.&rdquo;
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                As software enterprises transition from rigid annual contracts to hybrid consumption and product-led growth models, billing complexity escalates. Unbilled API bursts, manual deferred revenue schedules, and involuntary payment churn can cripple cash flow. Knooviq establishes an automated digital backbone connecting usage streaming, rating tariffs, and statutory ledgers into a modern SAP Clean Core.
              </p>

              {/* Information Checklist Grid (Zero Numbers/Percents) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Real-time ingestion rating API calls and storage without data loss',
                  'Automated deferred revenue scheduling complying with accounting standards',
                  'Intelligent dunning sequences recovering involuntary subscription failures',
                  'Coterminous mid-contract seat expansions and pro-rated billing updates'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Journey Visualizer */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-slate-900/90 border border-white/10 p-5 sm:p-6 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                      STAGE WORKFLOW
                    </span>
                  </div>
                  <span className="text-xs font-mono text-sky-400 font-semibold">
                    {journeySteps[activeJourneyStep].label}
                  </span>
                </div>

                {/* Workflow Stage Buttons */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 mb-5">
                  {journeySteps.map((step, idx) => {
                    const isSelected = activeJourneyStep === idx;
                    const StepIcon = step.icon;
                    return (
                      <button
                        key={step.id}
                        onClick={() => setActiveJourneyStep(idx)}
                        className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                          isSelected
                            ? 'bg-sky-500/20 border-sky-400 text-sky-300 shadow-md'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <StepIcon className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-mono font-semibold truncate w-full">
                          {step.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Step Showcase Card */}
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-950">
                  <div className="h-44 sm:h-52 w-full relative">
                    <img 
                      src={journeySteps[activeJourneyStep].image} 
                      alt={journeySteps[activeJourneyStep].label} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-wider block">
                          {journeySteps[activeJourneyStep].sublabel}
                        </span>
                        <h4 className="text-base font-bold text-white">
                          {journeySteps[activeJourneyStep].label}
                        </h4>
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md text-slate-200 border border-white/15">
                        {journeySteps[activeJourneyStep].tech}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {journeySteps[activeJourneyStep].desc}
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: KEY CHALLENGES & DOMAIN BOTTLENECKS (6 Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-400/30 text-xs font-mono font-bold uppercase tracking-wider text-rose-300">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
              <span>INDUSTRY BOTTLENECKS & RISKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Monetization Bottlenecks in Modern Software & SaaS
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Inherent operational obstacles that slow down revenue recognition, increase customer churn, and expose firms to audit risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industryChallenges.map((challenge) => (
              <div 
                key={challenge.id}
                className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-sky-400/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      {challenge.tag}
                    </span>
                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border ${challenge.statusColor}`}>
                      {challenge.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                    {challenge.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {challenge.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Standard SAP Resolution</span>
                  <span className="text-sky-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>Mitigate</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CIRCULAR CHEVRON RADIAL WHEEL (8 Segments)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-white/10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
              <Compass className="w-3.5 h-3.5 text-sky-400" />
              <span>PLATFORM ECOSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              KNOOVIQ SaaS Revenue Architecture
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Eight integrated modules orchestrating high-velocity billing, dynamic metering, and standard revenue accounting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Flanking Capability Cards (4) */}
            <div className="lg:col-span-3 space-y-3 order-2 lg:order-1">
              {wheelSegments.filter(s => s.side === 'left').map((segment, idx) => {
                const isHovered = hoveredWheelIndex === (idx + 4);
                const SegmentIcon = segment.icon;
                return (
                  <div
                    key={segment.id}
                    onMouseEnter={() => setHoveredWheelIndex(idx + 4)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isHovered 
                        ? 'bg-white/10 border-sky-400 shadow-lg scale-[1.02]' 
                        : 'bg-white/5 border-white/10 hover:bg-white/[0.08]'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <SegmentIcon className={`w-4 h-4 ${segment.textColor}`} />
                      <h4 className="text-xs font-bold text-white truncate">{segment.title}</h4>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-snug">{segment.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Center Circular Radial SVG Wheel (6 cols) */}
            <div className="lg:col-span-6 flex items-center justify-center order-1 lg:order-2">
              <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px]">
                <svg 
                  viewBox="0 0 500 500" 
                  className="w-full h-full drop-shadow-2xl transition-all"
                >
                  <circle cx="250" cy="250" r="230" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <circle cx="250" cy="250" r="105" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />

                  {wheelSegments.map((segment, index) => {
                    const isHovered = hoveredWheelIndex === index;
                    const path = getChevronPath(index);
                    const coords = getIconCoords(index);
                    const SegmentIcon = segment.icon;

                    return (
                      <g 
                        key={segment.id}
                        onMouseEnter={() => setHoveredWheelIndex(index)}
                        onMouseLeave={() => setHoveredWheelIndex(null)}
                        className="cursor-pointer transition-all duration-300"
                      >
                        <path
                          d={path}
                          fill={isHovered ? segment.color : 'rgba(15, 23, 42, 0.85)'}
                          stroke={segment.color}
                          strokeWidth={isHovered ? '2.5' : '1.5'}
                          className="transition-all duration-300"
                        />
                        <foreignObject 
                          x={coords.x - 12} 
                          y={coords.y - 12} 
                          width="24" 
                          height="24"
                          className="pointer-events-none"
                        >
                          <div className="w-full h-full flex items-center justify-center">
                            <SegmentIcon 
                              className={`w-4 h-4 transition-colors ${
                                isHovered ? 'text-white' : segment.textColor
                              }`} 
                            />
                          </div>
                        </foreignObject>
                      </g>
                    );
                  })}

                  {/* Core Center Hub */}
                  <circle cx="250" cy="250" r="80" fill="#0284C7" className="drop-shadow-lg" />
                  <circle cx="250" cy="250" r="74" fill="#0B1528" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="2" />
                </svg>

                {/* Hub Center Label Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center p-4">
                  <CreditCard className="w-5 h-5 text-cyan-400 mb-1" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 font-bold">KNOOVIQ</span>
                  <span className="text-xs font-black text-white leading-tight">SAAS BILLING</span>
                  <span className="text-[9px] font-mono text-slate-400">CLEAN CORE</span>
                </div>
              </div>
            </div>

            {/* Right Flanking Capability Cards (4) */}
            <div className="lg:col-span-3 space-y-3 order-3">
              {wheelSegments.filter(s => s.side === 'right').map((segment, idx) => {
                const isHovered = hoveredWheelIndex === idx;
                const SegmentIcon = segment.icon;
                return (
                  <div
                    key={segment.id}
                    onMouseEnter={() => setHoveredWheelIndex(idx)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isHovered 
                        ? 'bg-white/10 border-sky-400 shadow-lg scale-[1.02]' 
                        : 'bg-white/5 border-white/10 hover:bg-white/[0.08]'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <SegmentIcon className={`w-4 h-4 ${segment.textColor}`} />
                      <h4 className="text-xs font-bold text-white truncate">{segment.title}</h4>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-snug">{segment.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CLEAN CORE ARCHITECTURE LAYERS (3 Tabs)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
              <Server className="w-3.5 h-3.5 text-sky-400" />
              <span>CLEAN CORE ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Three-Tier SaaS Revenue Architecture
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Decoupling high-velocity usage ingestion and rating from statutory financial ledgers.
            </p>
          </div>

          {/* Architecture Layer Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {architectureTabs.map((tab) => {
              const isActive = activeArchTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveArchTab(tab.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider transition-all border ${
                    isActive
                      ? 'bg-sky-500/20 border-sky-400 text-sky-300 shadow-md'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Active Layer Details */}
          {(() => {
            const currentTab = architectureTabs.find(t => t.id === activeArchTab) || architectureTabs[0];
            return (
              <div className="rounded-2xl bg-slate-950/90 border border-white/10 p-6 sm:p-8 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  <div className="lg:col-span-7 space-y-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                      {currentTab.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {currentTab.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {currentTab.desc}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      {currentTab.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-slate-900 border border-white/10">
                      {currentTab.diagramDetails.map((item, dIdx) => (
                        <div key={dIdx} className="p-3 rounded-lg bg-white/5 border border-white/10">
                          <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                            {item.label}
                          </span>
                          <span className="text-xs font-bold text-sky-300">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: MODULAR TAILORED SOLUTIONS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
              <Boxes className="w-3.5 h-3.5 text-sky-400" />
              <span>MODULAR SOLUTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Specialized Solutions for Software & SaaS
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Modular capabilities designed to accelerate recurring subscription cash flow and eliminate compliance risks.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {['ALL', 'CORE', 'METERING', 'REVENUE', 'ANALYTICS'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveSolutionCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                  activeSolutionCategory === cat
                    ? 'bg-sky-500/20 border-sky-400 text-sky-300 shadow-md'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Solution Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSolutions.map((sol, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-sky-400/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-300 border border-sky-500/30 font-bold">
                      {sol.badge}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      {sol.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {sol.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {sol.desc}
                  </p>

                  <div className="space-y-2 pt-2">
                    {sol.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">Architecture Scope: Clean Core</span>
                  <button
                    onClick={() => onOpenContact(`Software SaaS: ${sol.title}`)}
                    className="text-xs font-bold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Request Blueprint</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: LEGACY VS CLEAN CORE STANDARDIZATION MATRIX
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
              <Split className="w-3.5 h-3.5 text-sky-400" />
              <span>STANDARDIZATION MATRIX</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Legacy Practice vs. Modern Clean Core
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Replacing ad-hoc billing scripts with enterprise-grade subscription ledger automation.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-2xl overflow-hidden border border-white/10 text-left text-xs">
              <thead className="bg-slate-950 text-slate-300 font-mono text-[11px] uppercase">
                <tr>
                  <th className="p-4 border-b border-white/10">Process Dimension</th>
                  <th className="p-4 border-b border-white/10 text-rose-300">Legacy Approach</th>
                  <th className="p-4 border-b border-white/10 text-sky-300">Modern Clean Core (KNOOVIQ)</th>
                  <th className="p-4 border-b border-white/10 text-emerald-300">Measurable Value Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-slate-950/60">
                {matrixRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-white whitespace-nowrap">{row.dimension}</td>
                    <td className="p-4 text-slate-400 leading-relaxed">{row.legacy}</td>
                    <td className="p-4 text-slate-200 leading-relaxed font-medium">{row.cleanCore}</td>
                    <td className="p-4 text-emerald-400 font-mono font-semibold whitespace-nowrap">{row.valueImpact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: TRANSFORMATION ROADMAP
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
              <TrendingUp className="w-3.5 h-3.5 text-sky-400" />
              <span>TRANSFORMATION ROADMAP</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Phased SaaS Monetization Modernization
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Four progressive architectural stages transitioning cloud software businesses to clean core billing automation.
            </p>
          </div>

          {/* Stages Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {transformationStages.map((stage, sIdx) => {
              const isSelected = activeTransformStage === sIdx;
              return (
                <div
                  key={sIdx}
                  onClick={() => setActiveTransformStage(sIdx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-sky-500/20 border-sky-400 shadow-xl scale-[1.02]'
                      : 'bg-white/5 border-white/10 hover:bg-white/[0.08]'
                  }`}
                >
                  <div className="space-y-2">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${stage.textColor}`}>
                      {stage.badge}
                    </span>
                    <h4 className="text-sm font-bold text-white">{stage.title}</h4>
                    <p className="text-[11px] text-slate-300 leading-snug">{stage.subtitle}</p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-slate-400">{stage.tag}</span>
                    <span className={`font-bold ${isSelected ? 'text-sky-300' : 'text-slate-400'}`}>
                      {isSelected ? 'ACTIVE' : 'EXPLORE'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Live Transformation Console */}
          {(() => {
            const currentStage = transformationStages[activeTransformStage];
            return (
              <div className="rounded-2xl bg-slate-900 border border-white/10 p-6 shadow-2xl backdrop-blur-md">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider ${currentStage.textColor}`}>
                      {currentStage.badge} ARCHITECTURAL DELTA
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5">
                      {currentStage.title} &mdash; {currentStage.subtitle}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-mono">
                    Scope: {currentStage.tag}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/30">
                    <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider mb-1">Legacy State</div>
                    <p className="text-xs text-slate-200">{currentStage.before}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                    <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">Modernized Clean Core</div>
                    <p className="text-xs text-slate-200">{currentStage.after}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 mt-4 border-t border-white/10">
                  <span className="text-xs font-mono text-slate-400 uppercase">Key Results:</span>
                  {currentStage.metrics.map((m, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-sky-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{m}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: STRATEGIC ENTERPRISE VALUE DRIVERS (Zero Numbers/Percents)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>ENTERPRISE SAFEGUARDS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Strategic Safeguards for Modern Software & SaaS
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Architectural advantages realized by subscription software providers running on SAP Clean Core.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between hover:border-sky-400 transition-colors">
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 inline-block">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-white">Continuous Usage Capture</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  High-throughput event streaming ingests and rates operational telemetry continuously, guaranteeing zero unbilled overage consumption.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 mt-4 text-[10px] font-mono text-sky-400 font-bold uppercase">
                REVENUE COMPLETENESS
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between hover:border-sky-400 transition-colors">
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 inline-block">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-white">Full Accounting Compliance</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Standard revenue accounting schedules performance obligations automatically, providing permanent audit readiness for enterprise filings.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 mt-4 text-[10px] font-mono text-emerald-400 font-bold uppercase">
                FINANCIAL INTEGRITY
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between hover:border-sky-400 transition-colors">
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 inline-block">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-white">Maximum Retained ARR</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Automated dunning and payment card updater logic actively prevent involuntary customer churn, safeguarding recurring annual revenues.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 mt-4 text-[10px] font-mono text-purple-400 font-bold uppercase">
                CHURN PREVENTION
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between hover:border-sky-400 transition-colors">
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 inline-block">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-white">Global Tax & Invoicing</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Automated multi-jurisdiction tax calculation and mandatory electronic invoicing support global customer expansion without local tax risks.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 mt-4 text-[10px] font-mono text-amber-400 font-bold uppercase">
                STATUTORY GOVERNANCE
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10: INDUSTRY FAQS (Accordion)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
              <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
              <span>COMMONLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Software & SaaS Billing Architecture Inquiries
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Essential questions on modernizing subscription operations with SAP Clean Core.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div 
                  key={fIdx}
                  className="rounded-2xl border border-white/10 bg-slate-900/80 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(fIdx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                  >
                    <span className="text-sm font-bold text-white">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-sky-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 11: FINAL EXECUTIVE CTA
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-r from-sky-950 via-slate-950 to-blue-950 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KNOOVIQ PRACTICE ENGAGEMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Accelerate Your Subscription Modernization
          </h2>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Schedule an architectural blueprint consultation with our SAP Subscription Billing and Revenue Recognition practice specialists to modernize your cloud billing operations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact('Software & SaaS Architecture Consultation')}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-sky-500/25 flex items-center gap-2"
            >
              <span>Consult Practice Architect</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/industries"
              className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider border border-white/20 transition-all flex items-center gap-2"
            >
              <span>Explore All Industries</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
