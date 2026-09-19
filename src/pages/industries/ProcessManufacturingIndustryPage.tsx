import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  RefreshCw, 
  Settings, 
  Cpu, 
  Workflow, 
  Gauge, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  Boxes, 
  ChevronRight, 
  ChevronDown, 
  Zap, 
  Compass, 
  Factory, 
  Flame, 
  Award,
  Layers,
  FileText,
  Globe2,
  Clock
} from 'lucide-react';
import { IndustryFaqSection } from '../../components/common/IndustryFaqSection';

interface ProcessManufacturingIndustryPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const ProcessManufacturingIndustryPage: React.FC<ProcessManufacturingIndustryPageProps> = ({ 
  onOpenContact 
}) => {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const challenges = [
    {
      icon: RefreshCw,
      title: 'Raw Material Potency Variance',
      tag: 'FORMULATION DRIFT',
      desc: 'Active ingredient concentration varies batch-by-batch; static master recipes fail to adjust ingredient volumes, leading to out-of-spec batches.',
      footer: 'Solved with Dynamic Potency Compensation'
    },
    {
      icon: AlertTriangle,
      title: 'Vessel Cross-Contamination Risks',
      tag: 'CLEANING VALIDATION',
      desc: 'Incomplete or unverified Clean-In-Place (CIP) cycles risk contaminating sensitive downstream chemical and specialty formulations.',
      footer: 'Automated via CIP Telemetry Verification'
    },
    {
      icon: FileText,
      title: 'Cumbersome Paper Batch Records',
      tag: 'AUDIT COMPLIANCE',
      desc: 'Manual paper batch records require hundreds of operator signatures, delaying batch release reviews by days or weeks.',
      footer: 'Accelerated via Electronic Batch Records (EBR)'
    },
    {
      icon: Gauge,
      title: 'Continuous Flow Reaction Volatility',
      tag: 'PROCESS MONITORING',
      desc: 'Thermal spikes and pressure excursions inside continuous chemical reactors cause catalyst degradation and unrecoverable yield loss.',
      footer: 'Stabilized via Real-Time SCADA/DCS Ingestion'
    },
    {
      icon: Boxes,
      title: 'Tank Farm & Co-Product Accounting',
      tag: 'MATERIAL BALANCING',
      desc: 'Tracking bulk liquid storage, continuous pipeline flows, and co-product/by-product splitting creates severe book-to-physical inventory variances.',
      footer: 'Reconciled via Continuous Tank Balance Engine'
    },
    {
      icon: ShieldCheck,
      title: 'Stringent cGMP & ISA-88 Standards',
      tag: 'REGULATORY AUDITS',
      desc: 'Failing to prove rigid adherence to ISA-88 recipe phase states during regulatory audits invites severe compliance warnings and production halts.',
      footer: 'Enforced with Native ISA-88 State Modeling'
    }
  ];

  const architectureLayers = [
    {
      title: '1. Plant Automation & Process Control Layer',
      subtitle: 'SCADA, Distributed Control Systems (DCS), Bioreactors & Valves',
      desc: 'Direct industrial protocol integration with Emerson DeltaV, ABB, Honeywell, and Siemens PCS7 DCS systems via OPC UA and PI Web API.',
      tags: ['OPC UA', 'Emerson DeltaV', 'Honeywell Experion', 'OSIsoft PI System', 'DCS Gateways']
    },
    {
      title: '2. Batch Execution & Electronic Batch Records (SAP DMC)',
      subtitle: 'ISA-88 Phase Execution, Electronic Signatures & CIP Tracking',
      desc: 'Guides operators through ingredient additions with barcode checks, enforces dual-witness electronic signatures, and logs CIP wash cycles.',
      tags: ['SAP DMC for Process', 'Electronic Batch Records (EBR)', 'ISA-88 State Engine', 'e-Signatures']
    },
    {
      title: '3. SAP S/4HANA Process Manufacturing Core',
      subtitle: 'Process Orders, Master Recipes, Potency & Material Balancing',
      desc: 'Executes process order scheduling, co-product split accounting, dynamic active ingredient compensation, and quality release workflows.',
      tags: ['Process Order Execution', 'Master Recipes (PP-PI)', 'Batch Management', 'Co-Product Costing']
    },
    {
      title: '4. Quality Management & Regulatory Compliance Hub',
      subtitle: 'Certificate of Analysis (CoA), Stability Studies & Traceability',
      desc: 'Automates laboratory sample management (LIMS), stability testing curves, and generates customer Certificates of Analysis upon batch release.',
      tags: ['SAP QM', 'LIMS Integration', 'Automated CoA', 'Track & Trace Genealogy']
    }
  ];

  const modularSolutions = [
    {
      category: 'RECIPES',
      categoryLabel: 'Recipe & Formulation',
      icon: RefreshCw,
      tag: 'PROC-01',
      title: 'Dynamic Recipe Formulation & Potency Control',
      description: 'Automated recipe management with active potency compensation algorithms that adjust ingredient volumes based on laboratory assay assays.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      highlights: ['Active Potency Balancing', 'ISA-88 Batch Execution', 'Yield Optimization']
    },
    {
      category: 'EBR',
      categoryLabel: 'Batch Records',
      icon: FileText,
      tag: 'PROC-02',
      title: 'Paperless Electronic Batch Records (EBR)',
      description: 'Streamlined digital batch execution with barcode-verified raw material additions, automated in-process test results, and e-signatures.',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80',
      highlights: ['21 CFR Part 11 Compliant', 'Dual-Witness Verification', 'Instant Exception Review']
    },
    {
      category: 'CIP',
      categoryLabel: 'Hygiene & CIP',
      icon: ShieldCheck,
      tag: 'PROC-03',
      title: 'Vessel Clean-In-Place (CIP) & Sterilization Log',
      description: 'Automated tracking of CIP wash temperatures, flow rates, and chemical rinse conductivity to certify vessel cleanliness before new batch charging.',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80',
      highlights: ['Automated CIP Telemetry', 'Contamination Prevention', 'Vessel History Tracking']
    },
    {
      category: 'TANK',
      categoryLabel: 'Bulk Inventory',
      icon: Gauge,
      tag: 'PROC-04',
      title: 'Tank Farm Inventory & Continuous Material Balance',
      description: 'Real-time telemetry from storage silos, cryogenic tanks, and pipeline flowmeters, reconciling physical volumes with book inventory.',
      image: 'https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?auto=format&fit=crop&w=800&q=80',
      highlights: ['Continuous Level Sensors', 'Pipeline Mass Balance', 'Co-Product Allocation']
    },
    {
      category: 'QUALITY',
      categoryLabel: 'Quality & CoA',
      icon: Award,
      tag: 'PROC-05',
      title: 'Automated Certificate of Analysis (CoA) Engine',
      description: 'Generates multi-language Certificates of Analysis directly from SAP QM inspection lots, automatically attaching them to customer deliveries.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      highlights: ['Auto CoA Generation', 'Batch Release Approval', 'Stability Study Tracking']
    },
    {
      category: 'TRACE',
      categoryLabel: 'Traceability',
      icon: Workflow,
      tag: 'PROC-06',
      title: 'Bi-Directional Batch Geneology & Recall Lock',
      description: 'Instant forward and reverse genealogy across raw materials, intermediary blends, bulk tanks, and distributed finished product containers.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      highlights: ['Sub-Second Trace Query', 'Targeted Recall Isolation', 'Supplier Lot Correlation']
    }
  ];

  const categories = [
    { key: 'ALL', label: 'All Modules' },
    { key: 'RECIPES', label: 'Formulation & Potency' },
    { key: 'EBR', label: 'Electronic Batch Records' },
    { key: 'CIP', label: 'Hygiene & CIP' },
    { key: 'TANK', label: 'Tank Farm & Bulk' },
    { key: 'QUALITY', label: 'Quality & CoA' }
  ];

  const valueMetrics = [
    {
      value: '99.7%',
      label: 'Batch Yield Consistency',
      desc: 'Active ingredient compensation eliminates formulation drift and guarantees target specification.'
    },
    {
      value: '-60%',
      label: 'Batch Release Lead Time',
      desc: 'Review-by-exception Electronic Batch Records eliminate days of manual paper document auditing.'
    },
    {
      value: '100%',
      label: 'CIP Wash Validation',
      desc: 'Automated logging of wash temperature, duration, and titration guarantees zero cross-contamination.'
    },
    {
      value: '<2 Min',
      label: 'Complete Geneology Trace',
      desc: 'Rapid backward and forward genealogy identifying all impacted batches across multi-plant networks.'
    }
  ];

  const caseStudies = [
    {
      badge: 'SPECIALTY CHEMICALS LEADER',
      title: 'Specialty Resins & Polymers Producer Elevates Yield to 99.8%',
      client: 'Multi-Plant Chemical Processing Conglomerate',
      impact: 'Connected 38 continuous and batch reactors with automated formula potency balancing',
      stats: [
        { label: 'Yield Variance', val: '<0.2%' },
        { label: 'Scrap Savings', val: '$2.4M/yr' },
        { label: 'Reactor Uptime', val: '98.5%' }
      ],
      desc: 'Integrated Emerson DeltaV DCS telemetry into SAP S/4HANA Process Manufacturing, automating recipe phase execution and eliminating manual raw material weighing errors.'
    },
    {
      badge: 'FLAVOR & FRAGRANCE PRODUCER',
      title: 'Global Flavor Ingredients Leader Accelerates Batch Release by 3x',
      client: 'Multi-National Food & Chemical Ingredient Manufacturer',
      impact: 'Eliminated 120,000 annual paper batch records across 6 global production facilities',
      stats: [
        { label: 'Release Speed', val: '3x Faster' },
        { label: 'Paper Eliminated', val: '100%' },
        { label: 'Audit Time', val: '-65%' }
      ],
      desc: 'Deployed SAP Digital Manufacturing Cloud for Process with barcode-guided ingredient addition and dual-witness digital signatures, achieving complete paperless compliance.'
    },
    {
      badge: 'INDUSTRIAL COATINGS & PAINTS',
      title: 'High-Performance Coatings Leader Eliminates Vessel Contamination',
      client: 'Automotive & Marine Coatings Manufacturer',
      impact: 'Zero cross-contamination incidents across 24 multi-use mixing and holding vessels',
      stats: [
        { label: 'Contamination', val: '0 Incidents' },
        { label: 'CIP Water Saved', val: '22%' },
        { label: 'Vessel Turnover', val: '+28%' }
      ],
      desc: 'Implemented automated CIP wash monitoring directly linked to production order release in SAP, preventing vessel charging until automated clean certification was granted.'
    }
  ];

  const faqs = [
    {
      q: 'How does dynamic active ingredient potency compensation work in SAP S/4HANA?',
      a: 'When raw materials arrive, laboratory assay results are logged in SAP Quality Management. During process order creation, S/4HANA automatically recalculates component quantities based on active concentration, adjusting carrier solvent or active volumes to guarantee target potency.'
    },
    {
      q: 'Does the Electronic Batch Record (EBR) meet 21 CFR Part 11 and cGMP requirements?',
      a: 'Yes. Our EBR solutions enforce cryptographic dual-witness electronic signatures, automated audit trails for all data modifications, and time-stamped phase state transitions compliant with FDA 21 CFR Part 11 and EU Annex 11.'
    },
    {
      q: 'Can Knooviq integrate with our existing DCS (DeltaV, ABB 800xA, Honeywell)?',
      a: 'Yes. Utilizing OPC UA and dedicated DCS connectors, we establish high-reliability bi-directional communication. SAP downloads recipe setpoints to the DCS and continuously receives phase completion acknowledgments.'
    },
    {
      q: 'How does the system track inventory in continuous pipelines and bulk liquid tanks?',
      a: 'By integrating radar level gauges and mass flowmeters into S/4HANA Silo Management, inventory balances update continuously, automatically attributing tank shrinkage, evaporation, or yield adjustments to active process orders.'
    },
    {
      q: 'How does "Review-by-Exception" reduce batch release review time?',
      a: 'Instead of QA reviewers manually scanning 80 pages of paper records, the system flags only process parameters that breached critical thresholds. Reviewers inspect exceptions in minutes rather than spending days reviewing normal data.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        
        {/* Full-Bleed Background Image with Seamless Cinematic Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=2000&q=80" 
            alt="Process Manufacturing Chemical Plant" 
            className="w-full h-full object-cover object-center"
          />
          {/* Multi-layered cinematic gradient scrim: left dark for perfect readability, smooth fade to showcase vibrant facility on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 sm:via-slate-950/60 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          <div className="max-w-3xl space-y-4">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-2.5"
            >
              {/* Practice Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-300 shadow-xl">
                <RefreshCw className="w-3 h-3 text-cyan-300" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>
              
              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Process <span className="text-[#38BDF8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">Manufacturing</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Automating Recipe Potency Compensation, ISA-88 Batch Execution & Paperless Compliance.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3 max-w-2xl"
            >
              <p className="text-sm sm:text-base lg:text-[17px] text-slate-100 font-normal leading-relaxed drop-shadow-sm">
                Scale formulation and continuous processing with <strong className="text-white font-semibold">SAP S/4HANA Clean Core</strong>, <strong className="text-cyan-300 font-semibold">dynamic potency compensation</strong>, automated electronic batch records (EBR), and <strong className="text-white font-semibold">validated CIP sanitation governance</strong>.
              </p>
              
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>ISA-88 Recipe Control</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Electronic Batch Records (EBR)</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Potency Compensation</span>
                </span>
              </div>
            </motion.div>

            {/* Enterprise Architectural Trust Ribbon */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 sm:mt-8 pt-4 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
            >
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Architecture</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">SAP S/4HANA Clean Core</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Recipe Control</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">ISA-88 Batch Execution</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Compliance</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">Paperless EBR & Audit Trail</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Sanitation</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">Automated CIP Validation</span>
              </div>
            </motion.div>

          </div>

        </div>

      </section>

      {/* SECTION 2: EXECUTIVE PERSPECTIVE */}
      <section className="py-12 sm:py-14 lg:py-16 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Factory className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>EXECUTIVE PERSPECTIVE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Mastering Continuous Reaction Dynamics and Stringent Batch Integrity
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Process manufacturing requires dynamic flexibility: raw material potencies drift, tank levels fluctuate, and CIP cycles must be rigorously verified. Knooviq transforms static recipes into adaptive in-memory execution engines that ensure high yield and paperless compliance.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'Dynamic active ingredient potency compensation algorithms',
                  'ISA-88 batch recipe control & automated phase execution',
                  'Clean-In-Place (CIP) cycle verification & audit logs',
                  'Automated Certificate of Analysis (CoA) generation'
                ].map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-800 bg-white p-3 rounded-lg border border-slate-200 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#0070C0] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-300 shadow-md bg-slate-900 min-h-[320px]">
              <img 
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80" 
                alt="Process Reactors & Automation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-6" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold mb-1">AUTOMATED RECIPE EXECUTION</div>
                <div className="text-lg sm:text-xl font-bold text-white leading-snug">Closed-Loop DCS Integration & Dynamic Potency Balancing</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: STRATEGIC CHALLENGES */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
              <Compass className="w-3.5 h-3.5 text-rose-600" />
              <span>PROCESS BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Navigating High-Consequence Process Challenges
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Potency variance, paper record delays, and vessel cross-contamination undermine process plant throughput.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {challenges.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="h-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-sky-50 text-[#0070C0] border border-slate-200 group-hover:bg-[#0070C0] group-hover:text-white transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono uppercase text-slate-500 font-bold block">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-950 leading-snug group-hover:text-[#0070C0] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {item.footer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: PLATFORM ARCHITECTURE */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#070B14] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase">
              <Workflow className="w-3.5 h-3.5 text-cyan-300" />
              <span>ISA-88 PROCESS ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Process Stack: From Distributed Control (DCS) to S/4HANA
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Closed-loop synchronization connecting reactor SCADA/DCS systems with electronic batch records and quality release.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 space-y-3">
              {architectureLayers.map((layer, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveLayer(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all border ${
                    activeLayer === idx
                      ? 'bg-sky-500/20 border-sky-400 text-white shadow-lg'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-bold text-white">{layer.title}</h3>
                    <ChevronRight className={`w-4 h-4 transition-transform ${activeLayer === idx ? 'rotate-90 text-cyan-300' : 'text-slate-400'}`} />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 mt-1">{layer.subtitle}</div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-700 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-mono font-bold uppercase mb-2">
                <Zap className="w-4 h-4 text-cyan-300" />
                <span>Architecture Tier {activeLayer + 1} of 4</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-cyan-300 mb-2">
                {architectureLayers[activeLayer].title}
              </h3>
              <p className="text-sm sm:text-base text-cyan-200/90 font-medium mb-3">
                {architectureLayers[activeLayer].subtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                {architectureLayers[activeLayer].desc}
              </p>

              <div className="space-y-2 pt-4 border-t border-slate-800">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Integrated Standards & Protocols</div>
                <div className="flex flex-wrap gap-2">
                  {architectureLayers[activeLayer].tags.map((t, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md bg-white/10 text-xs font-mono font-semibold text-cyan-300 border border-white/15">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MODULAR SOLUTIONS (50% Image + 50% Content, No Inquire Button) */}
      <section id="modular-solutions" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Boxes className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>MODULAR SOLUTIONS MATRIX</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Pre-Configured Process SAP Modules
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Production-tested solutions for continuous and batch chemical, pharmaceutical ingredient, and specialty fluid processors.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => {
              const isActive = activeSolutionCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveSolutionCategory(cat.key)}
                  className={`industry-category-tab px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#0070C0] text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {modularSolutions
              .filter((sol) => activeSolutionCategory === 'ALL' || sol.category === activeSolutionCategory)
              .map((sol) => {
                const IconComponent = sol.icon;
                return (
                  <div
                    key={sol.title}
                    className="rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0070C0] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group h-full"
                  >
                    {/* 1. Top Image Portion */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 shrink-0">
                      <img 
                        src={sol.image} 
                        alt={sol.title}
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80';
                        }}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                      
                      <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-cyan-300 uppercase">
                        {sol.tag}
                      </div>
                    </div>

                    {/* 2. Bottom Content Body */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-[#0070C0] uppercase tracking-wider">
                            {sol.categoryLabel}
                          </span>
                          <div className="p-1.5 rounded-lg bg-sky-50 text-[#0070C0] border border-slate-200 group-hover:bg-[#0070C0] group-hover:text-white transition-all">
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-slate-950 line-clamp-2 leading-snug group-hover:text-[#0070C0] transition-colors" title={sol.title}>
                          {sol.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                          {sol.description}
                        </p>
                      </div>

                      <div className="space-y-2 pt-3 border-t border-slate-100 mt-4">
                        {sol.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span className="truncate">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

        </div>
      </section>

      {/* SECTION 8: CASE STUDIES */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Award className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PROVEN CLIENT SUCCESS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Process Leaders Transforming with Knooviq
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              See how chemical and ingredient leaders eliminated manual batch records and maximized yield.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0070C0] transition-all flex flex-col justify-between">
                <div>
                  <div className="inline-block px-2.5 py-1 rounded-md bg-sky-50 text-xs font-mono font-bold text-[#0070C0] border border-sky-200 mb-3">
                    {cs.badge}
                  </div>
                  <h3 className="text-base font-bold text-slate-950 mb-2 leading-snug">
                    {cs.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-500 font-medium mb-3">
                    {cs.client}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-5">
                    {cs.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="text-xs font-mono uppercase font-bold text-emerald-700 block mb-1">Delivered Outcome</span>
                  <p className="text-sm font-semibold text-slate-950 leading-relaxed">{cs.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQS */}
      <IndustryFaqSection
        badge="PROCESS & RECIPE CONTROL FAQ"
        title="Frequently Asked Questions"
        subtitle="Technical answers regarding active ingredient potency compensation, electronic batch records (EBR), and ISA-88 recipe execution."
        faqs={faqs}
        onOpenContact={onOpenContact}
        contactTopic="Process Manufacturing & Batch Recipe Architecture"
      />

      {/* SECTION 11: FINAL CTA (Consumer & Commerce Style) */}
      <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-r from-[#003B73] via-[#005B9E] to-[#0070C0] text-white">
        
        {/* Abstract 3D Digital / Network Mesh Visual */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
              backgroundSize: '100% 100%'
            }}
          />
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: 'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
              backgroundSize: '36px 36px'
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-cyan-200 backdrop-blur-sm shadow-sm">
            <Flame className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR PROCESS MANUFACTURING ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build a Smarter Process Manufacturing Operation?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Connect your recipe execution, active potency compensation, EBR validation, and DCS automation with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact?.('Process Manufacturing Consultation')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to Our Process Experts</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0070C0]" />
            </button>

            <Link
              to="/solutions/sap-s4hana"
              className="px-8 py-4 rounded-xl bg-transparent hover:bg-white/10 text-white text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-white/40 hover:border-white transition-all flex items-center gap-2"
            >
              <span>Explore SAP Solutions</span>
            </Link>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-sky-200">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>SAP Certified Clean Core</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-300" />
              <span>Rapid Time-to-Value Delivery</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-sky-300" />
              <span>Global 24/7 SLA AMS Support</span>
            </span>
          </div>

        </div>

      </section>

    </div>
  );
};
