import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  FileCheck2, 
  Award, 
  Clock, 
  Activity, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  Download, 
  TrendingUp, 
  AlertCircle,
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';

export const VendorProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'documents' | 'contracts' | 'performance' | 'compliance' | 'activities'>('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Building2 },
    { id: 'documents', label: 'Documents (5)', icon: FileCheck2 },
    { id: 'contracts', label: 'Contracts (3)', icon: FileText },
    { id: 'performance', label: 'Performance (94%)', icon: TrendingUp },
    { id: 'compliance', label: 'Compliance (100%)', icon: ShieldCheck },
    { id: 'activities', label: 'Activity Log', icon: Activity },
  ] as const;

  return (
    <section id="vendor-profile" className="py-20 md:py-28 bg-white dark:bg-[#070E1E] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-xs font-bold uppercase tracking-wider text-[#0052CC] dark:text-[#00A3E0]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Supplier 360°</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Comprehensive Vendor Profile Dossier
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Inspect an active enterprise vendor record with real-time audit logs, verified statutory documentation, and live SLA ratings.
          </p>
        </div>

        {/* Outer Dossier Container */}
        <div className="rounded-2xl bg-white dark:bg-[#0A1931] border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden">
          
          {/* Profile Header Banner */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-50 via-blue-50/40 to-slate-50 dark:from-slate-900 dark:via-[#0E1F3D] dark:to-slate-900 border-b border-slate-200 dark:border-white/10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              {/* Left Profile Identity */}
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#0052CC] to-[#00A3E0] text-white font-black text-xl sm:text-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 shrink-0">
                  ABC
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                      ABC Technologies Pvt. Ltd.
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Active Vendor
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      VEN-10248
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    Tier-1 Semiconductor, Sensors & Precision Hardware Manufacturer
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#00A3E0]" />
                      Bengaluru, Karnataka, India
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#00A3E0]" />
                      Onboarded: 14-Jan-2023
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      SAP BP ID: 410098221
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Score Badges */}
              <div className="flex items-center gap-4 border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-200 dark:border-white/10">
                <div className="text-center px-4 py-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-white/5 shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Scorecard</span>
                  <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400">94%</div>
                  <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">Grade A+</span>
                </div>

                <div className="text-center px-4 py-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-white/5 shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Risk Profile</span>
                  <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">Low</div>
                  <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">Clean Sanctions</span>
                </div>

                <div className="text-center px-4 py-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-white/5 shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Annual Volume</span>
                  <div className="text-2xl font-black text-slate-900 dark:text-white">$2.8M</div>
                  <span className="text-[10px] font-semibold text-blue-600 dark:text-[#00A3E0]">18 POs YTD</span>
                </div>
              </div>

            </div>
          </div>

          {/* 6 Tabs Navigator */}
          <div className="px-6 border-b border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-900/40 overflow-x-auto scrollbar-none flex gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3.5 text-xs font-bold whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                    isActive
                      ? 'border-[#0052CC] text-[#0052CC] dark:text-[#00A3E0] dark:border-[#00A3E0]'
                      : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Canvas */}
          <div className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              
              {/* Tab 1: Overview */}
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-1">
                      <span className="text-xs text-slate-500 dark:text-slate-400">Legal Entity Name</span>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">ABC Technologies Private Limited</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs text-slate-500 dark:text-slate-400">GSTIN</span>
                      <p className="text-sm font-mono font-semibold text-slate-900 dark:text-white">29AAACA2089K1ZP (Karnataka)</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs text-slate-500 dark:text-slate-400">Permanent Account Number (PAN)</span>
                      <p className="text-sm font-mono font-semibold text-slate-900 dark:text-white">AAACA2089K</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs text-slate-500 dark:text-slate-400">Corporate Identity Number (CIN)</span>
                      <p className="text-sm font-mono font-semibold text-slate-900 dark:text-white">U72200KA2015PTC082910</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs text-slate-500 dark:text-slate-400">Primary Contact Person</span>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Rajesh Verma (Head of Sales)</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs text-slate-500 dark:text-slate-400">Email & Phone</span>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">r.verma@abctech.com • +91 98765 43210</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs text-slate-500 dark:text-slate-400">Payment Terms</span>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Net 45 Days (Electronic NEFT/RTGS)</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs text-slate-500 dark:text-slate-400">MSME / Enterprise Category</span>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Medium Enterprise (UDYAM-KR-03-00291)</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs text-slate-500 dark:text-slate-400">Registered Office Address</span>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Plot 42, Electronic City Phase 1, Hosur Road, Bengaluru 560100</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/5 flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-300">
                      <strong>SAP Integration Linkage:</strong> Synchronized with SAP S/4HANA MM Vendor Master XK03.
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">Status: Synchronized</span>
                  </div>
                </motion.div>
              )}

              {/* Tab 2: Documents */}
              {activeTab === 'documents' && (
                <motion.div
                  key="documents"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <div className="divide-y divide-slate-100 dark:divide-white/5 border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden">
                    {[
                      { name: 'Certificate of Incorporation & MOA', type: 'PDF • 2.4 MB', status: 'Verified', date: 'Valid Lifetime', match: '100% OCR Validated' },
                      { name: 'GST Registration Certificate (REG-06)', type: 'PDF • 1.1 MB', status: 'Verified', date: 'Valid Active', match: 'GSTN Gateway Matched' },
                      { name: 'MSME / Udyam Registration Certificate', type: 'PDF • 840 KB', status: 'Verified', date: 'Renewal 2028', match: 'Category: Medium' },
                      { name: 'ISO 9001:2015 Quality Management System', type: 'PDF • 3.1 MB', status: 'Verified', date: 'Expires 15-Nov-2027', match: 'TUV Nord Certified' },
                      { name: 'Bank Account Letter & Cancelled Cheque', type: 'PDF • 1.5 MB', status: 'Verified', date: 'Verified 14-Jan-2023', match: 'Penny Drop Confirmed' },
                    ].map((doc, i) => (
                      <div key={i} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-[#0A1931] hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-[#0052CC] dark:text-[#00A3E0] flex items-center justify-center shrink-0">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">{doc.name}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{doc.type} • {doc.match}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-500/20">
                              {doc.status}
                            </span>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{doc.date}</p>
                          </div>
                          <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Tab 3: Contracts */}
              {activeTab === 'contracts' && (
                <motion.div
                  key="contracts"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-5"
                >
                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-blue-600 dark:text-[#00A3E0] uppercase tracking-wider">Master Agreement</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">Active</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">Master Services Agreement (MSA)</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Standard Tier-1 Manufacturing SLA terms, penalty clauses, and dispute jurisdiction.</p>
                    <div className="pt-2 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                      <div>Term: <strong>01-Jan-2024 to 31-Dec-2026</strong></div>
                      <div>Capped Liability: <strong>$5,000,000</strong></div>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-blue-600 dark:text-[#00A3E0] uppercase tracking-wider">Confidentiality</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">Active</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">Bilateral NDA Agreement</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Mutual intellectual property and engineering schematics protection covenant.</p>
                    <div className="pt-2 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                      <div>Term: <strong>Perpetual IP Protection</strong></div>
                      <div>Signatory: <strong>Legal Counsel Approved</strong></div>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Pricing Schedule</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">Renewal in 60d</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">Annual Rate Card Schedule B</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Fixed volume tier discounts for micro-controllers and fabricated boards.</p>
                    <div className="pt-2 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                      <div>Term: <strong>Expires 31-Jul-2026</strong></div>
                      <div>Action: <strong>Trigger Renegotiation</strong></div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 4: Performance */}
              {activeTab === 'performance' && (
                <motion.div
                  key="performance"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-white/10 text-center">
                      <span className="text-xs text-slate-500 dark:text-slate-400">On-Time In-Full (OTIF)</span>
                      <div className="text-3xl font-black text-[#0052CC] dark:text-[#00A3E0] mt-1">96.2%</div>
                      <span className="text-[11px] text-emerald-600 font-semibold">+1.2% above benchmark</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-white/10 text-center">
                      <span className="text-xs text-slate-500 dark:text-slate-400">Quality Acceptance Rate</span>
                      <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 mt-1">98.5%</div>
                      <span className="text-[11px] text-emerald-600 font-semibold">Defect rate &lt; 0.08%</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-white/10 text-center">
                      <span className="text-xs text-slate-500 dark:text-slate-400">SLA Adherence</span>
                      <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 mt-1">93.0%</div>
                      <span className="text-[11px] text-slate-500 font-semibold">Average response 2.4 hrs</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/5 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Quarterly Score Trend (Last 4 Quarters)
                    </h4>
                    <div className="grid grid-cols-4 gap-3 text-center text-xs pt-1">
                      <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <span className="text-slate-400">Q2 2025</span>
                        <div className="font-bold text-slate-800 dark:text-slate-200 text-sm">91%</div>
                      </div>
                      <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <span className="text-slate-400">Q3 2025</span>
                        <div className="font-bold text-slate-800 dark:text-slate-200 text-sm">92%</div>
                      </div>
                      <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <span className="text-slate-400">Q4 2025</span>
                        <div className="font-bold text-slate-800 dark:text-slate-200 text-sm">93.5%</div>
                      </div>
                      <div className="p-2 rounded bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-[#0052CC] dark:text-[#00A3E0]">
                        <span className="font-bold">Q1 2026</span>
                        <div className="font-black text-sm">94.0%</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 5: Compliance */}
              {activeTab === 'compliance' && (
                <motion.div
                  key="compliance"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-950/20 space-y-2">
                      <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>GST Filing Track Record (GSTR-1 & 3B)</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        Last 24 continuous tax periods filed strictly within statutory due dates. Input Tax Credit (ITC) pass-through risk rating is 0.0%.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-950/20 space-y-2">
                      <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Global Sanctions & Anti-Bribery Screening</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        Zero matches against OFAC, EU Sanctions List, Interpol Red Notices, and RBI defaulter registries. Re-screened 24 hours ago.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">Statutory Audit Verification:</p>
                    <p>Statutory Auditor: Price Waterhouse & Co. LLP • FY2025 Financials: Unqualified Clean Audit Opinion.</p>
                  </div>
                </motion.div>
              )}

              {/* Tab 6: Activities */}
              {activeTab === 'activities' && (
                <motion.div
                  key="activities"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-3"
                >
                  {[
                    { event: 'Purchase Order #88392 Dispatched', time: 'Today at 10:14 AM', user: 'SAP Auto-Integration', badge: 'PO Dispatched' },
                    { event: 'ISO 9001:2015 Certificate Auto-Validated via OCR', time: 'Yesterday at 04:30 PM', user: 'AI Compliance Guard', badge: 'Verified' },
                    { event: 'Bank Account Branch Change Confirmed (Penny Drop)', time: '02-Jun-2026', user: 'Finance Lead (K. Sharma)', badge: 'Approved' },
                    { event: 'Primary Sales Contact Info Updated to Rajesh Verma', time: '28-May-2026', user: 'Vendor Self-Service', badge: 'Updated' },
                    { event: 'Annual Supplier Scorecard Q1 2026 Finalized at 94%', time: '15-May-2026', user: 'Procurement Director', badge: 'Scorecard' },
                  ].map((act, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-white/5 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-[#00A3E0]" />
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">{act.event}</p>
                          <p className="text-[11px] text-slate-400">Actor: {act.user}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-[10px] text-slate-400">{act.time}</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
