import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Flame, 
  Droplet, 
  Layers, 
  Activity, 
  ShieldCheck, 
  Gauge, 
  TrendingUp, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  ChevronDown, 
  Sparkles, 
  Building2, 
  Clock, 
  Workflow, 
  Compass, 
  Cpu, 
  Zap, 
  Boxes, 
  HelpCircle,
  Factory,
  Award
} from 'lucide-react';

interface IndustryPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const OilGasIndustryPage: React.FC<IndustryPageProps> = ({ onOpenContact }) => {
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const businessPillars = [
    {
      title: 'Upstream Production & Wellhead Allocation',
      tag: 'SAP PRA / E&P',
      desc: 'Accurately allocate crude, gas, and natural gas liquids (NGL) from flow meters back to ownership interests with sub-second volumetric reconciliation.',
      icon: Compass
    },
    {
      title: 'Midstream Pipeline & Bulk Terminal Logistics',
      tag: 'SAP TSW / TM',
      desc: 'Model pipeline nominations, marine tanker charters, and tank farm custody transfers with real-time Trader’s and Scheduler’s Workbench integration.',
      icon: Layers
    },
    {
      title: 'Refinery Turnaround & Asset Integrity',
      tag: 'SAP APM / EAM',
      desc: 'Predictive corrosion monitoring, vibration telemetry, and digitized maintenance turnarounds that minimize costly unplanned plant shutdowns.',
      icon: Gauge
    },
    {
      title: 'Hydrocarbon Secondary Distribution & Retail',
      tag: 'SAP SDM / RFNO',
      desc: 'Automate multi-compartment fuel tanker dispatch, forecourt POS data reconciliation, and dynamic wholesale pricing at automated terminals.',
      icon: Factory
    }
  ];

  const modularSolutions = [
    {
      category: 'UPSTREAM',
      categoryLabel: 'Upstream E&P',
      icon: Compass,
      tag: 'OIL-01',
      title: 'Automated Wellhead Allocation & Production Accounting',
      description: 'End-to-end SAP Production and Revenue Accounting (PRA) automating complex division of interest (DOI) calculations, severance tax, and royalty disbursements.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      highlights: ['SAP PRA Volumetric Balancing', 'Automated DOI Royalty Calculations', 'Severance Tax Compliance']
    },
    {
      category: 'MIDSTREAM',
      categoryLabel: 'Midstream & Pipeline',
      icon: Layers,
      tag: 'OIL-02',
      title: 'Pipeline Nomination & Terminal Scheduling (TSW)',
      description: 'Synchronizes pipeline batch cycles, marine jetty berthing, and railway tank car nominations with real-time custody transfer documentation.',
      image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=800&q=80',
      highlights: ['Trader & Scheduler Workbench (TSW)', 'Custody Transfer Measurement', 'Marine Tanker Demurrage Control']
    },
    {
      category: 'DOWNSTREAM',
      categoryLabel: 'Downstream & Refining',
      icon: Factory,
      tag: 'OIL-03',
      title: 'Refinery Asset Integrity & Shutdown Governance',
      description: 'Digital turnaround work packs, API 510/570 pressure vessel thickness tracking, and predictive heat exchanger fouling analytics.',
      image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&w=800&q=80',
      highlights: ['Turnaround Milestones & WBS', 'API 570 Corrosion Telemetry', 'Dynamic Heat Exchanger RUL']
    },
    {
      category: 'DISTRIBUTION',
      categoryLabel: 'Secondary Distribution',
      icon: Droplet,
      tag: 'OIL-04',
      title: 'Secondary Distribution & Retail Forecourt Sync',
      description: 'Automates multi-drop fuel tanker dispatch, electronic bill of lading (e-BOL) processing, and retail gas station underground tank telemetry.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
      highlights: ['SAP SDM Trip Optimization', 'Forecourt Wet Stock Monitoring', 'Automated e-BOL Generation']
    },
    {
      category: 'HSE',
      categoryLabel: 'Process Safety & HSE',
      icon: ShieldCheck,
      tag: 'OIL-05',
      title: 'Permit-to-Work & Offshore Safety Governance',
      description: 'Digital lock-out/tag-out (LOTO), hot work gas testing verification, and risk-ranked SIMOPS (simultaneous operations) conflict prevention.',
      image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80',
      highlights: ['Digital Hot Work Permits', 'SIMOPS Visual Clash Detection', 'OSHA & BSEE Regulatory Audit']
    },
    {
      category: 'ESG',
      categoryLabel: 'Emissions & Carbon',
      icon: Zap,
      tag: 'OIL-06',
      title: 'Flaring & Fugitive Methane ESG Ledger',
      description: 'Direct IoT sensor integration logging flare stack gas volumes, optical gas imaging (OGI) leak repairs, and Scope 1 & 2 carbon accounting.',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      highlights: ['Continuous Flare Metering', 'Fugitive LDAR Repair Tracking', 'Scope 1-3 ESG Disclosures']
    }
  ];

