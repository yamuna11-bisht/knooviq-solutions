import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe2, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Server,
  Zap,
  Building2,
  Network,
  Workflow,
  Users,
  Cpu,
  Handshake,
  Factory,
  Fuel,
  Car,
  ShoppingBag,
  HeartPulse,
  Layers,
  Truck,
  Activity
} from 'lucide-react';
import { AboutSubnav } from '../../components/AboutSubnav';
import { ClientLogoMarquee } from '../../components/ClientLogoMarquee';

// NEW SECTION 1: Global Connectivity Cards
const CONNECTIVITY_CARDS = [
  {
    title: 'Global Expertise',
    description: 'Connecting specialized knowledge and capabilities across markets.',
    icon: Globe2,
    tag: 'Domain Mastery'
  },
  {
    title: 'Strategic Connections',
    description: 'Building meaningful relationships with clients, partners, and business ecosystems.',
    icon: Network,
    tag: 'Ecosystem Synergy'
  },
  {
    title: 'Cross-Border Collaboration',
    description: 'Creating opportunities through collaboration across regions and industries.',
    icon: Workflow,
    tag: 'Unified Execution'
  }
];

// NEW SECTION 2: Global Industry Ecosystem (8 Industry Nodes)
const ECOSYSTEM_INDUSTRIES = [
  {
    id: 0,
    title: 'Manufacturing',
    description: 'Advanced production workflows, shop-floor connectivity & discrete engineering.',
    icon: Factory
  },
  {
    id: 1,
    title: 'Oil & Gas',
    description: 'Operational efficiency, exploration ERP & supply distribution telemetry.',
    icon: Fuel
  },
  {
    id: 2,
    title: 'Automotive',
    description: 'Assembly line synchronization, JIT supply chains & tier-1 parts logistics.',
    icon: Car
  },
  {
    id: 3,
    title: 'Retail',
    description: 'Omnichannel inventory balance, point-of-sale stability & consumer distribution.',
    icon: ShoppingBag
  },
  {
    id: 4,
    title: 'Healthcare',
    description: 'Life sciences compliance, patient supply track & pharmaceutical traceability.',
    icon: HeartPulse
  },
  {
    id: 5,
    title: 'Energy & Utilities',
    description: 'Power grid continuity, asset uptime management & smart meter billing.',
    icon: Zap
  },
  {
    id: 6,
    title: 'Trading & Distribution',
    description: 'Multi-currency settlement, cross-border fiscal alignment & warehousing.',
    icon: Layers
  },
  {
    id: 7,
    title: 'Logistics',
    description: 'Automated AIDC tracking, fleet telemetry & container freight management.',
    icon: Truck
  }
];

// NEW SECTION 3: Global Collaboration Pillars
const COLLABORATION_PILLARS = [
  {
    title: 'PEOPLE',
    desc: 'Connecting expertise and talent.',
    icon: Users,
    color: '#0052CC'
  },
  {
    title: 'TECHNOLOGY',
    desc: 'Enabling smarter and more connected business environments.',
    icon: Cpu,
    color: '#00A3E0'
  },
  {
    title: 'PARTNERSHIPS',
    desc: 'Building meaningful and long-term business relationships.',
    icon: Handshake,
    color: '#6366F1'
  },
  {
    title: 'INDUSTRIES',
    desc: 'Applying expertise across diverse business environments.',
    icon: Building2,
    color: '#10B981'
  }
];

// Existing Industry Tags
const EXISTING_INDUSTRY_TAGS = [
  { name: 'Multinational Multi-Energy', icon: Fuel },
  { name: 'Global Technology Leaders', icon: Cpu },
  { name: 'Heavy Industrial Engineering', icon: Factory },
  { name: 'AIDC & Automated Logistics', icon: Truck },
  { name: 'Cross-Border Supply Chains', icon: Globe2 }
];

