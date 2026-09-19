import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Truck, 
  Flame, 
  ShieldCheck, 
  TrendingUp, 
  Gauge, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  Workflow, 
  Boxes, 
  HelpCircle,
  Award,
  Factory,
  Compass,
  Cpu
} from 'lucide-react';

interface IndustryPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const MiningMetalsIndustryPage: React.FC<IndustryPageProps> = ({ onOpenContact }) => {
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const businessPillars = [
    {
      title: 'Pit-to-Port Supply Chain & Bulk Rail',
      tag: 'SAP TM / SUPPLY NETWORK',
      desc: 'Seamlessly coordinate mine stockpile reclamation, dedicated heavy-haul rail trains, and deep-water port vessel loading.',
      icon: Truck
    },
    {
      title: 'Ore Grade Blending & Metallurgical Assay',
      tag: 'SAP QM / MINING',
      desc: 'Real-time laboratory assay integration balancing silica, iron, and moisture content across stockpiles to satisfy customer smelter specs.',
      icon: Compass
    },
    {
      title: 'Heavy Mining Equipment (HME) Telematics',
      tag: 'SAP APM / FLEET',
      desc: 'Predictive health monitoring of ultra-class haul trucks, hydraulic excavators, and SAG mills, eliminating unplanned pit downtime.',
      icon: Gauge
    },
    {
      title: 'Smelter & Foundry Mill Execution (MES)',
      tag: 'SAP DIGITAL MANUFACTURING',
      desc: 'Track heat chemistry, ladle turnaround, and slab/billet serialization with direct Level 2 PLC and Level 3 MES integration.',
      icon: Factory
    }
  ];

  const modularSolutions = [
    {
      category: 'LOGISTICS',
      categoryLabel: 'Pit-to-Port Logistics',
      icon: Truck,
      tag: 'MINE-01',
      title: 'Pit-to-Port Train Consist & Vessel Loading',
      description: 'End-to-end bulk transportation management modeling rotary car dumpers, conveyor stacker-reclaimers, and cape-size vessel berth schedules.',
      image: 'https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?auto=format&fit=crop&w=800&q=80',
      highlights: ['Automated Train Consist Dispatch', 'Berth Window Optimization', 'Demurrage Penalties Elimination']
    },
    {
      category: 'METALLURGY',
      categoryLabel: 'Ore Grade Control',
      icon: Compass,
      tag: 'MINE-02',
      title: 'Stockpile Ore Grade Blending & Assay Balances',
      description: 'Dynamic block-model integration tracking ore chemistry from blast hole drill chips through crushing and flotation beneficiation.',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80',
      highlights: ['Automated Assay Lot Ingestion', 'Multi-Stockpile Blend Calculator', 'Moisture Penalty Deductions']
    },
    {
      category: 'SMELTING',
      categoryLabel: 'Smelter & Foundry',
      icon: Flame,
      tag: 'MINE-03',
      title: 'Smelter Heat Tracking & Cast House Serialization',
      description: 'Provides end-to-end heat genealogy, spectrometer element capture, and barcode serialization for billets, slabs, and coils.',
      image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80',
      highlights: ['Ladle Metallurgical Furnace Sync', 'Automated Mill Test Certificates', 'First-Pass Chemical Yield']
    },
    {
      category: 'FLEET',
      categoryLabel: 'Heavy Mining Fleet',
      icon: Gauge,
      tag: 'MINE-04',
      title: 'Ultra-Class Haul Fleet & Excavator EAM',
      description: 'Real-time telemetry monitoring haul truck tire pressures (TPMS), payload weight variance, engine blow-by, and strut pressures.',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
      highlights: ['TPMS Real-Time Sensor Feeds', 'Payload Structural Stress Alerts', 'Automated Shift PM Inspections']
    },
    {
      category: 'MAINTENANCE',
      categoryLabel: 'Beneficiation Plant',
      icon: Workflow,
      tag: 'MINE-05',
      title: 'Crusher, Mill & Flotation Asset Performance',
      description: 'Acoustic vibration analytics and motor stator current telemetry that predict SAG mill liner wear and slurry pump seal degradation.',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80',
      highlights: ['SAG Mill Liner Wear Predictor', 'Slurry Pump Bearing Telemetry', 'Automated Shutdown Tool Kitting']
    },
    {
      category: 'TAILINGS',
      categoryLabel: 'Environmental & ESG',
      icon: ShieldCheck,
      tag: 'MINE-06',
      title: 'GISTM Tailings Dam & Water Stewardship Vault',
      description: 'Automated compliance with the Global Industry Standard on Tailings Management (GISTM), logging piezometer pore pressure readings.',
      image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80',
      highlights: ['Piezometer Water Head Telemetry', 'GISTM Audit-Ready Repository', 'Mine Water Recycle Balance']
    }
  ];

