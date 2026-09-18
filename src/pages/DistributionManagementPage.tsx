import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Truck,
  Boxes,
  Layers,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  BarChart3,
  Network,
  Warehouse,
  PackageCheck,
  Compass,
  FileCheck2,
  Activity,
  Users2,
  Clock,
  Sparkles,
  AlertTriangle,
  Flame,
  CheckCircle2,
  RefreshCw,
  GitMerge,
  Split,
  Workflow,
  Globe2,
  Cpu,
  Bot,
  Database,
  ArrowUpRight,
  Radio,
  SlidersHorizontal,
  FileText
} from 'lucide-react';

interface DistributionManagementPageProps {
  onOpenContact?: (service?: string) => void;
}

// Section 3: Connected Distribution Ecosystem Stages
interface EcosystemStage {
  id: string;
  stepNum: string;
  name: string;
  shortDesc: string;
  sapTrigger: string;
  telemetry: string;
  metricLabel: string;
  metricValue: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ECOSYSTEM_STAGES: EcosystemStage[] = [
  {
    id: 'orders',
    stepNum: '01',
    name: 'Orders',
    shortDesc: 'Omnichannel order ingestion, customer credit limit pre-checks, and automated priority allocation.',
    sapTrigger: 'SAP S/4HANA Sales Order Orchestration & ATP Validation',
    telemetry: 'Real-time EDI, B2B portal, and marketplace API streaming',
    metricLabel: 'Order Validation',
    metricValue: 'Sub-Second',
    icon: FileText
  },
  {
    id: 'inventory',
    stepNum: '02',
    name: 'Inventory',
    shortDesc: 'Dynamic multi-echelon stock visibility, virtual pooling, and batch-level allocation across regional hubs.',
    sapTrigger: 'SAP Advanced Available-to-Promise (aATP) Sourcing Engine',
    telemetry: 'Continuous multi-depot stock sync with zero phantom lag',
    metricLabel: 'Inventory Sync',
    metricValue: 'Unified Truth',
    icon: Boxes
  },
  {
    id: 'warehouse',
    stepNum: '03',
    name: 'Warehouse',
    shortDesc: 'Intelligent wave release, automated pick-pack routing, cross-docking, and automated guided vehicle tasking.',
    sapTrigger: 'SAP EWM Automated Wave & Task Interleaving Execution',
    telemetry: 'Barcode & RFID automated scan verification at staging dock',
    metricLabel: 'Pick Velocity',
    metricValue: 'High Throughput',
    icon: Warehouse
  },
  {
    id: 'transportation',
    stepNum: '04',
    name: 'Transportation',
    shortDesc: 'Multi-modal carrier tendering, automated 3D cube load optimization, and real-time electronic dispatch manifests.',
    sapTrigger: 'SAP Transportation Management (TM) Dynamic Carrier Assignment',
    telemetry: 'Live GPS telematics, route toll optimization, and weather alerts',
    metricLabel: 'Load Fill Factor',
    metricValue: 'Optimized Cube',
    icon: Truck
  },
  {
    id: 'delivery',
    stepNum: '05',
    name: 'Delivery',
    shortDesc: 'Real-time in-transit milestone tracking, contactless electronic proof-of-delivery (ePOD), and geo-fence alerts.',
    sapTrigger: 'SAP Logistics Business Network (LBN) Milestone Ingestion',
    telemetry: 'Driver mobile app digital signature & time-stamped geotag',
    metricLabel: 'First-Attempt POD',
    metricValue: 'Guaranteed Record',
    icon: PackageCheck
  },
  {
    id: 'customer',
    stepNum: '06',
    name: 'Customer',
    shortDesc: 'Touchless billing clearance, automated customer delivery notifications, CSAT surveys, and reverse logistics.',
    sapTrigger: 'Automated SAP FI-AR Invoice Clearing & CRM Satisfaction Sync',
    telemetry: 'Instant customer portal tracking updates and feedback loop',
    metricLabel: 'Fulfillment CSAT',
    metricValue: 'Top-Tier Benchmark',
    icon: Users2
  }
];

export const DistributionManagementPage: React.FC<DistributionManagementPageProps> = ({ onOpenContact }) => {
  // Section 3 Active Stage state
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle ecosystem stages every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % ECOSYSTEM_STAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeStage = ECOSYSTEM_STAGES[activeStageIndex];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#00A3E0] selection:text-white overflow-hidden">

      {/* =========================================================================
          SECTION 1 — HERO: INTELLIGENT DISTRIBUTION (LIGHT TO NAVY ACCENT)
          ========================================================================= */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/70 border-b border-slate-200 overflow-hidden">
        
        {/* Ambient Aurora Spheres (The Knooviq Story Style) */}
        <div className="aurora-sphere-1 top-16 left-1/4 bg-[#00A3E0]/15 pointer-events-none" />
        <div className="aurora-sphere-2 top-96 right-10 bg-[#6366F1]/12 pointer-events-none" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#00A3E015_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />
        <div className="absolute top-12 -right-24 w-96 h-96 bg-[#00A3E0]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading, Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Strategic Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-ping" />
                <span className="font-semibold text-slate-900">Intelligent Distribution Network</span>
                <span className="text-slate-300">|</span>
                <span className="text-[#0077B6] font-semibold">SAP Supply Chain Cloud</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12] font-display">
                Intelligent Distribution.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#0A2540] to-[#00A3E0]">
                  Connected Operations.
                </span>{' '}
                Smarter Growth.
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal font-sans">
                Orchestrate intelligent, SAP-powered distribution networks with complete real-time visibility. 
                Synchronize multi-node inventory, automate high-velocity order fulfillment, and optimize global 
                logistics routes with sub-second precision.
              </p>

              {/* Hero CTA Group */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#connected-ecosystem"
                  className="px-8 py-4 rounded-xl bg-[#0077B6] hover:bg-[#006296] text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={() => onOpenContact ? onOpenContact('Distribution Management Consultation') : null}
                  className="px-6 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-sm font-semibold transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>Talk to an Expert</span>
                  <ChevronRight className="w-4 h-4 text-[#00A3E0]" />
                </button>
              </div>

              {/* Real-Time Operational KPI Grid (Zero %, Zero Currency) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 font-normal">Network Sync Latency</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1 font-display">Sub-Second</p>
                  <p className="text-xs text-[#0077B6] font-medium mt-1">Real-Time Telemetry</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 font-normal">Fulfillment Velocity</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1 font-display">Autonomous</p>
                  <p className="text-xs text-emerald-600 font-medium mt-1">Multi-Node Routing</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 font-normal">Inventory Accuracy</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1 font-display">Zero Drift</p>
                  <p className="text-xs text-[#0077B6] font-medium mt-1">Continuous Reconciliation</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 font-normal">Enterprise Backbone</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1 font-display">SAP Clean-Core</p>
                  <p className="text-xs text-emerald-600 font-medium mt-1">End-to-End Orchestrated</p>
                </div>
              </div>

            </div>

            {/* Right Column: Clean 3D Digital Distribution Network Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[380px] sm:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-950 group">
                <img
                  src="/images/distribution_hero_3d.jpg"
                  alt="3D Digital Distribution Network with Autonomous Warehouses and Fleet Connectivity"
                  className="w-full h-full object-cover object-center select-none group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2 — DISTRIBUTION CHALLENGES (ASYMMETRIC MODERN CARDS)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-xs font-semibold tracking-wide shadow-xs">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              <span>Supply Chain Vulnerabilities</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              The Complexity Behind Modern Distribution
            </h2>

            <p className="text-slate-600 text-base leading-relaxed font-normal">
              Traditional distribution models crack under the weight of omnichannel velocity, supply volatility, 
              and siloed information. Transforming these operational friction points is essential for scalable growth.
            </p>
          </div>

          {/* 4 Visually Distinct Challenge Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Fragmented Operations */}
            <div className="rounded-2xl p-6 bg-gradient-to-b from-slate-50 to-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all group relative overflow-hidden space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0A2540] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Split className="w-6 h-6 text-[#00A3E0]" />
              </div>
              <div>
                <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider">Systemic Silos</span>
                <h3 className="text-lg font-bold text-slate-900 font-display mt-1">Fragmented Operations</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Siloed ERP modules, disconnected legacy warehouse software, and third-party logistics disconnects cause blind spots, manual handoffs, and error-prone batch sync delays.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs font-medium text-slate-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <span>Isolated departmental databases</span>
              </div>
            </div>

            {/* Card 2: Inventory Uncertainty */}
            <div className="rounded-2xl p-6 bg-gradient-to-b from-slate-50 to-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all group relative overflow-hidden space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Boxes className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Capital Drift</span>
                <h3 className="text-lg font-bold text-slate-900 font-display mt-1">Inventory Uncertainty</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Phantom stock, unexpected stockouts during demand spikes, and trapped working capital in stagnant inventory create friction across regional fulfillment hubs.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs font-medium text-slate-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Multi-echelon stock inaccuracy</span>
              </div>
            </div>

            {/* Card 3: Complex Order Management */}
            <div className="rounded-2xl p-6 bg-gradient-to-b from-slate-50 to-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all group relative overflow-hidden space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077B6] border border-sky-200 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <GitMerge className="w-6 h-6 text-[#00A3E0]" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#0077B6] uppercase tracking-wider">Fulfillment Bottlenecks</span>
                <h3 className="text-lg font-bold text-slate-900 font-display mt-1">Complex Order Routing</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Omnichannel order streams conflict across B2B, wholesale, and direct channels, triggering costly split shipments, backorder loops, and missed contractual SLAs.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs font-medium text-slate-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                <span>Chaotic multi-channel priorities</span>
              </div>
            </div>

            {/* Card 4: Logistics & Fulfillment Pressure */}
            <div className="rounded-2xl p-6 bg-gradient-to-b from-slate-50 to-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all group relative overflow-hidden space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Truck className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Margin Squeeze</span>
                <h3 className="text-lg font-bold text-slate-900 font-display mt-1">Logistics &amp; Fulfillment</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Escalating carrier freight expenses, dock door congestion, lack of dynamic route optimization, and customer demands for tight delivery windows threaten margins.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs font-medium text-slate-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span>Compressed transit turnaround</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3 — CONNECTED DISTRIBUTION ECOSYSTEM (PRIMARY STORYTELLING SECTION)
          Orders → Inventory → Warehouse → Transportation → Delivery → Customer
          ========================================================================= */}
      <section id="connected-ecosystem" className="py-16 sm:py-24 bg-slate-50/70 relative border-b border-slate-200 overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="aurora-sphere-1 top-24 left-1/3 bg-[#00A3E0]/10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs">
              <Network className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Full-Spectrum Digital Thread</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              One Connected Ecosystem. End-to-End Visibility.
            </h2>

            <p className="text-slate-600 text-base leading-relaxed font-normal">
              Follow an order as it travels through your cyber-physical supply chain. Continuous ERP event streaming connects 
              every operational milestone with zero data latency.
            </p>
          </div>

          {/* Interactive Pipeline Track: Orders → Inventory → Warehouse → Transportation → Delivery → Customer */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between px-2 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />
                <span className="text-xs font-semibold text-slate-800 uppercase tracking-wider">
                  Live Flow Orchestration
                </span>
              </div>
              <span className="text-xs text-[#0077B6] font-medium">
                {isPaused ? 'Paused for examination' : 'Auto-cycling pipeline'}
              </span>
            </div>

            {/* Stage Buttons Bar with Connecting Lines */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-4">
              {ECOSYSTEM_STAGES.map((stage, idx) => {
                const isActive = idx === activeStageIndex;
                const IconComponent = stage.icon;

                return (
                  <button
                    key={stage.id}
                    onClick={() => {
                      setActiveStageIndex(idx);
                      setIsPaused(true);
                      setTimeout(() => setIsPaused(false), 8000);
                    }}
                    className={`p-3 rounded-xl text-left transition-all relative overflow-hidden border ${
                      isActive
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-[#00A3E0]/40'
                        : 'bg-slate-50 hover:bg-white text-slate-700 border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-[#00A3E0]"
                        initial={{ scaleX: 0, transformOrigin: '0%' }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: isPaused ? 0.3 : 4, ease: 'linear' }}
                      />
                    )}

                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        isActive ? 'bg-[#00A3E0] text-slate-900' : 'bg-slate-200 text-slate-700'
                      }`}>
                        Stage {stage.stepNum}
                      </span>
                      <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#00A3E0]' : 'text-slate-400'}`} />
                    </div>

                    <p className="text-sm font-bold mt-2 font-display truncate">
                      {stage.name}
                    </p>

                    <p className={`text-[11px] truncate mt-0.5 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                      {stage.metricValue}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Central Storytelling Canvas: Isometric Illustration + Live Telemetry Drawer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Centerpiece (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950 group">
                <img
                  src="/images/distribution_ecosystem_map.jpg"
                  alt="Connected Distribution Ecosystem showing Orders, Inventory, Warehouse, Transit and Delivery"
                  className="w-full h-full object-cover object-center select-none group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Ecosystem Tag */}
                <div className="absolute top-4 left-4 z-20 pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/50 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active Stage: {activeStage.name} (0{activeStageIndex + 1} of 06)</span>
                  </div>
                </div>

                {/* Bottom-left accent ribbon */}
                <div className="absolute bottom-4 left-0 z-20 pointer-events-none">
                  <div className="bg-[#0A2540]/90 backdrop-blur-md text-white px-5 py-2 rounded-r-xl font-display font-semibold tracking-wide text-xs uppercase shadow-xl border-r border-t border-b border-[#00A3E0]/40 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                    <span>{activeStage.metricLabel}: {activeStage.metricValue}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Operational Breakdown Drawer (5 Cols) */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-lg space-y-5"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-50 text-[#0077B6] border border-sky-100">
                        Milestone 0{activeStageIndex + 1}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">Digital Traceability</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      Verified
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold font-display text-slate-900 tracking-tight">
                      {activeStage.name} Operations
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mt-2">
                      {activeStage.shortDesc}
                    </p>
                  </div>

                  {/* SAP Integration Event Box */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 uppercase tracking-wider">
                      <Database className="w-3.5 h-3.5 text-[#00A3E0]" />
                      <span>SAP S/4HANA Event Trigger</span>
                    </div>
                    <p className="text-xs text-slate-700 font-medium">
                      {activeStage.sapTrigger}
                    </p>
                  </div>

                  {/* Telemetry Stream Box */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 uppercase tracking-wider">
                      <Radio className="w-3.5 h-3.5 text-[#0077B6]" />
                      <span>Digital Telemetry Stream</span>
                    </div>
                    <p className="text-xs text-slate-600 font-normal">
                      {activeStage.telemetry}
                    </p>
                  </div>

                  {/* Key Outcome Highlight */}
                  <div className="p-3 rounded-xl bg-sky-50/60 border border-sky-100 flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-normal">{activeStage.metricLabel}:</span>
                    <strong className="text-[#0077B6] font-display text-sm">{activeStage.metricValue}</strong>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 4 — CORE DISTRIBUTION CAPABILITIES (PREMIUM BENTO GRID)
          ========================================================================= */}
      <section id="capabilities" className="py-16 sm:py-24 bg-white relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Full-Stack Modernization</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              Everything You Need to Modernize Distribution
            </h2>

            <p className="text-slate-600 text-base leading-relaxed font-normal">
              An enterprise-grade, clean-core operational suite engineered to scale distribution throughput, 
              eliminate fulfillment blind spots, and protect operating margins.
            </p>
          </div>

          {/* Premium Asymmetric Bento Grid (6 Key Capabilities) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Bento Card 1 (Spans 7 cols): Order Management */}
            <div className="md:col-span-7 rounded-3xl p-7 bg-gradient-to-br from-slate-50 via-white to-sky-50/30 border border-slate-200 shadow-sm hover:shadow-md transition-all group relative overflow-hidden flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#0077B6] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Workflow className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#0077B6] uppercase tracking-wider">Dynamic Sourcing</span>
                  <h3 className="text-2xl font-bold text-slate-900 font-display mt-1">Order Management</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Consolidate omnichannel demand across B2B EDI, eCommerce portals, and dealer networks. 
                  Automate credit-limit verification, priority rule-based allocation, split-shipment prevention, 
                  and touchless sales order clearing straight into SAP S/4HANA.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/80 text-xs">
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs text-center">
                  <p className="text-slate-500 font-normal">Validation Lag</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5 font-display">Instantaneous</p>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs text-center">
                  <p className="text-slate-500 font-normal">Split Orders</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5 font-display">Minimized</p>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs text-center">
                  <p className="text-slate-500 font-normal">SLA Integrity</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5 font-display">Deterministic</p>
                </div>
              </div>
            </div>

            {/* Bento Card 2 (Spans 5 cols): Inventory Management */}
            <div className="md:col-span-5 rounded-3xl p-7 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border border-slate-200 shadow-sm hover:shadow-md transition-all group relative overflow-hidden flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#0077B6] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Boxes className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#0077B6] uppercase tracking-wider">Multi-Echelon Visibility</span>
                  <h3 className="text-2xl font-bold text-slate-900 font-display mt-1">Inventory Management</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Real-time multi-depot inventory visibility with automated safety-stock thresholds, virtual stock pooling, 
                  and batch/serial traceability that completely eliminates phantom inventory.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Cross-Depot Pooling:</span>
                  <strong className="text-slate-900 font-semibold">Active &amp; Balanced</strong>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Reorder Point Calculation:</span>
                  <strong className="text-[#0077B6] font-semibold">Dynamic Machine Learning</strong>
                </div>
              </div>
            </div>

            {/* Bento Card 3 (Spans 4 cols): Warehouse Integration */}
            <div className="md:col-span-4 rounded-3xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all group space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0077B6] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <Warehouse className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Warehouse Integration</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Native integration with SAP Extended Warehouse Management (EWM). Automated wave picking schedules, cross-docking 
                acceleration, and automated guided vehicle (AGV) task interleaving.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                <span>Zero dock staging lag</span>
              </div>
            </div>

            {/* Bento Card 4 (Spans 4 cols): Transportation Management */}
            <div className="md:col-span-4 rounded-3xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all group space-y-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-[#0077B6] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Transportation Management</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Direct integration with SAP TM for automated multi-carrier rate tendering, 3D truckload optimization, 
                dynamic route detour planning, and real-time GPS freight telematics.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                <span>Optimized freight cube fill</span>
              </div>
            </div>

            {/* Bento Card 5 (Spans 4 cols): Partner Collaboration */}
            <div className="md:col-span-4 rounded-3xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all group space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Partner Collaboration</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Self-service portals for 3PL carriers, distributors, and freight brokers. Automated electronic Advanced Shipping 
                Notices (ASN) and bilateral consignment inventory settlements.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                <span>Touchless supplier ASNs</span>
              </div>
            </div>

            {/* Bento Card 6 (Spans 12 cols): Analytics & Automation */}
            <div className="md:col-span-12 rounded-3xl p-7 bg-gradient-to-r from-slate-900 via-[#0A2540] to-slate-900 text-white shadow-xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-semibold tracking-wide border border-white/10">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Predictive Intelligence Engine</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                    Analytics &amp; Autonomous Process Automation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-2xl">
                    Anticipate demand surges weeks before seasonal peaks. Leverage SAP Business AI algorithms to predict 
                    carrier delay bottlenecks, autonomously re-route high-priority freight shipments, and trigger pre-emptive stock replenishment.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <p className="text-[11px] text-slate-400 font-normal">Carrier SLA Performance</p>
                    <p className="text-lg font-bold text-cyan-300 font-display">Continuous Audit</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <p className="text-[11px] text-slate-400 font-normal">Bottleneck Detection</p>
                    <p className="text-lg font-bold text-emerald-400 font-display">Pre-Emptive Alerting</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5 — INTELLIGENT SAP-POWERED DISTRIBUTION (FLOATING AI CARDS)
          SAP S/4HANA • SAP EWM • SAP TM • SAP BTP
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-950 text-white relative border-b border-slate-800 overflow-hidden">
        
        {/* Subtle dark cyber aurora glow */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00A3E0]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#6366F1]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide shadow-lg">
              <Bot className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Next-Generation Decision Intelligence</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-display">
              Turn Distribution Data into Intelligent Decisions
            </h2>

            <p className="text-slate-300 text-base leading-relaxed font-normal">
              Autonomous machine learning algorithms continuously scan inventory velocity, shipping schedules, 
              and demand volatility to prescribe proactive supply chain actions.
            </p>

            {/* Visual SAP Ecosystem Connector Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-semibold text-white flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#00A3E0]" />
                <span>SAP S/4HANA</span>
              </span>
              <span className="text-slate-600 font-bold">•</span>
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-semibold text-white flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>SAP EWM</span>
              </span>
              <span className="text-slate-600 font-bold">•</span>
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-semibold text-white flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <span>SAP TM</span>
              </span>
              <span className="text-slate-600 font-bold">•</span>
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-semibold text-white flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>SAP BTP</span>
              </span>
            </div>
          </div>

          {/* Futuristic Visual with 4 Floating Intelligence Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Centerpiece (6 Cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                <img
                  src="/images/distribution_enterprise_data_strategy.png"
                  alt="Enterprise Data Integration Strategy Presentation and Cross-Functional Planning"
                  className="w-full h-full object-cover object-center select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Neural Decision Loop Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Floating Intelligence Cards (6 Cols) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Inventory Risk */}
              <div className="rounded-2xl p-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all space-y-3 group">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-display">Inventory Risk</h4>
                  <p className="text-xs text-rose-300 font-medium mt-0.5">Automated Stockout Alert</p>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Predicts regional stock imbalances 14 days in advance and autonomously recommends virtual rebalancing from adjacent fulfillment hubs.
                </p>
                <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400">
                  Trigger: <strong className="text-slate-200">SAP EWM Replenishment Order</strong>
                </div>
              </div>

              {/* Card 2: Demand Insight */}
              <div className="rounded-2xl p-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all space-y-3 group">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-display">Demand Insight</h4>
                  <p className="text-xs text-cyan-300 font-medium mt-0.5">Seasonal Predictive Pacing</p>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Ingests micro-market buying patterns and promotion schedules to modulate SKU forecast baselines directly within SAP IBP.
                </p>
                <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400">
                  Trigger: <strong className="text-slate-200">SAP IBP Forecast Recalibration</strong>
                </div>
              </div>

              {/* Card 3: Shipment Prediction */}
              <div className="rounded-2xl p-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all space-y-3 group">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-display">Shipment Prediction</h4>
                  <p className="text-xs text-indigo-300 font-medium mt-0.5">Dynamic Detour Modeling</p>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Monitors port congestion and transit choke-points, automatically triggering secondary carrier booking to safeguard customer SLAs.
                </p>
                <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400">
                  Trigger: <strong className="text-slate-200">SAP TM Dynamic Carrier Re-Tender</strong>
                </div>
              </div>

              {/* Card 4: Order Optimization */}
              <div className="rounded-2xl p-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all space-y-3 group">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-display">Order Optimization</h4>
                  <p className="text-xs text-emerald-300 font-medium mt-0.5">Least-Carbon Routing</p>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Identifies the optimal fulfillment facility factoring in freight fees, tax jurisdictions, and vehicle fill coefficients.
                </p>
                <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400">
                  Trigger: <strong className="text-slate-200">SAP BTP Smart Dispatch Engine</strong>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 6 — BUSINESS IMPACT (5 KEY OUTCOMES WITH VISUAL INDICATORS)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold tracking-wide shadow-xs">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>Measurable Enterprise Value</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              What Smarter Distribution Delivers
            </h2>

            <p className="text-slate-600 text-base leading-relaxed font-normal">
              Transition from reactive firefighting to deterministic distribution execution. 
              Modernized supply chain architecture delivers immediate business transformation across 5 critical vectors.
            </p>
          </div>

          {/* 5 Transformation Outcomes Layout */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            
            {/* Outcome 1 */}
            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200 text-center space-y-3 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto rounded-xl bg-blue-100 text-[#0077B6] flex items-center justify-center">
                <Boxes className="w-6 h-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Near-Perfect
              </p>
              <h3 className="text-sm font-bold text-slate-800 font-display">Higher Inventory Accuracy</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Eliminates multi-depot phantom stock with automated cycle counts and real-time serial tracking.
              </p>
              <div className="pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-[#0077B6]">
                Zero Audit Discrepancies
              </div>
            </div>

            {/* Outcome 2 */}
            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200 text-center space-y-3 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto rounded-xl bg-cyan-100 text-[#00A3E0] flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Same-Day
              </p>
              <h3 className="text-sm font-bold text-slate-800 font-display">Faster Fulfillment</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Automated wave releases and dock appointment scheduling accelerate order-to-dispatch turnaround.
              </p>
              <div className="pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-cyan-600">
                Sub-Hour Dock Turnaround
              </div>
            </div>

            {/* Outcome 3 */}
            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200 text-center space-y-3 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <BarChart3 className="w-6 h-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Optimized
              </p>
              <h3 className="text-sm font-bold text-slate-800 font-display">Lower Operational Costs</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Optimized 3D cube fill rates and automated freight tendering eradicate emergency expedited freight fees.
              </p>
              <div className="pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-emerald-600">
                Minimized Freight Waste
              </div>
            </div>

            {/* Outcome 4 */}
            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200 text-center space-y-3 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <Radio className="w-6 h-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Sub-Second
              </p>
              <h3 className="text-sm font-bold text-slate-800 font-display">Real-Time Visibility</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Continuous IoT GPS telematics provide unbroken visibility across warehouses, cross-docks, and highways.
              </p>
              <div className="pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-indigo-600">
                Continuous Event Stream
              </div>
            </div>

            {/* Outcome 5 */}
            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200 text-center space-y-3 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <Users2 className="w-6 h-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Top-Tier
              </p>
              <h3 className="text-sm font-bold text-slate-800 font-display">Customer Experience</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Automated delivery milestone alerts, digital ePOD signatures, and reliable fulfillment boost retention.
              </p>
              <div className="pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-purple-600">
                Guaranteed On-Time Delivery
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 7 — FINAL CTA (CINEMATIC 3D GLOBAL NETWORK BACKGROUND)
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-slate-950 text-white overflow-hidden border-t border-slate-800">
        
        {/* Background Cinematic 3D Global Network Visual */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/distribution_global_net.jpg"
            alt="Cinematic Global Distribution Network from Orbit"
            className="w-full h-full object-cover object-center opacity-35 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            
            <span className="px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide shadow-lg inline-block">
              Global Supply Chain Orchestration
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-display tracking-tight">
              Ready to Build a Smarter Distribution Network?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Partner with our enterprise supply chain specialists. We will evaluate your distribution network topology, 
              benchmark order-to-delivery cycle times, and architect a high-velocity, clean-core SAP distribution platform.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenContact ? onOpenContact('Enterprise Distribution Management Architecture Session') : null}
                className="px-8 py-4 rounded-xl bg-[#0077B6] hover:bg-[#006296] text-white font-semibold text-sm shadow-xl transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Talk to Our Experts</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/solutions"
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-sm backdrop-blur-md"
              >
                <span>Explore SAP Solutions</span>
                <ChevronRight className="w-4 h-4 text-cyan-300" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default DistributionManagementPage;
