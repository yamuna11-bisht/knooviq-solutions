import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  KeyRound, 
  FileLock2, 
  History, 
  CheckCircle2, 
  Fingerprint,
  Sparkles,
  Server
} from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const pillars = [
    {
      title: 'Secure Vendor Data',
      badge: 'Encryption Standard',
      desc: 'Military-grade AES-256 encryption at rest and TLS 1.3 protocol for all data in transit across browser and API tiers.',
      icon: Lock,
      stats: 'AES-256 / TLS 1.3'
    },
    {
      title: 'Role-Based Access (RBAC)',
      badge: 'Access Governance',
      desc: 'Enforce strict principle of least privilege with granular access controls across Procurement, Finance, Legal, and External Vendor users.',
      icon: KeyRound,
      stats: 'Granular Matrix'
    },
    {
      title: 'Document Cryptography',
      badge: 'Tamper Protection',
      desc: 'Every uploaded GST certificate, cancelled cheque, and contract receives cryptographic SHA-256 hashing and digital watermarking.',
      icon: FileLock2,
      stats: 'SHA-256 Hashed'
    },
    {
      title: 'Compliance Surveillance',
      badge: 'Statutory Defense',
      desc: 'Automated 24/7 scanning against OFAC, Interpol, PEP databases, and real-time GST tax return filing defaults.',
      icon: ShieldCheck,
      stats: 'Zero Defaulters'
    },
    {
      title: 'Immutable Audit Trails',
      badge: 'Forensic Logging',
      desc: 'Every vendor profile change, approval sign-off, and document download is recorded in an unalterable, timestamped audit ledger.',
      icon: History,
      stats: '100% Traceable'
    }
  ];

  return (
    <section id="security-compliance" className="py-20 md:py-28 bg-[#050B17] text-white relative overflow-hidden border-t border-b border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-bold uppercase tracking-wider text-[#00A3E0]">
            <Fingerprint className="w-3.5 h-3.5" />
            <span>Zero-Trust Enterprise Security</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Bank-Grade Security & Ironclad Compliance
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Engineered to safeguard proprietary pricing agreements, supplier banking credentials, and statutory filings under strict international standards.
          </p>
        </div>

        {/* 5 Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#0A1931] to-[#081224] border border-white/10 hover:border-[#00A3E0]/50 transition-all duration-300 shadow-xl space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800/60 text-[#00A3E0] flex items-center justify-center group-hover:bg-[#0052CC] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                    {pillar.stats}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A3E0]">
                    {pillar.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}

          {/* 6th Card: Compliance Certifications Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 via-[#0A1931] to-[#081224] border border-blue-800/40 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
                <span className="text-xs font-bold uppercase tracking-wider">Certified Assurance</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Global Regulatory Alignment
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Meets global statutory data protection standards, sovereign cloud residency mandates, and procurement audit protocols.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>ISO/IEC 27001:2022 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>SOC 2 Type II Security Attestation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>GDPR & India DPDP Act 2023 Compliant</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges Strip */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-wrap items-center justify-around gap-6 text-xs text-slate-300 font-semibold text-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>99.99% Cloud Uptime SLA</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00A3E0]" />
            <span>Data Residency within India / Sovereign Cloud</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            <span>Automated Daily Backup & Disaster Recovery</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Zero-Knowledge Encryption Architecture</span>
          </div>
        </div>

      </div>
    </section>
  );
};
