import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Layout, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Eye, 
  Compass, 
  ShieldCheck, 
  RefreshCw, 
  Lock, 
  Bot, 
  WifiOff, 
  Scan,
  Grid,
  Check
} from 'lucide-react';

interface TechnologyPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const SapFioriPage: React.FC<TechnologyPageProps> = ({ onOpenContact }) => {
  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-blue-600 selection:text-white font-sans antialiased">
      
      {/* =========================================================================
          SECTION 1: RESPONSIVE MULTI-DEVICE ENTERPRISE HERO
          (Blue & White, Pure Information, Multi-Device Form Factors Showcase)
          ========================================================================= */}
      <section className="relative w-full min-h-[640px] lg:min-h-[700px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 overflow-hidden bg-blue-950 border-b border-blue-900">
        
        {/* Full-Bleed Enterprise Background Image with Blue Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80" 
            alt="SAP Fiori Modern Human-Centered Enterprise Workspace" 
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/75 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-blue-950/50 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-6 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 backdrop-blur-md border border-blue-500/30 text-xs font-mono font-bold uppercase tracking-wider text-blue-300">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>ENTERPRISE USER EXPERIENCE &bull; SAP FIORI 3 & HORIZON</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                  Consumer-Grade Simplicity for <br />
                  <span className="text-blue-400">
                    Mission-Critical Workflows
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed pt-1">
                  Transform complex SAP GUI transactions into intuitive, role-based, multi-device digital experiences. Empower desktop knowledge workers, tablet field managers, and mobile warehouse operators with consistent Horizon design and context-aware Joule AI.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenContact('SAP Fiori Modernization & UX Assessment')}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 group"
                >
                  <span>Request UX Modernization Assessment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#floorplan-gallery"
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-blue-400/30 text-white font-semibold text-sm backdrop-blur-md transition-all flex items-center gap-2"
                >
                  <Layout className="w-4 h-4 text-blue-400" />
                  <span>Explore 4 Core Floorplans</span>
                </a>
              </div>

              {/* Enterprise UX Core Metric Badges */}
              <div className="pt-4 grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-white/10 border border-blue-400/20 backdrop-blur-md">
                  <div className="text-lg font-black text-white font-mono">80% Less</div>
                  <div className="text-[11px] text-blue-200">Front-End Boilerplate</div>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-blue-400/20 backdrop-blur-md">
                  <div className="text-lg font-black text-blue-400 font-mono">100%</div>
                  <div className="text-[11px] text-blue-200">Upgrade Resilient</div>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-blue-400/20 backdrop-blur-md">
                  <div className="text-lg font-black text-white font-mono">WCAG 2.1</div>
                  <div className="text-[11px] text-blue-200">AA Standard Compliant</div>
                </div>
              </div>
            </div>

            {/* Right Column: Multi-Device Enterprise Form Factors Showcase */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Desktop Viewport Architecture Card */}
              <div className="rounded-2xl bg-white p-5 border border-blue-100 shadow-xl space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                      <Monitor className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-blue-950">Desktop Horizon Shell (1920px)</div>
                      <div className="text-[11px] text-slate-500">Global Supply Chain Control Tower</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1 font-semibold">
                    <Bot className="w-3 h-3" /> Joule Copilot Attached
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="text-slate-500 text-[11px]">Purchase Requisitions</div>
                    <div className="text-base font-bold text-blue-950 font-mono">14 Pending Release</div>
                    <div className="text-[10px] text-blue-600 font-medium mt-0.5">Automated Risk Scoring</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="text-slate-500 text-[11px]">Stock Transport Orders</div>
                    <div className="text-base font-bold text-blue-950 font-mono">38 In Transit</div>
                    <div className="text-[10px] text-blue-600 font-medium mt-0.5">Live GPS Sensor Stream</div>
                  </div>
                </div>
              </div>

