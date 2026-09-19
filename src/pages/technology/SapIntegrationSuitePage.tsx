import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Network, 
  Workflow, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  Lock, 
  Layers, 
  Zap, 
  Server, 
  Globe2, 
  RefreshCw,
  Boxes,
  Sparkles,
  FileCheck
} from 'lucide-react';

interface TechnologyPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const SapIntegrationSuitePage: React.FC<TechnologyPageProps> = ({ onOpenContact }) => {
  const prebuiltAccelerators = [
    {
      id: 'acc-1',
      category: 'CRM & Sales',
      title: 'Salesforce CRM &harr; SAP S/4HANA Quote-to-Cash',
      description: 'Bi-directional real-time sync of Account, Opportunity, Sales Order, and Delivery tracking with automated error queues.',
      protocol: 'OData v4 / REST Webhook',
      certified: 'SAP Certified Package',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'acc-2',
      category: 'HCM & Workforce',
      title: 'Workday HCM &harr; SAP SuccessFactors Employee Central',
      description: 'Automated worker onboarding, organizational unit mapping, and compensation change propagation across HR domains.',
      protocol: 'SOAP / REST / JSON',
      certified: 'Enterprise Standard',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'acc-3',
      category: 'B2B & EDI',
      title: 'ANSI X12 & EDIFACT Global Supply Chain Adapter Pack',
      description: 'Pre-mapped EDI 850 (Purchase Order), 855 (PO Ack), 856 (ASN Ship Notice), and 810 (Invoice) with AS2 cryptographic signing.',
      protocol: 'AS2 / SFTP / EDIFACT',
      certified: 'GS1 Compliant',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'acc-4',
      category: 'Govt E-Invoicing',
      title: 'Peppol B2G & National E-Invoicing (GST / SDI / Factur-X)',
      description: 'Legally compliant electronic tax invoice signing, clearance integration with government tax revenue authorities.',
      protocol: 'AS4 / Peppol BIS 3.0',
      certified: 'Government Approved',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'acc-5',
      category: 'ITSM & Service',
      title: 'ServiceNow ITSM &harr; SAP Service Cloud / Plant Maintenance',
      description: 'Auto-sync equipment breakdown tickets, maintenance work orders, and spare parts inventory requisition status.',
      protocol: 'REST / OData v2',
      certified: 'SAP Certified Package',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'acc-6',
      category: 'Payments & Treasury',
      title: 'Stripe & Adyen Settlement Ledger to SAP FI-AR',
      description: 'Daily automated reconciliation of credit card settlement batches, dispute fees, and bank cash allocation ledgers.',
      protocol: 'REST Webhooks / OData',
      certified: 'PCI-DSS Compliant',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-blue-600 selection:text-white font-sans antialiased">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Global Interconnected API Plexus)
          (Blue & White, Pure Information, Live Bus Telemetry Cards)
          ========================================================================= */}
      <section className="relative w-full min-h-[640px] lg:min-h-[700px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 overflow-hidden bg-blue-950 border-b border-blue-900">
        
        {/* Full-Bleed Enterprise Background Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80" 
            alt="SAP Integration Suite Global Interconnected Enterprise iPaaS" 
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/75 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-blue-950/50 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-6">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 backdrop-blur-md border border-blue-500/30 text-xs font-mono font-bold uppercase tracking-wider text-blue-300">
                <Network className="w-3.5 h-3.5 text-blue-400" />
                <span>ENTERPRISE iPAAS &bull; SAP INTEGRATION SUITE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                Connect Everything to Anything with <br />
                <span className="text-blue-400">
                  Enterprise-Grade iPaaS & Event Mesh
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed pt-1">
                Orchestrate multi-cloud ecosystems, automate B2B supply chains, and modernize legacy SAP PI/PO systems. SAP Integration Suite delivers guaranteed persistent delivery, real-time API management, and pre-packaged enterprise accelerators.
              </p>
            </motion.div>

            {/* Protocol Telemetry Stream (Blue & White) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white border border-blue-100 shadow-xl">
              <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100">
                <div className="text-[11px] font-mono uppercase text-blue-700 font-semibold mb-1">Guaranteed Delivery</div>
                <div className="text-2xl font-black text-blue-950 font-mono">99.999%</div>
                <div className="text-[10px] text-slate-500">Persistent Event Mesh</div>
              </div>

              <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100">
                <div className="text-[11px] font-mono uppercase text-blue-700 font-semibold mb-1">Pre-Built iFlows</div>
                <div className="text-2xl font-black text-blue-700 font-mono">3,200+</div>
                <div className="text-[10px] text-slate-500">SAP Business Accelerator</div>
              </div>

              <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100">
                <div className="text-[11px] font-mono uppercase text-blue-700 font-semibold mb-1">Protocols Supported</div>
                <div className="text-2xl font-black text-blue-950 font-mono">OData / AS2</div>
                <div className="text-[10px] text-slate-500">AMQP, REST, Kafka, SOAP</div>
              </div>

              <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100">
                <div className="text-[11px] font-mono uppercase text-blue-700 font-semibold mb-1">Security Standard</div>
                <div className="text-2xl font-black text-blue-950 font-mono">Zero Trust</div>
                <div className="text-[10px] text-slate-500">mTLS & OAuth 2.0</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenContact('SAP Integration Suite Architecture Advisory')}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 group"
              >
                <span>Request Integration Blueprint</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#integration-patterns"
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-blue-400/30 text-white font-semibold text-sm backdrop-blur-md transition-all flex items-center gap-2"
              >
                <Workflow className="w-4 h-4 text-blue-400" />
                <span>Explore Enterprise Patterns</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ENTERPRISE INTEGRATION PATTERNS (EIP) ARCHITECTURE
          (Blue & White, Pure Information, All 5 Canonical Patterns Displayed)
          ========================================================================= */}
      <section id="integration-patterns" className="py-16 sm:py-20 bg-blue-50/40 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-800">
                <Workflow className="w-3.5 h-3.5" />
                <span>CANONICAL EIP ARCHITECTURE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-950 tracking-tight">
                Enterprise Integration Patterns in Action
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                How SAP Cloud Integration orchestrates complex message payloads across disparate global IT systems. Structured canonical patterns ensure message safety, zero data loss, and high throughput.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-xl relative h-60">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80" 
                  alt="Digital Network Dispatch and Switching Infrastructure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent flex items-end p-5">
                  <span className="text-xs font-mono text-white bg-blue-950/90 px-3 py-1 rounded border border-blue-400/40">
                    High-Availability Event Mesh
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* All 5 Canonical Patterns Displayed directly as informative cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Pattern 1 */}
            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 text-xs font-mono font-bold border border-blue-200">
                <span>PATTERN 01</span>
              </div>
              <h3 className="text-lg font-bold text-blue-950">Content-Based Router</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Evaluates header parameters or JSONPath expressions inside the message body to dynamically dispatch payloads to European, Americas, or Asian SAP instances with dedicated security credentials.
              </p>
              <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-500">
                <div>&bull; <strong className="text-blue-950">Zero Hardcoded Endpoints:</strong> Directory-managed routing rules.</div>
                <div>&bull; <strong className="text-blue-950">Regional Compliance:</strong> Ensures EU data never leaves EU gateways.</div>
              </div>
            </div>

