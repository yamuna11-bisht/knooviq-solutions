import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LifeBuoy,
  BookOpen,
  Users,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Workflow,
  Eye,
  FileCheck,
  FileText,
  AlertTriangle,
  Boxes,
  Sliders,
  Clock,
  RefreshCw,
  GitFork,
  MessageSquare,
  TrendingUp,
  FolderGit2,
  Share2,
  Inbox,
  UserCheck,
  CheckSquare,
  Sparkles,
  ShieldCheck,
  Building2,
  Maximize2,
  X
} from 'lucide-react';

interface ChildPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const ServiceManagementPage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  const [activeApproachStage, setActiveApproachStage] = useState<number>(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState<boolean>(false);

  useEffect(() => {
    document.title = 'Service Management – Structured IT Services & Governance | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullscreenOpen(false);
      }
    };
    if (isFullscreenOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreenOpen]);

  const handleOpenContact = (topic?: string) => {
    if (onOpenContact) {
      onOpenContact(topic || 'Service Management');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Section 3: Service Delivery Workflow Steps (Overview Diagram)
  const deliveryWorkflowSteps = [
    {
      step: '01',
      title: 'Request Intake & Classification',
      desc: 'Requests received through self-service portals, email, or chat are categorized and tagged with appropriate urgency.',
      icon: Inbox
    },
    {
      step: '02',
      title: 'Triage & Ownership Assignment',
      desc: 'Requests are routed to designated service owners and technical teams based on pre-defined service catalogs.',
      icon: UserCheck
    },
    {
      step: '03',
      title: 'Coordinated Fulfillment & Delivery',
      desc: 'Standard operating procedures guide task execution, dependency approvals, and milestone updates.',
      icon: CheckSquare
    },
    {
      step: '04',
      title: 'Stakeholder Communication & Closure',
      desc: 'Transparent progress updates keep users informed, followed by formal verification and feedback collection.',
      icon: MessageSquare
    },
    {
      step: '05',
      title: 'Knowledge Capture & Refinement',
      desc: 'Resolution details and repeatable workarounds are indexed into the central knowledge base for continuous improvement.',
      icon: BookOpen
    }
  ];

  // Section 4: Operational Challenges Data (5 Challenges)
  const serviceChallenges = [
    {
      id: 'fragmented-requests',
      title: 'Fragmented Service Requests',
      tagline: 'Requests arriving through disconnected channels.',
      description:
        'Requests arriving through disconnected channels—such as informal emails, direct messages, or verbal requests—can make ownership, prioritization, and tracking difficult.',
      icon: GitFork,
      accent: 'text-amber-500 bg-amber-500/10 border-amber-500/20'
    },
    {
      id: 'unclear-responsibilities',
      title: 'Unclear Responsibilities',
      tagline: 'Uncertain ownership and ambiguous escalation paths.',
      description:
        'Uncertain ownership and escalation paths can slow coordination between teams, resulting in request bottlenecks, duplicated efforts, or neglected inquiries.',
      icon: Users,
      accent: 'text-rose-500 bg-rose-500/10 border-rose-500/20'
    },
    {
      id: 'inconsistent-processes',
      title: 'Inconsistent Service Processes',
      tagline: 'Varying handling practices creating uneven experiences.',
      description:
        'Different handling practices and ad-hoc execution across departments can create inconsistent service experiences and unpredictable resolution timelines.',
      icon: Sliders,
      accent: 'text-purple-500 bg-purple-500/10 border-purple-500/20'
    },
    {
      id: 'limited-knowledge',
      title: 'Limited Knowledge Sharing',
      tagline: 'Outdated or scattered documentation hindering reuse.',
      description:
        'Outdated, fragmented, or siloed documentation makes it harder for engineers to reuse proven solutions, onboard new staff, and adhere to established procedures.',
      icon: BookOpen,
      accent: 'text-blue-500 bg-blue-500/10 border-blue-500/20'
    },
    {
      id: 'limited-visibility',
      title: 'Limited Service Visibility',
      tagline: 'Incomplete records complicating service reviews.',
      description:
        'Incomplete service records and lack of centralized reporting make workload prioritization, stakeholder communication, and continuous service reviews more difficult.',
      icon: Eye,
      accent: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20'
    }
  ];

  // Section 5: Core Capabilities Data (5 Distinct Sections)
  const capabilities = [
    {
      id: 'request-management',
      badge: 'CAPABILITY A • SERVICE DESK & INTAKE',
      title: 'Service Request Management',
      tagline: 'Structured request intake, categorization, approval workflows, and status tracking.',
      description:
        'We help organizations implement structured request management workflows that eliminate lost requests. From initial multi-channel intake and automated categorization to approval routing and resolution verification, requests are handled with consistent precision.',
      image: '/images/cloud/service_mgmt_request.png',
      points: [
        'Centralized request portal aggregating inquiries across business units and communication tools',
        'Standardized categorization and severity tagging aligned with pre-agreed service expectations',
        'Automated multi-level approval workflows for software access, hardware, and account provisioning',
        'Transparent status tracking and automated milestone notifications for request originators'
      ]
    },
    {
      id: 'service-catalogue',
      badge: 'CAPABILITY B • SERVICE DEFINITIONS & CATALOGUE',
      title: 'Service Catalogue & Service Delivery',
      tagline: 'Service definitions, request options, service ownership, and clear information.',
      description:
        'A comprehensive service catalogue defines the full spectrum of IT services available across the enterprise. We assist teams in cataloguing offerings, documenting service dependencies, defining ownership, and articulating clear fulfillment procedures for end users.',
      image: '/images/cloud/service_mgmt_catalogue.jpg',
      points: [
        'Clearly structured service listings outlining request prerequisites, options, and estimated fulfillment times',
        'Explicit ownership assignment connecting every catalog item with responsible technical teams',
        'Integration with self-service provisioning pipelines to automate routine standard service fulfillment',
        'Regular catalogue maintenance reviews to retire deprecated offerings and publish new service capabilities'
      ]
    },
    {
      id: 'stakeholder-coordination',
      badge: 'CAPABILITY C • COLLABORATION & EXPECTATIONS',
      title: 'Service-Level & Stakeholder Coordination',
      tagline: 'Service expectations, responsibility alignment, and cross-team communication.',
      description:
        'Effective service delivery requires mutual clarity between technology teams and business units. We help establish realistic service expectations, define communication protocols, and structure regular service review meetings to maintain cross-functional alignment.',
      image: '/images/cloud/service_mgmt_coordination.jpg',
      points: [
        'Defined service expectations and operational guidelines tailored to business criticality',
        'Documented communication protocols for scheduled maintenance, service changes, and major events',
        'Scheduled service review cadence between business stakeholders and technology service owners',
        'Collaborative feedback channels enabling continuous voice-of-the-customer input into service design'
      ]
    },
    {
      id: 'knowledge-management',
      badge: 'CAPABILITY D • DOCUMENTATION & ASSETS',
      title: 'Knowledge & Documentation Management',
      tagline: 'Knowledge article organization, documented procedures, and reusable operational guidance.',
      description:
        'Knowledge management transforms individual troubleshooting experience into institutional capability. We structure searchable knowledge repositories, standardize article authoring templates, and maintain verified workarounds to accelerate request fulfillment.',
      image: '/images/cloud/service_mgmt_knowledge.png',
      points: [
        'Centralized, searchable knowledge base organizing technical runbooks and user self-help guides',
        'Standardized article curation workflows ensuring documentation is validated, versioned, and current',
        'Known Error Database (KEDB) indexing verified workarounds to resolve recurring issues faster',
        'Feedback loops updating knowledge assets directly following resolved service requests and incidents'
      ]
    },
    {
      id: 'service-improvement',
      badge: 'CAPABILITY E • GOVERNANCE & CONTINUAL IMPROVEMENT',
      title: 'Service Improvement & Governance',
      tagline: 'Service reviews, process documentation, ownership models, and continuous refinement.',
      description:
        'Service management is an evolving discipline. We guide organizations in establishing continuous service improvement (CSI) frameworks, conducting blameless operational retrospectives, analyzing service trends, and refining workflows to sustain operational excellence.',
      image: '/images/cloud/service_mgmt_governance.jpg',
      points: [
        'Structured service review framework evaluating fulfillment consistency and process bottlenecks',
        'Periodic operational governance reviews ensuring runbooks, ownership matrices, and tools remain aligned',
        'Trend analysis identifying recurring request types suitable for automation or self-service deflection',
        'Actionable improvement backlogs prioritizing workflow adjustments based on real operational feedback'
      ]
    }
  ];

  // Section 6: 4-Stage Workflow Data (Our Approach)
  const approachStages = [
    {
      num: '01',
      title: 'Capture & Classify',
      tagline: 'Record incoming requests, identify service categories, and establish the information needed for appropriate handling.',
      description:
        'Every inquiry enters a structured intake mechanism. We ensure all necessary details, environmental contexts, and requester information are captured upfront, assigning appropriate service categories and urgency tags.',
      activities: [
        'Standardize input forms to capture required context and prevent back-and-forth clarifications',
        'Validate service eligibility and verify requester authorizations where approvals are mandatory',
        'Apply consistent categorization taxonomy linking requests to corresponding service catalogue items',
        'Acknowledge receipt automatically with an audit tracking reference and expected next steps'
      ]
    },
    {
      num: '02',
      title: 'Assign & Coordinate',
      tagline: 'Direct requests to the appropriate service owners, coordinate dependencies, and clarify responsibilities.',
      description:
        'Requests are routed automatically to designated service owners or specialized support queues. If multi-team tasks are involved, dependencies are mapped and responsibilities are made transparent.',
      activities: [
        'Route requests directly to responsible subject matter experts based on pre-defined skills and queues',
        'Break complex multi-department requests into sequenced child tasks with explicit ownership',
        'Notify secondary teams (security, infrastructure, finance) when dependent approvals are required',
        'Establish clear accountability to prevent unassigned or stalled service items'
      ]
    },
    {
      num: '03',
      title: 'Deliver & Communicate',
      tagline: 'Track progress, communicate relevant updates, document actions, and follow the agreed service process.',
      description:
        'Engineers execute fulfillment following documented standard operating procedures. Throughout execution, requesters receive timely progress updates, and all technical steps are documented for auditing.',
      activities: [
        'Execute standardized fulfillment runbooks to maintain quality and operational safety',
        'Provide transparent status notifications at key fulfillment milestones to keep users informed',
        'Document technical actions taken, configuration changes applied, and assets updated',
        'Verify successful service restoration or delivery directly with the business requester before closure'
      ]
    },
    {
      num: '04',
      title: 'Review & Improve',
      tagline: 'Examine recurring service concerns, maintain useful knowledge, and refine procedures based on operational feedback.',
      description:
        'Fulfillment data and user feedback feed directly into process refinement. We review recurring service inquiries, update knowledge base articles, and identify opportunities to automate repetitive tasks.',
      activities: [
        'Capture requester satisfaction feedback and evaluate fulfillment turnaround against guidelines',
        'Author or update knowledge articles based on novel resolutions encountered during delivery',
        'Identify repetitive request categories prime for self-service automation and scripting',
        'Refine standard operating procedures during periodic operational governance reviews'
      ]
    }
  ];

  // Section 7: Service Management Across the Organization
  const organizationalScopes = [
    {
      title: 'Internal IT Support Services',
      tag: 'SERVICE DESK & WORKPLACE',
      description:
        'Handling hardware setups, workstation troubleshooting, software deployments, and peripheral requests with standardized workflows.',
      benefit: 'Consistent employee onboarding and rapid resolution of everyday technology disruptions.'
    },
    {
      title: 'Enterprise Application Support',
      tag: 'CORE SOFTWARE & ERP',
      description:
        'Coordinating user access approvals, batch job requests, data extract permissions, and business application configuration adjustments.',
      benefit: 'Clear audit trails, role-based governance, and seamless coordination with software vendors.'
    },
    {
      title: 'Infrastructure Service Coordination',
      tag: 'COMPUTE, STORAGE & NETWORK',
      description:
        'Facilitating server provisioning, firewall rule modifications, storage allocations, and network connectivity change coordination.',
      benefit: 'Structured handover between development teams and core infrastructure administrators.'
    },
    {
      title: 'Employee & Business Service Requests',
      tag: 'SELF-SERVICE PORTALS',
      description:
        'Providing business users with self-service catalogues for standard productivity tools, collaboration licenses, and shared resources.',
      benefit: 'Reduced email ping-pong and automated approval routing across organizational hierarchies.'
    },
    {
      title: 'Vendor & Service-Provider Coordination',
      tag: 'THIRD-PARTY INTEGRATION',
      description:
        'Tracking external SaaS vendor service tickets, warranty repair dispatches, and third-party maintenance coordination.',
      benefit: 'Unified tracking of third-party dependencies within internal operational records.'
    },
    {
      title: 'Knowledge Sharing & Service Governance',
      tag: 'INSTITUTIONAL MEMORY',
      description:
        'Maintaining verified standard operating procedures, architecture runbooks, and self-help guidance across all departments.',
      benefit: 'Elimination of tribal knowledge silos and faster ramp-up for incoming support personnel.'
    }
  ];

  // Section 8: Practical Business Value (Strictly no fake statistics or claims)
  const practicalOutcomes = [
    {
      title: 'Clearer Service Ownership and Responsibilities',
      description:
        'Explicit role matrices and catalogue definitions eliminate ambiguity, ensuring every request has a designated owner and transparent accountability.',
      icon: Users
    },
    {
      title: 'More Structured Request Handling',
      description:
        'Standardized intake and triage replace chaotic inbox threads and direct messages, enabling systematic prioritization and reliable progress tracking.',
      icon: Inbox
    },
    {
      title: 'Better Communication Across Support Teams',
      description:
        'Interdependent service tasks are coordinated smoothly between infrastructure, application support, and business stakeholders with scheduled updates.',
      icon: MessageSquare
    },
    {
      title: 'Easier Access to Service Knowledge and Procedures',
      description:
        'Curated knowledge repositories and verified workarounds empower engineers to resolve inquiries faster and enable user self-service where appropriate.',
      icon: BookOpen
    },
    {
      title: 'More Consistent Service Reviews and Process Improvement',
      description:
        'Structured operational reviews convert historical delivery patterns into targeted refinements, driving ongoing enhancements in service delivery.',
      icon: RefreshCw
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050B17] text-slate-800 dark:text-slate-100 font-sans antialiased selection:bg-[#00A3E0] selection:text-white">

      {/* =========================================================================
          SECTION 1: HERO SECTION (Unified Hero Canvas with 100% Uncropped Visual)
      {/* =========================================================================
          SECTION 1: HERO SECTION (Full-Screen Immersive Canvas with 16:9 Uncropped HD Visual)
          ========================================================================= */}
      <section className="relative w-full min-h-[660px] lg:min-h-[740px] flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 pb-10 overflow-hidden bg-[#030712] border-b border-white/10">

        {/* FULL-SCREEN HERO BACKGROUND IMAGE (16:9 Widescreen Crystal Clear HD Visual) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
          <img
            src="/images/cloud/service_mgmt_hero_wide.jpg"
            alt="Enterprise Service Management Platform"
            className="w-full h-full object-cover object-right lg:object-center brightness-[1.05] contrast-[1.05]"
          />
          {/* Subtle directional dark gradient on the left ensures pristine text readability without dimming the visual on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/90 via-45% to-transparent w-full lg:w-[65%]" />
          {/* Bottom subtle edge blend */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030712] to-transparent" />
          {/* Top subtle header blend */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#030712]/70 to-transparent" />
        </div>

        {/* Ambient Subtle Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

        {/* HERO CONTENT OVERLAY (Full-Screen Unified Text Canvas) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
          <div className="max-w-2xl lg:max-w-3xl space-y-6">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />
              <span>IT OPERATIONS &amp; MANAGED OPERATIONS</span>
            </div>

            {/* Main Heading & Subtitle */}
            <div className="space-y-3">
              <span className="block text-sm sm:text-base font-semibold uppercase tracking-wider text-[#00A3E0]">
                Service Management
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Service Management
              </h1>
              <p className="text-lg sm:text-xl font-bold text-cyan-300 tracking-tight">
                Structured IT Services. Clear Ownership. Better Coordination.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Knooviq helps organizations establish consistent IT service management practices that connect people, processes, and technology. From service requests and service-level coordination to knowledge management and operational governance, we help teams organize service delivery, clarify responsibilities, and create more consistent support experiences.
            </p>

          </div>
        </div>

        {/* Service Management Signals Ribbon */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-8">
          <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <Inbox className="w-3.5 h-3.5" />
                <span>Service Desk</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Ticket Intake</div>
              <div className="text-xs text-slate-400 mt-0.5">Automated Triage</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <Boxes className="w-3.5 h-3.5" />
                <span>Catalogue</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Standard Items</div>
              <div className="text-xs text-slate-400 mt-0.5">Approval Flow</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Knowledge</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">Self-Help Hub</div>
              <div className="text-xs text-slate-400 mt-0.5">Verified Runbooks</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Governance</span>
              </span>
              <div className="text-sm font-bold text-white mt-1">SLA Alignment</div>
              <div className="text-xs text-slate-400 mt-0.5">Recurring Audits</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SERVICE MANAGEMENT OVERVIEW (Workflow Diagram)
          ========================================================================= */}
      <section id="overview" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Large Introductory Area */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>SERVICE DELIVERY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Bringing Structure to Everyday IT Services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Effective service management establishes clear processes for receiving requests, coordinating support, maintaining service information, and managing expectations across technical teams and business stakeholders.
            </p>
          </div>

          {/* Visually Distinct Service Workflow Diagram */}
          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-8 shadow-sm">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] block">
                  END-TO-END SERVICE LIFECYCLE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Connected IT Service Delivery Workflow
                </h3>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] text-xs font-bold shrink-0">
                Repeatable &bull; Traceable &bull; Governed
              </span>
            </div>

            {/* 5 Connected Stages Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {deliveryWorkflowSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    className="p-5 rounded-2xl bg-white dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/5 space-y-3 flex flex-col justify-between shadow-xs hover:border-[#00A3E0]/40 transition-all group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                          {step.step}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#00A3E0] dark:group-hover:text-cyan-300 transition-colors">
                        {step.title}
                      </h4>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 dark:border-white/5 flex items-center gap-1 text-[11px] font-bold text-[#00A3E0]">
                      <span>Stage {idx + 1}</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: COMMON SERVICE MANAGEMENT CHALLENGES
          ========================================================================= */}
      <section id="challenges" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>OPERATIONAL CHALLENGES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Making IT Service Delivery More Consistent
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              When IT services lack clear structure, organizations experience friction, delayed fulfillments, and fragmented communication across teams.
            </p>
          </div>

          {/* 5 Challenges in Clean Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {serviceChallenges.map((challenge, idx) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={challenge.id}
                  className="p-6 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 hover:border-[#00A3E0]/40 transition-all flex flex-col justify-between space-y-4 group shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${challenge.accent}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#00A3E0] dark:group-hover:text-cyan-300 transition-colors">
                        {challenge.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {challenge.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {challenge.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-white/10 flex items-center gap-1.5 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                    <span>Operational Friction Point</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CORE CAPABILITIES (5 Distinct Blocks with Alternating Visuals)
          ========================================================================= */}
      <section id="capabilities" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Boxes className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Organize Services Around Clear Processes
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Structured capabilities that establish clear intake channels, well-defined service catalogs, coordinated communication, and active knowledge sharing.
            </p>
          </div>

          {/* 5 Distinct Capability Blocks */}
          <div className="space-y-16">

            {/* Capability A: Service Request Management (Image on Right) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider border border-slate-200/60 dark:border-white/5">
                    <Inbox className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>{capabilities[0].badge}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {capabilities[0].title}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#00A3E0] dark:text-cyan-300">
                      {capabilities[0].tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {capabilities[0].description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {capabilities[0].points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] group">
                    <img
                      src={capabilities[0].image}
                      alt="Professional IT service desk environment focused on request coordination and service workflows"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070E1E]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#070E1E]/90 backdrop-blur-md border border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Service Desk Request Management</span>
                      <span className="text-slate-400 text-[11px]">Intake standardization &bull; Automated routing &bull; Status visibility</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Capability B: Service Catalogue & Service Delivery (Image on Left) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] group">
                    <img
                      src={capabilities[1].image}
                      alt="Refined enterprise service catalogue concept with connected service categories"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070E1E]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#070E1E]/90 backdrop-blur-md border border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Enterprise Service Catalogue</span>
                      <span className="text-slate-400 text-[11px]">Defined service options &bull; Role-based access &bull; Service ownership</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider border border-slate-200/60 dark:border-white/5">
                    <Boxes className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>{capabilities[1].badge}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {capabilities[1].title}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#00A3E0] dark:text-cyan-300">
                      {capabilities[1].tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {capabilities[1].description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {capabilities[1].points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Capability C: Service-Level & Stakeholder Coordination (Image on Right) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider border border-slate-200/60 dark:border-white/5">
                    <Users className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>{capabilities[2].badge}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {capabilities[2].title}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#00A3E0] dark:text-cyan-300">
                      {capabilities[2].tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {capabilities[2].description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {capabilities[2].points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] group">
                    <img
                      src={capabilities[2].image}
                      alt="Professional business and technology collaboration environment"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070E1E]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#070E1E]/90 backdrop-blur-md border border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Stakeholder Coordination &amp; Service Expectations</span>
                      <span className="text-slate-400 text-[11px]">Expectation alignment &bull; Regular reviews &bull; Mutual accountability</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Capability D: Knowledge & Documentation Management (Image on Left) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] group">
                    <img
                      src={capabilities[3].image}
                      alt="Knowledge management environment showing organized technical documentation"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070E1E]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#070E1E]/90 backdrop-blur-md border border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Centralized Knowledge Repository</span>
                      <span className="text-slate-400 text-[11px]">Structured SOPs &bull; Verified workarounds &bull; Reusable guidance</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider border border-slate-200/60 dark:border-white/5">
                    <BookOpen className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>{capabilities[3].badge}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {capabilities[3].title}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#00A3E0] dark:text-cyan-300">
                      {capabilities[3].tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {capabilities[3].description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {capabilities[3].points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Capability E: Service Improvement & Governance (Image on Right) */}
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider border border-slate-200/60 dark:border-white/5">
                    <RefreshCw className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>{capabilities[4].badge}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {capabilities[4].title}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#00A3E0] dark:text-cyan-300">
                      {capabilities[4].tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {capabilities[4].description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {capabilities[4].points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900 aspect-[16/10] group">
                    <img
                      src={capabilities[4].image}
                      alt="Professional service-process planning environment with workflow diagrams"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070E1E]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#070E1E]/90 backdrop-blur-md border border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-white block">Continuous Service Improvement</span>
                      <span className="text-slate-400 text-[11px]">Process audits &bull; Feedback integration &bull; Workflow refinement</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: HOW SERVICE MANAGEMENT WORKS (Our Approach - 4 Connected Stages)
          ========================================================================= */}
      <section id="approach" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>OUR APPROACH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              From Service Request to Continuous Improvement
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              A structured four-stage process diagram ensuring requests are recorded accurately, assigned to appropriate owners, delivered transparently, and converted into continuous operational knowledge.
            </p>
          </div>

          {/* Desktop Horizontal Process Stepper */}
          <div className="hidden lg:grid grid-cols-4 gap-4 relative">
            {approachStages.map((stage, idx) => (
              <button
                key={stage.num}
                type="button"
                onClick={() => setActiveApproachStage(idx)}
                className={`p-6 rounded-2xl text-left border transition-all cursor-pointer ${
                  activeApproachStage === idx
                    ? 'bg-white dark:bg-[#0B1528] border-[#00A3E0] shadow-lg shadow-cyan-500/10 ring-2 ring-[#00A3E0]/20'
                    : 'bg-white/70 dark:bg-[#070E1E] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-black tracking-wider uppercase px-2.5 py-1 rounded-md ${
                    activeApproachStage === idx
                      ? 'bg-[#00A3E0] text-white'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400'
                  }`}>
                    STAGE {stage.num}
                  </span>
                  <div className={`w-3 h-3 rounded-full ${activeApproachStage === idx ? 'bg-[#00A3E0]' : 'bg-slate-300 dark:bg-slate-700'}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {stage.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {stage.tagline}
                </p>
              </button>
            ))}
          </div>

          {/* Active Stage Detailed Panel */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 space-y-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] block">
                  STAGE {approachStages[activeApproachStage].num} &bull; PROCESS EXECUTION DETAILS
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {approachStages[activeApproachStage].title}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] text-xs font-bold">
                Service Governance
              </span>
            </div>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {approachStages[activeApproachStage].description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Key Operational Activities:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {approachStages[activeApproachStage].activities.map((act, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200/70 dark:border-white/5 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/10 text-[#00A3E0] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      {act}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Selector Buttons */}
          <div className="lg:hidden space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
              Select Another Stage:
            </span>
            <div className="grid grid-cols-2 gap-2">
              {approachStages.map((stg, idx) => (
                <button
                  key={stg.num}
                  type="button"
                  onClick={() => setActiveApproachStage(idx)}
                  className={`p-3 rounded-xl text-left border text-xs font-bold cursor-pointer ${
                    activeApproachStage === idx
                      ? 'bg-[#00A3E0] text-white border-[#00A3E0]'
                      : 'bg-white dark:bg-[#070E1E] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className="block text-[10px] opacity-80">STAGE {stg.num}</span>
                  <span>{stg.title}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: SERVICE MANAGEMENT ACROSS THE ORGANIZATION
          ========================================================================= */}
      <section id="organization" className="py-20 bg-white dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>ORGANIZATIONAL IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Connecting IT Services with Business Needs
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Service management brings consistency to interactions between business users, service teams, infrastructure operations, application support, and external providers.
            </p>
          </div>

          {/* Wide Relationship Visual */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-slate-900 aspect-[21/9] sm:aspect-[16/7] group">
            <img
              src="/images/cloud/service_mgmt_across_org.png"
              alt="Connected enterprise service ecosystem bridging business users, IT support, apps, and infrastructure"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B17]/95 via-[#050B17]/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#070E1E]/90 backdrop-blur-md border border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-300">
              <div className="space-y-0.5">
                <span className="font-bold text-white text-sm">Cross-Organizational Service Management Relationship Model</span>
                <p className="text-slate-300 text-xs">Business Users &bull; IT Service Desk &bull; Application Engineering &bull; Infrastructure Teams &bull; External Vendors</p>
              </div>
              <span className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 font-bold shrink-0">
                Unified Service Mesh
              </span>
            </div>
          </div>

          {/* 6 Scopes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {organizationalScopes.map((scope, idx) => (
              <div
                key={scope.title}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 hover:border-[#00A3E0]/40 transition-all space-y-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A3E0] px-2.5 py-1 rounded-md bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-100 dark:border-cyan-400/20">
                    {scope.tag}
                  </span>
                  <span className="text-xs font-bold text-slate-400">0{idx + 1}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {scope.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {scope.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-white/10 space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block">
                    Practical Advantage:
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-200 font-medium">
                    {scope.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: PRACTICAL BUSINESS VALUE
          ========================================================================= */}
      <section id="value" className="py-20 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>BUSINESS VALUE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Clearer Processes. More Consistent Service Delivery.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Structured service management delivers measurable operational clarity, improves communication between departments, and establishes consistent service experiences.
            </p>
          </div>

          {/* 5 Outcomes in Distinct Editorial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicalOutcomes.map((outcome, idx) => {
              const Icon = outcome.icon;
              return (
                <div
                  key={outcome.title}
                  className={`p-7 rounded-2xl bg-white dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/10 space-y-4 hover:border-[#00A3E0]/40 transition-all shadow-sm ${
                    idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-[#00A3E0] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {outcome.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {outcome.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-2 text-xs font-bold text-[#00A3E0]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Operational Advantage</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: CLOSING CALL TO ACTION BANNER
          ========================================================================= */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#070E1E] via-[#050B17] to-slate-950 text-white">
        {/* Subtle background graphic overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="/images/cloud/service_mgmt_closing_banner.jpg"
            alt="Connected enterprise IT service ecosystem"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B17] via-[#050B17]/90 to-[#050B17]/70 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-r from-blue-900/30 via-cyan-950/30 to-slate-900/60 border border-cyan-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-sm">

            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block">
                IT OPERATIONS &amp; MANAGED OPERATIONS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Build a More Structured IT Service Experience.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Establish clear service processes, improve coordination, and create a consistent foundation for managing enterprise IT services with Knooviq.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => handleOpenContact('Talk to Our Experts – Service Management')}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Talk to Our Cloud Experts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/cloud-operations/incident-management"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Incident Management</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Fullscreen HD Lightbox Modal */}
      {isFullscreenOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setIsFullscreenOpen(false)}
        >
          <div
            className="relative max-w-7xl w-full max-h-[95vh] flex flex-col bg-slate-950 rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-slate-900/90 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-cyan-950 border border-cyan-800 text-cyan-400 text-xs font-mono font-bold uppercase">
                  HD Fullscreen
                </span>
                <span className="text-white text-sm font-bold truncate">
                  Service Management — Structured IT Services &amp; Delivery
                </span>
              </div>
              <button
                onClick={() => setIsFullscreenOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Close fullscreen view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative flex-1 flex items-center justify-center p-2 sm:p-4 overflow-auto bg-black">
              <img
                src="/images/cloud/service_mgmt_hero_wide.jpg"
                alt="Service Management"
                className="max-h-[82vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ServiceManagementPage;
