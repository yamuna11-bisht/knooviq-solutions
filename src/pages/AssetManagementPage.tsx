import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Activity,
  Cpu,
  Wrench,
  ShieldCheck,
  Zap,
  TrendingUp,
  BarChart3,
  Boxes,
  Database,
  Layers,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  HardHat,
  Cog,
  Gauge,
  Radio,
  FileText,
  Clock,
  Check,
  RefreshCw,
  Eye,
  SlidersHorizontal,
  Flame,
  Binary
} from 'lucide-react';

interface AssetManagementPageProps {
  onOpenContact?: (service?: string) => void;
}

// Section 2: Cyber-Physical Asset Operational Stages
interface AssetStage {
  id: string;
  stepNum: string;
  title: string;
  subsystem: string;
  subtitle: string;
  description: string;
  sensorProtocol: string;
  sapTrigger: string;
  badge: string;
  image: string;
  metrics: { label: string; value: string; note: string }[];
}

const ASSET_STAGES: AssetStage[] = [
  {
    id: 'digital-twin-registry',
    stepNum: '01',
    title: 'Universal Asset Hierarchy & Digital Twin Registry',
    subsystem: 'Asset Master Foundation',
    subtitle: 'Standardized equipment taxonomy, functional locations, and digital schematic integration',
    description:
      'Map your entire physical plant into a unified cyber-physical ledger. Ingest asset nameplate data, operating parameters, engineering schematics, and OEM maintenance manuals into structured functional locations.',
    sensorProtocol: 'Enterprise OPC-UA & MQTT Telemetry Framework',
    sapTrigger: 'SAP S/4HANA Equipment & Functional Location Master Sync',
    badge: 'Full Asset Traceability',
    image: '/images/asset_digital_twin_vault.jpg',
    metrics: [
      { label: 'Asset Taxonomy', value: 'ISO 14224', note: 'Standardized hierarchy' },
      { label: 'Onboarding Speed', value: '<5 Mins', note: 'Automated CAD ingestion' },
      { label: 'Data Accuracy', value: 'Unified Truth', note: 'Single master record' }
    ]
  },
  {
    id: 'iiot-acoustic-streaming',
    stepNum: '02',
    title: 'Continuous IIoT Telemetry & Acoustic Streaming',
    subsystem: 'Condition Monitoring',
    subtitle: 'High-frequency vibration probes, thermal imaging, and motor current analysis',
    description:
      'Stream real-time health metrics from critical turbines, pumps, gearboxes, and compressors. Capture tri-axial vibration waveforms, surface temperatures, and bearing lubrication acoustic levels.',
    sensorProtocol: 'High-Frequency Waveform & Vibration Edge Streaming',
    sapTrigger: 'SAP APM & Time-Series Data Lake Synchronization',
    badge: 'Real-Time Edge Ingestion',
    image: '/images/asset_iiot_acoustic_monitoring.png',
    metrics: [
      { label: 'Sampling Rate', value: '1,000 Hz', note: 'Tri-axial accelerometer' },
      { label: 'Telemetry Latency', value: '<120 ms', note: 'Edge sensor to cloud' },
      { label: 'Anomaly Capture', value: 'Continuous', note: 'Transient spike detection' }
    ]
  },
  {
    id: 'anomaly-fft-spectral',
    stepNum: '03',
    title: 'Edge AI Anomaly Detection & Spectral Analysis',
    subsystem: 'Diagnostic Pattern Engine',
    subtitle: 'Harmonic peak isolation and automated bearing fault frequency diagnostics',
    description:
      'Detect microscopic mechanical degradation weeks before physical failure occurs. Edge neural models decompose raw vibration waveforms into harmonic spectrums to isolate outer race spalls, shaft misalignment, or cavitation.',
    sensorProtocol: 'Embedded Edge AI Spectral Frequency Analysis',
    sapTrigger: 'Automated Predictive Anomaly & Degradation Event Dispatch',
    badge: 'Predictive Fault Isolation',
    image: '/images/asset_edge_ai_spectral_ecu.png',
    metrics: [
      { label: 'Lead Time Horizon', value: '28 Days', note: 'Pre-failure warning window' },
      { label: 'Signal Stability', value: 'Calibrated', note: 'Self-tuning baseline' },
      { label: 'Harmonic Precision', value: '0.01 Hz', note: 'Sub-harmonic resolution' }
    ]
  },
  {
    id: 'sap-pm-work-order',
    stepNum: '04',
    title: 'Autonomous SAP PM Work Order Dispatch',
    subsystem: 'Maintenance Execution',
    subtitle: 'Condition-driven work orders, technician auto-assignment, and priority matrix routing',
    description:
      'Turn sensor warnings into immediate maintenance execution without manual dispatchers. When vibration crosses alert boundaries, the system automatically creates a prioritized SAP PM work order with required safety instructions.',
    sensorProtocol: 'Real-Time OData Event-Driven Integration',
    sapTrigger: 'Automated SAP PM Work Order & Notification Dispatch',
    badge: 'Automated Work Dispatch',
    image: '/images/asset_autonomous_work_dispatch.png',
    metrics: [
      { label: 'Order Creation', value: 'Immediate', note: 'Automated ERP generation' },
      { label: 'Dispatch Lag', value: 'Zero Latency', note: 'Direct to millwright tablet' },
      { label: 'SLA Adherence', value: 'High Priority', note: 'Automated priority matrix' }
    ]
  },
  {
    id: 'mro-bom-reservation',
    stepNum: '05',
    title: 'Dynamic MRO Spare Parts BOM Auto-Reservation',
    subsystem: 'Inventory & Consignment',
    subtitle: 'Automated bill-of-materials draw, bin picking reservations, and vendor replenishment',
    description:
      'Guarantee that the technician arrives at the machine with the exact required replacement bearing, mechanical seal, and lubricant. The work order cross-references asset BOM and automatically reserves bin inventory in SAP MM.',
    sensorProtocol: 'Real-Time ERP Inventory & Reservation Connectivity',
    sapTrigger: 'Automated Material Reservation & Consignment Draw',
    badge: 'First-Time Fix Ready',
    image: '/images/asset_mro_bom_auto_reservation.jpg',
    metrics: [
      { label: 'Parts Availability', value: 'Pre-Kitted', note: 'Staged at warehouse dock' },
      { label: 'Wrench Time Gain', value: 'Optimized', note: 'Zero waiting at parts crib' },
      { label: 'Stock Accuracy', value: 'Serialized', note: 'Automated barcoded issue' }
    ]
  },
  {
    id: 'loto-overhaul-mtbf',
    stepNum: '06',
    title: 'Lockout-Tagout (LOTO) Overhaul & Baseline Reset',
    subsystem: 'Safety & Reliability',
    subtitle: 'Digital permit-to-work signoff, precision laser alignment, and reliability baseline reset',
    description:
      'Execute overhaul under zero-hazard conditions. Technicians follow digital LOTO procedures, verify laser shaft alignment tolerances, conduct post-repair baseline vibration tests, and electronically close the work order in SAP.',
    sensorProtocol: 'Post-Overhaul Diagnostic Baseline Calibration',
    sapTrigger: 'Automated Technical Completion & Maintenance Ledger Closeout',
    badge: 'Reliability Restored',
    image: '/images/asset_loto_safety_overhaul.png',
    metrics: [
      { label: 'Asset Life Cycle', value: 'Extended', note: 'Precision laser alignment' },
      { label: 'Safety Compliance', value: 'Full Audit', note: 'Multi-signature LOTO verification' },
      { label: 'MTBF Baseline', value: 'Restored', note: 'Telemetry returns to baseline' }
    ]
  }
];

