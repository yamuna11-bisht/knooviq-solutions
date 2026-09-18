import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Store,
  Smartphone,
  Globe,
  Share2,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Boxes,
  Workflow,
  Users2,
  TrendingUp,
  BrainCircuit,
  Bot,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Zap,
  Tag,
  ShieldCheck,
  HeartHandshake,
  BarChart3,
  Clock,
  Compass,
  Radio,
  SlidersHorizontal,
  PackageCheck
} from 'lucide-react';

interface DigitalRetailSolutionPageProps {
  onOpenContact?: (service?: string) => void;
}

// Section 2: Omnichannel Customer Journey Stages
interface JourneyStage {
  id: string;
  stepNum: string;
  name: string;
  shortDesc: string;
  channel: string;
  sapTrigger: string;
  customerAction: string;
  kpiLabel: string;
  kpiValue: string;
}

const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: 'discover',
    stepNum: '01',
    name: 'Discover',
    shortDesc: 'AI-personalized lifestyle visual feeds, social live-commerce streams, and contextual brand search.',
    channel: 'Social Commerce & Search',
    sapTrigger: 'SAP Emarsys Behavioral Intent Recognition',
    customerAction: 'Interacts with curated dynamic lifestyle video campaign',
    kpiLabel: 'Engagement Velocity',
    kpiValue: 'Immediate Ingestion'
  },
  {
    id: 'browse',
    stepNum: '02',
    name: 'Browse',
    shortDesc: 'Headless storefront with real-time local store stock availability, augmented reality fitting, and reviews.',
    channel: 'Website & Mobile App',
    sapTrigger: 'SAP Commerce Cloud Headless Catalog Sourcing',
    customerAction: 'Explores real-time store stock availability and virtual AR sizing',
    kpiLabel: 'Catalog Latency',
    kpiValue: 'Sub-Second Response'
  },
  {
    id: 'purchase',
    stepNum: '03',
    name: 'Purchase',
    shortDesc: 'Unified cross-channel shopping cart with biometric one-touch checkout, split payments, and instant loyalty accrual.',
    channel: 'Store, App & Web Cart',
    sapTrigger: 'SAP Customer Checkout & S/4HANA Order Creation',
    customerAction: 'Completes transaction with instant digital receipt & rewards point sync',
    kpiLabel: 'Checkout Experience',
    kpiValue: 'Frictionless'
  },
  {
    id: 'fulfill',
    stepNum: '04',
    name: 'Fulfill',
    shortDesc: 'Intelligent distributed order management routing to the closest flagship store, dark store, or central DC.',
    channel: 'Omnichannel Sourcing Hub',
    sapTrigger: 'SAP S/4HANA Advanced Available-to-Promise (aATP)',
    customerAction: 'Option selected for curbside click-and-collect or rapid doorstep dispatch',
    kpiLabel: 'Routing Precision',
    kpiValue: 'Autonomous Allocation'
  },
  {
    id: 'deliver',
    stepNum: '05',
    name: 'Deliver',
    shortDesc: 'Same-day micro-fulfillment dispatch, live courier tracking, contactless handover, and paperless digital returns.',
    channel: 'Local Fleet & 3PL Logistics',
    sapTrigger: 'SAP Logistics Business Network Live Telemetry',
    customerAction: 'Receives real-time delivery GPS milestone alerts on smartphone',
    kpiLabel: 'Fulfillment Window',
    kpiValue: 'Same-Day Horizon'
  },
  {
    id: 'engage',
    stepNum: '06',
    name: 'Engage',
    shortDesc: 'Post-purchase styling advice, proactive care tips, VIP invitation to local in-store styling sessions, and surveys.',
    channel: 'Unified Clienteling & Loyalty',
    sapTrigger: 'SAP Customer Data Platform (CDP) Profile Sync',
    customerAction: 'Joins VIP loyalty community and schedules in-store styling consultation',
    kpiLabel: 'Retention Score',
    kpiValue: 'Top-Tier Advocacy'
  }
];

