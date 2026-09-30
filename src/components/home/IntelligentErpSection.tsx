import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Boxes, 
  Users2, 
  Wrench, 
  BarChart3, 
  CheckCircle2, 
  Activity, 
  Cpu, 
  Wifi, 
  Zap, 
  TrendingUp,
  Server,
  Layers,
  Sparkles,
  Compass,
  Radio,
  Sliders,
  ShieldCheck,
  Leaf
} from 'lucide-react';

interface IntelligentErpSectionProps {
  onOpenContact?: (service?: string) => void;
}

export const IntelligentErpSection: React.FC<IntelligentErpSectionProps> = () => {
  const [hoveredBox, setHoveredBox] = useState<string | null>(null);

  const modules = [
    {
      id: 'facility',
      name: 'Facility Management',
      subtitle: 'Smart Building & Space Optimization',
      tag: 'SAP RE-FX SYNC',
      tagColor: 'bg-sky-50 border-sky-300 text-[#0070C0]',
      icon: <Building className="h-5 w-5" />,
      iconColor: 'bg-sky-50 border-sky-200 text-[#0070C0] group-hover:bg-[#0070C0] group-hover:text-white',
      accentGradient: 'from-[#00A3E0] to-[#0070C0]',
      borderColor: 'hover:border-[#0070C0]',
      description: 'Centralized control for multi-site enterprise real estate, real-time HVAC telemetry, and spatial optimization.',
      points: [
        'Automated spatial allocation & tenant occupancy tracking',
        'Direct integration with SAP Real Estate Management'
      ],
      statusLabel: 'Operating Mode',
      statusValue: 'Autonomous Eco-Balancing',
      statusColor: 'text-[#0070C0]',
      widgetType: 'facility'
    },
    {
      id: 'tracking',
      name: 'Asset Tracking',
      subtitle: 'End-to-End IoT & Sensory Visibility',
      tag: 'RFID & BLE MESH',
      tagColor: 'bg-blue-50 border-blue-300 text-[#0070C0]',
      icon: <Boxes className="h-5 w-5" />,
      iconColor: 'bg-sky-50 border-sky-200 text-[#00A3E0] group-hover:bg-[#00A3E0] group-hover:text-white',
      accentGradient: 'from-sky-400 via-blue-500 to-indigo-600',
      borderColor: 'hover:border-[#00A3E0]',
      description: 'Continuous RFID and sensor-based asset localization across warehouses, factories, and global logistics routes.',
      points: [
        'Continuous indoor & yard geo-positioning telemetry',
        'Real-time asset movement alarms & perimeter geofencing'
      ],
      statusLabel: 'Sensory Accuracy',
      statusValue: 'High-Precision Mesh',
      statusColor: 'text-[#00A3E0]',
      widgetType: 'tracking'
    },
    {
      id: 'maintenance',
      name: 'Predictive Maintenance',
      subtitle: 'Condition-Based Health & Telemetry',
      tag: 'ISO 55001 READY',
      tagColor: 'bg-emerald-50 border-emerald-300 text-emerald-700',
      icon: <Wrench className="h-5 w-5" />,
      iconColor: 'bg-emerald-50 border-emerald-200 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
      accentGradient: 'from-emerald-400 to-teal-500',
      borderColor: 'hover:border-emerald-500',
      description: 'Shift from reactive firefighting to predictive maintenance using vibration analysis and automated SAP PM orders.',
      points: [
        'Predictive failure alerts generated well in advance',
        'Automated spare parts replenishment via SAP Material Management'
      ],
      statusLabel: 'Reliability Status',
      statusValue: 'Autonomous Prevention Active',
      statusColor: 'text-emerald-600',
      widgetType: 'maintenance'
    },
    {
      id: 'workforce',
      name: 'Workforce Management',
      subtitle: 'Intelligent Field Dispatch & Matching',
      tag: 'FIORI OFFLINE-FIRST',
      tagColor: 'bg-purple-50 border-purple-300 text-purple-700',
      icon: <Users2 className="h-5 w-5" />,
      iconColor: 'bg-purple-50 border-purple-200 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      accentGradient: 'from-purple-500 to-indigo-600',
      borderColor: 'hover:border-purple-500',
      description: 'AI-assisted technician assignment, dynamic SLA route dispatching, and mobile digital work-order sign-offs in real time.',
      points: [
        'Algorithmic technician dispatch based on live proximity',
        'Mobile offline-first Fiori interface for field operations'
      ],
      statusLabel: 'Dispatch Protocol',
      statusValue: 'Automated Proximity Routing',
      statusColor: 'text-purple-600',
      widgetType: 'workforce'
    },
    {
      id: 'analytics',
      name: 'Executive Analytics',
      subtitle: 'Decision Cockpits & CapEx Models',
      tag: 'SAP DATASPHERE',
      tagColor: 'bg-sky-50 border-sky-300 text-[#0070C0]',
      icon: <BarChart3 className="h-5 w-5" />,
      iconColor: 'bg-sky-50 border-sky-200 text-[#0070C0] group-hover:bg-[#0070C0] group-hover:text-white',
      accentGradient: 'from-cyan-400 to-[#0070C0]',
      borderColor: 'hover:border-[#0070C0]',
      description: 'Unified cross-facility dashboards with real-time scorecards, depreciation tracking, and predictive CapEx planning.',
      points: [
        'Executive decision cockpits powered by SAP Datasphere',
        'Predictive CapEx vs OpEx lifecycle optimization models'
      ],
      statusLabel: 'Intelligence Hub',
      statusValue: 'Cross-Facility Live Telemetry',
      statusColor: 'text-[#0070C0]',
      widgetType: 'analytics'
    },
    {
      id: 'sustainability',
      name: 'Energy & ESG Sustainability',
      subtitle: 'Carbon Footprint & Net-Zero Operations',
      tag: 'ESG NET-ZERO READY',
      tagColor: 'bg-teal-50 border-teal-300 text-teal-700',
      icon: <Leaf className="h-5 w-5" />,
      iconColor: 'bg-teal-50 border-teal-200 text-teal-600 group-hover:bg-teal-600 group-hover:text-white',
      accentGradient: 'from-teal-400 via-emerald-500 to-cyan-500',
      borderColor: 'hover:border-teal-500',
      description: 'Automated carbon emission accounting, intelligent grid peak-load shaving, and continuous environmental compliance.',
      points: [
        'Carbon tracking linked to SAP Sustainability Control Tower',
        'Dynamic equipment load shedding during peak grid demand'
      ],
      statusLabel: 'Net-Zero Standard',
      statusValue: 'Continuous Green Compliance',
      statusColor: 'text-teal-600',
      widgetType: 'sustainability'
    }
  ];

  return (
    <section 
      id="intelligent-erp" 
      className="relative py-20 sm:py-28 bg-slate-50/70 text-slate-900 overflow-hidden select-none border-b border-slate-200/80"
    >
      {/* Ambient Cyber Radiance & Geometric Dot Grid */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-sky-100/60 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0070C008_1px,transparent_1px),linear-gradient(to_bottom,#0070C008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER: High-Impact Flagship Platform Header                   */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0070C0] mb-3.5 shadow-2xs">
              <Cpu className="h-3.5 w-3.5 text-[#00A3E0]" />
              Flagship Enterprise Platform
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1931] tracking-tight leading-tight">
              Intelligent ERP for <span className="bg-gradient-to-r from-[#00A3E0] to-[#0070C0] bg-clip-text text-transparent">Facilities &amp; Smart Asset Operations</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Connecting physical spaces, industrial machinery, and field workforces directly to the core SAP digital backbone for autonomous operational excellence.
            </p>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* 2. COMPACT, SHORTER IDENTICAL-SIZE BENTO BOXES (Visible Borders, No Buttons) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {modules.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onMouseEnter={() => setHoveredBox(item.id)}
              onMouseLeave={() => setHoveredBox(null)}
              className={`rounded-2xl bg-white border-2 border-slate-300 ${item.borderColor} p-4 sm:p-5 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group`}
            >
              {/* Animated Top Accent Gradient Line with continuous gentle shimmer */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.accentGradient} opacity-90 group-hover:opacity-100 transition-opacity`} />

              <div>
                {/* Header: Icon, Titles & Visible Pill */}
                <div className="flex items-start justify-between gap-2.5 mb-2.5">
                  <div className={`h-10 w-10 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:scale-105 ${item.iconColor}`}>
                    {item.icon}
                  </div>
                  <span className={`text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border shadow-2xs ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-extrabold text-[#0A1931] group-hover:text-[#0070C0] transition-colors leading-snug">
                  {item.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 mb-2">
                  {item.subtitle}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">
                  {item.description}
                </p>

                {/* COMPACT ANIMATED VISUAL WIDGET (Shorter 105px Height, Rich Live Animations) */}
                <div className="rounded-xl bg-slate-900 text-white p-2.5 mb-3 border border-slate-700/80 relative overflow-hidden shadow-inner h-[105px] flex flex-col justify-between">
                  <div className="absolute inset-0 bg-[radial-gradient(#00A3E016_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

                  {/* Widget 1: Facility Management (Spatial Floorplan with Scanning Beam) */}
                  {item.widgetType === 'facility' && (
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[10px] font-mono border-b border-white/10 pb-1">
                        <span className="text-cyan-400 flex items-center gap-1 font-bold">
                          <Compass className="h-3 w-3 text-cyan-400" />
                          Spatial Floorplan Telemetry
                        </span>
                        <span className="text-emerald-400 font-semibold text-[9px] flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live Sync
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 text-center text-[9px] font-mono my-0.5">
                        <div className="p-1 rounded bg-slate-800/90 border border-slate-700">
                          <div className="text-slate-400">HQ Zone</div>
                          <div className="text-emerald-400 font-bold">Occupied</div>
                        </div>
                        <div className="p-1 rounded bg-slate-800/90 border border-slate-700">
                          <div className="text-slate-400">R&amp;D Lab</div>
                          <div className="text-cyan-400 font-bold">Optimal</div>
                        </div>
                        <div className="p-1 rounded bg-slate-800/90 border border-slate-700">
                          <div className="text-slate-400">Plant Unit</div>
                          <div className="text-sky-300 font-bold">Balanced</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[9px] font-mono text-slate-300 pt-0.5 border-t border-white/10">
                        <span>Grid State:</span>
                        <span className="text-cyan-300 font-bold">Dynamic Load Balanced</span>
                      </div>
                    </div>
                  )}

                  {/* Widget 2: Asset Tracking (Live Rotating Radar Sweep & Blips) */}
                  {item.widgetType === 'tracking' && (
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[10px] font-mono border-b border-white/10 pb-1">
                        <span className="text-sky-300 flex items-center gap-1 font-bold">
                          <Radio className="h-3 w-3 text-[#00A3E0] animate-pulse" />
                          Continuous Sensory Radar
                        </span>
                        <span className="text-emerald-400 font-semibold text-[9px]">Mesh Active</span>
                      </div>
                      <div className="flex items-center gap-2.5 my-0.5">
                        <div className="relative h-11 w-11 rounded-full border border-sky-500/40 flex items-center justify-center bg-slate-950 overflow-hidden flex-shrink-0">
                          <div className="absolute inset-1 rounded-full border border-sky-500/20" />
                          <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 origin-center pointer-events-none"
                          >
                            <div className="w-1/2 h-1/2 bg-gradient-to-br from-cyan-400/50 via-sky-500/10 to-transparent rounded-tl-full origin-bottom-right" />
                          </motion.div>
                          <span className="absolute top-2 left-2.5 h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                          <span className="absolute top-2 left-2.5 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          <span className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        </div>
                        <div className="flex-1 space-y-0.5 text-[9px] font-mono">
                          <div className="p-0.5 px-1.5 rounded bg-slate-800/90 border border-slate-700 flex justify-between">
                            <span className="text-slate-300">Machinery Fleet</span>
                            <span className="text-emerald-400 font-bold">Yard Zone</span>
                          </div>
                          <div className="p-0.5 px-1.5 rounded bg-slate-800/90 border border-slate-700 flex justify-between">
                            <span className="text-slate-300">Geofence Alarm</span>
                            <span className="text-cyan-400 font-bold">Secure</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[9px] font-mono text-slate-300 pt-0.5 border-t border-white/10">
                        <span>Accuracy:</span>
                        <span className="text-emerald-400 font-bold">High Precision Mesh</span>
                      </div>
                    </div>
                  )}

                  {/* Widget 3: Predictive Maintenance (Continuous Dual Vibration Wave) */}
                  {item.widgetType === 'maintenance' && (
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400 border-b border-white/10 pb-1">
                        <span className="flex items-center gap-1 font-bold">
                          <Activity className="h-3 w-3 text-emerald-400 animate-pulse" />
                          Vibration Frequency Wave
                        </span>
                        <span className="text-white text-[9px]">Pattern: Nominal</span>
                      </div>
                      <div className="h-8 w-full flex items-center justify-center relative overflow-hidden bg-slate-950/80 rounded my-0.5">
                        <svg className="w-full h-7" viewBox="0 0 200 40" preserveAspectRatio="none">
                          <motion.path
                            d="M0,20 Q25,5 50,20 T100,20 T150,20 T200,20"
                            fill="none"
                            stroke="#10B981"
                            strokeWidth="2.5"
                            initial={{ pathOffset: 0 }}
                            animate={{ pathOffset: [0, 1] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                          />
                          <motion.path
                            d="M0,20 Q25,35 50,20 T100,20 T150,20 T200,20"
                            fill="none"
                            stroke="#06B6D4"
                            strokeWidth="1.5"
                            strokeOpacity="0.7"
                            initial={{ pathOffset: 0 }}
                            animate={{ pathOffset: [1, 0] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
                          />
                        </svg>
                      </div>
                      <div className="flex items-center justify-between text-[9px] font-mono text-slate-300 pt-0.5 border-t border-white/10">
                        <span>Thermal State: <strong className="text-white">Optimal</strong></span>
                        <span className="text-emerald-400 font-bold">Auto PM Ready</span>
                      </div>
                    </div>
                  )}

                  {/* Widget 4: Workforce Management (AI Proximity Dispatch Node) */}
                  {item.widgetType === 'workforce' && (
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[10px] font-mono text-purple-300 border-b border-white/10 pb-1">
                        <span className="flex items-center gap-1 font-bold">
                          <Zap className="h-3 w-3 text-purple-400" />
                          AI Proximity Dispatch Node
                        </span>
                        <span className="text-cyan-400 text-[9px]">Instant Match</span>
                      </div>
                      <div className="space-y-0.5 my-0.5 text-[9px] font-mono">
                        <div className="p-0.5 px-1.5 rounded bg-slate-800/90 border border-slate-700 flex justify-between">
                          <span className="text-slate-300">Specialized Work Order</span>
                          <span className="text-purple-300 font-bold">Certified Tech</span>
                        </div>
                        <div className="p-0.5 px-1.5 rounded bg-purple-950/60 border border-purple-500/40 flex justify-between">
                          <span className="text-purple-200">Nearest Mobile Node</span>
                          <span className="text-emerald-400 font-bold">En Route</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[9px] font-mono text-slate-300 pt-0.5 border-t border-white/10">
                        <span>Digital Log: <strong className="text-white">Mobile Fiori</strong></span>
                        <span className="text-purple-300 font-bold">Auto-Logged</span>
                      </div>
                    </div>
                  )}

                  {/* Widget 5: Executive Analytics (Equalizer Bars & Rotating Cockpit) */}
                  {item.widgetType === 'analytics' && (
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[10px] font-mono text-cyan-300 border-b border-white/10 pb-1">
                        <span className="flex items-center gap-1 font-bold">
                          <TrendingUp className="h-3 w-3 text-cyan-400" />
                          360° Cockpit Stream
                        </span>
                        <span className="text-emerald-400 text-[9px]">Real-Time</span>
                      </div>
                      <div className="flex items-center justify-between gap-2.5 my-0.5">
                        <div className="relative h-9 w-9 rounded-full flex items-center justify-center bg-slate-950 border border-slate-800 flex-shrink-0">
                          <svg className="h-8 w-8 -rotate-90">
                            <circle cx="16" cy="16" r="13" stroke="#334155" strokeWidth="2" fill="none" />
                            <motion.circle
                              cx="16" cy="16" r="13"
                              stroke="#00A3E0" strokeWidth="2" fill="none"
                              strokeDasharray="81.6"
                              initial={{ strokeDashoffset: 81.6 }}
                              animate={{ strokeDashoffset: [81.6, 18, 12] }}
                              transition={{ duration: 2, ease: 'easeOut' }}
                            />
                          </svg>
                          <Activity className="absolute h-3.5 w-3.5 text-cyan-400 animate-pulse" />
                        </div>
                        <div className="flex-1 flex items-end justify-between gap-1 h-7 bg-slate-950/70 p-1 rounded border border-white/5">
                          {[65, 88, 72, 95, 80, 92].map((val, bIdx) => (
                            <motion.div
                              key={bIdx}
                              initial={{ height: '30%' }}
                              animate={{ height: [`${val * 0.4}%`, `${val}%`, `${val * 0.7}%`] }}
                              transition={{ duration: 1.6 + bIdx * 0.2, repeat: Infinity, repeatType: 'reverse' }}
                              className="w-1.5 rounded-xs bg-gradient-to-t from-[#0070C0] to-[#00F0FF]"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[9px] font-mono text-slate-300 pt-0.5 border-t border-white/10">
                        <span>Datasphere: <strong className="text-emerald-400">Synced</strong></span>
                        <span className="text-sky-300 font-bold">CapEx Model OK</span>
                      </div>
                    </div>
                  )}

                  {/* Widget 6: Energy & Sustainability (Net-Zero Eco Controller) */}
                  {item.widgetType === 'sustainability' && (
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[10px] font-mono text-teal-300 border-b border-white/10 pb-1">
                        <span className="flex items-center gap-1 font-bold">
                          <Leaf className="h-3 w-3 text-teal-400" />
                          Net-Zero Eco Controller
                        </span>
                        <span className="text-emerald-400 text-[9px]">Eco-Grid Active</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 text-center text-[9px] font-mono my-0.5">
                        <div className="p-1 rounded bg-slate-800/90 border border-slate-700">
                          <div className="text-slate-400">Carbon Track</div>
                          <div className="text-teal-300 font-bold">Audited</div>
                        </div>
                        <div className="p-1 rounded bg-slate-800/90 border border-slate-700">
                          <div className="text-slate-400">Peak Shave</div>
                          <div className="text-emerald-400 font-bold">Automated</div>
                        </div>
                        <div className="p-1 rounded bg-teal-950/60 border border-teal-500/40">
                          <div className="text-teal-300">ESG Status</div>
                          <div className="text-cyan-300 font-bold">Compliant</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[9px] font-mono text-slate-300 pt-0.5 border-t border-white/10">
                        <span>Control Tower: <strong className="text-emerald-400">SAP Synced</strong></span>
                        <span className="text-teal-300 font-bold">Green Certified</span>
                      </div>
                    </div>
                  )}

                </div>

                {/* Bullet Points (Compact, 2 concise points per card) */}
                <div className="space-y-1.5 mb-2.5 text-xs text-slate-700">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#00A3E0] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug text-[11px] sm:text-xs">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Box Footer: Clean Status Badge & Indicator (NO CLICKABLE BUTTON, NO ARROW) */}
              <div className="pt-2.5 border-t border-slate-200/90 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 block">
                    {item.statusLabel}
                  </span>
                  <span className={`text-[11px] sm:text-xs font-extrabold ${item.statusColor}`}>
                    {item.statusValue}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-[10px] font-mono text-slate-600 font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Online</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IntelligentErpSection;
