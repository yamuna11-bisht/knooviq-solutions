import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Award, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Briefcase, 
  Sparkles,
  Compass,
  GraduationCap,
  Lightbulb,
  Layers,
  Search,
  Target,
  ShieldCheck,
  Code,
  Database,
  Building2,
  ChevronRight,
  Clock
} from 'lucide-react';
import { AboutSubnav } from '../../components/AboutSubnav';

// SECTION 1: Why Grow With KnoovIQ? (Editorial 4 Aspects)
const GROWTH_ASPECTS = [
  {
    id: 'learning',
    title: 'Learning & Development',
    tagline: 'Continuous Knowledge Acceleration',
    description: 'Encourage continuous learning and development.',
    detail: 'From specialized technology workshops to architectural masterclasses, we create dedicated space for skills evolution and intellectual growth.',
    icon: GraduationCap,
    accent: '#0052CC',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'opportunities',
    title: 'Diverse Opportunities',
    tagline: 'Multi-Disciplinary Pathways',
    description: 'Explore opportunities across technology, SAP, business, and support functions.',
    detail: 'Work across complex enterprise landscapes, specialized advisory engagements, and modern cloud ecosystems that broaden your professional perspective.',
    icon: Layers,
    accent: '#00A3E0',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'innovation',
    title: 'Innovation',
    tagline: 'A Culture of Purposeful Ideation',
    description: 'Work in an environment where ideas and new approaches are encouraged.',
    detail: 'Challenge conventions and craft modern solutions. We celebrate initiative, fresh methodologies, and engineers who build with lasting purpose.',
    icon: Lightbulb,
    accent: '#6366F1',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'growth',
    title: 'Professional Growth',
    tagline: 'Merit-Driven Advancement',
    description: 'Develop skills, take on new challenges, and grow professionally.',
    detail: 'Embrace meaningful ownership. Our progression models recognize impact, architectural depth, and leadership capability at every career stage.',
    icon: TrendingUp,
    accent: '#10B981',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop'
  }
];

