import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

interface LifecycleCard {
  step: string;
  name: string;
  tag: string;
  caption: string;
  phase: string;
  circleBg: string;
  cardBg: string;
  dividerColor: string;
  borderClass: string;
  tagColor: string;
  pillClass: string;
  arrowColor: string;
  renderVisual: () => React.ReactNode;
}

export const DataToIntelligenceSection: React.FC = () => {
  const cards: LifecycleCard[] = [
    {
      step: '01',
      name: 'Connect',
      tag: 'Edge Telemetry',
      caption: 'Global Edge & Sensory Nodes',
      phase: 'PHASE 1/5',
      circleBg: 'bg-[#0070C0]',
      cardBg: 'bg-gradient-to-b from-sky-100/70 via-sky-50/40 to-white',
      dividerColor: 'border-sky-200/80',
      borderClass: 'border-2 border-sky-400 hover:border-[#0070C0]',
      tagColor: 'text-[#0070C0]',
      pillClass: 'bg-sky-100 text-[#0070C0] border-sky-300 font-semibold',
      arrowColor: 'text-[#0070C0]',
      renderVisual: () => (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-20 h-20 bg-sky-200/60 rounded-full blur-lg pointer-events-none" />

          <svg className="w-24 sm:w-28 h-16 sm:h-18 relative z-10" viewBox="0 0 100 80" fill="none">
            {/* Connecting Dashed Lines */}
            <path d="M50 42 L25 22" stroke="#BAE6FD" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M50 42 L75 22" stroke="#BAE6FD" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M50 42 L22 62" stroke="#BAE6FD" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M50 42 L78 62" stroke="#BAE6FD" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Pedestal Base */}
            <ellipse cx="50" cy="58" rx="20" ry="6" fill="#E0F2FE" />
            <ellipse cx="50" cy="56" rx="16" ry="4" fill="#BAE6FD" />

            {/* Center 3D Globe */}
            <circle cx="50" cy="40" r="16" fill="url(#globeGrad)" />
            <ellipse cx="50" cy="40" rx="7" ry="16" stroke="white" strokeWidth="1" strokeOpacity="0.6" fill="none" />
            <line x1="34" y1="40" x2="66" y2="40" stroke="white" strokeWidth="1" strokeOpacity="0.6" />
            <path d="M37 32 Q50 36 63 32" stroke="white" strokeWidth="1" strokeOpacity="0.5" fill="none" />
            <path d="M37 48 Q50 44 63 48" stroke="white" strokeWidth="1" strokeOpacity="0.5" fill="none" />

            {/* Floating Top-Left Node: Cloud */}
            <g transform="translate(14, 12)">
              <rect width="18" height="18" rx="5" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="1.2" />
              <path d="M6 11 A2.5 2.5 0 0 1 8.5 9 A3.5 3.5 0 0 1 14.5 9 A2.5 2.5 0 0 1 15 11 Z" fill="#00A3E0" />
            </g>

            {/* Floating Top-Right Node: Database */}
            <g transform="translate(68, 12)">
              <rect width="18" height="18" rx="5" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="1.2" />
              <ellipse cx="9" cy="6" rx="5" ry="2" fill="#0070C0" />
              <path d="M4 6 v3 c0 1.5 2.5 2 5 2 s5 -0.5 5 -2 v-3 Z" fill="#00A3E0" />
              <path d="M4 10 v3 c0 1.5 2.5 2 5 2 s5 -0.5 5 -2 v-3 Z" fill="#0070C0" />
            </g>

            {/* Floating Bottom-Left Node: Smartphone */}
            <g transform="translate(12, 52)">
              <rect width="18" height="18" rx="5" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="1.2" />
              <rect x="5.5" y="4" width="7" height="10" rx="1.5" fill="#0070C0" />
              <circle cx="9" cy="12.5" r="0.8" fill="white" />
            </g>

            {/* Floating Bottom-Right Node: Wifi */}
            <g transform="translate(68, 52)">
              <rect width="18" height="18" rx="5" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="1.2" />
              <path d="M5 8 A6 6 0 0 1 13 8" stroke="#00A3E0" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M6.5 10.5 A3.5 3.5 0 0 1 11.5 10.5" stroke="#0070C0" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="9" cy="13" r="1" fill="#0070C0" />
            </g>

            <defs>
              <linearGradient id="globeGrad" x1="34" y1="24" x2="66" y2="56" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38BDF8" />
                <stop offset="0.6" stopColor="#0284C7" />
                <stop offset="1" stopColor="#0369A1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )
    },
    {
      step: '02',
      name: 'Collect',
      tag: 'Data Fabric',
      caption: 'Unified Real-Time Data Fabrics',
      phase: 'PHASE 2/5',
      circleBg: 'bg-[#0070C0]',
      cardBg: 'bg-gradient-to-b from-blue-100/70 via-blue-50/40 to-white',
      dividerColor: 'border-blue-200/80',
      borderClass: 'border-2 border-sky-400 hover:border-[#0070C0]',
      tagColor: 'text-[#0070C0]',
      pillClass: 'bg-blue-100 text-[#0070C0] border-blue-300 font-semibold',
      arrowColor: 'text-[#0070C0]',
      renderVisual: () => (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-20 h-20 bg-blue-200/60 rounded-full blur-lg pointer-events-none" />

          <svg className="w-24 sm:w-28 h-16 sm:h-18 relative z-10" viewBox="0 0 100 80" fill="none">
            <ellipse cx="50" cy="62" rx="18" ry="5" fill="#E0F2FE" />
            <path d="M34 46 C34 49 41 52 50 52 C59 52 66 49 66 46 V53 C66 56 59 59 50 59 C41 59 34 56 34 53 Z" fill="url(#dbGrad3)" />
            <ellipse cx="50" cy="46" rx="16" ry="5" fill="#0284C7" />
            <path d="M34 37 C34 40 41 43 50 43 C59 43 66 40 66 37 V44 C66 47 59 50 50 50 C41 50 34 47 34 44 Z" fill="url(#dbGrad2)" />
            <ellipse cx="50" cy="37" rx="16" ry="5" fill="#38BDF8" />
            <path d="M34 28 C34 31 41 34 50 34 C59 34 66 31 66 28 V35 C66 38 59 41 50 41 C41 41 34 38 34 35 Z" fill="url(#dbGrad1)" />
            <ellipse cx="50" cy="28" rx="16" ry="5" fill="#7DD3FC" />

            <g transform="translate(18, 30)">
              <rect width="18" height="18" rx="4" fill="#0284C7" />
              <rect x="4" y="10" width="2.5" height="5" rx="0.5" fill="white" />
              <rect x="8" y="7" width="2.5" height="8" rx="0.5" fill="white" />
              <rect x="12" y="5" width="2.5" height="10" rx="0.5" fill="white" />
            </g>

            <g transform="translate(64, 42)">
              <rect width="18" height="18" rx="4" fill="#0284C7" />
              <rect x="5.5" y="8" width="7" height="6.5" rx="1" fill="white" />
              <path d="M7 8 V6 A2 2 0 0 1 11 6 V8" stroke="white" strokeWidth="1.4" fill="none" />
            </g>

            <g transform="translate(68, 16)">
              <rect width="15" height="18" rx="3" fill="#38BDF8" />
              <line x1="3.5" y1="5" x2="11.5" y2="5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="3.5" y1="8.5" x2="11.5" y2="8.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="3.5" y1="12" x2="8.5" y2="12" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            </g>

            <defs>
              <linearGradient id="dbGrad1" x1="34" y1="28" x2="66" y2="41" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38BDF8" />
                <stop offset="1" stopColor="#0284C7" />
              </linearGradient>
              <linearGradient id="dbGrad2" x1="34" y1="37" x2="66" y2="50" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0284C7" />
                <stop offset="1" stopColor="#0369A1" />
              </linearGradient>
              <linearGradient id="dbGrad3" x1="34" y1="46" x2="66" y2="59" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0369A1" />
                <stop offset="1" stopColor="#075985" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )
    },
    {
      step: '03',
      name: 'Analyze',
      tag: 'Cognitive AI',
      caption: 'Predictive & Algorithmic AI',
      phase: 'PHASE 3/5',
      circleBg: 'bg-[#4F46E5]',
      cardBg: 'bg-gradient-to-b from-indigo-100/70 via-indigo-50/40 to-white',
      dividerColor: 'border-indigo-200/80',
      borderClass: 'border-2 border-indigo-400 hover:border-[#4F46E5]',
      tagColor: 'text-[#4F46E5]',
      pillClass: 'bg-indigo-100 text-[#4F46E5] border-indigo-300 font-semibold',
      arrowColor: 'text-[#4F46E5]',
      renderVisual: () => (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-20 h-20 bg-indigo-200/60 rounded-full blur-lg pointer-events-none" />

          <svg className="w-24 sm:w-28 h-16 sm:h-18 relative z-10" viewBox="0 0 100 80" fill="none">
            <path d="M50 20 V10" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="50" cy="8" r="2.5" fill="#6366F1" />
            <path d="M32 26 L22 18" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="20" cy="16" r="2.5" fill="#6366F1" />
            <path d="M68 26 L78 18" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="80" cy="16" r="2.5" fill="#6366F1" />
            <path d="M25 40 H14" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="12" cy="40" r="2.5" fill="#6366F1" />
            <path d="M75 40 H86" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="88" cy="40" r="2.5" fill="#6366F1" />
            <path d="M32 54 L22 62" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="20" cy="64" r="2.5" fill="#6366F1" />
            <path d="M68 54 L78 62" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="80" cy="64" r="2.5" fill="#6366F1" />
            <path d="M50 60 V70" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="50" cy="72" r="2.5" fill="#6366F1" />

            <ellipse cx="50" cy="62" rx="18" ry="5" fill="#EEF2FF" />
            <rect x="30" y="22" width="40" height="36" rx="14" fill="url(#brainGrad)" />

            <path d="M43 27 C40 27 36 29 36 33 C36 36 39 37 41 38 C37 39 36 43 37 46 C38 49 42 50 45 49 C45 47 44 44 47 43" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <line x1="50" y1="26" x2="50" y2="54" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8" />
            <path d="M57 27 C60 27 64 29 64 33 C64 36 61 37 59 38 C63 39 64 43 63 46 C62 49 58 50 55 49 C55 47 56 44 53 43" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" />

            <defs>
              <linearGradient id="brainGrad" x1="30" y1="22" x2="70" y2="58" gradientUnits="userSpaceOnUse">
                <stop stopColor="#818CF8" />
                <stop offset="0.5" stopColor="#6366F1" />
                <stop offset="1" stopColor="#4F46E5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )
    },
    {
      step: '04',
      name: 'Automate',
      tag: 'Autonomous Action',
      caption: 'Zero-Touch Workflow Execution',
      phase: 'PHASE 4/5',
      circleBg: 'bg-[#8B5CF6]',
      cardBg: 'bg-gradient-to-b from-purple-100/70 via-purple-50/40 to-white',
      dividerColor: 'border-purple-200/80',
      borderClass: 'border-2 border-purple-400 hover:border-[#8B5CF6]',
      tagColor: 'text-[#8B5CF6]',
      pillClass: 'bg-purple-100 text-[#8B5CF6] border-purple-300 font-semibold',
      arrowColor: 'text-[#8B5CF6]',
      renderVisual: () => (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-20 h-20 bg-purple-200/60 rounded-full blur-lg pointer-events-none" />

          <svg className="w-24 sm:w-28 h-16 sm:h-18 relative z-10" viewBox="0 0 100 80" fill="none">
            <ellipse cx="50" cy="62" rx="20" ry="5" fill="#FAF5FF" />
            <path d="M50 14 A24 24 0 0 1 74 38" stroke="#C084FC" strokeWidth="3" strokeLinecap="round" />
            <polygon points="74,38 78,30 70,32" fill="#8B5CF6" />
            <path d="M50 62 A24 24 0 0 1 26 38" stroke="#A855F7" strokeWidth="3" strokeLinecap="round" />
            <polygon points="26,38 22,46 30,44" fill="#7C3AED" />

            <g transform="translate(50, 38)">
              <circle cx="0" cy="0" r="14" fill="url(#gearGrad)" />
              <rect x="-3" y="-18" width="6" height="5" rx="1.5" fill="#8B5CF6" />
              <rect x="-3" y="13" width="6" height="5" rx="1.5" fill="#6D28D9" />
              <rect x="-18" y="-3" width="5" height="6" rx="1.5" fill="#7C3AED" />
              <rect x="13" y="-3" width="5" height="6" rx="1.5" fill="#8B5CF6" />
              <g transform="rotate(45)">
                <rect x="-3" y="-18" width="6" height="5" rx="1.5" fill="#8B5CF6" />
                <rect x="-3" y="13" width="6" height="5" rx="1.5" fill="#6D28D9" />
                <rect x="-18" y="-3" width="5" height="6" rx="1.5" fill="#7C3AED" />
                <rect x="13" y="-3" width="5" height="6" rx="1.5" fill="#8B5CF6" />
              </g>
              <circle cx="0" cy="0" r="5" fill="white" />
            </g>

            <defs>
              <linearGradient id="gearGrad" x1="-14" y1="-14" x2="14" y2="14" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A855F7" />
                <stop offset="0.6" stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#6D28D9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )
    },
    {
      step: '05',
      name: 'Optimize',
      tag: 'Continuous Tuning',
      caption: 'Closed-Loop Operational Agility',
      phase: 'PHASE 5/5',
      circleBg: 'bg-[#10B981]',
      cardBg: 'bg-gradient-to-b from-emerald-100/70 via-emerald-50/40 to-white',
      dividerColor: 'border-emerald-200/80',
      borderClass: 'border-2 border-emerald-400 hover:border-[#10B981]',
      tagColor: 'text-emerald-600',
      pillClass: 'bg-emerald-100 text-emerald-700 border-emerald-300 font-semibold',
      arrowColor: 'text-[#10B981]',
      renderVisual: () => (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-20 h-20 bg-emerald-200/60 rounded-full blur-lg pointer-events-none" />

          <svg className="w-24 sm:w-28 h-16 sm:h-18 relative z-10" viewBox="0 0 100 80" fill="none">
            <polygon points="50,42 80,56 50,70 20,56" fill="#D1FAE5" />
            <polygon points="50,45 76,57 50,68 24,57" fill="#A7F3D0" />

            <g transform="translate(34, 52)">
              <polygon points="0,-8 5,-5 0,-2 -5,-5" fill="#6EE7B7" />
              <polygon points="-5,-5 0,-2 0,4 -5,1" fill="#10B981" />
              <polygon points="0,-2 5,-5 5,1 0,4" fill="#059669" />
            </g>
            <g transform="translate(44, 47)">
              <polygon points="0,-14 5,-11 0,-8 -5,-11" fill="#6EE7B7" />
              <polygon points="-5,-11 0,-8 0,6 -5,3" fill="#10B981" />
              <polygon points="0,-8 5,-11 5,3 0,6" fill="#059669" />
            </g>
            <g transform="translate(54, 42)">
              <polygon points="0,-20 5,-17 0,-14 -5,-17" fill="#6EE7B7" />
              <polygon points="-5,-17 0,-14 0,8 -5,5" fill="#10B981" />
              <polygon points="0,-14 5,-17 5,5 0,8" fill="#059669" />
            </g>
            <g transform="translate(64, 37)">
              <polygon points="0,-26 5,-23 0,-20 -5,-23" fill="#6EE7B7" />
              <polygon points="-5,-23 0,-20 0,10 -5,7" fill="#10B981" />
              <polygon points="0,-20 5,-23 5,7 0,10" fill="#059669" />
            </g>

            <path d="M30 46 Q46 36 68 18" stroke="#059669" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <polygon points="68,14 74,17 68,22" fill="#059669" />
            <circle cx="68" cy="18" r="6" fill="#10B981" fillOpacity="0.2" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section 
      id="data-to-intelligence" 
      className="relative py-14 sm:py-16 bg-gradient-to-b from-slate-50 via-sky-50/25 to-slate-50 text-slate-900 overflow-hidden select-none border-b border-slate-200/80"
    >
      {/* Ambient background glow & subtle grid */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[360px] bg-gradient-to-r from-sky-200/40 via-indigo-200/30 to-emerald-200/30 blur-3xl rounded-full pointer-events-none -z-0 opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Pill Badge */}
            <div className="mb-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-300 bg-sky-50 px-3 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-[#0070C0] shadow-2xs">
                <Sparkles className="h-3.5 w-3.5 text-[#00A3E0]" />
                End-to-End Operational Lifecycle
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#0A1931] tracking-tight leading-tight">
              From <span className="bg-gradient-to-r from-[#00A3E0] to-[#0070C0] bg-clip-text text-transparent">Data to Intelligence</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              Connecting global operational data to autonomous decision execution through a proven 5-stage transformation pipeline.
            </p>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* 5 CONNECTED SEQUENCE CARDS (50/50 Partition: Compact Size)                */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-2.5 lg:gap-1.5 xl:gap-2">
          {cards.map((card, idx) => (
            <React.Fragment key={card.step}>
              
              {/* The Card - Compact Split 50/50 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className={`flex-1 rounded-2xl ${card.cardBg} ${card.borderClass} overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col relative group h-[280px] sm:h-[290px]`}
              >
                {/* TOP 50% PARTITION: Badge + Diagram */}
                <div className="h-1/2 p-2.5 sm:p-3 pb-1 flex flex-col justify-between relative">
                  {/* Top-Left Circular Number Badge */}
                  <div className="flex items-center justify-between">
                    <span className={`h-5.5 w-5.5 rounded-full ${card.circleBg} text-white font-mono text-[10px] font-extrabold flex items-center justify-center shadow-xs`}>
                      {card.step}
                    </span>
                  </div>

                  {/* Center Custom 3D Illustration - Centered in Top 50% */}
                  <div className="flex-1 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {card.renderVisual()}
                  </div>
                </div>

                {/* 50-50 HORIZONTAL PARTITION DIVIDER */}
                <div className={`w-full border-t ${card.dividerColor}`} />

                {/* BOTTOM 50% PARTITION: Title + Subtitle + Caption + Phase Badge */}
                <div className="h-1/2 p-2.5 sm:p-3 pt-2 flex flex-col justify-between bg-white/75 backdrop-blur-[2px]">
                  <div>
                    {/* Title */}
                    <h3 className="font-display text-base sm:text-lg font-extrabold text-[#0A1931] mb-0.5 leading-tight">
                      {card.name}
                    </h3>

                    {/* Subtitle Tag */}
                    <div className={`text-[11px] font-bold ${card.tagColor} mb-1`}>
                      {card.tag}
                    </div>

                    {/* Caption */}
                    <p className="text-[10px] sm:text-[11px] text-slate-500 leading-snug font-medium line-clamp-2">
                      {card.caption}
                    </p>
                  </div>

                  {/* Bottom Phase Badge */}
                  <div className="pt-1 mt-auto">
                    <span className={`inline-block text-[8.5px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${card.pillClass}`}>
                      {card.phase}
                    </span>
                  </div>
                </div>

              </motion.div>

              {/* Connecting Arrow between cards */}
              {idx < cards.length - 1 && (
                <div className="hidden lg:flex items-center justify-center flex-shrink-0 px-0.5 self-center">
                  <ArrowRight className={`h-3.5 w-3.5 xl:h-4 xl:w-4 ${card.arrowColor}`} />
                </div>
              )}

            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DataToIntelligenceSection;
