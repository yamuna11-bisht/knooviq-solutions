import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Factory, 
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
  Wrench, 
  Award,
  Layers,
  FileText,
  Globe2,
  Clock
} from 'lucide-react';
import { IndustryFaqSection } from '../../components/common/IndustryFaqSection';

interface IndustrialProductsIndustryPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const IndustrialProductsIndustryPage: React.FC<IndustrialProductsIndustryPageProps> = ({ 
  onOpenContact 
}) => {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('ALL');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const challenges = [
    {
      icon: Workflow,
      title: 'Engineer-To-Order (ETO) Project Overruns',
      tag: 'CAPITAL PROJECT RISK',
      desc: 'Complex customized capital machinery projects suffer from disconnected milestone tracking, delayed engineering revisions, and unexpected cost slippages.',
      footer: 'Controlled via SAP Project Systems (PS)'
    },
    {
      icon: Wrench,
      title: 'Aftermarket Spares & Service Blind Spots',
      tag: 'SERVICE PROFITABILITY',
      desc: 'Industrial OEMs lose profitable aftermarket parts revenue to third-party suppliers due to sluggish parts catalogs and disconnected field service teams.',
      footer: 'Accelerated via 3D Exploded Spares Portals'
    },
    {
      icon: Gauge,
      title: 'Unmonitored Installed Base Telemetry',
      tag: 'EQUIPMENT RELIABILITY',
      desc: 'Customer machinery operating in remote mining and manufacturing sites breaks unexpectedly without real-time IoT vibration and heat telemetry.',
      footer: 'Prevented with IoT Predictive Maintenance'
    },
    {
      icon: Boxes,
      title: 'Multi-Tier As-Built Configuration Drift',
      tag: 'AS-BUILT TRACKING',
      desc: 'Discrepancies between the original engineering CAD model and field-retrofitted machine configurations make field servicing error-prone.',
      footer: 'Synchronized via Digital Twin Asset Records'
    },
    {
      icon: AlertTriangle,
      title: 'Warranty Fraud & Claim Disputes',
      tag: 'WARRANTY ADJUDICATION',
      desc: 'Manual warranty adjudication without equipment operating sensor logs leads to costly payouts for customer-abused equipment.',
      footer: 'Automated via Telemetry-Backed Claims Engine'
    },
    {
      icon: Cpu,
      title: 'Long Lead-Time Forgings & Castings',
      tag: 'PROCUREMENT VOLATILITY',
      desc: '6-to-12 month supplier lead times for custom forgings disrupt final machine testing schedules without predictive supplier milestone tracking.',
      footer: 'Secured via SAP Ariba Direct Material Sourcing'
    }
  ];

  const architectureLayers = [
    {
      title: '1. Machine IoT Telematics & Edge Diagnostics',
      subtitle: 'Embedded Sensors, PLCs, Telematics Gateways & Vibration Analyzers',
      desc: 'Captures hydraulic pressure, motor temperature, and operating hours from global deployed assets via MQTT and cellular IoT gateways.',
      tags: ['Cellular IoT', 'MQTT Gateway', 'Vibration Telemetry', 'CAN Bus / J1939']
    },
    {
      title: '2. Asset Central & Service Execution (SAP Field Service)',
      subtitle: 'Dynamic Dispatching, Mobile Field Cockpit & 3D Spares Catalog',
      desc: 'Dispatches certified service technicians with mobile tablets displaying 3D exploded assemblies, repair history, and warranty entitlements.',
      tags: ['SAP Field Service Management', 'Mobile Service App', '3D Visual Spare Parts', 'SLA Tracking']
    },
    {
      title: '3. SAP S/4HANA ETO & Asset Management Core',
      subtitle: 'SAP Project Systems (PS), Plant Maintenance (PM) & Milestone Billing',
      desc: 'Manages complex project networks, Earned Value Management (EVM), progressive milestone billing, and warranty cost accounting.',
      tags: ['SAP Project Systems (PS)', 'Plant Maintenance (PM)', 'Earned Value Management', 'Variant Config']
    },
    {
      title: '4. Predictive Asset Performance Hub',
      subtitle: 'Digital Twin Diagnostics, Remaining Useful Life (RUL) & Analytics',
      desc: 'Machine learning algorithms analyze operational telematics to forecast impending component failure and schedule preemptive maintenance.',
      tags: ['Asset Performance Management', 'RUL Modeling', 'Digital Twin Graph', 'Warranty Analytics']
    }
  ];

  const modularSolutions = [
    {
      category: 'ETO',
      categoryLabel: 'Capital Equipment',
      icon: Factory,
      tag: 'PROD-01',
      title: 'Engineer-To-Order (ETO) Project Governance',
      description: 'Milestone billing, multi-level WBS tracking, progress confirmation, and real-time earned value management (EVM) for large capital equipment.',
      image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80',
      highlights: ['SAP Project Systems (PS)', 'Milestone Progress Billing', 'Earned Value Management']
    },
    {
      category: 'SPARES',
      categoryLabel: 'Aftermarket Spares',
      icon: Wrench,
      tag: 'PROD-02',
      title: 'Interactive 3D Exploded Spares Portal',
      description: 'Customer self-service portal featuring interactive 3D exploded machinery assemblies linked directly to SAP S/4HANA spare parts inventory.',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
      highlights: ['3D Visual Assemblies', 'One-Click Spares Ordering', 'Serial-Specific Catalogs']
    },
    {
      category: 'IOT',
      categoryLabel: 'Predictive Maintenance',
      icon: Gauge,
      tag: 'PROD-03',
      title: 'Connected Equipment Telematics & Predictive EAM',
      description: 'Real-time vibration, thermal, and hydraulic pressure analytics that trigger automated service work orders before machine failure occurs.',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80',
      highlights: ['Predictive Anomaly Alerts', 'Automated Service Work Orders', 'Remote Diagnostics']
    },
    {
      category: 'SERVICE',
      categoryLabel: 'Field Service',
      icon: Workflow,
      tag: 'PROD-04',
      title: 'Mobile Field Service Management & SLA Dispatch',
      description: 'AI-assisted technician scheduling based on route proximity, parts availability in service vans, and required technical certifications.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      highlights: ['Dynamic Schedule Board', 'Van Stock Synchronization', 'Digital Customer Sign-Off']
    },
    {
      category: 'WARRANTY',
      categoryLabel: 'Warranty & Claims',
      icon: ShieldCheck,
      tag: 'PROD-05',
      title: 'Automated Warranty & Supplier Claims Adjudication',
      description: 'Cross-references equipment telematics logs against contractual warranty clauses, auto-approving valid claims and passing defect costs to Tier-2 suppliers.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      highlights: ['Telemetry-Backed Claims', 'Supplier Chargeback Recovery', 'Warranty Reserve Optimization']
    },
    {
      category: 'TWIN',
      categoryLabel: 'Digital Twin',
      icon: Cpu,
      tag: 'PROD-06',
      title: 'As-Built to As-Maintained Digital Twin Hub',
      description: 'Maintains an immutable digital asset ledger recording every field retrofit, software patch, and replaced component over 30-year equipment lifecycles.',
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
      highlights: ['30-Year Asset Genealogy', 'Retrofit Revision Tracking', 'Equipment Service Passport']
    }
  ];

  const categories = [
    { key: 'ALL', label: 'All Modules' },
    { key: 'ETO', label: 'Capital ETO' },
    { key: 'SPARES', label: 'Aftermarket Spares' },
    { key: 'IOT', label: 'IoT Telematics' },
    { key: 'SERVICE', label: 'Field Service' },
    { key: 'WARRANTY', label: 'Warranty & Claims' }
  ];

  const valueMetrics = [
    {
      value: '+28%',
      label: 'Aftermarket Parts Revenue',
      desc: 'Interactive 3D spare parts catalogs and self-service ordering capture high-margin aftermarket replenishment.'
    },
    {
      value: '-38%',
      label: 'Unplanned Equipment Downtime',
      desc: 'Continuous IoT predictive vibration and thermal analytics resolve mechanical wear prior to plant line halts.'
    },
    {
      value: '92.4%',
      label: 'First-Time Fix Rate',
      desc: 'Technicians arrive with exact diagnostic telemetry, service history, and pre-allocated van spare parts.'
    },
    {
      value: '-65%',
      label: 'Warranty Claim Leakage',
      desc: 'Operating parameter verification prevents fraudulent claims on customer-abused machinery.'
    }
  ];

  const caseStudies = [
    {
      badge: 'HEAVY COMPRESSOR OEM',
      title: 'Global Turbomachinery Manufacturer Grows Aftermarket Margin by 34%',
      client: 'Multi-National Heavy Compressor & Turbine Producer',
      impact: 'Connected 4,200 deployed industrial turbines to real-time predictive health monitoring',
      stats: [
        { label: 'Aftermarket Growth', val: '+34%' },
        { label: 'Unplanned Stops', val: '-45%' },
        { label: 'Fix Rate', val: '94.8%' }
      ],
      desc: 'Deployed SAP Field Service Management and 3D visual spare parts catalogs, converting reactive break-fix servicing into recurring uptime service-level contracts.'
    },
    {
      badge: 'MINING & EXCAVATION EQUIPMENT',
      title: 'Heavy Mining Machinery Leader Eliminates Remote Site Downtime',
      client: 'Global Earthmoving & Excavator Manufacturer',
      impact: 'Live telematics streaming across 1,800 active machines in remote Australian mining basins',
      stats: [
        { label: 'Breakdowns', val: '-52%' },
        { label: 'Spares Delivery', val: '<24 Hrs' },
        { label: 'Hydraulic Failures', val: '0' }
      ],
      desc: 'Integrated CAN bus telematics directly with SAP S/4HANA Plant Maintenance, automatically dispatching replacement hydraulic valves days before predicted seal blowout.'
    },
    {
      badge: 'PACKAGING MACHINERY LEADER',
      title: 'Automated Packaging Systems OEM Cuts ETO Build Times by 22%',
      client: 'High-Speed Automated Packaging Line Manufacturer',
      impact: 'Integrated SAP Project Systems with customer CAD configurations for 150 annual custom lines',
      stats: [
        { label: 'Project Margin', val: '+6.2%' },
        { label: 'Milestone On-Time', val: '98.5%' },
        { label: 'ECO Cycle', val: '4.5 Hrs' }
      ],
      desc: 'Replaced manual spreadsheet project tracking with live WBS earned value analytics, giving engineering leadership early warning on custom assembly bottlenecks.'
    }
  ];

  const faqs = [
    {
      q: 'How does SAP Project Systems (PS) manage Engineer-to-Order (ETO) custom machinery builds?',
      a: 'SAP PS organizes complex machinery builds into Work Breakdown Structures (WBS) and network activities. Engineering revisions, long-lead procurement, shop-floor assembly, and on-site commissioning milestones are tracked against progressive billing schedules.'
    },
    {
      q: 'How do customers interact with the 3D Exploded Spare Parts portal?',
      a: 'Customers enter their specific machine serial number. The portal loads the exact CAD as-built assembly model, allowing users to click on highlighted 3D components, verify part numbers, check live S/4HANA stock availability, and place orders.'
    },
    {
      q: 'Can IoT sensor telematics integrate with SAP Plant Maintenance (PM) without custom code?',
      a: 'Yes. Utilizing standard SAP Asset Performance Management (APM) and Edge gateways, sensor threshold breaches automatically generate SAP PM maintenance notifications and pre-populate field service work orders.'
    },
    {
      q: 'How does the solution prevent warranty fraud and overpayment?',
      a: 'When a warranty claim is submitted, the system cross-references machine operating logs (vibration, heat, duty cycles). If the equipment was operated beyond certified design specifications, the claim is flagged or automatically rejected.'
    },
    {
      q: 'What is the implementation timeline for Knooviq Industrial Products solutions?',
      a: 'Core ETO project governance and plant maintenance typically deploy in 14 to 18 weeks. Customer-facing 3D spare parts portals and IoT telematics integrations can follow sequentially within 8 to 12 weeks.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-slate-900">
        
        {/* Full-Bleed Background Image with Seamless Cinematic Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80" 
            alt="Heavy Industrial Equipment Engineering" 
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
                <Factory className="w-3 h-3 text-cyan-300" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>
              
              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Industrial <span className="text-[#38BDF8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">Products</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Unifying Engineer-To-Order Projects, Milestone Billing & Lifecycle Aftermarket Portals.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3 max-w-2xl"
            >
              <p className="text-sm sm:text-base lg:text-[17px] text-slate-100 font-normal leading-relaxed drop-shadow-sm">
                Empower capital equipment manufacturers with <strong className="text-white font-semibold">SAP S/4HANA Clean Core</strong>, <strong className="text-cyan-300 font-semibold">Project Systems (PS) milestone accounting</strong>, 3D interactive spare parts catalogs, and <strong className="text-white font-semibold">predictive IoT telematics</strong>.
              </p>
              
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Engineer-To-Order (ETO)</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Milestone Project Billing</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>3D Spare Parts Portal</span>
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
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Project Mgmt</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">SAP PS Milestone Billing</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Aftermarket</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">3D Exploded Parts Portal</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">IoT Telemetry</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">Predictive Asset Health</span>
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
                Transforming Capital Machinery Builds into High-Margin Aftermarket Engines
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Industrial equipment leaders know that 60% of lifetime profits occur after machine commissioning. Knooviq harmonizes ETO milestone builds with connected IoT telematics, mobile field service execution, and 3D visual spare parts catalogs to secure customer loyalty.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'Engineered-To-Order milestone billing (SAP PS)',
                  'Digital twin sensor health streaming & anomaly alerts',
                  'Automated 3D exploded spare parts catalog',
                  'Contractual SLA tracking & field service dispatch'
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
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80" 
                alt="Industrial Equipment Telematics" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-6" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold mb-1">CONNECTED AFTERMARKET SUITE</div>
                <div className="text-lg sm:text-xl font-bold text-white leading-snug">Closed-Loop ETO Projects & Remote Equipment Telemetry</div>
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
              <span>CAPITAL GOODS CHALLENGES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Overcoming Industrial Equipment Hurdles
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Project cost slippages, lost aftermarket spare parts revenue, and unmonitored equipment failures erode operating margins.
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
              <span>EQUIPMENT LIFECYCLE ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Integrated Machinery Core: From Asset IoT to S/4HANA
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Harmonizing IoT sensor streams, mobile field technician dispatch, and S/4HANA Project Systems.
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
              Pre-Configured Industrial Products Modules
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Turnkey components for engineered-to-order machinery builders, aftermarket spare parts distribution, and field service fleets.
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
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80';
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
              Machinery Leaders Modernizing with Knooviq
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Real results delivered for global turbomachinery, mining equipment, and packaging line builders.
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
        badge="ETO & INDUSTRIAL EQUIPMENT FAQ"
        title="Frequently Asked Questions"
        subtitle="Key architectural considerations for Engineer-To-Order project milestones, interactive 3D parts portals, and IoT telematics."
        faqs={faqs}
        onOpenContact={onOpenContact}
        contactTopic="Industrial Equipment ETO & Aftermarket Architecture"
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
            <Wrench className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR INDUSTRIAL PRODUCTS ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build a Smarter Industrial Machinery Operation?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Connect your ETO project schedules, 3D spare parts catalogs, warranty automation, and asset telematics with Knooviq.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact?.('Industrial Products Consultation')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#003B73] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl shadow-black/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to Our Machinery Experts</span>
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
