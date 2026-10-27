import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Activity, ShieldCheck, Zap, Cpu, RefreshCw, ChevronRight } from 'lucide-react';

interface PipelineStage {
  step: string;
  name: string;
  color: string;
  titleColorClass: string;
  description: string;
  metric: string;
  renderIcon: () => React.ReactNode;
}

export const DataToIntelligenceSection: React.FC = () => {
  const stages: PipelineStage[] = [
    {
      step: '01',
      name: 'Connect',
      color: '#FACC15',
      titleColorClass: 'text-[#FACC15]',
      description: 'Global Edge Telemetry &\nDistributed Sensory\nNetwork Nodes',
      metric: 'Edge IoT & Telemetry',
      renderIcon: () => (
        <g>
          {/* Central Hub Node */}
          <circle cx="70" cy="60" r="6.5" stroke="#FACC15" strokeWidth="2.8" fill="none" />

          {/* 5 Spoke Connections & Peripheral Nodes */}
          {/* Top-Left */}
          <line x1="65" y1="55" x2="49" y2="46" stroke="#FACC15" strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="45" cy="43" r="4.2" stroke="#FACC15" strokeWidth="2.6" fill="none" />

          {/* Top-Right */}
          <line x1="75" y1="55" x2="88" y2="44" stroke="#FACC15" strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="92" cy="41" r="4.2" stroke="#FACC15" strokeWidth="2.6" fill="none" />

          {/* Right */}
          <line x1="76.5" y1="61" x2="89.5" y2="64" stroke="#FACC15" strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="94" cy="65" r="4.2" stroke="#FACC15" strokeWidth="2.6" fill="none" />

          {/* Bottom-Left */}
          <line x1="65" y1="65" x2="51" y2="74" stroke="#FACC15" strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="47" cy="78" r="4.2" stroke="#FACC15" strokeWidth="2.6" fill="none" />

          {/* Bottom-Right */}
          <line x1="73" y1="66" x2="78" y2="76" stroke="#FACC15" strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="80" cy="80" r="4.2" stroke="#FACC15" strokeWidth="2.6" fill="none" />
        </g>
      )
    },
    {
      step: '02',
      name: 'Collect',
      color: '#FB923C',
      titleColorClass: 'text-[#FB923C]',
      description: 'Unified Data Fabrics &\nReal-Time Streaming\nIntegration',
      metric: 'Unified Data Fabric',
      renderIcon: () => (
        <g>
          {/* 3D Polyhedral Lattice Mesh */}
          <line x1="70" y1="36" x2="46" y2="55" stroke="#FB923C" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="70" y1="36" x2="94" y2="50" stroke="#FB923C" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="70" y1="36" x2="68" y2="55" stroke="#FB923C" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="46" y1="55" x2="68" y2="55" stroke="#FB923C" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="94" y1="50" x2="68" y2="55" stroke="#FB923C" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="46" y1="55" x2="48" y2="76" stroke="#FB923C" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="48" y1="76" x2="68" y2="82" stroke="#FB923C" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="68" y1="82" x2="89" y2="74" stroke="#FB923C" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="89" y1="74" x2="94" y2="50" stroke="#FB923C" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="68" y1="55" x2="48" y2="76" stroke="#FB923C" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="68" y1="55" x2="68" y2="82" stroke="#FB923C" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="68" y1="55" x2="89" y2="74" stroke="#FB923C" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="46" y1="55" x2="89" y2="74" stroke="#FB923C" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="94" y1="50" x2="48" y2="76" stroke="#FB923C" strokeWidth="1.6" strokeLinecap="round" />

          {/* Vertex Node Points */}
          {[
            [70, 36],
            [46, 55],
            [94, 50],
            [68, 55],
            [48, 76],
            [89, 74],
            [68, 82]
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.8" stroke="#FB923C" strokeWidth="2.2" fill="#111827" />
          ))}
        </g>
      )
    },
    {
      step: '03',
      name: 'Analyze',
      color: '#F87171',
      titleColorClass: 'text-[#F87171]',
      description: 'Cognitive Analytics &\nPredictive Algorithmic\nIntelligence',
      metric: 'Cognitive & Predictive AI',
      renderIcon: () => (
        <g>
          {/* Neural Brain Hemispheres */}
          <path
            d="M 68 40 C 58 39, 46 46, 47 57 C 42 62, 43 71, 51 76 C 56 81, 64 80, 68 78"
            stroke="#F87171"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M 72 40 C 82 39, 94 46, 93 57 C 98 62, 97 71, 89 76 C 84 81, 76 80, 72 78"
            stroke="#F87171"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Center Dividing Line */}
          <line x1="70" y1="41" x2="70" y2="77" stroke="#F87171" strokeWidth="2" strokeLinecap="round" strokeDasharray="3.5 2.5" />

          {/* Left Neural Sulci & Circuit Endpoints */}
          <path d="M 52 50 C 57 52, 61 48, 65 49" stroke="#F87171" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <circle cx="52" cy="50" r="2" fill="#F87171" />
          <path d="M 49 61 C 56 59, 58 65, 65 64" stroke="#F87171" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <circle cx="49" cy="61" r="2" fill="#F87171" />
          <path d="M 53 72 C 58 70, 61 73, 65 72" stroke="#F87171" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <circle cx="53" cy="72" r="2" fill="#F87171" />

          {/* Right Neural Sulci & Circuit Endpoints */}
          <path d="M 88 50 C 83 52, 79 48, 75 49" stroke="#F87171" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <circle cx="88" cy="50" r="2" fill="#F87171" />
          <path d="M 91 61 C 84 59, 82 65, 75 64" stroke="#F87171" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <circle cx="91" cy="61" r="2" fill="#F87171" />
          <path d="M 87 72 C 82 70, 79 73, 75 72" stroke="#F87171" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <circle cx="87" cy="72" r="2" fill="#F87171" />
        </g>
      )
    },
    {
      step: '04',
      name: 'Automate',
      color: '#E879F9',
      titleColorClass: 'text-[#E879F9]',
      description: 'Autonomous Orchestration\n& Zero-Touch Workflow\nExecution',
      metric: 'Agentic RPA Execution',
      renderIcon: () => (
        <g>
          {/* Base Platform */}
          <line x1="44" y1="82" x2="96" y2="82" stroke="#E879F9" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M 54 82 L 57 75 L 67 75 L 70 82 Z" stroke="#E879F9" strokeWidth="2.5" strokeLinejoin="round" fill="none" />

          {/* Robotic Arm Segments */}
          <line x1="62" y1="75" x2="77" y2="57" stroke="#E879F9" strokeWidth="2.8" strokeLinecap="round" />
          <circle cx="77" cy="57" r="4" stroke="#E879F9" strokeWidth="2.5" fill="#111827" />
          <line x1="77" y1="57" x2="86" y2="62" stroke="#E879F9" strokeWidth="2.8" strokeLinecap="round" />

          {/* Gripper / End Effector */}
          <path d="M 86 60 C 90 56, 95 56, 97 58" stroke="#E879F9" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M 86 64 C 90 68, 95 68, 97 66" stroke="#E879F9" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Telemetry / Signal Wave Arcs */}
          <path d="M 67 47 A 9 9 0 0 1 79 47" stroke="#E879F9" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M 62 41 A 16 16 0 0 1 84 41" stroke="#E879F9" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        </g>
      )
    },
    {
      step: '05',
      name: 'Optimize',
      color: '#C084FC',
      titleColorClass: 'text-[#C084FC]',
      description: 'Continuous Tuning &\nClosed-Loop Performance\nOptimization',
      metric: 'Closed-Loop Agility',
      renderIcon: () => (
        <g>
          {/* Central Gear / Cog Body */}
          <circle cx="70" cy="60" r="5" stroke="#C084FC" strokeWidth="2.5" fill="none" />
          <path
            d="M 66 48 L 74 48 L 75 52 L 80 53 L 83 49 L 88 54 L 85 58 L 88 61 L 91 63 L 91 69 L 88 70 L 87 74 L 89 77 L 84 81 L 81 78 L 77 81 L 74 84 L 66 84 L 65 80 L 60 79 L 57 83 L 52 78 L 55 75 L 52 71 L 49 70 L 49 64 L 52 63 L 54 59 L 51 56 L 56 52 L 60 55 L 64 52 Z"
            stroke="#C084FC"
            strokeWidth="2.2"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Continuous Cycle Dual Loop Arrows */}
          {/* Top-Right Arrow (Clockwise) */}
          <path d="M 50 58 A 21 21 0 0 1 89 53" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M 84 48 L 89 53 L 85 58" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

          {/* Bottom-Left Arrow (Clockwise) */}
          <path d="M 90 63 A 21 21 0 0 1 51 68" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M 56 73 L 51 68 L 55 63" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      )
    }
  ];

  return (
    <section
      id="data-to-intelligence"
      className="relative py-24 sm:py-28 bg-[#0B0F19] text-white overflow-hidden select-none border-y border-slate-800/80"
    >
      {/* Background High-Tech Atmospheric Depth & Cyber Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[500px] bg-gradient-to-r from-amber-500/10 via-sky-500/10 to-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Pill Badge */}
            <div className="mb-3.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-[#38BDF8] shadow-sm backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-[#38BDF8]" />
                END-TO-END OPERATIONAL LIFECYCLE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight">
              From <span className="bg-gradient-to-r from-[#38BDF8] via-[#00A3E0] to-[#0070C0] bg-clip-text text-transparent">Data to Intelligence</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto font-normal">
              Connecting global operational data to autonomous decision execution through a proven 5-stage transformation pipeline.
            </p>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* 5-STAGE PIPELINE NODES WITH AMBIENT FLOW RAIL                             */}
        {/* ========================================================================= */}
        <div className="relative">
          {/* Animated Connecting Pulse Rail (Desktop) */}
          <div className="hidden lg:block absolute top-[152px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-amber-400/30 via-red-400/30 to-purple-400/30 pointer-events-none z-0">
            {/* Traveling Laser Pulse Data Packet */}
            <motion.div
              animate={{ x: ['0%', '900%'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
              className="w-20 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_12px_#38BDF8]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10 items-stretch">
            {stages.map((stage, idx) => (
              <motion.div
                key={stage.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="relative group rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-slate-800/80 hover:border-slate-700/90 backdrop-blur-xl p-5 sm:p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(0,0,0,0.6)] cursor-default overflow-hidden"
              >
                {/* Top Radiant Highlight Line */}
                <div
                  className="absolute top-0 inset-x-4 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to right, transparent, ${stage.color}, transparent)` }}
                />

                {/* Card Header with Phase Number & Status Dot */}
                <div className="flex items-center justify-between w-full mb-3 px-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-slate-400 group-hover:text-white transition-colors">
                    PHASE {stage.step}
                  </span>
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: stage.color, boxShadow: `0 0 10px ${stage.color}` }}
                  />
                </div>

                {/* Ambient Radial Core Behind SVG */}
                <div
                  className="absolute top-20 w-28 h-28 rounded-full blur-2xl opacity-15 group-hover:opacity-35 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: stage.color }}
                />

                {/* Circular Icon with Outer White Arc & Downward Arrow */}
                <div className="w-32 h-36 sm:w-36 sm:h-40 flex items-center justify-center relative mb-3 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-full h-full" viewBox="0 0 140 160" fill="none">
                    <defs>
                      <filter id={`glow-${stage.step}`} x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="0" stdDeviation="2.2" floodColor={stage.color} floodOpacity="0.4" />
                      </filter>
                    </defs>

                    {/* Outer White Arc with Downward Arrow */}
                    <path
                      d="M 33.2 96.8 A 52 52 0 1 1 70 112 L 70 144 M 62.5 135.5 L 70 144 L 77.5 135.5"
                      stroke="#FFFFFF"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      className="opacity-90 group-hover:opacity-100 transition-opacity"
                    />

                    {/* Inner Colored Circle with Glow Filter */}
                    <circle
                      cx="70"
                      cy="60"
                      r="42"
                      stroke={stage.color}
                      strokeWidth="2.8"
                      fill="none"
                      filter={`url(#glow-${stage.step})`}
                    />

                    {/* Icon Specific Graphic */}
                    {stage.renderIcon()}
                  </svg>
                </div>

                {/* Stage Title */}
                <h3 className={`text-xl sm:text-2xl font-bold ${stage.titleColorClass} mb-2 tracking-tight`}>
                  {stage.name}
                </h3>

                {/* Stage Description */}
                <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed font-normal whitespace-pre-line max-w-[200px] flex-grow">
                  {stage.description}
                </p>

                {/* Capability Metric Pill at Card Footer */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 w-full flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                  <Activity className="h-3 w-3 flex-shrink-0" style={{ color: stage.color }} />
                  <span className="truncate">{stage.metric}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LIVE ENTERPRISE PIPELINE TELEMETRY BAR                                    */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 max-w-4xl mx-auto rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md px-6 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs shadow-lg"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-mono text-slate-300 uppercase tracking-wider font-semibold text-[11px]">
              Continuous Closed-Loop Orchestration
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px] text-slate-400 font-mono">
            <div>
              <span className="text-slate-500">Latency:</span>{' '}
              <span className="text-sky-400 font-semibold">&lt; 120ms</span>
            </div>
            <div>
              <span className="text-slate-500">Protocol:</span>{' '}
              <span className="text-emerald-400 font-semibold">OPC-UA / SAP BTP</span>
            </div>
            <div>
              <span className="text-slate-500">Execution:</span>{' '}
              <span className="text-purple-400 font-semibold">100% Autonomous</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataToIntelligenceSection;