// Interactive Condition Simulator Modes for Section 2
type ConditionMode = 'baseline' | 'warning' | 'critical';

interface ConditionDetails {
  mode: ConditionMode;
  label: string;
  vibrationLevel: string;
  isoSeverity: string;
  tempCelsius: string;
  statusText: string;
  actionRequired: string;
}

const CONDITION_PRESETS: Record<ConditionMode, ConditionDetails> = {
  baseline: {
    mode: 'baseline',
    label: 'Normal / Baseline Operation',
    vibrationLevel: '0.84 mm/s RMS',
    isoSeverity: 'ISO 10816 Zone A (Good)',
    tempCelsius: '42.6° C',
    statusText: 'All harmonics within nominal operating envelope. No maintenance intervention required.',
    actionRequired: 'Autonomous continuous IIoT telemetry streaming.'
  },
  warning: {
    mode: 'warning',
    label: 'Thermal & Harmonic Drift Warning',
    vibrationLevel: '2.86 mm/s RMS',
    isoSeverity: 'ISO 10816 Zone B/C (Unsatisfactory)',
    tempCelsius: '68.2° C',
    statusText: 'Harmonic elevation detected with thermal gradient drift. Bearing lubrication breakdown imminent.',
    actionRequired: 'Automated lubricant replenishment trigger and scheduled inspection work order.'
  },
  critical: {
    mode: 'critical',
    label: 'Critical Bearing Cage Spall Anomaly',
    vibrationLevel: '5.14 mm/s RMS',
    isoSeverity: 'ISO 10816 Zone D (Unacceptable Danger)',
    tempCelsius: '94.8° C',
    statusText: 'Outer raceway impact spikes exceeding safety thresholds. High risk of rotor seizure.',
    actionRequired: 'Emergency work order auto-dispatched with digital isolation permit.'
  }
};

