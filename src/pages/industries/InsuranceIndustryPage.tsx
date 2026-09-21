import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileCheck2, 
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
  HeartHandshake, 
  Users, 
  Building2, 
  Cpu, 
  Database, 
  Sliders, 
  AlertTriangle 
} from 'lucide-react';

interface InsuranceIndustryPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const InsuranceIndustryPage: React.FC<InsuranceIndustryPageProps> = ({ 
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

  // Section 4: 8-Segment Circular Chevron Wheel (KNOOVIQ Insurance Platform Ecosystem)
  const wheelSegments = [
    {
      id: 'policy-admin',
      title: 'Policy Lifecycle Administration',
      desc: 'Unified multi-line policy administration managing quotes, underwriting, mid-term endorsements, and automatic renewals.',
      side: 'right',
      color: '#22C55E', // Green
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(34, 197, 94, 0.3)',
      icon: FileCheck2
    },
    {
      id: 'claims-fnol',
      title: 'Digital FNOL & Automated Claims',
      desc: 'Mobile-first First Notice of Loss with automated claim triage, fast-track settlement approval, and fraud anomaly detection.',
      side: 'right',
      color: '#84CC16', // Lime Green
      textColor: 'text-lime-400',
      bgGlow: 'rgba(132, 204, 22, 0.3)',
      icon: HeartHandshake
    },
    {
      id: 'ifrs17-ledger',
      title: 'IFRS 17 & LDTI Actuarial Sub-Ledger',
      desc: 'Contractual Service Margin (CSM) calculations, discounted cash flows, and multi-GAAP financial statement generation.',
      side: 'right',
      color: '#EAB308', // Yellow
      textColor: 'text-yellow-400',
      bgGlow: 'rgba(234, 179, 8, 0.3)',
      icon: Scale
    },
    {
      id: 'reinsurance-treaty',
      title: 'Reinsurance & Retrocession Ceding',
      desc: 'Automated treaty allocation, proportional and non-proportional cession calculations, and reinsurer claims recoveries.',
      side: 'right',
      color: '#F97316', // Orange
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: ShieldCheck
    },
    {
      id: 'underwriting-ai',
      title: 'Predictive Underwriting & Risk Scoring',
      desc: 'Dynamic risk scoring models incorporating telematics, IoT sensors, and external credit data for precision rate calculation.',
      side: 'left',
      color: '#F43F5E', // Rose
      textColor: 'text-rose-400',
      bgGlow: 'rgba(244, 63, 94, 0.3)',
      icon: Activity
    },
    {
      id: 'billing-disbursements',
      title: 'Premium Collections & Disbursements',
      desc: 'Automated direct debit billing, split broker commission reconciliations, and instant claims payout via digital wallets.',
      side: 'left',
      color: '#EC4899', // Pink
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.3)',
      icon: CreditCard
    },
    {
      id: 'broker-portal',
      title: 'Agent & Broker Distribution Mesh',
      desc: 'Self-service partner portals with real-time commission hierarchies, instant quote binding, and digital policy issuing.',
      side: 'left',
      color: '#A855F7', // Purple
      textColor: 'text-purple-400',
      bgGlow: 'rgba(168, 85, 247, 0.3)',
      icon: Users
    },
    {
      id: 'actuarial-analytics',
      title: 'Actuarial Reserves & Solvency II',
      desc: 'Continuous Solvency Capital Requirement (SCR) monitoring, best-estimate liabilities, and automated regulatory submissions.',
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
      id: 'quote-bind',
      label: 'Digital Quote & Binding',
      sublabel: 'Omnichannel Origination',
      desc: 'Deliver instant multi-quote comparisons across direct and broker channels with dynamic rating engines and automated policy issuance.',
      tech: 'SAP Customer Experience & FS-QUO',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
      icon: FileCheck2
    },
    {
      id: 'policy-management',
      label: 'Policy Administration',
      sublabel: 'Centralized Contract Lifecycle',
      desc: 'Manage mid-term endorsements, co-insurance splits, and seamless policy renewals on unified multi-line insurance contract repositories.',
      tech: 'SAP for Insurance FS-PM',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
      icon: ShieldCheck
    },
    {
      id: 'claims-adjudication',
      label: 'Claims Settlement',
      sublabel: 'Automated Adjudication',
      desc: 'Process digital FNOL submissions, assign loss adjusters, detect fraudulent billing anomalies, and trigger instant claims payouts.',
      tech: 'SAP Claims Management FS-CM',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      icon: HeartHandshake
    },
    {
      id: 'reinsurance-cession',
      label: 'Reinsurance Management',
      sublabel: 'Treaty Allocation & Ceding',
      desc: 'Calculate complex proportional and non-proportional reinsurance cessions with automated billing and retrocession tracking.',
      tech: 'SAP Reinsurance Management FS-RI',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      icon: Layers
    },
    {
      id: 'collections-disbursements',
      label: 'Collections & Billing',
      sublabel: 'Sub-Ledger Payment Rails',
      desc: 'Automate premium payment reconciliation, dunning processes, broker commission disbursements, and co-insurer settlements.',
      tech: 'SAP Collections & Disbursements FS-CD',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
      icon: CreditCard
    },
    {
      id: 'ifrs17-reporting',
      label: 'IFRS 17 Financial Close',
      sublabel: 'Actuarial Contractual Margin',
      desc: 'Calculate Contractual Service Margin (CSM) amortization and loss recovery components compliant with IFRS 17 and local solvency audits.',
      tech: 'SAP S/4HANA Financial Products Subledger (FPSL)',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      icon: Scale
    }
  ];

  // Section 3: Insurance Challenges Data
  const insuranceChallenges = [
    {
      tag: 'IFRS 17 ACCOUNTING BURDEN',
      icon: Scale,
      title: 'Actuarial & Accounting Data Disconnect',
      desc: 'Disconnected actuarial models and financial sub-ledgers force prolonged manual spreadsheets to compute Contractual Service Margin (CSM).',
      footer: 'Prolonged IFRS 17 Calculation Cycles'
    },
    {
      tag: 'CLAIMS FRICTION',
      icon: HeartHandshake,
      title: 'Paper FNOL & Manual Adjudication Stalls',
      desc: 'Fragmented legacy claims workflows cause customer frustration, extended adjuster review cycles, and delayed claims settlement payouts.',
      footer: 'Extended Settlement Processing Delays'
    },
    {
      tag: 'REINSURANCE COMPLEXITY',
      icon: ShieldCheck,
      title: 'Treaty Calculation & Recovery Leakage',
      desc: 'Managing multi-layered excess-of-loss treaties on disparate systems results in missed reinsurance recoveries and delayed retrocession billing.',
      footer: 'Uncaptured Reinsurance Recoveries'
    },
    {
      tag: 'FRAUDULENT LEAKAGE',
      icon: AlertTriangle,
      title: 'Undetected Claims Fraud Schemes',
      desc: 'Static rule-based claim validation fails to intercept organized claims staging, medical bill padding, and inflated property loss submissions.',
      footer: 'High Uncaught Claims Loss Leakage'
    },
    {
      tag: 'BROKER DISTRIBUTION FRICTION',
      icon: Users,
      title: 'Delayed Broker Commission Settlement',
      desc: 'Manual commission splits across complex multi-tiered brokerage hierarchies create partner friction and high administrative reconciliation overhead.',
      footer: 'Manual Broker Commission Splitting'
    },
    {
      tag: 'LEGACY CORE RIGIDITY',
      icon: FileText,
      title: 'Multi-Month New Product Launch Delays',
      desc: 'Hardcoded policy administration systems prevent carriers from rapidly launching parametric, usage-based, or embedded insurance offerings.',
      footer: 'Slow Time-to-Market for New Products'
    }
  ];

  // Section 7: Symmetrical 3x3 Modular Solutions (9 Cards)
  const industrySolutions = [
    {
      category: 'POLICY_CLAIMS',
      categoryLabel: 'Policy & Claims',
      tag: 'POLICY ENGINE',
      title: 'SAP for Insurance Policy Management (FS-PM)',
      description: 'End-to-end multi-line policy administration platform supporting life, health, and P&C contracts with continuous lifecycle tracking.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      icon: FileCheck2,
      highlights: ['Multi-Line Product Engine', 'Automated Endorsement Processing', 'Continuous Renewal Rules']
    },
    {
      category: 'POLICY_CLAIMS',
      categoryLabel: 'Policy & Claims',
      tag: 'CLAIMS AUTOMATION',
      title: 'Digital Claims Management & FNOL Hub (FS-CM)',
      description: 'Streamlined claims lifecycle management featuring automated triage, fraud heuristic scoring, and instant payment settlement.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      icon: HeartHandshake,
      highlights: ['Mobile Digital FNOL', 'Automated Loss Adjuster Triage', 'Fast-Track Payout Gateway']
    },
    {
      category: 'POLICY_CLAIMS',
      categoryLabel: 'Policy & Claims',
      tag: 'PREMIUM BILLING',
      title: 'Collections & Disbursements Suite (FS-CD)',
      description: 'High-volume sub-ledger managing policyholder premium invoicing, direct debit mandates, broker payouts, and co-insurance clearings.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      icon: CreditCard,
      highlights: ['Automated Direct Debits', 'Broker Commission Engine', 'Real-Time Clearing Reconciliation']
    },
    {
      category: 'IFRS_FINANCE',
      categoryLabel: 'Actuarial & Finance',
      tag: 'IFRS 17 ENGINE',
      title: 'SAP S/4HANA Financial Products Subledger (FPSL)',
      description: 'Dedicated financial sub-ledger connecting actuarial cash flow engines with accounting ledgers for complete IFRS 17 and LDTI compliance.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      icon: Scale,
      highlights: ['CSM Calculation & Amortization', 'Building Block Approach (BBA)', 'Multi-GAAP Parallel Posting']
    },
    {
      category: 'IFRS_FINANCE',
      categoryLabel: 'Actuarial & Finance',
      tag: 'REINSURANCE HUB',
      title: 'SAP Reinsurance Management Suite (FS-RI)',
      description: 'Comprehensive reinsurance contract administration automating treaty calculations, facultative placements, and reinsurer claims recoveries.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      icon: ShieldCheck,
      highlights: ['Proportional & Non-Proportional', 'Automated Retrocession Cessions', 'Loss Recovery Claims Tracking']
    },
    {
      category: 'IFRS_FINANCE',
      categoryLabel: 'Actuarial & Finance',
      tag: 'SOLVENCY II',
      title: 'Solvency & Capital Adequacy Compliance Suite',
      description: 'Enterprise regulatory modeling evaluating Best Estimate Liabilities (BEL), Risk Margin, and Solvency Capital Requirements (SCR).',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      icon: BarChart3,
      highlights: ['SCR / MCR Dynamic Modeling', 'Pillar 3 Regulatory Reporting', 'Stress & Scenario Simulation']
    },
    {
      category: 'DISTRIBUTION_AI',
      categoryLabel: 'Underwriting & Digital',
      tag: 'AI UNDERWRITING',
      title: 'Algorithmic Risk Underwriting & Rating Engine',
      description: 'Machine learning rating engine scoring applicant risk profiles in seconds with automated integration to telematics and bureau feeds.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      icon: Activity,
      highlights: ['Telematics IoT Ingestion', 'Instant Decision Scorecards', 'Dynamic Premium Rating']
    },
    {
      category: 'DISTRIBUTION_AI',
      categoryLabel: 'Underwriting & Digital',
      tag: 'BROKER PORTAL',
      title: 'Agent & Broker Digital Distribution Portal',
      description: 'Cloud-native partner portal enabling brokers to bind coverage, manage policy portfolios, and track commission settlements in real time.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
      icon: Users,
      highlights: ['Instant Quote-to-Bind API', 'Hierarchy Commission Tracking', 'Real-Time Policy Servicing']
    },
    {
      category: 'DISTRIBUTION_AI',
      categoryLabel: 'Underwriting & Digital',
      tag: 'FRAUD INTERCEPTION',
      title: 'AI Claims Anomaly & Fraud Interception Suite',
      description: 'Real-time claims screening identifying identity fraud, inflated billing patterns, and organized claims staging before payout approval.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      icon: Lock,
      highlights: ['Social Network Fraud Analysis', 'Medical Bill Padding Detection', 'Automated Special Investigations (SIU)']
    }
  ];

  // Section 9: Transformation Pipeline Data
  const transformationStages = [
    {
      badge: 'PHASE 01',
      title: 'Legacy Insurance Core Audit',
      subtitle: 'Actuarial & System Landscape Review',
      description: 'Assess legacy mainframe policy engines, manual reinsurance treaty spreadsheets, and siloed actuarial data stores causing IFRS 17 bottlenecks.',
      tag: 'Landscape Assessment',
      icon: Compass,
      textColor: 'text-sky-400',
      glowColor: 'bg-sky-500',
      borderBase: 'border-sky-500/20',
      activeBorder: 'border-sky-400 bg-sky-950/40',
      before: 'Fragmented policy admin silos & disconnected actuarial models',
      after: 'Unified enterprise insurance architecture roadmap with clean core',
      metrics: ['Zero Legacy Core Friction', 'Clean Core Decoupling', 'Actuarial Data Governance']
    },
    {
      badge: 'PHASE 02',
      title: 'FPSL & IFRS 17 Foundation',
      subtitle: 'Sub-Ledger Accounting Deployment',
      description: 'Deploy SAP S/4HANA Financial Products Subledger (FPSL) with automated Contractual Service Margin (CSM) calculation and multi-GAAP posting.',
      tag: 'Sub-Ledger Modernization',
      icon: Scale,
      textColor: 'text-emerald-400',
      glowColor: 'bg-emerald-500',
      borderBase: 'border-emerald-500/20',
      activeBorder: 'border-emerald-400 bg-emerald-950/40',
      before: 'Spreadsheet-based IFRS 17 close requiring 3+ weeks',
      after: 'Continuous sub-second actuarial accounting and CSM calculation',
      metrics: ['Continuous CSM Posting', 'Multi-GAAP Parallel Valuation', 'Audit-Ready Actuarial Lineage']
    },
    {
      badge: 'PHASE 03',
      title: 'Digital Claims & Reinsurance',
      subtitle: 'Automated Processing & Treaty Ceding',
      description: 'Implement digital FNOL intake, automated fraud detection heuristics, and seamless reinsurance treaty calculation with instant recoveries.',
      tag: 'Operational Automation',
      icon: HeartHandshake,
      textColor: 'text-purple-400',
      glowColor: 'bg-purple-500',
      borderBase: 'border-purple-500/20',
      activeBorder: 'border-purple-400 bg-purple-950/40',
      before: 'Paper FNOL taking days & missed reinsurance recovery claims',
      after: 'Same-day digital claim triage & automated treaty recoveries',
      metrics: ['Touchless Claims Settlement', 'Automated Cession Calculations', 'Real-Time Fraud Scoring']
    },
    {
      badge: 'PHASE 04',
      title: 'Composable Insurance Mesh',
      subtitle: 'Parametric Products & Open APIs',
      description: 'Roll out cloud-native partner distribution APIs for instant embedded coverage, telematics pricing, and parametric micro-insurance products.',
      tag: 'Digital Ecosystem Expansion',
      icon: Zap,
      textColor: 'text-cyan-400',
      glowColor: 'bg-cyan-500',
      borderBase: 'border-cyan-500/20',
      activeBorder: 'border-cyan-400 bg-cyan-950/40',
      before: 'Monolithic policy systems requiring 12 months to launch new lines',
      after: 'Agile product engine launching new digital coverages in weeks',
      metrics: ['Microservices API Layer', 'Real-Time Telematics Ingestion', 'Parametric Policy Automation']
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
            src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=2000&q=80" 
            alt="Insurance Enterprise Finance" 
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
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>KNOOVIQ INDUSTRY PRACTICE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-md">
              Intelligent Insurance & Actuarial Transformation
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
              Modernize multi-line policy administration, streamline IFRS 17 / LDTI actuarial reporting, automate digital claims adjudication, and manage complex reinsurance treaties on clean-core SAP architecture.
            </p>

            {/* Feature Highlight Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Automated IFRS 17 & LDTI</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Touchless Digital Claims</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Dynamic Reinsurance Ceding</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                type="button"
                onClick={() => onOpenContact?.('Insurance Practice & IFRS 17 Consultation')}
                className="px-6 py-3 rounded-xl bg-[#0070C0] hover:bg-[#005a9e] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#0070C0]/30 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Consult With Insurance Architects</span>
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
                  <FileCheck2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-slate-200 text-[11px]">Policy Management</div>
                  <div className="text-[10px] text-slate-400">SAP FS-PM Multi-Line Core</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-slate-200 text-[11px]">Actuarial Accounting</div>
                  <div className="text-[10px] text-slate-400">SAP FPSL Continuous Close</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-slate-200 text-[11px]">Claims Adjudication</div>
                  <div className="text-[10px] text-slate-400">SAP FS-CM Digital FNOL</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-slate-200 text-[11px]">Reinsurance Ceding</div>
                  <div className="text-[10px] text-slate-400">SAP FS-RI Treaty Recovery</div>
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
                Unifying Underwriting Precision & Actuarial Governance
              </h2>

              {/* Executive Thesis Quote Card */}
              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-slate-800 italic leading-relaxed">
                  "Underwriters, actuaries, and financial controllers must operate from a single, shared source of truth where policy transactions, actuarial projections, and Contractual Service Margin (CSM) accounting align seamlessly."
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                As statutory IFRS 17 guidelines demand unprecedented granularity into insurance contract portfolios, carriers cannot rely on siloed actuarial models and disparate policy ledgers. Enterprise insurance leaders require an integrated sub-ledger architecture that calculates contractual margins in real time, automates reinsurance recoveries, and accelerates touchless digital claims adjudication.
              </p>

              {/* 3 Strategic Pillars */}
              <div className="space-y-2 pt-1">
                
                <div className="p-3 rounded-xl border border-slate-300 bg-white hover:border-[#0070C0] transition-colors flex items-start gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-200">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">Seamless IFRS 17 Compliance</h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      Harmonize actuarial cash flow projections and financial postings with automated Contractual Service Margin (CSM) calculations.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-slate-300 bg-white hover:border-[#0070C0] transition-colors flex items-start gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-200">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">Touchless Claims Orchestration</h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      Deliver instant mobile FNOL intake, automated fraud anomaly screening, and rapid settlement disbursement rails.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-slate-300 bg-white hover:border-[#0070C0] transition-colors flex items-start gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-200">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">Automated Reinsurance Recovery</h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      Eliminate recovery leakage with automated treaty calculation, multi-layered cessions, and real-time retrocession tracking.
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
              Operational Pressures Challenging Modern Insurance Carriers
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              From burdensome IFRS 17 actuarial reconciliations to high claims processing costs, carriers must modernize their underlying operational fabric.
            </p>
          </div>

          {/* 6 Challenge Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {insuranceChallenges.map((challenge, cIdx) => {
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
              <span>CORE INSURANCE PLATFORM ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Composable Insurance Platform Matrix
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              A synchronized enterprise architecture unifying policy administration, IFRS 17 actuarial ledgers, reinsurance treaties, and touchless claims processing.
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
                        INSURANCE HUB
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
              Technology Foundation for Intelligent Insurance
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Clean-core SAP insurance technology suites layered with real-time actuarial sub-ledgers, AI underwriting models, and touchless claims engines.
            </p>
          </div>

          {/* 6 Technology Suite Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Tech 1 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">POLICY CORE</span>
                <FileCheck2 className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Policy Management (FS-PM)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Centralized contract repository orchestrating multi-line insurance policies from initial quote binding to complex midterm modifications.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Multi-Line Contract Repository</div>
                <div className="flex items-center gap-1.5">• Automated Endorsement Engine</div>
              </div>
            </div>

            {/* Tech 2 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">ACTUARIAL SUB-LEDGER</span>
                <Scale className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Financial Products Subledger (FPSL)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Specialized sub-ledger connecting actuarial models with financial accounting for seamless IFRS 17, LDTI, and local multi-GAAP reporting.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Automated CSM Amortization</div>
                <div className="flex items-center gap-1.5">• Building Block & PAA Approaches</div>
              </div>
            </div>

            {/* Tech 3 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">CLAIMS ADJUDICATION</span>
                <HeartHandshake className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Claims Management (FS-CM)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                End-to-end claims lifecycle processing with automated damage assessment, fraud screening heuristics, and instant payment settlement.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Digital FNOL Ingestion</div>
                <div className="flex items-center gap-1.5">• Touchless Fast-Track Approval</div>
              </div>
            </div>

            {/* Tech 4 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">REINSURANCE ENGINE</span>
                <ShieldCheck className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Reinsurance Management (FS-RI)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automates reinsurance treaty management, multi-layered risk cessions, retrocession tracking, and claims recovery reconciliations.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Proportional & Non-Proportional</div>
                <div className="flex items-center gap-1.5">• Automated Reinsurance Billing</div>
              </div>
            </div>

            {/* Tech 5 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">BILLING & CLEARING</span>
                <CreditCard className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Collections & Disbursements (FS-CD)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                High-volume insurance transactional sub-ledger managing premium payment matching, direct debit sweeps, and broker commission payouts.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Real-Time Inbound Payment Match</div>
                <div className="flex items-center gap-1.5">• Multi-Tier Broker Splits</div>
              </div>
            </div>

            {/* Tech 6 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">AI & DIGITAL APIs</span>
                <Zap className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP BTP Digital Insurance Mesh
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Cloud-native API gateway enabling embedded insurance partnerships, telematics IoT ingestion, and automated fraud heuristic scoring.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Open Insurance API Fabric</div>
                <div className="flex items-center gap-1.5">• Telematics & IoT Event Ingestion</div>
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
              <ShieldCheck className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>ENTERPRISE FUNCTIONAL CATALOG</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Solutions for Every Insurance Domain
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Explore specialized enterprise functional modules engineered to modernize insurance operations across core policy administration, IFRS 17 actuarial sub-ledgers, and digital claims.
            </p>
          </div>

          {/* Solution Domain Category Tabs - 4 Symmetrical Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-7 sm:mb-8">
            {[
              { id: 'ALL', label: 'All Solutions' },
              { id: 'POLICY_CLAIMS', label: 'Policy & Claims' },
              { id: 'IFRS_FINANCE', label: 'Actuarial & Finance' },
              { id: 'DISTRIBUTION_AI', label: 'Underwriting & Digital' }
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
              Turning Insurance Complexity into Competitive Advantage
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              When multi-line policy engines, IFRS 17 sub-ledgers, and digital claims execute in continuous sync, carriers achieve agility, operational savings, and audit readiness.
            </p>
          </div>

          {/* 6 Outcomes (Large typography, generous whitespace, NO dashboards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Outcome 1 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Continuous IFRS 17 Actuarial Close
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Compress multi-week actuarial reporting cycles down to continuous sub-ledger postings with full audit transparency into Contractual Service Margin (CSM) shifts.
              </p>
            </div>

            {/* Outcome 2 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Same-Day Claims Settlement
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automated digital FNOL assessment and intelligent loss adjuster allocation allow low-complexity claims to be adjudicated and paid within 24 hours.
              </p>
            </div>

            {/* Outcome 3 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Zero Reinsurance Recovery Leakage
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automated proportional and non-proportional treaty calculations guarantee that every eligible claim dollar is captured and billed to reinsurers.
              </p>
            </div>

            {/* Outcome 4 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Rapid Product Time-to-Market
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Clean-core policy configuration templates allow underwriters to design, rate, and launch innovative parametric and cyber coverages in weeks.
              </p>
            </div>

            {/* Outcome 5 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Proactive Fraud Scheme Prevention
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Continuous AI claims pattern recognition flags staged accidents, inflated medical invoices, and duplicate property submissions before payment release.
              </p>
            </div>

            {/* Outcome 6 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Frictionless Broker Collaboration
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Self-service digital partner portals with automated multi-tier commission settlements enhance broker loyalty and accelerate bind ratios.
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
              Insurance Modernization in Action
            </h2>
            <div className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono tracking-wider uppercase">
              Actuarial Subledger & Policy Architecture
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              How global life, health, and P&C carriers advance from legacy policy silos to an integrated, cloud-native insurance enterprise.
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
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR INSURANCE FOUNDATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Modernize Your Insurance Business?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Automate policy lifecycle administration, streamline IFRS 17 actuarial reporting, and eliminate reinsurance recovery leakage with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact?.('Insurance & IFRS 17 Architecture Consultation')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to Our Insurance Architects</span>
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
              <span>IFRS 17 & LDTI Compliant</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-300" />
              <span>Sub-Second Actuarial Postings</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-sky-300" />
              <span>Multi-Line P&C and Life Support</span>
            </span>
          </div>

        </div>

      </section>

    </div>
  );
};