export const DigitalRetailSolutionPage: React.FC<DigitalRetailSolutionPageProps> = ({ onOpenContact }) => {
  // Section 2 Interactive Journey State
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Section 4 Active AI Insight Tab
  const [activeInsight, setActiveInsight] = useState<string>('intent');

  // Auto-cycle customer journey stages
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % JOURNEY_STAGES.length);
    }, 4200);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeStage = JOURNEY_STAGES[activeStageIndex];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#00A3E0] selection:text-white overflow-hidden">

      {/* =========================================================================
          SECTION 1 — HERO: REINVENT DIGITAL RETAIL (LIGHT GRADIENT WITH 3D ACCENTS)
          ========================================================================= */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/70 border-b border-slate-200 overflow-hidden">
        
        {/* Subtle dynamic aurora spheres (The Knooviq Story aesthetic) */}
        <div className="aurora-sphere-1 top-20 left-1/4 bg-[#00A3E0]/15 pointer-events-none" />
        <div className="aurora-sphere-2 top-96 right-10 bg-[#6366F1]/12 pointer-events-none" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#00A3E015_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />
        <div className="absolute top-12 -right-24 w-96 h-96 bg-[#00A3E0]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Headline, Proposition & Actions */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Strategic Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-ping" />
                <span className="font-semibold text-slate-900">Next-Generation Retail Experience</span>
                <span className="text-slate-300">|</span>
                <span className="text-[#0077B6] font-semibold">SAP Commerce Cloud</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12] font-display">
                Reinvent Retail.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#0A2540] to-[#00A3E0]">
                  Connect Every Customer.
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal font-sans">
                Create intelligent and connected retail experiences across stores, digital commerce, inventory, 
                customer engagement and fulfillment with SAP-powered solutions.
              </p>

              {/* Hero CTA Group */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#omnichannel-experience"
                  className="px-8 py-4 rounded-xl bg-[#0077B6] hover:bg-[#006296] text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={() => onOpenContact ? onOpenContact('Digital Retail Solution Consultation') : null}
                  className="px-6 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-sm font-semibold transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>Talk to an Expert</span>
                  <ChevronRight className="w-4 h-4 text-[#00A3E0]" />
                </button>
              </div>

              {/* Real-Time Retail KPI Grid (Zero %, Zero Currency) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 font-normal">Customer Journey</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1 font-display">Unified</p>
                  <p className="text-xs text-[#0077B6] font-medium mt-1">Store, Web &amp; Mobile</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 font-normal">Order Routing</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1 font-display">Sub-Minute</p>
                  <p className="text-xs text-emerald-600 font-medium mt-1">Autonomous Sourcing</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 font-normal">Inventory Visibility</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1 font-display">Single Pool</p>
                  <p className="text-xs text-[#0077B6] font-medium mt-1">Zero Discrepancy</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 font-normal">Enterprise Core</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1 font-display">Clean-Core</p>
                  <p className="text-xs text-emerald-600 font-medium mt-1">SAP S/4HANA Sync</p>
                </div>
              </div>

            </div>

            {/* Right Column: High-Quality Futuristic Retail Visual with Floating Product Cards */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[380px] sm:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-950 group">
                <img
                  src="/images/retail_hero_future.jpg"
                  alt="Futuristic luxury retail flagship with customer smartphone shopping and ambient digital connectivity"
                  className="w-full h-full object-cover object-center select-none group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating Product Intelligence Pill */}
                <div className="absolute top-4 left-4 z-20 pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/50 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Smart Fitting Concierge Active</span>
                  </div>
                </div>

                {/* Bottom-left accent ribbon */}
                <div className="absolute bottom-4 left-0 z-20 pointer-events-none">
                  <div className="bg-[#0A2540]/90 backdrop-blur-md text-white px-5 py-2 rounded-r-xl font-display font-semibold tracking-wide text-xs uppercase shadow-xl border-r border-t border-b border-[#00A3E0]/40 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Sub-Second Mobile Checkout Ready</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2 — OMNICHANNEL CUSTOMER EXPERIENCE (INTERACTIVE JOURNEY)
          Discover → Browse → Purchase → Fulfill → Deliver → Engage
          ========================================================================= */}
      <section id="omnichannel-experience" className="py-16 sm:py-24 bg-white relative border-b border-slate-200 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Unified Customer Journey</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              One Customer. Every Channel. One Connected Experience.
            </h2>

            <p className="text-slate-600 text-base leading-relaxed font-normal">
              Place your customer at the absolute center of every brand touchpoint. Seamlessly connect 
              physical stores, digital storefronts, mobile applications, marketplaces, and social commerce into a single continuous journey.
            </p>

            {/* 5 Connected Touchpoints Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 border border-slate-200">
                <Store className="w-3.5 h-3.5 text-[#0077B6]" />
                <span>Physical Store</span>
              </span>
              <span className="text-slate-300 font-bold">•</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 border border-slate-200">
                <Globe className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>Website</span>
              </span>
              <span className="text-slate-300 font-bold">•</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 border border-slate-200">
                <Smartphone className="w-3.5 h-3.5 text-indigo-600" />
                <span>Mobile App</span>
              </span>
              <span className="text-slate-300 font-bold">•</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 border border-slate-200">
                <Boxes className="w-3.5 h-3.5 text-cyan-600" />
                <span>Marketplace</span>
              </span>
              <span className="text-slate-300 font-bold">•</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 border border-slate-200">
                <Share2 className="w-3.5 h-3.5 text-purple-600" />
                <span>Social Commerce</span>
              </span>
            </div>
          </div>

          {/* Interactive Flow Runway: Discover → Browse → Purchase → Fulfill → Deliver → Engage */}
          <div className="bg-slate-50/80 rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between px-2 pb-3 border-b border-slate-200/80">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Interactive Omnichannel Milestones
              </span>
              <span className="text-xs text-[#0077B6] font-medium">
                {isPaused ? 'Paused for examination' : 'Auto-cycling journey'}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-3">
              {JOURNEY_STAGES.map((stage, idx) => {
                const isActive = idx === activeStageIndex;

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
                        : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-[#00A3E0]"
                        initial={{ scaleX: 0, transformOrigin: '0%' }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: isPaused ? 0.3 : 4.2, ease: 'linear' }}
                      />
                    )}

                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        isActive ? 'bg-[#00A3E0] text-slate-900' : 'bg-slate-100 text-slate-600'
                      }`}>
                        0{idx + 1}
                      </span>
                      <span className={`text-[10px] font-semibold ${isActive ? 'text-cyan-300' : 'text-slate-400'}`}>
                        {stage.kpiValue}
                      </span>
                    </div>

                    <p className="text-sm font-bold mt-2 font-display truncate">
                      {stage.name}
                    </p>

                    <p className={`text-[11px] truncate mt-0.5 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                      {stage.channel}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dual Column: 3D Omnichannel Illustration + Live Contextual Drawer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (7 cols): Isometric 3D Omnichannel Visualization */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950 group">
                <img
                  src="/images/retail_omnichannel.jpg"
                  alt="Omnichannel retail ecosystem showing customer at center connecting boutique store, tablet, mobile app, marketplace, and social commerce"
                  className="w-full h-full object-cover object-center select-none group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-20 pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />
                    <span>Active Touchpoint: {activeStage.channel}</span>
                  </div>
                </div>

                {/* Bottom Ribbon */}
                <div className="absolute bottom-4 left-0 z-20 pointer-events-none">
                  <div className="bg-[#0A2540]/90 backdrop-blur-md text-white px-5 py-2 rounded-r-xl font-display font-semibold tracking-wide text-xs uppercase shadow-xl border-r border-t border-b border-[#00A3E0]/40 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{activeStage.name} • {activeStage.kpiLabel}: {activeStage.kpiValue}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Active Stage Narrative Card */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-7 shadow-lg space-y-5"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white text-[#0077B6] border border-slate-200 shadow-2xs">
                        Stage {activeStage.stepNum} of 06
                      </span>
                      <span className="text-xs text-slate-500 font-medium">{activeStage.channel}</span>
                    </div>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                      Active Sync
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold font-display text-slate-900 tracking-tight">
                      {activeStage.name} Experience
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mt-2">
                      {activeStage.shortDesc}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 uppercase tracking-wider">
                      <Zap className="w-3.5 h-3.5 text-[#00A3E0]" />
                      <span>Customer Action Flow</span>
                    </div>
                    <p className="text-xs text-slate-700 font-medium">
                      {activeStage.customerAction}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 uppercase tracking-wider">
                      <Layers className="w-3.5 h-3.5 text-[#0077B6]" />
                      <span>Enterprise Backend Event</span>
                    </div>
                    <p className="text-xs text-slate-600 font-normal">
                      {activeStage.sapTrigger}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-normal">{activeStage.kpiLabel}:</span>
                    <strong className="text-[#0077B6] font-display text-sm">{activeStage.kpiValue}</strong>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3 — CORE DIGITAL RETAIL CAPABILITIES (PREMIUM BENTO GRID)
          ========================================================================= */}
      <section id="capabilities" className="py-16 sm:py-24 bg-slate-50/70 relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs">
              <ShoppingBag className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Composable Commerce Architecture</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              Everything You Need for Smarter Retail
            </h2>

            <p className="text-slate-600 text-base leading-relaxed font-normal">
              A modular, cloud-native retail engine designed to eliminate operational friction, empower store associates, 
              and convert multi-channel shoppers into high-value brand loyalists.
            </p>
          </div>

          {/* 6 Capabilities in a Premium Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Bento Card 1 (Spans 7 cols): AI-Powered Personalization */}
            <div className="md:col-span-7 rounded-3xl p-7 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all group relative overflow-hidden flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-[#0077B6] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Sparkles className="w-6 h-6 text-[#00A3E0]" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#0077B6] uppercase tracking-wider">Contextual Commerce</span>
                  <h3 className="text-2xl font-bold text-slate-900 font-display mt-1">AI-Powered Personalization</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Real-time machine learning models analyze behavioral signals, past purchases, and local climate trends 
                  to deliver dynamic product recommendations, automated outfit curation, and individualized promotion incentives with zero margin erosion.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100 text-xs">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-center">
                  <p className="text-slate-500 font-normal">Recommendation</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5 font-display">Contextual</p>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-center">
                  <p className="text-slate-500 font-normal">Affinity Match</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5 font-display">Deep Learning</p>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-center">
                  <p className="text-slate-500 font-normal">Cart Expansion</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5 font-display">Optimized</p>
                </div>
              </div>
            </div>

            {/* Bento Card 2 (Spans 5 cols): Omnichannel Commerce */}
            <div className="md:col-span-5 rounded-3xl p-7 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all group relative overflow-hidden flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#0077B6] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#0077B6] uppercase tracking-wider">Universal Cart</span>
                  <h3 className="text-2xl font-bold text-slate-900 font-display mt-1">Omnichannel Commerce</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Headless API architecture powering Buy Online Pick Up in Store (BOPIS), curbside collection, 
                  endless aisle store clienteling, and cross-channel returns with a single customer basket.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Store Clienteling:</span>
                  <strong className="text-slate-900 font-semibold">Mobile Associate Tablet</strong>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Returns Clearance:</span>
                  <strong className="text-[#0077B6] font-semibold">Instant Multi-Channel Refund</strong>
                </div>
              </div>
            </div>

            {/* Bento Card 3 (Spans 4 cols): Intelligent Inventory */}
            <div className="md:col-span-4 rounded-3xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all group space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0077B6] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <Boxes className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Intelligent Inventory</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Single virtual inventory pool across all stores, dark stores, and distribution centers. 
                RFID automated receiving and automated safety-stock balancing.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                <span>Zero phantom store stockouts</span>
              </div>
            </div>

            {/* Bento Card 4 (Spans 4 cols): Smart Order Management */}
            <div className="md:col-span-4 rounded-3xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all group space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Smart Order Management</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Distributed Order Management (DOM) engine calculates the optimal fulfillment location factoring in 
                shipping distance, store workload, and least-carbon carrier routes.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                <span>Automated lowest-cost dispatch</span>
              </div>
            </div>

            {/* Bento Card 5 (Spans 4 cols): Digital Merchandising */}
            <div className="md:col-span-4 rounded-3xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all group space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <Tag className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Digital Merchandising</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Dynamic pricing automation, visual catalog management, and AI-generated attribute enrichment 
                that accelerates time-to-market for new seasonal collections.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600" />
                <span>Automated seasonal transitions</span>
              </div>
            </div>

            {/* Bento Card 6 (Spans 12 cols): Customer Intelligence */}
            <div className="md:col-span-12 rounded-3xl p-7 bg-gradient-to-r from-slate-900 via-[#0A2540] to-slate-900 text-white shadow-xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-semibold tracking-wide border border-white/10">
                    <Users2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Customer 360° Intelligence Engine</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                    Customer Intelligence &amp; Unified Loyalty
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-2xl">
                    Unify in-store POS transactions, mobile browsing, and support interactions into an immutable customer profile. 
                    Trigger personalized loyalty tier perks, predict churn propensity, and empower retail associates with actionable clienteling insights.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <p className="text-[11px] text-slate-400 font-normal">Customer Profile Graph</p>
                    <p className="text-lg font-bold text-cyan-300 font-display">Real-Time Sync</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <p className="text-[11px] text-slate-400 font-normal">Loyalty Redemption</p>
                    <p className="text-lg font-bold text-emerald-400 font-display">Cross-Channel Instant</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 4 — AI-POWERED RETAIL INTELLIGENCE (DECISION CORE)
          Customer Data + Sales + Inventory + Product Data → AI → Intelligent Decisions
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-950 text-white relative border-b border-slate-800 overflow-hidden">
        
        {/* Ambient Dark Neon Glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00A3E0]/12 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#6366F1]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide shadow-lg">
              <BrainCircuit className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Predictive Retail Decisioning</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-display">
              Turn Retail Data Into Intelligent Action
            </h2>

            <p className="text-slate-300 text-base leading-relaxed font-normal">
              Transform raw omnichannel signals into autonomous retail operations. 
              Our neural processing engine synchronizes multi-source inputs to prescribe instant commercial decisions.
            </p>

            {/* Visual Formula Pill */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-slate-900/90 border border-white/10 text-xs font-semibold text-slate-300 shadow-xl mt-2">
              <span className="text-cyan-300">Customer Data</span>
              <span className="text-slate-600">+</span>
              <span className="text-cyan-300">Sales</span>
              <span className="text-slate-600">+</span>
              <span className="text-cyan-300">Inventory</span>
              <span className="text-slate-600">+</span>
              <span className="text-cyan-300">Product Data</span>
              <span className="text-[#00A3E0] font-bold">&rarr; AI Engine &rarr;</span>
              <span className="text-emerald-400 font-bold">Intelligent Decisions</span>
            </div>
          </div>

          {/* Visual Showcase: 3D AI Core + 5 Floating Insight Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Centerpiece (6 Cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                <img
                  src="/images/retail_growth_team_celebration.png"
                  alt="Enterprise Retail Strategy Team High-Five Success and Revenue Growth Monitor"
                  className="w-full h-full object-cover object-center select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Neural Commerce Engine Running</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 5 Floating Insight Cards (6 Cols) */}
            <div className="lg:col-span-6 space-y-3">
              
              {/* Card 1: Customer Intent Detected */}
              <div
                onClick={() => setActiveInsight('intent')}
                className={`cursor-pointer rounded-2xl p-4 border transition-all ${
                  activeInsight === 'intent'
                    ? 'bg-white/10 border-cyan-400/60 shadow-lg'
                    : 'bg-white/5 hover:bg-white/10 border-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-display">Customer Intent Detected</h4>
                      <p className="text-[11px] text-cyan-300 font-medium">Real-Time Propensity Scoring</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    High Purchase Intent
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal mt-2">
                  Visitor browsing pattern matches premium evening wear cluster. System triggers personalized store styling assistant and holds fitting room stall.
                </p>
              </div>

              {/* Card 2: Product Recommended */}
              <div
                onClick={() => setActiveInsight('recommended')}
                className={`cursor-pointer rounded-2xl p-4 border transition-all ${
                  activeInsight === 'recommended'
                    ? 'bg-white/10 border-cyan-400/60 shadow-lg'
                    : 'bg-white/5 hover:bg-white/10 border-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs">
                      <Tag className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-display">Product Recommended</h4>
                      <p className="text-[11px] text-purple-300 font-medium">Contextual Styling AI</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                    Curated Ensemble
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal mt-2">
                  Dynamically cross-references customer purchase history with current bag contents to suggest handcrafted leather accessories.
                </p>
              </div>

              {/* Card 3: Demand Increasing */}
              <div
                onClick={() => setActiveInsight('demand')}
                className={`cursor-pointer rounded-2xl p-4 border transition-all ${
                  activeInsight === 'demand'
                    ? 'bg-white/10 border-cyan-400/60 shadow-lg'
                    : 'bg-white/5 hover:bg-white/10 border-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-display">Demand Increasing</h4>
                      <p className="text-[11px] text-blue-300 font-medium">Micro-Market Surge Detection</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    Forecast Recalibrated
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal mt-2">
                  Detects localized outerwear demand acceleration 10 days in advance; modulates automated store replenishment orders in SAP S/4HANA.
                </p>
              </div>

              {/* Card 4: Inventory Risk */}
              <div
                onClick={() => setActiveInsight('risk')}
                className={`cursor-pointer rounded-2xl p-4 border transition-all ${
                  activeInsight === 'risk'
                    ? 'bg-white/10 border-cyan-400/60 shadow-lg'
                    : 'bg-white/5 hover:bg-white/10 border-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-display">Inventory Risk</h4>
                      <p className="text-[11px] text-rose-300 font-medium">Pre-Emptive Stockout Prevention</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                    Action Required
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal mt-2">
                  High-velocity sizes depleting at downtown flagship. AI autonomously books expedited inter-store balancing transfer from suburban hub.
                </p>
              </div>

              {/* Card 5: Promotion Opportunity */}
              <div
                onClick={() => setActiveInsight('promo')}
                className={`cursor-pointer rounded-2xl p-4 border transition-all ${
                  activeInsight === 'promo'
                    ? 'bg-white/10 border-cyan-400/60 shadow-lg'
                    : 'bg-white/5 hover:bg-white/10 border-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-display">Promotion Opportunity</h4>
                      <p className="text-[11px] text-emerald-300 font-medium">Margin-Safe Incentive</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    High Conversion
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal mt-2">
                  Targeted basket completion voucher dispatched to high-affinity loyalty segment with zero margin leakage.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5 — BUSINESS IMPACT + FINAL CONVERSION CTA
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white border-t border-slate-200 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold tracking-wide shadow-xs">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>Proven Retail Transformation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              From Better Experiences to Business Growth
            </h2>

            <p className="text-slate-600 text-base leading-relaxed font-normal">
              Delivering consistent, hyper-personalized retail across touchpoints translates directly into commercial performance.
            </p>
          </div>

          {/* 5 Highlight Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            
            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200 text-center space-y-3 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto rounded-xl bg-sky-100 text-[#0077B6] flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Top-Tier
              </p>
              <h3 className="text-sm font-bold text-slate-800 font-display">Better Customer Experience</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Frictionless cross-channel journeys with zero disjointed logins or fragmented carts.
              </p>
              <div className="pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-[#0077B6]">
                Flawless Journey
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200 text-center space-y-3 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto rounded-xl bg-cyan-100 text-[#00A3E0] flex items-center justify-center">
                <BarChart3 className="w-6 h-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Accelerated
              </p>
              <h3 className="text-sm font-bold text-slate-800 font-display">Higher Conversion</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                AI merchandising and tailored styling recommendations convert casual visitors into buyers.
              </p>
              <div className="pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-cyan-600">
                Optimized Basket Size
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200 text-center space-y-3 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto rounded-xl bg-blue-100 text-[#0077B6] flex items-center justify-center">
                <Boxes className="w-6 h-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Balanced
              </p>
              <h3 className="text-sm font-bold text-slate-800 font-display">Smarter Inventory</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Dynamic single-pool visibility prevents markdown write-offs and dead capital traps.
              </p>
              <div className="pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-blue-600">
                Zero Phantom Outages
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200 text-center space-y-3 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <PackageCheck className="w-6 h-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Same-Day
              </p>
              <h3 className="text-sm font-bold text-slate-800 font-display">Faster Fulfillment</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Ship-from-store and rapid click-and-collect ensure goods reach shoppers in hours.
              </p>
              <div className="pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-emerald-600">
                Sub-Hour Store Pick
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200 text-center space-y-3 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Enduring
              </p>
              <h3 className="text-sm font-bold text-slate-800 font-display">Stronger Loyalty</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Unified rewards programs and personalized clienteling elevate repeat purchase rates.
              </p>
              <div className="pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-purple-600">
                High Lifetime Value
              </div>
            </div>

          </div>

          {/* Cinematic Final CTA Card with 5th Visual */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl relative bg-slate-950 text-white">
            
            {/* Background Image: Future Retail Store */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/retail_future_cta.jpg"
                alt="Cinematic futuristic smart retail emporium at night with interactive OLED displays and digital shopping concierge"
                className="w-full h-full object-cover object-center opacity-30 select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
            </div>

            <div className="relative z-10 p-8 sm:p-14 lg:p-16 max-w-3xl space-y-6">
              <span className="px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide shadow-lg inline-block">
                Digital Retail Transformation
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-display tracking-tight">
                Ready to Build the Future of Retail?
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Partner with our digital retail enterprise architects. We will evaluate your omnichannel store network, 
                benchmark fulfillment agility, and implement a composable, clean-core SAP retail ecosystem.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => onOpenContact ? onOpenContact('Digital Retail Architecture Session') : null}
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

        </div>
      </section>

    </div>
  );
};

export default DigitalRetailSolutionPage;
