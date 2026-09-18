import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Target,
  RefreshCw,
  TrendingUp,
  Code2,
  Clock,
  Factory,
  Fuel,
  Car,
  ShoppingBag,
  HeartPulse,
  Server,
  Network,
  Smartphone,
  Compass,
  Sliders,
  LifeBuoy
} from 'lucide-react';
import { AboutSubnav } from '../../components/AboutSubnav';

// SECTION 1: Digital & SAP Capabilities (6 Cards)
const CAPABILITIES_LIST = [
  {
    number: '01',
    title: 'SAP Consulting & Outsourcing',
    description: 'Provide expert SAP consulting and technical support to help organizations implement, optimize, and manage enterprise solutions.',
    icon: Compass,
    tag: 'Strategic Advisory'
  },
  {
    number: '02',
    title: 'SAP Application Management',
    description: 'Help organizations manage their core SAP applications and day-to-day operations so they can remain focused on strategic business objectives.',
    icon: Server,
    tag: 'Continuous Operations'
  },
  {
    number: '03',
    title: 'SAP Support',
    description: 'Provide reliable SAP support that helps organizations address operational challenges and maintain business continuity.',
    icon: LifeBuoy,
    tag: 'Operational Continuity'
  },
  {
    number: '04',
    title: 'SAP Integration',
    description: 'Enable seamless integration between business systems to create connected, efficient, and stable enterprise environments.',
    icon: Network,
    tag: 'Connected Ecosystem'
  },
  {
    number: '05',
    title: 'SAP Mobility',
    description: 'Enable access to business processes and information across compatible mobile devices, smartphones, tablets, and desktops.',
    icon: Smartphone,
    tag: 'Anywhere Access'
  },
  {
    number: '06',
    title: 'SAP S/4HANA Migration',
    description: 'Support organizations in moving from legacy ERP environments toward modern SAP S/4HANA solutions.',
    icon: Zap,
    tag: 'Next-Gen Core'
  }
];

// SECTION 2: SAP Excellence Elements (6 Ecosystem Points)
const EXCELLENCE_POINTS = [
  {
    id: 0,
    title: 'Solutions for Success',
    description: 'Tailored SAP solutions aligned with business goals and requirements.',
    icon: Target,
    highlight: 'Goal-Aligned Architecture'
  },
  {
    id: 1,
    title: 'Quality Assurance',
    description: 'A strong focus on dependable, high-quality project outcomes.',
    icon: ShieldCheck,
    highlight: 'Rigorous Verification'
  },
  {
    id: 2,
    title: 'Flexible & Adaptable',
    description: 'Solutions that can be customized to changing business requirements.',
    icon: RefreshCw,
    highlight: 'Dynamic Scalability'
  },
  {
    id: 3,
    title: 'Value for Money',
    description: 'Efficient and cost-conscious solutions designed to maximize business value.',
    icon: TrendingUp,
    highlight: 'Cost & ROI Efficiency'
  },
  {
    id: 4,
    title: 'Quality Code',
    description: 'Robust technical development focused on reliability and performance.',
    icon: Code2,
    highlight: 'Clean Standard Code'
  },
  {
    id: 5,
    title: '24×7 Support',
    description: 'Dedicated support to assist with critical SAP operations and ongoing requirements.',
    icon: Clock,
    highlight: 'Uninterrupted Assistance'
  }
];

