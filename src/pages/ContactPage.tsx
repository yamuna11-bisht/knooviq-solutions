import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { Sparkles, MapPin, Phone, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/knooviqData';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-slate-50 dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#00A3E0]/30 bg-white dark:bg-[#0B1528] px-3.5 py-1.5 shadow-sm mb-6">
          <Sparkles className="h-3.5 w-3.5 text-[#00A3E0]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-300">
            Enterprise Engagement & Advisory
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A1931] dark:text-white leading-tight mb-6">
          Initiate Your SAP{' '}
          <span className="text-gradient-cyan">Transformation Dialogue</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Schedule a technical assessment with our certified enterprise architects in Mumbai, India. We review existing ERP landscapes and outline risk-free migration roadmaps.
        </p>
      </section>

      {/* Office Locations & Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-slate-200 dark:border-sky-500/20 bg-white dark:bg-[#0B1528]/80 p-6 flex items-start gap-4 shadow-sm dark:shadow-xl">
            <div className="p-3 rounded-2xl bg-slate-100 dark:bg-[#050B17] border border-slate-200 dark:border-sky-500/20 text-[#00A3E0]">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white mb-1">Corporate Headquarters</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {COMPANY_INFO.headquarters.address}, {COMPANY_INFO.headquarters.city} – {COMPANY_INFO.headquarters.postalCode}, Maharashtra, India
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 dark:border-sky-500/20 bg-white dark:bg-[#0B1528]/80 p-6 flex items-start gap-4 shadow-sm dark:shadow-xl">
            <div className="p-3 rounded-2xl bg-slate-100 dark:bg-[#050B17] border border-slate-200 dark:border-sky-500/20 text-[#00A3E0]">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white mb-1">Direct Lines</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Primary: <a href={`tel:${COMPANY_INFO.contact.phone}`} className="text-[#00A3E0] dark:text-cyan-300 hover:underline">{COMPANY_INFO.contact.phone}</a>
                <br />
                Support: <a href={`tel:${COMPANY_INFO.contact.secondaryPhone}`} className="text-[#00A3E0] dark:text-cyan-300 hover:underline">{COMPANY_INFO.contact.secondaryPhone}</a>
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 dark:border-sky-500/20 bg-white dark:bg-[#0B1528]/80 p-6 flex items-start gap-4 shadow-sm dark:shadow-xl">
            <div className="p-3 rounded-2xl bg-slate-100 dark:bg-[#050B17] border border-slate-200 dark:border-sky-500/20 text-[#00A3E0]">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white mb-1">Business Hours & SLA</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {COMPANY_INFO.contact.hours}
                <br />
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">• 24/7 Managed Services for AMS Clients</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Consultation Form */}
      <ContactSection />
    </div>
  );
};