  const categories = [
    { key: 'ALL', label: 'All Modules' },
    { key: 'LOGISTICS', label: 'Pit-to-Port Supply Chain' },
    { key: 'METALLURGY', label: 'Ore Grade Control' },
    { key: 'SMELTING', label: 'Smelter & Foundry' },
    { key: 'FLEET', label: 'Heavy Haul Fleet' },
    { key: 'TAILINGS', label: 'Tailings & ESG' }
  ];

  const valueMetrics = [
    {
      value: '-28%',
      label: 'Demurrage Vessel Penalties',
      desc: 'Optimized train-to-berth scheduling synchronizing stockpile stacker reclaimers with laycan arrival windows.'
    },
    {
      value: '99.2%',
      label: 'Smelter Spec Compliance',
      desc: 'Precision grade blending balancing chemical assay variations before charging high-temperature furnaces.'
    },
    {
      value: '+14.5%',
      label: 'Heavy Haul Truck Availability',
      desc: 'Predictive strut, tire, and transmission telemetry replacing reactive pit breakdown maintenance.'
    },
    {
      value: '100%',
      label: 'GISTM Tailings Compliance',
      desc: 'Continuous piezometric and satellite InSAR telemetry proving geotechnical dam stability.'
    }
  ];

  const caseStudies = [
    {
      badge: 'TIER-1 IRON ORE PRODUCER',
      title: 'Western Australian Iron Ore Giant Optimizes 180 MTPA Pit-to-Port Supply Chain',
      client: 'Global Diversified Mining Leader',
      impact: 'Unlocked $34M in added port throughput capacity and eradicated $8.2M in annual ship demurrage fines',
      stats: [
        { label: 'Throughput', val: '180 MTPA' },
        { label: 'Demurrage', val: '-62%' },
        { label: 'Stockpile Sync', val: 'Real-time' }
      ],
      desc: 'Implemented SAP Transportation Management and S/4HANA for Mining, connecting 16 mine rail loops directly to automated port ship loaders.'
    },
    {
      badge: 'INTEGRATED COPPER SMELTER',
      title: 'South American Copper Producer Modernizes Flotation and Smelting Execution',
      client: 'High-Volume Copper Concentrator & Smelter',
      impact: 'Improved copper recovery rates by 1.8%, representing $22M in recovered metal per annum',
      stats: [
        { label: 'Recovery Uplift', val: '+1.8%' },
        { label: 'Anode Rejects', val: '-40%' },
        { label: 'Assay Speed', val: 'Instant' }
      ],
      desc: 'Integrated laboratory LIMS spectrometers directly with SAP Digital Manufacturing, dynamically adjusting reagent dosing based on live feed assays.'
    },
    {
      badge: 'OPEN-PIT GOLD MINING',
      title: 'North American Gold Mine Cuts Heavy Equipment Downtime with IoT Telematics',
      client: 'Multi-Site Surface Gold Mine',
      impact: 'Avoided 6 catastrophic engine failures and improved overall fleet utilization by 12%',
      stats: [
        { label: 'Haul Trucks', val: '120+' },
        { label: 'Catastrophic Fails', val: '0' },
        { label: 'OEE Uplift', val: '+12%' }
      ],
      desc: 'Connected Caterpillar and Komatsu FMS telemetry into SAP Asset Performance Management for continuous predictive maintenance.'
    }
  ];

