import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Briefcase, 
  Layers, 
  RefreshCw, 
  Server, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Bot,
  Cloud,
  Rocket,
  GitBranch,
  Database,
  Leaf,
  Boxes,
  Users,
  ShoppingBag,
  Store
} from 'lucide-react';
import { DETAILED_SOLUTIONS_DATA } from '../data/knooviqData';

export const SolutionsPage: React.FC<{ onOpenContact: (topic?: string) => void }> = ({ onOpenContact }) => {
  const solutions = Object.values(DETAILED_SOLUTIONS_DATA);

  const getSolutionIcon = (slug: string) => {
    switch (slug) {
      case 'sap-business-ai': return <Bot className="h-6 w-6 text-[#00A3E0]" />;
      case 'rise-with-sap': return <Cloud className="h-6 w-6 text-blue-500" />;
      case 'grow-with-sap': return <Rocket className="h-6 w-6 text-emerald-500" />;
      case 'sap-btp': return <Layers className="h-6 w-6 text-purple-500" />;
      case 'sap-signavio': return <GitBranch className="h-6 w-6 text-amber-500" />;
      case 'sap-datasphere': return <Database className="h-6 w-6 text-indigo-500" />;
      case 'sap-green-ledger': return <Leaf className="h-6 w-6 text-emerald-500" />;
      case 'sap-s4hana': return <Cpu className="h-6 w-6 text-[#00A3E0]" />;
      case 'sap-supply-chain': return <Boxes className="h-6 w-6 text-cyan-500" />;
      case 'sap-ariba': return <ShoppingBag className="h-6 w-6 text-rose-500" />;
      case 'sap-successfactors': return <Users className="h-6 w-6 text-emerald-500" />;
      case 'sap-cx': return <Store className="h-6 w-6 text-amber-500" />;
      case 'sap-consulting': return <Briefcase className="h-6 w-6 text-sky-500" />;
      case 'sap-implementation': return <Layers className="h-6 w-6 text-indigo-500" />;
      case 'sap-migration': return <RefreshCw className="h-6 w-6 text-amber-500" />;
      case 'sap-support': return <Server className="h-6 w-6 text-emerald-500" />;
      case 'sap-outsourcing': return <Briefcase className="h-6 w-6 text-rose-500" />;
      case 'sap-training': return <GraduationCap className="h-6 w-6 text-purple-500" />;
      default: return <Cpu className="h-6 w-6 text-[#00A3E0]" />;
    }
  };


  return (
    <div className="pt-28 pb-20 bg-slate-50 dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#00A3E0]/30 bg-white dark:bg-[#0B1528] px-3.5 py-1.5 shadow-sm mb-6">
          <Sparkles className="h-3.5 w-3.5 text-[#00A3E0]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-300">
            Enterprise SAP Solutions Directory
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A1931] dark:text-white leading-tight mb-6">
          Architecting High-Performance{' '}
          <span className="text-gradient-cyan">SAP Digital Landscapes</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Explore KNOOVIQ's specialized enterprise SAP solution suites designed for rapid time-to-value, clean core compliance, and sustained operational excellence.
        </p>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, idx) => (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-3xl border border-slate-200 dark:border-sky-500/20 bg-white dark:bg-[#0B1528]/80 p-8 flex flex-col justify-between shadow-sm dark:shadow-xl hover:border-[#00A3E0] transition-all hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-[#050B17] border border-slate-200 dark:border-sky-500/25">
                    {getSolutionIcon(sol.slug)}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-sky-500/10 text-[#00A3E0] dark:text-cyan-300 border border-[#00A3E0]/30">
                    Enterprise Suite
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {sol.title}
                </h3>

                <p className="text-xs text-[#00A3E0] font-semibold mb-4">
                  {sol.subtitle}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {sol.heroDescription}
                </p>

                <div className="space-y-2 mb-8">
                  {sol.deliverables.slice(0, 3).map((item: string, dIdx: number) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#00A3E0] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-sky-500/15 flex items-center justify-between gap-3">
                <Link
                  to={`/solutions/${sol.slug}`}
                  className="text-xs font-bold text-[#00A3E0] hover:underline flex items-center gap-1.5"
                >
                  <span>Explore Deep-Dive</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <button
                  onClick={() => onOpenContact(`Solution: ${sol.title}`)}
                  className="rounded-xl bg-slate-100 dark:bg-[#050B17] hover:bg-[#00A3E0] dark:hover:bg-sky-600 px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-800 dark:text-sky-200 hover:text-white border border-slate-200 dark:border-sky-500/25 transition-all"
                >
                  Request Briefing
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

