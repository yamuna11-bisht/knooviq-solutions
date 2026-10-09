import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Database,
  Network,
  Cpu,
  Layers,
  Workflow,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Server,
  Zap,
  BarChart3,
  Compass,
  Boxes,
  Lock,
  GitMerge,
  Share2,
  RefreshCw,
  HardDrive,
  FileCode,
  Sliders,
  ChevronRight,
  Maximize2,
  Sparkles,
  X
} from 'lucide-react';

interface TechnologyPageProps {
  onOpenContact: (defaultService?: string) => void;
}

interface SourceNode {
  id: string;
  name: string;
  category: string;
  latency: string;
  protocol: string;
  description: string;
}

const DATA_SOURCES: SourceNode[] = [
  {
    id: 's4hana',
    name: 'SAP S/4HANA Cloud',
    category: 'Core Transactional ERP',
    latency: 'Sub-Second Live Virtualization',
    protocol: 'Native ABAP CDS View Tunnel',
    description: 'Direct semantic federation into universal ledger (ACDOCA), sales documents, and material management with active ERP security context.'
  },
  {
    id: 'snowflake',
    name: 'Snowflake Data Cloud',
    category: 'Cloud Data Warehouse',
    latency: 'Bidirectional Live Query',
    protocol: 'Open Data Partnership Connector',
    description: 'Federates third-party digital marketing and point-of-sale data stored in Snowflake with SAP ERP master data without physical replication.'
  },
  {
    id: 'databricks',
    name: 'Databricks Lakehouse',
    category: 'AI/ML & Data Engineering',
    latency: 'Delta Lake Direct Federation',
    protocol: 'Delta Sharing Protocol',
    description: 'Combines complex machine learning feature stores and telemetry from Databricks with SAP business entities for unified predictive modeling.'
  },
  {
    id: 'bigquery',
    name: 'Google Cloud BigQuery',
    category: 'Hyperscale Cloud Analytics',
    latency: 'Zero-Copy Query Pushdown',
    protocol: 'Google Cloud Cortex Framework',
    description: 'Enables high-performance cross-cloud federated joins between Google BigQuery web-scale data and SAP supply chain logistics.'
  },
  {
    id: 'bw',
    name: 'SAP BW/4HANA & Legacy BW',
    category: 'Enterprise Data Warehouse',
    latency: 'Automated Metadata Ingestion',
    protocol: 'SAP BW Bridge (HANA Native)',
    description: 'Reuses decades of existing BW InfoProviders, Bex queries, and custom extractors directly inside Datasphere with automated migration.'
  }
];

