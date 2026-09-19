import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Activity, 
  Gauge, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  Workflow, 
  Building2, 
  Boxes, 
  HelpCircle,
  Award,
  Radio,
  Clock,
  Cpu
} from 'lucide-react';

interface IndustryPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const PowerUtilitiesIndustryPage: React.FC<IndustryPageProps> = ({ onOpenContact }) => {
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const businessPillars = [
    {
      title: 'Smart Metering & AMI Telemetry (MDUS)',
      tag: 'SAP IS-U / AMI',
      desc: 'Process billions of 15-minute interval smart meter readings daily with automated validation, editing, and estimation (VEE) engines.',
      icon: Radio
    },
    {
      title: 'Transmission & Distribution Grid EAM',
      tag: 'SAP APM / GIS',
      desc: 'Predictive health scoring of power transformers, switchgear, and overhead distribution feeders with bi-directional GIS mapping.',
      icon: Gauge
    },
    {
      title: 'Dynamic Time-of-Use (TOU) & Complex Billing',
      tag: 'SAP S/4HANA UTILITIES',
      desc: 'Automate multi-tier green energy tariffs, net-metering solar export credits, and commercial industrial demand charges in real time.',
      icon: Zap
    },
    {
      title: 'Emergency Outage & Mobile Crew Dispatch',
      tag: 'SAP FSM / OMS',
      desc: 'Automated storm outage triage and GPS crew routing linking SCADA tripped breakers directly with field repair teams.',
      icon: Activity
    }
  ];

  const modularSolutions = [
    {
      category: 'METERING',
      categoryLabel: 'Smart Meter & AMI',
      icon: Radio,
      tag: 'UTIL-01',
      title: 'High-Volume AMI Interval Data & MDUS Engine',
      description: 'End-to-end Meter Data Unification and Synchronization (MDUS) integrating Landis+Gyr, Itron, and Kamstrup head-end systems into S/4HANA.',
      image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=800&q=80',
      highlights: ['Sub-Second 15-Min VEE Ingestion', 'Automated Tamper Alert Triggers', 'Virtual Meter Aggregation']
    },
    {
      category: 'GRID',
      categoryLabel: 'T&D Asset Health',
      icon: Gauge,
      tag: 'UTIL-02',
      title: 'GIS-Connected Substation & Feeder Reliability',
      description: 'Synchronizes Esri ArcGIS network topologies with SAP Linear Asset Management, evaluating transformer dissolved gas analysis (DGA).',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80',
      highlights: ['DGA Dissolved Gas Analytics', 'Esri ArcGIS Bi-Directional Sync', 'Feeder Criticality Indexing']
    },
    {
      category: 'BILLING',
      categoryLabel: 'Customer & Billing',
      icon: Zap,
      tag: 'UTIL-03',
      title: 'SAP for Utilities (IS-U) Complex Tariffs',
      description: 'Scalable billing engine managing regulated multi-rate structures, net-energy metering (NEM 3.0), and municipal franchise fees.',
      image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80',
      highlights: ['Time-of-Use Dynamic Rates', 'Rooftop Solar NEM Credits', 'Automated Budget Billing']
    },
    {
      category: 'DISPATCH',
      categoryLabel: 'Outage & Field Force',
      icon: Activity,
      tag: 'UTIL-04',
      title: 'Outage Restoration & Mobile Emergency Dispatch',
      description: 'Coordinates tree trimmers, line crews, and high-voltage substation specialists with automated restoration confirmation.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      highlights: ['GIS Crew Proximity Routing', 'SCADA Auto-Ticket Generation', 'Digital Safety Clearance Locks']
    },
    {
      category: 'DER',
      categoryLabel: 'DER & Microgrids',
      icon: Workflow,
      tag: 'UTIL-05',
      title: 'Distributed Energy Resource Management (DERMS)',
      description: 'Manages grid interconnections for rooftop solar, commercial battery storage, and EV fleet charging hubs with curtailment schedules.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80',
      highlights: ['Interconnection Queue Workflow', 'BESS Reverse Flow Protection', 'EV Fleet Demand Management']
    },
    {
      category: 'REGULATORY',
      categoryLabel: 'Compliance & Audit',
      icon: ShieldCheck,
      tag: 'UTIL-06',
      title: 'FERC, NERC-CIP & Utility Regulatory Audit Suite',
      description: 'Automated compliance ledger providing verifiable audit trails for bulk electric system cyber assets, rate case filings, and SAIDI/SAIFI.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      highlights: ['NERC-CIP Access Certification', 'Automated SAIDI/SAIFI Metrics', 'Rate Case Filing Workpapers']
    }
  ];

  const categories = [
    { key: 'ALL', label: 'All Modules' },
    { key: 'METERING', label: 'Smart Metering / AMI' },
    { key: 'GRID', label: 'Grid Asset EAM' },
    { key: 'BILLING', label: 'Billing & Tariffs' },
    { key: 'DISPATCH', label: 'Outage Dispatch' },
    { key: 'DER', label: 'DER & Microgrids' }
  ];

  const valueMetrics = [
    {
      value: '2.4B+',
      label: 'Daily Meter Readings',
      desc: 'In-memory MDUS pipeline ingesting and validating 15-minute interval smart meter packets instantaneously.'
    },
    {
      value: '-38%',
      label: 'Average Outage Duration',
      desc: 'Automated dispatch synchronizing SCADA breaker telemetry with nearest certified field line crews.'
    },
    {
      value: '99.97%',
      label: 'Billing Cycle Accuracy',
      desc: 'Eliminating estimated meter reads through automated VEE exceptions resolution and live head-end sync.'
    },
    {
      value: '100%',
      label: 'NERC-CIP Audit Pass',
      desc: 'Automated cyber asset security tracking, substation access controls, and electronic perimeter compliance.'
    }
  ];

