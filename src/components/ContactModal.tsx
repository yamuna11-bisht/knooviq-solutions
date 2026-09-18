import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitEnquiry } from '../lib/supabase';
import { EnquiryFormSchema } from '../lib/validation';
import { RateLimiter } from '../lib/rateLimiter';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, defaultService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: defaultService || 'SAP Consulting & Outsourcing',
    message: '',
    honeypot: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  React.useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});
    setErrorMessage(null);

    const rateCheck = RateLimiter.checkRateLimit('modal_enquiry', { maxAttempts: 4, windowMs: 60000 });
    if (!rateCheck.allowed) {
      setErrorMessage(`Please wait ${rateCheck.remainingWaitSec}s before submitting again.`);
      return;
    }

    const validationResult = EnquiryFormSchema.safeParse(formData);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0].toString()] = err.message;
      });
      setFormErrors(fieldErrors);
      return;
    }

    if (formData.honeypot && formData.honeypot.length > 0) {
      setErrorMessage('Bot submission detected.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await submitEnquiry({
        full_name: validationResult.data.fullName,
        company: validationResult.data.company,
        email: validationResult.data.email,
        phone: validationResult.data.phone,
        service: validationResult.data.service,
        message: validationResult.data.message,
      });

      if (res.success) {
        setSubmitStatus('success');
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(res.error || 'Failed to submit enquiry.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitStatus('idle');
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      service: defaultService || 'SAP Consulting & Outsourcing',
      message: '',
      honeypot: '',
    });
    setFormErrors({});
    setErrorMessage(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-[#050B17]/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative max-w-xl w-full rounded-3xl border border-slate-200 dark:border-sky-500/30 bg-white dark:bg-[#0B1528] p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-slate-900 dark:text-white"
      >
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {submitStatus === 'success' ? (
          <div className="text-center py-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-500 dark:text-emerald-400 mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#0A1931] dark:text-white mb-2">Inquiry Submitted!</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed mb-6">
              Our enterprise solution experts will review your request and get in touch with you shortly.
            </p>
            <button
              onClick={handleClose}
              className="glow-btn rounded-xl px-6 py-2.5 text-xs font-bold text-white"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <span className="text-xs font-bold text-[#00A3E0] uppercase tracking-wider font-mono">Talk to Our Experts</span>
              <h3 className="text-xl font-bold text-[#0A1931] dark:text-white mt-1">Enterprise Consultation</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Connect with KNOOVIQ's certified SAP leadership team.</p>
            </div>

            {errorMessage && (
              <div className="mb-4 rounded-xl bg-rose-500/10 border border-rose-500/30 p-3 text-xs text-rose-600 dark:text-rose-300 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="modal_hp"
                tabIndex={-1}
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              />
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Your Name"
                    className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] px-3.5 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#00A3E0] focus:outline-none"
                  />
                  {formErrors.fullName && <p className="text-rose-500 text-[11px] mt-1">{formErrors.fullName}</p>}
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Company <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company Name"
                    className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] px-3.5 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#00A3E0] focus:outline-none"
                  />
                  {formErrors.company && <p className="text-rose-500 text-[11px] mt-1">{formErrors.company}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] px-3.5 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#00A3E0] focus:outline-none"
                  />
                  {formErrors.email && <p className="text-rose-500 text-[11px] mt-1">{formErrors.email}</p>}
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98000 00000"
                    className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] px-3.5 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#00A3E0] focus:outline-none"
                  />
                  {formErrors.phone && <p className="text-rose-500 text-[11px] mt-1">{formErrors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Service Requirement <span className="text-rose-500">*</span>
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] px-3.5 py-2.5 text-slate-900 dark:text-white focus:border-[#00A3E0] focus:outline-none font-medium"
                >
                  <option value="SAP S/4HANA Migration & Upgrades">SAP S/4HANA Migration & Upgrades</option>
                  <option value="SAP Consulting & Outsourcing">SAP Consulting & Outsourcing</option>
                  <option value="SAP Application Management (AMS)">SAP Application Management (AMS)</option>
                  <option value="SAP Support Services">SAP Support Services</option>
                  <option value="SAP Integration & BTP Solutions">SAP Integration & BTP Solutions</option>
                  <option value="SAP Mobility & Fiori UX">SAP Mobility & Fiori UX</option>
                  <option value="SAP Corporate Training">SAP Corporate Training</option>
                  <option value="General Enterprise Consultation">General Enterprise Consultation</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Requirement Details <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your current ERP systems and objectives..."
                  className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] px-3.5 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#00A3E0] focus:outline-none"
                />
                {formErrors.message && <p className="text-rose-500 text-[11px] mt-1">{formErrors.message}</p>}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-sky-500/15">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="glow-btn inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-xs font-bold text-white disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-3.5 w-3.5" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </motion.div>
    </div>
  );
};

