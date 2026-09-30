import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Zap, TrendingUp, Layers } from 'lucide-react';

interface PillarItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  borderClass: string;
  hoverBorderClass: string;
  bgGradient: string;
  iconBg: string;
  accentText: string;
  accentBar: string;
  shadowGlow: string;
}

export const WhyKnooviqTypographySection: React.FC = () => {
  const pillars: PillarItem[] = [
    {
      title: 'Innovation',
      desc: 'Extensible cloud architecture keeping your core ERP pristine and adaptable.',
      icon: <Zap className="h-4.5 w-4.5 text-[#00A3E0] group-hover:text-white transition-colors" />,
      borderClass: 'border-2 border-sky-300/90',
      hoverBorderClass: 'hover:border-[#00A3E0]',
      bgGradient: 'bg-gradient-to-b from-sky-50/90 via-sky-50/30 to-white',
      iconBg: 'bg-sky-100/90 border-sky-200 group-hover:bg-[#00A3E0]',
      accentText: 'group-hover:text-[#00A3E0]',
      accentBar: 'bg-gradient-to-r from-[#00A3E0] to-sky-400',
      shadowGlow: 'hover:shadow-lg hover:shadow-sky-100'
    },
    {
      title: 'Intelligence',
      desc: 'Predictive models and AI agents embedded directly into operational workflows.',
      icon: <Sparkles className="h-4.5 w-4.5 text-[#0070C0] group-hover:text-white transition-colors" />,
      borderClass: 'border-2 border-blue-300/90',
      hoverBorderClass: 'hover:border-[#0070C0]',
      bgGradient: 'bg-gradient-to-b from-blue-50/90 via-blue-50/30 to-white',
      iconBg: 'bg-blue-100/90 border-blue-200 group-hover:bg-[#0070C0]',
      accentText: 'group-hover:text-[#0070C0]',
      accentBar: 'bg-gradient-to-r from-[#0070C0] to-blue-400',
      shadowGlow: 'hover:shadow-lg hover:shadow-blue-100'
    },
    {
      title: 'Scalability',
      desc: 'Modular foundations engineered to expand seamlessly across global operations.',
      icon: <TrendingUp className="h-4.5 w-4.5 text-indigo-600 group-hover:text-white transition-colors" />,
      borderClass: 'border-2 border-indigo-300/90',
      hoverBorderClass: 'hover:border-indigo-600',
      bgGradient: 'bg-gradient-to-b from-indigo-50/90 via-indigo-50/30 to-white',
      iconBg: 'bg-indigo-100/90 border-indigo-200 group-hover:bg-indigo-600',
      accentText: 'group-hover:text-indigo-600',
      accentBar: 'bg-gradient-to-r from-indigo-600 to-indigo-400',
      shadowGlow: 'hover:shadow-lg hover:shadow-indigo-100'
    },
    {
      title: 'Reliability',
      desc: 'Enterprise governance and continuous monitoring for uninterrupted operations.',
      icon: <ShieldCheck className="h-4.5 w-4.5 text-emerald-600 group-hover:text-white transition-colors" />,
      borderClass: 'border-2 border-emerald-300/90',
      hoverBorderClass: 'hover:border-emerald-600',
      bgGradient: 'bg-gradient-to-b from-emerald-50/90 via-emerald-50/30 to-white',
      iconBg: 'bg-emerald-100/90 border-emerald-200 group-hover:bg-emerald-600',
      accentText: 'group-hover:text-emerald-600',
      accentBar: 'bg-gradient-to-r from-emerald-600 to-emerald-400',
      shadowGlow: 'hover:shadow-lg hover:shadow-emerald-100'
    }
  ];

  return (
    <section id="why-knooviq" className="relative py-14 sm:py-16 bg-white text-slate-900 overflow-hidden select-none border-b border-slate-200/80">
      
      {/* Background Soft Atmospheric Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[280px] bg-gradient-to-r from-sky-100/50 via-blue-100/30 to-indigo-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow */}
        <div className="text-center mb-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-300 bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0070C0] shadow-2xs">
              <Layers className="h-3.5 w-3.5 text-[#00A3E0]" />
              The KNOOVIQ Advantage
            </span>
          </motion.div>
        </div>

        {/* Headline Statement */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] tracking-tight leading-tight"
          >
            Technology that <span className="bg-gradient-to-r from-[#00A3E0] to-[#0070C0] bg-clip-text text-transparent">connects.</span>{' '}
            Intelligence that <span className="bg-gradient-to-r from-[#0070C0] to-[#6366F1] bg-clip-text text-transparent">transforms.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Bridging complex ERP systems with cognitive intelligence, delivering scalable enterprise architecture that accelerates business velocity.
          </motion.p>
        </div>

        {/* 4 Small, Compact, Colorful Cards with Visible Borders and Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`p-4.5 sm:p-5 rounded-2xl ${item.borderClass} ${item.hoverBorderClass} ${item.bgGradient} transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl ${item.shadowGlow} cursor-default`}
            >
              <div>
                {/* Header: Icon with hover scale & rotate */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className={`h-9 w-9 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:scale-110 group-hover:rotate-6 ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <span className="h-2 w-2 rounded-full bg-slate-300 group-hover:scale-125 transition-transform" />
                </div>

                {/* Title with hover color */}
                <h3 className={`font-display text-base font-bold text-[#0A1931] mb-1.5 transition-colors ${item.accentText}`}>
                  {item.title}
                </h3>

                {/* Concise Minimal Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Animated Expand Line */}
              <div className="mt-4 pt-2">
                <div className="h-1 w-8 rounded-full bg-slate-200 overflow-hidden group-hover:w-full transition-all duration-500 ease-out">
                  <div className={`h-full w-full ${item.accentBar}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
