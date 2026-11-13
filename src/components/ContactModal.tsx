import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Send, CheckCircle2, AlertCircle, Loader2, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitEnquiry } from '../lib/supabase';
import {
  EnquiryFormSchema,
  validateEmail,
  validatePhone,
  sanitizePhoneInput
} from '../lib/validation';
import { PhoneInput } from './PhoneInput';
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
  const [otherServiceText, setOtherServiceText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  React.useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    const words = val.trim() ? val.trim().split(/\s+/).filter(Boolean) : [];
    if (words.length > 500) {
      const truncated = val.trim().split(/\s+/).slice(0, 500).join(' ');
      setFormData((prev) => ({ ...prev, message: truncated }));
    } else {
      setFormData((prev) => ({ ...prev, message: val }));
    }
  };

  const wordCount = formData.message.trim() ? formData.message.trim().split(/\s+/).filter(Boolean).length : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});
    setErrorMessage(null);

    const rateCheck = RateLimiter.checkRateLimit('modal_enquiry', { maxAttempts: 4, windowMs: 60000 });
    if (!rateCheck.allowed) {
      setErrorMessage(`Please wait ${rateCheck.remainingWaitSec}s before submitting again.`);
      return;
    }

    const effectiveService = formData.service === 'Other' && otherServiceText.trim()
      ? `Other: ${otherServiceText.trim()}`
      : formData.service;

    const validationResult = EnquiryFormSchema.safeParse({
      ...formData,
      service: effectiveService,
    });
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
        message: validationResult.data.message || '',
        source: 'WEBSITE_CONSULTATION_MODAL',
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
    setOtherServiceText('');
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
        className="relative max-w-xl w-full rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0A1120] p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[92vh] text-slate-900 dark:text-white"
      >
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 sm:top-6 sm:right-6 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/20 transition-all cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        {submitStatus === 'success' ? (
          <div className="text-center py-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-500 dark:text-emerald-400 mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#0A1931] dark:text-white mb-2 font-display">Inquiry Submitted!</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed mb-6 font-sans">
              Our enterprise solution experts will review your request and get in touch with you shortly.
            </p>
            <button
              onClick={handleClose}
              className="rounded-xl px-6 py-2.5 text-sm font-bold text-white bg-[#0070BA] hover:bg-[#005EA6] transition-all shadow-md cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-5 sm:mb-6">
              <span className="text-xs font-bold text-[#0070BA] dark:text-cyan-400 uppercase tracking-widest font-sans inline-block mb-1">
                Talk to Our Experts
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                Enterprise Consultation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-sans">
                Connect with KNOOVIQ's certified SAP leadership team.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 rounded-xl bg-rose-500/10 border border-rose-500/30 p-3 text-xs sm:text-sm text-rose-600 dark:text-rose-300 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 shrink-0" />
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

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-modal-fullname" className="block text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                    Full Name <span className="text-rose-500 font-bold ml-0.5">*</span>
                  </label>
                  <input
                    id="contact-modal-fullname"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Your Name"
                    className={`w-full rounded-xl border ${
                      formErrors.fullName
                        ? 'border-rose-500 ring-1 ring-rose-500/50 bg-rose-500/[0.02]'
                        : 'border-slate-300 dark:border-white/20 hover:border-slate-400 dark:hover:border-white/30 focus:border-[#0052CC] dark:focus:border-cyan-400 focus:ring-2 focus:ring-[#0052CC]/15 dark:focus:ring-cyan-400/20'
                    } bg-white dark:bg-[#050B17] px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-hidden transition-all font-medium`}
                  />
                  {formErrors.fullName && (
                    <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1 font-medium font-sans">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{formErrors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-modal-company" className="block text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                    Company
                  </label>
                  <input
                    id="contact-modal-company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company Name"
                    className={`w-full rounded-xl border ${
                      formErrors.company
                        ? 'border-rose-500 ring-1 ring-rose-500/50 bg-rose-500/[0.02]'
                        : 'border-slate-300 dark:border-white/20 hover:border-slate-400 dark:hover:border-white/30 focus:border-[#0052CC] dark:focus:border-cyan-400 focus:ring-2 focus:ring-[#0052CC]/15 dark:focus:ring-cyan-400/20'
                    } bg-white dark:bg-[#050B17] px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-hidden transition-all font-medium`}
                  />
                  {formErrors.company && (
                    <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1 font-medium font-sans">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{formErrors.company}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-modal-email" className="block text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                    Email Address <span className="text-rose-500 font-bold ml-0.5">*</span>
                  </label>
                  <input
                    id="contact-modal-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      const val = e.target.value;
                      setFormData({ ...formData, email: val });
                      if (formErrors.email) {
                        const err = validateEmail(val);
                        setFormErrors((prev) => {
                          const next = { ...prev };
                          if (err) next.email = err;
                          else delete next.email;
                          return next;
                        });
                      }
                    }}
                    onBlur={() => {
                      const err = validateEmail(formData.email);
                      setFormErrors((prev) => {
                        const next = { ...prev };
                        if (err) next.email = err;
                        else delete next.email;
                        return next;
                      });
                    }}
                    placeholder="name@company.com"
                    className={`w-full rounded-xl border ${
                      formErrors.email
                        ? 'border-rose-500 ring-1 ring-rose-500/50 bg-rose-500/[0.02]'
                        : 'border-slate-300 dark:border-white/20 hover:border-slate-400 dark:hover:border-white/30 focus:border-[#0052CC] dark:focus:border-cyan-400 focus:ring-2 focus:ring-[#0052CC]/15 dark:focus:ring-cyan-400/20'
                    } bg-white dark:bg-[#050B17] px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-hidden transition-all font-medium`}
                  />
                  {formErrors.email && (
                    <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1 font-medium font-sans">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{formErrors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-modal-phone" className="block text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                    Phone Number <span className="text-rose-500 font-bold ml-0.5">*</span>
                  </label>
                  <PhoneInput
                    id="contact-modal-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(fullNumber) => {
                      setFormData({ ...formData, phone: fullNumber });
                      const err = validatePhone(fullNumber);
                      setFormErrors((prev) => {
                        const next = { ...prev };
                        if (err) next.phone = err;
                        else delete next.phone;
                        return next;
                      });
                    }}
                    onBlur={() => {
                      const err = validatePhone(formData.phone);
                      setFormErrors((prev) => {
                        const next = { ...prev };
                        if (err) next.phone = err;
                        else delete next.phone;
                        return next;
                      });
                    }}
                    error={formErrors.phone}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-modal-service" className="block text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                  Service Requirement <span className="text-rose-500 font-bold ml-0.5">*</span>
                </label>
                <div className="relative">
                  <select
                    id="contact-modal-service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full appearance-none rounded-xl border border-slate-300 dark:border-white/20 hover:border-slate-400 dark:hover:border-white/30 bg-white dark:bg-[#050B17] px-3.5 py-2.5 pr-10 text-sm text-slate-900 dark:text-white focus:border-[#0052CC] dark:focus:border-cyan-400 focus:ring-2 focus:ring-[#0052CC]/15 dark:focus:ring-cyan-400/20 focus:outline-hidden font-medium cursor-pointer transition-all"
                  >
                    <option value="SAP S/4HANA Migration & Upgrades">SAP S/4HANA Migration & Upgrades</option>
                    <option value="SAP Consulting & Outsourcing">SAP Consulting & Outsourcing</option>
                    <option value="SAP Application Management (AMS)">SAP Application Management (AMS)</option>
                    <option value="SAP Support Services">SAP Support Services</option>
                    <option value="SAP Integration & BTP Solutions">SAP Integration & BTP Solutions</option>
                    <option value="SAP Mobility & Fiori UX">SAP Mobility & Fiori UX</option>
                    <option value="SAP Corporate Training">SAP Corporate Training</option>
                    <option value="General Enterprise Consultation">General Enterprise Consultation</option>
                    <option value="Other">Other</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {formData.service === 'Other' && (
                  <div className="mt-2.5">
                    <input
                      type="text"
                      value={otherServiceText}
                      onChange={(e) => setOtherServiceText(e.target.value)}
                      placeholder="Please specify your other requirement..."
                      className="w-full rounded-xl border border-slate-300 dark:border-white/20 hover:border-slate-400 dark:hover:border-white/30 bg-white dark:bg-[#050B17] px-3.5 py-2.5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#0052CC] dark:focus:border-cyan-400 focus:ring-2 focus:ring-[#0052CC]/15 dark:focus:ring-cyan-400/20 focus:outline-hidden text-sm font-medium transition-all"
                    />
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="contact-modal-message" className="block text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Requirement Details
                  </label>
                  <span className={`text-xs font-medium font-sans ${wordCount >= 490 ? 'text-amber-500 font-bold' : 'text-slate-500 dark:text-slate-400'}`}>
                    {wordCount} / 500 words
                  </span>
                </div>
                <textarea
                  id="contact-modal-message"
                  rows={3}
                  value={formData.message}
                  onChange={handleMessageChange}
                  placeholder="Describe your current ERP systems and objectives (optional, max 500 words)..."
                  className="w-full rounded-xl border border-slate-300 dark:border-white/20 hover:border-slate-400 dark:hover:border-white/30 bg-white dark:bg-[#050B17] px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#0052CC] dark:focus:border-cyan-400 focus:ring-2 focus:ring-[#0052CC]/15 dark:focus:ring-cyan-400/20 focus:outline-hidden transition-all resize-none font-medium"
                />
                {formErrors.message && (
                  <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1 font-medium font-sans">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{formErrors.message}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#0070BA] hover:bg-[#005EA6] active:bg-[#004C87] shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
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

