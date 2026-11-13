import { z } from 'zod';
import DOMPurify from 'dompurify';

/**
 * Sanitize string against XSS injection attacks.
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  return DOMPurify.sanitize(input.trim(), { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
}

// Strict regex for business/standard email validation (no consecutive dots, valid domain + TLD)
const EMAIL_REGEX = /^[a-zA-Z0-9](?:[a-zA-Z0-9._%+-]{0,62}[a-zA-Z0-9])?@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;

export function sanitizePhoneInput(input: string): string {
  if (!input) return '';
  const hasLeadingPlus = input.startsWith('+');
  const cleaned = input.replace(/[^0-9\s\-()]/g, '');
  return hasLeadingPlus ? `+${cleaned}` : cleaned;
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

export function validatePhone(phone: string): string | null {
  const trimmed = (phone || '').trim();
  if (!trimmed) {
    return 'Phone number is required.';
  }
  if (!/^\+?[0-9\s\-()]+$/.test(trimmed)) {
    return 'Phone number can only contain digits, +, spaces, hyphens, and parentheses.';
  }
  const digits = trimmed.replace(/\D/g, '');
  if (digits.length < 10) {
    return 'Phone number must be at least 10 digits.';
  }
  if (digits.length > 15) {
    return 'Phone number cannot exceed 15 digits.';
  }
  const subscriberDigits = trimmed.startsWith('+91') && digits.length === 12 ? digits.slice(2) : digits;
  if (/^(\d)\1+$/.test(digits) || /^(\d)\1+$/.test(subscriberDigits)) {
    return 'Please enter a valid phone number.';
  }
  if (trimmed.startsWith('+91') && digits.length !== 12) {
    return 'Indian phone numbers with +91 must contain 10 digits after +91.';
  }
  return null;
}

export const EnquiryFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters' })
    .max(100, { message: 'Full name cannot exceed 100 characters' })
    .transform(sanitizeInput),
  company: z
    .string()
    .min(2, { message: 'Company name must be at least 2 characters' })
    .max(150, { message: 'Company name cannot exceed 150 characters' })
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
    .max(20, { message: 'Phone number cannot exceed 20 characters' })
    .refine((val) => validatePhone(val) === null, (val) => ({
      message: validatePhone(val) || 'Please enter a valid phone number',
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
    .min(2, { message: 'Company name must be at least 2 characters' })
    .max(150, { message: 'Company name cannot exceed 150 characters' })
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
    .max(25, { message: 'Phone number cannot exceed 25 characters' })
    .refine((val) => validatePhone(val) === null, (val) => ({
      message: validatePhone(val) || 'Please enter a valid phone number',
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
    .max(20, { message: 'Phone number cannot exceed 20 characters' })
    .refine((val) => validatePhone(val) === null, (val) => ({
      message: validatePhone(val) || 'Please enter a valid phone number',
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
