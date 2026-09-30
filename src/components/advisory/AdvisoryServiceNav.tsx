import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Compass,
  Search,
  Layers,
  ShieldCheck,
  LifeBuoy,
  Server,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export interface ServiceNavItem {
  id: string;
  name: string;
  path: string;
  shortDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

export const ADVISORY_SERVICES: ServiceNavItem[] = [
  {
    id: 'sap-strategy',
    name: 'SAP Strategy',
    path: '/services/sap-strategy',
    shortDesc: 'Strategic vision, roadmapping & business alignment',
    icon: Compass,
    tag: 'STRATEGIC'
  },
  {
    id: 'sap-assessment',
    name: 'SAP Assessment',
    path: '/services/sap-assessment',
    shortDesc: 'System discovery, gap audit & health scorecards',
    icon: Search,
    tag: 'DIAGNOSTIC'
  },
  {
    id: 'solution-architecture',
    name: 'Solution Architecture',
    path: '/services/solution-architecture',
    shortDesc: 'Modular blueprints, API fabric & data models',
    icon: Layers,
    tag: 'ENGINEERING'
  },
  {
    id: 'sap-ams',
    name: 'SAP AMS',
    path: '/services/sap-ams',
    shortDesc: '24/7 SLA governance, operations & continuous tuning',
    icon: ShieldCheck,
    tag: 'MANAGED'
  },
  {
    id: 'application-support',
    name: 'Application Support',
    path: '/services/application-support',
    shortDesc: 'End-user triage, ticket lifecycle & functional fixes',
    icon: LifeBuoy,
    tag: 'OPERATIONAL'
  },
  {
    id: 'sap-basis',
    name: 'SAP Basis',
    path: '/services/sap-basis',
    shortDesc: 'HANA administration, transports, HA/DR & tuning',
    icon: Server,
    tag: 'TECHNICAL'
  }
];

interface AdvisoryServiceNavProps {
  currentServiceId: 'sap-strategy' | 'sap-assessment' | 'solution-architecture' | 'sap-ams' | 'application-support' | 'sap-basis';
}

export const AdvisoryServiceNav: React.FC<AdvisoryServiceNavProps> = ({ currentServiceId }) => {
  const location = useLocation();

  return (
    <div className="sticky top-20 z-30 w-full bg-white/95 backdrop-blur-md border-y border-slate-200 shadow-sm text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5 gap-4 overflow-x-auto custom-scrollbar">
          
          {/* Label Pillar */}
          <div className="hidden lg:flex items-center gap-2 pr-4 border-r border-slate-200 shrink-0">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <div className="leading-tight">
              <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-blue-600 block">
                ADVISORY &amp; MANAGED
              </span>
              <span className="text-xs font-bold text-slate-900 tracking-wide">
                PRACTICE SUITE
              </span>
            </div>
          </div>

          {/* Navigation Links for 6 Services */}
          <nav className="flex items-center gap-1.5 sm:gap-2 shrink-0 py-1" aria-label="Advisory Services Navigation">
            {ADVISORY_SERVICES.map((service) => {
              const Icon = service.icon;
              const isActive = currentServiceId === service.id || location.pathname === service.path;
              return (
                <Link
                  key={service.id}
                  to={service.path}
                  className={`group relative flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100 border border-slate-200/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-white' : 'text-blue-600 group-hover:text-blue-700'}`} />
                  <span>{service.name}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* All Services Dropdown / Overview Quick Link */}
          <div className="hidden xl:flex items-center shrink-0 pl-4 border-l border-slate-200">
            <Link
              to="/advisory-managed-services"
              className="text-[11px] font-mono text-slate-500 hover:text-blue-600 flex items-center gap-1 transition-colors"
            >
              <span>Practice Overview</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export const AdvisorySuiteFooterCrosslinks: React.FC<{ currentServiceId?: string; activeServiceId?: string; onOpenContact?: (topic?: string) => void }> = ({ currentServiceId, activeServiceId, onOpenContact }) => {
  const serviceId = currentServiceId || activeServiceId || '';
  const otherServices = ADVISORY_SERVICES.filter(s => s.id !== serviceId);

  return (
    <section className="py-16 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <span>EXPLORE THE COMPLETE SUITE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Advisory &amp; Managed Services Capabilities
            </h3>
          </div>
          <Link
            to="/advisory-managed-services"
            className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors"
          >
            <span>View All 6 Advisory Practices</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {otherServices.map(service => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                to={service.path}
                className="group p-5 rounded-2xl bg-white hover:bg-white border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 group-hover:text-blue-600 transition-colors font-bold uppercase">
                      {service.tag}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500 group-hover:text-blue-600">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-blue-600" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
