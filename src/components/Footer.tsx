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

        {/* Top Row: Brand Logo on Left, Tagline in Center, Social Media Strip on Right */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/10">
          <Link to="/" onClick={scrollToTop} className="flex-shrink-0">
            <KnooviqLogo size="lg" />
          </Link>

          <p className="text-[13px] sm:text-sm text-[#334155] dark:text-slate-300 font-medium leading-[1.7] max-w-xl">
            Enterprise Core Modernization, Cloud Operations &amp; Digital Intelligence
          </p>

          {/* Official Brand Social Icons Suite: Instagram, Facebook, YouTube, LinkedIn, X (Twitter) */}
          <div className="flex items-center gap-2.5 shrink-0" aria-label="Official social media profiles">
            {/* 1. Official Instagram App Icon */}
            <a
              href="https://www.instagram.com/knooviq_industries_pvt.ltd?exln=YWMza3g1eGlhMTJi&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram (@knooviq_industries_pvt.ltd)"
              className="group inline-flex items-center justify-center transition-transform hover:scale-108 active:scale-95"
            >
              <svg className="w-9 h-9 rounded-xl shadow-xs transition-shadow duration-200 group-hover:shadow-md" viewBox="0 0 36 36" fill="none">
                <defs>
                  <linearGradient id="ig-official-full-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFDC80" />
                    <stop offset="25%" stopColor="#F77737" />
                    <stop offset="50%" stopColor="#FD1D1D" />
                    <stop offset="75%" stopColor="#C13584" />
                    <stop offset="100%" stopColor="#833AB4" />
                  </linearGradient>
                </defs>
                <rect width="36" height="36" rx="9" fill="url(#ig-official-full-grad)" />
                <rect x="8.5" y="8.5" width="19" height="19" rx="5.5" stroke="#FFFFFF" strokeWidth="2.2" fill="none" />
                <circle cx="18" cy="18" r="4.8" stroke="#FFFFFF" strokeWidth="2.2" fill="none" />
                <circle cx="23.2" cy="12.8" r="1.3" fill="#FFFFFF" />
              </svg>
            </a>

            {/* 2. Official Facebook Icon */}
            <a
              href="https://www.facebook.com/profile.php?id=61596080467082"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook (@Knooviq)"
              className="group inline-flex items-center justify-center transition-transform hover:scale-108 active:scale-95"
            >
              <svg className="w-9 h-9 rounded-xl shadow-xs transition-shadow duration-200 group-hover:shadow-md" viewBox="0 0 36 36" fill="none">
                <rect width="36" height="36" rx="9" fill="#1877F2" />
                <path d="M23.5 18.5h-3.6v13.5h-5.6V18.5H11.5v-4.8h2.8v-3.1c0-3.8 2.3-5.8 5.7-5.8 1.6 0 3.1.1 3.5.2v4h-2.3c-1.8 0-2.2.9-2.2 2.2v2.5h4.4l-.6 4.8z" fill="#FFFFFF" />
              </svg>
            </a>

            {/* 3. Official YouTube Icon */}
            <a
              href="https://www.youtube.com/@KnooviqConnect"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              title="YouTube (@KnooviqConnect)"
              className="group inline-flex items-center justify-center transition-transform hover:scale-108 active:scale-95"
            >
              <svg className="w-9 h-9 rounded-xl shadow-xs transition-shadow duration-200 group-hover:shadow-md" viewBox="0 0 36 36" fill="none">
                <rect width="36" height="36" rx="9" fill="#FF0000" />
                <path d="M14.5 12l9 6-9 6V12z" fill="#FFFFFF" />
              </svg>
            </a>

            {/* 4. Official LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/company/knooviq-industries/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn (@knooviq-industries)"
              className="group inline-flex items-center justify-center transition-transform hover:scale-108 active:scale-95"
            >
              <svg className="w-9 h-9 rounded-xl shadow-xs transition-shadow duration-200 group-hover:shadow-md" viewBox="0 0 36 36" fill="none">
                <rect width="36" height="36" rx="9" fill="#0A66C2" />
                <path d="M11.5 14h3.6v11h-3.6V14zm1.8-5.8c1.2 0 2.1.9 2.1 2.1s-.9 2.1-2.1 2.1c-1.2 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1zM17.5 14h3.4v1.5h.1c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.2 2.3 4.2 5.3V25h-3.6v-5.3c0-1.3 0-2.9-1.8-2.9-1.8 0-2.1 1.4-2.1 2.8V25h-3.6V14z" fill="#FFFFFF" />
              </svg>
            </a>

            {/* 5. Official X / Twitter Icon */}
            <a
              href="https://x.com/Knooviqindust"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              title="X / Twitter (@Knooviqindust)"
              className="group inline-flex items-center justify-center transition-transform hover:scale-108 active:scale-95"
            >
              <svg className="w-9 h-9 rounded-xl shadow-xs transition-shadow duration-200 group-hover:shadow-md" viewBox="0 0 36 36" fill="none">
                <rect width="36" height="36" rx="9" fill="#000000" />
                <path d="M22.5 9h2.8l-6.1 7 7.2 9.5h-5.6l-4.4-5.8-5 5.8H8.5l6.6-7.5L8.5 9h5.8l4 5.3L22.5 9zm-1 14.8h1.6L14 10.6h-1.7l9.2 13.2z" fill="#FFFFFF" />
              </svg>
            </a>
          </div>
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
                  1210, One World by Sanjar, Near NL College, SV Road, Malad West, Mumbai 400065
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
