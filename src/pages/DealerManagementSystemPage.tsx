import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2,
  Truck,
  Store,
  ShieldCheck,
  Zap,
  TrendingUp,
  BarChart3,
  Boxes,
  ClipboardCheck,
  RefreshCw,
  Database,
  Layers,
  Award,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Sliders,
  CheckCircle2,
  DollarSign,
  PieChart,
  Percent,
  Warehouse,
  FileSpreadsheet,
  FileCheck2,
  Users,
  Activity,
  AlertCircle,
  Network,
  Clock
} from 'lucide-react';

interface DealerManagementSystemPageProps {
  onOpenContact?: (service?: string) => void;
}

// Section 2: Operational Journey Steps for OEM-Dealer Channel Bridge
interface ChannelStep {
  id: string;
  stepNum: string;
  title: string;
  category: 'OEM Operation' | 'Dealer Frontline' | 'Bilateral Sync';
  subtitle: string;
  description: string;
  oemAction: string;
  dealerAction: string;
  sapIntegration: string;
  badge: string;
  image: string;
  metrics: { label: string; value: string; trend: string }[];
}

const CHANNEL_STEPS: ChannelStep[] = [
  {
    id: 'onboarding-credit',
    stepNum: '01',
    title: 'Franchise Onboarding & Dynamic Credit Scoring',
    category: 'OEM Operation',
    subtitle: 'Automated dealer KYC, multi-tier bank guarantee tracking, and revolving credit controls',
    description:
      'Eliminate manual dealership accreditation. Rapidly ingest dealer legal credentials, automate tax registration verifications, and establish algorithmic credit lines tied to historical payment velocity and collateral securities.',
    oemAction: 'OEM Treasury verifies collateral bonds and unlocks tiered credit lines via SAP financial integration.',
    dealerAction: 'Dealer Principal submits verified financial statements, digital tax licenses, and security deposits in one unified portal.',
    sapIntegration: 'SAP S/4HANA Credit Management & Dynamic Limit Underwriting',
    badge: 'Zero-Risk Credit Underwriting',
    image: '/images/dms_franchise_credit_scoring.png',
    metrics: [
      { label: 'Onboarding Cycle', value: '48 Hrs', trend: 'Digital Verification' },
      { label: 'Credit Risk', value: 'Minimal Risk', trend: 'Dynamic Risk Limits' },
      { label: 'Credit Visibility', value: 'Real-Time', trend: 'Unified Ledger' }
    ]
  },
  {
    id: 'indent-planning',
    stepNum: '02',
    title: 'Smart Indent Booking & Predictive Allocation',
    category: 'Dealer Frontline',
    subtitle: 'Demand-driven indent forecasting, seasonal buffer planning, and instant allocation',
    description:
      'Dealers plan stock with intelligence rather than guesswork. Embedded statistical forecasting analyzes local sell-out patterns, regional seasonal trends, and current showroom velocity to auto-generate optimal SKU indent orders.',
    oemAction: 'OEM Central Supply Chain reviews regional aggregate demand and schedules factory production runs.',
    dealerAction: 'Dealership Inventory Manager reviews predictive reorder recommendations and approves indents with one click.',
    sapIntegration: 'SAP Integrated Business Planning & Sales Order Allocation',
    badge: 'Zero-Stockout Forecasting',
    image: '/images/dms_smart_indent_allocation.jpg',
    metrics: [
      { label: 'Forecast Accuracy', value: 'High Confidence', trend: 'Statistical Demand Sensing' },
      { label: 'Stockout Prevention', value: 'Guaranteed Buffer', trend: 'Dynamic Reorder Points' },
      { label: 'Indent Cycle', value: 'Sub-Day', trend: 'AI-Assisted Basket' }
    ]
  },
  {
    id: 'depot-dispatch',
    stepNum: '03',
    title: 'Depot Fulfillment & Electronic In-Transit Dispatch',
    category: 'OEM Operation',
    subtitle: 'Multi-warehouse fulfillment, automated digital transit documentation, and GPS tracking',
    description:
      'Synchronize master fulfillment centers with regional hub depots. Once indents clear credit verification, automated pick-lists trigger warehouse packing, electronic dispatch notes, and continuous GPS transit visibility.',
    oemAction: 'Regional Depot Manager executes wave picking, prints tamper-evident transit seals, and releases freight.',
    dealerAction: 'Dealer Logistics team monitors inbound shipment milestones, carrier telematics, and dock arrival estimates.',
    sapIntegration: 'SAP Extended Warehouse & Transportation Management',
    badge: 'Full Supply Chain Visibility',
    image: '/images/journey/fresh_s2_warehouse_pallets.jpg',
    metrics: [
      { label: 'Order-to-Dock Time', value: 'Sub-Day', trend: 'Depot Optimized' },
      { label: 'Transit Discrepancies', value: 'Zero Losses', trend: 'Tamper-Evident Seals' },
      { label: 'Transit Documentation', value: 'Instant', trend: 'Automated E-Way Sync' }
    ]
  },
  {
    id: 'grn-audit',
    stepNum: '04',
    title: 'Mobile Goods Receipt (GRN) & Barcode Audit',
    category: 'Bilateral Sync',
    subtitle: 'Camera barcode scanning, digital discrepancy ticketing, and real-time ledger updates',
    description:
      'Convert physical receipt docks into streamlined verification zones. Dealership receiving bays scan master carton QR codes and serial barcodes to instantly identify damages, shortages, or overages before accepting custody.',
    oemAction: 'OEM Claims Desk receives photographic verification of transit damage and triggers automated insurance credits.',
    dealerAction: 'Dock Inspector scans serial barcodes via rugged mobile app to verify and sign digital goods receipts.',
    sapIntegration: 'SAP Materials Management (MM) Real-Time Ledger Posting',
    badge: 'Touchless Goods Receipt',
    image: '/images/dms_indent_booking_allocation.jpg',
    metrics: [
      { label: 'Dock Verification', value: '12 Mins', trend: 'Sub-Hour Turnaround' },
      { label: 'Dispute Resolution', value: 'Sub-Day', trend: 'Direct Claim Ticket' },
      { label: 'Inventory Reflection', value: 'Instant', trend: 'Real-Time ERP Sync' }
    ]
  },
  {
    id: 'pos-sellout',
    stepNum: '05',
    title: 'Showroom Point-of-Sale, Sell-Out & Customer 360°',
    category: 'Dealer Frontline',
    subtitle: 'Customer quoting, trade-in valuation, instant financing, and digital retail invoicing',
    description:
      'Empower showroom sales executives and service counter reps with a 360-degree retail sales cockpit. Build instant customer quotes, compare finance schemes, check secondary inventory, and push e-invoices with zero friction.',
    oemAction: 'OEM Commercial Leadership monitors secondary sell-out velocity in real time for demand sensing and scheme efficacy.',
    dealerAction: 'Showroom Sales Consultant configures customer quotes, provisions warranty packages, and processes digital payments.',
    sapIntegration: 'SAP Customer Checkout & Sales Distribution Core',
    badge: 'Rapid Counter Velocity',
    image: '/images/journey/fresh_s3_contactless_screen.jpg',
    metrics: [
      { label: 'Checkout Duration', value: '3 Mins', trend: 'Quote to Tax Invoice' },
      { label: 'Up-Sell Assistance', value: 'Automated Bundles', trend: 'Warranty & Accessories' },
      { label: 'Customer Satisfaction', value: 'Top Tier', trend: 'Transparent Pricing' }
    ]
  },
  {
    id: 'warranty-rebates',
    stepNum: '06',
    title: 'Automated Warranty Adjudication & Rebate Settlement',
    category: 'Bilateral Sync',
    subtitle: 'Automated defect validation, labor rate matrix calculations, and target rebate settlements',
    description:
      'Eliminate the friction of dealer claim settlements. Workshop warranty claims are validated automatically against OEM defect engineering matrices, while monthly volume sales rebates are auto-calculated and credited directly to dealer accounts.',
    oemAction: 'OEM Warranty Directorate approves labor allowances and issues credit notes via automated condition records.',
    dealerAction: 'Workshop Service Advisor logs failed component serial numbers with photos to receive instant pre-authorization.',
    sapIntegration: 'SAP Warranty & Settlement Management Automation',
    badge: 'Automated Financial Settlement',
    image: '/images/dms_warranty_rebate_settlement.png',
    metrics: [
      { label: 'Claim Approval Cycle', value: 'Sub-Day', trend: 'Automated Rules' },
      { label: 'Rebate Reconciliation', value: 'Zero Disputes', trend: 'Audited Slabs' },
      { label: 'Dealer Confidence', value: 'Benchmark Trust', trend: 'Predictable Cash Flow' }
    ]
  }
];

