import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Radio, Cpu, ShieldCheck } from 'lucide-react';

interface CreativeMetric {
  value: string;
  label: string;
  badge: string;
  badgeColor: string;
  description: string;
  gradient: string;
  borderClass: string;
  hoverBorderClass: string;
  bgGradient: string;
  accentBar: string;
  shadowGlow: string;
  visualGraphic: React.ReactNode;
}

export const NumbersImpactSection: React.FC = () => {
  const metrics: CreativeMetric[] = [
    {
      value: '99%+',
      label: 'Operational Visibility',
      badge: 'LIVE SYNC',
      badgeColor: 'text-sky-700 bg-sky-100/80 border-sky-300',
      description: 'Real-time telemetry and automated state-tracking across ERP transaction ledgers.',
      gradient: 'from-[#00A3E0] to-[#0070C0]',
      borderClass: 'border-2 border-sky-200/90',
      hoverBorderClass: 'hover:border-[#00A3E0]',
      bgGradient: 'bg-gradient-to-b from-sky-50/80 via-white to-white',
      accentBar: 'bg-gradient-to-r from-[#00A3E0] to-sky-400',
      shadowGlow: 'hover:shadow-lg hover:shadow-sky-100',
      visualGraphic: (
        <svg className="w-12 h-12" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="25" fill="none" stroke="#E0F2FE" strokeWidth="2.5" />
          <circle 
            cx="30" 
            cy="30" 
            r="25" 
            fill="none" 
            stroke="#00A3E0" 
            strokeWidth="2.5" 
            strokeDasharray="157" 
            strokeDashoffset="10" 
            strokeLinecap="round" 
            transform="rotate(-90 30 30)"
          />
          <circle cx="30" cy="30" r="16" fill="none" stroke="#BAE6FD" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="30" cy="30" r="7" fill="#F0F9FF" stroke="#0070C0" strokeWidth="1.5" />
          <circle cx="38" cy="22" r="2" fill="#00A3E0" className="animate-ping" style={{ animationDuration: '2.5s' }} />
          <circle cx="38" cy="22" r="2" fill="#00A3E0" />
        </svg>
      )
    },
    {
      value: '24/7',
      label: 'Connected Operations',
      badge: 'GLOBAL SLA',
      badgeColor: 'text-blue-700 bg-blue-100/80 border-blue-300',
      description: 'Continuous ITIL-governed application management across all global regional zones.',
      gradient: 'from-[#0070C0] to-indigo-600',
      borderClass: 'border-2 border-blue-200/90',
      hoverBorderClass: 'hover:border-[#0070C0]',
      bgGradient: 'bg-gradient-to-b from-blue-50/80 via-white to-white',
      accentBar: 'bg-gradient-to-r from-[#0070C0] to-blue-400',
      shadowGlow: 'hover:shadow-lg hover:shadow-blue-100',
      visualGraphic: (
        <svg className="w-12 h-12" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="24" fill="none" stroke="#DBEAFE" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="30" cy="30" r="16" fill="none" stroke="#BFDBFE" strokeWidth="1.5" />
          <circle cx="30" cy="30" r="6" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2" />
          <g className="origin-center animate-spin" style={{ animationDuration: '7s' }}>
            <circle cx="30" cy="6" r="2.5" fill="#0070C0" />
            <circle cx="30" cy="6" r="4.5" fill="#0070C0" opacity="0.3" className="animate-ping" />
          </g>
          <g className="origin-center animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
            <circle cx="44" cy="30" r="2" fill="#6366F1" />
          </g>
        </svg>
      )
    },
    {
      value: '360°',
      label: 'Business Intelligence',
      badge: 'SPECTRUM',
      badgeColor: 'text-indigo-700 bg-indigo-100/80 border-indigo-300',
      description: 'Unified cross-functional cockpit bridging operational edge telemetry with finance.',
      gradient: 'from-indigo-600 to-purple-600',
      borderClass: 'border-2 border-indigo-200/90',
      hoverBorderClass: 'hover:border-indigo-600',
      bgGradient: 'bg-gradient-to-b from-indigo-50/80 via-white to-white',
      accentBar: 'bg-gradient-to-r from-indigo-600 to-indigo-400',
      shadowGlow: 'hover:shadow-lg hover:shadow-indigo-100',
      visualGraphic: (
        <svg className="w-12 h-12" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="24" fill="none" stroke="#E0E7FF" strokeWidth="1.5" />
          <line x1="30" y1="8" x2="30" y2="52" stroke="#C7D2FE" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="8" y1="30" x2="52" y2="30" stroke="#C7D2FE" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="30" cy="30" r="13" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1.5" />
          <circle cx="30" cy="17" r="1.5" fill="#4F46E5" />
          <circle cx="43" cy="30" r="1.5" fill="#6366F1" />
          <circle cx="30" cy="43" r="1.5" fill="#818CF8" />
          <circle cx="17" cy="30" r="1.5" fill="#6366F1" />
          <g className="origin-center animate-spin" style={{ animationDuration: '5s' }}>
            <polygon points="30,30 46,14 42,6" fill="#6366F1" opacity="0.4" />
          </g>
        </svg>
      )
    },
    {
      value: '∞',
      label: 'Clean Scalability',
      badge: 'CLEAN CORE',
      badgeColor: 'text-emerald-700 bg-emerald-100/80 border-emerald-300',
      description: 'Future-proof Clean Core foundations engineered to scale with enterprise growth.',
      gradient: 'from-emerald-600 to-teal-500',
      borderClass: 'border-2 border-emerald-200/90',
      hoverBorderClass: 'hover:border-emerald-600',
      bgGradient: 'bg-gradient-to-b from-emerald-50/80 via-white to-white',
      accentBar: 'bg-gradient-to-r from-emerald-600 to-emerald-400',
      shadowGlow: 'hover:shadow-lg hover:shadow-emerald-100',
      visualGraphic: (
        <svg className="w-12 h-12" viewBox="0 0 60 60">
          <circle cx="21" cy="30" r="11" fill="none" stroke="#D1FAE5" strokeWidth="2.5" />
          <circle cx="39" cy="30" r="11" fill="none" stroke="#D1FAE5" strokeWidth="2.5" />
          <circle 
            cx="21" 
            cy="30" 
            r="11" 
            fill="none" 
            stroke="#10B981" 
            strokeWidth="2.5" 
            strokeDasharray="30 40" 
            strokeLinecap="round" 
            className="animate-spin origin-[21px_30px]" 
            style={{ animationDuration: '6s' }} 
          />
          <circle 
            cx="39" 
            cy="30" 
            r="11" 
            fill="none" 
            stroke="#059669" 
            strokeWidth="2.5" 
            strokeDasharray="30 40" 
            strokeLinecap="round" 
            className="animate-spin origin-[39px_30px]" 
            style={{ animationDuration: '6s', animationDirection: 'reverse' }} 
          />
          <circle cx="30" cy="30" r="2" fill="#047857" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-12 sm:py-14 bg-slate-50/70 text-slate-900 overflow-hidden select-none border-b border-slate-200/80">
      
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[220px] bg-gradient-to-r from-sky-100/40 via-blue-100/30 to-indigo-100/30 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-300 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0070C0] mb-2 shadow-2xs font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Enterprise Telemetry
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A1931] tracking-tight">
              Engineered for <span className="bg-gradient-to-r from-[#00A3E0] to-[#0070C0] bg-clip-text text-transparent">Measurable Impact</span>
            </h2>
          </motion.div>
        </div>

        {/* 4 Creative, Interactive, Compact Telemetry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {metrics.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`p-4 sm:p-4.5 rounded-2xl ${item.borderClass} ${item.hoverBorderClass} ${item.bgGradient} transition-all duration-300 flex flex-col justify-between group shadow-2xs hover:shadow-xl ${item.shadowGlow} cursor-default`}
            >
              <div>
                {/* Top Row: Status Badge on Left + Creative Animated Telemetry Graphic on Right */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${item.badgeColor}`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current animate-ping" />
                    {item.badge}
                  </span>
                  
                  {/* Creative Animated Graphic Container */}
                  <div className="p-1 rounded-xl bg-white/80 border border-slate-200/80 shadow-2xs group-hover:scale-110 transition-transform duration-300">
                    {item.visualGraphic}
                  </div>
                </div>

                {/* Metric Value */}
                <div className={`font-display text-2xl sm:text-3xl font-black tracking-tight bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-1`}>
                  {item.value}
                </div>

                {/* Card Title / Label */}
                <h3 className="font-display text-sm sm:text-base font-bold text-[#0A1931] mb-1 group-hover:text-[#0070C0] transition-colors">
                  {item.label}
                </h3>

                {/* Concise Description */}
                <p className="text-xs text-slate-600 leading-snug font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Animated Expanding Accent Line */}
              <div className="mt-3.5 pt-2">
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