// SECTION 2: Growth Journey Milestones (5 Stages - Vibrant Colorful Edition)
const JOURNEY_STAGES = [
  {
    step: '01',
    title: 'Discover',
    tag: 'EXPLORE POTENTIAL',
    description: 'Explore your interests, strengths, and opportunities.',
    icon: Search,
    highlight: 'Identify your strengths and align with high-impact initiatives.',
    colorHex: '#8B5CF6',
    gradient: 'from-violet-500 to-indigo-600',
    iconBg: 'bg-gradient-to-tr from-violet-600 to-indigo-500 text-white shadow-md shadow-violet-500/30',
    inactiveIconBg: 'bg-violet-100 dark:bg-violet-950/50 text-violet-600 dark:text-violet-300',
    badgeClass: 'bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border-violet-300 dark:border-violet-700',
    activeBorder: 'border-violet-500 dark:border-violet-400',
    accentLine: 'bg-gradient-to-r from-violet-500 to-indigo-500',
    activeGlow: 'shadow-[0_8px_30px_rgba(139,92,246,0.25)]',
    cardActiveBg: 'bg-violet-50/40 dark:bg-violet-950/20'
  },
  {
    step: '02',
    title: 'Learn',
    tag: 'DEEPEN EXPERTISE',
    description: 'Build knowledge through continuous learning and experience.',
    icon: GraduationCap,
    highlight: 'Expand domain knowledge and master advanced enterprise architectures.',
    colorHex: '#00A3E0',
    gradient: 'from-cyan-400 to-sky-500',
    iconBg: 'bg-gradient-to-tr from-cyan-500 to-sky-500 text-white shadow-md shadow-sky-500/30',
    inactiveIconBg: 'bg-sky-100 dark:bg-sky-950/50 text-sky-600 dark:text-sky-300',
    badgeClass: 'bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border-sky-300 dark:border-sky-700',
    activeBorder: 'border-sky-500 dark:border-sky-400',
    accentLine: 'bg-gradient-to-r from-cyan-400 to-sky-500',
    activeGlow: 'shadow-[0_8px_30px_rgba(0,163,224,0.25)]',
    cardActiveBg: 'bg-sky-50/40 dark:bg-sky-950/20'
  },
  {
    step: '03',
    title: 'Contribute',
    tag: 'CREATE VALUE',
    description: 'Apply your skills and create meaningful impact.',
    icon: Target,
    highlight: 'Deliver mission-critical outcomes across client and organizational initiatives.',
    colorHex: '#10B981',
    gradient: 'from-emerald-400 to-teal-500',
    iconBg: 'bg-gradient-to-tr from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/30',
    inactiveIconBg: 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-300',
    badgeClass: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700',
    activeBorder: 'border-emerald-500 dark:border-emerald-400',
    accentLine: 'bg-gradient-to-r from-emerald-400 to-teal-500',
    activeGlow: 'shadow-[0_8px_30px_rgba(16,185,129,0.25)]',
    cardActiveBg: 'bg-emerald-50/40 dark:bg-emerald-950/20'
  },
  {
    step: '04',
    title: 'Lead',
    tag: 'TAKE OWNERSHIP',
    description: 'Take ownership and embrace greater responsibilities.',
    icon: ShieldCheck,
    highlight: 'Guide teams, shape technical vision, and champion engineering standards.',
    colorHex: '#F59E0B',
    gradient: 'from-amber-400 to-orange-500',
    iconBg: 'bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/30',
    inactiveIconBg: 'bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-300',
    badgeClass: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-700',
    activeBorder: 'border-amber-500 dark:border-amber-400',
    accentLine: 'bg-gradient-to-r from-amber-400 to-orange-500',
    activeGlow: 'shadow-[0_8px_30px_rgba(245,158,11,0.25)]',
    cardActiveBg: 'bg-amber-50/40 dark:bg-amber-950/20'
  },
  {
    step: '05',
    title: 'Grow',
    tag: 'ENDURING IMPACT',
    description: 'Build a long-term and rewarding professional journey.',
    icon: Award,
    highlight: 'Realize your professional potential as an influential enterprise leader.',
    colorHex: '#EC4899',
    gradient: 'from-blue-600 via-purple-600 to-pink-500',
    iconBg: 'bg-gradient-to-tr from-purple-600 to-pink-500 text-white shadow-md shadow-pink-500/30',
    inactiveIconBg: 'bg-pink-100 dark:bg-pink-950/50 text-pink-600 dark:text-pink-300',
    badgeClass: 'bg-pink-50 dark:bg-pink-950/50 text-pink-700 dark:text-pink-300 border-pink-300 dark:border-pink-700',
    activeBorder: 'border-pink-500 dark:border-pink-400',
    accentLine: 'bg-gradient-to-r from-purple-500 to-pink-500',
    activeGlow: 'shadow-[0_8px_30px_rgba(236,72,153,0.25)]',
    cardActiveBg: 'bg-pink-50/40 dark:bg-pink-950/20'
  }
];

