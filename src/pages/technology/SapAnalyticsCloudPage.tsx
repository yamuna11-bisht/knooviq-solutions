import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  TrendingUp,
  LineChart,
  PieChart,
  Layers,
  Cpu,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Search,
  Sparkles,
  Sliders,
  DollarSign,
  Globe2,
  Building2,
  Workflow,
  Compass,
  Zap,
  ChevronRight,
  Database,
  Eye,
  Filter,
  RefreshCw,
  SlidersHorizontal,
  Table
} from 'lucide-react';

interface TechnologyPageProps {
  onOpenContact: (defaultService?: string) => void;
}

interface RegionKpi {
  regionName: string;
  revenue: string;
  revenueGrowth: string;
  ebitda: string;
  ebitdaMargin: string;
  dso: string;
  workingCapital: string;
  chartBars: { label: string; height: string; val: string }[];
}

const REGION_KPIS: Record<string, RegionKpi> = {
  global: {
    regionName: 'Global Consolidated Portfolio',
    revenue: '$482.4M',
    revenueGrowth: '+14.2% YoY',
    ebitda: '$94.6M',
    ebitdaMargin: '19.6%',
    dso: '41 Days',
    workingCapital: '$62.1M Optimized',
    chartBars: [
      { label: 'Q1', height: '60%', val: '$112M' },
      { label: 'Q2', height: '75%', val: '$124M' },
      { label: 'Q3', height: '85%', val: '$136M' },
      { label: 'Q4 (Proj)', height: '95%', val: '$150M' }
    ]
  },
  na: {
    regionName: 'North America Commercial Unit',
    revenue: '$218.6M',
    revenueGrowth: '+18.5% YoY',
    ebitda: '$48.1M',
    ebitdaMargin: '22.0%',
    dso: '38 Days',
    workingCapital: '$28.4M Optimized',
    chartBars: [
      { label: 'Q1', height: '55%', val: '$48M' },
      { label: 'Q2', height: '70%', val: '$54M' },
      { label: 'Q3', height: '88%', val: '$62M' },
      { label: 'Q4 (Proj)', height: '98%', val: '$72M' }
    ]
  },
  emea: {
    regionName: 'EMEA Corporate Unit',
    revenue: '$174.2M',
    revenueGrowth: '+9.8% YoY',
    ebitda: '$31.8M',
    ebitdaMargin: '18.2%',
    dso: '44 Days',
    workingCapital: '$21.7M Optimized',
    chartBars: [
      { label: 'Q1', height: '65%', val: '$41M' },
      { label: 'Q2', height: '72%', val: '$43M' },
      { label: 'Q3', height: '78%', val: '$45M' },
      { label: 'Q4 (Proj)', height: '85%', val: '$49M' }
    ]
  },
  apac: {
    regionName: 'APAC High-Growth Sector',
    revenue: '$89.6M',
    revenueGrowth: '+26.4% YoY',
    ebitda: '$14.7M',
    ebitdaMargin: '16.4%',
    dso: '36 Days',
    workingCapital: '$12.0M Optimized',
    chartBars: [
      { label: 'Q1', height: '45%', val: '$18M' },
      { label: 'Q2', height: '65%', val: '$22M' },
      { label: 'Q3', height: '82%', val: '$26M' },
      { label: 'Q4 (Proj)', height: '100%', val: '$31M' }
    ]
  }
};

