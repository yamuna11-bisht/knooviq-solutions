import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Server, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Globe2, 
  Compass, 
  Layers, 
  Clock, 
  HardDrive, 
  DollarSign, 
  Calendar, 
  Check, 
  Building2, 
  Boxes,
  Sparkles,
  FileCheck
} from 'lucide-react';

interface TechnologyPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const CloudTransformationPage: React.FC<TechnologyPageProps> = ({ onOpenContact }) => {
  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-blue-600 selection:text-white font-sans antialiased">
      
      {/* =========================================================================
          SECTION 1: MULTI-HYPERSCALER ORBITAL HERO
          (Blue & White, Pure Information, Certified Hyperscaler Telemetry)
          ========================================================================= */}
      <section className="relative w-full min-h-[640px] lg:min-h-[700px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 overflow-hidden bg-blue-950 border-b border-blue-900">
        
        {/* Full-Bleed Enterprise Background Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" 
            alt="SAP Cloud Transformation Hyperscaler Infrastructure" 
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
                  <Cloud className="w-3.5 h-3.5 text-blue-400" />
                  <span>HYPERSCALER CLOUD ADVISORY &bull; RISE WITH SAP</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                  Navigate Enterprise Cloud with <br />
                  <span className="text-blue-400">
                    Sovereign Hyperscalers & RISE
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed pt-1">
                  Modernize legacy on-premise SAP workloads onto certified Microsoft Azure, AWS, or Google Cloud environments. Minimize cutover downtime, optimize cloud FinOps spend, and implement resilient multi-region architectures.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenContact('SAP Cloud Transformation Advisory')}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 group"
                >
                  <span>Request Migration Roadmap</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#cutover-benchmarks"
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-blue-400/30 text-white font-semibold text-sm backdrop-blur-md transition-all flex items-center gap-2"
                >
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>View Cutover Benchmarks</span>
                </a>
              </div>

              {/* Enterprise Cloud Metric Badges */}
              <div className="pt-4 grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-white/10 border border-blue-400/20 backdrop-blur-md">
                  <div className="text-lg font-black text-white font-mono">Sub-4h</div>
                  <div className="text-[11px] text-blue-200">Near-Zero Downtime</div>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-blue-400/20 backdrop-blur-md">
                  <div className="text-lg font-black text-blue-400 font-mono">99.99%</div>
                  <div className="text-[11px] text-blue-200">Multi-Zone SLA</div>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-blue-400/20 backdrop-blur-md">
                  <div className="text-lg font-black text-white font-mono">40% Less</div>
                  <div className="text-[11px] text-blue-200">FinOps Cloud TCO</div>
                </div>
              </div>
            </div>

            {/* Right Column: Multi-Cloud Hyperscaler Telemetry Showcase */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Azure Card */}
              <div className="rounded-2xl bg-white p-4 sm:p-5 border border-blue-100 shadow-xl space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-blue-950">Microsoft Azure Sovereign Cloud</div>
                      <div className="text-[10px] text-slate-500">M-Series Compute & ANF Storage</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                    10 Gbps ExpressRoute
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Certified up to 24 TB DRAM per node. Redundant ExpressRoute circuits with active-active zone peering and automated Pacemaker cluster failover.
                </p>
              </div>

              {/* AWS Card */}
              <div className="rounded-2xl bg-white p-4 sm:p-5 border border-blue-100 shadow-xl space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                      <Cloud className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-blue-950">Amazon Web Services (AWS)</div>
                      <div className="text-[10px] text-slate-500">High-Memory EC2 (u-6tb1 / u-12tb1)</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                    Direct Connect & FSx
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bare-metal and virtualized certified instances. FSx for NetApp ONTAP delivers multi-AZ shared storage with sub-millisecond database log writes.
                </p>
              </div>

