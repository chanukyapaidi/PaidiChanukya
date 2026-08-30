import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#0a0a0c]"
    >
      {/* Background Radial Glow & Ambient Halo */}
      <div className="absolute inset-0 bg-orange-halo pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#ff5500]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#ff5500]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 my-auto">
        <div className="max-w-4xl space-y-6">
          
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="text-zinc-300">Aspiring Software Development Engineer</span>
              <span className="w-5 h-[2px] bg-[#ff5500] rounded-full" />
            </div>

            {/* Big Headline with Orange Highlight */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.02]">
              Paidi <span className="text-[#ff5500] drop-shadow-[0_0_30px_rgba(255,85,0,0.35)]">Chanukya</span>
            </h1>

            {/* Paragraph Summary */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl font-normal">
              {personalInfo.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="btn-orange-pill inline-flex items-center gap-3 px-7 py-4 text-base font-bold tracking-wide group"
              >
                <span>View My Work</span>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </a>

              <a
                href="#contact"
                className="btn-outline-pill inline-flex items-center gap-2 px-7 py-4 text-base font-semibold tracking-wide"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-full bg-zinc-900/90 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#ff5500] hover:bg-[#ff5500]/10 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-full bg-zinc-900/90 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#ff5500] hover:bg-[#ff5500]/10 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email"
                  className="w-11 h-11 rounded-full bg-zinc-900/90 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#ff5500] hover:bg-[#ff5500]/10 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


