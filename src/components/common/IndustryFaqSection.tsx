import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  ChevronDown, 
  ArrowRight
} from 'lucide-react';

export interface FaqItem {
  q: string;
  a: string;
  tag?: string;
}

export interface IndustryFaqSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  faqs: FaqItem[];
  onOpenContact?: (defaultTopic?: string) => void;
  contactTopic?: string;
}

export const IndustryFaqSection: React.FC<IndustryFaqSectionProps> = ({
  badge = 'FREQUENTLY ASKED QUESTIONS',
  title = 'Frequently Asked Questions',
  subtitle = 'Key architectural and operational questions regarding enterprise integration, MES, and compliance.',
  faqs,
  onOpenContact,
  contactTopic = 'Enterprise Industry Architecture Consultation'
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 sm:py-12 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Compact & Clean */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0070C0]/10 border border-[#0070C0]/20 text-[#0070C0] text-xs font-mono font-bold tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-[#0070C0]" />
            <span>{badge}</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            {title}
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Compact Accordion Deck - No Numbers, Clean & Attractive */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-xl transition-all duration-200 border overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#0070C0] shadow-sm ring-2 ring-[#0070C0]/10'
                    : 'bg-white border-slate-200 hover:border-sky-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 group cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0070C0] shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0070C0] transition-colors leading-snug">
                      {faq.q}
                    </span>
                  </div>

                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? 'bg-[#0070C0] text-white rotate-180 shadow-xs'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-sky-100 group-hover:text-[#0070C0]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-4 pt-0">
                        <div className="border-l-2 border-[#0070C0] pl-3.5 py-0.5 ml-2">
                          <p className="text-xs text-slate-600 leading-relaxed font-normal">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Compact Help Prompt */}
        <div className="pt-6 text-center">
          <p className="text-xs text-slate-500">
            Have a specific architecture question?{' '}
            <button
              type="button"
              onClick={() => onOpenContact?.(contactTopic)}
              className="font-bold text-[#0070C0] hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Talk to an Industry Specialist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};
