import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  MessageSquare,
  Users2,
  Mail,
  Headphones,
  Globe,
  Briefcase,
  CheckCircle2,
  ArrowUpRight,
  HeartHandshake,
  Repeat,
  Compass,
  Cpu,
  HelpCircle,
  Network,
  ShieldCheck,
  Zap,
  Layers,
  Bot,
  AlertCircle,
  XCircle
} from 'lucide-react';

interface KnooviqAIEngagementPageProps {
  onOpenContact?: (service?: string) => void;
}

interface TouchpointChannel {
  id: string;
  name: string;
  role: string;
  badge: string;
  userPrompt: string;
  aiResponse: string;
  contextBenefit: string;
  highlights: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const TOUCHPOINT_CHANNELS: TouchpointChannel[] = [
  {
    id: 'website',
    name: 'Website Experience',
    role: 'Digital Front Door & Discovery',
    badge: 'Real-Time Guide',
    userPrompt: '“Can you help me find the right service?”',
    aiResponse: '“Absolutely. Based on what you’re exploring, here is where you can start with tailored guidance for your industry and organization size.”',
    contextBenefit: 'Understands browsing intent to guide visitors smoothly without rigid dropdown forms.',
    highlights: ['Intent classification', 'Tailored solution roadmap', 'Instant live advisor handoff'],
    icon: Globe
  },
  {
    id: 'support',
    name: 'Customer Support',
    role: 'Resolution & Empathy',
    badge: 'Zero Waiting',
    userPrompt: '“I need an update on my request.”',
    aiResponse: '“Let me help you with that. Your delivery dispatch was verified this morning at 10:15 AM and is en route for arrival by 3:00 PM today.”',
    contextBenefit: 'Instantly connects to live operations and ticketing records without making users repeat ticket numbers.',
    highlights: ['Direct ERP dispatch lookup', 'No repetitive questions', 'Proactive delay alerts'],
    icon: Headphones
  },
  {
    id: 'email',
    name: 'Email Communications',
    role: 'Asynchronous Follow-Through',
    badge: 'Thread Memory',
    userPrompt: '“Following up on the vendor proposal review.”',
    aiResponse: '“I’ve summarized the latest commercial revisions and prepared a side-by-side comparison table ready for your review.”',
    contextBenefit: 'Retains long-term memory of past email threads, attachments, and approvals across correspondence.',
    highlights: ['Multi-party email continuity', 'Attachment summarization', 'Next action recommendations'],
    icon: Mail
  },
  {
    id: 'sales',
    name: 'Sales Conversations',
    role: 'Buyer Discovery & Qualification',
    badge: 'Deal Velocity',
    userPrompt: '“Which enterprise tier fits 5,000 users across 3 regions?”',
    aiResponse: '“Based on multi-region compliance and volume scaling, Enterprise Prime aligns best with your team’s deployment footprint.”',
    contextBenefit: 'Evaluates architectural and security parameters in real time to recommend optimal solution packages.',
    highlights: ['Live tier matching', 'Compliance verification', 'Executive proposal generation'],
    icon: Briefcase
  },
  {
    id: 'employee',
    name: 'Employee Experience',
    role: 'Internal Support & HR Services',
    badge: 'Self-Service Hub',
    userPrompt: '“Where do I submit my relocation allowance?”',
    aiResponse: '“I’ve generated the pre-filled relocation claim form aligned with your regional policy guidelines and routed it to People Ops.”',
    contextBenefit: 'Reduces internal workplace friction by providing instant access to policy-guided workflows.',
    highlights: ['Pre-filled claim forms', 'Policy-verified guidance', 'Integrated approval tracking'],
    icon: Users2
  },
  {
    id: 'business-comm',
    name: 'Business Communication',
    role: 'Executive Collaboration & Memos',
    badge: 'Executive Briefs',
    userPrompt: '“Brief me on today’s leadership agenda items.”',
    aiResponse: '“Consolidated cross-functional briefing ready: 3 strategic decisions pending review from today’s executive meeting pack.”',
    contextBenefit: 'Synthesizes memos, calendar priorities, and cross-team updates into clear, actionable summaries.',
    highlights: ['Meeting pack synthesis', 'Decision item flags', 'Cross-department alignment'],
    icon: MessageSquare
  }
];

export const KnooviqAIEngagementPage: React.FC<KnooviqAIEngagementPageProps> = ({ onOpenContact }) => {
  const [activeChannel, setActiveChannel] = useState<TouchpointChannel>(TOUCHPOINT_CHANNELS[0]);

  const transformationStages = [
    {
      stage: 'INTERACTION',
      stepNum: '01',
      title: 'Every Touchpoint Connects',
      desc: 'Conversations enter from website chats, emails, support tickets, or internal channels without friction.',
      highlight: 'Continuous conversational thread established across all channels',
      icon: MessageSquare
    },
    {
      stage: 'CONTEXT',
      stepNum: '02',
      title: 'Continuous Memory & Intent',
      desc: 'The AI recalls prior interactions, user preferences, and business relationship history seamlessly.',
      highlight: 'Eliminates repetitive explanations and frustrating channel handoffs',
      icon: Layers
    },
    {
      stage: 'UNDERSTANDING',
      stepNum: '03',
      title: 'Empathy & Relevance',
      desc: 'Natural language understanding interprets true human intent rather than matching rigid keywords.',
      highlight: 'Tailors tone, depth, and actions to the user’s exact situation',
      icon: HeartHandshake
    },
    {
      stage: 'ENGAGEMENT',
      stepNum: '04',
      title: 'Meaningful Resolution',
      desc: 'Delivers clear answers, executes next steps, and creates an experience that feels genuinely helpful.',
      highlight: 'Turns routine inquiries into lasting positive business relationships',
      icon: Sparkles
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050B17] text-slate-900 dark:text-slate-100 font-sans selection:bg-[#00A3E0] selection:text-white transition-colors duration-300 overflow-hidden">
      
      {/* =========================================================================
          SECTION 1 — HERO: CREATE MORE MEANINGFUL BUSINESS ENGAGEMENT
          ========================================================================= */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/70 dark:from-[#081226] dark:via-[#050B17] dark:to-[#081226] border-b border-slate-300/80 dark:border-cyan-500/20 overflow-hidden">
        
        {/* Subtle Ambient Aurora Light Spheres */}
        <div className="aurora-sphere-1 top-20 left-1/4 bg-[#00A3E0]/20 dark:bg-[#00A3E0]/25 pointer-events-none" />
        <div className="aurora-sphere-2 top-96 right-10 bg-[#0077B6]/15 dark:bg-[#0077B6]/22 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading, Subtitle & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Strategic Pill Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100/80 dark:bg-cyan-950/80 border border-sky-300 dark:border-cyan-400/40 text-[#0077B6] dark:text-cyan-300 text-xs font-bold tracking-wide shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A3E0] animate-ping" />
                <span className="font-bold text-slate-900 dark:text-white">Knooviq AI Engagement</span>
                <span className="text-slate-400 dark:text-slate-500">|</span>
                <span className="text-[#0077B6] dark:text-cyan-300 font-semibold">Conversational Experiences</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] font-display">
                Create More Meaningful{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#0077B6] to-[#00A3E0] dark:from-white dark:via-cyan-200 dark:to-[#00A3E0]">
                  Business Engagement
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl font-normal">
                Knooviq AI Engagement helps businesses create more relevant, contextual, and intelligent interactions 
                across every stage of the customer and employee journey.
              </p>

              {/* Hero CTA Group */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenContact ? onOpenContact('Knooviq AI Engagement Demo') : null}
                  className="px-8 py-4 rounded-xl bg-[#0077B6] hover:bg-[#006296] text-white font-bold text-sm shadow-md hover:shadow-cyan-500/25 transition-all flex items-center gap-2 group cursor-pointer hover:scale-102"
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#interaction-to-engagement"
                  className="px-6 py-4 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/15 border-2 border-slate-300 dark:border-cyan-400/40 text-slate-900 dark:text-white text-sm font-bold transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Explore AI Engagement</span>
                  <ChevronRight className="w-4 h-4 text-[#00A3E0]" />
                </a>
              </div>

              {/* Core Philosophy Chain: Conversation -> AI Understanding -> Relevant Engagement */}
              <div className="pt-6 border-t border-slate-300 dark:border-white/20">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                  Engagement Continuum
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-white/10 border border-slate-300 dark:border-white/20 shadow-xs">
                    Conversation
                  </span>
                  <span className="text-[#00A3E0] font-bold text-sm">&rarr;</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-white/10 border border-slate-300 dark:border-white/20 shadow-xs">
                    AI Understanding
                  </span>
                  <span className="text-[#00A3E0] font-bold text-sm">&rarr;</span>
                  <span className="px-3 py-1.5 rounded-lg bg-sky-100 dark:bg-cyan-950 text-[#0077B6] dark:text-cyan-300 border border-sky-300 dark:border-cyan-400 font-bold shadow-xs">
                    Relevant Engagement
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: 3D Conversational Intelligence Core with Flowing Touchpoint Fragments */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-300/80 dark:border-cyan-500/40 bg-slate-950 group">
                <img
                  src="/images/ai_engagement_hero.jpg"
                  alt="Enterprise AI Engagement in executive boardroom with conversational AI persona and interactive touchpoint holograms"
                  className="w-full h-[520px] sm:h-[580px] lg:h-[620px] object-cover object-top select-none group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating Touchpoint Fragment 1: Website */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: [0, -5, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-6 left-5 z-20 pointer-events-none max-w-[250px]"
                >
                  <div className="px-4 py-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-400/50 text-white text-xs font-semibold shadow-2xl flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="truncate">“Can you help me find the right service?”</span>
                  </div>
                </motion.div>

                {/* Floating Touchpoint Fragment 2: Customer Support */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, y: [0, 6, 0] }}
                  transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute top-24 right-5 z-20 pointer-events-none max-w-[230px]"
                >
                  <div className="px-4 py-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-[#00A3E0]/50 text-white text-xs font-semibold shadow-2xl flex items-center gap-2.5">
                    <Headphones className="w-4 h-4 text-[#00A3E0] shrink-0" />
                    <span className="truncate">“I need an update on my request.”</span>
                  </div>
                </motion.div>

                {/* Floating Touchpoint Fragment 3: Email Conversation */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute bottom-28 left-6 z-20 pointer-events-none max-w-[250px]"
                >
                  <div className="px-4 py-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-indigo-400/50 text-white text-xs font-semibold shadow-2xl flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="truncate">“Following up on vendor review”</span>
                  </div>
                </motion.div>

                {/* Central Engagement Synthesis Indicator */}
                <div className="absolute bottom-6 inset-x-6 z-20">
                  <div className="p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border-2 border-cyan-400/40 text-white shadow-2xl space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        Connected Multi-Touchpoint Intelligence
                      </span>
                      <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-400/30">
                        Active Dialogue
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed font-medium">
                      Harmonizing customer and employee conversations across touchpoints with persistent memory.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — FROM INTERACTION TO ENGAGEMENT (TRANSFORMATION)
          ========================================================================= */}
      <section id="interaction-to-engagement" className="py-20 sm:py-28 bg-white dark:bg-[#050B17] border-b border-slate-300/80 dark:border-cyan-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/20 text-slate-800 dark:text-slate-200 text-xs font-bold">
              <HeartHandshake className="w-4 h-4 text-[#00A3E0]" />
              <span>Experience Evolution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              Every Interaction Is an Opportunity to{' '}
              <span className="text-[#0077B6] dark:text-cyan-400">
                Connect Better
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              Transform disconnected customer and employee touchpoints into continuous, intelligent relationships.
            </p>
          </div>

          {/* Transformation Matrix: Fragmented Friction vs Intelligent Engagement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Side: Fragmented Friction */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-rose-50/50 dark:bg-slate-900/80 border-2 border-rose-300 dark:border-rose-500/40 space-y-4 shadow-md">
              <div className="flex items-center justify-between border-b border-rose-200 dark:border-rose-500/20 pb-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-rose-500" />
                  Fragmented Friction
                </span>
                <span className="text-xs font-bold text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-950/80 px-2.5 py-0.5 rounded-full border border-rose-300 dark:border-rose-500/30">
                  Disconnected Silos
                </span>
              </div>

              <div className="space-y-3">
                {[
                  { title: 'Generic Responses', desc: 'Rigid scripted bots that miss human intent and context.' },
                  { title: 'Repeated Questions', desc: 'People forced to re-explain their situation across touchpoints.' },
                  { title: 'Disconnected Conversations', desc: 'Context lost as soon as the user switches channels or devices.' },
                  { title: 'Too Much Switching', desc: 'Users shuffled between portals, ticket queues, and handoffs.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-rose-200 dark:border-white/10 shadow-xs">
                    <p className="text-xs sm:text-sm font-bold text-rose-900 dark:text-rose-200">{item.title}</p>
                    <p className="text-xs text-slate-700 dark:text-slate-300 mt-0.5 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Arrow Transformation Connector */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center text-center py-4">
              <div className="w-14 h-14 rounded-full bg-[#00A3E0]/20 border-2 border-[#00A3E0]/50 flex items-center justify-center text-[#0077B6] dark:text-cyan-300 mb-2 shadow-lg shadow-cyan-500/20">
                <Sparkles className="w-7 h-7 animate-pulse" />
              </div>
              <span className="text-xs font-bold text-[#0077B6] dark:text-cyan-300 uppercase tracking-wider">
                Knooviq AI
              </span>
              <span className="text-xs text-slate-700 dark:text-slate-300 mt-1 font-medium">Context Layer</span>
            </div>

            {/* Right Side: Intelligent Engagement */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-cyan-950/90 via-slate-900 to-slate-900 border-2 border-cyan-400/50 text-white space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Intelligent Engagement
                </span>
                <span className="text-xs font-bold text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                  Unified Memory
                </span>
              </div>

              <div className="space-y-3">
                {[
                  { title: 'Understand Context', desc: 'Instantly identifies user history, active projects, and real needs.' },
                  { title: 'Respond Naturally', desc: 'Human-like conversational fluency with accurate business context.' },
                  { title: 'Continue the Conversation', desc: 'Seamlessly preserves dialogue threads across every platform.' },
                  { title: 'Guide the Next Step', desc: 'Proactively moves tasks forward without dead-ends or dropped balls.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-800/90 border border-cyan-500/30 shadow-xs">
                    <p className="text-xs sm:text-sm font-bold text-cyan-200">{item.title}</p>
                    <p className="text-xs text-slate-200 mt-0.5 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Transformation Stages Bar (INTERACTION -> CONTEXT -> UNDERSTANDING -> ENGAGEMENT) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {transformationStages.map((st, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border-2 border-slate-300 dark:border-cyan-500/30 space-y-3 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#0077B6] dark:text-cyan-300 bg-sky-100 dark:bg-cyan-950 px-2.5 py-1 rounded-md border border-sky-300 dark:border-cyan-500/40">
                    Step {st.stepNum} &bull; {st.stage}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {st.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                  {st.desc}
                </p>
                <div className="pt-2 border-t border-slate-300 dark:border-white/10">
                  <p className="text-xs text-[#0077B6] dark:text-cyan-300 font-bold">
                    &bull; {st.highlight}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — ENGAGE NATURALLY ACROSS EVERY JOURNEY (INTERACTIVE CHANNELS)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-slate-50/70 dark:bg-[#081226] border-b border-slate-300/80 dark:border-cyan-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-white/10 border border-slate-300 dark:border-white/20 text-slate-800 dark:text-slate-200 text-xs font-bold">
              <Network className="w-4 h-4 text-[#00A3E0]" />
              <span>Multi-Channel Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              Meet People Where the{' '}
              <span className="text-[#0077B6] dark:text-cyan-400">
                Conversation Happens
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              Place Knooviq AI Engagement at the core of all human interactions — from websites to executive memos.
            </p>
          </div>

          {/* 6 Connected Touchpoint Channel Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {TOUCHPOINT_CHANNELS.map((channel) => {
              const Icon = channel.icon;
              const isSelected = activeChannel.id === channel.id;
              return (
                <motion.button
                  key={channel.id}
                  onClick={() => setActiveChannel(channel)}
                  whileHover={{ y: -3 }}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 border-2 cursor-pointer ${
                    isSelected
                      ? 'bg-white dark:bg-slate-800 border-[#0077B6] dark:border-cyan-400 shadow-xl ring-2 ring-[#0077B6]/25'
                      : 'bg-white dark:bg-slate-900/80 border-slate-300 dark:border-white/15 hover:border-slate-400 dark:hover:border-cyan-400/40'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2.5 border ${
                    isSelected
                      ? 'bg-[#0077B6] text-white border-[#0077B6]'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-white/10'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                    {channel.name}
                  </h4>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-sky-100 dark:bg-cyan-950 text-[#0077B6] dark:text-cyan-300 border border-sky-200 dark:border-cyan-500/30 inline-block mt-1">
                    {channel.badge}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Active Channel Live Conversation Simulator */}
          <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#050B17] border-2 border-slate-300 dark:border-cyan-500/40 shadow-2xl">
            <div className="space-y-6">
              
              {/* Channel Status Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-300 dark:border-white/15">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#0077B6] text-white flex items-center justify-center shadow-sm">
                    {React.createElement(activeChannel.icon, { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {activeChannel.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-semibold">
                      Channel Focus: {activeChannel.role}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Continuous Context Sync</span>
                </div>
              </div>

              {/* User Prompt Message Bubble */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/15 flex items-center justify-center text-slate-900 dark:text-white font-extrabold text-xs shrink-0 border border-slate-300 dark:border-white/20 shadow-xs">
                  USER
                </div>
                <div className="p-5 rounded-2xl rounded-tl-none bg-slate-100 dark:bg-slate-900 border-2 border-slate-300 dark:border-white/15 text-slate-900 dark:text-white max-w-2xl shadow-xs">
                  <p className="text-base font-bold">
                    {activeChannel.userPrompt}
                  </p>
                </div>
              </div>

              {/* AI Natural Contextual Response Bubble */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0077B6] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-lg border border-sky-300">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="space-y-4 flex-1">
                  <div className="p-6 sm:p-7 rounded-2xl rounded-tl-none bg-gradient-to-br from-cyan-50/70 via-white to-sky-50/40 dark:from-cyan-950/50 dark:via-[#0B1528] dark:to-slate-900 border-2 border-cyan-300 dark:border-cyan-500/40 text-slate-900 dark:text-slate-100 shadow-md space-y-3">
                    <div className="flex items-center justify-between border-b border-cyan-200 dark:border-white/15 pb-2.5">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#0077B6] dark:text-cyan-300 flex items-center gap-1.5">
                        <Bot className="w-4 h-4 text-[#00A3E0]" />
                        Knooviq AI Engagement Response
                      </span>
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300 bg-white dark:bg-white/10 px-2.5 py-0.5 rounded-full border border-slate-300 dark:border-white/10">
                        Zero Repetition
                      </span>
                    </div>

                    <p className="text-base leading-relaxed text-slate-900 dark:text-slate-100 font-medium">
                      {activeChannel.aiResponse}
                    </p>

                    {/* Channel Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                      {activeChannel.highlights.map((hl, hIdx) => (
                        <div
                          key={hIdx}
                          className="p-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-white/15 flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                            {hl}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contextual Memory Note */}
                  <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border-2 border-slate-300 dark:border-white/15 flex items-center justify-between text-xs text-slate-700 dark:text-slate-200">
                    <span className="font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">Contextual Advantage:</span>
                    <span className="font-semibold text-sm italic text-[#0077B6] dark:text-cyan-300">{activeChannel.contextBenefit}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — CONNECTED CONVERSATION (CONTINUITY & FLOW)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white dark:bg-[#050B17] border-b border-slate-300/80 dark:border-cyan-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/20 text-slate-800 dark:text-slate-200 text-xs font-bold">
              <Repeat className="w-4 h-4 text-[#00A3E0]" />
              <span>Unified Dialogue Fabric</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              Keep the Context.{' '}
              <span className="text-[#0077B6] dark:text-cyan-400">
                Continue the Conversation.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              Knooviq AI Engagement understands the context behind interactions so every conversation can feel more relevant, connected, and purposeful.
            </p>
          </div>

          {/* Three Foundational Pillars: Contextual, Relevant, Continuous */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Contextual',
                desc: 'Understand what the person needs based on their relationship history, preferences, and current operational status.',
                icon: Compass,
                color: 'text-[#0077B6] dark:text-cyan-300',
                border: 'border-cyan-300 dark:border-cyan-500/40'
              },
              {
                title: 'Relevant',
                desc: 'Respond with information that matters, omitting extraneous jargon or irrelevant policy boilerplate.',
                icon: Sparkles,
                color: 'text-indigo-600 dark:text-indigo-300',
                border: 'border-indigo-300 dark:border-indigo-500/40'
              },
              {
                title: 'Continuous',
                desc: 'Keep the experience connected across interactions, ensuring conversations pick up right where they left off.',
                icon: Repeat,
                color: 'text-emerald-600 dark:text-emerald-300',
                border: 'border-emerald-300 dark:border-emerald-500/40'
              }
            ].map((col, idx) => {
              const Icon = col.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className={`p-7 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border-2 ${col.border} space-y-3.5 shadow-md`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/10 border border-slate-300 dark:border-white/20 flex items-center justify-center shadow-sm">
                    <Icon className={`w-6 h-6 ${col.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {col.title}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                    {col.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Cinematic Pipeline Flow Container */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border-2 border-slate-700 dark:border-cyan-500/40 shadow-2xl relative">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-400/40 inline-block">
                The Continuous Conversation Lifecycle
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Unified Experience Architecture
              </h3>
              <p className="text-sm text-slate-200 font-normal">
                How Knooviq harmonizes touchpoints from initial inquiry to next interaction.
              </p>
            </div>

            {/* Visual Step Sequence: Customer -> Conversation -> Knooviq AI -> Business Context -> Relevant Response -> Next Interaction */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { stage: 'Customer', detail: 'Inquirer, employee, or buyer initiated', icon: Users2, badge: 'Origin' },
                { stage: 'Conversation', detail: 'Natural human question expressed', icon: MessageSquare, badge: 'Inquiry' },
                { stage: 'Knooviq AI', detail: 'Semantic interpretation of intent', icon: Cpu, badge: 'AI Engine' },
                { stage: 'Business Context', detail: 'Connected enterprise knowledge verified', icon: Layers, badge: 'Truth Store' },
                { stage: 'Relevant Response', detail: 'Accurate, empathetic guidance delivered', icon: Sparkles, badge: 'Resolution' },
                { stage: 'Next Interaction', detail: 'Continuity maintained for future steps', icon: Repeat, badge: 'Memory' }
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    className="p-5 rounded-2xl bg-slate-800/90 border-2 border-slate-700 hover:border-cyan-400/50 text-center space-y-2.5 relative transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 mx-auto flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{step.stage}</p>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/10 text-cyan-300">
                        {step.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">{step.detail}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          BEFORE VS AFTER COMPARISON TABLE: CONVERSATIONAL CONTINUITY
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-slate-100/70 dark:bg-[#060D1D] border-t-2 border-slate-300 dark:border-cyan-500/25 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-slate-300 dark:border-cyan-500/35 bg-white dark:bg-[#070E1C] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0077B6] dark:text-cyan-300">
                Conversational Continuity
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              Before vs After{' '}
              <span className="bg-gradient-to-r from-[#0077B6] to-[#00A3E0] bg-clip-text text-transparent">
                Knooviq AI Engagement
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-normal leading-relaxed">
              Experience the evolution from frustrating, repetitive chatbot loops to empathetic, persistent engagement across every touchpoint.
            </p>
          </div>

          {/* Comparison Grid (Side-by-Side) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            
            {/* Card 1: BEFORE — Traditional Fragmented Interactions */}
            <div className="rounded-2xl p-5 sm:p-6 bg-white dark:bg-[#070E1C] border-2 border-rose-300 dark:border-rose-900/50 shadow-md flex flex-col justify-between gap-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border border-rose-300 dark:border-rose-800">
                    Before • Fragmented Interactions
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Legacy Bot Trees
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Repetitive, Scripted & Impersonal
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    Users forced to repeat context across channels with zero institutional memory.
                  </p>
                </div>

                <div className="space-y-2.5 pt-1">
                  {[
                    {
                      title: 'Repetitive Explanations',
                      desc: 'Customers and employees must restart explanations every time they transition between web chat, email, or phone.'
                    },
                    {
                      title: 'Rigid Keyword Bots',
                      desc: 'Clunky rule-based chatbots fail to understand nuanced questions and trap users in endless loop menus.'
                    },
                    {
                      title: 'Siloed Touchpoints',
                      desc: 'Website messaging, support ticket portals, and ERP account logs remain completely disconnected from each other.'
                    },
                    {
                      title: 'Generic Scripted Answers',
                      desc: 'One-size-fits-all generic scripts disregard user contract tier, ongoing escalations, or historical loyalty.'
                    },
                    {
                      title: 'Blind Human Handoffs',
                      desc: 'When an agent takes over, they receive no summarized context, resulting in prolonged hold times and frustrated clients.'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2 sm:p-2.5 rounded-xl bg-rose-50/50 dark:bg-rose-950/15 border border-rose-200/70 dark:border-rose-900/30">
                      <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                      <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        <span className="font-bold text-slate-900 dark:text-white mr-1.5">{item.title}:</span>
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-white/10 text-xs font-medium text-slate-500 dark:text-slate-400">
                Result: High customer churn, repetitive employee frustration, and damaged brand trust.
              </div>
            </div>

            {/* Card 2: AFTER — With Knooviq AI Engagement */}
            <div className="rounded-2xl p-5 sm:p-6 bg-white dark:bg-[#070E1C] border-2 border-cyan-400 dark:border-cyan-400/60 shadow-lg shadow-cyan-500/10 flex flex-col justify-between gap-5 relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-cyan-100/90 dark:bg-cyan-950 text-[#0077B6] dark:text-cyan-300 border border-cyan-300 dark:border-cyan-400/50">
                    After • With Knooviq AI Engagement
                  </span>
                  <span className="text-xs font-bold text-[#00A3E0] dark:text-cyan-400">
                    Persistent Memory
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Continuous, Empathetic & Resolved
                  </h3>
                  <p className="text-xs text-[#0077B6] dark:text-cyan-300 font-semibold mt-0.5">
                    Every touchpoint shares conversational thread memory and real-time business context.
                  </p>
                </div>

                <div className="space-y-2.5 pt-1">
                  {[
                    {
                      title: 'Cross-Channel Memory',
                      desc: 'Conversations seamlessly move across web, email, and portals without requiring users to re-explain their story.'
                    },
                    {
                      title: 'Intent & Emotion Parsing',
                      desc: 'Advanced natural language understanding perceives the exact urgency, sentiment, and core objective behind inquiries.'
                    },
                    {
                      title: 'Live Enterprise Grounding',
                      desc: 'Directly synchronized with SAP ERP order ledgers, active SLA agreements, and company knowledge bases in real time.'
                    },
                    {
                      title: 'Contextual Guidance',
                      desc: 'Generates tailored, empathetic answers based on specific client entitlements, past resolutions, and policy allowances.'
                    },
                    {
                      title: 'Intelligent Handoffs',
                      desc: 'Escalations transfer to human specialists complete with summarized intent, detected mood, and recommended action steps.'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2 sm:p-2.5 rounded-xl bg-cyan-50/60 dark:bg-cyan-950/20 border-2 border-cyan-500/30 dark:border-cyan-400/30">
                      <CheckCircle2 className="w-4 h-4 text-[#00A3E0] dark:text-cyan-400 shrink-0 mt-0.5" />
                      <div className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                        <span className="font-bold text-slate-900 dark:text-white mr-1.5">{item.title}:</span>
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-white/10 text-xs font-semibold text-[#0077B6] dark:text-cyan-300">
                Outcome: Meaningful relationship longevity, immediate first-contact resolution, and elevated customer trust.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — FINAL CTA: MAKE EVERY CONVERSATION COUNT
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50 to-sky-50/60 dark:from-[#050B17] dark:via-[#081226] dark:to-[#050B17] relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="aurora-sphere-1 -bottom-20 left-1/3 bg-[#00A3E0]/20 dark:bg-[#00A3E0]/25 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-400/40 text-[#0077B6] dark:text-cyan-300 text-xs font-bold tracking-wide shadow-sm">
            <Sparkles className="w-4 h-4 text-[#00A3E0]" />
            <span>Make Every Conversation Count</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display leading-tight max-w-3xl mx-auto">
            Make Every Conversation Count.
          </h2>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl mx-auto font-normal">
            Knooviq AI Engagement brings intelligence into every interaction, helping businesses create 
            experiences that feel more relevant, connected, and human.
          </p>

          {/* Final CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenContact ? onOpenContact('Knooviq AI Engagement Consultation') : null}
              className="px-8 py-4 rounded-xl bg-[#0077B6] hover:bg-[#006296] text-white font-bold text-sm shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2 group cursor-pointer hover:scale-102"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/products/knooviq-ai-consultant"
              className="px-6 py-4 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/15 border-2 border-slate-300 dark:border-cyan-400/40 text-slate-900 dark:text-white text-sm font-bold transition-all flex items-center gap-2 shadow-sm"
            >
              <span>Discover Knooviq AI</span>
              <ChevronRight className="w-4 h-4 text-[#00A3E0]" />
            </Link>
          </div>

          {/* Visual Progression Chain: Interaction -> Understanding -> Engagement -> Experience */}
          <div className="pt-10 border-t border-slate-300 dark:border-white/20 max-w-xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
              The Path to Meaningful Relationships
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
              <span className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-white/10 border border-slate-300 dark:border-white/20 shadow-xs">
                Interaction
              </span>
              <span className="text-[#00A3E0] font-bold text-sm">&rarr;</span>
              <span className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-white/10 border border-slate-300 dark:border-white/20 shadow-xs">
                Understanding
              </span>
              <span className="text-[#00A3E0] font-bold text-sm">&rarr;</span>
              <span className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-white/10 border border-slate-300 dark:border-white/20 shadow-xs">
                Engagement
              </span>
              <span className="text-[#00A3E0] font-bold text-sm">&rarr;</span>
              <span className="px-3.5 py-1.5 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-[#0077B6] dark:text-cyan-300 border border-cyan-300 dark:border-cyan-400 font-bold shadow-xs">
                Experience
              </span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
