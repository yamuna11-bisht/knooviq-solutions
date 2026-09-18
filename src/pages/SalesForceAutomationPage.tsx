import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  MapPin,
  Compass,
  ShoppingCart,
  Truck,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Zap,
  Activity,
  Layers,
  Check,
  ChevronRight,
  ChevronLeft,
  Radio,
  FileText,
  UserCheck,
  Award,
  BarChart3,
  Sliders,
  DollarSign,
  Package,
  QrCode,
  Smartphone,
  ShieldCheck,
  Pause,
  Store,
  RefreshCw,
  Database,
  Building2,
  Receipt,
  Percent,
  AlertTriangle
} from 'lucide-react';

interface SalesForceAutomationPageProps {
  onOpenContact: (topic?: string) => void;
}

export const SalesForceAutomationPage: React.FC<SalesForceAutomationPageProps> = ({ onOpenContact }) => {
  // Set document title
  useEffect(() => {
    document.title = 'Sales Force Automation (SFA) | Retail Route-to-Market & Van Sales | KNOOVIQ';
  }, []);


  // =========================================================================
  // STATE: Section 2 - The Retail Route-to-Market Engine (Bespoke 6-Stage Runway)
  // =========================================================================
  const [activeRouteIndex, setActiveRouteIndex] = useState<number>(0);
  const [isRoutePaused, setIsRoutePaused] = useState<boolean>(false);
  const routeIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const routePauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const routeStages = [
    {
      step: '01',
      title: 'Smart Beat & Route Planning',
      shortLabel: 'Beat Planning',
      sector: 'Territory Planning',
      sapContext: 'SAP S/4HANA Sales & Distribution',
      role: 'Territory Sales Manager',
      icon: Compass,
      image: '/images/journey/candidate_s1_woman_laptop.jpg',
      imageAlt: 'Sales representative scheduling optimized daily retail route on enterprise laptop',
      summary: 'Intelligently sequence daily store visits based on distributor stock positions, historical purchase frequency, credit limits, and geocoded transit corridors.',
      auditTrace: 'Daily beat plan optimized across 28 retail outlets with turn-by-turn routing.',
      checkpoint: 'Automated visit sequence eliminates unproductive transit time and territory overlap',
      kpi: '28 Stores / Day'
    },
    {
      step: '02',
      title: 'Geo-Fenced Store Check-In',
      shortLabel: 'Store Check-In',
      sector: 'Field Attendance',
      sapContext: 'Enterprise Mobile Field Gateway',
      role: 'Field Sales Representative',
      icon: MapPin,
      image: '/images/journey/fresh_s3_phone_qr.jpg',
      imageAlt: 'Sales representative geo-fenced QR check-in on mobile phone',
      summary: 'Validate authentic outlet visits with tamper-proof GPS geo-fencing and instant digital store check-in before order screens unlock.',
      auditTrace: 'Hardware-verified GPS check-in authenticated within authorized store perimeter.',
      checkpoint: 'Tamper-proof attendance verification guarantees genuine retail coverage',
      kpi: 'Instant Check-In'
    },
    {
      step: '03',
      title: 'Digital Catalog & Merchandising',
      shortLabel: 'Merchandising',
      sector: 'Visual Merchandising',
      sapContext: 'Product Master & Pricing Governance',
      role: 'Merchandising Specialist',
      icon: Store,
      image: '/images/retail_consumer_goods.png',
      imageAlt: 'Supermarket aisle retail shelf with consumer goods merchandising',
      summary: 'Equip sales reps with rich digital catalogs, real-time distributor inventory balances, planogram compliance photo audits, and expired stock tracking.',
      auditTrace: 'On-shelf availability verified with automated out-of-stock alerts.',
      checkpoint: 'AI camera vision verifies shelf share against planogram standards',
      kpi: 'Planogram Verified'
    },
    {
      step: '04',
      title: 'Primary & Secondary Order Booking',
      shortLabel: 'Order Booking',
      sector: 'Order Management',
      sapContext: 'SAP Sales Order Processing',
      role: 'Sales Representative',
      icon: ShoppingCart,
      image: '/images/journey/stage2_worker_tablet.jpg',
      imageAlt: 'Field sales rep booking store replenishment order on rugged tablet',
      summary: 'Capture store replenishment orders with predictive reorder recommendations, automatic volume slab discounts, and real-time customer credit checks.',
      auditTrace: 'Replenishment order confirmed with real-time credit check and stock allocation.',
      checkpoint: 'Native pricing rules ensure 100% discount accuracy at checkout',
      kpi: 'Accelerated Booking'
    },
    {
      step: '05',
      title: 'Van Sales & Spot Delivery',
      shortLabel: 'Van Sales',
      sector: 'Direct Store Delivery',
      sapContext: 'Consignment & Mobile Inventory',
      role: 'Route Sales Representative',
      icon: Truck,
      image: '/images/sfa_van_sales_sprinter.png',
      imageAlt: 'Mercedes Sprinter delivery van and connected field route driver with terminal',
      summary: 'Execute immediate on-spot order fulfillment directly from truck consignment inventory with offline invoicing, thermal printing, and lot traceability.',
      auditTrace: 'Consignment inventory deducted and digital delivery confirmation issued.',
      checkpoint: 'Direct-to-store delivery eliminates stock transit discrepancies',
      kpi: 'Full Stock Control'
    },
    {
      step: '06',
      title: 'Collections & SAP S/4HANA Closing',
      shortLabel: 'Collections & Closing',
      sector: 'Financial Settlement',
      sapContext: 'SAP Accounts Receivable (FI-AR)',
      role: 'Finance Operations Manager',
      icon: Receipt,
      image: '/images/sfa_sap_closing_cloud.png',
      imageAlt: 'SAP S/4HANA Cloud digital ledger core and financial accounts receivable closing',
      summary: 'Collect digital payments via QR codes, capture electronic signatures on screen, reconcile daily collections, and post ledger entries directly into SAP FI-AR.',
      auditTrace: 'Digital payment collected and accounts receivable ledger reconciled in real time.',
      checkpoint: 'Instant payment reconciliation shortens working capital cash cycles',
      kpi: 'Same-Day Reconciliation'
    }
  ];

  const currentRouteStage = routeStages[activeRouteIndex] || routeStages[0];

  const startRouteAutoCycle = useCallback(() => {
    if (routeIntervalRef.current) clearInterval(routeIntervalRef.current);
    routeIntervalRef.current = setInterval(() => {
      setActiveRouteIndex((prev) => (prev + 1) % routeStages.length);
    }, 3200);
  }, [routeStages.length]);

  const stopRouteAutoCycle = useCallback(() => {
    if (routeIntervalRef.current) {
      clearInterval(routeIntervalRef.current);
      routeIntervalRef.current = null;
    }
  }, []);

  const handleRouteStageClick = (index: number) => {
    setActiveRouteIndex(index);
    setIsRoutePaused(true);
    stopRouteAutoCycle();

    if (routePauseTimerRef.current) {
      clearTimeout(routePauseTimerRef.current);
    }

    routePauseTimerRef.current = setTimeout(() => {
      setIsRoutePaused(false);
      startRouteAutoCycle();
    }, 5000);
  };

  const handleRouteNav = (direction: 'next' | 'prev') => {
    setIsRoutePaused(true);
    stopRouteAutoCycle();

    setActiveRouteIndex((prev) => {
      if (direction === 'next') {
        return (prev + 1) % routeStages.length;
      }
      return (prev - 1 + routeStages.length) % routeStages.length;
    });

    if (routePauseTimerRef.current) {
      clearTimeout(routePauseTimerRef.current);
    }
    routePauseTimerRef.current = setTimeout(() => {
      setIsRoutePaused(false);
      startRouteAutoCycle();
    }, 5000);
  };

  useEffect(() => {
    startRouteAutoCycle();
    return () => {
      stopRouteAutoCycle();
      if (routePauseTimerRef.current) clearTimeout(routePauseTimerRef.current);
    };
  }, [startRouteAutoCycle, stopRouteAutoCycle]);

  // =========================================================================
  // STATE: Section 3 - Trade Promotions & Commercial Scheme Sandbox
  // =========================================================================
  const [selectedSchemeType, setSelectedSchemeType] = useState<'slab' | 'bundle' | 'cash' | 'loyalty'>('slab');
  const [orderQuantity, setOrderQuantity] = useState<number>(45);

  const schemeProfiles = {
    slab: {
      name: 'Tiered Volume Slab Rebate',
      description: 'Order 30+ cases for Tier 1 wholesale rebate; order 60+ cases for Tier 2 volume rebate with automated bonus stock.',
      freeCases: orderQuantity >= 60 ? 4 : orderQuantity >= 30 ? 1 : 0,
      qualificationStatus: orderQuantity >= 60 ? 'Tier 2 Wholesale Slab Active' : orderQuantity >= 30 ? 'Tier 1 Assortment Active' : 'Standard Base Rate',
      benefitBracket: orderQuantity >= 60 ? 'Tier 2 Volume Slab' : orderQuantity >= 30 ? 'Tier 1 Assortment' : 'Standard Rate',
      sapConditionCode: 'KONP-SLA01',
      highlight: 'Best for High-Velocity Grocery'
    },
    bundle: {
      name: 'Cross-Category Assortment Scheme',
      description: 'Combine Core SKU A + New Launch SKU B to unlock cross-category joint promotion allocation in SAP SD.',
      freeCases: orderQuantity >= 40 ? 2 : 0,
      qualificationStatus: orderQuantity >= 40 ? 'Joint Promotion Active' : 'Minimum Assortment Pending',
      benefitBracket: orderQuantity >= 40 ? 'Joint Assortment Unlocked' : 'Base Bracket',
      sapConditionCode: 'KONP-BUN02',
      highlight: 'Accelerate New Launches'
    },
    cash: {
      name: 'Early Settlement Incentive Scheme',
      description: 'Instant settlement concession status when store invoices are cleared via digital QR upon delivery.',
      freeCases: 0,
      qualificationStatus: 'Instant Clearing Active',
      benefitBracket: 'Immediate Liquidity Concession',
      sapConditionCode: 'KONP-CAS03',
      highlight: 'Zero-Credit Liquidity Protection'
    },
    loyalty: {
      name: 'Quarterly Preferred Retailer Slab',
      description: 'Cumulative target volume bonus accrued through enterprise condition contracts and settled at quarterly closing.',
      freeCases: 3,
      qualificationStatus: 'Preferred Partner Tier',
      benefitBracket: 'Quarterly Executive Bonus Tier',
      sapConditionCode: 'KONP-LOY04',
      highlight: 'Retailer Retention'
    }
  };

  const currentScheme = schemeProfiles[selectedSchemeType];

  // =========================================================================
  // STATE: Section 4 - Mobile Sales Workforce Suite (The Knooviq Story Style)
  // =========================================================================
  const mobileSuiteFeatures = [
    {
      title: 'Store 360° Profile & History',
      desc: 'Instant access to past order cadences, average basket sizes, outstanding credit aging invoices, and owner contact details before entering the shop.',
      tag: 'Outlet Intelligence',
      icon: Store,
      image: '/images/retail_industry.jpg',
      highlight: 'Full Order History Lineage'
    },
    {
      title: 'AI Suggested Reordering',
      desc: 'Proprietary predictive algorithms compute recommended reorder quantities by comparing store sell-out velocity with seasonal holiday surges.',
      tag: 'Predictive Ordering',
      icon: Package,
      image: '/images/journey/stage2_worker_tablet.jpg',
      highlight: 'High-Velocity Basket Sizing'
    },
    {
      title: 'Dynamic UPI & Cash Collection',
      desc: 'Generate dynamic on-screen payment QR codes for instant digital clearing, or record cash collections with instant SMS e-receipts sent to the retailer.',
      tag: 'Instant Settlement',
      icon: QrCode,
      image: '/images/journey/fresh_s3_contactless_screen.jpg',
      highlight: 'Same-Day Bank Reconciliation'
    },
    {
      title: 'Resilient Offline Database Sync',
      desc: 'Basement hypermarkets and rural retail corridors often have zero cellular coverage. The app operates flawlessly offline and background-syncs once connected.',
      tag: 'Offline Resilience',
      icon: RefreshCw,
      image: '/images/sfa_offline_resilient_sync.png',
      highlight: 'Zero Field Interruption'
    }
  ];

  // =========================================================================
  // STATE: Section 6 - Operational Transformation Dimensions (No raw percents)
  // =========================================================================
  const [activeImpactTab, setActiveImpactTab] = useState<number>(0);

  const impactDimensions = [
    {
      id: 'call-time',
      title: 'Productive Call Time',
      tag: 'FIELD VELOCITY',
      icon: Clock,
      image: '/images/sfa_digital_billing_vs_manual.png',
      headline: 'Eliminating Manual Catalog Lookup & Phone Bookings',
      summary: 'Replace cumbersome printed catalogs and telephone confirmation calls with high-speed digital product books, intelligent reorder predictions, and 1-tap cart checkouts.',
      metricsHighlight: 'Accelerated Store Turnaround',
      flowSteps: [
        { step: '01', title: 'Intelligent Order Pad', desc: 'Pre-populated replenishment baskets based on historical sales velocity.' },
        { step: '02', title: 'Barcode Camera Capture', desc: 'Instant SKU recognition directly from store shelf facings.' },
        { step: '03', title: 'Instant Order Commitment', desc: 'Direct background dispatch to SAP SD with real-time stock allocation.' }
      ]
    },
    {
      id: 'compliance',
      title: 'Scheme Compliance',
      tag: 'TRADE GOVERNANCE',
      icon: ShieldCheck,
      image: '/images/journey/candidate_s1_woman_laptop.jpg',
      headline: 'Zero Rogue Discount Claims by Retailers or Reps',
      summary: 'Ensure deterministic price discipline anchored to SAP S/4HANA condition tables (KONP), preventing unauthorized discounts and off-invoice margin leakage.',
      metricsHighlight: 'Zero Claim Audit Discrepancy',
      flowSteps: [
        { step: '01', title: 'Central Condition Rules', desc: 'Centrally governed discount slabs and seasonal promotional brackets.' },
        { step: '02', title: 'Automated Slab Enforcement', desc: 'Free bonus goods and tiered volume concessions auto-applied at checkout.' },
        { step: '03', title: 'Discrepancy-Free Invoicing', desc: 'Zero manual claim rework or credit adjustments between reps and distributors.' }
      ]
    },
    {
      id: 'dso',
      title: 'Working Capital DSO',
      tag: 'CASH RECOVERY',
      icon: TrendingUp,
      image: '/images/journey/fresh_s3_contactless_screen.jpg',
      headline: 'Accelerated Cash Collection & Digital Invoice Settlement',
      summary: 'Shorten days sales outstanding by collecting digital payments at the point of delivery, capturing electronic receiver signatures, and generating instant payment clearing entries in SAP FI-AR.',
      metricsHighlight: 'Same-Day Cash Reconciliation',
      flowSteps: [
        { step: '01', title: 'On-Spot Invoicing', desc: 'Direct thermal print or encrypted digital delivery receipts generated on arrival.' },
        { step: '02', title: 'Dynamic UPI QR Clearing', desc: 'Store managers settle instantly via UPI, credit card, or direct corporate debit.' },
        { step: '03', title: 'Automated Ledger Post', desc: 'Payment confirmation reconciles open accounts receivable balances automatically.' }
      ]
    },
    {
      id: 'geo-audit',
      title: 'Geo-Audit Traceability',
      tag: 'FIELD COMPLIANCE',
      icon: MapPin,
      image: '/images/journey/fresh_s3_phone_qr.jpg',
      headline: 'Eliminating Ghost Outlet Visits & Missed Beats',
      summary: 'Guarantee authentic market coverage with tamper-proof GPS geo-fencing (20m tolerance) and mandatory outlet QR verification before order screens unlock.',
      metricsHighlight: 'Verified Field Attendance',
      flowSteps: [
        { step: '01', title: 'Tamper-Proof Geofencing', desc: 'Hardware-verified GPS lock verifies rep arrival within store perimeter.' },
        { step: '02', title: 'Store QR / Barcode Scan', desc: 'Physical entrance scan unlocks order booking and merchandising modules.' },
        { step: '03', title: 'Verified Territory Beats', desc: 'Supervisors monitor true beat progression with live timeline audit logs.' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#00A3E0] selection:text-white">
      
      {/* =====================================================================
          SECTION 1: HERO — ROUTE-TO-MARKET TELEMATICS RADAR (LIGHT THEME)
          ===================================================================== */}
      <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 bg-gradient-to-b from-slate-50/90 via-white to-slate-50/50 border-b border-slate-200/80 overflow-hidden">
        
        {/* Dynamic Background Aurora Blobs (The Knooviq Story Style) */}
        <div className="aurora-sphere-1 top-20 left-1/4 bg-[#00A3E0]/15 pointer-events-none" />
        <div className="aurora-sphere-2 top-96 right-10 bg-[#6366F1]/12 pointer-events-none" />

        {/* Subtle dot pattern background & soft ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#00A3E012_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-70" />
        <div className="absolute top-12 -right-24 w-96 h-96 bg-[#00A3E0]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-20 w-80 h-80 bg-[#00A3E0]/4 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-[#0077B6] border border-sky-100/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />
                <span>Enterprise Sales Force Automation</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-700">Route-to-Market &amp; Van Sales</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15] font-display">
                Intelligent Route-to-Market, Connected From{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#0A1931] to-[#00A3E0]">
                  Beat to Billing.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                Empower your field sales representatives, van drivers, and trade channel leaders with 
                geo-fenced beat execution, automated trade promotions, and native SAP S/4HANA order-to-cash synchronization.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenContact('Sales Force Automation Consultation')}
                  className="px-7 py-3.5 rounded-xl bg-[#00A3E0] hover:bg-[#008bc0] text-white font-semibold text-sm shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Request Enterprise SFA Demo</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href="#route-engine"
                  className="px-6 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold transition-all text-center flex items-center justify-center gap-1.5 shadow-xs hover:border-slate-300"
                >
                  <span>Explore Route Engine</span>
                  <ChevronRight className="h-4 w-4 text-[#00A3E0]" />
                </a>
              </div>

              {/* Real-time Field Telemetry Status Cards (Professional, Refined Typography) */}
              <div className="grid grid-cols-3 gap-3.5 pt-4 border-t border-slate-200/80">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-[#00A3E0]/40 transition-all duration-300 group flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-sky-50 text-[#00A3E0] flex items-center justify-center transition-transform group-hover:scale-110">
                        <Compass className="w-4 h-4" />
                      </div>
                      <span className="text-xs text-slate-500 font-medium">Route Engine</span>
                    </div>
                    <strong className="text-sm font-bold text-slate-900 block leading-snug">Automated Beats</strong>
                  </div>
                  <span className="text-xs text-[#0077B6] font-medium flex items-center gap-1.5 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] animate-pulse" />
                    Turn-by-turn routing
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-[#00A3E0]/40 transition-all duration-300 group flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center transition-transform group-hover:scale-110">
                        <Zap className="w-4 h-4" />
                      </div>
                      <span className="text-xs text-slate-500 font-medium">Order Pipeline</span>
                    </div>
                    <strong className="text-sm font-bold text-slate-900 block leading-snug">Instant Order Sync</strong>
                  </div>
                  <span className="text-xs text-slate-600 font-medium flex items-center gap-1.5 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Direct SAP SD link
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-[#00A3E0]/40 transition-all duration-300 group flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center transition-transform group-hover:scale-110">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span className="text-xs text-slate-500 font-medium">Scheme Engine</span>
                    </div>
                    <strong className="text-sm font-bold text-slate-900 block leading-snug">Zero Claim Leakage</strong>
                  </div>
                  <span className="text-xs text-emerald-700 font-medium flex items-center gap-1 mt-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Centrally governed
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: Clean Pure Hero Visual (No content above, inside, or below, with increased height) */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[380px] sm:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 group">
                <img
                  src="/images/fsm_smart_dispatch_map.jpg"
                  alt="Sales Force Automation Route Telematics Map"
                  className="w-full h-full object-cover object-center select-none group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: THE RETAIL ROUTE-TO-MARKET ENGINE (LIGHT THEME)
          ===================================================================== */}
      <section id="route-engine" className="py-14 sm:py-16 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-xs text-[#0077B6] font-semibold shadow-xs">
                <Store className="h-3.5 w-3.5 text-[#00A3E0]" />
                <span>Field Sales Execution Lifecycle</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
                The Connected Field Sales Execution Engine
              </h2>

              <p className="text-base text-slate-600 font-normal leading-relaxed">
                From morning route sequencing to on-site shelf audits, instant secondary order booking, and same-day collection settlement in SAP S/4HANA.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-end">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-xs text-slate-700 shadow-xs font-medium">
                {isRoutePaused ? (
                  <>
                    <Pause className="h-3.5 w-3.5 text-[#00A3E0] animate-pulse" />
                    <span>Paused on Stage {currentRouteStage.step} • Resumes in 5s</span>
                  </>
                ) : (
                  <>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A3E0] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A3E0]"></span>
                    </span>
                    <span>Auto-Route Tour (3.2s)</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* 1. 6-STAGE ROUTE SELECTOR BUTTONS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {routeStages.map((stage, idx) => {
              const isActive = activeRouteIndex === idx;
              const isPast = idx < activeRouteIndex;
              const StageIcon = stage.icon;
              return (
                <button
                  key={stage.step}
                  onClick={() => handleRouteStageClick(idx)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between relative group ${
                    isActive
                      ? 'bg-white text-slate-900 border-[#00A3E0] shadow-md ring-2 ring-[#00A3E0]/20'
                      : isPast
                      ? 'bg-slate-50/80 border-slate-200/70 text-slate-700 hover:bg-white hover:border-slate-300 shadow-2xs'
                      : 'bg-white/80 border-slate-200/70 text-slate-500 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-[#00A3E0] text-white shadow-2xs'
                        : isPast
                        ? 'bg-slate-200/80 text-slate-700'
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {stage.step}
                    </span>
                    <StageIcon className={`h-4 w-4 transition-transform group-hover:scale-110 ${
                      isActive
                        ? 'text-[#00A3E0]'
                        : isPast
                        ? 'text-slate-600'
                        : 'text-slate-400 group-hover:text-slate-600'
                    }`} />
                  </div>

                  <div className="font-semibold text-xs truncate text-slate-900">
                    {stage.shortLabel}
                  </div>

                  <div className={`text-[11px] truncate mt-1 ${
                    isActive
                      ? 'text-[#0077B6] font-semibold'
                      : isPast
                      ? 'text-slate-500'
                      : 'text-slate-400'
                  }`}>
                    {isPast ? 'Completed' : isActive ? 'Active Stage' : 'Stage ' + stage.step}
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="activeRouteBar"
                      className="absolute -bottom-1 left-3 right-3 h-1 bg-[#00A3E0] rounded-full shadow-sm"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* 2. MAIN SHOWCASE: SPLIT STUDIO */}
          <div className="rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/40 overflow-hidden p-6 sm:p-8 space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-slate-100 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#00A3E0] animate-pulse" />
                <span className="font-bold text-slate-900 uppercase tracking-wider text-xs">
                  STAGE {currentRouteStage.step} OF 06: {currentRouteStage.sector}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-[#0077B6] font-semibold">{currentRouteStage.title}</span>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="hidden sm:inline text-slate-500">SAP Context: <strong className="text-slate-900">{currentRouteStage.sapContext}</strong></span>
                <span className="text-slate-300 hidden sm:inline">|</span>
                <span className="text-emerald-700 font-bold">{currentRouteStage.kpi}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              
              <div 
                onClick={() => handleRouteNav('next')}
                className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[430px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl group cursor-pointer bg-slate-950 select-none"
                title="Click image to advance to next stage (pauses 5s)"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentRouteStage.image}
                    src={currentRouteStage.image}
                    alt={currentRouteStage.imageAlt}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-700"
                  />
                </AnimatePresence>

                {/* The Knooviq Story Soft Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none z-10" />

                {/* Top Frosted Glass Badge */}
                <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/40 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide shadow-lg">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00A3E0] animate-pulse" />
                    <span>STAGE {currentRouteStage.step} OF 06 • {currentRouteStage.sector.toUpperCase()}</span>
                  </div>
                </div>

                {/* Bottom Left Executive Ribbon */}
                <div className="absolute bottom-4 left-0 z-20 pointer-events-none">
                  <div className="bg-[#0A2540]/90 backdrop-blur-md text-white px-5 py-2 rounded-r-xl font-display font-bold tracking-wider text-xs uppercase shadow-xl border-r border-t border-b border-[#00A3E0]/40 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{currentRouteStage.kpi}</span>
                  </div>
                </div>

                {/* Navigation Chevrons with Frosted Glass */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRouteNav('prev');
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-slate-950/50 hover:bg-[#00A3E0] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all z-20 cursor-pointer active:scale-95 shadow-lg"
                  title="Previous Stage"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRouteNav('next');
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-slate-950/50 hover:bg-[#00A3E0] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all z-20 cursor-pointer active:scale-95 shadow-lg"
                  title="Next Stage"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-[#0077B6] text-xs font-semibold">
                      Milestone {currentRouteStage.step} of 06
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {currentRouteStage.sector}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight font-display">
                    {currentRouteStage.title}
                  </h3>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-500">ERP Context:</span>
                      <strong className="text-slate-800 font-semibold">{currentRouteStage.sapContext}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Operational Role:</span>
                      <strong className="text-slate-700 font-semibold">{currentRouteStage.role}</strong>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Execution Workflow
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {currentRouteStage.summary}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-1">
                  <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">
                    Automated Verification Checkpoint
                  </span>
                  <div className="flex items-start gap-2.5 text-xs text-emerald-900">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-semibold leading-snug">{currentRouteStage.checkpoint}</span>
                  </div>
                </div>

                {/* Professional Enterprise Audit Trace (Light Theme) */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs space-y-2">
                  <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-200/80">
                    <span className="text-[#0077B6] font-semibold flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#00A3E0] animate-pulse" />
                      Live Audit Verification
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">SAP S/4HANA Synchronized</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal">
                    {currentRouteStage.auditTrace}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-1 text-xs">
                  <button
                    onClick={() => handleRouteNav('prev')}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium transition-all flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    {routeStages.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => handleRouteStageClick(dotIdx)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          activeRouteIndex === dotIdx
                            ? 'w-6 bg-[#00A3E0]'
                            : 'w-2 bg-slate-300 hover:bg-slate-400'
                        }`}
                        title={`Go to Stage ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => handleRouteNav('next')}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium transition-all flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                  >
                    <span>Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 3: TRADE PROMOTIONS & SCHEME ENGINE (LIGHT THEME)
          ===================================================================== */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-xs text-[#0077B6] font-semibold shadow-xs">
              <Percent className="h-3.5 w-3.5 text-[#00A3E0]" />
              <span>Dynamic Trade Promotions &amp; Schemes</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
              Automate Complex Trade Schemes Without Discrepancy
            </h2>

            <p className="text-base text-slate-600 font-normal leading-relaxed">
              Field sales reps shouldn&apos;t memorize hundred-page discount matrix binders. The scheme logic engine auto-determines tiered volume slabs, free-goods allowances, and customer credit clearance instantaneously during order checkout.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-b from-slate-50/90 via-white to-slate-50/70 border border-slate-200/90 shadow-sm p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Select Promotion Scenario
                </span>

                <div className="grid grid-cols-2 gap-2.5">
                  {(['slab', 'bundle', 'cash', 'loyalty'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedSchemeType(type)}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedSchemeType === type
                          ? 'bg-white text-slate-900 border-[#00A3E0] ring-2 ring-[#00A3E0]/15 shadow-sm'
                          : 'bg-white/70 text-slate-700 border-slate-200/80 hover:bg-white hover:border-slate-300'
                      }`}
                    >
                      <span className="text-[11px] uppercase block text-slate-400 font-medium">
                        {schemeProfiles[type].highlight}
                      </span>
                      <strong className="text-sm capitalize font-semibold block mt-0.5 text-slate-900">
                        {type} Scheme
                      </strong>
                    </button>
                  ))}
                </div>

                {/* Interactive Order Volume & Batch Console */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                        Order Volume Batch
                      </span>
                      <span className="text-xs text-[#0077B6] font-medium">
                        {orderQuantity >= 60 ? 'Tier 2 Wholesale Slab Active' : orderQuantity >= 30 ? 'Tier 1 Assortment Active' : 'Standard Retail Replenishment'}
                      </span>
                    </div>

                    {/* Tactile Precision Stepper */}
                    <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/80">
                      <button
                        onClick={() => setOrderQuantity((prev) => Math.max(10, prev - 5))}
                        className="w-8 h-8 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/80 text-slate-700 hover:text-[#00A3E0] font-bold text-sm flex items-center justify-center transition-all shadow-2xs cursor-pointer active:scale-95"
                        title="Decrease by 5 cases"
                      >
                        -
                      </button>

                      <div className="px-3 py-0.5 text-center min-w-[70px]">
                        <span className="text-lg font-bold text-slate-900 block leading-tight font-display">
                          {orderQuantity}
                        </span>
                        <span className="text-[10px] text-slate-500 uppercase font-medium block">
                          Cases
                        </span>
                      </div>

                      <button
                        onClick={() => setOrderQuantity((prev) => Math.min(200, prev + 5))}
                        className="w-8 h-8 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/80 text-slate-700 hover:text-[#00A3E0] font-bold text-sm flex items-center justify-center transition-all shadow-2xs cursor-pointer active:scale-95"
                        title="Increase by 5 cases"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Volume Batch Quick-Select Preset Tiles */}
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { cases: 15, label: 'Retail', sub: 'Min Order' },
                      { cases: 45, label: 'Standard', sub: 'Beat Avg' },
                      { cases: 80, label: 'Wholesale', sub: 'Tier 1' },
                      { cases: 140, label: 'Bulk Depot', sub: 'Tier 2' }
                    ].map((preset) => {
                      const isSelected = orderQuantity === preset.cases;
                      return (
                        <button
                          key={preset.cases}
                          onClick={() => setOrderQuantity(preset.cases)}
                          className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#00A3E0] text-white border-[#00A3E0] shadow-xs ring-2 ring-cyan-500/20'
                              : 'bg-slate-50/80 hover:bg-white text-slate-700 border-slate-200/80'
                          }`}
                        >
                          <span className="text-xs font-bold block leading-tight">
                            {preset.cases} cs
                          </span>
                          <span className={`text-[10px] block uppercase font-medium mt-0.5 ${isSelected ? 'text-cyan-100' : 'text-slate-500'}`}>
                            {preset.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Animated Visual Tier Bar */}
                  <div className="space-y-1.5 pt-1">
                    <div className="h-2 rounded-full bg-slate-100 overflow-hidden border border-slate-200/80">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 via-[#00A3E0] to-[#0077B6]"
                        animate={{ width: `${Math.min(100, Math.max(5, (orderQuantity / 160) * 100))}%` }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                      <span>10cs (Retail)</span>
                      <span>30cs (Tier 1 Slab)</span>
                      <span>60cs+ (Tier 2 Bonus)</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {currentScheme.description}
                </p>
              </div>

              <div className="lg:col-span-6 rounded-3xl bg-white p-6 sm:p-7 border border-slate-200/90 shadow-md shadow-slate-200/30 space-y-4 text-slate-900 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-[#00A3E0]" />

                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                  <div>
                    <span className="text-sm text-slate-900 font-bold block">
                      {currentScheme.name}
                    </span>
                    <span className="text-xs text-slate-500">
                      Condition Code: {currentScheme.sapConditionCode}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-sky-50 text-[#0077B6] text-xs font-semibold border border-sky-100">
                    Commercial Scheme Active
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-slate-600">
                    <span>Order Volume Allocation:</span>
                    <span className="font-semibold text-slate-900">{orderQuantity} Standard Cases</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Qualification Status:</span>
                    <span className="text-[#0077B6] font-semibold">{currentScheme.qualificationStatus}</span>
                  </div>
                  {currentScheme.freeCases > 0 ? (
                    <div className="flex justify-between text-emerald-700 font-medium">
                      <span>Promotional Bonus Stock:</span>
                      <span>+{currentScheme.freeCases} Free Bonus Cases (Trade Allowance)</span>
                    </div>
                  ) : (
                    <div className="flex justify-between text-slate-500 font-medium">
                      <span>Promotional Bonus Stock:</span>
                      <span>Standard Allocation (Threshold at 30+ Cases)</span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-600">
                    <span>Distributor Fulfillment Depot:</span>
                    <span className="font-semibold text-slate-800">Regional Fulfillment Hub (In Stock)</span>
                  </div>
                  <div className="pt-2.5 border-t border-slate-100 flex justify-between items-center text-sm">
                    <span className="font-bold text-slate-900">Commercial Order Status:</span>
                    <span className="text-sm font-bold text-[#0077B6]">Approved &amp; Scheduled</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="text-slate-700 flex items-center gap-1.5">
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span>Credit Limit Check: Approved (Clean Commercial Ledger)</span>
                  </span>
                  <span className="text-slate-500 font-medium">SAP SD Synchronized</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 4: CONNECTED FIELD REPRESENTATIVE TOOLKIT (LIGHT THEME)
          ===================================================================== */}
      <section className="py-14 sm:py-20 bg-slate-50/60 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-xs text-[#0077B6] shadow-xs font-semibold">
              <Smartphone className="h-3.5 w-3.5 text-[#00A3E0]" />
              <span>Mobile Field Sales Workforce Suite</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
              Everything Your Rep Needs, Right on the Retail Floor
            </h2>

            <p className="text-base text-slate-600 font-normal leading-relaxed">
              Equip reps with an offline-capable mobile powerhouse designed for rugged commercial environments, high-volume order entry, and instant financial reconciliations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {mobileSuiteFeatures.map((feat, idx) => {
              const FeatIcon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 group h-96 flex flex-col justify-end p-6 cursor-pointer bg-slate-950 select-none"
                >
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-slate-950/20 pointer-events-none" />

                  {/* Top Frosted Glass Badges */}
                  <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-950/40 backdrop-blur-md border border-white/20 text-xs font-semibold text-white tracking-wide shadow-sm">
                      {feat.tag}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-[#00A3E0] shadow-sm">
                      <FeatIcon className="h-4.5 w-4.5" />
                    </div>
                  </div>

                  <div className="relative z-10 space-y-2">
                    <h3 className="font-display text-lg font-bold text-white leading-snug">
                      {feat.title}
                    </h3>

                    <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-3">
                      {feat.desc}
                    </p>

                    <div className="pt-3 border-t border-white/15 text-xs text-cyan-300 font-medium flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{feat.highlight}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 5: ENTERPRISE ARCHITECTURE — NATIVE SAP S/4HANA SD (LIGHT)
          ===================================================================== */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-xs text-[#0077B6] font-semibold shadow-xs">
              <Database className="h-3.5 w-3.5 text-[#00A3E0]" />
              <span>Native SAP S/4HANA Sales &amp; Distribution Architecture</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
              Engineered Native to the SAP Enterprise Core
            </h2>

            <p className="text-base text-slate-600 font-normal leading-relaxed">
              No fragile third-party middleware connectors. Orders captured on the retail floor convert into SAP Sales Orders, Outbound Deliveries, and Billing Documents natively through SAP BTP APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            
            <div className="p-7 rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-[#00A3E0]/40 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-4 group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E0]/30 to-transparent group-hover:via-[#00A3E0] transition-all" />
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tier 1</span>
                  <span className="text-xs bg-white text-[#0077B6] px-2.5 py-0.5 rounded-full border border-slate-200 shadow-2xs font-semibold">
                    Front-End
                  </span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 font-display">
                  Fiori Mobile SFA Client
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Responsive mobile client running on Android and iOS with offline-first local encryption, Bluetooth printer integration, and camera barcode scanning.
                </p>
              </div>

              <ul className="text-xs space-y-2 text-slate-600 pt-3 border-t border-slate-200/80">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Offline Data Synchronization</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Hardware GPS Telematics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Biometric Representative Authentication</span>
                </li>
              </ul>
            </div>

            <div className="p-7 rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-[#00A3E0]/40 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-4 group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E0]/30 to-transparent group-hover:via-[#00A3E0] transition-all" />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tier 2</span>
                  <span className="text-xs bg-white text-[#0077B6] px-2.5 py-0.5 rounded-full border border-slate-200 shadow-2xs font-semibold">
                    Middleware
                  </span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 font-display">
                  SAP BTP Integration Suite
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Real-time event mesh queue handling high-concurrency order spikes during peak morning distribution hours, with automated retry queues and schema validation.
                </p>
              </div>

              <ul className="text-xs space-y-2 text-slate-600 pt-3 border-t border-slate-200/80">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>OData Streaming Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Sub-Second Payload Serialization</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Zero Data Loss Queue Guarantee</span>
                </li>
              </ul>
            </div>

            <div className="p-7 rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-[#00A3E0]/40 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-4 group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E0]/30 to-transparent group-hover:via-[#00A3E0] transition-all" />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tier 3</span>
                  <span className="text-xs bg-white text-[#0077B6] px-2.5 py-0.5 rounded-full border border-slate-200 shadow-2xs font-semibold">
                    Core ERP
                  </span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 font-display">
                  SAP S/4HANA SD &amp; Finance
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Immediate creation of standard SAP Sales Orders, instantaneous credit limit checking against customer master, and automatic journal clearance into the universal ledger.
                </p>
              </div>

              <ul className="text-xs space-y-2 text-slate-600 pt-3 border-t border-slate-200/80">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Centrally Audited Pricing Tables</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Real-Time Inventory ATP Checks</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Universal Financial Ledger Posting</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 6: OPERATIONAL BREAKTHROUGH & FIELD VELOCITY (NO RAW PERCENTS)
          ===================================================================== */}
      <section className="py-14 sm:py-20 bg-slate-50/60 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-xs text-[#0077B6] font-semibold shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#00A3E0]" />
              <span>Field Transformation Architecture</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display tracking-tight">
              Operational Breakthrough Across Retail Distribution
            </h2>
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              Explore how KNOOVIQ SFA transforms traditional distribution friction into structured, deterministic field velocity.
            </p>
          </div>

          {/* Interactive 4-Pillar Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {impactDimensions.map((item, idx) => {
              const isSelected = activeImpactTab === idx;
              const ItemIcon = item.icon;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveImpactTab(idx)}
                  className={`p-5 rounded-3xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#00A3E0] shadow-md ring-2 ring-[#00A3E0]/15 text-slate-900'
                      : 'bg-white/80 hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeImpactGlow"
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A3E0] to-cyan-400"
                    />
                  )}

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all ${
                        isSelected ? 'bg-[#00A3E0] text-white shadow-2xs' : 'bg-slate-100 text-slate-700'
                      }`}>
                        <ItemIcon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                        {item.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900 leading-tight font-display">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 font-normal leading-relaxed mt-1.5 line-clamp-2">
                        {item.headline}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3.5 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[#0077B6] font-semibold text-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] animate-pulse" />
                      {item.metricsHighlight}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#00A3E0] translate-x-1' : 'text-slate-400'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Transformation Deep Dive Console */}
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-md shadow-slate-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImpactTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left: Summary & Core Value */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-xs text-[#0077B6] font-semibold">
                    <span>Active Capability Drilldown</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight font-display">
                    {impactDimensions[activeImpactTab].headline}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {impactDimensions[activeImpactTab].summary}
                  </p>

                  <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/80 text-xs space-y-1 text-slate-700 shadow-2xs">
                    <span className="text-[11px] text-slate-500 uppercase font-semibold block">Enterprise Target:</span>
                    <strong className="text-slate-900 block font-semibold text-xs">
                      {impactDimensions[activeImpactTab].metricsHighlight} with Native SAP SD Lineage
                    </strong>
                  </div>

                  {/* Operational Image Visual */}
                  <div className="relative h-40 sm:h-44 rounded-2xl overflow-hidden border border-slate-200/80 shadow-md group bg-slate-950 select-none">
                    <img
                      src={impactDimensions[activeImpactTab].image}
                      alt={impactDimensions[activeImpactTab].title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded-full bg-slate-950/40 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide shadow-sm">
                        {impactDimensions[activeImpactTab].tag}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white text-xs">
                      <span className="font-semibold flex items-center gap-1.5 text-cyan-300">
                        <Check className="h-3.5 w-3.5 text-cyan-400" />
                        {impactDimensions[activeImpactTab].metricsHighlight}
                      </span>
                      <span className="text-xs text-slate-300 font-medium">SAP S/4HANA</span>
                    </div>
                  </div>
                </div>

                {/* Right: Step-by-Step Operational Flow */}
                <div className="lg:col-span-7 space-y-3">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Execution Workflow Architecture
                  </span>

                  <div className="space-y-3">
                    {impactDimensions[activeImpactTab].flowSteps.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-4 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-[#00A3E0]/40 transition-all flex items-start gap-4 shadow-2xs hover:shadow-xs group"
                      >
                        <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-[#00A3E0] group-hover:border-[#00A3E0] flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs transition-colors">
                          {step.step}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-slate-900">
                            {step.title}
                          </h4>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 7: FINAL CTA (CLEAN PROFESSIONAL LIGHT / WHITE BANNER)
          ===================================================================== */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50/80 border-t border-slate-200/80 relative overflow-hidden">
        {/* Ambient Aurora Glow */}
        <div className="aurora-sphere-1 -top-20 left-1/3 bg-[#00A3E0]/10 pointer-events-none" />
        <div className="aurora-sphere-2 bottom-0 right-1/4 bg-[#6366F1]/10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#00A3E00d_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-70" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-sky-50 text-[#0077B6] border border-sky-100 text-xs font-semibold tracking-wide inline-block shadow-2xs">
            Ready to Transform Your Route-to-Market?
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-slate-900">
            Equip Every Field Sales Representative with Intelligent Automation
          </h2>

          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Schedule an architectural demonstration with KNOOVIQ enterprise sales engineers to see how our SFA platform connects your field reps, trade promotions, and SAP S/4HANA core.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => onOpenContact('Sales Force Automation Consultation')}
              className="px-8 py-4 rounded-xl bg-[#00A3E0] hover:bg-[#008bc0] text-white font-semibold text-sm shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Schedule an Enterprise Demo</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#route-engine"
              className="px-6 py-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold transition-all shadow-xs hover:border-slate-300"
            >
              Explore Route Engine
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SalesForceAutomationPage;
