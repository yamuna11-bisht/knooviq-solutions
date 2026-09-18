import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2,
  FileSpreadsheet,
  KeyRound,
  ShieldCheck,
  Zap,
  TrendingUp,
  BarChart3,
  Boxes,
  Database,
  Layers,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Check,
  RefreshCw,
  Eye,
  SlidersHorizontal,
  Leaf,
  Scale,
  CalendarCheck,
  Calculator,
  Compass,
  FileCheck2,
  Activity,
  Users2,
  Home
} from 'lucide-react';

interface RealEstateManagementPageProps {
  onOpenContact?: (service?: string) => void;
}

// Section 2: Real Estate Lifecycle Stages
interface RealEstateStage {
  id: string;
  stepNum: string;
  title: string;
  subsystem: string;
  subtitle: string;
  description: string;
  protocolStandard: string;
  erpTrigger: string;
  badge: string;
  image: string;
  metrics: { label: string; value: string; note: string }[];
}

const REAL_ESTATE_STAGES: RealEstateStage[] = [
  {
    id: 'spatial-hierarchy-onboarding',
    stepNum: '01',
    title: 'Multi-Tier Spatial Hierarchy & Architectural Master Registry',
    subsystem: 'Architectural CAD & BIM Registry',
    subtitle: 'Standardized land parcels, building shells, floor levels, rental units, and common spaces',
    description:
      'Structure complex commercial campuses into standardized spatial hierarchies. Seamlessly ingest architectural BIM models and CAD boundaries into native ERP architectural objects, establishing single-source area measurements compliant with global standards.',
    protocolStandard: 'BOMA 2017 & RICS Area Measurement Standard',
    erpTrigger: 'SAP RE-FX Architectural Object & Usage Object Master Generation',
    badge: 'BOMA & RICS Certified',
    image: '/images/real_estate_smart_twin.jpg',
    metrics: [
      { label: 'Spatial Model', value: 'BIM / CAD Integrated', note: 'Multi-layer spatial mapping' },
      { label: 'Setup Velocity', value: 'Near Instantaneous', note: 'Automated floorplate zoning' },
      { label: 'Area Integrity', value: 'Zero Measurement Drift', note: 'Audited rentable square footage' }
    ]
  },
  {
    id: 'lease-contract-governance',
    stepNum: '02',
    title: 'Dynamic Multi-Tenant Lease Contract Administration',
    subsystem: 'Contract Governance & Compliance',
    subtitle: 'Complex indexing clauses, multi-tier security deposits, and legal renewal options',
    description:
      'Digitize enterprise commercial leases with granular condition types. Govern CPI indexed rent adjustments, turnover rent thresholds, bank guarantee covenants, and tenant right-of-first-refusal stipulations with automated legal alerts.',
    protocolStandard: 'IFRS 16 & US GAAP ASC 842 Lease Accounting Protocol',
    erpTrigger: 'Automated Lease Posting & Right-of-Use Asset Recognition',
    badge: 'IFRS 16 Compliant',
    image: '/images/real_estate_lease_ops.jpg',
    metrics: [
      { label: 'Compliance', value: 'IFRS 16 / ASC 842', note: 'Automated ROU schedules' },
      { label: 'Renewal Horizon', value: 'Six-Month Horizon', note: 'Proactive expiry alerts' },
      { label: 'Contract Auditing', value: 'Continuous Traceability', note: 'Immutable revision ledger' }
    ]
  },
  {
    id: 'cam-utility-recovery',
    stepNum: '03',
    title: 'Intelligent Common Area Maintenance & Utility Recovery',
    subsystem: 'Cost Allocation & Apportionment',
    subtitle: 'Automated pro-rata apportionment, sub-metered utility feeds, and expense reconciliation',
    description:
      'Eliminate end-of-year reconciliation disputes. Apportion HVAC, security, housekeeping, and common power across active tenants based on precise usable floor area, operating hours, and dedicated smart sub-meter telemetry readings.',
    protocolStandard: 'Smart IoT Modbus / BACnet Sub-Meter Telemetry Stream',
    erpTrigger: 'SAP Settlement Unit Service Charge Settlement Run',
    badge: 'Zero Recovery Leakage',
    image: '/images/real_estate_cam_recovery.png',
    metrics: [
      { label: 'Recovery Precision', value: 'Exact Pro-Rata', note: 'Formulaic tenant distribution' },
      { label: 'Dispute Frequency', value: 'Virtually Eliminated', note: 'Transparent itemized audits' },
      { label: 'Billing Lag', value: 'Same-Day Closeout', note: 'Automated meter-to-invoice' }
    ]
  },
  {
    id: 'rent-escalation-invoicing',
    stepNum: '04',
    title: 'Automated Rent Escalation & Country-Compliant Invoicing',
    subsystem: 'Billing Engine & Fiscal Accounting',
    subtitle: 'Scheduled CPI compounding, stepped baseline bumps, and compliant e-invoice dispatch',
    description:
      'Trigger touchless monthly periodic postings. The system applies contractual indexation rates, reconciles advance rent balances, generates country-specific digital tax invoices with QR codes, and books entries directly to general ledger accounts.',
    protocolStandard: 'Peppol & National E-Invoicing Real-Time Clearance API',
    erpTrigger: 'Periodic Contract Execution & Customer Account Clearing',
    badge: 'Touchless Fiscal Close',
    image: '/images/real_estate_rent_invoicing.jpg',
    metrics: [
      { label: 'Posting Mode', value: 'Fully Autonomous', note: 'Nightly batch settlement' },
      { label: 'Tax Compliance', value: 'Government Pre-Cleared', note: 'Instant QR code generation' },
      { label: 'Ledger Sync', value: 'Real-Time Reconciliation', note: 'Direct FI-AR & CO linkage' }
    ]
  },
  {
    id: 'tenant-experience-portal',
    stepNum: '05',
    title: 'Tenant Experience, Access Control & Maintenance Portal',
    subsystem: 'Workplace & Facility Operations',
    subtitle: 'Self-service service requests, biometric turnstile credentials, and SLA dispatch',
    description:
      'Empower enterprise occupants with an intuitive self-service portal. Tenants submit HVAC comfort requests, book shared conference auditoriums, generate digital visitor passes, and track vendor facility tickets with defined service-level agreements.',
    protocolStandard: 'FIDO2 Biometric & Mobile BLE Credential Integration',
    erpTrigger: 'Automated Plant Maintenance & Service Notification Routing',
    badge: 'Rapid SLA Resolution',
    image: '/images/real_estate_tenant_portal.png',
    metrics: [
      { label: 'Ticket Routing', value: 'Immediate Triage', note: 'Direct technician mobile dispatch' },
      { label: 'Tenant Satisfaction', value: 'Top Tier Rating', note: 'Real-time feedback loop' },
      { label: 'Visitor Ingestion', value: 'Contactless Pass', note: 'Encrypted digital visitor QR' }
    ]
  },
  {
    id: 'portfolio-valuation-capex',
    stepNum: '06',
    title: 'Portfolio Valuation, Capex Forecasting & ESG Closeout',
    subsystem: 'Executive Portfolio Intelligence',
    subtitle: 'Discounted cash flow yield modeling, tenant credit risk, and green certifications',
    description:
      'Provide institutional real estate directors with predictive capital intelligence. Model net operating income across multi-asset portfolios, stress-test vacancy scenarios, track carbon metrics, and plan long-term building capex overhauls.',
    protocolStandard: 'GRESB & LEED Green Building Sustainability Governance',
    erpTrigger: 'SAP S/4HANA Asset Accounting Capex Capitalization',
    badge: 'Institutional Grade',
    image: '/images/real_estate_portfolio_capex.png',
    metrics: [
      { label: 'NOI Visibility', value: 'Continuous Real-Time', note: 'Instant yield benchmarking' },
      { label: 'Capex Planning', value: 'Multi-Year Horizon', note: 'Predictive lifecycle reserves' },
      { label: 'ESG Rating', value: 'Platinum Aligned', note: 'Audited energy intensity index' }
    ]
  }
];

