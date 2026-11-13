import { z } from 'zod';
import DOMPurify from 'dompurify';

/**
 * Sanitize string against XSS injection attacks.
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  if (typeof DOMPurify?.sanitize === 'function') {
    return DOMPurify.sanitize(input.trim(), { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
  }
  return input.trim().replace(/<[^>]*>?/gm, '');
}

// Strict regex for business/standard email validation (no consecutive dots, valid domain + TLD)
const EMAIL_REGEX = /^[a-zA-Z0-9](?:[a-zA-Z0-9._%+-]{0,62}[a-zA-Z0-9])?@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;

export interface CountryCodeOption {
  code: string;
  iso: string;
  country: string;
  flag: string;
  placeholder: string;
  digits: number;
}

export const COUNTRY_CODES: CountryCodeOption[] = [
  { code: '+91', iso: 'IN', country: 'India', flag: '🇮🇳', placeholder: '10-digit number', digits: 10 },
  { code: '+1', iso: 'US', country: 'USA / Canada', flag: '🇺🇸', placeholder: '10-digit number', digits: 10 },
  { code: '+44', iso: 'GB', country: 'United Kingdom', flag: '🇬🇧', placeholder: '10-digit number', digits: 10 },
  { code: '+971', iso: 'AE', country: 'UAE', flag: '🇦🇪', placeholder: '9-digit number', digits: 9 },
  { code: '+65', iso: 'SG', country: 'Singapore', flag: '🇸🇬', placeholder: '8-digit number', digits: 8 },
  { code: '+61', iso: 'AU', country: 'Australia', flag: '🇦🇺', placeholder: '9-digit number', digits: 9 },
  { code: '+49', iso: 'DE', country: 'Germany', flag: '🇩🇪', placeholder: '10-digit number', digits: 10 },
  { code: '+966', iso: 'SA', country: 'Saudi Arabia', flag: '🇸🇦', placeholder: '9-digit number', digits: 9 },
  { code: '+974', iso: 'QA', country: 'Qatar', flag: '🇶🇦', placeholder: '8-digit number', digits: 8 },
  { code: '+33', iso: 'FR', country: 'France', flag: '🇫🇷', placeholder: '9-digit number', digits: 9 },
  { code: '+81', iso: 'JP', country: 'Japan', flag: '🇯🇵', placeholder: '10-digit number', digits: 10 },
];

/**
 * Sanitize phone input to only allow numeric digits and optional leading plus sign.
 */
export function sanitizePhoneInput(input: string): string {
  if (!input) return '';
  const trimmed = input.trim();
  const hasLeadingPlus = trimmed.startsWith('+');
  const digitsOnly = trimmed.replace(/\D/g, '');
  if (hasLeadingPlus) {
    return `+${digitsOnly}`;
  }
  return digitsOnly;
}

/**
 * Extract only numeric digits from input, up to optional maxDigits.
 */
export function sanitizePhoneDigits(input: string, maxDigits: number = 10): string {
  if (!input) return '';
  return input.replace(/\D/g, '').slice(0, maxDigits);
}

export function validateEmail(email: string): string | null {
  const trimmed = (email || '').trim();
  if (!trimmed) {
    return 'Email address is required.';
  }
  if (trimmed.length > 120) {
    return 'Email cannot exceed 120 characters.';
  }
  if (trimmed.includes('..') || !EMAIL_REGEX.test(trimmed)) {
    return 'Please enter a valid email address (e.g. name@company.com).';
  }
  return null;
}

/**
 * Validates phone numbers with strict Indian mobile rules:
 * - Empty: "Phone number is required."
 * - India (+91): exactly 10 digits starting with 6, 7, 8, or 9
 * - Error Messages:
 *   - Empty: "Phone number is required."
 *   - Invalid start: "Enter a valid Indian mobile number starting with 6, 7, 8, or 9."
 *   - Invalid length: "Phone number must contain exactly 10 digits."
 * - International: 7-15 digits
 */
