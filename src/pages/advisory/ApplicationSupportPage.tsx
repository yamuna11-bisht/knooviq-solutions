import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  LifeBuoy,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  BookOpen,
  FileText,
  UserCheck,
  Headphones,
  Search,
  Sliders,
  Sparkles,
  Zap,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  Check,
  ExternalLink,
  Layers,
  Building2,
  Workflow,
  Cpu,
  RefreshCw,
  Users
} from 'lucide-react';
import { AdvisoryServiceNav, AdvisorySuiteFooterCrosslinks } from '../../components/advisory/AdvisoryServiceNav';

interface ApplicationSupportPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const ApplicationSupportPage: React.FC<ApplicationSupportPageProps> = ({ onOpenContact }) => {
  useEffect(() => {
    document.title = 'SAP Application Support & End-User Helpdesk | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Section 1: Department Assistance State
  const [selectedDept, setSelectedDept] = useState<'finance' | 'sales' | 'procure' | 'mfg'>('finance');
  const departmentAssistance = {
    finance: {
      name: 'Finance, Controlling & Accounting (FI/CO)',
      tcodes: ['F110', 'FB50', 'FAGLL03', 'F-28', 'KS01'],
      tagline: 'Month-End Closing & Transaction Reconciliations',
      challenges: [
        'Month-end subledger closing failures and unposted depreciation runs',
        'Automatic payment run proposal blocks and bank communication errors',
        'Intercompany reconciliation imbalances and foreign currency translation errors',
        'Withholding tax computation discrepancies on cross-border vendor payments'
      ],
      turnaround: 'Under 20 Mins for Closing Emergencies'
    },
    sales: {
      name: 'Order Management & Logistics (SD / LE)',
      tcodes: ['VA02', 'VL01N', 'VF01', 'VKOA', 'VK11'],
      tagline: 'Order-to-Delivery Clearance & Billing Blocks',
      challenges: [
        'Billing document generation blocks due to account determination errors',
        'Outbound delivery splits caused by warehouse picking storage location locks',
        'Pricing condition inconsistencies causing customer invoice disputes',
        'Credit limit release workflow blocks for urgent priority customer shipments'
      ],
      turnaround: 'Under 15 Mins for Delivery Holds'
    },
    procure: {
      name: 'Procurement & Inventory (MM / Sourcing)',
      tcodes: ['ME21N', 'MIGO', 'MIRO', 'MRBR', 'ME54N'],
      tagline: 'PO Release Deadlocks & Invoice Matching',
      challenges: [
        'Purchase order approval workflow deadlocks preventing supplier order issuance',
        'Goods receipt batch and serial number validation errors',
        'Invoice verification 3-way matching quantity/price variance holds',
        'GR/IR clearing account discrepancies on multi-currency international purchase orders'
      ],
      turnaround: 'Under 25 Mins for Supplier Critical Holds'
    },
    mfg: {
      name: 'Production & Quality (PP / QM)',
      tcodes: ['CO01', 'CO11N', 'MD04', 'QA32', 'QP01'],
      tagline: 'Shop Floor Order Confirmations & MRP Exceptions',
      challenges: [
        'Production order confirmation backflushing errors on raw material stock',
        'Material Requirements Planning exception message analysis and capacity adjustments',
        'Inspection lot processing blocks halting quality release to warehouse stock',
        'Bill of Materials explosion errors on newly launched product variants'
      ],
      turnaround: 'Under 30 Mins for Line-Stop Issues'
    }
  };

  // Section 2: Ticket Resolution Lifecycle State
  const [activeLifecycleStage, setActiveLifecycleStage] = useState<number>(0);
  const ticketStages = [
    {
      title: 'Omnichannel Ingestion & Triage',
      time: '< 15 Mins',
      desc: 'Users submit requests via Teams bot, self-service portal, or direct phone. The system automatically categorizes module, severity, and urgency.',
      action: 'Automated ticket creation with module tags and priority SLA timer.'
    },
    {
      title: 'Diagnostic & Sandbox Replication',
      time: '< 30 Mins',
      desc: 'Dedicated functional consultants recreate the transaction in a validated QA sandbox using the user’s exact role profile and parameters.',
      action: 'Error reproduced without risking live production data integrity.'
    },
    {
      title: 'Root Cause Isolation',
      time: '< 1 Hour',
      desc: 'Isolate configuration omissions, master data locks, missing authorizations, or custom user exit bugs.',
      action: 'Definitive technical and functional diagnosis established.'
    },
    {
      title: 'Remediation & Guided Walkthrough',
      time: '< 2 Hours',
      desc: 'The correction is applied via configuration adjustments, master data updates, or real-time step-by-step guidance over screen-share.',
      action: 'User performs transaction successfully under expert supervision.'
    },
    {
      title: 'User Validation & Runbook Capture',
      time: 'Verified',
      desc: 'Formal business user sign-off is confirmed. The verified solution is codified directly into the searchable organizational knowledge base.',
      action: 'Runbook published to prevent repeat ticket escalations.'
    }
  ];

  // Section 3: Technical Error Diagnostics Guide
  const [selectedError, setSelectedError] = useState<number>(0);
  const sapErrorGuides = [
    {
      tcode: 'ST22',
      name: 'ABAP Runtime Short Dump Analysis',
      symptom: 'Transaction terminates abruptly with an unhandled exception screen during posting.',
      diagnosis: 'Full-table scan without index or infinite loop in custom user exit during high-volume processing.',
      fix: 'Inspect call stack in ST22, isolate the offending program line, deploy hotfix, or optimize database index query.'
    },
    {
      tcode: 'SM13',
      name: 'Update Terminated Task Recovery',
      symptom: 'User receives "Express Document Update Terminated" notice and document fails to commit.',
      diagnosis: 'Asynchronous database update task encountered a locked record or duplicate primary key.',
      fix: 'Analyze update records in SM13, verify lock entries in SM12, and safely re-execute the failed update task.'
    },
    {
      tcode: 'SU53',
      name: 'Missing Authorization Object Resolution',
      symptom: 'User receives notification: "You are not authorized to use transaction or perform this action".',
      diagnosis: 'User role assignment lacks the required authorization object or field activity value.',
      fix: 'Review SU53 buffer immediately after failure, extract exact missing object, and route for rapid role authorization.'
    },
    {
      tcode: 'SM12',
      name: 'Orphaned Database Lock Clearance',
      symptom: 'User is locked out of document with notice: "Record is currently locked by user X".',
      diagnosis: 'Network disruption left a dangling lock argument in the SAP enqueue server table.',
      fix: 'Verify user session in SM04, inspect lock argument in SM12, and safely release stale lock entries.'
    }
  ];

  // Section 4: Runbook Library State
  const [activeRunbook, setActiveRunbook] = useState<number>(0);
  const runbooks = [
    {
      code: 'SOP-FI-104',
      title: 'Clearing Payment Proposal (F110) Database Lock Exceptions',
      module: 'SAP FI / Payment Processing',
      steps: [
        'Navigate to transaction F110 and enter Run Date and Identification.',
        'Choose Edit > Payments > Delete Proposal if the job has terminated abnormally.',
        'Execute SM12 and filter by Table REGUP / REGUH to eliminate orphaned lock arguments.',
        'Restart the proposal run with an expanded server group parameter in background mode.'
      ]
    },
    {
      code: 'SOP-SD-208',
      title: 'Resolving Billing Document Generation VKOA Account Determination Error',
      module: 'SAP SD / Invoicing Operations',
      steps: [
        'Inspect invoice error log in transaction VF02 via Environment > Account Determination Analysis.',
        'Identify missing G/L account assignment in chart of accounts matrix.',
        'Update configuration table in transaction VKOA for the appropriate condition type and sales organization.',
        'Re-release billing document to accounting in VF02 to trigger immediate document generation.'
      ]
    },
    {
      code: 'SOP-MM-312',
      title: 'Resolving Purchase Requisition Approval Strategy Deadlock',
      module: 'SAP MM / Purchasing Governance',
      steps: [
        'Execute transaction ME54N with administrative authorization.',
        'Inspect Release Strategy tab to identify pending approval code.',
        'Check user substitution rule in SAP Business Workplace (SBWP).',
        'Simulate approval release to verify no blocking user lock exists in the requisition table.'
      ]
    }
  ];

  // Section 5: Shift-Left Model State
  const [activeShiftTier, setActiveShiftTier] = useState<number>(0);
  const shiftTiers = [
    {
      tier: 'Business End-User Self-Service',
      shift: 'Autonomous Resolution',
      action: 'Instant in-app guidance via embedded Fiori interactive help tours and automated FAQ matching.',
      impact: 'Sub-Minute Resolution (62% of common inquiries)'
    },
    {
      tier: 'Level 1 Service Desk',
      shift: 'Shift to First Contact',
      action: 'Standardized runbooks for password resets, role authorizations, and basic posting fixes.',
      impact: '-40% Tier 2 Ticket Volume'
    },
    {
      tier: 'Level 2 Functional Pods',
      shift: 'Shift to Configuration',
      action: 'Codify complex ABAP logic into configurable business rules and guided workflows.',
      impact: '-35% Developer Distraction'
    },
    {
      tier: 'Level 3 Core Engineering',
      shift: 'Permanent Defect Elimination',
      action: 'Dedicated capacity focused solely on deep architectural bug fixes and Clean Core enhancements.',
      impact: 'Zero Recurring Bugs'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-500 selection:text-white">

      {/* =========================================================================
      {/* =========================================================================
          SECTION 1: HERO — APPLICATION SUPPORT (FULL-SCREEN WIDESCREEN HERO)
          ========================================================================= */}
      <section className="relative w-full min-h-[600px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 overflow-hidden bg-slate-950 text-white">
        
        {/* Full-Bleed Background Visual */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/application-support/application_support_hero_widescreen.jpg"
            alt="SAP Enterprise Application Support and Functional Helpdesk"
            className="w-full h-full object-cover object-right lg:object-[85%_center] brightness-105 contrast-105 saturate-[1.05]"
          />
          {/* Dedicated text-readability scrim on left; 100% bright & clear on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 via-50% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-slate-400 font-medium">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li><Link to="/advisory-managed-services" className="hover:text-blue-400 transition-colors">Advisory &amp; Managed Services</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-blue-400 font-semibold" aria-current="page">Application Support</li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
              <LifeBuoy className="w-3.5 h-3.5 text-blue-400" />
              <span>USER RESOLUTION DESK &bull; FUNCTIONAL &amp; TECHNICAL ASSISTANCE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Application <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Support
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-slate-200 leading-snug">
              Reliable Support for Critical Business Applications
            </p>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Empower your business teams to work without interruption. We provide structured SAP functional and technical support that resolves operational issues quickly, maintains business continuity, and eliminates daily transactional friction.
            </p>

            {/* SLA & Service Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-md space-y-0.5">
                <Clock className="w-4 h-4 text-cyan-400 mb-1" />
                <div className="text-sm font-black text-white">Follow-The-Sun</div>
                <div className="text-[11px] text-slate-400 uppercase font-mono">24/7 Global SLA</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-md space-y-0.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mb-1" />
                <div className="text-sm font-black text-white">&lt; 15 Min P1</div>
                <div className="text-[11px] text-slate-400 uppercase font-mono">Incident Response</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-md space-y-0.5">
                <ShieldCheck className="w-4 h-4 text-blue-400 mb-1" />
                <div className="text-sm font-black text-white">99.9% Uptime</div>
                <div className="text-[11px] text-slate-400 uppercase font-mono">Business Continuity</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => onOpenContact && onOpenContact('Application Support Services')}
                className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Request Support Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#department-assistance"
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-base transition-all flex items-center gap-2 shadow-sm backdrop-blur-sm"
              >
                <span>Explore Support Capabilities</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Sticky Service Navigation */}
      <AdvisoryServiceNav currentServiceId="application-support" />

      {/* =========================================================================
          SECTION 1: BUSINESS DEPARTMENT ASSISTANCE & INTERACTIVE DISPATCH FLOWCHART
          ========================================================================= */}
      <section id="department-assistance" className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Business Department Assistance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tailored Support for Every Core Business Department
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Our consultants speak the language of your business users. We step in immediately to resolve transactional friction across your critical operational teams in finance, sales, procurement, and manufacturing.
            </p>
          </div>

          {/* INTERACTIVE DEPARTMENTAL FLOWCHART + COMPACT VISUAL SHOWCASE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
            
            {/* Left 8 Cols: Departmental Triage & Simulation Flowchart */}
            <div className="lg:col-span-8 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                      Departmental Ticket Dispatch &amp; Sandbox Simulation Flowchart
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    Direct Pod Dispatch
                  </span>
                </div>

                {/* 4 Interactive Departmental Pipeline Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative">
                  {[
                    { step: 'Step 1', title: 'User Error Trigger', sub: 'Posting block, billing hold, or MRP exception flagged', tag: 'Trigger' },
                    { step: 'Step 2', title: 'Pod Specialist Intake', sub: 'Assigned directly to dedicated module consultant', tag: 'Triage' },
                    { step: 'Step 3', title: 'Sandbox Replication', sub: 'Simulated in QA environment using user role profile', tag: 'Diagnosis' },
                    { step: 'Step 4', title: 'Guided Clearance', sub: 'Correction applied with live user screen walkthrough', tag: 'Resolution' }
                  ].map((fl, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-mono font-bold text-blue-600 uppercase">{fl.step}</span>
                          <span className="text-[9px] font-mono text-slate-400 bg-white px-1.5 py-0.2 rounded border border-slate-200 font-semibold">{fl.tag}</span>
                        </div>
                        <h4 className="text-xs font-bold text-slate-900 mb-1 leading-snug">{fl.title}</h4>
                        <p className="text-[11px] text-slate-500 leading-tight">{fl.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span><strong>Specialized Module Alignment:</strong> Certified functional leads across FI/CO, SD, MM &amp; PP.</span>
                <span className="text-blue-700 font-bold font-mono">Average Turnaround: &lt; 20 Mins</span>
              </div>
            </div>

            {/* Right 4 Cols: Compact Departmental Image Card */}
            <div className="lg:col-span-4 rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white flex flex-col justify-between">
              <div className="h-52 sm:h-56 relative overflow-hidden group">
                <img
                  src="/images/application-support/app-support-departments.jpg"
                  alt="Dedicated SAP Application Support for Enterprise Business Departments"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono text-blue-300 font-bold uppercase block">
                    FUNCTIONAL DESK
                  </span>
                  <span className="text-sm font-bold">Business User Resolution</span>
                </div>
              </div>
              <div className="p-4 text-xs text-slate-600 flex items-center justify-between">
                <span>Core Business Operations</span>
                <span className="text-emerald-700 font-mono font-bold">Zero User Blockers</span>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Department Selector */}
            <div className="lg:col-span-5 space-y-3">
              {[
                { id: 'finance', name: 'Finance & Controlling', sub: 'Month-end closing, ledger reconciliations & payment runs' },
                { id: 'sales', name: 'Sales & Order Fulfillment', sub: 'Delivery holds, shipping blocks & customer billing' },
                { id: 'procure', name: 'Procurement & Inventory', sub: 'PO approval deadlocks, GR/IR & 3-way matching' },
                { id: 'mfg', name: 'Manufacturing & Quality', sub: 'Shop-floor order confirmations & MRP exceptions' }
              ].map(dept => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDept(dept.id as any)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    selectedDept === dept.id
                      ? 'bg-blue-50 border-blue-500 shadow-sm ring-1 ring-blue-500/30'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <h3 className="text-sm font-bold text-slate-900 mb-0.5">{dept.name}</h3>
                  <p className="text-xs text-slate-500 font-sans">{dept.sub}</p>
                </button>
              ))}
            </div>

            {/* Department Detail Card */}
            <div className="lg:col-span-7 p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
                <div>
                  <span className="text-xs font-mono uppercase text-blue-700 font-bold block mb-1">
                    DEPARTMENTAL SUPPORT SCOPE
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {departmentAssistance[selectedDept].name}
                  </h3>
                </div>
                <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold self-start sm:self-auto">
                  {departmentAssistance[selectedDept].turnaround}
                </span>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono uppercase text-slate-500 font-bold block">
                  Typical Operational Challenges Resolved:
                </span>
                <div className="space-y-2">
                  {departmentAssistance[selectedDept].challenges.map((c, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono gap-1">
                <span className="text-slate-500">Core Transactions Supported:</span>
                <span className="text-blue-700 font-bold">
                  {departmentAssistance[selectedDept].tcodes.join(' • ')}
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: END-TO-END TICKET RESOLUTION LIFECYCLE & INTERACTIVE FLOWCHART
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Incident Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Structured End-to-End Ticket Resolution Lifecycle
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              From the moment an issue is logged to final user validation, our structured workflow ensures transparency, sandbox replication, rapid diagnostics, and permanent runbook codification.
            </p>
          </div>

          {/* INTERACTIVE LIFECYCLE FLOWCHART + COMPACT IMAGE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
            
            {/* Left 8 Cols: Interactive 5-Stage Lifecycle Flowchart */}
            <div className="lg:col-span-8 p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                  <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                    5-Stage Guided Resolution Pipeline
                  </span>
                  <span className="text-xs font-mono text-slate-400">Select stage to view details</span>
                </div>

                {/* 5 Clickable Flow Nodes */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {ticketStages.map((st, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveLifecycleStage(idx)}
                      className={`p-3 rounded-2xl text-left border transition-all cursor-pointer relative ${
                        activeLifecycleStage === idx
                          ? 'bg-blue-50 border-blue-500 shadow-sm ring-2 ring-blue-500/20'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono text-blue-600 font-bold uppercase">
                          Stage {idx + 1}
                        </span>
                        {activeLifecycleStage === idx && (
                          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                        )}
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-2 leading-tight">
                        {st.title.split(' ')[0]} {st.title.split(' ')[1] || ''}
                      </h4>
                      <span className="text-[10px] font-mono text-emerald-700 font-bold block mt-1">
                        {st.time}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Stage Animated Detail Drawer */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLifecycleStage}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900">
                      {ticketStages[activeLifecycleStage].title}
                    </h3>
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                      Standard SLA: {ticketStages[activeLifecycleStage].time}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ticketStages[activeLifecycleStage].desc}
                  </p>
                  <div className="pt-2 text-xs font-mono text-slate-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span><strong>Milestone Action:</strong> {ticketStages[activeLifecycleStage].action}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Right 4 Cols: Compact Guided Diagnostics Image */}
            <div className="lg:col-span-4 rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white flex flex-col justify-between">
              <div className="h-52 sm:h-56 relative overflow-hidden group">
                <img
                  src="/images/application-support/app-support-lifecycle.jpg"
                  alt="Hands-On SAP Application Guided Diagnostics & Ticket Resolution"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono text-blue-300 font-bold uppercase block">
                    GUIDED RESOLUTION
                  </span>
                  <span className="text-sm font-bold">Interactive Screen Assistance</span>
                </div>
              </div>
              <div className="p-4 text-xs text-slate-600 flex items-center justify-between">
                <span>First-Contact Closure</span>
                <span className="text-emerald-700 font-mono font-bold">88% Sign-Off</span>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ticketStages.slice(0, 4).map((st, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition-all">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-mono font-bold text-sm mb-3 border border-blue-100">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {st.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-[11px] font-mono text-blue-700 font-bold">
                  Quality Gate Verified
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: COMMON TRANSACTIONAL ERRORS (Diagnostic Troubleshooting)
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Diagnostic Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Rapid Diagnostics for Critical SAP System Exceptions
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Our support team utilizes standardized SAP diagnostic procedures to quickly troubleshoot and remediate complex transactional, authorization, and database lock failures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Error Selector */}
            <div className="lg:col-span-5 space-y-3">
              {sapErrorGuides.map((err, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedError(idx)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    selectedError === idx
                      ? 'bg-blue-50 border-blue-500 shadow-sm ring-1 ring-blue-500/30'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-blue-700">{err.tcode}</span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">DIAGNOSTIC</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">{err.name}</h4>
                </button>
              ))}
            </div>

            {/* Error Details */}
            <div className="lg:col-span-7 p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                  DIAGNOSTIC PROTOCOL &bull; {sapErrorGuides[selectedError].tcode}
                </span>
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Standard Resolution
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {sapErrorGuides[selectedError].name}
              </h3>

              <div className="space-y-3 pt-1 text-xs sm:text-sm font-sans">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 font-mono text-xs uppercase block mb-1">
                    Reported Symptom:
                  </span>
                  <p className="text-slate-700 font-medium">{sapErrorGuides[selectedError].symptom}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 font-mono text-xs uppercase block mb-1">
                    Technical Diagnosis:
                  </span>
                  <p className="text-slate-700">{sapErrorGuides[selectedError].diagnosis}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200">
                  <span className="text-blue-700 font-mono text-xs uppercase block mb-1 font-bold">
                    Standard Remediation Protocol:
                  </span>
                  <p className="text-slate-800">{sapErrorGuides[selectedError].fix}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CODIFIED KNOWLEDGE BASE & RUNBOOK FLOWCHART
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Standard Operating Procedures
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Codified Knowledge Base &amp; Runbook Library
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Every solved incident feeds our live, searchable knowledge repository, preventing recurring issues and enabling accelerated self-service and first-call resolution.
            </p>
          </div>

          {/* INTERACTIVE RUNBOOK PIPELINE FLOWCHART + COMPACT IMAGE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
            
            {/* Left 8 Cols: Runbook Codification Pipeline Flowchart */}
            <div className="lg:col-span-8 p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                  <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                    Continuous Runbook Codification Pipeline
                  </span>
                  <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    60% Faster Resolution
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  {[
                    { step: 'Phase 1', title: 'Incident Resolution', desc: 'Consultant isolates and confirms functional fix' },
                    { step: 'Phase 2', title: 'SOP Documentation', desc: 'Exact T-codes and step sequence scripted' },
                    { step: 'Phase 3', title: 'Knowledge Mesh Sync', desc: 'Published to searchable in-app help repository' },
                    { step: 'Phase 4', title: 'Shift-Left Enablement', desc: 'Enables first-contact self-resolution by user' }
                  ].map((p, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between">
                      <span className="text-[10px] font-mono text-blue-600 font-bold uppercase mb-1">{p.step}</span>
                      <h4 className="text-xs font-bold text-slate-900 mb-0.5">{p.title}</h4>
                      <p className="text-[11px] text-slate-500 leading-tight">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
                <span>Repository Scope: <strong>Over 240 Codified SAP Procedures</strong></span>
                <span className="text-blue-700 font-bold font-mono">Zero Knowledge Silos</span>
              </div>
            </div>

            {/* Right 4 Cols: Compact Runbook Image */}
            <div className="lg:col-span-4 rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white flex flex-col justify-between">
              <div className="h-52 sm:h-56 relative overflow-hidden group">
                <img
                  src="/images/application-support/app-support-runbooks.jpg"
                  alt="Codified Enterprise SAP Runbook Knowledge Mesh"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono text-blue-300 font-bold uppercase block">
                    KNOWLEDGE MESH
                  </span>
                  <span className="text-sm font-bold">Standard Operating Procedures</span>
                </div>
              </div>
              <div className="p-4 text-xs text-slate-600 flex items-center justify-between">
                <span>Self-Service Library</span>
                <span className="text-emerald-700 font-mono font-bold">Searchable</span>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Runbook List */}
            <div className="lg:col-span-5 space-y-3">
              {runbooks.map((rb, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveRunbook(idx)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    activeRunbook === idx
                      ? 'bg-blue-50 border-blue-500 shadow-sm ring-1 ring-blue-500/30'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-blue-700">{rb.code}</span>
                    <span className="text-[10px] font-mono text-slate-500">{rb.module}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {rb.title}
                  </h4>
                </button>
              ))}
            </div>

            {/* Runbook Step-by-Step Viewer */}
            <div className="lg:col-span-7 p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                  VERIFIED RUNBOOK &bull; {runbooks[activeRunbook].code}
                </span>
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Standard Operating Procedure
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {runbooks[activeRunbook].title}
              </h3>

              <div className="space-y-2.5 pt-1">
                {runbooks[activeRunbook].steps.map((st, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                      {st}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: SHIFT-LEFT SUPPORT OPTIMIZATION & FUNNEL FLOWCHART
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
              Support Optimization
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The "Shift-Left" Support Transformation Model
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              By packaging recurring developer solutions into automated self-service tools and first-tier checklists, we systematically lower resolution times, prevent repeat incidents, and lower operating costs.
            </p>
          </div>

          {/* INTERACTIVE SHIFT-LEFT FUNNEL FLOWCHART + COMPACT IMAGE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
            
            {/* Left 8 Cols: Shift-Left Interactive Funnel */}
            <div className="lg:col-span-8 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                    Shift-Left Defect Elimination Funnel
                  </span>
                  <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    -40% Ticket Escalations
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                  {shiftTiers.map((funnel, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveShiftTier(idx)}
                      className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                        activeShiftTier === idx
                          ? 'bg-blue-50 border-blue-500 shadow-xs ring-1 ring-blue-500/20'
                          : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span className="text-[10px] font-mono text-blue-700 font-bold block mb-1">
                        Tier {idx + 1}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-2 leading-tight">
                        {funnel.tier.split(' ')[0]} {funnel.tier.split(' ')[1] || ''}
                      </h4>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Funnel Stage Detail */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900">
                    {shiftTiers[activeShiftTier].tier}
                  </h3>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    {shiftTiers[activeShiftTier].impact}
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {shiftTiers[activeShiftTier].action}
                </p>
              </div>
            </div>

            {/* Right 4 Cols: Compact Image Card */}
            <div className="lg:col-span-4 rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white flex flex-col justify-between">
              <div className="h-52 sm:h-56 relative overflow-hidden group">
                <img
                  src="/images/application-support/app-support-shift-left.jpg"
                  alt="Shift-Left Application Support Optimization and In-App Guided Help"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono text-blue-300 font-bold uppercase block">
                    SHIFT-LEFT
                  </span>
                  <span className="text-sm font-bold">Proactive Defect Reduction</span>
                </div>
              </div>
              <div className="p-4 text-xs text-slate-600 flex items-center justify-between">
                <span>Autonomous Help</span>
                <span className="text-emerald-700 font-mono font-bold">Sub-Minute</span>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {shiftTiers.map((funnel, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition-all">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-700 block mb-1">
                    {funnel.shift}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {funnel.tier}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans mb-3">
                    {funnel.action}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 font-mono text-xs text-emerald-700 font-bold">
                  {funnel.impact}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Advisory Suite Crosslink Navigation */}
      <AdvisorySuiteFooterCrosslinks activeServiceId="application-support" />

      {/* =========================================================================
          FINAL CALL TO ACTION
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest block bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full w-fit mx-auto">
            USER PRODUCTIVITY &bull; 99.8% TICKET RESOLUTION RATE &bull; GLOBAL DESK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Stop Daily Transactional Friction for Your Business Teams
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Give your employees direct access to senior functional specialists who resolve errors quickly, provide step-by-step guidance, and eliminate repeated system bottlenecks.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenContact && onOpenContact('Application Support Services')}
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Support Assessment</span>
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
