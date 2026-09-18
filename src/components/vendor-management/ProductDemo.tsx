import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Mail, 
  UserCheck, 
  FileUp, 
  CheckCircle, 
  GitPullRequest, 
  MessageSquareShare, 
  BarChart3,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Check,
  Clock,
  Sparkles
} from 'lucide-react';

interface ProductDemoProps {
  onOpenContact?: (topic?: string) => void;
}

interface WorkflowStep {
  id: number;
  title: string;
  badge: string;
  shortDesc: string;
  icon: React.ElementType;
  screenTitle: string;
  screenSubtitle: string;
  actionText: string;
  statusBadge: string;
  metrics: { label: string; value: string }[];
  details: string[];
}

export const ProductDemo: React.FC<ProductDemoProps> = ({ onOpenContact }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const steps: WorkflowStep[] = [
    {
      id: 1,
      title: 'Vendor Invitation',
      badge: 'Step 01',
      shortDesc: 'Automated email invitation with unique encrypted onboarding link',
      icon: Mail,
      screenTitle: 'Invitation Dispatcher & Token Generation',
      screenSubtitle: 'Target Supplier: ABC Technologies Pvt. Ltd. (Procurement Category: Raw Silicon & Components)',
      actionText: 'Dispatch Magic Link & Token',
      statusBadge: 'Delivered (0.4s)',
      metrics: [
        { label: 'Token Expiry', value: '72 Hours' },
        { label: 'Encryption', value: 'SHA-256' },
        { label: 'Link Status', value: 'Active' },
      ],
      details: [
        'Secure 1-time token generated via SAP API',
        'Customized corporate onboarding terms embedded',
        'Automatic bounce and open-rate telemetry'
      ]
    },
    {
      id: 2,
      title: 'Vendor Registration',
      badge: 'Step 02',
      shortDesc: 'Self-service portal for business data, PAN, GSTIN & banking details',
      icon: UserCheck,
      screenTitle: 'Supplier Self-Service Onboarding Portal',
      screenSubtitle: 'Vendor authenticated via OTP • GSTIN & Master Data Ingestion',
      actionText: 'Submit Business Credentials',
      statusBadge: 'Auto-Prefilled',
      metrics: [
        { label: 'Fields Validated', value: '28 / 28' },
        { label: 'Vendor Type', value: 'Manufacturer' },
        { label: 'Bank Validation', value: 'Pennyless Match' },
      ],
      details: [
        'Real-time MCA and GSTIN master data lookup',
        'Penny-drop automated bank account verification',
        'MSME classification auto-categorization'
      ]
    },
    {
      id: 3,
      title: 'Document Upload',
      badge: 'Step 03',
      shortDesc: 'Intelligent document capture with OCR, expiry detection & tamper check',
      icon: FileUp,
      screenTitle: 'Intelligent Document Repository & OCR Engine',
      screenSubtitle: 'Processing ISO 9001, MSME Certificate, Cancelled Cheque & Tax Clearances',
      actionText: 'Run AI OCR Extraction',
      statusBadge: '100% Extracted',
      metrics: [
        { label: 'OCR Confidence', value: '99.4%' },
        { label: 'Tamper Check', value: 'Verified Clear' },
        { label: 'Expiry Tracked', value: '31-Dec-2027' },
      ],
      details: [
        'Automatic extraction of tax IDs and incorporation dates',
        'Digital signature validation on all uploaded PDFs',
        'Expiration warning triggers scheduled 30 days prior'
      ]
    },
    {
      id: 4,
      title: 'Verification & Compliance',
      badge: 'Step 04',
      shortDesc: 'Automated 3-way match, sanctions list screening and risk classification',
      icon: CheckCircle,
      screenTitle: 'Automated Risk & Compliance Engine',
      screenSubtitle: 'Real-time validation against PEP, OFAC, MCA default lists & GST compliance',
      actionText: 'Execute Compliance Assessment',
      statusBadge: 'Low Risk (Score 96)',
      metrics: [
        { label: 'GST Return Filing', value: '100% Consistent' },
        { label: 'Sanctions Check', value: 'Clean Record' },
        { label: 'Credit Health', value: 'Crisil A+' },
      ],
      details: [
        'Direct integration with GSTN for return filing history',
        'Automated 4-tier risk categorization (Low / Medium / High)',
        'Legal compliance checklist automated sign-off'
      ]
    },
    {
      id: 5,
      title: 'Approval Workflow',
      badge: 'Step 05',
      shortDesc: 'Configurable multi-tier approval routing across Procurement, Finance & Legal',
      icon: GitPullRequest,
      screenTitle: 'Multi-Stakeholder Approval Orchestration',
      screenSubtitle: 'Workflow: Procurement Lead → Tax Auditor → CFO Authorization',
      actionText: 'Authorize Vendor Creation',
      statusBadge: 'Pending Finance Final',
      metrics: [
        { label: 'Procurement Sign-off', value: 'Approved' },
        { label: 'Legal Review', value: 'Passed' },
        { label: 'SLA Remaining', value: '4 Hours' },
      ],
      details: [
        'Dynamic routing based on vendor category and spend threshold',
        'Email and mobile one-click approval mechanisms',
        'Complete timestamped audit trail stored on SAP ledger'
      ]
    },
    {
      id: 6,
      title: 'Vendor Collaboration',
      badge: 'Step 06',
      shortDesc: 'Real-time PO exchange, digital dispatch confirmation & invoice disputes',
      icon: MessageSquareShare,
      screenTitle: 'Supplier Collaboration & Transaction Hub',
      screenSubtitle: 'Direct sync with SAP S/4HANA Purchase Orders & E-Invoicing',
      actionText: 'Acknowledge PO #88392',
      statusBadge: 'PO Confirmed',
      metrics: [
        { label: 'Active POs', value: '12 Active' },
        { label: 'Invoice Match', value: '2-Way Clean' },
        { label: 'Dispute Count', value: '0 Open' },
      ],
      details: [
        'Direct PO download and Advanced Shipping Notice (ASN) dispatch',
        'Instant messaging between vendor and category buyer',
        'Real-time invoice status visibility prevents payment inquiries'
      ]
    },
    {
      id: 7,
      title: 'Performance Monitoring',
      badge: 'Step 07',
      shortDesc: 'Continuous vendor evaluation, SLA tracking and automated supplier scorecards',
      icon: BarChart3,
      screenTitle: 'Vendor Performance & Scorecard Analytics',
      screenSubtitle: 'Quarterly review metrics, OTIF delivery rate, rejection and compliance',
      actionText: 'Generate Tier-1 Scorecard',
      statusBadge: 'Elite Grade (94%)',
      metrics: [
        { label: 'OTIF (On-Time)', value: '96.2%' },
        { label: 'Quality Score', value: '98.5%' },
        { label: 'Cost Competitiveness', value: '91.0%' },
      ],
      details: [
        'Automated OTIF (On-Time In-Full) rating from SAP Goods Receipts',
        'Continuous quality rejection rate tracking',
        'Annual contract renegotiation triggers based on score'
      ]
    }
  ];

  // Auto progression every 5 seconds if playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const currentStep = steps[activeStepIndex];

  return (
    <section id="vendor-demo" className="py-20 md:py-28 bg-white dark:bg-[#070E1E] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 dark:bg-cyan-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/60 text-xs font-bold uppercase tracking-wider text-[#0052CC] dark:text-[#00A3E0]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Workflow Walkthrough</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            How the Modern Vendor Lifecycle Operates
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            From initial invitation to automated enterprise performance scorecards—experience the seamless 7-stage digital workflow.
          </p>
        </div>

        {/* Step Navigation Pill Bar */}
        <div className="flex items-center justify-between pb-3 mb-6 overflow-x-auto scrollbar-none border-b border-slate-200 dark:border-white/10 gap-2">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.id}
                onClick={() => {
                  setActiveStepIndex(idx);
                  setIsPlaying(false);
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-[#0052CC] text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-400/20'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#00A3E0]'}`} />
                <span>{step.id}. {step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Laptop / Browser UI Simulation Frame */}
        <div className="relative mx-auto max-w-5xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden text-slate-100">
          
          {/* Browser Header Bar */}
          <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="hidden sm:flex items-center gap-1.5 ml-4 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
                <span className="text-emerald-400">https://</span>
                <span>enterprise.knooviq.com/vendor-portal/workflow/stage-{activeStepIndex + 1}</span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors cursor-pointer"
                title={isPlaying ? 'Pause auto walkthrough' : 'Resume auto walkthrough'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
                <span className="text-[11px]">{isPlaying ? 'Pause' : 'Play'}</span>
              </button>

              <button
                onClick={() => {
                  setActiveStepIndex(0);
                  setIsPlaying(true);
                }}
                className="p-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                title="Restart from beginning"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Browser Main Body Canvas */}
          <div className="p-6 sm:p-8 min-h-[460px] flex flex-col justify-between bg-gradient-to-b from-slate-900 via-[#0A1931] to-slate-950">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {/* Top Status & Breadcrumb */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#00A3E0] uppercase tracking-wider">
                        {currentStep.badge} OF 07
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs text-slate-400 font-mono">Module: RAAPYD-VEND-360</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      {currentStep.screenTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                      {currentStep.screenSubtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      {currentStep.statusBadge}
                    </span>
                  </div>
                </div>

                {/* Main Interactive Stage Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Left: Step Details & Highlights */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#00A3E0]" />
                        Active Process Highlights
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                        {currentStep.details.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="w-4 h-4 rounded-full bg-blue-500/20 text-[#00A3E0] flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Operational Action Preview */}
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => onOpenContact?.(`Vendor Demo - ${currentStep.title}`)}
                        className="px-4 py-2.5 rounded-lg bg-[#0052CC] hover:bg-[#0041a3] text-white text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-600/30 cursor-pointer"
                      >
                        <span>{currentStep.actionText}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[11px] text-slate-400">Automated SLA adherence: 99.8%</span>
                    </div>
                  </div>

                  {/* Right: Metrics Cockpit for this step */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Live Telemetry Counters
                    </div>
                    <div className="space-y-2.5">
                      {currentStep.metrics.map((metric, i) => (
                        <div key={i} className="p-3 rounded-lg bg-slate-800/70 border border-slate-700/60 flex items-center justify-between">
                          <span className="text-xs text-slate-400">{metric.label}</span>
                          <span className="text-xs font-bold text-white font-mono">{metric.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-800/40 text-[11px] text-blue-300 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#00A3E0] shrink-0" />
                      <span>SAP S/4HANA Business Partner (BP) automatically synchronized in real-time.</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>

            {/* Browser Bottom Step Timeline Bar */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span>Progress:</span>
                <span className="font-bold text-white">Stage {activeStepIndex + 1} of 7</span>
              </div>
              <div className="flex items-center gap-1.5">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActiveStepIndex(i);
                      setIsPlaying(false);
                    }}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      i === activeStepIndex 
                        ? 'w-8 bg-[#00A3E0]' 
                        : i < activeStepIndex 
                        ? 'w-3 bg-blue-600' 
                        : 'w-3 bg-slate-700'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => {
                  setActiveStepIndex((prev) => (prev + 1) % steps.length);
                  setIsPlaying(false);
                }}
                className="hover:text-white transition-colors flex items-center gap-1 font-semibold text-[#00A3E0] cursor-pointer"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
