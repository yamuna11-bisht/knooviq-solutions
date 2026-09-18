import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Target, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Layers, 
  Clock, 
  Award, 
  Globe2, 
  Sparkles, 
  TrendingUp, 
  PhoneCall, 
  MapPin, 
  ShieldCheck, 
  Cpu, 
  Mail, 
  Phone,
  Compass,
  Briefcase,
  Zap,
  ChevronRight,
  Handshake,
  Settings,
  Lightbulb,
  BookOpen
} from 'lucide-react';
import { COMPANY_INFO } from '../data/knooviqData';
import { ClientLogoMarquee } from '../components/ClientLogoMarquee';

interface AboutPageProps {
  onOpenContact: (topic?: string) => void;
}

const ABOUT_SECTIONS = [
  { id: 'story', label: 'The KnoovIQ Story', icon: BookOpen },
  { id: 'leadership', label: 'Visionary Leadership', icon: Award },
  { id: 'excellence', label: 'Digital & SAP Excellence', icon: Sparkles },
  { id: 'network', label: 'Our Global Network', icon: Globe2 },
  { id: 'grow-with-us', label: 'Grow With Us', icon: TrendingUp },
  { id: 'connect', label: 'KnoovIQ Connect', icon: PhoneCall },
  { id: 'presence', label: 'Global Presence', icon: MapPin },
];

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact }) => {
  const location = useLocation();
  const [activeSubnav, setActiveSubnav] = useState('story');

  // Handle smooth scroll when URL has #hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setActiveSubnav(id);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const offset = 100;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 150);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const scrollToSection = (id: string) => {
    setActiveSubnav(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pb-20 bg-[#F8FAFC] dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-500 overflow-hidden">
      
      {/* Ambient Aurora Glows */}
      <div className="aurora-sphere-1 top-20 left-1/4 bg-[#00A3E0]/15 dark:bg-[#00F0FF]/15" />
      <div className="aurora-sphere-2 top-96 right-10 bg-[#6366F1]/15 dark:bg-[#8B5CF6]/20" />

      {/* Hero Header with Cinematic Enterprise Architecture Background Image */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-20 min-h-[540px] lg:h-[580px] lg:min-h-[580px] flex items-center overflow-hidden">
        {/* Clean Background Image with Directional Left Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop" 
            alt="About KNOOVIQ Enterprise Architecture"
            className="w-full h-full object-cover object-center"
          />
          {/* Directional left scrim to guarantee 100% text visibility while keeping photo crystal-clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl lg:max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide bg-slate-900/90 border border-white/20 text-white mb-5 backdrop-blur-md shadow-2xl"
            >
              <Building2 className="h-3.5 w-3.5 text-[#93C5FD]" />
              <span className="font-mono uppercase text-xs tracking-wider">Enterprise Architecture & Transformation Partner</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] leading-[1.15] mb-6"
            >
              Architecting the Future of{' '}
              <span className="hero-gradient-cyan font-black">Enterprise Technology</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-white font-medium drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] leading-relaxed font-sans mb-8 max-w-3xl"
            >
              From our headquarters in Mumbai to enterprise landscapes worldwide, KNOOVIQ unifies clean-core engineering, 24/7 SLA-governed support, and deep SAP functional governance to build resilient, future-ready business ecosystems.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Clean-Core SAP Architecture</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Zero-Disruption Enterprise Cutovers</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>24/7 Follow-the-Sun SLA Governance</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sleek Compact Sticky 7-Pillar Sub-Navigation Bar with Left-to-Right Rotating Animation */}
      <div className="sticky top-[68px] z-40 bg-white/95 backdrop-blur-xl border-y border-slate-200/90 py-2 sm:py-2.5 shadow-[0_4px_16px_-4px_rgba(10,37,64,0.06)] overflow-hidden">
        {/* Refined Edge Border Accents */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-slate-200/90 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-slate-200/90 pointer-events-none" />

        <div className="relative w-full overflow-hidden">
          {/* Frosted Edge Blur Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* Continuous Left-to-Right Rotating Animated Track */}
          <div className="animate-rotate-ltr flex items-center gap-4 sm:gap-6 lg:gap-7 py-0.5 px-6">
            {[...ABOUT_SECTIONS, ...ABOUT_SECTIONS].map((sec, idx) => {
              const Icon = sec.icon;
              const isActive = activeSubnav === sec.id;

              return (
                <button
                  key={`${sec.id}-${idx}`}
                  onClick={() => scrollToSection(sec.id)}
                  className={`group relative flex items-center gap-2.5 px-4 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 font-display flex-shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#0A2540] text-white shadow-md border border-[#0A2540] scale-105'
                      : 'bg-white text-slate-700 hover:text-[#0A2540] hover:bg-slate-50 border border-slate-200/90 shadow-sm hover:border-[#0A2540]/40 hover:shadow-md hover:scale-105'
                  }`}
                >
                  {/* Compact Icon Container Tile */}
                  <div className={`flex items-center justify-center h-6 w-6 rounded-lg transition-all duration-300 shadow-sm ${
                    isActive
                      ? 'bg-white/15 text-white'
                      : 'bg-slate-100 text-[#0A2540] border border-slate-200 group-hover:bg-[#0A2540] group-hover:text-white group-hover:border-[#0A2540]'
                  }`}>
                    <Icon className="h-3.5 w-3.5" />
                  </div>

                  {/* Label */}
                  <span className="tracking-tight text-xs font-bold">{sec.label}</span>

                  {/* Active Pulsing Indicator Dot */}
                  {isActive && (
                    <span className="relative flex h-1.5 w-1.5 ml-0.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-200 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 1: WHO WE ARE (THE KNOOVIQ STORY, JOURNEY & VISION)
          ========================================================================= */}
      <section id="story" className="py-24 border-b border-slate-200 dark:border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Who We Are Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            
            <div className="lg:col-span-7 space-y-6">
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

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  'Turnkey Business Solutions',
                  'Manpower Outsourcing',
                  'Customized Application Dev',
                  'Project Support & AMS',
                  'On-Time Delivery SLA',
                  'Talent Augmentation'
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200/90 shadow-sm rounded-xl p-3 flex items-center gap-2 text-xs font-semibold text-slate-800 hover:border-[#0A2540]/30 transition-colors">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#0052CC] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Evolution Card Since 2006 */}
            <div className="lg:col-span-5">
              <div className="glass-panel rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                <h3 className="font-display text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Compass className="h-5 w-5 text-[#0A2540]" />
                  <span>Evolutionary Milestones</span>
                </h3>

                <div className="space-y-6 relative border-l-2 border-slate-200 pl-6 ml-2">
                  <div className="relative">
                    <span className="absolute -left-[31px] top-0 h-4 w-4 rounded-full bg-[#0A2540] ring-4 ring-white" />
                    <span className="text-[11px] font-mono font-bold text-[#0A2540] uppercase">2006 • Establishment</span>
                    <h4 className="font-display text-sm font-bold text-slate-900 mt-0.5">Foundational Genesis & Domain Leadership</h4>
                    <p className="text-xs text-slate-600 mt-1 font-sans">Established with strong technical skills, delivering excellence in project management, SAP ECC support, and manpower augmentation.</p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-[31px] top-0 h-4 w-4 rounded-full bg-[#0052CC] ring-4 ring-white" />
                    <span className="text-[11px] font-mono font-bold text-[#0052CC] uppercase">Industry Exposure</span>
                    <h4 className="font-display text-sm font-bold text-slate-900 mt-0.5">Diverse Multi-Sector Expansion</h4>
                    <p className="text-xs text-slate-600 mt-1 font-sans">Delivered turnkey implementations across Metals & Mining, Oil & Gas, Retail, Automotive, Manufacturing & Trading, and Distribution.</p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-[31px] top-0 h-4 w-4 rounded-full bg-emerald-600 ring-4 ring-white" />
                    <span className="text-[11px] font-mono font-bold text-emerald-600 uppercase">Modern Era</span>
                    <h4 className="font-display text-sm font-bold text-slate-900 mt-0.5">Clean-Core S/4HANA & Turnkey Innovation</h4>
                    <p className="text-xs text-slate-600 mt-1 font-sans">International technology partner powering zero-disruption SAP migrations, customized development, and 24/7 strategic advisory.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* =========================================================================
              SAP CORE TRIAD ARCHITECTURE (Services, Solutions, Industry Specific)
              ========================================================================= */}
          <div className="pt-12 pb-16 border-t border-slate-200">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-slate-100 text-[#0A2540] border border-slate-200 mb-3">
                <Layers className="h-3 w-3" />
                <span>Unified SAP Ecosystem</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
                Comprehensive SAP Consulting & Solutions Framework
              </h3>
              <p className="mt-3 text-sm text-slate-600 font-sans">
                Connecting core SAP capabilities, end-to-end service lifecycles, and tailored industry practices into one seamless enterprise delivery model.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Card 1: SERVICES */}
              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="glass-panel rounded-3xl p-8 border-t-4 border-t-slate-700 flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-slate-800 text-white flex items-center justify-center shadow-lg">
                      <Handshake className="h-6 w-6 text-slate-200" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                      Pillar 01
                    </span>
                  </div>
                  <h4 className="font-display text-xl font-bold text-slate-900 mb-2 uppercase tracking-wide">
                    SERVICES
                  </h4>
                  <p className="text-xs text-slate-600 font-sans mb-6">
                    End-to-end lifecycle consulting, technical stewardship, and 24/7 mission-critical operations.
                  </p>
                  <div className="space-y-2.5">
                    {['Consulting', 'Implementation', 'Support & AMS', 'System Upgrade', 'Global Rollout'].map((srv, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-800 font-display">
                        <CheckCircle2 className="h-3.5 w-3.5 text-slate-600 flex-shrink-0" />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-200 text-[11px] font-mono text-slate-500">
                  Full SLA Governance
                </div>
              </motion.div>

              {/* Card 2: SOLUTIONS */}
              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="glass-panel rounded-3xl p-8 border-t-4 border-t-emerald-600 flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-600/15 text-emerald-700 flex items-center justify-center border border-emerald-600/30 shadow-lg">
                      <Settings className="h-6 w-6 text-emerald-600" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700">
                      Pillar 02
                    </span>
                  </div>
                  <h4 className="font-display text-xl font-bold text-slate-900 mb-2 uppercase tracking-wide">
                    SOLUTIONS
                  </h4>
                  <p className="text-xs text-slate-600 font-sans mb-6">
                    Comprehensive enterprise application platforms designed for high-velocity transaction velocity.
                  </p>
                  <div className="space-y-2.5">
                    {['SAP Business All-in-One', 'SAP Architecture Analysis', 'SAP S/4HANA & S/4HANA Cloud', 'In-Memory HANA Data Analytics'].map((sol, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-800 font-display">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-200 text-[11px] font-mono text-emerald-600">
                  High Performance Core
                </div>
              </motion.div>

              {/* Card 3: INDUSTRY SPECIFIC SOLUTIONS */}
              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="glass-panel rounded-3xl p-8 border-t-4 border-t-[#0A2540] flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-slate-100 text-[#0A2540] flex items-center justify-center border border-slate-200 shadow-lg">
                      <Lightbulb className="h-6 w-6 text-[#0A2540]" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-[#0A2540]">
                      Pillar 03
                    </span>
                  </div>
                  <h4 className="font-display text-xl font-bold text-slate-900 mb-2 uppercase tracking-wide">
                    INDUSTRY SPECIFIC
                  </h4>
                  <p className="text-xs text-slate-600 font-sans mb-6">
                    Turnkey domain blueprints tailored to regulatory, supply chain, and manufacturing complexities.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Retail & CPG',
                      'Metals & Mining',
                      'Oil & Gas',
                      'Discrete Manufacturing',
                      'Automotive',
                      'Trading & Distribution',
                      'Design & Engineering'
                    ].map((ind, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[11px] font-medium text-slate-800">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-200 text-[11px] font-mono text-[#0A2540]">
                  Custom Turnkey Blueprints
                </div>
              </motion.div>
            </div>
          </div>

          {/* =========================================================================
              CLIENT LOGO CONTINUOUS ROTATING MARQUEE TICKER (LEFT TO RIGHT)
              ========================================================================= */}
          <div className="pt-8 pb-4">
            <ClientLogoMarquee 
              title="Trusted by Leading Enterprises & Industry Titans" 
              subtitle="MARQUEE CLIENT PORTFOLIO • ESTABLISHED 2006"
              className="rounded-3xl border border-slate-200/90 shadow-sm"
            />
          </div>

          {/* =========================================================================
              WHY CHOOSE US? (WITH CAPABILITY METRICS & TEAM PHOTO)
              ========================================================================= */}
          <div className="pt-16 pb-6 border-t border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Team Collaboration Image with Executive KNOOVIQ Badge */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                    alt="Knooviq Dedicated Professionals Team"
                    className="w-full h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
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
                  Knooviq Industries is a Business Consulting & Outsourcing company, promoted by team of dedicated, highly experienced professionals with the aim of providing cost effective and high quality technical & professional solutions to its customers. As your single stop for comprehensive Solutions, Software Support and Consulting, Knooviq offers you a high quality, objective oriented services to suit your IT budget and needs.
                </p>

                {/* Capability Performance Bars */}
                <div className="space-y-4 pt-2">
                  {[
                    { label: 'Consulting', percentage: 85 },
                    { label: 'Implementation', percentage: 92 },
                    { label: 'Integration', percentage: 88 },
                    { label: 'Staffing & Support', percentage: 95 }
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
                  {['Turnkey Solutions', '24/7 SLA Guarantee', 'Cost-Effective Delivery', 'Proven Domain Expertise'].map((pill, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                      <span>{pill}</span>
                    </span>
                  ))}
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: VISIONARY LEADERSHIP
          ========================================================================= */}
      <section id="leadership" className="py-24 border-b border-slate-200 dark:border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#00A3E0]/15 dark:bg-cyan-400/20 border border-[#00A3E0]/30 dark:border-cyan-400/30 px-3.5 py-1 text-xs font-bold text-[#0077B6] dark:text-cyan-300 font-mono mb-3">
              <Award className="h-3 w-3" />
              <span>Section 02</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Visionary Leadership
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Our leadership council unites enterprise strategists, SAP Platinum-grade architects, and operational veterans dedicated to principled governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                role: 'Strategic Management Council',
                focus: 'Enterprise Vision & Governance',
                desc: 'Steering long-term corporate vision, global alliances, and ensuring uncompromising client satisfaction across all engagements.',
                icon: <Award className="h-6 w-6 text-[#00A3E0] dark:text-cyan-400" />
              },
              {
                role: 'SAP Practice Architecture',
                focus: 'S/4HANA & Clean Core Standards',
                desc: 'Spearheading technological excellence, standard fit-to-standard methodologies, and zero-modification BTP cloud extensions.',
                icon: <Cpu className="h-6 w-6 text-sky-500 dark:text-sky-400" />
              },
              {
                role: 'Global AMS & Operations',
                focus: '24/7 SLA Delivery Discipline',
                desc: 'Governing ITIL v4 operations, sub-15 minute emergency responses, and high-availability ERP disaster recovery frameworks.',
                icon: <Clock className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
              },
              {
                role: 'Talent & Workforce Enablement',
                focus: 'Corporate Academy & Change Mgmt',
                desc: 'Cultivating top-tier functional consultants and designing customized enterprise workforce enablement academies.',
                icon: <Users className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />
              }
            ].map((lead, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between overflow-hidden relative group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />

                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00A3E0]/15 dark:bg-[#030712] border border-[#00A3E0]/25 dark:border-cyan-400/30 mb-5 shadow-inner">
                    {lead.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-400 block mb-1">
                    {lead.focus}
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {lead.role}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {lead.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200 dark:border-white/10 flex items-center gap-1.5 text-xs font-semibold text-[#0077B6] dark:text-cyan-300 font-display">
                  <span>Executive Governance</span>
                  <ChevronRight className="h-3 w-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: DIGITAL & SAP EXCELLENCE
          ========================================================================= */}
      <section id="excellence" className="py-24 border-b border-slate-200 dark:border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#00A3E0]/15 dark:bg-cyan-400/20 border border-[#00A3E0]/30 dark:border-cyan-400/30 px-3.5 py-1 text-xs font-bold text-[#0077B6] dark:text-cyan-300 font-mono">
                <Sparkles className="h-3 w-3" />
                <span>Section 03</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                Digital & SAP Excellence
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Our architectural rigor is rooted in industry best practices, automated quality governance, and the official SAP Clean Core framework. We engineer resilient systems that adapt at the speed of modern business.
              </p>

              <div className="space-y-3">
                {[
                  'SAP S/4HANA 2023/2025 Cloud & On-Premise Architectures',
                  'SAP BTP Side-by-Side Decoupled Integration Frameworks',
                  'Universal Journal (ACDOCA) & Real-Time Financial Closing',
                  'Automated ABAP Modernization & Zero-Data-Loss Cutover',
                  'ITIL v4 Governance with Sub-15 Min Emergency Escalation'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200 font-display">
                    <CheckCircle2 className="h-4 w-4 text-[#00A3E0] dark:text-cyan-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenContact('SAP Excellence Advisory')}
                className="btn-primary-gradient shimmer-sweep rounded-2xl px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white font-display inline-flex items-center gap-2"
              >
                <span>Request Architectural Blueprint</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {COMPANY_INFO.metrics.map((m, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-center text-center relative overflow-hidden"
                >
                  <div className="font-display text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-sky-600 to-[#00A3E0] dark:from-white dark:via-cyan-200 dark:to-cyan-400 mb-2">
                    {m.value}
                  </div>
                  <div className="font-display text-sm font-bold text-slate-800 dark:text-white mb-1">
                    {m.label}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                    Backed by contractually governed service level agreements.
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR GLOBAL NETWORK
          ========================================================================= */}
      <section id="network" className="py-24 border-b border-slate-200 dark:border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#00A3E0]/15 dark:bg-cyan-400/20 border border-[#00A3E0]/30 dark:border-cyan-400/30 px-3.5 py-1 text-xs font-bold text-[#0077B6] dark:text-cyan-300 font-mono mb-3">
              <Globe2 className="h-3 w-3" />
              <span>Section 04</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Our Global Network
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Follow-the-sun 24/7 delivery hubs orchestrating mission-critical enterprise workloads across continents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Offshore Development Center (ODC)',
                badge: 'Mumbai Core Campus',
                desc: 'Centralized high-throughput engineering and testing labs delivering complex ABAP on HANA refactoring, BTP microservices, and continuous QA.',
                stat: 'Direct Agile Sprints'
              },
              {
                title: 'Follow-The-Sun 24/7 AMS',
                badge: 'Global NOC & SOC',
                desc: 'Tier-1 to Tier-4 monitoring infrastructure observing enterprise ERP transactions in real-time with proactive threshold auto-remediation.',
                stat: '99.9% Uptime Guarantee'
              },
              {
                title: 'Regional On-Site Advisory',
                badge: 'Client Strategic Hubs',
                desc: 'Senior engagement directors and functional architects stationed on-site with clients to direct executive fit-to-standard workshops.',
                stat: 'Direct Stakeholder Alignment'
              }
            ].map((net, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group"
              >
                <div>
                  <span className="rounded-full bg-[#00A3E0]/15 dark:bg-cyan-400/20 border border-[#00A3E0]/30 dark:border-cyan-400/30 px-3 py-1 text-[11px] font-mono font-bold text-[#0077B6] dark:text-cyan-300 mb-4 inline-block">
                    {net.badge}
                  </span>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {net.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-6">
                    {net.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-bold text-[#0077B6] dark:text-cyan-300 font-display">
                  <span>{net.stat}</span>
                  <Globe2 className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: GROW WITH US
          ========================================================================= */}
      <section id="grow-with-us" className="py-24 border-b border-slate-200 dark:border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/15 via-cyan-400/10 to-transparent rounded-bl-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                  <TrendingUp className="h-3 w-3" />
                  <span>Section 05 • Careers & Culture</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                  Grow With Us
                </h2>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-2xl">
                  At KNOOVIQ, we invest deeply in our people. From sponsored official SAP certifications and continuous architectural training to an inclusive, high-performance culture, your growth powers enterprise success.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="rounded-2xl bg-white/70 dark:bg-[#030712]/60 p-4 border border-slate-200 dark:border-white/10 shadow-sm">
                    <h4 className="font-display text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">Certification Sponsorship</h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 font-sans">100% funded SAP S/4HANA, BTP, and Cloud Architect credentials.</p>
                  </div>
                  <div className="rounded-2xl bg-white/70 dark:bg-[#030712]/60 p-4 border border-slate-200 dark:border-white/10 shadow-sm">
                    <h4 className="font-display text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">Global Project Exposure</h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 font-sans">Direct involvement in multi-country Greenfield rollouts and cloud cutovers.</p>
                  </div>
                  <div className="rounded-2xl bg-white/70 dark:bg-[#030712]/60 p-4 border border-slate-200 dark:border-white/10 shadow-sm">
                    <h4 className="font-display text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">Empowered Flexibility</h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 font-sans">Hybrid collaboration, wellness support, and fast-track merit leadership paths.</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    to="/careers"
                    className="btn-primary-gradient shimmer-sweep rounded-2xl px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white font-display inline-flex items-center gap-2"
                  >
                    <span>Explore Open Positions</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <a
                    href="mailto:careers@knooviq.com"
                    className="rounded-2xl border border-slate-300 dark:border-white/15 bg-white/90 dark:bg-[#030712]/80 px-6 py-3.5 text-xs font-bold text-slate-800 dark:text-slate-200 font-display hover:border-cyan-400 transition-colors shadow-sm inline-flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4 text-[#00A3E0] dark:text-cyan-400" />
                    <span>Send Resume: careers@knooviq.com</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center items-center text-center p-6 rounded-2xl bg-white/60 dark:bg-[#030712]/70 border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 mb-4 shadow-lg shadow-emerald-500/20">
                  <Briefcase className="h-8 w-8" />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Join 45+ SAP Architects
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sans mb-4">
                  Now hiring Senior S/4HANA Consultants, ABAP on HANA Developers, and BTP Integration Leads in Mumbai.
                </p>
                <Link
                  to="/careers"
                  className="text-xs font-bold text-[#00A3E0] dark:text-cyan-400 hover:underline font-display"
                >
                  View Talent Openings →
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: KNOOVIQ CONNECT
          ========================================================================= */}
      <section id="connect" className="py-24 border-b border-slate-200 dark:border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#00A3E0]/15 dark:bg-cyan-400/20 border border-[#00A3E0]/30 dark:border-cyan-400/30 px-3.5 py-1 text-xs font-bold text-[#0077B6] dark:text-cyan-300 font-mono mb-3">
              <PhoneCall className="h-3 w-3" />
              <span>Section 06</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              KnoovIQ Connect
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Connect directly with our enterprise consulting leadership. We provide confidential, zero-obligation architecture assessments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00A3E0]/15 dark:bg-[#030712] border border-[#00A3E0]/25 dark:border-cyan-400/30 mb-5 text-[#00A3E0] dark:text-cyan-400 shadow-inner">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Executive Consultation Phone
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-4">
                  Speak directly with an enterprise solutions architect regarding your active landscape or upcoming cutover.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                <a href="tel:+917900073410" className="text-sm font-bold text-[#0077B6] dark:text-cyan-300 hover:underline font-mono">
                  +91-7900073410
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00A3E0]/15 dark:bg-[#030712] border border-[#00A3E0]/25 dark:border-cyan-400/30 mb-5 text-[#00A3E0] dark:text-cyan-400 shadow-inner">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Enterprise Advisory Inbox
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-4">
                  Submit RFP documents, enterprise scoping queries, or request formal corporate credentials.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                <a href="mailto:admin@knooviq.com" className="text-sm font-bold text-[#0077B6] dark:text-cyan-300 hover:underline font-mono">
                  admin@knooviq.com
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00A3E0]/15 dark:bg-[#030712] border border-[#00A3E0]/25 dark:border-cyan-400/30 mb-5 text-[#00A3E0] dark:text-cyan-400 shadow-inner">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Instant Assessment Booking
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-4">
                  Book a structured 30-minute Clean Core & S/4HANA readiness review with our senior SAP practice team.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                <button
                  onClick={() => onOpenContact('KnoovIQ Connect: 30-Min Assessment')}
                  className="btn-primary-gradient shimmer-sweep w-full rounded-xl py-2.5 text-xs font-bold uppercase tracking-wider text-white font-display"
                >
                  Schedule Assessment
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: GLOBAL PRESENCE
          ========================================================================= */}
      <section id="presence" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#00A3E0]/15 dark:bg-cyan-400/20 border border-[#00A3E0]/30 dark:border-cyan-400/30 px-3.5 py-1 text-xs font-bold text-[#0077B6] dark:text-cyan-300 font-mono mb-3">
              <MapPin className="h-3 w-3" />
              <span>Section 07</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Global Presence
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Headquartered in Mumbai, India, with delivery hubs and strategic partner offices serving clients worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Headquarters Card */}
            <div className="lg:col-span-6">
              <div className="glass-panel rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-400/15 to-transparent rounded-bl-full pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="rounded-full bg-[#00A3E0]/15 dark:bg-cyan-400/20 border border-[#00A3E0]/30 dark:border-cyan-400/30 px-3.5 py-1 text-xs font-mono font-bold text-[#0077B6] dark:text-cyan-300">
                      Primary Headquarters
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-emerald-500 font-semibold font-mono">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      HQ Active (IST)
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Mumbai, Maharashtra, India
                  </h3>
                  <p className="text-xs font-mono text-[#00A3E0] dark:text-cyan-400 font-bold mb-4">
                    KNOOVIQ Industries Private Limited
                  </p>

                  <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 font-sans mb-6">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="h-4 w-4 text-[#00A3E0] dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>B15, Shree Siddhivinayak Plaza, Opp. City Mall, Off Link Road, Andheri (W), Mumbai - 400053, Maharashtra, India.</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="h-4 w-4 text-[#00A3E0] dark:text-cyan-400 flex-shrink-0" />
                      <span>+91-7900073410</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="h-4 w-4 text-[#00A3E0] dark:text-cyan-400 flex-shrink-0" />
                      <span>admin@knooviq.com</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>CIN: U72900MH2023PTC410884</span>
                  <button
                    onClick={() => onOpenContact('Mumbai HQ Visit / Consultation')}
                    className="text-xs font-bold text-[#00A3E0] dark:text-cyan-300 hover:underline font-display"
                  >
                    Request Meeting →
                  </button>
                </div>
              </div>
            </div>

            {/* Regional Hubs & International Delivery */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  city: 'Pune Delivery Hub',
                  country: 'India',
                  role: 'Offshore Development & Testing',
                  timing: 'IST (UTC +5:30)',
                  badge: 'Development Center'
                },
                {
                  city: 'Bengaluru Center',
                  country: 'India',
                  role: 'SAP BTP Cloud Innovation Lab',
                  timing: 'IST (UTC +5:30)',
                  badge: 'Cloud Lab'
                },
                {
                  city: 'Dubai Partner Office',
                  country: 'United Arab Emirates',
                  role: 'Middle East Regional Delivery',
                  timing: 'GST (UTC +4:00)',
                  badge: 'EMEA Partner'
                },
                {
                  city: 'Singapore Advisory',
                  country: 'Singapore',
                  role: 'APAC Regional Client Services',
                  timing: 'SGT (UTC +8:00)',
                  badge: 'APAC Advisory'
                }
              ].map((loc, idx) => (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:border-[#00A3E0] transition-colors"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#00A3E0] dark:text-cyan-400 uppercase tracking-wider block mb-1">
                      {loc.badge}
                    </span>
                    <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      {loc.city}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-2 font-medium">
                      {loc.country}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans">
                      {loc.role}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-200 dark:border-white/10 text-[10px] font-mono text-slate-400">
                    Time Zone: {loc.timing}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
