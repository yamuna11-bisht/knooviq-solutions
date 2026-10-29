import React from 'react';
import { ArrowRight, ChevronRight, Activity, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroStat {
  label: string;
  value: string;
  subtext: string;
}

interface CloudOperationsHeroProps {
  badgeText: string;
  badgeIcon?: React.ReactNode;
  heading: string;
  headline: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref?: string;
  primaryCtaAction?: () => void;
  secondaryCtaText: string;
  secondaryCtaAction?: () => void;
  currentPage: string;
  breadcrumbs?: { label: string; path?: string }[];
  heroImage?: string;
  stats?: HeroStat[];
}

export const CloudOperationsHero: React.FC<CloudOperationsHeroProps> = ({
  badgeText,
  badgeIcon,
  heading,
  headline,
  description,
  primaryCtaText,
  primaryCtaHref,
  primaryCtaAction,
  secondaryCtaText,
  secondaryCtaAction,
  currentPage,
  heroImage = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
  stats = [
    { label: "Target Availability", value: "99.99%", subtext: "Multi-Zone Resilience" },
    { label: "Interconnect Latency", value: "< 3ms", subtext: "Dedicated 10Gbps Links" },
    { label: "FinOps Optimization", value: "35%+", subtext: "TCO Reduction" },
    { label: "Operations Model", value: "24x7x365", subtext: "Global SRE & GOC" }
  ]
}) => {

  return (
    <>
      <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-[#050B17] text-white border-b border-slate-800">
        
        {/* Full-Bleed Panoramic Background Image — Spans 100% of Screen */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={heroImage}
            alt={headline}
            className="w-full h-full object-cover object-[70%_center] filter brightness-[1.06] contrast-[1.05]"
          />
          {/* Directional scrim: smoothly protects text readability on the left while keeping right 50%+ visuals 100% crisp & untouched */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B17] via-[#050B17]/80 sm:via-[#050B17]/60 via-35% to-transparent w-full lg:w-[50%] pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#050B17] via-[#050B17]/50 to-transparent pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 space-y-8 z-10 w-full">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-800">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link to="/cloud-operations" className="hover:text-cyan-400 transition-colors">Cloud &amp; Operations</Link>
            {currentPage !== 'Cloud & Operations' && (
              <>
                <ChevronRight className="w-3 h-3 text-slate-600" />
                <span className="text-cyan-400">{currentPage}</span>
              </>
            )}
          </nav>

          {/* Hero Header Content: Badge, Heading, Description & Action Buttons */}
          <div className="max-w-2xl lg:max-w-3xl space-y-6 text-left">
            
            {/* Practice Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
              {badgeIcon || <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />}
              <span>{badgeText}</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <span className="block text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-[#00A3E0]">
                {heading}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-md">
                {headline}
              </h1>
            </div>

            {/* Narrative Description */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              {primaryCtaHref ? (
                <a
                  href={primaryCtaHref}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 group"
                >
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={primaryCtaAction}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 group cursor-pointer"
                >
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              )}

              {secondaryCtaAction && (
                <button
                  type="button"
                  onClick={secondaryCtaAction}
                  className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-cyan-500/40 text-xs sm:text-sm font-bold tracking-wider transition-all cursor-pointer backdrop-blur-md"
                >
                  <span>{secondaryCtaText}</span>
                </button>
              )}
            </div>

          </div>

          {/* Executive Metrics Bar */}
          {stats && stats.length > 0 && (
            <div className="pt-4 border-t border-slate-700/60 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1 p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800/90 shadow-lg">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 block">
                    {stat.label}
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {stat.value}
                  </div>
                  <p className="text-xs text-slate-400">
                    {stat.subtext}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
};