              {/* GCP Card */}
              <div className="rounded-2xl bg-white p-4 sm:p-5 border border-blue-100 shadow-xl space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-blue-950">Google Cloud Platform (GCP)</div>
                      <div className="text-[10px] text-slate-500">M3 Compute & BigQuery Cortex</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                    Dedicated Interconnect
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real-time data replication from S/4HANA into BigQuery for AI forecasting, with Google Cloud NetApp Volumes for zero-downtime backups.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: RISE WITH SAP VS GROW WITH SAP VS CUSTOMER-MANAGED CLOUD
          (Blue & White, Pure Information Table with High-Resolution Image)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-blue-50/40 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-800">
                <Compass className="w-3.5 h-3.5" />
                <span>COMMERCIAL & ARCHITECTURAL SELECTION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-950 tracking-tight">
                RISE with SAP vs. GROW with SAP vs. Customer-Managed IaaS
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Navigate SAP commercial licensing and operational models. Compare governance, custom code freedom, and operational responsibility before signing multi-year contracts.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-xl relative h-60">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" 
                  alt="Executive Strategic Boardroom Planning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent flex items-end p-5">
                  <span className="text-xs font-mono text-white bg-blue-950/90 px-3 py-1 rounded border border-blue-400/40">
                    Sovereign Cloud Governance
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-blue-200 bg-white shadow-md">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-blue-200 bg-blue-950 text-white font-mono text-xs">
                  <th className="p-4 sm:p-5 font-bold uppercase">Commercial Dimension</th>
                  <th className="p-4 sm:p-5 font-bold uppercase text-blue-300">RISE with SAP (Private Cloud)</th>
                  <th className="p-4 sm:p-5 font-bold uppercase text-white">GROW with SAP (Public Cloud)</th>
                  <th className="p-4 sm:p-5 font-bold uppercase text-slate-300">Customer IaaS (BYOL)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-100 text-slate-700">
                <tr className="hover:bg-blue-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-blue-950">Target Enterprise</td>
                  <td className="p-4 sm:p-5 text-blue-950 font-medium">Large enterprises with existing complex ERP customizations</td>
                  <td className="p-4 sm:p-5 text-slate-700">Mid-market or new subsidiaries adopting standard processes</td>
                  <td className="p-4 sm:p-5 text-slate-600">Legacy organizations retaining perpetual license rights</td>
                </tr>

                <tr className="hover:bg-blue-50/50 transition-colors bg-blue-50/20">
                  <td className="p-4 sm:p-5 font-bold text-blue-950">Custom Code Freedom</td>
                  <td className="p-4 sm:p-5 text-blue-700 font-semibold font-mono">
                    High &bull; Supports Developer Extensibility (RAP) + Side-by-Side BTP
                  </td>
                  <td className="p-4 sm:p-5 text-blue-700 font-semibold font-mono">
                    Strict Clean Core &bull; Only Key User & Side-by-Side BTP
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">
                    Unrestricted classic ABAP modifications (High Technical Debt)
                  </td>
                </tr>

                <tr className="hover:bg-blue-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-blue-950">Upgrade Governance</td>
                  <td className="p-4 sm:p-5 text-slate-700">Customer-scheduled within 5-year support release window</td>
                  <td className="p-4 sm:p-5 text-blue-700 font-semibold font-mono">Continuous automatic bi-annual upgrades by SAP</td>
                  <td className="p-4 sm:p-5 text-amber-700">100% Customer responsibility &bull; High upgrade project costs</td>
                </tr>

                <tr className="hover:bg-blue-50/50 transition-colors bg-blue-50/20">
                  <td className="p-4 sm:p-5 font-bold text-blue-950">Contract & SLA Single Point</td>
                  <td className="p-4 sm:p-5 text-blue-700 font-semibold font-mono">One Contract: SAP manages hyperscaler infrastructure</td>
                  <td className="p-4 sm:p-5 text-blue-700 font-semibold font-mono">Pure SaaS subscription with guaranteed 99.9% SLA</td>
                  <td className="p-4 sm:p-5 text-slate-600">Separate contracts: SAP software + Hyperscaler cloud bill</td>
                </tr>

