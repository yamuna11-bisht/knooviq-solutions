import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Clock, 
  Globe2, 
  Boxes, 
  FileCheck2, 
  AlertCircle,
  Database,
  Heart,
  Users,
  CreditCard,
  Building,
  Package,
  Calendar
} from 'lucide-react';
import { IndustryFaqSection } from '../../components/common/IndustryFaqSection';

interface WellnessCareIndustryPageProps {
  onOpenContact?: (defaultService?: string) => void;
}

export const WellnessCareIndustryPage: React.FC<WellnessCareIndustryPageProps> = ({ onOpenContact }) => {
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<'ALL' | 'CLINIC' | 'BILLING' | 'FULFILLMENT'>('ALL');
  const [activeArchTab, setActiveArchTab] = useState<'clean-core' | 'brim' | 'multi-clinic' | 'fulfillment'>('clean-core');
  const [activeJourneyStep, setActiveJourneyStep] = useState<number>(0);

  // Section 2: Wellness Journey Navigator Data
  const journeySteps = [
    {
      label: 'Membership & Booking',
      title: 'Digital Member Onboarding & Booking',
      description: 'Prospective members enroll through omnichannel portals, setting up recurring wellness plans with automated payment tokenization and care schedule bookings.',
      tag: 'OMNICHANNEL ENGAGEMENT',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80'
    },
    {
      label: 'Multi-Clinic Supply',
      title: 'Decentralized Clinic Replenishment',
      description: 'Regional clinic networks trigger point-of-use inventory replenishments for specialized therapy consumables, vitamins, and skincare regimens from central distribution.',
      tag: 'CLINICAL INTRALOGISTICS',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      label: 'Home Care Fulfillment',
      title: 'Direct-to-Patient Care Kit Fulfillment',
      description: 'Automated warehouse pick-and-pack dispatches personalized monthly wellness supplements, diagnostic test collection kits, and personalized care packages.',
      tag: 'DIRECT-TO-CONSUMER',
      icon: Package,
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80'
    },
    {
      label: 'Usage Billing & Renewals',
      title: 'Automated Recurring Billing & Tier Upgrades',
      description: 'SAP Billing and Revenue Innovation Management (BRIM) orchestrates tiered subscription plans, bundled therapy credits, and recurring renewals.',
      tag: 'SUBSCRIPTION REVENUE',
      icon: CreditCard,
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  // Section 3: Industry Challenges
  const wellnessChallenges = [
    {
      icon: CreditCard,
      tag: 'BILLING COMPLEXITY',
      title: 'Fragmented Subscription & Clinic Billing',
      desc: 'Managing recurring patient memberships, clinic walk-in copays, and digital wellness product subscriptions across disparate systems causes high revenue leakage.',
      footer: 'Disconnected Revenue Models'
    },
    {
      icon: Building,
      tag: 'PROCUREMENT CHAOS',
      title: 'Decentralized Multi-Location Purchasing',
      desc: 'Independent clinic branches purchase therapy supplies, supplements, and equipment through rogue channels, forfeiting bulk purchasing discounts.',
      footer: 'Rogue Spending & Stock Variance'
    },
    {
      icon: Package,
      tag: 'FULFILLMENT LAG',
      title: 'Personalized Kit Shipping Delays',
      desc: 'Customized monthly patient wellness regimens and diagnostic sampling kits suffer from manual warehouse bundling, resulting in delayed patient deliveries.',
      footer: 'High Assembly Error Rates'
    },
    {
      icon: ShieldCheck,
      tag: 'DATA PRIVACY',
      title: 'HIPAA & PCI Compliance Exposure',
      desc: 'Handling member payment credentials alongside sensitive wellness consultation records without unified enterprise governance exposes operators to severe regulatory fines.',
      footer: 'Fragmented Data Compliance'
    }
  ];

  // Section 5: Modular Solutions (50% Image / 50% Content, No "Inquire module" buttons)
  const modularSolutions = [
    {
      title: 'SAP BRIM Recurring Membership Engine',
      tag: 'RECURRING REVENUE',
      category: 'BILLING',
      categoryLabel: 'Billing & Subscriptions',
      description: 'Automate complex recurring membership plans, usage credits, bundled therapy packages, and integrated payment gateway settlement.',
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
      highlights: ['Tiered Membership Plans', 'Automated Card Tokenization', 'Credit Proration & Upgrades'],
      icon: CreditCard
    },
    {
      title: 'Multi-Location Clinic Procurement',
      tag: 'CENTRALIZED GPO',
      category: 'CLINIC',
      categoryLabel: 'Clinic Operations',
      description: 'Centralized catalog purchasing with automated approval matrices, group purchasing contracts, and branch-level budget enforcement.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      highlights: ['Consolidated Vendor Contracts', 'Branch Budget Controls', 'Punchout Catalog Integration'],
      icon: Building
    },
    {
      title: 'Personalized Care Kit Fulfillment Hub',
      tag: 'D2C LOGISTICS',
      category: 'FULFILLMENT',
      categoryLabel: 'Fulfillment & Logistics',
      description: 'High-velocity warehouse pick, pack, and ship automation designed for personalized monthly vitamin boxes, test kits, and care regimens.',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      highlights: ['Personalized Regimen Kitting', 'Barcode Verification Flow', 'Carrier Rate Shopping'],
      icon: Package
    },
    {
      title: 'Clinic Floor Inventory & POS Integration',
      tag: 'POINT OF CARE',
      category: 'CLINIC',
      categoryLabel: 'Clinic Operations',
      description: 'Seamless integration linking clinic reception POS terminals and retail display shelves directly with SAP S/4HANA material inventory.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
      highlights: ['Real-Time Retail POS Sync', 'Automated Min-Max Reordering', 'Therapy Consumption Tracking'],
      icon: Boxes
    },
    {
      title: 'Provider Scheduling & Resource Optimization',
      tag: 'RESOURCE ALLOCATION',
      category: 'CLINIC',
      categoryLabel: 'Clinic Operations',
      description: 'Coordinate physical therapy suites, licensed practitioner shifts, and medical wellness equipment utilization across regional centers.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      highlights: ['Room & Asset Scheduling', 'Provider Availability Matrix', 'Capacity Utilization Analytics'],
      icon: Calendar
    },
    {
      title: 'HIPAA & PCI Privacy Compliance Vault',
      tag: 'SECURITY & TRUST',
      category: 'BILLING',
      categoryLabel: 'Billing & Subscriptions',
      description: 'Strict separation of protected health information (PHI) and payment card credentials with audit-ready role-based authorization.',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
      highlights: ['End-to-End PHI Encryption', 'Tokenized Payment Gateways', 'SOC 2 & HIPAA Ready'],
      icon: ShieldCheck
    }
  ];

  // Section 6: Before & After Transformation Matrix (Qualitative)
  const transformationImpacts = [
    {
      area: 'Subscription Membership Billing',
      before: 'Siloed subscription apps with manual credit card re-tries, high failed payments, and lost recurring revenue.',
      after: 'Integrated SAP BRIM subscription engine with automated smart dunning and instant billing reconciliation.',
      tag: 'RECURRING ACCELERATION'
    },
    {
      area: 'Multi-Clinic Supply Purchasing',
      before: 'Rogue purchasing across dozens of clinic locations with unverified pricing and frequent local stockouts.',
      after: 'Centralized catalog procurement with automated replenishment rules and bulk group purchasing pricing.',
      tag: 'PROCUREMENT DISCIPLINE'
    },
    {
      area: 'Care Kit Assembly & Dispatch',
      before: 'Slow manual kitting with frequent packaging errors and delayed home care monthly shipments.',
      after: 'Automated SAP EWM kitting lines with barcode verification and automated multi-carrier label generation.',
      tag: 'FULFILLMENT VELOCITY'
    },
    {
      area: 'Clinic Asset & Suite Scheduling',
      before: 'Spreadsheet room booking causing double-booked wellness suites and underutilized clinical staff.',
      after: 'Synchronized SAP resource planning maximizing room turnover and practitioner treatment capacities.',
      tag: 'FACILITY PRODUCTIVITY'
    }
  ];

  // Section 7: Qualitative Case Studies
  const caseStudies = [
    {
      title: 'National Concierge Wellness & Preventive Health Network',
      tag: 'ENTERPRISE SUBSCRIPTIONS',
      badge: 'PREVENTIVE CARE',
      challenge: 'Managing recurring membership billing, specialized lab addons, and clinic treatment credits across 40 urban locations.',
      solution: 'Deployed SAP S/4HANA Clean Core combined with SAP BRIM for automated recurring subscription management.',
      outcome: 'Eliminated billing reconciliation delays, reduced membership churn, and automated seamless cross-clinic member checkins.'
    },
    {
      title: 'Direct-to-Patient Specialized Therapy Brand',
      tag: 'D2C KITTING & FULFILLMENT',
      badge: 'DIGITAL HEALTH',
      challenge: 'Rapid growth overwhelmed manual warehouse kitting of personalized monthly vitamin and supplement care boxes.',
      solution: 'Implemented SAP Extended Warehouse Management (EWM) with automated pick-to-light kitting stations.',
      outcome: 'Cut fulfillment cycle times drastically, eliminated shipping errors, and scaled direct-to-patient order capacity.'
    },
    {
      title: 'Regional Physical Therapy & Rehabilitation Provider',
      tag: 'MULTI-CLINIC PROCUREMENT',
      badge: 'REHABILITATION CLINICS',
      challenge: 'Fragmented local supply purchasing across 25 therapy clinics resulted in uncoordinated spending and stockouts.',
      solution: 'Centralized catalog procurement with automated replenishment from a regional central distribution depot.',
      outcome: 'Standardized clinic treatment supplies, achieved significant bulk volume savings, and eliminated localized supply shortages.'
    }
  ];

  // Section 8: FAQs
  const faqs = [
    {
      q: 'How does SAP BRIM manage recurring wellness memberships and usage billing?',
      a: 'SAP Billing and Revenue Innovation Management (BRIM) handles high-volume subscription contracts, recurring monthly fees, usage-based service credits (e.g., therapy sessions), bundled retail products, and automated credit card tokenization with integrated payment gateways.'
    },
    {
      q: 'Can clinic staff manage walk-in sales and appointment check-ins without complex ERP screens?',
      a: 'Yes. Knooviq integrates intuitive mobile Fiori and POS frontends. Clinic receptionists and practitioners use streamlined touchscreens for patient check-in, retail purchase checkout, and inventory consumption, while SAP handles all accounting and replenishment in the background.'
    },
    {
      q: 'How does the system ensure HIPAA and PCI compliance for digital health services?',
      a: 'We implement strict data architecture segregation. Patient health data (PHI) is decoupled from payment card data (PCI). All transactions are encrypted in transit and at rest, maintaining comprehensive audit logs that meet HIPAA, SOC 2, and GDPR standards.'
    },
    {
      q: 'What is the implementation timeline for a wellness and care provider network?',
      a: 'Using Knooviq’s pre-built multi-clinic and subscription accelerators, core procurement, warehouse kitting, and recurring billing modules typically deploy in 14 to 20 weeks.'
    }
  ];

  const filteredSolutions = activeSolutionCategory === 'ALL'
    ? modularSolutions
    : modularSolutions.filter(s => s.category === activeSolutionCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0070C0] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full h-[540px] sm:h-[560px] lg:h-[580px] flex items-center pt-24 sm:pt-28 lg:pt-28 pb-8 overflow-hidden bg-slate-900">
        
        {/* Full-Bleed Background Image with Seamless Cinematic Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=2000&q=80" 
            alt="Modern Wellness and Care Center" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 sm:via-slate-950/60 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          <div className="max-w-3xl space-y-4">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-2.5"
            >
              {/* Practice Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-300 shadow-xl">
                <Heart className="w-3 h-3 text-cyan-300" />
                <span>KNOOVIQ INDUSTRY PRACTICE</span>
              </div>
              
              {/* Prominent High-Impact Heading with Crisp Drop-Shadow */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Wellness & <span className="text-[#38BDF8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">Care</span>
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Unifying Multi-Clinic Procurement, Membership Recurring Billing & Patient Care Kit Fulfillment.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3 max-w-2xl"
            >
              <p className="text-sm sm:text-base lg:text-[17px] text-slate-100 font-normal leading-relaxed drop-shadow-sm">
                Empower wellness brands, specialized clinics, and home health providers with integrated <strong className="text-white font-semibold">SAP S/4HANA Clean Core</strong>, <strong className="text-cyan-300 font-semibold">recurring subscription billing</strong>, direct-to-patient wellness kit fulfillment, and <strong className="text-white font-semibold">multi-location clinic supply orchestration</strong>.
              </p>
              
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Subscription & Recurring Billing</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Multi-Clinic Replenishment</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>HIPAA & D2C Fulfillment</span>
                </span>
              </div>
            </motion.div>

            {/* Enterprise Architectural Trust Ribbon */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 sm:mt-8 pt-4 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
            >
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Architecture</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">SAP S/4HANA Clean Core</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Billing Engine</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">SAP BRIM Subscriptions</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Fulfillment</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">Personalized D2C Kitting</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-sky-400/40 hover:bg-white/[0.12] transition-all">
                <span className="block text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider mb-1">Procurement</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-snug">Central Multi-Clinic GPO</span>
              </div>
            </motion.div>

          </div>

        </div>

      </section>

      {/* SECTION 2: EXECUTIVE PERSPECTIVE */}
      <section className="py-12 sm:py-14 lg:py-16 bg-gradient-to-b from-white via-[#F8FBFE] to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Activity className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>EXECUTIVE PERSPECTIVE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Scaling Personalized Wellness Delivery Across Physical Clinics & Digital Channels
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Modern consumers expect frictionless wellness care: recurring monthly regimens delivered to their doors, seamless cross-clinic booking, and transparent digital accounts. Knooviq coordinates subscription billing, multi-site procurement, and direct fulfillment on SAP S/4HANA.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'Automated SAP BRIM recurring membership billing',
                  'Consolidated catalog purchasing across regional clinics',
                  'Direct-to-patient personalized care kit warehouse kitting',
                  'Strict HIPAA and PCI payment tokenization governance'
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-800 bg-white p-3 rounded-lg border border-slate-200 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#0070C0] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-300 shadow-md bg-slate-900">
                <img 
                  src={journeySteps[activeJourneyStep].image} 
                  alt={journeySteps[activeJourneyStep].title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-5">
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold mb-1">
                    {journeySteps[activeJourneyStep].tag}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {journeySteps[activeJourneyStep].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {journeySteps[activeJourneyStep].description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {journeySteps.map((step, idx) => {
                  const IconComp = step.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveJourneyStep(idx)}
                      className={`p-2.5 rounded-xl text-left border transition-all ${
                        activeJourneyStep === idx
                          ? 'border-[#0070C0] bg-sky-50/80 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <IconComp className={`w-4 h-4 mb-1 ${activeJourneyStep === idx ? 'text-[#0070C0]' : 'text-slate-500'}`} />
                      <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">{step.label}</div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: INDUSTRY CHALLENGES */}
      <section className="py-12 sm:py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-mono font-bold uppercase tracking-wider text-red-700">
              <AlertCircle className="w-3.5 h-3.5 text-red-600" />
              <span>WELLNESS SECTOR BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Operational Challenges in Modern Wellness Organizations
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Fragmented clinic purchasing and disconnected subscription platforms trigger revenue leakage and customer friction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {wellnessChallenges.map((challenge, idx) => {
              const IconComp = challenge.icon;
              return (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-[#0070C0] transition-colors flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono uppercase text-slate-500 font-bold block">
                      {challenge.tag}
                    </span>
                    <h3 className="text-base font-bold text-slate-950 leading-snug">
                      {challenge.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {challenge.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {challenge.footer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: SAP CLEAN CORE ARCHITECTURE */}
      <section className="py-12 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <Database className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>TECHNICAL BLUEPRINT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              SAP S/4HANA Clean Core for Wellness & Care
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Unifying omnichannel consumer subscription billing with back-office multi-clinic procurement on a standard SAP foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4 space-y-2">
              {[
                { id: 'clean-core', title: 'Standard Clean Core Foundation', sub: 'Unified multi-entity accounting' },
                { id: 'brim', title: 'SAP BRIM Recurring Revenue', sub: 'Subscription memberships & usage fees' },
                { id: 'multi-clinic', title: 'Multi-Location Procurement', sub: 'Centralized catalog contracts' },
                { id: 'fulfillment', title: 'D2C Care Kit Warehouse EWM', sub: 'Personalized kitting automation' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveArchTab(tab.id as any)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    activeArchTab === tab.id
                      ? 'border-[#0070C0] bg-sky-50/70 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="text-sm sm:text-base font-bold text-slate-900">{tab.title}</div>
                  <div className="text-xs sm:text-sm text-slate-600 mt-1">{tab.sub}</div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 bg-slate-900 rounded-2xl p-6 text-white border border-slate-800">
              {activeArchTab === 'clean-core' && (
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-300">Standard Clean Core Foundation</h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    Standard SAP S/4HANA Finance, Materials Management, and Sales & Distribution maintained without core code modifications, enabling seamless upgrades.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Multi-Entity Financial Ledger</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Automated intercompany billing across regional clinic legal entities and central management.</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Consolidated Spend Analytics</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Real-time profitability insights across clinics, therapy lines, and online retail sales.</div>
                    </div>
                  </div>
                </div>
              )}

              {activeArchTab === 'brim' && (
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-300">SAP BRIM Recurring Revenue Engine</h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    Automate high-volume consumer subscription billing, usage charging for clinical procedures, recurring plan upgrades, and automated payment gateway settlement.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Automated Smart Dunning</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Intelligent retry logic and member communication for expired or failed payment cards.</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Bundled Service & Retail Packs</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Flexible bundling of monthly clinical treatments alongside physical wellness products.</div>
                    </div>
                  </div>
                </div>
              )}

              {activeArchTab === 'multi-clinic' && (
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-300">Multi-Location Procurement Architecture</h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    Deploy centralized group purchasing organization (GPO) workflows. Local clinic managers request supplies through punchout catalogs with automated corporate approvals.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Automated Min-Max Staging</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Point-of-sale consumption triggers automated replenishment from regional distribution hubs.</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Volume Pricing Tier Capture</div>
                      <div className="text-xs text-slate-400">Aggregated corporate spend secures maximum discount tiers with pharmaceutical and medical vendors.</div>
                    </div>
                  </div>
                </div>
              )}

              {activeArchTab === 'fulfillment' && (
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-300">D2C Care Kit Warehouse EWM</h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    High-density warehouse automation on SAP Extended Warehouse Management (EWM) executing personalized monthly kit pick-and-pack with automated carrier rate shopping.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Personalized Kitting Flow</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Pick-to-light guidance assembling custom combinations of vitamins and care kits.</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      <div className="text-sm font-bold text-white mb-1">Direct Courier Integration</div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">Automated carrier label printing and real-time tracking number delivery to patient apps.</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MODULAR SOLUTIONS (50% Image / 50% Content, No Inquire Button) */}
      <section className="py-12 sm:py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
                <Boxes className="w-3.5 h-3.5 text-[#0070C0]" />
                <span>ENTERPRISE CAPABILITIES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                Modular Wellness & Care Solutions
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Pre-configured SAP modules engineered for wellness networks, concierge clinics, and direct-to-patient digital health brands.
              </p>
            </div>

            <div className="flex items-center gap-2">
              {(['ALL', 'CLINIC', 'BILLING', 'FULFILLMENT'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveSolutionCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold uppercase transition-all ${
                    activeSolutionCategory === cat
                      ? 'bg-[#0070C0] text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions.map((sol, idx) => {
              const IconComp = sol.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-[#0070C0] hover:shadow-md transition-all flex flex-col h-[400px]"
                >
                  {/* Exactly 50% Image Height */}
                  <div className="relative h-1/2 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={sol.image} 
                      alt={sol.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-cyan-300 uppercase">
                      {sol.tag}
                    </div>
                  </div>

                  {/* Exactly 50% Content Height */}
                  <div className="h-1/2 p-5 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <IconComp className="w-4 h-4 text-[#0070C0]" />
                        <h3 className="text-base font-bold text-slate-950 truncate">{sol.title}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 line-clamp-2 leading-relaxed">
                        {sol.description}
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      {sol.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 6: BEFORE & AFTER TRANSFORMATION MATRIX */}
      <section className="py-12 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>MEASURABLE BUSINESS VALUE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Operational Transformation Matrix
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Comparing traditional fragmented wellness operations with Knooviq SAP Clean Core orchestration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {transformationImpacts.map((impact, idx) => (
              <div key={idx} className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-950">{impact.area}</h3>
                  <span className="text-xs font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-sky-100 text-[#0070C0]">
                    {impact.tag}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-white border border-red-100 space-y-1.5">
                    <span className="text-xs font-mono uppercase text-red-600 font-bold block">Traditional Wellness Operations</span>
                    <p className="text-slate-700 leading-relaxed">{impact.before}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-emerald-100 space-y-1.5">
                    <span className="text-xs font-mono uppercase text-emerald-700 font-bold block">Knooviq Clean Core Delivery</span>
                    <p className="text-slate-900 font-medium leading-relaxed">{impact.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CASE STUDIES */}
      <section className="py-12 sm:py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0070C0]">
              <FileCheck2 className="w-3.5 h-3.5 text-[#0070C0]" />
              <span>PROVEN CLIENT TRANSFORMATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Wellness & Healthcare Provider Case Studies
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              How modern wellness networks scale membership revenue and multi-clinic operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#0070C0] transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                      {cs.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-semibold">{cs.tag}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 leading-snug">{cs.title}</h3>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                      <span className="text-xs font-mono uppercase font-bold text-slate-600 block">The Challenge</span>
                      <p className="text-slate-700 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-sky-50/60 border border-sky-100 space-y-1">
                      <span className="text-xs font-mono uppercase font-bold text-[#0070C0] block">The Solution</span>
                      <p className="text-slate-800 font-medium leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-xs font-mono uppercase font-bold text-emerald-700 block mb-1">Delivered Outcome</span>
                  <p className="text-sm font-semibold text-slate-950 leading-relaxed">{cs.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQS (Compact, Sleek, Numberless) */}
      <IndustryFaqSection 
        faqs={faqs}
        onOpenContact={onOpenContact}
      />

      {/* SECTION 9: FINAL CALL TO ACTION (Consumer & Commerce Style) */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#003B73] via-[#005B9E] to-[#0070C0] overflow-hidden text-white">
        
        {/* Ambient 3D Geometric Mesh Lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
            <Heart className="w-3.5 h-3.5 text-cyan-300" />
            <span>CONNECT YOUR WELLNESS ENTERPRISE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Scale Your Wellness Network & Subscription Revenue with SAP?
          </h2>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal">
            Consult with Knooviq’s digital healthcare and subscription commerce specialists to blueprint your multi-clinic operational roadmap.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenContact ? onOpenContact('Wellness & Care') : null}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-[#003B73] hover:bg-slate-100 font-bold text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Talk to Our Wellness Experts</span>
              <ArrowRight className="w-4 h-4 text-[#003B73]" />
            </button>
            <Link
              to="/solutions/sap-s4hana"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <span>Explore SAP Solutions</span>
              <ChevronRight className="w-4 h-4 text-white/70" />
            </Link>
          </div>

          <div className="pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto text-xs text-slate-200">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>HIPAA, PCI-DSS & SOC 2 Ready</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-cyan-300 shrink-0" />
              <span>Rapid 14-20 Week Implementation</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Globe2 className="w-4 h-4 text-sky-300 shrink-0" />
              <span>Global 24/7 SLA Operational Support</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
export default WellnessCareIndustryPage;
