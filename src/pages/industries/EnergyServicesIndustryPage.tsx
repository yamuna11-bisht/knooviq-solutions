import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Truck, 
  Activity, 
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
  ClipboardList,
  Compass,
  Clock,
  Zap,
  Building2
} from 'lucide-react';

interface IndustryPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const EnergyServicesIndustryPage: React.FC<IndustryPageProps> = ({ onOpenContact }) => {
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const businessPillars = [
    {
      title: 'Digital Field Ticketing & e-Billing (OFS)',
      tag: 'SAP FSM / CPQ',
      desc: 'Capture line-item crew hours, consumable mud chemicals, and tool rental rates with customer digital sign-off directly at the wellhead.',
      icon: ClipboardList
    },
    {
      title: 'Drilling Rig Mobilization & Heavy Logistics',
      tag: 'SAP PROJECT SYSTEMS / TM',
      desc: 'Coordinate multi-load rig moves, specialized crane permits, and hot-shot delivery runs to eliminate standby day-rate charges.',
      icon: Truck
    },
    {
      title: 'Serialized Downhole Tool Lifecycle',
      tag: 'SAP ASSET TRACKING',
      desc: 'Track drill collar hours, MWD/LWD telemetry tool fatigue, and inspection certificates across global service yards and offshore platforms.',
      icon: Wrench
    },
    {
      title: 'Offshore Crew Rotation & Safety Passport',
      tag: 'SAP SUCCESSFACTORS / HSE',
      desc: 'Automate helicopter manifest rosters, BOSIET/HUET certification tracking, and offshore shift fatigue management compliant with maritime law.',
      icon: ShieldCheck
    }
  ];

  const modularSolutions = [
    {
      category: 'TICKETING',
      categoryLabel: 'Field Ticketing',
      icon: ClipboardList,
      tag: 'SERV-01',
      title: 'Mobile Wellsite e-Ticketing & Customer Sign-Off',
      description: 'Native offline mobile ticketing capturing pumping pressures, fluid volumes, personnel standby, and contract discount rate matrices.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      highlights: ['Offline Tablet Signature Capture', 'Rate Card Auto-Validation', 'Days Sales Outstanding (DSO) Cut']
    },
    {
      category: 'RIG',
      categoryLabel: 'Rig Mobilization',
      icon: Truck,
      tag: 'SERV-02',
      title: 'Drilling Rig Move & Heavy Haul Dispatch',
      description: 'Work Breakdown Structure (WBS) governing tear-down, wide-load transport, and rigging-up with automated standby penalty tracking.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      highlights: ['WBS-Linked Rig Move Milestones', 'Automated Crane & Escort Scheduling', 'Standby Loss Prevention']
    },
    {
      category: 'TOOLS',
      categoryLabel: 'Tool Rental & Serialization',
      icon: Wrench,
      tag: 'SERV-03',
      title: 'Downhole Drilling & MWD Tool Life Cycle',
      description: 'Serializes drill bits, mud motors, and logging tools, recording circulating hours and non-destructive testing (NDT) crack inspections.',
      image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80',
      highlights: ['Downhole Circulating Hours Log', 'Automated Yard Redressing Alerts', 'Lost-in-Hole (LIH) Billing']
    },
    {
      category: 'OFFSHORE',
      categoryLabel: 'Subsea & Offshore',
      icon: Compass,
      tag: 'SERV-04',
      title: 'Offshore Supply Vessel (OSV) & Subsea ROV Fleet',
      description: 'Coordinates deck cargo loading, dynamic positioning fuel consumption, and ROV underwater pipeline inspection video logs.',
      image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=800&q=80',
      highlights: ['Deck Cargo Manifest Sync', 'ROV Pipeline Anomaly Logging', 'Charter Fuel Day-Rate Tracking']
    },
    {
      category: 'CREW',
      categoryLabel: 'Workforce & HSE',
      icon: ShieldCheck,
      tag: 'SERV-05',
      title: 'Offshore Crew Logistics & Competency Passport',
      description: 'Enforces mandatory offshore survival training (BOSIET), medical clearances, and automated bed-management on offshore accommodation barges.',
      image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80',
      highlights: ['BOSIET Training Certification Lock', 'Helicopter Passenger Manifest', 'Shift Fatigue Rule Compliance']
    },
    {
      category: 'INSPECTION',
      categoryLabel: 'NDT & Asset Integrity',
      icon: Gauge,
      tag: 'SERV-06',
      title: 'API Pipeline & Pressure Vessel Inspection (NDT)',
      description: 'Digital ultrasonic thickness testing (UT), radiographic imaging, and weld inspection work packs mapped directly to client asset registries.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      highlights: ['Ultrasonic Thickness Data Logging', 'Instant Client Deliverable Reports', 'Weld Traceability Records']
    }
  ];

