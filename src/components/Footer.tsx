import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck, ArrowUp, Lock, Sparkles, Award } from 'lucide-react';
import { COMPANY_INFO, INDUSTRIES_DATA } from '../data/knooviqData';
import { KnooviqLogo } from './KnooviqLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-100 dark:bg-[#070E1C] border-t border-slate-200 dark:border-white/10 pt-16 pb-12 text-slate-600 dark:text-slate-400 text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid: 5 Enterprise Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-200 dark:border-white/10">
          
          {/* Col 1: Brand & Global Delivery (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <KnooviqLogo size="md" />

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs">
              KNOOVIQ is a premier enterprise SAP consultancy delivering Digital Core Transformation, Intelligent Supply Chain, Clean Core modernization, and Data & AI solutions across global enterprises.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-sky-500/10 border border-blue-200 dark:border-sky-500/20 text-[#00A3E0] dark:text-cyan-300 font-bold text-[10px] tracking-wide uppercase">
              <Award className="h-3 w-3" />
              <span>SAP Platinum Partner Standards</span>
            </div>

            <div className="pt-1 space-y-2 text-slate-600 dark:text-slate-400 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#00A3E0] flex-shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.headquarters.address}, {COMPANY_INFO.headquarters.city} – {COMPANY_INFO.headquarters.postalCode}, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#00A3E0] flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-[#00A3E0] transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#00A3E0] flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phone}`} className="hover:text-[#00A3E0] transition-colors">
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Enterprise Solutions (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">
              Solutions
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/sap-s4hana" className="hover:text-[#00A3E0] transition-colors">
                  Digital Core (S/4HANA)
                </Link>
              </li>
              <li>
                <Link to="/solutions/sap-supply-chain" className="hover:text-[#00A3E0] transition-colors">
                  Intelligent Supply Chain
                </Link>
              </li>
              <li>
                <Link to="/solutions/sap-finance" className="hover:text-[#00A3E0] transition-colors">
                  Financial Modernization
                </Link>
              </li>
              <li>
                <Link to="/solutions/asset-management" className="hover:text-[#00A3E0] transition-colors">
                  Smart Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/solutions/sap-cx" className="hover:text-[#00A3E0] transition-colors">
                  Retail Optimization
                </Link>
              </li>
              <li>
                <Link to="/solutions/rise-with-sap" className="hover:text-[#00A3E0] transition-colors">
                  RISE with SAP
                </Link>
              </li>
              <li>
                <Link to="/solutions/grow-with-sap" className="hover:text-[#00A3E0] transition-colors">
                  GROW with SAP
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="font-bold text-[#00A3E0] hover:underline flex items-center gap-1 pt-1">
                  <span>All Solutions</span>
                  <span>&rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Managed Care (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-[#00A3E0] transition-colors">
                  S/4HANA Implementation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#00A3E0] transition-colors">
                  MAXCare AMS (24/7 Support)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#00A3E0] transition-colors">
                  ECC to S/4HANA Upgrade
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#00A3E0] transition-colors">
                  Clean Core Architecture
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#00A3E0] transition-colors">
                  Cybersecurity & GRC
                </Link>
              </li>
              <li>
                <Link to="/products/gst" className="hover:text-[#00A3E0] transition-colors">
                  India GST & Compliance
                </Link>
              </li>
              <li>
                <Link to="/services" className="font-bold text-[#00A3E0] hover:underline flex items-center gap-1 pt-1">
                  <span>Explore Services</span>
                  <span>&rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Data, Analytics & AI (Exactly as in User's Screenshot) (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2">
              <h4 className="font-display text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">
                Data, Analytics & AI
              </h4>
              <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-[#00A3E0] text-white">
                GEN AI
              </span>
            </div>
            <ul className="space-y-2">
              <li>
                <Link to="/technology/sap-business-ai" className="hover:text-[#00A3E0] transition-colors font-medium">
                  SAP Business AI
                </Link>
              </li>
              <li>
                <Link to="/technology/generative-ai" className="hover:text-[#00A3E0] transition-colors font-medium">
                  Generative AI
                </Link>
              </li>
              <li>
                <Link to="/technology/ai-agents" className="hover:text-[#00A3E0] transition-colors font-medium">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link to="/technology/sap-analytics-cloud" className="hover:text-[#00A3E0] transition-colors font-medium">
                  SAP Analytics Cloud
                </Link>
              </li>
              <li>
                <Link to="/technology/sap-datasphere" className="hover:text-[#00A3E0] transition-colors font-medium">
                  SAP Datasphere
                </Link>
              </li>
              <li>
                <Link to="/technology/intelligent-automation" className="hover:text-[#00A3E0] transition-colors font-medium">
                  Intelligent Automation
                </Link>
              </li>
              <li>
                <Link to="/technology/data-analytics-ai" className="font-bold text-[#00A3E0] hover:underline flex items-center gap-1 pt-1">
                  <span>Data & AI Practice Hub</span>
                  <span>&rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Industries (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about/the-knooviq-story" className="hover:text-[#00A3E0] transition-colors">
                  The Story
                </Link>
              </li>
              <li>
                <Link to="/about/visionary-leadership" className="hover:text-[#00A3E0] transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-[#00A3E0] transition-colors">
                  Industry Practices
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-[#00A3E0] transition-colors">
                  Case Studies & Insights
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#00A3E0] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00A3E0] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-200 dark:border-white/10">
                <Link
                  to="/admin/login"
                  className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-[#00A3E0] font-semibold"
                >
                  <Lock className="h-3.5 w-3.5 text-[#00A3E0]" />
                  <span>Admin Security</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Security & Architecture Disclaimer */}
        <div className="py-6 border-b border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#00A3E0] flex-shrink-0" />
            <span>
              Enterprise Defense-in-Depth: SAP Clean Core Governance, ISO-Certified Security, Automated Audit Logs, and Zero Core Code Contamination.
            </span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} KNOOVIQ Enterprise Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Global Delivery: Navi Mumbai &bull; Dubai &bull; Singapore &bull; USA</span>
            <span>Enterprise SAP Consulting</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
