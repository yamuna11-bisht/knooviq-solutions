import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Circle, 
  Layers, 
  BarChart2, 
  GitMerge, 
  Sliders, 
  Shield,
  Activity
} from 'lucide-react';

type PricingModel = 'recurring' | 'tiered' | 'usage' | 'hybrid';

interface ModelMeta {
  id: PricingModel;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  howItWorks: string;
  sapBenefit: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MODELS: Record<PricingModel, ModelMeta> = {
  recurring: {
    id: 'recurring',
    title: 'Recurring',
    badge: 'Fixed Cadence Engine',
    tagline: 'Predictable Subscription Cycles with Zero-Touch Billing',
    description: 'Fixed-interval billing (monthly, annual, multi-year) configured once and executed perpetually. Automatically accounts for advance/arrears schedules and contract proration.',
    howItWorks: 'The billing engine locks in standard commitment schedules with automated calendar adjustments, indexation escalations, and automated ledger postings directly in SAP S/4HANA Finance.',
    sapBenefit: 'Guaranteed Revenue Recognition (IFRS 15) without manual spreadsheets.',
    icon: Circle,
  },
  tiered: {
    id: 'tiered',
    title: 'Tiered',
    badge: 'Multi-Level Volume Scale',
    tagline: 'Dimensional Stepped Pricing Matching Enterprise Scale',
    description: 'Graduated or volume-bracketed pricing tiers where unit costs automatically adjust as customers unlock higher enterprise volumes, seats, or feature access levels.',
    howItWorks: 'The central structure stratifies into discrete pricing strata. Billing evaluates tier boundaries at rating time, applying graduated rates or retroactively discounting the entire volume.',
    sapBenefit: 'Native SAP Price Condition technique integration with custom surcharge formulas.',
    icon: Layers,
  },
  usage: {
    id: 'usage',
    title: 'Usage-Based',
    badge: 'Dynamic Consumption Rating',
    tagline: 'Elastic Metering Breathing in Sync with Real Consumption',
    description: 'Pay-as-you-go, prepaid credit drawdowns, and overage billing that continuously adapts to real-world transactions, API calls, compute hours, or storage consumption.',
    howItWorks: 'High-throughput event mediation ratings continuously expand and contract the billing envelope. Telemetry is verified, deduplicated, and rated against contractual thresholds.',
    sapBenefit: 'Real-time billing unbilled accruals visible in SAP Financials anytime.',
    icon: BarChart2,
  },
  hybrid: {
    id: 'hybrid',
    title: 'Hybrid',
    badge: 'Composite Architecture',
    tagline: 'Base Recurring + Dynamic Usage + Volume Tiers Interlocked',
    description: 'The modern enterprise standard: combines a predictable recurring platform fee, committed usage quotas, overage tiers, and optional add-on services in one unified contract.',
    howItWorks: 'Multiple discrete structural rings converge into one integrated core. The platform charges the baseline commitment while rating variable consumption against overage rules.',
    sapBenefit: 'Single consolidated invoice for the customer, multi-account split in S/4HANA.',
    icon: GitMerge,
  },
};

export const AdaptivePricingSection: React.FC = () => {
  const [activeModel, setActiveModel] = useState<PricingModel>('recurring');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 700);
    let height = (canvas.height = 540);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = Math.min(560, Math.max(450, window.innerHeight * 0.6));
    };
    window.addEventListener('resize', handleResize);

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;
      timeRef.current += dt;

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      const cx = width / 2;
      const cy = height / 2;
      const t = timeRef.current;

      // Soft ambient radiant backdrop
      const radialGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 260);
      radialGlow.addColorStop(0, isDark ? 'rgba(0, 163, 224, 0.15)' : 'rgba(37, 99, 235, 0.08)');
      radialGlow.addColorStop(0.5, isDark ? 'rgba(0, 82, 204, 0.05)' : 'rgba(37, 99, 235, 0.02)');
      radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radialGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, 260, 0, Math.PI * 2);
      ctx.fill();

      if (activeModel === 'recurring') {
        // --- 1. RECURRING ---
        const ringRadius = 140;
        const tubeRadius = 24;
        const ringsCount = 32;

        for (let i = 0; i < ringsCount; i++) {
          const theta = (i / ringsCount) * Math.PI * 2 + t * 0.5;
          const x = cx + Math.cos(theta) * ringRadius;
          const y = cy + Math.sin(theta) * (ringRadius * 0.45);
          const scale = 1 + Math.sin(theta) * 0.25;

          ctx.beginPath();
          ctx.ellipse(x, y, tubeRadius * scale, tubeRadius * scale * 0.4, theta, 0, Math.PI * 2);
          ctx.strokeStyle = isDark 
            ? `rgba(0, 210, 255, ${0.15 + (Math.sin(theta) + 1) * 0.25})`
            : `rgba(37, 99, 235, ${0.2 + (Math.sin(theta) + 1) * 0.25})`;
          ctx.lineWidth = 1.6;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.ellipse(cx, cy, ringRadius, ringRadius * 0.45, 0, 0, Math.PI * 2);
        ctx.strokeStyle = isDark ? 'rgba(0, 240, 255, 0.8)' : '#2563EB';
        ctx.lineWidth = 3.5;
        ctx.stroke();

        const pulseAngle = t * 1.5;
        const px = cx + Math.cos(pulseAngle) * ringRadius;
        const py = cy + Math.sin(pulseAngle) * (ringRadius * 0.45);

        const pulseGlow = ctx.createRadialGradient(px, py, 0, px, py, 28);
        pulseGlow.addColorStop(0, '#FFFFFF');
        pulseGlow.addColorStop(0.3, isDark ? 'rgba(0, 210, 255, 0.8)' : 'rgba(37, 99, 235, 0.8)');
        pulseGlow.addColorStop(1, 'rgba(0, 163, 224, 0)');
        ctx.fillStyle = pulseGlow;
        ctx.beginPath();
        ctx.arc(px, py, 28, 0, Math.PI * 2);
        ctx.fill();

      } else if (activeModel === 'tiered') {
        // --- 2. TIERED ---
        const levels = 4;
        const tierLabels = ['Tier 4: Enterprise Dedicated', 'Tier 3: Scale Volume', 'Tier 2: Business Core', 'Tier 1: Base Tier'];
        
        for (let l = 0; l < levels; l++) {
          const yOffset = (l - 1.5) * 55;
          const layerRadius = 160 - l * 26;
          const layerY = cy + yOffset;
          const isHighlight = Math.floor((t * 0.8) % levels) === (levels - 1 - l);

          ctx.beginPath();
          ctx.ellipse(cx, layerY, layerRadius, layerRadius * 0.32, 0, 0, Math.PI * 2);
          ctx.fillStyle = isHighlight 
            ? (isDark ? 'rgba(0, 163, 224, 0.22)' : 'rgba(219, 234, 254, 0.8)')
            : (isDark ? 'rgba(11, 21, 40, 0.6)' : 'rgba(241, 245, 249, 0.7)');
          ctx.fill();
          
          ctx.strokeStyle = isHighlight 
            ? (isDark ? '#00D2FF' : '#2563EB')
            : (isDark ? 'rgba(56, 189, 248, 0.4)' : '#CBD5E1');
          ctx.lineWidth = isHighlight ? 2.5 : 1.2;
          ctx.stroke();

          if (l < levels - 1) {
            const nextY = cy + (l + 1 - 1.5) * 55;
            const pts = [-layerRadius * 0.7, 0, layerRadius * 0.7];
            pts.forEach(px => {
              ctx.beginPath();
              ctx.moveTo(cx + px, layerY);
              ctx.lineTo(cx + px * 0.85, nextY);
              ctx.strokeStyle = isDark ? 'rgba(0, 210, 255, 0.25)' : 'rgba(37, 99, 235, 0.25)';
              ctx.setLineDash([4, 4]);
              ctx.stroke();
              ctx.setLineDash([]);
            });
          }

          ctx.fillStyle = isHighlight 
            ? (isDark ? '#FFFFFF' : '#1E3A8A')
            : (isDark ? 'rgba(148, 163, 184, 0.8)' : '#64748B');
          ctx.font = `bold 10px "Plus Jakarta Sans", sans-serif`;
          ctx.textAlign = 'right';
          ctx.fillText(tierLabels[l], cx - layerRadius - 12, layerY + 3);
        }

      } else if (activeModel === 'usage') {
        // --- 3. USAGE-BASED ---
        const breathingFactor = 1 + Math.sin(t * 2.2) * 0.28;
        const baseRadius = 110 * breathingFactor;
        const waveCount = 12;

        ctx.beginPath();
        for (let a = 0; a <= Math.PI * 2; a += 0.05) {
          const wave = Math.sin(a * waveCount + t * 4) * (14 * breathingFactor);
          const r = baseRadius + wave;
          const x = cx + Math.cos(a) * r;
          const y = cy + Math.sin(a) * (r * 0.5);
          if (a === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(0, 163, 224, 0.12)' : 'rgba(219, 234, 254, 0.4)';
        ctx.fill();
        ctx.strokeStyle = isDark ? '#00F0FF' : '#2563EB';
        ctx.lineWidth = 2.8;
        ctx.stroke();

        for (let i = 0; i < 24; i++) {
          const angle = (i / 24) * Math.PI * 2;
          const innerR = baseRadius - 10;
          const outerR = baseRadius + 18 + (i % 3 === 0 ? 12 : 4);
          ctx.beginPath();
          ctx.moveTo(cx + Math.cos(angle) * innerR, cy + Math.sin(angle) * (innerR * 0.5));
          ctx.lineTo(cx + Math.cos(angle) * outerR, cy + Math.sin(angle) * (outerR * 0.5));
          ctx.strokeStyle = i % 3 === 0 
            ? (isDark ? 'rgba(0, 210, 255, 0.8)' : '#2563EB')
            : (isDark ? 'rgba(56, 189, 248, 0.3)' : '#94A3B8');
          ctx.lineWidth = i % 3 === 0 ? 2 : 1;
          ctx.stroke();
        }

        const simulatedUnits = Math.round(12400 + Math.sin(t * 2.2) * 4500);
        ctx.fillStyle = isDark ? '#FFFFFF' : '#0F172A';
        ctx.font = 'bold 18px "Plus Jakarta Sans", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${simulatedUnits.toLocaleString()} Events/sec`, cx, cy - 6);

        ctx.fillStyle = isDark ? '#38BDF8' : '#2563EB';
        ctx.font = 'bold 10px monospace';
        ctx.fillText('DYNAMIC TELEMETRY RATED', cx, cy + 14);

      } else if (activeModel === 'hybrid') {
        // --- 4. HYBRID ---
        const rings = 3;
        for (let r = 0; r < rings; r++) {
          const rotSpeed = (r % 2 === 0 ? 1 : -1) * (0.6 + r * 0.2);
          const currentRot = t * rotSpeed;
          const ringRad = 70 + r * 45;

          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(currentRot * 0.3);

          ctx.beginPath();
          ctx.ellipse(0, 0, ringRad, ringRad * 0.48, currentRot, 0, Math.PI * 2);
          ctx.strokeStyle = isDark 
            ? (r === 0 ? '#00F0FF' : r === 1 ? '#38BDF8' : '#00A3E0')
            : (r === 0 ? '#2563EB' : r === 1 ? '#0284C7' : '#0D9488');
          ctx.lineWidth = 2.4 - r * 0.4;
          ctx.stroke();

          for (let k = 0; k < 4; k++) {
            const knAngle = (k / 4) * Math.PI * 2 + currentRot;
            const kx = Math.cos(knAngle) * ringRad;
            const ky = Math.sin(knAngle) * (ringRad * 0.48);
            ctx.fillStyle = isDark ? '#FFFFFF' : '#1E40AF';
            ctx.beginPath();
            ctx.arc(kx, ky, 3, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.restore();
        }

        const coreGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 32);
        coreGlow.addColorStop(0, '#FFFFFF');
        coreGlow.addColorStop(0.4, isDark ? '#00D2FF' : '#3B82F6');
        coreGlow.addColorStop(1, 'rgba(0, 163, 224, 0)');
        ctx.fillStyle = coreGlow;
        ctx.beginPath();
        ctx.arc(cx, cy, 32, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = isDark ? '#030712' : '#FFFFFF';
        ctx.font = 'bold 9px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('HYBRID CORE', cx, cy + 3);
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [activeModel]);

  const modelMeta = MODELS[activeModel];

  return (
    <section className="relative py-24 bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white overflow-hidden border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/25 text-xs font-mono text-blue-700 dark:text-cyan-300">
            <Sliders className="h-3.5 w-3.5" />
            <span>SECTION 3 • ADAPTIVE PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white font-display">
            Built Around{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-[#00D2FF] dark:via-[#38BDF8] dark:to-[#60A5FA]">
              Flexible Pricing
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Support evolving business models with flexible billing structures designed around recurring services, usage, tiers, add-ons and changing customer requirements.
          </p>
        </div>

        {/* Central 3D Visual Adaptive Structure */}
        <div className="relative rounded-3xl bg-white dark:bg-[#070E1E]/80 border border-slate-200 dark:border-cyan-500/20 p-4 sm:p-8 backdrop-blur-2xl shadow-xl shadow-slate-200/50 dark:shadow-navy-950 overflow-hidden transition-colors">
          
          {/* Top Model Selector Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
            {(Object.keys(MODELS) as PricingModel[]).map((key) => {
              const m = MODELS[key];
              const isCurrent = activeModel === key;
              const KeyIcon = m.icon;

              return (
                <button
                  key={key}
                  onClick={() => setActiveModel(key)}
                  className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 ${
                    isCurrent
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/25 border border-blue-500'
                      : 'bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10'
                  }`}
                >
                  <KeyIcon className="h-4 w-4 text-cyan-300" />
                  <span className="font-semibold">{m.title}</span>
                </button>
              );
            })}
          </div>

          {/* Central 3D Canvas Area */}
          <div className="relative w-full h-[360px] sm:h-[420px] flex items-center justify-center">
            <canvas ref={canvasRef} className="w-full h-full" />

            <div className="absolute top-4 left-4 text-xs font-mono text-blue-700 dark:text-cyan-400 bg-white/90 dark:bg-[#0B1528]/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-cyan-500/20 backdrop-blur-md shadow-sm hidden sm:flex items-center gap-2">
              <Activity className="h-3.5 w-3.5 animate-pulse text-blue-600 dark:text-[#00D2FF]" />
              <span>GEOMETRY: <strong>{modelMeta.title.toUpperCase()} STRUCTURE</strong></span>
            </div>

            <div className="absolute top-4 right-4 text-xs font-mono text-slate-500 dark:text-slate-400 bg-white/90 dark:bg-[#0B1528]/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-sm hidden sm:block">
              <span>PRICING ENGINE: <strong>S/4HANA COMPATIBLE</strong></span>
            </div>
          </div>

          {/* Contextual Narrative Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModel}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-4 space-y-1.5">
                <span className="text-[11px] font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider font-semibold">
                  {modelMeta.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {modelMeta.tagline}
                </h3>
              </div>

              <div className="md:col-span-5 space-y-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-l md:border-slate-200 dark:md:border-white/10 md:pl-6">
                <p>{modelMeta.description}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{modelMeta.howItWorks}</p>
              </div>

              <div className="md:col-span-3 rounded-xl bg-slate-50 dark:bg-[#0B1528]/60 border border-slate-200 dark:border-cyan-500/20 p-4 space-y-1 text-xs">
                <div className="flex items-center gap-1.5 text-blue-700 dark:text-cyan-300 font-semibold">
                  <Shield className="h-3.5 w-3.5" />
                  <span>SAP S/4HANA Synergy</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">{modelMeta.sapBenefit}</p>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
