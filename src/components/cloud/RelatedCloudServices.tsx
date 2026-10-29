import React from 'react';
import { Compass, Layers, Cloud, Activity, Server, ShieldCheck } from 'lucide-react';

interface RelatedCloudServicesProps {
  currentId?: string;
  currentPath?: string;
  limit?: number;
}

const ALL_SERVICES = [
  {
    id: 'strategy',
    title: 'Cloud Strategy & Economics',
    description: 'Cloud readiness assessments, target operating models, and FinOps unit economics.',
    path: '/cloud-operations/strategy',
    icon: Compass,
    badge: 'ADVISORY'
  },
  {
    id: 'adoption',
    title: 'Cloud Adoption & Migration',
    description: 'Systematic workload assessments, multi-cloud selection, zero-downtime cutovers, and FinOps.',
    path: '/cloud-operations/adoption',
    icon: Cloud,
    badge: 'MIGRATION'
  },
  {
    id: 'operating-model',
    title: 'Cloud Operating Model',
    description: 'Organizational structures, platform engineering, FinOps accountability, and governance frameworks.',
    path: '/cloud-operations/operating-model',
    icon: Compass,
    badge: 'GOVERNANCE'
  },
  {
    id: 'infrastructure',
    title: 'Cloud Infrastructure & Platforms',
    description: 'Hybrid cloud networking, multi-zone compute, and Kubernetes platform engineering.',
    path: '/cloud-operations/infrastructure',
    icon: Layers,
    badge: 'PLATFORM'
  },
  {
    id: 'public-cloud',
    title: 'Public Cloud Platforms',
    description: 'Hyperscaler landing zones, multi-AZ high availability, and auto-scaling compute.',
    path: '/cloud-operations/infrastructure/public-cloud',
    icon: Cloud,
    badge: 'HYPERSCALER'
  },
  {
    id: 'private-cloud',
    title: 'Private Cloud Solutions',
    description: 'Dedicated enterprise infrastructure, hardware isolation, and sovereign data governance.',
    path: '/cloud-operations/infrastructure/private-cloud',
    icon: Server,
    badge: 'DEDICATED'
  },
  {
    id: 'hybrid-cloud',
    title: 'Hybrid Cloud Architecture',
    description: 'Unified connectivity, workload placement, and seamless orchestration across private and public environments.',
    path: '/cloud-operations/infrastructure/hybrid-cloud',
    icon: Layers,
    badge: 'HYBRID'
  },
  {
    id: 'cloud-architecture',
    title: 'Enterprise Cloud Architecture',
    description: 'Structured blueprints, layered systems design, zero-trust trust boundaries, and lifecycle governance.',
    path: '/cloud-operations/infrastructure/cloud-architecture',
    icon: Compass,
    badge: 'ARCHITECTURE'
  },
  {
    id: 'aws',
    title: 'Amazon Web Services (AWS)',
    description: 'Enterprise AWS landing zones, Aurora databases, and Elastic Disaster Recovery.',
    path: '/cloud-operations/aws',
    icon: Cloud,
    badge: 'HYPERSCALER'
  },
  {
    id: 'azure',
    title: 'Microsoft Azure',
    description: 'Enterprise Azure landing zones, Azure Virtual Desktop, and Entra ID governance.',
    path: '/cloud-operations/azure',
    icon: Cloud,
    badge: 'HYPERSCALER'
  },
  {
    id: 'gcp',
    title: 'Google Cloud (GCP)',
    description: 'GKE Autopilot, Cloud Spanner global consistency, and VPC Service Controls.',
    path: '/cloud-operations/gcp',
    icon: Cloud,
    badge: 'HYPERSCALER'
  },
  {
    id: 'app-operations',
    title: 'Application Operations & SRE',
    description: 'Full-stack OpenTelemetry APM, SLO error budgets, and automated self-healing runbooks.',
    path: '/cloud-operations/application-operations',
    icon: Activity,
    badge: 'SRE'
  },
  {
    id: 'managed-ops',
    title: 'IT Operations & Managed Operations',
    description: '24/7 Global Operations Center, ITIL v4 Incident & Change CAB governance, and CMDB.',
    path: '/cloud-operations/managed-operations',
    icon: Server,
    badge: '24/7 GOC'
  },
  {
    id: 'security',
    title: 'Security & Operational Resilience',
    description: 'Zero-Trust network segmentation, Customer-Managed Keys, and sub-hour DR failovers.',
    path: '/cloud-operations/security',
    icon: ShieldCheck,
    badge: 'ZERO-TRUST'
  }
];

export const RelatedCloudServices: React.FC<RelatedCloudServicesProps> = ({ currentId, currentPath, limit = 3 }) => {
  const filtered = ALL_SERVICES.filter(s => {
    if (currentPath && (
      s.path === currentPath || 
      (currentPath.includes('adoption') && s.id === 'adoption') ||
      (currentPath.includes('operating-model') && s.id === 'operating-model')
    )) return false;
    if (currentId && s.id === currentId) return false;
    return true;
  }).slice(0, limit);

  return (
    <section className="py-16 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-mono font-bold text-[#00A3E0] uppercase tracking-wider block">
            COMPLEMENTARY CAPABILITIES
          </span>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
            Related Cloud &amp; Operations Practices
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map(s => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="p-6 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 shadow-sm transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5">
                      {s.badge}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-cyan-500/10 flex items-center justify-center text-[#00A3E0]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {s.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

