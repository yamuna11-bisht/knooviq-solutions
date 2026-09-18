import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Upload, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  Send,
  Loader2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { fetchJobOpenings, submitJobApplication } from '../lib/supabase';
import { validateResumeFile, JobApplicationSchema } from '../lib/validation';
import { RateLimiter } from '../lib/rateLimiter';
import { JobOpening } from '../types';

export const CareersSection: React.FC = () => {
  const [jobs, setJobs] = useState<JobOpening[]>([]);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  // Application Modal Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    portfolioLinkedin: '',
    coverNote: '',
    honeypot: '',
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const data = await fetchJobOpenings();
      setJobs(data);
    }
    load();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validation = validateResumeFile(file);
      if (!validation.isValid) {
        setFileError(validation.error || 'Invalid file');
        setResumeFile(null);
      } else {
        setResumeFile(file);
      }
    }
  };

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});
    setErrorMessage(null);

    // 1. Check Rate Limit
    const rateCheck = RateLimiter.checkRateLimit('job_application', { maxAttempts: 3, windowMs: 60000 });
    if (!rateCheck.allowed) {
      setErrorMessage(`Too many submission attempts. Please wait ${rateCheck.remainingWaitSec}s before retrying.`);
      return;
    }

    // 2. Validate with Zod
    const positionTitle = selectedJob ? selectedJob.title : 'General Application';
    const validationResult = JobApplicationSchema.safeParse({
      ...formData,
      position: positionTitle,
      jobId: selectedJob?.id,
    });

    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0].toString()] = err.message;
      });
      setFormErrors(fieldErrors);
      return;
    }

    // 3. Resume File Validation
    if (!resumeFile) {
      setFileError('Please attach your resume (.PDF or .DOCX format, max 5MB)');
      return;
    }

    const fileValidation = validateResumeFile(resumeFile);
    if (!fileValidation.isValid) {
      setFileError(fileValidation.error || 'Invalid file');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await submitJobApplication(
        {
          job_id: selectedJob?.id,
          full_name: validationResult.data.fullName,
          email: validationResult.data.email,
          phone: validationResult.data.phone,
          position: positionTitle,
          experience: validationResult.data.experience,
          portfolio_linkedin: validationResult.data.portfolioLinkedin,
          cover_note: validationResult.data.coverNote,
        },
        resumeFile
      );

      if (res.success) {
        setSubmitStatus('success');
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 }
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(res.error || 'Submission failed. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetModal = () => {
    setSelectedJob(null);
    setSubmitStatus('idle');
    setResumeFile(null);
    setFileError(null);
    setFormErrors({});
    setErrorMessage(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      experience: '',
      portfolioLinkedin: '',
      coverNote: '',
      honeypot: '',
    });
  };

  return (
    <section id="careers" className="relative py-24 bg-white dark:bg-[#050B17] overflow-hidden transition-colors duration-300">
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
              Build Your Career at KNOOVIQ
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1931] dark:text-white tracking-tight">
              Join Our Elite SAP & Cloud Practice
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Work alongside visionary enterprise architects on complex S/4HANA migrations, global rollouts, and next-generation cloud integrations.
            </p>
          </motion.div>
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel glass-panel-hover flex flex-col justify-between rounded-3xl p-7 sm:p-8 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="rounded-xl bg-[#00A3E0]/15 dark:bg-cyan-400/20 border border-[#00A3E0]/30 dark:border-cyan-400/30 px-3.5 py-1 text-[11px] font-bold text-[#0077B6] dark:text-cyan-300 font-mono">
                    {job.department}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold font-display">
                    {job.employment_type}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {job.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-300 font-medium mb-4 font-display">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#00A3E0] dark:text-cyan-400" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-sky-500 dark:text-cyan-400" />
                    <span>Exp: {job.experience_level}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-sans">
                  {job.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-display">Key Requirements:</span>
                  {job.requirements.map((req, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 font-sans">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#00A3E0] dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-end">
                <button
                  onClick={() => setSelectedJob(job)}
                  className="btn-primary-gradient shimmer-sweep rounded-2xl px-6 py-3 text-xs font-bold uppercase tracking-wider text-white font-display"
                >
                  Apply for Position
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-[#050B17]/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-xl w-full rounded-3xl border border-slate-200 dark:border-sky-500/30 bg-white dark:bg-[#0B1528] p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-slate-900 dark:text-white"
            >
              <button
                onClick={resetModal}
                className="absolute top-6 right-6 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-500 dark:text-emerald-400 mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A1931] dark:text-white mb-2">Application Received!</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed mb-6">
                    Thank you for applying for the <strong className="text-[#00A3E0] dark:text-cyan-300">{selectedJob.title}</strong> role at KNOOVIQ Industries. Our talent acquisition team will review your profile and reach out via email.
                  </p>
                  <button
                    onClick={resetModal}
                    className="glow-btn rounded-xl px-6 py-2.5 text-xs font-bold text-white"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply}>
                  <div className="mb-6">
                    <span className="text-xs font-bold text-[#00A3E0] uppercase tracking-wider font-mono">Job Application</span>
                    <h3 className="text-xl font-bold text-[#0A1931] dark:text-white mt-1">{selectedJob.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">{selectedJob.department} • {selectedJob.location}</p>
                  </div>

                  {errorMessage && (
                    <div className="mb-4 rounded-xl bg-rose-500/10 border border-rose-500/30 p-3 text-xs text-rose-600 dark:text-rose-300 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Honeypot field */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website_honeypot_field"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  <div className="space-y-4 text-xs">
                    {/* Full Name */}
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Anand Deshmukh"
                        className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] px-3.5 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#00A3E0] focus:outline-none"
                      />
                      {formErrors.fullName && <p className="text-rose-500 text-[11px] mt-1">{formErrors.fullName}</p>}
                    </div>

                    {/* Email & Phone */}
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
                          placeholder="anand@example.com"
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
                          placeholder="+91 98765 43210"
                          className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] px-3.5 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#00A3E0] focus:outline-none"
                        />
                        {formErrors.phone && <p className="text-rose-500 text-[11px] mt-1">{formErrors.phone}</p>}
                      </div>
                    </div>

                    {/* Experience & LinkedIn */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Relevant Experience <span className="text-rose-500">*</span>
                        </label>
                        <select
                          required
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] px-3.5 py-2.5 text-slate-900 dark:text-white focus:border-[#00A3E0] focus:outline-none"
                        >
                          <option value="">Select experience</option>
                          <option value="1-3 Years">1 - 3 Years</option>
                          <option value="3-5 Years">3 - 5 Years</option>
                          <option value="5-8 Years">5 - 8 Years</option>
                          <option value="8+ Years">8+ Years</option>
                        </select>
                        {formErrors.experience && <p className="text-rose-500 text-[11px] mt-1">{formErrors.experience}</p>}
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          LinkedIn / Portfolio URL
                        </label>
                        <input
                          type="url"
                          value={formData.portfolioLinkedin}
                          onChange={(e) => setFormData({ ...formData, portfolioLinkedin: e.target.value })}
                          placeholder="https://linkedin.com/in/..."
                          className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] px-3.5 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#00A3E0] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Resume Upload File Box */}
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Resume Upload (.PDF / .DOCX, Max 5MB) <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative border-2 border-dashed border-slate-300 dark:border-sky-500/30 rounded-2xl p-4 text-center hover:border-[#00A3E0] transition-colors bg-slate-50 dark:bg-[#050B17]">
                        <input
                          type="file"
                          accept=".pdf,.docx,.doc"
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        <div className="flex flex-col items-center">
                          <Upload className="h-6 w-6 text-[#00A3E0] mb-1" />
                          <span className="text-xs text-slate-800 dark:text-slate-200 font-semibold">
                            {resumeFile ? (
                              <strong className="text-[#00A3E0] dark:text-cyan-300">{resumeFile.name} ({(resumeFile.size / 1024 / 1024).toFixed(2)} MB)</strong>
                            ) : (
                              'Click or drag & drop resume here'
                            )}
                          </span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Encrypted private cloud storage</span>
                        </div>
                      </div>
                      {fileError && <p className="text-rose-500 text-[11px] mt-1">{fileError}</p>}
                    </div>

                    {/* Cover Note */}
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Brief Cover Note (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.coverNote}
                        onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                        placeholder="Highlight your key SAP projects or certifications..."
                        className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] px-3.5 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#00A3E0] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-sky-500/15">
                    <button
                      type="button"
                      onClick={resetModal}
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
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5" />
                          <span>Submit Application</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

