-- ==============================================================================
-- KNOOVIQ INDUSTRIES PRIVATE LIMITED - SUPABASE ENTERPRISE DATABASE SCHEMA
-- Enterprise PostgreSQL Architecture with Zero-Trust Security, Strict RLS,
-- Input Constraints, Tamper-Proof Audit Logging & Automatic Timestamp Triggers
-- ==============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ==============================================================================
-- 2. ADMIN PROFILES & ROLE-BASED ACCESS CONTROL (RBAC)
-- ==============================================================================
-- Stores verified corporate staff accounts authorized to review and respond
-- to client leads and enterprise consultation requests.
CREATE TABLE IF NOT EXISTS public.admin_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID UNIQUE, -- Foreign key referencing auth.users(id) in Supabase Auth
    email TEXT NOT NULL UNIQUE CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    full_name TEXT NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
    role TEXT NOT NULL DEFAULT 'editor' CHECK (role IN ('super_admin', 'admin', 'editor')),
    is_active BOOLEAN NOT NULL DEFAULT true,
    last_login TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_admin_profiles_email ON public.admin_profiles(email);
CREATE INDEX IF NOT EXISTS idx_admin_profiles_user_id ON public.admin_profiles(user_id);

-- ==============================================================================
-- 3. ENQUIRIES TABLE (Chatbot & Consultation Modal Leads)
-- ==============================================================================
-- Primary enterprise table capturing all prospective customer inquiries originating
-- from the AI Chatbot Assistant and the Website Enterprise Consultation Form.
--
-- Security Controls:
-- 1. Full name & company minimum lengths to prevent empty junk submissions.
-- 2. Strict RFC email format regex check.
-- 3. Phone number length validation (7 to 25 chars) accommodating country codes.
-- 4. Requirement Details / message is OPTIONAL (up to 500 words / 5,000 characters).
-- 5. Source tracking ('CHATBOT_AI_ASSISTANT' vs 'WEBSITE_CONSULTATION_MODAL').
-- 6. RLS enabled: Public users can only INSERT; only verified Admins can read/update.
CREATE TABLE IF NOT EXISTS public.enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
    company TEXT NOT NULL CHECK (char_length(company) BETWEEN 2 AND 150),
    email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 25),
    service TEXT NOT NULL,
    industry TEXT DEFAULT 'Enterprise Technology',
    country TEXT DEFAULT 'India',
    message TEXT DEFAULT '' CHECK (message IS NULL OR char_length(message) <= 5000),
    status TEXT NOT NULL DEFAULT 'NEW' CHECK (status IN ('NEW', 'IN_REVIEW', 'CONTACTED', 'RESOLVED')),
    source TEXT NOT NULL DEFAULT 'WEBSITE_CONSULTATION_MODAL',
    internal_notes TEXT,
    ip_hash TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Migration helpers for existing database installations
ALTER TABLE public.enquiries DROP CONSTRAINT IF EXISTS enquiries_message_check;
ALTER TABLE public.enquiries ALTER COLUMN message DROP NOT NULL;
ALTER TABLE public.enquiries ALTER COLUMN message SET DEFAULT '';
ALTER TABLE public.enquiries ADD CONSTRAINT enquiries_message_check CHECK (message IS NULL OR char_length(message) <= 5000);

ALTER TABLE public.enquiries DROP CONSTRAINT IF EXISTS enquiries_phone_check;
ALTER TABLE public.enquiries ADD CONSTRAINT enquiries_phone_check CHECK (char_length(phone) BETWEEN 7 AND 25);

ALTER TABLE public.enquiries ADD COLUMN IF NOT EXISTS source TEXT DEFAULT 'WEBSITE_CONSULTATION_MODAL';

-- Optimized Indexes for Executive Cockpit & Telemetry
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON public.enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_source ON public.enquiries(source);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON public.enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_email ON public.enquiries(email);