export const OurGlobalNetworkPage: React.FC<{ onOpenContact: (topic?: string) => void }> = ({ onOpenContact }) => {
  const [activeEcosystemId, setActiveEcosystemId] = useState<number>(0);
  const ecosystemIntervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const ecosystemPauseTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const startEcosystemAutoCycle = React.useCallback(() => {
    if (ecosystemIntervalRef.current) clearInterval(ecosystemIntervalRef.current);
    ecosystemIntervalRef.current = setInterval(() => {
      setActiveEcosystemId((prev) => (prev + 1) % ECOSYSTEM_INDUSTRIES.length);
    }, 1000);
  }, []);

  const handleEcosystemClick = (id: number) => {
    setActiveEcosystemId(id);
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

  // Existing Three-Tiered Delivery Operating Model Data (Preserved)
  const deliveryTiers = [
    {
      title: 'Offshore Development Center (ODC)',
      location: 'Mumbai Core Campus, India',
      focus: 'High-Throughput Engineering',
      desc: 'Our Mumbai center acts as the core technological engine, housing certified ABAP on HANA developers, BTP microservices specialists, and automated regression testing labs.',
      specs: ['Direct Agile Sprint Integration', 'Under 10-Day Team Scaling', 'Zero Infrastructure Overhead']
    },
    {
      title: 'Follow-The-Sun 24/7 AMS Operations',
      location: 'Global NOC / SOC Monitoring',
      focus: 'Mission-Critical Continuity',
      desc: 'Three geographically orchestrated shifts guarantee proactive round-the-clock telemetry, real-time database health monitoring, and sub-15 minute emergency incident triage.',
      specs: ['99.8% Contractual SLA Adherence', 'Incident Escalation War-Rooms', 'Predictive Anomaly Detection']
    },
    {
      title: 'Strategic On-Site Architecture Advisory',
      location: 'Client HQ & Regional Plants',
      focus: 'Executive Steering & Cutover',
      desc: 'Senior principal architects deployed directly to client facilities during high-stakes project phases: discovery blueprinting, integration testing, and live cutover weekends.',
      specs: ['Executive Steering Alignment', 'Zero Business Disruption Guarantee', 'Hands-On Change Governance']
    }
  ];

  return (
    <div className="pb-0 bg-[#F8FAFC] dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-500 overflow-hidden">
      
      {/* Background Aurora Blobs */}
      <div className="aurora-sphere-1 top-20 left-1/4 bg-[#00A3E0]/15 dark:bg-[#00F0FF]/15 pointer-events-none" />
      <div className="aurora-sphere-2 top-96 right-10 bg-[#6366F1]/15 dark:bg-[#8B5CF6]/20 pointer-events-none" />

      {/* =========================================================================
          1. HERO SECTION — EXACT SAME LAYOUT, ONLY HERO IMAGE REPLACED
          Image: 3D Global Digital Business Network visual (3D globe, network nodes)
          ========================================================================= */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-20 min-h-[540px] lg:h-[580px] lg:min-h-[580px] flex items-center overflow-hidden">
        {/* Clean Background Image with Mild Left Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="3D Global Digital Business Network"
            className="w-full h-full object-cover object-center"
          />
          {/* Mild Contrast Scrim: Interconnected globe clearly visible with soft text shading */}
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
              <span className="font-mono uppercase text-xs tracking-wider font-bold">Distributed Delivery Mesh & Regional Hubs</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] leading-[1.15] mb-6"
            >
              Our Global <span className="hero-gradient-cyan font-black">Network</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-white font-medium drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] leading-relaxed font-sans mb-8 max-w-3xl"
            >
              A synchronized cross-border delivery network uniting Mumbai offshore engineering with distributed partner hubs worldwide. Delivering seamless follow-the-sun AMS coverage, agile acceleration, and sub-15-minute emergency SLA dispatch.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Follow-the-Sun 24/7 AMS</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>&lt; 15m Incident Response Protocol</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>3-Tier Distributed Architecture</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shared Sub-Navigation Bar */}
      <AboutSubnav activeTabTitle="Our Global Network" />

      {/* =========================================================================
          2. EXISTING GLOBAL NETWORK / CLIENT SECTION & OPERATING MODEL
          - Preserved Three-Tiered Global Operating Model
          - Enhanced Client Logo Marquee with heading “Trusted Across Industries”
          - Enhanced Industry Tags as “Global Industry Network”
          ========================================================================= */}
      <section className="py-20 relative bg-white dark:bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Three-Tiered Operating Model Header (Preserved) */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0A2540] dark:text-cyan-300 font-mono">
              Delivery Infrastructure
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Three-Tiered Global Operating Model
            </h2>
          </div>

          {/* Three-Tiered Operating Model Cards (Preserved & Enhanced) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {deliveryTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white/95 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/90 dark:border-white/10 hover:border-[#0052CC]/50 rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <span className="rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 px-3 py-1 text-[11px] font-mono font-bold text-[#0A2540] dark:text-cyan-300 mb-4 inline-block">
                    {tier.focus}
                  </span>

                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-1 tracking-tight">
                    {tier.title}
                  </h3>

                  <p className="text-xs font-mono text-[#0052CC] dark:text-cyan-400 font-semibold mb-4">
                    📍 {tier.location}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-6 font-normal">
                    {tier.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/90 dark:border-white/10 space-y-2.5">
                  {tier.specs.map((s, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2.5 text-xs text-slate-800 dark:text-slate-200 font-semibold font-display">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0052CC] dark:text-cyan-400 flex-shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Premium "Global Industry Network" Tags Section */}
          <div className="mb-16 p-8 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/90 dark:border-white/10 relative overflow-hidden">
            {/* Subtle background network grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

            <div className="relative z-10 text-center max-w-2xl mx-auto mb-6">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#0052CC] dark:text-cyan-400 font-bold block mb-1">
                ENTERPRISE OPERATIONAL REACH
              </span>
              <h3 className="font-display text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Global Industry Network
              </h3>
            </div>

            <div className="relative z-10 flex flex-wrap justify-center gap-3 sm:gap-4">
              {EXISTING_INDUSTRY_TAGS.map((tag, idx) => {
                const IconComponent = tag.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-white/10 hover:border-[#0052CC]/60 shadow-xs hover:shadow-md transition-all duration-300 cursor-default group"
                  >
                    <div className="h-6 w-6 rounded-full bg-[#0052CC]/10 text-[#0052CC] dark:text-cyan-400 flex items-center justify-center group-hover:bg-[#0052CC] group-hover:text-white transition-colors">
                      <IconComponent className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-display font-bold text-slate-800 dark:text-slate-200 group-hover:text-[#0052CC] dark:group-hover:text-cyan-300 transition-colors">
                      {tag.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Existing Client Logos Marquee — Heading: “Trusted Across Industries” */}
          <div className="mb-4">
            <ClientLogoMarquee 
              title="Trusted Across Industries"
              subtitle="CROSS-BORDER COLLABORATION & REACH"
              description="Building meaningful connections across industries through expertise, technology, and collaboration."
              badge1="Multi-Country Tax & Legal Compliance"
              badge2="Sub-15 Min Emergency AMS Escalation"
              badge3="Global Cloud Infrastructure"
              sectorsList={['Multinational Multi-Energy', 'Global Technology Leaders', 'Heavy Industrial Engineering', 'AIDC & Automated Logistics', 'Cross-Border Supply Chains']}
              className="rounded-3xl border border-slate-200/90 dark:border-white/10 shadow-sm"
            />
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. NEW SECTION 1 — GLOBAL CONNECTIVITY
          Heading: “Connected Across Markets”
          Supporting: “KnoovIQ brings together expertise, technology, and business relationships to create meaningful connections across markets and industries.”
          3 Premium Cards with visual network connecting lines
          ========================================================================= */}
      <section className="py-20 sm:py-24 relative overflow-hidden bg-[#FAFBFD] dark:bg-[#060D1A] border-y border-slate-200/90 dark:border-white/5">
        {/* Subtle dot matrix */}
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
              <Globe2 className="h-3.5 w-3.5 text-[#0052CC] dark:text-cyan-400" />
              <span>Global Connectivity</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]"
            >
              Connected Across Markets
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto"
            >
              KnoovIQ brings together expertise, technology, and business relationships to create meaningful connections across markets and industries.
            </motion.p>
          </div>

          {/* 3 Premium Connectivity Cards with Animated Connecting Network Line */}
          <div className="relative py-4">
            {/* Desktop Animated Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[2px] z-0 pointer-events-none -translate-y-6">
              <div className="w-full h-full bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-[#0052CC] to-transparent"
                  initial={{ left: '-25%' }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {CONNECTIVITY_CARDS.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.12 }}
                    whileHover={{ y: -8, scale: 1.015 }}
                    className="bg-white/95 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200/90 dark:border-white/10 hover:border-[#0052CC]/60 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-2xl group relative overflow-hidden"
                  >
                    {/* Glowing Top Border Accent */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0052CC] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="h-14 w-14 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[#0052CC] dark:text-cyan-400 group-hover:bg-[#0052CC]/10 flex items-center justify-center transition-colors">
                          <IconComponent className="h-7 w-7" />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-white/5 px-2.5 py-1 rounded-lg border border-slate-200/60 dark:border-white/5">
                          0{idx + 1}
                        </span>
                      </div>

                      <span className="text-[11px] font-mono font-bold text-[#0052CC] dark:text-cyan-400 uppercase tracking-wider block mb-1">
                        {card.tag}
                      </span>

                      <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-[#0052CC] dark:group-hover:text-cyan-300 transition-colors">
                        {card.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans font-normal">
                        {card.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-mono text-[#0052CC] dark:text-cyan-400 font-semibold">
                      <span>Global Delivery Vector</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. NEW SECTION 2 — GLOBAL INDUSTRY ECOSYSTEM
          Heading: “An Ecosystem of Industries & Expertise”
          Supporting: “Our network brings together diverse industries, specialized expertise, and technology capabilities to support evolving business needs.”
          Design: Dual-Flank Interactive Network Hub (4 left, Central KNOOVIQ Core, 4 right)
          ========================================================================= */}
      <section className="py-20 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#060D1A] via-[#0A192F] to-[#071324] text-white">
        {/* Subtle Ambient Radial Grid & Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#0052CC_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0052CC]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-white/10 text-cyan-300 border border-white/15 shadow-sm mb-4 backdrop-blur-md"
            >
              <Network className="h-3.5 w-3.5 text-cyan-400" />
              <span>Multi-Sector Integration</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]"
            >
              An Ecosystem of Industries & Expertise
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto"
            >
              Our network brings together diverse industries, specialized expertise, and technology capabilities to support evolving business needs.
            </motion.p>
          </div>

          {/* Dual-Flank Interactive Network Architecture: Left 4 Nodes | Central Core | Right 4 Nodes */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Flank: Nodes 01 to 04 */}
            <div className="lg:col-span-4 space-y-3.5 order-2 lg:order-1">
              {ECOSYSTEM_INDUSTRIES.slice(0, 4).map((item) => {
                const IconComponent = item.icon;
                const isHovered = activeEcosystemId === item.id;
                const isDimmed = activeEcosystemId !== null && activeEcosystemId !== item.id;
                return (
                  <motion.div
                    key={item.id}
                    onClick={() => handleEcosystemClick(item.id)}
                    whileHover={{ x: 6 }}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden backdrop-blur-md ${
                      isHovered
                        ? 'bg-white/[0.12] border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.25)] scale-[1.02]'
                        : isDimmed
                        ? 'bg-white/[0.02] border-white/5 opacity-40'
                        : 'bg-white/[0.05] border-white/10 hover:border-white/20'
                    }`}
                  >
                    {/* Glowing Left Accent Line */}
                    <div className={`absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-400 to-[#0052CC] transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`} />

                    <div className="flex items-start gap-3.5">
                      <div className={`p-2.5 rounded-xl border transition-colors flex-shrink-0 ${
                        isHovered
                          ? 'bg-cyan-400 text-slate-950 border-cyan-300 font-bold'
                          : 'bg-white/5 text-cyan-300 border-white/10'
                      }`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={`font-display text-base font-bold transition-colors ${
                            isHovered ? 'text-cyan-300' : 'text-white'
                          }`}>
                            {item.title}
                          </h4>
                          <span className="text-[10px] font-mono text-cyan-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/10 font-bold">
                            0{item.id + 1}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Center Core: KNOOVIQ Intelligent Network Nexus */}
            <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center justify-center py-4 sm:py-0">
              <div className="relative w-full max-w-[320px] aspect-square rounded-3xl border-2 border-cyan-400/40 bg-gradient-to-br from-[#0A2540] via-[#0F325E] to-[#07172B] p-6 shadow-[0_0_60px_rgba(0,82,204,0.4)] flex flex-col items-center justify-between text-center overflow-hidden backdrop-blur-xl">
                
                {/* Concentric SVG Circuit Ring Orbits */}
                <div className="absolute inset-0 pointer-events-none opacity-40">
                  <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_50s_linear_infinite]">
                    <circle cx="100" cy="100" r="90" fill="none" stroke="#00F0FF" strokeWidth="1" strokeDasharray="4 6" />
                    <circle cx="100" cy="100" r="70" fill="none" stroke="#0052CC" strokeWidth="1.5" strokeDasharray="8 8" />
                  </svg>
                </div>

                {/* Top Hub Telemetry */}
                <div className="relative z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-[10px] font-mono font-bold tracking-widest uppercase">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>KNOOVIQ CENTRAL HUB</span>
                </div>

                {/* Dynamic Center Display */}
                <div className="relative z-10 my-auto py-2">
                  <motion.div
                    key={activeEcosystemId}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                      ACTIVE DOMAIN • 0{activeEcosystemId + 1}
                    </span>
                    <h3 className="font-display text-2xl font-black text-white tracking-tight">
                      {ECOSYSTEM_INDUSTRIES[activeEcosystemId]?.title}
                    </h3>
                    <div className="h-[1.5px] w-12 bg-cyan-400 my-2.5 mx-auto shadow-[0_0_8px_#00F0FF]" />
                    <span className="text-[11px] font-mono text-slate-300 block">
                      Enterprise Architecture Ready
                    </span>
                  </motion.div>
                </div>

                {/* Bottom Status Chip */}
                <div className="relative z-10 w-full pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>SLA Adherence</span>
                  <span className="text-emerald-400 font-bold">99.8% Production</span>
                </div>

              </div>
            </div>

            {/* Right Flank: Nodes 05 to 08 */}
            <div className="lg:col-span-4 space-y-3.5 order-3">
              {ECOSYSTEM_INDUSTRIES.slice(4, 8).map((item) => {
                const IconComponent = item.icon;
                const isHovered = activeEcosystemId === item.id;
                const isDimmed = activeEcosystemId !== null && activeEcosystemId !== item.id;
                return (
                  <motion.div
                    key={item.id}
                    onClick={() => handleEcosystemClick(item.id)}
                    whileHover={{ x: -6 }}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden backdrop-blur-md ${
                      isHovered
                        ? 'bg-white/[0.12] border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.25)] scale-[1.02]'
                        : isDimmed
                        ? 'bg-white/[0.02] border-white/5 opacity-40'
                        : 'bg-white/[0.05] border-white/10 hover:border-white/20'
                    }`}
                  >
                    {/* Glowing Right Accent Line */}
                    <div className={`absolute top-0 right-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-400 to-[#0052CC] transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`} />

                    <div className="flex items-start gap-3.5">
                      <div className={`p-2.5 rounded-xl border transition-colors flex-shrink-0 ${
                        isHovered
                          ? 'bg-cyan-400 text-slate-950 border-cyan-300 font-bold'
                          : 'bg-white/5 text-cyan-300 border-white/10'
                      }`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={`font-display text-base font-bold transition-colors ${
                            isHovered ? 'text-cyan-300' : 'text-white'
                          }`}>
                            {item.title}
                          </h4>
                          <span className="text-[10px] font-mono text-cyan-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/10 font-bold">
                            0{item.id + 1}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-2">
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
          6. NEW SECTION 3 — GLOBAL COLLABORATION (PANORAMIC 4-PILLAR SYNERGY DECK)
          Heading: “One Network. Multiple Possibilities.”
          Supporting: “Strong relationships, shared expertise, and technology-driven collaboration help create new possibilities across markets and industries.”
          Design: Compact, high-aesthetic 4-pillar panoramic deck with connected synchronization rail
          ========================================================================= */}
      <section className="py-16 sm:py-20 relative overflow-hidden bg-[#040914] text-white border-t border-white/10">
        
        {/* Subtle Ambient Isometric Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#00F0FF_0.7px,transparent_0.7px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold uppercase bg-white/10 text-cyan-300 border border-white/20 shadow-sm mb-3.5 backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>Network Synergy</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
            >
              One Network. Multiple Possibilities.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-3 text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto"
            >
              Strong relationships, shared expertise, and technology-driven collaboration help create new possibilities across markets and industries.
            </motion.p>
          </div>

          {/* Top Animated Synchronization Rail (Connects all 4 Pillars horizontally) */}
          <div className="hidden lg:block relative mb-8 max-w-5xl mx-auto">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00F0FF]"
                initial={{ left: '-15%' }}
                animate={{ left: '100%' }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            <div className="flex justify-between items-center -mt-2 px-8 text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold">
              <span>● TALENT</span>
              <span>● INFRASTRUCTURE</span>
              <span>● ALLIANCES</span>
              <span>● MULTI-SECTOR</span>
            </div>
          </div>

          {/* 4 Connected Panoramic Pillar Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {COLLABORATION_PILLARS.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-cyan-400/60 hover:bg-white/[0.08] rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group relative overflow-hidden"
                >
                  {/* Top Glowing Gradient Accent */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Header with Pillar Tag & Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="h-12 w-12 rounded-2xl bg-[#0052CC]/25 border border-cyan-400/30 text-cyan-300 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors shadow-sm">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-cyan-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/80 font-semibold block mb-1">
                      CORE PILLAR
                    </span>

                    <h3 className="font-display text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-300 font-semibold">
                    <span>Active Pipeline</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. FINAL CTA
          Heading: “Let’s Build Stronger Global Connections.”
          Supporting: “Connect with KnoovIQ to explore opportunities for collaboration, technology, and business growth.”
          Buttons: “Connect With Us” & “Explore Our Solutions”
          ========================================================================= */}
      <section className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-b from-[#071324] via-[#0A2540] to-[#0A192F] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-white/10 text-cyan-300 border border-white/20 shadow-sm mb-4 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Global Partnership Initiative</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]"
          >
            Let’s Build Stronger Global Connections.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto mb-8"
          >
            Connect with KnoovIQ to explore opportunities for collaboration, technology, and business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => onOpenContact('Global Network Collaboration')}
              className="w-full sm:w-auto btn-primary-gradient shimmer-sweep px-7 py-3.5 rounded-xl text-white font-display text-xs font-bold uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Connect With Us</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => onOpenContact('Global Network: Explore Solutions')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-display text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer backdrop-blur-md"
            >
              Explore Our Solutions
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