                <tr className="hover:bg-blue-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-blue-950">Bundled BTP Credits (CPEA)</td>
                  <td className="p-4 sm:p-5 text-blue-700 font-semibold font-mono">Included Cloud Platform Enterprise Agreement credits</td>
                  <td className="p-4 sm:p-5 text-blue-700 font-semibold font-mono">Included SAP Build & Integration Suite allowances</td>
                  <td className="p-4 sm:p-5 text-slate-600">Must be procured separately</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: HYPERSCALER REFERENCE ARCHITECTURE BLUEPRINTS
          (Blue & White, Pure Information, 3 Hyperscalers Displayed Directly)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-800">
              <Layers className="w-3.5 h-3.5" />
              <span>REFERENCE ARCHITECTURE BLUEPRINTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-950 tracking-tight">
              Enterprise Hyperscaler Reference Architecture
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              End-to-end production architecture blueprints across Microsoft Azure, AWS, and Google Cloud, including high-availability clustering, shared storage, and secure hybrid networking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Blueprint 1: Azure */}
            <div className="rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="h-44 w-full relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80" 
                    alt="Microsoft Azure Cloud Architecture"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-blue-950/90 text-[10px] font-mono text-white font-bold border border-blue-400/30">
                    MICROSOFT AZURE
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="text-base font-bold text-blue-950">Azure S/4HANA Multi-Zone</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Azure M-Series compute, Azure NetApp Files (ANF), and redundant 10 Gbps ExpressRoute peering with automated Pacemaker failover.
                  </p>
                  <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-600">
                    <div>&bull; <strong className="text-blue-950">High Availability:</strong> 2 Availability Zones with synchronous replication.</div>
                    <div>&bull; <strong className="text-blue-950">Shared Storage:</strong> ANF Ultra-Performance NFS v4.1 storage pool.</div>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <span className="inline-block px-2.5 py-1 rounded bg-blue-50 text-blue-700 text-[11px] font-mono font-semibold border border-blue-200">
                  Target SLA: 99.99% Availability
                </span>
              </div>
            </div>

            {/* Blueprint 2: AWS */}
            <div className="rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="h-44 w-full relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" 
                    alt="Amazon Web Services Cloud Architecture"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-blue-950/90 text-[10px] font-mono text-white font-bold border border-blue-400/30">
                    AMAZON WEB SERVICES
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="text-base font-bold text-blue-950">AWS High-Memory Multi-AZ</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Amazon EC2 High-Memory instances (u-6tb1 / u-12tb1) backed by Amazon FSx for NetApp ONTAP and dedicated AWS Direct Connect.
                  </p>
                  <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-600">
                    <div>&bull; <strong className="text-blue-950">High Availability:</strong> Multi-AZ with automated route table update agents.</div>
                    <div>&bull; <strong className="text-blue-950">Storage Tier:</strong> FSx for NetApp ONTAP with cross-AZ auto-sync.</div>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <span className="inline-block px-2.5 py-1 rounded bg-blue-50 text-blue-700 text-[11px] font-mono font-semibold border border-blue-200">
                  Target SLA: 99.99% Availability
                </span>
              </div>
            </div>

            {/* Blueprint 3: GCP */}
            <div className="rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="h-44 w-full relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80" 
                    alt="Google Cloud Platform Architecture"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-blue-950/90 text-[10px] font-mono text-white font-bold border border-blue-400/30">
                    GOOGLE CLOUD PLATFORM
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="text-base font-bold text-blue-950">GCP Megamemory & Cortex</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Google Cloud M3 compute instances with Google Cloud NetApp Volumes and real-time BigQuery Cortex business telemetry federation.
                  </p>
                  <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-600">
                    <div>&bull; <strong className="text-blue-950">High Availability:</strong> Dual-region interconnect with live zero-loss migration.</div>
                    <div>&bull; <strong className="text-blue-950">Analytics Federation:</strong> Direct BigQuery Cortex CDC extraction.</div>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <span className="inline-block px-2.5 py-1 rounded bg-blue-50 text-blue-700 text-[11px] font-mono font-semibold border border-blue-200">
                  Target SLA: 99.99% Availability
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: ENTERPRISE CUTOVER DOWNTIME BENCHMARK MATRIX & NZDT
          (Blue & White, Pure Information, Replaced Sliders with Verified Benchmarks)
          ========================================================================= */}
      <section id="cutover-benchmarks" className="py-16 sm:py-20 bg-blue-50/40 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-800">
                <Clock className="w-3.5 h-3.5" />
                <span>BUSINESS CONTINUITY & TRANSITION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-950 tracking-tight">
                Enterprise Cutover Downtime Benchmark Matrix
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Planning your production cutover window requires empirical sizing benchmarks. Compare downtime windows across SAP NZDT (Near-Zero Downtime), DMO with Preread, and Classic DMO across standard enterprise database sizes.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-xl relative h-60">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80" 
                  alt="Enterprise Cloud Cutover Execution"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent flex items-end p-5">
                  <span className="text-xs font-mono text-white bg-blue-950/90 px-3 py-1 rounded border border-blue-400/40">
                    Sub-4h Near-Zero Downtime Guaranteed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Benchmark Table */}
          <div className="overflow-x-auto rounded-2xl border border-blue-200 bg-white shadow-md mb-8">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-blue-200 bg-blue-950 text-white font-mono text-xs">
                  <th className="p-4 sm:p-5 font-bold uppercase">Database Size Tier</th>
                  <th className="p-4 sm:p-5 font-bold uppercase text-blue-300">SAP NZDT (Near-Zero Downtime)</th>
                  <th className="p-4 sm:p-5 font-bold uppercase text-white">DMO with Preread</th>
                  <th className="p-4 sm:p-5 font-bold uppercase text-slate-300">Classic DMO Move</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-100 text-slate-700">
                <tr className="hover:bg-blue-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-blue-950">Small (1 &ndash; 2 TB)</td>
                  <td className="p-4 sm:p-5 text-blue-700 font-semibold font-mono">Sub-2 Hours Cutover</td>
                  <td className="p-4 sm:p-5 text-slate-700 font-mono">4 &ndash; 6 Hours Window</td>
                  <td className="p-4 sm:p-5 text-slate-600 font-mono">10 &ndash; 14 Hours Window</td>
                </tr>

                <tr className="hover:bg-blue-50/50 transition-colors bg-blue-50/20">
                  <td className="p-4 sm:p-5 font-bold text-blue-950">Medium (4 &ndash; 8 TB)</td>
                  <td className="p-4 sm:p-5 text-blue-700 font-semibold font-mono">Sub-4 Hours Cutover</td>
                  <td className="p-4 sm:p-5 text-slate-700 font-mono">8 &ndash; 12 Hours Window</td>
                  <td className="p-4 sm:p-5 text-slate-600 font-mono">18 &ndash; 24 Hours Window</td>
                </tr>

                <tr className="hover:bg-blue-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-blue-950">Large (10 &ndash; 20 TB)</td>
                  <td className="p-4 sm:p-5 text-blue-700 font-semibold font-mono">Sub-6 Hours Cutover</td>
                  <td className="p-4 sm:p-5 text-slate-700 font-mono">14 &ndash; 18 Hours Window</td>
                  <td className="p-4 sm:p-5 text-amber-700 font-mono">28 &ndash; 36 Hours Window</td>
                </tr>

                <tr className="hover:bg-blue-50/50 transition-colors bg-blue-50/20">
                  <td className="p-4 sm:p-5 font-bold text-blue-950">Ultra-VLDB (50+ TB)</td>
                  <td className="p-4 sm:p-5 text-blue-700 font-semibold font-mono">Sub-8 Hours (CDC Replication)</td>
                  <td className="p-4 sm:p-5 text-slate-700 font-mono">24 &ndash; 30 Hours Window</td>
                  <td className="p-4 sm:p-5 text-rose-700 font-mono">Exceeds standard maintenance window</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pre-Cutover Go/No-Go Gates (Pure Information) */}
          <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm space-y-4">
            <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">
              MANDATORY PRE-CUTOVER GO/NO-GO AUDIT GATES:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-blue-50/40 border border-blue-100 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-blue-950 block mb-0.5">Financial Trial Balance</strong>
                  <span className="text-slate-600">General Ledger and subledgers pre-reconciled with automated delta comparison reports.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/40 border border-blue-100 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-blue-950 block mb-0.5">Interface Decoupling</strong>
                  <span className="text-slate-600">All external EDI, CRM, and banking interfaces paused and queued in SAP Event Mesh.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/40 border border-blue-100 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-blue-950 block mb-0.5">Dry-Run Rehearsal</strong>
                  <span className="text-slate-600">Full dress rehearsal executed on production-copy staging system within target SLA.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: THE 6R SAP CLOUD MIGRATION DECISION FRAMEWORK
          (Blue & White, Pure Information, All 6 Strategies Structured)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-800">
              <Compass className="w-3.5 h-3.5" />
              <span>THE 6R WORKLOAD STRATEGY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-950 tracking-tight">
              The 6R SAP Cloud Migration Strategic Framework
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Not every SAP system should take the exact same journey. The 6R framework defines the optimal migration trajectory based on technical debt, customization volume, and business velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* R1: Rehost */}
            <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 text-xs font-mono font-bold">
                <span>R1: REHOST (LIFT & SHIFT)</span>
              </div>
              <h3 className="text-base font-bold text-blue-950">Hyperscaler IaaS Migration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Move existing ECC or S/4HANA systems directly to Azure, AWS, or GCP virtual machines with zero application changes. Best for urgent data center lease exits.
              </p>
              <div className="text-[11px] font-mono text-blue-700 pt-2 font-semibold">
                Fastest Execution &bull; Low Innovation
              </div>
            </div>

            {/* R2: Replatform */}
            <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 text-xs font-mono font-bold">
                <span>R2: REPLATFORM</span>
              </div>
              <h3 className="text-base font-bold text-blue-950">Lift-and-Reshape with Managed OS/DB</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Upgrade the underlying OS and database to SAP HANA Cloud or managed hyperscaler storage services without altering core ERP business logic.
              </p>
              <div className="text-[11px] font-mono text-blue-700 pt-2 font-semibold">
                Moderate Effort &bull; Database Modernization
              </div>
            </div>

            {/* R3: Refactor */}
            <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-600 text-white text-xs font-mono font-bold">
                <span>R3: REFACTOR (RECOMMENDED)</span>
              </div>
              <h3 className="text-base font-bold text-blue-950">Clean Core RISE with SAP</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Transform on-premise ECC to SAP S/4HANA Private Cloud. Decouple legacy Z-customizations into side-by-side apps on BTP to ensure upgrade agility.
              </p>
              <div className="text-[11px] font-mono text-blue-700 pt-2 font-semibold">
                Maximum Strategic Agility &bull; Clean Core
              </div>
            </div>

            {/* R4: Repurchase */}
            <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 text-xs font-mono font-bold">
                <span>R4: REPURCHASE (GROW SAAS)</span>
              </div>
              <h3 className="text-base font-bold text-blue-950">Cloud-Native Public SaaS</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Retire custom on-premise ERP code in favor of standard multi-tenant SAP S/4HANA Cloud Public Edition with continuous bi-annual innovation releases.
              </p>
              <div className="text-[11px] font-mono text-blue-700 pt-2 font-semibold">
                Pure SaaS &bull; Zero Infrastructure Mgmt
              </div>
            </div>

            {/* R5: Retain */}
            <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 text-xs font-mono font-bold">
                <span>R5: RETAIN</span>
              </div>
              <h3 className="text-base font-bold text-blue-950">Strategic On-Premise Hold</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Keep mission-critical workloads in sovereign on-premise environments where strict defense or classified compliance regulations prohibit public cloud hosting.
              </p>
              <div className="text-[11px] font-mono text-blue-700 pt-2 font-semibold">
                Sovereign Compliance &bull; Zero Movement
              </div>
            </div>

            {/* R6: Retire */}
            <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 text-xs font-mono font-bold">
                <span>R6: RETIRE</span>
              </div>
              <h3 className="text-base font-bold text-blue-950">Decommissioning & Cold Archival</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Safely decommission redundant subsidiary ERP instances. Extract and archive historical financial ledgers into immutable cloud cold storage (AWS Glacier / Azure Blob).
              </p>
              <div className="text-[11px] font-mono text-blue-700 pt-2 font-semibold">
                Immediate TCO Savings &bull; Legal Archival
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CLOUD FINOPS GOVERNANCE & RIGHTSIZING TOOLKIT
          (Blue & White, Pure Information Architecture)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-blue-50/40 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-800">
              <DollarSign className="w-3.5 h-3.5" />
              <span>CLOUD COST OPTIMIZATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-950 tracking-tight">
              Enterprise SAP Cloud FinOps Governance
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Migrating to the cloud without FinOps guardrails causes unbudgeted cost sprawl. Knooviq implements automated scheduling, memory rightsizing, and multi-year savings plans to reduce cloud TCO by up to 40%.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-blue-950">Automated Dev/QA Snoozing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Development and sandbox systems sit idle during nights and weekends. Automated Lambda/Azure Functions shut down non-production instances, reducing compute run hours from 720 to ~250 hours/month.
              </p>
              <div className="text-[11px] font-mono text-blue-700 pt-2 font-semibold">
                Up to 65% Non-Prod Cost Savings
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <HardDrive className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-blue-950">Multi-Tier Data Lifecycle</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Keep active financial years in DRAM, move 3-year historical records into Native Storage Extension (NSE) warm storage, and offload cold audit ledgers into hyperscaler object stores (S3 / Blob).
              </p>
              <div className="text-[11px] font-mono text-blue-700 pt-2 font-semibold">
                40% HANA Memory Footprint Reduction
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-blue-950">Reserved Instances & Savings Plans</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Commit to 1-year or 3-year predictable baseline production compute while keeping application servers dynamically scalable using hyperscaler autoscaling pools.
              </p>
              <div className="text-[11px] font-mono text-blue-700 pt-2 font-semibold">
                Up to 45% Lower Unit Compute Rate
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: EXECUTIVE CLOUD MIGRATION READINESS ADVISORY CTA
          (Blue & White Enterprise CTA with Metric Highlights)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-blue-950 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-600 text-xs font-mono font-bold uppercase tracking-wider text-blue-300">
            <Cloud className="w-3.5 h-3.5 text-blue-400" />
            <span>KNOOVIQ CLOUD PRACTICE ADVISORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Ready to Begin Your SAP Cloud Transformation?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From technical readiness assessments and TCO modeling to near-zero downtime cutover execution, our certified cloud architects and SAP migration leads ensure seamless enterprise migration.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact('SAP Cloud Transformation Architecture Advisory')}
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/40 transition-all flex items-center gap-2 group"
            >
              <span>Schedule Cloud Advisory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/technology/sap-btp"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-blue-400/30 text-white font-semibold text-sm transition-all"
            >
              Explore SAP BTP Architecture &rarr;
            </Link>
          </div>

          <div className="pt-8 border-t border-blue-900/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-3 rounded-xl bg-white/5 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-400">Sub-4h Cutover</div>
              <div className="text-[11px] text-slate-300 mt-0.5">Near Zero Downtime (NZDT)</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-400">Multi-Cloud</div>
              <div className="text-[11px] text-slate-300 mt-0.5">Azure &bull; AWS &bull; GCP Certified</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-400">RISE & GROW</div>
              <div className="text-[11px] text-slate-300 mt-0.5">Clean Core Governance</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-400">40% FinOps TCO</div>
              <div className="text-[11px] text-slate-300 mt-0.5">Rightsizing & Automation</div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
