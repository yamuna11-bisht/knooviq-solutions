import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Wind, 
  BatteryCharging, 
  Droplets, 
  TrendingUp, 
  ShieldCheck, 
  Gauge, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  Workflow, 
  Boxes, 
  HelpCircle,
  Award,
  Sparkles,
  Zap,
  Activity
} from 'lucide-react';

interface IndustryPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const RenewableEnergyIndustryPage: React.FC<IndustryPageProps> = ({ onOpenContact }) => {
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const businessPillars = [
    {
      title: 'Solar PV Fleet Telematics & Inverter EAM',
      tag: 'SAP APM / SCADA',
      desc: 'Real-time string and central inverter telemetry identifying soiling losses, thermal degradation, and predictive component failures.',
      icon: Sun
    },
    {
      title: 'Wind Turbine Gearbox & Pitch Reliability',
      tag: 'DIGITAL TWIN',
      desc: 'Vibration spectrum analysis and SCADA wind speed correlation to schedule blade pitch and main bearing overhauls before catastrophic failure.',
      icon: Wind
    },
    {
      title: 'Battery Energy Storage (BESS) Governance',
      tag: 'SAP EAM / BESS',
      desc: 'Cell-level state-of-health (SoH) monitoring, thermal runaway early detection, and automated round-trip efficiency (RTE) warranty tracking.',
      icon: BatteryCharging
    },
    {
      title: 'PPA Contracts & Green Certificate (REC) Trading',
      tag: 'SAP COMMODITY MGMT',
      desc: 'Automates complex virtual and physical Power Purchase Agreement (PPA) settlements, merchant price hedging, and Guarantees of Origin (GoO).',
      icon: TrendingUp
    }
  ];

  const modularSolutions = [
    {
      category: 'SOLAR',
      categoryLabel: 'Utility-Scale Solar',
      icon: Sun,
      tag: 'REN-01',
      title: 'Solar Farm Inverter & Soiling Optimization',
      description: 'End-to-end solar asset management aggregating tracker angle feeds, pyranometer irradiance, and inverter MPPT efficiency into SAP APM.',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
      highlights: ['Soiling Loss Analytics', 'Automated Cleaning Dispatch', 'Inverter Thermography Alerts']
    },
    {
      category: 'WIND',
      categoryLabel: 'Wind Generation',
      icon: Wind,
      tag: 'REN-02',
      title: 'Offshore & Onshore Wind Turbine Health Twin',
      description: 'Dynamic digital twin analyzing yaw deviation, blade aerodynamic imbalances, and gearbox oil particle counts for offshore wind farms.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
      highlights: ['Gearbox Oil Debris Telemetry', 'Offshore Vessel Mobilization', 'Weather Window Work Packs']
    },
    {
      category: 'BESS',
      categoryLabel: 'Battery Storage',
      icon: BatteryCharging,
      tag: 'REN-03',
      title: 'Utility BESS Degradation & Warranty Cockpit',
      description: 'Continuously models cell cycle depth, battery rack state of charge (SoC), and verifies OEM contractual degradation throughput guarantees.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80',
      highlights: ['Degradation Curve Tracking', 'OEM Warranty Claim Auto-Trigger', 'C-Rate Thermal Profiling']
    },
    {
      category: 'HYDROGEN',
      categoryLabel: 'Green Hydrogen',
      icon: Droplets,
      tag: 'REN-04',
      title: 'Electrolyzer Lifecycle & Renewable Feedstock Sync',
      description: 'Synchronizes intermittent green power generation with PEM/alkaline electrolyzer stacks, tracking stack voltage drop and membrane degradation.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      highlights: ['Electrolyzer Stack Durability', 'Renewable Power Curtailment Sync', 'H2 Purity & Compression Telemetry']
    },
    {
      category: 'CONTRACTS',
      categoryLabel: 'PPA & Market Trading',
      icon: TrendingUp,
      tag: 'REN-05',
      title: 'PPA Settlement & Renewable Energy Certificates (REC)',
      description: 'Cross-references nodal wholesale day-ahead prices with contract strike prices, generating verified Guarantees of Origin (GoO) declarations.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      highlights: ['Hourly VPPA Reconciliations', 'Automated REC Tokenization', 'Merchant Power Risk Hedging']
    },
    {
      category: 'MAINTENANCE',
      categoryLabel: 'Field Execution',
      icon: Gauge,
      tag: 'REN-06',
      title: 'Remote Site Autonomous Drone & Sensor Dispatch',
      description: 'Integrates drone aerial thermal orthomosaic scans directly into SAP Asset Management, automatically generating technician remedial work orders.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      highlights: ['Drone Hotspot Auto-Ticketing', 'Remote Spare Parts Staging', 'Climb Safety Permit Verification']
    }
  ];

