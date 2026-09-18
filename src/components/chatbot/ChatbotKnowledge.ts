import { COMPANY_INFO, SERVICES_DATA, TRAINING_PROGRAMS, S4HANA_OFFERINGS } from '../../data/knooviqData';

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  quickActions?: { label: string; action: () => void }[];
}

export function generateBotResponse(userInput: string, onOpenContact: (srv?: string) => void): { text: string; actionType?: string } {
  const query = userInput.toLowerCase().trim();

  // 1. S/4HANA & Migration
  if (query.includes('s4hana') || query.includes('s/4hana') || query.includes('migration') || query.includes('upgrade') || query.includes('ecc')) {
    return {
      text: `Knooviq specializes in risk-mitigated SAP S/4HANA transitions with 3 strategic pathways:
1. **Greenfield Implementation:** Fresh start adopting Clean Core best practices.
2. **Brownfield Conversion:** System conversion preserving historical data & configurations.
3. **Selective Data Transition:** Phased hybrid migration for complex multi-ERP landscapes.

Would you like to schedule a free S/4HANA readiness assessment?`,
      actionType: 'ASSESS_S4HANA'
    };
  }

  // 2. Services & AMS
  if (query.includes('service') || query.includes('ams') || query.includes('application management') || query.includes('support') || query.includes('outsourcing')) {
    return {
      text: `Knooviq Industries provides 6 core enterprise SAP practices:
• **SAP Consulting & Outsourcing:** Certified talent staffing & strategic advisory.
• **SAP Application Management (AMS):** 24/7 SLA-driven L1–L4 managed operations.
• **SAP Support Services:** Statutory tax updates, OSS notes & security hardening.
• **SAP Integration & BTP:** SAP CPI, OData APIs & hybrid cloud middleware.
• **SAP Mobility & Fiori UX:** Responsive mobile workflows & custom Fiori apps.
• **SAP S/4HANA Cloud Migrations.**`,
      actionType: 'EXPLORE_SERVICES'
    };
  }

  // 3. Corporate Training
  if (query.includes('training') || query.includes('course') || query.includes('learn') || query.includes('fico') || query.includes('abap') || query.includes('mm') || query.includes('sd')) {
    return {
      text: `We offer expert-led SAP Corporate Training programs:
• **TS4F01-FICO:** SAP S/4HANA Financial Accounting & Controlling (60 Hrs)
• **TS4500-MM:** Sourcing & Procurement in S/4HANA (50 Hrs)
• **BC400-HANA:** Modern ABAP on HANA, CDS Views & SAP BTP (65 Hrs)
• **TS4600-SD:** Order-to-Cash & Sales Distribution (50 Hrs)

We also provide customized on-site workshops for corporate teams!`,
      actionType: 'TRAINING_INQUIRY'
    };
  }

  // 4. Careers & Jobs
  if (query.includes('job') || query.includes('career') || query.includes('hiring') || query.includes('apply') || query.includes('vacancy') || query.includes('salary')) {
    return {
      text: `We are currently hiring for certified SAP roles at our Mumbai HQ (Hybrid):
1. **Senior SAP S/4HANA FICO Consultant** (5–8 Yrs)
2. **SAP ABAP on HANA & BTP Developer** (3–6 Yrs)
3. **SAP Supply Chain (MM/SD/PP) Solutions Architect** (6–10 Yrs)
4. **SAP Basis & Cloud Migration Specialist** (4–7 Yrs)

You can upload your resume directly in the **Career section** on this page!`,
      actionType: 'VIEW_CAREERS'
    };
  }

  // 5. Contact & Office Location
  if (query.includes('contact') || query.includes('address') || query.includes('location') || query.includes('phone') || query.includes('email') || query.includes('mumbai') || query.includes('office')) {
    return {
      text: `You can reach Knooviq Industries Private Limited directly:
📍 **Headquarters:** ${COMPANY_INFO.headquarters.address}, ${COMPANY_INFO.headquarters.city} – ${COMPANY_INFO.headquarters.postalCode}, India
📧 **Email:** ${COMPANY_INFO.contact.email}
📞 **Phone:** ${COMPANY_INFO.contact.phone} | ${COMPANY_INFO.contact.secondaryPhone}
🕒 **Business Hours:** ${COMPANY_INFO.contact.hours}`,
      actionType: 'OPEN_CONTACT'
    };
  }

  // 6. Security / Compliance
  if (query.includes('security') || query.includes('safe') || query.includes('rls') || query.includes('data') || query.includes('nda')) {
    return {
      text: `Security is central to our engineering:
• Strict Row Level Security (RLS) on all database tables.
• Dual-layer schema validation & DOMPurify anti-XSS protection.
• Enterprise Non-Disclosure Agreement (NDA) for all client architectures.
• HTTPS, secure session tokens, and strict HTTP security headers.`
    };
  }

  // 7. Pricing / Quote
  if (query.includes('price') || query.includes('cost') || query.includes('quote') || query.includes('rate') || query.includes('proposal')) {
    return {
      text: `SAP project and AMS pricing depends on system landscape size, user counts, and SLA tiers. 

Click below to request a tailored commercial proposal and technical scope blueprint from our solution architects.`,
      actionType: 'REQUEST_PROPOSAL'
    };
  }

  // 8. Greetings
  if (query.includes('hi') || query.includes('hello') || query.includes('hey') || query.includes('namaste') || query.includes('hii')) {
    return {
      text: `Hello! 👋 I am the **Knooviq 3D AI Assistant**. How can I help you today? You can ask me about:
• SAP S/4HANA Migration Pathways
• 24/7 Managed AMS & Support
• SAP Corporate Training Programs
• Open Job Vacancies
• Direct Office Contact & Consultation`
    };
  }

  // Default Fallback
  return {
    text: `Thank you for your question. Knooviq Industries is an official enterprise SAP consulting and digital transformation partner. 

Would you like to connect directly with one of our certified solution architects?`,
    actionType: 'OPEN_CONTACT'
  };
}
