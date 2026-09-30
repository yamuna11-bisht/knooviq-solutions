import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Server,
  ArrowRight,
  ChevronDown,
  Database,
  Cpu,
  ShieldCheck,
  HardDrive,
  GitBranch,
  RefreshCw,
  Activity,
  Layers,
  Lock,
  Zap,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Sparkles,
  ArrowUpRight,
  Key,
  FolderSync,
  Check,
  Terminal,
  ExternalLink,
  Shield,
  Workflow
} from 'lucide-react';
import { AdvisoryServiceNav, AdvisorySuiteFooterCrosslinks } from '../../components/advisory/AdvisoryServiceNav';

interface SapBasisPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const SapBasisPage: React.FC<SapBasisPageProps> = ({ onOpenContact }) => {
  useEffect(() => {
    document.title = 'SAP Basis Administration & Infrastructure Technical Operations | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Section 1: Sysadmin Cadence Checklist State
  const [activeCadence, setActiveCadence] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const basisChecklists = {
    daily: {
      cadence: 'Daily Technical Operations Routine',
      badge: 'Every 24 Hours',
      summary: 'Continuous 24-hour verification of kernel health, transaction runtime stability, and database write queues.',
      tasks: [
        { tcode: 'ST22', title: 'ABAP Runtime Short Dump Analysis', desc: 'Isolate program exceptions, syntax errors, and uncaught exceptions to resolve application crashes before users report them.' },
        { tcode: 'SM21', title: 'System Security & Kernel Event Log', desc: 'Audit SAP system logs for hardware I/O alerts, network disconnects, and unauthorized RFC logon attempts.' },
        { tcode: 'SM13', title: 'Update Record Inspection', desc: 'Audit asynchronous update records to detect and reprocess failed V1 and V2 database write transactions.' },
        { tcode: 'SM12', title: 'Lock Entry Governance', desc: 'Monitor active table lock arguments and safely terminate orphaned or stale locks preventing transactional commits.' },
        { tcode: 'DB02', title: 'Database & Filesystem Storage', desc: 'Verify database volume growth, transaction log archiving, and filesystem thresholds to prevent disk full halts.' }
      ]
    },
    weekly: {
      cadence: 'Weekly Maintenance & Hygiene Cadence',
      badge: 'Every 7 Days',
      summary: 'Systematic maintenance to maintain clean buffers, purge temporary spool data, and optimize background chains.',
      tasks: [
        { tcode: 'SP12 / SPAD', title: 'TemSe & Spool Consistency Audits', desc: 'Verify temporary sequential object consistency and purge obsolete spool requests to reclaim database space.' },
        { tcode: 'ST02', title: 'Buffer Pool Hit Ratio Verification', desc: 'Verify Program, CUA, Screen, and Table Buffers maintain hit ratios consistently exceeding ninety-eight percent.' },
        { tcode: 'SM37', title: 'Batch Job Schedule Optimization', desc: 'Identify delayed, cancelled, or resource-heavy background jobs to prevent batch window overruns.' },
        { tcode: 'HDBAdmin', title: 'SAP HANA Delta Merge Verification', desc: 'Inspect columnar delta merge statistics, memory consumption, and unmerged delta storage allocations.' },
        { tcode: 'OS / Kernel', title: 'Kernel Patch & Security Note Reviews', desc: 'Review SAP Security Patch Day advisories and plan non-disruptive kernel hotfix deployments.' }
      ]
    },
    monthly: {
      cadence: 'Monthly Governance & Strategic Planning',
      badge: 'Every 30 Days',
      summary: 'Strategic capacity planning, performance workload trends, and disaster recovery simulation drills.',
      tasks: [
        { tcode: 'ST03N', title: 'Comprehensive Workload Analysis', desc: 'Evaluate monthly transaction profiles, average response times, and identify emerging database bottlenecks.' },
        { tcode: 'SCCL / SCC9', title: 'Non-Production System Refreshes', desc: 'Execute automated client copies and system refreshes from production into sandbox and QA environments.' },
        { tcode: 'RZ10', title: 'Instance Profile Parameter Tuning', desc: 'Adjust memory allocation parameters and work process thread distribution to accommodate business growth.' },
        { tcode: 'HSR / DR', title: 'Disaster Recovery Simulation Drills', desc: 'Perform controlled failover simulations with HANA System Replication to validate recovery time objectives.' },
        { tcode: 'SPS', title: 'Support Package Stack Planning', desc: 'Evaluate SAP Support Package Stacks (SPS) and plan maintenance cycles with minimal operational downtime.' }
      ]
    }
  };

  // Section 2: Work Process Diagnostic Console State
  const [selectedMonitor, setSelectedMonitor] = useState<'sm50' | 'sm37' | 'sm21' | 'st02'>('sm50');
  const monitorProfiles = {
    sm50: {
      tcode: 'SM50 / SM66',
      title: 'Global Work Process Monitor',
      desc: 'Active inspection of Dialog (DIA), Update (UPD), Background (BGD), Spool (SPO), and Enqueue (ENQ) worker threads.',
      metrics: [
        { label: 'Active Work Processes', value: '74 / 74 Configured', status: 'Optimal' },
        { label: 'Dialog Response Average', value: '280 ms', status: 'Healthy' },
        { label: 'Enqueue Lock Queue', value: '0 Locks Delayed', status: 'Optimal' },
        { label: 'Update Task Queue', value: '0 Errors in V1/V2', status: 'Optimal' }
      ],
      processDistribution: [
        { type: 'Dialog (DIA)', count: 36, load: '18% Active', purpose: 'Handles interactive user requests and screen navigation' },
        { type: 'Background (BGD)', count: 18, load: '45% Active', purpose: 'Executes scheduled batch reports, MRP runs, and mass billing' },
        { type: 'Update (UPD/UPD2)', count: 12, load: '8% Active', purpose: 'Commits transactional database updates asynchronously' },
        { type: 'Spool (SPO)', count: 6, load: '4% Active', purpose: 'Processes print requests and document exports' },
        { type: 'Enqueue (ENQ)', count: 2, load: '2% Active', purpose: 'Manages logical database locks and concurrency control' }
      ]
    },
    sm37: {
      tcode: 'SM37',
      title: 'Background Job Processing & Scheduling',
      desc: 'Execution tracking of scheduled, active, and completed batch workloads across the entire application cluster.',
      metrics: [
        { label: 'Batch Jobs Completed (24h)', value: '1,420 Completed', status: 'Optimal' },
        { label: 'Average Schedule Delay', value: '< 2 Seconds', status: 'Optimal' },
        { label: 'Failed Job Rate', value: '0.04%', status: 'Within SLA' },
        { label: 'Long-Running Jobs (>2h)', value: '1 Supervised', status: 'Monitored' }
      ],
      processDistribution: [
        { type: 'MRP Planning Run', count: 1, load: 'Active (14m)', purpose: 'Global material requirements planning across 12 manufacturing plants' },
        { type: 'Billing & Invoicing Mass Run', count: 1, load: 'Finished (42m)', purpose: 'Automated generation of daily customer invoices and tax postings' },
        { type: 'Bank Reconciliation (F110)', count: 1, load: 'Finished (8m)', purpose: 'Electronic bank statement ingestion and automatic ledger clearing' },
        { type: 'IDoc Reprocessing Chain', count: 1, load: 'Finished (1m)', purpose: 'Automated retry of transient EDI integration messages' },
        { type: 'Inventory Aging Analysis', count: 1, load: 'Scheduled (Tonight)', purpose: 'Nightly batch evaluation of warehouse stock valuation' }
      ]
    },
    sm21: {
      tcode: 'SM21',
      title: 'SAP System Security & Kernel Log',
      desc: 'Comprehensive audit trail of kernel events, network disconnects, and authorization violations.',
      metrics: [
        { label: 'Security Log Status', value: 'Active Recording', status: 'Optimal' },
        { label: 'Failed Logon Attempts', value: '3 Flagged / Blocked', status: 'Secured' },
        { label: 'RFC Connection Health', value: '100% Verified', status: 'Optimal' },
        { label: 'Kernel Exception Count', value: '0 Critical Events', status: 'Optimal' }
      ],
      processDistribution: [
        { type: 'RFC Destination Audit', count: 48, load: 'Verified', purpose: 'Secure connections to SAP BTP, bank gateways, and third-party SaaS' },
        { type: 'User Logon Security', count: 1250, load: 'Encrypted', purpose: 'SAML 2.0 and single sign-on authentication with MFA enforcement' },
        { type: 'Database I/O Gateway', count: 1, load: 'Connected', purpose: 'Low-latency NVMe link between app servers and primary HANA node' },
        { type: 'Operating System Health', count: 4, load: 'Normal', purpose: 'Memory, swap space, and CPU core utilization across all app servers' },
        { type: 'Audit Compliance Trail', count: 1, load: 'Real-Time', purpose: 'Continuous logging of sensitive transaction executions and changes' }
      ]
    },
    st02: {
      tcode: 'ST02',
      title: 'SAP Memory Management & Buffer Pools',
      desc: 'Hit ratios, allocated memory pools, and swap allocations for program, screen, and table buffers.',
      metrics: [
        { label: 'Program Buffer Hit Ratio', value: '99.4%', status: 'Optimal (>98%)' },
        { label: 'CUA Menu Buffer Hit Ratio', value: '99.8%', status: 'Optimal (>98%)' },
        { label: 'Screen Buffer Hit Ratio', value: '98.9%', status: 'Optimal (>98%)' },
        { label: 'Table Definition Hit Ratio', value: '99.6%', status: 'Optimal (>98%)' }
      ],
      processDistribution: [
        { type: 'Program Buffer', count: 4096, load: '0 Swaps', purpose: 'Stores compiled ABAP programs in fast application server RAM' },
        { type: 'CUA Buffer', count: 512, load: '0 Swaps', purpose: 'Caches user interface menus, title bars, and pushbuttons' },
        { type: 'Screen Buffer', count: 512, load: '0 Swaps', purpose: 'Caches compiled Dynpro screens and interactive dialog layouts' },
        { type: 'Generic Table Buffer', count: 1024, load: '0 Swaps', purpose: 'Caches frequently read customizing and configuration tables' },
        { type: 'Roll & Paging Area', count: 2048, load: 'Optimal', purpose: 'Fast transactional context switching for concurrent user sessions' }
      ]
    }
  };

  // Section 3: SAP HANA In-Memory Architecture Flowchart State
  const [activeHanaStage, setActiveHanaStage] = useState<number>(0);
  const hanaFlowStages = [
    {
      title: 'Incoming Write Transaction',
      engine: 'Row Store / Write Delta',
      desc: 'High-speed row store ingests insert/update operations directly into memory with zero disk bottleneck.',
      spec: 'Sub-millisecond commit'
    },
    {
      title: 'Delta Storage Buffer',
      engine: 'Write-Optimized RAM',
      desc: 'Holds recent transaction deltas in fast write-optimized memory without requiring columnar recalculation.',
      spec: 'High Concurrency'
    },
    {
      title: 'Automated Delta Merge',
      engine: 'HANA Consolidation Engine',
      desc: 'Background process merges delta changes into read-optimized compressed columnar main memory continuously.',
      spec: '24/7 Governed Consolidation'
    },
    {
      title: 'Columnar Main Memory',
      engine: 'Column Store Engine (92%)',
      desc: 'Highly compressed in-memory tables optimized for instant multi-million record aggregations and analytics.',
      spec: '3x – 5x Compression Ratio'
    },
    {
      title: 'Savepoint & Redo Log',
      engine: 'Persistent NVMe Storage',
      desc: 'Cyclic 5-minute memory page flushes to persistent NVMe disk ensure complete ACID durability and rapid restart.',
      spec: 'RPO = 0 Guaranteed'
    }
  ];

  const hanaMetrics = [
    {
      component: 'Column Store Engine',
      spec: '92% of Total Database',
      desc: 'Optimized for high-speed analytical aggregation, column vectorization, and data compression ratios averaging 3x to 5x.'
    },
    {
      component: 'Row Store Engine',
      spec: '8% of Total Database',
      desc: 'Reserved for system catalogs, lock tables, table sequences, and write-intensive transactional temporary tables.'
    },
    {
      component: 'Delta Merge Optimizer',
      spec: 'Automated 24/7 Schedule',
      desc: 'Continuous governed consolidation of write-optimized delta storage into read-optimized compressed main memory.'
    },
    {
      component: 'Savepoints & Redo Logs',
      spec: '5-Minute Cyclic Flush',
      desc: 'Cyclic flush of memory pages to persistent NVMe disk storage, guaranteeing full ACID durability and rapid restart.'
    }
  ];

  // Section 4: STMS 3-System Landscape Pipeline State
  const [activeStmsStage, setActiveStmsStage] = useState<number>(0);
  const stmsPipeline = [
    {
      env: 'Development (DEV)',
      sid: 'DEV-100',
      role: 'Workbench & Customizing Source',
      gate: 'Clean Core ATC Gate',
      checks: 'ABAP Test Cockpit (ATC) quality gates, Clean Core API compliance, and developer unit tests before transport release.'
    },
    {
      env: 'Quality Assurance (QAS)',
      sid: 'QAS-200',
      role: 'Integration Testing & UAT',
      gate: 'Downdate & Simulation Check',
      checks: 'Automated downdate protection, import simulation checks, regression testing, and formal business sign-off.'
    },
    {
      env: 'Production (PRD)',
      sid: 'PRD-500',
      role: 'Live Enterprise Operations',
      gate: 'Governed Maintenance Import',
      checks: 'Scheduled release maintenance window, pre-import snapshot restore point, zero queue locking, and automated validation.'
    }
  ];

  // Section 5: HA/DR High Availability Topology State
  const [activeHadrMode, setActiveHadrMode] = useState<'normal' | 'failover'>('normal');
  const hadrSpecs = [
    {
      title: 'Primary Active Site',
      role: 'Availability Zone A',
      metric: '100% Production Load',
      tech: 'Pacemaker cluster orchestration with automatic virtual IP failover and active health heartbeats.'
    },
    {
      title: 'HANA System Replication (HSR)',
      role: 'Synchronous Replication',
      metric: 'RPO = 0 (Zero Data Loss)',
      tech: 'Continuous memory-to-memory log shipping over dedicated private 40 Gbps low-latency interconnects.'
    },
    {
      title: 'Secondary Standby Site',
      role: 'Availability Zone B',
      metric: 'RTO < 15 Minutes',
      tech: 'Pre-loaded in-memory tables enabling instantaneous, non-disruptive promotion to primary node.'
    },
    {
      title: 'Tertiary Disaster Recovery',
      role: 'Remote Cloud Region',
      metric: 'Asynchronous Replication',
      tech: 'Geographically separated DR site ensuring enterprise survivability against catastrophic regional outages.'
    }
  ];

  // Section 6: Workload Tuning Workbench State
  const [activeTuningDomain, setActiveTuningDomain] = useState<number>(0);
  const tuningDomains = [
    {
      domain: 'ST03N Workload Analysis',
      focus: 'System-wide Dialog & Batch Performance',
      findings: 'Identified 18% of peak hour response time consumed by database wait time rather than CPU processing.',
      tuningAction: 'Reconfigured HANA in-memory statement caching and expanded dialog work process allocation by eight threads.',
      outcome: 'Reduced average dialog response time from 420ms to 240ms across all transactional users.'
    },
    {
      domain: 'ST05 SQL Performance Trace',
      focus: 'Expensive SQL Query Isolation',
      findings: 'Custom financial reporting program executing nested queries inside an iterative loop across accounting table BSEG.',
      tuningAction: 'Refactored data retrieval using a Core Data Services (CDS) view with array fetch, reducing database buffer reads.',
      outcome: 'Report execution time dropped from 48 minutes to 90 seconds, freeing up two background work processes.'
    },
    {
      domain: 'ST02 Buffer Tuning & Swaps',
      focus: 'Paging & Memory Pool Optimization',
      findings: 'Program buffer swaps detected during early morning logon peaks caused by an undersized instance profile parameter.',
      tuningAction: 'Expanded the abap/buffersize parameter in instance profile via RZ10 from 2 GB to 4 GB, eliminating swaps.',
      outcome: 'Buffer hit ratio stabilized at 99.4%, eliminating logon delays for over 1,200 concurrent users.'
    },
    {
      domain: 'PFCG Role & Security Governance',
      focus: 'Segregation of Duties & Access Control',
      findings: 'Discovered redundant authorizations and broad activity values (ACTVT 01/02) granted across accounts payable profiles.',
      tuningAction: 'Redesigned composite roles into modular task roles with strict Segregation of Duties and Firefighter emergency logging.',
      outcome: 'Achieved 100% clean audit compliance with zero unauthorized master data change capabilities.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-500 selection:text-white">

      {/* =========================================================================
          HERO SECTION: SAP BASIS ADMINISTRATION (CLEAN WHITE FORMAT)
          ========================================================================= */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
        
        {/* Subtle Background Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #0F172A 1px, transparent 1px), linear-gradient(to bottom, #0F172A 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-slate-500 font-medium">
              <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
              <li className="text-slate-400">/</li>
              <li><Link to="/advisory-managed-services" className="hover:text-blue-600 transition-colors">Advisory &amp; Managed Services</Link></li>
              <li className="text-slate-400">/</li>
              <li className="text-blue-600 font-semibold" aria-current="page">SAP Basis</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Header */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase">
                <Server className="w-3.5 h-3.5 text-blue-600" />
                <span>INFRASTRUCTURE &bull; KERNEL &bull; TECHNICAL OPERATIONS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                SAP Basis Administration
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-slate-700 leading-snug">
                A Reliable Technical Foundation for Your Global SAP Environment
              </p>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                Maintain continuous technical health, high availability, zero-trust security, and peak performance across your SAP landscape through disciplined Basis administration, HANA operations, transport governance, and proactive tuning.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenContact && onOpenContact('SAP Basis Administration')}
                  className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Request Basis Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#sysadmin-cadence"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-base transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Explore Operational Cadence</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Hero Visual: IMAGE 1 (Kept as user requested: "hero section ko chor ke") */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative group bg-white">
                <img
                  src="/images/basis/sap-basis-hero.jpg"
                  alt="Enterprise SAP Basis Infrastructure and Cloud Datacenter Management"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg flex items-center justify-between text-slate-900">
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-600 block">CERTIFIED BASIS ENGINEERING</span>
                    <span className="text-sm font-bold text-slate-900">SAP S/4HANA &amp; Suite Infrastructure</span>
                  </div>
                  <span className="text-xs font-mono font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    99.99% Availability
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Sticky Service Navigation */}
      <AdvisoryServiceNav currentServiceId="sap-basis" />

      {/* =========================================================================
          SECTION 1: OPERATIONAL MAINTENANCE CADENCE & INTERACTIVE FLOWCHART
          ========================================================================= */}
      <section id="sysadmin-cadence" className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Technical Operations Cadence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Disciplined Daily, Weekly &amp; Monthly Basis Routines
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Technical excellence is built on rigorous operational discipline. We execute standardized health checks to ensure early detection of hardware, database, and system-level anomalies before they impact business transactions.
            </p>
          </div>

          {/* INTERACTIVE SYSADMIN ANOMALY DETECTION FLOWCHART + COMPACT IMAGE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
            
            {/* Left 8 Cols: Interactive Daily Kernel Sweep Flowchart */}
            <div className="lg:col-span-8 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                      Proactive Anomaly Sweep &amp; Patch Deployment Pipeline
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    Continuous 24h Guard
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  {[
                    { step: 'Phase 1', title: 'Automated Kernel Sweep', sub: 'SM21, SM13 & SM12 inspected automatically', tag: 'Inspection' },
                    { step: 'Phase 2', title: 'Anomaly Isolation', sub: 'ST22 short dumps analyzed and clustered', tag: 'Diagnosis' },
                    { step: 'Phase 3', title: 'Buffer Hit Tuning', sub: 'ST02 hit ratios validated above 98%', tag: 'Optimization' },
                    { step: 'Phase 4', title: 'Zero-Downtime Patch', sub: 'Kernel and SAP security notes applied', tag: 'Governance' }
                  ].map((p, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                      <span className="text-[10px] font-mono text-blue-600 font-bold uppercase mb-1">{p.step}</span>
                      <h4 className="text-xs font-bold text-slate-900 mb-0.5">{p.title}</h4>
                      <p className="text-[11px] text-slate-500 leading-tight">{p.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span><strong>Proactive Sysadmin Principle:</strong> Detect and resolve anomalies before end-users experience system friction.</span>
                <span className="text-blue-700 font-bold font-mono">0 Orphan Locks &bull; 0 DB Halts</span>
              </div>
            </div>

            {/* Right 4 Cols: Compact Operations Visual Card */}
            <div className="lg:col-span-4 rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white flex flex-col justify-between">
              <div className="h-52 sm:h-56 relative overflow-hidden group">
                <img
                  src="/images/basis/sap-basis-operations-security.jpg"
                  alt="24/7 SAP Basis Operations Command Center and Technical Monitoring"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono text-blue-300 font-bold uppercase block">
                    OPERATIONS COMMAND
                  </span>
                  <span className="text-sm font-bold">Basis Sysadmin Governance</span>
                </div>
              </div>
              <div className="p-4 text-xs text-slate-600 flex items-center justify-between">
                <span>Certified Basis Leads</span>
                <span className="text-emerald-700 font-mono font-bold">24/7 Monitored</span>
              </div>
            </div>

          </div>

          {/* Cadence Tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {(['daily', 'weekly', 'monthly'] as const).map(cadence => (
              <button
                key={cadence}
                onClick={() => setActiveCadence(cadence)}
                className={`px-6 py-3 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  activeCadence === cadence
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {basisChecklists[cadence].cadence}
              </button>
            ))}
          </div>

          {/* Cadence Checklist Container */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
              <div>
                <span className="text-xs font-mono font-bold text-blue-700 uppercase block mb-1">
                  {basisChecklists[activeCadence].cadence}
                </span>
                <p className="text-sm text-slate-600">{basisChecklists[activeCadence].summary}</p>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 shrink-0 self-start sm:self-center">
                {basisChecklists[activeCadence].badge}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              {basisChecklists[activeCadence].tasks.map((task, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-blue-700 font-mono text-xs font-bold shrink-0 shadow-sm">
                      {task.tcode}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{task.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-sans mt-0.5">{task.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 shrink-0 self-start sm:self-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WORK PROCESS & TRANSACTIONAL DIAGNOSTICS
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Workload Diagnostics &amp; Monitoring
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Real-Time SAP Process Monitoring &amp; Health Verification
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Inspect how our Basis administrators evaluate work process distribution, background scheduling queues, security audit logs, and buffer memory hit ratios to guarantee responsive transaction processing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Monitor Selector Sidebar */}
            <div className="lg:col-span-5 space-y-3">
              {[
                { id: 'sm50', tcode: 'SM50 / SM66', title: 'Work Process Monitor', sub: 'Active Dialog, Update, Batch & Spool processes' },
                { id: 'sm37', tcode: 'SM37', title: 'Background Job Processing', sub: 'Batch execution tracking & schedule delay governance' },
                { id: 'sm21', tcode: 'SM21', title: 'System Security & Kernel Log', sub: 'Kernel audit trail, RFC connections & failed logons' },
                { id: 'st02', tcode: 'ST02', title: 'Memory Pools & Buffer Hits', sub: 'Program, CUA, screen and table buffer hit ratios' }
              ].map(mon => (
                <button
                  key={mon.id}
                  onClick={() => setSelectedMonitor(mon.id as any)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    selectedMonitor === mon.id
                      ? 'bg-blue-50 border-blue-500 shadow-sm ring-1 ring-blue-500/30'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-blue-700">{mon.tcode}</span>
                    <span className="text-[10px] font-mono text-slate-400 font-semibold uppercase">ACTIVE MONITOR</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-0.5">{mon.title}</h3>
                  <p className="text-xs text-slate-500 font-sans">{mon.sub}</p>
                </button>
              ))}
            </div>

            {/* Monitor Detail Card */}
            <div className="lg:col-span-7 p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                      TELEMETRY STATION // {monitorProfiles[selectedMonitor].tcode}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {monitorProfiles[selectedMonitor].title}
                  </h3>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 shrink-0 self-start sm:self-center">
                  Online &bull; Polling Verified
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-sans">
                {monitorProfiles[selectedMonitor].desc}
              </p>

              {/* KPI Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {monitorProfiles[selectedMonitor].metrics.map((met, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">
                      {met.label}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 block">
                      {met.value}
                    </span>
                    <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded mt-1.5 inline-block">
                      {met.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Structured Process Elements */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-mono font-bold text-slate-700 uppercase block">
                  Active Resource Allocation:
                </span>
                {monitorProfiles[selectedMonitor].processDistribution.map((proc, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">{proc.type}</span>
                        {typeof proc.count === 'number' && (
                          <span className="text-[11px] font-mono text-slate-500">
                            ({proc.count} Threads)
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{proc.purpose}</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200 shrink-0 self-start sm:self-center">
                      {proc.load}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SAP HANA IN-MEMORY DATABASE & INTERACTIVE ENGINE FLOWCHART
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              In-Memory Database Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              SAP HANA Database Administration &amp; Memory Optimization
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              From columnar delta merges to persistent redo log flushes, we administer SAP HANA databases for maximum concurrency, sub-millisecond query execution, and rapid memory consolidation.
            </p>
          </div>

          {/* INTERACTIVE HANA ENGINE ARCHITECTURE FLOWCHART + COMPACT IMAGE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
            
            {/* Left 8 Cols: Interactive HANA Memory & Delta Merge Pipeline */}
            <div className="lg:col-span-8 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                      SAP HANA In-Memory Data Flow &amp; Persistence Engine
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Sub-Millisecond Read
                  </span>
                </div>

                {/* 5 HANA Flow Steps */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {hanaFlowStages.map((st, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveHanaStage(idx)}
                      className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                        activeHanaStage === idx
                          ? 'bg-blue-50 border-blue-500 shadow-xs ring-1 ring-blue-500/20'
                          : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span className="text-[10px] font-mono text-blue-700 font-bold block mb-1">
                        Node {idx + 1}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-2 leading-tight">
                        {st.title}
                      </h4>
                      <span className="text-[10px] font-mono text-emerald-700 font-bold block mt-1">
                        {st.spec}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active HANA Node Detail */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900">
                    {hanaFlowStages[activeHanaStage].engine}
                  </h3>
                  <span className="text-xs font-mono font-bold text-blue-700">
                    {hanaFlowStages[activeHanaStage].spec}
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {hanaFlowStages[activeHanaStage].desc}
                </p>
              </div>
            </div>

            {/* Right 4 Cols: Compact HANA Microprocessor Image */}
            <div className="lg:col-span-4 rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white flex flex-col justify-between">
              <div className="h-52 sm:h-56 relative overflow-hidden group">
                <img
                  src="/images/basis/sap-basis-hana-admin.jpg"
                  alt="SAP HANA In-Memory Database Architecture and Columnar Performance Tuning"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono text-blue-300 font-bold uppercase block">
                    HANA IN-MEMORY
                  </span>
                  <span className="text-sm font-bold">Columnar Compression Engine</span>
                </div>
              </div>
              <div className="p-4 text-xs text-slate-600 flex items-center justify-between">
                <span>Memory Allocation</span>
                <span className="text-emerald-700 font-mono font-bold">92% Column Store</span>
              </div>
            </div>

          </div>

          {/* HANA Components Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hanaMetrics.map((hm, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-blue-700 uppercase block mb-1">
                    ENGINE COMPONENT
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {hm.component}
                  </h3>
                  <div className="text-xs font-mono text-emerald-700 font-bold mb-3 bg-emerald-50 px-2 py-0.5 rounded w-fit border border-emerald-200">
                    {hm.spec}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {hm.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Standard Benchmark</span>
                  <span className="text-emerald-700 font-bold">100% Governed</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: STMS 3-SYSTEM LANDSCAPE & INTERACTIVE PIPELINE
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Transport Management System (STMS)
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Controlled 3-System Landscape &amp; Release Pipeline
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Zero unplanned downtime. Every transport request (TR) is validated with downdate protection, import locks, and audit trails before controlled promotion to production.
            </p>
          </div>

          {/* INTERACTIVE STMS PIPELINE FLOWCHART + COMPACT VISUAL */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
            
            {/* Left 8 Cols: Interactive STMS 3-System Flowchart */}
            <div className="lg:col-span-8 p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                      STMS 3-System Release Pipeline Flowchart
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    Downdate Protected
                  </span>
                </div>

                {/* 3 Clickable Landscape Nodes */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {stmsPipeline.map((pipe, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStmsStage(idx)}
                      className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                        activeStmsStage === idx
                          ? 'bg-blue-50 border-blue-500 shadow-sm ring-2 ring-blue-500/20'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono text-blue-600 font-bold uppercase">
                          SID: {pipe.sid}
                        </span>
                        {activeStmsStage === idx && (
                          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">{pipe.env.split(' ')[0]}</h4>
                      <span className="text-[11px] font-mono text-emerald-700 font-semibold block">{pipe.gate}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Stage Quality Gates */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900">
                    {stmsPipeline[activeStmsStage].env} &bull; {stmsPipeline[activeStmsStage].role}
                  </h3>
                  <span className="text-xs font-mono font-bold text-blue-700">
                    Gate: {stmsPipeline[activeStmsStage].gate}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {stmsPipeline[activeStmsStage].checks}
                </p>
              </div>
            </div>

            {/* Right 4 Cols: Compact Landscape Image */}
            <div className="lg:col-span-4 rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white flex flex-col justify-between">
              <div className="h-52 sm:h-56 relative overflow-hidden group">
                <img
                  src="/images/basis/sap-basis-landscape-transport.jpg"
                  alt="SAP STMS 3-System Landscape Architecture DEV QAS PRD Release Pipeline"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono text-blue-300 font-bold uppercase block">
                    LANDSCAPE ARCHITECTURE
                  </span>
                  <span className="text-sm font-bold">DEV &rarr; QAS &rarr; PRD Release Pipeline</span>
                </div>
              </div>
              <div className="p-4 text-xs text-slate-600 flex items-center justify-between">
                <span>Transport Route</span>
                <span className="text-emerald-700 font-mono font-bold">Queue Block-Free</span>
              </div>
            </div>

          </div>

          {/* 3-System Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stmsPipeline.map((pipe, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                      ENVIRONMENT TIER
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white border border-slate-200 font-bold text-slate-700 shadow-xs">
                      SID: {pipe.sid}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {pipe.env}
                  </h3>
                  <div className="text-xs text-slate-500 font-mono mb-4">
                    Purpose: {pipe.role}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 text-xs text-slate-600">
                  <span className="text-slate-700 font-mono font-bold block mb-1.5 uppercase">
                    Automated Quality Gates:
                  </span>
                  <p className="font-sans leading-relaxed">{pipe.checks}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: HIGH AVAILABILITY & DISASTER RECOVERY (HA/DR) FLOWCHART
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Business Continuity &amp; Resiliency
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Multi-AZ Clustering, HANA System Replication &amp; Disaster Recovery
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Guaranteed operational continuity. We engineer active-passive cluster failovers and synchronous replication to deliver zero data loss (RPO = 0) and recovery within minutes (RTO &lt; 15m).
            </p>
          </div>

          {/* INTERACTIVE HA/DR REPLICATION FLOWCHART + COMPACT IMAGE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
            
            {/* Left 8 Cols: Interactive Multi-AZ Clustering Flowchart */}
            <div className="lg:col-span-8 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                    Multi-Zone Pacemaker Clustering &amp; HSR Flowchart
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveHadrMode('normal')}
                      className={`px-3 py-1 rounded-xl text-xs font-mono font-bold cursor-pointer transition-all ${
                        activeHadrMode === 'normal'
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      Normal Replication
                    </button>
                    <button
                      onClick={() => setActiveHadrMode('failover')}
                      className={`px-3 py-1 rounded-xl text-xs font-mono font-bold cursor-pointer transition-all ${
                        activeHadrMode === 'failover'
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      Failover Simulation
                    </button>
                  </div>
                </div>

                {/* 3 Topology Nodes */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className={`p-4 rounded-2xl border transition-all ${
                    activeHadrMode === 'normal'
                      ? 'bg-blue-50/60 border-blue-400'
                      : 'bg-slate-50 border-slate-200 opacity-60'
                  }`}>
                    <span className="text-[10px] font-mono text-blue-700 font-bold uppercase block mb-1">
                      {activeHadrMode === 'normal' ? 'Active Primary' : 'Failed Node (Isolated)'}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Zone A Data Center</h4>
                    <p className="text-xs text-slate-500">
                      {activeHadrMode === 'normal' ? '100% Production Load' : 'Pacemaker fenced isolated'}
                    </p>
                  </div>

                  <div className={`p-4 rounded-2xl border transition-all ${
                    activeHadrMode === 'failover'
                      ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-400/30'
                      : 'bg-slate-50 border-slate-200'
                  }`}>
                    <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase block mb-1">
                      {activeHadrMode === 'failover' ? 'Promoted Primary' : 'Sync Standby (HSR)'}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Zone B Data Center</h4>
                    <p className="text-xs text-slate-500">
                      {activeHadrMode === 'failover' ? 'Instant Takeover (<15m RTO)' : 'Synchronous Log Shipping (RPO=0)'}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono text-purple-700 font-bold uppercase block mb-1">
                      Tertiary DR
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Remote Cloud Region</h4>
                    <p className="text-xs text-slate-500">Asynchronous Log Shipping</p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
                <span>Interconnect: <strong>Dedicated 40 Gbps Low-Latency Network</strong></span>
                <span className="text-emerald-700 font-bold font-mono">Zero Data Loss (RPO = 0)</span>
              </div>
            </div>

            {/* Right 4 Cols: Compact HA/DR Image Card */}
            <div className="lg:col-span-4 rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white flex flex-col justify-between">
              <div className="h-52 sm:h-56 relative overflow-hidden group">
                <img
                  src="/images/basis/sap-basis-ha-dr.jpg"
                  alt="SAP High Availability Clustering, Multi-Zone Replication and Disaster Recovery"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono text-blue-300 font-bold uppercase block">
                    HIGH AVAILABILITY
                  </span>
                  <span className="text-sm font-bold">Multi-AZ Clustering &amp; HSR</span>
                </div>
              </div>
              <div className="p-4 text-xs text-slate-600 flex items-center justify-between">
                <span>Failover SLA</span>
                <span className="text-emerald-700 font-mono font-bold">RTO &lt; 15 Mins</span>
              </div>
            </div>

          </div>

          {/* HA/DR Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hadrSpecs.map((hadr, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-blue-700 uppercase block mb-1">
                    TOPOLOGY NODE
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {hadr.title}
                  </h3>
                  <div className="text-xs font-mono text-emerald-700 font-bold mb-3 bg-emerald-50 px-2 py-0.5 rounded w-fit border border-emerald-200">
                    {hadr.metric}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {hadr.tech}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                  Role: {hadr.role}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PERFORMANCE TUNING & SECURITY HARDENING WORKBENCH
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Performance Tuning &amp; Security Hardening
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Deep Workload Analysis &amp; Profile Parameter Optimization
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              We extract actionable performance insights directly from ST03N workload profiles, ST05 SQL traces, and buffer statistics to eliminate query bottlenecks and enforce Segregation of Duties.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Tuning Domain Selector */}
            <div className="lg:col-span-5 space-y-3">
              {tuningDomains.map((td, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTuningDomain(idx)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    activeTuningDomain === idx
                      ? 'bg-blue-50 border-blue-500 shadow-sm ring-1 ring-blue-500/30'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <span className="text-xs font-mono font-bold text-blue-700 uppercase block mb-1">
                    FOCUS: {td.domain.split(' ')[0]}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mb-0.5">{td.domain}</h3>
                  <p className="text-xs text-slate-500 font-sans">{td.focus}</p>
                </button>
              ))}
            </div>

            {/* Tuning Detail Card */}
            <div className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-5">
              <div className="pb-4 border-b border-slate-200">
                <span className="text-xs font-mono uppercase text-blue-700 font-bold block mb-1">
                  TECHNICAL INVESTIGATION &amp; REMEDIATION
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {tuningDomains[activeTuningDomain].domain}
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm font-sans">
                <div>
                  <span className="text-slate-500 font-mono text-xs uppercase font-bold block mb-1">
                    Performance Observation:
                  </span>
                  <p className="text-slate-700 leading-relaxed bg-white p-3.5 rounded-xl border border-slate-200">
                    {tuningDomains[activeTuningDomain].findings}
                  </p>
                </div>

                <div>
                  <span className="text-blue-700 font-mono text-xs uppercase font-bold block mb-1">
                    Basis Engineering Tuning Action:
                  </span>
                  <p className="text-slate-700 leading-relaxed bg-blue-50/60 p-3.5 rounded-xl border border-blue-200">
                    {tuningDomains[activeTuningDomain].tuningAction}
                  </p>
                </div>

                <div>
                  <span className="text-emerald-700 font-mono text-xs uppercase font-bold block mb-1">
                    Measurable Business Outcome:
                  </span>
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{tuningDomains[activeTuningDomain].outcome}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Advisory Suite Crosslink Navigation */}
      <AdvisorySuiteFooterCrosslinks activeServiceId="sap-basis" />

      {/* =========================================================================
          FINAL CALL TO ACTION
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest block bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full w-fit mx-auto">
            HIGH AVAILABILITY &bull; DISASTER RECOVERY &bull; ZERO DATA LOSS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Secure the Technical Health of Your SAP Landscape
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Entrust your SAP technical operations to certified Basis administrators who govern system uptime, database throughput, transport pipelines, and security notes with uncompromising discipline.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenContact && onOpenContact('SAP Basis Administration')}
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Speak with a Basis Specialist</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/services/sap-strategy"
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-base transition-all shadow-sm"
            >
              Return to SAP Strategy Advisory
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
