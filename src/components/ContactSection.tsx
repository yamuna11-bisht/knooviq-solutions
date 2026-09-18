import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck,
  Loader2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitEnquiry } from '../lib/supabase';
import { EnquiryFormSchema } from '../lib/validation';
import { RateLimiter } from '../lib/rateLimiter';
import { COMPANY_INFO } from '../data/knooviqData';

export const ContactSection: React.FC<{ initialService?: string }> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: initialService || '',
    message: '',
    honeypot: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});
    setErrorMessage(null);

    // 1. Anti-spam client rate limiting
    const rateCheck = RateLimiter.checkRateLimit('contact_enquiry', { maxAttempts: 4, windowMs: 60000 });
    if (!rateCheck.allowed) {
      setErrorMessage(`Rate limit exceeded. Please wait ${rateCheck.remainingWaitSec}s before submitting again.`);
      return;
    }

    // 2. Validate with Zod Schema
    const validationResult = EnquiryFormSchema.safeParse(formData);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0].toString()] = err.message;
      });
      setFormErrors(fieldErrors);
      return;
    }

    // 3. Check bot honeypot
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
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(res.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitStatus('idle');
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      honeypot: '',
    });
    setFormErrors({});
    setErrorMessage(null);
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-50 dark:bg-[#050B17] border-t border-slate-200 dark:border-sky-500/15 overflow-hidden transition-colors duration-300">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-[#00A3E0] font-mono">
              Initiate Collaboration
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1931] dark:text-white tracking-tight">
              Consult with Our Enterprise SAP Specialists
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Whether you require a strategic S/4HANA migration assessment, 24/7 AMS SLA pricing, or dedicated technical consulting, our leadership team is ready to assist.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Official Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
                <MapPin className="h-5 w-5 text-[#00A3E0]" />
                <span>Headquarters (Mumbai, India)</span>
              </h3>

              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <p className="leading-relaxed">
                  <strong className="text-slate-900 dark:text-white block font-bold mb-1">{COMPANY_INFO.name}</strong>
                  {COMPANY_INFO.headquarters.address},<br />
                  {COMPANY_INFO.headquarters.city}, {COMPANY_INFO.headquarters.state} – {COMPANY_INFO.headquarters.postalCode},<br />
                  {COMPANY_INFO.headquarters.country}
                </p>

                <div className="pt-4 border-t border-slate-100 dark:border-sky-500/15 space-y-3 text-xs font-medium">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[#00A3E0] flex-shrink-0" />
                    <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-[#00A3E0] transition-colors font-bold text-slate-800 dark:text-slate-200">
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-[#00A3E0] flex-shrink-0" />
                    <a href={`tel:${COMPANY_INFO.contact.phone}`} className="hover:text-[#00A3E0] transition-colors font-bold text-slate-800 dark:text-slate-200">
                      {COMPANY_INFO.contact.phone}
                    </a>
                    <span className="text-slate-400">|</span>
                    <a href={`tel:${COMPANY_INFO.contact.secondaryPhone}`} className="hover:text-[#00A3E0] transition-colors font-bold text-slate-800 dark:text-slate-200">
                      {COMPANY_INFO.contact.secondaryPhone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                    <Clock className="h-4 w-4 text-slate-400 flex-shrink-0" />
                    <span>{COMPANY_INFO.contact.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Security Commitment Card */}
            <div className="rounded-3xl border border-emerald-300 dark:border-emerald-500/30 bg-emerald-50/60 dark:bg-[#0B1528] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2 text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">Confidentiality Guaranteed</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                All business data, ERP scope notes, and technical architectures shared with KNOOVIQ Industries are protected under strict Non-Disclosure Agreements (NDA) and ISO data security protocols.
              </p>
            </div>

          </div>

          {/* Right Column: Secure Contact & Consultation Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-400/10 via-indigo-500/5 to-transparent rounded-bl-full pointer-events-none" />
              
              {submitStatus === 'success' ? (
                <div className="text-center py-10 relative z-10">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-500 dark:text-emerald-400 mb-4 shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#0A1931] dark:text-white mb-2">Consultation Request Sent!</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed mb-6 font-sans">
                    Thank you, <strong className="text-[#00A3E0] dark:text-cyan-300">{formData.fullName}</strong>. An enterprise solution architect from KNOOVIQ will review your requirements and reach out within 1 business day.
                  </p>
                  <button
                    onClick={handleReset}
                    className="btn-primary-gradient shimmer-sweep rounded-2xl px-7 py-3 text-xs font-bold uppercase tracking-wider text-white font-display"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-bold text-[#0A1931] dark:text-white">Send an Enterprise Inquiry</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Please fill in your details and our consulting team will connect with you.</p>
                  </div>

                  {errorMessage && (
                    <div className="mb-6 rounded-xl bg-rose-500/10 border border-rose-500/30 p-3.5 text-xs text-rose-600 dark:text-rose-300 flex items-center gap-2.5">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="hp_field"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  <div className="space-y-4 text-xs">
                    {/* Full Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Ramesh Kulkarni"
                          className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#00A3E0] focus:outline-none"
                        />
                        {formErrors.fullName && <p className="text-rose-500 text-[11px] mt-1">{formErrors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                          Company / Organization <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Reliance Retail / Tata Consumer"
                          className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#00A3E0] focus:outline-none"
                        />
                        {formErrors.company && <p className="text-rose-500 text-[11px] mt-1">{formErrors.company}</p>}
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                          Official Email <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ramesh@company.com"
                          className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#00A3E0] focus:outline-none"
                        />
                        {formErrors.email && <p className="text-rose-500 text-[11px] mt-1">{formErrors.email}</p>}
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98200 12345"
                          className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#00A3E0] focus:outline-none"
                        />
                        {formErrors.phone && <p className="text-rose-500 text-[11px] mt-1">{formErrors.phone}</p>}
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Primary Service / Solution Requirement <span className="text-rose-500">*</span>
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] px-4 py-3 text-slate-900 dark:text-white focus:border-[#00A3E0] focus:outline-none font-medium"
                      >
                        <option value="">Select a service category</option>
                        <option value="SAP S/4HANA Migration & Upgrades">SAP S/4HANA Migration & Upgrades</option>
                        <option value="SAP Consulting & Outsourcing">SAP Consulting & Outsourcing</option>
                        <option value="SAP Application Management (AMS)">SAP Application Management (AMS)</option>
                        <option value="SAP Support Services">SAP Support Services</option>
                        <option value="SAP Integration & BTP Solutions">SAP Integration & BTP Solutions</option>
                        <option value="SAP Mobility & Fiori UX">SAP Mobility & Fiori UX</option>
                        <option value="SAP Corporate Training">SAP Corporate Training</option>
                        <option value="General Enterprise Consultation">General Enterprise Consultation</option>
                      </select>
                      {formErrors.service && <p className="text-rose-500 text-[11px] mt-1">{formErrors.service}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Project Scope / Requirements <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your current SAP landscape, timeline, or specific challenges..."
                        className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#00A3E0] focus:outline-none"
                      />
                      {formErrors.message && <p className="text-rose-500 text-[11px] mt-1">{formErrors.message}</p>}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-8 flex items-center justify-between pt-4 border-t border-slate-100 dark:border-sky-500/15">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      * All submissions encrypted with strict RLS
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary-gradient shimmer-sweep group relative inline-flex items-center gap-2.5 overflow-hidden rounded-2xl px-8 py-4 text-xs font-bold uppercase tracking-wider text-white disabled:opacity-50 font-display"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Submit Consultation Request</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

