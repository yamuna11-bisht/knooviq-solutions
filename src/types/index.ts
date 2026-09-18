export type AdminRole = 'super_admin' | 'admin' | 'editor';

export interface AdminProfile {
  id: string;
  user_id?: string;
  email: string;
  full_name: string;
  role: AdminRole;
  is_active: boolean;
  last_login?: string;
  created_at: string;
}

export type ServiceCategory = 
  | 'SAP Consulting & Outsourcing'
  | 'SAP Application Management'
  | 'SAP Support'
  | 'SAP Integration'
  | 'SAP Mobility'
  | 'SAP Migration'
  | 'SAP S/4HANA Solutions'
  | 'SAP Corporate Training';

export interface ServiceItem {
  id: string;
  slug?: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  keyFeatures: string[];
  benefits: string[];
  technologies: string[];
}

export interface SolutionDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  overview: string[];
  coreCapabilities: {
    title: string;
    description: string;
    points: string[];
  }[];
  architecturePillars: {
    title: string;
    description: string;
  }[];
  businessBenefits: {
    metric: string;
    label: string;
    description: string;
  }[];
  deliverables: string[];
  technologies: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  solutions: string[];
  caseSnippet: string;
  keyChallenges: string[];
  knooviqAdvantage: string[];
}

export interface CaseStudyItem {
  id: string;
  title: string;
  clientIndustry: string;
  challenge: string;
  solution: string;
  outcomes: { metric: string; label: string }[];
  technologies: string[];
}

export interface TrainingProgram {
  id: string;
  title: string;
  code: string;
  level: 'Associate' | 'Professional' | 'Executive';
  duration: string;
  mode: 'Live Virtual' | 'Corporate On-Site' | 'Hybrid' | 'Live Virtual & Corporate On-Site';
  overview: string;
  modules: string[];
  targetAudience: string[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  employment_type: string;
  experience_level: string;
  description: string;
  requirements: string[];
  is_active?: boolean;
}

export interface EnquirySubmission {
  id?: string;
  full_name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  industry?: string;
  country?: string;
  message: string;
  status?: 'NEW' | 'IN_REVIEW' | 'CONTACTED' | 'RESOLVED';
  source?: string;
  internal_notes?: string;
  created_at?: string;
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  subject?: string;
  message: string;
  status?: 'NEW' | 'IN_REVIEW' | 'CONTACTED' | 'RESOLVED' | 'ARCHIVED';
  internal_notes?: string;
  created_at?: string;
}

export interface JobApplicationSubmission {
  id?: string;
  job_id?: string;
  full_name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  education?: string;
  location?: string;
  resume_storage_path: string;
  portfolio_linkedin?: string;
  cover_letter?: string;
  cover_note?: string;
  status?: 'PENDING' | 'REVIEWED' | 'INTERVIEW_SCHEDULED' | 'OFFERED' | 'REJECTED';
  internal_notes?: string;
  created_at?: string;
}

export interface NewsletterSubscriber {
  id?: string;
  email: string;
  status: 'SUBSCRIBED' | 'UNSUBSCRIBED';
  source?: string;
  created_at?: string;
}

export interface AdminNotification {
  id: string;
  title: string;
  message: string;
  type: 'ENQUIRY' | 'CAREER' | 'SECURITY' | 'SYSTEM';
  is_read: boolean;
  link?: string;
  created_at: string;
}

export interface ActivityLog {
  id: string;
  admin_id?: string;
  admin_email: string;
  action: string;
  target_type: string;
  target_id?: string;
  details?: Record<string, any>;
  ip_address?: string;
  created_at: string;
}

export interface AuditLog {
  id: string;
  admin_id?: string;
  admin_email?: string;
  action: string;
  table_name: string;
  record_id?: string;
  old_data?: Record<string, any>;
  new_data?: Record<string, any>;
  created_at: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: 'SAP S/4HANA' | 'Digital Transformation' | 'Cloud & BTP' | 'AI & Automation' | 'Cybersecurity';
  author: string;
  readTime: string;
  publishedAt: string;
  excerpt: string;
  content: string[];
  tags: string[];
  keyTakeaways: string[];
}

export interface DashboardStats {
  totalEnquiries: number;
  newEnquiries: number;
  contactSubmissions: number;
  careerApplications: number;
  newsletterSubscribers: number;
  unreadNotifications: number;
}

export interface ProcessStepItem {
  step: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
}


