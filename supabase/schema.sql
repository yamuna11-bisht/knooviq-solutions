-- ==============================================================================
-- KNOOVIQ INDUSTRIES PRIVATE LIMITED - SUPABASE ENTERPRISE DATABASE SCHEMA
-- Production-Grade PostgreSQL Schema with Normalized Tables & Strict RLS
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==============================================================================
-- 1. ADMIN PROFILES & ROLE ACCESS CONTROL
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.admin_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID UNIQUE, -- Can link to auth.users(id)
    email TEXT NOT NULL UNIQUE CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    full_name TEXT NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
    role TEXT NOT NULL DEFAULT 'editor' CHECK (role IN ('super_admin', 'admin', 'editor')),
    is_active BOOLEAN NOT NULL DEFAULT true,
    last_login TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Index for fast role & email lookups
CREATE INDEX IF NOT EXISTS idx_admin_profiles_email ON public.admin_profiles(email);
CREATE INDEX IF NOT EXISTS idx_admin_profiles_user_id ON public.admin_profiles(user_id);

-- ==============================================================================
-- 2. ENQUIRIES (Enterprise Service Consultations)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
    company TEXT NOT NULL CHECK (char_length(company) BETWEEN 2 AND 150),
    email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 20),
    service TEXT NOT NULL,
    industry TEXT DEFAULT 'General / Other',
    country TEXT DEFAULT 'India',
    message TEXT NOT NULL CHECK (char_length(message) BETWEEN 10 AND 3000),
    status TEXT NOT NULL DEFAULT 'NEW' CHECK (status IN ('NEW', 'IN_REVIEW', 'CONTACTED', 'RESOLVED')),
    source TEXT DEFAULT 'WEBSITE_CONSULTATION_FORM',
    internal_notes TEXT,
    ip_hash TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_enquiries_status ON public.enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON public.enquiries(created_at DESC);

-- ==============================================================================
-- 3. CONTACT SUBMISSIONS (General & Direct Contact Form)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
    email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 20),
    company TEXT NOT NULL CHECK (char_length(company) BETWEEN 2 AND 150),
    service TEXT NOT NULL,
    subject TEXT NOT NULL DEFAULT 'General Enterprise Inquiry',
    message TEXT NOT NULL CHECK (char_length(message) BETWEEN 10 AND 3000),
    status TEXT NOT NULL DEFAULT 'NEW' CHECK (status IN ('NEW', 'IN_REVIEW', 'CONTACTED', 'RESOLVED', 'ARCHIVED')),
    internal_notes TEXT,
    ip_hash TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON public.contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);

-- ==============================================================================
-- 4. JOB OPENINGS (Active Careers Directory)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.job_openings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    department TEXT NOT NULL,
    location TEXT NOT NULL DEFAULT 'Mumbai, India (Hybrid)',
    employment_type TEXT NOT NULL DEFAULT 'Full-time',
    experience_level TEXT NOT NULL,
    description TEXT NOT NULL,
    requirements TEXT[] NOT NULL DEFAULT '{}',
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_job_openings_active ON public.job_openings(is_active);

-- ==============================================================================
-- 5. CAREER APPLICATIONS (Resumes & Applicant Pipeline)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.career_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    job_id UUID REFERENCES public.job_openings(id) ON DELETE SET NULL,
    full_name TEXT NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
    email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 20),
    position TEXT NOT NULL,
    experience TEXT NOT NULL,
    education TEXT DEFAULT 'Bachelor Degree / Professional Certifications',
    location TEXT DEFAULT 'Mumbai, India',
    resume_storage_path TEXT NOT NULL,
    portfolio_linkedin TEXT,
    cover_letter TEXT,
    status TEXT NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'REVIEWED', 'INTERVIEW_SCHEDULED', 'OFFERED', 'REJECTED')),
    internal_notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_career_applications_status ON public.career_applications(status);
CREATE INDEX IF NOT EXISTS idx_career_applications_created_at ON public.career_applications(created_at DESC);

-- ==============================================================================
-- 6. NEWSLETTER SUBSCRIBERS
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL UNIQUE CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    status TEXT NOT NULL DEFAULT 'SUBSCRIBED' CHECK (status IN ('SUBSCRIBED', 'UNSUBSCRIBED')),
    source TEXT DEFAULT 'WEBSITE_FOOTER',
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON public.newsletter_subscribers(email);

-- ==============================================================================
-- 7. FORM SUBMISSIONS (Audit Log of Raw Form Events)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.form_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    form_type TEXT NOT NULL,
    submission_id UUID,
    submitter_email TEXT,
    ip_hash TEXT,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_form_submissions_created_at ON public.form_submissions(created_at DESC);

-- ==============================================================================
-- 8. ADMIN NOTIFICATIONS
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.admin_notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    type TEXT NOT NULL DEFAULT 'ENQUIRY' CHECK (type IN ('ENQUIRY', 'CAREER', 'SECURITY', 'SYSTEM')),
    is_read BOOLEAN NOT NULL DEFAULT false,
    link TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_admin_notifications_is_read ON public.admin_notifications(is_read);

