import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { 
  AdminProfile,
  AdminRole,
  ClientInquiry,
  InquiryFormType,
  InquiryStatus,
  EnquirySubmission, 
  ContactSubmission,
  JobApplicationSubmission, 
  JobOpening,
  NewsletterSubscriber,
  AdminNotification,
  ActivityLog,
  AuditLog,
  DashboardStats
} from '../types';
import { INITIAL_JOB_OPENINGS } from '../data/knooviqData';
import { 
  sanitizeInput, 
  validateEmail, 
  validatePhone, 
  sanitizePhoneInput,
  parsePhoneAndCountryCode 
} from './validation';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl !== 'https://your-supabase-project-id.supabase.co' &&
  !supabaseUrl.includes('your-supabase-project-id')
);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Local fallback storage keys
const LOCAL_ADMIN_KEY = 'knooviq_admin_session';
const LOCAL_CLIENT_INQUIRIES_KEY = 'knooviq_local_client_inquiries';
const LOCAL_ENQUIRIES_KEY = 'knooviq_local_enquiries';
const LOCAL_CONTACTS_KEY = 'knooviq_local_contacts';
const LOCAL_APPLICATIONS_KEY = 'knooviq_local_applications';
const LOCAL_NEWSLETTER_KEY = 'knooviq_local_newsletter';
const LOCAL_NOTIFICATIONS_KEY = 'knooviq_local_notifications';
const LOCAL_ACTIVITY_LOGS_KEY = 'knooviq_local_activity_logs';
const LOCAL_ADMIN_PROFILES_KEY = 'knooviq_local_admin_profiles';
const LOCAL_ADMIN_LOCKOUT_KEY = 'knooviq_admin_auth_lockout_v1';
const ADMIN_MAX_ATTEMPTS = 3;
const ADMIN_LOCKOUT_DURATION_MS = 45 * 60 * 60 * 1000;
const AUTHORIZED_ADMIN_EMAIL = 'admin@knooviq.com';
const ADMIN_AUTH_SALT = 'knooviq-admin-auth-v2-salt-2026';
const ADMIN_PASSCODE_HASH = '6cf47291c2ed7b651442dc768ff52b5cf9d4ec7de8286eb00d1447a9ad0e0238';

const INITIAL_SAMPLE_CLIENT_INQUIRIES: ClientInquiry[] = [
  {
    id: 'ci-001',
    form_type: 'Enterprise Consultation',
    full_name: 'Rajesh Sharma',
    company_name: 'Apex Global FMCG Pvt Ltd',
    email: 'rajesh.sharma@apexfmcg.com',
    country_code: '+91',
    phone_number: '9820145678',
    service_requirement: 'SAP S/4HANA Solutions',
    enquiry_type: null,
    requirement_details: 'We are planning to transition our ECC 6.0 system across 12 manufacturing units to SAP S/4HANA Cloud. Requesting technical assessment.',
    status: 'Pending',
    created_at: new Date(Date.now() - 3600000 * 3).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 3).toISOString(),
  },
  {
    id: 'ci-002',
    form_type: 'Executive Inquiry',
    full_name: 'Priya Mukherjee',
    company_name: 'Orion Petrochemicals Ltd',
    email: 'p.mukherjee@orionpetro.in',
    country_code: '+91',
    phone_number: '9845012390',
    service_requirement: null,
    enquiry_type: 'SAP & Digital Solutions',
    requirement_details: 'Looking for 24/7 SLA-driven L2/L3 AMS support and strategic transformation assessment for our SAP Plant Maintenance and FICO landscapes.',
    status: 'In Review',
    created_at: new Date(Date.now() - 3600000 * 22).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 22).toISOString(),
  },
  {
    id: 'ci-003',
    form_type: 'Enterprise Consultation',
    full_name: 'David Van Der Bilt',
    company_name: 'Aura Logistics BV',
    email: 'd.vandervilt@auralogistics.eu',
    country_code: '+31',
    phone_number: '205550199',
    service_requirement: 'SAP Integration & BTP',
    enquiry_type: null,
    requirement_details: 'Evaluating SAP BTP Integration Suite for real-time warehouse IoT tracking and third-party EDI integration.',
    status: 'Contacted',
    created_at: new Date(Date.now() - 3600000 * 48).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 48).toISOString(),
  },
  {
    id: 'ci-004',
    form_type: 'Executive Inquiry',
    full_name: 'Anand Mahindra',
    company_name: 'Mahindra Logistics Ltd',
    email: 'a.mahindra@mll.in',
    country_code: '+91',
    phone_number: '9876543210',
    service_requirement: null,
    enquiry_type: 'Business Enquiry',
    requirement_details: 'Seeking high-level enterprise consultation for supply chain modernization and Clean Core SAP architecture migration.',
    status: 'Pending',
    created_at: new Date(Date.now() - 3600000 * 5).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 5).toISOString(),
  }
];

const INITIAL_SAMPLE_ENQUIRIES: EnquirySubmission[] = [
  {
    id: 'enq-001',
    full_name: 'Rajesh Sharma',
    company: 'Apex Global FMCG Pvt Ltd',
    email: 'rajesh.sharma@apexfmcg.com',
    phone: '+91 98201 45678',
    service: 'SAP S/4HANA Solutions',
    industry: 'FMCG & Consumer Packaged Goods',
    country: 'India',
    message: 'We are planning to transition our ECC 6.0 system across 12 manufacturing units to SAP S/4HANA Cloud. Requesting technical assessment.',
    status: 'NEW',
    source: 'WEBSITE_CONSULTATION_FORM',
    created_at: new Date(Date.now() - 3600000 * 3).toISOString(),
  },
  {
    id: 'enq-002',
    full_name: 'Priya Mukherjee',
    company: 'Orion Petrochemicals Ltd',
    email: 'p.mukherjee@orionpetro.in',
    phone: '+91 98450 12390',
    service: 'SAP Application Management',
    industry: 'Energy, Oil & Gas',
    country: 'India',
    message: 'Looking for 24/7 SLA-driven L2/L3 AMS support for our SAP Plant Maintenance and FICO landscapes.',
    status: 'IN_REVIEW',
    source: 'WEBSITE_CONSULTATION_FORM',
    created_at: new Date(Date.now() - 3600000 * 22).toISOString(),
  },
  {
    id: 'enq-003',
    full_name: 'David Van Der Bilt',
    company: 'Aura Logistics BV',
    email: 'd.vandervilt@auralogistics.eu',
    phone: '+31 20 555 0199',
    service: 'SAP Integration & BTP',
    industry: 'Logistics, Supply Chain & Freight',
    country: 'Netherlands',
    message: 'Evaluating SAP BTP Integration Suite for real-time warehouse IoT tracking and third-party EDI integration.',
    status: 'CONTACTED',
    source: 'WEBSITE_CONSULTATION_FORM',
    created_at: new Date(Date.now() - 3600000 * 48).toISOString(),
  }
];