// SECTION 3: Career Opportunity Categories (Interactive Explorer)
const OPPORTUNITY_CATEGORIES = [
  {
    id: 'technology',
    name: 'Technology',
    shortDesc: 'Software, digital solutions, and technology roles.',
    longDesc: 'Architect, develop, and engineer modern software and cloud solutions that solve mission-critical challenges for high-velocity enterprises.',
    icon: Code,
    focusAreas: ['Cloud Architecture', 'Full-Stack Modernization', 'Integration Platforms', 'Systems Reliability'],
    impact: 'Driving digital resilience and agile microservices architectures across enterprise platforms.'
  },
  {
    id: 'sap',
    name: 'SAP',
    shortDesc: 'SAP consulting, implementation, support, and related opportunities.',
    longDesc: 'Lead high-stakes SAP transformations including S/4HANA migration, Clean Core implementations, BTP microservices, and 24/7 mission-critical AMS.',
    icon: Database,
    focusAreas: ['S/4HANA Advisory', 'SAP BTP Development', 'Functional Specialization', 'AMS & Operational Support'],
    impact: 'Enabling seamless ERP operations for Fortune-tier multi-entity corporations.'
  },
  {
    id: 'business-consulting',
    name: 'Business & Consulting',
    shortDesc: 'Business, consulting, and client-focused opportunities.',
    longDesc: 'Bridge the gap between technology capabilities and strategic business outcomes, guiding C-suite stakeholders through organizational evolutions.',
    icon: Briefcase,
    focusAreas: ['Enterprise Advisory', 'Cutover Governance', 'Process Optimization', 'Change Acceleration'],
    impact: 'Aligning business operating models with transformative digital strategies.'
  },
  {
    id: 'operations',
    name: 'Operations',
    shortDesc: 'Roles supporting business operations and organizational growth.',
    longDesc: 'Build and maintain the operational excellence, delivery frameworks, and quality standards that power our global multi-entity service delivery.',
    icon: Compass,
    focusAreas: ['Service Delivery Excellence', 'Quality & Compliance', 'Resource Coordination', 'Operational Telemetry'],
    impact: 'Ensuring strict SLA adherence, delivery consistency, and cross-border operational fluidity.'
  },
  {
    id: 'corporate-functions',
    name: 'Corporate Functions',
    shortDesc: 'Opportunities across essential support and corporate functions.',
    longDesc: 'Empower our people, safeguard organizational integrity, and drive sustainable growth across talent, finance, legal, and brand governance.',
    icon: Building2,
    focusAreas: ['Talent & People Development', 'Strategic Finance', 'Brand & Communications', 'Legal & Governance'],
    impact: 'Creating a supportive, compliant, and thriving ecosystem for all KnoovIQ professionals.'
  }
];