  const caseStudies = [
    {
      badge: 'METROPOLITAN ELECTRIC & GAS',
      title: 'Major Urban Utility Scales AMI Billing Across 3.8 Million Customer Accounts',
      client: 'Tier-1 Regulated Dual-Fuel Utility',
      impact: 'Reduced unbilled energy revenue by $26M while automating complex commercial Time-of-Use tariffs',
      stats: [
        { label: 'Meters Synced', val: '3.8M' },
        { label: 'Unbilled Leakage', val: '-74%' },
        { label: 'Billing Speed', val: '4x' }
      ],
      desc: 'Transitioned legacy billing to SAP S/4HANA Utilities with in-memory MDUS integration, automating 15-minute interval billing for residential and commercial customers.'
    },
    {
      badge: 'REGIONAL TRANSMISSION OPERATOR',
      title: 'High-Voltage Grid Operator Slashes Unplanned Substation Transformer Failures',
      client: 'Interstate Power Transmission Network',
      impact: 'Prevented an estimated $42M in catastrophic transformer outages through real-time dissolved gas telemetry',
      stats: [
        { label: 'Substations', val: '480+' },
        { label: 'Failures Avoided', val: '7 Major' },
        { label: 'Asset Life Uplift', val: '+4.5 Yrs' }
      ],
      desc: 'Deployed SAP Asset Performance Management (APM) connected to online DGA sensors, triggering predictive work orders prior to insulation breakdown.'
    },
    {
      badge: 'MUNICIPAL POWER AUTHORITY',
      title: 'Public Utility Cuts Storm Outage Restoration Time by 45%',
      client: 'Municipal Clean Energy & Grid Agency',
      impact: 'Achieved top-decile customer satisfaction during severe weather events through automated mobile crew dispatch',
      stats: [
        { label: 'CAIDI Score', val: '-45%' },
        { label: 'Dispatch Speed', val: 'Sub-minute' },
        { label: 'Customer Updates', val: 'Live SMS' }
      ],
      desc: 'Integrated SCADA breaker trip alerts with SAP Field Service Management, dispatching repair crews with pre-loaded digital transformer wiring schematics.'
    }
  ];

  const faqs = [
    {
      q: 'How does Knooviq integrate SAP S/4HANA with smart meter head-end systems (AMI)?',
      a: 'We implement standardized SAP MDUS (Meter Data Unification and Synchronization) connectors using modern web services and Kafka streaming. This handles multi-million meter deployments across Landis+Gyr, Itron, Aclara, and Sensus head-ends with automated VEE (Validation, Editing, and Estimation).'
    },
    {
      q: 'Can this solution support complex Time-of-Use (TOU) and net-metering tariffs?',
      a: 'Yes. Our pre-configured SAP for Utilities billing engine supports dynamic pricing models, peak-demand ratchets, electric vehicle (EV) charging tariffs, and real-time solar export credit reconciliations.'
    },
    {
      q: 'How does the platform link GIS network spatial data with SAP Asset Management?',
      a: 'We leverage bi-directional Esri ArcGIS and SAP Linear Asset Management (LAM) interfaces. Changes made in the GIS map (poles, conductors, transformers) update SAP asset registries and maintenance hierarchies automatically.'
    },
    {
      q: 'Does Knooviq help utilities comply with NERC-CIP cyber asset standards?',
      a: 'Yes. Our pre-built governance packages map substation equipment, SCADA remote terminal units (RTUs), and protective relays to NERC-CIP reliability standards with automated access log audits.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=80" 
            alt="Power Transmission Grid Substation" 
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold uppercase tracking-widest text-amber-300 shadow-xl">
                <Zap className="w-3 h-3 text-amber-300" />
                <span>POWER & UTILITIES PRACTICE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Modernizing the Electric & Gas Grid with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">
                  Next-Gen SAP Utilities
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-2xl">
                Unify high-velocity AMI interval metering, GIS-connected T&D asset health, and complex multi-rate billing on a single resilient SAP S/4HANA digital core.
              </p>
            </motion.div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenContact('Power & Utilities SAP Advisory')}
                className="px-6 py-3 rounded-xl bg-[#0070C0] hover:bg-[#005a9e] text-white font-bold text-sm transition-all shadow-lg hover:shadow-[#0070C0]/30 flex items-center gap-2"
              >
                <span>Consult Utilities Architect</span>
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
              <span>CORE UTILITY CAPABILITIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              From Generation Turbines to Customer Smart Meters
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Equip power generation, grid transmission, and retail energy distributors with high-availability digital solutions.
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
              Pre-Configured Power & Utilities SAP Modules
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Field-tested packages tailored for investor-owned utilities, public power districts, and transmission operators.
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
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80';
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
              Proven Utility Transformation Case Studies
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Demonstrated scale across multi-million meter deployments and regional transmission networks.
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
              <span>DOMAIN ANSWERS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600">
              Clear answers on SAP IS-U migration, AMI architectures, and GIS integration.
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>GRID MODERNIZATION ACCELERATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready to Accelerate Your Utility's Transition to S/4HANA?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Connect with Knooviq’s dedicated SAP Utilities advisory practice for an in-depth architecture evaluation.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenContact('Power & Utilities Technical Assessment')}
              className="px-8 py-4 rounded-xl bg-[#0070C0] hover:bg-[#005a9e] text-white font-bold text-sm transition-all shadow-xl hover:shadow-[#0070C0]/40 flex items-center gap-2"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PowerUtilitiesIndustryPage;