            {/* Pattern 2 */}
            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 text-xs font-mono font-bold border border-blue-200">
                <span>PATTERN 02</span>
              </div>
              <h3 className="text-lg font-bold text-blue-950">Splitter & Aggregator</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Processes a single 50,000-line daily invoice document by splitting it into 100-line individual message fragments. Executes parallel postings to avoid SAP gateway timeout limits, then aggregates confirmations into an audit log.
              </p>
              <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-500">
                <div>&bull; <strong className="text-blue-950">High-Volume Scale:</strong> Prevents memory overflows on large payloads.</div>
                <div>&bull; <strong className="text-blue-950">Consolidated Audit:</strong> Single return report for the entire batch.</div>
              </div>
            </div>

            {/* Pattern 3 */}
            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 text-xs font-mono font-bold border border-blue-200">
                <span>PATTERN 03</span>
              </div>
              <h3 className="text-lg font-bold text-blue-950">Guaranteed Store-and-Forward</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Even when SAP S/4HANA is undergoing maintenance upgrades, e-commerce orders from Shopify or partner EDI transmissions are safely acknowledged and written to persistent JMS storage in SAP Event Mesh.
              </p>
              <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-500">
                <div>&bull; <strong className="text-blue-950">Zero Message Loss:</strong> Resilient disk persistence with auto-drain.</div>
                <div>&bull; <strong className="text-blue-950">Downtime Decoupling:</strong> Upstream systems continue without backpressure.</div>
              </div>
            </div>