  const faqs = [
    {
      q: 'How does Knooviq integrate mine fleet management systems (FMS) with SAP?',
      a: 'We connect modular mining dispatch systems (e.g. Modular Mining DISPATCH, Wenco, Hexagon) via standardized APIs into SAP S/4HANA Asset Management. Operating hours, fault codes, and payload data feed automated work order triggers.'
    },
    {
      q: 'Can the solution handle complex metallurgical accounting and mass balances?',
      a: 'Yes. Our mining solution tracks dry metric tons, moisture percentages, and elemental assay fractions across every transfer point (crushers, conveyors, stockpiles, and process plant tailings).'
    },
    {
      q: 'How does the platform support GISTM tailings dam governance?',
      a: 'We provide an integrated risk and geotechnical data model that captures piezometer water levels, satellite InSAR ground movement measurements, and inspection checklists aligned with GISTM requirements.'
    },
    {
      q: 'Does your solution support commodity sales contracts and quotation periods (QP)?',
      a: 'Yes. Using SAP Commodity Management, we handle provisional invoicing, final assay reconciliation settlements, London Metal Exchange (LME) pricing formulas, and quotation period adjustments.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=2000&q=80" 
            alt="Open Pit Mining Machinery and Haul Truck" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 sm:via-slate-950/65 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-2.5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold uppercase tracking-widest text-amber-400 shadow-xl">
                <Layers className="w-3 h-3 text-amber-400" />
                <span>MINING & METALS PRACTICE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Pit-to-Port Optimization with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-200 to-white">
                  Intelligent SAP Mining Solutions
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-2xl">
                Harmonize geological mine planning, heavy equipment fleet telematics, ore grade blending, and smelter execution on an integrated SAP S/4HANA backbone.
              </p>
            </motion.div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenContact('Mining & Metals Practice Advisory')}
                className="px-6 py-3 rounded-xl bg-[#0070C0] hover:bg-[#005a9e] text-white font-bold text-sm transition-all shadow-lg hover:shadow-[#0070C0]/30 flex items-center gap-2"
              >
                <span>Consult Mining Architect</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#modular-solutions"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all border border-white/20 backdrop-blur-sm"
              >
                Explore Modules
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15">
              {valueMetrics.map((m, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="text-xl sm:text-2xl font-black text-white font-mono">{m.value}</span>
                  <p className="text-[11px] text-slate-300 font-medium">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: EXECUTIVE OVERVIEW */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Workflow className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>CORE MINING PILLARS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Synchronizing Extraction, Logistics, and Smelting
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Break down silos between mine site geologists, maintenance crews, and port logistics schedulers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0070C0] flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#0070C0] uppercase tracking-wider block">
                      {pillar.tag}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: MODULAR SOLUTIONS MATRIX */}
      <section id="modular-solutions" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Boxes className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>MODULAR SOLUTIONS MATRIX</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Pre-Configured Mining & Metals SAP Modules
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Engineered specifically for surface and underground miners, beneficiation plants, and primary metal smelters.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => {
              const isActive = activeSolutionCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveSolutionCategory(cat.key)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
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
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80';
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
              <span>MEASURABLE OUTCOMES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Enterprise Mining Transformation Results
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Proven throughput and asset reliability gains delivered across top-tier global producers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div 
                key={idx} 
                className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#0070C0] transition-all"
              >
                <div className="space-y-4">
                  <div className="inline-block px-2.5 py-1 rounded-md bg-sky-50 text-[10px] font-mono font-bold text-[#0070C0] uppercase">
                    {cs.badge}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-[#0070C0] font-semibold">{cs.client}</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cs.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {cs.stats.map((s, sIdx) => (
                      <div key={sIdx} className="space-y-0.5">
                        <span className="text-base font-black text-slate-900 font-mono block">{s.val}</span>
                        <span className="text-[10px] text-slate-500 font-medium block">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQS */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <HelpCircle className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>MINING ARCHITECTURE FAQS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600">
              Technical answers on SAP for Mining, fleet telematics, and metallurgical accounting.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-[#0070C0] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#0070C0]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0A1931] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>PIT-TO-PORT DIGITAL TRANSFORMATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready to Optimize Your Mining Supply Chain and Assets?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Engage with Knooviq’s dedicated SAP Mining & Metals architects to unlock added throughput and lower per-ton extraction costs.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenContact('Mining & Metals Architecture Advisory')}
              className="px-8 py-4 rounded-xl bg-[#0070C0] hover:bg-[#005a9e] text-white font-bold text-sm transition-all shadow-xl hover:shadow-[#0070C0]/40 flex items-center gap-2"
            >
              <span>Schedule Discovery Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MiningMetalsIndustryPage;