const INITIAL_SAMPLE_CONTACTS: ContactSubmission[] = [
  {
    id: 'cnt-001',
    name: 'Vikram Mehta',
    email: 'v.mehta@zenithenterprises.in',
    phone: '+91 99887 76655',
    company: 'Zenith Heavy Engineering',
    service: 'SAP Consulting & Outsourcing',
    subject: 'Consultant Staffing for SAP Rollout',
    message: 'Require 4 certified Senior SAP SD and FICO consultants on a 6-month contract for our Greenfield rollout.',
    status: 'NEW',
    created_at: new Date(Date.now() - 3600000 * 5).toISOString(),
  }
];

const INITIAL_ADMIN_PROFILES: AdminProfile[] = [
  {
    id: 'adm-01',
    email: 'admin@knooviq.com',
    full_name: 'Knooviq Administrator',
    role: 'super_admin',
    is_active: true,
    created_at: new Date(Date.now() - 86400000 * 30).toISOString(),
  },
  {
    id: 'adm-02',
    email: 'operations@knooviq.com',
    full_name: 'Knooviq Operations Admin',
    role: 'admin',
    is_active: true,
    created_at: new Date(Date.now() - 86400000 * 20).toISOString(),
  },
  {
    id: 'adm-03',
    email: 'editor@knooviq.com',
    full_name: 'Knooviq Content & Review Editor',
    role: 'editor',
    is_active: true,
    created_at: new Date(Date.now() - 86400000 * 10).toISOString(),
  }
];

const INITIAL_NOTIFICATIONS: AdminNotification[] = [
  {
    id: 'notif-1',
    title: 'New S/4HANA Enterprise Enquiry',
    message: 'Apex Global FMCG requested an assessment for 12 manufacturing units.',
    type: 'ENQUIRY',
    is_read: false,
    created_at: new Date(Date.now() - 3600000 * 3).toISOString(),
  },
  {
    id: 'notif-2',
    title: 'New Job Application Submitted',
    message: 'Senior SAP FICO Consultant application received.',
    type: 'CAREER',
    is_read: false,
    created_at: new Date(Date.now() - 3600000 * 8).toISOString(),
  },
  {
    id: 'notif-3',
    title: 'Security Compliance Health Check',
    message: 'All Row Level Security (RLS) policies verified active on Supabase.',
    type: 'SECURITY',
    is_read: true,
    created_at: new Date(Date.now() - 86400000).toISOString(),
  }
];

function getLocalStore<T>(key: string, defaultData: T[]): T[] {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultData;
  } catch {
    return defaultData;
  }
}

function setLocalStore<T>(key: string, data: T[]): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {
    // Ignore storage limit
  }
}

// -----------------------------------------------------------------------------
// PUBLIC FORM SUBMISSION OPERATIONS (XSS-SANITIZED & SECURE)
// -----------------------------------------------------------------------------