// Interactive Multi-Depot Inventory Simulation Data
interface DepotStock {
  depotName: string;
  location: string;
  stockUnits: number;
  capacityUsed: number;
  leadTimeHours: number;
  status: 'Surplus' | 'Balanced' | 'Reorder Alert';
}

const INITIAL_DEPOTS: DepotStock[] = [
  { depotName: 'North Master Hub', location: 'Gurugram / NCR', stockUnits: 48200, capacityUsed: 88, leadTimeHours: 12, status: 'Balanced' },
  { depotName: 'West Coastal Depot', location: 'Bhiwandi / Mumbai', stockUnits: 62400, capacityUsed: 94, leadTimeHours: 10, status: 'Surplus' },
  { depotName: 'South Central Node', location: 'Hosur / Bengaluru', stockUnits: 34100, capacityUsed: 72, leadTimeHours: 16, status: 'Balanced' },
  { depotName: 'East Distribution Hub', location: 'Dankuni / Kolkata', stockUnits: 14800, capacityUsed: 42, leadTimeHours: 24, status: 'Reorder Alert' }
];

// Tiered Rebate Slab Simulator Data
interface RebateTier {
  tierName: string;
  thresholdUnits: number;
  baseRebateBracket: string;
  incentivePackage: string;
  sapContractCode: string;
  exclusivePerks: string[];
}

