import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill out all fields before submitting.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-28 relative border-t border-white/10 bg-[#0c0c0f] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#ff5500]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Tag matching reference design */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-semibold tracking-widest uppercase mb-8"
        >
          <span className="text-[#ff5500]">GET IN TOUCH</span>
          <span className="w-5 h-[2px] bg-[#ff5500] rounded-full" />
        </motion.div>

        {/* Typographic Headline */}
        <div className="mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] max-w-4xl"
          >
            Let's build something <br />
            <span className="text-[#ff5500] drop-shadow-[0_0_25px_rgba(255,85,0,0.3)]">extraordinary.</span>
          </motion.h2>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8 font-mono-code"
          >
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#ff5500] font-bold block">
                  EMAIL DIRECTLY
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-lg font-bold text-white hover:text-[#ff5500] transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#ff5500]" />
                  {personalInfo.email}
                </a>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#ff5500] font-bold block">
                  PHONE / WHATSAPP
                </span>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="text-base font-semibold text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#ff5500]" />
                  {personalInfo.phone}
                </a>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#ff5500] font-bold block">
                  LOCATION
                </span>
                <p className="text-sm font-medium text-zinc-400 inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#ff5500]" />
                  {personalInfo.location}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 block">
                CONNECT ON SOCIALS
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-[#ff5500] hover:text-[#ff5500] text-xs font-mono-code text-zinc-300 transition-all"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-[#ff5500] hover:text-[#ff5500] text-xs font-mono-code text-zinc-300 transition-all"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 card-dark p-8 sm:p-10 rounded-2xl border border-zinc-800/80"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-mono-code uppercase tracking-widest text-zinc-400">
                  Your Name <span className="text-[#ff5500]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Paidi Chanukya"
                  className="w-full px-4 py-3 bg-[#0a0a0c] border border-zinc-800 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#ff5500] transition-colors font-mono-code"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-mono-code uppercase tracking-widest text-zinc-400">
                  Your Email Address <span className="text-[#ff5500]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="chanupaidi123@gmail.com"
                  className="w-full px-4 py-3 bg-[#0a0a0c] border border-zinc-800 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#ff5500] transition-colors font-mono-code"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-mono-code uppercase tracking-widest text-zinc-400">
                  Message <span className="text-[#ff5500]">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Chanukya, I saw your portfolio and would like to discuss..."
                  className="w-full px-4 py-3 bg-[#0a0a0c] border border-zinc-800 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#ff5500] transition-colors font-mono-code resize-none"
                />
              </div>

              {/* Status Banner */}
              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono-code flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  {errorMessage}
                </div>
              )}

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/30 text-zinc-200 text-xs font-mono-code space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#ff5500]">
                    <Check className="w-4 h-4 shrink-0" />
                    Message submitted successfully!
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    Thank you for reaching out. I will get back to you shortly!
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-orange-pill group w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-mono-code font-bold uppercase tracking-wider disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    Send Message
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

