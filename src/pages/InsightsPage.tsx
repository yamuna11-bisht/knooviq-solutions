import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { INSIGHTS_ARTICLES } from '../data/knooviqData';
import { subscribeNewsletter } from '../lib/supabase';

export const InsightsPage: React.FC<{ onOpenContact: (topic?: string) => void }> = ({ onOpenContact }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterMsg, setNewsletterMsg] = useState('');

  const categories = ['ALL', 'SAP S/4HANA', 'Digital Transformation', 'AI & Automation'];

  const filteredArticles = INSIGHTS_ARTICLES.filter((article: any) => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((t: string) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCat = selectedCategory === 'ALL' || article.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterMsg('Please provide a valid corporate email.');
      return;
    }
    const res = await subscribeNewsletter(newsletterEmail, 'INSIGHTS_PAGE');
    setNewsletterMsg(res.error || 'Subscribed successfully to Executive Briefings.');
    if (res.success) setNewsletterEmail('');
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50 dark:bg-[#050B17] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#00A3E0]/30 bg-white dark:bg-[#0B1528] px-3.5 py-1.5 shadow-sm mb-6">
          <Sparkles className="h-3.5 w-3.5 text-[#00A3E0]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] dark:text-cyan-300">
            Thought Leadership & Research
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A1931] dark:text-white leading-tight mb-6">
          KNOOVIQ Enterprise{' '}
          <span className="text-gradient-cyan">Insights & Whitepapers</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Deep architectural research, S/4HANA migration frameworks, and Clean Core best practices curated by our enterprise advisory practice.
        </p>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-[#0B1528]/80 border border-slate-200 dark:border-sky-500/20 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#00A3E0]/15 dark:bg-sky-500/20 text-[#00A3E0] dark:text-cyan-300 border border-[#00A3E0] dark:border-sky-400/50'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search research topics..."
              className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] pl-10 pr-4 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art, idx) => (
            <motion.article
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-3xl border border-slate-200 dark:border-sky-500/20 bg-white dark:bg-[#0B1528]/85 p-8 flex flex-col justify-between shadow-sm dark:shadow-xl hover:border-[#00A3E0] transition-all hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="rounded-full bg-[#00A3E0]/10 border border-[#00A3E0]/30 px-3 py-1 text-[10px] font-bold text-[#00A3E0] dark:text-cyan-300">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {art.excerpt}
                </p>

                <div className="space-y-2 mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-[#050B17]/60 border border-slate-200 dark:border-sky-500/15">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A3E0] block mb-1">
                    Key Practice Takeaways
                  </span>
                  {art.keyTakeaways.map((takeaway: string, tIdx: number) => (
                    <div key={tIdx} className="flex items-start gap-2 text-[11px] text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#00A3E0] flex-shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-sky-500/15 mb-6">
                  {art.tags.map((tag: string, tagIdx: number) => (
                    <span key={tagIdx} className="text-[10px] font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-[#050B17] px-2 py-0.5 rounded-md border border-slate-200 dark:border-sky-500/15">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onOpenContact(`Whitepaper Discussion: ${art.title}`)}
                  className="w-full rounded-xl bg-slate-100 dark:bg-[#050B17] hover:bg-[#00A3E0] dark:hover:bg-sky-600 text-slate-800 dark:text-sky-200 hover:text-white py-2.5 text-xs font-bold uppercase tracking-wider border border-slate-200 dark:border-sky-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Discuss Framework with Author</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-sky-500/30 bg-gradient-to-r from-[#0A1931] via-[#0B1B3D] to-[#0A1931] p-8 sm:p-12 text-center shadow-2xl space-y-4 text-white">
          <h3 className="font-display text-2xl font-bold text-white">
            Subscribe to KNOOVIQ Technical Whitepapers
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Get early access to our quarterly S/4HANA benchmarking reports and migration guides.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-2 pt-2">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="enterprise.email@domain.com"
              className="flex-1 rounded-xl border border-sky-500/25 bg-[#050B17] px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
            />
            <button
              type="submit"
              className="glow-btn px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white"
            >
              Subscribe
            </button>
          </form>

          {newsletterMsg && (
            <p className="text-xs text-cyan-300 font-medium pt-2">{newsletterMsg}</p>
          )}
        </div>
      </section>
    </div>
  );
};

