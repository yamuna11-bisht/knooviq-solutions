import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  Cpu, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Workflow, 
  Compass, 
  Boxes, 
  Server, 
  Database, 
  Bot, 
  Zap, 
  Cloud, 
  Lock, 
  Network,
  ChevronRight,
  Building2,
  ExternalLink,
  CheckSquare,
  Globe2,
  TrendingUp,
  FileCheck,
  Award
} from 'lucide-react';

interface TechnologyPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const SapBtpPage: React.FC<TechnologyPageProps> = ({ onOpenContact }) => {
  const servicesCatalog = [
    {
      id: 'srv-1',
      category: 'Application Development',
      title: 'SAP Build Apps & Work Zone',
      tagline: 'Enterprise Low-Code & Digital Experience Shell',
      description: 'Accelerate digital employee experiences and partner portals without writing complex frontend code. Integrates natively with SAP S/4HANA role-based access catalogs.',
      costModel: 'User Subscription & Capacity Units',
      useCase: 'Field inspection mobile apps, supplier onboarding portals, employee self-service hubs.',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
      cleanCoreRating: 'Tier 1 Clean Core Standard'
    },
    {
      id: 'srv-2',
      category: 'Application Development',
      title: 'SAP BTP ABAP Environment & Cloud Foundry',
      tagline: 'Enterprise-Scale Side-by-Side Microservices',
      description: 'Run mission-critical custom business logic in an isolated containerized environment using Cloud Application Programming (CAP) model and modern ABAP Cloud.',
      costModel: 'Memory (GB) & Application Compute Hours',
      useCase: 'Complex algorithmic pricing engines, B2B partner collaboration microservices, billing calculators.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      cleanCoreRating: 'Zero ERP Modification Impact'
    },
    {
      id: 'srv-3',
      category: 'Integration Suite',
      title: 'SAP Integration Suite',
      tagline: 'Universal Enterprise iPaaS & Event Mesh',
      description: 'Seamlessly bridge cloud and on-premise landscapes. Connect SAP to Salesforce, Workday, ServiceNow, and banking gateways with guaranteed persistent message delivery.',
      costModel: 'Tenant Base + Monthly Message Volume Tiers',
      useCase: 'Quote-to-Cash automation, B2B EDI Peppol compliance, event-driven inventory synchronization.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      cleanCoreRating: 'Decoupled API-Only Interfaces'
    },
    {
      id: 'srv-4',
      category: 'Data & Analytics',
      title: 'SAP Datasphere & Analytics Cloud',
      tagline: 'Business Data Fabric & Executive Decision Intelligence',
      description: 'Unify distributed enterprise data without extraction bottlenecks. Harmonize SAP and third-party data lakes into a live semantic layer with predictive modeling.',
      costModel: 'Capacity Units & User Business Intelligence Licenses',
      useCase: 'Real-time financial consolidation, multi-echelon supply chain visibility, ESG regulatory reporting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      cleanCoreRating: 'Zero-Copy Virtualization'
    },
    {
      id: 'srv-5',
      category: 'Business AI',
      title: 'SAP Generative AI Hub & Vector Search',
      tagline: 'Enterprise-Grade Foundation Models with Business Context',
      description: 'Access leading foundational LLMs (GPT-4o, Claude 3.5, Mistral Large) inside the enterprise security perimeter with grounded SAP business semantics and data isolation.',
      costModel: 'Token Consumption & AI Inference Units',
      useCase: 'Automated invoice dispute resolution, Joule copilot extensions, document summarization.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      cleanCoreRating: 'Secure Enterprise AI Boundary'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Cinematic Blue & White Enterprise Architecture)
          ========================================================================= */}
      <section className="relative w-full min-h-[600px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-14 overflow-hidden bg-blue-950">
        
        {/* Background Image with Deep Blue Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" 
            alt="SAP BTP Enterprise Platform Cloud Architecture" 
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/75 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-blue-950/50 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-5">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/80 border border-blue-400/30 text-xs font-mono font-bold uppercase tracking-wider text-blue-200 shadow-sm">
                <Layers className="w-3.5 h-3.5 text-blue-300" />
                <span>KNOOVIQ TECHNOLOGY PRACTICE &bull; SAP BTP</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                Enterprise Agility via <br />
                <span className="text-blue-300">SAP Business Technology Platform</span>
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-blue-100 leading-snug">
                Build Modern Side-by-Side Extensions. Safeguard Your Clean Core.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 max-w-2xl"
            >
              <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed">
                Stop modifying the ERP core. With <strong className="text-white font-semibold">SAP BTP</strong>, Knooviq engineers decouple custom business applications, orchestrate multi-cloud integrations, and accelerate data-driven decisions while keeping your SAP S/4HANA core 100% upgrade-ready.
              </p>
              
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-blue-300" />
                  <span>Clean Core Architecture</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-blue-300" />
                  <span>Decoupled Extensions</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-blue-300" />
                  <span>Universal iPaaS & AI Hub</span>
                </span>
              </div>
            </motion.div>

            {/* Enterprise Architectural Trust Ribbon */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 pt-5 border-t border-blue-800/80 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
            >
              <div className="p-3.5 rounded-xl bg-blue-900/50 border border-blue-800">
                <div className="flex items-center gap-2 mb-1">
                  <Workflow className="w-4 h-4 text-blue-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-blue-300 uppercase">EXTENSION</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white">Side-by-Side BTP</div>
                <div className="text-xs text-blue-200 mt-0.5">Isolated Microservices</div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-900/50 border border-blue-800">
                <div className="flex items-center gap-2 mb-1">
                  <Network className="w-4 h-4 text-blue-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-blue-300 uppercase">INTEGRATION</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white">Universal iPaaS</div>
                <div className="text-xs text-blue-200 mt-0.5">3,200+ Standard APIs</div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-900/50 border border-blue-800">
                <div className="flex items-center gap-2 mb-1">
                  <Database className="w-4 h-4 text-blue-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-blue-300 uppercase">DATA FABRIC</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white">SAP Datasphere</div>
                <div className="text-xs text-blue-200 mt-0.5">Zero-Copy Virtualization</div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-900/50 border border-blue-800">
                <div className="flex items-center gap-2 mb-1">
                  <Bot className="w-4 h-4 text-blue-300 shrink-0" />
                  <span className="text-xs font-mono font-bold tracking-wider text-blue-300 uppercase">ENTERPRISE AI</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white">Generative AI Hub</div>
                <div className="text-xs text-blue-200 mt-0.5">Grounded LLM Security</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ENTERPRISE DECISION GUIDE (Where Does Custom Development Belong?)
          (Pure Information in Blue & White - No Interactive Gimmicks)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                <Compass className="w-3.5 h-3.5 text-blue-600" />
                <span>CLEAN CORE ARCHITECTURAL FRAMEWORK</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Architectural Decision Guide: Where Does Your Custom Logic Belong?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Legacy ERP systems suffered from unmanaged custom code modifying standard tables. Modern SAP architecture categorizes development into 4 distinct tiers to guarantee zero upgrade disruption.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-md h-64">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" 
                  alt="Enterprise Architecture Planning"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 4 Clean Informative Cards (Blue & White) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Tier 1 */}
            <div className="p-6 rounded-2xl bg-white border border-blue-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-mono font-bold text-blue-700 uppercase">
                  TIER 1 &bull; EXTERNAL
                </span>
                <h3 className="text-lg font-bold text-blue-950">Side-by-Side BTP</h3>
                <div className="text-xs font-semibold text-blue-600">Multi-Cloud Microservices & B2B SaaS</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Executes entirely outside the S/4HANA boundary on BTP Cloud Foundry or Kyma. Connects via released public REST/OData APIs.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-1 text-[11px] text-slate-600 font-medium">
                <div><strong className="text-blue-900">Upgrade Impact:</strong> 0% (Zero Friction)</div>
                <div><strong className="text-blue-900">Runtime:</strong> Node.js, Java, Python, ABAP</div>
              </div>
            </div>

            {/* Tier 2 */}
            <div className="p-6 rounded-2xl bg-white border border-blue-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-mono font-bold text-blue-700 uppercase">
                  TIER 2 &bull; ON-STACK
                </span>
                <h3 className="text-lg font-bold text-blue-950">Developer RAP</h3>
                <div className="text-xs font-semibold text-blue-600">On-Stack High-Throughput Engines</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct in-memory joins on transactional tables using ABAP Cloud contracts and released CDS views for maximum calculation speed.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-1 text-[11px] text-slate-600 font-medium">
                <div><strong className="text-blue-900">Upgrade Impact:</strong> Protected by C1 Contract</div>
                <div><strong className="text-blue-900">Latency:</strong> Sub-5ms In-Memory</div>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="p-6 rounded-2xl bg-white border border-blue-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-mono font-bold text-blue-700 uppercase">
                  TIER 3 &bull; IN-APP
                </span>
                <h3 className="text-lg font-bold text-blue-950">Key User Extensibility</h3>
                <div className="text-xs font-semibold text-blue-600">Zero-Code Fields & UI Layouts</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Business analysts add custom fields to standard screens, configure validation hooks, and adjust print forms without developer intervention.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-1 text-[11px] text-slate-600 font-medium">
                <div><strong className="text-blue-900">Developer Dependency:</strong> Zero (Self-Service)</div>
                <div><strong className="text-blue-900">Governance:</strong> 100% Automated by SAP</div>
              </div>
            </div>

            {/* Tier 4 */}
            <div className="p-6 rounded-2xl bg-white border border-blue-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-mono font-bold text-blue-700 uppercase">
                  TIER 4 &bull; CITIZEN
                </span>
                <h3 className="text-lg font-bold text-blue-950">SAP Build Low-Code</h3>
                <div className="text-xs font-semibold text-blue-600">Visual Workflows & Approval Forms</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Departmental teams orchestrate multi-step approval workflows (CAPEX, travel allowances, supplier registrations) via drag-and-drop.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-1 text-[11px] text-slate-600 font-medium">
                <div><strong className="text-blue-900">Time-to-Production:</strong> Days, not Months</div>
                <div><strong className="text-blue-900">IT Control:</strong> Centralized Guardrails</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SAP BTP SERVICES CATALOG (Crisp Blue & White with Imagery)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-blue-50/40 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
              <Boxes className="w-3.5 h-3.5 text-blue-600" />
              <span>PRODUCTION SERVICE CATALOG</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Enterprise SAP BTP Service Portfolio
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Core BTP services curated by Knooviq engineers for high availability, enterprise security, and predictable consumption metering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesCatalog.map(srv => (
              <div 
                key={srv.id}
                className="rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 w-full relative overflow-hidden">
                    <img 
                      src={srv.image} 
                      alt={srv.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md border border-blue-200 text-[10px] font-mono text-blue-800 font-bold uppercase">
                      {srv.cleanCoreRating}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="text-[11px] font-mono font-bold uppercase text-blue-600">{srv.category}</span>
                    <h3 className="text-lg font-bold text-slate-900">
                      {srv.title}
                    </h3>
                    <div className="text-xs font-semibold text-blue-700">{srv.tagline}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {srv.description}
                    </p>
                    <div className="pt-2 text-[11px] text-slate-700">
                      <strong className="text-slate-900">Enterprise Use Case:</strong> {srv.useCase}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">{srv.costModel}</span>
                  <button
                    onClick={() => onOpenContact(`Architecture Advisory: ${srv.title}`)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>Consult Architects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: THE 4-TIER CLEAN CORE EXTENSIBILITY FRAMEWORK
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                <FileCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>ENTERPRISE GOVERNANCE PILLARS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                The 4 Architectural Contracts of Clean Core Extensibility
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Clean Core is not just a slogan—it is a disciplined engineering standard defined by strict API release contracts, identity boundaries, and lifecycle separation.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-md h-60">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80" 
                  alt="Enterprise Modern Corporate Headquarters"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">PILLAR 1: PUBLIC APIS ONLY</div>
              <h3 className="text-base font-bold text-blue-950">Stable Released Interfaces</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All external integration must consume C1-released public interfaces and OData v4 endpoints. Direct database table reads on core SAP tables (e.g. BSEG, MARA) are strictly prohibited.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">PILLAR 2: ISOLATED RUNTIMES</div>
              <h3 className="text-base font-bold text-blue-950">Decoupled Compute Scaling</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Custom microservices run in standalone cloud containers on BTP. Intensive algorithmic calculations never degrade SAP S/4HANA transactional memory or block ERP users.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">PILLAR 3: EVENT-DRIVEN MESH</div>
              <h3 className="text-base font-bold text-blue-950">Asynchronous Decoupling</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Systems communicate via SAP Event Mesh. When a sales order or payment posts, an event fires asynchronously, eliminating fragile synchronous point-to-point webhooks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">PILLAR 4: AUTOMATED TESTING</div>
              <h3 className="text-base font-bold text-blue-950">Continuous CI/CD Delivery</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All BTP microservices utilize automated regression test suites and canary deployments, allowing daily production releases independent of S/4HANA transport cycles.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: 3 PROVEN ENTERPRISE ARCHITECTURE BLUEPRINTS (With Images)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-blue-50/40 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
              <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
              <span>REFERENCE ARCHITECTURE DESIGNS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Production Architecture Blueprint Patterns
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Battle-tested architectural topologies deployed across Fortune 500 enterprises for supply chain agility, partner collaboration, and private enterprise AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Blueprint 1 */}
            <div className="rounded-2xl bg-white border border-blue-100 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <div>
                <div className="h-48 w-full relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" 
                    alt="Asynchronous Event Buffer Architecture"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-blue-900 text-[10px] font-mono text-white font-bold">
                    PATTERN 01
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900">
                    Asynchronous High-Throughput Event Ingestion Buffer
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Buffers millions of high-velocity IoT telematics and e-commerce orders into SAP Event Mesh, throttling queue delivery to S/4HANA to protect transactional locks.
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-700 pt-2 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>AMQP 1.0 & Kafka Connect Integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Zero lost orders during ERP maintenance</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-4 border-t border-slate-100">
                <span className="text-xs font-mono font-bold text-blue-700">Guaranteed Persistent Delivery</span>
              </div>
            </div>

            {/* Blueprint 2 */}
            <div className="rounded-2xl bg-white border border-blue-100 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <div>
                <div className="h-48 w-full relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                    alt="Partner Collaboration SaaS"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-blue-900 text-[10px] font-mono text-white font-bold">
                    PATTERN 02
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900">
                    Multi-Tenant Supplier Collaboration Portal
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Provides external global suppliers secure access to order schedules, digital dispatch advice, and invoice reconciliations without exposing corporate internal network ports.
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-700 pt-2 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>SAP Cloud Identity Services (IAS) MFA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>SAP Cloud Connector Zero-Trust Tunnel</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-4 border-t border-slate-100">
                <span className="text-xs font-mono font-bold text-blue-700">Isolated DMZ Boundary</span>
              </div>
            </div>

            {/* Blueprint 3 */}
            <div className="rounded-2xl bg-white border border-blue-100 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <div>
                <div className="h-48 w-full relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" 
                    alt="Enterprise RAG AI Architecture"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-blue-900 text-[10px] font-mono text-white font-bold">
                    PATTERN 03
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900">
                    Enterprise RAG & Grounded Generative AI
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Embeds contract PDFs, maintenance logs, and financial records into SAP HANA Cloud Vector Engine. Powers contextual LLM copilots that strictly respect ERP role-based row security.
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-700 pt-2 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Generative AI Hub Data Privacy Shield</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Zero LLM Training on Customer Data</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-4 border-t border-slate-100">
                <span className="text-xs font-mono font-bold text-blue-700">Strict Data Privacy Compliance</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CLEAN CORE GOVERNANCE STANDARDS & AUDIT FRAMEWORK
          (Pure Informative Presentation in Blue & White - Not Clickable)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>ENTERPRISE GOVERNANCE AUDIT</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Enterprise Clean Core Readiness Standards
              </h2>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Modern SAP Clean Core compliance is measured across 5 rigorous architectural gates. Adhering to these milestones guarantees that future SAP S/4HANA feature releases and cloud upgrades occur without custom code rework.
              </p>

              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-md mt-6 h-60">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
                  alt="Enterprise Clean Core Audit"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Pure Informative Standards Cards (Blue & White, Non-Clickable) */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-4 shadow-sm">
              <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                <span className="text-xs font-mono font-bold text-blue-900 uppercase">CLEAN CORE ARCHITECTURAL GATES</span>
                <span className="text-xs font-mono text-blue-700 font-bold bg-white px-2.5 py-1 rounded border border-blue-200">
                  5 Core Standards
                </span>
              </div>

              <div className="space-y-3">
                
                {/* Gate 1 */}
                <div className="p-4 rounded-xl bg-white border border-blue-200 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-xs font-bold text-blue-950">1. Strict C1 Released API Whitelisting</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-6">
                    Zero direct calls to unreleased private SAP standard classes or database tables. All access must use official released API contracts.
                  </p>
                </div>

                {/* Gate 2 */}
                <div className="p-4 rounded-xl bg-white border border-blue-200 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-xs font-bold text-blue-950">2. ABAP Cloud & Developer RAP Contract</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-6">
                    All on-stack development compiled under modern ABAP Cloud syntax rules with strict runtime isolation and zero legacy modifications.
                  </p>
                </div>

                {/* Gate 3 */}
                <div className="p-4 rounded-xl bg-white border border-blue-200 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-xs font-bold text-blue-950">3. Decoupled Side-by-Side Microservices</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-6">
                    Partner portals, heavy computation engines, and external B2B apps run in standalone cloud containers on BTP Cloud Foundry or Kyma.
                  </p>
                </div>

                {/* Gate 4 */}
                <div className="p-4 rounded-xl bg-white border border-blue-200 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-xs font-bold text-blue-950">4. Automated CI/CD & Static Code Quality Gates</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-6">
                    Automated ABAP Test Cockpit (ATC) checks integrated into Git deployment pipelines to block non-compliant code before transport release.
                  </p>
                </div>

                {/* Gate 5 */}
                <div className="p-4 rounded-xl bg-white border border-blue-200 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-xs font-bold text-blue-950">5. Event-Driven Asynchronous Architecture</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-6">
                    Legacy RFC and synchronous point-to-point batch interfaces migrated to persistent queues in SAP Event Mesh for decoupled resilience.
                  </p>
                </div>

              </div>

              <div className="pt-3 border-t border-blue-200 flex justify-between items-center text-xs text-slate-600">
                <span>Certified Clean Core Practice</span>
                <span className="font-mono font-bold text-blue-700">100% Upgrade Safe</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: EXECUTIVE BTP PRACTICE ADVISORY CTA (Royal Blue & White)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-blue-950 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900 border border-blue-700 text-xs font-mono font-bold uppercase tracking-wider text-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-300" />
            <span>KNOOVIQ TECHNOLOGY PRACTICE ADVISORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Accelerate Your Clean Core Transformation on SAP BTP
          </h2>

          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Eliminate technical debt and accelerate enterprise agility. Our team of certified SAP BTP enterprise architects guides your organization through architecture strategy, CAP development, and automated CI/CD governance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact('SAP BTP Architecture & Clean Core Advisory')}
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition-all flex items-center gap-2 group"
            >
              <span>Schedule Architecture Advisory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/technology/sap-hana"
              className="px-6 py-3.5 rounded-xl bg-white text-blue-950 font-semibold text-sm hover:bg-blue-50 transition-all border border-blue-200"
            >
              Explore SAP HANA In-Memory &rarr;
            </Link>
          </div>

          <div className="pt-8 border-t border-blue-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-300">Zero Core Disruption</div>
              <div className="text-[11px] text-blue-200 mt-0.5">Clean Core Governance</div>
            </div>
            <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-300">Rapid Time-to-Market</div>
              <div className="text-[11px] text-blue-200 mt-0.5">SAP Build Low-Code</div>
            </div>
            <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-300">Decoupled Scale</div>
              <div className="text-[11px] text-blue-200 mt-0.5">Side-by-Side BTP Microservices</div>
            </div>
            <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-300">Secure AI Hub</div>
              <div className="text-[11px] text-blue-200 mt-0.5">Grounded Enterprise LLMs</div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