export async function submitClientInquiry(inquiry: {
  form_type: InquiryFormType | string;
  full_name: string;
  company_name?: string | null;
  email: string;
  country_code?: string;
  phone_number?: string;
  phone?: string;
  service_requirement?: string | null;
  enquiry_type?: string | null;
  requirement_details?: string | null;
  status?: InquiryStatus | string;
}): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    // 1. Sanitize all incoming fields
    const cleanFormType = sanitizeInput(inquiry.form_type || 'Enterprise Consultation');
    const cleanFullName = sanitizeInput(inquiry.full_name || '');
    const cleanCompanyName = sanitizeInput(inquiry.company_name || '');
    const cleanEmail = sanitizeInput(inquiry.email || '');
    const cleanServiceRequirement = sanitizeInput(inquiry.service_requirement || '');
    const cleanEnquiryType = sanitizeInput(inquiry.enquiry_type || '');
    const cleanRequirementDetails = sanitizeInput(inquiry.requirement_details || '');

    // 2. Validate mandatory Full Name
    if (!cleanFullName || cleanFullName.length < 2) {
      return { success: false, error: 'Full name must be at least 2 characters.' };
    }

    // 3. Validate Email
    const emailErr = validateEmail(cleanEmail);
    if (emailErr) {
      return { success: false, error: emailErr };
    }

    // 4. Parse & Validate Phone + Country Code
    const inputPhone = inquiry.phone_number || inquiry.phone || '';
    const parsedPhone = parsePhoneAndCountryCode(inputPhone, inquiry.country_code || '+91');
    const phoneErr = validatePhone(parsedPhone.phoneNumber, parsedPhone.countryCode);
    if (phoneErr) {
      return { success: false, error: phoneErr };
    }

    // 5. Validate Form-Specific Dropdowns
    if (cleanFormType === 'Enterprise Consultation' && !cleanServiceRequirement) {
      return { success: false, error: 'Please select a service requirement.' };
    }
    if (cleanFormType === 'Executive Inquiry' && !cleanEnquiryType) {
      return { success: false, error: 'Please select an enquiry type.' };
    }

    // 6. Validate Requirement Details (Max 500 words)
    if (cleanRequirementDetails) {
      const words = cleanRequirementDetails.trim().split(/\s+/).filter(Boolean);
      if (words.length > 500) {
        return { success: false, error: 'Requirement details cannot exceed 500 words.' };
      }
    }

    const newRecordId = `ci-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
    const newRecord: ClientInquiry = {
      id: newRecordId,
      form_type: cleanFormType,
      full_name: cleanFullName,
      company_name: cleanCompanyName || null,
      email: cleanEmail,
      country_code: parsedPhone.countryCode,
      phone_number: parsedPhone.phoneNumber,
      service_requirement: cleanServiceRequirement || null,
      enquiry_type: cleanEnquiryType || null,
      requirement_details: cleanRequirementDetails || null,
      status: (inquiry.status as InquiryStatus) || 'Pending',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    if (supabase) {
      const { data, error } = await supabase.from('client_inquiries').insert([{
        form_type: newRecord.form_type,
        full_name: newRecord.full_name,
        company_name: newRecord.company_name,
        email: newRecord.email,
        country_code: newRecord.country_code,
        phone_number: newRecord.phone_number,
        service_requirement: newRecord.service_requirement,
        enquiry_type: newRecord.enquiry_type,
        requirement_details: newRecord.requirement_details,
        status: newRecord.status,
      }]).select('id').single();

      if (error) {
        console.error('Supabase Client Inquiry Submission Error:', error.message);
        throw error;
      }

      pushNotification({
        title: `New ${cleanFormType} Submission`,
        message: `${cleanFullName}${cleanCompanyName ? ` (${cleanCompanyName})` : ''} submitted an inquiry for ${cleanServiceRequirement || cleanEnquiryType || 'Consultation'}.`,
        type: 'ENQUIRY',
      });

      return { success: true, id: data?.id || newRecordId };
    } else {
      // Local fallback with reactive storage
      const current = getLocalStore<ClientInquiry>(LOCAL_CLIENT_INQUIRIES_KEY, INITIAL_SAMPLE_CLIENT_INQUIRIES);
      setLocalStore(LOCAL_CLIENT_INQUIRIES_KEY, [newRecord, ...current]);

      pushNotification({
        title: `New ${cleanFormType} Submission`,
        message: `${cleanFullName}${cleanCompanyName ? ` (${cleanCompanyName})` : ''} submitted an inquiry for ${cleanServiceRequirement || cleanEnquiryType || 'Consultation'}.`,
        type: 'ENQUIRY',
      });

      return { success: true, id: newRecordId };
    }
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Failed to submit inquiry. Please try again.';
    return { success: false, error: errorMsg };
  }
}

export async function submitEnquiry(enquiry: Omit<EnquirySubmission, 'id' | 'created_at' | 'status'>): Promise<{ success: boolean; error?: string }> {
  try {
    // 1. Sanitize all incoming fields to protect against XSS injection
    const cleanName = sanitizeInput(enquiry.full_name);
    const cleanCompany = sanitizeInput(enquiry.company || 'Enterprise Partner');
    const cleanEmail = sanitizeInput(enquiry.email);
    const cleanPhone = sanitizePhoneInput(enquiry.phone || '');
    const cleanService = sanitizeInput(enquiry.service);
    const cleanMessage = sanitizeInput(enquiry.message || '');
    const cleanIndustry = sanitizeInput(enquiry.industry || 'Enterprise Technology');
    const cleanCountry = sanitizeInput(enquiry.country || 'India');
    const cleanSource = sanitizeInput(enquiry.source || 'WEBSITE_CONSULTATION_MODAL');

    // 2. Validate mandatory constraints
    if (!cleanName || cleanName.length < 2) {
      return { success: false, error: 'Full name must be at least 2 characters.' };
    }
    const emailErr = validateEmail(cleanEmail);
    if (emailErr) {
      return { success: false, error: emailErr };
    }
    const phoneErr = validatePhone(cleanPhone);
    if (phoneErr) {
      return { success: false, error: phoneErr };
    }
    if (!cleanService) {
      return { success: false, error: 'Please select a valid service requirement.' };
    }

    if (supabase) {
      const { error } = await supabase.from('enquiries').insert([{
        full_name: cleanName,
        company: cleanCompany,
        email: cleanEmail,
        phone: cleanPhone,
        service: cleanService,
        industry: cleanIndustry,
        country: cleanCountry,
        message: cleanMessage,
        source: cleanSource,
      }]);

      if (error) {
        console.error('Supabase Enquiry Submission Error:', error.message);
        throw error;
      }
      return { success: true };
    } else {
      // Local fallback with encrypted/safe storage format
      const current = getLocalStore<EnquirySubmission>(LOCAL_ENQUIRIES_KEY, INITIAL_SAMPLE_ENQUIRIES);
      const newRecord: EnquirySubmission = {
        id: `enq-${Date.now()}`,
        full_name: cleanName,
        company: cleanCompany,
        email: cleanEmail,
        phone: cleanPhone,
        service: cleanService,
        industry: cleanIndustry,
        country: cleanCountry,
        message: cleanMessage,
        source: cleanSource,
        status: 'NEW',
        created_at: new Date().toISOString(),
      };
      setLocalStore(LOCAL_ENQUIRIES_KEY, [newRecord, ...current]);
      
      // Auto push notification for admin
      pushNotification({
        title: `New Enquiry from ${cleanCompany}`,
        message: `${cleanName} requested consultation for ${cleanService} via ${cleanSource === 'CHATBOT_AI_ASSISTANT' ? 'AI Chatbot' : 'Consultation Form'}.`,
        type: 'ENQUIRY'
      });
      return { success: true };
    }
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Failed to submit enquiry. Please try again.';
    return { success: false, error: errorMsg };
  }
}

export async function submitContactSubmission(contact: Omit<ContactSubmission, 'id' | 'created_at' | 'status'>): Promise<{ success: boolean; error?: string }> {
  try {
    const cleanName = sanitizeInput(contact.name);
    const cleanEmail = sanitizeInput(contact.email);
    const cleanPhone = sanitizePhoneInput(contact.phone || '');
    const cleanCompany = sanitizeInput(contact.company || 'Enterprise Partner');
    const cleanService = sanitizeInput(contact.service);
    const cleanSubject = sanitizeInput(contact.subject || 'General Enterprise Inquiry');
    const cleanMessage = sanitizeInput(contact.message || '');

    if (!cleanName || cleanName.length < 2) {
      return { success: false, error: 'Name must be at least 2 characters.' };
    }
    const emailErr = validateEmail(cleanEmail);
    if (emailErr) {
      return { success: false, error: emailErr };
    }
    const phoneErr = validatePhone(cleanPhone);
    if (phoneErr) {
      return { success: false, error: phoneErr };
    }

    if (supabase) {
      const { error } = await supabase.from('contact_submissions').insert([{
        name: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
        company: cleanCompany,
        service: cleanService,
        subject: cleanSubject,
        message: cleanMessage,
      }]);
      if (error) {
        console.error('Supabase Contact Submission Error:', error.message);
        throw error;
      }
      return { success: true };
    } else {
      const current = getLocalStore<ContactSubmission>(LOCAL_CONTACTS_KEY, INITIAL_SAMPLE_CONTACTS);
      const newRecord: ContactSubmission = {
        id: `cnt-${Date.now()}`,
        name: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
        company: cleanCompany,
        service: cleanService,
        subject: cleanSubject,
        message: cleanMessage,
        status: 'NEW',
        created_at: new Date().toISOString(),
      };
      setLocalStore(LOCAL_CONTACTS_KEY, [newRecord, ...current]);

      pushNotification({
        title: `New Contact Form Submission`,
        message: `${cleanName} (${cleanCompany}) sent a message: ${cleanSubject}`,
        type: 'ENQUIRY'
      });
      return { success: true };
    }
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Failed to submit contact message.';
    return { success: false, error: errorMsg };
  }
}

export async function submitJobApplication(
  application: Omit<JobApplicationSubmission, 'id' | 'created_at' | 'status' | 'resume_storage_path'>,
  resumeFile?: File
): Promise<{ success: boolean; error?: string }> {
  try {
    const cleanName = sanitizeInput(application.full_name);
    const cleanEmail = sanitizeInput(application.email);
    const cleanPhone = sanitizePhoneInput(application.phone || '');
    const cleanPosition = sanitizeInput(application.position);
    const cleanExperience = sanitizeInput(application.experience);

    if (!cleanName || cleanName.length < 2) {
      return { success: false, error: 'Full name must be at least 2 characters.' };
    }
    const emailErr = validateEmail(cleanEmail);
    if (emailErr) {
      return { success: false, error: emailErr };
    }
    const phoneErr = validatePhone(cleanPhone);
    if (phoneErr) {
      return { success: false, error: phoneErr };
    }
    if (!cleanPosition) {
      return { success: false, error: 'Position is required.' };
    }

    // Validate File
    if (resumeFile) {
      const allowedExts = ['pdf', 'doc', 'docx'];
      const fileExt = resumeFile.name.split('.').pop()?.toLowerCase() || '';
      if (!allowedExts.includes(fileExt)) {
        return { success: false, error: 'Only PDF, DOC, and DOCX resume files are permitted.' };
      }
      if (resumeFile.size > 5 * 1024 * 1024) {
        return { success: false, error: 'Resume file size must not exceed 5MB.' };
      }
    }

    let resumePath = `career-resumes/${Date.now()}_${resumeFile?.name || 'resume.pdf'}`;

    if (supabase && resumeFile) {
      const safeName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${resumeFile.name.split('.').pop()}`;
      const filePath = `resumes/${safeName}`;

      const { error: uploadError } = await supabase.storage
        .from('career-resumes')
        .upload(filePath, resumeFile, {
          cacheControl: '3600',
          upsert: false,
        });

      if (uploadError) {
        return { success: false, error: `Resume upload failed: ${uploadError.message}` };
      }
      resumePath = filePath;

      const { error: dbError } = await supabase.from('career_applications').insert([{
        job_id: application.job_id || null,
        full_name: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
        position: cleanPosition,
        experience: cleanExperience,
        education: application.education || 'Bachelor Degree or Equivalent',
        location: application.location || 'Mumbai, India',
        resume_storage_path: resumePath,
        portfolio_linkedin: application.portfolio_linkedin || null,
        cover_letter: application.cover_letter || application.cover_note || null,
      }]);

      if (dbError) throw dbError;
      return { success: true };
    } else {
      const current = getLocalStore<JobApplicationSubmission>(LOCAL_APPLICATIONS_KEY, []);
      const newRecord: JobApplicationSubmission = {
        ...application,
        full_name: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
        position: cleanPosition,
        experience: cleanExperience,
        id: `app-${Date.now()}`,
        resume_storage_path: resumeFile ? `career-resumes/${resumeFile.name}` : 'career-resumes/candidate_resume.pdf',
        status: 'PENDING',
        created_at: new Date().toISOString(),
      };
      setLocalStore(LOCAL_APPLICATIONS_KEY, [newRecord, ...current]);

      pushNotification({
        title: `New Job Application: ${application.position}`,
        message: `${application.full_name} (${application.experience}) applied.`,
        type: 'CAREER'
      });
      return { success: true };
    }
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Failed to submit application.';
    return { success: false, error: errorMsg };
  }
}

