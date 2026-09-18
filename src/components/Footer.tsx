import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck, ArrowUp, Lock } from 'lucide-react';
import { COMPANY_INFO, INDUSTRIES_DATA } from '../data/knooviqData';
import { KnooviqLogo } from './KnooviqLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-100 border-t border-slate-200 pt-16 pb-12 text-slate-600 text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand & Address (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <KnooviqLogo size="md" />

            <p className="text-slate-600 leading-relaxed text-xs">
              {COMPANY_INFO.description}
            </p>

            <div className="pt-2 space-y-2 text-slate-600 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#0A2540] flex-shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.headquarters.address}, {COMPANY_INFO.headquarters.city} – {COMPANY_INFO.headquarters.postalCode}, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#0A2540] flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-[#0052CC] transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#0A2540] flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phone}`} className="hover:text-[#0052CC] transition-colors">
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* SAP Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900">
              SAP Solutions
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/sap-s4hana" className="hover:text-[#0052CC] transition-colors">
                  SAP S/4HANA Transformation
                </Link>
              </li>
              <li>
                <Link to="/solutions/sap-consulting" className="hover:text-[#0052CC] transition-colors">
                  SAP Strategic Consulting
                </Link>
              </li>
              <li>
                <Link to="/solutions/sap-implementation" className="hover:text-[#0052CC] transition-colors">
                  SAP Implementation
                </Link>
              </li>
              <li>
                <Link to="/solutions/sap-migration" className="hover:text-[#0052CC] transition-colors">
                  SAP Migration & Cloud Upgrades
                </Link>
              </li>
              <li>
                <Link to="/solutions/sap-support" className="hover:text-[#0052CC] transition-colors">
                  SAP Application Support (AMS)
                </Link>
              </li>
              <li>
                <Link to="/solutions/sap-outsourcing" className="hover:text-[#0052CC] transition-colors">
                  SAP Talent Outsourcing
                </Link>
              </li>
              <li>
                <Link to="/solutions/sap-training" className="hover:text-[#0052CC] transition-colors">
                  Corporate SAP Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Industry Verticals (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900">
              Industry Verticals
            </h4>
            <ul className="space-y-2">
              {INDUSTRIES_DATA.slice(0, 6).map((ind) => (
                <li key={ind.id}>
                  <Link to="/industries" className="hover:text-[#0052CC] transition-colors">
                    {ind.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Navigation & Admin Access (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900">
              Platform
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-[#0052CC] transition-colors">
                  About KNOOVIQ
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#0052CC] transition-colors">
                  Services Catalog
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-[#0052CC] transition-colors">
                  Insights & Research
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#0052CC] transition-colors">
                  Careers & Job Board
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#0052CC] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-200">
                <Link
                  to="/admin/login"
                  className="flex items-center gap-1.5 text-[#0A2540] hover:text-[#0052CC] font-semibold"
                >
                  <Lock className="h-3.5 w-3.5" />
                  <span>Private Admin Portal</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Security & Architecture Disclaimer */}
        <div className="py-6 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-600 flex-shrink-0" />
            <span>
              Enterprise Defense-in-Depth: Supabase PostgreSQL RLS, Zod Form Validation, Temporary Signed Resumes, and Tamper-Proof Audit Logs.
            </span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-slate-900 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Knooviq Industries Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Mumbai, Maharashtra, India</span>
            <span>Enterprise SAP Consulting</span>
          </div>
        </div>

      </div>
    </footer>
  );
};