              {/* Tablet & Mobile Architecture Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Tablet Card */}
                <div className="rounded-2xl bg-white p-4 border border-blue-100 shadow-lg space-y-2">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                      <Tablet className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-blue-950">Tablet Touch Horizon</div>
                      <div className="text-[10px] text-slate-500">48px Ergonomic Targets</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Designed for shop-floor managers with real-time visual KPI tiles and one-tap mass release actions.
                  </p>
                  <div className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50/70 px-2 py-1 rounded">
                    Plant Utilization: 94.2%
                  </div>
                </div>

                {/* Mobile MDK Card */}
                <div className="rounded-2xl bg-white p-4 border border-blue-100 shadow-lg space-y-2">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                      <Smartphone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-blue-950">Mobile MDK Scanner</div>
                      <div className="text-[10px] text-blue-600 font-semibold">Offline SQLite Sync</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Native hardware laser barcode scanning with offline store-and-forward for dead cellular warehouse zones.
                  </p>
                  <div className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50/70 px-2 py-1 rounded">
                    Pallet Bin Verification: Active
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: THE 4 CORE SAP FIORI ENTERPRISE FLOORPLANS
          (Blue & White, Pure Information, All 4 Floorplans Displayed with Photos)
          ========================================================================= */}
      <section id="floorplan-gallery" className="py-16 sm:py-20 bg-blue-50/40 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-800">
              <Grid className="w-3.5 h-3.5" />
              <span>STANDARDIZED USER JOURNEYS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-950 tracking-tight">
              The 4 Core SAP Fiori Enterprise Floorplans
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Stop designing one-off bespoke screens from scratch. SAP Fiori floorplans provide predictable ergonomic interaction patterns proven across millions of global enterprise users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Floorplan 1 */}
            <div className="rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="h-44 w-full relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                    alt="List Report & Object Page Floorplan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-950/80 text-[10px] font-mono text-white font-bold border border-blue-400/30">
                    FLOORPLAN 01
                  </span>
                </div>
                <div className="p-5 space-y-2.5">
                  <h3 className="text-base font-bold text-blue-950">List Report & Object Page</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-volume transactional search with SmartFilterBar, multi-variant saving, and 360&deg; drill-down object details navigation.
                  </p>
                  <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-600">
                    <div className="font-semibold text-blue-950">Enterprise Use Case:</div>
                    <div>Sales Orders, Purchase Requisitions, Vendor Master records.</div>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <span className="inline-block px-2.5 py-1 rounded bg-blue-50 text-blue-700 text-[11px] font-mono font-semibold border border-blue-200">
                  Master Data Standard
                </span>
              </div>
            </div>

            {/* Floorplan 2 */}
            <div className="rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="h-44 w-full relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                    alt="Analytical List Page Floorplan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-950/80 text-[10px] font-mono text-white font-bold border border-blue-400/30">
                    FLOORPLAN 02
                  </span>
                </div>
                <div className="p-5 space-y-2.5">
                  <h3 className="text-base font-bold text-blue-950">Analytical List Page (ALP)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Hybrid visual donut & bar charts synchronized with line-item detail tables and live visual KPI filter bars.
                  </p>
                  <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-600">
                    <div className="font-semibold text-blue-950">Enterprise Use Case:</div>
                    <div>Procurement spend analysis, plant defect rates, accounts payable aging.</div>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <span className="inline-block px-2.5 py-1 rounded bg-blue-50 text-blue-700 text-[11px] font-mono font-semibold border border-blue-200">
                  Decision Intelligence
                </span>
              </div>
            </div>

            {/* Floorplan 3 */}
            <div className="rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="h-44 w-full relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" 
                    alt="Overview Page Floorplan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-950/80 text-[10px] font-mono text-white font-bold border border-blue-400/30">
                    FLOORPLAN 03
                  </span>
                </div>
                <div className="p-5 space-y-2.5">
                  <h3 className="text-base font-bold text-blue-950">Overview Page (OVP)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Domain executive cockpit composed of modular cards (analytical charts, quick table snapshots, and task queues).
                  </p>
                  <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-600">
                    <div className="font-semibold text-blue-950">Enterprise Use Case:</div>
                    <div>CFO financial health cockpit, VP supply chain command center.</div>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <span className="inline-block px-2.5 py-1 rounded bg-blue-50 text-blue-700 text-[11px] font-mono font-semibold border border-blue-200">
                  Executive Dashboard
                </span>
              </div>
            </div>

            {/* Floorplan 4 */}
            <div className="rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="h-44 w-full relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" 
                    alt="Worklist Page Floorplan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-950/80 text-[10px] font-mono text-white font-bold border border-blue-400/30">
                    FLOORPLAN 04
                  </span>
                </div>
                <div className="p-5 space-y-2.5">
                  <h3 className="text-base font-bold text-blue-950">Worklist Page</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Operational triage queues optimized for high-speed keyboard shortcuts, mass approvals, and item status progression.
                  </p>
                  <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-600">
                    <div className="font-semibold text-blue-950">Enterprise Use Case:</div>
                    <div>Invoice exception clearing, warehouse pick/pack verification, warranty claims.</div>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <span className="inline-block px-2.5 py-1 rounded bg-blue-50 text-blue-700 text-[11px] font-mono font-semibold border border-blue-200">
                  Operational Triage
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FIORI ELEMENTS VS FREESTYLE UI5 ARCHITECTURE MATRIX
          (Blue & White, Pure Information Table with High-Resolution Image)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-800">
                <Compass className="w-3.5 h-3.5" />
                <span>FRONT-END ARCHITECTURE GOVERNANCE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-950 tracking-tight">
                Fiori Elements vs. Freestyle SAPUI5: When to Build What
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                80% of enterprise requirements should be built with SAP Fiori Elements to guarantee Clean Core compliance and zero upgrade breakage. Reserve Freestyle UI5 strictly for bespoke canvases and proprietary interactive workflows.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-xl relative h-60">
                <img 
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80" 
                  alt="Enterprise UX Design Collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent flex items-end p-5">
                  <span className="text-xs font-mono text-white bg-blue-950/90 px-3 py-1 rounded border border-blue-400/40">
                    Fiori Design System Governance
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-blue-200 bg-white shadow-md">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-blue-200 bg-blue-950 text-white font-mono text-xs">
                  <th className="p-4 sm:p-5 font-bold uppercase">Architectural Dimension</th>
                  <th className="p-4 sm:p-5 font-bold uppercase text-blue-300">SAP Fiori Elements (Recommended)</th>
                  <th className="p-4 sm:p-5 font-bold uppercase text-slate-300">Freestyle SAPUI5 (Custom Canvas)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-100 text-slate-700">
                <tr className="hover:bg-blue-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-blue-950">Development Velocity</td>
                  <td className="p-4 sm:p-5 text-blue-700 font-semibold font-mono">
                    Up to 80% Faster &bull; Zero Front-End JS Boilerplate
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">
                    Requires manual XML views, controllers, formatters, and bindings
                  </td>
                </tr>

                <tr className="hover:bg-blue-50/50 transition-colors bg-blue-50/20">
                  <td className="p-4 sm:p-5 font-bold text-blue-950">SAP S/4HANA Upgrade Safety</td>
                  <td className="p-4 sm:p-5 text-blue-700 font-semibold font-mono">
                    100% Protected &bull; SAP updates standard controls automatically
                  </td>
                  <td className="p-4 sm:p-5 text-amber-700">
                    High regression risk &bull; Custom JS can break on UI5 library upgrades
                  </td>
                </tr>

                <tr className="hover:bg-blue-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-blue-950">Clean Core Compliance</td>
                  <td className="p-4 sm:p-5 text-blue-700 font-semibold font-mono">
                    Tier 1 Compliant &bull; Backed by released ABAP CDS metadata
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">
                    Requires strict code review to avoid private API dependencies
                  </td>
                </tr>

                <tr className="hover:bg-blue-50/50 transition-colors bg-blue-50/20">
                  <td className="p-4 sm:p-5 font-bold text-blue-950">Draft Handling & Concurrency</td>
                  <td className="p-4 sm:p-5 text-blue-700 font-semibold font-mono">
                    Native RAP / CAP Transactional Draft support built-in
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">
                    Developer must manually program locks, state preservation, and cancel
                  </td>
                </tr>

                <tr className="hover:bg-blue-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-blue-950">Ideal Business Use Case</td>
                  <td className="p-4 sm:p-5 text-slate-700">
                    Master data management, sales orders, purchase reqs, finance ledgers
                  </td>
                  <td className="p-4 sm:p-5 text-slate-700">
                    B2B partner portals, visual warehouse bin pickers, 3D equipment configurators
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: METADATA-DRIVEN SMART CONTROL ARCHITECTURE FRAMEWORK
          (Blue & White, Pure Information with Visual Imagery - No Code)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-blue-50/40 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-800">
                <Eye className="w-3.5 h-3.5" />
                <span>METADATA COMPILER MECHANISM</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-950 tracking-tight">
                How Metadata-Driven Architecture Eliminates Front-End Maintenance
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                In traditional web apps, changing a database column requires editing the backend, updating the API payload, rewriting front-end HTML tables, and tweaking CSS formatters. In SAP Fiori Elements, semantic metadata annotations automatically orchestrate the entire front-end UI.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-xl relative h-60">
                <img 
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80" 
                  alt="Design System Tokens and UI Components"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent flex items-end p-5">
                  <span className="text-xs font-mono text-white bg-blue-950/90 px-3 py-1 rounded border border-blue-400/40">
                    Zero-JavaScript Smart Controls
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">SMART FILTER BAR</div>
              <h3 className="text-base font-bold text-blue-950">Auto-Generating Search Inputs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Declaring selection fields in backend metadata extensions automatically renders multi-input search fields with type-ahead value helps, date range pickers, and user variant presets.
              </p>
              <div className="text-[11px] font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-200 inline-block font-semibold">
                Dynamic Value Help Catalogs
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">CRITICALITY STATUS BADGES</div>
              <h3 className="text-base font-bold text-blue-950">Semantic Color Tagging</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Status codes bind dynamically to semantic states (Positive Green, Critical Amber, Negative Red). If business rules alter an order to "Overdue", the UI badge updates color instantly.
              </p>
              <div className="text-[11px] font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-200 inline-block font-semibold">
                Zero Front-End CSS Logic
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">DRAFT HANDLING</div>
              <h3 className="text-base font-bold text-blue-950">Lossless Session Auto-Save</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If an inspector closes their browser midway through creating a 100-line invoice, the transactional draft state preserves changes without locking backend database rows.
              </p>
              <div className="text-[11px] font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-200 inline-block font-semibold">
                Native RAP / CAP Concurrency
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: MOBILE ENTERPRISE (MDK) & OFFLINE ARCHITECTURE
          (Blue & White, Pure Information with High-Resolution Image)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-800">
                <Smartphone className="w-3.5 h-3.5" />
                <span>FIELD MOBILITY & EDGE WORKFORCE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-950 tracking-tight">
                SAP Mobile Development Kit (MDK) & Offline Sync
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                For warehouse forklift operators, offshore energy sites, and flight maintenance engineers where internet connectivity drops. MDK creates true native iOS and Android apps with robust local offline databases and bi-directional delta synchronization.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-xl relative h-60">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80" 
                  alt="Warehouse Technician Handheld Barcode Scanning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent flex items-end p-5">
                  <span className="text-xs font-mono text-white bg-blue-950/90 px-3 py-1 rounded border border-blue-400/40">
                    Offline MDK Barcode Integration
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-blue-950">Local Encrypted Database</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Stores full master data catalogs and pending transactions in an on-device SQLCipher encrypted SQLite database. Zero loss of work even in dead cellular zones.
              </p>
              <div className="text-[11px] font-mono text-blue-700 pt-2 font-semibold">
                AES-256 Hardware Enclave Key Storage
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-blue-950">OData Delta Token Sync</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Uses OData delta tokens so only altered entity records are synchronized over cellular networks, reducing bandwidth consumption by 95%.
              </p>
              <div className="text-[11px] font-mono text-blue-700 pt-2 font-semibold">
                Deterministic Conflict Resolution
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700">
                <Scan className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-blue-950">Native Hardware Sensors</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct integration with Zebra laser scanners, Honeywell sleds, Bluetooth RFID readers, device cameras, and GPS geofencing with a single cross-platform code base.
              </p>
              <div className="text-[11px] font-mono text-blue-700 pt-2 font-semibold">
                Cross-Compiled to Swift & Kotlin
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: ACCESSIBILITY (WCAG 2.1 AA) & HORIZON DESIGN TOKENS
          (Blue & White, Pure Information with Usability Testing Image)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-blue-50/40 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-800">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>INCLUSIVE ACCESSIBILITY & COMPLIANCE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-950 tracking-tight">
                Enterprise WCAG 2.1 AA & Horizon Design Token Audit
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Every SAP Fiori application engineered by Knooviq conforms strictly to international accessibility standards, ensuring every employee can operate business workflows regardless of visual, motor, or cognitive abilities.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-xl relative h-60">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80" 
                  alt="Enterprise Accessibility & Usability Testing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent flex items-end p-5">
                  <span className="text-xs font-mono text-white bg-blue-950/90 px-3 py-1 rounded border border-blue-400/40">
                    WCAG 2.1 AA Certified
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">CONTRAST COMPLIANCE</div>
              <h3 className="text-base font-bold text-blue-950">4.5:1 Minimum Contrast Ratio</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                SAP Horizon tokens guarantee strict contrast requirements for all text and interactive glyphs. Supports High-Contrast Black (HCB) and High-Contrast White (HCW) with zero custom CSS overrides.
              </p>
              <div className="text-[11px] font-mono text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block font-semibold">
                Passed WCAG 2.1 AAA Contrast
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">NON-MOUSE OPERABILITY</div>
              <h3 className="text-base font-bold text-blue-950">100% Keyboard Tab Traversal</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full spatial navigation via keyboard tab traversal and arrow navigation. Focus outlines are prominent and never suppressed.
              </p>
              <div className="text-[11px] font-mono text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block font-semibold">
                F6 Regional Navigation Support
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">SCREEN READERS</div>
              <h3 className="text-base font-bold text-blue-950">Semantic ARIA-1.2 Announcements</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Native JAWS, NVDA, and VoiceOver support. Status changes, dynamic table filtering, and validation error messages are announced to assistive tech using live regions.
              </p>
              <div className="text-[11px] font-mono text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block font-semibold">
                aria-live="polite" Integrated
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: EXECUTIVE FIORI MODERNIZATION ADVISORY CTA
          (Blue & White Enterprise CTA with Metric Highlights)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-blue-950 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-600 text-xs font-mono font-bold uppercase tracking-wider text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>KNOOVIQ FIORI PRACTICE ADVISORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Ready to Modernize Your SAP Enterprise User Experience?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Eliminate legacy SAP GUI transaction overhead. Our team of certified SAP Fiori architects and UX designers will audit your current user journeys and build modern, high-velocity Fiori applications tailored to your business.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact('SAP Fiori Architecture & Modernization Advisory')}
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/40 transition-all flex items-center gap-2 group"
            >
              <span>Schedule UX Architecture Advisory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/technology/sap-integration-suite"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-blue-400/30 text-white font-semibold text-sm transition-all"
            >
              Explore SAP Integration Suite &rarr;
            </Link>
          </div>

          <div className="pt-8 border-t border-blue-900/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-3 rounded-xl bg-white/5 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-400">80% Less Code</div>
              <div className="text-[11px] text-slate-300 mt-0.5">Metadata-Driven Fiori Elements</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-400">Zero Upgrade Lag</div>
              <div className="text-[11px] text-slate-300 mt-0.5">Clean Core Compliant</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-400">Native Offline</div>
              <div className="text-[11px] text-slate-300 mt-0.5">MDK SQLite Mobile Sync</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-400">WCAG 2.1 AA</div>
              <div className="text-[11px] text-slate-300 mt-0.5">Inclusive Horizon Design</div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