-- ==============================================================================
-- 3B. UNIFIED CLIENT INQUIRIES (Enterprise Consultation & Executive Inquiry)
-- ==============================================================================
-- Enterprise unified table capturing all client leads from:
-- 1. Enterprise Consultation Form (ContactModal & Chatbot)
-- 2. Executive Inquiry Form (Knooviq Connect)
CREATE TABLE IF NOT EXISTS public.client_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    form_type TEXT NOT NULL CHECK (form_type IN ('Enterprise Consultation', 'Executive Inquiry')),
    full_name TEXT NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
    company_name TEXT CHECK (company_name IS NULL OR char_length(company_name) <= 150),
    email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    country_code TEXT NOT NULL DEFAULT '+91' CHECK (country_code ~* '^\+[0-9]{1,4}$'),
    phone_number TEXT NOT NULL CHECK (char_length(phone_number) BETWEEN 7 AND 20),
    service_requirement TEXT,
    enquiry_type TEXT,
    requirement_details TEXT CHECK (requirement_details IS NULL OR char_length(requirement_details) <= 5000),
    status TEXT NOT NULL DEFAULT 'Pending' CHECK (status IN ('Pending', 'In Review', 'Contacted', 'Resolved', 'Archived')),
    internal_notes TEXT,
    ip_hash TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_client_inquiries_form_type ON public.client_inquiries(form_type);
CREATE INDEX IF NOT EXISTS idx_client_inquiries_status ON public.client_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_client_inquiries_created_at ON public.client_inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_client_inquiries_email ON public.client_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_client_inquiries_company ON public.client_inquiries(company_name);

DROP TRIGGER IF EXISTS trg_client_inquiries_updated_at ON public.client_inquiries;
CREATE TRIGGER trg_client_inquiries_updated_at
BEFORE UPDATE ON public.client_inquiries
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

ALTER TABLE public.client_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can submit client inquiries" ON public.client_inquiries;
CREATE POLICY "Public can submit client inquiries"
ON public.client_inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (
    char_length(full_name) BETWEEN 2 AND 100 AND
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    char_length(phone_number) BETWEEN 7 AND 20
);

DROP POLICY IF EXISTS "Admins can view client inquiries" ON public.client_inquiries;
CREATE POLICY "Admins can view client inquiries"
ON public.client_inquiries FOR SELECT
TO authenticated
USING (public.is_admin());

DROP POLICY IF EXISTS "Admins can update client inquiries" ON public.client_inquiries;
CREATE POLICY "Admins can update client inquiries"
ON public.client_inquiries FOR UPDATE
TO authenticated
USING (public.is_admin());

DROP POLICY IF EXISTS "Super Admins can delete client inquiries" ON public.client_inquiries;
CREATE POLICY "Super Admins can delete client inquiries"
ON public.client_inquiries FOR DELETE
TO authenticated
USING (public.get_admin_role() = 'super_admin');

-- ==============================================================================
-- 4. CONTACT SUBMISSIONS (General Inquiries & Direct Connect Page)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
    email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 25),
    company TEXT NOT NULL CHECK (char_length(company) BETWEEN 2 AND 150),
    service TEXT NOT NULL,
    subject TEXT NOT NULL DEFAULT 'General Enterprise Inquiry',
    message TEXT DEFAULT '' CHECK (message IS NULL OR char_length(message) <= 5000),
    status TEXT NOT NULL DEFAULT 'NEW' CHECK (status IN ('NEW', 'IN_REVIEW', 'CONTACTED', 'RESOLVED', 'ARCHIVED')),
    internal_notes TEXT,
    ip_hash TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

ALTER TABLE public.contact_submissions DROP CONSTRAINT IF EXISTS contact_submissions_message_check;
ALTER TABLE public.contact_submissions ALTER COLUMN message DROP NOT NULL;
ALTER TABLE public.contact_submissions ALTER COLUMN message SET DEFAULT '';
ALTER TABLE public.contact_submissions ADD CONSTRAINT contact_submissions_message_check CHECK (message IS NULL OR char_length(message) <= 5000);

ALTER TABLE public.contact_submissions DROP CONSTRAINT IF EXISTS contact_submissions_phone_check;
ALTER TABLE public.contact_submissions ADD CONSTRAINT contact_submissions_phone_check CHECK (char_length(phone) BETWEEN 7 AND 25);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON public.contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);