// Section 3 Presets for CAM Simulator
interface CampusPreset {
  id: string;
  name: string;
  type: string;
  totalArea: string;
  tenantsCount: string;
  expenseBasis: string;
  primaryUtility: string;
}

const CAMPUS_PRESETS: Record<string, CampusPreset> = {
  techPark: {
    id: 'techPark',
    name: 'Cyber-Heights Innovation Park',
    type: 'Class-A Commercial Tech Campus',
    totalArea: '1,200,000 Sq Ft',
    tenantsCount: '34 Enterprise Tenants',
    expenseBasis: 'Dynamic Pro-Rata & IoT Sub-Metered',
    primaryUtility: 'Smart Central Chilled Water & Redundant Power'
  },
  retailMall: {
    id: 'retailMall',
    name: 'Grand Galleria Retail & Lifestyle Promenade',
    type: 'Multi-Level Commercial Retail Center',
    totalArea: '850,000 Sq Ft',
    tenantsCount: '112 Retail & Dining Tenants',
    expenseBasis: 'Footfall Weighted & Operating Hours Index',
    primaryUtility: 'Common Atrium HVAC & Decorative Lighting'
  },
  logisticsHub: {
    id: 'logisticsHub',
    name: 'Nexus Gateway Logistics & Distribution Hub',
    type: 'Industrial Logistics & Cold-Chain Facility',
    totalArea: '2,400,000 Sq Ft',
    tenantsCount: '18 Logistics & Freight Tenants',
    expenseBasis: 'Dedicated Dock Yard & Heavy Floorload Area',
    primaryUtility: 'High-Mast Yard Lighting & High-Voltage Feeds'
  }
};