  const categories = [
    { key: 'ALL', label: 'All Modules' },
    { key: 'TICKETING', label: 'Field e-Ticketing' },
    { key: 'RIG', label: 'Rig Mobilization' },
    { key: 'TOOLS', label: 'Tool Serialization' },
    { key: 'OFFSHORE', label: 'Subsea & Offshore' },
    { key: 'CREW', label: 'Crew & HSE' }
  ];

  const valueMetrics = [
    {
      value: '-21 Days',
      label: 'Days Sales Outstanding (DSO)',
      desc: 'Mobile field tickets auto-converted to approved SAP invoices within hours of customer digital sign-off.'
    },
    {
      value: '100%',
      label: 'Lost-in-Hole Recovery',
      desc: 'Contractually validated downhole asset serial tracking recovering all replacement charges.'
    },
    {
      value: '-34%',
      label: 'Rig Move Schedule Slips',
      desc: 'WBS-governed multi-load dispatch preventing costly standby day-rate penalties from operators.'
    },
    {
      value: 'Zero',
      label: 'Uncertified Crew Deployments',
      desc: 'Automated qualification checks verifying valid BOSIET and safety passports before helicopter dispatch.'
    }
  ];

  const caseStudies = [
    {
      badge: 'GLOBAL DRILLING CONTRACTOR',
      title: 'International Offshore Drilling Contractor Accelerates Rig Mobilization Across 28 Rigs',
      client: 'Offshore Semi-Submersible & Jackup Operator',
      impact: 'Decreased rig turnaround move times by 3.5 days per move, preserving $9.8M in billable charter revenue',
      stats: [
        { label: 'Active Rigs', val: '28' },
        { label: 'Standby Loss', val: '-52%' },
        { label: 'Move Speed', val: '+24%' }
      ],
      desc: 'Implemented SAP Project Systems and Transportation Management, tracking every modular rig substructure and crane dispatch in real time.'
    },
    {
      badge: 'WELL SERVICING LEADER',
      title: 'North American Pressure Pumping Provider Cuts Billing Cycle from 45 Days to 72 Hours',
      client: 'Hydraulic Fracturing & Wireline Specialist',
      impact: 'Dramatically accelerated cash collection by $31M across 14 operating basins',
      stats: [
        { label: 'DSO Reduction', val: '-42 Days' },
        { label: 'Billing Errors', val: '<0.1%' },
        { label: 'Mobile Sync', val: 'Instant' }
      ],
      desc: 'Replaced carbon-paper tickets with SAP Field Service Management on rugged tablets, calculating proppant, chemical, and hydraulic pump hour charges automatically.'
    },
    {
      badge: 'SUBSEA INSPECTION PROVIDER',
      title: 'Gulf of Mexico Subsea Contractor Integrates ROV Asset Management',
      client: 'Subsea Robotics & Diving Services Firm',
      impact: 'Eliminated downhole tool loss disputes and improved subsea umbilical service life by 28%',
      stats: [
        { label: 'ROV Fleet', val: '32 Systems' },
        { label: 'Tool Trace', val: '100%' },
        { label: 'Audit Speed', val: 'Real-time' }
      ],
      desc: 'Deployed SAP Asset Tracking with RFID-tagged underwater tooling and umbilical cable telemetry.'
    }
  ];