export const GrowWithUsPage: React.FC<{ onOpenContact: (topic?: string) => void }> = ({ onOpenContact }) => {
  const [activeStage, setActiveStage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(OPPORTUNITY_CATEGORIES[0]);

  const categoryIntervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const categoryPauseTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const startCategoryAutoCycle = React.useCallback(() => {
    if (categoryIntervalRef.current) clearInterval(categoryIntervalRef.current);
    categoryIntervalRef.current = setInterval(() => {
      setSelectedCategory((prev) => {
        const currentIdx = OPPORTUNITY_CATEGORIES.findIndex((c) => c.id === prev.id);
        const nextIdx = (currentIdx + 1) % OPPORTUNITY_CATEGORIES.length;
        return OPPORTUNITY_CATEGORIES[nextIdx];
      });
    }, 1000);
  }, []);

  const handleCategoryClick = (cat: typeof OPPORTUNITY_CATEGORIES[0]) => {
    setSelectedCategory(cat);
    if (categoryIntervalRef.current) {
      clearInterval(categoryIntervalRef.current);
      categoryIntervalRef.current = null;
    }
    if (categoryPauseTimerRef.current) {
      clearTimeout(categoryPauseTimerRef.current);
    }
    categoryPauseTimerRef.current = setTimeout(() => {
      startCategoryAutoCycle();
    }, 5000);
  };

  useEffect(() => {
    startCategoryAutoCycle();
    return () => {
      if (categoryIntervalRef.current) clearInterval(categoryIntervalRef.current);
      if (categoryPauseTimerRef.current) clearTimeout(categoryPauseTimerRef.current);
    };
  }, [startCategoryAutoCycle]);

  return (
    <div className="pb-0 bg-[#F8FAFC] dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-500 overflow-hidden font-sans">
      
      {/* Background Aurora */}
      <div className="aurora-sphere-1 top-20 left-1/4 bg-[#00A3E0]/15 dark:bg-[#00F0FF]/15 pointer-events-none" />
      <div className="aurora-sphere-2 top-96 right-10 bg-[#6366F1]/15 dark:bg-[#8B5CF6]/20 pointer-events-none" />

      {/* =========================================================================
          HERO SECTION — EXACT SAME LAYOUT, ONLY HERO IMAGE REPLACED
          Concept: CAREER GROWTH + PEOPLE + LEARNING + OPPORTUNITY
          Replaced with modern corporate visual of diverse professionals collaborating
          ========================================================================= */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-20 min-h-[540px] lg:h-[580px] lg:min-h-[580px] flex items-center overflow-hidden">
        {/* Clean Background Image with Directional Left Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/grow_with_us_hero.jpg" 
            alt="Careers and Professional Growth at KNOOVIQ"
            className="w-full h-full object-cover object-[center_28%]"
          />
          {/* Mild Contrast Scrim: Clear professional culture visual with soft text shading */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/35 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl lg:max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide bg-slate-900/90 border border-emerald-400/40 text-emerald-300 mb-5 backdrop-blur-md shadow-2xl"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34D399]" />
              <span className="font-mono uppercase text-xs tracking-wider font-bold">Engineering Talent & High-Velocity Careers</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] leading-[1.15] mb-6"
            >
              Grow <span className="hero-gradient-cyan font-black">With Us</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-white font-medium drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] leading-relaxed font-sans mb-8 max-w-3xl"
            >
              Where elite enterprise architects and ambitious technologists solve mission-critical challenges. We nurture continuous learning, foster architectural leadership, and champion merit-driven career progression.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>100% Sponsored Certifications</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Global Multi-Entity Engagements</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>High-Trust Autonomous Culture</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shared Sub-Navigation Bar */}
      <AboutSubnav activeTabTitle="Grow With Us" />

      {/* =========================================================================
          SECTION 1 — WHY GROW WITH KNOOVIQ? (COMPACT 4-COLUMN EDITION)
          Heading: “Why Grow With KnoovIQ?”
          Supporting: “Create opportunities to learn, contribute, innovate, and build a meaningful professional journey with KnoovIQ.”
          Compact, elegant 4-column layout for optimal vertical space
          ========================================================================= */}
      <section className="py-14 sm:py-16 relative bg-white dark:bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-slate-100 dark:bg-white/10 text-[#0A2540] dark:text-cyan-300 border border-slate-200 dark:border-white/10 shadow-xs mb-3.5"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#0052CC] dark:text-cyan-400" />
              <span>Career Foundation</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]"
            >
              Why Grow With KnoovIQ?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed"
            >
              Create opportunities to learn, contribute, innovate, and build a meaningful professional journey with KnoovIQ.
            </motion.p>
          </div>

          {/* Compact 4-Column Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GROWTH_ASPECTS.map((aspect, idx) => {
              const IconComponent = aspect.icon;
              return (
                <motion.div
                  key={aspect.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50/60 dark:bg-white/[0.02] p-6 flex flex-col justify-between hover:border-[#0052CC]/50 dark:hover:border-cyan-400/50 hover:bg-white dark:hover:bg-white/[0.04] transition-all duration-300 shadow-xs hover:shadow-lg group relative overflow-hidden"
                >
                  {/* Top Glowing Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#0052CC] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="h-11 w-11 rounded-xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-[#0052CC] dark:text-cyan-400 flex items-center justify-center shadow-xs group-hover:bg-[#0052CC] group-hover:text-white transition-colors duration-300">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-2.5 py-0.5 rounded-full">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#0052CC] dark:text-cyan-400 block mb-1.5">
                      {aspect.tagline}
                    </span>

                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-[#0052CC] dark:group-hover:text-cyan-300 transition-colors">
                      {aspect.title}
                    </h3>

                    <p className="text-xs text-slate-700 dark:text-slate-200 font-semibold mb-2 leading-snug">
                      {aspect.description}
                    </p>

                    <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                      {aspect.detail}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs font-mono font-bold text-[#0A2540] dark:text-cyan-400">
                    <span>Growth Pillar</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — YOUR GROWTH JOURNEY (VIBRANT COLORFUL INTERACTIVE TIMELINE)
          Heading: “Your Growth Journey”
          Stages: DISCOVER ↓ LEARN ↓ CONTRIBUTE ↓ LEAD ↓ GROW
          Design: Multi-color gradient timeline with distinct vibrant color palettes per milestone
          ========================================================================= */}
      <section className="py-20 sm:py-24 relative overflow-hidden bg-[#FAFBFD] dark:bg-[#060D1A] border-y border-slate-200/90 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-white dark:bg-white/10 text-[#0A2540] dark:text-cyan-300 border border-slate-200/90 dark:border-white/10 shadow-xs mb-4"
            >
              <TrendingUp className="h-3.5 w-3.5 text-[#0052CC] dark:text-cyan-400" />
              <span>Career Trajectory</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]"
            >
              Your Growth Journey
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto"
            >
              A purposeful roadmap designed to cultivate your skills, expand your technical depth, and empower your leadership.
            </motion.p>
          </div>

          {/* Interactive Multi-Color Timeline Track (Desktop Horizontal / Mobile Vertical) */}
          <div className="relative mt-8">
            
            {/* Desktop Connecting Multi-Color Gradient Rail */}
            <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-[4px] rounded-full bg-slate-200/90 dark:bg-slate-800 z-0 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-violet-500 via-sky-400 via-emerald-400 via-amber-400 to-pink-500 transition-all duration-500 relative"
                style={{ width: `${(activeStage / (JOURNEY_STAGES.length - 1)) * 100}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-white shadow-[0_0_12px_#00F0FF]" />
              </div>
            </div>

            {/* 5 Distinctly Colorful Milestone Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
              {JOURNEY_STAGES.map((stage, idx) => {
                const IconComponent = stage.icon;
                const isActive = activeStage === idx;
                const isPassed = activeStage >= idx;

                return (
                  <motion.div
                    key={stage.step}
                    onMouseEnter={() => setActiveStage(idx)}
                    onClick={() => setActiveStage(idx)}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer border relative overflow-hidden ${
                      isActive
                        ? `bg-white dark:bg-slate-900 ${stage.activeBorder} ${stage.activeGlow} ${stage.cardActiveBg}`
                        : isPassed
                        ? 'bg-white/95 dark:bg-slate-900/70 border-slate-200 dark:border-white/15 shadow-xs'
                        : 'bg-white/60 dark:bg-slate-900/40 border-slate-200/60 dark:border-white/5 opacity-80'
                    }`}
                  >
                    {/* Top Vibrant Gradient Accent Line */}
                    <div className={`absolute top-0 left-0 right-0 h-[3px] ${stage.accentLine} transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`} />

                    <div>
                      {/* Milestone Number & Colorful Icon Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? stage.iconBg
                            : stage.inactiveIconBg
                        }`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md border ${
                          isActive
                            ? stage.badgeClass
                            : 'bg-slate-50 dark:bg-white/5 text-slate-400 border-slate-200/60 dark:border-white/5'
                        }`}>
                          {stage.step}
                        </span>
                      </div>

                      <span 
                        className="font-mono text-[10px] font-bold uppercase tracking-wider block mb-1"
                        style={{ color: stage.colorHex }}
                      >
                        {stage.tag}
                      </span>

                      <h3 className="font-display text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
                        {stage.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold mb-2 leading-snug">
                        {stage.description}
                      </p>

                      <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                        {stage.highlight}
                      </p>
                    </div>

                    <div 
                      className="pt-4 mt-5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono font-bold"
                      style={{ color: isActive ? stage.colorHex : undefined }}
                    >
                      <span className={isActive ? '' : 'text-slate-400'}>Phase {stage.step}</span>
                      <span className={isActive ? 'opacity-100' : 'opacity-0'}>Active ✓</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — OPPORTUNITIES AT KNOOVIQ (INTERACTIVE CAREER EXPLORER)
          Heading: “Explore Your Opportunities”
          Supporting: “Discover opportunities to build your skills, contribute to meaningful work, and grow across different areas of the organization.”
          Design: Split explorer — Large category list on left, dynamic details panel on right
          ========================================================================= */}
      <section className="py-20 sm:py-24 relative bg-white dark:bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-slate-100 dark:bg-white/10 text-[#0A2540] dark:text-cyan-300 border border-slate-200 dark:border-white/10 shadow-xs mb-4"
            >
              <Briefcase className="h-3.5 w-3.5 text-[#0052CC] dark:text-cyan-400" />
              <span>Career Opportunities</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]"
            >
              Explore Your Opportunities
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto"
            >
              Discover opportunities to build your skills, contribute to meaningful work, and grow across different areas of the organization.
            </motion.p>
          </div>

          {/* Interactive Career Explorer (2-Column Architecture) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Category Selector */}
            <div className="lg:col-span-5 space-y-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2 px-2">
                SELECT CAREER DOMAIN
              </span>

              {OPPORTUNITY_CATEGORIES.map((cat) => {
                const IconComponent = cat.icon;
                const isSelected = selectedCategory.id === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer group relative overflow-hidden ${
                      isSelected
                        ? 'bg-[#0A2540] dark:bg-slate-900 text-white border-[#0052CC] dark:border-cyan-400 shadow-lg'
                        : 'bg-slate-50 dark:bg-white/[0.02] text-slate-800 dark:text-slate-200 border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
                  >
                    {/* Left Active Indicator Bar */}
                    <div className={`absolute top-0 left-0 bottom-0 w-1.5 bg-cyan-400 transition-opacity ${
                      isSelected ? 'opacity-100' : 'opacity-0'
                    }`} />

                    <div className="flex items-center gap-4">
                      <div className={`h-11 w-11 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-cyan-400 text-slate-950 font-bold'
                          : 'bg-white dark:bg-white/5 text-[#0052CC] dark:text-cyan-400 border border-slate-200/80 dark:border-white/10'
                      }`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-bold tracking-tight">
                          {cat.name}
                        </h4>
                        <p className={`text-xs font-sans line-clamp-1 ${
                          isSelected ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'
                        }`}>
                          {cat.shortDesc}
                        </p>
                      </div>
                    </div>

                    <ChevronRight className={`h-5 w-5 transition-transform ${
                      isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-400 group-hover:translate-x-1'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Selected Category Details Showcase Panel */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-white/[0.03] p-8 sm:p-10 shadow-sm relative overflow-hidden"
                >
                  {/* Subtle Top Accent */}
                  <div className="h-1 w-20 bg-gradient-to-r from-[#0052CC] to-cyan-400 mb-6 rounded-full" />

                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0052CC] dark:text-cyan-400">
                      CAREER DOMAIN OVERVIEW
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                    {selectedCategory.name}
                  </h3>

                  <p className="text-base text-slate-700 dark:text-slate-200 font-sans leading-relaxed mb-6">
                    {selectedCategory.longDesc}
                  </p>

                  <div className="mb-8 p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                      CORE FOCUS & CAPABILITY AREAS
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedCategory.focusAreas.map((area, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-display font-semibold bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                      ORGANIZATIONAL IMPACT
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans italic">
                      “{selectedCategory.impact}”
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-200/80 dark:border-white/10">
                    <button
                      onClick={() => onOpenContact(`Career Opportunities: ${selectedCategory.name}`)}
                      className="w-full sm:w-auto btn-primary-gradient shimmer-sweep px-7 py-3.5 rounded-xl text-white font-display text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Explore Opportunities</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <Link
                      to="/careers"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-300 dark:border-white/20 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 font-display text-xs font-bold uppercase tracking-wider text-center transition-colors"
                    >
                      View All Open Roles
                    </Link>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