const REBATE_TIERS: RebateTier[] = [
  {
    tierName: 'Silver Franchisee',
    thresholdUnits: 500,
    baseRebateBracket: 'Tier 1 Standard Accrual',
    incentivePackage: 'Quarterly Tier 1 Incentive Accrual',
    sapContractCode: 'SAP-CC-SILVER',
    exclusivePerks: ['Standard marketing co-op (50:50)', '30-day revolving credit line', 'Standard warranty turnaround (48h)']
  },
  {
    tierName: 'Gold Elite Partner',
    thresholdUnits: 1200,
    baseRebateBracket: 'Tier 2 Accelerated Reward',
    incentivePackage: 'Accelerated Target Reward Package',
    sapContractCode: 'SAP-CC-GOLD',
    exclusivePerks: ['Priority depot dispatch slot', '45-day enhanced credit buffer', 'Dedicated OEM technical field rep', 'Annual dealer conclave invite']
  },
  {
    tierName: 'Platinum Vanguard Guild',
    thresholdUnits: 2500,
    baseRebateBracket: 'Tier 3 Executive Guild',
    incentivePackage: 'Executive Guild Profit Share Slab',
    sapContractCode: 'SAP-CC-PLATINUM',
    exclusivePerks: ['Exclusive regional territory rights', 'Zero-deductible warranty pre-approval', 'OEM-funded showroom revamp subsidy', 'Quarterly executive advisory council']
  }
];

