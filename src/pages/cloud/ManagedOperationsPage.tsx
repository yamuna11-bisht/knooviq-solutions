import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  ChevronDown,
  ChevronUp,
  Shield,
  Activity,
  Server,
  Zap,
  Lock,
  Database,
  BarChart3,
  Network,
  Clock,
  AlertTriangle,
  FileCheck,
  Headphones
} from 'lucide-react';
import { CloudOperationsHero } from '../../components/cloud/CloudOperationsHero';
import { RelatedCloudServices } from '../../components/cloud/RelatedCloudServices';
import { CloudConsultationCTA } from '../../components/cloud/CloudConsultationCTA';

interface ChildPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const ManagedOperationsPage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeTier, setActiveTier] = useState<number>(0);
  const [activePhase, setActivePhase] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'IT Operations & Managed Operations (ITSM & AIOps) | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const tabParam = searchParams.get('tab');
    if (tabParam === 'infrastructure') setActiveTab(0);
    else if (tabParam === 'service-management') setActiveTab(1);
    else if (tabParam === 'incident') setActiveTab(2);
    else if (tabParam === 'problem') setActiveTab(3);
    else if (tabParam === 'change') setActiveTab(4);
  }, [searchParams]);

  const managedOpsPillars = [
    {
      id: 'infrastructure',
      title: 'Infrastructure Operations & 24/7 NOC',
      badge: '24×7×365 NOC',
      subtitle: 'Proactive round-the-clock infrastructure monitoring, automated OS patching, and hardware capacity management.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
      subParts: [
        {
          name: '24x7x365 Global Network Operations Center (NOC)',
          description: 'Follow-the-sun monitoring across multi-cloud and datacenter hardware with continuous synthetic ping and telemetry checks.',
          spec: '99.99% infrastructure availability monitoring with 5-minute initial alert triage'
        },
        {
          name: 'Automated OS Patching & Vulnerability Remediation',
          description: 'Centralized patch orchestration across Linux and Windows fleets utilizing Azure Update Manager and AWS Systems Manager.',
          spec: 'Zero critical CVE exposure older than 14 days across all managed servers'
        },
        {
          name: 'Backup Automation & Integrity Verification',
          description: 'Immutable snapshot schedules, air-gapped cross-region vaults, and automated non-disruptive restore validation drills.',
          spec: '100% verified backup restore rate with automated weekly sandbox testing'
        },
        {
          name: 'Configuration Drift Detection & Enforcement',
          description: 'Automated Ansible and Terraform controllers continuously detecting unauthorized manual changes and reverting to code state.',
          spec: 'Instant remediation of unauthorized security group or port configuration drifts'
        }
      ]
    },
    {
      id: 'service-management',
      title: 'IT Service Management (ITSM ITIL v4)',
      badge: 'ITIL v4 ALIGNED',
      subtitle: 'Enterprise service desk, ServiceNow integration, automated service catalog, and SLA compliance.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
      subParts: [
        {
          name: 'Enterprise Service Desk (Tier-1 to Tier-3)',
          description: 'Multi-channel omnichannel service desk (Email, Teams, Slack, ServiceNow Portal) providing 24/7 user and technical support.',
          spec: 'First Contact Resolution (FCR) rate above 78% on routine enterprise requests'
        },
        {
          name: 'Automated Service Catalog & Provisioning',
          description: 'Self-service catalog for access provisioning, developer sandbox creation, and hardware requests with approval routing.',
          spec: 'Turnaround time reduced from 5 business days to under 15 minutes'
        },
        {
          name: 'Service Level Agreement (SLA) Governance',
          description: 'Real-time dashboard tracking Response SLAs, Resolution SLAs, and contractual Operational Level Agreements (OLAs).',
          spec: '99.5%+ contractual SLA compliance across P1, P2, P3, and P4 tickets'
        },
        {
          name: 'ServiceNow & Jira Service Management Mesh',
          description: 'Bi-directional synchronization between enterprise ITSM platforms, cloud alert webhooks, and engineering backlogs.',
          spec: 'Automated CMDB synchronization reflecting live cloud asset state in real time'
        }
      ]
    },
    {
      id: 'incident',
      title: 'Incident Management & War-Room Orchestration',
      badge: '15-MIN MTTR',
      subtitle: 'Rapid incident triage, automated P1/P2 executive war-rooms, and real-time stakeholder communication.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80',
      subParts: [
        {
          name: 'Automated P1/P2 War-Room Mobilization',
          description: 'Instant conference bridge creation, PagerDuty on-call paging, and incident commander assignment within 3 minutes.',
          spec: 'Mean Time to Mobilize under 180 seconds for critical production outages'
        },
        {
          name: 'AIOps Event Correlation & Root-Cause Triage',
          description: 'ML algorithms grouping cascading alerts from networks, storage, and databases to identify the true root-cause trigger.',
          spec: '70% reduction in Mean Time to Repair (MTTR) during complex infrastructure outages'
        },
        {
          name: 'Executive & Customer Stakeholder Communications',
          description: 'Automated status page updates, executive email broadcasts, and transparent customer incident tracking bulletins.',
          spec: 'Consistent status updates dispatched every 30 minutes during active outages'
        },
        {
          name: 'Incident Severity Matrix & Escalation Paths',
          description: 'Strict priority definitions (P1 Critical Outage to P4 Minor Issue) ensuring appropriate engineering firepower allocation.',
          spec: 'Elimination of priority inflation and clear contractual SLA escalation gates'
        }
      ]
    },
    {
      id: 'problem',
      title: 'Problem Management & Root Cause Analysis (RCA)',
      badge: 'ZERO RECURRENCE',
      subtitle: 'Eliminating recurring incidents through systematic 5-Whys, Ishikawa fishbone diagrams, and preventive actions.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
      subParts: [
        {
          name: 'Systematic Root Cause Analysis (RCA) Methodology',
          description: 'Structured investigation utilizing 5-Whys, fault tree analysis, and technical log forensics to identify root causes.',
          spec: 'Formal blameless RCA document published within 48 hours of incident resolution'
        },
        {
          name: 'Known Error Database (KEDB) Management',
          description: 'Curated repository of documented workarounds and temporary fixes accessible to Tier-1 and Tier-2 service engineers.',
          spec: 'Immediate 40% reduction in resolution time for documented known error signatures'
        },
        {
          name: 'Proactive Problem Identification & Trend Analysis',
          description: 'Weekly statistical reviews identifying chronic memory leaks, unstable disk controllers, or fragile microservice endpoints.',
          spec: 'Proactive remediation eliminating issues before they cause business outages'
        },
        {
          name: 'Preventive Action Tracking & Verification',
          description: 'Tracking long-term engineering bug fixes and architectural enhancements to completion with executive accountability.',
          spec: 'Zero recurrence of identified root causes within a 12-month trailing window'
        }
      ]
    },
    {
      id: 'change',
      title: 'Change Advisory Board (CAB) & Change Management',
      badge: 'CHANGE RISK CONTROL',
      subtitle: 'Minimizing change-related incidents with risk scoring, impact simulation, and automated standard change approvals.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
      subParts: [
        {
          name: 'Automated Change Risk Scoring & Simulation',
          description: 'Machine learning algorithms scoring proposed changes based on past failure rates, deployment size, and dependencies.',
          spec: 'Identification of high-risk changes prior to approval by Change Advisory Boards'
        },
        {
          name: 'Standard Change Fast-Track Automation',
          description: 'Pre-approved, automated changes (such as routine patching or certificate renewals) executed via CI/CD without CAB friction.',
          spec: '80% of routine changes bypass manual CAB meetings while maintaining compliance'
        },
        {
          name: 'Comprehensive Rollback Plan Requirements',
          description: 'Mandatory automated rollback scripts and testing verification required for all Normal and Emergency change requests.',
          spec: 'Sub-10-minute rollback window guaranteed for any change failing post-cutover validation'
        },
        {
          name: 'Change Freeze Windows & Blackout Governance',
          description: 'Automated change restriction enforcement during fiscal year-ends, retail peak sales seasons, and major holidays.',
          spec: 'Zero unauthorized changes deployed during declared enterprise blackout periods'
        }
      ]
    }
  ];

  const managedOpsArchitectureTiers = [
    {
      title: 'Tier 01: Multi-Channel Service Portal & Ingestion Hub',
      desc: 'Omnichannel communication, ServiceNow integration, and unified user catalog request management.',
      components: [
        { name: 'ServiceNow / Jira ITSM Gateway', role: 'Centralized ticketing hub managing incident, problem, and change records' },
        { name: 'Self-Service Catalog & SSO Portal', role: 'Automated role-based access request and provisioning workflows' },
        { name: 'Slack & Teams ChatOps Integration', role: 'Real-time alerting, incident approvals, and war-room collaboration' },
        { name: 'Executive Status Page & Telemetry', role: 'Transparent real-time reporting on system health and scheduled maintenance' }
      ]
    },
    {
      title: 'Tier 02: AIOps Event Ingestion & Alert Correlation Matrix',
      desc: 'Machine learning event correlation, intelligent deduplication, and automated priority routing.',
      components: [
        { name: 'AIOps Event Aggregation Engine', role: 'Ingests alerts from cloud providers, APM agents, and hardware sensors' },
        { name: 'Alert Deduplication & Correlation Filter', role: 'Reduces thousands of raw alerts into single unified incident workstreams' },
        { name: 'Dynamic CMDB Configuration Mesh', role: 'Real-time topology mapping correlating alerts with impacted business services' },
        { name: 'Intelligent On-Call Escalation Router', role: 'Directs critical P1/P2 incidents to responsible subject matter experts' }
      ]
    },
    {
      title: 'Tier 03: Automated Orchestration & Runbook Execution',
      desc: 'Automated infrastructure patching, self-healing scripts, and configuration drift remediation.',
      components: [
        { name: 'Ansible & Systems Manager Engine', role: 'Automates OS patching, package updates, and compliance hardening' },
        { name: 'Automated Disaster Recovery Runner', role: 'Executes scripted database failover and DNS traffic shifts' },
        { name: 'Self-Healing Webhook Handlers', role: 'Restarts stalled services and purges temporary caches without human touch' },
        { name: 'Immutable Vault Backup Controllers', role: 'Enforces air-gapped backup snapshot schedules and validates restore tests' }
      ]
    },
    {
      title: 'Tier 04: Governance, Auditing & ITIL v4 Reporting',
      desc: 'Compliance posture auditing, SLA performance tracking, and post-incident root cause libraries.',
      components: [
        { name: 'SLA Performance & OLA Dashboards', role: 'Real-time calculation of response and resolution contract metrics' },
        { name: 'Known Error Database (KEDB) Repository', role: 'Curated knowledge base of verified workarounds for recurring errors' },
        { name: 'CAB Audit Trail & Compliance Vault', role: 'Immutable records of change approvals, risk scores, and cutover logs' },
        { name: 'Continual Service Improvement (CSI) Tracker', role: 'Tracks long-term technical debt reduction and infrastructure upgrades' }
      ]
    }
  ];

  const managedOpsLifecyclePhases = [
    {
      stage: 'Phase 01',
      title: 'Operational Maturity Audit & CMDB Discovery',
      badge: 'AUDIT & CMDB',
      desc: 'Evaluating current ticket volumes, MTTR benchmarks, CMDB accuracy, and operational bottlenecks.',
      deliverables: ['ITIL Maturity Benchmark Scorecard', 'CMDB Asset Synchronization Plan', 'SLA / OLA Baseline Matrix'],
      gate: 'Audit Gate: Accurate baseline of operational cost and ticket volume verified'
    },
    {
      stage: 'Phase 02',
      title: 'ITSM Tooling & AIOps Ingestion Setup',
      badge: 'TOOLING SETUP',
      desc: 'Integrating ServiceNow / Jira Service Management with cloud alert streams and configuring AIOps event correlation.',
      deliverables: ['ServiceNow Integration Blueprint', 'AIOps Alert Correlation Rules', 'ChatOps Collaboration Mesh'],
      gate: 'Integration Gate: End-to-end alert-to-ticket lifecycle validated with zero missed events'
    },
    {
      stage: 'Phase 03',
      title: 'Runbook Automation & Knowledge Base Transition',
      badge: 'RUNBOOK ENGINE',
      desc: 'Documenting Standard Operating Procedures (SOPs), populating KEDB workarounds, and scripting automated self-healing.',
      deliverables: ['Automated Patching Runbooks', 'Known Error Database (KEDB)', 'Self-Healing Webhook Scripts'],
      gate: 'Transition Gate: 100% of critical infrastructure services covered by verified runbooks'
    },
    {
      stage: 'Phase 04',
      title: 'Shadow Operations & Parallel Support Cutover',
      badge: 'PARALLEL CUTOVER',
      desc: 'Running 30 days of parallel shadow operations to validate war-room mobilization and resolution times.',
      deliverables: ['Shadow Operations Performance Report', 'War-Room Drill Sign-Off', 'SLA Compliance Validation'],
      gate: 'Cutover Gate: 99.5%+ SLA compliance achieved during 30-day shadow period'
    },
    {
      stage: 'Phase 05',
      title: '24/7 Steady-State Managed Operations & CSI',
      badge: 'STEADY STATE',
      desc: 'Transitioning to 24x7 global support with monthly Problem Management reviews and Continual Service Improvement.',
      deliverables: ['24x7 NOC Steady-State Operations', 'Monthly Executive Operations Reviews', 'Quarterly CSI Action Plan'],
      gate: 'Steady-State Gate: Realization of 70%+ MTTR reduction and 99.99% infrastructure uptime'
    }
  ];

  const managedOpsFaqs = [
    {
      question: 'What is the service scope of KNOOVIQ’s 24x7 Managed Operations & NOC?',
      answer: 'Our 24x7 Managed Operations covers full-stack infrastructure management across multi-cloud (AWS, Azure, GCP) and hybrid datacenters. Services include continuous event monitoring, automated OS patching, backup management, network troubleshooting, P1/P2 war-room mobilization, and ITIL v4 aligned incident/change management.'
    },
    {
      question: 'How do you achieve an average 15-minute MTTR for critical incidents?',
      answer: 'We leverage AIOps event correlation to eliminate alert storms and pinpoint root causes instantly. For critical P1 incidents, automated conference bridges and ChatOps channels mobilize incident commanders and engineers in under 3 minutes. Automated runbooks execute pre-approved remediation scripts, dramatically reducing resolution times.'
    },
    {
      question: 'How does Problem Management differ from Incident Management in your framework?',
      answer: 'Incident Management is focused on restoring service as quickly as possible (treating the symptom). Problem Management focuses on finding the underlying architectural root cause (preventing future occurrences). Our dedicated problem managers run 5-Whys, fishbone analyses, and track permanent code and configuration fixes to eliminate recurrence.'
    },
    {
      question: 'How do you balance Change Management governance with agile fast-paced deployments?',
      answer: 'We automate standard changes. Routine, low-risk deployments that pass automated CI/CD security and regression testing are categorized as Standard Changes and execute without manual Change Advisory Board (CAB) delays. Only high-risk architectural changes require CAB review, where AI risk scoring assists the board in making rapid decisions.'
    },
    {
      question: 'Can KNOOVIQ integrate with our existing ServiceNow or Jira Service Management instances?',
      answer: 'Yes. We integrate natively with your existing ServiceNow, Jira Service Management, Freshservice, or Remedy systems. We establish secure bi-directional API synchronization so tickets, configuration items (CMDB), and audit logs stay unified in your corporate record system.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* SECTION 01: HERO */}
      <CloudOperationsHero
        badgeText="MANAGED OPERATIONS & ITSM PRACTICE"
        badgeIcon={<ShieldCheck className="w-3.5 h-3.5 text-[#00A3E0]" />}
        heading="IT Operations & Managed Operations"
        headline="Enterprise 24/7 NOC, ITIL v4 Service Management & AIOps Orchestration"
        description="Deliver uninterrupted enterprise operations with 24x7x365 proactive monitoring, 15-minute MTTR incident war rooms, ITIL v4 service desk governance, automated OS patching, and zero-downtime change management."
        primaryCtaText="Explore Managed Operations"
        primaryCtaHref="#capabilities"
        secondaryCtaText="Consult Operations Lead"
        secondaryCtaAction={() => onOpenContact && onOpenContact('Managed Operations & ITSM')}
        currentPage="IT Operations & Managed Operations"
        heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
        stats={[
          { label: "NOC Coverage", value: "24x7x365", subtext: "Follow-The-Sun Ops" },
          { label: "Target MTTR", value: "<15 Mins", subtext: "P1 Incident Resolution" },
          { label: "SLA Adherence", value: "99.5%+", subtext: "ITIL v4 Governance" },
          { label: "Patch Automation", value: "100%", subtext: "Zero-Downtime Windows" }
        ]}
      />

      {/* SECTION 02: 5 CORE PILLARS */}
      <section id="capabilities" className="py-20 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 02 &bull; MANAGED OPERATIONS CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Five Core Managed Ops Pillars (Section-within-Section)
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Select any capability pillar below to review its ITIL v4 standards, automation metrics, and enterprise deliverables.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {managedOpsPillars.map((pillar, idx) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`p-3 sm:p-4 rounded-2xl text-left transition-all border cursor-pointer ${
                  activeTab === idx
                    ? 'bg-white dark:bg-[#0B1528] border-[#00A3E0] shadow-lg shadow-[#00A3E0]/15'
                    : 'bg-white/60 dark:bg-[#070E1E] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                    activeTab === idx ? 'text-[#00A3E0] dark:text-cyan-400' : 'text-slate-400'
                  }`}>
                    PILLAR 0{idx + 1}
                  </span>
                  {activeTab === idx && (
                    <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />
                  )}
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1 line-clamp-1">
                  {pillar.title}
                </h3>
              </button>
            ))}
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-xl space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold tracking-wider">
                  {managedOpsPillars[activeTab].badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  {managedOpsPillars[activeTab].title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {managedOpsPillars[activeTab].subtitle}
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg aspect-video">
                  <img
                    src={managedOpsPillars[activeTab].image}
                    alt={managedOpsPillars[activeTab].title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium backdrop-blur-md bg-black/40 p-2 rounded-lg border border-white/20">
                    ITIL v4 Master Certified &bull; KNOOVIQ Managed Operations Practice
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 dark:border-white/10 pt-6">
              <h4 className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400 uppercase tracking-wider mb-4">
                OPERATIONAL CONTROLS & SLA STANDARDS:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {managedOpsPillars[activeTab].subParts.map((sub, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200 dark:border-white/5 space-y-2 hover:border-[#00A3E0]/40 transition-colors"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                          {sub.name}
                        </h5>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                          {sub.description}
                        </p>
                        <div className="mt-2.5 pt-2 border-t border-slate-200/60 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-cyan-700 dark:text-cyan-300 font-semibold">
                          <Activity className="w-3 h-3 text-[#00A3E0]" />
                          <span>SPEC: {sub.spec}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Interested in evaluating 24x7 NOC coverage or ServiceNow ITIL integration?
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {activeTab === 0 && (
                  <Link
                    to="/cloud-operations/infrastructure-operations"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/15 text-white text-xs font-bold transition-all border border-slate-700 dark:border-white/20"
                  >
                    <span>Dedicated Infrastructure Operations Page</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00A3E0]" />
                  </Link>
                )}
                {activeTab === 1 && (
                  <Link
                    to="/cloud-operations/service-management"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/15 text-white text-xs font-bold transition-all border border-slate-700 dark:border-white/20"
                  >
                    <span>Dedicated Service Management Page</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00A3E0]" />
                  </Link>
                )}
                {activeTab === 2 && (
                  <Link
                    to="/cloud-operations/incident-management"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/15 text-white text-xs font-bold transition-all border border-slate-700 dark:border-white/20"
                  >
                    <span>Dedicated Incident Management Page</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00A3E0]" />
                  </Link>
                )}
                {activeTab === 3 && (
                  <Link
                    to="/cloud-operations/problem-management"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/15 text-white text-xs font-bold transition-all border border-slate-700 dark:border-white/20"
                  >
                    <span>Dedicated Problem Management Page</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00A3E0]" />
                  </Link>
                )}
                {activeTab === 4 && (
                  <Link
                    to="/cloud-operations/change-management"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/15 text-white text-xs font-bold transition-all border border-slate-700 dark:border-white/20"
                  >
                    <span>Dedicated Change Management Page</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00A3E0]" />
                  </Link>
                )}
                <button
                  onClick={() => onOpenContact && onOpenContact(`Managed Ops: ${managedOpsPillars[activeTab].title}`)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00A3E0] hover:bg-[#0087ba] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  <span>Request Managed Operations Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 03: ARCHITECTURAL BLUEPRINT */}
      <section id="architecture" className="py-20 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 03 &bull; ITIL v4 OPERATIONAL FABRIC</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              4-Tier ITIL v4 & AIOps Operational Architecture
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              End-to-end operational framework integrating user service portals, AIOps correlation engines, automated runbooks, and audit vaults.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {managedOpsArchitectureTiers.map((tier, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTier(idx)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                  activeTier === idx
                    ? 'bg-[#00A3E0] text-white border-[#00A3E0] shadow-lg shadow-[#00A3E0]/20'
                    : 'bg-slate-50 dark:bg-[#0B1528] text-slate-900 dark:text-white border-slate-200 dark:border-white/10 hover:border-[#00A3E0]/40'
                }`}
              >
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider opacity-80">
                  TIER 0{idx + 1}
                </div>
                <div className="text-xs font-black mt-1 line-clamp-1">
                  {tier.title.split(':')[1] || tier.title}
                </div>
              </button>
            ))}
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400 uppercase tracking-widest">
                ACTIVE OPERATIONAL TIER SPECIFICATION
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {managedOpsArchitectureTiers[activeTier].title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                {managedOpsArchitectureTiers[activeTier].desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
              {managedOpsArchitectureTiers[activeTier].components.map((c, cIdx) => (
                <div
                  key={cIdx}
                  className="p-4 rounded-xl bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-white/10 space-y-1 hover:border-[#00A3E0]/40 transition-colors"
                >
                  <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                    {c.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 pl-3.5">
                    {c.role}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 04: TRANSFORMATION METHODOLOGY */}
      <section id="methodology" className="py-20 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 04 &bull; OPERATIONAL TRANSFORMATION ROADMAP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              5-Phase Managed Operations Transition Engine
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Structured operational onboarding ensuring zero knowledge leakage, parallel shadow testing, and steady-state SLAs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
            {managedOpsLifecyclePhases.map((phase, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`p-3 sm:p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                  activePhase === idx
                    ? 'bg-white dark:bg-[#0B1528] border-[#00A3E0] shadow-md ring-2 ring-[#00A3E0]/20'
                    : 'bg-white/60 dark:bg-[#070E1E] border-slate-200 dark:border-white/10 hover:border-slate-300'
                }`}
              >
                <span className={`text-[10px] font-mono font-bold uppercase ${
                  activePhase === idx ? 'text-[#00A3E0] dark:text-cyan-400' : 'text-slate-400'
                }`}>
                  {phase.stage}
                </span>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-1 line-clamp-1">
                  {phase.badge}
                </div>
              </button>
            ))}
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400 uppercase tracking-widest">
                  {managedOpsLifecyclePhases[activePhase].stage} &bull; {managedOpsLifecyclePhases[activePhase].badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {managedOpsLifecyclePhases[activePhase].title}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold">
                ITIL v4 CERTIFIED
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {managedOpsLifecyclePhases[activePhase].desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-white/10">
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  VERIFIED DELIVERABLES:
                </h4>
                <ul className="space-y-2">
                  {managedOpsLifecyclePhases[activePhase].deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-500/20 space-y-2">
                <div className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  <span>TRANSITION QUALITY GATE:</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                  {managedOpsLifecyclePhases[activePhase].gate}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 05: METRICS & ROI */}
      <section id="roi-metrics" className="py-20 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 05 &bull; BENCHMARKS & VALUE REALIZATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Quantifiable Managed Operations Outcomes
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Demonstrated efficiency improvements and risk reductions achieved for global client organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stat: '< 15 Mins',
                title: 'Mean Time to Repair (MTTR)',
                desc: 'Rapid P1/P2 mobilization and automated AIOps event triage restoring business operations quickly.'
              },
              {
                stat: '99.5%+',
                title: 'SLA Contract Compliance',
                desc: 'Strict adherence to contractual response and resolution time targets across all service tiers.'
              },
              {
                stat: '78%',
                title: 'First Contact Resolution',
                desc: 'Empowered service desk engineers resolving common user requests without secondary escalations.'
              },
              {
                stat: 'Zero Failure',
                title: 'Change Governance Record',
                desc: 'Automated change risk assessment and mandatory automated rollback plans eliminating change outages.'
              }
            ].map((metric, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-3 hover:border-[#00A3E0]/40 transition-colors"
              >
                <div className="text-3xl font-black text-[#00A3E0] dark:text-cyan-400 font-mono">
                  {metric.stat}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {metric.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 06: FAQS */}
      <section id="faqs" className="py-20 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 06 &bull; OPERATIONS KNOWLEDGE BASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Operations Questions
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Clear answers on 24x7 NOC onboarding, ServiceNow integration, and SLA guarantees.
            </p>
          </div>

          <div className="space-y-3">
            {managedOpsFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#00A3E0] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 07: EXECUTIVE CTA & RELATED SERVICES */}
      <CloudConsultationCTA
        onOpenContact={onOpenContact}
        badge="MANAGED OPERATIONS STRATEGY"
        title="Ready to Elevate Your IT Operations to 24/7 Enterprise Standards?"
        description="Connect with our Director of Managed Operations to review your current incident volumes, discuss follow-the-sun NOC coverage, and customize contractual SLA commitments."
        primaryBtnText="Schedule Operations Workshop"
        secondaryBtnText="Download ITIL v4 Runbook Template"
      />

      <RelatedCloudServices currentPath="/cloud-operations/managed-operations" />

    </div>
  );
};
