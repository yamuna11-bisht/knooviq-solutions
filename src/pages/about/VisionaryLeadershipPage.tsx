import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  ShieldCheck, 
  Users, 
  Award,
  Compass,
  Target,
  Sparkles,
  Zap,
  TrendingUp,
  Cpu,
  Globe2,
  Layers,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { AboutSubnav } from '../../components/AboutSubnav';

// SECTION 1: Leadership Philosophy Cards
const PHILOSOPHY_CARDS = [
  {
    title: 'Innovation',
    description: 'Embracing new ideas, technologies, and smarter ways of working.',
    icon: Lightbulb,
    tenet: 'Progressive Engineering'
  },
  {
    title: 'Integrity',
    description: 'Building trust through transparency, accountability, and ethical decisions.',
    icon: ShieldCheck,
    tenet: 'Uncompromising Ethics'
  },
  {
    title: 'People',
    description: 'Empowering people, encouraging growth, and creating a culture of collaboration.',
    icon: Users,
    tenet: 'Human-Centered Growth'
  },
  {
    title: 'Excellence',
    description: 'Striving for high standards, continuous improvement, and meaningful results.',
    icon: Award,
    tenet: 'Sustained Mastery'
  }
];

// SECTION 2: Vision to Action (5 Stages)
const PROCESS_STEPS = [
  {
    stage: '01',
    title: 'Vision',
    desc: 'Define a clear direction for the future.',
    icon: Compass
  },
  {
    stage: '02',
    title: 'Strategy',
    desc: 'Transform ideas into focused and actionable plans.',
    icon: Target
  },
  {
    stage: '03',
    title: 'Innovation',
    desc: 'Use technology, creativity, and new thinking to create better possibilities.',
    icon: Sparkles
  },
  {
    stage: '04',
    title: 'Execution',
    desc: 'Turn strategic ideas into measurable actions and outcomes.',
    icon: Zap
  },
  {
    stage: '05',
    title: 'Impact',
    desc: 'Create lasting value for clients, people, partners, and communities.',
    icon: TrendingUp
  }
];

// SECTION 3: Shaping the Future Focus Areas (Enriched with Curated Corporate Imagery & Capabilities)
const FUTURE_FOCUS_AREAS = [
  {
    title: 'Technology & Innovation',
    desc: 'Exploring smarter technologies and innovative approaches.',
    icon: Cpu,
    tag: 'Next-Gen Core',
    image: '/images/technology_innovation_leadership.jpg',
    capabilities: ['SAP BTP Microservices', 'Autonomous AI Joule Workflows', 'Clean-Core Extensibility']
  },
  {
    title: 'Global Growth',
    desc: 'Creating opportunities and building strong connections across markets.',
    icon: Globe2,
    tag: 'Cross-Border Reach',
    image: '/images/global_growth_leadership.jpg',
    capabilities: ['Multi-Entity Operations', 'Follow-The-Sun 24/7 AMS', 'Cross-Border Regulatory Alignment']
  },
  {
    title: 'Sustainable Progress',
    desc: 'Focusing on responsible and long-term growth.',
    icon: Layers,
    tag: 'Long-Term Value',
    image: '/images/sustainable_progress_leadership.png',
    capabilities: ['Zero-Debt Clean Architecture', 'Greenfield Upgrade Lifecycles', 'Optimized Total Cost of Ownership']
  },
  {
    title: 'Future-Ready People',
    desc: 'Encouraging learning, collaboration, and continuous development.',
    icon: Users,
    tag: 'Continuous Enablement',
    image: '/images/future_ready_people_leadership.jpg',
    capabilities: ['Role-Based Enablement', 'SAP Co-Innovation Labs', 'Autonomous Enterprise Culture']
  }
];