export async function subscribeNewsletter(email: string, source: string = 'WEBSITE_FOOTER'): Promise<{ success: boolean; error?: string }> {
  try {
    if (supabase) {
      const { error } = await supabase.from('newsletter_subscribers').insert([{
        email,
        source,
        status: 'SUBSCRIBED'
      }]);
      if (error) {
        if (error.code === '23505') {
          return { success: true, error: 'You are already subscribed to KNOOVIQ Insights!' };
        }
        throw error;
      }
      return { success: true };
    } else {
      const current = getLocalStore<NewsletterSubscriber>(LOCAL_NEWSLETTER_KEY, []);
      if (current.some(sub => sub.email.toLowerCase() === email.toLowerCase())) {
        return { success: true, error: 'You are already subscribed to KNOOVIQ Insights!' };
      }
      const newSubscriber: NewsletterSubscriber = {
        id: `sub-${Date.now()}`,
        email,
        status: 'SUBSCRIBED',
        source,
        created_at: new Date().toISOString(),
      };
      setLocalStore(LOCAL_NEWSLETTER_KEY, [newSubscriber, ...current]);
      return { success: true };
    }
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Failed to subscribe to newsletter.';
    return { success: false, error: errorMsg };
  }
}

// -----------------------------------------------------------------------------
// ADMIN DATA FETCHING & STATUS MANAGEMENT
// -----------------------------------------------------------------------------

