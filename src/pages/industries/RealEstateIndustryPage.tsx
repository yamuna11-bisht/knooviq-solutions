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
  Key,
  Receipt,
  FileSpreadsheet,
  Coins
} from 'lucide-react';

interface IndustryPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const RealEstateIndustryPage: React.FC<IndustryPageProps> = ({ onOpenContact }) => {
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

  // Section 4: Circular Chevron Radial Wheel Segments (KNOOVIQ Real Estate Platform Ecosystem)
  const wheelSegments = [
    {
      id: 'ifrs-16-engine',
      title: 'IFRS 16 & ASC 842 Lease Valuation',
      desc: 'Automated Right-of-Use (RoU) asset amortization, interest expense schedules, and lease liability balance postings.',
      side: 'right',
      color: '#0284C7', // Sky Blue
      textColor: 'text-sky-400',
      bgGlow: 'rgba(2, 132, 199, 0.3)',
      icon: Receipt
    },
    {
      id: 'cam-pooling',
      title: 'Dynamic CAM Expense Pooling',
      desc: 'Pro-rata common area maintenance apportionment based on occupied square footage, utility metering, and gross leasable area (GLA).',
      side: 'right',
      color: '#0EA5E9', // Cyan
      textColor: 'text-cyan-400',
      bgGlow: 'rgba(14, 165, 233, 0.3)',
      icon: FileSpreadsheet
    },
    {
      id: 'turnover-rent',
      title: 'Retail Mall Turnover Rent Engine',
      desc: 'Automated point-of-sale takeaway integration and certified gross turnover auditing for tiered percentage rental billing.',
      side: 'right',
      color: '#10B981', // Emerald
      textColor: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.3)',
      icon: Coins
    },
    {
      id: 'space-utilization',
      title: 'Space Allocation & Floorplan GIS',
      desc: 'CAD/BIM architectural space management mapping unit availability, tenant demising walls, and vacancy rates in real time.',
      side: 'right',
      color: '#F59E0B', // Amber
      textColor: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.3)',
      icon: Building2
    },
    {
      id: 'rent-escalation',
      title: 'Automated Indexation & Escalations',
      desc: 'Rule-based periodic rent step-ups tied to consumer price indexes (CPI), fixed percentages, or contract anniversary triggers.',
      side: 'left',
      color: '#F97316', // Orange
      textColor: 'text-orange-400',
      bgGlow: 'rgba(249, 115, 22, 0.3)',
      icon: TrendingUp
    },
    {
      id: 'deposit-escrow',
      title: 'Security Deposit & Escrow Ledger',
      desc: 'Segregated bank guarantee and security deposit escrow tracking with automated deductions for fit-out damages upon vacancy.',
      side: 'left',
      color: '#8B5CF6', // Purple
      textColor: 'text-purple-400',
      bgGlow: 'rgba(139, 92, 246, 0.3)',
      icon: Key
    },
    {
      id: 'reit-portfolio-kpi',
      title: 'REIT Yield & NOI Intelligence',
      desc: 'Real-time Net Operating Income (NOI), Funds From Operations (FFO), and capitalization rate benchmarking across global properties.',
      side: 'left',
      color: '#EC4899', // Pink
      textColor: 'text-pink-400',
      bgGlow: 'rgba(236, 72, 153, 0.3)',
      icon: BarChart3
    },
    {
      id: 'tenant-portal',
      title: 'Tenant Self-Service & Fit-Out Portal',
      desc: 'Digital tenant onboarding, automated service request logging, invoice downloads, and digital payment gateway integration.',
      side: 'left',
      color: '#3B82F6', // Blue
      textColor: 'text-blue-400',
      bgGlow: 'rgba(59, 130, 246, 0.3)',
      icon: Workflow
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
      id: 'space',
      label: 'Space Allocation',
      sublabel: 'Unit Floorplan Management',
      tech: 'SAP RE-FX Space Hub',
      desc: 'Managing commercial office suites, retail units, and logistics bays with dynamic demising walls and leasable area calculations.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      icon: Building2
    },
    {
      id: 'lease',
      label: 'Lease Contract (IFRS 16)',
      sublabel: 'Clause & Right-of-Use Setup',
      tech: 'SAP Contract Management',
      desc: 'Modeling base rent, escalation schedules, and automated Right-of-Use (RoU) asset and lease liability amortization schedules.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      icon: Receipt
    },
    {
      id: 'fitout',
      label: 'Tenant Fit-Out',
      sublabel: 'Utility Meter Onboarding',
      tech: 'BTP Smart Submetering',
      desc: 'Coordinating architectural fit-out inspections, security deposit collection, and smart electrical/water submeter onboarding.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      icon: Key
    },
    {
      id: 'cam',
      label: 'CAM Expense Bill Run',
      sublabel: 'Common Area Apportionment',
      tech: 'SAP Settlement Engine',
      desc: 'Aggregating security, janitorial, and HVAC costs into expense pools and calculating monthly pro-rata tenant recovery invoices.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      icon: FileSpreadsheet
    },
    {
      id: 'turnover',
      label: 'Turnover Rent Audit',
      sublabel: 'POS Sales Certification',
      tech: 'SAP Billing & Revenue (RAR)',
      desc: 'Auditing retail tenant gross sales certificates and computing tiered percentage rent charges exceeding the natural break-even point.',
      image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
      icon: Coins
    },
    {
      id: 'renewal',
      label: 'Renewal & Escalate',
      sublabel: 'Portfolio Yield Optimization',
      tech: 'SAP REIT Intelligence Hub',
      desc: 'Simulating rent indexation step-ups, issuing digital renewal offers, and reconciling final security deposits upon space handover.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      icon: TrendingUp
    }
  ];

  // Section 3: Real Estate Industry Challenges & Bottlenecks Data (6 Cards)
  const industryChallenges = [
    {
      icon: Receipt,
      tag: 'IFRS 16 / ASC 842',
      title: 'Complex Lease Compliance',
      desc: 'Manual spreadsheet tracking of Right-of-Use (RoU) amortization and discount rate modifications leads to severe statutory audit failures.',
      footer: 'Statutory Financial Non-Compliance'
    },
    {
      icon: FileSpreadsheet,
      tag: 'CAM LEAKAGE',
      title: 'Disputed Common Area Charges',
      desc: 'Delayed annual CAM reconciliations and opaque cost apportionment trigger aggressive tenant audit disputes and withheld service charge payments.',
      footer: 'Unrecovered Property Operating Costs'
    },
    {
      icon: Coins,
      tag: 'TURNOVER RENT LEAK',
      title: 'Unverified Retail Sales Reporting',
      desc: 'Relying on self-reported tenant sales data without automated point-of-sale verification causes significant retail percentage rent under-billing.',
      footer: 'Lost Variable Lease Revenue'
    },
    {
      icon: Building2,
      tag: 'VACANCY DRAG',
      title: 'Stagnant Space Allocation',
      desc: 'Lack of real-time visibility into lease expiries and unleased square footage prolongs vacancy cycles and reduces portfolio yield.',
      footer: 'Depressed Net Operating Income (NOI)'
    },
    {
      icon: TrendingUp,
      tag: 'INDEXATION ERRORS',
      title: 'Missed Escalation Step-Ups',
      desc: 'Forgotten anniversary contract dates and miscalculated CPI adjustments across thousands of tenant units cause permanent base rent leakage.',
      footer: 'Uncaptured Contractual Escalations'
    },
    {
      icon: Key,
      tag: 'DEPOSIT RECONCILIATION',
      title: 'Fit-Out & Escrow Friction',
      desc: 'Disorganized security deposit ledgers and uncoordinated move-out punchlists lead to tenant litigation and delayed space remarketing.',
      footer: 'Delayed Space Turnaround Cycles'
    }
  ];

  // Section 6: Modular Solutions Data
  const categories = [
    { key: 'ALL', label: 'All Real Estate Suites' },
    { key: 'LEASE', label: 'Lease & IFRS 16' },
    { key: 'CAM', label: 'CAM & Retail Billing' },
    { key: 'PORTFOLIO', label: 'REIT Portfolio Analytics' }
  ];

  const modularSolutions = [
    {
      category: 'LEASE',
      categoryLabel: 'LEASE & IFRS 16',
      tag: 'SAP RE-FX CORE',
      title: 'IFRS 16 / ASC 842 Automated Valuation Engine',
      description: 'Calculates present value, discount rates, Right-of-Use asset amortization schedules, and automated monthly balance sheet postings.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      icon: Receipt,
      highlights: ['Automated RoU asset schedule generator', 'Contract remeasurement workflows', 'Universal Journal posting sync']
    },
    {
      category: 'CAM',
      categoryLabel: 'CAM & RETAIL BILLING',
      tag: 'CAM SETTLEMENT',
      title: 'Dynamic CAM Cost Allocation & Pooling',
      description: 'Pools operational expenses (HVAC, security, janitorial) and apportions charges to tenants based on gross leasable area and submeters.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      icon: FileSpreadsheet,
      highlights: ['Automated expense pooling', 'Dynamic GLA pro-rata calculation', 'Tenant audit reconciliation statements']
    },
    {
      category: 'CAM',
      categoryLabel: 'CAM & RETAIL BILLING',
      tag: 'TURNOVER RENT',
      title: 'Retail Mall Percentage & Turnover Rent Engine',
      description: 'Integrates digital POS feeds and certified gross sales logs to automatically calculate base-versus-percentage rent billing.',
      image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80',
      icon: Coins,
      highlights: ['Tiered turnover rent threshold logic', 'Automated sales audit variance alerts', 'Natural break-point calculation']
    },
    {
      category: 'LEASE',
      categoryLabel: 'LEASE & IFRS 16',
      tag: 'SPACE MANAGEMENT',
      title: 'Floorplan GIS & Commercial Space Allocator',
      description: 'Visual space management mapping CAD/BIM floor layouts, demising partition shifts, and vacant square footage in real time.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      icon: Building2,
      highlights: ['Interactive floorplan GIS overlay', 'Dynamic demising wall tracking', 'Occupancy & vacancy rate heatmaps']
    },
    {
      category: 'PORTFOLIO',
      categoryLabel: 'REIT PORTFOLIO ANALYTICS',
      tag: 'REIT INTELLIGENCE',
      title: 'Real-Time REIT NOI & Portfolio Intelligence',
      description: 'Provides fund managers real-time dashboards for Net Operating Income (NOI), Funds From Operations (FFO), and weighted average lease expiry (WALE).',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      icon: BarChart3,
      highlights: ['Live NOI & FFO calculations', 'Weighted average lease expiry (WALE)', 'Property yield & cap rate tracking']
    },
    {
      category: 'PORTFOLIO',
      categoryLabel: 'REIT PORTFOLIO ANALYTICS',
      tag: 'TENANT EXPERIENCE',
      title: 'Tenant Experience & Escrow Portal',
      description: 'Mobile portal for digital lease execution, maintenance request tracking, online utility payments, and security deposit management.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      icon: Workflow,
      highlights: ['Digital lease e-signature integration', 'Instant rent & utility payment gateway', 'Move-out damage deduction ledger']
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
      title: 'Lease Contract Digitization',
      subtitle: 'IFRS 16 & ASC 842 Setup',
      description: 'Ingesting property leases into SAP Flexible Real Estate (RE-FX), establishing automated RoU schedules, and locking indexation rules.',
      tag: 'SAP RE-FX & Master Leases',
      textColor: 'text-sky-400',
      glowColor: 'bg-sky-500',
      borderBase: 'border-sky-500/30',
      activeBorder: 'border-sky-400 ring-2 ring-sky-500/30 bg-sky-950/30',
      icon: Receipt,
      before: 'Fragmented paper contracts and manual spreadsheets for IFRS 16 schedules',
      after: 'Unified SAP RE-FX digital repository with automated balance sheet amortization',
      metrics: ['100% IFRS 16 compliance', 'Zero audit penalties', 'Instant discount rate recalculation']
    },
    {
      id: 'stage-2',
      badge: 'PHASE 02',
      title: 'CAM Pooling & Metering',
      subtitle: 'Dynamic Expense Recovery',
      description: 'Connecting building maintenance expenses and smart utility submeters to SAP cost centers for automated monthly tenant billing.',
      tag: 'CAM Expense Engine & IoT',
      textColor: 'text-cyan-400',
      glowColor: 'bg-cyan-500',
      borderBase: 'border-cyan-500/30',
      activeBorder: 'border-cyan-400 ring-2 ring-cyan-500/30 bg-cyan-950/30',
      icon: FileSpreadsheet,
      before: 'Annual manual CAM reconciliation resulting in bitter tenant disputes and delayed payments',
      after: 'Monthly automated pro-rata CAM billing with transparent expense documentation',
      metrics: ['100% CAM cost recovery', 'Zero tenant audit disputes', '45 days faster cash clearing']
    },
    {
      id: 'stage-3',
      badge: 'PHASE 03',
      title: 'Turnover & Retail Billing',
      subtitle: 'Percentage Rent Automation',
      description: 'Integrating tenant electronic POS takeaways to verify gross retail turnover and automatically generate tiered rental invoices.',
      tag: 'SAP RAR & Billing Hub',
      textColor: 'text-amber-400',
      glowColor: 'bg-amber-500',
      borderBase: 'border-amber-500/30',
      activeBorder: 'border-amber-400 ring-2 ring-amber-500/30 bg-amber-950/30',
      icon: Coins,
      before: 'Unverified tenant sales certificates causing massive turnover rent under-billing',
      after: 'Automated POS sales ingestion triggering instant percentage rent calculations',
      metrics: ['18% increase in captured turnover rent', 'Automated sales verification', 'Zero billing leakage']
    },
    {
      id: 'stage-4',
      badge: 'PHASE 04',
      title: 'Autonomous REIT Intelligence',
      subtitle: 'Portfolio Yield Maximization',
      description: 'Deploying predictive AI models on SAP BTP forecasting tenant churn, optimizing lease renewal rates, and tracking real-time portfolio NOI.',
      tag: 'BTP AI & REIT Analytics',
      textColor: 'text-emerald-400',
      glowColor: 'bg-emerald-500',
      borderBase: 'border-emerald-500/30',
      activeBorder: 'border-emerald-400 ring-2 ring-emerald-500/30 bg-emerald-950/30',
      icon: BarChart3,
      before: 'Delayed quarterly financial consolidation obscuring real property portfolio performance',
      after: 'Real-time NOI, FFO, and occupancy heatmaps empowering proactive asset management',
      metrics: ['12% higher portfolio NOI', 'Optimized lease expiry profiles (WALE)', 'Maximized investor returns']
    }
  ];

  // Section 10: FAQs
  const faqs = [
    {
      q: 'How does Knooviq automate IFRS 16 and ASC 842 compliance in SAP S/4HANA?',
      a: 'We implement SAP S/4HANA Flexible Real Estate Management (RE-FX) Contract Valuation. The system automatically computes present value calculations, Right-of-Use (RoU) asset amortization schedules, and interest liability postings directly to the Universal Journal (ACDOCA). When lease terms or discount rates change, remeasurement entries are generated automatically.'
    },
    {
      q: 'How are Common Area Maintenance (CAM) expenses apportioned and reconciled?',
      a: 'Property operating costs (janitorial, security, landscaping, HVAC electricity) are captured in dedicated SAP cost centers. Our CAM engine aggregates these into expense pools and allocates them to tenants based on gross leasable area (GLA), occupancy percentages, and smart utility submeter consumption, generating transparent monthly recovery bills.'
    },
    {
      q: 'Can the system handle complex turnover and percentage rent rules for retail malls?',
      a: 'Yes. SAP RE-FX supports complex retail lease contracts including base rent, natural and artificial breakpoints, tiered percentage rent rates, and seasonal minimum guarantees. Gross sales certificates submitted via the tenant portal are verified and automatically converted into percentage rent billing documents.'
    },
    {
      q: 'How does Knooviq manage security deposits and bank guarantees?',
      a: 'The system establishes dedicated escrow and balance sheet liability ledgers for each tenant. Security deposits and bank guarantees are tracked with expiry alerts, automated interest accrual (if statutory), and move-out deduction workflows for fit-out restoration before final refund clearance.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Pure Enterprise Real Estate Hero)
          ========================================================================= */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        
        {/* Full-bleed High Resolution Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80" 
            alt="Modern Architectural Glass Skyscraper Real Estate Portfolio"
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
                <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>

              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Intelligent ERP for <br />
                <span className="text-cyan-400">Commercial Real Estate & REITs</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                IFRS 16 Lease Accounting, Dynamic CAM Pooling & REIT Portfolio Optimization.
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
                Empowering property developers, commercial asset managers, and global REITs with{' '}
                <strong className="text-white font-semibold">SAP S/4HANA Flexible Real Estate (RE-FX)</strong>, automated{' '}
                <strong className="text-cyan-300 font-semibold">IFRS 16 / ASC 842 Valuation</strong>, and live portfolio yield intelligence.
              </p>

              {/* Clean Feature Highlights */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>IFRS 16 & ASC 842 Automated</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Dynamic CAM Expense Recovery</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Real-Time REIT NOI Analytics</span>
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
                  <Receipt className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">IFRS 16 / ASC 842</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">RoU Amortization</div>
                <div className="text-xs text-slate-300 mt-0.5">Automated Balance Sheet</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <FileSpreadsheet className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">CAM RECOVERY</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">Dynamic Pooling</div>
                <div className="text-xs text-slate-300 mt-0.5">Zero Audit Disputes</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Coins className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">RETAIL TURNOVER</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">POS Integration</div>
                <div className="text-xs text-slate-300 mt-0.5">Percentage Rent Audits</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <BarChart3 className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">REIT YIELD</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">NOI & FFO Metrics</div>
                <div className="text-xs text-slate-300 mt-0.5">Portfolio Benchmarking</div>
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
                Maximizing Net Operating Income across <span className="text-[#0070C0]">Global Real Estate Portfolios</span>
              </h2>

              <div className="border-l-4 border-[#0070C0] border-y border-r border-slate-300 pl-4 py-2 bg-gradient-to-r from-sky-50/80 via-sky-50/30 to-transparent rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                  &ldquo;In commercial real estate, asset valuation is governed by lease hygiene: compliant IFRS 16 accounting, leak-proof CAM expense recoveries, and automated rent escalation execution.&rdquo;
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Property asset managers frequently suffer revenue erosion from delayed CAM reconciliations, overlooked contractual rent step-ups, and spreadsheet-based IFRS 16 calculations. Knooviq transforms real estate portfolios into an orchestrated, audit-proof operational engine where property management, tenant submeters, and corporate finance operate in real time.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs text-center">
                  <div className="text-xl sm:text-2xl font-black text-[#0070C0]">100%</div>
                  <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">CAM Recovery</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs text-center">
                  <div className="text-xl sm:text-2xl font-black text-emerald-600">Zero</div>
                  <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">IFRS 16 Audit Penalties</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs text-center">
                  <div className="text-xl sm:text-2xl font-black text-[#0070C0]">+12%</div>
                  <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">Portfolio NOI</div>
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
              <span>REAL ESTATE DOMAIN BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Operational Challenges Across Commercial Real Estate
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Property portfolios experience severe Net Operating Income compression when lease contracts, maintenance pooling, and tenant billings remain disconnected from core ERP.
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
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>RADIAL PLATFORM ECOSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              KNOOVIQ Real Estate & REIT Architecture Core
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Hover over any segment in the interlocking wheel to explore how lease contracts, CAM expense pooling, and REIT portfolio analytics operate in continuous real-time synchronization.
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
                    REAL ESTATE
                  </text>
                  <text
                    x="250"
                    y="274"
                    textAnchor="middle"
                    fill="#94A3B8"
                    fontSize="9"
                    fontFamily="monospace"
                  >
                    CLEAN CORE RE-FX
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
              Enterprise Real Estate Technology Blueprint
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Decoupling smart building submetering, tenant mobile apps, and retail POS feeds on SAP BTP while preserving an untouched S/4HANA core.
            </p>
          </div>

          {/* Interactive Layer Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveArchTab('submeter')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'submeter'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              1. IoT Submeters & Smart Building
            </button>
            <button
              onClick={() => setActiveArchTab('core')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'core'
                  ? 'bg-[#0070C0] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              2. SAP S/4HANA RE-FX Clean Core
            </button>
            <button
              onClick={() => setActiveArchTab('cloud')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeArchTab === 'cloud'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              3. Cloud BTP Tenant & REIT Platform
            </button>
          </div>

          {/* Active Blueprint View */}
          <div className="rounded-2xl border-2 border-slate-300 bg-slate-950 text-white p-6 sm:p-8 shadow-xl">
            {activeArchTab === 'submeter' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Radio className="w-6 h-6 text-sky-400" />
                    <div>
                      <h3 className="text-lg font-bold text-white">Smart Building Submeters, BMS & Access Gates</h3>
                      <p className="text-xs text-slate-400 font-mono">Modbus TCP • BACnet/IP • Smart Chilled Water Flow Meters • Turnstiles</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-mono">Real-Time Ingestion</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-sky-300 uppercase font-mono mb-1">Smart Electrical Submetering</h4>
                    <p className="text-xs text-slate-300">Continuous tenant kilowatt-hour telemetry streams directly to CAM utility recovery accounts.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-sky-300 uppercase font-mono mb-1">HVAC BTU Cooling Meters</h4>
                    <p className="text-xs text-slate-300">BTU chilled water meters track exact after-hours air conditioning consumed by individual tenants.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-sky-300 uppercase font-mono mb-1">Occupancy Telemetry</h4>
                    <p className="text-xs text-slate-300">Zone occupancy sensors monitor office footfall to dynamically optimize common area cleaning runs.</p>
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
                      <h3 className="text-lg font-bold text-white">SAP S/4HANA Flexible Real Estate (RE-FX) & Universal Journal</h3>
                      <p className="text-xs text-slate-400 font-mono">IFRS 16 / ASC 842 Valuation • CAM Pooling • Rent Escalation • Security Escrow</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono">Clean Core Standard</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-cyan-300 uppercase font-mono mb-1">Contract Valuation Engine</h4>
                    <p className="text-xs text-slate-300">Calculates RoU depreciation and lease liability interest directly inside Universal Journal ACDOCA.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-cyan-300 uppercase font-mono mb-1">Automated Periodic Postings</h4>
                    <p className="text-xs text-slate-300">Generates monthly base rent, CAM service charges, and utility debit notes in touchless bill runs.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-cyan-300 uppercase font-mono mb-1">Security Deposit Ledgers</h4>
                    <p className="text-xs text-slate-300">Escrow liability accounts protect tenant collateral with automated bank guarantee validation.</p>
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
                      <h3 className="text-lg font-bold text-white">SAP BTP Tenant Engagement & REIT Analytics Suite</h3>
                      <p className="text-xs text-slate-400 font-mono">BTP Event Mesh • Tenant Mobile App • POS Ingestion Gateway • REIT Analytics</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono">Event-Driven Mesh</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-amber-300 uppercase font-mono mb-1">Retail POS Data Ingestion</h4>
                    <p className="text-xs text-slate-300">Daily sales ingestion from retail tenants for automated turnover rent computation.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-amber-300 uppercase font-mono mb-1">Tenant Self-Service App</h4>
                    <p className="text-xs text-slate-300">Tenants log facility work orders, review itemized CAM invoices, and settle balances online.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-amber-300 uppercase font-mono mb-1">REIT Yield Intelligence</h4>
                    <p className="text-xs text-slate-300">Machine learning models benchmark Net Operating Income and forecast lease renewal probabilities.</p>
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
              Knooviq Real Estate Solution Suites
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Targeted capability packages designed to maximize property yields and streamline tenant lease administration.
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
              Legacy Real Estate Spreadsheets vs Knooviq Clean Core
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Compare traditional property management spreadsheets against Knooviq&apos;s real-time SAP S/4HANA Clean Core architecture.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white font-mono text-[11px] uppercase tracking-wider">
                  <th className="p-4 sm:p-5">Real Estate Dimension</th>
                  <th className="p-4 sm:p-5 text-rose-300">Legacy / Fragmented Approach</th>
                  <th className="p-4 sm:p-5 text-cyan-300">Knooviq S/4HANA Clean Core</th>
                  <th className="p-4 sm:p-5 text-emerald-300">Measurable Value Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">IFRS 16 / ASC 842</td>
                  <td className="p-4 sm:p-5 text-slate-600">Manual Excel formulas prone to error and auditor restatements.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">Automated SAP RE-FX valuation schedule and RoU ledger.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">100% audit compliance; automated remeasurements.</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-bold text-slate-900">CAM Expense Settlement</td>
                  <td className="p-4 sm:p-5 text-slate-600">Annual retrospective audits causing tenant payment withholdings.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">Monthly automated pro-rata pooling based on verified GLA.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">Zero CAM disputes; 100% operational expense recovery.</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Retail Turnover Rent</td>
                  <td className="p-4 sm:p-5 text-slate-600">Tenant self-reported turnover figures without POS verification.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">Automated POS sales ingestion and breakpoint billing.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">18% increase in captured turnover percentage rent.</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Contract Escalations</td>
                  <td className="p-4 sm:p-5 text-slate-600">Missed anniversary dates and untracked CPI adjustments.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">Rule-based automated step-ups triggered on schedule.</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">Eliminated base rent leakage across the portfolio.</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Portfolio Performance</td>
                  <td className="p-4 sm:p-5 text-slate-600">Quarterly manual aggregation of NOI and occupancy stats.</td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium">Real-time REIT yield dashboards (NOI, FFO, WALE).</td>
                  <td className="p-4 sm:p-5 text-emerald-600 font-semibold">+12% higher portfolio Net Operating Income.</td>
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
              Four Phases to Autonomous Real Estate Operations
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Inspect how legacy property spreadsheets transform into an intelligent real-time real estate fabric across every stage of the SAP deployment.
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
              Measurable Outcomes from Real Estate Modernization
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Representative performance improvements realized by commercial landlords, mall developers, and REITs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-[#0070C0] tracking-tight">100%</div>
              <div className="text-sm font-bold text-slate-900">CAM Cost Recovery</div>
              <p className="text-xs text-slate-500">Automated pro-rata pooling based on verified leasable area.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight">Zero</div>
              <div className="text-sm font-bold text-slate-900">IFRS 16 Audit Issues</div>
              <p className="text-xs text-slate-500">Automated Right-of-Use asset and interest schedule calculations.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-[#0070C0] tracking-tight">+18%</div>
              <div className="text-sm font-bold text-slate-900">Turnover Rent Growth</div>
              <p className="text-xs text-slate-500">POS integration automating percentage rent above natural break.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight">+12%</div>
              <div className="text-sm font-bold text-slate-900">Portfolio NOI Expansion</div>
              <p className="text-xs text-slate-500">Reduced vacancy latency and disciplined contract escalation runs.</p>
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
              Commercial Real Estate Architecture Advisory
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Key considerations for commercial landlords and REIT asset managers evaluating SAP S/4HANA RE-FX.
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
            <Building2 className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR REAL ESTATE PORTFOLIO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build Next-Generation Real Estate Operations?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Synchronize your property leases, CAM expense recovery, and REIT portfolio financials with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact('Real Estate & REIT Architecture Advisory')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to Our Real Estate Experts</span>
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

export default RealEstateIndustryPage;