  const categories = [
    { key: 'ALL', label: 'All Modules' },
    { key: 'SOLAR', label: 'Utility Solar PV' },
    { key: 'WIND', label: 'Wind Generation' },
    { key: 'BESS', label: 'Battery Storage' },
    { key: 'HYDROGEN', label: 'Green Hydrogen' },
    { key: 'CONTRACTS', label: 'PPA & Settlements' }
  ];

  const valueMetrics = [
    {
      value: '+4.2%',
      label: 'Annual Energy Production (AEP)',
      desc: 'Predictive inverter tracking and aerodynamic blade balancing eliminating avoidable curtailment.'
    },
    {
      value: '-35%',
      label: 'Balance of Plant O&M Cost',
      desc: 'Digitized drone thermography and automated spare parts pre-kitting for remote wind and solar sites.'
    },
    {
      value: '100%',
      label: 'BESS Warranty Transparency',
      desc: 'Real-time battery degradation ledger binding continuous C-rate telematics to supplier warranty clauses.'
    },
    {
      value: '<30s',
      label: 'Hourly PPA Settlement',
      desc: 'Automated settlement comparing live nodal generation against contractual strike prices without manual spreadsheets.'
    }
  ];

  const caseStudies = [
    {
      badge: 'GLOBAL RENEWABLE IPP',
      title: 'Independent Power Producer Maximizes AEP Across 6.2 GW Global Solar & Wind Portfolio',
      client: 'Multinational Clean Energy Operator',
      impact: 'Recovered $18M annually in lost generation through automated soiling alerts and gearbox predictive EAM',
      stats: [
        { label: 'Capacity', val: '6.2 GW' },
        { label: 'O&M Savings', val: '-32%' },
        { label: 'Turbine Uptime', val: '99.4%' }
      ],
      desc: 'Unified 180 generation plants into SAP Asset Performance Management, feeding SCADA telematics into predictive maintenance models.'
    },
    {
      badge: 'GRID-SCALE BESS OPERATOR',
      title: '1.2 GWh Battery Storage Portfolio Secures Multi-Million Dollar Warranty Enforcement',
      client: 'European Energy Storage Pioneer',
      impact: 'Identified premature cell degradation early, securing $14M in OEM warranty battery module replacements',
      stats: [
        { label: 'BESS Sites', val: '24' },
        { label: 'SoH Accuracy', val: '99.8%' },
        { label: 'RTE Uplift', val: '+2.8%' }
      ],
      desc: 'Deployed real-time rack telemetry into SAP S/4HANA Asset Management, logging every charge/discharge cycle against contracted degradation thresholds.'
    },
    {
      badge: 'OFFSHORE WIND DEVELOPER',
      title: 'North Sea Offshore Wind Complex Streamlines Jack-Up Vessel Maintenance Logistics',
      client: '850 MW Offshore Wind Farm',
      impact: 'Reduced expensive offshore jack-up vessel mobilization delays by 22 days per season',
      stats: [
        { label: 'Weather Match', val: '99.2%' },
        { label: 'Vessel Cost', val: '-$6.5M' },
        { label: 'Safety Record', val: '100%' }
      ],
      desc: 'Integrated marine weather forecasts and helicopter/vessel dispatch with SAP S/4HANA work order scheduling.'
    }
  ];

