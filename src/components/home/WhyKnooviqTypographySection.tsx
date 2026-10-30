import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight } from 'lucide-react';

interface PlatformCapability {
  step: string;
  badge: string;
  tag: string;
  title: string;
  desc: string;
  renderIcon: () => React.ReactNode;
}

export const WhyKnooviqTypographySection: React.FC = () => {
  const capabilities: PlatformCapability[] = [
    {
      step: '01',
      badge: 'PHASE 01',
      tag: 'Clean Core ERP',
      title: 'Innovation',
      desc: 'Extensible cloud architecture keeping your core ERP pristine and adaptable.',
      renderIcon: () => (
        <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none">
          {/* Cloud Outline */}
          <path
            d="M 18 40 C 13 40, 9 35, 9 30 C 9 25, 13 21, 18 20 C 19 14, 25 9, 32 9 C 39 9, 45 13, 47 19 C 51 19, 55 23, 55 28 C 55 34, 51 39, 45 40"
            stroke="#0A1931"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Left Pin */}
          <circle cx="23" cy="29" r="2.4" stroke="#0070C0" strokeWidth="2.2" fill="#E0F2FE" />
          <line x1="23" y1="31.5" x2="23" y2="46" stroke="#0070C0" strokeWidth="2.4" strokeLinecap="round" />
          {/* Middle Pin */}
          <circle cx="32" cy="23" r="2.4" stroke="#00A3E0" strokeWidth="2.2" fill="#E0F2FE" />
          <line x1="32" y1="25.5" x2="32" y2="50" stroke="#00A3E0" strokeWidth="2.4" strokeLinecap="round" />
          {/* Right Pin */}
          <circle cx="41" cy="29" r="2.4" stroke="#0070C0" strokeWidth="2.2" fill="#E0F2FE" />
          <line x1="41" y1="31.5" x2="41" y2="46" stroke="#0070C0" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      step: '02',
      badge: 'PHASE 02',
      tag: 'Autonomous AI',
      title: 'Intelligence',
      desc: 'Predictive models and AI agents embedded directly into operational workflows.',
      renderIcon: () => (
        <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none">
          {/* Head Profile facing right */}
          <path
            d="M 33 48 L 33 43 C 36 42, 38 40, 40 39 C 44 39, 47 37, 48 34 C 49 31, 47 30, 46 29 C 49 28, 50 25, 49 23 C 47 19, 44 18, 41 17 C 39 14, 36 13, 32 13 C 27 13, 23 16, 21 20"
            stroke="#0A1931"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Neck back line */}
          <path d="M 23 37 L 23 48" stroke="#0A1931" strokeWidth="2.5" strokeLinecap="round" />
          {/* Neural Cognitive Pins */}
          <circle cx="22" cy="17" r="2.6" stroke="#0070C0" strokeWidth="2.2" fill="#E0F2FE" />
          <line x1="24" y1="19" x2="31" y2="24" stroke="#0070C0" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="16" cy="26" r="2.6" stroke="#00A3E0" strokeWidth="2.2" fill="#E0F2FE" />
          <line x1="18.5" y1="26" x2="28" y2="27" stroke="#00A3E0" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M 24 32 C 25 35, 27 37, 30 37" stroke="#0070C0" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      step: '03',
      badge: 'PHASE 03',
      tag: 'Elastic Infrastructure',
      title: 'Scalability',
      desc: 'Modular foundations engineered to expand seamlessly across global operations.',
      renderIcon: () => (
        <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none">
          {/* Central Isometric Cube */}
          <polygon points="32,20 44,27 44,41 32,48 20,41 20,27" stroke="#0A1931" strokeWidth="2.4" fill="#F8FAFC" strokeLinejoin="round" />
          <line x1="32" y1="20" x2="32" y2="34" stroke="#0070C0" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="32" y1="34" x2="20" y2="27" stroke="#0070C0" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="32" y1="34" x2="44" y2="27" stroke="#0070C0" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="32" cy="34" r="2.4" stroke="#00A3E0" strokeWidth="2" fill="#E0F2FE" />
          {/* 4 Outer Expansion Brackets */}
          <path d="M 18 15 L 13 15 L 13 20" stroke="#00A3E0" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 46 15 L 51 15 L 51 20" stroke="#00A3E0" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 13 42 L 13 47 L 18 47" stroke="#00A3E0" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 51 42 L 51 47 L 46 47" stroke="#00A3E0" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      step: '04',
      badge: 'PHASE 04',
      tag: 'Enterprise Governance',
      title: 'Reliability',
      desc: 'Enterprise governance and continuous monitoring for uninterrupted operations.',
      renderIcon: () => (
        <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none">
          {/* Server Blades */}
          <rect x="14" y="12" width="30" height="9" rx="4.5" stroke="#0A1931" strokeWidth="2.4" fill="#F8FAFC" />
          <circle cx="20" cy="16.5" r="1.3" fill="#00A3E0" />
          <circle cx="24" cy="16.5" r="1.3" fill="#00A3E0" />

          <rect x="14" y="24" width="30" height="9" rx="4.5" stroke="#0A1931" strokeWidth="2.4" fill="#F8FAFC" />
          <circle cx="20" cy="28.5" r="1.3" fill="#00A3E0" />
          <circle cx="24" cy="28.5" r="1.3" fill="#00A3E0" />

          <path d="M 14 36 H 32" stroke="#0A1931" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="20" cy="40.5" r="1.3" fill="#00A3E0" />
          <circle cx="24" cy="40.5" r="1.3" fill="#00A3E0" />

          {/* Clock / Uptime Gauge */}
          <circle cx="43" cy="41" r="11" stroke="#0070C0" strokeWidth="2.4" fill="white" />
          <line x1="43" y1="41" x2="43" y2="35" stroke="#00A3E0" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="43" y1="41" x2="48" y2="41" stroke="#00A3E0" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  // Mathematical serpentine rail track path coordinates
  const pipelinePath =
    'M 100 270 L 100 444 A 36 36 0 0 0 136 480 L 324 480 A 36 36 0 0 0 360 444 L 360 76 A 36 36 0 0 1 396 40 L 584 40 A 36 36 0 0 1 620 76 L 620 444 A 36 36 0 0 0 656 480 L 844 480 A 36 36 0 0 0 880 444 L 880 76 A 36 36 0 0 1 916 40 L 1104 40 A 36 36 0 0 1 1140 76 L 1140 224 A 36 36 0 0 0 1176 260 L 1220 260';

  return (
    <section id="why-knooviq" className="relative py-20 sm:py-28 bg-[#FCFDFF] text-slate-900 overflow-hidden select-none border-b border-slate-200/80">

      {/* Self-contained Keyframe Animations for Laser Beams & Pulsing Arrow */}
      <style>{`
        @keyframes knooviqBeamFlow {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -1000;
          }
        }
        @keyframes knooviqBeamFlowRev {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        @keyframes knooviqArrowPulse {
          0%, 100% {
            opacity: 0.75;
            filter: drop-shadow(0 0 6px rgba(0, 163, 224, 0.4));
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 18px rgba(0, 240, 255, 0.95)) drop-shadow(0 0 30px rgba(0, 112, 192, 0.6));
          }
        }
        @keyframes knooviqBeaconPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.85;
          }
          50% {
            transform: scale(1.18);
            opacity: 1;
          }
        }
        .knooviq-beam-1 {
          animation: knooviqBeamFlow 4.5s linear infinite;
        }
        .knooviq-beam-2 {
          animation: knooviqBeamFlow 4.5s linear infinite;
          animation-delay: -2.25s;
        }
        .knooviq-core-beam {
          animation: knooviqBeamFlow 4.5s linear infinite;
        }
        .knooviq-arrow-glow {
          animation: knooviqArrowPulse 2.25s ease-in-out infinite;
        }
        .knooviq-vbeam-1 {
          animation: knooviqBeamFlow 3.8s linear infinite;
        }
        .knooviq-vbeam-2 {
          animation: knooviqBeamFlow 3.8s linear infinite;
          animation-delay: -1.9s;
        }
      `}</style>

      {/* Atmospheric High-Tech Background Glows */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(#0070C0 1.2px, transparent 1.2px)',
          backgroundSize: '28px 28px'
        }}
      />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[360px] bg-gradient-to-tr from-sky-200/35 via-blue-100/20 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[360px] bg-gradient-to-bl from-indigo-200/30 via-cyan-100/20 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================================= */}
        {/* TOP EYEBROW                                                               */}
        {/* ========================================================================= */}
        <div className="text-center mb-3.5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/80 bg-gradient-to-r from-sky-50 via-blue-50/60 to-sky-50 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#0070C0] shadow-xs">
              <Layers className="h-3.5 w-3.5 text-[#00A3E0]" />
              The KNOOVIQ Advantage
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-ping" />
            </span>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* HEADLINE STATEMENT                                                        */}
        {/* ========================================================================= */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] tracking-tight leading-tight"
          >
            Technology that <span className="bg-gradient-to-r from-[#00A3E0] to-[#0070C0] bg-clip-text text-transparent">connects.</span>{' '}
            Intelligence that <span className="bg-gradient-to-r from-[#0070C0] to-[#6366F1] bg-clip-text text-transparent">transforms.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Bridging complex ERP systems with cognitive intelligence, delivering scalable enterprise architecture that accelerates business velocity.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP PIPELINE WITH PASSING LIGHT & GLOWING ARROW                       */}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative max-w-[1380px] mx-auto pt-2 pb-6">
          <div className="relative w-full">
            <svg
              className="w-full h-auto overflow-visible"
              viewBox="0 0 1440 540"
              fill="none"
            >
              <defs>
                {/* Neon Laser Glow Filter */}
                <filter id="laserGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Intense Photon Flare Filter */}
                <filter id="intensePhotonGlow" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="9" result="bigBlur" />
                  <feGaussianBlur stdDeviation="3.5" result="sharpBlur" />
                  <feMerge>
                    <feMergeNode in="bigBlur" />
                    <feMergeNode in="sharpBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Soft Card Drop Shadow */}
                <filter id="cardShadow" x="-10%" y="-10%" width="125%" height="125%">
                  <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0A1931" floodOpacity="0.08" />
                </filter>

                {/* Laser Light Gradient for Stream */}
                <linearGradient id="laserStreamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0070C0" stopOpacity="0" />
                  <stop offset="35%" stopColor="#00A3E0" stopOpacity="0.8" />
                  <stop offset="70%" stopColor="#00F0FF" stopOpacity="1" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
                </linearGradient>

                {/* Violet-Cyan Complementary Laser Gradient */}
                <linearGradient id="violetLaserGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0" />
                  <stop offset="40%" stopColor="#8B5CF6" stopOpacity="0.8" />
                  <stop offset="75%" stopColor="#00E5FF" stopOpacity="1" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
                </linearGradient>

                {/* Glowing Arrow Gradient */}
                <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0070C0" />
                  <stop offset="60%" stopColor="#00A3E0" />
                  <stop offset="100%" stopColor="#00F0FF" />
                </linearGradient>

                {/* Base Metallic Rail Gradient */}
                <linearGradient id="baseRailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#CBD5E1" />
                  <stop offset="25%" stopColor="#94A3B8" />
                  <stop offset="50%" stopColor="#64748B" />
                  <stop offset="75%" stopColor="#94A3B8" />
                  <stop offset="100%" stopColor="#CBD5E1" />
                </linearGradient>
              </defs>

              {/* 1. Track Under-Glow / Ambient Aura */}
              <path
                d={pipelinePath}
                stroke="#00A3E0"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.1"
                filter="url(#laserGlow)"
              />

              {/* 2. Base Structural Conduit Rail (Outer Pipe) */}
              <path
                d={pipelinePath}
                stroke="#E2E8F0"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* 3. Base High-Tech Track (Core Dark Rail) */}
              <path
                d={pipelinePath}
                stroke="#1E293B"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* 4. Sub-Circuit Guide Line (Dashed Tech Pulses) */}
              <path
                d={pipelinePath}
                stroke="#38BDF8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="4 12"
                opacity="0.35"
              />

              {/* 5. FLOWING LIGHT BEAM 1 (Neon Cyan Beam passing continuously) */}
              <path
                d={pipelinePath}
                stroke="url(#laserStreamGradient)"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="1000"
                strokeDasharray="160 840"
                className="knooviq-beam-1"
                filter="url(#laserGlow)"
              />

              {/* 6. FLOWING LIGHT BEAM 2 (Electric Violet/Cyan Stream, staggered for continuous rhythm) */}
              <path
                d={pipelinePath}
                stroke="url(#violetLaserGradient)"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="1000"
                strokeDasharray="160 840"
                className="knooviq-beam-2"
                filter="url(#laserGlow)"
              />

              {/* 7. WHITE-HOT HYPER-CORE LIGHT (Super sharp central beam) */}
              <path
                d={pipelinePath}
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="1000"
                strokeDasharray="80 920"
                className="knooviq-core-beam"
              />

              {/* 8. PHOTON COMET 1: Physical Orb gliding across the rail with Cometary Tail */}
              <g>
                <animateMotion
                  dur="4.5s"
                  repeatCount="indefinite"
                  rotate="auto"
                  path={pipelinePath}
                />
                {/* Streaming cometary trail */}
                <circle cx="-24" cy="0" r="1.8" fill="#6366F1" opacity="0.35" />
                <circle cx="-16" cy="0" r="2.8" fill="#0070C0" opacity="0.6" />
                <circle cx="-8" cy="0" r="4.2" fill="#00A3E0" opacity="0.85" />
                {/* Glowing photon aura */}
                <circle cx="0" cy="0" r="14" fill="#00F0FF" opacity="0.45" filter="url(#intensePhotonGlow)" />
                <circle cx="0" cy="0" r="8" fill="#00A3E0" opacity="0.95" />
                {/* White core */}
                <circle cx="0" cy="0" r="3.8" fill="#FFFFFF" />
              </g>

              {/* 9. PHOTON COMET 2: Second glowing packet running in tandem */}
              <g>
                <animateMotion
                  dur="4.5s"
                  begin="-2.25s"
                  repeatCount="indefinite"
                  rotate="auto"
                  path={pipelinePath}
                />
                <circle cx="-24" cy="0" r="1.8" fill="#00A3E0" opacity="0.35" />
                <circle cx="-16" cy="0" r="2.8" fill="#8B5CF6" opacity="0.6" />
                <circle cx="-8" cy="0" r="4.2" fill="#00E5FF" opacity="0.85" />
                <circle cx="0" cy="0" r="14" fill="#6366F1" opacity="0.45" filter="url(#intensePhotonGlow)" />
                <circle cx="0" cy="0" r="8" fill="#8B5CF6" opacity="0.95" />
                <circle cx="0" cy="0" r="3.8" fill="#FFFFFF" />
              </g>

              {/* =================================================================== */}
              {/* START OF PIPELINE: Injection Port & Label                           */}
              {/* =================================================================== */}
              <g>
                {/* Glowing start ring */}
                <circle cx="100" cy="270" r="10" fill="#0A1931" stroke="#00A3E0" strokeWidth="3" filter="url(#laserGlow)" />
                <circle cx="100" cy="270" r="4.5" fill="#00F0FF">
                  <animate attributeName="r" values="3.5;6.5;3.5" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* =================================================================== */}
              {/* MILESTONE CHECKPOINTS (Glowing Station Nodes on the Rail)           */}
              {/* =================================================================== */}
              {/* Node 1: Innovation Hub */}
              <g transform="translate(230, 480)">
                <circle cx="0" cy="0" r="16" fill="#00A3E0" opacity="0.15" />
                <circle cx="0" cy="0" r="10" fill="#FFFFFF" stroke="#0070C0" strokeWidth="3" />
                <circle cx="0" cy="0" r="4" fill="#00F0FF">
                  <animate attributeName="r" values="3;5.5;3" dur="2.5s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Node 2: Intelligence Hub */}
              <g transform="translate(490, 40)">
                <circle cx="0" cy="0" r="16" fill="#00A3E0" opacity="0.15" />
                <circle cx="0" cy="0" r="10" fill="#FFFFFF" stroke="#0070C0" strokeWidth="3" />
                <circle cx="0" cy="0" r="4" fill="#00F0FF">
                  <animate attributeName="r" values="3;5.5;3" begin="0.6s" dur="2.5s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Node 3: Scalability Hub */}
              <g transform="translate(750, 480)">
                <circle cx="0" cy="0" r="16" fill="#6366F1" opacity="0.15" />
                <circle cx="0" cy="0" r="10" fill="#FFFFFF" stroke="#0070C0" strokeWidth="3" />
                <circle cx="0" cy="0" r="4" fill="#6366F1">
                  <animate attributeName="r" values="3;5.5;3" begin="1.2s" dur="2.5s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Node 4: Reliability Hub */}
              <g transform="translate(1010, 40)">
                <circle cx="0" cy="0" r="16" fill="#8B5CF6" opacity="0.15" />
                <circle cx="0" cy="0" r="10" fill="#FFFFFF" stroke="#0070C0" strokeWidth="3" />
                <circle cx="0" cy="0" r="4" fill="#8B5CF6">
                  <animate attributeName="r" values="3;5.5;3" begin="1.8s" dur="2.5s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Node 5: Output Turn Hub (Matching 2nd Image Beacon) */}
              <g transform="translate(1176, 260)">
                <circle cx="0" cy="0" r="16" fill="#00E5FF" opacity="0.2">
                  <animate attributeName="r" values="14;22;14" dur="2.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="0" cy="0" r="10" fill="#FFFFFF" stroke="#0070C0" strokeWidth="3" />
                <circle cx="0" cy="0" r="4" fill="#00F0FF">
                  <animate attributeName="r" values="3;5.5;3" begin="2.2s" dur="2.5s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* =================================================================== */}
              {/* TERMINAL ARROW: Animated Flow Light Passes Out Pointing to Logo     */}
              {/* =================================================================== */}
              <g>
                {/* Multiple expanding radar rings shooting out from arrow tip toward Logo */}
                <circle cx="1220" cy="260" r="6" fill="none" stroke="#00F0FF" strokeWidth="2.5">
                  <animate attributeName="r" values="6;24;42" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.95;0.35;0" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="stroke-width" values="2.5;1.5;0" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="1220" cy="260" r="6" fill="none" stroke="#6366F1" strokeWidth="2.5">
                  <animate attributeName="r" values="6;24;42" begin="1s" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.95;0.35;0" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="stroke-width" values="2.5;1.5;0" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* Base Arrowhead */}
                <path
                  d="M 1202 246 L 1222 260 L 1202 274"
                  stroke="#0A1931"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />

                {/* Animated Glowing Arrowhead Overlay (Light passing through!) */}
                <path
                  d="M 1202 246 L 1222 260 L 1202 274"
                  stroke="url(#arrowGradient)"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  filter="url(#laserGlow)"
                  className="knooviq-arrow-glow"
                />

                {/* Arrowhead Hot Core */}
                <circle cx="1222" cy="260" r="4" fill="#FFFFFF" filter="url(#laserGlow)" />
              </g>

              {/* =================================================================== */}
              {/* TARGET DESTINATION: KNOOVIQ Logo (Referred from 1st Image)          */}
              {/* =================================================================== */}
              <foreignObject x="1242" y="155" width="180" height="210">
                <div className="w-full h-full p-2 flex flex-col items-center justify-center">
                  <div className="w-full h-full rounded-2xl bg-white/95 shadow-[0_8px_30px_rgba(0,112,192,0.12)] hover:shadow-[0_16px_40px_rgba(0,163,224,0.25)] transition-all duration-300 p-3.5 flex flex-col items-center text-center justify-between group backdrop-blur-xs relative overflow-hidden">
                    {/* Destination Pill */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase bg-sky-50 text-[#0070C0] border border-sky-200/80 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] animate-pulse" />
                      Destination
                    </div>

                    {/* Logo Pod containing KNOOVIQ Logo (Image 1) */}
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-sky-50 via-white to-blue-50/60 border border-sky-100 flex items-center justify-center p-1.5 shadow-2xs group-hover:scale-105 group-hover:border-sky-300 group-hover:shadow-[0_0_20px_rgba(0,163,224,0.25)] transition-all duration-300">
                      <img
                        src="/images/knooviq-emblem-transparent.png"
                        alt="KNOOVIQ Logo"
                        className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,112,192,0.2)]"
                      />
                    </div>

                    {/* Brand Identifier */}
                    <div className="my-auto">
                      <h4 className="font-serif text-base font-bold text-[#0A1931] group-hover:text-[#0070C0] transition-colors leading-tight">
                        KNOOVIQ
                      </h4>
                      <p className="text-[10px] font-bold text-sky-700 uppercase tracking-widest mt-0.5">
                        Solutions
                      </p>
                    </div>
                  </div>
                </div>
              </foreignObject>

              {/* =================================================================== */}
              {/* 4 HIGH-TECH PLATFORM CAPABILITY CARDS (Completely Isolated Spacing)  */}
              {/* =================================================================== */}

              {/* Card 1: Innovation (Lower Cradle, perfectly nested) */}
              <foreignObject x="110" y="160" width="240" height="295">
                <div className="w-full h-full p-2 flex flex-col items-center justify-center">
                  <div className="w-full h-full rounded-2xl bg-white/95 border border-slate-200/90 shadow-[0_6px_25px_rgba(10,25,49,0.06)] hover:shadow-[0_16px_36px_rgba(0,112,192,0.14)] hover:border-sky-400 transition-all duration-300 p-5 flex flex-col items-center text-center justify-between group backdrop-blur-xs">
                    {/* Step Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-sky-50 text-[#0070C0] border border-sky-200/80 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] animate-pulse" />
                      {capabilities[0].badge}
                    </div>

                    {/* Icon Pod */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-50 via-white to-blue-50/60 border border-sky-100 flex items-center justify-center shadow-2xs group-hover:scale-110 group-hover:border-sky-300 group-hover:shadow-[0_0_20px_rgba(0,163,224,0.25)] transition-all duration-300">
                      {capabilities[0].renderIcon()}
                    </div>

                    {/* Content */}
                    <div className="my-auto">
                      <h3 className="font-serif text-xl font-bold text-[#0A1931] mb-1.5 group-hover:text-[#0070C0] transition-colors">
                        {capabilities[0].title}
                      </h3>
                      <p className="text-[12.5px] leading-relaxed text-slate-600 line-clamp-3">
                        {capabilities[0].desc}
                      </p>
                    </div>

                    {/* Capability Tag */}
                    <span className="inline-block text-[10.5px] font-semibold text-sky-800 bg-sky-50/90 px-2.5 py-0.5 rounded-md border border-sky-200/60">
                      {capabilities[0].tag}
                    </span>
                  </div>
                </div>
              </foreignObject>

              {/* Card 2: Intelligence (Upper Arch, perfectly nested) */}
              <foreignObject x="370" y="70" width="240" height="295">
                <div className="w-full h-full p-2 flex flex-col items-center justify-center">
                  <div className="w-full h-full rounded-2xl bg-white/95 border border-slate-200/90 shadow-[0_6px_25px_rgba(10,25,49,0.06)] hover:shadow-[0_16px_36px_rgba(0,112,192,0.14)] hover:border-sky-400 transition-all duration-300 p-5 flex flex-col items-center text-center justify-between group backdrop-blur-xs">
                    {/* Step Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-sky-50 text-[#0070C0] border border-sky-200/80 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] animate-pulse" />
                      {capabilities[1].badge}
                    </div>

                    {/* Icon Pod */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-50 via-white to-blue-50/60 border border-sky-100 flex items-center justify-center shadow-2xs group-hover:scale-110 group-hover:border-sky-300 group-hover:shadow-[0_0_20px_rgba(0,163,224,0.25)] transition-all duration-300">
                      {capabilities[1].renderIcon()}
                    </div>

                    {/* Content */}
                    <div className="my-auto">
                      <h3 className="font-serif text-xl font-bold text-[#0A1931] mb-1.5 group-hover:text-[#0070C0] transition-colors">
                        {capabilities[1].title}
                      </h3>
                      <p className="text-[12.5px] leading-relaxed text-slate-600 line-clamp-3">
                        {capabilities[1].desc}
                      </p>
                    </div>

                    {/* Capability Tag */}
                    <span className="inline-block text-[10.5px] font-semibold text-indigo-800 bg-indigo-50/90 px-2.5 py-0.5 rounded-md border border-indigo-200/60">
                      {capabilities[1].tag}
                    </span>
                  </div>
                </div>
              </foreignObject>

              {/* Card 3: Scalability (Lower Cradle, perfectly nested) */}
              <foreignObject x="630" y="160" width="240" height="295">
                <div className="w-full h-full p-2 flex flex-col items-center justify-center">
                  <div className="w-full h-full rounded-2xl bg-white/95 border border-slate-200/90 shadow-[0_6px_25px_rgba(10,25,49,0.06)] hover:shadow-[0_16px_36px_rgba(0,112,192,0.14)] hover:border-sky-400 transition-all duration-300 p-5 flex flex-col items-center text-center justify-between group backdrop-blur-xs">
                    {/* Step Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-sky-50 text-[#0070C0] border border-sky-200/80 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] animate-pulse" />
                      {capabilities[2].badge}
                    </div>

                    {/* Icon Pod */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-50 via-white to-blue-50/60 border border-sky-100 flex items-center justify-center shadow-2xs group-hover:scale-110 group-hover:border-sky-300 group-hover:shadow-[0_0_20px_rgba(0,163,224,0.25)] transition-all duration-300">
                      {capabilities[2].renderIcon()}
                    </div>

                    {/* Content */}
                    <div className="my-auto">
                      <h3 className="font-serif text-xl font-bold text-[#0A1931] mb-1.5 group-hover:text-[#0070C0] transition-colors">
                        {capabilities[2].title}
                      </h3>
                      <p className="text-[12.5px] leading-relaxed text-slate-600 line-clamp-3">
                        {capabilities[2].desc}
                      </p>
                    </div>

                    {/* Capability Tag */}
                    <span className="inline-block text-[10.5px] font-semibold text-blue-800 bg-blue-50/90 px-2.5 py-0.5 rounded-md border border-blue-200/60">
                      {capabilities[2].tag}
                    </span>
                  </div>
                </div>
              </foreignObject>

              {/* Card 4: Reliability (Upper Arch, perfectly nested) */}
              <foreignObject x="890" y="70" width="240" height="295">
                <div className="w-full h-full p-2 flex flex-col items-center justify-center">
                  <div className="w-full h-full rounded-2xl bg-white/95 border border-slate-200/90 shadow-[0_6px_25px_rgba(10,25,49,0.06)] hover:shadow-[0_16px_36px_rgba(0,112,192,0.14)] hover:border-sky-400 transition-all duration-300 p-5 flex flex-col items-center text-center justify-between group backdrop-blur-xs">
                    {/* Step Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-sky-50 text-[#0070C0] border border-sky-200/80 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] animate-pulse" />
                      {capabilities[3].badge}
                    </div>

                    {/* Icon Pod */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-50 via-white to-blue-50/60 border border-sky-100 flex items-center justify-center shadow-2xs group-hover:scale-110 group-hover:border-sky-300 group-hover:shadow-[0_0_20px_rgba(0,163,224,0.25)] transition-all duration-300">
                      {capabilities[3].renderIcon()}
                    </div>

                    {/* Content */}
                    <div className="my-auto">
                      <h3 className="font-serif text-xl font-bold text-[#0A1931] mb-1.5 group-hover:text-[#0070C0] transition-colors">
                        {capabilities[3].title}
                      </h3>
                      <p className="text-[12.5px] leading-relaxed text-slate-600 line-clamp-3">
                        {capabilities[3].desc}
                      </p>
                    </div>

                    {/* Capability Tag */}
                    <span className="inline-block text-[10.5px] font-semibold text-emerald-800 bg-emerald-50/90 px-2.5 py-0.5 rounded-md border border-emerald-200/60">
                      {capabilities[3].tag}
                    </span>
                  </div>
                </div>
              </foreignObject>
            </svg>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE / TABLET VIEW: Connected Vertical Pipeline with Passing Light      */}
        {/* ========================================================================= */}
        <div className="block lg:hidden relative max-w-xl mx-auto pt-4 pb-6">
          <div className="relative pl-8 sm:pl-10">
            {/* Vertical Flow Spine */}
            <div className="absolute left-[13px] sm:left-[17px] top-6 bottom-10 w-1 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="w-full h-40 bg-gradient-to-b from-transparent via-[#00F0FF] to-[#0070C0] rounded-full animate-bounce"
                style={{ animationDuration: '3s' }}
              />
            </div>

            <div className="space-y-6">
              {capabilities.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="relative p-6 rounded-2xl border border-slate-200/90 bg-white/95 shadow-md flex flex-col gap-3 group"
                >
                  {/* Step Connector Node on Spine */}
                  <div className="absolute -left-[30px] sm:-left-[34px] top-7 w-6 h-6 rounded-full bg-white border-3 border-[#0070C0] flex items-center justify-center shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-extrabold uppercase tracking-wider bg-sky-50 text-[#0070C0] border border-sky-200/80">
                      {item.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-sky-50/80 border border-sky-100 flex items-center justify-center flex-shrink-0">
                      {item.renderIcon()}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#0A1931] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Terminal Arrow pointing to KNOOVIQ Logo */}
            <div className="relative mt-8 flex items-center justify-between p-4 rounded-2xl bg-white/95 border border-sky-200/90 shadow-[0_6px_25px_rgba(10,25,49,0.06)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#00A3E0] to-[#0070C0] text-white flex items-center justify-center shadow-md shadow-sky-500/30 animate-pulse flex-shrink-0">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#0070C0] block">
                    Destination
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-[#0A1931] block">
                    Enterprise Velocity
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pl-3">
                <div className="w-12 h-12 flex items-center justify-center p-0.5">
                  <img
                    src="/images/knooviq-emblem-transparent.png"
                    alt="KNOOVIQ Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="font-serif text-sm font-bold text-[#0A1931] block leading-tight">
                    KNOOVIQ
                  </span>
                  <span className="text-[9.5px] font-bold text-sky-700 uppercase tracking-wider block">
                    Solutions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyKnooviqTypographySection;
