import React, { useState } from 'react';
import { useAutoRotate } from '../../hooks/useAutoRotate';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Users, 
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
  ShieldCheck, 
  Layers, 
  DollarSign, 
  Scale, 
  CreditCard, 
  Building2, 
  Calendar, 
  PieChart, 
  Cpu, 
  Database, 
  Sliders, 
  AlertTriangle 
} from 'lucide-react';

interface ProfessionalServicesIndustryPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const ProfessionalServicesIndustryPage: React.FC<ProfessionalServicesIndustryPageProps> = ({ 
  onOpenContact 
}) => {
  // State for Section 4 Circular Chevron Wheel
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(null);

  // State for Section 7 Solution Category Filter
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');

  // State for Section 9 Transformation Stage
  const [activeTransformStage, setActiveTransformStage] = useState<number>(0);

  // Section 4: 8-Segment Circular Chevron Wheel (KNOOVIQ Professional Services Ecosystem)
  const wheelSegments = [
    {
      id: 'resource-scheduling',
      title: 'Skills-Based Resource Scheduling',
      desc: 'Algorithmic staffing matching consultant certifications, seniority bands, and availability to client engagements.',
      side: 'right',
      color: '#22C55E', // Green
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(34, 197, 94, 0.3)',
      icon: Users
    },
    {
      id: 'time-expense',
      title: 'Mobile Timesheets & Expense Capture',
      desc: 'AI-assisted receipt scanning, automated policy checks, multi-currency conversions, and one-click manager signoffs.',
      side: 'right',
      color: '#84CC16', // Lime Green
      textColor: 'text-lime-400',
      bgGlow: 'rgba(132, 204, 22, 0.3)',
      icon: Clock
    },
    {
      id: 'milestone-billing',
      title: 'Milestone, Retainer & T&M Invoicing',
      desc: 'Automated invoice generation supporting fixed-fee milestones, capped retainers, and time-and-materials rate cards.',
      side: 'right',
      color: '#EAB308', // Yellow
      textColor: 'text-yellow-400',
      bgGlow: 'rgba(234, 179, 8, 0.3)',
      icon: DollarSign
    },
    {
      id: 'revenue-recognition',
      title: 'IFRS 15 / ASC 606 Revenue Recognition',
      desc: 'Automated percentage-of-completion calculations, event-driven contract asset recognition, and deferred billing schedules.',
      side: 'right',
      color: '#F97316', // Orange
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: Scale
    },
    {
      id: 'project-margin-analytics',
      title: 'Real-Time Engagement Margin Analytics',
      desc: 'Continuous tracking of billable recovery rates, realization ratios, direct contractor costs, and project contribution margins.',
      side: 'left',
      color: '#F43F5E', // Rose
      textColor: 'text-rose-400',
      bgGlow: 'rgba(244, 63, 94, 0.3)',
      icon: PieChart
    },
    {
      id: 'subcontractor-governance',
      title: 'External Contractor & Vendor Management',
      desc: 'Automated statement of work (SOW) tracking, pass-through contractor invoice approvals, and 1099/tax compliance.',
      side: 'left',
      color: '#EC4899', // Pink
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.3)',
      icon: Briefcase
    },
    {
      id: 'multi-entity-crosscharge',
      title: 'Intercompany Staffing & Cross-Charging',
      desc: 'Automated transfer pricing and markup cross-charging when international subsidiaries share practice consultants.',
      side: 'left',
      color: '#A855F7', // Purple
      textColor: 'text-purple-400',
      bgGlow: 'rgba(168, 85, 247, 0.3)',
      icon: Building2
    },
    {
      id: 'engagement-governance',
      title: 'Engagement Governance & Risk Auditing',
      desc: 'Automated contract scope change orders, budget overrun warning alerts, and executive client governance dashboards.',
      side: 'left',
      color: '#06B6D4', // Cyan
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(6, 182, 212, 0.3)',
      icon: ShieldCheck
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
      id: 'pipeline-staffing',
      label: 'Engagement Staffing',
      sublabel: 'Skills & Availability Matching',
      desc: 'Identify available practitioners, evaluate seniority tiers, and reserve capacity before proposals are signed.',
      tech: 'SAP Resource Management & S/4HANA',
      image: '/images/professional-services/stage1_engagement_staffing.png',
      icon: Users
    },
    {
      id: 'time-expense-entry',
      label: 'Time & Expense Entry',
      sublabel: 'Mobile Fiori Tracking',
      desc: 'Enable field consultants to log hours, attach travel receipts, and route cross-entity project expenses from any device.',
      tech: 'SAP Fiori My Timesheet & Concur',
      image: '/images/professional-services/stage2_time_expense.png',
      icon: Clock
    },
    {
      id: 'billing-release',
      label: 'Billing & Invoicing',
      sublabel: 'Automated Invoice Generation',
      desc: 'Consolidate approved timesheets, reimbursable expenses, and deliverable signoffs into verified client invoices.',
      tech: 'SAP Project Billing Engine',
      image: '/images/professional-services/stage3_billing_invoicing.png',
      icon: DollarSign
    },
    {
      id: 'event-revrec',
      label: 'Revenue Recognition',
      sublabel: 'IFRS 15 / ASC 606 Standards',
      desc: 'Post automated contractual revenue recognitions based on completion milestones and work-in-progress (WIP) valuations.',
      tech: 'SAP Event-Based Revenue Recognition',
      image: '/images/professional-services/stage4_revenue_recognition.png',
      icon: Scale
    },
    {
      id: 'margin-analytics',
      label: 'Margin Intelligence',
      sublabel: 'Real-Time Engagement Profitability',
      desc: 'Track realization rates, direct consultant compensation, and overhead loadings against contract caps in real time.',
      tech: 'SAP Profitability Analysis (CO-PA)',
      image: '/images/professional-services/stage5_margin_intelligence.png',
      icon: PieChart
    },
    {
      id: 'practice-review',
      label: 'Practice Performance',
      sublabel: 'Executive Practice Leadership',
      desc: 'Review practice utilization, bench ratios, and pipeline demand forecasts to make informed hiring and partner promotion decisions.',
      tech: 'SAP S/4HANA Cloud Professional Services',
      image: '/images/professional-services/stage6_practice_performance.png',
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

  // Section 3: Professional Services Challenges Data
  const servicesChallenges = [
    {
      tag: 'BENCH LEAKAGE',
      icon: Users,
      title: 'Unoptimized Consultant Bench Time',
      desc: 'Fragmented spreadsheets and siloed regional staffing leads to low billable utilization, extended bench time, and lost margin.',
      footer: 'Unassigned Consultant Bench Waste'
    },
    {
      tag: 'BILLING LATENCY',
      icon: DollarSign,
      title: 'Delayed Timesheet Submissions & Invoicing',
      desc: 'Chasing delinquent timesheets and reconciling manual project expenses delays monthly client billing cycles by up to 25 days.',
      footer: 'Extended Invoice Issuance Latency'
    },
    {
      tag: 'REVENUE RECOGNITION RISK',
      icon: Scale,
      title: 'Complex IFRS 15 / ASC 606 Compliance',
      desc: 'Fixed-fee milestones and multi-element contracts tracked in offline spreadsheets trigger audit scrutiny and restatements.',
      footer: 'Manual WIP & RevRec Exposure'
    },
    {
      tag: 'MARGIN EROSION',
      icon: PieChart,
      title: 'Unbilled Out-of-Scope Creep',
      desc: 'Consultants perform out-of-scope tasks without change order approvals, steadily eroding engagement margins and profitability.',
      footer: 'Uncaptured Project Scope Creep'
    },
    {
      tag: 'INTERCOMPANY COMPLEXITY',
      icon: Building2,
      title: 'Cross-Border Staffing Markup Friction',
      desc: 'Staffing global engagements across international legal entities creates tangled tax markups and manual cross-charge disputes.',
      footer: 'Multi-Entity Transfer Markup Disputes'
    },
    {
      tag: 'SUBCONTRACTOR LEAKAGE',
      icon: Briefcase,
      title: 'Unreconciled Third-Party Vendor Spend',
      desc: 'Managing specialized freelance contractors without unified SOW milestones leads to overbilling and lost pass-through margins.',
      footer: 'Uncontrolled Subcontractor Overspend'
    }
  ];

  // Section 7: Symmetrical 3x3 Modular Solutions (9 Cards)
  const industrySolutions = [
    {
      category: 'RESOURCE_TIME',
      categoryLabel: 'Resource & Time',
      tag: 'STAFFING ENGINE',
      title: 'SAP Resource Management for Consultancies',
      description: 'Centralized practitioner directory matching skills, certifications, and availability against open client project demands.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      icon: Users,
      highlights: ['Skills-Based AI Matching', 'Capacity & Bench Forecasts', 'Engagement Request Workflows']
    },
    {
      category: 'RESOURCE_TIME',
      categoryLabel: 'Resource & Time',
      tag: 'TIME & EXPENSE',
      title: 'Mobile Timesheet & Expense Capture Hub',
      description: 'Intuitive mobile time entry with OCR receipt scanning, multi-currency conversion, and automated project approval routings.',
      image: '/images/professional-services/solution_mobile_timesheet_expense.png',
      icon: Clock,
      highlights: ['Fiori Mobile Experience', 'Receipt OCR Auto-Extraction', 'Automated Travel Policy Checks']
    },
    {
      category: 'RESOURCE_TIME',
      categoryLabel: 'Resource & Time',
      tag: 'SUBCONTRACTORS',
      title: 'External Contractor & SOW Management',
      description: 'Structured freelance partner onboarding, milestone SOW deliverable tracking, and pass-through client expense reconciliation.',
      image: '/images/professional-services/solution_external_contractor_sow.png',
      icon: Briefcase,
      highlights: ['SOW Milestone Tracking', 'Vendor Timesheet Approvals', 'Tax Compliance Validation']
    },
    {
      category: 'BILLING_REVREC',
      categoryLabel: 'Billing & RevRec',
      tag: 'PROJECT INVOICING',
      title: 'Flexible Milestone & Retainer Billing',
      description: 'Automated client billing engine supporting fixed fees, capped T&M, recurring retainers, and performance bonuses.',
      image: '/images/professional-services/solution_milestone_retainer_billing.png',
      icon: DollarSign,
      highlights: ['Multi-Rate Card Flexibility', 'Automated Milestone Releases', 'Custom Client Billing Formats']
    },
    {
      category: 'BILLING_REVREC',
      categoryLabel: 'Billing & RevRec',
      tag: 'IFRS 15 / ASC 606',
      title: 'SAP Event-Based Revenue Recognition',
      description: 'Continuous revenue recognition recognizing earnings upon milestone signoffs without month-end batch calculations.',
      image: '/images/professional-services/solution_event_based_revenue_recognition.png',
      icon: Scale,
      highlights: ['Percentage of Completion (PoC)', 'Real-Time WIP Asset Postings', 'Contract Asset & Liability Ledger']
    },
    {
      category: 'BILLING_REVREC',
      categoryLabel: 'Billing & RevRec',
      tag: 'MULTI-ENTITY',
      title: 'Intercompany Cross-Charging & Markups',
      description: 'Automated transfer pricing and internal markup calculation when practice members deliver work across subsidiaries.',
      image: '/images/professional-services/solution_intercompany_cross_charging.png',
      icon: Building2,
      highlights: ['Automated Intercompany Invoices', 'Transfer Markup Rules Engine', 'Bilateral Settlement Reconciliation']
    },
    {
      category: 'PROFITABILITY_GOV',
      categoryLabel: 'Profitability & Margin',
      tag: 'MARGIN INTELLIGENCE',
      title: 'Real-Time Engagement Profitability (CO-PA)',
      description: 'Continuous tracking of realization rates, practitioner direct costs, and overhead loadings against fixed contract price caps.',
      image: '/images/professional-services/solution_realtime_engagement_profitability_copa.png',
      icon: PieChart,
      highlights: ['Real-Time Contribution Margin', 'Billable Realization Analytics', 'Over-Budget Early Warning']
    },
    {
      category: 'PROFITABILITY_GOV',
      categoryLabel: 'Profitability & Margin',
      tag: 'PRACTICE ANALYTICS',
      title: 'Executive Practice Leadership Dashboards',
      description: 'High-level practice visibility into billable utilization, partner equity metrics, and forward pipeline capacity planning.',
      image: '/images/professional-services/solution_executive_practice_leadership.png',
      icon: BarChart3,
      highlights: ['Practice Utilization Forecasts', 'Partner Realization Benchmarks', 'Recruiting Demand Modeling']
    },
    {
      category: 'PROFITABILITY_GOV',
      categoryLabel: 'Profitability & Margin',
      tag: 'GOVERNANCE',
      title: 'Engagement Change Order & Governance Hub',
      description: 'Formal digital scope amendment workflows ensuring out-of-scope requests are authorized and billed before delivery.',
      image: '/images/professional-services/solution_engagement_change_order_governance.png',
      icon: ShieldCheck,
      highlights: ['Digital Change Order Signoffs', 'Audit-Proof SOW Amendments', 'Zero Unbilled Scope Creep']
    }
  ];

  // Section 9: Transformation Pipeline Data
  const transformationStages = [
    {
      badge: 'PHASE 01',
      title: 'Practice & Billing Audit',
      subtitle: 'Utilization & Margin Leakage Assessment',
      description: 'Evaluate regional timesheet software silos, manual invoice reconciliation spreadsheets, and unbilled scope creep across client accounts.',
      tag: 'Practice Assessment',
      icon: Compass,
      textColor: 'text-sky-400',
      glowColor: 'bg-sky-500',
      borderBase: 'border-sky-500/20',
      activeBorder: 'border-sky-400 bg-sky-950/40',
      before: 'Fragmented timesheet spreadsheets & 20+ day invoice lags',
      after: 'Unified enterprise practice management roadmap on SAP S/4HANA',
      metrics: ['Zero Spreadsheets for Staffing', 'Clean Core Decoupling', 'Audited Practice Utilization']
    },
    {
      badge: 'PHASE 02',
      title: 'Unified PSA & Project Core',
      subtitle: 'Resource Scheduling & Mobile Time Entry',
      description: 'Deploy SAP S/4HANA Cloud for Professional Services with skills-based staffing, mobile timesheet entry, and automated project setup.',
      tag: 'Operational Core',
      icon: Users,
      textColor: 'text-emerald-400',
      glowColor: 'bg-emerald-500',
      borderBase: 'border-emerald-500/20',
      activeBorder: 'border-emerald-400 bg-emerald-950/40',
      before: 'Bench practitioners sitting idle while projects lack staffing',
      after: 'Algorithmic skills matching raising billable utilization by 15%',
      metrics: ['Skills-Based Matching', 'Mobile Fiori Timesheets', 'Automated Project Setup']
    },
    {
      badge: 'PHASE 03',
      title: 'Automated Billing & RevRec',
      subtitle: 'Event-Based Revenue Recognition',
      description: 'Implement automated invoice generation supporting retainers, milestones, and T&M, backed by event-based IFRS 15 / ASC 606 revenue recognition.',
      tag: 'Financial Automation',
      icon: DollarSign,
      textColor: 'text-purple-400',
      glowColor: 'bg-purple-500',
      borderBase: 'border-purple-500/20',
      activeBorder: 'border-purple-400 bg-purple-950/40',
      before: 'Month-end revenue recognition calculations taking weeks',
      after: 'Real-time event-driven revenue recognition upon milestone delivery',
      metrics: ['Continuous WIP Accounting', 'Multi-Rate Card Flexibility', 'Audit-Proof IFRS 15 Lineage']
    },
    {
      badge: 'PHASE 04',
      title: 'Global Practice Intelligence',
      subtitle: 'Margin Analytics & Global Scaling',
      description: 'Roll out automated intercompany cross-charging, contractor governance, and executive practice profitability dashboards.',
      tag: 'Global Scale',
      icon: Globe2,
      textColor: 'text-cyan-400',
      glowColor: 'bg-cyan-500',
      borderBase: 'border-cyan-500/20',
      activeBorder: 'border-cyan-400 bg-cyan-950/40',
      before: 'Disputed cross-border markups & unbilled out-of-scope work',
      after: 'Automated transfer pricing and real-time margin visibility',
      metrics: ['Automated Intercompany Markup', 'Zero Unbilled Scope Creep', 'Real-Time Realization Analytics']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Cinematic 2-Column Enterprise Hero Showcase)
          ========================================================================= */}
      <section className="relative min-h-[660px] lg:min-h-[720px] bg-slate-950 text-white flex flex-col justify-between overflow-hidden">
        
        {/* Ambient Subtle Cyber Grid & Atmospheric Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Hero Top Content (2-Column Grid) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 relative z-10 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (7 cols): Content & Typography */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              
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

              {/* Practice Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
                <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-md">
                Intelligent Professional Services & PSA Modernization
              </h1>

              {/* Sub-headline */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
                Maximize billable consultant utilization, accelerate milestone invoicing, automate IFRS 15 / ASC 606 revenue recognition, and protect engagement margins on clean-core SAP architecture.
              </p>

              {/* Feature Highlight Pills */}
              <div className="flex flex-wrap gap-2 sm:gap-3 pt-1">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white backdrop-blur-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Skills-Based Resource Matching</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white backdrop-blur-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Event-Based Revenue Recognition</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white backdrop-blur-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Real-Time Engagement Margins</span>
                </div>
              </div>

            </div>

            {/* Right Column (5 cols): Pure Architectural Diagram Showcase (100% Uncut & Crystal Clear) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-[560px] rounded-2xl overflow-hidden border-2 border-slate-700/60 bg-slate-900/90 shadow-2xl shadow-black/60 p-2 sm:p-2.5 backdrop-blur-md group hover:border-[#0070C0] transition-colors duration-300">
                <div className="relative w-full rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center min-h-[300px] sm:min-h-[380px] lg:min-h-[460px]">
                  <img 
                    src="/images/professional-services/professional_services_hero.png" 
                    alt="SAP Professional Services Architecture" 
                    className="w-full h-auto max-h-[500px] object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Enterprise Architectural Trust Ribbon (Inside Hero, 4-Column Layout) */}
        <div className="relative z-10 w-full border-t border-white/15 bg-slate-950/70 backdrop-blur-md py-4 sm:py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-white text-xs font-mono">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-slate-200 text-[11px]">Resource Scheduling</div>
                  <div className="text-[10px] text-slate-400">SAP Resource Management</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <DollarSign className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-slate-200 text-[11px]">Billing Engine</div>
                  <div className="text-[10px] text-slate-400">Automated Milestone & T&M</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-slate-200 text-[11px]">Revenue Recognition</div>
                  <div className="text-[10px] text-slate-400">IFRS 15 / ASC 606 Event-Based</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <PieChart className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-slate-200 text-[11px]">Margin Intelligence</div>
                  <div className="text-[10px] text-slate-400">SAP S/4HANA Profitability Core</div>
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
                <Briefcase className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>EXECUTIVE PERSPECTIVE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Aligning Talent Utilization with Project Profitability
              </h2>

              {/* Executive Thesis Quote Card */}
              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-slate-800 italic leading-relaxed">
                  "Consulting, engineering, and IT services firms succeed on the speed with which skills are staffed and engagements are billed. Disconnected spreadsheets lead to bench waste and delayed billing that erode margin."
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In professional services, your inventory goes home in the elevator every night. Balancing high consultant utilization with sustainable delivery requires an integrated professional services automation (PSA) system. From algorithmic staffing matching and mobile timesheet approvals to automated IFRS 15 milestone billing, modern firms build transparency from proposal to cash collection.
              </p>

              {/* 3 Strategic Pillars */}
              <div className="space-y-2 pt-1">
                
                <div className="p-3 rounded-xl border border-slate-300 bg-white hover:border-[#0070C0] transition-colors flex items-start gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-200">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">Skills-Based Staffing Precision</h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      Match practitioners to engagements based on real-time availability, certifications, and target billing realization rates.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-slate-300 bg-white hover:border-[#0070C0] transition-colors flex items-start gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-200">
                    <DollarSign className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">Frictionless Invoice Generation</h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      Accelerate billing cycles by automatically consolidating approved hours, travel expenses, and milestone deliverables into client invoices.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-slate-300 bg-white hover:border-[#0070C0] transition-colors flex items-start gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0070C0] flex items-center justify-center shrink-0 border border-slate-200">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">Event-Based RevRec & Margin Control</h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      Automate IFRS 15 / ASC 606 revenue postings upon delivery and track live project contribution margins to stop scope creep.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column (6 Cols): Dynamic Photo Showcase & 6 Stage Navigation */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Dynamic Photo Showcase */}
              <div className="relative aspect-[16/9] sm:aspect-[1024/558] w-full min-h-[260px] sm:min-h-[300px] rounded-2xl overflow-hidden border-2 border-slate-300 shadow-md bg-slate-950">
                <img 
                  src={journeySteps[activeJourneyStep].image} 
                  alt={journeySteps[activeJourneyStep].label} 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 via-45% to-transparent pointer-events-none" />
                
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
                      onClick={() => handleJourneyStepClick(idx)}
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
              Operational Challenges Impeding Consultancies & Services Firms
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              From unbilled scope creep to delayed timesheet approvals, services organizations face significant margin leakage without integrated PSA infrastructure.
            </p>
          </div>

          {/* 6 Challenge Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesChallenges.map((challenge, cIdx) => {
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
              <span>PSA PLATFORM ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Integrated Professional Services Platform Matrix
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              A synchronized enterprise PSA platform uniting skills scheduling, mobile time capture, automated milestone billing, and real-time engagement margins.
            </p>
          </div>

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
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/15 via-emerald-500/10 to-purple-500/15 blur-2xl rounded-full pointer-events-none" />

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
                          width="28"
                          height="28"
                          className="pointer-events-none"
                        >
                          <div 
                            className="w-full h-full flex items-center justify-center transition-transform duration-300"
                            style={{ 
                              color: seg.color,
                              transform: isHighlighted ? 'scale(1.2)' : 'scale(1)'
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
                        SERVICES PSA
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
              Technology Foundation for Professional Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Clean-core SAP S/4HANA Cloud for Professional Services layered with algorithmic resource matching, mobile Fiori timesheets, and event-based revenue recognition.
            </p>
          </div>

          {/* 6 Technology Suite Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Tech 1 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">PROJECT CORE</span>
                <Briefcase className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP S/4HANA Professional Services Core
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Project-centric ERP uniting sales orders, work breakdown structures (WBS), billing plans, and ledger postings in a single database.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• WBS Engagement Architecture</div>
                <div className="flex items-center gap-1.5">• Real-Time Ledger Integration</div>
              </div>
            </div>

            {/* Tech 2 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">RESOURCE MANAGEMENT</span>
                <Users className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Resource Management
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Algorithmic scheduling engine matching certified practitioners to open project roles, minimizing unbilled bench time and maximizing realization.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Skills-Based Scheduling Engine</div>
                <div className="flex items-center gap-1.5">• Practice Bench Capacity Analytics</div>
              </div>
            </div>

            {/* Tech 3 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">REVENUE RECOGNITION</span>
                <Scale className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Event-Based RevRec
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automated revenue postings matching IFRS 15 / ASC 606 standards instantly as milestone deliverables are accepted or timesheets approved.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Instant PoC Milestone Calculation</div>
                <div className="flex items-center gap-1.5">• Elimination of Month-End Batch Runs</div>
              </div>
            </div>

            {/* Tech 4 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">MOBILE UX</span>
                <Clock className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Fiori Mobile Timesheets
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Consumer-grade mobile time and expense entry with automated task codes, receipt image attachments, and instant manager approvals.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• One-Click Mobile Submissions</div>
                <div className="flex items-center gap-1.5">• Offline Time Tracking Capability</div>
              </div>
            </div>

            {/* Tech 5 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">PROFITABILITY</span>
                <PieChart className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Profitability Analysis (CO-PA)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Granular engagement margin analytics calculating direct consultant rates, loaded overheads, and subcontractor spend against billing caps.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Live Realization & Rate Analytics</div>
                <div className="flex items-center gap-1.5">• Over-Budget Early Warning Signals</div>
              </div>
            </div>

            {/* Tech 6 */}
            <div className="p-6 rounded-3xl bg-slate-50/80 border-2 border-slate-200 hover:border-[#0070C0] hover:bg-white shadow-sm transition-all group space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#0070C0] uppercase tracking-wider">GLOBAL STAFFING</span>
                <Building2 className="w-5 h-5 text-[#0070C0]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0070C0] transition-colors">
                SAP Advanced Intercompany Cross-Charging
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automated multi-subsidiary billing and transfer pricing markup generation when practitioners deliver services to international sister entities.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">• Automated Transfer Markup Posting</div>
                <div className="flex items-center gap-1.5">• Zero Intercompany Reconciliation Latency</div>
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
              <Briefcase className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>ENTERPRISE FUNCTIONAL CATALOG</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Solutions for Every Professional Services Domain
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Explore specialized enterprise functional modules engineered to modernize consulting, legal, and engineering practices across resource staffing, billing, and margin control.
            </p>
          </div>

          {/* Solution Domain Category Tabs - 4 Symmetrical Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-7 sm:mb-8">
            {[
              { id: 'ALL', label: 'All Solutions' },
              { id: 'RESOURCE_TIME', label: 'Resource & Time' },
              { id: 'BILLING_REVREC', label: 'Billing & RevRec' },
              { id: 'PROFITABILITY_GOV', label: 'Profitability & Margin' }
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
              Transforming Service Delivery into Predictable Practice Margin
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              When skills-based scheduling, automated billing, and event-based revenue recognition operate in real-time unison, firms expand realization while lowering administrative overhead.
            </p>
          </div>

          {/* 6 Outcomes (Large typography, generous whitespace, NO dashboards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Outcome 1 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                15%+ Higher Billable Utilization
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Algorithmic scheduling matches practitioners to open client roles days earlier, cutting costly unbilled bench time across practice groups.
              </p>
            </div>

            {/* Outcome 2 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Compress Billing Cycles by 20 Days
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Mobile timesheet submissions with automated manager signoffs allow monthly invoices to be issued on day one of the new month.
              </p>
            </div>

            {/* Outcome 3 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Continuous IFRS 15 Revenue Audit Readiness
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Event-based revenue recognition automatically posts earnings upon milestone acceptance, providing instant audit lineage for contract assets.
              </p>
            </div>

            {/* Outcome 4 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <PieChart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Zero Unbilled Scope Creep
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Formal digital change order signoffs ensure that out-of-scope client requests are captured, authorized, and billed before delivery begins.
              </p>
            </div>

            {/* Outcome 5 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Frictionless Global Cross-Charging
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automated multi-subsidiary transfer pricing marks up cross-border consultant sharing without manual intercompany disputes.
              </p>
            </div>

            {/* Outcome 6 */}
            <div className="space-y-3 p-6 rounded-3xl border border-sky-100 bg-[#F0F7FD]/40 hover:bg-white hover:border-[#0070C0] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#0070C0]/10 flex items-center justify-center text-[#0070C0]">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Total Subcontractor Spend Transparency
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Unified SOW milestone tracking ensures freelance contractors are paid strictly against accepted deliverables, preserving engagement margins.
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
              PSA Modernization in Action
            </h2>
            <div className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono tracking-wider uppercase">
              End-to-End Professional Services Progression
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              How consulting, legal, and engineering practices advance from fragmented timesheets to an integrated, profitable practice management engine.
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
            <Briefcase className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR PRACTICE FOUNDATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build a High-Utilization Services Enterprise?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Align skills-based staffing, eliminate delinquent timesheets, automate IFRS 15 milestone billing, and protect engagement margins with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact?.('Professional Services & PSA Architecture Consultation')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to Our Practice Architects</span>
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
              <span>IFRS 15 / ASC 606 Ready</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-300" />
              <span>Real-Time Milestone Billing</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-sky-300" />
              <span>Global Practice Intercompany Staffing</span>
            </span>
          </div>

        </div>

      </section>

    </div>
  );
};
