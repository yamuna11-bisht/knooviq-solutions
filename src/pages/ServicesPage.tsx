import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Cpu, 
  Database, 
  Zap, 
  Workflow, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  AlertTriangle,
  Award,
  Sparkles,
  ChevronDown,
  Headphones,
  ShieldCheck,
  Globe2
} from 'lucide-react';
import { DIGITAL_INTELLIGENCE_DATA } from '../data/knooviqData';

export const ServicesPage: React.FC<{ onOpenContact: (topic?: string) => void }> = ({ onOpenContact }) => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState<string>(DIGITAL_INTELLIGENCE_DATA[0].id);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    if (categoryParam) {
      const match = DIGITAL_INTELLIGENCE_DATA.find(c => c.id === categoryParam);
      if (match) {
        setSelectedCategory(match.id);
      }
    }
  }, [categoryParam]);

  const toggleFaq = (idx: number) => {
    setActiveFaq(prev => prev === idx ? null : idx);
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'artificial-intelligence': return <Cpu className="h-6 w-6 text-sky-500" />;
      case 'data-intelligence': return <Database className="h-6 w-6 text-cyan-500" />;
      case 'intelligent-automation': return <Zap className="h-6 w-6 text-amber-500" />;
      case 'process-intelligence': return <Workflow className="h-6 w-6 text-emerald-500" />;
      case 'digital-experience': return <Users className="h-6 w-6 text-purple-500" />;
      case 'decision-intelligence': return <TrendingUp className="h-6 w-6 text-rose-500" />;
      default: return <Sparkles className="h-6 w-6 text-sky-500" />;
    }
  };

  const current = DIGITAL_INTELLIGENCE_DATA.find(c => c.id === selectedCategory) || DIGITAL_INTELLIGENCE_DATA[0];

  const SERVICE_LEVEL_AGREEMENTS = [
    { priority: 'P1 - Critical', responseTime: '< 15 Minutes', resolutionTarget: 'Within 4 Hours', scope: 'Core AI model latency, production API outage, or mission-critical pipeline block' },
    { priority: 'P2 - High', responseTime: '< 30 Minutes', resolutionTarget: 'Within 8 Hours', scope: 'Automated RPA bot disruption or real-time streaming ETL lag' },
    { priority: 'P3 - Medium', responseTime: '< 2 Hours', resolutionTarget: 'Within 24 Hours', scope: 'Non-critical workflow deviation, catalog sync, or reporting anomaly' },
    { priority: 'P4 - Low', responseTime: '< 4 Hours', resolutionTarget: 'Next Business Release', scope: 'Prompt enhancements, dashboard UI refinements, or minor optimizations' }
  ];

  const FAQS = [
    {
      q: 'How does KNOOVIQ Digital Intelligence integrate with our existing SAP ERP core?',
      a: 'We architect clean-core decoupled extensions on SAP BTP and modern cloud hyperscalers. Your core ERP remains pristine while autonomous AI agents, streaming data fabrics, and RPA bots interact via governed OData APIs and event meshes.'
    },
    {
      q: 'What is the implementation timeline for enterprise AI Agents and Process Mining?',
      a: 'Our pre-built accelerator blueprints allow rapid proof-of-value deployments in 4–6 weeks for Process Mining and Document Intelligence, followed by enterprise-scale rollout in synchronized 8–12 week increments.'
    },
    {
      q: 'How do you address data privacy, governance, and hallucination in Enterprise AI?',
      a: 'We implement zero-trust sovereign AI architectures, private vector databases with Retrieval-Augmented Generation (RAG), strict Role-Based Access Control (RBAC), and automated guardrails ensuring 100% compliance with GDPR and local regulations.'
    },
    {
      q: 'Can KNOOVIQ manage 24/7 autonomous bot operations and model monitoring?',
      a: 'Yes. Our specialized AI & Automation Operations practice provides 24/7/365 follow-the-sun monitoring, automated bot self-healing, model drift detection, and continuous accuracy benchmarking.'
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50 dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* Header - EXACT structure as IndustriesPage */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#00A3E0]/30 bg-white dark:bg-[#0B1528] px-3.5 py-1.5 shadow-sm mb-6">
          <Sparkles className="h-3.5 w-3.5 text-[#00A3E0]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-300">
            Cognitive Enterprise Capabilities
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A1931] dark:text-white leading-tight mb-6">
          Digital Intelligence{' '}
          <span className="text-gradient-cyan">Transformation Blueprints</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Tailoring autonomous AI agents, governed real-time data fabrics, robotic hyper-automation, live process mining, omnichannel digital experiences, and prescriptive decision frameworks.
        </p>
      </section>

      {/* Category Selector Chips - EXACT structure as IndustriesPage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-2.5">
          {DIGITAL_INTELLIGENCE_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`industry-category-tab flex items-center justify-center px-4 py-2.5 rounded-2xl transition-all shadow-sm ${
                selectedCategory === cat.id
                  ? 'bg-[#00A3E0]/15 dark:bg-sky-500/20 text-[#00A3E0] dark:text-cyan-300 border border-[#00A3E0] dark:border-sky-400/50 shadow-md'
                  : 'border border-slate-200 dark:border-sky-500/15 bg-white dark:bg-[#0B1528]/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#0B1528]'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Selected Category Detail Section - EXACT structure as IndustriesPage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl border border-slate-200 dark:border-sky-500/25 bg-white dark:bg-[#0B1528]/95 p-8 sm:p-12 shadow-xl dark:shadow-2xl backdrop-blur-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Overview (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="industry-category-title text-[#00A3E0] block mb-1">
                  Practice Focus • {current.badge}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {current.name}
                </h2>
              </div>

              <p className="text-base text-[#00A3E0] dark:text-cyan-300 font-semibold">
                {current.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {current.description}
              </p>

              <div className="pt-2">
                <h4 className="industry-category-title text-slate-500 dark:text-slate-400 mb-3">
                  Core Subsections & Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.items.map((item, sIdx) => {
                    const aiRouteMap: Record<string, string> = {
                      'Generative AI': '/digital-intelligence/generative-ai',
                      'AI Agents': '/digital-intelligence/ai-agents',
                      'AI Assistants': '/digital-intelligence/ai-assistants',
                      'Machine Learning': '/digital-intelligence/machine-learning',
                      'Predictive AI': '/digital-intelligence/predictive-ai',
                      'Enterprise AI': '/digital-intelligence/enterprise-ai'
                    };
                    const route = current.id === 'artificial-intelligence' ? aiRouteMap[item] : undefined;

                    if (route) {
                      return (
                        <Link 
                          key={sIdx} 
                          to={route}
                          className="flex items-center justify-between rounded-xl bg-slate-50 dark:bg-[#050B17]/60 p-3.5 border border-slate-200 dark:border-sky-500/15 text-xs text-slate-700 dark:text-slate-200 hover:border-[#0070C0] dark:hover:border-cyan-500/50 hover:bg-sky-50/50 transition-all group"
                        >
                          <div className="flex items-center gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-[#00A3E0] flex-shrink-0" />
                            <span className="font-semibold group-hover:text-[#0070C0] dark:group-hover:text-cyan-300 transition-colors">{item}</span>
                          </div>
                          <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#0070C0] dark:group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      );
                    }

                    return (
                      <div 
                        key={sIdx} 
                        className="flex items-start gap-2.5 rounded-xl bg-slate-50 dark:bg-[#050B17]/60 p-3.5 border border-slate-200 dark:border-sky-500/15 text-xs text-slate-700 dark:text-slate-200 hover:border-sky-300 dark:hover:border-cyan-500/30 transition-colors"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#00A3E0] flex-shrink-0 mt-0.5" />
                        <span className="font-semibold">{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Case Snippet */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#050B17]/80 border border-slate-200 dark:border-sky-500/20 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-3">
                <Award className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block font-bold mb-0.5">Verified Delivery Outcome:</strong>
                  <span>{current.caseSnippet}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenContact(`Digital Intelligence: ${current.name}`)}
                  className="btn-primary-gradient shimmer-sweep inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white font-display shadow-md"
                >
                  <span>Consult on {current.name}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onOpenContact(`Architecture Proposal: ${current.name}`)}
                  className="rounded-2xl border border-slate-200 dark:border-sky-500/30 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 transition-colors font-display"
                >
                  Request Assessment
                </button>
              </div>
            </div>

            {/* Right Side Challenges & Advantage (5 cols) - EXACT structure as IndustriesPage */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Challenges Solved */}
              <div className="rounded-2xl bg-slate-50 dark:bg-[#050B17]/90 p-6 border border-slate-200 dark:border-sky-500/20 space-y-3">
                <h4 className="industry-category-title text-rose-500 dark:text-rose-400 flex items-center gap-2 font-mono">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Key Enterprise Challenges Solved</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  {current.keyChallenges.map((ch, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2">
                      <span className="text-rose-500 dark:text-rose-400">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Knooviq Advantage */}
              <div className="rounded-2xl bg-slate-50 dark:bg-[#050B17]/90 p-6 border border-slate-200 dark:border-sky-500/20 space-y-3">
                <h4 className="industry-category-title text-[#00A3E0] dark:text-cyan-300 flex items-center gap-2 font-mono">
                  <Sparkles className="h-4 w-4" />
                  <span>KnoovIQ Strategic Architecture</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  {current.knooviqAdvantage.map((adv, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <span className="text-[#00A3E0] dark:text-cyan-400">•</span>
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SLA & Production Ready Card */}
              <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-indigo-600/10 p-5 border border-sky-400/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider block font-bold">
                    Enterprise Operational Standard
                  </span>
                  <span className="text-xs font-black text-[#0A1931] dark:text-white">
                    99.8% Production Model SLA
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Clean Core Verified</span>
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </section>

      {/* =========================================================================
          SLA & FAQ SECTION
          ========================================================================= */}
      <section className="py-16 bg-white dark:bg-[#070E1C] border-t border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* SLA Table */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00A3E0] font-mono">
                Performance Commitments
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
                Enterprise Support & Operational SLAs
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
                Rigorous ITIL-aligned response and resolution guarantees for continuous business operations.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-[#0B1528] text-slate-700 dark:text-slate-300 uppercase tracking-wider font-bold">
                  <tr>
                    <th className="py-3 px-4">Severity Tier</th>
                    <th className="py-3 px-4">Guaranteed Response</th>
                    <th className="py-3 px-4">Resolution Target</th>
                    <th className="py-3 px-4">Coverage Scope</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-white/5 bg-white dark:bg-[#050B17]">
                  {SERVICE_LEVEL_AGREEMENTS.map((sla, sIdx) => (
                    <tr key={sIdx} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">{sla.priority}</td>
                      <td className="py-3 px-4 text-[#00A3E0] font-bold font-mono">{sla.responseTime}</td>
                      <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-bold font-mono">{sla.resolutionTarget}</td>
                      <td className="py-3 px-4 text-slate-600 dark:text-slate-300">{sla.scope}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00A3E0] font-mono">
                Clarifications
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, fIdx) => (
                <div 
                  key={fIdx}
                  className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0B1528] overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(fIdx)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 dark:text-white hover:text-[#00A3E0] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${activeFaq === fIdx ? 'rotate-180 text-[#00A3E0]' : 'text-slate-400'}`} />
                  </button>
                  {activeFaq === fIdx && (
                    <div className="px-6 pb-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Floating CTA Banner */}
      <section className="py-12 bg-gradient-to-r from-sky-500/10 via-[#00A3E0]/15 to-blue-600/10 border-t border-slate-200 dark:border-sky-500/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Ready to Architect Your Digital Intelligence Foundation?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Connect with our enterprise AI and data architects to build a customized, risk-free transformation roadmap.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenContact('Digital Intelligence Transformation Proposal')}
              className="btn-primary-gradient shimmer-sweep inline-flex items-center gap-2 rounded-2xl px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-xl hover:scale-105 transition-all"
            >
              <span>Schedule Architecture Consultation &rarr;</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
