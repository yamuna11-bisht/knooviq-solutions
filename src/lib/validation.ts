import { z } from 'zod';
import DOMPurify from 'dompurify';

/**
 * Sanitize string against XSS injection attacks.
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  return DOMPurify.sanitize(input.trim(), { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
}

// Regex for international & Indian phone numbers (7 to 15 digits, optional leading +)
const PHONE_REGEX = /^\+?[0-9\s\-()]{7,20}$/;

// Regex for business/standard email validation
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
    .email({ message: 'Please enter a valid email address' })
    .regex(EMAIL_REGEX, { message: 'Email address contains invalid characters' })
    .max(120, { message: 'Email cannot exceed 120 characters' })
    .transform(sanitizeInput),
  phone: z
    .string()
    .min(7, { message: 'Please enter a valid phone number (min 7 digits)' })
    .max(20, { message: 'Phone number cannot exceed 20 characters' })
    .regex(PHONE_REGEX, { message: 'Phone number format is invalid' })
    .transform(sanitizeInput),
  service: z
    .string()
    .min(1, { message: 'Please select a service or requirement' })
    .transform(sanitizeInput),
  message: z
    .string()
    .min(10, { message: 'Please provide at least 10 characters describing your requirement' })
    .max(3000, { message: 'Message cannot exceed 3000 characters' })
    .transform(sanitizeInput),
  honeypot: z.string().max(0, { message: 'Bot submission detected' }).optional(),
});

export type EnquiryFormData = z.infer<typeof EnquiryFormSchema>;

export const JobApplicationSchema = z.object({
  jobId: z.string().optional(),
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters' })
    .max(100, { message: 'Full name cannot exceed 100 characters' })
    .transform(sanitizeInput),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .regex(EMAIL_REGEX, { message: 'Email address contains invalid characters' })
    .max(120, { message: 'Email cannot exceed 120 characters' })
    .transform(sanitizeInput),
  phone: z
    .string()
    .min(7, { message: 'Please enter a valid phone number' })
    .max(20, { message: 'Phone number cannot exceed 20 characters' })
    .regex(PHONE_REGEX, { message: 'Phone number format is invalid' })
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
