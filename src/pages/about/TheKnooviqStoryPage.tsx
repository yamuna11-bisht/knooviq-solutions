import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Sparkles, 
  Target, 
  Compass, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Award,
  Zap,
  Building2,
  Handshake,
  Settings,
  Lightbulb,
  Clock,
  Globe2,
  Briefcase,
  TrendingUp,
  Users,
  Factory,
  Cpu
} from 'lucide-react';
import { AboutSubnav } from '../../components/AboutSubnav';
import { COMPANY_INFO } from '../../data/knooviqData';

export const TheKnooviqStoryPage: React.FC<{ onOpenContact: (topic?: string) => void }> = ({ onOpenContact }) => {
  return (
    <div className="pb-20 bg-[#F8FAFC] dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-500 overflow-hidden">
      
      {/* Dynamic Background Aurora Blobs */}
      <div className="aurora-sphere-1 top-20 left-1/4 bg-[#00A3E0]/15 dark:bg-[#00F0FF]/15" />
      <div className="aurora-sphere-2 top-96 right-10 bg-[#6366F1]/15 dark:bg-[#8B5CF6]/20" />

      {/* Hero Header with Skyscraper Image & Mild Contrast Scrim */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-20 min-h-[540px] lg:h-[580px] lg:min-h-[580px] flex items-center overflow-hidden">
        {/* Clean Background Image with Mild Left Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="The KnoovIQ Story Enterprise Architectural Heritage"
            className="w-full h-full object-cover object-center"
          />
          {/* Mild Contrast Scrim: Building architecture clearly visible with pleasant soft shading */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/35 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl lg:max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide bg-slate-900/90 border border-white/20 text-white mb-5 backdrop-blur-md shadow-2xl"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34D399]" />
              <span className="font-mono uppercase text-xs tracking-wider font-bold">Corporate Genesis & Heritage Since 2006</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] leading-[1.15] mb-6"
            >
              The <span className="hero-gradient-cyan font-black">KnoovIQ Story</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-white font-medium drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] leading-relaxed font-sans mb-8 max-w-3xl"
            >
              Born from a conviction that enterprise software must deliver enduring business agility rather than technical debt. How an uncompromising dedication to clean-core principles and domain mastery transformed our consultancy into an international SAP transformation powerhouse.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Established 2006</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>100+ Enterprise Deployments</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Multi-Sector Domain Excellence</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shared Sub-Navigation Bar */}
      <AboutSubnav activeTabTitle="The KnoovIQ Story" />

      {/* Section 1: WHO WE ARE & Journey Narrative (Established 2006) */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              {/* Transparent background for WHO WE ARE • ESTABLISHED 2006 */}
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0A2540] font-mono uppercase tracking-wider bg-transparent">
                <Sparkles className="h-3.5 w-3.5 text-[#0052CC]" />
                <span>WHO WE ARE • ESTABLISHED 2006</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Empowering Success: <br />
                <span className="text-gradient-cyan">Knooviq's Journey and Vision</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans font-medium">
                At Knooviq, we’ve been your trusted partner in SAP Consulting and Solutions since our establishment in 2006. With a firm foundation in strong technical skills and unmatched domain expertise, we have consistently delivered excellence in project management, project support, customized application development, manpower outsourcing, and augmentation. Our project implementation exposure across diverse industries, including Retail, Metals & Mining, Oil & Gas, Manufacturing, and more, has solidified our reputation in the market.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                We take pride in our recognized quality of services, on-time delivery, and our expertise in turnkey business solutions. Knooviq is committed to providing strategic guidance to key sectors like Automotive, Manufacturing & Trading, Distribution, Design, and beyond. We are more than just a company; we are your partner in success, ready to empower your organization with innovative strategies and SAP excellence.
              </p>

              {/* Core Competency Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { label: 'Turnkey Solutions', icon: Handshake },
                  { label: 'Manpower Outsourcing', icon: Users },
                  { label: 'Custom Application Dev', icon: Cpu },
                  { label: 'Project Support & AMS', icon: Clock },
                  { label: 'On-Time Delivery SLA', icon: CheckCircle2 },
                  { label: 'Domain Augmentation', icon: Award },
                ].map((badge, idx) => {
                  const BIcon = badge.icon;
                  return (
                    <div key={idx} className="bg-white border border-slate-200/90 shadow-sm rounded-xl p-3 flex items-center gap-2.5 text-xs font-semibold text-slate-800 hover:border-[#0A2540]/30 transition-colors">
                      <BIcon className="h-4 w-4 text-[#0052CC] flex-shrink-0" />
                      <span>{badge.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Editorial Corporate Culture Showcase Image */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop" 
                  alt="Knooviq Senior Enterprise Leadership & Consultants"
                  className="w-full h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                
                {/* Top Badge on Image with Transparent Glass Background */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/30 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-bold uppercase tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>WHO WE ARE • ESTABLISHED 2006</span>
                  </div>
                </div>

                {/* Floating Brand Motto Card with Clean Transparent Glass */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="rounded-2xl p-4 bg-slate-950/40 border border-white/20 backdrop-blur-md text-white shadow-2xl">
                    <span className="text-[10px] font-mono uppercase font-bold text-slate-300 block mb-0.5 tracking-wider">
                      Brand Motto
                    </span>
                    <h4 className="font-display text-base font-bold text-white tracking-tight">
                      "Building Success, Innovating Futures"
                    </h4>
                    <p className="text-xs text-slate-200 mt-1 font-sans leading-relaxed">
                      Pairing deep functional discipline with zero-disruption SAP technical cutovers since 2006.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: The Four Pillars of KnoovIQ Delivery Excellence */}
      <section className="py-20 border-t border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#00A3E0]/10 dark:bg-cyan-500/10 text-[#0077B6] dark:text-cyan-300 border border-[#00A3E0]/20 mb-3">
              <Layers className="h-3 w-3" />
              <span>Execution Discipline</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Four Pillars of Our Enduring Reputation
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 font-sans">
              Why leading industrial enterprises trust KNOOVIQ to steer their most critical enterprise platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Turnkey Business Solutions',
                desc: 'Single-stop accountability for comprehensive software consulting, customized development, and end-to-end rollout governance.',
                icon: Handshake,
                accent: 'border-t-[#00A3E0]'
              },
              {
                title: 'Customized Application Dev',
                desc: 'High-performance bespoke extension engineering adhering strictly to the SAP Clean Core side-by-side extensibility model.',
                icon: Cpu,
                accent: 'border-t-indigo-500'
              },
              {
                title: 'Manpower Augmentation',
                desc: 'Rapid deployment of certified senior functional consultants and technical architects directly embedded into client project teams.',
                icon: Users,
                accent: 'border-t-emerald-500'
              },
              {
                title: '24/7 SLA Support & AMS',
                desc: 'Tier-1 to Tier-4 production operations with sub-15 minute emergency incident escalation and zero business disruption guarantees.',
                icon: Clock,
                accent: 'border-t-cyan-400'
              },
            ].map((pillar, idx) => {
              const PIcon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className={`glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between border-t-4 ${pillar.accent} relative overflow-hidden`}
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00A3E0]/10 dark:bg-cyan-500/15 border border-[#00A3E0]/20 dark:border-cyan-400/30 mb-5">
                      <PIcon className="h-6 w-6 text-[#00A3E0] dark:text-cyan-300" />
                    </div>
                    <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-slate-200 dark:border-white/10 text-[11px] font-mono text-[#0052CC] font-semibold">
                    Rigorous SLA Standards
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Section 3: Industry Footprint Showcase with Photography */}
      <section className="py-20 border-t border-slate-200 dark:border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540]">
                Multi-Sector Domain Expertise
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
                Proven Exposure Across Diverse Global Industries
              </h3>
              <p className="mt-3 text-sm text-slate-600 font-sans">
                Turnkey SAP implementations engineered to tackle specific regulatory, supply chain, and asset lifecycle challenges.
              </p>
            </div>
            <button
              onClick={() => onOpenContact('Industry Solutions')}
              className="btn-primary-gradient shimmer-sweep rounded-2xl px-6 py-3 text-xs font-bold uppercase tracking-wider text-white font-display inline-flex items-center gap-2 self-start md:self-auto shadow-md"
            >
              <span>Consult an Industry Expert</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                sector: 'Retail & Consumer Goods',
                desc: 'Real-time inventory visibility, omnichannel POS integration, markdown optimization, and high-velocity supply replenishment.',
                image: '/images/retail_consumer_goods.png',
                tag: 'Omnichannel ERP'
              },
              {
                sector: 'Metals & Mining',
                desc: 'Heavy machinery asset management, grade-wise batch tracking, environmental regulatory compliance, and mine-to-port logistics.',
                image: '/images/metals_mining.png',
                tag: 'Plant Maintenance (PM)'
              },
              {
                sector: 'Oil & Gas',
                desc: 'Joint venture accounting (JVA), refinery maintenance workflows, supply contract reconciliation, and hazardous materials governance.',
                image: '/images/oil_gas.jpg',
                tag: 'Mission-Critical Ops'
              },
              {
                sector: 'Discrete & Process Manufacturing',
                desc: 'Shop floor MES-to-ERP telemetry, advanced production scheduling (PP/DS), material ledger cost variance, and quality audit trails.',
                image: '/images/process_manufacturing_story.png',
                tag: 'Production Planning (PP)'
              },
              {
                sector: 'Automotive & Trading',
                desc: 'Just-in-Time (JIT) supplier sequencing, OEM EDI integration, global aftermarket distribution, and warranty claims tracking.',
                image: '/images/automotive_trading_story.jpg',
                tag: 'JIT & Supplier Sync'
              },
              {
                sector: 'Distribution & Design',
                desc: 'Extended Warehouse Management (EWM), multi-modal freight billing, 3D CAD to SAP BOM synchronizer, and product lifecycle management.',
                image: '/images/distribution_design_story.png',
                tag: 'EWM & Freight Logistics'
              },
            ].map((ind, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 group h-80 flex flex-col justify-end p-6"
              >
                <img 
                  src={ind.image} 
                  alt={ind.sector}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent" />
                
                <div className="relative z-10 space-y-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-lg bg-[#0A2540]/80 border border-white/20 text-[10px] font-mono font-bold text-white uppercase">
                    {ind.tag}
                  </span>
                  <h4 className="font-display text-lg font-bold text-white leading-snug">
                    {ind.sector}
                  </h4>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-2">
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 4: Why Choose Us? (With Capability Performance Metrics) */}
      <section className="py-20 border-t border-slate-200 bg-slate-50/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Dedicated Team Collaboration Card with Executive KNOOVIQ Badge */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                  alt="Knooviq Dedicated Professionals Team"
                  className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Distinct Executive KNOOVIQ Brand Banner */}
                <div className="absolute bottom-8 left-0 z-20">
                  <div className="bg-[#0A2540] text-white px-7 py-2.5 rounded-r-xl font-display font-black tracking-widest text-sm shadow-xl flex items-center gap-2 uppercase border-r border-t border-b border-[#0052CC]/50">
                    <span>KNOOVIQ</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right Column: Why Choose Us Content & Capability Progress Bars */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Why Choose Us?
                </h3>
                <div className="flex items-center gap-1 mt-2 mb-4">
                  <span className="h-1 w-6 bg-[#0A2540] rounded-full" />
                  <span className="h-1 w-3 bg-[#0052CC] rounded-full" />
                  <span className="h-1 w-1 bg-[#1D4ED8] rounded-full" />
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-sans font-medium">
                Knooviq Industries is a Business Consulting & Outsourcing company, promoted by a team of dedicated, highly experienced professionals with the aim of providing cost effective and high quality technical & professional solutions to its customers. As your single stop for comprehensive Solutions, Software Support and Consulting, Knooviq offers you high quality, objective oriented services to suit your IT budget and needs.
              </p>

              {/* Capability Performance Bars */}
              <div className="space-y-4 pt-2">
                {[
                  { label: 'Consulting Discipline', percentage: 85 },
                  { label: 'Implementation Precision', percentage: 92 },
                  { label: 'Clean Core Integration', percentage: 88 },
                  { label: 'Staffing & Support Excellence', percentage: 95 }
                ].map((bar, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-800 font-display">
                      <span>{bar.label}</span>
                      <span className="text-[#0A2540] font-mono font-bold">{bar.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden p-[1px]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.15, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-[#0A2540] via-[#0052CC] to-[#1D4ED8] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                {['Turnkey Solutions', '24/7 SLA Guarantee', 'Cost-Effective Delivery', 'Established 2006'].map((pill, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>{pill}</span>
                  </span>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Section 5: Evolutionary Roadmap & Phases */}
      <section className="py-20 border-t border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0A2540] font-mono">
              The Journey So Far
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Milestones of Growth & Innovation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel glass-panel-hover rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#0A2540] uppercase">Phase 01 • 2006</span>
                <h3 className="font-display text-xl font-bold text-slate-900 mt-2 mb-3">
                  Genesis & Core ERP Advisory
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans mb-6">
                  Founded with strong technical skills and unmatched domain expertise, delivering excellence in project management, SAP ECC support, and talent augmentation for regional enterprises.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 text-[11px] font-mono font-semibold text-slate-500">
                Strategic Foundation Established
              </div>
            </div>

            <div className="glass-panel glass-panel-hover rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between border-slate-200/90">
              <div>
                <span className="text-xs font-mono font-bold text-[#0052CC] uppercase">Phase 02 • Expansion</span>
                <h3 className="font-display text-xl font-bold text-slate-900 mt-2 mb-3">
                  S/4HANA & Clean Core Pioneer
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans mb-6">
                  Expanded across Metals & Mining, Oil & Gas, Retail, and Automotive. Pioneered automated ABAP code remediation and SAP BTP side-by-side cloud extensibility.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 text-[11px] font-mono font-semibold text-[#0052CC]">
                100% Clean Core Compliance
              </div>
            </div>

            <div className="glass-panel glass-panel-hover rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-600 uppercase">Phase 03 • Global Scale</span>
                <h3 className="font-display text-xl font-bold text-slate-900 mt-2 mb-3">
                  24/7 Global Delivery & AI
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans mb-6">
                  Delivering 24/7 SLA-governed AMS and turnkey digital transformations globally, integrating SAP Joule Copilot and predictive supply chain intelligence.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 text-[11px] font-mono font-semibold text-emerald-600">
                Global Follow-the-Sun Network
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

