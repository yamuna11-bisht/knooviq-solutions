import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Boxes, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  AlertCircle, 
  Workflow, 
  Zap, 
  CheckCheck, 
  Eye, 
  Send, 
  ShieldCheck,
  Check,
  Factory,
  Store,
  Compass,
  Navigation,
  Layers,
  Network,
  Cpu,
  Database,
  Server,
  ScanLine,
  FileSpreadsheet,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface SupplyChainIntelligencePageProps {
  onOpenContact?: (service?: string) => void;
}

export const SupplyChainIntelligencePage: React.FC<SupplyChainIntelligencePageProps> = ({ onOpenContact }) => {
  useEffect(() => {
    document.title = 'Supply Chain Intelligence | Enterprise AI Products';
  }, []);

  const [activeFlowStep, setActiveFlowStep] = useState<number>(1);

  // Auto-cycle the "Intelligent Flow" step every 3.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFlowStep((prev) => (prev % 4) + 1);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const challenges = [
    {
      title: 'Disconnected Data',
      description: 'Siloed ERPs, carrier spreadsheets, and supplier emails create blind spots across operations.',
      impact: 'Information fragmentation & duplicate data',
      icon: Network,
      tag: 'Data Silos'
    },
    {
      title: 'Manual Processes',
      description: 'Manual dispatch calls, paper waybills, and status chasing delay critical execution cycles.',
      impact: 'High labor overhead & latency',
      icon: Clock,
      tag: 'Manual Lag'
    },
    {
      title: 'Limited Visibility',
      description: 'Opaque transit stages prevent proactive exception mitigation and inflate lead times.',
      impact: 'Zero predictive arrival notice',
      icon: Eye,
      tag: 'Transit Blind Spots'
    },
    {
      title: 'Operational Delays',
      description: 'Port bottlenecks, customs holds, and unexpected stockouts disrupt customer commitments.',
      impact: 'Costly SLA breach penalties',
      icon: AlertCircle,
      tag: 'Disruption Risk'
    }
  ];

  const flowSteps = [
    {
      step: 1,
      phase: 'Phase: Ingestion',
      name: 'Capture',
      title: 'Multisource Event Capture',
      desc: 'Ingest IoT telematics, EDI shipment notifications, port status feeds, and supplier ERP signals in real time.',
      icon: Compass,
      badge: 'Real-Time Telemetry'
    },
    {
      step: 2,
      phase: 'Phase: Analysis',
      name: 'Analyze',
      title: 'Predictive Network Telemetry',
      desc: 'Machine learning algorithms calculate route congestion, transit variance, and warehouse inventory thresholds.',
      icon: Cpu,
      badge: 'Predictive Routing'
    },
    {
      step: 3,
      phase: 'Phase: Execution',
      name: 'Automate',
      title: 'Autonomous Workflow Execution',
      desc: 'Auto-trigger purchase order allocation, carrier re-routing, stock replenishment, and customer notifications.',
      icon: Zap,
      badge: 'Touchless Dispatch'
    },
    {
      step: 4,
      phase: 'Phase: Optimization',
      name: 'Optimize',
      title: 'Continuous Route & Cost Tuning',
      desc: 'Dynamic load balancing reduces empty container mileage, minimizes fuel surcharges, and eliminates demurrage.',
      icon: Navigation,
      badge: 'Dynamic Efficiency'
    }
  ];

  const capabilities = [
    {
      title: 'Real-Time Visibility',
      desc: 'Track supply chain information across operations with end-to-end multi-tier milestone monitoring and global telemetry.',
      icon: Eye,
      tag: 'End-to-End Tracking'
    },
    {
      title: 'Intelligent Automation',
      desc: 'Reduce repetitive manual processes by auto-triggering PO dispatch, ASN generation, and automated carrier bookings.',
      icon: Zap,
      tag: 'Touchless Operations'
    },
    {
      title: 'Data-Driven Decisions',
      desc: 'Turn operational data into actionable insights with predictive stockout alerts and AI demand forecasting.',
      icon: Cpu,
      tag: 'Predictive Insights'
    },
    {
      title: 'Process Optimization',
      desc: 'Identify inefficiencies and improve workflows to continuously lower freight costs, demurrage, and cycle times.',
      icon: Workflow,
      tag: 'Continuous Optimization'
    }
  ];

  const strategicAdvantages = [
    {
      icon: Eye,
      title: 'Total Network Visibility',
      category: 'Autonomous Tracking',
      description: 'Gain unified real-time transparency across global suppliers, transit hubs, carrier fleets, and client docks.'
    },
    {
      icon: Zap,
      title: 'Instant Execution Cycles',
      category: 'Touchless Dispatch',
      description: 'Accelerate order-to-delivery workflows with automated exception triggers, re-routing, and synchronized dispatch.'
    },
    {
      icon: ShieldCheck,
      title: 'Proactive Risk Elimination',
      category: 'Disruption Resilience',
      description: 'Preempt port bottlenecks, customs holds, and stockout hazards before they impact critical customer commitments.'
    },
    {
      icon: Workflow,
      title: 'Native Enterprise Integration',
      category: 'Ecosystem Orchestration',
      description: 'Bidirectional sync connects seamlessly with SAP S/4HANA, Oracle SCM, and global carrier EDI networks.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#050B17] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* =========================================================================
          1. HERO SECTION (With Long Widescreen Visual & Executive Typography)
          ========================================================================= */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-slate-200 dark:border-white/10 bg-gradient-to-b from-slate-50 via-white to-slate-50/60 dark:from-[#050B17] dark:via-[#070E1C] dark:to-[#050B17]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00A3E0]/10 dark:bg-[#00A3E0]/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Value Proposition */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-6 space-y-6 text-center lg:text-left"
            >
              {/* Strategic Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/40 border-2 border-sky-200 dark:border-sky-800/80 text-xs text-[#0077B6] dark:text-cyan-300 font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />
                <span className="font-semibold text-slate-900 dark:text-white font-sans">Supply Chain Intelligence</span>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <span className="text-[#0077B6] dark:text-cyan-400 font-semibold font-sans">Autonomous Logistics Telemetry</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.18] font-display">
                End-to-End Supply Chain Orchestration From{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#0A1931] to-[#00A3E0] dark:from-white dark:via-cyan-200 dark:to-[#00A3E0]">
                  Supplier Origin
                </span>{' '}
                to Final Delivery Dock.
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl font-sans">
                Unify fragmented vendor networks, dynamic warehouse inventory, and multi-modal fleet shipments into one predictive digital twin. Automatically anticipate transit delays, optimize route dispatches, and trigger real-time SAP EWM and TM updates.
              </p>

              {/* Hero CTA Group */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => onOpenContact?.('Supply Chain Intelligence')}
                  className="px-7 py-3.5 rounded-xl bg-[#00A3E0] hover:bg-[#008bc0] text-white font-semibold text-sm shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 group cursor-pointer"
                >
                  <span>Request Live Logistics Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#supply-chain-friction"
                  className="px-6 py-3.5 rounded-xl bg-white dark:bg-[#0B1528] hover:bg-slate-50 dark:hover:bg-[#0E1A33] border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-all flex items-center gap-2 shadow-xs hover:-translate-y-0.5"
                >
                  <span>Explore Network Flow</span>
                  <ArrowRight className="w-4 h-4 text-[#00A3E0]" />
                </a>
              </div>

              {/* Executive Capability Highlights (No Numbers / Dark Borders / Interactive Animations) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t-2 border-slate-300 dark:border-slate-700/80 text-left">
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-[#00A3E0] flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <Compass className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Tracking</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Live Mesh</p>
                  <p className="text-[11px] text-[#0077B6] dark:text-cyan-400 font-medium mt-0.5 font-sans">Global Telemetry</p>
                </div>
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Security</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Zero Loss</p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5 font-sans">Seal Verified</p>
                </div>
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <Navigation className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Routing</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Dynamic Sync</p>
                  <p className="text-[11px] text-[#0077B6] dark:text-cyan-400 font-medium mt-0.5 font-sans">Autonomous Path</p>
                </div>
                <div className="group/item bg-white dark:bg-[#070E1C] p-3.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                    <Workflow className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Integration</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 font-display">Direct Sync</p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5 font-sans">SAP TM &amp; EWM</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Long Widescreen Visual Frame with High-Resolution Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="lg:col-span-6 relative flex justify-center"
            >
              <div className="relative w-full rounded-2xl p-1 bg-gradient-to-b from-[#00A3E0]/30 via-cyan-500/15 to-blue-600/10 dark:from-[#00A3E0]/40 dark:via-white/10 dark:to-transparent shadow-2xl group">
                
                {/* Long Image Container with Dedicated Height and Darker Border */}
                <div className="relative rounded-[14px] bg-[#070E1C] border-2 border-slate-300/40 dark:border-slate-700/80 overflow-hidden shadow-2xl h-[380px] sm:h-[460px] lg:h-[500px] xl:h-[540px]">
                  <img 
                    src="/images/supply_chain_intelligence_hero.jpg" 
                    alt="Supply Chain Intelligence - Autonomous Global Logistics Network" 
                    className="w-full h-full object-cover object-center select-none group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070E1C]/85 via-transparent to-transparent pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#070E1C]/90 backdrop-blur-md text-cyan-300 border-2 border-cyan-500/40 shadow-lg flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      GLOBAL MESH TELEMETRY ACTIVE
                    </span>
                  </div>

                  {/* Bottom Floating Telemetry Strip (No Numbers / Qualitative Assurance) */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 p-3 rounded-xl bg-[#070E1C]/95 backdrop-blur-md border-2 border-slate-700 shadow-xl text-xs">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-white text-[11px] font-sans">Continuous Route Sync Verified</div>
                        <div className="text-[9px] text-slate-400 font-mono">Dynamic Multi-Tier Milestone Monitoring</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                      LIVE GPS SYNC
                    </span>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SUPPLY CHAIN CHALLENGES (4 Compact Cards With Darker Borders)
          ========================================================================= */}
      <section id="supply-chain-friction" className="py-16 sm:py-24 bg-white dark:bg-[#070E1C] border-y-2 border-slate-300 dark:border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0077B6] dark:text-cyan-400 font-mono">
              Supply Chain Friction
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              From Supply Chain Complexity to Clarity
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed font-sans">
              Traditional supply chains struggle with blind spots, disconnected spreadsheets, and reactive firefighting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((c, idx) => {
              const IconComp = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-2xl p-6 bg-slate-50/80 dark:bg-[#0B1528] border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-[#00A3E0]/10 hover:-translate-y-1.5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-red-500/10 dark:bg-red-500/20 text-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] px-2.5 py-1 rounded-md bg-white dark:bg-white/10 text-slate-700 dark:text-slate-300 font-medium font-mono border border-slate-300 dark:border-slate-700">
                        {c.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#00A3E0] transition-colors font-display">
                      {c.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal font-sans">
                      {c.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t-2 border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                    <span className="text-red-500 dark:text-red-400 font-semibold font-mono">Friction:</span> {c.impact}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. INTELLIGENT FLOW (Interactive Cognitive Showcase with Image & Rich Color)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] dark:bg-[#050B17] border-y-2 border-slate-300 dark:border-slate-800 relative overflow-hidden">
        {/* Colorful ambient background glows */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 dark:bg-cyan-500/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-600/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0077B6] dark:text-cyan-400 font-mono">
              End-To-End Automation Pipeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              Autonomous Fulfillment Flow
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed font-sans">
              A continuously self-optimizing closed-loop execution flow from demand intake to final customer fulfillment.
            </p>
          </div>

          {/* Master-Detail Interactive Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: 4 Dynamic Interactive Stage Cards */}
            <div className="lg:col-span-5 space-y-3.5">
              {flowSteps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeFlowStep === step.step;
                const stepThemes = [
                  {
                    borderActive: 'border-cyan-500 dark:border-cyan-400',
                    bgActive: 'bg-gradient-to-r from-cyan-500/15 via-cyan-500/5 to-white dark:to-[#070E1C] border-l-4 border-l-cyan-500',
                    iconActive: 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30',
                    badgeActive: 'text-cyan-600 dark:text-cyan-400',
                    tagBg: 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-500/30'
                  },
                  {
                    borderActive: 'border-purple-500 dark:border-purple-400',
                    bgActive: 'bg-gradient-to-r from-purple-500/15 via-purple-500/5 to-white dark:to-[#070E1C] border-l-4 border-l-purple-500',
                    iconActive: 'bg-purple-600 text-white shadow-lg shadow-purple-500/30',
                    badgeActive: 'text-purple-600 dark:text-purple-400',
                    tagBg: 'bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30'
                  },
                  {
                    borderActive: 'border-emerald-500 dark:border-emerald-400',
                    bgActive: 'bg-gradient-to-r from-emerald-500/15 via-emerald-500/5 to-white dark:to-[#070E1C] border-l-4 border-l-emerald-500',
                    iconActive: 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30',
                    badgeActive: 'text-emerald-600 dark:text-emerald-400',
                    tagBg: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
                  },
                  {
                    borderActive: 'border-blue-500 dark:border-blue-400',
                    bgActive: 'bg-gradient-to-r from-blue-500/15 via-blue-500/5 to-white dark:to-[#070E1C] border-l-4 border-l-blue-500',
                    iconActive: 'bg-blue-600 text-white shadow-lg shadow-blue-500/30',
                    badgeActive: 'text-blue-600 dark:text-blue-400',
                    tagBg: 'bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30'
                  }
                ][idx % 4];

                return (
                  <div
                    key={step.step}
                    onClick={() => setActiveFlowStep(step.step)}
                    className={`cursor-pointer rounded-2xl p-4 sm:p-5 transition-all duration-300 border-2 ${
                      isActive
                        ? `bg-white dark:bg-[#070E1C] ${stepThemes.borderActive} ${stepThemes.bgActive} shadow-lg scale-[1.02]`
                        : 'bg-white/70 dark:bg-[#0B1528]/70 border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-white dark:hover:bg-[#0B1528]'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                        isActive 
                          ? stepThemes.iconActive 
                          : 'bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-400'
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                            isActive ? stepThemes.badgeActive : 'text-slate-500 dark:text-slate-400'
                          }`}>
                            {step.phase}
                          </span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                            isActive ? stepThemes.tagBg : 'bg-slate-100 dark:bg-white/5 text-slate-500 border-slate-200 dark:border-white/5'
                          }`}>
                            {step.badge}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                          {step.title}
                        </h3>

                        <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-1 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Interactive Autonomous Cognitive Simulator (100% Pure Code & SVG, Zero Images) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-blue-500/30 via-cyan-500/20 to-emerald-600/20 dark:from-blue-500/40 dark:via-cyan-500/20 dark:to-transparent shadow-2xl">
                
                <div className="relative rounded-[14px] bg-[#070E1C] border-2 border-slate-300 dark:border-slate-700 overflow-hidden shadow-2xl p-5 sm:p-7 min-h-[460px] sm:min-h-[500px] flex flex-col justify-between">
                  
                  {/* Subtle ambient internal glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

                  {/* Terminal Window Header Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-2 border-slate-800 relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-[11px] font-mono font-bold text-slate-400">
                        knooviq-kernel://logistics-runtime
                      </span>
                    </div>

                    {/* Interactive Step Quick-Selectors */}
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4].map((s) => (
                        <button
                          key={s}
                          onClick={() => setActiveFlowStep(s)}
                          className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold transition-all cursor-pointer ${
                            activeFlowStep === s
                              ? 'bg-[#00A3E0] text-white shadow-md shadow-cyan-500/30'
                              : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          STAGE 0{s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Main Live Stage Simulation Canvas (AnimatePresence based on activeFlowStep) */}
                  <div className="py-6 flex-1 flex items-center justify-center relative z-10">
                    <AnimatePresence mode="wait">
                      {activeFlowStep === 1 && (
                        <motion.div
                          key="sc-stage-1"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                              Multimodal Document Stream Ingested
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                              Global Customs Active
                            </span>
                          </div>

                          {/* Ingestion Stream Cards */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="p-3.5 rounded-xl bg-white/5 border border-cyan-500/30 space-y-2">
                              <div className="flex items-center justify-between">
                                <Truck className="h-4 w-4 text-cyan-400" />
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">Ocean &amp; Air Freight</div>
                              <p className="text-[10px] text-slate-400 font-sans">EDI 214 / 304, Bill of Lading, Manifests</p>
                              <div className="text-[9px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded w-fit">Continuous Feed</div>
                            </div>

                            <div className="p-3.5 rounded-xl bg-white/5 border border-purple-500/30 space-y-2">
                              <div className="flex items-center justify-between">
                                <Compass className="h-4 w-4 text-purple-400" />
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">Customs Declarations</div>
                              <p className="text-[10px] text-slate-400 font-sans">Brokerage paperwork &amp; tariff filings</p>
                              <div className="text-[9px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded w-fit">Automated Clear</div>
                            </div>

                            <div className="p-3.5 rounded-xl bg-white/5 border border-blue-500/30 space-y-2">
                              <div className="flex items-center justify-between">
                                <Boxes className="h-4 w-4 text-blue-400" />
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">Warehouse Receiving</div>
                              <p className="text-[10px] text-slate-400 font-sans">Packing slips &amp; cross-dock intake scans</p>
                              <div className="text-[9px] font-mono text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded w-fit">Direct Ingest</div>
                            </div>
                          </div>

                          {/* Live Ingestion Telemetry Bar */}
                          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                              <span className="text-[11px] text-slate-300 font-sans">Unified multi-modal intake across global freight corridors</span>
                            </div>
                            <span className="text-[10px] font-mono font-bold text-cyan-300">STREAMING</span>
                          </div>
                        </motion.div>
                      )}

                      {activeFlowStep === 2 && (
                        <motion.div
                          key="sc-stage-2"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                              Spatial Parsing &amp; Shipment Cognition
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
                              Neural Vision Active
                            </span>
                          </div>

                          {/* Simulated Interactive Document Scanner Sheet */}
                          <div className="relative p-4 rounded-xl bg-white/5 border-2 border-purple-500/40 overflow-hidden space-y-3">
                            {/* Animated Scanner Laser Bar */}
                            <motion.div
                              animate={{ y: [-10, 130, -10] }}
                              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                              className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_15px_#a855f7] pointer-events-none"
                            />

                            {/* Extracted Bounding Box Chips */}
                            <div className="flex items-center justify-between p-2 rounded-lg bg-purple-500/10 border border-purple-500/30">
                              <div className="flex items-center gap-2">
                                <ScanLine className="h-3.5 w-3.5 text-purple-400" />
                                <span className="text-[11px] text-white font-mono font-bold">Container, Seal &amp; Vessel ID</span>
                              </div>
                              <span className="text-[10px] font-mono text-emerald-400 font-semibold">MSCU-849204 Verified</span>
                            </div>

                            <div className="flex items-center justify-between p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                              <div className="flex items-center gap-2">
                                <FileSpreadsheet className="h-3.5 w-3.5 text-cyan-400" />
                                <span className="text-[11px] text-white font-mono font-bold">Multimodal Routing &amp; Origin Matrix</span>
                              </div>
                              <span className="text-[10px] font-mono text-cyan-300 font-semibold">Structured Grid Parsed</span>
                            </div>

                            <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                              <div className="flex items-center gap-2">
                                <CheckCheck className="h-3.5 w-3.5 text-emerald-400" />
                                <span className="text-[11px] text-white font-mono font-bold">HS Harmonized Tariff Codes</span>
                              </div>
                              <span className="text-[10px] font-mono text-emerald-400 font-semibold">Normalized &amp; Reconciled</span>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-between text-xs">
                            <span className="text-[11px] text-slate-300 font-sans">Cognitive vision maps unstructured shipping documents into standardized schemas</span>
                            <span className="text-[10px] font-mono font-bold text-purple-300">PARSED</span>
                          </div>
                        </motion.div>
                      )}

                      {activeFlowStep === 3 && (
                        <motion.div
                          key="sc-stage-3"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              Autonomous 3-Way Logistics Match
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                              Zero Drift Guarantee
                            </span>
                          </div>

                          {/* 3-Way Match Verification Triad */}
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="p-3 rounded-xl bg-white/5 border-2 border-emerald-500/40 space-y-1">
                              <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Record A</div>
                              <div className="text-xs font-bold text-white font-display">Purchase Order</div>
                              <div className="text-[9px] text-slate-400 font-sans">Contracted items</div>
                            </div>
                            <div className="p-3 rounded-xl bg-white/5 border-2 border-emerald-500/40 space-y-1">
                              <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Record B</div>
                              <div className="text-xs font-bold text-white font-display">Bill of Lading</div>
                              <div className="text-[9px] text-slate-400 font-sans">Freight manifest</div>
                            </div>
                            <div className="p-3 rounded-xl bg-white/5 border-2 border-emerald-500/40 space-y-1">
                              <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Record C</div>
                              <div className="text-xs font-bold text-white font-display">Proof of Delivery</div>
                              <div className="text-[9px] text-slate-400 font-sans">Dock inspection</div>
                            </div>
                          </div>

                          {/* Audit Verification Checklist */}
                          <div className="p-3.5 rounded-xl bg-white/5 border border-slate-700 space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-300 font-sans flex items-center gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                                Manifest vs Physical Pallet Count Alignment
                              </span>
                              <span className="text-[10px] font-mono text-emerald-400 font-bold">MATCHED</span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-300 font-sans flex items-center gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                                Port Demurrage &amp; Detention Risk Screening
                              </span>
                              <span className="text-[10px] font-mono text-emerald-400 font-bold">CLEARED</span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-300 font-sans flex items-center gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                                Carrier Rate &amp; Accessorial Fee Surcharge Check
                              </span>
                              <span className="text-[10px] font-mono text-emerald-400 font-bold">VALIDATED</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeFlowStep === 4 && (
                        <motion.div
                          key="sc-stage-4"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                              TMS, WMS &amp; Enterprise ERP Sync
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-300 border border-blue-500/30">
                              Instant Dispatch
                            </span>
                          </div>

                          {/* Connected Logistics Ecosystem Hub */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="p-3.5 rounded-xl bg-white/5 border border-blue-500/30 text-center space-y-1.5">
                              <div className="w-8 h-8 mx-auto rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center">
                                <Database className="h-4 w-4" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">SAP S/4HANA SCM</div>
                              <span className="inline-block text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                Ledger Synced
                              </span>
                            </div>

                            <div className="p-3.5 rounded-xl bg-white/5 border border-blue-500/30 text-center space-y-1.5">
                              <div className="w-8 h-8 mx-auto rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center">
                                <Server className="h-4 w-4" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">Manhattan / BlueYonder</div>
                              <span className="inline-block text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                Docks Scheduled
                              </span>
                            </div>

                            <div className="p-3.5 rounded-xl bg-white/5 border border-blue-500/30 text-center space-y-1.5">
                              <div className="w-8 h-8 mx-auto rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center">
                                <Navigation className="h-4 w-4" />
                              </div>
                              <div className="text-xs font-bold text-white font-display">Carrier Telematics</div>
                              <span className="inline-block text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                Milestones Dispatched
                              </span>
                            </div>
                          </div>

                          {/* Audit Logging Assurance */}
                          <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-between text-xs">
                            <span className="text-[11px] text-slate-300 font-sans">Full multimodal custody chain and compliance events logged cryptographically</span>
                            <span className="text-[10px] font-mono font-bold text-blue-300">ARCHIVED</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Terminal Window Footer Bar with Interactive Navigation Controls */}
                  <div className="pt-4 border-t-2 border-slate-800 flex items-center justify-between text-xs relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] text-slate-400 font-mono">
                        Fulfillment Engine: <span className="text-emerald-400 font-bold">Autonomous Execution Active</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveFlowStep((prev) => (prev === 1 ? 4 : prev - 1))}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-slate-700 transition-all cursor-pointer"
                        title="Previous Stage"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => setActiveFlowStep((prev) => (prev === 4 ? 1 : prev + 1))}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-slate-700 transition-all cursor-pointer"
                        title="Next Stage"
                      >
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          4. INTELLIGENT CAPABILITIES (4 Compact Cards With Darker Borders)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white dark:bg-[#070E1C] border-t-2 border-slate-300 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0077B6] dark:text-cyan-400 font-mono">
              Platform Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              Built for Smarter Supply Chains
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed font-sans">
              Next-generation intelligence tools to orchestrate resilient, agile logistics networks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-2xl p-6 bg-slate-50/80 dark:bg-[#0B1528] border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-[#00A3E0]/10 hover:-translate-y-1.5"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[#00A3E0]/10 text-[#00A3E0] dark:bg-cyan-500/20 dark:text-cyan-300 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00A3E0] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#00A3E0] transition-colors font-display">
                      {cap.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal font-sans">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t-2 border-slate-200 dark:border-slate-800">
                    <span className="text-[11px] px-2.5 py-1 rounded-md bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 font-medium font-mono border border-slate-300 dark:border-slate-700">
                      {cap.tag}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. STRATEGIC ADVANTAGES (No Numbers, Pure Executive Value)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] dark:bg-[#050B17] border-t-2 border-slate-300 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0077B6] dark:text-cyan-400 font-mono">
              Operational Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              Move Faster. Operate Smarter.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed font-sans">
              Eliminate friction and unblock working capital across your entire fulfillment ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicAdvantages.map((b, idx) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group rounded-2xl p-6 bg-white dark:bg-[#070E1C] border-2 border-slate-300 dark:border-slate-700 hover:border-[#00A3E0] dark:hover:border-[#00A3E0] shadow-sm hover:shadow-xl hover:shadow-[#00A3E0]/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#00A3E0]/10 text-[#00A3E0] dark:bg-cyan-500/20 dark:text-cyan-300 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00A3E0] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400">
                        {b.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mt-1 group-hover:text-[#00A3E0] transition-colors">
                        {b.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      {b.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t-2 border-slate-200 dark:border-slate-800">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 font-mono">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Executive Standard
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. FINAL CTA SECTION
          ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#070E1C] border-t-2 border-slate-300 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00A3E0]/5 via-transparent to-blue-500/5 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0077B6] dark:text-cyan-400 font-mono">
            Resilient Fulfillment Network
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
            Build a Smarter Supply Chain
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal font-sans">
            Bring predictive intelligence, dynamic dispatching, and end-to-end telemetry to every stage of your supply chain.
          </p>

          <div className="pt-2 flex justify-center">
            <button
              onClick={() => onOpenContact?.('Supply Chain Intelligence')}
              className="px-8 py-4 rounded-xl bg-[#00A3E0] hover:bg-[#008bc0] text-white font-semibold text-sm shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 group cursor-pointer"
            >
              <span>Request a Demo</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SupplyChainIntelligencePage;