            {/* Pattern 4 */}
            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 text-xs font-mono font-bold border border-blue-200">
                <span>PATTERN 04</span>
              </div>
              <h3 className="text-lg font-bold text-blue-950">Idempotent Receiver</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                External payment gateways often resend webhooks if network handshakes experience millisecond delays. The Idempotent Filter checks a shared in-memory deduplication store to prevent duplicate invoice postings.
              </p>
              <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-500">
                <div>&bull; <strong className="text-blue-950">Financial Integrity:</strong> Prevents duplicate payment reconciliations.</div>
                <div>&bull; <strong className="text-blue-950">Cached Response:</strong> Returns original confirmation with zero re-processing.</div>
              </div>
            </div>

            {/* Pattern 5 */}
            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 text-xs font-mono font-bold border border-blue-200">
                <span>PATTERN 05</span>
              </div>
              <h3 className="text-lg font-bold text-blue-950">Scatter-Gather Orchestration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When an enterprise buyer requests freight transport rates, the integration flow scatters the request across DHL, FedEx, and Maersk API gateways simultaneously. Once all respond, the flow gathers rates and selects the optimal carrier.
              </p>
              <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-500">
                <div>&bull; <strong className="text-blue-950">Parallel Execution:</strong> Reduces multi-vendor query time from 15s to 1.2s.</div>
                <div>&bull; <strong className="text-blue-950">Dynamic Aggregation:</strong> Smart fallback if a partner API times out.</div>
              </div>
            </div>

            {/* Architectural Summary Card */}
            <div className="p-6 rounded-2xl bg-blue-950 text-white shadow-md space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-blue-300 uppercase">ENTERPRISE GOVERNANCE</div>
                <h3 className="text-lg font-bold text-white mt-1">EIP Compliance Guarantee</h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  All Knooviq iFlows implement standardized logging headers, correlation IDs, and automated alerting channels to Datadog, Dynatrace, or SAP Cloud ALM.
                </p>
              </div>
              <div className="pt-4 border-t border-blue-800">
                <span className="text-xs text-blue-300 font-mono">Audited by SAP Integration Advisory</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ENTERPRISE INTEGRATION ARCHITECTURE & MEDIATION PILLARS
          (Blue & White, Pure Information Architecture with Visual Imagery)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-800">
                <FileCheck className="w-3.5 h-3.5" />
                <span>INTEGRATION ARCHITECTURE PILLARS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-950 tracking-tight">
                4 Core Engineering Standards of Enterprise Integration
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Modern enterprise integration requires strict payload canonicalization, automated token lifecycle management, and resilient fault isolation to ensure zero message loss across planetary hybrid networks.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-xl relative h-60">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80" 
                  alt="Enterprise Cloud Architecture Engineering"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent flex items-end p-5">
                  <span className="text-xs font-mono text-white bg-blue-950/90 px-3 py-1 rounded border border-blue-400/40">
                    High-Reliability Enterprise iPaaS
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">PILLAR 1: IDENTITY FEDERATION</div>
              <h3 className="text-base font-bold text-blue-950">OAuth 2.0 Token Lifecycle</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated token fetch, caching, and refresh sub-processes. Tokens are injected dynamically into outbound requests without hardcoded credentials or manual rotation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">PILLAR 2: CANONICAL MODELING</div>
              <h3 className="text-base font-bold text-blue-950">Standard Canonical Schemas</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Translates third-party CRM payloads into canonical SAP S/4HANA OData business entities, isolating changes so third-party updates never break core ERP logic.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">PILLAR 3: EXCEPTION HANDLING</div>
              <h3 className="text-base font-bold text-blue-950">RFC 7807 Problem Details</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standardizes downstream ERP faults into machine-readable JSON problem details with correlation IDs for rapid end-to-end telemetry triage.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">PILLAR 4: CRYPTOGRAPHIC TRUST</div>
              <h3 className="text-base font-bold text-blue-950">HMAC Signature Verification</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Validates inbound webhooks with cryptographic SHA256 message digests, dropping spoofed payloads before they consume internal processing threads.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: PRE-PACKAGED BUSINESS ACCELERATORS DIRECTORY
          (Blue & White, Pure Information, Cards with Enterprise Photos)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-blue-50/40 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-800">
              <Boxes className="w-3.5 h-3.5" />
              <span>OUT-OF-THE-BOX CONNECTORS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-950 tracking-tight">
              Pre-Packaged Enterprise Integration Directory
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Accelerate your time-to-value from months to days. Certified pre-built integration flows with full standard mapping, exception alerts, and regression test suites.
            </p>
          </div>

