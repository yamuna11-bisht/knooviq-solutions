import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Activity,
  Zap,
  Radio,
  Layers,
  Network,
  Bot,
  Sliders,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Gauge,
  Cpu,
  X
} from 'lucide-react';

interface PipelineStage {
  step: string;
  name: string;
  tagline: string;
  color: string;
  glowColor: string;
  titleColorClass: string;
  description: string;
  narrative: string;
  metric: string;
  protocol: string;
  throughput: string;
  latency: string;
  capabilities: string[];
  renderIcon: () => React.ReactNode;
  image: string;
}

export const DataToIntelligenceSection: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const stages: PipelineStage[] = [
    {
      step: '01',
      name: 'Connect',
      tagline: 'Edge Telemetry & Distributed Sensing',
      color: '#FACC15',
      glowColor: 'rgba(250, 204, 21, 0.35)',
      titleColorClass: 'text-[#FACC15]',
      description: 'Global Edge Telemetry & Distributed Sensory Network Nodes',
      narrative: 'Deploys sovereign edge gateways and high-frequency telemetry listeners directly at shopfloor PLCs, IoT devices, and global supply hubs, buffering high-velocity sensor data without core transactional latency.',
      metric: 'Edge IoT & Telemetry',
      protocol: 'MQTT 5.0 • OPC-UA • Industrial IoT',
      throughput: '2.4M Events / Sec',
      latency: '< 8ms Edge Buffer',
      capabilities: ['Edge Gateway Ingestion', 'SCADA Hardware Mesh', 'Zero-Loss Local Buffers', 'Sovereign Device Security'],
      image: '/images/data-to-intelligence/global_edge_telemetry_network_nodes.jpg?v=2',
      renderIcon: () => (
        <g>
          {/* Central Hub Node */}
          <circle cx="70" cy="60" r="6.5" stroke="#FACC15" strokeWidth="2.8" fill="none" />
          {/* 5 Spoke Connections & Peripheral Nodes */}
          <line x1="65" y1="55" x2="49" y2="46" stroke="#FACC15" strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="45" cy="43" r="4.2" stroke="#FACC15" strokeWidth="2.6" fill="none" />
          <line x1="75" y1="55" x2="88" y2="44" stroke="#FACC15" strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="92" cy="41" r="4.2" stroke="#FACC15" strokeWidth="2.6" fill="none" />
          <line x1="76.5" y1="61" x2="89.5" y2="64" stroke="#FACC15" strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="94" cy="65" r="4.2" stroke="#FACC15" strokeWidth="2.6" fill="none" />
          <line x1="65" y1="65" x2="51" y2="74" stroke="#FACC15" strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="47" cy="78" r="4.2" stroke="#FACC15" strokeWidth="2.6" fill="none" />
          <line x1="73" y1="66" x2="78" y2="76" stroke="#FACC15" strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="80" cy="80" r="4.2" stroke="#FACC15" strokeWidth="2.6" fill="none" />
        </g>
      )
    },
    {
      step: '02',
      name: 'Collect',
      tagline: 'Unified Fabric & Real-Time Streams',
      color: '#FB923C',
      glowColor: 'rgba(251, 146, 60, 0.35)',
      titleColorClass: 'text-[#FB923C]',
      description: 'Unified Data Fabrics & Real-Time Streaming Integration',
      narrative: 'Harmonizes heterogeneous ERP tables, enterprise CRM events, third-party APIs, and streaming message queues into a unified semantic business data fabric with zero-copy virtualization.',
      metric: 'Unified Data Fabric',
      protocol: 'Apache Kafka • SAP Datasphere • Delta Lake',
      throughput: '14.2 GB / Sec Pipeline',
      latency: '< 45ms Real-Time Stream',
      capabilities: ['Zero-Copy Virtualization', 'CDC Event Streaming', 'Cross-Cloud Schema Governance', 'Unified Business Semantics'],
      image: '/images/data-to-intelligence/unified_data_fabric_realtime_streaming.jpg?v=2',
      renderIcon: () => (
        <g>
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
      tagline: 'Cognitive Reasoning & Machine Foresight',
      color: '#F87171',
      glowColor: 'rgba(248, 113, 113, 0.35)',
      titleColorClass: 'text-[#F87171]',
      description: 'Cognitive Analytics & Predictive Algorithmic Intelligence',
      narrative: 'Executes in-memory algorithmic reasoning, multivariate demand sensing, and enterprise LLM vector synthesis to identify variances, operational anomalies, and opportunities before they impact the bottom line.',
      metric: 'Cognitive & Predictive AI',
      protocol: 'SAP HANA PAL • PyTorch • Enterprise Vector RAG',
      throughput: '99.4% Forecast Precision',
      latency: '< 120ms In-Memory Inference',
      capabilities: ['In-Memory Machine Learning', 'Predictive Demand Sensing', 'Multivariate Anomaly Shield', 'Enterprise RAG Intelligence'],
      image: '/images/data-to-intelligence/cognitive_analytics_predictive_intelligence.jpg?v=2',
      renderIcon: () => (
        <g>
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
          <line x1="70" y1="41" x2="70" y2="77" stroke="#F87171" strokeWidth="2" strokeLinecap="round" strokeDasharray="3.5 2.5" />
          <path d="M 52 50 C 57 52, 61 48, 65 49" stroke="#F87171" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <circle cx="52" cy="50" r="2" fill="#F87171" />
          <path d="M 49 61 C 56 59, 58 65, 65 64" stroke="#F87171" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <circle cx="49" cy="61" r="2" fill="#F87171" />
          <path d="M 53 72 C 58 70, 61 73, 65 72" stroke="#F87171" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <circle cx="53" cy="72" r="2" fill="#F87171" />
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
      tagline: 'Autonomous Swarms & Zero-Touch Execution',
      color: '#E879F9',
      glowColor: 'rgba(232, 121, 249, 0.35)',
      titleColorClass: 'text-[#E879F9]',
      description: 'Autonomous Orchestration & Zero-Touch Workflow Execution',
      narrative: 'Orchestrates multi-agent AI swarms and SAP BTP event listeners to trigger automated core ERP transactions, match purchase orders, resolve logistics exceptions, and eliminate human latency.',
      metric: 'Agentic RPA Execution',
      protocol: 'Agentic Swarms • SAP Build • RPA Engine',
      throughput: '100% Deterministic Sync',
      latency: 'Zero-Touch Cutover',
      capabilities: ['Self-Healing Process Swarms', 'SOX Compliance Sentinel', 'Autonomous PO Matching', 'Dynamic Exception Rerouting'],
      image: '/images/data-to-intelligence/autonomous_orchestration_zerotouch_execution.jpg?v=2',
      renderIcon: () => (
        <g>
          <line x1="44" y1="82" x2="96" y2="82" stroke="#E879F9" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M 54 82 L 57 75 L 67 75 L 70 82 Z" stroke="#E879F9" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
          <line x1="62" y1="75" x2="77" y2="57" stroke="#E879F9" strokeWidth="2.8" strokeLinecap="round" />
          <circle cx="77" cy="57" r="4" stroke="#E879F9" strokeWidth="2.5" fill="#111827" />
          <line x1="77" y1="57" x2="86" y2="62" stroke="#E879F9" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M 86 60 C 90 56, 95 56, 97 58" stroke="#E879F9" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M 86 64 C 90 68, 95 68, 97 66" stroke="#E879F9" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M 67 47 A 9 9 0 0 1 79 47" stroke="#E879F9" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M 62 41 A 16 16 0 0 1 84 41" stroke="#E879F9" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        </g>
      )
    },
    {
      step: '05',
      name: 'Optimize',
      tagline: 'Continuous Kaizen & Adaptive Tuning',
      color: '#C084FC',
      glowColor: 'rgba(192, 132, 252, 0.35)',
      titleColorClass: 'text-[#C084FC]',
      description: 'Continuous Tuning & Closed-Loop Performance Optimization',
      narrative: 'Feeds live operational outcomes back into the digital twin, continuously refining algorithms, adjusting inventory safety stocks, and fine-tuning business logic in a continuous, self-optimizing feedback loop.',
      metric: 'Closed-Loop Agility',
      protocol: 'Reinforcement Learning • Process Mining • Digital Twin',
      throughput: 'Continuous Kaizen Loop',
      latency: 'Adaptive Real-Time Control',
      capabilities: ['Process Conformance Mining', 'Digital Twin Simulation', 'Root-Cause Auto-Isolation', 'Closed-Loop Policy Tuning'],
      image: '/images/data-to-intelligence/continuous_tuning_closedloop_optimization.jpg?v=2',
      renderIcon: () => (
        <g>
          <circle cx="70" cy="60" r="5" stroke="#C084FC" strokeWidth="2.5" fill="none" />
          <path
            d="M 66 48 L 74 48 L 75 52 L 80 53 L 83 49 L 88 54 L 85 58 L 88 61 L 91 63 L 91 69 L 88 70 L 87 74 L 89 77 L 84 81 L 81 78 L 77 81 L 74 84 L 66 84 L 65 80 L 60 79 L 57 83 L 52 78 L 55 75 L 52 71 L 49 70 L 49 64 L 52 63 L 54 59 L 51 56 L 56 52 L 60 55 L 64 52 Z"
            stroke="#C084FC"
            strokeWidth="2.2"
            strokeLinejoin="round"
            fill="none"
          />
          <path d="M 50 58 A 21 21 0 0 1 89 53" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M 84 48 L 89 53 L 85 58" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M 90 63 A 21 21 0 0 1 51 68" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M 56 73 L 51 68 L 55 63" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      )
    }
  ];

  // Auto-cycle through the 5 stages every 5 seconds unless hovered/interacted
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStageIndex(prev => (prev + 1) % stages.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, stages.length]);

  const currentStage = stages[activeStageIndex];

  // Mathematical undulating harmonic wave path linking all 5 nodal points
  const primaryWavePath =
    'M 0 44 C 40 78, 80 78, 120 44 C 200 10, 280 10, 360 44 C 440 78, 520 78, 600 44 C 680 10, 760 10, 840 44 C 920 78, 1000 78, 1080 44 C 1120 10, 1160 10, 1200 44';

  return (
    <section
      id="data-to-intelligence"
      className="relative py-24 sm:py-32 bg-[#060A14] text-white overflow-hidden select-none border-y border-slate-800/80"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Self-Contained Keyframes for Living Wave Laser Beam */}
      <style>{`
        @keyframes knooviqWaveBeamFlow {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -1000;
          }
        }
        .knooviq-wave-beam-1 {
          animation: knooviqWaveBeamFlow 4.5s linear infinite;
        }
        .knooviq-wave-beam-2 {
          animation: knooviqWaveBeamFlow 4.5s linear infinite;
          animation-delay: -2.25s;
        }
      `}</style>
      {/* Dynamic Background Atmospheric Radiance */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[550px] rounded-full blur-[160px] pointer-events-none transition-colors duration-1000 opacity-25"
        style={{ backgroundColor: currentStage.color }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.12),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none opacity-40" />

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
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1 text-[11px] font-mono font-bold uppercase tracking-widest text-[#38BDF8] shadow-sm backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-[#38BDF8]" />
                END-TO-END OPERATIONAL LIFECYCLE
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-tight">
              From <span className="bg-gradient-to-r from-[#38BDF8] via-[#00A3E0] to-[#0070C0] bg-clip-text text-transparent">Data to Intelligence</span>
            </h2>

            <p className="mt-3.5 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto font-normal">
              Connecting global operational data to autonomous decision execution through a proven 5-stage transformation pipeline.
            </p>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* CONTINUOUS SYNAPSE RAIL (NO BOXES — FLOATING LIVING PIPELINE STREAM)        */}
        {/* ========================================================================= */}
        <div className="relative mb-12 sm:mb-16">

          {/* Continuous Glowing Wave-Like Synapse Rail Across All 5 Stages */}
          <div className="hidden lg:block absolute top-0 left-0 right-0 h-[88px] pointer-events-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1200 88"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <linearGradient id="synapseWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FACC15" stopOpacity="0.8" />
                  <stop offset="25%" stopColor="#FB923C" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#F87171" stopOpacity="0.85" />
                  <stop offset="75%" stopColor="#E879F9" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#C084FC" stopOpacity="0.9" />
                </linearGradient>

                <linearGradient id="waveLaserGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00F0FF" stopOpacity="0" />
                  <stop offset="50%" stopColor="#38BDF8" stopOpacity="1" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
                </linearGradient>

                <filter id="synapseGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. Ambient Glow Aura for Primary Wave */}
              <path
                d={primaryWavePath}
                stroke="url(#synapseWaveGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.25"
                filter="url(#synapseGlow)"
              />



              {/* 3. Primary Structural Wave Conduit */}
              <path
                d={primaryWavePath}
                stroke="url(#synapseWaveGradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* 4. Flowing Laser Light Beam 1 (Passing through wave) */}
              <path
                d={primaryWavePath}
                stroke="url(#waveLaserGradient)"
                strokeWidth="4.5"
                strokeLinecap="round"
                pathLength="1000"
                strokeDasharray="160 840"
                className="knooviq-wave-beam-1"
                filter="url(#synapseGlow)"
              />

              {/* 5. Sharp White-Hot Core Light Pulse 2 */}
              <path
                d={primaryWavePath}
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                pathLength="1000"
                strokeDasharray="70 930"
                className="knooviq-wave-beam-2"
              />

              {/* 6. Glowing Photon Comets riding the wave crests and troughs */}
              <g>
                <animateMotion
                  dur="4.5s"
                  repeatCount="indefinite"
                  path={primaryWavePath}
                  rotate="auto"
                />
                <circle cx="-16" cy="0" r="2" fill="#38BDF8" opacity="0.4" />
                <circle cx="-8" cy="0" r="3" fill="#00E5FF" opacity="0.8" />
                <circle cx="0" cy="0" r="10" fill="#38BDF8" opacity="0.35" filter="url(#synapseGlow)" />
                <circle cx="0" cy="0" r="5" fill="#38BDF8" />
                <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
              </g>

              <g>
                <animateMotion
                  dur="4.5s"
                  begin="-2.25s"
                  repeatCount="indefinite"
                  path={primaryWavePath}
                  rotate="auto"
                />
                <circle cx="-16" cy="0" r="2" fill="#E879F9" opacity="0.4" />
                <circle cx="-8" cy="0" r="3" fill="#C084FC" opacity="0.8" />
                <circle cx="0" cy="0" r="10" fill="#C084FC" opacity="0.35" filter="url(#synapseGlow)" />
                <circle cx="0" cy="0" r="5" fill="#C084FC" />
                <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
              </g>
            </svg>
          </div>

          {/* 5 Floating Interactive Orbital Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 lg:gap-2 relative z-10">
            {stages.map((stage, idx) => {
              const isActive = activeStageIndex === idx;

              return (
                <div
                  key={stage.name}
                  onClick={() => setActiveStageIndex(idx)}
                  className="flex flex-col items-center text-center cursor-pointer group transition-all duration-300"
                >
                  {/* Floating Nodal Portal (No Card Box, Just Atmospheric Orb) */}
                  <div className="relative mb-3 flex items-center justify-center">

                    {/* Rotating Orbital Dashed Ring (Active State) */}
                    {isActive && (
                      <motion.div
                        layoutId="activeOrbitalRing"
                        className="absolute w-24 h-24 rounded-full border-2 border-dashed pointer-events-none animate-spin"
                        style={{ borderColor: stage.color, animationDuration: '12s' }}
                        transition={{ type: 'spring', stiffness: 260, damping: 25 }}
                      />
                    )}

                    {/* Ambient Glow Aura */}
                    <div
                      className={`absolute w-20 h-20 rounded-full blur-xl transition-all duration-500 pointer-events-none ${isActive ? 'opacity-80 scale-125' : 'opacity-20 group-hover:opacity-50 scale-90'
                        }`}
                      style={{ backgroundColor: stage.color }}
                    />

                    {/* Central Glowing Orb Node */}
                    <div
                      className={`w-[88px] h-[88px] rounded-full flex items-center justify-center transition-all duration-500 relative z-10 backdrop-blur-xl ${isActive
                          ? 'bg-slate-900 shadow-2xl scale-110'
                          : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:scale-105'
                        }`}
                      style={{
                        borderWidth: isActive ? '2px' : '1px',
                        borderColor: isActive ? stage.color : undefined,
                        boxShadow: isActive ? `0 0 30px ${stage.glowColor}` : undefined
                      }}
                    >
                      {/* SVG Icon Graphic */}
                      <svg className="w-14 h-14" viewBox="0 0 140 140" fill="none">
                        {stage.renderIcon()}
                      </svg>

                      {/* Phase Number Badge Attached to Node */}
                      <span
                        className={`absolute -bottom-2 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider transition-colors ${isActive
                            ? 'bg-white text-slate-950 shadow-md font-extrabold'
                            : 'bg-slate-800/90 text-slate-400 border border-slate-700/60 group-hover:text-slate-200'
                          }`}
                      >
                        {stage.step}
                      </span>
                    </div>
                  </div>

                  {/* Stage Typography (Floating Free in Space) */}
                  <div className="mt-2 space-y-1">
                    <h3
                      className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-300 ${isActive ? stage.titleColorClass : 'text-slate-300 group-hover:text-white'
                        }`}
                    >
                      {stage.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium line-clamp-1 max-w-[170px] leading-snug">
                      {stage.tagline}
                    </p>
                  </div>

                  {/* Active Indicator Underline Beam */}
                  <div className="w-12 h-1 mt-2.5 rounded-full overflow-hidden bg-transparent">
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="w-full h-full rounded-full"
                        style={{ backgroundColor: stage.color, boxShadow: `0 0 10px ${stage.color}` }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE HOLOGRAPHIC STAGE HUD (WIDE PANORAMIC COCKPIT — NO BOX GRID) */}
        {/* ========================================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative rounded-3xl bg-gradient-to-br from-slate-900/70 via-[#0A1224]/80 to-slate-950/90 border border-slate-800/90 backdrop-blur-2xl p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl"
          >
            {/* Top Atmospheric Laser Edge */}
            <div
              className="absolute top-0 inset-x-8 h-[2px] opacity-75"
              style={{ background: `linear-gradient(to right, transparent, ${currentStage.color}, transparent)` }}
            />

            {/* Subtle Phase Watermark Background */}
            <div className="absolute right-4 -bottom-6 text-[120px] sm:text-[180px] font-black font-mono text-white/[0.02] pointer-events-none select-none">
              {currentStage.step}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">

              {/* Left Column: Deep Phase Intelligence & Narrative */}
              <div className="lg:col-span-6 space-y-5">

                {/* Stage Phase Identifier & Metric Chip */}
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase border"
                    style={{
                      color: currentStage.color,
                      backgroundColor: `${currentStage.color}15`,
                      borderColor: `${currentStage.color}40`
                    }}
                  >
                    PHASE {currentStage.step} &bull; {currentStage.name.toUpperCase()}
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/70 text-slate-300 text-xs font-mono font-medium border border-slate-700/60">
                    <Activity className="w-3.5 h-3.5" style={{ color: currentStage.color }} />
                    <span>{currentStage.metric}</span>
                  </span>
                </div>

                {/* Main Transformational Statement */}
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                    {currentStage.description}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {currentStage.narrative}
                  </p>
                </div>

                {/* Telemetry Architecture Specs (Floating Monospace Strip) */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Protocol Stack</div>
                    <div className="text-xs font-mono font-bold text-slate-200 mt-1 truncate" title={currentStage.protocol}>
                      {currentStage.protocol}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Pipeline Throughput</div>
                    <div className="text-xs font-mono font-bold mt-1" style={{ color: currentStage.color }}>
                      {currentStage.throughput}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Target Latency</div>
                    <div className="text-xs font-mono font-bold text-sky-400 mt-1">
                      {currentStage.latency}
                    </div>
                  </div>
                </div>

                {/* Key Architectural Capability Badges */}
                <div className="pt-1 flex flex-wrap gap-2">
                  {currentStage.capabilities.map((cap, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 text-xs font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{cap}</span>
                    </span>
                  ))}
                </div>

              </div>

              {/* Right Column: Clean High-Resolution Stage Architecture Visualization */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center">
                <div
                  onClick={() => setPreviewImage(currentStage.image)}
                  className="relative w-full rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-[0_0_40px_rgba(0,0,0,0.6)] cursor-pointer group"
                >
                  {/* Top Ambient Laser Edge */}
                  <div
                    className="absolute top-0 inset-x-0 h-[2px] z-10 transition-all duration-500"
                    style={{ backgroundColor: currentStage.color }}
                  />

                  {/* Clean High-Resolution Stage Image with Increased Height */}
                  <div className="relative aspect-[16/10.2] sm:aspect-[16/10] w-full overflow-hidden bg-slate-950">
                    <img
                      src={currentStage.image}
                      alt={currentStage.description}
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Fullscreen Lightbox Modal for Architecture Inspection */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setPreviewImage(null)}
          >
            <div
              className="relative max-w-6xl w-full rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setPreviewImage(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 border border-slate-700 transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={previewImage}
                alt="Architecture Diagram Full View"
                className="w-full h-auto max-h-[85vh] object-contain mx-auto"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DataToIntelligenceSection;