export function validatePhone(phone: string, countryCode: string = '+91'): string | null {
  const trimmed = (phone || '').trim();
  if (!trimmed) {
    return 'Phone number is required.';
  }

  // Determine effective country code
  let effectiveCountry = countryCode || '+91';
  let rawNumber = trimmed;

  if (trimmed.startsWith('+')) {
    const matched = COUNTRY_CODES.find((c) => trimmed.startsWith(c.code));
    if (matched) {
      effectiveCountry = matched.code;
      rawNumber = trimmed.slice(matched.code.length).trim();
    } else {
      const match = trimmed.match(/^(\+\d{1,4})\s*(.*)$/);
      if (match) {
        effectiveCountry = match[1];
        rawNumber = match[2].trim();
      }
    }
  }

  // Extract only digits
  let digits = rawNumber.replace(/\D/g, '');

  if (effectiveCountry === '+91') {
    // If someone entered 11 digits starting with trunk 0, strip leading 0
    if (digits.length === 11 && digits.startsWith('0')) {
      digits = digits.slice(1);
    }

    if (!digits) {
      return 'Phone number is required.';
    }

    const firstDigit = digits.charAt(0);
    if (!['6', '7', '8', '9'].includes(firstDigit)) {
      return 'Enter a valid Indian mobile number starting with 6, 7, 8, or 9.';
    }

    if (digits.length !== 10) {
      return 'Phone number must contain exactly 10 digits.';
    }

    return null;
  } else {
    // International numbers
    if (!digits) {
      return 'Phone number is required.';
    }
    if (digits.length < 7 || digits.length > 15) {
      return 'Phone number must be between 7 and 15 digits.';
    }
    return null;
  }
}

export const EnquiryFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters' })
    .max(100, { message: 'Full name cannot exceed 100 characters' })
    .transform(sanitizeInput),
  company: z
    .string()
    .max(150, { message: 'Company name cannot exceed 150 characters' })
    .optional()
    .or(z.literal(''))
    .default('')
    .transform(sanitizeInput),
  email: z
    .string()
    .max(120, { message: 'Email cannot exceed 120 characters' })
    .refine((val) => validateEmail(val) === null, (val) => ({
      message: validateEmail(val) || 'Please enter a valid email address',
    }))
    .transform(sanitizeInput),
  phone: z
    .string()
    .min(1, { message: 'Phone number is required.' })
    .max(30, { message: 'Phone number cannot exceed 30 characters' })
    .refine((val) => validatePhone(val) === null, (val) => ({
      message: validatePhone(val) || 'Enter a valid Indian mobile number starting with 6, 7, 8, or 9.',
    }))
    .transform(sanitizeInput),
  service: z
    .string()
    .min(1, { message: 'Please select a service or requirement' })
    .transform(sanitizeInput),
  message: z
    .string()
    .max(5000, { message: 'Requirement details cannot exceed 500 words' })
    .refine((val) => {
      if (!val || !val.trim()) return true;
      const wordCount = val.trim().split(/\s+/).filter(Boolean).length;
      return wordCount <= 500;
    }, { message: 'Requirement details cannot exceed 500 words' })
    .optional()
    .or(z.literal(''))
    .default('')
    .transform(sanitizeInput),
  source: z.string().optional().default('WEBSITE_CONSULTATION_MODAL').transform(sanitizeInput),
  honeypot: z.string().max(0, { message: 'Bot submission detected' }).optional(),
});

export type EnquiryFormData = z.infer<typeof EnquiryFormSchema>;

