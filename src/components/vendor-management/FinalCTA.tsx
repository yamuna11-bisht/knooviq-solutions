import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Sparkles,
  PhoneCall,
  CalendarCheck
} from 'lucide-react';

interface FinalCTAProps {
  onOpenContact?: (topic?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-[#070E1E]">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-gradient-to-r from-[#0052CC]/10 via-[#00A3E0]/15 to-transparent blur-[140px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0A1931] via-[#0D234A] to-[#0A1931] text-white p-8 sm:p-14 lg:p-16 border border-white/10 shadow-2xl shadow-blue-900/20 overflow-hidden">
          
          {/* Subtle Corner Glow Accent */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00A3E0]/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0052CC]/30 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs font-bold uppercase tracking-wider text-[#00A3E0]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready for Immediate Deployment</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Transform the Way You Manage Vendors.
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Empower your procurement and finance teams with next-generation vendor onboarding, risk mitigation, and automated governance. Start your journey with KNOOVIQ today.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenContact?.('Vendor Management Demo')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#0052CC] to-[#00A3E0] hover:from-[#0041a3] hover:to-[#008ec3] text-white font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenContact?.('Talk to a Vendor Management Expert')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold border border-white/20 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <PhoneCall className="w-4 h-4 text-[#00A3E0]" />
                <span>Talk to an Expert</span>
              </button>
            </div>

            {/* Trust highlights below buttons */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Go-Live in 4-6 Weeks</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pre-Built SAP S/4HANA Connectors</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dedicated Enterprise Support SLA</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