// SECTION 3: Industry-Focused Transformation (6 Core Industries)
const INDUSTRIES_LIST = [
  {
    title: 'Manufacturing',
    description: 'Technology solutions designed to support complex manufacturing operations and processes.',
    icon: Factory,
    image: '/images/manufacturing_industry.jpg'
  },
  {
    title: 'Oil & Gas',
    description: 'Enterprise technology capabilities supporting operational efficiency and business processes.',
    icon: Fuel,
    image: '/images/sap_oil_gas_industry.jpg'
  },
  {
    title: 'Automotive',
    description: 'Digital and SAP solutions aligned with the needs of automotive businesses.',
    icon: Car,
    image: '/images/automotive_industry.jpg'
  },
  {
    title: 'Retail',
    description: 'Solutions focused on streamlining business processes and improving operational efficiency.',
    icon: ShoppingBag,
    image: '/images/retail_industry.jpg'
  },
  {
    title: 'Healthcare',
    description: 'Technology solutions supporting connected and efficient business operations.',
    icon: HeartPulse,
    image: '/images/healthcare_industry.jpg'
  },
  {
    title: 'Energy & Utilities',
    description: 'Enterprise solutions designed for complex and evolving operational environments.',
    icon: Zap,
    image: '/images/energy_utilities_industry.png'
  }
];

// Additional industries referenced subtly
const OTHER_INDUSTRIES = [
  'Trading & Distribution',
  'Metals & Mining',
  'Construction',
  'Logistics',
  'Pharmaceuticals',
  'Chemicals',
  'Aerospace & Defence'
];