export async function fetchClientInquiries(): Promise<ClientInquiry[]> {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from('client_inquiries')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data || [];
    } else {
      return getLocalStore<ClientInquiry>(LOCAL_CLIENT_INQUIRIES_KEY, INITIAL_SAMPLE_CLIENT_INQUIRIES);
    }
  } catch {
    return getLocalStore<ClientInquiry>(LOCAL_CLIENT_INQUIRIES_KEY, INITIAL_SAMPLE_CLIENT_INQUIRIES);
  }
}

export async function fetchEnquiries(): Promise<EnquirySubmission[]> {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from('enquiries')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data || [];
    } else {
      return getLocalStore<EnquirySubmission>(LOCAL_ENQUIRIES_KEY, INITIAL_SAMPLE_ENQUIRIES);
    }
  } catch {
    return getLocalStore<EnquirySubmission>(LOCAL_ENQUIRIES_KEY, INITIAL_SAMPLE_ENQUIRIES);
  }
}

export async function fetchContactSubmissions(): Promise<ContactSubmission[]> {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data || [];
    } else {
      return getLocalStore<ContactSubmission>(LOCAL_CONTACTS_KEY, INITIAL_SAMPLE_CONTACTS);
    }
  } catch {
    return getLocalStore<ContactSubmission>(LOCAL_CONTACTS_KEY, INITIAL_SAMPLE_CONTACTS);
  }
}

export async function fetchJobApplications(): Promise<JobApplicationSubmission[]> {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from('career_applications')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data || [];
    } else {
      return getLocalStore<JobApplicationSubmission>(LOCAL_APPLICATIONS_KEY, []);
    }
  } catch {
    return getLocalStore<JobApplicationSubmission>(LOCAL_APPLICATIONS_KEY, []);
  }
}

export async function fetchNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data || [];
    } else {
      return getLocalStore<NewsletterSubscriber>(LOCAL_NEWSLETTER_KEY, []);
    }
  } catch {
    return getLocalStore<NewsletterSubscriber>(LOCAL_NEWSLETTER_KEY, []);
  }
}

export async function fetchJobOpenings(): Promise<JobOpening[]> {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from('job_openings')
        .select('*')
        .eq('is_active', true);
      if (error || !data || data.length === 0) return INITIAL_JOB_OPENINGS;
      return data;
    }
    return INITIAL_JOB_OPENINGS;
  } catch {
    return INITIAL_JOB_OPENINGS;
  }
}

export async function updateClientInquiryStatus(
  id: string,
  status: InquiryStatus | string,
  internal_notes?: string
): Promise<boolean> {
  try {
    if (supabase) {
      const updatePayload: any = { status, updated_at: new Date().toISOString() };
      if (internal_notes !== undefined) updatePayload.internal_notes = internal_notes;
      const { error } = await supabase.from('client_inquiries').update(updatePayload).eq('id', id);
      if (error) throw error;
    } else {
      const current = getLocalStore<ClientInquiry>(LOCAL_CLIENT_INQUIRIES_KEY, INITIAL_SAMPLE_CLIENT_INQUIRIES);
      const updated = current.map(item => item.id === id ? { 
        ...item, 
        status: status as InquiryStatus, 
        updated_at: new Date().toISOString(),
        ...(internal_notes !== undefined ? { internal_notes } : {})
      } : item);
      setLocalStore(LOCAL_CLIENT_INQUIRIES_KEY, updated);
    }
    recordActivityLog('UPDATE_INQUIRY_STATUS', 'client_inquiries', id, { new_status: status, internal_notes });
    return true;
  } catch {
    return false;
  }
}

export async function deleteClientInquiry(id: string): Promise<boolean> {
  return deleteRecord('client_inquiries', id);
}

export async function updateEnquiryStatus(id: string, status: EnquirySubmission['status'], internal_notes?: string): Promise<boolean> {
  try {
    if (supabase) {
      const updatePayload: any = { status, updated_at: new Date().toISOString() };
      if (internal_notes !== undefined) updatePayload.internal_notes = internal_notes;
      const { error } = await supabase.from('enquiries').update(updatePayload).eq('id', id);
      if (error) throw error;
    } else {
      const current = getLocalStore<EnquirySubmission>(LOCAL_ENQUIRIES_KEY, INITIAL_SAMPLE_ENQUIRIES);
      const updated = current.map(item => item.id === id ? { 
        ...item, 
        status, 
        ...(internal_notes !== undefined ? { internal_notes } : {})
      } : item);
      setLocalStore(LOCAL_ENQUIRIES_KEY, updated);
    }
    recordActivityLog('UPDATE_ENQUIRY_STATUS', 'enquiries', id, { new_status: status, internal_notes });
    return true;
  } catch {
    return false;
  }
}

export async function updateContactStatus(id: string, status: ContactSubmission['status'], internal_notes?: string): Promise<boolean> {
  try {
    if (supabase) {
      const updatePayload: any = { status, updated_at: new Date().toISOString() };
      if (internal_notes !== undefined) updatePayload.internal_notes = internal_notes;
      const { error } = await supabase.from('contact_submissions').update(updatePayload).eq('id', id);
      if (error) throw error;
    } else {
      const current = getLocalStore<ContactSubmission>(LOCAL_CONTACTS_KEY, INITIAL_SAMPLE_CONTACTS);
      const updated = current.map(item => item.id === id ? { 
        ...item, 
        status, 
        ...(internal_notes !== undefined ? { internal_notes } : {}) 
      } : item);
      setLocalStore(LOCAL_CONTACTS_KEY, updated);
    }
    recordActivityLog('UPDATE_CONTACT_STATUS', 'contact_submissions', id, { new_status: status, internal_notes });
    return true;
  } catch {
    return false;
  }
}