export const ContactSubmissionSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100, { message: 'Name cannot exceed 100 characters' })
    .transform(sanitizeInput),
  company: z
    .string()
    .max(150, { message: 'Company name cannot exceed 150 characters' })
    .optional()
    .or(z.literal(''))
    .default('')
    .transform(sanitizeInput),
  email: z
    .string()
    .max(120, { message: 'Email cannot exceed 120 characters' })
    .refine((val) => validateEmail(val) === null, (val) => ({
      message: validateEmail(val) || 'Please enter a valid email address',
    }))
    .transform(sanitizeInput),
  phone: z
    .string()
    .min(1, { message: 'Phone number is required.' })
    .max(30, { message: 'Phone number cannot exceed 30 characters' })
    .refine((val) => validatePhone(val) === null, (val) => ({
      message: validatePhone(val) || 'Enter a valid Indian mobile number starting with 6, 7, 8, or 9.',
    }))
    .transform(sanitizeInput),
  service: z
    .string()
    .min(1, { message: 'Please select or specify a service' })
    .transform(sanitizeInput),
  subject: z
    .string()
    .max(200, { message: 'Subject cannot exceed 200 characters' })
    .optional()
    .default('General Enterprise Inquiry')
    .transform(sanitizeInput),
  message: z
    .string()
    .max(5000, { message: 'Message cannot exceed 500 words' })
    .optional()
    .or(z.literal(''))
    .default('')
    .transform(sanitizeInput),
  honeypot: z.string().max(0, { message: 'Bot submission detected' }).optional(),
});

export type ContactSubmissionData = z.infer<typeof ContactSubmissionSchema>;

export const JobApplicationSchema = z.object({
  jobId: z.string().optional(),
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters' })
    .max(100, { message: 'Full name cannot exceed 100 characters' })
    .transform(sanitizeInput),
  email: z
    .string()
    .max(120, { message: 'Email cannot exceed 120 characters' })
    .refine((val) => validateEmail(val) === null, (val) => ({
      message: validateEmail(val) || 'Please enter a valid email address',
    }))
    .transform(sanitizeInput),
  phone: z
    .string()
    .min(1, { message: 'Phone number is required.' })
    .max(30, { message: 'Phone number cannot exceed 30 characters' })
    .refine((val) => validatePhone(val) === null, (val) => ({
      message: validatePhone(val) || 'Enter a valid Indian mobile number starting with 6, 7, 8, or 9.',
    }))
    .transform(sanitizeInput),
  position: z
    .string()
    .min(2, { message: 'Position is required' })
    .transform(sanitizeInput),
  experience: z
    .string()
    .min(1, { message: 'Please specify your years of experience' })
    .transform(sanitizeInput),
  portfolioLinkedin: z
    .string()
    .url({ message: 'Please enter a valid URL (e.g., https://linkedin.com/in/...)' })
    .optional()
    .or(z.literal(''))
    .transform(val => (val ? sanitizeInput(val) : '')),
  coverNote: z
    .string()
    .max(2000, { message: 'Cover note cannot exceed 2000 characters' })
    .optional()
    .transform(val => (val ? sanitizeInput(val) : '')),
  honeypot: z.string().max(0, { message: 'Bot submission detected' }).optional(),
});

export type JobApplicationFormData = z.infer<typeof JobApplicationSchema>;

// Allowed resume file extensions & MIME types
export const ALLOWED_FILE_EXTENSIONS = ['.pdf', '.docx', '.doc'];
export const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/msword',
];
export const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

export function validateResumeFile(file: File): { isValid: boolean; error?: string } {
  if (!file) {
    return { isValid: false, error: 'Please select a resume file to upload.' };
  }

  // File size check
  if (file.size > MAX_FILE_SIZE_BYTES) {
    return { isValid: false, error: 'File size exceeds the 5MB maximum limit.' };
  }

  // Extension check
  const fileName = file.name.toLowerCase();
  const hasValidExt = ALLOWED_FILE_EXTENSIONS.some(ext => fileName.endsWith(ext));
  if (!hasValidExt) {
    return { isValid: false, error: 'Only .PDF and .DOCX resume formats are supported.' };
  }

  // MIME type check
  if (file.type && !ALLOWED_MIME_TYPES.includes(file.type)) {
    return { isValid: false, error: 'Invalid document type. Please upload a valid PDF or Word document.' };
  }

  return { isValid: true };
}
