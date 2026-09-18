import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Cpu, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Sparkles,
  PhoneCall,
  Server,
  Briefcase,
  RefreshCw,
  GraduationCap,
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

export const SolutionDetailPage: React.FC<{ onOpenContact: (topic?: string) => void }> = ({ onOpenContact }) => {
  const { slug } = useParams<{ slug: string }>();

  const solution = slug ? DETAILED_SOLUTIONS_DATA[slug] : null;

  if (!solution) {
    return (
      <div className="min-h-screen pt-36 pb-20 flex flex-col items-center justify-center bg-slate-50 dark:bg-[#050B17] text-slate-900 dark:text-white px-4">
        <h2 className="text-2xl font-bold mb-4">Solution Not Found</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">The requested SAP solution module could not be located.</p>
        <Link to="/solutions" className="glow-btn px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white">
          Return to Solutions Hub
        </Link>
      </div>
    );
  }

  const getIcon = (solSlug: string) => {
    switch (solSlug) {
      case 'sap-business-ai': return <Bot className="h-8 w-8 text-[#00A3E0]" />;
      case 'rise-with-sap': return <Cloud className="h-8 w-8 text-blue-500" />;
      case 'grow-with-sap': return <Rocket className="h-8 w-8 text-emerald-500" />;
      case 'sap-btp': return <Layers className="h-8 w-8 text-purple-500" />;
      case 'sap-signavio': return <GitBranch className="h-8 w-8 text-amber-500" />;
      case 'sap-datasphere': return <Database className="h-8 w-8 text-indigo-500" />;
      case 'sap-green-ledger': return <Leaf className="h-8 w-8 text-emerald-500" />;
      case 'sap-s4hana': return <Cpu className="h-8 w-8 text-[#00A3E0]" />;
      case 'sap-supply-chain': return <Boxes className="h-8 w-8 text-cyan-500" />;
      case 'sap-ariba': return <ShoppingBag className="h-8 w-8 text-rose-500" />;
      case 'sap-successfactors': return <Users className="h-8 w-8 text-emerald-500" />;
      case 'sap-cx': return <Store className="h-8 w-8 text-amber-500" />;
      case 'sap-consulting': return <Briefcase className="h-8 w-8 text-sky-500" />;
      case 'sap-implementation': return <Layers className="h-8 w-8 text-indigo-500" />;
      case 'sap-migration': return <RefreshCw className="h-8 w-8 text-amber-500" />;
      case 'sap-support': return <Server className="h-8 w-8 text-emerald-500" />;
      case 'sap-outsourcing': return <Briefcase className="h-8 w-8 text-rose-500" />;
      case 'sap-training': return <GraduationCap className="h-8 w-8 text-purple-500" />;
      default: return <Cpu className="h-8 w-8 text-[#00A3E0]" />;
    }
  };


  return (
    <div className="pt-28 pb-20 bg-slate-50 dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Link
          to="/solutions"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-[#00A3E0] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Solutions Hub</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="relative pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00A3E0]/30 bg-white dark:bg-[#0B1528] px-3.5 py-1.5 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-[#00A3E0]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-300">
                  Official Enterprise Practice
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A1931] dark:text-white leading-tight">
                {solution.title}
              </h1>

              <p className="text-base text-[#00A3E0] dark:text-cyan-300 font-semibold">
                {solution.subtitle}
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                {solution.heroDescription}
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenContact(`Solution Consultation: ${solution.title}`)}
                  className="glow-btn inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-xl"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  <span>Consult Solution Lead</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="rounded-3xl border border-slate-200 dark:border-sky-500/30 bg-white dark:bg-[#0B1528] p-8 shadow-xl text-center space-y-4 max-w-sm w-full">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/10 border border-[#00A3E0]/30">
                    {getIcon(solution.slug)}
                  </div>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Verified Delivery Metrics</h4>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {solution.businessBenefits.slice(0, 2).map((b: any, bIdx: number) => (
                    <div key={bIdx} className="rounded-xl bg-slate-50 dark:bg-[#050B17] p-3 border border-slate-200 dark:border-sky-500/15">
                      <div className="font-display text-2xl font-bold text-[#00A3E0] dark:text-cyan-300">{b.metric}</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">{b.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 border-t border-slate-200 dark:border-sky-500/15 bg-slate-100 dark:bg-[#040813] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#00A3E0]">
              Technical Architecture
            </span>
            <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-[#0A1931] dark:text-white">
              Core Capabilities & Implementation Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solution.coreCapabilities.map((cap: any, idx: number) => (
              <div
                key={idx}
                className="rounded-3xl border border-slate-200 dark:border-sky-500/20 bg-white dark:bg-[#0B1528]/80 p-8 shadow-sm dark:shadow-xl space-y-4"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00A3E0]/10 border border-[#00A3E0]/30 text-xs font-bold font-mono text-[#00A3E0] dark:text-cyan-300">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {cap.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cap.description}
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-sky-500/10">
                  {cap.points.map((pt: string, pIdx: number) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#00A3E0] flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Pillars & Deliverables */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Deliverables (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-xl font-bold text-[#0A1931] dark:text-white">
              Standard Engagement Deliverables
            </h3>
            <div className="space-y-3">
              {solution.deliverables.map((deliv: string, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-[#0B1528]/70 border border-slate-200 dark:border-sky-500/20 text-xs sm:text-sm text-slate-700 dark:text-slate-200 shadow-sm"
                >
                  <ShieldCheck className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Core Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {solution.technologies.map((tech: string, idx: number) => (
                  <span
                    key={idx}
                    className="rounded-xl bg-slate-100 dark:bg-[#0B1528] border border-slate-200 dark:border-sky-500/20 px-3 py-1.5 text-xs font-semibold text-[#00A3E0] dark:text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Architecture Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-display text-xl font-bold text-[#0A1931] dark:text-white">
              Architecture Pillars
            </h3>
            <div className="space-y-4">
              {solution.architecturePillars.map((pillar: any, idx: number) => (
                <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-[#0B1528]/90 border border-slate-200 dark:border-sky-500/20 space-y-1.5 shadow-sm">
                  <h4 className="text-sm font-bold text-[#00A3E0] dark:text-cyan-300 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-[#00A3E0]" />
                    <span>{pillar.title}</span>
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pt-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl border border-sky-500/30 bg-gradient-to-r from-[#0A1931] via-[#0B1B3D] to-[#0A1931] p-8 sm:p-12 shadow-2xl text-white">
          <h3 className="font-display text-2xl font-bold text-white mb-3">
            Deploy {solution.title} with KNOOVIQ
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6">
            Get an in-depth landscape assessment and detailed transition schedule tailored to your enterprise.
          </p>
          <button
            onClick={() => onOpenContact(`Solution Inquiry: ${solution.title}`)}
            className="glow-btn inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-xl"
          >
            <span>Request Landscape Evaluation</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

