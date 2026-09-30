import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Compass,
  Search,
  Layers,
  Network,
  ShieldCheck,
  LifeBuoy,
  Server,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  Zap,
  Activity,
  Workflow,
  Cpu,
  Database,
  BarChart3,
  Clock,
  Lock,
  Boxes,
  HelpCircle,
  FileCheck2,
  TrendingUp,
  Settings,
  Shield,
  Layers3,
  RefreshCw,
  Gauge
} from 'lucide-react';

interface AdvisoryManagedServicesPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const AdvisoryManagedServicesPage: React.FC<AdvisoryManagedServicesPageProps> = ({ onOpenContact }) => {
  useEffect(() => {
    document.title = 'Advisory & Managed Services | SAP Consulting & Technical Operations | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Quick navigation state
  const [activeSection, setActiveSection] = useState<string>('strategy');

  const navItems = [
    { id: 'strategy', label: '1. SAP Strategy' },
    { id: 'assessment', label: '2. SAP Assessment' },
    { id: 'architecture', label: '3. Solution Architecture' },
    { id: 'implementation', label: '4. Implementation & Integration' },
    { id: 'ams', label: '5. SAP AMS' },
    { id: 'support', label: '6. Application Support' },
    { id: 'basis', label: '7. Basis & Technical Operations' },
    { id: 'why-knooviq', label: 'Why Knooviq' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* =========================================================================
          HERO SECTION: TRANSFORM, MANAGE, AND OPTIMIZE YOUR SAP LANDSCAPE
          ========================================================================= */}
      <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#0A1931] via-[#0D2040] to-[#0A1931] text-white">
        
        {/* Subtle Ambient Glow & Architectural Grid */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-sky-500/10 to-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Pill Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold tracking-wider uppercase backdrop-blur-md">
              <Compass className="w-3.5 h-3.5 text-blue-400" />
              <span>PAGE TITLE: ADVISORY & MANAGED SERVICES</span>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-mono font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Enterprise SAP Practice</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-white">
                Transform, Manage, and Optimize <br />
                <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-amber-200 bg-clip-text text-transparent">
                  Your SAP Landscape
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
                Knooviq helps organizations plan, implement, manage, and continuously optimize their SAP environments. From SAP strategy and assessment to architecture, implementation, application management, support, and technical operations, we help businesses build reliable, scalable, and future-ready SAP ecosystems.
              </p>

              {/* 4 Core Value Metric Tags */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  { label: 'Strategic Alignment', val: 'End-to-End', icon: Compass },
                  { label: 'System Visibility', val: '360° Audits', icon: Search },
                  { label: 'SLA Governance', val: '24/7 Managed', icon: ShieldCheck },
                  { label: 'Operations', val: 'Zero Disruption', icon: Activity }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-md space-y-1">
                    <item.icon className="w-4 h-4 text-blue-400" />
                    <div className="text-sm font-bold text-white">{item.val}</div>
                    <div className="text-[10px] text-slate-300 uppercase font-mono tracking-wider">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Hero CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button
                  type="button"
                  onClick={() => onOpenContact ? onOpenContact('SAP Advisory & Managed Services Consultation') : null}
                  className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <span>Talk to Our Experts</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#strategy"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Services</span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </a>
              </div>

            </div>

            {/* Right Visual Column: Professional Technology Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#071324] group">
                <div className="px-4 py-3 bg-[#0B1A30] border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-sky-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>ENTERPRISE SAP ECOSYSTEM</span>
                  </div>
                  <span className="text-amber-300 font-mono text-[11px]">Advisory & Operations</span>
                </div>

                <div className="p-2.5 bg-[#071324]">
                  <img
                    src="/images/advisory_hero_consulting.jpg"
                    alt="Knooviq senior SAP consultants and technology architects reviewing enterprise landscape architecture and digital operations"
                    className="w-full h-[280px] sm:h-[340px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-102"
                  />
                  <div className="mt-3 p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                    <span>Connected Systems • Cloud • Analytics • AMS</span>
                    <span className="text-blue-400 font-bold font-mono">Enterprise Ready</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Quick Navigation Anchor Bar */}
      <div className="sticky top-20 z-30 bg-white/95 dark:bg-[#0A1931]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto no-scrollbar text-xs font-semibold">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 1 — SAP STRATEGY
          ========================================================================= */}
      <section id="strategy" className="py-20 lg:py-24 relative bg-white dark:bg-[#070E1C] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/40 text-blue-700 dark:text-blue-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>SECTION 01 • STRATEGIC ADVISORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              SAP Strategy
            </h2>
            <p className="text-base sm:text-lg font-medium text-blue-700 dark:text-sky-300 leading-snug">
              “Build a clear SAP roadmap aligned with your business objectives, transformation goals, and future technology requirements.”
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
              Our SAP Strategy services help organizations define a structured approach to SAP transformation. We assess business priorities, existing technology landscapes, operational challenges, and future requirements to create a practical SAP roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-50 dark:bg-[#0A1424] group">
                <div className="p-2">
                  <img
                    src="/images/advisory_strategy_roadmap.jpg"
                    alt="SAP Strategy and multi-phase digital transformation roadmap planning display"
                    className="w-full h-72 sm:h-84 lg:h-96 object-cover rounded-xl transition-transform duration-500 group-hover:scale-101"
                  />
                </div>
                <div className="px-5 py-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-mono">
                  <span>Transformation Planning</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">Strategic Roadmap</span>
                </div>
              </div>
            </div>

            {/* Content Lists Column */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              
              {/* What We Offer */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-slate-800 space-y-3">
                <h3 className="text-base font-bold text-[#0A1931] dark:text-white flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                  <span>What We Offer:</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {[
                    'SAP transformation strategy',
                    'SAP roadmap development',
                    'Business and IT alignment',
                    'SAP landscape planning',
                    'Technology modernization planning',
                    'Cloud transformation strategy',
                    'SAP investment planning',
                    'Digital transformation planning'
                  ].map((offer, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                      <span>{offer}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Benefits */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#081220] border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
                <h3 className="text-base font-bold text-[#0A1931] dark:text-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-500" />
                  <span>Business Benefits:</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {[
                    'Clear transformation direction',
                    'Better technology investments',
                    'Improved business and IT alignment',
                    'Reduced transformation risks',
                    'Scalable SAP roadmap',
                    'Improved operational efficiency'
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    to="/services/sap-strategy"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md transition-all group"
                  >
                    <span>Explore Full SAP Strategy Service Page</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — SAP ASSESSMENT
          ========================================================================= */}
      <section id="assessment" className="py-20 lg:py-24 relative bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-900/30 border border-sky-200 dark:border-sky-700/40 text-sky-700 dark:text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Search className="w-3.5 h-3.5" />
              <span>SECTION 02 • LANDSCAPE REVIEW & AUDIT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              SAP Assessment
            </h2>
            <p className="text-base sm:text-lg font-medium text-blue-700 dark:text-sky-300 leading-snug">
              “Evaluate your SAP landscape, processes, applications, and technical environment to identify gaps and improvement opportunities.”
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
              Our SAP Assessment services provide a structured review of your existing SAP environment. We examine system performance, architecture, business processes, integrations, security, and operational practices to identify areas for optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Content Lists Column */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* What We Assess (10 items) */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
                <h3 className="text-base font-bold text-[#0A1931] dark:text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                  <span>What We Assess:</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-200">
                  {[
                    'SAP system landscape',
                    'Business processes',
                    'Application performance',
                    'System configuration',
                    'Integration environment',
                    'Technical infrastructure',
                    'Security and access',
                    'Data and reporting',
                    'Custom developments',
                    'Upgrade readiness'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50 dark:bg-[#081220] border border-slate-100 dark:border-slate-800/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-sky-400 shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & Business Benefits (Side by side inside card) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Deliverables */}
                <div className="p-5 rounded-2xl bg-white dark:bg-[#081220] border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-sky-300 flex items-center gap-1.5">
                    <FileCheck2 className="w-3.5 h-3.5" />
                    <span>Deliverables:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {[
                      'Current-state assessment',
                      'Gap analysis',
                      'Risk identification',
                      'Performance observations',
                      'Optimization recommendations',
                      'Transformation roadmap'
                    ].map((d, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Business Benefits */}
                <div className="p-5 rounded-2xl bg-white dark:bg-[#081220] border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Business Benefits:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {[
                      'Better visibility into SAP environment',
                      'Identification of system gaps',
                      'Reduced operational risks',
                      'Improved system performance',
                      'Better upgrade planning',
                      'Data-driven transformation decisions'
                    ].map((b, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 sm:col-span-2">
                  <Link
                    to="/services/sap-assessment"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-md transition-all group"
                  >
                    <span>Explore Dedicated SAP Assessment Page</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>

            </div>

            {/* Visual Column */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-[#0A1424] group">
                <div className="p-2">
                  <img
                    src="/images/advisory_assessment_dashboard.jpg"
                    alt="SAP Assessment Dashboard showing health scorecards, database performance, code compatibility, and upgrade readiness"
                    className="w-full h-72 sm:h-84 lg:h-96 object-cover rounded-xl transition-transform duration-500 group-hover:scale-101"
                  />
                </div>
                <div className="px-5 py-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-mono">
                  <span>SAP System Health & Audit</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Comprehensive Telemetry</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — SOLUTION ARCHITECTURE
          ========================================================================= */}
      <section id="architecture" className="py-20 lg:py-24 relative bg-white dark:bg-[#070E1C] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700/40 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>SECTION 03 • ENTERPRISE BLUEPRINTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              Solution Architecture
            </h2>
            <p className="text-base sm:text-lg font-medium text-blue-700 dark:text-sky-300 leading-snug">
              “Design scalable SAP architectures that connect business processes, applications, data, integrations, and technology.”
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
              Our Solution Architecture services help organizations design SAP environments that are scalable, secure, integrated, and aligned with business requirements. We translate business needs into practical technical architectures.
            </p>
          </div>

          {/* Architecture Focus Process Flow Banner */}
          <div className="p-6 rounded-2xl bg-[#0A1931] text-white border border-slate-800 shadow-lg space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
              Architecture Focus:
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-bold font-mono">
              {[
                { step: 'Business', desc: 'Processes & Strategy' },
                { step: 'Applications', desc: 'Core ERP & Modules' },
                { step: 'Integration', desc: 'APIs & Event Meshes' },
                { step: 'Data', desc: 'Governance & Analytics' },
                { step: 'Infrastructure', desc: 'Cloud & Hyperscalers' },
                { step: 'Security', desc: 'Zero-Trust & Compliance' }
              ].map((tier, idx) => (
                <React.Fragment key={idx}>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex-1 min-w-[130px] text-center space-y-0.5">
                    <div className="text-sky-300 font-bold">{tier.step}</div>
                    <div className="text-[10px] text-slate-400 font-sans">{tier.desc}</div>
                  </div>
                  {idx < 5 && (
                    <ArrowRight className="w-4 h-4 text-slate-500 shrink-0 hidden md:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-50 dark:bg-[#0A1424] group">
                <div className="p-2">
                  <img
                    src="/images/sap_data_migration_pipeline.jpg"
                    alt="Clean enterprise solution architecture connecting SAP, cloud, applications, data, and business systems"
                    className="w-full h-72 sm:h-84 lg:h-96 object-cover rounded-xl transition-transform duration-500 group-hover:scale-101"
                  />
                </div>
                <div className="px-5 py-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-mono">
                  <span>Scalable Architecture</span>
                  <span className="text-blue-600 dark:text-sky-400 font-bold">Connected Systems</span>
                </div>
              </div>
            </div>

            {/* Content Lists Column */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              
              {/* What We Offer (10 items) */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-slate-800 space-y-3">
                <h3 className="text-base font-bold text-[#0A1931] dark:text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                  <span>What We Offer:</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
                  {[
                    'SAP solution architecture',
                    'Enterprise architecture planning',
                    'SAP landscape architecture',
                    'Integration architecture',
                    'Cloud architecture',
                    'Application architecture',
                    'Data architecture',
                    'Security architecture',
                    'Interface design',
                    'Technology roadmap'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Benefits (7 items) */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#081220] border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
                <h3 className="text-base font-bold text-[#0A1931] dark:text-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-500" />
                  <span>Business Benefits:</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                  {[
                    'Scalable architecture',
                    'Better system integration',
                    'Reduced complexity',
                    'Improved performance',
                    'Stronger security',
                    'Easier future expansion',
                    'Better technology alignment'
                  ].map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    to="/services/solution-architecture"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md transition-all group"
                  >
                    <span>Explore Dedicated Solution Architecture Page</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — SAP IMPLEMENTATION & INTEGRATION
          ========================================================================= */}
      <section id="implementation" className="py-20 lg:py-24 relative bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/40 text-blue-700 dark:text-blue-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Network className="w-3.5 h-3.5" />
              <span>SECTION 04 • SEAMLESS CONNECTIVITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              SAP Implementation & Integration
            </h2>
            <p className="text-base sm:text-lg font-medium text-blue-700 dark:text-sky-300 leading-snug">
              “Implement SAP solutions and integrate them with enterprise applications, platforms, data, and business processes.”
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
              We support organizations throughout SAP implementation and integration initiatives, helping connect SAP with existing enterprise systems and digital platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Content Lists Column */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* What We Offer (10 items) */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
                <h3 className="text-base font-bold text-[#0A1931] dark:text-white flex items-center gap-2">
                  <Boxes className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                  <span>What We Offer:</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
                  {[
                    'SAP implementation support',
                    'SAP module implementation',
                    'Business process configuration',
                    'System integration',
                    'API integration',
                    'Application integration',
                    'Data integration',
                    'Third-party system integration',
                    'Interface development',
                    'Testing and deployment support'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integration Areas (7 items) & Business Benefits (7 items) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Integration Areas */}
                <div className="p-5 rounded-2xl bg-white dark:bg-[#081220] border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-sky-300 flex items-center gap-1.5">
                    <Network className="w-3.5 h-3.5" />
                    <span>Integration Areas:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {[
                      'SAP and CRM',
                      'SAP and ERP systems',
                      'SAP and HR systems',
                      'SAP and Finance systems',
                      'SAP and Supply Chain platforms',
                      'SAP and Cloud applications',
                      'SAP and third-party applications'
                    ].map((area, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Business Benefits */}
                <div className="p-5 rounded-2xl bg-white dark:bg-[#081220] border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Business Benefits:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {[
                      'Connected enterprise systems',
                      'Streamlined business processes',
                      'Reduced manual work',
                      'Improved data flow',
                      'Better business visibility',
                      'Faster business operations',
                      'Scalable integration environment'
                    ].map((b, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

            {/* Visual Column */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-[#0A1424] group">
                <div className="p-2">
                  <img
                    src="/images/billing_architecture_workflow.jpg"
                    alt="SAP at the center connected visually with CRM, HR, Finance, Cloud, and Supply Chain systems"
                    className="w-full h-72 sm:h-84 lg:h-96 object-cover rounded-xl transition-transform duration-500 group-hover:scale-101"
                  />
                </div>
                <div className="px-5 py-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-mono">
                  <span>SAP Central Integration Hub</span>
                  <span className="text-blue-600 dark:text-sky-400 font-bold">API & Data Fabrics</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — SAP AMS (APPLICATION MANAGEMENT SERVICES)
          ========================================================================= */}
      <section id="ams" className="py-20 lg:py-24 relative bg-white dark:bg-[#070E1C] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700/40 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SECTION 05 • PROACTIVE GOVERNANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              SAP Application Management Services (AMS)
            </h2>
            <p className="text-base sm:text-lg font-medium text-blue-700 dark:text-sky-300 leading-snug">
              “Keep your SAP applications stable, optimized, secure, and continuously improving with proactive application management.”
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
              Our SAP AMS services provide ongoing management and optimization of SAP applications. We help organizations maintain business continuity while continuously improving application performance and functionality.
            </p>
          </div>

          {/* Support Approach Stepper */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0A1931] to-[#0F274D] text-white border border-slate-800 shadow-lg space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              Support Approach:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
              {[
                { step: 'Monitor', desc: 'Real-time telemetry & alerts' },
                { step: 'Identify', desc: 'Root cause analysis' },
                { step: 'Resolve', desc: 'SLA-driven remediation' },
                { step: 'Optimize', desc: 'Performance tuning' },
                { step: 'Improve', desc: 'Continuous enhancements' }
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xs mx-auto">
                    {idx + 1}
                  </div>
                  <div className="text-sm font-bold text-white">{item.step}</div>
                  <div className="text-[11px] text-slate-300 font-sans">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-50 dark:bg-[#0A1424] group">
                <div className="p-2">
                  <img
                    src="/images/sap_btp_command_center.jpg"
                    alt="Professional SAP application monitoring center with dashboards, alerts, performance graphs, and system status"
                    className="w-full h-72 sm:h-84 lg:h-96 object-cover rounded-xl transition-transform duration-500 group-hover:scale-101"
                  />
                </div>
                <div className="px-5 py-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-mono">
                  <span>SAP AMS Operations Center</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">24/7 SLA Monitored</span>
                </div>
              </div>
            </div>

            {/* Content Lists Column */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              
              {/* What We Offer (10 items) */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-slate-800 space-y-3">
                <h3 className="text-base font-bold text-[#0A1931] dark:text-white flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>What We Offer:</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
                  {[
                    'SAP application monitoring',
                    'Incident management',
                    'Problem management',
                    'Change management',
                    'Application maintenance',
                    'Performance optimization',
                    'Functional support',
                    'Technical support',
                    'System enhancements',
                    'Continuous improvement'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Benefits (7 items) */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#081220] border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
                <h3 className="text-base font-bold text-[#0A1931] dark:text-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-500" />
                  <span>Business Benefits:</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                  {[
                    'Improved application availability',
                    'Faster issue resolution',
                    'Reduced downtime',
                    'Better system performance',
                    'Predictable support operations',
                    'Continuous optimization',
                    'Reduced operational burden'
                  ].map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    to="/services/sap-ams"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition-all group"
                  >
                    <span>Explore Dedicated SAP AMS Page</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — APPLICATION SUPPORT
          ========================================================================= */}
      <section id="support" className="py-20 lg:py-24 relative bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/40 text-blue-700 dark:text-blue-300 text-xs font-mono font-bold uppercase tracking-wider">
              <LifeBuoy className="w-3.5 h-3.5" />
              <span>SECTION 06 • DAY-TO-DAY OPERATIONAL EXCELLENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              Application Support
            </h2>
            <p className="text-base sm:text-lg font-medium text-blue-700 dark:text-sky-300 leading-snug">
              “Ensure reliable day-to-day application operations with functional and technical support for critical business applications.”
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
              Our Application Support services help organizations maintain the availability, performance, and reliability of their business applications. We provide structured support for incidents, problems, changes, and application enhancements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Content Lists Column */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* Support Services (10 items) */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
                <h3 className="text-base font-bold text-[#0A1931] dark:text-white flex items-center gap-2">
                  <LifeBuoy className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                  <span>Support Services:</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
                  {[
                    'Application monitoring',
                    'Incident resolution',
                    'Technical troubleshooting',
                    'Functional support',
                    'Performance monitoring',
                    'Application maintenance',
                    'User support',
                    'Error analysis',
                    'Change requests',
                    'Application enhancements'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Areas (6 items) & Business Benefits (6 items) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Support Areas */}
                <div className="p-5 rounded-2xl bg-white dark:bg-[#081220] border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-sky-300 flex items-center gap-1.5">
                    <Boxes className="w-3.5 h-3.5" />
                    <span>Support Areas:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {[
                      'SAP applications',
                      'Enterprise applications',
                      'Business applications',
                      'Integrated applications',
                      'Custom applications',
                      'Third-party applications'
                    ].map((area, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Business Benefits */}
                <div className="p-5 rounded-2xl bg-white dark:bg-[#081220] border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Business Benefits:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {[
                      'Faster issue resolution',
                      'Improved application reliability',
                      'Reduced business disruption',
                      'Better user experience',
                      'Improved productivity',
                      'Continuous application availability'
                    ].map((b, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 sm:col-span-2">
                  <Link
                    to="/services/application-support"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md transition-all group"
                  >
                    <span>Explore Dedicated Application Support Page</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>

            </div>

            {/* Visual Column */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-[#0A1424] group">
                <div className="p-2">
                  <img
                    src="/images/billing_lifecycle_workflow.jpg"
                    alt="Modern IT application support dashboard showing tickets, system health, monitoring, and support operations"
                    className="w-full h-72 sm:h-84 lg:h-96 object-cover rounded-xl transition-transform duration-500 group-hover:scale-101"
                  />
                </div>
                <div className="px-5 py-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-mono">
                  <span>Application Support Operations</span>
                  <span className="text-blue-600 dark:text-sky-400 font-bold">Ticketing & Health</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — SAP BASIS & TECHNICAL OPERATIONS
          ========================================================================= */}
      <section id="basis" className="py-20 lg:py-24 relative bg-white dark:bg-[#070E1C] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-mono font-bold uppercase tracking-wider">
              <Server className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
              <span>SECTION 07 • INFRASTRUCTURE & TECHNICAL ADMINISTRATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              SAP Basis & Technical Operations
            </h2>
            <p className="text-base sm:text-lg font-medium text-blue-700 dark:text-sky-300 leading-snug">
              “Manage the technical foundation of your SAP environment with reliable system administration, monitoring, security, and performance management.”
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
              Our SAP Basis and Technical Operations services focus on the technical administration and health of SAP environments. We help maintain system stability, performance, availability, and operational reliability.
            </p>
          </div>

          {/* Technical Operations Flow Banner */}
          <div className="p-6 rounded-2xl bg-[#0A1931] text-white border border-slate-800 shadow-lg space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
              Technical Operations:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
              {[
                { step: 'Monitor', desc: 'Kernel, OS, and memory gauges' },
                { step: 'Maintain', desc: 'Patches, notes, and transports' },
                { step: 'Secure', desc: 'Authorizations and audit rules' },
                { step: 'Optimize', desc: 'Work process and buffer tuning' },
                { step: 'Recover', desc: 'Tested backup and DR execution' }
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 text-sky-300 flex items-center justify-center font-bold text-xs mx-auto">
                    {idx + 1}
                  </div>
                  <div className="text-sm font-bold text-white">{item.step}</div>
                  <div className="text-[11px] text-slate-300 font-sans">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-50 dark:bg-[#0A1424] group">
                <div className="p-2">
                  <img
                    src="/images/system_conversion_dmo_pipeline.jpg"
                    alt="Modern SAP technical operations environment showing servers, databases, cloud infrastructure, monitoring, and security"
                    className="w-full h-72 sm:h-84 lg:h-96 object-cover rounded-xl transition-transform duration-500 group-hover:scale-101"
                  />
                </div>
                <div className="px-5 py-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-mono">
                  <span>SAP Basis Operations</span>
                  <span className="text-blue-600 dark:text-sky-400 font-bold">Infrastructure Reliability</span>
                </div>
              </div>
            </div>

            {/* Content Lists Column */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              
              {/* What We Offer (13 items) */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-slate-800 space-y-3">
                <h3 className="text-base font-bold text-[#0A1931] dark:text-white flex items-center gap-2">
                  <Server className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                  <span>What We Offer:</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
                  {[
                    'SAP Basis administration',
                    'System monitoring',
                    'Performance monitoring',
                    'SAP system administration',
                    'User and authorization management',
                    'Transport management',
                    'Backup and recovery',
                    'Database administration support',
                    'System refreshes',
                    'SAP upgrades',
                    'Patch management',
                    'Technical troubleshooting',
                    'Landscape management'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Benefits (7 items) */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#081220] border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
                <h3 className="text-base font-bold text-[#0A1931] dark:text-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-500" />
                  <span>Business Benefits:</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                  {[
                    'Improved system stability',
                    'Better SAP performance',
                    'Reduced downtime',
                    'Improved system security',
                    'Reliable backup and recovery',
                    'Better technical visibility',
                    'Efficient SAP operations'
                  ].map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    to="/services/sap-basis"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold shadow-md transition-all group"
                  >
                    <span>Explore Dedicated SAP Basis Page</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          FINAL SECTION — WHY KNOOVIQ
          ========================================================================= */}
      <section id="why-knooviq" className="py-20 lg:py-24 relative bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/40 text-blue-700 dark:text-blue-300 text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>THE KNOOVIQ ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1931] dark:text-white tracking-tight">
              SAP Services Built Around Your Business
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Knooviq combines SAP consulting, technical expertise, application management, and continuous optimization to help organizations create efficient, scalable, and future-ready SAP environments.
            </p>
          </div>

          {/* 4 Professional Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Business-Focused SAP Consulting',
                icon: Compass,
                desc: 'Strategic roadmaps and architectures developed around your specific business objectives, commercial KPIs, and long-term organizational value.'
              },
              {
                num: '02',
                title: 'End-to-End SAP Expertise',
                icon: Boxes,
                desc: 'Deep technical and functional proficiency covering core ERP modules, BTP cloud integrations, HANA databases, and modern Fiori interfaces.'
              },
              {
                num: '03',
                title: 'Proactive Managed Services',
                icon: ShieldCheck,
                desc: '24/7 SLA-governed application management and Basis operations that identify and resolve potential bottlenecks before they affect business operations.'
              },
              {
                num: '04',
                title: 'Continuous Optimization',
                icon: RefreshCw,
                desc: 'Ongoing system performance tuning, clean-core enhancements, and regular health audits ensuring your SAP landscape continuously evolves.'
              }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-sky-300 flex items-center justify-center font-bold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                        {card.num}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#0A1931] dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-sky-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-sky-400">
                    <span>Enterprise Standard</span>
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          FINAL CTA SECTION
          ========================================================================= */}
      <section className="py-20 lg:py-24 relative bg-gradient-to-b from-[#0A1931] via-[#0D2040] to-[#0A1931] text-white">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/15 via-sky-500/10 to-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>ENGAGE WITH KNOOVIQ</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Ready to Transform Your SAP Landscape?
            </h2>

            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Talk to our SAP experts to discuss your transformation, implementation, support, and managed services requirements.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenContact ? onOpenContact('SAP Advisory & Managed Services Consultation') : null}
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide transition-all shadow-xl shadow-blue-600/30 flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Talk to Our Experts</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => onOpenContact ? onOpenContact('General Inquiries - Advisory & Managed Services') : null}
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/25 text-white font-bold text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 text-slate-300" />
            </button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Reliable &amp; Scalable</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Structured Governance</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Future-Ready Ecosystem</span>
            </span>
          </div>

        </div>

      </section>

    </div>
  );
};

export default AdvisoryManagedServicesPage;