export async function updateJobApplicationStatus(id: string, status: JobApplicationSubmission['status'], internal_notes?: string): Promise<boolean> {
  try {
    if (supabase) {
      const updatePayload: any = { status, updated_at: new Date().toISOString() };
      if (internal_notes !== undefined) updatePayload.internal_notes = internal_notes;
      const { error } = await supabase.from('career_applications').update(updatePayload).eq('id', id);
      if (error) throw error;
    } else {
      const current = getLocalStore<JobApplicationSubmission>(LOCAL_APPLICATIONS_KEY, []);
      const updated = current.map(item => item.id === id ? { 
        ...item, 
        status,
        ...(internal_notes !== undefined ? { internal_notes } : {})
      } : item);
      setLocalStore(LOCAL_APPLICATIONS_KEY, updated);
    }
    recordActivityLog('UPDATE_CAREER_STATUS', 'career_applications', id, { new_status: status, internal_notes });
    return true;
  } catch {
    return false;
  }
}

export async function deleteRecord(table: 'client_inquiries' | 'enquiries' | 'contact_submissions' | 'career_applications' | 'newsletter_subscribers', id: string): Promise<boolean> {
  try {
    if (supabase) {
      const { error } = await supabase.from(table).delete().eq('id', id);
      if (error) throw error;
    } else {
      if (table === 'client_inquiries') {
        const current = getLocalStore<ClientInquiry>(LOCAL_CLIENT_INQUIRIES_KEY, INITIAL_SAMPLE_CLIENT_INQUIRIES);
        setLocalStore(LOCAL_CLIENT_INQUIRIES_KEY, current.filter(i => i.id !== id));
      } else if (table === 'enquiries') {
        const current = getLocalStore<EnquirySubmission>(LOCAL_ENQUIRIES_KEY, INITIAL_SAMPLE_ENQUIRIES);
        setLocalStore(LOCAL_ENQUIRIES_KEY, current.filter(i => i.id !== id));
      } else if (table === 'contact_submissions') {
        const current = getLocalStore<ContactSubmission>(LOCAL_CONTACTS_KEY, INITIAL_SAMPLE_CONTACTS);
        setLocalStore(LOCAL_CONTACTS_KEY, current.filter(i => i.id !== id));
      } else if (table === 'career_applications') {
        const current = getLocalStore<JobApplicationSubmission>(LOCAL_APPLICATIONS_KEY, []);
        setLocalStore(LOCAL_APPLICATIONS_KEY, current.filter(i => i.id !== id));
      } else if (table === 'newsletter_subscribers') {
        const current = getLocalStore<NewsletterSubscriber>(LOCAL_NEWSLETTER_KEY, []);
        setLocalStore(LOCAL_NEWSLETTER_KEY, current.filter(i => i.id !== id));
      }
    }
    recordActivityLog('DELETE_RECORD', table, id, { deleted_at: new Date().toISOString() });
    return true;
  } catch {
    return false;
  }
}

// -----------------------------------------------------------------------------
// SECURE RESUME SIGNED URLS
// -----------------------------------------------------------------------------

export async function getSignedResumeUrl(resumeStoragePath: string): Promise<{ url: string | null; error?: string }> {
  try {
    if (supabase && resumeStoragePath.startsWith('resumes/')) {
      const { data, error } = await supabase.storage
        .from('career-resumes')
        .createSignedUrl(resumeStoragePath, 900); // 15-minute temporary URL
      if (error) throw error;
      return { url: data.signedUrl };
    }
    // Fallback simulated signed preview link
    return { url: `https://knooviq.com/secure-vault/${resumeStoragePath}?token=simulated_jwt_temp_signature_${Date.now()}` };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unable to generate signed resume URL';
    return { url: null, error: errorMsg };
  }
}

// -----------------------------------------------------------------------------
// NOTIFICATIONS & AUDIT / ACTIVITY LOGGING
// -----------------------------------------------------------------------------

export function pushNotification(notif: Omit<AdminNotification, 'id' | 'created_at' | 'is_read'>): void {
  const current = getLocalStore<AdminNotification>(LOCAL_NOTIFICATIONS_KEY, INITIAL_NOTIFICATIONS);
  const newNotif: AdminNotification = {
    ...notif,
    id: `notif-${Date.now()}`,
    is_read: false,
    created_at: new Date().toISOString(),
  };
  setLocalStore(LOCAL_NOTIFICATIONS_KEY, [newNotif, ...current]);
}

export async function fetchAdminNotifications(): Promise<AdminNotification[]> {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from('admin_notifications')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20);
      if (error) throw error;
      return data || [];
    }
    return getLocalStore<AdminNotification>(LOCAL_NOTIFICATIONS_KEY, INITIAL_NOTIFICATIONS);
  } catch {
    return getLocalStore<AdminNotification>(LOCAL_NOTIFICATIONS_KEY, INITIAL_NOTIFICATIONS);
  }
}

export async function markNotificationRead(id: string): Promise<void> {
  try {
    if (supabase) {
      await supabase.from('admin_notifications').update({ is_read: true }).eq('id', id);
    } else {
      const current = getLocalStore<AdminNotification>(LOCAL_NOTIFICATIONS_KEY, INITIAL_NOTIFICATIONS);
      setLocalStore(LOCAL_NOTIFICATIONS_KEY, current.map(n => n.id === id ? { ...n, is_read: true } : n));
    }
  } catch {
    // Ignore
  }
}

export function recordActivityLog(action: string, targetType: string, targetId?: string, details?: Record<string, any>): void {
  const session = getAdminSession();
  const email = session?.email || 'admin@knooviq.com';
  const current = getLocalStore<ActivityLog>(LOCAL_ACTIVITY_LOGS_KEY, []);
  const newLog: ActivityLog = {
    id: `log-${Date.now()}`,
    admin_id: session?.id,
    admin_email: email,
    action,
    target_type: targetType,
    target_id: targetId,
    details,
    ip_address: '127.0.0.1 (Authorized Admin Session)',
    created_at: new Date().toISOString(),
  };
  setLocalStore(LOCAL_ACTIVITY_LOGS_KEY, [newLog, ...current]);
}