  const faqs = [
    {
      q: 'How does Knooviq integrate varied SCADA protocols from multiple wind and solar OEMs?',
      a: 'We deploy an open industrial IoT edge layer supporting OPC UA, Modbus TCP, and IEC 61850. This normalizes data across Vestas, Siemens Gamesa, GE, SMA, and Sungrow assets into SAP Asset Performance Management.'
    },
    {
      q: 'Can the solution automate complex Virtual Power Purchase Agreement (VPPA) settlements?',
      a: 'Yes. Our PPA module captures settlement nodal points, hourly generation volumes, contract strike prices, and regional market indices (e.g. CAISO, ERCOT, Nord Pool), automating financial settlements and credit adjustments.'
    },
    {
      q: 'How does Knooviq manage battery degradation risk for BESS assets?',
      a: 'We capture continuous state of health (SoH), temperature variations, and depth-of-discharge (DoD) cycles. The system cross-references these with OEM warranty curves, notifying asset managers of adverse operating conditions before warranties are invalidated.'
    },
    {
      q: 'Does the platform support Guarantee of Origin (GoO) and REC traceability?',
      a: 'Yes. Every megawatt-hour produced is logged alongside its timestamp and generator serial ID to create immutable digital green certificates compliant with international greenhouse gas protocols.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2000&q=80" 
            alt="Renewable Wind Turbine and Solar Landscape" 
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-300 shadow-xl">
                <Sun className="w-3 h-3 text-emerald-300" />
                <span>RENEWABLE ENERGY PRACTICE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Empowering Clean Energy Yield with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-white">
                  Intelligent SAP Operations
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-2xl">
                Maximize Annual Energy Production (AEP), streamline remote wind and solar site O&M, and automate complex PPA settlements on SAP S/4HANA.
              </p>
            </motion.div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenContact('Renewable Energy Practice Consultation')}
                className="px-6 py-3 rounded-xl bg-[#0070C0] hover:bg-[#005a9e] text-white font-bold text-sm transition-all shadow-lg hover:shadow-[#0070C0]/30 flex items-center gap-2"
              >
                <span>Consult Renewable Architect</span>
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
              <span>CORE ARCHITECTURAL PILLARS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Scaling Clean Energy Portfolios with Industrial Precision
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Eliminate operational fragmentation across solar PV strings, wind turbine fleets, and battery energy storage installations.
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
              Pre-Configured Renewable Energy SAP Modules
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Purpose-built accelerators for independent power producers, green asset owners, and renewable EPC contractors.
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
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80';
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
              <span>PROVEN RESULTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Renewable Energy Client Case Studies
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Real performance gains delivered for global wind, solar PV, and battery storage operators.
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
              <span>CLEAN TECH ANSWERS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600">
              Technical answers regarding SCADA integration, BESS warranty tracking, and PPA settlements.
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-xs font-mono font-bold uppercase tracking-wider text-emerald-300">
            <Sun className="w-3.5 h-3.5 text-emerald-400" />
            <span>CLEAN ENERGY DIGITAL EXCELLENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready to Maximize Yield Across Your Renewable Portfolio?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Collaborate with Knooviq’s dedicated SAP Renewable Energy practice to modernize your solar, wind, and storage assets.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenContact('Renewable Energy Architecture Evaluation')}
              className="px-8 py-4 rounded-xl bg-[#0070C0] hover:bg-[#005a9e] text-white font-bold text-sm transition-all shadow-xl hover:shadow-[#0070C0]/40 flex items-center gap-2"
            >
              <span>Schedule Architecture Evaluation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RenewableEnergyIndustryPage;
