import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
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
  Factory,
  Award,
  Truck,
  Globe2,
  RefreshCw,
  FileText,
  Radio,
  Server,
  AlertTriangle,
  FolderKanban,
  FileCheck,
  HardHat,
  Scale
} from 'lucide-react';

interface IndustryPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const ConstructionEpcIndustryPage: React.FC<IndustryPageProps> = ({ onOpenContact }) => {
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

  // Section 4: Circular Chevron Radial Wheel Segments (KNOOVIQ Construction & EPC Platform Ecosystem)
  const wheelSegments = [
    {
      id: 'evm-variance',
      title: 'Earned Value Management (EVM)',
      desc: 'Real-time Cost Performance Index (CPI) and Schedule Performance Index (SPI) tracked directly against WBS baseline budgets.',
      side: 'right',
      color: '#0284C7', // Sky Blue
      textColor: 'text-sky-400',
      bgGlow: 'rgba(2, 132, 199, 0.3)',
      icon: TrendingUp
    },
    {
      id: 'aia-billing',
      title: 'Progressive Milestone & AIA Billing',
      desc: 'Automated AIA G702 / G703 contractor payment applications with progressive retention percentage withholding.',
      side: 'right',
      color: '#0EA5E9', // Cyan
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(14, 165, 233, 0.3)',
      icon: FileCheck
    },
    {
      id: 'subcontractor-jms',
      title: 'Subcontractor Joint Measurement (JMS)',
      desc: 'Mobile field certification of subcontractor work packages, digital sign-offs, and pay-when-paid retention rules.',
      side: 'right',
      color: '#10B981', // Emerald
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.3)',
      icon: Workflow
    },
    {
      id: 'laydown-yard',
      title: 'Site Laydown Yard & Material Gates',
      desc: 'RFID and barcode tracking of bulk steel, rebar, and piping shipments across site laydown yards and installation work fronts.',
      side: 'right',
      color: '#F59E0B', // Amber
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.3)',
      icon: Boxes
    },
    {
      id: 'plant-hire-telematics',
      title: 'Heavy Equipment Telematics & Plant Hire',
      desc: 'Live GPS hours and fuel burn telemetry from cranes, excavators, and dump trucks driving automated internal hire chargeouts.',
      side: 'left',
      color: '#F97316', // Orange
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: Truck
    },
    {
      id: 'site-hse-permits',
      title: 'Mobile HSE Inspections & Digital Permits',
      desc: 'Zero-paper safety audits, Permit-to-Work (PTW), and incident reporting mapped directly to site WBS activities.',
      side: 'left',
      color: '#EF4444', // Red
      textColor: 'text-rose-400',
      bgGlow: 'rgba(239, 68, 68, 0.3)',
      icon: ShieldCheck
    },
    {
      id: 'retention-escrow',
      title: 'Retainage Escrow & Defect Liability',
      desc: 'Automated retention money tracking across multi-year warranty periods with scheduled release triggers post-punchlist clearance.',
      side: 'left',
      color: '#8B5CF6', // Purple
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.3)',
      icon: Scale
    },
    {
      id: 'cloud-site-console',
      title: 'BTP Site Progress & Foreman Console',
      desc: 'Offline-capable mobile apps allowing site superintendents to log daily labor muster rolls and physical completion percentages.',
      side: 'left',
      color: '#3B82F6', // Blue
      textColor: 'text-blue-400',
      bgGlow: 'rgba(59, 130, 246, 0.3)',
      icon: HardHat
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
      id: 'bid',
      label: 'Bid & Cost Baseline',
      sublabel: 'Tender Award',
      tech: 'SAP Commercial Project Mgmt',
      desc: 'Locking tender estimate structures into SAP PS baseline budgets, defining cost codes, contingency reserves, and payment milestones.',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=80',
      icon: FolderKanban
    },
    {
      id: 'subcontract',
      label: 'Subcontract Package',
      sublabel: 'Work Award & Scope',
      tech: 'SAP Sourcing & Contracts',
      desc: 'Tendering and awarding specialized trade work packages with automated bill-of-quantities (BOQ) limits and retention withholding terms.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      icon: Workflow
    },
    {
      id: 'site-log',
      label: 'Daily Site Telemetry',
      sublabel: 'Progress & Labor Muster',
      tech: 'BTP Mobile Field App',
      desc: 'Superintendents log daily work progress, concrete pour quantities, subcontractor manpower headcount, and plant hours from mobile devices.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      icon: HardHat
    },
    {
      id: 'jms',
      label: 'Joint Measurement (JMS)',
      sublabel: 'Progress Certification',
      tech: 'SAP PS Progress Ledger',
      desc: 'Collaborative verification of physically installed quantities with digital signatures, eliminating trade disputes over uncertified work.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      icon: FileCheck
    },
    {
      id: 'billing',
      label: 'Milestone & AIA Billing',
      sublabel: 'Client Progress Claim',
      tech: 'SAP Billing & Revenue (RAR)',
      desc: 'Generating certified AIA G702 / G703 contractor applications with automated retention deductions and percentage-of-completion ledger entries.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      icon: BarChart3
    },
    {
      id: 'retention',
      label: 'Closeout & Retention',
      sublabel: 'Defect Liability Release',
      tech: 'SAP Financials Escrow',
      desc: 'Punchlist clearing, as-built drawing verification, and automated staged release of retention monies across the defect liability period.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      icon: Scale
    }
  ];

  // Section 3: Construction & EPC Industry Challenges & Bottlenecks Data (6 Cards)
  const industryChallenges = [
    {
      icon: TrendingUp,
      tag: 'COST OVERRUNS',
      title: 'Unmonitored Budget Drift',
      desc: 'Manual site cost tracking hides subcontractor claims and equipment idling until project completion, obliterating gross margins.',
      footer: 'Uncontrolled Cost Performance (CPI)'
    },
    {
      icon: FileCheck,
      tag: 'SUBCONTRACTOR DISPUTES',
      title: 'Disputed Measurement Claims',
      desc: 'Discrepancies between subcontractor invoices and physical site measurements cause protracted payment disputes and work stoppages.',
      footer: 'Uncertified Progress Invoicing'
    },
    {
      icon: BarChart3,
      tag: 'BILLING LATENCY',
      title: 'Delayed Progressive Invoicing',
      desc: 'Multi-week lag in compiling AIA G702 / G703 documentation starves general contractors of working capital and inflates overdraft interest.',
      footer: 'Compressed Contractor Liquidity'
    },
    {
      icon: Boxes,
      tag: 'LAYDOWN YARD LOSS',
      title: 'Site Material Misplacement',
      desc: 'Bulk fabricated spools and rebar bundles dumped on unorganized laydown yards lead to double-ordering, damage, and installation delays.',
      footer: 'Unchecked Material Shrinkage'
    },
    {
      icon: Truck,
      tag: 'EQUIPMENT UNDERUTILIZATION',
      title: 'Idle Heavy Plant Bleed',
      desc: 'Heavy machinery and leased mobile cranes sit idle on site without internal plant hire billing, eroding estimated equipment margins.',
      footer: 'Unbilled Heavy Equipment Hours'
    },
    {
      icon: Scale,
      tag: 'RETAINAGE LOCKUP',
      title: 'Stalled Retention Money',
      desc: 'Delayed defect liability inspections and unclosed punchlists trap 5% to 10% of total project contract cash in client escrow.',
      footer: 'Restricted Operating Cashflow'
    }
  ];

  // Section 6: Modular Solutions Data
  const categories = [
    { key: 'ALL', label: 'All EPC Suites' },
    { key: 'COMMERCIAL', label: 'Commercial & Billing' },
    { key: 'SITE', label: 'Site Execution & Fleet' },
    { key: 'SUBCONTRACT', label: 'Subcontractor & Risk' }
  ];

  const modularSolutions = [
    {
      category: 'COMMERCIAL',
      categoryLabel: 'COMMERCIAL & BILLING',
      tag: 'SAP PS & RAR',
      title: 'Progressive AIA G702 / G703 Billing Suite',
      description: 'Automates customer progress applications, schedule of values (SOV) tracking, retention withholding, and IFRS 15 revenue recognition.',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80',
      icon: FileCheck,
      highlights: ['Automated Schedule of Values (SOV)', 'Retention deduction calculation', 'IFRS 15 percentage-of-completion']
    },
    {
      category: 'COMMERCIAL',
      categoryLabel: 'COMMERCIAL & BILLING',
      tag: 'EVM INTELLIGENCE',
      title: 'Earned Value Management (EVM) Console',
      description: 'Live Cost Performance Index (CPI) and Schedule Performance Index (SPI) monitoring with predictive Estimate-at-Completion (EAC) forecasting.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      icon: TrendingUp,
      highlights: ['WBS baseline variance alerts', 'Estimate-at-Completion (EAC) models', 'Real-time project cash curve sync']
    },
    {
      category: 'SUBCONTRACT',
      categoryLabel: 'SUBCONTRACTOR & RISK',
      tag: 'SAP SOURCING',
      title: 'Subcontractor Package & JMS Platform',
      description: 'End-to-end subcontract management from RFQ tender to Joint Measurement Sheet (JMS) sign-off, change orders, and back-to-back claims.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      icon: Workflow,
      highlights: ['Digital Joint Measurement sign-offs', 'Pay-when-paid retention rules', 'Subcontract variation limits']
    },
    {
      category: 'SITE',
      categoryLabel: 'SITE EXECUTION & FLEET',
      tag: 'LAYDOWN LOGISTICS',
      title: 'Laydown Yard & Material Gatepass Hub',
      description: 'Mobile barcode and RFID scanning tracking bulk materials from weighbridge receipt to site storage and work-front issuance.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      icon: Boxes,
      highlights: ['Weighbridge integration & gatepass', 'Spool & rebar bundle barcoding', 'Work-front material consumption']
    },
    {
      category: 'SITE',
      categoryLabel: 'SITE EXECUTION & FLEET',
      tag: 'PLANT HIRE',
      title: 'Heavy Equipment Telematics & Chargeouts',
      description: 'Streams live operating hours, idle time, and fuel telematics directly from excavators and cranes to calculate internal project plant charges.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      icon: Truck,
      highlights: ['Automated equipment rate chargeout', 'Predictive maintenance dispatch', 'Fleet idle time minimization']
    },
    {
      category: 'SUBCONTRACT',
      categoryLabel: 'SUBCONTRACTOR & RISK',
      tag: 'DEFECT LIABILITY',
      title: 'Retention Escrow & Punchlist Suite',
      description: 'Coordinates defect rectification lists, warranty milestones, and staged bank guarantee / cash retention disbursements.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      icon: Scale,
      highlights: ['Digital punchlist resolution tracking', 'Scheduled retention release gates', 'Bank guarantee expiry alerts']
    }
  ];

  const filteredSolutions = activeSolutionCategory === 'ALL' 
    ? modularSolutions 
    : modularSolutions.filter(s => s.category === activeSolutionCategory);

  // Section 8: Transformation Roadmap Stages
  const transformationStages = [
    {
      id: 'stage-1',
      badge: 'PHASE 01',
      title: 'Baseline WBS Structuring',
      subtitle: 'Tender to ERP Cost Control',
      description: 'Transforming winning bids into structured SAP PS WBS hierarchies with locked baseline budgets, rate codes, and progressive milestone gates.',
      tag: 'SAP PS Core & Master Data',
      textColor: 'text-sky-400',
      glowColor: 'bg-sky-500',
      borderBase: 'border-sky-500/30',
      activeBorder: 'border-sky-400 ring-2 ring-sky-500/30 bg-sky-950/30',
      icon: FolderKanban,
      before: 'Spreadsheet tenders disconnected from site billing systems',
      after: 'Unified WBS baseline with real-time commitment control',
      metrics: ['Zero unbudgeted cost codes', 'Locked baseline budgets', 'Transparent tender handoff']
    },
    {
      id: 'stage-2',
      badge: 'PHASE 02',
      title: 'Mobile Site Execution',
      subtitle: 'Field Progress Telemetry',
      description: 'Equipping site superintendents with offline mobile apps for daily labor logging, material receipts, and Joint Measurement Sheet (JMS) sign-offs.',
      tag: 'BTP Mobile Construction App',
      textColor: 'text-cyan-400',
      glowColor: 'bg-cyan-500',
      borderBase: 'border-cyan-500/30',
      activeBorder: 'border-cyan-400 ring-2 ring-cyan-500/30 bg-cyan-950/30',
      icon: HardHat,
      before: 'Paper daily site reports compiled weeks later with inaccuracies',
      after: 'Same-day mobile verification of quantities and labor headcount',
      metrics: ['Real-time site visibility', 'Digital subcontractor sign-offs', 'Accurate daily progress']
    },
    {
      id: 'stage-3',
      badge: 'PHASE 03',
      title: 'AIA Progressive Invoicing',
      subtitle: 'Automate Cashflow Recovery',
      description: 'Streamlining customer billing with automated AIA G702 / G703 document generation, schedule of values verification, and retention schedules.',
      tag: 'SAP RAR & Progressive Billing',
      textColor: 'text-amber-400',
      glowColor: 'bg-amber-500',
      borderBase: 'border-amber-500/30',
      activeBorder: 'border-amber-400 ring-2 ring-amber-500/30 bg-amber-950/30',
      icon: FileCheck,
      before: '3-week invoice preparation cycles causing severe working capital strain',
      after: '3-day automated certified application generation and submission',
      metrics: ['18 days reduction in billing cycle', 'Audit-proof SOV backing', 'Automated retainage logic']
    },
    {
      id: 'stage-4',
      badge: 'PHASE 04',
      title: 'Predictive EVM Intelligence',
      subtitle: 'Autonomous Project Control',
      description: 'Deploying AI models on SAP BTP analyzing historical cost performance (CPI/SPI) to predict potential cost-to-complete overruns months in advance.',
      tag: 'BTP AI & Enterprise Analytics',
      textColor: 'text-emerald-400',
      glowColor: 'bg-emerald-500',
      borderBase: 'border-emerald-500/30',
      activeBorder: 'border-emerald-400 ring-2 ring-emerald-500/30 bg-emerald-950/30',
      icon: TrendingUp,
      before: 'Retrospective post-mortem accounting after contract margins collapsed',
      after: 'Proactive early-warning triggers preventing cost overruns before they occur',
      metrics: ['24% cost overrun reduction', 'Predictive cashflow curves', 'Protected contractor margins']
    }
  ];

  // Section 10: FAQs
  const faqs = [
    {
      q: 'How does Knooviq handle AIA G702 and G703 billing format compliance in SAP S/4HANA?',
      a: 'We configure the SAP S/4HANA Billing and Project Systems modules with dedicated Schedule of Values (SOV) tables. The solution automatically aggregates certified physical progress, applies approved change orders, deducts statutory retention percentages, and outputs formatted AIA G702 (Application and Certificate for Payment) and G703 (Continuation Sheet) documents ready for architect certification.'
    },
    {
      q: 'How are subcontractor Joint Measurement Sheets (JMS) verified and signed on site?',
      a: 'Site engineers and subcontractor representatives access a collaborative SAP BTP mobile interface. As physical work is inspected (e.g. cubic meters of concrete poured, tons of structural steel erected), both parties verify quantities against the BOQ line items and execute digital sign-offs. This locks the claimed quantities, preventing billing disputes.'
    },
    {
      q: 'Can heavy equipment telematics be fed into SAP to calculate internal plant rental charges?',
      a: 'Yes. We ingest CANbus and GPS telematics (engine run hours, idle time, and fuel burn) from mixed fleets (Caterpillar, Komatsu, Liebherr) via SAP BTP IoT connectors. The system automatically computes internal rate chargeouts to the specific WBS elements where the equipment operated, eliminating equipment cost leakage.'
    },
    {
      q: 'How is retention money managed across the defect liability period?',
      a: 'SAP Financials segregates retention withholdings into dedicated escrow balance sheet accounts tied to each subcontractor and client contract. The system tracks defect liability end dates and automatically notifies commercial managers when punchlist milestones are completed, unlocking timely retention payment releases.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Pure Enterprise Construction & EPC Hero)
          ========================================================================= */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        
        {/* Full-bleed High Resolution Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=2000&q=80" 
            alt="Construction & Mega-EPC Infrastructure Site"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Seamless Cinematic Left Scrim */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/85 sm:via-slate-950/65 to-transparent pointer-events-none" />

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
                <HardHat className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>

              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Intelligent ERP for <br />
                <span className="text-cyan-400">Construction & Mega-EPC</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Progressive Milestone Billing, Earned Value Management (EVM) & Subcontractor Control.
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
                Empowering general contractors, mega-EPC developers, and civil engineering enterprises with{' '}
                <strong className="text-white font-semibold">SAP S/4HANA Project Systems</strong>, automated{' '}
                <strong className="text-cyan-300 font-semibold">AIA G702 / G703 Progressive Billing</strong>, and live site telemetry.
              </p>

              {/* Clean Feature Highlights */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>AIA G702 / G703 Billing</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Live EVM (CPI / SPI)</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Subcontractor JMS Sign-Off</span>
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
                  <FileCheck className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">PROGRESS BILLING</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">AIA G702/G703</div>
                <div className="text-xs text-slate-300 mt-0.5">Automated SOV Schedules</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">EARNED VALUE</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Live CPI & SPI</div>
                <div className="text-xs text-slate-300 mt-0.5">Predictive Cost Variance</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Workflow className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">SUBCONTRACTORS</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Digital JMS Sign-Off</div>
                <div className="text-xs text-slate-300 mt-0.5">Zero Claim Disputes</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Truck className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">HEAVY PLANT</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Fleet Telematics</div>
                <div className="text-xs text-slate-300 mt-0.5">Internal Rate Allocation</div>
              </div>
            </motion.div>

          </div>
        </div>

      </section>

      {/* =========================================================================
          SECTION 2: EXECUTIVE INDUSTRY PERSPECTIVE & VALUE CHAIN SHOWCASE
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>EXECUTIVE INDUSTRY PERSPECTIVE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Controlling Mega-Project Margins from <span className="text-[#0070C0]">Groundbreak to Closeout</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;In mega-construction projects, cash flow is determined by the speed of progressive certification. When site measurements, subcontractor claims, and AIA billing are unified, budget overruns disappear.&rdquo;
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Mega-EPC projects frequently bleed margin due to disconnected site field logs, contested subcontractor measurements, and multi-week billing compilation cycles. Knooviq orchestrates the physical job site directly with corporate financial ledgers, enabling real-time cost-to-complete visibility and rapid cash cycle turnaround.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs text-center">
                  <div className="text-xl sm:text-2xl font-black text-[#0070C0]">18 Days</div>
                  <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">Faster Billing</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs text-center">
                  <div className="text-xl sm:text-2xl font-black text-emerald-600">Zero</div>
                  <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">JMS Disputes</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs text-center">
                  <div className="text-xl sm:text-2xl font-black text-[#0070C0]">24%</div>
                  <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">Overrun Prevented</div>
                </div>
              </div>

            </div>

            {/* Right Interactive Visualizer: Journey Step Console */}
            <div className="lg:col-span-6 space-y-4">
              
              <div className="rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-lg relative overflow-hidden">
                <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden mb-4">
                  <img 
                    src={journeySteps[activeJourneyStep].image} 
                    alt={journeySteps[activeJourneyStep].label} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-400 text-slate-950 font-mono text-[10px] font-bold uppercase tracking-wider">
                        {journeySteps[activeJourneyStep].tech}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                        {journeySteps[activeJourneyStep].label}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-bold text-sky-200 bg-white/10 px-2 py-1 rounded backdrop-blur-md">
                      STEP 0{activeJourneyStep + 1} / 06
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[44px]">
                  {journeySteps[activeJourneyStep].desc}
                </p>
              </div>

              {/* Stage Navigation Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {journeySteps.map((step, idx) => {
                  const isSelected = activeJourneyStep === idx;
                  const StepIcon = step.icon;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveJourneyStep(idx)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2 ${
                        isSelected 
                          ? 'bg-[#0070C0] text-white border-[#0070C0] shadow-sm' 
                          : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-50'
                      }`}
                    >
                      <StepIcon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-[#0070C0]'}`} />
                      <div className="truncate">
                        <div className="text-[11px] font-bold truncate leading-tight">{step.label}</div>
                        <div className={`text-[9.5px] truncate font-mono ${isSelected ? 'text-sky-100' : 'text-slate-400'}`}>{step.sublabel}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: OPERATIONAL CHALLENGES & PHYSICAL CONSTRAINTS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              <span>CONSTRUCTION DOMAIN BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Operational Challenges Across Mega-EPC Delivery
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Construction firms risk severe liquidity shocks when site progress, subcontractor claims, and equipment rental rates remain disconnected from project accounting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industryChallenges.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl p-5 sm:p-6 bg-white border border-slate-200 shadow-xs hover:shadow-lg hover:border-slate-400 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 font-mono text-[10px] font-bold uppercase tracking-wider border border-rose-100">
                        {item.tag}
                      </span>
                      <div className="p-2 rounded-xl bg-slate-50 text-slate-700">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>STATUS IMPACT</span>
                    <span className="text-rose-600 font-semibold">{item.footer}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CIRCULAR RADIAL CHEVRON WHEEL & ARCHITECTURAL ECOSYSTEM
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#050B17] text-white relative overflow-hidden border-b border-slate-800">
        
        {/* Glow ambient background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-500/10 via-cyan-500/5 to-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-700/60 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              <HardHat className="w-3.5 h-3.5 text-cyan-400" />
              <span>RADIAL PLATFORM ECOSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              KNOOVIQ Construction & Mega-EPC Architecture Core
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Hover over any segment in the interlocking wheel to explore how site execution, progressive AIA billing, and Earned Value Management operate in continuous synchronization.
            </p>
          </motion.div>

          {/* 3-Column Radial Wheel & Flanking Capabilities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* Left Column (4 Capabilities) */}
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
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/15 via-cyan-500/10 to-emerald-500/15 blur-2xl rounded-full pointer-events-none" />

                <svg
                  viewBox="0 0 500 500"
                  className="w-full h-full drop-shadow-2xl overflow-visible"
                >
                  {/* 8 Interlocking Chevron Segments */}
                  {wheelSegments.map((seg, idx) => {
                    const isHovered = hoveredWheelIndex === idx;
                    const pathD = getChevronPath(idx);
                    const coords = getIconCoords(idx);
                    const IconComponent = seg.icon;

                    return (
                      <g 
                        key={seg.id}
                        className="cursor-pointer transition-all duration-300"
                        onMouseEnter={() => setHoveredWheelIndex(idx)}
                        onMouseLeave={() => setHoveredWheelIndex(null)}
                      >
                        <path
                          d={pathD}
                          fill={isHovered ? seg.color : `${seg.color}35`}
                          stroke={seg.color}
                          strokeWidth={isHovered ? 3.5 : 1.5}
                          className="transition-all duration-300"
                          style={{
                            filter: isHovered ? `drop-shadow(0 0 14px ${seg.color})` : 'none'
                          }}
                        />
                        <foreignObject
                          x={coords.x - 14}
                          y={coords.y - 14}
                          width="28"
                          height="28"
                          className="pointer-events-none"
                        >
                          <div className="w-full h-full flex items-center justify-center">
                            <IconComponent 
                              className={`w-5 h-5 transition-colors duration-200 ${
                                isHovered ? 'text-white' : 'text-slate-200'
                              }`} 
                            />
                          </div>
                        </foreignObject>
                      </g>
                    );
                  })}

                  {/* Hub Center Circle */}
                  <circle
                    cx="250"
                    cy="250"
                    r="96"
                    fill="#050B17"
                    stroke="#1E293B"
                    strokeWidth="3"
                  />
                  <circle
                    cx="250"
                    cy="250"
                    r="90"
                    fill="#0A1428"
                    stroke="#0284C7"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />

                  {/* Center Text */}
                  <text
                    x="250"
                    y="238"
                    textAnchor="middle"
                    fill="#38BDF8"
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="bold"
                    letterSpacing="2"
                  >
                    KNOOVIQ
                  </text>
                  <text
                    x="250"
                    y="258"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="14"
                    fontWeight="900"
                  >
                    MEGA-EPC
                  </text>
                  <text
                    x="250"
                    y="274"
                    textAnchor="middle"
                    fill="#94A3B8"
                    fontSize="9"
                    fontFamily="monospace"
                  >
                    CLEAN CORE ERP
                  </text>
                </svg>

              </div>
            </div>

            {/* Right Column (4 Capabilities) */}
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
                      <div className="w-2 h-7 rounded-full shrink-0 mt-0.5 transition-all duration-300"
                        style={{ 
                          backgroundColor: item.color,
                          boxShadow: isHovered ? `0 0 12px ${item.color}` : 'none'
                        }}
                      />
                      <div className="space-y-1 text-right flex-1">
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
          SECTION 5: ENTERPRISE TECHNICAL ARCHITECTURE BLUEPRINT (Interactive Tabs)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Cpu className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>CLEAN CORE ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Enterprise Mega-EPC Technology Blueprint
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Decoupling rugged site mobility, telematics, and subcontractor portals on SAP BTP while preserving an untouched S/4HANA core.
            </p>
          </div>

          {/* Interactive Layer Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveArchTab('site')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'site'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              1. Site Telemetry & Rugged Mobility
            </button>
            <button
              onClick={() => setActiveArchTab('core')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'core'
                  ? 'bg-[#0070C0] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              2. SAP S/4HANA PS & Financials Core
            </button>
            <button
              onClick={() => setActiveArchTab('cloud')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'cloud'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              3. Cloud BTP Subcontractor Hub
            </button>
          </div>

          {/* Active Blueprint View */}
          <div className="rounded-2xl border-2 border-slate-300 bg-slate-950 text-white p-6 sm:p-8 shadow-xl">
            {activeArchTab === 'site' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Radio className="w-6 h-6 text-sky-400" />
                    <div>
                      <h3 className="text-lg font-bold text-white">Site Edge Devices, Telematics & Weighbridges</h3>
                      <p className="text-xs text-slate-400 font-mono">CANbus Telematics • Barcode Scanners • Offline Tablets • Weighbridge APIs</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-mono">Offline-First Sync</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-sky-300 uppercase font-mono mb-1">Rugged Site Muster</h4>
                    <p className="text-xs text-slate-300">Biometric and QR badge scanners register daily subcontractor trade headcounts at site security gates.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-sky-300 uppercase font-mono mb-1">Equipment Telematics</h4>
                    <p className="text-xs text-slate-300">GPS geofences and engine load data stream live operating hours directly to plant hire accounts.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-sky-300 uppercase font-mono mb-1">Laydown RFID Ingestion</h4>
                    <p className="text-xs text-slate-300">Materials gatepass scanning verifies steel and pipe spool shipments against delivery notes on arrival.</p>
                  </div>
                </div>
              </div>
            )}

            {activeArchTab === 'core' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Server className="w-6 h-6 text-[#0070C0]" />
                    <div>
                      <h3 className="text-lg font-bold text-white">SAP S/4HANA Project Systems (PS) & Commercial Core</h3>
                      <p className="text-xs text-slate-400 font-mono">Universal Journal ACDOCA • EVM Calculation • IFRS 15 Billing • Retention Escrow</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono">Clean Core Standard</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-cyan-300 uppercase font-mono mb-1">AIA G702 / G703 Engine</h4>
                    <p className="text-xs text-slate-300">Generates statutory payment applications mapped directly to certified Schedule of Values line items.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-cyan-300 uppercase font-mono mb-1">Real-Time EVM Ledgers</h4>
                    <p className="text-xs text-slate-300">Universal Journal tracks CPI/SPI variance immediately upon labor and subcontractor cost postings.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-cyan-300 uppercase font-mono mb-1">Retention Accounting</h4>
                    <p className="text-xs text-slate-300">Automated ledger segregation of retention withholdings across defect liability warranty periods.</p>
                  </div>
                </div>
              </div>
            )}

            {activeArchTab === 'cloud' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-amber-400" />
                    <div>
                      <h3 className="text-lg font-bold text-white">SAP BTP Subcontractor & Commercial Portal</h3>
                      <p className="text-xs text-slate-400 font-mono">BTP Event Mesh • Subcontractor Collaboration • Digital Signature API</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono">Zero Core Tampering</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-amber-300 uppercase font-mono mb-1">Subcontractor JMS Sign-Off</h4>
                    <p className="text-xs text-slate-300">Trade contractors review and sign measured quantities digitally, avoiding billing friction.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-amber-300 uppercase font-mono mb-1">Site Safety Workflows</h4>
                    <p className="text-xs text-slate-300">Permit-to-Work applications and safety incident audits processed with automated supervisor routing.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-amber-300 uppercase font-mono mb-1">Predictive Cash Curves</h4>
                    <p className="text-xs text-slate-300">Machine learning models forecast progressive billing collections and contractor disbursements.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: MODULAR INDUSTRY SOLUTION SUITES
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Boxes className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>MODULAR SOLUTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Knooviq Construction & EPC Solution Suites
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Targeted capability packages engineered to solve contractor cashflow delays and site margin leakage without project interruption.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveSolutionCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeSolutionCategory === cat.key
                    ? 'bg-[#0070C0] text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid of Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div 
                  key={sol.title}
                  className="rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0070C0] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group h-full"
                >
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 shrink-0">
                    <img 
                      src={sol.image} 
                      alt={sol.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                      {sol.tag}
                    </div>
                    <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/90 backdrop-blur-md text-[#0070C0] shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-[#0070C0] uppercase tracking-wider bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                        {sol.categoryLabel}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-[#0070C0] transition-colors leading-snug line-clamp-2">
                        {sol.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {sol.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-slate-100 mt-4">
                      {sol.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0070C0] shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: STANDARDIZATION & CLEAN CORE ARCHITECTURE MATRIX
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>ENTERPRISE STANDARDIZATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Legacy Project Spreadsheets vs Knooviq Clean Core
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Compare traditional disconnected construction practices against Knooviq&apos;s real-time SAP S/4HANA Clean Core architecture.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white font-mono text-[11px] uppercase tracking-wider">
                  <th className="p-4 sm:p-5">Construction Dimension</th>
                  <th className="p-4 sm:p-5 text-rose-300">Legacy / Fragmented Approach</th>
                  <th className="p-4 sm:p-5 text-cyan-300">Knooviq S/4HANA Clean Core</th>
                  <th className="p-4 sm:p-5 text-emerald-300">Measurable Value Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Progressive Client Billing</td>
                  <td className="p-4 sm:p-5 text-slate-600">Manual spreadsheet AIA G702 compilation taking 2 to 3 weeks.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">Automated Schedule of Values (SOV) generation in SAP.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">18 days faster cash collection; zero invoice disputes.</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Earned Value (EVM)</td>
                  <td className="p-4 sm:p-5 text-slate-600">Retrospective quarterly cost-to-complete reviews after overrun.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">Real-time Cost & Schedule Performance Index (CPI/SPI).</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">24% reduction in project budget overruns.</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Subcontractor Claims</td>
                  <td className="p-4 sm:p-5 text-slate-600">Disputed paper measurement sheets and delayed certifications.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">Mobile Joint Measurement Sheet (JMS) with digital signatures.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">Zero trade claim disputes; clean audit trail.</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Equipment & Fleet</td>
                  <td className="p-4 sm:p-5 text-slate-600">Unmonitored plant hours and forgotten internal chargeouts.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">Live CANbus telematics automated WBS chargeouts.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">100% equipment recovery; reduced idle fuel burn.</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Retention Management</td>
                  <td className="p-4 sm:p-5 text-slate-600">Spreadsheet tracking leading to forgotten escrow claims.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">Automated milestone escrow release notifications.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">Accelerated release of 5% to 10% contract value.</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: TRANSFORMATION ROADMAP & DELTA INSPECTOR
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#050B17] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
              <RefreshCw className="w-3.5 h-3.5 text-sky-300" />
              <span>TRANSFORMATION ROADMAP & DELTA INSPECTOR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Four Phases to Autonomous Mega-EPC Operations
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Inspect how legacy manual job site spreadsheets transform into a synchronized enterprise operational fabric across every stage of the SAP deployment.
            </p>
          </div>

          {/* 4 Interactive Transformation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {transformationStages.map((stage, sIdx) => {
              const isSelected = activeTransformStage === sIdx;
              const IconComp = stage.icon;
              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveTransformStage(sIdx)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? stage.activeBorder
                      : `bg-white/[0.03] ${stage.borderBase} hover:border-slate-600 hover:bg-white/[0.05]`
                  }`}
                >
                  {isSelected && (
                    <div className={`absolute top-0 left-0 right-0 h-0.5 ${stage.glowColor} shadow-[0_0_10px_currentColor]`} />
                  )}

                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${stage.glowColor} ${isSelected ? 'animate-ping' : ''}`} />
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${stage.textColor}`}>
                          {stage.badge}
                        </span>
                      </div>
                      <div className={`p-1.5 rounded-lg bg-white/5 border border-white/10 ${stage.textColor}`}>
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                        {stage.title}
                      </h3>
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wide mt-0.5">
                        {stage.subtitle}
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-2.5 mt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[9.5px] font-mono text-slate-400">
                      {stage.tag}
                    </span>
                    <span className={`text-[9.5px] font-mono font-bold uppercase tracking-wider ${stage.textColor} inline-flex items-center gap-0.5`}>
                      <span>{isSelected ? 'ACTIVE' : 'INSPECT'}</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Live Transformation Console / Delta Inspector */}
          {(() => {
            const currentStage = transformationStages[activeTransformStage];
            return (
              <div className="rounded-2xl bg-slate-900/90 border-2 border-slate-700/80 p-5 sm:p-6 shadow-2xl backdrop-blur-md relative overflow-hidden">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${currentStage.textColor}`}>
                      {currentStage.badge} ARCHITECTURAL DELTA
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5">
                      {currentStage.title} &mdash; {currentStage.subtitle}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-mono">
                    Target: {currentStage.tag}
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
          SECTION 9: REAL-WORLD BUSINESS IMPACT & KPIS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <TrendingUp className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PROVEN METRICS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Measurable Outcomes from Mega-EPC Transformation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Representative performance gains realized by general contractors and mega-EPC developers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-[#0070C0] tracking-tight">18 Days</div>
              <div className="text-sm font-bold text-slate-900">Faster Cash Recovery</div>
              <p className="text-xs text-slate-500">Automated progressive AIA G702 / G703 billing generation.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight">24%</div>
              <div className="text-sm font-bold text-slate-900">Cost Overrun Prevention</div>
              <p className="text-xs text-slate-500">Live Earned Value Management (CPI/SPI) variance triggers.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-[#0070C0] tracking-tight">Zero</div>
              <div className="text-sm font-bold text-slate-900">Subcontractor Disputes</div>
              <p className="text-xs text-slate-500">Digital Joint Measurement Sheet (JMS) verified on mobile.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight">100%</div>
              <div className="text-sm font-bold text-slate-900">Equipment Cost Recovery</div>
              <p className="text-xs text-slate-500">Telematics integration automating internal plant hire chargeouts.</p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10: FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
              <HelpCircle className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Construction & EPC Architecture Advisory
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Key considerations for general contractors and mega-EPC firms embarking on SAP S/4HANA implementation.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50/50 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left text-xs sm:text-sm font-bold text-slate-900 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#0070C0]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
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
      <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-r from-[#003B73] via-[#005B9E] to-[#0070C0] text-white">
        
        {/* Abstract 3D Mesh Visual Background */}
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
            <HardHat className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR CONSTRUCTION ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build a Smarter Mega-EPC Enterprise?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Synchronize your job sites, progressive milestone billing, and contract financials with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact('Construction & EPC Architecture Advisory')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to Our EPC Experts</span>
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
              <span>Global 24/7 SLA Support</span>
            </span>
          </div>

        </div>

      </section>

    </div>
  );
};

export default ConstructionEpcIndustryPage;
