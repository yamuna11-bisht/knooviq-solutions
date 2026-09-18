import React from 'react';
import { Database, Cloud, Activity, Share2, Smartphone, ShieldCheck, Layers } from 'lucide-react';

export const Fallback2D: React.FC = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-6">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-knooviq-blue/20 via-knooviq-electric/5 to-transparent blur-2xl" />

      {/* Interactive 2D Architecture Ring Layout */}
      <div className="relative flex h-[380px] w-[380px] sm:h-[450px] sm:w-[450px] items-center justify-center rounded-full border border-sky-500/20 bg-navy-900/40 backdrop-blur-xl shadow-2xl shadow-sky-950/80">
        
        {/* Orbital Ring 1 */}
        <div className="absolute h-[80%] w-[80%] rounded-full border border-dashed border-sky-400/20 animate-spin-slow" />
        {/* Orbital Ring 2 */}
        <div className="absolute h-[58%] w-[58%] rounded-full border border-cyan-400/25" />

        {/* Central Hub */}
        <div className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 border-knooviq-electric bg-gradient-to-br from-knooviq-blue to-navy-900 p-3 text-center shadow-[0_0_35px_rgba(0,210,255,0.4)]">
          <Layers className="h-8 w-8 text-knooviq-electric animate-pulse" />
          <span className="mt-1 text-xs font-black tracking-widest text-white">SAP S/4HANA</span>
          <span className="text-[9px] font-semibold text-cyan-200">CORE HUB</span>
        </div>

        {/* Floating Satellite Nodes */}
        <div className="absolute top-4 flex items-center gap-2 rounded-full border border-sky-400/30 bg-navy-950/90 px-3 py-1.5 shadow-lg backdrop-blur-md">
          <Cloud className="h-4 w-4 text-cyan-400" />
          <span className="text-xs font-semibold text-sky-100">SAP BTP Cloud</span>
        </div>

        <div className="absolute bottom-4 flex items-center gap-2 rounded-full border border-sky-400/30 bg-navy-950/90 px-3 py-1.5 shadow-lg backdrop-blur-md">
          <Smartphone className="h-4 w-4 text-sky-400" />
          <span className="text-xs font-semibold text-sky-100">Fiori Mobility</span>
        </div>

        <div className="absolute left-2 flex items-center gap-2 rounded-full border border-sky-400/30 bg-navy-950/90 px-3 py-1.5 shadow-lg backdrop-blur-md">
          <Share2 className="h-4 w-4 text-cyan-400" />
          <span className="text-xs font-semibold text-sky-100">Integration (CPI)</span>
        </div>

        <div className="absolute right-2 flex items-center gap-2 rounded-full border border-sky-400/30 bg-navy-950/90 px-3 py-1.5 shadow-lg backdrop-blur-md">
          <Activity className="h-4 w-4 text-blue-400" />
          <span className="text-xs font-semibold text-sky-100">Live Analytics</span>
        </div>

        <div className="absolute top-16 right-6 flex items-center gap-2 rounded-full border border-sky-400/30 bg-navy-950/90 px-3 py-1.5 shadow-lg backdrop-blur-md">
          <Database className="h-4 w-4 text-sky-300" />
          <span className="text-xs font-semibold text-sky-100">HANA In-Memory</span>
        </div>

        <div className="absolute bottom-16 left-6 flex items-center gap-2 rounded-full border border-sky-400/30 bg-navy-950/90 px-3 py-1.5 shadow-lg backdrop-blur-md">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span className="text-xs font-semibold text-sky-100">24/7 Managed AMS</span>
        </div>
      </div>
    </div>
  );
};
