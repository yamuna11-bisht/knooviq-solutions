import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cog, 
  Cpu, 
  Layers, 
  FileText, 
  Gauge, 
  CreditCard, 
  RotateCw, 
  CheckCircle2,
  Workflow
} from 'lucide-react';

interface MachineComponent {
  id: string;
  name: string;
  mechanicalRole: string;
  engineeringSpec: string;
  angle: number;
  radius: number;
  gearTeeth: number;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

const COMPONENTS: MachineComponent[] = [
  {
    id: 'sub-mgmt',
    name: 'Subscription Management',
    mechanicalRole: 'Central Governance Rotor',
    engineeringSpec: 'Master lifecycle coordinator tracking tenant entitlement states, contract revisions, pausing, and co-terming provisions.',
    angle: 0,
    radius: 0,
    gearTeeth: 16,
    color: '#0284C7',
    icon: Cpu,
  },
  {
    id: 'rec-billing',
    name: 'Recurring Billing',
    mechanicalRole: 'Rotating Escapement & Cadence Flywheel',
    engineeringSpec: 'Synchronized periodic cadence generator firing billing schedules across monthly, quarterly, and annual billing horizons without clock drift.',
    angle: -Math.PI / 4,
    radius: 130,
    gearTeeth: 12,
    color: '#2563EB',
    icon: Cog,
  },
  {
    id: 'invoicing',
    name: 'Automated Invoicing',
    mechanicalRole: 'Document Generation Press',
    engineeringSpec: 'Real-time billing document compiler applying jurisdictional tax formulas, e-invoice QR stamps, and PDF ledger generation.',
    angle: 0,
    radius: 140,
    gearTeeth: 10,
    color: '#0284C7',
    icon: FileText,
  },
  {
    id: 'usage-tracking',
    name: 'Usage Tracking',
    mechanicalRole: 'High-Precision Metering Sensor',
    engineeringSpec: 'Sub-millisecond event ingestion counter with automated deduplication, quota monitoring, and rating against custom contractual thresholds.',
    angle: Math.PI / 4,
    radius: 130,
    gearTeeth: 14,
    color: '#0D9488',
    icon: Gauge,
  },
  {
    id: 'payment-processing',
    name: 'Payment Processing',
    mechanicalRole: 'Settlement Gate & Gateway Junction',
    engineeringSpec: 'Multi-currency settlement switch executing tokenized credit card captures, direct debits (SEPA/NACHA), and smart dunning retry sequences.',
    angle: (3 * Math.PI) / 4,
    radius: 135,
    gearTeeth: 12,
    color: '#4F46E5',
    icon: CreditCard,
  },
  {
    id: 'renewal-mgmt',
    name: 'Renewal Management',
    mechanicalRole: 'Continuity Loop & Retention Flywheel',
    engineeringSpec: 'Automated term rollover engine evaluating contract expiry windows, automated evergreen extensions, and co-terming alignments.',
    angle: Math.PI,
    radius: 140,
    gearTeeth: 10,
    color: '#6366F1',
    icon: RotateCw,
  },
  {
    id: 'plan-addons',
    name: 'Plan & Add-on Management',
    mechanicalRole: 'Modular Entitlement Docking Bay',
    engineeringSpec: 'Dynamic rate-card matrix allowing mid-cycle upgrades, cross-grades, and modular capability bundling without disrupting active billing cycles.',
    angle: -(3 * Math.PI) / 4,
    radius: 135,
    gearTeeth: 12,
    color: '#0EA5E9',
    icon: Layers,
  },
  {
    id: 'billing-auto',
    name: 'Billing Automation',
    mechanicalRole: 'Transmission Rail & Event Bus',
    engineeringSpec: 'Event-driven orchestration bus connecting CRM, customer portals, SAP S/4HANA Finance, and ERP general ledger entries in hard synchrony.',
    angle: -Math.PI / 2,
    radius: 140,
    gearTeeth: 8,
    color: '#00F0FF',
    icon: Workflow,
  },
];

export const BillingMachineSection: React.FC = () => {
  const [selectedCompId, setSelectedCompId] = useState<string>('sub-mgmt');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const timeRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

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
      height = canvas.height = Math.min(600, Math.max(460, window.innerHeight * 0.65));
    };
    window.addEventListener('resize', handleResize);

    let lastTime = performance.now();

