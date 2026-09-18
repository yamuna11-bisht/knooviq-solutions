import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  PhoneCall, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Zap,
  Building2,
  Calendar,
  Sparkles,
  Network,
  Briefcase,
  Database,
  Handshake,
  Users,
  Share2,
  Cpu,
  Layers,
  TrendingUp,
  Compass,
  MessageSquare,
  Send
} from 'lucide-react';
import { AboutSubnav } from '../../components/AboutSubnav';

export const KnooviqConnectPage: React.FC<{ onOpenContact: (topic?: string) => void }> = ({ onOpenContact }) => {
  return (
    <div className="pb-0 bg-[#F8FAFC] dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-500 overflow-hidden font-sans">
      
      {/* Background Aurora */}
      <div className="aurora-sphere-1 top-20 left-1/4 bg-[#00A3E0]/15 dark:bg-[#00F0FF]/15 pointer-events-none" />
      <div className="aurora-sphere-2 top-96 right-10 bg-[#6366F1]/15 dark:bg-[#8B5CF6]/20 pointer-events-none" />

      {/* Hero Header with Enterprise Communication Background Image */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-20 min-h-[540px] lg:h-[580px] lg:min-h-[580px] flex items-center overflow-hidden">
        {/* Clean Background Image with Directional Left Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
            alt="KnoovIQ Connect Executive Communication"
            className="w-full h-full object-cover object-center"
          />
          {/* Mild Contrast Scrim: Clear modern workspace photo with soft text shading */}
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
              <span className="font-mono uppercase text-xs tracking-wider font-bold">Direct Executive Advisory Desk</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] leading-[1.15] mb-6"
            >
              KnoovIQ <span className="hero-gradient-cyan font-black">Connect</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-white font-medium drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] leading-relaxed font-sans mb-8 max-w-3xl"
            >
              Direct lines of communication to our senior practice leads, principal solution architects, and cutover directors. Bypass sales bureaucracy for rapid architectural feasibility checks, RFP consultations, and confidential technical advisory.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Direct Principal Architect Access</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Guaranteed 24-Hour Executive SLA</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Pre-Signed Confidentiality & NDA</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shared Sub-Navigation Bar */}
      <AboutSubnav activeTabTitle="KnoovIQ Connect" />

      {/* =========================================================================
          SECTION 1 — CONNECT WITH KNOOVIQ (INTERACTIVE 3D CONNECTION HUB)
          Compact vertical spacing, central 3D gateway with dual-flank responsive nodes
          ========================================================================= */}
      <section className="py-14 sm:py-18 relative overflow-hidden bg-[#060D1A] text-white">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#0052CC]/20 via-[#00A3E0]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Compact Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-white/10 text-cyan-300 border border-white/20 shadow-xs mb-3 backdrop-blur-md"
            >
              <Network className="h-3.5 w-3.5 text-cyan-400" />
              <span>Digital Connection System</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]"
            >
              Connect With KnoovIQ
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto"
            >
              One connection can open the door to the right expertise, opportunity, and collaboration.
            </motion.p>
          </div>

          {/* Clean Enterprise Connection Hub (Responsive Dual-Flank + Center Nexus Disc) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center max-w-6xl mx-auto">
            
            {/* Left Flank Nodes (01 & 03) */}
            <div className="lg:col-span-4 space-y-4">
              {/* 01: Business Enquiries */}
              <motion.div
                whileHover={{ y: -4, scale: 1.015 }}
                onClick={() => onOpenContact('Business Enquiries')}
                className="rounded-2xl p-5 bg-slate-900/90 border border-cyan-400/30 hover:border-cyan-400 hover:shadow-[0_10px_25px_rgba(0,240,255,0.2)] backdrop-blur-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-9 w-9 rounded-xl bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 flex items-center justify-center shrink-0 shadow-sm">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">
                      01 • BUSINESS
                    </span>
                    <h4 className="font-display text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      Business Enquiries
                    </h4>
                  </div>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Enterprise consultations, RFPs, and strategic transformation initiatives.
                </p>
              </motion.div>

              {/* 03: Partnerships & Alliances */}
              <motion.div
                whileHover={{ y: -4, scale: 1.015 }}
                onClick={() => onOpenContact('Partnerships & Alliances')}
                className="rounded-2xl p-5 bg-slate-900/90 border border-violet-400/30 hover:border-violet-400 hover:shadow-[0_10px_25px_rgba(139,92,246,0.2)] backdrop-blur-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-9 w-9 rounded-xl bg-violet-500/20 border border-violet-400/30 text-violet-300 flex items-center justify-center shrink-0 shadow-sm">
                    <Handshake className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-violet-400 uppercase tracking-wider block">
                      03 • PARTNERS
                    </span>
                    <h4 className="font-display text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                      Partnerships & Alliances
                    </h4>
                  </div>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Global systems integrators, co-innovation, and technology alliances.
                </p>
              </motion.div>
            </div>

            {/* Center Core: Clean Futuristic Corporate Nexus Disc */}
            <div className="lg:col-span-4 flex items-center justify-center py-4">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
                {/* Concentric Tech Orbits */}
                <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-[spin_40s_linear_infinite]" />
                <div className="absolute inset-3 rounded-full border border-dashed border-sky-400/30 animate-[spin_25s_linear_infinite_reverse]" />
                <div className="absolute inset-8 rounded-full border border-cyan-300/20" />
                
                {/* Soft Radial Ambient Glow */}
                <div className="absolute inset-10 rounded-full bg-cyan-500/10 blur-xl pointer-events-none" />

                {/* Central Glass Disc */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-gradient-to-b from-[#0A2540] to-[#040C18] border-2 border-cyan-400/60 shadow-[0_0_35px_rgba(0,163,224,0.35)] flex flex-col items-center justify-center p-5 text-center backdrop-blur-xl group cursor-default"
                >
                  <Sparkles className="h-6 w-6 text-cyan-400 mb-1.5 animate-pulse" />
                  <span className="font-mono text-[9px] font-bold tracking-widest text-cyan-300 uppercase block">
                    CORE GATEWAY
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-black text-white tracking-tight leading-tight mt-0.5">
                    KNOOVIQ<br />CONNECT
                  </h3>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[9px] font-mono text-emerald-300 shadow-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>ONLINE 24/7</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Flank Nodes (02 & 04) */}
            <div className="lg:col-span-4 space-y-4">
              {/* 02: SAP & Digital Solutions */}
              <motion.div
                whileHover={{ y: -4, scale: 1.015 }}
                onClick={() => onOpenContact('SAP & Digital Solutions')}
                className="rounded-2xl p-5 bg-slate-900/90 border border-sky-400/30 hover:border-sky-400 hover:shadow-[0_10px_25px_rgba(0,163,224,0.2)] backdrop-blur-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-9 w-9 rounded-xl bg-sky-500/20 border border-sky-400/30 text-sky-300 flex items-center justify-center shrink-0 shadow-sm">
                    <Database className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-sky-400 uppercase tracking-wider block">
                      02 • EXPERTS
                    </span>
                    <h4 className="font-display text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                      SAP & Digital Solutions
                    </h4>
                  </div>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  S/4HANA migrations, Clean Core advisory, BTP, and 24/7 AMS.
                </p>
              </motion.div>

              {/* 04: Career & Talent */}
              <motion.div
                whileHover={{ y: -4, scale: 1.015 }}
                onClick={() => onOpenContact('Career & Talent')}
                className="rounded-2xl p-5 bg-slate-900/90 border border-emerald-400/30 hover:border-emerald-400 hover:shadow-[0_10px_25px_rgba(16,185,129,0.2)] backdrop-blur-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-9 w-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 flex items-center justify-center shrink-0 shadow-sm">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                      04 • TALENT
                    </span>
                    <h4 className="font-display text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      Career & Talent
                    </h4>
                  </div>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Joining our high-velocity enterprise engineering and architecture teams.
                </p>
              </motion.div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — PARTNER WITH US (BUSINESS ECOSYSTEM WITH CURATED IMAGERY)
          Heading: "Build Connections That Create Possibilities"
          Clean responsive grid, sharp typography, zero text clipping
          ========================================================================= */}
      <section className="py-14 sm:py-18 relative bg-[#FAFBFD] dark:bg-[#040B16] border-y border-slate-200/90 dark:border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-slate-100 dark:bg-white/10 text-[#0A2540] dark:text-cyan-300 border border-slate-200 dark:border-white/10 shadow-xs mb-3"
            >
              <Share2 className="h-3.5 w-3.5 text-[#0052CC] dark:text-cyan-400" />
              <span>Partner Ecosystem</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]"
            >
              Build Connections That Create Possibilities
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto"
            >
              Collaborate with an agile enterprise architecture partner to co-innovate, expand capabilities, and unlock sustained commercial value.
            </motion.p>
          </div>

          {/* Clean Responsive 4-Column Ecosystem Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Strategic Partnerships',
                badge: 'CO-INNOVATION',
                desc: 'Long-term co-innovation, joint market expansion, and combined advisory capability.',
                icon: Handshake,
                accent: '#00A3E0',
                image: '/images/strategic_partnerships_connect.png'
              },
              {
                title: 'Technology Collaboration',
                badge: 'CLOUD & BTP',
                desc: 'Cross-platform cloud integration, SAP BTP extensions, and API interoperability.',
                icon: Cpu,
                accent: '#6366F1',
                image: '/images/technology_collaboration_connect.jpg'
              },
              {
                title: 'Solution Ecosystem',
                badge: 'ARCHITECTURE',
                desc: 'End-to-end enterprise software, certified connectors, and automated workflow solutions.',
                icon: Layers,
                accent: '#10B981',
                image: '/images/solution_ecosystem_connect.jpg'
              },
              {
                title: 'Business Opportunities',
                badge: 'GROWTH VENTURES',
                desc: 'Scalable enterprise ventures, joint cutover scheduling, and collaborative bids.',
                icon: TrendingUp,
                accent: '#F59E0B',
                image: '/images/business_opportunities_connect.png'
              }
            ].map((node, idx) => {
              const IconComp = node.icon;
              return (
                <motion.div
                  key={node.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  onClick={() => onOpenContact(`Partner Ecosystem: ${node.title}`)}
                  className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group h-full"
                >
                  <div>
                    {/* Visual Image Banner with Clean Gradient Scrim */}
                    <div className="relative h-36 w-full overflow-hidden">
                      <img 
                        src={node.image} 
                        alt={node.title}
                        className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                      
                      {/* Floating Icon Badge */}
                      <div className="absolute bottom-3 left-4 flex items-center gap-2">
                        <div 
                          className="h-9 w-9 rounded-xl flex items-center justify-center text-white shadow-md backdrop-blur-md"
                          style={{ backgroundColor: node.accent }}
                        >
                          <IconComp className="h-4 w-4" />
                        </div>
                        <span className="font-mono text-[9px] font-bold tracking-wider text-white uppercase bg-black/60 px-2 py-0.5 rounded-md border border-white/20 shadow-xs">
                          {node.badge}
                        </span>
                      </div>
                    </div>

                    {/* Card Body — 100% Unclipped, Crisp Typography */}
                    <div className="p-5">
                      <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-[#0052CC] dark:group-hover:text-cyan-300 transition-colors">
                        {node.title}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                        {node.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-mono font-bold text-[#0052CC] dark:text-cyan-400">
                    <span>Explore Pathway</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — ENGAGEMENT METHODOLOGY (FROM CONVERSATION TO COLLABORATION)
          Heading: "From Conversation to Collaboration"
          Crisp 4-step flowchart with traveling laser beam
          ========================================================================= */}
      <section className="py-14 sm:py-18 relative bg-white dark:bg-[#030712] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-slate-100 dark:bg-white/10 text-[#0A2540] dark:text-cyan-300 border border-slate-200 dark:border-white/10 shadow-xs mb-3"
            >
              <Compass className="h-3.5 w-3.5 text-[#0052CC] dark:text-cyan-400" />
              <span>Engagement Methodology</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]"
            >
              From Conversation to Collaboration
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto"
            >
              A transparent, structured engagement pathway designed to move swiftly from first discussion to lasting business impact.
            </motion.p>
          </div>

          {/* Interactive Flowchart Track */}
          <div className="relative">
            {/* Desktop Animated Laser Flow Circuit Rail */}
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[3px] bg-slate-200 dark:bg-slate-800 z-0 overflow-hidden rounded-full">
              <motion.div 
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              />
            </div>

            {/* 4 Connected Flowchart Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
              {[
                {
                  step: '01',
                  name: 'DISCUSS',
                  desc: 'Share your business challenge, idea, or requirement.',
                  icon: MessageSquare,
                  accent: 'from-blue-600 to-cyan-500'
                },
                {
                  step: '02',
                  name: 'UNDERSTAND',
                  desc: 'We understand your objectives, context, and expectations.',
                  icon: Compass,
                  accent: 'from-cyan-500 to-teal-400'
                },
                {
                  step: '03',
                  name: 'ADVISE',
                  desc: 'Connect with the right expertise and explore possible approaches.',
                  icon: Cpu,
                  accent: 'from-teal-400 to-emerald-500'
                },
                {
                  step: '04',
                  name: 'COLLABORATE',
                  desc: 'Move forward with a clear direction and meaningful collaboration.',
                  icon: Handshake,
                  accent: 'from-emerald-500 to-indigo-600'
                }
              ].map((stage, idx) => {
                const IconComp = stage.icon;
                return (
                  <motion.div
                    key={stage.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ y: -6, scale: 1.015 }}
                    className="rounded-3xl p-6 bg-slate-50/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-white/10 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full"
                  >
                    {/* Top Accent Line */}
                    <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${stage.accent}`} />

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-11 w-11 rounded-2xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-[#0052CC] dark:text-cyan-400 flex items-center justify-center shadow-xs group-hover:bg-[#0052CC] group-hover:text-white transition-colors duration-300">
                          <IconComp className="h-5 w-5" />
                        </div>
                        <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-2.5 py-0.5 rounded-full shadow-xs">
                          STAGE {stage.step}
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-black text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-[#0052CC] dark:group-hover:text-cyan-300 transition-colors">
                        {stage.name}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-5 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-xs font-mono font-bold text-[#0052CC] dark:text-cyan-400">
                      <span>Milestone {stage.step}</span>
                      <span className="group-hover:translate-x-1.5 transition-transform">→</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — CONNECT WITH OUR EXPERTS (DIGITAL EXPERTISE MAP WITH IMAGERY)
          Heading: "Expertise, Just a Connection Away"
          6 Multi-disciplinary practice areas with curated images & sharp typography
          ========================================================================= */}
      <section className="py-14 sm:py-18 relative bg-[#060D1A] text-white overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#0052CC]/15 via-[#00F0FF]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-white/10 text-cyan-300 border border-white/20 shadow-xs mb-3 backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>Multi-Disciplinary Advisory</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]"
            >
              Expertise, Just a Connection Away
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto"
            >
              Whatever your enterprise requirement, our global practice leaders and principal architects are equipped to guide your roadmap.
            </motion.p>
          </div>

          {/* Practice Areas Showcase with High-Quality Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {[
              {
                domain: 'SAP Solutions',
                focus: 'S/4HANA Migration, BTP Integration, Clean Core & AMS',
                icon: Database,
                color: 'text-cyan-400',
                border: 'hover:border-cyan-400',
                desc: 'Deep functional and technical mastery across S/4HANA finance, supply chain, and cloud extensibility.',
                image: '/images/sap_solutions_connect.jpg'
              },
              {
                domain: 'Digital Transformation',
                focus: 'Cloud Modernization, Hybrid Infrastructure & Agility',
                icon: Zap,
                color: 'text-sky-400',
                border: 'hover:border-sky-400',
                desc: 'Accelerating digital agility, modernizing legacy enterprise systems, and orchestrating cloud operations.',
                image: '/images/digital_transformation_connect.jpg'
              },
              {
                domain: 'Enterprise Technology',
                focus: 'Microservices, APIs, Security & Automated Workflows',
                icon: Cpu,
                color: 'text-violet-400',
                border: 'hover:border-violet-400',
                desc: 'High-availability software architectures, secure enterprise integrations, and data platform engineering.',
                image: '/images/enterprise_technology_connect.png'
              },
              {
                domain: 'Architecture Advisory',
                focus: 'Clean Core Governance, High Availability & Cutover Strategy',
                icon: Building2,
                color: 'text-emerald-400',
                border: 'hover:border-emerald-400',
                desc: 'Independent architectural evaluations ensuring audit resilience, low maintenance debt, and rapid ROI.',
                image: '/images/architecture_advisory_connect.jpg'
              },
              {
                domain: 'Business Solutions',
                focus: 'Operating Model Optimization & Multi-Entity Scaling',
                icon: Briefcase,
                color: 'text-amber-400',
                border: 'hover:border-amber-400',
                desc: 'Aligning enterprise business processes with advanced ERP configurations and strategic growth goals.',
                image: '/images/business_solutions_connect.png'
              },
              {
                domain: 'Executive Advisory',
                focus: 'C-Suite Strategy, SLA Assurance & Vendor Governance',
                icon: ShieldCheck,
                color: 'text-rose-400',
                border: 'hover:border-rose-400',
                desc: 'Direct consultation for executive leadership on digital roadmaps, technology risk, and commercial models.',
                image: '/images/executive_advisory_connect.jpg'
              }
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.domain}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  onClick={() => onOpenContact(`Expertise Consultation: ${item.domain}`)}
                  className={`rounded-3xl border border-white/10 ${item.border} bg-slate-900/90 overflow-hidden shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group h-full`}
                >
                  <div>
                    {/* Visual Image Header */}
                    <div className="relative h-32 w-full overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.domain}
                        className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                      
                      <div className="absolute bottom-2.5 left-4 flex items-center gap-2">
                        <div className="h-9 w-9 rounded-xl bg-slate-900/90 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-xs">
                          <IconComp className={`h-5 w-5 ${item.color}`} />
                        </div>
                        <span className="font-mono text-[9px] font-bold text-slate-300 uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded-md border border-white/15">
                          PRACTICE
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                        {item.domain}
                      </h3>

                      <p className="font-mono text-[11px] text-cyan-400 font-semibold mb-2">
                        {item.focus}
                      </p>

                      <p className="text-xs text-slate-300 font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-4 pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold text-cyan-400">
                    <span>Connect With Lead</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — START A CONVERSATION (PREMIUM SPLIT-SCREEN + WORKING FORM)
          Heading: "Let's Start a Conversation"
          Clean telemetry timeline on left, working enquiry form on right
          ========================================================================= */}
      <section id="conversation-form" className="py-14 sm:py-18 relative bg-[#FAFBFD] dark:bg-[#030712] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT SIDE: Clean Visual Telemetry & Executive Assurances */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-slate-100 dark:bg-white/10 text-[#0A2540] dark:text-cyan-300 border border-slate-200 dark:border-white/10 shadow-xs mb-3">
                  <Mail className="h-3.5 w-3.5 text-[#0052CC] dark:text-cyan-400" />
                  <span>Direct Communication Desk</span>
                </span>
                
                <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                  Let's Start a Conversation
                </h2>

                <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Connect directly with our senior leadership and principal solutions architects. Whether evaluating a Greenfield transition or exploring alliance synergies, we are ready.
                </p>
              </div>

              {/* Clean Telemetry Pipeline Container */}
              <div className="rounded-3xl p-6 bg-[#0A192F] text-white border border-cyan-500/30 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

                <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-300 block mb-3">
                  TELEMETRY CONNECTION PIPELINE
                </span>

                <div className="space-y-3 relative">
                  {[
                    { step: '01', title: 'Message Received', desc: 'Secure transmission routed to designated practice lead.' },
                    { step: '02', title: 'Connection Established', desc: 'Pre-NDA verification and scope triage initiated.' },
                    { step: '03', title: 'Expertise Aligned', desc: 'Senior Principal Architect assigned to your assessment.' },
                    { step: '04', title: 'Active Collaboration', desc: 'High-velocity execution and SLA-driven delivery.' }
                  ].map((p) => (
                    <div key={p.step} className="flex items-start gap-3">
                      <div className="h-7 w-7 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold flex items-center justify-center shrink-0 shadow-xs">
                        {p.step}
                      </div>
                      <div>
                        <h4 className="font-display text-xs font-bold text-white">
                          {p.title}
                        </h4>
                        <p className="text-[11px] text-slate-300 font-sans">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-4 text-xs font-mono text-cyan-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>24h SLA</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>Pre-Signed NDA</span>
                  </div>
                </div>
              </div>

              {/* Direct Reach Contacts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-cyan-400/40 transition-colors shadow-xs">
                  <span className="text-[9px] font-mono font-bold text-slate-400 uppercase block">Phone Hotline</span>
                  <a href="tel:+917900073410" className="text-xs font-bold text-[#0A2540] dark:text-cyan-300 font-mono hover:underline">
                    +91-7900073410
                  </a>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-cyan-400/40 transition-colors shadow-xs">
                  <span className="text-[9px] font-mono font-bold text-slate-400 uppercase block">Official Email</span>
                  <a href="mailto:admin@knooviq.com" className="text-xs font-bold text-[#0A2540] dark:text-cyan-300 font-mono hover:underline">
                    admin@knooviq.com
                  </a>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE: Interactive Working Enquiry Form */}
            <div className="lg:col-span-7">
              <ConnectFormSection />
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

// =========================================================================
// WORKING ENQUIRY FORM COMPONENT (CONNECTED TO SUPABASE / BACKEND)
// =========================================================================
const ConnectFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phoneNumber: '',
    enquiryType: 'Business Enquiry',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.workEmail.trim() || !formData.workEmail.includes('@')) {
      setErrorMsg('Please enter a valid work email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please describe your requirement or inquiry.');
      return;
    }

    setLoading(true);

    try {
      // Dynamic import to avoid circular dependencies
      const { submitContactSubmission } = await import('../../lib/supabase');
      const res = await submitContactSubmission({
        name: formData.fullName,
        company: formData.companyName || 'Enterprise Partner',
        email: formData.workEmail,
        phone: formData.phoneNumber || '+91 Not Provided',
        service: formData.enquiryType,
        subject: `KnoovIQ Connect: ${formData.enquiryType}`,
        message: formData.message
      });

      if (res.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(res.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setErrorMsg('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl p-8 sm:p-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-2xl text-center">
        <div className="h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center mb-6 shadow-md">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
          Message Received Successfully
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-md mx-auto mb-6">
          Thank you for connecting with KNOOVIQ. Your message has been routed to our practice lead. An executive solution architect will respond within 24 business hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              companyName: '',
              workEmail: '',
              phoneNumber: '',
              enquiryType: 'Business Enquiry',
              message: ''
            });
          }}
          className="btn-primary-gradient px-6 py-2.5 rounded-xl text-white text-xs font-bold uppercase tracking-wider font-display"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="rounded-3xl p-8 sm:p-10 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-white/10 shadow-2xl space-y-5"
    >
      <div className="border-b border-slate-200 dark:border-white/10 pb-4 mb-5">
        <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          Executive Inquiry Form
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-sans mt-1">
          Confidential transmission governed by standard enterprise NDA.
        </p>
      </div>

      {errorMsg && (
        <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-xs font-medium text-rose-700 dark:text-rose-300">
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase text-slate-600 dark:text-slate-300 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Anand Mahindra"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white text-xs font-sans focus:outline-hidden focus:border-[#0052CC] dark:focus:border-cyan-400 transition-colors"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase text-slate-600 dark:text-slate-300 mb-1.5">
            Company Name
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="e.g. Enterprise Global Ltd"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white text-xs font-sans focus:outline-hidden focus:border-[#0052CC] dark:focus:border-cyan-400 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Work Email */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase text-slate-600 dark:text-slate-300 mb-1.5">
            Work Email *
          </label>
          <input
            type="email"
            required
            value={formData.workEmail}
            onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
            placeholder="name@company.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white text-xs font-sans focus:outline-hidden focus:border-[#0052CC] dark:focus:border-cyan-400 transition-colors"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase text-slate-600 dark:text-slate-300 mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            placeholder="+91 98000 00000"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white text-xs font-sans focus:outline-hidden focus:border-[#0052CC] dark:focus:border-cyan-400 transition-colors"
          />
        </div>
      </div>

      {/* Enquiry Type */}
      <div>
        <label className="block text-xs font-mono font-bold uppercase text-slate-600 dark:text-slate-300 mb-1.5">
          Enquiry Type *
        </label>
        <select
          value={formData.enquiryType}
          onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white text-xs font-sans focus:outline-hidden focus:border-[#0052CC] dark:focus:border-cyan-400 transition-colors cursor-pointer"
        >
          <option value="Business Enquiry" className="text-slate-900 dark:bg-slate-900 dark:text-white">Business Enquiry</option>
          <option value="SAP & Digital Solutions" className="text-slate-900 dark:bg-slate-900 dark:text-white">SAP & Digital Solutions</option>
          <option value="Partnership & Alliance" className="text-slate-900 dark:bg-slate-900 dark:text-white">Partnership & Alliance</option>
          <option value="Technology Collaboration" className="text-slate-900 dark:bg-slate-900 dark:text-white">Technology Collaboration</option>
          <option value="Career Opportunity" className="text-slate-900 dark:bg-slate-900 dark:text-white">Career Opportunity</option>
          <option value="General Enquiry" className="text-slate-900 dark:bg-slate-900 dark:text-white">General Enquiry</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-mono font-bold uppercase text-slate-600 dark:text-slate-300 mb-1.5">
          Requirement Details *
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Briefly describe your project scope, ERP environment, or collaboration goals..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white text-xs font-sans focus:outline-hidden focus:border-[#0052CC] dark:focus:border-cyan-400 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary-gradient shimmer-sweep py-4 rounded-xl text-white font-display text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Transmitting...</span>
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <span>Start the Conversation</span>
            <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </button>
    </form>
  );
};