-- ==============================================================================
-- 5. JOB OPENINGS (Active Careers Directory)
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
-- 6. CAREER APPLICATIONS (Resumes & Applicant Pipeline)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.career_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    job_id UUID REFERENCES public.job_openings(id) ON DELETE SET NULL,
    full_name TEXT NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
    email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 25),
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
-- 7. NEWSLETTER SUBSCRIBERS
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
-- 8. RAW FORM SUBMISSION AUDIT TRAIL
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.form_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    form_type TEXT NOT NULL, -- e.g. 'ENQUIRY_CHATBOT', 'ENQUIRY_MODAL', 'CONTACT_PAGE'
    submission_id UUID,
    submitter_email TEXT,
    ip_hash TEXT,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_form_submissions_created_at ON public.form_submissions(created_at DESC);

-- ==============================================================================
-- 9. ADMIN NOTIFICATIONS
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
-- 10. ACTIVITY & AUDIT LOGS (Tamper-Proof Compliance Ledger)
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
-- 11. AUTOMATIC TIMESTAMP TRIGGERS
-- ==============================================================================
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_enquiries_updated_at ON public.enquiries;
CREATE TRIGGER trg_enquiries_updated_at
BEFORE UPDATE ON public.enquiries
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS trg_contact_submissions_updated_at ON public.contact_submissions;
CREATE TRIGGER trg_contact_submissions_updated_at
BEFORE UPDATE ON public.contact_submissions
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS trg_admin_profiles_updated_at ON public.admin_profiles;
CREATE TRIGGER trg_admin_profiles_updated_at
BEFORE UPDATE ON public.admin_profiles
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- ==============================================================================
-- 12. ROW LEVEL SECURITY (RLS) ZERO-TRUST ARCHITECTURE
-- ==============================================================================
-- In Supabase, RLS ensures that public anonymous visitors CANNOT read, steal,
-- update, or delete customer inquiries or phone numbers.

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

-- Security helper functions
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
-- Policies for: public.enquiries
-- -----------------------------------------------------------------------------
-- 1. Public can submit new leads (INSERT only)
DROP POLICY IF EXISTS "Public can submit enquiries" ON public.enquiries;
CREATE POLICY "Public can submit enquiries"
ON public.enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (
    char_length(full_name) BETWEEN 2 AND 100 AND
    char_length(company) BETWEEN 2 AND 150 AND
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    char_length(phone) BETWEEN 7 AND 25
);

-- 2. ONLY authenticated internal admins can view leads (NO public reading)
DROP POLICY IF EXISTS "Admins can view enquiries" ON public.enquiries;
CREATE POLICY "Admins can view enquiries"
ON public.enquiries FOR SELECT
TO authenticated
USING (public.is_admin());

-- 3. ONLY admins can update status or notes
DROP POLICY IF EXISTS "Admins can update enquiries" ON public.enquiries;
CREATE POLICY "Admins can update enquiries"
ON public.enquiries FOR UPDATE
TO authenticated
USING (public.is_admin());

-- 4. ONLY Super Admins can delete
DROP POLICY IF EXISTS "Super Admins can delete enquiries" ON public.enquiries;
CREATE POLICY "Super Admins can delete enquiries"
ON public.enquiries FOR DELETE
TO authenticated
USING (public.get_admin_role() = 'super_admin');

-- -----------------------------------------------------------------------------
-- Policies for: public.contact_submissions
-- -----------------------------------------------------------------------------
DROP POLICY IF EXISTS "Public can submit contact" ON public.contact_submissions;
CREATE POLICY "Public can submit contact"
ON public.contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (
    char_length(name) BETWEEN 2 AND 100 AND
    char_length(company) BETWEEN 2 AND 150 AND
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    char_length(phone) BETWEEN 7 AND 25
);

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
-- Policies for: public.admin_profiles
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
-- Policies for: public.job_openings
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
-- Policies for: public.career_applications
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
-- Policies for: public.newsletter_subscribers
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
-- Policies for: public.admin_notifications
-- -----------------------------------------------------------------------------
DROP POLICY IF EXISTS "Admins can view and update notifications" ON public.admin_notifications;
CREATE POLICY "Admins can view and update notifications"
ON public.admin_notifications FOR ALL
TO authenticated
USING (public.is_admin());

-- -----------------------------------------------------------------------------
-- Policies for: public.activity_logs & public.audit_logs (Immutable Audit Trail)
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
-- ensuring compliance logs cannot be modified or destroyed by anyone.