// Section 4 Lease Expiry Matrix Records
interface LeaseRecord {
  id: string;
  tenantName: string;
  assetClass: 'commercial' | 'retail' | 'industrial';
  category: string;
  leasableArea: string;
  expiryWindow: string;
  urgency: 'high' | 'medium' | 'low';
  riskProfile: string;
  actionStrategy: string;
  renewalStatus: string;
}

const LEASE_RECORDS: LeaseRecord[] = [
  {
    id: 'lease-01',
    tenantName: 'Global Cloud Systems Inc.',
    assetClass: 'commercial',
    category: 'Anchor Tech Occupant',
    leasableArea: '145,000 Sq Ft',
    expiryWindow: '90-Day Immediate Window',
    urgency: 'high',
    riskProfile: 'Triple-Net Long Term Covenant',
    actionStrategy: 'Automated early extension proposal triggered with indexation cap incentives.',
    renewalStatus: 'In Active Negotiation'
  },
  {
    id: 'lease-02',
    tenantName: 'Apex Hypermarket Flagship',
    assetClass: 'retail',
    category: 'Anchor Retail Operator',
    leasableArea: '78,000 Sq Ft',
    expiryWindow: '180-Day Advisory Horizon',
    urgency: 'medium',
    riskProfile: 'Turnover Rent & Baseline Split',
    actionStrategy: 'Automated sales turnover audit reconciled; concession terms pre-modeled in ERP.',
    renewalStatus: 'Term Sheet Staged'
  },
  {
    id: 'lease-03',
    tenantName: 'Trans-Oceanic Freight Logistics',
    assetClass: 'industrial',
    category: 'Master Logistics Tenant',
    leasableArea: '320,000 Sq Ft',
    expiryWindow: '360-Day Strategic Pipeline',
    urgency: 'low',
    riskProfile: 'Full Facility High-Bay Storage',
    actionStrategy: 'Yard space expansion option modeled with cross-docking infrastructure upgrade.',
    renewalStatus: 'Renewal Proposed'
  },
  {
    id: 'lease-04',
    tenantName: 'Synergy Financial Consulting',
    assetClass: 'commercial',
    category: 'Class-A Suite Tenant',
    leasableArea: '42,000 Sq Ft',
    expiryWindow: '90-Day Immediate Window',
    urgency: 'high',
    riskProfile: 'Standard Escalation Clause',
    actionStrategy: 'Floorplate rightsizing review complete; sub-lease permission clause under evaluation.',
    renewalStatus: 'Executive Review'
  },
  {
    id: 'lease-05',
    tenantName: 'Nordic Specialty Cafe Roasters',
    assetClass: 'retail',
    category: 'Promenade Amenity',
    leasableArea: '4,500 Sq Ft',
    expiryWindow: '180-Day Advisory Horizon',
    urgency: 'medium',
    riskProfile: 'High-Footfall Strategic Amenity',
    actionStrategy: 'Five-year renewal option exercised with outdoor seating license integration.',
    renewalStatus: 'Contract Finalized'
  },
  {
    id: 'lease-06',
    tenantName: 'Polar-Cold Bio Logistics',
    assetClass: 'industrial',
    category: 'Specialized Cold Storage',
    leasableArea: '110,000 Sq Ft',
    expiryWindow: '360-Day Strategic Pipeline',
    urgency: 'low',
    riskProfile: 'High-Power Chilling Redundancy',
    actionStrategy: 'Green power supply rider bundled with long-term lease amortization schedule.',
    renewalStatus: 'Audit Completed'
  }
];

