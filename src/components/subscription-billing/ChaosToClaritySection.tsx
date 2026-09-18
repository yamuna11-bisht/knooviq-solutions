import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Zap
} from 'lucide-react';

const FLOATING_OUTCOMES = [
  { id: 'reduce-complexity', text: 'Reduce Billing Complexity', pos: 'top-[8%] right-[6%]', delay: 0.1 },
  { id: 'customer-exp', text: 'Improve Customer Experience', pos: 'top-[22%] right-[18%]', delay: 0.2 },
  { id: 'streamline-rev', text: 'Streamline Revenue Operations', pos: 'top-[42%] right-[4%]', delay: 0.3 },
  { id: 'predictable-rev', text: 'Create More Predictable Recurring Revenue', pos: 'top-[58%] right-[16%]', delay: 0.4 },
  { id: 'evolving-models', text: 'Support Evolving Business Models', pos: 'top-[74%] right-[6%]', delay: 0.5 },
  { id: 'renewal-continuity', text: 'Strengthen Renewal Continuity', pos: 'top-[88%] right-[14%]', delay: 0.6 },
];

const STAGES_PROGRESSION = [
  'Complexity',
  'Automation',
  'Clarity',
  'Continuity',
  'Growth',
];

export const ChaosToClaritySection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const timeRef = useRef(0);

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
      height = canvas.height = Math.min(520, Math.max(400, window.innerHeight * 0.55));
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: 1.2 + Math.random() * 1.8,
      entropyY: (Math.random() - 0.5) * 2.5,
      lane: Math.floor(Math.random() * 6),
      size: Math.random() * 2.5 + 1.2,
      label: ['INV #', 'USAGE', 'PAY', 'SUB', 'RENEW', 'DATA'][i % 6],
    }));

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;
      timeRef.current += dt;

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      const t = timeRef.current;
      const coreX = width * 0.48;
      const coreY = height * 0.5;
      const coreRadius = 42;

      // 1. Central Core
      const coreGlow = ctx.createRadialGradient(coreX, coreY, 0, coreX, coreY, coreRadius * 2.2);
      coreGlow.addColorStop(0, isDark ? 'rgba(0, 240, 255, 0.45)' : 'rgba(37, 99, 235, 0.3)');
      coreGlow.addColorStop(0.5, isDark ? 'rgba(0, 163, 224, 0.15)' : 'rgba(37, 99, 235, 0.08)');
      coreGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(coreX, coreY, coreRadius * 2.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = isDark ? '#070E1E' : '#EFF6FF';
      ctx.beginPath();
      ctx.arc(coreX, coreY, coreRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = isDark ? '#00F0FF' : '#2563EB';
      ctx.lineWidth = 2.4;
      ctx.stroke();

      ctx.save();
      ctx.translate(coreX, coreY);
      ctx.rotate(t * 1.2);
      for (let k = 0; k < 6; k++) {
        const ka = (k / 6) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(Math.cos(ka) * 12, Math.sin(ka) * 12);
        ctx.lineTo(Math.cos(ka) * (coreRadius - 8), Math.sin(ka) * (coreRadius - 8));
        ctx.strokeStyle = isDark ? 'rgba(0, 210, 255, 0.6)' : 'rgba(37, 99, 235, 0.6)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      ctx.restore();

      const pulseExpand = (t * 40) % (coreRadius * 1.8);
      ctx.beginPath();
      ctx.arc(coreX, coreY, pulseExpand, 0, Math.PI * 2);
      ctx.strokeStyle = isDark 
        ? `rgba(0, 210, 255, ${1 - pulseExpand / (coreRadius * 1.8)})`
        : `rgba(37, 99, 235, ${1 - pulseExpand / (coreRadius * 1.8)})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = isDark ? '#FFFFFF' : '#0F172A';
      ctx.font = 'bold 9px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('AUTOMATION', coreX, coreY - 4);
      ctx.fillStyle = isDark ? '#00D2FF' : '#2563EB';
      ctx.fillText('CORE', coreX, coreY + 8);

      // 2. Target Lanes
      const rightLanesCount = 6;
      const laneSpacing = height * 0.14;
      const laneStartY = height * 0.15;

      for (let l = 0; l < rightLanesCount; l++) {
        const ly = laneStartY + l * laneSpacing;
        ctx.beginPath();
        ctx.moveTo(coreX + coreRadius, coreY);
        ctx.bezierCurveTo(coreX + 80, coreY, coreX + 120, ly, width, ly);
        ctx.strokeStyle = isDark ? 'rgba(0, 163, 224, 0.14)' : 'rgba(37, 99, 235, 0.12)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // 3. Particles
      particles.forEach((p) => {
        p.x += p.vx;
        if (p.x > width + 40) {
          p.x = -20;
          p.y = Math.random() * height;
        }

        if (p.x < coreX - coreRadius) {
          p.y += p.entropyY + Math.sin(t * 3 + p.id) * 0.8;
          if (p.y < 20) p.y = height - 20;
          if (p.y > height - 20) p.y = 20;

          ctx.fillStyle = p.id % 4 === 0 
            ? (isDark ? 'rgba(244, 63, 94, 0.7)' : 'rgba(225, 29, 72, 0.8)')
            : (isDark ? 'rgba(148, 163, 184, 0.6)' : 'rgba(100, 116, 139, 0.6)');
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();

          if (p.id % 7 === 0) {
            ctx.fillStyle = isDark ? 'rgba(148, 163, 184, 0.5)' : 'rgba(100, 116, 139, 0.6)';
            ctx.font = '8px monospace';
            ctx.fillText(p.label, p.x + 4, p.y);
          }

        } else if (p.x >= coreX - coreRadius && p.x <= coreX + coreRadius) {
          p.y += (coreY - p.y) * 0.12;
          ctx.fillStyle = isDark ? '#00F0FF' : '#2563EB';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 1.3, 0, Math.PI * 2);
          ctx.fill();

        } else {
          const targetY = laneStartY + p.lane * laneSpacing;
          p.y += (targetY - p.y) * 0.08;

          ctx.fillStyle = isDark ? '#00F0FF' : '#2563EB';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 1.1, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(p.x - 14, p.y);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = isDark ? 'rgba(0, 210, 255, 0.4)' : 'rgba(37, 99, 235, 0.4)';
          ctx.lineWidth = 1.4;
          ctx.stroke();
        }
      });

      ctx.fillStyle = isDark ? 'rgba(244, 63, 94, 0.8)' : '#E11D48';
      ctx.font = 'bold 11px monospace';
      ctx.textAlign = 'left';
      ctx.fillText('← COMPLEXITY & FRAGMENTATION', 24, 32);

      ctx.fillStyle = isDark ? 'rgba(0, 210, 255, 0.9)' : '#2563EB';
      ctx.font = 'bold 11px monospace';
      ctx.textAlign = 'right';
      ctx.fillText('CONTINUOUS REVENUE STREAM →', width - 24, 32);

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <section className="relative py-24 bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white overflow-hidden border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/25 text-xs font-mono text-blue-700 dark:text-cyan-300">
            <Zap className="h-3.5 w-3.5" />
            <span>SECTION 5 • CHAOS TO CLARITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white font-display">
            The Value Behind{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-[#00D2FF] dark:to-[#38BDF8]">
              Every Subscription
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Turn billing complexity into connected, predictable and scalable revenue operations.
          </p>
        </div>

        {/* 5-Stage Progression Flow */}
        <div className="mb-10 flex flex-wrap items-center gap-2 sm:gap-4 py-3 px-5 rounded-2xl bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-cyan-500/20 text-xs font-mono shadow-sm transition-colors">
          {STAGES_PROGRESSION.map((stage, idx) => (
            <React.Fragment key={stage}>
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${idx === 0 ? 'bg-rose-500' : idx === 1 ? 'bg-blue-600 dark:bg-cyan-400 animate-pulse' : 'bg-blue-600 dark:bg-[#00D2FF]'}`} />
                <span className={idx >= 2 ? 'text-slate-900 dark:text-white font-bold' : idx === 1 ? 'text-blue-700 dark:text-cyan-300 font-semibold' : 'text-slate-500 dark:text-slate-400'}>
                  {stage}
                </span>
              </div>
              {idx < STAGES_PROGRESSION.length - 1 && (
                <ArrowRight className="h-3.5 w-3.5 text-slate-400 dark:text-slate-600 hidden sm:inline" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Transformation Canvas Viewport + Floating Typography Outcomes */}
        <div className="relative rounded-3xl bg-white dark:bg-[#070E1E]/80 border border-slate-200 dark:border-cyan-500/20 p-2 sm:p-6 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-navy-950 overflow-hidden min-h-[460px] flex items-center justify-center transition-colors">
          
          <div className="relative w-full h-[420px] sm:h-[480px]">
            <canvas ref={canvasRef} className="w-full h-full" />

            <div className="absolute inset-0 pointer-events-none hidden md:block">
              {FLOATING_OUTCOMES.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay, duration: 0.6 }}
                  className={`absolute ${item.pos} pointer-events-auto group`}
                >
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#070E1E]/85 border border-slate-200 dark:border-cyan-500/30 backdrop-blur-md shadow-md shadow-slate-200/50 dark:shadow-navy-950/80 hover:border-blue-400 dark:hover:border-cyan-400 transition-colors">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-[#00D2FF] group-hover:scale-125 transition-transform" />
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-white tracking-wide">
                      {item.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

        {/* Mobile Fallback List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 md:hidden">
          {FLOATING_OUTCOMES.map((item) => (
            <div key={item.id} className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-cyan-500/20 text-xs text-slate-800 dark:text-slate-200 font-medium shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-[#00D2FF]" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
