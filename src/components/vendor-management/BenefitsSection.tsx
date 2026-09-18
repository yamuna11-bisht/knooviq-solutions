import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Clock, 
  ShieldCheck, 
  TrendingUp, 
  ArrowUpRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface BenefitCard {
  metric: string;
  prefix?: string;
  suffix?: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  highlights: string[];
  color: string;
}

export const BenefitsSection: React.FC = () => {
  const benefits: BenefitCard[] = [
    {
      metric: '40%',
      title: 'Faster Vendor Onboarding',
      subtitle: 'From Weeks to Days',
      description: 'Dramatically condense supplier qualification cycles with intelligent self-service digital workflows and automated statutory API validations.',
      icon: Clock,
      highlights: [
        'Average intake reduced from 21 days to 3.2 days',
        'Direct automated SAP Business Partner generation',
        'Instant tax authority master data pre-filling'
      ],
      color: 'from-blue-600 to-cyan-500'
    },
    {
      metric: '30%',
      title: 'Reduction in Manual Work',
      subtitle: 'Zero Tedious Paperwork',
      description: 'Liberate procurement and finance teams from chasing emails, manual spreadsheet entries, and repetitive phone calls.',
      icon: Zap,
      highlights: [
        'Automated AI OCR extraction for all supplier certificates',
        'Penny-drop automated bank verification without human touch',
        'One-click multi-departmental approval orchestration'
      ],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      metric: '94%',
      title: 'Compliance Visibility',
      subtitle: 'Zero Blindspots or Penalties',
      description: 'Maintain an unassailable real-time audit posture across vendor statutory filings, global sanctions, and expiring certifications.',
      icon: ShieldCheck,
      highlights: [
        'Continuous monitoring of GST return filing regularity',
        'Real-time OFAC, PEP, and international sanction screening',
        'Automatic 30-day proactive certificate renewal warnings'
      ],
      color: 'from-indigo-600 to-blue-600'
    },
    {
      metric: '25%',
      title: 'Better Vendor Performance',
      subtitle: 'Accountability Driven by Data',
      description: 'Empower buyers and category managers with transparent OTIF analytics, quality rejection ratings, and automated scorecards.',
      icon: TrendingUp,
      highlights: [
        'Direct sync with SAP Goods Receipt (MIGO) transactions',
        'Tier-based vendor incentives and preferential allocation',
        'Transparent dispute resolution cuts payment friction'
      ],
      color: 'from-emerald-600 to-teal-500'
    }
  ];

  return (
    <section id="benefits-section" className="py-20 md:py-28 bg-slate-50 dark:bg-[#050B17] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/70 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-xs font-bold uppercase tracking-wider text-[#0052CC] dark:text-[#00A3E0]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Enterprise ROI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Why Businesses Choose Smarter Vendor Management
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Transform procurement operations into an agile, compliant, and cost-efficient competitive advantage.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl bg-white dark:bg-[#0A1931] border border-slate-200 dark:border-white/10 p-6 shadow-sm hover:shadow-xl hover:border-blue-300 dark:hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Metric Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/5 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-[#0052CC] dark:text-[#00A3E0] flex items-center justify-center group-hover:bg-[#0052CC] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-3xl sm:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#0052CC] via-[#00A3E0] to-blue-600 dark:from-[#00A3E0] dark:to-cyan-300">
                      {benefit.metric}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {benefit.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#0052CC] dark:group-hover:text-cyan-300 transition-colors">
                      {benefit.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-2">
                  {benefit.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
