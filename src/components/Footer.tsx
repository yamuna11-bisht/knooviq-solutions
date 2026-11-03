import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/knooviqData';
import { KnooviqLogo } from './KnooviqLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#F4F8FC] dark:bg-[#070E1C] border-t border-slate-200 dark:border-white/10 pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Row: Brand Logo on Left, Tagline on Right */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-slate-200 dark:border-white/10">
          <Link to="/" onClick={scrollToTop} className="flex-shrink-0">
            <KnooviqLogo size="lg" />
          </Link>
          <p className="text-[13px] sm:text-sm text-[#334155] dark:text-slate-300 font-medium leading-[1.7]">
            Enterprise Core Modernization, Cloud Operations &amp; Digital Intelligence
          </p>
        </div>

        {/* Navigation Columns: Exact Match to Header Dropdowns (6 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pt-8 pb-10">

          {/* Column 1: About */}
          <div className="space-y-3.5">
            <h3 className="font-display text-[13px] sm:text-sm font-semibold uppercase tracking-wider text-[#0F172A] dark:text-white">
              About
            </h3>
            <ul className="space-y-2 text-[13px] sm:text-sm leading-[1.7]">
              <li>
                <Link to="/about/the-knooviq-story" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  The KnoovIQ Story
                </Link>
              </li>
              <li>
                <Link to="/about/visionary-leadership" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Visionary Leadership
                </Link>
              </li>
              <li>
                <Link to="/about/digital-sap-excellence" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Digital &amp; SAP Excellence
                </Link>
              </li>
              <li>
                <Link to="/about/our-global-network" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Our Global Network
                </Link>
              </li>
              <li>
                <Link to="/about/grow-with-us" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Grow With Us
                </Link>
              </li>
              <li>
                <Link to="/about/knooviq-connect" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  KnoovIQ Connect
                </Link>
              </li>
              <li>
                <Link to="/about/global-presence" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Global Presence
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-3.5">
            <h3 className="font-display text-[13px] sm:text-sm font-semibold uppercase tracking-wider text-[#0F172A] dark:text-white">
              Products
            </h3>
            <ul className="space-y-2 text-[13px] sm:text-sm leading-[1.7]">
              <li>
                <Link to="/exim" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Global Trade &amp; EXIM
                </Link>
              </li>
              <li>
                <Link to="/e-invoice" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  E-Invoicing Solutions
                </Link>
              </li>
              <li>
                <Link to="/eway-bill" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  E-Way Bill Management
                </Link>
              </li>
              <li>
                <Link to="/products/gst" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  GST &amp; Tax Compliance
                </Link>
              </li>
              <li>
                <Link to="/products/knooviq-ai-consultant" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Knooviq AI Consultant
                </Link>
              </li>
              <li>
                <Link to="/products/bank-statement-intelligence" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Bank Intelligence
                </Link>
              </li>
              <li>
                <Link to="/products/automation-suite" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Automation Suite
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Transformation */}
          <div className="space-y-3.5">
            <h3 className="font-display text-[13px] sm:text-sm font-semibold uppercase tracking-wider text-[#0F172A] dark:text-white">
              Transformation
            </h3>
            <ul className="space-y-2 text-[13px] sm:text-sm leading-[1.7]">
              <li>
                <Link to="/transformation/sap-s4hana" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  SAP S/4HANA
                </Link>
              </li>
              <li>
                <Link to="/transformation/erp-transformation" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  ERP Transformation
                </Link>
              </li>
              <li>
                <Link to="/transformation/digital-transformation" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link to="/transformation/rise-with-sap" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  RISE with SAP
                </Link>
              </li>
              <li>
                <Link to="/transformation/business-applications" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Business Applications
                </Link>
              </li>
              <li>
                <Link to="/transformation/system-conversion" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Clean Core Architecture
                </Link>
              </li>
              <li>
                <Link to="/transformation/greenfield" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Migration &amp; Modernization
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Cloud & Operations */}
          <div className="space-y-3.5">
            <h3 className="font-display text-[13px] sm:text-sm font-semibold uppercase tracking-wider text-[#0F172A] dark:text-white">
              Cloud &amp; Ops
            </h3>
            <ul className="space-y-2 text-[13px] sm:text-sm leading-[1.7]">
              <li>
                <Link to="/cloud-operations/strategy" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Cloud Strategy
                </Link>
              </li>
              <li>
                <Link to="/cloud-operations/infrastructure" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/cloud-operations/aws" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Hyperscalers (AWS/Azure/GCP)
                </Link>
              </li>
              <li>
                <Link to="/cloud-operations/application-operations" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Application Operations
                </Link>
              </li>
              <li>
                <Link to="/cloud-operations/monitoring-observability" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Monitoring &amp; APM
                </Link>
              </li>
              <li>
                <Link to="/cloud-operations/managed-operations" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  24×7 Managed Operations
                </Link>
              </li>
              <li>
                <Link to="/cloud-operations/security" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Security &amp; Resilience
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Digital Intelligence */}
          <div className="space-y-3.5">
            <h3 className="font-display text-[13px] sm:text-sm font-semibold uppercase tracking-wider text-[#0F172A] dark:text-white truncate">
              Digital Intel
            </h3>
            <ul className="space-y-2 text-[13px] sm:text-sm leading-[1.7]">
              <li>
                <Link to="/technology/sap-business-ai" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  SAP Business AI
                </Link>
              </li>
              <li>
                <Link to="/digital-intelligence/generative-ai" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Generative AI
                </Link>
              </li>
              <li>
                <Link to="/digital-intelligence/ai-agents" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Autonomous AI Agents
                </Link>
              </li>
              <li>
                <Link to="/technology/sap-analytics-cloud" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  SAP Analytics Cloud
                </Link>
              </li>
              <li>
                <Link to="/technology/sap-datasphere" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  SAP Datasphere
                </Link>
              </li>
              <li>
                <Link to="/digital-intelligence/process-automation" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Intelligent Automation
                </Link>
              </li>
              <li>
                <Link to="/digital-intelligence/decision-support" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Decision Intelligence
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 6: Industries */}
          <div className="space-y-3.5">
            <h3 className="font-display text-[13px] sm:text-sm font-semibold uppercase tracking-wider text-[#0F172A] dark:text-white">
              Industries
            </h3>
            <ul className="space-y-2 text-[13px] sm:text-sm leading-[1.7]">
              <li>
                <Link to="/industries/retail-ecommerce" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Retail &amp; Commerce
                </Link>
              </li>
              <li>
                <Link to="/industries/discrete-manufacturing" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/industries/automotive-mobility" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Automotive &amp; Mobility
                </Link>
              </li>
              <li>
                <Link to="/industries/hospitals-healthcare" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Health &amp; Life Sciences
                </Link>
              </li>
              <li>
                <Link to="/industries/power-utilities" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Energy &amp; Utilities
                </Link>
              </li>
              <li>
                <Link to="/industries/transportation-logistics" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Logistics &amp; Transport
                </Link>
              </li>
              <li>
                <Link to="/industries/banking" className="text-[#334155] dark:text-slate-300 font-normal sm:font-medium hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors block leading-[1.7]">
                  Banking &amp; Finance
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Contact Information & Corporate Credentials Strip (3 Cards matching Image 1) */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/10">

          {/* 3 Contact Cards: CALL US | EMAIL US | HEAD OFFICE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            
            {/* Card 1: CALL US */}
            <div className="rounded-2xl p-4 sm:p-5 bg-slate-50 dark:bg-[#071322] border border-slate-200 dark:border-cyan-500/20 shadow-xs flex items-center gap-4 transition-all hover:border-sky-300 dark:hover:border-cyan-500/40">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-[#0077CC] dark:text-cyan-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#334155] dark:text-slate-400 block mb-0.5">
                  CALL US
                </span>
                <div className="text-[13px] sm:text-sm font-semibold text-[#0F172A] dark:text-white leading-[1.7] truncate">
                  <a href="tel:+917900073410" className="hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors">
                    +91-7900073410
                  </a>
                  <span className="text-slate-400 mx-1">/</span>
                  <a href="tel:+918976697001" className="hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors">
                    +91 89766 97001
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: EMAIL US */}
            <div className="rounded-2xl p-4 sm:p-5 bg-slate-50 dark:bg-[#071322] border border-slate-200 dark:border-cyan-500/20 shadow-xs flex items-center gap-4 transition-all hover:border-sky-300 dark:hover:border-cyan-500/40">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-[#0077CC] dark:text-cyan-400 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#334155] dark:text-slate-400 block mb-0.5">
                  EMAIL US
                </span>
                <div className="text-[13px] sm:text-sm font-semibold text-[#0F172A] dark:text-white leading-[1.7] truncate">
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors">
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3: HEAD OFFICE */}
            <div className="rounded-2xl p-4 sm:p-5 bg-slate-50 dark:bg-[#071322] border border-slate-200 dark:border-cyan-500/20 shadow-xs flex items-center gap-4 transition-all hover:border-sky-300 dark:hover:border-cyan-500/40">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-[#0077CC] dark:text-cyan-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#334155] dark:text-slate-400 block mb-0.5">
                  HEAD OFFICE
                </span>
                <p className="text-[13px] sm:text-sm font-semibold text-[#0F172A] dark:text-white leading-[1.7]">
                  1210, One World by Sanjar, Bhadran Nagar, Malad West, Mumbai (India)
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] sm:text-sm leading-[1.7] text-[#334155] dark:text-slate-300">
          <p className="text-[#334155] dark:text-slate-300">
            &copy; {new Date().getFullYear()} <strong className="font-bold text-[#334155] dark:text-slate-300">Knooviq Industries Pvt Ltd</strong>. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#334155] dark:text-slate-300 hover:text-[#0077CC] dark:hover:text-cyan-400 transition-colors font-medium cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>

    </footer>
  );
};
