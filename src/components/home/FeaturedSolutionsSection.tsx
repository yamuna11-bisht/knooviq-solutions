import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Cloud, 
  Workflow, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Shield,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { IndustriesGlobe3D } from '../3d/IndustriesGlobe3D';

interface FeaturedCase {
  id: string;
  title: string;
  tagline: string;
  category: string;
  image: string;
  icon: React.ReactNode;
  overview: string;
  deliverables: string[];
  link: string;
  borderClass: string;
  hoverBorderClass: string;
  accentBar: string;
  shadowGlow: string;
}

export const FeaturedSolutionsSection: React.FC<{ onOpenContact?: (service?: string) => void }> = ({ onOpenContact }) => {
  const solutions: FeaturedCase[] = [
    {
      id: 'smart-facility',
      title: 'Smart Facility Operations',
      tagline: 'IoT-connected campuses & digital twins.',
      category: 'Smart Built Environment',
      image: '/images/real_estate_smart_twin.jpg',
      icon: <Building className="h-4.5 w-4.5 text-[#00A3E0]" />,
      overview: 'Unifying building sensors, predictive maintenance, and utility telemetry into self-optimizing commercial spaces.',
      deliverables: [
        'IoT Sensor Grid & Energy Telemetry',
        'Predictive Work Order Generation',
        'SAP BTP Digital Twin Integration'
      ],
      link: '/products/real-estate-management',
      borderClass: 'border-2 border-sky-300/90',
      hoverBorderClass: 'hover:border-[#00A3E0]',
      accentBar: 'bg-gradient-to-r from-[#00A3E0] to-sky-400',
      shadowGlow: 'hover:shadow-lg hover:shadow-sky-100'
    },
    {
      id: 'cloud-infrastructure',
      title: 'S/4HANA Cloud Modernization',
      tagline: 'Zero-downtime Clean Core transitions.',
      category: 'Enterprise Multi-Cloud',
      image: '/images/migration_hero_command.jpg',
      icon: <Cloud className="h-4.5 w-4.5 text-[#0070C0]" />,
      overview: 'Migrating complex on-premise ERP landscapes to AWS, Azure, and Google Cloud with high-availability resilience.',
      deliverables: [
        'Clean Core Extensibility Standards',
        'Automated Data Migration Cockpit',
        'Multi-Region HA Disaster Recovery'
      ],
      link: '/technology/cloud-transformation',
      borderClass: 'border-2 border-blue-300/90',
      hoverBorderClass: 'hover:border-[#0070C0]',
      accentBar: 'bg-gradient-to-r from-[#0070C0] to-blue-400',
      shadowGlow: 'hover:shadow-lg hover:shadow-blue-100'
    },
    {
      id: 'enterprise-automation',
      title: 'Autonomous Process Automation',
      tagline: 'Eliminating operational bottlenecks.',
      category: 'Autonomous Operations',
      image: '/images/automation_studio_hero.png',
      icon: <Workflow className="h-4.5 w-4.5 text-indigo-600" />,
      overview: 'Intelligent multi-agent bots orchestrating automated invoice reconciliation, tax compliance, and order dispatch.',
      deliverables: [
        'Automated 3-Way Invoice Matching',
        'Predictive Exception Handling',
        'Autonomous Agentic Task Dispatch'
      ],
      link: '/products/automation-suite',
      borderClass: 'border-2 border-indigo-300/90',
      hoverBorderClass: 'hover:border-indigo-600',
      accentBar: 'bg-gradient-to-r from-indigo-600 to-indigo-400',
      shadowGlow: 'hover:shadow-lg hover:shadow-indigo-100'
    }
  ];

  return (
    <section id="featured-solutions" className="relative py-16 sm:py-20 bg-white text-slate-900 overflow-hidden select-none border-b border-slate-200/80">
      
      {/* Background Soft Radiance */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-sky-100/40 via-blue-100/30 to-indigo-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER (Preserved Exact Copy & Hierarchy)                         */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-300 bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0070C0] mb-3 shadow-2xs font-mono">
              <Sparkles className="h-3.5 w-3.5 text-[#00A3E0]" />
              Proven Enterprise Blueprints
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1931] tracking-tight leading-tight">
              Featured <span className="bg-gradient-to-r from-[#00A3E0] to-[#0070C0] bg-clip-text text-transparent">Solutions &amp; Case Studies</span>
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Real-world architectures engineered by KNOOVIQ to solve mission-critical operational challenges for global organizations.
            </p>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* 3-COLUMN CASE STUDY BLUEPRINT CARDS (Preserved Exact Cards & Features)    */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {solutions.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`rounded-2xl ${item.borderClass} ${item.hoverBorderClass} bg-white transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl ${item.shadowGlow} overflow-hidden cursor-default`}
            >
              {/* Top Image Preview with Badge Overlays */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-white/95 text-slate-800 backdrop-blur-md shadow-sm border border-white/70">
                    {item.category}
                  </span>
                  <div className="h-8 w-8 rounded-lg bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center border border-white/70">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Bottom Content Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#0A1931] group-hover:text-[#0070C0] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-sky-700 mb-2.5">
                    {item.tagline}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                    {item.overview}
                  </p>

                  {/* Key Capabilities List */}
                  <div className="space-y-1.5 mb-5 pb-4 border-b border-slate-100">
                    {item.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between pt-1">
                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0070C0] hover:text-[#00A3E0] transition-colors font-display group/link"
                  >
                    <span>Explore Blueprint</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={() => onOpenContact ? onOpenContact(item.title) : undefined}
                    className="text-[11px] font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-sky-300 hover:bg-sky-50 transition-all cursor-pointer"
                  >
                    Consult
                  </button>
                </div>
              </div>

              {/* Bottom Animated Expanding Color Accent */}
              <div className="h-1 w-full bg-slate-100 overflow-hidden">
                <div className={`h-full w-12 group-hover:w-full ${item.accentBar} transition-all duration-500 ease-out`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* PREMIUM FULL-WIDTH CTA BANNER (Cinematic Enterprise Website Ending)       */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 sm:mt-16 lg:mt-20 relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#061224] via-[#0A1931] to-[#003B73] border border-sky-500/25 shadow-2xl shadow-sky-950/40 p-8 sm:p-10 lg:p-14"
        >
          {/* Subtle Ambient Background Glows */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
            
            {/* Left Content Area */}
            <div className="flex-1 text-center lg:text-left">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-400/10 border border-sky-400/25 text-sky-300 font-mono text-[11px] font-bold tracking-wider uppercase mb-4 shadow-xs">
                <Sparkles className="h-3.5 w-3.5 text-[#00A3E0]" />
                <span>Enterprise Acceleration</span>
              </div>

              {/* Main CTA Heading (Exact Requested Copy) */}
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Transform{' '}
                <span className="bg-gradient-to-r from-[#38BDF8] via-[#00A3E0] to-white bg-clip-text text-transparent">
                  Your Enterprise?
                </span>
              </h3>

              {/* Supporting Text (Exact Requested Copy) */}
              <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                Turn complex business challenges into intelligent, scalable digital solutions with Knooviq.
              </p>

              {/* Action Buttons: Primary & Secondary */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                {/* Primary CTA: Book a Consultation */}
                <button
                  onClick={() => onOpenContact ? onOpenContact('Enterprise Consultation') : undefined}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00A3E0] to-[#0070C0] hover:from-[#0284C7] hover:to-[#0369A1] text-white font-display font-bold text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer group"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Secondary CTA: Explore Our Services */}
                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/25 bg-white/5 hover:bg-white/10 text-white font-display font-semibold text-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>

              {/* Enterprise Trust Highlights */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-[11.5px] text-slate-300/90 font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Clean Core SAP Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>Autonomous AI Orchestration</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Global High-Availability Resilience</span>
                </div>
              </div>
            </div>

            {/* Right Visual Area: Interactive 3D Industries Globe */}
            <div className="w-full lg:w-[460px] xl:w-[500px] h-[380px] sm:h-[420px] lg:h-[440px] flex-shrink-0 flex items-center justify-center relative">
              <IndustriesGlobe3D />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedSolutionsSection;