  const categories = [
    { key: 'ALL', label: 'All Modules' },
    { key: 'UPSTREAM', label: 'Upstream E&P' },
    { key: 'MIDSTREAM', label: 'Midstream Logistics' },
    { key: 'DOWNSTREAM', label: 'Refining & Turnarounds' },
    { key: 'DISTRIBUTION', label: 'Fuel Distribution' },
    { key: 'HSE', label: 'Safety & Permits' }
  ];

  const valueMetrics = [
    {
      value: '<180ms',
      label: 'Telemetry Ingestion',
      desc: 'Real-time sensor streaming across SCADA, tank radar gauges, and pipeline pressure transmitters into S/4HANA.'
    },
    {
      value: '99.8%',
      label: 'Critical Asset Uptime',
      desc: 'Predictive vibration and thermal analytics eliminating catastrophic turbine and compressor downtime.'
    },
    {
      value: '-32%',
      label: 'Turnaround Overruns',
      desc: 'Integrated digital work packs and multi-contractor shift tracking slashing turnaround schedule slips.'
    },
    {
      value: '100%',
      label: 'Audit-Ready PRA Compliance',
      desc: 'Automated division of interest accounting satisfying federal royalties, joint ventures, and tax authorities.'
    }
  ];

  const caseStudies = [
    {
      badge: 'OFFSHORE DRILLING SUPERMAJOR',
      title: 'North Sea Operator Automates Hydrocarbon Allocation Across 42 Offshore Platforms',
      client: 'Global Integrated Energy Company',
      impact: 'Eliminated manual well reconciliation errors, saving $14M annually in joint venture audit adjustments',
      stats: [
        { label: 'DOI Accuracy', val: '99.99%' },
        { label: 'Reconciliation', val: 'Instant' },
        { label: 'Audit Risk', val: '-85%' }
      ],
      desc: 'Implemented SAP S/4HANA Oil & Gas PRA with automated IoT well-head choke telemetry, instantly distributing production among 8 license concession partners.'
    },
    {
      badge: 'NATIONAL REFINING LEADER',
      title: 'Middle East Megarefinery Slashes Plant Turnaround Cycle by 9 Days',
      client: '800,000 bpd Petroleum Refining Complex',
      impact: 'Generated $38M in added throughput capacity through predictive asset shutdown governance',
      stats: [
        { label: 'Turnaround Days', val: '-9 Days' },
        { label: 'Contractor Sync', val: '100%' },
        { label: 'Safety Incidents', val: 'Zero' }
      ],
      desc: 'Deployed SAP Asset Performance Management (APM) and digital permits to coordinate 4,200 maintenance contractors across 16 refinery units.'
    },
    {
      badge: 'MIDSTREAM PIPELINE NETWORK',
      title: 'Transcontinental Pipeline Automates Bulk Custody Transfers and Batch Scheduling',
      client: 'Major Energy Infrastructure Operator',
      impact: 'Streamlined scheduling across 12,000 miles of crude and product pipelines with zero contamination losses',
      stats: [
        { label: 'Throughput Speed', val: '+18%' },
        { label: 'Demurrage', val: '-44%' },
        { label: 'Batch Interface', val: 'Sub-second' }
      ],
      desc: 'Connected SCADA pipeline telemetry to SAP TSW (Trader’s and Scheduler’s Workbench), automating nominations and custody tickets.'
    }
  ];