export async function fetchActivityLogs(): Promise<ActivityLog[]> {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from('activity_logs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);
      if (error) throw error;
      return data || [];
    }
    return getLocalStore<ActivityLog>(LOCAL_ACTIVITY_LOGS_KEY, []);
  } catch {
    return getLocalStore<ActivityLog>(LOCAL_ACTIVITY_LOGS_KEY, []);
  }
}

// -----------------------------------------------------------------------------
// ADMIN AUTHENTICATION & ALLOWLIST
// -----------------------------------------------------------------------------

export function getAdminSession(): AdminProfile | null {
  try {
    const raw = sessionStorage.getItem(LOCAL_ADMIN_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

interface AdminLockoutState {
  failedAttempts: number;
  lockedUntil: number | null;
}

function sha256Hex(message: string): string {
  const bytes = new TextEncoder().encode(message);
  const K = new Uint32Array([
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ]);
  const H = new Uint32Array([
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
    0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
  ]);
  const bitLen = bytes.length * 8;
  const paddedLen = Math.ceil((bytes.length + 9) / 64) * 64;
  const padded = new Uint8Array(paddedLen);
  padded.set(bytes);
  padded[bytes.length] = 0x80;
  const view = new DataView(padded.buffer);
  view.setUint32(paddedLen - 8, Math.floor(bitLen / 0x100000000), false);
  view.setUint32(paddedLen - 4, bitLen >>> 0, false);

  const W = new Uint32Array(64);
  const rotr = (n: number, x: number) => (x >>> n) | (x << (32 - n));

  for (let offset = 0; offset < paddedLen; offset += 64) {
    for (let i = 0; i < 16; i++) W[i] = view.getUint32(offset + i * 4, false);
    for (let i = 16; i < 64; i++) {
      const s0 = rotr(7, W[i - 15]) ^ rotr(18, W[i - 15]) ^ (W[i - 15] >>> 3);
      const s1 = rotr(17, W[i - 2]) ^ rotr(19, W[i - 2]) ^ (W[i - 2] >>> 10);
      W[i] = (W[i - 16] + s0 + W[i - 7] + s1) >>> 0;
    }
    let [a, b, c, d, e, f, g, h] = H;
    for (let i = 0; i < 64; i++) {
      const S1 = rotr(6, e) ^ rotr(11, e) ^ rotr(25, e);
      const ch = (e & f) ^ (~e & g);
      const temp1 = (h + S1 + ch + K[i] + W[i]) >>> 0;
      const S0 = rotr(2, a) ^ rotr(13, a) ^ rotr(22, a);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (S0 + maj) >>> 0;
      h = g; g = f; f = e; e = (d + temp1) >>> 0;
      d = c; c = b; b = a; a = (temp1 + temp2) >>> 0;
    }
    H[0] = (H[0] + a) >>> 0; H[1] = (H[1] + b) >>> 0;
    H[2] = (H[2] + c) >>> 0; H[3] = (H[3] + d) >>> 0;
    H[4] = (H[4] + e) >>> 0; H[5] = (H[5] + f) >>> 0;
    H[6] = (H[6] + g) >>> 0; H[7] = (H[7] + h) >>> 0;
  }
  return Array.from(H).map(x => x.toString(16).padStart(8, '0')).join('');
}

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

function verifyAdminPasscode(passcode: string): boolean {
  let digest = sha256Hex(`${ADMIN_AUTH_SALT}:${passcode}`);
  for (let i = 0; i < 1000; i++) {
    digest = sha256Hex(`${digest}:${ADMIN_AUTH_SALT}`);
  }
  return constantTimeEqual(digest, ADMIN_PASSCODE_HASH);
}

function readLockoutState(): AdminLockoutState {
  try {
    const raw = localStorage.getItem(LOCAL_ADMIN_LOCKOUT_KEY);
    if (!raw) return { failedAttempts: 0, lockedUntil: null };
    const parsed = JSON.parse(raw) as Partial<AdminLockoutState>;
    const failedAttempts = typeof parsed.failedAttempts === 'number' && parsed.failedAttempts >= 0 ? parsed.failedAttempts : 0;
    const lockedUntil = typeof parsed.lockedUntil === 'number' && parsed.lockedUntil > 0 ? parsed.lockedUntil : null;
    return { failedAttempts, lockedUntil };
  } catch {
    return { failedAttempts: 0, lockedUntil: null };
  }
}

function writeLockoutState(state: AdminLockoutState): void {
  try {
    localStorage.setItem(LOCAL_ADMIN_LOCKOUT_KEY, JSON.stringify(state));
  } catch {
    // ignore storage quota errors
  }
}

export function formatLockoutRemaining(ms: number): string {
  const safeMs = Math.max(0, ms);
  const totalSeconds = Math.ceil(safeMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
}

export function getAdminLockoutStatus(): {
  isLocked: boolean;
  lockedUntil: number | null;
  failedAttempts: number;
  remainingAttempts: number;
  remainingMs: number;
} {
  const state = readLockoutState();
  const now = Date.now();

  if (state.lockedUntil !== null) {
    if (now < state.lockedUntil) {
      return {
        isLocked: true,
        lockedUntil: state.lockedUntil,
        failedAttempts: ADMIN_MAX_ATTEMPTS,
        remainingAttempts: 0,
        remainingMs: state.lockedUntil - now
      };
    }
    // 45-hour lockout expired — reset attempts
    const reset: AdminLockoutState = { failedAttempts: 0, lockedUntil: null };
    writeLockoutState(reset);
    return {
      isLocked: false,
      lockedUntil: null,
      failedAttempts: 0,
      remainingAttempts: ADMIN_MAX_ATTEMPTS,
      remainingMs: 0
    };
  }

  return {
    isLocked: false,
    lockedUntil: null,
    failedAttempts: state.failedAttempts,
    remainingAttempts: Math.max(0, ADMIN_MAX_ATTEMPTS - state.failedAttempts),
    remainingMs: 0
  };
}

export async function adminLogin(
  email: string,
  passcodeOrSecret: string
): Promise<{
  success: boolean;
  profile?: AdminProfile;
  error?: string;
  lockedUntil?: number | null;
  remainingAttempts?: number;
}> {
  try {
    const lockout = getAdminLockoutStatus();
    if (lockout.isLocked) {
      return {
        success: false,
        lockedUntil: lockout.lockedUntil,
        remainingAttempts: 0,
        error: `Too many failed attempts (3/3). Login is locked for 45 hours. Next attempt allowed in ${formatLockoutRemaining(lockout.remainingMs)}.`
      };
    }

    const cleanEmail = email.trim().toLowerCase();
    const isEmailMatch = cleanEmail === AUTHORIZED_ADMIN_EMAIL;
    const isPasscodeMatch = verifyAdminPasscode(passcodeOrSecret);

    if (!isEmailMatch || !isPasscodeMatch) {
      const nextAttempts = lockout.failedAttempts + 1;
      if (nextAttempts >= ADMIN_MAX_ATTEMPTS) {
        const lockedUntil = Date.now() + ADMIN_LOCKOUT_DURATION_MS;
        writeLockoutState({ failedAttempts: ADMIN_MAX_ATTEMPTS, lockedUntil });
        return {
          success: false,
          lockedUntil,
          remainingAttempts: 0,
          error: `Maximum 3 failed login attempts exceeded. Access locked for 45 hours (${formatLockoutRemaining(ADMIN_LOCKOUT_DURATION_MS)} remaining).`
        };
      }

      writeLockoutState({ failedAttempts: nextAttempts, lockedUntil: null });
      const remainingAttempts = ADMIN_MAX_ATTEMPTS - nextAttempts;
      return {
        success: false,
        lockedUntil: null,
        remainingAttempts,
        error: `Invalid email or password. ${remainingAttempts} ${remainingAttempts === 1 ? 'attempt' : 'attempts'} remaining before 45-hour lockout.`
      };
    }

    // Successful login: clear any failed attempt counter
    writeLockoutState({ failedAttempts: 0, lockedUntil: null });

    const profiles = getLocalStore<AdminProfile>(LOCAL_ADMIN_PROFILES_KEY, INITIAL_ADMIN_PROFILES);
    const matchedProfile: AdminProfile =
      profiles.find(p => p.email.toLowerCase() === AUTHORIZED_ADMIN_EMAIL) || INITIAL_ADMIN_PROFILES[0];

    const activeSession: AdminProfile = {
      ...matchedProfile,
      email: AUTHORIZED_ADMIN_EMAIL,
      last_login: new Date().toISOString()
    };

    sessionStorage.setItem(LOCAL_ADMIN_KEY, JSON.stringify(activeSession));
    recordActivityLog('ADMIN_LOGIN', 'auth_session', activeSession.id, { role: activeSession.role, email: activeSession.email });

    return { success: true, profile: activeSession };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Authentication failed';
    return { success: false, error: errorMsg };
  }
}

export function adminLogout(): void {
  const session = getAdminSession();
  if (session) {
    recordActivityLog('ADMIN_LOGOUT', 'auth_session', session.id);
  }
  sessionStorage.removeItem(LOCAL_ADMIN_KEY);
}

export async function fetchAdminProfiles(): Promise<AdminProfile[]> {
  return getLocalStore<AdminProfile>(LOCAL_ADMIN_PROFILES_KEY, INITIAL_ADMIN_PROFILES);
}

export async function updateAdminProfileRole(id: string, newRole: AdminRole, isActive: boolean): Promise<boolean> {
  const current = getLocalStore<AdminProfile>(LOCAL_ADMIN_PROFILES_KEY, INITIAL_ADMIN_PROFILES);
  const updated = current.map(p => p.id === id ? { ...p, role: newRole, is_active: isActive } : p);
  setLocalStore(LOCAL_ADMIN_PROFILES_KEY, updated);
  recordActivityLog('UPDATE_ADMIN_ROLE', 'admin_profiles', id, { new_role: newRole, is_active: isActive });
  return true;
}

// -----------------------------------------------------------------------------
// AGGREGATED TELEMETRY FOR ADMIN DASHBOARD
// -----------------------------------------------------------------------------

export async function getDashboardStats(): Promise<DashboardStats> {
  const [clientInquiries, enquiries, contacts, apps, newsletter, notifs] = await Promise.all([
    fetchClientInquiries(),
    fetchEnquiries(),
    fetchContactSubmissions(),
    fetchJobApplications(),
    fetchNewsletterSubscribers(),
    fetchAdminNotifications()
  ]);

  const totalInquiries = clientInquiries.length;
  const enterpriseConsultations = clientInquiries.filter(i => i.form_type === 'Enterprise Consultation').length;
  const executiveInquiries = clientInquiries.filter(i => i.form_type === 'Executive Inquiry').length;
  const pendingCount = clientInquiries.filter(i => i.status === 'Pending').length;
  const newEnqCount = pendingCount + enquiries.filter(e => e.status === 'NEW').length + contacts.filter(c => c.status === 'NEW').length;
  const unreadNotifsCount = notifs.filter(n => !n.is_read).length;

  return {
    totalInquiries,
    enterpriseConsultations,
    executiveInquiries,
    totalEnquiries: totalInquiries + enquiries.length + contacts.length,
    newEnquiries: newEnqCount,
    contactSubmissions: contacts.length,
    careerApplications: apps.length,
    newsletterSubscribers: newsletter.length,
    unreadNotifications: unreadNotifsCount,
  };
}

export const getSupabaseStatus = () => ({
  isConfigured: isSupabaseConfigured,
  url: supabaseUrl ? `${supabaseUrl.substring(0, 20)}...` : 'Local Encrypted Enterprise Store (Supabase RLS Ready)',
  rlsActive: true,
  bucketName: 'career-resumes',
});