export const RealEstateManagementPage: React.FC<RealEstateManagementPageProps> = ({ onOpenContact }) => {
  // Section 2 Auto-cycling state
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Section 3 CAM Simulator state
  const [selectedCampus, setSelectedCampus] = useState<string>('techPark');
  const [expenseTier, setExpenseTier] = useState<number>(2); // 1 = Baseline, 2 = Standard, 3 = Enhanced
  const [allocationMethod, setAllocationMethod] = useState<'boma' | 'metered' | 'operatingHours'>('metered');

  // Section 4 Lease Filter state
  const [selectedLeaseClass, setSelectedLeaseClass] = useState<'all' | 'commercial' | 'retail' | 'industrial'>('all');

  // Auto-cycle stages every 4.2 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % REAL_ESTATE_STAGES.length);
    }, 4200);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleStageClick = (index: number) => {
    setActiveStageIndex(index);
    setIsPaused(true);

    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 6000);
  };

  const activeStage = REAL_ESTATE_STAGES[activeStageIndex];
  const activeCampus = CAMPUS_PRESETS[selectedCampus];

  const filteredLeases =
    selectedLeaseClass === 'all'
      ? LEASE_RECORDS
      : LEASE_RECORDS.filter((item) => item.assetClass === selectedLeaseClass);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#00A3E0] selection:text-white overflow-hidden">

      {/* =========================================================================
          SECTION 1 — HERO: ENTERPRISE REAL ESTATE PORTFOLIO COMMAND CENTER (LIGHT)
          ========================================================================= */}
      <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50/60 border-b border-slate-200 overflow-hidden">
        
        {/* Dynamic Background Aurora Blobs (The Knooviq Story Style) */}
        <div className="aurora-sphere-1 top-20 left-1/4 bg-[#00A3E0]/15 pointer-events-none" />
        <div className="aurora-sphere-2 top-96 right-10 bg-[#6366F1]/12 pointer-events-none" />

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#00A3E015_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />
        <div className="absolute top-12 -right-24 w-96 h-96 bg-[#00A3E0]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Strategic Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-ping" />
                <span className="font-semibold text-slate-900">Enterprise Real Estate Management</span>
                <span className="text-slate-300">|</span>
                <span className="text-[#0077B6] font-semibold">Intelligent Property Governance</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12] font-display">
                Unified Property Governance From{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#0A2540] to-[#00A3E0]">
                  Lease Acquisition
                </span>{' '}
                to Smart Building Telemetry.
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal font-sans">
                Transform commercial, retail, and industrial real estate portfolios into intelligent, high-yield digital assets. 
                Unify lease administration, automated CAM utility allocation, dynamic rent escalation, and tenant maintenance workflows 
                on native SAP S/4HANA clean-core architecture.
              </p>

              {/* Hero CTA Group */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenContact ? onOpenContact('Enterprise Real Estate Management Consultation') : null}
                  className="px-8 py-4 rounded-xl bg-[#0077B6] hover:bg-[#006296] text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Schedule Portfolio Diagnostic Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#lifecycle-studio"
                  className="px-6 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-sm font-semibold transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Explore Lifecycle Studio</span>
                  <ChevronRight className="w-4 h-4 text-[#00A3E0]" />
                </a>
              </div>

              {/* Real-Time Commercial Property KPI Grid (Zero %, Zero Currency) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 font-normal">Portfolio Occupancy</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1 font-display">Near-Full</p>
                  <p className="text-xs text-[#0077B6] font-medium mt-1">Class-A Prime Benchmark</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 font-normal">CAM Cost Recovery</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1 font-display">Fully Reconciled</p>
                  <p className="text-xs text-emerald-600 font-medium mt-1">Automated Allocation</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 font-normal">Lease Renewal Horizon</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1 font-display">Pre-Emptive</p>
                  <p className="text-xs text-[#0077B6] font-medium mt-1">Six-Month Forward View</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 font-normal">Facility ESG Rating</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1 font-display">Net-Zero Aligned</p>
                  <p className="text-xs text-emerald-600 font-medium mt-1">Continuous Telemetry</p>
                </div>
              </div>

            </div>

            {/* Right Column: Clean Pure Hero Visual (Unobstructed, increased height, zero content inside, above, or below) */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[380px] sm:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 group">
                <img
                  src="/images/real_estate_smart_city_hero.jpg"
                  alt="Enterprise Real Estate Architecture & Commercial Smart City Portfolio"
                  className="w-full h-full object-cover object-center select-none group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2 — THE 6-STAGE PROPERTY LIFECYCLE STUDIO (LIGHT THEME)
          ========================================================================= */}
      <section id="lifecycle-studio" className="py-14 sm:py-20 bg-slate-50/60 relative border-b border-slate-200">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs">
              <Building2 className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Full-Spectrum Property Lifecycle Governance</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              The 6-Stage Real Estate Operational Studio
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed font-normal">
              Explore end-to-end commercial property management. From spatial CAD ingestion and dynamic lease contracts 
              to automated CAM utility recovery and predictive capex forecasting, inspect each operational milestone.
            </p>
          </div>

          {/* Sequential 6-Stage Studio Runway */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (5 Cols): Interactive Operational Stage Selector */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="flex items-center justify-between px-1 pb-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Property Life-Cycle Runway
                </span>
                <span className="text-xs text-[#0077B6] font-medium">
                  {isPaused ? 'Paused for review' : 'Auto-cycling stages'}
                </span>
              </div>

              {REAL_ESTATE_STAGES.map((stage, idx) => {
                const isActive = idx === activeStageIndex;

                return (
                  <div
                    key={stage.id}
                    onClick={() => handleStageClick(idx)}
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
                        transition={{ duration: isPaused ? 0.3 : 4.2, ease: 'linear' }}
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
                        {stage.stepNum}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                            {stage.subsystem}
                          </span>
                          <span className="text-xs text-slate-400 font-medium">Stage {stage.stepNum}</span>
                        </div>

                        <h3 className={`text-sm font-semibold mt-1.5 truncate ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                          {stage.title}
                        </h3>

                        <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed font-normal">
                          {stage.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column (7 Cols): The Lifecycle Inspection Console */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage.id}
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
                          Stage {activeStage.stepNum} of 06
                        </span>
                        <span className="text-xs font-medium text-slate-500">
                          {activeStage.subsystem}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-1.5 tracking-tight">
                        {activeStage.title}
                      </h3>
                    </div>

                    <div className="px-3 py-1 rounded-full bg-sky-50 border border-sky-100/80 text-xs font-semibold text-[#0077B6]">
                      {activeStage.badge}
                    </div>
                  </div>

                  {/* Visual Showcase — The Knooviq Story aesthetic with frosted badges */}
                  <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl group bg-slate-950 select-none">
                    <img
                      src={activeStage.image}
                      alt={activeStage.title}
                      className="w-full h-full object-cover object-center select-none group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none z-10" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/40 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide shadow-lg">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00A3E0] animate-pulse" />
                        <span>Stage {activeStage.stepNum} of 06 • {activeStage.subsystem}</span>
                      </div>
                    </div>

                    {/* Bottom-left Executive Accent Ribbon */}
                    <div className="absolute bottom-4 left-0 z-20 pointer-events-none">
                      <div className="bg-[#0A2540]/90 backdrop-blur-md text-white px-5 py-2 rounded-r-xl font-display font-semibold tracking-wide text-xs uppercase shadow-xl border-r border-t border-b border-[#00A3E0]/40 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{activeStage.badge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Narrative Block */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-xs font-semibold text-[#0077B6] uppercase tracking-wider">
                      Real Estate Operational Workflow
                    </p>
                    <p className="text-xs text-slate-700 font-normal mt-1 leading-relaxed">
                      {activeStage.description}
                    </p>
                  </div>

                  {/* Dual Protocol Grid: Industry Standard vs SAP S/4HANA Action */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="rounded-xl p-4 bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 uppercase tracking-wider">
                        <Scale className="w-4 h-4 text-[#00A3E0]" />
                        <span>Industry Governance Standard</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {activeStage.protocolStandard}
                      </p>
                    </div>

                    <div className="rounded-xl p-4 bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 uppercase tracking-wider">
                        <Database className="w-4 h-4 text-[#00A3E0]" />
                        <span>Enterprise ERP Integration</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {activeStage.erpTrigger}
                      </p>
                    </div>

                  </div>

                  {/* Verification Metric Cards */}
                  <div className="grid grid-cols-3 gap-3 pt-2 border-t border-slate-200">
                    {activeStage.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="text-center p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                        <p className="text-xs text-slate-500 font-normal">{metric.label}</p>
                        <p className="text-sm font-bold text-slate-900 mt-1 font-display">{metric.value}</p>
                        <p className="text-xs text-[#0077B6] font-medium mt-0.5">{metric.note}</p>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3 — INTERACTIVE CAM (COMMON AREA MAINTENANCE) ALLOCATION SIMULATOR
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs">
              <Calculator className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Intelligent Cost Recovery Engine</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              Common Area Maintenance &amp; Apportionment Simulator
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed font-normal">
              Experience dynamic tenant expense apportionment. Select your enterprise campus portfolio, 
              adjust the operational expense tier, and switch apportionment methodologies to inspect live recovery precision.
            </p>

            {/* Campus Selector Buttons */}
            <div className="inline-flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 mt-2 gap-1 shadow-xs">
              <button
                onClick={() => setSelectedCampus('techPark')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCampus === 'techPark'
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-300 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Commercial Tech Park
              </button>
              <button
                onClick={() => setSelectedCampus('retailMall')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCampus === 'retailMall'
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-300 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Retail Lifestyle Promenade
              </button>
              <button
                onClick={() => setSelectedCampus('logisticsHub')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCampus === 'logisticsHub'
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-300 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Logistics &amp; Freight Hub
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl bg-slate-50 p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
            
            {/* Campus Profile Summary */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-semibold text-[#0077B6] uppercase tracking-wider">{activeCampus.type}</span>
                <h3 className="text-lg font-bold text-slate-900 font-display">{activeCampus.name}</h3>
                <p className="text-xs text-slate-500 mt-0.5 font-normal">
                  Total Gross Leasable Area: <strong className="text-slate-800">{activeCampus.totalArea}</strong> • {activeCampus.tenantsCount}
                </p>
              </div>

              <div className="px-3 py-1.5 rounded-lg bg-sky-50 border border-sky-100 text-xs text-[#0077B6] font-semibold shrink-0">
                {activeCampus.primaryUtility}
              </div>
            </div>

            {/* Slider Control for Expense Operating Intensity */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <label className="text-sm font-semibold text-slate-900">
                  Select Common Facility Operating Scope:
                </label>
                <div className="text-sm font-bold text-slate-900">
                  {expenseTier === 1
                    ? 'Baseline Essential Services (Security & Daily Cleaning)'
                    : expenseTier === 2
                    ? 'Standard Multi-Tenant Services (Central HVAC & Elevators)'
                    : 'Comprehensive Campus Services (Smart Automation & Green Telemetry)'}
                </div>
              </div>

              <input
                type="range"
                min="1"
                max="3"
                step="1"
                value={expenseTier}
                onChange={(e) => setExpenseTier(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00A3E0]"
              />

              <div className="flex justify-between text-xs text-slate-500 font-normal">
                <span>Tier 1: Core Base Operations</span>
                <span>Tier 2: Enhanced Multi-Tenant</span>
                <span>Tier 3: Full Smart-Campus Suite</span>
              </div>
            </div>

            {/* Apportionment Methodology Switcher */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                Active CAM Apportionment Formula:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setAllocationMethod('metered')}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    allocationMethod === 'metered'
                      ? 'bg-white border-[#00A3E0] shadow-sm ring-1 ring-[#00A3E0]/30'
                      : 'bg-white/60 border-slate-200 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-2 font-semibold text-xs text-slate-900">
                    <Zap className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>IoT Sub-Meter Telemetry</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 font-normal">
                    Real-time kWh and BTU sensor apportionment based on actual tenant consumption.
                  </p>
                </button>

                <button
                  onClick={() => setAllocationMethod('boma')}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    allocationMethod === 'boma'
                      ? 'bg-white border-[#00A3E0] shadow-sm ring-1 ring-[#00A3E0]/30'
                      : 'bg-white/60 border-slate-200 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-2 font-semibold text-xs text-slate-900">
                    <Scale className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>BOMA Floorplate Pro-Rata</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 font-normal">
                    Strict rentable area ratio with audited common area loss factor distribution.
                  </p>
                </button>

                <button
                  onClick={() => setAllocationMethod('operatingHours')}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    allocationMethod === 'operatingHours'
                      ? 'bg-white border-[#00A3E0] shadow-sm ring-1 ring-[#00A3E0]/30'
                      : 'bg-white/60 border-slate-200 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-2 font-semibold text-xs text-slate-900">
                    <Clock className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>Operating Hours Weight</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 font-normal">
                    Weighted coefficient for extended evening trading and weekend data floor operations.
                  </p>
                </button>
              </div>
            </div>

            {/* Calculated Results Cards (Zero %, Zero Currency) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <span className="text-xs text-slate-500">Allocation Precision</span>
                <p className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-display">
                  Sub-Millimeter
                </p>
                <span className="inline-block mt-2 text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                  Zero Floorplate Drift
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <span className="text-xs text-slate-500">Tenant Dispute Exposure</span>
                <p className="text-xl font-bold text-slate-900 mt-1">
                  Virtually Eliminated
                </p>
                <span className="inline-block mt-2 text-xs text-slate-500 font-medium">
                  Itemized telemetry backing
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <span className="text-xs text-slate-500">ERP Ledger Synchronization</span>
                <p className="text-2xl font-bold text-[#0077B6] mt-1">
                  Immediate Run
                </p>
                <span className="inline-block mt-2 text-xs text-slate-500 font-medium">
                  Automated FI-AR settlement
                </span>
              </div>

            </div>

            {/* Automated Recovery Strategy Footnote */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                Automated Service Charge Settlement (SCS) Execution:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                  <span>Real-time utility meter ingestion via BACnet IP connectors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                  <span>Touchless tenant invoice debit notes generated on month-end close</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 4 — PROACTIVE LEASE EXPIRY & VACANCY RISK MATRIX (LIGHT)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/60 relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs">
              <CalendarCheck className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Predictive Tenancy Retention</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              Lease Expiry &amp; Tenancy Renewal Matrix
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed font-normal">
              Eliminate unexpected vacancy cliffs and revenue disruption. Proactively track commercial lease 
              maturities across asset classes and initiate automated extension negotiations six months in advance.
            </p>

            {/* Filter buttons */}
            <div className="inline-flex items-center p-1 bg-white rounded-xl border border-slate-200 mt-2 shadow-sm">
              <button
                onClick={() => setSelectedLeaseClass('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedLeaseClass === 'all' ? 'bg-slate-100 text-slate-900 border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Asset Classes
              </button>
              <button
                onClick={() => setSelectedLeaseClass('commercial')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedLeaseClass === 'commercial' ? 'bg-slate-100 text-slate-900 border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Class-A Commercial
              </button>
              <button
                onClick={() => setSelectedLeaseClass('retail')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedLeaseClass === 'retail' ? 'bg-slate-100 text-slate-900 border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Retail Mall Centers
              </button>
              <button
                onClick={() => setSelectedLeaseClass('industrial')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedLeaseClass === 'industrial' ? 'bg-slate-100 text-slate-900 border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Logistics Parks
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLeases.map((lease) => (
              <div
                key={lease.id}
                className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                    {lease.category}
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      lease.urgency === 'high'
                        ? 'text-rose-600'
                        : lease.urgency === 'medium'
                        ? 'text-amber-600'
                        : 'text-[#0077B6]'
                    }`}
                  >
                    {lease.expiryWindow}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display">{lease.tenantName}</h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">
                    Leased Area: <strong className="text-slate-700">{lease.leasableArea}</strong>
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {lease.actionStrategy}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Covenant Type:</span>
                    <span className="text-slate-900 font-semibold">{lease.riskProfile}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Renewal Status:</span>
                    <span className="text-[#0077B6] font-semibold">{lease.renewalStatus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5 — ESG COMPLIANCE, GREEN LEASE & SMART TELEMETRY (LIGHT)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold tracking-wide shadow-xs">
              <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              <span>Decarbonization &amp; Green Leases</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              Smart Building Telemetry &amp; ESG Governance
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed font-normal">
              Align institutional property portfolios with global net-zero sustainability covenants. 
              Enforce contractual green lease standards, monitor building carbon intensity, and automate audited ESG filings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Green Lease Contract Clauses</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Contractually bind commercial occupants to energy efficiency targets, responsible waste sorting, 
                and reciprocal green capex payback schedules for smart building retrofit investments.
              </p>
              <ul className="text-xs text-slate-600 space-y-2 pt-3 border-t border-slate-200 font-normal">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Enforceable energy reduction thresholds</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Solar rooftop green power distribution</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Automated tenant sustainability reports</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0077B6] flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Live IoT Energy Telemetry</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Stream real-time sensor data from central chillers, air handling units, smart lighting, and water meters. 
                Edge AI algorithms optimize temperature setpoints dynamically based on live occupant density.
              </p>
              <ul className="text-xs text-slate-600 space-y-2 pt-3 border-t border-slate-200 font-normal">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>BACnet &amp; Modbus IoT gateway ingestion</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Occupancy-driven HVAC load modulation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Continuous carbon footprint index tracking</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">GRESB &amp; LEED Certification</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Consolidate enterprise carbon and resource metrics for certified ESG rating agency submissions. 
                Generate immutable audit trails ready for institutional investor disclosure frameworks.
              </p>
              <ul className="text-xs text-slate-600 space-y-2 pt-3 border-t border-slate-200 font-normal">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                  <span>GRESB annual benchmark data readiness</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                  <span>LEED and BREEAM operational credits</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                  <span>Corporate ESG disclosure validation</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 6 — NATIVE SAP S/4HANA RE-FX & CLEAN-CORE ARCHITECTURE (LIGHT)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/60 relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs">
              <Layers className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Clean-Core ERP Architecture</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              Engineered on Native SAP S/4HANA RE-FX &amp; BTP
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed font-normal">
              Execute property operations directly within your core ERP backbone. 
              Zero brittle point-solution custom code, full master data synchronization, and native IFRS 16 compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0077B6] flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Clean-Core RE-FX Master Data</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Standardizes business entities, architectural views, usage objects, and rental spaces. 
                Ensures synchronized master data across plant maintenance, general ledger, and controlling modules.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 pt-3 border-t border-slate-100 font-normal">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Harmonized functional location hierarchies</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Standardized commercial contract types</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Extensible metadata via clean-core sidecars</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0077B6] flex items-center justify-center">
                <Boxes className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">SAP BTP Event-Driven Services</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Decoupled microservices running on SAP Business Technology Platform ingest high-speed smart building 
                telemetry, power tenant mobile applications, and orchestrate facility vendor dispatch.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 pt-3 border-t border-slate-100 font-normal">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Event mesh for real-time telemetry processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Tenant portal mobile services integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Open API gateways for facility contractor networks</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0077B6] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">IFRS 16 &amp; FI-GL Synchronization</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Automates valuation and disclosure requirements under IFRS 16 and US GAAP ASC 842. 
                Direct postings to asset accounting, interest calculations, and periodic depreciation schedules.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 pt-3 border-t border-slate-100 font-normal">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Automated right-of-use asset valuation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Touchless interest and liability amortization</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Continuous compliance with international standards</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 7 — MEASURABLE VALUE IMPACT & FINAL CONVERSION CTA (LIGHT)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200 relative overflow-hidden">
        {/* Background Subtle Aurora Glow */}
        <div className="aurora-sphere-1 pointer-events-none opacity-25 -top-24 left-1/4" />
        <div className="aurora-sphere-2 pointer-events-none opacity-20 -bottom-24 right-1/4" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-10 h-10 mx-auto rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#00A3E0]">
                <Building2 className="w-5 h-5" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Near-Full
              </p>
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Portfolio Occupancy</p>
              <p className="text-xs text-slate-500 font-normal">Proactive tenant retention engine</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-10 h-10 mx-auto rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0077B6]">
                <Calculator className="w-5 h-5" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Fully Reconciled
              </p>
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">CAM Cost Recovery</p>
              <p className="text-xs text-slate-500 font-normal">Zero unbilled common expenses</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-10 h-10 mx-auto rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Flawless Audit
              </p>
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">IFRS 16 Governance</p>
              <p className="text-xs text-slate-500 font-normal">Automated ROU schedules and notes</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <Leaf className="w-5 h-5" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Net-Zero Path
              </p>
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Smart ESG Compliance</p>
              <p className="text-xs text-slate-500 font-normal">Dynamic smart building IoT controls</p>
            </div>
          </div>

          <div className="rounded-3xl p-8 sm:p-12 bg-slate-50 border border-slate-200 shadow-md relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs inline-block">
                Intelligent Real Estate Transformation
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight font-display tracking-tight">
                Elevate Your Property Portfolio to High-Performance Enterprise Standards.
              </h2>

              <p className="text-slate-600 text-base leading-relaxed font-normal">
                Connect with our senior real estate enterprise architects. We will analyze your commercial portfolio master data, 
                benchmark your lease administration workflows, and architect a modern, clean-core SAP S/4HANA RE-FX roadmap.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenContact ? onOpenContact('Enterprise Real Estate Architecture Consultation') : null}
                  className="px-8 py-4 rounded-xl bg-[#0077B6] hover:bg-[#006296] text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Schedule Portfolio Assessment</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  to="/products/asset-management"
                  className="px-6 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Explore Asset Management &rarr;</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default RealEstateManagementPage;