  const faqs = [
    {
      q: 'How does Knooviq handle offline field ticketing in remote oilfield locations?',
      a: 'Our field ticketing solution utilizes progressive offline-first caching on rugged tablets. Technicians capture customer signatures, materials consumed, and rig pump hours without cell coverage; tickets sync automatically to SAP S/4HANA upon connection.'
    },
    {
      q: 'Can the platform manage Lost-in-Hole (LIH) commercial claims?',
      a: 'Yes. Every serialized tool includes historical circulating hours, accumulated fatigue, and replacement value tables. When a downhole tool is declared lost, the system generates client recovery invoices based on Master Service Agreement (MSA) clauses.'
    },
    {
      q: 'How does Knooviq integrate with energy operator invoicing portals (e.g. OpenInvoice, Cortex)?',
      a: 'We provide pre-built EDI and API integrations with Oildex OpenInvoice, Cortex, and SAP Ariba, submitting approved digital field tickets directly to operator payment systems for frictionless reconciliation.'
    },
    {
      q: 'Does the solution support complex offshore crew rotation and travel manifests?',
      a: 'Yes. Our workforce module manages 14/14 or 28/28 rotation schedules, tracking offshore bed capacity, helicopter seating limits, and safety certifications (BOSIET, OGUK medicals) with automated dispatch blocks for expired credentials.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=2000&q=80" 
            alt="Energy Services Industrial Operations" 
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold uppercase tracking-widest text-sky-300 shadow-xl">
                <Wrench className="w-3 h-3 text-sky-300" />
                <span>ENERGY SERVICES PRACTICE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Field-to-Finance Velocity with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">
                  Intelligent SAP Oilfield Solutions
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-2xl">
                Accelerate cash flow with offline mobile field e-ticketing, orchestrate complex rig mobilizations, and manage serialized downhole rental tools on SAP S/4HANA.
              </p>
            </motion.div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenContact('Energy Services Advisory Consultation')}
                className="px-6 py-3 rounded-xl bg-[#0070C0] hover:bg-[#005a9e] text-white font-bold text-sm transition-all shadow-lg hover:shadow-[#0070C0]/30 flex items-center gap-2"
              >
                <span>Consult OFS Architect</span>
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
              <span>CORE ENERGY SERVICES PILLARS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Bridging Wellhead Operations with Enterprise Accounting
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Replace paper job tickets and disconnected spreadsheets with automated field-to-invoice workflows.
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
              Pre-Configured Energy Services SAP Modules
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Purpose-built accelerators for drilling contractors, well intervention specialists, and subsea engineering firms.
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
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=800&q=80';
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
              <span>DELIVERED CLIENT IMPACT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Proven Energy Services Case Studies
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Real cash flow and operational improvements delivered for leading global service contractors.
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
              <span>OFS ADVISORY FAQS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600">
              Technical answers regarding mobile e-ticketing, tool rental serialization, and rig move coordination.
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
            <Wrench className="w-3.5 h-3.5 text-sky-400" />
            <span>ACCELERATE YOUR FIELD CASH VELOCITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready to Digitize Your Wellsite Services and Rental Assets?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a technical consultation with Knooviq’s dedicated SAP Energy Services practice today.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenContact('Energy Services Architecture Discovery')}
              className="px-8 py-4 rounded-xl bg-[#0070C0] hover:bg-[#005a9e] text-white font-bold text-sm transition-all shadow-xl hover:shadow-[#0070C0]/40 flex items-center gap-2"
            >
              <span>Book Discovery Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default EnergyServicesIndustryPage;
