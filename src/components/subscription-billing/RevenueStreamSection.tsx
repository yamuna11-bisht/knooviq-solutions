import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  FileText, 
  CreditCard, 
  RotateCw
} from 'lucide-react';

interface StreamNode {
  id: string;
  name: string;
  stageName: string;
  tPosition: number;
  description: string;
  metric: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NODES: StreamNode[] = [
  { id: 'customer', name: 'Customer', stageName: 'ORIGIN', tPosition: 0.05, description: 'Enterprise account created with contract profile, legal hierarchy, and tax nexus.', metric: 'Unified Identity', icon: Users },
  { id: 'subscribe', name: 'Subscribe', stageName: 'CONTRACT', tPosition: 0.22, description: 'Commercial plan selection with dynamic entitlements, agreed tiers, and SLA terms.', metric: 'Signed Agreement', icon: FileText },
  { id: 'activate', name: 'Activate', stageName: 'PROVISION', tPosition: 0.38, description: 'Instant service provisioning and telemetry metering hooks activated.', metric: 'Zero-Touch Provision', icon: CheckCircle2 },
  { id: 'bill', name: 'Bill', stageName: 'CALCULATE', tPosition: 0.54, description: 'Real-time rating of usage and recurring fees, ledger compiled for SAP S/4HANA.', metric: 'Compliant Invoice', icon: FileText },
  { id: 'collect', name: 'Collect', stageName: 'SETTLE', tPosition: 0.70, description: 'Automated multi-currency payment capture and open receivables reconciliation.', metric: 'Instant Settlement', icon: CreditCard },
  { id: 'renew', name: 'Renew', stageName: 'CONTINUITY', tPosition: 0.85, description: 'Predictive churn mitigation and automated contract term extension.', metric: 'Continuous Rollover', icon: RotateCw },
  { id: 'recurring-revenue', name: 'Recurring Revenue', stageName: 'DESTINATION', tPosition: 0.98, description: 'Predictable, compounding ARR continuously fueling enterprise expansion.', metric: 'Compounding ARR', icon: TrendingUp },
];

export const RevenueStreamSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeNodeId, setActiveNodeId] = useState<string>('recurring-revenue');
  const [streamSpeed, setStreamSpeed] = useState<number>(1);
  const animationFrameRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 900);
    let height = (canvas.height = 480);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = Math.min(520, Math.max(380, window.innerHeight * 0.55));
    };
    window.addEventListener('resize', handleResize);

    const getStreamPoint = (t: number, yOffset = 0) => {
      const startX = width * 0.06;
      const endX = width * 0.94;
      const x = startX + t * (endX - startX);

      const midY = height * 0.52;
      const wave = Math.sin(t * Math.PI * 2.2 - timeRef.current * 0.8) * 45;
      const y = midY + Math.sin(t * Math.PI) * -35 + wave + yOffset;

      const z = Math.cos(t * Math.PI * 2) * 60;
      const scale = 360 / (360 + z);

      return { x, y, z, scale };
    };

    const packets = Array.from({ length: 50 }, () => ({
      t: Math.random(),
      speed: 0.12 + Math.random() * 0.08,
      size: Math.random() * 2.5 + 1.2,
      yVar: (Math.random() - 0.5) * 16,
    }));

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;
      timeRef.current += dt * streamSpeed;

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      const samples = 140;
      const ribbons = [-12, -6, 0, 6, 12];

      ribbons.forEach((yOff) => {
        ctx.beginPath();
        for (let i = 0; i <= samples; i++) {
          const t = i / samples;
          const pt = getStreamPoint(t, yOff);
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }

        const isCenter = yOff === 0;
        if (isDark) {
          ctx.strokeStyle = isCenter 
            ? 'rgba(0, 240, 255, 0.7)' 
            : `rgba(0, 163, 224, ${0.12 + (1 - Math.abs(yOff) / 14) * 0.25})`;
        } else {
          ctx.strokeStyle = isCenter 
            ? '#2563EB' 
            : `rgba(37, 99, 235, ${0.15 + (1 - Math.abs(yOff) / 14) * 0.25})`;
        }
        ctx.lineWidth = isCenter ? 3.5 : 1.5;
        ctx.stroke();
      });

      packets.forEach((p) => {
        p.t = (p.t + dt * p.speed * streamSpeed) % 1;
        const pt = getStreamPoint(p.t, p.yVar);
        const intensity = 0.3 + p.t * 0.7;

        ctx.fillStyle = isDark ? `rgba(0, 240, 255, ${intensity})` : `rgba(37, 99, 235, ${intensity})`;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, p.size * (1 + p.t * 0.6), 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(pt.x - 12 * intensity, pt.y);
        ctx.lineTo(pt.x, pt.y);
        ctx.strokeStyle = isDark ? `rgba(56, 189, 248, ${intensity * 0.4})` : `rgba(37, 99, 235, ${intensity * 0.3})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      });

      NODES.forEach((n) => {
        const pt = getStreamPoint(n.tPosition);
        const isSelected = activeNodeId === n.id;
        const isDestination = n.id === 'recurring-revenue';

        const radius = isDestination ? 24 : isSelected ? 16 : 10;
        const halo = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, radius * 2.2);
        halo.addColorStop(0, isDestination 
          ? (isDark ? 'rgba(0, 240, 255, 0.7)' : 'rgba(37, 99, 235, 0.5)')
          : (isDark ? 'rgba(0, 210, 255, 0.45)' : 'rgba(37, 99, 235, 0.25)'));
        halo.addColorStop(0.5, isDark ? 'rgba(0, 163, 224, 0.15)' : 'rgba(37, 99, 235, 0.08)');
        halo.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, radius * 2.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = isDark ? '#070E1E' : '#FFFFFF';
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = isDestination 
          ? (isDark ? '#00F0FF' : '#2563EB')
          : isSelected 
            ? (isDark ? '#38BDF8' : '#1D4ED8')
            : (isDark ? 'rgba(56, 189, 248, 0.4)' : '#CBD5E1');
        ctx.lineWidth = isDestination ? 3 : isSelected ? 2.2 : 1.2;
        ctx.stroke();

        ctx.fillStyle = isDestination 
          ? (isDark ? '#FFFFFF' : '#1D4ED8')
          : isSelected 
            ? (isDark ? '#00F0FF' : '#2563EB')
            : (isDark ? '#00A3E0' : '#64748B');
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, isDestination ? 8 : isSelected ? 5 : 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = isDark 
          ? (isSelected || isDestination ? '#FFFFFF' : 'rgba(148, 163, 184, 0.85)')
          : (isSelected || isDestination ? '#0F172A' : '#64748B');
        ctx.font = `bold ${isDestination ? 11 : isSelected ? 10 : 9}px "Plus Jakarta Sans", sans-serif`;
        ctx.textAlign = 'center';
        const labelY = pt.y + (isDestination ? 38 : n.tPosition > 0.5 ? -22 : 24);
        ctx.fillText(n.name, pt.x, labelY);
      });

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [activeNodeId, streamSpeed]);

  const activeNode = NODES.find(n => n.id === activeNodeId) || NODES[NODES.length - 1];
  const Icon = activeNode.icon;

  return (
    <section className="relative py-24 bg-white dark:bg-[#030712] text-slate-900 dark:text-white overflow-hidden border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/25 text-xs font-mono text-blue-700 dark:text-cyan-300">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>SECTION 6 • THE REVENUE STREAM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white font-display">
            From Subscription to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-[#00D2FF] dark:via-[#38BDF8] dark:to-[#60A5FA]">
              Revenue
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Connect subscription events with billing and payment workflows, creating a smoother path from customer activation to recurring revenue.
          </p>
        </div>

        {/* The Revenue Stream Visual */}
        <div className="relative rounded-3xl bg-slate-50 dark:bg-[#070E1E]/80 border border-slate-200 dark:border-cyan-500/20 p-4 sm:p-6 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-navy-950 overflow-hidden transition-colors">
          
          <div className="flex items-center justify-between px-3 pb-3 border-b border-slate-200 dark:border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-[#00D2FF] animate-pulse" />
              <span className="font-mono text-blue-700 dark:text-cyan-300 tracking-wider text-[11px]">
                DIMENSIONAL REVENUE CONDUIT
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px] hidden sm:inline">
                Flow Rate: <strong>{(streamSpeed * 100).toFixed(0)}%</strong>
              </span>
              <button 
                onClick={() => setStreamSpeed(prev => (prev === 1 ? 1.6 : prev === 1.6 ? 0.6 : 1))}
                className="px-2 py-1 rounded bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-[11px] font-mono border border-slate-200 dark:border-transparent"
              >
                Speed: {streamSpeed === 1 ? '1x' : streamSpeed === 1.6 ? '1.6x Fast' : '0.6x Slow'}
              </button>
            </div>
          </div>

          <div className="relative w-full h-[360px] sm:h-[420px]">
            <canvas 
              ref={canvasRef} 
              className="w-full h-full cursor-pointer"
              onClick={() => {
                const currentIndex = NODES.findIndex(n => n.id === activeNodeId);
                const nextIndex = (currentIndex + 1) % NODES.length;
                setActiveNodeId(NODES[nextIndex].id);
              }}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-3 border-t border-slate-200 dark:border-white/10">
            {NODES.map((n) => {
              const isSelected = activeNodeId === n.id;
              const isDest = n.id === 'recurring-revenue';

              return (
                <button
                  key={n.id}
                  onClick={() => setActiveNodeId(n.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 ${
                    isSelected
                      ? isDest 
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold border border-blue-500 shadow-md'
                        : 'bg-blue-50 dark:bg-cyan-500/25 text-blue-700 dark:text-[#00D2FF] font-bold border border-blue-300 dark:border-cyan-400/35 shadow-sm'
                      : 'bg-white dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-transparent'
                  }`}
                >
                  <span>{n.name}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Selected Stage Detail Insight Bar */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-6 p-6 rounded-2xl bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-cyan-500/25 grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-xl shadow-slate-200/50 dark:shadow-none transition-colors"
          >
            <div className="md:col-span-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-cyan-500/15 border border-blue-200 dark:border-cyan-400/30 flex items-center justify-center text-blue-600 dark:text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-blue-600 dark:text-cyan-400 tracking-wider uppercase block font-semibold">
                  STAGE • {activeNode.stageName}
                </span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {activeNode.name}
                </h4>
              </div>
            </div>

            <div className="md:col-span-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-l md:border-slate-200 dark:md:border-white/10 md:pl-6">
              {activeNode.description}
            </div>

            <div className="md:col-span-3 text-right">
              <span className="text-xs px-3 py-1.5 rounded-full bg-blue-50 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/20 font-mono font-medium inline-block">
                {activeNode.metric}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