export const AssetManagementPage: React.FC<AssetManagementPageProps> = ({ onOpenContact }) => {
  // Set document title
  useEffect(() => {
    document.title = 'Asset Management (EAM) | Predictive IIoT & SAP PM | KNOOVIQ';
  }, []);

  // Section 2: Active stage and condition simulator states
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [conditionMode, setConditionMode] = useState<ConditionMode>('baseline');
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Section 3: RCM & Weibull degradation curve state
  const [operatingHours, setOperatingHours] = useState<number>(6400);

  // Section 4: MRO Consignment ABC/VED filter state
  const [selectedVED, setSelectedVED] = useState<'all' | 'vital' | 'essential' | 'desirable'>('all');

  // Auto-cycle for Section 2 with 3.2s interval
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % ASSET_STAGES.length);
    }, 3200);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handleStageClick = (index: number) => {
    setActiveStageIndex(index);
    setIsPaused(true);

    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  const activeStage = ASSET_STAGES[activeStageIndex];
  const activeCondition = CONDITION_PRESETS[conditionMode];

  // RCM Calculations based on operating hours
  const failureProbabilityPct = Math.min(
    98,
    Math.round(Math.pow(operatingHours / 8000, 2.4) * 85)
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#00A3E0] selection:text-white overflow-hidden">
      
      {/* =========================================================================
          SECTION 1 — HERO: INDUSTRIAL CYBER-PHYSICAL TELEMETRY COMMAND CENTER (LIGHT)
          ========================================================================= */}
      <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50/60 border-b border-slate-200 overflow-hidden">
        
        {/* Dynamic Background Aurora Blobs (The Knooviq Story Style) */}
        <div className="aurora-sphere-1 top-20 left-1/4 bg-[#00A3E0]/15 pointer-events-none" />
        <div className="aurora-sphere-2 top-96 right-10 bg-[#6366F1]/12 pointer-events-none" />

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#00A3E015_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />
        <div className="absolute top-12 -right-24 w-96 h-96 bg-[#00A3E0]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Strategic Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-ping" />
                <span className="font-semibold text-slate-900">Enterprise Asset Management (EAM)</span>
                <span className="text-slate-300">|</span>
                <span className="text-[#0077B6] font-semibold">Predictive IIoT &amp; SAP PM</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12] font-display">
                Zero Unplanned Downtime From{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#0A2540] to-[#00A3E0]">
                  Sensor Telemetry
                </span>{' '}
                to Capital Overhaul.
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal font-sans">
                Transform plant maintenance from costly reactive fire-fighting into a high-precision predictive science. 
                Continuously stream IIoT acoustic waveforms, isolate micro-anomalies via Edge AI, and trigger automated 
                SAP S/4HANA PM work orders before equipment failure halts production.
              </p>

              {/* Hero CTA Group */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenContact ? onOpenContact('Enterprise Asset Management Consultation') : null}
                  className="px-8 py-4 rounded-xl bg-[#0077B6] hover:bg-[#006296] text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Request Plant Digital Twin Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#diagnostic-chamber"
                  className="px-6 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-sm font-semibold transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Open Diagnostic Chamber</span>
                  <ChevronRight className="w-4 h-4 text-[#00A3E0]" />
                </a>
              </div>

              {/* Real-Time Industrial KPI Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 font-normal">Critical Asset OEE</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1 font-display">World-Class</p>
                  <p className="text-xs text-[#0077B6] font-medium mt-1">High Availability</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 font-normal">Mean Time to Repair</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1 font-display">&lt; 1.8 Hrs</p>
                  <p className="text-xs text-emerald-600 font-medium mt-1">Pre-Kitted MRO BOM</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 font-normal">Unplanned Outages</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1 font-display">Autonomous</p>
                  <p className="text-xs text-[#0077B6] font-medium mt-1">28-Day Horizon</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-500 font-normal">MRO Inventory Waste</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1 font-display">Just-in-Time</p>
                  <p className="text-xs text-emerald-600 font-medium mt-1">Zero Dead Capital</p>
                </div>
              </div>

            </div>

            {/* Right Column: Clean Pure Hero Visual (No content above, inside, or below, with increased height) */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[380px] sm:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 group">
                <img
                  src="/images/asset_management_hero.png"
                  alt="Enterprise Asset Management Intelligent Operations and Predictive Telemetry"
                  className="w-full h-full object-cover object-center select-none group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2 — THE DIGITAL TWIN DIAGNOSTIC CHAMBER (LIGHT THEME)
          ========================================================================= */}
      <section id="diagnostic-chamber" className="py-14 sm:py-20 bg-slate-50/60 relative border-b border-slate-200">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs">
              <Cpu className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Connected Asset Lifecycle &amp; Condition Diagnostics</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              The Digital Twin Diagnostic Chamber
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed font-normal">
              Experience the cyber-physical journey from edge sensor frequency detection to certified overhaul. 
              Toggle the real-time condition simulator to inspect how ISO 10816 vibration spikes trigger autonomous SAP PM dispatch.
            </p>

            {/* Diagnostic Condition Simulator Switcher */}
            <div className="inline-flex items-center p-1.5 bg-white rounded-xl border border-slate-200 mt-2 gap-1 shadow-sm">
              <button
                onClick={() => setConditionMode('baseline')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  conditionMode === 'baseline'
                    ? 'bg-slate-100 text-slate-900 shadow-xs border border-slate-300 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>Optimal (0.8 mm/s)</span>
              </button>

              <button
                onClick={() => setConditionMode('warning')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  conditionMode === 'warning'
                    ? 'bg-slate-100 text-slate-900 shadow-xs border border-slate-300 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Flame className="w-3.5 h-3.5 text-amber-600" />
                <span>Thermal Warning (2.8 mm/s)</span>
              </button>

              <button
                onClick={() => setConditionMode('critical')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  conditionMode === 'critical'
                    ? 'bg-slate-100 text-slate-900 shadow-xs border border-slate-300 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                <span>Critical Failure (5.1 mm/s)</span>
              </button>
            </div>
          </div>

          {/* Condition Alert Chamber Banner */}
          <div className="p-4 rounded-xl border border-slate-200 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-sm">
                <Gauge className="w-4 h-4 text-[#00A3E0]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900 uppercase tracking-wider">{activeCondition.label}</p>
                <p className="text-xs text-slate-600 mt-0.5 font-normal">{activeCondition.statusText}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 text-xs">
              <span className="text-slate-500 font-normal">Vibration: <strong className="text-slate-900 font-semibold">{activeCondition.vibrationLevel}</strong></span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 font-normal">Temp: <strong className="text-slate-900 font-semibold">{activeCondition.tempCelsius}</strong></span>
            </div>
          </div>

          {/* Sequential 6-Stage Diagnostic Chamber Runway */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (5 Cols): Interactive Operational Stage Selector */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="flex items-center justify-between px-1 pb-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Asset Life-Cycle Sequence
                </span>
                <span className="text-xs text-[#0077B6] font-medium">
                  {isPaused ? 'Paused for inspection' : 'Auto-cycling stages'}
                </span>
              </div>

              {ASSET_STAGES.map((stage, idx) => {
                const isActive = idx === activeStageIndex;

                return (
                  <div
                    key={stage.id}
                    onClick={() => handleStageClick(idx)}
                    className={`cursor-pointer rounded-xl p-4 transition-all duration-300 border relative overflow-hidden ${
                      isActive
                        ? 'bg-white border-[#00A3E0] shadow-md ring-2 ring-[#00A3E0]/20 text-slate-900'
                        : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute top-0 left-0 right-0 h-1 bg-[#00A3E0]"
                        initial={{ scaleX: 0, transformOrigin: '0%' }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: isPaused ? 0.3 : 3.2, ease: 'linear' }}
                      />
                    )}

                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs transition-colors shrink-0 ${
                          isActive
                            ? 'bg-[#00A3E0] text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {stage.stepNum}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                            {stage.subsystem}
                          </span>
                          <span className="text-xs text-slate-400 font-medium">Stage {stage.stepNum}</span>
                        </div>

                        <h3 className={`text-sm font-semibold mt-1.5 truncate ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                          {stage.title}
                        </h3>

                        <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed font-normal">
                          {stage.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column (7 Cols): The Diagnostic Inspection Console */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-lg space-y-6"
                >
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          Stage {activeStage.stepNum} of 06
                        </span>
                        <span className="text-xs font-medium text-slate-500">
                          {activeStage.subsystem}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-1.5 tracking-tight">
                        {activeStage.title}
                      </h3>
                    </div>

                    <div className="px-3 py-1 rounded-full bg-sky-50 border border-sky-100/80 text-xs font-semibold text-[#0077B6]">
                      {activeStage.badge}
                    </div>
                  </div>

                  {/* Visual Showcase — The Knooviq Story aesthetic with frosted badges */}
                  <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl group bg-slate-950 select-none">
                    <img
                      src={activeStage.image}
                      alt={activeStage.title}
                      className="w-full h-full object-cover object-center select-none group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none z-10" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/40 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide shadow-lg">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00A3E0] animate-pulse" />
                        <span>Stage {activeStage.stepNum} of 06 • {activeStage.subsystem}</span>
                      </div>
                    </div>

                    {/* Bottom-left Executive Accent Ribbon */}
                    <div className="absolute bottom-4 left-0 z-20 pointer-events-none">
                      <div className="bg-[#0A2540]/90 backdrop-blur-md text-white px-5 py-2 rounded-r-xl font-display font-semibold tracking-wide text-xs uppercase shadow-xl border-r border-t border-b border-[#00A3E0]/40 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{activeStage.badge}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-xs font-semibold text-[#0077B6] uppercase tracking-wider">
                      Operational Engineering Narrative
                    </p>
                    <p className="text-xs text-slate-700 font-normal mt-1 leading-relaxed">
                      {activeStage.description}
                    </p>
                  </div>

                  {/* Dual Protocol Grid: Edge Sensor Telemetry vs SAP S/4HANA Action */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="rounded-xl p-4 bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 uppercase tracking-wider">
                        <Radio className="w-4 h-4 text-[#00A3E0]" />
                        <span>Edge IIoT Protocol</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {activeStage.sensorProtocol}
                      </p>
                    </div>

                    <div className="rounded-xl p-4 bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 uppercase tracking-wider">
                        <Database className="w-4 h-4 text-[#00A3E0]" />
                        <span>Enterprise ERP Integration</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {activeStage.sapTrigger}
                      </p>
                    </div>

                  </div>

                  {/* Verification Metric Cards */}
                  <div className="grid grid-cols-3 gap-3 pt-2 border-t border-slate-200">
                    {activeStage.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="text-center p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                        <p className="text-xs text-slate-500 font-normal">{metric.label}</p>
                        <p className="text-sm font-bold text-slate-900 mt-1 font-display">{metric.value}</p>
                        <p className="text-xs text-[#0077B6] font-medium mt-0.5">{metric.note}</p>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3 — RELIABILITY-CENTERED MAINTENANCE (RCM) & WEIBULL SANDBOX (LIGHT)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs">
              <TrendingUp className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Statistical Asset Reliability</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              Weibull Degradation Curve &amp; Overhaul Optimization
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed font-normal">
              Transition from arbitrary calendar-based maintenance to statistical Weibull hazard rate modeling. 
              Drag the operating runtime slider below to observe how predictive overhaul avoids catastrophic replacement expenditure.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl bg-slate-50 p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
            
            {/* Slider Control */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <label className="text-sm font-semibold text-slate-900">
                  Select Continuous Operating Runtime:
                </label>
                <div className="text-lg font-bold text-slate-900">
                  {operatingHours.toLocaleString()} Operating Hours
                </div>
              </div>

              <input
                type="range"
                min="1000"
                max="9000"
                step="200"
                value={operatingHours}
                onChange={(e) => setOperatingHours(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00A3E0]"
              />

              <div className="flex justify-between text-xs text-slate-500 font-normal">
                <span>1,000h (Infant Mortality Cleared)</span>
                <span>5,000h (Nominal Useful Life)</span>
                <span>8,000h+ (Wear-Out Outage Zone)</span>
              </div>
            </div>

            {/* Calculated Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <span className="text-xs text-slate-500">Statistical Failure Probability</span>
                <p className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-display">
                  {failureProbabilityPct >= 70 ? 'Critical Risk Band' : failureProbabilityPct >= 40 ? 'Elevated Caution Horizon' : 'Normal Operating Band'}
                </p>
                <span className="inline-block mt-2 text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                  {failureProbabilityPct > 70 ? 'Immediate Overhaul Urged' : failureProbabilityPct > 35 ? 'Condition Monitoring Active' : 'Normal Degradation'}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <span className="text-xs text-slate-500">Remaining Useful Life (RUL)</span>
                <p className="text-xl font-bold text-slate-900 mt-1">
                  {Math.max(120, Math.round(12000 - operatingHours))} Operating Hrs
                </p>
                <span className="inline-block mt-2 text-xs text-slate-500 font-medium">
                  Real-time Weibull gradient estimation
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <span className="text-xs text-slate-500">Asset Health Index Score</span>
                <p className="text-2xl font-bold text-[#0077B6] mt-1">
                  {Math.max(8, 100 - failureProbabilityPct)} / 100
                </p>
                <span className="inline-block mt-2 text-xs text-slate-500 font-medium">
                  Continuous ISO 10816 condition index
                </span>
              </div>

            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                Automated SAP PM Maintenance Strategy:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                  <span>Dynamic MTBF recalculation linked to live hours counter</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                  <span>Auto-reserves rebuild kit 14 days before hazard threshold</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 4 — MRO SPARE PARTS CONSIGNMENT & ABC/VED CRITICALITY MATRIX (LIGHT)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/60 relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs">
              <Boxes className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Optimized Inventory Economics</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              MRO Consignment &amp; ABC / VED Criticality Matrix
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed font-normal">
              Never halt critical plant production lines for want of an essential mechanical seal or replacement bearing. 
              Classify spare parts by operational criticality (Vital, Essential, Desirable) to balance working capital with maximum plant availability.
            </p>

            {/* Filter buttons */}
            <div className="inline-flex items-center p-1 bg-white rounded-xl border border-slate-200 mt-2 shadow-sm">
              <button
                onClick={() => setSelectedVED('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedVED === 'all' ? 'bg-slate-100 text-slate-900 border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All 3 Classes
              </button>
              <button
                onClick={() => setSelectedVED('vital')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedVED === 'vital' ? 'bg-slate-100 text-slate-900 border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Vital (V) Spares
              </button>
              <button
                onClick={() => setSelectedVED('essential')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedVED === 'essential' ? 'bg-slate-100 text-slate-900 border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Essential (E) Spares
              </button>
              <button
                onClick={() => setSelectedVED('desirable')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedVED === 'desirable' ? 'bg-slate-100 text-slate-900 border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Desirable (D) Spares
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Vital */}
            {(selectedVED === 'all' || selectedVED === 'vital') && (
              <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                    Class V (Vital)
                  </span>
                  <span className="text-xs text-rose-600 font-semibold">Outage Risk: Catastrophic</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900">Zero-Tolerance Critical Spares</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Components whose failure immediately shuts down critical unit operations with no redundancy. 
                  Maintained in dedicated vendor-managed consignment stock (VMI) on-site.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Example SKUs:</span>
                    <span className="text-slate-900 font-semibold">Turbine Rotors, Main PLC</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Safety Stock Buffer:</span>
                    <span className="text-[#0077B6] font-semibold">Guaranteed Available</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>SAP Procurement Mode:</span>
                    <span className="text-slate-700 font-medium">VMI Automatic Draw</span>
                  </div>
                </div>
              </div>
            )}

            {/* Essential */}
            {(selectedVED === 'all' || selectedVED === 'essential') && (
              <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                    Class E (Essential)
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Outage Risk: Moderate (24h)</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900">Subsystem Redundancy Spares</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Parts whose absence can cause production throttling within 12-24 hours. Replenished dynamically 
                  via automated SAP MM reorder points with regional supplier SLAs.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Example SKUs:</span>
                    <span className="text-slate-900 font-semibold">Hydraulic Valves, Seals</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Safety Stock Buffer:</span>
                    <span className="text-slate-800 font-semibold">Dynamic Reorder Point</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>SAP Procurement Mode:</span>
                    <span className="text-slate-700 font-medium">Automatic MRP Planning</span>
                  </div>
                </div>
              </div>
            )}

            {/* Desirable */}
            {(selectedVED === 'all' || selectedVED === 'desirable') && (
              <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                    Class D (Desirable)
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Outage Risk: Minimal</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900">Standard Consumable Items</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Standard fasteners, common gaskets, and utility filters that do not halt primary production. 
                  Aggregated for bulk economic purchase order (EOQ) discounts.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Example SKUs:</span>
                    <span className="text-slate-900 font-semibold">Standard O-Rings, Bolts</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Safety Stock Buffer:</span>
                    <span className="text-slate-800 font-semibold">Kanban Two-Bin System</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>SAP Procurement Mode:</span>
                    <span className="text-slate-700 font-medium">Consolidated Periodic PO</span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5 — INDUSTRIAL SAFETY, PERMIT-TO-WORK (PTW) & LOTO ENGINE (LIGHT)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs">
                <HardHat className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>Zero-Harm Plant Safety</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
                Digital Permit-to-Work (PTW) &amp; Lockout-Tagout (LOTO) Compliance
              </h2>

              <p className="text-slate-600 text-base leading-relaxed font-normal">
                Work execution cannot proceed without ironclad safety verification. 
                Raapyd EAM integrates digital isolation certificates, hot work permits, and multi-signature 
                electrical and hydraulic lockout sequences directly into mobile technician work orders.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                    <span>Multi-Party Padlock Scan</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Requires operations, maintenance, and safety officers to scan individual RFID lock tags.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                    <span>Energy Zero-State Test</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Mandatory bleed-off pressure and residual voltage checklist prior to cabinet unlock.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                    <span>Confined Space Telemetry</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Live BLE integration with 4-gas sniffers with automatic evacuation alert triggers.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                    <span>Safety Audit &amp; Compliance</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Every permit milestone produces an immutable tamper-evident digital audit archive.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl bg-white p-6 border border-slate-200 shadow-lg space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold text-slate-800 uppercase tracking-wider">
                    Digital Isolation Permit Verification
                  </span>
                </div>
                <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                  Isolation Secured
                </span>
              </div>

              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs text-slate-800 font-medium">Main 415V Breaker Lock Active</span>
                  </div>
                  <span className="text-xs text-emerald-700 font-semibold">Verified</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs text-slate-800 font-medium">Hydraulic Pressure Line Bleed Complete</span>
                  </div>
                  <span className="text-xs text-emerald-700 font-semibold">Verified</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs text-slate-800 font-medium">Atmosphere 4-Gas Sniffer Calibrated</span>
                  </div>
                  <span className="text-xs text-emerald-700 font-semibold">Safe Environment</span>
                </div>

                <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-900">ERP Maintenance Work Order Released</p>
                    <p className="text-xs text-slate-600 font-normal">Certified technician authorized to commence overhaul</p>
                  </div>
                  <span className="text-xs font-semibold text-[#0077B6] bg-white border border-cyan-200 px-2.5 py-1 rounded-md shadow-xs">
                    Active
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 6 — NATIVE SAP S/4HANA & APM ENTERPRISE ARCHITECTURE (LIGHT)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/60 relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs">
              <Database className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Clean-Core Architecture</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              Native SAP S/4HANA PM &amp; APM Integration
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed font-normal">
              Eliminate disconnected point solutions. Raapyd EAM interfaces directly with SAP Plant Maintenance (PM), 
              Materials Management (MM), and SAP Asset Performance Management (APM) via enterprise event mesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0077B6] flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">SAP S/4HANA Plant Maintenance (PM)</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Bi-directional work notification and maintenance order synchronization. 
                Automatically schedules maintenance task lists and captures technician wrench time in real time.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 pt-3 border-t border-slate-100 font-normal">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Automated Maintenance Work Order Dispatch</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Digital Technical Completion (TECO) Verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Unified Functional Location Master Alignment</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0077B6] flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">SAP APM &amp; Condition Monitoring</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Streams time-series IIoT vibration, acoustic, and thermal telemetry directly into indicator rules 
                to compute real-time asset health indexes and remaining useful life.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 pt-3 border-t border-slate-100 font-normal">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Continuous Time-Series Indicator Synchronization</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Reliability-Centered Maintenance Assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Statistical Degradation Curve Modeling</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0077B6] flex items-center justify-center">
                <Boxes className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">SAP MM &amp; Consignment Spares</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Automates MRO spare parts reservation from equipment bills of materials. 
                Triggers vendor-managed inventory consignment consumption with zero manual crib paperwork.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 pt-3 border-t border-slate-100 font-normal">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Automated Maintenance BOM Part Reservation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Touchless Consignment Consumption Settlement</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  <span>Dynamic Reorder Point &amp; Safety Stock Planning</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 7 — MEASURABLE VALUE IMPACT & FINAL CONVERSION CTA (LIGHT)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200 relative overflow-hidden">
        {/* Background Subtle Aurora Glow */}
        <div className="aurora-sphere-1 pointer-events-none opacity-25 -top-24 left-1/4" />
        <div className="aurora-sphere-2 pointer-events-none opacity-20 -bottom-24 right-1/4" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-10 h-10 mx-auto rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#00A3E0]">
                <Activity className="w-5 h-5" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                World-Class
              </p>
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Critical Asset OEE</p>
              <p className="text-xs text-slate-500 font-normal">Zero catastrophic rotor seizures</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-10 h-10 mx-auto rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0077B6]">
                <Boxes className="w-5 h-5" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Minimized Waste
              </p>
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">MRO Carrying Cost</p>
              <p className="text-xs text-slate-500 font-normal">Optimized VED consignment stock</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-10 h-10 mx-auto rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <Wrench className="w-5 h-5" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Max Wrench Time
              </p>
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Field Execution Velocity</p>
              <p className="text-xs text-slate-500 font-normal">Automated pre-kitted parts BOM</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Full Compliance
              </p>
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Digital LOTO Verification</p>
              <p className="text-xs text-slate-500 font-normal">Zero OSHA safety incidents</p>
            </div>
          </div>

          <div className="rounded-3xl p-8 sm:p-12 bg-slate-50 border border-slate-200 shadow-md relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-[#0077B6] text-xs font-semibold tracking-wide shadow-xs inline-block">
                Predictive Reliability Architecture
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight font-display tracking-tight">
                Eliminate Unexpected Machinery Outages Across Your Enterprise Plants.
              </h2>

              <p className="text-slate-600 text-base leading-relaxed font-normal">
                Connect with our certified industrial reliability engineers. We will analyze your critical equipment 
                failure history, review current PM maintenance strategies, and design a proof-of-concept IIoT &amp; SAP APM roadmap.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenContact ? onOpenContact('Enterprise Asset Management Architecture Session') : null}
                  className="px-8 py-4 rounded-xl bg-[#0077B6] hover:bg-[#006296] text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Schedule Reliability Assessment</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  to="/products/dealer-management-system"
                  className="px-6 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Explore Dealer Management &rarr;</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AssetManagementPage;
