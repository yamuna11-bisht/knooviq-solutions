import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WhatKnooviqDoesSectionProps {
  onOpenContact?: (service?: string) => void;
}

export const WhatKnooviqDoesSection: React.FC<WhatKnooviqDoesSectionProps> = ({ onOpenContact }) => {
  const capabilities = [
    'Migrate from legacy SAP ECC to Clean Core S/4HANA with near-zero disruption',
    'Modernize multi-cloud architectures across AWS, Azure, Google Cloud & SAP BTP',
    'Embed autonomous agentic AI copilots & intelligent document processing into ERP',
    'Enable real-time industrial IoT telemetry, smart facilities & predictive asset maintenance',
    'Automate foreign trade EXIM compliance, e-invoicing & statutory reporting workflows'
  ];

  return (
    <section 
      id="what-knooviq-does" 
      className="relative py-20 sm:py-28 lg:py-32 bg-white text-slate-900 overflow-hidden select-none border-b border-slate-200/80"
    >
      {/* Background Subtle Atmospheric Radiance */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-sky-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-50/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0070C006_1px,transparent_1px),linear-gradient(to_bottom,#0070C006_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Clean Editorial Copy & Key Deliverables                     */}
          {/* ========================================================================= */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6 sm:space-y-8"
          >
            {/* Pill Tag */}
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200/80 bg-sky-50 px-3.5 py-1 text-xs font-semibold text-[#0070C0] shadow-2xs tracking-wide">
                <Sparkles className="h-3 w-3 text-[#00A3E0]" />
                What We Do
              </span>
            </div>

            {/* Bold Heading */}
            <div className="space-y-2">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] xl:text-5xl font-extrabold text-[#0A1931] tracking-tight leading-[1.15]">
                Your Strategic Partner for <br />
                <span className="bg-gradient-to-r from-[#00A3E0] to-[#0070C0] bg-clip-text text-transparent">
                  SAP &amp; Digital Transformation
                </span>
              </h2>
            </div>

            {/* Narrative Subtext (Original Content) */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              We empower modern enterprises to streamline operations, eliminate technical debt, and build agile digital backbones through proven clean core methodologies, agentic AI, and sovereign cloud engineering.
            </p>

            {/* Capability Checklist with Circular Checkmarks */}
            <div className="space-y-3.5 pt-2">
              {capabilities.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <CheckCircle2 className="h-5 w-5 text-[#00A3E0] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-700 font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0A1931] hover:bg-[#0070C0] text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow-md hover:gap-3.5"
              >
                <span>View All Services</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              {onOpenContact && (
                <button
                  type="button"
                  onClick={() => onOpenContact('Enterprise SAP Transformation')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 hover:border-sky-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0070C0] font-semibold text-sm sm:text-base transition-all duration-200"
                >
                  <span>Talk to an Architect</span>
                </button>
              )}
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: High-End Enterprise Image (No numbers, No stats, No boxes)  */}
          {/* ========================================================================= */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-6 relative"
          >
            {/* Ambient Behind-Glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-sky-400/20 via-blue-500/15 to-indigo-500/10 rounded-3xl blur-2xl -z-10 opacity-70" />

            {/* Main Showcase Image Frame */}
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 group">
              <img 
                src="/images/sap_app_s4hana_3d.jpg" 
                alt="SAP S/4HANA Clean Core Digital Transformation Architecture" 
                className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Overlay for Sleek Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20 pointer-events-none" />

              {/* Floating Bottom Label (Clean, Elegant, Zero Numbers/Percentages) */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#00A3E0] animate-pulse" />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white tracking-wide">
                      Clean Core S/4HANA &amp; Multi-Cloud Architecture
                    </div>
                    <div className="text-[11px] text-slate-300 font-medium">
                      Enterprise Modernization &amp; Intelligent Automation
                    </div>
                  </div>
                </div>
                <span className="hidden sm:inline-block text-[11px] font-mono uppercase tracking-wider text-sky-300/90 font-semibold px-2.5 py-1 rounded bg-sky-950/60 border border-sky-400/30">
                  SAP Ecosystem
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhatKnooviqDoesSection;