    const drawGear = (
      x: number,
      y: number,
      outerR: number,
      teeth: number,
      rotation: number,
      isSelected: boolean,
      isDark: boolean
    ) => {
      const innerR = outerR * 0.76;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      ctx.beginPath();
      for (let i = 0; i < teeth; i++) {
        const a1 = (i / teeth) * Math.PI * 2;
        const a2 = ((i + 0.35) / teeth) * Math.PI * 2;
        const a3 = ((i + 0.65) / teeth) * Math.PI * 2;
        const a4 = ((i + 1) / teeth) * Math.PI * 2;

        const x1 = Math.cos(a1) * innerR;
        const y1 = Math.sin(a1) * innerR;
        const x2 = Math.cos(a2) * outerR;
        const y2 = Math.sin(a2) * outerR;
        const x3 = Math.cos(a3) * outerR;
        const y3 = Math.sin(a3) * outerR;
        const x4 = Math.cos(a4) * innerR;
        const y4 = Math.sin(a4) * innerR;

        if (i === 0) ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.lineTo(x4, y4);
      }
      ctx.closePath();

      if (isDark) {
        ctx.fillStyle = isSelected ? 'rgba(0, 163, 224, 0.3)' : 'rgba(11, 21, 40, 0.85)';
        ctx.fill();
        ctx.strokeStyle = isSelected ? '#00F0FF' : 'rgba(56, 189, 248, 0.45)';
      } else {
        ctx.fillStyle = isSelected ? 'rgba(219, 234, 254, 0.9)' : 'rgba(241, 245, 249, 0.85)';
        ctx.fill();
        ctx.strokeStyle = isSelected ? '#2563EB' : '#94A3B8';
      }
      ctx.lineWidth = isSelected ? 2.6 : 1.2;
      ctx.stroke();

      // Hub Ring
      ctx.beginPath();
      ctx.arc(0, 0, innerR * 0.45, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? '#070E1E' : '#FFFFFF';
      ctx.fill();
      ctx.strokeStyle = isSelected 
        ? (isDark ? '#00D2FF' : '#2563EB')
        : (isDark ? 'rgba(56, 189, 248, 0.3)' : '#CBD5E1');
      ctx.lineWidth = 1.2;
      ctx.stroke();

      for (let s = 0; s < 4; s++) {
        const sa = (s / 4) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(Math.cos(sa) * innerR * 0.45, Math.sin(sa) * innerR * 0.45);
        ctx.lineTo(Math.cos(sa) * innerR * 0.8, Math.sin(sa) * innerR * 0.8);
        ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.3)' : '#94A3B8';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.restore();
    };

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;
      timeRef.current += dt;

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      const cx = width / 2;
      const cy = height / 2;
      const t = timeRef.current;

      ctx.strokeStyle = isDark ? 'rgba(0, 163, 224, 0.2)' : 'rgba(37, 99, 235, 0.2)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);

      COMPONENTS.forEach((c) => {
        if (c.radius === 0) return;
        const gx = cx + Math.cos(c.angle) * c.radius;
        const gy = cy + Math.sin(c.angle) * c.radius;

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(gx, gy);
        ctx.stroke();
      });

      ctx.beginPath();
      ctx.arc(cx, cy, 135, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      COMPONENTS.forEach((c, idx) => {
        if (c.radius === 0) return;
        const pulseRatio = (t * 0.8 + idx * 0.25) % 1;
        const gx = cx + Math.cos(c.angle) * (c.radius * pulseRatio);
        const gy = cy + Math.sin(c.angle) * (c.radius * pulseRatio);

        ctx.fillStyle = isDark ? '#00F0FF' : '#2563EB';
        ctx.beginPath();
        ctx.arc(gx, gy, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      COMPONENTS.forEach((c) => {
        const isCenter = c.radius === 0;
        const gx = isCenter ? cx : cx + Math.cos(c.angle) * c.radius;
        const gy = isCenter ? cy : cy + Math.sin(c.angle) * c.radius;
        const isSelected = selectedCompId === c.id;

        const rot = isCenter ? t * 0.8 : -t * (c.gearTeeth / 10);
        const gearSize = isCenter ? 44 : 28;

        drawGear(gx, gy, gearSize, c.gearTeeth, rot, isSelected, isDark);

        if (isSelected) {
          const glow = ctx.createRadialGradient(gx, gy, 0, gx, gy, gearSize + 22);
          glow.addColorStop(0, isDark ? 'rgba(0, 240, 255, 0.4)' : 'rgba(37, 99, 235, 0.3)');
          glow.addColorStop(0.6, isDark ? 'rgba(0, 163, 224, 0.1)' : 'rgba(37, 99, 235, 0.08)');
          glow.addColorStop(1, 'rgba(0, 163, 224, 0)');
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(gx, gy, gearSize + 22, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = isDark 
          ? (isSelected ? '#FFFFFF' : 'rgba(148, 163, 184, 0.8)')
          : (isSelected ? '#0F172A' : '#64748B');
        ctx.font = `bold ${isSelected ? '10px' : '9px'} "Plus Jakarta Sans", sans-serif`;
        ctx.textAlign = 'center';
        const labelY = isCenter ? gy + 60 : gy + (c.angle > 0 ? 38 : -34);
        ctx.fillText(c.name, gx, labelY);
      });

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [selectedCompId]);

  const activeComp = COMPONENTS.find(c => c.id === selectedCompId) || COMPONENTS[0];
  const Icon = activeComp.icon;

  return (
    <section className="relative py-24 bg-white dark:bg-[#030712] text-slate-900 dark:text-white overflow-hidden border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/25 text-xs font-mono text-blue-700 dark:text-cyan-300">
            <Cog className="h-3.5 w-3.5 animate-spin-slow" />
            <span>SECTION 4 • CAPABILITIES THAT SCALE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white font-display">
            Capabilities That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-[#00D2FF] dark:to-[#38BDF8]">
              Scale
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            A connected billing engine designed to simplify subscription operations from activation to renewal.
          </p>
        </div>

        {/* The Billing Machine Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT/CENTER: 3D Engine Mechanical Viewport */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl bg-slate-50 dark:bg-[#070E1E]/80 border border-slate-200 dark:border-cyan-500/20 p-4 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-navy-950 overflow-hidden transition-colors">
              
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200 dark:border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-[#00D2FF] animate-pulse" />
                  <span className="font-mono text-blue-700 dark:text-cyan-300 tracking-wider text-[11px]">
                    THE BILLING MACHINE • 8 SYNCHRONIZED MECHANISMS
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/20 font-mono">
                  ONE UNIFIED ENGINE
                </span>
              </div>

              <div className="relative w-full h-[400px] sm:h-[480px]">
                <canvas 
                  ref={canvasRef} 
                  className="w-full h-full cursor-pointer"
                  onClick={() => {
                    const currentIndex = COMPONENTS.findIndex(c => c.id === selectedCompId);
                    const nextIndex = (currentIndex + 1) % COMPONENTS.length;
                    setSelectedCompId(COMPONENTS[nextIndex].id);
                  }}
                />
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-white/10 justify-center">
                {COMPONENTS.map((c) => {
                  const isSelected = selectedCompId === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCompId(c.id)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                        isSelected 
                          ? 'bg-blue-50 dark:bg-cyan-500/25 text-blue-700 dark:text-[#00D2FF] border border-blue-300 dark:border-cyan-400/40 font-bold shadow-sm' 
                          : 'bg-white dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-transparent'
                      }`}
                    >
                      {c.name}
                    </button>
                  );
                })}
              </div>

            </div>
          </div>

          {/* RIGHT: Mechanical Component Diagnostics & Linkage Specification */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider font-semibold">
                ONE CONNECTED ENGINE
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight font-display">
                Synchronized Gears, Not Siloed Modules
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Traditional billing platforms stitch together isolated tools. KNOOVIQ unifies all 8 functional mechanisms into a single mechanical transmission: when usage is measured, rating instantly engages, the document generator stamps the invoice, and the payment gate executes.
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeComp.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-cyan-500/30 p-6 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-4 transition-colors"
              >
                <div className="flex items-center gap-3 border-b border-slate-200 dark:border-white/10 pb-4">
                  <div className="h-11 w-11 rounded-xl bg-blue-50 dark:bg-cyan-500/15 border border-blue-200 dark:border-cyan-400/30 flex items-center justify-center text-blue-600 dark:text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider font-medium">
                      {activeComp.mechanicalRole}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {activeComp.name}
                    </h4>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>{activeComp.engineeringSpec}</p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Engine Transmission: <strong className="text-emerald-600 dark:text-emerald-400">Synchronized</strong></span>
                  <span className="text-blue-700 dark:text-cyan-300 font-mono">Teeth Ratio: {activeComp.gearTeeth}:10</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528]/60 border border-slate-200 dark:border-white/5 text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
              <div className="text-slate-800 dark:text-slate-200 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-cyan-400" />
                <span>Zero-Latency Integration Bus</span>
              </div>
              <p>
                Every mechanical sub-unit pushes journalized events to SAP S/4HANA Finance via SAP BTP Integration Suite with automated retry queues and duplicate rejection.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
