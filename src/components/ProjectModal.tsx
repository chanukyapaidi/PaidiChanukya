import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, AlertCircle, Check } from 'lucide-react';
import type { Project } from '../types';
import { ProjectVisual } from './ProjectVisuals';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Dark Blurred Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-lg"
        />

        {/* Modal Content Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-[#09090b] border border-white/15 rounded-xl shadow-2xl overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-4 bg-[#09090b]/95 border-b border-white/10 backdrop-blur-md font-mono-code text-xs">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-zinc-900 border border-white/10 text-zinc-300 uppercase tracking-widest">
                {project.category}
              </span>
              <span className="text-zinc-500 uppercase tracking-widest hidden sm:inline">CASE STUDY</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            {/* Visual Container */}
            <div className="rounded-lg overflow-hidden border border-white/10">
              <ProjectVisual type={project.visualType} />
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1 font-mono-code">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm font-semibold text-zinc-400">
                {project.subtitle}
              </p>
            </div>

            {/* Academic Disclaimer Box if present */}
            {project.disclaimer && (
              <div className="p-4 rounded-md bg-zinc-950 border border-white/15 flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <p className="text-xs text-zinc-400 font-mono-code leading-relaxed">
                  {project.disclaimer}
                </p>
              </div>
            )}

            {/* Detailed Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono-code uppercase tracking-widest text-zinc-500">
                OVERVIEW
              </h4>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono-code uppercase tracking-widest text-zinc-500">
                KEY FEATURES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded bg-zinc-950 border border-white/5 text-xs text-zinc-300 font-mono-code"
                  >
                    <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Stack Breakdown */}
            {(project.frontendTech || project.backendTech || project.externalApis) && (
              <div className="p-5 rounded-lg bg-zinc-950 border border-white/10 space-y-4 font-mono-code">
                <h4 className="text-xs uppercase tracking-widest text-zinc-400">
                  SYSTEM STACK BREAKDOWN
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  {project.frontendTech && (
                    <div className="space-y-1">
                      <span className="text-zinc-500 block">FRONTEND</span>
                      <p className="text-zinc-200">{project.frontendTech.join(' · ')}</p>
                    </div>
                  )}
                  {project.backendTech && (
                    <div className="space-y-1">
                      <span className="text-zinc-500 block">BACKEND</span>
                      <p className="text-zinc-200">{project.backendTech.join(' · ')}</p>
                    </div>
                  )}
                  {project.externalApis && (
                    <div className="space-y-1">
                      <span className="text-zinc-500 block">APIS & CLOUD</span>
                      <p className="text-zinc-200">{project.externalApis.join(' · ')}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* All Technologies */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono-code uppercase tracking-widest text-zinc-500">
                ALL TECHNOLOGIES & TOOLS
              </h4>
              <div className="text-xs font-mono-code text-zinc-300 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded bg-zinc-900 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="sticky bottom-0 z-20 flex items-center justify-end gap-4 px-6 sm:px-8 py-4 bg-[#09090b]/95 border-t border-white/10 backdrop-blur-md">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded text-xs font-mono-code uppercase tracking-wider text-zinc-300 border border-white/15 hover:border-white hover:text-white transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              Source Code (GitHub)
            </a>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded text-xs font-mono-code uppercase tracking-wider bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
              >
                Live Demo
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded text-xs font-mono-code uppercase tracking-wider text-zinc-500 bg-zinc-950 border border-white/5">
                Live Link Configurable
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