export const SapAnalyticsCloudPage: React.FC<TechnologyPageProps> = ({ onOpenContact }) => {
  const [activeRegion, setActiveRegion] = useState<string>('global');
  const [studioTab, setStudioTab] = useState<'bi' | 'xpa'>('bi');
  const [naturalQuery, setNaturalQuery] = useState<string>('Show margin variance for top 5 product categories in EMEA');

  const currentKpis = REGION_KPIS[activeRegion] || REGION_KPIS.global;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white">

      {/* =========================================================================
          HERO: Interactive Executive BI Cockpit & Financial KPI Modeler
          ========================================================================= */}
      <section className="relative pt-28 sm:pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#0A1B3B] via-[#071329] to-[#040B17] text-white">
        
        {/* Subtle grid styling */}
        <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3E0]">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>SAP ANALYTICS CLOUD (SAC) &bull; AUGMENTED BI & xP&amp;A</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Unified Executive Cockpits & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3E0] via-cyan-300 to-sky-200">
                Predictive Extended Planning (xP&amp;A)
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Bridge the divide between retrospective historical reporting and real-time strategic foresight. SAC brings augmented BI, driver-based financial simulation, and machine learning forecasting directly into the hands of C-suite leaders.
            </p>
          </div>

          {/* Interactive Live Cockpit Frame */}
          <div className="max-w-5xl mx-auto rounded-2xl border-2 border-[#00A3E0]/40 bg-[#08152B]/95 p-6 shadow-2xl backdrop-blur-xl">
            
            {/* Cockpit Header Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  LIVE S/4HANA CDS TELEMETRY: {currentKpis.regionName}
                </span>
              </div>

              {/* Dimension Filter Buttons */}
              <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/10">
                <Filter className="w-3.5 h-3.5 text-slate-400 ml-2" />
                {[
                  { key: 'global', label: 'Global' },
                  { key: 'na', label: 'North America' },
                  { key: 'emea', label: 'EMEA' },
                  { key: 'apac', label: 'APAC' }
                ].map((region) => (
                  <button
                    key={region.key}
                    onClick={() => setActiveRegion(region.key)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      activeRegion === region.key
                        ? 'bg-[#00A3E0] text-white shadow-sm font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {region.label}
                  </button>
                ))}
              </div>
            </div>

            {/* KPI Cards Strip */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRegion}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
              >
                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Revenue Run-Rate</span>
                  <div className="text-2xl font-black text-white font-mono mt-1">{currentKpis.revenue}</div>
                  <span className="text-[11px] text-emerald-400 font-semibold">{currentKpis.revenueGrowth}</span>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">EBITDA &amp; Margin</span>
                  <div className="text-2xl font-black text-cyan-300 font-mono mt-1">{currentKpis.ebitda}</div>
                  <span className="text-[11px] text-slate-300 font-semibold">{currentKpis.ebitdaMargin} Margin</span>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Days Sales Out (DSO)</span>
                  <div className="text-2xl font-black text-white font-mono mt-1">{currentKpis.dso}</div>
                  <span className="text-[11px] text-emerald-400 font-semibold">-5.2 Days Improvement</span>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Working Capital</span>
                  <div className="text-2xl font-black text-emerald-400 font-mono mt-1">{currentKpis.workingCapital}</div>
                  <span className="text-[11px] text-slate-300 font-semibold">Live Liquidity Buffer</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Simulated Visual Chart Bar & Natural Language Query */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
              
              {/* Visual Bars (7 cols) */}
              <div className="lg:col-span-7 p-4 rounded-xl bg-black/30 border border-white/10">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-3">
                  <span>Quarterly Revenue Trajectory &amp; Smart Forecast</span>
                  <span className="text-[#00A3E0] font-bold">SMART PREDICT: CONFIDENCE 98.2%</span>
                </div>
                
                <div className="grid grid-cols-4 gap-4 h-36 items-end pt-4 pb-2 border-b border-white/10">
                  {currentKpis.chartBars.map((bar, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 h-full justify-end">
                      <span className="text-[11px] font-mono text-cyan-300 font-bold">{bar.val}</span>
                      <div 
                        style={{ height: bar.height }} 
                        className="w-full bg-gradient-to-t from-[#00A3E0] to-cyan-400 rounded-t-md transition-all duration-500 shadow-lg shadow-[#00A3E0]/20"
                      />
                      <span className="text-[10px] font-mono text-slate-400">{bar.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Natural Language "Search to Insight" (5 cols) */}
              <div className="lg:col-span-5 p-4 rounded-xl bg-black/30 border border-white/10 space-y-3">
                <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SEARCH TO INSIGHT (NATURAL LANGUAGE BI)</span>
                </span>
                <p className="text-xs text-slate-300 leading-snug">
                  Query enterprise datasets without writing complex SQL or waiting for BI teams to build static dashboards.
                </p>
                <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-xs text-slate-200 font-mono flex items-center gap-2">
                  <Search className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                  <span className="truncate">{naturalQuery}</span>
                </div>
                <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Direct live CDS binding &bull; Zero data duplication</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: DUAL-PANE STORYBOARD STUDIO (BI vs xP&A)
          ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#070E1C] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 text-xs font-mono font-bold uppercase text-blue-700 dark:text-blue-300 mb-3">
              <Workflow className="w-3.5 h-3.5" />
              <span>DUAL CAPABILITY ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              One Unified Environment: Augmented BI &amp; Enterprise Planning
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
              Unlike disparate point solutions that separate analytics from financial forecasting, SAC integrates executive storytelling and driver-based planning in a single semantic model.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex justify-center gap-3 mb-10">
            <button
              onClick={() => setStudioTab('bi')}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all ${
                studioTab === 'bi'
                  ? 'bg-[#00A3E0] text-white shadow-lg shadow-[#00A3E0]/25'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Augmented Business Intelligence (BI)</span>
            </button>
            <button
              onClick={() => setStudioTab('xpa')}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all ${
                studioTab === 'xpa'
                  ? 'bg-[#00A3E0] text-white shadow-lg shadow-[#00A3E0]/25'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Extended Planning &amp; Analysis (xP&amp;A)</span>
            </button>
          </div>

          {/* Deep-Dive Grid for Selected Tab */}
          <AnimatePresence mode="wait">
            {studioTab === 'bi' ? (
              <motion.div
                key="bi"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/5 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-[#00A3E0] flex items-center justify-center font-bold">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Smart Insights &amp; Variance Analysis</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    With one click on any data point, automated machine learning algorithms examine underlying dimensions, surfacing primary root causes behind margin compressions or cost spikes.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/5 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
                    <Database className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Direct Live CDS Views</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    Connect directly to SAP S/4HANA and SAP Datasphere via live tunnels. Experience sub-second reporting without data extraction, data replication, or loss of ERP authorization security.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/5 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Joule Embedded Story Authoring</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    Prompt Joule to automatically assemble complete executive presentation decks with formatted responsive charts, variance annotations, and bulleted takeaways in seconds.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="xpa"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/5 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Driver-Based What-If Simulations</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    Adjust key macro drivers like raw material price fluctuations, exchange rates, or employee attrition to instantaneously recalculate downstream P&amp;L impact across all business units.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/5 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-[#00A3E0] flex items-center justify-center font-bold">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Collaborative Multi-Entity Workflows</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    Orchestrate annual budget submissions across regional controllers with structured approval workflows, automated currency translations, and built-in audit lockups.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/5 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Smart Predict Machine Learning</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    Augment human financial planning with algorithmic forecasts that learn from historical cyclicality, macroeconomic indicators, and recent sales trends with zero coding required.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PRE-BUILT INDUSTRY CONTENT BLUEPRINTS
          ========================================================================= */}
      <section className="py-20 bg-slate-100 dark:bg-[#050C1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono font-bold uppercase text-cyan-500 mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>TURNKEY INDUSTRY PACKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Pre-Configured Analytical Business Blueprints
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
              Accelerate time-to-value with Knooviq's verified SAC content blueprints tailored to industry-specific regulatory KPIs and financial reporting standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-white dark:bg-[#08152B] border border-slate-200 dark:border-white/10 shadow-lg space-y-3">
              <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase block">MANUFACTURING</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Plant OEE &amp; Cost Rollup Cockpit</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Connect shop floor production telemetry to financial cost centers, monitoring machine downtime costs and scrap variances.
              </p>
              <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-100 dark:border-white/5">
                Target: Plant Managers &amp; Controllers
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#08152B] border border-slate-200 dark:border-white/10 shadow-lg space-y-3">
              <span className="text-xs font-mono font-bold text-purple-500 uppercase block">RETAIL &amp; CPG</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Merchandise Financial Planning</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Multi-channel open-to-buy planning, promotional markdown optimization, and store-level revenue margin simulations.
              </p>
              <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-100 dark:border-white/5">
                Target: Category Merchandisers &amp; CFOs
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#08152B] border border-slate-200 dark:border-white/10 shadow-lg space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-500 uppercase block">SERVICES &amp; CONSULTING</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Resource Utilization &amp; Margin Suite</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Track billable headcount utilization, fixed-price project burn rates, and billing write-offs across global delivery teams.
              </p>
              <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-100 dark:border-white/5">
                Target: Practice Leaders &amp; Operations
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#08152B] border border-slate-200 dark:border-white/10 shadow-lg space-y-3">
              <span className="text-xs font-mono font-bold text-amber-500 uppercase block">BANKING &amp; FINTECH</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Liquidity Stress Testing &amp; ALM</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Dynamic balance sheet simulation under shifting central bank interest rates, liquidity coverage ratio (LCR) modeling.
              </p>
              <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-100 dark:border-white/5">
                Target: Treasury &amp; Risk Committees
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CALL TO ACTION
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-br from-[#061426] via-[#0A1B3B] to-[#040D1A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono font-bold uppercase text-cyan-300">
            <Zap className="w-3.5 h-3.5" />
            <span>SAC DEPLOYMENT FAST-TRACK</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Transform Your Executive Reporting <br />
            <span className="text-[#00A3E0]">With Live SAC Dashboards</span>
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Eliminate manual spreadsheet consolidation. Deploy certified SAP Analytics Cloud live connections to your S/4HANA system in weeks.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact('SAP Analytics Cloud Assessment')}
              className="px-8 py-4 rounded-xl font-bold text-sm bg-[#00A3E0] text-white hover:bg-[#008cc0] shadow-xl shadow-[#00A3E0]/30 transition-all flex items-center gap-2 group"
            >
              <span>Schedule Live SAC Executive Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/technology/sap-datasphere"
              className="px-6 py-4 rounded-xl font-semibold text-sm text-slate-300 hover:text-white border border-white/20 hover:border-white/40 transition-all"
            >
              <span>Explore SAP Datasphere &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
