import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Cpu, 
  Zap, 
  Layers, 
  Server, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  Activity, 
  Search, 
  Share2, 
  MapPin, 
  BarChart3, 
  HardDrive, 
  Network, 
  Box, 
  TrendingUp, 
  Gauge, 
  Sparkles 
} from 'lucide-react';

interface TechnologyPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const SapHanaPage: React.FC<TechnologyPageProps> = ({ onOpenContact }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Cinematic Blue & White Silicon Hardware)
          ========================================================================= */}
      <section className="relative w-full min-h-[600px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-14 overflow-hidden bg-blue-950">
        
        {/* Background Image with Deep Blue Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80" 
            alt="SAP HANA Silicon Hardware" 
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/75 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-blue-950/50 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-5">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/80 border border-blue-400/30 text-xs font-mono font-bold uppercase tracking-wider text-blue-200 shadow-sm">
                <Cpu className="w-3.5 h-3.5 text-blue-300" />
                <span>IN-MEMORY SILICON COMPUTE &bull; SAP HANA CLOUD</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                Sub-Millisecond Speed with <br />
                <span className="text-blue-300">SAP HANA & In-Memory Analytics</span>
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-blue-100 leading-snug">
                Hybrid Transactional & Analytical Processing (HTAP) at Scale.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 max-w-2xl"
            >
              <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed">
                Eliminate disk I/O bottlenecks and redundant aggregate tables. SAP HANA processes mission-critical OLTP transactions and multi-billion-row analytical aggregations simultaneously in columnar DRAM with native Vector, Spatial, and Graph algorithms.
              </p>
              
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-blue-300" />
                  <span>Columnar In-Memory Core</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-blue-300" />
                  <span>Multi-Model Spatial & Graph</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-blue-300" />
                  <span>Native GenAI Vector Engine</span>
                </span>
              </div>
            </motion.div>

            {/* Hardware Telemetry Ribbon */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 pt-5 border-t border-blue-800/80 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
            >
              <div className="p-3.5 rounded-xl bg-blue-900/50 border border-blue-800">
                <div className="flex items-center gap-2 mb-1">
                  <Activity className="w-4 h-4 text-blue-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-blue-300 uppercase">SCAN LATENCY</span>
                </div>
                <div className="text-lg font-bold text-white">Sub-Millisecond</div>
                <div className="text-xs text-blue-200 mt-0.5">Direct L3 Cache</div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-900/50 border border-blue-800">
                <div className="flex items-center gap-2 mb-1">
                  <HardDrive className="w-4 h-4 text-blue-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-blue-300 uppercase">DISK WAIT</span>
                </div>
                <div className="text-lg font-bold text-white">0.0 ms Delay</div>
                <div className="text-xs text-blue-200 mt-0.5">Zero Spindle Lag</div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-900/50 border border-blue-800">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-blue-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-blue-300 uppercase">VECTOR ENGINE</span>
                </div>
                <div className="text-lg font-bold text-white">Native SIMD</div>
                <div className="text-xs text-blue-200 mt-0.5">AVX-512 Powered</div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-900/50 border border-blue-800">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-blue-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-blue-300 uppercase">ACID DURABILITY</span>
                </div>
                <div className="text-lg font-bold text-white">100% Strict</div>
                <div className="text-xs text-blue-200 mt-0.5">Redo Log Backing</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: COLUMNAR VS ROW-STORE ARCHITECTURAL COMPARISON
          (Clean Blue & White Informative Grid - No Code)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                <Compass className="w-3.5 h-3.5 text-blue-600" />
                <span>THE ARCHITECTURAL SHIFT</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Why Columnar In-Memory Defeats Traditional Disk Databases
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                In traditional relational databases, querying a single financial figure forces the engine to read entire physical disk blocks containing irrelevant customer strings and addresses. SAP HANA stores data contiguously by column vector, enabling dictionary compression and direct CPU register scans.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-md h-64">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80" 
                  alt="High Density Enterprise Server Memory Architecture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">HIGH COMPRESSION RATIOS</div>
              <h3 className="text-base font-bold text-blue-950">Dictionary & Run-Length Encoding</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Repetitive values (e.g. Country Codes, Status Flags) are stored once in a dictionary and referenced by compact bit-integers, reducing data footprint by 3x to 5x.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">ZERO REDUNDANT AGGREGATES</div>
              <h3 className="text-base font-bold text-blue-950">Live Aggregations on The Fly</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Legacy systems required pre-calculated batch tables (e.g. monthly totals). SAP HANA computes real-time sums across 50 million records directly on base transactional data in milliseconds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">HARDWARE ACCELERATION</div>
              <h3 className="text-base font-bold text-blue-950">SIMD Parallel CPU Registers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modern Intel and AMD processors execute Single Instruction Multiple Data (SIMD) vector instructions, evaluating dozens of numerical values simultaneously in a single processor clock cycle.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: NATIVE MULTI-MODEL ENGINES (Vector, Spatial, Graph, PAL)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-blue-50/40 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              <span>POLYGLOT IN-DATABASE PROCESSING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              One Unified Engine for Vectors, Spatial, Graph, and Machine Learning
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Eliminate costly ETL pipelines to external specialized databases. SAP HANA natively evaluates high-dimensional vector embeddings, geospatial polygons, and multi-tier supply chain relationship graphs within the exact same in-memory boundary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Vector Engine */}
            <div className="rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-44 w-full relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" 
                    alt="SAP HANA Vector Engine for GenAI"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-900 text-[10px] font-mono text-white font-bold uppercase">
                    GENAI &bull; RAG
                  </span>
                </div>

                <div className="p-5 space-y-2.5">
                  <h3 className="text-base font-bold text-slate-900">
                    HANA Vector Engine
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Store high-dimensional vector embeddings directly alongside ERP master records. Executes Cosine Similarity and L2 Distance queries with sub-millisecond retrieval.
                  </p>
                  <div className="text-[11px] text-blue-700 font-semibold pt-1">
                    Grounded RAG with strict row-level security
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100">
                <span className="text-[10px] font-mono text-slate-500">Zero External Vector Store Needed</span>
              </div>
            </div>

            {/* Card 2: Spatial GIS */}
            <div className="rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-44 w-full relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" 
                    alt="Spatial GIS Engine"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-900 text-[10px] font-mono text-white font-bold uppercase">
                    OGC STANDARD
                  </span>
                </div>

                <div className="p-5 space-y-2.5">
                  <h3 className="text-base font-bold text-slate-900">
                    Spatial GIS Engine
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Compute geographic freight corridors, delivery buffers, and geofencing boundaries directly in memory without middleware GIS mapping servers.
                  </p>
                  <div className="text-[11px] text-blue-700 font-semibold pt-1">
                    Points, Polygons & LineStrings (SRID 4326)
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100">
                <span className="text-[10px] font-mono text-slate-500">Sub-10ms Geofence Intersects</span>
              </div>
            </div>

            {/* Card 3: Property Graph */}
            <div className="rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-44 w-full relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" 
                    alt="Property Graph Engine"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-900 text-[10px] font-mono text-white font-bold uppercase">
                    OPENCYPHER
                  </span>
                </div>

                <div className="p-5 space-y-2.5">
                  <h3 className="text-base font-bold text-slate-900">
                    Property Graph Engine
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Traverse deep 10-level nested Bill of Materials (BOM), supply chain component trees, and vendor fraud ring networks in nanoseconds using OpenCypher.
                  </p>
                  <div className="text-[11px] text-blue-700 font-semibold pt-1">
                    Dijkstra shortest-path topology
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100">
                <span className="text-[10px] font-mono text-slate-500">Zero Recursive SQL JOIN Overhead</span>
              </div>
            </div>

            {/* Card 4: PAL Machine Learning */}
            <div className="rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-44 w-full relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                    alt="Predictive Analysis Library PAL"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-900 text-[10px] font-mono text-white font-bold uppercase">
                    IN-DATABASE ML
                  </span>
                </div>

                <div className="p-5 space-y-2.5">
                  <h3 className="text-base font-bold text-slate-900">
                    Predictive Analysis (PAL)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Train and execute Random Forests, XGBoost, and Time-Series ARIMA directly inside memory without exporting sensitive enterprise data to external Python nodes.
                  </p>
                  <div className="text-[11px] text-blue-700 font-semibold pt-1">
                    120+ C++ native kernel algorithms
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100">
                <span className="text-[10px] font-mono text-slate-500">Zero Data Movement Modeling</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: ENTERPRISE SIZING & HARDWARE ARCHITECTURE REFERENCE BENCHMARKS
          (Pure Informational Benchmark Table in Blue & White - No Interactive Sliders)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                <Database className="w-3.5 h-3.5 text-blue-600" />
                <span>ENTERPRISE HARDWARE SIZING MATRIX</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                SAP HANA Certified Memory Sizing & S/4HANA Workload Benchmarks
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Hardware sizing for SAP HANA follows strict Quick Sizer methodologies. Columnar compression reduces raw relational database footprints by 3.5x on average, while Native Storage Extension (NSE) warm tiers save up to 40% on physical DRAM cost.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-md h-64">
                <img 
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80" 
                  alt="Enterprise Cloud Datacenter Compute Racks"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-blue-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-blue-200 bg-blue-50 text-blue-900 font-mono text-xs">
                  <th className="p-4 sm:p-5 font-bold uppercase">Enterprise Tier</th>
                  <th className="p-4 sm:p-5 font-bold uppercase">Source DB Footprint</th>
                  <th className="p-4 sm:p-5 font-bold uppercase text-blue-700">Recommended Physical DRAM</th>
                  <th className="p-4 sm:p-5 font-bold uppercase">NSE Warm Tier</th>
                  <th className="p-4 sm:p-5 font-bold uppercase">Certified Hyperscaler Profile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-blue-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Mid-Market Tier</td>
                  <td className="p-4 sm:p-5">500 GB &ndash; 1.0 TB</td>
                  <td className="p-4 sm:p-5 font-bold text-blue-700 font-mono">512 GB RAM</td>
                  <td className="p-4 sm:p-5">200 GB Buffer Pool</td>
                  <td className="p-4 sm:p-5 text-xs font-mono">AWS r5b.16xlarge &bull; Azure E64s_v5</td>
                </tr>

                <tr className="hover:bg-blue-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Large Enterprise Tier</td>
                  <td className="p-4 sm:p-5">1.5 TB &ndash; 3.0 TB</td>
                  <td className="p-4 sm:p-5 font-bold text-blue-700 font-mono">1.0 TB &ndash; 2.0 TB RAM</td>
                  <td className="p-4 sm:p-5">800 GB Buffer Pool</td>
                  <td className="p-4 sm:p-5 text-xs font-mono">AWS u-3tb1.metal &bull; Azure M128ms</td>
                </tr>

                <tr className="hover:bg-blue-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Global Corporate Tier</td>
                  <td className="p-4 sm:p-5">4.0 TB &ndash; 8.0 TB</td>
                  <td className="p-4 sm:p-5 font-bold text-blue-700 font-mono">4.0 TB RAM</td>
                  <td className="p-4 sm:p-5">2.5 TB Buffer Pool</td>
                  <td className="p-4 sm:p-5 text-xs font-mono">AWS u-6tb1.metal &bull; Azure M208ms_v2</td>
                </tr>

                <tr className="hover:bg-blue-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Extreme Scale-Out Tier</td>
                  <td className="p-4 sm:p-5">10.0+ TB Data Lake</td>
                  <td className="p-4 sm:p-5 font-bold text-blue-700 font-mono">Multi-Node Cluster</td>
                  <td className="p-4 sm:p-5">Integrated Data Lake</td>
                  <td className="p-4 sm:p-5 text-xs font-mono">3+1 Node Active-Active Topology</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: IN-MEMORY PERFORMANCE ENGINEERING FRAMEWORK
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-blue-50/40 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                <Gauge className="w-3.5 h-3.5 text-blue-600" />
                <span>PERFORMANCE ENGINEERING METHODOLOGY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                In-Memory Execution Architecture & Pushdown Standards
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Writing row-by-row procedural logic inside modern in-memory databases destroys throughput. Knooviq implements strict set-based declarative modeling that leverages parallel calculation trees directly in hardware cache.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-md h-60">
                <img 
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80" 
                  alt="Operations Control & Analytics Center"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">METHOD 1: SET-BASED VECTORIZATION</div>
              <h3 className="text-base font-bold text-slate-900">Declarative Calculation Pushdown</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Replaces slow iterative cursors with set-based operations. Pushes calculations down to the database kernel so millions of records aggregate in parallel across all CPU cores.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">METHOD 2: PROJECTION PRUNING</div>
              <h3 className="text-base font-bold text-slate-900">Dynamic Column Elimination</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Explicit column projection guarantees that unqueried fields are never touched in DRAM. Eliminates 90% of memory bus saturation compared to wildcard extractions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">METHOD 3: ZERO-COPY FEDERATION</div>
              <h3 className="text-base font-bold text-slate-900">Smart Data Access (SDA)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connects heterogeneous data sources (Snowflake, BigQuery, AWS S3) via virtual tables. Queries execute in place with zero redundant data duplication or staging batch delays.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: HIGH AVAILABILITY & DISASTER RECOVERY TOPOLOGY
          (Pure Informative Presentation in Blue & White - No Simulation Gimmicks)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
              <Network className="w-3.5 h-3.5 text-blue-600" />
              <span>BUSINESS CONTINUITY ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Zero-Data-Loss SAP HANA System Replication (HSR) Topology
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Configure Active/Active read-enabled clustering, automatic sub-30-second failover with Pacemaker, and cross-region tertiary disaster recovery for 99.999% availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Node 1: Primary Active */}
            <div className="p-6 rounded-2xl bg-white border border-blue-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-blue-600" />
                  <span className="text-xs font-mono font-bold uppercase text-slate-900">Zone A: Primary DC</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold border border-blue-200">
                  ACTIVE (READ/WRITE)
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Primary Production Engine</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Executes all write transactions, updates in-memory tables, and commits synchronously to the Redo Log.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700 bg-blue-50/50 p-3 rounded-xl border border-blue-100 font-medium">
                <div><strong>Replication:</strong> SyncMEM to Zone B</div>
                <div><strong>RPO:</strong> 0 Seconds (Zero Data Loss)</div>
              </div>
            </div>

            {/* Node 2: Secondary Active/Active */}
            <div className="p-6 rounded-2xl bg-white border border-blue-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-blue-600" />
                  <span className="text-xs font-mono font-bold uppercase text-slate-900">Zone B: Secondary DC</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold border border-blue-200">
                  HOT STANDBY (READ)
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Active/Active Read Node</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tables preloaded into RAM. Serves offloaded read-heavy SAP Analytics Cloud queries during normal operations.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700 bg-blue-50/50 p-3 rounded-xl border border-blue-100 font-medium">
                <div><strong>Failover SLA:</strong> &lt; 30 Seconds via Pacemaker</div>
                <div><strong>Preload Status:</strong> 100% In-Memory Ready</div>
              </div>
            </div>

            {/* Node 3: Tertiary Cross-Region DR */}
            <div className="p-6 rounded-2xl bg-white border border-blue-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-blue-600" />
                  <span className="text-xs font-mono font-bold uppercase text-slate-900">Region 2: Disaster Recovery</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold border border-blue-200">
                  ASYNC REPLICATION
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Cross-Geographic Standby</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Replicates asynchronously across 500+ miles to protect against catastrophic regional outages or cloud zone failures.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700 bg-blue-50/50 p-3 rounded-xl border border-blue-100 font-medium">
                <div><strong>Replication Lag:</strong> &lt; 200 Milliseconds</div>
                <div><strong>Cost Optimization:</strong> Dev/QA Dual Use Option</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: EXECUTIVE IN-MEMORY MODERNIZATION ADVISORY CTA
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-blue-950 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900 border border-blue-700 text-xs font-mono font-bold uppercase tracking-wider text-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-300" />
            <span>KNOOVIQ TECHNOLOGY PRACTICE ADVISORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Accelerate Your SAP HANA Cloud & In-Memory Roadmap
          </h2>

          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Whether migrating from legacy databases, rightsizing Native Storage Extension (NSE) warm tiers, or implementing GenAI Vector search, our certified SAP HANA architects deliver verified sub-millisecond execution.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact('SAP HANA Full Architecture Advisory')}
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition-all flex items-center gap-2 group"
            >
              <span>Schedule Architecture Advisory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/technology/sap-fiori"
              className="px-6 py-3.5 rounded-xl bg-white text-blue-950 font-semibold text-sm hover:bg-blue-50 transition-all border border-blue-200"
            >
              Explore SAP Fiori UX Studio &rarr;
            </Link>
          </div>

          <div className="pt-8 border-t border-blue-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-300">Zero Spindle Delay</div>
              <div className="text-[11px] text-blue-200 mt-0.5">DRAM In-Memory Speed</div>
            </div>
            <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-300">Zero Code Disruption</div>
              <div className="text-[11px] text-blue-200 mt-0.5">Seamless S/4HANA Upgrade</div>
            </div>
            <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-300">Multi-Model Unified</div>
              <div className="text-[11px] text-blue-200 mt-0.5">Vector + Spatial + Graph</div>
            </div>
            <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-300">99.999% Availability</div>
              <div className="text-[11px] text-blue-200 mt-0.5">HSR Zero-Data-Loss Failover</div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