export const DigitalSapExcellencePage: React.FC<{ onOpenContact: (topic?: string) => void }> = ({ onOpenContact }) => {
  const [activeEcosystemIndex, setActiveEcosystemIndex] = useState<number>(0);
  const ecosystemIntervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const ecosystemPauseTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const startEcosystemAutoCycle = React.useCallback(() => {
    if (ecosystemIntervalRef.current) clearInterval(ecosystemIntervalRef.current);
    ecosystemIntervalRef.current = setInterval(() => {
      setActiveEcosystemIndex((prev) => (prev + 1) % EXCELLENCE_POINTS.length);
    }, 1000);
  }, []);

  const handleEcosystemClick = (id: number) => {
    setActiveEcosystemIndex(id);
    if (ecosystemIntervalRef.current) {
      clearInterval(ecosystemIntervalRef.current);
      ecosystemIntervalRef.current = null;
    }
    if (ecosystemPauseTimerRef.current) {
      clearTimeout(ecosystemPauseTimerRef.current);
    }
    ecosystemPauseTimerRef.current = setTimeout(() => {
      startEcosystemAutoCycle();
    }, 5000);
  };

  useEffect(() => {
    startEcosystemAutoCycle();
    return () => {
      if (ecosystemIntervalRef.current) clearInterval(ecosystemIntervalRef.current);
      if (ecosystemPauseTimerRef.current) clearTimeout(ecosystemPauseTimerRef.current);
    };
  }, [startEcosystemAutoCycle]);

  const scrollToCapabilities = () => {
    const el = document.getElementById('capabilities-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pb-0 bg-[#F8FAFC] dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-500 overflow-hidden">
      
      {/* Dynamic Background Aurora Blobs */}
      <div className="aurora-sphere-1 top-20 left-1/4 bg-[#00A3E0]/15 dark:bg-[#00F0FF]/15 pointer-events-none" />
      <div className="aurora-sphere-2 top-96 right-10 bg-[#6366F1]/15 dark:bg-[#8B5CF6]/20 pointer-events-none" />

      {/* =========================================================================
          HERO HEADER
          Layout, typography, buttons, and animations unchanged.
          Hero image replaced with premium connected enterprise/cloud data visual.
          ========================================================================= */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-20 min-h-[540px] lg:h-[580px] lg:min-h-[580px] flex items-center overflow-hidden">
        {/* Clean Background Image with Mild Left Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/digital_excellence_hero.jpg" 
            alt="Digital and SAP Excellence Enterprise Network"
            className="w-full h-full object-cover object-center"
          />
          {/* Mild Contrast Scrim: Infrastructure clearly visible with soft text shading */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/35 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl lg:max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide bg-slate-900/90 border border-cyan-400/40 text-cyan-300 mb-5 backdrop-blur-md shadow-2xl"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00F0FF]" />
              <span className="font-mono uppercase text-xs tracking-wider font-bold">Clean Core & Modern ERP Architecture</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] leading-[1.15] mb-6"
            >
              Digital & <span className="hero-gradient-cyan font-black">SAP Excellence</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-white font-medium drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] leading-relaxed font-sans mb-8 max-w-3xl"
            >
              Pioneering standard-compliant, upgrade-safe digital core transformations. From precision S/4HANA migrations to side-by-side SAP BTP innovations and automated ABAP modernization, we ensure your ERP remains perpetually agile.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Standard Clean-Core Architecture</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Zero Core Customization Policy</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Side-by-Side BTP Extensibility</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shared Sub-Navigation Bar */}
      <AboutSubnav activeTabTitle="Digital & SAP Excellence" />

      {/* =========================================================================
          SECTION 1 — DIGITAL & SAP CAPABILITIES
          Heading: “Technology. Expertise. Transformation.”
          Supporting: “KnoovIQ combines SAP expertise, technical capabilities, and industry knowledge to help organizations simplify operations, improve efficiency, and accelerate digital transformation.”
          6 Interactive Capability Cards
          ========================================================================= */}
      <section id="capabilities-section" className="py-20 sm:py-24 relative overflow-hidden bg-white dark:bg-[#030712]">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-blue-50/70 dark:bg-blue-900/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-slate-100 dark:bg-white/10 text-[#0A2540] dark:text-cyan-300 border border-slate-200 dark:border-white/10 shadow-xs mb-4"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#0052CC] dark:text-cyan-400" />
              <span>Core Service Portfolio</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]"
            >
              Technology. Expertise. Transformation.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto"
            >
              KnoovIQ combines SAP expertise, technical capabilities, and industry knowledge to help organizations simplify operations, improve efficiency, and accelerate digital transformation.
            </motion.p>
          </div>

          {/* 6 Modern Interactive Capability Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CAPABILITIES_LIST.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="bg-white/95 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/90 dark:border-white/10 hover:border-[#0052CC]/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(10,37,64,0.06)] hover:shadow-[0_20px_35px_-8px_rgba(0,82,204,0.12)] group relative overflow-hidden"
                >
                  {/* Top Glowing Blue Gradient Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#0052CC] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Header: Icon & Monospace Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[#0052CC] dark:text-cyan-400 group-hover:bg-[#0052CC]/10 transition-colors duration-300">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-white/5 px-2.5 py-1 rounded-lg border border-slate-200/60 dark:border-white/5">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2.5 tracking-tight group-hover:text-[#0052CC] dark:group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Micro Footer */}
                  <div className="pt-5 mt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-[#0052CC] dark:text-cyan-400 font-semibold">
                    <span>{item.tag}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — SAP EXCELLENCE (INTERACTIVE ECOSYSTEM DESIGN)
          Heading: “SAP Solutions That Drive Business Value”
          Supporting: “Our approach combines innovation, quality, adaptability, and dependable support to deliver SAP solutions aligned with evolving business needs.”
          Central visual communicating: SAP + Technology + Business + Integration + Transformation
          6 Interactive Points arranged around the center with animated connection indicators
          ========================================================================= */}
      <section className="py-20 sm:py-24 relative overflow-hidden bg-[#FAFBFD] dark:bg-[#060D1A] border-y border-slate-200/90 dark:border-white/5">
        {/* Subtle Architectural Dot Matrix Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-white dark:bg-white/10 text-[#0A2540] dark:text-cyan-300 border border-slate-200/90 dark:border-white/10 shadow-xs mb-4"
            >
              <Target className="h-3.5 w-3.5 text-[#0052CC] dark:text-cyan-400" />
              <span>Enterprise Delivery Model</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]"
            >
              SAP Solutions That Drive Business Value
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto"
            >
              Our approach combines innovation, quality, adaptability, and dependable support to deliver SAP solutions aligned with evolving business needs.
            </motion.p>
          </div>

          {/* Interactive SAP Ecosystem Hub (Desktop & Tablet) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (Points 1, 2, 3) */}
            <div className="lg:col-span-4 space-y-4">
              {EXCELLENCE_POINTS.slice(0, 3).map((item) => {
                const IconComponent = item.icon;
                const isHovered = activeEcosystemIndex === item.id;
                return (
                  <motion.div
                    key={item.id}
                    onClick={() => handleEcosystemClick(item.id)}
                    whileHover={{ x: 6 }}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? 'bg-white dark:bg-slate-900 border-[#0052CC] shadow-[0_10px_30px_-5px_rgba(0,82,204,0.18)] scale-[1.02]'
                        : 'bg-white/80 dark:bg-slate-900/60 border-slate-200/90 dark:border-white/10 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2.5 rounded-xl border transition-colors ${
                        isHovered 
                          ? 'bg-[#0052CC] text-white border-[#0052CC]' 
                          : 'bg-slate-100 dark:bg-white/5 text-[#0052CC] dark:text-cyan-400 border-slate-200/80 dark:border-white/10'
                      }`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={`font-display text-base font-bold transition-colors ${
                            isHovered ? 'text-[#0052CC] dark:text-cyan-300' : 'text-slate-900 dark:text-white'
                          }`}>
                            {item.title}
                          </h4>
                          <span className="text-[10px] font-mono text-slate-400">0{item.id + 1}</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Central Visual: Large Interactive SAP Enterprise Hub */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center py-6">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                {/* Outer Rotating SVG Circuit / Rings */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg viewBox="0 0 300 300" className="w-full h-full animate-[spin_50s_linear_infinite]">
                    <circle cx="150" cy="150" r="140" fill="none" stroke="#0052CC" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.4" />
                    <circle cx="150" cy="150" r="120" fill="none" stroke="#00A3E0" strokeWidth="1" strokeDasharray="12 12" opacity="0.3" />
                  </svg>
                </div>

                {/* Counter Rotating Inner Ring */}
                <div className="absolute inset-4 pointer-events-none">
                  <svg viewBox="0 0 260 260" className="w-full h-full animate-[spin_35s_linear_infinite_reverse]">
                    <circle cx="130" cy="130" r="110" fill="none" stroke="#6366F1" strokeWidth="1" strokeDasharray="4 6" opacity="0.35" />
                  </svg>
                </div>

                {/* Central Core Sphere */}
                <div className="relative z-10 w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-[#0A2540] via-[#0F325E] to-[#0A192F] p-1 shadow-[0_0_50px_rgba(0,82,204,0.3)] border-2 border-cyan-400/30 flex flex-col items-center justify-center text-center text-white">
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,163,224,0.2),transparent_70%)]" />
                  
                  <div className="relative z-10 px-3">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-300 font-bold block mb-1">
                      INTELLIGENT CORE
                    </span>
                    <div className="font-display text-2xl font-black tracking-tight text-white flex items-center justify-center gap-1.5">
                      <span>SAP</span>
                      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    </div>
                    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent my-1.5 mx-auto" />
                    <span className="text-[9px] font-mono uppercase text-slate-300 tracking-wider block font-semibold">
                      {EXCELLENCE_POINTS[activeEcosystemIndex]?.highlight || 'Technology • Business • Value'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Central Vector Pill Indicators */}
              <div className="mt-5 flex flex-wrap justify-center gap-1.5 max-w-xs text-center">
                {['SAP', 'Technology', 'Business', 'Integration', 'Transformation'].map((v, i) => (
                  <span 
                    key={i} 
                    className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-mono text-[#0A2540] dark:text-cyan-300 font-bold"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column (Points 4, 5, 6) */}
            <div className="lg:col-span-4 space-y-4">
              {EXCELLENCE_POINTS.slice(3, 6).map((item) => {
                const IconComponent = item.icon;
                const isHovered = activeEcosystemIndex === item.id;
                return (
                  <motion.div
                    key={item.id}
                    onClick={() => handleEcosystemClick(item.id)}
                    whileHover={{ x: -6 }}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? 'bg-white dark:bg-slate-900 border-[#0052CC] shadow-[0_10px_30px_-5px_rgba(0,82,204,0.18)] scale-[1.02]'
                        : 'bg-white/80 dark:bg-slate-900/60 border-slate-200/90 dark:border-white/10 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2.5 rounded-xl border transition-colors ${
                        isHovered 
                          ? 'bg-[#0052CC] text-white border-[#0052CC]' 
                          : 'bg-slate-100 dark:bg-white/5 text-[#0052CC] dark:text-cyan-400 border-slate-200/80 dark:border-white/10'
                      }`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={`font-display text-base font-bold transition-colors ${
                            isHovered ? 'text-[#0052CC] dark:text-cyan-300' : 'text-slate-900 dark:text-white'
                          }`}>
                            {item.title}
                          </h4>
                          <span className="text-[10px] font-mono text-slate-400">0{item.id + 1}</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — INDUSTRY-FOCUSED TRANSFORMATION
          Heading: “SAP Expertise Across Industries”
          Supporting: “Our experience across diverse industries enables us to understand complex business environments and deliver technology solutions aligned with industry-specific requirements.”
          Industry Cards: Manufacturing, Oil & Gas, Automotive, Retail, Healthcare, Energy & Utilities
          Subtle reference to: Trading & Distribution, Metals & Mining, Construction, Logistics, etc.
          ========================================================================= */}
      <section className="py-20 sm:py-24 relative overflow-hidden bg-white dark:bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-slate-100 dark:bg-white/10 text-[#0A2540] dark:text-cyan-300 border border-slate-200 dark:border-white/10 shadow-xs mb-4"
            >
              <Factory className="h-3.5 w-3.5 text-[#0052CC] dark:text-cyan-400" />
              <span>Domain Specialization</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]"
            >
              SAP Expertise Across Industries
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto"
            >
              Our experience across diverse industries enables us to understand complex business environments and deliver technology solutions aligned with industry-specific requirements.
            </motion.p>
          </div>

          {/* 6 Core Industry Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
            {INDUSTRIES_LIST.map((ind, idx) => {
              const IconComponent = ind.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900/80 p-5 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Thematic Photographic Thumbnail with Gradient Scrim */}
                    <div className="h-36 w-full rounded-xl overflow-hidden relative mb-4 border border-slate-100 dark:border-white/10">
                      <img 
                        src={ind.image} 
                        alt={ind.title} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" />

                      {/* Floating Category Icon */}
                      <div className="absolute bottom-3 left-3 h-9 w-9 rounded-lg bg-[#0052CC]/90 border border-white/30 text-white flex items-center justify-center shadow-md backdrop-blur-md">
                        <IconComponent className="h-4.5 w-4.5" />
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-[#0052CC] dark:group-hover:text-cyan-300 transition-colors">
                      {ind.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {ind.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-[#0052CC] dark:text-cyan-400 font-semibold">
                    <span>Enterprise Practice</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Subtle Reference to Other Industries */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/90 dark:border-white/10 text-center">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold block mb-3">
              Also Delivering Specialized Enterprise Capabilities Across
            </span>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
              {OTHER_INDUSTRIES.map((item, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 shadow-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CTA
          Heading: “Ready to Transform Your Business?”
          Supporting: “Explore how SAP expertise and digital solutions can help your organization build a more connected, efficient, and future-ready enterprise.”
          Buttons: Explore Our Solutions & Contact Us
          ========================================================================= */}
      <section className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-b from-[#0A192F] via-[#0A2540] to-[#071324] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-white/10 text-cyan-300 border border-white/20 shadow-sm mb-4 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Next Steps</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]"
          >
            Ready to Transform Your Business?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto mb-8"
          >
            Explore how SAP expertise and digital solutions can help your organization build a more connected, efficient, and future-ready enterprise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToCapabilities}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-display text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer backdrop-blur-md"
            >
              Explore Our Solutions
            </button>
            <button
              onClick={() => onOpenContact('Digital & SAP Excellence Consultation')}
              className="w-full sm:w-auto btn-primary-gradient shimmer-sweep px-7 py-3.5 rounded-xl text-white font-display text-xs font-bold uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

