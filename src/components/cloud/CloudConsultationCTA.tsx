import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

interface CloudConsultationCTAProps {
  heading?: string;
  title?: string;
  badge?: string;
  description: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
  serviceTopic?: string;
  onOpenContact?: (topic?: string) => void;
}

export const CloudConsultationCTA: React.FC<CloudConsultationCTAProps> = ({
  heading,
  title,
  badge = "EXECUTIVE ADVISORY WORKSHOP",
  description,
  primaryBtnText = "Talk to Our Cloud Experts",
  secondaryBtnText = "Contact Cloud Practice",
  secondaryBtnLink,
  serviceTopic = "Cloud & Operations Architecture",
  onOpenContact
}) => {
  const displayHeading = heading || title || "Ready to Accelerate Your Cloud & Operations?";

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-[#050B17] dark:via-[#070E1C] dark:to-[#09152B] border-t border-slate-200 dark:border-white/10 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0A1A33] to-[#050E1F] border border-cyan-500/30 text-white shadow-2xl relative overflow-hidden space-y-8">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#00A3E0]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-snug">
              {displayHeading}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {description}
            </p>
          </div>

          {/* Value Bullet Points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
              <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
              <span>Complimentary Architecture Review</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
              <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
              <span>TCO &amp; FinOps Savings Modeling</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
              <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
              <span>Zero-Downtime Migration Blueprint</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onOpenContact && onOpenContact(serviceTopic)}
              className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2.5 group cursor-pointer"
            >
              <span>{primaryBtnText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            {secondaryBtnLink ? (
              <Link
                to={secondaryBtnLink}
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>{secondaryBtnText}</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => onOpenContact && onOpenContact(serviceTopic)}
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer"
              >
                <span>{secondaryBtnText}</span>
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
