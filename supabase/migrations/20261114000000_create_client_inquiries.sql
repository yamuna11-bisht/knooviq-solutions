-- ==============================================================================
-- MIGRATION: 20261114000000_create_client_inquiries.sql
-- KNOOVIQ INDUSTRIES PRIVATE LIMITED
-- Unified Client Inquiries Schema for Enterprise Consultation & Executive Inquiry
-- ==============================================================================

-- 1. Create client_inquiries Table
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

-- 2. Indexes for High-Performance Searching and Filtering
CREATE INDEX IF NOT EXISTS idx_client_inquiries_form_type ON public.client_inquiries(form_type);
CREATE INDEX IF NOT EXISTS idx_client_inquiries_status ON public.client_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_client_inquiries_created_at ON public.client_inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_client_inquiries_email ON public.client_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_client_inquiries_company ON public.client_inquiries(company_name);

-- 3. Automatic updated_at Trigger
DROP TRIGGER IF EXISTS trg_client_inquiries_updated_at ON public.client_inquiries;
CREATE TRIGGER trg_client_inquiries_updated_at
BEFORE UPDATE ON public.client_inquiries
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.client_inquiries ENABLE ROW LEVEL SECURITY;

-- Policy 1: Public can submit inquiries (INSERT only with validation)
DROP POLICY IF EXISTS "Public can submit client inquiries" ON public.client_inquiries;
CREATE POLICY "Public can submit client inquiries"
ON public.client_inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (
    char_length(full_name) BETWEEN 2 AND 100 AND
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    char_length(phone_number) BETWEEN 7 AND 20
);

-- Policy 2: Authenticated corporate admins can view all client inquiries
DROP POLICY IF EXISTS "Admins can view client inquiries" ON public.client_inquiries;
CREATE POLICY "Admins can view client inquiries"
ON public.client_inquiries FOR SELECT
TO authenticated
USING (public.is_admin());

-- Policy 3: Authenticated corporate admins can update inquiry status & internal notes
DROP POLICY IF EXISTS "Admins can update client inquiries" ON public.client_inquiries;
CREATE POLICY "Admins can update client inquiries"
ON public.client_inquiries FOR UPDATE
TO authenticated
USING (public.is_admin());

-- Policy 4: Super Admins can delete client inquiries
DROP POLICY IF EXISTS "Super Admins can delete client inquiries" ON public.client_inquiries;
CREATE POLICY "Super Admins can delete client inquiries"
ON public.client_inquiries FOR DELETE
TO authenticated
USING (public.get_admin_role() = 'super_admin');

