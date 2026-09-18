import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Layers, 
  Gauge, 
  Receipt, 
  CreditCard, 
  RotateCw, 
  ChevronRight, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';

interface DnaMilestone {
  id: string;
  name: string;
  role: string;
  tag: string;
  details: string;
  metric: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MILESTONES: DnaMilestone[] = [
  {
    id: 'customer',
    name: 'Customer',
    role: 'Enterprise Tenancy & Profile',
    tag: 'Stage 01 • Origin',
    details: 'Customer master data synchronized across CRM, BTP, and SAP S/4HANA with localized tax residency, payment preferences, and account hierarchy.',
    metric: '100% Unified Master Data',
    icon: Users,
  },
  {
    id: 'plan',
    name: 'Plan',
    role: 'Entitlements & Commercial Terms',
    tag: 'Stage 02 • Agreement',
    details: 'Dynamic rate plan definition encompassing fixed recurring commitments, usage overage tiers, trial periods, and contracted discount schedules.',
    metric: 'Multi-Tier Rate Matrix',
    icon: Layers,
  },
  {
    id: 'usage',
    name: 'Usage',
    role: 'Real-Time Telemetry & Rating',
    tag: 'Stage 03 • Consumption',
    details: 'High-throughput event mediation engine ingesting millions of telemetry signals, rating consumption in real-time, and aggregating unbilled balances.',
    metric: 'Sub-Second Event Rating',
    icon: Gauge,
  },
  {
    id: 'invoice',
    name: 'Invoice',
    role: 'Ledger Posting & Compliance',
    tag: 'Stage 04 • Settlement Event',
    details: 'Automated invoice generation adhering to e-invoicing mandates, cross-jurisdiction tax determination, and seamless posting to SAP FI/CO.',
    metric: 'Automated SAP FI Integration',
    icon: Receipt,
  },
  {
    id: 'payment',
    name: 'Payment',
    role: 'Multi-Gateway Reconciliation',
    tag: 'Stage 05 • Liquidity',
    details: 'Smart dunning engine, automatic payment capture via global PSP gateways, and instant auto-reconciliation of open accounts receivables.',
    metric: '99.4% Automated Settlement',
    icon: CreditCard,
  },
  {
    id: 'renewal',
    name: 'Renewal',
    role: 'Continuity & Expansion',
    tag: 'Stage 06 • Perpetuity',
    details: 'Predictive renewal workflows preventing involuntary churn, extending recurring contracts, and escalating upsell opportunities for the next pulse.',
    metric: 'Zero-Touch Contract Extension',
    icon: RotateCw,
  },
];

export const BillingDnaSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(2);
  const [isRotating, setIsRotating] = useState(true);
  const rotationAngleRef = useRef(0);
  const pulsePosRef = useRef(0.35);
  const animationFrameRef = useRef<number | null>(null);

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

      if (isRotating) {
        rotationAngleRef.current += dt * 0.45;
        pulsePosRef.current = (pulsePosRef.current + dt * 0.12) % 1;
      }

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      const cx = width * 0.46;
      const cy = height * 0.5;
      const helixHeight = height * 0.85;
      const helixRadius = Math.min(width * 0.22, 130);
      const turns = 1.85;
      const totalPoints = 140;

      const strandA: Array<{ x: number; y: number; z: number; scale: number; t: number }> = [];
      const strandB: Array<{ x: number; y: number; z: number; scale: number; t: number }> = [];

      for (let i = 0; i <= totalPoints; i++) {
        const t = i / totalPoints;
        const yBase = -helixHeight / 2 + t * helixHeight;
        const angleA = t * Math.PI * 2 * turns + rotationAngleRef.current;
        const angleB = angleA + Math.PI;

        const x3dA = Math.cos(angleA) * helixRadius;
        const z3dA = Math.sin(angleA) * helixRadius;

        const x3dB = Math.cos(angleB) * helixRadius;
        const z3dB = Math.sin(angleB) * helixRadius;

        const fov = 400;
        const scaleA = fov / (fov + z3dA);
        const scaleB = fov / (fov + z3dB);

        strandA.push({
          x: cx + x3dA * scaleA,
          y: cy + yBase * scaleA,
          z: z3dA,
          scale: scaleA,
          t,
        });

        strandB.push({
          x: cx + x3dB * scaleB,
          y: cy + yBase * scaleB,
          z: z3dB,
          scale: scaleB,
          t,
        });
      }

