import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Repeat, ShieldCheck } from 'lucide-react';

interface InfinitePulseCTAProps {
  onOpenContact: (service?: string) => void;
}

export const InfinitePulseCTA: React.FC<InfinitePulseCTAProps> = ({ onOpenContact }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = 400);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = Math.min(420, Math.max(340, window.innerHeight * 0.45));
    };
    window.addEventListener('resize', handleResize);

    const cycleEvents = [
      { name: 'Renewal', angle: 0 },
      { name: 'Subscription', angle: Math.PI * 0.5 },
      { name: 'Billing Event', angle: Math.PI },
      { name: 'Revenue Cycle', angle: Math.PI * 1.5 },
    ];

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

      const radiusX = Math.min(width * 0.38, 200);
      const radiusY = Math.min(height * 0.32, 110);
      const tilt = 0.35;

      const getPoint = (angle: number) => {
        const x3d = Math.cos(angle) * radiusX;
        const y3d = Math.sin(angle) * radiusY * Math.cos(tilt) - Math.sin(angle * 2) * 12;
        const z3d = Math.sin(angle) * radiusY * Math.sin(tilt);
        const fov = 380;
        const scale = fov / (fov + z3d);
        return { x: cx + x3d * scale, y: cy + y3d * scale, scale, z: z3d };
      };

      // 1. Aura
      const aura = ctx.createRadialGradient(cx, cy, 0, cx, cy, radiusX * 1.4);
      aura.addColorStop(0, isDark ? 'rgba(0, 163, 224, 0.14)' : 'rgba(37, 99, 235, 0.08)');
      aura.addColorStop(0.5, isDark ? 'rgba(0, 82, 204, 0.05)' : 'rgba(37, 99, 235, 0.02)');
      aura.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = aura;
      ctx.beginPath();
      ctx.arc(cx, cy, radiusX * 1.4, 0, Math.PI * 2);
      ctx.fill();

      // 2. Track
      const segments = 100;
      ctx.beginPath();
      for (let i = 0; i <= segments; i++) {
        const a = (i / segments) * Math.PI * 2;
        const pt = getPoint(a);
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      }
      ctx.strokeStyle = isDark ? 'rgba(15, 35, 65, 0.75)' : 'rgba(203, 213, 225, 0.7)';
      ctx.lineWidth = 10;
      ctx.stroke();

      ctx.strokeStyle = isDark ? 'rgba(0, 210, 255, 0.35)' : 'rgba(37, 99, 235, 0.35)';
      ctx.lineWidth = 3;
      ctx.stroke();

      // 3. Junctions
      cycleEvents.forEach((ev) => {
        const pt = getPoint(ev.angle);

        ctx.fillStyle = isDark ? '#070E1E' : '#FFFFFF';
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 10 * pt.scale, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = isDark ? '#00F0FF' : '#2563EB';
        ctx.lineWidth = 1.6;
        ctx.stroke();

        ctx.fillStyle = isDark ? '#38BDF8' : '#1D4ED8';
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 4 * pt.scale, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = isDark ? 'rgba(226, 232, 240, 0.9)' : '#0F172A';
        ctx.font = `bold ${Math.round(10 * pt.scale)}px "Plus Jakarta Sans", sans-serif`;
        ctx.textAlign = 'center';
        const ly = pt.y + (ev.angle > Math.PI * 0.2 && ev.angle < Math.PI * 1.8 ? 24 : -18);
        ctx.fillText(ev.name, pt.x, ly);
      });

      // 4. Endless Pulse
      const pulseAngle = t * 0.8;
      const pulsePt = getPoint(pulseAngle);

      for (let k = 14; k >= 1; k--) {
        const tailA = pulseAngle - k * 0.04;
        const tailPt = getPoint(tailA);
        const alpha = (1 - k / 14) * 0.7;

        ctx.fillStyle = isDark ? `rgba(0, 240, 255, ${alpha})` : `rgba(37, 99, 235, ${alpha})`;
        ctx.beginPath();
        ctx.arc(tailPt.x, tailPt.y, (3 + (1 - k / 14) * 3) * tailPt.scale, 0, Math.PI * 2);
        ctx.fill();
      }

      const pulseGlow = ctx.createRadialGradient(pulsePt.x, pulsePt.y, 0, pulsePt.x, pulsePt.y, 28 * pulsePt.scale);
      pulseGlow.addColorStop(0, '#FFFFFF');
      pulseGlow.addColorStop(0.3, isDark ? 'rgba(0, 240, 255, 0.85)' : 'rgba(37, 99, 235, 0.85)');
      pulseGlow.addColorStop(0.7, isDark ? 'rgba(0, 163, 224, 0.2)' : 'rgba(37, 99, 235, 0.25)');
      pulseGlow.addColorStop(1, 'rgba(0, 163, 224, 0)');
      ctx.fillStyle = pulseGlow;
      ctx.beginPath();
      ctx.arc(pulsePt.x, pulsePt.y, 28 * pulsePt.scale, 0, Math.PI * 2);
      ctx.fill();

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 via-blue-50/20 to-white dark:from-[#070E1E] dark:via-[#0A1931] dark:to-[#030712] text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-white/95 dark:bg-[#070E1E]/90 border border-slate-200 dark:border-cyan-500/30 p-8 sm:p-14 backdrop-blur-2xl shadow-2xl shadow-slate-200/50 dark:shadow-navy-950 overflow-hidden transition-colors">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Narrative & Call to Action */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/25 text-xs font-mono text-blue-700 dark:text-cyan-300">
                <Repeat className="h-3.5 w-3.5 animate-spin-slow" />
                <span>SECTION 7 • THE INFINITE BILLING PULSE</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white font-display leading-[1.12]">
                  Turn Recurring Billing Into a{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-[#00D2FF] dark:via-[#38BDF8] dark:to-[#60A5FA]">
                    Growth Engine
                  </span>
                </h2>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                  Create a more connected subscription experience with automated billing, flexible pricing and streamlined revenue operations.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenContact('Subscription Billing')}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold text-sm shadow-xl shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Talk to an Expert</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-white/10 text-sm font-semibold shadow-sm transition-all duration-200"
                >
                  <span>Explore the Solution</span>
                  <ArrowUpRight className="h-4 w-4 text-blue-600 dark:text-cyan-400" />
                </button>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <ShieldCheck className="h-4 w-4 text-blue-600 dark:text-[#00D2FF]" />
                  <span>SAP S/4HANA Certified</span>
                </div>
                <span>•</span>
                <span>IFRS 15 Compliant</span>
                <span>•</span>
                <span>Enterprise SLA Ready</span>
              </div>
            </div>

            {/* Right: The Infinite Billing Pulse Visual Canvas */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full h-[320px] sm:h-[380px]">
                <canvas ref={canvasRef} className="w-full h-full" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
