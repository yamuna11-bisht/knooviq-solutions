import React, { useState } from 'react';
import { useAutoRotate } from '../../hooks/useAutoRotate';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  Layers, 
  Activity, 
  ShieldCheck, 
  TrendingUp, 
  BarChart3, 
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
  Radio, 
  Server, 
  Cloud, 
  FileCheck, 
  Split, 
  Database, 
  Sliders, 
  AlertTriangle, 
  Cpu,
  Users
} from 'lucide-react';

interface SoftwareSaasIndustryPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const SoftwareSaasIndustryPage: React.FC<SoftwareSaasIndustryPageProps> = ({ 
  onOpenContact 
}) => {

  // State for Section 4 Circular Chevron Wheel
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(null);

  // State for Section 7 Solution Category Filter
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');

  // State for Section 9 Transformation Stage
  const [activeTransformStage, setActiveTransformStage] = useState<number>(0);

  // Section 4: 8-Segment Circular Chevron Wheel (KNOOVIQ SaaS Revenue Platform Ecosystem)
  const wheelSegments = [
    {
      id: 'usage-rating',
      title: 'Consumption Metering & Dynamic Rating',
      desc: 'High-throughput ingestion capturing API calls, compute milliseconds, and storage metrics for real-time rating.',
      side: 'right',
      color: '#22C55E', // Green
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(34, 197, 94, 0.3)',
      icon: Zap
    },
    {
      id: 'contract-lifecycle',
      title: 'Contract Lifecycle & Coterminous Terms',
      desc: 'Seamless subscription renewals, mid-contract tier upgrades, seat expansions, and coterminous alignment.',
      side: 'right',
      color: '#84CC16', // Lime Green
      textColor: 'text-lime-400',
      bgGlow: 'rgba(132, 204, 22, 0.3)',
      icon: FileCheck
    },
    {
      id: 'convergent-billing',
      title: 'Automated Convergent Invoicing',
      desc: 'Consolidate flat fees, dynamic consumption overages, and partner add-ons onto a single enterprise invoice.',
      side: 'right',
      color: '#EAB308', // Yellow
      textColor: 'text-yellow-400',
      bgGlow: 'rgba(234, 179, 8, 0.3)',
      icon: CreditCard
    },
    {
      id: 'rev-rec',
      title: 'ASC 606 / IFRS 15 Revenue Accounting',
      desc: 'Automated contract identification, standalone selling price (SSP) allocation, and balance sheet liability scheduling.',
      side: 'right',
      color: '#F97316', // Orange
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: ShieldCheck
    },
    {
      id: 'dunning-churn',
      title: 'Automated Dunning & Churn Defense',
      desc: 'Tokenized card updater networks, intelligent retry schedules, and automated dunning preventing involuntary churn.',
      side: 'left',
      color: '#F43F5E', // Rose
      textColor: 'text-rose-400',
      bgGlow: 'rgba(244, 63, 94, 0.3)',
      icon: RefreshCw
    },
    {
      id: 'multi-currency-tax',
      title: 'Global Tax & Statutory E-Invoicing',
      desc: 'Multi-jurisdiction sales tax calculation, digital services taxes, European reverse-charge VAT, and Peppol e-invoices.',
      side: 'left',
      color: '#EC4899', // Pink
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.3)',
      icon: Globe2
    },
    {
      id: 'partner-revshare',
      title: 'Marketplace & Partner Revenue Sharing',
      desc: 'Multi-party settlement calculating ecosystem developer royalties, agency commissions, and platform fees.',
      side: 'left',
      color: '#A855F7', // Purple
      textColor: 'text-purple-400',
      bgGlow: 'rgba(168, 85, 247, 0.3)',
      icon: Split
    },
    {
      id: 'saas-metrics',
      title: 'ARR, NRR & Cohort Margin Analytics',
      desc: 'Real-time Net Retention Rate, customer lifetime value, and cohort margin telemetry directly from general ledgers.',
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
      id: 'consumption-rating',
      label: 'Usage Ingestion',
      sublabel: 'Idempotent Telemetry',
      desc: 'Stream high-velocity API calls, data throughput, and compute seconds into real-time convergent charging mediation with sub-second latency.',
      tech: 'SAP BTP Event Mesh',
      image: '/images/saas_journey_usage_ingestion.jpg',
      icon: Zap
    },
    {
      id: 'contract-terms',
      label: 'Subscription Terms',
      sublabel: 'Coterminous Align',
      desc: 'Unify tiered subscriptions, seat licenses, minimum commitments, and add-on upgrades into automated coterminous contract lifecycles.',
      tech: 'SAP Subscription Billing',
      image: '/images/saas_journey_subscription_terms.png',
      icon: FileCheck
    },
    {
      id: 'convergent-billing',
      label: 'Convergent Invoicing',
      sublabel: 'Unified Billing Core',
      desc: 'Consolidate flat recurring fees, dynamic usage overages, and partner add-ons on a single transparent enterprise billing statement.',
      tech: 'SAP Convergent Invoicing',
      image: '/images/saas_journey_convergent_invoicing.jpg',
      icon: CreditCard
    },
    {
      id: 'rev-rec',
      label: 'Revenue Accounting',
      sublabel: 'ASC 606 / IFRS 15',
      desc: 'Automate standalone selling price (SSP) allocation, contract liability schedules, and cumulative catch-ups for mid-term amendments.',
      tech: 'SAP Revenue Accounting (RAR)',
      image: '/images/saas_journey_revenue_accounting.jpg',
      icon: ShieldCheck
    },
    {
      id: 'dunning-defense',
      label: 'Dunning & Churn',
      sublabel: 'ARR Preservation',
      desc: 'Prevent involuntary churn via tokenized card updater sync, smart retry schedules factoring in clearing windows, and self-service portals.',
      tech: 'SAP Billing Dunning Core',
      image: '/images/saas_journey_dunning_churn.jpg',
      icon: RefreshCw
    },
    {
      id: 'saas-finops',
      label: 'Cohort Telemetry',
      sublabel: 'ARR & NRR Analytics',
      desc: 'Deliver real-time Net Retention Rate, customer lifetime value, and cohort margins reconciled directly against general ledgers.',
      tech: 'SAP Analytics Cloud',
      image: '/images/saas_journey_cohort_telemetry.png',
      icon: BarChart3
    }
  ];

  // Section 2: Auto-rotation for Showcase Image (1s interval, 5s pause on click)
  const {
    currentIndex: activeJourneyStep,
    handleSelect: handleJourneyStepClick
  } = useAutoRotate({
    itemCount: journeySteps.length,
    intervalMs: 1000,
    pauseOnInteractionMs: 5000
  });

  // Section 4: Auto-rotation for Circular Chevron Wheel (1s interval, 5s pause on click)
  const {
    currentIndex: activeWheelIndex,
    handleSelect: handleWheelClick,
    handleMouseEnter: handleWheelSectionEnter,
    handleMouseLeave: handleWheelSectionLeave
  } = useAutoRotate({
    itemCount: wheelSegments.length,
    intervalMs: 1000,
    pauseOnInteractionMs: 5000
  });

  // Section 3: SaaS Challenges & Bottlenecks Data
  const saasChallenges = [
    {
      tag: 'METERING DRIFT',
      icon: Zap,
      title: 'Unmetered Usage Slippage',
      desc: 'Disconnected product telemetry drops high-volume API calls and storage events, resulting in unbilled customer overages and gross margin leakage.',
      footer: 'Unbilled Consumption Waste'
    },
    {
      tag: 'REV-REC DELAY',
      icon: ShieldCheck,
      title: 'Manual ASC 606 Spreadsheets',
      desc: 'Tracking standalone selling prices and mid-term amendments across offline spreadsheets creates massive audit restatement risks and compliance penalties.',
      footer: 'Spreadsheet Rev-Rec Vulnerability'
    },
    {
      tag: 'CHURN LEAKAGE',
      icon: RefreshCw,
      title: 'Passive Involuntary Churn',
      desc: 'Up to 30% of customer cancellations stem from expired credit cards and silent payment failures without intelligent multi-attempt dunning schedules.',
      footer: 'Silent ARR Erosion'
    },
    {
      tag: 'CONTRACT FRICTION',
      icon: FileCheck,
      title: 'Complex Coterminous Upgrades',
      desc: 'Legacy billing systems fail to calculate precise prorations when enterprise buyers add seats mid-quarter, creating billing disputes and churn.',
      footer: 'Proration Calculation Friction'
    },
    {
      tag: 'DATA SILOS',
      icon: Database,
      title: 'Fragmented Billing & ERP Stacks',
      desc: 'Disconnected CPQ tools, gateway processors, and finance ledgers cause weeks of month-end reconciliation lag and unaligned revenue recognition.',
      footer: 'Delayed Financial Close'
    },
    {
      tag: 'TAX RISK',
      icon: Globe2,
      title: 'Cross-Border Digital Tax Frictions',
      desc: 'Expanding globally triggers complex US state economic nexus, EU reverse-charge VAT, and statutory e-invoicing penalties across jurisdictions.',
      footer: 'Statutory Compliance Penalties'
    }
  ];

  // Section 7: 9 Modular Enterprise Industry Solutions (Symmetrical 3x3 Grid)
  const industrySolutions = [
    {
      category: 'CORE_BILLING',
      categoryLabel: 'Core Subscription',
      tag: 'RECURRING BILLING',
      icon: CreditCard,
      title: 'Enterprise Subscription Core',
      description: 'Manage complex recurring billing plans, annual advance invoices, coterminous add-ons, and payment gateway collections on Clean Core.',
      image: '/images/saas_solution_enterprise_subscription_core.jpg',
      highlights: ['Seat & Tier Plans', 'Coterminous Alignment', 'Consolidated Statements', 'Gateway Auto-Settlement']
    },
    {
      category: 'METERING',
      categoryLabel: 'Usage & Metering',
      tag: 'EVENT MEDIATION',
      icon: Zap,
      title: 'High-Volume Consumption Rating',
      description: 'Capture cloud application telemetry, API calls, and computational consumption, transforming raw usage records into rated line items.',
      image: '/images/saas_solution_high_volume_rating.jpg',
      highlights: ['Idempotent Ingestion', 'Dynamic Volume Tiers', 'Prepaid Drawdowns', 'Real-Time Quota Triggers']
    },
    {
      category: 'REVENUE_FINOPS',
      categoryLabel: 'Rev-Rec & Compliance',
      tag: 'REVENUE ACCOUNTING',
      icon: ShieldCheck,
      title: 'Automated ASC 606 Revenue RAR',
      description: 'Comply effortlessly with statutory revenue recognition standards through automated contract allocation, SSP scheduling, and catch-ups.',
      image: '/images/saas_solution_automated_asc606_rar.png',
      highlights: ['Automated SSP Allocations', 'Contract Asset/Liability', 'Cumulative Catch-Ups', 'Audit-Ready Reporting']
    },
    {
      category: 'CORE_BILLING',
      categoryLabel: 'Core Subscription',
      tag: 'CONTRACT LIFECYCLE',
      icon: FileCheck,
      title: 'Coterminous Renewal Management',
      description: 'Synchronize multi-year contract renewals, mid-quarter seat expansions, and edition upgrades without manual proration spreadsheets.',
      image: '/images/saas/saas_solution_coterminous_renewals.png',
      imagePosition: 'object-[center_top]',
      highlights: ['Automated Proration Logic', 'Coterminous Alignment', 'CPQ Contract Sync', 'Early Renewal Incentives']
    },
    {
      category: 'METERING',
      categoryLabel: 'Usage & Metering',
      tag: 'CREDIT MANAGEMENT',
      icon: Database,
      title: 'Prepaid Commitments & Drawdowns',
      description: 'Manage enterprise prepaid consumption commitments, burndown drawdowns, and use-it-or-lose-it expiration schedules with full transparency.',
      image: '/images/saas_solution_prepaid_commitments.png',
      highlights: ['Enterprise Burndown', 'Prepaid Balance Ledger', 'Expiration Schedules', 'Self-Service Telemetry']
    },
    {
      category: 'REVENUE_FINOPS',
      categoryLabel: 'Rev-Rec & Compliance',
      tag: 'ECOSYSTEM SETTLEMENT',
      icon: Split,
      title: 'Multi-Party Marketplace RevShare',
      description: 'Calculate and distribute developer royalties, agency commissions, and cloud platform revenue splits across multi-sided marketplaces.',
      image: '/images/saas_solution_marketplace_revshare.png',
      highlights: ['Developer Royalty Splits', 'Self-Invoicing Portals', 'Tax Withholding Rules', 'Consolidated Ledgers']
    },
    {
      category: 'CORE_BILLING',
      categoryLabel: 'Core Subscription',
      tag: 'PAYMENT RECOVERY',
      icon: RefreshCw,
      title: 'Smart Dunning & Churn Defense',
      description: 'Defend recurring ARR against card expirations and network declines using intelligent multi-attempt retry schedules and card updaters.',
      image: '/images/saas_solution_smart_dunning_churn.png',
      highlights: ['Tokenized Card Updaters', 'Smart Decline Retries', 'Dunning Email Sequences', 'Card Updater Portal']
    },
    {
      category: 'METERING',
      categoryLabel: 'Usage & Metering',
      tag: 'USAGE GOVERNANCE',
      icon: Sliders,
      title: 'Real-Time Usage Alerts & Tiers',
      description: 'Trigger automated customer notifications and in-app upgrade prompts when usage reaches commitment thresholds, driving expansion.',
      image: '/images/saas_solution_usage_alerts_tiers.png',
      highlights: ['Real-Time Quota Triggers', 'Automated Tier Step-Ups', 'In-App Upgrade Webhooks', 'Overage Buffer Policies']
    },
    {
      category: 'REVENUE_FINOPS',
      categoryLabel: 'Rev-Rec & Compliance',
      tag: 'FINOPS ANALYTICS',
      icon: BarChart3,
      title: 'SaaS Unit Economics & Cockpit',
      description: 'Deliver real-time Net Retention Rate (NRR), customer lifetime value (LTV), and cohort margin visibility directly linked to hosting ledgers.',
      image: '/images/saas_solution_unit_economics_cockpit.png',
      highlights: ['Real-Time NRR Tracking', 'Cohort Gross Margins', 'Cloud Cost Attribution', 'Predictive Churn Alerts']
    }
  ];

  // Section 9: Transformation in Action (Connected 4-Phase Architecture Pipeline)
  const transformationStages = [
    {
      badge: 'PHASE 01',
      textColor: 'text-cyan-400',
      glowColor: 'bg-cyan-400',
      activeBorder: 'border-cyan-400/80 bg-cyan-950/30',
      borderBase: 'border-slate-800',
      icon: Zap,
      title: 'Telemetry Mediation',
      subtitle: 'Event Mesh Ingestion',
      tag: 'Sub-Second Rating',
      description: 'Decoupled event streaming ingests and rates operational telemetry continuously, guaranteeing zero unbilled overage consumption.',
      before: 'Fragmented log files, batch CSV imports & unrated consumption',
      after: 'SAP BTP Event Mesh with sub-second convergent rating',
      metrics: ['Idempotent Ingestion', 'Zero Usage Leakage', 'Real-Time Quota Triggers']
    },
    {
      badge: 'PHASE 02',
      textColor: 'text-sky-400',
      glowColor: 'bg-sky-400',
      activeBorder: 'border-sky-400/80 bg-sky-950/30',
      borderBase: 'border-slate-800',
      icon: FileCheck,
      title: 'Subscription Terms',
      subtitle: 'Coterminous Lifecycles',
      tag: 'Automated Proration',
      description: 'Unified contract rules handle multi-tier plans, seat licenses, prepaid credits, and prorated mid-term upgrades on a single invoice.',
      before: 'Manual proration spreadsheets, separate invoices & billing disputes',
      after: 'SAP Subscription Billing with unified coterminous invoicing',
      metrics: ['Coterminous Alignment', 'Unified Invoice Statements', 'Self-Service Tier Upgrades']
    },
    {
      badge: 'PHASE 03',
      textColor: 'text-emerald-400',
      glowColor: 'bg-emerald-400',
      activeBorder: 'border-emerald-400/80 bg-emerald-950/30',
      borderBase: 'border-slate-800',
      icon: ShieldCheck,
      title: 'Statutory Rev-Rec',
      subtitle: 'ASC 606 Automation',
      tag: 'Audit-Proof Ledgers',
      description: 'Automated revenue accounting separates deferred contract liabilities from earned ARR, posting cumulative catch-ups directly to S/4HANA.',
      before: 'Offline rev-rec spreadsheets & agonizing audit reconciliation',
      after: 'Automated SAP RAR schedules on Universal Journal (ACDOCA)',
      metrics: ['Automated SSP Allocations', 'Cumulative Catch-Up Postings', 'Audit-Ready Disclosures']
    },
    {
      badge: 'PHASE 04',
      textColor: 'text-amber-400',
      glowColor: 'bg-amber-400',
      activeBorder: 'border-amber-400/80 bg-amber-950/30',
      borderBase: 'border-slate-800',
      icon: RefreshCw,
      title: 'FinOps & Retention',
      subtitle: 'Dunning & SAC Cockpit',
      tag: 'ARR Preservation',
      description: 'Intelligent card retry algorithms recover failed transactions while SAP Analytics Cloud provides real-time cohort margin telemetry.',
      before: 'Passive payment failures causing silent churn & margin blindspots',
      after: 'Smart dunning engine with live SAC Net Retention Rate cockpit',
      metrics: ['Tokenized Card Updaters', 'Smart Dunning Schedules', 'True Cohort Gross Margin']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Pure Enterprise Software & SaaS Hero)
          ========================================================================= */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        
        {/* Full-Bleed Enterprise SaaS Background Image with Seamless Cinematic Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/software_saas_erp_hero.jpg" 
            alt="Intelligent ERP for Software & SaaS" 
            className="w-full h-full object-cover object-center lg:object-right"
          />
        </div>

        {/* Seamless Cinematic Left Scrim */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/80 sm:via-slate-950/60 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          
          <div className="max-w-3xl space-y-4">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-2.5"
            >
              {/* Practice Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
                <CreditCard className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>
              
              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Intelligent ERP for <br />
                <span className="text-cyan-400">Software & SaaS</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Automated Subscription Billing, Usage Rating & ASC 606 Revenue Recognition.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3 max-w-2xl"
            >
              {/* Clear Open Typography */}
              <p className="text-sm sm:text-base lg:text-[17px] text-slate-100 font-normal leading-relaxed drop-shadow-sm">
                Empowering cloud software providers, digital platforms, and subscription enterprises with{' '}
                <strong className="text-white font-semibold">SAP S/4HANA Clean Core</strong>, high-velocity{' '}
                <strong className="text-cyan-300 font-semibold">BRIM Event Mediation</strong>, automated ASC 606 revenue compliance, and proactive churn recovery.
              </p>
              
              {/* Clean Feature Highlights */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Clean Core Architecture</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Sub-Second Metering Rating</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>ASC 606 Automated RAR</span>
                </span>
              </div>
            </motion.div>

            {/* Enterprise Architectural Trust Ribbon */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 sm:mt-8 pt-4 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
            >
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Cpu className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">ARCHITECTURE</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">SAP S/4HANA BRIM</div>
                <div className="text-xs text-slate-300 mt-0.5">Clean Core Ready</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <CreditCard className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">BILLING CORE</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Unified Invoicing</div>
                <div className="text-xs text-slate-300 mt-0.5">Seat & Usage Sync</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">COMPLIANCE</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">ASC 606 / IFRS 15</div>
                <div className="text-xs text-slate-300 mt-0.5">Zero Audit Risk</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <RefreshCw className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">RETENTION</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Smart Dunning</div>
                <div className="text-xs text-slate-300 mt-0.5">ARR Protection</div>
              </div>
            </motion.div>

          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE INDUSTRY PERSPECTIVE ("Building a Connected SaaS Revenue Core")
          ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        
        {/* Subtle Ambient Tone */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0070C0]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>EXECUTIVE INDUSTRY PERSPECTIVE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Building a Connected <span className="text-[#0070C0]">SaaS Revenue Core</span>
              </h2>

              {/* Executive Thesis Quote */}
              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;Modern SaaS valuation is defined by monetization velocity: unifying product telemetry, consumption-based contracts, and statutory revenue ledgers into one cohesive operational core.&rdquo;
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Knooviq engineers an integrated revenue ecosystem on SAP S/4HANA Clean Core. By bridging data across cloud application telemetry and core general ledgers, SaaS leadership gains continuous visibility, automated billing flow, and audit-ready revenue realization.
              </p>

              {/* 3 Executive Strategic Pillars */}
              <div className="space-y-2.5 pt-1">
                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">High-Throughput Consumption Rating</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Single-pane-of-glass coordination across millions of API events, compute telemetry, and tiered volume discounts without latency.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Statutory ASC 606 & IFRS 15 Compliance</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Automated standalone selling price (SSP) allocation and performance obligation scheduling on the Universal Journal.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-xs hover:border-[#0070C0] transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-300">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950">Proactive Dunning & Churn Defense</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Automated card updater networks and smart decline retry algorithms actively defending recurring annual revenue.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side: Clean Photography Showcase & Stage Navigator */}
            <div className="lg:col-span-6 space-y-3.5">
              
              {/* Pure High-Resolution Photography Showcase with Defined Dark Border */}
              <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden border-2 border-slate-300 shadow-md bg-slate-100">
                <img 
                  src={journeySteps[activeJourneyStep].image} 
                  alt={journeySteps[activeJourneyStep].label} 
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />
              </div>

              {/* Stage Navigation Grid (Clean Labels + Icons, No Numbers) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {journeySteps.map((step, idx) => {
                  const isSelected = activeJourneyStep === idx;
                  const StepIcon = step.icon;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => handleJourneyStepClick(idx)}
                      className={`p-2.5 rounded-xl border text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                        isSelected
                          ? 'bg-[#0070C0] text-white border-2 border-[#0070C0] shadow-sm scale-[1.01]'
                          : 'bg-white text-slate-700 border border-slate-300 hover:bg-sky-50 hover:border-[#0070C0]'
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg shrink-0 ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-sky-50 text-[#0070C0] border border-slate-300'
                      }`}>
                        <StepIcon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold truncate">{step.label}</div>
                        <div className={`text-[10px] truncate ${isSelected ? 'text-sky-100' : 'text-slate-500'}`}>
                          {step.sublabel}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Stage Detail Card (Placed Below the Image & Controls with Defined Border) */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-300 shadow-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#003B73]">
                    {journeySteps[activeJourneyStep].label}
                  </span>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-sky-50 text-[#0070C0] border border-sky-300">
                    {journeySteps[activeJourneyStep].tech}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {journeySteps[activeJourneyStep].desc}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: INDUSTRY CHALLENGES ("Navigating the Complexity of Modern Cloud Billing")
          ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#F8FAFC] border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
              <Compass className="w-3.5 h-3.5 text-rose-600" />
              <span>CORE BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Navigating the Complexity of Modern Cloud Billing
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Disjointed billing scripts and siloed product telemetry constrain ARR growth. Knooviq addresses the six systemic challenges cloud software leaders face.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {saasChallenges.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="h-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-slate-300 shadow-xs hover:border-[#0070C0] hover:shadow-lg transition-all group"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-sky-50 text-[#0070C0] border border-slate-200 group-hover:bg-[#0070C0] group-hover:text-white group-hover:scale-105 transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-[#0070C0] font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070C0] group-hover:scale-125 transition-transform" />
                    <span>{item.footer}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: KNOOVIQ SAAS PLATFORM ECOSYSTEM (Circular Chevron Radial Diagram)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#070B14] text-white border-b border-slate-800 relative overflow-hidden">
        
        {/* Dark Ambient Radial Hues */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-indigo-500/10 via-emerald-500/10 to-pink-500/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-inner">
              <Workflow className="w-3.5 h-3.5 text-cyan-300" />
              <span>CONNECTED SAAS ECOSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Capabilities Designed for Modern SaaS
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              A synchronized, circular enterprise platform uniting usage metering, coterminous contracts, automated invoicing, ASC 606 general ledgers, and cognitive AI into one continuous loop.
            </p>
          </motion.div>

          {/* 3-Column Radial Wheel & Flanking Capabilities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* Left Column (4 Capabilities: Top-Left to Bottom-Left) */}
            <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-5">
              {[7, 6, 5, 4].map((segIdx) => {
                const item = wheelSegments[segIdx];
                const isHighlighted = hoveredWheelIndex !== null ? hoveredWheelIndex === segIdx : activeWheelIndex === segIdx;
                return (
                  <div
                    key={item.id}
                    onClick={() => handleWheelClick(segIdx)}
                    onMouseEnter={() => {
                      setHoveredWheelIndex(segIdx);
                      handleWheelSectionEnter();
                    }}
                    onMouseLeave={() => {
                      setHoveredWheelIndex(null);
                      handleWheelSectionLeave();
                    }}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isHighlighted
                        ? 'bg-slate-900/95 border-white/40 shadow-xl -translate-x-1'
                        : 'bg-slate-900/40 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                    style={{
                      boxShadow: isHighlighted ? `0 0 24px ${item.bgGlow}` : undefined,
                      borderColor: isHighlighted ? item.color : undefined
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
                          boxShadow: isHighlighted ? `0 0 12px ${item.color}` : 'none'
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
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/15 via-emerald-500/10 to-pink-500/15 blur-2xl rounded-full pointer-events-none" />

                <svg
                  viewBox="0 0 500 500"
                  className="w-full h-full drop-shadow-2xl overflow-visible"
                >
                  {/* 8 Interlocking Chevron Segments */}
                  {wheelSegments.map((seg, idx) => {
                    const isHighlighted = hoveredWheelIndex !== null ? hoveredWheelIndex === idx : activeWheelIndex === idx;
                    const d = getChevronPath(idx);
                    const iconPos = getIconCoords(idx);
                    const IconComponent = seg.icon;

                    return (
                      <g
                        key={seg.id}
                        onClick={() => handleWheelClick(idx)}
                        onMouseEnter={() => {
                          setHoveredWheelIndex(idx);
                          handleWheelSectionEnter();
                        }}
                        onMouseLeave={() => {
                          setHoveredWheelIndex(null);
                          handleWheelSectionLeave();
                        }}
                        className="cursor-pointer transition-all duration-300"
                      >
                        {/* Chevron Wedge */}
                        <path
                          d={d}
                          fill={isHighlighted ? `${seg.color}25` : '#0A0F1D'}
                          stroke={seg.color}
                          strokeWidth={isHighlighted ? "3.5" : "2.2"}
                          strokeLinejoin="round"
                          className="transition-all duration-300"
                          style={{
                            filter: isHighlighted ? `drop-shadow(0 0 10px ${seg.color})` : undefined
                          }}
                        />

                        {/* Segment Icon */}
                        <foreignObject
                          x={iconPos.x - 14}
                          y={iconPos.y - 14}
                          width={28}
                          height={28}
                          className="pointer-events-none overflow-visible"
                        >
                          <div 
                            className={`w-full h-full flex items-center justify-center transition-transform duration-300 ${
                              isHighlighted ? 'scale-125' : ''
                            }`}
                            style={{ color: seg.color }}
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
                        SAAS REVENUE
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 tracking-wider uppercase mt-1">
                        {(hoveredWheelIndex !== null ? hoveredWheelIndex : activeWheelIndex) !== null 
                          ? `MODULE 0${(hoveredWheelIndex !== null ? hoveredWheelIndex : activeWheelIndex) + 1}` 
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
                const isHighlighted = hoveredWheelIndex !== null ? hoveredWheelIndex === segIdx : activeWheelIndex === segIdx;
                return (
                  <div
                    key={item.id}
                    onClick={() => handleWheelClick(segIdx)}
                    onMouseEnter={() => {
                      setHoveredWheelIndex(segIdx);
                      handleWheelSectionEnter();
                    }}
                    onMouseLeave={() => {
                      setHoveredWheelIndex(null);
                      handleWheelSectionLeave();
                    }}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isHighlighted
                        ? 'bg-slate-900/95 border-white/40 shadow-xl translate-x-1'
                        : 'bg-slate-900/40 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                    style={{
                      boxShadow: isHighlighted ? `0 0 24px ${item.bgGlow}` : undefined,
                      borderColor: isHighlighted ? item.color : undefined
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div 
                        className="w-2 h-7 rounded-full shrink-0 mt-0.5 transition-all duration-300"
                        style={{ 
                          backgroundColor: item.color,
                          boxShadow: isHighlighted ? `0 0 12px ${item.color}` : 'none'
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
          SECTION 6: SAP & TECHNOLOGY SOLUTIONS ("Technology Foundation for Intelligent SaaS")
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Layers className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PLATFORM ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Technology Foundation for Intelligent SaaS
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We engineer clean-core SAP technology suites layered with modern cloud event streaming, role-based interfaces, and autonomous business AI.
            </p>
          </div>

          {/* Layered Technology Ecosystem Visual */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Tech 1: SAP S/4HANA Core */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">CORE ERP SUITE</span>
                <Cpu className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP S/4HANA
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Integrated enterprise processes uniting financial ledgers, contract assets, subscription invoices, and profit center accounting into a single in-memory database.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Universal Journal (ACDOCA)</div>
                <div className="flex items-center gap-1.5">• Real-time Financial Month-End Close</div>
              </div>
            </div>

            {/* Tech 2: SAP BRIM */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">BILLING ENGINE</span>
                <CreditCard className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP BRIM / Billing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                High-volume convergent charging and invoicing engine capable of rating millions of consumption events and compiling single itemized bills.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Convergent Invoicing (CI)</div>
                <div className="flex items-center gap-1.5">• Convergent Charging (CC) High-Speed Rating</div>
              </div>
            </div>

            {/* Tech 3: SAP BTP */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">INTEGRATION & EVENT MESH</span>
                <Cloud className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Business Technology Platform
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Seamless side-by-side extensibility keeping the ERP core clean while connecting cloud API telemetry, payment processors, and custom portals.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• SAP Event Mesh (Kafka / REST)</div>
                <div className="flex items-center gap-1.5">• Serverless Mediation Microservices</div>
              </div>
            </div>

            {/* Tech 4: SAP RAR */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">REVENUE ACCOUNTING</span>
                <ShieldCheck className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Revenue Accounting (RAR)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automated statutory revenue compliance separating deferred contract liabilities from earned ARR with automated catch-up postings.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• ASC 606 & IFRS 15 Standard Rules</div>
                <div className="flex items-center gap-1.5">• Standalone Selling Price (SSP) Allocation</div>
              </div>
            </div>

            {/* Tech 5: SAP Analytics Cloud */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">BUSINESS INTELLIGENCE</span>
                <BarChart3 className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Analytics Cloud
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Executive visibility into Net Retention Rate (NRR), customer cohort margins, churn velocity, and predictive subscription pipeline modeling.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Real-time ARR, MRR, GRR & NRR Cockpits</div>
                <div className="flex items-center gap-1.5">• Customer Cohort Profitability Analysis</div>
              </div>
            </div>

            {/* Tech 6: AI & Churn Defense */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">COGNITIVE ENGINES</span>
                <Sparkles className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                AI & Churn Defense
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Intelligent payment retry logic factoring in banking clearing windows, automated card updater network sync, and predictive churn prevention.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Smart Multi-Attempt Dunning Algorithms</div>
                <div className="flex items-center gap-1.5">• Usage Velocity Anomaly Alerts</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: INDUSTRY SOLUTIONS ("Solutions for Every Stage of SaaS")
          ========================================================================= */}
      <section id="industry-solutions" className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-slate-200 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0] shadow-2xs">
              <CreditCard className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>ENTERPRISE FUNCTIONAL CATALOG</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Solutions for Every Stage of SaaS
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Explore specialized enterprise functional modules engineered to modernize cloud monetization across subscription plans, dynamic metering, and statutory ledgers.
            </p>
          </div>

          {/* Solution Domain Category Tabs - 4 Symmetrical Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-7 sm:mb-8">
            {[
              { id: 'ALL', label: 'All Solutions' },
              { id: 'CORE_BILLING', label: 'Subscription Core' },
              { id: 'METERING', label: 'Usage & Metering' },
              { id: 'REVENUE_FINOPS', label: 'Rev-Rec & FinOps' }
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

          {/* Structured Compact 3-Column Enterprise Grid (Symmetrical 3x3 Grid) */}
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
                        className={`w-full h-full object-cover ${(sol as any).imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-500`} 
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
          SECTION 8: BUSINESS OUTCOMES ("Turning Billing Complexity into Growth Advantage")
          ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>MEASURABLE BUSINESS IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Turning Billing Complexity into Growth Advantage
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              When usage telemetry, subscriptions, payment gateways, and statutory ledgers operate in unison, SaaS organizations achieve sustainable commercial acceleration.
            </p>
          </div>

          {/* 6 Outcomes (Large typography, flowing blue paths, generous whitespace, NO dashboards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Outcome 1 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Touchless Month-End Close
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Eliminate manual spreadsheet reconciliations and proration calculations. Compress the monthly subscription billing close from weeks down to hours.
              </p>
            </div>

            {/* Outcome 2 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                100% ASC 606 Audit Traceability
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Deliver automated standalone selling price allocations and contract balance schedules, guaranteeing zero audit restatements or compliance penalties.
              </p>
            </div>

            {/* Outcome 3 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                45% Involuntary Churn Recovery
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Recover failed transactions through automated card network updater synchronizations and smart multi-attempt dunning retry schedules.
              </p>
            </div>

            {/* Outcome 4 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Zero Unbilled Usage Leakage
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Process high-throughput API and consumption telemetry through an idempotent event mesh, ensuring zero dropped events or unrated consumption.
              </p>
            </div>

            {/* Outcome 5 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Frictionless Coterminous Expansion
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Enable sales teams to add seats and product tiers mid-contract with instant automated proration and aligned annual renewal cycles.
              </p>
            </div>

            {/* Outcome 6 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Live Cohort Margin & NRR Telemetry
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Arm executive leadership with real-time Net Retention Rate and customer profitability metrics reconciled directly against core finance ledgers.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: SUCCESS STORY / USE CASE ("Transformation in Action")
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
              Transformation in Action
            </h2>
            <div className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono tracking-wider uppercase">
              Intelligent SaaS Revenue Architecture
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              How high-growth cloud enterprises advance from fragmented billing scripts to an integrated clean-core subscription ecosystem.
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

          {/* 4 Connected Interactive Transformation Cards (Compact, Crisp, Zero Numbers) */}
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
        
        {/* Abstract 3D Digital Commerce / Network Mesh Visual */}
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
            <CreditCard className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR SAAS REVENUE CORE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build a Smarter Subscription Business?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Connect your consumption metering, subscription billing, ASC 606 revenue recognition, and churn recovery with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact?.('Software & SaaS Consultation')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to Our SaaS Experts</span>
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
              <span>SAP Certified Clean Core</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-300" />
              <span>Rapid Time-to-Value Delivery</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-sky-300" />
              <span>Global 24/7 SLA AMS Support</span>
            </span>
          </div>

        </div>

      </section>

    </div>
  );
};
