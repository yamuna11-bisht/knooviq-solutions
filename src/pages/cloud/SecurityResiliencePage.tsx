import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  ShieldAlert,
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
  KeyRound,
  FileCheck2,
  RefreshCw,
  Eye,
  AlertTriangle
} from 'lucide-react';
import { CloudOperationsHero } from '../../components/cloud/CloudOperationsHero';
import { RelatedCloudServices } from '../../components/cloud/RelatedCloudServices';
import { CloudConsultationCTA } from '../../components/cloud/CloudConsultationCTA';

interface ChildPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const SecurityResiliencePage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeTier, setActiveTier] = useState<number>(0);
  const [activePhase, setActivePhase] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'Security & Resilience | Cybersecurity, Zero Trust & DR | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const tabParam = searchParams.get('tab');
    if (tabParam === 'cybersecurity') setActiveTab(0);
    else if (tabParam === 'iam') setActiveTab(1);
    else if (tabParam === 'data-protection') setActiveTab(2);
    else if (tabParam === 'bcp') setActiveTab(3);
    else if (tabParam === 'dr') setActiveTab(4);
  }, [searchParams]);

  const securityPillars = [
    {
      id: 'cybersecurity',
      title: 'Enterprise Cybersecurity & 24/7 SOC',
      badge: '24/7 SOC & MDR',
      subtitle: 'Managed Detection and Response (MDR), SIEM/SOAR automated defense, and MITRE ATT&CK threat hunting.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80',
      subParts: [
        {
          name: '24/7 Managed SOC & Threat Intelligence',
          description: 'Continuous monitoring of cloud audit trails, endpoint telemetry, and firewall logs by certified security analysts.',
          spec: 'Sub-15-minute Mean Time to Contain (MTTC) for high-severity active security threats'
        },
        {
          name: 'Next-Gen SIEM & SOAR Automation',
          description: 'Automated playbook execution isolating compromised instances and revoking compromised tokens within seconds.',
          spec: 'Instant automated containment preventing lateral attacker movement across network segments'
        },
        {
          name: 'Continuous Cloud Security Posture (CSPM)',
          description: 'Automated scanning for open S3 buckets, misconfigured security groups, and exposed database ports.',
          spec: '100% adherence to CIS Benchmarks, ISO 27001, and SOC 2 Type II controls'
        },
        {
          name: 'Vulnerability Management & Pen Testing',
          description: 'Automated vulnerability scanning across container images and virtual machines with annual red-team penetration tests.',
          spec: 'Zero unpatched critical vulnerabilities active longer than 7 days'
        }
      ]
    },
    {
      id: 'iam',
      title: 'Identity & Access Management (Zero Trust IAM)',
      badge: 'ZERO TRUST IAM',
      subtitle: 'Single Sign-On federation, Privileged Access Management (PAM), and Just-In-Time (JIT) least-privilege elevation.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
      subParts: [
        {
          name: 'Privileged Access Management (PAM) Vaults',
          description: 'Centralized session isolation, credential check-out, and continuous keystroke logging powered by CyberArk / BeyondTrust.',
          spec: 'Elimination of all permanent root / administrative passwords across cloud fleets'
        },
        {
          name: 'Just-in-Time (JIT) Least Privilege Elevation',
          description: 'Time-bound access elevation requiring managerial approval and automatically revoking permissions after 2 hours.',
          spec: 'Guaranteed zero standing administrative access across production environments'
        },
        {
          name: 'Multi-Factor Authentication (MFA) & Conditional Access',
          description: 'FIDO2 WebAuthn hardware keys and risk-based adaptive policies evaluating user geolocation and device health.',
          spec: '100% MFA enforcement blocking credential stuffing and phishing attacks'
        },
        {
          name: 'Identity Lifecycle Automation (Joiner/Mover/Leaver)',
          description: 'Automated provisioning and de-provisioning synchronized with HR systems (Workday, SuccessFactors).',
          spec: 'Instant sub-minute de-provisioning of all access credentials upon employee termination'
        }
      ]
    },
    {
      id: 'data-protection',
      title: 'Cryptographic Data Protection & Compliance',
      badge: 'KMS ENVELOPE ENCRYPTION',
      subtitle: 'Customer-managed encryption keys (CMEK), field-level tokenization, and Data Loss Prevention (DLP).',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
      subParts: [
        {
          name: 'Customer-Managed KMS Envelope Encryption',
          description: 'Hardware Security Module (HSM) backed encryption keys protecting data-at-rest and data-in-transit across all clouds.',
          spec: 'AES-256 GCM encryption enforced across 100% of cloud disks, buckets, and databases'
        },
        {
          name: 'Automated Data Loss Prevention (DLP)',
          description: 'Deep content inspection identifying PII, credit card numbers, and health records in database tables and file buckets.',
          spec: 'Automated masking and redaction preventing accidental data leakage'
        },
        {
          name: 'Database Column-Level Tokenization',
          description: 'Reversible format-preserving tokenization protecting sensitive banking and national ID fields.',
          spec: 'Guaranteed security keeping plaintext data invisible even to database administrators'
        },
        {
          name: 'Regulatory Compliance Frameworks (GDPR & DPDP)',
          description: 'Automated audit reports demonstrating compliance with GDPR, HIPAA, RBI cybersecurity guidelines, and India DPDP Act.',
          spec: 'Continuous compliance evidence collection eliminating manual audit panic'
        }
      ]
    },
    {
      id: 'bcp',
      title: 'Business Continuity Planning (BCP ISO 22301)',
      badge: 'ISO 22301 COMPLIANT',
      subtitle: 'Comprehensive business impact analysis (BIA), executive crisis simulation drills, and operational resilience.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
      subParts: [
        {
          name: 'Business Impact Analysis (BIA) & Tiering',
          description: 'Rigorous financial and operational impact assessments categorizing applications into Mission-Critical, Business-Critical, and Support tiers.',
          spec: 'Clear contractual Recovery Point Objective (RPO) and Recovery Time Objective (RTO) targets'
        },
        {
          name: 'Executive Crisis Management & Tabletop Drills',
          description: 'Simulated ransomware attacks, regional datacenter blackouts, and supply chain failures with C-suite stakeholders.',
          spec: 'Semi-annual crisis management simulations validating leadership response readiness'
        },
        {
          name: 'Geo-Redundant Workforce Continuity Plans',
          description: 'Virtual desktop infrastructure (Azure Virtual Desktop / AWS WorkSpaces) enabling instant remote workforce relocation.',
          spec: 'Zero downtime for business operations during physical office closures'
        },
        {
          name: 'Third-Party Vendor Resilience Audits',
          description: 'Auditing critical SaaS dependencies and cloud vendors to eliminate single points of failure in the software supply chain.',
          spec: 'Validated vendor redundancy preventing cascading enterprise outages'
        }
      ]
    },
    {
      id: 'dr',
      title: 'Disaster Recovery (DR) & Automated Failover',
      badge: 'RPO < 5M &bull; RTO < 15M',
      subtitle: 'Multi-region automated pilot-light and warm-standby failover, continuous DR drills, and immutable backups.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80',
      subParts: [
        {
          name: 'Automated Multi-Region DNS Failover',
          description: 'Route 53 / Cloudflare Anycast health probes automatically shifting global user traffic to secondary regions upon failure.',
          spec: 'Sub-60-second automated DNS cutover with zero manual intervention required'
        },
        {
          name: 'Continuous Cross-Region Database Replication',
          description: 'Asynchronous streaming transactional replication between primary and secondary cloud availability zones and regions.',
          spec: 'Recovery Point Objective (RPO) under 5 minutes during catastrophic regional failures'
        },
        {
          name: 'Immutable Air-Gapped Ransomware Vaults',
          description: 'Write-Once-Read-Many (WORM) storage vaults locked with compliance mode retention that even root accounts cannot delete.',
          spec: 'Guaranteed unalterable backup copies protected against enterprise ransomware wiping'
        },
        {
          name: 'Automated Non-Disruptive DR Drills',
          description: 'Quarterly isolated sandbox spin-ups restoring entire application stacks from backups to prove recoverability.',
          spec: '100% successful recovery verification without disrupting live production traffic'
        }
      ]
    }
  ];

  const securityArchitectureTiers = [
    {
      title: 'Tier 01: Perimeter Defense & Edge DDoS Shield',
      desc: 'Global Anycast CDN protection, Cloud Armor WAF filtering, and TLS 1.3 cryptographic termination.',
      components: [
        { name: 'Cloud Armor & AWS Shield Advanced', role: 'Protects against Layer 3/4 and Layer 7 distributed volumetric DDoS attacks' },
        { name: 'Next-Gen Cloud WAF Inspection', role: 'Inspects HTTP payloads against OWASP Top 10 vulnerabilities' },
        { name: 'Zero-Trust Network Access (ZTNA)', role: 'Context-aware micro-tunnels replacing legacy slow VPNs' },
        { name: 'DNS Firewall & Malware Sinkholing', role: 'Blocks outbound command-and-control communication to known malicious domains' }
      ]
    },
    {
      title: 'Tier 02: Zero-Trust Identity & PAM Boundary',
      desc: 'Identity-aware proxies, privileged access vaults, and adaptive multi-factor authentication.',
      components: [
        { name: 'CyberArk / BeyondTrust PAM Vault', role: 'Isolates and records privileged administrative sessions with zero static passwords' },
        { name: 'Microsoft Entra ID / Okta SSO Federation', role: 'SAML 2.0 single sign-on with FIDO2 WebAuthn hardware keys' },
        { name: 'Conditional Access Policy Engine', role: 'Evaluates user risk, device hygiene, and location before granting access' },
        { name: 'Workload Identity Federation', role: 'Allows Kubernetes pods to access cloud resources without hardcoded API keys' }
      ]
    },
    {
      title: 'Tier 03: Workload Isolation & Cryptographic KMS Fabric',
      desc: 'Hardware Security Module encryption keys, micro-segmentation, and immutable data vaults.',
      components: [
        { name: 'Cloud KMS Hardware Security Modules (HSM)', role: 'Customer-controlled cryptographic keys enforcing envelope encryption' },
        { name: 'Micro-segmentation Network Policies', role: 'Restricts lateral pod-to-pod and server-to-server traffic flows' },
        { name: 'Automated Data Loss Prevention (DLP)', role: 'Continuously scans databases for unencrypted PII and sensitive payment records' },
        { name: 'Immutable WORM Backup Vaults', role: 'Air-gapped retention lock protecting critical snapshots from ransomware wiping' }
      ]
    },
    {
      title: 'Tier 04: 24/7 MDR SOC & Automated Disaster Recovery',
      desc: 'Continuous threat hunting, automated SOAR incident response, and sub-minute multi-region failover.',
      components: [
        { name: 'Microsoft Sentinel / Splunk Cloud SIEM', role: 'Aggregates petabytes of security telemetry with ML anomaly detection' },
        { name: 'SOAR Automated Playbook Runner', role: 'Instantly quarantines infected hosts and revokes compromised tokens' },
        { name: 'Automated Multi-Region Route 53 / Anycast DR', role: 'Redirects traffic to secondary datacenter regions upon outage' },
        { name: 'Continuous DR Testing Sandbox', role: 'Automates quarterly non-disruptive failover simulations' }
      ]
    }
  ];

  const resilienceLifecyclePhases = [
    {
      stage: 'Phase 01',
      title: 'Threat Modeling & Security Posture Audit',
      badge: 'THREAT MODELING',
      desc: 'Auditing existing cloud IAM permissions, network perimeter exposures, and conducting comprehensive BIA tiering.',
      deliverables: ['Cloud Security Posture Assessment (CSPM)', 'Business Impact Analysis (BIA) Matrix', 'CIS Benchmark Gap Report'],
      gate: 'Audit Gate: Complete vulnerability baseline and RPO/RTO targets agreed with executive stakeholders'
    },
    {
      stage: 'Phase 02',
      title: 'Zero-Trust IAM & KMS Encryption Baseline',
      badge: 'ZERO TRUST SETUP',
      desc: 'Deploying PAM vaults, JIT access workflows, customer-managed KMS keys, and enforcing 100% MFA adoption.',
      deliverables: ['Privileged Access Management (PAM) Blueprint', 'KMS Key Hierarchy Specification', 'Conditional Access Rule Base'],
      gate: 'Security Gate: Elimination of standing administrative keys and 100% encryption verification'
    },
    {
      stage: 'Phase 03',
      title: 'Automated DR Pipeline & Replication Setup',
      badge: 'DR REPLICATION',
      desc: 'Configuring cross-region database replication, immutable WORM backup vaults, and automated DNS failover probes.',
      deliverables: ['Automated DR Failover Runbooks', 'Immutable Storage Vault Baseline', 'Cross-Region Replication Verification'],
      gate: 'Validation Gate: Pilot failover completed within agreed RPO (<5 min) and RTO (<15 min)'
    },
    {
      stage: 'Phase 04',
      title: '24/7 SOC Integration & Tabletop Drills',
      badge: 'SOC & DRILLS',
      desc: 'Connecting cloud telemetry to 24/7 MDR SOC and executing executive ransomware crisis simulation drills.',
      deliverables: ['24/7 SOC Operational Runbooks', 'SOAR Automated Playbook Library', 'Tabletop Exercise Findings Report'],
      gate: 'Drill Gate: Executive leadership and technical teams successfully execute disaster response'
    },
    {
      stage: 'Phase 05',
      title: 'Continuous Resilience Governance & Auditing',
      badge: 'STEADY STATE',
      desc: 'Quarterly penetration testing, annual ISO 22301 audits, and continuous cloud compliance posture management.',
      deliverables: ['Quarterly Penetration Test Reports', 'ISO 22301 / SOC 2 Compliance Evidence', 'Continuous Disaster Drills'],
      gate: 'Governance Gate: Zero critical audit findings and 100% DR test pass rate'
    }
  ];

  const securityFaqs = [
    {
      question: 'What is KNOOVIQ’s approach to Zero Trust Architecture?',
      answer: 'Zero Trust assumes that threats exist both inside and outside the corporate network. We enforce the principle of "Never Trust, Always Verify." Every access request is dynamically evaluated based on identity, device compliance, geographic context, and least-privilege requirements before access is granted. We eliminate static passwords and wide network access using micro-segmentation and Privileged Access Management (PAM).'
    },
    {
      question: 'How do you guarantee RPO < 5 minutes and RTO < 15 minutes during disaster recovery?',
      answer: 'We deploy active-passive and warm-standby multi-region architectures with continuous asynchronous transactional database replication. Global Anycast DNS health checkers automatically detect primary region failures and redirect traffic to the secondary region in under 60 seconds, where automated Terraform and container scripts scale up compute to meet demand.'
    },
    {
      question: 'How do immutable WORM vaults protect against modern enterprise ransomware?',
      answer: 'Modern ransomware actively seeks out and deletes backup repositories before encrypting primary servers. Immutable Write-Once-Read-Many (WORM) vaults with Compliance Lock prevent snapshots from being deleted, overwritten, or shortened in retention period by anyone — including cloud account root administrators — ensuring a clean recovery point is always guaranteed.'
    },
    {
      question: 'What compliance frameworks does your security practice support?',
      answer: 'Our security and data protection architectures are built to comply with global and local regulatory standards including ISO 27001, ISO 22301 (Business Continuity), SOC 2 Type II, PCI-DSS (Payment Cards), HIPAA (Healthcare), GDPR, and the India Digital Personal Data Protection (DPDP) Act.'
    },
    {
      question: 'How does 24/7 Managed Detection and Response (MDR) differ from basic antivirus software?',
      answer: 'Basic antivirus only catches known malware signatures on local laptops. Our 24/7 MDR combines AI-driven behavioral analysis, cloud audit trails (CloudTrail, Azure Activity Log), network flow telemetry, and certified human threat hunters who investigate subtle attacker movements (living-off-the-land techniques) and contain threats in under 15 minutes.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* SECTION 01: HERO */}
      <CloudOperationsHero
        badgeText="SECURITY & RESILIENCE PRACTICE"
        badgeIcon={<ShieldAlert className="w-3.5 h-3.5 text-[#00A3E0]" />}
        heading="Security & Resilience"
        headline="Enterprise Zero-Trust Cybersecurity, Data Protection & Disaster Recovery"
        description="Safeguard mission-critical business assets with 24/7 Managed Detection & Response (MDR), Zero-Trust Identity & PAM, Customer KMS encryption, ISO 22301 business continuity, and sub-15-minute automated DR failover."
        primaryCtaText="Explore Security Domains"
        primaryCtaHref="#capabilities"
        secondaryCtaText="Consult Chief Security Architect"
        secondaryCtaAction={() => onOpenContact && onOpenContact('Security & Resilience Architecture')}
        currentPage="Security & Resilience"
        heroImage="/images/cloud/cyber_hero_wide.jpg"
        stats={[
          { label: "Target RTO", value: "<15 Mins", subtext: "Automated Multi-Region DR" },
          { label: "Target RPO", value: "<5 Mins", subtext: "Continuous Data Sync" },
          { label: "Threat Containment", value: "<15 Mins", subtext: "24/7 MDR & SOAR" },
          { label: "Security Standard", value: "Zero Trust", subtext: "NIST 800-207 Aligned" }
        ]}
      />

      {/* SECTION 02: 5 SECURITY DOMAINS */}
      <section id="capabilities" className="py-20 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 02 &bull; SECURITY CAPABILITY DOMAINS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Five Core Security & Resilience Pillars (Section-within-Section)
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Select any security domain below to review its Zero-Trust controls, cryptographic specifications, and disaster recovery metrics.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {securityPillars.map((pillar, idx) => (
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
                    DOMAIN 0{idx + 1}
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
                  {securityPillars[activeTab].badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  {securityPillars[activeTab].title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {securityPillars[activeTab].subtitle}
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg aspect-video">
                  <img
                    src={securityPillars[activeTab].image}
                    alt={securityPillars[activeTab].title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium backdrop-blur-md bg-black/40 p-2 rounded-lg border border-white/20">
                    Zero-Trust Architecture Certified &bull; KNOOVIQ Cyber Defense Practice
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 dark:border-white/10 pt-6">
              <h4 className="text-xs font-mono font-bold text-[#00A3E0] dark:text-cyan-400 uppercase tracking-wider mb-4">
                SECURITY CONTROLS & ARCHITECTURAL DELIVERABLES:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {securityPillars[activeTab].subParts.map((sub, sIdx) => (
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
                Evaluating multi-region DR failover architectures or Zero-Trust PAM elevation?
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {activeTab === 0 && (
                  <Link
                    to="/cloud-operations/cybersecurity"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/15 text-white text-xs font-bold transition-all border border-slate-700 dark:border-white/20"
                  >
                    <span>Explore Dedicated Cybersecurity Page</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00A3E0]" />
                  </Link>
                )}
                {activeTab === 1 && (
                  <Link
                    to="/cloud-operations/iam"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/15 text-white text-xs font-bold transition-all border border-slate-700 dark:border-white/20"
                  >
                    <span>Explore Dedicated IAM Page</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00A3E0]" />
                  </Link>
                )}
                {activeTab === 2 && (
                  <Link
                    to="/cloud-operations/data-protection"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/15 text-white text-xs font-bold transition-all border border-slate-700 dark:border-white/20"
                  >
                    <span>Explore Dedicated Data Protection Page</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00A3E0]" />
                  </Link>
                )}
                {activeTab === 3 && (
                  <Link
                    to="/cloud-operations/business-continuity"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/15 text-white text-xs font-bold transition-all border border-slate-700 dark:border-white/20"
                  >
                    <span>Explore Dedicated Business Continuity Page</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00A3E0]" />
                  </Link>
                )}
                {activeTab === 4 && (
                  <Link
                    to="/cloud-operations/disaster-recovery"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/15 text-white text-xs font-bold transition-all border border-slate-700 dark:border-white/20"
                  >
                    <span>Explore Dedicated Disaster Recovery Page</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00A3E0]" />
                  </Link>
                )}
                <button
                  onClick={() => onOpenContact && onOpenContact(`Security & Resilience: ${securityPillars[activeTab].title}`)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00A3E0] hover:bg-[#0087ba] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  <span>Request Cyber Resilience Assessment</span>
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
              <span>SECTION 03 &bull; ZERO-TRUST DEFENSE BLUEPRINT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              4-Tier Zero-Trust & Cyber Resilience Architecture
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Defense-in-depth architecture spanning DDoS edge perimeters, PAM identity boundaries, KMS cryptographic fabrics, and automated DR failover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {securityArchitectureTiers.map((tier, idx) => (
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
                ACTIVE CYBER RESILIENCE SPECIFICATION
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {securityArchitectureTiers[activeTier].title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                {securityArchitectureTiers[activeTier].desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
              {securityArchitectureTiers[activeTier].components.map((c, cIdx) => (
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

      {/* SECTION 04: RESILIENCE METHODOLOGY */}
      <section id="methodology" className="py-20 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>SECTION 04 &bull; RESILIENCE DELIVERY ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              5-Phase Cyber Resilience & DR Implementation Roadmap
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Structured lifecycle aligning threat modeling, PAM deployment, automated DR pipelines, and executive crisis drills.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
            {resilienceLifecyclePhases.map((phase, idx) => (
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
                  {resilienceLifecyclePhases[activePhase].stage} &bull; {resilienceLifecyclePhases[activePhase].badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {resilienceLifecyclePhases[activePhase].title}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-mono font-bold">
                ISO 22301 VALIDATED
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {resilienceLifecyclePhases[activePhase].desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-white/10">
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  VERIFIED DELIVERABLES:
                </h4>
                <ul className="space-y-2">
                  {resilienceLifecyclePhases[activePhase].deliverables.map((del, dIdx) => (
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
                  <span>SECURITY GOVERNANCE GATE:</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                  {resilienceLifecyclePhases[activePhase].gate}
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
              Quantifiable Security & Resilience Outcomes
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Verified security posture benchmarks and disaster recovery metrics delivered for enterprise clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stat: '< 15 Mins',
                title: 'Disaster Recovery RTO',
                desc: 'Automated multi-region DNS failover and database promotion restoring operations swiftly.'
              },
              {
                stat: '< 5 Mins',
                title: 'Data Loss Target (RPO)',
                desc: 'Continuous block and transactional replication minimizing data exposure to minutes.'
              },
              {
                stat: '100% Zero',
                title: 'Standing Privileged Keys',
                desc: 'Privileged Access Management (PAM) with just-in-time elevation eliminating credential theft.'
              },
              {
                stat: 'Zero Ransom',
                title: 'WORM Vault Protection',
                desc: 'Immutable air-gapped compliance vaults protecting critical backups from ransomware destruction.'
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
              <span>SECTION 06 &bull; RESILIENCE KNOWLEDGE BASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Security & DR Questions
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Clear answers on Zero Trust architecture, multi-region DR drills, and ransomware defense.
            </p>
          </div>

          <div className="space-y-3">
            {securityFaqs.map((faq, idx) => (
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
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#050B17] border-t border-white/10 overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00A3E0]/10 via-transparent to-blue-900/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-r from-blue-900/30 via-cyan-950/30 to-slate-900/60 border border-cyan-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-sm">

            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block">
                SECURITY &amp; RESILIENCE PRACTICE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Ready to Harden Your Cloud Infrastructure &amp; Validate DR Readiness?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Schedule a confidential consultation with our Chief Cyber Resilience Architects to audit your Zero-Trust posture, review immutable backup vaults, and design multi-region automated disaster recovery.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => onOpenContact && onOpenContact('Talk to Our Experts – Security & Resilience')}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Talk to Our Cloud Experts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/cloud-operations/cybersecurity"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Cybersecurity</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      <RelatedCloudServices currentPath="/cloud-operations/security" />

    </div>
  );
};