-- ==============================================================================
-- 9. ACTIVITY & AUDIT LOGS (Tamper-Proof Compliance)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.activity_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    admin_id UUID,
    admin_email TEXT NOT NULL,
    action TEXT NOT NULL,
    target_type TEXT NOT NULL,
    target_id TEXT,
    details JSONB DEFAULT '{}'::jsonb,
    ip_address TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    admin_id UUID,
    admin_email TEXT,
    action TEXT NOT NULL,
    table_name TEXT NOT NULL,
    record_id TEXT,
    old_data JSONB,
    new_data JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_activity_logs_created_at ON public.activity_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON public.audit_logs(created_at DESC);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

-- Enable RLS on all tables
ALTER TABLE public.admin_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_openings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.career_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Helper function to check if current user is an active admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.admin_profiles
        WHERE user_id = auth.uid()
        AND is_active = true
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Helper function to get admin role
CREATE OR REPLACE FUNCTION public.get_admin_role()
RETURNS TEXT AS $$
DECLARE
    v_role TEXT;
BEGIN
    SELECT role INTO v_role FROM public.admin_profiles
    WHERE user_id = auth.uid()
    AND is_active = true;
    RETURN v_role;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- -----------------------------------------------------------------------------
-- 1. Admin Profiles RLS Policies
-- -----------------------------------------------------------------------------
DROP POLICY IF EXISTS "Admins can view profiles" ON public.admin_profiles;
CREATE POLICY "Admins can view profiles"
ON public.admin_profiles FOR SELECT
TO authenticated
USING (public.is_admin() OR auth.uid() = user_id);

DROP POLICY IF EXISTS "Super Admins can manage profiles" ON public.admin_profiles;
CREATE POLICY "Super Admins can manage profiles"
ON public.admin_profiles FOR ALL
TO authenticated
USING (public.get_admin_role() = 'super_admin');

-- -----------------------------------------------------------------------------
-- 2. Enquiries RLS Policies
-- -----------------------------------------------------------------------------
DROP POLICY IF EXISTS "Public can submit enquiries" ON public.enquiries;
CREATE POLICY "Public can submit enquiries"
ON public.enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "Admins can view enquiries" ON public.enquiries;
CREATE POLICY "Admins can view enquiries"
ON public.enquiries FOR SELECT
TO authenticated
USING (public.is_admin());

DROP POLICY IF EXISTS "Admins can update enquiries" ON public.enquiries;
CREATE POLICY "Admins can update enquiries"
ON public.enquiries FOR UPDATE
TO authenticated
USING (public.is_admin());

DROP POLICY IF EXISTS "Super Admins can delete enquiries" ON public.enquiries;
CREATE POLICY "Super Admins can delete enquiries"
ON public.enquiries FOR DELETE
TO authenticated
USING (public.get_admin_role() = 'super_admin');

-- -----------------------------------------------------------------------------
-- 3. Contact Submissions RLS Policies
-- -----------------------------------------------------------------------------
DROP POLICY IF EXISTS "Public can submit contact" ON public.contact_submissions;
CREATE POLICY "Public can submit contact"
ON public.contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "Admins can view contact submissions" ON public.contact_submissions;
CREATE POLICY "Admins can view contact submissions"
ON public.contact_submissions FOR SELECT
TO authenticated
USING (public.is_admin());

DROP POLICY IF EXISTS "Admins can update contact submissions" ON public.contact_submissions;
CREATE POLICY "Admins can update contact submissions"
ON public.contact_submissions FOR UPDATE
TO authenticated
USING (public.is_admin());

DROP POLICY IF EXISTS "Super Admins can delete contact submissions" ON public.contact_submissions;
CREATE POLICY "Super Admins can delete contact submissions"
ON public.contact_submissions FOR DELETE
TO authenticated
USING (public.get_admin_role() = 'super_admin');

-- -----------------------------------------------------------------------------
-- 4. Job Openings RLS Policies
-- -----------------------------------------------------------------------------
DROP POLICY IF EXISTS "Public can view active job listings" ON public.job_openings;
CREATE POLICY "Public can view active job listings"
ON public.job_openings FOR SELECT
TO anon, authenticated
USING (is_active = true OR public.is_admin());

DROP POLICY IF EXISTS "Admins can manage job openings" ON public.job_openings;
CREATE POLICY "Admins can manage job openings"
ON public.job_openings FOR ALL
TO authenticated
USING (public.is_admin());

-- -----------------------------------------------------------------------------
-- 5. Career Applications RLS Policies
-- -----------------------------------------------------------------------------
DROP POLICY IF EXISTS "Public can submit job applications" ON public.career_applications;
CREATE POLICY "Public can submit job applications"
ON public.career_applications FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "Admins can view job applications" ON public.career_applications;
CREATE POLICY "Admins can view job applications"
ON public.career_applications FOR SELECT
TO authenticated
USING (public.is_admin());

DROP POLICY IF EXISTS "Admins can update job applications" ON public.career_applications;
CREATE POLICY "Admins can update job applications"
ON public.career_applications FOR UPDATE
TO authenticated
USING (public.is_admin());