          {/* Cards Grid with Images in Blue & White */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prebuiltAccelerators.map((item) => (
              <div 
                key={item.id}
                className="rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="h-44 w-full relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-950/90 text-white font-bold border border-blue-400/30">
                      {item.certified}
                    </span>
                    <span className="absolute top-3 right-3 text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-600 text-white font-bold">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <h3 
                      className="text-base font-bold text-blue-950 group-hover:text-blue-600 transition-colors"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-blue-700 font-semibold">{item.protocol}</span>
                  <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
                    <span>Standard iFlow</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: API MANAGEMENT 4-TIER SECURITY PIPELINE & POLICY SHIELD
          (Blue & White, Pure Information with Cybersecurity Image)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-800">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ZERO-TRUST GATEWAY HARDENING</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-950 tracking-tight">
                4-Tier API Security Shield & Traffic Mediation
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Protect mission-critical SAP backend databases from volumetric DDoS attacks, malicious injection payloads, and unauthorized API scraping with full policy enforcement.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-xl relative h-60">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80" 
                  alt="Enterprise Cyber Defense Network"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent flex items-end p-5">
                  <span className="text-xs font-mono text-white bg-blue-950/90 px-3 py-1 rounded border border-blue-400/40">
                    Zero-Trust Gateway Enforcement
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">TIER 1: TRAFFIC CONTROL</div>
              <h3 className="text-base font-bold text-blue-950">Spike Arrest & Quota</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prevents sudden traffic bursts from overwhelming backend application servers by smoothly pacing requests across 1-minute sliding windows.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">TIER 2: IDENTITY VALIDATION</div>
              <h3 className="text-base font-bold text-blue-950">Mutual TLS & OAuth 2.0</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enforces bi-directional certificate verification and cryptographically signed JWT tokens with claims validation for zero-trust microservice mesh.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">TIER 3: THREAT INSPECTION</div>
              <h3 className="text-base font-bold text-blue-950">JSON / XML Bomb Scrubbing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Parses incoming payloads before reaching internal services, stripping recursive entity expansions, SQL injection markers, and cross-site scripting.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">TIER 4: PERFORMANCE CACHE</div>
              <h3 className="text-base font-bold text-blue-950">Edge Response Caching</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Serves read-heavy static reference data (currency exchange rates, country codes, tax tables) directly from global edge RAM with configurable TTL.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: LEGACY SAP PI/PO TO INTEGRATION SUITE MIGRATION PLAYBOOK
          (Blue & White, Pure Information Comparative Table with High-Resolution Image)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-blue-50/40 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider text-blue-800">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>LEGACY SUNSET MITIGATION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-950 tracking-tight">
                SAP PI/PO 7.5 to Integration Suite Migration Framework
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                SAP NetWeaver PI/PO end-of-support is imminent. Migrate dual-stack interfaces, Java User-Defined Functions (UDFs), and B2B EDI configurations seamlessly without manual re-architecting.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-xl relative h-60">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80" 
                  alt="Enterprise Modernization Strategy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent flex items-end p-5">
                  <span className="text-xs font-mono text-white bg-blue-950/90 px-3 py-1 rounded border border-blue-400/40">
                    Automated Migration Assessment
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-blue-200 bg-white shadow-md mb-8">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-blue-200 bg-blue-950 text-white font-mono text-xs">
                  <th className="p-4 sm:p-5 font-bold uppercase">Capability / Feature</th>
                  <th className="p-4 sm:p-5 font-bold uppercase text-slate-300">Legacy SAP PI/PO (7.5 On-Prem)</th>
                  <th className="p-4 sm:p-5 font-bold uppercase text-blue-300">SAP Integration Suite (Cloud iPaaS)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-100 text-slate-700">
                <tr className="hover:bg-blue-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-blue-950">Infrastructure & Patching</td>
                  <td className="p-4 sm:p-5 text-amber-700">High operational overhead &bull; Manual Java OS patches</td>
                  <td className="p-4 sm:p-5 text-blue-700 font-semibold font-mono">100% Fully Managed SaaS &bull; Zero Patching Downtime</td>
                </tr>

                <tr className="hover:bg-blue-50/50 transition-colors bg-blue-50/20">
                  <td className="p-4 sm:p-5 font-bold text-blue-950">Migration Automation</td>
                  <td className="p-4 sm:p-5 text-slate-600">Manual ICO extraction and recreation</td>
                  <td className="p-4 sm:p-5 text-blue-700 font-semibold font-mono">Integrated Migration Assessment tool &bull; 70% Auto-Conversion</td>
                </tr>

                <tr className="hover:bg-blue-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-blue-950">Automated Regression Testing</td>
                  <td className="p-4 sm:p-5 text-slate-600">Complex manual mock testing</td>
                  <td className="p-4 sm:p-5 text-blue-700 font-semibold font-mono">Bit-by-bit payload comparison with Int4 Suite / Figaf</td>
                </tr>

                <tr className="hover:bg-blue-50/50 transition-colors bg-blue-50/20">
                  <td className="p-4 sm:p-5 font-bold text-blue-950">Event-Driven Architecture</td>
                  <td className="p-4 sm:p-5 text-slate-600">Rigid synchronous RFC/IDoc polling</td>
                  <td className="p-4 sm:p-5 text-blue-700 font-semibold font-mono">Native Event Mesh &bull; Kafka, MQTT, WebSockets</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: EXECUTIVE INTEGRATION ADVISORY CTA
          (Blue & White Enterprise CTA with Metric Badges)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-blue-950 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-600 text-xs font-mono font-bold uppercase tracking-wider text-blue-300">
            <Network className="w-3.5 h-3.5 text-blue-400" />
            <span>KNOOVIQ INTEGRATION PRACTICE ADVISORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Accelerate Your Enterprise Integration Modernization
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Eliminate point-to-point spaghetti code and accelerate your SAP PI/PO migration. Our certified SAP Integration Suite architects deliver resilient, secure, and future-proof enterprise connectivity.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact('SAP Integration Suite Full Modernization Advisory')}
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/40 transition-all flex items-center gap-2 group"
            >
              <span>Schedule Integration Advisory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/technology/cloud-transformation"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-blue-400/30 text-white font-semibold text-sm transition-all"
            >
              Explore Cloud Transformation &rarr;
            </Link>
          </div>

          <div className="pt-8 border-t border-blue-900/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-3 rounded-xl bg-white/5 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-400">Zero Message Loss</div>
              <div className="text-[11px] text-slate-300 mt-0.5">Persistent Store-and-Forward</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-400">3,200+ Accelerators</div>
              <div className="text-[11px] text-slate-300 mt-0.5">Pre-Packaged Connectors</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-400">PI/PO Fast Track</div>
              <div className="text-[11px] text-slate-300 mt-0.5">Automated Test Suites</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-blue-800">
              <div className="text-xs font-mono font-bold text-blue-400">Zero Trust Gateway</div>
              <div className="text-[11px] text-slate-300 mt-0.5">4-Tier Threat Protection</div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