      // 1. Connecting Cross-Rungs
      const rungs = 24;
      for (let r = 0; r < rungs; r++) {
        const idx = Math.floor((r / rungs) * totalPoints);
        const ptA = strandA[idx];
        const ptB = strandB[idx];
        if (!ptA || !ptB) continue;

        const avgZ = (ptA.z + ptB.z) / 2;
        const alpha = Math.max(0.1, 0.45 - avgZ / 500);

        ctx.beginPath();
        ctx.moveTo(ptA.x, ptA.y);
        ctx.lineTo(ptB.x, ptB.y);
        ctx.strokeStyle = isDark ? `rgba(56, 189, 248, ${alpha})` : `rgba(37, 99, 235, ${alpha * 0.7})`;
        ctx.lineWidth = 1.6;
        ctx.stroke();

        const midX = (ptA.x + ptB.x) / 2;
        const midY = (ptA.y + ptB.y) / 2;
        ctx.fillStyle = isDark ? `rgba(0, 210, 255, ${alpha * 1.5})` : `rgba(37, 99, 235, ${alpha * 1.2})`;
        ctx.beginPath();
        ctx.arc(midX, midY, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Strands
      const drawStrand = (strand: typeof strandA, isPrimary: boolean) => {
        for (let i = 0; i < strand.length - 1; i++) {
          const p1 = strand[i];
          const p2 = strand[i + 1];
          const avgZ = (p1.z + p2.z) / 2;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);

          const depthAlpha = Math.max(0.2, (avgZ + helixRadius) / (helixRadius * 2));
          if (isDark) {
            ctx.strokeStyle = isPrimary 
              ? `rgba(0, 210, 255, ${0.3 + depthAlpha * 0.6})`
              : `rgba(0, 163, 224, ${0.2 + depthAlpha * 0.5})`;
          } else {
            ctx.strokeStyle = isPrimary 
              ? `rgba(37, 99, 235, ${0.4 + depthAlpha * 0.5})`
              : `rgba(2, 132, 199, ${0.3 + depthAlpha * 0.4})`;
          }
          ctx.lineWidth = (2.2 + depthAlpha * 2.5) * ((p1.scale + p2.scale) / 2);
          ctx.stroke();
        }
      };

      drawStrand(strandA, true);
      drawStrand(strandB, false);

      // 3. Traveling Pulse
      const pulseT = pulsePosRef.current;
      const pulseIdx = Math.floor(pulseT * totalPoints);
      const pulsePoint = strandA[pulseIdx];

      if (pulsePoint) {
        const glow = ctx.createRadialGradient(pulsePoint.x, pulsePoint.y, 0, pulsePoint.x, pulsePoint.y, 35 * pulsePoint.scale);
        glow.addColorStop(0, '#FFFFFF');
        glow.addColorStop(0.3, isDark ? 'rgba(0, 240, 255, 0.7)' : 'rgba(37, 99, 235, 0.7)');
        glow.addColorStop(0.7, isDark ? 'rgba(0, 163, 224, 0.2)' : 'rgba(37, 99, 235, 0.2)');
        glow.addColorStop(1, 'rgba(0, 163, 224, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(pulsePoint.x, pulsePoint.y, 35 * pulsePoint.scale, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = isDark ? '#FFFFFF' : '#1E40AF';
        ctx.beginPath();
        ctx.arc(pulsePoint.x, pulsePoint.y, 4.5 * pulsePoint.scale, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Embedded 3D Milestone Markers
      MILESTONES.forEach((ms, idx) => {
        const t = (idx + 0.5) / MILESTONES.length;
        const sampleIdx = Math.floor(t * totalPoints);
        const pt = idx % 2 === 0 ? strandA[sampleIdx] : strandB[sampleIdx];
        if (!pt) return;

        const isSelected = activeMilestoneIndex === idx;

        ctx.save();
        ctx.translate(pt.x, pt.y);

        if (isSelected) {
          const halo = ctx.createRadialGradient(0, 0, 0, 0, 0, 32 * pt.scale);
          halo.addColorStop(0, isDark ? 'rgba(0, 240, 255, 0.5)' : 'rgba(37, 99, 235, 0.4)');
          halo.addColorStop(0.6, isDark ? 'rgba(0, 163, 224, 0.15)' : 'rgba(37, 99, 235, 0.1)');
          halo.addColorStop(1, 'rgba(0, 163, 224, 0)');
          ctx.fillStyle = halo;
          ctx.beginPath();
          ctx.arc(0, 0, 32 * pt.scale, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = isDark ? (isSelected ? '#030712' : '#0B1528') : (isSelected ? '#EFF6FF' : '#FFFFFF');
        ctx.beginPath();
        ctx.arc(0, 0, (isSelected ? 11 : 7.5) * pt.scale, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = isSelected 
          ? (isDark ? '#00F0FF' : '#2563EB') 
          : (isDark ? 'rgba(56, 189, 248, 0.5)' : '#CBD5E1');
        ctx.lineWidth = isSelected ? 2.5 : 1.2;
        ctx.stroke();

        ctx.fillStyle = isSelected ? (isDark ? '#00F0FF' : '#1D4ED8') : (isDark ? '#38BDF8' : '#64748B');
        ctx.beginPath();
        ctx.arc(0, 0, (isSelected ? 4 : 2.5) * pt.scale, 0, Math.PI * 2);
        ctx.fill();

        // Safe Label Pill Rendering
        const labelX = (idx % 2 === 0 ? 18 : -18) * pt.scale;
        ctx.textAlign = idx % 2 === 0 ? 'left' : 'right';
        ctx.textBaseline = 'middle';

        ctx.fillStyle = isDark 
          ? (isSelected ? 'rgba(7, 14, 30, 0.85)' : 'rgba(3, 7, 18, 0.6)')
          : (isSelected ? 'rgba(239, 246, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)');
        
        ctx.font = `600 ${Math.round((isSelected ? 11 : 9.5) * pt.scale)}px "Plus Jakarta Sans", sans-serif`;
        const textWidth = ctx.measureText(ms.name).width;
        const pad = 6;
        const rectX = idx % 2 === 0 ? labelX - 2 : labelX - textWidth - pad * 2 + 2;
        const rw = textWidth + pad * 2;
        const rh = 20 * pt.scale;
        const ry = -10 * pt.scale;

        // Safe Rect (never throws)
        ctx.beginPath();
        if (typeof (ctx as any).roundRect === 'function') {
          (ctx as any).roundRect(rectX, ry, rw, rh, 4);
        } else {
          ctx.rect(rectX, ry, rw, rh);
        }
        ctx.fill();

        ctx.strokeStyle = isSelected 
          ? (isDark ? 'rgba(0, 210, 255, 0.4)' : '#93C5FD') 
          : (isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0');
        ctx.lineWidth = 0.8;
        ctx.stroke();

        ctx.fillStyle = isDark 
          ? (isSelected ? '#FFFFFF' : 'rgba(203, 213, 225, 0.85)')
          : (isSelected ? '#1E3A8A' : '#475569');
        ctx.fillText(ms.name, labelX + (idx % 2 === 0 ? pad : -pad), 0);

        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isRotating, activeMilestoneIndex]);

  const activeMilestone = MILESTONES[activeMilestoneIndex];
  const Icon = activeMilestone.icon;

  return (
    <section id="connected-journey" className="relative py-24 bg-white dark:bg-[#030712] text-slate-900 dark:text-white overflow-hidden border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/25 text-xs font-mono text-blue-700 dark:text-cyan-300">
            <Zap className="h-3.5 w-3.5" />
            <span>SECTION 2 • BILLING DNA</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white font-display">
            Every Subscription,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-[#00D2FF] dark:to-[#38BDF8]">
              One Connected Journey
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Connect every stage of the subscription lifecycle through a more intelligent and automated billing experience.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* 3D DNA Canvas Viewport */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl bg-slate-50 dark:bg-[#070E1E]/70 border border-slate-200 dark:border-cyan-500/20 p-3 sm:p-5 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-navy-950 overflow-hidden transition-colors">
              
              <div className="flex items-center justify-between px-2 pb-3 border-b border-slate-200 dark:border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-[#00D2FF] animate-ping" />
                  <span className="font-mono text-blue-700 dark:text-cyan-300 tracking-wider text-[11px]">
                    LIFECYCLE DOUBLE-HELIX ROTATION
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsRotating(!isRotating)}
                    className="px-2 py-1 rounded bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-[11px] font-mono flex items-center gap-1.5 border border-slate-200 dark:border-transparent"
                  >
                    <RotateCw className={`h-3 w-3 ${isRotating ? 'animate-spin' : ''}`} />
                    <span>{isRotating ? 'Pause' : 'Resume'}</span>
                  </button>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/20 font-mono">
                    CYCLE: PERPETUAL
                  </span>
                </div>
              </div>

              <div className="relative w-full h-[400px] sm:h-[480px]">
                <canvas 
                  ref={canvasRef} 
                  className="w-full h-full cursor-pointer"
                  onClick={() => setActiveMilestoneIndex((prev) => (prev + 1) % MILESTONES.length)}
                />
              </div>

              <div className="grid grid-cols-6 gap-1 pt-3 border-t border-slate-200 dark:border-white/10">
                {MILESTONES.map((ms, idx) => {
                  const isCurrent = activeMilestoneIndex === idx;
                  return (
                    <button
                      key={ms.id}
                      onClick={() => setActiveMilestoneIndex(idx)}
                      className={`px-1 py-1.5 rounded text-center transition-all ${
                        isCurrent 
                          ? 'bg-blue-50 dark:bg-cyan-500/20 text-blue-700 dark:text-[#00D2FF] border border-blue-200 dark:border-cyan-400/30 font-bold shadow-sm' 
                          : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 font-medium'
                      }`}
                    >
                      <div className="text-[9px] font-mono uppercase tracking-tight truncate">{ms.name}</div>
                    </button>
                  );
                })}
              </div>

            </div>
          </div>

          {/* RIGHT SIDE — Milestone Architectural Specification Panel */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-700 dark:text-cyan-400 font-bold uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>INTEGRATED SYSTEM REASONING</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight font-display">
                One Subscription. Multiple Connected Events.
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Rather than treating each billing month as a disjointed transaction, KNOOVIQ threads customer identity, entitlement matrices, rating, and renewals into an unbroken genetic sequence.
              </p>
            </div>

            {/* Dynamic Active Milestone Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMilestone.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-cyan-500/30 p-6 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-5 transition-colors"
              >
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-cyan-500/15 border border-blue-200 dark:border-cyan-400/30 flex items-center justify-center text-blue-600 dark:text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider block font-semibold">
                        {activeMilestone.tag}
                      </span>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {activeMilestone.name}
                      </h4>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/20 font-mono font-medium">
                    {activeMilestone.metric}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    {activeMilestone.role}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {activeMilestone.details}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Cycle Alignment: <strong className="text-slate-800 dark:text-slate-200">Active Conduit</strong></span>
                  <button 
                    onClick={() => setActiveMilestoneIndex((prev) => (prev + 1) % MILESTONES.length)}
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-cyan-300 hover:text-blue-700 dark:hover:text-white font-medium transition-colors"
                  >
                    <span>Next Milestone</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528]/50 border border-slate-200 dark:border-white/5 text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <strong className="text-slate-800 dark:text-slate-200">Architectural Note:</strong>
              <p>
                The subscription state machine automatically triggers downstream events without polling delays, guaranteeing complete auditability between SAP S/4HANA Finance and customer touchpoints.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