  const faqs = [
    {
      q: 'How does Knooviq accelerate SAP S/4HANA Oil & Gas deployments?',
      a: 'We leverage pre-configured upstream PRA models, secondary distribution accelerators, and standardized API integrations for Honeywell, Emerson, and AVEVA PI historians, reducing delivery cycles from 18 months down to 24–32 weeks.'
    },
    {
      q: 'Can the platform integrate with legacy SCADA and DCS systems?',
      a: 'Yes. Our SAP BTP architecture features certified OPC UA, MQTT, and Modbus connectors that stream live sensor readings (flow rates, pressures, temperatures) directly into SAP S/4HANA Asset Management.'
    },
    {
      q: 'How does Knooviq handle complex Joint Venture Accounting (JVA)?',
      a: 'Our solution automates cash calls, joint interest billing (JIB), partner cutbacks, and equity share reassessments in full compliance with AIPN and international operator standards.'
    },
    {
      q: 'Does your solution support emissions monitoring for ESG compliance?',
      a: 'Yes. Using SAP Sustainability Control Tower, we capture real-time flaring data, optical gas detection logs, and fuel consumption to generate audit-ready Scope 1, 2, and 3 ESG reports.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000&q=80" 
            alt="Offshore Oil & Gas Platform" 
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold uppercase tracking-widest text-orange-400 shadow-xl">
                <Flame className="w-3 h-3 text-orange-400" />
                <span>ENERGY & RESOURCES PRACTICE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Digital Oil & Gas Transformation with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3E0] via-sky-300 to-white">
                  Intelligent SAP Architecture
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-2xl">
                Synchronize upstream wellhead production accounting, midstream pipeline scheduling, and downstream refinery turnaround operations on a single unified S/4HANA backbone.
              </p>
            </motion.div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenContact('Oil & Gas SAP Practice Consultation')}
                className="px-6 py-3 rounded-xl bg-[#0070C0] hover:bg-[#005a9e] text-white font-bold text-sm transition-all shadow-lg hover:shadow-[#0070C0]/30 flex items-center gap-2"
              >
                <span>Consult Energy Architect</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#modular-solutions"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all border border-white/20 backdrop-blur-sm"
              >
                Explore Modules
              </a>
            </div>

            {/* Quick Metrics Bar */}
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
              <span>CORE ARCHITECTURAL PILLARS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Bridging Hydrocarbon Physics with Enterprise ERP
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Eliminate information silos between field SCADA telemetry, joint venture accounting, and fuel logistics.
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
              Pre-Configured Oil & Gas SAP Modules
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Production-ready accelerators for upstream producers, midstream pipeline operators, and downstream refineries.
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
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80';
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
              <span>PROVEN VALUE REALIZATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Enterprise Client Success Stories
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Real results delivered for upstream exploration, pipeline carriers, and complex global refineries.
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
              <span>EXPERT GUIDANCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600">
              Technical insights on SAP Oil & Gas modernization, architecture, and integration.
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-xs font-mono font-bold uppercase tracking-wider text-orange-300">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>ACCELERATE YOUR ENERGY TRANSFORMATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready to Modernize Your Upstream, Midstream, or Downstream Operations?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a confidential technical discovery session with Knooviq's certified SAP Oil & Gas solution architects.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenContact('Oil & Gas Architecture Advisory')}
              className="px-8 py-4 rounded-xl bg-[#0070C0] hover:bg-[#005a9e] text-white font-bold text-sm transition-all shadow-xl hover:shadow-[#0070C0]/40 flex items-center gap-2"
            >
              <span>Book Discovery Workshop</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OilGasIndustryPage;