export const SapDataspherePage: React.FC<TechnologyPageProps> = ({ onOpenContact }) => {
  const [activeSourceId, setActiveSourceId] = useState<string>('s4hana');
  const [modelLayerTab, setModelLayerTab] = useState<'spaces' | 'data-builder' | 'business-builder'>('business-builder');

  const currentSource = DATA_SOURCES.find((s) => s.id === activeSourceId) || DATA_SOURCES[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-black">

      {/* =========================================================================
          SECTION 1: HERO SECTION (Cinematic Full-Screen Panoramic Background, Left Content)
          ========================================================================= */}
      <section className="relative w-full min-h-[600px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-14 overflow-hidden bg-slate-950 text-white">
        
        {/* Full-Bleed Background Visual: Holographic Data Fabric & Zero-Copy Virtualization */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/sap_datasphere_boardroom_analytics.png"
            alt="SAP Datasphere - Unify Enterprise Data Without Moving A Single Physical Byte"
            className="w-full h-full object-cover object-right lg:object-[65%_center] brightness-110 contrast-105 saturate-[1.05]"
          />
          {/* Dedicated text-readability scrim on left; 100% bright & clear on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 via-45% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-5 text-left">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-900/80 border border-cyan-400/30 text-xs font-mono font-bold uppercase tracking-wider text-cyan-200 shadow-sm">
                <Database className="w-3.5 h-3.5 text-cyan-300" />
                <span>KNOOVIQ TECHNOLOGY PRACTICE &bull; SAP DATASPHERE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                Unify Enterprise Data Without <br />
                <span className="text-cyan-300">Moving A Single Physical Byte</span>
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-cyan-100 leading-snug">
                Live Zero-Copy Virtualization. Real-Time Business Data Fabric.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 max-w-2xl"
            >
              <p className="text-sm sm:text-base text-cyan-100 font-normal leading-relaxed">
                Traditional ETL pipelines copy, flatten, and strip context from enterprise data. <strong className="text-white font-semibold">SAP Datasphere</strong> orchestrates a seamless Business Data Fabric—delivering live zero-copy virtualization with intact business semantics.
              </p>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                  <span>Zero-Copy Virtualization</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                  <span>Intact Business Semantics</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                  <span>Multi-Cloud Federation</span>
                </span>
              </div>
            </motion.div>

            {/* Enterprise Architectural Trust Ribbon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 pt-5 border-t border-cyan-800/80 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
            >
              <div className="p-3.5 rounded-xl bg-cyan-950/60 border border-cyan-800">
                <div className="flex items-center gap-2 mb-1">
                  <Database className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">DATA FABRIC</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white">Business Semantics</div>
                <div className="text-xs text-cyan-200 mt-0.5">Zero Context Stripping</div>
              </div>

              <div className="p-3.5 rounded-xl bg-cyan-950/60 border border-cyan-800">
                <div className="flex items-center gap-2 mb-1">
                  <Network className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">FEDERATION</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white">Zero-Copy Ingestion</div>
                <div className="text-xs text-cyan-200 mt-0.5">Sub-Second Pushdown</div>
              </div>

              <div className="p-3.5 rounded-xl bg-cyan-950/60 border border-cyan-800">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">SECURITY</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white">Inherited RBAC</div>
                <div className="text-xs text-cyan-200 mt-0.5">Native SAP S/4HANA ACLs</div>
              </div>

              <div className="p-3.5 rounded-xl bg-cyan-950/60 border border-cyan-800">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">AI READY</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white">Vector Fabric</div>
                <div className="text-xs text-cyan-200 mt-0.5">Clean Grounded Context</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: LIVE FABRIC FEDERATION CONTROLLER & INGESTION TOPOLOGY
          ========================================================================= */}
      <section className="py-16 bg-[#040A17] border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              <Network className="w-3.5 h-3.5" />
              <span>LIVE FEDERATION TOPOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Interactive Multi-Source Federation Controller
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Experience real-time zero-copy querying across hyperscaler data lakes, legacy on-prem systems, and modern SaaS ecosystems.
            </p>
          </div>

          {/* Interactive Topology Visualizer */}
          <div className="max-w-5xl mx-auto rounded-2xl border-2 border-cyan-500/40 bg-[#08152B]/95 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="text-xs font-mono uppercase text-cyan-400 font-bold block">
                  FABRIC FEDERATION CONTROLLER
                </span>
                <span className="text-sm font-bold text-white">Select Connected Ingestion Source:</span>
              </div>
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                ZERO-COPY ARCHITECTURE
              </span>
            </div>

            {/* Source Node Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-6">
              {DATA_SOURCES.map((source) => (
                <button
                  key={source.id}
                  onClick={() => setActiveSourceId(source.id)}
                  className={`p-3 rounded-xl text-left transition-all border ${
                    activeSourceId === source.id
                      ? 'bg-gradient-to-b from-cyan-500/20 to-blue-900/30 border-cyan-400 shadow-md shadow-cyan-500/20'
                      : 'bg-black/30 border-white/5 hover:border-white/20 text-slate-400'
                  }`}
                >
                  <span className="text-[10px] font-mono text-cyan-400 block font-bold truncate">
                    {source.category}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white block mt-0.5 truncate">
                    {source.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Node Architecture Deep-Dive */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSourceId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 rounded-xl bg-black/50 border border-white/10"
              >
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-cyan-300 uppercase">
                      ACTIVE FEDERATION PROTOCOL: {currentSource.protocol}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {currentSource.name}: {currentSource.category}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {currentSource.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono">
                    <span className="px-3 py-1 rounded bg-black/60 border border-white/10 text-emerald-400">
                      Latency: {currentSource.latency}
                    </span>
                    <span className="px-3 py-1 rounded bg-black/60 border border-white/10 text-cyan-300">
                      Security: SAP Authorization Inherited
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-4 p-4 rounded-xl bg-[#0C1E3D] border border-cyan-500/30 text-xs space-y-2 text-slate-300">
                  <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold block">
                    BUSINESS FABRIC BENEFIT
                  </span>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Zero data duplication storage cost</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Preserves currency & unit conversion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Lineage & cataloging out of the box</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ZERO-COPY VIRTUALIZATION VS TRADITIONAL ETL BENCHMARK
          ========================================================================= */}
      <section className="py-20 bg-[#030914] border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono font-bold uppercase text-cyan-400 mb-3">
              <HardDrive className="w-3.5 h-3.5" />
              <span>TECHNICAL BENCHMARK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Zero-Copy Virtualization vs. Legacy ETL Ingestion
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              See why moving enterprise data into brittle, third-party data lakes introduces semantic debt, governance fragmentation, and massive cloud ingress/egress fees.
            </p>
          </div>

          {/* Benchmark Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#08152B] border-b border-white/10 text-xs font-mono uppercase text-slate-300">
                <tr>
                  <th className="p-4 sm:p-5">Architectural Dimension</th>
                  <th className="p-4 sm:p-5 text-rose-400">Traditional Legacy ETL Pipelines</th>
                  <th className="p-4 sm:p-5 text-cyan-400 bg-cyan-950/20">SAP Datasphere Business Fabric</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-normal text-slate-300">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-white font-mono">Data Freshness &amp; Latency</td>
                  <td className="p-4 sm:p-5 text-rose-300/80">Batch-dependent (6 to 24-hour lag behind ERP transactions)</td>
                  <td className="p-4 sm:p-5 text-emerald-300 font-semibold bg-cyan-950/10">Instantaneous Sub-Second Pushdown Querying</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-white font-mono">Business Context &amp; Semantics</td>
                  <td className="p-4 sm:p-5 text-rose-300/80">Context stripped; requires thousands of hours to remodel hierarchies</td>
                  <td className="p-4 sm:p-5 text-emerald-300 font-semibold bg-cyan-950/10">100% Preserved (Hierarchies, Multi-Currency, Language Keys)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-white font-mono">Storage Footprint &amp; Duplication</td>
                  <td className="p-4 sm:p-5 text-rose-300/80">3x to 5x physical copies across raw, staging, and presentation lakes</td>
                  <td className="p-4 sm:p-5 text-emerald-300 font-semibold bg-cyan-950/10">Zero Unnecessary Copies (Logical Semantic Layer)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-white font-mono">Security &amp; Authorization</td>
                  <td className="p-4 sm:p-5 text-rose-300/80">Fragmented; manual recreation of complex SAP authorization profiles</td>
                  <td className="p-4 sm:p-5 text-emerald-300 font-semibold bg-cyan-950/10">Inherited natively from SAP S/4HANA &amp; Cloud Identity</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-white font-mono">Clean Core Governance</td>
                  <td className="p-4 sm:p-5 text-rose-300/80">High violation risk due to direct database schema scraping</td>
                  <td className="p-4 sm:p-5 text-emerald-300 font-semibold bg-cyan-950/10">Certified Clean Core Compliant via Released CDS Views</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THREE-TIER MODELING STUDIO (Spaces & Semantic Layer)
          ========================================================================= */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-xs font-mono font-bold uppercase text-blue-400 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>COLLABORATIVE MODELING ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Spaces, Data Builder &amp; Business Builder
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Empower business analysts to model KPIs and consumption stories independently while IT retains central control over security, quotas, and underlying tables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#08152B] border border-white/10 hover:border-cyan-500/40 transition-all space-y-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                <Boxes className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase block">TIER 1 &bull; ISOLATION</span>
              <h3 className="text-xl font-bold text-white">Datasphere Spaces</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Secure, isolated virtual collaborative environments allocated to specific business units (e.g., Global Treasury, Supply Chain, Human Capital) with dedicated compute, storage, and user access quotas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#08152B] border border-white/10 hover:border-cyan-500/40 transition-all space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-[#00A3E0] flex items-center justify-center font-bold">
                <FileCode className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-[#00A3E0] font-bold uppercase block">TIER 2 &bull; TECHNICAL INTEGRATION</span>
              <h3 className="text-xl font-bold text-white">Data Builder (IT Layer)</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Empowers data engineers to combine physical and virtual tables, define SQL transformations, build graphical ETL data flows, and establish high-speed caching with HANA in-memory acceleration.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#08152B] border border-white/10 hover:border-cyan-500/40 transition-all space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                <Workflow className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-purple-400 font-bold uppercase block">TIER 3 &bull; BUSINESS SEMANTICS</span>
              <h3 className="text-xl font-bold text-white">Business Builder (Semantic Layer)</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Abstracts technical database column names into recognizable business entities, calculated measures (e.g. EBITDA, Net Sales Margin), and multi-level reporting hierarchies ready for SAC or PowerBI.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CALL TO ACTION
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-br from-[#061224] via-[#0A1A38] to-[#02050E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono font-bold uppercase text-cyan-300">
            <Database className="w-3.5 h-3.5" />
            <span>BUSINESS DATA FABRIC PILOT</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Deploy SAP Datasphere & <br />
            <span className="text-[#00A3E0]">Unify Your Enterprise Data Mesh</span>
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Eliminate costly data silos. Connect SAP S/4HANA, Snowflake, and Databricks under a single governed semantic layer with Knooviq certified data architects.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact('SAP Datasphere Architecture Advisory')}
              className="px-8 py-4 rounded-xl font-bold text-sm bg-[#00A3E0] text-white hover:bg-[#008cc0] shadow-xl shadow-[#00A3E0]/30 transition-all flex items-center gap-2 group"
            >
              <span>Schedule Architecture Blueprint Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/technology/intelligent-automation"
              className="px-6 py-4 rounded-xl font-semibold text-sm text-slate-300 hover:text-white border border-white/20 hover:border-white/40 transition-all"
            >
              <span>Explore Intelligent Automation &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
