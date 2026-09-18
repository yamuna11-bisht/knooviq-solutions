import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  Pause, 
  RotateCw, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Repeat, 
  CreditCard, 
  FileText, 
  UserCheck 
} from 'lucide-react';

interface SubscriptionHeroProps {
  onOpenContact: (service?: string) => void;
}

interface PulseStage {
  id: string;
  name: string;
  label: string;
  sublabel: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STAGES: PulseStage[] = [
  { id: 'subscribe', name: 'SUBSCRIBE', label: 'Tenant Provisioned', sublabel: 'Plan contract initiated', color: '#00A3E0', icon: UserCheck },
  { id: 'bill', name: 'BILL', label: 'Billing Event', sublabel: 'Usage calculated & billed', color: '#2563EB', icon: FileText },
  { id: 'pay', name: 'PAY', label: 'Payment Settlement', sublabel: 'Multi-gateway reconciliation', color: '#0D9488', icon: CreditCard },
  { id: 'renew', name: 'RENEW', label: 'Cycle Rollover', sublabel: 'Contract extension activated', color: '#4F46E5', icon: Repeat },
  { id: 'repeat', name: 'REPEAT', label: 'Perpetual Growth', sublabel: 'Recurring lifecycle restarted', color: '#0284C7', icon: Zap },
];

export const SubscriptionHero: React.FC<SubscriptionHeroProps> = ({ onOpenContact }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [systemCycleCount, setSystemCycleCount] = useState(142);
  const [pulseSpeed, setPulseSpeed] = useState(1);
  const animationFrameRef = useRef<number | null>(null);
  const pulsePosRef = useRef(0);

  // Interactive 3D Canvas Mechanical Financial Engine with Dynamic Theme Awareness
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 700);
    let height = (canvas.height = 560);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = Math.min(580, Math.max(460, window.innerHeight * 0.6));
    };
    window.addEventListener('resize', handleResize);

    const ambientParticles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      size: number;
      alpha: number;
    }> = Array.from({ length: 40 }, () => ({
      x: (Math.random() - 0.5) * 460,
      y: (Math.random() - 0.5) * 340,
      z: (Math.random() - 0.5) * 200,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      vz: (Math.random() - 0.5) * 0.15,
      size: Math.random() * 1.8 + 0.6,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      if (isPlaying) {
        pulsePosRef.current = (pulsePosRef.current + dt * 0.16 * pulseSpeed) % 1;
        const currentStage = Math.floor(pulsePosRef.current * STAGES.length);
        setActiveStageIndex(currentStage);
      }

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      const cx = width / 2;
      const cy = height / 2;
      const radiusX = Math.min(width * 0.38, 240);
      const radiusY = Math.min(height * 0.28, 130);
      const tilt = 0.32;

      const get3DPoint = (t: number, zOffset = 0) => {
        const angle = t * Math.PI * 2;
        const x3d = Math.cos(angle) * radiusX;
        const y3d = Math.sin(angle) * radiusY * Math.cos(tilt) - Math.sin(angle * 2) * 18;
        const z3d = Math.sin(angle) * radiusY * Math.sin(tilt) + zOffset;

        const fov = 420;
        const scale = fov / (fov + z3d);
        const screenX = cx + x3d * scale;
        const screenY = cy + y3d * scale;

        return { x: screenX, y: screenY, z: z3d, scale, angle };
      };

      // 1. Draw Ambient Financial Particles
      ambientParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;
        if (p.x < -300) p.x = 300;
        if (p.x > 300) p.x = -300;
        if (p.y < -200) p.y = 200;
        if (p.y > 200) p.y = -200;

        const fov = 400;
        const scale = fov / (fov + p.z);
        const px = cx + p.x * scale;
        const py = cy + p.y * scale;

        ctx.fillStyle = isDark ? `rgba(0, 163, 224, ${p.alpha * 0.5})` : `rgba(37, 99, 235, ${p.alpha * 0.4})`;
        ctx.beginPath();
        ctx.arc(px, py, p.size * scale, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw 3D Mechanical Rail Base
      const segments = 120;
      
      // Bottom shadow track
      ctx.beginPath();
      for (let i = 0; i <= segments; i++) {
        const pt = get3DPoint(i / segments, 25);
        if (i === 0) ctx.moveTo(pt.x, pt.y + 14);
        else ctx.lineTo(pt.x, pt.y + 14);
      }
      ctx.strokeStyle = isDark ? 'rgba(0, 40, 80, 0.25)' : 'rgba(203, 213, 225, 0.6)';
      ctx.lineWidth = 14;
      ctx.lineCap = 'round';
      ctx.stroke();

      // Outer Metal Rail
      ctx.beginPath();
      for (let i = 0; i <= segments; i++) {
        const pt = get3DPoint(i / segments, 0);
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      }
      ctx.strokeStyle = isDark ? 'rgba(30, 41, 59, 0.9)' : 'rgba(148, 163, 184, 0.8)';
      ctx.lineWidth = 8;
      ctx.stroke();

      // Inner Glass Conduit
      ctx.beginPath();
      for (let i = 0; i <= segments; i++) {
        const pt = get3DPoint(i / segments, 0);
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      }
      ctx.strokeStyle = isDark ? 'rgba(0, 163, 224, 0.35)' : 'rgba(37, 99, 235, 0.3)';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Mechanical Precision Tick Marks
      for (let i = 0; i < 40; i++) {
        const pt = get3DPoint(i / 40);
        ctx.save();
        ctx.translate(pt.x, pt.y);
        ctx.fillStyle = i % 5 === 0 
          ? (isDark ? 'rgba(0, 210, 255, 0.9)' : '#2563EB')
          : (isDark ? 'rgba(56, 189, 248, 0.3)' : 'rgba(148, 163, 184, 0.4)');
        ctx.beginPath();
        ctx.arc(0, 0, i % 5 === 0 ? 2.5 * pt.scale : 1.2 * pt.scale, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 3. Draw Stage Milestone Junctions
      STAGES.forEach((stage, idx) => {
        const t = idx / STAGES.length;
        const pt = get3DPoint(t);
        const isActive = activeStageIndex === idx;

        if (isActive) {
          const glowGrad = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, 45 * pt.scale);
          glowGrad.addColorStop(0, isDark ? 'rgba(0, 210, 255, 0.45)' : 'rgba(37, 99, 235, 0.35)');
          glowGrad.addColorStop(0.5, isDark ? 'rgba(0, 163, 224, 0.15)' : 'rgba(37, 99, 235, 0.1)');
          glowGrad.addColorStop(1, 'rgba(0, 163, 224, 0)');
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 45 * pt.scale, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.save();
        ctx.translate(pt.x, pt.y);

        // Node chassis
        ctx.fillStyle = isDark ? (isActive ? '#070E1E' : '#0B1528') : (isActive ? '#EFF6FF' : '#FFFFFF');
        ctx.beginPath();
        ctx.arc(0, 0, (isActive ? 16 : 12) * pt.scale, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = isActive 
          ? (isDark ? '#00D2FF' : '#2563EB') 
          : (isDark ? 'rgba(56, 189, 248, 0.4)' : '#CBD5E1');
        ctx.lineWidth = isActive ? 2.8 : 1.5;
        ctx.stroke();

        // Node Core
        ctx.fillStyle = isActive 
          ? (isDark ? '#00F0FF' : '#1D4ED8') 
          : (isDark ? 'rgba(0, 163, 224, 0.6)' : '#94A3B8');
        ctx.beginPath();
        ctx.arc(0, 0, (isActive ? 6.5 : 4) * pt.scale, 0, Math.PI * 2);
        ctx.fill();

        // Label
        ctx.fillStyle = isDark 
          ? (isActive ? '#FFFFFF' : 'rgba(148, 163, 184, 0.8)')
          : (isActive ? '#0F172A' : '#64748B');
        ctx.font = `bold ${Math.round((isActive ? 11 : 9.5) * pt.scale)}px "Plus Jakarta Sans", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(stage.name, 0, (isActive ? 28 : 23) * pt.scale);

        ctx.restore();
      });

      // 4. Draw Traveling Energy Pulse
      const pulseT = pulsePosRef.current;
      const trailLength = 18;

      for (let i = trailLength; i >= 1; i--) {
        const trailT = (pulseT - (i * 0.005) + 1) % 1;
        const pt = get3DPoint(trailT);
        const alpha = (1 - i / trailLength) * 0.7;

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, (4.5 + (1 - i / trailLength) * 4) * pt.scale, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? `rgba(0, 210, 255, ${alpha})` : `rgba(37, 99, 235, ${alpha})`;
        ctx.fill();
      }

      const headPt = get3DPoint(pulseT);

      const pulseGlow = ctx.createRadialGradient(headPt.x, headPt.y, 0, headPt.x, headPt.y, 36 * headPt.scale);
      pulseGlow.addColorStop(0, '#FFFFFF');
      pulseGlow.addColorStop(0.2, isDark ? 'rgba(0, 240, 255, 0.85)' : 'rgba(37, 99, 235, 0.85)');
      pulseGlow.addColorStop(0.6, isDark ? 'rgba(0, 163, 224, 0.35)' : 'rgba(37, 99, 235, 0.25)');
      pulseGlow.addColorStop(1, 'rgba(0, 163, 224, 0)');

      ctx.fillStyle = pulseGlow;
      ctx.beginPath();
      ctx.arc(headPt.x, headPt.y, 36 * headPt.scale, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = isDark ? '#FFFFFF' : '#1E40AF';
      ctx.beginPath();
      ctx.arc(headPt.x, headPt.y, 5 * headPt.scale, 0, Math.PI * 2);
      ctx.fill();

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isPlaying, pulseSpeed]);

  const handleStageClick = (index: number) => {
    setActiveStageIndex(index);
    pulsePosRef.current = index / STAGES.length;
    setSystemCycleCount(prev => prev + 1);
  };

  const activeStage = STAGES[activeStageIndex];
  const IconComponent = activeStage.icon;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/30 dark:from-[#030712] dark:via-[#070E1E] dark:to-[#0A1931] text-slate-900 dark:text-white pt-24 pb-20 border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300">
      
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, #00A3E0 1px, transparent 1px), linear-gradient(to bottom, #00A3E0 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-blue-500/10 dark:from-[#00A3E0]/15 via-indigo-500/10 dark:via-[#0052CC]/10 to-transparent blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE — Large Editorial Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-7 z-10"
          >
            {/* Concept Identifier Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-[#0B1528]/80 border border-blue-200 dark:border-cyan-500/30 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 dark:bg-[#00D2FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-[#00D2FF]"></span>
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-blue-700 dark:text-cyan-300">
                The Billing Pulse • SAP-Grade Architecture
              </span>
            </div>

            {/* Main Editorial Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white font-display leading-[1.08]">
                Subscription Billing, Built for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-[#00D2FF] dark:via-[#38BDF8] dark:to-[#60A5FA]">
                  Business Growth
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-xl">
                Automate recurring billing. Simplify revenue operations.
              </p>
            </div>

            {/* Narrative Brief */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal leading-relaxed max-w-lg">
              Move beyond fragmented invoices and manual renewals. KNOOVIQ Subscription Billing synchronizes contract initiation, automated meter rating, payment clearing, and perpetual renewal into one self-running financial pulse natively integrated with SAP S/4HANA.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenContact('Subscription Billing')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold text-sm shadow-xl shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="#connected-journey"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-white/10 text-sm font-semibold shadow-sm transition-all duration-200"
              >
                <span>Explore the Solution</span>
                <Repeat className="h-4 w-4 text-blue-600 dark:text-cyan-400" />
              </a>
            </div>

            {/* Live Telemetry Indicator Bar */}
            <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-blue-600 dark:text-[#00D2FF]" />
                <span>Cadence: <strong className="text-slate-800 dark:text-slate-200">Real-Time Continuous</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
                <span>S/4HANA: <strong className="text-slate-800 dark:text-slate-200">Certified API Sync</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-cyan-400 font-mono font-bold">CYCLE #{systemCycleCount}</span>
                <span>Active State: <strong className="text-blue-700 dark:text-cyan-300">{activeStage.name}</strong></span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE — “THE SUBSCRIPTION PULSE” 3D Canvas Mechanism */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            
            {/* Interactive Pulse Instrument Frame */}
            <div className="relative w-full rounded-2xl bg-white dark:bg-[#070E1E]/90 border border-slate-200/80 dark:border-cyan-500/20 p-2 sm:p-4 shadow-xl shadow-slate-200/50 dark:shadow-navy-950 backdrop-blur-xl overflow-hidden transition-colors">
              
              {/* Header Bar of Mechanism */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200 dark:border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-[#00D2FF] animate-pulse" />
                  <span className="font-mono text-blue-700 dark:text-cyan-300 font-semibold tracking-wider">
                    THE SUBSCRIPTION PULSE MECHANISM
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1 rounded hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors"
                    title={isPlaying ? "Pause Pulse" : "Resume Pulse"}
                  >
                    {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                  </button>
                  <button 
                    onClick={() => {
                      pulsePosRef.current = 0;
                      setActiveStageIndex(0);
                    }}
                    className="p-1 rounded hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors"
                    title="Reset Cycle"
                  >
                    <RotateCw className="h-3.5 w-3.5" />
                  </button>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/20 font-mono">
                    60 FPS
                  </span>
                </div>
              </div>

              {/* 3D WebGL / Canvas Viewport */}
              <div className="relative w-full h-[380px] sm:h-[420px] flex items-center justify-center">
                <canvas 
                  ref={canvasRef} 
                  className="w-full h-full cursor-pointer"
                  onClick={() => setActiveStageIndex((prev) => (prev + 1) % STAGES.length)}
                />

                {/* Real-time Dynamic Stage Telemetry Badge */}
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none flex justify-center">
                  <motion.div 
                    key={activeStage.id}
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.25 }}
                    className="pointer-events-auto bg-white/95 dark:bg-[#0B1528]/95 border border-slate-200 dark:border-cyan-500/30 rounded-xl px-4 py-2.5 shadow-xl backdrop-blur-md flex items-center justify-between gap-4 max-w-md w-full"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-blue-50 dark:bg-cyan-500/15 border border-blue-200 dark:border-cyan-400/30 flex items-center justify-center text-blue-600 dark:text-cyan-300">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-blue-700 dark:text-[#00D2FF] tracking-wider uppercase">
                            {activeStage.name}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                            STEP {activeStageIndex + 1}/5
                          </span>
                        </div>
                        <p className="text-xs text-slate-800 dark:text-slate-200 font-medium">{activeStage.label}</p>
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono hidden sm:inline">
                      {activeStage.sublabel}
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Interactive Stage Selectors along the bottom */}
              <div className="grid grid-cols-5 gap-1 pt-2 border-t border-slate-200 dark:border-white/10">
                {STAGES.map((st, i) => {
                  const isCurrent = activeStageIndex === i;
                  return (
                    <button
                      key={st.id}
                      onClick={() => handleStageClick(i)}
                      className={`px-1.5 py-2 rounded-lg text-center transition-all duration-200 ${
                        isCurrent 
                          ? 'bg-blue-50 dark:bg-cyan-500/20 border border-blue-300 dark:border-cyan-400/40 text-blue-800 dark:text-white shadow-sm' 
                          : 'hover:bg-slate-50 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-transparent'
                      }`}
                    >
                      <div className={`text-[10px] font-mono font-bold uppercase tracking-tight ${isCurrent ? 'text-blue-700 dark:text-[#00D2FF]' : ''}`}>
                        {st.name}
                      </div>
                      <div className={`h-1 w-full rounded-full mt-1.5 transition-all ${isCurrent ? 'bg-blue-600 dark:bg-[#00D2FF]' : 'bg-slate-200 dark:bg-white/10'}`} />
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
