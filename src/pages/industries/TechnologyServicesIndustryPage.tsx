import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Users2, 
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
  Layers,
  UserCheck
} from 'lucide-react';

interface IndustryPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const TechnologyServicesIndustryPage: React.FC<IndustryPageProps> = ({ onOpenContact }) => {
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

  // Section 4: Circular Chevron Radial Wheel Segments (KNOOVIQ Tech Services Platform Ecosystem)
  const wheelSegments = [
    {
      id: 'resource-bench',
      title: 'Global Resource & Bench Orchestration',
      desc: 'Real-time talent matching aligning consultant technical certifications, billing rate tiers, and client availability.',
      side: 'right',
      color: '#0284C7',
      textColor: 'text-sky-400',
      bgGlow: 'rgba(2, 132, 199, 0.3)',
      icon: Users2
    },
    {
      id: 'sow-milestone',
      title: 'Statement-of-Work Milestone Governance',
      desc: 'Automated stage-gate validation locking project deliverable acceptance before progressive invoice generation.',
      side: 'right',
      color: '#0EA5E9',
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(14, 165, 233, 0.3)',
      icon: FileCheck
    },
    {
      id: 'time-expense',
      title: 'Time & Expense Multi-Entity Capture',
      desc: 'Mobile-first timesheet booking with cross-border tax compliance, automated exchange rate valuation, and direct ledger posting.',
      side: 'right',
      color: '#10B981',
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.3)',
      icon: Clock
    },
    {
      id: 'intercompany-settlement',
      title: 'Intercompany Margin & Transfer Pricing',
      desc: 'Automated cross-border staffing chargebacks between parent entities and offshore Global Capability Centers (GCCs).',
      side: 'right',
      color: '#F59E0B',
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.3)',
      icon: RefreshCw
    },
    {
      id: 'contractor-vendor',
      title: 'Contractor Sourcing & VMS Integration',
      desc: 'Seamless onboarding of third-party specialist contractors with rate cards, background verification, and auto PO generation.',
      side: 'left',
      color: '#F97316',
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: UserCheck
    },
    {
      id: 'evm-profitability',
      title: 'Project Profitability & Margin Analytics',
      desc: 'Continuous tracking of cost-to-complete against fixed-price contractual caps to protect engagement gross margins.',
      side: 'left',
      color: '#8B5CF6',
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.3)',
      icon: BarChart3
    },
    {
      id: 'skill-taxonomy',
      title: 'Competency Taxonomy & Talent Growth',
      desc: 'Centralized repository of verified staff competencies, cloud credentials, and proactive upskilling pipelines.',
      side: 'left',
      color: '#EC4899',
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.3)',
      icon: Sparkles
    },
    {
      id: 'statutory-billing',
      title: 'Global Multi-Currency Billing Engine',
      desc: 'Automated generation of localized customer invoices with statutory withholding, GST, VAT, and e-invoicing compliance.',
      side: 'left',
      color: '#3B82F6',
      textColor: 'text-blue-400',
      bgGlow: 'rgba(59, 130, 246, 0.3)',
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
      id: 'demand',
      label: 'Staffing Intake',
      sublabel: 'Requisition & SOW',
      tech: 'SAP SuccessFactors & Fieldglass',
      desc: 'Capturing role specifications, bill rate thresholds, and delivery milestones with automated contract approval workflows.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      icon: Briefcase
    },
    {
      id: 'allocation',
      label: 'Talent Matching',
      sublabel: 'Skill Matrix Query',
      tech: 'S/4HANA Resource Management',
      desc: 'Querying global delivery pools to match technical proficiencies, visa eligibility, and availability schedules.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
      icon: Users2
    },
    {
      id: 'engagement',
      label: 'Engagement Setup',
      sublabel: 'WBS & Cost Center',
      tech: 'SAP S/4HANA Cloud for Projects',
      desc: 'Generating hierarchical project structures mapping billable tasks, overhead limits, and staffing budgets.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      icon: FolderKanban
    },
    {
      id: 'tracking',
      label: 'Time & Expense',
      sublabel: 'Multi-Currency Booking',
      tech: 'SAP Fiori My Timesheet',
      desc: 'Mobile-enabled time recording with automated overtime rules, per diem policies, and project manager sign-off.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      icon: Clock
    },
    {
      id: 'settlement',
      label: 'Intercompany Billing',
      sublabel: 'Transfer Pricing',
      tech: 'SAP Advanced Intercompany Sales',
      desc: 'Reconciling cross-border entity allocations with transfer pricing documentation and statutory tax withholding.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      icon: RefreshCw
    },
    {
      id: 'invoicing',
      label: 'Revenue & Invoicing',
      sublabel: 'Milestone Recognition',
      tech: 'SAP Revenue Accounting (RAR)',
      desc: 'Reconciling earned revenue according to delivery progress, generating client invoices, and eliminating revenue leakage.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
      icon: FileText
    }
  ];

  // Section 3: Technology Services Industry Challenges & Bottlenecks Data (6 Cards)
  const industryChallenges = [
    {
      id: 'bench-fragmentation',
      tag: 'CAPACITY MANAGEMENT',
      title: 'Unmonitored Bench & Capacity Drift',
      desc: 'Consulting teams maintain disconnected spreadsheets, causing delayed consultant redeployment, sub-optimal utilization, and unrecovered payroll overheads.',
      status: 'CRITICAL BOTTLENECK',
      statusColor: 'text-rose-400 bg-rose-950/60 border-rose-800'
    },
    {
      id: 'milestone-disputes',
      tag: 'CONTRACT GOVERNANCE',
      title: 'Fixed-Price Milestone Disputes',
      desc: 'Ambiguous completion criteria between engineering teams and clients delay customer sign-off, locking working capital and creating bad debt reserves.',
      status: 'HIGH RISK',
      statusColor: 'text-amber-400 bg-amber-950/60 border-amber-800'
    },
    {
      id: 'intercompany-friction',
      tag: 'CROSS-BORDER TAX',
      title: 'Complex Intercompany Chargebacks',
      desc: 'Offshore delivery hubs struggle with manual reconciliation of staff hours across jurisdictions, exposing the organization to double-taxation and transfer pricing audits.',
      status: 'AUDIT EXPOSURE',
      statusColor: 'text-rose-400 bg-rose-950/60 border-rose-800'
    },
    {
      id: 'revenue-leakage',
      tag: 'FINANCIAL ACCURACY',
      title: 'Unbilled Time & Travel Slippage',
      desc: 'Late time approvals and unlogged out-of-pocket expenses slip past monthly client billing windows, permanently eroding project gross margins.',
      status: 'MARGIN EROSION',
      statusColor: 'text-amber-400 bg-amber-950/60 border-amber-800'
    },
    {
      id: 'contractor-rate-creep',
      tag: 'VENDOR GOVERNANCE',
      title: 'Subcontractor Rate Card Inconsistencies',
      desc: 'Decentralized procurement of specialist contractors leads to overlapping agency margins, unverified technical credentials, and untracked PO over-expenditures.',
      status: 'PROCUREMENT LEAKAGE',
      statusColor: 'text-rose-400 bg-rose-950/60 border-rose-800'
    },
    {
      id: 'statutory-reporting',
      tag: 'COMPLIANCE INTEGRITY',
      title: 'Multi-Country Withholding & Tax Complexity',
      desc: 'Deploying engineering talent across multiple territories demands real-time compliance with local labor mandates, contractor classifications, and statutory electronic invoicing.',
      status: 'GOVERNANCE BOTTLENECK',
      statusColor: 'text-amber-400 bg-amber-950/60 border-amber-800'
    }
  ];

  // Section 5: Architecture Tabs Data
  const architectureTabs = [
    {
      id: 'core',
      name: 'Digital Core Orchestration',
      tag: 'SAP S/4HANA PROFESSIONAL SERVICES',
      headline: 'Centralized Engagement Accounting & Project System Ledger',
      desc: 'A unified single-source-of-truth linking client contracts, work breakdown structures, multi-currency ledgers, and revenue accounting.',
      capabilities: [
        'Single-instance universal ledger for real-time engagement gross margin analysis',
        'Automated multi-currency billing engines supporting localized statutory taxes',
        'Real-time Earned Value Management (EVM) tracking deliverable progress',
        'Direct integration with SAP Revenue Accounting and Reporting (RAR) for compliance'
      ],
      diagramDetails: [
        { label: 'Work Breakdown Ledger', value: 'WBS Hierarchies' },
        { label: 'Revenue Recognition', value: 'Standard Compliance' },
        { label: 'Billing Schedule', value: 'Milestone Triggers' },
        { label: 'Currency Valuation', value: 'Automated FX Hedging' }
      ]
    },
    {
      id: 'edge',
      name: 'Talent & Vendor Operations',
      tag: 'HYBRID WORKFORCE PLATFORM',
      headline: 'Mobile Time Capture & Vendor Management Suite',
      desc: 'Empowering consultants, project managers, and procurement officers with intuitive self-service apps and vendor portals.',
      capabilities: [
        'Responsive mobile timesheet and expense entry with receipt optical recognition',
        'Automated contractor onboarding, background compliance checks, and SOW locks',
        'Automated skill matrix mapping matching certifications to open requisitions',
        'Proactive capacity leveling alerts preventing project delivery delays'
      ],
      diagramDetails: [
        { label: 'Mobile Time Logging', value: 'SAP Fiori Experience' },
        { label: 'Contractor Hub', value: 'VMS Integration' },
        { label: 'Skill Repository', value: 'Continuous Taxonomy' },
        { label: 'Approval Automation', value: 'Multi-Tier Stage-Gates' }
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud Intelligence & Analytics',
      tag: 'SAP BTP & ANALYTICS CLOUD',
      headline: 'Predictive Utilization & Margin Drift Modeling',
      desc: 'Leveraging SAP Business Technology Platform to anticipate consultant bench time, pipeline staffing gaps, and engagement profitability.',
      capabilities: [
        'Predictive bench utilization modeling based on historical staffing pipelines',
        'Automated anomaly detection flagging projects with budget burn drift',
        'Enterprise data unification across CRM pipelines, HR systems, and finance ledgers',
        'Role-tailored executive cockpits for practice leaders and managing partners'
      ],
      diagramDetails: [
        { label: 'Predictive Forecasting', value: 'Capacity Intelligence' },
        { label: 'Margin Variance', value: 'Real-Time Telemetry' },
        { label: 'Executive Cockpit', value: 'Managing Partner View' },
        { label: 'Data Unification', value: 'Clean Core Integration' }
      ]
    }
  ];

  // Section 6: Modular Solutions Data
  const modularSolutions = [
    {
      category: 'CORE',
      title: 'Universal Project Financial Management',
      badge: 'S/4HANA PS & FINANCE',
      desc: 'Synchronize contract milestone gates directly with project expenditure baselines and billing schedules to ensure positive engagement cash flows.',
      features: [
        'Hierarchical work breakdown structure (WBS) budgeting',
        'Live cost-to-complete variance tracking',
        'Automated milestone billing schedule generation',
        'Multi-currency balance sheet and revenue valuation'
      ]
    },
    {
      category: 'TALENT',
      title: 'Global Delivery Talent Allocation Hub',
      badge: 'RESOURCE MANAGEMENT',
      desc: 'Optimize consultant deployment across global capability centers using dynamic skill taxonomy, availability schedules, and cost rate tiers.',
      features: [
        'Verified technical credential and certification tracking',
        'Cross-location bench visibility and capacity leveling',
        'Automated role assignment and calendar scheduling',
        'Client rate card and margin optimization'
      ]
    },
    {
      category: 'COMPLIANCE',
      title: 'Contractor VMS & Statement-of-Work Governance',
      badge: 'VENDOR MANAGEMENT',
      desc: 'Standardize third-party staffing agency engagements with clear rate cards, deliverables verification, and automated purchase order generation.',
      features: [
        'Subcontractor credential and tax classification audits',
        'Statement-of-work milestone acceptance workflows',
        'Automated vendor timesheet validation against project caps',
        'Consolidated agency spend and rate benchmarking'
      ]
    },
    {
      category: 'ANALYTICS',
      title: 'Practice Profitability & Margin Intelligence',
      badge: 'SAP ANALYTICS CLOUD',
      desc: 'Deliver real-time visibility into engagement margins, unbilled inventory, and consultant billability across global business units.',
      features: [
        'Practice-level utilization and realization scorecards',
        'Unbilled WIP aging and invoice collection tracking',
        'Early margin warning system for fixed-bid contracts',
        'Intercompany transfer pricing margin compliance'
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
      dimension: 'Resource Planning',
      legacy: 'Ad-hoc spreadsheets, outdated bench files, and disconnected regional talent databases.',
      cleanCore: 'Centralized resource allocation engine with live availability, skill taxonomy, and project matching.',
      valueImpact: 'Optimal Global Utilization'
    },
    {
      dimension: 'Time & Expense Entry',
      legacy: 'Delayed end-of-month timesheets resulting in client billing disputes and unrecoverable slippage.',
      cleanCore: 'Native mobile timesheet recording with real-time project validation and automated policy checks.',
      valueImpact: 'Rapid Billing Turnaround'
    },
    {
      dimension: 'Milestone Governance',
      legacy: 'Subjective completion claims causing delayed client sign-off and working capital lockup.',
      cleanCore: 'Formal digital stage-gate sign-offs mapped directly to automated invoice creation triggers.',
      valueImpact: 'Consistent Cash Velocity'
    },
    {
      dimension: 'Intercompany Staffing',
      legacy: 'Manual cross-entity journal vouchers creating transfer pricing audit risks and reconciliation friction.',
      cleanCore: 'Automated intercompany sales orders, internal invoices, and transfer pricing documentation.',
      valueImpact: 'Audit-Proof Entity Governance'
    },
    {
      dimension: 'Revenue Accounting',
      legacy: 'Spreadsheet-based percentage-of-completion calculations vulnerable to manual calculation errors.',
      cleanCore: 'Automated revenue recognition engines aligning deliverable progress with statutory compliance.',
      valueImpact: 'Flawless Financial Integrity'
    }
  ];

  // Section 8: Transformation Roadmap Stages Data
  const transformationStages = [
    {
      badge: 'FOUNDATION',
      title: 'Digital Core & Unified Time Booking',
      subtitle: 'Core Ledger & Universal Timesheets',
      tag: 'CORE UNIFICATION',
      textColor: 'text-sky-400',
      description: 'Establish unified master data across clients, project WBS structures, and mobile-enabled consultant time logging.',
      before: 'Fragmented regional ERPs and disparate local timesheet portals with unstandardized billing codes.',
      after: 'Unified SAP S/4HANA Cloud for Projects establishing real-time time capture and contract ledger synchronization.',
      metrics: ['Single-source-of-truth project master data', 'Immediate time capture into financial ledgers', 'Standardized global billing rate cards']
    },
    {
      badge: 'INTEGRATION',
      title: 'Resource Allocation & Skill Taxonomy',
      subtitle: 'Talent Bench & Requisition Matching',
      tag: 'WORKFORCE ALIGNMENT',
      textColor: 'text-cyan-400',
      description: 'Deploy real-time skill matching algorithms to optimize consultant allocation and minimize unassigned bench periods.',
      before: 'Practice managers relying on email inquiries and regional spreadsheets to discover available staff.',
      after: 'Integrated SAP Resource Management providing complete global visibility into certified technical talent.',
      metrics: ['Global availability and skill matrix visibility', 'Automated requisition matching', 'Minimized bench idle duration']
    },
    {
      badge: 'ORCHESTRATION',
      title: 'Contractor VMS & Milestone Governance',
      subtitle: 'Vendor Governance & Stage-Gate Invoicing',
      tag: 'VALUE PROTECTION',
      textColor: 'text-emerald-400',
      description: 'Automate third-party specialist contractor onboarding and enforce strict digital deliverable acceptance before billing.',
      before: 'Subcontractor invoices approved without verified timesheets or delivered project milestones.',
      after: 'Closed-loop contractor governance locking vendor payments and client invoices to verified stage-gates.',
      metrics: ['Locked subcontractor spend caps', 'Zero milestone invoice disputes', 'Eliminated revenue leakage']
    },
    {
      badge: 'AUTONOMY',
      title: 'Predictive Margin & GCC Orchestration',
      subtitle: 'Predictive Analytics & Intercompany Core',
      tag: 'ENTERPRISE SCALE',
      textColor: 'text-purple-400',
      description: 'Implement predictive capacity forecasting and automated cross-border transfer pricing across global delivery hubs.',
      before: 'Manual quarterly intercompany reconciliations and delayed visibility into practice profitability.',
      after: 'Real-time multi-entity chargebacks with predictive talent demand analytics and margin drift alerts.',
      metrics: ['Continuous multi-entity margin tracking', 'Automated transfer pricing compliance', 'Predictive talent capacity leveling']
    }
  ];

  // Section 10: FAQs
  const faqs = [
    {
      q: 'How does SAP S/4HANA Professional Services handle fixed-price versus time-and-materials contracts?',
      a: 'SAP S/4HANA Cloud for Projects natively supports multi-model commercial structures within the same customer engagement. Time-and-materials work packages generate billing proposals directly from approved consultant timesheets and expenses. Simultaneously, fixed-price milestones are tied to digital deliverable sign-offs that trigger revenue recognition and progressive billing schedules, ensuring complete compliance with statutory accounting standards.'
    },
    {
      q: 'Can third-party specialist contractors log time and expenses alongside full-time staff?',
      a: 'Yes. Through SAP Fieldglass and S/4HANA integration, contractors are onboarded with strict rate cards and statement-of-work boundaries. They record hours through unified, intuitive portals where time entries are automatically validated against purchase order limits and contract caps before passing to practice managers for final approval.'
    },
    {
      q: 'How are cross-border staff assignments and intercompany transfer pricing handled?',
      a: 'Our solution deploys SAP Advanced Intercompany Sales and Resource-Related Intercompany Billing. When a consultant from an offshore Global Capability Center (GCC) delivers hours on an onshore client project, the platform automatically generates internal billing documents, applies configured markups or cost-plus margins, and updates local statutory tax ledgers without manual intervention.'
    },
    {
      q: 'What makes KNOOVIQ’s Clean Core implementation superior for technology services firms?',
      a: 'KNOOVIQ adheres strictly to SAP Clean Core standards. All industry-specific extensions—such as specialized skill matching algorithms or custom client invoicing templates—are built on SAP Business Technology Platform (BTP) using public APIs. This ensures your core ERP remains fully agile, upgradeable without downtime, and perpetually ready for new technological capabilities.'
    }
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        {/* Full-bleed background image with deep gradient scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" 
            alt="Technology Services & Professional Staffing" 
            className="w-full h-full object-cover object-center"
          />
          {/* Deep cinematic gradient scrim */}
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
              <Briefcase className="w-4 h-4 text-sky-400" />
              <span>TECHNOLOGY SERVICES & PROFESSIONAL STAFFING</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4"
            >
              Orchestrating Global Talent with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
                Precision ERP Governance
              </span>
            </motion.h1>

            {/* Subheadline / Value Proposition */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-6 font-normal"
            >
              Unify consultant skill matrices, multi-currency time and expense capture, fixed-bid milestone sign-offs, and intercompany GCC billing on a single, agile SAP S/4HANA digital core.
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
                <span>Global Talent Bench Optimization</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Milestone Stage-Gate Billing</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Automated GCC Intercompany Ledger</span>
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
                  <Users2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">BENCH MATCH</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">Dynamic Taxonomy</div>
                <div className="text-[10px] text-slate-300">Instant Role Pairing</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">MOBILE T&E</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">Live Ledger Sync</div>
                <div className="text-[10px] text-slate-300">Zero Unbilled Slippage</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">TRANSFER PRICING</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">Automated GCC Settlement</div>
                <div className="text-[10px] text-slate-300">Statutory Tax Proof</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">REVENUE CONTROL</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">Milestone Verification</div>
                <div className="text-[10px] text-slate-300">Continuous Audit Ready</div>
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
                Aligning Global Staffing Capacity with <span className="text-sky-400">Engagement Profitability</span>
              </h2>

              <div className="border-l-4 border-sky-500 pl-4 py-2 bg-white/5 rounded-r-xl">
                <p className="text-sm font-semibold text-slate-200 leading-relaxed italic">
                  &ldquo;In professional staffing and technology services, margin protection relies on the speed at which billable talent is deployed, verified against milestone criteria, and invoiced without revenue leakage.&rdquo;
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Consulting firms and IT staffing organizations face margin pressure from delayed bench allocation, disputed deliverable sign-offs, and intricate transfer pricing between onshore client teams and offshore development centers. Knooviq establishes an automated digital operating thread connecting talent discovery, timesheet verification, and multi-entity ledgers into an integrated SAP Clean Core.
              </p>

              {/* Information Checklist Grid (Zero Numbers/Percents) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Automated skill matrix queries matching verified consultant certifications',
                  'Closed-loop statement-of-work milestone acceptance before invoice generation',
                  'Live multi-currency timesheet recording with automated labor law validation',
                  'Instant intercompany chargebacks across global capability centers'
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
              Operational Vulnerabilities in Technology Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Structural bottlenecks that erode margins, delay client billing cycles, and strain workforce governance.
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
              KNOOVIQ Tech Services Platform Ecosystem
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Eight interlocking capability modules synchronizing the complete professional services lifecycle.
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
                  <Briefcase className="w-5 h-5 text-cyan-400 mb-1" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 font-bold">KNOOVIQ</span>
                  <span className="text-xs font-black text-white leading-tight">TECH SERVICES</span>
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
              Three-Tier Technology Services Architecture
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Separating core transactional integrity from agile workforce applications and cloud analytics.
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
              Specialized Solutions for Technology Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Composable capabilities designed to accelerate professional services performance without disrupting daily delivery.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {['ALL', 'CORE', 'TALENT', 'COMPLIANCE', 'ANALYTICS'].map((cat) => (
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
                    onClick={() => onOpenContact(`Technology Services: ${sol.title}`)}
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
              Transforming fragmented staffing records into an integrated, real-time enterprise ledger.
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
              Phased Professional Services Transformation
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Four progressive architectural stages transitioning consulting firms to real-time Clean Core automation.
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
              Strategic Value Drivers for Modern Professional Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Architectural advantages realized by consulting practices running on SAP Clean Core.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between hover:border-sky-400 transition-colors">
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 inline-block">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-white">Continuous Bench Utilization</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Real-time talent matching eliminates idle consultant bench periods by pairing technical credentials with incoming client project demand immediately.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 mt-4 text-[10px] font-mono text-sky-400 font-bold uppercase">
                CAPACITY OPTIMIZATION
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between hover:border-sky-400 transition-colors">
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 inline-block">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-white">Zero Milestone Disputes</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Clear digital acceptance criteria map deliverable proof directly to invoice proposals, safeguarding client relationships and accelerating cash flow.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 mt-4 text-[10px] font-mono text-emerald-400 font-bold uppercase">
                BILLING ACCELERATION
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between hover:border-sky-400 transition-colors">
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 inline-block">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-white">Seamless GCC Transfer Pricing</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Automated intercompany billing enforces statutory cross-border markup documentation, eliminating transfer pricing audit exposures across all jurisdictions.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 mt-4 text-[10px] font-mono text-purple-400 font-bold uppercase">
                TAX & ENTITY GOVERNANCE
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between hover:border-sky-400 transition-colors">
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 inline-block">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-base font-bold text-white">Full Revenue Compliance</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Native integration with SAP Revenue Accounting and Reporting (RAR) automatically aligns earned revenue with delivery completion and accounting standards.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 mt-4 text-[10px] font-mono text-amber-400 font-bold uppercase">
                FINANCIAL INTEGRITY
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
              Technology Services & Staffing ERP Inquiries
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Critical architecture considerations for technology consultancies modernizing on SAP.
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
            Accelerate Your Technology Services Transformation
          </h2>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Schedule a dedicated solution architecture session with our SAP Professional Services practice leads to evaluate your staffing utilization, milestone billing, and GCC transfer pricing.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact('Technology Services Architecture Consultation')}
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
