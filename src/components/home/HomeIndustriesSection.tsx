import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Factory, 
  HardHat, 
  HeartPulse, 
  Truck, 
  Store, 
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface IndustryCardItem {
  id: string;
  title: string;
  tag: string;
  categoryLabel: string;
  description: string;
  image: string;
  highlights: string[];
  icon: React.ComponentType<{ className?: string }>;
  link: string;
}

interface HomeIndustriesSectionProps {
  onOpenContact?: (service?: string) => void;
}

export const HomeIndustriesSection: React.FC<HomeIndustriesSectionProps> = () => {
  const industryCards: IndustryCardItem[] = [
    {
      id: 'manufacturing',
      title: 'Industrial Manufacturing',
      tag: 'INDUSTRY 4.0',
      categoryLabel: 'Manufacturing & Auto',
      description: 'Synchronizing real-time shop-floor MES telemetry with SAP S/4HANA for predictive asset uptime, automated MRP, and zero-defect quality control.',
      image: '/images/manufacturing_industry.jpg',
      highlights: ['MES Integration', 'Predictive Maintenance', 'MRP Live Optimization'],
      icon: Factory,
      link: '/industries/industrial-manufacturing'
    },
    {
      id: 'logistics',
      title: 'Supply Chain & Logistics',
      tag: 'CONNECTED YARD',
      categoryLabel: 'Logistics & Transportation',
      description: 'End-to-end yard execution, multi-modal route sequencing, and voice-assisted RF wave picking with zero latency.',
      image: '/images/distribution_hero_3d.jpg',
      highlights: ['SAP TM & EWM', 'Dynamic Route Dispatch', 'Yard Telemetry'],
      icon: Truck,
      link: '/industries/distribution'
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Life Sciences',
      tag: 'GxP & FDA',
      categoryLabel: 'Life Sciences & Pharma',
      description: 'Cold-chain telemetry monitoring, serialization track-and-trace, and automated FDA/GMP regulatory audit trails.',
      image: '/images/healthcare_industry.jpg',
      highlights: ['Serialization Vault', 'Regulatory Audit Logs', 'Hospital Inventory'],
      icon: HeartPulse,
      link: '/industries/hospitals-healthcare'
    },
    {
      id: 'retail',
      title: 'Retail & Store Operations',
      tag: 'STORE OPERATIONS',
      categoryLabel: 'Stores & Channels',
      description: 'Unified management of retail stores, franchise networks, registers, and localized branch stock replenishment.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
      highlights: ['Master Data Sync', 'Store Register Control', 'Store Manager Hub'],
      icon: Store,
      link: '/industries/retail-ecommerce'
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure & Utilities',
      tag: 'ASSET INTELLIGENCE',
      categoryLabel: 'Capital Projects & Assets',
      description: 'Full lifecycle governance across capital engineering projects, contractor SLAs, and heavy equipment IoT telemetry.',
      image: '/images/real_estate_smart_twin.jpg',
      highlights: ['BIM & EPC Systems', 'Fleet Telemetry', 'Contractor SLA Audit'],
      icon: HardHat,
      link: '/industries/oil-gas'
    },
    {
      id: 'banking',
      title: 'Banking & Financial Services',
      tag: 'FINANCIAL CORE',
      categoryLabel: 'Financial Operations',
      description: 'Universal journal financial ledger consolidation, automated multi-GAAP reconciliations, and statutory EXIM reporting.',
      image: '/images/sap_app_finance_3d.jpg',
      highlights: ['Universal Journal', 'Multi-GAAP Consolidation', 'Statutory Compliance'],
      icon: Building2,
      link: '/industries/financial-services'
    }
  ];

  return (
    <section 
      id="industries" 
      className="relative py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] text-slate-900 overflow-hidden select-none border-b border-slate-200"
    >
      {/* Background Soft Gradients */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-sky-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-300 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0] shadow-2xs mb-2">
              <Briefcase className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>ENTERPRISE INDUSTRY CATALOG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A1931] tracking-tight leading-tight">
              Solutions by <span className="bg-gradient-to-r from-[#00A3E0] to-[#0070C0] bg-clip-text text-transparent">Industry</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal mt-2">
              Explore specialized enterprise functional modules engineered to modernize execution across global vertical sectors.
            </p>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* 3-COLUMN STRUCTURED CARDS GRID (50% Image Top / 50% Content Bottom)       */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {industryCards.map((sol, idx) => {
            const IconComponent = sol.icon;
            return (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="h-[400px] rounded-xl bg-white border-2 border-slate-300 shadow-xs hover:border-[#0070C0] hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* 1. TOP IMAGE BANNER - 50% Pure Photo */}
                <div className="relative h-1/2 w-full overflow-hidden bg-slate-100 shrink-0">
                  <img 
                    src={sol.image} 
                    alt={sol.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                  
                  {/* Floating Tag Pill (Top-Right Dark Badge) */}
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md bg-slate-950/80 border border-white/20 text-[9px] font-mono font-bold text-sky-300 uppercase tracking-wider backdrop-blur-md shadow-xs">
                    {sol.tag}
                  </div>
                </div>

                {/* 2. CARD CONTENT BODY - 50% Height */}
                <div className="h-1/2 p-3.5 sm:p-4 flex flex-col justify-between space-y-2.5 overflow-hidden">
                  
                  <div className="space-y-1.5">
                    {/* Category Label & Icon Indicator */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-[#0070C0] uppercase tracking-wider">
                        {sol.categoryLabel}
                      </span>
                      <div className="p-1.5 rounded-lg bg-sky-50 text-[#0070C0] border border-slate-200 group-hover:bg-[#0070C0] group-hover:text-white transition-all">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Title - Bold & Compact */}
                    <Link to={sol.link}>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0070C0] transition-colors leading-snug">
                        {sol.title}
                      </h3>
                    </Link>

                    {/* Description - Snug & Concise */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {sol.description}
                    </p>
                  </div>

                  {/* Key Capabilities Structured Inline Chips */}
                  <div className="space-y-2.5 pt-1">
                    <div className="flex flex-wrap gap-1.5">
                      {sol.highlights.map((hl, hIdx) => (
                        <span
                          key={hIdx}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HomeIndustriesSection;