DROP POLICY IF EXISTS "Super Admins can delete job applications" ON public.career_applications;
CREATE POLICY "Super Admins can delete job applications"
ON public.career_applications FOR DELETE
TO authenticated
USING (public.get_admin_role() = 'super_admin');

-- -----------------------------------------------------------------------------
-- 6. Newsletter Subscribers RLS Policies
-- -----------------------------------------------------------------------------
DROP POLICY IF EXISTS "Public can subscribe to newsletter" ON public.newsletter_subscribers;
CREATE POLICY "Public can subscribe to newsletter"
ON public.newsletter_subscribers FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "Admins can view newsletter subscribers" ON public.newsletter_subscribers;
CREATE POLICY "Admins can view newsletter subscribers"
ON public.newsletter_subscribers FOR SELECT
TO authenticated
USING (public.is_admin());

DROP POLICY IF EXISTS "Admins can manage newsletter subscribers" ON public.newsletter_subscribers;
CREATE POLICY "Admins can manage newsletter subscribers"
ON public.newsletter_subscribers FOR ALL
TO authenticated
USING (public.is_admin());

-- -----------------------------------------------------------------------------
-- 7. Admin Notifications RLS Policies
-- -----------------------------------------------------------------------------
DROP POLICY IF EXISTS "Admins can view and update notifications" ON public.admin_notifications;
CREATE POLICY "Admins can view and update notifications"
ON public.admin_notifications FOR ALL
TO authenticated
USING (public.is_admin());

-- -----------------------------------------------------------------------------
-- 8. Activity & Audit Logs RLS Policies (Immutable)
-- -----------------------------------------------------------------------------
DROP POLICY IF EXISTS "Admins can insert activity logs" ON public.activity_logs;
CREATE POLICY "Admins can insert activity logs"
ON public.activity_logs FOR INSERT
TO authenticated
WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Admins can view activity logs" ON public.activity_logs;
CREATE POLICY "Admins can view activity logs"
ON public.activity_logs FOR SELECT
TO authenticated
USING (public.is_admin());

DROP POLICY IF EXISTS "Admins can view audit logs" ON public.audit_logs;
CREATE POLICY "Admins can view audit logs"
ON public.audit_logs FOR SELECT
TO authenticated
USING (public.is_admin());

-- Notice: NO UPDATE OR DELETE POLICIES are defined on activity_logs or audit_logs,
-- guaranteeing that audit history cannot be tampered with or erased.

-- ==============================================================================
-- INITIAL SEED DATA FOR PRODUCTION READINESS
-- ==============================================================================

-- Seed Verified Job Openings
INSERT INTO public.job_openings (title, department, location, employment_type, experience_level, description, requirements)
VALUES 
(
    'Senior SAP S/4HANA Finance (FICO) Consultant',
    'SAP Consulting',
    'Mumbai, India (Hybrid)',
    'Full-time',
    '5 - 8 Years',
    'Lead enterprise financial transformations, configure General Ledger, AP/AR, Asset Accounting, and CO-PA for Fortune 500 clients.',
    ARRAY['5+ years in SAP FICO with at least 2 full-lifecycle S/4HANA implementations', 'Strong understanding of Universal Journal (ACDOCA) and Central Finance', 'Excellent stakeholder management and solution design skills']
),
(
    'SAP ABAP on HANA & Cloud Integration Developer',
    'Technical Services',
    'Mumbai, India (Hybrid)',
    'Full-time',
    '3 - 6 Years',
    'Design and build scalable custom extensions, CDS Views, AMDP, OData services, and SAP BTP integrations.',
    ARRAY['Strong hands-on experience in ABAP on HANA, CDS Views & OData APIs', 'Experience with SAP BTP Integration Suite / CPI is a plus', 'Proficient in debugging and code optimization']
),
(
    'SAP Supply Chain (MM/SD/PP) Solutions Architect',
    'Supply Chain & Operations',
    'Mumbai, India (Hybrid)',
    'Full-time',
    '6 - 10 Years',
    'Architect integrated supply chain solutions across procurement, inventory, production planning, and sales distribution.',
    ARRAY['Deep expertise in SAP MM/SD with S/4HANA Enterprise Management', 'Proven experience in FMCG or Manufacturing domain', 'Strong analytical, blueprinting, and client communication skills']
),
(
    'SAP Basis & Cloud Migration Specialist',
    'Infrastructure & Cloud',
    'Mumbai, India',
    'Full-time',
    '4 - 7 Years',
    'Manage enterprise SAP landscapes, high availability, OS/DB migrations, and cloud deployments on AWS/Azure.',
    ARRAY['Hands-on experience in SAP HANA DB administration, upgrades, and system refreshes', 'Expertise in Greenfield & Brownfield S/4HANA migration pathways', 'Solid knowledge of Linux, backup strategies, and security hardening']
)
ON CONFLICT DO NOTHING;

-- Seed Default Notification
INSERT INTO public.admin_notifications (title, message, type)
VALUES 
('System Initialized', 'KNOOVIQ Enterprise Platform & Security Controls initialized successfully.', 'SYSTEM')
ON CONFLICT DO NOTHING;
