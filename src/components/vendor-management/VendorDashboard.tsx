import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  TrendingUp, 
  ShieldCheck, 
  Building, 
  Search, 
  Filter, 
  ArrowUpRight, 
  Sparkles,
  BarChart2,
  ChevronDown,
  ExternalLink,
  Award,
  AlertCircle
} from 'lucide-react';

export const VendorDashboard: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'active' | 'pending' | 'risk'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const vendors = [
    {
      id: 'VEN-10248',
      name: 'ABC Technologies Pvt. Ltd.',
      category: 'Semiconductor & Hardware',
      status: 'Active',
      score: 94,
      compliance: 'Verified',
      risk: 'Low',
      lastPo: 'PO-88492 ($142,500)',
      deliveryRate: '98.2%'
    },
    {
      id: 'VEN-10249',
      name: 'Global Logistics Solutions Inc.',
      category: 'Freight & Transportation',
      status: 'Pending',
      score: 87,
      compliance: 'In Review',
      risk: 'Medium',
      lastPo: 'PO-88480 ($54,200)',
      deliveryRate: '91.5%'
    },
    {
      id: 'VEN-10250',
      name: 'Apex Steel & Fabrication',
      category: 'Raw Materials & Metals',
      status: 'Active',
      score: 96,
      compliance: 'Verified',
      risk: 'Low',
      lastPo: 'PO-88471 ($289,000)',
      deliveryRate: '99.1%'
    },
    {
      id: 'VEN-10251',
      name: 'Precision Components Corp',
      category: 'Machining & Tooling',
      status: 'Active',
      score: 92,
      compliance: 'Verified',
      risk: 'Low',
      lastPo: 'PO-88465 ($78,300)',
      deliveryRate: '95.4%'
    },
    {
      id: 'VEN-10252',
      name: 'Nexus Chemical Processors',
      category: 'Industrial Solvents',
      status: 'At Risk',
      score: 68,
      compliance: 'Doc Expired',
      risk: 'High',
      lastPo: 'PO-88432 ($31,800)',
      deliveryRate: '78.0%'
    },
    {
      id: 'VEN-10253',
      name: 'Delta Packaging Ltd.',
      category: 'Packaging Materials',
      status: 'Active',
      score: 90,
      compliance: 'Verified',
      risk: 'Low',
      lastPo: 'PO-88421 ($18,600)',
      deliveryRate: '94.8%'
    }
  ];

  const topVendors = [
    { name: 'Apex Steel & Fabrication', score: 96, tier: 'Platinum', spend: '$1.4M', otif: '99.1%' },
    { name: 'ABC Technologies Pvt. Ltd.', score: 94, tier: 'Platinum', spend: '$2.8M', otif: '98.2%' },
    { name: 'Precision Components Corp', score: 92, tier: 'Gold', spend: '$820K', otif: '95.4%' },
    { name: 'Delta Packaging Ltd.', score: 90, tier: 'Gold', spend: '$450K', otif: '94.8%' },
  ];

  const filteredVendors = vendors.filter(v => {
    if (filterCategory === 'active' && v.status !== 'Active') return false;
    if (filterCategory === 'pending' && v.status !== 'Pending') return false;
    if (filterCategory === 'risk' && v.status !== 'At Risk') return false;
    if (searchQuery && !v.name.toLowerCase().includes(searchQuery.toLowerCase()) && !v.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <section id="vendor-dashboard" className="py-20 md:py-28 bg-slate-50 dark:bg-[#050B17] relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-xs font-bold uppercase tracking-wider text-[#0052CC] dark:text-[#00A3E0]">
            <BarChart2 className="w-3.5 h-3.5" />
            <span>Procurement Command Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Vendor Operations & Risk Dashboard
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Real-time multi-dimensional view into your enterprise vendor ecosystem with automated risk alerts and performance scorecards.
          </p>
        </div>

        {/* 4 Core Required Top KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          
          {/* Total Vendors */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-white dark:bg-[#0A1931] border border-slate-200 dark:border-white/10 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total Vendors</span>
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-[#0052CC] dark:text-[#00A3E0] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-black text-slate-900 dark:text-white">248</span>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full">
                +14 this Qtr
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Spanning 18 procurement categories
            </p>
          </motion.div>

          {/* Active Vendors */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-white dark:bg-[#0A1931] border border-slate-200 dark:border-white/10 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Active Vendors</span>
              <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400">196</span>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                79.0% Active
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Valid MSAs and continuous transactional sync
            </p>
          </motion.div>

          {/* Pending Approval */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-white dark:bg-[#0A1931] border border-slate-200 dark:border-white/10 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Pending Approval</span>
              <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-black text-amber-600 dark:text-amber-400">24</span>
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded-full">
                Avg 1.8 Days
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              18 awaiting Finance, 6 awaiting Legal
            </p>
          </motion.div>

          {/* At Risk Vendors */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-white dark:bg-[#0A1931] border border-slate-200 dark:border-white/10 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">At Risk Vendors</span>
              <div className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-950/80 text-red-600 dark:text-red-400 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-black text-red-600 dark:text-red-400">8</span>
              <span className="text-xs font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 px-2 py-0.5 rounded-full">
                Action Required
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Expired GST certs or low OTIF score (&lt;80%)
            </p>
          </motion.div>

        </div>

        {/* Charts & Analytics Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          
          {/* Performance Trend Chart (7 cols) */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-white dark:bg-[#0A1931] border border-slate-200 dark:border-white/10 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#0052CC] dark:text-[#00A3E0]" />
                  Enterprise Vendor Performance & OTIF Trend
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Monthly composite delivery adherence vs target (95%)</p>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-[#0052CC] dark:text-[#00A3E0]">
                FY2026 YTD
              </span>
            </div>

            {/* Custom high-fidelity vector chart visualization */}
            <div className="pt-4 space-y-3">
              {[
                { month: 'May 2026', otif: 96.4, quality: 98.1, target: 95 },
                { month: 'Apr 2026', otif: 95.8, quality: 97.4, target: 95 },
                { month: 'Mar 2026', otif: 94.2, quality: 96.9, target: 95 },
                { month: 'Feb 2026', otif: 93.1, quality: 95.8, target: 95 },
                { month: 'Jan 2026', otif: 91.5, quality: 94.2, target: 95 },
              ].map((item, i) => (
                <div key={item.month} className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-600 dark:text-slate-400">{item.month}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 dark:text-slate-400">Quality: <strong className="text-slate-700 dark:text-slate-300">{item.quality}%</strong></span>
                      <span className="text-[#0052CC] dark:text-[#00A3E0] font-bold">OTIF: {item.otif}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden flex">
                    <div 
                      className="bg-gradient-to-r from-[#0052CC] to-[#00A3E0] h-full rounded-full transition-all duration-500" 
                      style={{ width: `${item.otif}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-white/5">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A3E0]" />
                Actual Delivery OTIF
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                Target Threshold (95%)
              </span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">+4.9% vs Baseline</span>
            </div>
          </div>

          {/* Compliance & Status Distribution (5 cols) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-[#0A1931] border border-slate-200 dark:border-white/10 shadow-sm space-y-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Compliance Breakdown
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">248 Total Vendors audit & verification health</p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">100% Fully Verified</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">196 vendors</span>
                  <span className="text-[10px] text-slate-400 ml-1.5">(79%)</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Pending Periodic Renewal</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">44 vendors</span>
                  <span className="text-[10px] text-slate-400 ml-1.5">(18%)</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Non-Compliant / Flagged</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-red-600 dark:text-red-400">8 vendors</span>
                  <span className="text-[10px] text-slate-400 ml-1.5">(3%)</span>
                </div>
              </div>
            </div>

            {/* Top performing vendor pill banner */}
            <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#0052CC] dark:text-[#00A3E0]" />
                <span className="text-xs font-bold text-[#0052CC] dark:text-[#00A3E0]">Top Tier-1 Leader:</span>
              </div>
              <span className="text-xs font-extrabold text-slate-900 dark:text-white">
                Apex Steel (96/100)
              </span>
            </div>
          </div>

        </div>

        {/* Recent Vendor Activity Table */}
        <div className="rounded-2xl bg-white dark:bg-[#0A1931] border border-slate-200 dark:border-white/10 shadow-sm overflow-hidden">
          
          {/* Table Controls Header */}
          <div className="p-5 border-b border-slate-200 dark:border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Building className="w-4 h-4 text-[#0052CC] dark:text-[#00A3E0]" />
                Recent Vendor Registry & Transaction Activity
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Live transaction stream with SAP S/4HANA transactional status</p>
            </div>

            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text"
                  placeholder="Search vendor or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 rounded-lg text-xs bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-44 sm:w-56"
                />
              </div>

              {/* Status Filter */}
              <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg text-xs font-semibold">
                <button 
                  onClick={() => setFilterCategory('all')}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${filterCategory === 'all' ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}
                >
                  All
                </button>
                <button 
                  onClick={() => setFilterCategory('active')}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${filterCategory === 'active' ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}
                >
                  Active
                </button>
                <button 
                  onClick={() => setFilterCategory('risk')}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${filterCategory === 'risk' ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}
                >
                  Risk
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider border-b border-slate-200 dark:border-white/5">
                <tr>
                  <th className="px-5 py-3">Vendor / ID</th>
                  <th className="px-5 py-3">Category</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3">Performance</th>
                  <th className="px-5 py-3">Compliance</th>
                  <th className="px-5 py-3">Risk Level</th>
                  <th className="px-5 py-3">Recent PO / Sync</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {filteredVendors.map((vendor) => (
                  <tr 
                    key={vendor.id}
                    className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="px-5 py-3.5">
                      <div className="font-bold text-slate-900 dark:text-white">{vendor.name}</div>
                      <div className="text-[11px] font-mono text-slate-400">{vendor.id}</div>
                    </td>
                    <td className="px-5 py-3.5 text-slate-600 dark:text-slate-300">
                      {vendor.category}
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full font-bold text-[10px] ${
                        vendor.status === 'Active'
                          ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                          : vendor.status === 'Pending'
                          ? 'bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                          : 'bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 border border-red-500/20'
                      }`}>
                        {vendor.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 dark:text-white">{vendor.score}%</span>
                        <div className="w-16 bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              vendor.score >= 90 ? 'bg-emerald-500' : vendor.score >= 80 ? 'bg-amber-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${vendor.score}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center gap-1 font-semibold ${
                        vendor.compliance === 'Verified'
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : vendor.compliance === 'In Review'
                          ? 'text-amber-600 dark:text-amber-400'
                          : 'text-red-600 dark:text-red-400'
                      }`}>
                        {vendor.compliance === 'Verified' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                        {vendor.compliance}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`font-semibold ${
                        vendor.risk === 'Low'
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : vendor.risk === 'Medium'
                          ? 'text-amber-600 dark:text-amber-400'
                          : 'text-red-600 dark:text-red-400'
                      }`}>
                        {vendor.risk} Risk
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-slate-600 dark:text-slate-300 font-mono text-[11px]">
                      {vendor.lastPo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Showing {filteredVendors.length} of 248 Total Vendors</span>
            <span className="text-[#0052CC] dark:text-[#00A3E0] font-semibold cursor-pointer hover:underline flex items-center gap-1">
              View Full Enterprise Roster <ExternalLink className="w-3 h-3" />
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
