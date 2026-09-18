import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, 
  FolderArchive, 
  GitMerge, 
  ShieldAlert, 
  LineChart, 
  BellRing, 
  Award, 
  MessagesSquare,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';

interface FeatureCardData {
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  highlights: string[];
  gradient: string;
}

export const VendorFeatures: React.FC = () => {
  const features: FeatureCardData[] = [
    {
      title: 'Vendor Onboarding',
      tagline: 'Self-Service Supplier Portal',
      description: 'Accelerate supplier intake from weeks to hours with guided, zero-paperwork digital registration journeys.',
      icon: UserPlus,
      highlights: [
        'Automated master data capture via GSTIN & PAN APIs',
        'Penny-drop automated bank account validation',
        'Direct generation of SAP Business Partner records'
      ],
      gradient: 'from-blue-600/20 to-cyan-500/20'
    },
    {
      title: 'Document Management',
      tagline: 'AI OCR & Expiration Vault',
      description: 'Centralized repository with automated optical character recognition, digital signatures, and automated expiry alerts.',
      icon: FolderArchive,
      highlights: [
        'Automated metadata extraction from uploaded certificates',
        '30-60-90 day proactive expiry notification alerts',
        'Cryptographically timestamped audit storage'
      ],
      gradient: 'from-cyan-600/20 to-blue-500/20'
    },
    {
      title: 'Approval Workflow',
      tagline: 'Configurable Multi-Tier Routing',
      description: 'Design flexible routing rules across Procurement, Legal, Tax, and Finance teams with strict SLA enforcement.',
      icon: GitMerge,
      highlights: [
        'Conditional approval matrix based on category & spend',
        'Email & mobile one-click sign-off capabilities',
        'Automatic escalation logic on pending bottlenecks'
      ],
      gradient: 'from-indigo-600/20 to-blue-500/20'
    },
    {
      title: 'Compliance & Risk',
      tagline: 'Real-Time Sanction & GST Checks',
      description: 'Continuously screen suppliers against national and international sanction lists, PEP databases, and GST filing regularity.',
      icon: ShieldAlert,
      highlights: [
        'Automated verification with GSTN portal returns',
        'Global OFAC, PEP, and adverse media screening',
        'Dynamic risk scoring (Low / Moderate / Elevated / High)'
      ],
      gradient: 'from-blue-600/20 to-indigo-500/20'
    },
    {
      title: 'Vendor Performance',
      tagline: 'Objective OTIF & Quality Metrics',
      description: 'Replace subjective vendor reviews with real data: On-Time In-Full (OTIF) deliveries, defect rates, and SLA adherence.',
      icon: LineChart,
      highlights: [
        'Direct sync with SAP Goods Receipt (MIGO) transactions',
        'Automated quality rejection rate computation',
        'Benchmarking across category supplier cohorts'
      ],
      gradient: 'from-cyan-600/20 to-teal-500/20'
    },
    {
      title: 'Smart Notifications',
      tagline: 'Contextual Action Triggers',
      description: 'Keep buyers, approvers, and vendors synchronized with automated omnichannel reminders across email, SMS, and WhatsApp.',
      icon: BellRing,
      highlights: [
        'Automated statutory compliance renewal notices',
        'Pending PO acknowledgment and dispatch reminders',
        'Payment status and invoice clearance alerts'
      ],
      gradient: 'from-blue-600/20 to-violet-500/20'
    },
    {
      title: 'Vendor Evaluation',
      tagline: 'Automated Scorecards & Tiering',
      description: 'Empower procurement leaders with automated scorecards, tier classifications (Platinum, Gold, Silver), and renewal recommendations.',
      icon: Award,
      highlights: [
        'Composite weighted scoring across price, quality & SLA',
        'Periodic automated 360-degree appraisal cycles',
        'Data-backed supplier contract renewal recommendations'
      ],
      gradient: 'from-amber-600/20 to-orange-500/20'
    },
    {
      title: 'Supplier Collaboration',
      tagline: 'Unified Transactional Cockpit',
      description: 'Provide vendors with direct visibility into POs, delivery schedules, Advance Shipping Notices (ASN), and payment processing.',
      icon: MessagesSquare,
      highlights: [
        'Self-service invoice status & 2-way / 3-way match tracking',
        'Interactive dispute logging and resolution desk',
        'Direct SAP ERP Purchase Order acknowledgment'
      ],
      gradient: 'from-emerald-600/20 to-cyan-500/20'
    }
  ];

  return (
    <section id="vendor-features" className="py-20 md:py-28 bg-white dark:bg-[#070E1E] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-xs font-bold uppercase tracking-wider text-[#0052CC] dark:text-[#00A3E0]">
            <span>Enterprise Feature Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Comprehensive Capabilities for Modern Procurement
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Engineered to eliminate supplier friction, ensure ironclad statutory compliance, and optimize vendor performance across your enterprise.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl bg-white dark:bg-[#0A1931]/80 border border-slate-200 dark:border-white/10 p-6 shadow-sm hover:shadow-xl hover:border-blue-300 dark:hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Glowing Gradient Accent on hover */}
                <div className={`absolute inset-x-0 -top-px h-1 rounded-t-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div>
                  {/* Icon & Arrow */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 border border-blue-200/60 dark:border-blue-800/60 text-[#0052CC] dark:text-[#00A3E0] flex items-center justify-center group-hover:bg-[#0052CC] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-400 dark:text-slate-500 group-hover:text-[#00A3E0] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0052CC] dark:text-[#00A3E0]">
                      {feature.tagline}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#0052CC] dark:group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {feature.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-2">
                  {feature.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-tight">{h}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
