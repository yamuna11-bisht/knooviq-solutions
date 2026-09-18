import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users2, Cpu, Globe2, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

export const AboutSection: React.FC<{ onOpenContact: () => void }> = ({ onOpenContact }) => {
  const pillars = [
    {
      icon: <Target className="h-6 w-6 text-[#00A3E0] dark:text-[#00F0FF]" />,
      title: 'Business-Centric Engineering',
      desc: 'We do not simply configure software; we re-architect business workflows to maximize operational throughput and financial agility.',
      accent: 'from-[#00A3E0]/20 to-blue-600/10',
    },
    {
      icon: <Cpu className="h-6 w-6 text-sky-500 dark:text-cyan-300" />,
      title: 'Clean Core Philosophy',
      desc: 'Future-proofing enterprise ERP systems with standard SAP S/4HANA best practices and side-by-side cloud extensibility via SAP BTP.',
      accent: 'from-sky-500/20 to-cyan-500/10',
    },
    {
      icon: <Users2 className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />,
      title: 'Domain-Certified Experts',
      desc: 'Our team comprises certified functional architects and technical ABAP/HANA specialists with deep industry domain acumen.',
      accent: 'from-indigo-500/20 to-purple-500/10',
    },
    {
      icon: <Globe2 className="h-6 w-6 text-blue-500 dark:text-blue-400" />,
      title: 'SLA-Driven Global Delivery',
      desc: 'Delivering 24/7 mission-critical application management and support adhering strictly to global ITIL governance standards.',
      accent: 'from-blue-500/20 to-indigo-500/10',
    },
  ];

  return (
    <section id="about" className="relative py-28 bg-white dark:bg-[#030712] border-t border-b border-slate-200 dark:border-white/10 overflow-hidden transition-colors duration-500">
      
      {/* Background Aurora Ambient Blobs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00A3E0]/10 dark:bg-[#00F0FF]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6366F1]/10 dark:bg-[#8B5CF6]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-[#00A3E0]/10 dark:bg-cyan-400/15 border border-[#00A3E0]/25 dark:border-cyan-400/30 px-3.5 py-1 text-xs font-bold text-[#0077B6] dark:text-cyan-300 font-mono uppercase tracking-wider mb-3">
                <Sparkles className="h-3 w-3" />
                <span>About KNOOVIQ Industries</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                Empowering Global Enterprises with{' '}
                <span className="text-gradient-cyan">Resilient SAP Architectures</span>
              </h2>

              <p className="mt-5 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                Headquartered in Mumbai, India, <strong className="text-slate-900 dark:text-white font-bold font-display">KNOOVIQ Industries Private Limited</strong> is a specialized enterprise technology partner. We bridge the gap between strategic business ambitions and complex ERP execution.
              </p>

              <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                From Greenfield S/4HANA implementations and legacy ECC conversions to round-the-clock Application Managed Services (AMS) and corporate workforce enablement, KNOOVIQ delivers measurable business impact with zero disruption to daily operations.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={onOpenContact}
                  className="btn-primary-gradient shimmer-sweep inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white font-display"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Value Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {pillars.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-panel glass-panel-hover rounded-3xl p-6 relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${item.accent} rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-300`} />

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00A3E0]/10 dark:bg-[#070E1E] border border-[#00A3E0]/25 dark:border-cyan-400/30 shadow-inner mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-display text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