export const DealerManagementSystemPage: React.FC<DealerManagementSystemPageProps> = ({ onOpenContact }) => {
  // Set document title
  useEffect(() => {
    document.title = 'Dealer Management System (DMS) | OEM & Franchise Network | KNOOVIQ';
  }, []);

  // Section 2: Active step and timer control
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [bimodalPerspective, setBimodalPerspective] = useState<'all' | 'oem' | 'dealer'>('all');
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Section 3: Interactive Multi-Depot balancing state
  const [depots, setDepots] = useState<DepotStock[]>(INITIAL_DEPOTS);
  const [selectedDepot, setSelectedDepot] = useState<number>(0);
  const [isRebalancing, setIsRebalancing] = useState<boolean>(false);

  // Section 5: Rebate slab interactive slider state
  const [quarterlyVolume, setQuarterlyVolume] = useState<number>(1450);

  // Calculate current rebate status
  const currentTier =
    quarterlyVolume >= 2500
      ? REBATE_TIERS[2]
      : quarterlyVolume >= 1200
      ? REBATE_TIERS[1]
      : REBATE_TIERS[0];

  const targetAttainmentPct = Math.min(160, Math.round((quarterlyVolume / 1500) * 100));

  // Auto-cycle for Section 2 with 3.2s interval
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % CHANNEL_STEPS.length);
    }, 3200);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handleStepClick = (index: number) => {
    setActiveStepIndex(index);
    setIsPaused(true);

    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  const handleRebalanceDepots = () => {
    setIsRebalancing(true);
    setTimeout(() => {
      setDepots([
        { depotName: 'North Master Hub', location: 'Gurugram / NCR', stockUnits: 44200, capacityUsed: 80, leadTimeHours: 12, status: 'Balanced' },
        { depotName: 'West Coastal Depot', location: 'Bhiwandi / Mumbai', stockUnits: 52400, capacityUsed: 78, leadTimeHours: 10, status: 'Balanced' },
        { depotName: 'South Central Node', location: 'Hosur / Bengaluru', stockUnits: 34100, capacityUsed: 72, leadTimeHours: 16, status: 'Balanced' },
        { depotName: 'East Distribution Hub', location: 'Dankuni / Kolkata', stockUnits: 28800, capacityUsed: 68, leadTimeHours: 18, status: 'Balanced' }
      ]);
      setIsRebalancing(false);
    }, 900);
  };

  const activeStep = CHANNEL_STEPS[activeStepIndex];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#00A3E0] selection:text-white overflow-hidden">
      
      {/* =========================================================================
          SECTION 1 — HERO: MULTI-TIER CHANNEL COMMAND RADAR (LIGHT THEME)
          ========================================================================= */}
      <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50/60 border-b border-slate-200 overflow-hidden">
        
        {/* Dynamic Background Aurora Blobs (The Knooviq Story Style) */}
        <div className="aurora-sphere-1 top-20 left-1/4 bg-[#00A3E0]/15 pointer-events-none" />
        <div className="aurora-sphere-2 top-96 right-10 bg-[#6366F1]/12 pointer-events-none" />

        {/* Dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#00A3E015_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />
        <div className="absolute top-12 -right-24 w-96 h-96 bg-[#00A3E0]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Strategic Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-xs text-[#0077B6] font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />
                <span>Enterprise Dealer Management System</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-700">B2B Channel Orchestration</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15] font-display">
                Unified Channel Velocity From{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#0A1931] to-[#00A3E0]">
                  OEM Factory Floor
                </span>{' '}
                to Franchise Showroom.
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Bridge the traditional disconnect between enterprise manufacturers and independent franchise networks. 
                Synchronize multi-depot replenishment, automated credit limits, warranty adjudications, and secondary 
                sell-out velocity with zero-latency SAP S/4HANA backbone connectivity.
              </p>

              {/* Hero CTA Group */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenContact ? onOpenContact('Dealer Management System Consultation') : null}
                  className="px-7 py-3.5 rounded-xl bg-[#00A3E0] hover:bg-[#008bc0] text-white font-semibold text-sm shadow-md shadow-cyan-500/20 transition-all flex items-center gap-2.5 group cursor-pointer"
                >
                  <span>Request Live Dealership Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#channel-bridge"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold transition-all flex items-center gap-2 shadow-xs hover:border-slate-300"
                >
                  <span>Explore 6-Stage Journey</span>
                  <ChevronRight className="w-4 h-4 text-[#00A3E0]" />
                </a>
              </div>

              {/* Real-Time Telemetry Counters (Professional, Refined Typography) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 font-medium">Active Dealerships</p>
                  <p className="text-xl font-bold text-slate-900 mt-0.5 font-display">3,400+</p>
                  <p className="text-xs text-[#0077B6] font-medium mt-0.5">Network Synchronized</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 font-medium">Fulfillment Cycle</p>
                  <p className="text-xl font-bold text-slate-900 mt-0.5 font-display">Sub-Day</p>
                  <p className="text-xs text-emerald-600 font-medium mt-0.5">Accelerated Dispatch</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 font-medium">Secondary Sell-Out</p>
                  <p className="text-xl font-bold text-slate-900 mt-0.5 font-display">Full Sync</p>
                  <p className="text-xs text-[#0077B6] font-medium mt-0.5">Real-Time Visibility</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 font-medium">Claims Settled</p>
                  <p className="text-xl font-bold text-slate-900 mt-0.5 font-display">Zero Disputes</p>
                  <p className="text-xs text-emerald-600 font-medium mt-0.5">Audited Settlements</p>
                </div>
              </div>

            </div>

            {/* Right Column: Clean Pure Hero Visual (No content above, inside, or below, with increased height) */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[380px] sm:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 group">
                <img
                  src="/images/dms_automotive_manufacturing_hero.png"
                  alt="Automotive Manufacturing, Robotics Assembly and Dealer Supply Chain Operations"
                  className="w-full h-full object-cover object-center select-none group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2 — THE DUAL-PILLAR BIMODAL CHANNEL BRIDGE (LIGHT THEME)
          ========================================================================= */}
      <section id="channel-bridge" className="py-14 sm:py-20 bg-slate-50/60 relative border-b border-slate-200">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-[#0077B6] text-xs font-semibold shadow-xs">
              <Network className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Connected Dealer Lifecycle</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              The 6-Stage Dealer Network Lifecycle
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed font-normal">
              Experience bilateral synchronization between OEM enterprise headquarters and franchise dealership frontlines. 
              Inspect bilateral workflows, dynamic SAP integration, and live verification milestones.
            </p>

            {/* Bimodal Perspective Filter */}
            <div className="inline-flex items-center p-1 bg-white rounded-xl border border-slate-200 mt-2 shadow-sm">
              <button
                onClick={() => setBimodalPerspective('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  bimodalPerspective === 'all'
                    ? 'bg-slate-100 text-slate-900 shadow-xs border border-slate-200 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All 6 Operations
              </button>
              <button
                onClick={() => setBimodalPerspective('oem')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  bimodalPerspective === 'oem'
                    ? 'bg-slate-100 text-slate-900 shadow-xs border border-slate-200 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                OEM Command Focus
              </button>
              <button
                onClick={() => setBimodalPerspective('dealer')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  bimodalPerspective === 'dealer'
                    ? 'bg-slate-100 text-slate-900 shadow-xs border border-slate-200 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Dealer Frontline Focus
              </button>
            </div>
          </div>

          {/* Dual Pillar Runway Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (5 Cols): Interactive Operational Stage Selector */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="flex items-center justify-between px-1 pb-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Channel Lifecycle Runway
                </span>
                <span className="text-xs text-[#0077B6] font-medium">
                  {isPaused ? 'Paused for inspection' : 'Auto-cycling stages'}
                </span>
              </div>

              {CHANNEL_STEPS.map((step, idx) => {
                const isActive = idx === activeStepIndex;
                const isFilteredOut =
                  (bimodalPerspective === 'oem' && step.category === 'Dealer Frontline') ||
                  (bimodalPerspective === 'dealer' && step.category === 'OEM Operation');

                if (isFilteredOut) return null;

                return (
                  <div
                    key={step.id}
                    onClick={() => handleStepClick(idx)}
                    className={`cursor-pointer rounded-xl p-4 transition-all duration-300 border relative overflow-hidden ${
                      isActive
                        ? 'bg-white border-[#00A3E0] shadow-md ring-2 ring-[#00A3E0]/20 text-slate-900'
                        : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute top-0 left-0 right-0 h-1 bg-[#00A3E0]"
                        initial={{ scaleX: 0, transformOrigin: '0%' }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: isPaused ? 0.3 : 3.2, ease: 'linear' }}
                      />
                    )}

                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs transition-colors shrink-0 ${
                          isActive
                            ? 'bg-[#00A3E0] text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {step.stepNum}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                            {step.category}
                          </span>
                          <span className="text-xs text-slate-400 font-medium">Stage {step.stepNum}</span>
                        </div>

                        <h3 className={`text-sm font-semibold mt-1.5 truncate ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                          {step.title}
                        </h3>

                        <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed font-normal">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column (7 Cols): The Bimodal Inspection Console & Telemetry Showcase */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-lg space-y-6"
                >
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          Stage {activeStep.stepNum} of 06
                        </span>
                        <span className="text-xs font-medium text-slate-500">
                          {activeStep.category}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-1.5 tracking-tight">
                        {activeStep.title}
                      </h3>
                    </div>

                    <div className="px-3 py-1 rounded-full bg-sky-50 border border-sky-100/80 text-xs font-semibold text-[#0077B6]">
                      {activeStep.badge}
                    </div>
                  </div>

                  {/* Visual Image Showcase (The Knooviq Story Style) */}
                  <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl group bg-slate-950 select-none">
                    <img
                      src={activeStep.image}
                      alt={activeStep.title}
                      className="w-full h-full object-cover object-center select-none group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* The Knooviq Story Dark Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none z-10" />

                    {/* Top Frosted Glass Milestone Badge */}
                    <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/40 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide shadow-lg">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00A3E0] animate-pulse" />
                        <span>Stage {activeStep.stepNum} of 06 • {activeStep.category}</span>
                      </div>
                    </div>

                    {/* Bottom Left Executive Navy Ribbon */}
                    <div className="absolute bottom-4 left-0 z-20 pointer-events-none">
                      <div className="bg-[#0A2540]/90 backdrop-blur-md text-white px-5 py-2 rounded-r-xl font-display font-semibold tracking-wide text-xs uppercase shadow-xl border-r border-t border-b border-[#00A3E0]/40 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{activeStep.badge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Split Bilateral Dual-Pillars: OEM Action vs Dealer Action */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* OEM Pillar */}
                    <div className="rounded-xl p-4 bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 uppercase tracking-wider">
                        <Building2 className="w-4 h-4 text-[#00A3E0]" />
                        <span>OEM Enterprise Command</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {activeStep.oemAction}
                      </p>
                    </div>

                    {/* Dealer Pillar */}
                    <div className="rounded-xl p-4 bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 uppercase tracking-wider">
                        <Store className="w-4 h-4 text-[#00A3E0]" />
                        <span>Franchise Dealer Frontline</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {activeStep.dealerAction}
                      </p>
                    </div>

                  </div>

                  {/* SAP Integration & Metric Verification Grid */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-600 flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5 text-[#00A3E0]" />
                        Enterprise Integration:
                      </span>
                      <span className="font-medium text-slate-800 bg-white px-2.5 py-0.5 rounded-md border border-slate-200 text-xs">
                        {activeStep.sapIntegration}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-2 border-t border-slate-200">
                      {activeStep.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="text-center p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                          <p className="text-xs text-slate-500 font-normal">{metric.label}</p>
                          <p className="text-sm font-bold text-slate-900 mt-1">{metric.value}</p>
                          <p className="text-xs text-[#0077B6] font-medium mt-0.5">{metric.trend}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3 — MULTI-DEPOT INVENTORY & REPLENISHMENT SIMULATOR (LIGHT THEME)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs">
              <Warehouse className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Intelligent Supply Chain Balancing</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              Multi-Depot Inventory &amp; Virtual Stock Pooling
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed font-normal">
              Eliminate regional stockouts and dead capital. Raapyd DMS dynamically pools inventory across master OEM depots 
              and neighboring dealer nodes to fulfill critical customer demand with minimal transit lead time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Depot Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {depots.map((depot, idx) => {
                const isSelected = selectedDepot === idx;
                return (
                  <div
                    key={depot.depotName}
                    onClick={() => setSelectedDepot(idx)}
                    className={`cursor-pointer rounded-xl p-4 border transition-all duration-200 ${
                      isSelected
                        ? 'bg-white border-[#00A3E0] shadow-md ring-2 ring-[#00A3E0]/20'
                        : 'bg-slate-50 hover:bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-base font-semibold text-slate-900">{depot.depotName}</h4>
                        <p className="text-xs text-slate-500">{depot.location}</p>
                      </div>
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {depot.status}
                      </span>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Available Stock:</span>
                        <span className="text-slate-900 font-semibold">{depot.stockUnits.toLocaleString()} Units</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Capacity Operating Band:</span>
                        <span className="text-slate-900 font-semibold">
                          {depot.capacityUsed >= 90 ? 'High Capacity' : depot.capacityUsed >= 70 ? 'Optimal Level' : 'Buffer Reserves'}
                        </span>
                      </div>
                      
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#00A3E0]"
                          style={{ width: `${depot.capacityUsed}%` }}
                        />
                      </div>

                      <div className="flex justify-between text-xs pt-1 text-slate-500 font-normal">
                        <span>Dispatch SLA:</span>
                        <span className="text-slate-800 font-semibold">{depot.leadTimeHours} Hours</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Simulation Action Box */}
            <div className="lg:col-span-5 rounded-2xl bg-slate-50 p-6 border border-slate-200 space-y-5 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Cross-Depot Balancing Simulation
                </span>
                <span className="text-xs bg-white text-slate-600 px-2.5 py-0.5 rounded-md border border-slate-200 font-medium">
                  Dynamic Allocation
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-600">
                <p>
                  Selected Depot:{' '}
                  <strong className="text-slate-900 font-semibold">{depots[selectedDepot].depotName}</strong> ({depots[selectedDepot].location})
                </p>
                <p className="text-slate-600 leading-relaxed font-normal">
                  When East Distribution Hub approaches reorder levels (&lt;15,000 units), the system scans surrounding 
                  hubs for surplus safety stock and triggers inter-depot stock transfer orders (SAP STO) automatically.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-xs">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-500">Suggested Action:</span>
                  <span className="text-[#0077B6] font-semibold">Transfer 14,000 Units (West &rarr; East)</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal font-normal">
                  Eliminates regional stockout vulnerabilities with zero emergency transit expedited charges.
                </p>
              </div>

              <button
                onClick={handleRebalanceDepots}
                disabled={isRebalancing}
                className="w-full py-3 rounded-xl bg-[#00A3E0] hover:bg-[#008bc0] text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <RefreshCw className={`w-4 h-4 ${isRebalancing ? 'animate-spin' : ''}`} />
                <span>{isRebalancing ? 'Optimizing Depot Stocks...' : 'Trigger Automated Stock Balancing'}</span>
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 4 — AUTOMATED WARRANTY CLAIMS & REPAIR WORKSHOP ENGINE (LIGHT)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/60 relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>Workshop Warranty Automation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
                Touchless Warranty Claims &amp; Workshop Service Ledger
              </h2>

              <p className="text-slate-600 text-base leading-relaxed font-normal">
                Warranty disputes erode dealer trust and tie up working capital. Raapyd DMS introduces an 
                automated adjudication engine that compares failed part serial numbers, telematics fault codes, 
                and labor hour rate matrices against OEM engineering policy rules for instant claim authorization.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                    <span>Barcode Serial Verification</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Ensures part was genuinely sold to this chassis/asset and remains within active warranty window.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                    <span>Labor Flat-Rate Code Matrix</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Auto-populates standardized OEM standard repair time (FRT) codes without subjective manual billing.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                    <span>Defect Evidence Ingestion</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Workshop techs attach photo/video diagnostic proofs directly from their mobile bay tablets.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                    <span>Automated Financial Settlement</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Approved claim settlements auto-post as credit notes directly to dealer SAP financial accounts.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl bg-white p-6 border border-slate-200 shadow-lg space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Automated Warranty Workflow Simulation
                </span>
                <span className="text-xs text-[#0077B6] font-semibold bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                  Touchless Verification
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-white text-slate-700 border border-slate-200 flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">Chassis VIN &amp; Asset Serial Scan</p>
                      <p className="text-xs text-slate-500">Validates warranty eligibility &amp; service history</p>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                    Verified
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-white text-slate-700 border border-slate-200 flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">Defect Code Diagnostic Match</p>
                      <p className="text-xs text-slate-500">Matches OEM technical service bulletin (TSB)</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-700 font-semibold bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                    Match Found
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-white text-slate-700 border border-slate-200 flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">Labor Rate &amp; Part Cost Computation</p>
                      <p className="text-xs text-slate-500">Standard repair time at authorized dealer labor slab</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#0077B6] font-semibold bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                    OEM Covered
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#00A3E0] text-white flex items-center justify-center text-xs font-bold">
                      4
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">ERP S/4HANA Credit Note Generation</p>
                      <p className="text-xs text-slate-500">Directly posted to franchise dealer ledger</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#0077B6] font-semibold bg-white border border-slate-200 px-2.5 py-1 rounded-md shadow-xs">
                    Settled
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5 — TIERED DEALER INCENTIVE & REBATE SLAB SIMULATOR (LIGHT)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs">
              <Award className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Transparent Dealer Economics</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              Tiered Volume Rebate &amp; Incentive Slab Simulator
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed font-normal">
              Motivate dealer principals with crystal-clear target achievement transparency. Use the interactive 
              slider below to see how volume tiers trigger automated quarterly payouts and exclusive commercial perks.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl bg-slate-50 p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
            
            {/* Slider Control */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <label className="text-sm font-semibold text-slate-900">
                  Select Projected Quarterly Sell-Out Volume:
                </label>
                <div className="text-lg font-bold text-slate-900">
                  {quarterlyVolume.toLocaleString()} Units
                </div>
              </div>

              <input
                type="range"
                min="300"
                max="3500"
                step="50"
                value={quarterlyVolume}
                onChange={(e) => setQuarterlyVolume(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00A3E0]"
              />

              <div className="flex justify-between text-xs text-slate-500 font-normal">
                <span>Silver Min (300 Units)</span>
                <span>Gold Threshold (1,200 Units)</span>
                <span>Platinum Tier (2,500+ Units)</span>
              </div>
            </div>

            {/* Current Active Slab Status */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <span className="text-xs text-slate-500">Current Qualification Tier</span>
                <p className="text-xl font-bold text-slate-900 mt-1">{currentTier.tierName}</p>
                <span className="inline-block mt-2 text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                  {currentTier.baseRebateBracket}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <span className="text-xs text-slate-500">Commercial Incentive Package</span>
                <p className="text-base font-semibold text-slate-900 mt-1">{currentTier.incentivePackage}</p>
                <span className="inline-block mt-2 text-xs text-slate-500 font-medium">
                  Contract Agreement: {currentTier.sapContractCode}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <span className="text-xs text-slate-500">Quota Target Milestone</span>
                <p className="text-xl font-bold text-[#0077B6] mt-1">
                  {targetAttainmentPct >= 100 ? 'Target Achieved & Exceeded' : 'Active Quota Pacing'}
                </p>
                <span className="inline-block mt-2 text-xs text-slate-500 font-medium">
                  Automated Credit Note at Period Close
                </span>
              </div>

            </div>

            {/* Exclusive Tier Privileges */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                Active Tier Commercial Privileges:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                {currentTier.exclusivePerks.map((perk, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 6 — NATIVE SAP S/4HANA ENTERPRISE INTEGRATION ARCHITECTURE (LIGHT)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/60 relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs">
              <Database className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Clean-Core Architecture</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              Native SAP S/4HANA &amp; BTP Enterprise Connectivity
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed font-normal">
              No brittle batch scripts or duplicate data silos. Raapyd DMS operates on SAP Business Technology 
              Platform (BTP) using event-driven architectures and standard OData APIs for continuous two-way sync.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0077B6] flex items-center justify-center">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">SAP S/4HANA SD &amp; Financial Governance</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Bi-directional order processing. Dealer indents generate sales orders with ATP (Available-to-Promise) 
                checks, credit block releases, and tax invoices via standard RFC and OData services.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 pt-3 border-t border-slate-100 font-normal">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Direct BAPI &amp; OData Sales Order Execution</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Real-Time Credit Exposure &amp; Limit Governance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Automated Tax Invoice &amp; E-Way Bill Dispatch</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0077B6] flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">SAP MM &amp; Extended Warehouse Logistics</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Seamless multi-depot inventory visibility. Automate stock transport orders (STO), movement type 101/641 
                postings, and serialized barcode tracking from central warehouses to dealer bays.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 pt-3 border-t border-slate-100 font-normal">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Automated Goods Receipt &amp; In-Transit Visibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Digital Delivery Discrepancy &amp; Claim Intake</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Serialized Traceability Across Network Nodes</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0077B6] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Warranty Ledger &amp; Settlement Governance</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Complete financial reconciliation. Workshop warranty adjudications, defect code verification, and 
                retroactive volume rebate slabs post cleanly to financial accounting with zero manual adjustments.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 pt-3 border-t border-slate-100 font-normal">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Automated Warranty Claim Ledger Reconciliation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Dynamic Target &amp; Rebate Agreement Tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Touchless Financial Settlement &amp; Credit Posting</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 7 — MEASURABLE ENTERPRISE IMPACT & FINAL CONVERSION CTA (LIGHT)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200 relative overflow-hidden">
        {/* Dynamic Background Aurora Blobs (The Knooviq Story Style) */}
        <div className="aurora-sphere-1 -top-20 left-1/3 bg-[#00A3E0]/10 pointer-events-none" />
        <div className="aurora-sphere-2 bottom-0 right-1/4 bg-[#6366F1]/10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1.5 shadow-xs hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-50 text-[#00A3E0] mx-auto mb-1">
                <Zap className="w-4 h-4" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Accelerated
              </p>
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Network Turnover</p>
              <p className="text-xs text-slate-500 font-normal">Faster order replenishment cycles</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1.5 shadow-xs hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 mx-auto mb-1">
                <Clock className="w-4 h-4" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Sub-Day
              </p>
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Claims Settlement</p>
              <p className="text-xs text-slate-500 font-normal">From weeks down to hours</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1.5 shadow-xs hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-50 text-[#00A3E0] mx-auto mb-1">
                <BarChart3 className="w-4 h-4" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Full Sync
              </p>
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Sell-Out Visibility</p>
              <p className="text-xs text-slate-500 font-normal">Real-time dealer POS analytics</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1.5 shadow-xs hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 mx-auto mb-1">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Zero Disputes
              </p>
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Rebate Settlement</p>
              <p className="text-xs text-slate-500 font-normal">Dispute-free automated audit</p>
            </div>
          </div>

          <div className="rounded-3xl p-8 sm:p-12 bg-slate-50 border border-slate-200 shadow-md relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs inline-block">
                Architect Your Dealer Transformation
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight font-display tracking-tight">
                Ready to Turn Your Franchise Network into a High-Velocity Growth Engine?
              </h2>

              <p className="text-slate-600 text-base leading-relaxed font-normal">
                Connect with our senior enterprise supply chain architects. We will evaluate your current dealer 
                order workflows, workshop warranty bottlenecks, and SAP S/4HANA landscape to construct a customized 
                DMS deployment roadmap.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenContact ? onOpenContact('Dealer Management System Architecture Session') : null}
                  className="px-8 py-4 rounded-xl bg-[#0077B6] hover:bg-[#006296] text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Schedule Executive Solution Blueprint</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  to="/products/field-service-management"
                  className="px-6 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Explore Field Service Management &rarr;</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default DealerManagementSystemPage;