export const VisionaryLeadershipPage: React.FC<{ onOpenContact: (topic?: string) => void }> = ({ onOpenContact }) => {
  return (
    <div className="pb-0 bg-[#F8FAFC] dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-500 overflow-hidden">
      
      {/* Background Aurora Blobs */}
      <div className="aurora-sphere-1 top-20 left-1/4 bg-[#00A3E0]/15 dark:bg-[#00F0FF]/15" />
      <div className="aurora-sphere-2 top-96 right-10 bg-[#6366F1]/15 dark:bg-[#8B5CF6]/20" />

      {/* =========================================================================
          HERO HEADER (UNCHANGED)
          ========================================================================= */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-20 min-h-[540px] lg:h-[580px] lg:min-h-[580px] flex items-center overflow-hidden">
        {/* Clean Background Image with Mild Left Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" 
            alt="Visionary Leadership Boardroom"
            className="w-full h-full object-cover object-center"
          />
          {/* Mild Contrast Scrim: Clear boardroom photo with soft text shading */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/35 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl lg:max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide bg-slate-900/90 border border-indigo-400/40 text-indigo-300 mb-5 backdrop-blur-md shadow-2xl"
            >
              <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_8px_#818CF8]" />
              <span className="font-mono uppercase text-xs tracking-wider font-bold">Governance & Enterprise Steering</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] leading-[1.15] mb-6"
            >
              Visionary <span className="hero-gradient-cyan font-black">Leadership</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-white font-medium drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] leading-relaxed font-sans mb-8 max-w-3xl"
            >
              Decades of combined Fortune-500 SAP leadership, uniting technical clean-core discipline with boardroom strategic clarity. Steering complex cross-border programs with uncompromising accountability and transparent execution.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Board-Level Governance</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Clean-Core Fit-to-Standard Mandate</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Uncompromising Client Accountability</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shared Sub-Navigation Bar */}
      <AboutSubnav activeTabTitle="Visionary Leadership" />

      {/* =========================================================================
          SECTION 1 — LEADERSHIP PHILOSOPHY
          ========================================================================= */}
      <section className="py-24 relative overflow-hidden bg-white dark:bg-[#030712]">
        {/* Subtle Background Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-blue-50/70 dark:bg-blue-900/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-slate-100 dark:bg-white/10 text-[#0A2540] dark:text-cyan-300 border border-slate-200 dark:border-white/10 shadow-xs mb-4"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#0052CC] dark:text-cyan-400" />
              <span>Leadership Philosophy</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]"
            >
              Leading with Vision. <br className="hidden sm:inline" />
              <span className="text-[#0052CC] dark:text-cyan-400">Creating with Purpose.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto"
            >
              KnoovIQ’s leadership philosophy is focused on innovation, integrity, excellence, collaboration, people development, and long-term value creation.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {PHILOSOPHY_CARDS.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.015 }}
                  className="bg-white/95 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/90 dark:border-white/10 hover:border-[#0052CC]/50 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(10,37,64,0.06)] hover:shadow-[0_20px_40px_-10px_rgba(0,82,204,0.14)] group relative overflow-hidden"
                >
                  {/* Top Glowing Blue Gradient Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0052CC] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[#0052CC] dark:text-cyan-400 group-hover:bg-[#0052CC]/10 transition-colors duration-300">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-white/5 px-2.5 py-1 rounded-lg border border-slate-200/60 dark:border-white/5">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-[#0052CC] dark:group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans font-normal">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-[#0052CC] dark:text-cyan-400 font-semibold">
                    <span>{card.tenet}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — VISION TO ACTION
          ========================================================================= */}
      <section className="py-24 relative overflow-hidden bg-[#FAFBFD] dark:bg-[#060D1A] border-y border-slate-200/90 dark:border-white/5">
        {/* Subtle Architectural Dot Matrix Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-white dark:bg-white/10 text-[#0A2540] dark:text-cyan-300 border border-slate-200/90 dark:border-white/10 shadow-xs mb-4"
            >
              <Target className="h-3.5 w-3.5 text-[#0052CC] dark:text-cyan-400" />
              <span>Execution Framework</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]"
            >
              Turning Vision into Impact
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto"
            >
              A disciplined, continuous progression that bridges high-level executive foresight with mission-critical operational outcomes.
            </motion.p>
          </div>

          {/* Desktop & Large Tablet: 5 Connected Horizontal Stages */}
          <div className="hidden lg:block relative py-8">
            {/* Animated Connecting Gradient Line between nodes */}
            <div className="absolute top-[48px] left-[8%] right-[8%] h-[3px] z-0 overflow-hidden">
              <div className="w-full h-full bg-slate-200 dark:bg-slate-800 relative">
                <motion.div 
                  className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#0052CC] to-transparent"
                  initial={{ left: '-33%' }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </div>

            <div className="grid grid-cols-5 gap-5 relative z-10">
              {PROCESS_STEPS.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    whileHover={{ y: -6 }}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* Node Circle with Step Number & Pulse */}
                    <div className="relative mb-6">
                      <div className="h-20 w-20 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 group-hover:border-[#0052CC] flex items-center justify-center shadow-md group-hover:shadow-[0_0_25px_rgba(0,82,204,0.3)] transition-all duration-300 relative z-10">
                        <IconComponent className="h-8 w-8 text-[#0052CC] dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="absolute -bottom-2.5 px-2 py-0.5 rounded-full bg-[#0A2540] text-white text-[10px] font-mono font-bold shadow-xs">
                          0{idx + 1}
                        </span>
                      </div>
                      <div className="absolute inset-0 rounded-2xl bg-[#0052CC]/20 animate-ping opacity-0 group-hover:opacity-100 pointer-events-none" />
                    </div>

                    {/* Step Card Content */}
                    <div className="w-full bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-white/10 group-hover:border-[#0052CC]/50 rounded-2xl p-5 shadow-xs group-hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[160px]">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#0052CC] dark:text-cyan-400 uppercase tracking-wider block mb-1">
                          Stage 0{idx + 1}
                        </span>
                        <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2">
                          {step.title}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile & Tablet Flow: Vertical Connected Stepper */}
          <div className="lg:hidden relative pl-6 sm:pl-8 border-l-2 border-[#0052CC]/30 dark:border-cyan-400/30 space-y-8">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Step Node Marker on the left rail */}
                  <div className="absolute -left-[37px] sm:-left-[45px] top-1.5 h-10 w-10 rounded-xl bg-white dark:bg-slate-900 border-2 border-[#0052CC] flex items-center justify-center shadow-sm">
                    <IconComponent className="h-5 w-5 text-[#0052CC] dark:text-cyan-400" />
                  </div>

                  {/* Card Content */}
                  <div className="bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-white/10 rounded-2xl p-6 shadow-xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-bold text-[#0052CC] dark:text-cyan-400 uppercase tracking-wider">
                        Stage 0{idx + 1}
                      </span>
                      <span className="text-xs font-mono text-slate-400">Step {idx + 1}/5</span>
                    </div>
                    <h4 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — SHAPING THE FUTURE (COMPACT & SLEEK)
          ========================================================================= */}
      <section className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-b from-[#0A192F] via-[#0A2540] to-[#071324] text-white">
        {/* Subtle 3D Futuristic Isometric Rings SVG Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-20">
          <svg viewBox="0 0 400 400" className="w-full h-full animate-[spin_60s_linear_infinite]" style={{ transform: 'perspective(1000px) rotateX(65deg)' }}>
            <circle cx="200" cy="200" r="180" fill="none" stroke="#00A3E0" strokeWidth="1" strokeDasharray="8 12" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="#0052CC" strokeWidth="1.5" strokeDasharray="16 16" />
            <circle cx="200" cy="200" r="100" fill="none" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 8" />
            <circle cx="200" cy="200" r="60" fill="none" stroke="#60A5FA" strokeWidth="1" />
          </svg>
        </div>

        {/* Ambient Radial Colored Light Spotlights */}
        <div className="absolute -top-32 left-1/4 w-[500px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-32 right-1/4 w-[500px] h-[350px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

        {/* Floating Subtle Ambient Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { top: '15%', left: '10%', delay: '0s', size: 'h-1.5 w-1.5' },
            { top: '25%', left: '85%', delay: '1.5s', size: 'h-2 w-2' },
            { top: '70%', left: '15%', delay: '2.5s', size: 'h-2 w-2' },
            { top: '80%', left: '80%', delay: '0.8s', size: 'h-1.5 w-1.5' },
            { top: '45%', left: '92%', delay: '3.2s', size: 'h-1 w-1' },
          ].map((particle, pIdx) => (
            <div
              key={pIdx}
              className={`absolute ${particle.size} rounded-full bg-cyan-400/40 animate-pulse`}
              style={{
                top: particle.top,
                left: particle.left,
                animationDelay: particle.delay,
                boxShadow: '0 0 8px rgba(56, 189, 248, 0.6)'
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-white/10 text-cyan-300 border border-white/20 shadow-sm mb-3.5 backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>Shaping the Future</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-4xl font-black text-white tracking-tight leading-[1.15]"
            >
              Building Tomorrow, Today.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3.5 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto"
            >
              KnoovIQ is driven by a future-focused mindset—embracing innovation, technology, collaboration, and new opportunities to create sustainable growth and meaningful impact.
            </motion.p>
          </div>

          {/* 4 COMPACT FOCUS AREA CARDS WITH VISUAL IMAGERY */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {FUTURE_FOCUS_AREAS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-[#0052CC] hover:bg-white/[0.07] rounded-2xl p-5 transition-all duration-300 group relative overflow-hidden shadow-xl flex flex-col justify-between"
                >
                  {/* Subtle Glowing Gradient Accent on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Thematic Curated Image Header */}
                    <div className="h-32 w-full rounded-xl overflow-hidden relative mb-4 border border-white/10">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Dark Scrim overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent pointer-events-none" />

                      {/* Floating Icon Badge over Image */}
                      <div className="absolute bottom-3 left-3 h-9 w-9 rounded-lg bg-[#0052CC]/85 border border-white/30 text-white flex items-center justify-center shadow-md backdrop-blur-md">
                        <IconComponent className="h-4.5 w-4.5" />
                      </div>

                      {/* Tag Chip */}
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/20 text-[9px] font-mono font-bold text-cyan-300 backdrop-blur-md">
                        {item.tag}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                        Focus Area 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  {/* Capability Tags */}
                  <div className="pt-3 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {item.capabilities.map((cap, cIdx) => (
                        <span 
                          key={cIdx} 
                          className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[9px] font-mono text-slate-300"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-cyan-300 font-semibold pt-1">
                      <span>Strategic Vector</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Compact Strategic Forward Action Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-10 p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div>
              <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                EXECUTIVE PARTNERSHIP INITIATIVE
              </span>
              <h4 className="font-display text-base sm:text-lg font-bold text-white mt-0.5">
                Ready to Architect Tomorrow's Enterprise Foundation?
              </h4>
              <p className="text-xs text-slate-400 font-sans mt-0.5">
                Engage directly with our senior advisory board to assess your clean-core & AI readiness.
              </p>
            </div>

            <button
              onClick={() => onOpenContact('Visionary Leadership: Future-Ready Enterprise Strategy')}
              className="btn-primary-gradient shimmer-sweep rounded-xl px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white font-display inline-flex items-center gap-2 shadow-lg flex-shrink-0 cursor-pointer"
            >
              <span>Connect with Advisory Desk</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
