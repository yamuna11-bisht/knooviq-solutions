import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles
} from 'lucide-react';
import { IndustriesGlobe3D } from '../3d/IndustriesGlobe3D';

export const FeaturedSolutionsSection: React.FC<{ onOpenContact?: (service?: string) => void }> = ({ onOpenContact }) => {
  return (
    <section id="home-cta" className="relative py-16 sm:py-20 bg-white text-slate-900 overflow-hidden select-none border-b border-slate-200/80">
      
      {/* Background Soft Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-sky-100/40 via-blue-100/30 to-indigo-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* PREMIUM FULL-WIDTH CTA BANNER (Cinematic Enterprise Website Ending)       */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#061224] via-[#0A1931] to-[#003B73] border border-sky-500/25 shadow-2xl shadow-sky-950/40 p-8 sm:p-10 lg:p-14"
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

export const HomeCtaSection = FeaturedSolutionsSection;
export default FeaturedSolutionsSection;
